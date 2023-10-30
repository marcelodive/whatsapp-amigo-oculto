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
            const toDrawParticipants = participants.map(value => ({
                    value,
                    sort: Math.random()
                }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)

            for (const participant of participants) {
                const drawnParticipant = (participant.id._serialized !== toDrawParticipants[0].id._serialized)
                    ? toDrawParticipants.shift()
                    : toDrawParticipants.pop();

                client.sendMessage(participant.id._serialized, `Você tirou...
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                ...${drawnParticipant.id.user}`)
                await wait();
            }
            chat.sendMessage(
                'Sorteio finalizado! Confira nossa conversa no privado para saber quem você sorteou!')
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