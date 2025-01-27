"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const secondHand = document.getElementById ("seconds-hand")
// const minutesHand = document.getElementById ("minutes-hand")
// const hoursHand = document.getElementById ("hours-hand")
// function getTime() {
//     const now = new Date()
//     const seconds = now.getSeconds()
//     const minutes = now.getMinutes()
//     const hours = now.getHours()
//     const timeInterval = 6 //the hand should move 6 degress every second (works for hours and minutes)
//     secondHand.style.transform = "rotate(" + (seconds * timeInterval ) + "deg)" 
//     minutesHand.style.transform = "rotate(" + (minutes * timeInterval ) + "deg)" 
//     hoursHand.style.transform = "rotate(" + (hours * 30 ) + "deg)"
// }
// getTime()
// setInterval(getTime, 100)
//---
var WorldClock =
/*#__PURE__*/
function () {
  function WorldClock(container, timezone, secondsHand, minutesHand, hoursHand, center) {
    _classCallCheck(this, WorldClock);

    this.container = container;
    this.timezone = timezone;
    this.secondHand = secondsHand;
    this.minutesHand = minutesHand;
    this.hoursHand = hoursHand;
    this.center = center;
    this.clockElement = document.createElement('div');
    this.clockElement.className = 'clock';
    this.container.appendChild(this.clockElement);
    this.render();
  }

  _createClass(WorldClock, [{
    key: "getCurrentDate",
    value: function getCurrentDate() {
      var date = new Date().toLocaleDateString('en-US', {
        timeZone: this.timezone
      });
      return "Current Date: ".concat(date);
    }
  }, {
    key: "getCurrentDateTime",
    value: function getCurrentDateTime() {
      var dateTime = new Date().toLocaleString('en-US', {
        timeZone: this.timezone
      });
      return "Current Date and Time: ".concat(dateTime);
    }
  }, {
    key: "deleteClock",
    value: function deleteClock() {
      this.container.removeChild(this.clockElement);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.clockElement.innerHTML = "\n            <p>Timezone: ".concat(this.timezone, "</p>\n            <button class=\"show-time\">Show Time</button>\n            <button class=\"show-datetime\">Show Date & Time</button>\n            <button class=\"delete-clock\">Delete Clock</button>\n            <div class=\"output\"></div>\n        ");
      this.clockElement.querySelector('.show-time').addEventListener('click', function () {
        _this.clockElement.querySelector('.output').textContent = _this.getCurrentDate();
      });
      this.clockElement.querySelector('.show-datetime').addEventListener('click', function () {
        _this.clockElement.querySelector('.output').textContent = _this.getCurrentDateTime();
      });
      this.clockElement.querySelector('.delete-clock').addEventListener('click', function () {
        _this.deleteClock();
      });
    }
  }]);

  return WorldClock;
}();