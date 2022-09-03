let handler = async (m, { conn }) => {
	let flu = `${pickRandom(['https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='])}`
   let stats = Object.entries(db.data.stats).map(([key, val]) => {
    let name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join(' & ') : plugins[key]?.help || key 
    if (/exec/.test(name)) return
    return { name, ...val }
  })
  stats = stats.sort((a, b) => b.total - a.total)
  let txt = stats.slice(0, 10).map(({ name, total, last }, idx) => {
    if (name.includes('-') && name.endsWith('.js')) name = name.split('-')[1].replace('.js', '')
    return `(${idx + 1})\nCommand : *${name}*\n🎯 Hit : *${total}x*\n🧬 Last Used : *${getTime(last)}*`
  }).join`\n\n`
  await conn.sendButtonLoc(m.chat, await conn.resize(await (await fetch(flu + 'Dashboard')).buffer(), 300, 190), '*───────「 Dashboard 」───────*', `Dashboard *${conn.user.name}*\n\n${txt}`, 'Menu', '.menu', m)
}
 handler.help = ['dashboard'] 
 handler.tags = ['misc'] 
 handler.command = /^(dashboard)$/i 
  
 module.exports = handler
          
 function parseMs(ms) { 
   if (typeof ms !== 'number') throw 'Parameter must be filled with number' 
   return { 
     days: Math.trunc(ms / 86400000), 
     hours: Math.trunc(ms / 3600000) % 24, 
     minutes: Math.trunc(ms / 60000) % 60, 
     seconds: Math.trunc(ms / 1000) % 60, 
     milliseconds: Math.trunc(ms) % 1000, 
     microseconds: Math.trunc(ms * 1000) % 1000, 
     nanoseconds: Math.trunc(ms * 1e6) % 1000 
   } 
 } 
  
function getTime(ms) { 
   let now = parseMs(+new Date() - ms) 
   if (now.days) return `${now.days} days ago` 
   else if (now.hours) return `${now.hours} hours ago` 
   else if (now.minutes) return `${now.minutes} minutes ago` 
   else return `a few seconds ago` 
 }
