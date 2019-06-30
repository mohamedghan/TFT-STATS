const Discord = require('discord.js');
const fItems = require('../finalItems');

module.exports.run = async (bot, msg, args, config) => {
	const fields = fItems.map(item => ({
		name: item.name,
		value: item.abrv
	}))

	const embed = {
        title: "ITEMS",
        description: "these are all the available TFT finished items with their abbreviations:",
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
	  
	  msg.channel.send('these are all the available items !', { embed })
}

module.exports.help = {
	name: "final"
}