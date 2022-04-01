require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.BOT_PREFIX;

client.on('ready', () => {
    console.log(`Logged in as: ${client.user.tag}`);
})

// Check for a new message sent
client.on("message", function (msg) {
    if (msg.author.bot) return; // if the message was sent by the bot, ignore it.
    if (!msg.content.startsWith(prefix)) return; // if the message doens't starts with the default prefix, ignore it.

    // Parse the message string
    const commandBody = msg.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    // Commands 
    switch (command) {
        case 'ping':
            const timeTaken = Date.now() - msg.createdTimestamp;
            msg.reply(`Pong! Latency: ${timeTaken}ms.`);
        break;
      case 'sum':
            const numArgs = args.map(x => parseFloat(x));
            const sum = numArgs.reduce((counter, x) => counter += x);
            msg.reply(`A soma é: ${sum}!`);
      default:
        return;
    }
});

client.login(process.env.DISCORD_TOKEN);
