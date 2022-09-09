
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(new MessageButton()
        .setCustomId('ticket-button')
        .setEmoji('📩')
        .setLabel('Ouvrir un ticket')
        .setStyle('SUCCESS'),
        
    )

const TICKET = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**Réagissez avec 📩 pour créer un ticket !**')
    .setThumbnail('https://images-ext-1.discordapp.net/external/UKGgzqBWpsHCe1XSxBMY8kvvv8o8KceLCkr80JSoFL4/https/i.imgur.com/iKeoFPf.png')
    .setDescription(`Créez un ticket d'assistance pour contacter un membre du personnel...`)
    .setTimestamp();
    
    

module.exports = {
    name: 'ticket',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'ticket',
    examples: ['ticket'],
    description: 'Création de ticket',
    async run(client, message, args) {
        await message.channel.send({ embeds: [TICKET], components: [buttons] })
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [TICKET], components: [buttons] })
    },
};