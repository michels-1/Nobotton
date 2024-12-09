const config = require('../config');
const { cmd, commands } = require('../command');
const fetch = require('node-fetch');
const {fetchJson} = require('../lib/functions');
const axios = require('axios');
const emailDataStore = {};

cmd({
    pattern: "calc",
    desc: "Calculate a mathematical expression.",
    use: ".calc <expression>",
    react: "🛠️",    
    category: "tools",
    filename: __filename
},
async (conn, mek, m, {
    from, args, quoted, body, isCmd, command, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        if (args.length === 0) return reply('Please provide a mathematical expression.');

        const expression = args.join(' ');
        let result;

        try {
            result = new Function(`return ${expression}`)();
        } catch (e) {
            return reply('Invalid mathematical expression.');
        }

        return await conn.sendMessage(from, { text: `Result: ${result}` }, { quoted: mek });

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply(`Error: ${e.message}`);
    }
});


cmd({
    pattern: "reverse",
    desc: "Reverse the provided text.",
    react: "🛠️", 
    use: ".reverse <text>",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, {
    from, args, reply
}) => {
    try {
        if (args.length === 0) return reply('Please provide the text to reverse.');
        const text = args.join(' ');
        const reversedText = text.split('').reverse().join('');
        return await conn.sendMessage(from, {
            text: reversedText
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        return reply(`Error: ${e.message}`);
    }
});

//Tempmail

cmd({
    pattern: "tempmail",
    desc: "Create temporary email address and use it as needed.",
    react: "📧",
    use: ".tempmail",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        if (!emailDataStore[sender]) {
            const newEmailData = await tempmail.create();
            if (!newEmailData || !newEmailData[0]) {
                return await reply("Request Denied!");
            }

            const [login, domain] = newEmailData[0].split("@");
            emailDataStore[sender] = { email: newEmailData[0], login, domain };
        }

        const emailInfo = emailDataStore[sender];
        await conn.sendMessage(from, {
            text: `NEW MAIL\n\nEMAIL: ${emailInfo.email}\nLOGIN: ${emailInfo.login}\nADDRESS: ${emailInfo.domain}\n`
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        return reply("Request Denied!");
    }
});

cmd({
    pattern: "checkmail",
    desc: "Check mails in your temporary email address.",
    react: "📧",
    use: ".checkmail",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const emailInfo = emailDataStore[sender];
        if (!emailInfo || !emailInfo.email) {
            return await conn.sendMessage(from, { text: "_You Didn't Create Any Mail_" }, { quoted: mek });
        }

        const receivedMails = await tempmail.mails(emailInfo.login, emailInfo.domain);
        if (!receivedMails || receivedMails.length === 0) {
            return await conn.sendMessage(from, { text: "_EMPTY ➪ No Mails Here_" }, { quoted: mek });
        }

        for (const mail of receivedMails) {
            const emailContent = await tempmail.emailContent(emailInfo.login, emailInfo.domain, mail.id);
            if (emailContent) {
                const mailInfo = `From ➪ ${mail.from}\nDate ➪ ${mail.date}\nEMAIL ID ➪ [${mail.id}]\nSubject ➪ ${mail.subject}\nContent ➪ ${emailContent}`;
                await conn.sendMessage(from, { text: mailInfo }, { quoted: mek });
            }
        }
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        return reply("Request Denied!");
    }
});

cmd({
    pattern: "delmail",
    desc: "Delete temporary email address.",
    react: "❌",
    use: ".delmail",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        if (emailDataStore[sender]) {
            delete emailDataStore[sender];
            return await conn.sendMessage(from, { text: "Deleted the email address." }, { quoted: mek });
        } else {
            return await conn.sendMessage(from, { text: "No email address to delete." }, { quoted: mek });
        }
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        return reply("Request Denied!");
    }
});

const tempmail = {
    create: async () => {
        const url = "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1";
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (e) {
            console.log(e);
            return null;
        }
    },

    mails: async (login, domain) => {
        const url = `https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (e) {
            console.log(e);
            return null;
        }
    },

    emailContent: async (login, domain, id) => {
        const url = `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${id}`;
        try {
            const response = await axios.get(url);
            const emailData = response.data;
            const htmlContent = emailData.htmlBody;

            const $ = cheerio.load(htmlContent);
            const textContent = $.text();
            return textContent;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
};

//Short Url

cmd({
    pattern: "url",
    desc: "Shortens a provided URL.",
    react: "🔗",
    use: ".url <link>",
    category: "convert",
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {
    try {
        const match = args.join(' ');
        
        if (!match) {
            return await reply("_Please provide a URL to shorten_");
        }

        await reply("_Shortening the link..._");

        const url = await scraper.shortenUrl(match);

        if (url) {
            const msg = `_Here's your shortened link: *${url}*_`;
            return await conn.sendMessage(from, { text: msg }, { quoted: mek });
        } else {
            return await reply("Failed to shorten the URL.");
        }
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        return reply(`Error: ${e.message}`);
    }
});



