const {Client, ChatInputCommandInteraction, EmbedBuilder } = require("discord.js")
const moment = require("moment")
const ms = require("ms")
module.exports = {
    name: "info",
    description: "Show channel/guild/user informations.",
    options: [
        {
            name: "user",
            description: "Get user info",
            type: 1,
            options: [
                {
                    name: "user",
                    description: "Select the user",
                    type: 6,
                    required: false
                }
            ]
        },
        {
            name: "server",
            description: "Get server info",
            type: 1,
        },
        {
            name: "channel",
            description: "Get channel info",
            type: 1,
            options: [
                {
                    name: "channel",
                    description: "Select the channel",
                    type: 7,
                    required: false
                }
            ]
        }
    ],
    category: "Information",
    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(client, interaction) {
        const { guild, options, user } = interaction

        try {
            switch(options.getSubcommand()) {
                case "user": {
                    const Target = options.getMember("user")
                    await Target.fetch()

                    async function displayHex(Target) {
                        if(Target.displayHexColor !== "#000000") {
                            return Target.displayHexColor;
                        } else {
                            return "#2F3136"
                        }
                    }

                    const Response = new EmbedBuilder()
                    .setColor(await displayHex(Target))
                    .setAuthor({
                        name: `${Target.user.tag} Information`,
                        iconURL: Target.avatarURL({
                            dynamic: true,
                        })
                    })
                    .setThumbnail(`${Target.displayAvatarURL({dynamic: true, size: 1024})}`)
                    .addFields({
                        name: "General",
                        value: `
                        
                        **\`•\` Nom**: ${Target.user}
                        **\`•\` ID**: ${Target.id}
                        **\`•\` Roles**: ${Target.roles.cache.map(r => r).join(", ").replace("@everyone", " ") || "None"}
                        **\`•\` Date ou il a rejoin le server**: <t:${parseInt(Target.joinedTimestamp / 1000)}:R>
                        **\`•\` Date ou il a créé son compte**: <t:${parseInt(Target.user.createdTimestamp / 1000)}:R>
                        `,
                        inline: false
                    })

                    interaction.reply({
                        embeds: [Response],
                        ephemeral: true
                    })
                } break;
            }
        } catch(err) {
            console.log(err)
        }
    }
}