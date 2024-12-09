const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')




cmd({
    pattern: "fb",
    alias: ["fbdl","fb2"],
    react: "🍧",
    desc: "",
    category: "download",
    use: '.fb < url >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("Please give me tiktok url");
  if(!q.includes('facebook.com')) return await reply("This url is invalid");
  
const fb2 = await fetchJson(`https://www.dark-yasiya-api.site/download/fbdl1?url=${q}`);


     let desc = ` *BLACK LEAUGE MD FB DOWNLOADER...⚙️*

*Reply This Message With Option*

*1 Download FB Video In HD*
*2 Download FB Video In SD*

> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*`;

 
        const vv = await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/3f7249eb429c8211cbba3.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
   // SEND HD VIDEO
await conn.sendMessage(from, { video: { url: fb2.result.sd }, mimetype: "video/mp4", caption: "> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*" }, { quoted: mek });
                        break;
                        case'2':
await conn.sendMessage(from, { video: { url: fb2.result.hd }, mimetype: "video/mp4", caption: "> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*" }, { quoted: mek });
                        break;
                        default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });
  
} catch (e) {
console.log(e)
reply(e)
}
});


cmd({
    pattern: "tiktok",
    alias: ["tt","ttdown"],
    react: "🎥",
    desc: "",
    category: "download",
    use: '.tiktok < url >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("Please give me tiktok url");
  if(!q.includes('tiktok.com')) return await reply("This url is invalid");
  
const tiktok = await fetchJson(`https://www.dark-yasiya-api.site/download/tiktok?url=${q}`);
  

 
    let desc = ` *BLACK LEAUGE MD TIKTOK DOWNLOADER...⚙️*

*Reply This Message With Option*

*1 Download tiktok video water mark*
*2 Download tiktok Video In SD*
*3 Download tiktok audio*

> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*`;



        const vv = await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/3f7249eb429c8211cbba3.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':

// SEND WATER MARK VIDEO
await conn.sendMessage(from, { video: { url: tiktok.result.wmVideo }, mimetype: "video/mp4", caption: `${tiktok.result.title}\n\nWATERMARK VIDEO ✅` }, { quoted: mek });
                    break;
                    case'2':
// SEND HD VIDEO
await conn.sendMessage(from, { video: { url: tiktok.result.hdVideo }, mimetype: "video/mp4", caption: `${tiktok.result.title}\n\nNO-WATERMARK VIDEO ✅` }, { quoted: mek });
                     break;
                     case'3':
// SEND AUDIO
await conn.sendMessage(from, { audio: { url: tiktok.result.sound }, mimetype: "audio/mpeg" }, { quoted: mek });
                     break;
                     default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });
  
} catch (e) {
console.log(e)
reply(e)
}
});

