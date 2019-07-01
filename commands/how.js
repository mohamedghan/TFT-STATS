const Discord = require("discord.js");
const fItems = require("../finalItems");
const { items } = require('../TFT');
const jimp = require('jimp');

module.exports.run = async (bot, msg, args, config) => {
  const names = fItems.map(item => item.name.toUpperCase());
  const abrvs = fItems.map(item => item.abrv);
  const name = args.join(' ').toUpperCase();

  const itemName = names.includes(name) ? name : (abrvs.includes(name) ? fItems.filter(item => item.abrv === name)[0].name.toUpperCase() : '');

  if(!!itemName) {
	  const { from } = items.filter(i => i.name.toUpperCase() === itemName)[0];
    const fItem = items.filter(i => i.id === from[0])[0];
    const sItem = items.filter(i => i.id === from[1])[0];
    const result = items.filter(i => i.name.toUpperCase() === itemName)[0];
    const i1name =  fItem.icon.split('/')[fItem.icon.split('/').length - 1].replace('dds', 'png').toLowerCase();
    const i2name =  sItem.icon.split('/')[sItem.icon.split('/').length - 1].replace('dds', 'png').toLowerCase();
    const i3name =  result.icon.split('/')[result.icon.split('/').length - 1].replace('dds', 'png').toLowerCase();
    const url1 = `https://raw.communitydragon.org/9.13/game/assets/maps/particles/tft/${i1name}`;
    const url2 = `https://raw.communitydragon.org/9.13/game/assets/maps/particles/tft/${i2name}`;
    const url3 = `https://raw.communitydragon.org/9.13/game/assets/maps/particles/tft/${i3name}`;


    let temp = await jimp.read('./how.png');
    temp = temp.scale(0.4);
    const t1 = await jimp.read(url1);
    const t2 = await jimp.read(url2);
    const t3 = await jimp.read(url3);



    const buff = await temp.composite(t1, 35, 39).composite(t2, 220, 39).composite(t3, 390, 39).getBufferAsync(temp.getMIME());
    const att = new Discord.Attachment(buff);
    
	  msg.channel.send(`you obviously have to mix some of the **${fItem.name}** power with **${sItem.name}** to get **${itemName}** !!`, att);
  }
};

module.exports.help = {
  name: "how"
};
