/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
 
CMD*/

const TelegramBot = require('node-telegram-bot-api');

// Cambia esto por el ID del grupo donde deseas buscar
const GROUP_CHAT_ID = -1001192020135; // Reemplaza con el ID de tu grupo

async function buscar(msg, bot) {
    const chatId = msg.chat.id;
    const args = msg.text.split(' ').slice(1);

    if (args.length === 0) {
        bot.sendMessage(chatId, 'Por favor proporciona un término de búsqueda.');
        return;
    }

    const termino = args[0].toLowerCase();
    const miembros = [];

    try {
        const members = await getGroupMembers(GROUP_CHAT_ID);

        members.forEach(member => {
            if ((member.username && member.username.toLowerCase().includes(termino)) || 
                (member.first_name && member.first_name.toLowerCase().includes(termino)) ||
                (member.last_name && member.last_name.toLowerCase().includes(termino))) {
                    miembros.push(`@${member.username}` || `${member.first_name} ${member.last_name}`);
            }
        });

        let resultados;
        if (miembros.length > 0) {
            resultados = `Resultados encontrados para: '${termino}'\n${miembros.join('\n')}`;
        } else {
            resultados = `No se encontraron resultados para el término: '${termino}'`;
        }

        bot.sendMessage(chatId, resultados);
    } catch (error) {
        bot.sendMessage(chatId, `Ocurrió un error: ${error.message}`);
    }
}

// Función ficticia para obtener miembros de un grupo, necesitas implementar esto en base a la API MTProto
async function getGroupMembers(groupId) {
    // Aquí se conectaría con la API para obtener la lista de miembros
    return [];
}

module.exports = buscar;


