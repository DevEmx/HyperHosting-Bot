const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
  name: "setcooldown",
  alias: ["cooldown"],

async execute (client, message, args){

if (!message.member.permissions.has(["ADMINISTRATOR", "MANAGE_CHANNELS"])) {
return message.channel.send("No tienes permisos para usar este comando");
}
  
let canal = message.mentions.channels.first(),
tiempo = args.slice(1).join(" ");
  
if (!canal) tiempo = args.join(" "), canal = message.channel;
 
  
if (args[0]  === "off") {
canal.setRateLimitPerUser(0);
return message.channel.send(`Se ha desactivado el cooldown para el canal: <#${canal.id}>`);
  }
  
  if (!tiempo) return message.channel.send("tienes que poner un tiempo o off para desactivar el cooldown");
  
  let conversion = ms(tiempo);
  let segundos = Math.floor(conversion / 1000);


  
  if (segundos > 21600) return message.channel.send("El temporizador debe ser menor o igual a 6 horas.");
  else if (segundos < 1) return message.channel.send("El temporizador debe ser mayor o igual a 1 segundo.");
  
  await canal.setRateLimitPerUser(segundos);
  return message.channel.send(`Este canal: <#${canal.id}> se le coloco un cooldown de **${ms(ms(tiempo), {long: true})}**.`);

 }

} 