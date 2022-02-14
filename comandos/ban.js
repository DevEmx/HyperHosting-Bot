const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban",
  alias: ["banear"],

execute (client, message, args){

if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("CloudMC Bot No tiene permisos para usar este comando") 
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes permisos para usar este comando")

let mencionado = message.mentions.users.first();
let razon = args.slice(1).join(' ');

  if(!razon){

    razon = "No especificado"

  }

if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');

message.guild.members.ban(mencionado, {reason: razon});
message.channel.send(`**${mencionado.username}**, fue baneado del servidor, razón: ${razon}.`);


 }

} 