"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pColor = pColor;

function pColor(color) {
  var p = document.querySelector('p');
  p.style.color = color;
}