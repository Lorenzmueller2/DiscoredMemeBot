import Discord from 'discord.js';
import fetch from 'node-fetch';
import dotenv from "dotenv";

dotenv.config()


const bot = new Discord.Client();
bot.on("ready", () => {
    console.log("Bot online")
})

bot.on("message", (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    let prefix = "!";
    let MessageArray = message.content.split(" ")
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    if(cmd == "helpmemes"){
        message.channel.send("Es gibt folgende memes: \nnormale memes \ndank memes \nksi memes \npewdiepie memes");
    }
    if(cmd == "hello") {
        message.channel.send("hello");
    }
    if(cmd == "help") {
        message.channel.send("!hello \n!memes");
    };

    if(cmd == "meme") {
        fetch('https://www.reddit.com/r/memes/random/.json')
        .then(res => res.json())
        .then(json => message.channel.send(JSON.stringify(json)))
    }
});

console.log(process.env.TOKEN);
bot.login(process.env.TOKEN);