const Discord = require("discord.js");
const fs = require("fs");
const helpData = require("../help");

module.exports.run = async (bot, msg, args, config) => {
  if (args.length === 0) {
    const fields = Object.values(helpData);
    console.log(fields);
    const embed = {
      title: "COMMANDS",
      description: `to get help for a specific command use **${config.prefix}help [command name]** (this bot is still under development and a new feature will be added everyday so stay tuned ♥) :`,
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
    msg.channel.send('SOMEONE ASKED FOR MY HELP ?', { embed })
  } else {
    const cmd = args[0];
    fs.readdir(__dirname, (err, files) => {
      if (err) console.log(err);

      let jsfiles = files
        .filter(f => f.split(".").pop() === "js" && f.split(".")[0] != "help")
        .map(f => f.split(".")[0]);

      if (!helpData[cmd]) return;
      const fields = [ helpData[cmd] ];
      const embed = {
        title: "COMMAND",
        description: `help for ${config.prefix +
          cmd}. to get all available commands use **${config.prefix}help** :`,
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
      msg.channel.send('SOMEONE ASKED FOR MY HELP ?', { embed })
    });
  }
};

module.exports.help = {
  name: "help"
};
