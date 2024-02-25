
/**
 * 
 * This function is used to display a popup with options
 * 
 * @param {*} options Opitions to be displayed in the popup
 * @param {*} action Action to be executed after the selection
 */
function selectOptionPopup(title, options, action = (selectedItem) => console.log(selectedItem)) {
    const opcoesHtml = options
        .map((opcao, index) => `<option value="${index + 1}">${opcao}</option>`)
        .join('');
    const content = `
        <label for="lsilvpinCharSelectPopup">Opções:</label>
        <select id="lsilvpinCharSelectPopup">${opcoesHtml}</select>
    `;

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

    dialog.then((result) => {
        let select = document.querySelector('#lsilvpinCharSelectPopup')
        let selectedIndex = select.value
        let selectedElement = options[selectedIndex - 1]
        action(selectedElement)
    })
}
