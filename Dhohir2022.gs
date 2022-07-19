// masukkan token bot yang didapatkan dari @botfather
var token = "YOUR_BOT_FATHER_TOKEN_HERE";

// url bot api
var url = "https://api.telegram.org/bot" + token + "/";

// https://api.telegram.org/botYOUR-BOT-FATHER-TOKEN/setwebhook?url=YOUR-GOOGLE-APP-SCRIPT-WEB-APP-URL

// fungsi untuk mengirim pesan
function sendMessage(id, text) {
  var options = {
    "method": "POST",
    "contentType": "application/json",
    "payload": JSON.stringify({
      "method": "sendMessage",
      "chat_id": id,
      "text": text,
      "parse_mode": "HTML"
    })
  }

  // fetch data
  var response = UrlFetchApp.fetch(url, options);

  // cek respon api
  if (response.getResponseCode() == 200) {
    return JSON.parse(response.getContentText());
  }

  return false;
}

function doGet(e) {
  return HtmlService.createHtmlOutput("Hanya doPost yang di proses!")
}

function doPost(e) {
  // memastikan hanya tipe JSON yang diterima
  if (e.postData.type == "application/json") {
    var content = e.postData.contents;

    // parsing data yang masuk
    var update = JSON.parse(content);

    // jika data valid maka permintaan akan diproses
    if (update) {
      return prosesPesan(update);
    }
  }

  return false;
}

// fungsi utama untuk memproses permintaan yang masuk
function prosesPesan(update) {

  // deteksi apakah ada permintaan yang masuk
  if (update.message) {

    // penyederhanaan chat id
    var id = update.message.chat.id;

    // jika permintaan berupa pesan text
    if (update.message.text) {

      // penyederhanaan permintaan text
      var text = update.message.text;

      // jika user mengetik /start
      if (/^\/start$/i.test(text)) {
        var balas = "Halo! Resepsionis bot telah aktif!";
        return sendMessage(id, balas)
      }

      // jika user mengetik /ping
      if (/^\/ping/i.test(text)) {
        userProperties.setProperty('FB_TOKEN',);
        var waktuPesan = update.message.date;
        var waktuSekarang = new Date().getTime() / 1000;
        var waktu = Math.abs(waktuSekarang - waktuPesan).toFixed(2);
        var balas = "Ping Juga!!! \nDi proses dalam " + waktu + " detik."
        return sendMessage(id, balas);
      }

      // jika user mengetik /fb_token
      if (/^\/facebook_token/i.test(text)) {
        if (update.message.from.username == "dhohir_pradana") {
          var token = text.split(" ")[1];
          userProperties.setProperty('FB_TOKEN', token);
          var waktuPesan = update.message.date;
          var waktuSekarang = new Date().getTime() / 1000;
          var waktu = Math.abs(waktuSekarang - waktuPesan).toFixed(2);
          var balas = "Token Facebook Berhasil di SET!!! \n" + token + "\nDi proses dalam " + waktu + " detik."
          return sendMessage(id, balas);
        }
      }

      if (/^\/facebook_id/i.test(text)) {
        if (update.message.from.username == "dhohir_pradana") {
          var fbId = text.split(" ")[1];
          userProperties.setProperty('FB_ID', fbId);
          var waktuPesan = update.message.date;
          var waktuSekarang = new Date().getTime() / 1000;
          var waktu = Math.abs(waktuSekarang - waktuPesan).toFixed(2);
          var balas = "ID Facebook Berhasil di SET!!! \n" + fbId + "\nDi proses dalam " + waktu + " detik."
          return sendMessage(id, balas);
        }
      }

      if (/^\/instagram_business_id/i.test(text)) {
        if (update.message.from.username == "dhohir_pradana") {
          var ibID = text.split(" ")[1];
          userProperties.setProperty('IG_BUSINESS_ID', ibID);
          var waktuPesan = update.message.date;
          var waktuSekarang = new Date().getTime() / 1000;
          var waktu = Math.abs(waktuSekarang - waktuPesan).toFixed(2);
          var balas = "ID Instagram Business Berhasil di SET!!! \n" + ibID + "\nDi proses dalam " + waktu + " detik."
          return sendMessage(id, balas);
        }
      }

      if (/^\/instagram_business_token/i.test(text)) {
        if (update.message.from.username == "dhohir_pradana") {
          var igbt = text.split(" ")[1];
          userProperties.setProperty('IG_BUSINESS_TOKEN', igbt);
          var waktuPesan = update.message.date;
          var waktuSekarang = new Date().getTime() / 1000;
          var waktu = Math.abs(waktuSekarang - waktuPesan).toFixed(2);
          var balas = "Token Instagram Business Berhasil di SET!!! \n" + igbt + "\nDi proses dalam " + waktu + " detik."
          return sendMessage(id, balas);
        }
      }

      if (/^\/app_id/i.test(text)) {
        if (update.message.from.username == "dhohir_pradana") {
          var appID = text.split(" ")[1];
          userProperties.setProperty('APP_ID', appID);
          var waktuPesan = update.message.date;
          var waktuSekarang = new Date().getTime() / 1000;
          var waktu = Math.abs(waktuSekarang - waktuPesan).toFixed(2);
          var balas = "App ID Berhasil di SET!!! \n" + appID + "\nDi proses dalam " + waktu + " detik."
          return sendMessage(id, balas);
        }
      }

      if (/^\/me_secret/i.test(text)) {
        if (update.message.from.username == "dhohir_pradana") {
          var waktuPesan = update.message.date;
          var waktuSekarang = new Date().getTime() / 1000;
          var waktu = Math.abs(waktuSekarang - waktuPesan).toFixed(2);
          var balas = "Facebook Token \n" + fb_token + "\n\nFacebook ID \n" + fb_id + "\n\nInstagram Business ID \n" + ig_business_id + "\n\nInstagram Business Token \n" + ig_business_token + "\n\nApp ID \n" + app_id + "\n\nDi proses dalam " + waktu + " detik."
          return sendMessage(id, balas);
        }
      }

      if (/^\/me/i.test(text)) {
        var waktuPesan = update.message.date;
        var waktuSekarang = new Date().getTime() / 1000;
        var waktu = Math.abs(waktuSekarang - waktuPesan).toFixed(2);
        var balas = "Message \n" + JSON.stringify(update.message.from) + "\n\nDi proses dalam " + waktu + " detik."
        return sendMessage(id, balas);
      }
    }

    // jika permintaan berupa member masuk
    if (update.message.new_chat_members) {

      // buat variabel baru untuk member masuk
      var userBaru = update.message.new_chat_members[0];

      // definisikan nama user yang masuk
      var nama = userBaru.first_name;

      // jika punya last name, kita tambahkan juga
      if (userBaru.last_name) {
        nama += " " + userBaru.last_name;
      }

      var balas = "Selamat datang " + nama + "! Semoga harimu menyenangkan!";
      return sendMessage(id, balas);
    }
  }

  return false;
}
