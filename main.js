const qrcode = require('qrcode-terminal');
const {
  Client,
  LocalAuth
} = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, {
    small: true
  });
});

client.on('ready', () => {
  console.log('Pronto para receber o comando "\\sortear"');
});

client.on('message', async msg => {
  if (msg.body == '\\sortear') {
    const chat = await msg.getChat();

    if (chat.isGroup) {
      chat.sendMessage('Sorteio iniciado! Em breve vocês receberão o seu amigo oculto no privado!')
      const participants = chat.participants.filter((participant) =>
        participant.id._serialized !== msg.to
      );

      let toDrawParticipants = [];

      do {
        toDrawParticipants = participants.map(value => ({
            value,
            sort: Math.random()
          }))
          .sort((a, b) => a.sort - b.sort)
          .map(({
            value
          }) => value);
      } while (!isLastParticipantEqual(participants, toDrawParticipants));

      for (const participant of participants) {
        const drawnParticipant = (participant.id._serialized.slice(0,12) !== toDrawParticipants[0].id._serialized.slice(0,12)) ?
          toDrawParticipants.shift() :
          toDrawParticipants.pop();

        console.log(participant.id._serialized, '|', drawnParticipant.id.user)

        client.sendMessage(participant.id._serialized, `Você tirou...
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                ...${drawnParticipant.id.user}`); // Necessário para aparecer o "leia mais"
        await wait();
      }
      chat.sendMessage(
        'Sorteio finalizado! Confira nossa conversa no privado para saber quem você sorteou!');
    }
  }
});

client.initialize();

async function wait(min = 10000, max = 15000) {
  const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => {
    setTimeout(resolve, randomDelay);
  });
}

function isLastParticipantEqual(participantsA, participantsB) {
  return participantsA.slice(-1).pop().id._serialized.slice(0,12) === participantsB.slice(-1).pop().id._serialized.slice(0,12);
}