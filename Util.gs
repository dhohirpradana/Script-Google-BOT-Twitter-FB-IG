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

function scramble(naon) {
  var a = naon.sort(function () { return 0.5 - Math.random() });
  a.reverse();
  a = a.sort(function () { return 0.5 - Math.random() });
  return a;
}

function getQuotes() {
  var a = UrlFetchApp.fetch("https://api.quotable.io/random", {
    muteHttpExceptions: true,
    method: "get"
  });
  var b = Utilities.jsonParse(a.getContentText());
  return b;
}

function translate(text) {
  var id = LanguageApp.translate(text, 'en', 'id');
  Logger.log(id);
  return id;
}