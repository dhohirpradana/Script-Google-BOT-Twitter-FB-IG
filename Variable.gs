var robot = {
  tkn: "YOUR_TOKEN_HERE",
  igBusinessID: "YOUR_IG_BUSINESS_ID_HERE",
  appID: "YOUR_APP_ID_HERE",
  // Dhohir Pradana BOT - Generated on 18 July 2022
  igBusinessToken: "YOUR_IG_BUSINESS_TOKEN_HERE",
//   ytKey: "YOUR_YT_KEY_HERE",
//   grub: ["100044296486382", "100068922445885"],
  token: "YOUR_TOKEN_HERE",
  fbid:
    "YOUR_FB_ID_HERE",
  emot: ['🔥', '♖', '✿', '♠', '💞', '★', '🎀', '🌷', '✌', '🍭', '😾', '🐟', '♪', '⛵', '👤', '🐳', '💙', '👣', '🍫', '💎', '♕', 'ඏ', '🐤', '●', '◆', '◈', '❖', '《', '》', '⫷', '⫸', '✓', '✔', 'ツ', '™', '©', '®', '✤', '⚜', '☘', '☄', '✍']
};

// reactions: ["LIKE", "LOVE", "CARE", "HAHA", "SAD", "ANGRY", "WOW"],

var twitterKeys = {
  TWITTER_CONSUMER_KEY: "YOUR_CONSUMER_KEY_HERE",
  TWITTER_CONSUMER_SECRET: "YOUR_CONSUMER_SECRET_HERE",
  TWITTER_ACCESS_TOKEN: "YOUR_ACCESS_TOKEN_HERE",
  TWITTER_ACCESS_SECRET: "YOUR_ACCESS_SECRET_HERE",
}

var props = PropertiesService.getScriptProperties();
props.setProperties(twitterKeys);
var params = new Array(0);
var service = new Twitterlib.OAuth(props);