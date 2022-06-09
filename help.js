  
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor("Invictus", "https://media.discordapp.net/attachments/830723201490747402/835795350324903976/Invictus.jpg?width=452&height=452")
      .setTitle("")
      .setColor("#CFDEFF")
      .setDescription("Invictus is best bot for playing music in your servers . it supports youtube , soundcloud & spotify more coming soon !    \n   \n  To get started, join a voice channel and ``play` a song. You can use song names, video links.")
      .addField('Commands', 'Full list of commands listed [here](https://inivictus.gitbook.io/invictus/)',false) 
      .addField('Support', 'Join our [support server](https://discord.gg/BXZn2vrTp) if you are having trouble or have any questions.',false)



    message.channel.send(embed);
}

module.exports.config = {
    name: "help",
    description: "list of help module",
    usage: "!help",
    accessableby: "Members",
    aliases: []
}