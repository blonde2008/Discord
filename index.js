const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId(' streaming ')
    .setType('multi tasking')
    .setURL('https://youtu.be/BME88lS6aVY?si=0dnDCaqPhXfStTMw') //Must be a youtube video link 
    .setState('Recording')
    .setName('hi')
    .setDetails(` kissing mephone4s [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1189939866088259748/1241336058340315136/97cedce22d22ac592bcca74ca787b6b6.jpg?ex=6649d3cb&is=6648824b&hm=16210262ab87c9c4f7911c8dbf295b0109e96e8425a2414df1d46b39b0da4adf&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('ᛝ  live laugh kid cudi ') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1189939866088259748/1241336257095794718/WHATISYOURMALFUNCTIONNUMBNUTS.gif?ex=6649d3fa&is=6648827a&hm=10720aa9deeec242c58632c25081013dc3dae512a207c01c4bb2020ed813dbae&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('ᛝ     rentry') //Text when you hover the Small image
    .addButton('Watch', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    .addButton('Donate', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
