
/**
 * Retrieves all cards from the game.
 * @returns {Array} An array containing all the cards.
 */
function getAllCards() {
    return game.cards.map(b => b.cards.map(c => c)).flatMap(x => x).map(x => x);
}

/**
 * Searches for cards that match the given pattern.
 * @param {string} pattern - The pattern to search for.
 * @returns {Array} An array containing the cards that match the pattern.
 */
function searchCards(pattern) {
    return getAllCards().filter(c => c.name.includes(pattern));
}
