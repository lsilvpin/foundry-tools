
/**
 * Runs all the tests and logs the test results.
 */
function testShouldRunAllTests() {
    runTests();
    console.log('Test Results:');
    console.log('Passed:', TEST_RESULTS.passed);
    console.log('Failed:', TEST_RESULTS.failed);
}

/**
 * Runs all the individual tests.
 */
function runTests() {
    // Test tools
    assertDoesNotThrow('testShouldLogInfo', testShouldLogInfo);
    assertDoesNotThrow('testShouldLogWarn', testShouldLogWarn);
    assertDoesNotThrow('testShouldLogError', testShouldLogError);

    // Test user interactions
    assertDoesNotThrow('testShouldOpenOptionsPopup', testShouldOpenOptionsPopup);
    assertDoesNotThrow('testShouldOpenSearchPopup', testShouldOpenSearchPopup);
    assertDoesNotThrow('testShouldCreateOkPopup', testShouldCreateOkPopup);

    // Test repositories
    assertDoesNotThrow('testShouldGetAllCards', testShouldGetAllCards);
    assertDoesNotThrow('testShouldSearchCardsForAbaco', testShouldSearchCardsForAbaco);
}
