const fs = require("fs");
const Discord = require("discord.js");
const bot = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.TOKEN);
const config = require("./config");
bot.commands = new Discord.Collection();
fs.readdir("./commands", (err, files) => {
  if (err) console.log(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    console.log("no commands");
    return;
  }

  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", () => {
  bot.user.setActivity(
    `Team fight Tactics | ?help`,
    "WATCHING"
  );
  dbl.postStats(bot.guilds.size + 1225).then((value) => {
    console.log(value);
  });
});

bot.on("guildCreate", () => {
  // bot.user.setActivity(
  //   `Team fight Tactics | ${bot.guilds.size + 1225} servers`,
  //   "WATCHING"
  // );
  dbl.postStats(bot.guilds.size + 1225).then((value) => {
    console.log(value);
  });
});


bot.on("message", async msg => {
  if (msg.author.bot) return;

  let prefix = config.prefix;
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);

  let cmdfile = bot.commands.get(cmd.slice(prefix.length));

  if (cmdfile) cmdfile.run(bot, msg, args, config);
});

bot.login(process.env.TFT_TOKEN);
