"use strict";

var _teacher = _interopRequireDefault(require("./teacher.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Student =
/*#__PURE__*/
function () {
  function Student(age, sex) {
    _classCallCheck(this, Student);

    this.age = 10;
    this.sex = sex;
  }

  _createClass(Student, [{
    key: "getAge",
    value: function getAge() {
      return this.age;
    }
  }, {
    key: "getSex",
    value: function getSex() {
      return this.sex;
    }
  }]);

  return Student;
}();

var s = new Student(20, "man");
console.log(s.getAge());
var t = new _teacher.default(35, "man", s);
console.log(t.getStu());