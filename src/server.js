require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.BOT_PREFIX;

client.on('ready', () => {
    console.log(`Logado como: ${client.user.tag}`)
})

client.on("message", function (msg) {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    const commandBody = msg.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    // Ping
    if (command === "ping") {
        const timeTaken = Date.now() - msg.createdTimestamp;
        msg.reply(`Pong! Latency: ${timeTaken}ms.`);
    }

    // Sum of two values
    else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        msg.reply(`A soma é: ${sum}!`);
    }
});

client.login(process.env.DISCORD_TOKEN);
