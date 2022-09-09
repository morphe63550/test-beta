
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('roles-menu')
            .setPlaceholder('Choisir un rôle dans la liste')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: '🦁',
                    description: 'Choisis gryffondor',
                    value: '1012703448145342505'
                },
                {
                    label: 'serdaigle',
                    description: 'Choisis serdaigle',
                    value: '1012703562972811384'
                },
                {
                    label: 'pouffsoufle',
                    description: 'Choisis pouffsoufle',
                    value: '1012703679956140123'
                },
                {
                    label: 'serpentard',
                    description: 'Choisis serpentard',
                    value: '1012703853730340924'
                }
            ])
         
    )

    const rolesEmbed = new MessageEmbed()
    .setTitle('Ｂｉｅｎｖｅｎｕｅ ａ Ｐｏｕｄｌａｒｄ!')
    .setDescription('Votre lettre en possession, il est temps de choisir votre maison\n selectionner votre maison et venez découvrir tout ce qui si cache!!!!!')
    .setFooter({ text: '𝑅𝑜𝓂𝓊𝓁𝓊𝓈 𝐿𝓊𝓅𝒾𝓃, 𝒟𝒾𝓇𝑒𝒸𝓉𝑒𝓊𝓇 𝒹𝑒 𝒫𝑜𝓊𝒹𝓁𝒶𝓇𝒹' })

module.exports = {
    name: 'roles',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'roles',
    examples: ['roles'],
    description: 'roles',
    async run(client, message, args) {
        await message.channel.send({ embeds: [rolesEmbed], components: [selectMenu] })
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [rolesEmbed], components: [selectMenu] })
    },
};