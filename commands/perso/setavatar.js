module.exports = {
    name: "setavatar",
    category: "perso",
    permissions: ["SEND_MESSAGES"],
    ownerOnly: false,
    usage: "setavatar",
    examples: ["setavatar rems"],
    description: "set avatar of webhook",
    options: [
        {
            name: "avatar",
            description: "avatar of webhook (url)",
            type: 3,
            required: true
        }
    ],

async runInteraction(client, interaction) {
//le reste:
let avatar = interaction.options.getString("avatar")
if(!avatar.startsWith("https://")) return interaction.reply({content: "L'avatar doit obligatoirement etre un lien !", ephemeral: true })
await client.db.set(`${interaction.user.id}-webhook-avatar`, avatar)
await interaction.reply({content: "avatar set !", ephemeral: true })
}
};