const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const warn = new db.crearDB('warn')

module.exports = {
  name: "warn",
  alias: ["aviso"],

execute (client, message, args){

  var perms = message.member.hasPermission("KICK_MEMBERS")

  if(!perms) return message.channel.send("No tienes permisos para usar este comando")

  let person = message.mentions.users.first()

  if(!person) return message.channel.send("Tienes que mencionar a alguien")

  var reason = args.slice(1).join(" ")

  if(!reason){

    reason = "No especificado"

  }

  if(!warn.tiene(`${message.guild.id}.${person.id}`))

  warn.establecer(`${message.guild.id}.${person.id}`, 0)

  warn.sumar(`${message.guild.id}.${person.id}`, 1)

  message.channel.send(`El moderador **${message.author.tag}**  warneo a **${person.tag}** por la razon de **${reason}**`)

  person.send(`Ha sido warneado en el server **${message.guild.name}** por **${reason}**`)

 }

} 