const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "clear",
  alias: ["purge"],

execute (client, message, args){

var perms = message.member.hasPermission("MANAGE_MESSAGES")
if(!perms) return message.channel.send("No puedes usar este comando")
if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`CloudMC Bot necesita el permiso **Manage Messages** para usar este comando`)
let cantidad = parseInt(args[0]);
if(!cantidad) return message.channel.send("Debes poner una cantidad para borrar")
message.channel.bulkDelete(cantidad);
message.channel.send(`Exito has borrado **${cantidad}** mensajes`)
 }

} 