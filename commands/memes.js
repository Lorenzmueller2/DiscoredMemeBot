const fetch = require("node-fetch")

module.exports = {
name: "meme",
description: "Meme Command",
async execute(message, args, Discord) {

    let data = await fetch(`https://www.reddit.com/r/dankmemes/`).then(res => res.json())

    const embed = new Discord.MessageEmbed()
    embed.setTitle(data.title)
    embed.setURL(data.postLink)
    embed.setColor("#00ff00")
    embed.setFooter(data.ups + " Upvotes")
    embed.setTimestamp()
    embed.setImage(data.url)

    message.channel.send(embed)


}
}