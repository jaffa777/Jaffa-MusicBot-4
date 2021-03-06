const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(message.member.hasPermission("MANAGE_MESSAGES") == true) {
        if(args[0] == null) {
            message.reply("Podaj ilość wiadomości do usunięcia!");
            message.react("❌");
        } else {   
            const wartosc = parseInt(args[0], 10);
            if (wartosc >= 101) {
                message.reply("Wartość " + wartosc + " jest za duża"); 
                return;
            } else {
            const wartosc = parseInt(args[0], 10);
            message.channel.fetchMessages({limit: wartosc})
            .then(messages => {
            message.channel.bulkDelete(1);
            message.channel.bulkDelete(wartosc).then(messages => {
                message.reply("Usunięto " + messages.size + " wiadomości").then(message => message.delete(5000));
            });
        });
    }
}
    } else {
    message.reply("Brak uprawnień!");
    message.react("❌");
    }
}
module.exports.help = {
    name: "prune",
    aliases: ["clear"]
}
