module.exports = {
    name: "messageReactionAdd",
    once: false,
    async execute(client, messageReaction, user) {
        // 🦁 🐍 🦅 🦡
        const message = messageReaction.message;
        const emojiName = messageReaction.emoji.name;
        const member = message.guild.members.cache.get(user.id);
        if (member.user.bot) return;

        if (messageReaction.partials) {
            try {
                await messageReaction.fetch();
            } catch (error) {
                console.log('Impossible de récupérer les messages!');
                return;
            }
        }

        //if (emojiName === '🦁') message.delete(); // supprime le message une fois l'émoji choisi
        //if (emojiName === '🐍') message.reactions.removeAll(); // supprime les emojis une fois cliquer
       // if (emojiName === '🦅') message.channel.send('Je suis de la maison serdaigle'); // renvoi un message
        //if (emojiName === '🦡') member.send('Je suis de la maison serdaigle');
        if (emojiName === '🦅') member.roles.add('1011696192482185317');

           }
};
