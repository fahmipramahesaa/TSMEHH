const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const TOKEN = "OTcyOTA2MDUyOTAxMjk0MTUw.G3AeCO.gohQuBa_Q3870JxYfQrBjMdbJrTS4v_LY33QK8"

client.on("ready", () => {
  client.user.setActivity(".cmd", { type: "PLAYING" })
})

client.on("messageCreate", (message) => {
  if (message.content == ".cmd") {
    message.reply("Commands: !server !roles !panti")
  }
  if (message.content == "!server") {
    message.reply("https://discord.gg/KzEHdx6")
  }
  if (message.content == "!roles") {
    message.reply("Ambil role dulu breh <#856262379493785620>")
  }
  if (message.content == "!panti") {
    message.reply("**SALAH ASUHAN YANG WILD!**")
  }
  if (message.content == "<@408125641590833152>") {
    message.reply("ASIKKKKKKKKKKKKK!!!!!!")
  }
  if (message.content == "valorant") {
    message.reply("https://i.ytimg.com/vi/LeT4dRcsz5Y/maxresdefault.jpg")
  }
  if (message.content == "sokin") {
    message.reply("https://tenor.com/view/apaan-tuh-apaan-tuh-gif-26403762")
  }
  if (message.content == "sukadik") {
    message.reply("https://i.ytimg.com/vi/wZT20yzGtiQ/maxresdefault.jpg")
  }
  if (message.content == "<:uyy:1020048989644660846>") {
    message.reply("https://c.tenor.com/gMmFZjx5GQEAAAAC/uyu-yuy-shaquille-o-neal.gif")
  }
})
client.login(TOKEN)
