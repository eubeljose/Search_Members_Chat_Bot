let libPrefix = 'Telegram_';

const { Api } = require('telegram');

async function getParticipants(client, chatId) {
  try {
    const result = await client.invoke(
      new Api.messages.GetParticipants({
        channel: chatId,
        filter: new Api.ChannelParticipantsRecent(),
        offset: 0,
        limit: 100,
        hash: 0,
      })
    );

    return result.participants;
  } catch (error) {
    console.log('Error fetching participants:', error);
  }
}

module.exports = {
  getParticipants
};
