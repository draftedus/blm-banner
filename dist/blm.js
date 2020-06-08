!function(){"use strict";var i,n=function(){return(n=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var a in n=arguments[o])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};function o(e){i=n({primaryColor:"#FFFFFF",backgroundColor:"#000000",fontFamily:"Teko",preview:!1},e)}function t(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function F(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return a(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return a(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=e[o];return t}var l,s,c,r=(l=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],s=function(){function E(e){var n=e.targetModal,o=e.triggers,t=void 0===o?[]:o,a=e.onShow,i=void 0===a?function(){}:a,l=e.onClose,r=void 0===l?function(){}:l,d=e.openTrigger,s=void 0===d?"data-micromodal-trigger":d,c=e.closeTrigger,m=void 0===c?"data-micromodal-close":c,f=e.openClass,u=void 0===f?"is-open":f,h=e.disableScroll,b=void 0!==h&&h,g=e.disableFocus,v=void 0!==g&&g,y=e.awaitCloseAnimation,p=void 0!==y&&y,_=e.awaitOpenAnimation,w=void 0!==_&&_,k=e.debugMode,C=void 0!==k&&k;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,E),this.modal=document.getElementById(n),this.config={debugMode:C,disableScroll:b,openTrigger:s,closeTrigger:m,openClass:u,onShow:i,onClose:r,awaitCloseAnimation:p,awaitOpenAnimation:w,disableFocus:v},0<t.length&&this.registerTriggers.apply(this,F(t)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var e,n,o;return e=E,(n=[{key:"registerTriggers",value:function(){for(var n=this,e=arguments.length,o=new Array(e),t=0;t<e;t++)o[t]=arguments[t];o.filter(Boolean).forEach(function(e){e.addEventListener("click",function(e){return n.showModal(e)})})}},{key:"showModal",value:function(e){var n=this,o=0<arguments.length&&void 0!==e?e:null;this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation?this.modal.addEventListener("animationend",function e(){n.modal.removeEventListener("animationend",e,!1),n.setFocusToFirstNode()},!1):this.setFocusToFirstNode(),this.config.onShow(this.modal,this.activeElement,o)}},{key:"closeModal",value:function(e){var n,o=0<arguments.length&&void 0!==e?e:null,t=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,o),this.config.awaitCloseAnimation?(n=this.config.openClass,this.modal.addEventListener("animationend",function e(){t.classList.remove(n),t.removeEventListener("animationend",e,!1)},!1)):t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var n=document.querySelector("body");switch(e){case"enable":Object.assign(n.style,{overflow:""});break;case"disable":Object.assign(n.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&this.closeModal(e)}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(l);return Array.apply(void 0,F(e))}},{key:"setFocusToFirstNode",value:function(){var e,n,o=this;this.config.disableFocus||0!==(e=this.getFocusableNodes()).length&&(0<(n=e.filter(function(e){return!e.hasAttribute(o.config.closeTrigger)})).length&&n[0].focus(),0===n.length&&e[0].focus())}},{key:"retainFocus",value:function(e){var n,o=this.getFocusableNodes();0!==o.length&&(o=o.filter(function(e){return null!==e.offsetParent}),this.modal.contains(document.activeElement)?(n=o.indexOf(document.activeElement),e.shiftKey&&0===n&&(o[o.length-1].focus(),e.preventDefault()),!e.shiftKey&&0<o.length&&n===o.length-1&&(o[0].focus(),e.preventDefault())):o[0].focus())}}])&&t(e.prototype,n),o&&t(e,o),E}(),c=null,{init:function(e){var n,o,t,a=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),i=F(document.querySelectorAll("[".concat(a.openTrigger,"]"))),l=(n=i,o=a.openTrigger,t=[],n.forEach(function(e){var n=e.attributes[o].value;void 0===t[n]&&(t[n]=[]),t[n].push(e)}),t);if(!0!==a.debugMode||!1!==m(i,l))for(var r in l){var d=l[r];a.targetModal=r,a.triggers=F(d),c=new s(a)}},show:function(e,n){var o=n||{};o.targetModal=e,!0===o.debugMode&&!1===d(e)||(c&&c.removeEventListeners(),(c=new s(o)).showModal())},close:function(e){e?c.closeModalById(e):c.closeModal()}});function d(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1}function m(e,n){if(!function(e){if(e.length<=0)console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')}(e),!n)return!0;for(var o in n)d(o);return!0}window.MicroModal=r;var f='<div id="blm-modal" class="modal micromodal-slide" aria-hidden="true">\n    <div class="modal__overlay" tabindex="-1" data-micromodal-close>\n      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">\n        <div class="modal__header">\n          <div class="modal__title__black">\n            Black\n          </div>\n          <div class="modal__title__lives">\n            Lives\n          </div>\n          <div class="modal__title__matter">\n           Matter\n          </div>\n        </div>\n        <div class="modal__content">\n            Continue to {{name}} ->\n        </div>\n      </div>\n    </div>\n  </div>';function u(e){return document.createRange().createContextualFragment((n=e,f.replace("{{name}}",n.name)));var n}var h='\n    #blm-modal {\n        display: none;\n    }\n    #blm-modal.is-open {\n        display: block;\n    }\n    #blm-modal {\n      font-family: \'{{fontFamily}}\', sans-serif;\n      color: {{primaryColor}};\n      font-weight: bold;\n    }\n    #blm-modal > .modal__overlay {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: {{backgroundColor}};\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    #blm-modal > .modal__overlay .modal__container .modal__header {\n      display: flex;\n      justify-content: space-between;\n      flex-direction: column;\n      align-items: center;\n    }\n    #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__black {\n      font-weight: bold;\n      font-size: 104px;\n      line-height: 149px;\n    }\n     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__lives {\n      font-weight: 600;\n      font-size: 140px;\n      line-height: 201px;\n      letter-spacing: 0.1em;\n    }\n     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__matter {\n      font-weight: 600;\n      font-size: 90px;\n      line-height: 129px;\n    }\n    \n    #blm-modal > .modal__close {\n      background: transparent;\n      border: 0;\n    }\n    #blm-modal > .modal__header #blm-modal.modal__close:before { content: "\\2715"; }\n    #blm-modal > .modal__overlay .modal__container .modal__content {\n      margin-top: 5rem;\n      margin-bottom: 2rem;\n      min-width: 360px;\n      height: 70px;\n      border: 1px solid #FFFFFF;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #fff;\n      font-size: 24px;\n      font-family: Inter, sans-serif;\n      padding-left: 5px;\n      padding-right: 5px;\n    }\n    #blm-modal > .modal__btn {\n      font-size: .875rem;\n      padding-left: 1rem;\n      padding-right: 1rem;\n      padding-top: .5rem;\n      padding-bottom: .5rem;\n      background-color: #e6e6e6;\n      color: rgba(0,0,0,.8);\n      border-radius: .25rem;\n      border-style: none;\n      border-width: 0;\n      cursor: pointer;\n      -webkit-appearance: button;\n      text-transform: none;\n      overflow: visible;\n      line-height: 1.15;\n      margin: 0;\n      will-change: transform;\n      -moz-osx-font-smoothing: grayscale;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden;\n      -webkit-transform: translateZ(0);\n      transform: translateZ(0);\n      transition: -webkit-transform .25s ease-out;\n      transition: transform .25s ease-out;\n      transition: transform .25s ease-out,-webkit-transform .25s ease-out;\n    }\n    #blm-modal > .modal__btn:focus, #blm-modal.modal__btn:hover {\n      -webkit-transform: scale(1.05);\n      transform: scale(1.05);\n    }\n    #blm-modal > .modal__btn-primary {\n      background-color: #00449e;\n      color: #fff;\n    }\n    @keyframes mmfadeIn {\n        from { opacity: 0; }\n          to { opacity: 1; }\n    }\n    @keyframes mmfadeOut {\n        from { opacity: 1; }\n          to { opacity: 0; }\n    }\n    @keyframes mmslideIn {\n      from { transform: translateY(15%); }\n        to { transform: translateY(0); }\n    }\n    @keyframes mmslideOut {\n        from { transform: translateY(0); }\n        to { transform: translateY(-10%); }\n    }\n    .micromodal-slide {\n      display: none;\n    }\n    .micromodal-slide.is-open {\n      display: block;\n    }\n    .micromodal-slide[aria-hidden="false"] #blm-modal.modal__overlay {\n      animation: mmfadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1);\n    }\n    .micromodal-slide[aria-hidden="false"] #blm-modal.modal__container {\n      animation: mmslideIn .3s cubic-bezier(0, 0, .2, 1);\n    }\n    .micromodal-slide[aria-hidden="true"] #blm-modal.modal__overlay {\n      animation: mmfadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1);\n    }\n    .micromodal-slide[aria-hidden="true"] #blm-modal.modal__container {\n      animation: mmslideOut .3s cubic-bezier(0, 0, .2, 1);\n    }\n    .micromodal-slide #blm-modal.modal__container,\n    .micromodal-slide #blm-modal.modal__overlay {\n      will-change: transform;\n    }\n';function b(e){var n=document.createElement("style");n.setAttribute("type","text/css");var o,t=(o=e,h.replace("{{fontFamily}}",o.fontFamily).replace("{{backgroundColor}}",o.backgroundColor).replace("{{primaryColor}}",o.primaryColor));return n.appendChild(document.createTextNode(t)),n}function g(){console.log("blm: init");var e,n,o=(e=i.fontFamily,(n=document.createElement("link")).setAttribute("rel","stylesheet"),n.setAttribute("href","https://fonts.googleapis.com/css2?family="+e+":wght@700&display=swap"),n),t=u(i),a=b(i);document.body.appendChild(o),document.body.appendChild(a),document.body.appendChild(t),r.init(),r.show("blm-modal")}function e(e){o(e),"loading"!==document.readyState?g():document.addEventListener("DOMContentLoaded",g)}window.BLM&&window.BLM._loadOptions?(console.log("blm: opening modal with custom config",window.BLM._loadOptions),e(window.BLM._loadOptions)):(console.log("blm: opening modal with default config"),e({name:"site"}))}();

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

    var CONFIGURATION;
    /**
     * If no configuration is provided, fallback to these defaults
     * @param config
     */
    function setConfigWithDefaults(config) {
        return __assign({ primaryColor: '#FFFFFF', backgroundColor: '#000000', fontFamily: 'Teko', preview: false }, config);
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

    var MODAL_HTML = "<div id=\"blm-modal\" class=\"modal micromodal-slide\" aria-hidden=\"true\">\n    <div class=\"modal__overlay\" tabindex=\"-1\" data-micromodal-close>\n      <div class=\"modal__container\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-1-title\">\n        <div class=\"modal__header\">\n          <div class=\"modal__title__black\">\n            <span>B</span>\n            <span>L</span>\n            <span>A</span>\n            <span>C</span>\n            <span>K</span>\n          </div>\n          <div class=\"modal__title__lives\">\n            <span>L</span>\n            <span>I</span>\n            <span>V</span>\n            <span>E</span>\n            <span>S</span>\n          </div>\n          <div class=\"modal__title__matter\">\n            <span>M</span>\n            <span>A</span>\n            <span>T</span>\n            <span>T</span>\n            <span>E</span>\n            <span>R</span>\n          </div>\n        </div>\n        <div class=\"modal__content\">\n            Continue to {{name}} ->\n        </div>\n      </div>\n    </div>\n  </div>";
    function replaceTextWithConfig(config) {
        return MODAL_HTML.replace('{{name}}', config.name);
    }
    function createModalNode(config) {
        return document
            .createRange()
            .createContextualFragment(replaceTextWithConfig(config));
    }
    function showModal() {
        MicroModal.show('blm-modal');
    }

    var CSS = "\n    #blm-modal {\n        display: none;\n    }\n    #blm-modal.is-open {\n        display: block;\n    }\n    #blm-modal {\n      font-family: '{{fontFamily}}', sans-serif;\n      color: {{primaryColor}};\n      font-weight: bold;\n    }\n    #blm-modal > .modal__overlay {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: {{backgroundColor}};\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    #blm-modal > .modal__overlay .modal__container .modal__header {\n      width: 362px\n      display: flex;\n      justify-content: space-between;    \n      flex-direction: column;\n      align-items: center;\n    }\n    #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__black {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      font-weight: bold;\n      font-size: 104px;\n      line-height: 1;\n    }\n     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__lives {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      font-weight: 600;\n      font-size: 140px;\n      line-height: 201px;\n    }\n     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__matter {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      font-weight: 600;\n      font-size: 90px;\n      line-height: 1;\n    }\n    \n    #blm-modal > .modal__close {\n      background: transparent;\n      border: 0;\n    }\n    #blm-modal > .modal__header #blm-modal.modal__close:before { content: \"\\2715\"; }\n    #blm-modal > .modal__overlay .modal__container .modal__content {\n      margin-top: 3rem;\n      margin-bottom: 2rem;\n      min-width: 362px;\n      height: 70px;\n      border: 1px solid #FFFFFF;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #fff;\n      font-size: 24px;\n      font-family: Inter, sans-serif;\n      padding-left: 5px;\n      padding-right: 5px;\n    }\n";
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

    /**
     * Setup our modal
     */
    function setupAndInjectModal() {
        console.log('blm: init');
        var fontNode = createFontNode(getConfiguration().fontFamily);
        var node = createModalNode(getConfiguration());
        var styleNode = createStyleNode(getConfiguration());
        document.body.appendChild(fontNode);
        document.body.appendChild(styleNode);
        document.body.appendChild(node);
        MicroModal.init();
        showModal();
    }
    /**
     * Function called by injection script to set configuration and add listener
     * NOTE: Inject as soon as the DOM is ready (don't wait for window.onload)
     * @param config
     */
    function init(config) {
        configure(config);
        if (document.readyState !== 'loading') {
            setupAndInjectModal();
        }
        else {
            document.addEventListener('DOMContentLoaded', setupAndInjectModal);
        }
    }
    // Run the modal right away for default config
    if (window.BLM && window.BLM._loadOptions) {
        console.log('blm: opening modal with custom config', window.BLM._loadOptions);
        init(window.BLM._loadOptions);
    }
    else {
        console.log('blm: opening modal with default config');
        init({ name: 'site' });
    }

}());
