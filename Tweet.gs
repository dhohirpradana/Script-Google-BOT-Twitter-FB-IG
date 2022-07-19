function postTweetFacebookInstagram() {
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
    let url = `https://api.screenshotmachine.com/?key=YOUR_KEY_HERE&url=https://twitter.com/YOUR_TWITTER_USERNAME_HERE/status/` + response.id_str + `&device=phone&dimension=720x1280&delay=2000&cacheLimit=1&crop=0,0,720,380`;
    // Facebook
    postFacebook(url)
    // Instagram
    postInstagram(url)
  }