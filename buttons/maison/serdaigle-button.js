module.exports = {
    name: 'serdaigle-button',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('936767278647767100');
        await interaction.reply({ content: 'Vous venez de rejoindre la Belle maison des \`\`\`SERDAIGLE\`\`\`. Bienvenue à vous', ephemeral: true });
    }
};