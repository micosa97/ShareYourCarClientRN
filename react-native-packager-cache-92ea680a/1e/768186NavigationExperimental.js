
'use strict';

var NavigationCard = require('NavigationCard');
var NavigationCardStack = require('NavigationCardStack');
var NavigationHeader = require('NavigationHeader');
var NavigationPropTypes = require('NavigationPropTypes');
var NavigationStateUtils = require('NavigationStateUtils');
var NavigationTransitioner = require('NavigationTransitioner');

var warning = require('fbjs/lib/warning');

warning(false, 'NavigationExperimental is deprecated and will be removed in a future ' + 'version of React Native. The NavigationExperimental views live on in ' + 'the React-Navigation project, which also makes it easy to declare ' + 'navigation logic for your app. Learn more at https://reactnavigation.org/');

var NavigationExperimental = {
  StateUtils: NavigationStateUtils,

  Transitioner: NavigationTransitioner,

  Card: NavigationCard,
  CardStack: NavigationCardStack,
  Header: NavigationHeader,

  PropTypes: NavigationPropTypes
};

module.exports = NavigationExperimental;