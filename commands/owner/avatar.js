const Discord = require("discord.js");
const config = require("../../config.json");
const prefix = config.prefix;
const index = require("../../index.js");

module.exports.run = async (client, message, args) => {
    if(message.author.id != config.settings.ownerid && message.author.id != config.settings.devid) return;
    if(args[0] == null) {
        if(Array.from(message.attachments)[0] == null) {
            message.reply("Podaj link do avatara!");
            message.react("❌");
        } else {
            message.attachments.forEach(function(a) {
                client.user.setAvatar(a.url)
                .then(user => message.react("✅"))
                .catch(err => require("../../events/anti.js").crash(message.channel, err));
            });
        }
    } else {
        client.user.setAvatar(args[0])
        .then(user => message.react("✅"))
        .catch(err => require("../../events/anti.js").crash(message.channel, err));
    }
}

module.exports.help = {
    name:"avek"
}