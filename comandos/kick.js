const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick",
  alias: ["kickear"],

execute (client, message, args){

  var perms = message.member.hasPermission("KICK_MEMBERS")

  if(!perms) return message.channel.send("No tienes permisos para usar este comando")

  let mencionado = message.mentions.users.first();

  let razon = args.slice(1).join(' ');

  if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');

  if(!razon) return message.channel.send('Escriba una razón del uso de kick.');

  message.guild.member(mencionado).kick(razon);

  message.channel.send(`**${mencionado.username}**, fue expulsado del servidor, razón: ${razon}.`);

 }

} 