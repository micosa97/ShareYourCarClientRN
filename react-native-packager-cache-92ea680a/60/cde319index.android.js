Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Login = require('./Login.js');

var _Login2 = babelHelpers.interopRequireDefault(_Login);

var _MainApp = require('./MainApp.js');

var _MainApp2 = babelHelpers.interopRequireDefault(_MainApp);

var ShareYourCar = function (_Component) {
  babelHelpers.inherits(ShareYourCar, _Component);

  function ShareYourCar() {
    babelHelpers.classCallCheck(this, ShareYourCar);

    var _this = babelHelpers.possibleConstructorReturn(this, (ShareYourCar.__proto__ || Object.getPrototypeOf(ShareYourCar)).call(this));

    _this.setId = function (id) {
      _this.setState({ id: id });
    };

    _this.state = { id: 'none' };

    return _this;
  }

  babelHelpers.createClass(ShareYourCar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_reactNative.Navigator, {
        initialRoute: { id: 'login' },
        renderScene: function renderScene(route, navigator) {
          switch (route.id) {
            case 'login':
              return _react2.default.createElement(_Login2.default, { navigator: navigator, setId: _this2.setId });
            case 'XD':
              return _react2.default.createElement(_MainApp2.default, null);
          }
        },
        configureScene: function configureScene(route, routeStack) {
          return _reactNative.Navigator.SceneConfigs.FloatFromLeft;
        }

      });
    }
  }]);
  return ShareYourCar;
}(_react.Component);

exports.default = ShareYourCar;


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

_reactNative.AppRegistry.registerComponent('ShareYourCar', function () {
  return ShareYourCar;
});