/**
 * Executes a defy danger move.
 */
function defyDanger() {
    let moveTag = "Defy Danger"
    runMove(moveTag)
}

/**
 * 
 * This function is used to run a move
 * 
 * @param {*} moveTag Move tag
 */
function runMove(moveTag) {
    let moveObj = MOVES_LIST.find(o => o.tag == moveTag)
    moveObj.resultBuilder = (msgObj, roll) => getMoveResultMessage(msgObj, roll)
    selectCharacterPopup(selectedChar => {
        selectAttribute(moveObj, selectedTag => {
            let charLevel = selectedChar.system.details.level
            selectProficiencyPopup(charLevel, (proficiencyValue) => {
                selectAdvantagePopup(selectedAdvantage => {
                    moveObj.proficiency = proficiencyValue
                    rollMove(selectedChar, selectedTag, selectedAdvantage, moveObj)
                })
            })
        })
    })
}

/**
 * 
 * This function is used to roll the move
 * 
 * @param {*} selectedChar Character selected to roll the move
 * @param {*} selectedTag Tag of the selected attribute
 * @param {*} selectedAdvantage Advantage selected for the move
 * @param {*} msgObj Object with the move data
 */
function rollMove(selectedChar, selectedTag, selectedAdvantage, msgObj) {
    let mod = selectedChar.system.abilities[selectedTag].mod
    msgObj.attributeValue = mod
    let diceFormula = buildDiceFormula(selectedAdvantage)
    let roll = new Roll(`${diceFormula} + ${mod + msgObj.proficiency}`).evaluate({ async: false })
    let result = roll._total
    let speaker = buildSpeakerToGm()
    sendMsgToChat(speaker, result, msgObj, roll)
}

/**
 * 
 * This function is used to build the dice formula
 * 
 * @param {*} selectedAdvantage Selected advantage
 * @returns The dice formula
 */
function buildDiceFormula(selectedAdvantage) {
    let diceFormula = '1d20'
    if (selectedAdvantage == 'Vantagem') {
        diceFormula = `${diceFormula}kh1`
    }
    else if (selectedAdvantage == 'Desvantagem') {
        diceFormula = `${diceFormula}kl1`
    }
    return diceFormula
}

/**
 * 
 * This function is used to build the message to be sent to the chat
 * 
 * @param {*} msgObj Object with the move data
 * @param {*} roll Roll object
 * @returns 
 */
function genericMsgBuilder(msgObj, roll) {
    let result = msgObj.resultBuilder(msgObj, roll)
    return `
        <h3>${msgObj.trigger}</h3>
        <ul>
            <li>Rolagem = ${msgObj.rollDice} </li>
            <li>${msgObj.attribute} = ${msgObj.attributeValue}</li>
            <li>Proficiência = ${msgObj.proficiency}</li>
        </ul>
        <h3>Resultado:</h3>
        ${result}
    `
}

/**
 * 
 * This function is used to select an attribute for the move
 * 
 * @param {*} msgObj Object with the move data
 * @param {*} action Action to be executed after the selection
 */
function selectAttribute(msgObj, action = (selectedTag) => console.log(selectedTag)) {
    let atts = [
        {
            name: 'Força',
            tag: 'str'
        },
        {
            name: 'Destreza',
            tag: 'dex'
        },
        {
            name: 'Constituição',
            tag: 'con'
        },
        {
            name: 'Carisma',
            tag: 'cha'
        },
        {
            name: 'Inteligência',
            tag: 'int'
        },
        {
            name: 'Sabedoria',
            tag: 'wis'
        }
    ]

    selectOptionPopup(atts.map(a => a.name), (selectedItem) => {
        let selectedAtt = atts.find(a => a.name == selectedItem)
        msgObj.attribute = selectedAtt.name
        action(selectedAtt.tag)
    })
}

/**
 * 
 * This function is used to select a character for the move
 * 
 * @param {*} action Action to be executed after the selection
 */
function selectCharacterPopup(action = (selectedChar) => console.log(selectedChar)) {
    let charNames = game.actors.map(a => a.name)
    selectOptionPopup(charNames, (selectedCharName) => {
        let selectedChar = game.actors.find(a => a.name == selectedCharName)
        action(selectedChar)
    })
}

/**
 * 
 * This function is used to select the proficiency for the move
 * 
 * @param {*} characterLevel Character level
 * @param {*} action Action to be executed after the selection
 */
function selectProficiencyPopup(characterLevel, action = (proficiencyValue) => console.log(proficiencyValue)) {
    let proficiencies = ['None', 'Proficiency', 'Expertise']
    selectOptionPopup(proficiencies, (selectedItem) => {
        let profValue = 0
        let prof = calcProficiency(characterLevel)
        if (selectedItem == 'Proficiency') {
            profValue = prof
        }
        else if (selectedItem == "Expertise") {
            profValue = 2 * prof
        }
        action(profValue)
    })
}

/**
 * 
 * This function is used to select the advantage for the move
 * 
 * @param {*} action Action to be executed after the selection
 */
function selectAdvantagePopup(action = (selectedItem) => console.log(selectedItem)) {
    let options = ['Normal', 'Vantagem', 'Desvantagem']
    selectOptionPopup(options, action)
}

/**
 * 
 * This function is used to calculate the proficiency value
 * 
 * @param {*} level Level of the character
 * @returns Proficiency value
 */
function calcProficiency(level) {
    let calcLevel = Math.max(1, level)
    let prof = Math.floor(((calcLevel - 1) / 4) + 2)
    return prof
}

/**
 * 
 * This function is used to display a popup with options
 * 
 * @param {*} options Opitions to be displayed in the popup
 * @param {*} action Action to be executed after the selection
 */
function selectOptionPopup(options, action = (selectedItem) => console.log(selectedItem)) {
    const opcoesHtml = options
        .map((opcao, index) => `<option value="${index + 1}">${opcao}</option>`)
        .join('');
    const content = `
        <label for="lsilvpinCharSelectPopup">Selecione uma Opção:</label>
        <select id="lsilvpinCharSelectPopup">${opcoesHtml}</select>
    `;

    let dialog = Dialog.prompt({
        title: "Ferramenta de Seleção",
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

/**
 * 
 * This function is used to send the message to the chat
 * 
 * @param {*} speaker Speaker object
 * @param {*} result Result of the roll
 * @param {*} msgObj Object with the move data
 * @param {*} roll Roll object
 */
function sendMsgToChat(speaker, result, msgObj, roll) {
    let explanation = genericMsgBuilder(msgObj, roll)
    let msgData = {
        rollMode: 'roll',
        speaker: speaker,
        flavor: `<h1>${msgObj.flavor}</h1>`,
        content: `<h2>${roll._formula} = ${result}</h2>${explanation}`
    }
    let blindOpt = { rollMode: CONST.DICE_ROLL_MODES.BLIND }

    if (game.user.isGM) {
        roll.toMessage(msgData, blindOpt)
    }
    else {
        roll.toMessage(msgData)
    }
}

/**
 * 
 * This function is used to build the speaker object
 * 
 * @returns Speaker object
 */
function buildSpeakerToGm() {
    let speaker = {}
    if (game.user.isGM) {
        let gm = getGm()
        console.log('GM', gm)
        speaker = {
            user: gm._id,
            alias: 'GM',
            lang: 'en',
            whisper: [gm._id]
        }
    }
    return speaker
}

/**
 * 
 * This function is used to get the list of moves
 * 
 * @returns List of moves
 */
function getMovesData() {
    return MOVES_LIST
}

/**
 * 
 * This function is used to get the result message for the move
 * 
 * @param {*} msgObj Object with the move dataj
 * @param {*} roll Roll object
 * @returns The result message
 */
function getMoveResultMessage(msgObj, roll) {
    console.log('Formula', roll._formula)
    let modifier = parseInt(roll._formula.replace('1d20 + ', '').replace(/ /g, ''))
    console.log('Modifier', modifier)
    console.log('Total', roll._total)
    let diceRoll = roll._total - modifier
    console.log('DiceRoll', diceRoll)
    let total = diceRoll + modifier
    console.log('roll', roll)
    msgObj.rollFormula = roll._formula
    msgObj.rollDice = diceRoll
    msgObj.rollModifier = modifier
    msgObj.rollTotal = total
    console.log('msgObj', msgObj)

    if (diceRoll == 20) {
        return msgObj.sucessoCritico
    }

    if (diceRoll == 1) {
        return msgObj.falhaCritica
    }

    if (total <= 9) {
        return msgObj.falha
    }
    else if (9 < total && total <= 18) {
        return msgObj.parcial
    }
    else {
        return msgObj.sucesso
    }
}

/**
 * 
 * This function is used to get the GM user
 * 
 * @returns The GM user
 */
function getGm() {
    return game.users.find(u => u.isGM)
}
