const {Client, ChatInputCommandInteraction } = require("discord.js")
module.exports = {
    name: "Beep",
    description: "répond boop",
    category: "Information",
    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(client, interaction) {
        return interaction.reply({content: `Boop !!!:`})
    }
}