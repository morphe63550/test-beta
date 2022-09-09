
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('genre-menu')
            .setPlaceholder('Choisir votre genre dans la liste')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: 'homme',
                    description: 'Vous êtes un homme',
                    value: '937649229705400351'
                },
                {
                    label: 'Femme',
                    description: 'Vous êtes une femme',
                    value: '937649388048764979'
                },
                {
                    label: 'Non Genre',
                    description: 'A vous de choisir',
                    value: '937649471385395220'
                }
            ])
         
    )

    const genreEmbed = new MessageEmbed()
    .setTitle('Choisissez votre genre si vous le souhaitez !')
    .setDescription('Choisissez ces rôles si vous le souhaitez')

module.exports = {
    name: 'genre',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'genre',
    examples: ['genre'],
    description: 'genre',
    async run(client, message, args) {
        await message.channel.send({ embeds: [genreEmbed], components: [selectMenu] })
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [genreEmbed], components: [selectMenu] })
    },
};