"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocation = exports.SET_LOCATION = void 0;

var _dispatcher = _interopRequireDefault(require("./dispatcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_LOCATION = Symbol('Set location');
exports.SET_LOCATION = SET_LOCATION;

var setLocation = function setLocation(_ref) {
  var hash = _ref.hash,
      pathname = _ref.pathname,
      search = _ref.search,
      state = _ref.state;
  return _dispatcher.default.dispatch({
    type: SET_LOCATION,
    data: {
      hash: hash,
      pathname: pathname,
      search: search,
      state: state
    }
  });
};

exports.setLocation = setLocation;