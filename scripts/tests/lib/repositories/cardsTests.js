
/**
 * Test function to get all cards.
 * @function testShouldGetAllCards
 * @returns {void}
 */
function testShouldGetAllCards() {
    let cards = getAllCards();
    assert(cards.length > 0, 'The cards array should not be empty.');
    info(cards);
}

/**
 * Test function to search for a card with the name "Abaco".
 * @function testShouldSearchCardsForAbaco
 * @returns {void}
 */
function testShouldSearchCardsForAbaco() {
    let cards = searchCards('Abaco');
    assert(cards.length > 0, 'The cards should have a card with the name "Abaco"');
    info(cards);
}

/**
 * Test function should get the names of all card sets.
 * @function testShouldGetCardSetNames
 * @returns {void}
 */
function testShouldGetCardSetNames() {
    let cardSetNames = getCardSetNames();
    assert(cardSetNames.length > 0, 'The card set names array should not be empty.');
    info(cardSetNames);
}
