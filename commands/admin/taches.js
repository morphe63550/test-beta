
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'taches',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'taches',
    examples: ['taches'],
    description: 'Listes des taches a faire sur le serveur',
    async run(client, message, args) {

        const tacheEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`__**Liste des choses a faire : **__`)
        .setThumbnail('https://cdn.discordapp.com/attachments/993152858738401321/1015679095780163625/poudlard-ecole-de-sorcellerie-poudlard.gif')
        .setDescription(`            
        \n\n★彡....Mise en place du salon de validation réglement  ✅......彡★\n
        ★彡....Mise en place des salon arrivé et départ        ✅......彡★\n
        ★彡....Mise en place des tickets support               ✅......彡★\n            
        ★彡....Retravailler les suggestions                    ✅......彡★\n
        ★彡....Mise en place de tous les auto roles            ✅......彡★\n
        ★彡....Création de commande Tupper                     ❌......彡★\n
        ★彡....Création de commande RaidProtect                ❌......彡★\n
        ★彡....Création des sabliers des maisons               ❌......彡★\n
        ★彡....Jeux fun                                        ❌......彡★\n
        `)
        .setTimestamp();

        await message.channel.send({ embeds: [tacheEmbed] })
    },
    async runInteraction(client, interaction) {

        const tacheEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`__**Liste des choses a faire : **__`)
            .setThumbnail('https://cdn.discordapp.com/attachments/993152858738401321/1015679095780163625/poudlard-ecole-de-sorcellerie-poudlard.gif')
            .setDescription(`            
            \n\n★彡....Mise en place du salon de validation réglement  ✅......彡★\n
            ★彡....Mise en place des salon arrivé et départ        ✅......彡★\n
            ★彡....Mise en place des tickets support               ✅......彡★\n            
            ★彡....Retravailler les suggestions                    ✅......彡★\n
            ★彡....Mise en place de tous les auto roles            ✅......彡★\n
            ★彡....Création de commande Tupper                     ❌......(en cours)彡★\n
            ★彡....Création de commande RaidProtect                ❌......彡★\n
            ★彡....Création des sabliers des maisons               ❌......彡★\n
            ★彡....Jeux fun                                        ❌......彡★\n
            `)
            .setTimestamp();

        await interaction.reply({ embeds: [tacheEmbed] })
    },
};