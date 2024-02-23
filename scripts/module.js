
Hooks.on('init', () => {
    console.log("Teste custom module")
});

Hooks.on('ready', () => {
    game.lsilvpin = {
        logger: {
            info,
            warn,
            error
        },
        chatter: {
            sendChat
        },
        moves: {
            moveTest,
            defyDanger,
            selectCharacterPopup,
            getMovesData
        }
    }
});
