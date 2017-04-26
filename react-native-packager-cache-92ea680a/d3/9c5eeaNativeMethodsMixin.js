
'use strict';

var ReactNative = require('ReactNative');
var ReactNativeAttributePayload = require('ReactNativeAttributePayload');
var TextInputState = require('TextInputState');
var UIManager = require('UIManager');

var invariant = require('fbjs/lib/invariant');

function warnForStyleProps(props, validAttributes) {
  for (var key in validAttributes.style) {
    if (!(validAttributes[key] || props[key] === undefined)) {
      console.error('You are setting the style `{ ' + key + ': ... }` as a prop. You ' + 'should nest it in a style object. ' + 'E.g. `{ style: { ' + key + ': ... } }`');
    }
  }
}

var NativeMethodsMixin = {
  measure: function measure(callback) {
    UIManager.measure(ReactNative.findNodeHandle(this), mountSafeCallback(this, callback));
  },

  measureInWindow: function measureInWindow(callback) {
    UIManager.measureInWindow(ReactNative.findNodeHandle(this), mountSafeCallback(this, callback));
  },

  measureLayout: function measureLayout(relativeToNativeNode, onSuccess, onFail) {
    UIManager.measureLayout(ReactNative.findNodeHandle(this), relativeToNativeNode, mountSafeCallback(this, onFail), mountSafeCallback(this, onSuccess));
  },

  setNativeProps: function setNativeProps(nativeProps) {
    if (__DEV__) {
      warnForStyleProps(nativeProps, this.viewConfig.validAttributes);
    }

    var updatePayload = ReactNativeAttributePayload.create(nativeProps, this.viewConfig.validAttributes);

    UIManager.updateView(ReactNative.findNodeHandle(this), this.viewConfig.uiViewClassName, updatePayload);
  },

  focus: function focus() {
    TextInputState.focusTextInput(ReactNative.findNodeHandle(this));
  },

  blur: function blur() {
    TextInputState.blurTextInput(ReactNative.findNodeHandle(this));
  }
};

function throwOnStylesProp(component, props) {
  if (props.styles !== undefined) {
    var owner = component._owner || null;
    var name = component.constructor.displayName;
    var msg = '`styles` is not a supported property of `' + name + '`, did ' + 'you mean `style` (singular)?';
    if (owner && owner.constructor && owner.constructor.displayName) {
      msg += '\n\nCheck the `' + owner.constructor.displayName + '` parent ' + ' component.';
    }
    throw new Error(msg);
  }
}
if (__DEV__) {
  var NativeMethodsMixin_DEV = NativeMethodsMixin;
  invariant(!NativeMethodsMixin_DEV.componentWillMount && !NativeMethodsMixin_DEV.componentWillReceiveProps, 'Do not override existing functions.');
  NativeMethodsMixin_DEV.componentWillMount = function () {
    throwOnStylesProp(this, this.props);
  };
  NativeMethodsMixin_DEV.componentWillReceiveProps = function (newProps) {
    throwOnStylesProp(this, newProps);
  };
}

function mountSafeCallback(context, callback) {
  return function () {
    if (!callback || typeof context.isMounted === 'function' && !context.isMounted()) {
      return undefined;
    }
    return callback.apply(context, arguments);
  };
}

module.exports = NativeMethodsMixin;