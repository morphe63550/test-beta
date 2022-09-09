const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('annonce-menu')
            .setPlaceholder('Choisir un rôle dans la liste')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: 'Annonces',
                    description: 'Pour être informer de toutes les nouvelles',
                    value: '937484239534956554'
                },
                {
                    label: 'Partenariats',
                    description: 'Pour connaitre les nouveaux partenariats',
                    value: '937482260016431125'
                },
               
            ])
         
    )

    const annonceEmbed = new MessageEmbed()
    .setTitle('Annonce et partenariats')
    .setDescription('Choisissez ces rôles si vous voulez être avertis des annonces et des partenariats !!!')

module.exports = {
    name: 'annonce',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'annonce',
    examples: ['annonce'],
    description: 'annonce',
    async run(client, message, args) {
        await message.channel.send({ embeds: [annonceEmbed], components: [selectMenu] })
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [annonceEmbed], components: [selectMenu] })
    },
};