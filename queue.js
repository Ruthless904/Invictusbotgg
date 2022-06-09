const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const util = require("../util/pagination");

module.exports = {
    info: {
        name: "queue",
        description: "To show the server songs queue",
        usage: "",
        aliases: ["q", "list", "songlist", "song-list"],
    },
    run: async function (client, message, args) {
        const permissions = message.channel.permissionsFor(message.client.user);
        if (!permissions.has(["MANAGE_MESSAGES", "ADD_REACTIONS"])) return sendError("Missing permission to manage messages or add reactions", message.channel);

        const queue = message.client.queue.get(message.guild.id);
        if (!queue) return sendError("There is nothing playing in this server.", message.channel);

        const que = queue.songs.map((t, i) => `**${++i}** - ${t.title} `);

        const chunked = util.chunk(que, 10).map((x) => x.join("\n"));


        const embed = new MessageEmbed()
            .setTitle("Invictus Queue")
            .setColor("#CFDEFF")
            .setDescription(chunked[0])
            .addField("__Now Playing__", `[${queue.songs[0].title}](${queue.songs[0].url})`, true)
            
        if (queue.songs.length === 1) embed.setDescription(`No songs to play next add songs by \`\`${message.client.config.prefix}play <song_name>\`\``);

        try {
            const queueMsg = await message.channel.send(embed);
            if (chunked.length > 1) await util.pagination(queueMsg, message.author, chunked);
        } catch (e) {
            msg.channel.send(`An error occured: ${e.message}.`);
        }
    },
};