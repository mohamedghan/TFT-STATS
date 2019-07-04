const Discord = require("discord.js");
const items = require("../items");
const tft = require("../TFT");

module.exports.run = async (bot, msg, args, config) => {
  const fields = [];
  Object.entries(items).forEach(item => {
    const i = tft.items.filter(it => it.name.toLowerCase() === item[1].toLowerCase())[0];
    const iconName = i.icon.split('/')[i.icon.split('/').length - 1].replace('.dds', '').replace('.TFT', '').toLowerCase();
    const emoji = bot.emojis.filter(emoji => emoji.name === iconName).first();
    fields.push({
      name: emoji + ' ' + item[1],
      value: item[0]
    });
  });
  const embed = {
    title: "ITEMS",
    description:
      "these are all the available TFT mini items with their abbreviations:",
    color: 4886754,
    footer: {
      icon_url: bot.user.avatarURL,
      text: "by @MedDaBeast#2490"
    },
    author: {
      name: "TFT STATS",
      icon_url: msg.author.avatarURL
    },
    fields
  };
  msg.channel.send("Someone asked for this ?", { embed });
};

module.exports.help = {
  name: "items"
};
