const Discord = require("discord.js");
const config = require("../config.json");
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MOVE_MEMBERS")) {message.channel.send("Ta komenda wymaga uprawnienia `Przenieś członków`"); message.react("❌"); return;}
        if(args[0] == null) {message.channel.send("Podaj kogo chcesz wyrzucić"); return;}
    if(message.mentions.users.first() == null) {
    var zn2 = false;
    message.guild.members.forEach(function(memb) {
        if(memb.user.username.toLowerCase() == args[0].toLowerCase()) {
            message.guild.createChannel("Kick", "voice").then(vChan => {
                memb.setVoiceChannel(vChan).then(mem => vChan.delete());
                message.react("✅");
            }).catch(err => anticrash(message.channel, err));
            zn2 = true;
        }
    });
    if (zn2 == false) {
        message.reply("nie znaleziono takiego użytkownika!");
        return;
    }
} else {
    var memb = message.guild.member(message.mentions.users.first());
    message.guild.createChannel("Kick", "voice").then(vChan => {
        memb.setVoiceChannel(vChan).then(mem => vChan.delete());
        message.react("✅");
    }).catch(err => anticrash(message.channel, err));
    zn2 = true;
}
}

module.exports.help = {
    name: "voicekick",
    aliases: "kickvoice"
}