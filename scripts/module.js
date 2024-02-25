/**
 * This hook specifies the initialization of the lsilvpin module.
 */
Hooks.on('init', () => {
    console.log('lsilvpin | Initializing lsilvpin module');
    console.log('lsilvpin | Module initialized');
});

/**
 * This hook specifies the ready event for the lsilvpin module.
 */
Hooks.on('ready', () => {
    game.lsilvpin = {
        tests: {
            tools: {
                commonTests: {
                    testShouldRunAllTests
                },
                loggerTests: {
                    testShouldLogInfo,
                    testShouldLogWarn,
                    testShouldLogError
                },
                popupsTests: {
                    testShouldOpenOptionsPopup,
                    testShouldOpenSearchPopup,
                    testShouldCreateOkPopup,
                    testShouldOpenSarchCardsPopup
                },
                cardsTests: {
                    testShouldGetAllCards
                }
            }
        },
        tools: {
            testsHelper: {
                assert
            },
            logger: {
                info,
                warn,
                error
            },
            chatter: {
                sendChat
            },
            moves: {
                chooseMove,
                getMovesData
            },
            popups: {
                selectOptionPopup,
                searchListPopup,
                createOkPopup,
                createSearchCardsPopup
            },
            cards: {
                getAllCards
            }
        }
    }
});
