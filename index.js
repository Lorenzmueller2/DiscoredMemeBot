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
        message.channel.send("Es gibt folgende memes: \nnormale memes:   !meme\ndank memes:   !dankmeme\nksi memes:   ksimeme\npewdiepie memes:   !pewdiepewmeme\nWatch people die inside memes:   !watchpeopledieinside\ncuredcomments:   !cursedcomment\n");
    }
    if(cmd == "hello") {
        message.channel.send("hello");
    }
    if(cmd == "help") {
        message.channel.send("!hello \n!memes \n!help<spezifischer helfen>");
    };

    if(cmd == "meme") {
        fetch('https://www.reddit.com/r/memes/random/.json')
        .then(res => res.json())
        .then(res => {
            message.channel.send(res[0]["data"]["children"][0]["data"]["title"])
            message.channel.send(res[0]["data"]["children"][0]["data"]["url"])
        })
        .catch(e => message.channel.send("Fehler"))
    };
    if(cmd == "dankmeme") {
        fetch('https://www.reddit.com/r/dankmemes/random/.json')
        .then(res => res.json())
        .then(res => {
            message.channel.send(res[0]["data"]["children"][0]["data"]["title"])
            message.channel.send(res[0]["data"]["children"][0]["data"]["url"])
        })
        .catch(e => message.channel.send("Fehler"))
    }
    if(cmd == "ksimeme") {
        fetch('https://www.reddit.com/r/ksi/random/.json')
        .then(res => res.json())
        .then(res => {
            message.channel.send(res[0]["data"]["children"][0]["data"]["title"])
            message.channel.send(res[0]["data"]["children"][0]["data"]["url"])
        })
        .catch(e => message.channel.send("Fehler"))
    }
    if(cmd == "pewdiepiememe") {
        fetch('https://www.reddit.com/r/pewdiepiesubmissions/random/.json')
        .then(res => res.json())
        .then(res => {
            message.channel.send(res[0]["data"]["children"][0]["data"]["title"])
            message.channel.send(res[0]["data"]["children"][0]["data"]["url"])
        })
        .catch(e => message.channel.send("Fehler"))
    }
    if(cmd == "watchpeopledieinside") {
        fetch('https://www.reddit.com/r/watchpeopledieinside/random/.json')
        .then(res => res.json())
        .then(res => {
            message.channel.send(res[0]["data"]["children"][0]["data"]["title"])
            message.channel.send(res[0]["data"]["children"][0]["data"]["url"])
        })
        .catch(e => message.channel.send("Fehler"))
    }
    if(cmd == "cursedcomment") {
        fetch('https://www.reddit.com/r/cursedcomments/random/.json')
        .then(res => res.json())
        .then(res => {
            message.channel.send(res[0]["data"]["children"][0]["data"]["title"])
            message.channel.send(res[0]["data"]["children"][0]["data"]["url"])
        })
        .catch(e => message.channel.send("Fehler"))
    }
    if(cmd == "cursedcomment") {
        fetch('https://www.reddit.com/r/cursedcomments/random/.json')
        .then(res => res.json())
        .then(res => {
            message.channel.send(res[0]["data"]["children"][0]["data"]["title"])
            message.channel.send(res[0]["data"]["children"][0]["data"]["url"])
        })
        .catch(e => message.channel.send("Fehler"))
    }
    if(cmd == "oddlysatisfaying") {
        fetch('https://www.reddit.com/r/oddlysatisfaying/random/.json')
        .then(res => res.json())
        .then(res => {
            message.channel.send(res[0]["data"]["children"][0]["data"]["title"])
            message.channel.send(res[0]["data"]["children"][0]["data"]["url"])
        })
        .catch(e => message.channel.send("Fehler"))
    }
    if(cmd == "historymeme") {
        fetch('https://www.reddit.com/r/HistoryMemes/.json?utm_campaign=redirect&utm_medium=desktop&utm_source=reddit&utm_name=random_link')
        .then(res => res.json())
        .then(res => {
            message.channel.send(res[0]["data"]["children"][0]["data"]["title"])
            message.channel.send(res[0]["data"]["children"][0]["data"]["url"])
        })
        .catch(e => message.channel.send("Fehler"))
    }
});

console.log(process.env.TOKEN);
bot.login(process.env.TOKEN);

