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