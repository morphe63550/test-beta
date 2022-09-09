
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('gryffondor-button')
            .setLabel('🦁 Gryffondor 🦁')
            .setStyle('PRIMARY'),           
        new MessageButton()
            .setCustomId('pouffsoufle-button')
            .setLabel('Pouffsoufle')
            .setStyle('PRIMARY')
            .setEmoji('🦡'),
        new MessageButton()
            .setCustomId('serdaigle-button')
            .setLabel('Serdaigle')
            .setStyle('PRIMARY')
            .setEmoji('🦅'),
        new MessageButton()
            .setCustomId('serpentard-button')
            .setLabel('Serpentard')
            .setStyle('PRIMARY')
            .setEmoji('🐍')
    )

const maisonEmbed = new MessageEmbed()
    .setTitle('Ｂｉｅｎｖｅｎｕｅ ａ Ｐｏｕｄｌａｒｄ!')
    .setDescription('Votre lettre en possession, il est temps de choisir votre maison\n selectionner votre maison et venez découvrir tout ce qui si cache!!!!!')
    .setFooter({ text: '𝑅𝑜𝓂𝓊𝓁𝓊𝓈 𝐿𝓊𝓅𝒾𝓃, 𝒟𝒾𝓇𝑒𝒸𝓉𝑒𝓊𝓇 𝒹𝑒 𝒫𝑜𝓊𝒹𝓁𝒶𝓇𝒹' })
    


module.exports = {
    name: 'maison',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'maison',
    examples: ['Actionner le bouton de votre maison'],
    description: 'Choississez votre maison',
    async run(client, message, args) {
        await message.channel.send({ embeds: [maisonEmbed], components: [buttons] })
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [maisonEmbed], components: [buttons] })
    },
};