
/**
 * Test the 'info' function.
 */
function testShouldLogInfo() {
    const message = "This is an informational message";
    info(message);
}

/**
 * Test the 'warn' function.
 */
function testShouldLogWarn() {
    const message = "This is a warning message";
    warn(message);
}

/**
 * Test the 'error' function.
 */
function testShouldLogError() {
    const errorMsg = new Error("This is an error");
    error(errorMsg);
}
