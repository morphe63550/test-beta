const { Guild } = require('../../models/index');

module.exports = {
    name: 'reload',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'reload',
    examples: ['reload'],
    description: 'Relancer le bot',
    async run(client, message, args) {
        //const devGuild = await client.guilds.cache.get('1010217415784792166');
        //devGuild.commands.set([]);
        await interaction.reply('Bot relancé avec succès');
        return process.exit();
    },
   
    async runInteraction(client, interaction, process) {
        //const devGuild = await client.guilds.cache.get('1010217415784792166');
        //devGuild.commands.set([]);
        await interaction.reply('Bot relancé avec succès');
        return process.exit();
    },
};