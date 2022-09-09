module.exports = {
    name: 'pouffsoufle-button',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('936759435693551658');
        await interaction.reply({ content: 'Vous venez de rejoindre la Belle maison des \`\`\`POUFFSOUFLE\`\`\`. Bienvenue à vous', ephemeral: true });
    }
};