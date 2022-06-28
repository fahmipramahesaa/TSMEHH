const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const TOKEN = "OTcyOTA2MDUyOTAxMjk0MTUw.GWA4dQ.B8Kt8YGNAcFFaOlac9Q34CRpFeyRixFsOjBE-o"

client.on("ready", () => {
    client.user.setActivity(".help", { type: "PLAYING"})
})

client.on("messageCreate", (message) => {
    if(message.content == ".help"){
        message.reply("Commands: !server !roles !newvid !member")
    }
    if(message.content == "!server"){
        message.reply("https://discord.gg/t6983t5")
    }
    if(message.content == "!roles"){
        message.reply("Take a role there <#856262379493785620>")
    }
    if(message.content == "halo"){
        message.reply("https://c.tenor.com/sT7ZfN6E8pIAAAAC/tsm-hauntzer.gif")
    }
    if(message.content == "live"){
        message.reply("https://www.youtube.com/FahmiPramahesaa **Live now on Youtube! @everyone**")
    }
    if(message.content == "!newvid"){
        message.reply("https://youtu.be/5Q4xIp-VQ0w **New content, check this out! @everyone**")
    }
    if(message.content == "gg"){
        message.reply("https://j.gifs.com/yD5EEg.gif")
    }
    if(message.content == "sukadik"){
        message.reply("https://pbs.twimg.com/media/E2L9A5xUcAIZmHz.png")
    }
    if(message.content == "ez"){
        message.reply("https://c.tenor.com/5ZY1fG1xGHoAAAAM/ez-gif.gif")
    }
    if(message.content == "ImperialCeh"){
        message.reply("https://media.tenor.com/images/5be797693adee47fbd0478becbf64eac/tenor.gif")
    }
    if(message.content == "passion"){
        message.reply("https://media1.tenor.com/images/d22a611523bee4f7653c2c3d66435c2e/tenor.gif")
    }
    if(message.content == "<@408125641590833152>"){
        message.reply("ASIKKKKKKKKKKKKK!!!!!!!!")
    }
    if(message.content == "!member"){
        message.reply("https://www.youtube.com/FahmiPramahesaa/join")
    }
})
client.login(TOKEN)
