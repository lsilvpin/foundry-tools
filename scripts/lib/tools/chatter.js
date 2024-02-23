
function sendChat(message) {
    let chatData = {
        user: game.user._id,
        content: message,
        speaker: ChatMessage.getSpeaker()
    }
    ChatMessage.create(chatData, {})
}
