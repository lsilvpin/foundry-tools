
/**
 * Retrieves all cards from the game.
 * @returns {Array} An array containing all the cards.
 */
function getAllCards() {
    return game.cards.map(b => b.cards.map(c => c)).flatMap(x => x).map(x => x);
}
