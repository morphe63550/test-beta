const { MessageEmbed, Interaction } = require("discord.js");
const { runInteraction } = require("./ticket-button");


module.exports = {
    name: 'close-button',
    async runInteraction(client, interaction) {
        if (interaction.member.permissions.has(['MANAGE_MESSAGES'])) {
            if (!interaction.channel.name.includes('ticket')) {

            } else {
                const SUPPR = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('**Ticket**')
                    .setDescription(`Suppression du ticket dans quelques secondes...`)
                    .setTimestamp()


                interaction.channel.send({ embeds: [SUPPR], ephemeral: true });
                setTimeout(() => {
                    interaction.channel.delete()
                }, 3500)
            }
        } 
    }
}
