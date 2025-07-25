import {
  require_react_dom
} from "./chunk-OAZAAUMI.js";
import {
  require_react
} from "./chunk-6GAV2S6I.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/invariant/browser.js
var require_browser = __commonJS({
  "node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant4 = function(condition, format, a, b, c, d, e, f) {
      if (true) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant4;
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "node_modules/lodash/_baseSlice.js"(exports, module) {
    function baseSlice(array, start2, end2) {
      var index = -1, length = array.length;
      if (start2 < 0) {
        start2 = -start2 > length ? 0 : length + start2;
      }
      end2 = end2 > length ? length : end2;
      if (end2 < 0) {
        end2 += length;
      }
      length = start2 > end2 ? 0 : end2 - start2 >>> 0;
      start2 >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start2];
      }
      return result;
    }
    module.exports = baseSlice;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq2(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq2;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction2(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction2;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction2 = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction2(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq2 = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq2(object[index], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "node_modules/lodash/toFinite.js"(exports, module) {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module.exports = toFinite;
  }
});

// node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "node_modules/lodash/toInteger.js"(exports, module) {
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module.exports = toInteger;
  }
});

// node_modules/lodash/chunk.js
var require_chunk = __commonJS({
  "node_modules/lodash/chunk.js"(exports, module) {
    var baseSlice = require_baseSlice();
    var isIterateeCall = require_isIterateeCall();
    var toInteger = require_toInteger();
    var nativeCeil = Math.ceil;
    var nativeMax = Math.max;
    function chunk2(array, size2, guard) {
      if (guard ? isIterateeCall(array, size2, guard) : size2 === void 0) {
        size2 = 1;
      } else {
        size2 = nativeMax(toInteger(size2), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size2 < 1) {
        return [];
      }
      var index = 0, resIndex = 0, result = Array(nativeCeil(length / size2));
      while (index < length) {
        result[resIndex++] = baseSlice(array, index, index += size2);
      }
      return result;
    }
    module.exports = chunk2;
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning2 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning2 = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning2;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq2 = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq2(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction2 = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size2 = data.size;
      data.set(key, value);
      this.size += data.size == size2 ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array = require_Uint8Array();
    var eq2 = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq2(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset3 = array.length;
      while (++index < length) {
        array[offset3 + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform2) {
      return function(arg) {
        return func(transform2(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual4(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual4;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1, length = path.length, result = false;
      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity(value) {
      return value;
    }
    module.exports = identity;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/findIndex.js
var require_findIndex = __commonJS({
  "node_modules/lodash/findIndex.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIteratee = require_baseIteratee();
    var toInteger = require_toInteger();
    var nativeMax = Math.max;
    function findIndex2(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, baseIteratee(predicate, 3), index);
    }
    module.exports = findIndex2;
  }
});

// node_modules/lodash/_baseRange.js
var require_baseRange = __commonJS({
  "node_modules/lodash/_baseRange.js"(exports, module) {
    var nativeCeil = Math.ceil;
    var nativeMax = Math.max;
    function baseRange(start2, end2, step, fromRight) {
      var index = -1, length = nativeMax(nativeCeil((end2 - start2) / (step || 1)), 0), result = Array(length);
      while (length--) {
        result[fromRight ? length : ++index] = start2;
        start2 += step;
      }
      return result;
    }
    module.exports = baseRange;
  }
});

// node_modules/lodash/_createRange.js
var require_createRange = __commonJS({
  "node_modules/lodash/_createRange.js"(exports, module) {
    var baseRange = require_baseRange();
    var isIterateeCall = require_isIterateeCall();
    var toFinite = require_toFinite();
    function createRange(fromRight) {
      return function(start2, end2, step) {
        if (step && typeof step != "number" && isIterateeCall(start2, end2, step)) {
          end2 = step = void 0;
        }
        start2 = toFinite(start2);
        if (end2 === void 0) {
          end2 = start2;
          start2 = 0;
        } else {
          end2 = toFinite(end2);
        }
        step = step === void 0 ? start2 < end2 ? 1 : -1 : toFinite(step);
        return baseRange(start2, end2, step, fromRight);
      };
    }
    module.exports = createRange;
  }
});

// node_modules/lodash/range.js
var require_range = __commonJS({
  "node_modules/lodash/range.js"(exports, module) {
    var createRange = require_createRange();
    var range2 = createRange();
    module.exports = range2;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module) {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "node_modules/lodash/_baseForOwn.js"(exports, module) {
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
  }
});

// node_modules/lodash/_createBaseEach.js
var require_createBaseEach = __commonJS({
  "node_modules/lodash/_createBaseEach.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    module.exports = createBaseEach;
  }
});

// node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  "node_modules/lodash/_baseEach.js"(exports, module) {
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// node_modules/lodash/_baseMap.js
var require_baseMap = __commonJS({
  "node_modules/lodash/_baseMap.js"(exports, module) {
    var baseEach = require_baseEach();
    var isArrayLike = require_isArrayLike();
    function baseMap(collection, iteratee) {
      var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection2) {
        result[++index] = iteratee(value, key, collection2);
      });
      return result;
    }
    module.exports = baseMap;
  }
});

// node_modules/lodash/_baseSortBy.js
var require_baseSortBy = __commonJS({
  "node_modules/lodash/_baseSortBy.js"(exports, module) {
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    module.exports = baseSortBy;
  }
});

// node_modules/lodash/_compareAscending.js
var require_compareAscending = __commonJS({
  "node_modules/lodash/_compareAscending.js"(exports, module) {
    var isSymbol = require_isSymbol();
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
        var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
          return 1;
        }
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }
    module.exports = compareAscending;
  }
});

// node_modules/lodash/_compareMultiple.js
var require_compareMultiple = __commonJS({
  "node_modules/lodash/_compareMultiple.js"(exports, module) {
    var compareAscending = require_compareAscending();
    function compareMultiple(object, other, orders) {
      var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order2 = orders[index];
          return result * (order2 == "desc" ? -1 : 1);
        }
      }
      return object.index - other.index;
    }
    module.exports = compareMultiple;
  }
});

// node_modules/lodash/_baseOrderBy.js
var require_baseOrderBy = __commonJS({
  "node_modules/lodash/_baseOrderBy.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseGet = require_baseGet();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var baseSortBy = require_baseSortBy();
    var baseUnary = require_baseUnary();
    var compareMultiple = require_compareMultiple();
    var identity = require_identity();
    var isArray = require_isArray();
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            };
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }
      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      var result = baseMap(collection, function(value, key, collection2) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { "criteria": criteria, "index": ++index, "value": value };
      });
      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }
    module.exports = baseOrderBy;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start2, transform2) {
      start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start2 + index];
        }
        index = -1;
        var otherArgs = Array(start2 + 1);
        while (++index < start2) {
          otherArgs[index] = args[index];
        }
        otherArgs[start2] = transform2(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module) {
    var identity = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start2) {
      return setToString(overRest(func, start2, identity), func + "");
    }
    module.exports = baseRest;
  }
});

// node_modules/lodash/sortBy.js
var require_sortBy = __commonJS({
  "node_modules/lodash/sortBy.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    var baseOrderBy = require_baseOrderBy();
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    var sortBy2 = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });
    module.exports = sortBy2;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module) {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// node_modules/lodash/defaults.js
var require_defaults = __commonJS({
  "node_modules/lodash/defaults.js"(exports, module) {
    var baseRest = require_baseRest();
    var eq2 = require_eq();
    var isIterateeCall = require_isIterateeCall();
    var keysIn = require_keysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var defaults2 = baseRest(function(object, sources) {
      object = Object(object);
      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }
      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;
        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];
          if (value === void 0 || eq2(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            object[key] = source[key];
          }
        }
      }
      return object;
    });
    module.exports = defaults2;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/mapValues.js
var require_mapValues = __commonJS({
  "node_modules/lodash/mapValues.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    function mapValues2(object, iteratee) {
      var result = {};
      iteratee = baseIteratee(iteratee, 3);
      baseForOwn(object, function(value, key, object2) {
        baseAssignValue(result, key, iteratee(value, key, object2));
      });
      return result;
    }
    module.exports = mapValues2;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module) {
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    module.exports = arrayEach;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq2 = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq2(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module) {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module.exports = baseAssign;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    module.exports = copyArray;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module.exports = initCloneArray;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
  }
});

// node_modules/lodash/last.js
var require_last = __commonJS({
  "node_modules/lodash/last.js"(exports, module) {
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : void 0;
    }
    module.exports = last;
  }
});

// node_modules/lodash/_parent.js
var require_parent = __commonJS({
  "node_modules/lodash/_parent.js"(exports, module) {
    var baseGet = require_baseGet();
    var baseSlice = require_baseSlice();
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }
    module.exports = parent;
  }
});

// node_modules/lodash/_baseUnset.js
var require_baseUnset = __commonJS({
  "node_modules/lodash/_baseUnset.js"(exports, module) {
    var castPath = require_castPath();
    var last = require_last();
    var parent = require_parent();
    var toKey = require_toKey();
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }
    module.exports = baseUnset;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject;
  }
});

// node_modules/lodash/_customOmitClone.js
var require_customOmitClone = __commonJS({
  "node_modules/lodash/_customOmitClone.js"(exports, module) {
    var isPlainObject = require_isPlainObject();
    function customOmitClone(value) {
      return isPlainObject(value) ? void 0 : value;
    }
    module.exports = customOmitClone;
  }
});

// node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "node_modules/lodash/flatten.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }
    module.exports = flatten;
  }
});

// node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "node_modules/lodash/_flatRest.js"(exports, module) {
    var flatten = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten), func + "");
    }
    module.exports = flatRest;
  }
});

// node_modules/lodash/omit.js
var require_omit = __commonJS({
  "node_modules/lodash/omit.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseClone = require_baseClone();
    var baseUnset = require_baseUnset();
    var castPath = require_castPath();
    var copyObject = require_copyObject();
    var customOmitClone = require_customOmitClone();
    var flatRest = require_flatRest();
    var getAllKeysIn = require_getAllKeysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var omit2 = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });
    module.exports = omit2;
  }
});

// node_modules/lodash/transform.js
var require_transform = __commonJS({
  "node_modules/lodash/transform.js"(exports, module) {
    var arrayEach = require_arrayEach();
    var baseCreate = require_baseCreate();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    var getPrototype = require_getPrototype();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isFunction2 = require_isFunction();
    var isObject = require_isObject();
    var isTypedArray = require_isTypedArray();
    function transform2(object, iteratee, accumulator) {
      var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
      iteratee = baseIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor() : [];
        } else if (isObject(object)) {
          accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
        } else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
        return iteratee(accumulator, value, index, object2);
      });
      return accumulator;
    }
    module.exports = transform2;
  }
});

// node_modules/dayjs/plugin/isBetween.js
var require_isBetween = __commonJS({
  "node_modules/dayjs/plugin/isBetween.js"(exports, module) {
    !function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isBetween = i();
    }(exports, function() {
      "use strict";
      return function(e, i, t) {
        i.prototype.isBetween = function(e2, i2, s, f) {
          var n = t(e2), o = t(i2), r2 = "(" === (f = f || "()")[0], u = ")" === f[1];
          return (r2 ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r2 ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isSameOrAfter.js
var require_isSameOrAfter = __commonJS({
  "node_modules/dayjs/plugin/isSameOrAfter.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrAfter = t();
    }(exports, function() {
      "use strict";
      return function(e, t) {
        t.prototype.isSameOrAfter = function(e2, t2) {
          return this.isSame(e2, t2) || this.isAfter(e2, t2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isSameOrBefore.js
var require_isSameOrBefore = __commonJS({
  "node_modules/dayjs/plugin/isSameOrBefore.js"(exports, module) {
    !function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrBefore = i();
    }(exports, function() {
      "use strict";
      return function(e, i) {
        i.prototype.isSameOrBefore = function(e2, i2) {
          return this.isSame(e2, i2) || this.isBefore(e2, i2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/localeData.js
var require_localeData = __commonJS({
  "node_modules/dayjs/plugin/localeData.js"(exports, module) {
    !function(n, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (n = "undefined" != typeof globalThis ? globalThis : n || self).dayjs_plugin_localeData = e();
    }(exports, function() {
      "use strict";
      return function(n, e, t) {
        var r2 = e.prototype, o = function(n2) {
          return n2 && (n2.indexOf ? n2 : n2.s);
        }, u = function(n2, e2, t2, r3, u2) {
          var i2 = n2.name ? n2 : n2.$locale(), a2 = o(i2[e2]), s2 = o(i2[t2]), f = a2 || s2.map(function(n3) {
            return n3.slice(0, r3);
          });
          if (!u2) return f;
          var d = i2.weekStart;
          return f.map(function(n3, e3) {
            return f[(e3 + (d || 0)) % 7];
          });
        }, i = function() {
          return t.Ls[t.locale()];
        }, a = function(n2, e2) {
          return n2.formats[e2] || function(n3) {
            return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e3, t2) {
              return e3 || t2.slice(1);
            });
          }(n2.formats[e2.toUpperCase()]);
        }, s = function() {
          var n2 = this;
          return { months: function(e2) {
            return e2 ? e2.format("MMMM") : u(n2, "months");
          }, monthsShort: function(e2) {
            return e2 ? e2.format("MMM") : u(n2, "monthsShort", "months", 3);
          }, firstDayOfWeek: function() {
            return n2.$locale().weekStart || 0;
          }, weekdays: function(e2) {
            return e2 ? e2.format("dddd") : u(n2, "weekdays");
          }, weekdaysMin: function(e2) {
            return e2 ? e2.format("dd") : u(n2, "weekdaysMin", "weekdays", 2);
          }, weekdaysShort: function(e2) {
            return e2 ? e2.format("ddd") : u(n2, "weekdaysShort", "weekdays", 3);
          }, longDateFormat: function(e2) {
            return a(n2.$locale(), e2);
          }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
        };
        r2.localeData = function() {
          return s.bind(this)();
        }, t.localeData = function() {
          var n2 = i();
          return { firstDayOfWeek: function() {
            return n2.weekStart || 0;
          }, weekdays: function() {
            return t.weekdays();
          }, weekdaysShort: function() {
            return t.weekdaysShort();
          }, weekdaysMin: function() {
            return t.weekdaysMin();
          }, months: function() {
            return t.months();
          }, monthsShort: function() {
            return t.monthsShort();
          }, longDateFormat: function(e2) {
            return a(n2, e2);
          }, meridiem: n2.meridiem, ordinal: n2.ordinal };
        }, t.months = function() {
          return u(i(), "months");
        }, t.monthsShort = function() {
          return u(i(), "monthsShort", "months", 3);
        }, t.weekdays = function(n2) {
          return u(i(), "weekdays", null, null, n2);
        }, t.weekdaysShort = function(n2) {
          return u(i(), "weekdaysShort", "weekdays", 3, n2);
        }, t.weekdaysMin = function(n2) {
          return u(i(), "weekdaysMin", "weekdays", 2, n2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/localizedFormat.js
var require_localizedFormat = __commonJS({
  "node_modules/dayjs/plugin/localizedFormat.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_localizedFormat = t();
    }(exports, function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(t, o, n) {
        var r2 = o.prototype, i = r2.format;
        n.en.formats = e, r2.format = function(t2) {
          void 0 === t2 && (t2 = "YYYY-MM-DDTHH:mm:ssZ");
          var o2 = this.$locale().formats, n2 = function(t3, o3) {
            return t3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t4, n3, r3) {
              var i2 = r3 && r3.toUpperCase();
              return n3 || o3[r3] || e[r3] || o3[i2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t5, o4) {
                return t5 || o4.slice(1);
              });
            });
          }(t2, void 0 === o2 ? {} : o2);
          return i.call(this, n2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/minMax.js
var require_minMax = __commonJS({
  "node_modules/dayjs/plugin/minMax.js"(exports, module) {
    !function(e, n) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_minMax = n();
    }(exports, function() {
      "use strict";
      return function(e, n, t) {
        var i = function(e2, n2) {
          if (!n2 || !n2.length || 1 === n2.length && !n2[0] || 1 === n2.length && Array.isArray(n2[0]) && !n2[0].length) return null;
          var t2;
          1 === n2.length && n2[0].length > 0 && (n2 = n2[0]);
          t2 = (n2 = n2.filter(function(e3) {
            return e3;
          }))[0];
          for (var i2 = 1; i2 < n2.length; i2 += 1) n2[i2].isValid() && !n2[i2][e2](t2) || (t2 = n2[i2]);
          return t2;
        };
        t.max = function() {
          var e2 = [].slice.call(arguments, 0);
          return i("isAfter", e2);
        }, t.min = function() {
          var e2 = [].slice.call(arguments, 0);
          return i("isBefore", e2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/utc.js
var require_utc = __commonJS({
  "node_modules/dayjs/plugin/utc.js"(exports, module) {
    !function(t, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
    }(exports, function() {
      "use strict";
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var o = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
        };
        var r2 = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else r2.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2)) return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3) return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          }(s2), null === s2)) return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
          if (f2) return o2.$offset = u2, o2.$u = 0 === s2, o2;
          if (0 !== s2) {
            var r3 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (o2 = this.local().add(u2 + r3, t)).$offset = u2, o2.$x.$localOffset = r3;
          } else o2 = this.utc();
          return o2;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u) return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isLeapYear.js
var require_isLeapYear = __commonJS({
  "node_modules/dayjs/plugin/isLeapYear.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isLeapYear = t();
    }(exports, function() {
      "use strict";
      return function(e, t) {
        t.prototype.isLeapYear = function() {
          return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
        };
      };
    });
  }
});

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r2) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r2 || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r2, t) {
  return (r2 = toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r2] = t, e;
}

// node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e, r3).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t), true).forEach(function(r3) {
      _defineProperty(e, r3, t[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r3) {
      Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
    });
  }
  return e;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r2, e) {
  if (null == r2) return {};
  var t = {};
  for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r2[n];
  }
  return t;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r2, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r2) {
  for (var t = 0; t < r2.length; t++) {
    var o = r2[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r2, t) {
  return r2 && _defineProperties(e.prototype, r2), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

// node_modules/@babel/runtime/helpers/esm/callSuper.js
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r2) {
  if (Array.isArray(r2)) return r2;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r2, l) {
  var t = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r2)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r3) {
      o = true, n = r3;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r2, a) {
  (null == a || a > r2.length) && (a = r2.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r2[e];
  return n;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r2, a) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray(r2, a);
    var t = {}.toString.call(r2).slice(8, -1);
    return "Object" === t && r2.constructor && (t = r2.constructor.name), "Map" === t || "Set" === t ? Array.from(r2) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r2, a) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r2, e) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e) || _unsupportedIterableToArray(r2, e) || _nonIterableRest();
}

// node_modules/react-big-calendar/node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; ) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// node_modules/react-big-calendar/dist/react-big-calendar.esm.js
var import_react25 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/uncontrollable/lib/esm/hook.js
var import_react = __toESM(require_react());

// node_modules/uncontrollable/lib/esm/utils.js
var import_invariant = __toESM(require_browser());
var noop = function noop2() {
};
function readOnlyPropType(handler, name) {
  return function(props, propName) {
    if (props[propName] !== void 0) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}
function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes6 = {};
  Object.keys(controlledValues).forEach(function(prop) {
    propTypes6[defaultKey(prop)] = noop;
    if (true) {
      var handler = controlledValues[prop];
      !(typeof handler === "string" && handler.trim().length) ? true ? (0, import_invariant.default)(false, "Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable", displayName, prop) : (0, import_invariant.default)(false) : void 0;
      propTypes6[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes6;
}
function isProp(props, prop) {
  return props[prop] !== void 0;
}
function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function canAcceptRef(component) {
  return !!component && (typeof component !== "function" || component.prototype && component.prototype.isReactComponent);
}

// node_modules/uncontrollable/lib/esm/hook.js
function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0, import_react.useRef)(propValue !== void 0);
  var _useState = (0, import_react.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
  var isProp2 = propValue !== void 0;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp2;
  if (!isProp2 && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp2 ? propValue : stateValue, (0, import_react.useCallback)(function(value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/uncontrollable/lib/esm/uncontrollable.js
var import_react2 = __toESM(require_react());

// node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component2) {
  var prototype = Component2.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component2.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component2;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component2.displayName || Component2.name;
    var newApiName = typeof Component2.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
    );
  }
  if (typeof Component2.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component2;
}

// node_modules/uncontrollable/lib/esm/uncontrollable.js
var import_invariant2 = __toESM(require_browser());
var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function uncontrollable(Component2, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }
  var displayName = Component2.displayName || Component2.name || "Component";
  var canAcceptRef2 = canAcceptRef(Component2);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(defaultKey);
  !(canAcceptRef2 || !methods.length) ? true ? (0, import_invariant2.default)(false, "[uncontrollable] stateless function components cannot pass through methods because they have no associated instances. Check component: " + displayName + ", attempting to pass through methods: " + methods.join(", ")) : (0, import_invariant2.default)(false) : void 0;
  var UncontrolledComponent = function(_React$Component) {
    _inheritsLoose(UncontrolledComponent2, _React$Component);
    function UncontrolledComponent2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = /* @__PURE__ */ Object.create(null);
      controlledProps.forEach(function(propName) {
        var handlerName = controlledValues[propName];
        var handleChange = function handleChange2(value) {
          if (_this.props[handlerName]) {
            var _this$props;
            _this._notifying = true;
            for (var _len2 = arguments.length, args2 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args2[_key2 - 1] = arguments[_key2];
            }
            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args2));
            _this._notifying = false;
          }
          if (!_this.unmounted) _this.setState(function(_ref) {
            var _extends2;
            var values2 = _ref.values;
            return {
              values: _extends(/* @__PURE__ */ Object.create(null), values2, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };
        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function(ref) {
        _this.inner = ref;
      };
      var values = /* @__PURE__ */ Object.create(null);
      controlledProps.forEach(function(key) {
        values[key] = _this.props[defaultKey(key)];
      });
      _this.state = {
        values,
        prevProps: {}
      };
      return _this;
    }
    var _proto = UncontrolledComponent2.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      return !this._notifying;
    };
    UncontrolledComponent2.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values, prevProps = _ref2.prevProps;
      var nextState = {
        values: _extends(/* @__PURE__ */ Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function(key) {
        nextState.prevProps[key] = props[key];
        if (!isProp(props, key) && isProp(prevProps, key)) {
          nextState.values[key] = props[defaultKey(key)];
        }
      });
      return nextState;
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };
    _proto.render = function render() {
      var _this2 = this;
      var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = _objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);
      PROPS_TO_OMIT.forEach(function(prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function(propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== void 0 ? propValue : _this2.state.values[propName];
      });
      return import_react2.default.createElement(Component2, _extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };
    return UncontrolledComponent2;
  }(import_react2.default.Component);
  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends({
    innerRef: function innerRef() {
    }
  }, uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function(method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;
      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;
  if (import_react2.default.forwardRef) {
    WrappedComponent = import_react2.default.forwardRef(function(props, ref) {
      return import_react2.default.createElement(UncontrolledComponent, _extends({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }
  WrappedComponent.ControlledComponent = Component2;
  WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }
    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };
  return WrappedComponent;
}

// node_modules/react-big-calendar/dist/react-big-calendar.esm.js
var import_prop_types7 = __toESM(require_prop_types());
var import_invariant3 = __toESM(require_browser());

// node_modules/date-arithmetic/index.js
var date_arithmetic_exports = {};
__export(date_arithmetic_exports, {
  add: () => add,
  century: () => century,
  date: () => date,
  day: () => day,
  decade: () => decade,
  diff: () => diff,
  endOf: () => endOf,
  eq: () => eq,
  gt: () => gt,
  gte: () => gte,
  hours: () => hours,
  inRange: () => inRange,
  lt: () => lt,
  lte: () => lte,
  max: () => max,
  milliseconds: () => milliseconds,
  min: () => min,
  minutes: () => minutes,
  month: () => month,
  neq: () => neq,
  seconds: () => seconds,
  startOf: () => startOf,
  subtract: () => subtract,
  weekday: () => weekday,
  year: () => year
});
var MILI = "milliseconds";
var SECONDS = "seconds";
var MINUTES = "minutes";
var HOURS = "hours";
var DAY = "day";
var WEEK = "week";
var MONTH = "month";
var YEAR = "year";
var DECADE = "decade";
var CENTURY = "century";
var multiplierMilli = {
  "milliseconds": 1,
  "seconds": 1e3,
  "minutes": 60 * 1e3,
  "hours": 60 * 60 * 1e3,
  "day": 24 * 60 * 60 * 1e3,
  "week": 7 * 24 * 60 * 60 * 1e3
};
var multiplierMonth = {
  "month": 1,
  "year": 12,
  "decade": 10 * 12,
  "century": 100 * 12
};
function daysOf(year2) {
  return [31, daysInFeb(year2), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function daysInFeb(year2) {
  return year2 % 4 === 0 && year2 % 100 !== 0 || year2 % 400 === 0 ? 29 : 28;
}
function add(d, num, unit) {
  d = new Date(d);
  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      return addMillis(d, num * multiplierMilli[unit]);
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      return addMonths(d, num * multiplierMonth[unit]);
  }
  throw new TypeError('Invalid units: "' + unit + '"');
}
function addMillis(d, num) {
  var nextDate = new Date(+d + num);
  return solveDST(d, nextDate);
}
function addMonths(d, num) {
  var year2 = d.getFullYear(), month2 = d.getMonth(), day2 = d.getDate(), totalMonths = year2 * 12 + month2 + num, nextYear = Math.trunc(totalMonths / 12), nextMonth = totalMonths % 12, nextDay = Math.min(day2, daysOf(nextYear)[nextMonth]);
  var nextDate = new Date(d);
  nextDate.setFullYear(nextYear);
  nextDate.setDate(1);
  nextDate.setMonth(nextMonth);
  nextDate.setDate(nextDay);
  return nextDate;
}
function solveDST(currentDate, nextDate) {
  var currentOffset = currentDate.getTimezoneOffset(), nextOffset = nextDate.getTimezoneOffset();
  var diffMinutes = nextOffset - currentOffset;
  return new Date(+nextDate + diffMinutes * multiplierMilli["minutes"]);
}
function subtract(d, num, unit) {
  return add(d, -num, unit);
}
function startOf(d, unit, firstOfWeek) {
  d = new Date(d);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
      d = month(d, 0);
    case MONTH:
      d = date(d, 1);
    case WEEK:
    case DAY:
      d = hours(d, 0);
    case HOURS:
      d = minutes(d, 0);
    case MINUTES:
      d = seconds(d, 0);
    case SECONDS:
      d = milliseconds(d, 0);
  }
  if (unit === DECADE)
    d = subtract(d, year(d) % 10, "year");
  if (unit === CENTURY)
    d = subtract(d, year(d) % 100, "year");
  if (unit === WEEK)
    d = weekday(d, 0, firstOfWeek);
  return d;
}
function endOf(d, unit, firstOfWeek) {
  d = new Date(d);
  d = startOf(d, unit, firstOfWeek);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
    case MONTH:
    case WEEK:
      d = add(d, 1, unit);
      d = subtract(d, 1, DAY);
      d.setHours(23, 59, 59, 999);
      break;
    case DAY:
      d.setHours(23, 59, 59, 999);
      break;
    case HOURS:
    case MINUTES:
    case SECONDS:
      d = add(d, 1, unit);
      d = subtract(d, 1, MILI);
  }
  return d;
}
var eq = createComparer(function(a, b) {
  return a === b;
});
var neq = createComparer(function(a, b) {
  return a !== b;
});
var gt = createComparer(function(a, b) {
  return a > b;
});
var gte = createComparer(function(a, b) {
  return a >= b;
});
var lt = createComparer(function(a, b) {
  return a < b;
});
var lte = createComparer(function(a, b) {
  return a <= b;
});
function min() {
  return new Date(Math.min.apply(Math, arguments));
}
function max() {
  return new Date(Math.max.apply(Math, arguments));
}
function inRange(day2, min3, max3, unit) {
  unit = unit || "day";
  return (!min3 || gte(day2, min3, unit)) && (!max3 || lte(day2, max3, unit));
}
var milliseconds = createAccessor("Milliseconds");
var seconds = createAccessor("Seconds");
var minutes = createAccessor("Minutes");
var hours = createAccessor("Hours");
var day = createAccessor("Day");
var date = createAccessor("Date");
var month = createAccessor("Month");
var year = createAccessor("FullYear");
function decade(d, val) {
  return val === void 0 ? year(startOf(d, DECADE)) : add(d, val + 10, YEAR);
}
function century(d, val) {
  return val === void 0 ? year(startOf(d, CENTURY)) : add(d, val + 100, YEAR);
}
function weekday(d, val, firstDay) {
  var w = (day(d) + 7 - (firstDay || 0)) % 7;
  return val === void 0 ? w : add(d, val - w, DAY);
}
function diff(date1, date2, unit, asFloat) {
  var dividend, divisor, result;
  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      dividend = date2.getTime() - date1.getTime();
      break;
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      dividend = (year(date2) - year(date1)) * 12 + month(date2) - month(date1);
      break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }
  switch (unit) {
    case MILI:
      divisor = 1;
      break;
    case SECONDS:
      divisor = 1e3;
      break;
    case MINUTES:
      divisor = 1e3 * 60;
      break;
    case HOURS:
      divisor = 1e3 * 60 * 60;
      break;
    case DAY:
      divisor = 1e3 * 60 * 60 * 24;
      break;
    case WEEK:
      divisor = 1e3 * 60 * 60 * 24 * 7;
      break;
    case MONTH:
      divisor = 1;
      break;
    case YEAR:
      divisor = 12;
      break;
    case DECADE:
      divisor = 120;
      break;
    case CENTURY:
      divisor = 1200;
      break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }
  result = dividend / divisor;
  return asFloat ? result : Math.round(result);
}
function createAccessor(method) {
  var hourLength = function(method2) {
    switch (method2) {
      case "Milliseconds":
        return 36e5;
      case "Seconds":
        return 3600;
      case "Minutes":
        return 60;
      case "Hours":
        return 1;
      default:
        return null;
    }
  }(method);
  return function(d, val) {
    if (val === void 0)
      return d["get" + method]();
    var dateOut = new Date(d);
    dateOut["set" + method](val);
    if (hourLength && dateOut["get" + method]() != val && (method === "Hours" || val >= hourLength && dateOut.getHours() - d.getHours() < Math.floor(val / hourLength))) {
      dateOut["set" + method](val + hourLength);
    }
    return dateOut;
  };
}
function createComparer(operator) {
  return function(a, b, unit) {
    return operator(+startOf(a, unit), +startOf(b, unit));
  };
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray(r2);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}

// node_modules/react-big-calendar/dist/react-big-calendar.esm.js
var import_chunk = __toESM(require_chunk());

// node_modules/dom-helpers/esm/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// node_modules/dom-helpers/esm/ownerWindow.js
function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

// node_modules/dom-helpers/esm/getComputedStyle.js
function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

// node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, "-$1").toLowerCase();
}

// node_modules/dom-helpers/esm/hyphenateStyle.js
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
}

// node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

// node_modules/dom-helpers/esm/css.js
function style(node, property) {
  var css = "";
  var transforms = "";
  if (typeof property === "string") {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach(function(key) {
    var value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css;
}
var css_default = style;

// node_modules/dom-helpers/esm/contains.js
function contains(context, node) {
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

// node_modules/dom-helpers/esm/isDocument.js
function isDocument(element) {
  return "nodeType" in element && element.nodeType === document.DOCUMENT_NODE;
}

// node_modules/dom-helpers/esm/isWindow.js
function isWindow(node) {
  if ("window" in node && node.window === node) return node;
  if (isDocument(node)) return node.defaultView || false;
  return false;
}

// node_modules/dom-helpers/esm/getScrollAccessor.js
function getscrollAccessor(offset3) {
  var prop = offset3 === "pageXOffset" ? "scrollLeft" : "scrollTop";
  function scrollAccessor(node, val) {
    var win = isWindow(node);
    if (val === void 0) {
      return win ? win[offset3] : node[prop];
    }
    if (win) {
      win.scrollTo(win[offset3], val);
    } else {
      node[prop] = val;
    }
  }
  return scrollAccessor;
}

// node_modules/dom-helpers/esm/scrollLeft.js
var scrollLeft_default = getscrollAccessor("pageXOffset");

// node_modules/dom-helpers/esm/scrollTop.js
var scrollTop_default = getscrollAccessor("pageYOffset");

// node_modules/dom-helpers/esm/offset.js
function offset(node) {
  var doc = ownerDocument(node);
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement;
  if (!docElem || !contains(docElem, node)) return box;
  if (node.getBoundingClientRect !== void 0) box = node.getBoundingClientRect();
  box = {
    top: box.top + scrollTop_default(docElem) - (docElem.clientTop || 0),
    left: box.left + scrollLeft_default(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}

// node_modules/dom-helpers/esm/offsetParent.js
var isHTMLElement = function isHTMLElement2(e) {
  return !!e && "offsetParent" in e;
};
function offsetParent(node) {
  var doc = ownerDocument(node);
  var parent = node && node.offsetParent;
  while (isHTMLElement(parent) && parent.nodeName !== "HTML" && css_default(parent, "position") === "static") {
    parent = parent.offsetParent;
  }
  return parent || doc.documentElement;
}

// node_modules/dom-helpers/esm/position.js
var nodeName = function nodeName2(node) {
  return node.nodeName && node.nodeName.toLowerCase();
};
function position(node, offsetParent2) {
  var parentOffset = {
    top: 0,
    left: 0
  };
  var offset3;
  if (css_default(node, "position") === "fixed") {
    offset3 = node.getBoundingClientRect();
  } else {
    var parent = offsetParent2 || offsetParent(node);
    offset3 = offset(node);
    if (nodeName(parent) !== "html") parentOffset = offset(parent);
    var borderTop = String(css_default(parent, "borderTopWidth") || 0);
    parentOffset.top += parseInt(borderTop, 10) - scrollTop_default(parent) || 0;
    var borderLeft = String(css_default(parent, "borderLeftWidth") || 0);
    parentOffset.left += parseInt(borderLeft, 10) - scrollLeft_default(parent) || 0;
  }
  var marginTop = String(css_default(node, "marginTop") || 0);
  var marginLeft = String(css_default(node, "marginLeft") || 0);
  return _extends({}, offset3, {
    top: offset3.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset3.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  });
}

// node_modules/dom-helpers/esm/canUseDOM.js
var canUseDOM_default = !!(typeof window !== "undefined" && window.document && window.document.createElement);

// node_modules/dom-helpers/esm/animationFrame.js
var prev = (/* @__PURE__ */ new Date()).getTime();
function fallback(fn3) {
  var curr = (/* @__PURE__ */ new Date()).getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var handle = setTimeout(fn3, ms);
  prev = curr;
  return handle;
}
var vendors = ["", "webkit", "moz", "o", "ms"];
var cancelMethod = "clearTimeout";
var rafImpl = fallback;
var getKey = function getKey2(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + "AnimationFrame";
};
if (canUseDOM_default) {
  vendors.some(function(vendor) {
    var rafMethod = getKey(vendor, "request");
    if (rafMethod in window) {
      cancelMethod = getKey(vendor, "cancel");
      rafImpl = function rafImpl2(cb) {
        return window[rafMethod](cb);
      };
    }
    return !!rafImpl;
  });
}
var cancel = function cancel2(id) {
  if (typeof window[cancelMethod] === "function") window[cancelMethod](id);
};
var request = rafImpl;

// node_modules/dom-helpers/esm/matches.js
var matchesImpl;
function matches(node, selector) {
  if (!matchesImpl) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
    matchesImpl = function matchesImpl2(n, s) {
      return nativeMatch.call(n, s);
    };
  }
  return matchesImpl(node, selector);
}

// node_modules/dom-helpers/esm/querySelectorAll.js
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

// node_modules/dom-helpers/esm/addEventListener.js
var optionsSupported = false;
var onceSupported = false;
try {
  options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM_default) {
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, true);
  }
} catch (e) {
}
var options;
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== "boolean" && !onceSupported) {
    var once = options.once, capture = options.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
var addEventListener_default = addEventListener;

// node_modules/react-overlays/esm/Dropdown.js
var import_react17 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@restart/hooks/esm/usePrevious.js
var import_react3 = __toESM(require_react());
function usePrevious(value) {
  const ref = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}

// node_modules/@restart/hooks/esm/useForceUpdate.js
var import_react4 = __toESM(require_react());
function useForceUpdate() {
  const [, dispatch] = (0, import_react4.useReducer)((state) => !state, false);
  return dispatch;
}

// node_modules/@restart/hooks/esm/useEventListener.js
var import_react7 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useEventCallback.js
var import_react6 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useCommittedRef.js
var import_react5 = __toESM(require_react());
function useCommittedRef(value) {
  const ref = (0, import_react5.useRef)(value);
  (0, import_react5.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
var useCommittedRef_default = useCommittedRef;

// node_modules/@restart/hooks/esm/useEventCallback.js
function useEventCallback(fn3) {
  const ref = useCommittedRef_default(fn3);
  return (0, import_react6.useCallback)(function(...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}

// node_modules/@restart/hooks/esm/useEventListener.js
function useEventListener(eventTarget, event, listener, capture = false) {
  const handler = useEventCallback(listener);
  (0, import_react7.useEffect)(() => {
    const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return () => target.removeEventListener(event, handler, capture);
  }, [eventTarget]);
}

// node_modules/@restart/hooks/esm/useGlobalListener.js
var import_react8 = __toESM(require_react());
function useGlobalListener(event, handler, capture = false) {
  const documentTarget = (0, import_react8.useCallback)(() => document, []);
  return useEventListener(documentTarget, event, handler, capture);
}

// node_modules/react-overlays/esm/DropdownContext.js
var import_react9 = __toESM(require_react());
var DropdownContext = import_react9.default.createContext(null);
var DropdownContext_default = DropdownContext;

// node_modules/react-overlays/esm/DropdownMenu.js
var import_prop_types = __toESM(require_prop_types());
var import_react15 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useCallbackRef.js
var import_react10 = __toESM(require_react());
function useCallbackRef() {
  return (0, import_react10.useState)(null);
}

// node_modules/react-overlays/esm/usePopper.js
var import_react13 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useSafeState.js
var import_react12 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMounted.js
var import_react11 = __toESM(require_react());
function useMounted() {
  const mounted = (0, import_react11.useRef)(true);
  const isMounted = (0, import_react11.useRef)(() => mounted.current);
  (0, import_react11.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

// node_modules/@restart/hooks/esm/useSafeState.js
function useSafeState(state) {
  const isMounted = useMounted();
  return [state[0], (0, import_react12.useCallback)((nextState) => {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
var useSafeState_default = useSafeState;

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument2 = node.ownerDocument;
    return ownerDocument2 ? ownerDocument2.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement3(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/utils/math.js
var max2 = Math.max;
var min2 = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement3(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height2 = clientRect.height / scaleY;
  return {
    width,
    height: height2,
    top: y,
    right: x + width,
    bottom: y + height2,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height2 = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height2) <= 1) {
    height2 = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height: height2
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains2(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement3(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement3(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement3(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent2 = getTrueOffsetParent(element);
  while (offsetParent2 && isTableElement(offsetParent2) && getComputedStyle2(offsetParent2).position === "static") {
    offsetParent2 = getTrueOffsetParent(offsetParent2);
  }
  if (offsetParent2 && (getNodeName(offsetParent2) === "html" || getNodeName(offsetParent2) === "body" && getComputedStyle2(offsetParent2).position === "static")) {
    return window2;
  }
  return offsetParent2 || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min3, value, max3) {
  return max2(min3, min2(value, max3));
}
function withinMaxClamp(min3, value, max3) {
  var v = within(min3, value, max3);
  return v > max3 ? max3 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min3 = paddingObject[minProp];
  var max3 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset3 = within(min3, center, max3);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset3, _state$modifiersData$.centerOffset = offset3 - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains2(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent2 = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent2 === getWindow(popper2)) {
      offsetParent2 = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent2).position !== "static" && position2 === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent2 = offsetParent2;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent2 === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent2[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent2 === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent2[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position2
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect2(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect2,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height2 = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height2 = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height: height2,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max2(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height2 = max2(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max2(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height: height2,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement3(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody2 = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody2 ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody2 ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement3(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains2(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset3 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset3[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset3) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset3 === "function" ? offset3(Object.assign({}, rects, {
    placement
  })) : offset3, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset2(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset3 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset3);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset2
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset3 = popperOffsets2[mainAxis];
    var min3 = offset3 + overflow[mainSide];
    var max3 = offset3 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset3 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset3 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min2(min3, tetherMin) : min3, offset3, tether ? max2(max3, tetherMax) : max3);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset3;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement3(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent2, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement3(offsetParent2);
  var offsetParentIsScaled = isHTMLElement3(offsetParent2) && isElementScaled(offsetParent2);
  var documentElement = getDocumentElement(offsetParent2);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent2) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent2);
    }
    if (isHTMLElement3(offsetParent2)) {
      offsets = getBoundingClientRect(offsetParent2, true);
      offsets.x += offsetParent2.clientLeft;
      offsets.y += offsetParent2.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper3(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/react-overlays/esm/popper.js
var createPopper2 = popperGenerator({
  defaultModifiers: [hide_default, popperOffsets_default, computeStyles_default, eventListeners_default, offset_default, flip_default, preventOverflow_default, arrow_default]
});

// node_modules/react-overlays/esm/usePopper.js
var initialPopperStyles = function initialPopperStyles2(position2) {
  return {
    position: position2,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
};
var disabledApplyStylesModifier = {
  name: "applyStyles",
  enabled: false
};
var ariaDescribedByModifier = {
  name: "ariaDescribedBy",
  enabled: true,
  phase: "afterWrite",
  effect: function effect3(_ref) {
    var state = _ref.state;
    return function() {
      var _state$elements = state.elements, reference2 = _state$elements.reference, popper2 = _state$elements.popper;
      if ("removeAttribute" in reference2) {
        var ids = (reference2.getAttribute("aria-describedby") || "").split(",").filter(function(id) {
          return id.trim() !== popper2.id;
        });
        if (!ids.length) reference2.removeAttribute("aria-describedby");
        else reference2.setAttribute("aria-describedby", ids.join(","));
      }
    };
  },
  fn: function fn2(_ref2) {
    var _popper$getAttribute;
    var state = _ref2.state;
    var _state$elements2 = state.elements, popper2 = _state$elements2.popper, reference2 = _state$elements2.reference;
    var role = (_popper$getAttribute = popper2.getAttribute("role")) == null ? void 0 : _popper$getAttribute.toLowerCase();
    if (popper2.id && role === "tooltip" && "setAttribute" in reference2) {
      var ids = reference2.getAttribute("aria-describedby");
      if (ids && ids.split(",").indexOf(popper2.id) !== -1) {
        return;
      }
      reference2.setAttribute("aria-describedby", ids ? ids + "," + popper2.id : popper2.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
function usePopper(referenceElement, popperElement, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp, _ref3$enabled = _ref3.enabled, enabled = _ref3$enabled === void 0 ? true : _ref3$enabled, _ref3$placement = _ref3.placement, placement = _ref3$placement === void 0 ? "bottom" : _ref3$placement, _ref3$strategy = _ref3.strategy, strategy = _ref3$strategy === void 0 ? "absolute" : _ref3$strategy, _ref3$modifiers = _ref3.modifiers, modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers, config = _objectWithoutPropertiesLoose(_ref3, ["enabled", "placement", "strategy", "modifiers"]);
  var popperInstanceRef = (0, import_react13.useRef)();
  var update = (0, import_react13.useCallback)(function() {
    var _popperInstanceRef$cu;
    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  var forceUpdate = (0, import_react13.useCallback)(function() {
    var _popperInstanceRef$cu2;
    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  var _useSafeState = useSafeState_default((0, import_react13.useState)({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: initialPopperStyles(strategy),
      arrow: {}
    }
  })), popperState = _useSafeState[0], setState = _useSafeState[1];
  var updateModifier = (0, import_react13.useMemo)(function() {
    return {
      name: "updateStateModifier",
      enabled: true,
      phase: "write",
      requires: ["computeStyles"],
      fn: function fn3(_ref4) {
        var state = _ref4.state;
        var styles = {};
        var attributes = {};
        Object.keys(state.elements).forEach(function(element) {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state,
          styles,
          attributes,
          update,
          forceUpdate,
          placement: state.placement
        });
      }
    };
  }, [update, forceUpdate, setState]);
  (0, import_react13.useEffect)(function() {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [].concat(modifiers, [updateModifier, disabledApplyStylesModifier])
    });
  }, [strategy, placement, updateModifier, enabled]);
  (0, import_react13.useEffect)(function() {
    if (!enabled || referenceElement == null || popperElement == null) {
      return void 0;
    }
    popperInstanceRef.current = createPopper2(referenceElement, popperElement, _extends({}, config, {
      placement,
      strategy,
      modifiers: [].concat(modifiers, [ariaDescribedByModifier, updateModifier])
    }));
    return function() {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = void 0;
        setState(function(s) {
          return _extends({}, s, {
            attributes: {},
            styles: {
              popper: initialPopperStyles(strategy)
            }
          });
        });
      }
    };
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}
var usePopper_default = usePopper;

// node_modules/dom-helpers/esm/removeEventListener.js
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== "boolean" ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
var removeEventListener_default = removeEventListener;

// node_modules/dom-helpers/esm/listen.js
function listen(node, eventName, handler, options) {
  addEventListener_default(node, eventName, handler, options);
  return function() {
    removeEventListener_default(node, eventName, handler, options);
  };
}
var listen_default = listen;

// node_modules/react-overlays/esm/useRootClose.js
var import_react14 = __toESM(require_react());
var import_warning = __toESM(require_warning());

// node_modules/react-overlays/esm/safeFindDOMNode.js
var import_react_dom = __toESM(require_react_dom());
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && "setState" in componentOrElement) {
    return import_react_dom.default.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}

// node_modules/react-overlays/esm/ownerDocument.js
var ownerDocument_default = function(componentOrElement) {
  return ownerDocument(safeFindDOMNode(componentOrElement));
};

// node_modules/react-overlays/esm/useRootClose.js
var escapeKeyCode = 27;
var noop3 = function noop4() {
};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = function getRefTarget2(ref) {
  return ref && ("current" in ref ? ref.current : ref);
};
function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, disabled = _ref.disabled, _ref$clickTrigger = _ref.clickTrigger, clickTrigger = _ref$clickTrigger === void 0 ? "click" : _ref$clickTrigger;
  var preventMouseRootCloseRef = (0, import_react14.useRef)(false);
  var onClose = onRootClose || noop3;
  var handleMouseCapture = (0, import_react14.useCallback)(function(e) {
    var _e$composedPath$;
    var currentTarget = getRefTarget(ref);
    (0, import_warning.default)(!!currentTarget, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node");
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains(currentTarget, (_e$composedPath$ = e.composedPath == null ? void 0 : e.composedPath()[0]) != null ? _e$composedPath$ : e.target);
  }, [ref]);
  var handleMouse = useEventCallback(function(e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = useEventCallback(function(e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  (0, import_react14.useEffect)(function() {
    if (disabled || ref == null) return void 0;
    var currentEvent = window.event;
    var doc = ownerDocument_default(getRefTarget(ref));
    var removeMouseCaptureListener = listen_default(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = listen_default(doc, clickTrigger, function(e) {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleMouse(e);
    });
    var removeKeyupListener = listen_default(doc, "keyup", function(e) {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleKeyUp(e);
    });
    var mobileSafariHackListeners = [];
    if ("ontouchstart" in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function(el) {
        return listen_default(el, "mousemove", noop3);
      });
    }
    return function() {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function(remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}
var useRootClose_default = useRootClose;

// node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js
function toModifierMap(modifiers) {
  var result = {};
  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  }
  modifiers == null ? void 0 : modifiers.forEach(function(m) {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(function(k) {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig(_ref) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
  var enabled = _ref.enabled, enableEvents = _ref.enableEvents, placement = _ref.placement, flip2 = _ref.flip, offset3 = _ref.offset, fixed = _ref.fixed, containerPadding = _ref.containerPadding, arrowElement = _ref.arrowElement, _ref$popperConfig = _ref.popperConfig, popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
  var modifiers = toModifierMap(popperConfig.modifiers);
  return _extends({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? "fixed" : popperConfig.strategy,
    modifiers: toModifierArray(_extends({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: _extends({}, modifiers.preventOverflow, {
        options: containerPadding ? _extends({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: _extends({
          offset: offset3
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: _extends({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: _extends({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: _extends({
        enabled: !!flip2
      }, modifiers.flip)
    }))
  });
}

// node_modules/react-overlays/esm/DropdownMenu.js
var noop5 = function noop6() {
};
function useDropdownMenu(options) {
  if (options === void 0) {
    options = {};
  }
  var context = (0, import_react15.useContext)(DropdownContext_default);
  var _useCallbackRef = useCallbackRef(), arrowElement = _useCallbackRef[0], attachArrowRef = _useCallbackRef[1];
  var hasShownRef = (0, import_react15.useRef)(false);
  var _options = options, flip2 = _options.flip, offset3 = _options.offset, rootCloseEvent = _options.rootCloseEvent, _options$fixed = _options.fixed, fixed = _options$fixed === void 0 ? false : _options$fixed, _options$popperConfig = _options.popperConfig, popperConfig = _options$popperConfig === void 0 ? {} : _options$popperConfig, _options$usePopper = _options.usePopper, shouldUsePopper = _options$usePopper === void 0 ? !!context : _options$usePopper;
  var show = (context == null ? void 0 : context.show) == null ? !!options.show : context.show;
  var alignEnd = (context == null ? void 0 : context.alignEnd) == null ? options.alignEnd : context.alignEnd;
  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }
  var handleClose = function handleClose2(e) {
    context == null ? void 0 : context.toggle(false, e);
  };
  var _ref = context || {}, drop = _ref.drop, setMenu = _ref.setMenu, menuElement = _ref.menuElement, toggleElement = _ref.toggleElement;
  var placement = alignEnd ? "bottom-end" : "bottom-start";
  if (drop === "up") placement = alignEnd ? "top-end" : "top-start";
  else if (drop === "right") placement = alignEnd ? "right-end" : "right-start";
  else if (drop === "left") placement = alignEnd ? "left-end" : "left-start";
  var popper2 = usePopper_default(toggleElement, menuElement, mergeOptionsWithPopperConfig({
    placement,
    enabled: !!(shouldUsePopper && show),
    enableEvents: show,
    offset: offset3,
    flip: flip2,
    fixed,
    arrowElement,
    popperConfig
  }));
  var menuProps = _extends({
    ref: setMenu || noop5,
    "aria-labelledby": toggleElement == null ? void 0 : toggleElement.id
  }, popper2.attributes.popper, {
    style: popper2.styles.popper
  });
  var metadata = {
    show,
    alignEnd,
    hasShown: hasShownRef.current,
    toggle: context == null ? void 0 : context.toggle,
    popper: shouldUsePopper ? popper2 : null,
    arrowProps: shouldUsePopper ? _extends({
      ref: attachArrowRef
    }, popper2.attributes.arrow, {
      style: popper2.styles.arrow
    }) : {}
  };
  useRootClose_default(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
var propTypes = {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   alignEnd: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: import_prop_types.default.func.isRequired,
  /**
   * Controls the visible state of the menu, generally this is
   * provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  show: import_prop_types.default.bool,
  /**
   * Aligns the dropdown menu to the 'end' of it's placement position.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  alignEnd: import_prop_types.default.bool,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: import_prop_types.default.bool,
  usePopper: import_prop_types.default.oneOf([true, false]),
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: import_prop_types.default.object,
  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent: import_prop_types.default.string
};
var defaultProps = {
  usePopper: true
};
function DropdownMenu(_ref2) {
  var children = _ref2.children, options = _objectWithoutPropertiesLoose(_ref2, ["children"]);
  var _useDropdownMenu = useDropdownMenu(options), props = _useDropdownMenu[0], meta = _useDropdownMenu[1];
  return import_react15.default.createElement(import_react15.default.Fragment, null, meta.hasShown ? children(props, meta) : null);
}
DropdownMenu.displayName = "ReactOverlaysDropdownMenu";
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
var DropdownMenu_default = DropdownMenu;

// node_modules/react-overlays/esm/DropdownToggle.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react16 = __toESM(require_react());
var noop7 = function noop8() {
};
function useDropdownToggle() {
  var _ref = (0, import_react16.useContext)(DropdownContext_default) || {}, _ref$show = _ref.show, show = _ref$show === void 0 ? false : _ref$show, _ref$toggle = _ref.toggle, toggle = _ref$toggle === void 0 ? noop7 : _ref$toggle, setToggle = _ref.setToggle;
  var handleClick = (0, import_react16.useCallback)(function(e) {
    toggle(!show, e);
  }, [show, toggle]);
  return [{
    ref: setToggle || noop7,
    onClick: handleClick,
    "aria-haspopup": true,
    "aria-expanded": !!show
  }, {
    show,
    toggle
  }];
}
var propTypes2 = {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   show: boolean,
   *   toggle: (show: boolean) => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   * }) => React.Element}
   */
  children: import_prop_types2.default.func.isRequired
};
function DropdownToggle(_ref2) {
  var children = _ref2.children;
  var _useDropdownToggle = useDropdownToggle(), props = _useDropdownToggle[0], meta = _useDropdownToggle[1];
  return import_react16.default.createElement(import_react16.default.Fragment, null, children(props, meta));
}
DropdownToggle.displayName = "ReactOverlaysDropdownToggle";
DropdownToggle.propTypes = propTypes2;
var DropdownToggle_default = DropdownToggle;

// node_modules/react-overlays/esm/Dropdown.js
var propTypes3 = {
  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => React.Element}
   */
  children: import_prop_types3.default.node,
  /**
   * Determines the direction and location of the Menu in relation to it's Toggle.
   */
  drop: import_prop_types3.default.oneOf(["up", "left", "right", "down"]),
  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow: import_prop_types3.default.oneOf([false, true, "keyboard"]),
  /**
   * A css slector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector: import_prop_types3.default.string,
  /**
   * Align the menu to the 'end' side of the placement side of the Dropdown toggle. The default placement is `top-start` or `bottom-start`.
   */
  alignEnd: import_prop_types3.default.bool,
  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show: import_prop_types3.default.bool,
  /**
   * Sets the initial show position of the Dropdown.
   */
  defaultShow: import_prop_types3.default.bool,
  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```ts static
   * function(
   *   isOpen: boolean,
   *   event: SyntheticEvent,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle: import_prop_types3.default.func
};
function useRefWithUpdate() {
  var forceUpdate = useForceUpdate();
  var ref = (0, import_react17.useRef)(null);
  var attachRef = (0, import_react17.useCallback)(function(element) {
    ref.current = element;
    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
function Dropdown(_ref) {
  var drop = _ref.drop, alignEnd = _ref.alignEnd, defaultShow = _ref.defaultShow, rawShow = _ref.show, rawOnToggle = _ref.onToggle, _ref$itemSelector = _ref.itemSelector, itemSelector = _ref$itemSelector === void 0 ? "* > *" : _ref$itemSelector, focusFirstItemOnShow = _ref.focusFirstItemOnShow, children = _ref.children;
  var _useUncontrolledProp = useUncontrolledProp(rawShow, defaultShow, rawOnToggle), show = _useUncontrolledProp[0], onToggle = _useUncontrolledProp[1];
  var _useRefWithUpdate = useRefWithUpdate(), menuRef = _useRefWithUpdate[0], setMenu = _useRefWithUpdate[1];
  var menuElement = menuRef.current;
  var _useRefWithUpdate2 = useRefWithUpdate(), toggleRef = _useRefWithUpdate2[0], setToggle = _useRefWithUpdate2[1];
  var toggleElement = toggleRef.current;
  var lastShow = usePrevious(show);
  var lastSourceEvent = (0, import_react17.useRef)(null);
  var focusInDropdown = (0, import_react17.useRef)(false);
  var toggle = (0, import_react17.useCallback)(function(nextShow, event) {
    onToggle(nextShow, event);
  }, [onToggle]);
  var context = (0, import_react17.useMemo)(function() {
    return {
      toggle,
      drop,
      show,
      alignEnd,
      menuElement,
      toggleElement,
      setMenu,
      setToggle
    };
  }, [toggle, drop, show, alignEnd, menuElement, toggleElement, setMenu, setToggle]);
  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(document.activeElement);
  }
  var focusToggle = useEventCallback(function() {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  var maybeFocusFirst = useEventCallback(function() {
    var type = lastSourceEvent.current;
    var focusType = focusFirstItemOnShow;
    if (focusType == null) {
      focusType = menuRef.current && matches(menuRef.current, "[role=menu]") ? "keyboard" : false;
    }
    if (focusType === false || focusType === "keyboard" && !/^key.+$/.test(type)) {
      return;
    }
    var first = qsa(menuRef.current, itemSelector)[0];
    if (first && first.focus) first.focus();
  });
  (0, import_react17.useEffect)(function() {
    if (show) maybeFocusFirst();
    else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    }
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  (0, import_react17.useEffect)(function() {
    lastSourceEvent.current = null;
  });
  var getNextFocusedChild = function getNextFocusedChild2(current, offset3) {
    if (!menuRef.current) return null;
    var items = qsa(menuRef.current, itemSelector);
    var index = items.indexOf(current) + offset3;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };
  useGlobalListener("keydown", function(event) {
    var _menuRef$current, _toggleRef$current;
    var key = event.key;
    var target = event.target;
    var fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    var fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target);
    var isInput = /input|textarea/i.test(target.tagName);
    if (isInput && (key === " " || key !== "Escape" && fromMenu)) {
      return;
    }
    if (!fromMenu && !fromToggle) {
      return;
    }
    if (!menuRef.current && key === "Tab") {
      return;
    }
    lastSourceEvent.current = event.type;
    switch (key) {
      case "ArrowUp": {
        var next = getNextFocusedChild(target, -1);
        if (next && next.focus) next.focus();
        event.preventDefault();
        return;
      }
      case "ArrowDown":
        event.preventDefault();
        if (!show) {
          onToggle(true, event);
        } else {
          var _next = getNextFocusedChild(target, 1);
          if (_next && _next.focus) _next.focus();
        }
        return;
      case "Tab":
        addEventListener_default(document, "keyup", function(e) {
          var _menuRef$current2;
          if (e.key === "Tab" && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, event);
          }
        }, {
          once: true
        });
        break;
      case "Escape":
        event.preventDefault();
        event.stopPropagation();
        onToggle(false, event);
        break;
      default:
    }
  });
  return import_react17.default.createElement(DropdownContext_default.Provider, {
    value: context
  }, children);
}
Dropdown.displayName = "ReactOverlaysDropdown";
Dropdown.propTypes = propTypes3;
Dropdown.Menu = DropdownMenu_default;
Dropdown.Toggle = DropdownToggle_default;

// node_modules/dom-helpers/esm/activeElement.js
function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument();
  }
  try {
    var active = doc.activeElement;
    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    return doc.body;
  }
}

// node_modules/react-overlays/esm/Modal.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react21 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/@restart/hooks/esm/useUpdatedRef.js
var import_react18 = __toESM(require_react());
function useUpdatedRef(value) {
  const valueRef = (0, import_react18.useRef)(value);
  valueRef.current = value;
  return valueRef;
}

// node_modules/@restart/hooks/esm/useWillUnmount.js
var import_react19 = __toESM(require_react());
function useWillUnmount(fn3) {
  const onUnmount = useUpdatedRef(fn3);
  (0, import_react19.useEffect)(() => () => onUnmount.current(), []);
}

// node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
  else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/dom-helpers/esm/scrollbarSize.js
var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM_default) {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}

// node_modules/react-overlays/esm/isOverflowing.js
function isBody(node) {
  return node && node.tagName.toLowerCase() === "body";
}
function bodyIsOverflowing(node) {
  var doc = isWindow(node) ? ownerDocument() : ownerDocument(node);
  var win = isWindow(node) || doc.defaultView;
  return doc.body.clientWidth < win.innerWidth;
}
function isOverflowing(container) {
  var win = isWindow(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}

// node_modules/react-overlays/esm/manageAriaHidden.js
var BLACKLIST = ["template", "script", "style"];
var isHidable = function isHidable2(_ref) {
  var nodeType = _ref.nodeType, tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};
var siblings = function siblings2(container, exclude, cb) {
  [].forEach.call(container.children, function(node) {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};
function ariaHidden(hide2, node) {
  if (!node) return;
  if (hide2) {
    node.setAttribute("aria-hidden", "true");
  } else {
    node.removeAttribute("aria-hidden");
  }
}
function hideSiblings(container, _ref2) {
  var dialog = _ref2.dialog, backdrop = _ref2.backdrop;
  siblings(container, [dialog, backdrop], function(node) {
    return ariaHidden(true, node);
  });
}
function showSiblings(container, _ref3) {
  var dialog = _ref3.dialog, backdrop = _ref3.backdrop;
  siblings(container, [dialog, backdrop], function(node) {
    return ariaHidden(false, node);
  });
}

// node_modules/react-overlays/esm/ModalManager.js
function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function(d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
    return false;
  });
  return idx;
}
var ModalManager = function() {
  function ModalManager2(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$hideSiblingNodes = _ref.hideSiblingNodes, hideSiblingNodes = _ref$hideSiblingNodes === void 0 ? true : _ref$hideSiblingNodes, _ref$handleContainerO = _ref.handleContainerOverflow, handleContainerOverflow = _ref$handleContainerO === void 0 ? true : _ref$handleContainerO;
    this.hideSiblingNodes = void 0;
    this.handleContainerOverflow = void 0;
    this.modals = void 0;
    this.containers = void 0;
    this.data = void 0;
    this.scrollbarSize = void 0;
    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.scrollbarSize = scrollbarSize();
  }
  var _proto = ModalManager2.prototype;
  _proto.isContainerOverflowing = function isContainerOverflowing(modal) {
    var data = this.data[this.containerIndexFromModal(modal)];
    return data && data.overflowing;
  };
  _proto.containerIndexFromModal = function containerIndexFromModal(modal) {
    return findIndexOf(this.data, function(d) {
      return d.modals.indexOf(modal) !== -1;
    });
  };
  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var style2 = {
      overflow: "hidden"
    };
    containerState.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight
    };
    if (containerState.overflowing) {
      style2.paddingRight = parseInt(css_default(container, "paddingRight") || "0", 10) + this.scrollbarSize + "px";
    }
    css_default(container, style2);
  };
  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    Object.assign(container.style, containerState.style);
  };
  _proto.add = function add2(modal, container, className) {
    var modalIdx = this.modals.indexOf(modal);
    var containerIdx = this.containers.indexOf(container);
    if (modalIdx !== -1) {
      return modalIdx;
    }
    modalIdx = this.modals.length;
    this.modals.push(modal);
    if (this.hideSiblingNodes) {
      hideSiblings(container, modal);
    }
    if (containerIdx !== -1) {
      this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }
    var data = {
      modals: [modal],
      // right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: isOverflowing(container)
    };
    if (this.handleContainerOverflow) {
      this.setContainerStyle(data, container);
    }
    data.classes.forEach(addClass.bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIdx;
  };
  _proto.remove = function remove(modal) {
    var modalIdx = this.modals.indexOf(modal);
    if (modalIdx === -1) {
      return;
    }
    var containerIdx = this.containerIndexFromModal(modal);
    var data = this.data[containerIdx];
    var container = this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIdx, 1);
    if (data.modals.length === 0) {
      data.classes.forEach(removeClass.bind(null, container));
      if (this.handleContainerOverflow) {
        this.removeContainerStyle(data, container);
      }
      if (this.hideSiblingNodes) {
        showSiblings(container, modal);
      }
      this.containers.splice(containerIdx, 1);
      this.data.splice(containerIdx, 1);
    } else if (this.hideSiblingNodes) {
      var _data$modals = data.modals[data.modals.length - 1], backdrop = _data$modals.backdrop, dialog = _data$modals.dialog;
      ariaHidden(false, dialog);
      ariaHidden(false, backdrop);
    }
  };
  _proto.isTopModal = function isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  };
  return ModalManager2;
}();
var ModalManager_default = ModalManager;

// node_modules/react-overlays/esm/useWaitForDOMRef.js
var import_react20 = __toESM(require_react());
var resolveContainerRef = function resolveContainerRef2(ref) {
  var _ref;
  if (typeof document === "undefined") return null;
  if (ref == null) return ownerDocument().body;
  if (typeof ref === "function") ref = ref();
  if (ref && "current" in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = (0, import_react20.useState)(function() {
    return resolveContainerRef(ref);
  }), resolvedRef = _useState[0], setRef = _useState[1];
  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }
  (0, import_react20.useEffect)(function() {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0, import_react20.useEffect)(function() {
    var nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

// node_modules/react-overlays/esm/Modal.js
var manager;
function getManager() {
  if (!manager) manager = new ModalManager_default();
  return manager;
}
function useModalManager(provided) {
  var modalManager = provided || getManager();
  var modal = (0, import_react21.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: function add2(container, className) {
      return modalManager.add(modal.current, container, className);
    },
    remove: function remove() {
      return modalManager.remove(modal.current);
    },
    isTopModal: function isTopModal() {
      return modalManager.isTopModal(modal.current);
    },
    setDialogRef: (0, import_react21.useCallback)(function(ref) {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0, import_react21.useCallback)(function(ref) {
      modal.current.backdrop = ref;
    }, [])
  });
}
var Modal = (0, import_react21.forwardRef)(function(_ref, ref) {
  var _ref$show = _ref.show, show = _ref$show === void 0 ? false : _ref$show, _ref$role = _ref.role, role = _ref$role === void 0 ? "dialog" : _ref$role, className = _ref.className, style2 = _ref.style, children = _ref.children, _ref$backdrop = _ref.backdrop, backdrop = _ref$backdrop === void 0 ? true : _ref$backdrop, _ref$keyboard = _ref.keyboard, keyboard = _ref$keyboard === void 0 ? true : _ref$keyboard, onBackdropClick = _ref.onBackdropClick, onEscapeKeyDown = _ref.onEscapeKeyDown, transition = _ref.transition, backdropTransition = _ref.backdropTransition, _ref$autoFocus = _ref.autoFocus, autoFocus = _ref$autoFocus === void 0 ? true : _ref$autoFocus, _ref$enforceFocus = _ref.enforceFocus, enforceFocus = _ref$enforceFocus === void 0 ? true : _ref$enforceFocus, _ref$restoreFocus = _ref.restoreFocus, restoreFocus = _ref$restoreFocus === void 0 ? true : _ref$restoreFocus, restoreFocusOptions = _ref.restoreFocusOptions, renderDialog = _ref.renderDialog, _ref$renderBackdrop = _ref.renderBackdrop, renderBackdrop = _ref$renderBackdrop === void 0 ? function(props) {
    return import_react21.default.createElement("div", props);
  } : _ref$renderBackdrop, providedManager = _ref.manager, containerRef = _ref.container, containerClassName = _ref.containerClassName, onShow = _ref.onShow, _ref$onHide = _ref.onHide, onHide2 = _ref$onHide === void 0 ? function() {
  } : _ref$onHide, onExit = _ref.onExit, onExited = _ref.onExited, onExiting = _ref.onExiting, onEnter = _ref.onEnter, onEntering = _ref.onEntering, onEntered = _ref.onEntered, rest = _objectWithoutPropertiesLoose(_ref, ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "containerClassName", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"]);
  var container = useWaitForDOMRef(containerRef);
  var modal = useModalManager(providedManager);
  var isMounted = useMounted();
  var prevShow = usePrevious(show);
  var _useState = (0, import_react21.useState)(!show), exited = _useState[0], setExited = _useState[1];
  var lastFocusRef = (0, import_react21.useRef)(null);
  (0, import_react21.useImperativeHandle)(ref, function() {
    return modal;
  }, [modal]);
  if (canUseDOM_default && !prevShow && show) {
    lastFocusRef.current = activeElement();
  }
  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }
  var handleShow = useEventCallback(function() {
    modal.add(container, containerClassName);
    removeKeydownListenerRef.current = listen_default(document, "keydown", handleDocumentKeyDown);
    removeFocusListenerRef.current = listen_default(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      function() {
        return setTimeout(handleEnforceFocus);
      },
      true
    );
    if (onShow) {
      onShow();
    }
    if (autoFocus) {
      var currentActiveElement = activeElement(document);
      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  var handleHide = useEventCallback(function() {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();
    if (restoreFocus) {
      var _lastFocusRef$current;
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  });
  (0, import_react21.useEffect)(function() {
    if (!show || !container) return;
    handleShow();
  }, [
    show,
    container,
    /* should never change: */
    handleShow
  ]);
  (0, import_react21.useEffect)(function() {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(function() {
    handleHide();
  });
  var handleEnforceFocus = useEventCallback(function() {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }
    var currentActiveElement = activeElement();
    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  var handleBackdropClick = useEventCallback(function(e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    onBackdropClick == null ? void 0 : onBackdropClick(e);
    if (backdrop === true) {
      onHide2();
    }
  });
  var handleDocumentKeyDown = useEventCallback(function(e) {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
      if (!e.defaultPrevented) {
        onHide2();
      }
    }
  });
  var removeFocusListenerRef = (0, import_react21.useRef)();
  var removeKeydownListenerRef = (0, import_react21.useRef)();
  var handleHidden = function handleHidden2() {
    setExited(true);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    onExited == null ? void 0 : onExited.apply(void 0, args);
  };
  var Transition = transition;
  if (!container || !(show || Transition && !exited)) {
    return null;
  }
  var dialogProps = _extends({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": role === "dialog" ? true : void 0
  }, rest, {
    style: style2,
    className,
    tabIndex: -1
  });
  var dialog = renderDialog ? renderDialog(dialogProps) : import_react21.default.createElement("div", dialogProps, import_react21.default.cloneElement(children, {
    role: "document"
  }));
  if (Transition) {
    dialog = import_react21.default.createElement(Transition, {
      appear: true,
      unmountOnExit: true,
      "in": !!show,
      onExit,
      onExiting,
      onExited: handleHidden,
      onEnter,
      onEntering,
      onEntered
    }, dialog);
  }
  var backdropElement = null;
  if (backdrop) {
    var BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });
    if (BackdropTransition) {
      backdropElement = import_react21.default.createElement(BackdropTransition, {
        appear: true,
        "in": !!show
      }, backdropElement);
    }
  }
  return import_react21.default.createElement(import_react21.default.Fragment, null, import_react_dom2.default.createPortal(import_react21.default.createElement(import_react21.default.Fragment, null, backdropElement, dialog), container));
});
var propTypes4 = {
  /**
   * Set the visibility of the Modal
   */
  show: import_prop_types4.default.bool,
  /**
   * A DOM element, a `ref` to an element, or function that returns either. The Modal is appended to it's `container` element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: import_prop_types4.default.any,
  /**
   * A callback fired when the Modal is opening.
   */
  onShow: import_prop_types4.default.func,
  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: import_prop_types4.default.func,
  /**
   * Include a backdrop component.
   */
  backdrop: import_prop_types4.default.oneOfType([import_prop_types4.default.bool, import_prop_types4.default.oneOf(["static"])]),
  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js static
   * renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog: import_prop_types4.default.func,
  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: import_prop_types4.default.func,
  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   *
   * If preventDefault() is called on the keyboard event, closing the modal will be cancelled.
   */
  onEscapeKeyDown: import_prop_types4.default.func,
  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: import_prop_types4.default.func,
  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: import_prop_types4.default.string,
  /**
   * Close the modal when escape key is pressed
   */
  keyboard: import_prop_types4.default.bool,
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: import_prop_types4.default.elementType,
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: import_prop_types4.default.elementType,
  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: import_prop_types4.default.bool,
  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: import_prop_types4.default.bool,
  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: import_prop_types4.default.bool,
  /**
   * Options passed to focus function when `restoreFocus` is set to `true`
   *
   * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
   */
  restoreFocusOptions: import_prop_types4.default.shape({
    preventScroll: import_prop_types4.default.bool
  }),
  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: import_prop_types4.default.func,
  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: import_prop_types4.default.func,
  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: import_prop_types4.default.func,
  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: import_prop_types4.default.func,
  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: import_prop_types4.default.func,
  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: import_prop_types4.default.func,
  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: import_prop_types4.default.instanceOf(ModalManager_default)
};
Modal.displayName = "Modal";
Modal.propTypes = propTypes4;
var Modal_default = Object.assign(Modal, {
  Manager: ModalManager_default
});

// node_modules/react-overlays/esm/Overlay.js
var import_prop_types5 = __toESM(require_prop_types());
var import_react23 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());

// node_modules/@restart/hooks/esm/useMergedRefs.js
var import_react22 = __toESM(require_react());
var toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return (value) => {
    if (a) a(value);
    if (b) b(value);
  };
}
function useMergedRefs(refA, refB) {
  return (0, import_react22.useMemo)(() => mergeRefs(refA, refB), [refA, refB]);
}
var useMergedRefs_default = useMergedRefs;

// node_modules/react-overlays/esm/Overlay.js
var Overlay = import_react23.default.forwardRef(function(props, outerRef) {
  var flip2 = props.flip, offset3 = props.offset, placement = props.placement, _props$containerPaddi = props.containerPadding, containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi, _props$popperConfig = props.popperConfig, popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig, Transition = props.transition;
  var _useCallbackRef = useCallbackRef(), rootElement = _useCallbackRef[0], attachRef = _useCallbackRef[1];
  var _useCallbackRef2 = useCallbackRef(), arrowElement = _useCallbackRef2[0], attachArrowRef = _useCallbackRef2[1];
  var mergedRef = useMergedRefs_default(attachRef, outerRef);
  var container = useWaitForDOMRef(props.container);
  var target = useWaitForDOMRef(props.target);
  var _useState = (0, import_react23.useState)(!props.show), exited = _useState[0], setExited = _useState[1];
  var _usePopper = usePopper_default(target, rootElement, mergeOptionsWithPopperConfig({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip: flip2,
    offset: offset3,
    arrowElement,
    popperConfig
  })), styles = _usePopper.styles, attributes = _usePopper.attributes, popper2 = _objectWithoutPropertiesLoose(_usePopper, ["styles", "attributes"]);
  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }
  var handleHidden = function handleHidden2() {
    setExited(true);
    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  };
  var mountOverlay = props.show || Transition && !exited;
  useRootClose_default(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    return null;
  }
  var child = props.children(_extends({}, popper2, {
    show: !!props.show,
    props: _extends({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: _extends({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));
  if (Transition) {
    var onExit = props.onExit, onExiting = props.onExiting, onEnter = props.onEnter, onEntering = props.onEntering, onEntered = props.onEntered;
    child = import_react23.default.createElement(Transition, {
      "in": props.show,
      appear: true,
      onExit,
      onExiting,
      onExited: handleHidden,
      onEnter,
      onEntering,
      onEntered
    }, child);
  }
  return container ? import_react_dom3.default.createPortal(child, container) : null;
});
Overlay.displayName = "Overlay";
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: import_prop_types5.default.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: import_prop_types5.default.oneOf(placements),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: import_prop_types5.default.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: import_prop_types5.default.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: import_prop_types5.default.bool,
  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: import_prop_types5.default.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: import_prop_types5.default.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: import_prop_types5.default.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: import_prop_types5.default.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: import_prop_types5.default.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: import_prop_types5.default.bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (props.rootClose) {
      var _PropTypes$func;
      return (_PropTypes$func = import_prop_types5.default.func).isRequired.apply(_PropTypes$func, [props].concat(args));
    }
    return import_prop_types5.default.func.apply(import_prop_types5.default, [props].concat(args));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: import_prop_types5.default.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: import_prop_types5.default.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: import_prop_types5.default.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: import_prop_types5.default.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: import_prop_types5.default.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: import_prop_types5.default.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: import_prop_types5.default.func
};
var Overlay_default = Overlay;

// node_modules/react-overlays/esm/Portal.js
var import_prop_types6 = __toESM(require_prop_types());
var import_react_dom4 = __toESM(require_react_dom());
var import_react24 = __toESM(require_react());
var propTypes5 = {
  /**
   * A DOM element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: import_prop_types6.default.any,
  onRendered: import_prop_types6.default.func
};
var Portal = function Portal2(_ref) {
  var container = _ref.container, children = _ref.children, onRendered = _ref.onRendered;
  var resolvedContainer = useWaitForDOMRef(container, onRendered);
  return resolvedContainer ? import_react24.default.createElement(import_react24.default.Fragment, null, import_react_dom4.default.createPortal(children, resolvedContainer)) : null;
};
Portal.displayName = "Portal";
Portal.propTypes = propTypes5;

// node_modules/react-big-calendar/dist/react-big-calendar.esm.js
var import_isEqual = __toESM(require_isEqual());

// node_modules/dom-helpers/esm/height.js
function height(node, client) {
  var win = isWindow(node);
  return win ? win.innerHeight : client ? node.clientHeight : offset(node).height;
}

// node_modules/dom-helpers/esm/closest.js
function closest(node, selector, stopAt) {
  if (node.closest && !stopAt) node.closest(selector);
  var nextNode = node;
  do {
    if (matches(nextNode, selector)) return nextNode;
    nextNode = nextNode.parentElement;
  } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE);
  return null;
}

// node_modules/react-big-calendar/dist/react-big-calendar.esm.js
var import_findIndex = __toESM(require_findIndex());
var import_range = __toESM(require_range());

// node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual4) {
  if (isEqual4 === void 0) {
    isEqual4 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual4(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

// node_modules/dom-helpers/esm/width.js
function getWidth(node, client) {
  var win = isWindow(node);
  return win ? win.innerWidth : client ? node.clientWidth : offset(node).width;
}

// node_modules/react-big-calendar/dist/react-big-calendar.esm.js
var import_sortBy = __toESM(require_sortBy());

// node_modules/@babel/runtime/helpers/esm/toArray.js
function _toArray(r2) {
  return _arrayWithHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableRest();
}

// node_modules/react-big-calendar/dist/react-big-calendar.esm.js
var import_defaults = __toESM(require_defaults());
var import_mapValues = __toESM(require_mapValues());
var import_omit = __toESM(require_omit());
var import_transform = __toESM(require_transform());
var import_isBetween = __toESM(require_isBetween());
var import_isSameOrAfter = __toESM(require_isSameOrAfter());
var import_isSameOrBefore = __toESM(require_isSameOrBefore());
var import_localeData = __toESM(require_localeData());
var import_localizedFormat = __toESM(require_localizedFormat());
var import_minMax = __toESM(require_minMax());
var import_utc = __toESM(require_utc());
var import_isLeapYear = __toESM(require_isLeapYear());
function NoopWrapper(props) {
  return props.children;
}
var navigate = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE"
};
var views = {
  MONTH: "month",
  WEEK: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  AGENDA: "agenda"
};
var viewNames$1 = Object.keys(views).map(function(k) {
  return views[k];
});
import_prop_types7.default.oneOfType([import_prop_types7.default.string, import_prop_types7.default.func]);
import_prop_types7.default.any;
import_prop_types7.default.func;
import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOf(viewNames$1)), import_prop_types7.default.objectOf(function(prop, key) {
  var isBuiltinView = viewNames$1.indexOf(key) !== -1 && typeof prop[key] === "boolean";
  if (isBuiltinView) {
    return null;
  } else {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return import_prop_types7.default.elementType.apply(import_prop_types7.default, [prop, key].concat(args));
  }
})]);
import_prop_types7.default.oneOfType([import_prop_types7.default.oneOf(["overlap", "no-overlap"]), import_prop_types7.default.func]);
var MILLI = {
  seconds: 1e3,
  minutes: 1e3 * 60,
  hours: 1e3 * 60 * 60,
  day: 1e3 * 60 * 60 * 24
};
function firstVisibleDay(date2, localizer) {
  var firstOfMonth = startOf(date2, "month");
  return startOf(firstOfMonth, "week", localizer.startOfWeek());
}
function lastVisibleDay(date2, localizer) {
  var endOfMonth = endOf(date2, "month");
  return endOf(endOfMonth, "week", localizer.startOfWeek());
}
function visibleDays(date2, localizer) {
  var current = firstVisibleDay(date2, localizer), last = lastVisibleDay(date2, localizer), days = [];
  while (lte(current, last, "day")) {
    days.push(current);
    current = add(current, 1, "day");
  }
  return days;
}
function ceil(date2, unit) {
  var floor = startOf(date2, unit);
  return eq(floor, date2) ? floor : add(floor, 1, unit);
}
function range(start2, end2) {
  var unit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day";
  var current = start2, days = [];
  while (lte(current, end2, unit)) {
    days.push(current);
    current = add(current, 1, unit);
  }
  return days;
}
function merge(date2, time) {
  if (time == null && date2 == null) return null;
  if (time == null) time = /* @__PURE__ */ new Date();
  if (date2 == null) date2 = /* @__PURE__ */ new Date();
  date2 = startOf(date2, "day");
  date2 = hours(date2, hours(time));
  date2 = minutes(date2, minutes(time));
  date2 = seconds(date2, seconds(time));
  return milliseconds(date2, milliseconds(time));
}
function isJustDate(date2) {
  return hours(date2) === 0 && minutes(date2) === 0 && seconds(date2) === 0 && milliseconds(date2) === 0;
}
function duration(start2, end2, unit, firstOfWeek) {
  if (unit === "day") unit = "date";
  return Math.abs(
    // eslint-disable-next-line import/namespace
    date_arithmetic_exports[unit](start2, void 0, firstOfWeek) - // eslint-disable-next-line import/namespace
    date_arithmetic_exports[unit](end2, void 0, firstOfWeek)
  );
}
function diff2(dateA, dateB, unit) {
  if (!unit || unit === "milliseconds") return Math.abs(+dateA - +dateB);
  return Math.round(Math.abs(+startOf(dateA, unit) / MILLI[unit] - +startOf(dateB, unit) / MILLI[unit]));
}
var localePropType = import_prop_types7.default.oneOfType([import_prop_types7.default.string, import_prop_types7.default.func]);
function _format(localizer, formatter, value, format, culture) {
  var result = typeof format === "function" ? format(value, culture, localizer) : formatter.call(localizer, value, format, culture);
  (0, import_invariant3.default)(result == null || typeof result === "string", "`localizer format(..)` must return a string, null, or undefined");
  return result;
}
function getSlotDate(dt, minutesFromMidnight, offset3) {
  return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, minutesFromMidnight + offset3, 0, 0);
}
function getDstOffset(start2, end2) {
  return start2.getTimezoneOffset() - end2.getTimezoneOffset();
}
function getTotalMin(start2, end2) {
  return diff2(start2, end2, "minutes") + getDstOffset(start2, end2);
}
function getMinutesFromMidnight(start2) {
  var daystart = startOf(start2, "day");
  return diff2(daystart, start2, "minutes") + getDstOffset(daystart, start2);
}
function continuesPrior(start2, first) {
  return lt(start2, first, "day");
}
function continuesAfter(start2, end2, last) {
  var singleDayDuration = eq(start2, end2, "minutes");
  return singleDayDuration ? gte(end2, last, "minutes") : gt(end2, last, "minutes");
}
function daySpan(start2, end2) {
  return duration(start2, end2, "day");
}
function sortEvents$1(_ref) {
  var _ref$evtA = _ref.evtA, aStart = _ref$evtA.start, aEnd = _ref$evtA.end, aAllDay = _ref$evtA.allDay, _ref$evtB = _ref.evtB, bStart = _ref$evtB.start, bEnd = _ref$evtB.end, bAllDay = _ref$evtB.allDay;
  var startSort = +startOf(aStart, "day") - +startOf(bStart, "day");
  var durA = daySpan(aStart, aEnd);
  var durB = daySpan(bStart, bEnd);
  return startSort || // sort by start Day first
  durB - durA || // events spanning multiple days go first
  !!bAllDay - !!aAllDay || // then allDay single day events
  +aStart - +bStart || // then sort by start time
  +aEnd - +bEnd;
}
function inEventRange(_ref2) {
  var _ref2$event = _ref2.event, start2 = _ref2$event.start, end2 = _ref2$event.end, _ref2$range = _ref2.range, rangeStart = _ref2$range.start, rangeEnd = _ref2$range.end;
  var eStart = startOf(start2, "day");
  var startsBeforeEnd = lte(eStart, rangeEnd, "day");
  var sameMin = neq(eStart, end2, "minutes");
  var endsAfterStart = sameMin ? gt(end2, rangeStart, "minutes") : gte(end2, rangeStart, "minutes");
  return startsBeforeEnd && endsAfterStart;
}
function isSameDate(date1, date2) {
  return eq(date1, date2, "day");
}
function startAndEndAreDateOnly(start2, end2) {
  return isJustDate(start2) && isJustDate(end2);
}
var DateLocalizer = _createClass(function DateLocalizer2(spec) {
  var _this = this;
  _classCallCheck(this, DateLocalizer2);
  (0, import_invariant3.default)(typeof spec.format === "function", "date localizer `format(..)` must be a function");
  (0, import_invariant3.default)(typeof spec.firstOfWeek === "function", "date localizer `firstOfWeek(..)` must be a function");
  this.propType = spec.propType || localePropType;
  this.formats = spec.formats;
  this.format = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _format.apply(void 0, [_this, spec.format].concat(args));
  };
  this.startOfWeek = spec.firstOfWeek;
  this.merge = spec.merge || merge;
  this.inRange = spec.inRange || inRange;
  this.lt = spec.lt || lt;
  this.lte = spec.lte || lte;
  this.gt = spec.gt || gt;
  this.gte = spec.gte || gte;
  this.eq = spec.eq || eq;
  this.neq = spec.neq || neq;
  this.startOf = spec.startOf || startOf;
  this.endOf = spec.endOf || endOf;
  this.add = spec.add || add;
  this.range = spec.range || range;
  this.diff = spec.diff || diff2;
  this.ceil = spec.ceil || ceil;
  this.min = spec.min || min;
  this.max = spec.max || max;
  this.minutes = spec.minutes || minutes;
  this.daySpan = spec.daySpan || daySpan;
  this.firstVisibleDay = spec.firstVisibleDay || firstVisibleDay;
  this.lastVisibleDay = spec.lastVisibleDay || lastVisibleDay;
  this.visibleDays = spec.visibleDays || visibleDays;
  this.getSlotDate = spec.getSlotDate || getSlotDate;
  this.getTimezoneOffset = spec.getTimezoneOffset || function(value) {
    return value.getTimezoneOffset();
  };
  this.getDstOffset = spec.getDstOffset || getDstOffset;
  this.getTotalMin = spec.getTotalMin || getTotalMin;
  this.getMinutesFromMidnight = spec.getMinutesFromMidnight || getMinutesFromMidnight;
  this.continuesPrior = spec.continuesPrior || continuesPrior;
  this.continuesAfter = spec.continuesAfter || continuesAfter;
  this.sortEvents = spec.sortEvents || sortEvents$1;
  this.inEventRange = spec.inEventRange || inEventRange;
  this.isSameDate = spec.isSameDate || isSameDate;
  this.startAndEndAreDateOnly = spec.startAndEndAreDateOnly || startAndEndAreDateOnly;
  this.segmentOffset = spec.browserTZOffset ? spec.browserTZOffset() : 0;
});
function mergeWithDefaults(localizer, culture, formatOverrides, messages2) {
  var formats2 = _objectSpread2(_objectSpread2({}, localizer.formats), formatOverrides);
  return _objectSpread2(_objectSpread2({}, localizer), {}, {
    messages: messages2,
    startOfWeek: function startOfWeek() {
      return localizer.startOfWeek(culture);
    },
    format: function format(value, _format2) {
      return localizer.format(value, formats2[_format2] || _format2, culture);
    }
  });
}
var Toolbar = function(_React$Component) {
  function Toolbar2() {
    var _this;
    _classCallCheck(this, Toolbar2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Toolbar2, [].concat(args));
    _this.navigate = function(action) {
      _this.props.onNavigate(action);
    };
    _this.view = function(view) {
      _this.props.onView(view);
    };
    return _this;
  }
  _inherits(Toolbar2, _React$Component);
  return _createClass(Toolbar2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, messages2 = _this$props.localizer.messages, label = _this$props.label;
      return import_react25.default.createElement("div", {
        className: "rbc-toolbar"
      }, import_react25.default.createElement("span", {
        className: "rbc-btn-group"
      }, import_react25.default.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.TODAY)
      }, messages2.today), import_react25.default.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.PREVIOUS)
      }, messages2.previous), import_react25.default.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, navigate.NEXT)
      }, messages2.next)), import_react25.default.createElement("span", {
        className: "rbc-toolbar-label"
      }, label), import_react25.default.createElement("span", {
        className: "rbc-btn-group"
      }, this.viewNamesGroup(messages2)));
    }
  }, {
    key: "viewNamesGroup",
    value: function viewNamesGroup(messages2) {
      var _this2 = this;
      var viewNames2 = this.props.views;
      var view = this.props.view;
      if (viewNames2.length > 1) {
        return viewNames2.map(function(name) {
          return import_react25.default.createElement("button", {
            type: "button",
            key: name,
            className: clsx_m_default({
              "rbc-active": view === name
            }),
            onClick: _this2.view.bind(null, name)
          }, messages2[name]);
        });
      }
    }
  }]);
}(import_react25.default.Component);
function notify(handler, args) {
  handler && handler.apply(null, [].concat(args));
}
var defaultMessages = {
  date: "Date",
  time: "Time",
  event: "Event",
  allDay: "All Day",
  week: "Week",
  work_week: "Work Week",
  day: "Day",
  month: "Month",
  previous: "Back",
  next: "Next",
  yesterday: "Yesterday",
  tomorrow: "Tomorrow",
  today: "Today",
  agenda: "Agenda",
  noEventsInRange: "There are no events in this range.",
  showMore: function showMore(total) {
    return "+".concat(total, " more");
  }
};
function messages(msgs) {
  return _objectSpread2(_objectSpread2({}, defaultMessages), msgs);
}
function useClickOutside(_ref) {
  var ref = _ref.ref, callback = _ref.callback;
  (0, import_react25.useEffect)(function() {
    var handleClickOutside = function handleClickOutside2(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
var _excluded$7 = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"];
var EventCell = function(_React$Component) {
  function EventCell2() {
    _classCallCheck(this, EventCell2);
    return _callSuper(this, EventCell2, arguments);
  }
  _inherits(EventCell2, _React$Component);
  return _createClass(EventCell2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, style2 = _this$props.style, className = _this$props.className, event = _this$props.event, selected = _this$props.selected, isAllDay = _this$props.isAllDay, onSelect = _this$props.onSelect, _onDoubleClick = _this$props.onDoubleClick, onKeyPress = _this$props.onKeyPress, localizer = _this$props.localizer, continuesPrior2 = _this$props.continuesPrior, continuesAfter2 = _this$props.continuesAfter, accessors = _this$props.accessors, getters = _this$props.getters, children = _this$props.children, _this$props$component = _this$props.components, Event2 = _this$props$component.event, EventWrapper = _this$props$component.eventWrapper, slotStart = _this$props.slotStart, slotEnd = _this$props.slotEnd, props = _objectWithoutProperties(_this$props, _excluded$7);
      delete props.resizable;
      var title = accessors.title(event);
      var tooltip = accessors.tooltip(event);
      var end2 = accessors.end(event);
      var start2 = accessors.start(event);
      var allDay = accessors.allDay(event);
      var showAsAllDay = isAllDay || allDay || localizer.diff(start2, localizer.ceil(end2, "day"), "day") > 1;
      var userProps = getters.eventProp(event, start2, end2, selected);
      var content = import_react25.default.createElement("div", {
        className: "rbc-event-content",
        title: tooltip || void 0
      }, Event2 ? import_react25.default.createElement(Event2, {
        event,
        continuesPrior: continuesPrior2,
        continuesAfter: continuesAfter2,
        title,
        isAllDay: allDay,
        localizer,
        slotStart,
        slotEnd
      }) : title);
      return import_react25.default.createElement(EventWrapper, Object.assign({}, this.props, {
        type: "date"
      }), import_react25.default.createElement("div", Object.assign({}, props, {
        style: _objectSpread2(_objectSpread2({}, userProps.style), style2),
        className: clsx_m_default("rbc-event", className, userProps.className, {
          "rbc-selected": selected,
          "rbc-event-allday": showAsAllDay,
          "rbc-event-continues-prior": continuesPrior2,
          "rbc-event-continues-after": continuesAfter2
        }),
        onClick: function onClick(e) {
          return onSelect && onSelect(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return _onDoubleClick && _onDoubleClick(event, e);
        },
        onKeyDown: function onKeyDown(e) {
          return onKeyPress && onKeyPress(event, e);
        }
      }), typeof children === "function" ? children(content) : content));
    }
  }]);
}(import_react25.default.Component);
function isSelected(event, selected) {
  if (!event || selected == null) return false;
  return (0, import_isEqual.default)(event, selected);
}
function slotWidth(rowBox, slots) {
  var rowWidth = rowBox.right - rowBox.left;
  var cellWidth = rowWidth / slots;
  return cellWidth;
}
function getSlotAtX(rowBox, x, rtl, slots) {
  var cellWidth = slotWidth(rowBox, slots);
  return rtl ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth) : Math.floor((x - rowBox.left) / cellWidth);
}
function pointInBox(box, _ref) {
  var x = _ref.x, y = _ref.y;
  return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right;
}
function dateCellSelection(start2, rowBox, box, slots, rtl) {
  var startIdx = -1;
  var endIdx = -1;
  var lastSlotIdx = slots - 1;
  var cellWidth = slotWidth(rowBox, slots);
  var currentSlot = getSlotAtX(rowBox, box.x, rtl, slots);
  var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
  var isStartRow = rowBox.top < start2.y && rowBox.bottom > start2.y;
  var isAboveStart = start2.y > rowBox.bottom;
  var isBelowStart = rowBox.top > start2.y;
  var isBetween2 = box.top < rowBox.top && box.bottom > rowBox.bottom;
  if (isBetween2) {
    startIdx = 0;
    endIdx = lastSlotIdx;
  }
  if (isCurrentRow) {
    if (isBelowStart) {
      startIdx = 0;
      endIdx = currentSlot;
    } else if (isAboveStart) {
      startIdx = currentSlot;
      endIdx = lastSlotIdx;
    }
  }
  if (isStartRow) {
    startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start2.x - rowBox.left) / cellWidth) : Math.floor((start2.x - rowBox.left) / cellWidth);
    if (isCurrentRow) {
      if (currentSlot < startIdx) startIdx = currentSlot;
      else endIdx = currentSlot;
    } else if (start2.y < box.y) {
      endIdx = lastSlotIdx;
    } else {
      startIdx = 0;
    }
  }
  return {
    startIdx,
    endIdx
  };
}
function getPosition(_ref) {
  var target = _ref.target, offset3 = _ref.offset, container = _ref.container, box = _ref.box;
  var _getOffset = offset(target), top2 = _getOffset.top, left2 = _getOffset.left, width = _getOffset.width, height2 = _getOffset.height;
  var _getOffset2 = offset(container), cTop = _getOffset2.top, cLeft = _getOffset2.left, cWidth = _getOffset2.width, cHeight = _getOffset2.height;
  var _getOffset3 = offset(box), bWidth = _getOffset3.width, bHeight = _getOffset3.height;
  var viewBottom = cTop + cHeight;
  var viewRight = cLeft + cWidth;
  var bottom2 = top2 + bHeight;
  var right2 = left2 + bWidth;
  var x = offset3.x, y = offset3.y;
  var topOffset = bottom2 > viewBottom ? top2 - bHeight - y : top2 + y + height2;
  var leftOffset = right2 > viewRight ? left2 + x - bWidth + width : left2 + x;
  return {
    topOffset,
    leftOffset
  };
}
function Pop(_ref2) {
  var containerRef = _ref2.containerRef, accessors = _ref2.accessors, getters = _ref2.getters, selected = _ref2.selected, components2 = _ref2.components, localizer = _ref2.localizer, position2 = _ref2.position, show = _ref2.show, events = _ref2.events, slotStart = _ref2.slotStart, slotEnd = _ref2.slotEnd, onSelect = _ref2.onSelect, onDoubleClick = _ref2.onDoubleClick, onKeyPress = _ref2.onKeyPress, handleDragStart = _ref2.handleDragStart, popperRef = _ref2.popperRef, target = _ref2.target, offset3 = _ref2.offset;
  useClickOutside({
    ref: popperRef,
    callback: show
  });
  (0, import_react25.useLayoutEffect)(function() {
    var _getPosition = getPosition({
      target,
      offset: offset3,
      container: containerRef.current,
      box: popperRef.current
    }), topOffset = _getPosition.topOffset, leftOffset = _getPosition.leftOffset;
    popperRef.current.style.top = "".concat(topOffset, "px");
    popperRef.current.style.left = "".concat(leftOffset, "px");
  }, [offset3.x, offset3.y, target]);
  var width = position2.width;
  var style2 = {
    minWidth: width + width / 2
  };
  return import_react25.default.createElement("div", {
    style: style2,
    className: "rbc-overlay",
    ref: popperRef
  }, import_react25.default.createElement("div", {
    className: "rbc-overlay-header"
  }, localizer.format(slotStart, "dayHeaderFormat")), events.map(function(event, idx) {
    return import_react25.default.createElement(EventCell, {
      key: idx,
      type: "popup",
      localizer,
      event,
      getters,
      onSelect,
      accessors,
      components: components2,
      onDoubleClick,
      onKeyPress,
      continuesPrior: localizer.lt(accessors.end(event), slotStart, "day"),
      continuesAfter: localizer.gte(accessors.start(event), slotEnd, "day"),
      slotStart,
      slotEnd,
      selected: isSelected(event, selected),
      draggable: true,
      onDragStart: function onDragStart() {
        return handleDragStart(event);
      },
      onDragEnd: function onDragEnd() {
        return show();
      }
    });
  }));
}
var Popup = import_react25.default.forwardRef(function(props, ref) {
  return import_react25.default.createElement(Pop, Object.assign({}, props, {
    popperRef: ref
  }));
});
Popup.propTypes = {
  accessors: import_prop_types7.default.object.isRequired,
  getters: import_prop_types7.default.object.isRequired,
  selected: import_prop_types7.default.object,
  components: import_prop_types7.default.object.isRequired,
  localizer: import_prop_types7.default.object.isRequired,
  position: import_prop_types7.default.object.isRequired,
  show: import_prop_types7.default.func.isRequired,
  events: import_prop_types7.default.array.isRequired,
  slotStart: import_prop_types7.default.instanceOf(Date).isRequired,
  slotEnd: import_prop_types7.default.instanceOf(Date),
  onSelect: import_prop_types7.default.func,
  onDoubleClick: import_prop_types7.default.func,
  onKeyPress: import_prop_types7.default.func,
  handleDragStart: import_prop_types7.default.func,
  style: import_prop_types7.default.object,
  offset: import_prop_types7.default.shape({
    x: import_prop_types7.default.number,
    y: import_prop_types7.default.number
  })
};
function CalOverlay(_ref) {
  var containerRef = _ref.containerRef, _ref$popupOffset = _ref.popupOffset, popupOffset = _ref$popupOffset === void 0 ? 5 : _ref$popupOffset, overlay = _ref.overlay, accessors = _ref.accessors, localizer = _ref.localizer, components2 = _ref.components, getters = _ref.getters, selected = _ref.selected, handleSelectEvent = _ref.handleSelectEvent, handleDoubleClickEvent = _ref.handleDoubleClickEvent, handleKeyPressEvent = _ref.handleKeyPressEvent, handleDragStart = _ref.handleDragStart, onHide2 = _ref.onHide, overlayDisplay = _ref.overlayDisplay;
  var popperRef = (0, import_react25.useRef)(null);
  if (!overlay.position) return null;
  var offset3 = popupOffset;
  if (!isNaN(popupOffset)) {
    offset3 = {
      x: popupOffset,
      y: popupOffset
    };
  }
  var position2 = overlay.position, events = overlay.events, date2 = overlay.date, end2 = overlay.end;
  return import_react25.default.createElement(Overlay_default, {
    rootClose: true,
    flip: true,
    show: true,
    placement: "bottom",
    onHide: onHide2,
    target: overlay.target
  }, function(_ref2) {
    var props = _ref2.props;
    return import_react25.default.createElement(Popup, Object.assign({}, props, {
      containerRef,
      ref: popperRef,
      target: overlay.target,
      offset: offset3,
      accessors,
      getters,
      selected,
      components: components2,
      localizer,
      position: position2,
      show: overlayDisplay,
      events,
      slotStart: date2,
      slotEnd: end2,
      onSelect: handleSelectEvent,
      onDoubleClick: handleDoubleClickEvent,
      onKeyPress: handleKeyPressEvent,
      handleDragStart
    }));
  });
}
var PopOverlay = import_react25.default.forwardRef(function(props, ref) {
  return import_react25.default.createElement(CalOverlay, Object.assign({}, props, {
    containerRef: ref
  }));
});
PopOverlay.propTypes = {
  popupOffset: import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.shape({
    x: import_prop_types7.default.number,
    y: import_prop_types7.default.number
  })]),
  overlay: import_prop_types7.default.shape({
    position: import_prop_types7.default.object,
    events: import_prop_types7.default.array,
    date: import_prop_types7.default.instanceOf(Date),
    end: import_prop_types7.default.instanceOf(Date)
  }),
  accessors: import_prop_types7.default.object.isRequired,
  localizer: import_prop_types7.default.object.isRequired,
  components: import_prop_types7.default.object.isRequired,
  getters: import_prop_types7.default.object.isRequired,
  selected: import_prop_types7.default.object,
  handleSelectEvent: import_prop_types7.default.func,
  handleDoubleClickEvent: import_prop_types7.default.func,
  handleKeyPressEvent: import_prop_types7.default.func,
  handleDragStart: import_prop_types7.default.func,
  onHide: import_prop_types7.default.func,
  overlayDisplay: import_prop_types7.default.func
};
function addEventListener2(type, handler) {
  var target = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  return listen_default(target, type, handler, {
    passive: false
  });
}
function isOverContainer(container, x, y) {
  return !container || contains(container, document.elementFromPoint(x, y));
}
function getEventNodeFromPoint(node, _ref) {
  var clientX = _ref.clientX, clientY = _ref.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return closest(target, ".rbc-event", node);
}
function getShowMoreNodeFromPoint(node, _ref2) {
  var clientX = _ref2.clientX, clientY = _ref2.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return closest(target, ".rbc-show-more", node);
}
function isEvent(node, bounds) {
  return !!getEventNodeFromPoint(node, bounds);
}
function isShowMore(node, bounds) {
  return !!getShowMoreNodeFromPoint(node, bounds);
}
function getEventCoordinates(e) {
  var target = e;
  if (e.touches && e.touches.length) {
    target = e.touches[0];
  }
  return {
    clientX: target.clientX,
    clientY: target.clientY,
    pageX: target.pageX,
    pageY: target.pageY
  };
}
var clickTolerance = 5;
var clickInterval = 250;
var Selection = function() {
  function Selection2(node) {
    var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref3$global = _ref3.global, global2 = _ref3$global === void 0 ? false : _ref3$global, _ref3$longPressThresh = _ref3.longPressThreshold, longPressThreshold = _ref3$longPressThresh === void 0 ? 250 : _ref3$longPressThresh, _ref3$validContainers = _ref3.validContainers, validContainers = _ref3$validContainers === void 0 ? [] : _ref3$validContainers;
    _classCallCheck(this, Selection2);
    this._initialEvent = null;
    this.selecting = false;
    this.isDetached = false;
    this.container = node;
    this.globalMouse = !node || global2;
    this.longPressThreshold = longPressThreshold;
    this.validContainers = validContainers;
    this._listeners = /* @__PURE__ */ Object.create(null);
    this._handleInitialEvent = this._handleInitialEvent.bind(this);
    this._handleMoveEvent = this._handleMoveEvent.bind(this);
    this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
    this._keyListener = this._keyListener.bind(this);
    this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
    this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this);
    this._removeTouchMoveWindowListener = addEventListener2("touchmove", function() {
    }, window);
    this._removeKeyDownListener = addEventListener2("keydown", this._keyListener);
    this._removeKeyUpListener = addEventListener2("keyup", this._keyListener);
    this._removeDropFromOutsideListener = addEventListener2("drop", this._dropFromOutsideListener);
    this._removeDragOverFromOutsideListener = addEventListener2("dragover", this._dragOverFromOutsideListener);
    this._addInitialEventListener();
  }
  return _createClass(Selection2, [{
    key: "on",
    value: function on(type, handler) {
      var handlers = this._listeners[type] || (this._listeners[type] = []);
      handlers.push(handler);
      return {
        remove: function remove() {
          var idx = handlers.indexOf(handler);
          if (idx !== -1) handlers.splice(idx, 1);
        }
      };
    }
  }, {
    key: "emit",
    value: function emit(type) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var result;
      var handlers = this._listeners[type] || [];
      handlers.forEach(function(fn3) {
        if (result === void 0) result = fn3.apply(void 0, args);
      });
      return result;
    }
  }, {
    key: "teardown",
    value: function teardown() {
      this._initialEvent = null;
      this._initialEventData = null;
      this._selectRect = null;
      this.selecting = false;
      this._lastClickData = null;
      this.isDetached = true;
      this._listeners = /* @__PURE__ */ Object.create(null);
      this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener();
      this._removeInitialEventListener && this._removeInitialEventListener();
      this._removeEndListener && this._removeEndListener();
      this._onEscListener && this._onEscListener();
      this._removeMoveListener && this._removeMoveListener();
      this._removeKeyUpListener && this._removeKeyUpListener();
      this._removeKeyDownListener && this._removeKeyDownListener();
      this._removeDropFromOutsideListener && this._removeDropFromOutsideListener();
      this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
    }
  }, {
    key: "isSelected",
    value: function isSelected2(node) {
      var box = this._selectRect;
      if (!box || !this.selecting) return false;
      return objectsCollide(box, getBoundsForNode(node));
    }
  }, {
    key: "filter",
    value: function filter(items) {
      var box = this._selectRect;
      if (!box || !this.selecting) return [];
      return items.filter(this.isSelected, this);
    }
    // Adds a listener that will call the handler only after the user has pressed on the screen
    // without moving their finger for 250ms.
  }, {
    key: "_addLongPressListener",
    value: function _addLongPressListener(handler, initialEvent) {
      var _this = this;
      var timer = null;
      var removeTouchMoveListener = null;
      var removeTouchEndListener = null;
      var handleTouchStart = function handleTouchStart2(initialEvent2) {
        timer = setTimeout(function() {
          cleanup();
          handler(initialEvent2);
        }, _this.longPressThreshold);
        removeTouchMoveListener = addEventListener2("touchmove", function() {
          return cleanup();
        });
        removeTouchEndListener = addEventListener2("touchend", function() {
          return cleanup();
        });
      };
      var removeTouchStartListener = addEventListener2("touchstart", handleTouchStart);
      var cleanup = function cleanup2() {
        if (timer) {
          clearTimeout(timer);
        }
        if (removeTouchMoveListener) {
          removeTouchMoveListener();
        }
        if (removeTouchEndListener) {
          removeTouchEndListener();
        }
        timer = null;
        removeTouchMoveListener = null;
        removeTouchEndListener = null;
      };
      if (initialEvent) {
        handleTouchStart(initialEvent);
      }
      return function() {
        cleanup();
        removeTouchStartListener();
      };
    }
    // Listen for mousedown and touchstart events. When one is received, disable the other and setup
    // future event handling based on the type of event.
  }, {
    key: "_addInitialEventListener",
    value: function _addInitialEventListener() {
      var _this2 = this;
      var removeMouseDownListener = addEventListener2("mousedown", function(e) {
        _this2._removeInitialEventListener();
        _this2._handleInitialEvent(e);
        _this2._removeInitialEventListener = addEventListener2("mousedown", _this2._handleInitialEvent);
      });
      var removeTouchStartListener = addEventListener2("touchstart", function(e) {
        _this2._removeInitialEventListener();
        _this2._removeInitialEventListener = _this2._addLongPressListener(_this2._handleInitialEvent, e);
      });
      this._removeInitialEventListener = function() {
        removeMouseDownListener();
        removeTouchStartListener();
      };
    }
  }, {
    key: "_dropFromOutsideListener",
    value: function _dropFromOutsideListener(e) {
      var _getEventCoordinates = getEventCoordinates(e), pageX = _getEventCoordinates.pageX, pageY = _getEventCoordinates.pageY, clientX = _getEventCoordinates.clientX, clientY = _getEventCoordinates.clientY;
      this.emit("dropFromOutside", {
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
      e.preventDefault();
    }
  }, {
    key: "_dragOverFromOutsideListener",
    value: function _dragOverFromOutsideListener(e) {
      var _getEventCoordinates2 = getEventCoordinates(e), pageX = _getEventCoordinates2.pageX, pageY = _getEventCoordinates2.pageY, clientX = _getEventCoordinates2.clientX, clientY = _getEventCoordinates2.clientY;
      this.emit("dragOverFromOutside", {
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
      e.preventDefault();
    }
  }, {
    key: "_handleInitialEvent",
    value: function _handleInitialEvent(e) {
      this._initialEvent = e;
      if (this.isDetached) {
        return;
      }
      var _getEventCoordinates3 = getEventCoordinates(e), clientX = _getEventCoordinates3.clientX, clientY = _getEventCoordinates3.clientY, pageX = _getEventCoordinates3.pageX, pageY = _getEventCoordinates3.pageY;
      var node = this.container(), collides, offsetData;
      if (e.which === 3 || e.button === 2 || !isOverContainer(node, clientX, clientY)) return;
      if (!this.globalMouse && node && !contains(node, e.target)) {
        var _normalizeDistance = normalizeDistance(0), top2 = _normalizeDistance.top, left2 = _normalizeDistance.left, bottom2 = _normalizeDistance.bottom, right2 = _normalizeDistance.right;
        offsetData = getBoundsForNode(node);
        collides = objectsCollide({
          top: offsetData.top - top2,
          left: offsetData.left - left2,
          bottom: offsetData.bottom + bottom2,
          right: offsetData.right + right2
        }, {
          top: pageY,
          left: pageX
        });
        if (!collides) return;
      }
      var result = this.emit("beforeSelect", this._initialEventData = {
        isTouch: /^touch/.test(e.type),
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
      if (result === false) return;
      switch (e.type) {
        case "mousedown":
          this._removeEndListener = addEventListener2("mouseup", this._handleTerminatingEvent);
          this._onEscListener = addEventListener2("keydown", this._handleTerminatingEvent);
          this._removeMoveListener = addEventListener2("mousemove", this._handleMoveEvent);
          break;
        case "touchstart":
          this._handleMoveEvent(e);
          this._removeEndListener = addEventListener2("touchend", this._handleTerminatingEvent);
          this._removeMoveListener = addEventListener2("touchmove", this._handleMoveEvent);
          break;
      }
    }
    // Check whether provided event target element
    // - is contained within a valid container
  }, {
    key: "_isWithinValidContainer",
    value: function _isWithinValidContainer(e) {
      var eventTarget = e.target;
      var containers = this.validContainers;
      if (!containers || !containers.length || !eventTarget) {
        return true;
      }
      return containers.some(function(target) {
        return !!eventTarget.closest(target);
      });
    }
  }, {
    key: "_handleTerminatingEvent",
    value: function _handleTerminatingEvent(e) {
      var selecting = this.selecting;
      var bounds = this._selectRect;
      if (!selecting && e.type.includes("key")) {
        e = this._initialEvent;
      }
      this.selecting = false;
      this._removeEndListener && this._removeEndListener();
      this._removeMoveListener && this._removeMoveListener();
      this._selectRect = null;
      this._initialEvent = null;
      this._initialEventData = null;
      if (!e) return;
      var inRoot = !this.container || contains(this.container(), e.target);
      var isWithinValidContainer = this._isWithinValidContainer(e);
      if (e.key === "Escape" || !isWithinValidContainer) {
        return this.emit("reset");
      }
      if (!selecting && inRoot) {
        return this._handleClickEvent(e);
      }
      if (selecting) return this.emit("select", bounds);
      return this.emit("reset");
    }
  }, {
    key: "_handleClickEvent",
    value: function _handleClickEvent(e) {
      var _getEventCoordinates4 = getEventCoordinates(e), pageX = _getEventCoordinates4.pageX, pageY = _getEventCoordinates4.pageY, clientX = _getEventCoordinates4.clientX, clientY = _getEventCoordinates4.clientY;
      var now = (/* @__PURE__ */ new Date()).getTime();
      if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval) {
        this._lastClickData = null;
        return this.emit("doubleClick", {
          x: pageX,
          y: pageY,
          clientX,
          clientY
        });
      }
      this._lastClickData = {
        timestamp: now
      };
      return this.emit("click", {
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
    }
  }, {
    key: "_handleMoveEvent",
    value: function _handleMoveEvent(e) {
      if (this._initialEventData === null || this.isDetached) {
        return;
      }
      var _this$_initialEventDa = this._initialEventData, x = _this$_initialEventDa.x, y = _this$_initialEventDa.y;
      var _getEventCoordinates5 = getEventCoordinates(e), pageX = _getEventCoordinates5.pageX, pageY = _getEventCoordinates5.pageY;
      var w = Math.abs(x - pageX);
      var h = Math.abs(y - pageY);
      var left2 = Math.min(pageX, x), top2 = Math.min(pageY, y), old = this.selecting;
      var click = this.isClick(pageX, pageY);
      if (click && !old && !(w || h)) {
        return;
      }
      if (!old && !click) {
        this.emit("selectStart", this._initialEventData);
      }
      if (!click) {
        this.selecting = true;
        this._selectRect = {
          top: top2,
          left: left2,
          x: pageX,
          y: pageY,
          right: left2 + w,
          bottom: top2 + h
        };
        this.emit("selecting", this._selectRect);
      }
      e.preventDefault();
    }
  }, {
    key: "_keyListener",
    value: function _keyListener(e) {
      this.ctrl = e.metaKey || e.ctrlKey;
    }
  }, {
    key: "isClick",
    value: function isClick(pageX, pageY) {
      var _this$_initialEventDa2 = this._initialEventData, x = _this$_initialEventDa2.x, y = _this$_initialEventDa2.y, isTouch = _this$_initialEventDa2.isTouch;
      return !isTouch && Math.abs(pageX - x) <= clickTolerance && Math.abs(pageY - y) <= clickTolerance;
    }
  }]);
}();
function normalizeDistance() {
  var distance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  if (_typeof(distance) !== "object") distance = {
    top: distance,
    left: distance,
    right: distance,
    bottom: distance
  };
  return distance;
}
function objectsCollide(nodeA, nodeB) {
  var tolerance = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  var _getBoundsForNode = getBoundsForNode(nodeA), aTop = _getBoundsForNode.top, aLeft = _getBoundsForNode.left, _getBoundsForNode$rig = _getBoundsForNode.right, aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig, _getBoundsForNode$bot = _getBoundsForNode.bottom, aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;
  var _getBoundsForNode2 = getBoundsForNode(nodeB), bTop = _getBoundsForNode2.top, bLeft = _getBoundsForNode2.left, _getBoundsForNode2$ri = _getBoundsForNode2.right, bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri, _getBoundsForNode2$bo = _getBoundsForNode2.bottom, bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;
  return !// 'a' bottom doesn't touch 'b' top
  (aBottom - tolerance < bTop || // 'a' top doesn't touch 'b' bottom
  aTop + tolerance > bBottom || // 'a' right doesn't touch 'b' left
  aRight - tolerance < bLeft || // 'a' left doesn't touch 'b' right
  aLeft + tolerance > bRight);
}
function getBoundsForNode(node) {
  if (!node.getBoundingClientRect) return node;
  var rect = node.getBoundingClientRect(), left2 = rect.left + pageOffset("left"), top2 = rect.top + pageOffset("top");
  return {
    top: top2,
    left: left2,
    right: (node.offsetWidth || 0) + left2,
    bottom: (node.offsetHeight || 0) + top2
  };
}
function pageOffset(dir) {
  if (dir === "left") return window.pageXOffset || document.body.scrollLeft || 0;
  if (dir === "top") return window.pageYOffset || document.body.scrollTop || 0;
}
var BackgroundCells = function(_React$Component) {
  function BackgroundCells2(props, context) {
    var _this;
    _classCallCheck(this, BackgroundCells2);
    _this = _callSuper(this, BackgroundCells2, [props, context]);
    _this.state = {
      selecting: false
    };
    _this.containerRef = (0, import_react25.createRef)();
    return _this;
  }
  _inherits(BackgroundCells2, _React$Component);
  return _createClass(BackgroundCells2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.selectable && this.props.selectable) this._selectable();
      if (prevProps.selectable && !this.props.selectable) this._teardownSelectable();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props, range2 = _this$props.range, getNow2 = _this$props.getNow, getters = _this$props.getters, currentDate = _this$props.date, Wrapper = _this$props.components.dateCellWrapper, localizer = _this$props.localizer;
      var _this$state = this.state, selecting = _this$state.selecting, startIdx = _this$state.startIdx, endIdx = _this$state.endIdx;
      var current = getNow2();
      return import_react25.default.createElement("div", {
        className: "rbc-row-bg",
        ref: this.containerRef
      }, range2.map(function(date2, index) {
        var selected = selecting && index >= startIdx && index <= endIdx;
        var _getters$dayProp = getters.dayProp(date2), className = _getters$dayProp.className, style2 = _getters$dayProp.style;
        return import_react25.default.createElement(Wrapper, {
          key: index,
          value: date2,
          range: range2
        }, import_react25.default.createElement("div", {
          style: style2,
          className: clsx_m_default("rbc-day-bg", className, selected && "rbc-selected-cell", localizer.isSameDate(date2, current) && "rbc-today", currentDate && localizer.neq(currentDate, date2, "month") && "rbc-off-range-bg")
        }));
      }));
    }
  }, {
    key: "_selectable",
    value: function _selectable() {
      var _this2 = this;
      var node = this.containerRef.current;
      var selector = this._selector = new Selection(this.props.container, {
        longPressThreshold: this.props.longPressThreshold
      });
      var selectorClicksHandler = function selectorClicksHandler2(point, actionType) {
        if (!isEvent(node, point) && !isShowMore(node, point)) {
          var rowBox = getBoundsForNode(node);
          var _this2$props = _this2.props, range2 = _this2$props.range, rtl = _this2$props.rtl;
          if (pointInBox(rowBox, point)) {
            var currentCell = getSlotAtX(rowBox, point.x, rtl, range2.length);
            _this2._selectSlot({
              startIdx: currentCell,
              endIdx: currentCell,
              action: actionType,
              box: point
            });
          }
        }
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
      };
      selector.on("selecting", function(box) {
        var _this2$props2 = _this2.props, range2 = _this2$props2.range, rtl = _this2$props2.rtl;
        var startIdx = -1;
        var endIdx = -1;
        if (!_this2.state.selecting) {
          notify(_this2.props.onSelectStart, [box]);
          _this2._initial = {
            x: box.x,
            y: box.y
          };
        }
        if (selector.isSelected(node)) {
          var nodeBox = getBoundsForNode(node);
          var _dateCellSelection = dateCellSelection(_this2._initial, nodeBox, box, range2.length, rtl);
          startIdx = _dateCellSelection.startIdx;
          endIdx = _dateCellSelection.endIdx;
        }
        _this2.setState({
          selecting: true,
          startIdx,
          endIdx
        });
      });
      selector.on("beforeSelect", function(box) {
        if (_this2.props.selectable !== "ignoreEvents") return;
        return !isEvent(_this2.containerRef.current, box);
      });
      selector.on("click", function(point) {
        return selectorClicksHandler(point, "click");
      });
      selector.on("doubleClick", function(point) {
        return selectorClicksHandler(point, "doubleClick");
      });
      selector.on("select", function(bounds) {
        _this2._selectSlot(_objectSpread2(_objectSpread2({}, _this2.state), {}, {
          action: "select",
          bounds
        }));
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
        notify(_this2.props.onSelectEnd, [_this2.state]);
      });
    }
  }, {
    key: "_teardownSelectable",
    value: function _teardownSelectable() {
      if (!this._selector) return;
      this._selector.teardown();
      this._selector = null;
    }
  }, {
    key: "_selectSlot",
    value: function _selectSlot(_ref) {
      var endIdx = _ref.endIdx, startIdx = _ref.startIdx, action = _ref.action, bounds = _ref.bounds, box = _ref.box;
      if (endIdx !== -1 && startIdx !== -1) this.props.onSelectSlot && this.props.onSelectSlot({
        start: startIdx,
        end: endIdx,
        action,
        bounds,
        box,
        resourceId: this.props.resourceId
      });
    }
  }]);
}(import_react25.default.Component);
var EventRowMixin = {
  propTypes: {
    slotMetrics: import_prop_types7.default.object.isRequired,
    selected: import_prop_types7.default.object,
    isAllDay: import_prop_types7.default.bool,
    accessors: import_prop_types7.default.object.isRequired,
    localizer: import_prop_types7.default.object.isRequired,
    components: import_prop_types7.default.object.isRequired,
    getters: import_prop_types7.default.object.isRequired,
    onSelect: import_prop_types7.default.func,
    onDoubleClick: import_prop_types7.default.func,
    onKeyPress: import_prop_types7.default.func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },
  renderEvent: function renderEvent(props, event) {
    var selected = props.selected;
    props.isAllDay;
    var accessors = props.accessors, getters = props.getters, onSelect = props.onSelect, onDoubleClick = props.onDoubleClick, onKeyPress = props.onKeyPress, localizer = props.localizer, slotMetrics = props.slotMetrics, components2 = props.components, resizable = props.resizable;
    var continuesPrior2 = slotMetrics.continuesPrior(event);
    var continuesAfter2 = slotMetrics.continuesAfter(event);
    return import_react25.default.createElement(EventCell, {
      event,
      getters,
      localizer,
      accessors,
      components: components2,
      onSelect,
      onDoubleClick,
      onKeyPress,
      continuesPrior: continuesPrior2,
      continuesAfter: continuesAfter2,
      slotStart: slotMetrics.first,
      slotEnd: slotMetrics.last,
      selected: isSelected(event, selected),
      resizable
    });
  },
  renderSpan: function renderSpan(slots, len, key) {
    var content = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ";
    var per = Math.abs(len) / slots * 100 + "%";
    return import_react25.default.createElement("div", {
      key,
      className: "rbc-row-segment",
      style: {
        WebkitFlexBasis: per,
        flexBasis: per,
        maxWidth: per
      }
    }, content);
  }
};
var EventRow = function(_React$Component) {
  function EventRow2() {
    _classCallCheck(this, EventRow2);
    return _callSuper(this, EventRow2, arguments);
  }
  _inherits(EventRow2, _React$Component);
  return _createClass(EventRow2, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props, segments = _this$props.segments, slots = _this$props.slotMetrics.slots, className = _this$props.className;
      var lastEnd = 1;
      return import_react25.default.createElement("div", {
        className: clsx_m_default(className, "rbc-row")
      }, segments.reduce(function(row, _ref, li) {
        var event = _ref.event, left2 = _ref.left, right2 = _ref.right, span = _ref.span;
        var key = "_lvl_" + li;
        var gap = left2 - lastEnd;
        var content = EventRowMixin.renderEvent(_this.props, event);
        if (gap) row.push(EventRowMixin.renderSpan(slots, gap, "".concat(key, "_gap")));
        row.push(EventRowMixin.renderSpan(slots, span, key, content));
        lastEnd = right2 + 1;
        return row;
      }, []));
    }
  }]);
}(import_react25.default.Component);
EventRow.defaultProps = _objectSpread2({}, EventRowMixin.defaultProps);
function endOfRange(_ref) {
  var dateRange = _ref.dateRange, _ref$unit = _ref.unit, unit = _ref$unit === void 0 ? "day" : _ref$unit, localizer = _ref.localizer;
  return {
    first: dateRange[0],
    last: localizer.add(dateRange[dateRange.length - 1], 1, unit)
  };
}
function eventSegments(event, range2, accessors, localizer) {
  var _endOfRange = endOfRange({
    dateRange: range2,
    localizer
  }), first = _endOfRange.first, last = _endOfRange.last;
  var slots = localizer.diff(first, last, "day");
  var start2 = localizer.max(localizer.startOf(accessors.start(event), "day"), first);
  var end2 = localizer.min(localizer.ceil(accessors.end(event), "day"), last);
  var padding = (0, import_findIndex.default)(range2, function(x) {
    return localizer.isSameDate(x, start2);
  });
  var span = localizer.diff(start2, end2, "day");
  span = Math.min(span, slots);
  span = Math.max(span - localizer.segmentOffset, 1);
  return {
    event,
    span,
    left: padding + 1,
    right: Math.max(padding + span, 1)
  };
}
function eventLevels(rowSegments) {
  var limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
  var i, j, seg, levels = [], extra = [];
  for (i = 0; i < rowSegments.length; i++) {
    seg = rowSegments[i];
    for (j = 0; j < levels.length; j++) if (!segsOverlap(seg, levels[j])) break;
    if (j >= limit) {
      extra.push(seg);
    } else {
      (levels[j] || (levels[j] = [])).push(seg);
    }
  }
  for (i = 0; i < levels.length; i++) {
    levels[i].sort(function(a, b) {
      return a.left - b.left;
    });
  }
  return {
    levels,
    extra
  };
}
function inRange2(e, start2, end2, accessors, localizer) {
  var event = {
    start: accessors.start(e),
    end: accessors.end(e)
  };
  var range2 = {
    start: start2,
    end: end2
  };
  return localizer.inEventRange({
    event,
    range: range2
  });
}
function segsOverlap(seg, otherSegs) {
  return otherSegs.some(function(otherSeg) {
    return otherSeg.left <= seg.right && otherSeg.right >= seg.left;
  });
}
function sortWeekEvents(events, accessors, localizer) {
  var base = _toConsumableArray(events);
  var multiDayEvents = [];
  var standardEvents = [];
  base.forEach(function(event) {
    var startCheck = accessors.start(event);
    var endCheck = accessors.end(event);
    if (localizer.daySpan(startCheck, endCheck) > 1) {
      multiDayEvents.push(event);
    } else {
      standardEvents.push(event);
    }
  });
  var multiSorted = multiDayEvents.sort(function(a, b) {
    return sortEvents(a, b, accessors, localizer);
  });
  var standardSorted = standardEvents.sort(function(a, b) {
    return sortEvents(a, b, accessors, localizer);
  });
  return [].concat(_toConsumableArray(multiSorted), _toConsumableArray(standardSorted));
}
function sortEvents(eventA, eventB, accessors, localizer) {
  var evtA = {
    start: accessors.start(eventA),
    end: accessors.end(eventA),
    allDay: accessors.allDay(eventA)
  };
  var evtB = {
    start: accessors.start(eventB),
    end: accessors.end(eventB),
    allDay: accessors.allDay(eventB)
  };
  return localizer.sortEvents({
    evtA,
    evtB
  });
}
var isSegmentInSlot$1 = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var eventsInSlot = function eventsInSlot2(segments, slot) {
  return segments.filter(function(seg) {
    return isSegmentInSlot$1(seg, slot);
  }).map(function(seg) {
    return seg.event;
  });
};
var EventEndingRow = function(_React$Component) {
  function EventEndingRow2() {
    _classCallCheck(this, EventEndingRow2);
    return _callSuper(this, EventEndingRow2, arguments);
  }
  _inherits(EventEndingRow2, _React$Component);
  return _createClass(EventEndingRow2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, segments = _this$props.segments, slots = _this$props.slotMetrics.slots;
      var rowSegments = eventLevels(segments).levels[0];
      var current = 1, lastEnd = 1, row = [];
      while (current <= slots) {
        var key = "_lvl_" + current;
        var _ref = rowSegments.filter(function(seg) {
          return isSegmentInSlot$1(seg, current);
        })[0] || {}, event = _ref.event, left2 = _ref.left, right2 = _ref.right, span = _ref.span;
        if (!event) {
          var hiddenEvents = this.getHiddenEventsForSlot(segments, current);
          if (hiddenEvents.length > 0) {
            var _gap = current - lastEnd;
            if (_gap) {
              row.push(EventRowMixin.renderSpan(slots, _gap, key + "_gap"));
            }
            row.push(EventRowMixin.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
            lastEnd = current = current + 1;
            continue;
          }
          current++;
          continue;
        }
        var gap = Math.max(0, left2 - lastEnd);
        if (this.canRenderSlotEvent(left2, span)) {
          var content = EventRowMixin.renderEvent(this.props, event);
          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + "_gap"));
          }
          row.push(EventRowMixin.renderSpan(slots, span, key, content));
          lastEnd = current = right2 + 1;
        } else {
          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + "_gap"));
          }
          row.push(EventRowMixin.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
          lastEnd = current = current + 1;
        }
      }
      return import_react25.default.createElement("div", {
        className: "rbc-row"
      }, row);
    }
    // New helper method to find hidden events for a slot
  }, {
    key: "getHiddenEventsForSlot",
    value: function getHiddenEventsForSlot(segments, slot) {
      var allEventsInSlot = eventsInSlot(segments, slot);
      var rowSegments = eventLevels(segments).levels[0];
      var visibleEventsInSlot = rowSegments.filter(function(seg) {
        return isSegmentInSlot$1(seg, slot);
      }).map(function(seg) {
        return seg.event;
      });
      return allEventsInSlot.filter(function(event) {
        return !visibleEventsInSlot.some(function(visEvent) {
          return visEvent === event;
        });
      });
    }
  }, {
    key: "canRenderSlotEvent",
    value: function canRenderSlotEvent(slot, span) {
      var segments = this.props.segments;
      return (0, import_range.default)(slot, slot + span).every(function(s) {
        var count = eventsInSlot(segments, s).length;
        return count === 1;
      });
    }
  }, {
    key: "renderShowMore",
    value: function renderShowMore(segments, slot) {
      var _this = this;
      var _this$props2 = this.props, localizer = _this$props2.localizer, slotMetrics = _this$props2.slotMetrics, components2 = _this$props2.components;
      var events = slotMetrics.getEventsForSlot(slot);
      var remainingEvents = eventsInSlot(segments, slot);
      var count = remainingEvents.length;
      if (components2 !== null && components2 !== void 0 && components2.showMore) {
        var ShowMore = components2.showMore;
        var slotDate = slotMetrics.getDateForSlot(slot - 1);
        return count ? import_react25.default.createElement(ShowMore, {
          localizer,
          slotDate,
          slot,
          count,
          events,
          remainingEvents
        }) : false;
      }
      return count ? import_react25.default.createElement("button", {
        type: "button",
        key: "sm_" + slot,
        className: clsx_m_default("rbc-button-link", "rbc-show-more"),
        onClick: function onClick(e) {
          return _this.showMore(slot, e);
        }
      }, localizer.messages.showMore(count, remainingEvents, events)) : false;
    }
  }, {
    key: "showMore",
    value: function showMore2(slot, e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onShowMore(slot, e.target);
    }
  }]);
}(import_react25.default.Component);
EventEndingRow.defaultProps = _objectSpread2({}, EventRowMixin.defaultProps);
var ScrollableWeekWrapper = function ScrollableWeekWrapper2(_ref) {
  var children = _ref.children;
  return import_react25.default.createElement("div", {
    className: "rbc-row-content-scroll-container"
  }, children);
};
var isSegmentInSlot2 = function isSegmentInSlot3(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var isEqual2 = function isEqual3(a, b) {
  return a[0].range === b[0].range && a[0].events === b[0].events;
};
function getSlotMetrics$1() {
  return memoizeOne(function(options) {
    var range2 = options.range, events = options.events, maxRows = options.maxRows, minRows = options.minRows, accessors = options.accessors, localizer = options.localizer;
    var _endOfRange = endOfRange({
      dateRange: range2,
      localizer
    }), first = _endOfRange.first, last = _endOfRange.last;
    var segments = events.map(function(evt) {
      return eventSegments(evt, range2, accessors, localizer);
    });
    var _eventLevels = eventLevels(segments, Math.max(maxRows - 1, 1)), levels = _eventLevels.levels, extra = _eventLevels.extra;
    var minEventRows = extra.length > 0 ? minRows - 1 : minRows;
    while (levels.length < minEventRows) levels.push([]);
    return {
      first,
      last,
      levels,
      extra,
      range: range2,
      slots: range2.length,
      clone: function clone(args) {
        var metrics = getSlotMetrics$1();
        return metrics(_objectSpread2(_objectSpread2({}, options), args));
      },
      getDateForSlot: function getDateForSlot(slotNumber) {
        return range2[slotNumber];
      },
      getSlotForDate: function getSlotForDate(date2) {
        return range2.find(function(r2) {
          return localizer.isSameDate(r2, date2);
        });
      },
      getEventsForSlot: function getEventsForSlot(slot) {
        return segments.filter(function(seg) {
          return isSegmentInSlot2(seg, slot);
        }).map(function(seg) {
          return seg.event;
        });
      },
      continuesPrior: function continuesPrior2(event) {
        return localizer.continuesPrior(accessors.start(event), first);
      },
      continuesAfter: function continuesAfter2(event) {
        var start2 = accessors.start(event);
        var end2 = accessors.end(event);
        return localizer.continuesAfter(start2, end2, last);
      }
    };
  }, isEqual2);
}
var DateContentRow = function(_React$Component) {
  function DateContentRow2() {
    var _this;
    _classCallCheck(this, DateContentRow2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DateContentRow2, [].concat(args));
    _this.handleSelectSlot = function(slot) {
      var _this$props = _this.props, range2 = _this$props.range, onSelectSlot = _this$props.onSelectSlot;
      onSelectSlot(range2.slice(slot.start, slot.end + 1), slot);
    };
    _this.handleShowMore = function(slot, target) {
      var _this$props2 = _this.props, range2 = _this$props2.range, onShowMore = _this$props2.onShowMore;
      var metrics = _this.slotMetrics(_this.props);
      var row = qsa(_this.containerRef.current, ".rbc-row-bg")[0];
      var cell;
      if (row) cell = row.children[slot - 1];
      var events = metrics.getEventsForSlot(slot);
      onShowMore(events, range2[slot - 1], cell, slot, target);
    };
    _this.getContainer = function() {
      var container = _this.props.container;
      return container ? container() : _this.containerRef.current;
    };
    _this.renderHeadingCell = function(date2, index) {
      var _this$props3 = _this.props, renderHeader = _this$props3.renderHeader, getNow2 = _this$props3.getNow, localizer = _this$props3.localizer;
      return renderHeader({
        date: date2,
        key: "header_".concat(index),
        className: clsx_m_default("rbc-date-cell", localizer.isSameDate(date2, getNow2()) && "rbc-now")
      });
    };
    _this.renderDummy = function() {
      var _this$props4 = _this.props, className = _this$props4.className, range2 = _this$props4.range, renderHeader = _this$props4.renderHeader, showAllEvents = _this$props4.showAllEvents;
      return import_react25.default.createElement("div", {
        className,
        ref: _this.containerRef
      }, import_react25.default.createElement("div", {
        className: clsx_m_default("rbc-row-content", showAllEvents && "rbc-row-content-scrollable")
      }, renderHeader && import_react25.default.createElement("div", {
        className: "rbc-row",
        ref: _this.headingRowRef
      }, range2.map(_this.renderHeadingCell)), import_react25.default.createElement("div", {
        className: "rbc-row",
        ref: _this.eventRowRef
      }, import_react25.default.createElement("div", {
        className: "rbc-row-segment"
      }, import_react25.default.createElement("div", {
        className: "rbc-event"
      }, import_react25.default.createElement("div", {
        className: "rbc-event-content"
      }, " "))))));
    };
    _this.containerRef = (0, import_react25.createRef)();
    _this.headingRowRef = (0, import_react25.createRef)();
    _this.eventRowRef = (0, import_react25.createRef)();
    _this.slotMetrics = getSlotMetrics$1();
    return _this;
  }
  _inherits(DateContentRow2, _React$Component);
  return _createClass(DateContentRow2, [{
    key: "getRowLimit",
    value: function getRowLimit() {
      var _this$headingRowRef;
      var eventHeight = height(this.eventRowRef.current);
      var headingHeight = (_this$headingRowRef = this.headingRowRef) !== null && _this$headingRowRef !== void 0 && _this$headingRowRef.current ? height(this.headingRowRef.current) : 0;
      var eventSpace = height(this.containerRef.current) - headingHeight;
      return Math.max(Math.floor(eventSpace / eventHeight), 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, date2 = _this$props5.date, rtl = _this$props5.rtl, range2 = _this$props5.range, className = _this$props5.className, selected = _this$props5.selected, selectable = _this$props5.selectable, renderForMeasure = _this$props5.renderForMeasure, accessors = _this$props5.accessors, getters = _this$props5.getters, components2 = _this$props5.components, getNow2 = _this$props5.getNow, renderHeader = _this$props5.renderHeader, onSelect = _this$props5.onSelect, localizer = _this$props5.localizer, onSelectStart = _this$props5.onSelectStart, onSelectEnd = _this$props5.onSelectEnd, onDoubleClick = _this$props5.onDoubleClick, onKeyPress = _this$props5.onKeyPress, resourceId = _this$props5.resourceId, longPressThreshold = _this$props5.longPressThreshold, isAllDay = _this$props5.isAllDay, resizable = _this$props5.resizable, showAllEvents = _this$props5.showAllEvents;
      if (renderForMeasure) return this.renderDummy();
      var metrics = this.slotMetrics(this.props);
      var levels = metrics.levels, extra = metrics.extra;
      var ScrollableWeekComponent = showAllEvents ? ScrollableWeekWrapper : NoopWrapper;
      var WeekWrapper = components2.weekWrapper;
      var eventRowProps = {
        selected,
        accessors,
        getters,
        localizer,
        components: components2,
        onSelect,
        onDoubleClick,
        onKeyPress,
        resourceId,
        slotMetrics: metrics,
        resizable
      };
      return import_react25.default.createElement("div", {
        className,
        role: "rowgroup",
        ref: this.containerRef
      }, import_react25.default.createElement(BackgroundCells, {
        localizer,
        date: date2,
        getNow: getNow2,
        rtl,
        range: range2,
        selectable,
        container: this.getContainer,
        getters,
        onSelectStart,
        onSelectEnd,
        onSelectSlot: this.handleSelectSlot,
        components: components2,
        longPressThreshold,
        resourceId
      }), import_react25.default.createElement("div", {
        className: clsx_m_default("rbc-row-content", showAllEvents && "rbc-row-content-scrollable"),
        role: "row"
      }, renderHeader && import_react25.default.createElement("div", {
        className: "rbc-row ",
        ref: this.headingRowRef
      }, range2.map(this.renderHeadingCell)), import_react25.default.createElement(ScrollableWeekComponent, null, import_react25.default.createElement(WeekWrapper, Object.assign({
        isAllDay
      }, eventRowProps, {
        rtl: this.props.rtl
      }), levels.map(function(segs, idx) {
        return import_react25.default.createElement(EventRow, Object.assign({
          key: idx,
          segments: segs
        }, eventRowProps));
      }), !!extra.length && import_react25.default.createElement(EventEndingRow, Object.assign({
        segments: extra,
        onShowMore: this.handleShowMore
      }, eventRowProps))))));
    }
  }]);
}(import_react25.default.Component);
DateContentRow.defaultProps = {
  minRows: 0,
  maxRows: Infinity
};
var Header = function Header2(_ref) {
  var label = _ref.label;
  return import_react25.default.createElement("span", {
    role: "columnheader",
    "aria-sort": "none"
  }, label);
};
var DateHeader = function DateHeader2(_ref) {
  var label = _ref.label, drilldownView = _ref.drilldownView, onDrillDown = _ref.onDrillDown;
  if (!drilldownView) {
    return import_react25.default.createElement("span", null, label);
  }
  return import_react25.default.createElement("button", {
    type: "button",
    className: "rbc-button-link",
    onClick: onDrillDown
  }, label);
};
var _excluded$6 = ["date", "className"];
var eventsForWeek = function eventsForWeek2(evts, start2, end2, accessors, localizer) {
  return evts.filter(function(e) {
    return inRange2(e, start2, end2, accessors, localizer);
  });
};
var MonthView = function(_React$Component) {
  function MonthView2() {
    var _this;
    _classCallCheck(this, MonthView2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MonthView2, [].concat(_args));
    _this.getContainer = function() {
      return _this.containerRef.current;
    };
    _this.renderWeek = function(week, weekIdx) {
      var _this$props = _this.props, events = _this$props.events, components2 = _this$props.components, selectable = _this$props.selectable, getNow2 = _this$props.getNow, selected = _this$props.selected, date2 = _this$props.date, localizer = _this$props.localizer, longPressThreshold = _this$props.longPressThreshold, accessors = _this$props.accessors, getters = _this$props.getters, showAllEvents = _this$props.showAllEvents;
      var _this$state = _this.state, needLimitMeasure = _this$state.needLimitMeasure, rowLimit = _this$state.rowLimit;
      var weeksEvents = eventsForWeek(_toConsumableArray(events), week[0], week[week.length - 1], accessors, localizer);
      var sorted = sortWeekEvents(weeksEvents, accessors, localizer);
      return import_react25.default.createElement(DateContentRow, {
        key: weekIdx,
        ref: weekIdx === 0 ? _this.slotRowRef : void 0,
        container: _this.getContainer,
        className: "rbc-month-row",
        getNow: getNow2,
        date: date2,
        range: week,
        events: sorted,
        maxRows: showAllEvents ? Infinity : rowLimit,
        selected,
        selectable,
        components: components2,
        accessors,
        getters,
        localizer,
        renderHeader: _this.readerDateHeading,
        renderForMeasure: needLimitMeasure,
        onShowMore: _this.handleShowMore,
        onSelect: _this.handleSelectEvent,
        onDoubleClick: _this.handleDoubleClickEvent,
        onKeyPress: _this.handleKeyPressEvent,
        onSelectSlot: _this.handleSelectSlot,
        longPressThreshold,
        rtl: _this.props.rtl,
        resizable: _this.props.resizable,
        showAllEvents
      });
    };
    _this.readerDateHeading = function(_ref) {
      var date2 = _ref.date, className = _ref.className, props = _objectWithoutProperties(_ref, _excluded$6);
      var _this$props2 = _this.props, currentDate = _this$props2.date, getDrilldownView = _this$props2.getDrilldownView, localizer = _this$props2.localizer;
      var isOffRange = localizer.neq(currentDate, date2, "month");
      var isCurrent = localizer.isSameDate(date2, currentDate);
      var drilldownView = getDrilldownView(date2);
      var label = localizer.format(date2, "dateFormat");
      var DateHeaderComponent = _this.props.components.dateHeader || DateHeader;
      return import_react25.default.createElement("div", Object.assign({}, props, {
        className: clsx_m_default(className, isOffRange && "rbc-off-range", isCurrent && "rbc-current"),
        role: "cell"
      }), import_react25.default.createElement(DateHeaderComponent, {
        label,
        date: date2,
        drilldownView,
        isOffRange,
        onDrillDown: function onDrillDown(e) {
          return _this.handleHeadingClick(date2, drilldownView, e);
        }
      }));
    };
    _this.handleSelectSlot = function(range2, slotInfo) {
      _this._pendingSelection = _this._pendingSelection.concat(range2);
      clearTimeout(_this._selectTimer);
      _this._selectTimer = setTimeout(function() {
        return _this.selectDates(slotInfo);
      });
    };
    _this.handleHeadingClick = function(date2, view, e) {
      e.preventDefault();
      _this.clearSelection();
      notify(_this.props.onDrillDown, [date2, view]);
    };
    _this.handleSelectEvent = function() {
      _this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function() {
      _this.clearSelection();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function() {
      _this.clearSelection();
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleShowMore = function(events, date2, cell, slot, target) {
      var _this$props3 = _this.props, popup = _this$props3.popup, onDrillDown = _this$props3.onDrillDown, onShowMore = _this$props3.onShowMore, getDrilldownView = _this$props3.getDrilldownView, doShowMoreDrillDown = _this$props3.doShowMoreDrillDown;
      _this.clearSelection();
      if (popup) {
        var position2 = position(cell, _this.containerRef.current);
        _this.setState({
          overlay: {
            date: date2,
            events,
            position: position2,
            target
          }
        });
      } else if (doShowMoreDrillDown) {
        notify(onDrillDown, [date2, getDrilldownView(date2) || views.DAY]);
      }
      notify(onShowMore, [events, date2, slot]);
    };
    _this.overlayDisplay = function() {
      _this.setState({
        overlay: null
      });
    };
    _this.state = {
      rowLimit: 5,
      needLimitMeasure: true,
      date: null
    };
    _this.containerRef = (0, import_react25.createRef)();
    _this.slotRowRef = (0, import_react25.createRef)();
    _this._bgRows = [];
    _this._pendingSelection = [];
    return _this;
  }
  _inherits(MonthView2, _React$Component);
  return _createClass(MonthView2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var running;
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
      window.addEventListener("resize", this._resizeListener = function() {
        if (!running) {
          request(function() {
            running = false;
            _this2.setState({
              needLimitMeasure: true
            });
          });
        }
      }, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this._resizeListener, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props, date2 = _this$props4.date, localizer = _this$props4.localizer, className = _this$props4.className, month2 = localizer.visibleDays(date2, localizer), weeks = (0, import_chunk.default)(month2, 7);
      this._weekCount = weeks.length;
      return import_react25.default.createElement("div", {
        className: clsx_m_default("rbc-month-view", className),
        role: "table",
        "aria-label": "Month View",
        ref: this.containerRef
      }, import_react25.default.createElement("div", {
        className: "rbc-row rbc-month-header",
        role: "row"
      }, this.renderHeaders(weeks[0])), weeks.map(this.renderWeek), this.props.popup && this.renderOverlay());
    }
  }, {
    key: "renderHeaders",
    value: function renderHeaders(row) {
      var _this$props5 = this.props, localizer = _this$props5.localizer, components2 = _this$props5.components;
      var first = row[0];
      var last = row[row.length - 1];
      var HeaderComponent = components2.header || Header;
      return localizer.range(first, last, "day").map(function(day2, idx) {
        return import_react25.default.createElement("div", {
          key: "header_" + idx,
          className: "rbc-header"
        }, import_react25.default.createElement(HeaderComponent, {
          date: day2,
          localizer,
          label: localizer.format(day2, "weekdayFormat")
        }));
      });
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var _this$state$overlay, _this$state2, _this3 = this;
      var overlay = (_this$state$overlay = (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.overlay) !== null && _this$state$overlay !== void 0 ? _this$state$overlay : {};
      var _this$props6 = this.props, accessors = _this$props6.accessors, localizer = _this$props6.localizer, components2 = _this$props6.components, getters = _this$props6.getters, selected = _this$props6.selected, popupOffset = _this$props6.popupOffset, handleDragStart = _this$props6.handleDragStart;
      var onHide2 = function onHide3() {
        return _this3.setState({
          overlay: null
        });
      };
      return import_react25.default.createElement(PopOverlay, {
        overlay,
        accessors,
        localizer,
        components: components2,
        getters,
        selected,
        popupOffset,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart,
        show: !!overlay.position,
        overlayDisplay: this.overlayDisplay,
        onHide: onHide2
      });
    }
  }, {
    key: "measureRowLimit",
    value: function measureRowLimit() {
      this.setState({
        needLimitMeasure: false,
        rowLimit: this.slotRowRef.current.getRowLimit()
      });
    }
  }, {
    key: "selectDates",
    value: function selectDates(slotInfo) {
      var slots = this._pendingSelection.slice();
      this._pendingSelection = [];
      slots.sort(function(a, b) {
        return +a - +b;
      });
      var start2 = new Date(slots[0]);
      var end2 = new Date(slots[slots.length - 1]);
      end2.setDate(slots[slots.length - 1].getDate() + 1);
      notify(this.props.onSelectSlot, {
        slots,
        start: start2,
        end: end2,
        action: slotInfo.action,
        bounds: slotInfo.bounds,
        box: slotInfo.box
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var date2 = _ref2.date, localizer = _ref2.localizer;
      return {
        date: date2,
        needLimitMeasure: localizer.neq(date2, state.date, "month")
      };
    }
  }]);
}(import_react25.default.Component);
MonthView.range = function(date2, _ref3) {
  var localizer = _ref3.localizer;
  var start2 = localizer.firstVisibleDay(date2, localizer);
  var end2 = localizer.lastVisibleDay(date2, localizer);
  return {
    start: start2,
    end: end2
  };
};
MonthView.navigate = function(date2, action, _ref4) {
  var localizer = _ref4.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer.add(date2, -1, "month");
    case navigate.NEXT:
      return localizer.add(date2, 1, "month");
    default:
      return date2;
  }
};
MonthView.title = function(date2, _ref5) {
  var localizer = _ref5.localizer;
  return localizer.format(date2, "monthHeaderFormat");
};
var getKey3 = function getKey4(_ref) {
  var min3 = _ref.min, max3 = _ref.max, step = _ref.step, slots = _ref.slots, localizer = _ref.localizer;
  return "".concat(+localizer.startOf(min3, "minutes")) + "".concat(+localizer.startOf(max3, "minutes")) + "".concat(step, "-").concat(slots);
};
function getSlotMetrics(_ref2) {
  var start2 = _ref2.min, end2 = _ref2.max, step = _ref2.step, timeslots = _ref2.timeslots, localizer = _ref2.localizer;
  var key = getKey3({
    start: start2,
    end: end2,
    step,
    timeslots,
    localizer
  });
  var totalMin = 1 + localizer.getTotalMin(start2, end2);
  var minutesFromMidnight = localizer.getMinutesFromMidnight(start2);
  var numGroups = Math.ceil((totalMin - 1) / (step * timeslots));
  var numSlots = numGroups * timeslots;
  var groups = new Array(numGroups);
  var slots = new Array(numSlots);
  for (var grp = 0; grp < numGroups; grp++) {
    groups[grp] = new Array(timeslots);
    for (var slot = 0; slot < timeslots; slot++) {
      var slotIdx = grp * timeslots + slot;
      var minFromStart = slotIdx * step;
      slots[slotIdx] = groups[grp][slot] = localizer.getSlotDate(start2, minutesFromMidnight, minFromStart);
    }
  }
  var lastSlotMinFromStart = slots.length * step;
  slots.push(localizer.getSlotDate(start2, minutesFromMidnight, lastSlotMinFromStart));
  function positionFromDate(date2) {
    var diff3 = localizer.diff(start2, date2, "minutes") + localizer.getDstOffset(start2, date2);
    return Math.min(diff3, totalMin);
  }
  return {
    groups,
    update: function update(args) {
      if (getKey3(args) !== key) return getSlotMetrics(args);
      return this;
    },
    dateIsInGroup: function dateIsInGroup(date2, groupIndex) {
      var nextGroup = groups[groupIndex + 1];
      return localizer.inRange(date2, groups[groupIndex][0], nextGroup ? nextGroup[0] : end2, "minutes");
    },
    nextSlot: function nextSlot(slot2) {
      var next = slots[Math.min(slots.findIndex(function(s) {
        return s === slot2 || localizer.eq(s, slot2);
      }) + 1, slots.length - 1)];
      if (localizer.eq(next, slot2)) next = localizer.add(slot2, step, "minutes");
      return next;
    },
    closestSlotToPosition: function closestSlotToPosition(percent) {
      var slot2 = Math.min(slots.length - 1, Math.max(0, Math.floor(percent * numSlots)));
      return slots[slot2];
    },
    closestSlotFromPoint: function closestSlotFromPoint(point, boundaryRect) {
      var range2 = Math.abs(boundaryRect.top - boundaryRect.bottom);
      return this.closestSlotToPosition((point.y - boundaryRect.top) / range2);
    },
    closestSlotFromDate: function closestSlotFromDate(date2) {
      var offset3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (localizer.lt(date2, start2, "minutes")) return slots[0];
      if (localizer.gt(date2, end2, "minutes")) return slots[slots.length - 1];
      var diffMins = localizer.diff(start2, date2, "minutes");
      return slots[(diffMins - diffMins % step) / step + offset3];
    },
    startsBeforeDay: function startsBeforeDay(date2) {
      return localizer.lt(date2, start2, "day");
    },
    startsAfterDay: function startsAfterDay(date2) {
      return localizer.gt(date2, end2, "day");
    },
    startsBefore: function startsBefore(date2) {
      return localizer.lt(localizer.merge(start2, date2), start2, "minutes");
    },
    startsAfter: function startsAfter(date2) {
      return localizer.gt(localizer.merge(end2, date2), end2, "minutes");
    },
    getRange: function getRange(rangeStart, rangeEnd, ignoreMin, ignoreMax) {
      if (!ignoreMin) rangeStart = localizer.min(end2, localizer.max(start2, rangeStart));
      if (!ignoreMax) rangeEnd = localizer.min(end2, localizer.max(start2, rangeEnd));
      var rangeStartMin = positionFromDate(rangeStart);
      var rangeEndMin = positionFromDate(rangeEnd);
      var top2 = rangeEndMin > step * numSlots && !localizer.eq(end2, rangeEnd) ? (rangeStartMin - step) / (step * numSlots) * 100 : rangeStartMin / (step * numSlots) * 100;
      return {
        top: top2,
        height: rangeEndMin / (step * numSlots) * 100 - top2,
        start: positionFromDate(rangeStart),
        startDate: rangeStart,
        end: positionFromDate(rangeEnd),
        endDate: rangeEnd
      };
    },
    getCurrentTimePosition: function getCurrentTimePosition(rangeStart) {
      var rangeStartMin = positionFromDate(rangeStart);
      var top2 = rangeStartMin / (step * numSlots) * 100;
      return top2;
    }
  };
}
var Event = function() {
  function Event2(data, _ref) {
    var accessors = _ref.accessors, slotMetrics = _ref.slotMetrics;
    _classCallCheck(this, Event2);
    var _slotMetrics$getRange = slotMetrics.getRange(accessors.start(data), accessors.end(data)), start2 = _slotMetrics$getRange.start, startDate = _slotMetrics$getRange.startDate, end2 = _slotMetrics$getRange.end, endDate = _slotMetrics$getRange.endDate, top2 = _slotMetrics$getRange.top, height2 = _slotMetrics$getRange.height;
    this.start = start2;
    this.end = end2;
    this.startMs = +startDate;
    this.endMs = +endDate;
    this.top = top2;
    this.height = height2;
    this.data = data;
  }
  return _createClass(Event2, [{
    key: "_width",
    get: function get() {
      if (this.rows) {
        var columns = this.rows.reduce(
          function(max3, row) {
            return Math.max(max3, row.leaves.length + 1);
          },
          // add itself
          0
        ) + 1;
        return 100 / columns;
      }
      if (this.leaves) {
        var availableWidth = 100 - this.container._width;
        return availableWidth / (this.leaves.length + 1);
      }
      return this.row._width;
    }
    /**
     * The event's calculated width, possibly with extra width added for
     * overlapping effect.
     */
  }, {
    key: "width",
    get: function get() {
      var noOverlap2 = this._width;
      var overlap = Math.min(100, this._width * 1.7);
      if (this.rows) {
        return overlap;
      }
      if (this.leaves) {
        return this.leaves.length > 0 ? overlap : noOverlap2;
      }
      var leaves = this.row.leaves;
      var index = leaves.indexOf(this);
      return index === leaves.length - 1 ? noOverlap2 : overlap;
    }
  }, {
    key: "xOffset",
    get: function get() {
      if (this.rows) return 0;
      if (this.leaves) return this.container._width;
      var _this$row = this.row, leaves = _this$row.leaves, xOffset = _this$row.xOffset, _width = _this$row._width;
      var index = leaves.indexOf(this) + 1;
      return xOffset + index * _width;
    }
  }]);
}();
function onSameRow(a, b, minimumStartDifference) {
  return (
    // Occupies the same start slot.
    Math.abs(b.start - a.start) < minimumStartDifference || // A's start slot overlaps with b's end slot.
    b.start > a.start && b.start < a.end
  );
}
function sortByRender(events) {
  var sortedByTime = (0, import_sortBy.default)(events, ["startMs", function(e) {
    return -e.endMs;
  }]);
  var sorted = [];
  while (sortedByTime.length > 0) {
    var event = sortedByTime.shift();
    sorted.push(event);
    for (var i = 0; i < sortedByTime.length; i++) {
      var test = sortedByTime[i];
      if (event.endMs > test.startMs) continue;
      if (i > 0) {
        var _event = sortedByTime.splice(i, 1)[0];
        sorted.push(_event);
      }
      break;
    }
  }
  return sorted;
}
function getStyledEvents$1(_ref2) {
  var events = _ref2.events, minimumStartDifference = _ref2.minimumStartDifference, slotMetrics = _ref2.slotMetrics, accessors = _ref2.accessors;
  var proxies = events.map(function(event) {
    return new Event(event, {
      slotMetrics,
      accessors
    });
  });
  var eventsInRenderOrder = sortByRender(proxies);
  var containerEvents = [];
  var _loop = function _loop2() {
    var event = eventsInRenderOrder[i];
    var container = containerEvents.find(function(c) {
      return c.end > event.start || Math.abs(event.start - c.start) < minimumStartDifference;
    });
    if (!container) {
      event.rows = [];
      containerEvents.push(event);
      return 1;
    }
    event.container = container;
    var row = null;
    for (var j = container.rows.length - 1; !row && j >= 0; j--) {
      if (onSameRow(container.rows[j], event, minimumStartDifference)) {
        row = container.rows[j];
      }
    }
    if (row) {
      row.leaves.push(event);
      event.row = row;
    } else {
      event.leaves = [];
      container.rows.push(event);
    }
  };
  for (var i = 0; i < eventsInRenderOrder.length; i++) {
    if (_loop()) continue;
  }
  return eventsInRenderOrder.map(function(event) {
    return {
      event: event.data,
      style: {
        top: event.top,
        height: event.height,
        width: event.width,
        xOffset: Math.max(0, event.xOffset)
      }
    };
  });
}
function getMaxIdxDFS(node, maxIdx, visited) {
  for (var i = 0; i < node.friends.length; ++i) {
    if (visited.indexOf(node.friends[i]) > -1) continue;
    maxIdx = maxIdx > node.friends[i].idx ? maxIdx : node.friends[i].idx;
    visited.push(node.friends[i]);
    var newIdx = getMaxIdxDFS(node.friends[i], maxIdx, visited);
    maxIdx = maxIdx > newIdx ? maxIdx : newIdx;
  }
  return maxIdx;
}
function noOverlap(_ref) {
  var events = _ref.events, minimumStartDifference = _ref.minimumStartDifference, slotMetrics = _ref.slotMetrics, accessors = _ref.accessors;
  var styledEvents = getStyledEvents$1({
    events,
    minimumStartDifference,
    slotMetrics,
    accessors
  });
  styledEvents.sort(function(a, b) {
    a = a.style;
    b = b.style;
    if (a.top !== b.top) return a.top > b.top ? 1 : -1;
    else if (a.height !== b.height) return a.top + a.height < b.top + b.height ? 1 : -1;
    else return 0;
  });
  for (var i = 0; i < styledEvents.length; ++i) {
    styledEvents[i].friends = [];
    delete styledEvents[i].style.left;
    delete styledEvents[i].style.left;
    delete styledEvents[i].idx;
    delete styledEvents[i].size;
  }
  for (var _i2 = 0; _i2 < styledEvents.length - 1; ++_i2) {
    var se1 = styledEvents[_i2];
    var y1 = se1.style.top;
    var y2 = se1.style.top + se1.style.height;
    for (var j = _i2 + 1; j < styledEvents.length; ++j) {
      var se2 = styledEvents[j];
      var y3 = se2.style.top;
      var y4 = se2.style.top + se2.style.height;
      if (y3 >= y1 && y4 <= y2 || y4 > y1 && y4 <= y2 || y3 >= y1 && y3 < y2) {
        se1.friends.push(se2);
        se2.friends.push(se1);
      }
    }
  }
  for (var _i4 = 0; _i4 < styledEvents.length; ++_i4) {
    var se = styledEvents[_i4];
    var bitmap = [];
    for (var _j2 = 0; _j2 < 100; ++_j2) bitmap.push(1);
    for (var _j4 = 0; _j4 < se.friends.length; ++_j4) if (se.friends[_j4].idx !== void 0) bitmap[se.friends[_j4].idx] = 0;
    se.idx = bitmap.indexOf(1);
  }
  for (var _i6 = 0; _i6 < styledEvents.length; ++_i6) {
    var size2 = 0;
    if (styledEvents[_i6].size) continue;
    var allFriends = [];
    var maxIdx = getMaxIdxDFS(styledEvents[_i6], 0, allFriends);
    size2 = 100 / (maxIdx + 1);
    styledEvents[_i6].size = size2;
    for (var _j6 = 0; _j6 < allFriends.length; ++_j6) allFriends[_j6].size = size2;
  }
  for (var _i8 = 0; _i8 < styledEvents.length; ++_i8) {
    var e = styledEvents[_i8];
    e.style.left = e.idx * e.size;
    var _maxIdx = 0;
    for (var _j8 = 0; _j8 < e.friends.length; ++_j8) {
      var idx = e.friends[_j8].idx;
      _maxIdx = _maxIdx > idx ? _maxIdx : idx;
    }
    if (_maxIdx <= e.idx) e.size = 100 - e.idx * e.size;
    var padding = e.idx === 0 ? 0 : 3;
    e.style.width = "calc(".concat(e.size, "% - ").concat(padding, "px)");
    e.style.height = "calc(".concat(e.style.height, "% - 2px)");
    e.style.xOffset = "calc(".concat(e.style.left, "% + ").concat(padding, "px)");
  }
  return styledEvents;
}
var DefaultAlgorithms = {
  overlap: getStyledEvents$1,
  "no-overlap": noOverlap
};
function isFunction(a) {
  return !!(a && a.constructor && a.call && a.apply);
}
function getStyledEvents(_ref) {
  _ref.events;
  _ref.minimumStartDifference;
  _ref.slotMetrics;
  _ref.accessors;
  var dayLayoutAlgorithm = _ref.dayLayoutAlgorithm;
  var algorithm = dayLayoutAlgorithm;
  if (dayLayoutAlgorithm in DefaultAlgorithms) algorithm = DefaultAlgorithms[dayLayoutAlgorithm];
  if (!isFunction(algorithm)) {
    return [];
  }
  return algorithm.apply(this, arguments);
}
var TimeSlotGroup = function(_Component) {
  function TimeSlotGroup2() {
    _classCallCheck(this, TimeSlotGroup2);
    return _callSuper(this, TimeSlotGroup2, arguments);
  }
  _inherits(TimeSlotGroup2, _Component);
  return _createClass(TimeSlotGroup2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, renderSlot = _this$props.renderSlot, resource = _this$props.resource, group = _this$props.group, getters = _this$props.getters, _this$props$component = _this$props.components, _this$props$component2 = _this$props$component === void 0 ? {} : _this$props$component, _this$props$component3 = _this$props$component2.timeSlotWrapper, Wrapper = _this$props$component3 === void 0 ? NoopWrapper : _this$props$component3;
      var groupProps = getters ? getters.slotGroupProp(group) : {};
      return import_react25.default.createElement("div", Object.assign({
        className: "rbc-timeslot-group"
      }, groupProps), group.map(function(value, idx) {
        var slotProps = getters ? getters.slotProp(value, resource) : {};
        return import_react25.default.createElement(Wrapper, {
          key: idx,
          value,
          resource
        }, import_react25.default.createElement("div", Object.assign({}, slotProps, {
          className: clsx_m_default("rbc-time-slot", slotProps.className)
        }), renderSlot && renderSlot(value, idx)));
      }));
    }
  }]);
}(import_react25.Component);
function stringifyPercent(v) {
  return typeof v === "string" ? v : v + "%";
}
function TimeGridEvent(props) {
  var style2 = props.style, className = props.className, event = props.event, accessors = props.accessors, rtl = props.rtl, selected = props.selected, label = props.label, continuesPrior2 = props.continuesPrior, continuesAfter2 = props.continuesAfter, getters = props.getters, onClick = props.onClick, onDoubleClick = props.onDoubleClick, isBackgroundEvent = props.isBackgroundEvent, onKeyPress = props.onKeyPress, _props$components = props.components, Event2 = _props$components.event, EventWrapper = _props$components.eventWrapper;
  var title = accessors.title(event);
  var tooltip = accessors.tooltip(event);
  var end2 = accessors.end(event);
  var start2 = accessors.start(event);
  var userProps = getters.eventProp(event, start2, end2, selected);
  var inner = [import_react25.default.createElement("div", {
    key: "1",
    className: "rbc-event-label"
  }, label), import_react25.default.createElement("div", {
    key: "2",
    className: "rbc-event-content"
  }, Event2 ? import_react25.default.createElement(Event2, {
    event,
    title
  }) : title)];
  var height2 = style2.height, top2 = style2.top, width = style2.width, xOffset = style2.xOffset;
  var eventStyle = _objectSpread2(_objectSpread2({}, userProps.style), {}, _defineProperty({
    top: stringifyPercent(top2),
    height: stringifyPercent(height2),
    width: stringifyPercent(width)
  }, rtl ? "right" : "left", stringifyPercent(xOffset)));
  return import_react25.default.createElement(EventWrapper, Object.assign({
    type: "time"
  }, props), import_react25.default.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick,
    onDoubleClick,
    style: eventStyle,
    onKeyDown: onKeyPress,
    title: tooltip ? (typeof label === "string" ? label + ": " : "") + tooltip : void 0,
    className: clsx_m_default(isBackgroundEvent ? "rbc-background-event" : "rbc-event", className, userProps.className, {
      "rbc-selected": selected,
      "rbc-event-continues-earlier": continuesPrior2,
      "rbc-event-continues-later": continuesAfter2
    })
  }, inner));
}
var DayColumnWrapper = function DayColumnWrapper2(_ref) {
  var children = _ref.children, className = _ref.className, style2 = _ref.style, innerRef = _ref.innerRef;
  return import_react25.default.createElement("div", {
    className,
    style: style2,
    ref: innerRef
  }, children);
};
var DayColumnWrapper$1 = import_react25.default.forwardRef(function(props, ref) {
  return import_react25.default.createElement(DayColumnWrapper, Object.assign({}, props, {
    innerRef: ref
  }));
});
var _excluded$5 = ["dayProp"];
var _excluded2$1 = ["eventContainerWrapper", "timeIndicatorWrapper"];
var DayColumn = function(_React$Component) {
  function DayColumn2() {
    var _this;
    _classCallCheck(this, DayColumn2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DayColumn2, [].concat(_args));
    _this.state = {
      selecting: false,
      timeIndicatorPosition: null
    };
    _this.intervalTriggered = false;
    _this.renderEvents = function(_ref) {
      var events = _ref.events, isBackgroundEvent = _ref.isBackgroundEvent;
      var _this$props = _this.props, rtl = _this$props.rtl, selected = _this$props.selected, accessors = _this$props.accessors, localizer = _this$props.localizer, getters = _this$props.getters, components2 = _this$props.components, step = _this$props.step, timeslots = _this$props.timeslots, dayLayoutAlgorithm = _this$props.dayLayoutAlgorithm, resizable = _this$props.resizable;
      var _this2 = _this, slotMetrics = _this2.slotMetrics;
      var messages2 = localizer.messages;
      var styledEvents = getStyledEvents({
        events,
        accessors,
        slotMetrics,
        minimumStartDifference: Math.ceil(step * timeslots / 2),
        dayLayoutAlgorithm
      });
      return styledEvents.map(function(_ref2, idx) {
        var _accessors$eventId;
        var event = _ref2.event, style2 = _ref2.style;
        var end2 = accessors.end(event);
        var start2 = accessors.start(event);
        var key = (_accessors$eventId = accessors.eventId(event)) !== null && _accessors$eventId !== void 0 ? _accessors$eventId : "evt_" + idx;
        var format = "eventTimeRangeFormat";
        var label;
        var startsBeforeDay = slotMetrics.startsBeforeDay(start2);
        var startsAfterDay = slotMetrics.startsAfterDay(end2);
        if (startsBeforeDay) format = "eventTimeRangeEndFormat";
        else if (startsAfterDay) format = "eventTimeRangeStartFormat";
        if (startsBeforeDay && startsAfterDay) label = messages2.allDay;
        else label = localizer.format({
          start: start2,
          end: end2
        }, format);
        var continuesPrior2 = startsBeforeDay || slotMetrics.startsBefore(start2);
        var continuesAfter2 = startsAfterDay || slotMetrics.startsAfter(end2);
        return import_react25.default.createElement(TimeGridEvent, {
          style: style2,
          event,
          label,
          key,
          getters,
          rtl,
          components: components2,
          continuesPrior: continuesPrior2,
          continuesAfter: continuesAfter2,
          accessors,
          resource: _this.props.resource,
          selected: isSelected(event, selected),
          onClick: function onClick(e) {
            return _this._select(_objectSpread2(_objectSpread2(_objectSpread2({}, event), _this.props.resource && {
              sourceResource: _this.props.resource
            }), isBackgroundEvent && {
              isBackgroundEvent: true
            }), e);
          },
          onDoubleClick: function onDoubleClick(e) {
            return _this._doubleClick(event, e);
          },
          isBackgroundEvent,
          onKeyPress: function onKeyPress(e) {
            return _this._keyPress(event, e);
          },
          resizable
        });
      });
    };
    _this._selectable = function() {
      var node = _this.containerRef.current;
      var _this$props2 = _this.props, longPressThreshold = _this$props2.longPressThreshold, localizer = _this$props2.localizer;
      var selector = _this._selector = new Selection(function() {
        return node;
      }, {
        longPressThreshold
      });
      var maybeSelect = function maybeSelect2(box) {
        var onSelecting = _this.props.onSelecting;
        var current = _this.state || {};
        var state = selectionState(box);
        var start2 = state.startDate, end2 = state.endDate;
        if (onSelecting) {
          if (localizer.eq(current.startDate, start2, "minutes") && localizer.eq(current.endDate, end2, "minutes") || onSelecting({
            start: start2,
            end: end2,
            resourceId: _this.props.resource
          }) === false) return;
        }
        if (_this.state.start !== state.start || _this.state.end !== state.end || _this.state.selecting !== state.selecting) {
          _this.setState(state);
        }
      };
      var selectionState = function selectionState2(point) {
        var currentSlot = _this.slotMetrics.closestSlotFromPoint(point, getBoundsForNode(node));
        if (!_this.state.selecting) {
          _this._initialSlot = currentSlot;
        }
        var initialSlot = _this._initialSlot;
        if (localizer.lte(initialSlot, currentSlot)) {
          currentSlot = _this.slotMetrics.nextSlot(currentSlot);
        } else if (localizer.gt(initialSlot, currentSlot)) {
          initialSlot = _this.slotMetrics.nextSlot(initialSlot);
        }
        var selectRange = _this.slotMetrics.getRange(localizer.min(initialSlot, currentSlot), localizer.max(initialSlot, currentSlot));
        return _objectSpread2(_objectSpread2({}, selectRange), {}, {
          selecting: true,
          top: "".concat(selectRange.top, "%"),
          height: "".concat(selectRange.height, "%")
        });
      };
      var selectorClicksHandler = function selectorClicksHandler2(box, actionType) {
        if (!isEvent(_this.containerRef.current, box)) {
          var _selectionState = selectionState(box), startDate = _selectionState.startDate, endDate = _selectionState.endDate;
          _this._selectSlot({
            startDate,
            endDate,
            action: actionType,
            box
          });
        }
        _this.setState({
          selecting: false
        });
      };
      selector.on("selecting", maybeSelect);
      selector.on("selectStart", maybeSelect);
      selector.on("beforeSelect", function(box) {
        if (_this.props.selectable !== "ignoreEvents") return;
        return !isEvent(_this.containerRef.current, box);
      });
      selector.on("click", function(box) {
        return selectorClicksHandler(box, "click");
      });
      selector.on("doubleClick", function(box) {
        return selectorClicksHandler(box, "doubleClick");
      });
      selector.on("select", function(bounds) {
        if (_this.state.selecting) {
          _this._selectSlot(_objectSpread2(_objectSpread2({}, _this.state), {}, {
            action: "select",
            bounds
          }));
          _this.setState({
            selecting: false
          });
        }
      });
      selector.on("reset", function() {
        if (_this.state.selecting) {
          _this.setState({
            selecting: false
          });
        }
      });
    };
    _this._teardownSelectable = function() {
      if (!_this._selector) return;
      _this._selector.teardown();
      _this._selector = null;
    };
    _this._selectSlot = function(_ref3) {
      var startDate = _ref3.startDate, endDate = _ref3.endDate, action = _ref3.action, bounds = _ref3.bounds, box = _ref3.box;
      var current = startDate, slots = [];
      while (_this.props.localizer.lte(current, endDate)) {
        slots.push(current);
        current = new Date(+current + _this.props.step * 60 * 1e3);
      }
      notify(_this.props.onSelectSlot, {
        slots,
        start: startDate,
        end: endDate,
        resourceId: _this.props.resource,
        action,
        bounds,
        box
      });
    };
    _this._select = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this._doubleClick = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this._keyPress = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.slotMetrics = getSlotMetrics(_this.props);
    _this.containerRef = (0, import_react25.createRef)();
    return _this;
  }
  _inherits(DayColumn2, _React$Component);
  return _createClass(DayColumn2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
      if (this.props.isNow) {
        this.setTimeIndicatorPositionUpdateInterval();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
      this.clearTimeIndicatorInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.selectable && !prevProps.selectable) this._selectable();
      if (!this.props.selectable && prevProps.selectable) this._teardownSelectable();
      var _this$props3 = this.props, getNow2 = _this$props3.getNow, isNow = _this$props3.isNow, localizer = _this$props3.localizer, date2 = _this$props3.date, min3 = _this$props3.min, max3 = _this$props3.max;
      var getNowChanged = localizer.neq(prevProps.getNow(), getNow2(), "minutes");
      if (prevProps.isNow !== isNow || getNowChanged) {
        this.clearTimeIndicatorInterval();
        if (isNow) {
          var tail = !getNowChanged && localizer.eq(prevProps.date, date2, "minutes") && prevState.timeIndicatorPosition === this.state.timeIndicatorPosition;
          this.setTimeIndicatorPositionUpdateInterval(tail);
        }
      } else if (isNow && (localizer.neq(prevProps.min, min3, "minutes") || localizer.neq(prevProps.max, max3, "minutes"))) {
        this.positionTimeIndicator();
      }
    }
    /**
     * @param tail {Boolean} - whether `positionTimeIndicator` call should be
     *   deferred or called upon setting interval (`true` - if deferred);
     */
  }, {
    key: "setTimeIndicatorPositionUpdateInterval",
    value: function setTimeIndicatorPositionUpdateInterval() {
      var _this3 = this;
      var tail = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      if (!this.intervalTriggered && !tail) {
        this.positionTimeIndicator();
      }
      this._timeIndicatorTimeout = window.setTimeout(function() {
        _this3.intervalTriggered = true;
        _this3.positionTimeIndicator();
        _this3.setTimeIndicatorPositionUpdateInterval();
      }, 6e4);
    }
  }, {
    key: "clearTimeIndicatorInterval",
    value: function clearTimeIndicatorInterval() {
      this.intervalTriggered = false;
      window.clearTimeout(this._timeIndicatorTimeout);
    }
  }, {
    key: "positionTimeIndicator",
    value: function positionTimeIndicator() {
      var _this$props4 = this.props, min3 = _this$props4.min, max3 = _this$props4.max, getNow2 = _this$props4.getNow;
      var current = getNow2();
      if (current >= min3 && current <= max3) {
        var top2 = this.slotMetrics.getCurrentTimePosition(current);
        this.intervalTriggered = true;
        this.setState({
          timeIndicatorPosition: top2
        });
      } else {
        this.clearTimeIndicatorInterval();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, date2 = _this$props5.date, max3 = _this$props5.max, rtl = _this$props5.rtl, isNow = _this$props5.isNow, resource = _this$props5.resource, accessors = _this$props5.accessors, localizer = _this$props5.localizer, _this$props5$getters = _this$props5.getters, dayProp = _this$props5$getters.dayProp, getters = _objectWithoutProperties(_this$props5$getters, _excluded$5), _this$props5$componen = _this$props5.components, EventContainer = _this$props5$componen.eventContainerWrapper, TimeIndicatorWrapper = _this$props5$componen.timeIndicatorWrapper, components2 = _objectWithoutProperties(_this$props5$componen, _excluded2$1);
      this.slotMetrics = this.slotMetrics.update(this.props);
      var slotMetrics = this.slotMetrics;
      var _this$state = this.state, selecting = _this$state.selecting, top2 = _this$state.top, height2 = _this$state.height, startDate = _this$state.startDate, endDate = _this$state.endDate;
      var selectDates = {
        start: startDate,
        end: endDate
      };
      var _dayProp = dayProp(max3, resource), className = _dayProp.className, style2 = _dayProp.style;
      var timeIndicatorProps = {
        className: "rbc-current-time-indicator",
        style: {
          top: "".concat(this.state.timeIndicatorPosition, "%")
        }
      };
      var DayColumnWrapperComponent = components2.dayColumnWrapper || DayColumnWrapper$1;
      return import_react25.default.createElement(DayColumnWrapperComponent, {
        ref: this.containerRef,
        date: date2,
        style: style2,
        className: clsx_m_default(
          className,
          "rbc-day-slot",
          "rbc-time-column",
          isNow && "rbc-now",
          isNow && "rbc-today",
          // WHY
          selecting && "rbc-slot-selecting"
        ),
        slotMetrics,
        resource
      }, slotMetrics.groups.map(function(grp, idx) {
        return import_react25.default.createElement(TimeSlotGroup, {
          key: idx,
          group: grp,
          resource,
          getters,
          components: components2
        });
      }), import_react25.default.createElement(EventContainer, {
        localizer,
        resource,
        accessors,
        getters,
        components: components2,
        slotMetrics
      }, import_react25.default.createElement("div", {
        className: clsx_m_default("rbc-events-container", rtl && "rtl")
      }, this.renderEvents({
        events: this.props.backgroundEvents,
        isBackgroundEvent: true
      }), this.renderEvents({
        events: this.props.events
      }))), selecting && import_react25.default.createElement("div", {
        className: "rbc-slot-selection",
        style: {
          top: top2,
          height: height2
        }
      }, import_react25.default.createElement("span", null, localizer.format(selectDates, "selectRangeFormat"))), isNow && this.intervalTriggered && import_react25.default.createElement(TimeIndicatorWrapper, timeIndicatorProps, import_react25.default.createElement("div", timeIndicatorProps)));
    }
  }]);
}(import_react25.default.Component);
DayColumn.defaultProps = {
  dragThroughEvents: true,
  timeslots: 2
};
var ResourceHeader = function ResourceHeader2(_ref) {
  var label = _ref.label;
  return import_react25.default.createElement(import_react25.default.Fragment, null, label);
};
var TimeGridHeader = function(_React$Component) {
  function TimeGridHeader2() {
    var _this;
    _classCallCheck(this, TimeGridHeader2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TimeGridHeader2, [].concat(args));
    _this.handleHeaderClick = function(date2, view, e) {
      e.preventDefault();
      notify(_this.props.onDrillDown, [date2, view]);
    };
    _this.renderRow = function(resource) {
      var _this$props = _this.props, events = _this$props.events, rtl = _this$props.rtl, selectable = _this$props.selectable, getNow2 = _this$props.getNow, range2 = _this$props.range, getters = _this$props.getters, localizer = _this$props.localizer, accessors = _this$props.accessors, components2 = _this$props.components, resizable = _this$props.resizable;
      var resourceId = accessors.resourceId(resource);
      var eventsToDisplay = resource ? events.filter(function(event) {
        return accessors.resource(event) === resourceId;
      }) : events;
      return import_react25.default.createElement(DateContentRow, {
        isAllDay: true,
        rtl,
        getNow: getNow2,
        minRows: 2,
        maxRows: _this.props.allDayMaxRows + 1,
        range: range2,
        events: eventsToDisplay,
        resourceId,
        className: "rbc-allday-cell",
        selectable,
        selected: _this.props.selected,
        components: components2,
        accessors,
        getters,
        localizer,
        onSelect: _this.props.onSelectEvent,
        onShowMore: _this.props.onShowMore,
        onDoubleClick: _this.props.onDoubleClickEvent,
        onKeyPress: _this.props.onKeyPressEvent,
        onSelectSlot: _this.props.onSelectSlot,
        longPressThreshold: _this.props.longPressThreshold,
        resizable
      });
    };
    return _this;
  }
  _inherits(TimeGridHeader2, _React$Component);
  return _createClass(TimeGridHeader2, [{
    key: "renderHeaderCells",
    value: function renderHeaderCells(range2) {
      var _this2 = this;
      var _this$props2 = this.props, localizer = _this$props2.localizer, getDrilldownView = _this$props2.getDrilldownView, getNow2 = _this$props2.getNow, dayProp = _this$props2.getters.dayProp, _this$props2$componen = _this$props2.components.header, HeaderComponent = _this$props2$componen === void 0 ? Header : _this$props2$componen;
      var today = getNow2();
      return range2.map(function(date2, i) {
        var drilldownView = getDrilldownView(date2);
        var label = localizer.format(date2, "dayFormat");
        var _dayProp = dayProp(date2), className = _dayProp.className, style2 = _dayProp.style;
        var header = import_react25.default.createElement(HeaderComponent, {
          date: date2,
          label,
          localizer
        });
        return import_react25.default.createElement("div", {
          key: i,
          style: style2,
          className: clsx_m_default("rbc-header", className, localizer.isSameDate(date2, today) && "rbc-today")
        }, drilldownView ? import_react25.default.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function onClick(e) {
            return _this2.handleHeaderClick(date2, drilldownView, e);
          }
        }, header) : import_react25.default.createElement("span", null, header));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props3 = this.props, width = _this$props3.width, rtl = _this$props3.rtl, resources = _this$props3.resources, range2 = _this$props3.range, events = _this$props3.events, getNow2 = _this$props3.getNow, accessors = _this$props3.accessors, selectable = _this$props3.selectable, components2 = _this$props3.components, getters = _this$props3.getters, scrollRef = _this$props3.scrollRef, localizer = _this$props3.localizer, isOverflowing2 = _this$props3.isOverflowing, _this$props3$componen = _this$props3.components, TimeGutterHeader = _this$props3$componen.timeGutterHeader, _this$props3$componen2 = _this$props3$componen.resourceHeader, ResourceHeaderComponent = _this$props3$componen2 === void 0 ? ResourceHeader : _this$props3$componen2, resizable = _this$props3.resizable;
      var style2 = {};
      if (isOverflowing2) {
        style2[rtl ? "marginLeft" : "marginRight"] = "".concat(scrollbarSize() - 1, "px");
      }
      var groupedEvents = resources.groupEvents(events);
      return import_react25.default.createElement("div", {
        style: style2,
        ref: scrollRef,
        className: clsx_m_default("rbc-time-header", isOverflowing2 && "rbc-overflowing")
      }, import_react25.default.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width,
          minWidth: width,
          maxWidth: width
        }
      }, TimeGutterHeader && import_react25.default.createElement(TimeGutterHeader, null)), resources.map(function(_ref, idx) {
        var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], resource = _ref2[1];
        return import_react25.default.createElement("div", {
          className: "rbc-time-header-content",
          key: id || idx
        }, resource && import_react25.default.createElement("div", {
          className: "rbc-row rbc-row-resource",
          key: "resource_".concat(idx)
        }, import_react25.default.createElement("div", {
          className: "rbc-header"
        }, import_react25.default.createElement(ResourceHeaderComponent, {
          index: idx,
          label: accessors.resourceTitle(resource),
          resource
        }))), import_react25.default.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(range2.length <= 1 ? " rbc-time-header-cell-single-day" : "")
        }, _this3.renderHeaderCells(range2)), import_react25.default.createElement(DateContentRow, {
          isAllDay: true,
          rtl,
          getNow: getNow2,
          minRows: 2,
          maxRows: _this3.props.allDayMaxRows + 1,
          range: range2,
          events: groupedEvents.get(id) || [],
          resourceId: resource && id,
          className: "rbc-allday-cell",
          selectable,
          selected: _this3.props.selected,
          components: components2,
          accessors,
          getters,
          localizer,
          onSelect: _this3.props.onSelectEvent,
          onShowMore: _this3.props.onShowMore,
          onDoubleClick: _this3.props.onDoubleClickEvent,
          onKeyDown: _this3.props.onKeyPressEvent,
          onSelectSlot: _this3.props.onSelectSlot,
          longPressThreshold: _this3.props.longPressThreshold,
          resizable
        }));
      }));
    }
  }]);
}(import_react25.default.Component);
var TimeGridHeaderResources = function(_React$Component) {
  function TimeGridHeaderResources2() {
    var _this;
    _classCallCheck(this, TimeGridHeaderResources2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TimeGridHeaderResources2, [].concat(args));
    _this.handleHeaderClick = function(date2, view, e) {
      e.preventDefault();
      notify(_this.props.onDrillDown, [date2, view]);
    };
    return _this;
  }
  _inherits(TimeGridHeaderResources2, _React$Component);
  return _createClass(TimeGridHeaderResources2, [{
    key: "renderHeaderCells",
    value: function renderHeaderCells(range2) {
      var _this2 = this;
      var _this$props = this.props, localizer = _this$props.localizer, getDrilldownView = _this$props.getDrilldownView, getNow2 = _this$props.getNow, dayProp = _this$props.getters.dayProp, _this$props$component = _this$props.components, _this$props$component2 = _this$props$component.header, HeaderComponent = _this$props$component2 === void 0 ? Header : _this$props$component2, _this$props$component3 = _this$props$component.resourceHeader, ResourceHeaderComponent = _this$props$component3 === void 0 ? ResourceHeader : _this$props$component3, resources = _this$props.resources, accessors = _this$props.accessors, events = _this$props.events, rtl = _this$props.rtl, selectable = _this$props.selectable, components2 = _this$props.components, getters = _this$props.getters, resizable = _this$props.resizable;
      var today = getNow2();
      var groupedEvents = resources.groupEvents(events);
      return range2.map(function(date2, idx) {
        var drilldownView = getDrilldownView(date2);
        var label = localizer.format(date2, "dayFormat");
        var _dayProp = dayProp(date2), className = _dayProp.className, style2 = _dayProp.style;
        var header = import_react25.default.createElement(HeaderComponent, {
          date: date2,
          label,
          localizer
        });
        return import_react25.default.createElement("div", {
          key: idx,
          className: "rbc-time-header-content rbc-resource-grouping"
        }, import_react25.default.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(range2.length <= 1 ? " rbc-time-header-cell-single-day" : "")
        }, import_react25.default.createElement("div", {
          style: style2,
          className: clsx_m_default("rbc-header", className, localizer.isSameDate(date2, today) && "rbc-today")
        }, drilldownView ? import_react25.default.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function onClick(e) {
            return _this2.handleHeaderClick(date2, drilldownView, e);
          }
        }, header) : import_react25.default.createElement("span", null, header))), import_react25.default.createElement("div", {
          className: "rbc-row"
        }, resources.map(function(_ref, idx2) {
          var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], resource = _ref2[1];
          return import_react25.default.createElement("div", {
            key: "resource_".concat(id, "_").concat(idx2),
            className: clsx_m_default("rbc-header", className, localizer.isSameDate(date2, today) && "rbc-today")
          }, import_react25.default.createElement(ResourceHeaderComponent, {
            index: idx2,
            label: accessors.resourceTitle(resource),
            resource
          }));
        })), import_react25.default.createElement("div", {
          className: "rbc-row rbc-m-b-negative-3 rbc-h-full"
        }, resources.map(function(_ref3, idx2) {
          var _ref4 = _slicedToArray(_ref3, 2), id = _ref4[0], resource = _ref4[1];
          var filteredEvents = (groupedEvents.get(id) || []).filter(function(event) {
            return localizer.isSameDate(event.start, date2) || localizer.isSameDate(event.end, date2);
          });
          return import_react25.default.createElement(DateContentRow, {
            key: "resource_".concat(id, "_").concat(idx2),
            isAllDay: true,
            rtl,
            getNow: getNow2,
            minRows: 2,
            maxRows: _this2.props.allDayMaxRows + 1,
            range: [date2],
            events: filteredEvents,
            resourceId: resource && id,
            className: "rbc-allday-cell",
            selectable,
            selected: _this2.props.selected,
            components: components2,
            accessors,
            getters,
            localizer,
            onSelect: _this2.props.onSelectEvent,
            onShowMore: _this2.props.onShowMore,
            onDoubleClick: _this2.props.onDoubleClickEvent,
            onKeyDown: _this2.props.onKeyPressEvent,
            onSelectSlot: _this2.props.onSelectSlot,
            longPressThreshold: _this2.props.longPressThreshold,
            resizable
          });
        })));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, width = _this$props2.width, rtl = _this$props2.rtl, range2 = _this$props2.range, scrollRef = _this$props2.scrollRef, isOverflowing2 = _this$props2.isOverflowing, TimeGutterHeader = _this$props2.components.timeGutterHeader;
      var style2 = {};
      if (isOverflowing2) {
        style2[rtl ? "marginLeft" : "marginRight"] = "".concat(scrollbarSize() - 1, "px");
      }
      return import_react25.default.createElement("div", {
        style: style2,
        ref: scrollRef,
        className: clsx_m_default("rbc-time-header", isOverflowing2 && "rbc-overflowing")
      }, import_react25.default.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width,
          minWidth: width,
          maxWidth: width
        }
      }, TimeGutterHeader && import_react25.default.createElement(TimeGutterHeader, null)), this.renderHeaderCells(range2));
    }
  }]);
}(import_react25.default.Component);
function adjustForDST(_ref) {
  var min3 = _ref.min, max3 = _ref.max, localizer = _ref.localizer;
  if (localizer.getTimezoneOffset(min3) !== localizer.getTimezoneOffset(max3)) {
    return {
      start: localizer.add(min3, -1, "day"),
      end: localizer.add(max3, -1, "day")
    };
  }
  return {
    start: min3,
    end: max3
  };
}
var TimeGutter = function TimeGutter2(_ref2) {
  var min3 = _ref2.min, max3 = _ref2.max, timeslots = _ref2.timeslots, step = _ref2.step, localizer = _ref2.localizer, getNow2 = _ref2.getNow, resource = _ref2.resource, components2 = _ref2.components, getters = _ref2.getters, gutterRef = _ref2.gutterRef;
  var TimeGutterWrapper = components2.timeGutterWrapper;
  var _useMemo = (0, import_react25.useMemo)(
    function() {
      return adjustForDST({
        min: min3,
        max: max3,
        localizer
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [min3 === null || min3 === void 0 ? void 0 : min3.toISOString(), max3 === null || max3 === void 0 ? void 0 : max3.toISOString(), localizer]
  ), start2 = _useMemo.start, end2 = _useMemo.end;
  var _useState = (0, import_react25.useState)(getSlotMetrics({
    min: start2,
    max: end2,
    timeslots,
    step,
    localizer
  })), _useState2 = _slicedToArray(_useState, 2), slotMetrics = _useState2[0], setSlotMetrics = _useState2[1];
  (0, import_react25.useEffect)(function() {
    if (slotMetrics) {
      setSlotMetrics(slotMetrics.update({
        min: start2,
        max: end2,
        timeslots,
        step,
        localizer
      }));
    }
  }, [start2 === null || start2 === void 0 ? void 0 : start2.toISOString(), end2 === null || end2 === void 0 ? void 0 : end2.toISOString(), timeslots, step]);
  var renderSlot = (0, import_react25.useCallback)(function(value, idx) {
    if (idx) return null;
    var isNow = slotMetrics.dateIsInGroup(getNow2(), idx);
    return import_react25.default.createElement("span", {
      className: clsx_m_default("rbc-label", isNow && "rbc-now")
    }, localizer.format(value, "timeGutterFormat"));
  }, [slotMetrics, localizer, getNow2]);
  return import_react25.default.createElement(TimeGutterWrapper, {
    slotMetrics
  }, import_react25.default.createElement("div", {
    className: "rbc-time-gutter rbc-time-column",
    ref: gutterRef
  }, slotMetrics.groups.map(function(grp, idx) {
    return import_react25.default.createElement(TimeSlotGroup, {
      key: idx,
      group: grp,
      resource,
      components: components2,
      renderSlot,
      getters
    });
  })));
};
var TimeGutter$1 = import_react25.default.forwardRef(function(props, ref) {
  return import_react25.default.createElement(TimeGutter, Object.assign({
    gutterRef: ref
  }, props));
});
var NONE = {};
function Resources(resources, accessors) {
  return {
    map: function map(fn3) {
      if (!resources) return [fn3([NONE, null], 0)];
      return resources.map(function(resource, idx) {
        return fn3([accessors.resourceId(resource), resource], idx);
      });
    },
    groupEvents: function groupEvents(events) {
      var eventsByResource = /* @__PURE__ */ new Map();
      if (!resources) {
        eventsByResource.set(NONE, events);
        return eventsByResource;
      }
      events.forEach(function(event) {
        var id = accessors.resource(event) || NONE;
        if (Array.isArray(id)) {
          id.forEach(function(item) {
            var resourceEvents2 = eventsByResource.get(item) || [];
            resourceEvents2.push(event);
            eventsByResource.set(item, resourceEvents2);
          });
        } else {
          var resourceEvents = eventsByResource.get(id) || [];
          resourceEvents.push(event);
          eventsByResource.set(id, resourceEvents);
        }
      });
      return eventsByResource;
    }
  };
}
var TimeGrid = function(_Component) {
  function TimeGrid2(props) {
    var _this;
    _classCallCheck(this, TimeGrid2);
    _this = _callSuper(this, TimeGrid2, [props]);
    _this.handleScroll = function(e) {
      if (_this.scrollRef.current) {
        _this.scrollRef.current.scrollLeft = e.target.scrollLeft;
      }
    };
    _this.handleResize = function() {
      cancel(_this.rafHandle);
      _this.rafHandle = request(_this.checkOverflow);
    };
    _this.handleKeyPressEvent = function() {
      _this.clearSelection();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleSelectEvent = function() {
      _this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function() {
      _this.clearSelection();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleShowMore = function(events, date2, cell, slot, target) {
      var _this$props = _this.props, popup = _this$props.popup, onDrillDown = _this$props.onDrillDown, onShowMore = _this$props.onShowMore, getDrilldownView = _this$props.getDrilldownView, doShowMoreDrillDown = _this$props.doShowMoreDrillDown;
      _this.clearSelection();
      if (popup) {
        var position2 = position(cell, _this.containerRef.current);
        _this.setState({
          overlay: {
            date: date2,
            events,
            position: _objectSpread2(_objectSpread2({}, position2), {}, {
              width: "200px"
            }),
            target
          }
        });
      } else if (doShowMoreDrillDown) {
        notify(onDrillDown, [date2, getDrilldownView(date2) || views.DAY]);
      }
      notify(onShowMore, [events, date2, slot]);
    };
    _this.handleSelectAllDaySlot = function(slots, slotInfo) {
      var onSelectSlot = _this.props.onSelectSlot;
      var start2 = new Date(slots[0]);
      var end2 = new Date(slots[slots.length - 1]);
      end2.setDate(slots[slots.length - 1].getDate() + 1);
      notify(onSelectSlot, {
        slots,
        start: start2,
        end: end2,
        action: slotInfo.action,
        resourceId: slotInfo.resourceId
      });
    };
    _this.overlayDisplay = function() {
      _this.setState({
        overlay: null
      });
    };
    _this.checkOverflow = function() {
      if (_this._updatingOverflow) return;
      var content = _this.contentRef.current;
      if (!(content !== null && content !== void 0 && content.scrollHeight)) return;
      var isOverflowing2 = content.scrollHeight > content.clientHeight;
      if (_this.state.isOverflowing !== isOverflowing2) {
        _this._updatingOverflow = true;
        _this.setState({
          isOverflowing: isOverflowing2
        }, function() {
          _this._updatingOverflow = false;
        });
      }
    };
    _this.memoizedResources = memoizeOne(function(resources, accessors) {
      return Resources(resources, accessors);
    });
    _this.state = {
      gutterWidth: void 0,
      isOverflowing: null
    };
    _this.scrollRef = import_react25.default.createRef();
    _this.contentRef = import_react25.default.createRef();
    _this.containerRef = import_react25.default.createRef();
    _this._scrollRatio = null;
    _this.gutterRef = (0, import_react25.createRef)();
    return _this;
  }
  _inherits(TimeGrid2, _Component);
  return _createClass(TimeGrid2, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      this.checkOverflow();
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.width == null) {
        this.measureGutter();
      }
      this.calculateScroll();
      this.applyScroll();
      window.addEventListener("resize", this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
      cancel(this.rafHandle);
      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.applyScroll();
    }
  }, {
    key: "renderDayColumn",
    value: function renderDayColumn(date2, id, resource, groupedEvents, groupedBackgroundEvents, localizer, accessors, components2, dayLayoutAlgorithm, now) {
      var _this$props2 = this.props, min3 = _this$props2.min, max3 = _this$props2.max;
      var daysEvents = (groupedEvents.get(id) || []).filter(function(event) {
        return localizer.inRange(date2, accessors.start(event), accessors.end(event), "day");
      });
      var daysBackgroundEvents = (groupedBackgroundEvents.get(id) || []).filter(function(event) {
        return localizer.inRange(date2, accessors.start(event), accessors.end(event), "day");
      });
      return import_react25.default.createElement(DayColumn, Object.assign({}, this.props, {
        localizer,
        min: localizer.merge(date2, min3),
        max: localizer.merge(date2, max3),
        resource: resource && id,
        components: components2,
        isNow: localizer.isSameDate(date2, now),
        key: "".concat(id, "-").concat(date2),
        date: date2,
        events: daysEvents,
        backgroundEvents: daysBackgroundEvents,
        dayLayoutAlgorithm
      }));
    }
  }, {
    key: "renderResourcesFirst",
    value: function renderResourcesFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer, accessors, now, components2, dayLayoutAlgorithm) {
      var _this2 = this;
      return resources.map(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], resource = _ref2[1];
        return range2.map(function(date2) {
          return _this2.renderDayColumn(date2, id, resource, groupedEvents, groupedBackgroundEvents, localizer, accessors, components2, dayLayoutAlgorithm, now);
        });
      });
    }
  }, {
    key: "renderRangeFirst",
    value: function renderRangeFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer, accessors, now, components2, dayLayoutAlgorithm) {
      var _this3 = this;
      return range2.map(function(date2) {
        return import_react25.default.createElement("div", {
          style: {
            display: "flex",
            minHeight: "100%",
            flex: 1
          },
          key: date2
        }, resources.map(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), id = _ref4[0], resource = _ref4[1];
          return import_react25.default.createElement("div", {
            style: {
              flex: 1
            },
            key: accessors.resourceId(resource)
          }, _this3.renderDayColumn(date2, id, resource, groupedEvents, groupedBackgroundEvents, localizer, accessors, components2, dayLayoutAlgorithm, now));
        }));
      });
    }
  }, {
    key: "renderEvents",
    value: function renderEvents(range2, events, backgroundEvents, now) {
      var _this$props3 = this.props, accessors = _this$props3.accessors, localizer = _this$props3.localizer, resourceGroupingLayout = _this$props3.resourceGroupingLayout, components2 = _this$props3.components, dayLayoutAlgorithm = _this$props3.dayLayoutAlgorithm;
      var resources = this.memoizedResources(this.props.resources, accessors);
      var groupedEvents = resources.groupEvents(events);
      var groupedBackgroundEvents = resources.groupEvents(backgroundEvents);
      if (!resourceGroupingLayout) {
        return this.renderResourcesFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer, accessors, now, components2, dayLayoutAlgorithm);
      } else {
        return this.renderRangeFirst(range2, resources, groupedEvents, groupedBackgroundEvents, localizer, accessors, now, components2, dayLayoutAlgorithm);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$allDayMax;
      var _this$props4 = this.props, events = _this$props4.events, backgroundEvents = _this$props4.backgroundEvents, range2 = _this$props4.range, width = _this$props4.width, rtl = _this$props4.rtl, selected = _this$props4.selected, getNow2 = _this$props4.getNow, resources = _this$props4.resources, components2 = _this$props4.components, accessors = _this$props4.accessors, getters = _this$props4.getters, localizer = _this$props4.localizer, min3 = _this$props4.min, max3 = _this$props4.max, showMultiDayTimes = _this$props4.showMultiDayTimes, longPressThreshold = _this$props4.longPressThreshold, resizable = _this$props4.resizable, resourceGroupingLayout = _this$props4.resourceGroupingLayout;
      width = width || this.state.gutterWidth;
      var start2 = range2[0], end2 = range2[range2.length - 1];
      this.slots = range2.length;
      var allDayEvents = [], rangeEvents = [], rangeBackgroundEvents = [];
      events.forEach(function(event) {
        if (inRange2(event, start2, end2, accessors, localizer)) {
          var eStart = accessors.start(event), eEnd = accessors.end(event);
          if (accessors.allDay(event) || localizer.startAndEndAreDateOnly(eStart, eEnd) || !showMultiDayTimes && !localizer.isSameDate(eStart, eEnd)) {
            allDayEvents.push(event);
          } else {
            rangeEvents.push(event);
          }
        }
      });
      backgroundEvents.forEach(function(event) {
        if (inRange2(event, start2, end2, accessors, localizer)) {
          rangeBackgroundEvents.push(event);
        }
      });
      allDayEvents.sort(function(a, b) {
        return sortEvents(a, b, accessors, localizer);
      });
      var headerProps = {
        range: range2,
        events: allDayEvents,
        width,
        rtl,
        getNow: getNow2,
        localizer,
        selected,
        allDayMaxRows: this.props.showAllEvents ? Infinity : (_this$props$allDayMax = this.props.allDayMaxRows) !== null && _this$props$allDayMax !== void 0 ? _this$props$allDayMax : Infinity,
        resources: this.memoizedResources(resources, accessors),
        selectable: this.props.selectable,
        accessors,
        getters,
        components: components2,
        scrollRef: this.scrollRef,
        isOverflowing: this.state.isOverflowing,
        longPressThreshold,
        onSelectSlot: this.handleSelectAllDaySlot,
        onSelectEvent: this.handleSelectEvent,
        onShowMore: this.handleShowMore,
        onDoubleClickEvent: this.props.onDoubleClickEvent,
        onKeyPressEvent: this.props.onKeyPressEvent,
        onDrillDown: this.props.onDrillDown,
        getDrilldownView: this.props.getDrilldownView,
        resizable
      };
      return import_react25.default.createElement("div", {
        className: clsx_m_default("rbc-time-view", resources && "rbc-time-view-resources"),
        ref: this.containerRef
      }, resources && resources.length > 1 && resourceGroupingLayout ? import_react25.default.createElement(TimeGridHeaderResources, headerProps) : import_react25.default.createElement(TimeGridHeader, headerProps), this.props.popup && this.renderOverlay(), import_react25.default.createElement("div", {
        ref: this.contentRef,
        className: "rbc-time-content",
        onScroll: this.handleScroll
      }, import_react25.default.createElement(TimeGutter$1, {
        date: start2,
        ref: this.gutterRef,
        localizer,
        min: localizer.merge(start2, min3),
        max: localizer.merge(start2, max3),
        step: this.props.step,
        getNow: this.props.getNow,
        timeslots: this.props.timeslots,
        components: components2,
        className: "rbc-time-gutter",
        getters
      }), this.renderEvents(range2, rangeEvents, rangeBackgroundEvents, getNow2())));
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var _this$state$overlay, _this$state, _this4 = this;
      var overlay = (_this$state$overlay = (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.overlay) !== null && _this$state$overlay !== void 0 ? _this$state$overlay : {};
      var _this$props5 = this.props, accessors = _this$props5.accessors, localizer = _this$props5.localizer, components2 = _this$props5.components, getters = _this$props5.getters, selected = _this$props5.selected, popupOffset = _this$props5.popupOffset, handleDragStart = _this$props5.handleDragStart;
      var onHide2 = function onHide3() {
        return _this4.setState({
          overlay: null
        });
      };
      return import_react25.default.createElement(PopOverlay, {
        overlay,
        accessors,
        localizer,
        components: components2,
        getters,
        selected,
        popupOffset,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart,
        show: !!overlay.position,
        overlayDisplay: this.overlayDisplay,
        onHide: onHide2
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }
  }, {
    key: "measureGutter",
    value: function measureGutter() {
      var _this5 = this;
      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }
      this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function() {
        var _this5$gutterRef;
        var width = (_this5$gutterRef = _this5.gutterRef) !== null && _this5$gutterRef !== void 0 && _this5$gutterRef.current ? getWidth(_this5.gutterRef.current) : void 0;
        if (width && _this5.state.gutterWidth !== width) {
          _this5.setState({
            gutterWidth: width
          });
        }
      });
    }
  }, {
    key: "applyScroll",
    value: function applyScroll() {
      if (this._scrollRatio != null && this.props.enableAutoScroll === true) {
        var content = this.contentRef.current;
        content.scrollTop = content.scrollHeight * this._scrollRatio;
        this._scrollRatio = null;
      }
    }
  }, {
    key: "calculateScroll",
    value: function calculateScroll() {
      var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      var min3 = props.min, max3 = props.max, scrollToTime = props.scrollToTime, localizer = props.localizer;
      var diffMillis = localizer.diff(localizer.merge(scrollToTime, min3), scrollToTime, "milliseconds");
      var totalMillis = localizer.diff(min3, max3, "milliseconds");
      this._scrollRatio = diffMillis / totalMillis;
    }
  }]);
}(import_react25.Component);
TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2,
  // To be compatible with old versions, default as `false`.
  resourceGroupingLayout: false
};
var _excluded$4 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
var Day = function(_React$Component) {
  function Day2() {
    _classCallCheck(this, Day2);
    return _callSuper(this, Day2, arguments);
  }
  _inherits(Day2, _React$Component);
  return _createClass(Day2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, date2 = _this$props.date, localizer = _this$props.localizer, _this$props$min = _this$props.min, min3 = _this$props$min === void 0 ? localizer.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max3 = _this$props$max === void 0 ? localizer.endOf(/* @__PURE__ */ new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$scrollToT, _this$props$enableAut = _this$props.enableAutoScroll, enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut, props = _objectWithoutProperties(_this$props, _excluded$4);
      var range2 = Day2.range(date2, {
        localizer
      });
      return import_react25.default.createElement(TimeGrid, Object.assign({}, props, {
        range: range2,
        eventOffset: 10,
        localizer,
        min: min3,
        max: max3,
        scrollToTime,
        enableAutoScroll
      }));
    }
  }]);
}(import_react25.default.Component);
Day.range = function(date2, _ref) {
  var localizer = _ref.localizer;
  return [localizer.startOf(date2, "day")];
};
Day.navigate = function(date2, action, _ref2) {
  var localizer = _ref2.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer.add(date2, -1, "day");
    case navigate.NEXT:
      return localizer.add(date2, 1, "day");
    default:
      return date2;
  }
};
Day.title = function(date2, _ref3) {
  var localizer = _ref3.localizer;
  return localizer.format(date2, "dayHeaderFormat");
};
var _excluded$3 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
var Week = function(_React$Component) {
  function Week2() {
    _classCallCheck(this, Week2);
    return _callSuper(this, Week2, arguments);
  }
  _inherits(Week2, _React$Component);
  return _createClass(Week2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, date2 = _this$props.date, localizer = _this$props.localizer, _this$props$min = _this$props.min, min3 = _this$props$min === void 0 ? localizer.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max3 = _this$props$max === void 0 ? localizer.endOf(/* @__PURE__ */ new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$scrollToT, _this$props$enableAut = _this$props.enableAutoScroll, enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut, props = _objectWithoutProperties(_this$props, _excluded$3);
      var range2 = Week2.range(date2, this.props);
      return import_react25.default.createElement(TimeGrid, Object.assign({}, props, {
        range: range2,
        eventOffset: 15,
        localizer,
        min: min3,
        max: max3,
        scrollToTime,
        enableAutoScroll
      }));
    }
  }]);
}(import_react25.default.Component);
Week.defaultProps = TimeGrid.defaultProps;
Week.navigate = function(date2, action, _ref) {
  var localizer = _ref.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer.add(date2, -1, "week");
    case navigate.NEXT:
      return localizer.add(date2, 1, "week");
    default:
      return date2;
  }
};
Week.range = function(date2, _ref2) {
  var localizer = _ref2.localizer;
  var firstOfWeek = localizer.startOfWeek();
  var start2 = localizer.startOf(date2, "week", firstOfWeek);
  var end2 = localizer.endOf(date2, "week", firstOfWeek);
  return localizer.range(start2, end2);
};
Week.title = function(date2, _ref3) {
  var localizer = _ref3.localizer;
  var _Week$range = Week.range(date2, {
    localizer
  }), _Week$range2 = _toArray(_Week$range), start2 = _Week$range2[0], rest = _Week$range2.slice(1);
  return localizer.format({
    start: start2,
    end: rest.pop()
  }, "dayRangeHeaderFormat");
};
var _excluded$2 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function workWeekRange(date2, options) {
  return Week.range(date2, options).filter(function(d) {
    return [6, 0].indexOf(d.getDay()) === -1;
  });
}
var WorkWeek = function(_React$Component) {
  function WorkWeek2() {
    _classCallCheck(this, WorkWeek2);
    return _callSuper(this, WorkWeek2, arguments);
  }
  _inherits(WorkWeek2, _React$Component);
  return _createClass(WorkWeek2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, date2 = _this$props.date, localizer = _this$props.localizer, _this$props$min = _this$props.min, min3 = _this$props$min === void 0 ? localizer.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max3 = _this$props$max === void 0 ? localizer.endOf(/* @__PURE__ */ new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(/* @__PURE__ */ new Date(), "day") : _this$props$scrollToT, _this$props$enableAut = _this$props.enableAutoScroll, enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut, props = _objectWithoutProperties(_this$props, _excluded$2);
      var range2 = workWeekRange(date2, this.props);
      return import_react25.default.createElement(TimeGrid, Object.assign({}, props, {
        range: range2,
        eventOffset: 15,
        localizer,
        min: min3,
        max: max3,
        scrollToTime,
        enableAutoScroll
      }));
    }
  }]);
}(import_react25.default.Component);
WorkWeek.defaultProps = TimeGrid.defaultProps;
WorkWeek.range = workWeekRange;
WorkWeek.navigate = Week.navigate;
WorkWeek.title = function(date2, _ref) {
  var localizer = _ref.localizer;
  var _workWeekRange = workWeekRange(date2, {
    localizer
  }), _workWeekRange2 = _toArray(_workWeekRange), start2 = _workWeekRange2[0], rest = _workWeekRange2.slice(1);
  return localizer.format({
    start: start2,
    end: rest.pop()
  }, "dayRangeHeaderFormat");
};
var DEFAULT_LENGTH = 30;
function Agenda(_ref) {
  var accessors = _ref.accessors, components2 = _ref.components, date2 = _ref.date, events = _ref.events, getters = _ref.getters, _ref$length = _ref.length, length = _ref$length === void 0 ? DEFAULT_LENGTH : _ref$length, localizer = _ref.localizer, onDoubleClickEvent = _ref.onDoubleClickEvent, onSelectEvent = _ref.onSelectEvent, selected = _ref.selected;
  var headerRef = (0, import_react25.useRef)(null);
  var dateColRef = (0, import_react25.useRef)(null);
  var timeColRef = (0, import_react25.useRef)(null);
  var contentRef = (0, import_react25.useRef)(null);
  var tbodyRef = (0, import_react25.useRef)(null);
  (0, import_react25.useEffect)(function() {
    _adjustHeader();
  });
  var renderDay = function renderDay2(day2, events2, dayKey) {
    var Event2 = components2.event, AgendaDate = components2.date;
    events2 = events2.filter(function(e) {
      return inRange2(e, localizer.startOf(day2, "day"), localizer.endOf(day2, "day"), accessors, localizer);
    });
    return events2.map(function(event, idx) {
      var title = accessors.title(event);
      var end3 = accessors.end(event);
      var start2 = accessors.start(event);
      var userProps = getters.eventProp(event, start2, end3, isSelected(event, selected));
      var dateLabel = idx === 0 && localizer.format(day2, "agendaDateFormat");
      var first = idx === 0 ? import_react25.default.createElement("td", {
        rowSpan: events2.length,
        className: "rbc-agenda-date-cell"
      }, AgendaDate ? import_react25.default.createElement(AgendaDate, {
        day: day2,
        label: dateLabel
      }) : dateLabel) : false;
      return import_react25.default.createElement("tr", {
        key: dayKey + "_" + idx,
        className: userProps.className,
        style: userProps.style
      }, first, import_react25.default.createElement("td", {
        className: "rbc-agenda-time-cell"
      }, timeRangeLabel(day2, event)), import_react25.default.createElement("td", {
        className: "rbc-agenda-event-cell",
        onClick: function onClick(e) {
          return onSelectEvent && onSelectEvent(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return onDoubleClickEvent && onDoubleClickEvent(event, e);
        }
      }, Event2 ? import_react25.default.createElement(Event2, {
        event,
        title
      }) : title));
    }, []);
  };
  var timeRangeLabel = function timeRangeLabel2(day2, event) {
    var labelClass = "", TimeComponent = components2.time, label = localizer.messages.allDay;
    var end3 = accessors.end(event);
    var start2 = accessors.start(event);
    if (!accessors.allDay(event)) {
      if (localizer.eq(start2, end3)) {
        label = localizer.format(start2, "agendaTimeFormat");
      } else if (localizer.isSameDate(start2, end3)) {
        label = localizer.format({
          start: start2,
          end: end3
        }, "agendaTimeRangeFormat");
      } else if (localizer.isSameDate(day2, start2)) {
        label = localizer.format(start2, "agendaTimeFormat");
      } else if (localizer.isSameDate(day2, end3)) {
        label = localizer.format(end3, "agendaTimeFormat");
      }
    }
    if (localizer.gt(day2, start2, "day")) labelClass = "rbc-continues-prior";
    if (localizer.lt(day2, end3, "day")) labelClass += " rbc-continues-after";
    return import_react25.default.createElement("span", {
      className: labelClass.trim()
    }, TimeComponent ? import_react25.default.createElement(TimeComponent, {
      event,
      day: day2,
      label
    }) : label);
  };
  var _adjustHeader = function _adjustHeader2() {
    if (!tbodyRef.current) return;
    var header = headerRef.current;
    var firstRow = tbodyRef.current.firstChild;
    if (!firstRow) return;
    var isOverflowing2 = contentRef.current.scrollHeight > contentRef.current.clientHeight;
    var _widths = [];
    var widths = _widths;
    _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])];
    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = _widths[0] + "px";
      timeColRef.current.style.width = _widths[1] + "px";
    }
    if (isOverflowing2) {
      addClass(header, "rbc-header-overflowing");
      header.style.marginRight = scrollbarSize() + "px";
    } else {
      removeClass(header, "rbc-header-overflowing");
    }
  };
  var messages2 = localizer.messages;
  var end2 = localizer.add(date2, length, "day");
  var range2 = localizer.range(date2, end2, "day");
  events = events.filter(function(event) {
    return inRange2(event, localizer.startOf(date2, "day"), localizer.endOf(end2, "day"), accessors, localizer);
  });
  events.sort(function(a, b) {
    return +accessors.start(a) - +accessors.start(b);
  });
  return import_react25.default.createElement("div", {
    className: "rbc-agenda-view"
  }, events.length !== 0 ? import_react25.default.createElement(import_react25.default.Fragment, null, import_react25.default.createElement("table", {
    ref: headerRef,
    className: "rbc-agenda-table"
  }, import_react25.default.createElement("thead", null, import_react25.default.createElement("tr", null, import_react25.default.createElement("th", {
    className: "rbc-header",
    ref: dateColRef
  }, messages2.date), import_react25.default.createElement("th", {
    className: "rbc-header",
    ref: timeColRef
  }, messages2.time), import_react25.default.createElement("th", {
    className: "rbc-header"
  }, messages2.event)))), import_react25.default.createElement("div", {
    className: "rbc-agenda-content",
    ref: contentRef
  }, import_react25.default.createElement("table", {
    className: "rbc-agenda-table"
  }, import_react25.default.createElement("tbody", {
    ref: tbodyRef
  }, range2.map(function(day2, idx) {
    return renderDay(day2, events, idx);
  }))))) : import_react25.default.createElement("span", {
    className: "rbc-agenda-empty"
  }, messages2.noEventsInRange));
}
Agenda.range = function(start2, _ref2) {
  var _ref2$length = _ref2.length, length = _ref2$length === void 0 ? DEFAULT_LENGTH : _ref2$length, localizer = _ref2.localizer;
  var end2 = localizer.add(start2, length, "day");
  return {
    start: start2,
    end: end2
  };
};
Agenda.navigate = function(date2, action, _ref3) {
  var _ref3$length = _ref3.length, length = _ref3$length === void 0 ? DEFAULT_LENGTH : _ref3$length, localizer = _ref3.localizer;
  switch (action) {
    case navigate.PREVIOUS:
      return localizer.add(date2, -length, "day");
    case navigate.NEXT:
      return localizer.add(date2, length, "day");
    default:
      return date2;
  }
};
Agenda.title = function(start2, _ref4) {
  var _ref4$length = _ref4.length, length = _ref4$length === void 0 ? DEFAULT_LENGTH : _ref4$length, localizer = _ref4.localizer;
  var end2 = localizer.add(start2, length, "day");
  return localizer.format({
    start: start2,
    end: end2
  }, "agendaHeaderFormat");
};
var VIEWS = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, views.MONTH, MonthView), views.WEEK, Week), views.WORK_WEEK, WorkWeek), views.DAY, Day), views.AGENDA, Agenda);
var _excluded$1 = ["action", "date", "today"];
function moveDate(View, _ref) {
  var action = _ref.action, date2 = _ref.date, today = _ref.today, props = _objectWithoutProperties(_ref, _excluded$1);
  View = typeof View === "string" ? VIEWS[View] : View;
  switch (action) {
    case navigate.TODAY:
      date2 = today || /* @__PURE__ */ new Date();
      break;
    case navigate.DATE:
      break;
    default:
      (0, import_invariant3.default)(View && typeof View.navigate === "function", "Calendar View components must implement a static `.navigate(date, action)` method.s");
      date2 = View.navigate(date2, action, props);
  }
  return date2;
}
function accessor(data, field) {
  var value = null;
  if (typeof field === "function") value = field(data);
  else if (typeof field === "string" && _typeof(data) === "object" && data != null && field in data) value = data[field];
  return value;
}
var wrapAccessor = function wrapAccessor2(acc) {
  return function(data) {
    return accessor(data, acc);
  };
};
var _excluded = ["view", "date", "getNow", "onNavigate"];
var _excluded2 = ["view", "toolbar", "events", "backgroundEvents", "resourceGroupingLayout", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function viewNames(_views) {
  if (Array.isArray(_views)) {
    return _views;
  }
  var views2 = [];
  for (var _i = 0, _Object$entries = Object.entries(_views); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
    if (value) {
      views2.push(key);
    }
  }
  return views2;
}
function isValidView(view, _ref) {
  var _views = _ref.views;
  var names = viewNames(_views);
  return names.indexOf(view) !== -1;
}
var Calendar = function(_React$Component) {
  function Calendar2() {
    var _this;
    _classCallCheck(this, Calendar2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Calendar2, [].concat(_args));
    _this.getViews = function() {
      var views2 = _this.props.views;
      if (Array.isArray(views2)) {
        return (0, import_transform.default)(views2, function(obj, name) {
          return obj[name] = VIEWS[name];
        }, {});
      }
      if (_typeof(views2) === "object") {
        return (0, import_mapValues.default)(views2, function(value, key) {
          if (value === true) {
            return VIEWS[key];
          }
          return value;
        });
      }
      return VIEWS;
    };
    _this.getView = function() {
      var views2 = _this.getViews();
      return views2[_this.props.view];
    };
    _this.getDrilldownView = function(date2) {
      var _this$props = _this.props, view = _this$props.view, drilldownView = _this$props.drilldownView, getDrilldownView = _this$props.getDrilldownView;
      if (!getDrilldownView) return drilldownView;
      return getDrilldownView(date2, view, Object.keys(_this.getViews()));
    };
    _this.handleRangeChange = function(date2, viewComponent, view) {
      var _this$props2 = _this.props, onRangeChange = _this$props2.onRangeChange, localizer = _this$props2.localizer;
      if (onRangeChange) {
        if (viewComponent.range) {
          onRangeChange(viewComponent.range(date2, {
            localizer
          }), view);
        } else {
          if (true) {
            console.error("onRangeChange prop not supported for this view");
          }
        }
      }
    };
    _this.handleNavigate = function(action, newDate) {
      var _this$props3 = _this.props, view = _this$props3.view, date2 = _this$props3.date, getNow2 = _this$props3.getNow, onNavigate = _this$props3.onNavigate, props = _objectWithoutProperties(_this$props3, _excluded);
      var ViewComponent = _this.getView();
      var today = getNow2();
      date2 = moveDate(ViewComponent, _objectSpread2(_objectSpread2({}, props), {}, {
        action,
        date: newDate || date2 || today,
        today
      }));
      onNavigate(date2, view, action);
      _this.handleRangeChange(date2, ViewComponent);
    };
    _this.handleViewChange = function(view) {
      if (view !== _this.props.view && isValidView(view, _this.props)) {
        _this.props.onView(view);
      }
      var views2 = _this.getViews();
      _this.handleRangeChange(_this.props.date || _this.props.getNow(), views2[view], view);
    };
    _this.handleSelectEvent = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleSelectSlot = function(slotInfo) {
      notify(_this.props.onSelectSlot, slotInfo);
    };
    _this.handleDrillDown = function(date2, view) {
      var onDrillDown = _this.props.onDrillDown;
      if (onDrillDown) {
        onDrillDown(date2, view, _this.drilldownView);
        return;
      }
      if (view) _this.handleViewChange(view);
      _this.handleNavigate(navigate.DATE, date2);
    };
    _this.state = {
      context: Calendar2.getContext(_this.props)
    };
    return _this;
  }
  _inherits(Calendar2, _React$Component);
  return _createClass(Calendar2, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props, view = _this$props4.view, toolbar = _this$props4.toolbar, events = _this$props4.events, backgroundEvents = _this$props4.backgroundEvents, resourceGroupingLayout = _this$props4.resourceGroupingLayout, style2 = _this$props4.style, className = _this$props4.className, elementProps = _this$props4.elementProps, current = _this$props4.date, getNow2 = _this$props4.getNow, length = _this$props4.length, showMultiDayTimes = _this$props4.showMultiDayTimes, onShowMore = _this$props4.onShowMore, doShowMoreDrillDown = _this$props4.doShowMoreDrillDown;
      _this$props4.components;
      _this$props4.formats;
      _this$props4.messages;
      _this$props4.culture;
      var props = _objectWithoutProperties(_this$props4, _excluded2);
      current = current || getNow2();
      var View = this.getView();
      var _this$state$context = this.state.context, accessors = _this$state$context.accessors, components2 = _this$state$context.components, getters = _this$state$context.getters, localizer = _this$state$context.localizer, viewNames2 = _this$state$context.viewNames;
      var CalToolbar = components2.toolbar || Toolbar;
      var label = View.title(current, {
        localizer,
        length
      });
      return import_react25.default.createElement("div", Object.assign({}, elementProps, {
        className: clsx_m_default(className, "rbc-calendar", props.rtl && "rbc-rtl"),
        style: style2
      }), toolbar && import_react25.default.createElement(CalToolbar, {
        date: current,
        view,
        views: viewNames2,
        label,
        onView: this.handleViewChange,
        onNavigate: this.handleNavigate,
        localizer
      }), import_react25.default.createElement(View, Object.assign({}, props, {
        events,
        backgroundEvents,
        date: current,
        getNow: getNow2,
        length,
        localizer,
        getters,
        components: components2,
        accessors,
        showMultiDayTimes,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onDoubleClickEvent: this.handleDoubleClickEvent,
        onKeyPressEvent: this.handleKeyPressEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore,
        doShowMoreDrillDown,
        resourceGroupingLayout
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      return {
        context: Calendar2.getContext(nextProps)
      };
    }
  }, {
    key: "getContext",
    value: function getContext(_ref2) {
      var startAccessor = _ref2.startAccessor, endAccessor = _ref2.endAccessor, allDayAccessor = _ref2.allDayAccessor, tooltipAccessor = _ref2.tooltipAccessor, titleAccessor = _ref2.titleAccessor, resourceAccessor = _ref2.resourceAccessor, resourceIdAccessor = _ref2.resourceIdAccessor, resourceTitleAccessor = _ref2.resourceTitleAccessor, eventIdAccessor = _ref2.eventIdAccessor, eventPropGetter = _ref2.eventPropGetter, backgroundEventPropGetter = _ref2.backgroundEventPropGetter, slotPropGetter = _ref2.slotPropGetter, slotGroupPropGetter = _ref2.slotGroupPropGetter, dayPropGetter = _ref2.dayPropGetter, view = _ref2.view, views2 = _ref2.views, localizer = _ref2.localizer, culture = _ref2.culture, _ref2$messages = _ref2.messages, messages$1 = _ref2$messages === void 0 ? {} : _ref2$messages, _ref2$components = _ref2.components, components2 = _ref2$components === void 0 ? {} : _ref2$components, _ref2$formats = _ref2.formats, formats2 = _ref2$formats === void 0 ? {} : _ref2$formats;
      var names = viewNames(views2);
      var msgs = messages(messages$1);
      return {
        viewNames: names,
        localizer: mergeWithDefaults(localizer, culture, formats2, msgs),
        getters: {
          eventProp: function eventProp() {
            return eventPropGetter && eventPropGetter.apply(void 0, arguments) || {};
          },
          backgroundEventProp: function backgroundEventProp() {
            return backgroundEventPropGetter && backgroundEventPropGetter.apply(void 0, arguments) || {};
          },
          slotProp: function slotProp() {
            return slotPropGetter && slotPropGetter.apply(void 0, arguments) || {};
          },
          slotGroupProp: function slotGroupProp() {
            return slotGroupPropGetter && slotGroupPropGetter.apply(void 0, arguments) || {};
          },
          dayProp: function dayProp() {
            return dayPropGetter && dayPropGetter.apply(void 0, arguments) || {};
          }
        },
        components: (0, import_defaults.default)(components2[view] || {}, (0, import_omit.default)(components2, names), {
          eventWrapper: NoopWrapper,
          backgroundEventWrapper: NoopWrapper,
          eventContainerWrapper: NoopWrapper,
          dateCellWrapper: NoopWrapper,
          weekWrapper: NoopWrapper,
          timeSlotWrapper: NoopWrapper,
          timeGutterWrapper: NoopWrapper,
          timeIndicatorWrapper: NoopWrapper
        }),
        accessors: {
          start: wrapAccessor(startAccessor),
          end: wrapAccessor(endAccessor),
          allDay: wrapAccessor(allDayAccessor),
          tooltip: wrapAccessor(tooltipAccessor),
          title: wrapAccessor(titleAccessor),
          resource: wrapAccessor(resourceAccessor),
          resourceId: wrapAccessor(resourceIdAccessor),
          resourceTitle: wrapAccessor(resourceTitleAccessor),
          eventId: wrapAccessor(eventIdAccessor)
        }
      };
    }
  }]);
}(import_react25.default.Component);
Calendar.defaultProps = {
  events: [],
  backgroundEvents: [],
  elementProps: {},
  popup: false,
  toolbar: true,
  view: views.MONTH,
  views: [views.MONTH, views.WEEK, views.DAY, views.AGENDA],
  step: 30,
  length: 30,
  allDayMaxRows: Infinity,
  doShowMoreDrillDown: true,
  drilldownView: views.DAY,
  titleAccessor: "title",
  tooltipAccessor: "title",
  allDayAccessor: "allDay",
  startAccessor: "start",
  endAccessor: "end",
  resourceAccessor: "resourceId",
  resourceIdAccessor: "id",
  resourceTitleAccessor: "title",
  eventIdAccessor: "id",
  longPressThreshold: 250,
  getNow: function getNow() {
    return /* @__PURE__ */ new Date();
  },
  dayLayoutAlgorithm: "overlap"
};
var Calendar$1 = uncontrollable(Calendar, {
  view: "onView",
  date: "onNavigate",
  selected: "onSelectEvent"
});
var weekRangeFormat$5 = function weekRangeFormat(_ref, culture, local) {
  var start2 = _ref.start, end2 = _ref.end;
  return local.format(start2, "MMMM DD", culture) + " – " + // updated to use this localizer 'eq()' method
  local.format(end2, local.eq(start2, end2, "month") ? "DD" : "MMMM DD", culture);
};
var dateRangeFormat$5 = function dateRangeFormat(_ref2, culture, local) {
  var start2 = _ref2.start, end2 = _ref2.end;
  return local.format(start2, "L", culture) + " – " + local.format(end2, "L", culture);
};
var timeRangeFormat$5 = function timeRangeFormat(_ref3, culture, local) {
  var start2 = _ref3.start, end2 = _ref3.end;
  return local.format(start2, "LT", culture) + " – " + local.format(end2, "LT", culture);
};
var timeRangeStartFormat$5 = function timeRangeStartFormat(_ref4, culture, local) {
  var start2 = _ref4.start;
  return local.format(start2, "LT", culture) + " – ";
};
var timeRangeEndFormat$5 = function timeRangeEndFormat(_ref5, culture, local) {
  var end2 = _ref5.end;
  return " – " + local.format(end2, "LT", culture);
};
var formats$5 = {
  dateFormat: "DD",
  dayFormat: "DD ddd",
  weekdayFormat: "ddd",
  selectRangeFormat: timeRangeFormat$5,
  eventTimeRangeFormat: timeRangeFormat$5,
  eventTimeRangeStartFormat: timeRangeStartFormat$5,
  eventTimeRangeEndFormat: timeRangeEndFormat$5,
  timeGutterFormat: "LT",
  monthHeaderFormat: "MMMM YYYY",
  dayHeaderFormat: "dddd MMM DD",
  dayRangeHeaderFormat: weekRangeFormat$5,
  agendaHeaderFormat: dateRangeFormat$5,
  agendaDateFormat: "ddd MMM DD",
  agendaTimeFormat: "LT",
  agendaTimeRangeFormat: timeRangeFormat$5
};
function fixUnit$2(unit) {
  var datePart = unit ? unit.toLowerCase() : unit;
  if (datePart === "FullYear") {
    datePart = "year";
  } else if (!datePart) {
    datePart = void 0;
  }
  return datePart;
}
function moment(moment2) {
  var locale = function locale2(m, c) {
    return c ? m.locale(c) : m;
  };
  function getTimezoneOffset(date2) {
    return moment2(date2).toDate().getTimezoneOffset();
  }
  function getDstOffset2(start2, end2) {
    var _st$_z$name, _st$_z;
    var st = moment2(start2).local();
    var ed = moment2(end2).local();
    if (!moment2.tz) {
      return st.toDate().getTimezoneOffset() - ed.toDate().getTimezoneOffset();
    }
    var tzName = (_st$_z$name = st === null || st === void 0 ? void 0 : (_st$_z = st._z) === null || _st$_z === void 0 ? void 0 : _st$_z.name) !== null && _st$_z$name !== void 0 ? _st$_z$name : moment2.tz.guess();
    var startOffset = moment2.tz.zone(tzName).utcOffset(+st);
    var endOffset = moment2.tz.zone(tzName).utcOffset(+ed);
    return startOffset - endOffset;
  }
  function getDayStartDstOffset(start2) {
    var dayStart = moment2(start2).startOf("day");
    return getDstOffset2(dayStart, start2);
  }
  function defineComparators(a, b, unit) {
    var datePart = fixUnit$2(unit);
    var dtA = datePart ? moment2(a).startOf(datePart) : moment2(a);
    var dtB = datePart ? moment2(b).startOf(datePart) : moment2(b);
    return [dtA, dtB, datePart];
  }
  function startOf2() {
    var date2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : void 0;
    var datePart = fixUnit$2(unit);
    if (datePart) {
      return moment2(date2).startOf(datePart).toDate();
    }
    return moment2(date2).toDate();
  }
  function endOf2() {
    var date2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : void 0;
    var datePart = fixUnit$2(unit);
    if (datePart) {
      return moment2(date2).endOf(datePart).toDate();
    }
    return moment2(date2).toDate();
  }
  function eq2(a, b, unit) {
    var _defineComparators = defineComparators(a, b, unit), _defineComparators2 = _slicedToArray(_defineComparators, 3), dtA = _defineComparators2[0], dtB = _defineComparators2[1], datePart = _defineComparators2[2];
    return dtA.isSame(dtB, datePart);
  }
  function neq2(a, b, unit) {
    return !eq2(a, b, unit);
  }
  function gt2(a, b, unit) {
    var _defineComparators3 = defineComparators(a, b, unit), _defineComparators4 = _slicedToArray(_defineComparators3, 3), dtA = _defineComparators4[0], dtB = _defineComparators4[1], datePart = _defineComparators4[2];
    return dtA.isAfter(dtB, datePart);
  }
  function lt2(a, b, unit) {
    var _defineComparators5 = defineComparators(a, b, unit), _defineComparators6 = _slicedToArray(_defineComparators5, 3), dtA = _defineComparators6[0], dtB = _defineComparators6[1], datePart = _defineComparators6[2];
    return dtA.isBefore(dtB, datePart);
  }
  function gte2(a, b, unit) {
    var _defineComparators7 = defineComparators(a, b, unit), _defineComparators8 = _slicedToArray(_defineComparators7, 3), dtA = _defineComparators8[0], dtB = _defineComparators8[1], datePart = _defineComparators8[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function lte2(a, b, unit) {
    var _defineComparators9 = defineComparators(a, b, unit), _defineComparators10 = _slicedToArray(_defineComparators9, 3), dtA = _defineComparators10[0], dtB = _defineComparators10[1], datePart = _defineComparators10[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function inRange3(day2, min4, max4) {
    var unit = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "day";
    var datePart = fixUnit$2(unit);
    var mDay = moment2(day2);
    var mMin = moment2(min4);
    var mMax = moment2(max4);
    return mDay.isBetween(mMin, mMax, datePart, "[]");
  }
  function min3(dateA, dateB) {
    var dtA = moment2(dateA);
    var dtB = moment2(dateB);
    var minDt = moment2.min(dtA, dtB);
    return minDt.toDate();
  }
  function max3(dateA, dateB) {
    var dtA = moment2(dateA);
    var dtB = moment2(dateB);
    var maxDt = moment2.max(dtA, dtB);
    return maxDt.toDate();
  }
  function merge2(date2, time) {
    if (!date2 && !time) return null;
    var tm = moment2(time).format("HH:mm:ss");
    var dt = moment2(date2).startOf("day").format("MM/DD/YYYY");
    return moment2("".concat(dt, " ").concat(tm), "MM/DD/YYYY HH:mm:ss").toDate();
  }
  function add2(date2, adder, unit) {
    var datePart = fixUnit$2(unit);
    return moment2(date2).add(adder, datePart).toDate();
  }
  function range2(start2, end2) {
    var unit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day";
    var datePart = fixUnit$2(unit);
    var current = moment2(start2).toDate();
    var days = [];
    while (lte2(current, end2)) {
      days.push(current);
      current = add2(current, 1, datePart);
    }
    return days;
  }
  function ceil2(date2, unit) {
    var datePart = fixUnit$2(unit);
    var floor = startOf2(date2, datePart);
    return eq2(floor, date2) ? floor : add2(floor, 1, datePart);
  }
  function diff3(a, b) {
    var unit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day";
    var datePart = fixUnit$2(unit);
    var dtA = moment2(a);
    var dtB = moment2(b);
    return dtB.diff(dtA, datePart);
  }
  function minutes2(date2) {
    var dt = moment2(date2);
    return dt.minutes();
  }
  function firstOfWeek(culture) {
    var data = culture ? moment2.localeData(culture) : moment2.localeData();
    return data ? data.firstDayOfWeek() : 0;
  }
  function firstVisibleDay2(date2) {
    return moment2(date2).startOf("month").startOf("week").toDate();
  }
  function lastVisibleDay2(date2) {
    return moment2(date2).endOf("month").endOf("week").toDate();
  }
  function visibleDays2(date2) {
    var current = firstVisibleDay2(date2);
    var last = lastVisibleDay2(date2);
    var days = [];
    while (lte2(current, last)) {
      days.push(current);
      current = add2(current, 1, "d");
    }
    return days;
  }
  function getSlotDate2(dt, minutesFromMidnight, offset3) {
    return moment2(dt).startOf("day").minute(minutesFromMidnight + offset3).toDate();
  }
  function getTotalMin2(start2, end2) {
    return diff3(start2, end2, "minutes");
  }
  function getMinutesFromMidnight2(start2) {
    var dayStart = moment2(start2).startOf("day");
    var day2 = moment2(start2);
    return day2.diff(dayStart, "minutes") + getDayStartDstOffset(start2);
  }
  function continuesPrior2(start2, first) {
    var mStart = moment2(start2);
    var mFirst = moment2(first);
    return mStart.isBefore(mFirst, "day");
  }
  function continuesAfter2(start2, end2, last) {
    var mEnd = moment2(end2);
    var mLast = moment2(last);
    return mEnd.isSameOrAfter(mLast, "minutes");
  }
  function daySpan2(start2, end2) {
    var mStart = moment2(start2);
    var mEnd = moment2(end2);
    var dur = moment2.duration(mEnd.diff(mStart));
    return dur.days();
  }
  function sortEvents2(_ref6) {
    var _ref6$evtA = _ref6.evtA, aStart = _ref6$evtA.start, aEnd = _ref6$evtA.end, aAllDay = _ref6$evtA.allDay, _ref6$evtB = _ref6.evtB, bStart = _ref6$evtB.start, bEnd = _ref6$evtB.end, bAllDay = _ref6$evtB.allDay;
    var startSort = +startOf2(aStart, "day") - +startOf2(bStart, "day");
    var durA = daySpan2(aStart, aEnd);
    var durB = daySpan2(bStart, bEnd);
    return startSort || // sort by start Day first
    durB - durA || // events spanning multiple days go first
    !!bAllDay - !!aAllDay || // then allDay single day events
    +aStart - +bStart || // then sort by start time *don't need moment conversion here
    +aEnd - +bEnd;
  }
  function inEventRange2(_ref7) {
    var _ref7$event = _ref7.event, start2 = _ref7$event.start, end2 = _ref7$event.end, _ref7$range = _ref7.range, rangeStart = _ref7$range.start, rangeEnd = _ref7$range.end;
    var startOfDay = moment2(start2).startOf("day");
    var eEnd = moment2(end2);
    var rStart = moment2(rangeStart);
    var rEnd = moment2(rangeEnd);
    var startsBeforeEnd = startOfDay.isSameOrBefore(rEnd, "day");
    var sameMin = !startOfDay.isSame(eEnd, "minutes");
    var endsAfterStart = sameMin ? eEnd.isAfter(rStart, "minutes") : eEnd.isSameOrAfter(rStart, "minutes");
    return startsBeforeEnd && endsAfterStart;
  }
  function isSameDate2(date1, date2) {
    var dt = moment2(date1);
    var dt2 = moment2(date2);
    return dt.isSame(dt2, "day");
  }
  function browserTZOffset() {
    var dt = /* @__PURE__ */ new Date();
    var neg = /-/.test(dt.toString()) ? "-" : "";
    var dtOffset = dt.getTimezoneOffset();
    var comparator = Number("".concat(neg).concat(Math.abs(dtOffset)));
    var mtOffset = moment2().utcOffset();
    return mtOffset > comparator ? 1 : 0;
  }
  return new DateLocalizer({
    formats: formats$5,
    firstOfWeek,
    firstVisibleDay: firstVisibleDay2,
    lastVisibleDay: lastVisibleDay2,
    visibleDays: visibleDays2,
    format: function format(value, _format2, culture) {
      return locale(moment2(value), culture).format(_format2);
    },
    lt: lt2,
    lte: lte2,
    gt: gt2,
    gte: gte2,
    eq: eq2,
    neq: neq2,
    merge: merge2,
    inRange: inRange3,
    startOf: startOf2,
    endOf: endOf2,
    range: range2,
    add: add2,
    diff: diff3,
    ceil: ceil2,
    min: min3,
    max: max3,
    minutes: minutes2,
    getSlotDate: getSlotDate2,
    getTimezoneOffset,
    getDstOffset: getDstOffset2,
    getTotalMin: getTotalMin2,
    getMinutesFromMidnight: getMinutesFromMidnight2,
    continuesPrior: continuesPrior2,
    continuesAfter: continuesAfter2,
    sortEvents: sortEvents2,
    inEventRange: inEventRange2,
    isSameDate: isSameDate2,
    daySpan: daySpan2,
    browserTZOffset
  });
}
function pluralizeUnit(unit) {
  return /s$/.test(unit) ? unit : unit + "s";
}
var weekRangeFormat$4 = function weekRangeFormat2(_ref, culture, local) {
  var start2 = _ref.start, end2 = _ref.end;
  return local.format(start2, "MMMM dd", culture) + " – " + // updated to use this localizer 'eq()' method
  local.format(end2, local.eq(start2, end2, "month") ? "dd" : "MMMM dd", culture);
};
var dateRangeFormat$4 = function dateRangeFormat2(_ref2, culture, local) {
  var start2 = _ref2.start, end2 = _ref2.end;
  return local.format(start2, "D", culture) + " – " + local.format(end2, "D", culture);
};
var timeRangeFormat$4 = function timeRangeFormat2(_ref3, culture, local) {
  var start2 = _ref3.start, end2 = _ref3.end;
  return local.format(start2, "t", culture) + " – " + local.format(end2, "t", culture);
};
var timeRangeStartFormat$4 = function timeRangeStartFormat2(_ref4, culture, local) {
  var start2 = _ref4.start;
  return local.format(start2, "t", culture) + " – ";
};
var timeRangeEndFormat$4 = function timeRangeEndFormat2(_ref5, culture, local) {
  var end2 = _ref5.end;
  return " – " + local.format(end2, "t", culture);
};
var formats$4 = {
  dateFormat: "dd",
  dayFormat: "dd EEE",
  weekdayFormat: "EEE",
  selectRangeFormat: timeRangeFormat$4,
  eventTimeRangeFormat: timeRangeFormat$4,
  eventTimeRangeStartFormat: timeRangeStartFormat$4,
  eventTimeRangeEndFormat: timeRangeEndFormat$4,
  timeGutterFormat: "t",
  monthHeaderFormat: "MMMM yyyy",
  dayHeaderFormat: "EEEE MMM dd",
  dayRangeHeaderFormat: weekRangeFormat$4,
  agendaHeaderFormat: dateRangeFormat$4,
  agendaDateFormat: "EEE MMM dd",
  agendaTimeFormat: "t",
  agendaTimeRangeFormat: timeRangeFormat$4
};
function fixUnit$1(unit) {
  var datePart = unit ? pluralizeUnit(unit.toLowerCase()) : unit;
  if (datePart === "FullYear") {
    datePart = "year";
  } else if (!datePart) {
    datePart = void 0;
  }
  return datePart;
}
function luxon(DateTime) {
  var _ref6 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref6$firstDayOfWeek = _ref6.firstDayOfWeek, firstDayOfWeek = _ref6$firstDayOfWeek === void 0 ? 7 : _ref6$firstDayOfWeek;
  function formatDate(value, format) {
    return DateTime.fromJSDate(value).toFormat(format);
  }
  function formatDateWithCulture(value, culture, format) {
    return DateTime.fromJSDate(value).setLocale(culture).toFormat(format);
  }
  function defineComparators(a, b, unit) {
    var datePart = fixUnit$1(unit);
    var dtA = datePart ? DateTime.fromJSDate(a).startOf(datePart) : DateTime.fromJSDate(a);
    var dtB = datePart ? DateTime.fromJSDate(b).startOf(datePart) : DateTime.fromJSDate(b);
    return [dtA, dtB, datePart];
  }
  function startOfDTWeek(dtObj) {
    var weekday2 = dtObj.weekday;
    if (weekday2 === firstDayOfWeek) {
      return dtObj.startOf("day");
    } else if (firstDayOfWeek === 1) {
      return dtObj.startOf("week");
    }
    var diff4 = firstDayOfWeek === 7 ? weekday2 : weekday2 + (7 - firstDayOfWeek);
    return dtObj.minus({
      day: diff4
    }).startOf("day");
  }
  function endOfDTWeek(dtObj) {
    var weekday2 = dtObj.weekday;
    var eow = firstDayOfWeek === 1 ? 7 : firstDayOfWeek - 1;
    if (weekday2 === eow) {
      return dtObj.endOf("day");
    } else if (firstDayOfWeek === 1) {
      return dtObj.endOf("week");
    }
    var fromDate = firstDayOfWeek > eow ? dtObj.plus({
      day: firstDayOfWeek - eow
    }) : dtObj;
    return fromDate.set({
      weekday: eow
    }).endOf("day");
  }
  function startOfDT() {
    var date2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Date();
    var unit = arguments.length > 1 ? arguments[1] : void 0;
    var datePart = fixUnit$1(unit);
    if (datePart) {
      var dt = DateTime.fromJSDate(date2);
      return datePart.includes("week") ? startOfDTWeek(dt) : dt.startOf(datePart);
    }
    return DateTime.fromJSDate(date2);
  }
  function firstOfWeek() {
    return firstDayOfWeek;
  }
  function startOf2() {
    var date2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Date();
    var unit = arguments.length > 1 ? arguments[1] : void 0;
    return startOfDT(date2, unit).toJSDate();
  }
  function endOfDT() {
    var date2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Date();
    var unit = arguments.length > 1 ? arguments[1] : void 0;
    var datePart = fixUnit$1(unit);
    if (datePart) {
      var dt = DateTime.fromJSDate(date2);
      return datePart.includes("week") ? endOfDTWeek(dt) : dt.endOf(datePart);
    }
    return DateTime.fromJSDate(date2);
  }
  function endOf2() {
    var date2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Date();
    var unit = arguments.length > 1 ? arguments[1] : void 0;
    return endOfDT(date2, unit).toJSDate();
  }
  function eq2(a, b, unit) {
    var _defineComparators = defineComparators(a, b, unit), _defineComparators2 = _slicedToArray(_defineComparators, 2), dtA = _defineComparators2[0], dtB = _defineComparators2[1];
    return +dtA == +dtB;
  }
  function neq2(a, b, unit) {
    return !eq2(a, b, unit);
  }
  function gt2(a, b, unit) {
    var _defineComparators3 = defineComparators(a, b, unit), _defineComparators4 = _slicedToArray(_defineComparators3, 2), dtA = _defineComparators4[0], dtB = _defineComparators4[1];
    return +dtA > +dtB;
  }
  function lt2(a, b, unit) {
    var _defineComparators5 = defineComparators(a, b, unit), _defineComparators6 = _slicedToArray(_defineComparators5, 2), dtA = _defineComparators6[0], dtB = _defineComparators6[1];
    return +dtA < +dtB;
  }
  function gte2(a, b, unit) {
    var _defineComparators7 = defineComparators(a, b, unit), _defineComparators8 = _slicedToArray(_defineComparators7, 2), dtA = _defineComparators8[0], dtB = _defineComparators8[1];
    return +dtA >= +dtB;
  }
  function lte2(a, b, unit) {
    var _defineComparators9 = defineComparators(a, b, unit), _defineComparators10 = _slicedToArray(_defineComparators9, 2), dtA = _defineComparators10[0], dtB = _defineComparators10[1];
    return +dtA <= +dtB;
  }
  function inRange3(day2, min4, max4) {
    var unit = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "day";
    var datePart = fixUnit$1(unit);
    var mDay = startOfDT(day2, datePart);
    var mMin = startOfDT(min4, datePart);
    var mMax = startOfDT(max4, datePart);
    return +mDay >= +mMin && +mDay <= +mMax;
  }
  function min3(dateA, dateB) {
    var dtA = DateTime.fromJSDate(dateA);
    var dtB = DateTime.fromJSDate(dateB);
    var minDt = DateTime.min(dtA, dtB);
    return minDt.toJSDate();
  }
  function max3(dateA, dateB) {
    var dtA = DateTime.fromJSDate(dateA);
    var dtB = DateTime.fromJSDate(dateB);
    var maxDt = DateTime.max(dtA, dtB);
    return maxDt.toJSDate();
  }
  function merge2(date2, time) {
    if (!date2 && !time) return null;
    var tm = DateTime.fromJSDate(time);
    var dt = startOfDT(date2, "day");
    return dt.set({
      hour: tm.hour,
      minute: tm.minute,
      second: tm.second,
      millisecond: tm.millisecond
    }).toJSDate();
  }
  function add2(date2, adder, unit) {
    var datePart = fixUnit$1(unit);
    return DateTime.fromJSDate(date2).plus(_defineProperty({}, datePart, adder)).toJSDate();
  }
  function range2(start2, end2) {
    var unit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day";
    var datePart = fixUnit$1(unit);
    var current = DateTime.fromJSDate(start2).toJSDate();
    var days = [];
    while (lte2(current, end2)) {
      days.push(current);
      current = add2(current, 1, datePart);
    }
    return days;
  }
  function ceil2(date2, unit) {
    var datePart = fixUnit$1(unit);
    var floor = startOf2(date2, datePart);
    return eq2(floor, date2) ? floor : add2(floor, 1, datePart);
  }
  function diff3(a, b) {
    var unit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day";
    var datePart = fixUnit$1(unit);
    var dtA = DateTime.fromJSDate(a);
    var dtB = DateTime.fromJSDate(b);
    return Math.floor(dtB.diff(dtA, datePart, {
      conversionAccuracy: "longterm"
    }).toObject()[datePart]);
  }
  function firstVisibleDay2(date2) {
    var startOfMonth = startOfDT(date2, "month");
    return startOfDTWeek(startOfMonth).toJSDate();
  }
  function lastVisibleDay2(date2) {
    var endOfMonth = endOfDT(date2, "month");
    return endOfDTWeek(endOfMonth).toJSDate();
  }
  function visibleDays2(date2) {
    var current = firstVisibleDay2(date2);
    var last = lastVisibleDay2(date2);
    var days = [];
    while (lte2(current, last)) {
      days.push(current);
      current = add2(current, 1, "day");
    }
    return days;
  }
  function getSlotDate2(dt, minutesFromMidnight, offset3) {
    return startOfDT(dt, "day").set({
      minutes: minutesFromMidnight + offset3
    }).toJSDate();
  }
  function getTotalMin2(start2, end2) {
    return diff3(start2, end2, "minutes");
  }
  function getMinutesFromMidnight2(start2) {
    var dayStart = startOfDT(start2, "day");
    var day2 = DateTime.fromJSDate(start2);
    return Math.round(day2.diff(dayStart, "minutes", {
      conversionAccuracy: "longterm"
    }).toObject().minutes);
  }
  function continuesPrior2(start2, first) {
    return lt2(start2, first);
  }
  function continuesAfter2(start2, end2, last) {
    return gte2(end2, last);
  }
  function daySpan2(start2, end2) {
    var dtStart = DateTime.fromJSDate(start2);
    var dtEnd = DateTime.fromJSDate(end2);
    return dtEnd.diff(dtStart).as("days");
  }
  function sortEvents2(_ref7) {
    var _ref7$evtA = _ref7.evtA, aStart = _ref7$evtA.start, aEnd = _ref7$evtA.end, aAllDay = _ref7$evtA.allDay, _ref7$evtB = _ref7.evtB, bStart = _ref7$evtB.start, bEnd = _ref7$evtB.end, bAllDay = _ref7$evtB.allDay;
    var startSort = +startOf2(aStart, "day") - +startOf2(bStart, "day");
    var durA = daySpan2(aStart, aEnd);
    var durB = daySpan2(bStart, bEnd);
    return startSort || // sort by start Day first
    durB - durA || // events spanning multiple days go first
    !!bAllDay - !!aAllDay || // then allDay single day events
    +aStart - +bStart || // then sort by start time *don't need moment conversion here
    +aEnd - +bEnd;
  }
  function inEventRange2(_ref8) {
    var _ref8$event = _ref8.event, start2 = _ref8$event.start, end2 = _ref8$event.end, _ref8$range = _ref8.range, rangeStart = _ref8$range.start, rangeEnd = _ref8$range.end;
    var eStart = startOf2(start2, "day");
    var startsBeforeEnd = lte2(eStart, rangeEnd, "day");
    var sameMin = neq2(eStart, end2, "minutes");
    var endsAfterStart = sameMin ? gt2(end2, rangeStart, "minutes") : gte2(end2, rangeStart, "minutes");
    return startsBeforeEnd && endsAfterStart;
  }
  function isSameDate2(date1, date2) {
    var dt = DateTime.fromJSDate(date1);
    var dt2 = DateTime.fromJSDate(date2);
    return dt.hasSame(dt2, "day");
  }
  function browserTZOffset() {
    var dt = /* @__PURE__ */ new Date();
    var neg = /-/.test(dt.toString()) ? "-" : "";
    var dtOffset = dt.getTimezoneOffset();
    var comparator = Number("".concat(neg).concat(Math.abs(dtOffset)));
    var mtOffset = DateTime.local().offset;
    return mtOffset > comparator ? 1 : 0;
  }
  return new DateLocalizer({
    format: function format(value, _format2, culture) {
      if (culture) {
        return formatDateWithCulture(value, culture, _format2);
      }
      return formatDate(value, _format2);
    },
    formats: formats$4,
    firstOfWeek,
    firstVisibleDay: firstVisibleDay2,
    lastVisibleDay: lastVisibleDay2,
    visibleDays: visibleDays2,
    lt: lt2,
    lte: lte2,
    gt: gt2,
    gte: gte2,
    eq: eq2,
    neq: neq2,
    merge: merge2,
    inRange: inRange3,
    startOf: startOf2,
    endOf: endOf2,
    range: range2,
    add: add2,
    diff: diff3,
    ceil: ceil2,
    min: min3,
    max: max3,
    getSlotDate: getSlotDate2,
    getTotalMin: getTotalMin2,
    getMinutesFromMidnight: getMinutesFromMidnight2,
    continuesPrior: continuesPrior2,
    continuesAfter: continuesAfter2,
    sortEvents: sortEvents2,
    inEventRange: inEventRange2,
    isSameDate: isSameDate2,
    daySpan: daySpan2,
    browserTZOffset
  });
}
var dateRangeFormat$3 = function dateRangeFormat3(_ref, culture, local) {
  var start2 = _ref.start, end2 = _ref.end;
  return local.format(start2, "d", culture) + " – " + local.format(end2, "d", culture);
};
var timeRangeFormat$3 = function timeRangeFormat3(_ref2, culture, local) {
  var start2 = _ref2.start, end2 = _ref2.end;
  return local.format(start2, "t", culture) + " – " + local.format(end2, "t", culture);
};
var timeRangeStartFormat$3 = function timeRangeStartFormat3(_ref3, culture, local) {
  var start2 = _ref3.start;
  return local.format(start2, "t", culture) + " – ";
};
var timeRangeEndFormat$3 = function timeRangeEndFormat3(_ref4, culture, local) {
  var end2 = _ref4.end;
  return " – " + local.format(end2, "t", culture);
};
var weekRangeFormat$3 = function weekRangeFormat3(_ref5, culture, local) {
  var start2 = _ref5.start, end2 = _ref5.end;
  return local.format(start2, "MMM dd", culture) + " – " + local.format(end2, eq(start2, end2, "month") ? "dd" : "MMM dd", culture);
};
var formats$3 = {
  dateFormat: "dd",
  dayFormat: "ddd dd/MM",
  weekdayFormat: "ddd",
  selectRangeFormat: timeRangeFormat$3,
  eventTimeRangeFormat: timeRangeFormat$3,
  eventTimeRangeStartFormat: timeRangeStartFormat$3,
  eventTimeRangeEndFormat: timeRangeEndFormat$3,
  timeGutterFormat: "t",
  monthHeaderFormat: "Y",
  dayHeaderFormat: "dddd MMM dd",
  dayRangeHeaderFormat: weekRangeFormat$3,
  agendaHeaderFormat: dateRangeFormat$3,
  agendaDateFormat: "ddd MMM dd",
  agendaTimeFormat: "t",
  agendaTimeRangeFormat: timeRangeFormat$3
};
function oldGlobalize(globalize2) {
  function getCulture(culture) {
    return culture ? globalize2.findClosestCulture(culture) : globalize2.culture();
  }
  function firstOfWeek(culture) {
    culture = getCulture(culture);
    return culture && culture.calendar.firstDay || 0;
  }
  return new DateLocalizer({
    firstOfWeek,
    formats: formats$3,
    format: function format(value, _format2, culture) {
      return globalize2.format(value, _format2, culture);
    }
  });
}
var dateRangeFormat$2 = function dateRangeFormat4(_ref, culture, local) {
  var start2 = _ref.start, end2 = _ref.end;
  return local.format(start2, {
    date: "short"
  }, culture) + " – " + local.format(end2, {
    date: "short"
  }, culture);
};
var timeRangeFormat$2 = function timeRangeFormat4(_ref2, culture, local) {
  var start2 = _ref2.start, end2 = _ref2.end;
  return local.format(start2, {
    time: "short"
  }, culture) + " – " + local.format(end2, {
    time: "short"
  }, culture);
};
var timeRangeStartFormat$2 = function timeRangeStartFormat4(_ref3, culture, local) {
  var start2 = _ref3.start;
  return local.format(start2, {
    time: "short"
  }, culture) + " – ";
};
var timeRangeEndFormat$2 = function timeRangeEndFormat4(_ref4, culture, local) {
  var end2 = _ref4.end;
  return " – " + local.format(end2, {
    time: "short"
  }, culture);
};
var weekRangeFormat$2 = function weekRangeFormat4(_ref5, culture, local) {
  var start2 = _ref5.start, end2 = _ref5.end;
  return local.format(start2, "MMM dd", culture) + " – " + local.format(end2, eq(start2, end2, "month") ? "dd" : "MMM dd", culture);
};
var formats$2 = {
  dateFormat: "dd",
  dayFormat: "eee dd/MM",
  weekdayFormat: "eee",
  selectRangeFormat: timeRangeFormat$2,
  eventTimeRangeFormat: timeRangeFormat$2,
  eventTimeRangeStartFormat: timeRangeStartFormat$2,
  eventTimeRangeEndFormat: timeRangeEndFormat$2,
  timeGutterFormat: {
    time: "short"
  },
  monthHeaderFormat: "MMMM yyyy",
  dayHeaderFormat: "eeee MMM dd",
  dayRangeHeaderFormat: weekRangeFormat$2,
  agendaHeaderFormat: dateRangeFormat$2,
  agendaDateFormat: "eee MMM dd",
  agendaTimeFormat: {
    time: "short"
  },
  agendaTimeRangeFormat: timeRangeFormat$2
};
function globalize(globalize2) {
  var locale = function locale2(culture) {
    return culture ? globalize2(culture) : globalize2;
  };
  function firstOfWeek(culture) {
    try {
      var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      var cldr = locale(culture).cldr;
      var territory = cldr.attributes.territory;
      var weekData = cldr.get("supplemental").weekData;
      var firstDay = weekData.firstDay[territory || "001"];
      return days.indexOf(firstDay);
    } catch (e) {
      if (true) {
        console.error("Failed to accurately determine first day of the week. Is supplemental data loaded into CLDR?");
      }
      var date2 = /* @__PURE__ */ new Date();
      var localeDay = Math.max(parseInt(locale(culture).formatDate(date2, {
        raw: "e"
      }), 10) - 1, 0);
      return Math.abs(date2.getDay() - localeDay);
    }
  }
  if (!globalize2.load) return oldGlobalize(globalize2);
  return new DateLocalizer({
    firstOfWeek,
    formats: formats$2,
    format: function format(value, _format2, culture) {
      _format2 = typeof _format2 === "string" ? {
        raw: _format2
      } : _format2;
      return locale(culture).formatDate(value, _format2);
    }
  });
}
var dateRangeFormat$1 = function dateRangeFormat5(_ref, culture, local) {
  var start2 = _ref.start, end2 = _ref.end;
  return "".concat(local.format(start2, "P", culture), " – ").concat(local.format(end2, "P", culture));
};
var timeRangeFormat$1 = function timeRangeFormat5(_ref2, culture, local) {
  var start2 = _ref2.start, end2 = _ref2.end;
  return "".concat(local.format(start2, "p", culture), " – ").concat(local.format(end2, "p", culture));
};
var timeRangeStartFormat$1 = function timeRangeStartFormat5(_ref3, culture, local) {
  var start2 = _ref3.start;
  return "".concat(local.format(start2, "h:mma", culture), " – ");
};
var timeRangeEndFormat$1 = function timeRangeEndFormat5(_ref4, culture, local) {
  var end2 = _ref4.end;
  return " – ".concat(local.format(end2, "h:mma", culture));
};
var weekRangeFormat$1 = function weekRangeFormat5(_ref5, culture, local) {
  var start2 = _ref5.start, end2 = _ref5.end;
  return "".concat(local.format(start2, "MMMM dd", culture), " – ").concat(local.format(end2, eq(start2, end2, "month") ? "dd" : "MMMM dd", culture));
};
var formats$1 = {
  dateFormat: "dd",
  dayFormat: "dd eee",
  weekdayFormat: "ccc",
  selectRangeFormat: timeRangeFormat$1,
  eventTimeRangeFormat: timeRangeFormat$1,
  eventTimeRangeStartFormat: timeRangeStartFormat$1,
  eventTimeRangeEndFormat: timeRangeEndFormat$1,
  timeGutterFormat: "p",
  monthHeaderFormat: "MMMM yyyy",
  dayHeaderFormat: "cccc MMM dd",
  dayRangeHeaderFormat: weekRangeFormat$1,
  agendaHeaderFormat: dateRangeFormat$1,
  agendaDateFormat: "ccc MMM dd",
  agendaTimeFormat: "p",
  agendaTimeRangeFormat: timeRangeFormat$1
};
var dateFnsLocalizer = function dateFnsLocalizer2(_ref6) {
  var startOfWeek = _ref6.startOfWeek, getDay = _ref6.getDay, _format2 = _ref6.format, locales = _ref6.locales;
  return new DateLocalizer({
    formats: formats$1,
    firstOfWeek: function firstOfWeek(culture) {
      return getDay(startOfWeek(/* @__PURE__ */ new Date(), {
        locale: locales[culture]
      }));
    },
    format: function format(value, formatString, culture) {
      return _format2(new Date(value), formatString, {
        locale: locales[culture]
      });
    }
  });
};
var weekRangeFormat6 = function weekRangeFormat7(_ref, culture, local) {
  var start2 = _ref.start, end2 = _ref.end;
  return local.format(start2, "MMMM DD", culture) + " – " + // updated to use this localizer 'eq()' method
  local.format(end2, local.eq(start2, end2, "month") ? "DD" : "MMMM DD", culture);
};
var dateRangeFormat6 = function dateRangeFormat7(_ref2, culture, local) {
  var start2 = _ref2.start, end2 = _ref2.end;
  return local.format(start2, "L", culture) + " – " + local.format(end2, "L", culture);
};
var timeRangeFormat6 = function timeRangeFormat7(_ref3, culture, local) {
  var start2 = _ref3.start, end2 = _ref3.end;
  return local.format(start2, "LT", culture) + " – " + local.format(end2, "LT", culture);
};
var timeRangeStartFormat6 = function timeRangeStartFormat7(_ref4, culture, local) {
  var start2 = _ref4.start;
  return local.format(start2, "LT", culture) + " – ";
};
var timeRangeEndFormat6 = function timeRangeEndFormat7(_ref5, culture, local) {
  var end2 = _ref5.end;
  return " – " + local.format(end2, "LT", culture);
};
var formats = {
  dateFormat: "DD",
  dayFormat: "DD ddd",
  weekdayFormat: "ddd",
  selectRangeFormat: timeRangeFormat6,
  eventTimeRangeFormat: timeRangeFormat6,
  eventTimeRangeStartFormat: timeRangeStartFormat6,
  eventTimeRangeEndFormat: timeRangeEndFormat6,
  timeGutterFormat: "LT",
  monthHeaderFormat: "MMMM YYYY",
  dayHeaderFormat: "dddd MMM DD",
  dayRangeHeaderFormat: weekRangeFormat6,
  agendaHeaderFormat: dateRangeFormat6,
  agendaDateFormat: "ddd MMM DD",
  agendaTimeFormat: "LT",
  agendaTimeRangeFormat: timeRangeFormat6
};
function fixUnit(unit) {
  var datePart = unit ? unit.toLowerCase() : unit;
  if (datePart === "FullYear") {
    datePart = "year";
  } else if (!datePart) {
    datePart = void 0;
  }
  return datePart;
}
function dayjs(dayjsLib) {
  dayjsLib.extend(import_isBetween.default);
  dayjsLib.extend(import_isSameOrAfter.default);
  dayjsLib.extend(import_isSameOrBefore.default);
  dayjsLib.extend(import_localeData.default);
  dayjsLib.extend(import_localizedFormat.default);
  dayjsLib.extend(import_minMax.default);
  dayjsLib.extend(import_utc.default);
  dayjsLib.extend(import_isLeapYear.default);
  var locale = function locale2(dj, c) {
    return c ? dj.locale(c) : dj;
  };
  var dayjs2 = dayjsLib.tz ? dayjsLib.tz : dayjsLib;
  function getTimezoneOffset(date2) {
    return dayjs2(date2).toDate().getTimezoneOffset();
  }
  function getDstOffset2(start2, end2) {
    var _st$tz$$x$$timezone;
    var st = dayjs2(start2);
    var ed = dayjs2(end2);
    if (!dayjs2.tz) {
      return st.toDate().getTimezoneOffset() - ed.toDate().getTimezoneOffset();
    }
    var tzName = (_st$tz$$x$$timezone = st.tz().$x.$timezone) !== null && _st$tz$$x$$timezone !== void 0 ? _st$tz$$x$$timezone : dayjsLib.tz.guess();
    var startOffset = -dayjs2.tz(+st, tzName).utcOffset();
    var endOffset = -dayjs2.tz(+ed, tzName).utcOffset();
    return startOffset - endOffset;
  }
  function getDayStartDstOffset(start2) {
    var dayStart = dayjs2(start2).startOf("day");
    return getDstOffset2(dayStart, start2);
  }
  function defineComparators(a, b, unit) {
    var datePart = fixUnit(unit);
    var dtA = datePart ? dayjs2(a).startOf(datePart) : dayjs2(a);
    var dtB = datePart ? dayjs2(b).startOf(datePart) : dayjs2(b);
    return [dtA, dtB, datePart];
  }
  function startOf2() {
    var date2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : void 0;
    var datePart = fixUnit(unit);
    if (datePart) {
      return dayjs2(date2).startOf(datePart).toDate();
    }
    return dayjs2(date2).toDate();
  }
  function endOf2() {
    var date2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : void 0;
    var datePart = fixUnit(unit);
    if (datePart) {
      return dayjs2(date2).endOf(datePart).toDate();
    }
    return dayjs2(date2).toDate();
  }
  function eq2(a, b, unit) {
    var _defineComparators = defineComparators(a, b, unit), _defineComparators2 = _slicedToArray(_defineComparators, 3), dtA = _defineComparators2[0], dtB = _defineComparators2[1], datePart = _defineComparators2[2];
    return dtA.isSame(dtB, datePart);
  }
  function neq2(a, b, unit) {
    return !eq2(a, b, unit);
  }
  function gt2(a, b, unit) {
    var _defineComparators3 = defineComparators(a, b, unit), _defineComparators4 = _slicedToArray(_defineComparators3, 3), dtA = _defineComparators4[0], dtB = _defineComparators4[1], datePart = _defineComparators4[2];
    return dtA.isAfter(dtB, datePart);
  }
  function lt2(a, b, unit) {
    var _defineComparators5 = defineComparators(a, b, unit), _defineComparators6 = _slicedToArray(_defineComparators5, 3), dtA = _defineComparators6[0], dtB = _defineComparators6[1], datePart = _defineComparators6[2];
    return dtA.isBefore(dtB, datePart);
  }
  function gte2(a, b, unit) {
    var _defineComparators7 = defineComparators(a, b, unit), _defineComparators8 = _slicedToArray(_defineComparators7, 3), dtA = _defineComparators8[0], dtB = _defineComparators8[1], datePart = _defineComparators8[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function lte2(a, b, unit) {
    var _defineComparators9 = defineComparators(a, b, unit), _defineComparators10 = _slicedToArray(_defineComparators9, 3), dtA = _defineComparators10[0], dtB = _defineComparators10[1], datePart = _defineComparators10[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function inRange3(day2, min4, max4) {
    var unit = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "day";
    var datePart = fixUnit(unit);
    var djDay = dayjs2(day2);
    var djMin = dayjs2(min4);
    var djMax = dayjs2(max4);
    return djDay.isBetween(djMin, djMax, datePart, "[]");
  }
  function min3(dateA, dateB) {
    var dtA = dayjs2(dateA);
    var dtB = dayjs2(dateB);
    var minDt = dayjsLib.min(dtA, dtB);
    return minDt.toDate();
  }
  function max3(dateA, dateB) {
    var dtA = dayjs2(dateA);
    var dtB = dayjs2(dateB);
    var maxDt = dayjsLib.max(dtA, dtB);
    return maxDt.toDate();
  }
  function merge2(date2, time) {
    if (!date2 && !time) return null;
    var tm = dayjs2(time).format("HH:mm:ss");
    var dt = dayjs2(date2).startOf("day").format("MM/DD/YYYY");
    return dayjs2("".concat(dt, " ").concat(tm)).toDate();
  }
  function add2(date2, adder, unit) {
    var datePart = fixUnit(unit);
    return dayjs2(date2).add(adder, datePart).toDate();
  }
  function range2(start2, end2) {
    var unit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day";
    var datePart = fixUnit(unit);
    var current = dayjs2(start2).toDate();
    var days = [];
    while (lte2(current, end2)) {
      days.push(current);
      current = add2(current, 1, datePart);
    }
    return days;
  }
  function ceil2(date2, unit) {
    var datePart = fixUnit(unit);
    var floor = startOf2(date2, datePart);
    return eq2(floor, date2) ? floor : add2(floor, 1, datePart);
  }
  function diff3(a, b) {
    var unit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day";
    var datePart = fixUnit(unit);
    var dtA = dayjs2(a);
    var dtB = dayjs2(b);
    return dtB.diff(dtA, datePart);
  }
  function minutes2(date2) {
    var dt = dayjs2(date2);
    return dt.minutes();
  }
  function firstOfWeek(culture) {
    var data = culture ? dayjsLib.localeData(culture) : dayjsLib.localeData();
    return data ? data.firstDayOfWeek() : 0;
  }
  function firstVisibleDay2(date2) {
    var firstDayOfMonth = dayjs2(date2).startOf("month");
    var firstDayOfWeek = dayjs2(firstDayOfMonth).startOf("week");
    if (dayjs2(firstDayOfMonth).isLeapYear()) {
      var day2 = firstDayOfMonth.toDate().getDay(), _diff = firstDayOfMonth.toDate().getDate() - day2 + (day2 == 0 ? -6 : 1);
      firstDayOfWeek.date(_diff);
    }
    return firstDayOfWeek.toDate();
  }
  function lastVisibleDay2(date2) {
    return dayjs2(date2).endOf("month").endOf("week").toDate();
  }
  function visibleDays2(date2) {
    var current = firstVisibleDay2(date2);
    var last = lastVisibleDay2(date2);
    var days = [];
    while (lte2(current, last)) {
      days.push(current);
      current = add2(current, 1, "d");
    }
    return days;
  }
  function getSlotDate2(dt, minutesFromMidnight, offset3) {
    return dayjs2(dt).startOf("day").minute(minutesFromMidnight + offset3).toDate();
  }
  function getTotalMin2(start2, end2) {
    return diff3(start2, end2, "minutes");
  }
  function getMinutesFromMidnight2(start2) {
    var dayStart = dayjs2(start2).startOf("day");
    var day2 = dayjs2(start2);
    return day2.diff(dayStart, "minutes") + getDayStartDstOffset(start2);
  }
  function continuesPrior2(start2, first) {
    var djStart = dayjs2(start2);
    var djFirst = dayjs2(first);
    return djStart.isBefore(djFirst, "day");
  }
  function continuesAfter2(start2, end2, last) {
    var djEnd = dayjs2(end2);
    var djLast = dayjs2(last);
    return djEnd.isSameOrAfter(djLast, "minutes");
  }
  function daySpan2(start2, end2) {
    var startDay = dayjs2(start2);
    var endDay = dayjs2(end2);
    return endDay.diff(startDay, "day");
  }
  function sortEvents2(_ref6) {
    var _ref6$evtA = _ref6.evtA, aStart = _ref6$evtA.start, aEnd = _ref6$evtA.end, aAllDay = _ref6$evtA.allDay, _ref6$evtB = _ref6.evtB, bStart = _ref6$evtB.start, bEnd = _ref6$evtB.end, bAllDay = _ref6$evtB.allDay;
    var startSort = +startOf2(aStart, "day") - +startOf2(bStart, "day");
    var durA = daySpan2(aStart, aEnd);
    var durB = daySpan2(bStart, bEnd);
    return startSort || // sort by start Day first
    durB - durA || // events spanning multiple days go first
    !!bAllDay - !!aAllDay || // then allDay single day events
    +aStart - +bStart || // then sort by start time *don't need dayjs conversion here
    +aEnd - +bEnd;
  }
  function inEventRange2(_ref7) {
    var _ref7$event = _ref7.event, start2 = _ref7$event.start, end2 = _ref7$event.end, _ref7$range = _ref7.range, rangeStart = _ref7$range.start, rangeEnd = _ref7$range.end;
    var startOfDay = dayjs2(start2).startOf("day");
    var eEnd = dayjs2(end2);
    var rStart = dayjs2(rangeStart);
    var rEnd = dayjs2(rangeEnd);
    var startsBeforeEnd = startOfDay.isSameOrBefore(rEnd, "day");
    var sameMin = !startOfDay.isSame(eEnd, "minutes");
    var endsAfterStart = sameMin ? eEnd.isAfter(rStart, "minutes") : eEnd.isSameOrAfter(rStart, "minutes");
    return startsBeforeEnd && endsAfterStart;
  }
  function isSameDate2(date1, date2) {
    var dt = dayjs2(date1);
    var dt2 = dayjs2(date2);
    return dt.isSame(dt2, "day");
  }
  function browserTZOffset() {
    var dt = /* @__PURE__ */ new Date();
    var neg = /-/.test(dt.toString()) ? "-" : "";
    var dtOffset = dt.getTimezoneOffset();
    var comparator = Number("".concat(neg).concat(Math.abs(dtOffset)));
    var mtOffset = dayjs2().utcOffset();
    return mtOffset > comparator ? 1 : 0;
  }
  return new DateLocalizer({
    formats,
    firstOfWeek,
    firstVisibleDay: firstVisibleDay2,
    lastVisibleDay: lastVisibleDay2,
    visibleDays: visibleDays2,
    format: function format(value, _format2, culture) {
      return locale(dayjs2(value), culture).format(_format2);
    },
    lt: lt2,
    lte: lte2,
    gt: gt2,
    gte: gte2,
    eq: eq2,
    neq: neq2,
    merge: merge2,
    inRange: inRange3,
    startOf: startOf2,
    endOf: endOf2,
    range: range2,
    add: add2,
    diff: diff3,
    ceil: ceil2,
    min: min3,
    max: max3,
    minutes: minutes2,
    getSlotDate: getSlotDate2,
    getTimezoneOffset,
    getDstOffset: getDstOffset2,
    getTotalMin: getTotalMin2,
    getMinutesFromMidnight: getMinutesFromMidnight2,
    continuesPrior: continuesPrior2,
    continuesAfter: continuesAfter2,
    sortEvents: sortEvents2,
    inEventRange: inEventRange2,
    isSameDate: isSameDate2,
    browserTZOffset
  });
}
var components = {
  eventWrapper: NoopWrapper,
  timeSlotWrapper: NoopWrapper,
  dateCellWrapper: NoopWrapper
};
export {
  Calendar$1 as Calendar,
  DateLocalizer,
  navigate as Navigate,
  views as Views,
  components,
  dateFnsLocalizer,
  dayjs as dayjsLocalizer,
  globalize as globalizeLocalizer,
  luxon as luxonLocalizer,
  moment as momentLocalizer,
  moveDate as move
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-big-calendar.js.map
