module.exports = {
    name: "setprefix",
    category: "perso",
    permissions: ["SEND_MESSAGES"],
    ownerOnly: false,
    usage: "setprefix",
    examples: ["setprefix "],
    description: "set name of webhook",
    options: [
        {
            name: "prefix",
            description: "change prefix",
            type: 3,
            required: true
        }
    ],

    async runInteraction(client, interaction) {
        //le reste:
        let prefix = interaction.options.getString("prefix")
        if (parseInt(prefix) < 1 && parseInt(prefix) > 5) return interaction.reply({ content: "Votre prefix est trop long !", ephemeral: true })
        await client.db.set(`${interaction.user.id}-webhook-prefix`, prefix)
        await interaction.reply({ content: `Votre prefix est désormais: ${prefix}`, ephemeral: true })
    }
};
