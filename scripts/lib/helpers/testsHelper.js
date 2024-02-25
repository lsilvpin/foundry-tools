
/**
 * Asserts that a given condition is true, otherwise throws an error with the specified message.
 * @param {boolean} condition - The condition to be checked.
 * @param {string} message - The error message to be thrown if the condition is false.
 * @throws {Error} Throws an error with the specified message if the condition is false.
 */
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

/**
 * Asserts that a given string is not empty, otherwise throws an error with the specified message.
 * @param {string} text - The string to be checked.
 * @param {string} message - The error message to be thrown if the string is empty.
 * @throws {Error} Throws an error with the specified message if the string is empty.
 */
function assertStringIsNotEmpty(text, message) {
    assert(text !== null && text !== undefined && text.trim() !== '', message);
}

/**
 * Asserts that a given function does not throw an error, otherwise records the test as failed.
 * When the function does not throw an error, the test is recorded as passed.
 * @param {string} title - The title of the test.
 * @param {function} func - The function to be tested.
 */
function assertDoesNotThrow(title, func) {
    try {
        func();
        if (!TEST_RESULTS.passed.includes(title)) {
            TEST_RESULTS.passed.push(title);
        }
    } catch (ex) {
        error(ex);
        if (!TEST_RESULTS.fails.includes(title)) {
            TEST_RESULTS.fails.push(title);
        }
    }
}
