const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
let db_muterole = new db.crearDB("canal_rolemute");

module.exports = {
  name: "setmuterol",
  alias: ["setmuterol"],

execute (client, message, args){

let permiso = message.member.hasPermission("ADMINISTRATOR"); 
if(!permiso) return message.reply('No tienes permisos para usar este comando');
        
let role = message.mentions.roles.first(); 
if (!role) return message.channel.send("menciona un role");
        
db_muterole.establecer(`${message.guild.id}`, `${role.id}`);
message.channel.send({ 
embed: {
color: "00f00f",
title: "Mute rol actualizado.",
description: `Rol: <@&${role.id}>`
}
});

 }

} 