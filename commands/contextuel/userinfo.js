const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'userinfo',
    category:'contextuel',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'Utiliser le menu contextuel de Discord',
    examples: ['Utiliser le menu contextuel de Discord'],
    type: 'USER',
    async runInteraction(client, interaction) {
        const member = await interaction.guild.members.fetch(interaction.targetId);

        const embed = new MessageEmbed()
        .setAuthor({name: `${member.user.tag} (${member.id})`, iconURL: member.user.bot ? 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/robot_1f916.png' : 'https://img1.freepng.fr/20190701/eu/kisspng-emoji-astronaut-emoticon-smiley-human-skin-color-5d19a09c58bc97.1720587215619606043635.jpg'})
        .setColor('#8e48f7')
        .setImage(member.user.displayAvatarURL())
        .addFields(
            {name: 'Nom', value: `${member.user.tag}`, inline: true},
            {name: 'Moderateur', value: `${member.kickable ? '🔴' : '🟢'}`, inline: true},
            {name: 'Bot', value: `${member.user.bot ? '🟢' : '🔴'}`, inline: true},
            {name: 'Roles', value: `${member.roles.cache.map(role => role).join(', ').replace(', @everyone', ' ')}`},
            {name: 'A créé son compte le', value: `<t:${parseInt(member.user.createdTimestamp / 1000)}
            :f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)` },
            {name: 'a rejoint le serveur le', value: `<t:${parseInt(member.joinedTimestamp / 1000)}
            :f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)`},
        )

        interaction.reply({ embeds: [embed], ephemeral: true})
    }
};