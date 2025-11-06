/**
 * Enhanced Jest Setup for CleanCity Waste Scheduler Tests
 * Sets up the JSDOM environment for testing vanilla JavaScript with improved DOM simulation
 */

// Import jest-dom for additional matchers
require('@testing-library/jest-dom');

// Polyfills for Node.js environment
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock window.performance if not available
if (typeof window.performance === 'undefined') {
  window.performance = {
    now: () => Date.now()
  };
}

// Global test setup
global.console = {
  ...console,
  // Suppress console warnings during tests unless needed
  warn: jest.fn(),
};

// Mock window.alert and other browser APIs
global.alert = jest.fn();
global.confirm = jest.fn(() => true);

// Setup for JSDOM environment
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Enhanced localStorage mock
const createMockLocalStorage = () => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    length: Object.keys(store).length,
    key: jest.fn((index) => Object.keys(store)[index] || null)
  };
};

// Global test utilities
global.testUtils = {
  // Simulate DOM ready state
  triggerDOMContentLoaded: () => {
    const event = new window.Event('DOMContentLoaded', { bubbles: true });
    document.dispatchEvent(event);
  },

  // Simulate form submission with proper event handling
  submitForm: (formId, preventDefault = true) => {
    const form = document.getElementById(formId);
    if (!form) throw new Error(`Form with id "${formId}" not found`);
    
    const event = new window.Event('submit', { bubbles: true, cancelable: true });
    if (preventDefault) {
      event.preventDefault = jest.fn();
    }
    form.dispatchEvent(event);
    return event;
  },

  // Simulate click events
  clickElement: (element) => {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (!element) throw new Error('Element not found for click simulation');
    
    const event = new window.Event('click', { bubbles: true, cancelable: true });
    element.dispatchEvent(event);
    return event;
  },

  // Simulate page navigation
  navigateToPage: (pageName) => {
    const pageLink = document.querySelector(`[data-page="${pageName}"]`);
    if (pageLink) {
      return testUtils.clickElement(pageLink);
    }
    throw new Error(`Page link for "${pageName}" not found`);
  },

  // Create enhanced localStorage mock
  createMockLocalStorage,

  // Reset all mocks
  resetMocks: () => {
    jest.clearAllMocks();
    if (global.alert && global.alert.mockClear) global.alert.mockClear();
    if (global.confirm && global.confirm.mockClear) global.confirm.mockClear();
  },

  // Mock successful form validation
  mockFormValidity: (formId, isValid = true) => {
    const form = document.getElementById(formId);
    if (form) {
      form.checkValidity = jest.fn(() => isValid);
      form.reportValidity = jest.fn(() => isValid);
    }
  },

  // Simulate element visibility
  makeElementVisible: (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'block';
      element.style.visibility = 'visible';
    }
  },

  // Simulate element hiding
  hideElement: (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'none';
    }
  }
};