const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347064746124";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_59_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgODcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICA0NixcbiAgICAgICAgMTI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQwLFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk3LFxuICAgICAgICA3LFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTczLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9jSyt1aER4UGFkNW9RV0dvSUFzelZTczFudnBsNlIyY0hHa1ZzbzFOcTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRpaUdBemloVFptM0h6T3k3aE1GaUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2U2M2Y5Y2UtODY1Yy00YmMzLWI0MzUtMzk0YzlkMDFjZDM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDE5MixcbiAgICAgIDIyOSxcbiAgICAgIDg4LFxuICAgICAgMTU1LFxuICAgICAgMTU0LFxuICAgICAgMzIsXG4gICAgICAyMDUsXG4gICAgICAyMzksXG4gICAgICAxMDYsXG4gICAgICAxNTksXG4gICAgICAxNTQsXG4gICAgICAyMCxcbiAgICAgIDQwLFxuICAgICAgMTc4LFxuICAgICAgOTYsXG4gICAgICAyNTMsXG4gICAgICAxMTAsXG4gICAgICA4OCxcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICAxNTcsXG4gICAgICAyMDEsXG4gICAgICAxNzQsXG4gICAgICAyNyxcbiAgICAgIDE1NCxcbiAgICAgIDEwMyxcbiAgICAgIDIzNCxcbiAgICAgIDIxOSxcbiAgICAgIDE0MCxcbiAgICAgIDYxLFxuICAgICAgMTMsXG4gICAgICAxMzEsXG4gICAgICAxNzAsXG4gICAgICAxMDgsXG4gICAgICAyMDMsXG4gICAgICAxOTAsXG4gICAgICAxMTksXG4gICAgICAxNTcsXG4gICAgICAxOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzVIVjVRUERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjQ3NDYxMjQ6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLDinp6eW3DuMOxw6p5XCIsXG4gICAgXCJsaWRcIjogXCIyNDU1MjIyOTIwNjAyNTc6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG0rL2JJR0VNUFQxclFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXT0xiNW43ZjlFWW4wcW5yWlZobXpiSndhYThJQkh0SStiZmluVUR3L2hZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlh2VGVoeFhJZU1NY29SWVd1THFWejNhVjdISE9WWjFkODliVVA2cmM4dEo3SlVUM3lPRkpUTW5mblMvak5XaGtFLzVoUzVDQjBBaHV0NmdTb1A1cENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNEQ1JGTXgxYnBKTWdCKzNxczFnWkFKTlJKZWJ6dmIrSE5QczhOY0plb1orbXZldVBldHl6TVBrR0JqMFJ2eitiQXBFL3Nzek5mcWhjcTdvSHZ6R2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjQ3NDYxMjQ6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDg0MzU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTE5CXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTkIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5aW0wYTNWRUtSSlRzalZ1NFZxbFVvcWlOT1RXYnpPaWwrNms0cVZXamtZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTc1MjYzOTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Êzzymøñêy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API_KEY: process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
