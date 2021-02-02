"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = exports.SEND_MESSAGE = void 0;
var SEND_MESSAGE = 'SEND_MESSAGE';
exports.SEND_MESSAGE = SEND_MESSAGE;

var sendMessage = function sendMessage(message, author, chatId) {
  return {
    type: SEND_MESSAGE,
    message: message,
    author: author,
    chatId: chatId
  };
};

exports.sendMessage = sendMessage;