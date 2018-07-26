'use strict';

System.register(['@syncfusion/ej2-base', '@syncfusion/ej2-popups', '@syncfusion/ej2-buttons', '@syncfusion/ej2-lists', '@syncfusion/ej2-data', '@syncfusion/ej2-inputs'], function (_export, _context) {
    "use strict";

    var Animation, Browser, ChildProperty, Collection, Complex, Component, Draggable, Droppable, Event, EventHandler, KeyboardEvents, L10n, NotifyPropertyChanges, Property, Touch, _addClass, append, attributes, classList, closest, compile, createElement, detach, formatUnit, getInstance, getUniqueID, getValue, isNullOrUndefined, isUndefined, isVisible, matches, removeClass, rippleEffect, _select, selectAll, setStyleAttribute, setValue, Popup, calculatePosition, createSpinner, fit, getScrollableParent, getZindexPartial, _hideSpinner, isCollide, _showSpinner, Button, createCheckBox, rippleMouseHandler, ListBase, DataManager, Query, Input, _createClass, _get, _typeof, __decorate, CLS_ROOT, CLS_RTL, CLS_DISABLE, CLS_HSCROLLBAR, CLS_HSCROLLCON, CLS_NAVARROW, CLS_NAVRIGHTARROW, CLS_NAVLEFTARROW, CLS_HSCROLLNAV, CLS_HSCROLLNAVRIGHT, CLS_HSCROLLNAVLEFT, CLS_DEVICE, HScroll, __decorate$1, CLS_ITEMS, CLS_ITEM, CLS_RTL$1, CLS_SEPARATOR, CLS_POPUPICON, CLS_POPUPDOWN, CLS_TEMPLATE, CLS_DISABLE$1, CLS_POPUPTEXT, CLS_TBARTEXT, CLS_TBAROVERFLOW, CLS_POPOVERFLOW, CLS_TBARBTN, CLS_TBARNAV, CLS_TBARSCRLNAV, CLS_TBARRIGHT, CLS_TBARLEFT, CLS_TBARCENTER, CLS_TBARPOS, CLS_TBARSCROLL, CLS_POPUPNAV, CLS_POPUPCLASS, CLS_POPUP, CLS_TBARBTNTEXT, CLS_TBARNAVACT, CLS_TBARIGNORE, CLS_POPPRI, CLS_HIDDEN, Item, Toolbar, __decorate$2, CLS_ACRDN_ROOT, CLS_ROOT$1, CLS_ITEM$1, CLS_ITEMFOCUS, CLS_ITEMHIDE, CLS_HEADER, CLS_HEADERICN, CLS_HEADERCTN, CLS_CONTENT, CLS_CTENT, CLS_TOOGLEICN, CLS_COLLAPSEICN, CLS_EXPANDICN, CLS_RTL$2, CLS_CTNHIDE, CLS_SLCT, CLS_SLCTED, CLS_ACTIVE, CLS_ANIMATE, CLS_DISABLE$2, CLS_TOGANIMATE, CLS_NEST, CLS_EXPANDSTATE, AccordionActionSettings, AccordionAnimationSettings, AccordionItem, Accordion, __decorate$3, DOWNARROW, ENTER, ESCAPE, FOCUSED, HEADER, LEFTARROW, RIGHTARROW, RTL, SELECTED, SEPARATOR, UPARROW, WRAPPER, CARET, ITEM, DISABLED, HIDE, ICONS, MenuItem, ContextMenu, __decorate$4, CLS_TAB, CLS_HEADER$1, CLS_CONTENT$1, CLS_NEST$1, CLS_ITEMS$1, CLS_ITEM$2, CLS_TEMPLATE$1, CLS_RTL$3, CLS_ACTIVE$1, CLS_DISABLE$3, CLS_HIDDEN$1, CLS_FOCUS, CLS_ICONS, CLS_ICON, CLS_ICON_CLOSE, CLS_CLOSE_SHOW, CLS_TEXT, CLS_INDICATOR, CLS_WRAP, CLS_TEXT_WRAP, CLS_TAB_ICON, CLS_TB_ITEMS, CLS_TB_ITEM, CLS_TB_POP, CLS_TB_POPUP, CLS_POPUP_OPEN, CLS_POPUP_CLOSE, CLS_PROGRESS, CLS_IGNORE, CLS_OVERLAY, TabActionSettings, TabAnimationSettings, Header, TabItem, Tab, __decorate$5, ROOT, COLLAPSIBLE, EXPANDABLE, LISTITEM, LISTTEXT, PARENTITEM, HOVER, ACTIVE, LOAD, PROCESS, ICON, TEXTWRAP, INPUT, INPUTGROUP, TREEINPUT, EDITING, RTL$1, DRAGITEM, DROPPABLE, DRAGGING, SIBLING, DROPIN, DROPNEXT, DROPOUT, NODROP, FULLROWWRAP, FULLROW, SELECTED$1, EXPANDED, NODECOLLAPSED, DISABLE, DROPCOUNT, CHECK, INDETERMINATE, CHECKBOXWRAP, CHECKBOXFRAME, CHECKBOXRIPPLE, FOCUS, IMAGE, BIGGER, SMALL, treeAriaAttr, FieldsSettings, ActionSettings, NodeAnimationSettings, TreeView, __decorate$6, CONTROL, ROOT$1, DOCKER, CLOSE, OPEN, TRASITION, DEFAULTBACKDROP, CONTEXTBACKDROP, RIGHT, LEFT, OVER, PUSH, SLIDE, VISIBILITY, MAINCONTENTANIMATION, DISABLEANIMATION, CONTEXT, SIDEBARABSOLUTE, Sidebar;

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

    return {
        setters: [function (_syncfusionEj2Base) {
            Animation = _syncfusionEj2Base.Animation;
            Browser = _syncfusionEj2Base.Browser;
            ChildProperty = _syncfusionEj2Base.ChildProperty;
            Collection = _syncfusionEj2Base.Collection;
            Complex = _syncfusionEj2Base.Complex;
            Component = _syncfusionEj2Base.Component;
            Draggable = _syncfusionEj2Base.Draggable;
            Droppable = _syncfusionEj2Base.Droppable;
            Event = _syncfusionEj2Base.Event;
            EventHandler = _syncfusionEj2Base.EventHandler;
            KeyboardEvents = _syncfusionEj2Base.KeyboardEvents;
            L10n = _syncfusionEj2Base.L10n;
            NotifyPropertyChanges = _syncfusionEj2Base.NotifyPropertyChanges;
            Property = _syncfusionEj2Base.Property;
            Touch = _syncfusionEj2Base.Touch;
            _addClass = _syncfusionEj2Base.addClass;
            append = _syncfusionEj2Base.append;
            attributes = _syncfusionEj2Base.attributes;
            classList = _syncfusionEj2Base.classList;
            closest = _syncfusionEj2Base.closest;
            compile = _syncfusionEj2Base.compile;
            createElement = _syncfusionEj2Base.createElement;
            detach = _syncfusionEj2Base.detach;
            formatUnit = _syncfusionEj2Base.formatUnit;
            getInstance = _syncfusionEj2Base.getInstance;
            getUniqueID = _syncfusionEj2Base.getUniqueID;
            getValue = _syncfusionEj2Base.getValue;
            isNullOrUndefined = _syncfusionEj2Base.isNullOrUndefined;
            isUndefined = _syncfusionEj2Base.isUndefined;
            isVisible = _syncfusionEj2Base.isVisible;
            matches = _syncfusionEj2Base.matches;
            removeClass = _syncfusionEj2Base.removeClass;
            rippleEffect = _syncfusionEj2Base.rippleEffect;
            _select = _syncfusionEj2Base.select;
            selectAll = _syncfusionEj2Base.selectAll;
            setStyleAttribute = _syncfusionEj2Base.setStyleAttribute;
            setValue = _syncfusionEj2Base.setValue;
        }, function (_syncfusionEj2Popups) {
            Popup = _syncfusionEj2Popups.Popup;
            calculatePosition = _syncfusionEj2Popups.calculatePosition;
            createSpinner = _syncfusionEj2Popups.createSpinner;
            fit = _syncfusionEj2Popups.fit;
            getScrollableParent = _syncfusionEj2Popups.getScrollableParent;
            getZindexPartial = _syncfusionEj2Popups.getZindexPartial;
            _hideSpinner = _syncfusionEj2Popups.hideSpinner;
            isCollide = _syncfusionEj2Popups.isCollide;
            _showSpinner = _syncfusionEj2Popups.showSpinner;
        }, function (_syncfusionEj2Buttons) {
            Button = _syncfusionEj2Buttons.Button;
            createCheckBox = _syncfusionEj2Buttons.createCheckBox;
            rippleMouseHandler = _syncfusionEj2Buttons.rippleMouseHandler;
        }, function (_syncfusionEj2Lists) {
            ListBase = _syncfusionEj2Lists.ListBase;
        }, function (_syncfusionEj2Data) {
            DataManager = _syncfusionEj2Data.DataManager;
            Query = _syncfusionEj2Data.Query;
        }, function (_syncfusionEj2Inputs) {
            Input = _syncfusionEj2Inputs.Input;
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

            CLS_ROOT = 'e-hscroll';
            CLS_RTL = 'e-rtl';
            CLS_DISABLE = 'e-overlay';
            CLS_HSCROLLBAR = 'e-hscroll-bar';
            CLS_HSCROLLCON = 'e-hscroll-content';
            CLS_NAVARROW = 'e-nav-arrow';
            CLS_NAVRIGHTARROW = 'e-nav-right-arrow';
            CLS_NAVLEFTARROW = 'e-nav-left-arrow';
            CLS_HSCROLLNAV = 'e-scroll-nav';
            CLS_HSCROLLNAVRIGHT = 'e-scroll-right-nav';
            CLS_HSCROLLNAVLEFT = 'e-scroll-left-nav';
            CLS_DEVICE = 'e-scroll-device';

            _export('HScroll', HScroll = function (_Component) {
                _inherits(HScroll, _Component);

                /**
                 * Initializes a new instance of the HScroll class.
                 * @param options  - Specifies HScroll model properties as options.
                 * @param element  - Specifies the element for which horizontal scrolling applies.
                 */
                function HScroll(options, element) {
                    _classCallCheck(this, HScroll);

                    return _possibleConstructorReturn(this, (HScroll.__proto__ || Object.getPrototypeOf(HScroll)).call(this, options, element));
                }
                /**
                 * Initialize the event handler
                 * @private
                 */


                _createClass(HScroll, [{
                    key: 'preRender',
                    value: function preRender() {
                        this.browser = Browser.info.name;
                        this.browserCheck = this.browser === 'mozilla';
                        this.isDevice = Browser.isDevice;
                        var element = this.element;
                        this.ieCheck = this.browser === 'edge' || this.browser === 'msie';
                        this.initialize();
                        if (element.id === '') {
                            element.id = getUniqueID('hscroll');
                            this.uniqueId = true;
                        }
                        element.style.display = 'block';
                        if (this.enableRtl) {
                            element.classList.add(CLS_RTL);
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.touchModule = new Touch(this.element, { scroll: this.touchHandler.bind(this) });
                        if (!this.isDevice) {
                            this.createNavIcon(this.element);
                            EventHandler.add(this.scrollEle, 'scroll', this.scrollHandler, this);
                        } else {
                            this.element.classList.add(CLS_DEVICE);
                        }
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        var scrollEle = createElement('div', { className: CLS_HSCROLLCON });
                        var scrollDiv = createElement('div', { className: CLS_HSCROLLBAR });
                        scrollDiv.setAttribute('tabindex', '-1');
                        var ele = this.element;
                        var innerEle = [].slice.call(ele.children);
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = innerEle[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var _ele = _step.value;

                                scrollEle.appendChild(_ele);
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

                        scrollDiv.appendChild(scrollEle);
                        ele.appendChild(scrollDiv);
                        scrollDiv.style.overflowX = 'hidden';
                        this.scrollEle = scrollDiv;
                        this.scrollItems = scrollEle;
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        var keyEntity = ['scrollStep'];
                        return this.addOnPersist(keyEntity);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'hScroll';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var ele = this.element;
                        ele.style.display = '';
                        ele.classList.remove(CLS_ROOT);
                        var nav = selectAll('.e-' + ele.id + '_nav.' + CLS_HSCROLLNAV, ele);
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = [].slice.call(this.scrollItems.children)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var elem = _step2.value;

                                ele.appendChild(elem);
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

                        if (this.uniqueId) {
                            this.element.removeAttribute('id');
                        }
                        detach(this.scrollEle);
                        if (nav.length > 0) {
                            detach(nav[0]);
                            detach(nav[1]);
                        }
                        EventHandler.remove(this.scrollEle, 'scroll', this.scrollHandler);
                        this.touchModule.destroy();
                        this.touchModule = null;
                        _get(HScroll.prototype.__proto__ || Object.getPrototypeOf(HScroll.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'createNavIcon',
                    value: function createNavIcon(element) {
                        var id = element.id.concat('_nav');
                        var clsRight = 'e-' + element.id.concat('_nav ' + CLS_HSCROLLNAV + ' ' + CLS_HSCROLLNAVRIGHT);
                        var nav = createElement('div', { id: id.concat('_right'), className: clsRight });
                        nav.setAttribute('aria-disabled', 'false');
                        var navItem = createElement('div', { className: CLS_NAVRIGHTARROW + ' ' + CLS_NAVARROW + ' e-icons' });
                        var clsLeft = 'e-' + element.id.concat('_nav ' + CLS_HSCROLLNAV + ' ' + CLS_HSCROLLNAVLEFT);
                        var navEle = createElement('div', { id: id.concat('_left'), className: clsLeft + ' ' + CLS_DISABLE });
                        navEle.setAttribute('aria-disabled', 'true');
                        var navLeftItem = createElement('div', { className: CLS_NAVLEFTARROW + ' ' + CLS_NAVARROW + ' e-icons' });
                        navEle.appendChild(navLeftItem);
                        nav.appendChild(navItem);
                        nav.setAttribute('tabindex', '0');
                        element.appendChild(nav);
                        element.insertBefore(navEle, element.firstChild);
                        if (this.ieCheck) {
                            nav.classList.add('e-ie-align');
                            navEle.classList.add('e-ie-align');
                        }
                        this.eventBinding([nav, navEle]);
                    }
                }, {
                    key: 'onKeyPress',
                    value: function onKeyPress(e) {
                        var _this2 = this;

                        if (e.key === 'Enter') {
                            var timeoutFun = function timeoutFun() {
                                _this2.keyTimeout = true;
                                _this2.eleScrolling(10, e.target);
                            };
                            this.keyTimer = window.setTimeout(function () {
                                timeoutFun();
                            }, 100);
                        }
                    }
                }, {
                    key: 'onKeyUp',
                    value: function onKeyUp(e) {
                        if (e.key !== 'Enter') {
                            return;
                        }
                        if (this.keyTimeout) {
                            this.keyTimeout = false;
                        } else {
                            e.target.click();
                        }
                        clearTimeout(this.keyTimer);
                    }
                }, {
                    key: 'eventBinding',
                    value: function eventBinding(ele) {
                        var _this3 = this;

                        ele.forEach(function (el) {
                            new Touch(el, { tapHold: _this3.tabHoldHandler.bind(_this3), tapHoldThreshold: 500 });
                            el.addEventListener('keydown', _this3.onKeyPress.bind(_this3));
                            el.addEventListener('keyup', _this3.onKeyUp.bind(_this3));
                            el.addEventListener('mouseup', _this3.repeatScroll.bind(_this3));
                            el.addEventListener('touchend', _this3.repeatScroll.bind(_this3));
                            el.addEventListener('contextmenu', function (e) {
                                e.preventDefault();
                            });
                            EventHandler.add(el, 'click', _this3.clickEventHandler, _this3);
                        });
                    }
                }, {
                    key: 'repeatScroll',
                    value: function repeatScroll() {
                        clearInterval(this.timeout);
                    }
                }, {
                    key: 'tabHoldHandler',
                    value: function tabHoldHandler(e) {
                        var _this4 = this;

                        var trgt = e.originalEvent.target;
                        trgt = this.contains(trgt, CLS_HSCROLLNAV) ? trgt.firstElementChild : trgt;
                        var scrollDis = 10;
                        var timeoutFun = function timeoutFun() {
                            _this4.eleScrolling(scrollDis, trgt);
                        };
                        this.timeout = window.setInterval(function () {
                            timeoutFun();
                        }, 50);
                    }
                }, {
                    key: 'contains',
                    value: function contains(ele, className) {
                        return ele.classList.contains(className);
                    }
                }, {
                    key: 'eleScrolling',
                    value: function eleScrolling(scrollDis, trgt) {
                        var element = this.scrollEle;
                        var rootEle = this.element;
                        var classList$$1 = trgt.classList;
                        if (classList$$1.contains(CLS_HSCROLLNAV)) {
                            classList$$1 = trgt.querySelector('.' + CLS_NAVARROW).classList;
                        }
                        if (this.contains(rootEle, CLS_RTL) && this.browserCheck) {
                            scrollDis = -scrollDis;
                        }
                        var scrlLeft = element.scrollLeft;
                        if (!this.contains(rootEle, CLS_RTL) || this.browserCheck || this.ieCheck) {
                            if (classList$$1.contains(CLS_NAVRIGHTARROW)) {
                                element.scrollLeft = scrlLeft + scrollDis;
                            } else {
                                element.scrollLeft = scrlLeft - scrollDis;
                            }
                        } else {
                            if (classList$$1.contains(CLS_NAVLEFTARROW)) {
                                element.scrollLeft = scrlLeft + scrollDis;
                            } else {
                                element.scrollLeft = scrlLeft - scrollDis;
                            }
                        }
                    }
                }, {
                    key: 'clickEventHandler',
                    value: function clickEventHandler(e) {
                        this.eleScrolling(this.scrollStep, e.target);
                    }
                }, {
                    key: 'touchHandler',
                    value: function touchHandler(e) {
                        var ele = this.scrollEle;
                        var distance = void 0;
                        distance = e.distanceX;
                        if (this.ieCheck && this.contains(this.element, CLS_RTL)) {
                            distance = -distance;
                        }
                        if (e.scrollDirection === 'Left') {
                            ele.scrollLeft = ele.scrollLeft + distance;
                        } else if (e.scrollDirection === 'Right') {
                            ele.scrollLeft = ele.scrollLeft - distance;
                        }
                    }
                }, {
                    key: 'arrowDisabling',
                    value: function arrowDisabling(addDisable, removeDisable) {
                        addDisable.classList.add(CLS_DISABLE);
                        addDisable.setAttribute('aria-disabled', 'true');
                        addDisable.removeAttribute('tabindex');
                        clearInterval(this.timeout);
                        removeDisable.classList.remove(CLS_DISABLE);
                        removeDisable.setAttribute('aria-disabled', 'false');
                        removeDisable.setAttribute('tabindex', '0');
                        this.repeatScroll();
                    }
                }, {
                    key: 'scrollHandler',
                    value: function scrollHandler(e) {
                        var target = e.target;
                        var width = target.offsetWidth;
                        var rootEle = this.element;
                        var navLeftEle = this.element.querySelector('.' + CLS_HSCROLLNAVLEFT);
                        var navRightEle = this.element.querySelector('.' + CLS_HSCROLLNAVRIGHT);
                        var scrollLeft = target.scrollLeft;
                        if (scrollLeft <= 0) {
                            scrollLeft = -scrollLeft;
                        }
                        if (scrollLeft === 0) {
                            if (!this.contains(rootEle, CLS_RTL) || this.browserCheck || this.ieCheck) {
                                this.arrowDisabling(navLeftEle, navRightEle);
                            } else {
                                this.arrowDisabling(navRightEle, navLeftEle);
                            }
                        } else if (Math.ceil(width + scrollLeft + .1) >= target.scrollWidth) {
                            if (!this.contains(rootEle, CLS_RTL) || this.browserCheck || this.ieCheck) {
                                this.arrowDisabling(navRightEle, navLeftEle);
                            } else {
                                this.arrowDisabling(navLeftEle, navRightEle);
                            }
                        } else {
                            var disEle = this.element.querySelector('.' + CLS_HSCROLLNAV + '.' + CLS_DISABLE);
                            if (disEle) {
                                disEle.classList.remove(CLS_DISABLE);
                                disEle.setAttribute('aria-disabled', 'false');
                                disEle.setAttribute('tabindex', '0');
                            }
                        }
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = Object.keys(newProp)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var prop = _step3.value;

                                switch (prop) {
                                    case 'scrollStep':
                                        break;
                                    case 'enableRtl':
                                        newProp.enableRtl ? this.element.classList.add(CLS_RTL) : this.element.classList.remove(CLS_RTL);
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

                return HScroll;
            }(Component));

            __decorate([Property(40)], HScroll.prototype, "scrollStep", void 0);
            _export('HScroll', HScroll = __decorate([NotifyPropertyChanges], HScroll));

            /**
             * Navigation Common modules
             */

            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            CLS_ITEMS = 'e-toolbar-items';
            CLS_ITEM = 'e-toolbar-item';
            CLS_RTL$1 = 'e-rtl';
            CLS_SEPARATOR = 'e-separator';
            CLS_POPUPICON = 'e-popup-up-icon';
            CLS_POPUPDOWN = 'e-popup-down-icon';
            CLS_TEMPLATE = 'e-template';
            CLS_DISABLE$1 = 'e-overlay';
            CLS_POPUPTEXT = 'e-toolbar-text';
            CLS_TBARTEXT = 'e-popup-text';
            CLS_TBAROVERFLOW = 'e-overflow-show';
            CLS_POPOVERFLOW = 'e-overflow-hide';
            CLS_TBARBTN = 'e-tbar-btn';
            CLS_TBARNAV = 'e-hor-nav';
            CLS_TBARSCRLNAV = 'e-scroll-nav';
            CLS_TBARRIGHT = 'e-toolbar-right';
            CLS_TBARLEFT = 'e-toolbar-left';
            CLS_TBARCENTER = 'e-toolbar-center';
            CLS_TBARPOS = 'e-tbar-pos';
            CLS_TBARSCROLL = 'e-hscroll-content';
            CLS_POPUPNAV = 'e-hor-nav';
            CLS_POPUPCLASS = 'e-toolbar-pop';
            CLS_POPUP = 'e-toolbar-popup';
            CLS_TBARBTNTEXT = 'e-tbar-btn-text';
            CLS_TBARNAVACT = 'e-nav-active';
            CLS_TBARIGNORE = 'e-ignore';
            CLS_POPPRI = 'e-popup-alone';
            CLS_HIDDEN = 'e-hidden';

            _export('Item', Item = function (_ChildProperty) {
                _inherits(Item, _ChildProperty);

                function Item() {
                    _classCallCheck(this, Item);

                    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
                }

                return Item;
            }(ChildProperty));

            __decorate$1([Property('')], Item.prototype, "id", void 0);
            __decorate$1([Property('')], Item.prototype, "text", void 0);
            __decorate$1([Property('auto')], Item.prototype, "width", void 0);
            __decorate$1([Property('')], Item.prototype, "cssClass", void 0);
            __decorate$1([Property(false)], Item.prototype, "showAlwaysInPopup", void 0);
            __decorate$1([Property('')], Item.prototype, "prefixIcon", void 0);
            __decorate$1([Property('')], Item.prototype, "suffixIcon", void 0);
            __decorate$1([Property('None')], Item.prototype, "overflow", void 0);
            __decorate$1([Property('')], Item.prototype, "template", void 0);
            __decorate$1([Property('Button')], Item.prototype, "type", void 0);
            __decorate$1([Property('Both')], Item.prototype, "showTextOn", void 0);
            __decorate$1([Property(null)], Item.prototype, "htmlAttributes", void 0);
            __decorate$1([Property('')], Item.prototype, "tooltipText", void 0);
            __decorate$1([Property('Left')], Item.prototype, "align", void 0);
            /**
             * The Toolbar control contains a group of commands that are aligned horizontally.
             * ```html
             * <div id="toolbar"/>
             * <script>
             *   var toolbarObj = new Toolbar();
             *   toolbarObj.appendTo("#toolbar");
             * </script>
             * ```
             */

            _export('Toolbar', Toolbar = function (_Component2) {
                _inherits(Toolbar, _Component2);

                /**
                 * Initializes a new instance of the Toolbar class.
                 * @param options  - Specifies Toolbar model properties as options.
                 * @param element  - Specifies the element that is rendered as a Toolbar.
                 */
                function Toolbar(options, element) {
                    _classCallCheck(this, Toolbar);

                    var _this6 = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, options, element));

                    /**
                     * Contains the keyboard configuration of the Toolbar.
                     */
                    _this6.keyConfigs = {
                        moveLeft: 'leftarrow',
                        moveRight: 'rightarrow',
                        moveUp: 'uparrow',
                        moveDown: 'downarrow',
                        popupOpen: 'enter',
                        popupClose: 'escape',
                        tab: 'tab',
                        home: 'home',
                        end: 'end'
                    };
                    return _this6;
                }
                /**
                 * Removes the control from the DOM and also removes all its related events.
                 * @returns void.
                 */


                _createClass(Toolbar, [{
                    key: 'destroy',
                    value: function destroy() {
                        var _this7 = this;

                        var ele = this.element;
                        _get(Toolbar.prototype.__proto__ || Object.getPrototypeOf(Toolbar.prototype), 'destroy', this).call(this);
                        this.unwireEvents();
                        while (ele.firstChild) {
                            ele.removeChild(ele.firstChild);
                        }
                        if (this.trgtEle) {
                            ele.appendChild(this.ctrlTem);
                        }
                        this.clearProperty();
                        this.popObj = null;
                        this.tbarAlign = null;
                        this.remove(this.element, 'e-toolpop');
                        ele.removeAttribute('style');
                        ['aria-disabled', 'aria-orientation', 'aria-haspopup', 'role'].forEach(function (attrb) {
                            _this7.element.removeAttribute(attrb);
                        });
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        this.trigger('beforeCreate');
                        this.scrollModule = null;
                        this.popObj = null;
                        this.tbarItemsCol = this.items;
                        this.popupPriCount = 0;
                        if (this.enableRtl) {
                            this.add(this.element, CLS_RTL$1);
                        }
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        EventHandler.add(this.element, 'click', this.clickHandler, this);
                        window.addEventListener('resize', this.resize.bind(this));
                        this.keyModule = new KeyboardEvents(this.element, {
                            keyAction: this.keyActionHandler.bind(this),
                            keyConfigs: this.keyConfigs
                        });
                        EventHandler.add(this.element, 'keydown', this.docKeyDown, this);
                        this.element.setAttribute('tabIndex', '0');
                    }
                }, {
                    key: 'docKeyDown',
                    value: function docKeyDown(e) {
                        if (e.target.tagName === 'INPUT') {
                            return;
                        }
                        if (e.keyCode === 9 && e.target.classList.contains('e-hor-nav') === true && isVisible(this.popObj.element)) {
                            this.popObj.hide({ name: 'SlideUp', duration: 100 });
                        }
                        var keyCheck = e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 35 || e.keyCode === 36;
                        if (keyCheck) {
                            e.preventDefault();
                        }
                    }
                }, {
                    key: 'unwireEvents',
                    value: function unwireEvents() {
                        EventHandler.remove(this.element, 'click', this.clickHandler);
                        this.destroyHScroll();
                        this.keyModule.destroy();
                        EventHandler.remove(document, 'scroll', this.docEvent);
                        EventHandler.remove(this.element, 'keydown', this.docKeyDown);
                        EventHandler.remove(document, 'click', this.docEvent);
                    }
                }, {
                    key: 'clearProperty',
                    value: function clearProperty() {
                        this.tbarEle = [];
                        this.tbarAlgEle = { lefts: [], centers: [], rights: [] };
                    }
                }, {
                    key: 'docEvent',
                    value: function docEvent(e) {
                        var popEle = closest(e.target, '.e-popup');
                        if (this.popObj && isVisible(this.popObj.element) && !popEle) {
                            this.popObj.hide({ name: 'SlideUp', duration: 100 });
                        }
                    }
                }, {
                    key: 'destroyHScroll',
                    value: function destroyHScroll() {
                        if (this.scrollModule) {
                            if (this.tbarAlign) {
                                this.add(this.scrollModule.element, CLS_TBARPOS);
                            }
                            this.scrollModule.destroy();
                            this.scrollModule = null;
                        }
                    }
                }, {
                    key: 'destroyItems',
                    value: function destroyItems() {
                        [].slice.call(this.element.querySelectorAll('.' + CLS_ITEM)).forEach(function (el) {
                            detach(el);
                        });
                        var tbarItems = this.element.querySelector('.' + CLS_ITEMS);
                        if (this.tbarAlign) {
                            [].slice.call(tbarItems.children).forEach(function (el) {
                                detach(el);
                            });
                            this.tbarAlign = false;
                            this.remove(tbarItems, CLS_TBARPOS);
                        }
                        this.clearProperty();
                    }
                }, {
                    key: 'destroyMode',
                    value: function destroyMode() {
                        if (this.scrollModule) {
                            this.remove(this.scrollModule.element, CLS_RTL$1);
                            this.destroyHScroll();
                        }
                        if (this.popObj) {
                            this.popupRefresh(this.popObj.element, true);
                        }
                    }
                }, {
                    key: 'add',
                    value: function add(ele, val) {
                        ele.classList.add(val);
                    }
                }, {
                    key: 'remove',
                    value: function remove(ele, val) {
                        ele.classList.remove(val);
                    }
                }, {
                    key: 'elementFocus',
                    value: function elementFocus(ele) {
                        var fChild = ele.firstElementChild;
                        if (fChild) {
                            fChild.focus();
                            this.activeEleSwitch(ele);
                        } else {
                            ele.focus();
                        }
                    }
                }, {
                    key: 'clstElement',
                    value: function clstElement(tbrNavChk, trgt) {
                        var clst = void 0;
                        if (tbrNavChk && this.popObj && isVisible(this.popObj.element)) {
                            clst = this.popObj.element.querySelector('.' + CLS_ITEM);
                        } else if (this.element === trgt || tbrNavChk) {
                            clst = this.element.querySelector('.' + CLS_ITEM);
                        } else {
                            clst = closest(trgt, '.' + CLS_ITEM);
                        }
                        return clst;
                    }
                }, {
                    key: 'keyHandling',
                    value: function keyHandling(clst, e, trgt, navChk, scrollChk) {
                        var popObj = this.popObj;
                        var rootEle = this.element;
                        var popAnimate = { name: 'SlideUp', duration: 100 };
                        switch (e.action) {
                            case 'moveRight':
                                if (rootEle === trgt) {
                                    this.elementFocus(clst);
                                } else if (!navChk) {
                                    this.eleFocus(clst, 'next');
                                }
                                break;
                            case 'moveLeft':
                                if (!navChk) {
                                    this.eleFocus(clst, 'previous');
                                }
                                break;
                            case 'home':
                            case 'end':
                                var ele = void 0;
                                var nodes = void 0;
                                if (clst) {
                                    var popupCheck = closest(clst, '.e-popup');
                                    if (popupCheck) {
                                        if (isVisible(this.popObj.element)) {
                                            nodes = popupCheck.children;
                                            if (e.action === 'home') {
                                                ele = nodes[0];
                                            } else {
                                                ele = nodes[nodes.length - 1];
                                            }
                                        }
                                    } else {
                                        nodes = this.element.querySelectorAll('.' + CLS_ITEMS + ' .' + CLS_ITEM);
                                        if (e.action === 'home') {
                                            ele = nodes[0];
                                        } else {
                                            ele = nodes[nodes.length - 1];
                                        }
                                    }
                                    if (ele) {
                                        this.elementFocus(ele);
                                    }
                                }
                                break;
                            case 'moveUp':
                            case 'moveDown':
                                var value = e.action === 'moveUp' ? 'previous' : 'next';
                                if (popObj && closest(trgt, '.e-popup')) {
                                    var popEle = popObj.element;
                                    var popFrstEle = popEle.firstElementChild;
                                    if (value === 'previous' && popFrstEle === clst || value === 'next' && popEle.lastElementChild === clst) {
                                        return;
                                    } else {
                                        this.eleFocus(clst, value);
                                    }
                                } else if (e.action === 'moveDown' && popObj && isVisible(popObj.element)) {
                                    this.elementFocus(clst);
                                }
                                break;
                            case 'tab':
                                if (!scrollChk && !navChk) {
                                    var _ele2 = clst.firstElementChild;
                                    if (rootEle === trgt) {
                                        if (this.activeEle) {
                                            this.activeEle.focus();
                                        } else {
                                            this.activeEleRemove(_ele2);
                                            _ele2.focus();
                                        }
                                        this.element.removeAttribute('tabindex');
                                    }
                                }
                                break;
                            case 'popupClose':
                                if (popObj) {
                                    popObj.hide(popAnimate);
                                }
                                break;
                            case 'popupOpen':
                                if (!navChk) {
                                    return;
                                }
                                if (popObj && !isVisible(popObj.element)) {
                                    popObj.element.style.top = rootEle.offsetHeight + 'px';
                                    popObj.show({ name: 'SlideDown', duration: 100 });
                                } else {
                                    popObj.hide(popAnimate);
                                }
                                break;
                        }
                    }
                }, {
                    key: 'keyActionHandler',
                    value: function keyActionHandler(e) {
                        var trgt = e.target;
                        if (trgt.tagName === 'INPUT') {
                            return;
                        }
                        e.preventDefault();
                        var clst = void 0;
                        var tbrNavChk = trgt.classList.contains(CLS_TBARNAV);
                        var tbarScrollChk = trgt.classList.contains(CLS_TBARSCRLNAV);
                        clst = this.clstElement(tbrNavChk, trgt);
                        if (clst || tbarScrollChk) {
                            this.keyHandling(clst, e, trgt, tbrNavChk, tbarScrollChk);
                        }
                    }
                }, {
                    key: 'eleFocus',
                    value: function eleFocus(closest$$1, pos) {
                        var sib = Object(closest$$1)[pos + 'ElementSibling'];
                        var contains = function contains(el) {
                            return el.classList.contains(CLS_SEPARATOR) || el.classList.contains(CLS_DISABLE$1);
                        };
                        if (sib) {
                            var skipEle = contains(sib);
                            if (skipEle) {
                                if (Object(sib)[pos + 'ElementSibling']) {
                                    sib = Object(sib)[pos + 'ElementSibling'];
                                    skipEle = contains(sib);
                                    if (skipEle) {
                                        this.eleFocus(sib, pos);
                                        return;
                                    }
                                }
                            }
                            this.elementFocus(sib);
                        } else if (this.tbarAlign) {
                            var elem = Object(closest$$1.parentElement)[pos + 'ElementSibling'];
                            if (!isNullOrUndefined(elem) && elem.children.length === 0) {
                                elem = Object(elem)[pos + 'ElementSibling'];
                            }
                            if (!isNullOrUndefined(elem) && elem.children.length > 0) {
                                if (pos === 'next') {
                                    var el = elem.querySelector('.' + CLS_ITEM);
                                    if (contains(el)) {
                                        this.eleFocus(el, pos);
                                    } else {
                                        el.firstElementChild.focus();
                                        this.activeEleSwitch(el);
                                    }
                                } else {
                                    var _el = elem.lastElementChild;
                                    if (contains(_el)) {
                                        this.eleFocus(_el, pos);
                                    } else {
                                        this.elementFocus(_el);
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(e) {
                        var trgt = e.target;
                        var clsList = trgt.classList;
                        var ele = this.element;
                        var isPopupElement = !isNullOrUndefined(closest(trgt, '.' + CLS_POPUPCLASS));
                        var popupNav = closest(trgt, '.' + CLS_TBARNAV);
                        if (!popupNav) {
                            popupNav = trgt;
                        }
                        if (!ele.children[0].classList.contains('e-hscroll') && clsList.contains(CLS_TBARNAV)) {
                            clsList = trgt.querySelector('.e-icons').classList;
                        }
                        if (clsList.contains(CLS_POPUPICON) || clsList.contains(CLS_POPUPDOWN)) {
                            this.popupClickHandler(ele, popupNav, CLS_RTL$1);
                        }
                        var itemObj = void 0;
                        var clst = closest(e.target, '.' + CLS_ITEM);
                        if ((isNullOrUndefined(clst) || clst.classList.contains(CLS_DISABLE$1)) && !popupNav.classList.contains(CLS_TBARNAV)) {
                            return;
                        }
                        if (clst) {
                            itemObj = this.items[this.tbarEle.indexOf(clst)];
                        }
                        var eventArgs = { originalEvent: e, item: itemObj };
                        this.trigger('clicked', eventArgs);
                        if (isPopupElement && !eventArgs.cancel) {
                            this.popObj.hide({ name: 'SlideUp', duration: 100 });
                        }
                    }
                }, {
                    key: 'popupClickHandler',
                    value: function popupClickHandler(ele, popupNav, CLS_RTL) {
                        var popObj = this.popObj;
                        if (isVisible(popObj.element)) {
                            popupNav.classList.remove(CLS_TBARNAVACT);
                            popObj.hide({ name: 'SlideUp', duration: 100 });
                        } else {
                            if (ele.classList.contains(CLS_RTL)) {
                                popObj.enableRtl = true;
                                popObj.position = { X: 'left', Y: 'top' };
                            }
                            if (popObj.offsetX === 0 && !ele.classList.contains(CLS_RTL)) {
                                popObj.enableRtl = false;
                                popObj.position = { X: 'right', Y: 'top' };
                            }
                            popObj.dataBind();
                            popObj.refreshPosition();
                            popObj.element.style.top = this.element.offsetHeight + 'px';
                            popupNav.classList.add(CLS_TBARNAVACT);
                            popObj.show({ name: 'SlideDown', duration: 100 });
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.initialize();
                        this.renderControl();
                        this.wireEvents();
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        var width = formatUnit(this.width);
                        var height = formatUnit(this.height);
                        if (Browser.info.name !== 'msie' || this.height !== 'auto') {
                            setStyleAttribute(this.element, { 'height': height });
                        }
                        setStyleAttribute(this.element, { 'width': width });
                        var ariaAttr = {
                            'role': 'toolbar', 'aria-disabled': 'false', 'aria-haspopup': 'false', 'aria-orientation': 'horizontal'
                        };
                        attributes(this.element, ariaAttr);
                    }
                }, {
                    key: 'renderControl',
                    value: function renderControl() {
                        this.trgtEle = this.element.children.length > 0 ? this.element.querySelector('div') : null;
                        this.tbarAlgEle = { lefts: [], centers: [], rights: [] };
                        this.renderItems();
                        this.renderOverflowMode();
                        if (this.tbarAlign) {
                            this.itemPositioning();
                        }
                        if (this.popObj && this.popObj.element.childElementCount > 1 && this.checkPopupRefresh(this.element, this.popObj.element)) {
                            this.popupRefresh(this.popObj.element, false);
                        }
                    }
                }, {
                    key: 'initHScroll',
                    value: function initHScroll(element, innerItems) {
                        if (!this.scrollModule && this.checkOverflow(element, innerItems[0])) {
                            if (this.tbarAlign) {
                                this.element.querySelector('.' + CLS_ITEMS + ' .' + CLS_TBARCENTER).removeAttribute('style');
                            }
                            this.scrollModule = new HScroll({ scrollStep: 50, enableRtl: this.enableRtl }, innerItems[0]);
                            this.remove(this.scrollModule.element, CLS_TBARPOS);
                            setStyleAttribute(this.element, { overflow: 'hidden' });
                        }
                    }
                }, {
                    key: 'itemWidthCal',
                    value: function itemWidthCal(items) {
                        var width = 0;
                        [].slice.call(selectAll('.' + CLS_ITEM, items)).forEach(function (el) {
                            if (isVisible(el)) {
                                width += el.offsetWidth + parseFloat(window.getComputedStyle(el).marginRight);
                            }
                        });
                        return width;
                    }
                }, {
                    key: 'checkOverflow',
                    value: function checkOverflow(element, innerItem) {
                        if (isNullOrUndefined(element) || isNullOrUndefined(innerItem) || !isVisible(element)) {
                            return false;
                        }
                        var eleWidth = element.offsetWidth;
                        var itemWidth = void 0;
                        if (this.tbarAlign || this.scrollModule) {
                            itemWidth = this.itemWidthCal(this.scrollModule ? innerItem.querySelector('.e-hscroll-content') : innerItem);
                        } else {
                            itemWidth = innerItem.offsetWidth;
                        }
                        var popNav = element.querySelector('.' + CLS_TBARNAV);
                        var scrollNav = element.querySelector('.' + CLS_TBARSCRLNAV);
                        if (itemWidth > eleWidth - (popNav ? popNav.offsetWidth : scrollNav ? scrollNav.offsetWidth * 2 : 0)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }, {
                    key: 'refreshOverflow',
                    value: function refreshOverflow() {
                        this.resize();
                    }
                }, {
                    key: 'renderOverflowMode',
                    value: function renderOverflowMode() {
                        var ele = this.element;
                        var innerItems = ele.querySelector('.' + CLS_ITEMS);
                        var priorityCheck = this.popupPriCount > 0;
                        if (ele && ele.children.length > 0) {
                            this.offsetWid = ele.offsetWidth;
                            this.remove(this.element, 'e-toolpop');
                            switch (this.overflowMode) {
                                case 'Scrollable':
                                    this.destroyHScroll();
                                    this.initHScroll(ele, ele.getElementsByClassName(CLS_ITEMS));
                                    break;
                                case 'Popup':
                                    this.add(this.element, 'e-toolpop');
                                    if (this.tbarAlign) {
                                        this.removePositioning();
                                    }
                                    if (this.checkOverflow(ele, innerItems) || priorityCheck) {
                                        this.createPopupEle(ele, [].slice.call(selectAll('.' + CLS_ITEMS + ' .' + CLS_ITEM, ele)));
                                        this.element.querySelector('.' + CLS_TBARNAV).setAttribute('tabIndex', '0');
                                    }
                                    if (this.tbarAlign) {
                                        this.add(innerItems, CLS_TBARPOS);
                                        this.itemPositioning();
                                    }
                                    break;
                            }
                        }
                    }
                }, {
                    key: 'createPopupEle',
                    value: function createPopupEle(ele, innerEle) {
                        var innerNav = ele.querySelector('.' + CLS_TBARNAV);
                        if (!innerNav) {
                            this.createPopupIcon(ele);
                        }
                        innerNav = ele.querySelector('.' + CLS_TBARNAV);
                        var eleWidth = ele.offsetWidth - innerNav.offsetWidth;
                        this.element.classList.remove('e-rtl');
                        setStyleAttribute(this.element, { direction: 'initial' });
                        this.checkPriority(ele, innerEle, eleWidth, true);
                        if (this.enableRtl) {
                            this.element.classList.add('e-rtl');
                        }
                        this.element.style.removeProperty('direction');
                        this.createPopup();
                    }
                }, {
                    key: 'pushingPoppedEle',
                    value: function pushingPoppedEle(tbarObj, popupPri, ele, eleHeight) {
                        var element = tbarObj.element;
                        var nodes = selectAll('.' + CLS_TBAROVERFLOW, ele);
                        var nodeIndex = 0;
                        var poppedEle = [].slice.call(selectAll('.' + CLS_POPUP, element.querySelector('.' + CLS_ITEMS)));
                        var nodePri = 0;
                        poppedEle.forEach(function (el, index) {
                            nodes = selectAll('.' + CLS_TBAROVERFLOW, ele);
                            if (el.classList.contains(CLS_TBAROVERFLOW) && nodes.length > 0) {
                                if (tbarObj.tbResize && nodes.length > index) {
                                    ele.insertBefore(el, nodes[index]);
                                    ++nodePri;
                                } else {
                                    ele.insertBefore(el, ele.children[nodes.length]);
                                    ++nodePri;
                                }
                            } else if (el.classList.contains(CLS_TBAROVERFLOW)) {
                                ele.insertBefore(el, ele.firstChild);
                                ++nodePri;
                            } else if (tbarObj.tbResize && el.classList.contains(CLS_POPOVERFLOW) && ele.children.length > 0 && nodes.length === 0) {
                                ele.insertBefore(el, ele.firstChild);
                                ++nodePri;
                            } else if (el.classList.contains(CLS_POPOVERFLOW)) {
                                popupPri.push(el);
                            } else if (tbarObj.tbResize) {
                                ele.insertBefore(el, ele.childNodes[nodeIndex + nodePri]);
                                ++nodeIndex;
                            } else {
                                ele.appendChild(el);
                            }
                            setStyleAttribute(el, { display: '', height: eleHeight + 'px' });
                        });
                        popupPri.forEach(function (el) {
                            ele.appendChild(el);
                        });
                        var tbarEle = selectAll('.' + CLS_ITEM, element.querySelector('.' + CLS_ITEMS));
                        for (var i = tbarEle.length - 1; i >= 0; i--) {
                            var tbarElement = tbarEle[i];
                            if (tbarElement.classList.contains(CLS_SEPARATOR)) {
                                setStyleAttribute(tbarElement, { display: 'none' });
                            } else {
                                break;
                            }
                        }
                    }
                }, {
                    key: 'createPopup',
                    value: function createPopup() {
                        var element = this.element;
                        var eleHeight = void 0;
                        var eleItem = void 0;
                        eleItem = element.querySelector('.' + CLS_ITEM + ':not(.' + CLS_SEPARATOR + ' ):not(.' + CLS_POPUP + ' )');
                        eleHeight = element.style.height === 'auto' || element.style.height === '' ? null : eleItem.offsetHeight;
                        var ele = void 0;
                        var popupPri = [];
                        if (element.querySelector('#' + element.id + '_popup.' + CLS_POPUPCLASS)) {
                            ele = element.querySelector('#' + element.id + '_popup.' + CLS_POPUPCLASS);
                        } else {
                            ele = createElement('div', { id: element.id + '_popup', className: CLS_POPUPCLASS });
                        }
                        this.pushingPoppedEle(this, popupPri, ele, eleHeight);
                        this.popupInit(element, ele);
                    }
                }, {
                    key: 'popupInit',
                    value: function popupInit(element, ele) {
                        if (!this.popObj) {
                            element.appendChild(ele);
                            setStyleAttribute(this.element, { overflow: '' });
                            var popup = new Popup(null, {
                                relateTo: this.element,
                                offsetY: element.offsetHeight,
                                enableRtl: this.enableRtl,
                                open: this.popupOpen.bind(this),
                                close: this.popupClose,
                                position: this.enableRtl ? { X: 'left', Y: 'top' } : { X: 'right', Y: 'top' }
                            });
                            popup.appendTo(ele);
                            EventHandler.add(document, 'scroll', this.docEvent.bind(this));
                            EventHandler.add(document, 'click ', this.docEvent.bind(this));
                            popup.element.style.maxHeight = popup.element.offsetHeight + 'px';
                            popup.hide();
                            this.popObj = popup;
                            this.element.setAttribute('aria-haspopup', 'true');
                        } else {
                            var popupEle = this.popObj.element;
                            setStyleAttribute(popupEle, { maxHeight: '', display: 'block' });
                            setStyleAttribute(popupEle, { maxHeight: popupEle.offsetHeight + 'px', display: '' });
                        }
                    }
                }, {
                    key: 'popupOpen',
                    value: function popupOpen(e) {
                        var popObj = this.popObj;
                        var popupEle = this.popObj.element;
                        var toolEle = this.popObj.element.parentElement;
                        var popupNav = toolEle.querySelector('.' + CLS_TBARNAV);
                        setStyleAttribute(popObj.element, { height: 'auto', maxHeight: '' });
                        popObj.element.style.maxHeight = popObj.element.offsetHeight + 'px';
                        var popupElePos = popupEle.offsetTop + popupEle.offsetHeight + calculatePosition(toolEle).top;
                        var popIcon = popupNav.firstElementChild;
                        popupNav.classList.add(CLS_TBARNAVACT);
                        classList(popIcon, [CLS_POPUPICON], [CLS_POPUPDOWN]);
                        var scrollVal = isNullOrUndefined(window.scrollY) ? 0 : window.scrollY;
                        if (window.innerHeight + scrollVal < popupElePos) {
                            var overflowHeight = popupEle.offsetHeight - (popupElePos - window.innerHeight - scrollVal + 5);
                            popObj.height = overflowHeight + 'px';
                            for (var i = 0; i <= popupEle.childElementCount; i++) {
                                var ele = popupEle.children[i];
                                if (ele.offsetTop + ele.offsetHeight > overflowHeight) {
                                    overflowHeight = ele.offsetTop;
                                    break;
                                }
                            }
                            setStyleAttribute(popObj.element, { maxHeight: overflowHeight + 'px' });
                        }
                    }
                }, {
                    key: 'popupClose',
                    value: function popupClose(e) {
                        var element = this.element.parentElement;
                        var popupNav = element.querySelector('.' + CLS_TBARNAV);
                        var popIcon = popupNav.firstElementChild;
                        popupNav.classList.remove(CLS_TBARNAVACT);
                        classList(popIcon, [CLS_POPUPDOWN], [CLS_POPUPICON]);
                    }
                }, {
                    key: 'checkPriority',
                    value: function checkPriority(ele, inEle, eleWidth, pre) {
                        var popPriority = this.popupPriCount > 0;
                        var len = inEle.length;
                        var eleWid = eleWidth;
                        var sepCheck = 0;
                        var itemCount = 0;
                        var itemPopCount = 0;
                        var checkClass = function checkClass(ele, val) {
                            var rVal = false;
                            val.forEach(function (cls) {
                                if (ele.classList.contains(cls)) {
                                    rVal = true;
                                }
                            });
                            return rVal;
                        };
                        for (var i = len - 1; i >= 0; i--) {
                            var mrgn = parseFloat(window.getComputedStyle(inEle[i]).marginRight);
                            mrgn += parseFloat(window.getComputedStyle(inEle[i]).marginLeft);
                            var fstEleCheck = inEle[i] === this.tbarEle[0];
                            if (fstEleCheck) {
                                this.tbarEleMrgn = mrgn;
                            }
                            var _eleWid = fstEleCheck ? inEle[i].offsetWidth + mrgn : inEle[i].offsetWidth;
                            if (checkClass(inEle[i], [CLS_POPPRI]) && popPriority) {
                                inEle[i].classList.add(CLS_POPUP);
                                setStyleAttribute(inEle[i], { display: 'none', minWidth: _eleWid + 'px' });
                                itemPopCount++;
                            }
                            if (inEle[i].offsetLeft + inEle[i].offsetWidth + mrgn > eleWidth) {
                                if (inEle[i].classList.contains(CLS_SEPARATOR)) {
                                    if (sepCheck > 0 && itemCount === itemPopCount) {
                                        var sepEle = inEle[i + itemCount + (sepCheck - 1)];
                                        if (checkClass(sepEle, [CLS_SEPARATOR, CLS_TBARIGNORE])) {
                                            setStyleAttribute(sepEle, { display: 'none' });
                                        }
                                    }
                                    sepCheck++;
                                    itemCount = 0;
                                    itemPopCount = 0;
                                } else {
                                    itemCount++;
                                }
                                if (inEle[i].classList.contains(CLS_TBAROVERFLOW) && pre) {
                                    eleWidth -= inEle[i].offsetWidth + mrgn;
                                } else if (!checkClass(inEle[i], [CLS_SEPARATOR, CLS_TBARIGNORE])) {
                                    inEle[i].classList.add(CLS_POPUP);
                                    setStyleAttribute(inEle[i], { display: 'none', minWidth: _eleWid + 'px' });
                                    itemPopCount++;
                                } else {
                                    eleWidth -= inEle[i].offsetWidth + mrgn;
                                }
                            }
                        }
                        if (pre) {
                            var popedEle = selectAll('.' + CLS_ITEM + ':not(.' + CLS_POPUP + ')', this.element);
                            this.checkPriority(ele, popedEle, eleWid, false);
                        }
                    }
                }, {
                    key: 'createPopupIcon',
                    value: function createPopupIcon(element) {
                        var id = element.id.concat('_nav');
                        var className = 'e-' + element.id.concat('_nav ' + CLS_POPUPNAV);
                        var nav = createElement('div', { id: id, className: className });
                        if (Browser.info.name === 'msie' || Browser.info.name === 'edge') {
                            nav.classList.add('e-ie-align');
                        }
                        var navItem = createElement('div', { className: CLS_POPUPDOWN + ' e-icons' });
                        nav.appendChild(navItem);
                        nav.setAttribute('tabindex', '0');
                        element.appendChild(nav);
                    }
                }, {
                    key: 'tbarPriRef',
                    value: function tbarPriRef(inEle, indx, sepPri, el, des, elWid, wid, ig) {
                        var ignoreCount = ig;
                        var popEle = this.popObj.element;
                        var query = '.' + CLS_ITEM + ':not(.' + CLS_SEPARATOR + '):not(.' + CLS_TBAROVERFLOW + ')';
                        var priEleCnt = selectAll('.' + CLS_POPUP + ':not(.' + CLS_TBAROVERFLOW + ')', popEle).length;
                        var checkClass = function checkClass(ele, val) {
                            return ele.classList.contains(val);
                        };
                        if (selectAll(query, inEle).length === 0) {
                            var eleSep = inEle.children[indx - (indx - sepPri) - 1];
                            var ignoreCheck = !isNullOrUndefined(eleSep) && checkClass(eleSep, CLS_TBARIGNORE);
                            if (!isNullOrUndefined(eleSep) && checkClass(eleSep, CLS_SEPARATOR) && !isVisible(eleSep) || ignoreCheck) {
                                var sepDisplay = 'none';
                                eleSep.style.display = 'inherit';
                                var eleSepWidth = eleSep.offsetWidth + parseFloat(window.getComputedStyle(eleSep).marginRight) * 2;
                                var prevSep = eleSep.previousElementSibling;
                                if (elWid + eleSepWidth < wid || des) {
                                    inEle.insertBefore(el, inEle.children[indx + ignoreCount - (indx - sepPri)]);
                                    if (!isNullOrUndefined(prevSep)) {
                                        prevSep.style.display = '';
                                    }
                                } else {
                                    if (prevSep.classList.contains(CLS_SEPARATOR)) {
                                        prevSep.style.display = sepDisplay;
                                    }
                                }
                                eleSep.style.display = '';
                            } else {
                                inEle.insertBefore(el, inEle.children[indx + ignoreCount - (indx - sepPri)]);
                            }
                        } else {
                            inEle.insertBefore(el, inEle.children[indx + ignoreCount - priEleCnt]);
                        }
                    }
                }, {
                    key: 'popupRefresh',
                    value: function popupRefresh(popupEle, destroy) {
                        var ele = this.element;
                        var popNav = ele.querySelector('.' + CLS_TBARNAV);
                        var innerEle = ele.querySelector('.' + CLS_ITEMS);
                        if (isNullOrUndefined(popNav)) {
                            return;
                        }
                        innerEle.removeAttribute('style');
                        popupEle.style.display = 'block';
                        var width = ele.offsetWidth - (popNav.offsetWidth + innerEle.offsetWidth);
                        this.popupEleRefresh(width, popupEle, destroy);
                        popupEle.style.display = '';
                        if (popupEle.children.length === 0 && popNav && this.popObj) {
                            detach(popNav);
                            popNav = null;
                            this.popObj.destroy();
                            detach(this.popObj.element);
                            this.popObj = null;
                            ele.setAttribute('aria-haspopup', 'false');
                            ele.classList.remove('e-toolpop');
                        }
                    }
                }, {
                    key: 'ignoreEleFetch',
                    value: function ignoreEleFetch(index, innerEle) {
                        var ignoreEle = [].slice.call(innerEle.querySelectorAll('.' + CLS_TBARIGNORE));
                        var ignoreInx = [];
                        var count = 0;
                        if (ignoreEle.length > 0) {
                            ignoreEle.forEach(function (ele) {
                                ignoreInx.push([].slice.call(innerEle.children).indexOf(ele));
                            });
                        } else {
                            return 0;
                        }
                        ignoreInx.forEach(function (val) {
                            if (val <= index) {
                                count++;
                            }
                        });
                        return count;
                    }
                }, {
                    key: 'checkPopupRefresh',
                    value: function checkPopupRefresh(root, popEle) {
                        popEle.style.display = 'block';
                        var elWid = this.popupEleWidth(popEle.firstElementChild);
                        popEle.firstElementChild.style.removeProperty('Position');
                        var tbarWidth = root.offsetWidth - root.querySelector('.' + CLS_TBARNAV).offsetWidth;
                        var tbarItemsWid = root.querySelector('.' + CLS_ITEMS).offsetWidth;
                        popEle.style.removeProperty('display');
                        if (tbarWidth > elWid + tbarItemsWid) {
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: 'popupEleWidth',
                    value: function popupEleWidth(el) {
                        el.style.position = 'absolute';
                        var elWidth = el.offsetWidth;
                        var btnText = el.querySelector('.' + CLS_TBARBTNTEXT);
                        if (el.classList.contains('e-tbtn-align') || el.classList.contains(CLS_TBARTEXT)) {
                            var btn = el.children[0];
                            if (!isNullOrUndefined(btnText) && el.classList.contains(CLS_TBARTEXT)) {
                                btnText.style.display = 'none';
                            } else if (!isNullOrUndefined(btnText) && el.classList.contains(CLS_POPUPTEXT)) {
                                btnText.style.display = 'block';
                            }
                            btn.style.minWidth = '0%';
                            elWidth = parseFloat(el.style.minWidth);
                            btn.style.minWidth = '';
                            if (!isNullOrUndefined(btnText)) {
                                btnText.style.display = '';
                            }
                        }
                        return elWidth;
                    }
                }, {
                    key: 'popupEleRefresh',
                    value: function popupEleRefresh(width, popupEle, destroy) {
                        var _this8 = this;

                        var popPriority = this.popupPriCount > 0;
                        var eleSplice = this.tbarEle;
                        var priEleCnt = void 0;
                        var index = void 0;
                        var checkOverflow = void 0;
                        var innerEle = this.element.querySelector('.' + CLS_ITEMS);
                        var ignoreCount = 0;
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = [].slice.call(popupEle.children)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var el = _step4.value;

                                if (el.classList.contains(CLS_POPPRI) && popPriority && !destroy) {
                                    continue;
                                }
                                var elWidth = this.popupEleWidth(el);
                                if (el === this.tbarEle[0]) {
                                    elWidth += this.tbarEleMrgn;
                                }
                                el.style.position = '';
                                if (elWidth < width || destroy) {
                                    (function () {
                                        el.style.minWidth = '';
                                        if (!el.classList.contains(CLS_POPOVERFLOW)) {
                                            el.classList.remove(CLS_POPUP);
                                        }
                                        index = _this8.tbarEle.indexOf(el);
                                        if (_this8.tbarAlign) {
                                            var pos = _this8.items[index].align;
                                            index = _this8.tbarAlgEle[(pos + 's').toLowerCase()].indexOf(el);
                                            eleSplice = _this8.tbarAlgEle[(pos + 's').toLowerCase()];
                                            innerEle = _this8.element.querySelector('.' + CLS_ITEMS + ' .' + 'e-toolbar-' + pos.toLowerCase());
                                        }
                                        var sepBeforePri = 0;
                                        eleSplice.slice(0, index).forEach(function (el) {
                                            if (el.classList.contains(CLS_TBAROVERFLOW) || el.classList.contains(CLS_SEPARATOR)) {
                                                if (el.classList.contains(CLS_SEPARATOR)) {
                                                    el.style.display = '';
                                                    width -= el.offsetWidth;
                                                }
                                                sepBeforePri++;
                                            }
                                        });
                                        ignoreCount = _this8.ignoreEleFetch(index, innerEle);
                                        if (el.classList.contains(CLS_TBAROVERFLOW)) {
                                            _this8.tbarPriRef(innerEle, index, sepBeforePri, el, destroy, elWidth, width, ignoreCount);
                                            width -= el.offsetWidth;
                                        } else if (index === 0) {
                                            innerEle.insertBefore(el, innerEle.firstChild);
                                            width -= el.offsetWidth;
                                        } else {
                                            priEleCnt = selectAll('.' + CLS_TBAROVERFLOW, _this8.popObj.element).length;
                                            innerEle.insertBefore(el, innerEle.children[index + ignoreCount - priEleCnt]);
                                            width -= el.offsetWidth;
                                        }
                                        el.style.height = '';
                                    })();
                                } else {
                                    break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }
                            } finally {
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }

                        checkOverflow = this.checkOverflow(this.element, this.element.getElementsByClassName(CLS_ITEMS)[0]);
                        if (checkOverflow && !destroy) {
                            this.renderOverflowMode();
                        }
                    }
                }, {
                    key: 'removePositioning',
                    value: function removePositioning() {
                        var item = this.element.querySelector('.' + CLS_ITEMS);
                        if (isNullOrUndefined(item) || !item.classList.contains(CLS_TBARPOS)) {
                            return;
                        }
                        this.remove(item, CLS_TBARPOS);
                        var innerItem = [].slice.call(item.childNodes);
                        innerItem[1].removeAttribute('style');
                        innerItem[2].removeAttribute('style');
                    }
                }, {
                    key: 'refreshPositioning',
                    value: function refreshPositioning() {
                        var item = this.element.querySelector('.' + CLS_ITEMS);
                        this.add(item, CLS_TBARPOS);
                        this.itemPositioning();
                    }
                }, {
                    key: 'itemPositioning',
                    value: function itemPositioning() {
                        var item = this.element.querySelector('.' + CLS_ITEMS);
                        if (isNullOrUndefined(item) || !item.classList.contains(CLS_TBARPOS)) {
                            return;
                        }
                        var popupNav = this.element.querySelector('.' + CLS_TBARNAV);
                        var innerItem = void 0;
                        if (this.scrollModule) {
                            innerItem = [].slice.call(item.querySelector('.' + CLS_TBARSCROLL).children);
                        } else {
                            innerItem = [].slice.call(item.childNodes);
                        }
                        var margin = innerItem[0].offsetWidth + innerItem[2].offsetWidth;
                        var tbarWid = this.element.offsetWidth;
                        if (popupNav) {
                            tbarWid -= popupNav.offsetWidth;
                            var popWid = popupNav.offsetWidth + 'px';
                            innerItem[2].removeAttribute('style');
                            this.enableRtl ? innerItem[2].style.left = popWid : innerItem[2].style.right = popWid;
                        }
                        if (tbarWid <= margin) {
                            return;
                        }
                        var value = (tbarWid - margin - innerItem[1].offsetWidth) / 2;
                        innerItem[1].removeAttribute('style');
                        var mrgn = innerItem[0].offsetWidth + value + 'px';
                        this.enableRtl ? innerItem[1].style.marginRight = mrgn : innerItem[1].style.marginLeft = mrgn;
                    }
                }, {
                    key: 'tbarItemAlign',
                    value: function tbarItemAlign(item, itemEle, pos) {
                        var _this9 = this;

                        if (item.showAlwaysInPopup && item.overflow !== 'Show') {
                            return;
                        }
                        var alignDiv = [];
                        alignDiv.push(createElement('div', { className: CLS_TBARLEFT }));
                        alignDiv.push(createElement('div', { className: CLS_TBARCENTER }));
                        alignDiv.push(createElement('div', { className: CLS_TBARRIGHT }));
                        if (pos === 0 && item.align !== 'Left') {
                            alignDiv.forEach(function (ele) {
                                itemEle.appendChild(ele);
                            });
                            this.tbarAlign = true;
                            this.add(itemEle, CLS_TBARPOS);
                        } else if (item.align !== 'Left') {
                            var alignEle = itemEle.childNodes;
                            var leftAlign = alignDiv[0];
                            [].slice.call(alignEle).forEach(function (el) {
                                _this9.tbarAlgEle.lefts.push(el);
                                leftAlign.appendChild(el);
                            });
                            itemEle.appendChild(leftAlign);
                            itemEle.appendChild(alignDiv[1]);
                            itemEle.appendChild(alignDiv[2]);
                            this.tbarAlign = true;
                            this.add(itemEle, CLS_TBARPOS);
                        }
                    }
                }, {
                    key: 'ctrlTemplate',
                    value: function ctrlTemplate() {
                        var _this10 = this;

                        this.ctrlTem = this.trgtEle.cloneNode(true);
                        this.add(this.trgtEle, CLS_ITEMS);
                        this.tbarEle = [];
                        var innerEle = [].slice.call(this.trgtEle.children);
                        innerEle.forEach(function (ele) {
                            if (ele.tagName === 'DIV') {
                                _this10.tbarEle.push(ele);
                                ele.setAttribute('aria-disabled', 'false');
                                _this10.add(ele, CLS_ITEM);
                            }
                        });
                    }
                }, {
                    key: 'renderItems',
                    value: function renderItems() {
                        var ele = this.element;
                        var itemEleDom = void 0;
                        var innerItem = void 0;
                        var innerPos = void 0;
                        var items = this.items;
                        if (ele && ele.children.length > 0) {
                            itemEleDom = ele.querySelector('.' + CLS_ITEMS);
                        }
                        if (this.trgtEle != null) {
                            this.ctrlTemplate();
                        } else if (ele && items.length > 0) {
                            if (!itemEleDom) {
                                itemEleDom = createElement('div', { className: CLS_ITEMS });
                            }
                            for (var i = 0; i < items.length; i++) {
                                innerItem = this.renderSubComponent(items[i]);
                                if (this.tbarEle.indexOf(innerItem) === -1) {
                                    this.tbarEle.push(innerItem);
                                }
                                if (!this.tbarAlign) {
                                    this.tbarItemAlign(items[i], itemEleDom, i);
                                }
                                innerPos = itemEleDom.querySelector('.e-toolbar-' + items[i].align.toLowerCase());
                                if (innerPos) {
                                    if (!(items[i].showAlwaysInPopup && items[i].overflow !== 'Show')) {
                                        this.tbarAlgEle[(items[i].align + 's').toLowerCase()].push(innerItem);
                                    }
                                    innerPos.appendChild(innerItem);
                                } else {
                                    itemEleDom.appendChild(innerItem);
                                }
                            }
                            ele.appendChild(itemEleDom);
                        }
                    }
                }, {
                    key: 'setAttr',
                    value: function setAttr(attr, element) {
                        var key = Object.keys(attr);
                        var keyVal = void 0;
                        for (var i = 0; i < key.length; i++) {
                            keyVal = key[i];
                            keyVal === 'class' ? this.add(element, attr[keyVal]) : element.setAttribute(keyVal, attr[keyVal]);
                        }
                    }
                }, {
                    key: 'enableItems',
                    value: function enableItems(items, isEnable) {
                        var elements = items;
                        var len = elements.length;
                        if (isNullOrUndefined(isEnable)) {
                            isEnable = true;
                        }
                        var enable = function enable(isEnable, ele) {
                            if (isEnable) {
                                ele.classList.remove(CLS_DISABLE$1);
                                ele.setAttribute('aria-disabled', 'false');
                            } else {
                                ele.classList.add(CLS_DISABLE$1);
                                ele.setAttribute('aria-disabled', 'true');
                            }
                        };
                        if (len && len > 1) {
                            var _iteratorNormalCompletion5 = true;
                            var _didIteratorError5 = false;
                            var _iteratorError5 = undefined;

                            try {
                                for (var _iterator5 = [].slice.call(elements)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                    var ele = _step5.value;

                                    enable(isEnable, ele);
                                }
                            } catch (err) {
                                _didIteratorError5 = true;
                                _iteratorError5 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                        _iterator5.return();
                                    }
                                } finally {
                                    if (_didIteratorError5) {
                                        throw _iteratorError5;
                                    }
                                }
                            }

                            isEnable ? removeClass(elements, CLS_DISABLE$1) : _addClass(elements, CLS_DISABLE$1);
                        } else {
                            var _ele3 = void 0;
                            _ele3 = len && len === 1 ? elements[0] : items;
                            enable(isEnable, _ele3);
                        }
                    }
                }, {
                    key: 'addItems',
                    value: function addItems(items, index) {
                        var innerItems = void 0;
                        var itemsDiv = this.element.querySelector('.' + CLS_ITEMS);
                        var innerEle = void 0;
                        var itemAgn = 'Left';
                        if (isNullOrUndefined(index)) {
                            index = 0;
                        }
                        items.forEach(function (e) {
                            if (!isNullOrUndefined(e.align) && e.align !== 'Left' && itemAgn === 'Left') {
                                itemAgn = e.align;
                            }
                        });
                        var _iteratorNormalCompletion6 = true;
                        var _didIteratorError6 = false;
                        var _iteratorError6 = undefined;

                        try {
                            for (var _iterator6 = items[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                var item = _step6.value;

                                if (isNullOrUndefined(item.type)) {
                                    item.type = 'Button';
                                }
                                innerItems = selectAll('.' + CLS_ITEM, this.element);
                                item.align = itemAgn;
                                innerEle = this.renderSubComponent(item);
                                if (this.tbarEle.length >= index && innerItems.length > 0) {
                                    this.destroyMode();
                                    var algIndex = item.align[0] === 'L' ? 0 : item.align[0] === 'C' ? 1 : 2;
                                    var ele = void 0;
                                    if (!this.tbarAlign && itemAgn !== 'Left') {
                                        this.tbarItemAlign(item, itemsDiv, 1);
                                        this.tbarAlign = true;
                                        ele = closest(innerItems[0], '.' + CLS_ITEMS).children[algIndex];
                                        ele.appendChild(innerEle);
                                        this.tbarAlgEle[(item.align + 's').toLowerCase()].push(innerEle);
                                        this.refreshPositioning();
                                    } else if (this.tbarAlign) {
                                        ele = closest(innerItems[0], '.' + CLS_ITEMS).children[algIndex];
                                        ele.insertBefore(innerEle, ele.children[index]);
                                        this.tbarAlgEle[(item.align + 's').toLowerCase()].splice(index, 0, innerEle);
                                        this.refreshPositioning();
                                    } else {
                                        innerItems[0].parentNode.insertBefore(innerEle, innerItems[index]);
                                    }
                                    this.items.splice(index, 0, item);
                                    this.tbarEle.splice(index, 0, innerEle);
                                    index++;
                                    this.offsetWid = itemsDiv.offsetWidth;
                                }
                            }
                        } catch (err) {
                            _didIteratorError6 = true;
                            _iteratorError6 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                    _iterator6.return();
                                }
                            } finally {
                                if (_didIteratorError6) {
                                    throw _iteratorError6;
                                }
                            }
                        }

                        itemsDiv.style.width = '';
                        this.renderOverflowMode();
                    }
                }, {
                    key: 'removeItems',
                    value: function removeItems(args) {
                        var elements = args;
                        var index = void 0;
                        var innerItems = [].slice.call(selectAll('.' + CLS_ITEM, this.element));
                        if (typeof elements === 'number') {
                            index = parseInt(args.toString(), 10);
                            this.removeItemByIndex(index, innerItems);
                        } else {
                            if (elements && elements.length > 1) {
                                var _iteratorNormalCompletion7 = true;
                                var _didIteratorError7 = false;
                                var _iteratorError7 = undefined;

                                try {
                                    for (var _iterator7 = [].slice.call(elements)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                        var ele = _step7.value;

                                        index = this.tbarEle.indexOf(ele);
                                        this.removeItemByIndex(index, innerItems);
                                        innerItems = selectAll('.' + CLS_ITEM, this.element);
                                    }
                                } catch (err) {
                                    _didIteratorError7 = true;
                                    _iteratorError7 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                            _iterator7.return();
                                        }
                                    } finally {
                                        if (_didIteratorError7) {
                                            throw _iteratorError7;
                                        }
                                    }
                                }
                            } else {
                                var _ele4 = elements && elements.length && elements.length === 1 ? elements[0] : args;
                                index = innerItems.indexOf(_ele4);
                                this.removeItemByIndex(index, innerItems);
                            }
                        }
                        this.resize();
                    }
                }, {
                    key: 'removeItemByIndex',
                    value: function removeItemByIndex(index, innerItems) {
                        if (this.tbarEle[index] && innerItems[index]) {
                            var eleIdx = this.tbarEle.indexOf(innerItems[index]);
                            if (this.tbarAlign) {
                                var indexAgn = void 0;
                                indexAgn = this.tbarAlgEle[(this.items[eleIdx].align + 's').toLowerCase()].indexOf(this.tbarEle[eleIdx]);
                                this.tbarAlgEle[(this.items[eleIdx].align + 's').toLowerCase()].splice(indexAgn, 1);
                            }
                            detach(innerItems[index]);
                            this.items.splice(eleIdx, 1);
                            this.tbarEle.splice(eleIdx, 1);
                        }
                    }
                }, {
                    key: 'templateRender',
                    value: function templateRender(templateProp, innerEle, item) {
                        var itemType = item.type;
                        var eleObj = templateProp;
                        var isComponent = void 0;
                        if ((typeof templateProp === 'undefined' ? 'undefined' : _typeof(templateProp)) === 'object') {
                            isComponent = typeof eleObj.appendTo === 'function';
                        }
                        if (typeof templateProp === 'string' || !isComponent) {
                            var templateFn = void 0;
                            var val = templateProp;
                            val = typeof templateProp === 'string' ? templateProp.trim() : templateProp;
                            try {
                                if (document.querySelectorAll(val).length) {
                                    var ele = document.querySelector(val);
                                    var tempStr = ele.outerHTML.trim();
                                    templateFn = compile(tempStr);
                                    detach(ele);
                                    item.template = tempStr;
                                }
                            } catch (e) {
                                templateFn = compile(val);
                            }
                            var tempArray = void 0;
                            if (!isNullOrUndefined(templateFn)) {
                                tempArray = templateFn({}, this, 'template');
                            }
                            if (!isNullOrUndefined(tempArray) && tempArray.length > 0) {
                                [].slice.call(tempArray).forEach(function (ele) {
                                    if (!isNullOrUndefined(ele.tagName)) {
                                        ele.style.display = '';
                                    }
                                    innerEle.appendChild(ele);
                                });
                            }
                        } else if (itemType === 'Input') {
                            var _ele5 = createElement('input');
                            item.id ? _ele5.id = item.id : _ele5.id = getUniqueID('tbr-ipt');
                            innerEle.appendChild(_ele5);
                            eleObj.appendTo(_ele5);
                        }
                        this.add(innerEle, CLS_TEMPLATE);
                        this.tbarEle.push(innerEle);
                    }
                }, {
                    key: 'buttonRendering',
                    value: function buttonRendering(item, innerEle) {
                        var dom = createElement('button', { className: CLS_TBARBTN });
                        dom.setAttribute('type', 'button');
                        var textStr = item.text;
                        var iconCss = void 0;
                        var iconPos = void 0;
                        item.id ? dom.id = item.id : dom.id = getUniqueID('e-tbr-btn');
                        var btnTxt = createElement('div', { className: 'e-tbar-btn-text' });
                        if (textStr) {
                            btnTxt.innerHTML = textStr;
                            dom.appendChild(btnTxt);
                            dom.classList.add('e-tbtn-txt');
                        } else {
                            this.add(innerEle, 'e-tbtn-align');
                        }
                        if (item.prefixIcon || item.suffixIcon) {
                            if (item.prefixIcon && item.suffixIcon || item.prefixIcon) {
                                iconCss = item.prefixIcon + ' e-icons';
                                iconPos = 'Left';
                            } else {
                                iconCss = item.suffixIcon + ' e-icons';
                                iconPos = 'Right';
                            }
                        }
                        new Button({ iconCss: iconCss, iconPosition: iconPos }, dom);
                        if (item.width) {
                            setStyleAttribute(dom, { 'width': formatUnit(item.width) });
                        }
                        return dom;
                    }
                }, {
                    key: 'renderSubComponent',
                    value: function renderSubComponent(item) {
                        var innerEle = void 0;
                        var dom = void 0;
                        innerEle = createElement('div', { className: CLS_ITEM });
                        innerEle.setAttribute('aria-disabled', 'false');
                        if (!this.tbarEle) {
                            this.tbarEle = [];
                        }
                        if (item.htmlAttributes) {
                            this.setAttr(item.htmlAttributes, innerEle);
                        }
                        if (item.tooltipText) {
                            innerEle.setAttribute('title', item.tooltipText);
                        }
                        if (item.cssClass) {
                            innerEle.className = innerEle.className + ' ' + item.cssClass;
                        }
                        if (item.template) {
                            this.templateRender(item.template, innerEle, item);
                        } else {
                            switch (item.type) {
                                case 'Button':
                                    dom = this.buttonRendering(item, innerEle);
                                    dom.setAttribute('tabindex', '-1');
                                    innerEle.appendChild(dom);
                                    innerEle.addEventListener('click', this.itemClick.bind(this));
                                    break;
                                case 'Separator':
                                    this.add(innerEle, CLS_SEPARATOR);
                                    break;
                            }
                        }
                        if (item.showTextOn) {
                            var sTxt = item.showTextOn;
                            if (sTxt === 'Toolbar') {
                                this.add(innerEle, CLS_POPUPTEXT);
                                this.add(innerEle, 'e-tbtn-align');
                            } else if (sTxt === 'Overflow') {
                                this.add(innerEle, CLS_TBARTEXT);
                            }
                        }
                        if (item.overflow) {
                            var overflow = item.overflow;
                            if (overflow === 'Show') {
                                this.add(innerEle, CLS_TBAROVERFLOW);
                            } else if (overflow === 'Hide') {
                                if (!innerEle.classList.contains(CLS_SEPARATOR)) {
                                    this.add(innerEle, CLS_POPOVERFLOW);
                                }
                            }
                        }
                        if (item.overflow !== 'Show' && item.showAlwaysInPopup && !innerEle.classList.contains(CLS_SEPARATOR)) {
                            this.add(innerEle, CLS_POPPRI);
                            this.popupPriCount++;
                        }
                        return innerEle;
                    }
                }, {
                    key: 'itemClick',
                    value: function itemClick(e) {
                        this.activeEleSwitch(e.currentTarget);
                    }
                }, {
                    key: 'activeEleSwitch',
                    value: function activeEleSwitch(ele) {
                        this.activeEleRemove(ele.firstElementChild);
                        this.activeEle.focus();
                    }
                }, {
                    key: 'activeEleRemove',
                    value: function activeEleRemove(curEle) {
                        if (!isNullOrUndefined(this.activeEle)) {
                            this.activeEle.setAttribute('tabindex', '-1');
                        }
                        this.activeEle = curEle;
                        if (isNullOrUndefined(this.trgtEle) && !curEle.parentElement.classList.contains(CLS_TEMPLATE)) {
                            curEle.removeAttribute('tabindex');
                        } else {
                            this.activeEle.setAttribute('tabindex', '0');
                        }
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist([]);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'toolbar';
                    }
                }, {
                    key: 'itemsRerender',
                    value: function itemsRerender(newProp) {
                        this.items = this.tbarItemsCol;
                        this.destroyMode();
                        this.destroyItems();
                        this.items = newProp;
                        this.tbarItemsCol = this.items;
                        this.renderItems();
                        this.renderOverflowMode();
                    }
                }, {
                    key: 'resize',
                    value: function resize() {
                        var ele = this.element;
                        this.tbResize = true;
                        if (this.tbarAlign) {
                            this.itemPositioning();
                        }
                        if (this.popObj) {
                            this.popObj.hide();
                        }
                        var checkOverflow = this.checkOverflow(ele, ele.getElementsByClassName(CLS_ITEMS)[0]);
                        if (!checkOverflow) {
                            this.destroyHScroll();
                        }
                        if (checkOverflow && this.scrollModule && this.offsetWid === ele.offsetWidth) {
                            return;
                        }
                        if (this.offsetWid > ele.offsetWidth || checkOverflow) {
                            this.renderOverflowMode();
                        }
                        if (this.popObj) {
                            if (this.tbarAlign) {
                                this.removePositioning();
                            }
                            this.popupRefresh(this.popObj.element, false);
                            if (this.tbarAlign) {
                                this.refreshPositioning();
                            }
                        }
                        this.offsetWid = ele.offsetWidth;
                        this.tbResize = false;
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var tEle = this.element;
                        var _iteratorNormalCompletion8 = true;
                        var _didIteratorError8 = false;
                        var _iteratorError8 = undefined;

                        try {
                            for (var _iterator8 = Object.keys(newProp)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                var prop = _step8.value;

                                switch (prop) {
                                    case 'items':
                                        if (!(newProp.items instanceof Array && oldProp.items instanceof Array)) {
                                            var changedProb = Object.keys(newProp.items);
                                            for (var i = 0; i < changedProb.length; i++) {
                                                var index = parseInt(Object.keys(newProp.items)[i], 10);
                                                var property = Object.keys(newProp.items[index])[0];
                                                var oldProperty = Object(oldProp.items[index])[property];
                                                var newProperty = Object(newProp.items[index])[property];
                                                if (this.tbarAlign || property === 'align') {
                                                    this.refresh();
                                                    break;
                                                }
                                                var popupPriCheck = property === 'showAlwaysInPopup' && !newProperty;
                                                if (popupPriCheck || this.items[index].showAlwaysInPopup && property === 'overflow' && this.popupPriCount !== 0) {
                                                    --this.popupPriCount;
                                                }
                                                this.destroyMode();
                                                var itemCol = [].slice.call(selectAll('.' + CLS_ITEMS + ' .' + CLS_ITEM, tEle));
                                                detach(itemCol[index]);
                                                this.tbarEle.splice(index, 1);
                                                this.addItems([this.items[index]], index);
                                                this.items.splice(index, 1);
                                                if (this.items[index].template) {
                                                    this.tbarEle.splice(this.items.length, 1);
                                                }
                                            }
                                        } else {
                                            this.itemsRerender(newProp.items);
                                        }
                                        break;
                                    case 'width':
                                        var wid = tEle.offsetWidth;
                                        setStyleAttribute(tEle, { 'width': formatUnit(newProp.width) });
                                        this.renderOverflowMode();
                                        if (this.popObj && wid < tEle.offsetWidth) {
                                            this.popupRefresh(this.popObj.element, false);
                                        }
                                        break;
                                    case 'height':
                                        setStyleAttribute(this.element, { 'height': formatUnit(newProp.height) });
                                        break;
                                    case 'overflowMode':
                                        this.destroyMode();
                                        this.renderOverflowMode();
                                        if (this.enableRtl) {
                                            this.add(tEle, CLS_RTL$1);
                                        }
                                        this.refreshOverflow();
                                        break;
                                    case 'enableRtl':
                                        newProp.enableRtl ? this.add(tEle, CLS_RTL$1) : this.remove(tEle, CLS_RTL$1);
                                        if (!isNullOrUndefined(this.scrollModule)) {
                                            newProp.enableRtl ? this.add(this.scrollModule.element, CLS_RTL$1) : this.remove(this.scrollModule.element, CLS_RTL$1);
                                        }
                                        if (!isNullOrUndefined(this.popObj)) {
                                            newProp.enableRtl ? this.add(this.popObj.element, CLS_RTL$1) : this.remove(this.popObj.element, CLS_RTL$1);
                                        }
                                        if (this.tbarAlign) {
                                            this.itemPositioning();
                                        }
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError8 = true;
                            _iteratorError8 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                    _iterator8.return();
                                }
                            } finally {
                                if (_didIteratorError8) {
                                    throw _iteratorError8;
                                }
                            }
                        }
                    }
                }, {
                    key: 'hideItem',
                    value: function hideItem(index, value) {
                        if (this.tbarEle[index]) {
                            var innerItems = [].slice.call(selectAll('.' + CLS_ITEM, this.element));
                            if (value === true) {
                                innerItems[index].classList.add(CLS_HIDDEN);
                            } else {
                                innerItems[index].classList.remove(CLS_HIDDEN);
                            }
                            this.refreshOverflow();
                        }
                    }
                }]);

                return Toolbar;
            }(Component));

            __decorate$1([Collection([], Item)], Toolbar.prototype, "items", void 0);
            __decorate$1([Property('auto')], Toolbar.prototype, "width", void 0);
            __decorate$1([Property('auto')], Toolbar.prototype, "height", void 0);
            __decorate$1([Property('Scrollable')], Toolbar.prototype, "overflowMode", void 0);
            __decorate$1([Property(false)], Toolbar.prototype, "enableRtl", void 0);
            __decorate$1([Event()], Toolbar.prototype, "clicked", void 0);
            __decorate$1([Event()], Toolbar.prototype, "created", void 0);
            __decorate$1([Event()], Toolbar.prototype, "destroyed", void 0);
            __decorate$1([Event()], Toolbar.prototype, "beforeCreate", void 0);
            _export('Toolbar', Toolbar = __decorate$1([NotifyPropertyChanges], Toolbar));

            /**
             * Toolbar modules
             */

            __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            CLS_ACRDN_ROOT = 'e-acrdn-root';
            CLS_ROOT$1 = 'e-accordion';
            CLS_ITEM$1 = 'e-acrdn-item';
            CLS_ITEMFOCUS = 'e-item-focus';
            CLS_ITEMHIDE = 'e-hide';
            CLS_HEADER = 'e-acrdn-header';
            CLS_HEADERICN = 'e-acrdn-header-icon';
            CLS_HEADERCTN = 'e-acrdn-header-content';
            CLS_CONTENT = 'e-acrdn-panel';
            CLS_CTENT = 'e-acrdn-content';
            CLS_TOOGLEICN = 'e-toggle-icon';
            CLS_COLLAPSEICN = 'e-tgl-collapse-icon e-icons';
            CLS_EXPANDICN = 'e-expand-icon';
            CLS_RTL$2 = 'e-rtl';
            CLS_CTNHIDE = 'e-content-hide';
            CLS_SLCT = 'e-select';
            CLS_SLCTED = 'e-selected';
            CLS_ACTIVE = 'e-active';
            CLS_ANIMATE = 'e-animate';
            CLS_DISABLE$2 = 'e-overlay';
            CLS_TOGANIMATE = 'e-toggle-animation';
            CLS_NEST = 'e-nested';
            CLS_EXPANDSTATE = 'e-expand-state';

            _export('AccordionActionSettings', AccordionActionSettings = function (_ChildProperty2) {
                _inherits(AccordionActionSettings, _ChildProperty2);

                function AccordionActionSettings() {
                    _classCallCheck(this, AccordionActionSettings);

                    return _possibleConstructorReturn(this, (AccordionActionSettings.__proto__ || Object.getPrototypeOf(AccordionActionSettings)).apply(this, arguments));
                }

                return AccordionActionSettings;
            }(ChildProperty));

            __decorate$2([Property('SlideDown')], AccordionActionSettings.prototype, "effect", void 0);
            __decorate$2([Property(400)], AccordionActionSettings.prototype, "duration", void 0);
            __decorate$2([Property('linear')], AccordionActionSettings.prototype, "easing", void 0);

            _export('AccordionAnimationSettings', AccordionAnimationSettings = function (_ChildProperty3) {
                _inherits(AccordionAnimationSettings, _ChildProperty3);

                function AccordionAnimationSettings() {
                    _classCallCheck(this, AccordionAnimationSettings);

                    return _possibleConstructorReturn(this, (AccordionAnimationSettings.__proto__ || Object.getPrototypeOf(AccordionAnimationSettings)).apply(this, arguments));
                }

                return AccordionAnimationSettings;
            }(ChildProperty));

            __decorate$2([Complex({ effect: 'SlideUp', duration: 400, easing: 'linear' }, AccordionActionSettings)], AccordionAnimationSettings.prototype, "collapse", void 0);
            __decorate$2([Complex({ effect: 'SlideDown', duration: 400, easing: 'linear' }, AccordionActionSettings)], AccordionAnimationSettings.prototype, "expand", void 0);
            /**
             * An item object that is used to configure Accordion items.
             */

            _export('AccordionItem', AccordionItem = function (_ChildProperty4) {
                _inherits(AccordionItem, _ChildProperty4);

                function AccordionItem() {
                    _classCallCheck(this, AccordionItem);

                    return _possibleConstructorReturn(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).apply(this, arguments));
                }

                return AccordionItem;
            }(ChildProperty));

            __decorate$2([Property(undefined)], AccordionItem.prototype, "content", void 0);
            __decorate$2([Property(undefined)], AccordionItem.prototype, "header", void 0);
            __decorate$2([Property(undefined)], AccordionItem.prototype, "cssClass", void 0);
            __decorate$2([Property(undefined)], AccordionItem.prototype, "iconCss", void 0);
            __decorate$2([Property(false)], AccordionItem.prototype, "expanded", void 0);
            /**
             * The Accordion is a vertically collapsible content panel that displays one or more panels at a time within the available space.
             * ```html
             * <div id='accordion'/>
             * <script>
             *   var accordionObj = new Accordion();
             *   accordionObj.appendTo('#accordion');
             * </script>
             * ```
             */

            _export('Accordion', Accordion = function (_Component3) {
                _inherits(Accordion, _Component3);

                /**
                 * Initializes a new instance of the Accordion class.
                 * @param options  - Specifies Accordion model properties as options.
                 * @param element  - Specifies the element that is rendered as an Accordion.
                 */
                function Accordion(options, element) {
                    _classCallCheck(this, Accordion);

                    var _this14 = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, options, element));

                    /**
                     * Contains the keyboard configuration of the Accordion.
                     */
                    _this14.keyConfigs = {
                        moveUp: 'uparrow',
                        moveDown: 'downarrow',
                        enter: 'enter',
                        space: 'space',
                        home: 'home',
                        end: 'end'
                    };
                    return _this14;
                }
                /**
                 * Removes the control from the DOM and also removes all its related events.
                 * @returns void
                 */


                _createClass(Accordion, [{
                    key: 'destroy',
                    value: function destroy() {
                        var _this15 = this;

                        var ele = this.element;
                        _get(Accordion.prototype.__proto__ || Object.getPrototypeOf(Accordion.prototype), 'destroy', this).call(this);
                        this.unwireEvents();
                        this.isDestroy = true;
                        this.templateEle.forEach(function (eleStr) {
                            document.body.appendChild(_this15.element.querySelector(eleStr)).style.display = 'none';
                        });
                        while (ele.firstChild) {
                            ele.removeChild(ele.firstChild);
                        }
                        if (this.trgtEle) {
                            while (this.ctrlTem.firstChild) {
                                ele.appendChild(this.ctrlTem.firstChild);
                            }
                        }
                        ele.removeAttribute('style');
                        ['aria-disabled', 'aria-multiselectable', 'role'].forEach(function (attrb) {
                            _this15.element.removeAttribute(attrb);
                        });
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        var nested = closest(this.element, '.' + CLS_CONTENT);
                        this.isNested = false;
                        this.templateEle = [];
                        if (!this.isDestroy) {
                            this.isDestroy = false;
                        }
                        if (!isNullOrUndefined(nested)) {
                            nested.classList.add(CLS_NEST);
                            this.isNested = true;
                        } else {
                            this.element.classList.add(CLS_ACRDN_ROOT);
                        }
                        if (this.enableRtl) {
                            this.add(this.element, CLS_RTL$2);
                        }
                        if (!this.enablePersistence || isNullOrUndefined(this.expandedItems)) {
                            this.expandedItems = [];
                        }
                    }
                }, {
                    key: 'add',
                    value: function add(ele, val) {
                        ele.classList.add(val);
                    }
                }, {
                    key: 'remove',
                    value: function remove(ele, val) {
                        ele.classList.remove(val);
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.initialize();
                        this.renderControl();
                        this.wireEvents();
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        var width = formatUnit(this.width);
                        var height = formatUnit(this.height);
                        setStyleAttribute(this.element, { 'width': width, 'height': height });
                        var ariaAttr = {
                            'aria-disabled': 'false', 'role': 'presentation', 'aria-multiselectable': 'true'
                        };
                        if (this.expandedItems.length > 0) {
                            this.initExpand = this.expandedItems;
                        }
                        attributes(this.element, ariaAttr);
                        if (this.expandMode === 'Single') {
                            this.element.setAttribute('aria-multiselectable', 'false');
                        }
                    }
                }, {
                    key: 'renderControl',
                    value: function renderControl() {
                        this.trgtEle = this.element.children.length > 0 ? _select('div', this.element) : null;
                        this.renderItems();
                        this.initItemExpand();
                    }
                }, {
                    key: 'unwireEvents',
                    value: function unwireEvents() {
                        EventHandler.remove(this.element, 'click', this.clickHandler);
                        if (!isNullOrUndefined(this.keyModule)) {
                            this.keyModule.destroy();
                        }
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        EventHandler.add(this.element, 'click', this.clickHandler, this);
                        if (!this.isNested && !this.isDestroy) {
                            rippleEffect(this.element, { selector: '.' + CLS_HEADER });
                        }
                        if (!this.isNested) {
                            this.keyModule = new KeyboardEvents(this.element, {
                                keyAction: this.keyActionHandler.bind(this),
                                keyConfigs: this.keyConfigs,
                                eventName: 'keydown'
                            });
                        }
                    }
                }, {
                    key: 'focusIn',
                    value: function focusIn(e) {
                        e.target.parentElement.classList.add(CLS_ITEMFOCUS);
                    }
                }, {
                    key: 'focusOut',
                    value: function focusOut(e) {
                        e.target.parentElement.classList.remove(CLS_ITEMFOCUS);
                    }
                }, {
                    key: 'ctrlTemplate',
                    value: function ctrlTemplate() {
                        var _this16 = this;

                        this.ctrlTem = this.element.cloneNode(true);
                        var innerEles = this.element.children;
                        var content = void 0;
                        _addClass(innerEles, [CLS_ITEM$1]);
                        [].slice.call(innerEles).forEach(function (el) {
                            el.id = getUniqueID('acrdn_item');
                            if (el.children.length > 0) {
                                _this16.add(el.children[0], CLS_HEADER);
                                var header = el.children[0];
                                attributes(header, { 'tabindex': '0', 'role': 'heading', 'aria-level': innerEles.length.toString() });
                                header.id = getUniqueID('acrdn_header');
                                EventHandler.add(header, 'focus', _this16.focusIn, _this16);
                                EventHandler.add(header, 'blur', _this16.focusOut, _this16);
                                var headerEle = header.firstElementChild;
                                if (headerEle) {
                                    headerEle.classList.add(CLS_HEADERCTN);
                                }
                                content = el.children[1];
                                if (content) {
                                    content.id = getUniqueID('acrdn_panel');
                                    header.setAttribute('aria-controls', content.id);
                                    content.style.display = '';
                                    el.classList.add(CLS_SLCT);
                                    el.children[0].appendChild(_this16.toggleIconGenerate());
                                    classList(content, [CLS_CONTENT, CLS_CTNHIDE], []);
                                    attributes(content, { 'aria-labelledby': header.id, 'aria-hidden': 'true' });
                                    content = content.firstElementChild;
                                    if (content) {
                                        content.classList.add(CLS_CTENT);
                                        content.style.display = '';
                                    }
                                }
                            }
                        });
                    }
                }, {
                    key: 'toggleIconGenerate',
                    value: function toggleIconGenerate() {
                        var tglIcon = createElement('div', { className: CLS_TOOGLEICN });
                        var hdrColIcon = createElement('span', { className: CLS_COLLAPSEICN });
                        tglIcon.appendChild(hdrColIcon);
                        return tglIcon;
                    }
                }, {
                    key: 'initItemExpand',
                    value: function initItemExpand() {
                        var len = this.initExpand.length;
                        if (len === 0) {
                            return;
                        }
                        if (this.expandMode === 'Single') {
                            this.expandItem(true, this.initExpand[len - 1]);
                        } else {
                            for (var i = 0; i < len; i++) {
                                this.expandItem(true, this.initExpand[i]);
                            }
                        }
                    }
                }, {
                    key: 'renderItems',
                    value: function renderItems() {
                        var _this17 = this;

                        var ele = this.element;
                        var innerItem = void 0;
                        if (isNullOrUndefined(this.initExpand)) {
                            this.initExpand = [];
                        }
                        var items = this.items;
                        if (!isNullOrUndefined(this.trgtEle)) {
                            this.ctrlTemplate();
                        } else if (ele && items.length > 0) {
                            items.forEach(function (item, index) {
                                innerItem = _this17.renderInnerItem(item, index);
                                ele.appendChild(innerItem);
                                if (innerItem.childElementCount > 0) {
                                    EventHandler.add(innerItem.querySelector('.' + CLS_HEADER), 'focus', _this17.focusIn, _this17);
                                    EventHandler.add(innerItem.querySelector('.' + CLS_HEADER), 'blur', _this17.focusOut, _this17);
                                }
                            });
                        }
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(e) {
                        var _this18 = this;

                        var trgt = e.target;
                        var eventArgs = {};
                        var index = void 0;
                        var tglIcon = void 0;
                        var acrdEle = closest(trgt, '.' + CLS_ROOT$1);
                        if (acrdEle !== this.element) {
                            return;
                        }
                        trgt.classList.add('e-target');
                        var acrdnItem = closest(trgt, '.' + CLS_ITEM$1);
                        var acrdnHdr = closest(trgt, '.' + CLS_HEADER);
                        var acrdnCtn = closest(trgt, '.' + CLS_CONTENT);
                        if (acrdnItem && (isNullOrUndefined(acrdnHdr) || isNullOrUndefined(acrdnCtn))) {
                            acrdnHdr = acrdnItem.children[0];
                            acrdnCtn = acrdnItem.children[1];
                        }
                        if (acrdnHdr) {
                            tglIcon = _select('.' + CLS_TOOGLEICN, acrdnHdr);
                        }
                        var acrdnCtnItem = void 0;
                        if (acrdnCtn) {
                            acrdnCtnItem = closest(acrdnCtn, '.' + CLS_ITEM$1);
                        }
                        var acrdActive = [];
                        index = this.getIndexByItem(acrdnItem);
                        if (acrdnCtnItem) {
                            eventArgs.item = this.items[this.getIndexByItem(acrdnCtnItem)];
                        }
                        eventArgs.originalEvent = e;
                        var ctnCheck = !isNullOrUndefined(tglIcon) && isNullOrUndefined(this.trgtEle) && acrdnItem.childElementCount <= 1;
                        if (ctnCheck && (isNullOrUndefined(acrdnCtn) || !isNullOrUndefined(_select('.' + CLS_HEADER + ' .' + CLS_TOOGLEICN, acrdnCtnItem)))) {
                            acrdnItem.appendChild(this.contentRendering(index));
                            this.ariaAttrUpdate(acrdnItem);
                        }
                        this.trigger('clicked', eventArgs);
                        var cntclkCheck = acrdnCtn && !isNullOrUndefined(_select('.e-target', acrdnCtn));
                        cntclkCheck = cntclkCheck && (isNullOrUndefined(_select('.' + CLS_ROOT$1, acrdnCtn)) || !(closest(trgt, '.' + CLS_ROOT$1) === this.element));
                        trgt.classList.remove('e-target');
                        if (trgt.classList.contains(CLS_CONTENT) || trgt.classList.contains(CLS_CTENT) || cntclkCheck) {
                            return;
                        }
                        [].slice.call(this.element.children).forEach(function (el) {
                            if (el.classList.contains(CLS_ACTIVE)) {
                                acrdActive.push(el);
                            }
                        });
                        var acrdAniEle = [].slice.call(this.element.querySelectorAll('.' + CLS_ITEM$1 + ' [' + CLS_ANIMATE + ']'));
                        if (acrdAniEle.length > 0) {
                            var _iteratorNormalCompletion9 = true;
                            var _didIteratorError9 = false;
                            var _iteratorError9 = undefined;

                            try {
                                for (var _iterator9 = acrdAniEle[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                    var el = _step9.value;

                                    acrdActive.push(el.parentElement);
                                }
                            } catch (err) {
                                _didIteratorError9 = true;
                                _iteratorError9 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                                        _iterator9.return();
                                    }
                                } finally {
                                    if (_didIteratorError9) {
                                        throw _iteratorError9;
                                    }
                                }
                            }
                        }
                        var sameContentCheck = acrdActive.indexOf(acrdnCtnItem) !== -1 && acrdnCtn.getAttribute('e-animate') === 'true';
                        var sameHeader = false;
                        if (!isNullOrUndefined(acrdnItem) && !isNullOrUndefined(acrdnHdr)) {
                            var _acrdnCtn = _select('.' + CLS_CONTENT, acrdnItem);
                            var acrdnRoot = closest(acrdnItem, '.' + CLS_ACRDN_ROOT);
                            var expandState = acrdnRoot.querySelector('.' + CLS_EXPANDSTATE);
                            if (isNullOrUndefined(_acrdnCtn)) {
                                return;
                            }
                            sameHeader = expandState === acrdnItem;
                            if (isVisible(_acrdnCtn) && (!sameContentCheck || acrdnCtnItem.classList.contains(CLS_SLCTED))) {
                                this.collapse(_acrdnCtn);
                            } else {
                                if (acrdActive.length > 0 && this.expandMode === 'Single' && !sameContentCheck) {
                                    acrdActive.forEach(function (el) {
                                        _this18.collapse(_select('.' + CLS_CONTENT, el));
                                        el.classList.remove(CLS_EXPANDSTATE);
                                    });
                                }
                                this.expand(_acrdnCtn);
                            }
                            if (!isNullOrUndefined(expandState) && !sameHeader) {
                                expandState.classList.remove(CLS_EXPANDSTATE);
                            }
                        }
                    }
                }, {
                    key: 'eleMoveFocus',
                    value: function eleMoveFocus(action, root, trgt) {
                        var clst = void 0;
                        var clstItem = closest(trgt, '.' + CLS_ITEM$1);
                        if (trgt === root) {
                            clst = (action === 'moveUp' ? trgt.lastElementChild : trgt).querySelector('.' + CLS_HEADER);
                        } else if (trgt.classList.contains(CLS_HEADER)) {
                            clstItem = action === 'moveUp' ? clstItem.previousElementSibling : clstItem.nextElementSibling;
                            if (clstItem) {
                                clst = _select('.' + CLS_HEADER, clstItem);
                            }
                        }
                        if (clst) {
                            clst.focus();
                        }
                    }
                }, {
                    key: 'keyActionHandler',
                    value: function keyActionHandler(e) {
                        var trgt = e.target;
                        if (trgt.tagName === 'INPUT' || trgt.tagName === 'TEXTAREA') {
                            return;
                        }
                        e.preventDefault();
                        var clst = void 0;
                        var root = this.element;
                        var content = void 0;
                        switch (e.action) {
                            case 'moveUp':
                                this.eleMoveFocus(e.action, root, trgt);
                                break;
                            case 'moveDown':
                                this.eleMoveFocus(e.action, root, trgt);
                                break;
                            case 'space':
                            case 'enter':
                                content = trgt.nextElementSibling;
                                if (!isNullOrUndefined(content) && content.classList.contains(CLS_CONTENT)) {
                                    if (content.getAttribute('e-animate') !== 'true') {
                                        trgt.click();
                                    }
                                } else {
                                    trgt.click();
                                }
                                break;
                            case 'home':
                            case 'end':
                                clst = e.action === 'home' ? root.firstElementChild.children[0] : root.lastElementChild.children[0];
                                clst.focus();
                                break;
                        }
                    }
                }, {
                    key: 'headerEleGenerate',
                    value: function headerEleGenerate() {
                        var header = createElement('div', { className: CLS_HEADER, id: getUniqueID('acrdn_header') });
                        var ariaAttr = {
                            'tabindex': '0', 'role': 'heading', 'aria-expanded': 'false', 'aria-selected': 'false',
                            'aria-disabled': 'false', 'aria-level': this.items.length.toString()
                        };
                        attributes(header, ariaAttr);
                        return header;
                    }
                }, {
                    key: 'renderInnerItem',
                    value: function renderInnerItem(item, index) {
                        var innerEle = void 0;
                        innerEle = createElement('div', { className: CLS_ITEM$1 });
                        innerEle.id = getUniqueID('acrdn_item');
                        if (item.header) {
                            var ctnEle = this.headerEleGenerate();
                            var hdrEle = createElement('div', { className: CLS_HEADERCTN });
                            ctnEle.appendChild(hdrEle);
                            ctnEle.appendChild(this.fetchElement(hdrEle, item.header, index, true));
                            innerEle.appendChild(ctnEle);
                        }
                        var hdr = _select('.' + CLS_HEADER, innerEle);
                        if (item.expanded && !isNullOrUndefined(index) && !this.enablePersistence) {
                            if (this.initExpand.indexOf(index) === -1) {
                                this.initExpand.push(index);
                            }
                        }
                        if (item.cssClass) {
                            innerEle.classList.add(item.cssClass);
                        }
                        if (item.iconCss) {
                            var hdrIcnEle = createElement('div', { className: CLS_HEADERICN });
                            var icon = createElement('span', { className: item.iconCss + ' e-icons' });
                            hdrIcnEle.appendChild(icon);
                            if (isNullOrUndefined(hdr)) {
                                hdr = this.headerEleGenerate();
                                hdr.appendChild(hdrIcnEle);
                                innerEle.appendChild(hdr);
                            } else {
                                hdr.insertBefore(hdrIcnEle, hdr.childNodes[0]);
                            }
                        }
                        if (item.content) {
                            var hdrIcon = this.toggleIconGenerate();
                            if (isNullOrUndefined(hdr)) {
                                hdr = this.headerEleGenerate();
                                innerEle.appendChild(hdr);
                            }
                            hdr.appendChild(hdrIcon);
                            this.add(innerEle, CLS_SLCT);
                        }
                        return innerEle;
                    }
                }, {
                    key: 'fetchElement',
                    value: function fetchElement(ele, value, index, isHeader) {
                        var templateFn = void 0;
                        var temString = void 0;
                        try {
                            if (document.querySelectorAll(value).length) {
                                var eleVal = document.querySelector(value);
                                temString = eleVal.outerHTML.trim();
                                ele.appendChild(eleVal);
                                eleVal.style.display = '';
                            }
                        } catch (e) {
                            templateFn = compile(value);
                        }
                        if (!isNullOrUndefined(templateFn) && templateFn().length > 0 && !(isNullOrUndefined(templateFn()[0].tagName) && templateFn().length === 1)) {
                            [].slice.call(templateFn()).forEach(function (el) {
                                if (!isNullOrUndefined(el.tagName)) {
                                    el.style.display = '';
                                }
                                ele.appendChild(el);
                            });
                        } else if (ele.childElementCount === 0) {
                            ele.innerHTML = value;
                        }
                        if (!isNullOrUndefined(temString)) {
                            this.templateEle.push(value);
                        }
                        return ele;
                    }
                }, {
                    key: 'ariaAttrUpdate',
                    value: function ariaAttrUpdate(itemEle) {
                        var header = _select('.' + CLS_HEADER, itemEle);
                        var content = _select('.' + CLS_CONTENT, itemEle);
                        header.setAttribute('aria-controls', content.id);
                        content.setAttribute('aria-labelledby', header.id);
                    }
                }, {
                    key: 'contentRendering',
                    value: function contentRendering(index) {
                        var content = this.items[index].content;
                        var itemcnt = createElement('div', { className: CLS_CONTENT + ' ' + CLS_CTNHIDE, id: getUniqueID('acrdn_panel') });
                        attributes(itemcnt, { 'aria-hidden': 'true' });
                        var ctn = createElement('div', { className: CLS_CTENT });
                        itemcnt.appendChild(this.fetchElement(ctn, content, index, false));
                        return itemcnt;
                    }
                }, {
                    key: 'expand',
                    value: function expand(trgt) {
                        var eventArgs = void 0;
                        var trgtItemEle = closest(trgt, '.' + CLS_ITEM$1);
                        if (isNullOrUndefined(trgt) || isVisible(trgt) && trgt.getAttribute('e-animate') !== 'true' || trgtItemEle.classList.contains(CLS_DISABLE$2)) {
                            return;
                        }
                        var acrdnRoot = closest(trgtItemEle, '.' + CLS_ACRDN_ROOT);
                        var expandState = acrdnRoot.querySelector('.' + CLS_EXPANDSTATE);
                        var animation = {
                            name: this.animation.expand.effect,
                            duration: this.animation.expand.duration,
                            timingFunction: this.animation.expand.easing
                        };
                        var icon = _select('.' + CLS_TOOGLEICN, trgtItemEle).firstElementChild;
                        eventArgs = { element: trgtItemEle,
                            item: this.items[this.getIndexByItem(trgtItemEle)],
                            isExpanded: true };
                        var eff = animation.name;
                        this.trigger('expanding', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        icon.classList.add(CLS_TOGANIMATE);
                        this.expandedItemsPush(trgtItemEle);
                        if (!isNullOrUndefined(expandState)) {
                            expandState.classList.remove(CLS_EXPANDSTATE);
                        }
                        trgtItemEle.classList.add(CLS_EXPANDSTATE);
                        if (animation.name === 'None') {
                            this.expandProgress('begin', icon, trgt, trgtItemEle, eventArgs);
                            this.expandProgress('end', icon, trgt, trgtItemEle, eventArgs);
                            return;
                        }
                        this.expandAnimation(eff, icon, trgt, trgtItemEle, animation, eventArgs);
                    }
                }, {
                    key: 'expandAnimation',
                    value: function expandAnimation(ef, icn, trgt, trgtItemEle, animate, args) {
                        var _this19 = this;

                        var height = void 0;
                        var trgtHgt = void 0;
                        if (ef === 'SlideDown') {
                            animate.begin = function () {
                                _this19.expandProgress('begin', icn, trgt, trgtItemEle, args);
                                trgt.style.position = 'absolute';
                                height = trgtItemEle.offsetHeight;
                                trgtHgt = trgt.offsetHeight;
                                trgt.style.maxHeight = trgt.offsetHeight + 'px';
                                trgtItemEle.style.maxHeight = '';
                            };
                            animate.progress = function () {
                                trgtItemEle.style.minHeight = height + trgt.offsetHeight + 'px';
                            };
                            animate.end = function () {
                                setStyleAttribute(trgt, { 'position': '', 'maxHeight': '' });
                                trgtItemEle.style.minHeight = '';
                                _this19.expandProgress('end', icn, trgt, trgtItemEle, args);
                            };
                        } else {
                            animate.begin = function () {
                                _this19.expandProgress('begin', icn, trgt, trgtItemEle, args);
                            };
                            animate.end = function () {
                                _this19.expandProgress('end', icn, trgt, trgtItemEle, args);
                            };
                        }
                        new Animation(animate).animate(trgt);
                    }
                }, {
                    key: 'expandProgress',
                    value: function expandProgress(progress, icon, trgt, trgtItemEle, eventArgs) {
                        this.remove(trgt, CLS_CTNHIDE);
                        this.add(trgtItemEle, CLS_SLCTED);
                        this.add(icon, CLS_EXPANDICN);
                        if (progress === 'end') {
                            this.add(trgtItemEle, CLS_ACTIVE);
                            trgt.setAttribute('aria-hidden', 'false');
                            attributes(trgt.previousElementSibling, { 'aria-selected': 'true', 'aria-expanded': 'true' });
                            icon.classList.remove(CLS_TOGANIMATE);
                            this.trigger('expanded', eventArgs);
                        }
                    }
                }, {
                    key: 'expandedItemsPush',
                    value: function expandedItemsPush(item) {
                        var index = this.getIndexByItem(item);
                        if (this.expandedItems.indexOf(index) === -1) {
                            this.expandedItems.push(index);
                        }
                    }
                }, {
                    key: 'getIndexByItem',
                    value: function getIndexByItem(item) {
                        return [].slice.call(this.element.children).indexOf(item);
                    }
                }, {
                    key: 'expandedItemsPop',
                    value: function expandedItemsPop(item) {
                        var index = this.getIndexByItem(item);
                        this.expandedItems.splice(this.expandedItems.indexOf(index), 1);
                    }
                }, {
                    key: 'collapse',
                    value: function collapse(trgt) {
                        var eventArgs = void 0;
                        var trgtItemEle = closest(trgt, '.' + CLS_ITEM$1);
                        if (isNullOrUndefined(trgt) || !isVisible(trgt) || trgtItemEle.classList.contains(CLS_DISABLE$2)) {
                            return;
                        }
                        var animation = {
                            name: this.animation.collapse.effect,
                            duration: this.animation.collapse.duration,
                            timingFunction: this.animation.collapse.easing
                        };
                        var icon = _select('.' + CLS_TOOGLEICN, trgtItemEle).firstElementChild;
                        eventArgs = { element: trgtItemEle,
                            item: this.items[this.getIndexByItem(trgtItemEle)],
                            isExpanded: false };
                        var eff = animation.name;
                        this.trigger('expanding', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        this.expandedItemsPop(trgtItemEle);
                        trgtItemEle.classList.add(CLS_EXPANDSTATE);
                        icon.classList.add(CLS_TOGANIMATE);
                        if (animation.name === 'None') {
                            this.collapseProgress('begin', icon, trgt, trgtItemEle, eventArgs);
                            this.collapseProgress('end', icon, trgt, trgtItemEle, eventArgs);
                            return;
                        }
                        this.collapseAnimation(eff, trgt, trgtItemEle, icon, animation, eventArgs);
                    }
                }, {
                    key: 'collapseAnimation',
                    value: function collapseAnimation(ef, trgt, trgtItEl, icn, animate, args) {
                        var _this20 = this;

                        var height = void 0;
                        var trgtHeight = void 0;
                        var itemHeight = void 0;
                        var remain = void 0;
                        if (ef === 'SlideUp') {
                            animate.begin = function () {
                                itemHeight = trgtItEl.offsetHeight;
                                trgtItEl.style.minHeight = itemHeight + 'px';
                                trgt.style.position = 'absolute';
                                height = trgtItEl.offsetHeight;
                                trgtHeight = trgt.offsetHeight;
                                trgt.style.maxHeight = trgtHeight + 'px';
                                _this20.collapseProgress('begin', icn, trgt, trgtItEl, args);
                            };
                            animate.progress = function () {
                                remain = height - (trgtHeight - trgt.offsetHeight);
                                if (remain < itemHeight) {
                                    trgtItEl.style.minHeight = remain + 'px';
                                }
                            };
                            animate.end = function () {
                                trgt.style.display = 'none';
                                _this20.collapseProgress('end', icn, trgt, trgtItEl, args);
                                trgtItEl.style.minHeight = '';
                                setStyleAttribute(trgt, { 'position': '', 'maxHeight': '', 'display': '' });
                            };
                        } else {
                            animate.begin = function () {
                                _this20.collapseProgress('begin', icn, trgt, trgtItEl, args);
                            };
                            animate.end = function () {
                                _this20.collapseProgress('end', icn, trgt, trgtItEl, args);
                            };
                        }
                        new Animation(animate).animate(trgt);
                    }
                }, {
                    key: 'collapseProgress',
                    value: function collapseProgress(progress, icon, trgt, trgtItemEle, eventArgs) {
                        this.remove(icon, CLS_EXPANDICN);
                        this.remove(trgtItemEle, CLS_SLCTED);
                        if (progress === 'end') {
                            this.add(trgt, CLS_CTNHIDE);
                            icon.classList.remove(CLS_TOGANIMATE);
                            this.remove(trgtItemEle, CLS_ACTIVE);
                            trgt.setAttribute('aria-hidden', 'true');
                            attributes(trgt.previousElementSibling, { 'aria-selected': 'false', 'aria-expanded': 'false' });
                            this.trigger('expanded', eventArgs);
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'accordion';
                    }
                }, {
                    key: 'itemAttribUpdate',
                    value: function itemAttribUpdate() {
                        var itemEle = [].slice.call(this.element.children);
                        var itemLen = this.items.length;
                        itemEle.forEach(function (ele) {
                            _select('.' + CLS_HEADER, ele).setAttribute('aria-level', '' + itemLen);
                        });
                    }
                }, {
                    key: 'addItem',
                    value: function addItem(item, index) {
                        var ele = this.element;
                        if (isNullOrUndefined(index)) {
                            index = this.items.length;
                        }
                        if (ele.childElementCount >= index) {
                            this.items.splice(index, 0, item);
                            var innerItemEle = this.renderInnerItem(item, index);
                            if (ele.childElementCount === index) {
                                ele.appendChild(innerItemEle);
                            } else {
                                ele.insertBefore(innerItemEle, ele.children[index]);
                            }
                            EventHandler.add(innerItemEle.querySelector('.' + CLS_HEADER), 'focus', this.focusIn, this);
                            EventHandler.add(innerItemEle.querySelector('.' + CLS_HEADER), 'blur', this.focusOut, this);
                            this.itemAttribUpdate();
                        }
                        this.expandedItems = [];
                        this.expandedItemRefresh(ele);
                        if (item.expanded) {
                            this.expandItem(true, index);
                        }
                    }
                }, {
                    key: 'expandedItemRefresh',
                    value: function expandedItemRefresh(ele) {
                        var _this21 = this;

                        [].slice.call(ele.children).forEach(function (el) {
                            if (el.classList.contains(CLS_SLCTED)) {
                                _this21.expandedItemsPush(el);
                            }
                        });
                    }
                }, {
                    key: 'removeItem',
                    value: function removeItem(index) {
                        var ele = this.element.children[index];
                        if (isNullOrUndefined(ele)) {
                            return;
                        }
                        detach(ele);
                        this.items.splice(index, 1);
                        this.itemAttribUpdate();
                        this.expandedItems = [];
                        this.expandedItemRefresh(this.element);
                    }
                }, {
                    key: 'select',
                    value: function select(index) {
                        var ele = this.element.children[index];
                        if (isNullOrUndefined(ele) || isNullOrUndefined(_select('.' + CLS_HEADER, ele))) {
                            return;
                        }
                        ele.children[0].focus();
                    }
                }, {
                    key: 'hideItem',
                    value: function hideItem(index, isHidden) {
                        var ele = this.element.children[index];
                        if (isNullOrUndefined(ele)) {
                            return;
                        }
                        if (isNullOrUndefined(isHidden)) {
                            isHidden = true;
                        }
                        isHidden ? this.add(ele, CLS_ITEMHIDE) : this.remove(ele, CLS_ITEMHIDE);
                    }
                }, {
                    key: 'enableItem',
                    value: function enableItem(index, isEnable) {
                        var ele = this.element.children[index];
                        if (isNullOrUndefined(ele)) {
                            return;
                        }
                        var eleHeader = ele.firstElementChild;
                        if (isEnable) {
                            this.remove(ele, CLS_DISABLE$2);
                            attributes(eleHeader, { 'tabindex': '0', 'aria-disabled': 'false' });
                            eleHeader.focus();
                        } else {
                            if (ele.classList.contains(CLS_ACTIVE)) {
                                this.expandItem(false, index);
                                this.eleMoveFocus('movedown', this.element, eleHeader);
                            }
                            this.add(ele, CLS_DISABLE$2);
                            eleHeader.setAttribute('aria-disabled', 'true');
                            eleHeader.removeAttribute('tabindex');
                        }
                    }
                }, {
                    key: 'expandItem',
                    value: function expandItem(isExpand, index) {
                        var _this22 = this;

                        var root = this.element;
                        if (isNullOrUndefined(index)) {
                            if (this.expandMode === 'Single' && isExpand) {
                                var ele = root.children[root.childElementCount - 1];
                                this.itemExpand(isExpand, ele, this.getIndexByItem(ele));
                            } else {
                                [].slice.call(this.element.children).forEach(function (el) {
                                    _this22.itemExpand(isExpand, el, _this22.getIndexByItem(el));
                                });
                            }
                        } else {
                            var _ele6 = this.element.children[index];
                            if (isNullOrUndefined(_ele6) || !_ele6.classList.contains(CLS_SLCT) || _ele6.classList.contains(CLS_ACTIVE) && isExpand) {
                                return;
                            } else {
                                if (this.expandMode === 'Single') {
                                    this.expandItem(false);
                                }
                                this.itemExpand(isExpand, _ele6, index);
                            }
                        }
                    }
                }, {
                    key: 'itemExpand',
                    value: function itemExpand(isExpand, ele, index) {
                        var ctn = ele.children[1];
                        if (ele.classList.contains(CLS_DISABLE$2)) {
                            return;
                        }
                        if (isNullOrUndefined(ctn) && isExpand) {
                            ctn = this.contentRendering(index);
                            ele.appendChild(ctn);
                            this.ariaAttrUpdate(ele);
                        } else if (isNullOrUndefined(ctn)) {
                            return;
                        }
                        isExpand ? this.expand(ctn) : this.collapse(ctn);
                    }
                }, {
                    key: 'destroyItems',
                    value: function destroyItems() {
                        [].slice.call(this.element.querySelectorAll('.' + CLS_ITEM$1)).forEach(function (el) {
                            detach(el);
                        });
                    }
                }, {
                    key: 'updateItem',
                    value: function updateItem(item, index) {
                        if (!isNullOrUndefined(item)) {
                            var itemObj = this.items[index];
                            this.items.splice(index, 1);
                            detach(item);
                            this.addItem(itemObj, index);
                        }
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        var keyEntity = ['expandedItems'];
                        return this.addOnPersist(keyEntity);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var acrdn = this.element;
                        var _iteratorNormalCompletion10 = true;
                        var _didIteratorError10 = false;
                        var _iteratorError10 = undefined;

                        try {
                            for (var _iterator10 = Object.keys(newProp)[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                var prop = _step10.value;

                                switch (prop) {
                                    case 'items':
                                        if (!(newProp.items instanceof Array && oldProp.items instanceof Array)) {
                                            var changedProp = Object.keys(newProp.items);
                                            for (var i = 0; i < changedProp.length; i++) {
                                                var index = parseInt(Object.keys(newProp.items)[i], 10);
                                                var property = Object.keys(newProp.items[index])[0];
                                                var oldVal = Object(oldProp.items[index])[property];
                                                var newVal = Object(newProp.items[index])[property];
                                                var item = selectAll('.' + CLS_ITEM$1, this.element)[index];
                                                if (property === 'header' || property === 'iconCss' || property === 'expanded') {
                                                    this.updateItem(item, index);
                                                }
                                                if (property === 'cssClass' && !isNullOrUndefined(item)) {
                                                    item.classList.remove(oldVal);
                                                    item.classList.add(newVal);
                                                }
                                                if (property === 'content' && !isNullOrUndefined(item) && item.children.length === 2) {
                                                    if (item.classList.contains(CLS_SLCTED)) {
                                                        this.expandItem(false, index);
                                                    }
                                                    detach(item.querySelector('.' + CLS_CONTENT));
                                                }
                                            }
                                        } else {
                                            this.destroyItems();
                                            this.renderItems();
                                            this.initItemExpand();
                                        }
                                        break;
                                    case 'enableRtl':
                                        newProp.enableRtl ? this.add(acrdn, CLS_RTL$2) : this.remove(acrdn, CLS_RTL$2);
                                        break;
                                    case 'height':
                                        setStyleAttribute(this.element, { 'height': formatUnit(newProp.height) });
                                        break;
                                    case 'width':
                                        setStyleAttribute(this.element, { 'width': formatUnit(newProp.width) });
                                        break;
                                    case 'expandMode':
                                        if (newProp.expandMode === 'Single') {
                                            this.element.setAttribute('aria-multiselectable', 'false');
                                            if (this.expandedItems.length > 1) {
                                                this.expandItem(false);
                                            }
                                        } else {
                                            this.element.setAttribute('aria-multiselectable', 'true');
                                        }
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError10 = true;
                            _iteratorError10 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion10 && _iterator10.return) {
                                    _iterator10.return();
                                }
                            } finally {
                                if (_didIteratorError10) {
                                    throw _iteratorError10;
                                }
                            }
                        }
                    }
                }]);

                return Accordion;
            }(Component));

            __decorate$2([Collection([], AccordionItem)], Accordion.prototype, "items", void 0);
            __decorate$2([Property('100%')], Accordion.prototype, "width", void 0);
            __decorate$2([Property('auto')], Accordion.prototype, "height", void 0);
            __decorate$2([Property('Multiple')], Accordion.prototype, "expandMode", void 0);
            __decorate$2([Complex({}, AccordionAnimationSettings)], Accordion.prototype, "animation", void 0);
            __decorate$2([Event()], Accordion.prototype, "clicked", void 0);
            __decorate$2([Event()], Accordion.prototype, "expanding", void 0);
            __decorate$2([Event()], Accordion.prototype, "expanded", void 0);
            __decorate$2([Event()], Accordion.prototype, "created", void 0);
            __decorate$2([Event()], Accordion.prototype, "destroyed", void 0);
            _export('Accordion', Accordion = __decorate$2([NotifyPropertyChanges], Accordion));

            /**
             * Accordion all modules
             */

            __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            DOWNARROW = 'downarrow';
            ENTER = 'enter';
            ESCAPE = 'escape';
            FOCUSED = 'e-focused';
            HEADER = 'e-menu-header';
            LEFTARROW = 'leftarrow';
            RIGHTARROW = 'rightarrow';
            RTL = 'e-rtl';
            SELECTED = 'e-selected';
            SEPARATOR = 'e-separator';
            UPARROW = 'uparrow';
            WRAPPER = 'e-contextmenu-wrapper';
            CARET = 'e-caret';
            ITEM = 'e-menu-item';
            DISABLED = 'e-disabled';
            HIDE = 'e-menu-hide';
            ICONS = 'e-icons';

            _export('MenuItem', MenuItem = function (_ChildProperty5) {
                _inherits(MenuItem, _ChildProperty5);

                function MenuItem() {
                    _classCallCheck(this, MenuItem);

                    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
                }

                return MenuItem;
            }(ChildProperty));

            __decorate$3([Property('')], MenuItem.prototype, "iconCss", void 0);
            __decorate$3([Property('')], MenuItem.prototype, "id", void 0);
            __decorate$3([Property(false)], MenuItem.prototype, "separator", void 0);
            __decorate$3([Collection([], MenuItem)], MenuItem.prototype, "items", void 0);
            __decorate$3([Property('')], MenuItem.prototype, "text", void 0);
            __decorate$3([Property('')], MenuItem.prototype, "url", void 0);
            /**
             * The ContextMenu is a graphical user interface that appears on the user right click/touch hold operation.
             * ```html
             * <div id = 'target'></div>
             * <ul id = 'contextmenu'></ul>
             * ```
             * ```typescript
             * <script>
             * var contextMenuObj = new ContextMenu({items: [{ text: 'Cut' }, { text: 'Copy' },{ text: 'Paste' }], target: '#target'});
             * </script>
             * ```
             */

            _export('ContextMenu', ContextMenu = function (_Component4) {
                _inherits(ContextMenu, _Component4);

                /**
                 * Constructor for creating the widget.
                 * @private
                 */
                function ContextMenu(options, element) {
                    _classCallCheck(this, ContextMenu);

                    var _this24 = _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, options, element));

                    _this24.animation = new Animation({});
                    _this24.navIdx = [];
                    _this24.isTapHold = false;
                    return _this24;
                }
                /**
                 * Initialized animation with parent menu animation settings.
                 * @private
                 */


                _createClass(ContextMenu, [{
                    key: 'preRender',
                    value: function preRender() {
                        if (this.element.tagName === 'EJS-CONTEXTMENU') {
                            this.element.style.display = 'none';
                            this.element.classList.remove('e-' + this.getModuleName());
                            this.element.classList.remove('e-control');
                            var ejInst = getValue('ej2_instances', this.element);
                            var ul = createElement('ul');
                            this.ngElement = this.element;
                            this.element = ul;
                            this.element.classList.add('e-control');
                            this.element.classList.add('e-' + this.getModuleName());
                            setValue('ej2_instances', ejInst, this.element);
                            if (!this.element.id) {
                                this.element.id = getUniqueID(this.getModuleName());
                            }
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.initWrapper();
                        this.renderItems();
                        this.wireEvents();
                    }
                }, {
                    key: 'initWrapper',
                    value: function initWrapper() {
                        var wrapper = this.getWrapper();
                        if (!wrapper) {
                            wrapper = createElement('div', { className: WRAPPER });
                            document.body.appendChild(wrapper);
                        }
                        if (this.cssClass) {
                            wrapper.classList.add(this.cssClass);
                        }
                        if (this.enableRtl) {
                            wrapper.classList.add(RTL);
                        }
                        attributes(this.element, { 'role': 'menu', 'tabindex': '0' });
                        wrapper.appendChild(this.element);
                        this.element.style.zIndex = getZindexPartial(this.element).toString();
                    }
                }, {
                    key: 'renderItems',
                    value: function renderItems() {
                        if (!this.items.length) {
                            this.items = ListBase.createJsonFromElement(this.element);
                            this.element.innerHTML = '';
                        }
                        var ul = this.createItems(this.items);
                        append(Array.prototype.slice.call(ul.children), this.element);
                        this.element.classList.add('e-menu-parent');
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        var wrapper = this.getWrapper();
                        if (this.target) {
                            var target = void 0;
                            var targetElems = selectAll(this.target);
                            for (var i = 0, len = targetElems.length; i < len; i++) {
                                target = targetElems[i];
                                if (Browser.isIos) {
                                    new Touch(target, { tapHold: this.touchHandler.bind(this) });
                                } else {
                                    EventHandler.add(target, 'contextmenu', this.cmenuHandler, this);
                                }
                            }
                            this.targetElement = target;
                            var _iteratorNormalCompletion11 = true;
                            var _didIteratorError11 = false;
                            var _iteratorError11 = undefined;

                            try {
                                for (var _iterator11 = getScrollableParent(this.targetElement)[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                    var parent = _step11.value;

                                    EventHandler.add(parent, 'scroll', this.scrollHandler, this);
                                }
                            } catch (err) {
                                _didIteratorError11 = true;
                                _iteratorError11 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                                        _iterator11.return();
                                    }
                                } finally {
                                    if (_didIteratorError11) {
                                        throw _iteratorError11;
                                    }
                                }
                            }
                        }
                        if (!Browser.isDevice) {
                            EventHandler.add(wrapper, 'mouseover', this.moverHandler, this);
                            EventHandler.add(document, 'mousedown', this.mouseDownHandler, this);
                        }
                        this.delegateClickHandler = this.clickHandler.bind(this);
                        EventHandler.add(document, 'click', this.delegateClickHandler, this);
                        new KeyboardEvents(wrapper, {
                            keyAction: this.keyBoardHandler.bind(this),
                            keyConfigs: {
                                downarrow: DOWNARROW,
                                uparrow: UPARROW,
                                enter: ENTER,
                                leftarrow: LEFTARROW,
                                rightarrow: RIGHTARROW,
                                escape: ESCAPE
                            }
                        });
                        rippleEffect(wrapper, { selector: '.' + ITEM });
                    }
                }, {
                    key: 'mouseDownHandler',
                    value: function mouseDownHandler(e) {
                        if (closest(e.target, '.' + WRAPPER) !== this.getWrapper()) {
                            this.closeMenu(this.navIdx.length, e);
                        }
                    }
                }, {
                    key: 'keyBoardHandler',
                    value: function keyBoardHandler(e) {
                        e.preventDefault();
                        switch (e.action) {
                            case DOWNARROW:
                            case UPARROW:
                                this.upDownKeyHandler(e);
                                break;
                            case RIGHTARROW:
                                this.rightEnterKeyHandler(e);
                                break;
                            case LEFTARROW:
                                this.leftEscKeyHandler(e);
                                break;
                            case ENTER:
                                this.rightEnterKeyHandler(e);
                                break;
                            case ESCAPE:
                                this.leftEscKeyHandler(e);
                                break;
                        }
                    }
                }, {
                    key: 'upDownKeyHandler',
                    value: function upDownKeyHandler(e) {
                        var wrapper = this.getWrapper();
                        var cul = wrapper.children[this.navIdx.length];
                        var defaultIdx = e.action === DOWNARROW ? 0 : cul.childElementCount - 1;
                        var fliIdx = defaultIdx;
                        var fli = this.getLIByClass(cul, FOCUSED);
                        if (fli) {
                            fliIdx = this.getIdx(cul, fli);
                            fli.classList.remove(FOCUSED);
                            e.action === DOWNARROW ? fliIdx++ : fliIdx--;
                            if (fliIdx === (e.action === DOWNARROW ? cul.childElementCount : -1)) {
                                fliIdx = defaultIdx;
                            }
                        }
                        var cli = cul.children[fliIdx];
                        fliIdx = this.isValidLI(cli, fliIdx, e.action);
                        cul.children[fliIdx].classList.add(FOCUSED);
                        cul.children[fliIdx].focus();
                    }
                }, {
                    key: 'isValidLI',
                    value: function isValidLI(cli, index, action) {
                        var wrapper = this.getWrapper();
                        var cul = wrapper.children[this.navIdx.length];
                        if (cli.classList.contains(SEPARATOR) || cli.classList.contains(DISABLED) || cli.classList.contains(HIDE)) {
                            action === DOWNARROW || action === RIGHTARROW ? index++ : index--;
                        }
                        cli = cul.children[index];
                        if (cli.classList.contains(SEPARATOR) || cli.classList.contains(DISABLED) || cli.classList.contains(HIDE)) {
                            index = this.isValidLI(cli, index, action);
                        }
                        return index;
                    }
                }, {
                    key: 'rightEnterKeyHandler',
                    value: function rightEnterKeyHandler(e) {
                        var eventArgs = void 0;
                        var wrapper = this.getWrapper();
                        var cul = wrapper.children[this.navIdx.length];
                        var fli = this.getLIByClass(cul, FOCUSED);
                        if (fli) {
                            var fliIdx = this.getIdx(cul, fli);
                            var navIdx = this.navIdx.concat(fliIdx);
                            var index = void 0;
                            var item = this.getItem(navIdx);
                            if (item.items.length) {
                                this.navIdx.push(fliIdx);
                                this.openMenu(fli, item, null, null, e);
                                fli.classList.remove(FOCUSED);
                                fli.classList.add(SELECTED);
                                if (e.action === ENTER) {
                                    eventArgs = { element: fli, item: item };
                                    this.trigger('select', eventArgs);
                                }
                                fli.focus();
                                cul = wrapper.children[this.navIdx.length];
                                index = this.isValidLI(cul.children[0], 0, e.action);
                                cul.children[index].classList.add(FOCUSED);
                                cul.children[index].focus();
                            } else {
                                if (e.action === ENTER) {
                                    fli.classList.remove(FOCUSED);
                                    fli.classList.add(SELECTED);
                                    eventArgs = { element: fli, item: item };
                                    this.trigger('select', eventArgs);
                                    this.closeMenu(null, e);
                                }
                            }
                        }
                    }
                }, {
                    key: 'leftEscKeyHandler',
                    value: function leftEscKeyHandler(e) {
                        if (this.navIdx.length) {
                            var wrapper = this.getWrapper();
                            this.closeMenu(this.navIdx.length, e);
                            var cul = wrapper.children[this.navIdx.length];
                            var sli = this.getLIByClass(cul, SELECTED);
                            if (sli) {
                                sli.setAttribute('aria-expanded', 'false');
                                sli.classList.remove(SELECTED);
                                sli.classList.add(FOCUSED);
                                sli.focus();
                            }
                        } else {
                            if (e.action === ESCAPE) {
                                this.closeMenu(null, e);
                            }
                        }
                    }
                }, {
                    key: 'scrollHandler',
                    value: function scrollHandler(e) {
                        this.closeMenu(null, e);
                    }
                }, {
                    key: 'touchHandler',
                    value: function touchHandler(e) {
                        this.isTapHold = true;
                        this.cmenuHandler(e.originalEvent);
                    }
                }, {
                    key: 'cmenuHandler',
                    value: function cmenuHandler(e) {
                        e.preventDefault();
                        this.closeMenu(null, e);
                        if (this.canOpen(e.target)) {
                            if (e.changedTouches) {
                                this.openMenu(null, null, e.changedTouches[0].pageY + 1, e.changedTouches[0].pageX + 1, e);
                            } else {
                                this.openMenu(null, null, e.pageY + 1, e.pageX + 1, e);
                            }
                        }
                    }
                }, {
                    key: 'close',
                    value: function close() {
                        this.closeMenu();
                    }
                }, {
                    key: 'closeMenu',
                    value: function closeMenu() {
                        var ulIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                        if (this.isMenuVisible()) {
                            var ul = void 0;
                            var item = void 0;
                            var items = void 0;
                            var closeArgs = void 0;
                            var beforeCloseArgs = void 0;
                            var wrapper = this.getWrapper();
                            for (var cnt = wrapper.childElementCount; cnt > ulIndex; cnt--) {
                                item = this.navIdx.length ? this.getItem(this.navIdx) : null;
                                items = item ? item.items : this.items;
                                ul = wrapper.children[cnt - 1];
                                beforeCloseArgs = { element: ul, parentItem: item, items: items, event: e, cancel: false };
                                this.trigger('beforeClose', beforeCloseArgs);
                                if (!beforeCloseArgs.cancel) {
                                    this.toggleAnimation(ul, false);
                                    this.navIdx.length = ulIndex ? ulIndex - 1 : ulIndex;
                                    closeArgs = { element: ul, parentItem: item, items: items };
                                    this.trigger('onClose', closeArgs);
                                }
                            }
                        }
                    }
                }, {
                    key: 'isMenuVisible',
                    value: function isMenuVisible() {
                        return this.navIdx.length > 0 || this.element.classList.contains('e-contextmenu') && isVisible(this.element).valueOf();
                    }
                }, {
                    key: 'canOpen',
                    value: function canOpen(target) {
                        var canOpen = true;
                        if (this.filter) {
                            canOpen = false;
                            var filter = this.filter.split(' ');
                            for (var i = 0, len = target.classList.length; i < len; i++) {
                                if (filter.indexOf(target.classList[i]) > -1) {
                                    canOpen = true;
                                    break;
                                }
                            }
                        }
                        return canOpen;
                    }
                }, {
                    key: 'open',
                    value: function open(top, left) {
                        this.openMenu(null, null, top, left);
                    }
                }, {
                    key: 'openMenu',
                    value: function openMenu(li, item) {
                        var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                        var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                        var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

                        var ul = void 0;
                        var navIdx = void 0;
                        var wrapper = this.getWrapper();
                        if (li) {
                            ul = this.createItems(item.items);
                            if (Browser.isDevice) {
                                wrapper.lastChild.style.display = 'none';
                                var data = { text: item.text, iconCss: ICONS + ' e-previous' };
                                var hdata = new MenuItem(this.items[0], null, data, true);
                                var hli = this.createItems([hdata]).children[0];
                                hli.classList.add(HEADER);
                                ul.insertBefore(hli, ul.children[0]);
                            }
                            ul.style.zIndex = this.element.style.zIndex;
                            wrapper.appendChild(ul);
                        } else {
                            ul = this.element;
                        }
                        navIdx = this.getIndex(li ? li.textContent : null);
                        var items = li ? item.items : this.items;
                        var eventArgs = { element: ul, items: items, parentItem: item, event: e, cancel: false };
                        this.trigger('beforeOpen', eventArgs);
                        if (eventArgs.cancel) {
                            this.navIdx.pop();
                        } else {
                            this.setPosition(li, ul, top, left);
                            this.toggleAnimation(ul);
                        }
                    }
                }, {
                    key: 'setPosition',
                    value: function setPosition(li, ul, top, left) {
                        var px = 'px';
                        this.toggleVisiblity(ul);
                        if (ul === this.element) {
                            var collide = isCollide(ul, null, left, top);
                            if (collide.indexOf('right') > -1) {
                                left = left - ul.offsetWidth;
                            }
                            if (collide.indexOf('bottom') > -1) {
                                var offset = fit(ul, null, { X: false, Y: true }, { top: top, left: left });
                                top = offset.top - 20;
                            }
                            collide = isCollide(ul, null, left, top);
                            if (collide.indexOf('left') > -1) {
                                var _offset = fit(ul, null, { X: true, Y: false }, { top: top, left: left });
                                left = _offset.left;
                            }
                        } else {
                            if (Browser.isDevice) {
                                top = Number(this.element.style.top.replace(px, ''));
                                left = Number(this.element.style.left.replace(px, ''));
                            } else {
                                var x = this.enableRtl ? 'left' : 'right';
                                var _offset2 = calculatePosition(li, x, 'top');
                                top = _offset2.top;
                                left = _offset2.left;
                                var _collide = isCollide(ul, null, this.enableRtl ? left - ul.offsetWidth : left, top);
                                var xCollision = _collide.indexOf('left') > -1 || _collide.indexOf('right') > -1;
                                if (xCollision) {
                                    _offset2 = calculatePosition(li, this.enableRtl ? 'right' : 'left', 'top');
                                    left = _offset2.left;
                                }
                                if (this.enableRtl || xCollision) {
                                    left = this.enableRtl && xCollision ? left : left - ul.offsetWidth;
                                }
                                if (_collide.indexOf('bottom') > -1) {
                                    _offset2 = fit(ul, null, { X: false, Y: true }, { top: top, left: left });
                                    top = _offset2.top;
                                }
                            }
                        }
                        this.toggleVisiblity(ul, false);
                        ul.style.top = top + px;
                        ul.style.left = left + px;
                    }
                }, {
                    key: 'toggleVisiblity',
                    value: function toggleVisiblity(ul) {
                        var isVisible$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                        ul.style.visibility = isVisible$$1 ? 'hidden' : '';
                        ul.style.display = isVisible$$1 ? 'block' : 'none';
                    }
                }, {
                    key: 'createItems',
                    value: function createItems(items) {
                        var _this25 = this;

                        var showIcon = this.hasField(items, 'iconCss');
                        var listBaseOptions = {
                            showIcon: showIcon,
                            moduleName: 'menu',
                            itemCreating: function itemCreating(args) {
                                args.curData.htmlAttributes = {
                                    role: 'menuitem',
                                    tabindex: '-1'
                                };
                            },
                            itemCreated: function itemCreated(args) {
                                if (args.curData.separator) {
                                    args.item.classList.add(SEPARATOR);
                                    args.item.removeAttribute('role');
                                }
                                if (showIcon && !args.curData.iconCss && !args.curData.separator) {
                                    args.item.classList.add('e-blankicon');
                                }
                                if (args.curData.items && args.curData.items.length) {
                                    var span = createElement('span', { className: ICONS + ' ' + CARET });
                                    args.item.appendChild(span);
                                    args.item.setAttribute('aria-haspopup', 'true');
                                    args.item.setAttribute('aria-expanded', 'false');
                                    args.item.removeAttribute('role');
                                    args.item.classList.add('e-menu-caret-icon');
                                }
                                var eventArgs = { item: args.curData, element: args.item };
                                _this25.trigger('beforeItemRender', eventArgs);
                            }
                        };
                        var ul = ListBase.createList(this.toRawObject(items.slice()), listBaseOptions, true);
                        ul.setAttribute('tabindex', '0');
                        return ul;
                    }
                }, {
                    key: 'toRawObject',
                    value: function toRawObject(items) {
                        var item = void 0;
                        var menuItems = [];
                        for (var i = 0, len = items.length; i < len; i++) {
                            item = items[i].properties;
                            menuItems.push(item);
                        }
                        return menuItems;
                    }
                }, {
                    key: 'moverHandler',
                    value: function moverHandler(e) {
                        var wrapper = this.getWrapper();
                        var trgt = e.target;
                        var cli = this.getLI(trgt);
                        if (cli && closest(cli, '.' + WRAPPER)) {
                            var fli = _select('.' + FOCUSED, wrapper);
                            if (fli) {
                                fli.classList.remove(FOCUSED);
                            }
                            cli.classList.add(FOCUSED);
                            if (!this.showItemOnClick) {
                                this.clickHandler(e);
                            }
                        }
                    }
                }, {
                    key: 'hasField',
                    value: function hasField(items, field) {
                        for (var i = 0, len = items.length; i < len; i++) {
                            if (items[i][field]) {
                                return true;
                            }
                        }
                        return false;
                    }
                }, {
                    key: 'getWrapper',
                    value: function getWrapper() {
                        return closest(this.element, '.' + WRAPPER);
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(e) {
                        if (this.isTapHold) {
                            this.isTapHold = false;
                        } else {
                            var wrapper = this.getWrapper();
                            var trgt = e.target;
                            var cli = this.getLI(trgt);
                            var cliWrapper = cli ? closest(cli, '.' + WRAPPER) : null;
                            var isInstLI = cli && cliWrapper && wrapper.firstElementChild.id === cliWrapper.firstElementChild.id;
                            if (isInstLI && e.type === 'click' && !cli.classList.contains(HEADER)) {
                                this.setLISelected(cli);
                                var navIdx = this.getIndex(cli.textContent);
                                var item = this.getItem(navIdx);
                                var eventArgs = { element: cli, item: item };
                                this.trigger('select', eventArgs);
                            }
                            if (isInstLI && (e.type === 'mouseover' || Browser.isDevice || this.showItemOnClick)) {
                                var ul = void 0;
                                if (cli.classList.contains(HEADER)) {
                                    ul = wrapper.children[this.navIdx.length - 1];
                                    this.toggleAnimation(ul);
                                    var sli = this.getLIByClass(ul, SELECTED);
                                    if (sli) {
                                        sli.classList.remove(SELECTED);
                                    }
                                    detach(cli.parentNode);
                                    this.navIdx.pop();
                                } else {
                                    if (!cli.classList.contains(SEPARATOR)) {
                                        var showSubMenu = true;
                                        var cul = cli.parentNode;
                                        var cliIdx = this.getIdx(cul, cli);
                                        if (!Browser.isDevice) {
                                            var culIdx = this.getIdx(wrapper, cul);
                                            if (this.navIdx[culIdx] === cliIdx) {
                                                showSubMenu = false;
                                            }
                                            if (culIdx !== this.navIdx.length && (e.type !== 'mouseover' || showSubMenu)) {
                                                var _sli = this.getLIByClass(cul, SELECTED);
                                                if (_sli) {
                                                    _sli.classList.remove(SELECTED);
                                                }
                                                this.closeMenu(culIdx + 1, e);
                                            }
                                        }
                                        if (showSubMenu) {
                                            var idx = this.navIdx.concat(cliIdx);
                                            var _item = this.getItem(idx);
                                            if (_item.items.length) {
                                                if (e.type === 'mouseover') {
                                                    this.setLISelected(cli);
                                                }
                                                cli.setAttribute('aria-expanded', 'true');
                                                this.navIdx.push(cliIdx);
                                                this.openMenu(cli, _item, null, null, e);
                                            } else {
                                                if (e.type !== 'mouseover') {
                                                    this.closeMenu(null, e);
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (trgt.tagName !== 'UL' || trgt.parentElement !== wrapper) {
                                    if (!cli || !cli.querySelector('.' + CARET)) {
                                        this.closeMenu(null, e);
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'setLISelected',
                    value: function setLISelected(li) {
                        var sli = this.getLIByClass(li.parentElement, SELECTED);
                        if (sli) {
                            sli.classList.remove(SELECTED);
                        }
                        li.classList.remove(FOCUSED);
                        li.classList.add(SELECTED);
                    }
                }, {
                    key: 'getLIByClass',
                    value: function getLIByClass(ul, classname) {
                        for (var i = 0, len = ul.children.length; i < len; i++) {
                            if (ul.children[i].classList.contains(classname)) {
                                return ul.children[i];
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'getItem',
                    value: function getItem(navIdx) {
                        navIdx = navIdx.slice();
                        var idx = navIdx.pop();
                        var items = this.getItems(navIdx);
                        return items[idx];
                    }
                }, {
                    key: 'getItems',
                    value: function getItems(navIdx) {
                        var items = this.items;
                        for (var i = 0; i < navIdx.length; i++) {
                            items = items[navIdx[i]].items;
                        }
                        return items;
                    }
                }, {
                    key: 'getIdx',
                    value: function getIdx(ul, li) {
                        var skipHdr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

                        var idx = Array.prototype.indexOf.call(ul.children, li);
                        if (skipHdr && ul.children[0].classList.contains(HEADER)) {
                            idx--;
                        }
                        return idx;
                    }
                }, {
                    key: 'getLI',
                    value: function getLI(elem) {
                        if (elem.tagName === 'LI') {
                            return elem;
                        }
                        return closest(elem, 'li');
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var wrapper = this.getWrapper();
                        var _iteratorNormalCompletion12 = true;
                        var _didIteratorError12 = false;
                        var _iteratorError12 = undefined;

                        try {
                            for (var _iterator12 = Object.keys(newProp)[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                var prop = _step12.value;

                                switch (prop) {
                                    case 'cssClass':
                                        if (oldProp.cssClass) {
                                            wrapper.classList.remove(oldProp.cssClass);
                                        }
                                        if (newProp.cssClass) {
                                            wrapper.classList.add(newProp.cssClass);
                                        }
                                        break;
                                    case 'enableRtl':
                                        wrapper.classList.toggle(RTL);
                                        break;
                                    case 'filter':
                                        this.closeMenu();
                                        this.filter = newProp.filter;
                                        break;
                                    case 'showItemOnClick':
                                        this.unWireEvents();
                                        this.showItemOnClick = newProp.showItemOnClick;
                                        this.wireEvents();
                                        break;
                                    case 'target':
                                        this.unWireEvents();
                                        this.target = newProp.target;
                                        this.wireEvents();
                                        break;
                                    case 'items':
                                        var idx = void 0;
                                        var navIdx = void 0;
                                        var item = void 0;
                                        var keys = Object.keys(newProp.items);
                                        for (var i = 0; i < keys.length; i++) {
                                            navIdx = this.getChangedItemIndex(newProp, [], Number(keys[i]));
                                            if (navIdx.length <= this.getWrapper().children.length) {
                                                idx = navIdx.pop();
                                                item = this.getItems(navIdx);
                                                this.insertAfter([item[idx]], item[idx].text);
                                                this.removeItem(item, navIdx, idx);
                                            }
                                            navIdx.length = 0;
                                        }
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError12 = true;
                            _iteratorError12 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion12 && _iterator12.return) {
                                    _iterator12.return();
                                }
                            } finally {
                                if (_didIteratorError12) {
                                    throw _iteratorError12;
                                }
                            }
                        }
                    }
                }, {
                    key: 'getChangedItemIndex',
                    value: function getChangedItemIndex(newProp, index, idx) {
                        index.push(idx);
                        var key = Object.keys(newProp.items[idx]).pop();
                        if (key === 'items') {
                            var item = newProp.items[idx];
                            this.getChangedItemIndex(item, index, Number(Object.keys(item.items).pop()));
                        } else {
                            if (key === 'isParentArray' && index.length > 1) {
                                index.pop();
                            }
                        }
                        return index;
                    }
                }, {
                    key: 'removeItem',
                    value: function removeItem(item, navIdx, idx) {
                        item.splice(idx, 1);
                        var uls = this.getWrapper().children;
                        if (navIdx.length < uls.length) {
                            detach(uls[navIdx.length].children[idx]);
                        }
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        var wrapper = this.getWrapper();
                        if (this.target) {
                            var target = void 0;
                            var touchModule = void 0;
                            var targetElems = selectAll(this.target);
                            for (var i = 0, len = targetElems.length; i < len; i++) {
                                target = targetElems[i];
                                if (Browser.isIos) {
                                    touchModule = getInstance(target, Touch);
                                    if (touchModule) {
                                        touchModule.destroy();
                                    }
                                } else {
                                    EventHandler.remove(target, 'contextmenu', this.cmenuHandler);
                                }
                            }
                            var _iteratorNormalCompletion13 = true;
                            var _didIteratorError13 = false;
                            var _iteratorError13 = undefined;

                            try {
                                for (var _iterator13 = getScrollableParent(this.targetElement)[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                    var parent = _step13.value;

                                    EventHandler.remove(parent, 'scroll', this.scrollHandler);
                                }
                            } catch (err) {
                                _didIteratorError13 = true;
                                _iteratorError13 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion13 && _iterator13.return) {
                                        _iterator13.return();
                                    }
                                } finally {
                                    if (_didIteratorError13) {
                                        throw _iteratorError13;
                                    }
                                }
                            }
                        }
                        if (!Browser.isDevice) {
                            EventHandler.remove(wrapper, 'mouseover', this.moverHandler);
                            EventHandler.remove(document, 'mousedown', this.mouseDownHandler);
                        }
                        EventHandler.remove(document, 'click', this.delegateClickHandler);
                        var keyboardModule = getInstance(wrapper, KeyboardEvents);
                        if (keyboardModule) {
                            keyboardModule.destroy();
                        }
                    }
                }, {
                    key: 'toggleAnimation',
                    value: function toggleAnimation(ul) {
                        var _this26 = this;

                        var isMenuOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                        if (this.animationSettings.effect === 'None' || !isMenuOpen) {
                            this.end(ul, isMenuOpen);
                        } else {
                            this.animation.animate(ul, {
                                name: this.animationSettings.effect,
                                duration: this.animationSettings.duration,
                                timingFunction: this.animationSettings.easing,
                                begin: function begin(options) {
                                    options.element.style.display = 'block';
                                    options.element.style.maxHeight = options.element.getBoundingClientRect().height + 'px';
                                },
                                end: function end(options) {
                                    _this26.end(options.element, isMenuOpen);
                                }
                            });
                        }
                    }
                }, {
                    key: 'end',
                    value: function end(ul, isMenuOpen) {
                        if (isMenuOpen) {
                            ul.style.display = 'block';
                            ul.style.maxHeight = '';
                            var item = this.navIdx.length ? this.getItem(this.navIdx) : null;
                            var eventArgs = { element: ul, parentItem: item, items: item ? item.items : this.items };
                            this.trigger('onOpen', eventArgs);
                            if (ul.querySelector('.' + FOCUSED)) {
                                ul.querySelector('.' + FOCUSED).focus();
                            } else {
                                var ele = void 0;
                                ele = this.getWrapper().children[this.getIdx(this.getWrapper(), ul) - 1];
                                if (ele) {
                                    ele.querySelector('.' + SELECTED).focus();
                                } else {
                                    this.element.focus();
                                }
                            }
                        } else {
                            if (ul === this.element) {
                                var fli = this.getLIByClass(this.element, FOCUSED);
                                if (fli) {
                                    fli.classList.remove(FOCUSED);
                                }
                                var sli = this.getLIByClass(this.element, SELECTED);
                                if (sli) {
                                    sli.classList.remove(SELECTED);
                                }
                                ul.style.display = 'none';
                            } else {
                                detach(ul);
                            }
                        }
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return '';
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'contextmenu';
                    }
                }, {
                    key: 'getIndex',
                    value: function getIndex(data) {
                        var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.items;
                        var navIdx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                        var isCallBack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

                        var item = void 0;
                        for (var i = 0, len = items.length; i < len; i++) {
                            item = items[i];
                            if (item.text === data) {
                                navIdx.push(i);
                                break;
                            } else if (item.items.length) {
                                navIdx = this.getIndex(data, item.items, navIdx, true);
                                if (navIdx[navIdx.length - 1] === -1) {
                                    if (i !== len - 1) {
                                        navIdx.pop();
                                    }
                                } else {
                                    navIdx.unshift(i);
                                    break;
                                }
                            } else {
                                if (i === len - 1) {
                                    navIdx.push(-1);
                                }
                            }
                        }
                        return !isCallBack && navIdx[0] === -1 ? [] : navIdx;
                    }
                }, {
                    key: 'enableItems',
                    value: function enableItems(items) {
                        var enable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                        var ul = void 0;
                        var idx = void 0;
                        var navIdx = void 0;
                        var disabled = DISABLED;
                        var wrapper = this.getWrapper();
                        for (var i = 0; i < items.length; i++) {
                            navIdx = this.getIndex(items[i]);
                            idx = navIdx.pop();
                            ul = wrapper.children[navIdx.length];
                            if (ul) {
                                if (enable) {
                                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                                        ul.children[idx + 1].classList.remove(disabled);
                                    } else {
                                        ul.children[idx].classList.remove(disabled);
                                    }
                                } else {
                                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                                        ul.children[idx + 1].classList.add(disabled);
                                    } else {
                                        ul.children[idx].classList.add(disabled);
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'showItems',
                    value: function showItems(items) {
                        this.showHideItems(items, false);
                    }
                }, {
                    key: 'hideItems',
                    value: function hideItems(items) {
                        this.showHideItems(items, true);
                    }
                }, {
                    key: 'showHideItems',
                    value: function showHideItems(items, ishide) {
                        var ul = void 0;
                        var idx = void 0;
                        var navIdx = void 0;
                        var wrapper = this.getWrapper();
                        for (var i = 0; i < items.length; i++) {
                            navIdx = this.getIndex(items[i]);
                            idx = navIdx.pop();
                            ul = wrapper.children[navIdx.length];
                            if (ul) {
                                if (ishide) {
                                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                                        ul.children[idx + 1].classList.add(HIDE);
                                    } else {
                                        ul.children[idx].classList.add(HIDE);
                                    }
                                } else {
                                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                                        ul.children[idx + 1].classList.remove(HIDE);
                                    } else {
                                        ul.children[idx].classList.remove(HIDE);
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'removeItems',
                    value: function removeItems(items) {
                        var idx = void 0;
                        var navIdx = void 0;
                        var iitems = void 0;
                        for (var i = 0; i < items.length; i++) {
                            navIdx = this.getIndex(items[i]);
                            idx = navIdx.pop();
                            iitems = this.getItems(navIdx);
                            this.removeItem(iitems, navIdx, idx);
                        }
                    }
                }, {
                    key: 'insertAfter',
                    value: function insertAfter(items, text) {
                        this.insertItems(items, text);
                    }
                }, {
                    key: 'insertBefore',
                    value: function insertBefore(items, text) {
                        this.insertItems(items, text, false);
                    }
                }, {
                    key: 'insertItems',
                    value: function insertItems(items, text) {
                        var isAfter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

                        var li = void 0;
                        var idx = void 0;
                        var navIdx = void 0;
                        var iitems = void 0;
                        var menuitem = void 0;
                        var showIcon = void 0;
                        for (var i = 0; i < items.length; i++) {
                            navIdx = this.getIndex(text);
                            idx = navIdx.pop();
                            iitems = this.getItems(navIdx);
                            menuitem = new MenuItem(iitems[0], null, items[i], true);
                            iitems.splice(isAfter ? idx + 1 : idx, 0, menuitem);
                            var uls = this.getWrapper().children;
                            if (navIdx.length < uls.length) {
                                idx = isAfter ? idx + 1 : idx;
                                showIcon = this.hasField(iitems, 'iconCss');
                                li = this.createItems(iitems).children[idx];
                                uls[navIdx.length].insertBefore(li, uls[navIdx.length].children[idx]);
                            }
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this27 = this;

                        var wrapper = this.getWrapper();
                        if (wrapper) {
                            _get(ContextMenu.prototype.__proto__ || Object.getPrototypeOf(ContextMenu.prototype), 'destroy', this).call(this);
                            this.unWireEvents();
                            if (this.ngElement) {
                                this.ngElement.style.display = 'block';
                            } else {
                                this.closeMenu();
                                this.element.innerHTML = '';
                                ['top', 'left', 'display', 'z-index'].forEach(function (key) {
                                    _this27.element.style.removeProperty(key);
                                });
                                ['role', 'tabindex', 'class', 'style'].forEach(function (key) {
                                    if (['class', 'style'].indexOf(key) === -1 || !_this27.element.getAttribute(key)) {
                                        _this27.element.removeAttribute(key);
                                    }
                                });
                                wrapper.parentNode.insertBefore(this.element, wrapper);
                            }
                            detach(wrapper);
                        }
                    }
                }]);

                return ContextMenu;
            }(Component));

            __decorate$3([Property('')], ContextMenu.prototype, "cssClass", void 0);
            __decorate$3([Property('')], ContextMenu.prototype, "filter", void 0);
            __decorate$3([Property(false)], ContextMenu.prototype, "showItemOnClick", void 0);
            __decorate$3([Collection([], MenuItem)], ContextMenu.prototype, "items", void 0);
            __decorate$3([Property('')], ContextMenu.prototype, "target", void 0);
            __decorate$3([Property({ duration: 400, easing: 'ease', effect: 'SlideDown' })], ContextMenu.prototype, "animationSettings", void 0);
            __decorate$3([Event()], ContextMenu.prototype, "beforeItemRender", void 0);
            __decorate$3([Event()], ContextMenu.prototype, "beforeOpen", void 0);
            __decorate$3([Event()], ContextMenu.prototype, "onOpen", void 0);
            __decorate$3([Event()], ContextMenu.prototype, "beforeClose", void 0);
            __decorate$3([Event()], ContextMenu.prototype, "onClose", void 0);
            __decorate$3([Event()], ContextMenu.prototype, "select", void 0);
            _export('ContextMenu', ContextMenu = __decorate$3([NotifyPropertyChanges], ContextMenu));

            /**
             * ContextMenu modules
             */

            __decorate$4 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            CLS_TAB = 'e-tab';
            CLS_HEADER$1 = 'e-tab-header';
            CLS_CONTENT$1 = 'e-content';
            CLS_NEST$1 = 'e-nested';
            CLS_ITEMS$1 = 'e-items';
            CLS_ITEM$2 = 'e-item';
            CLS_TEMPLATE$1 = 'e-template';
            CLS_RTL$3 = 'e-rtl';
            CLS_ACTIVE$1 = 'e-active';
            CLS_DISABLE$3 = 'e-disable';
            CLS_HIDDEN$1 = 'e-hidden';
            CLS_FOCUS = 'e-focused';
            CLS_ICONS = 'e-icons';
            CLS_ICON = 'e-icon';
            CLS_ICON_CLOSE = 'e-close-icon';
            CLS_CLOSE_SHOW = 'e-close-show';
            CLS_TEXT = 'e-tab-text';
            CLS_INDICATOR = 'e-indicator';
            CLS_WRAP = 'e-tab-wrap';
            CLS_TEXT_WRAP = 'e-text-wrap';
            CLS_TAB_ICON = 'e-tab-icon';
            CLS_TB_ITEMS = 'e-toolbar-items';
            CLS_TB_ITEM = 'e-toolbar-item';
            CLS_TB_POP = 'e-toolbar-pop';
            CLS_TB_POPUP = 'e-toolbar-popup';
            CLS_POPUP_OPEN = 'e-popup-open';
            CLS_POPUP_CLOSE = 'e-popup-close';
            CLS_PROGRESS = 'e-progress';
            CLS_IGNORE = 'e-ignore';
            CLS_OVERLAY = 'e-overlay';

            _export('TabActionSettings', TabActionSettings = function (_ChildProperty6) {
                _inherits(TabActionSettings, _ChildProperty6);

                function TabActionSettings() {
                    _classCallCheck(this, TabActionSettings);

                    return _possibleConstructorReturn(this, (TabActionSettings.__proto__ || Object.getPrototypeOf(TabActionSettings)).apply(this, arguments));
                }

                return TabActionSettings;
            }(ChildProperty));

            __decorate$4([Property('SlideLeftIn')], TabActionSettings.prototype, "effect", void 0);
            __decorate$4([Property(600)], TabActionSettings.prototype, "duration", void 0);
            __decorate$4([Property('ease')], TabActionSettings.prototype, "easing", void 0);

            _export('TabAnimationSettings', TabAnimationSettings = function (_ChildProperty7) {
                _inherits(TabAnimationSettings, _ChildProperty7);

                function TabAnimationSettings() {
                    _classCallCheck(this, TabAnimationSettings);

                    return _possibleConstructorReturn(this, (TabAnimationSettings.__proto__ || Object.getPrototypeOf(TabAnimationSettings)).apply(this, arguments));
                }

                return TabAnimationSettings;
            }(ChildProperty));

            __decorate$4([Complex({ effect: 'SlideLeftIn', duration: 600, easing: 'ease' }, TabActionSettings)], TabAnimationSettings.prototype, "previous", void 0);
            __decorate$4([Complex({ effect: 'SlideRightIn', duration: 600, easing: 'ease' }, TabActionSettings)], TabAnimationSettings.prototype, "next", void 0);
            /**
             * Objects used for configuring the Tab item header properties.
             */

            _export('Header', Header = function (_ChildProperty8) {
                _inherits(Header, _ChildProperty8);

                function Header() {
                    _classCallCheck(this, Header);

                    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
                }

                return Header;
            }(ChildProperty));

            __decorate$4([Property('')], Header.prototype, "text", void 0);
            __decorate$4([Property('')], Header.prototype, "iconCss", void 0);
            __decorate$4([Property('left')], Header.prototype, "iconPosition", void 0);
            /**
             * An array of object that is used to configure the Tab.
             */

            _export('TabItem', TabItem = function (_ChildProperty9) {
                _inherits(TabItem, _ChildProperty9);

                function TabItem() {
                    _classCallCheck(this, TabItem);

                    return _possibleConstructorReturn(this, (TabItem.__proto__ || Object.getPrototypeOf(TabItem)).apply(this, arguments));
                }

                return TabItem;
            }(ChildProperty));

            __decorate$4([Complex({}, Header)], TabItem.prototype, "header", void 0);
            __decorate$4([Property('')], TabItem.prototype, "content", void 0);
            __decorate$4([Property('')], TabItem.prototype, "cssClass", void 0);
            __decorate$4([Property(false)], TabItem.prototype, "disabled", void 0);
            /**
             * Tab is a content panel to show multiple contents in a single space, one at a time.
             * Each Tab item has an associated content, that will be displayed based on the active Tab header item.
             * ```html
             * <div id="tab"></div>
             * <script>
             *   var tabObj = new Tab();
             *   tab.appendTo("#tab");
             * </script>
             * ```
             */

            _export('Tab', Tab = function (_Component5) {
                _inherits(Tab, _Component5);

                /**
                 * Initializes a new instance of the Tab class.
                 * @param options  - Specifies Tab model properties as options.
                 * @param element  - Specifies the element that is rendered as a Tab.
                 */
                function Tab(options, element) {
                    _classCallCheck(this, Tab);

                    var _this32 = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, options, element));

                    _this32.prevIndex = 0;
                    _this32.show = { name: 'SlideDown', duration: 100 };
                    _this32.hide = { name: 'SlideUp', duration: 100 };
                    _this32.animateOptions = {};
                    _this32.animObj = new Animation(_this32.animateOptions);
                    _this32.maxHeight = 0;
                    _this32.title = 'Close';
                    /**
                     * Contains the keyboard configuration of the Tab.
                     */
                    _this32.keyConfigs = {
                        tab: 'tab',
                        home: 'home',
                        end: 'end',
                        enter: 'enter',
                        space: 'space',
                        delete: 'delete',
                        moveLeft: 'leftarrow',
                        moveRight: 'rightarrow',
                        moveUp: 'uparrow',
                        moveDown: 'downarrow'
                    };
                    return _this32;
                }
                /**
                 * Removes the component from the DOM and detaches all its related event handlers, attributes and classes.
                 * @returns void
                 */


                _createClass(Tab, [{
                    key: 'destroy',
                    value: function destroy() {
                        var _this33 = this;

                        if (!isNullOrUndefined(this.tbObj)) {
                            this.tbObj.destroy();
                        }
                        this.unWireEvents();
                        ['role', 'aria-disabled', 'aria-activedescendant', 'tabindex', 'aria-orientation'].forEach(function (val) {
                            _this33.element.removeAttribute(val);
                        });
                        this.expTemplateContent();
                        if (!this.isTemplate) {
                            this.element.innerHTML = '';
                        } else {
                            var cntEle = _select('.' + CLS_TAB + ' > .' + CLS_CONTENT$1, this.element);
                            this.element.classList.remove(CLS_TEMPLATE$1);
                            if (!isNullOrUndefined(cntEle)) {
                                cntEle.innerHTML = this.cnt;
                            }
                        }
                        _get(Tab.prototype.__proto__ || Object.getPrototypeOf(Tab.prototype), 'destroy', this).call(this);
                        this.trigger('destroyed');
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        var nested = closest(this.element, '.' + CLS_CONTENT$1);
                        this.isNested = false;
                        this.isPopup = false;
                        this.initRender = true;
                        this.isSwipeed = false;
                        this.templateEle = [];
                        if (!isNullOrUndefined(nested)) {
                            nested.parentElement.classList.add(CLS_NEST$1);
                            this.isNested = true;
                        }
                        var name = Browser.info.name;
                        var css = name === 'msie' ? 'e-ie' : name === 'edge' ? 'e-edge' : name === 'safari' ? 'e-safari' : '';
                        setStyleAttribute(this.element, { 'width': formatUnit(this.width), 'height': formatUnit(this.height) });
                        this.setCssClass(this.element, this.cssClass, true);
                        attributes(this.element, { role: 'tablist', 'aria-disabled': 'false', 'aria-activedescendant': '' });
                        this.setCssClass(this.element, css, true);
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.renderContainer();
                        this.wireEvents();
                        this.initRender = false;
                    }
                }, {
                    key: 'renderContainer',
                    value: function renderContainer() {
                        var ele = this.element;
                        if (this.items.length > 0 && ele.children.length === 0) {
                            ele.appendChild(createElement('div', { className: CLS_CONTENT$1 }));
                            this.setOrientation(this.headerPlacement, createElement('div', { className: CLS_HEADER$1 }));
                            this.isTemplate = false;
                        } else if (this.element.children.length > 0) {
                            this.isTemplate = true;
                            ele.classList.add(CLS_TEMPLATE$1);
                            var header = ele.querySelector('.' + CLS_HEADER$1);
                            if (header && this.headerPlacement === 'Bottom') {
                                this.setOrientation(this.headerPlacement, header);
                            }
                        }
                        if (!isNullOrUndefined(_select('.' + CLS_HEADER$1, this.element)) && !isNullOrUndefined(_select('.' + CLS_CONTENT$1, this.element))) {
                            this.renderHeader();
                            this.tbItems = _select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
                            if (!isNullOrUndefined(this.tbItems)) {
                                rippleEffect(this.tbItems, { selector: '.e-tab-wrap' });
                            }
                            this.renderContent();
                            if (selectAll('.' + CLS_TB_ITEM, this.element).length > 0) {
                                this.tbItems = _select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
                                this.bdrLine = createElement('div', { className: CLS_INDICATOR + ' ' + CLS_HIDDEN$1 + ' ' + CLS_IGNORE });
                                var scrCnt = _select('.e-hscroll-content', this.tbItems);
                                if (!isNullOrUndefined(scrCnt)) {
                                    scrCnt.insertBefore(this.bdrLine, scrCnt.firstChild);
                                } else {
                                    this.tbItems.insertBefore(this.bdrLine, this.tbItems.firstChild);
                                }
                                this.setContentHeight(true);
                                this.select(this.selectedItem);
                            }
                            this.setRTL(this.enableRtl);
                        }
                    }
                }, {
                    key: 'renderHeader',
                    value: function renderHeader() {
                        var _this34 = this;

                        var tabItems = [];
                        this.hdrEle = _select('.' + CLS_HEADER$1, this.element);
                        this.btnCls = createElement('span', { className: CLS_ICONS + ' ' + CLS_ICON_CLOSE, attrs: { title: this.title } }).outerHTML;
                        if (!this.isTemplate) {
                            tabItems = this.parseObject(this.items, 0);
                        } else {
                            var count = this.hdrEle.children.length;
                            var hdrItems = [];
                            for (var i = 0; i < count; i++) {
                                hdrItems.push(this.hdrEle.children.item(i).innerHTML);
                            }
                            if (count > 0) {
                                this.hdrEle.innerHTML = '';
                                this.hdrEle.appendChild(createElement('div', { className: CLS_ITEMS$1 }));
                                hdrItems.forEach(function (item, index) {
                                    var attr = {
                                        className: CLS_ITEM$2, id: CLS_ITEM$2 + '_' + index,
                                        attrs: { role: 'tab', 'aria-controls': CLS_CONTENT$1 + '_' + index, 'aria-selected': 'false' }
                                    };
                                    var txt = createElement('span', { className: CLS_TEXT, innerHTML: item, attrs: { 'role': 'presentation' } }).outerHTML;
                                    var cont = createElement('div', { className: CLS_TEXT_WRAP, innerHTML: txt + _this34.btnCls }).outerHTML;
                                    var wrap = createElement('div', { className: CLS_WRAP, innerHTML: cont, attrs: { tabIndex: '-1' } });
                                    _select('.' + CLS_ITEMS$1, _this34.element).appendChild(createElement('div', attr));
                                    selectAll('.' + CLS_ITEM$2, _this34.element)[index].appendChild(wrap);
                                });
                            }
                        }
                        this.tbObj = new Toolbar({
                            width: '100%',
                            overflowMode: this.overflowMode,
                            items: tabItems.length !== 0 ? tabItems : [],
                            clicked: this.clickHandler.bind(this)
                        });
                        this.tbObj.appendTo(this.hdrEle);
                        attributes(this.element, { 'aria-orientation': 'horizontal' });
                        this.setCloseButton(this.showCloseButton);
                        this.setProperties({ headerPlacement: this.element.children.item(0).classList.contains(CLS_HEADER$1) ? 'Top' : 'Bottom' }, true);
                    }
                }, {
                    key: 'renderContent',
                    value: function renderContent() {
                        this.cntEle = _select('.' + CLS_CONTENT$1, this.element);
                        var hdrItem = selectAll('.' + CLS_TB_ITEM, this.element);
                        if (this.isTemplate) {
                            this.cnt = this.cntEle.children.length > 0 ? this.cntEle.innerHTML : '';
                            var contents = this.cntEle.children;
                            for (var i = 0; i < hdrItem.length; i++) {
                                if (contents.length - 1 >= i) {
                                    contents.item(i).className += CLS_ITEM$2;
                                    attributes(contents.item(i), { 'role': 'tabpanel', 'aria-labelledby': CLS_ITEM$2 + '_' + i });
                                    contents.item(i).id = CLS_CONTENT$1 + '_' + i;
                                }
                            }
                        }
                    }
                }, {
                    key: 'parseObject',
                    value: function parseObject(items, index) {
                        var _this35 = this;

                        var inHTML = '';
                        var tbCount = selectAll('.' + CLS_TB_ITEM, this.element).length;
                        var tItems = [];
                        items.forEach(function (item, i) {
                            var pos = isNullOrUndefined(item.header.iconPosition) ? '' : item.header.iconPosition;
                            var css = isNullOrUndefined(item.header.iconCss) ? '' : item.header.iconCss;
                            var txt = item.header.text;
                            var id = tbCount === 0 ? i : _this35.isReplace === true ? i + index : tbCount + i;
                            var disabled = item.disabled ? ' ' + CLS_DISABLE$3 + ' ' + CLS_OVERLAY : '';
                            var tHtml = txt instanceof Object ? txt.outerHTML : txt;
                            var txtEmpty = !isNullOrUndefined(tHtml) && tHtml !== '';
                            var tEle = txtEmpty ? createElement('div', {
                                className: CLS_TEXT, innerHTML: tHtml, attrs: { 'role': 'presentation' }
                            }).outerHTML : '';
                            var icon = createElement('span', {
                                className: CLS_ICONS + ' ' + CLS_TAB_ICON + ' ' + CLS_ICON + '-' + pos + ' ' + css
                            }).outerHTML;
                            if ((txt === '' || txt === undefined) && css === '') {
                                return;
                            } else {
                                if (txt !== '' && txt !== undefined && css !== '') {
                                    inHTML = pos === 'left' || pos === 'top' ? icon + '' + tEle : tEle + '' + icon;
                                } else {
                                    inHTML = css === '' ? tEle : icon;
                                }
                            }
                            var wrapAttrs = item.disabled ? {} : { tabIndex: '-1' };
                            var tCont = createElement('div', { className: CLS_TEXT_WRAP, innerHTML: inHTML + '' + _this35.btnCls }).outerHTML;
                            var wrap = createElement('div', { className: CLS_WRAP, innerHTML: tCont, attrs: wrapAttrs });
                            var attrObj = {
                                id: CLS_ITEM$2 + '_' + id, role: 'tab', 'aria-selected': 'false'
                            };
                            var tItem = { htmlAttributes: attrObj, template: wrap.outerHTML };
                            tItem.cssClass = item.cssClass + ' ' + disabled + ' ' + (css !== '' ? 'e-i' + pos : '') + ' ' + (!txtEmpty ? CLS_ICON : '');
                            if (pos === 'top' || pos === 'bottom') {
                                _this35.element.classList.add('e-vertical-icon');
                            }
                            tItems.push(tItem);
                        });
                        return tItems;
                    }
                }, {
                    key: 'removeActiveClass',
                    value: function removeActiveClass(id) {
                        var hdrActEle = selectAll(':root .' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM + '.' + CLS_ACTIVE$1, this.element)[0];
                        if (this.headerPlacement === 'Bottom') {
                            hdrActEle = selectAll(':root .' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM + '.' + CLS_ACTIVE$1, this.element.children[1])[0];
                        }
                        if (!isNullOrUndefined(hdrActEle)) {
                            hdrActEle.classList.remove(CLS_ACTIVE$1);
                            var no = this.extIndex(hdrActEle.id);
                            var trg = this.findEle(_select('.' + CLS_CONTENT$1, this.element).children, CLS_CONTENT$1 + '_' + no);
                        }
                    }
                }, {
                    key: 'checkPopupOverflow',
                    value: function checkPopupOverflow(ele) {
                        this.tbPop = _select('.' + CLS_TB_POP, this.element);
                        var popIcon = _select('.e-hor-nav', this.element);
                        var tbrItems = _select('.' + CLS_TB_ITEMS, this.element);
                        if (this.enableRtl && popIcon.offsetLeft + popIcon.offsetWidth > tbrItems.offsetLeft || !this.enableRtl && popIcon.offsetLeft < tbrItems.offsetWidth) {
                            ele.classList.add(CLS_TB_POPUP);
                            this.tbPop.insertBefore(ele.cloneNode(true), selectAll('.' + CLS_TB_POPUP, this.tbPop)[0]);
                            ele.outerHTML = '';
                        }
                        return true;
                    }
                }, {
                    key: 'popupHandler',
                    value: function popupHandler(target) {
                        var ripEle = target.querySelector('.e-ripple-element');
                        if (!isNullOrUndefined(ripEle)) {
                            ripEle.outerHTML = '';
                            target.querySelector('.' + CLS_WRAP).classList.remove('e-ripple');
                        }
                        this.tbItem = selectAll('.' + CLS_TB_ITEMS + ' .' + CLS_TB_ITEM, this.hdrEle);
                        var lastChild = this.tbItem[this.tbItem.length - 1];
                        if (this.tbItem.length !== 0) {
                            target.classList.remove(CLS_TB_POPUP);
                            this.tbItems.appendChild(target.cloneNode(true));
                            this.actEleId = target.id;
                            target.outerHTML = '';
                            if (this.checkPopupOverflow(lastChild)) {
                                var prevEle = this.tbItems.lastChild.previousElementSibling;
                                this.checkPopupOverflow(prevEle);
                            }
                            this.isPopup = true;
                        }
                        return selectAll('.' + CLS_TB_ITEM, this.tbItems).length - 1;
                    }
                }, {
                    key: 'setCloseButton',
                    value: function setCloseButton(val) {
                        var trg = _select('.' + CLS_HEADER$1, this.element);
                        val === true ? trg.classList.add(CLS_CLOSE_SHOW) : trg.classList.remove(CLS_CLOSE_SHOW);
                        this.tbObj.refreshOverflow();
                        this.refreshActElePosition();
                    }
                }, {
                    key: 'prevCtnAnimation',
                    value: function prevCtnAnimation(prev, current) {
                        var animation = void 0;
                        var checkRTL = this.enableRtl || this.element.classList.contains(CLS_RTL$3);
                        if (this.isPopup || prev <= current) {
                            if (this.animation.previous.effect === 'SlideLeftIn') {
                                animation = { name: 'SlideLeftOut',
                                    duration: this.animation.previous.duration, timingFunction: this.animation.previous.easing };
                            } else {
                                animation = null;
                            }
                        } else {
                            if (this.animation.next.effect === 'SlideRightIn') {
                                animation = { name: 'SlideRightOut',
                                    duration: this.animation.next.duration, timingFunction: this.animation.next.easing };
                            } else {
                                animation = null;
                            }
                        }
                        return animation;
                    }
                }, {
                    key: 'triggerPrevAnimation',
                    value: function triggerPrevAnimation(oldCnt, prevIndex) {
                        var animateObj = this.prevCtnAnimation(prevIndex, this.selectedItem);
                        if (!isNullOrUndefined(animateObj)) {
                            animateObj.begin = function () {
                                setStyleAttribute(oldCnt, { 'position': 'absolute' });
                                oldCnt.classList.add(CLS_PROGRESS);
                                oldCnt.classList.add('e-view');
                            };
                            animateObj.end = function () {
                                oldCnt.style.display = 'none';
                                oldCnt.classList.remove(CLS_ACTIVE$1);
                                oldCnt.classList.remove(CLS_PROGRESS);
                                oldCnt.classList.remove('e-view');
                                setStyleAttribute(oldCnt, { 'display': '', 'position': '' });
                                if (oldCnt.childElementCount === 0) {
                                    detach(oldCnt);
                                }
                            };
                            new Animation(animateObj).animate(oldCnt);
                        } else {
                            oldCnt.classList.remove(CLS_ACTIVE$1);
                        }
                    }
                }, {
                    key: 'triggerAnimation',
                    value: function triggerAnimation(id, value) {
                        var _this36 = this;

                        var prevIndex = this.prevIndex;
                        var itemCollection = [].slice.call(this.element.querySelector('.' + CLS_CONTENT$1).children);
                        var oldCnt = void 0;
                        itemCollection.forEach(function (item) {
                            if (item.id === _this36.prevActiveEle) {
                                oldCnt = item;
                            }
                        });
                        var prevEle = this.tbItem[prevIndex];
                        var no = this.extIndex(this.tbItem[this.selectedItem].id);
                        var newCnt = this.getTrgContent(this.cntEle, no);
                        if (isNullOrUndefined(oldCnt) && !isNullOrUndefined(prevEle)) {
                            var idNo = this.extIndex(prevEle.id);
                            oldCnt = this.getTrgContent(this.cntEle, idNo);
                        }
                        if (this.initRender || value === false || this.animation === {} || isNullOrUndefined(this.animation)) {
                            if (oldCnt && oldCnt !== newCnt) {
                                oldCnt.classList.remove(CLS_ACTIVE$1);
                            }
                            return;
                        }
                        var cnt = _select('.' + CLS_CONTENT$1, this.element);
                        var animateObj = void 0;
                        if (this.prevIndex > this.selectedItem && !this.isPopup) {
                            var openEff = this.animation.previous.effect;
                            animateObj = {
                                name: openEff === 'None' ? '' : openEff !== 'SlideLeftIn' ? openEff : 'SlideLeftIn',
                                duration: this.animation.previous.duration,
                                timingFunction: this.animation.previous.easing
                            };
                        } else if (this.isPopup || this.prevIndex < this.selectedItem || this.prevIndex === this.selectedItem) {
                            var clsEff = this.animation.next.effect;
                            animateObj = {
                                name: clsEff === 'None' ? '' : clsEff !== 'SlideRightIn' ? clsEff : 'SlideRightIn',
                                duration: this.animation.next.duration,
                                timingFunction: this.animation.next.easing
                            };
                        }
                        animateObj.progress = function () {
                            cnt.classList.add(CLS_PROGRESS);
                            _this36.setActiveBorder();
                        };
                        animateObj.end = function () {
                            cnt.classList.remove(CLS_PROGRESS);
                            newCnt.classList.add(CLS_ACTIVE$1);
                        };
                        if (!this.initRender) {
                            this.triggerPrevAnimation(oldCnt, prevIndex);
                        }
                        this.prevActiveEle = newCnt.id;
                        this.isPopup = false;
                        if (animateObj.name === '') {
                            newCnt.classList.add(CLS_ACTIVE$1);
                        } else {
                            new Animation(animateObj).animate(newCnt);
                        }
                    }
                }, {
                    key: 'keyPressed',
                    value: function keyPressed(trg) {
                        var trgParent = closest(trg, '.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM);
                        var trgIndex = this.getEleIndex(trgParent);
                        if (!isNullOrUndefined(this.popEle) && trg.classList.contains('e-hor-nav')) {
                            this.popEle.classList.contains(CLS_POPUP_OPEN) ? this.popObj.hide(this.hide) : this.popObj.show(this.show);
                        } else if (trg.classList.contains('e-scroll-nav')) {
                            trg.click();
                        } else {
                            if (!isNullOrUndefined(trgParent) && trgParent.classList.contains(CLS_ACTIVE$1) === false) {
                                this.select(trgIndex);
                                if (!isNullOrUndefined(this.popEle)) {
                                    this.popObj.hide(this.hide);
                                }
                            }
                        }
                    }
                }, {
                    key: 'getEleIndex',
                    value: function getEleIndex(item) {
                        return Array.prototype.indexOf.call(selectAll('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM, this.element), item);
                    }
                }, {
                    key: 'extIndex',
                    value: function extIndex(id) {
                        return id.replace(CLS_ITEM$2 + '_', '');
                    }
                }, {
                    key: 'expTemplateContent',
                    value: function expTemplateContent() {
                        var _this37 = this;

                        this.templateEle.forEach(function (eleStr) {
                            document.body.appendChild(_this37.element.querySelector(eleStr)).style.display = 'none';
                        });
                    }
                }, {
                    key: 'templateCompile',
                    value: function templateCompile(ele, cnt) {
                        var tempEle = createElement('div');
                        var templateFn = compile(cnt);
                        if (!isNullOrUndefined(templateFn) && templateFn().length > 0) {
                            [].slice.call(templateFn()).forEach(function (el) {
                                tempEle.appendChild(el);
                            });
                            ele.appendChild(tempEle);
                        }
                    }
                }, {
                    key: 'getContent',
                    value: function getContent(ele, index, callType) {
                        var eleStr = void 0;
                        var cnt = this.items[Number(index)].content;
                        if (typeof cnt === 'string' || isNullOrUndefined(cnt.innerHTML)) {
                            if (cnt[0] === '.' || cnt[0] === '#') {
                                if (document.querySelectorAll(cnt).length) {
                                    var eleVal = document.querySelector(cnt);
                                    eleStr = eleVal.outerHTML.trim();
                                    if (callType === 'clone') {
                                        ele.appendChild(eleVal.cloneNode(true));
                                    } else {
                                        ele.appendChild(eleVal);
                                        eleVal.style.display = '';
                                    }
                                } else {
                                    this.templateCompile(ele, cnt);
                                }
                            } else {
                                this.templateCompile(ele, cnt);
                            }
                        } else {
                            ele.appendChild(cnt);
                        }
                        if (!isNullOrUndefined(eleStr)) {
                            if (this.templateEle.indexOf(cnt.toString()) === -1) {
                                this.templateEle.push(cnt.toString());
                            }
                        }
                    }
                }, {
                    key: 'getTrgContent',
                    value: function getTrgContent(cntEle, no) {
                        var ele = void 0;
                        if (this.element.classList.contains(CLS_NEST$1)) {
                            ele = _select('.' + CLS_NEST$1 + '> .' + CLS_CONTENT$1 + ' > #' + CLS_CONTENT$1 + '_' + no, this.element);
                        } else {
                            ele = this.findEle(cntEle.children, CLS_CONTENT$1 + '_' + no);
                        }
                        return ele;
                    }
                }, {
                    key: 'findEle',
                    value: function findEle(items, key) {
                        var ele = void 0;
                        for (var i = 0; i < items.length; i++) {
                            if (items[i].id === key) {
                                ele = items[i];
                                break;
                            }
                        }
                        return ele;
                    }
                }, {
                    key: 'setOrientation',
                    value: function setOrientation(place, ele) {
                        place === 'Bottom' ? this.element.appendChild(ele) : this.element.insertBefore(ele, _select('.' + CLS_CONTENT$1, this.element));
                    }
                }, {
                    key: 'setCssClass',
                    value: function setCssClass(ele, cls, val) {
                        if (cls === '') {
                            return;
                        }
                        var list = cls.split(' ');
                        for (var i = 0; i < list.length; i++) {
                            if (val) {
                                ele.classList.add(list[i]);
                            } else {
                                ele.classList.remove(list[i]);
                            }
                        }
                    }
                }, {
                    key: 'setContentHeight',
                    value: function setContentHeight(val) {
                        if (isNullOrUndefined(this.cntEle)) {
                            return;
                        }
                        var hdrEle = _select('.' + CLS_HEADER$1, this.element);
                        if (this.heightAdjustMode === 'None') {
                            if (this.height === 'auto') {
                                return;
                            } else {
                                setStyleAttribute(this.cntEle, { 'height': this.element.offsetHeight - hdrEle.offsetHeight + 'px' });
                            }
                        } else if (this.heightAdjustMode === 'Fill') {
                            setStyleAttribute(this.element, { 'height': '100%' });
                            setStyleAttribute(this.cntEle, { 'height': 'auto' });
                        } else if (this.heightAdjustMode === 'Auto') {
                            var cnt = selectAll('.' + CLS_CONTENT$1 + ' > .' + CLS_ITEM$2, this.element);
                            if (this.isTemplate === true) {
                                for (var i = 0; i < cnt.length; i++) {
                                    cnt[i].setAttribute('style', 'display:block; visibility: visible');
                                    this.maxHeight = Math.max(this.maxHeight, this.getHeight(cnt[i]));
                                    cnt[i].style.removeProperty('display');
                                    cnt[i].style.removeProperty('visibility');
                                }
                            } else {
                                this.cntEle = _select('.' + CLS_CONTENT$1, this.element);
                                if (val === true) {
                                    this.cntEle.appendChild(createElement('div', {
                                        id: CLS_CONTENT$1 + '_' + 0, className: CLS_ITEM$2 + ' ' + CLS_ACTIVE$1,
                                        attrs: { 'role': 'tabpanel', 'aria-labelledby': CLS_ITEM$2 + '_' + 0 }
                                    }));
                                }
                                var ele = this.cntEle.children.item(0);
                                for (var _i = 0; _i < this.items.length; _i++) {
                                    this.getContent(ele, _i, 'clone');
                                    this.maxHeight = Math.max(this.maxHeight, this.getHeight(ele));
                                    ele.innerHTML = '';
                                }
                                this.templateEle = [];
                                this.getContent(ele, 0, 'render');
                                ele.classList.remove(CLS_ACTIVE$1);
                            }
                            setStyleAttribute(this.cntEle, { 'height': this.maxHeight + 'px' });
                        } else {
                            setStyleAttribute(this.cntEle, { 'height': 'auto' });
                        }
                    }
                }, {
                    key: 'getHeight',
                    value: function getHeight(ele) {
                        var cs = window.getComputedStyle(ele);
                        return ele.offsetHeight + parseFloat(cs.getPropertyValue('padding-top')) + parseFloat(cs.getPropertyValue('padding-bottom')) + parseFloat(cs.getPropertyValue('margin-top')) + parseFloat(cs.getPropertyValue('margin-bottom'));
                    }
                }, {
                    key: 'setActiveBorder',
                    value: function setActiveBorder() {
                        var trg = _select('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE$1, this.element);
                        if (this.headerPlacement === 'Bottom') {
                            trg = _select('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE$1, this.element.children[1]);
                        }
                        if (trg === null) {
                            return;
                        }
                        var root = closest(trg, '.' + CLS_TAB);
                        if (this.element !== root) {
                            return;
                        }
                        var hsCnt = _select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS + ' .e-hscroll-content', this.element.children[0]);
                        this.tbItems = _select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
                        var bar = _select('.' + CLS_HEADER$1 + ' .' + CLS_INDICATOR, this.element);
                        if (this.headerPlacement === 'Bottom') {
                            hsCnt = _select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS + ' .e-hscroll-content', this.element.children[1]);
                        }
                        var tbWidth = isNullOrUndefined(hsCnt) ? this.tbItems.offsetWidth : hsCnt.offsetWidth;
                        if (tbWidth !== 0) {
                            setStyleAttribute(bar, { 'left': trg.offsetLeft + 'px', 'right': tbWidth - (trg.offsetLeft + trg.offsetWidth) + 'px' });
                        } else {
                            setStyleAttribute(bar, { 'left': 'auto', 'right': 'auto' });
                        }
                        if (!isNullOrUndefined(this.bdrLine)) {
                            this.bdrLine.classList.remove(CLS_HIDDEN$1);
                        }
                    }
                }, {
                    key: 'setActive',
                    value: function setActive(value) {
                        this.tbItem = selectAll('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM, this.element);
                        var trg = this.tbItem[value];
                        if (value >= 0) {
                            this.setProperties({ selectedItem: value }, true);
                        }
                        if (value < 0 || isNaN(value) || this.tbItem.length === 0) {
                            return;
                        }
                        if (trg.classList.contains(CLS_ACTIVE$1)) {
                            this.setActiveBorder();
                            return;
                        }
                        if (!this.isTemplate) {
                            var prev = this.tbItem[this.prevIndex];
                            if (!isNullOrUndefined(prev)) {
                                prev.removeAttribute('aria-controls');
                            }
                            attributes(trg, { 'aria-controls': CLS_CONTENT$1 + '_' + value });
                        }
                        var id = trg.id;
                        this.removeActiveClass(id);
                        trg.classList.add(CLS_ACTIVE$1);
                        trg.setAttribute('aria-selected', 'true');
                        var no = Number(this.extIndex(id));
                        attributes(this.element, { 'aria-activedescendant': id });
                        if (this.isTemplate) {
                            if (_select('.' + CLS_CONTENT$1, this.element).children.length > 0) {
                                var _trg = this.findEle(_select('.' + CLS_CONTENT$1, this.element).children, CLS_CONTENT$1 + '_' + no);
                                if (!isNullOrUndefined(_trg)) {
                                    _trg.classList.add(CLS_ACTIVE$1);
                                }
                                this.triggerAnimation(id, this.enableAnimation);
                            }
                        } else {
                            this.cntEle = _select('.' + CLS_TAB + ' > .' + CLS_CONTENT$1, this.element);
                            var item = this.getTrgContent(this.cntEle, this.extIndex(id));
                            if (isNullOrUndefined(item)) {
                                this.cntEle.appendChild(createElement('div', {
                                    id: CLS_CONTENT$1 + '_' + this.extIndex(id), className: CLS_ITEM$2 + ' ' + CLS_ACTIVE$1,
                                    attrs: { role: 'tabpanel', 'aria-labelledby': CLS_ITEM$2 + '_' + this.extIndex(id) }
                                }));
                                var eleTrg = this.getTrgContent(this.cntEle, this.extIndex(id));
                                this.getContent(eleTrg, Number(this.extIndex(id)), 'render');
                            } else {
                                item.classList.add(CLS_ACTIVE$1);
                            }
                            this.triggerAnimation(id, this.enableAnimation);
                        }
                        this.setActiveBorder();
                        var curActItem = _select('.' + CLS_HEADER$1 + ' #' + id, this.element);
                        this.refreshItemVisibility(curActItem);
                        curActItem.firstChild.focus();
                        var eventArg = {
                            previousItem: this.prevItem,
                            previousIndex: this.prevIndex,
                            selectedItem: trg,
                            selectedIndex: value,
                            isSwiped: this.isSwipeed
                        };
                        this.trigger('selected', eventArg);
                    }
                }, {
                    key: 'setItems',
                    value: function setItems(items) {
                        this.isReplace = true;
                        this.tbItems = _select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
                        this.tbObj.items = this.parseObject(items, 0);
                        this.tbObj.dataBind();
                        this.isReplace = false;
                    }
                }, {
                    key: 'setRTL',
                    value: function setRTL(value) {
                        this.tbObj.enableRtl = value;
                        this.tbObj.dataBind();
                        this.setCssClass(this.element, CLS_RTL$3, value);
                        this.refreshActiveBorder();
                    }
                }, {
                    key: 'refreshActiveBorder',
                    value: function refreshActiveBorder() {
                        if (!isNullOrUndefined(this.bdrLine)) {
                            this.bdrLine.classList.add(CLS_HIDDEN$1);
                        }
                        this.setActiveBorder();
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        window.addEventListener('resize', this.refreshActElePosition.bind(this));
                        EventHandler.add(this.element, 'mouseover', this.hoverHandler, this);
                        EventHandler.add(this.element, 'keydown', this.spaceKeyDown, this);
                        if (!isNullOrUndefined(this.cntEle)) {
                            this.touchModule = new Touch(this.cntEle, { swipe: this.swipeHandler.bind(this) });
                        }
                        this.keyModule = new KeyboardEvents(this.element, { keyAction: this.keyHandler.bind(this), keyConfigs: this.keyConfigs });
                        this.tabKeyModule = new KeyboardEvents(this.element, {
                            keyAction: this.keyHandler.bind(this),
                            keyConfigs: { openPopup: 'shift+f10', tab: 'tab', shiftTab: 'shift+tab' },
                            eventName: 'keydown'
                        });
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        this.keyModule.destroy();
                        this.tabKeyModule.destroy();
                        if (!isNullOrUndefined(this.cntEle)) {
                            this.touchModule.destroy();
                        }
                        window.removeEventListener('resize', this.refreshActElePosition.bind(this));
                        this.element.removeEventListener('mouseover', this.hoverHandler.bind(this));
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(args) {
                        this.element.classList.remove(CLS_FOCUS);
                        var trg = args.originalEvent.target;
                        var trgParent = closest(trg, '.' + CLS_TB_ITEM);
                        var trgIndex = this.getEleIndex(trgParent);
                        if (trg.classList.contains(CLS_ICON_CLOSE)) {
                            this.removeTab(trgIndex);
                        } else {
                            this.isPopup = false;
                            if (!isNullOrUndefined(trgParent) && trgIndex !== this.selectedItem) {
                                this.select(trgIndex);
                            }
                        }
                    }
                }, {
                    key: 'swipeHandler',
                    value: function swipeHandler(e) {
                        if (e.velocity < 3 && isNullOrUndefined(e.originalEvent.changedTouches)) {
                            return;
                        }
                        this.isSwipeed = true;
                        if (e.swipeDirection === 'Right') {
                            this.select(this.selectedItem - 1);
                        } else {
                            if (e.swipeDirection === 'Left' && this.selectedItem !== selectAll('.' + CLS_TB_ITEM, this.element).length - 1) {
                                this.select(this.selectedItem + 1);
                            }
                        }
                        this.isSwipeed = false;
                    }
                }, {
                    key: 'spaceKeyDown',
                    value: function spaceKeyDown(e) {
                        if (e.keyCode === 32 && e.which === 32 || e.keyCode === 35 && e.which === 35) {
                            var clstHead = closest(e.target, '.' + CLS_HEADER$1);
                            if (!isNullOrUndefined(clstHead)) {
                                e.preventDefault();
                            }
                        }
                    }
                }, {
                    key: 'keyHandler',
                    value: function keyHandler(e) {
                        if (this.element.classList.contains(CLS_DISABLE$3)) {
                            return;
                        }
                        this.element.classList.add(CLS_FOCUS);
                        var trg = e.target;
                        var actEle = _select('.' + CLS_HEADER$1 + ' .' + CLS_ACTIVE$1, this.element);
                        var tabItem = selectAll('.' + CLS_TB_ITEM + ':not(.' + CLS_TB_POPUP + ')', this.element);
                        this.popEle = _select('.' + CLS_TB_POP, this.element);
                        if (!isNullOrUndefined(this.popEle)) {
                            this.popObj = this.popEle.ej2_instances[0];
                        }
                        switch (e.action) {
                            case 'space':
                            case 'enter':
                                if (trg.parentElement.classList.contains(CLS_DISABLE$3)) {
                                    return;
                                }
                                if (e.action === 'enter' && trg.classList.contains('e-hor-nav')) {
                                    break;
                                }
                                this.keyPressed(trg);
                                break;
                            case 'tab':
                            case 'shiftTab':
                                if (trg.classList.contains(CLS_WRAP) && closest(trg, '.' + CLS_TB_ITEM).classList.contains(CLS_ACTIVE$1) === false) {
                                    trg.setAttribute('tabindex', '-1');
                                }
                                if (this.popObj && isVisible(this.popObj.element)) {
                                    this.popObj.hide(this.hide);
                                }
                                actEle.children.item(0).setAttribute('tabindex', '0');
                                break;
                            case 'moveLeft':
                            case 'moveRight':
                                var item = closest(document.activeElement, '.' + CLS_TB_ITEM);
                                if (!isNullOrUndefined(item)) {
                                    this.refreshItemVisibility(item);
                                }
                                break;
                            case 'openPopup':
                                e.preventDefault();
                                if (!isNullOrUndefined(this.popEle) && this.popEle.classList.contains(CLS_POPUP_CLOSE)) {
                                    this.popObj.show(this.show);
                                }
                                break;
                            case 'delete':
                                var trgParent = closest(trg, '.' + CLS_TB_ITEM);
                                if (this.showCloseButton === true && !isNullOrUndefined(trgParent)) {
                                    var nxtSib = trgParent.nextSibling;
                                    if (!isNullOrUndefined(nxtSib) && nxtSib.classList.contains(CLS_TB_ITEM)) {
                                        nxtSib.firstChild.focus();
                                    }
                                    this.removeTab(this.getEleIndex(trgParent));
                                }
                                this.setActiveBorder();
                                break;
                        }
                    }
                }, {
                    key: 'refreshActElePosition',
                    value: function refreshActElePosition() {
                        var activeEle = _select('.' + CLS_TB_ITEM + '.' + CLS_TB_POPUP + '.' + CLS_ACTIVE$1, this.element);
                        if (!isNullOrUndefined(activeEle)) {
                            this.select(this.getEleIndex(activeEle));
                        }
                        this.refreshActiveBorder();
                    }
                }, {
                    key: 'refreshItemVisibility',
                    value: function refreshItemVisibility(target) {
                        var scrCnt = _select('.e-hscroll-content', this.tbItems);
                        if (!isNullOrUndefined(scrCnt)) {
                            var scrBar = _select('.e-hscroll-bar', this.tbItems);
                            var scrStart = scrBar.scrollLeft;
                            var scrEnd = scrStart + scrBar.offsetWidth;
                            var eleStart = target.offsetLeft;
                            var eleWidth = target.offsetWidth;
                            var eleEnd = target.offsetLeft + target.offsetWidth;
                            if (scrStart < eleStart && scrEnd < eleEnd) {
                                var eleViewRange = scrEnd - eleStart;
                                scrBar.scrollLeft = scrStart + (eleWidth - eleViewRange);
                            } else {
                                if (scrStart > eleStart && scrEnd > eleEnd) {
                                    var _eleViewRange = eleEnd - scrStart;
                                    scrBar.scrollLeft = scrStart - (eleWidth - _eleViewRange);
                                }
                            }
                        } else {
                            return;
                        }
                    }
                }, {
                    key: 'hoverHandler',
                    value: function hoverHandler(e) {
                        var trg = e.target;
                        if (!isNullOrUndefined(trg.classList) && trg.classList.contains(CLS_ICON_CLOSE)) {
                            trg.setAttribute('title', new L10n('tab', { closeButtonTitle: this.title }, this.locale).getConstant('closeButtonTitle'));
                        }
                    }
                }, {
                    key: 'enableTab',
                    value: function enableTab(index, value) {
                        var tbItems = selectAll('.' + CLS_TB_ITEM, this.element)[index];
                        if (isNullOrUndefined(tbItems)) {
                            return;
                        }
                        if (value === true) {
                            tbItems.classList.remove(CLS_DISABLE$3, CLS_OVERLAY);
                            tbItems.firstChild.setAttribute('tabindex', '-1');
                        } else {
                            tbItems.classList.add(CLS_DISABLE$3, CLS_OVERLAY);
                            tbItems.firstChild.removeAttribute('tabindex');
                            if (tbItems.classList.contains(CLS_ACTIVE$1)) {
                                this.select(index + 1);
                            }
                        }
                        tbItems.setAttribute('aria-disabled', value === true ? 'false' : 'true');
                    }
                }, {
                    key: 'addTab',
                    value: function addTab(items, index) {
                        var _this38 = this;

                        this.trigger('adding', { addedItems: items });
                        if (isNullOrUndefined(index)) {
                            index = selectAll('.' + CLS_TB_ITEM).length - 1;
                        }
                        if (this.isTemplate === true || selectAll('.' + CLS_TB_ITEM).length - 1 < index || index < 0 || isNaN(index)) {
                            return;
                        }
                        this.bdrLine.classList.add(CLS_HIDDEN$1);
                        this.tbItems = _select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
                        var tabItems = this.parseObject(items, index);
                        items.forEach(function (item, place) {
                            if (_this38.isReplace === true) {
                                var hdrItem = _select('.' + CLS_TB_ITEMS + ' #' + CLS_ITEM$2 + '_' + index, _this38.element);
                                detach(hdrItem);
                                _this38.items.splice(index + place, 0, item);
                            } else {
                                _this38.items.push(item);
                            }
                        });
                        this.tbObj.addItems(tabItems, index);
                        this.trigger('added', { addedItems: items });
                        if (this.selectedItem === index) {
                            this.select(index);
                        } else {
                            this.setActiveBorder();
                        }
                    }
                }, {
                    key: 'removeTab',
                    value: function removeTab(index) {
                        var trg = selectAll('.' + CLS_TB_ITEM, this.element)[index];
                        var removingArgs = { removedItem: trg, removedIndex: index };
                        this.trigger('removing', removingArgs);
                        if (isNullOrUndefined(trg)) {
                            return;
                        }
                        this.tbObj.removeItems(index);
                        this.refreshActiveBorder();
                        var no = this.extIndex(trg.id);
                        var cntTrg = this.findEle(_select('.' + CLS_CONTENT$1, this.element).children, CLS_CONTENT$1 + '_' + no);
                        if (!isNullOrUndefined(cntTrg)) {
                            cntTrg.outerHTML = '';
                        }
                        var removedArgs = { removedItem: trg, removedIndex: index };
                        this.trigger('removed', removedArgs);
                        if (trg.classList.contains(CLS_ACTIVE$1)) {
                            index = index > selectAll('.' + CLS_TB_ITEM + ':not(.' + CLS_TB_POPUP + ')', this.element).length - 1 ? index - 1 : index;
                            this.enableAnimation = false;
                            this.select(index);
                        }
                        if (selectAll('.' + CLS_TB_ITEM, this.element).length === 0) {
                            this.hdrEle.style.display = 'none';
                        }
                        this.enableAnimation = true;
                    }
                }, {
                    key: 'hideTab',
                    value: function hideTab(index, value) {
                        var item = selectAll('.' + CLS_TB_ITEM, this.element)[index];
                        if (isNullOrUndefined(item)) {
                            return;
                        }
                        if (isNullOrUndefined(value)) {
                            value = true;
                        }
                        this.bdrLine.classList.add(CLS_HIDDEN$1);
                        if (value === true) {
                            item.classList.add(CLS_HIDDEN$1);
                            if (item.classList.contains(CLS_ACTIVE$1)) {
                                this.select(index !== 0 ? index - 1 : index + 1);
                            }
                        } else {
                            item.classList.remove(CLS_HIDDEN$1);
                        }
                        this.setActiveBorder();
                        item.setAttribute('aria-hidden', '' + value);
                    }
                }, {
                    key: 'select',
                    value: function select(args) {
                        this.tbItems = _select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
                        this.tbItem = selectAll('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM, this.element);
                        this.prevItem = this.tbItem[this.prevIndex];
                        if (!isNullOrUndefined(this.prevItem) && !this.prevItem.classList.contains(CLS_DISABLE$3)) {
                            this.prevItem.children.item(0).setAttribute('tabindex', '-1');
                        }
                        var eventArg = {
                            previousItem: this.prevItem,
                            previousIndex: this.prevIndex,
                            selectedItem: this.tbItem[this.selectedItem],
                            selectedIndex: this.selectedItem,
                            isSwiped: this.isSwipeed
                        };
                        this.trigger('selecting', eventArg);
                        if (eventArg.cancel) {
                            return;
                        }
                        if (typeof args === 'number') {
                            if (!isNullOrUndefined(this.tbItem[args]) && this.tbItem[args].classList.contains(CLS_DISABLE$3)) {
                                for (var i = args + 1; i < this.items.length; i++) {
                                    if (this.items[i].disabled === false) {
                                        args = i;
                                        break;
                                    } else {
                                        args = 0;
                                    }
                                }
                            }
                            if (this.tbItem.length > args && args >= 0 && !isNaN(args)) {
                                this.prevIndex = this.selectedItem;
                                if (this.tbItem[args].classList.contains(CLS_TB_POPUP)) {
                                    this.setActive(this.popupHandler(this.tbItem[args]));
                                } else {
                                    this.setActive(args);
                                }
                            } else {
                                this.setActive(0);
                            }
                        } else if (args instanceof HTMLElement) {
                            this.setActive(this.getEleIndex(args));
                        }
                    }
                }, {
                    key: 'disable',
                    value: function disable(value) {
                        this.setCssClass(this.element, CLS_DISABLE$3, value);
                        this.element.setAttribute('aria-disabled', '' + value);
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist(['selectedItem', 'actEleId']);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'tab';
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion14 = true;
                        var _didIteratorError14 = false;
                        var _iteratorError14 = undefined;

                        try {
                            for (var _iterator14 = Object.keys(newProp)[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                                var prop = _step14.value;

                                switch (prop) {
                                    case 'width':
                                        setStyleAttribute(this.element, { width: formatUnit(newProp.width) });
                                        break;
                                    case 'height':
                                        setStyleAttribute(this.element, { height: formatUnit(newProp.height) });
                                        this.setContentHeight(false);
                                        break;
                                    case 'cssClass':
                                        this.setCssClass(this.element, newProp.cssClass, true);
                                        break;
                                    case 'items':
                                        if (!(newProp.items instanceof Array && oldProp.items instanceof Array)) {
                                            var changedProp = Object.keys(newProp.items);
                                            for (var i = 0; i < changedProp.length; i++) {
                                                var index = parseInt(Object.keys(newProp.items)[i], 10);
                                                var property = Object.keys(newProp.items[index])[0];
                                                var oldVal = Object(oldProp.items[index])[property];
                                                var newVal = Object(newProp.items[index])[property];
                                                var hdrItem = _select('.' + CLS_TB_ITEMS + ' #' + CLS_ITEM$2 + '_' + index, this.element);
                                                var cntItem = _select('.' + CLS_CONTENT$1 + ' #' + CLS_CONTENT$1 + '_' + index, this.element);
                                                if (property === 'header') {
                                                    var arr = [];
                                                    arr.push(this.items[index]);
                                                    this.items.splice(index, 1);
                                                    this.tbObj.items.splice(index, 1);
                                                    this.isReplace = true;
                                                    this.addTab(arr, index);
                                                    this.isReplace = false;
                                                }
                                                if (property === 'content' && !isNullOrUndefined(cntItem)) {
                                                    var strVal = typeof newVal === 'string' || isNullOrUndefined(newVal.innerHTML);
                                                    if (strVal && (newVal[0] === '.' || newVal[0] === '#') && newVal.length) {
                                                        var eleVal = document.querySelector(newVal);
                                                        cntItem.appendChild(eleVal);
                                                        eleVal.style.display = '';
                                                    } else if (newVal === '' && oldVal[0] === '#') {
                                                        document.body.appendChild(this.element.querySelector(oldVal)).style.display = 'none';
                                                        cntItem.innerHTML = newVal;
                                                    } else {
                                                        cntItem.innerHTML = newVal;
                                                    }
                                                }
                                                if (property === 'cssClass') {
                                                    if (!isNullOrUndefined(hdrItem)) {
                                                        hdrItem.classList.remove(oldVal);
                                                        hdrItem.classList.add(newVal);
                                                    }
                                                    if (!isNullOrUndefined(cntItem)) {
                                                        cntItem.classList.remove(oldVal);
                                                        cntItem.classList.add(newVal);
                                                    }
                                                }
                                                if (property === 'disabled') {
                                                    this.enableTab(index, newVal === true ? false : true);
                                                }
                                            }
                                        } else {
                                            if (isNullOrUndefined(this.tbObj)) {
                                                this.renderContainer();
                                                if (!isNullOrUndefined(this.cntEle)) {
                                                    this.touchModule = new Touch(this.cntEle, { swipe: this.swipeHandler.bind(this) });
                                                }
                                            } else {
                                                this.setItems(newProp.items);
                                                if (this.templateEle.length > 0) {
                                                    this.expTemplateContent();
                                                }
                                                this.templateEle = [];
                                                _select('.' + CLS_TAB + ' > .' + CLS_CONTENT$1, this.element).innerHTML = '';
                                                this.select(this.selectedItem);
                                            }
                                        }
                                        break;
                                    case 'showCloseButton':
                                        this.setCloseButton(newProp.showCloseButton);
                                        break;
                                    case 'selectedItem':
                                        this.selectedItem = oldProp.selectedItem;
                                        this.select(newProp.selectedItem);
                                        break;
                                    case 'headerPlacement':
                                        var tempHdrEle = _select('.' + CLS_HEADER$1, this.element);
                                        this.setOrientation(newProp.headerPlacement, tempHdrEle);
                                        this.select(this.selectedItem);
                                        break;
                                    case 'enableRtl':
                                        this.setRTL(newProp.enableRtl);
                                        break;
                                    case 'overflowMode':
                                        this.tbObj.overflowMode = newProp.overflowMode;
                                        this.tbObj.dataBind();
                                        this.refreshActElePosition();
                                        break;
                                    case 'heightAdjustMode':
                                        this.setContentHeight(false);
                                        this.select(this.selectedItem);
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError14 = true;
                            _iteratorError14 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion14 && _iterator14.return) {
                                    _iterator14.return();
                                }
                            } finally {
                                if (_didIteratorError14) {
                                    throw _iteratorError14;
                                }
                            }
                        }
                    }
                }]);

                return Tab;
            }(Component));

            __decorate$4([Collection([], TabItem)], Tab.prototype, "items", void 0);
            __decorate$4([Property('100%')], Tab.prototype, "width", void 0);
            __decorate$4([Property('auto')], Tab.prototype, "height", void 0);
            __decorate$4([Property('')], Tab.prototype, "cssClass", void 0);
            __decorate$4([Property(0)], Tab.prototype, "selectedItem", void 0);
            __decorate$4([Property('Top')], Tab.prototype, "headerPlacement", void 0);
            __decorate$4([Property('Content')], Tab.prototype, "heightAdjustMode", void 0);
            __decorate$4([Property('Scrollable')], Tab.prototype, "overflowMode", void 0);
            __decorate$4([Property(false)], Tab.prototype, "enableRtl", void 0);
            __decorate$4([Property(false)], Tab.prototype, "enablePersistence", void 0);
            __decorate$4([Property(false)], Tab.prototype, "showCloseButton", void 0);
            __decorate$4([Complex({}, TabAnimationSettings)], Tab.prototype, "animation", void 0);
            __decorate$4([Event()], Tab.prototype, "created", void 0);
            __decorate$4([Event()], Tab.prototype, "adding", void 0);
            __decorate$4([Event()], Tab.prototype, "added", void 0);
            __decorate$4([Event()], Tab.prototype, "selecting", void 0);
            __decorate$4([Event()], Tab.prototype, "selected", void 0);
            __decorate$4([Event()], Tab.prototype, "removing", void 0);
            __decorate$4([Event()], Tab.prototype, "removed", void 0);
            __decorate$4([Event()], Tab.prototype, "destroyed", void 0);
            _export('Tab', Tab = __decorate$4([NotifyPropertyChanges], Tab));

            /**
             * Tab modules
             */

            __decorate$5 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            ROOT = 'e-treeview';
            COLLAPSIBLE = 'e-icon-collapsible';
            EXPANDABLE = 'e-icon-expandable';
            LISTITEM = 'e-list-item';
            LISTTEXT = 'e-list-text';
            PARENTITEM = 'e-list-parent';
            HOVER = 'e-hover';
            ACTIVE = 'e-active';
            LOAD = 'e-icons-spinner';
            PROCESS = 'e-process';
            ICON = 'e-icons';
            TEXTWRAP = 'e-text-content';
            INPUT = 'e-input';
            INPUTGROUP = 'e-input-group';
            TREEINPUT = 'e-tree-input';
            EDITING = 'e-editing';
            RTL$1 = 'e-rtl';
            DRAGITEM = 'e-drag-item';
            DROPPABLE = 'e-droppable';
            DRAGGING = 'e-dragging';
            SIBLING = 'e-sibling';
            DROPIN = 'e-drop-in';
            DROPNEXT = 'e-drop-next';
            DROPOUT = 'e-drop-out';
            NODROP = 'e-no-drop';
            FULLROWWRAP = 'e-fullrow-wrap';
            FULLROW = 'e-fullrow';
            SELECTED$1 = 'e-selected';
            EXPANDED = 'e-expanded';
            NODECOLLAPSED = 'e-node-collapsed';
            DISABLE = 'e-disable';
            DROPCOUNT = 'e-drop-count';
            CHECK = 'e-check';
            INDETERMINATE = 'e-stop';
            CHECKBOXWRAP = 'e-checkbox-wrapper';
            CHECKBOXFRAME = 'e-frame';
            CHECKBOXRIPPLE = 'e-ripple-container';
            FOCUS = 'e-node-focus';
            IMAGE = 'e-list-img';
            BIGGER = 'e-bigger';
            SMALL = 'e-small';
            treeAriaAttr = {
                treeRole: 'tree',
                itemRole: 'treeitem',
                listRole: 'group',
                itemText: '',
                wrapperRole: ''
            };

            _export('FieldsSettings', FieldsSettings = function (_ChildProperty10) {
                _inherits(FieldsSettings, _ChildProperty10);

                function FieldsSettings() {
                    _classCallCheck(this, FieldsSettings);

                    return _possibleConstructorReturn(this, (FieldsSettings.__proto__ || Object.getPrototypeOf(FieldsSettings)).apply(this, arguments));
                }

                return FieldsSettings;
            }(ChildProperty));

            __decorate$5([Property('child')], FieldsSettings.prototype, "child", void 0);
            __decorate$5([Property([])], FieldsSettings.prototype, "dataSource", void 0);
            __decorate$5([Property('expanded')], FieldsSettings.prototype, "expanded", void 0);
            __decorate$5([Property('hasChildren')], FieldsSettings.prototype, "hasChildren", void 0);
            __decorate$5([Property('htmlAttributes')], FieldsSettings.prototype, "htmlAttributes", void 0);
            __decorate$5([Property('iconCss')], FieldsSettings.prototype, "iconCss", void 0);
            __decorate$5([Property('id')], FieldsSettings.prototype, "id", void 0);
            __decorate$5([Property('imageUrl')], FieldsSettings.prototype, "imageUrl", void 0);
            __decorate$5([Property('isChecked')], FieldsSettings.prototype, "isChecked", void 0);
            __decorate$5([Property('parentID')], FieldsSettings.prototype, "parentID", void 0);
            __decorate$5([Property(null)], FieldsSettings.prototype, "query", void 0);
            __decorate$5([Property('selected')], FieldsSettings.prototype, "selected", void 0);
            __decorate$5([Property(null)], FieldsSettings.prototype, "tableName", void 0);
            __decorate$5([Property('text')], FieldsSettings.prototype, "text", void 0);
            __decorate$5([Property('tooltip')], FieldsSettings.prototype, "tooltip", void 0);
            __decorate$5([Property('navigateUrl')], FieldsSettings.prototype, "navigateUrl", void 0);
            /**
             * Configures animation settings for the TreeView component.
             */

            _export('ActionSettings', ActionSettings = function (_ChildProperty11) {
                _inherits(ActionSettings, _ChildProperty11);

                function ActionSettings() {
                    _classCallCheck(this, ActionSettings);

                    return _possibleConstructorReturn(this, (ActionSettings.__proto__ || Object.getPrototypeOf(ActionSettings)).apply(this, arguments));
                }

                return ActionSettings;
            }(ChildProperty));

            __decorate$5([Property('SlideDown')], ActionSettings.prototype, "effect", void 0);
            __decorate$5([Property(400)], ActionSettings.prototype, "duration", void 0);
            __decorate$5([Property('linear')], ActionSettings.prototype, "easing", void 0);
            /**
             * Configures the animation settings for expanding and collapsing nodes in TreeView.
             */

            _export('NodeAnimationSettings', NodeAnimationSettings = function (_ChildProperty12) {
                _inherits(NodeAnimationSettings, _ChildProperty12);

                function NodeAnimationSettings() {
                    _classCallCheck(this, NodeAnimationSettings);

                    return _possibleConstructorReturn(this, (NodeAnimationSettings.__proto__ || Object.getPrototypeOf(NodeAnimationSettings)).apply(this, arguments));
                }

                return NodeAnimationSettings;
            }(ChildProperty));

            __decorate$5([Complex({ effect: 'SlideUp', duration: 400, easing: 'linear' }, ActionSettings)], NodeAnimationSettings.prototype, "collapse", void 0);
            __decorate$5([Complex({ effect: 'SlideDown', duration: 400, easing: 'linear' }, ActionSettings)], NodeAnimationSettings.prototype, "expand", void 0);
            /**
             * The TreeView component is used to represent hierarchical data in a tree like structure with advanced
             * functions to perform edit, drag and drop, selection with check-box, and more.
             * ```html
             *  <div id="tree"></div>
             * ```
             * ```typescript
             *  let treeObj: TreeView = new TreeView();
             *  treeObj.appendTo('#tree');
             * ```
             */

            _export('TreeView', TreeView = function (_Component6) {
                _inherits(TreeView, _Component6);

                function TreeView(options, element) {
                    _classCallCheck(this, TreeView);

                    var _this42 = _possibleConstructorReturn(this, (TreeView.__proto__ || Object.getPrototypeOf(TreeView)).call(this, options, element));

                    _this42.mouseDownStatus = false;
                    return _this42;
                }
                /**
                 * Get component name.
                 * @returns string
                 * @private
                 */


                _createClass(TreeView, [{
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'treeview';
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        var _this43 = this;

                        this.checkActionNodes = [];
                        this.dragStartAction = false;
                        this.isAnimate = false;
                        this.keyConfigs = {
                            escape: 'escape',
                            end: 'end',
                            enter: 'enter',
                            f2: 'f2',
                            home: 'home',
                            moveDown: 'downarrow',
                            moveLeft: 'leftarrow',
                            moveRight: 'rightarrow',
                            moveUp: 'uparrow',
                            ctrlDown: 'ctrl+downarrow',
                            ctrlUp: 'ctrl+uparrow',
                            ctrlEnter: 'ctrl+enter',
                            ctrlHome: 'ctrl+home',
                            ctrlEnd: 'ctrl+end',
                            ctrlA: 'ctrl+A',
                            shiftDown: 'shift+downarrow',
                            shiftUp: 'shift+uparrow',
                            shiftEnter: 'shift+enter',
                            shiftHome: 'shift+home',
                            shiftEnd: 'shift+end',
                            csDown: 'ctrl+shift+downarrow',
                            csUp: 'ctrl+shift+uparrow',
                            csEnter: 'ctrl+shift+enter',
                            csHome: 'ctrl+shift+home',
                            csEnd: 'ctrl+shift+end',
                            space: 'space'
                        };
                        this.listBaseOption = {
                            expandCollapse: true,
                            fields: this.fields.properties,
                            showIcon: true,
                            expandIconClass: EXPANDABLE,
                            ariaAttributes: treeAriaAttr,
                            expandIconPosition: 'Left',
                            itemCreated: function itemCreated(e) {
                                _this43.beforeNodeCreate(e);
                            }
                        };
                        this.listBaseOption.fields.url = this.fields.navigateUrl;
                        this.aniObj = new Animation({});
                        this.treeList = [];
                        this.isLoaded = false;
                        this.setTouchClass();
                        if (isNullOrUndefined(this.selectedNodes)) {
                            this.setProperties({ selectedNodes: [] }, true);
                        }
                        if (isNullOrUndefined(this.checkedNodes)) {
                            this.setProperties({ checkedNodes: [] }, true);
                        }
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        var keyEntity = ['selectedNodes', 'checkedNodes'];
                        return this.addOnPersist(keyEntity);
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.isAnimate = true;
                        this.initialize();
                        this.setDataBinding();
                        this.setExpandOnType();
                        this.setRipple();
                        this.wireEditingEvents(this.allowEditing);
                        this.setDragAndDrop(this.allowDragAndDrop);
                        this.wireEvents();
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        this.element.setAttribute('role', 'tree');
                        this.element.setAttribute('tabindex', '0');
                        this.element.setAttribute('aria-activedescendant', this.element.id + '_active');
                        this.setCssClass(null, this.cssClass);
                        this.setEnableRtl();
                        this.setFullRow(this.fullRowSelect);
                        this.nodeTemplateFn = this.templateComplier(this.nodeTemplate);
                    }
                }, {
                    key: 'setEnableRtl',
                    value: function setEnableRtl() {
                        this.enableRtl ? _addClass([this.element], RTL$1) : removeClass([this.element], RTL$1);
                    }
                }, {
                    key: 'setRipple',
                    value: function setRipple() {
                        var tempStr = '.' + FULLROW + ',.' + TEXTWRAP;
                        var rippleModel = {
                            selector: tempStr,
                            ignore: '.' + TEXTWRAP + ' > .' + ICON + ',.' + INPUTGROUP + ',.' + INPUT + ', .' + CHECKBOXWRAP
                        };
                        this.rippleFn = rippleEffect(this.element, rippleModel);
                        var iconModel = {
                            selector: '.' + TEXTWRAP + ' > .' + ICON,
                            isCenterRipple: true
                        };
                        this.rippleIconFn = rippleEffect(this.element, iconModel);
                    }
                }, {
                    key: 'setFullRow',
                    value: function setFullRow(isEnabled) {
                        isEnabled ? _addClass([this.element], FULLROWWRAP) : removeClass([this.element], FULLROWWRAP);
                    }
                }, {
                    key: 'setMultiSelect',
                    value: function setMultiSelect(isEnabled) {
                        var firstUl = _select('.' + PARENTITEM, this.element);
                        if (isEnabled) {
                            firstUl.setAttribute('aria-multiselectable', 'true');
                        } else {
                            firstUl.removeAttribute('aria-multiselectable');
                        }
                    }
                }, {
                    key: 'templateComplier',
                    value: function templateComplier(template) {
                        if (template) {
                            try {
                                if (document.querySelectorAll(template).length) {
                                    return compile(document.querySelector(template).innerHTML.trim());
                                }
                            } catch (e) {
                                return compile(template);
                            }
                        }
                        return undefined;
                    }
                }, {
                    key: 'setDataBinding',
                    value: function setDataBinding() {
                        var _this44 = this;

                        this.treeList.push('false');
                        if (this.fields.dataSource instanceof DataManager) {
                            this.fields.dataSource.executeQuery(this.getQuery(this.fields)).then(function (e) {
                                _this44.treeList.pop();
                                _this44.treeData = e.result;
                                _this44.isNumberTypeId = _this44.getType();
                                _this44.setRootData();
                                _this44.renderItems(true);
                                if (_this44.treeList.length === 0 && !_this44.isLoaded) {
                                    _this44.finalize();
                                }
                            });
                        } else {
                            this.treeList.pop();
                            if (isNullOrUndefined(this.fields.dataSource)) {
                                this.rootData = this.treeData = [];
                            } else {
                                this.treeData = this.fields.dataSource;
                                this.setRootData();
                            }
                            this.renderItems(false);
                        }
                        if (this.treeList.length === 0 && !this.isLoaded) {
                            this.finalize();
                        }
                    }
                }, {
                    key: 'getQuery',
                    value: function getQuery(mapper) {
                        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                        var columns = [];
                        var query = void 0;
                        if (!mapper.query) {
                            query = new Query();
                            var prop = this.getActualProperties(mapper);
                            var _iteratorNormalCompletion15 = true;
                            var _didIteratorError15 = false;
                            var _iteratorError15 = undefined;

                            try {
                                for (var _iterator15 = Object.keys(prop)[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                                    var col = _step15.value;

                                    if (col !== 'dataSource' && col !== 'tableName' && col !== 'child' && !!mapper[col] && columns.indexOf(mapper[col]) === -1) {
                                        columns.push(mapper[col]);
                                    }
                                }
                            } catch (err) {
                                _didIteratorError15 = true;
                                _iteratorError15 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion15 && _iterator15.return) {
                                        _iterator15.return();
                                    }
                                } finally {
                                    if (_didIteratorError15) {
                                        throw _iteratorError15;
                                    }
                                }
                            }

                            query.select(columns);
                            if (prop.hasOwnProperty('tableName')) {
                                query.from(mapper.tableName);
                            }
                        } else {
                            query = mapper.query.clone();
                        }
                        ListBase.addSorting(this.sortOrder, mapper.text, query);
                        if (!isNullOrUndefined(value) && !isNullOrUndefined(mapper.parentID)) {
                            query.where(mapper.parentID, 'equal', this.isNumberTypeId ? parseFloat(value) : value);
                        }
                        return query;
                    }
                }, {
                    key: 'getType',
                    value: function getType() {
                        return this.treeData[0] ? typeof getValue(this.fields.id, this.treeData[0]) === 'number' ? true : false : false;
                    }
                }, {
                    key: 'setRootData',
                    value: function setRootData() {
                        this.dataType = this.getDataType(this.treeData, this.fields);
                        if (this.dataType === 1) {
                            this.groupedData = this.getGroupedData(this.treeData, this.fields.parentID);
                            var rootItems = this.getChildNodes(this.treeData, undefined, true);
                            if (isNullOrUndefined(rootItems)) {
                                this.rootData = [];
                            } else {
                                this.rootData = rootItems;
                            }
                        } else {
                            this.rootData = this.treeData;
                        }
                    }
                }, {
                    key: 'renderItems',
                    value: function renderItems(isSorted) {
                        this.listBaseOption.ariaAttributes.level = 1;
                        this.ulElement = ListBase.createList(isSorted ? this.rootData : this.getSortedData(this.rootData), this.listBaseOption);
                        this.element.appendChild(this.ulElement);
                        this.finalizeNode(this.element);
                    }
                }, {
                    key: 'beforeNodeCreate',
                    value: function beforeNodeCreate(e) {
                        if (this.showCheckBox) {
                            var checkboxEle = createCheckBox(true, { cssClass: this.touchClass });
                            var icon = _select('div.' + ICON, e.item);
                            var id = e.item.getAttribute('data-uid');
                            e.item.childNodes[0].insertBefore(checkboxEle, e.item.childNodes[0].childNodes[isNullOrUndefined(icon) ? 0 : 1]);
                            var checkValue = getValue(e.fields.isChecked, e.curData);
                            if (this.checkedNodes.indexOf(id) > -1) {
                                _select('.' + CHECKBOXFRAME, checkboxEle).classList.add(CHECK);
                                checkboxEle.setAttribute('aria-checked', 'true');
                                this.addCheck(e.item);
                            } else if (!isNullOrUndefined(checkValue) && checkValue.toString() === 'true') {
                                _select('.' + CHECKBOXFRAME, checkboxEle).classList.add(CHECK);
                                checkboxEle.setAttribute('aria-checked', 'true');
                                this.addCheck(e.item);
                            } else {
                                checkboxEle.setAttribute('aria-checked', 'false');
                            }
                            var frame = _select('.' + CHECKBOXFRAME, checkboxEle);
                            EventHandler.add(frame, 'mousedown', this.frameMouseHandler, this);
                            EventHandler.add(frame, 'mouseup', this.frameMouseHandler, this);
                        }
                        if (this.fullRowSelect) {
                            this.createFullRow(e.item);
                        }
                        if (this.allowMultiSelection && !e.item.classList.contains(SELECTED$1)) {
                            e.item.setAttribute('aria-selected', 'false');
                        }
                        var fields = e.fields;
                        this.addActionClass(e, fields.selected, SELECTED$1);
                        this.addActionClass(e, fields.expanded, EXPANDED);
                        if (!isNullOrUndefined(this.nodeTemplateFn)) {
                            var textEle = e.item.querySelector('.' + LISTTEXT);
                            textEle.innerHTML = '';
                            append(this.nodeTemplateFn(e.curData), textEle);
                        }
                        var eventArgs = {
                            node: e.item,
                            nodeData: e.curData,
                            text: e.text
                        };
                        this.trigger('drawNode', eventArgs);
                    }
                }, {
                    key: 'frameMouseHandler',
                    value: function frameMouseHandler(e) {
                        var rippleSpan = _select('.' + CHECKBOXRIPPLE, e.target.parentElement);
                        rippleMouseHandler(e, rippleSpan);
                    }
                }, {
                    key: 'addActionClass',
                    value: function addActionClass(e, action, cssClass) {
                        var data = e.curData;
                        var actionValue = getValue(action, data);
                        if (!isNullOrUndefined(actionValue) && actionValue.toString() !== 'false') {
                            e.item.classList.add(cssClass);
                        }
                    }
                }, {
                    key: 'getDataType',
                    value: function getDataType(ds, mapper) {
                        if (this.fields.dataSource instanceof DataManager) {
                            for (var i = 0; i < ds.length; i++) {
                                if (typeof mapper.child === 'string' && isNullOrUndefined(getValue(mapper.child, ds[i]))) {
                                    return 1;
                                }
                            }
                            return 2;
                        }
                        for (var _i2 = 0, len = ds.length; _i2 < len; _i2++) {
                            if (typeof mapper.child === 'string' && !isNullOrUndefined(getValue(mapper.child, ds[_i2]))) {
                                return 2;
                            }
                            if (!isNullOrUndefined(getValue(mapper.parentID, ds[_i2])) || !isNullOrUndefined(getValue(mapper.hasChildren, ds[_i2]))) {
                                return 1;
                            }
                        }
                        return 1;
                    }
                }, {
                    key: 'getGroupedData',
                    value: function getGroupedData(dataSource, groupBy) {
                        var cusQuery = new Query().group(groupBy);
                        var ds = ListBase.getDataSource(dataSource, cusQuery);
                        var grpItem = [];
                        for (var j = 0; j < ds.length; j++) {
                            var itemObj = ds[j].items;
                            grpItem.push(itemObj);
                        }
                        return grpItem;
                    }
                }, {
                    key: 'getSortedData',
                    value: function getSortedData(list) {
                        if (list && this.sortOrder !== 'None') {
                            list = ListBase.getDataSource(list, ListBase.addSorting(this.sortOrder, this.fields.text));
                        }
                        return list;
                    }
                }, {
                    key: 'finalizeNode',
                    value: function finalizeNode(element) {
                        var iNodes = selectAll('.' + IMAGE, element);
                        for (var k = 0; k < iNodes.length; k++) {
                            iNodes[k].setAttribute('alt', IMAGE);
                        }
                        if (this.isLoaded) {
                            var sNodes = selectAll('.' + SELECTED$1, element);
                            for (var i = 0; i < sNodes.length; i++) {
                                this.selectNode(sNodes[i], null);
                                break;
                            }
                            removeClass(sNodes, SELECTED$1);
                        }
                        var cNodes = selectAll('.' + LISTITEM + ':not(.' + EXPANDED + ')', element);
                        for (var j = 0; j < cNodes.length; j++) {
                            var icon = _select('div.' + ICON, cNodes[j]);
                            if (icon && icon.classList.contains(EXPANDABLE)) {
                                cNodes[j].setAttribute('aria-expanded', 'false');
                                _addClass([cNodes[j]], NODECOLLAPSED);
                            }
                        }
                        var eNodes = selectAll('.' + EXPANDED, element);
                        for (var _i3 = 0; _i3 < eNodes.length; _i3++) {
                            this.renderChildNodes(eNodes[_i3]);
                        }
                        removeClass(eNodes, EXPANDED);
                        this.updateList();
                        if (this.isLoaded) {
                            this.updateCheckedProp();
                        }
                    }
                }, {
                    key: 'updateCheckedProp',
                    value: function updateCheckedProp() {
                        var _this45 = this;

                        if (this.showCheckBox) {
                            var nodes = [].concat([], this.checkedNodes);
                            this.checkedNodes.forEach(function (value, index) {
                                var checkBox = _this45.element.querySelector('[data-uid="' + value + '"]');
                                if (isNullOrUndefined(checkBox)) {
                                    nodes = nodes.filter(function (e) {
                                        return e !== value;
                                    });
                                }
                            });
                            this.setProperties({ checkedNodes: nodes }, true);
                        }
                    }
                }, {
                    key: 'ensureParentCheckState',
                    value: function ensureParentCheckState(element) {
                        if (!isNullOrUndefined(element)) {
                            if (element.classList.contains(ROOT)) {
                                return;
                            }
                            var ulElement = element;
                            if (element.classList.contains(LISTITEM)) {
                                ulElement = _select('.' + PARENTITEM, element);
                            }
                            var checkedNodes = selectAll('.' + CHECK, ulElement);
                            var nodes = selectAll('.' + LISTITEM, ulElement);
                            var checkBoxEle = element.getElementsByClassName(CHECKBOXWRAP)[0];
                            if (nodes.length === checkedNodes.length) {
                                this.changeState(checkBoxEle, 'check', null, true, true);
                            } else if (checkedNodes.length > 0) {
                                this.changeState(checkBoxEle, 'indeterminate', null, true, true);
                            } else if (checkedNodes.length === 0) {
                                this.changeState(checkBoxEle, 'uncheck', null, true, true);
                            }
                            var parentUL = closest(element, '.' + PARENTITEM);
                            if (!isNullOrUndefined(parentUL)) {
                                var currentParent = closest(parentUL, '.' + LISTITEM);
                                this.ensureParentCheckState(currentParent);
                            }
                        }
                    }
                }, {
                    key: 'ensureChildCheckState',
                    value: function ensureChildCheckState(element, e) {
                        if (!isNullOrUndefined(element)) {
                            var childElement = _select('.' + PARENTITEM, element);
                            var checkBoxes = void 0;
                            if (!isNullOrUndefined(childElement)) {
                                checkBoxes = selectAll('.' + CHECKBOXWRAP, childElement);
                                var isChecked = element.getElementsByClassName(CHECKBOXFRAME)[0].classList.contains(CHECK);
                                var checkedState = void 0;
                                for (var index = 0; index < checkBoxes.length; index++) {
                                    if (!isNullOrUndefined(this.currentLoadData) && !isNullOrUndefined(getValue(this.fields.isChecked, this.currentLoadData[index]))) {
                                        checkedState = getValue(this.fields.isChecked, this.currentLoadData[index]) ? 'check' : 'uncheck';
                                    } else {
                                        var isNodeChecked = checkBoxes[index].getElementsByClassName(CHECKBOXFRAME)[0].classList.contains(CHECK);
                                        checkedState = !this.isLoaded && isNodeChecked ? 'check' : isChecked ? 'check' : 'uncheck';
                                    }
                                    this.changeState(checkBoxes[index], checkedState, e, true, true);
                                }
                            }
                        }
                    }
                }, {
                    key: 'doCheckBoxAction',
                    value: function doCheckBoxAction(nodes, doCheck) {
                        if (!isNullOrUndefined(nodes)) {
                            for (var i = 0, len = nodes.length; i < len; i++) {
                                var liEle = this.getElement(nodes[i]);
                                if (isNullOrUndefined(liEle)) {
                                    continue;
                                }
                                var checkBox = _select('.' + PARENTITEM + ' .' + CHECKBOXWRAP, liEle);
                                this.validateCheckNode(checkBox, !doCheck, liEle, null);
                            }
                        } else {
                            var checkBoxes = selectAll('.' + CHECKBOXWRAP, this.element);
                            for (var index = 0; index < checkBoxes.length; index++) {
                                this.changeState(checkBoxes[index], doCheck ? 'check' : 'uncheck');
                            }
                        }
                    }
                }, {
                    key: 'changeState',
                    value: function changeState(wrapper, state, e, isPrevent, isAdd) {
                        var ariaState = void 0;
                        var eventArgs = void 0;
                        var currLi = closest(wrapper, '.' + LISTITEM);
                        if (!isPrevent) {
                            this.checkActionNodes = [];
                            eventArgs = this.getCheckEvent(currLi, state, e);
                            this.trigger('nodeChecking', eventArgs);
                            if (eventArgs.cancel) {
                                return;
                            }
                        }
                        var frameSpan = wrapper.getElementsByClassName(CHECKBOXFRAME)[0];
                        if (state === 'check' && !frameSpan.classList.contains(CHECK)) {
                            frameSpan.classList.remove(INDETERMINATE);
                            frameSpan.classList.add(CHECK);
                            this.addCheck(currLi);
                            ariaState = 'true';
                        } else if (state === 'uncheck' && (frameSpan.classList.contains(CHECK) || frameSpan.classList.contains(INDETERMINATE))) {
                            removeClass([frameSpan], [CHECK, INDETERMINATE]);
                            this.removeCheck(currLi);
                            ariaState = 'false';
                        } else if (state === 'indeterminate' && !frameSpan.classList.contains(INDETERMINATE)) {
                            frameSpan.classList.remove(CHECK);
                            frameSpan.classList.add(INDETERMINATE);
                            this.removeCheck(currLi);
                            ariaState = 'mixed';
                        }
                        ariaState = state === 'check' ? 'true' : state === 'uncheck' ? 'false' : ariaState;
                        if (!isNullOrUndefined(ariaState)) {
                            wrapper.setAttribute('aria-checked', ariaState);
                        }
                        if (isAdd) {
                            var data = [].concat([], this.checkActionNodes);
                            eventArgs = this.getCheckEvent(currLi, state, e);
                            if (isUndefined(isPrevent)) {
                                eventArgs.data = data;
                            }
                        }
                        if (!isPrevent) {
                            if (!isNullOrUndefined(ariaState)) {
                                wrapper.setAttribute('aria-checked', ariaState);
                                eventArgs.data[0].checked = ariaState;
                                this.trigger('nodeChecked', eventArgs);
                                this.checkActionNodes = [];
                            }
                        }
                    }
                }, {
                    key: 'addCheck',
                    value: function addCheck(liEle) {
                        var id = liEle.getAttribute('data-uid');
                        if (!isNullOrUndefined(id) && this.checkedNodes.indexOf(id) === -1) {
                            this.checkedNodes.push(id);
                        }
                    }
                }, {
                    key: 'removeCheck',
                    value: function removeCheck(liEle) {
                        var index = this.checkedNodes.indexOf(liEle.getAttribute('data-uid'));
                        if (index > -1) {
                            this.checkedNodes.splice(index, 1);
                        }
                    }
                }, {
                    key: 'getCheckEvent',
                    value: function getCheckEvent(currLi, action, e) {
                        this.checkActionNodes.push(this.getNodeData(currLi));
                        var nodeData = this.checkActionNodes;
                        return { action: action, cancel: false, isInteracted: isNullOrUndefined(e) ? false : true, node: currLi, data: nodeData };
                    }
                }, {
                    key: 'finalize',
                    value: function finalize() {
                        var firstUl = _select('.' + PARENTITEM, this.element);
                        firstUl.setAttribute('role', treeAriaAttr.treeRole);
                        this.setMultiSelect(this.allowMultiSelection);
                        var firstNode = _select('.' + LISTITEM, this.element);
                        if (firstNode) {
                            _addClass([firstNode], FOCUS);
                            this.updateIdAttr(null, firstNode);
                        }
                        this.doSelectionAction();
                        this.updateCheckedProp();
                        this.isLoaded = true;
                        this.isAnimate = false;
                        var eventArgs = { data: this.treeData };
                        this.trigger('dataBound', eventArgs);
                    }
                }, {
                    key: 'doSelectionAction',
                    value: function doSelectionAction() {
                        var sNodes = selectAll('.' + SELECTED$1, this.element);
                        var sUids = this.selectedNodes;
                        if (sUids.length > 0) {
                            this.setProperties({ selectedNodes: [] }, true);
                            for (var i = 0; i < sUids.length; i++) {
                                var sNode = _select('[data-uid="' + sUids[i] + '"]', this.element);
                                this.selectNode(sNode, null, true);
                                if (!this.allowMultiSelection) {
                                    break;
                                }
                            }
                        } else {
                            this.selectGivenNodes(sNodes);
                        }
                        removeClass(sNodes, SELECTED$1);
                    }
                }, {
                    key: 'selectGivenNodes',
                    value: function selectGivenNodes(sNodes) {
                        for (var i = 0; i < sNodes.length; i++) {
                            this.selectNode(sNodes[i], null, true);
                            if (!this.allowMultiSelection) {
                                break;
                            }
                        }
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(event) {
                        var target = event.originalEvent.target;
                        EventHandler.remove(this.element, 'contextmenu', this.preventContextMenu);
                        if (!target || this.dragStartAction) {
                            return;
                        } else {
                            var classList$$1 = target.classList;
                            var li = closest(target, '.' + LISTITEM);
                            if (!li) {
                                return;
                            } else {
                                this.removeHover();
                                this.setFocusElement(li);
                                if (this.showCheckBox && !li.classList.contains('e-disable')) {
                                    var checkWrapper = closest(target, '.' + CHECKBOXWRAP);
                                    if (!isNullOrUndefined(checkWrapper)) {
                                        var checkElement = _select('.' + CHECKBOXFRAME, checkWrapper);
                                        this.validateCheckNode(checkWrapper, checkElement.classList.contains(CHECK), li, event.originalEvent);
                                        this.triggerClickEvent(event.originalEvent, li);
                                        return;
                                    }
                                }
                                if (classList$$1.contains(EXPANDABLE)) {
                                    this.expandAction(li, target, event);
                                } else if (classList$$1.contains(COLLAPSIBLE)) {
                                    this.collapseNode(li, target, event);
                                } else {
                                    if (!classList$$1.contains(PARENTITEM) && !classList$$1.contains(LISTITEM)) {
                                        this.toggleSelect(li, event.originalEvent, false);
                                    }
                                }
                                this.triggerClickEvent(event.originalEvent, li);
                            }
                        }
                    }
                }, {
                    key: 'nodeCheckingEvent',
                    value: function nodeCheckingEvent(wrapper, isCheck, e) {
                        var currLi = closest(wrapper, '.' + LISTITEM);
                        this.checkActionNodes = [];
                        var ariaState = !isCheck ? 'true' : 'false';
                        if (!isNullOrUndefined(ariaState)) {
                            wrapper.setAttribute('aria-checked', ariaState);
                        }
                        var eventArgs = this.getCheckEvent(currLi, !isCheck ? 'uncheck' : 'check', e);
                        this.trigger('nodeChecking', eventArgs);
                        return eventArgs;
                    }
                }, {
                    key: 'nodeCheckedEvent',
                    value: function nodeCheckedEvent(wrapper, isCheck, e) {
                        var currLi = closest(wrapper, '.' + LISTITEM);
                        var eventArgs = this.getCheckEvent(wrapper, isCheck ? 'uncheck' : 'check', e);
                        eventArgs.data = eventArgs.data.splice(0, eventArgs.data.length - 1);
                        this.trigger('nodeChecked', eventArgs);
                    }
                }, {
                    key: 'triggerClickEvent',
                    value: function triggerClickEvent(e, li) {
                        var eventArgs = {
                            event: e,
                            node: li
                        };
                        this.trigger('nodeClicked', eventArgs);
                    }
                }, {
                    key: 'expandNode',
                    value: function expandNode(currLi, icon) {
                        var _this46 = this;

                        if (icon.classList.contains(LOAD)) {
                            this.hideSpinner(icon);
                        }
                        removeClass([icon], EXPANDABLE);
                        _addClass([icon], COLLAPSIBLE);
                        var start = 0;
                        var end = 0;
                        var proxy = this;
                        var ul = _select('.' + PARENTITEM, currLi);
                        var liEle = currLi;
                        this.setHeight(liEle, ul);
                        if (!this.isAnimate) {
                            this.aniObj.animate(ul, {
                                name: this.animation.expand.effect,
                                duration: this.animation.expand.duration,
                                timingFunction: this.animation.expand.easing,
                                begin: function begin(args) {
                                    liEle.style.overflow = 'hidden';
                                    start = liEle.offsetHeight;
                                    end = _select('.' + TEXTWRAP, currLi).offsetHeight;
                                },
                                progress: function progress(args) {
                                    args.element.style.display = 'block';
                                    proxy.animateHeight(args, start, end);
                                },
                                end: function end(args) {
                                    args.element.style.display = 'block';
                                    _this46.expandedNode(liEle, ul, icon);
                                }
                            });
                        } else {
                            this.expandedNode(liEle, ul, icon);
                        }
                    }
                }, {
                    key: 'expandedNode',
                    value: function expandedNode(currLi, ul, icon) {
                        ul.style.display = 'block';
                        currLi.style.display = 'block';
                        currLi.style.overflow = '';
                        currLi.style.height = '';
                        removeClass([icon], PROCESS);
                        currLi.setAttribute('aria-expanded', 'true');
                        removeClass([currLi], NODECOLLAPSED);
                        if (this.isLoaded && this.expandArgs) {
                            this.expandArgs = this.getExpandEvent(currLi, null);
                            this.trigger('nodeExpanded', this.expandArgs);
                        }
                    }
                }, {
                    key: 'collapseNode',
                    value: function collapseNode(currLi, icon, e) {
                        var _this47 = this;

                        if (icon.classList.contains(PROCESS)) {
                            return;
                        } else {
                            _addClass([icon], PROCESS);
                        }
                        var colArgs = void 0;
                        if (this.isLoaded) {
                            colArgs = this.getExpandEvent(currLi, e);
                            this.trigger('nodeCollapsing', colArgs);
                            if (colArgs.cancel) {
                                removeClass([icon], PROCESS);
                                return;
                            }
                        }
                        removeClass([icon], COLLAPSIBLE);
                        _addClass([icon], EXPANDABLE);
                        var start = 0;
                        var end = 0;
                        var proxy = this;
                        var ul = _select('.' + PARENTITEM, currLi);
                        var liEle = currLi;
                        _addClass([currLi], NODECOLLAPSED);
                        this.aniObj.animate(ul, {
                            name: this.animation.collapse.effect,
                            duration: this.animation.collapse.duration,
                            timingFunction: this.animation.collapse.easing,
                            begin: function begin(args) {
                                liEle.style.overflow = 'hidden';
                                start = _select('.' + TEXTWRAP, currLi).offsetHeight;
                                end = liEle.offsetHeight;
                            },
                            progress: function progress(args) {
                                proxy.animateHeight(args, start, end);
                            },
                            end: function end(args) {
                                liEle.style.overflow = '';
                                args.element.style.display = 'none';
                                liEle.style.height = '';
                                removeClass([icon], PROCESS);
                                currLi.setAttribute('aria-expanded', 'false');
                                if (_this47.isLoaded) {
                                    _this47.trigger('nodeCollapsed', colArgs);
                                }
                            }
                        });
                    }
                }, {
                    key: 'setHeight',
                    value: function setHeight(currLi, ul) {
                        ul.style.display = 'block';
                        ul.style.visibility = 'hidden';
                        currLi.style.height = currLi.offsetHeight + 'px';
                        ul.style.display = 'none';
                        ul.style.visibility = '';
                    }
                }, {
                    key: 'animateHeight',
                    value: function animateHeight(args, start, end) {
                        var remaining = (args.duration - args.timeStamp) / args.duration;
                        var currentHeight = (end - start) * remaining + start;
                        args.element.parentElement.style.height = currentHeight + 'px';
                    }
                }, {
                    key: 'renderChildNodes',
                    value: function renderChildNodes(parentLi, expandChild) {
                        var _this48 = this;

                        var eicon = _select('div.' + ICON, parentLi);
                        if (isNullOrUndefined(eicon)) {
                            return;
                        }
                        this.showSpinner(eicon);
                        var childItems = void 0;
                        if (this.fields.dataSource instanceof DataManager) {
                            var level = this.parents(parentLi, '.' + PARENTITEM).length;
                            var mapper = this.getChildFields(this.fields, level, 1);
                            if (isNullOrUndefined(mapper) || isNullOrUndefined(mapper.dataSource)) {
                                detach(eicon);
                                parentLi.removeAttribute('aria-expanded');
                                return;
                            }
                            this.treeList.push('false');
                            mapper.dataSource.executeQuery(this.getQuery(mapper, parentLi.getAttribute('data-uid'))).then(function (e) {
                                _this48.treeList.pop();
                                childItems = e.result;
                                _this48.currentLoadData = childItems;
                                if (isNullOrUndefined(childItems) || childItems.length === 0) {
                                    detach(eicon);
                                    parentLi.removeAttribute('aria-expanded');
                                } else {
                                    var prop = _this48.getActualProperties(mapper);
                                    _this48.listBaseOption.fields = prop;
                                    _this48.listBaseOption.fields.url = prop.navigateUrl;
                                    var id = parentLi.getAttribute('data-uid');
                                    var nodeData = _this48.getNodeObject(id);
                                    setValue('child', childItems, nodeData);
                                    _this48.listBaseOption.ariaAttributes.level = parseFloat(parentLi.getAttribute('aria-level')) + 1;
                                    parentLi.appendChild(ListBase.createList(childItems, _this48.listBaseOption));
                                    _this48.expandNode(parentLi, eicon);
                                    _this48.ensureCheckNode(parentLi);
                                    _this48.finalizeNode(parentLi);
                                    _this48.renderSubChild(parentLi, expandChild);
                                }
                                if (_this48.treeList.length === 0 && !_this48.isLoaded) {
                                    _this48.finalize();
                                }
                            });
                        } else {
                            childItems = this.getChildNodes(this.treeData, parentLi.getAttribute('data-uid'));
                            this.currentLoadData = childItems;
                            if (isNullOrUndefined(childItems) || childItems.length === 0) {
                                detach(eicon);
                                parentLi.removeAttribute('aria-expanded');
                                return;
                            } else {
                                this.listBaseOption.ariaAttributes.level = parseFloat(parentLi.getAttribute('aria-level')) + 1;
                                parentLi.appendChild(ListBase.createList(this.getSortedData(childItems), this.listBaseOption));
                                this.expandNode(parentLi, eicon);
                                this.ensureCheckNode(parentLi);
                                this.finalizeNode(parentLi);
                                this.renderSubChild(parentLi, expandChild);
                            }
                        }
                    }
                }, {
                    key: 'ensureCheckNode',
                    value: function ensureCheckNode(element) {
                        if (this.showCheckBox) {
                            this.ensureChildCheckState(element);
                            this.ensureParentCheckState(element);
                        }
                        this.currentLoadData = null;
                    }
                }, {
                    key: 'getFields',
                    value: function getFields(mapper, nodeLevel, dataLevel) {
                        if (nodeLevel === dataLevel) {
                            return mapper;
                        } else {
                            return this.getFields(this.getChildMapper(mapper), nodeLevel, dataLevel + 1);
                        }
                    }
                }, {
                    key: 'getChildFields',
                    value: function getChildFields(mapper, nodeLevel, dataLevel) {
                        if (nodeLevel === dataLevel) {
                            return this.getChildMapper(mapper);
                        } else {
                            return this.getChildFields(this.getChildMapper(mapper), nodeLevel, dataLevel + 1);
                        }
                    }
                }, {
                    key: 'getChildMapper',
                    value: function getChildMapper(mapper) {
                        return typeof mapper.child === 'string' || isNullOrUndefined(mapper.child) ? mapper : mapper.child;
                    }
                }, {
                    key: 'getChildNodes',
                    value: function getChildNodes(obj, parentId) {
                        var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                        var childNodes = void 0;
                        if (isNullOrUndefined(obj)) {
                            return childNodes;
                        } else if (this.dataType === 1) {
                            return this.getChildGroup(this.groupedData, parentId, isRoot);
                        } else {
                            if (typeof this.fields.child === 'string') {
                                for (var i = 0, objlen = obj.length; i < objlen; i++) {
                                    var dataId = getValue(this.fields.id, obj[i]);
                                    if (dataId && dataId.toString() === parentId) {
                                        return getValue(this.fields.child, obj[i]);
                                    } else if (!isNullOrUndefined(getValue(this.fields.child, obj[i]))) {
                                        childNodes = this.getChildNodes(getValue(this.fields.child, obj[i]), parentId);
                                        if (childNodes !== undefined) {
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        return childNodes;
                    }
                }, {
                    key: 'getChildGroup',
                    value: function getChildGroup(data, parentId, isRoot) {
                        var childNodes = void 0;
                        if (isNullOrUndefined(data)) {
                            return childNodes;
                        }
                        for (var i = 0, objlen = data.length; i < objlen; i++) {
                            if (!isNullOrUndefined(data[i][0]) && !isNullOrUndefined(getValue(this.fields.parentID, data[i][0]))) {
                                if (getValue(this.fields.parentID, data[i][0]).toString() === parentId) {
                                    return data[i];
                                }
                            } else if (isRoot) {
                                return data[i];
                            } else {
                                return [];
                            }
                        }
                        return childNodes;
                    }
                }, {
                    key: 'renderSubChild',
                    value: function renderSubChild(element, expandChild) {
                        if (expandChild) {
                            var cIcons = selectAll('.' + EXPANDABLE, element);
                            for (var i = 0, len = cIcons.length; i < len; i++) {
                                var icon = cIcons[i];
                                var curLi = closest(icon, '.' + LISTITEM);
                                this.expandArgs = this.getExpandEvent(curLi, null);
                                this.trigger('nodeExpanding', this.expandArgs);
                                this.renderChildNodes(curLi, expandChild);
                            }
                        }
                    }
                }, {
                    key: 'toggleSelect',
                    value: function toggleSelect(li, e, multiSelect) {
                        if (!li.classList.contains('e-disable')) {
                            if (this.allowMultiSelection && (e && e.ctrlKey || multiSelect) && this.isActive(li)) {
                                this.unselectNode(li, e);
                            } else {
                                this.selectNode(li, e, multiSelect);
                            }
                        }
                    }
                }, {
                    key: 'isActive',
                    value: function isActive(li) {
                        return li.classList.contains(ACTIVE) ? true : false;
                    }
                }, {
                    key: 'selectNode',
                    value: function selectNode(li, e, multiSelect) {
                        if (isNullOrUndefined(li) || !this.allowMultiSelection && this.isActive(li) && !isNullOrUndefined(e)) {
                            this.setFocusElement(li);
                            return;
                        }
                        var eventArgs = void 0;
                        if (this.isLoaded) {
                            eventArgs = this.getSelectEvent(li, 'select', e);
                            this.trigger('nodeSelecting', eventArgs);
                            if (eventArgs.cancel) {
                                return;
                            }
                        }
                        if (!this.allowMultiSelection || !multiSelect && (!e || e && !e.ctrlKey)) {
                            this.removeSelectAll();
                        }
                        if (this.allowMultiSelection && e && e.shiftKey) {
                            if (!this.startNode) {
                                this.startNode = li;
                            }
                            var startIndex = this.liList.indexOf(this.startNode);
                            var endIndex = this.liList.indexOf(li);
                            if (startIndex > endIndex) {
                                var temp = startIndex;
                                startIndex = endIndex;
                                endIndex = temp;
                            }
                            for (var i = startIndex; i <= endIndex; i++) {
                                var currNode = this.liList[i];
                                if (isVisible(currNode)) {
                                    this.addSelect(currNode);
                                }
                            }
                        } else {
                            this.startNode = li;
                            this.addSelect(li);
                        }
                        this.setFocusElement(li);
                        if (this.isLoaded) {
                            this.trigger('nodeSelected', eventArgs);
                        }
                    }
                }, {
                    key: 'unselectNode',
                    value: function unselectNode(li, e) {
                        var eventArgs = void 0;
                        if (this.isLoaded) {
                            eventArgs = this.getSelectEvent(li, 'un-select', e);
                            this.trigger('nodeSelecting', eventArgs);
                            if (eventArgs.cancel) {
                                return;
                            }
                        }
                        this.removeSelect(li);
                        this.setFocusElement(li);
                        if (this.isLoaded) {
                            this.trigger('nodeSelected', eventArgs);
                        }
                    }
                }, {
                    key: 'setFocusElement',
                    value: function setFocusElement(li) {
                        if (!isNullOrUndefined(li)) {
                            var focusedNode = this.getFocusedNode();
                            if (focusedNode) {
                                removeClass([focusedNode], FOCUS);
                            }
                            _addClass([li], FOCUS);
                            this.updateIdAttr(focusedNode, li);
                        }
                    }
                }, {
                    key: 'addSelect',
                    value: function addSelect(liEle) {
                        liEle.setAttribute('aria-selected', 'true');
                        _addClass([liEle], ACTIVE);
                        var id = liEle.getAttribute('data-uid');
                        if (!isNullOrUndefined(id) && this.selectedNodes.indexOf(id) === -1) {
                            this.selectedNodes.push(id);
                        }
                    }
                }, {
                    key: 'removeSelect',
                    value: function removeSelect(liEle) {
                        if (this.allowMultiSelection) {
                            liEle.setAttribute('aria-selected', 'false');
                        } else {
                            liEle.removeAttribute('aria-selected');
                        }
                        removeClass([liEle], ACTIVE);
                        var index = this.selectedNodes.indexOf(liEle.getAttribute('data-uid'));
                        if (index > -1) {
                            this.selectedNodes.splice(index, 1);
                        }
                    }
                }, {
                    key: 'removeSelectAll',
                    value: function removeSelectAll() {
                        var selectedLI = this.element.querySelectorAll('.' + ACTIVE);
                        var _iteratorNormalCompletion16 = true;
                        var _didIteratorError16 = false;
                        var _iteratorError16 = undefined;

                        try {
                            for (var _iterator16 = selectedLI[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                                var ele = _step16.value;

                                if (this.allowMultiSelection) {
                                    ele.setAttribute('aria-selected', 'false');
                                } else {
                                    ele.removeAttribute('aria-selected');
                                }
                            }
                        } catch (err) {
                            _didIteratorError16 = true;
                            _iteratorError16 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion16 && _iterator16.return) {
                                    _iterator16.return();
                                }
                            } finally {
                                if (_didIteratorError16) {
                                    throw _iteratorError16;
                                }
                            }
                        }

                        removeClass(selectedLI, ACTIVE);
                        this.setProperties({ selectedNodes: [] }, true);
                    }
                }, {
                    key: 'getSelectEvent',
                    value: function getSelectEvent(currLi, action, e) {
                        var nodeData = this.getNodeData(currLi);
                        return { action: action, cancel: false, isInteracted: isNullOrUndefined(e) ? false : true, node: currLi, nodeData: nodeData };
                    }
                }, {
                    key: 'setExpandOnType',
                    value: function setExpandOnType() {
                        this.expandOnType = this.expandOn === 'Auto' ? Browser.isDevice ? 'Click' : 'DblClick' : this.expandOn;
                    }
                }, {
                    key: 'expandHandler',
                    value: function expandHandler(e) {
                        var target = e.originalEvent.target;
                        if (!target || target.classList.contains(INPUT) || target.classList.contains(ROOT) || target.classList.contains(PARENTITEM) || target.classList.contains(LISTITEM) || target.classList.contains(ICON) || this.showCheckBox && closest(target, '.' + CHECKBOXWRAP)) {
                            return;
                        } else {
                            this.expandCollapseAction(closest(target, '.' + LISTITEM), e);
                        }
                    }
                }, {
                    key: 'expandCollapseAction',
                    value: function expandCollapseAction(currLi, e) {
                        var icon = _select('div.' + ICON, currLi);
                        if (!icon || icon.classList.contains(PROCESS)) {
                            return;
                        } else {
                            var classList$$1 = icon.classList;
                            if (classList$$1.contains(EXPANDABLE)) {
                                this.expandAction(currLi, icon, e);
                            } else {
                                this.collapseNode(currLi, icon, e);
                            }
                        }
                    }
                }, {
                    key: 'expandAction',
                    value: function expandAction(currLi, icon, e, expandChild) {
                        if (icon.classList.contains(PROCESS)) {
                            return;
                        } else {
                            _addClass([icon], PROCESS);
                        }
                        if (this.isLoaded) {
                            this.expandArgs = this.getExpandEvent(currLi, e);
                            this.trigger('nodeExpanding', this.expandArgs);
                            if (this.expandArgs.cancel) {
                                removeClass([icon], PROCESS);
                                return;
                            }
                        }
                        var ul = _select('.' + PARENTITEM, currLi);
                        if (ul && ul.nodeName === 'UL') {
                            this.expandNode(currLi, icon);
                        } else {
                            this.renderChildNodes(currLi, expandChild);
                        }
                    }
                }, {
                    key: 'keyActionHandler',
                    value: function keyActionHandler(e) {
                        var target = e.target;
                        var focusedNode = this.getFocusedNode();
                        if (target && target.classList.contains(INPUT)) {
                            var inpEle = target;
                            if (e.action === 'enter') {
                                inpEle.blur();
                                this.element.focus();
                                _addClass([focusedNode], HOVER);
                            } else if (e.action === 'escape') {
                                inpEle.value = this.oldText;
                                inpEle.blur();
                                this.element.focus();
                                _addClass([focusedNode], HOVER);
                            }
                            return;
                        }
                        e.preventDefault();
                        var eventArgs = {
                            cancel: false,
                            event: e,
                            node: focusedNode
                        };
                        this.trigger('keyPress', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        switch (e.action) {
                            case 'space':
                                if (this.showCheckBox) {
                                    this.checkNode(e);
                                }
                                break;
                            case 'moveRight':
                                this.openNode(this.enableRtl ? false : true, e);
                                break;
                            case 'moveLeft':
                                this.openNode(this.enableRtl ? true : false, e);
                                break;
                            case 'shiftDown':
                                this.shiftKeySelect(true, e);
                                break;
                            case 'moveDown':
                            case 'ctrlDown':
                            case 'csDown':
                                this.navigateNode(true);
                                break;
                            case 'shiftUp':
                                this.shiftKeySelect(false, e);
                                break;
                            case 'moveUp':
                            case 'ctrlUp':
                            case 'csUp':
                                this.navigateNode(false);
                                break;
                            case 'home':
                            case 'shiftHome':
                            case 'ctrlHome':
                            case 'csHome':
                                this.navigateRootNode(true);
                                break;
                            case 'end':
                            case 'shiftEnd':
                            case 'ctrlEnd':
                            case 'csEnd':
                                this.navigateRootNode(false);
                                break;
                            case 'enter':
                            case 'ctrlEnter':
                            case 'shiftEnter':
                            case 'csEnter':
                                this.toggleSelect(focusedNode, e);
                                break;
                            case 'f2':
                                if (this.allowEditing) {
                                    this.createTextbox(focusedNode, e);
                                }
                                break;
                            case 'ctrlA':
                                if (this.allowMultiSelection) {
                                    var sNodes = selectAll('.' + LISTITEM + ':not(.' + ACTIVE + ')', this.element);
                                    this.selectGivenNodes(sNodes);
                                }
                                break;
                        }
                    }
                }, {
                    key: 'navigateToFocus',
                    value: function navigateToFocus(isUp) {
                        var focusNode = this.getFocusedNode().querySelector('.' + TEXTWRAP);
                        var pos = focusNode.getBoundingClientRect();
                        var parent = this.getScrollParent(this.element);
                        if (!isNullOrUndefined(parent)) {
                            var parentPos = parent.getBoundingClientRect();
                            if (pos.bottom > parentPos.bottom) {
                                parent.scrollTop += pos.bottom - parentPos.bottom;
                            } else if (pos.top < parentPos.top) {
                                parent.scrollTop -= parentPos.top - pos.top;
                            }
                        }
                        var isVisible$$1 = this.isVisibleInViewport(focusNode);
                        if (!isVisible$$1) {
                            focusNode.scrollIntoView(isUp);
                        }
                    }
                }, {
                    key: 'isVisibleInViewport',
                    value: function isVisibleInViewport(txtWrap) {
                        var pos = txtWrap.getBoundingClientRect();
                        return pos.top >= 0 && pos.left >= 0 && pos.bottom <= (window.innerHeight || document.documentElement.clientHeight) && pos.right <= (window.innerWidth || document.documentElement.clientWidth);
                    }
                }, {
                    key: 'getScrollParent',
                    value: function getScrollParent(node) {
                        if (isNullOrUndefined(node)) {
                            return null;
                        }
                        return node.scrollHeight > node.clientHeight ? node : this.getScrollParent(node.parentElement);
                    }
                }, {
                    key: 'shiftKeySelect',
                    value: function shiftKeySelect(isTowards, e) {
                        if (this.allowMultiSelection) {
                            var focusedNode = this.getFocusedNode();
                            var nextNode = isTowards ? this.getNextNode(focusedNode) : this.getPrevNode(focusedNode);
                            this.removeHover();
                            this.setFocusElement(nextNode);
                            this.toggleSelect(nextNode, e, false);
                            this.navigateToFocus(!isTowards);
                        } else {
                            this.navigateNode(isTowards);
                        }
                    }
                }, {
                    key: 'checkNode',
                    value: function checkNode(e) {
                        var focusedNode = this.getFocusedNode();
                        var checkWrap = _select('.' + CHECKBOXWRAP, focusedNode);
                        var isChecked = _select(' .' + CHECKBOXFRAME, checkWrap).classList.contains(CHECK);
                        this.validateCheckNode(checkWrap, isChecked, focusedNode, e);
                    }
                }, {
                    key: 'validateCheckNode',
                    value: function validateCheckNode(checkWrap, isCheck, li, e) {
                        var eventArgs = this.nodeCheckingEvent(checkWrap, isCheck, e);
                        if (eventArgs.cancel) {
                            return;
                        }
                        this.changeState(checkWrap, isCheck ? 'uncheck' : 'check', e, true);
                        this.ensureChildCheckState(li);
                        this.ensureParentCheckState(closest(closest(li, '.' + PARENTITEM), '.' + LISTITEM));
                        this.nodeCheckedEvent(checkWrap, isCheck, e);
                    }
                }, {
                    key: 'openNode',
                    value: function openNode(toBeOpened, e) {
                        var focusedNode = this.getFocusedNode();
                        var icon = _select('div.' + ICON, focusedNode);
                        if (toBeOpened) {
                            if (!icon) {
                                return;
                            } else if (icon.classList.contains(EXPANDABLE)) {
                                this.expandAction(focusedNode, icon, e);
                            } else {
                                this.focusNextNode(focusedNode, true);
                            }
                        } else {
                            if (icon && icon.classList.contains(COLLAPSIBLE)) {
                                this.collapseNode(focusedNode, icon, e);
                            } else {
                                var parentLi = closest(closest(focusedNode, '.' + PARENTITEM), '.' + LISTITEM);
                                if (!parentLi) {
                                    return;
                                } else {
                                    this.setFocus(focusedNode, parentLi);
                                    this.navigateToFocus(true);
                                }
                            }
                        }
                    }
                }, {
                    key: 'navigateNode',
                    value: function navigateNode(isTowards) {
                        var focusedNode = this.getFocusedNode();
                        this.focusNextNode(focusedNode, isTowards);
                    }
                }, {
                    key: 'navigateRootNode',
                    value: function navigateRootNode(isBackwards) {
                        var focusedNode = this.getFocusedNode();
                        var rootNode = isBackwards ? this.getRootNode() : this.getEndNode();
                        this.setFocus(focusedNode, rootNode);
                        this.navigateToFocus(isBackwards);
                    }
                }, {
                    key: 'getFocusedNode',
                    value: function getFocusedNode() {
                        var fNode = _select('.' + LISTITEM + '.' + FOCUS, this.element);
                        return isNullOrUndefined(fNode) ? _select('.' + LISTITEM, this.element) : fNode;
                    }
                }, {
                    key: 'focusNextNode',
                    value: function focusNextNode(li, isTowards) {
                        var nextNode = isTowards ? this.getNextNode(li) : this.getPrevNode(li);
                        this.setFocus(li, nextNode);
                        this.navigateToFocus(!isTowards);
                        if (nextNode.classList.contains('e-disable')) {
                            this.focusNextNode(nextNode, isTowards);
                        }
                    }
                }, {
                    key: 'getNextNode',
                    value: function getNextNode(li) {
                        var index = this.liList.indexOf(li);
                        var nextNode = void 0;
                        var i = void 0;
                        do {
                            index++;
                            if (index === this.liList.length && li.classList.contains('e-disable')) {
                                for (i = index - 1; i > 0; i--) {
                                    if (!this.liList[i].classList.contains('e-disable')) {
                                        index = i;
                                        break;
                                    }
                                }
                            }
                            nextNode = this.liList[index];
                            if (isNullOrUndefined(nextNode)) {
                                return li;
                            }
                        } while (!isVisible(nextNode));
                        return nextNode;
                    }
                }, {
                    key: 'getPrevNode',
                    value: function getPrevNode(li) {
                        var index = this.liList.indexOf(li);
                        var prevNode = void 0;
                        var i = void 0;
                        do {
                            index--;
                            if (index < 0 && li.classList.contains('e-disable')) {
                                for (i = 1; i < this.liList.length; i++) {
                                    if (!this.liList[i].classList.contains('e-disable')) {
                                        index = i;
                                        break;
                                    }
                                }
                            }
                            prevNode = this.liList[index];
                            if (isNullOrUndefined(prevNode)) {
                                return li;
                            }
                        } while (!isVisible(prevNode));
                        return prevNode;
                    }
                }, {
                    key: 'getRootNode',
                    value: function getRootNode() {
                        var index = 0;
                        var rootNode = void 0;
                        do {
                            rootNode = this.liList[index];
                            index++;
                        } while (!isVisible(rootNode));
                        return rootNode;
                    }
                }, {
                    key: 'getEndNode',
                    value: function getEndNode() {
                        var index = this.liList.length - 1;
                        var endNode = void 0;
                        do {
                            endNode = this.liList[index];
                            index--;
                        } while (!isVisible(endNode));
                        return endNode;
                    }
                }, {
                    key: 'setFocus',
                    value: function setFocus(preNode, nextNode) {
                        removeClass([preNode], [HOVER, FOCUS]);
                        _addClass([nextNode], [HOVER, FOCUS]);
                        this.updateIdAttr(preNode, nextNode);
                    }
                }, {
                    key: 'updateIdAttr',
                    value: function updateIdAttr(preNode, nextNode) {
                        this.element.removeAttribute('aria-activedescendant');
                        if (preNode) {
                            preNode.removeAttribute('id');
                        }
                        nextNode.setAttribute('id', this.element.id + '_active');
                        this.element.setAttribute('aria-activedescendant', this.element.id + '_active');
                    }
                }, {
                    key: 'focusIn',
                    value: function focusIn() {
                        if (!this.mouseDownStatus) {
                            _addClass([this.getFocusedNode()], HOVER);
                        }
                        this.mouseDownStatus = false;
                    }
                }, {
                    key: 'focusOut',
                    value: function focusOut() {
                        removeClass([this.getFocusedNode()], HOVER);
                    }
                }, {
                    key: 'onMouseOver',
                    value: function onMouseOver(e) {
                        var target = e.target;
                        var classList$$1 = target.classList;
                        var currentLi = closest(target, '.' + LISTITEM);
                        if (!currentLi || classList$$1.contains(PARENTITEM) || classList$$1.contains(LISTITEM)) {
                            this.removeHover();
                            return;
                        } else {
                            if (currentLi && !currentLi.classList.contains('e-disable')) {
                                this.setHover(currentLi);
                            }
                        }
                    }
                }, {
                    key: 'setHover',
                    value: function setHover(li) {
                        if (!li.classList.contains(HOVER)) {
                            this.removeHover();
                            _addClass([li], HOVER);
                        }
                    }
                }, {
                    key: 'onMouseLeave',
                    value: function onMouseLeave(e) {
                        this.removeHover();
                    }
                }, {
                    key: 'removeHover',
                    value: function removeHover() {
                        var hoveredNode = selectAll('.' + HOVER, this.element);
                        if (hoveredNode && hoveredNode.length) {
                            removeClass(hoveredNode, HOVER);
                        }
                    }
                }, {
                    key: 'getNodeData',
                    value: function getNodeData(currLi, fromDS) {
                        if (!isNullOrUndefined(currLi) && currLi.classList.contains(LISTITEM)) {
                            var id = currLi.getAttribute('data-uid');
                            var text = this.getText(currLi, fromDS);
                            var pNode = closest(currLi.parentNode, '.' + LISTITEM);
                            var pid = pNode ? pNode.getAttribute('data-uid') : null;
                            var selected = currLi.classList.contains(ACTIVE);
                            var expanded = currLi.getAttribute('aria-expanded') === 'true' ? true : false;
                            var checked = null;
                            if (this.showCheckBox) {
                                checked = _select('.' + CHECKBOXWRAP, currLi).getAttribute('aria-checked');
                            }
                            return { id: id, text: text, parentID: pid, selected: selected, expanded: expanded, isChecked: checked };
                        }
                        return { id: '', text: '', parentID: '', selected: '', expanded: '', isChecked: '' };
                    }
                }, {
                    key: 'getText',
                    value: function getText(currLi, fromDS) {
                        if (fromDS) {
                            var nodeData = this.getNodeObject(currLi.getAttribute('data-uid'));
                            var level = parseFloat(currLi.getAttribute('aria-level'));
                            var nodeFields = this.getFields(this.fields, level, 1);
                            return getValue(nodeFields.text, nodeData);
                        }
                        return _select('.' + LISTTEXT, currLi).textContent;
                    }
                }, {
                    key: 'getExpandEvent',
                    value: function getExpandEvent(currLi, e) {
                        var nodeData = this.getNodeData(currLi);
                        return { cancel: false, isInteracted: isNullOrUndefined(e) ? false : true, node: currLi, nodeData: nodeData, event: e };
                    }
                }, {
                    key: 'reRenderNodes',
                    value: function reRenderNodes() {
                        this.element.innerHTML = '';
                        this.setTouchClass();
                        this.setProperties({ selectedNodes: [], checkedNodes: [] }, true);
                        this.isLoaded = false;
                        this.setDataBinding();
                    }
                }, {
                    key: 'setCssClass',
                    value: function setCssClass(oldClass, newClass) {
                        if (!isNullOrUndefined(oldClass) && oldClass !== '') {
                            removeClass([this.element], oldClass.split(' '));
                        }
                        if (!isNullOrUndefined(newClass) && newClass !== '') {
                            _addClass([this.element], newClass.split(' '));
                        }
                    }
                }, {
                    key: 'editingHandler',
                    value: function editingHandler(e) {
                        var target = e.target;
                        if (!target || target.classList.contains(ROOT) || target.classList.contains(PARENTITEM) || target.classList.contains(LISTITEM) || target.classList.contains(ICON) || target.classList.contains(INPUT) || target.classList.contains(INPUTGROUP)) {
                            return;
                        } else {
                            var liEle = closest(target, '.' + LISTITEM);
                            this.createTextbox(liEle, e);
                        }
                    }
                }, {
                    key: 'createTextbox',
                    value: function createTextbox(liEle, e) {
                        var oldInpEle = _select('.' + TREEINPUT, this.element);
                        if (oldInpEle) {
                            oldInpEle.blur();
                        }
                        var textEle = _select('.' + LISTTEXT, liEle);
                        this.updateOldText(liEle);
                        var innerEle = createElement('input', { className: TREEINPUT, attrs: { value: this.oldText } });
                        var eventArgs = this.getEditEvent(liEle, null, innerEle.outerHTML);
                        this.trigger('nodeEditing', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        var inpWidth = textEle.offsetWidth + 5;
                        var style = 'width:' + inpWidth + 'px';
                        _addClass([liEle], EDITING);
                        textEle.innerHTML = eventArgs.innerHtml;
                        var inpEle = _select('.' + TREEINPUT, textEle);
                        this.inputObj = Input.createInput({
                            element: inpEle,
                            properties: {
                                enableRtl: this.enableRtl
                            }
                        });
                        this.inputObj.container.setAttribute('style', style);
                        inpEle.focus();
                        var inputEle = inpEle;
                        inputEle.setSelectionRange(0, inputEle.value.length);
                        this.wireInputEvents(inpEle);
                    }
                }, {
                    key: 'updateOldText',
                    value: function updateOldText(liEle) {
                        var id = liEle.getAttribute('data-uid');
                        this.editData = this.getNodeObject(id);
                        var level = parseFloat(liEle.getAttribute('aria-level'));
                        this.editFields = this.getFields(this.fields, level, 1);
                        this.oldText = getValue(this.editFields.text, this.editData);
                    }
                }, {
                    key: 'inputFocusOut',
                    value: function inputFocusOut(e) {
                        if (!_select('.' + TREEINPUT, this.element)) {
                            return;
                        }
                        var target = e.target;
                        var newText = target.value;
                        var txtEle = closest(target, '.' + LISTTEXT);
                        var liEle = closest(target, '.' + LISTITEM);
                        detach(this.inputObj.container);
                        this.appendNewText(liEle, txtEle, newText, true);
                    }
                }, {
                    key: 'appendNewText',
                    value: function appendNewText(liEle, txtEle, newText, isInput) {
                        var newData = setValue(this.editFields.text, newText, this.editData);
                        if (!isNullOrUndefined(this.nodeTemplateFn)) {
                            txtEle.innerHTML = '';
                            append(this.nodeTemplateFn(newData), txtEle);
                        } else {
                            txtEle.innerHTML = newText;
                        }
                        if (isInput) {
                            removeClass([liEle], EDITING);
                            txtEle.focus();
                        }
                        this.trigger('nodeEdited', this.getEditEvent(liEle, newText, null));
                    }
                }, {
                    key: 'getElement',
                    value: function getElement(ele) {
                        if (isNullOrUndefined(ele)) {
                            return null;
                        } else if (typeof ele === 'string') {
                            return this.element.querySelector('[data-uid="' + ele + '"]');
                        } else if ((typeof ele === 'undefined' ? 'undefined' : _typeof(ele)) === 'object') {
                            return ele;
                        } else {
                            return null;
                        }
                    }
                }, {
                    key: 'getEditEvent',
                    value: function getEditEvent(liEle, newText, inpEle) {
                        var data = this.getNodeData(liEle);
                        return { cancel: false, newText: newText, node: liEle, nodeData: data, oldText: this.oldText, innerHtml: inpEle };
                    }
                }, {
                    key: 'getNodeObject',
                    value: function getNodeObject(id) {
                        var childNodes = void 0;
                        if (isNullOrUndefined(id)) {
                            return childNodes;
                        } else if (this.dataType === 1) {
                            for (var i = 0, objlen = this.treeData.length; i < objlen; i++) {
                                var dataId = getValue(this.fields.id, this.treeData[i]);
                                if (!isNullOrUndefined(this.treeData[i]) && !isNullOrUndefined(dataId) && dataId.toString() === id) {
                                    return this.treeData[i];
                                }
                            }
                        } else {
                            return this.getChildNodeObject(this.treeData, this.fields, id);
                        }
                        return childNodes;
                    }
                }, {
                    key: 'getChildNodeObject',
                    value: function getChildNodeObject(obj, mapper, id) {
                        var newList = void 0;
                        if (isNullOrUndefined(obj)) {
                            return newList;
                        }
                        for (var i = 0, objlen = obj.length; i < objlen; i++) {
                            var dataId = getValue(mapper.id, obj[i]);
                            if (obj[i] && dataId && dataId.toString() === id) {
                                return obj[i];
                            } else if (typeof mapper.child === 'string' && !isNullOrUndefined(getValue(mapper.child, obj[i]))) {
                                var childData = getValue(mapper.child, obj[i]);
                                newList = this.getChildNodeObject(childData, this.getChildMapper(mapper), id);
                                if (newList !== undefined) {
                                    break;
                                }
                            } else if (this.fields.dataSource instanceof DataManager && !isNullOrUndefined(getValue('child', obj[i]))) {
                                var child = 'child';
                                newList = this.getChildNodeObject(getValue(child, obj[i]), this.getChildMapper(mapper), id);
                                if (newList !== undefined) {
                                    break;
                                }
                            }
                        }
                        return newList;
                    }
                }, {
                    key: 'setDragAndDrop',
                    value: function setDragAndDrop(toBind) {
                        if (toBind) {
                            this.initializeDrag();
                        } else {
                            this.destroyDrag();
                        }
                    }
                }, {
                    key: 'initializeDrag',
                    value: function initializeDrag() {
                        var _this49 = this;

                        var virtualEle = void 0;
                        this.dragObj = new Draggable(this.element, {
                            enableTailMode: true,
                            dragTarget: '.' + TEXTWRAP,
                            helper: function helper(e) {
                                _this49.dragTarget = e.sender.target;
                                var dragRoot = closest(_this49.dragTarget, '.' + ROOT);
                                var dragWrap = closest(_this49.dragTarget, '.' + TEXTWRAP);
                                _this49.dragLi = closest(_this49.dragTarget, '.' + LISTITEM);
                                if (_this49.fullRowSelect && !dragWrap && _this49.dragTarget.classList.contains(FULLROW)) {
                                    dragWrap = _this49.dragTarget.nextElementSibling;
                                }
                                if (!_this49.dragTarget || !e.element.isSameNode(dragRoot) || !dragWrap || _this49.dragTarget.classList.contains(ROOT) || _this49.dragTarget.classList.contains(PARENTITEM) || _this49.dragTarget.classList.contains(LISTITEM)) {
                                    return false;
                                }
                                var cloneEle = dragWrap.cloneNode(true);
                                if (isNullOrUndefined(_select('div.' + ICON, cloneEle))) {
                                    var icon = createElement('div', { className: ICON + ' ' + EXPANDABLE });
                                    cloneEle.insertBefore(icon, cloneEle.children[0]);
                                }
                                var cssClass = DRAGITEM + ' ' + ROOT + ' ' + _this49.cssClass + ' ' + (_this49.enableRtl ? RTL$1 : '');
                                virtualEle = createElement('div', { className: cssClass });
                                virtualEle.appendChild(cloneEle);
                                var nLen = _this49.selectedNodes.length;
                                if (nLen > 1 && _this49.allowMultiSelection && _this49.dragLi.classList.contains(ACTIVE)) {
                                    var cNode = createElement('span', { className: DROPCOUNT, innerHTML: '' + nLen });
                                    virtualEle.appendChild(cNode);
                                }
                                document.body.appendChild(virtualEle);
                                document.body.style.cursor = '';
                                _this49.dragData = _this49.getNodeData(_this49.dragLi);
                                return virtualEle;
                            },
                            dragStart: function dragStart(e) {
                                _addClass([_this49.element], DRAGGING);
                                var eventArgs = _this49.getDragEvent(e.event, _this49, null, e.target);
                                _this49.trigger('nodeDragStart', eventArgs);
                                if (eventArgs.cancel) {
                                    detach(virtualEle);
                                    removeClass([_this49.element], DRAGGING);
                                }
                                _this49.dragStartAction = true;
                            },
                            drag: function drag(e) {
                                _this49.dragObj.setProperties({ cursorAt: { top: !isNullOrUndefined(e.event.targetTouches) || Browser.isDevice ? 60 : -20 } });
                                _this49.dragAction(e, virtualEle);
                            },
                            dragStop: function dragStop(e) {
                                removeClass([_this49.element], DRAGGING);
                                _this49.removeVirtualEle();
                                var dropTarget = e.target;
                                var dropRoot = closest(dropTarget, '.' + DROPPABLE);
                                if (!dropTarget || !dropRoot || dropTarget.classList.contains(ROOT)) {
                                    detach(e.helper);
                                    document.body.style.cursor = '';
                                }
                                var eventArgs = _this49.getDragEvent(e.event, _this49, dropTarget, dropTarget);
                                _this49.trigger('nodeDragStop', eventArgs);
                                if (eventArgs.cancel) {
                                    if (e.helper.parentNode) {
                                        detach(e.helper);
                                    }
                                    document.body.style.cursor = '';
                                }
                                _this49.dragStartAction = false;
                            }
                        });
                        this.dropObj = new Droppable(this.element, {
                            out: function out(e) {
                                if (!isNullOrUndefined(e) && !e.target.classList.contains(SIBLING)) {
                                    document.body.style.cursor = 'not-allowed';
                                }
                            },
                            over: function over(e) {
                                document.body.style.cursor = '';
                            },
                            drop: function drop(e) {
                                _this49.dropAction(e);
                            }
                        });
                    }
                }, {
                    key: 'dragAction',
                    value: function dragAction(e, virtualEle) {
                        var dropRoot = closest(e.target, '.' + DROPPABLE);
                        var dropWrap = closest(e.target, '.' + TEXTWRAP);
                        var icon = _select('div.' + ICON, virtualEle);
                        removeClass([icon], [DROPIN, DROPNEXT, DROPOUT, NODROP]);
                        this.removeVirtualEle();
                        document.body.style.cursor = '';
                        var classList$$1 = e.target.classList;
                        if (this.fullRowSelect && !dropWrap && !isNullOrUndefined(classList$$1) && classList$$1.contains(FULLROW)) {
                            dropWrap = e.target.nextElementSibling;
                        }
                        if (dropRoot) {
                            var dropLi = closest(e.target, '.' + LISTITEM);
                            if (!dropRoot.classList.contains(ROOT) || dropWrap && !dropLi.isSameNode(this.dragLi) && !this.isDescendant(this.dragLi, dropLi)) {
                                if (dropLi && e && e.event.offsetY < 7) {
                                    _addClass([icon], DROPNEXT);
                                    var virEle = createElement('div', { className: SIBLING });
                                    var index = this.fullRowSelect ? 1 : 0;
                                    dropLi.insertBefore(virEle, dropLi.children[index]);
                                } else if (dropLi && e && e.target.offsetHeight > 0 && e.event.offsetY > e.target.offsetHeight - 10) {
                                    _addClass([icon], DROPNEXT);
                                    var _virEle = createElement('div', { className: SIBLING });
                                    var _index = this.fullRowSelect ? 2 : 1;
                                    dropLi.insertBefore(_virEle, dropLi.children[_index]);
                                } else {
                                    _addClass([icon], DROPIN);
                                }
                            } else if (e.target.nodeName === 'LI' && !dropLi.isSameNode(this.dragLi) && !this.isDescendant(this.dragLi, dropLi)) {
                                _addClass([icon], DROPNEXT);
                                this.renderVirtualEle(e);
                            } else if (e.target.classList.contains(SIBLING)) {
                                _addClass([icon], DROPNEXT);
                            } else {
                                _addClass([icon], DROPOUT);
                            }
                        } else {
                            _addClass([icon], NODROP);
                            document.body.style.cursor = 'not-allowed';
                        }
                        this.trigger('nodeDragging', this.getDragEvent(e.event, this, e.target, e.target));
                    }
                }, {
                    key: 'dropAction',
                    value: function dropAction(e) {
                        var offsetY = e.event.offsetY;
                        var dropTarget = e.target;
                        var dragObj = e.dragData.draggable.ej2_instances[0];
                        var dragTarget = dragObj.dragTarget;
                        var dragLi = closest(dragTarget, '.' + LISTITEM);
                        var dropLi = closest(dropTarget, '.' + LISTITEM);
                        detach(e.droppedElement);
                        document.body.style.cursor = '';
                        if (!dropLi || dropLi.isSameNode(dragLi) || this.isDescendant(dragLi, dropLi)) {
                            return;
                        }
                        if (dragObj.allowMultiSelection && (dragLi.classList.contains(ACTIVE) || offsetY < 7 || e.target.offsetHeight > 0 && offsetY > e.target.offsetHeight - 10)) {
                            var sNodes = selectAll('.' + ACTIVE, dragObj.element);
                            for (var i = 0; i < sNodes.length; i++) {
                                if (dropLi.isSameNode(sNodes[i]) || this.isDescendant(sNodes[i], dropLi)) {
                                    continue;
                                }
                                this.appendNode(dropTarget, sNodes[i], dropLi, e, dragObj, offsetY);
                            }
                        } else {
                            this.appendNode(dropTarget, dragLi, dropLi, e, dragObj, offsetY);
                        }
                        this.trigger('nodeDropped', this.getDragEvent(e.event, dragObj, dropTarget, e.target));
                    }
                }, {
                    key: 'appendNode',
                    value: function appendNode(dropTarget, dragLi, dropLi, e, dragObj, offsetY) {
                        if (dropTarget.nodeName === 'LI') {
                            this.dropAsSiblingNode(dragLi, dropLi, e, dragObj);
                        } else {
                            this.dropAsChildNode(dragLi, dropLi, dragObj, null, e, offsetY);
                        }
                    }
                }, {
                    key: 'dropAsSiblingNode',
                    value: function dropAsSiblingNode(dragLi, dropLi, e, dragObj) {
                        var dropUl = closest(dropLi, '.' + PARENTITEM);
                        var dragParentUl = closest(dragLi, '.' + PARENTITEM);
                        var dragParentLi = closest(dragParentUl, '.' + LISTITEM);
                        var pre = void 0;
                        if (e.target.offsetHeight > 0 && e.event.offsetY > e.target.offsetHeight - 2) {
                            pre = false;
                        } else if (e.event.offsetY < 2) {
                            pre = true;
                        }
                        dropUl.insertBefore(dragLi, pre ? e.target : e.target.nextElementSibling);
                        this.updateElement(dragParentUl, dragParentLi);
                        this.updateAriaLevel(dragLi);
                        if (dragObj.element.id === this.element.id) {
                            this.updateList();
                        } else {
                            dragObj.updateInstance();
                            this.updateInstance();
                        }
                    }
                }, {
                    key: 'dropAsChildNode',
                    value: function dropAsChildNode(dragLi, dropLi, dragObj, index, e, pos) {
                        var dragParentUl = closest(dragLi, '.' + PARENTITEM);
                        var dragParentLi = closest(dragParentUl, '.' + LISTITEM);
                        var dropParentUl = closest(dropLi, '.' + PARENTITEM);
                        if (e && pos < 7) {
                            dropParentUl.insertBefore(dragLi, dropLi);
                        } else if (e && e.target.offsetHeight > 0 && pos > e.target.offsetHeight - 10) {
                            dropParentUl.insertBefore(dragLi, dropLi.nextElementSibling);
                        } else {
                            var dropUl = this.expandParent(dropLi);
                            dropUl.insertBefore(dragLi, dropUl.childNodes[index]);
                        }
                        this.updateElement(dragParentUl, dragParentLi);
                        this.updateAriaLevel(dragLi);
                        if (dragObj.element.id === this.element.id) {
                            this.updateList();
                        } else {
                            dragObj.updateInstance();
                            this.updateInstance();
                        }
                    }
                }, {
                    key: 'expandParent',
                    value: function expandParent(dropLi) {
                        var dropIcon = _select('div.' + ICON, dropLi);
                        if (dropIcon && dropIcon.classList.contains(EXPANDABLE)) {
                            this.expandAction(dropLi, dropIcon, null);
                        }
                        var dropUl = _select('.' + PARENTITEM, dropLi);
                        if (isNullOrUndefined(dropUl)) {
                            ListBase.generateIcon(dropLi, COLLAPSIBLE, this.listBaseOption);
                            var icon = _select('div.' + ICON, dropLi);
                            removeClass([icon], EXPANDABLE);
                            dropUl = ListBase.generateUL([], null, this.listBaseOption);
                            dropLi.appendChild(dropUl);
                            dropLi.setAttribute('aria-expanded', 'true');
                            removeClass([dropLi], NODECOLLAPSED);
                        }
                        return dropUl;
                    }
                }, {
                    key: 'updateElement',
                    value: function updateElement(dragParentUl, dragParentLi) {
                        if (dragParentLi && dragParentUl.childElementCount === 0) {
                            var dragIcon = _select('div.' + ICON, dragParentLi);
                            detach(dragParentUl);
                            detach(dragIcon);
                            dragParentLi.removeAttribute('aria-expanded');
                        }
                    }
                }, {
                    key: 'updateAriaLevel',
                    value: function updateAriaLevel(dragLi) {
                        var level = this.parents(dragLi, '.' + PARENTITEM).length;
                        dragLi.setAttribute('aria-level', '' + level);
                        this.updateChildAriaLevel(_select('.' + PARENTITEM, dragLi), level + 1);
                    }
                }, {
                    key: 'updateChildAriaLevel',
                    value: function updateChildAriaLevel(element, level) {
                        if (!isNullOrUndefined(element)) {
                            var cNodes = element.childNodes;
                            for (var i = 0, len = cNodes.length; i < len; i++) {
                                var liEle = cNodes[i];
                                liEle.setAttribute('aria-level', '' + level);
                                this.updateChildAriaLevel(_select('.' + PARENTITEM, liEle), level + 1);
                            }
                        }
                    }
                }, {
                    key: 'renderVirtualEle',
                    value: function renderVirtualEle(e) {
                        var pre = void 0;
                        if (e.event.offsetY > e.target.offsetHeight - 2) {
                            pre = false;
                        } else if (e.event.offsetY < 2) {
                            pre = true;
                        }
                        var virEle = createElement('div', { className: SIBLING });
                        var index = this.fullRowSelect ? pre ? 1 : 2 : pre ? 0 : 1;
                        e.target.insertBefore(virEle, e.target.children[index]);
                    }
                }, {
                    key: 'removeVirtualEle',
                    value: function removeVirtualEle() {
                        var sibEle = _select('.' + SIBLING);
                        if (sibEle) {
                            detach(sibEle);
                        }
                    }
                }, {
                    key: 'destroyDrag',
                    value: function destroyDrag() {
                        if (this.dragObj && this.dropObj) {
                            this.dragObj.destroy();
                            this.dropObj.destroy();
                        }
                    }
                }, {
                    key: 'getDragEvent',
                    value: function getDragEvent(event, obj, dropTarget, target) {
                        var dropLi = dropTarget ? closest(dropTarget, '.' + LISTITEM) : null;
                        var dropData = dropLi ? this.getNodeData(dropLi) : null;
                        return {
                            cancel: false,
                            event: event,
                            draggedNode: obj.dragLi,
                            draggedNodeData: obj.dragData,
                            droppedNode: dropLi,
                            droppedNodeData: dropData,
                            target: target
                        };
                    }
                }, {
                    key: 'addFullRow',
                    value: function addFullRow(toAdd) {
                        var len = this.liList.length;
                        if (toAdd) {
                            for (var i = 0; i < len; i++) {
                                this.createFullRow(this.liList[i]);
                            }
                        } else {
                            for (var _i4 = 0; _i4 < len; _i4++) {
                                var rowDiv = _select('.' + FULLROW, this.liList[_i4]);
                                detach(rowDiv);
                            }
                        }
                    }
                }, {
                    key: 'createFullRow',
                    value: function createFullRow(item) {
                        var rowDiv = createElement('div', { className: FULLROW });
                        item.insertBefore(rowDiv, item.childNodes[0]);
                    }
                }, {
                    key: 'addMultiSelect',
                    value: function addMultiSelect(toAdd) {
                        if (toAdd) {
                            var liEles = selectAll('.' + LISTITEM + ':not([aria-selected="true"])', this.element);
                            var _iteratorNormalCompletion17 = true;
                            var _didIteratorError17 = false;
                            var _iteratorError17 = undefined;

                            try {
                                for (var _iterator17 = liEles[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                                    var ele = _step17.value;

                                    ele.setAttribute('aria-selected', 'false');
                                }
                            } catch (err) {
                                _didIteratorError17 = true;
                                _iteratorError17 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion17 && _iterator17.return) {
                                        _iterator17.return();
                                    }
                                } finally {
                                    if (_didIteratorError17) {
                                        throw _iteratorError17;
                                    }
                                }
                            }
                        } else {
                            var _liEles = selectAll('.' + LISTITEM + '[aria-selected="false"]', this.element);
                            var _iteratorNormalCompletion18 = true;
                            var _didIteratorError18 = false;
                            var _iteratorError18 = undefined;

                            try {
                                for (var _iterator18 = _liEles[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                                    var _ele7 = _step18.value;

                                    _ele7.removeAttribute('aria-selected');
                                }
                            } catch (err) {
                                _didIteratorError18 = true;
                                _iteratorError18 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion18 && _iterator18.return) {
                                        _iterator18.return();
                                    }
                                } finally {
                                    if (_didIteratorError18) {
                                        throw _iteratorError18;
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'collapseByLevel',
                    value: function collapseByLevel(element, level, excludeHiddenNodes) {
                        if (level > 0 && !isNullOrUndefined(element)) {
                            var cNodes = this.getVisibleNodes(excludeHiddenNodes, element.childNodes);
                            for (var i = 0, len = cNodes.length; i < len; i++) {
                                var liEle = cNodes[i];
                                var icon = _select('.' + COLLAPSIBLE, _select('.' + TEXTWRAP, liEle));
                                if (!isNullOrUndefined(icon)) {
                                    this.collapseNode(liEle, icon, null);
                                }
                                this.collapseByLevel(_select('.' + PARENTITEM, liEle), level - 1, excludeHiddenNodes);
                            }
                        }
                    }
                }, {
                    key: 'collapseAllNodes',
                    value: function collapseAllNodes(excludeHiddenNodes) {
                        var cIcons = this.getVisibleNodes(excludeHiddenNodes, selectAll('.' + COLLAPSIBLE, this.element));
                        for (var i = 0, len = cIcons.length; i < len; i++) {
                            var icon = cIcons[i];
                            var liEle = closest(icon, '.' + LISTITEM);
                            this.collapseNode(liEle, icon, null);
                        }
                    }
                }, {
                    key: 'expandByLevel',
                    value: function expandByLevel(element, level, excludeHiddenNodes) {
                        if (level > 0 && !isNullOrUndefined(element)) {
                            var eNodes = this.getVisibleNodes(excludeHiddenNodes, element.childNodes);
                            for (var i = 0, len = eNodes.length; i < len; i++) {
                                var liEle = eNodes[i];
                                var icon = _select('.' + EXPANDABLE, _select('.' + TEXTWRAP, liEle));
                                if (!isNullOrUndefined(icon)) {
                                    this.expandAction(liEle, icon, null);
                                }
                                this.expandByLevel(_select('.' + PARENTITEM, liEle), level - 1, excludeHiddenNodes);
                            }
                        }
                    }
                }, {
                    key: 'expandAllNodes',
                    value: function expandAllNodes(excludeHiddenNodes) {
                        var eIcons = this.getVisibleNodes(excludeHiddenNodes, selectAll('.' + EXPANDABLE, this.element));
                        for (var i = 0, len = eIcons.length; i < len; i++) {
                            var icon = eIcons[i];
                            var liEle = closest(icon, '.' + LISTITEM);
                            this.expandAction(liEle, icon, null, true);
                        }
                    }
                }, {
                    key: 'getVisibleNodes',
                    value: function getVisibleNodes(excludeHiddenNodes, nodes) {
                        var vNodes = Array.prototype.slice.call(nodes);
                        if (excludeHiddenNodes) {
                            for (var i = 0; i < vNodes.length; i++) {
                                if (!isVisible(vNodes[i])) {
                                    vNodes.splice(i, 1);
                                    i--;
                                }
                            }
                        }
                        return vNodes;
                    }
                }, {
                    key: 'removeNode',
                    value: function removeNode(node) {
                        var dragParentUl = closest(node, '.' + PARENTITEM);
                        var dragParentLi = closest(dragParentUl, '.' + LISTITEM);
                        detach(node);
                        this.updateElement(dragParentUl, dragParentLi);
                        this.updateInstance();
                    }
                }, {
                    key: 'updateInstance',
                    value: function updateInstance() {
                        this.updateList();
                        this.updateSelectedNodes();
                    }
                }, {
                    key: 'updateList',
                    value: function updateList() {
                        this.liList = Array.prototype.slice.call(selectAll('.' + LISTITEM, this.element));
                    }
                }, {
                    key: 'updateSelectedNodes',
                    value: function updateSelectedNodes() {
                        this.setProperties({ selectedNodes: [] }, true);
                        var sNodes = selectAll('.' + ACTIVE, this.element);
                        this.selectGivenNodes(sNodes);
                    }
                }, {
                    key: 'doGivenAction',
                    value: function doGivenAction(nodes, selector, toExpand) {
                        for (var i = 0, len = nodes.length; i < len; i++) {
                            var liEle = this.getElement(nodes[i]);
                            if (isNullOrUndefined(liEle)) {
                                continue;
                            }
                            var icon = _select('.' + selector, _select('.' + TEXTWRAP, liEle));
                            if (!isNullOrUndefined(icon)) {
                                toExpand ? this.expandAction(liEle, icon, null) : this.collapseNode(liEle, icon, null);
                            }
                        }
                    }
                }, {
                    key: 'addGivenNodes',
                    value: function addGivenNodes(nodes, dropLi, index, isRemote) {
                        var level = dropLi ? parseFloat(dropLi.getAttribute('aria-level')) + 1 : 1;
                        if (isRemote) {
                            this.updateMapper(level);
                        }
                        var li = ListBase.createListItemFromJson(nodes, this.listBaseOption, level);
                        var dropUl = dropLi ? this.expandParent(dropLi) : _select('.' + PARENTITEM, this.element);
                        var refNode = dropUl.childNodes[index];
                        for (var i = 0; i < li.length; i++) {
                            dropUl.insertBefore(li[i], refNode);
                        }
                        this.finalizeNode(dropUl);
                    }
                }, {
                    key: 'updateMapper',
                    value: function updateMapper(level) {
                        var mapper = level === 1 ? this.fields : this.getChildFields(this.fields, level - 1, 1);
                        var prop = this.getActualProperties(mapper);
                        this.listBaseOption.fields = prop;
                        this.listBaseOption.fields.url = prop.navigateUrl;
                    }
                }, {
                    key: 'doDisableAction',
                    value: function doDisableAction(nodes) {
                        for (var i = 0, len = nodes.length; i < len; i++) {
                            var liEle = this.getElement(nodes[i]);
                            if (isNullOrUndefined(liEle)) {
                                continue;
                            }
                            liEle.setAttribute('aria-disabled', 'true');
                            _addClass([liEle], DISABLE);
                        }
                    }
                }, {
                    key: 'doEnableAction',
                    value: function doEnableAction(nodes) {
                        for (var i = 0, len = nodes.length; i < len; i++) {
                            var liEle = this.getElement(nodes[i]);
                            if (isNullOrUndefined(liEle)) {
                                continue;
                            }
                            liEle.removeAttribute('aria-disabled');
                            removeClass([liEle], DISABLE);
                        }
                    }
                }, {
                    key: 'setTouchClass',
                    value: function setTouchClass() {
                        var ele = closest(this.element, '.' + BIGGER);
                        this.touchClass = isNullOrUndefined(ele) ? '' : SMALL;
                    }
                }, {
                    key: 'wireInputEvents',
                    value: function wireInputEvents(inpEle) {
                        EventHandler.add(inpEle, 'blur', this.inputFocusOut, this);
                    }
                }, {
                    key: 'wireEditingEvents',
                    value: function wireEditingEvents(toBind) {
                        if (toBind) {
                            var proxy = this;
                            this.touchEditObj = new Touch(this.element, {
                                tap: function tap(e) {
                                    if (e.tapCount === 2) {
                                        e.originalEvent.preventDefault();
                                        proxy.editingHandler(e.originalEvent);
                                    }
                                }
                            });
                        } else {
                            if (this.touchEditObj) {
                                this.touchEditObj.destroy();
                            }
                        }
                    }
                }, {
                    key: 'wireClickEvent',
                    value: function wireClickEvent(toBind) {
                        if (toBind) {
                            var proxy = this;
                            this.touchClickObj = new Touch(this.element, {
                                tap: function tap(e) {
                                    proxy.clickHandler(e);
                                }
                            });
                        } else {
                            if (this.touchClickObj) {
                                this.touchClickObj.destroy();
                            }
                        }
                    }
                }, {
                    key: 'wireExpandOnEvent',
                    value: function wireExpandOnEvent(toBind) {
                        var _this50 = this;

                        if (toBind) {
                            var proxy = this;
                            this.touchExpandObj = new Touch(this.element, {
                                tap: function tap(e) {
                                    if (_this50.expandOnType === 'Click' || _this50.expandOnType === 'DblClick' && e.tapCount === 2) {
                                        proxy.expandHandler(e);
                                    }
                                }
                            });
                        } else {
                            if (this.touchExpandObj) {
                                this.touchExpandObj.destroy();
                            }
                        }
                    }
                }, {
                    key: 'mouseDownHandler',
                    value: function mouseDownHandler(e) {
                        this.mouseDownStatus = true;
                        if (e.shiftKey || e.ctrlKey) {
                            e.preventDefault();
                        }
                        if (e.ctrlKey && this.allowMultiSelection) {
                            EventHandler.add(this.element, 'contextmenu', this.preventContextMenu, this);
                        }
                    }
                }, {
                    key: 'preventContextMenu',
                    value: function preventContextMenu(e) {
                        e.preventDefault();
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        EventHandler.add(this.element, 'mousedown', this.mouseDownHandler, this);
                        this.wireClickEvent(true);
                        this.wireExpandOnEvent(true);
                        EventHandler.add(this.element, 'focus', this.focusIn, this);
                        EventHandler.add(this.element, 'blur', this.focusOut, this);
                        EventHandler.add(this.element, 'mouseover', this.onMouseOver, this);
                        EventHandler.add(this.element, 'mouseout', this.onMouseLeave, this);
                        this.keyboardModule = new KeyboardEvents(this.element, {
                            keyAction: this.keyActionHandler.bind(this),
                            keyConfigs: this.keyConfigs,
                            eventName: 'keydown'
                        });
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        EventHandler.remove(this.element, 'mousedown', this.mouseDownHandler);
                        this.wireClickEvent(false);
                        this.wireExpandOnEvent(false);
                        EventHandler.remove(this.element, 'focus', this.focusIn);
                        EventHandler.remove(this.element, 'blur', this.focusOut);
                        EventHandler.remove(this.element, 'mouseover', this.onMouseOver);
                        EventHandler.remove(this.element, 'mouseout', this.onMouseLeave);
                        this.keyboardModule.destroy();
                    }
                }, {
                    key: 'parents',
                    value: function parents(element, selector) {
                        var matched = [];
                        var el = element.parentNode;
                        while (!isNullOrUndefined(el)) {
                            if (matches(el, selector)) {
                                matched.push(el);
                            }
                            el = el.parentNode;
                        }
                        return matched;
                    }
                }, {
                    key: 'isDescendant',
                    value: function isDescendant(parent, child) {
                        var node = child.parentNode;
                        while (!isNullOrUndefined(node)) {
                            if (node === parent) {
                                return true;
                            }
                            node = node.parentNode;
                        }
                        return false;
                    }
                }, {
                    key: 'showSpinner',
                    value: function showSpinner(element) {
                        _addClass([element], LOAD);
                        createSpinner({
                            target: element,
                            width: Browser.isDevice ? 16 : 14
                        });
                        _showSpinner(element);
                    }
                }, {
                    key: 'hideSpinner',
                    value: function hideSpinner(element) {
                        _hideSpinner(element);
                        element.innerHTML = '';
                        removeClass([element], LOAD);
                    }
                }, {
                    key: 'setCheckedNodes',
                    value: function setCheckedNodes(nodes) {
                        nodes = JSON.parse(JSON.stringify(nodes));
                        this.uncheckAll();
                        if (nodes.length > 0) {
                            this.checkAll(nodes);
                        }
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion19 = true;
                        var _didIteratorError19 = false;
                        var _iteratorError19 = undefined;

                        try {
                            for (var _iterator19 = Object.keys(newProp)[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                                var prop = _step19.value;

                                switch (prop) {
                                    case 'allowDragAndDrop':
                                        this.setDragAndDrop(this.allowDragAndDrop);
                                        break;
                                    case 'allowEditing':
                                        this.wireEditingEvents(this.allowEditing);
                                        break;
                                    case 'allowMultiSelection':
                                        if (this.selectedNodes.length > 1) {
                                            var sNode = this.getElement(this.selectedNodes[0]);
                                            this.isLoaded = false;
                                            this.removeSelectAll();
                                            this.selectNode(sNode, null);
                                            this.isLoaded = true;
                                        }
                                        this.setMultiSelect(this.allowMultiSelection);
                                        this.addMultiSelect(this.allowMultiSelection);
                                        break;
                                    case 'checkedNodes':
                                        if (this.showCheckBox) {
                                            this.checkedNodes = oldProp.checkedNodes;
                                            this.setCheckedNodes(newProp.checkedNodes);
                                        }
                                        break;
                                    case 'cssClass':
                                        this.setCssClass(oldProp.cssClass, newProp.cssClass);
                                        break;
                                    case 'enableRtl':
                                        this.setEnableRtl();
                                        break;
                                    case 'expandOn':
                                        this.wireExpandOnEvent(false);
                                        this.setExpandOnType();
                                        this.wireExpandOnEvent(true);
                                        break;
                                    case 'fields':
                                        this.listBaseOption.fields = this.fields.properties;
                                        this.listBaseOption.fields.url = this.fields.navigateUrl;
                                        this.reRenderNodes();
                                        break;
                                    case 'fullRowSelect':
                                        this.setFullRow(this.fullRowSelect);
                                        this.addFullRow(this.fullRowSelect);
                                        break;
                                    case 'nodeTemplate':
                                        this.nodeTemplateFn = this.templateComplier(this.nodeTemplate);
                                        this.reRenderNodes();
                                        break;
                                    case 'selectedNodes':
                                        this.removeSelectAll();
                                        this.setProperties({ selectedNodes: newProp.selectedNodes }, true);
                                        this.doSelectionAction();
                                        break;
                                    case 'showCheckBox':
                                        this.reRenderNodes();
                                        break;
                                    case 'sortOrder':
                                        this.reRenderNodes();
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError19 = true;
                            _iteratorError19 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion19 && _iterator19.return) {
                                    _iterator19.return();
                                }
                            } finally {
                                if (_didIteratorError19) {
                                    throw _iteratorError19;
                                }
                            }
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.element.removeAttribute('aria-activedescendant');
                        this.element.removeAttribute('tabindex');
                        this.unWireEvents();
                        this.wireEditingEvents(false);
                        this.rippleFn();
                        this.rippleIconFn();
                        this.setCssClass(this.cssClass, null);
                        this.setDragAndDrop(false);
                        this.setFullRow(false);
                        this.element.innerHTML = '';
                        _get(TreeView.prototype.__proto__ || Object.getPrototypeOf(TreeView.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'addNodes',
                    value: function addNodes(nodes, target, index) {
                        if (isNullOrUndefined(nodes)) {
                            return;
                        }
                        var dropLi = this.getElement(target);
                        nodes = this.getSortedData(nodes);
                        if (this.fields.dataSource instanceof DataManager) {
                            this.addGivenNodes(nodes, dropLi, index, true);
                        } else if (this.dataType === 2) {
                            this.addGivenNodes(nodes, dropLi, index);
                        } else {
                            if (dropLi) {
                                this.addGivenNodes(nodes, dropLi, index);
                            } else {
                                for (var i = 0; i < nodes.length; i++) {
                                    var pid = getValue(this.fields.parentID, nodes[i]);
                                    dropLi = pid ? this.getElement(pid.toString()) : pid;
                                    this.addGivenNodes([nodes[i]], dropLi, index);
                                }
                            }
                        }
                    }
                }, {
                    key: 'beginEdit',
                    value: function beginEdit(node) {
                        var ele = this.getElement(node);
                        if (!isNullOrUndefined(ele)) {
                            this.createTextbox(ele, null);
                        }
                    }
                }, {
                    key: 'checkAll',
                    value: function checkAll(nodes) {
                        if (this.showCheckBox) {
                            this.doCheckBoxAction(nodes, true);
                        }
                    }
                }, {
                    key: 'collapseAll',
                    value: function collapseAll(nodes, level, excludeHiddenNodes) {
                        if (!isNullOrUndefined(nodes)) {
                            this.doGivenAction(nodes, COLLAPSIBLE, false);
                        } else {
                            if (level > 0) {
                                this.collapseByLevel(_select('.' + PARENTITEM, this.element), level, excludeHiddenNodes);
                            } else {
                                this.collapseAllNodes(excludeHiddenNodes);
                            }
                        }
                    }
                }, {
                    key: 'disableNodes',
                    value: function disableNodes(nodes) {
                        if (!isNullOrUndefined(nodes)) {
                            this.doDisableAction(nodes);
                        }
                    }
                }, {
                    key: 'enableNodes',
                    value: function enableNodes(nodes) {
                        if (!isNullOrUndefined(nodes)) {
                            this.doEnableAction(nodes);
                        }
                    }
                }, {
                    key: 'ensureVisible',
                    value: function ensureVisible(node) {
                        var liEle = this.getElement(node);
                        if (isNullOrUndefined(liEle)) {
                            return;
                        }
                        var parents = this.parents(liEle, '.' + LISTITEM);
                        this.expandAll(parents);
                        setTimeout(function () {
                            liEle.scrollIntoView(true);
                        }, 450);
                    }
                }, {
                    key: 'expandAll',
                    value: function expandAll(nodes, level, excludeHiddenNodes) {
                        if (!isNullOrUndefined(nodes)) {
                            this.doGivenAction(nodes, EXPANDABLE, true);
                        } else {
                            if (level > 0) {
                                this.expandByLevel(_select('.' + PARENTITEM, this.element), level, excludeHiddenNodes);
                            } else {
                                this.expandAllNodes(excludeHiddenNodes);
                            }
                        }
                    }
                }, {
                    key: 'getNode',
                    value: function getNode(node) {
                        var ele = this.getElement(node);
                        return this.getNodeData(ele, true);
                    }
                }, {
                    key: 'moveNodes',
                    value: function moveNodes(sourceNodes, target, index) {
                        var dropLi = this.getElement(target);
                        if (isNullOrUndefined(dropLi)) {
                            return;
                        }
                        for (var i = 0; i < sourceNodes.length; i++) {
                            var dragLi = this.getElement(sourceNodes[i]);
                            if (isNullOrUndefined(dragLi) || dropLi.isSameNode(dragLi) || this.isDescendant(dragLi, dropLi)) {
                                continue;
                            }
                            this.dropAsChildNode(dragLi, dropLi, this, index);
                        }
                    }
                }, {
                    key: 'removeNodes',
                    value: function removeNodes(nodes) {
                        if (!isNullOrUndefined(nodes)) {
                            for (var i = 0, len = nodes.length; i < len; i++) {
                                var liEle = this.getElement(nodes[i]);
                                if (isNullOrUndefined(liEle)) {
                                    continue;
                                }
                                this.removeNode(liEle);
                            }
                        }
                    }
                }, {
                    key: 'updateNode',
                    value: function updateNode(target, newText) {
                        if (isNullOrUndefined(target) || isNullOrUndefined(newText) || !this.allowEditing) {
                            return;
                        }
                        var liEle = this.getElement(target);
                        if (isNullOrUndefined(liEle)) {
                            return;
                        }
                        var txtEle = _select('.' + LISTTEXT, liEle);
                        this.updateOldText(liEle);
                        var eventArgs = this.getEditEvent(liEle, null, null);
                        this.trigger('nodeEditing', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        this.appendNewText(liEle, txtEle, newText, false);
                    }
                }, {
                    key: 'uncheckAll',
                    value: function uncheckAll(nodes) {
                        if (this.showCheckBox) {
                            this.doCheckBoxAction(nodes, false);
                        }
                    }
                }]);

                return TreeView;
            }(Component));

            __decorate$5([Property(false)], TreeView.prototype, "allowDragAndDrop", void 0);
            __decorate$5([Property(false)], TreeView.prototype, "allowEditing", void 0);
            __decorate$5([Property(false)], TreeView.prototype, "allowMultiSelection", void 0);
            __decorate$5([Complex({}, NodeAnimationSettings)], TreeView.prototype, "animation", void 0);
            __decorate$5([Property()], TreeView.prototype, "checkedNodes", void 0);
            __decorate$5([Property('')], TreeView.prototype, "cssClass", void 0);
            __decorate$5([Property(false)], TreeView.prototype, "enablePersistence", void 0);
            __decorate$5([Property(false)], TreeView.prototype, "enableRtl", void 0);
            __decorate$5([Property('Auto')], TreeView.prototype, "expandOn", void 0);
            __decorate$5([Complex({}, FieldsSettings)], TreeView.prototype, "fields", void 0);
            __decorate$5([Property(true)], TreeView.prototype, "fullRowSelect", void 0);
            __decorate$5([Property()], TreeView.prototype, "nodeTemplate", void 0);
            __decorate$5([Property()], TreeView.prototype, "selectedNodes", void 0);
            __decorate$5([Property('None')], TreeView.prototype, "sortOrder", void 0);
            __decorate$5([Property(false)], TreeView.prototype, "showCheckBox", void 0);
            __decorate$5([Event()], TreeView.prototype, "created", void 0);
            __decorate$5([Event()], TreeView.prototype, "dataBound", void 0);
            __decorate$5([Event()], TreeView.prototype, "drawNode", void 0);
            __decorate$5([Event()], TreeView.prototype, "destroyed", void 0);
            __decorate$5([Event()], TreeView.prototype, "keyPress", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeChecked", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeChecking", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeClicked", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeCollapsed", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeCollapsing", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeDragging", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeDragStart", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeDragStop", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeDropped", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeEdited", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeEditing", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeExpanded", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeExpanding", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeSelected", void 0);
            __decorate$5([Event()], TreeView.prototype, "nodeSelecting", void 0);
            _export('TreeView', TreeView = __decorate$5([NotifyPropertyChanges], TreeView));

            /**
             * TreeView modules
             */

            __decorate$6 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            CONTROL = 'e-control';
            ROOT$1 = 'e-sidebar';
            DOCKER = 'e-dock';
            CLOSE = 'e-close';
            OPEN = 'e-open';
            TRASITION = 'e-transition';
            DEFAULTBACKDROP = 'e-sidebar-overlay';
            CONTEXTBACKDROP = 'e-backdrop';
            RIGHT = 'e-right';
            LEFT = 'e-left';
            OVER = 'e-over';
            PUSH = 'e-push';
            SLIDE = 'e-slide';
            VISIBILITY = 'e-visibility';
            MAINCONTENTANIMATION = 'e-content-animation';
            DISABLEANIMATION = 'e-disable-animation';
            CONTEXT = 'e-sidebar-context';
            SIDEBARABSOLUTE = 'e-sidebar-absolute';

            _export('Sidebar', Sidebar = function (_Component7) {
                _inherits(Sidebar, _Component7);

                function Sidebar(options, element) {
                    _classCallCheck(this, Sidebar);

                    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, options, element));
                }

                _createClass(Sidebar, [{
                    key: 'preRender',
                    value: function preRender() {
                        this.setWidth();
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.initialize();
                        this.wireEvents();
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        this.setContext();
                        this.addClass();
                        this.setZindex();
                        if (this.enableDock) {
                            this.setDock();
                        }
                        this.setMediaQuery();
                        this.setType(this.type);
                        this.setCloseOnDocumentClick();
                    }
                }, {
                    key: 'setContext',
                    value: function setContext() {
                        if (typeof this.target === 'string') {
                            this.setProperties({ target: document.querySelector('.' + this.target) }, true);
                        }
                        if (this.target) {
                            this.target.insertAdjacentElement('afterbegin', this.element);
                            _addClass([this.element], SIDEBARABSOLUTE);
                            _addClass([this.target], CONTEXT);
                        }
                    }
                }, {
                    key: 'setCloseOnDocumentClick',
                    value: function setCloseOnDocumentClick() {
                        if (this.closeOnDocumentClick) {
                            EventHandler.add(document, 'mousedown touchstart', this.documentclickHandler, this);
                        } else {
                            EventHandler.remove(document, 'mousedown touchstart', this.documentclickHandler);
                        }
                    }
                }, {
                    key: 'setWidth',
                    value: function setWidth() {
                        if (this.enableDock && this.position === 'Left') {
                            setStyleAttribute(this.element, { 'width': formatUnit(this.dockSize) });
                        } else if (this.enableDock && this.position === 'Right') {
                            setStyleAttribute(this.element, { 'width': formatUnit(this.dockSize) });
                        } else if (!this.enableDock) {
                            setStyleAttribute(this.element, { 'width': formatUnit(this.width) });
                        }
                    }
                }, {
                    key: 'setZindex',
                    value: function setZindex() {
                        setStyleAttribute(this.element, { 'z-index': '' + this.zIndex });
                    }
                }, {
                    key: 'addClass',
                    value: function addClass() {
                        var classELement = document.querySelector('.e-main-content');
                        if (!isNullOrUndefined(classELement || this.element.nextElementSibling)) {
                            _addClass([classELement || this.element.nextElementSibling], [MAINCONTENTANIMATION]);
                        }
                        if (!this.enableDock && this.type !== 'Auto') {
                            _addClass([this.element], [VISIBILITY]);
                        }
                        removeClass([this.element], [OPEN, CLOSE, RIGHT, LEFT, SLIDE, PUSH, OVER]);
                        this.element.classList.add(ROOT$1);
                        _addClass([this.element], this.position === 'Right' ? RIGHT : LEFT);
                        if (this.type === 'Auto' && !Browser.isDevice && !this.enableDock) {
                            _addClass([this.element], OPEN);
                        } else {
                            _addClass([this.element], CLOSE);
                        }
                    }
                }, {
                    key: 'destroyBackDrop',
                    value: function destroyBackDrop() {
                        var sibling = document.querySelector('.e-main-content') || this.element.nextElementSibling;
                        if (this.target && this.showBackdrop && sibling) {
                            removeClass([sibling], CONTEXTBACKDROP);
                        } else if (this.showBackdrop && this.modal) {
                            this.modal.style.display = 'none';
                            this.modal.outerHTML = '';
                            this.modal = null;
                        }
                    }
                }, {
                    key: 'hide',
                    value: function hide() {
                        if (this.element.classList.contains(CLOSE)) {
                            return;
                        }
                        if (this.element.classList.contains(OPEN)) {
                            this.eventArguments = { name: 'change', element: this.element };
                            this.trigger('change', this.eventArguments);
                        }
                        _addClass([this.element], CLOSE);
                        removeClass([this.element], OPEN);
                        this.enableDock ? setStyleAttribute(this.element, { 'width': formatUnit(this.dockSize) }) : setStyleAttribute(this.element, { 'width': formatUnit(this.width) });
                        this.setDock();
                        this.setType(this.type);
                        var sibling = document.querySelector('.e-main-content') || this.element.nextElementSibling;
                        if (!this.enableDock && sibling) {
                            sibling.style.transform = 'translateX(' + 0 + 'px)';
                            this.position === 'Left' ? sibling.style.marginLeft = '0px' : sibling.style.marginRight = '0px';
                        }
                        this.eventArguments = { name: 'change', element: this.element };
                        this.trigger('close', this.eventArguments);
                        this.destroyBackDrop();
                        this.setCloseOnDocumentClick();
                        this.setAnimation();
                        if (this.type === 'Slide') {
                            document.body.classList.remove('e-sidebar-overflow');
                        }
                    }
                }, {
                    key: 'show',
                    value: function show() {
                        removeClass([this.element], VISIBILITY);
                        if (this.element.classList.contains(OPEN)) {
                            return;
                        }
                        if (this.element.classList.contains(CLOSE)) {
                            this.eventArguments = { name: 'open', element: this.element };
                            this.trigger('change', this.eventArguments);
                        }
                        _addClass([this.element], [OPEN, TRASITION]);
                        setStyleAttribute(this.element, { 'transform': '' });
                        removeClass([this.element], CLOSE);
                        setStyleAttribute(this.element, { 'width': formatUnit(this.width) });
                        var elementWidth = this.element.getBoundingClientRect().width;
                        this.setType(this.type);
                        this.createBackDrop();
                        this.eventArguments.name = 'open';
                        this.eventArguments.element = this.element;
                        this.trigger('open', this.eventArguments);
                        this.setCloseOnDocumentClick();
                        this.setAnimation();
                        if (this.type === 'Slide') {
                            document.body.classList.add('e-sidebar-overflow');
                        }
                    }
                }, {
                    key: 'setAnimation',
                    value: function setAnimation() {
                        if (this.animate) {
                            removeClass([this.element], DISABLEANIMATION);
                        } else {
                            _addClass([this.element], DISABLEANIMATION);
                        }
                    }
                }, {
                    key: 'setDock',
                    value: function setDock() {
                        if (this.enableDock && this.position === 'Left' && !this.isOpen()) {
                            setStyleAttribute(this.element, { 'transform': 'translateX(' + -100 + '%) translateX(' + formatUnit(this.dockSize) + ')' });
                        } else if (this.enableDock && this.position === 'Right' && !this.isOpen()) {
                            setStyleAttribute(this.element, { 'transform': 'translateX(' + 100 + '%) translateX(' + '-' + formatUnit(this.dockSize) + ')' });
                        }
                        if (this.element.classList.contains(CLOSE) && this.enableDock) {
                            setStyleAttribute(this.element, { 'width': formatUnit(this.dockSize) });
                        }
                    }
                }, {
                    key: 'createBackDrop',
                    value: function createBackDrop() {
                        if (this.target && this.showBackdrop) {
                            var sibling = document.querySelector('.e-main-content') || this.element.nextElementSibling;
                            _addClass([sibling], CONTEXTBACKDROP);
                        } else if (this.showBackdrop && !this.modal && this.isOpen()) {
                            this.modal = createElement('div');
                            this.modal.className = DEFAULTBACKDROP;
                            this.modal.style.display = 'block';
                            document.body.appendChild(this.modal);
                        }
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist(['type', 'position']);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'sidebar';
                    }
                }, {
                    key: 'toggle',
                    value: function toggle(e) {
                        this.element.classList.contains(OPEN) ? this.hide() : this.show();
                    }
                }, {
                    key: 'isOpen',
                    value: function isOpen() {
                        return this.element.classList.contains(OPEN) ? true : false;
                    }
                }, {
                    key: 'setMediaQuery',
                    value: function setMediaQuery() {
                        if (this.mediaQuery && this.mediaQuery.matches) {
                            this.show();
                        } else if (this.mediaQuery && this.isOpen()) {
                            this.hide();
                        }
                    }
                }, {
                    key: 'resize',
                    value: function resize(e) {
                        if (this.type === 'Auto') {
                            if (Browser.isDevice) {
                                _addClass([this.element], OVER);
                            } else {
                                _addClass([this.element], PUSH);
                            }
                        }
                        this.setMediaQuery();
                    }
                }, {
                    key: 'documentclickHandler',
                    value: function documentclickHandler(e) {
                        if (closest(e.target, '.' + CONTROL + '' + '.' + ROOT$1)) {
                            return;
                        }
                        this.hide();
                    }
                }, {
                    key: 'enableGestureHandler',
                    value: function enableGestureHandler(args) {
                        if (this.position === 'Left' && args.swipeDirection === 'Right' && args.startX <= 20 && args.distanceX >= 50 && args.velocity >= 0.5) {
                            this.show();
                        } else if (this.position === 'Left' && args.swipeDirection === 'Left') {
                            this.hide();
                        } else if (this.position === 'Right' && args.swipeDirection === 'Right') {
                            this.hide();
                        } else if (this.position === 'Right' && args.swipeDirection === 'Left' && window.innerWidth - args.startX <= 20 && args.distanceX >= 50 && args.velocity >= 0.5) {
                            this.show();
                        }
                    }
                }, {
                    key: 'setEnableGestures',
                    value: function setEnableGestures() {
                        if (this.enableGestures) {
                            this.mainContentEle = new Touch(document.body, { swipe: this.enableGestureHandler.bind(this) });
                            this.sidebarEle = new Touch(this.element, { swipe: this.enableGestureHandler.bind(this) });
                        } else {
                            if (this.mainContentEle && this.sidebarEle) {
                                this.mainContentEle.destroy();
                                this.sidebarEle.destroy();
                            }
                        }
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        this.setEnableGestures();
                        window.addEventListener('resize', this.resize.bind(this));
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        window.removeEventListener('resize', this.resize.bind(this));
                        EventHandler.remove(document, 'mousedown touchstart', this.documentclickHandler);
                        if (this.mainContentEle) {
                            this.mainContentEle.destroy();
                        }
                        if (this.sidebarEle) {
                            this.sidebarEle.destroy();
                        }
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var sibling = document.querySelector('.e-main-content') || this.element.nextElementSibling;
                        var _iteratorNormalCompletion20 = true;
                        var _didIteratorError20 = false;
                        var _iteratorError20 = undefined;

                        try {
                            for (var _iterator20 = Object.keys(newProp)[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                                var prop = _step20.value;

                                switch (prop) {
                                    case 'width':
                                        this.setWidth();
                                        if (!this.isOpen()) {
                                            this.setDock();
                                        }
                                        break;
                                    case 'animate':
                                        this.setAnimation();
                                        break;
                                    case 'type':
                                        removeClass([this.element], [VISIBILITY]);
                                        this.addClass();
                                        this.setType(this.type);
                                        break;
                                    case 'position':
                                        this.element.style.transform = '';
                                        this.setDock();
                                        if (sibling) {
                                            this.position === 'Left' ? sibling.style.marginRight = '0px' : sibling.style.marginLeft = '0px';
                                        }
                                        if (this.position === 'Right') {
                                            removeClass([this.element], LEFT);
                                            _addClass([this.element], RIGHT);
                                        } else {
                                            removeClass([this.element], RIGHT);
                                            _addClass([this.element], LEFT);
                                        }
                                        this.setType(this.type);
                                        break;
                                    case 'showBackdrop':
                                        if (this.showBackdrop) {
                                            this.createBackDrop();
                                        } else {
                                            if (this.modal) {
                                                this.modal.style.display = 'none';
                                                this.modal.outerHTML = '';
                                                this.modal = null;
                                            }
                                        }
                                        break;
                                    case 'target':
                                        if (typeof this.target === 'string') {
                                            this.setProperties({ target: document.querySelector('.' + this.target) }, true);
                                        }
                                        if (isNullOrUndefined(this.target)) {
                                            removeClass([this.element], SIDEBARABSOLUTE);
                                            removeClass([oldProp.target], CONTEXT);
                                            setStyleAttribute(sibling, { 'margin-left': 0, 'margin-right': 0 });
                                            document.body.insertAdjacentElement('afterbegin', this.element);
                                        } else {
                                            _get(Sidebar.prototype.__proto__ || Object.getPrototypeOf(Sidebar.prototype), 'refresh', this).call(this);
                                        }
                                        break;
                                    case 'closeOnDocumentClick':
                                        this.setCloseOnDocumentClick();
                                        break;
                                    case 'enableDock':
                                        if (!this.isOpen()) {
                                            this.setDock();
                                        }
                                        break;
                                    case 'zIndex':
                                        this.setZindex();
                                        break;
                                    case 'mediaQuery':
                                        this.setMediaQuery();
                                        break;
                                    case 'enableGestures':
                                        this.setEnableGestures();
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError20 = true;
                            _iteratorError20 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion20 && _iterator20.return) {
                                    _iterator20.return();
                                }
                            } finally {
                                if (_didIteratorError20) {
                                    throw _iteratorError20;
                                }
                            }
                        }
                    }
                }, {
                    key: 'setType',
                    value: function setType(type) {
                        var elementWidth = this.element.getBoundingClientRect().width;
                        this.setZindex();
                        if (this.enableDock) {
                            _addClass([this.element], DOCKER);
                        }
                        var sibling = document.querySelector('.e-main-content') || this.element.nextElementSibling;
                        if (sibling) {
                            sibling.style.transform = 'translateX(' + 0 + 'px)';
                            if (!Browser.isDevice && this.type !== 'Auto') {
                                this.position === 'Left' ? sibling.style.marginLeft = '0px' : sibling.style.marginRight = '0px';
                            }
                        }
                        var margin = this.position === 'Left' ? elementWidth + 'px' : elementWidth + 'px';
                        var eleWidth = this.position === 'Left' ? elementWidth : -elementWidth;
                        removeClass([this.element], [PUSH, OVER, SLIDE]);
                        switch (type) {
                            case 'Push':
                                _addClass([this.element], [PUSH]);
                                if (sibling && (this.enableDock || this.element.classList.contains(OPEN))) {
                                    this.position === 'Left' ? sibling.style.marginLeft = margin : sibling.style.marginRight = margin;
                                }
                                break;
                            case 'Slide':
                                _addClass([this.element], [SLIDE]);
                                if (sibling && (this.enableDock || this.element.classList.contains(OPEN))) {
                                    sibling.style.transform = 'translateX(' + eleWidth + 'px)';
                                }
                                break;
                            case 'Over':
                                _addClass([this.element], [OVER]);
                                if (this.enableDock && this.element.classList.contains(CLOSE)) {
                                    if (sibling) {
                                        this.position === 'Left' ? sibling.style.marginLeft = margin : sibling.style.marginRight = margin;
                                    }
                                }
                                break;
                            case 'Auto':
                                _addClass([this.element], [TRASITION]);
                                if (Browser.isDevice) {
                                    if (sibling && this.enableDock && !this.isOpen()) {
                                        this.position === 'Left' ? sibling.style.marginLeft = margin : sibling.style.marginRight = margin;
                                        _addClass([this.element], PUSH);
                                    } else {
                                        _addClass([this.element], OVER);
                                    }
                                } else {
                                    _addClass([this.element], PUSH);
                                    if (sibling && (this.enableDock || this.element.classList.contains(OPEN))) {
                                        this.position === 'Left' ? sibling.style.marginLeft = margin : sibling.style.marginRight = margin;
                                    }
                                }
                                this.createBackDrop();
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        _get(Sidebar.prototype.__proto__ || Object.getPrototypeOf(Sidebar.prototype), 'destroy', this).call(this);
                        removeClass([this.element], [OPEN, CLOSE, PUSH, SLIDE, OVER, LEFT, RIGHT, TRASITION]);
                        if (this.target) {
                            removeClass([this.element], SIDEBARABSOLUTE);
                            removeClass([this.target], CONTEXT);
                        }
                        this.destroyBackDrop();
                        this.element.style.width = '';
                        this.element.style.zIndex = '';
                        this.element.style.transform = '';
                        var sibling = document.querySelector('.e-main-content') || this.element.nextElementSibling;
                        if (!isNullOrUndefined(sibling)) {
                            sibling.style.margin = '';
                            sibling.style.transform = '';
                        }
                        this.unWireEvents();
                    }
                }]);

                return Sidebar;
            }(Component));

            __decorate$6([Property('auto')], Sidebar.prototype, "dockSize", void 0);
            __decorate$6([Property(null)], Sidebar.prototype, "mediaQuery", void 0);
            __decorate$6([Property(false)], Sidebar.prototype, "enableDock", void 0);
            __decorate$6([Property(true)], Sidebar.prototype, "enableGestures", void 0);
            __decorate$6([Property(false)], Sidebar.prototype, "enableRtl", void 0);
            __decorate$6([Property(true)], Sidebar.prototype, "animate", void 0);
            __decorate$6([Property('auto')], Sidebar.prototype, "height", void 0);
            __decorate$6([Property(false)], Sidebar.prototype, "closeOnDocumentClick", void 0);
            __decorate$6([Property('Left')], Sidebar.prototype, "position", void 0);
            __decorate$6([Property(null)], Sidebar.prototype, "target", void 0);
            __decorate$6([Property(false)], Sidebar.prototype, "showBackdrop", void 0);
            __decorate$6([Property('Auto')], Sidebar.prototype, "type", void 0);
            __decorate$6([Property('auto')], Sidebar.prototype, "width", void 0);
            __decorate$6([Property(1000)], Sidebar.prototype, "zIndex", void 0);
            __decorate$6([Event()], Sidebar.prototype, "created", void 0);
            __decorate$6([Event()], Sidebar.prototype, "close", void 0);
            __decorate$6([Event()], Sidebar.prototype, "open", void 0);
            __decorate$6([Event()], Sidebar.prototype, "change", void 0);
            __decorate$6([Event()], Sidebar.prototype, "destroyed", void 0);
            _export('Sidebar', Sidebar = __decorate$6([NotifyPropertyChanges], Sidebar));

            /**
             * Sidebar modules
             */

            /**
             * Navigation all modules
             */

            _export('HScroll', HScroll);

            _export('Item', Item);

            _export('Toolbar', Toolbar);

            _export('AccordionActionSettings', AccordionActionSettings);

            _export('AccordionAnimationSettings', AccordionAnimationSettings);

            _export('AccordionItem', AccordionItem);

            _export('Accordion', Accordion);

            _export('MenuItem', MenuItem);

            _export('ContextMenu', ContextMenu);

            _export('TabActionSettings', TabActionSettings);

            _export('TabAnimationSettings', TabAnimationSettings);

            _export('Header', Header);

            _export('TabItem', TabItem);

            _export('Tab', Tab);

            _export('FieldsSettings', FieldsSettings);

            _export('ActionSettings', ActionSettings);

            _export('NodeAnimationSettings', NodeAnimationSettings);

            _export('TreeView', TreeView);

            _export('Sidebar', Sidebar);
        }
    };
});

//# sourceMappingURL=ej2-navigations.es2015-compiled.js.map