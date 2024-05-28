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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348022985548";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_00_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4LFxuICAgICAgICA5NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE0LFxuICAgICAgICA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcxLFxuICAgICAgICA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxODksXG4gICAgICAgIDQyLFxuICAgICAgICAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3LFxuICAgICAgICA2NixcbiAgICAgICAgMTAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEzLFxuICAgICAgICA1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk5LFxuICAgICAgICA2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhdW83Ny9hM0hyWGRIYWFnaVRtS1EzQ3RHajcvRUVMZ1ArZG1oQVIxUXg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMjI5ODU1NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQxMDY4OUI2NzJFNTQ5QzAwNUM3ODVDRDI1QUJGN0Y3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjkzMzY1MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMjI5ODU1NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU4RDVEOTc0Q0Q4OEJBRjNBQTBEMDdFQzdBNTZGMzY4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjkzMzY1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwWTEweDZnQVRZNk8zeVJ5M1p0b19RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlmNTIzYjhkLWZlMDEtNGQ4Ny05MmM3LTU3OTI4OGI1ZDY1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDE5MixcbiAgICAgIDYwLFxuICAgICAgMTMyLFxuICAgICAgMjQ3LFxuICAgICAgOCxcbiAgICAgIDE5MCxcbiAgICAgIDIyMCxcbiAgICAgIDI1LFxuICAgICAgMTQzLFxuICAgICAgOCxcbiAgICAgIDEyNCxcbiAgICAgIDE2NSxcbiAgICAgIDIyOCxcbiAgICAgIDE2NyxcbiAgICAgIDIxLFxuICAgICAgNjcsXG4gICAgICAxODAsXG4gICAgICAxODMsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMTYzLFxuICAgICAgNSxcbiAgICAgIDEzOCxcbiAgICAgIDgsXG4gICAgICAyMzksXG4gICAgICAyNDEsXG4gICAgICAxMTgsXG4gICAgICAxMjgsXG4gICAgICA0MCxcbiAgICAgIDU4LFxuICAgICAgMTQ1LFxuICAgICAgMTksXG4gICAgICAyMDQsXG4gICAgICAyNTMsXG4gICAgICAxNDIsXG4gICAgICA1NyxcbiAgICAgIDIzNyxcbiAgICAgIDE4NSxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4U0Y3WDlaSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAyMjk4NTU0ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT2x1bWlkZSBFZ2JlZGVsZVwiLFxuICAgIFwibGlkXCI6IFwiMTQyMzU3MDI2NjE1Mzg5OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUh4cmVNQkVJMm8yYklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiUFRxd3FnUWNNWUlUM0VhZDJ1ZXp2ZzJHWlR3SWREbVFqVitIY2JXSms0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdqRXA0dUFCWmE0WTZMa1NRcGZnVlB6SEZQOEZyNmJzZnI0SzBYcWVTK1lqNjJuZEx5L2hFcFRNdHBJeEVjU2l2R1Q5UnVJVGlibFFkVXM3blViSEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlAreVFKZXVpKzRQaXIwVkhjNmd5ZzNNTEhBN2hEN1haOHFBeTBJNVYvdWZlQ1p6UTh3R1ppTHZWN3FkNFRLV3ZIeS9FZUNZYktaWmM1T0NyNHRyWmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMjI5ODU1NDg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTMzNjQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkpvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGSm8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1V2d3R3daQk9ZRTNsTUh3NjhrQnFwdkRJcVNoR2pPc3J2aFBzQXZNT2V3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ3NjgwNTMxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2OTMzNjUxOTM5XCJ9Igp9" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

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
