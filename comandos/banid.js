const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban-id",
  alias: ["hackban"],

async execute (client, message, args){

  var perms = message.member.hasPermission("BAN_MEMBERS")

  if(!perms) return message.channel.send("No tienes permisos para usar este comando")

  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("CloudMC Bot no tiene permisos suficientes para usar este comando")

  const id = args.join(' ')

  let razon = args.slice(1).join(' ');

  if(!razon){

    razon = "No especificado"

  }

  if(!id) return message.channel.send("Tienes que poner la ID de una usuario")

  const member = await client.users.fetch(id)

  message.guild.members.ban(member.id)

  message.channel.send(`${member.username} fue baneado correctamente`)

 }

} 