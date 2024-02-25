
/**
 * Creates a search cards popup.
 * @returns {void}
 */
function createSearchCardsPopup() {
    let cards = getAllCards();
    searchListPopup(
        "Filtrar cartas", 
        cards,
        filterCards,
        buildCardsTable);
}

/**
 * Builds the cards table based on the filtered list.
 * @param {Array} filteredList - The filtered list of cards.
 * @returns {string} - The HTML representation of the cards table.
 */
function buildCardsTable(filteredList) {
    return `<table style="width:100%">
        <tr>
            <th>Nome</th>
            <th>Moeda</th>
            <th>Valor</th>
        </tr>
        ${filteredList.map(c => `<tr><td>${c.name}</td><td>${c.suit}</td><td>${c.value}</td></tr>`).join('')}`;
}

/**
 * Filters the cards based on the search term.
 * @param {string} search - The search term.
 * @param {Object} card - The card object.
 * @returns {boolean} - True if the card name includes the search term, false otherwise.
 */
function filterCards(search, card) {
    return card.name.toLowerCase().includes(search.toLowerCase()) || 
        card.suit.toLowerCase().includes(search.toLowerCase()) || 
        card.value.toString().toLowerCase().includes(search.toLowerCase());
}
