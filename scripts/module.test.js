/**
 * This file contains tests for the lsilvpin module.
 */

describe('lsilvpin module', () => {
  describe('Initialization', () => {
    it('should log a message on init', () => {
      // Mock the console.log method
      const consoleLogMock = jest.spyOn(console, 'log');
      
      // Trigger the init hook
      Hooks.call('init');
      
      // Expect the console.log method to have been called with the expected message
      expect(consoleLogMock).toHaveBeenCalledWith('Teste custom module');
      
      // Restore the original console.log method
      consoleLogMock.mockRestore();
    });
  });
  
  describe('Custom properties and functions', () => {
    beforeEach(() => {
      // Reset the lsilvpin object before each test
      game.lsilvpin = {};
    });
    
    it('should define the tests property', () => {
      // Trigger the ready hook
      Hooks.call('ready');
      
      // Expect the tests property to be defined
      expect(game.lsilvpin.tests).toBeDefined();
    });
    
    it('should define the logger property', () => {
      // Trigger the ready hook
      Hooks.call('ready');
      
      // Expect the logger property to be defined
      expect(game.lsilvpin.logger).toBeDefined();
    });
    
    it('should define the chatter property', () => {
      // Trigger the ready hook
      Hooks.call('ready');
      
      // Expect the chatter property to be defined
      expect(game.lsilvpin.chatter).toBeDefined();
    });
    
    it('should define the moves property', () => {
      // Trigger the ready hook
      Hooks.call('ready');
      
      // Expect the moves property to be defined
      expect(game.lsilvpin.moves).toBeDefined();
    });
  });
});