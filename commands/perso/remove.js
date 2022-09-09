module.exports = {
    name: "remove",
    category: "perso",
    permissions: ["SEND_MESSAGES"],
    ownerOnly: false,
    usage: "remove",
    examples: ["remove rems"],
    description: "supprime le webhook",
  
async runInteraction(client, interaction) {
    //le reste:
    if(await client.db.has(`${interaction.user.id}-webhook-name`) === false || await client.db.has(`${interaction.user.id}-webhook-avatar`) === false) return interaction.reply({content: ":x: | Vous n'avez pas de compte enregistré !", ephemeral: true })
    await client.db.delete(`${interaction.user.id}-webhook-name`)
    await client.db.delete(`${interaction.user.id}-webhook-avatar`)
    await client.db.delete(`${interaction.user.id}-webhook-prefix`)
    await interaction.reply({content: ":white_check_mark: | Votre compte a bien été supprimé !", ephemeral: true })

}
};