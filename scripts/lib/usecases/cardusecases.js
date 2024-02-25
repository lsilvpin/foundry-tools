
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
        ${filteredList.map(x => `<tr><td>${x.name}</td><td>${x.suit}</td><td>${x.value}</td></tr>`).join('')}`;
}

/**
 * Filters the cards based on the search term.
 * @param {string} search - The search term.
 * @param {Object} x - The card object.
 * @returns {boolean} - True if the card name includes the search term, false otherwise.
 */
function filterCards(search, x) {
    return x.name.toLowerCase().includes(search.toLowerCase()) || 
        x.suit.toLowerCase().includes(search.toLowerCase()) || 
        x.value.toString().toLowerCase().includes(search.toLowerCase());
}
