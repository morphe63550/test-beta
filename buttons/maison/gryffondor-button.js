module.exports = {
    name: 'gryffondor-button',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('936123450567843880');
        await interaction.reply({ content: 'Vous venez de rejoindre la Belle maison des \`\`\`GRYFFONDOR\`\`\`. Bienvenue à vous', ephemeral: true });
    }
};