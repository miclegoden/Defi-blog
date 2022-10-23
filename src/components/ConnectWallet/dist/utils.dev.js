"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHex = exports.truncateAddress = void 0;

var truncateAddress = function truncateAddress(address) {
  if (!address) return "No Account";
  var match = address.match(/^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/);
  if (!match) return address;
  return "".concat(match[1], "\u2026").concat(match[2]);
};

exports.truncateAddress = truncateAddress;

var toHex = function toHex(num) {
  var val = Number(num);
  return "0x" + val.toString(16);
};

exports.toHex = toHex;