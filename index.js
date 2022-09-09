const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const mongoose = require('mongoose');
const client = new Client({intents: 3276799, partials: ['MESSAGE','CHANNEL', 'REACTION', 'USER'] });
const Logger = require('./utils/Logger');
const { Database } = require("quickmongo");
const db = new Database("mongodb+srv://Rems:Theo1607@cluster0.dg4l2ls.mongodb.net/?retryWrites=true&w=majority");

//client.commands = new Collection();
//client.bouttons = new Collection();
['commands', 'buttons', 'selects'].forEach(x => client[x] = new Collection());
['CommandUtil', 'EventUtil', 'ButtonUtil', 'SelectUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });
require('./utils/Functions')(client);

client.db = db;

process.on('exit', code => { Logger.client(`Le processus s'est arrêté avec le code: ${code}!`) });

process.on('uncaughtException', (err, origin) => { 
    Logger.error(`UNCAUGHT_EXCEPTION: ${err}`);
    console.error(`Origine: ${origin}`) 
});

process.on('unhandledRejection', (reason, promise) => {
    Logger.warn(`UNHANDLED_REJECTION: ${reason}`); 
    console.log(promise);
});

process.on('Warning', (...args) => Logger.warn(...args));

mongoose.connect(process.env.DATABASE_URI, {
    autoIndex: false, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4 
}).then(() => { Logger.client('- connecté à la base de données!') })
.catch(err => { Logger.error(err) });

db.on("ready", () => {
    console.log("Connecté !")
})

db.connect()

client.login(process.env.DISCORD_TOKEN);