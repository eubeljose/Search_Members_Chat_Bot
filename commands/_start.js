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

const API_ID = '28494151'; // Reemplaza esto con tu API ID
const API_HASH = 'ec36d21a3afd8a7e1a0223edf6d4555c'; // Reemplaza esto con tu API Hash

const client = new TelegramClient(new StringSession(''), API_ID, API_HASH, { connection: 'tcp' });

const GROUP_CHAT_ID = -1001192020135; // Reemplaza con el ID de tu grupo
client.start();

const TelegramBot = require('node-telegram-bot-api');
const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

bot.sendMessage('¡Hola! Usa /buscar <nombre_parcial> para encontrar miembros.');
