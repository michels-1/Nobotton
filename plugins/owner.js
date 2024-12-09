const axios = require('axios');
const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')


cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*👨‍💻BLACK-LEAGUE-MD👨‍💻*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ᴀɴɪʟᴀ ʟᴏᴄʜᴀɴᴀ*
*⚡ɴᴜᴍʙᴇʀ* -: 94758315442
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VagpujoJJhzdr8aNPp1D

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴɪʟᴀ ʟᴏᴄʜᴀɴᴀ*
`
await conn.sendMessage(from,{image:{url:`https://telegra.ph/file/3f7249eb429c8211cbba3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
});

cmd({
    pattern: "repo",
    desc: "repo the bot",
    react: "📡",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*📍ℝ𝔼ℙ𝕆-𝕃𝕀ℕ𝕂 ❤️‍🔥👇*

👨‍💻◦https://github.com/anilaiduwara/BLACK-LEAGUE-MD 


*📍ℙ𝕃𝔼𝔸𝕊𝔼 𝔽𝕆𝕃𝕃𝕆𝕎 𝕄𝕐 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ ℂℍ𝔸ℕℕ𝔼𝕃 ❤️‍🔥👇*

👨‍💻◦ https://whatsapp.com/channel/0029VagpujoJJhzdr8aNPp1D

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴɪʟᴀ ʟᴏᴄʜᴀɴᴀ*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/3f7249eb429c8211cbba3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
});
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `┌───────────────────────
├ ⏰ *Runtime:-* ${runtime(process.uptime())}
├ 📟 *Ram usage:-* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ ⚙️ *Platform:-* ${os.hostname()}
├ 👨‍💻 *Owners:-* anila lochana
├ 🧬 *Version:-* 1.0.0
└───────────────────────

> *BLACK-LEAGUE-MD*
`
return reply(`${status}`)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})
