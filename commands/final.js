const Discord = require("discord.js");
const fItems = require("../finalItems");
const { items } = require("../TFT");

module.exports.run = async (bot, msg, args, config) => {
  const fields = fItems.map(item => {
    let name = item.name;
    const i = items.filter(it => it.name.toUpperCase() === item.name.toUpperCase())[0];
    if (i.effects.length !== 0) {
      const fDesc = i.desc
        .replace(/%/g, "")
        .split("@")
        .map(e =>
          i.effects.map(eff => eff.name).includes(e)
            ? i.effects.filter(eff => eff.name == e)[0].value
            : e
        )
        .join("");
      name += ` (__${fDesc}__)`;
    } else {
      name += ` (__${i.desc}__)`;
    }

    return {
      name,
      value: item.abrv
    };
  });

  const embed = {
    title: "ITEMS",
    description:
      "these are all the available TFT finished items with their abbreviations:",
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

  msg.channel.send("these are all the available items !", { embed });
};

module.exports.help = {
  name: "final"
};
