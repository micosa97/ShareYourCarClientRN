Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var SideMenu = require('react-native-side-menu');

var ContentView = function (_React$Component) {
  babelHelpers.inherits(ContentView, _React$Component);

  function ContentView() {
    babelHelpers.classCallCheck(this, ContentView);
    return babelHelpers.possibleConstructorReturn(this, (ContentView.__proto__ || Object.getPrototypeOf(ContentView)).apply(this, arguments));
  }

  babelHelpers.createClass(ContentView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container },
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.welcome },
          'Welcome to React Native!',
          this.props.a
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions },
          'To get started, edit index.ios.js'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions },
          'Press Cmd+R to reload,',
          '\n',
          'Cmd+Control+Z for dev menu'
        )
      );
    }
  }]);
  return ContentView;
}(_react2.default.Component);

var MainApp = function (_React$Component2) {
  babelHelpers.inherits(MainApp, _React$Component2);

  function MainApp() {
    babelHelpers.classCallCheck(this, MainApp);

    var _this2 = babelHelpers.possibleConstructorReturn(this, (MainApp.__proto__ || Object.getPrototypeOf(MainApp)).call(this));

    _this2.state = {
      a: '333'
    };
    return _this2;
  }

  babelHelpers.createClass(MainApp, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        SideMenu,
        {
          ref: function ref(c) {
            return _this3._slideMenu = c;
          },
          menu: _react2.default.createElement(
            _reactNative.View,
            null,
            _react2.default.createElement(
              _reactNative.ScrollView,
              null,
              _react2.default.createElement(_reactNative.Button, {
                title: 'Add Wish' }),
              _react2.default.createElement(_reactNative.Button, {
                title: 'Add Route' }),
              _react2.default.createElement(_reactNative.Button, {
                title: 'Show Routes' }),
              _react2.default.createElement(_reactNative.Button, {
                title: 'Show Wishes' }),
              _react2.default.createElement(_reactNative.Button, {
                title: 'Show Matches' }),
              _react2.default.createElement(_reactNative.Button, {
                title: 'Close' })
            )
          ) },
        _react2.default.createElement(ContentView, {
          a: this.state.a })
      );
    }
  }]);
  return MainApp;
}(_react2.default.Component);

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

exports.default = MainApp;