const Discord = require("discord.js");
const client = new Discord.Client();
const CLEAR_MESSAGES = '!clearMessages';
const bot = new Discord.Client();
 
 
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
    function marv() {                                   //%10 chance to qoute Marvin after a successful command
    marvNum = 1 + Math.floor(Math.random() * 10);
    if (marvNum != 10){}
    else {
        marvNum = 1 + Math.floor(Math.random() * 6);
        if (marvNum === 1){
            message.channel.send("The first ten million years were the worst, and the second ten million years, they were the worst too. The third ten million years I didn't enjoy at all. After that I went into a bit of a decline.")
        } else if (marvNum === 2) {
            message.channel.send("*Life!* Don't talk to me about life.")
        } else if (marvNum === 3) {
            message.channel.send("Sorry, did I say something wrong? Pardon me for breathing, which I never do anyway so I don't know why I bother to say it, oh God I'm so depressed.")
        } else if (marvNum === 4) {
            message.channel.send("Why should I want to make anything up? Life's bad enough as it is without wanting to invent any more of it.")
        } else if (marvNum === 5) {
            message.channel.send("...and then of course I've got this terrible pain in all the diodes down my left hand side... I've asked for them to be replaced but <@" + message.author.id + "> never listens.")
        } else if (marvNum === 6) {
            message.channel.send("It's part of the shape of the Universe. I only have to talk to somebody and they begin to hate me.")
        }
        }
    }
    if (message.content.startsWith("!") && message.author.id != "460928002067398666") {
        const args = message.content.trim().split(/ +/g);
        var command = args.shift().toLowerCase();
        command = command.split("!").pop();
        var inp = args[0];
        if (inp != null){
            inp = inp.toLowerCase();
        }
     
        if (command == "scp") {
            try {inp = inp.split("scp-").pop()}catch(err){}
            inp = Number(inp);
            if (isNaN(inp) || inp > 3999 || inp < 1 || inp == null) {
                message.channel.send("<@" + message.author.id + ">" + "Please enter a valid SCP number");
            } else if (inp < 10) {
                message.channel.send("http://www.scp-wiki.net/scp-00" + inp);  
             
            } else if (inp < 100) {
                message.channel.send("http://www.scp-wiki.net/scp-0" + inp);
             
            } else {message.channel.send("http://www.scp-wiki.net/scp-" + inp);}
            message.delete();
            marv();
        }
         
    }
    var msg = message.content.toLowerCase();
    if (msg.includes("scp-") && message.author.bot != true) {
        inp = msg.replace(/[^\d]/g, '');
        inp = Number(inp);
        if (isNaN(inp) || inp > 3999 || inp < 1 || inp == null) { 
        } else if (inp < 10) {
            message.channel.send("http://www.scp-wiki.net/scp-00" + inp);
        } else if (inp < 100) {
            message.channel.send("http://www.scp-wiki.net/scp-0" + inp);
        } else {message.channel.send("http://www.scp-wiki.net/scp-" + inp);}
        marv();
    }
});
 
client.login(process.env.NTA1ODU4NTQxOTQ1NjE4NDY0.DradLQ.4E_B3sx87RtjqIYkOcA7SD9eEnk);
