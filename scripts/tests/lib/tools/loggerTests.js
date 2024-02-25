
/**
 * Test the 'info' function.
 */
function testInfo() {
    const message = "This is an informational message";
    info(message);
}

/**
 * Test the 'warn' function.
 */
function testWarn() {
    const message = "This is a warning message";
    warn(message);
}

/**
 * Test the 'error' function.
 */
function testError() {
    const errorMsg = new Error("This is an error");
    error(errorMsg);
}
