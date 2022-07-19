const userProperties = PropertiesService.getUserProperties();
const fb_token = userProperties.getProperty('FB_TOKEN');
const fb_id = userProperties.getProperty('FB_ID');
const ig_business_id = userProperties.getProperty('IG_BUSINESS_ID');
const ig_business_token = userProperties.getProperty('IG_BUSINESS_TOKEN');
const app_id = userProperties.getProperty('APP_ID');

var robot = {
  tkn: fb_token,
  igBusinessID: ig_business_id,
  appID: app_id,
  // Dhohir Pradana BOT - Generated on 18 July 2022
  igBusinessToken: ig_business_token,
  token: fb_token,
  fbid:
    fb_id,
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