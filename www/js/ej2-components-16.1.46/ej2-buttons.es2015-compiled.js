'use strict';

System.register(['@syncfusion/ej2-base'], function (_export, _context) {
    "use strict";

    var Component, Event, EventHandler, NotifyPropertyChanges, Property, addClass, createElement, detach, getInstance, getUniqueID, getValue, isRippleEnabled, removeClass, rippleEffect, setValue, _createClass, _get, _typeof, __decorate, cssClassName, Button, __decorate$1, CHECK, DISABLED, FRAME, INDETERMINATE, LABEL, RIPPLE, RIPPLECHECK, RIPPLEINDETERMINATE, RTL, WRAPPER, CheckBox, __decorate$2, LABEL$1, RIPPLE$1, RTL$1, WRAPPER$1, RadioButton, RadioButton_1;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    /**
     * Initialize wrapper element for angular.
     * @private
     */
    function wrapperInitialize(tag, type, element, WRAPPER) {
        if (element.tagName === tag) {
            var ejInstance = getValue('ej2_instances', element);
            var input = createElement('input', { attrs: { 'type': type } });
            var props = ['change', 'cssClass', 'label', 'labelPosition'];
            var wrapper = createElement(tag, {
                className: WRAPPER, attrs: { 'role': type, 'aria-checked': 'false' }
            });
            for (var index = 0, len = element.attributes.length; index < len; index++) {
                if (props.indexOf(element.attributes[index].nodeName) === -1) {
                    input.setAttribute(element.attributes[index].nodeName, element.attributes[index].nodeValue);
                }
            }
            element.parentNode.insertBefore(input, element);
            detach(element);
            element = input;
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
            setValue('ej2_instances', ejInstance, element);
        }
        return element;
    }
    function getTextNode(element) {
        var node = void 0;
        var childnode = element.childNodes;
        for (var i = 0; i < childnode.length; i++) {
            node = childnode[i];
            if (node.nodeType === 3) {
                return node;
            }
        }
        return null;
    }
    /**
     * Creates CheckBox component UI with theming and ripple support.
     * @private
     */
    function createCheckBox() {
        var enableRipple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var wrapper = createElement('div', { className: 'e-checkbox-wrapper e-css' });
        if (options.cssClass) {
            addClass([wrapper], options.cssClass.split(' '));
        }
        if (options.enableRtl) {
            wrapper.classList.add('e-rtl');
        }
        if (enableRipple) {
            var rippleSpan = createElement('span', { className: 'e-ripple-container' });
            rippleEffect(rippleSpan, { isCenterRipple: true, duration: 400 });
            wrapper.appendChild(rippleSpan);
        }
        var frameSpan = createElement('span', { className: 'e-frame e-icons' });
        if (options.checked) {
            frameSpan.classList.add('e-check');
        }
        wrapper.appendChild(frameSpan);
        if (options.label) {
            var labelSpan = createElement('span', { className: 'e-label', innerHTML: options.label });
            wrapper.appendChild(labelSpan);
        }
        return wrapper;
    }
    function rippleMouseHandler(e, rippleSpan) {
        if (rippleSpan) {
            var event = document.createEvent('MouseEvents');
            event.initEvent(e.type, false, true);
            rippleSpan.dispatchEvent(event);
        }
    }

    /**
     * Common modules
     */

    return {
        setters: [function (_syncfusionEj2Base) {
            Component = _syncfusionEj2Base.Component;
            Event = _syncfusionEj2Base.Event;
            EventHandler = _syncfusionEj2Base.EventHandler;
            NotifyPropertyChanges = _syncfusionEj2Base.NotifyPropertyChanges;
            Property = _syncfusionEj2Base.Property;
            addClass = _syncfusionEj2Base.addClass;
            createElement = _syncfusionEj2Base.createElement;
            detach = _syncfusionEj2Base.detach;
            getInstance = _syncfusionEj2Base.getInstance;
            getUniqueID = _syncfusionEj2Base.getUniqueID;
            getValue = _syncfusionEj2Base.getValue;
            isRippleEnabled = _syncfusionEj2Base.isRippleEnabled;
            removeClass = _syncfusionEj2Base.removeClass;
            rippleEffect = _syncfusionEj2Base.rippleEffect;
            setValue = _syncfusionEj2Base.setValue;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _get = function get(object, property, receiver) {
                if (object === null) object = Function.prototype;
                var desc = Object.getOwnPropertyDescriptor(object, property);

                if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);

                    if (parent === null) {
                        return undefined;
                    } else {
                        return get(parent, property, receiver);
                    }
                } else if ("value" in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;

                    if (getter === undefined) {
                        return undefined;
                    }

                    return getter.call(receiver);
                }
            };

            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            cssClassName = {
                RTL: 'e-rtl',
                BUTTON: 'e-btn',
                PRIMARY: 'e-primary',
                ICONBTN: 'e-icon-btn'
            };

            _export('Button', Button = function (_Component) {
                _inherits(Button, _Component);

                /**
                 * Constructor for creating the widget
                 * @param  {ButtonModel} options?
                 * @param  {string|HTMLButtonElement} element?
                 */
                function Button(options, element) {
                    _classCallCheck(this, Button);

                    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, options, element));
                }

                _createClass(Button, [{
                    key: 'preRender',
                    value: function preRender() {}
                    // pre render code snippets

                    /**
                     * Initialize the control rendering
                     * @returns void
                     * @private
                     */

                }, {
                    key: 'render',
                    value: function render() {
                        this.initialize();
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        if (this.cssClass) {
                            addClass([this.element], this.cssClass.split(' '));
                        }
                        if (this.isPrimary) {
                            this.element.classList.add(cssClassName.PRIMARY);
                        }
                        if (this.content) {
                            this.element.innerHTML = this.content;
                        }
                        this.setIconCss();
                        if (this.enableRtl) {
                            this.element.classList.add(cssClassName.RTL);
                        }
                        if (this.disabled) {
                            this.controlStatus(this.disabled);
                        } else {
                            this.wireEvents();
                        }
                        rippleEffect(this.element, { selector: '.' + cssClassName.BUTTON });
                    }
                }, {
                    key: 'controlStatus',
                    value: function controlStatus(disabled) {
                        this.element.disabled = disabled;
                    }
                }, {
                    key: 'setIconCss',
                    value: function setIconCss() {
                        if (this.iconCss) {
                            var span = createElement('span', { className: 'e-btn-icon ' + this.iconCss });
                            if (!this.element.textContent.trim()) {
                                this.element.classList.add(cssClassName.ICONBTN);
                            } else {
                                span.classList.add('e-icon-' + this.iconPosition.toLowerCase());
                            }
                            var node = this.element.childNodes[0];
                            if (node && this.iconPosition === 'Left') {
                                this.element.insertBefore(span, node);
                            } else {
                                this.element.appendChild(span);
                            }
                        }
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        if (this.isToggle) {
                            EventHandler.add(this.element, 'click', this.btnClickHandler, this);
                        }
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        if (this.isToggle) {
                            EventHandler.remove(this.element, 'click', this.btnClickHandler);
                        }
                    }
                }, {
                    key: 'btnClickHandler',
                    value: function btnClickHandler() {
                        if (this.element.classList.contains('e-active')) {
                            this.element.classList.remove('e-active');
                        } else {
                            this.element.classList.add('e-active');
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var span = void 0;
                        var element = this.element;
                        _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'destroy', this).call(this);
                        removeClass([this.element], [cssClassName.PRIMARY, cssClassName.RTL, cssClassName.ICONBTN, 'e-success', 'e-info', 'e-danger', 'e-warning', 'e-flat', 'e-outline', 'e-small', 'e-bigger', 'e-active', 'e-round']);
                        ['e-ripple', 'disabled'].forEach(function (value) {
                            element.removeAttribute(value);
                        });
                        if (this.content) {
                            element.innerHTML = element.innerHTML.replace(this.content, '');
                        }
                        span = element.querySelector('span.e-btn-icon');
                        if (span) {
                            detach(span);
                        }
                        this.unWireEvents();
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'btn';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist([]);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = Object.keys(newProp)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var prop = _step.value;

                                switch (prop) {
                                    case 'isPrimary':
                                        if (newProp.isPrimary) {
                                            this.element.classList.add(cssClassName.PRIMARY);
                                        } else {
                                            this.element.classList.remove(cssClassName.PRIMARY);
                                        }
                                        break;
                                    case 'disabled':
                                        this.controlStatus(newProp.disabled);
                                        this.unWireEvents();
                                        break;
                                    case 'iconCss':
                                        var span = this.element.querySelector('span.e-btn-icon');
                                        if (span) {
                                            span.className = 'e-btn-icon ' + newProp.iconCss;
                                            if (this.element.textContent.trim()) {
                                                if (this.iconPosition === 'Left') {
                                                    span.classList.add('e-icon-left');
                                                } else {
                                                    span.classList.add('e-icon-right');
                                                }
                                            }
                                        } else {
                                            this.setIconCss();
                                        }
                                        break;
                                    case 'iconPosition':
                                        span = this.element.querySelector('span.e-btn-icon');
                                        if (span) {
                                            detach(span);
                                        }
                                        this.setIconCss();
                                        break;
                                    case 'cssClass':
                                        if (oldProp.cssClass) {
                                            removeClass([this.element], oldProp.cssClass.split(' '));
                                        }
                                        if (newProp.cssClass) {
                                            addClass([this.element], newProp.cssClass.split(' '));
                                        }
                                        break;
                                    case 'enableRtl':
                                        if (newProp.enableRtl) {
                                            this.element.classList.add(cssClassName.RTL);
                                        } else {
                                            this.element.classList.remove(cssClassName.RTL);
                                        }
                                        break;
                                    case 'content':
                                        var node = getTextNode(this.element);
                                        if (!node) {
                                            this.element.classList.remove(cssClassName.ICONBTN);
                                        }
                                        this.element.innerHTML = newProp.content;
                                        this.setIconCss();
                                        break;
                                    case 'isToggle':
                                        if (newProp.isToggle) {
                                            EventHandler.add(this.element, 'click', this.btnClickHandler, this);
                                        } else {
                                            EventHandler.remove(this.element, 'click', this.btnClickHandler);
                                            removeClass([this.element], ['e-active']);
                                        }
                                        break;
                                }
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
                    }
                }]);

                return Button;
            }(Component));

            __decorate([Property('Left')], Button.prototype, "iconPosition", void 0);
            __decorate([Property('')], Button.prototype, "iconCss", void 0);
            __decorate([Property(false)], Button.prototype, "disabled", void 0);
            __decorate([Property(false)], Button.prototype, "isPrimary", void 0);
            __decorate([Property('')], Button.prototype, "cssClass", void 0);
            __decorate([Property('')], Button.prototype, "content", void 0);
            __decorate([Property(false)], Button.prototype, "isToggle", void 0);
            _export('Button', Button = __decorate([NotifyPropertyChanges], Button));

            /**
             * Button modules
             */

            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            CHECK = 'e-check';
            DISABLED = 'e-checkbox-disabled';
            FRAME = 'e-frame';
            INDETERMINATE = 'e-stop';
            LABEL = 'e-label';
            RIPPLE = 'e-ripple-container';
            RIPPLECHECK = 'e-ripple-check';
            RIPPLEINDETERMINATE = 'e-ripple-stop';
            RTL = 'e-rtl';
            WRAPPER = 'e-checkbox-wrapper';

            _export('CheckBox', CheckBox = function (_Component2) {
                _inherits(CheckBox, _Component2);

                /**
                 * Constructor for creating the widget
                 * @private
                 */
                function CheckBox(options, element) {
                    _classCallCheck(this, CheckBox);

                    var _this2 = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, options, element));

                    _this2.isKeyPressed = false;
                    return _this2;
                }

                _createClass(CheckBox, [{
                    key: 'changeState',
                    value: function changeState(state) {
                        var ariaState = void 0;
                        var rippleSpan = void 0;
                        var frameSpan = this.getWrapper().getElementsByClassName(FRAME)[0];
                        if (isRippleEnabled) {
                            rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
                        }
                        if (state === 'check') {
                            frameSpan.classList.remove(INDETERMINATE);
                            frameSpan.classList.add(CHECK);
                            if (rippleSpan) {
                                rippleSpan.classList.remove(RIPPLEINDETERMINATE);
                                rippleSpan.classList.add(RIPPLECHECK);
                            }
                            ariaState = 'true';
                            this.element.checked = true;
                        } else if (state === 'uncheck') {
                            removeClass([frameSpan], [CHECK, INDETERMINATE]);
                            if (rippleSpan) {
                                removeClass([rippleSpan], [RIPPLECHECK, RIPPLEINDETERMINATE]);
                            }
                            ariaState = 'false';
                            this.element.checked = false;
                        } else {
                            frameSpan.classList.remove(CHECK);
                            frameSpan.classList.add(INDETERMINATE);
                            if (rippleSpan) {
                                rippleSpan.classList.remove(RIPPLECHECK);
                                rippleSpan.classList.add(RIPPLEINDETERMINATE);
                            }
                            ariaState = 'mixed';
                            this.element.indeterminate = true;
                        }
                        this.getWrapper().setAttribute('aria-checked', ariaState);
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(event) {
                        this.focusOutHandler();
                        if (this.indeterminate) {
                            this.changeState(this.checked ? 'check' : 'uncheck');
                            this.indeterminate = false;
                            this.element.indeterminate = false;
                        } else if (this.checked) {
                            this.changeState('uncheck');
                            this.checked = false;
                        } else {
                            this.changeState('check');
                            this.checked = true;
                        }
                        var changeEventArgs = { checked: this.element.checked, event: event };
                        this.trigger('change', changeEventArgs);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this3 = this;

                        var wrapper = this.getWrapper();
                        _get(CheckBox.prototype.__proto__ || Object.getPrototypeOf(CheckBox.prototype), 'destroy', this).call(this);
                        if (!this.disabled) {
                            this.unWireEvents();
                        }
                        if (this.tagName === 'INPUT') {
                            wrapper.parentNode.insertBefore(this.element, wrapper);
                            detach(wrapper);
                            this.element.checked = false;
                            if (this.indeterminate) {
                                this.element.indeterminate = false;
                            }
                            ['name', 'value', 'disabled'].forEach(function (key) {
                                _this3.element.removeAttribute(key);
                            });
                        } else {
                            ['role', 'aria-checked', 'class'].forEach(function (key) {
                                wrapper.removeAttribute(key);
                            });
                            if (this.element.id) {
                                wrapper.setAttribute('id', this.element.id);
                            }
                            wrapper.innerHTML = '';
                        }
                    }
                }, {
                    key: 'focusHandler',
                    value: function focusHandler() {
                        if (this.isKeyPressed) {
                            this.getWrapper().classList.add('e-focus');
                        }
                    }
                }, {
                    key: 'focusOutHandler',
                    value: function focusOutHandler() {
                        this.getWrapper().classList.remove('e-focus');
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'checkbox';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist(['checked', 'indeterminate']);
                    }
                }, {
                    key: 'getWrapper',
                    value: function getWrapper() {
                        return this.element.parentElement.parentElement;
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        if (this.name) {
                            this.element.setAttribute('name', this.name);
                        }
                        if (this.value) {
                            this.element.setAttribute('value', this.value);
                        }
                        if (this.checked) {
                            this.changeState('check');
                        }
                        if (this.indeterminate) {
                            this.changeState();
                        }
                        if (this.disabled) {
                            this.setDisabled();
                        }
                    }
                }, {
                    key: 'initWrapper',
                    value: function initWrapper() {
                        var wrapper = this.element.parentElement;
                        if (!wrapper.classList.contains(WRAPPER)) {
                            wrapper = createElement('div', {
                                className: WRAPPER, attrs: { 'role': 'checkbox', 'aria-checked': 'false' }
                            });
                            this.element.parentNode.insertBefore(wrapper, this.element);
                        }
                        var label = createElement('label', { attrs: { for: this.element.id } });
                        var frameSpan = createElement('span', { className: 'e-icons ' + FRAME });
                        if (this.enableRtl) {
                            wrapper.classList.add(RTL);
                        }
                        if (this.cssClass) {
                            addClass([wrapper], this.cssClass.split(' '));
                        }
                        wrapper.appendChild(label);
                        label.appendChild(this.element);
                        label.appendChild(frameSpan);
                        if (isRippleEnabled) {
                            var rippleSpan = createElement('span', { className: RIPPLE });
                            if (this.labelPosition === 'Before') {
                                label.appendChild(rippleSpan);
                            } else {
                                label.insertBefore(rippleSpan, frameSpan);
                            }
                            rippleEffect(rippleSpan, { duration: 400, isCenterRipple: true });
                        }
                        if (this.label) {
                            this.setText(this.label);
                        }
                    }
                }, {
                    key: 'keyDownHandler',
                    value: function keyDownHandler() {
                        this.isKeyPressed = true;
                    }
                }, {
                    key: 'labelMouseHandler',
                    value: function labelMouseHandler(e) {
                        var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
                        rippleMouseHandler(e, rippleSpan);
                    }
                }, {
                    key: 'mouseDownHandler',
                    value: function mouseDownHandler() {
                        this.isKeyPressed = false;
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var wrapper = this.getWrapper();
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(newProp)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var prop = _step2.value;

                                switch (prop) {
                                    case 'checked':
                                        this.indeterminate = false;
                                        this.element.indeterminate = false;
                                        this.changeState(newProp.checked ? 'check' : 'uncheck');
                                        break;
                                    case 'indeterminate':
                                        if (newProp.indeterminate) {
                                            this.changeState();
                                        } else {
                                            this.element.indeterminate = false;
                                            this.changeState(this.checked ? 'check' : 'uncheck');
                                        }
                                        break;
                                    case 'disabled':
                                        if (newProp.disabled) {
                                            this.setDisabled();
                                            this.unWireEvents();
                                        } else {
                                            this.element.disabled = false;
                                            wrapper.classList.remove(DISABLED);
                                            wrapper.setAttribute('aria-disabled', 'false');
                                            this.wireEvents();
                                        }
                                        break;
                                    case 'cssClass':
                                        if (oldProp.cssClass) {
                                            wrapper.classList.remove(oldProp.cssClass);
                                        }
                                        wrapper.classList.add(newProp.cssClass);
                                        break;
                                    case 'enableRtl':
                                        if (newProp.enableRtl) {
                                            wrapper.classList.add(RTL);
                                        } else {
                                            wrapper.classList.remove(RTL);
                                        }
                                        break;
                                    case 'label':
                                        this.setText(newProp.label);
                                        break;
                                    case 'labelPosition':
                                        var label = wrapper.getElementsByClassName(LABEL)[0];
                                        var labelWrap = wrapper.getElementsByTagName('label')[0];
                                        detach(label);
                                        if (newProp.labelPosition === 'After') {
                                            labelWrap.appendChild(label);
                                        } else {
                                            labelWrap.insertBefore(label, wrapper.getElementsByClassName(FRAME)[0]);
                                        }
                                        break;
                                    case 'name':
                                        this.element.setAttribute('name', newProp.name);
                                        break;
                                    case 'value':
                                        this.element.setAttribute('value', newProp.value);
                                        break;
                                }
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
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        var element = this.element;
                        this.tagName = this.element.tagName;
                        element = wrapperInitialize('EJS-CHECKBOX', 'checkbox', element, WRAPPER);
                        this.element = element;
                        if (this.element.getAttribute('type') !== 'checkbox') {
                            this.element.setAttribute('type', 'checkbox');
                        }
                        if (!this.element.id) {
                            this.element.id = getUniqueID('e-' + this.getModuleName());
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.initWrapper();
                        this.initialize();
                        if (!this.disabled) {
                            this.wireEvents();
                        }
                    }
                }, {
                    key: 'setDisabled',
                    value: function setDisabled() {
                        var wrapper = this.getWrapper();
                        this.element.disabled = true;
                        wrapper.classList.add(DISABLED);
                        wrapper.setAttribute('aria-disabled', 'true');
                    }
                }, {
                    key: 'setText',
                    value: function setText(text) {
                        var label = this.getWrapper().getElementsByClassName(LABEL)[0];
                        if (label) {
                            label.textContent = text;
                        } else {
                            label = createElement('span', { className: LABEL, innerHTML: text });
                            var labelWrap = this.getWrapper().getElementsByTagName('label')[0];
                            if (this.labelPosition === 'Before') {
                                labelWrap.insertBefore(label, this.getWrapper().getElementsByClassName(FRAME)[0]);
                            } else {
                                labelWrap.appendChild(label);
                            }
                        }
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        var wrapper = this.getWrapper();
                        EventHandler.remove(this.element, 'click', this.clickHandler);
                        EventHandler.remove(document, 'keydown', this.keyDownHandler);
                        EventHandler.remove(wrapper, 'mousedown', this.mouseDownHandler);
                        EventHandler.remove(this.element, 'focus', this.focusHandler);
                        EventHandler.remove(this.element, 'focusout', this.focusOutHandler);
                        var label = wrapper.getElementsByTagName('label')[0];
                        EventHandler.remove(label, 'mousedown', this.labelMouseHandler);
                        EventHandler.remove(label, 'mouseup', this.labelMouseHandler);
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        var wrapper = this.getWrapper();
                        EventHandler.add(this.element, 'click', this.clickHandler, this);
                        EventHandler.add(document, 'keydown', this.keyDownHandler, this);
                        EventHandler.add(wrapper, 'mousedown', this.mouseDownHandler, this);
                        EventHandler.add(this.element, 'focus', this.focusHandler, this);
                        EventHandler.add(this.element, 'focusout', this.focusOutHandler, this);
                        var label = wrapper.getElementsByTagName('label')[0];
                        EventHandler.add(label, 'mousedown', this.labelMouseHandler, this);
                        EventHandler.add(label, 'mouseup', this.labelMouseHandler, this);
                    }
                }]);

                return CheckBox;
            }(Component));

            __decorate$1([Event()], CheckBox.prototype, "change", void 0);
            __decorate$1([Property(false)], CheckBox.prototype, "checked", void 0);
            __decorate$1([Property('')], CheckBox.prototype, "cssClass", void 0);
            __decorate$1([Property(false)], CheckBox.prototype, "disabled", void 0);
            __decorate$1([Property(false)], CheckBox.prototype, "indeterminate", void 0);
            __decorate$1([Property('')], CheckBox.prototype, "label", void 0);
            __decorate$1([Property('After')], CheckBox.prototype, "labelPosition", void 0);
            __decorate$1([Property('')], CheckBox.prototype, "name", void 0);
            __decorate$1([Property('')], CheckBox.prototype, "value", void 0);
            _export('CheckBox', CheckBox = __decorate$1([NotifyPropertyChanges], CheckBox));

            /**
             * CheckBox modules
             */

            __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            LABEL$1 = 'e-label';
            RIPPLE$1 = 'e-ripple-container';
            RTL$1 = 'e-rtl';
            WRAPPER$1 = 'e-radio-wrapper';

            _export('RadioButton', RadioButton = RadioButton_1 = function (_Component3) {
                _inherits(RadioButton, _Component3);

                /**
                 * Constructor for creating the widget
                 * @private
                 */
                function RadioButton(options, element) {
                    _classCallCheck(this, RadioButton);

                    var _this4 = _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call(this, options, element));

                    _this4.isKeyPressed = false;
                    return _this4;
                }

                _createClass(RadioButton, [{
                    key: 'changeHandler',
                    value: function changeHandler(event) {
                        this.checked = true;
                        this.dataBind();
                        var changeEventArgs = { value: this.value, event: event };
                        this.trigger('change', changeEventArgs);
                    }
                }, {
                    key: 'updateChange',
                    value: function updateChange(state) {
                        var input = void 0;
                        var name = this.element.getAttribute('name');
                        var radioGrp = document.querySelectorAll('input.e-radio[name="' + name + '"]');
                        for (var i = 0; i < radioGrp.length; i++) {
                            input = radioGrp[i];
                            if (input !== this.element) {
                                getInstance(input, RadioButton_1).checked = false;
                            }
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this5 = this;

                        var radioWrap = this.element.parentElement;
                        _get(RadioButton.prototype.__proto__ || Object.getPrototypeOf(RadioButton.prototype), 'destroy', this).call(this);
                        if (!this.disabled) {
                            this.unWireEvents();
                        }
                        if (this.tagName === 'INPUT') {
                            radioWrap.parentNode.insertBefore(this.element, radioWrap);
                            detach(radioWrap);
                            this.element.checked = false;
                            ['name', 'value', 'disabled'].forEach(function (key) {
                                _this5.element.removeAttribute(key);
                            });
                        } else {
                            ['role', 'aria-checked', 'class'].forEach(function (key) {
                                radioWrap.removeAttribute(key);
                            });
                            if (this.element.id) {
                                radioWrap.setAttribute('id', this.element.id);
                            }
                            radioWrap.innerHTML = '';
                        }
                    }
                }, {
                    key: 'focusHandler',
                    value: function focusHandler() {
                        if (this.isKeyPressed) {
                            this.getLabel().classList.add('e-focus');
                        }
                    }
                }, {
                    key: 'focusOutHandler',
                    value: function focusOutHandler() {
                        this.getLabel().classList.remove('e-focus');
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'radio';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist(['checked']);
                    }
                }, {
                    key: 'getLabel',
                    value: function getLabel() {
                        return this.element.nextElementSibling;
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        this.initWrapper();
                        if (this.name) {
                            this.element.setAttribute('name', this.name);
                        }
                        if (this.value) {
                            this.element.setAttribute('value', this.value);
                        }
                        if (this.checked) {
                            this.element.checked = true;
                        }
                        if (this.disabled) {
                            this.setDisabled();
                        }
                    }
                }, {
                    key: 'initWrapper',
                    value: function initWrapper() {
                        var rippleSpan = void 0;
                        var wrapper = this.element.parentElement;
                        if (!wrapper.classList.contains(WRAPPER$1)) {
                            wrapper = createElement('div', { className: WRAPPER$1 });
                            this.element.parentNode.insertBefore(wrapper, this.element);
                        }
                        var label = createElement('label', { attrs: { for: this.element.id } });
                        wrapper.appendChild(this.element);
                        wrapper.appendChild(label);
                        if (isRippleEnabled) {
                            rippleSpan = createElement('span', { className: RIPPLE$1 });
                            label.appendChild(rippleSpan);
                            rippleEffect(rippleSpan, {
                                duration: 400,
                                isCenterRipple: true
                            });
                        }
                        if (this.enableRtl) {
                            label.classList.add(RTL$1);
                        }
                        if (this.cssClass) {
                            addClass([label], this.cssClass.split(' '));
                        }
                        if (this.label) {
                            this.setText(this.label);
                        }
                    }
                }, {
                    key: 'keyDownHandler',
                    value: function keyDownHandler() {
                        this.isKeyPressed = true;
                    }
                }, {
                    key: 'labelRippleHandler',
                    value: function labelRippleHandler(e) {
                        var ripple = this.getLabel().getElementsByClassName(RIPPLE$1)[0];
                        rippleMouseHandler(e, ripple);
                    }
                }, {
                    key: 'mouseDownHandler',
                    value: function mouseDownHandler() {
                        this.isKeyPressed = false;
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var label = this.getLabel();
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = Object.keys(newProp)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var prop = _step3.value;

                                switch (prop) {
                                    case 'checked':
                                        if (newProp.checked) {
                                            this.updateChange(newProp.checked);
                                        }
                                        this.element.checked = newProp.checked;
                                        break;
                                    case 'disabled':
                                        if (newProp.disabled) {
                                            this.setDisabled();
                                            this.unWireEvents();
                                        } else {
                                            this.element.disabled = false;
                                            this.wireEvents();
                                        }
                                        break;
                                    case 'cssClass':
                                        if (oldProp.cssClass) {
                                            removeClass([label], oldProp.cssClass.split(' '));
                                        }
                                        addClass([label], newProp.cssClass.split(' '));
                                        break;
                                    case 'enableRtl':
                                        if (newProp.enableRtl) {
                                            label.classList.add(RTL$1);
                                        } else {
                                            label.classList.remove(RTL$1);
                                        }
                                        break;
                                    case 'label':
                                        this.setText(newProp.label);
                                        break;
                                    case 'labelPosition':
                                        if (newProp.labelPosition === 'Before') {
                                            label.classList.add('e-right');
                                        } else {
                                            label.classList.remove('e-right');
                                        }
                                        break;
                                    case 'name':
                                        this.element.setAttribute('name', newProp.name);
                                        break;
                                    case 'value':
                                        this.element.setAttribute('value', newProp.value);
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        var element = this.element;
                        this.tagName = this.element.tagName;
                        element = wrapperInitialize('EJS-RADIOBUTTON', 'radio', element, WRAPPER$1);
                        this.element = element;
                        if (this.element.getAttribute('type') !== 'radio') {
                            this.element.setAttribute('type', 'radio');
                        }
                        if (!this.element.id) {
                            this.element.id = getUniqueID('e-' + this.getModuleName());
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.initialize();
                        if (!this.disabled) {
                            this.wireEvents();
                        }
                    }
                }, {
                    key: 'setDisabled',
                    value: function setDisabled() {
                        this.element.disabled = true;
                    }
                }, {
                    key: 'setText',
                    value: function setText(text) {
                        var label = this.getLabel();
                        var textLabel = label.getElementsByClassName(LABEL$1)[0];
                        if (textLabel) {
                            textLabel.textContent = text;
                        } else {
                            textLabel = createElement('span', { className: LABEL$1, innerHTML: text });
                            label.appendChild(textLabel);
                        }
                        if (this.labelPosition === 'Before') {
                            this.getLabel().classList.add('e-right');
                        } else {
                            this.getLabel().classList.remove('e-right');
                        }
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        var label = this.getLabel();
                        EventHandler.remove(this.element, 'change', this.changeHandler);
                        EventHandler.remove(document, 'keydown', this.keyDownHandler);
                        EventHandler.remove(label, 'mousedown', this.mouseDownHandler);
                        EventHandler.remove(this.element, 'focus', this.focusHandler);
                        EventHandler.remove(this.element, 'focusout', this.focusOutHandler);
                        var rippleLabel = label.getElementsByClassName(LABEL$1)[0];
                        if (rippleLabel) {
                            EventHandler.remove(rippleLabel, 'mousedown', this.labelRippleHandler);
                            EventHandler.remove(rippleLabel, 'mouseup', this.labelRippleHandler);
                        }
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        var label = this.getLabel();
                        EventHandler.add(this.element, 'change', this.changeHandler, this);
                        EventHandler.add(document, 'keydown', this.keyDownHandler, this);
                        EventHandler.add(label, 'mousedown', this.mouseDownHandler, this);
                        EventHandler.add(this.element, 'focus', this.focusHandler, this);
                        EventHandler.add(this.element, 'focusout', this.focusOutHandler, this);
                        var rippleLabel = label.getElementsByClassName(LABEL$1)[0];
                        if (rippleLabel) {
                            EventHandler.add(rippleLabel, 'mousedown', this.labelRippleHandler, this);
                            EventHandler.add(rippleLabel, 'mouseup', this.labelRippleHandler, this);
                        }
                    }
                }]);

                return RadioButton;
            }(Component));

            __decorate$2([Event()], RadioButton.prototype, "change", void 0);
            __decorate$2([Property(false)], RadioButton.prototype, "checked", void 0);
            __decorate$2([Property('')], RadioButton.prototype, "cssClass", void 0);
            __decorate$2([Property(false)], RadioButton.prototype, "disabled", void 0);
            __decorate$2([Property('')], RadioButton.prototype, "label", void 0);
            __decorate$2([Property('After')], RadioButton.prototype, "labelPosition", void 0);
            __decorate$2([Property('')], RadioButton.prototype, "name", void 0);
            __decorate$2([Property('')], RadioButton.prototype, "value", void 0);
            _export('RadioButton', RadioButton = RadioButton_1 = __decorate$2([NotifyPropertyChanges], RadioButton));

            _export('wrapperInitialize', wrapperInitialize);

            _export('getTextNode', getTextNode);

            _export('createCheckBox', createCheckBox);

            _export('rippleMouseHandler', rippleMouseHandler);

            _export('Button', Button);

            _export('CheckBox', CheckBox);

            _export('RadioButton', RadioButton);
        }
    };
});

//# sourceMappingURL=ej2-buttons.es2015-compiled.js.map