const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  alias: ["ayuda"],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()

  .setColor("BLUE")
  .setTitle("☁️ Hyper Hosting ☁️", " ‎ ‏‏‎‎ ‏‏‎‎ asd‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‏‏‏‏‏‏")
  .addField("Comandos 🔨", " ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‏‏‏‏")
  .addField("ban: Banea a un usuario del discord", "-ban @user")
  .addField("banid: Banea a un usuario por su ID de discord", "-ban-id {ID}")
  .addField("clear: limpia la cantidad de mensajes de un chat que se indique", "-clear {Cantidad}")
  .addField("cooldown: pone cierto tiempo de cooldown de mensajes en el chat que se use el comando o puedes poner off para desactivar el cooldown", "-cooldown {tiempo o off}")
  .addField("embed: usalo para crear embeds con >> cambias de zona del embed", "-embed {mensaje}")
  .addField("kick: saca a un usuario del discord", "-kick @user")
  .addField("unban: le quita el baneo a un usuario baneado previamente usando la ID de usuario", "-unban {ID}")
  .addField("warn: advierte a un usuario sobre su comportamiento, etc", "-warn @user {razon}")
  .addField("mute: silencia a un usuario y no le permite hablar", "-mute @user")
  .addField("muterol: pone el rol que se les va a dar a los que sean muteados (Tienes que configurar el rol para que no hablen)", "-muterol @rol")
  .setFooter("Bot Exclusivo de HyperHosting ☁️ ")

  message.channel.send(embed)

  }

}
