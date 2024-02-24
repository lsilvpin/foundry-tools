
/**
 * This file contains the initialization and configuration of the lsilvpin module.
 * It defines various hooks and sets up the game object with custom properties and functions.
 */

Hooks.on('init', () => {
    console.log("Teste custom module")
});

Hooks.on('ready', () => {
    game.lsilvpin = {
        /**
         * The logger object provides logging functionality for the lsilvpin module.
         * It contains the following methods: info, warn, error.
         */
        logger: {
            info,
            warn,
            error
        },
        /**
         * The chatter object provides chat functionality for the lsilvpin module.
         * It contains the following method: sendChat.
         */
        chatter: {
            sendChat
        },
        /**
         * The moves object contains various move functions for the lsilvpin module.
         * It includes the following functions: moveTest, defyDanger, selectCharacterPopup, getMovesData.
         */
        moves: {
            defyDanger,
            chooseMove,
            getMovesData
        }
    }
});
