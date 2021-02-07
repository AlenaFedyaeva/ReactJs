"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initStore;

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function initStore() {
  return (0, _redux.createStore)(_reducers["default"], {});
}

;