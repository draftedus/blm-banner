(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var CONFIGURATION;
    /**
     * If no configuration is provided, fallback to these defaults
     * @param config
     */
    function setConfigWithDefaults(config) {
        return __assign({ primaryColor: '#FFFFFF', backgroundColor: '#000000', fontFamily: 'Teko', preview: false, metricsEnabled: false, metricsUrl: 'https://blmtech-prod.drft.workers.dev' }, config);
    }
    /**
     * Method to configure the banner
     * @param config
     */
    function configure(config) {
        CONFIGURATION = setConfigWithDefaults(config);
    }
    /**
     * Grab the configuration if we need to
     */
    function getConfiguration() {
        return CONFIGURATION;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

      return arr2;
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var MicroModal = function () {

      var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

      var Modal = /*#__PURE__*/function () {
        function Modal(_ref) {
          var targetModal = _ref.targetModal,
              _ref$triggers = _ref.triggers,
              triggers = _ref$triggers === void 0 ? [] : _ref$triggers,
              _ref$onShow = _ref.onShow,
              onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
              _ref$onClose = _ref.onClose,
              onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
              _ref$openTrigger = _ref.openTrigger,
              openTrigger = _ref$openTrigger === void 0 ? 'data-micromodal-trigger' : _ref$openTrigger,
              _ref$closeTrigger = _ref.closeTrigger,
              closeTrigger = _ref$closeTrigger === void 0 ? 'data-micromodal-close' : _ref$closeTrigger,
              _ref$openClass = _ref.openClass,
              openClass = _ref$openClass === void 0 ? 'is-open' : _ref$openClass,
              _ref$disableScroll = _ref.disableScroll,
              disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll,
              _ref$disableFocus = _ref.disableFocus,
              disableFocus = _ref$disableFocus === void 0 ? false : _ref$disableFocus,
              _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
              awaitCloseAnimation = _ref$awaitCloseAnimat === void 0 ? false : _ref$awaitCloseAnimat,
              _ref$awaitOpenAnimati = _ref.awaitOpenAnimation,
              awaitOpenAnimation = _ref$awaitOpenAnimati === void 0 ? false : _ref$awaitOpenAnimati,
              _ref$debugMode = _ref.debugMode,
              debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode;

          _classCallCheck(this, Modal);

          // Save a reference of the modal
          this.modal = document.getElementById(targetModal); // Save a reference to the passed config

          this.config = {
            debugMode: debugMode,
            disableScroll: disableScroll,
            openTrigger: openTrigger,
            closeTrigger: closeTrigger,
            openClass: openClass,
            onShow: onShow,
            onClose: onClose,
            awaitCloseAnimation: awaitCloseAnimation,
            awaitOpenAnimation: awaitOpenAnimation,
            disableFocus: disableFocus
          }; // Register click events only if pre binding eventListeners

          if (triggers.length > 0) this.registerTriggers.apply(this, _toConsumableArray(triggers)); // pre bind functions for event listeners

          this.onClick = this.onClick.bind(this);
          this.onKeydown = this.onKeydown.bind(this);
        }
        /**
         * Loops through all openTriggers and binds click event
         * @param  {array} triggers [Array of node elements]
         * @return {void}
         */


        _createClass(Modal, [{
          key: "registerTriggers",
          value: function registerTriggers() {
            var _this = this;

            for (var _len = arguments.length, triggers = new Array(_len), _key = 0; _key < _len; _key++) {
              triggers[_key] = arguments[_key];
            }

            triggers.filter(Boolean).forEach(function (trigger) {
              trigger.addEventListener('click', function (event) {
                return _this.showModal(event);
              });
            });
          }
        }, {
          key: "showModal",
          value: function showModal() {
            var _this2 = this;

            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.activeElement = document.activeElement;
            this.modal.setAttribute('aria-hidden', 'false');
            this.modal.classList.add(this.config.openClass);
            this.scrollBehaviour('disable');
            this.addEventListeners();

            if (this.config.awaitOpenAnimation) {
              var handler = function handler() {
                _this2.modal.removeEventListener('animationend', handler, false);

                _this2.setFocusToFirstNode();
              };

              this.modal.addEventListener('animationend', handler, false);
            } else {
              this.setFocusToFirstNode();
            }

            this.config.onShow(this.modal, this.activeElement, event);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var modal = this.modal;
            this.modal.setAttribute('aria-hidden', 'true');
            this.removeEventListeners();
            this.scrollBehaviour('enable');

            if (this.activeElement && this.activeElement.focus) {
              this.activeElement.focus();
            }

            this.config.onClose(this.modal, this.activeElement, event);

            if (this.config.awaitCloseAnimation) {
              var openClass = this.config.openClass; // <- old school ftw

              this.modal.addEventListener('animationend', function handler() {
                modal.classList.remove(openClass);
                modal.removeEventListener('animationend', handler, false);
              }, false);
            } else {
              modal.classList.remove(this.config.openClass);
            }
          }
        }, {
          key: "closeModalById",
          value: function closeModalById(targetModal) {
            this.modal = document.getElementById(targetModal);
            if (this.modal) this.closeModal();
          }
        }, {
          key: "scrollBehaviour",
          value: function scrollBehaviour(toggle) {
            if (!this.config.disableScroll) return;
            var body = document.querySelector('body');

            switch (toggle) {
              case 'enable':
                Object.assign(body.style, {
                  overflow: ''
                });
                break;

              case 'disable':
                Object.assign(body.style, {
                  overflow: 'hidden'
                });
                break;
            }
          }
        }, {
          key: "addEventListeners",
          value: function addEventListeners() {
            this.modal.addEventListener('touchstart', this.onClick);
            this.modal.addEventListener('click', this.onClick);
            document.addEventListener('keydown', this.onKeydown);
          }
        }, {
          key: "removeEventListeners",
          value: function removeEventListeners() {
            this.modal.removeEventListener('touchstart', this.onClick);
            this.modal.removeEventListener('click', this.onClick);
            document.removeEventListener('keydown', this.onKeydown);
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            if (event.target.hasAttribute(this.config.closeTrigger)) {
              this.closeModal(event);
            }
          }
        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            if (event.keyCode === 27) this.closeModal(event); // esc

            if (event.keyCode === 9) this.retainFocus(event); // tab
          }
        }, {
          key: "getFocusableNodes",
          value: function getFocusableNodes() {
            var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
            return Array.apply(void 0, _toConsumableArray(nodes));
          }
          /**
           * Tries to set focus on a node which is not a close trigger
           * if no other nodes exist then focuses on first close trigger
           */

        }, {
          key: "setFocusToFirstNode",
          value: function setFocusToFirstNode() {
            var _this3 = this;

            if (this.config.disableFocus) return;
            var focusableNodes = this.getFocusableNodes(); // no focusable nodes

            if (focusableNodes.length === 0) return; // remove nodes on whose click, the modal closes
            // could not think of a better name :(

            var nodesWhichAreNotCloseTargets = focusableNodes.filter(function (node) {
              return !node.hasAttribute(_this3.config.closeTrigger);
            });
            if (nodesWhichAreNotCloseTargets.length > 0) nodesWhichAreNotCloseTargets[0].focus();
            if (nodesWhichAreNotCloseTargets.length === 0) focusableNodes[0].focus();
          }
        }, {
          key: "retainFocus",
          value: function retainFocus(event) {
            var focusableNodes = this.getFocusableNodes(); // no focusable nodes

            if (focusableNodes.length === 0) return;
            /**
             * Filters nodes which are hidden to prevent
             * focus leak outside modal
             */

            focusableNodes = focusableNodes.filter(function (node) {
              return node.offsetParent !== null;
            }); // if disableFocus is true

            if (!this.modal.contains(document.activeElement)) {
              focusableNodes[0].focus();
            } else {
              var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

              if (event.shiftKey && focusedItemIndex === 0) {
                focusableNodes[focusableNodes.length - 1].focus();
                event.preventDefault();
              }

              if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
                focusableNodes[0].focus();
                event.preventDefault();
              }
            }
          }
        }]);

        return Modal;
      }();
      /**
       * Modal prototype ends.
       * Here on code is responsible for detecting and
       * auto binding event handlers on modal triggers
       */
      // Keep a reference to the opened modal


      var activeModal = null;
      /**
       * Generates an associative array of modals and it's
       * respective triggers
       * @param  {array} triggers     An array of all triggers
       * @param  {string} triggerAttr The data-attribute which triggers the module
       * @return {array}
       */

      var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
        var triggerMap = [];
        triggers.forEach(function (trigger) {
          var targetModal = trigger.attributes[triggerAttr].value;
          if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
          triggerMap[targetModal].push(trigger);
        });
        return triggerMap;
      };
      /**
       * Validates whether a modal of the given id exists
       * in the DOM
       * @param  {number} id  The id of the modal
       * @return {boolean}
       */


      var validateModalPresence = function validateModalPresence(id) {
        if (!document.getElementById(id)) {
          console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(id, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
          console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<div class=\"modal\" id=\"".concat(id, "\"></div>"));
          return false;
        }
      };
      /**
       * Validates if there are modal triggers present
       * in the DOM
       * @param  {array} triggers An array of data-triggers
       * @return {boolean}
       */


      var validateTriggerPresence = function validateTriggerPresence(triggers) {
        if (triggers.length <= 0) {
          console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
          console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<a href=\"#\" data-micromodal-trigger=\"my-modal\"></a>");
          return false;
        }
      };
      /**
       * Checks if triggers and their corresponding modals
       * are present in the DOM
       * @param  {array} triggers   Array of DOM nodes which have data-triggers
       * @param  {array} triggerMap Associative array of modals and their triggers
       * @return {boolean}
       */


      var validateArgs = function validateArgs(triggers, triggerMap) {
        validateTriggerPresence(triggers);
        if (!triggerMap) return true;

        for (var id in triggerMap) {
          validateModalPresence(id);
        }

        return true;
      };
      /**
       * Binds click handlers to all modal triggers
       * @param  {object} config [description]
       * @return void
       */


      var init = function init(config) {
        // Create an config object with default openTrigger
        var options = Object.assign({}, {
          openTrigger: 'data-micromodal-trigger'
        }, config); // Collects all the nodes with the trigger

        var triggers = _toConsumableArray(document.querySelectorAll("[".concat(options.openTrigger, "]"))); // Makes a mappings of modals with their trigger nodes


        var triggerMap = generateTriggerMap(triggers, options.openTrigger); // Checks if modals and triggers exist in dom

        if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return; // For every target modal creates a new instance

        for (var key in triggerMap) {
          var value = triggerMap[key];
          options.targetModal = key;
          options.triggers = _toConsumableArray(value);
          activeModal = new Modal(options); // eslint-disable-line no-new
        }
      };
      /**
       * Shows a particular modal
       * @param  {string} targetModal [The id of the modal to display]
       * @param  {object} config [The configuration object to pass]
       * @return {void}
       */


      var show = function show(targetModal, config) {
        var options = config || {};
        options.targetModal = targetModal; // Checks if modals and triggers exist in dom

        if (options.debugMode === true && validateModalPresence(targetModal) === false) return; // clear events in case previous modal wasn't close

        if (activeModal) activeModal.removeEventListeners(); // stores reference to active modal

        activeModal = new Modal(options); // eslint-disable-line no-new

        activeModal.showModal();
      };
      /**
       * Closes the active modal
       * @param  {string} targetModal [The id of the modal to close]
       * @return {void}
       */


      var close = function close(targetModal) {
        targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
      };

      return {
        init: init,
        show: show,
        close: close
      };
    }();
    window.MicroModal = MicroModal;

    var MODAL_HTML = "<div id=\"blm-modal\" class=\"modal micromodal-slide\" aria-hidden=\"true\">\n    <div class=\"modal__overlay\" tabindex=\"-1\" data-micromodal-close>\n      <div class=\"modal__container\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-1-title\">\n        <div class=\"modal__header\">\n          <div class=\"modal__title__black\">\n            <span>B</span>\n            <span>L</span>\n            <span>A</span>\n            <span>C</span>\n            <span>K</span>\n          </div>\n          <div class=\"modal__title__lives\">\n            <span>L</span>\n            <span>I</span>\n            <span>V</span>\n            <span>E</span>\n            <span>S</span>\n          </div>\n          <div class=\"modal__title__matter\">\n            <span>M</span>\n            <span>A</span>\n            <span>T</span>\n            <span>T</span>\n            <span>E</span>\n            <span>R</span>\n          </div>\n        </div>\n        <div class=\"modal__content\" data-micromodal-close aria-label=\"Close this dialog window\">\n            Continue to {{name}}\n        </div>\n      </div>\n    </div>\n  </div>";
    /**
     * Replace our HTML with the name from the config
     * @param config
     */
    function replaceTextWithConfig(config) {
        return MODAL_HTML.replace('{{name}}', config.name);
    }
    /**
     * Generate HTML node from string
     * @param config
     */
    function createModalNode(config) {
        return document
            .createRange()
            .createContextualFragment(replaceTextWithConfig(config));
    }
    /**
     * Show our modal via MicroModal
     */
    function showModal() {
        MicroModal.show(MODAL_ID);
    }
    /**
     * HTML ID of the modal
     */
    var MODAL_ID = 'blm-modal';

    var CSS = "\n    #blm-modal {\n      display: none;\n    }\n    #blm-modal.is-open {\n      display: block;\n    }\n    #blm-modal {\n      position: absolute;\n      z-index: 2147483638;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      font-family: '{{fontFamily}}', sans-serif;\n      color: {{primaryColor}};\n      font-weight: bold;\n      overflow: hidden;\n    }\n    #blm-modal > .modal__overlay {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: {{backgroundColor}};\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__black {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      font-weight: bold;\n      font-size: 104px;\n      line-height: 1;\n    }\n     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__lives {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      font-weight: 600;\n      font-size: 140px;\n      line-height: 201px;\n    }\n     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__matter {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      font-weight: 600;\n      font-size: 90px;\n      line-height: 1;\n    }\n    #blm-modal > .modal__close {\n      background: transparent;\n      border: 0;\n    }\n    #blm-modal > .modal__header #blm-modal.modal__close:before { content: \"\\2715\"; }\n    #blm-modal > .modal__overlay .modal__container .modal__content {\n      margin-top: 3rem;\n      margin-bottom: 2rem;\n      min-width: 362px;\n      height: 70px;\n      border: 1px solid #FFFFFF;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #fff;\n      font-size: 24px;\n      padding-left: 5px;\n      padding-right: 5px;\n      cursor: pointer;\n    }\n    @keyframes mmfadeIn {\n    from { opacity: 0; }\n      to { opacity: 1; }\n    }  \n    @keyframes mmfadeOut {\n        from { opacity: 1; }\n          to { opacity: 0; }\n    }\n    #blm-modal[aria-hidden=\"false\"] .modal__overlay {\n      animation: mmfadeIn 1s cubic-bezier(0.0, 0.0, 0.2, 1);\n    }       \n    #blm-modal[aria-hidden=\"true\"] .modal__overlay {\n      animation: mmfadeOut 1s cubic-bezier(0.0, 0.0, 0.2, 1);\n    }\n";
    /**
     * "Render" our template with the config
     * @param config
     */
    function replaceStylesWithConfig(config) {
        return CSS.replace('{{fontFamily}}', config.fontFamily)
            .replace('{{backgroundColor}}', config.backgroundColor)
            .replace('{{primaryColor}}', config.primaryColor);
    }
    /**
     * Create `<style>` tag with configured CSS
     * @param config
     */
    function createStyleNode(config) {
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        var finalCss = replaceStylesWithConfig(config);
        style.appendChild(document.createTextNode(finalCss));
        return style;
    }
    /**
     * Create `<link>` tag for Google Font injection
     * @param fontFamily
     */
    function createFontNode(fontFamily) {
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', "https://fonts.googleapis.com/css2?family=" + fontFamily + ":wght@700&display=swap");
        return link;
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    	  path: basedir,
    	  exports: {},
    	  require: function (path, base) {
          return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
        }
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var esCookie = createCommonjsModule(function (module, exports) {
    var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    exports.__esModule = true;
    function stringifyAttribute(name, value) {
        if (!value) {
            return '';
        }
        var stringified = '; ' + name;
        if (value === true) {
            return stringified; // boolean attributes shouldn't have a value
        }
        return stringified + '=' + value;
    }
    function stringifyAttributes(attributes) {
        if (typeof attributes.expires === 'number') {
            var expires = new Date();
            expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
            attributes.expires = expires;
        }
        return stringifyAttribute('Expires', attributes.expires ? attributes.expires.toUTCString() : '')
            + stringifyAttribute('Domain', attributes.domain)
            + stringifyAttribute('Path', attributes.path)
            + stringifyAttribute('Secure', attributes.secure)
            + stringifyAttribute('SameSite', attributes.sameSite);
    }
    function encode(name, value, attributes) {
        return encodeURIComponent(name)
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent) // allowed special characters
            .replace(/\(/g, '%28').replace(/\)/g, '%29') // replace opening and closing parens
            + '=' + encodeURIComponent(value)
            // allowed special characters
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)
            + stringifyAttributes(attributes);
    }
    exports.encode = encode;
    function parse(cookieString) {
        var result = {};
        var cookies = cookieString ? cookieString.split('; ') : [];
        var rdecode = /(%[\dA-F]{2})+/gi;
        for (var i = 0; i < cookies.length; i++) {
            var parts = cookies[i].split('=');
            var cookie = parts.slice(1).join('=');
            if (cookie.charAt(0) === '"') {
                cookie = cookie.slice(1, -1);
            }
            try {
                var name_1 = parts[0].replace(rdecode, decodeURIComponent);
                result[name_1] = cookie.replace(rdecode, decodeURIComponent);
            }
            catch (e) {
                // ignore cookies with invalid name/value encoding
            }
        }
        return result;
    }
    exports.parse = parse;
    function getAll() {
        return parse(document.cookie);
    }
    exports.getAll = getAll;
    function get(name) {
        return getAll()[name];
    }
    exports.get = get;
    function set(name, value, attributes) {
        document.cookie = encode(name, value, __assign({ path: '/' }, attributes));
    }
    exports.set = set;
    function remove(name, attributes) {
        set(name, '', __assign(__assign({}, attributes), { expires: -1 }));
    }
    exports.remove = remove;
    });

    var esCookie$1 = /*@__PURE__*/unwrapExports(esCookie);

    /**
     * Method used to keep track of the domain
     */
    function trackDomain(name, metricsUrl) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!('fetch' in window))
                    return [2 /*return*/];
                return [2 /*return*/, fetch(metricsUrl, {
                        mode: 'cors',
                        cache: 'no-cache',
                        method: 'GET',
                        headers: { 'x-blm-tech-website-name': name },
                    })];
            });
        });
    }

    // Check to see if we showed this already
    var BLM_COOKIE = 'BLM_MODAL_SHOWN';
    /**
     * Setup our modal
     */
    function setupAndInjectModal() {
        var node = createModalNode(getConfiguration());
        var styleNode = createStyleNode(getConfiguration());
        document.head.appendChild(styleNode);
        document.body.appendChild(node);
        if (getConfiguration().preview) {
            document.getElementById(MODAL_ID).classList.add('is-open');
        }
        else {
            MicroModal.init();
            showModal();
            esCookie$1.set(BLM_COOKIE, 'true'); // store we showed it
        }
    }
    /**
     * Function called by injection script to set configuration and add listener
     * NOTE: Inject as soon as the DOM is ready (don't wait for window.onload)
     * @param config
     */
    function init(config) {
        // Store config in local variable
        configure(config);
        // Inject our font in <head> first
        var fontNode = createFontNode(getConfiguration().fontFamily);
        document.head.appendChild(fontNode);
        // Collect metrics if we are allowed to
        if (getConfiguration().metricsEnabled) {
            trackDomain(getConfiguration().name, getConfiguration().metricsUrl).catch(function (e) { return console.error('Failed to send metrics', e); });
        }
        // Add modal / style when DOM is ready, only if cookie doesn't exist
        if (!esCookie$1.get(BLM_COOKIE)) {
            if (document.readyState !== 'loading') {
                setupAndInjectModal();
            }
            else {
                document.addEventListener('DOMContentLoaded', setupAndInjectModal);
            }
        }
    }
    // Setup the config from the snippet
    if (window.BLM && window.BLM._loadOptions) {
        init(window.BLM._loadOptions);
    }
    else {
        init({ name: 'site' });
    }

}());
