const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js');
require('dotenv').config();
const keepAlive = require('./server.js');
const fs = require('fs');
let { readdirSync } = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs
	.readdirSync('./comandos')
	.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./comandos/${file}`);
	client.commands.set(command.name, command);
}

const status = [` HyperHosting | -help `];

client.on('ready', () => {
	setInterval(() => {
		function presence() {
			client.user.setPresence({
				status: 'online',

				activity: {
					name: status[Math.floor(Math.random() * status.length)],

					type: 'PLAYING'
				}
			});
		}

		presence();
	}, 10000);

	console.log('Hyperbot up');
});

client.on('message', message => {
	let prefix = '-';

	if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
		message.channel.send('**:white_check_mark:Mi prefix es -**');
	}

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	let usuario = message.mentions.members.first() || message.member;
	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	let cmd = client.commands.find(
		c => c.name === command || (c.alias && c.alias.includes(command))
	);
	if (cmd) {
		cmd.execute(client, message, args);
	}
});

const Monitor = require('ping-monitor');

keepAlive();

const monitor = new Monitor({
	website: 'https://CloudMC-Bot.elodlas.repl.co',
	title: 'Hyperbot Online'
});

client.on('guildMemberAdd', member => {
	const avatar = member.user.avatarURL();

	if (member.guild.id === '846531879310196748') {
		const embed = new Discord.MessageEmbed()

			.setTitle(
				`Bienvenido al servidor **${member.user.username}** que la pases muy bien!`
			)
			.setColor('#ff0000')
			.setDescription(
				'Importante No olvides leerte el canal para evitar problemas'
			)
			.setImage(avatar)
			.setFooter('');

		client.channels.cache.get('846533323538300928').send(embed);
	}
});

client.login('');
