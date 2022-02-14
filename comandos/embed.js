const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "embed",
  alias: [""],

execute (client, message, args){

  let texto = args.join(" ")
  if(!texto)return message.channel.send("Debes escribir el contenido del embed")
  let opciones = texto.split(' >> ')

  const embed = new Discord.MessageEmbed()

  .addField(opciones[0])
  .addField(opciones[1],opciones[2])
  .addField(opciones[3],opciones[4])
  .addField(opciones[5],opciones[6])
  .setColor(opciones[7])
  .setThumbnail("https://cdn.discordapp.com/attachments/846548103192510486/846752431860613181/static.png")
  .setFooter("By HyperHosting")
  message.channel.send(embed)
  message.delete()

 }

} 