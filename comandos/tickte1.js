const Discord = require('discord.js')

module.exports = {
    name: 'setup-ticket1',
}

module.exports.execute = async(client, msg, args) => {

let everyone = msg.guild.roles.cache.find(rol => rol.name == "@everyone");
let ownership = msg.guild.roles.cache.find(rol => rol.name == "@OwnerShip");

let permiso = msg.member.hasPermission("ADMINISTRATOR");

const embedsetup2 = new Discord.MessageEmbed()
    .setTitle("Support")
    .setDescription("Para crear un ticket presiona el siguiente emoji 🎟️")
    .setColor("RED")
    .setFooter("🛰️   HyperHosting")

const embedwelcome = new Discord.MessageEmbed()
    .setDescription("Si deseas cerrar el ticket presiona el siguiente emoji 🔒")
    .setColor("BLACK")
    .setFooter("🛰️   HyperHosting")

const embedconfirm = new Discord.MessageEmbed()
    .setDescription("Estas seguro de que quieres cerrar el ticket?")
    .setColor("YELLOW")
    .setFooter("🛰️   HyperHosting")

if(!permiso) return msg.reply("No tienes permisos para usar este comando");

msg.channel.send("***Si tienes una duda crea un ticket aquí y te atenderemos inmediatamente.***")
msg.channel.send(embedsetup2).then(m => {
    m.react('🎟️')
    m.awaitReactions(async(reaction, user) =>{
     if(user.id === client.user.id) return;
     if(reaction.emoji.name === '🎟️'){
        reaction.users.remove(user.id);
        reaction.message.guild.channels.create(`support-${msg.author.discriminator}`, {
    permissionOverwrites:[
      {
        id: everyone.id,
        deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
      },
      {
        id: msg.author.id,
        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
      }
      ],
       parent: "855518284052168724"}).then((c) => {
           c.send(`${reaction.message.guild.members.cache.get(user.id)} Bienvenido al sistema de soporte.`)
           c.send(embedwelcome).then(m => {
             m.react('🔒')
             m.awaitReactions(async(reaction, user) =>{
               if(user.id === client.user.id) return;
               if(reaction.emoji.name === '🔒'){
                 reaction.users.remove(user.id)
                 m.channel.send(embedconfirm).then(m => {
                   m.react('✅')
                   m.react('❎')
                   m.awaitReactions(async(reaction, user) =>{
                     if(user.id === client.user.id) return;
                     if(reaction.emoji.name === '✅'){
                       m.channel.delete()
                     } 
                     if(reaction.emoji.name === '❎'){
                       m.delete()
                     }
                   })
                   })
                  }
                })
             })
           })
         }
       })        
     })
     msg.delete()
  }
 