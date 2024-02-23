
function moveTest() {
    console.log("Move test")
}

function defyDanger() {
    let msgObj = MOVES_LIST.find(o => o.flavor == 'Desafiar Destino')
    msgObj.resultBuilder = (msgObj, roll) => getGenericResultMessage(msgObj, roll)
    selectCharacterPopup(selectedChar => {
        selectAttribute(msgObj, selectedTag => {
            let charLevel = selectedChar.system.details.level
            selectProficiencyPopup(charLevel, (proficiencyValue) => {
                msgObj.proficiency = proficiencyValue        
                rollMove(selectedChar, selectedTag, msgObj)
            })
        })
    })
}

function rollMove(selectedChar, selectedTag, msgObj) {
    let mod = selectedChar.system.abilities[selectedTag].mod
    msgObj.attributeValue = mod
    let roll = new Roll(`1d20 + ${mod + msgObj.proficiency}`).evaluate({ async: false })
    let result = roll._total
    let speaker = buildSpeakerToGm()
    sendMsgToChat(speaker, result, msgObj, roll)
}

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

function selectCharacterPopup(action = (selectedChar) => console.log(selectedChar)) {
    let charNames = game.actors.map(a => a.name)
    selectOptionPopup(charNames, (selectedCharName) => {
        let selectedChar = game.actors.find(a => a.name == selectedCharName)
        action(selectedChar)
    })
}

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

function calcProficiency(level) {
    let calcLevel = Math.max(1, level)
    let prof = Math.floor(((calcLevel - 1) / 4) + 2)
    return prof
}

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

function getMovesData() {
    return MOVES_LIST
}

function getGenericResultMessage(msgObj, roll) {
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

function getGm() {
    return game.users.find(u => u.isGM)
}
