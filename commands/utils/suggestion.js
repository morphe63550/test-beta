const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'suggestion',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'suggestion [suggestions]',
    examples: ['suggestion', 'suggestion qu\'elle heure est-il ?'],
    description: 'Poster votre propre suggestion',
    async run(client, message, args) {
        if (!args[0]) return message.reply('Merci d\'entrer une question pour votre sondage');

        const embed = new MessageEmbed()
            .setColor('#C5BE74')
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setTitle("Nouvelle suggestions")
            .setDescription("```fix\n " + message.content + "\n```")
            .setTimestamp()
            .setFooter({ text: 'Envoyé par: ' + message.author.tag, iconURL: `${message.author.displayAvatarURL()}` })

        const poll = await message.reply({ embeds: [embed] });
        poll.react('👍');
        poll.react('👎');
    },
    options: [
        {
            name: 'content',
            description: 'tapper votre suggestion',
            type: 'STRING',
            require: true,
        },

    ],
        async runInteraction(client, interaction) {
            const pollContent = interaction.options.getString('content');

            const embed = new MessageEmbed()
                .setColor('#C5BE74')
                .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
                .setTitle("Nouvelle suggestions")
                .setDescription("```fix\n " + pollContent + "\n```")
                .setTimestamp()
                .setFooter({ text: 'Envoyé par: ' + interaction.user.tag, iconURL: `${interaction.user.displayAvatarURL()}` })

            const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
            poll.react('👍');
            poll.react('👎');
        }
    };
