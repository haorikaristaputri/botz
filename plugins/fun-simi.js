let fetch = require('node-fetch') 

 let handler = async (m, { text }) => { 
	let sender = m.sender
    let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
    let chat = db.data.chats[m.chat] 
    let sim = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=id`)
    let res = await sim.json()
        let ori = await fetch(`https://botcahx-rest-api.herokuapp.com/api/soundoftext?text=${res.success}&lang=id-ID`)
        let json = await ori.json()
        await conn.sendMedia(m.chat, `${json.result}`, m,  { 
     asDocument: chat.useDocument, mimetype: 'audio/mp4', ptt: false, contextInfo: { //forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	showAdAttribution: true, 
        	sourceUrl: 'https://vt.tiktok.com/ZSRRmS8vh/',
            title: `${res.success}`,
            body: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`,
          thumbnail: await (await fetch(pp)).buffer(),
        }
     }
    })
 } 
 handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>') 
 handler.tags = ['fun'] 
 handler.command = /^((sim)?simi|simih)$/i 
  
 module.exports = handler
