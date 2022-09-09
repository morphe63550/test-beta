module.exports = {
    name: 'genre-menu',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add(interaction.values[0]);
        await interaction.reply({ content: 'Le rôle as bien était rajouter ', ephemeral: true });
    }
};