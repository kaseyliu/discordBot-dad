const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const info = JSON.parse(fs.readFileSync('./token.json'))
const token = info.token

client.once('ready', () => {
	console.log('Ready!')
})

client.on('message', msg => {

    if(msg.content.split(' ', 2)[0] == "I'm" || msg.content.split(' ', 2)[0] == "I’m"){
        var name = msg.content.slice(4)
        msg.channel.send(`Hi ${name}, I'm dad.`)
    }

});

client.login(token)