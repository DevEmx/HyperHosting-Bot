const Discord = require('discord.js');

module.exports = {
    name: 'machine-prices',

execute (client, message, args){

const embed = new Discord.MessageEmbed()
    .setTitle("__MACHINE PRICES__")
    .setDescription("**4 gb:**\n- 2 vcores\n- 2 USD (1 mes)\n**8 gb:**\n- 2 vcores\n- 5 USD (1 mes)\n**16 gb:**\n- 4 vcores\n- 9 USD (1 mes)\n**32 gb:**\n- 4 vcores\n- 14 USD (1 mes)\n**__CUSTOM__**\nsi quieres una\nvps custom crea\nun ticket.")
    .setColor("DARK_BLUE")
    .setThumbnail("https://cdn.discordapp.com/attachments/846548103192510486/846752431860613181/static.png")
    .setFooter("🛰️   HyperHosting")

message.channel.send(embed)
message.delete()


    }
}