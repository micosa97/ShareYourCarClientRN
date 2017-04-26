
'use strict';

var MetroListView = require('MetroListView');
var React = require('React');
var VirtualizedSectionList = require('VirtualizedSectionList');

var SectionList = function (_React$PureComponent) {
  babelHelpers.inherits(SectionList, _React$PureComponent);

  function SectionList() {
    babelHelpers.classCallCheck(this, SectionList);
    return babelHelpers.possibleConstructorReturn(this, (SectionList.__proto__ || Object.getPrototypeOf(SectionList)).apply(this, arguments));
  }

  babelHelpers.createClass(SectionList, [{
    key: 'render',
    value: function render() {
      var List = this.props.legacyImplementation ? MetroListView : VirtualizedSectionList;
      return React.createElement(List, this.props);
    }
  }]);
  return SectionList;
}(React.PureComponent);

SectionList.defaultProps = VirtualizedSectionList.defaultProps;


module.exports = SectionList;