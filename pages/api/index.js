const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });
const prefix = "-";

export default (req, res) => {

    client.on("message", function (msg) {
        console.log(msg)
    });
    
    client.login(config.BOT_TOKEN);

    res.status(200).json({ok:true})

}
