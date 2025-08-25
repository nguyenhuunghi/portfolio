require('@testing-library/jest-dom');
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Polyfill global.Request to avoid ReferenceError in tests
if (typeof global.Request === 'undefined') {
  global.Request = function() {};
}

// Polyfill global.Response to avoid ReferenceError in tests
if (typeof global.Response === 'undefined') {
  global.Response = class Response {
    constructor(body, init) {
      this._body = body;
      this.status = init?.status || 200;
      this.headers = init?.headers || {};
    }
    json() {
      // Simulate Next.js Response.json()
      try {
        return typeof this._body === 'string' ? JSON.parse(this._body) : this._body;
      } catch (e) {
        return this._body;
      }
    }
    text() {
      return typeof this._body === 'string' ? this._body : JSON.stringify(this._body);
    }
  };
}
