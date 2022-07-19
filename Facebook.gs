function postFacebook(url) {
  var sapa = getTime();
  var emot = scramble(robot.emot)[0];
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
}
