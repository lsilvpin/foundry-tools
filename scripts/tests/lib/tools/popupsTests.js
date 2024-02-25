
/**
 * Calls the select option popup.
 * 
 * @function callSelectOptionPopup
 * @returns {void}
 */
function testSelectOptionPopup() {
    const title = "Test";
    const options = ["Option1", "Option2", "Option3"];
    selectOptionPopup(title, options, (selectedItem) => info(selectedItem));
}
