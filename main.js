const qrcode = require('qrcode-terminal');
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name-2' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage(async (msg) => {
    const groupParticipants = await client.getGroupMembers(msg.chatId);
    if (msg.body === '\\sortear' && msg.isGroupMsg === true) {

      client.sendText(msg.chatId, 'Sorteio iniciado! Em breve vocês receberão o seu amigo oculto no privado!')

      const participants = groupParticipants.filter((participant) =>
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

        client.sendText(participant.id._serialized, `Você tirou...
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
        ...${drawnParticipant.id.user}`); // Necessário para aparecer o "leia mais"
        await wait();
      }
      client.sendText(msg.chatId, 
        'Sorteio finalizado! Confira nossa conversa no privado para saber quem você sorteou!');
    }
  });
}

async function wait(min = 10000, max = 15000) {
  const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => {
    setTimeout(resolve, randomDelay);
  });
}

function isLastParticipantEqual(participantsA, participantsB) {
  return participantsA.slice(-1).pop().id._serialized.slice(0,12) === participantsB.slice(-1).pop().id._serialized.slice(0,12);
}