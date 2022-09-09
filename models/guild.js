const mongoose = require("mongoose");

const guildSchema = mongoose.Schema({
    id: String,
   prefix: { type: String, default: "!" },
   logChannel: { type: String, default: "1010221231921967176" },
   testChannel: { type: String, default: "1012704976440668292" }
});

module.exports = mongoose.model("Guild", guildSchema);
