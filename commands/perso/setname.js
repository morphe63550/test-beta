module.exports = {
    name: "setname",
    category: "perso",
    permissions: ["SEND_MESSAGES"],
    ownerOnly: false,
    usage: "setname",
    examples: ["setname rems"],
    description: "set name of webhook",
    options: [
        {
            name: "name",
            description: "name of webhook",
            type: "STRING",
            required: true
        }
    ],

    async runInteraction(client, interaction) {
        //le reste:
        let name = interaction.options.getString("name")
        await client.db.set(`${interaction.user.id}-webhook-name`, name)
        await interaction.reply({ content: "Name set !", ephemeral: true })
    }
};
