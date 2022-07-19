var robot = {
  tkn: "YOUR_TOKEN",
  igBusinessID: "YOUR_IG_BUSINESS_ID",
  appID: "YOUR_APP_ID",
  // Dhohir Pradana BOT - Generated on 18 July 2022
  igBusinessToken: "YOUR_IG_BUSINESS_TOKEN",
  ytKey: "YOUR_YT_KEY",
  grub: ["YOUR_GRUB_ID"],
  token: "YOUR_TOKEN-2",
  fbid:
    "YOUR_FB_ID",
  emot: ['🔥', '♖', '✿', '♠', '💞', '★', '🎀', '🌷', '✌', '🍭', '😾', '🐟', '♪', '⛵', '👤', '🐳', '💙', '👣', '🍫', '💎', '♕', 'ඏ', '🐤', '●', '◆', '◈', '❖', '《', '》', '⫷', '⫸', '✓', '✔', 'ツ', '™', '©', '®', '✤', '⚜', '☘', '☄', '✍']
};

// reactions: ["LIKE", "LOVE", "CARE", "HAHA", "SAD", "ANGRY", "WOW"],

var twitterKeys = {
  TWITTER_CONSUMER_KEY: "YOUR_CONSUMER_KEY",
  TWITTER_CONSUMER_SECRET: "YOUR_CONSUMER_SECRET",
  TWITTER_ACCESS_TOKEN: "YOUR_ACCESS_TOKEN",
  TWITTER_ACCESS_SECRET: "YOUR_ACCESS_SECRET",
}

var props = PropertiesService.getScriptProperties();
props.setProperties(twitterKeys);
var params = new Array(0);
var service = new Twitterlib.OAuth(props);

function postTweet() {
  var sapa = getTime();
  var emot = scramble(robot.emot)[0];
  let quotes = getQuotes();
  if (!service.hasAccess()) {
    console.log("Authentication Failed");
  } else {
    var status = translate(quotes['content']) + '\n𝒷𝓎 ' + quotes['author'];
    try {
      var response = service.sendTweet(status, params);
      console.log('twitter status id: ', response.id_str);
    } catch (e) {
      console.log(e)
    }
  }
  let url = `https://api.screenshotmachine.com/?key=YOUR_KEY&url=https://twitter.com/dhohirpradana_/status/` + response.id_str + `&device=phone&dimension=720x1280&delay=2000&cacheLimit=1&crop=0,0,720,380`;
  // Facebook
  var upload = fbRequest("https://graph.facebook.com/me/photos", {
    muteHttpExceptions: true,
    method: "post",
    message: sapa + ' ' + emot,
    url: url,
    access_token: robot.token
  });
  console.log('facebook post: ', upload);
  fbRequest("https://graph.facebook.com/" + upload.id + "/likes", {
    muteHttpExceptions: true,
    method: "post",
    access_token: robot.token
  });
  postInstagram(url)
}

function randomPict() {
  var pict = UrlFetchApp.fetch("https://random.imagecdn.app/v1/image?width=1080&height=1350", {
    muteHttpExceptions: true,
    method: "get"
  }).getContentText();
  console.log(pict);
  return pict;
}

function postInstagram(url) {
  // Instagram
  var createIG = fbRequest("https://graph.facebook.com/" + robot.igBusinessID + "/media", {
    muteHttpExceptions: true,
    method: "post",
    image_url: url,
    access_token: robot.igBusinessToken
  });
  // console.log(createIG);
  var publishIG = fbRequest("https://graph.facebook.com/" + robot.igBusinessID + "/media_publish", {
    muteHttpExceptions: true,
    method: "post",
    creation_id: createIG.id,
    access_token: robot.igBusinessToken
  });
  console.log('instagram publish id: ', publishIG);
}

function fbRequest(almt, prop) {
  var a = UrlFetchApp.fetch(almt, {
    muteHttpExceptions: true,
    method: "post",
    payload: prop
  });
  var b = Utilities.jsonParse(a.getContentText());
  return b;
}

function requests(almt, prop) {
  var a = UrlFetchApp.fetch(almt, {
    muteHttpExceptions: true,
    method: "post",
    payload: prop
  });
  var b = Utilities.jsonParse(a.getContentText());
  return b;
}

function targetFeed() {
  // var dateCET = getDate(7);
  // var jam = dateCET.getHours();
  // if (jam < 5 || jam > 22) {
  //   console.log("Tidur");
  // } else {
  // const rndInt = randomIntFromInterval(1, 3)
  // console.log(rndInt)
  // if (rndInt < 2) {
  var feeds = UrlFetchApp.fetch("https://graph.facebook.com/8883/feed?access_token=" + robot.tkn + "&fields=id", {
    muteHttpExceptions: true,
    method: "get"
  });
  var feed = Utilities.jsonParse(feeds);
  console.log(feed.data[0].id);

  var postNow = requests("https://graph.facebook.com/me/feed", {
    muteHttpExceptions: true,
    headers: {
      'authority': 'graph.facebook.com',
      'cache-control': 'max-age=0',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.66 Safari/537.36',
    },
    method: "post",
    published: 0,
    link: "https://mbasic.facebook.com/" + feed.data[0].id,
    access_token: robot.tkn
  });
  console.log(postNow);

  var post = Utilities.jsonParse(postNow);
  console.log(post)
  // }
  // }
}

function getGroupFeed() {
  let g = ['3027959020795739', '266307637716615', '439196427304770', '120500426682154', '2534569223355215'];
  g = scramble(g)[0];
  var groupFeed = UrlFetchApp.fetch("https://graph.facebook.com/" + g + "/feed?fields=id&access_token=" + robot.tkn + "&limit=3", {
    muteHttpExceptions: true,
    method: "get"
  })
  return Utilities.jsonParse(groupFeed).data;
}

function getMeAccounts() {
  var accounts = UrlFetchApp.fetch("https://graph.facebook.com/me/accounts?fields=access_token,name&access_token=" + robot.token, {
    muteHttpExceptions: true,
    method: "get"
  })
  console.log(accounts)
  var json = Utilities.jsonParse(accounts);
  console.log(json.data);
  return json.data;
}

function translate(text) {
  var id = LanguageApp.translate(text, 'en', 'id');
  Logger.log(id);
  return id;
}

function scramble(naon) {
  var a = naon.sort(function () { return 0.5 - Math.random() });
  a.reverse();
  a = a.sort(function () { return 0.5 - Math.random() });
  return a;
}

function myPagesLike(id) {
  var accounts = getMeAccounts();
  for (var i = 0; i < accounts.length; i++) {
    const rndInt = randomIntFromInterval(1, 4)
    var quotes = getQuotes();
    var contentId = translate(quotes['content']);
    var sapa = getTime();
    var emot = scramble(robot.emot)[0];
    var like = UrlFetchApp.fetch("https://graph.facebook.com/" + id + "/likes?access_token=" + accounts[i].access_token, {
      muteHttpExceptions: true,
      method: "post"
    });
    console.log(like.toString());
    Utilities.sleep(1300);
    var share = UrlFetchApp.fetch("https://graph.facebook.com/me/feed?link=https://www.facebook.com/" + id + "&access_token=" + accounts[i].access_token, {
      muteHttpExceptions: true,
      method: "post"
    });
    console.log(share.toString());
    if (rndInt < 3) {
      Utilities.sleep(rndInt * 1000);
      var comm = fbRequest("https://graph.facebook.com/" + id + "/comments", {
        muteHttpExceptions: true,
        method: "post",
        message: sapa + ' ' + emot + '\n' + contentId + '\n𝒷𝓎 ' + quotes['author'],
        access_token: accounts[i].access_token
      });
      console.log(comm.toString());
    }
    if (i != accounts.length - 1) {
      Utilities.sleep(2000);
    }
  }
}

function getDate(offset) {
  var now = new Date();
  var hour = 60 * 60 * 1000;
  var min = 60 * 1000;
  return new Date(now.getTime() + (now.getTimezoneOffset() * min) + (offset * hour));
}

function getTime() {
  var dateCET = getDate(7);
  return (dateCET.getHours() >= 4 && dateCET.getHours() < 10) ? "Selamat Pagi" : (dateCET.getHours() >= 10 && dateCET.getHours() < 14) ? "Selamat Siang" : (dateCET.getHours() >= 14 && dateCET.getHours() < 19) ? "Selamat Sore" : "Selamat Malam";
}

function postYoutube() {
  var you = fbRequest("https://graph.facebook.com/" + robot.fbid + "/feed", {
    muteHttpExceptions: true,
    method: "post",
    link: "https://www.youtube.com/watch/" + robot.news,
    access_token: robot.token
  });
  Utilities.sleep(500);
  fbRequest("https://graph.facebook.com/" + you.id + "/likes", {
    muteHttpExceptions: true,
    method: "post",
    access_token: robot.token
  });
  console.log(you.id);
  myPagesLike(you.id);
}

function postNews() {
  var news = fbRequest("https://graph.facebook.com/" + robot.fbid + "/feed", {
    muteHttpExceptions: true,
    method: "post",
    message: robot.news.title + "\n\n" + robot.news.description + "\n\n" + robot.news.pubDate,
    link: robot.news.link,
    access_token: robot.token
  });
  Utilities.sleep(500);
  fbRequest("https://graph.facebook.com/" + news.id + "/likes", {
    muteHttpExceptions: true,
    method: "post",
    access_token: robot.token
  });
  console.log(news.id);
  myPagesLike(news.id);
}

function postCuaca() {
  if (robot.news[1] == undefined || robot.news[1][0]['jamCuaca'] == undefined) {
    start();
  } else {
    var cuaca = fbRequest("https://graph.facebook.com/" + robot.fbid + "/feed", {
      muteHttpExceptions: true,
      method: "post",
      message: robot.news[0] + '\n\n' + robot.news[1][0]['jamCuaca'] + '\n' + robot.news[1][0]['cuaca'] + '\n' + robot.news[1][0]['tempC'] + '°C' + '\n\n' + robot.news[1][1]['jamCuaca'] + '\n' + robot.news[1][1]['cuaca'] + '\n' + robot.news[1][1]['tempC'] + '°C' + '\n\n' + robot.news[1][2]['jamCuaca'] + '\n' + robot.news[1][2]['cuaca'] + '\n' + robot.news[1][2]['tempC'] + '°C' + '\n\n' + robot.news[1][3]['jamCuaca'] + '\n' + robot.news[1][3]['cuaca'] + '\n' + robot.news[1][3]['tempC'] + '°C',
      access_token: robot.token
    });
    Utilities.sleep(500);
    fbRequest("https://graph.facebook.com/" + cuaca.id + "/likes", {
      muteHttpExceptions: true,
      method: "post",
      access_token: robot.token
    });
    console.log(cuaca.id);
    myPagesLike(cuaca.id);
  }
}

function getYoutube() {
  var yt = UrlFetchApp.fetch("https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=ID&maxResults=50&key=" + robot.ytKey, {
    muteHttpExceptions: true,
    method: "get"
  })
  var json = Utilities.jsonParse(yt);
  var aduk = scramble(json.items)[0].id;
  console.log(aduk);
  return aduk;
}

function getNews() {
  var a = UrlFetchApp.fetch("https://api-berita-indonesia.vercel.app/antara/terbaru/", {
    muteHttpExceptions: true,
    method: "get"
  });
  var b = Utilities.jsonParse(a.getContentText());
  return b["data"]["posts"][0];
}

function getCuaca() {
  var lok = UrlFetchApp.fetch("https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json", {
    muteHttpExceptions: true,
    method: "get"
  });
  var lokJ = Utilities.jsonParse(lok.getContentText());
  var lokasi = scramble(lokJ)[0];
  var a = UrlFetchApp.fetch("https://ibnux.github.io/BMKG-importer/cuaca/" + lokasi.id + ".json", {
    muteHttpExceptions: true,
    method: "get"
  });
  var b = Utilities.jsonParse(a.getContentText());
  return [lokasi.kota, b];
}

function start() {
  var dateCET = getDate(7);
  var jam = dateCET.getHours();
  if (jam < 4 || jam > 23) {
    console.log("Tidur");
  } else {
    postNow();
    function postNow() {
      var randomInt = randomIntFromInterval(3, 3);
      // console.log(randomInt);
      robot.news =
        (randomInt == 1) ? getCuaca() : (randomInt == 2) ? getYoutube() : (randomInt == 3) ? randomPict() : getNews();
      var a = fbRequest("https://graph.facebook.com/" + robot.fbid + "/feed", {
        muteHttpExceptions: true,
        method: "get",
        limit: 1,
        fields: "id",
        access_token: robot.token
      });
      if (a && a.data && a.data.length != 0) {
        var rand = Math.floor(Math.random() * 300);
        Utilities.sleep(rand * 20);
        var post = (randomInt == 1) ?
          postCuaca() : (randomInt == 2) ?
            postYoutube() : (randomInt == 3) ?
              postPict() : postNews();
        console.log(post);
      }
    }
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getQuotes() {
  var a = UrlFetchApp.fetch("https://api.quotable.io/random", {
    muteHttpExceptions: true,
    method: "get"
  });
  var b = Utilities.jsonParse(a.getContentText());
  return b;
}

function getTahukahAnda() {
  var ta = UrlFetchApp.fetch("https://cinnabar.icaksh.my.id/api/public/daily/wiki", {
    muteHttpExceptions: true,
    method: "get"
  })
  var taData = scramble(Utilities.jsonParse(ta.getContentText()).data)[0].tahukahAnda.slice(4, -1);
  console.log(taData);
  return taData;
}

function getFeeds() {
  var dateCET = getDate(7);
  var jam = dateCET.getHours();
  if (jam < 5 || jam > 22) {
    console.log("Tidur");
  } else {
    var putaran = 0;
    gasken();
    function gasken() {
      var data = getGroupFeed();
      if (data != undefined) {
        likeCommentNow();
      } else {
        console.log('gagal mendapatkan data grub!');
      }
      function likeCommentNow() {
        var d = data[putaran]['id'];
        console.log('post id: ', d);
        var e = fbRequest("https://graph.facebook.com/" + d + "/comments", {
          muteHttpExceptions: true,
          method: "get",
          fields: "from",
          access_token: robot.token
        });
        var eData = e['data'];
        // console.log('comments: ', eData);
        var f = (eData != undefined) ? e['data'].includes(robot.fbid) : false;
        console.log('already commented: ', f);
        if (f) {
          if (putaran != 3) {
            gasken();
            putaran++;
          }
        } else {
          postCommentLikeFeed(d);
        }
      }
    }
  }
}

function postCommentLikeFeed(id) {
  const rand = randomIntFromInterval(1, 5);
  console.log('random number: ', rand);
  if (rand == 1) {
    var like = fbRequest("https://graph.facebook.com/" + id + "/likes", {
      muteHttpExceptions: true,
      method: "post",
      access_token: robot.tkn
    });
    console.log('like => ', like);
  }
  if (rand < 4) {
    var comm = fbRequest("https://graph.facebook.com/" + id + "/comments", {
      muteHttpExceptions: true,
      method: "post",
      message: 'Anybody, you first then me 🙏\nm.facebook.com/8883',
      access_token: robot.tkn
    });
    console.log('comment data: ', comm);
  }
}

