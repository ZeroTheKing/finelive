const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "d";
var adminprefix = '-'
const developers = ["502101825806139412"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send(`:envelope: By Ayman   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`:envelope: By Ayman   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'Ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`:envelope: By Ayman   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Ayman");
      message.channel.send(`:envelope: By Ayman`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});





client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
