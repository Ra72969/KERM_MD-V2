//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "237656520674";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID |
  eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BqZjJ4NXIwOVJTUFdyR2ZTa1pyZExhL1dmYzFPYVB0OURtTjJDMUZFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWtEVUtod0JyY21XQWRqT2ppMVZHcUlwTkhWRjdnM0lVYTFPUFlnRXhGRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTE5oS2ZGaGVZZmRXSkxnaUM1cmtTN3pGUUc0amZhWVFzLzdja0w0eWtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJla29SNjE3NGpGb2VUVm1MM0E2NUxSTzU4a3pCWWRjbjR6aGRBKzY3VHpZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNbTQxblpkOWx6YitHeUVpbEwvalZpWXlEMzRLU09VL09OeVVEK0NNR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIZ3h0R05WNmR6a2NLWEJuNXZJVncyeGpyVHBHeGxhS1J4enBOYnd3VEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUR0bGxGMXU5aDVRWVNHWS9RV0NMWGV1bnVoWUoxOFdFckNKNm0rdDRFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakpHd0FQdDh6czBqZUIvZVdXVTJKQllFNGFPU2U3UWZxbVloZ1BsZmMyST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ1RlFvVEhtYzJiT2tDcStWVW9UeUlRN0tDRUNneExWejRBT0d4YXlLTnJUOWR5S2FNTWJSQlUzeW5IL3lTM245TUxCOWEvcXlIYmh5aVR2SEFzTmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6IjdGUW1YUHorNVUrRXFMY2RObEdCM0M1MWhZeEZHRWFiekxmM1F5S3h4a009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InQ3REV3M2ljVGQ2VDZaaXV1b01nVGciLCJwaG9uZUlkIjoiZmUzZTAyNjctMGU4NC00MjRmLTk1YjctNmZjZGE3MWMwOTY1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis0Mm9CeC9NRXJHRHR0dng1cWsyYk01ZUx0az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwN1hwTHU5VkJaSmNEdEZ5WWw0aTZOZGhUVms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNUxTS1A0V0IiLCJtZSI6eyJpZCI6IjE4Mjk3Njc3MzE2OjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0txMG5jb0ZFTGlZM3JZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5pNkZZSzE2b2xCaHg5NHdDL2ZZdU1uWEVnYUkvU1ZjN3oxNzJnV3RCa2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjA3UU9tcUFFdDAwb29JY3BaM2Jzd0JxYytERXc4NG0rd21MVit0Q3NGbGFoQWZxRzRZS0tCbkl4Y2s4LzE2b0U3UDBiWDMwbXQ0RGNQNDA0aS9QUkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqbmQrMzJLZENBcTVlclNSK05lajhUdTFzU2xtVHlaeHZmMWNuVk0zQ2dHUHRJb1BkaG5vM3I4SmZ1Tk41VUJnY1VTQTBBN3MvSXc3b3crU1ZDbXZqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4Mjk3Njc3MzE2OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFl1aFdDdGVxSlFZY2ZlTUF2MzJMakoxeElHaVAwbFhPODllOW9GclFaSCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTQwMjE4MH0=
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!"
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "𝐑𝐚𝐠𝐧𝐚𝐫𝐠𝐫𝐢𝐦𝐥𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜18297677316⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
