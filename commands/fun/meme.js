const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("something-random-on-discord")
const random = new Random();


client.on("ready", () => {
  console.log("Ready to go")
})

client.on("message", async message => {
  if(message.content === "!meme") {
    let data = await random.getMeme()
    message.channel.send(data)
  }
})


client.login("NzUwNTA5ODY0NDA4NzExMTk5.X07kxw.nO50PvpU0nlgvysKCOFm13IyWPI")
