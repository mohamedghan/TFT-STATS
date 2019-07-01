const Discord = require("discord.js");
const { champions } = require("../TFT");

module.exports.run = async (bot, msg, args, config) => {
    const names = champions.map(champ => champ.name.toUpperCase());
    const name = args.join(' ').toUpperCase();

    if(names.includes(name)) {
        const champ = champions.filter(c => c.name.toUpperCase() === name)[0];

        const statNames = Object.keys(champ.stats);
        const statValues = Object.values(champ.stats);

        const fields = statNames.map((stat, i) => ({
            name: stat,
            value: statValues[i].toString()
        }))

        const embed = {
            title: "STATS",
            description:
              `These are stats related to **${name}**`,
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

          msg.channel.send(`Here you are ♥`, { embed })
    }

};

module.exports.help = {
  name: "stats"
};
