const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "[invite]",
    aliases: ["i","inv"],
  },

  run: async function (client, message, args) {
    

    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setAuthor("Invictus", "https://media.discordapp.net/attachments/830723201490747402/835795350324903976/Invictus.jpg?width=452&height=452")
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Want invictus in your server? Invite me today!`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=826045332403912705&scope=bot&permissions=8`)
    .setColor("#CFDEFF")
    .setFooter("")
    return message.channel.send(invite);
  },
};