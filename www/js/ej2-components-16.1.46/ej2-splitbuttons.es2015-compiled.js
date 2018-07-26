'use strict';

System.register(['@syncfusion/ej2-base', '@syncfusion/ej2-buttons', '@syncfusion/ej2-popups'], function (_export, _context) {
    "use strict";

    var Browser, ChildProperty, Collection, Component, Event, EventHandler, KeyboardEvents, NotifyPropertyChanges, Property, addClass, attributes, classList, closest, createElement, deleteObject, detach, extend, getInstance, getUniqueID, getValue, remove, removeClass, rippleEffect, select, setValue, Button, Popup, getZindexPartial, _createClass, _get, _typeof, __decorate, Item, __decorate$1, classNames, DropDownButton, __decorate$2, RTL, TAGNAME, SplitButton;

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

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
     * @param props
     * @param model
     */
    function getModel(props, model) {
        var obj = extend({}, props);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var prop = _step.value;

                if (model.indexOf(prop) < 0) {
                    deleteObject(obj, prop);
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

        return obj;
    }
    return {
        setters: [function (_syncfusionEj2Base) {
            Browser = _syncfusionEj2Base.Browser;
            ChildProperty = _syncfusionEj2Base.ChildProperty;
            Collection = _syncfusionEj2Base.Collection;
            Component = _syncfusionEj2Base.Component;
            Event = _syncfusionEj2Base.Event;
            EventHandler = _syncfusionEj2Base.EventHandler;
            KeyboardEvents = _syncfusionEj2Base.KeyboardEvents;
            NotifyPropertyChanges = _syncfusionEj2Base.NotifyPropertyChanges;
            Property = _syncfusionEj2Base.Property;
            addClass = _syncfusionEj2Base.addClass;
            attributes = _syncfusionEj2Base.attributes;
            classList = _syncfusionEj2Base.classList;
            closest = _syncfusionEj2Base.closest;
            createElement = _syncfusionEj2Base.createElement;
            deleteObject = _syncfusionEj2Base.deleteObject;
            detach = _syncfusionEj2Base.detach;
            extend = _syncfusionEj2Base.extend;
            getInstance = _syncfusionEj2Base.getInstance;
            getUniqueID = _syncfusionEj2Base.getUniqueID;
            getValue = _syncfusionEj2Base.getValue;
            remove = _syncfusionEj2Base.remove;
            removeClass = _syncfusionEj2Base.removeClass;
            rippleEffect = _syncfusionEj2Base.rippleEffect;
            select = _syncfusionEj2Base.select;
            setValue = _syncfusionEj2Base.setValue;
        }, function (_syncfusionEj2Buttons) {
            Button = _syncfusionEj2Buttons.Button;
        }, function (_syncfusionEj2Popups) {
            Popup = _syncfusionEj2Popups.Popup;
            getZindexPartial = _syncfusionEj2Popups.getZindexPartial;
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

            _export('Item', Item = function (_ChildProperty) {
                _inherits(Item, _ChildProperty);

                function Item() {
                    _classCallCheck(this, Item);

                    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
                }

                return Item;
            }(ChildProperty));

            __decorate([Property('')], Item.prototype, "iconCss", void 0);
            __decorate([Property('')], Item.prototype, "id", void 0);
            __decorate([Property(false)], Item.prototype, "separator", void 0);
            __decorate([Property('')], Item.prototype, "text", void 0);
            __decorate([Property('')], Item.prototype, "url", void 0);

            /**
             * Common modules
             */

            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            classNames = {
                DISABLED: 'e-disabled',
                FOCUS: 'e-focused',
                ICON: 'e-menu-icon',
                ITEM: 'e-item',
                POPUP: 'e-dropdown-popup',
                RTL: 'e-rtl',
                SEPARATOR: 'e-separator',
                VERTICAL: 'e-vertical'
            };

            _export('DropDownButton', DropDownButton = function (_Component) {
                _inherits(DropDownButton, _Component);

                /**
                 * Constructor for creating the widget
                 * @param  {DropDownButtonModel} options?
                 * @param  {string|HTMLButtonElement} element?
                 */
                function DropDownButton(options, element) {
                    _classCallCheck(this, DropDownButton);

                    return _possibleConstructorReturn(this, (DropDownButton.__proto__ || Object.getPrototypeOf(DropDownButton)).call(this, options, element));
                }

                _createClass(DropDownButton, [{
                    key: 'preRender',
                    value: function preRender() {}
                    /** */

                    /**
                     * Get the properties to be maintained in the persisted state.
                     * @returns string
                     */

                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist([]);
                    }
                }, {
                    key: 'toggle',
                    value: function toggle() {
                        this.canOpen() ? this.openPopUp() : this.closePopup();
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
                    key: 'createPopup',
                    value: function createPopup() {
                        var _attributes;

                        var div = createElement('div', {
                            className: classNames.POPUP,
                            id: this.element.id + '-popup'
                        });
                        document.body.appendChild(div);
                        this.dropDown = new Popup(div, {
                            relateTo: this.element,
                            collision: { X: Browser.isDevice ? 'fit' : 'flip', Y: 'flip' },
                            position: { X: 'left', Y: 'bottom' },
                            targetType: 'relative',
                            content: this.target ? this.getTargetElement() : '',
                            zIndex: getZindexPartial(div)
                        });
                        this.dropDown.hide();
                        attributes(this.element, (_attributes = {}, _defineProperty(_attributes, 'role', 'menu'), _defineProperty(_attributes, 'aria-haspopup', this.items.length || this.target ? 'true' : 'false'), _defineProperty(_attributes, 'aria-expanded', 'false'), _defineProperty(_attributes, 'aria-owns', this.getPopUpElement().id), _attributes));
                        if (this.cssClass) {
                            addClass([div], this.cssClass.split(' '));
                        }
                        if (this.enableRtl) {
                            div.classList.add(classNames.RTL);
                        }
                    }
                }, {
                    key: 'getTargetElement',
                    value: function getTargetElement() {
                        return typeof this.target === 'string' ? select(this.target) : this.target;
                    }
                }, {
                    key: 'createItems',
                    value: function createItems(items) {
                        var showIcon = this.hasIcon(items, 'iconCss');
                        var span = void 0;
                        var item = void 0;
                        var li = void 0;
                        var eventArgs = void 0;
                        var ul = createElement('ul', {
                            attrs: { 'tabindex': '0' }
                        });
                        for (var i = 0; i < items.length; i++) {
                            item = items[i];
                            li = createElement('li', {
                                innerHTML: item.url ? '' : item.text,
                                className: item.separator ? classNames.ITEM + ' ' + classNames.SEPARATOR : classNames.ITEM,
                                attrs: { 'role': 'menuItem', 'tabindex': '-1' },
                                id: item.id ? item.id : getUniqueID('e-' + this.getModuleName() + '-item')
                            });
                            if (item.iconCss) {
                                span = createElement('span', { className: classNames.ICON + ' ' + item.iconCss });
                                li.insertBefore(span, li.childNodes[0]);
                            } else {
                                if (showIcon && !item.separator) {
                                    li.classList.add('e-blank-icon');
                                }
                            }
                            if (item.url) {
                                li.appendChild(this.createAnchor(item));
                            }
                            eventArgs = { item: item, element: li };
                            this.trigger('beforeItemRender', eventArgs);
                            ul.appendChild(li);
                        }
                        return ul;
                    }
                }, {
                    key: 'hasIcon',
                    value: function hasIcon(items, field) {
                        for (var i = 0, len = items.length; i < len; i++) {
                            if (items[i][field]) {
                                return true;
                            }
                        }
                        return false;
                    }
                }, {
                    key: 'createAnchor',
                    value: function createAnchor(item) {
                        return createElement('a', { className: 'e-menu-text e-menu-url', innerHTML: item.text, attrs: { 'href': item.url } });
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        this.button = new Button({
                            iconCss: this.iconCss, cssClass: this.cssClass, content: this.content,
                            disabled: this.disabled, enableRtl: this.enableRtl, enablePersistence: this.enablePersistence
                        });
                        this.button.appendTo(this.element);
                        if (!this.element.id) {
                            this.element.id = getUniqueID('e-' + this.getModuleName());
                        }
                        this.setIconPositionTop();
                        this.appendArrowSpan();
                        this.createPopup();
                        this.setActiveElem();
                    }
                }, {
                    key: 'setIconPositionTop',
                    value: function setIconPositionTop() {
                        var iconSpan = this.element.querySelector('.e-icon-left');
                        if (iconSpan && this.iconPosition === 'Top') {
                            addClass([this.element], 'e-top-icon-btn');
                            removeClass([iconSpan], 'e-icon-left');
                            addClass([iconSpan], 'e-icon-top');
                        }
                    }
                }, {
                    key: 'appendArrowSpan',
                    value: function appendArrowSpan() {
                        this.element.appendChild(createElement('span', {
                            className: 'e-btn-icon e-icons ' + 'e-icon-' + (this.cssClass.indexOf(classNames.VERTICAL) > -1 ? 'bottom' : 'right') + ' e-caret'
                        }));
                    }
                }, {
                    key: 'setActiveElem',
                    value: function setActiveElem() {
                        this.activeElem = this.element;
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'dropdown-btn';
                    }
                }, {
                    key: 'canOpen',
                    value: function canOpen() {
                        return this.getPopUpElement().classList.contains('e-popup-close');
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this3 = this;

                        detach(this.element.querySelector('span.e-caret'));
                        _get(DropDownButton.prototype.__proto__ || Object.getPrototypeOf(DropDownButton.prototype), 'destroy', this).call(this);
                        this.button.destroy();
                        ['role', 'aria-haspopup', 'aria-expanded', 'aria-owns'].forEach(function (key) {
                            _this3.element.removeAttribute(key);
                        });
                        removeClass([this.element, this.activeElem], ['e-ddb-active', 'e-btn']);
                        detach(this.getPopUpElement());
                        this.unWireEvents();
                    }
                }, {
                    key: 'getPopUpElement',
                    value: function getPopUpElement() {
                        return this.dropDown.element;
                    }
                }, {
                    key: 'getULElement',
                    value: function getULElement() {
                        return this.getPopUpElement().children[0];
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        var popupElement = this.getPopUpElement();
                        EventHandler.add(document, 'click', this.clickHandler, this);
                        EventHandler.add(this.element, 'keydown', this.keyBoardHandler, this);
                        if (!this.target) {
                            EventHandler.add(popupElement, 'keydown', this.keyBoardHandler, this);
                        }
                        rippleEffect(popupElement, { selector: '.' + classNames.ITEM });
                    }
                }, {
                    key: 'keyBoardHandler',
                    value: function keyBoardHandler(e) {
                        if (e.target === this.element && (e.keyCode === 9 || !e.altKey && e.keyCode === 40 || e.keyCode === 38)) {
                            return;
                        } else {
                            if (e.keyCode !== 9) {
                                e.preventDefault();
                            }
                        }
                        switch (e.keyCode) {
                            case 38:
                            case 40:
                                if (e.altKey && (e.keyCode === 38 || e.keyCode === 40)) {
                                    this.keyEventHandler(e);
                                } else {
                                    this.upDownKeyHandler(e);
                                }
                                break;
                            case 9:
                            case 13:
                            case 27:
                            case 32:
                                this.keyEventHandler(e);
                                break;
                        }
                    }
                }, {
                    key: 'upDownKeyHandler',
                    value: function upDownKeyHandler(e) {
                        var ul = this.getULElement();
                        var defaultIdx = e.keyCode === 40 ? 0 : ul.childElementCount - 1;
                        var liIdx = defaultIdx;
                        var li = null;
                        for (var i = 0, len = ul.children.length; i < len; i++) {
                            if (ul.children[i].classList.contains(classNames.FOCUS)) {
                                li = ul.children[i];
                                liIdx = i;
                                li.classList.remove(classNames.FOCUS);
                                e.keyCode === 40 ? liIdx++ : liIdx--;
                                if (liIdx === (e.keyCode === 40 ? ul.childElementCount : -1)) {
                                    liIdx = defaultIdx;
                                }
                            }
                        }
                        li = ul.children[liIdx];
                        liIdx = this.isValidLI(li, liIdx, e.keyCode);
                        if (liIdx !== -1) {
                            addClass([ul.children[liIdx]], classNames.FOCUS);
                            ul.children[liIdx].focus();
                        }
                    }
                }, {
                    key: 'isValidLI',
                    value: function isValidLI(li, index, keyCode) {
                        var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

                        if (li.classList.contains(classNames.SEPARATOR) || li.classList.contains(classNames.DISABLED)) {
                            if (index === (keyCode === 40 ? this.items.length - 1 : 0)) {
                                index = keyCode === 40 ? 0 : this.items.length - 1;
                            } else {
                                keyCode === 40 ? index++ : index--;
                            }
                        }
                        li = this.getULElement().children[index];
                        if (li.classList.contains(classNames.SEPARATOR) || li.classList.contains(classNames.DISABLED)) {
                            count++;
                            if (count === this.items.length) {
                                return index = -1;
                            }
                            index = this.isValidLI(li, index, keyCode, count);
                        }
                        return index;
                    }
                }, {
                    key: 'keyEventHandler',
                    value: function keyEventHandler(e) {
                        if (e.keyCode === 27 || e.keyCode === 38 || e.keyCode === 9) {
                            if (!this.canOpen()) {
                                this.closePopup(e);
                                this.element.focus();
                            }
                        } else {
                            this.clickHandler(e);
                        }
                    }
                }, {
                    key: 'getLI',
                    value: function getLI(elem) {
                        return elem.tagName === 'LI' ? elem : closest(elem, 'li');
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(e) {
                        var trgt = e.target;
                        var canOpen = this.canOpen();
                        if (closest(trgt, '#' + this.element.id)) {
                            if (canOpen) {
                                this.openPopUp(e);
                            } else {
                                this.closePopup(e);
                                this.activeElem.focus();
                            }
                        } else {
                            if (closest(trgt, '#' + this.getPopUpElement().id)) {
                                var eventArgs = void 0;
                                var liIdx = void 0;
                                var item = void 0;
                                var li = this.getLI(trgt);
                                if (li) {
                                    liIdx = Array.prototype.indexOf.call(this.getULElement().children, li);
                                    item = this.items[liIdx];
                                    if (item) {
                                        eventArgs = { element: li, item: item };
                                        this.trigger('select', eventArgs);
                                    }
                                    this.closePopup(e);
                                    this.activeElem.focus();
                                }
                            } else {
                                if (!canOpen) {
                                    this.closePopup(e);
                                }
                            }
                        }
                    }
                }, {
                    key: 'openPopUp',
                    value: function openPopUp() {
                        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                        if (!this.target) {
                            this.getPopUpElement().appendChild(this.createItems(this.items));
                        }
                        var ul = this.getULElement();
                        var beforeOpenArgs = { element: ul, items: this.items, event: e, cancel: false };
                        this.trigger('beforeOpen', beforeOpenArgs);
                        if (!beforeOpenArgs.cancel) {
                            this.dropDown.show();
                            addClass([this.activeElem], 'e-ddb-active');
                            this.element.setAttribute('aria-expanded', 'true');
                            ul.focus();
                            var openArgs = { element: ul, items: this.items };
                            this.trigger('open', openArgs);
                        }
                    }
                }, {
                    key: 'closePopup',
                    value: function closePopup() {
                        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                        var ul = this.getULElement();
                        var beforeCloseArgs = { element: ul, items: this.items, event: e, cancel: false };
                        this.trigger('beforeClose', beforeCloseArgs);
                        if (!beforeCloseArgs.cancel) {
                            this.dropDown.hide();
                            removeClass([this.activeElem], 'e-ddb-active');
                            this.element.setAttribute('aria-expanded', 'false');
                            var closeArgs = { element: ul, items: this.items };
                            this.trigger('close', closeArgs);
                            if (!this.target) {
                                detach(ul);
                            }
                        }
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        EventHandler.remove(document, 'click', this.clickHandler);
                        EventHandler.remove(this.element, 'keydown', this.keyBoardHandler);
                        EventHandler.remove(this.getPopUpElement(), 'keydown', this.keyBoardHandler);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var btnModel = ['content', 'cssClass', 'iconCss', 'disabled', 'enableRtl'];
                        if (newProp.iconPosition === 'Left') {
                            btnModel.push('iconPosition');
                        }
                        this.button.setProperties(getModel(newProp, btnModel));
                        var popupElement = this.getPopUpElement();
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(newProp)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var prop = _step2.value;

                                switch (prop) {
                                    case 'content':
                                        if (!this.element.querySelector('span.e-caret')) {
                                            this.appendArrowSpan();
                                        }
                                        break;
                                    case 'cssClass':
                                        if (newProp.cssClass.indexOf(classNames.VERTICAL) > -1) {
                                            var arrowSpan = this.element.querySelector('span.e-caret');
                                            classList(arrowSpan, ['e-icon-bottom'], ['e-icon-right']);
                                        }
                                        if (oldProp.cssClass) {
                                            removeClass([popupElement], oldProp.cssClass.split(' '));
                                        }
                                        if (newProp.cssClass) {
                                            addClass([popupElement], newProp.cssClass.split(' '));
                                        }
                                        break;
                                    case 'iconPosition':
                                        this.setIconPositionTop();
                                        break;
                                    case 'enableRtl':
                                        popupElement.classList.toggle(classNames.RTL);
                                        break;
                                    case 'target':
                                        this.target = newProp.target;
                                        detach(this.getULElement());
                                        popupElement.appendChild(this.getTargetElement());
                                        this.dropDown.content = this.getTargetElement();
                                        break;
                                    case 'items':
                                        this.dropDown.refresh();
                                        if (popupElement.classList.contains('e-popup-open')) {
                                            classList(popupElement, ['e-popup-close'], ['e-popup-open']);
                                        }
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
                }]);

                return DropDownButton;
            }(Component));

            __decorate$1([Property('')], DropDownButton.prototype, "content", void 0);
            __decorate$1([Property('')], DropDownButton.prototype, "cssClass", void 0);
            __decorate$1([Property(false)], DropDownButton.prototype, "disabled", void 0);
            __decorate$1([Property('')], DropDownButton.prototype, "iconCss", void 0);
            __decorate$1([Property('Left')], DropDownButton.prototype, "iconPosition", void 0);
            __decorate$1([Collection([], Item)], DropDownButton.prototype, "items", void 0);
            __decorate$1([Property('')], DropDownButton.prototype, "target", void 0);
            __decorate$1([Event()], DropDownButton.prototype, "beforeItemRender", void 0);
            __decorate$1([Event()], DropDownButton.prototype, "beforeOpen", void 0);
            __decorate$1([Event()], DropDownButton.prototype, "beforeClose", void 0);
            __decorate$1([Event()], DropDownButton.prototype, "close", void 0);
            __decorate$1([Event()], DropDownButton.prototype, "open", void 0);
            __decorate$1([Event()], DropDownButton.prototype, "select", void 0);
            _export('DropDownButton', DropDownButton = __decorate$1([NotifyPropertyChanges], DropDownButton));

            /**
             * DropDownButton modules
             */

            __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            RTL = 'e-rtl';
            TAGNAME = 'EJS-SPLITBUTTON';

            _export('SplitButton', SplitButton = function (_DropDownButton) {
                _inherits(SplitButton, _DropDownButton);

                /**
                 * Constructor for creating the widget
                 * @param  {SplitButtonModel} options?
                 * @param  {string|HTMLButtonElement} element?
                 */
                function SplitButton(options, element) {
                    _classCallCheck(this, SplitButton);

                    return _possibleConstructorReturn(this, (SplitButton.__proto__ || Object.getPrototypeOf(SplitButton)).call(this, options, element));
                }
                /**
                 * Initialize Angular support.
                 * @private
                 */


                _createClass(SplitButton, [{
                    key: 'preRender',
                    value: function preRender() {
                        var ele = this.element;
                        if (ele.tagName === TAGNAME) {
                            var ejInstance = getValue('ej2_instances', ele);
                            var btn = createElement('button');
                            var wrapper = createElement(TAGNAME, { className: 'e-' + this.getModuleName() + '-wrapper' });
                            for (var idx = 0, len = ele.attributes.length; idx < len; idx++) {
                                btn.setAttribute(ele.attributes[idx].nodeName, ele.attributes[idx].nodeValue);
                            }
                            ele.parentNode.insertBefore(wrapper, ele);
                            detach(ele);
                            ele = btn;
                            wrapper.appendChild(ele);
                            setValue('ej2_instances', ejInstance, ele);
                            this.wrapper = wrapper;
                            this.element = ele;
                        }
                        if (!this.element.id) {
                            this.element.id = getUniqueID('e-' + this.getModuleName());
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.initWrapper();
                        this.createPrimaryButton();
                        this.createSecondaryButton();
                        this.setAria();
                        this.wireEvents();
                    }
                }, {
                    key: 'initWrapper',
                    value: function initWrapper() {
                        if (!this.wrapper) {
                            this.wrapper = createElement('div', { className: 'e-' + this.getModuleName() + '-wrapper' });
                            this.element.parentNode.insertBefore(this.wrapper, this.element);
                        }
                        this.element.classList.remove('e-' + this.getModuleName());
                        if (this.enableRtl) {
                            this.wrapper.classList.add(RTL);
                        }
                        if (this.cssClass) {
                            addClass([this.wrapper], this.cssClass.split(' '));
                        }
                    }
                }, {
                    key: 'createPrimaryButton',
                    value: function createPrimaryButton() {
                        var btnModel = {
                            cssClass: this.cssClass,
                            enableRtl: this.enableRtl,
                            iconCss: this.iconCss,
                            content: this.content,
                            disabled: this.disabled
                        };
                        this.primaryBtnObj = new Button(btnModel, this.element);
                        this.element.classList.add('e-' + this.getModuleName());
                        this.wrapper.appendChild(this.element);
                        this.setIconPositionTop();
                        this.setActiveElem();
                    }
                }, {
                    key: 'createSecondaryButton',
                    value: function createSecondaryButton() {
                        var _this5 = this;

                        var btnElem = createElement('button', {
                            className: 'e-icon-btn',
                            attrs: { 'tabindex': '-1' },
                            id: this.element.id + '_dropdownbtn'
                        });
                        this.wrapper.appendChild(btnElem);
                        var dropDownBtnModel = {
                            cssClass: this.cssClass,
                            disabled: this.disabled,
                            enableRtl: this.enableRtl,
                            items: this.items,
                            target: this.target,
                            beforeItemRender: function beforeItemRender(args) {
                                _this5.trigger('beforeItemRender', args);
                            },
                            beforeOpen: function beforeOpen(args) {
                                _this5.trigger('beforeOpen', args);
                            },
                            open: function open(args) {
                                _this5.trigger('open', args);
                            },
                            close: function close(args) {
                                _this5.trigger('close', args);
                            },
                            select: function select(args) {
                                _this5.trigger('select', args);
                            }
                        };
                        this.secondaryBtnObj = new DropDownButton(dropDownBtnModel, btnElem);
                        this.secondaryBtnObj.dropDown.relateTo = this.wrapper;
                        this.dropDown = this.secondaryBtnObj.dropDown;
                        this.secondaryBtnObj.activeElem = this.element;
                        EventHandler.remove(this.getPopUpElement(), 'keydown', this.secondaryBtnObj.keyBoardHandler);
                        this.secondaryBtnObj.element.querySelector('.e-btn-icon').classList.remove('e-icon-right');
                    }
                }, {
                    key: 'setAria',
                    value: function setAria() {
                        attributes(this.element, {
                            'role': 'listbox', 'aria-expanded': 'false', 'aria-haspopup': 'true',
                            'aria-label': this.element.textContent + ' splitbutton', 'aria-owns': this.secondaryBtnObj.dropDown.element.id
                        });
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'split-btn';
                    }
                }, {
                    key: 'toggle',
                    value: function toggle() {
                        this.secondaryBtnObj.toggle();
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this6 = this;

                        this.primaryBtnObj.destroy();
                        this.secondaryBtnObj.destroy();
                        if (this.wrapper.tagName === TAGNAME) {
                            this.wrapper.innerHTML = '';
                            removeClass([this.wrapper], ['e-rtl', 'e-' + this.getModuleName() + '-wrapper']);
                            removeClass([this.wrapper], this.cssClass.split(' '));
                        } else {
                            removeClass([this.element], ['e-' + this.getModuleName(), RTL]);
                            ['role', 'aria-label', 'aria-haspopup', 'aria-expanded', 'aria-owns'].forEach(function (key) {
                                _this6.element.removeAttribute(key);
                            });
                            this.wrapper.parentNode.insertBefore(this.element, this.wrapper);
                            remove(this.wrapper);
                        }
                        this.unWireEvents();
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        EventHandler.add(this.element, 'click', this.primaryBtnClickHandler, this);
                        EventHandler.add(this.getPopUpElement(), 'keydown', this.keyBoardHandler, this);
                        new KeyboardEvents(this.element, {
                            keyAction: this.btnKeyBoardHandler.bind(this),
                            keyConfigs: {
                                altdownarrow: 'alt+downarrow'
                            }
                        });
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        EventHandler.remove(this.element, 'click', this.primaryBtnClickHandler);
                        getInstance(this.element, KeyboardEvents).destroy();
                    }
                }, {
                    key: 'primaryBtnClickHandler',
                    value: function primaryBtnClickHandler() {
                        this.trigger('click', { element: this.element });
                    }
                }, {
                    key: 'btnKeyBoardHandler',
                    value: function btnKeyBoardHandler(e) {
                        switch (e.action) {
                            case 'altdownarrow':
                                this.clickHandler(e);
                                break;
                        }
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var model = ['content', 'iconCss', 'cssClass', 'disabled', 'enableRtl'];
                        if (newProp.iconPosition === 'Left') {
                            model.push('iconPosition');
                        }
                        this.primaryBtnObj.setProperties(getModel(newProp, model));
                        model = ['items', 'beforeOpen', 'beforeItemRender', 'select', 'open', 'close', 'cssClass', 'disabled', 'enableRtl'];
                        this.secondaryBtnObj.setProperties(getModel(newProp, model));
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = Object.keys(newProp)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var prop = _step3.value;

                                switch (prop) {
                                    case 'cssClass':
                                        if (oldProp.cssClass) {
                                            removeClass([this.wrapper], oldProp.cssClass.split(' '));
                                        }
                                        addClass([this.wrapper], newProp.cssClass.split(' '));
                                        break;
                                    case 'iconPosition':
                                        this.setIconPositionTop();
                                        break;
                                    case 'enableRtl':
                                        if (newProp.enableRtl) {
                                            addClass([this.wrapper], RTL);
                                        } else {
                                            removeClass([this.wrapper], RTL);
                                        }
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
                }]);

                return SplitButton;
            }(DropDownButton));

            __decorate$2([Property('')], SplitButton.prototype, "content", void 0);
            __decorate$2([Property('')], SplitButton.prototype, "cssClass", void 0);
            __decorate$2([Property(false)], SplitButton.prototype, "disabled", void 0);
            __decorate$2([Property('')], SplitButton.prototype, "iconCss", void 0);
            __decorate$2([Property('Left')], SplitButton.prototype, "iconPosition", void 0);
            __decorate$2([Collection([], Item)], SplitButton.prototype, "items", void 0);
            __decorate$2([Property('')], SplitButton.prototype, "target", void 0);
            __decorate$2([Event()], SplitButton.prototype, "beforeItemRender", void 0);
            __decorate$2([Event()], SplitButton.prototype, "beforeOpen", void 0);
            __decorate$2([Event()], SplitButton.prototype, "beforeClose", void 0);
            __decorate$2([Event()], SplitButton.prototype, "click", void 0);
            __decorate$2([Event()], SplitButton.prototype, "close", void 0);
            __decorate$2([Event()], SplitButton.prototype, "open", void 0);
            __decorate$2([Event()], SplitButton.prototype, "select", void 0);
            _export('SplitButton', SplitButton = __decorate$2([NotifyPropertyChanges], SplitButton));

            /**
             * Split Button modules
             */

            /**
             * SplitButton all module
             */

            _export('getModel', getModel);

            _export('Item', Item);

            _export('DropDownButton', DropDownButton);

            _export('SplitButton', SplitButton);
        }
    };
});

//# sourceMappingURL=ej2-splitbuttons.es2015-compiled.js.map