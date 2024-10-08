import {
  require_classnames,
  require_prop_types
} from "./chunk-K3SGXSER.js";
import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/react-social-media-embed/dist/components/hooks/useFrame.js
var require_useFrame = __commonJS({
  "node_modules/react-social-media-embed/dist/components/hooks/useFrame.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useFrame = void 0;
    var react_1 = __importDefault(require_react());
    var useFrame = (frame) => {
      return react_1.default.useMemo(() => {
        if (frame) {
          return frame;
        }
        return {
          document: typeof document !== "undefined" ? document : void 0,
          window: typeof window !== "undefined" ? window : void 0
        };
      }, [frame]);
    };
    exports.useFrame = useFrame;
  }
});

// node_modules/react-social-media-embed/dist/components/embeds/EmbedStyle.js
var require_EmbedStyle = __commonJS({
  "node_modules/react-social-media-embed/dist/components/embeds/EmbedStyle.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmbedStyle = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var react_1 = __importDefault(require_react());
    var EmbedStyle = (_a) => {
      var styleProps = __rest(_a, []);
      return react_1.default.createElement("style", Object.assign({}, styleProps, { className: (0, classnames_1.default)(styleProps.className), style: Object.assign({}, styleProps.style) }), `
        .rsme-embed .rsme-d-none {
          display: none;
        }
    
        .rsme-embed .twitter-tweet {
          margin: 0 !important;
        }
    
        .rsme-embed blockquote {
          margin: 0 !important;
          padding: 0 !important;
        }

        .rsme-embed.rsme-facebook-embed .fb-post iframe {
          width: 100% !important;
        }

        .rsme-embed.rsme-facebook-embed .fb-post span {
          width: 100% !important;
        }
      `);
    };
    exports.EmbedStyle = EmbedStyle;
  }
});

// node_modules/react-social-media-embed/dist/components/placeholder/parts/BorderSpinner.js
var require_BorderSpinner = __commonJS({
  "node_modules/react-social-media-embed/dist/components/placeholder/parts/BorderSpinner.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BorderSpinner = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var react_1 = __importDefault(require_react());
    var BorderSpinner = (_a) => {
      var divProps = __rest(_a, []);
      return react_1.default.createElement(
        react_1.default.Fragment,
        null,
        react_1.default.createElement("style", null, `
        .rsme-spinner {
          border: 3px solid rgba(0,0,0,0.75);
          border-right-color: transparent;
          border-radius: 50%;
          animation: rsme-spin 1s linear infinite;
        }
        @keyframes rsme-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }  
      `),
        react_1.default.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)("rsme-spinner", divProps.className), style: Object.assign({ width: 10, height: 10 }, divProps.style) }))
      );
    };
    exports.BorderSpinner = BorderSpinner;
  }
});

// node_modules/react-social-media-embed/dist/components/placeholder/parts/EngagementIconsPlaceholder.js
var require_EngagementIconsPlaceholder = __commonJS({
  "node_modules/react-social-media-embed/dist/components/placeholder/parts/EngagementIconsPlaceholder.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ShareArrowIcon = exports.ChatBubbleIcon = exports.HeartIcon = exports.EngagementIconsPlaceholder = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var react_1 = __importDefault(require_react());
    var EngagementIconsPlaceholder = (_a) => {
      var divProps = __rest(_a, []);
      return react_1.default.createElement(
        "div",
        Object.assign({}, divProps, { className: (0, classnames_1.default)(divProps.className), style: Object.assign({ display: "flex", alignItems: "center", columnGap: 14 }, divProps.style) }),
        react_1.default.createElement(exports.HeartIcon, null),
        react_1.default.createElement(exports.ChatBubbleIcon, null),
        react_1.default.createElement(exports.ShareArrowIcon, null)
      );
    };
    exports.EngagementIconsPlaceholder = EngagementIconsPlaceholder;
    var HeartIcon = (props) => {
      return react_1.default.createElement(
        "div",
        Object.assign({}, props),
        react_1.default.createElement("div", { style: {
          backgroundColor: "#F4F4F4",
          borderRadius: "50%",
          height: "12.5px",
          width: "12.5px",
          transform: "translateX(0px) translateY(7px)"
        } }),
        react_1.default.createElement("div", { style: {
          backgroundColor: "#F4F4F4",
          height: "12.5px",
          transform: "rotate(-45deg) translateX(3px) translateY(1px)",
          width: "12.5px",
          flexGrow: 0,
          marginRight: "6px",
          marginLeft: "2px"
        } }),
        react_1.default.createElement("div", { style: {
          backgroundColor: "#F4F4F4",
          borderRadius: "50%",
          height: "12.5px",
          width: "12.5px",
          transform: "translateX(9px) translateY(-18px)"
        } })
      );
    };
    exports.HeartIcon = HeartIcon;
    var ChatBubbleIcon = (props) => {
      return react_1.default.createElement(
        "div",
        Object.assign({}, props),
        react_1.default.createElement("div", { style: {
          backgroundColor: "#F4F4F4",
          borderRadius: "50%",
          height: "20px",
          width: "20px"
        } }),
        react_1.default.createElement("div", { style: {
          width: 0,
          height: 0,
          borderTop: "2px solid transparent",
          borderLeft: "6px solid #f4f4f4",
          borderBottom: "2px solid transparent",
          transform: "translateX(16px) translateY(-4px) rotate(30deg)"
        } })
      );
    };
    exports.ChatBubbleIcon = ChatBubbleIcon;
    var ShareArrowIcon = (props) => {
      return react_1.default.createElement(
        "div",
        Object.assign({}, props, { style: {
          height: 25,
          width: 25,
          transform: "translateX(0px) translateY(-2px)"
        } }),
        react_1.default.createElement(
          "svg",
          { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 512 512", xmlSpace: "preserve" },
          react_1.default.createElement("path", { style: { fill: "#F4F4F4" }, d: "M295.204,180.593C132.168,180.593,0,312.759,0,475.796\nc51.398-130.047,184.869-203.22,317.483-183.603L295.204,180.593z" }),
          react_1.default.createElement("path", { style: { fill: "#F4F4F4" }, d: "M512,253L295.204,36.204v217.818C159.946,249.655,34.992,339.262,0,475.794\nc59.905-109.171,178.724-165.463,295.204-151.033v145.035L512,253z" })
        )
      );
    };
    exports.ShareArrowIcon = ShareArrowIcon;
  }
});

// node_modules/react-social-media-embed/dist/components/placeholder/parts/ProfilePlaceholder.js
var require_ProfilePlaceholder = __commonJS({
  "node_modules/react-social-media-embed/dist/components/placeholder/parts/ProfilePlaceholder.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProfilePlaceholder = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var react_1 = __importDefault(require_react());
    var ProfilePlaceholder = (_a) => {
      var divProps = __rest(_a, []);
      return react_1.default.createElement(
        "div",
        Object.assign({}, divProps, { className: (0, classnames_1.default)(divProps.className), style: Object.assign({}, divProps.style) }),
        react_1.default.createElement(
          "div",
          { style: { display: "flex", columnGap: 14 } },
          react_1.default.createElement("div", { style: {
            backgroundColor: "#F4F4F4",
            borderRadius: "50%",
            width: 40,
            height: 40
          } }),
          react_1.default.createElement(
            "div",
            { style: { display: "flex", flexDirection: "column", justifyContent: "center", rowGap: 6 } },
            react_1.default.createElement("div", { style: {
              backgroundColor: "#F4F4F4",
              borderRadius: 4,
              width: 100,
              height: 14
            } }),
            react_1.default.createElement("div", { style: {
              backgroundColor: "#F4F4F4",
              borderRadius: 4,
              width: 60,
              height: 14
            } })
          )
        )
      );
    };
    exports.ProfilePlaceholder = ProfilePlaceholder;
  }
});

// node_modules/react-social-media-embed/dist/components/placeholder/PlaceholderEmbed.js
var require_PlaceholderEmbed = __commonJS({
  "node_modules/react-social-media-embed/dist/components/placeholder/PlaceholderEmbed.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlaceholderEmbed = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var react_1 = __importDefault(require_react());
    var EmbedStyle_1 = require_EmbedStyle();
    var BorderSpinner_1 = require_BorderSpinner();
    var EngagementIconsPlaceholder_1 = require_EngagementIconsPlaceholder();
    var ProfilePlaceholder_1 = require_ProfilePlaceholder();
    var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
    var PlaceholderEmbed = (_a) => {
      var _b;
      var { url, linkText = "View post", imageUrl, spinner = react_1.default.createElement(BorderSpinner_1.BorderSpinner, null), allowJavaScriptUrls = true, spinnerDisabled } = _a, divProps = __rest(_a, ["url", "linkText", "imageUrl", "spinner", "allowJavaScriptUrls", "spinnerDisabled"]);
      if (isJavaScriptProtocol.test(url) && !allowJavaScriptUrls) {
        console.warn(`PlaceholderEmbed has blocked a javascript: URL as a security precaution`);
        return null;
      }
      return react_1.default.createElement(
        "div",
        Object.assign({}, divProps, { className: (0, classnames_1.default)(divProps.className), style: Object.assign({ overflow: "hidden", border: "1px solid #dee2e6", backgroundColor: "#ffffff", borderRadius: 0, boxSizing: "border-box", position: "relative" }, divProps.style) }),
        react_1.default.createElement(EmbedStyle_1.EmbedStyle, null),
        react_1.default.createElement(
          "a",
          { href: url, style: { textDecoration: "none" }, target: "_blank", rel: "noopener noreferrer" },
          !imageUrl && react_1.default.createElement(
            "div",
            { style: {
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 16,
              paddingBottom: 16,
              zIndex: 2,
              backgroundColor: "#ffffff"
            } },
            react_1.default.createElement(ProfilePlaceholder_1.ProfilePlaceholder, null)
          ),
          react_1.default.createElement(
            "div",
            { style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: imageUrl ? "start" : "center",
              height: "100%",
              width: "100%"
            } },
            !imageUrl && react_1.default.createElement(
              "div",
              { style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                rowGap: 16,
                zIndex: 3,
                padding: 8,
                backgroundColor: "#ffffff"
              } },
              !spinnerDisabled && spinner,
              !!linkText && react_1.default.createElement("div", { style: {
                color: "#000000",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 550,
                lineHeight: "18px",
                textAlign: "center"
              } }, linkText)
            ),
            imageUrl && (typeof ((_b = divProps.style) === null || _b === void 0 ? void 0 : _b.height) !== "undefined" ? react_1.default.createElement("div", { style: {
              width: "100%",
              height: "100%",
              background: `url("${imageUrl}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginBottom: "40"
            } }) : react_1.default.createElement(
              "div",
              { style: { width: "100%", marginBottom: 40 } },
              react_1.default.createElement("img", { src: imageUrl, style: { width: "100%" } })
            ))
          ),
          react_1.default.createElement(
            "div",
            { style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 40,
              width: "100%",
              backgroundColor: "#ffffff",
              zIndex: 1
            } },
            !imageUrl && react_1.default.createElement(EngagementIconsPlaceholder_1.EngagementIconsPlaceholder, { style: {
              marginLeft: 16
            } }),
            imageUrl && react_1.default.createElement(
              "div",
              { style: {
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                columnGap: 16
              } },
              react_1.default.createElement("div", { style: {
                color: "#0095f6",
                fontWeight: 600,
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                whiteSpace: "nowrap",
                marginLeft: 16
              } }, linkText),
              !spinnerDisabled && react_1.default.createElement("div", { style: { marginRight: 16 } }, spinner)
            )
          )
        )
      );
    };
    exports.PlaceholderEmbed = PlaceholderEmbed;
  }
});

// node_modules/react-social-media-embed/dist/components/uuid.js
var require_uuid = __commonJS({
  "node_modules/react-social-media-embed/dist/components/uuid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateUUID = void 0;
    var generateUUID = () => {
      let d = (/* @__PURE__ */ new Date()).getTime();
      let d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        let r = Math.random() * 16;
        if (d > 0) {
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : r & 3 | 8).toString(16);
      });
    };
    exports.generateUUID = generateUUID;
  }
});

// node_modules/react-sub-unsub/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-sub-unsub/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Subs = exports.Subscribe = void 0;
    var Subscribe = class _Subscribe {
      /**
       * Call a function that adds a listener and returns a function that will unsubscribe the listener.
       *
       * The function passed in will be called immediately to add the listener,
       * and its Unsubscribe function will be returned.
       *
       * @param subscribe The subscribe function, which returns an Unsubscribe. Will be called immediately.
       * @returns The Unsubscribe function for this subscription.
       */
      static subscribe(subscribe) {
        try {
          return subscribe();
        } catch (e) {
          console.error(e);
        }
        return () => {
        };
      }
      /**
       * Subscribe to an emitter event. Returns a function that will unsubscribe the listener.
       *
       * @param eventEmitter The [EventEmitter](https://nodejs.org/api/events.html#class-eventemitter) to subscribe to.
       * @param eventName The name of the event to listen for.
       * @param listener The listener callback that is called when the event occurs.
       * @returns The Unsubscribe function for this subscription.
       */
      static subscribeEvent(eventEmitter, eventName, listener) {
        eventEmitter.addListener(eventName, listener);
        return () => {
          eventEmitter.removeListener(eventName, listener);
        };
      }
      /**
       * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback
       * that will be invoked when the event is dispatched.
       *
       * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the
       * method behaves exactly as if the value was specified as options's capture.
       *
       * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute
       * value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute
       * value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
       *
       * Returns a function that will unsubscribe the listener.
       *
       * @param domObj The DOM object to subscribe to for events.
       * @param eventName The name of the event to listen for.
       * @param listener The listener callback that is called when the event occurs.
       * @param options Listener-specific options. See function description.
       * @returns The Unsubscribe function for this subscription.
       */
      static subscribeDOMEvent(domObj, eventName, listener, options) {
        domObj.addEventListener(eventName, listener, options);
        return () => {
          domObj.removeEventListener(eventName, listener, options);
        };
      }
      /**
       * Sets a timer which executes a function once the timer expires using `setTimeout`.
       * Returns an unsubscribe function that clears the timeout using `clearTimeout`.
       *
       * @param handler A function to be executed after the timer expires.
       * @param delay The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.
       * @param args Additional arguments which are passed through to the handler specified.
       * @returns The Unsubscribe function for this subscription.
       */
      static setTimeout(handler, delay, ...args) {
        const timeout = setTimeout(handler, delay, args);
        return () => clearTimeout(timeout);
      }
      /**
       * Repeatedly calls a function with a fixed time delay between each call using `setInterval`.
       * Returns an unsubscribe function that clears the interval using `clearInterval`.
       *
       * @param handler A function to be executed after the timer expires.
       * @param delay The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code. Defaults to 0 if not specified.
       * @param args Additional arguments which are passed through to the handler once the timer expires.
       * @returns The Unsubscribe function for this subscription.
       */
      static setInterval(handler, delay, ...args) {
        const interval = setInterval(handler, delay, args);
        return () => clearInterval(interval);
      }
      /**
       * Call all unsubscribe functions passed in. Can pass either an array of unsubscribe functions,
       * or a single unsubscribe function.
       *
       * @param unsubs An array of unsubscribe functions, or a single unsubscribe function.
       */
      static unsubAll(unsubs) {
        if (Array.isArray(unsubs)) {
          unsubs.forEach((unsub) => {
            try {
              unsub();
            } catch (e) {
              console.error(e);
            }
          });
        } else {
          try {
            unsubs();
          } catch (e) {
            console.error(e);
          }
        }
      }
      /**
       * Creates and returns a cleanup function that, when called, calls all unsubscribe functions provided.
       *
       * @param unsubs All subscriptions to be unsubscribed when the returned cleanup function is called.
       * @returns A cleanup function that unsubscribes all subscriptions provided.
       */
      static createCleanup(unsubs) {
        return () => _Subscribe.unsubAll(unsubs);
      }
    };
    exports.Subscribe = Subscribe;
    var Subs = class {
      /**
       * Construct a new Subs object.
       *
       * A Subs object can be used to subscribe and unsubscribe to events,
       * and to collect subscriptions in an array to be unsubscribed all at once.
       *
       * Calling any of the subscribe functions will add the unsubscribe function to
       * an internal array. You can then call `unsubAll()` to unsubscribe all
       * at once and clear the list.
       *
       * You can optionally pass in an array of unsubscribe functions to start with.
       *
       * @param list Optional array of unsubscribe functions. Defaults to an empty list.
       */
      constructor(list = []) {
        this.list = list;
      }
      /**
       * Call a function that adds a listener and returns a function that will unsubscribe the listener.
       *
       * The function passed in will be called immediately to add the listener,
       * and its Unsubscribe function will be returned.
       *
       * The Unsubscribe function will be added to the internal list of unsubs. You can unsubscribe all by calling `unsubAll()`.
       *
       * @param subscribe The subscribe function, which returns an Unsubscribe. Will be called immediately.
       * @returns The Unsubscribe function for this subscription.
       */
      subscribe(subscribe) {
        const unsub = Subscribe.subscribe(subscribe);
        this.push(unsub);
        return unsub;
      }
      /**
       * Subscribe to an emitter event. Returns a function that will unsubscribe the listener.
       *
       * The Unsubscribe function will be added to the internal list of unsubs. You can unsubscribe all by calling `unsubAll()`.
       *
       * @param eventEmitter The [EventEmitter](https://nodejs.org/api/events.html#class-eventemitter) to subscribe to.
       * @param eventName The name of the event to listen for.
       * @param listener The listener callback that is called when the event occurs.
       * @returns The Unsubscribe function for this subscription.
       */
      subscribeEvent(eventEmitter, eventName, listener) {
        const unsub = Subscribe.subscribeEvent(eventEmitter, eventName, listener);
        this.push(unsub);
        return unsub;
      }
      /**
       * Subscribe to an event on a DOM object (Window or Node). Returns a function that will unsubscribe the listener.
       *
       * The Unsubscribe function will be added to the internal list of unsubs. You can unsubscribe all by calling `unsubAll()`.
       *
       * @param domObj The DOM object to subscribe to for events.
       * @param eventName The name of the event to listen for.
       * @param listener The listener callback that is called when the event occurs.
       * @returns The Unsubscribe function for this subscription.
       */
      subscribeDOMEvent(domObj, eventName, listener) {
        const unsub = Subscribe.subscribeDOMEvent(domObj, eventName, listener);
        this.push(unsub);
        return unsub;
      }
      /**
       * Sets a timer which executes a function once the timer expires using `setTimeout`.
       * Returns an unsubscribe function that clears the timeout using `clearTimeout`.
       *
       * The Unsubscribe function will be added to the internal list of unsubs. You can unsubscribe all by calling `unsubAll()`.
       *
       * @param handler A function to be executed after the timer expires.
       * @param delay The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.
       * @param args Additional arguments which are passed through to the handler specified.
       * @returns The Unsubscribe function for this subscription.
       */
      setTimeout(handler, delay, ...args) {
        const timeout = setTimeout(handler, delay, args);
        const unsub = () => clearTimeout(timeout);
        this.push(unsub);
        return unsub;
      }
      /**
       * Repeatedly calls a function with a fixed time delay between each call using `setInterval`.
       * Returns an unsubscribe function that clears the interval using `clearInterval`.
       *
       * The Unsubscribe function will be added to the internal list of unsubs. You can unsubscribe all by calling `unsubAll()`.
       *
       * @param handler A function to be executed after the timer expires.
       * @param delay The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code. Defaults to 0 if not specified.
       * @param args Additional arguments which are passed through to the handler once the timer expires.
       * @returns The Unsubscribe function for this subscription.
       */
      setInterval(handler, delay, ...args) {
        const interval = setInterval(handler, delay, args);
        const unsub = () => clearInterval(interval);
        this.push(unsub);
        return unsub;
      }
      /**
       * Pushes an unsubscribe function onto the subscription list.
       *
       * You can unsubscribe all by calling `unsubAll()`.
       *
       * @param unsub The unsubscribe function to push to the subscription list.
       */
      push(unsub) {
        this.list.push(unsub);
      }
      /**
       * Call all unsubscribe functions and clear the unsubscribe list.
       */
      unsubAll() {
        Subscribe.unsubAll(this.list);
        this.list.splice(0, this.list.length);
      }
      /**
       * Creates and returns a cleanup function that, when called, calls all unsubscribe functions and clears the unsubscribe list.
       *
       * @returns A cleanup function that unsubscribes all subscriptions and clears the unsubscribe list.
       */
      createCleanup() {
        return () => {
          this.unsubAll();
        };
      }
    };
    exports.Subs = Subs;
  }
});

// node_modules/react-social-media-embed/dist/components/embeds/FacebookEmbed.js
var require_FacebookEmbed = __commonJS({
  "node_modules/react-social-media-embed/dist/components/embeds/FacebookEmbed.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FacebookEmbed = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var react_1 = __importDefault(require_react());
    var useFrame_1 = require_useFrame();
    var PlaceholderEmbed_1 = require_PlaceholderEmbed();
    var uuid_1 = require_uuid();
    var EmbedStyle_1 = require_EmbedStyle();
    var react_sub_unsub_1 = require_dist();
    var embedJsScriptSrc = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0";
    var defaultEmbedWidth = 550;
    var maxPlaceholderWidth = defaultEmbedWidth;
    var defaultPlaceholderHeight = 372;
    var borderRadius = 3;
    var CHECK_SCRIPT_STAGE = "check-script";
    var LOAD_SCRIPT_STAGE = "load-script";
    var CONFIRM_SCRIPT_LOADED_STAGE = "confirm-script-loaded";
    var PROCESS_EMBED_STAGE = "process-embed";
    var CONFIRM_EMBED_SUCCESS_STAGE = "confirm-embed-success";
    var RETRYING_STAGE = "retrying";
    var EMBED_SUCCESS_STAGE = "embed-success";
    var FacebookEmbed = (_a) => {
      var _b, _c;
      var { url, width, height, linkText = "View post on Facebook", placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled = false, placeholderProps, embedPlaceholder, placeholderDisabled = false, scriptLoadDisabled = false, retryDelay = 5e3, retryDisabled = false, frame = void 0, debug = false } = _a, divProps = __rest(_a, ["url", "width", "height", "linkText", "placeholderImageUrl", "placeholderSpinner", "placeholderSpinnerDisabled", "placeholderProps", "embedPlaceholder", "placeholderDisabled", "scriptLoadDisabled", "retryDelay", "retryDisabled", "frame", "debug"]);
      const [stage, setStage] = react_1.default.useState(CHECK_SCRIPT_STAGE);
      const embedSuccess = react_1.default.useMemo(() => stage === EMBED_SUCCESS_STAGE, [stage]);
      const uuidRef = react_1.default.useRef((0, uuid_1.generateUUID)());
      const [processTime, setProcessTime] = react_1.default.useState(Date.now());
      const embedContainerKey = react_1.default.useMemo(() => `${uuidRef.current}-${processTime}`, [processTime]);
      const frm = (0, useFrame_1.useFrame)(frame);
      react_1.default.useEffect(() => {
        debug && console.log(`[${(/* @__PURE__ */ new Date()).toISOString()}]: ${stage}`);
      }, [debug, stage]);
      react_1.default.useEffect(() => {
        var _a2, _b2, _c2;
        if (stage === CHECK_SCRIPT_STAGE) {
          if ((_c2 = (_b2 = (_a2 = frm.window) === null || _a2 === void 0 ? void 0 : _a2.FB) === null || _b2 === void 0 ? void 0 : _b2.XFBML) === null || _c2 === void 0 ? void 0 : _c2.parse) {
            setStage(PROCESS_EMBED_STAGE);
          } else if (!scriptLoadDisabled) {
            setStage(LOAD_SCRIPT_STAGE);
          } else {
            console.error("Facebook embed script not found. Unable to process Facebook embed:", url);
          }
        }
      }, [scriptLoadDisabled, stage, url, frm.window]);
      react_1.default.useEffect(() => {
        if (stage === LOAD_SCRIPT_STAGE) {
          if (frm.document) {
            const scriptElement = frm.document.createElement("script");
            scriptElement.setAttribute("src", embedJsScriptSrc);
            frm.document.head.appendChild(scriptElement);
            setStage(CONFIRM_SCRIPT_LOADED_STAGE);
          }
        }
      }, [stage, frm.document]);
      react_1.default.useEffect(() => {
        const subs = new react_sub_unsub_1.Subs();
        if (stage === CONFIRM_SCRIPT_LOADED_STAGE) {
          subs.setInterval(() => {
            var _a2, _b2, _c2;
            if ((_c2 = (_b2 = (_a2 = frm.window) === null || _a2 === void 0 ? void 0 : _a2.FB) === null || _b2 === void 0 ? void 0 : _b2.XFBML) === null || _c2 === void 0 ? void 0 : _c2.parse) {
              setStage(PROCESS_EMBED_STAGE);
            }
          }, 1);
        }
        return subs.createCleanup();
      }, [stage, frm.window]);
      react_1.default.useEffect(() => {
        var _a2, _b2, _c2;
        if (stage === PROCESS_EMBED_STAGE) {
          const parse = (_c2 = (_b2 = (_a2 = frm.window) === null || _a2 === void 0 ? void 0 : _a2.FB) === null || _b2 === void 0 ? void 0 : _b2.XFBML) === null || _c2 === void 0 ? void 0 : _c2.parse;
          if (parse) {
            parse();
            setStage(CONFIRM_EMBED_SUCCESS_STAGE);
          } else {
            console.error("Facebook embed script not found. Unable to process Facebook embed:", url);
          }
        }
      }, [stage, url, frm.window]);
      react_1.default.useEffect(() => {
        const subs = new react_sub_unsub_1.Subs();
        if (stage === CONFIRM_EMBED_SUCCESS_STAGE) {
          subs.setInterval(() => {
            if (frm.document) {
              const fbPostContainerElement = frm.document.getElementById(uuidRef.current);
              if (fbPostContainerElement) {
                const fbPostElem = fbPostContainerElement.getElementsByClassName("fb-post")[0];
                if (fbPostElem) {
                  if (fbPostElem.children.length > 0) {
                    setStage(EMBED_SUCCESS_STAGE);
                  }
                }
              }
            }
          }, 1);
          if (!retryDisabled) {
            subs.setTimeout(() => {
              setStage(RETRYING_STAGE);
            }, retryDelay);
          }
        }
        return subs.createCleanup();
      }, [retryDisabled, retryDelay, stage, frm.document]);
      react_1.default.useEffect(() => {
        if (stage === RETRYING_STAGE) {
          setProcessTime(Date.now());
          setStage(PROCESS_EMBED_STAGE);
        }
      }, [stage]);
      const isPercentageWidth = !!(width === null || width === void 0 ? void 0 : width.toString().includes("%"));
      const isPercentageHeight = !!(height === null || height === void 0 ? void 0 : height.toString().includes("%"));
      const placeholderStyle = {
        maxWidth: isPercentageWidth ? void 0 : maxPlaceholderWidth,
        width: typeof width !== "undefined" ? isPercentageWidth ? "100%" : width : "100%",
        height: isPercentageHeight ? "100%" : typeof height !== "undefined" ? height : typeof ((_b = divProps.style) === null || _b === void 0 ? void 0 : _b.height) !== "undefined" || typeof ((_c = divProps.style) === null || _c === void 0 ? void 0 : _c.maxHeight) !== "undefined" ? "100%" : defaultPlaceholderHeight,
        border: "1px solid #dee2e6",
        borderRadius
      };
      const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : react_1.default.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url, imageUrl: placeholderImageUrl, linkText, spinner: placeholderSpinner, spinnerDisabled: placeholderSpinnerDisabled }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) }));
      return react_1.default.createElement(
        "div",
        Object.assign({}, divProps, { className: (0, classnames_1.default)("rsme-embed rsme-facebook-embed", divProps.className), style: Object.assign({ overflow: "hidden", width: width !== null && width !== void 0 ? width : void 0, height: height !== null && height !== void 0 ? height : void 0, borderRadius }, divProps.style) }),
        react_1.default.createElement(EmbedStyle_1.EmbedStyle, null),
        react_1.default.createElement(
          "div",
          { id: uuidRef.current, className: (0, classnames_1.default)(!embedSuccess && "rsme-d-none") },
          react_1.default.createElement("div", { key: embedContainerKey, className: "fb-post", "data-href": url, "data-width": isPercentageWidth ? "100%" : width !== null && width !== void 0 ? width : defaultEmbedWidth, style: {
            width: isPercentageWidth ? "100%" : width !== null && width !== void 0 ? width : defaultEmbedWidth,
            height: isPercentageHeight ? "100%" : height !== null && height !== void 0 ? height : void 0
          } })
        ),
        !embedSuccess && !placeholderDisabled && placeholder
      );
    };
    exports.FacebookEmbed = FacebookEmbed;
  }
});

// node_modules/react-social-media-embed/dist/components/embeds/InstagramEmbed.js
var require_InstagramEmbed = __commonJS({
  "node_modules/react-social-media-embed/dist/components/embeds/InstagramEmbed.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InstagramEmbed = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var React3 = __importStar(require_react());
    var react_sub_unsub_1 = require_dist();
    var useFrame_1 = require_useFrame();
    var PlaceholderEmbed_1 = require_PlaceholderEmbed();
    var uuid_1 = require_uuid();
    var EmbedStyle_1 = require_EmbedStyle();
    var embedJsScriptSrc = "https://www.instagram.com/embed.js";
    var minPlaceholderWidth = 328;
    var defaultPlaceholderHeight = 372;
    var borderRadius = 3;
    var CHECK_SCRIPT_STAGE = "check-script";
    var LOAD_SCRIPT_STAGE = "load-script";
    var CONFIRM_SCRIPT_LOADED_STAGE = "confirm-script-loaded";
    var PROCESS_EMBED_STAGE = "process-embed";
    var CONFIRM_EMBED_SUCCESS_STAGE = "confirm-embed-success";
    var RETRYING_STAGE = "retrying";
    var EMBED_SUCCESS_STAGE = "embed-success";
    var InstagramEmbed = (_a) => {
      var _b, _c;
      var { url, width, height, linkText = "View post on Instagram", captioned = false, placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled = false, placeholderProps, embedPlaceholder, placeholderDisabled = false, scriptLoadDisabled = false, retryDelay = 5e3, retryDisabled = false, igVersion = "14", frame = void 0, debug = false } = _a, divProps = __rest(_a, ["url", "width", "height", "linkText", "captioned", "placeholderImageUrl", "placeholderSpinner", "placeholderSpinnerDisabled", "placeholderProps", "embedPlaceholder", "placeholderDisabled", "scriptLoadDisabled", "retryDelay", "retryDisabled", "igVersion", "frame", "debug"]);
      const [stage, setStage] = React3.useState(CHECK_SCRIPT_STAGE);
      const uuidRef = React3.useRef((0, uuid_1.generateUUID)());
      const [processTime, setProcessTime] = React3.useState(Date.now());
      const embedContainerKey = React3.useMemo(() => `${uuidRef.current}-${processTime}`, [processTime]);
      const frm = (0, useFrame_1.useFrame)(frame);
      React3.useEffect(() => {
        debug && console.log(`[${(/* @__PURE__ */ new Date()).toISOString()}]: ${stage}`);
      }, [debug, stage]);
      React3.useEffect(() => {
        var _a2, _b2, _c2;
        if (stage === CHECK_SCRIPT_STAGE) {
          if ((_c2 = (_b2 = (_a2 = frm.window) === null || _a2 === void 0 ? void 0 : _a2.instgrm) === null || _b2 === void 0 ? void 0 : _b2.Embeds) === null || _c2 === void 0 ? void 0 : _c2.process) {
            setStage(PROCESS_EMBED_STAGE);
          } else if (!scriptLoadDisabled) {
            setStage(LOAD_SCRIPT_STAGE);
          } else {
            console.error("Instagram embed script not found. Unable to process Instagram embed:", url);
          }
        }
      }, [scriptLoadDisabled, stage, url, frm.window]);
      React3.useEffect(() => {
        if (stage === LOAD_SCRIPT_STAGE) {
          if (frm.document) {
            const scriptElement = frm.document.createElement("script");
            scriptElement.setAttribute("src", embedJsScriptSrc);
            frm.document.head.appendChild(scriptElement);
            setStage(CONFIRM_SCRIPT_LOADED_STAGE);
          }
        }
      }, [stage, frm.document]);
      React3.useEffect(() => {
        const subs = new react_sub_unsub_1.Subs();
        if (stage === CONFIRM_SCRIPT_LOADED_STAGE) {
          subs.setInterval(() => {
            var _a2, _b2, _c2;
            if ((_c2 = (_b2 = (_a2 = frm.window) === null || _a2 === void 0 ? void 0 : _a2.instgrm) === null || _b2 === void 0 ? void 0 : _b2.Embeds) === null || _c2 === void 0 ? void 0 : _c2.process) {
              setStage(PROCESS_EMBED_STAGE);
            }
          }, 1);
        }
        return subs.createCleanup();
      }, [stage, frm.window]);
      React3.useEffect(() => {
        var _a2, _b2, _c2;
        if (stage === PROCESS_EMBED_STAGE) {
          const process2 = (_c2 = (_b2 = (_a2 = frm.window) === null || _a2 === void 0 ? void 0 : _a2.instgrm) === null || _b2 === void 0 ? void 0 : _b2.Embeds) === null || _c2 === void 0 ? void 0 : _c2.process;
          if (process2) {
            process2();
            setStage(CONFIRM_EMBED_SUCCESS_STAGE);
          } else {
            console.error("Instagram embed script not found. Unable to process Instagram embed:", url);
          }
        }
      }, [stage, frm.window, url]);
      React3.useEffect(() => {
        const subs = new react_sub_unsub_1.Subs();
        if (stage === CONFIRM_EMBED_SUCCESS_STAGE) {
          subs.setInterval(() => {
            if (frm.document) {
              const preEmbedElement = frm.document.getElementById(uuidRef.current);
              if (!preEmbedElement) {
                setStage(EMBED_SUCCESS_STAGE);
              }
            }
          }, 1);
          if (!retryDisabled) {
            subs.setTimeout(() => {
              setStage(RETRYING_STAGE);
            }, retryDelay);
          }
        }
        return subs.createCleanup();
      }, [retryDelay, retryDisabled, stage, frm.document]);
      React3.useEffect(() => {
        if (stage === RETRYING_STAGE) {
          setProcessTime(Date.now());
          setStage(PROCESS_EMBED_STAGE);
        }
      }, [stage]);
      const urlWithNoQuery = url.replace(/[?].*$/, "");
      const cleanUrlWithEndingSlash = `${urlWithNoQuery}${urlWithNoQuery.endsWith("/") ? "" : "/"}`;
      const isPercentageWidth = !!(width === null || width === void 0 ? void 0 : width.toString().includes("%"));
      const isPercentageHeight = !!(height === null || height === void 0 ? void 0 : height.toString().includes("%"));
      const placeholderStyle = {
        minWidth: isPercentageWidth ? void 0 : minPlaceholderWidth,
        width: typeof width !== "undefined" ? isPercentageWidth ? "100%" : width : "100%",
        height: isPercentageHeight ? "100%" : typeof height !== "undefined" ? height : typeof ((_b = divProps.style) === null || _b === void 0 ? void 0 : _b.height) !== "undefined" || typeof ((_c = divProps.style) === null || _c === void 0 ? void 0 : _c.maxHeight) !== "undefined" ? "100%" : defaultPlaceholderHeight,
        border: "1px solid #dee2e6",
        borderRadius
      };
      const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : React3.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url: cleanUrlWithEndingSlash, imageUrl: placeholderImageUrl, linkText, spinner: placeholderSpinner, spinnerDisabled: placeholderSpinnerDisabled }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) }));
      return React3.createElement(
        "div",
        Object.assign({}, divProps, { className: (0, classnames_1.default)("rsme-embed rsme-instagram-embed", uuidRef.current, divProps.className), style: Object.assign({ overflow: "hidden", width: width !== null && width !== void 0 ? width : void 0, height: height !== null && height !== void 0 ? height : void 0, borderRadius }, divProps.style) }),
        React3.createElement(EmbedStyle_1.EmbedStyle, null),
        React3.createElement(
          "blockquote",
          { key: embedContainerKey, className: "instagram-media", "data-instgrm-permalink": `${cleanUrlWithEndingSlash}?utm_source=ig_embed&utm_campaign=loading`, "data-instgrm-version": igVersion, "data-instgrm-captioned": captioned ? captioned : void 0, "data-width": isPercentageWidth ? "100%" : width !== null && width !== void 0 ? width : void 0, style: {
            width: "calc(100% - 2px)"
          } },
          !placeholderDisabled && placeholder,
          React3.createElement("div", { id: uuidRef.current, className: "instagram-media-pre-embed rsme-d-none" }, " ")
        )
      );
    };
    exports.InstagramEmbed = InstagramEmbed;
  }
});

// node_modules/react-social-media-embed/dist/components/embeds/LinkedInEmbed.js
var require_LinkedInEmbed = __commonJS({
  "node_modules/react-social-media-embed/dist/components/embeds/LinkedInEmbed.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkedInEmbed = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var React3 = __importStar(require_react());
    var PlaceholderEmbed_1 = require_PlaceholderEmbed();
    var EmbedStyle_1 = require_EmbedStyle();
    var minPlaceholderWidth = 250;
    var maxPlaceholderWidth = 550;
    var defaultPlaceholderHeight = 550;
    var borderRadius = 8;
    var LinkedInEmbed = (_a) => {
      var _b, _c;
      var { url, postUrl, width, height = 500, linkText = "View post on LinkedIn", placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled = false, placeholderProps, embedPlaceholder, placeholderDisabled = false } = _a, divProps = __rest(_a, ["url", "postUrl", "width", "height", "linkText", "placeholderImageUrl", "placeholderSpinner", "placeholderSpinnerDisabled", "placeholderProps", "embedPlaceholder", "placeholderDisabled"]);
      const [ready, setReady] = React3.useState(false);
      const placeholderStyle = {
        minWidth: minPlaceholderWidth,
        maxWidth: maxPlaceholderWidth,
        width: typeof width !== "undefined" ? width : "100%",
        height: typeof height !== "undefined" ? height : typeof ((_b = divProps.style) === null || _b === void 0 ? void 0 : _b.height) !== "undefined" || typeof ((_c = divProps.style) === null || _c === void 0 ? void 0 : _c.maxHeight) !== "undefined" ? "100%" : defaultPlaceholderHeight,
        border: "solid 1px rgba(0, 0, 0, 0.15)",
        borderRadius
      };
      const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : React3.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url: postUrl !== null && postUrl !== void 0 ? postUrl : url, imageUrl: placeholderImageUrl, linkText, spinner: placeholderSpinner, spinnerDisabled: placeholderSpinnerDisabled }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) }));
      return React3.createElement(
        "div",
        Object.assign({}, divProps, { className: (0, classnames_1.default)("rsme-embed rsme-linkedin-embed", divProps.className), style: Object.assign({ overflow: "hidden", width: width !== null && width !== void 0 ? width : void 0, height: height !== null && height !== void 0 ? height : void 0, borderRadius }, divProps.style) }),
        React3.createElement(EmbedStyle_1.EmbedStyle, null),
        React3.createElement("iframe", { className: (0, classnames_1.default)("linkedin-post", !ready && "rsme-d-none"), src: url, width: "100%", height: !ready ? 0 : height, frameBorder: "0", onLoad: () => setReady(true) }),
        !ready && !placeholderDisabled && placeholder
      );
    };
    exports.LinkedInEmbed = LinkedInEmbed;
  }
});

// node_modules/react-social-media-embed/dist/components/embeds/PinterestEmbed.js
var require_PinterestEmbed = __commonJS({
  "node_modules/react-social-media-embed/dist/components/embeds/PinterestEmbed.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PinterestEmbed = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var React3 = __importStar(require_react());
    var PlaceholderEmbed_1 = require_PlaceholderEmbed();
    var EmbedStyle_1 = require_EmbedStyle();
    var minPlaceholderWidth = 250;
    var maxPlaceholderWidth = 550;
    var defaultPlaceholderHeight = 550;
    var borderRadius = 8;
    var PinterestEmbed = (_a) => {
      var _b, _c, _d;
      var { url, postUrl, width, height = 500, linkText = "View post on Pinterest", placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled = false, placeholderProps, embedPlaceholder, placeholderDisabled = false } = _a, divProps = __rest(_a, ["url", "postUrl", "width", "height", "linkText", "placeholderImageUrl", "placeholderSpinner", "placeholderSpinnerDisabled", "placeholderProps", "embedPlaceholder", "placeholderDisabled"]);
      const [ready, setReady] = React3.useState(false);
      const placeholderStyle = {
        minWidth: minPlaceholderWidth,
        maxWidth: maxPlaceholderWidth,
        width: typeof width !== "undefined" ? width : "100%",
        height: typeof height !== "undefined" ? height : typeof ((_b = divProps.style) === null || _b === void 0 ? void 0 : _b.height) !== "undefined" || typeof ((_c = divProps.style) === null || _c === void 0 ? void 0 : _c.maxHeight) !== "undefined" ? "100%" : defaultPlaceholderHeight,
        border: "solid 1px rgba(0, 0, 0, 0.15)",
        borderRadius
      };
      const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : React3.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url: postUrl !== null && postUrl !== void 0 ? postUrl : url, imageUrl: placeholderImageUrl, linkText, spinner: placeholderSpinner, spinnerDisabled: placeholderSpinnerDisabled }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) }));
      const postIdMatch = (_d = url.match(/pin\/([\w\d_-]+)/)) === null || _d === void 0 ? void 0 : _d[1];
      const postId = postIdMatch !== null && postIdMatch !== void 0 ? postIdMatch : "000000000000000000";
      return React3.createElement(
        "div",
        Object.assign({}, divProps, { className: (0, classnames_1.default)("rsme-embed rsme-pinterest-embed", divProps.className), style: Object.assign({ overflow: "hidden", width: width !== null && width !== void 0 ? width : void 0, height: height !== null && height !== void 0 ? height : void 0, borderRadius }, divProps.style) }),
        React3.createElement(EmbedStyle_1.EmbedStyle, null),
        React3.createElement("iframe", { className: (0, classnames_1.default)("pinterest-post", !ready && "rsme-d-none"), src: `https://assets.pinterest.com/ext/embed.html?id=${postId}`, width: "100%", height: !ready ? 0 : height, frameBorder: "0", scrolling: "no", onLoad: () => setReady(true) }),
        !ready && !placeholderDisabled && placeholder
      );
    };
    exports.PinterestEmbed = PinterestEmbed;
  }
});

// node_modules/react-social-media-embed/dist/components/embeds/TikTokEmbed.js
var require_TikTokEmbed = __commonJS({
  "node_modules/react-social-media-embed/dist/components/embeds/TikTokEmbed.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TikTokEmbed = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var react_1 = __importDefault(require_react());
    var react_sub_unsub_1 = require_dist();
    var useFrame_1 = require_useFrame();
    var PlaceholderEmbed_1 = require_PlaceholderEmbed();
    var uuid_1 = require_uuid();
    var EmbedStyle_1 = require_EmbedStyle();
    var embedJsScriptSrc = "https://www.tiktok.com/embed.js";
    var minPlaceholderWidth = 325;
    var maxPlaceholderWidth = 480;
    var defaultPlaceholderHeight = 550;
    var borderRadius = 8;
    var PROCESS_EMBED_STAGE = "process-embed";
    var CONFIRM_EMBED_SUCCESS_STAGE = "confirm-embed-success";
    var RETRYING_STAGE = "retrying";
    var EMBED_SUCCESS_STAGE = "embed-success";
    var TikTokEmbed = (_a) => {
      var _b, _c;
      var { url, width, height, linkText = "View post on TikTok", placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled = false, placeholderProps, embedPlaceholder, placeholderDisabled = false, scriptLoadDisabled = false, retryDelay = 5e3, retryDisabled = false, frame = void 0, debug = false } = _a, divProps = __rest(_a, ["url", "width", "height", "linkText", "placeholderImageUrl", "placeholderSpinner", "placeholderSpinnerDisabled", "placeholderProps", "embedPlaceholder", "placeholderDisabled", "scriptLoadDisabled", "retryDelay", "retryDisabled", "frame", "debug"]);
      const [stage, setStage] = react_1.default.useState(PROCESS_EMBED_STAGE);
      const uuidRef = react_1.default.useRef((0, uuid_1.generateUUID)());
      const [processTime, setProcessTime] = react_1.default.useState(Date.now());
      const embedContainerKey = react_1.default.useMemo(() => `${uuidRef.current}-${processTime}`, [processTime]);
      const frm = (0, useFrame_1.useFrame)(frame);
      react_1.default.useEffect(() => {
        debug && console.log(`[${(/* @__PURE__ */ new Date()).toISOString()}]: ${stage}`);
      }, [debug, stage]);
      react_1.default.useEffect(() => {
        if (stage === PROCESS_EMBED_STAGE) {
          if (frm.document && !scriptLoadDisabled) {
            const scriptId = `tiktok-embed-script`;
            const prevScript = frm.document.getElementById(scriptId);
            if (prevScript) {
              prevScript.remove();
            }
            const scriptElement = frm.document.createElement("script");
            scriptElement.setAttribute("src", `${embedJsScriptSrc}?t=${Date.now()}`);
            scriptElement.setAttribute("id", scriptId);
            frm.document.head.appendChild(scriptElement);
            setStage(CONFIRM_EMBED_SUCCESS_STAGE);
          }
        }
      }, [scriptLoadDisabled, stage, frm.document]);
      react_1.default.useEffect(() => {
        const subs = new react_sub_unsub_1.Subs();
        if (stage === CONFIRM_EMBED_SUCCESS_STAGE) {
          subs.setInterval(() => {
            if (frm.document) {
              const preEmbedElement = frm.document.getElementById(uuidRef.current);
              if (!preEmbedElement) {
                setStage(EMBED_SUCCESS_STAGE);
              }
            }
          }, 1);
          if (!retryDisabled) {
            subs.setTimeout(() => {
              setStage(RETRYING_STAGE);
            }, retryDelay);
          }
        }
        return subs.createCleanup();
      }, [retryDelay, retryDisabled, stage, frm.document]);
      react_1.default.useEffect(() => {
        if (stage === RETRYING_STAGE) {
          setProcessTime(Date.now());
          setStage(PROCESS_EMBED_STAGE);
        }
      }, [stage]);
      const embedId = url.replace(/[?].*$/, "").replace(/^.+\//, "");
      const placeholderStyle = {
        minWidth: minPlaceholderWidth,
        maxWidth: maxPlaceholderWidth,
        width: typeof width !== "undefined" ? width : "100%",
        height: typeof height !== "undefined" ? height : typeof ((_b = divProps.style) === null || _b === void 0 ? void 0 : _b.height) !== "undefined" || typeof ((_c = divProps.style) === null || _c === void 0 ? void 0 : _c.maxHeight) !== "undefined" ? "100%" : defaultPlaceholderHeight,
        border: "solid 1px rgba(22,24,35,0.12)",
        borderRadius
      };
      const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : react_1.default.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url, imageUrl: placeholderImageUrl, linkText, spinner: placeholderSpinner, spinnerDisabled: placeholderSpinnerDisabled }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) }));
      return react_1.default.createElement(
        "div",
        Object.assign({}, divProps, { className: (0, classnames_1.default)("rsme-embed rsme-tiktok-embed", divProps.className), style: Object.assign({ overflow: "hidden", width: width !== null && width !== void 0 ? width : void 0, height: height !== null && height !== void 0 ? height : void 0, borderRadius }, divProps.style) }),
        react_1.default.createElement(EmbedStyle_1.EmbedStyle, null),
        react_1.default.createElement(
          "div",
          { className: "tiktok-embed-container" },
          react_1.default.createElement("blockquote", { key: embedContainerKey, className: "tiktok-embed", cite: url, "data-video-id": embedId }, !placeholderDisabled ? react_1.default.createElement("div", { id: uuidRef.current, style: { display: "flex", justifyContent: "center" } }, placeholder) : react_1.default.createElement("div", { id: uuidRef.current, style: { display: "none" } }, " "))
        )
      );
    };
    exports.TikTokEmbed = TikTokEmbed;
  }
});

// node_modules/scriptjs/dist/script.js
var require_script = __commonJS({
  "node_modules/scriptjs/dist/script.js"(exports, module) {
    (function(name, definition) {
      if (typeof module != "undefined" && module.exports) module.exports = definition();
      else if (typeof define == "function" && define.amd) define(definition);
      else this[name] = definition();
    })("$script", function() {
      var doc = document, head = doc.getElementsByTagName("head")[0], s = "string", f = false, push = "push", readyState = "readyState", onreadystatechange = "onreadystatechange", list = {}, ids = {}, delay = {}, scripts = {}, scriptpath, urlArgs;
      function every(ar, fn) {
        for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f;
        return 1;
      }
      function each(ar, fn) {
        every(ar, function(el) {
          fn(el);
          return 1;
        });
      }
      function $script(paths, idOrDone, optDone) {
        paths = paths[push] ? paths : [paths];
        var idOrDoneIsDone = idOrDone && idOrDone.call, done = idOrDoneIsDone ? idOrDone : optDone, id = idOrDoneIsDone ? paths.join("") : idOrDone, queue = paths.length;
        function loopFn(item) {
          return item.call ? item() : list[item];
        }
        function callback() {
          if (!--queue) {
            list[id] = 1;
            done && done();
            for (var dset in delay) {
              every(dset.split("|"), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = []);
            }
          }
        }
        setTimeout(function() {
          each(paths, function loading(path, force) {
            if (path === null) return callback();
            if (!force && !/^https?:\/\//.test(path) && scriptpath) {
              path = path.indexOf(".js") === -1 ? scriptpath + path + ".js" : scriptpath + path;
            }
            if (scripts[path]) {
              if (id) ids[id] = 1;
              return scripts[path] == 2 ? callback() : setTimeout(function() {
                loading(path, true);
              }, 0);
            }
            scripts[path] = 1;
            if (id) ids[id] = 1;
            create(path, callback);
          });
        }, 0);
        return $script;
      }
      function create(path, fn) {
        var el = doc.createElement("script"), loaded;
        el.onload = el.onerror = el[onreadystatechange] = function() {
          if (el[readyState] && !/^c|loade/.test(el[readyState]) || loaded) return;
          el.onload = el[onreadystatechange] = null;
          loaded = 1;
          scripts[path] = 2;
          fn();
        };
        el.async = 1;
        el.src = urlArgs ? path + (path.indexOf("?") === -1 ? "?" : "&") + urlArgs : path;
        head.insertBefore(el, head.lastChild);
      }
      $script.get = create;
      $script.order = function(scripts2, id, done) {
        (function callback(s2) {
          s2 = scripts2.shift();
          !scripts2.length ? $script(s2, id, done) : $script(s2, callback);
        })();
      };
      $script.path = function(p) {
        scriptpath = p;
      };
      $script.urlArgs = function(str) {
        urlArgs = str;
      };
      $script.ready = function(deps, ready, req) {
        deps = deps[push] ? deps : [deps];
        var missing = [];
        !each(deps, function(dep) {
          list[dep] || missing[push](dep);
        }) && every(deps, function(dep) {
          return list[dep];
        }) ? ready() : !function(key) {
          delay[key] = delay[key] || [];
          delay[key][push](ready);
          req && req(missing);
        }(deps.join("|"));
        return $script;
      };
      $script.done = function(idOrDone) {
        $script([null], idOrDone);
      };
      return $script;
    });
  }
});

// node_modules/react-twitter-embed/dist/index.modern.js
var index_modern_exports = {};
__export(index_modern_exports, {
  TwitterDMButton: () => TwitterDMButton,
  TwitterFollowButton: () => TwitterFollowButton,
  TwitterHashtagButton: () => TwitterHashtagButton,
  TwitterMentionButton: () => TwitterMentionButton,
  TwitterMomentShare: () => TwitterMomentShare,
  TwitterOnAirButton: () => TwitterOnAirButton,
  TwitterShareButton: () => TwitterShareButton,
  TwitterTimelineEmbed: () => TwitterTimelineEmbed,
  TwitterTweetEmbed: () => TwitterTweetEmbed,
  TwitterVideoEmbed: () => TwitterVideoEmbed
});
var import_react, twitterWidgetJs, methodName, TwitterTimelineEmbed, methodName$1, TwitterShareButton, methodName$2, TwitterFollowButton, methodName$3, TwitterHashtagButton, methodName$4, TwitterMentionButton, methodName$5, TwitterTweetEmbed, methodName$6, TwitterMomentShare, methodName$7, TwitterDMButton, methodName$8, TwitterVideoEmbed, methodName$9, TwitterOnAirButton;
var init_index_modern = __esm({
  "node_modules/react-twitter-embed/dist/index.modern.js"() {
    import_react = __toESM(require_react());
    twitterWidgetJs = "https://platform.twitter.com/widgets.js";
    methodName = "createTimeline";
    TwitterTimelineEmbed = function TwitterTimelineEmbed2(props) {
      var ref = import_react.default.useRef(null);
      var _React$useState = import_react.default.useState(true), loading = _React$useState[0], setLoading = _React$useState[1];
      var buildOptions = function buildOptions2() {
        var options = Object.assign({}, props.options);
        if (props !== null && props !== void 0 && props.autoHeight) {
          var _ref$current, _ref$current$parentNo;
          options.height = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : (_ref$current$parentNo = _ref$current.parentNode) === null || _ref$current$parentNo === void 0 ? void 0 : _ref$current$parentNo.offsetHeight;
        }
        options = Object.assign({}, options, {
          theme: props === null || props === void 0 ? void 0 : props.theme,
          linkColor: props === null || props === void 0 ? void 0 : props.linkColor,
          borderColor: props === null || props === void 0 ? void 0 : props.borderColor,
          lang: props === null || props === void 0 ? void 0 : props.lang,
          tweetLimit: props === null || props === void 0 ? void 0 : props.tweetLimit,
          ariaPolite: props === null || props === void 0 ? void 0 : props.ariaPolite
        });
        return options;
      };
      var buildChromeOptions = function buildChromeOptions2(options) {
        options.chrome = "";
        if (props.noHeader) {
          options.chrome = options.chrome + " noheader";
        }
        if (props.noFooter) {
          options.chrome = options.chrome + " nofooter";
        }
        if (props.noBorders) {
          options.chrome = options.chrome + " noborders";
        }
        if (props.noScrollbar) {
          options.chrome = options.chrome + " noscrollbar";
        }
        if (props.transparent) {
          options.chrome = options.chrome + " transparent";
        }
        return options;
      };
      import_react.default.useEffect(function() {
        var isComponentMounted = true;
        var script = require_script();
        script(twitterWidgetJs, "twitter-embed", function() {
          if (!window.twttr) {
            console.error("Failure to load window.twttr, aborting load");
            return;
          }
          if (isComponentMounted) {
            if (!window.twttr.widgets[methodName]) {
              console.error("Method " + methodName + " is not present anymore in twttr.widget api");
              return;
            }
            var options = buildOptions();
            options = buildChromeOptions(options);
            window.twttr.widgets[methodName]({
              sourceType: props.sourceType,
              screenName: props.screenName,
              userId: props.userId,
              ownerScreenName: props.ownerScreenName,
              slug: props.slug,
              id: props.id || props.widgetId,
              url: props.url
            }, ref === null || ref === void 0 ? void 0 : ref.current, options).then(function(element) {
              setLoading(false);
              if (props.onLoad) {
                props.onLoad(element);
              }
            });
          }
        });
        return function() {
          isComponentMounted = false;
        };
      }, []);
      return import_react.default.createElement(import_react.default.Fragment, null, loading && import_react.default.createElement(import_react.default.Fragment, null, props.placeholder), import_react.default.createElement("div", {
        ref
      }));
    };
    methodName$1 = "createShareButton";
    TwitterShareButton = function TwitterShareButton2(props) {
      var ref = import_react.default.useRef(null);
      var _React$useState = import_react.default.useState(true), loading = _React$useState[0], setLoading = _React$useState[1];
      import_react.default.useEffect(function() {
        var isComponentMounted = true;
        var script = require_script();
        script(twitterWidgetJs, "twitter-embed", function() {
          if (!window.twttr) {
            console.error("Failure to load window.twttr, aborting load");
            return;
          }
          if (isComponentMounted) {
            if (!window.twttr.widgets[methodName$1]) {
              console.error("Method " + methodName$1 + " is not present anymore in twttr.widget api");
              return;
            }
            window.twttr.widgets[methodName$1](props.url, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function(element) {
              setLoading(false);
              if (props.onLoad) {
                props.onLoad(element);
              }
            });
          }
        });
        return function() {
          isComponentMounted = false;
        };
      }, []);
      return import_react.default.createElement(import_react.default.Fragment, null, loading && import_react.default.createElement(import_react.default.Fragment, null, props.placeholder), import_react.default.createElement("div", {
        ref
      }));
    };
    methodName$2 = "createFollowButton";
    TwitterFollowButton = function TwitterFollowButton2(props) {
      var ref = import_react.default.useRef(null);
      var _React$useState = import_react.default.useState(true), loading = _React$useState[0], setLoading = _React$useState[1];
      import_react.default.useEffect(function() {
        var isComponentMounted = true;
        var script = require_script();
        script(twitterWidgetJs, "twitter-embed", function() {
          if (!window.twttr) {
            console.error("Failure to load window.twttr, aborting load");
            return;
          }
          if (isComponentMounted) {
            if (!window.twttr.widgets[methodName$2]) {
              console.error("Method " + methodName$2 + " is not present anymore in twttr.widget api");
              return;
            }
            window.twttr.widgets[methodName$2](props.screenName, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function(element) {
              setLoading(false);
              if (props.onLoad) {
                props.onLoad(element);
              }
            });
          }
        });
        return function() {
          isComponentMounted = false;
        };
      }, []);
      return import_react.default.createElement(import_react.default.Fragment, null, loading && import_react.default.createElement(import_react.default.Fragment, null, props.placeholder), import_react.default.createElement("div", {
        ref
      }));
    };
    methodName$3 = "createHashtagButton";
    TwitterHashtagButton = function TwitterHashtagButton2(props) {
      var ref = import_react.default.useRef(null);
      var _React$useState = import_react.default.useState(true), loading = _React$useState[0], setLoading = _React$useState[1];
      import_react.default.useEffect(function() {
        var isComponentMounted = true;
        var script = require_script();
        script(twitterWidgetJs, "twitter-embed", function() {
          if (!window.twttr) {
            console.error("Failure to load window.twttr, aborting load");
            return;
          }
          if (isComponentMounted) {
            if (!window.twttr.widgets[methodName$3]) {
              console.error("Method " + methodName$3 + " is not present anymore in twttr.widget api");
              return;
            }
            window.twttr.widgets[methodName$3](props.tag, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function(element) {
              setLoading(false);
              if (props.onLoad) {
                props.onLoad(element);
              }
            });
          }
        });
        return function() {
          isComponentMounted = false;
        };
      }, []);
      return import_react.default.createElement(import_react.default.Fragment, null, loading && import_react.default.createElement(import_react.default.Fragment, null, props.placeholder), import_react.default.createElement("div", {
        ref
      }));
    };
    methodName$4 = "createMentionButton";
    TwitterMentionButton = function TwitterMentionButton2(props) {
      var ref = import_react.default.useRef(null);
      var _React$useState = import_react.default.useState(true), loading = _React$useState[0], setLoading = _React$useState[1];
      import_react.default.useEffect(function() {
        var isComponentMounted = true;
        var script = require_script();
        script(twitterWidgetJs, "twitter-embed", function() {
          if (!window.twttr) {
            console.error("Failure to load window.twttr, aborting load");
            return;
          }
          if (isComponentMounted) {
            if (!window.twttr.widgets[methodName$4]) {
              console.error("Method " + methodName$4 + " is not present anymore in twttr.widget api");
              return;
            }
            window.twttr.widgets[methodName$4](props.screenName, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function(element) {
              setLoading(false);
              if (props.onLoad) {
                props.onLoad(element);
              }
            });
          }
        });
        return function() {
          isComponentMounted = false;
        };
      }, []);
      return import_react.default.createElement(import_react.default.Fragment, null, loading && import_react.default.createElement(import_react.default.Fragment, null, props.placeholder), import_react.default.createElement("div", {
        ref
      }));
    };
    methodName$5 = "createTweet";
    TwitterTweetEmbed = function TwitterTweetEmbed2(props) {
      var ref = import_react.default.useRef(null);
      var _React$useState = import_react.default.useState(true), loading = _React$useState[0], setLoading = _React$useState[1];
      import_react.default.useEffect(function() {
        var isComponentMounted = true;
        var script = require_script();
        script(twitterWidgetJs, "twitter-embed", function() {
          if (!window.twttr) {
            console.error("Failure to load window.twttr, aborting load");
            return;
          }
          if (isComponentMounted) {
            if (!window.twttr.widgets[methodName$5]) {
              console.error("Method " + methodName$5 + " is not present anymore in twttr.widget api");
              return;
            }
            window.twttr.widgets[methodName$5](props.tweetId, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function(element) {
              setLoading(false);
              if (props.onLoad) {
                props.onLoad(element);
              }
            });
          }
        });
        return function() {
          isComponentMounted = false;
        };
      }, []);
      return import_react.default.createElement(import_react.default.Fragment, null, loading && import_react.default.createElement(import_react.default.Fragment, null, props.placeholder), import_react.default.createElement("div", {
        ref
      }));
    };
    methodName$6 = "createMoment";
    TwitterMomentShare = function TwitterMomentShare2(props) {
      var ref = import_react.default.useRef(null);
      var _React$useState = import_react.default.useState(true), loading = _React$useState[0], setLoading = _React$useState[1];
      import_react.default.useEffect(function() {
        var isComponentMounted = true;
        var script = require_script();
        script(twitterWidgetJs, "twitter-embed", function() {
          if (!window.twttr) {
            console.error("Failure to load window.twttr, aborting load");
            return;
          }
          if (isComponentMounted) {
            if (!window.twttr.widgets[methodName$6]) {
              console.error("Method " + methodName$6 + " is not present anymore in twttr.widget api");
              return;
            }
            window.twttr.widgets[methodName$6](props.momentId, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function(element) {
              setLoading(false);
              if (props.onLoad) {
                props.onLoad(element);
              }
            });
          }
        });
        return function() {
          isComponentMounted = false;
        };
      }, []);
      return import_react.default.createElement(import_react.default.Fragment, null, loading && import_react.default.createElement(import_react.default.Fragment, null, props.placeholder), import_react.default.createElement("div", {
        ref
      }));
    };
    methodName$7 = "createDMButton";
    TwitterDMButton = function TwitterDMButton2(props) {
      var ref = import_react.default.useRef(null);
      var _React$useState = import_react.default.useState(true), loading = _React$useState[0], setLoading = _React$useState[1];
      import_react.default.useEffect(function() {
        var isComponentMounted = true;
        var script = require_script();
        script(twitterWidgetJs, "twitter-embed", function() {
          if (!window.twttr) {
            console.error("Failure to load window.twttr, aborting load");
            return;
          }
          if (isComponentMounted) {
            if (!window.twttr.widgets[methodName$7]) {
              console.error("Method " + methodName$7 + " is not present anymore in twttr.widget api");
              return;
            }
            window.twttr.widgets[methodName$7](props.id, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function(element) {
              if (isComponentMounted) {
                setLoading(false);
                if (props.onLoad) {
                  props.onLoad(element);
                }
              }
            });
          }
        });
        return function() {
          isComponentMounted = false;
        };
      }, []);
      return import_react.default.createElement(import_react.default.Fragment, null, loading && import_react.default.createElement(import_react.default.Fragment, null, props.placeholder), import_react.default.createElement("div", {
        ref
      }));
    };
    methodName$8 = "createVideo";
    TwitterVideoEmbed = function TwitterVideoEmbed2(props) {
      var ref = import_react.default.useRef(null);
      var _React$useState = import_react.default.useState(true), loading = _React$useState[0], setLoading = _React$useState[1];
      import_react.default.useEffect(function() {
        var isComponentMounted = true;
        var script = require_script();
        script(twitterWidgetJs, "twitter-embed", function() {
          if (!window.twttr) {
            console.error("Failure to load window.twttr, aborting load");
            return;
          }
          if (isComponentMounted) {
            if (!window.twttr.widgets[methodName$8]) {
              console.error("Method " + methodName$8 + " is not present anymore in twttr.widget api");
              return;
            }
            window.twttr.widgets[methodName$8](props.id, ref === null || ref === void 0 ? void 0 : ref.current).then(function(element) {
              setLoading(false);
              if (props.onLoad) {
                props.onLoad(element);
              }
            });
          }
        });
        return function() {
          isComponentMounted = false;
        };
      }, []);
      return import_react.default.createElement(import_react.default.Fragment, null, loading && import_react.default.createElement(import_react.default.Fragment, null, props.placeholder), import_react.default.createElement("div", {
        ref
      }));
    };
    methodName$9 = "createPeriscopeOnAirButton";
    TwitterOnAirButton = function TwitterOnAirButton2(props) {
      var ref = import_react.default.useRef(null);
      var _React$useState = import_react.default.useState(true), loading = _React$useState[0], setLoading = _React$useState[1];
      import_react.default.useEffect(function() {
        var isComponentMounted = true;
        var script = require_script();
        script(twitterWidgetJs, "twitter-embed", function() {
          if (!window.twttr) {
            console.error("Failure to load window.twttr, aborting load");
            return;
          }
          if (isComponentMounted) {
            if (!window.twttr.widgets[methodName$9]) {
              console.error("Method " + methodName$9 + " is not present anymore in twttr.widget api");
              return;
            }
            window.twttr.widgets[methodName$9](props.username, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function(element) {
              setLoading(false);
              if (props.onLoad) {
                props.onLoad(element);
              }
            });
          }
        });
        return function() {
          isComponentMounted = false;
        };
      }, []);
      return import_react.default.createElement(import_react.default.Fragment, null, loading && import_react.default.createElement(import_react.default.Fragment, null, props.placeholder), import_react.default.createElement("div", {
        ref
      }));
    };
  }
});

// node_modules/react-social-media-embed/dist/components/embeds/XEmbed.js
var require_XEmbed = __commonJS({
  "node_modules/react-social-media-embed/dist/components/embeds/XEmbed.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XEmbed = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var React3 = __importStar(require_react());
    var react_twitter_embed_1 = (init_index_modern(), __toCommonJS(index_modern_exports));
    var PlaceholderEmbed_1 = require_PlaceholderEmbed();
    var EmbedStyle_1 = require_EmbedStyle();
    var minPlaceholderWidth = 250;
    var maxPlaceholderWidth = 550;
    var defaultPlaceholderHeight = 350;
    var borderRadius = 12;
    var XEmbed = (_a) => {
      var _b, _c;
      var { url, width, height, linkText = "View post on X", placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled = false, placeholderProps, embedPlaceholder, placeholderDisabled, twitterTweetEmbedProps } = _a, divProps = __rest(_a, ["url", "width", "height", "linkText", "placeholderImageUrl", "placeholderSpinner", "placeholderSpinnerDisabled", "placeholderProps", "embedPlaceholder", "placeholderDisabled", "twitterTweetEmbedProps"]);
      const postId = url.substring(url.lastIndexOf("/") + 1).replace(/[?].*$/, "");
      const isPercentageWidth = !!(width === null || width === void 0 ? void 0 : width.toString().includes("%"));
      const isPercentageHeight = !!(height === null || height === void 0 ? void 0 : height.toString().includes("%"));
      const placeholderStyle = {
        minWidth: minPlaceholderWidth,
        maxWidth: maxPlaceholderWidth,
        width: typeof width !== "undefined" ? isPercentageWidth ? "100%" : width : "100%",
        height: isPercentageHeight ? "100%" : typeof height !== "undefined" ? height : typeof ((_b = divProps.style) === null || _b === void 0 ? void 0 : _b.height) !== "undefined" || typeof ((_c = divProps.style) === null || _c === void 0 ? void 0 : _c.maxHeight) !== "undefined" ? "100%" : defaultPlaceholderHeight,
        border: "solid 1px #c9d4d9",
        borderRadius
      };
      const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : React3.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url, imageUrl: placeholderImageUrl, linkText, spinner: placeholderSpinner, spinnerDisabled: placeholderSpinnerDisabled }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) }));
      return React3.createElement(
        "div",
        Object.assign({}, divProps, { className: (0, classnames_1.default)("rsme-embed rsme-twitter-embed", divProps.className), style: Object.assign({ overflow: "hidden", width: width !== null && width !== void 0 ? width : void 0, height: height !== null && height !== void 0 ? height : void 0, borderRadius }, divProps.style) }),
        React3.createElement(EmbedStyle_1.EmbedStyle, null),
        React3.createElement(react_twitter_embed_1.TwitterTweetEmbed, Object.assign({ tweetId: postId, placeholder: placeholderDisabled ? void 0 : placeholder }, twitterTweetEmbedProps))
      );
    };
    exports.XEmbed = XEmbed;
  }
});

// node_modules/react-social-media-embed/dist/components/embeds/TwitterEmbed.js
var require_TwitterEmbed = __commonJS({
  "node_modules/react-social-media-embed/dist/components/embeds/TwitterEmbed.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TwitterEmbed = void 0;
    var XEmbed_1 = require_XEmbed();
    exports.TwitterEmbed = XEmbed_1.XEmbed;
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/sister/src/sister.js
var require_sister = __commonJS({
  "node_modules/sister/src/sister.js"(exports, module) {
    "use strict";
    var Sister;
    Sister = function() {
      var sister = {}, events = {};
      sister.on = function(name, handler) {
        var listener = { name, handler };
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
      };
      sister.off = function(listener) {
        var index = events[listener.name].indexOf(listener);
        if (index !== -1) {
          events[listener.name].splice(index, 1);
        }
      };
      sister.trigger = function(name, data) {
        var listeners = events[name], i;
        if (listeners) {
          i = listeners.length;
          while (i--) {
            listeners[i].handler(data);
          }
        }
      };
      return sister;
    };
    module.exports = Sister;
  }
});

// node_modules/load-script/index.js
var require_load_script = __commonJS({
  "node_modules/load-script/index.js"(exports, module) {
    module.exports = function load(src, opts, cb) {
      var head = document.head || document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      if (typeof opts === "function") {
        cb = opts;
        opts = {};
      }
      opts = opts || {};
      cb = cb || function() {
      };
      script.type = opts.type || "text/javascript";
      script.charset = opts.charset || "utf8";
      script.async = "async" in opts ? !!opts.async : true;
      script.src = src;
      if (opts.attrs) {
        setAttributes(script, opts.attrs);
      }
      if (opts.text) {
        script.text = "" + opts.text;
      }
      var onend = "onload" in script ? stdOnEnd : ieOnEnd;
      onend(script, cb);
      if (!script.onload) {
        stdOnEnd(script, cb);
      }
      head.appendChild(script);
    };
    function setAttributes(script, attrs) {
      for (var attr in attrs) {
        script.setAttribute(attr, attrs[attr]);
      }
    }
    function stdOnEnd(script, cb) {
      script.onload = function() {
        this.onerror = this.onload = null;
        cb(null, script);
      };
      script.onerror = function() {
        this.onerror = this.onload = null;
        cb(new Error("Failed to load " + this.src), script);
      };
    }
    function ieOnEnd(script, cb) {
      script.onreadystatechange = function() {
        if (this.readyState != "complete" && this.readyState != "loaded") return;
        this.onreadystatechange = null;
        cb(null, script);
      };
    }
  }
});

// node_modules/youtube-player/dist/loadYouTubeIframeApi.js
var require_loadYouTubeIframeApi = __commonJS({
  "node_modules/youtube-player/dist/loadYouTubeIframeApi.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _loadScript = require_load_script();
    var _loadScript2 = _interopRequireDefault(_loadScript);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function(emitter) {
      var iframeAPIReady = new Promise(function(resolve) {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
          resolve(window.YT);
          return;
        } else {
          var protocol = window.location.protocol === "http:" ? "http:" : "https:";
          (0, _loadScript2.default)(protocol + "//www.youtube.com/iframe_api", function(error) {
            if (error) {
              emitter.trigger("error", error);
            }
          });
        }
        var previous = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
          if (previous) {
            previous();
          }
          resolve(window.YT);
        };
      });
      return iframeAPIReady;
    };
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/youtube-player/node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/youtube-player/node_modules/debug/src/debug.js
var require_debug = __commonJS({
  "node_modules/youtube-player/node_modules/debug/src/debug.js"(exports, module) {
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled) return;
        var self = debug;
        var curr = +/* @__PURE__ */ new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/youtube-player/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/youtube-player/node_modules/debug/src/browser.js"(exports, module) {
    exports = module.exports = require_debug();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/youtube-player/dist/functionNames.js
var require_functionNames = __commonJS({
  "node_modules/youtube-player/dist/functionNames.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"];
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/eventNames.js
var require_eventNames = __commonJS({
  "node_modules/youtube-player/dist/eventNames.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"];
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/constants/PlayerStates.js
var require_PlayerStates = __commonJS({
  "node_modules/youtube-player/dist/constants/PlayerStates.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = {
      BUFFERING: 3,
      ENDED: 0,
      PAUSED: 2,
      PLAYING: 1,
      UNSTARTED: -1,
      VIDEO_CUED: 5
    };
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/FunctionStateMap.js
var require_FunctionStateMap = __commonJS({
  "node_modules/youtube-player/dist/FunctionStateMap.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _PlayerStates = require_PlayerStates();
    var _PlayerStates2 = _interopRequireDefault(_PlayerStates);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = {
      pauseVideo: {
        acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
        stateChangeRequired: false
      },
      playVideo: {
        acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
        stateChangeRequired: false
      },
      seekTo: {
        acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
        stateChangeRequired: true,
        // TRICKY: `seekTo` may not cause a state change if no buffering is
        // required.
        timeout: 3e3
      }
    };
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/YouTubePlayer.js
var require_YouTubePlayer = __commonJS({
  "node_modules/youtube-player/dist/YouTubePlayer.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _debug = require_browser();
    var _debug2 = _interopRequireDefault(_debug);
    var _functionNames = require_functionNames();
    var _functionNames2 = _interopRequireDefault(_functionNames);
    var _eventNames = require_eventNames();
    var _eventNames2 = _interopRequireDefault(_eventNames);
    var _FunctionStateMap = require_FunctionStateMap();
    var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var debug = (0, _debug2.default)("youtube-player");
    var YouTubePlayer = {};
    YouTubePlayer.proxyEvents = function(emitter) {
      var events = {};
      var _loop = function _loop2(eventName2) {
        var onEventName = "on" + eventName2.slice(0, 1).toUpperCase() + eventName2.slice(1);
        events[onEventName] = function(event) {
          debug('event "%s"', onEventName, event);
          emitter.trigger(eventName2, event);
        };
      };
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var eventName = _step.value;
          _loop(eventName);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      return events;
    };
    YouTubePlayer.promisifyPlayer = function(playerAPIReady) {
      var strictState = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var functions = {};
      var _loop2 = function _loop22(functionName2) {
        if (strictState && _FunctionStateMap2.default[functionName2]) {
          functions[functionName2] = function() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return playerAPIReady.then(function(player) {
              var stateInfo = _FunctionStateMap2.default[functionName2];
              var playerState = player.getPlayerState();
              var value = player[functionName2].apply(player, args);
              if (stateInfo.stateChangeRequired || // eslint-disable-next-line no-extra-parens
              Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
                return new Promise(function(resolve) {
                  var onPlayerStateChange = function onPlayerStateChange2() {
                    var playerStateAfterChange = player.getPlayerState();
                    var timeout = void 0;
                    if (typeof stateInfo.timeout === "number") {
                      timeout = setTimeout(function() {
                        player.removeEventListener("onStateChange", onPlayerStateChange2);
                        resolve();
                      }, stateInfo.timeout);
                    }
                    if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                      player.removeEventListener("onStateChange", onPlayerStateChange2);
                      clearTimeout(timeout);
                      resolve();
                    }
                  };
                  player.addEventListener("onStateChange", onPlayerStateChange);
                }).then(function() {
                  return value;
                });
              }
              return value;
            });
          };
        } else {
          functions[functionName2] = function() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return playerAPIReady.then(function(player) {
              return player[functionName2].apply(player, args);
            });
          };
        }
      };
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = void 0;
      try {
        for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var functionName = _step2.value;
          _loop2(functionName);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
      return functions;
    };
    exports.default = YouTubePlayer;
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/youtube-player/dist/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _sister = require_sister();
    var _sister2 = _interopRequireDefault(_sister);
    var _loadYouTubeIframeApi = require_loadYouTubeIframeApi();
    var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);
    var _YouTubePlayer = require_YouTubePlayer();
    var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var youtubeIframeAPI = void 0;
    exports.default = function(maybeElementId) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var strictState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var emitter = (0, _sister2.default)();
      if (!youtubeIframeAPI) {
        youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
      }
      if (options.events) {
        throw new Error("Event handlers cannot be overwritten.");
      }
      if (typeof maybeElementId === "string" && !document.getElementById(maybeElementId)) {
        throw new Error('Element "' + maybeElementId + '" does not exist.');
      }
      options.events = _YouTubePlayer2.default.proxyEvents(emitter);
      var playerAPIReady = new Promise(function(resolve) {
        if ((typeof maybeElementId === "undefined" ? "undefined" : _typeof(maybeElementId)) === "object" && maybeElementId.playVideo instanceof Function) {
          var player = maybeElementId;
          resolve(player);
        } else {
          youtubeIframeAPI.then(function(YT) {
            var player2 = new YT.Player(maybeElementId, options);
            emitter.on("ready", function() {
              resolve(player2);
            });
            return null;
          });
        }
      });
      var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);
      playerApi.on = emitter.on;
      playerApi.off = emitter.off;
      return playerApi;
    };
    module.exports = exports["default"];
  }
});

// node_modules/react-youtube/dist/YouTube.esm.js
var YouTube_esm_exports = {};
__export(YouTube_esm_exports, {
  default: () => YouTube_default
});
function shouldUpdateVideo(prevProps, props) {
  var _a, _b;
  if (prevProps.videoId !== props.videoId) {
    return true;
  }
  const prevVars = ((_a = prevProps.opts) == null ? void 0 : _a.playerVars) || {};
  const vars = ((_b = props.opts) == null ? void 0 : _b.playerVars) || {};
  return prevVars.start !== vars.start || prevVars.end !== vars.end;
}
function filterResetOptions(opts = {}) {
  return __spreadProps(__spreadValues({}, opts), {
    height: 0,
    width: 0,
    playerVars: __spreadProps(__spreadValues({}, opts.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function shouldResetPlayer(prevProps, props) {
  return prevProps.videoId !== props.videoId || !(0, import_fast_deep_equal.default)(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
}
function shouldUpdatePlayer(prevProps, props) {
  var _a, _b, _c, _d;
  return prevProps.id !== props.id || prevProps.className !== props.className || ((_a = prevProps.opts) == null ? void 0 : _a.width) !== ((_b = props.opts) == null ? void 0 : _b.width) || ((_c = prevProps.opts) == null ? void 0 : _c.height) !== ((_d = props.opts) == null ? void 0 : _d.height) || prevProps.iframeClassName !== props.iframeClassName || prevProps.title !== props.title;
}
var import_prop_types, import_react2, import_fast_deep_equal, import_youtube_player, __defProp, __defProps, __getOwnPropDescs, __getOwnPropSymbols, __hasOwnProp, __propIsEnum, __defNormalProp, __spreadValues, __spreadProps, __async, defaultProps, propTypes, _YouTube, YouTube, YouTube_default;
var init_YouTube_esm = __esm({
  "node_modules/react-youtube/dist/YouTube.esm.js"() {
    import_prop_types = __toESM(require_prop_types());
    import_react2 = __toESM(require_react());
    import_fast_deep_equal = __toESM(require_fast_deep_equal());
    import_youtube_player = __toESM(require_dist2());
    __defProp = Object.defineProperty;
    __defProps = Object.defineProperties;
    __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    __getOwnPropSymbols = Object.getOwnPropertySymbols;
    __hasOwnProp = Object.prototype.hasOwnProperty;
    __propIsEnum = Object.prototype.propertyIsEnumerable;
    __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    __spreadValues = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
    __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    defaultProps = {
      videoId: "",
      id: "",
      className: "",
      iframeClassName: "",
      style: {},
      title: "",
      loading: void 0,
      opts: {},
      onReady: () => {
      },
      onError: () => {
      },
      onPlay: () => {
      },
      onPause: () => {
      },
      onEnd: () => {
      },
      onStateChange: () => {
      },
      onPlaybackRateChange: () => {
      },
      onPlaybackQualityChange: () => {
      }
    };
    propTypes = {
      videoId: import_prop_types.default.string,
      id: import_prop_types.default.string,
      className: import_prop_types.default.string,
      iframeClassName: import_prop_types.default.string,
      style: import_prop_types.default.object,
      title: import_prop_types.default.string,
      loading: import_prop_types.default.oneOf(["lazy", "eager"]),
      opts: import_prop_types.default.objectOf(import_prop_types.default.any),
      onReady: import_prop_types.default.func,
      onError: import_prop_types.default.func,
      onPlay: import_prop_types.default.func,
      onPause: import_prop_types.default.func,
      onEnd: import_prop_types.default.func,
      onStateChange: import_prop_types.default.func,
      onPlaybackRateChange: import_prop_types.default.func,
      onPlaybackQualityChange: import_prop_types.default.func
    };
    _YouTube = class extends import_react2.default.Component {
      constructor(props) {
        super(props);
        this.destroyPlayerPromise = void 0;
        this.onPlayerReady = (event) => {
          var _a, _b;
          return (_b = (_a = this.props).onReady) == null ? void 0 : _b.call(_a, event);
        };
        this.onPlayerError = (event) => {
          var _a, _b;
          return (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, event);
        };
        this.onPlayerStateChange = (event) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          (_b = (_a = this.props).onStateChange) == null ? void 0 : _b.call(_a, event);
          switch (event.data) {
            case _YouTube.PlayerState.ENDED:
              (_d = (_c = this.props).onEnd) == null ? void 0 : _d.call(_c, event);
              break;
            case _YouTube.PlayerState.PLAYING:
              (_f = (_e = this.props).onPlay) == null ? void 0 : _f.call(_e, event);
              break;
            case _YouTube.PlayerState.PAUSED:
              (_h = (_g = this.props).onPause) == null ? void 0 : _h.call(_g, event);
              break;
            default:
          }
        };
        this.onPlayerPlaybackRateChange = (event) => {
          var _a, _b;
          return (_b = (_a = this.props).onPlaybackRateChange) == null ? void 0 : _b.call(_a, event);
        };
        this.onPlayerPlaybackQualityChange = (event) => {
          var _a, _b;
          return (_b = (_a = this.props).onPlaybackQualityChange) == null ? void 0 : _b.call(_a, event);
        };
        this.destroyPlayer = () => {
          if (this.internalPlayer) {
            this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0);
            return this.destroyPlayerPromise;
          }
          return Promise.resolve();
        };
        this.createPlayer = () => {
          if (typeof document === "undefined")
            return;
          if (this.destroyPlayerPromise) {
            this.destroyPlayerPromise.then(this.createPlayer);
            return;
          }
          const playerOpts = __spreadProps(__spreadValues({}, this.props.opts), {
            videoId: this.props.videoId
          });
          this.internalPlayer = (0, import_youtube_player.default)(this.container, playerOpts);
          this.internalPlayer.on("ready", this.onPlayerReady);
          this.internalPlayer.on("error", this.onPlayerError);
          this.internalPlayer.on("stateChange", this.onPlayerStateChange);
          this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange);
          this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange);
          if (this.props.title || this.props.loading) {
            this.internalPlayer.getIframe().then((iframe) => {
              if (this.props.title)
                iframe.setAttribute("title", this.props.title);
              if (this.props.loading)
                iframe.setAttribute("loading", this.props.loading);
            });
          }
        };
        this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer);
        this.updatePlayer = () => {
          var _a;
          (_a = this.internalPlayer) == null ? void 0 : _a.getIframe().then((iframe) => {
            if (this.props.id)
              iframe.setAttribute("id", this.props.id);
            else
              iframe.removeAttribute("id");
            if (this.props.iframeClassName)
              iframe.setAttribute("class", this.props.iframeClassName);
            else
              iframe.removeAttribute("class");
            if (this.props.opts && this.props.opts.width)
              iframe.setAttribute("width", this.props.opts.width.toString());
            else
              iframe.removeAttribute("width");
            if (this.props.opts && this.props.opts.height)
              iframe.setAttribute("height", this.props.opts.height.toString());
            else
              iframe.removeAttribute("height");
            if (this.props.title)
              iframe.setAttribute("title", this.props.title);
            else
              iframe.setAttribute("title", "YouTube video player");
            if (this.props.loading)
              iframe.setAttribute("loading", this.props.loading);
            else
              iframe.removeAttribute("loading");
          });
        };
        this.getInternalPlayer = () => {
          return this.internalPlayer;
        };
        this.updateVideo = () => {
          var _a, _b, _c, _d;
          if (typeof this.props.videoId === "undefined" || this.props.videoId === null) {
            (_a = this.internalPlayer) == null ? void 0 : _a.stopVideo();
            return;
          }
          let autoplay = false;
          const opts = {
            videoId: this.props.videoId
          };
          if ((_b = this.props.opts) == null ? void 0 : _b.playerVars) {
            autoplay = this.props.opts.playerVars.autoplay === 1;
            if ("start" in this.props.opts.playerVars) {
              opts.startSeconds = this.props.opts.playerVars.start;
            }
            if ("end" in this.props.opts.playerVars) {
              opts.endSeconds = this.props.opts.playerVars.end;
            }
          }
          if (autoplay) {
            (_c = this.internalPlayer) == null ? void 0 : _c.loadVideoById(opts);
            return;
          }
          (_d = this.internalPlayer) == null ? void 0 : _d.cueVideoById(opts);
        };
        this.refContainer = (container) => {
          this.container = container;
        };
        this.container = null;
        this.internalPlayer = null;
      }
      componentDidMount() {
        this.createPlayer();
      }
      componentDidUpdate(prevProps) {
        return __async(this, null, function* () {
          if (shouldUpdatePlayer(prevProps, this.props)) {
            this.updatePlayer();
          }
          if (shouldResetPlayer(prevProps, this.props)) {
            yield this.resetPlayer();
          }
          if (shouldUpdateVideo(prevProps, this.props)) {
            this.updateVideo();
          }
        });
      }
      componentWillUnmount() {
        this.destroyPlayer();
      }
      render() {
        return import_react2.default.createElement("div", {
          className: this.props.className,
          style: this.props.style
        }, import_react2.default.createElement("div", {
          id: this.props.id,
          className: this.props.iframeClassName,
          ref: this.refContainer
        }));
      }
    };
    YouTube = _YouTube;
    YouTube.propTypes = propTypes;
    YouTube.defaultProps = defaultProps;
    YouTube.PlayerState = {
      UNSTARTED: -1,
      ENDED: 0,
      PLAYING: 1,
      PAUSED: 2,
      BUFFERING: 3,
      CUED: 5
    };
    YouTube_default = YouTube;
  }
});

// node_modules/react-social-media-embed/dist/components/embeds/YouTubeEmbed.js
var require_YouTubeEmbed = __commonJS({
  "node_modules/react-social-media-embed/dist/components/embeds/YouTubeEmbed.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.YouTubeEmbed = void 0;
    var classnames_1 = __importDefault(require_classnames());
    var React3 = __importStar(require_react());
    var react_youtube_1 = __importDefault((init_YouTube_esm(), __toCommonJS(YouTube_esm_exports)));
    var PlaceholderEmbed_1 = require_PlaceholderEmbed();
    var EmbedStyle_1 = require_EmbedStyle();
    var maxPlaceholderWidth = 640;
    var defaultPlaceholderHeight = 360;
    var borderRadius = 0;
    var YouTubeEmbed = (_a) => {
      var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
      var { url, width, height, linkText = "Watch on YouTube", placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled = false, placeholderProps, embedPlaceholder, placeholderDisabled, youTubeProps } = _a, divProps = __rest(_a, ["url", "width", "height", "linkText", "placeholderImageUrl", "placeholderSpinner", "placeholderSpinnerDisabled", "placeholderProps", "embedPlaceholder", "placeholderDisabled", "youTubeProps"]);
      const [ready, setReady] = React3.useState(false);
      const videoIdMatch = (_b = url.match(/[?&]v=(.+?)(?:$|[&?])/)) === null || _b === void 0 ? void 0 : _b[1];
      const shortsIdMatch = (_c = url.match(/https:\/\/(?:www\.)?youtube\.com\/shorts\/(.+?)(?:$|[&?])/)) === null || _c === void 0 ? void 0 : _c[1];
      const shortLinkMatch = (_d = url.match(/https:\/\/youtu\.be\/(.+?)(?:$|[&?])/)) === null || _d === void 0 ? void 0 : _d[1];
      const embedLinkMatch = (_e = url.match(/https:\/\/(?:www\.)youtube(-nocookie)?\.com\/embed\/(.+?)(?:$|[&?])/)) === null || _e === void 0 ? void 0 : _e[2];
      const videoId = (_h = (_g = (_f = videoIdMatch !== null && videoIdMatch !== void 0 ? videoIdMatch : shortsIdMatch) !== null && _f !== void 0 ? _f : shortLinkMatch) !== null && _g !== void 0 ? _g : embedLinkMatch) !== null && _h !== void 0 ? _h : "00000000";
      const start = +((_k = (_j = url.match(/(.+?)(?:$|[&?])start=(\d+)/)) === null || _j === void 0 ? void 0 : _j[2]) !== null && _k !== void 0 ? _k : 0);
      const isPercentageWidth = !!(width === null || width === void 0 ? void 0 : width.toString().includes("%"));
      const isPercentageHeight = !!(height === null || height === void 0 ? void 0 : height.toString().includes("%"));
      let opts = {};
      if (!!start) {
        opts.playerVars = { start };
      }
      if (typeof width !== "undefined") {
        opts.width = isPercentageWidth ? "100%" : `${width}`;
      }
      if (typeof height !== "undefined") {
        opts.height = isPercentageHeight ? "100%" : `${height}`;
      }
      opts = Object.assign(Object.assign({}, opts), youTubeProps === null || youTubeProps === void 0 ? void 0 : youTubeProps.opts);
      const placeholderStyle = {
        maxWidth: isPercentageWidth ? void 0 : maxPlaceholderWidth,
        width: typeof width !== "undefined" ? isPercentageWidth ? "100%" : width : "100%",
        height: isPercentageHeight ? "100%" : typeof height !== "undefined" ? height : typeof ((_l = divProps.style) === null || _l === void 0 ? void 0 : _l.height) !== "undefined" || typeof ((_m = divProps.style) === null || _m === void 0 ? void 0 : _m.maxHeight) !== "undefined" ? "100%" : defaultPlaceholderHeight,
        border: "1px solid #dee2e6",
        borderRadius
      };
      const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : React3.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url, imageUrl: placeholderImageUrl, linkText, spinner: placeholderSpinner, spinnerDisabled: placeholderSpinnerDisabled }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) }));
      return React3.createElement(
        "div",
        Object.assign({}, divProps, { className: (0, classnames_1.default)("rsme-embed rsme-youtube-embed", divProps.className), style: Object.assign({ overflow: "hidden", width: width !== null && width !== void 0 ? width : void 0, height: height !== null && height !== void 0 ? height : void 0, borderRadius }, divProps.style) }),
        React3.createElement(EmbedStyle_1.EmbedStyle, null),
        React3.createElement(
          "div",
          { className: (0, classnames_1.default)(!ready && "rsme-d-none") },
          React3.createElement(react_youtube_1.default, Object.assign({}, youTubeProps, { className: (_o = youTubeProps === null || youTubeProps === void 0 ? void 0 : youTubeProps.className) !== null && _o !== void 0 ? _o : "youtube-iframe", videoId: (_p = youTubeProps === null || youTubeProps === void 0 ? void 0 : youTubeProps.videoId) !== null && _p !== void 0 ? _p : videoId, opts, onReady: (e) => {
            setReady(true);
            if (youTubeProps && youTubeProps.onReady) {
              youTubeProps === null || youTubeProps === void 0 ? void 0 : youTubeProps.onReady(e);
            }
          } }))
        ),
        !ready && !placeholderDisabled && placeholder
      );
    };
    exports.YouTubeEmbed = YouTubeEmbed;
  }
});

// node_modules/react-social-media-embed/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/react-social-media-embed/dist/index.js"(exports) {
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_FacebookEmbed(), exports);
    __exportStar(require_InstagramEmbed(), exports);
    __exportStar(require_LinkedInEmbed(), exports);
    __exportStar(require_PinterestEmbed(), exports);
    __exportStar(require_TikTokEmbed(), exports);
    __exportStar(require_TwitterEmbed(), exports);
    __exportStar(require_XEmbed(), exports);
    __exportStar(require_YouTubeEmbed(), exports);
    __exportStar(require_PlaceholderEmbed(), exports);
    __exportStar(require_BorderSpinner(), exports);
  }
});
export default require_dist3();
/*! Bundled license information:

scriptjs/dist/script.js:
  (*!
    * $script.js JS loader & dependency manager
    * https://github.com/ded/script.js
    * (c) Dustin Diaz 2014 | License MIT
    *)

sister/src/sister.js:
  (**
  * @link https://github.com/gajus/sister for the canonical source repository
  * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
  *)
*/
//# sourceMappingURL=react-social-media-embed.js.map
