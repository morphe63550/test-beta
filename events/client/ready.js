const Logger = require('../../utils/Logger');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        let guildsCount = await client.guilds.fetch();
        let userCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

        Logger.client(`- Le Bot est OP par ${userCount} utilisateur sur ${guildsCount.size} serveur !!!!!`)

        client.user.setPresence({ activities: [{ name: 'Poudlard', type: 'WATCHING' }], status: 'online' });

        const devGuild = await client.guilds.cache.get('935664937076920341');
        devGuild.commands.set(client.commands.map(cmd => cmd));

    },
};