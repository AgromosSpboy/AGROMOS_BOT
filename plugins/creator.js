function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *Agromos*

  

  
  
  
  
  

  
  
▢ YouTube : https://youtube.com/channel/UCYfOaeRkOwMXzLxx11nwecA
  • https://youtube.com/fg98f
  
 *≡ HELPERS*
  *Creador*
▢ Youtube https://youtube.com/channel/UCYfOaeRkOwMXzLxx11nwecA
▢ WhatsApp : wa.me/523931806576
  *Bot oficial*
▢ YouTube https://youtube.com/channel/UCYfOaeRkOwMXzLxx11nwecA
▢ WhatsApp : wa.me/595983186566
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
