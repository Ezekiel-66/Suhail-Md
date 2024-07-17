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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_34_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDMyLFxuICAgICAgICA3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDY2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI5LFxuICAgICAgICA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICA2MSxcbiAgICAgICAgODksXG4gICAgICAgIDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgNDksXG4gICAgICAgIDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOCxcbiAgICAgICAgOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieXBWdmFnQWxHUXJrTHo2eDEvekRKUjJNNnFjYzNOQS9zYi9tdkd4UkkwUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUVRJbE04eU1TaC1XeF9TUlB2YnZxZ1wiLFxuICBcInBob25lSWRcIjogXCJiNDFkMzlkZS1kOTdhLTRiMWItYTM3Ni04MjM3MjE4ZjkwOGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMTgyLFxuICAgICAgMjA3LFxuICAgICAgODEsXG4gICAgICA1MixcbiAgICAgIDE1MixcbiAgICAgIDIwOCxcbiAgICAgIDIyLFxuICAgICAgMTk1LFxuICAgICAgMTM0LFxuICAgICAgNzcsXG4gICAgICAyMzAsXG4gICAgICAxMDYsXG4gICAgICA4NCxcbiAgICAgIDE2MixcbiAgICAgIDIzNyxcbiAgICAgIDcwLFxuICAgICAgODgsXG4gICAgICA2LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgOTAsXG4gICAgICA2OSxcbiAgICAgIDEwMixcbiAgICAgIDEyNCxcbiAgICAgIDg1LFxuICAgICAgOTEsXG4gICAgICA1MixcbiAgICAgIDExMixcbiAgICAgIDE5OSxcbiAgICAgIDI0MixcbiAgICAgIDE0NCxcbiAgICAgIDM4LFxuICAgICAgNTgsXG4gICAgICAyMjksXG4gICAgICAxNTcsXG4gICAgICAxLFxuICAgICAgODAsXG4gICAgICAyMzUsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEdXRDU2N0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjQ3NDYxMjQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLDinp6eW3DuMOxw6p5XCIsXG4gICAgXCJsaWRcIjogXCIyNDU1MjIyOTIwNjAyNTc6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG0rL2JJR0VKMkI0TFFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXT0xiNW43ZjlFWW4wcW5yWlZobXpiSndhYThJQkh0SStiZmluVUR3L2hZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9ueE5MbVdFNHFna1AvUXcvemxnSkJUYkVlSTZ6eFdpR2JTcEpnZi8wRG1VZnVlZE9mdXA2S0tOREc4c0tHMGtJdkZlZVp0bXlKK0NzMnpMTHdSV0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldIc1dUbXZaNWhxZkNnVVR0eS9qNE9QdXF0dnhBbk1Hd3ZrNjNaUWhrK1dYR3NVaWxvT1VLekVZZzdJSUJkYUpOVCt2T0ZlbUprS1gvc2VETmZmRmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjQ3NDYxMjQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjM3NjY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "*☛✎༒☆𝔈𝔷𝔷𝔶𝔪𝔬𝔫𝔢𝔶☆༒✎☚*",


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
