var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var createJSXWithFragment = function () {
  var createCall = function (component, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      children[_i - 2] = arguments[_i];
    }
    return [component, props, children];
  };
  var call = function (root) {
    if (!root) return;
    if (root.length === 0) return;
    var component = root[0],
      props = root[1],
      children = root[2];
    var returnedChildren = component(
      __assign(__assign({}, props), { children: children })
    );
    // return children if children is not equal to next
    if (children !== returnedChildren) return returnedChildren;
    returnedChildren.forEach(function (children) {
      return call(children);
    });
  };
  var Fragment = function (_a) {
    var children = _a.children;
    return children;
  };
  return {
    call: call,
    Fragment: Fragment,
    createCall: createCall,
  };
};
var JSX = createJSXWithFragment();
var Fragment = JSX.Fragment;
export { Fragment, createJSXWithFragment };
export default JSX;
