
/**
 * Calls the select option popup.
 * 
 * @function testShouldOpenOptionsPopup
 * @returns {void}
 */
function testShouldOpenOptionsPopup() {
    const title = "Test";
    const options = ["Option1", "Option2", "Option3"];
    selectOptionPopup(title, options, (selectedItem) => {
        assertStringIsNotEmpty(selectedItem, "The selected item should not be empty.");
        info(`Selected item: ${selectedItem}`);
    });
}
