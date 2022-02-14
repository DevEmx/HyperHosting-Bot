const Discord = require('discord.js')

module.exports = {
    name: 'a',
    description: '',
    usage: '',
    aliases: [],
    permissions: [],
    botPermissions: [],
    nsfw: false,
    cooldown: 0,
    ownerOnly: true
}

module.exports.execute = async(client, msg, args) => {
  const canal = client.channels.cache.get("846533520313679892")
const embed = new Discord.MessageEmbed()
    .setTitle("Hyper Hosting | Reglas")
    .setDescription("1 -> Prohibido el spam en el chat\n2 -> Prohibido el flood (Llenar el chat con más de 5 caracteres)\n3 -> No molestar o incomodar a los demás usuarios ya sea por voz o chat\n4 -> Prohibido insultar a otros jugadores o comportamiento ofensivo\n5 -> Respetar y acatar al staff\n6 -> Respetar cada apartado de cada canal\n7 -> Prohibido el mencionar otros servidores de cualquier forma.\n8 -> Prohibido mencionar páginas con contenido para adultos o NSFW\n9 -> Prohibido insultos hacia el servidor.")
    .setColor("RED")
canal.send(embed)

}