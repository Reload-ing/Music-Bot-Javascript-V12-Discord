const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
module.exports = {

  name: "yardım",
  description: "", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed().setTitle('CSNSEC TEAMS')
                      .setDescription(
    `
\`${ayarlar.PREFIX}oynat <şarkı-adı>\` : **Bir Şarkıyı Oynatır.** \n
\`${ayarlar.PREFIX}atla\` : **Sıradaki şarkıyı atlar.**\n
\`${ayarlar.PREFIX}durdur\` : **Şarkıyı durdurur.**\n
\`${ayarlar.PREFIX}devam\` : **Duran şarkıyı devam ettirir.**\n
\`${ayarlar.PREFIX}sıra\` : **Şarkı sırasını gösterir.**\n
\`${ayarlar.PREFIX}şarkı\` : **Oynatılan şarkının adını söyler.**
`)
                       .setColor("ffc300")
                      )    
}
} 