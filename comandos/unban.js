const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "unban",
  alias: ["desbanear"],

async execute (client, message, args){

  var perms = message.member.hasPermission("BAN_MEMBERS")

  if(!perms) return message.channel.send("No tienes permisos para usar este ocmando")
  
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Rb no tiene suficientes permisos para usar este comando")

  let userID = args[0];

  if(!userID) return message.channel.send("Tienes que poner la ID de un usuario")

  const member = await client.users.fetch(userID)

  message.guild.fetchBans().then(bans => {
 
 if(bans === 0) return message.channel.send("El servidor no tiene usuarios baneados")

 let bUser = bans.find(b => b.user.id === userID)

 if(!bUser) return message.channel.send("Este usuario no esta baneado")

 message.guild.members.unban(bUser.user)

  })

  message.channel.send(`${member.username} ha sido unbaneado correctamente`)

 }

}