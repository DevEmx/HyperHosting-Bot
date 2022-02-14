const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
let db_muterole = new db.crearDB("canal_rolemute");

module.exports = {
  name: "mute",
  alias: ["mutear"],

async execute (client, message, args){

let permiso = message.member.hasPermission("MANAGE_GUILD");
let mencionado = message.mentions.members.first();
let razon = args.slice(1).join(' ');

if(!permiso) return message.reply("No tienes permisos para usar este comando`");
if(!mencionado) return message.reply('Especifica a un miembro.');
if(!razon) return message.channel.send('Especifica el motivo.');
  
if(!db_muterole.tiene(message.guild.id)) return message.channel.send("En este servidor no esta el rol mute Establecido, Usa: **r!setmuterole @rol**")

let rol = await
db_muterole.obtener(message.guild.id)

if(mencionado.roles.cache.has(rol)) return message.channel.send("Este miembro ya esta muteado.")

mencionado.roles.add(rol)
  
const embedmute = new Discord.MessageEmbed()
.setTitle(`Modslogs | Mute`)
.addField(`Moderador:`, `${message.author.username}`)
.addField(`Miembro:`, `${mencionado}`)
.addField(`Razon:`, `${razon}`)
message.channel.send(embedmute);

 }

} 