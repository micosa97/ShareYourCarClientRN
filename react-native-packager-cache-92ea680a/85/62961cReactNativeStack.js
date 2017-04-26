
'use strict';

var ReactNativeComponentTree = require('ReactNativeComponentTree');
var ReactNativeInjection = require('ReactNativeInjection');
var ReactNativeStackInjection = require('ReactNativeStackInjection');
var ReactNativeMount = require('ReactNativeMount');
var ReactUpdates = require('ReactUpdates');

var findNodeHandle = require('findNodeHandle');

ReactNativeInjection.inject();
ReactNativeStackInjection.inject();

var render = function render(element, mountInto, callback) {
  return ReactNativeMount.renderComponent(element, mountInto, callback);
};

findNodeHandle.injection.injectFindNode(function (instance) {
  return instance.getHostNode();
});
findNodeHandle.injection.injectFindRootNodeID(function (instance) {
  return instance._rootNodeID;
});

var ReactNative = {
  hasReactNativeInitialized: false,
  findNodeHandle: findNodeHandle,
  render: render,
  unmountComponentAtNode: ReactNativeMount.unmountComponentAtNode,

  unstable_batchedUpdates: ReactUpdates.batchedUpdates,


  unmountComponentAtNodeAndRemoveContainer: ReactNativeMount.unmountComponentAtNodeAndRemoveContainer
};

if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
    ComponentTree: {
      getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
        return ReactNativeComponentTree.getClosestInstanceFromNode(node);
      },
      getNodeFromInstance: function getNodeFromInstance(inst) {
        while (inst._renderedComponent) {
          inst = inst._renderedComponent;
        }
        if (inst) {
          return ReactNativeComponentTree.getNodeFromInstance(inst);
        } else {
          return null;
        }
      }
    },
    Mount: ReactNativeMount,
    Reconciler: require('ReactReconciler')
  });
}

module.exports = ReactNative;