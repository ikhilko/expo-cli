'use strict';

/**
 * Note that instances of this class do NOT pass `instanceof JsonFileError`.
 */
export default class JsonFileError extends Error {
  constructor(message, cause) {
    let fullMessage = cause ? `${message}\n└─ Cause: ${cause.name}: ${cause.message}` : message;
    super(fullMessage);
    this.name = this.constructor.name;
    this.cause = cause;
    this.isJsonFileError = true;
  }
}
