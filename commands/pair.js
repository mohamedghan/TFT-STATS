const Discord = require('discord.js');
const items = require('../items');
const TFT = require('../TFT');

module.exports.run = async (bot, msg, args, config) => {
    const itemName = args.join(' ').toUpperCase();
    const abrvs = Object.keys(items);
    const itemNames = Object.values(items).map(item => item.toUpperCase());
    const item = abrvs.includes(itemName) ? items[itemName] : (itemNames.includes(itemName) ? itemName : '');
    if(!!item) {
        const id = TFT.items.filter(i => i.name.toUpperCase() == item.toUpperCase())[0].id;
        const avItems = TFT.items.filter(i => i.from.includes(id)).map(i => {
            const mId = i.from.filter(tId => tId != id)[0] || id;
            const mItemName = TFT.items.filter(i2 => i2.id == mId)[0].name;
            let result = i.name;
            if(i.effects.length !== 0) {
                const fDesc = i.desc.replace(/%/g, '').split('@').map(e => (i.effects.map(eff => eff.name).includes(e) ? i.effects.filter(eff => eff.name == e)[0].value : e)).join('');
                result += ` (${fDesc})`;
            } else {
                result += ` (${i.desc})`; 
            }
            return {
                missing : mItemName,
                result
            };
        });

        const fields = avItems.map(i => ({
            name: `+ ${i.missing} = `,
            value: i.result
        }));

        const embed = {
            title: "ITEMS",
            description: `mix **${item}** with one of these items to get a full item: `,
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
          msg.channel.send(`**${item}** pairs: `, { embed });
    } else {
        msg.channel.send(`invalid item name, please try using: **${config.prefix}items** command to get all available items and their abbreviations!`);
    }
}

module.exports.help = {
    name: "pair"
}
