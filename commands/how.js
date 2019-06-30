const Discord = require("discord.js");
const fItems = require("../finalItems");
const { items } = require('../TFT');

module.exports.run = async (bot, msg, args, config) => {
  const names = fItems.map(item => item.name.toUpperCase());
  const abrvs = fItems.map(item => item.abrv);
  const name = args.join(' ').toUpperCase();

  const itemName = names.includes(name) ? name : (abrvs.includes(name) ? fItems.filter(item => item.abrv === name)[0].name.toUpperCase() : '');

  if(!!itemName) {
	  const { from } = items.filter(i => i.name.toUpperCase() === itemName)[0];
	  const fItem = items.filter(i => i.id === from[0])[0].name;
	  const sItem = items.filter(i => i.id === from[1])[0].name;
	  msg.channel.send(`you obviously have to mix some of the **${fItem}** power with **${sItem}** to get **${itemName}** !!`);
  }
};

module.exports.help = {
  name: "how"
};
