Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Login = function (_Component) {
  babelHelpers.inherits(Login, _Component);

  function Login(props) {
    babelHelpers.classCallCheck(this, Login);

    var _this = babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      login: "N",
      password: "N",
      result: "",
      onPressFunction: props.onPressFunction
    };
    return _this;
  }

  babelHelpers.createClass(Login, [{
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        null,
        _react2.default.createElement(
          _reactNative.Text,
          null,
          'LOGIN'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          null,
          'Username'
        ),
        _react2.default.createElement(_reactNative.TextInput, {
          onChangeText: function onChangeText(login) {
            return _this2.setState({ login: login });
          } }),
        _react2.default.createElement(
          _reactNative.Text,
          null,
          'Password'
        ),
        _react2.default.createElement(_reactNative.TextInput, {
          onChangeText: function onChangeText(password) {
            return _this2.setState({ password: password });
          },
          secureTextEntry: true }),
        _react2.default.createElement(
          _reactNative.Text,
          null,
          this.state.login,
          ' ',
          this.state.password,
          ' ',
          this.state.result
        ),
        _react2.default.createElement(_reactNative.Button, {
          title: 'login',
          onPress: function onPress() {
            fetch("https://hidden-savannah-19210.herokuapp.com/login", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: _this2.state.login,
                password: _this2.state.password
              })
            }).then(function (response) {
              return response.json();
            }).then(function (responseData) {
              _this2.props.setId(JSON.stringify(responseData));
              _this2.props.navigator.pop();
              _this2.props.navigator.push({ id: 'XD' });
            });
            {}
          }
        })
      );
    }
  }]);
  return Login;
}(_react.Component);

exports.default = Login;