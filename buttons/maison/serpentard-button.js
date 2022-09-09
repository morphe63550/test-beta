module.exports = {
    name: 'serpentard-button',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('936767654893596703');
        await interaction.reply({ content: 'Vous venez de rejoindre la Belle maison des \`\`\`SERPENTARD\`\`\`. Bienvenue à vous', ephemeral: true });
    }
};