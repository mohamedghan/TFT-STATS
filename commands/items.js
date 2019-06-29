const Discord = require('discord.js');
const items = require('../items');

module.exports.run = async (bot, msg, args, config) => {
    const fields = [];
    Object.entries(items).forEach(item => {
        fields.push({
            name: item[1],
            value: item[0]
        });
    })
    const embed = {
        title: "ITEMS",
        description: "these are all the available TFT mini items with their abbreviations:",
        color: 4886754,
        footer: {
          icon_url: bot.user.avatarURL,
          text: "by @MedDaBeast#2490"
        },
        author: {
          "name": "TFT STATS",
          "icon_url": msg.author.avatarURL
        },
        fields
      };
      msg.channel.send("Someone asked for this ?", { embed });
}

module.exports.help = {
	name: "items"
}