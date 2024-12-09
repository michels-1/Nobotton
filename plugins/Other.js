const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "trt",
    desc: "🌍 Translate text between languages",
    react: "🌐",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const args = q.split(' ');
        if (args.length < 2) return reply("❗ Please provide a language code and text. Usage: .translate [language code] [text]");

        const targetLang = args[0];
        const textToTranslate = args.slice(1).join(' ');

        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLang}`;

        const response = await axios.get(url);
        const translation = response.data.responseData.translatedText;

        const translationMessage = `
🌍 *Translation* 🌍

🔤 *Original*: ${textToTranslate}
🔠 *Translated*: ${translation}
🌐 *Language*: ${targetLang.toUpperCase()}

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`;

        return reply(translationMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ αη єяяσя σ¢¢υяяє∂ ωнιℓє тяαηѕℓαтιηg тнє тєχт. ρℓєαѕє тяу αgαιη ℓαтєя.");
    }
});


cmd({
                             pattern: "define",
                             desc: "📚 Get the definition of a word",
                             react: "🔍",
                             category: "other",
                             filename: __filename
                         },
                         async (conn, mek, m, { from, q, reply }) => {
                             try {
                                 if (!q) return reply("❗ Please provide a word to define. Usage: .define [word]");

                                 const word = q;
                                 const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

                                 const response = await axios.get(url);
                                 const definitionData = response.data[0];

                                 const definition = definitionData.meanings[0].definitions[0].definition;
                                 const example = definitionData.meanings[0].definitions[0].example || 'No example available';
                                 const synonyms = definitionData.meanings[0].definitions[0].synonyms.join(', ') || 'No synonyms available';

const wordInfo = `
📚 *Word*: ${definitionData.word}
🔍 *Definition*: ${definition}
📝 *Example*: ${example}
🔗 *Synonyms*: ${synonyms}

*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴɪʟᴀ ʟᴏᴄʜᴀɴᴀ*`;

                                 return reply(wordInfo);
                             } catch (e) {
                                 console.log(e);
                                 if (e.response && e.response.status === 404) {
                                     return reply("🚫 Word not found. Please check the spelling and try again.");
                                 }
                                 return reply("⚠️ An error occurred while fetching the definition. Please try again later.");
                             }
 });




