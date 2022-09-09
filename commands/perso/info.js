
module.exports = {
    name: "info",
    category: "perso",
    permissions: ["SEND_MESSAGES"],
    ownerOnly: false,
    usage: "info",
    examples: ["info rems"],
    description: "info sur le personnage",
  

    async runInteraction(client, interaction) {
        //le reste:
        if (await client.db.has(`${interaction.user.id}-webhook-name`) === false || await client.db.has(`${interaction.user.id}-webhook-avatar`) === false) return interaction.reply({ content: ":x: | Vous n'avez pas de compte enregistré !", ephemeral: true })
        await interaction.reply({
            embeds: [
                new MessageEmbed()
                    .setDescription("Voici votre utilisateur webhook")
                    .setThumbnail(await client.db.get(`${interaction.user.id}-webhook-avatar`))
                    .setColor("AQUA")
                    .addFields([
                        {
                            name: "Nom",
                            value: `\`${await client.db.get(`${interaction.user.id}-webhook-name`)}\``
                        },
                        {
                            name: "prefix",
                            value: `\`${await client.db.get(`${interaction.user.id}-webhook-prefix`) || "\",\""}\``
                        },
                        {
                            name: "Avatar",
                            value: `[Clique ici pour voir l'avatar](${await client.db.get(`${interaction.user.id}-webhook-avatar`)})`
                        }
                    ])
            ],
            ephemeral: true
        })
    }
};