
/**
 * This function is used to display a popup with options
 * @param {*} options Opitions to be displayed in the popup
 * @param {*} callback Action to be executed after the selection
 */
function selectOptionPopup(title, options, callback = (selectedItem) => console.log(selectedItem)) {
    const opcoesHtml = options.map((opcao, index) => `<option value="${index + 1}">${opcao}</option>`).join('');
    const content = `
        <label for="lsilvpinCharSelectPopup">Opções:</label>
        <select id="lsilvpinCharSelectPopup">${opcoesHtml}</select>
    `;

    createOkPopup(title, content, (result) => {
        let select = document.querySelector('#lsilvpinCharSelectPopup')
        let selectedIndex = select.value
        let selectedElement = options[selectedIndex - 1]
        callback(selectedElement)
    })
}

/**
 * This function is used to display a popup with a list of options
 * @param {string} title The title of the popup
 * @param {Array[*]} list The list to be searched
 * @param {function} filterLambda Filters the list
 * @param {function} tableBuilder Builds the table to be displayed
 * @param {function} callback Extra action to be executed after the selection 
 **/
function searchListPopup(
    title, list,
    filterLambda = (search, x) => x.toLowerCase().includes(search.toLowerCase()),
    tableBuilder = (filteredList) => `<table style="width:100%">${filteredList.map(x => `<tr><td>${x}</td></tr>`).join('')}</table>`,
    callback = (result) => console.log(result)) {
    let content = `
        <label for="lsilvpinCharSearchPopup">Pesquisar:</label>
        <input type="text" id="lsilvpinCharSearchPopup" />
    `;

    createOkPopup(title, content, (result) => {
        let search = document.querySelector('#lsilvpinCharSearchPopup').value
        info(`List: ${list}`);
        let filteredList = list.filter(item => filterLambda(search, item))
        info(`Filtered list: ${filteredList}`);
        let table = tableBuilder(filteredList)
        info(`Table built: ${table}`);
        createOkPopup(title, table, callback(result));
    });
}

/**
 * This function is used to create a popup with an OK button.
 * @param {string} title - The title of the popup.
 * @param {string} content - The content of the popup.
 * @param {function} callback - The callback function to be executed after the OK button is clicked.
 **/
function createOkPopup(title, content, callback = (result) => console.log(result)) {
    let dialog = Dialog.prompt({
        title: title,
        content: content,
        buttons: {
            ok: {
                label: "OK"
            },
        },
        default: 'ok',
    }, { JQuery: true });

    dialog.then(callback)
}
