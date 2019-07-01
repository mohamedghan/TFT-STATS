const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();


const config = require('./config');
bot.commands = new Discord.Collection();
fs.readdir('./commands', (err, files) => {
	if (err) console.log(err);

	let jsfiles = files.filter(f => f.split('.').pop() === 'js');
	if (jsfiles.length <= 0) {
		console.log('no commands');
		return;
	}

	jsfiles.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} loaded`);
		bot.commands.set(props.help.name, props);
	})
})

bot.on('ready', () => {
	bot.user.setActivity(`Team fight Tactics | ${bot.guilds.size  + 1225} servers`,'WATCHING')
})


bot.on('guildCreate', () => {
	bot.user.setActivity(`Team fight Tactics | ${bot.guilds.size  + 1225} servers`,'WATCHING')
})


bot.on('message', async (msg) => {
	if (msg.author.bot) return;

	let prefix = config.prefix;
	let msgarray = msg.content.split(' ');
	let cmd = msgarray[0];
	let args = msgarray.slice(1);
	
	if(!msg.content.startsWith(prefix)) return;

	let cmdfile = bot.commands.get(cmd.slice(prefix.length));

	if (cmdfile) cmdfile.run(bot, msg, args, config);
});

bot.on('guildMemberAdd', async (mem) => {
	const dm = await mem.createDM();
	dm.send(`welcome to the server, if you\'re interested in using me, use the **${config.prefix}help** command to get started!`)
})


bot.login(process.env.TFT_TOKEN)
