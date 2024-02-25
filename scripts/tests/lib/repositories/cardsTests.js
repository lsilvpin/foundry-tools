
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
