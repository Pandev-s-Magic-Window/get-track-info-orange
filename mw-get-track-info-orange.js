
const app_pandev_mw_get_track_info_orange_global = (function() {
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __toCommonJS = (from) => {
  var entry = (__moduleCache ??= new WeakMap).get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function") {
    for (var key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(entry, key))
        __defProp(entry, key, {
          get: __accessProp.bind(from, key),
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  __moduleCache.set(from, entry);
  return entry;
};
var __moduleCache;
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node_modules/tslib/tslib.es6.mjs
var exports_tslib_es6 = {};
__export(exports_tslib_es6, {
  default: () => tslib_es6_default,
  __values: () => __values,
  __spreadArrays: () => __spreadArrays,
  __spreadArray: () => __spreadArray,
  __spread: () => __spread,
  __setFunctionName: () => __setFunctionName,
  __runInitializers: () => __runInitializers,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __rest: () => __rest,
  __read: () => __read,
  __propKey: () => __propKey,
  __param: () => __param,
  __metadata: () => __metadata,
  __makeTemplateObject: () => __makeTemplateObject,
  __importStar: () => __importStar,
  __importDefault: () => __importDefault,
  __generator: () => __generator,
  __extends: () => __extends,
  __exportStar: () => __exportStar,
  __esDecorate: () => __esDecorate,
  __disposeResources: () => __disposeResources,
  __decorate: () => __decorate,
  __createBinding: () => __createBinding,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __awaiter: () => __awaiter,
  __await: () => __await,
  __asyncValues: () => __asyncValues,
  __asyncGenerator: () => __asyncGenerator,
  __asyncDelegator: () => __asyncDelegator,
  __assign: () => __assign,
  __addDisposableResource: () => __addDisposableResource
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1;i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== undefined && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1;i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === undefined)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0;i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : undefined;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : undefined, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
      __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = undefined;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === undefined || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0;i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length;i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0;i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length;j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar;i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f)
        i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0;i < k.length; i++)
      if (k[i] !== "default")
        __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== undefined) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === undefined) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async)
        inner = dispose;
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    if (inner)
      dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1)
          return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async)
            return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } else
          s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1)
      return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError)
      throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
}, __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length;i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
}, __createBinding, __setModuleDefault, ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function(o2) {
    var ar = [];
    for (var k in o2)
      if (Object.prototype.hasOwnProperty.call(o2, k))
        ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
}, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm(() => {
  __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  };
  __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  };
  _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  tslib_es6_default = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
  };
});

// node_modules/ix/asynciterable/asyncsink.js
var require_asyncsink = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AsyncSink = undefined;
  var ARRAY_VALUE = "value";
  var ARRAY_ERROR = "error";

  class AsyncSink {
    _ended;
    _values;
    _resolvers;
    constructor() {
      this._ended = false;
      this._values = [];
      this._resolvers = [];
    }
    [Symbol.asyncIterator]() {
      return this;
    }
    write(value) {
      this._push({ type: ARRAY_VALUE, value });
    }
    error(error) {
      this._push({ type: ARRAY_ERROR, error });
    }
    _push(item) {
      if (this._ended) {
        throw new Error("AsyncSink already ended");
      }
      if (this._resolvers.length > 0) {
        const { resolve, reject } = this._resolvers.shift();
        if (item.type === ARRAY_ERROR) {
          reject(item.error);
        } else {
          resolve({ done: false, value: item.value });
        }
      } else {
        this._values.push(item);
      }
    }
    next() {
      if (this._values.length > 0) {
        const { type, value, error } = this._values.shift();
        if (type === ARRAY_ERROR) {
          return Promise.reject(error);
        } else {
          return Promise.resolve({ done: false, value });
        }
      }
      if (this._ended) {
        return Promise.resolve({ done: true });
      }
      return new Promise((resolve, reject) => {
        this._resolvers.push({ resolve, reject });
      });
    }
    end() {
      while (this._resolvers.length > 0) {
        this._resolvers.shift().resolve({ done: true });
      }
      this._ended = true;
    }
  }
  exports.AsyncSink = AsyncSink;
});

// node_modules/ix/util/bindcallback.js
var require_bindcallback = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bindCallback = undefined;
  function bindCallback2(func, thisArg, argCount) {
    if (typeof thisArg === "undefined") {
      return func;
    }
    switch (argCount) {
      case 0:
        return function() {
          return func.call(thisArg);
        };
      case 1:
        return function(arg) {
          return func.call(thisArg, arg);
        };
      case 2:
        return function(value, index) {
          return func.call(thisArg, value, index);
        };
      case 3:
        return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
      default:
        return function() {
          return func.apply(thisArg, arguments);
        };
    }
  }
  exports.bindCallback = bindCallback2;
});

// node_modules/ix/util/identity.js
var require_identity = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.identityAsync = exports.identity = undefined;
  function identity3(x) {
    return x;
  }
  exports.identity = identity3;
  async function identityAsync(x) {
    return x;
  }
  exports.identityAsync = identityAsync;
});

// node_modules/ix/util/isiterable.js
var require_isiterable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isFetchResponse = exports.isWritableDOMStream = exports.isReadableDOMStream = exports.isWritableNodeStream = exports.isReadableNodeStream = exports.isObservable = exports.isAsyncIterable = exports.isIterator = exports.isIterable = exports.isArrayLike = exports.isPromise = exports.isObject = exports.isFunction = undefined;
  var isNumber = (x) => typeof x === "number";
  var isBoolean = (x) => typeof x === "boolean";
  var isFunction2 = (x) => typeof x === "function";
  exports.isFunction = isFunction2;
  var isObject = (x) => x != null && Object(x) === x;
  exports.isObject = isObject;
  var isPromise2 = (x) => {
    return (0, exports.isObject)(x) && (0, exports.isFunction)(x.then);
  };
  exports.isPromise = isPromise2;
  function isArrayLike2(x) {
    return (0, exports.isObject)(x) && isNumber(x["length"]);
  }
  exports.isArrayLike = isArrayLike2;
  function isIterable2(x) {
    return x != null && (0, exports.isFunction)(x[Symbol.iterator]);
  }
  exports.isIterable = isIterable2;
  function isIterator(x) {
    return (0, exports.isObject)(x) && !(0, exports.isFunction)(x[Symbol.iterator]) && (0, exports.isFunction)(x["next"]);
  }
  exports.isIterator = isIterator;
  function isAsyncIterable2(x) {
    return (0, exports.isObject)(x) && (0, exports.isFunction)(x[Symbol.asyncIterator]);
  }
  exports.isAsyncIterable = isAsyncIterable2;
  function isObservable2(x) {
    return x != null && Object(x) === x && typeof x["subscribe"] === "function";
  }
  exports.isObservable = isObservable2;
  var isReadableNodeStream = (x) => {
    return (0, exports.isObject)(x) && (0, exports.isFunction)(x["pipe"]) && (0, exports.isFunction)(x["_read"]) && isBoolean(x["readable"]) && (0, exports.isObject)(x["_readableState"]);
  };
  exports.isReadableNodeStream = isReadableNodeStream;
  var isWritableNodeStream = (x) => {
    return (0, exports.isObject)(x) && (0, exports.isFunction)(x["end"]) && (0, exports.isFunction)(x["_write"]) && isBoolean(x["writable"]) && (0, exports.isObject)(x["_writableState"]);
  };
  exports.isWritableNodeStream = isWritableNodeStream;
  var isReadableDOMStream = (x) => {
    return (0, exports.isObject)(x) && (0, exports.isFunction)(x["cancel"]) && (0, exports.isFunction)(x["getReader"]);
  };
  exports.isReadableDOMStream = isReadableDOMStream;
  var isWritableDOMStream = (x) => {
    return (0, exports.isObject)(x) && (0, exports.isFunction)(x["abort"]) && (0, exports.isFunction)(x["getWriter"]);
  };
  exports.isWritableDOMStream = isWritableDOMStream;
  var isFetchResponse = (x) => {
    return (0, exports.isObject)(x) && (0, exports.isReadableDOMStream)(x["body"]);
  };
  exports.isFetchResponse = isFetchResponse;
});

// node_modules/ix/util/tointeger.js
var require_tointeger = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toInteger = undefined;
  function toInteger(value) {
    const number = Number(value);
    if (isNaN(number)) {
      return 0;
    }
    if (number === 0 || !isFinite(number)) {
      return number;
    }
    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
  }
  exports.toInteger = toInteger;
});

// node_modules/ix/util/tolength.js
var require_tolength = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toLength = undefined;
  var tointeger_1 = require_tointeger();
  var maxSafeInteger = Math.pow(2, 53) - 1;
  function toLength(value) {
    const len = (0, tointeger_1.toInteger)(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
  }
  exports.toLength = toLength;
});

// node_modules/ix/aborterror.js
var require_aborterror = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.throwIfAborted = exports.AbortError = undefined;
  var isiterable_1 = require_isiterable();

  class AbortError extends Error {
    constructor(message = "The operation has been aborted") {
      super(message);
      Object.setPrototypeOf(this, AbortError.prototype);
      Error.captureStackTrace(this, this.constructor);
      this.name = "AbortError";
    }
    get [Symbol.toStringTag]() {
      return "AbortError";
    }
  }
  exports.AbortError = AbortError;
  function throwIfAborted(signal) {
    if (signal && signal.aborted) {
      throw new AbortError;
    }
  }
  exports.throwIfAborted = throwIfAborted;
  Object.defineProperty(AbortError, Symbol.hasInstance, {
    writable: true,
    configurable: true,
    value(x) {
      return (0, isiterable_1.isObject)(x) && (x.constructor.name === "AbortError" || x[Symbol.toStringTag] === "AbortError");
    }
  });
});

// node_modules/ix/asynciterable/asynciterablex.js
var require_asynciterablex = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FromObservableAsyncIterable = exports.FromPromiseIterable = exports.FromAsyncIterable = exports.FromArrayIterable = exports.AsyncSink = exports.AsyncIterableX = undefined;
  var bindcallback_1 = require_bindcallback();
  var identity_1 = require_identity();
  var isiterable_1 = require_isiterable();
  var tolength_1 = require_tolength();
  var aborterror_1 = require_aborterror();

  class AsyncIterableX {
    async forEach(projection, thisArg, signal) {
      const source = signal ? new WithAbortAsyncIterable(this, signal) : this;
      let i = 0;
      for await (const item of source) {
        await projection.call(thisArg, item, i++, signal);
      }
    }
    pipe(...args) {
      let i = -1;
      const n = args.length;
      let acc = this;
      while (++i < n) {
        acc = args[i](AsyncIterableX.as(acc));
      }
      return acc;
    }
    static from(source, selector = identity_1.identityAsync, thisArg) {
      const fn = (0, bindcallback_1.bindCallback)(selector, thisArg, 2);
      if ((0, isiterable_1.isIterable)(source) || (0, isiterable_1.isAsyncIterable)(source)) {
        return new FromAsyncIterable(source, fn);
      }
      if ((0, isiterable_1.isPromise)(source)) {
        return new FromPromiseIterable(source, fn);
      }
      if ((0, isiterable_1.isObservable)(source)) {
        return new FromObservableAsyncIterable(source, fn);
      }
      if ((0, isiterable_1.isArrayLike)(source)) {
        return new FromArrayIterable(source, fn);
      }
      if ((0, isiterable_1.isIterator)(source)) {
        return new FromAsyncIterable({ [Symbol.asyncIterator]: () => source }, fn);
      }
      throw new TypeError("Input type not supported");
    }
    static as(source) {
      if (source instanceof AsyncIterableX) {
        return source;
      }
      if (typeof source === "string") {
        return new FromArrayIterable([source], identity_1.identityAsync);
      }
      if ((0, isiterable_1.isIterable)(source) || (0, isiterable_1.isAsyncIterable)(source)) {
        return new FromAsyncIterable(source, identity_1.identityAsync);
      }
      if ((0, isiterable_1.isPromise)(source)) {
        return new FromPromiseIterable(source, identity_1.identityAsync);
      }
      if ((0, isiterable_1.isObservable)(source)) {
        return new FromObservableAsyncIterable(source, identity_1.identityAsync);
      }
      if ((0, isiterable_1.isArrayLike)(source)) {
        return new FromArrayIterable(source, identity_1.identityAsync);
      }
      return new FromArrayIterable([source], identity_1.identityAsync);
    }
  }
  exports.AsyncIterableX = AsyncIterableX;
  AsyncIterableX.prototype[Symbol.toStringTag] = "AsyncIterableX";
  Object.defineProperty(AsyncIterableX, Symbol.hasInstance, {
    writable: true,
    configurable: true,
    value(inst) {
      return !!(inst && inst[Symbol.toStringTag] === "AsyncIterableX");
    }
  });
  var ARRAY_VALUE = "value";
  var ARRAY_ERROR = "error";

  class AsyncSink {
    _ended;
    _values;
    _resolvers;
    constructor() {
      this._ended = false;
      this._values = [];
      this._resolvers = [];
    }
    [Symbol.asyncIterator]() {
      return this;
    }
    write(value) {
      this._push({ type: ARRAY_VALUE, value });
    }
    error(error) {
      this._push({ type: ARRAY_ERROR, error });
    }
    _push(item) {
      if (this._ended) {
        throw new Error("AsyncSink already ended");
      }
      if (this._resolvers.length > 0) {
        const { resolve, reject } = this._resolvers.shift();
        if (item.type === ARRAY_ERROR) {
          reject(item.error);
        } else {
          resolve({ done: false, value: item.value });
        }
      } else {
        this._values.push(item);
      }
    }
    next() {
      if (this._values.length > 0) {
        const { type, value, error } = this._values.shift();
        if (type === ARRAY_ERROR) {
          return Promise.reject(error);
        } else {
          return Promise.resolve({ done: false, value });
        }
      }
      if (this._ended) {
        return Promise.resolve({ done: true });
      }
      return new Promise((resolve, reject) => {
        this._resolvers.push({ resolve, reject });
      });
    }
    end() {
      while (this._resolvers.length > 0) {
        this._resolvers.shift().resolve({ done: true });
      }
      this._ended = true;
    }
  }
  exports.AsyncSink = AsyncSink;

  class FromArrayIterable extends AsyncIterableX {
    _source;
    _selector;
    constructor(source, selector) {
      super();
      this._source = source;
      this._selector = selector;
    }
    async* [Symbol.asyncIterator]() {
      let i = 0;
      const length = (0, tolength_1.toLength)(this._source.length);
      while (i < length) {
        yield await this._selector(this._source[i], i++);
      }
    }
  }
  exports.FromArrayIterable = FromArrayIterable;

  class FromAsyncIterable extends AsyncIterableX {
    _source;
    _selector;
    constructor(source, selector) {
      super();
      this._source = source;
      this._selector = selector;
    }
    async* [Symbol.asyncIterator]() {
      let i = 0;
      for await (const item of this._source) {
        yield await this._selector(item, i++);
      }
    }
  }
  exports.FromAsyncIterable = FromAsyncIterable;

  class FromPromiseIterable extends AsyncIterableX {
    _source;
    _selector;
    constructor(source, selector) {
      super();
      this._source = source;
      this._selector = selector;
    }
    async* [Symbol.asyncIterator]() {
      const item = await this._source;
      yield await this._selector(item, 0);
    }
  }
  exports.FromPromiseIterable = FromPromiseIterable;

  class FromObservableAsyncIterable extends AsyncIterableX {
    _observable;
    _selector;
    constructor(observable3, selector) {
      super();
      this._observable = observable3;
      this._selector = selector;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      const sink = new AsyncSink;
      const subscription = this._observable.subscribe({
        next(value) {
          sink.write(value);
        },
        error(err) {
          sink.error(err);
        },
        complete() {
          sink.end();
        }
      });
      function onAbort() {
        sink.error(new aborterror_1.AbortError);
      }
      if (signal) {
        signal.addEventListener("abort", onAbort);
      }
      let i = 0;
      try {
        for (let next;!(next = await sink.next()).done; ) {
          (0, aborterror_1.throwIfAborted)(signal);
          yield await this._selector(next.value, i++);
        }
      } finally {
        if (signal) {
          signal.removeEventListener("abort", onAbort);
        }
        subscription.unsubscribe();
      }
    }
  }
  exports.FromObservableAsyncIterable = FromObservableAsyncIterable;

  class WithAbortAsyncIterable {
    _source;
    _signal;
    constructor(source, signal) {
      this._source = source;
      this._signal = signal;
    }
    [Symbol.asyncIterator]() {
      return this._source[Symbol.asyncIterator](this._signal);
    }
  }
  try {
    ((isBrowser) => {
      if (isBrowser) {
        return;
      }
      AsyncIterableX.prototype["pipe"] = nodePipe;
      const readableOpts = (x, opts = x._writableState || { objectMode: true }) => opts;
      function nodePipe(...args) {
        let i = -1;
        let end;
        const n = args.length;
        let prev = this;
        let next;
        while (++i < n) {
          next = args[i];
          if (typeof next === "function") {
            prev = next(AsyncIterableX.as(prev));
          } else if ((0, isiterable_1.isWritableNodeStream)(next)) {
            ({ end = true } = args[i + 1] || {});
            return (0, isiterable_1.isReadableNodeStream)(prev) ? prev.pipe(next, { end }) : AsyncIterableX.as(prev).toNodeStream(readableOpts(next)).pipe(next, { end });
          }
        }
        return prev;
      }
    })(typeof window === "object" && typeof document === "object" && document.nodeType === 9);
  } catch (e) {}
});

// node_modules/ix/iterable/operators/_refcountlist.js
var require__refcountlist = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RefCountList = exports.MaxRefCountList = undefined;

  class MaxRefCountList {
    _list = [];
    clear() {
      this._list = [];
    }
    get count() {
      return this._list.length;
    }
    get(index) {
      return this._list[index];
    }
    push(value) {
      this._list.push(value);
    }
    done() {}
  }
  exports.MaxRefCountList = MaxRefCountList;

  class RefCountList {
    _readerCount;
    _list;
    _count = 0;
    constructor(readerCount) {
      this._readerCount = readerCount;
      this._list = new Map;
    }
    clear() {
      this._list.clear();
    }
    get count() {
      return this._count;
    }
    get readerCount() {
      return this._readerCount;
    }
    set readerCount(value) {
      this._readerCount = value;
    }
    done() {
      this._readerCount--;
    }
    get(index) {
      if (!this._list.has(index)) {
        throw new Error("Element no longer available in the buffer.");
      }
      const res = this._list.get(index);
      const val = res.value;
      if (--res.count === 0) {
        this._list.delete(index);
      }
      return val;
    }
    push(value) {
      this._list.set(this._count++, { value, count: this._readerCount });
    }
  }
  exports.RefCountList = RefCountList;
});

// node_modules/ix/asynciterable/create.js
var require_create = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.create = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var aborterror_1 = require_aborterror();

  class AnonymousAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _fn;
    constructor(fn) {
      super();
      this._fn = fn;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      const it = await this._fn(signal);
      let next;
      while (!(next = await it.next()).done) {
        yield next.value;
      }
    }
  }
  function create(fn) {
    return new AnonymousAsyncIterable(fn);
  }
  exports.create = create;
});

// node_modules/ix/asynciterable/operators/memoize.js
var require_memoize = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.memoize = exports.MemoizeAsyncBuffer = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var _refcountlist_1 = require__refcountlist();
  var create_1 = require_create();
  var aborterror_1 = require_aborterror();

  class MemoizeAsyncBuffer extends asynciterablex_1.AsyncIterableX {
    _source;
    _buffer;
    _shared;
    _error;
    _stopped;
    constructor(source, buffer3) {
      super();
      this._error = null;
      this._shared = null;
      this._stopped = false;
      this._source = source;
      this._buffer = buffer3;
    }
    [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      return this._getIterable(0);
    }
    async* _getIterable(offset = 0) {
      let i = offset - 1;
      let done = false;
      const buffer3 = this._buffer;
      try {
        do {
          if (++i < buffer3.count) {
            yield buffer3.get(i);
            continue;
          }
          if (this._stopped) {
            throw this._error;
          }
          if (this._shared === null) {
            this._shared = this._source.next().then((r) => {
              this._shared = null;
              if (!r.done) {
                buffer3.push(r.value);
              }
              return r;
            });
          }
          ({ done } = await this._shared.catch((e) => {
            this._error = e;
            this._stopped = true;
            throw e;
          }));
          if (!done) {
            yield buffer3.get(i);
          }
        } while (!done);
      } finally {
        buffer3.done();
      }
    }
  }
  exports.MemoizeAsyncBuffer = MemoizeAsyncBuffer;
  function memoize(readerCount = -1, selector) {
    return function memoizeOperatorFunction(source) {
      if (!selector) {
        return readerCount === -1 ? new MemoizeAsyncBuffer(source[Symbol.asyncIterator](), new _refcountlist_1.MaxRefCountList) : new MemoizeAsyncBuffer(source[Symbol.asyncIterator](), new _refcountlist_1.RefCountList(readerCount));
      }
      return (0, create_1.create)(() => selector(memoize(readerCount)(source))[Symbol.asyncIterator]());
    };
  }
  exports.memoize = memoize;
});

// node_modules/ix/asynciterable/asyncifyerrback.js
var require_asyncifyerrback = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.asyncifyErrback = undefined;
  var asyncsink_1 = require_asyncsink();
  var memoize_1 = require_memoize();
  function asyncifyErrback(func) {
    return function(...args) {
      const sink = new asyncsink_1.AsyncSink;
      const handler = function(err, ...innerArgs) {
        if (err) {
          sink.error(err);
          sink.end();
        } else {
          sink.write(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
          sink.end();
        }
      };
      try {
        func(...args.concat(handler));
      } catch (e) {
        sink.error(e);
        sink.end();
      }
      const yielder = async function* () {
        for (let next;!(next = await sink.next()).done; ) {
          yield next.value;
        }
      };
      return (0, memoize_1.memoize)()(yielder());
    };
  }
  exports.asyncifyErrback = asyncifyErrback;
});

// node_modules/ix/asynciterable/asyncify.js
var require_asyncify = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.asyncify = undefined;
  var asyncsink_1 = require_asyncsink();
  var memoize_1 = require_memoize();
  function asyncify(func) {
    return function(...args) {
      const sink = new asyncsink_1.AsyncSink;
      const handler = function(...innerArgs) {
        sink.write(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
        sink.end();
      };
      try {
        func(...args.concat(handler));
      } catch (e) {
        sink.error(e);
        sink.end();
      }
      const yielder = async function* () {
        for (let next;!(next = await sink.next()).done; ) {
          yield next.value;
        }
      };
      return (0, memoize_1.memoize)()(yielder());
    };
  }
  exports.asyncify = asyncify;
});

// node_modules/ix/asynciterable/operators/withabort.js
var require_withabort = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.wrapWithAbort = exports.withAbort = exports.WithAbortAsyncIterable = undefined;
  var asynciterablex_1 = require_asynciterablex();

  class WithAbortAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _signal;
    constructor(source, signal) {
      super();
      this._source = source;
      this._signal = signal;
    }
    withAbort(signal) {
      return new WithAbortAsyncIterable(this._source, signal);
    }
    [Symbol.asyncIterator]() {
      return this._source[Symbol.asyncIterator](this._signal);
    }
  }
  exports.WithAbortAsyncIterable = WithAbortAsyncIterable;
  function withAbort(signal) {
    return function withAbortOperatorFunction(source) {
      return new WithAbortAsyncIterable(source, signal);
    };
  }
  exports.withAbort = withAbort;
  function wrapWithAbort(source, signal) {
    return signal ? new WithAbortAsyncIterable(source, signal) : source;
  }
  exports.wrapWithAbort = wrapWithAbort;
});

// node_modules/ix/asynciterable/average.js
var require_average = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.average = undefined;
  var identity_1 = require_identity();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function average(source, options) {
    const { ["selector"]: selector = identity_1.identityAsync, ["signal"]: signal, ["thisArg"]: thisArg } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    let sum = 0;
    let count3 = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      sum += await selector.call(thisArg, item, signal);
      count3++;
    }
    if (count3 === 0) {
      throw new Error("Empty collection");
    }
    return sum / count3;
  }
  exports.average = average;
});

// node_modules/ix/util/returniterator.js
var require_returniterator = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.returnAsyncIterator = exports.returnIterator = undefined;
  function returnIterator(it) {
    if (typeof it.return === "function") {
      it.return();
    }
  }
  exports.returnIterator = returnIterator;
  async function returnAsyncIterator(it) {
    if (typeof it.return === "function") {
      await it.return();
    }
  }
  exports.returnAsyncIterator = returnAsyncIterator;
});

// node_modules/ix/asynciterable/catcherror.js
var require_catcherror = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.catchError = exports.catchAll = exports.CatchAllAsyncIterable = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var returniterator_1 = require_returniterator();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();

  class CatchAllAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
      super();
      this._source = source;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      let error = null;
      let hasError = false;
      for (const source of this._source) {
        const it = (0, withabort_1.wrapWithAbort)(source, signal)[Symbol.asyncIterator]();
        error = null;
        hasError = false;
        while (true) {
          let c = {};
          try {
            const { done, value } = await it.next();
            if (done) {
              await (0, returniterator_1.returnAsyncIterator)(it);
              break;
            }
            c = value;
          } catch (e) {
            error = e;
            hasError = true;
            await (0, returniterator_1.returnAsyncIterator)(it);
            break;
          }
          yield c;
        }
        if (!hasError) {
          break;
        }
      }
      if (hasError) {
        throw error;
      }
    }
  }
  exports.CatchAllAsyncIterable = CatchAllAsyncIterable;
  function catchAll(source) {
    return new CatchAllAsyncIterable(source);
  }
  exports.catchAll = catchAll;
  function catchError3(...args) {
    return new CatchAllAsyncIterable(args);
  }
  exports.catchError = catchError3;
});

// node_modules/ix/util/safeRace.js
var require_safeRace = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.safeRace = undefined;
  function isPrimitive(value) {
    return value === null || typeof value !== "object" && typeof value !== "function";
  }
  var wm = new WeakMap;
  function safeRace(contenders) {
    let deferred;
    const result = new Promise((resolve, reject) => {
      deferred = { resolve, reject };
      for (const contender of contenders) {
        if (isPrimitive(contender)) {
          Promise.resolve(contender).then(resolve, reject);
          continue;
        }
        let record = wm.get(contender);
        if (record === undefined) {
          record = { deferreds: new Set([deferred]), settled: false };
          wm.set(contender, record);
          Promise.resolve(contender).then((value) => {
            for (const { resolve: resolve2 } of record.deferreds) {
              resolve2(value);
            }
            record.deferreds.clear();
            record.settled = true;
          }, (err) => {
            for (const { reject: reject2 } of record.deferreds) {
              reject2(err);
            }
            record.deferreds.clear();
            record.settled = true;
          });
        } else if (record.settled) {
          Promise.resolve(contender).then(resolve, reject);
        } else {
          record.deferreds.add(deferred);
        }
      }
    });
    return result.finally(() => {
      for (const contender of contenders) {
        if (!isPrimitive(contender)) {
          const record = wm.get(contender);
          record.deferreds.delete(deferred);
        }
      }
    });
  }
  exports.safeRace = safeRace;
});

// node_modules/ix/asynciterable/combinelatest.js
var require_combinelatest = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.combineLatest = exports.CombineLatestAsyncIterable = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var identity_1 = require_identity();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  var safeRace_1 = require_safeRace();
  var NEVER_PROMISE = new Promise(() => {});
  function wrapPromiseWithIndex(promise, index) {
    return promise.then((value) => ({ value, index }));
  }

  class CombineLatestAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _sources;
    constructor(sources) {
      super();
      this._sources = sources;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      const length = this._sources.length;
      const iterators = new Array(length);
      const nexts = new Array(length);
      let hasValueAll = false;
      const values = new Array(length);
      const hasValues = new Array(length);
      let active = length;
      hasValues.fill(false);
      for (let i = 0;i < length; i++) {
        const iterator2 = (0, withabort_1.wrapWithAbort)(this._sources[i], signal)[Symbol.asyncIterator]();
        iterators[i] = iterator2;
        nexts[i] = wrapPromiseWithIndex(iterator2.next(), i);
      }
      while (active > 0) {
        const next = (0, safeRace_1.safeRace)(nexts);
        const { value: { value: value$, done: done$ }, index } = await next;
        if (done$) {
          nexts[index] = NEVER_PROMISE;
          active--;
        } else {
          values[index] = value$;
          hasValues[index] = true;
          const iterator$ = iterators[index];
          nexts[index] = wrapPromiseWithIndex(iterator$.next(), index);
          if (hasValueAll || (hasValueAll = hasValues.every(identity_1.identity))) {
            yield values;
          }
        }
      }
    }
  }
  exports.CombineLatestAsyncIterable = CombineLatestAsyncIterable;
  function combineLatest3(...sources) {
    return new CombineLatestAsyncIterable(sources);
  }
  exports.combineLatest = combineLatest3;
});

// node_modules/ix/asynciterable/concat.js
var require_concat = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.concat = exports._concatAll = exports.ConcatAsyncIterable = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();

  class ConcatAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
      super();
      this._source = source;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      for (const outer of this._source) {
        for await (const item of (0, withabort_1.wrapWithAbort)(outer, signal)) {
          yield item;
        }
      }
    }
  }
  exports.ConcatAsyncIterable = ConcatAsyncIterable;
  function _concatAll(source) {
    return new ConcatAsyncIterable(source);
  }
  exports._concatAll = _concatAll;
  function concat3(...args) {
    return new ConcatAsyncIterable(args);
  }
  exports.concat = concat3;
});

// node_modules/ix/asynciterable/count.js
var require_count = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.count = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function count3(source, options) {
    const { ["signal"]: signal, ["thisArg"]: thisArg, ["predicate"]: predicate = async () => true } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      if (await predicate.call(thisArg, item, i, signal)) {
        i++;
      }
    }
    return i;
  }
  exports.count = count3;
});

// node_modules/ix/asynciterable/defer.js
var require_defer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.defer = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();

  class DeferAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _fn;
    constructor(fn) {
      super();
      this._fn = fn;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      const items = await this._fn(signal);
      for await (const item of (0, withabort_1.wrapWithAbort)(items, signal)) {
        yield item;
      }
    }
  }
  function defer2(factory) {
    return new DeferAsyncIterable(factory);
  }
  exports.defer = defer2;
});

// node_modules/ix/asynciterable/elementat.js
var require_elementat = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.elementAt = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function elementAt3(source, index, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    let i = index;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      if (i === 0) {
        return item;
      }
      i--;
    }
    return;
  }
  exports.elementAt = elementAt3;
});

// node_modules/ix/asynciterable/empty.js
var require_empty = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.empty = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var aborterror_1 = require_aborterror();

  class EmptyAsyncIterable extends asynciterablex_1.AsyncIterableX {
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
    }
  }
  function empty2() {
    return new EmptyAsyncIterable;
  }
  exports.empty = empty2;
});

// node_modules/ix/asynciterable/every.js
var require_every = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.every = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function every3(source, options) {
    const { ["signal"]: signal, ["thisArg"]: thisArg, ["predicate"]: predicate } = options;
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      if (!await predicate.call(thisArg, item, i++, signal)) {
        return false;
      }
    }
    return true;
  }
  exports.every = every3;
});

// node_modules/ix/asynciterable/findindex.js
var require_findindex = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.findIndex = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function findIndex3(source, options) {
    const { ["signal"]: signal, ["thisArg"]: thisArg, ["predicate"]: predicate } = options;
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      if (await predicate.call(thisArg, item, i++, signal)) {
        return i;
      }
    }
    return -1;
  }
  exports.findIndex = findIndex3;
});

// node_modules/ix/asynciterable/find.js
var require_find = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.find = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function find3(source, options) {
    const { ["signal"]: signal, ["thisArg"]: thisArg, ["predicate"]: predicate } = options;
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      if (await predicate.call(thisArg, item, i++, signal)) {
        return item;
      }
    }
    return;
  }
  exports.find = find3;
});

// node_modules/ix/asynciterable/first.js
var require_first = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.first = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function first3(source, options) {
    const { ["signal"]: signal, ["thisArg"]: thisArg, ["predicate"]: predicate = async () => true } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      if (await predicate.call(thisArg, item, i++, signal)) {
        return item;
      }
    }
    return;
  }
  exports.first = first3;
});

// node_modules/ix/asynciterable/forkjoin.js
var require_forkjoin = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.forkJoin = undefined;
  var identity_1 = require_identity();
  var withabort_1 = require_withabort();
  var safeRace_1 = require_safeRace();
  var NEVER_PROMISE = new Promise(() => {});
  function wrapPromiseWithIndex(promise, index) {
    return promise.then((value) => ({ value, index }));
  }
  async function forkJoin2(...sources) {
    let signal = sources.shift();
    if (!(signal instanceof AbortSignal)) {
      sources.unshift(signal);
      signal = undefined;
    }
    const length = sources.length;
    const iterators = new Array(length);
    const nexts = new Array(length);
    let active = length;
    const values = new Array(length);
    const hasValues = new Array(length);
    hasValues.fill(false);
    for (let i = 0;i < length; i++) {
      const iterator2 = (0, withabort_1.wrapWithAbort)(sources[i], signal)[Symbol.asyncIterator]();
      iterators[i] = iterator2;
      nexts[i] = wrapPromiseWithIndex(iterator2.next(), i);
    }
    while (active > 0) {
      const next = (0, safeRace_1.safeRace)(nexts);
      const { value: next$, index } = await next;
      if (next$.done) {
        nexts[index] = NEVER_PROMISE;
        active--;
      } else {
        const iterator$ = iterators[index];
        nexts[index] = wrapPromiseWithIndex(iterator$.next(), index);
        hasValues[index] = true;
        values[index] = next$.value;
      }
    }
    if (hasValues.length > 0 && hasValues.every(identity_1.identity)) {
      return values;
    }
    return;
  }
  exports.forkJoin = forkJoin2;
});

// node_modules/ix/asynciterable/fromdomstream.js
var require_fromdomstream = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fromDOMStream = exports.AsyncIterableReadableByteStream = exports.AsyncIterableReadableStream = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var SharedArrayBuf = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : ArrayBuffer;

  class AsyncIterableReadableStream extends asynciterablex_1.AsyncIterableX {
    _stream;
    constructor(_stream) {
      super();
      this._stream = _stream;
    }
    [Symbol.asyncIterator]() {
      const stream = this._stream;
      const reader = stream["getReader"]();
      return _consumeReader(stream, reader, defaultReaderToAsyncIterator(reader));
    }
  }
  exports.AsyncIterableReadableStream = AsyncIterableReadableStream;

  class AsyncIterableReadableByteStream extends AsyncIterableReadableStream {
    [Symbol.asyncIterator]() {
      const stream = this._stream;
      let reader;
      try {
        reader = stream["getReader"]({ mode: "byob" });
      } catch (e) {
        return super[Symbol.asyncIterator]();
      }
      const iterator2 = _consumeReader(stream, reader, byobReaderToAsyncIterator(reader));
      iterator2.next();
      return iterator2;
    }
  }
  exports.AsyncIterableReadableByteStream = AsyncIterableReadableByteStream;
  async function* _consumeReader(stream, reader, iterator2) {
    let threw = false;
    try {
      yield* iterator2;
    } catch (e) {
      if ((threw = true) && reader) {
        await reader["cancel"](e);
      }
    } finally {
      if (reader) {
        if (!threw) {
          await reader["cancel"]();
        }
        if (stream.locked) {
          try {
            reader.closed.catch(() => {});
            reader.releaseLock();
          } catch (e) {}
        }
      }
    }
  }
  async function* defaultReaderToAsyncIterator(reader) {
    let r;
    while (!(r = await reader.read()).done) {
      yield r.value;
    }
  }
  async function* byobReaderToAsyncIterator(reader) {
    let r;
    let value = yield null;
    while (!(r = await readNext(reader, value, 0)).done) {
      value = yield r.value;
    }
  }
  async function readNext(reader, bufferOrLen, offset) {
    let size;
    let buffer3;
    if (typeof bufferOrLen === "number") {
      buffer3 = new ArrayBuffer(size = bufferOrLen);
    } else if (bufferOrLen instanceof ArrayBuffer) {
      size = (buffer3 = bufferOrLen).byteLength;
    } else if (bufferOrLen instanceof SharedArrayBuf) {
      size = (buffer3 = bufferOrLen).byteLength;
    } else {
      return { done: true, value: undefined };
    }
    return await readInto(reader, buffer3, offset, size);
  }
  async function readInto(reader, buffer3, offset, size) {
    let innerOffset = offset;
    if (innerOffset >= size) {
      return { done: false, value: new Uint8Array(buffer3, 0, size) };
    }
    const { done, value } = await reader.read(new Uint8Array(buffer3, innerOffset, size - innerOffset));
    if ((innerOffset += value.byteLength) < size && !done) {
      return await readInto(reader, value.buffer, innerOffset, size);
    }
    return { done, value: new Uint8Array(value.buffer, 0, innerOffset) };
  }
  function fromDOMStream(stream, options) {
    return !options || options["mode"] !== "byob" ? new AsyncIterableReadableStream(stream) : new AsyncIterableReadableByteStream(stream);
  }
  exports.fromDOMStream = fromDOMStream;
});

// node_modules/ix/asynciterable/fromeventpattern.js
var require_fromeventpattern = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fromEventPattern = undefined;
  var memoize_1 = require_memoize();
  var identity_1 = require_identity();
  var isiterable_1 = require_isiterable();
  var asyncsink_1 = require_asyncsink();
  var { isArray } = Array;
  function callOrApply(fn, args) {
    return isArray(args) ? fn(...args) : fn(args);
  }
  function fromEventPattern2(addHandler, removeHandler, resultSelector) {
    if (!(0, isiterable_1.isFunction)(resultSelector)) {
      resultSelector = identity_1.identity;
    }
    const sink = new asyncsink_1.AsyncSink;
    const handler = (...args) => sink.write(callOrApply(resultSelector, args));
    addHandler(handler);
    const loop = async function* () {
      try {
        for (let next;!(next = await sink.next()).done; ) {
          yield next.value;
        }
      } finally {
        removeHandler(handler);
        sink.end();
      }
    };
    return (0, memoize_1.memoize)()(loop());
  }
  exports.fromEventPattern = fromEventPattern2;
});

// node_modules/ix/asynciterable/fromevent.js
var require_fromevent = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fromEvent = undefined;
  var fromeventpattern_1 = require_fromeventpattern();
  var isiterable_1 = require_isiterable();
  function isMessagePortEventEmitter(obj) {
    return !!obj && (0, isiterable_1.isFunction)(obj.on) && (0, isiterable_1.isFunction)(obj.off);
  }
  function isNodeEventEmitter(obj) {
    return !!obj && (0, isiterable_1.isFunction)(obj.addListener) && (0, isiterable_1.isFunction)(obj.removeListener);
  }
  function isEventTarget(obj) {
    return !!obj && (0, isiterable_1.isFunction)(obj.addEventListener) && (0, isiterable_1.isFunction)(obj.removeEventListener);
  }
  function fromEvent2(obj, type, options, resultSelector) {
    if ((0, isiterable_1.isFunction)(options)) {
      resultSelector = options;
      options = undefined;
    }
    if (isEventTarget(obj)) {
      const target = obj;
      return (0, fromeventpattern_1.fromEventPattern)((h) => target.addEventListener(type, h, options), (h) => target.removeEventListener(type, h, options), resultSelector);
    } else if (isMessagePortEventEmitter(obj)) {
      const target = obj;
      return (0, fromeventpattern_1.fromEventPattern)((h) => target.on(type, h), (h) => target.off(type, h), resultSelector);
    } else if (isNodeEventEmitter(obj)) {
      const target = obj;
      return (0, fromeventpattern_1.fromEventPattern)((h) => target.addListener(type, h), (h) => target.removeListener(type, h), resultSelector);
    } else {
      throw new TypeError("Unsupported event target");
    }
  }
  exports.fromEvent = fromEvent2;
});

// node_modules/ix/asynciterable/generate.js
var require_generate = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.generate = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var aborterror_1 = require_aborterror();

  class GenerateAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _initialState;
    _condition;
    _iterate;
    _resultSelector;
    constructor(initialState, condition, iterate, resultSelector) {
      super();
      this._initialState = initialState;
      this._condition = condition;
      this._iterate = iterate;
      this._resultSelector = resultSelector;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      for (let i = this._initialState;await this._condition(i, signal); i = await this._iterate(i, signal)) {
        yield await this._resultSelector(i, signal);
      }
    }
  }
  function generate2(initialState, condition, iterate, resultSelector) {
    return new GenerateAsyncIterable(initialState, condition, iterate, resultSelector);
  }
  exports.generate = generate2;
});

// node_modules/ix/asynciterable/_sleep.js
var require__sleep = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sleep = undefined;
  var aborterror_1 = require_aborterror();
  function sleep(dueTime, signal) {
    return new Promise((resolve, reject) => {
      if (signal && signal.aborted) {
        reject(new aborterror_1.AbortError);
      }
      const id = setTimeout(() => {
        if (signal) {
          signal.removeEventListener("abort", onAbort);
          if (signal.aborted) {
            onAbort();
            return;
          }
        }
        resolve();
      }, dueTime);
      if (signal) {
        signal.addEventListener("abort", onAbort, { once: true });
      }
      function onAbort() {
        clearTimeout(id);
        reject(new aborterror_1.AbortError);
      }
    });
  }
  exports.sleep = sleep;
});

// node_modules/ix/asynciterable/generatetime.js
var require_generatetime = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.generateTime = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var _sleep_1 = require__sleep();
  var aborterror_1 = require_aborterror();

  class GenerateTimeAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _initialState;
    _condition;
    _iterate;
    _resultSelector;
    _timeSelector;
    constructor(initialState, condition, iterate, resultSelector, timeSelector) {
      super();
      this._initialState = initialState;
      this._condition = condition;
      this._iterate = iterate;
      this._resultSelector = resultSelector;
      this._timeSelector = timeSelector;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      for (let i = this._initialState;await this._condition(i, signal); i = await this._iterate(i, signal)) {
        const time = await this._timeSelector(i, signal);
        await (0, _sleep_1.sleep)(time, signal);
        yield await this._resultSelector(i, signal);
      }
    }
  }
  function generateTime(initialState, condition, iterate, resultSelector, timeSelector) {
    return new GenerateTimeAsyncIterable(initialState, condition, iterate, resultSelector, timeSelector);
  }
  exports.generateTime = generateTime;
});

// node_modules/ix/asynciterable/iif.js
var require_iif = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.iif = undefined;
  var defer_1 = require_defer();
  var empty_1 = require_empty();
  function iif2(condition, thenSource, elseSource = (0, empty_1.empty)()) {
    return (0, defer_1.defer)(async (signal) => await condition(signal) ? thenSource : elseSource);
  }
  exports.iif = iif2;
});

// node_modules/ix/util/comparer.js
var require_comparer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.equalityComparerAsync = exports.equalityComparer = exports.comparerAsync = exports.comparer = undefined;
  function comparer(x, y) {
    return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
  }
  exports.comparer = comparer;
  async function comparerAsync(x, y) {
    return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
  }
  exports.comparerAsync = comparerAsync;
  function equalityComparer(key, minValue) {
    return key > minValue ? 1 : key < minValue ? -1 : 0;
  }
  exports.equalityComparer = equalityComparer;
  async function equalityComparerAsync(key, minValue) {
    return key > minValue ? 1 : key < minValue ? -1 : 0;
  }
  exports.equalityComparerAsync = equalityComparerAsync;
});

// node_modules/ix/asynciterable/includes.js
var require_includes = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.includes = undefined;
  var comparer_1 = require_comparer();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function includes(source, valueToFind, fromIndex = 0, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    let fromIdx = fromIndex;
    let i = 0;
    if (Math.abs(fromIdx)) {
      fromIdx = 0;
    }
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      if (i++ > fromIdx && (0, comparer_1.comparer)(item, valueToFind)) {
        return true;
      }
    }
    return false;
  }
  exports.includes = includes;
});

// node_modules/ix/asynciterable/interval.js
var require_interval = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.interval = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var _sleep_1 = require__sleep();
  var aborterror_1 = require_aborterror();

  class IntervalAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _dueTime;
    constructor(dueTime) {
      super();
      this._dueTime = dueTime;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      let i = 0;
      while (true) {
        await (0, _sleep_1.sleep)(this._dueTime, signal);
        yield i++;
      }
    }
  }
  function interval2(dueTime) {
    return new IntervalAsyncIterable(dueTime);
  }
  exports.interval = interval2;
});

// node_modules/ix/asynciterable/isempty.js
var require_isempty = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isEmpty = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function isEmpty3(source, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    for await (const _ of (0, withabort_1.wrapWithAbort)(source, signal)) {
      return false;
    }
    return true;
  }
  exports.isEmpty = isEmpty3;
});

// node_modules/ix/asynciterable/last.js
var require_last = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.last = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function last4(source, options) {
    const { ["signal"]: signal, ["thisArg"]: thisArg, ["predicate"]: predicate = async () => true } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    let result;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      if (await predicate.call(thisArg, item, i++, signal)) {
        result = item;
      }
    }
    return result;
  }
  exports.last = last4;
});

// node_modules/ix/asynciterable/max.js
var require_max = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.max = undefined;
  var comparer_1 = require_comparer();
  var identity_1 = require_identity();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function max3(source, options) {
    const { ["comparer"]: comparer = comparer_1.equalityComparerAsync, ["signal"]: signal, ["selector"]: selector = identity_1.identityAsync } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    const it = (0, withabort_1.wrapWithAbort)(source, signal)[Symbol.asyncIterator]();
    let next = await it.next();
    if (next.done) {
      throw new Error("Sequence contains no elements");
    }
    let maxValue = await selector(next.value);
    while (!(next = await it.next()).done) {
      const current = await selector(next.value);
      if (await comparer(current, maxValue) > 0) {
        maxValue = current;
      }
    }
    return maxValue;
  }
  exports.max = max3;
});

// node_modules/ix/asynciterable/_extremaby.js
var require__extremaby = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.extremaBy = undefined;
  var aborterror_1 = require_aborterror();
  var withabort_1 = require_withabort();
  async function extremaBy(source, selector, comparer, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    let result = [];
    const it = (0, withabort_1.wrapWithAbort)(source, signal)[Symbol.asyncIterator]();
    const { value, done } = await it.next();
    if (done) {
      throw new Error("Sequence contains no elements");
    }
    let resKey = await selector(value, signal);
    result.push(value);
    let next;
    while (!(next = await it.next()).done) {
      const current = next.value;
      const key = await selector(current, signal);
      const cmp = await comparer(key, resKey, signal);
      if (cmp === 0) {
        result.push(current);
      } else if (cmp > 0) {
        result = [current];
        resKey = key;
      }
    }
    return result;
  }
  exports.extremaBy = extremaBy;
});

// node_modules/ix/asynciterable/maxby.js
var require_maxby = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.maxBy = undefined;
  var _extremaby_1 = require__extremaby();
  var comparer_1 = require_comparer();
  function maxBy(source, options) {
    const { ["comparer"]: comparer = comparer_1.equalityComparerAsync, ["selector"]: selector, ["signal"]: signal } = options || {};
    return (0, _extremaby_1.extremaBy)(source, selector, comparer, signal);
  }
  exports.maxBy = maxBy;
});

// node_modules/ix/asynciterable/merge.js
var require_merge = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.merge = exports.MergeAsyncIterable = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  var safeRace_1 = require_safeRace();
  var NEVER_PROMISE = new Promise(() => {});
  function wrapPromiseWithIndex(promise, index) {
    return promise.then((value) => ({ value, index }));
  }

  class MergeAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
      super();
      this._source = source;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      const length = this._source.length;
      const iterators = new Array(length);
      const nexts = new Array(length);
      let active = length;
      for (let i = 0;i < length; i++) {
        const iterator2 = (0, withabort_1.wrapWithAbort)(this._source[i], signal)[Symbol.asyncIterator]();
        iterators[i] = iterator2;
        nexts[i] = wrapPromiseWithIndex(iterator2.next(), i);
      }
      while (active > 0) {
        const next = (0, safeRace_1.safeRace)(nexts);
        const { value: { done: done$, value: value$ }, index } = await next;
        if (done$) {
          nexts[index] = NEVER_PROMISE;
          active--;
        } else {
          const iterator$ = iterators[index];
          nexts[index] = wrapPromiseWithIndex(iterator$.next(), index);
          yield value$;
        }
      }
    }
  }
  exports.MergeAsyncIterable = MergeAsyncIterable;
  function merge3(source, ...args) {
    return new MergeAsyncIterable([source, ...args]);
  }
  exports.merge = merge3;
});

// node_modules/ix/asynciterable/min.js
var require_min = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.min = undefined;
  var comparer_1 = require_comparer();
  var identity_1 = require_identity();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function min3(source, options) {
    const { ["comparer"]: comparer = comparer_1.equalityComparerAsync, ["signal"]: signal, ["selector"]: selector = identity_1.identityAsync } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    const it = (0, withabort_1.wrapWithAbort)(source, signal)[Symbol.asyncIterator]();
    let next = await it.next();
    if (next.done) {
      throw new Error("Sequence contains no elements");
    }
    let minValue = await selector(next.value);
    while (!(next = await it.next()).done) {
      const current = await selector(next.value);
      if (await comparer(current, minValue) < 0) {
        minValue = current;
      }
    }
    return minValue;
  }
  exports.min = min3;
});

// node_modules/ix/asynciterable/minby.js
var require_minby = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.minBy = undefined;
  var _extremaby_1 = require__extremaby();
  var comparer_1 = require_comparer();
  function minBy(source, options) {
    const { ["comparer"]: comparer = comparer_1.equalityComparerAsync, ["selector"]: selector, ["signal"]: signal } = options || {};
    const newComparer = async (key, minValue) => -await comparer(key, minValue);
    return (0, _extremaby_1.extremaBy)(source, selector, newComparer, signal);
  }
  exports.minBy = minBy;
});

// node_modules/ix/asynciterable/never.js
var require_never = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.never = exports.NeverAsyncIterable = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var aborterror_1 = require_aborterror();

  class NeverAsyncIterable extends asynciterablex_1.AsyncIterableX {
    constructor() {
      super();
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      await new Promise((_, reject) => {
        if (signal) {
          signal.addEventListener("abort", () => reject(new aborterror_1.AbortError), { once: true });
        }
      });
    }
  }
  exports.NeverAsyncIterable = NeverAsyncIterable;
  function never2() {
    return new NeverAsyncIterable;
  }
  exports.never = never2;
});

// node_modules/ix/asynciterable/of.js
var require_of = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.of = exports.OfAsyncIterable = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var aborterror_1 = require_aborterror();

  class OfAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _args;
    constructor(args) {
      super();
      this._args = args;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      for (const item of this._args) {
        yield item;
      }
    }
  }
  exports.OfAsyncIterable = OfAsyncIterable;
  function of(...args) {
    return new OfAsyncIterable(args);
  }
  exports.of = of;
});

// node_modules/ix/asynciterable/onerrorresumenext.js
var require_onerrorresumenext = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.onErrorResumeNext = exports.OnErrorResumeNextAsyncIterable = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();

  class OnErrorResumeNextAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
      super();
      this._source = source;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      for (const item of this._source) {
        const it = (0, withabort_1.wrapWithAbort)(item, signal)[Symbol.asyncIterator]();
        while (true) {
          let next;
          try {
            next = await it.next();
          } catch (e) {
            break;
          }
          if (next.done) {
            break;
          }
          yield next.value;
        }
      }
    }
  }
  exports.OnErrorResumeNextAsyncIterable = OnErrorResumeNextAsyncIterable;
  function onErrorResumeNext3(...args) {
    return new OnErrorResumeNextAsyncIterable(args);
  }
  exports.onErrorResumeNext = onErrorResumeNext3;
});

// node_modules/ix/asynciterable/race.js
var require_race = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.race = exports.RaceAsyncIterable = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  var safeRace_1 = require_safeRace();
  function wrapPromiseWithIndex(promise, index) {
    return promise.then((value) => ({ value, index }));
  }

  class RaceAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _sources;
    constructor(sources) {
      super();
      this._sources = sources;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      const sources = this._sources;
      const length = sources.length;
      const iterators = new Array(length);
      const nexts = new Array(length);
      for (let i = 0;i < length; i++) {
        const iterator2 = (0, withabort_1.wrapWithAbort)(sources[i], signal)[Symbol.asyncIterator]();
        iterators[i] = iterator2;
        nexts[i] = wrapPromiseWithIndex(iterator2.next(), i);
      }
      const next = (0, safeRace_1.safeRace)(nexts);
      const { value: next$, index } = await next;
      if (!next$.done) {
        yield next$.value;
      }
      const iterator$ = iterators[index];
      for (let i = 0;i < length; i++) {
        if (i === index) {
          continue;
        }
        const otherIterator = iterators[i];
        if (otherIterator.return) {
          otherIterator.return();
        }
      }
      let nextItem;
      while (!(nextItem = await iterator$.next()).done) {
        yield nextItem.value;
      }
    }
  }
  exports.RaceAsyncIterable = RaceAsyncIterable;
  function race3(...sources) {
    return new RaceAsyncIterable(sources);
  }
  exports.race = race3;
});

// node_modules/ix/asynciterable/range.js
var require_range = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.range = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var aborterror_1 = require_aborterror();

  class RangeAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _start;
    _count;
    constructor(start, count3) {
      super();
      this._start = start;
      this._count = count3;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      for (let current = this._start, end = this._start + this._count;current < end; current++) {
        yield current;
      }
    }
  }
  function range2(start, count3) {
    return new RangeAsyncIterable(start, count3);
  }
  exports.range = range2;
});

// node_modules/ix/asynciterable/toarray.js
var require_toarray = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toArray = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function toArray3(source, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    const results = [];
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      results.push(item);
    }
    return results;
  }
  exports.toArray = toArray3;
});

// node_modules/ix/asynciterable/reduceright.js
var require_reduceright = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.reduceRight = undefined;
  var toarray_1 = require_toarray();
  var aborterror_1 = require_aborterror();
  async function reduceRight(source, options) {
    const { ["seed"]: seed, ["signal"]: signal, ["callback"]: callback } = options;
    const hasSeed = options.hasOwnProperty("seed");
    (0, aborterror_1.throwIfAborted)(signal);
    const array = await (0, toarray_1.toArray)(source, signal);
    let hasValue = false;
    let acc = seed;
    for (let offset = array.length - 1;offset >= 0; offset--) {
      const item = array[offset];
      if (hasValue || (hasValue = hasSeed)) {
        acc = await callback(acc, item, offset, signal);
      } else {
        acc = item;
        hasValue = true;
      }
    }
    if (!(hasSeed || hasValue)) {
      throw new Error("Sequence contains no elements");
    }
    return acc;
  }
  exports.reduceRight = reduceRight;
});

// node_modules/ix/asynciterable/reduce.js
var require_reduce = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.reduce = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function reduce3(source, options) {
    const { ["seed"]: seed, ["signal"]: signal, ["callback"]: callback } = options;
    const hasSeed = options.hasOwnProperty("seed");
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    let hasValue = false;
    let acc = seed;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      if (hasValue || (hasValue = hasSeed)) {
        acc = await callback(acc, item, i++, signal);
      } else {
        acc = item;
        hasValue = true;
        i++;
      }
    }
    if (!(hasSeed || hasValue)) {
      throw new Error("Sequence contains no elements");
    }
    return acc;
  }
  exports.reduce = reduce3;
});

// node_modules/ix/asynciterable/repeatvalue.js
var require_repeatvalue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.repeatValue = exports.RepeatValueAsyncIterable = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var aborterror_1 = require_aborterror();

  class RepeatValueAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _value;
    _count;
    constructor(value, count3) {
      super();
      this._value = value;
      this._count = count3;
    }
    async* [Symbol.asyncIterator](signal) {
      if (this._count === -1) {
        while (true) {
          (0, aborterror_1.throwIfAborted)(signal);
          yield this._value;
        }
      } else {
        for (let i = 0;i < this._count; i++) {
          (0, aborterror_1.throwIfAborted)(signal);
          yield this._value;
        }
      }
    }
  }
  exports.RepeatValueAsyncIterable = RepeatValueAsyncIterable;
  function repeatValue(value, count3 = -1) {
    return new RepeatValueAsyncIterable(value, count3);
  }
  exports.repeatValue = repeatValue;
});

// node_modules/ix/asynciterable/sequenceequal.js
var require_sequenceequal = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sequenceEqual = undefined;
  var comparer_1 = require_comparer();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function sequenceEqual3(source, other, options) {
    const { ["comparer"]: comparer = comparer_1.comparerAsync, ["signal"]: signal } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    const it1 = (0, withabort_1.wrapWithAbort)(source, signal)[Symbol.asyncIterator]();
    const it2 = (0, withabort_1.wrapWithAbort)(other, signal)[Symbol.asyncIterator]();
    let next1;
    let next2;
    while (!(next1 = await it1.next()).done) {
      if (!(!(next2 = await it2.next()).done && await comparer(next1.value, next2.value))) {
        return false;
      }
    }
    return !!(await it2.next()).done;
  }
  exports.sequenceEqual = sequenceEqual3;
});

// node_modules/ix/asynciterable/single.js
var require_single = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.single = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function single3(source, options) {
    const { ["signal"]: signal, ["thisArg"]: thisArg, ["predicate"]: predicate = async () => true } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    let result;
    let hasResult = false;
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      if (hasResult && await predicate.call(thisArg, item, i++, signal)) {
        throw new Error("More than one element was found");
      }
      if (await predicate.call(thisArg, item, i++, signal)) {
        result = item;
        hasResult = true;
      }
    }
    return result;
  }
  exports.single = single3;
});

// node_modules/ix/asynciterable/some.js
var require_some = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.some = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function some(source, options) {
    const { ["signal"]: signal, ["thisArg"]: thisArg, ["predicate"]: predicate } = options;
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      if (await predicate.call(thisArg, item, i++, signal)) {
        return true;
      }
    }
    return false;
  }
  exports.some = some;
});

// node_modules/ix/asynciterable/sum.js
var require_sum = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sum = undefined;
  var identity_1 = require_identity();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function sum(source, options) {
    const { ["selector"]: selector = identity_1.identityAsync, ["signal"]: signal, ["thisArg"]: thisArg } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    let value = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      value += await selector.call(thisArg, item, signal);
    }
    return value;
  }
  exports.sum = sum;
});

// node_modules/ix/asynciterable/throwerrror.js
var require_throwerrror = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.throwError = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var aborterror_1 = require_aborterror();

  class ThrowAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _error;
    constructor(error) {
      super();
      this._error = error;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      throw this._error;
    }
  }
  function throwError2(error) {
    return new ThrowAsyncIterable(error);
  }
  exports.throwError = throwError2;
});

// node_modules/ix/asynciterable/operators/publish.js
var require_publish = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.publish = undefined;
  var _refcountlist_1 = require__refcountlist();
  var create_1 = require_create();
  var memoize_1 = require_memoize();
  var aborterror_1 = require_aborterror();

  class PublishedAsyncBuffer extends memoize_1.MemoizeAsyncBuffer {
    constructor(source) {
      super(source, new _refcountlist_1.RefCountList(0));
    }
    [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      this._buffer.readerCount++;
      return this._getIterable(this._buffer.count)[Symbol.asyncIterator]();
    }
  }
  function publish3(selector) {
    return function publishOperatorFunction(source) {
      return selector ? (0, create_1.create)(async () => selector(publish3()(source))[Symbol.asyncIterator]()) : new PublishedAsyncBuffer(source[Symbol.asyncIterator]());
    };
  }
  exports.publish = publish3;
});

// node_modules/ix/asynciterable/todomstream.js
var require_todomstream = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toDOMStreamProto = exports.toDOMStream = undefined;
  var publish_1 = require_publish();
  var fromdomstream_1 = require_fromdomstream();
  var asynciterablex_1 = require_asynciterablex();
  function memcpy(target, source, targetByteOffset = 0, sourceByteLength = source.byteLength) {
    const targetByteLength = target.byteLength;
    const dst = new Uint8Array(target.buffer, target.byteOffset, targetByteLength);
    const src = new Uint8Array(source.buffer, source.byteOffset, Math.min(sourceByteLength, targetByteLength, source.buffer.byteLength - source.byteOffset));
    dst.set(src, targetByteOffset);
    return src.byteLength;
  }

  class AbstractUnderlyingSource {
    _source;
    constructor(_source) {
      this._source = _source;
    }
    async cancel() {
      const source = this._source;
      if (source && source.return) {
        await source.return();
      }
      this._source = null;
    }
  }

  class UnderlyingAsyncIterableDefaultSource extends AbstractUnderlyingSource {
    constructor(source) {
      super(source);
    }
    async pull(controller) {
      const source = this._source;
      if (source) {
        const r = await source.next(controller.desiredSize);
        if (!r.done) {
          return controller.enqueue(r.value);
        }
      }
      controller.close();
    }
  }

  class UnderlyingAsyncIterableByteSource extends AbstractUnderlyingSource {
    autoAllocateChunkSize;
    fallbackDefaultSource;
    constructor(reader, opts = {}) {
      super(reader);
      this.type = "bytes";
      this.autoAllocateChunkSize = opts["autoAllocateChunkSize"];
      this.fallbackDefaultSource = new UnderlyingAsyncIterableDefaultSource(reader);
    }
    async pull(controller) {
      if (!controller.byobRequest) {
        return await this.fallbackDefaultSource.pull(controller);
      }
      if (this._source) {
        const { view } = controller.byobRequest;
        const { done, value } = await this._source.next(view);
        if (!done) {
          if (typeof value === "number") {
            return controller.byobRequest.respond(value);
          }
          if (ArrayBuffer.isView(value)) {
            return value.buffer === view.buffer ? controller.byobRequest.respondWithNewView(value) : controller.byobRequest.respond(memcpy(view, value));
          }
        }
      }
      controller.close();
    }
  }
  var asyncIterableReadableStream = (() => {
    let AsyncIterableReadableByteStream_;
    let AsyncIterableDefaultReadableStream_;
    const createFirstTime = (source, opts) => {

      class AsyncIterableDefaultReadableStream extends ReadableStream {
        [Symbol.asyncIterator]() {
          return (0, fromdomstream_1.fromDOMStream)(this)[Symbol.asyncIterator]();
        }
      }

      class AsyncIterableReadableByteStream extends ReadableStream {
        [Symbol.asyncIterator]() {
          return (0, fromdomstream_1.fromDOMStream)(this, { mode: "byob" })[Symbol.asyncIterator]();
        }
      }
      AsyncIterableReadableByteStream_ = AsyncIterableReadableByteStream;
      AsyncIterableDefaultReadableStream_ = AsyncIterableDefaultReadableStream;
      createAsyncIterableReadableStream = createAsyncIterableReadableStreamEveryOtherTime;
      return createAsyncIterableReadableStreamEveryOtherTime(source, opts);
    };
    let createAsyncIterableReadableStream = createFirstTime;
    const createAsyncIterableReadableStreamEveryOtherTime = (source, opts) => {
      return source instanceof UnderlyingAsyncIterableByteSource ? new AsyncIterableReadableByteStream_(source, opts) : new AsyncIterableDefaultReadableStream_(source, opts);
    };
    return (source, opts) => createAsyncIterableReadableStream(source, opts);
  })();
  function toDOMStream(source, options) {
    if (!options || !("type" in options) || options["type"] !== "bytes") {
      return asyncIterableReadableStream(new UnderlyingAsyncIterableDefaultSource(source[Symbol.asyncIterator]()), options);
    }
    return asyncIterableReadableStream(new UnderlyingAsyncIterableByteSource(source[Symbol.asyncIterator](), options), options);
  }
  exports.toDOMStream = toDOMStream;
  asynciterablex_1.AsyncIterableX.prototype.tee = function() {
    return _getDOMStream(this).tee();
  };
  asynciterablex_1.AsyncIterableX.prototype.pipeTo = function(writable, options) {
    return _getDOMStream(this).pipeTo(writable, options);
  };
  asynciterablex_1.AsyncIterableX.prototype.pipeThrough = function(duplex, options) {
    return _getDOMStream(this).pipeThrough(duplex, options);
  };
  function _getDOMStream(self) {
    return self._DOMStream || (self._DOMStream = self.pipe((0, publish_1.publish)(), toDOMStream));
  }
  function toDOMStreamProto(options) {
    return !options ? toDOMStream(this) : toDOMStream(this, options);
  }
  exports.toDOMStreamProto = toDOMStreamProto;
  asynciterablex_1.AsyncIterableX.prototype.toDOMStream = toDOMStreamProto;
});

// node_modules/ix/asynciterable/tomap.js
var require_tomap = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toMap = undefined;
  var identity_1 = require_identity();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function toMap(source, options) {
    const { ["signal"]: signal, ["elementSelector"]: elementSelector = identity_1.identityAsync, ["keySelector"]: keySelector = identity_1.identityAsync } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    const map4 = new Map;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      const value = await elementSelector(item, signal);
      const key = await keySelector(item, signal);
      map4.set(key, value);
    }
    return map4;
  }
  exports.toMap = toMap;
});

// node_modules/ix/util/toobserver.js
var require_toobserver = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toObserver = undefined;
  var isiterable_1 = require_isiterable();
  var noop3 = (_) => {};
  function toObserver(next, error, complete) {
    const observer = next;
    if (observer && typeof observer === "object") {
      return {
        next: (0, isiterable_1.isFunction)(observer.next) ? (x) => observer.next(x) : noop3,
        error: (0, isiterable_1.isFunction)(observer.error) ? (e) => observer.error(e) : noop3,
        complete: (0, isiterable_1.isFunction)(observer.complete) ? () => observer.complete() : noop3
      };
    }
    return {
      next: (0, isiterable_1.isFunction)(next) ? next : noop3,
      error: (0, isiterable_1.isFunction)(error) ? error : noop3,
      complete: (0, isiterable_1.isFunction)(complete) ? complete : noop3
    };
  }
  exports.toObserver = toObserver;
});

// node_modules/ix/observer.js
var require_observer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.observable = undefined;
  exports.observable = typeof Symbol === "function" && Symbol.observable || "@@observable";
});

// node_modules/ix/asynciterable/toobservable.js
var require_toobservable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toObservable = undefined;
  var toobserver_1 = require_toobserver();
  var observer_1 = require_observer();

  class BooleanSubscription {
    isUnsubscribed = false;
    unsubscribe() {
      this.isUnsubscribed = true;
    }
  }

  class AsyncIterableObservable {
    _source;
    constructor(source) {
      this._source = source;
    }
    [observer_1.observable]() {
      return this;
    }
    subscribe(next, error, complete) {
      const observer = (0, toobserver_1.toObserver)(next, error, complete);
      const subscription = new BooleanSubscription;
      const it = this._source[Symbol.asyncIterator]();
      const f = () => {
        it.next().then(({ value, done }) => {
          if (!subscription.isUnsubscribed) {
            if (done) {
              observer.complete();
            } else {
              observer.next(value);
              f();
            }
          }
        }).catch((err) => {
          if (!subscription.isUnsubscribed) {
            observer.error(err);
          }
        });
      };
      f();
      return subscription;
    }
  }
  function toObservable(source) {
    return new AsyncIterableObservable(source);
  }
  exports.toObservable = toObservable;
});

// node_modules/ix/asynciterable/toset.js
var require_toset = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toSet = undefined;
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();
  async function toSet(source, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    const set = new Set;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
      set.add(item);
    }
    return set;
  }
  exports.toSet = toSet;
});

// node_modules/ix/asynciterable/whiledo.js
var require_whiledo = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.whileDo = undefined;
  var asynciterablex_1 = require_asynciterablex();
  var withabort_1 = require_withabort();
  var aborterror_1 = require_aborterror();

  class WhileAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _condition;
    _source;
    constructor(condition, source) {
      super();
      this._condition = condition;
      this._source = source;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      while (await this._condition(signal)) {
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
          yield item;
        }
      }
    }
  }
  function whileDo(source, condition) {
    return new WhileAsyncIterable(condition, source);
  }
  exports.whileDo = whileDo;
});

// node_modules/ix/asynciterable/zip.js
var require_zip = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.zip = exports.ZipAsyncIterable = undefined;
  var withabort_1 = require_withabort();
  var asynciterablex_1 = require_asynciterablex();
  var returniterator_1 = require_returniterator();
  var aborterror_1 = require_aborterror();

  class ZipAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _sources;
    constructor(sources) {
      super();
      this._sources = sources;
    }
    async* [Symbol.asyncIterator](signal) {
      (0, aborterror_1.throwIfAborted)(signal);
      const sourcesLength = this._sources.length;
      const its = this._sources.map((x) => (0, withabort_1.wrapWithAbort)(x, signal)[Symbol.asyncIterator]());
      while (sourcesLength > 0) {
        const values = new Array(sourcesLength);
        for (let i = -1;++i < sourcesLength; ) {
          const { value, done } = await its[i].next();
          if (done) {
            await Promise.all(its.map(returniterator_1.returnAsyncIterator));
            return;
          }
          values[i] = value;
        }
        yield values;
      }
    }
  }
  exports.ZipAsyncIterable = ZipAsyncIterable;
  function zip3(...sources) {
    return new ZipAsyncIterable(sources);
  }
  exports.zip = zip3;
});

// node_modules/ix/asynciterable/index.js
var require_asynciterable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.from = exports.as = undefined;
  var tslib_1 = (init_tslib_es6(), __toCommonJS(exports_tslib_es6));
  tslib_1.__exportStar(require_asyncifyerrback(), exports);
  tslib_1.__exportStar(require_asyncify(), exports);
  tslib_1.__exportStar(require_asynciterablex(), exports);
  tslib_1.__exportStar(require_average(), exports);
  tslib_1.__exportStar(require_catcherror(), exports);
  tslib_1.__exportStar(require_combinelatest(), exports);
  tslib_1.__exportStar(require_concat(), exports);
  tslib_1.__exportStar(require_count(), exports);
  tslib_1.__exportStar(require_create(), exports);
  tslib_1.__exportStar(require_defer(), exports);
  tslib_1.__exportStar(require_elementat(), exports);
  tslib_1.__exportStar(require_empty(), exports);
  tslib_1.__exportStar(require_every(), exports);
  tslib_1.__exportStar(require_findindex(), exports);
  tslib_1.__exportStar(require_find(), exports);
  tslib_1.__exportStar(require_first(), exports);
  tslib_1.__exportStar(require_forkjoin(), exports);
  tslib_1.__exportStar(require_fromdomstream(), exports);
  tslib_1.__exportStar(require_fromeventpattern(), exports);
  tslib_1.__exportStar(require_fromevent(), exports);
  tslib_1.__exportStar(require_generate(), exports);
  tslib_1.__exportStar(require_generatetime(), exports);
  tslib_1.__exportStar(require_iif(), exports);
  tslib_1.__exportStar(require_includes(), exports);
  tslib_1.__exportStar(require_interval(), exports);
  tslib_1.__exportStar(require_isempty(), exports);
  tslib_1.__exportStar(require_last(), exports);
  tslib_1.__exportStar(require_max(), exports);
  tslib_1.__exportStar(require_maxby(), exports);
  tslib_1.__exportStar(require_merge(), exports);
  tslib_1.__exportStar(require_min(), exports);
  tslib_1.__exportStar(require_minby(), exports);
  tslib_1.__exportStar(require_never(), exports);
  tslib_1.__exportStar(require_of(), exports);
  tslib_1.__exportStar(require_onerrorresumenext(), exports);
  tslib_1.__exportStar(require_race(), exports);
  tslib_1.__exportStar(require_range(), exports);
  tslib_1.__exportStar(require_reduceright(), exports);
  tslib_1.__exportStar(require_reduce(), exports);
  tslib_1.__exportStar(require_repeatvalue(), exports);
  tslib_1.__exportStar(require_sequenceequal(), exports);
  tslib_1.__exportStar(require_single(), exports);
  tslib_1.__exportStar(require_some(), exports);
  tslib_1.__exportStar(require_sum(), exports);
  tslib_1.__exportStar(require_throwerrror(), exports);
  tslib_1.__exportStar(require_toarray(), exports);
  tslib_1.__exportStar(require_todomstream(), exports);
  tslib_1.__exportStar(require_tomap(), exports);
  tslib_1.__exportStar(require_toobservable(), exports);
  tslib_1.__exportStar(require_toset(), exports);
  tslib_1.__exportStar(require_whiledo(), exports);
  tslib_1.__exportStar(require_zip(), exports);
  var asynciterablex_1 = require_asynciterablex();
  exports.as = asynciterablex_1.AsyncIterableX.as;
  exports.from = asynciterablex_1.AsyncIterableX.from;
});
// node_modules/rxjs/dist/esm5/internal/Subject.js
init_tslib_es6();

// node_modules/rxjs/dist/esm5/internal/Subscriber.js
init_tslib_es6();

// node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
}

// node_modules/rxjs/dist/esm5/internal/Subscription.js
init_tslib_es6();

// node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

// node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + ` errors occurred during unsubscription:
` + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join(`
  `) : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next();!_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next();!_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== undefined ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
              _b.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== undefined ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty = new Subscription2;
    empty.closed = true;
    return empty;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

// node_modules/rxjs/dist/esm5/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

// node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
init_tslib_es6();
var timeoutProvider = {
  setTimeout: function(handler, timeout) {
    var args = [];
    for (var _i = 2;_i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === undefined ? undefined : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setTimeout.apply(undefined, __spreadArray([handler, timeout], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === undefined ? undefined : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};

// node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {}

// node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = function() {
  return createNotification("C", undefined, undefined);
}();
function errorNotification(error) {
  return createNotification("E", undefined, error);
}
function nextNotification(value) {
  return createNotification("N", value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

// node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a = context, errorThrown = _a.errorThrown, error = _a.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== undefined ? observerOrNext : undefined,
        error: error !== null && error !== undefined ? error : undefined,
        complete: complete !== null && complete !== undefined ? complete : undefined
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function() {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};

// node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

// node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
  return x;
}

// node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}

// node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
  function Observable2(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2;
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === undefined ? undefined : _a.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== undefined ? promiseCtor : config.Promise) !== null && _a !== undefined ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}

// node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});

// node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError;
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next();!_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a;
      return ((_a = this.observers) === null || _a === undefined ? undefined : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable;
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === undefined ? undefined : _a.next) === null || _b === undefined || _b.call(_a, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === undefined ? undefined : _a.error) === null || _b === undefined || _b.call(_a, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === undefined ? undefined : _a.complete) === null || _b === undefined || _b.call(_a);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === undefined ? undefined : _a.subscribe(subscriber)) !== null && _b !== undefined ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);
// node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source) {
  return isFunction(source === null || source === undefined ? undefined : source.lift);
}
function operate(init) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
init_tslib_es6();
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === undefined || _a.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);

// node_modules/rxjs/dist/esm5/internal/operators/map.js
function map(project, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
init_tslib_es6();

// node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = function(x) {
  return x && typeof x.length === "number" && typeof x !== "function";
};

// node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
  return isFunction(value === null || value === undefined ? undefined : value.then);
}

// node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return isFunction(input[observable]);
}

// node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === undefined ? undefined : obj[Symbol.asyncIterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

// node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();

// node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
  return isFunction(input === null || input === undefined ? undefined : input[iterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
init_tslib_es6();
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          if (false)
            ;
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done)
            return [3, 5];
          return [4, __await(undefined)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === undefined ? undefined : obj.getReader);
}

// node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0;i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next();!iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
          _a.call(iterable_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, undefined, undefined, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
            return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
            return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2)
            throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
  if (delay === undefined) {
    delay = 0;
  }
  if (repeat === undefined) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [];
  var active = 0;
  var index = 0;
  var isComplete = false;
  var checkComplete = function() {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  var outerNext = function(value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  };
  var doInnerSub = function(value) {
    expand && subscriber.next(value);
    active++;
    var innerComplete = false;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
      onBeforeNext === null || onBeforeNext === undefined || onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function() {
      innerComplete = true;
    }, undefined, function() {
      if (innerComplete) {
        try {
          active--;
          var _loop_1 = function() {
            var bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              executeSchedule(subscriber, innerSubScheduler, function() {
                return doInnerSub(bufferedValue);
              });
            } else {
              doInnerSub(bufferedValue);
            }
          };
          while (buffer.length && active < concurrent) {
            _loop_1();
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
    isComplete = true;
    checkComplete();
  }));
  return function() {
    additionalFinalizer === null || additionalFinalizer === undefined || additionalFinalizer();
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === undefined) {
    concurrent = Infinity;
  }
  if (isFunction(resultSelector)) {
    return mergeMap(function(a, i) {
      return map(function(b, ii) {
        return resultSelector(a, b, i, ii);
      })(innerFrom(project(a, i)));
    }, concurrent);
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return operate(function(source, subscriber) {
    return mergeInternals(source, subscriber, project, concurrent);
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
function mergeAll(concurrent) {
  if (concurrent === undefined) {
    concurrent = Infinity;
  }
  return mergeMap(identity, concurrent);
}

// node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
function concatAll() {
  return mergeAll(1);
}

// node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
  return value && isFunction(value.schedule);
}

// node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
  return arr[arr.length - 1];
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : undefined;
}

// node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay) {
  if (delay === undefined) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay) {
  if (delay === undefined) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay));
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator2;
    executeSchedule(subscriber, scheduler, function() {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a;
        var value;
        var done;
        try {
          _a = iterator2.next(), value = _a.value, done = _a.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator2 === null || iterator2 === undefined ? undefined : iterator2.return) && iterator2.return();
    };
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/concat.js
function concat() {
  var args = [];
  for (var _i = 0;_i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return concatAll()(from(args, popScheduler(args)));
}
// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
init_tslib_es6();

// node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
init_tslib_es6();
var Action = function(_super) {
  __extends(Action2, _super);
  function Action2(scheduler, work) {
    return _super.call(this) || this;
  }
  Action2.prototype.schedule = function(state, delay) {
    if (delay === undefined) {
      delay = 0;
    }
    return this;
  };
  return Action2;
}(Subscription);

// node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
init_tslib_es6();
var intervalProvider = {
  setInterval: function(handler, timeout) {
    var args = [];
    for (var _i = 2;_i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = intervalProvider.delegate;
    if (delegate === null || delegate === undefined ? undefined : delegate.setInterval) {
      return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setInterval.apply(undefined, __spreadArray([handler, timeout], __read(args)));
  },
  clearInterval: function(handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === undefined ? undefined : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
var AsyncAction = function(_super) {
  __extends(AsyncAction2, _super);
  function AsyncAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction2.prototype.schedule = function(state, delay) {
    var _a;
    if (delay === undefined) {
      delay = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== undefined ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
    if (delay === undefined) {
      delay = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
    if (delay === undefined) {
      delay = 0;
    }
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return;
  };
  AsyncAction2.prototype.execute = function(state, delay) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var _a = this, id = _a.id, scheduler = _a.scheduler;
      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction2;
}(Action);

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
init_tslib_es6();

// node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
  now: function() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};

// node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler = function() {
  function Scheduler2(schedulerActionCtor, now) {
    if (now === undefined) {
      now = Scheduler2.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  Scheduler2.prototype.schedule = function(work, delay, state) {
    if (delay === undefined) {
      delay = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  };
  Scheduler2.now = dateTimestampProvider.now;
  return Scheduler2;
}();

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = function(_super) {
  __extends(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === undefined) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    return _this;
  }
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler2;
}(Scheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/async.js
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;

// node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

// node_modules/rxjs/dist/esm5/internal/observable/timer.js
function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === undefined) {
    dueTime = 0;
  }
  if (scheduler === undefined) {
    scheduler = async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function(subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n = 0;
    return scheduler.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/interval.js
function interval(period, scheduler) {
  if (period === undefined) {
    period = 0;
  }
  if (scheduler === undefined) {
    scheduler = asyncScheduler;
  }
  if (period < 0) {
    period = 0;
  }
  return timer(period, period, scheduler);
}
// node_modules/rxjs/dist/esm5/internal/observable/empty.js
var EMPTY = new Observable(function(subscriber) {
  return subscriber.complete();
});

// node_modules/rxjs/dist/esm5/internal/operators/take.js
function take(count) {
  return count <= 0 ? function() {
    return EMPTY;
  } : operate(function(source, subscriber) {
    var seen = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js
function ignoreElements() {
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, noop));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
function mapTo(value) {
  return map(function() {
    return value;
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js
function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return function(source) {
      return concat(subscriptionDelay.pipe(take(1), ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
    };
  }
  return mergeMap(function(value, index) {
    return innerFrom(delayDurationSelector(value, index)).pipe(take(1), mapTo(value));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/delay.js
function delay(due, scheduler) {
  if (scheduler === undefined) {
    scheduler = asyncScheduler;
  }
  var duration = timer(due, scheduler);
  return delayWhen(function() {
    return duration;
  });
}
// node_modules/rxjs/dist/esm5/internal/operators/retry.js
function retry(configOrCount) {
  if (configOrCount === undefined) {
    configOrCount = Infinity;
  }
  var config2;
  if (configOrCount && typeof configOrCount === "object") {
    config2 = configOrCount;
  } else {
    config2 = {
      count: configOrCount
    };
  }
  var _a = config2.count, count = _a === undefined ? Infinity : _a, delay2 = config2.delay, _b = config2.resetOnSuccess, resetOnSuccess = _b === undefined ? false : _b;
  return count <= 0 ? identity : operate(function(source, subscriber) {
    var soFar = 0;
    var innerSub;
    var subscribeForRetry = function() {
      var syncUnsub = false;
      innerSub = source.subscribe(createOperatorSubscriber(subscriber, function(value) {
        if (resetOnSuccess) {
          soFar = 0;
        }
        subscriber.next(value);
      }, undefined, function(err) {
        if (soFar++ < count) {
          var resub_1 = function() {
            if (innerSub) {
              innerSub.unsubscribe();
              innerSub = null;
              subscribeForRetry();
            } else {
              syncUnsub = true;
            }
          };
          if (delay2 != null) {
            var notifier = typeof delay2 === "number" ? timer(delay2) : innerFrom(delay2(err, soFar));
            var notifierSubscriber_1 = createOperatorSubscriber(subscriber, function() {
              notifierSubscriber_1.unsubscribe();
              resub_1();
            }, function() {
              subscriber.complete();
            });
            notifier.subscribe(notifierSubscriber_1);
          } else {
            resub_1();
          }
        } else {
          subscriber.error(err);
        }
      }));
      if (syncUnsub) {
        innerSub.unsubscribe();
        innerSub = null;
        subscribeForRetry();
      }
    };
    subscribeForRetry();
  });
}
// node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js
function takeUntil(notifier) {
  return operate(function(source, subscriber) {
    innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function() {
      return subscriber.complete();
    }, noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
// node_modules/rxjs/dist/esm5/internal/operators/tap.js
function tap(observerOrNext, error, complete) {
  var tapObserver = isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
  return tapObserver ? operate(function(source, subscriber) {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === undefined || _a.call(tapObserver);
    var isUnsub = true;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var _a2;
      (_a2 = tapObserver.next) === null || _a2 === undefined || _a2.call(tapObserver, value);
      subscriber.next(value);
    }, function() {
      var _a2;
      isUnsub = false;
      (_a2 = tapObserver.complete) === null || _a2 === undefined || _a2.call(tapObserver);
      subscriber.complete();
    }, function(err) {
      var _a2;
      isUnsub = false;
      (_a2 = tapObserver.error) === null || _a2 === undefined || _a2.call(tapObserver, err);
      subscriber.error(err);
    }, function() {
      var _a2, _b;
      if (isUnsub) {
        (_a2 = tapObserver.unsubscribe) === null || _a2 === undefined || _a2.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === undefined || _b.call(tapObserver);
    }));
  }) : identity;
}
// node_modules/rxjs/dist/esm5/internal/operators/timeout.js
var TimeoutError = createErrorClass(function(_super) {
  return function TimeoutErrorImpl(info) {
    if (info === undefined) {
      info = null;
    }
    _super(this);
    this.message = "Timeout has occurred";
    this.name = "TimeoutError";
    this.info = info;
  };
});
function timeout(config2, schedulerArg) {
  var _a = isValidDate(config2) ? { first: config2 } : typeof config2 === "number" ? { each: config2 } : config2, first = _a.first, each = _a.each, _b = _a.with, _with = _b === undefined ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === undefined ? schedulerArg !== null && schedulerArg !== undefined ? schedulerArg : asyncScheduler : _c, _d = _a.meta, meta = _d === undefined ? null : _d;
  if (first == null && each == null) {
    throw new TypeError("No timeout provided.");
  }
  return operate(function(source, subscriber) {
    var originalSourceSubscription;
    var timerSubscription;
    var lastValue = null;
    var seen = 0;
    var startTimer = function(delay2) {
      timerSubscription = executeSchedule(subscriber, scheduler, function() {
        try {
          originalSourceSubscription.unsubscribe();
          innerFrom(_with({
            meta,
            lastValue,
            seen
          })).subscribe(subscriber);
        } catch (err) {
          subscriber.error(err);
        }
      }, delay2);
    };
    originalSourceSubscription = source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      timerSubscription === null || timerSubscription === undefined || timerSubscription.unsubscribe();
      seen++;
      subscriber.next(lastValue = value);
      each > 0 && startTimer(each);
    }, undefined, undefined, function() {
      if (!(timerSubscription === null || timerSubscription === undefined ? undefined : timerSubscription.closed)) {
        timerSubscription === null || timerSubscription === undefined || timerSubscription.unsubscribe();
      }
      lastValue = null;
    }));
    !seen && startTimer(first != null ? typeof first === "number" ? first : +first - scheduler.now() : each);
  });
}
function timeoutErrorFactory(info) {
  throw new TimeoutError(info);
}
// src/app/create-default-app-state.ts
function createDefaultAppState() {
  return {
    app_name: "Get Track Info",
    emission_mode: {
      value: "active",
      local_storage_key: "mwGtiOrange:emissionMode"
    },
    include_extra_data_f: {
      value: "no",
      local_storage_key: "mwGtiOrange:includeExtraData"
    },
    ws_server_config: {
      connection_url: {
        default_value: "ws://localhost:6603",
        local_storage_key: "mwGtiOrange:wsServerConnectionUrl"
      }
    },
    ws_client: {
      retry_stop_flag: new Subject
    },
    track_info_cache: new Map,
    logger: (...item_list) => {
      console.log("[MwGtiOrange]", ...item_list);
    }
  };
}

// src/app/app-global-symbol-name.ts
var APP_GLOBAL_SYMBOL_NAME = "app_pandev_mw_get_track_info_orange_global";

// src/settings/change-submit-button-state.ts
function changeSubmitButtonState(submit_button_el, action, error_message) {
  if (action === "applying") {
    submit_button_el.disabled = true;
    submit_button_el.style.cursor = "not-allowed";
    submit_button_el.style.backgroundColor = "#405055";
    submit_button_el.style.color = "#24ffc3";
    submit_button_el.textContent = "Applying changes...";
    return;
  }
  if (action === "success") {
    submit_button_el.disabled = true;
    submit_button_el.style.cursor = "not-allowed";
    submit_button_el.style.backgroundColor = "#455540";
    submit_button_el.style.color = "#6dff24";
    submit_button_el.textContent = "Setting Saved Successfully!";
    return;
  }
  submit_button_el.disabled = false;
  submit_button_el.style.cursor = "pointer";
  submit_button_el.style.backgroundColor = "#554040";
  submit_button_el.style.color = "#ffb6b6";
  submit_button_el.textContent = `${error_message}. Click here to retry.`;
}

// node_modules/rxjs/dist/esm5/internal/observable/dom/WebSocketSubject.js
init_tslib_es6();

// node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
init_tslib_es6();
var ReplaySubject2 = function(_super) {
  __extends(ReplaySubject3, _super);
  function ReplaySubject3(_bufferSize, _windowTime, _timestampProvider) {
    if (_bufferSize === undefined) {
      _bufferSize = Infinity;
    }
    if (_windowTime === undefined) {
      _windowTime = Infinity;
    }
    if (_timestampProvider === undefined) {
      _timestampProvider = dateTimestampProvider;
    }
    var _this = _super.call(this) || this;
    _this._bufferSize = _bufferSize;
    _this._windowTime = _windowTime;
    _this._timestampProvider = _timestampProvider;
    _this._buffer = [];
    _this._infiniteTimeWindow = true;
    _this._infiniteTimeWindow = _windowTime === Infinity;
    _this._bufferSize = Math.max(1, _bufferSize);
    _this._windowTime = Math.max(1, _windowTime);
    return _this;
  }
  ReplaySubject3.prototype.next = function(value) {
    var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    _super.prototype.next.call(this, value);
  };
  ReplaySubject3.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    var subscription = this._innerSubscribe(subscriber);
    var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
    var copy = _buffer.slice();
    for (var i = 0;i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  };
  ReplaySubject3.prototype._trimBuffer = function() {
    var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
    var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      var now = _timestampProvider.now();
      var last3 = 0;
      for (var i = 1;i < _buffer.length && _buffer[i] <= now; i += 2) {
        last3 = i;
      }
      last3 && _buffer.splice(0, last3 + 1);
    }
  };
  return ReplaySubject3;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/observable/dom/WebSocketSubject.js
var DEFAULT_WEBSOCKET_CONFIG = {
  url: "",
  deserializer: function(e) {
    return JSON.parse(e.data);
  },
  serializer: function(value) {
    return JSON.stringify(value);
  }
};
var WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = "WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }";
var WebSocketSubject = function(_super) {
  __extends(WebSocketSubject2, _super);
  function WebSocketSubject2(urlConfigOrSource, destination) {
    var _this = _super.call(this) || this;
    _this._socket = null;
    if (urlConfigOrSource instanceof Observable) {
      _this.destination = destination;
      _this.source = urlConfigOrSource;
    } else {
      var config3 = _this._config = __assign({}, DEFAULT_WEBSOCKET_CONFIG);
      _this._output = new Subject;
      if (typeof urlConfigOrSource === "string") {
        config3.url = urlConfigOrSource;
      } else {
        for (var key in urlConfigOrSource) {
          if (urlConfigOrSource.hasOwnProperty(key)) {
            config3[key] = urlConfigOrSource[key];
          }
        }
      }
      if (!config3.WebSocketCtor && WebSocket) {
        config3.WebSocketCtor = WebSocket;
      } else if (!config3.WebSocketCtor) {
        throw new Error("no WebSocket constructor can be found");
      }
      _this.destination = new ReplaySubject2;
    }
    return _this;
  }
  WebSocketSubject2.prototype.lift = function(operator) {
    var sock = new WebSocketSubject2(this._config, this.destination);
    sock.operator = operator;
    sock.source = this;
    return sock;
  };
  WebSocketSubject2.prototype._resetState = function() {
    this._socket = null;
    if (!this.source) {
      this.destination = new ReplaySubject2;
    }
    this._output = new Subject;
  };
  WebSocketSubject2.prototype.multiplex = function(subMsg, unsubMsg, messageFilter) {
    var self = this;
    return new Observable(function(observer) {
      try {
        self.next(subMsg());
      } catch (err) {
        observer.error(err);
      }
      var subscription = self.subscribe({
        next: function(x) {
          try {
            if (messageFilter(x)) {
              observer.next(x);
            }
          } catch (err) {
            observer.error(err);
          }
        },
        error: function(err) {
          return observer.error(err);
        },
        complete: function() {
          return observer.complete();
        }
      });
      return function() {
        try {
          self.next(unsubMsg());
        } catch (err) {
          observer.error(err);
        }
        subscription.unsubscribe();
      };
    });
  };
  WebSocketSubject2.prototype._connectSocket = function() {
    var _this = this;
    var _a = this._config, WebSocketCtor = _a.WebSocketCtor, protocol = _a.protocol, url = _a.url, binaryType = _a.binaryType;
    var observer = this._output;
    var socket = null;
    try {
      socket = protocol ? new WebSocketCtor(url, protocol) : new WebSocketCtor(url);
      this._socket = socket;
      if (binaryType) {
        this._socket.binaryType = binaryType;
      }
    } catch (e) {
      observer.error(e);
      return;
    }
    var subscription = new Subscription(function() {
      _this._socket = null;
      if (socket && socket.readyState === 1) {
        socket.close();
      }
    });
    socket.onopen = function(evt) {
      var _socket = _this._socket;
      if (!_socket) {
        socket.close();
        _this._resetState();
        return;
      }
      var openObserver = _this._config.openObserver;
      if (openObserver) {
        openObserver.next(evt);
      }
      var queue2 = _this.destination;
      _this.destination = Subscriber.create(function(x) {
        if (socket.readyState === 1) {
          try {
            var serializer = _this._config.serializer;
            socket.send(serializer(x));
          } catch (e) {
            _this.destination.error(e);
          }
        }
      }, function(err) {
        var closingObserver = _this._config.closingObserver;
        if (closingObserver) {
          closingObserver.next(undefined);
        }
        if (err && err.code) {
          socket.close(err.code, err.reason);
        } else {
          observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
        }
        _this._resetState();
      }, function() {
        var closingObserver = _this._config.closingObserver;
        if (closingObserver) {
          closingObserver.next(undefined);
        }
        socket.close();
        _this._resetState();
      });
      if (queue2 && queue2 instanceof ReplaySubject2) {
        subscription.add(queue2.subscribe(_this.destination));
      }
    };
    socket.onerror = function(e) {
      _this._resetState();
      observer.error(e);
    };
    socket.onclose = function(e) {
      if (socket === _this._socket) {
        _this._resetState();
      }
      var closeObserver = _this._config.closeObserver;
      if (closeObserver) {
        closeObserver.next(e);
      }
      if (e.wasClean) {
        observer.complete();
      } else {
        observer.error(e);
      }
    };
    socket.onmessage = function(e) {
      try {
        var deserializer = _this._config.deserializer;
        observer.next(deserializer(e));
      } catch (err) {
        observer.error(err);
      }
    };
  };
  WebSocketSubject2.prototype._subscribe = function(subscriber) {
    var _this = this;
    var source = this.source;
    if (source) {
      return source.subscribe(subscriber);
    }
    if (!this._socket) {
      this._connectSocket();
    }
    this._output.subscribe(subscriber);
    subscriber.add(function() {
      var _socket = _this._socket;
      if (_this._output.observers.length === 0) {
        if (_socket && (_socket.readyState === 1 || _socket.readyState === 0)) {
          _socket.close();
        }
        _this._resetState();
      }
    });
    return subscriber;
  };
  WebSocketSubject2.prototype.unsubscribe = function() {
    var _socket = this._socket;
    if (_socket && (_socket.readyState === 1 || _socket.readyState === 0)) {
      _socket.close();
    }
    this._resetState();
    _super.prototype.unsubscribe.call(this);
  };
  return WebSocketSubject2;
}(AnonymousSubject);

// node_modules/rxjs/dist/esm5/internal/observable/dom/webSocket.js
function webSocket(urlConfigOrSource) {
  return new WebSocketSubject(urlConfigOrSource);
}
// node_modules/typia/lib/TypeGuardError.mjs
class TypeGuardError extends Error {
  method;
  path;
  expected;
  value;
  description;
  fake_expected_typed_value_;
  constructor(props) {
    super(props.message || `Error on ${props.method}(): invalid type${props.path ? ` on ${props.path}` : ""}, expect to be ${props.expected}`);
    const proto = new.target.prototype;
    if (Object.setPrototypeOf)
      Object.setPrototypeOf(this, proto);
    else
      this.__proto__ = proto;
    this.method = props.method;
    this.path = props.path;
    this.expected = props.expected;
    this.value = props.value;
    if (props.description || props.value === undefined)
      this.description = props.description ?? [
        "The value at this path is `undefined`.",
        "",
        `Please fill the \`${props.expected}\` typed value next time.`
      ].join(`
`);
  }
}

// node_modules/typia/lib/internal/_assertGuard.mjs
var _assertGuard = (exceptionable, props, factory) => {
  if (exceptionable === true) {
    if (factory)
      throw factory(props);
    else
      throw new TypeGuardError(props);
  }
  return false;
};

// src/orange-bridge/get-current-track.ts
function getCurrentPlayerPlayerTrack() {
  const player_track = Spicetify.Player.data?.item;
  return player_track != null ? player_track : null;
}

// src/orange-bridge/track-uri-to-id.ts
function trackUriToId(uri) {
  return uri.replace("spotify:track:", "");
}

// src/orange-bridge/get-true-track-id-for-player-track.ts
function getTrueTrackIdForPlayerTrack(track_data) {
  const original_track_id = trackUriToId(track_data.uri);
  if (track_data.mediaType !== "video") {}
  const audio_association_uri = track_data?.metadata?.audio_association;
  if (audio_association_uri == null) {
    return original_track_id;
  }
  if (audio_association_uri.includes(original_track_id)) {
    return original_track_id;
  }
  return audio_association_uri.replace("spotify:track:", "");
}

// src/orange-bridge/get-track-info-from-graphql.ts
async function getTrackInfoFromGraphql(app_state, track_id, track_data) {
  try {
    const raw_res = await Spicetify.GraphQL.Request({
      name: "getTrack",
      operation: "query",
      sha256Hash: "612585ae06ba435ad26369870deaae23b5c8800a256cd8a57e08eddc25a37294",
      value: null
    }, {
      uri: `spotify:track:${track_id}`
    });
    const res = (() => {
      const _io0 = (input) => typeof input.data === "object" && input.data !== null && _io1(input.data);
      const _io1 = (input) => typeof input.trackUnion === "object" && input.trackUnion !== null && _io2(input.trackUnion);
      const _io2 = (input) => typeof input.albumOfTrack === "object" && input.albumOfTrack !== null && _io3(input.albumOfTrack) && (typeof input.firstArtist === "object" && input.firstArtist !== null && _io4(input.firstArtist)) && (typeof input.otherArtists === "object" && input.otherArtists !== null && _io7(input.otherArtists));
      const _io3 = (input) => typeof input.id === "string" && typeof input.name === "string";
      const _io4 = (input) => Array.isArray(input.items) && input.items.every((elem) => typeof elem === "object" && elem !== null && _io5(elem));
      const _io5 = (input) => typeof input.profile === "object" && input.profile !== null && _io6(input.profile);
      const _io6 = (input) => typeof input.name === "string";
      const _io7 = (input) => Array.isArray(input.items) && input.items.every((elem) => typeof elem === "object" && elem !== null && _io5(elem));
      const _ao0 = (input, _path, _exceptionable = true) => (typeof input.data === "object" && input.data !== null || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".data",
        expected: "__type",
        value: input.data
      }, _errorFactory)) && _ao1(input.data, _path + ".data", _exceptionable) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".data",
        expected: "__type",
        value: input.data
      }, _errorFactory);
      const _ao1 = (input, _path, _exceptionable = true) => (typeof input.trackUnion === "object" && input.trackUnion !== null || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".trackUnion",
        expected: "__type.o1",
        value: input.trackUnion
      }, _errorFactory)) && _ao2(input.trackUnion, _path + ".trackUnion", _exceptionable) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".trackUnion",
        expected: "__type.o1",
        value: input.trackUnion
      }, _errorFactory);
      const _ao2 = (input, _path, _exceptionable = true) => ((typeof input.albumOfTrack === "object" && input.albumOfTrack !== null || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".albumOfTrack",
        expected: "__type.o2",
        value: input.albumOfTrack
      }, _errorFactory)) && _ao3(input.albumOfTrack, _path + ".albumOfTrack", _exceptionable) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".albumOfTrack",
        expected: "__type.o2",
        value: input.albumOfTrack
      }, _errorFactory)) && ((typeof input.firstArtist === "object" && input.firstArtist !== null || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".firstArtist",
        expected: "__type.o3",
        value: input.firstArtist
      }, _errorFactory)) && _ao4(input.firstArtist, _path + ".firstArtist", _exceptionable) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".firstArtist",
        expected: "__type.o3",
        value: input.firstArtist
      }, _errorFactory)) && ((typeof input.otherArtists === "object" && input.otherArtists !== null || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".otherArtists",
        expected: "__type.o5",
        value: input.otherArtists
      }, _errorFactory)) && _ao7(input.otherArtists, _path + ".otherArtists", _exceptionable) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".otherArtists",
        expected: "__type.o5",
        value: input.otherArtists
      }, _errorFactory));
      const _ao3 = (input, _path, _exceptionable = true) => (typeof input.id === "string" || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".id",
        expected: "string",
        value: input.id
      }, _errorFactory)) && (typeof input.name === "string" || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".name",
        expected: "string",
        value: input.name
      }, _errorFactory));
      const _ao4 = (input, _path, _exceptionable = true) => (Array.isArray(input.items) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".items",
        expected: "ArtistEntityList",
        value: input.items
      }, _errorFactory)) && input.items.every((elem, _index3) => (typeof elem === "object" && elem !== null || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".items[" + _index3 + "]",
        expected: "ArtistEntity",
        value: elem
      }, _errorFactory)) && _ao5(elem, _path + ".items[" + _index3 + "]", _exceptionable) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".items[" + _index3 + "]",
        expected: "ArtistEntity",
        value: elem
      }, _errorFactory)) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".items",
        expected: "ArtistEntityList",
        value: input.items
      }, _errorFactory);
      const _ao5 = (input, _path, _exceptionable = true) => (typeof input.profile === "object" && input.profile !== null || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".profile",
        expected: "__type.o4",
        value: input.profile
      }, _errorFactory)) && _ao6(input.profile, _path + ".profile", _exceptionable) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".profile",
        expected: "__type.o4",
        value: input.profile
      }, _errorFactory);
      const _ao6 = (input, _path, _exceptionable = true) => typeof input.name === "string" || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".name",
        expected: "string",
        value: input.name
      }, _errorFactory);
      const _ao7 = (input, _path, _exceptionable = true) => (Array.isArray(input.items) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".items",
        expected: "ArtistEntityList",
        value: input.items
      }, _errorFactory)) && input.items.every((elem, _index4) => (typeof elem === "object" && elem !== null || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".items[" + _index4 + "]",
        expected: "ArtistEntity",
        value: elem
      }, _errorFactory)) && _ao5(elem, _path + ".items[" + _index4 + "]", _exceptionable) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".items[" + _index4 + "]",
        expected: "ArtistEntity",
        value: elem
      }, _errorFactory)) || _assertGuard(_exceptionable, {
        method: "assert",
        path: _path + ".items",
        expected: "ArtistEntityList",
        value: input.items
      }, _errorFactory);
      const __is = (input) => typeof input === "object" && input !== null && _io0(input);
      let _errorFactory;
      return (input, errorFactory) => {
        if (__is(input) === false) {
          _errorFactory = errorFactory;
          ((input2, _path, _exceptionable = true) => (typeof input2 === "object" && input2 !== null || _assertGuard(true, {
            method: "assert",
            path: _path + "",
            expected: "GraphQLResponse",
            value: input2
          }, _errorFactory)) && _ao0(input2, _path + "", true) || _assertGuard(true, {
            method: "assert",
            path: _path + "",
            expected: "GraphQLResponse",
            value: input2
          }, _errorFactory))(input, "$input", true);
        }
        return input;
      };
    })()(raw_res);
    let main_artist = res.data.trackUnion.firstArtist.items.shift()?.profile.name;
    if (main_artist == null) {
      main_artist = track_data.artists?.shift()?.name ?? "UNKNOWN_ARTIST_NAME";
    }
    const artist_full_list = [
      ...[main_artist],
      ...res.data.trackUnion.otherArtists.items.map((artist) => artist.profile.name)
    ].filter((artist) => artist != null);
    return {
      track_id,
      album_id: res.data.trackUnion.albumOfTrack.id,
      album_name: res.data.trackUnion.albumOfTrack.name,
      artist_name: main_artist,
      artist_full: artist_full_list.join(", ")
    };
  } catch (e) {
    app_state.logger("Tried to get enhanced track data from URL but failed (using original data now): ", e);
  }
  return null;
}

// src/track-info.ts
class TrackInfo {
  track_id;
  track_name;
  track_duration_ms;
  track_is_explicit;
  album_id;
  album_name;
  artist_name;
  artist_full_name;
  extra_data;
  static unknown_artist_name = "UNKNOWN_ARTIST_NAME";
  constructor(track_id, track_name, track_duration_ms, track_is_explicit, album_id, album_name, artist_name, artist_full_name, extra_data) {
    this.track_id = track_id;
    this.track_name = track_name;
    this.track_duration_ms = track_duration_ms;
    this.track_is_explicit = track_is_explicit;
    this.album_id = album_id;
    this.album_name = album_name;
    this.artist_name = artist_name;
    this.artist_full_name = artist_full_name;
    this.extra_data = extra_data;
  }
  static create(player_track, track_data_from_graphql, include_extra_data = false) {
    const track_id = player_track?.metadata?.audio_association ?? player_track.uri;
    const artists = player_track.artists;
    let main_artist = TrackInfo.unknown_artist_name;
    if (track_data_from_graphql != null) {
      main_artist = track_data_from_graphql.artist_name;
    } else if (artists != null && artists.length > 0) {
      main_artist = artists.shift()?.name ?? TrackInfo.unknown_artist_name;
    }
    let artist_full;
    if (track_data_from_graphql != null) {
      artist_full = track_data_from_graphql.artist_full;
    } else {
      const other_artists = player_track.artists?.filter((artist) => artist != null)?.map((artist) => artist.name) ?? [];
      artist_full = [...[main_artist], ...other_artists].filter((artist) => artist != null).join(", ");
    }
    let album_id;
    if (track_data_from_graphql != null) {
      album_id = track_data_from_graphql.album_id;
    } else {
      album_id = player_track?.album?.uri ?? "UNKNOWN_ALBUM_ID";
    }
    let album_name;
    if (track_data_from_graphql != null) {
      album_name = track_data_from_graphql.album_name;
    } else {
      album_name = player_track?.album?.name ?? "UNKNOWN_ALBUM_NAME";
    }
    return new TrackInfo(track_id.replace("spotify:track:", ""), player_track?.name ?? "UNKNOWN_TRACK_NAME", player_track?.duration?.milliseconds ?? -1, player_track?.isExplicit ?? false, album_id.replace("spotify:album:", ""), album_name, main_artist, artist_full, include_extra_data ? player_track : undefined);
  }
}

// src/orange-bridge/get-track-info.ts
async function getTrackInfo(app_state) {
  const player_track = getCurrentPlayerPlayerTrack();
  if (player_track == null) {
    return null;
  }
  const original_track_id = trackUriToId(player_track.uri);
  const true_track_id = getTrueTrackIdForPlayerTrack(player_track);
  const cached_track_info = app_state.track_info_cache.get(true_track_id);
  if (cached_track_info != null) {
    return cached_track_info;
  }
  let track_info_from_graphql = null;
  const id_mismatch = original_track_id !== true_track_id;
  const include_extra_data = app_state.include_extra_data_f.value === "yes";
  if (id_mismatch || include_extra_data) {
    track_info_from_graphql = await getTrackInfoFromGraphql(app_state, true_track_id, player_track);
  }
  const track_info = TrackInfo.create(player_track, track_info_from_graphql, include_extra_data);
  if (!include_extra_data) {
    track_info.extra_data = undefined;
  }
  app_state.track_info_cache.set(true_track_id, track_info);
  return track_info;
}

// src/ws-client/send-track-data.ts
async function sendTrackData(app_state, request_id) {
  const track_info = await getTrackInfo(app_state);
  if (track_info == null) {
    return;
  }
  const msg = {
    status: "ok",
    player_track_progress_ms: Spicetify.Player.getProgress(),
    request_id: request_id ?? null,
    data: track_info
  };
  app_state.ws_client.subject?.next(msg);
}

// src/ws-client/init-ws-client.ts
function initWsClient(app_state, delay_by_ms = 0) {
  app_state.ws_server_config.connection_url.current_value = Spicetify.LocalStorage.get(app_state.ws_server_config.connection_url.local_storage_key) ?? undefined;
  if (app_state.ws_server_config.connection_url.current_value == null) {
    app_state.ws_server_config.connection_url.current_value = app_state.ws_server_config.connection_url.default_value;
  }
  if (app_state.ws_client.subject != null) {
    app_state.ws_client.retry_stop_flag.next("stop");
    app_state.ws_client.subject.unsubscribe();
    app_state.ws_client.retry_stop_flag = new Subject;
  }
  const connection_url = app_state.ws_server_config.connection_url.current_value;
  app_state.ws_client.subject = webSocket({
    url: connection_url,
    openObserver: {
      next: () => {
        app_state.logger(`Connected to WebSocket server with URL: ${connection_url}`);
      },
      error: (err) => app_state.logger("Connection ended prematurely (1):", err),
      complete: () => app_state.logger("Connection ended by server")
    }
  });
  app_state.ws_client.subject.pipe(takeUntil(app_state.ws_client.retry_stop_flag), tap({
    error: (err) => app_state.logger("Connection ended prematurely (2):", err)
  }), delay(delay_by_ms), retry({ delay: 1000 })).subscribe({
    next: async (data) => {
      app_state.logger("Received from server:", data);
      let request_id = null;
      try {
        const msg = (() => {
          const _io0 = (input) => input.request_id === null || input.request_id === undefined || typeof input.request_id === "string";
          const _ao0 = (input, _path, _exceptionable = true) => input.request_id === null || input.request_id === undefined || typeof input.request_id === "string" || _assertGuard(_exceptionable, {
            method: "assert",
            path: _path + ".request_id",
            expected: "(null | string | undefined)",
            value: input.request_id
          }, _errorFactory);
          const __is = (input) => typeof input === "object" && input !== null && Array.isArray(input) === false && _io0(input);
          let _errorFactory;
          return (input, errorFactory) => {
            if (__is(input) === false) {
              _errorFactory = errorFactory;
              ((input2, _path, _exceptionable = true) => (typeof input2 === "object" && input2 !== null && Array.isArray(input2) === false || _assertGuard(true, {
                method: "assert",
                path: _path + "",
                expected: "WsMessageFromServer",
                value: input2
              }, _errorFactory)) && _ao0(input2, _path + "", true) || _assertGuard(true, {
                method: "assert",
                path: _path + "",
                expected: "WsMessageFromServer",
                value: input2
              }, _errorFactory))(input, "$input", true);
            }
            return input;
          };
        })()(data);
        request_id = msg.request_id ?? null;
      } catch (e) {}
      if (app_state.emission_mode.value !== "passive") {
        return;
      }
      await sendTrackData(app_state, request_id);
    },
    error: (err) => {
      app_state.logger("Connection ended prematurely (3):", err);
      initWsClient(app_state, 1000);
    },
    complete: () => app_state.logger("Connection ended by server")
  });
  if (app_state.emission_mode.value !== "active") {
    return;
  }
}

// src/settings/settings-changer.ts
class SettingsChanger {
  static changeEmissionMode(app_state, submit_button_el) {
    if (submit_button_el == null) {
      return;
    }
    const select_el = submit_button_el.previousElementSibling?.previousElementSibling;
    if (select_el == null) {
      return;
    }
    const selected_emission_mode = select_el.value;
    if (selected_emission_mode == null || selected_emission_mode === "") {
      changeSubmitButtonState(submit_button_el, "error", "Please submit a non-empty value");
      return;
    }
    Spicetify.LocalStorage.set(app_state.emission_mode.local_storage_key, selected_emission_mode);
    app_state.emission_mode.value = selected_emission_mode;
    changeSubmitButtonState(submit_button_el, "success");
  }
  static changeWsServerConnectionUrl(app_state, submit_button_el) {
    if (submit_button_el == null) {
      return;
    }
    const input_el = submit_button_el.previousElementSibling?.previousElementSibling;
    if (input_el == null) {
      return;
    }
    changeSubmitButtonState(submit_button_el, "applying");
    const new_connection_url = input_el.value;
    if (new_connection_url == null || new_connection_url === "") {
      changeSubmitButtonState(submit_button_el, "error", "Please submit a non-empty value");
      return;
    }
    app_state.ws_client.retry_stop_flag.next("stop");
    app_state.ws_client.subject?.unsubscribe();
    const test_stop_flag = new Subject;
    const test_ws_client = webSocket({
      url: new_connection_url,
      openObserver: {
        next: () => {
          changeSubmitButtonState(submit_button_el, "success");
          Spicetify.LocalStorage.set(app_state.ws_server_config.connection_url.local_storage_key, new_connection_url);
          initWsClient(app_state);
          test_stop_flag.next("stop");
        },
        error: () => {
          changeSubmitButtonState(submit_button_el, "error", "Connection error");
          initWsClient(app_state);
        }
      }
    });
    test_ws_client.pipe(takeUntil(test_stop_flag), timeout(5000)).subscribe({
      error: () => {
        changeSubmitButtonState(submit_button_el, "error", "Connection error");
        initWsClient(app_state);
      }
    });
  }
  static changeIncludeExtraDataUrl(app_state, submit_button_el) {
    if (submit_button_el == null) {
      return;
    }
    const select_el = submit_button_el.previousElementSibling?.previousElementSibling;
    if (select_el == null) {
      return;
    }
    const selected_option = select_el.value;
    if (selected_option == null || selected_option === "") {
      changeSubmitButtonState(submit_button_el, "error", "Please submit a non-empty value");
      return;
    }
    Spicetify.LocalStorage.set(app_state.include_extra_data_f.local_storage_key, selected_option);
    app_state.include_extra_data_f.value = selected_option;
    app_state.track_info_cache = new Map;
    changeSubmitButtonState(submit_button_el, "success");
  }
}

// src/settings/settings-global-scope-helper.ts
class SettingsGlobalScopeHelper {
  static app_state;
  static getFullyQualifiedNameForMemberFn(fn_name) {
    return `${APP_GLOBAL_SYMBOL_NAME}.${SettingsGlobalScopeHelper.name}.${fn_name}`;
  }
  static changeEmissionMode(submit_button_el) {
    if (SettingsGlobalScopeHelper.app_state == null)
      return;
    SettingsChanger.changeEmissionMode(SettingsGlobalScopeHelper.app_state, submit_button_el);
  }
  static changeWsServerConnectionUrl(submit_button_el) {
    if (SettingsGlobalScopeHelper.app_state == null)
      return;
    SettingsChanger.changeWsServerConnectionUrl(SettingsGlobalScopeHelper.app_state, submit_button_el);
  }
  static changeIncludeExtraDataUrl(submit_button_el) {
    if (SettingsGlobalScopeHelper.app_state == null)
      return;
    SettingsChanger.changeIncludeExtraDataUrl(SettingsGlobalScopeHelper.app_state, submit_button_el);
  }
}

// src/settings/open-settings-page.ts
function openSettingsPage(app_state) {
  const active_emission_mode_selected_attr = app_state.emission_mode.value === "active" ? " selected" : "";
  const passive_emission_mode_selected_attr = app_state.emission_mode.value === "passive" ? " selected" : "";
  const include_extra_data_selected_attr = app_state.include_extra_data_f.value === "yes" ? " selected" : "";
  const do_not_include_extra_data_selected_attr = app_state.include_extra_data_f.value === "no" ? " selected" : "";
  const change_mode_fn_str = SettingsGlobalScopeHelper.getFullyQualifiedNameForMemberFn("changeEmissionMode");
  const change_connection_uri_fn_str = SettingsGlobalScopeHelper.getFullyQualifiedNameForMemberFn("changeWsServerConnectionUrl");
  const change_include_extra_data_fn_str = SettingsGlobalScopeHelper.getFullyQualifiedNameForMemberFn("changeIncludeExtraDataUrl");
  Spicetify.PopupModal.display({
    title: "Get Track Info · Settings",
    isLarge: true,
    content: `
        <div>
            <label for="mwGtiOrangeMode" style="font-size: 1.1em">Emission Mode:</label>
            <select name="mwGtiOrangeMode"
              required
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #000000;
                color: #ffffff;
                width: 100%;
                margin-bottom: 5px;
              "
            >
              <option value="active"${active_emission_mode_selected_attr}>Active</option>
              <option value="passive"${passive_emission_mode_selected_attr}>Passive</option>
            </select>
               <div style="font-size: 0.9em; margin-bottom: 15px;">
                 <span style="color: #ffab7d; font-weight: bold;">Active Mode:</span>
                 <br>- When a track change is detected, track data will be emitted immediately to the WebSocket server.
                 <br>
                 <span style="color: #fff7a7; font-weight: bold;">Passive Mode:</span>
                 <br>· The WebSocket server has to request the current track data by sending a message.
                 <br>· Track changes/data will not be emitted automatically.
            </div>
              <button type="submit" onclick="${change_mode_fn_str}(this)"
              onmouseenter="if(!this.disabled) this.style.backgroundColor='#333333'"
              onmouseleave="if(!this.disabled) this.style.backgroundColor='#515151'"
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #515151;
                color: #ffffff;
                width: 100%;
                font-size: 1em;
                cursor: pointer;
                margin-bottom: 30px;
            ">
                Change Emission Mode
            </button>
            <br>
            <hr>
            <br>
            <label for="mwGtiOrangeWsServerPort" style="font-size: 1.1em">WebSocket Connection URL:</label>
            <input type="text" name="mwGtiOrangeWsServerPort"
              placeholder="E.g.: ${app_state.ws_server_config.connection_url.default_value}"
              value="${app_state.ws_server_config.connection_url.current_value}"
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #000000;
                color: #ffffff;
                width: 100%;
                margin-bottom: 5px;
            "/>
            <div style="font-size: 0.9em; margin-bottom: 15px;">
                In order to verify that a given URL is valid, a test connection is initiated.
                Make sure your WebSocket server is up and running before trying to change this setting.
            </div>
            <button type="submit" onclick="${change_connection_uri_fn_str}(this)"
              onmouseenter="if(!this.disabled) this.style.backgroundColor='#333333'"
              onmouseleave="if(!this.disabled) this.style.backgroundColor='#515151'"
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #515151;
                color: #ffffff;
                width: 100%;
                font-size: 1em;
                cursor: pointer;
                margin-bottom: 30px;
            ">
                Run Test and Change Connection URL
            </button>
            <br>
            <hr>
            <br>
            <label for="mwGtiOrangeMode" style="font-size: 1.1em">Include Extra Data in JSON Response:</label>
            <select name="mwGtiOrangeMode"
              required
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #000000;
                color: #ffffff;
                width: 100%;
                margin-bottom: 5px;
              "
            >
              <option value="no"${do_not_include_extra_data_selected_attr}>No</option>
              <option value="yes"${include_extra_data_selected_attr}>Yes</option>
            </select>
               <div style="font-size: 0.9em; margin-bottom: 15px;">
                 Whether to include all data from the GraphQL endpoint name "getTrack".<br>
                 If enabled, you'll be able to find this data at JSON path: data -> extra_data.
            </div>
              <button type="submit" onclick="${change_include_extra_data_fn_str}(this)"
              onmouseenter="if(!this.disabled) this.style.backgroundColor='#333333'"
              onmouseleave="if(!this.disabled) this.style.backgroundColor='#515151'"
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #515151;
                color: #ffffff;
                width: 100%;
                font-size: 1em;
                cursor: pointer;
            ">
                Change Extra Data Setting
            </button>
        </div>
    `
  });
}

// src/ws-client/send-track-data-emission-mode-active.ts
async function sendTrackDataEmissionModeActive(app_state) {
  if (app_state.emission_mode.value === "active") {
    await sendTrackData(app_state, null);
  }
}

// node_modules/rx-queue/dist/esm/src/version.js
var VERSION = "1.0.5";
// node_modules/rx-queue/dist/esm/src/rx-queue.js
var DEFAULT_PERIOD_TIME = 500;

class RxQueue extends Subject {
  period;
  itemList = [];
  constructor(period = DEFAULT_PERIOD_TIME) {
    super();
    this.period = period;
  }
  next(item) {
    if (this.observers.length > 0) {
      super.next(item);
    } else {
      this.itemList.push(item);
    }
  }
  subscribe(nextOrObserver, error, complete) {
    let subscription;
    if (typeof nextOrObserver === "function") {
      subscription = super.subscribe(nextOrObserver, error, complete);
    } else {
      subscription = super.subscribe(nextOrObserver);
    }
    this.itemList.forEach((item) => this.next(item));
    this.itemList = [];
    return subscription;
  }
  version() {
    return VERSION;
  }
}
var rx_queue_default = RxQueue;
// node_modules/rxjs/dist/esm5/internal/operators/throttle.js
function throttle2(durationSelector, config3) {
  return operate(function(source, subscriber) {
    var _a = config3 !== null && config3 !== undefined ? config3 : {}, _b = _a.leading, leading = _b === undefined ? true : _b, _c = _a.trailing, trailing = _c === undefined ? false : _c;
    var hasValue = false;
    var sendValue = null;
    var throttled = null;
    var isComplete = false;
    var endThrottling = function() {
      throttled === null || throttled === undefined || throttled.unsubscribe();
      throttled = null;
      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };
    var cleanupThrottling = function() {
      throttled = null;
      isComplete && subscriber.complete();
    };
    var startThrottle = function(value) {
      return throttled = innerFrom(durationSelector(value)).subscribe(createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
    };
    var send = function() {
      if (hasValue) {
        hasValue = false;
        var value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, function() {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}
// node_modules/rx-queue/dist/esm/src/throttle-queue/throttle-queue.js
class ThrottleQueue extends rx_queue_default {
  subscription;
  subject;
  constructor(period) {
    super(period);
    this.subject = new Subject;
    this.subscription = this.subject.pipe(throttle2(() => interval(this.period))).subscribe((item) => super.next(item));
  }
  next(item) {
    this.subject.next(item);
  }
  unsubscribe() {
    this.subscription.unsubscribe();
    super.unsubscribe();
  }
}
// node_modules/rx-queue/dist/esm/src/concurrency-executor/concurrency-executer.js
var import_asynciterable = __toESM(require_asynciterable(), 1);
// src/app/init-app.ts
function initApp(app_state) {
  const saved_emission_mode = Spicetify.LocalStorage.get(app_state.emission_mode.local_storage_key) ?? undefined;
  if (saved_emission_mode != null) {
    app_state.emission_mode.value = saved_emission_mode;
  }
  initWsClient(app_state);
  const menu_item = new Spicetify.Menu.Item(app_state.app_name, true, () => {
    openSettingsPage(app_state);
  }, "computer");
  menu_item.register();
  menu_item.setState(false);
  Spicetify.Player.addEventListener("songchange", () => sendTrackDataEmissionModeActive(app_state));
  Spicetify.Player.addEventListener("onplaypause", () => sendTrackDataEmissionModeActive(app_state));
  const on_progress_queue = new ThrottleQueue(1000);
  on_progress_queue.subscribe((track_id) => {
    const player_track = getCurrentPlayerPlayerTrack();
    if (player_track == null) {
      return;
    }
    if (getTrueTrackIdForPlayerTrack(player_track) != track_id) {
      return;
    }
    sendTrackDataEmissionModeActive(app_state);
  });
  Spicetify.Player.addEventListener("onprogress", () => {
    const player_track = getCurrentPlayerPlayerTrack();
    if (player_track == null) {
      return;
    }
    on_progress_queue.next(getTrueTrackIdForPlayerTrack(player_track));
  });
}

// src/app.ts
var app_state = createDefaultAppState();
SettingsGlobalScopeHelper.app_state = app_state;
function launcher() {
  if (!Spicetify.Player || !Spicetify.Platform || !Spicetify.ReactJSX || !Spicetify.LocalStorage || !Spicetify.GraphQL) {
    setTimeout(launcher, 100);
    return;
  }
  initApp(app_state);
}
launcher();

return {SettingsGlobalScopeHelper: SettingsGlobalScopeHelper}})();
