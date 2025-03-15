import fs from "fs";
import moment from "moment-timezone";
moment.locale(global.bot.locale);

export default {
  description: "Menu",
  onlyOwner: false,
  onlyPremium: false,
  handle: async (sock, m) => {
    await sock.sendMessage(
      m.chatId,
      {
        text: `*${(() => {
          const hours = moment.tz(global.bot.timezone).hours();
          if (hours >= 5 && hours < 12) {
            return "Hallo selamat pagi";
          } else if (hours >= 12 && hours < 15) {
            return "Hallo selamat siang";
          } else if (hours >= 15 && hours < 18) {
            return "Hallo selamat sore";
          } else {
            return "Hallo selamat malam";
          }
        })()}${m.pushName ? ` ${m.pushName}` : ""} 👋*
Berikut adalah beberapa perintah yang bisa anda gunakan:

┏━━ *𖮌 ALL MENU 𖮌*
┃┏━━━━━━━━━━━━━━━━━━━━
┃┃ ⨳ *\`${global.bot.prefix}addprem\`*
┃┃ ⨳ *\`${global.bot.prefix}delprem\`*
┃┃ ⨳ *\`${global.bot.prefix}bug\`*
┃┃ ⨳ *\`${global.bot.prefix}sticker\`*
┃┃ ⨳ *\`${global.bot.prefix}brat\`*
┃┃ ⨳ *\`${global.bot.prefix}bratvid\`*
┃┃ ⨳ *\`${global.bot.prefix}restart\`*
┗━━━━━━━━━━━━━━━━━━━━━
        `,
        contextInfo: {
          externalAdReply: {
            mediaType: 1,
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "https://whatsapp.com/channel/0029VayUkzGF6sn73SS8Vz1R",
            thumbnail: fs.readFileSync(global.images.banner),
            thumbnailUrl: global.images.banner,
            title: global.bot.name,
          },
        },
      },
      {
        quoted: sock.quoted,
      },
    );
  },
};
