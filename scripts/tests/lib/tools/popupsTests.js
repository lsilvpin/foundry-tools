/** * Calls the select option popup.  * * @function testShouldOpenOptionsPopup * @returns {void} */ function testShouldOpenOptionsPopup() {
    const title = "Test";
    const options = ["Option1", "Option2", "Option3"];
    selectOptionPopup(title, options, (selectedItem) => {
        assertStringIsNotEmpty(selectedItem, "The selected item should not be empty.");
        info(`Selected item: ${selectedItem}`);
    });
}


/**
 * Calls the search list popup.
 * @function testShouldOpenSearchPopup
 * @returns {void}
 */
function testShouldOpenSearchPopup() {
    const title = "Test";
    const list = ["Option1", "Option2", "Option3"];
    searchListPopup(title, list);
}

/**
 * Calls the ok popup.
 */
function testShouldCreateOkPopup() {
    const title = "Test";
    const content = "<table style='width:100%'><tr><td>Test</td></tr></table>";
    createOkPopup(title, content);
}
