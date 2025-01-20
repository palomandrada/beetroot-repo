"use strict";

var textDisplay = document.getElementById("textDisplay");
var textEdit = document.getElementById("textEdit"); //bold, italic and link buttons

var buttons = document.getElementsByClassName("tool-btn");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var btn = _step.value;
    btn.addEventListener("click", function () {
      var cmd = btn.dataset["command"];

      if (cmd === "createlink") {
        var url = prompt("Enter the link here: ", "http:\/\/");
        document.execCommand(cmd, false, url);
      } else {
        document.execCommand(cmd, false, null);
      }
    });
  };

  for (var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  } //Edit text 

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 'e') {
    event.preventDefault();
    textEdit.value = textDisplay.textContent;
    textDisplay.style.display = 'none';
    textEdit.style.display = 'block';
    textEdit.focus();
  } else if (event.ctrlKey && event.key === 's') {
    event.preventDefault();
    textDisplay.textContent = textEdit.value;
    textEdit.style.display = 'none';
    textDisplay.style.display = 'block';
  }
});