const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "dog",
    desc: "Fetch a random dog image.",
    category: "fun",
    react: "🐶",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.message }, caption: '🐶 *ʀᴀɴᴅᴏᴍ ᴅᴏɢ ɪᴍɢ* 🐶\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴɪʟᴀ ʟᴏᴄʜᴀɴᴀ*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`єяяσя ƒєт¢нιηg ∂σg ιмαgє: ${e.message}`);
    }
});


cmd({
    pattern: "fact",
    desc: "🧠 Get a random fun fact",
    react: "🤓",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';  // API for random facts
        const response = await axios.get(url);
        const fact = response.data.text;

        const funFact = `
🧠 *ʀᴀɴᴅᴏᴍ ꜰᴜɴ ꜰᴀᴄᴛ* 🧠

${fact}

Isn't that interesting? 😄
`;

        return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("⚠️ αη єяяσя σ¢¢υяяє∂ ωнιℓє ƒєт¢нιηg α ƒυη ƒα¢т. ρℓєαѕє тяу αgαιη ℓαтєя.");
    }
});

cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    react: "💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const steps = [
            '💻 *HACK STARTING...* 💻',
            '',
            '*Initializing hacking tools...* 🛠️',
            '*Connecting to remote servers...* 🌐',
            '',
            '```[██████████] 10%``` ⏳'                                            ,
            '```[███████████████████] 20%``` ⏳'                                   ,
            '```[███████████████████████] 30%``` ⏳'                               ,
            '```[██████████████████████████] 40%``` ⏳'                            ,
            '```[███████████████████████████████] 50%``` ⏳'                       ,
            '```[█████████████████████████████████████] 60%``` ⏳'                 ,
            '```[██████████████████████████████████████████] 70%``` ⏳'            ,
            '```[██████████████████████████████████████████████] 80%``` ⏳'        ,
            '```[██████████████████████████████████████████████████] 90%``` ⏳'    ,
            '```[████████████████████████████████████████████████████] 100%``` ✅',
            '',
            '🔒 *System Breach: Successful!* 🔓',
            '🚀 *Command Execution: Complete!* 🎯',
            '',
            '*📡 Transmitting data...* 📤',
            '_🕵️‍♂️ Ensuring stealth..._ 🤫',
            '*🔧 Finalizing operations...* 🏁',
            '',
            '⚠️ *Note:* All actions are for demonstration purposes only.',
            '⚠️ *Reminder:* Ethical hacking is the only way to ensure security.',
            '',
            '> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴɪʟᴀ ʟᴏᴄʜᴀɴᴀ*'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});


cmd({
    pattern: "joke",
    desc: "😂 Get a random joke",
    react: "🤣",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://official-joke-api.appspot.com/random_joke';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;

        const jokeMessage = `
😂 *Here's a random joke for you!* 😂

*${joke.setup}*

${joke.punchline} 😄

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴɪʟᴀ ʟᴏᴄʜᴀɴᴀ* `;

        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ ¢συℓ∂η'т ƒєт¢н α נσкє яιgнт ησω. ρℓєαѕє тяу αgαιη ℓαтєя.");
    }
});

cmd({
    pattern: "quote",
    desc: "Get a random inspiring quote.",
    category: "fun",
    react: "馃挰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        const quote = response.data;
        const message = `
馃挰 "${quote.content}"
- ${quote.author}
饾悘饾悗饾悥饾悇饾悜饾悇饾悆 饾悂饾悩 饾悞饾悁饾悋饾悁饾悞-饾悓饾悆 饾悙饾悢饾悗饾悡饾悇饾悞
        `;
        return reply(message);
    } catch (e) {
        console.error("Error fetching quote:", e);
        reply("垄蟽蠀鈩撯垈 畏蟽褌 茠褦褌垄薪 伪 q蠀蟽褌褦. 蟻鈩撗斘毖曆� 褌褟褍 伪g伪喂畏 鈩撐毖傃斞�.");
    }
});

cmd({
    pattern: "news",
    desc: "Get the latest news headlines.",
    category: "news",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const apiKey="0f2c43ab11324578a7b1709651736382";
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const articles = response.data.articles;

        if (!articles.length) return reply("No news articles found.");

        // Send each article as a separate message with image and title
        for (let i = 0; i < Math.min(articles.length, 5); i++) {
            const article = articles[i];
            let message = `
📰 *${article.title}*
⚠️ _${article.description}_
🔗 _${article.url}_

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴɪʟᴀ ʟᴏᴄʜᴀɴᴀ*
            `;

            console.log('Article URL:', article.urlToImage); // Log image URL for debugging

            if (article.urlToImage) {
                // Send image with caption
                await conn.sendMessage(from, { image: { url: article.urlToImage }, caption: message });
            } else {
                // Send text message if no image is available
                await conn.sendMessage(from, { text: message });
            }
        };
    } catch (e) {
        console.error("Error fetching news:", e);
        reply("Could not fetch news. Please try again later.");
    }
});


cmd({
    pattern: "animegirl",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👧 *Random Anime Girl Image* 👧\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴɪʟᴀ ʟᴏᴄʜᴀɴᴀ*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});
