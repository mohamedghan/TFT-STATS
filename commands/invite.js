const Discord = require("discord.js");
const fItems = require("../finalItems");
const { items } = require("../TFT");

module.exports.run = async (bot, msg, args, config) => {
    const embed = {
        color: 4886754,
        author: {
          name: "TFT STATS",
          icon_url: msg.author.avatarURL
        },
        fields: [
            {
                name: 'invite Link:',
                value: `[invite me to your server](https://discordapp.com/api/oauth2/authorize?client_id=594378765740539905&permissions=8&scope=bot)`
            }
        ]
      };
    msg.channel.send('make me famous !!', { embed })
};

module.exports.help = {
  name: "invite"
};
