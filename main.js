const { token} =require("./info.json")
const { Client, GatewayIntentBits } = require("discord.js");
const {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource
} = require('@discordjs/voice');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a)=>{
    return GatewayIntentBits[a]
  }),
});

client.on("messageCreate",async(message)=>{
    if(message.author.id==1165341090065424384)return;
    //message.reply("kir vadalat kos dalagat koskesh haramzade")
    if(message.content.includes("!play")){
        let isvoice=message.member.voice
        if(!isvoice){
          message.reply("gomsho boro to voice")
        }
        const connection = joinVoiceChannel({
          channelId: message.member.voice.channelId,
          guildId: message.guildId,
          adapterCreator: message.guild.voiceAdapterCreator
      })
      const player = createAudioPlayer()
        const resource = createAudioResource('./hozier-take-me-to-church.mp3')

        connection.subscribe(player)

        player.play(resource)

        connection.subscribe(player)

        player.play(resource)
    }
})
client.login(token);