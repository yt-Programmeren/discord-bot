const Discord = require('discord.js');

module.exports = msg => {
    const member = msg.guild.member(msg.author);
    const accountMade = member.user.createdAt;
    const joinedServer = member.joinedAt;
    const Embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setAuthor(member.user.username, member.user.avatarURL( { format: 'png'} ))
        .addFields(
            { name: 'Is bot?', value: member.user.bot, inline: true },
            { name: 'Account created:', value: `${accountMade.getUTCDate()}/${accountMade.getUTCMonth() + 1}/${accountMade.getUTCFullYear()}`, inline: true },
            { name: 'Joined at:', value: `${joinedServer.getUTCDate()}/${joinedServer.getUTCMonth() + 1}/${joinedServer.getUTCFullYear()}`, inline: true }
        )
        .addFields(
            { name: 'Status:', value: member.user.presence.status, inline: true }
        )
        .setTimestamp();
    msg.channel.send(Embed);
}
