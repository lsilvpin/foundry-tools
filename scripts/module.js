/**
 * This hook specifies the initialization of the lsilvpin module.
 */
Hooks.on('init', () => {
    console.log("Teste custom module")
});

/**
 * This hook specifies the ready event for the lsilvpin module.
 */
Hooks.on('ready', () => {
    game.lsilvpin = {
        /**
         * The logger object provides logging functionality for the lsilvpin module.
         */
        logger: {
            info,
            warn,
            error
        },
        /**
         * The chatter object provides chat functionality for the lsilvpin module.
         */
        chatter: {
            sendChat
        },
        /**
         * The moves object provides move functionality for the lsilvpin module.
         */
        moves: {
            chooseMove,
            getMovesData
        }
    }
});
