require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => console.log('Bot is up and ready!'));

client.login(process.env.BOT_TOKEN)

client.on('message', require('./command'))