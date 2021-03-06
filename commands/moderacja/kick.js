const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(message.member.hasPermission("KICK_MEMBERS") == true) {
        if(args[0] == null) {
            message.reply("Podaj użytkownika do wyrzucenia!");
            message.react("❌");
        } else {
                var member = message.guild.members.find('id', message.mentions.users.first().id);
                if (member.kickable == true) {
                    let reason = args.slice(1).join(' ');
                    if(!reason) reason = "brak";
                    member.kick("Wyrzucono przez użytkownika: " + message.author.tag + " " + `z powodem ${reason}`);
                    message.channel.send("Wyrzucono użytkownika: " + member.user.username + " " + `z powodem ${reason}`);
                    message.react("✅");
                } else {
                    message.channel.send("Bot nie ma uprawnień do wyrzucenia tego użytkownika!");
                    message.react("❌");
                }
            }
        } else {
            message.reply("Brak uprawnień!");
            message.react("❌");
        }
    }    

module.exports.help = {
    name:"kick",
}