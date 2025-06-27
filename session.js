//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lRclR3Ym4rcU1ZYnp5MXVaUVhXSmlwcGRpdm0rZm0rclY0OGx1VkZtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM21Wa21uTG0veTE1N1VJOGtkZ0czVDBZRGhERWdheEtFWkxGZ1pBZkJobz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SFlaRUpDcEdxckdsZE1tL2w0eksvN2tOVUtDVDhGL0JCRmdNa3FXaFZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZDlIOFJzMzBmMVZCYldySHFEc2xueUwxdnRPVWIxcVpvUE1ZNWdHbTBNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlLQkg1dFR4V3M2MUhKYXhBRjRRNHg4dDBRNVE4VnV5V0ZqMStVM1ZEa3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEwYnY1Y1JGTG9ZS1kxZ3RLVURMOXVteW9jVGg1TnAxd3N5eUh3RTZnRk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0FHdk5waXJiL1duM0dUK0kwQUc4bjJJZTRkL0tCYU5JZCtiSDc4MGRIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2RTV2R5LzZSY1BpSS9DNWkxUlNDaGU4QlRRd00zTjlEWkVMcS9JUUZDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl4TUZXMy9iY1F5MnpNY2wyVDIrZlRoZEI0cTVKdEtVNTJrMG9kMTJYZmhPd0tLY1ZoRTV1cnQ2amppYU0xdjdLUnljQzU4MS9pTm9FRmwvdkRHYmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6IjBJU1pHR21kZ01uY1R4eHJYQWRRZmJodWFuc2FBVTFZUnNLU21yOU5hMHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxrOUFWWGs0UUVHVWhydlA5Ulk3RXciLCJwaG9uZUlkIjoiNzQxYTIyYWQtZmE1NC00ODU2LTk1ZDAtNDJmY2NmMDZlMzY3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdoaEJNcE9xM1dUMTQ0YmlqV1lCTVdFOXRCYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQVdsRXd2V3h3NEdCYXJETGlSRHczcUV0MzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNTFBTjhONkgiLCJtZSI6eyJpZCI6Ijk0NzcyNzAzMDM4OjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU0FDSEkiLCJsaWQiOiIyNzE3NjQ3MjY3ODgzMzk6OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0oyVStLc0dFSmlXK3NJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im41a0xCTXFYQWFsTkNJZW9YR2dnNnRaYUVmQUNXMFlXdUU5OWJLSjUxWFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhKbTVQc1NLdmZ1c1N6Mll3enJNUit4OUoyWDRkOWFCQ0dkNGxvQVZQdElDTnR1UWhBNE5xY0VwUjl3SnhBdVZkSmtQV0ZtNnRDSTJmcHNZbUh5V0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyRzZPd2JyQnBEVHhhTGgyTkFSQVNldi81QVRWeVdCKzc2TE5mYVRhKzB0azdtSC9keFZFSTArUTR1UUZYbFk2UW1Bem9NMUs2MjUxeWhRUU5DcHFqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzcyNzAzMDM4OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWitaQ3dUS2x3R3BUUWlIcUZ4b0lPcldXaEh3QWx0R0ZyaFBmV3lpZWRWMiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMDI2NDY5LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJTTSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "742093485",
  PASSWORD: 
    process.env.PASSWORD || "2008Mihi",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
