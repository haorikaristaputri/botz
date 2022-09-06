const { tmpdir } = require('os')
const { join } = require('path')
let { generateWAMessageFromContent } = require('@adiwajshing/baileys')
const {readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch} = require('fs')
let handler = async (m, { args, text, usedPrefix, command }) => {

    if (/menupdf$/i.test(command)) {
  let filename = join('./plugins/', 'menu.js')
await unlinkSync(filename)
let bufferg = fs.readFileSync('./src/menu1.json') 
let path = `plugins/menu.js`
    await fs.writeFileSync(path, bufferg)
let msg = await generateWAMessageFromContent(m.chat, { locationMessage: { 
   name: 'Succes Set Menu PDF', 
   address: 'Sekarang Menu Ke All Menu PDF',
   url: 'https://www.tiktok.com/@colindonesia', 
   jpegThumbnail: await conn.resize(await (await fetch('https://telegra.ph/file/2e5598bce43ff6d1885da.jpg')).buffer(),300, 200)
 }}, { quoted: m }) 
  
 return conn.relayMessage(m.chat, msg.message, {})
    }
    if (/menupay$/i.test(command)) {
        let filename = join('./plugins/', 'menu.js')
await unlinkSync(filename)
let bufferg = fs.readFileSync('./src/menu2.json') 
let path = `plugins/menu.js`
    await fs.writeFileSync(path, bufferg)
let pay = await generateWAMessageFromContent(m.chat, { locationMessage: { 
   name: 'Succes Set Menu Pay', 
   address: 'Sekarang Menu Ke Menu List Menu Pay',
   url: 'https://www.tiktok.com/@colindonesia', 
   jpegThumbnail: await conn.resize(await (await fetch('https://telegra.ph/file/2e5598bce43ff6d1885da.jpg')).buffer(),300, 200)
 }}, { quoted: m }) 
  
 return conn.relayMessage(m.chat, pay.message, {})
    }
}
handler.help = ['setmenupay', 'setmenupdf']
handler.tags = ['info']
handler.command = /^(set(menupay|menupdf))$/i
handler.mods = true

module.exports = handler
