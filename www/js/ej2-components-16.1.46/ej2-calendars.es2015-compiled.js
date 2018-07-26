'use strict';

System.register(['@syncfusion/ej2-base', '@syncfusion/ej2-popups', '@syncfusion/ej2-inputs', '@syncfusion/ej2-buttons', '@syncfusion/ej2-lists'], function (_export, _context) {
    "use strict";

    var Animation, Browser, ChildProperty, Collection, Component, Event, EventHandler, Internationalization, KeyboardEvents, L10n, NotifyPropertyChanges, Property, addClass, append, attributes, cldrData, closest, createElement, detach, extend, formatUnit, getDefaultDateObject, getUniqueID, getValue, isNullOrUndefined, isUndefined, merge, prepend, remove, removeClass, rippleEffect, select, setStyleAttribute, setValue, Popup, Input, Button, ListBase, cssClass, _createClass, _get, _typeof, __decorate, OTHERMONTH, ROOT, DEVICE, HEADER, RTL, CONTENT, YEAR, MONTH, DECADE, ICON, PREVICON, NEXTICON, PREVSPAN, NEXTSPAN, ICONCONTAINER, DISABLED, OVERLAY, WEEKEND, WEEKNUMBER, SELECTED, FOCUSEDDATE, OTHERMONTHROW, TODAY, TITLE, LINK, CELL, WEEKHEADER, ZOOMIN, FOOTER, BTN, FLAT, PRIMARY, dayMilliSeconds, minutesMilliSeconds, CalendarBase, Calendar, __decorate$1, DATEWRAPPER, ROOT$1, POPUPWRAPPER, INPUTWRAPPER, POPUP, INPUTCONTAINER, INPUTFOCUS, INPUTROOT, ERROR, ACTIVE, OVERFLOW, DATEICON, ICONS, OPENDURATION, OFFSETVALUE, DatePicker, __decorate$2, DATERANGEWRAPPER, INPUTCONTAINER$1, DATERANGEICON, POPUP$1, LEFTCALENDER, RIGHTCALENDER, LEFTCONTAINER, RIGHTCONTAINER, ROOT$2, ERROR$1, ACTIVE$1, STARTENDCONTAINER, STARTDATE, ENDDATE, STARTBUTTON, INPUTFOCUS$1, ENDBUTTON, RANGEHOVER, OTHERMONTH$1, STARTLABEL, ENDLABEL, DISABLED$1, SELECTED$1, CALENDAR, NEXTICON$1, PREVICON$1, HEADER$1, TITLE$1, ICONCONTAINER$1, RANGECONTAINER, RANGEHEADER, PRESETS, FOOTER$1, RANGEBORDER, TODAY$1, FOCUSDATE, CONTENT$1, DAYSPAN, WEEKNUMBER$1, DATEDISABLED, ICONDISABLED, CALENDARCONTAINER, SEPARATOR, APPLY, CANCEL, DEVICE$1, OVERLAY$1, CHANGEICON, LISTCLASS, RTL$2, HOVER, OVERFLOW$1, OFFSETVALUE$1, PRIMARY$1, FLAT$1, Presets, DateRangePicker, __decorate$3, WRAPPERCLASS, POPUP$2, ERROR$2, POPUPDIMENSION, DAY, MONTH$1, YEAR$1, ROOT$3, CONTENT$2, SELECTED$2, HOVER$1, NAVIGATION, DISABLED$2, ICONANIMATION, FOCUS, LISTCLASS$1, HALFPOSITION, ANIMATIONDURATION, TimePickerBase, TimePicker, __decorate$4, DATEWRAPPER$1, DATEPICKERROOT, DATETIMEWRAPPER, DAY$1, MONTH$2, YEAR$2, HOUR, MINUTE, SECOND, MILLISECOND, ROOT$4, DATETIMEPOPUPWRAPPER, INPUTWRAPPER$1, POPUP$3, TIMEICON, INPUTFOCUS$2, POPUPDIMENSION$1, ICONANIMATION$1, DISABLED$3, ERROR$3, CONTENT$3, NAVIGATION$1, ACTIVE$2, HOVER$2, ICONS$1, HALFPOSITION$1, LISTCLASS$2, ANIMATIONDURATION$1, OVERFLOW$2, DateTimePicker;

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
            Component = _syncfusionEj2Base.Component;
            Event = _syncfusionEj2Base.Event;
            EventHandler = _syncfusionEj2Base.EventHandler;
            Internationalization = _syncfusionEj2Base.Internationalization;
            KeyboardEvents = _syncfusionEj2Base.KeyboardEvents;
            L10n = _syncfusionEj2Base.L10n;
            NotifyPropertyChanges = _syncfusionEj2Base.NotifyPropertyChanges;
            Property = _syncfusionEj2Base.Property;
            addClass = _syncfusionEj2Base.addClass;
            append = _syncfusionEj2Base.append;
            attributes = _syncfusionEj2Base.attributes;
            cldrData = _syncfusionEj2Base.cldrData;
            closest = _syncfusionEj2Base.closest;
            createElement = _syncfusionEj2Base.createElement;
            detach = _syncfusionEj2Base.detach;
            extend = _syncfusionEj2Base.extend;
            formatUnit = _syncfusionEj2Base.formatUnit;
            getDefaultDateObject = _syncfusionEj2Base.getDefaultDateObject;
            getUniqueID = _syncfusionEj2Base.getUniqueID;
            getValue = _syncfusionEj2Base.getValue;
            isNullOrUndefined = _syncfusionEj2Base.isNullOrUndefined;
            isUndefined = _syncfusionEj2Base.isUndefined;
            merge = _syncfusionEj2Base.merge;
            prepend = _syncfusionEj2Base.prepend;
            remove = _syncfusionEj2Base.remove;
            removeClass = _syncfusionEj2Base.removeClass;
            rippleEffect = _syncfusionEj2Base.rippleEffect;
            select = _syncfusionEj2Base.select;
            setStyleAttribute = _syncfusionEj2Base.setStyleAttribute;
            setValue = _syncfusionEj2Base.setValue;
        }, function (_syncfusionEj2Popups) {
            Popup = _syncfusionEj2Popups.Popup;
        }, function (_syncfusionEj2Inputs) {
            Input = _syncfusionEj2Inputs.Input;
        }, function (_syncfusionEj2Buttons) {
            Button = _syncfusionEj2Buttons.Button;
        }, function (_syncfusionEj2Lists) {
            ListBase = _syncfusionEj2Lists.ListBase;
            cssClass = _syncfusionEj2Lists.cssClass;
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

            OTHERMONTH = 'e-other-month';
            ROOT = 'e-calendar';
            DEVICE = 'e-device';
            HEADER = 'e-header';
            RTL = 'e-rtl';
            CONTENT = 'e-content';
            YEAR = 'e-year';
            MONTH = 'e-month';
            DECADE = 'e-decade';
            ICON = 'e-icons';
            PREVICON = 'e-prev';
            NEXTICON = 'e-next';
            PREVSPAN = 'e-date-icon-prev';
            NEXTSPAN = 'e-date-icon-next ';
            ICONCONTAINER = 'e-icon-container';
            DISABLED = 'e-disabled';
            OVERLAY = 'e-overlay';
            WEEKEND = 'e-weekend';
            WEEKNUMBER = 'e-week-number';
            SELECTED = 'e-selected';
            FOCUSEDDATE = 'e-focused-date';
            OTHERMONTHROW = 'e-month-hide';
            TODAY = 'e-today';
            TITLE = 'e-title';
            LINK = 'e-day';
            CELL = 'e-cell';
            WEEKHEADER = 'e-week-header';
            ZOOMIN = 'e-zoomin';
            FOOTER = 'e-footer-container';
            BTN = 'e-btn';
            FLAT = 'e-flat';
            PRIMARY = 'e-primary';
            dayMilliSeconds = 86400000;
            minutesMilliSeconds = 60000;

            _export('CalendarBase', CalendarBase = function (_Component) {
                _inherits(CalendarBase, _Component);

                /**
                 * Initialized new instance of Calendar Class.
                 * Constructor for creating the widget
                 * @param  {CalendarModel} options?
                 * @param  {string|HTMLElement} element?
                 */
                function CalendarBase(options, element) {
                    _classCallCheck(this, CalendarBase);

                    var _this = _possibleConstructorReturn(this, (CalendarBase.__proto__ || Object.getPrototypeOf(CalendarBase)).call(this, options, element));

                    _this.effect = '';
                    _this.keyConfigs = {
                        controlUp: 'ctrl+38',
                        controlDown: 'ctrl+40',
                        moveDown: 'downarrow',
                        moveUp: 'uparrow',
                        moveLeft: 'leftarrow',
                        moveRight: 'rightarrow',
                        select: 'enter',
                        home: 'home',
                        end: 'end',
                        pageUp: 'pageup',
                        pageDown: 'pagedown',
                        shiftPageUp: 'shift+pageup',
                        shiftPageDown: 'shift+pagedown',
                        controlHome: 'ctrl+home',
                        controlEnd: 'ctrl+end',
                        altUpArrow: 'alt+uparrow',
                        spaceBar: 'space'
                    };
                    return _this;
                }
                /**
                 * To Initialize the control rendering.
                 * @returns void
                 * @private
                 */


                _createClass(CalendarBase, [{
                    key: 'render',
                    value: function render() {
                        this.globalize = new Internationalization(this.locale);
                        this.todayDisabled = false;
                        this.todayDate = new Date(new Date().setHours(0, 0, 0, 0));
                        if (this.getModuleName() === 'calendar') {
                            this.element.classList.add(ROOT);
                            if (this.enableRtl) {
                                this.element.classList.add(RTL);
                            }
                            if (Browser.isDevice) {
                                this.element.classList.add(DEVICE);
                            }
                            attributes(this.element, {
                                'data-role': 'calendar'
                            });
                        } else {
                            this.calendarElement = createElement('div');
                            this.calendarElement.classList.add(ROOT);
                            if (this.enableRtl) {
                                this.calendarElement.classList.add(RTL);
                            }
                            if (Browser.isDevice) {
                                this.calendarElement.classList.add(DEVICE);
                            }
                            attributes(this.calendarElement, {
                                'role': 'calendar'
                            });
                        }
                        this.createHeader();
                        this.createContent();
                        this.wireEvents();
                    }
                }, {
                    key: 'validateDate',
                    value: function validateDate(value) {
                        this.setProperties({ min: this.checkDateValue(new Date('' + this.min)) }, true);
                        this.setProperties({ max: this.checkDateValue(new Date('' + this.max)) }, true);
                        this.currentDate = this.currentDate ? this.currentDate : new Date(new Date().setHours(0, 0, 0, 0));
                        if (!isNullOrUndefined(value) && this.min <= this.max && value >= this.min && value <= this.max) {
                            this.currentDate = new Date('' + value);
                        }
                    }
                }, {
                    key: 'minMaxUpdate',
                    value: function minMaxUpdate(value) {
                        if (!(+this.min <= +this.max)) {
                            this.setProperties({ min: this.min }, true);
                            addClass([this.element], OVERLAY);
                        } else {
                            removeClass([this.element], OVERLAY);
                        }
                        this.min = isNullOrUndefined(this.min) || !+this.min ? this.min = new Date(1900, 0, 1) : this.min;
                        this.max = isNullOrUndefined(this.max) || !+this.max ? this.max = new Date(2099, 11, 31) : this.max;
                        if (+this.min <= +this.max && value && +value <= +this.max && +value >= +this.min) {
                            this.currentDate = new Date('' + value);
                        } else {
                            if (+this.min <= +this.max && !value && +this.currentDate > +this.max) {
                                this.currentDate = new Date('' + this.max);
                            } else {
                                if (+this.currentDate < +this.min) {
                                    this.currentDate = new Date('' + this.min);
                                }
                            }
                        }
                    }
                }, {
                    key: 'createHeader',
                    value: function createHeader() {
                        var ariaPrevAttrs = {
                            'aria-disabled': 'false',
                            'aria-label': 'previous month'
                        };
                        var ariaNextAttrs = {
                            'aria-disabled': 'false',
                            'aria-label': 'next month'
                        };
                        var ariaTitleAttrs = {
                            'aria-atomic': 'true', 'aria-live': 'assertive', 'aria-label': 'title'
                        };
                        this.headerElement = createElement('div', { className: HEADER });
                        var iconContainer = createElement('div', { className: ICONCONTAINER });
                        this.previousIcon = createElement('button', { className: '' + PREVICON, attrs: { type: 'button' } });
                        rippleEffect(this.previousIcon, {
                            duration: 400,
                            selector: '.e-prev',
                            isCenterRipple: true
                        });
                        attributes(this.previousIcon, ariaPrevAttrs);
                        this.nextIcon = createElement('button', { className: '' + NEXTICON, attrs: { type: 'button' } });
                        rippleEffect(this.nextIcon, {
                            selector: '.e-next',
                            duration: 400,
                            isCenterRipple: true
                        });
                        attributes(this.nextIcon, ariaNextAttrs);
                        this.headerTitleElement = createElement('div', { className: '' + LINK + ' ' + TITLE });
                        attributes(this.headerTitleElement, ariaTitleAttrs);
                        this.headerElement.appendChild(this.headerTitleElement);
                        this.previousIcon.appendChild(createElement('span', { className: '' + PREVSPAN + ' ' + ICON }));
                        this.nextIcon.appendChild(createElement('span', { className: '' + NEXTSPAN + ' ' + ICON }));
                        iconContainer.appendChild(this.previousIcon);
                        iconContainer.appendChild(this.nextIcon);
                        this.headerElement.appendChild(iconContainer);
                        if (this.getModuleName() === 'calendar') {
                            this.element.appendChild(this.headerElement);
                        } else {
                            this.calendarElement.appendChild(this.headerElement);
                        }
                    }
                }, {
                    key: 'createContent',
                    value: function createContent() {
                        this.contentElement = createElement('div', { className: CONTENT });
                        this.table = createElement('table', { attrs: { tabIndex: '0', 'role': 'grid', 'aria-activedescendant': '' } });
                        if (this.getModuleName() === 'calendar') {
                            this.element.appendChild(this.contentElement);
                        } else {
                            this.calendarElement.appendChild(this.contentElement);
                        }
                        this.contentElement.appendChild(this.table);
                        this.createContentHeader();
                        this.createContentBody();
                        if (this.showTodayButton) {
                            this.createContentFooter();
                        }
                    }
                }, {
                    key: 'getCultureValues',
                    value: function getCultureValues() {
                        var culShortNames = [];
                        var cldrObj = void 0;
                        if (this.locale === 'en' || this.locale === 'en-US') {
                            cldrObj = getValue('days.stand-alone.short', getDefaultDateObject());
                        } else {
                            cldrObj = this.getCultureObjects(cldrData, '' + this.locale);
                        }
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = Object.keys(cldrObj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var obj = _step.value;

                                culShortNames.push(getValue(obj, cldrObj));
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

                        return culShortNames;
                    }
                }, {
                    key: 'createContentHeader',
                    value: function createContentHeader() {
                        if (this.getModuleName() === 'calendar') {
                            if (!isNullOrUndefined(this.element.querySelectorAll('.e-content .e-week-header')[0])) {
                                detach(this.element.querySelectorAll('.e-content .e-week-header')[0]);
                            }
                        } else {
                            if (!isNullOrUndefined(this.calendarElement.querySelectorAll('.e-content .e-week-header')[0])) {
                                detach(this.calendarElement.querySelectorAll('.e-content .e-week-header')[0]);
                            }
                        }
                        var daysCount = 6;
                        var html = '';
                        var shortNames = void 0;
                        if (this.firstDayOfWeek > 6 || this.firstDayOfWeek < 0) {
                            this.setProperties({ firstDayOfWeek: 0 }, true);
                        }
                        this.tableHeadElement = createElement('thead', { className: WEEKHEADER });
                        if (this.weekNumber) {
                            html += '<th class="e-week-number"></th>';
                            if (this.getModuleName() === 'calendar') {
                                addClass([this.element], '' + WEEKNUMBER);
                            } else {
                                addClass([this.calendarElement], '' + WEEKNUMBER);
                            }
                        }
                        shortNames = this.shiftArray(this.getCultureValues().length > 0 && this.getCultureValues(), this.firstDayOfWeek);
                        for (var days = 0; days <= daysCount; days++) {
                            html += '<th  class="">' + shortNames[days] + '</th>';
                        }
                        html = '<tr>' + html + '</tr>';
                        this.tableHeadElement.innerHTML = html;
                        this.table.appendChild(this.tableHeadElement);
                    }
                }, {
                    key: 'createContentBody',
                    value: function createContentBody() {
                        if (this.getModuleName() === 'calendar') {
                            if (!isNullOrUndefined(this.element.querySelectorAll('.e-content tbody')[0])) {
                                detach(this.element.querySelectorAll('.e-content tbody')[0]);
                            }
                        } else {
                            if (!isNullOrUndefined(this.calendarElement.querySelectorAll('.e-content tbody')[0])) {
                                detach(this.calendarElement.querySelectorAll('.e-content tbody')[0]);
                            }
                        }
                        switch (this.start) {
                            case 'Year':
                                this.renderYears();
                                break;
                            case 'Decade':
                                this.renderDecades();
                                break;
                            default:
                                this.renderMonths();
                        }
                    }
                }, {
                    key: 'updateFooter',
                    value: function updateFooter() {
                        this.todayElement.textContent = this.l10.getConstant('today');
                    }
                }, {
                    key: 'createContentFooter',
                    value: function createContentFooter() {
                        if (this.showTodayButton) {
                            var minimum = new Date(+this.min);
                            var maximum = new Date(+this.max);
                            var l10nLocale = { today: 'Today' };
                            this.globalize = new Internationalization(this.locale);
                            this.l10 = new L10n(this.getModuleName(), l10nLocale, this.locale);
                            this.todayElement = createElement('button');
                            rippleEffect(this.todayElement);
                            this.updateFooter();
                            addClass([this.todayElement], [BTN, TODAY, FLAT, PRIMARY]);
                            if (!(+new Date(minimum.setHours(0, 0, 0, 0)) <= +this.todayDate && +this.todayDate <= +new Date(maximum.setHours(0, 0, 0, 0))) || this.todayDisabled) {
                                addClass([this.todayElement], DISABLED);
                            }
                            this.footer = createElement('div', { className: FOOTER });
                            this.footer.appendChild(this.todayElement);
                            if (this.getModuleName() === 'calendar') {
                                this.element.appendChild(this.footer);
                            }
                            if (this.getModuleName() === 'datepicker') {
                                this.calendarElement.appendChild(this.footer);
                            }
                            if (this.getModuleName() === 'datetimepicker') {
                                this.calendarElement.appendChild(this.footer);
                            }
                            if (!this.todayElement.classList.contains(DISABLED)) {
                                EventHandler.add(this.todayElement, 'click', this.todayButtonClick, this);
                            }
                        }
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        EventHandler.add(this.headerTitleElement, 'click', this.navigateTitle, this);
                        if (this.getModuleName() === 'calendar') {
                            this.keyboardModule = new KeyboardEvents(this.element, {
                                eventName: 'keydown',
                                keyAction: this.keyActionHandle.bind(this),
                                keyConfigs: this.keyConfigs
                            });
                        } else {
                            this.keyboardModule = new KeyboardEvents(this.calendarElement, {
                                eventName: 'keydown',
                                keyAction: this.keyActionHandle.bind(this),
                                keyConfigs: this.keyConfigs
                            });
                        }
                    }
                }, {
                    key: 'todayButtonClick',
                    value: function todayButtonClick(value) {
                        if (this.showTodayButton) {
                            if (this.getViewNumber(this.start) >= this.getViewNumber(this.depth)) {
                                this.navigateTo(this.depth, new Date('' + value));
                            } else {
                                this.navigateTo('Month', new Date('' + value));
                            }
                            this.effect = '';
                        }
                    }
                }, {
                    key: 'keyActionHandle',
                    value: function keyActionHandle(e, value) {
                        var view = this.getViewNumber(this.currentView());
                        var focusedDate = this.tableBodyElement.querySelector('tr td.e-focused-date');
                        var selectedDate = this.tableBodyElement.querySelector('tr td.e-selected');
                        var depthValue = this.getViewNumber(this.depth);
                        var levelRestrict = view === depthValue && this.getViewNumber(this.start) >= depthValue;
                        this.effect = '';
                        switch (e.action) {
                            case 'moveLeft':
                                this.KeyboardNavigate(-1, view, e, this.max, this.min);
                                e.preventDefault();
                                break;
                            case 'moveRight':
                                this.KeyboardNavigate(1, view, e, this.max, this.min);
                                e.preventDefault();
                                break;
                            case 'moveUp':
                                if (view === 0) {
                                    this.KeyboardNavigate(-7, view, e, this.max, this.min); // move the current date to the previous seven days.
                                } else {
                                    this.KeyboardNavigate(-4, view, e, this.max, this.min); // move the current year to the previous four days.
                                }
                                e.preventDefault();
                                break;
                            case 'moveDown':
                                if (view === 0) {
                                    this.KeyboardNavigate(7, view, e, this.max, this.min);
                                } else {
                                    this.KeyboardNavigate(4, view, e, this.max, this.min);
                                }
                                e.preventDefault();
                                break;
                            case 'select':
                                if (e.target === this.todayElement) {
                                    this.todayButtonClick(value);
                                } else {
                                    var element = !isNullOrUndefined(focusedDate) ? focusedDate : selectedDate;
                                    if (!isNullOrUndefined(element) && !element.classList.contains(DISABLED)) {
                                        if (levelRestrict) {
                                            var d = new Date(parseInt('' + element.id, 0));
                                            this.selectDate(e, d, element, value);
                                        } else {
                                            this.contentClick(null, --view, element, value);
                                        }
                                    }
                                }
                                break;
                            case 'controlUp':
                                this.title();
                                e.preventDefault();
                                break;
                            case 'controlDown':
                                if (!isNullOrUndefined(focusedDate) || !isNullOrUndefined(selectedDate) && !levelRestrict) {
                                    this.contentClick(null, --view, focusedDate || selectedDate, value);
                                }
                                e.preventDefault();
                                break;
                            case 'home':
                                this.currentDate = this.firstDay(this.currentDate);
                                detach(this.tableBodyElement);
                                this.renderMonths(e);
                                e.preventDefault();
                                break;
                            case 'end':
                                this.currentDate = this.lastDay(this.currentDate);
                                detach(this.tableBodyElement);
                                this.renderMonths(e);
                                e.preventDefault();
                                break;
                            case 'pageUp':
                                this.addMonths(this.currentDate, -1);
                                this.navigateTo('Month', this.currentDate);
                                e.preventDefault();
                                break;
                            case 'pageDown':
                                this.addMonths(this.currentDate, 1);
                                this.navigateTo('Month', this.currentDate);
                                e.preventDefault();
                                break;
                            case 'shiftPageUp':
                                this.addYears(this.currentDate, -1);
                                this.navigateTo('Month', this.currentDate);
                                e.preventDefault();
                                break;
                            case 'shiftPageDown':
                                this.addYears(this.currentDate, 1);
                                this.navigateTo('Month', this.currentDate);
                                e.preventDefault();
                                break;
                            case 'controlHome':
                                this.navigateTo('Month', new Date(this.currentDate.getFullYear(), 0, 1));
                                e.preventDefault();
                                break;
                            case 'controlEnd':
                                this.navigateTo('Month', new Date(this.currentDate.getFullYear(), 11, 31));
                                e.preventDefault();
                                break;
                        }
                        if (this.getModuleName() === 'calendar') {
                            this.table.focus();
                        }
                    }
                }, {
                    key: 'KeyboardNavigate',
                    value: function KeyboardNavigate(number, currentView, e, max, min) {
                        var date = new Date('' + this.currentDate);
                        switch (currentView) {
                            case 2:
                                this.addYears(this.currentDate, number);
                                if (this.isMinMaxRange(this.currentDate)) {
                                    detach(this.tableBodyElement);
                                    this.renderDecades(e);
                                } else {
                                    this.currentDate = date;
                                }
                                break;
                            case 1:
                                this.addMonths(this.currentDate, number);
                                if (this.isMinMaxRange(this.currentDate)) {
                                    detach(this.tableBodyElement);
                                    this.renderYears(e);
                                } else {
                                    this.currentDate = date;
                                }
                                break;
                            case 0:
                                this.addDay(this.currentDate, number, e, max, min);
                                if (this.isMinMaxRange(this.currentDate)) {
                                    detach(this.tableBodyElement);
                                    this.renderMonths(e);
                                } else {
                                    this.currentDate = date;
                                }
                                break;
                        }
                    }
                }, {
                    key: 'preRender',
                    value: function preRender(value) {
                        var _this2 = this;

                        this.navigatePreviousHandler = this.navigatePrevious.bind(this);
                        this.navigateNextHandler = this.navigateNext.bind(this);
                        this.navigateHandler = function (e) {
                            _this2.triggerNavigate(e);
                        };
                    }
                }, {
                    key: 'minMaxDate',
                    value: function minMaxDate(localDate) {
                        var currentDate = new Date(new Date(+localDate).setHours(0, 0, 0, 0));
                        var minDate = new Date(new Date(+this.min).setHours(0, 0, 0, 0));
                        var maxDate = new Date(new Date(+this.max).setHours(0, 0, 0, 0));
                        if (+currentDate === +minDate || +currentDate === +maxDate) {
                            if (+localDate < +this.min) {
                                localDate = new Date(+this.min);
                            }
                            if (+localDate > +this.max) {
                                localDate = new Date(+this.max);
                            }
                        }
                        return localDate;
                    }
                }, {
                    key: 'renderMonths',
                    value: function renderMonths(e, value) {
                        var numCells = this.weekNumber ? 8 : 7;
                        var tdEles = this.renderDays(this.currentDate, e, value);
                        this.createContentHeader();
                        this.renderTemplate(tdEles, numCells, MONTH, e, value);
                    }
                }, {
                    key: 'renderDays',
                    value: function renderDays(currentDate, e, value) {
                        var tdEles = [];
                        var cellsCount = 42;
                        var localDate = new Date('' + currentDate);
                        var minMaxDate = void 0;
                        var numCells = this.weekNumber ? 8 : 7;
                        // 8 and 7 denotes the number of columns to be specified.
                        var currentMonth = localDate.getMonth();
                        this.titleUpdate(currentDate, 'days');
                        var d = localDate;
                        localDate = new Date(d.getFullYear(), d.getMonth(), 0, d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                        while (localDate.getDay() !== this.firstDayOfWeek) {
                            this.setStartDate(localDate, -1 * dayMilliSeconds);
                        }
                        for (var day = 0; day < cellsCount; ++day) {
                            var weekEle = createElement('td', { className: CELL });
                            var weekAnchor = createElement('span');
                            if (day % 7 === 0 && this.weekNumber) {
                                weekAnchor.textContent = '' + this.getWeek(localDate);
                                weekEle.appendChild(weekAnchor);
                                addClass([weekEle], '' + WEEKNUMBER);
                                tdEles.push(weekEle);
                            }
                            minMaxDate = new Date(+localDate);
                            localDate = this.minMaxDate(localDate);
                            var dateFormatOptions = { type: 'dateTime', skeleton: 'full' };
                            var date = this.globalize.parseDate(this.globalize.formatDate(localDate, dateFormatOptions), dateFormatOptions);
                            var tdEle = this.dayCell(localDate);
                            var title = this.globalize.formatDate(localDate, { type: 'date', skeleton: 'full' });
                            var dayLink = createElement('span');
                            dayLink.textContent = this.globalize.formatDate(localDate, { type: 'date', skeleton: 'd' });
                            var disabled = this.min > localDate || this.max < localDate;
                            if (disabled) {
                                addClass([tdEle], DISABLED);
                                addClass([tdEle], OVERLAY);
                            } else {
                                dayLink.setAttribute('title', '' + title);
                            }
                            if (currentMonth !== localDate.getMonth()) {
                                addClass([tdEle], OTHERMONTH);
                            }
                            if (localDate.getDay() === 0 || localDate.getDay() === 6) {
                                addClass([tdEle], WEEKEND);
                            }
                            tdEle.appendChild(dayLink);
                            this.renderDayCellArgs = {
                                date: localDate,
                                isDisabled: false,
                                element: tdEle,
                                isOutOfRange: disabled
                            };
                            var argument = this.renderDayCellArgs;
                            this.renderDayCellEvent(argument);
                            if (argument.isDisabled) {
                                if (value && +value === +argument.date) {
                                    this.setProperties({ value: null }, true);
                                }
                            }
                            if (this.renderDayCellArgs.isDisabled && !tdEle.classList.contains(SELECTED)) {
                                addClass([tdEle], DISABLED);
                                addClass([tdEle], OVERLAY);
                                if (+this.renderDayCellArgs.date === +this.todayDate) {
                                    this.todayDisabled = true;
                                }
                            }
                            var otherMnthBool = tdEle.classList.contains(OTHERMONTH);
                            var disabledCls = tdEle.classList.contains(DISABLED);
                            if (!disabledCls) {
                                EventHandler.add(tdEle, 'click', this.clickHandler, this);
                            }
                            // to set the value as null while setting the disabled date onProperty change.
                            // if (args.isDisabled && +this.value === +args.date) {
                            //     this.setProperties({ value: null }, true);
                            // }
                            if (!otherMnthBool && !disabledCls && this.getDateVal(localDate, value)) {
                                addClass([tdEle], SELECTED);
                            } else {
                                if (currentDate.getDate() === localDate.getDate() && !otherMnthBool && !disabledCls) {
                                    addClass([tdEle], FOCUSEDDATE);
                                } else {
                                    if (currentDate >= this.max && parseInt(tdEle.id, 0) === +this.max && !otherMnthBool && !disabledCls) {
                                        addClass([tdEle], FOCUSEDDATE);
                                    }
                                    if (currentDate <= this.min && parseInt(tdEle.id, 0) === +this.min && !otherMnthBool && !disabledCls) {
                                        addClass([tdEle], FOCUSEDDATE);
                                    }
                                }
                            }
                            if (date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate()) {
                                if (date.getFullYear() === new Date().getFullYear()) {
                                    addClass([tdEle], TODAY);
                                }
                            }
                            tdEles.push(this.renderDayCellArgs.element);
                            localDate = new Date(+minMaxDate);
                            this.addDay(localDate, 1, null, this.max, this.min);
                        }
                        return tdEles;
                    }
                }, {
                    key: 'renderYears',
                    value: function renderYears(e, value) {
                        this.removeTableHeadElement();
                        var numCells = 4;
                        var tdEles = [];
                        var valueUtil = isNullOrUndefined(value);
                        var curDate = new Date('' + this.currentDate);
                        var mon = curDate.getMonth();
                        var yr = curDate.getFullYear();
                        var localDate = curDate;
                        var curYrs = localDate.getFullYear();
                        var minYr = new Date('' + this.min).getFullYear();
                        var minMonth = new Date('' + this.min).getMonth();
                        var maxYr = new Date('' + this.max).getFullYear();
                        var maxMonth = new Date('' + this.max).getMonth();
                        localDate.setMonth(0);
                        this.titleUpdate(this.currentDate, 'months');
                        var disabled = this.min > localDate || this.max < localDate;
                        localDate.setDate(1);
                        for (var month = 0; month < 12; ++month) {
                            var tdEle = this.dayCell(localDate);
                            var dayLink = createElement('span');
                            var localMonth = value && value.getMonth() === localDate.getMonth();
                            var select$$1 = value && value.getFullYear() === yr && localMonth;
                            dayLink.textContent = this.globalize.formatDate(localDate, { type: 'dateTime', skeleton: 'MMM' });
                            if (this.min && (curYrs < minYr || month < minMonth && curYrs === minYr) || this.max && (curYrs > maxYr || month > maxMonth && curYrs >= maxYr)) {
                                addClass([tdEle], DISABLED);
                            } else if (!valueUtil && select$$1) {
                                addClass([tdEle], SELECTED);
                            } else {
                                if (localDate.getMonth() === mon && this.currentDate.getMonth() === mon) {
                                    addClass([tdEle], FOCUSEDDATE);
                                }
                            }
                            localDate.setDate(1);
                            localDate.setMonth(localDate.getMonth() + 1);
                            if (!tdEle.classList.contains(DISABLED)) {
                                EventHandler.add(tdEle, 'click', this.clickHandler, this);
                            }
                            tdEle.appendChild(dayLink);
                            tdEles.push(tdEle);
                        }
                        this.renderTemplate(tdEles, numCells, YEAR, e, value);
                    }
                }, {
                    key: 'renderDecades',
                    value: function renderDecades(e, value) {
                        this.removeTableHeadElement();
                        var numCells = 4;
                        var yearCell = 12;
                        var tdEles = [];
                        var localDate = new Date('' + this.currentDate);
                        localDate.setMonth(0);
                        localDate.setDate(1);
                        var localYr = localDate.getFullYear();
                        var startYr = new Date('' + (localYr - localYr % 10));
                        var endYr = new Date('' + (localYr - localYr % 10 + (10 - 1)));
                        var startHdrYr = this.globalize.formatDate(startYr, { type: 'dateTime', skeleton: 'y' });
                        var endHdrYr = this.globalize.formatDate(endYr, { type: 'dateTime', skeleton: 'y' });
                        this.headerTitleElement.textContent = startHdrYr + ' - ' + endHdrYr;
                        var start = new Date(localYr - localYr % 10 - 1, 0, 1);
                        var startYear = start.getFullYear();
                        for (var rowIterator = 0; rowIterator < yearCell; ++rowIterator) {
                            var year = startYear + rowIterator;
                            localDate.setFullYear(year);
                            var tdEle = this.dayCell(localDate);
                            attributes(tdEle, { 'role': 'gridcell' });
                            var dayLink = createElement('span');
                            dayLink.textContent = this.globalize.formatDate(localDate, { type: 'dateTime', skeleton: 'y' });
                            if (year < new Date('' + this.min).getFullYear() || year > new Date('' + this.max).getFullYear()) {
                                addClass([tdEle], DISABLED);
                            } else if (!isNullOrUndefined(value) && localDate.getFullYear() === value.getFullYear()) {
                                addClass([tdEle], SELECTED);
                            } else {
                                if (localDate.getFullYear() === this.currentDate.getFullYear() && !tdEle.classList.contains(DISABLED)) {
                                    addClass([tdEle], FOCUSEDDATE);
                                }
                            }
                            if (!tdEle.classList.contains(DISABLED)) {
                                EventHandler.add(tdEle, 'click', this.clickHandler, this);
                            }
                            tdEle.appendChild(dayLink);
                            tdEles.push(tdEle);
                        }
                        this.renderTemplate(tdEles, numCells, 'e-decade', e, value);
                    }
                }, {
                    key: 'dayCell',
                    value: function dayCell(localDate) {
                        var dateFormatOptions = { skeleton: 'full', type: 'dateTime' };
                        var date = this.globalize.parseDate(this.globalize.formatDate(localDate, dateFormatOptions), dateFormatOptions);
                        var value = date.valueOf();
                        var attrs = {
                            className: CELL, attrs: { 'id': '' + getUniqueID('' + value), 'aria-selected': 'false', 'role': 'gridcell' }
                        };
                        return createElement('td', attrs);
                    }
                }, {
                    key: 'firstDay',
                    value: function firstDay(date) {
                        var collection = this.tableBodyElement.querySelectorAll('td' + ':not(.' + OTHERMONTH + '');
                        if (collection.length) {
                            for (var i = 0; i < collection.length; i++) {
                                if (!collection[i].classList.contains(DISABLED)) {
                                    date = new Date(parseInt(collection[i].id, 0));
                                    break;
                                }
                            }
                        }
                        return date;
                    }
                }, {
                    key: 'lastDay',
                    value: function lastDay(date) {
                        var lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                        var timeOffset = Math.abs(lastDate.getTimezoneOffset() - this.firstDay(date).getTimezoneOffset());
                        if (timeOffset) {
                            lastDate.setHours(this.firstDay(date).getHours() + timeOffset / 60);
                        }
                        return this.findLastDay(lastDate);
                    }
                }, {
                    key: 'checkDateValue',
                    value: function checkDateValue(value) {
                        return !isNullOrUndefined(value) && value instanceof Date && !isNaN(+value) ? value : null;
                    }
                }, {
                    key: 'findLastDay',
                    value: function findLastDay(date) {
                        var collection = this.tableBodyElement.querySelectorAll('td' + ':not(.' + OTHERMONTH + '');
                        if (collection.length) {
                            for (var i = collection.length - 1; i >= 0; i--) {
                                if (!collection[i].classList.contains(DISABLED)) {
                                    date = new Date(parseInt(collection[i].id, 0));
                                    break;
                                }
                            }
                        }
                        return date;
                    }
                }, {
                    key: 'removeTableHeadElement',
                    value: function removeTableHeadElement() {
                        if (this.getModuleName() === 'calendar') {
                            if (!isNullOrUndefined(this.element.querySelectorAll('.e-content table thead')[0])) {
                                detach(this.tableHeadElement);
                            }
                        } else {
                            if (!isNullOrUndefined(this.calendarElement.querySelectorAll('.e-content table thead')[0])) {
                                detach(this.tableHeadElement);
                            }
                        }
                    }
                }, {
                    key: 'renderTemplate',
                    value: function renderTemplate(elements, count, classNm, e, value) {
                        var view = this.getViewNumber(this.currentView());
                        var trEle = void 0;
                        this.tableBodyElement = createElement('tbody');
                        this.table.appendChild(this.tableBodyElement);
                        removeClass([this.contentElement, this.headerElement], [MONTH, DECADE, YEAR]);
                        addClass([this.contentElement, this.headerElement], [classNm]);
                        var weekNumCell = 41;
                        var numberCell = 35;
                        var otherMonthCell = 6;
                        var row = count;
                        var rowIterator = 0;
                        for (var dayCell = 0; dayCell < elements.length / count; ++dayCell) {
                            trEle = createElement('tr', { attrs: { 'role': 'row' } });
                            for (rowIterator = 0 + rowIterator; rowIterator < row; rowIterator++) {
                                if (!elements[rowIterator].classList.contains('e-week-number') && !isNullOrUndefined(elements[rowIterator].children[0])) {
                                    addClass([elements[rowIterator].children[0]], [LINK]);
                                    rippleEffect(elements[rowIterator].children[0], {
                                        duration: 600,
                                        isCenterRipple: true
                                    });
                                }
                                trEle.appendChild(elements[rowIterator]);
                                if (!this.weekNumber && rowIterator === otherMonthCell && elements[otherMonthCell].classList.contains(OTHERMONTH)) {
                                    addClass([trEle], OTHERMONTHROW);
                                }
                                if (this.weekNumber) {
                                    if (rowIterator === weekNumCell && elements[weekNumCell].classList.contains(OTHERMONTH)) {
                                        addClass([trEle], OTHERMONTHROW);
                                    }
                                } else {
                                    if (rowIterator === numberCell && elements[numberCell].classList.contains(OTHERMONTH)) {
                                        addClass([trEle], OTHERMONTHROW);
                                    }
                                }
                            }
                            row = row + count;
                            rowIterator = rowIterator + 0;
                            this.tableBodyElement.appendChild(trEle);
                        }
                        this.table.querySelector('tbody').className = this.effect;
                        this.iconHandler();
                        if (view !== this.getViewNumber(this.currentView()) || view === 0 && view !== this.getViewNumber(this.currentView())) {
                            this.navigateHandler(e);
                        }
                        this.setAriaActiveDescendant();
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(e, value) {
                        this.clickEventEmitter(e);
                        var eve = e.currentTarget;
                        var view = this.getViewNumber(this.currentView());
                        if (eve.classList.contains(OTHERMONTH)) {
                            this.contentClick(e, 0, null, value);
                        } else if (view === this.getViewNumber(this.depth) && this.getViewNumber(this.start) >= this.getViewNumber(this.depth)) {
                            this.contentClick(e, 1, null, value);
                        } else if (2 === view) {
                            this.contentClick(e, 1, null, value);
                        } else if (!eve.classList.contains(OTHERMONTH) && view === 0) {
                            this.selectDate(e, this.getIdValue(e, null), null, value);
                        } else {
                            this.contentClick(e, 0, eve, value);
                        }
                        if (this.getModuleName() === 'calendar') {
                            this.table.focus();
                        }
                    }
                }, {
                    key: 'clickEventEmitter',
                    value: function clickEventEmitter(e) {
                        e.preventDefault();
                    }
                }, {
                    key: 'contentClick',
                    value: function contentClick(e, view, element, value) {
                        var currentView = this.getViewNumber(this.currentView());
                        var d = this.getIdValue(e, element);
                        switch (view) {
                            case 0:
                                if (currentView === this.getViewNumber(this.depth) && this.getViewNumber(this.start) >= this.getViewNumber(this.depth)) {
                                    detach(this.tableBodyElement);
                                    this.currentDate = d;
                                    this.effect = ZOOMIN;
                                    this.renderMonths(e);
                                } else {
                                    this.currentDate.setMonth(d.getMonth());
                                    if (d.getMonth() > 0 && this.currentDate.getMonth() !== d.getMonth()) {
                                        this.currentDate.setDate(0);
                                    }
                                    this.currentDate.setFullYear(d.getFullYear());
                                    this.effect = ZOOMIN;
                                    detach(this.tableBodyElement);
                                    this.renderMonths(e);
                                }
                                break;
                            case 1:
                                if (currentView === this.getViewNumber(this.depth) && this.getViewNumber(this.start) >= this.getViewNumber(this.depth)) {
                                    this.selectDate(e, d, null, value);
                                } else {
                                    this.currentDate.setFullYear(d.getFullYear());
                                    this.effect = ZOOMIN;
                                    detach(this.tableBodyElement);
                                    this.renderYears(e);
                                }
                        }
                    }
                }, {
                    key: 'switchView',
                    value: function switchView(view, e) {
                        switch (view) {
                            case 0:
                                detach(this.tableBodyElement);
                                this.renderMonths(e);
                                break;
                            case 1:
                                detach(this.tableBodyElement);
                                this.renderYears(e);
                                break;
                            case 2:
                                detach(this.tableBodyElement);
                                this.renderDecades(e);
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'calendar';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        var keyEntity = ['value'];
                        return this.addOnPersist(keyEntity);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        this.effect = '';
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(newProp)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var prop = _step2.value;

                                switch (prop) {
                                    case 'enableRtl':
                                        if (newProp.enableRtl) {
                                            if (this.getModuleName() === 'calendar') {
                                                this.element.classList.add('e-rtl');
                                            } else {
                                                this.calendarElement.classList.add('e-rtl');
                                            }
                                        } else {
                                            if (this.getModuleName() === 'calendar') {
                                                this.element.classList.remove('e-rtl');
                                            } else {
                                                this.calendarElement.classList.remove('e-rtl');
                                            }
                                        }
                                        break;
                                    case 'min':
                                    case 'max':
                                        prop === 'min' ? this.setProperties({ min: this.checkDateValue(new Date('' + newProp.min)) }, true) : this.setProperties({ max: this.checkDateValue(new Date('' + newProp.max)) }, true);
                                        this.setProperties({ start: this.currentView() }, true);
                                        detach(this.tableBodyElement);
                                        this.minMaxUpdate();
                                        this.createContentBody();
                                        if ((this.todayDate < this.min || this.max < this.todayDate) && this.footer && this.todayElement) {
                                            detach(this.todayElement);
                                            detach(this.footer);
                                            this.todayElement = this.footer = undefined;
                                            this.createContentFooter();
                                        } else {
                                            if (this.todayElement.classList.contains('e-disabled') && this.footer && this.todayElement) {
                                                removeClass([this.todayElement], DISABLED);
                                            }
                                        }
                                        break;
                                    case 'start':
                                    case 'weekNumber':
                                    case 'firstDayOfWeek':
                                        this.createContentHeader();
                                        this.createContentBody();
                                        break;
                                    case 'locale':
                                        this.globalize = new Internationalization(this.locale);
                                        this.createContentHeader();
                                        this.createContentBody();
                                        this.l10.setLocale(this.locale);
                                        this.updateFooter();
                                        break;
                                    case 'showTodayButton':
                                        if (newProp.showTodayButton) {
                                            this.createContentFooter();
                                        } else {
                                            detach(this.todayElement);
                                            detach(this.footer);
                                            this.todayElement = this.footer = undefined;
                                        }
                                        this.setProperties({ showTodayButton: newProp.showTodayButton }, true);
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
                    key: 'setValueUpdate',
                    value: function setValueUpdate() {
                        detach(this.tableBodyElement);
                        this.setProperties({ start: this.currentView() }, true);
                        this.createContentBody();
                    }
                }, {
                    key: 'titleUpdate',
                    value: function titleUpdate(date, view) {
                        var globalize = new Internationalization(this.locale);
                        switch (view) {
                            case 'days':
                                this.headerTitleElement.textContent = globalize.formatDate(date, { type: 'dateTime', skeleton: 'yMMMM' });
                                break;
                            case 'months':
                                this.headerTitleElement.textContent = globalize.formatDate(date, { type: 'dateTime', skeleton: 'y' });
                        }
                    }
                }, {
                    key: 'setActiveDescendant',
                    value: function setActiveDescendant() {
                        var id = void 0;
                        var focusedEle = this.tableBodyElement.querySelector('tr td.e-focused-date');
                        var selectedEle = this.tableBodyElement.querySelector('tr td.e-selected');
                        var title = this.globalize.formatDate(this.currentDate, { type: 'date', skeleton: 'full' });
                        if (selectedEle || focusedEle) {
                            (focusedEle || selectedEle).setAttribute('aria-selected', 'true');
                            (focusedEle || selectedEle).setAttribute('aria-label', 'The current focused date is ' + '' + title);
                            id = (focusedEle || selectedEle).getAttribute('id');
                        }
                        return id;
                    }
                }, {
                    key: 'iconHandler',
                    value: function iconHandler() {
                        new Date('' + this.currentDate).setDate(1);
                        switch (this.currentView()) {
                            case 'Month':
                                this.previousIconHandler(this.compareMonth(new Date('' + this.currentDate), this.min) < 1);
                                this.nextIconHandler(this.compareMonth(new Date('' + this.currentDate), this.max) > -1);
                                break;
                            case 'Year':
                                this.previousIconHandler(this.compareYear(new Date('' + this.currentDate), this.min) < 1);
                                this.nextIconHandler(this.compareYear(new Date('' + this.currentDate), this.max) > -1);
                                break;
                            case 'Decade':
                                this.previousIconHandler(this.compareDecade(new Date('' + this.currentDate), this.min) < 1);
                                this.nextIconHandler(this.compareDecade(new Date('' + this.currentDate), this.max) > -1);
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this.getModuleName() === 'calendar') {
                            removeClass([this.element], [ROOT]);
                        } else {
                            if (this.calendarElement) {
                                removeClass([this.element], [ROOT]);
                            }
                        }
                        if (this.getModuleName() === 'calendar') {
                            EventHandler.remove(this.headerTitleElement, 'click', this.navigateTitle);
                            if (this.todayElement) {
                                EventHandler.remove(this.todayElement, 'click', this.todayButtonClick);
                            }
                            this.previousIconHandler(true);
                            this.nextIconHandler(true);
                            this.keyboardModule.destroy();
                            this.element.removeAttribute('data-role');
                        }
                        this.element.innerHTML = '';
                        _get(CalendarBase.prototype.__proto__ || Object.getPrototypeOf(CalendarBase.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'title',
                    value: function title(e) {
                        var currentView = this.getViewNumber(this.currentView());
                        this.effect = ZOOMIN;
                        this.switchView(++currentView, e);
                    }
                }, {
                    key: 'getViewNumber',
                    value: function getViewNumber(stringVal) {
                        if (stringVal === 'Month') {
                            return 0;
                        } else if (stringVal === 'Year') {
                            return 1;
                        } else {
                            return 2;
                        }
                    }
                }, {
                    key: 'navigateTitle',
                    value: function navigateTitle(e) {
                        e.preventDefault();
                        this.title(e);
                        if (this.getModuleName() === 'calendar') {
                            this.table.focus();
                        }
                    }
                }, {
                    key: 'previous',
                    value: function previous() {
                        this.effect = '';
                        var currentView = this.getViewNumber(this.currentView());
                        switch (this.currentView()) {
                            case 'Month':
                                this.addMonths(this.currentDate, -1);
                                this.switchView(currentView);
                                break;
                            case 'Year':
                                this.addYears(this.currentDate, -1);
                                this.switchView(currentView);
                                break;
                            case 'Decade':
                                this.addYears(this.currentDate, -10);
                                this.switchView(currentView);
                                break;
                        }
                    }
                }, {
                    key: 'navigatePrevious',
                    value: function navigatePrevious(e) {
                        e.preventDefault();
                        this.previous();
                        this.triggerNavigate(e);
                        if (this.getModuleName() === 'calendar') {
                            this.table.focus();
                        }
                    }
                }, {
                    key: 'next',
                    value: function next() {
                        this.effect = '';
                        var currentView = this.getViewNumber(this.currentView());
                        switch (this.currentView()) {
                            case 'Month':
                                this.addMonths(this.currentDate, 1);
                                this.switchView(currentView);
                                break;
                            case 'Year':
                                this.addYears(this.currentDate, 1);
                                this.switchView(currentView);
                                break;
                            case 'Decade':
                                this.addYears(this.currentDate, 10);
                                this.switchView(currentView);
                                break;
                        }
                    }
                }, {
                    key: 'navigateNext',
                    value: function navigateNext(eve) {
                        eve.preventDefault();
                        this.next();
                        this.triggerNavigate(eve);
                        if (this.getModuleName() === 'calendar') {
                            this.table.focus();
                        }
                    }
                }, {
                    key: 'navigateTo',
                    value: function navigateTo(view, date) {
                        if (+date >= +this.min && +date <= +this.max) {
                            this.currentDate = date;
                        }
                        if (+date <= +this.min) {
                            this.currentDate = new Date('' + this.min);
                        }
                        if (+date >= +this.max) {
                            this.currentDate = new Date('' + this.max);
                        }
                        if (this.getModuleName() === 'daterangepicker') {
                            this.currentDate = date;
                        }
                        if (this.getViewNumber(this.depth) >= this.getViewNumber(view)) {
                            if (this.getViewNumber(this.depth) <= this.getViewNumber(this.start) || this.getViewNumber(this.depth) === this.getViewNumber(view)) {
                                view = this.depth;
                            }
                        }
                        this.switchView(this.getViewNumber(view));
                    }
                }, {
                    key: 'currentView',
                    value: function currentView() {
                        if (this.contentElement.classList.contains(YEAR)) {
                            return 'Year';
                        } else if (this.contentElement.classList.contains(DECADE)) {
                            return 'Decade';
                        } else {
                            return 'Month';
                        }
                    }
                }, {
                    key: 'getDateVal',
                    value: function getDateVal(date, value) {
                        return !isNullOrUndefined(value) && date.getDate() === value.getDate() && date.getMonth() === value.getMonth() && date.getFullYear() === value.getFullYear();
                    }
                }, {
                    key: 'getCultureObjects',
                    value: function getCultureObjects(ld, c) {
                        return getValue('main.' + '' + this.locale + '.dates.calendars.gregorian.days.format.short', ld);
                    }
                }, {
                    key: 'getWeek',
                    value: function getWeek(d) {
                        var currentDate = new Date('' + d).valueOf();
                        var date = new Date(d.getFullYear(), 0, 1).valueOf();
                        var a = currentDate - date;
                        return Math.ceil((a / dayMilliSeconds + new Date(date).getDay() + 1) / 7);
                    }
                }, {
                    key: 'setStartDate',
                    value: function setStartDate(date, time) {
                        var tzOffset = date.getTimezoneOffset();
                        var d = new Date(date.getTime() + time);
                        var tzOffsetDiff = d.getTimezoneOffset() - tzOffset;
                        date.setTime(d.getTime() + tzOffsetDiff * minutesMilliSeconds);
                    }
                }, {
                    key: 'addMonths',
                    value: function addMonths(date, i) {
                        var day = date.getDate();
                        date.setDate(1);
                        date.setMonth(date.getMonth() + i);
                        date.setDate(Math.min(day, this.getMaxDays(date)));
                    }
                }, {
                    key: 'addYears',
                    value: function addYears(date, i) {
                        var day = date.getDate();
                        date.setDate(1);
                        date.setFullYear(date.getFullYear() + i);
                        date.setDate(Math.min(day, this.getMaxDays(date)));
                    }
                }, {
                    key: 'getIdValue',
                    value: function getIdValue(e, element) {
                        var eve = void 0;
                        if (e) {
                            eve = e.currentTarget;
                        } else {
                            eve = element;
                        }
                        var dateFormatOptions = { type: 'dateTime', skeleton: 'full' };
                        var dateString = this.globalize.formatDate(new Date(parseInt('' + eve.getAttribute('id'), 0)), dateFormatOptions);
                        var date = this.globalize.parseDate(dateString, dateFormatOptions);
                        var value = date.valueOf() - date.valueOf() % 1000;
                        return new Date(value);
                        //return this.globalize.parseDate(dateString, dateFormatOptions);
                    }
                }, {
                    key: 'selectDate',
                    value: function selectDate(e, date, node, value) {
                        var element = node || e.currentTarget;
                        if (this.currentView() === 'Decade') {
                            this.setDateDecade(this.currentDate, date.getFullYear());
                        } else if (this.currentView() === 'Year') {
                            this.setDateYear(this.currentDate, date);
                        } else {
                            this.setProperties({ value: new Date('' + date) }, true);
                            this.currentDate = new Date('' + date);
                        }
                        var tableBodyElement = closest(element, '.' + ROOT);
                        if (isNullOrUndefined(tableBodyElement)) {
                            tableBodyElement = this.tableBodyElement;
                        }
                        if (!isNullOrUndefined(tableBodyElement.querySelector('.' + SELECTED))) {
                            removeClass([tableBodyElement.querySelector('.' + SELECTED)], SELECTED);
                        }
                        if (!isNullOrUndefined(tableBodyElement.querySelector('.' + FOCUSEDDATE))) {
                            removeClass([tableBodyElement.querySelector('.' + FOCUSEDDATE)], FOCUSEDDATE);
                        }
                        addClass([element], SELECTED);
                    }
                }, {
                    key: 'setAriaActiveDescendant',
                    value: function setAriaActiveDescendant() {
                        attributes(this.table, {
                            'aria-activedescendant': '' + this.setActiveDescendant()
                        });
                    }
                }, {
                    key: 'previousIconHandler',
                    value: function previousIconHandler(disabled) {
                        if (disabled) {
                            EventHandler.remove(this.previousIcon, 'click', this.navigatePreviousHandler);
                            addClass([this.previousIcon], '' + DISABLED);
                            addClass([this.previousIcon], '' + OVERLAY);
                            this.previousIcon.setAttribute('aria-disabled', 'true');
                        } else {
                            EventHandler.add(this.previousIcon, 'click', this.navigatePreviousHandler);
                            removeClass([this.previousIcon], '' + DISABLED);
                            removeClass([this.previousIcon], '' + OVERLAY);
                            this.previousIcon.setAttribute('aria-disabled', 'false');
                        }
                    }
                }, {
                    key: 'renderDayCellEvent',
                    value: function renderDayCellEvent(args) {
                        extend(this.renderDayCellArgs, { name: 'renderDayCell' });
                        this.trigger('renderDayCell', args);
                    }
                }, {
                    key: 'navigatedEvent',
                    value: function navigatedEvent(eve) {
                        extend(this.navigatedArgs, { name: 'navigated', event: eve });
                        this.trigger('navigated', this.navigatedArgs);
                    }
                }, {
                    key: 'triggerNavigate',
                    value: function triggerNavigate(event) {
                        this.navigatedArgs = { view: this.currentView(), date: this.currentDate };
                        this.navigatedEvent(event);
                    }
                }, {
                    key: 'nextIconHandler',
                    value: function nextIconHandler(disabled) {
                        if (disabled) {
                            EventHandler.remove(this.nextIcon, 'click', this.navigateNextHandler);
                            addClass([this.nextIcon], DISABLED);
                            addClass([this.nextIcon], OVERLAY);
                            this.nextIcon.setAttribute('aria-disabled', 'true');
                        } else {
                            EventHandler.add(this.nextIcon, 'click', this.navigateNextHandler);
                            removeClass([this.nextIcon], DISABLED);
                            removeClass([this.nextIcon], OVERLAY);
                            this.nextIcon.setAttribute('aria-disabled', 'false');
                        }
                    }
                }, {
                    key: 'compare',
                    value: function compare(startDate, endDate, modifier) {
                        var start = endDate.getFullYear();
                        var end = void 0;
                        var result = void 0;
                        end = start;
                        result = 0;
                        if (modifier) {
                            start = start - start % modifier;
                            end = start - start % modifier + modifier - 1;
                        }
                        if (startDate.getFullYear() > end) {
                            result = 1;
                        } else if (startDate.getFullYear() < start) {
                            result = -1;
                        }
                        return result;
                    }
                }, {
                    key: 'isMinMaxRange',
                    value: function isMinMaxRange(date) {
                        return +date >= +this.min && +date <= +this.max;
                    }
                }, {
                    key: 'compareYear',
                    value: function compareYear(start, end) {
                        return this.compare(start, end, 0);
                    }
                }, {
                    key: 'compareDecade',
                    value: function compareDecade(start, end) {
                        return this.compare(start, end, 10);
                    }
                }, {
                    key: 'shiftArray',
                    value: function shiftArray(array, i) {
                        return array.slice(i).concat(array.slice(0, i));
                    }
                }, {
                    key: 'addDay',
                    value: function addDay(date, i, e, max, min) {
                        var column = i;
                        var value = new Date(+date);
                        if (!isNullOrUndefined(this.tableBodyElement) && !isNullOrUndefined(e)) {
                            while (this.findNextTD(new Date(+date), column, max, min)) {
                                column += i;
                            }
                            var rangeValue = new Date(value.setDate(value.getDate() + column));
                            column = +rangeValue > +max || +rangeValue < +min ? column === i ? i - i : i : column;
                        }
                        date.setDate(date.getDate() + column);
                    }
                }, {
                    key: 'findNextTD',
                    value: function findNextTD(date, column, max, min) {
                        var value = new Date(date.setDate(date.getDate() + column));
                        var collection = [];
                        var isDisabled = false;
                        if ((!isNullOrUndefined(value) && value.getMonth()) === (!isNullOrUndefined(this.currentDate) && this.currentDate.getMonth())) {
                            var tdEles = this.renderDays(value, null);
                            collection = tdEles.filter(function (element) {
                                return element.classList.contains(DISABLED);
                            });
                        } else {
                            collection = this.tableBodyElement.querySelectorAll('td.' + DISABLED);
                        }
                        if (+value <= +max && +value >= +min) {
                            if (collection.length) {
                                for (var i = 0; i < collection.length; i++) {
                                    isDisabled = +value === +new Date(parseInt(collection[i].id, 0)) ? true : false;
                                    if (isDisabled) {
                                        break;
                                    }
                                }
                            }
                        }
                        return isDisabled;
                    }
                }, {
                    key: 'getMaxDays',
                    value: function getMaxDays(d) {
                        var date = void 0;
                        var month = void 0;
                        var tmpDate = new Date('' + d);
                        date = 28;
                        month = tmpDate.getMonth();
                        while (tmpDate.getMonth() === month) {
                            ++date;
                            tmpDate.setDate(date);
                        }
                        return date - 1;
                    }
                }, {
                    key: 'setDateDecade',
                    value: function setDateDecade(date, year) {
                        date.setFullYear(year);
                        this.setProperties({ value: new Date('' + date) }, true);
                    }
                }, {
                    key: 'setDateYear',
                    value: function setDateYear(date, value) {
                        date.setFullYear(value.getFullYear(), value.getMonth(), date.getDate());
                        if (value.getMonth() !== date.getMonth()) {
                            date.setDate(0);
                        }
                        this.setProperties({ value: new Date('' + date) }, true);
                        this.currentDate = new Date('' + value);
                    }
                }, {
                    key: 'compareMonth',
                    value: function compareMonth(start, end) {
                        var result = void 0;
                        if (start.getFullYear() > end.getFullYear()) {
                            result = 1;
                        } else if (start.getFullYear() < end.getFullYear()) {
                            result = -1;
                        } else {
                            result = start.getMonth() === end.getMonth() ? 0 : start.getMonth() > end.getMonth() ? 1 : -1;
                        }
                        return result;
                    }
                }]);

                return CalendarBase;
            }(Component));

            __decorate([Property(new Date(1900, 0, 1))], CalendarBase.prototype, "min", void 0);
            __decorate([Property(new Date(2099, 11, 31))], CalendarBase.prototype, "max", void 0);
            __decorate([Property(0)], CalendarBase.prototype, "firstDayOfWeek", void 0);
            __decorate([Property('Month')], CalendarBase.prototype, "start", void 0);
            __decorate([Property('Month')], CalendarBase.prototype, "depth", void 0);
            __decorate([Property(false)], CalendarBase.prototype, "weekNumber", void 0);
            __decorate([Property(true)], CalendarBase.prototype, "showTodayButton", void 0);
            __decorate([Event()], CalendarBase.prototype, "created", void 0);
            __decorate([Event()], CalendarBase.prototype, "destroyed", void 0);
            __decorate([Event()], CalendarBase.prototype, "navigated", void 0);
            __decorate([Event()], CalendarBase.prototype, "renderDayCell", void 0);
            _export('CalendarBase', CalendarBase = __decorate([NotifyPropertyChanges], CalendarBase));
            /**
             * Represents the Calendar component that allows the user to select a date.
             * ```html
             * <div id="calendar"/>
             * ```
             * ```typescript
             * <script>
             *   var calendarObj = new Calendar({ value: new Date() });
             *   calendarObj.appendTo("#calendar");
             * </script>
             * ```
             */

            _export('Calendar', Calendar = function (_CalendarBase) {
                _inherits(Calendar, _CalendarBase);

                /**
                 * Initialized new instance of Calendar Class.
                 * Constructor for creating the widget
                 * @param  {CalendarModel} options?
                 * @param  {string|HTMLElement} element?
                 */
                function Calendar(options, element) {
                    _classCallCheck(this, Calendar);

                    return _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, options, element));
                }
                /**
                 * To Initialize the control rendering.
                 * @returns void
                 * @private
                 */


                _createClass(Calendar, [{
                    key: 'render',
                    value: function render() {
                        this.validateDate();
                        this.minMaxUpdate();
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'render', this).call(this);
                    }
                }, {
                    key: 'validateDate',
                    value: function validateDate() {
                        if (typeof this.value === 'string') {
                            this.setProperties({ value: this.checkDateValue(new Date('' + this.value)) }, true); // persist the value property.
                        }
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'validateDate', this).call(this, this.value);
                        if (!isNullOrUndefined(this.value) && this.min <= this.max && this.value >= this.min && this.value <= this.max) {
                            this.currentDate = new Date('' + this.value);
                        }
                        if (isNaN(+this.value)) {
                            this.setProperties({ value: null }, true);
                        }
                    }
                }, {
                    key: 'minMaxUpdate',
                    value: function minMaxUpdate() {
                        if (this.getModuleName() === 'calendar') {
                            if (!isNullOrUndefined(this.value) && this.value <= this.min && this.min <= this.max) {
                                this.setProperties({ value: this.min }, true);
                                this.changedArgs = { value: this.value };
                            } else {
                                if (!isNullOrUndefined(this.value) && this.value >= this.max && this.min <= this.max) {
                                    this.setProperties({ value: this.max }, true);
                                    this.changedArgs = { value: this.value };
                                }
                            }
                        }
                        if (this.getModuleName() !== 'calendar') {
                            if (!isNullOrUndefined(this.value) && this.value < this.min && this.min <= this.max) {
                                _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'minMaxUpdate', this).call(this, this.min);
                            } else {
                                if (!isNullOrUndefined(this.value) && this.value > this.max && this.min <= this.max) {
                                    _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'minMaxUpdate', this).call(this, this.max);
                                }
                            }
                        } else {
                            _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'minMaxUpdate', this).call(this, this.value);
                        }
                    }
                }, {
                    key: 'todayButtonClick',
                    value: function todayButtonClick() {
                        if (this.showTodayButton) {
                            var tempValue = new Date();
                            if (this.value) {
                                tempValue.setHours(this.value.getHours());
                                tempValue.setMinutes(this.value.getMinutes());
                                tempValue.setSeconds(this.value.getSeconds());
                            } else {
                                tempValue = new Date(tempValue.getFullYear(), tempValue.getMonth(), tempValue.getDate(), 0, 0, 0);
                            }
                            this.setProperties({ value: tempValue }, true);
                            _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'todayButtonClick', this).call(this, new Date(+this.value));
                        }
                    }
                }, {
                    key: 'keyActionHandle',
                    value: function keyActionHandle(e) {
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'keyActionHandle', this).call(this, e, this.value);
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        var _this4 = this;

                        this.changeHandler = function (e) {
                            _this4.triggerChange(e);
                        };
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'preRender', this).call(this, this.value);
                    }
                }, {
                    key: 'createContent',
                    value: function createContent() {
                        this.previousDate = this.value;
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'createContent', this).call(this);
                    }
                }, {
                    key: 'minMaxDate',
                    value: function minMaxDate(localDate) {
                        return _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'minMaxDate', this).call(this, localDate);
                    }
                }, {
                    key: 'renderMonths',
                    value: function renderMonths(e) {
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'renderMonths', this).call(this, e, this.value);
                    }
                }, {
                    key: 'renderDays',
                    value: function renderDays(currentDate, e) {
                        return _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'renderDays', this).call(this, currentDate, e, this.value);
                    }
                }, {
                    key: 'renderYears',
                    value: function renderYears(e) {
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'renderYears', this).call(this, e, this.value);
                    }
                }, {
                    key: 'renderDecades',
                    value: function renderDecades(e) {
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'renderDecades', this).call(this, e, this.value);
                    }
                }, {
                    key: 'renderTemplate',
                    value: function renderTemplate(elements, count, classNm, e) {
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'renderTemplate', this).call(this, elements, count, classNm, e, this.value);
                        this.changedArgs = { value: this.value };
                        this.changeHandler();
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(e) {
                        var eve = e.currentTarget;
                        if (eve.classList.contains(OTHERMONTH)) {
                            this.value = this.getIdValue(e, null);
                        }
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'clickHandler', this).call(this, e, this.value);
                    }
                }, {
                    key: 'switchView',
                    value: function switchView(view, e) {
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'switchView', this).call(this, view, e);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'getModuleName', this).call(this);
                        return 'calendar';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'getPersistData', this).call(this);
                        var keyEntity = ['value'];
                        return this.addOnPersist(keyEntity);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        this.effect = '';
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = Object.keys(newProp)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var prop = _step3.value;

                                switch (prop) {
                                    case 'value':
                                        if (typeof newProp.value === 'string') {
                                            this.setProperties({ value: new Date('' + newProp.value) }, true);
                                        } else {
                                            newProp.value = new Date('' + newProp.value);
                                        }
                                        if (isNaN(+this.value)) {
                                            this.setProperties({ value: oldProp.value }, true);
                                        }
                                        this.validateDate();
                                        this.minMaxUpdate();
                                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'setValueUpdate', this).call(this);
                                        break;
                                    default:
                                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'onPropertyChanged', this).call(this, newProp, oldProp);
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
                    key: 'destroy',
                    value: function destroy() {
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'navigateTo',
                    value: function navigateTo(view, date) {
                        this.minMaxUpdate();
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'navigateTo', this).call(this, view, date);
                    }
                }, {
                    key: 'currentView',
                    value: function currentView() {
                        return _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'currentView', this).call(this);
                    }
                }, {
                    key: 'selectDate',
                    value: function selectDate(e, date, element) {
                        _get(Calendar.prototype.__proto__ || Object.getPrototypeOf(Calendar.prototype), 'selectDate', this).call(this, e, date, element, this.value);
                        this.changedArgs = { value: this.value };
                        this.changeHandler(e);
                    }
                }, {
                    key: 'changeEvent',
                    value: function changeEvent(e) {
                        this.trigger('change', this.changedArgs);
                        this.previousDate = new Date(+this.value);
                    }
                }, {
                    key: 'triggerChange',
                    value: function triggerChange(e) {
                        this.changedArgs.event = this.changedArgs.e = e || null;
                        this.changedArgs.isInteracted = !isNullOrUndefined(e);
                        if (!isNullOrUndefined(this.value)) {
                            this.setProperties({ value: this.value }, true);
                        }
                        if (+this.value !== Number.NaN && +this.value !== +this.previousDate) {
                            this.changeEvent(e);
                        }
                    }
                }]);

                return Calendar;
            }(CalendarBase));

            __decorate([Property(null)], Calendar.prototype, "value", void 0);
            __decorate([Event()], Calendar.prototype, "change", void 0);
            _export('Calendar', Calendar = __decorate([NotifyPropertyChanges], Calendar));

            /**
             * Calendar modules
             */

            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            DATEWRAPPER = 'e-date-wrapper';
            ROOT$1 = 'e-datepicker';
            POPUPWRAPPER = 'e-popup-wrapper';
            INPUTWRAPPER = 'e-input-group-icon';
            POPUP = 'e-popup';
            INPUTCONTAINER = 'e-input-group';
            INPUTFOCUS = 'e-input-focus';
            INPUTROOT = 'e-input';
            ERROR = 'e-error';
            ACTIVE = 'e-active';
            OVERFLOW = 'e-date-overflow';
            DATEICON = 'e-date-icon';
            ICONS = 'e-icons';
            OPENDURATION = 300;
            OFFSETVALUE = 4;

            _export('DatePicker', DatePicker = function (_Calendar) {
                _inherits(DatePicker, _Calendar);

                /**
                 * Constructor for creating the widget.
                 */
                function DatePicker(options, element) {
                    _classCallCheck(this, DatePicker);

                    var _this5 = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, options, element));

                    _this5.previousElementValue = '';
                    _this5.isDateIconClicked = false;
                    _this5.keyConfigs = {
                        altUpArrow: 'alt+uparrow',
                        altDownArrow: 'alt+downarrow',
                        escape: 'escape',
                        enter: 'enter',
                        controlUp: 'ctrl+38',
                        controlDown: 'ctrl+40',
                        moveDown: 'downarrow',
                        moveUp: 'uparrow',
                        moveLeft: 'leftarrow',
                        moveRight: 'rightarrow',
                        select: 'enter',
                        home: 'home',
                        end: 'end',
                        pageUp: 'pageup',
                        pageDown: 'pagedown',
                        shiftPageUp: 'shift+pageup',
                        shiftPageDown: 'shift+pagedown',
                        controlHome: 'ctrl+home',
                        controlEnd: 'ctrl+end',
                        tab: 'tab'
                    };
                    _this5.calendarKeyConfigs = {
                        escape: 'escape',
                        enter: 'enter',
                        tab: 'tab'
                    };
                    return _this5;
                }
                /**
                 * To Initialize the control rendering.
                 * @return void
                 * @private
                 */


                _createClass(DatePicker, [{
                    key: 'render',
                    value: function render() {
                        this.initialize();
                        this.bindEvents();
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        this.createInput();
                        this.updateInput();
                        this.previousElementValue = this.inputElement.value;
                        this.previousDate = new Date(+this.value);
                    }
                }, {
                    key: 'createInput',
                    value: function createInput() {
                        var ariaAttrs = {
                            'aria-live': 'assertive', 'aria-atomic': 'true',
                            'aria-haspopup': 'true', 'aria-activedescendant': 'null',
                            'aria-owns': this.element.id + '_options', 'aria-expanded': 'false', 'role': 'combobox', 'autocomplete': 'off',
                            'autocorrect': 'off', 'autocapitalize': 'off', 'spellcheck': 'false'
                        };
                        if (this.getModuleName() === 'datepicker') {
                            var l10nLocale = { placeholder: null };
                            this.globalize = new Internationalization(this.locale);
                            this.l10n = new L10n('datepicker', l10nLocale, this.locale);
                            this.setProperties({ placeholder: this.placeholder || this.l10n.getConstant('placeholder') }, true);
                        }
                        this.inputWrapper = Input.createInput({
                            element: this.inputElement,
                            floatLabelType: this.floatLabelType,
                            properties: {
                                readonly: this.readonly,
                                placeholder: this.placeholder,
                                cssClass: this.cssClass,
                                enabled: this.enabled,
                                enableRtl: this.enableRtl,
                                showClearButton: this.showClearButton
                            },
                            buttons: [INPUTWRAPPER + ' ' + DATEICON + ' ' + ICONS]
                        });
                        this.setWidth(this.width);
                        if (this.inputElement.name !== '') {
                            this.inputElement.setAttribute('name', '' + this.inputElement.getAttribute('name'));
                        } else {
                            this.inputElement.setAttribute('name', '' + this.element.id);
                        }
                        attributes(this.inputElement, ariaAttrs);
                        if (!this.enabled) {
                            this.inputElement.setAttribute('aria-disabled', 'true');
                        } else {
                            this.inputElement.setAttribute('aria-disabled', 'false');
                        }
                        Input.addAttributes({ 'aria-label': 'select' }, this.inputWrapper.buttons[0]);
                        addClass([this.inputWrapper.container], DATEWRAPPER);
                    }
                }, {
                    key: 'updateInput',
                    value: function updateInput() {
                        if (this.value && !this.isCalendar()) {
                            this.disabledDates();
                        }
                        if (+new Date('' + this.value)) {
                            if (typeof this.value === 'string') {
                                this.value = this.checkDateValue(new Date('' + this.value));
                                var dateOptions = void 0;
                                if (this.getModuleName() === 'datetimepicker') {
                                    dateOptions = {
                                        format: !isNullOrUndefined(this.format) ? this.format : this.dateTimeFormat,
                                        type: 'dateTime', skeleton: 'yMd'
                                    };
                                } else {
                                    dateOptions = { format: this.format, type: 'dateTime', skeleton: 'yMd' };
                                }
                                var dateString = this.globalize.formatDate(this.value, dateOptions);
                                this.setProperties({ value: this.globalize.parseDate(dateString, dateOptions) }, true);
                            }
                        } else {
                            this.setProperties({ value: null }, true);
                        }
                        if (this.strictMode) {
                            //calls the Calendar processDate protected method to update the date value according to the strictMode true behaviour.
                            _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'validateDate', this).call(this);
                            this.minMaxUpdates();
                            _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'minMaxUpdate', this).call(this);
                        }
                        if (!isNullOrUndefined(this.value)) {
                            var dateValue = this.value;
                            var _dateString = void 0;
                            var tempFormat = !isNullOrUndefined(this.format) ? this.format : this.dateTimeFormat;
                            if (this.getModuleName() === 'datetimepicker') {
                                _dateString = this.globalize.formatDate(this.value, { format: tempFormat, type: 'dateTime', skeleton: 'yMd' });
                            } else {
                                _dateString = this.globalize.formatDate(this.value, { format: this.format, type: 'dateTime', skeleton: 'yMd' });
                            }
                            if (+dateValue <= +this.max && +dateValue >= +this.min) {
                                Input.setValue(_dateString, this.inputElement, this.floatLabelType, this.showClearButton);
                            } else {
                                var value = +dateValue >= +this.max || !+this.value || !+this.value || +dateValue <= +this.min;
                                if (!this.strictMode && value) {
                                    Input.setValue(_dateString, this.inputElement, this.floatLabelType, this.showClearButton);
                                }
                            }
                        }
                        if (isNullOrUndefined(this.value) && this.strictMode) {
                            Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
                        }
                        this.changedArgs = { value: this.value };
                        this.errorClass();
                    }
                }, {
                    key: 'minMaxUpdates',
                    value: function minMaxUpdates() {
                        if (!isNullOrUndefined(this.value) && this.value < this.min && this.min <= this.max && this.strictMode) {
                            this.setProperties({ value: this.min }, true);
                            this.changedArgs = { value: this.value };
                        } else {
                            if (!isNullOrUndefined(this.value) && this.value > this.max && this.min <= this.max && this.strictMode) {
                                this.setProperties({ value: this.max }, true);
                                this.changedArgs = { value: this.value };
                            }
                        }
                    }
                }, {
                    key: 'bindEvents',
                    value: function bindEvents() {
                        if (this.enabled) {
                            EventHandler.add(this.inputWrapper.buttons[0], 'mousedown touchstart', this.dateIconHandler, this);
                            EventHandler.add(this.inputElement, 'focus', this.inputFocusHandler, this);
                            EventHandler.add(this.inputElement, 'blur', this.inputBlurHandler, this);
                            // To prevent the twice triggering.
                            EventHandler.add(this.inputElement, 'change', this.inputChangeHandler, this);
                            if (this.showClearButton) {
                                EventHandler.add(this.inputWrapper.clearButton, 'mousedown touchstart', this.resetHandler, this);
                            }
                        } else {
                            EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown touchstart', this.dateIconHandler);
                            EventHandler.remove(this.inputElement, 'focus', this.inputFocusHandler);
                            EventHandler.remove(this.inputElement, 'blur', this.inputBlurHandler);
                            EventHandler.remove(this.inputElement, 'change', this.inputChangeHandler);
                            if (this.showClearButton) {
                                EventHandler.remove(this.inputWrapper.clearButton, 'mousedown touchstart', this.resetHandler);
                            }
                        }
                        this.keyboardModules = new KeyboardEvents(this.inputElement, {
                            eventName: 'keydown',
                            keyAction: this.inputKeyActionHandle.bind(this),
                            keyConfigs: this.keyConfigs
                        });
                    }
                }, {
                    key: 'inputChangeHandler',
                    value: function inputChangeHandler(e) {
                        e.stopPropagation();
                    }
                }, {
                    key: 'bindClearEvent',
                    value: function bindClearEvent() {
                        if (this.showClearButton && this.inputWrapper.clearButton) {
                            EventHandler.add(this.inputWrapper.clearButton, 'mousedown touchstart', this.resetHandler, this);
                        }
                    }
                }, {
                    key: 'resetHandler',
                    value: function resetHandler(e) {
                        e.preventDefault();
                        this.clear(e);
                    }
                }, {
                    key: 'clear',
                    value: function clear(event) {
                        this.setProperties({ value: null }, true);
                        Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
                        this.updateInput();
                        this.changeEvent(event);
                    }
                }, {
                    key: 'dateIconHandler',
                    value: function dateIconHandler(e) {
                        e.preventDefault();
                        if (!this.readonly) {
                            if (this.isCalendar()) {
                                this.hide(e);
                            } else {
                                this.isDateIconClicked = true;
                                this.show(null, e);
                                if (!Browser.isDevice) {
                                    if (this.getModuleName() === 'datetimepicker') {
                                        this.inputElement.focus();
                                    }
                                    this.inputElement.focus();
                                    addClass([this.inputWrapper.container], [INPUTFOCUS]);
                                }
                                addClass(this.inputWrapper.buttons, ACTIVE);
                            }
                        }
                    }
                }, {
                    key: 'CalendarKeyActionHandle',
                    value: function CalendarKeyActionHandle(e) {
                        switch (e.action) {
                            case 'escape':
                                if (this.isCalendar()) {
                                    this.hide(e);
                                } else {
                                    this.inputWrapper.container.children[this.index].blur();
                                }
                                break;
                            case 'enter':
                                if (!this.isCalendar()) {
                                    this.show(null, e);
                                } else {
                                    if (+this.value !== +this.currentDate && !this.isCalendar()) {
                                        this.inputWrapper.container.children[this.index].focus();
                                    }
                                }
                                if (this.getModuleName() === 'datetimepicker') {
                                    this.inputElement.focus();
                                }
                                break;
                            case 'tab':
                                this.hide(e);
                        }
                    }
                }, {
                    key: 'inputFocusHandler',
                    value: function inputFocusHandler() {
                        var focusArguments = {
                            model: this
                        };
                        this.isDateIconClicked = false;
                        this.trigger('focus', focusArguments);
                    }
                }, {
                    key: 'inputBlurHandler',
                    value: function inputBlurHandler(e) {
                        this.strictModeUpdate();
                        this.updateInput();
                        this.changeTrigger(e);
                        this.errorClass();
                        if (this.isCalendar() && document.activeElement === this.inputElement) {
                            this.hide(e);
                        }
                        if (this.getModuleName() === 'datepicker') {
                            var blurArguments = {
                                model: this
                            };
                            this.trigger('blur', blurArguments);
                        }
                        if (this.isCalendar()) {
                            this.calendarKeyboardModules = new KeyboardEvents(this.calendarElement.children[1].firstElementChild, {
                                eventName: 'keydown',
                                keyAction: this.CalendarKeyActionHandle.bind(this),
                                keyConfigs: this.calendarKeyConfigs
                            });
                        }
                    }
                }, {
                    key: 'documentHandler',
                    value: function documentHandler(e) {
                        if (!Browser.isDevice) {
                            e.preventDefault();
                        }
                        var target = e.target;
                        if (!closest(target, '.e-datepicker.e-popup-wrapper') && !(closest(target, '.' + INPUTCONTAINER) === this.inputWrapper.container) && !target.classList.contains('e-day')) {
                            this.hide(e);
                        }
                    }
                }, {
                    key: 'inputKeyActionHandle',
                    value: function inputKeyActionHandle(e) {
                        switch (e.action) {
                            case 'altUpArrow':
                                this.hide(e);
                                this.inputElement.focus();
                                break;
                            case 'altDownArrow':
                                this.strictModeUpdate();
                                this.updateInput();
                                if (this.getModuleName() === 'datepicker') {
                                    this.show(null, e);
                                }
                                break;
                            case 'escape':
                                this.hide(e);
                                break;
                            case 'enter':
                                this.strictModeUpdate();
                                this.updateInput();
                                this.changeTrigger(e);
                                this.errorClass();
                                if (!this.isCalendar() && document.activeElement === this.inputElement) {
                                    this.hide(e);
                                }
                                break;
                            case 'tab':
                                this.strictModeUpdate();
                                this.updateInput();
                                this.changeTrigger(e);
                                this.errorClass();
                                this.hide(e);
                                break;
                            default:
                                this.previousDate = !isNullOrUndefined(this.value) && new Date('' + this.value) || null;
                                if (this.isCalendar()) {
                                    _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'keyActionHandle', this).call(this, e);
                                }
                        }
                    }
                }, {
                    key: 'strictModeUpdate',
                    value: function strictModeUpdate() {
                        var format = void 0;
                        if (this.getModuleName() === 'datetimepicker') {
                            format = !isNullOrUndefined(this.format) ? this.format : this.dateTimeFormat;
                        } else {
                            format = isNullOrUndefined(this.format) ? this.format : this.format.replace('dd', 'd');
                        }
                        if (!isNullOrUndefined(format)) {
                            var len = format.split('M').length - 1;
                            if (len < 3) {
                                format = format.replace('MM', 'M');
                            }
                        }
                        var dateOptions = void 0;
                        if (this.getModuleName() === 'datetimepicker') {
                            dateOptions = {
                                format: !isNullOrUndefined(this.format) ? this.format : this.dateTimeFormat,
                                type: 'dateTime', skeleton: 'yMd'
                            };
                        } else {
                            dateOptions = { format: format, type: 'dateTime', skeleton: 'yMd' };
                        }
                        var date = this.globalize.parseDate(this.inputElement.value, dateOptions);
                        if (this.strictMode && date) {
                            Input.setValue(this.globalize.formatDate(date, dateOptions), this.inputElement, this.floatLabelType, this.showClearButton);
                            if (this.inputElement.value !== this.previousElementValue) {
                                this.setProperties({ value: date }, true);
                            }
                        } else if (!this.strictMode) {
                            if (this.inputElement.value !== this.previousElementValue) {
                                this.setProperties({ value: date }, true);
                            }
                        }
                        if (this.strictMode && !date && this.inputElement.value === '') {
                            this.setProperties({ value: null }, true);
                        }
                        if (isNaN(+this.value)) {
                            this.setProperties({ value: null }, true);
                        }
                        if (isNullOrUndefined(this.value)) {
                            this.currentDate = new Date(new Date().setHours(0, 0, 0, 0));
                        }
                    }
                }, {
                    key: 'createCalendar',
                    value: function createCalendar() {
                        var _this6 = this;

                        this.popupWrapper = createElement('div', { className: '' + ROOT$1 + ' ' + POPUPWRAPPER });
                        if (!isNullOrUndefined(this.cssClass)) {
                            this.popupWrapper.classList.add(this.cssClass);
                        }
                        document.body.appendChild(this.popupWrapper);
                        if (Browser.isDevice) {
                            this.modelHeader();
                            this.modal = createElement('div');
                            this.modal.className = '' + ROOT$1 + ' e-date-modal';
                            document.body.className += ' ' + OVERFLOW;
                            this.modal.style.display = 'block';
                            document.body.appendChild(this.modal);
                        }
                        //this.calendarElement represent the Calendar object from the Calendar class.
                        this.calendarElement.querySelector('table tbody').className = '';
                        this.popupObj = new Popup(this.popupWrapper, {
                            content: this.calendarElement,
                            relateTo: Browser.isDevice ? document.body : this.inputWrapper.container,
                            position: Browser.isDevice ? { X: 'center', Y: 'center' } : { X: 'left', Y: 'bottom' },
                            offsetY: OFFSETVALUE,
                            targetType: 'container',
                            enableRtl: this.enableRtl,
                            zIndex: this.zIndex,
                            collision: Browser.isDevice ? { X: 'fit', Y: 'fit' } : { X: 'flip', Y: 'flip' },
                            open: function open() {
                                if (_this6.getModuleName() !== 'datetimepicker') {
                                    if (document.activeElement !== _this6.inputElement && !Browser.isDevice) {
                                        _this6.calendarElement.children[1].firstElementChild.focus();
                                        _this6.calendarKeyboardModules = new KeyboardEvents(_this6.calendarElement.children[1].firstElementChild, {
                                            eventName: 'keydown',
                                            keyAction: _this6.CalendarKeyActionHandle.bind(_this6),
                                            keyConfigs: _this6.calendarKeyConfigs
                                        });
                                        _this6.calendarKeyboardModules = new KeyboardEvents(_this6.inputWrapper.container.children[_this6.index], {
                                            eventName: 'keydown',
                                            keyAction: _this6.CalendarKeyActionHandle.bind(_this6),
                                            keyConfigs: _this6.calendarKeyConfigs
                                        });
                                    }
                                }
                            }, close: function close() {
                                if (!Browser.isDevice) {
                                    if (_this6.isDateIconClicked) {
                                        _this6.inputWrapper.container.children[_this6.index].focus();
                                    }
                                }
                                if (_this6.value) {
                                    _this6.disabledDates();
                                }
                                if (_this6.popupObj) {
                                    _this6.popupObj.destroy();
                                }
                                detach(_this6.popupWrapper);
                                _this6.popupObj = _this6.popupWrapper = null;
                                _this6.setAriaAttributes();
                            }
                        });
                        this.popupObj.element.classList.add(this.cssClass);
                        this.setAriaAttributes();
                    }
                }, {
                    key: 'modelHeader',
                    value: function modelHeader() {
                        var modelHeader = createElement('div', { className: 'e-model-header' });
                        var yearHeading = createElement('h1', { className: 'e-model-year' });
                        var h2 = createElement('div');
                        var daySpan = createElement('span', { className: 'e-model-day' });
                        var monthSpan = createElement('span', { className: 'e-model-month' });
                        yearHeading.textContent = '' + this.globalize.formatDate(this.value || new Date(), { format: 'y', skeleton: 'dateTime' });
                        daySpan.textContent = '' + this.globalize.formatDate(this.value || new Date(), { format: 'E', skeleton: 'dateTime' }) + ', ';
                        monthSpan.textContent = '' + this.globalize.formatDate(this.value || new Date(), { format: 'MMM d', skeleton: 'dateTime' });
                        modelHeader.appendChild(yearHeading);
                        h2.appendChild(daySpan);
                        h2.appendChild(monthSpan);
                        modelHeader.appendChild(h2);
                        this.calendarElement.insertBefore(modelHeader, this.calendarElement.firstElementChild);
                    }
                }, {
                    key: 'changeTrigger',
                    value: function changeTrigger(e) {
                        if (this.inputElement.value !== this.previousElementValue) {
                            if ((this.previousDate && this.previousDate.valueOf()) !== (this.value && this.value.valueOf())) {
                                this.changedArgs.value = this.value;
                                this.changedArgs.event = this.changedArgs.e = e || null;
                                this.changedArgs.element = this.element;
                                this.changedArgs.isInteracted = !isNullOrUndefined(e);
                                this.trigger('change', this.changedArgs);
                                this.previousElementValue = this.inputElement.value;
                                this.previousDate = new Date('' + this.value);
                            }
                        }
                    }
                }, {
                    key: 'navigatedEvent',
                    value: function navigatedEvent() {
                        this.trigger('navigated', this.navigatedArgs);
                    }
                }, {
                    key: 'changeEvent',
                    value: function changeEvent(e) {
                        this.selectCalendar(e);
                        this.changedArgs.e = this.changedArgs.event = e;
                        this.changedArgs.element = this.element;
                        this.changedArgs.isInteracted = !isNullOrUndefined(e);
                        this.trigger('change', this.changedArgs);
                        this.previousDate = this.value && new Date(+this.value);
                        this.hide(e);
                        this.previousElementValue = this.inputElement.value;
                        this.errorClass();
                    }
                }, {
                    key: 'selectCalendar',
                    value: function selectCalendar(e) {
                        var date = void 0;
                        var tempFormat = void 0;
                        if (this.getModuleName() === 'datetimepicker') {
                            tempFormat = !isNullOrUndefined(this.format) ? this.format : this.dateTimeFormat;
                        } else {
                            tempFormat = this.format;
                        }
                        if (this.value) {
                            if (this.getModuleName() === 'datetimepicker') {
                                date = this.globalize.formatDate(this.changedArgs.value, { format: tempFormat, type: 'dateTime', skeleton: 'yMd' });
                            } else {
                                date = this.globalize.formatDate(this.changedArgs.value, { format: this.format, type: 'dateTime', skeleton: 'yMd' });
                            }
                        }
                        if (!isNullOrUndefined(date)) {
                            Input.setValue(date, this.inputElement, this.floatLabelType, this.showClearButton);
                        }
                    }
                }, {
                    key: 'isCalendar',
                    value: function isCalendar() {
                        if (this.popupWrapper && this.popupWrapper.classList.contains('' + POPUPWRAPPER)) {
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: 'setWidth',
                    value: function setWidth(width) {
                        if (typeof width === 'number') {
                            this.inputWrapper.container.style.width = formatUnit(this.width);
                        } else if (typeof width === 'string') {
                            this.inputWrapper.container.style.width = width.match(/px|%|em/) ? this.width : formatUnit(this.width);
                        } else {
                            this.inputWrapper.container.style.width = '100%';
                        }
                    }
                }, {
                    key: 'show',
                    value: function show(type, e) {
                        if (this.enabled && this.readonly || !this.enabled || this.popupObj) {
                            return;
                        } else {
                            var prevent = true;
                            var outOfRange = void 0;
                            if (!isNullOrUndefined(this.value) && !(+this.value >= +this.min && +this.value <= +this.max)) {
                                outOfRange = new Date('' + this.value);
                                this.setProperties({ 'value': null }, true);
                            } else {
                                outOfRange = this.value || null;
                            }
                            if (!this.isCalendar()) {
                                _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'render', this).call(this);
                                this.setProperties({ 'value': outOfRange || null }, true);
                                this.previousDate = outOfRange;
                                this.createCalendar();
                            }
                            this.preventArgs = {
                                preventDefault: function preventDefault() {
                                    prevent = false;
                                },
                                popup: this.popupObj,
                                e: e || null,
                                cancel: false
                            };
                            this.trigger('open', this.preventArgs);
                            if (prevent && !this.preventArgs.cancel) {
                                addClass(this.inputWrapper.buttons, ACTIVE);
                                document.body.appendChild(this.popupObj.element);
                                this.popupObj.refreshPosition(this.inputElement);
                                var openAnimation = {
                                    name: 'FadeIn',
                                    duration: Browser.isDevice ? 0 : OPENDURATION
                                };
                                this.popupObj.show(new Animation(openAnimation));
                                this.setAriaAttributes();
                            } else {
                                detach(this.popupWrapper);
                                this.popupObj.destroy();
                                this.popupWrapper = this.popupObj = null;
                            }
                            EventHandler.add(document, 'mousedown touchstart', this.documentHandler, this);
                        }
                    }
                }, {
                    key: 'hide',
                    value: function hide(e) {
                        if (!isNullOrUndefined(this.popupWrapper)) {
                            var prevent = true;
                            this.preventArgs = {
                                preventDefault: function preventDefault() {
                                    prevent = false;
                                },
                                popup: this.popupObj,
                                e: e || null,
                                cancel: false
                            };
                            removeClass(this.inputWrapper.buttons, ACTIVE);
                            removeClass([document.body], OVERFLOW);
                            if (this.isCalendar()) {
                                this.trigger('close', this.preventArgs);
                            }
                            if (this.isCalendar() && prevent && !this.preventArgs.cancel) {
                                this.popupObj.hide();
                                this.keyboardModule.destroy();
                                removeClass(this.inputWrapper.buttons, ACTIVE);
                            }
                            this.setAriaAttributes();
                            this.previousElementValue = this.inputElement.value;
                            if (Browser.isDevice && this.modal) {
                                this.modal.style.display = 'none';
                                this.modal.outerHTML = '';
                                this.modal = null;
                            }
                            EventHandler.remove(document, 'mousedown touchstart', this.documentHandler);
                        }
                    }
                }, {
                    key: 'focusIn',
                    value: function focusIn(triggerEvent) {
                        if (document.activeElement !== this.inputElement && this.enabled) {
                            this.inputElement.focus();
                            addClass([this.inputWrapper.container], [INPUTFOCUS]);
                            var focusArguments = {
                                model: this
                            };
                            this.trigger('focus', focusArguments);
                        }
                    }
                }, {
                    key: 'focusOut',
                    value: function focusOut() {
                        if (document.activeElement === this.inputElement) {
                            this.inputElement.blur();
                            removeClass([this.inputWrapper.container], [INPUTFOCUS]);
                            var blurArguments = {
                                model: this
                            };
                            this.trigger('blur', blurArguments);
                        }
                    }
                }, {
                    key: 'currentView',
                    value: function currentView() {
                        var currentView = void 0;
                        if (this.calendarElement) {
                            // calls the Calendar currentView public method
                            currentView = _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'currentView', this).call(this);
                        }
                        return currentView;
                    }
                }, {
                    key: 'navigateTo',
                    value: function navigateTo(view, date) {
                        if (this.calendarElement) {
                            // calls the Calendar navigateTo public method
                            _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'navigateTo', this).call(this, view, date);
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'destroy', this).call(this);
                        this.keyboardModules.destroy();
                        if (this.popupObj && this.popupObj.element.classList.contains(POPUP)) {
                            _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'destroy', this).call(this);
                        }
                        var ariaAttrs = {
                            'aria-live': 'assertive', 'aria-atomic': 'true', 'aria-disabled': 'true',
                            'aria-haspopup': 'true', 'aria-activedescendant': 'null',
                            'aria-owns': this.element.id + '_options', 'aria-expanded': 'false', 'role': 'combobox', 'autocomplete': 'off',
                            'autocorrect': 'off', 'autocapitalize': 'off', 'spellcheck': 'false'
                        };
                        if (this.inputElement) {
                            Input.removeAttributes(ariaAttrs, this.inputElement);
                            EventHandler.remove(this.inputElement, 'blur', this.inputBlurHandler);
                            EventHandler.remove(this.inputElement, 'focus', this.inputFocusHandler);
                            this.ensureInputAttribute();
                        }
                        if (this.isCalendar()) {
                            if (this.popupWrapper) {
                                detach(this.popupWrapper);
                            }
                            this.popupObj = this.popupWrapper = null;
                            this.keyboardModule.destroy();
                        }
                        if (this.ngTag === null) {
                            if (this.inputElement) {
                                this.inputWrapper.container.insertAdjacentElement('afterend', this.inputElement);
                                removeClass([this.inputElement], [INPUTROOT]);
                            }
                            removeClass([this.element], [ROOT$1]);
                            detach(this.inputWrapper.container);
                        }
                    }
                }, {
                    key: 'ensureInputAttribute',
                    value: function ensureInputAttribute() {
                        for (var i = 0; i < this.inputElement.attributes.length; i++) {
                            var prop = this.inputElement.attributes[i].name;
                            if (isNullOrUndefined(this.inputEleCopy.getAttribute(prop))) {
                                if (prop.toLowerCase() === 'value' || isNullOrUndefined(this.inputEleCopy.getAttribute('value'))) {
                                    this.inputElement.value = '';
                                }
                                this.inputElement.removeAttribute(prop);
                            }
                        }
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        this.inputEleCopy = this.element.cloneNode(true);
                        this.inputElement = this.element;
                        this.index = this.showClearButton ? 2 : 1;
                        this.ngTag = null;
                        if (this.element.tagName === 'EJS-DATEPICKER' || this.element.tagName === 'EJS-DATETIMEPICKER') {
                            this.ngTag = this.element.tagName;
                            this.inputElement = createElement('input');
                            this.element.appendChild(this.inputElement);
                        }
                        if (this.element.getAttribute('id')) {
                            if (this.ngTag !== null) {
                                this.inputElement.id = this.element.getAttribute('id') + '_input';
                            }
                        } else {
                            if (this.getModuleName() === 'datetimepicker') {
                                this.element.id = getUniqueID('ej2-datetimepicker');
                                if (this.ngTag !== null) {
                                    attributes(this.inputElement, { 'id': this.element.id + '_input' });
                                }
                            } else {
                                this.element.id = getUniqueID('ej2-datepicker');
                                if (this.ngTag !== null) {
                                    attributes(this.inputElement, { 'id': this.element.id + '_input' });
                                }
                            }
                        }
                        this.checkHtmlAttributes();
                        _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'preRender', this).call(this);
                    }
                }, {
                    key: 'checkHtmlAttributes',
                    value: function checkHtmlAttributes() {
                        this.globalize = new Internationalization(this.locale);
                        var attributes$$1 = ['value', 'min', 'max', 'disabled', 'readonly', 'style', 'name', 'placeholder', 'type'];
                        var options = void 0;
                        if (this.getModuleName() === 'datetimepicker') {
                            options = {
                                format: !isNullOrUndefined(this.format) ? this.format : this.dateTimeFormat,
                                type: 'dateTime', skeleton: 'yMd'
                            };
                        } else {
                            options = { format: this.format, type: 'dateTime', skeleton: 'yMd' };
                        }
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = attributes$$1[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var prop = _step4.value;

                                if (!isNullOrUndefined(this.inputElement.getAttribute(prop))) {
                                    switch (prop) {
                                        case 'disabled':
                                            var enabled = this.inputElement.getAttribute(prop) === 'disabled' || this.inputElement.getAttribute(prop) === '';
                                            this.setProperties({ enabled: !enabled }, true);
                                            break;
                                        case 'readonly':
                                            var readonly = this.inputElement.getAttribute(prop) === 'readonly' || this.inputElement.getAttribute(prop) === '';
                                            this.setProperties({ readonly: readonly }, true);
                                            break;
                                        case 'placeholder':
                                            if (this.placeholder === null) {
                                                var placeholder = this.inputElement.getAttribute(prop);
                                                this.setProperties({ placeholder: this.inputElement.getAttribute(prop) }, true);
                                            }
                                            break;
                                        case 'style':
                                            this.inputElement.setAttribute('style', '' + this.inputElement.getAttribute(prop));
                                            break;
                                        case 'name':
                                            this.inputElement.setAttribute('name', '' + this.inputElement.getAttribute(prop));
                                            break;
                                        case 'value':
                                            if (!this.value) {
                                                var value = this.inputElement.getAttribute(prop);
                                                this.setProperties(setValue(prop, this.globalize.parseDate(value, options), {}), true);
                                            }
                                            break;
                                        case 'min':
                                            if (+this.min === +new Date(1900, 0, 1)) {
                                                this.setProperties(setValue(prop, this.globalize.parseDate(this.inputElement.getAttribute(prop)), {}), true);
                                            }
                                            break;
                                        case 'max':
                                            if (+this.max === +new Date(2099, 11, 31)) {
                                                this.setProperties(setValue(prop, this.globalize.parseDate(this.inputElement.getAttribute(prop)), {}), true);
                                            }
                                            break;
                                        case 'type':
                                            if (this.inputElement.getAttribute(prop) !== 'text') {
                                                this.inputElement.setAttribute('type', 'text');
                                            }
                                            break;
                                    }
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
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'datepicker';
                    }
                }, {
                    key: 'disabledDates',
                    value: function disabledDates() {
                        var valueCopy = new Date('' + this.value);
                        var previousValCopy = this.previousDate;
                        //calls the Calendar render method to check the disabled dates through renderDayCell event and update the input value accordingly.
                        this.minMaxUpdates();
                        _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'render', this).call(this);
                        this.previousDate = previousValCopy;
                        var date = valueCopy && +valueCopy;
                        var dateIdString = '*[id^="/id"]'.replace('/id', '' + date);
                        if (!this.strictMode) {
                            if (typeof this.value === 'string' || _typeof(this.value) === 'object' && +this.value !== +valueCopy) {
                                this.setProperties({ value: valueCopy }, true);
                            }
                        }
                        if (!isNullOrUndefined(this.calendarElement.querySelectorAll(dateIdString)[0])) {
                            if (this.calendarElement.querySelectorAll(dateIdString)[0].classList.contains('e-disabled')) {
                                if (!this.strictMode) {
                                    this.currentDate = new Date(new Date().setHours(0, 0, 0, 0));
                                }
                            }
                        }
                        var inputVal = void 0;
                        if (this.getModuleName() === 'datetimepicker') {
                            inputVal = this.globalize.formatDate(valueCopy, {
                                format: !isNullOrUndefined(this.format) ? this.format : this.dateTimeFormat,
                                type: 'dateTime', skeleton: 'yMd'
                            });
                        } else {
                            inputVal = this.globalize.formatDate(valueCopy, { format: this.format, type: 'dateTime', skeleton: 'yMd' });
                        }
                        Input.setValue(inputVal, this.inputElement, this.floatLabelType, this.showClearButton);
                    }
                }, {
                    key: 'setAriaAttributes',
                    value: function setAriaAttributes() {
                        if (this.isCalendar()) {
                            Input.addAttributes({ 'aria-expanded': 'true' }, this.inputElement);
                            attributes(this.inputElement, {
                                'aria-activedescendant': '' + this.setActiveDescendant()
                            });
                        } else {
                            Input.addAttributes({ 'aria-expanded': 'false' }, this.inputElement);
                            attributes(this.inputElement, {
                                'aria-activedescendant': 'null'
                            });
                        }
                    }
                }, {
                    key: 'errorClass',
                    value: function errorClass() {
                        var dateIdString = '*[id^="/id"]'.replace('/id', '' + +this.value);
                        var isDisabledDate = this.calendarElement && this.calendarElement.querySelectorAll(dateIdString)[0] && this.calendarElement.querySelectorAll(dateIdString)[0].classList.contains('e-disabled');
                        if (!isNullOrUndefined(this.value) && !(+this.value >= +this.min && +this.value <= +this.max) || !this.strictMode && this.inputElement.value !== '' && isNullOrUndefined(this.value) || isDisabledDate) {
                            addClass([this.inputWrapper.container], ERROR);
                        } else {
                            removeClass([this.inputWrapper.container], ERROR);
                        }
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var options = { format: this.format, type: 'dateTime', skeleton: 'yMd' };
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = Object.keys(newProp)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var prop = _step5.value;

                                switch (prop) {
                                    case 'value':
                                        if (typeof newProp.value === 'string') {
                                            newProp.value = this.globalize.parseDate(newProp.value, options);
                                            this.setProperties({ value: newProp.value }, true);
                                        }
                                        this.previousElementValue = this.inputElement.value;
                                        if (isNullOrUndefined(this.value)) {
                                            Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
                                            this.currentDate = new Date(new Date().setHours(0, 0, 0, 0));
                                        }
                                        this.updateInput();
                                        this.changeTrigger(null);
                                        break;
                                    case 'format':
                                        this.updateInput();
                                        break;
                                    case 'placeholder':
                                        Input.setPlaceholder(this.placeholder, this.inputElement);
                                        break;
                                    case 'readonly':
                                        Input.setReadonly(this.readonly, this.inputElement);
                                        break;
                                    case 'enabled':
                                        Input.setEnabled(this.enabled, this.inputElement);
                                        if (!this.enabled) {
                                            this.inputElement.setAttribute('aria-disabled', 'true');
                                        } else {
                                            this.inputElement.setAttribute('aria-disabled', 'false');
                                        }
                                        this.bindEvents();
                                        break;
                                    case 'locale':
                                        this.globalize = new Internationalization(this.locale);
                                        this.l10n.setLocale(this.locale);
                                        this.setProperties({ placeholder: this.l10n.getConstant('placeholder') }, true);
                                        Input.setPlaceholder(this.placeholder, this.inputElement);
                                        this.updateInput();
                                        break;
                                    case 'enableRtl':
                                        Input.setEnableRtl(this.enableRtl, [this.inputWrapper.container]);
                                        break;
                                    case 'zIndex':
                                        this.setProperties({ zIndex: newProp.zIndex }, true);
                                        break;
                                    case 'cssClass':
                                        Input.setCssClass(newProp.cssClass, [this.inputWrapper.container]);
                                        if (this.popupWrapper) {
                                            addClass([this.popupWrapper], [newProp.cssClass]);
                                        }
                                        break;
                                    case 'showClearButton':
                                        Input.setClearButton(this.showClearButton, this.inputElement, this.inputWrapper);
                                        this.bindClearEvent();
                                        break;
                                    case 'strictMode':
                                        this.updateInput();
                                        break;
                                    case 'width':
                                        this.setWidth(newProp.width);
                                        break;
                                    case 'floatLabelType':
                                        this.floatLabelType = newProp.floatLabelType;
                                        Input.removeFloating(this.inputWrapper);
                                        Input.addFloating(this.inputElement, this.floatLabelType, this.placeholder);
                                        break;
                                    default:
                                        if (this.calendarElement) {
                                            _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), 'onPropertyChanged', this).call(this, newProp, oldProp);
                                        }
                                        break;
                                }
                                this.hide(null);
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
                    }
                }]);

                return DatePicker;
            }(Calendar));

            __decorate$1([Property(null)], DatePicker.prototype, "width", void 0);
            __decorate$1([Property(null)], DatePicker.prototype, "cssClass", void 0);
            __decorate$1([Property(false)], DatePicker.prototype, "strictMode", void 0);
            __decorate$1([Property(null)], DatePicker.prototype, "format", void 0);
            __decorate$1([Property(true)], DatePicker.prototype, "enabled", void 0);
            __decorate$1([Property(true)], DatePicker.prototype, "showClearButton", void 0);
            __decorate$1([Property(false)], DatePicker.prototype, "enablePersistence", void 0);
            __decorate$1([Property(1000)], DatePicker.prototype, "zIndex", void 0);
            __decorate$1([Property(false)], DatePicker.prototype, "readonly", void 0);
            __decorate$1([Property(null)], DatePicker.prototype, "placeholder", void 0);
            __decorate$1([Property('Never')], DatePicker.prototype, "floatLabelType", void 0);
            __decorate$1([Event()], DatePicker.prototype, "open", void 0);
            __decorate$1([Event()], DatePicker.prototype, "close", void 0);
            __decorate$1([Event()], DatePicker.prototype, "blur", void 0);
            __decorate$1([Event()], DatePicker.prototype, "focus", void 0);
            __decorate$1([Event()], DatePicker.prototype, "created", void 0);
            __decorate$1([Event()], DatePicker.prototype, "destroyed", void 0);
            _export('DatePicker', DatePicker = __decorate$1([NotifyPropertyChanges], DatePicker));

            /**
             * Datepicker modules
             */

            __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            DATERANGEWRAPPER = 'e-date-range-wrapper';
            INPUTCONTAINER$1 = 'e-input-group';
            DATERANGEICON = 'e-input-group-icon e-range-icon e-icons';
            POPUP$1 = 'e-popup';
            LEFTCALENDER = 'e-left-calendar';
            RIGHTCALENDER = 'e-right-calendar';
            LEFTCONTAINER = 'e-left-container';
            RIGHTCONTAINER = 'e-right-container';
            ROOT$2 = 'e-daterangepicker';
            ERROR$1 = 'e-error';
            ACTIVE$1 = 'e-active';
            STARTENDCONTAINER = 'e-start-end';
            STARTDATE = 'e-start-date';
            ENDDATE = 'e-end-date';
            STARTBUTTON = 'e-start-btn';
            INPUTFOCUS$1 = 'e-input-focus';
            ENDBUTTON = 'e-end-btn';
            RANGEHOVER = 'e-range-hover';
            OTHERMONTH$1 = 'e-other-month';
            STARTLABEL = 'e-start-label';
            ENDLABEL = 'e-end-label';
            DISABLED$1 = 'e-disabled';
            SELECTED$1 = 'e-selected';
            CALENDAR = 'e-calendar';
            NEXTICON$1 = 'e-next';
            PREVICON$1 = 'e-prev';
            HEADER$1 = 'e-header';
            TITLE$1 = 'e-title';
            ICONCONTAINER$1 = 'e-icon-container';
            RANGECONTAINER = 'e-date-range-container';
            RANGEHEADER = 'e-range-header';
            PRESETS = 'e-presets';
            FOOTER$1 = 'e-footer';
            RANGEBORDER = 'e-range-border';
            TODAY$1 = 'e-today';
            FOCUSDATE = 'e-focused-date';
            CONTENT$1 = 'e-content';
            DAYSPAN = 'e-day-span';
            WEEKNUMBER$1 = 'e-week-number';
            DATEDISABLED = 'e-date-disabled';
            ICONDISABLED = 'e-icon-disabled';
            CALENDARCONTAINER = 'e-calendar-container';
            SEPARATOR = 'e-separator';
            APPLY = 'e-apply';
            CANCEL = 'e-cancel';
            DEVICE$1 = 'e-device';
            OVERLAY$1 = 'e-overlay';
            CHANGEICON = 'e-change-icon e-icons';
            LISTCLASS = cssClass.li;
            RTL$2 = 'e-rtl';
            HOVER = 'e-hover';
            OVERFLOW$1 = 'e-range-overflow';
            OFFSETVALUE$1 = 4;
            PRIMARY$1 = 'e-primary';
            FLAT$1 = 'e-flat';

            _export('Presets', Presets = function (_ChildProperty) {
                _inherits(Presets, _ChildProperty);

                function Presets() {
                    _classCallCheck(this, Presets);

                    return _possibleConstructorReturn(this, (Presets.__proto__ || Object.getPrototypeOf(Presets)).apply(this, arguments));
                }

                return Presets;
            }(ChildProperty));

            __decorate$2([Property()], Presets.prototype, "label", void 0);
            __decorate$2([Property()], Presets.prototype, "start", void 0);
            __decorate$2([Property()], Presets.prototype, "end", void 0);
            /**
             * Represents the DateRangePicker component that allows user to select the date range from the calendar
             * or entering the range through the input element.
             * ```html
             * <input id="daterangepicker"/>
             * ```
             * ```typescript
             * <script>
             *   var dateRangePickerObj = new DateRangePicker({ startDate: new Date("05/07/2017"), endDate: new Date("10/07/2017") });
             *   dateRangePickerObj.appendTo("#daterangepicker");
             * </script>
             * ```
             */

            _export('DateRangePicker', DateRangePicker = function (_CalendarBase2) {
                _inherits(DateRangePicker, _CalendarBase2);

                /**
                 * Constructor for creating the widget
                 */
                function DateRangePicker(options, element) {
                    _classCallCheck(this, DateRangePicker);

                    var _this8 = _possibleConstructorReturn(this, (DateRangePicker.__proto__ || Object.getPrototypeOf(DateRangePicker)).call(this, options, element));

                    _this8.isCustomRange = false;
                    _this8.isCustomWindow = false;
                    _this8.presetsItem = [];
                    _this8.liCollections = [];
                    _this8.previousEleValue = '';
                    _this8.isKeyPopup = false;
                    _this8.dateDisabled = false;
                    _this8.isRangeIconClicked = false;
                    _this8.isMaxDaysClicked = false;
                    _this8.disabledDays = [];
                    _this8.preventBlur = false;
                    _this8.preventFocus = false;
                    return _this8;
                }
                /**
                 * To Initialize the control rendering.
                 * @return void
                 * @private
                 */


                _createClass(DateRangePicker, [{
                    key: 'render',
                    value: function render() {
                        this.initialize();
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        this.presetKeyConfig = {
                            moveUp: 'uparrow',
                            moveDown: 'downarrow',
                            enter: 'enter',
                            tab: 'tab',
                            spaceBar: 'space'
                        };
                        this.keyInputConfigs = {
                            altDownArrow: 'alt+downarrow',
                            escape: 'escape',
                            enter: 'enter',
                            tab: 'tab'
                        };
                        this.defaultConstant = {
                            placeholder: '',
                            startLabel: 'Start Date',
                            endLabel: 'End Date',
                            customRange: 'Custom Range',
                            applyText: 'Apply',
                            cancelText: 'Cancel',
                            selectedDays: 'Selected Days',
                            days: 'days'
                        };
                        /**
                         * Mobile View
                         */
                        this.isMobile = window.matchMedia('(max-width:550px)').matches;
                        this.inputElement = this.element;
                        this.angularTag = null;
                        if (this.element.tagName === 'EJS-DATERANGEPICKER') {
                            this.angularTag = this.element.tagName;
                            this.inputElement = createElement('input');
                            this.element.appendChild(this.inputElement);
                        }
                        this.cloneElement = this.element.cloneNode(true);
                        if (this.element.getAttribute('id')) {
                            if (this.angularTag !== null) {
                                this.inputElement.id = this.element.getAttribute('id') + '_input';
                            }
                        } else {
                            this.element.id = getUniqueID('ej2-datetimepicker');
                            if (this.angularTag !== null) {
                                attributes(this.inputElement, { 'id': this.element.id + '_input' });
                            }
                        }
                        this.initProperty();
                        _get(DateRangePicker.prototype.__proto__ || Object.getPrototypeOf(DateRangePicker.prototype), 'preRender', this).call(this);
                        this.navNextFunction = this.navNextMonth.bind(this);
                        this.navPrevFunction = this.navPrevMonth.bind(this);
                        this.deviceNavNextFunction = this.deviceNavNext.bind(this);
                        this.deviceNavPrevFunction = this.deviceNavPrevious.bind(this);
                        this.initStartDate = this.checkDateValue(this.startDate);
                        this.initEndDate = this.checkDateValue(this.endDate);
                    }
                }, {
                    key: 'updateValue',
                    value: function updateValue() {
                        var dateOptions = { format: this.format, type: 'date', skeleton: 'yMd' };
                        if (this.value && this.value.length > 0) {
                            if (this.value[0] instanceof Date && !isNaN(+this.value[0])) {
                                this.setProperties({ startDate: this.value[0] }, true);
                            } else if (typeof this.value[0] === 'string') {
                                this.setProperties({ startDate: this.globalize.parseDate('' + this.value[0], dateOptions) }, true);
                            } else {
                                this.setProperties({ startDate: null }, true);
                                this.setValue();
                            }
                            if (this.value[1] instanceof Date && !isNaN(+this.value[1])) {
                                this.setProperties({ endDate: this.value[1] }, true);
                            } else if (typeof this.value[1] === 'string') {
                                this.setProperties({ endDate: this.globalize.parseDate('' + this.value[1], dateOptions) }, true);
                                this.setValue();
                            } else {
                                this.setProperties({ endDate: null }, true);
                                this.setValue();
                            }
                        } else if (isNullOrUndefined(this.value) && isNullOrUndefined(this.startDate) && isNullOrUndefined(this.endDate)) {
                            this.setProperties({ endDate: null }, true);
                            this.setProperties({ startDate: null }, true);
                            this.setValue();
                        }
                    }
                }, {
                    key: 'initProperty',
                    value: function initProperty() {
                        this.globalize = new Internationalization(this.locale);
                        this.updateValue();
                        this.setProperties({ value: null }, true);
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        merge(this.keyConfigs, { shiftTab: 'shift+tab' });
                        this.setProperties({ startDate: this.checkDateValue(new Date('' + this.startDate)) }, true); // persis the value propeerty.
                        this.setProperties({ endDate: this.checkDateValue(new Date('' + this.endDate)) }, true);
                        this.setValue();
                        this.setProperties({ min: this.checkDateValue(new Date('' + this.min)) }, true);
                        this.setProperties({ max: this.checkDateValue(new Date('' + this.max)) }, true);
                        this.checkHtmlAttributes();
                        this.l10n = new L10n('daterangepicker', this.defaultConstant, this.locale);
                        this.l10n.setLocale(this.locale);
                        this.setProperties({ placeholder: this.placeholder || this.l10n.getConstant('placeholder') }, true);
                        this.processPresets();
                        this.createInput();
                        this.bindEvents();
                    }
                }, {
                    key: 'processPresets',
                    value: function processPresets() {
                        var i = 0;
                        if (!isUndefined(this.presets[0].start && this.presets[0].end && this.presets[0].label)) {
                            var _iteratorNormalCompletion6 = true;
                            var _didIteratorError6 = false;
                            var _iteratorError6 = undefined;

                            try {
                                for (var _iterator6 = this.presets[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                    var range = _step6.value;

                                    var id = range.label.replace(/\s+/g, '') + '_' + ++i;
                                    if (typeof range.end === 'string' && typeof range.end === 'string') {
                                        this.presetsItem.push({
                                            id: id, text: range.label, end: new Date('' + range.end), start: new Date('' + range.start)
                                        });
                                    } else {
                                        this.presetsItem.push({ id: id, text: range.label, start: range.start, end: range.end });
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

                            var startDate = isNullOrUndefined(this.startDate) ? null : new Date(+this.startDate);
                            var endDate = isNullOrUndefined(this.endDate) ? null : new Date(+this.endDate);
                            this.presetsItem.push({ id: 'custom_range', text: this.l10n.getConstant('customRange'), start: startDate, end: endDate });
                            if (!isNullOrUndefined(this.startDate) && !isNullOrUndefined(this.endDate)) {
                                this.isCustomRange = true;
                                this.activeIndex = this.presetsItem.length - 1;
                            }
                        }
                    }
                }, {
                    key: 'bindEvents',
                    value: function bindEvents() {
                        if (this.enabled) {
                            EventHandler.add(this.inputWrapper.buttons[0], 'mousedown', this.rangeIconHandler, this);
                            EventHandler.add(this.inputElement, 'focus', this.inputFocusHandler, this);
                            EventHandler.add(this.inputElement, 'blur', this.inputBlurHandler, this);
                            EventHandler.add(this.inputElement, 'change', this.inputChangeHandler, this);
                            if (this.showClearButton) {
                                EventHandler.add(this.inputWrapper.clearButton, 'mousedown touchstart', this.resetHandler, this);
                            }
                            if (!this.isMobile) {
                                this.inputKeyboardModule = new KeyboardEvents(this.inputElement, {
                                    eventName: 'keydown', keyAction: this.inputHandler.bind(this), keyConfigs: this.keyInputConfigs
                                });
                            }
                        } else {
                            EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown', this.rangeIconHandler);
                            EventHandler.remove(this.inputElement, 'blur', this.inputBlurHandler);
                            EventHandler.remove(this.inputElement, 'focus', this.inputFocusHandler);
                            EventHandler.remove(this.inputElement, 'change', this.inputChangeHandler);
                            if (this.showClearButton) {
                                EventHandler.remove(this.inputWrapper.clearButton, 'mousedown touchstart', this.resetHandler);
                            }
                            if (!this.isMobile) {
                                if (!isNullOrUndefined(this.inputKeyboardModule)) {
                                    this.inputKeyboardModule.destroy();
                                }
                            }
                        }
                    }
                }, {
                    key: 'inputChangeHandler',
                    value: function inputChangeHandler(e) {
                        e.stopPropagation();
                    }
                }, {
                    key: 'bindClearEvent',
                    value: function bindClearEvent() {
                        if (this.showClearButton && this.inputWrapper.clearButton) {
                            EventHandler.add(this.inputWrapper.clearButton, 'mousedown touchstart', this.resetHandler, this);
                        }
                    }
                }, {
                    key: 'resetHandler',
                    value: function resetHandler(e) {
                        e.preventDefault();
                        this.clear();
                        this.changeTrigger(e);
                        this.clearRange();
                        this.hide();
                    }
                }, {
                    key: 'clear',
                    value: function clear() {
                        if (this.startDate !== null) {
                            this.setProperties({ startDate: null }, true);
                        }
                        if (this.endDate !== null) {
                            this.setProperties({ endDate: null }, true);
                        }
                        if (this.value !== null) {
                            this.setProperties({ value: null }, true);
                        }
                        Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
                        if (!isNullOrUndefined(this.applyButton)) {
                            this.applyButton.disabled = this.applyButton.element.disabled = true;
                        }
                    }
                }, {
                    key: 'rangeIconHandler',
                    value: function rangeIconHandler(e) {
                        e.preventDefault();
                        this.targetElement = null;
                        this.effect = '';
                        if (this.isPopupOpen()) {
                            this.applyFunction(e);
                        } else {
                            this.isRangeIconClicked = true;
                            if (!this.isMobile) {
                                this.inputWrapper.container.children[0].focus();
                            }
                            this.show();
                            if (!this.isMobile) {
                                if (!isNullOrUndefined(this.leftCalendar)) {
                                    this.isRangeIconClicked = false;
                                    this.calendarFocus();
                                    this.isRangeIconClicked = true;
                                }
                                addClass([this.inputWrapper.container], [INPUTFOCUS$1]);
                            }
                        }
                    }
                }, {
                    key: 'checkHtmlAttributes',
                    value: function checkHtmlAttributes() {
                        this.globalize = new Internationalization(this.locale);
                        var attributes$$1 = void 0;
                        attributes$$1 = ['startDate', 'endDate', 'minDays', 'maxDays', 'min', 'max', 'disabled', 'readonly', 'style', 'name', 'placeholder', 'type'];
                        var format = { format: this.format, type: 'date', skeleton: 'yMd' };
                        var _iteratorNormalCompletion7 = true;
                        var _didIteratorError7 = false;
                        var _iteratorError7 = undefined;

                        try {
                            for (var _iterator7 = attributes$$1[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                var prop = _step7.value;

                                if (!isNullOrUndefined(this.inputElement.getAttribute(prop))) {
                                    switch (prop) {
                                        case 'disabled':
                                            var disabled = this.inputElement.getAttribute(prop) === 'disabled' || this.inputElement.getAttribute(prop) === '';
                                            this.setProperties({ enabled: !disabled }, true);
                                            break;
                                        case 'readonly':
                                            var readonly = this.inputElement.getAttribute(prop) === 'readonly' || this.inputElement.getAttribute(prop) === '';
                                            this.setProperties({ readonly: readonly }, true);
                                            break;
                                        case 'placeholder':
                                            if (isNullOrUndefined(this.placeholder) || this.placeholder.trim() === '') {
                                                this.setProperties({ placeholder: this.inputElement.getAttribute(prop) }, true);
                                            }
                                            break;
                                        case 'style':
                                            this.inputElement.setAttribute('style', '' + this.inputElement.getAttribute(prop));
                                            break;
                                        case 'min':
                                            if (isNullOrUndefined(this.min) || +this.min === +new Date(1900, 0, 1)) {
                                                var dateValue = this.globalize.parseDate(this.inputElement.getAttribute(prop), format);
                                                this.setProperties(setValue(prop, dateValue, {}), true);
                                            }
                                            break;
                                        case 'name':
                                            this.inputElement.setAttribute('name', '' + this.inputElement.getAttribute(prop));
                                            break;
                                        case 'max':
                                            if (isNullOrUndefined(this.max) || +this.max === +new Date(2099, 11, 31)) {
                                                var _dateValue = this.globalize.parseDate(this.inputElement.getAttribute(prop), format);
                                                this.setProperties(setValue(prop, _dateValue, {}), true);
                                            }
                                            break;
                                        case 'startDate':
                                            if (isNullOrUndefined(this.startDate)) {
                                                var _dateValue2 = this.globalize.parseDate(this.inputElement.getAttribute(prop), format);
                                                this.setProperties(setValue(prop, _dateValue2, {}), true);
                                                this.setValue();
                                            }
                                            break;
                                        case 'endDate':
                                            if (isNullOrUndefined(this.endDate)) {
                                                var _dateValue3 = this.globalize.parseDate(this.inputElement.getAttribute(prop), format);
                                                this.setProperties(setValue(prop, _dateValue3, {}), true);
                                                this.setValue();
                                            }
                                            break;
                                        case 'minDays':
                                            if (isNullOrUndefined(this.minDays)) {
                                                this.setProperties(setValue(prop, parseInt(this.inputElement.getAttribute(prop), 10), {}), true);
                                            }
                                            break;
                                        case 'maxDays':
                                            if (isNullOrUndefined(this.maxDays)) {
                                                this.setProperties(setValue(prop, parseInt(this.inputElement.getAttribute(prop), 10), {}), true);
                                            }
                                            break;
                                        case 'type':
                                            if (this.inputElement.getAttribute(prop) !== 'text') {
                                                this.inputElement.setAttribute('type', 'text');
                                            }
                                            break;
                                    }
                                }
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
                    }
                }, {
                    key: 'createPopup',
                    value: function createPopup() {
                        for (var i = 0; i < this.presetsItem.length; i++) {
                            if (i !== this.presetsItem.length - 1 && this.presetsItem[i].id === 'custom_range') {
                                this.presetsItem.splice(i, 1);
                            }
                        }
                        this.activeIndex = this.presetsItem.length - 1;
                        this.isCustomRange = true;
                        for (var _i = 0; _i <= this.presetsItem.length - 2; _i++) {
                            var startDate = this.presetsItem[_i].start;
                            var endDate = this.presetsItem[_i].end;
                            if (this.startDate && this.endDate) {
                                if (+startDate.setMilliseconds(0) === +this.startDate.setMilliseconds(0) && +endDate.setMilliseconds(0) === +this.endDate.setMilliseconds(0)) {
                                    this.activeIndex = _i;
                                    this.isCustomRange = false;
                                }
                            }
                        }
                        this.popupWrapper = createElement('div', { id: this.element.id + '_popup', className: ROOT$2 + ' ' + POPUP$1 });
                        var isPreset = !this.isCustomRange || this.isMobile;
                        if (!isUndefined(this.presets[0].start && this.presets[0].end && this.presets[0].label) && isPreset) {
                            this.isCustomWindow = false;
                            this.createPresets();
                            document.body.appendChild(this.popupWrapper);
                            this.listRippleEffect();
                            this.renderPopup();
                        } else {
                            this.isCustomWindow = true;
                            this.renderControl();
                        }
                    }
                }, {
                    key: 'renderControl',
                    value: function renderControl() {
                        this.createControl();
                        this.bindCalendarEvents();
                        this.updateRange(this.isMobile ? [this.calendarElement] : [this.leftCalendar, this.rightCalendar]);
                        if (!isNullOrUndefined(this.endDate) && !isNullOrUndefined(this.startDate)) {
                            this.disabledDateRender();
                        }
                        this.updateHeader();
                    }
                }, {
                    key: 'clearCalendarEvents',
                    value: function clearCalendarEvents() {
                        EventHandler.clearEvents(this.leftCalPrevIcon);
                        EventHandler.clearEvents(this.leftCalNextIcon);
                        EventHandler.clearEvents(this.rightCalPrevIcon);
                        EventHandler.clearEvents(this.rightCalNextIcon);
                    }
                }, {
                    key: 'updateNavIcons',
                    value: function updateNavIcons() {
                        this.previousIcon = this.rightCalPrevIcon;
                        this.nextIcon = this.leftCalNextIcon;
                        this.nextIconHandler(this.compareMonths(new Date('' + this.leftCalCurrentDate), this.rightCalCurrentDate) < 1);
                        this.previousIconHandler(this.compareMonths(new Date('' + this.leftCalCurrentDate), this.rightCalCurrentDate) < 1);
                    }
                }, {
                    key: 'calendarIconEvent',
                    value: function calendarIconEvent() {
                        this.clearCalendarEvents();
                        if (this.leftCalPrevIcon && !this.leftCalPrevIcon.classList.contains(DISABLED$1)) {
                            EventHandler.add(this.leftCalPrevIcon, 'mousedown', this.navPrevFunction);
                        }
                        if (this.leftCalNextIcon && !this.leftCalNextIcon.classList.contains(DISABLED$1)) {
                            EventHandler.add(this.leftCalNextIcon, 'mousedown', this.navNextFunction);
                        }
                        if (this.rightCalPrevIcon && !this.rightCalPrevIcon.classList.contains(DISABLED$1)) {
                            EventHandler.add(this.rightCalPrevIcon, 'mousedown', this.navPrevFunction);
                        }
                        if (this.rightCalNextIcon && !this.rightCalNextIcon.classList.contains(DISABLED$1)) {
                            EventHandler.add(this.rightCalNextIcon, 'mousedown', this.navNextFunction);
                        }
                    }
                }, {
                    key: 'bindCalendarEvents',
                    value: function bindCalendarEvents() {
                        if (!this.isMobile) {
                            this.updateNavIcons();
                            this.calendarIconEvent();
                            this.calendarIconRipple();
                            this.headerTitleElement = this.popupObj.element.querySelector('.' + RIGHTCALENDER + ' .' + HEADER$1 + ' .' + TITLE$1);
                            this.headerTitleElement = this.popupObj.element.querySelector('.' + LEFTCALENDER + ' .' + HEADER$1 + ' .' + TITLE$1);
                            this.leftKeyboardModule = new KeyboardEvents(this.leftCalendar, {
                                eventName: 'keydown',
                                keyAction: this.keyInputHandler.bind(this),
                                keyConfigs: this.keyConfigs
                            });
                            this.rightKeyboardModule = new KeyboardEvents(this.rightCalendar, {
                                eventName: 'keydown',
                                keyAction: this.keyInputHandler.bind(this),
                                keyConfigs: this.keyConfigs
                            });
                        } else {
                            this.deviceCalendarEvent();
                            EventHandler.add(this.startButton.element, 'click', this.deviceHeaderClick, this);
                            EventHandler.add(this.endButton.element, 'click', this.deviceHeaderClick, this);
                        }
                        this.bindCalendarCellEvents();
                        this.removeFocusedDate();
                    }
                }, {
                    key: 'calendarIconRipple',
                    value: function calendarIconRipple() {
                        rippleEffect(this.leftCalPrevIcon, { selector: '.e-prev', duration: 400, isCenterRipple: true });
                        rippleEffect(this.leftCalNextIcon, { selector: '.e-next', duration: 400, isCenterRipple: true });
                        rippleEffect(this.rightCalPrevIcon, { selector: '.e-prev', duration: 400, isCenterRipple: true });
                        rippleEffect(this.rightCalNextIcon, { selector: '.e-next', duration: 400, isCenterRipple: true });
                    }
                }, {
                    key: 'deviceCalendarEvent',
                    value: function deviceCalendarEvent() {
                        EventHandler.clearEvents(this.nextIcon);
                        EventHandler.clearEvents(this.previousIcon);
                        rippleEffect(this.nextIcon, { selector: '.e-prev', duration: 400, isCenterRipple: true });
                        rippleEffect(this.previousIcon, { selector: '.e-next', duration: 400, isCenterRipple: true });
                        if (this.nextIcon && !this.nextIcon.classList.contains(DISABLED$1)) {
                            EventHandler.add(this.nextIcon, 'mousedown', this.deviceNavNextFunction);
                        }
                        if (this.previousIcon && !this.previousIcon.classList.contains(DISABLED$1)) {
                            EventHandler.add(this.previousIcon, 'mousedown', this.deviceNavPrevFunction);
                        }
                    }
                }, {
                    key: 'deviceNavNext',
                    value: function deviceNavNext(e) {
                        var calendar = closest(e.target, '.' + CALENDAR);
                        this.updateDeviceCalendar(calendar);
                        this.navigateNext(e);
                        this.deviceNavigation();
                    }
                }, {
                    key: 'deviceNavPrevious',
                    value: function deviceNavPrevious(e) {
                        var calendar = closest(e.target, '.' + CALENDAR);
                        this.updateDeviceCalendar(calendar);
                        this.navigatePrevious(e);
                        this.deviceNavigation();
                    }
                }, {
                    key: 'updateDeviceCalendar',
                    value: function updateDeviceCalendar(calendar) {
                        if (calendar) {
                            this.previousIcon = calendar.querySelector('.' + PREVICON$1);
                            this.nextIcon = calendar.querySelector('.' + NEXTICON$1);
                            this.calendarElement = calendar;
                            this.deviceCalendar = calendar;
                            this.contentElement = calendar.querySelector('.' + CONTENT$1);
                            this.tableBodyElement = select('.' + CONTENT$1 + ' tbody', calendar);
                            this.table = calendar.querySelector('.' + CONTENT$1).getElementsByTagName('table')[0];
                            this.headerTitleElement = calendar.querySelector('.' + HEADER$1 + ' .' + TITLE$1);
                            this.headerElement = calendar.querySelector('.' + HEADER$1);
                        }
                    }
                }, {
                    key: 'deviceHeaderClick',
                    value: function deviceHeaderClick(event) {
                        var element = event.currentTarget;
                        if (element.classList.contains(STARTBUTTON) && !isNullOrUndefined(this.startDate)) {
                            this.endButton.element.classList.remove(ACTIVE$1);
                            this.startButton.element.classList.add(ACTIVE$1);
                            var calendar = this.popupObj.element.querySelector('.' + CALENDAR);
                            this.updateDeviceCalendar(calendar);
                            if (isNullOrUndefined(this.calendarElement.querySelector('.' + STARTDATE + ':not(.e-other-month)'))) {
                                this.currentDate = new Date(+this.startDate);
                                remove(this.tableBodyElement);
                                this.renderMonths();
                                this.deviceNavigation();
                            }
                            this.removeClassDisabled();
                        } else if (!isNullOrUndefined(this.startDate) && !isNullOrUndefined(this.endDate)) {
                            this.startButton.element.classList.remove(ACTIVE$1);
                            this.endButton.element.classList.add(ACTIVE$1);
                            var _calendar = this.popupObj.element.querySelector('.' + CALENDAR);
                            this.updateDeviceCalendar(_calendar);
                            if (isNullOrUndefined(this.calendarElement.querySelector('.' + ENDDATE + ':not(.e-other-month)'))) {
                                this.currentDate = new Date(+this.endDate);
                                remove(this.tableBodyElement);
                                this.renderMonths();
                                this.deviceNavigation();
                            }
                            this.updateMinMaxDays(this.popupObj.element.querySelector('.' + CALENDAR));
                            this.selectableDates();
                        }
                    }
                }, {
                    key: 'inputFocusHandler',
                    value: function inputFocusHandler() {
                        this.preventBlur = false;
                        var focusArguments = {
                            model: this
                        };
                        if (!this.preventFocus) {
                            this.trigger('focus', focusArguments);
                        }
                    }
                }, {
                    key: 'inputBlurHandler',
                    value: function inputBlurHandler(e) {
                        if (!this.preventBlur) {
                            var value = this.inputElement.value;
                            if (!isNullOrUndefined(this.presetsItem)) {
                                if (this.presetsItem.length > 0 && this.previousEleValue !== this.inputElement.value) {
                                    this.activeIndex = this.presetsItem.length - 1;
                                    this.isCustomRange = true;
                                }
                            }
                            if (!isNullOrUndefined(value) && value.trim() !== '') {
                                var range = value.split(' ' + this.separator + ' ');
                                if (range.length > 1) {
                                    var dateOptions = { format: this.format, type: 'date', skeleton: 'yMd' };
                                    var startDate = this.globalize.parseDate(range[0].trim(), dateOptions);
                                    var endDate = this.globalize.parseDate(range[1].trim(), dateOptions);
                                    if (!isNullOrUndefined(startDate) && !isNaN(+startDate) && !isNullOrUndefined(endDate) && !isNaN(+endDate)) {
                                        this.setProperties({ startDate: startDate }, true);
                                        this.setProperties({ endDate: endDate }, true);
                                        this.setValue();
                                        this.refreshControl();
                                        this.changeTrigger(e);
                                        if (!this.preventBlur && document.activeElement !== this.inputElement) {
                                            this.preventFocus = false;
                                            var blurArguments = {
                                                model: this
                                            };
                                            this.trigger('blur', blurArguments);
                                        }
                                        return;
                                    } else {
                                        if (!this.strictMode) {
                                            this.setProperties({ startDate: null }, true);
                                            this.setProperties({ endDate: null }, true);
                                            this.setValue();
                                        }
                                    }
                                } else {
                                    if (!this.strictMode) {
                                        this.setProperties({ startDate: null }, true);
                                        this.setProperties({ endDate: null }, true);
                                        this.setValue();
                                    }
                                }
                            }
                            if (!this.strictMode) {
                                this.clearRange();
                                this.setProperties({ startDate: null }, true);
                                this.setProperties({ endDate: null }, true);
                                this.setValue();
                            } else {
                                Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
                                this.updateInput();
                            }
                            this.errorClass();
                            this.changeTrigger(e);
                            if (!this.preventBlur && document.activeElement !== this.inputElement) {
                                this.preventFocus = false;
                                var _blurArguments = {
                                    model: this
                                };
                                this.trigger('blur', _blurArguments);
                            }
                        }
                    }
                }, {
                    key: 'clearRange',
                    value: function clearRange() {
                        this.previousStartValue = this.previousEndValue = null;
                        this.currentDate = null;
                    }
                }, {
                    key: 'errorClass',
                    value: function errorClass() {
                        var inputStr = this.inputElement.value.trim();
                        if (inputStr !== '' && (isNullOrUndefined(this.endDate) && isNullOrUndefined(this.startDate) && inputStr !== '' || !isNullOrUndefined(this.startDate) && +this.startDate < +this.min || !isNullOrUndefined(this.startDate) && !isNullOrUndefined(this.endDate) && +this.startDate > +this.endDate || !isNullOrUndefined(this.endDate) && +this.endDate > +this.max || this.startDate && this.isDateDisabled(this.startDate) || this.endDate && this.isDateDisabled(this.endDate))) {
                            addClass([this.inputWrapper.container], ERROR$1);
                            attributes(this.inputElement, { 'aria-invalid': 'true' });
                        } else {
                            if (this.inputWrapper) {
                                removeClass([this.inputWrapper.container], ERROR$1);
                                attributes(this.inputElement, { 'aria-invalid': 'false' });
                            }
                        }
                    }
                }, {
                    key: 'keyCalendarUpdate',
                    value: function keyCalendarUpdate(isLeftCalendar, ele) {
                        this.removeFocusedDate();
                        if (isLeftCalendar) {
                            this.leftCalCurrentDate = new Date(+this.currentDate);
                            ele = this.leftCalendar;
                        } else {
                            this.rightCalCurrentDate = new Date(+this.currentDate);
                            ele = this.rightCalendar;
                        }
                        this.updateCalendarElement(ele);
                        this.table.focus();
                        return ele;
                    }
                }, {
                    key: 'navInCalendar',
                    value: function navInCalendar(e, isLeftCalendar, leftLimit, rightLimit, ele) {
                        var date = void 0;
                        var min = this.min;
                        var max = void 0;
                        if (!isNullOrUndefined(this.maxDays) && this.isMaxDaysClicked && !isNullOrUndefined(this.startDate)) {
                            max = new Date(new Date(+this.startDate).setDate(this.startDate.getDate() + (this.maxDays - 1)));
                        } else {
                            max = this.max;
                        }
                        switch (e.action) {
                            case 'moveRight':
                                date = new Date(+this.currentDate);
                                this.addDay(date, 1, e, max, min);
                                if (isLeftCalendar && +date === +rightLimit) {
                                    ele = this.keyCalendarUpdate(false, ele);
                                }
                                this.KeyboardNavigate(1, 0, e, max, min);
                                this.keyNavigation(ele, e);
                                break;
                            case 'moveLeft':
                                date = new Date(+this.currentDate);
                                this.addDay(date, -1, e, max, min);
                                if (!isLeftCalendar && +date === +leftLimit) {
                                    ele = this.keyCalendarUpdate(true, ele);
                                }
                                this.KeyboardNavigate(-1, 0, e, max, min);
                                this.keyNavigation(ele, e);
                                break;
                            case 'moveUp':
                                date = new Date(+this.currentDate);
                                this.addDay(date, -7, e, max, min);
                                if (!isLeftCalendar && +date <= +leftLimit) {
                                    ele = this.keyCalendarUpdate(true, ele);
                                }
                                this.KeyboardNavigate(-7, 0, e, max, min);
                                this.keyNavigation(ele, e);
                                break;
                            case 'moveDown':
                                date = new Date(+this.currentDate);
                                this.addDay(date, 7, e, max, min);
                                if (isLeftCalendar && +date >= +rightLimit) {
                                    ele = this.keyCalendarUpdate(false, ele);
                                }
                                this.KeyboardNavigate(7, 0, e, max, min);
                                this.keyNavigation(ele, e);
                                break;
                            case 'home':
                                this.currentDate = this.firstDay(this.currentDate);
                                remove(this.tableBodyElement);
                                this.renderMonths();
                                this.keyNavigation(ele, e);
                                break;
                            case 'end':
                                this.currentDate = this.lastDay(this.currentDate);
                                remove(this.tableBodyElement);
                                this.renderMonths();
                                this.keyNavigation(ele, e);
                                break;
                        }
                    }
                }, {
                    key: 'keyInputHandler',
                    value: function keyInputHandler(e) {
                        var date = void 0;
                        var rightDateLimit = new Date(this.rightCalCurrentDate.getFullYear(), this.rightCalCurrentDate.getMonth(), 1);
                        var leftDateLimit = new Date(this.leftCalCurrentDate.getFullYear(), this.leftCalCurrentDate.getMonth() + 1, 0);
                        var ele = closest(e.target, '.' + RIGHTCALENDER);
                        ele = isNullOrUndefined(ele) ? this.leftCalendar : ele;
                        var isLeftCalendar = ele.classList.contains(LEFTCALENDER);
                        this.updateCalendarElement(ele);
                        var focusedDate = ele.querySelector('tr td.' + FOCUSDATE);
                        var startDate = ele.querySelector('tr td.' + STARTDATE);
                        var endDate = ele.querySelector('tr td.' + ENDDATE);
                        if (!isNullOrUndefined(focusedDate)) {
                            this.currentDate = this.currentDate;
                        } else if (!isNullOrUndefined(endDate) && !this.dateDisabled) {
                            this.currentDate = new Date(+this.endDate);
                        } else if (!isNullOrUndefined(startDate) && !this.dateDisabled) {
                            this.currentDate = new Date(+this.startDate);
                        } else if (!this.dateDisabled) {
                            this.currentDate.setDate(1);
                        }
                        this.effect = '';
                        switch (e.action) {
                            case 'altUpArrow':
                                if (this.isPopupOpen()) {
                                    this.hide();
                                    this.preventFocus = true;
                                    if (!this.isMobile) {
                                        this.inputElement.focus();
                                        addClass([this.inputWrapper.container], [INPUTFOCUS$1]);
                                    }
                                }
                                break;
                            case 'select':
                                var element = !isNullOrUndefined(focusedDate) ? focusedDate : startDate;
                                if (!isNullOrUndefined(element) && !element.classList.contains(DISABLED$1)) {
                                    this.selectRange(e, element);
                                }
                                e.preventDefault();
                                break;
                            case 'controlHome':
                                var yearDate = new Date(this.currentDate.getFullYear(), 0, 1);
                                if (!isLeftCalendar && +yearDate < +leftDateLimit) {
                                    ele = this.keyCalendarUpdate(true, ele);
                                }
                                this.navigateTo('Month', new Date(this.currentDate.getFullYear(), 0, 1));
                                this.keyNavigation(ele, e);
                                break;
                            case 'controlEnd':
                                yearDate = new Date(this.currentDate.getFullYear(), 11, 31);
                                if (isLeftCalendar && +yearDate > +rightDateLimit) {
                                    ele = this.keyCalendarUpdate(false, ele);
                                }
                                this.navigateTo('Month', new Date(this.currentDate.getFullYear(), 11, 31));
                                this.keyNavigation(ele, e);
                                break;
                            case 'pageUp':
                                date = new Date(+this.currentDate);
                                this.addMonths(date, -1);
                                if (!isLeftCalendar && +date <= +leftDateLimit) {
                                    ele = this.keyCalendarUpdate(true, ele);
                                }
                                this.addMonths(this.currentDate, -1);
                                this.navigateTo('Month', this.currentDate);
                                this.keyNavigation(ele, e);
                                break;
                            case 'pageDown':
                                date = new Date(+this.currentDate);
                                this.addMonths(date, 1);
                                if (isLeftCalendar && +date >= +rightDateLimit) {
                                    ele = this.keyCalendarUpdate(false, ele);
                                }
                                this.addMonths(this.currentDate, 1);
                                this.navigateTo('Month', this.currentDate);
                                this.keyNavigation(ele, e);
                                break;
                            case 'shiftPageUp':
                                date = new Date(+this.currentDate);
                                this.addYears(date, -1);
                                if (!isLeftCalendar && +date <= +leftDateLimit) {
                                    ele = this.keyCalendarUpdate(true, ele);
                                }
                                this.addYears(this.currentDate, -1);
                                this.navigateTo('Month', this.currentDate);
                                this.keyNavigation(ele, e);
                                break;
                            case 'shiftPageDown':
                                date = new Date(+this.currentDate);
                                this.addYears(date, 1);
                                if (isLeftCalendar && +date >= +rightDateLimit) {
                                    ele = this.keyCalendarUpdate(false, ele);
                                }
                                this.addYears(this.currentDate, 1);
                                this.navigateTo('Month', this.currentDate);
                                this.keyNavigation(ele, e);
                                break;
                            case 'shiftTab':
                                if (!isNullOrUndefined(this.presetElement)) {
                                    this.presetElement.setAttribute('tabindex', '0');
                                    this.presetElement.focus();
                                    this.removeFocusedDate();
                                }
                                e.preventDefault();
                                break;
                            case 'spaceBar':
                                if (this.applyButton && !this.applyButton.disabled) {
                                    this.applyFunction(e);
                                }
                                break;
                            default:
                                this.navInCalendar(e, isLeftCalendar, leftDateLimit, rightDateLimit, ele);
                                this.checkMinMaxDays();
                        }
                        this.presetHeight();
                    }
                }, {
                    key: 'keyNavigation',
                    value: function keyNavigation(calendar, e) {
                        this.bindCalendarCellEvents(calendar);
                        if (calendar.classList.contains(LEFTCALENDER)) {
                            this.leftCalCurrentDate = new Date(+this.currentDate);
                        } else {
                            this.rightCalCurrentDate = new Date(+this.currentDate);
                        }
                        this.updateNavIcons();
                        this.calendarIconEvent();
                        this.updateRange([calendar]);
                        this.dateDisabled = this.isDateDisabled(this.currentDate);
                        e.preventDefault();
                    }
                }, {
                    key: 'inputHandler',
                    value: function inputHandler(e) {
                        switch (e.action) {
                            case 'altDownArrow':
                                if (!this.isPopupOpen()) {
                                    this.show();
                                    this.isRangeIconClicked = false;
                                    if (!this.isMobile) {
                                        if (!isNullOrUndefined(this.leftCalendar)) {
                                            this.calendarFocus();
                                        }
                                    }
                                    this.isKeyPopup = true;
                                }
                                break;
                            case 'escape':
                                if (this.isPopupOpen()) {
                                    this.hide();
                                }
                                break;
                            case 'enter':
                                if (document.activeElement === this.inputElement) {
                                    this.inputBlurHandler(e);
                                    this.hide();
                                }
                                break;
                            case 'tab':
                                if (document.activeElement === this.inputElement && this.isPopupOpen()) {
                                    this.hide();
                                    e.preventDefault();
                                }
                                break;
                        }
                    }
                }, {
                    key: 'bindCalendarCellEvents',
                    value: function bindCalendarCellEvents(calendar) {
                        var tdCells = void 0;
                        if (calendar) {
                            tdCells = calendar.querySelectorAll('.' + CALENDAR + ' td');
                        } else {
                            tdCells = this.popupObj.element.querySelectorAll('.' + CALENDAR + ' td');
                        }
                        var _iteratorNormalCompletion8 = true;
                        var _didIteratorError8 = false;
                        var _iteratorError8 = undefined;

                        try {
                            for (var _iterator8 = tdCells[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                var cell = _step8.value;

                                EventHandler.clearEvents(cell);
                                var disabledCell = void 0;
                                disabledCell = cell.classList.contains(DISABLED$1) || cell.classList.contains(DATEDISABLED);
                                if (!disabledCell && !cell.classList.contains(WEEKNUMBER$1)) {
                                    EventHandler.add(cell, 'mousedown', this.selectRange, this);
                                    if (!this.isMobile) {
                                        EventHandler.add(cell, 'mouseover', this.hoverSelection, this);
                                    }
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
                    key: 'removeFocusedDate',
                    value: function removeFocusedDate() {
                        var isDate = !isNullOrUndefined(this.startDate) || !isNullOrUndefined(this.endDate);
                        var focusedDate = void 0;
                        focusedDate = this.popupObj.element.querySelectorAll('.' + CALENDAR + ' .' + FOCUSDATE);
                        if (this.leftCalendar && this.leftCalendar.querySelector('.e-content').classList.contains('e-month') && this.rightCalendar && this.rightCalendar.querySelector('.e-content').classList.contains('e-month') || this.calendarElement && this.calendarElement.querySelector('.e-content').classList.contains('e-month')) {
                            var _iteratorNormalCompletion9 = true;
                            var _didIteratorError9 = false;
                            var _iteratorError9 = undefined;

                            try {
                                for (var _iterator9 = focusedDate[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                    var ele = _step9.value;

                                    if (!ele.classList.contains(TODAY$1) || ele.classList.contains(TODAY$1) && isDate) {
                                        ele.classList.remove(FOCUSDATE);
                                        if (!ele.classList.contains(STARTDATE) && !ele.classList.contains(ENDDATE)) {
                                            ele.removeAttribute('aria-label');
                                        }
                                    }
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
                    }
                }, {
                    key: 'hoverSelection',
                    value: function hoverSelection(event, element) {
                        var currentElement = element || event.currentTarget;
                        var currentDate = this.getIdValue(null, currentElement);
                        if (!isNullOrUndefined(this.startDate) && +this.startDate >= +this.min && +this.startDate <= +this.max || !isNullOrUndefined(this.endDate) && +this.endDate >= +this.min && +this.endDate <= +this.max) {
                            if (!this.isDateDisabled(this.endDate) && !this.isDateDisabled(this.startDate) && isNullOrUndefined(this.startDate) && isNullOrUndefined(this.endDate) || !isNullOrUndefined(this.startDate) && isNullOrUndefined(this.endDate)) {
                                var tdCells = void 0;
                                tdCells = this.popupObj.element.querySelectorAll('.' + CALENDAR + ' td');
                                var _iteratorNormalCompletion10 = true;
                                var _didIteratorError10 = false;
                                var _iteratorError10 = undefined;

                                try {
                                    for (var _iterator10 = tdCells[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                        var ele = _step10.value;

                                        var isDisabledCell = !ele.classList.contains(DISABLED$1) || ele.classList.contains(DATEDISABLED);
                                        if (!ele.classList.contains(WEEKNUMBER$1) && isDisabledCell) {
                                            var eleDate = this.getIdValue(null, ele);
                                            var startDateValue = new Date(+this.startDate);
                                            var eleDateValue = new Date(+eleDate);
                                            if (eleDateValue.setHours(0, 0, 0, 0) >= startDateValue.setHours(0, 0, 0, 0) && +eleDate <= +currentDate) {
                                                addClass([ele], RANGEHOVER);
                                            } else {
                                                removeClass([ele], [RANGEHOVER]);
                                            }
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
                        }
                    }
                }, {
                    key: 'updateRange',
                    value: function updateRange(elementCollection) {
                        if (!isNullOrUndefined(this.startDate)) {
                            var _iteratorNormalCompletion11 = true;
                            var _didIteratorError11 = false;
                            var _iteratorError11 = undefined;

                            try {
                                for (var _iterator11 = elementCollection[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                    var calendar = _step11.value;

                                    var tdCells = calendar.querySelectorAll('.' + CALENDAR + ' td');
                                    var _iteratorNormalCompletion12 = true;
                                    var _didIteratorError12 = false;
                                    var _iteratorError12 = undefined;

                                    try {
                                        for (var _iterator12 = tdCells[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                            var ele = _step12.value;

                                            if (!ele.classList.contains(WEEKNUMBER$1) && !ele.classList.contains(DISABLED$1)) {
                                                var eleDate = this.getIdValue(null, ele);
                                                if (!isNullOrUndefined(this.endDate)) {
                                                    if (+eleDate >= +this.startDate && +eleDate <= +this.endDate && +this.startDate !== +this.endDate && +this.startDate >= +this.min && +this.endDate <= +this.max && !(this.isDateDisabled(this.startDate) || this.isDateDisabled(this.endDate))) {
                                                        addClass([ele], RANGEHOVER);
                                                    }
                                                } else {
                                                    removeClass([ele], [RANGEHOVER]);
                                                }
                                                if (!ele.classList.contains(OTHERMONTH$1)) {
                                                    var startDateValue = new Date(+this.startDate);
                                                    var eleDateValue = new Date(+eleDate);
                                                    if (eleDateValue.setHours(0, 0, 0, 0) === startDateValue.setHours(0, 0, 0, 0) && eleDateValue.setHours(0, 0, 0, 0) >= startDateValue.setHours(0, 0, 0, 0) && +this.startDate >= +this.min && !this.inputWrapper.container.classList.contains('e-error') && !(this.isDateDisabled(this.startDate) || this.isDateDisabled(this.endDate))) {
                                                        addClass([ele], [STARTDATE, SELECTED$1, RANGEHOVER]);
                                                        this.addSelectedAttributes(ele, this.startDate, true);
                                                    }
                                                    if (!isNullOrUndefined(this.endDate) && +eleDate === +this.endDate && +eleDate <= +this.endDate && +this.startDate >= +this.min && !this.inputWrapper.container.classList.contains('e-error') && !(this.isDateDisabled(this.startDate) || this.isDateDisabled(this.endDate))) {
                                                        addClass([ele], [ENDDATE, SELECTED$1]);
                                                        this.addSelectedAttributes(ele, this.endDate, false);
                                                    }
                                                    if (+eleDate === +this.startDate && !isNullOrUndefined(this.endDate) && +eleDate === +this.endDate) {
                                                        this.addSelectedAttributes(ele, this.endDate, false, true);
                                                    }
                                                }
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
                    }
                }, {
                    key: 'checkMinMaxDays',
                    value: function checkMinMaxDays() {
                        if (!isNullOrUndefined(this.minDays) && this.minDays > 0 || !isNullOrUndefined(this.maxDays) && this.maxDays > 0) {
                            if (!this.isMobile) {
                                this.updateMinMaxDays(this.popupObj.element.querySelector('.' + LEFTCALENDER));
                                this.updateMinMaxDays(this.popupObj.element.querySelector('.' + RIGHTCALENDER));
                            } else {
                                this.updateMinMaxDays(this.popupObj.element.querySelector('.' + CALENDAR));
                            }
                        }
                    }
                }, {
                    key: 'rangeArgs',
                    value: function rangeArgs(e) {
                        var inputValue = void 0;
                        var range = void 0;
                        var startDate = !isNullOrUndefined(this.startDate) ? this.globalize.formatDate(this.startDate, { format: this.format, type: 'date', skeleton: 'yMd' }) : null;
                        var endDate = !isNullOrUndefined(this.endDate) ? this.globalize.formatDate(this.endDate, { format: this.format, type: 'date', skeleton: 'yMd' }) : null;
                        if (!isNullOrUndefined(this.endDate) && !isNullOrUndefined(this.startDate)) {
                            inputValue = startDate + ' ' + this.separator + ' ' + endDate;
                            range = Math.round(Math.abs((this.startDate.getTime() - this.endDate.getTime()) / (1000 * 60 * 60 * 24))) + 1;
                        } else {
                            inputValue = '';
                            range = 0;
                        }
                        var args = {
                            value: this.value,
                            startDate: this.startDate,
                            endDate: this.endDate,
                            daySpan: range,
                            e: e || null,
                            element: this.element,
                            isInteracted: !isNullOrUndefined(e),
                            text: inputValue
                        };
                        return args;
                    }
                }, {
                    key: 'otherMonthSelect',
                    value: function otherMonthSelect(ele, isStartDate, sameDate) {
                        var value = +this.getIdValue(null, ele);
                        var dateIdString = '*[id^="/id"]:not(.e-other-month)'.replace('/id', '' + value);
                        var tdCell = this.popupObj.element.querySelector(dateIdString);
                        if (!isNullOrUndefined(tdCell)) {
                            if (isStartDate) {
                                addClass([tdCell], [STARTDATE, SELECTED$1]);
                                this.addSelectedAttributes(tdCell, this.startDate, true);
                            } else {
                                addClass([tdCell], [ENDDATE, SELECTED$1]);
                                this.addSelectedAttributes(tdCell, this.endDate, true);
                            }
                            if (sameDate) {
                                this.addSelectedAttributes(ele, this.endDate, false, true);
                            }
                        }
                    }
                }, {
                    key: 'selectRange',
                    value: function selectRange(event, element) {
                        event.preventDefault();
                        var date = void 0;
                        date = event instanceof MouseEvent ? this.getIdValue(event, null) : this.getIdValue(null, element);
                        if (!isNullOrUndefined(this.endDate) && !isNullOrUndefined(this.startDate)) {
                            if (!this.isMobile || this.isMobile && !this.endButton.element.classList.contains(ACTIVE$1)) {
                                this.removeSelection();
                            }
                        } else if (this.isMobile && this.startButton.element.classList.contains(ACTIVE$1)) {
                            this.removeSelection();
                        }
                        var ele = element || event.currentTarget;
                        if (isNullOrUndefined(this.startDate)) {
                            if (!isNullOrUndefined(this.previousStartValue)) {
                                date.setHours(this.previousStartValue.getHours());
                                date.setMinutes(this.previousStartValue.getMinutes());
                                date.setSeconds(this.previousStartValue.getSeconds());
                            }
                            this.setProperties({ startDate: new Date('' + date) }, true);
                            this.setProperties({ endDate: null }, true);
                            this.setValue();
                            addClass([ele], STARTDATE);
                            this.addSelectedAttributes(ele, this.startDate, true);
                            if (ele.classList.contains(OTHERMONTH$1)) {
                                this.otherMonthSelect(ele, true);
                            }
                            this.checkMinMaxDays();
                            this.applyButton.disabled = true;
                            this.applyButton.element.disabled = true;
                            if (this.isMobile) {
                                this.endButton.element.classList.add(ACTIVE$1);
                                this.startButton.element.classList.remove(ACTIVE$1);
                                this.endButton.element.removeAttribute('disabled');
                                this.selectableDates();
                            }
                            this.trigger('select', this.rangeArgs(event));
                        } else {
                            if (+date === +this.startDate || +date > +this.startDate) {
                                if (+date === +this.startDate && !isNullOrUndefined(this.minDays) && this.minDays > 1) {
                                    return;
                                }
                                this.setProperties({ endDate: null }, true);
                                this.setValue();
                                if (this.isMobile || element) {
                                    this.hoverSelection(event, element);
                                }
                                if (!isNullOrUndefined(this.previousEndValue)) {
                                    date.setHours(this.previousEndValue.getHours());
                                    date.setMinutes(this.previousEndValue.getMinutes());
                                    date.setSeconds(this.previousEndValue.getSeconds());
                                }
                                this.setProperties({ endDate: new Date('' + date) }, true);
                                this.setValue();
                                var endEle = this.popupObj.element.querySelectorAll('.' + ENDDATE);
                                if (this.isMobile) {
                                    this.startButton.element.classList.remove(ACTIVE$1);
                                    this.endButton.element.classList.add(ACTIVE$1);
                                    var _iteratorNormalCompletion13 = true;
                                    var _didIteratorError13 = false;
                                    var _iteratorError13 = undefined;

                                    try {
                                        for (var _iterator13 = endEle[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                            var _ele = _step13.value;

                                            _ele.removeAttribute('aria-label');
                                            if (!_ele.classList.contains(STARTDATE)) {
                                                _ele.setAttribute('aria-selected', 'false');
                                                removeClass([_ele], [ENDDATE, SELECTED$1]);
                                            } else {
                                                this.addSelectedAttributes(_ele, this.startDate, true);
                                                removeClass([_ele], [ENDDATE]);
                                            }
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
                                addClass([ele], ENDDATE);
                                if (+this.endDate === +this.startDate) {
                                    this.addSelectedAttributes(ele, this.endDate, false, true);
                                } else {
                                    this.addSelectedAttributes(ele, this.endDate, false);
                                }
                                if (ele.classList.contains(OTHERMONTH$1)) {
                                    if (+this.endDate === +this.startDate) {
                                        this.otherMonthSelect(ele, false, true);
                                    } else {
                                        this.otherMonthSelect(ele, false);
                                    }
                                }
                                endEle = this.popupObj.element.querySelectorAll('.' + ENDDATE);
                                var _iteratorNormalCompletion14 = true;
                                var _didIteratorError14 = false;
                                var _iteratorError14 = undefined;

                                try {
                                    for (var _iterator14 = endEle[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                                        var _ele2 = _step14.value;

                                        if (_ele2.classList.contains(STARTDATE)) {
                                            removeClass([_ele2], [RANGEHOVER]);
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

                                this.applyButton.disabled = false;
                                this.applyButton.element.disabled = false;
                                if (!this.isMobile) {
                                    this.removeClassDisabled();
                                }
                                this.disabledDateRender();
                                this.trigger('select', this.rangeArgs(event));
                            } else if (+date < +this.startDate) {
                                this.removeClassDisabled();
                                this.setProperties({ startDate: new Date('' + date) }, true);
                                this.setValue();
                                this.removeSelectedAttributes();
                                removeClass(this.popupObj.element.querySelectorAll('.' + STARTDATE), [STARTDATE, SELECTED$1]);
                                addClass([ele], STARTDATE);
                                this.addSelectedAttributes(ele, this.startDate, true);
                                if (ele.classList.contains(OTHERMONTH$1)) {
                                    this.otherMonthSelect(ele, true);
                                }
                                this.checkMinMaxDays();
                            }
                        }
                        addClass([ele], SELECTED$1);
                        this.updateHeader();
                        this.removeFocusedDate();
                    }
                }, {
                    key: 'selectableDates',
                    value: function selectableDates() {
                        if (!isNullOrUndefined(this.startDate)) {
                            var tdCells = this.calendarElement.querySelectorAll('.' + CALENDAR + ' td');
                            var isStartDate = false;
                            if (this.currentView() === 'Month') {
                                var _iteratorNormalCompletion15 = true;
                                var _didIteratorError15 = false;
                                var _iteratorError15 = undefined;

                                try {
                                    for (var _iterator15 = tdCells[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                                        var ele = _step15.value;

                                        if (!ele.classList.contains(STARTDATE) && !ele.classList.contains(WEEKNUMBER$1)) {
                                            if (!ele.classList.contains(DISABLED$1)) {
                                                var eleDate = this.getIdValue(null, ele);
                                                if (+eleDate < +this.startDate) {
                                                    addClass([ele], [DATEDISABLED, DISABLED$1, OVERLAY$1]);
                                                    EventHandler.clearEvents(ele);
                                                    continue;
                                                } else {
                                                    break;
                                                }
                                            }
                                        }
                                        if (ele.classList.contains(STARTDATE) && !ele.classList.contains(OTHERMONTH$1)) {
                                            isStartDate = true;
                                            break;
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

                                if (isStartDate) {
                                    if (!this.previousIcon.classList.contains(DISABLED$1)) {
                                        addClass([this.previousIcon], [ICONDISABLED, DISABLED$1, OVERLAY$1]);
                                    }
                                }
                            } else {
                                var _iteratorNormalCompletion16 = true;
                                var _didIteratorError16 = false;
                                var _iteratorError16 = undefined;

                                try {
                                    for (var _iterator16 = tdCells[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                                        var _ele3 = _step16.value;

                                        var startMonth = this.startDate.getMonth();
                                        var startYear = this.startDate.getFullYear();
                                        var element = this.getIdValue(null, _ele3);
                                        if (!this.startButton.element.classList.contains(ACTIVE$1) && (this.currentView() === 'Year' && element.getMonth() < startMonth || this.currentView() === 'Decade' && element.getFullYear() < startYear)) {
                                            addClass([_ele3], [DISABLED$1]);
                                        } else {
                                            break;
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

                                if (tdCells[0].classList.contains(DISABLED$1)) {
                                    this.previousIconHandler(true);
                                } else if (tdCells[tdCells.length - 1].classList.contains(DISABLED$1)) {
                                    this.nextIconHandler(true);
                                }
                            }
                        }
                    }
                }, {
                    key: 'updateMinMaxDays',
                    value: function updateMinMaxDays(calendar) {
                        if (!isNullOrUndefined(this.startDate) && (isNullOrUndefined(this.endDate) || this.isMobile)) {
                            if (!isNullOrUndefined(this.minDays) && this.minDays > 0 || !isNullOrUndefined(this.maxDays) && this.maxDays > 0) {
                                var minDate = new Date(new Date(+this.startDate).setDate(this.startDate.getDate() + (this.minDays - 1)));
                                var maxDate = new Date(new Date(+this.startDate).setDate(this.startDate.getDate() + (this.maxDays - 1)));
                                minDate = !isNullOrUndefined(this.minDays) && this.minDays > 0 ? minDate : null;
                                maxDate = !isNullOrUndefined(this.maxDays) && this.maxDays > 0 ? maxDate : null;
                                var tdCells = calendar.querySelectorAll('.' + CALENDAR + ' td');
                                var maxEle = void 0;
                                var _iteratorNormalCompletion17 = true;
                                var _didIteratorError17 = false;
                                var _iteratorError17 = undefined;

                                try {
                                    for (var _iterator17 = tdCells[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                                        var ele = _step17.value;

                                        if (!ele.classList.contains(STARTDATE) && !ele.classList.contains(WEEKNUMBER$1)) {
                                            var eleDate = this.getIdValue(null, ele);
                                            if (!isNullOrUndefined(minDate) && +eleDate === +minDate && ele.classList.contains(DISABLED$1)) {
                                                minDate.setDate(minDate.getDate() + 1);
                                            }
                                            if (!ele.classList.contains(DISABLED$1)) {
                                                if (+eleDate <= +this.startDate) {
                                                    continue;
                                                }
                                                if (!isNullOrUndefined(minDate) && +eleDate < +minDate) {
                                                    addClass([ele], [DATEDISABLED, DISABLED$1, OVERLAY$1]);
                                                    EventHandler.clearEvents(ele);
                                                }
                                                if (!isNullOrUndefined(maxDate) && +eleDate > +maxDate) {
                                                    addClass([ele], [DATEDISABLED, DISABLED$1, OVERLAY$1]);
                                                    this.isMaxDaysClicked = true;
                                                    EventHandler.clearEvents(ele);
                                                    if (isNullOrUndefined(maxEle) && !ele.classList.contains(OTHERMONTH$1)) {
                                                        maxEle = ele;
                                                    }
                                                }
                                            }
                                        }
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

                                if (!isNullOrUndefined(maxEle)) {
                                    if (this.isMobile) {
                                        if (!this.nextIcon.classList.contains(DISABLED$1)) {
                                            addClass([this.nextIcon], [ICONDISABLED, DISABLED$1, OVERLAY$1]);
                                        }
                                    } else {
                                        var _calendar2 = closest(maxEle, '.' + RIGHTCALENDER);
                                        _calendar2 = isNullOrUndefined(_calendar2) ? this.leftCalendar : _calendar2;
                                        var isLeftCalendar = _calendar2.classList.contains(LEFTCALENDER);
                                        if (!isLeftCalendar) {
                                            if (!this.rightCalNextIcon.classList.contains(DISABLED$1)) {
                                                addClass([this.rightCalNextIcon], [ICONDISABLED, DISABLED$1, OVERLAY$1]);
                                            }
                                        } else {
                                            if (!this.rightCalNextIcon.classList.contains(DISABLED$1)) {
                                                addClass([this.rightCalNextIcon], [ICONDISABLED, DISABLED$1, OVERLAY$1]);
                                            }
                                            if (!this.leftCalNextIcon.classList.contains(DISABLED$1)) {
                                                addClass([this.leftCalNextIcon], [ICONDISABLED, DISABLED$1, OVERLAY$1]);
                                            }
                                            if (!this.rightCalPrevIcon.classList.contains(DISABLED$1)) {
                                                addClass([this.rightCalPrevIcon], [ICONDISABLED, DISABLED$1, OVERLAY$1]);
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            this.isMaxDaysClicked = false;
                        }
                    }
                }, {
                    key: 'removeClassDisabled',
                    value: function removeClassDisabled() {
                        var tdCells = void 0;
                        tdCells = this.popupObj.element.querySelectorAll('.' + CALENDAR + ' td' + '.' + DATEDISABLED);
                        var _iteratorNormalCompletion18 = true;
                        var _didIteratorError18 = false;
                        var _iteratorError18 = undefined;

                        try {
                            for (var _iterator18 = tdCells[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                                var ele = _step18.value;

                                if (ele.classList.contains(DATEDISABLED)) {
                                    removeClass([ele], [DATEDISABLED, DISABLED$1, OVERLAY$1]);
                                    EventHandler.add(ele, 'click', this.selectRange, this);
                                    if (!this.isMobile) {
                                        EventHandler.add(ele, 'mouseover', this.hoverSelection, this);
                                    }
                                }
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

                        if (this.isMobile) {
                            if (this.nextIcon.classList.contains(ICONDISABLED)) {
                                removeClass([this.nextIcon], [ICONDISABLED, DISABLED$1, OVERLAY$1]);
                            }
                            if (this.previousIcon.classList.contains(ICONDISABLED)) {
                                removeClass([this.previousIcon], [ICONDISABLED, DISABLED$1, OVERLAY$1]);
                            }
                        } else {
                            if (this.rightCalNextIcon.classList.contains(ICONDISABLED)) {
                                removeClass([this.rightCalNextIcon], [ICONDISABLED, DISABLED$1, OVERLAY$1]);
                            }
                            if (this.rightCalPrevIcon.classList.contains(ICONDISABLED)) {
                                removeClass([this.rightCalPrevIcon], [ICONDISABLED, DISABLED$1, OVERLAY$1]);
                            }
                            if (this.leftCalNextIcon.classList.contains(ICONDISABLED)) {
                                removeClass([this.leftCalNextIcon], [ICONDISABLED, DISABLED$1, OVERLAY$1]);
                            }
                        }
                    }
                }, {
                    key: 'updateHeader',
                    value: function updateHeader() {
                        var format = { type: 'date', skeleton: 'yMMMd' };
                        if (!isNullOrUndefined(this.endDate) && !isNullOrUndefined(this.startDate)) {
                            var range = Math.round(Math.abs((this.startDate.getTime() - this.endDate.getTime()) / (1000 * 60 * 60 * 24))) + 1;
                            if (!isNullOrUndefined(this.disabledDayCnt)) {
                                range = range - this.disabledDayCnt;
                                this.disabledDayCnt = null;
                            }
                            this.popupObj.element.querySelector('.' + DAYSPAN).textContent = range.toString() + ' ' + this.l10n.getConstant('days');
                        } else {
                            this.popupObj.element.querySelector('.' + DAYSPAN).textContent = this.l10n.getConstant('selectedDays');
                        }
                        if (!this.isMobile) {
                            if (!isNullOrUndefined(this.endDate) && !isNullOrUndefined(this.startDate)) {
                                this.popupObj.element.querySelector('.' + ENDLABEL).textContent = this.globalize.formatDate(this.endDate, format);
                            } else {
                                this.popupObj.element.querySelector('.' + ENDLABEL).textContent = this.l10n.getConstant('endLabel');
                            }
                            if (!isNullOrUndefined(this.startDate)) {
                                this.popupObj.element.querySelector('.' + STARTLABEL).textContent = this.globalize.formatDate(this.startDate, format);
                            } else {
                                this.popupObj.element.querySelector('.' + STARTLABEL).textContent = this.l10n.getConstant('startLabel');
                            }
                        } else {
                            if (!isNullOrUndefined(this.startDate)) {
                                this.startButton.element.textContent = this.globalize.formatDate(this.startDate, format);
                            } else {
                                this.startButton.element.textContent = this.l10n.getConstant('startLabel');
                            }
                            if (!isNullOrUndefined(this.endDate) && !isNullOrUndefined(this.startDate)) {
                                this.endButton.element.textContent = this.globalize.formatDate(this.endDate, format);
                            } else {
                                this.endButton.element.textContent = this.l10n.getConstant('endLabel');
                            }
                        }
                        if (!isNullOrUndefined(this.startDate) && +this.startDate < +this.min || !isNullOrUndefined(this.startDate) && !isNullOrUndefined(this.endDate) && +this.startDate > +this.endDate || !isNullOrUndefined(this.endDate) && +this.endDate > +this.max || this.isDateDisabled(this.startDate) || this.isDateDisabled(this.endDate)) {
                            if (!this.isMobile) {
                                this.popupObj.element.querySelector('.' + DAYSPAN).textContent = this.l10n.getConstant('selectedDays');
                                this.popupObj.element.querySelector('.' + STARTLABEL).textContent = this.l10n.getConstant('startLabel');
                                this.popupObj.element.querySelector('.' + ENDLABEL).textContent = this.l10n.getConstant('endLabel');
                            } else {
                                this.startButton.element.textContent = this.l10n.getConstant('startLabel');
                                this.endButton.element.textContent = this.l10n.getConstant('endLabel');
                                this.popupObj.element.querySelector('.' + DAYSPAN).textContent = this.l10n.getConstant('selectedDays');
                            }
                        }
                    }
                }, {
                    key: 'removeSelection',
                    value: function removeSelection() {
                        this.setProperties({ startDate: null }, true);
                        this.setProperties({ endDate: null }, true);
                        this.setValue();
                        this.removeSelectedAttributes();
                        if (this.popupObj.element.querySelectorAll('.' + SELECTED$1).length > 0) {
                            removeClass(this.popupObj.element.querySelectorAll('.' + SELECTED$1), [STARTDATE, ENDDATE, SELECTED$1]);
                        }
                        if (this.popupObj.element.querySelectorAll('.' + FOCUSDATE).length > 0) {
                            removeClass(this.popupObj.element.querySelectorAll('.' + FOCUSDATE), FOCUSDATE);
                        }
                        if (this.popupObj.element.querySelectorAll('.' + RANGEHOVER).length > 0) {
                            removeClass(this.popupObj.element.querySelectorAll('.' + RANGEHOVER), [RANGEHOVER]);
                        }
                    }
                }, {
                    key: 'addSelectedAttributes',
                    value: function addSelectedAttributes(ele, date, isStartDate, sameDate) {
                        if (ele) {
                            var title = this.globalize.formatDate(date, { type: 'date', skeleton: 'full' });
                            if (!isNullOrUndefined(sameDate) && sameDate) {
                                ele.setAttribute('aria-label', 'The current start and end date is ' + '' + title);
                            } else {
                                ele.setAttribute('aria-label', 'The current ' + (isStartDate ? 'start' : 'end') + ' date is ' + '' + title);
                            }
                            ele.setAttribute('aria-selected', 'true');
                        }
                    }
                }, {
                    key: 'removeSelectedAttributes',
                    value: function removeSelectedAttributes() {
                        var start = this.popupObj.element.querySelectorAll('.' + STARTDATE);
                        var _iteratorNormalCompletion19 = true;
                        var _didIteratorError19 = false;
                        var _iteratorError19 = undefined;

                        try {
                            for (var _iterator19 = start[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                                var ele = _step19.value;

                                ele.setAttribute('aria-selected', 'false');
                                ele.removeAttribute('aria-label');
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

                        var end = this.popupObj.element.querySelectorAll('.' + ENDDATE);
                        var _iteratorNormalCompletion20 = true;
                        var _didIteratorError20 = false;
                        var _iteratorError20 = undefined;

                        try {
                            for (var _iterator20 = end[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                                var _ele4 = _step20.value;

                                _ele4.setAttribute('aria-selected', 'false');
                                _ele4.removeAttribute('aria-label');
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
                    key: 'updateCalendarElement',
                    value: function updateCalendarElement(calendar) {
                        if (calendar.classList.contains(LEFTCALENDER)) {
                            this.calendarElement = this.leftCalendar;
                            this.currentDate = this.leftCalCurrentDate;
                            this.previousIcon = this.leftCalPrevIcon;
                            this.nextIcon = this.leftCalNextIcon;
                        } else {
                            this.calendarElement = this.rightCalendar;
                            this.currentDate = this.rightCalCurrentDate;
                            this.previousIcon = this.rightCalPrevIcon;
                            this.nextIcon = this.rightCalNextIcon;
                        }
                        this.contentElement = calendar.querySelector('.' + CONTENT$1);
                        this.tableBodyElement = select('.' + CONTENT$1 + ' tbody', calendar);
                        this.table = calendar.querySelector('.' + CONTENT$1).getElementsByTagName('table')[0];
                        this.headerTitleElement = calendar.querySelector('.' + HEADER$1 + ' .' + TITLE$1);
                        this.headerElement = calendar.querySelector('.' + HEADER$1);
                    }
                }, {
                    key: 'navPrevMonth',
                    value: function navPrevMonth(e) {
                        e.preventDefault();
                        var ele = closest(e.target, '.' + LEFTCALENDER);
                        ele = isNullOrUndefined(ele) ? closest(e.target, '.' + RIGHTCALENDER) : ele;
                        this.updateCalendarElement(ele);
                        this.navigatePrevious(e);
                        if (!isNullOrUndefined(this.startDate) && isNullOrUndefined(this.endDate)) {
                            this.updateMinMaxDays(ele);
                        }
                        this.updateControl(ele);
                    }
                }, {
                    key: 'deviceNavigation',
                    value: function deviceNavigation(ele) {
                        this.deviceCalendarEvent();
                        this.updateRange([this.popupObj.element.querySelector('.' + CALENDAR)]);
                        if (!isNullOrUndefined(this.endDate) && this.endButton.element.classList.contains(ACTIVE$1)) {
                            this.updateMinMaxDays(this.popupObj.element.querySelector('.' + CALENDAR));
                        }
                        if (this.endButton.element.classList.contains(ACTIVE$1)) {
                            this.selectableDates();
                        }
                        if (this.currentView() === 'Month') {
                            this.bindCalendarCellEvents();
                        }
                        this.removeFocusedDate();
                        this.popupObj.refreshPosition(this.inputElement);
                        this.popupObj.show();
                    }
                }, {
                    key: 'updateControl',
                    value: function updateControl(calendar) {
                        if (calendar.classList.contains(RIGHTCALENDER)) {
                            this.rightCalCurrentDate = new Date(+this.currentDate);
                        } else {
                            this.leftCalCurrentDate = new Date(+this.currentDate);
                        }
                        this.updateNavIcons();
                        this.calendarIconEvent();
                        if (this.leftCalendar.querySelector('.e-content').classList.contains('e-month') && this.rightCalendar.querySelector('.e-content').classList.contains('e-month') || this.isMobile) {
                            this.bindCalendarCellEvents();
                        }
                        this.removeFocusedDate();
                        this.updateRange([calendar]);
                        this.presetHeight();
                        if (!(this.isMobile || this.enableRtl)) {
                            this.popupObj.offsetX = -this.popupWrapper.getBoundingClientRect().width;
                            this.popupObj.show();
                        }
                    }
                }, {
                    key: 'navNextMonth',
                    value: function navNextMonth(event) {
                        event.preventDefault();
                        var ele = closest(event.target, '.' + LEFTCALENDER);
                        ele = isNullOrUndefined(ele) ? closest(event.target, '.' + RIGHTCALENDER) : ele;
                        this.updateCalendarElement(ele);
                        this.navigateNext(event);
                        if (!isNullOrUndefined(this.startDate) && isNullOrUndefined(this.endDate)) {
                            this.updateMinMaxDays(ele);
                        }
                        this.updateControl(ele);
                    }
                }, {
                    key: 'compareMonths',
                    value: function compareMonths(start, end) {
                        var result = void 0;
                        if ((this.currentView() === 'Year' || this.currentView() === 'Decade') && start.getFullYear() === end.getFullYear()) {
                            result = -1;
                        } else if (start.getFullYear() > end.getFullYear()) {
                            result = -1;
                        } else if (start.getFullYear() < end.getFullYear()) {
                            if (start.getFullYear() + 1 === end.getFullYear() && start.getMonth() === 11 && end.getMonth() === 0) {
                                result = -1;
                            } else {
                                result = 1;
                            }
                        } else {
                            result = start.getMonth() === end.getMonth() ? 0 : start.getMonth() + 1 === end.getMonth() ? -1 : 1;
                        }
                        return result;
                    }
                }, {
                    key: 'isPopupOpen',
                    value: function isPopupOpen() {
                        if (!isNullOrUndefined(this.popupObj) && this.popupObj.element.classList.contains(POPUP$1)) {
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: 'createRangeHeader',
                    value: function createRangeHeader() {
                        var labelContainer = createElement('div', { className: STARTENDCONTAINER });
                        if (!this.isMobile) {
                            var startLabel = createElement('a', { className: STARTLABEL });
                            var endLabel = createElement('a', { className: ENDLABEL });
                            var changeIcon = createElement('span', { className: CHANGEICON });
                            attributes(startLabel, { 'aria-atomic': 'true', 'aria-live': 'assertive', 'aria-label': 'Start Date', 'role': 'button' });
                            attributes(endLabel, { 'aria-atomic': 'true', 'aria-live': 'assertive', 'aria-label': 'End Date', 'role': 'button' });
                            labelContainer.appendChild(startLabel);
                            labelContainer.appendChild(changeIcon);
                            labelContainer.appendChild(endLabel);
                            startLabel.textContent = this.l10n.getConstant('startLabel');
                            endLabel.textContent = this.l10n.getConstant('endLabel');
                        } else {
                            var endBtn = createElement('button', { className: ENDBUTTON });
                            var startBtn = createElement('button', { className: STARTBUTTON });
                            this.startButton = new Button({ content: this.l10n.getConstant('startLabel') }, startBtn);
                            this.endButton = new Button({ content: this.l10n.getConstant('endLabel') }, endBtn);
                            labelContainer.appendChild(startBtn);
                            labelContainer.appendChild(endBtn);
                        }
                        return labelContainer;
                    }
                }, {
                    key: 'disableInput',
                    value: function disableInput() {
                        if (this.strictMode) {
                            if (!isNullOrUndefined(this.previousStartValue) && !isNullOrUndefined(this.previousEndValue)) {
                                this.setProperties({ startDate: this.previousStartValue }, true);
                                this.setProperties({ endDate: this.previousEndValue }, true);
                                this.setValue();
                                this.updateInput();
                            }
                        } else {
                            this.updateInput();
                            this.clearRange();
                            this.setProperties({ startDate: null }, true);
                            this.setProperties({ endDate: null }, true);
                            this.setValue();
                            this.errorClass();
                        }
                        this.setProperties({ enabled: false }, true);
                        Input.setEnabled(this.enabled, this.inputElement);
                        this.bindEvents();
                    }
                }, {
                    key: 'validateMinMax',
                    value: function validateMinMax() {
                        this.min = isNullOrUndefined(this.min) || !+this.min ? this.min = new Date(1900, 0, 1) : this.min;
                        this.max = isNullOrUndefined(this.max) || !+this.max ? this.max = new Date(2099, 11, 31) : this.max;
                        if (!(this.min <= this.max)) {
                            this.disableInput();
                            return;
                        }
                        if (!isNullOrUndefined(this.minDays) && !isNullOrUndefined(this.maxDays)) {
                            if (this.maxDays > 0 && this.minDays > 0 && this.minDays > this.maxDays) {
                                this.maxDays = null;
                            }
                        }
                        if (!isNullOrUndefined(this.minDays) && this.minDays < 0) {
                            this.minDays = null;
                        }
                        if (!isNullOrUndefined(this.maxDays) && this.maxDays < 0) {
                            this.maxDays = null;
                        }
                    }
                }, {
                    key: 'validateRangeStrict',
                    value: function validateRangeStrict() {
                        if (!isNullOrUndefined(this.startDate)) {
                            if (+this.startDate < +this.min) {
                                this.setProperties({ startDate: this.min }, true);
                                this.setValue();
                            } else if (+this.startDate > +this.max) {
                                this.setProperties({ startDate: this.max }, true);
                            }
                        }
                        if (!isNullOrUndefined(this.endDate)) {
                            if (+this.endDate > +this.max) {
                                this.setProperties({ endDate: this.max }, true);
                                this.setValue();
                            } else if (+this.endDate < +this.min) {
                                this.setProperties({ endDate: this.min }, true);
                                this.setValue();
                            }
                        }
                        if (!isNullOrUndefined(this.startDate) && !isNullOrUndefined(this.endDate) && +this.startDate > +this.endDate) {
                            this.setProperties({ endDate: this.max }, true);
                            this.setValue();
                        }
                        this.validateMinMaxDays();
                    }
                }, {
                    key: 'validateRange',
                    value: function validateRange() {
                        this.validateMinMaxDays();
                    }
                }, {
                    key: 'validateMinMaxDays',
                    value: function validateMinMaxDays() {
                        if (!isNullOrUndefined(this.startDate) && !isNullOrUndefined(this.endDate)) {
                            var range = Math.round(Math.abs((this.startDate.getTime() - this.endDate.getTime()) / (1000 * 60 * 60 * 24))) + 1;
                            if (!isNullOrUndefined(this.minDays) && this.minDays > 0 && !(range >= this.minDays)) {
                                if (this.strictMode) {
                                    var date = new Date(+this.startDate);
                                    date.setDate(date.getDate() + (this.minDays - 1));
                                    if (+date > +this.max) {
                                        this.setProperties({ endDate: this.max }, true);
                                        this.setValue();
                                    } else {
                                        this.setProperties({ endDate: date }, true);
                                        this.setValue();
                                    }
                                } else {
                                    this.setProperties({ startDate: null }, true);
                                    this.setProperties({ endDate: null }, true);
                                    this.setValue();
                                }
                            }
                            if (!isNullOrUndefined(this.maxDays) && this.maxDays > 0 && !(range <= this.maxDays)) {
                                if (this.strictMode) {
                                    this.endDate = new Date(+this.startDate);
                                    this.endDate.setDate(this.endDate.getDate() + (this.maxDays - 1));
                                    this.setProperties({ endDate: this.endDate }, true);
                                    this.setValue();
                                } else {
                                    this.setProperties({ startDate: null }, true);
                                    this.setProperties({ endDate: null }, true);
                                    this.setValue();
                                }
                            }
                        }
                    }
                }, {
                    key: 'renderCalendar',
                    value: function renderCalendar() {
                        this.calendarElement = createElement('div');
                        this.calendarElement.classList.add(CALENDAR);
                        if (this.enableRtl) {
                            this.calendarElement.classList.add(RTL$2);
                        }
                        attributes(this.calendarElement, { 'role': 'calendar' });
                        _get(DateRangePicker.prototype.__proto__ || Object.getPrototypeOf(DateRangePicker.prototype), 'createHeader', this).call(this);
                        _get(DateRangePicker.prototype.__proto__ || Object.getPrototypeOf(DateRangePicker.prototype), 'createContent', this).call(this);
                    }
                }, {
                    key: 'isSameMonth',
                    value: function isSameMonth(start, end) {
                        if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: 'startMonthCurrentDate',
                    value: function startMonthCurrentDate() {
                        if (this.isSameMonth(this.min, this.max) || +this.currentDate > +this.max || this.isSameMonth(this.currentDate, this.max)) {
                            this.currentDate = new Date(+this.max);
                            this.currentDate.setDate(1);
                            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
                        } else if (this.currentDate < this.min) {
                            this.currentDate = new Date('' + this.min);
                        }
                    }
                }, {
                    key: 'selectNextMonth',
                    value: function selectNextMonth() {
                        if (!isNullOrUndefined(this.endDate) && !isNullOrUndefined(this.startDate) && !this.isSameMonth(this.endDate, this.currentDate) && !this.isDateDisabled(this.endDate) && !this.isDateDisabled(this.startDate)) {
                            this.currentDate = new Date(+this.endDate);
                        } else {
                            this.currentDate.setDate(1);
                            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
                            return;
                        }
                        if (!isNullOrUndefined(this.startDate) && +this.startDate < +this.min || !isNullOrUndefined(this.endDate) && +this.endDate > +this.max || !isNullOrUndefined(this.startDate) && !isNullOrUndefined(this.endDate) && +this.startDate > +this.endDate) {
                            this.currentDate = new Date(new Date().setHours(0, 0, 0, 0));
                            this.currentDate.setDate(1);
                            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
                        }
                    }
                }, {
                    key: 'selectStartMonth',
                    value: function selectStartMonth() {
                        if (!isNullOrUndefined(this.startDate)) {
                            if (!isNullOrUndefined(this.max) && this.isSameMonth(this.startDate, this.max)) {
                                this.currentDate = new Date(+this.max);
                                this.currentDate.setDate(1);
                                this.currentDate.setMonth(this.currentDate.getMonth() - 1);
                            } else if (!(this.startDate >= this.min && this.startDate <= this.max) || this.isDateDisabled(this.startDate)) {
                                this.currentDate = new Date(new Date().setHours(0, 0, 0, 0));
                            } else {
                                this.currentDate = new Date(+this.startDate);
                            }
                        } else {
                            this.currentDate = new Date(new Date().setHours(0, 0, 0, 0));
                            this.startMonthCurrentDate();
                        }
                        if (!isNullOrUndefined(this.endDate) && +this.endDate > +this.max || !isNullOrUndefined(this.startDate) && +this.startDate < +this.min || !isNullOrUndefined(this.startDate) && !isNullOrUndefined(this.endDate) && +this.startDate > +this.endDate) {
                            this.currentDate = new Date(new Date().setHours(0, 0, 0, 0));
                        }
                        this.startMonthCurrentDate();
                    }
                }, {
                    key: 'createCalendar',
                    value: function createCalendar() {
                        var calendarContainer = createElement('div', { className: CALENDARCONTAINER });
                        if (!this.isMobile) {
                            this.selectStartMonth();
                            this.renderCalendar();
                            this.leftCalCurrentDate = new Date(+this.currentDate);
                            this.calendarElement.classList.add(LEFTCALENDER);
                            this.leftCalPrevIcon = this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + PREVICON$1);
                            this.leftCalNextIcon = this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + NEXTICON$1);
                            this.leftTitle = this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + TITLE$1);
                            remove(this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + ICONCONTAINER$1));
                            this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + HEADER$1).appendChild(this.leftCalNextIcon);
                            this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + HEADER$1).appendChild(this.leftCalPrevIcon);
                            prepend([this.leftCalPrevIcon], this.calendarElement.querySelector('.' + LEFTCALENDER + ' .' + HEADER$1));
                            this.leftCalendar = this.calendarElement;
                            var leftContainer = createElement('div', { className: LEFTCONTAINER });
                            var rightContainer = createElement('div', { className: RIGHTCONTAINER });
                            leftContainer.appendChild(this.leftCalendar);
                            calendarContainer.appendChild(leftContainer);
                            if (!this.isMobile) {
                                EventHandler.add(this.leftTitle, 'click', this.leftNavTitle, this);
                            }
                            this.selectNextMonth();
                            this.renderCalendar();
                            this.rightCalCurrentDate = new Date(+this.currentDate);
                            addClass([this.calendarElement], RIGHTCALENDER);
                            this.rightCalendar = this.calendarElement;
                            removeClass([this.leftCalendar && this.leftCalendar.querySelector('.e-content tbody')], 'e-zoomin');
                            removeClass([this.rightCalendar && this.rightCalendar.querySelector('.e-content tbody')], 'e-zoomin');
                            this.rightCalPrevIcon = this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + PREVICON$1);
                            this.rightCalNextIcon = this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + NEXTICON$1);
                            this.rightTitle = this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + TITLE$1);
                            remove(this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + ICONCONTAINER$1));
                            this.calendarElement.querySelector('table').setAttribute('tabindex', '-1');
                            this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + HEADER$1).appendChild(this.rightCalNextIcon);
                            this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + HEADER$1).appendChild(this.rightCalPrevIcon);
                            prepend([this.rightCalPrevIcon], this.calendarElement.querySelector('.' + RIGHTCALENDER + ' .' + HEADER$1));
                            rightContainer.appendChild(this.rightCalendar);
                            calendarContainer.appendChild(rightContainer);
                            if (!this.isMobile) {
                                EventHandler.add(this.rightTitle, 'click', this.rightNavTitle, this);
                            }
                        } else {
                            if (!isNullOrUndefined(this.startDate)) {
                                this.currentDate = new Date(+this.startDate);
                            }
                            _get(DateRangePicker.prototype.__proto__ || Object.getPrototypeOf(DateRangePicker.prototype), 'validateDate', this).call(this);
                            _get(DateRangePicker.prototype.__proto__ || Object.getPrototypeOf(DateRangePicker.prototype), 'minMaxUpdate', this).call(this);
                            _get(DateRangePicker.prototype.__proto__ || Object.getPrototypeOf(DateRangePicker.prototype), 'render', this).call(this);
                            var prevIcon = this.calendarElement.querySelector('.' + CALENDAR + ' .' + PREVICON$1);
                            var nextIcon = this.calendarElement.querySelector('.' + CALENDAR + ' .' + NEXTICON$1);
                            remove(this.calendarElement.querySelector('.' + CALENDAR + ' .' + ICONCONTAINER$1));
                            this.calendarElement.querySelector('.' + CALENDAR + ' .' + HEADER$1).appendChild(nextIcon);
                            this.calendarElement.querySelector('.' + CALENDAR + ' .' + HEADER$1).appendChild(prevIcon);
                            prepend([prevIcon], this.calendarElement.querySelector('.' + CALENDAR + ' .' + HEADER$1));
                            this.deviceCalendar = this.calendarElement;
                            calendarContainer.appendChild(this.calendarElement);
                            this.headerTitleElement = this.calendarElement.querySelector('.' + CALENDAR + ' .' + HEADER$1 + ' .' + TITLE$1);
                        }
                        return calendarContainer;
                    }
                }, {
                    key: 'leftNavTitle',
                    value: function leftNavTitle(e) {
                        if (this.isPopupOpen()) {
                            this.calendarElement = this.leftCalendar;
                            this.table = this.leftCalendar.querySelector('table');
                            this.headerTitleElement = this.leftCalendar.querySelector('.e-title');
                            this.tableBodyElement = this.leftCalendar.querySelector('tbody');
                            this.tableHeadElement = this.leftCalendar.querySelector('thead');
                            this.contentElement = this.leftCalendar.querySelector('.e-content');
                            this.updateCalendarElement(this.leftCalendar);
                            _get(DateRangePicker.prototype.__proto__ || Object.getPrototypeOf(DateRangePicker.prototype), 'navigateTitle', this).call(this, e);
                            this.updateNavIcons();
                        }
                    }
                }, {
                    key: 'rightNavTitle',
                    value: function rightNavTitle(e) {
                        if (this.isPopupOpen()) {
                            this.calendarElement = this.rightCalendar;
                            this.table = this.rightCalendar.querySelector('table');
                            this.headerTitleElement = this.rightCalendar.querySelector('.e-title');
                            this.tableBodyElement = this.rightCalendar.querySelector('tbody');
                            this.tableHeadElement = this.rightCalendar.querySelector('thead');
                            this.contentElement = this.rightCalendar.querySelector('.e-content');
                            this.updateCalendarElement(this.rightCalendar);
                            _get(DateRangePicker.prototype.__proto__ || Object.getPrototypeOf(DateRangePicker.prototype), 'navigateTitle', this).call(this, e);
                            this.updateNavIcons();
                        }
                    }
                }, {
                    key: 'clickEventEmitter',
                    value: function clickEventEmitter(e) {
                        if (!this.isMobile) {
                            if (closest(e.target, '.e-calendar.e-left-calendar')) {
                                this.calendarElement = this.leftCalendar;
                                this.updateCalendarElement(this.leftCalendar);
                            } else {
                                this.calendarElement = this.rightCalendar;
                                this.updateCalendarElement(this.rightCalendar);
                            }
                        }
                    }
                }, {
                    key: 'currentView',
                    value: function currentView() {
                        return _get(DateRangePicker.prototype.__proto__ || Object.getPrototypeOf(DateRangePicker.prototype), 'currentView', this).call(this);
                    }
                }, {
                    key: 'navigatedEvent',
                    value: function navigatedEvent(e) {
                        var element = void 0;
                        if (this.isMobile && this.currentView() === 'Month') {
                            this.bindCalendarCellEvents();
                            this.deviceNavigation();
                            this.removeFocusedDate();
                        } else if (this.isMobile && (this.currentView() === 'Decade' || this.currentView() === 'Year')) {
                            this.selectableDates();
                        } else {
                            if (!this.isMobile && this.currentView() === 'Month') {
                                element = this.calendarElement.classList.contains('e-left-calendar') ? this.leftCalendar : this.rightCalendar;
                                if (element === this.leftCalendar && e && !e.target.classList.contains('e-icons')) {
                                    this.leftCalCurrentDate = new Date(+this.currentDate);
                                    this.rightCalCurrentDate = new Date(new Date(+this.currentDate).setMonth(new Date(+this.currentDate).getMonth() + 1));
                                    this.currentDate = this.leftCalCurrentDate;
                                    this.updateCalendarElement(this.leftCalendar);
                                    this.updateControl(this.leftCalendar);
                                    this.updateCalendarElement(this.rightCalendar);
                                    this.navigateTo('Month', this.rightCalCurrentDate);
                                    this.updateControl(this.rightCalendar);
                                    this.updateNavIcons();
                                    this.calendarIconEvent();
                                    this.calendarIconRipple();
                                } else if (e && !e.target.classList.contains('e-icons')) {
                                    this.rightCalCurrentDate = new Date(+this.currentDate);
                                    this.leftCalCurrentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1));
                                    this.currentDate = this.rightCalCurrentDate;
                                    this.updateCalendarElement(this.rightCalendar);
                                    this.updateControl(this.rightCalendar);
                                    this.updateCalendarElement(this.leftCalendar);
                                    this.navigateTo('Month', this.leftCalCurrentDate);
                                    this.updateControl(this.leftCalendar);
                                    this.updateNavIcons();
                                    this.calendarIconEvent();
                                    this.calendarIconRipple();
                                }
                            } else if (!this.isMobile && (this.currentView() === 'Decade' || this.currentView() === 'Year')) {
                                this.updateNavIcons();
                                this.calendarIconEvent();
                            }
                        }
                    }
                }, {
                    key: 'createControl',
                    value: function createControl() {
                        var controlContainer = createElement('div', { className: RANGECONTAINER });
                        var headerContainer = createElement('div', { className: RANGEHEADER });
                        var labelContainer = this.createRangeHeader();
                        headerContainer.appendChild(labelContainer);
                        var daySpan = createElement('div', { className: DAYSPAN });
                        attributes(daySpan, { 'aria-label': 'Selected Days' });
                        daySpan.textContent = this.l10n.getConstant('selectedDays');
                        headerContainer.appendChild(daySpan);
                        var separator = createElement('div', { className: SEPARATOR });
                        var calendarContainer = this.createCalendar();
                        controlContainer.appendChild(headerContainer);
                        controlContainer.appendChild(separator);
                        controlContainer.appendChild(calendarContainer);
                        var footerSection = createElement('div', { className: FOOTER$1 });
                        var cancelBtn = createElement('button', { className: CANCEL + ' ' + FLAT$1 });
                        var applyBtn = createElement('button', { className: APPLY + ' ' + FLAT$1 + ' ' + PRIMARY$1 });
                        footerSection.appendChild(applyBtn);
                        footerSection.appendChild(cancelBtn);
                        var enable = !isNullOrUndefined(this.startDate) && !isNullOrUndefined(this.endDate);
                        this.cancelButton = new Button({ content: this.l10n.getConstant('cancelText') }, cancelBtn);
                        this.applyButton = new Button({ content: this.l10n.getConstant('applyText'), disabled: !enable }, applyBtn);
                        EventHandler.add(applyBtn, 'click', this.applyFunction, this);
                        EventHandler.add(cancelBtn, 'click', this.cancelFunction, this);
                        this.popupWrapper.appendChild(controlContainer);
                        document.body.appendChild(this.popupWrapper);
                        if (!this.isMobile) {
                            if (!isUndefined(this.presets[0].start && this.presets[0].end && this.presets[0].label)) {
                                this.createPresets();
                                this.listRippleEffect();
                                addClass([controlContainer], RANGEBORDER);
                                addClass([this.popupWrapper], 'e-preset-wrapper');
                                var presets = this.popupWrapper.querySelector('.' + PRESETS);
                                presets.style.height = this.popupWrapper.querySelector('.' + RANGECONTAINER).getBoundingClientRect().height + 'px';
                            }
                        }
                        this.popupWrapper.appendChild(footerSection);
                        if (this.isMobile) {
                            this.deviceHeaderUpdate();
                        }
                        this.renderPopup();
                    }
                }, {
                    key: 'cancelFunction',
                    value: function cancelFunction(eve) {
                        if (document.activeElement !== this.inputElement) {
                            this.preventFocus = true;
                            if (!this.isMobile) {
                                this.inputElement.focus();
                                addClass([this.inputWrapper.container], [INPUTFOCUS$1]);
                            }
                        }
                        eve.preventDefault();
                        if (!this.isMobile && this.isKeyPopup) {
                            this.inputElement.focus();
                            this.isKeyPopup = false;
                        }
                        this.setProperties({ startDate: null }, true);
                        this.setProperties({ endDate: null }, true);
                        this.hide();
                    }
                }, {
                    key: 'deviceHeaderUpdate',
                    value: function deviceHeaderUpdate() {
                        if (isNullOrUndefined(this.startDate) && isNullOrUndefined(this.endDate)) {
                            this.endButton.element.setAttribute('disabled', '');
                            this.startButton.element.classList.add(ACTIVE$1);
                        } else if (!isNullOrUndefined(this.startDate)) {
                            this.startButton.element.classList.add(ACTIVE$1);
                        }
                    }
                }, {
                    key: 'applyFunction',
                    value: function applyFunction(eve) {
                        if (document.activeElement !== this.inputElement) {
                            this.preventFocus = true;
                            if (!this.isMobile) {
                                this.inputElement.focus();
                                addClass([this.inputWrapper.container], [INPUTFOCUS$1]);
                            }
                        }
                        eve.preventDefault();
                        if (!isNullOrUndefined(this.startDate) && !isNullOrUndefined(this.endDate)) {
                            this.previousStartValue = new Date(+this.startDate);
                            this.previousEndValue = new Date(+this.endDate);
                            this.previousEleValue = this.inputElement.value;
                            Input.setValue(this.rangeArgs(eve).text, this.inputElement, this.floatLabelType, this.showClearButton);
                            this.changeTrigger(eve);
                            this.hide();
                            this.errorClass();
                        } else {
                            this.hide();
                        }
                        if (!this.isMobile) {
                            this.isKeyPopup = false;
                            if (this.isRangeIconClicked) {
                                this.inputWrapper.container.children[1].focus();
                                this.popupKeyboardModule = new KeyboardEvents(this.inputWrapper.container.children[1], {
                                    eventName: 'keydown',
                                    keyAction: this.popupKeyActionHandle.bind(this),
                                    keyConfigs: this.keyInputConfigs
                                });
                            }
                        }
                    }
                }, {
                    key: 'onMouseClick',
                    value: function onMouseClick(event, item) {
                        var target = item || event.target;
                        var li = closest(target, '.' + LISTCLASS);
                        var isClick = li && li.classList.contains(ACTIVE$1);
                        if (li && li.classList.contains(LISTCLASS)) {
                            this.setListSelection(li, event);
                        }
                        if (!this.isMobile) {
                            this.preventFocus = true;
                            if (li && li.classList.contains(LISTCLASS) && li.getAttribute('id') === 'custom_range') {
                                this.leftCalendar.children[1].firstElementChild.focus();
                            } else {
                                if (!isClick && event.type === 'keydown') {
                                    this.inputElement.focus();
                                }
                            }
                        }
                    }
                }, {
                    key: 'onMouseOver',
                    value: function onMouseOver(event) {
                        var li = closest(event.target, '.' + LISTCLASS);
                        if (li && li.classList.contains(LISTCLASS) && !li.classList.contains(HOVER)) {
                            addClass([li], HOVER);
                        }
                    }
                }, {
                    key: 'onMouseLeave',
                    value: function onMouseLeave(event) {
                        var item = closest(event.target, '.' + HOVER);
                        if (!isNullOrUndefined(item)) {
                            removeClass([item], HOVER);
                        }
                    }
                }, {
                    key: 'setListSelection',
                    value: function setListSelection(li, event) {
                        if (li && (!li.classList.contains(ACTIVE$1) || this.isMobile && li.classList.contains(ACTIVE$1))) {
                            if (this.isMobile && li.classList.contains(ACTIVE$1)) {
                                this.activeIndex = Array.prototype.slice.call(this.liCollections).indexOf(li);
                                var _values = this.presetsItem[this.activeIndex];
                                if (_values.id === 'custom_range') {
                                    this.renderCustomPopup();
                                    return;
                                }
                                return;
                            }
                            this.removeListSelection();
                            this.activeIndex = Array.prototype.slice.call(this.liCollections).indexOf(li);
                            addClass([li], ACTIVE$1);
                            li.setAttribute('aria-selected', 'true');
                            var values = this.presetsItem[this.activeIndex];
                            if (values.id === 'custom_range') {
                                this.renderCustomPopup();
                            } else {
                                this.applyPresetRange(values);
                            }
                        }
                    }
                }, {
                    key: 'removeListSelection',
                    value: function removeListSelection() {
                        var item = this.presetElement.querySelector('.' + ACTIVE$1);
                        if (!isNullOrUndefined(item)) {
                            removeClass([item], ACTIVE$1);
                            item.removeAttribute('aria-selected');
                        }
                    }
                }, {
                    key: 'setValue',
                    value: function setValue() {
                        if (isNullOrUndefined(this.startDate) && isNullOrUndefined(this.endDate)) {
                            this.setProperties({ value: null }, true);
                        } else {
                            this.setProperties({ value: [this.startDate, this.endDate] }, true);
                        }
                    }
                }, {
                    key: 'applyPresetRange',
                    value: function applyPresetRange(values) {
                        this.hide();
                        this.presetsItem[this.presetsItem.length - 1].start = null;
                        this.presetsItem[this.presetsItem.length - 1].end = null;
                        this.setProperties({ startDate: values.start }, true);
                        this.setProperties({ endDate: values.end }, true);
                        this.setValue();
                        this.refreshControl();
                        this.trigger('select', this.rangeArgs(null));
                        this.changeTrigger();
                        this.previousEleValue = this.inputElement.value;
                        this.isCustomRange = false;
                        this.leftCalendar = this.rightCalendar = null;
                        if (this.isKeyPopup) {
                            this.isRangeIconClicked = false;
                            this.inputElement.focus();
                        }
                    }
                }, {
                    key: 'renderCustomPopup',
                    value: function renderCustomPopup() {
                        this.isCustomWindow = true;
                        this.popupObj.hide();
                        this.popupWrapper = createElement('div', { id: this.element.id + '_popup', className: ROOT$2 + ' ' + POPUP$1 });
                        this.renderControl();
                        this.isCustomRange = true;
                        if (!this.isMobile) {
                            this.calendarFocus();
                        }
                    }
                }, {
                    key: 'listRippleEffect',
                    value: function listRippleEffect() {
                        var _iteratorNormalCompletion21 = true;
                        var _didIteratorError21 = false;
                        var _iteratorError21 = undefined;

                        try {
                            for (var _iterator21 = this.liCollections[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                                var li = _step21.value;

                                rippleEffect(li);
                            }
                        } catch (err) {
                            _didIteratorError21 = true;
                            _iteratorError21 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion21 && _iterator21.return) {
                                    _iterator21.return();
                                }
                            } finally {
                                if (_didIteratorError21) {
                                    throw _iteratorError21;
                                }
                            }
                        }
                    }
                }, {
                    key: 'createPresets',
                    value: function createPresets() {
                        if (!isUndefined(this.presets[0].start && this.presets[0].end && this.presets[0].label)) {
                            this.presetElement = createElement('div', { className: PRESETS, attrs: { 'tabindex': '0' } });
                            var listTag = ListBase.createList(this.presetsItem, null, true);
                            attributes(listTag, { 'role': 'listbox', 'aria-hidden': 'false', 'id': this.element.id + '_options' });
                            this.presetElement.appendChild(listTag);
                            this.popupWrapper.appendChild(this.presetElement);
                            this.liCollections = this.presetElement.querySelectorAll('.' + LISTCLASS);
                            this.wireListEvents();
                            if (this.isMobile) {
                                this.presetElement.style.width = this.inputWrapper.container.getBoundingClientRect().width + 'px';
                            }
                            if (!isNullOrUndefined(this.activeIndex) && this.activeIndex > -1) {
                                addClass([this.liCollections[this.activeIndex]], ACTIVE$1);
                            }
                        }
                    }
                }, {
                    key: 'wireListEvents',
                    value: function wireListEvents() {
                        EventHandler.add(this.presetElement, 'click', this.onMouseClick, this);
                        if (!this.isMobile) {
                            EventHandler.add(this.presetElement, 'mouseover', this.onMouseOver, this);
                            EventHandler.add(this.presetElement, 'mouseout', this.onMouseLeave, this);
                        }
                    }
                }, {
                    key: 'unWireListEvents',
                    value: function unWireListEvents() {
                        if (!isNullOrUndefined(this.presetElement)) {
                            EventHandler.remove(this.presetElement, 'click', this.onMouseClick);
                            if (!this.isMobile) {
                                EventHandler.remove(this.presetElement, 'mouseover', this.onMouseOver);
                                EventHandler.remove(this.presetElement, 'mouseout', this.onMouseLeave);
                            }
                        }
                    }
                }, {
                    key: 'renderPopup',
                    value: function renderPopup() {
                        var _this9 = this;

                        this.popupWrapper.classList.add('e-control');
                        var popupWidth = this.popupWrapper.getBoundingClientRect().width;
                        if (!isNullOrUndefined(this.cssClass) && this.cssClass.trim() !== '') {
                            this.popupWrapper.classList.add(this.cssClass);
                        }
                        if (this.isMobile && this.isCustomWindow) {
                            this.modal = createElement('div');
                            document.body.appendChild(this.modal);
                        }
                        this.popupObj = new Popup(this.popupWrapper, {
                            relateTo: this.isMobile && this.isCustomWindow ? document.body : !isNullOrUndefined(this.targetElement) ? this.targetElement : this.inputWrapper.container,
                            position: this.isMobile ? !isUndefined(this.presets[0].start && this.presets[0].end && this.presets[0].label) && !this.isCustomWindow ? { X: 'left', Y: 'bottom' } : { X: 'center', Y: 'center' } : this.enableRtl ? { X: 'left', Y: 'bottom' } : { X: 'right', Y: 'bottom' },
                            offsetX: this.isMobile || this.enableRtl ? 0 : -popupWidth,
                            offsetY: OFFSETVALUE$1,
                            collision: this.isMobile ? !isUndefined(this.presets[0].start && this.presets[0].end && this.presets[0].label) && !this.isCustomWindow ? { X: 'fit' } : { X: 'fit', Y: 'fit' } : { X: 'fit' },
                            targetType: this.isMobile && this.isCustomWindow ? 'container' : 'relative',
                            enableRtl: this.enableRtl,
                            zIndex: this.zIndex,
                            open: function open() {
                                attributes(_this9.inputElement, { 'aria-expanded': 'true' });
                                addClass([_this9.inputWrapper.buttons[0]], ACTIVE$1);
                                if (!_this9.isMobile) {
                                    if (_this9.cancelButton) {
                                        _this9.btnKeyboardModule = new KeyboardEvents(_this9.cancelButton.element, {
                                            eventName: 'keydown',
                                            keyAction: _this9.hide.bind(_this9),
                                            keyConfigs: { tab: 'tab' }
                                        });
                                    }
                                    if (!isNullOrUndefined(_this9.leftCalendar)) {
                                        if (!_this9.isRangeIconClicked) {
                                            _this9.calendarFocus();
                                        }
                                    }
                                    if (!isNullOrUndefined(_this9.presetElement)) {
                                        _this9.presetKeyboardModule = new KeyboardEvents(_this9.presetElement, {
                                            eventName: 'keydown',
                                            keyAction: _this9.presetKeyActionHandler.bind(_this9),
                                            keyConfigs: _this9.presetKeyConfig
                                        });
                                        if (isNullOrUndefined(_this9.leftCalendar)) {
                                            _this9.preventBlur = true;
                                            _this9.presetElement.focus();
                                        } else {
                                            _this9.presetElement.setAttribute('tabindex', '-1');
                                        }
                                    }
                                    _this9.popupKeyBoardHandler();
                                }
                                if (_this9.isMobile && !Browser.isDevice) {
                                    EventHandler.add(document, 'keydown', _this9.popupCloseHandler, _this9);
                                }
                            },
                            close: function close() {
                                attributes(_this9.inputElement, { 'aria-expanded': 'false' });
                                removeClass([_this9.inputWrapper.buttons[0]], ACTIVE$1);
                                if (!_this9.isMobile) {
                                    if (_this9.isRangeIconClicked) {
                                        _this9.inputWrapper.container.children[1].focus();
                                    }
                                }
                                if (!isUndefined(_this9.presets[0].start && _this9.presets[0].end && _this9.presets[0].label)) {
                                    _this9.unWireListEvents();
                                }
                                if (!isNullOrUndefined(_this9.popupObj)) {
                                    remove(_this9.popupObj.element);
                                    _this9.popupObj.destroy();
                                    _this9.popupObj = null;
                                }
                                if (_this9.isMobile && !Browser.isDevice) {
                                    EventHandler.remove(document, 'keydown', _this9.popupCloseHandler);
                                }
                            }
                        });
                        document.body.appendChild(this.popupObj.element);
                        if (this.isMobile) {
                            this.popupObj.element.classList.add(DEVICE$1);
                            if (!this.isMobile) {
                                this.popupObj.element.classList.add('e-bigger');
                            }
                        }
                        if (this.isMobile && this.isCustomWindow) {
                            addClass([this.modal], [DEVICE$1, ROOT$2, 'e-range-modal']);
                            document.body.className += ' ' + OVERFLOW$1;
                            this.modal.style.display = 'block';
                        }
                        this.presetHeight();
                        if (!(this.isMobile || this.enableRtl)) {
                            this.popupObj.offsetX = -this.popupWrapper.getBoundingClientRect().width;
                        }
                        this.popupObj.refreshPosition(this.inputElement);
                        this.popupObj.show();
                        EventHandler.add(document, 'mousedown touchstart', this.documentHandler, this);
                    }
                }, {
                    key: 'popupCloseHandler',
                    value: function popupCloseHandler(e) {
                        switch (e.keyCode) {
                            case 27:
                                this.hide();
                                break;
                        }
                    }
                }, {
                    key: 'calendarFocus',
                    value: function calendarFocus() {
                        var startDate = this.popupObj && this.popupObj.element.querySelector('.' + STARTDATE);
                        if (startDate) {
                            var ele = closest(startDate, '.' + RIGHTCALENDER);
                            ele = isNullOrUndefined(ele) ? this.leftCalendar : ele;
                            if (this.isRangeIconClicked) {
                                this.inputWrapper.container.focus();
                            } else {
                                this.preventBlur = true;
                                ele.children[1].firstElementChild.focus();
                            }
                            addClass([startDate], FOCUSDATE);
                        } else {
                            if (this.isRangeIconClicked) {
                                this.inputWrapper.container.focus();
                            } else {
                                this.preventBlur = true;
                                this.leftCalendar.children[1].firstElementChild.focus();
                            }
                        }
                    }
                }, {
                    key: 'presetHeight',
                    value: function presetHeight() {
                        var presets = this.popupObj && this.popupObj.element.querySelector('.' + PRESETS);
                        var rangeContainer = this.popupObj && this.popupObj.element.querySelector('.' + RANGECONTAINER);
                        if (!isNullOrUndefined(presets) && !isNullOrUndefined(rangeContainer)) {
                            presets.style.height = rangeContainer.getBoundingClientRect().height + 'px';
                        }
                    }
                }, {
                    key: 'presetKeyActionHandler',
                    value: function presetKeyActionHandler(e) {
                        switch (e.action) {
                            case 'moveDown':
                                this.listMoveDown(e);
                                this.setScrollPosition();
                                e.preventDefault();
                                break;
                            case 'moveUp':
                                this.listMoveUp(e);
                                this.setScrollPosition();
                                e.preventDefault();
                                break;
                            case 'enter':
                                var hvrItem = this.getHoverLI();
                                var actItem = this.getActiveLI();
                                if (!isNullOrUndefined(this.leftCalendar) && !isNullOrUndefined(actItem)) {
                                    if (isNullOrUndefined(hvrItem) || !isNullOrUndefined(actItem) && actItem === hvrItem) {
                                        this.activeIndex = Array.prototype.slice.call(this.liCollections).indexOf(actItem);
                                        var values = this.presetsItem[this.activeIndex];
                                        if (values.id === 'custom_range') {
                                            this.calendarFocus();
                                            actItem.classList.remove(HOVER);
                                            e.preventDefault();
                                            return;
                                        }
                                    }
                                }
                                if (!isNullOrUndefined(hvrItem) || !isNullOrUndefined(actItem)) {
                                    this.onMouseClick(e, hvrItem || actItem);
                                }
                                e.preventDefault();
                                break;
                            case 'tab':
                                if (this.leftCalendar) {
                                    var item = this.getHoverLI();
                                    if (!isNullOrUndefined(item)) {
                                        item.classList.remove(HOVER);
                                    }
                                } else {
                                    this.hide();
                                    e.preventDefault();
                                }
                                break;
                        }
                    }
                }, {
                    key: 'listMoveDown',
                    value: function listMoveDown(e) {
                        var hvrItem = this.getHoverLI();
                        var actItem = this.getActiveLI();
                        if (!isNullOrUndefined(hvrItem)) {
                            var li = hvrItem.nextElementSibling;
                            if (!isNullOrUndefined(li) && li.classList.contains(LISTCLASS)) {
                                removeClass([hvrItem], HOVER);
                                addClass([li], HOVER);
                            }
                        } else if (!isNullOrUndefined(actItem)) {
                            var _li = actItem.nextElementSibling;
                            if (!isNullOrUndefined(_li) && _li.classList.contains(LISTCLASS)) {
                                addClass([_li], HOVER);
                            }
                        } else {
                            addClass([this.liCollections[0]], HOVER);
                        }
                    }
                }, {
                    key: 'listMoveUp',
                    value: function listMoveUp(e) {
                        var hvrItem = this.getHoverLI();
                        var actItem = this.getActiveLI();
                        if (!isNullOrUndefined(hvrItem)) {
                            var li = hvrItem.previousElementSibling;
                            if (!isNullOrUndefined(li) && li.classList.contains(LISTCLASS)) {
                                removeClass([hvrItem], HOVER);
                                addClass([li], HOVER);
                            }
                        } else if (!isNullOrUndefined(actItem)) {
                            var _li2 = actItem.previousElementSibling;
                            if (!isNullOrUndefined(_li2) && _li2.classList.contains(LISTCLASS)) {
                                addClass([_li2], HOVER);
                            }
                        }
                    }
                }, {
                    key: 'getHoverLI',
                    value: function getHoverLI() {
                        var item = this.presetElement.querySelector('.' + HOVER);
                        return item;
                    }
                }, {
                    key: 'getActiveLI',
                    value: function getActiveLI() {
                        var item = this.presetElement.querySelector('.' + ACTIVE$1);
                        return item;
                    }
                }, {
                    key: 'popupKeyBoardHandler',
                    value: function popupKeyBoardHandler() {
                        this.popupKeyboardModule = new KeyboardEvents(this.popupWrapper, {
                            eventName: 'keydown',
                            keyAction: this.popupKeyActionHandle.bind(this),
                            keyConfigs: { escape: 'escape' }
                        });
                        this.popupKeyboardModule = new KeyboardEvents(this.inputWrapper.container.children[1], {
                            eventName: 'keydown',
                            keyAction: this.popupKeyActionHandle.bind(this),
                            keyConfigs: this.keyInputConfigs
                        });
                    }
                }, {
                    key: 'setScrollPosition',
                    value: function setScrollPosition() {
                        var listHeight = this.presetElement.getBoundingClientRect().height;
                        var hover = this.presetElement.querySelector('.' + HOVER);
                        var active = this.presetElement.querySelector('.' + ACTIVE$1);
                        var element = !isNullOrUndefined(hover) ? hover : active;
                        if (!isNullOrUndefined(element)) {
                            var nextEle = element.nextElementSibling;
                            var height = nextEle ? nextEle.offsetTop : element.offsetTop;
                            var liHeight = element.getBoundingClientRect().height;
                            if (height + element.offsetTop > listHeight) {
                                this.presetElement.scrollTop = nextEle ? height - (listHeight / 2 + liHeight / 2) : height;
                            } else {
                                this.presetElement.scrollTop = 0;
                            }
                        }
                    }
                }, {
                    key: 'popupKeyActionHandle',
                    value: function popupKeyActionHandle(e) {
                        switch (e.action) {
                            case 'escape':
                                if (this.isPopupOpen()) {
                                    if (this.isKeyPopup) {
                                        this.inputElement.focus();
                                        this.isKeyPopup = false;
                                    }
                                    this.hide();
                                } else {
                                    this.inputWrapper.container.children[1].blur();
                                }
                                break;
                            case 'enter':
                                if (!this.isPopupOpen()) {
                                    this.show();
                                } else {
                                    this.inputWrapper.container.children[1].focus();
                                }
                                break;
                            case 'tab':
                                this.hide();
                        }
                    }
                }, {
                    key: 'documentHandler',
                    value: function documentHandler(e) {
                        if (isNullOrUndefined(this.popupObj)) {
                            return;
                        }
                        var target = e.target;
                        if (!this.inputWrapper.container.contains(target) || !isNullOrUndefined(this.popupObj) && !closest(target, this.popupWrapper.id)) {
                            e.preventDefault();
                        }
                        if ((isNullOrUndefined(this.targetElement) || !isNullOrUndefined(this.targetElement) && !(target === this.targetElement)) && !closest(target, '#' + this.popupObj.element.id) && !(closest(target, '.' + INPUTCONTAINER$1) === this.inputWrapper.container) && !(closest(target, '.e-daterangepicker.e-popup') && !target.classList.contains('e-day'))) {
                            this.preventBlur = false;
                            if (this.isPopupOpen()) {
                                if (!this.isMobile) {
                                    this.isRangeIconClicked = false;
                                }
                                this.applyFunction(e);
                                if (isNullOrUndefined(this.startDate) || isNullOrUndefined(this.endDate)) {
                                    this.clear();
                                    this.clearRange();
                                }
                            }
                        }
                    }
                }, {
                    key: 'createInput',
                    value: function createInput() {
                        this.inputWrapper = Input.createInput({
                            floatLabelType: this.floatLabelType,
                            element: this.inputElement,
                            properties: {
                                readonly: this.readonly,
                                placeholder: this.placeholder,
                                cssClass: this.cssClass,
                                enabled: this.enabled,
                                enableRtl: this.enableRtl,
                                showClearButton: this.showClearButton
                            },
                            buttons: [DATERANGEICON]
                        });
                        attributes(this.inputElement, {
                            'aria-readonly': this.readonly ? 'true' : 'false', 'tabindex': '1', 'aria-haspopup': 'true',
                            'aria-activedescendant': 'null', 'aria-owns': this.element.id + '_popup', 'aria-expanded': 'false',
                            'role': 'daterangepicker', 'autocomplete': 'off', 'aria-disabled': !this.enabled ? 'true' : 'false',
                            'autocorrect': 'off', 'autocapitalize': 'off', 'spellcheck': 'false'
                        });
                        Input.addAttributes({ 'aria-label': 'select' }, this.inputWrapper.buttons[0]);
                        if (!isNullOrUndefined(this.placeholder) && this.placeholder.trim() !== '') {
                            Input.addAttributes({ 'aria-placeholder': this.placeholder }, this.inputElement);
                        }
                        this.setEleWidth(this.width);
                        addClass([this.inputWrapper.container], DATERANGEWRAPPER);
                        if (isNullOrUndefined(this.element.getAttribute('name'))) {
                            attributes(this.inputElement, { 'name': this.element.id });
                        }
                        if (this.inputElement.type === 'hidden') {
                            this.inputWrapper.container.style.display = 'none';
                        }
                        this.refreshControl();
                        this.previousEleValue = this.inputElement.value;
                    }
                }, {
                    key: 'setEleWidth',
                    value: function setEleWidth(width) {
                        if (typeof width === 'string') {
                            this.inputWrapper.container.style.width = this.width;
                        } else if (typeof width === 'number') {
                            this.inputWrapper.container.style.width = formatUnit(this.width);
                        } else {
                            this.inputWrapper.container.style.width = '100%';
                        }
                    }
                }, {
                    key: 'refreshControl',
                    value: function refreshControl() {
                        this.validateMinMax();
                        if (this.strictMode) {
                            this.validateRangeStrict();
                        }
                        var isDisabled = this.disabledDates();
                        if (this.strictMode && isDisabled) {
                            this.setProperties({ startDate: this.previousStartValue }, true);
                            this.setProperties({ endDate: this.previousEndValue }, true);
                            this.setValue();
                        }
                        this.updateInput();
                        if (!this.strictMode) {
                            this.validateRange();
                        }
                        if (!this.strictMode && isDisabled) {
                            this.clearRange();
                        }
                        if (!isNullOrUndefined(this.endDate) && !isNullOrUndefined(this.startDate) && !isDisabled) {
                            this.disabledDateRender();
                        }
                        this.errorClass();
                        this.previousStartValue = isNullOrUndefined(this.startDate) || isNaN(+this.startDate) ? null : new Date(+this.startDate);
                        this.previousEndValue = isNullOrUndefined(this.endDate) || isNaN(+this.endDate) ? null : new Date(+this.endDate);
                    }
                }, {
                    key: 'updateInput',
                    value: function updateInput() {
                        if (!isNullOrUndefined(this.endDate) && !isNullOrUndefined(this.startDate)) {
                            var startDate = this.globalize.formatDate(this.startDate, { format: this.format, type: 'date', skeleton: 'yMd' });
                            var endDate = this.globalize.formatDate(this.endDate, { format: this.format, type: 'date', skeleton: 'yMd' });
                            Input.setValue(startDate + ' ' + this.separator + ' ' + endDate, this.inputElement, this.floatLabelType, this.showClearButton);
                            this.previousStartValue = new Date(+this.startDate);
                            this.previousEndValue = new Date(+this.endDate);
                        }
                    }
                }, {
                    key: 'isDateDisabled',
                    value: function isDateDisabled(date) {
                        var value = new Date(+date);
                        if (+value < +this.min || +value > +this.max) {
                            return true;
                        }
                        this.virtualRenderCellArgs = {
                            date: value,
                            isDisabled: false
                        };
                        var args = this.virtualRenderCellArgs;
                        this.virtualRenderCellEvent(args);
                        if (args.isDisabled) {
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: 'disabledDateRender',
                    value: function disabledDateRender() {
                        this.disabledDays = [];
                        this.disabledDayCnt = null;
                        var localDate = new Date(+this.startDate);
                        var count = 0;
                        while (+localDate <= +this.endDate) {
                            this.virtualRenderCellArgs = {
                                date: localDate,
                                isDisabled: false
                            };
                            var args = this.virtualRenderCellArgs;
                            this.virtualRenderCellEvent(args);
                            if (args.isDisabled) {
                                this.disabledDays.push(new Date(+args.date));
                                if (+localDate > +this.startDate && +localDate < +this.endDate) {
                                    count++;
                                }
                            }
                            this.addDay(localDate, 1, null, this.max, this.min);
                        }
                        this.disabledDayCnt = count;
                    }
                }, {
                    key: 'virtualRenderCellEvent',
                    value: function virtualRenderCellEvent(args) {
                        extend(this.virtualRenderCellArgs, { name: 'renderDayCell' });
                        this.trigger('renderDayCell', args);
                    }
                }, {
                    key: 'disabledDates',
                    value: function disabledDates() {
                        var isStartDisabled = false;
                        var isEndDisabled = false;
                        if (!isNullOrUndefined(this.endDate) && !isNullOrUndefined(this.startDate)) {
                            this.setProperties({ value: null }, true);
                            isStartDisabled = this.isDateDisabled(this.startDate);
                            isEndDisabled = this.isDateDisabled(this.endDate);
                            this.currentDate = null;
                            this.setProperties({ value: null }, true);
                            this.setValue();
                        }
                        return isStartDisabled || isEndDisabled;
                    }
                }, {
                    key: 'changeTrigger',
                    value: function changeTrigger(e) {
                        if (this.previousEleValue !== this.inputElement.value) {
                            if (+this.initStartDate !== +this.startDate || +this.initEndDate !== +this.endDate) {
                                this.trigger('change', this.rangeArgs(e));
                            }
                        }
                        this.previousEleValue = this.inputElement.value;
                        this.initStartDate = this.checkDateValue(this.startDate);
                        this.initEndDate = this.checkDateValue(this.endDate);
                    }
                }, {
                    key: 'navigateTo',
                    value: function navigateTo(view, value) {
                        _get(DateRangePicker.prototype.__proto__ || Object.getPrototypeOf(DateRangePicker.prototype), 'navigateTo', this).call(this, view, value);
                    }
                }, {
                    key: 'focusIn',
                    value: function focusIn() {
                        if (document.activeElement !== this.inputElement && this.enabled) {
                            addClass([this.inputWrapper.container], [INPUTFOCUS$1]);
                            this.inputElement.focus();
                            var focusArguments = {
                                model: this
                            };
                            this.trigger('focus', focusArguments);
                        }
                    }
                }, {
                    key: 'focusOut',
                    value: function focusOut() {
                        var isBlur = this.preventBlur;
                        if (document.activeElement === this.inputElement) {
                            removeClass([this.inputWrapper.container], [INPUTFOCUS$1]);
                            this.preventBlur = false;
                            this.inputElement.blur();
                            this.preventBlur = isBlur;
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.hide();
                        var ariaAttrs = {
                            'aria-readonly': this.readonly ? 'true' : 'false', 'tabindex': '1', 'aria-haspopup': 'true',
                            'aria-activedescendant': 'null', 'aria-owns': this.element.id + '_popup', 'aria-expanded': 'false',
                            'role': 'daterangepicker', 'autocomplete': 'off', 'aria-disabled': !this.enabled ? 'true' : 'false',
                            'autocorrect': 'off', 'autocapitalize': 'off', 'aria-invalid': 'false', 'spellcheck': 'false'
                        };
                        if (this.inputElement) {
                            removeClass([this.inputElement], [ROOT$2]);
                            EventHandler.remove(this.inputElement, 'blur', this.inputBlurHandler);
                            Input.removeAttributes(ariaAttrs, this.inputElement);
                            this.ensureInputAttribute();
                            this.inputElement.classList.remove('e-input');
                            if (!isNullOrUndefined(this.inputWrapper)) {
                                EventHandler.remove(this.inputWrapper.buttons[0], 'click', this.rangeIconHandler);
                                if (this.angularTag === null) {
                                    this.inputWrapper.container.parentElement.appendChild(this.inputElement);
                                }
                                detach(this.inputWrapper.container);
                            }
                        }
                        if (!isNullOrUndefined(this.inputKeyboardModule) && !this.isMobile) {
                            this.inputKeyboardModule.destroy();
                        }
                        if (this.popupObj) {
                            if (!this.isMobile) {
                                this.clearCalendarEvents();
                            }
                        }
                        _get(DateRangePicker.prototype.__proto__ || Object.getPrototypeOf(DateRangePicker.prototype), 'destroy', this).call(this);
                        this.inputWrapper = this.popupWrapper = this.popupObj = this.cloneElement = this.presetElement = null;
                    }
                }, {
                    key: 'ensureInputAttribute',
                    value: function ensureInputAttribute() {
                        for (var attr = 0; attr < this.inputElement.attributes.length; attr++) {
                            var prop = this.inputElement.attributes[attr].name;
                            if (isNullOrUndefined(this.cloneElement.getAttribute(prop))) {
                                if (prop.toLowerCase() === 'value' || isNullOrUndefined(this.cloneElement.getAttribute('value'))) {
                                    this.inputElement.value = '';
                                }
                                this.inputElement.removeAttribute(prop);
                            }
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'daterangepicker';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        var keyEntity = ['startDate', 'endDate', 'value'];
                        return this.addOnPersist(keyEntity);
                    }
                }, {
                    key: 'getSelectedRange',
                    value: function getSelectedRange() {
                        var range = void 0;
                        if (!isNullOrUndefined(this.startDate) && !isNullOrUndefined(this.endDate)) {
                            range = Math.round(Math.abs((this.startDate.getTime() - this.endDate.getTime()) / (1000 * 60 * 60 * 24))) + 1;
                            this.disabledDateRender();
                            if (!isNullOrUndefined(this.disabledDayCnt)) {
                                range = range - this.disabledDayCnt;
                                this.disabledDayCnt = null;
                            }
                        } else {
                            range = 0;
                        }
                        return { startDate: this.startDate, endDate: this.endDate, daySpan: range };
                    }
                }, {
                    key: 'show',
                    value: function show(element) {
                        if (this.enabled && this.readonly || !this.enabled || this.popupObj) {
                            return;
                        } else {
                            if (!this.isPopupOpen()) {
                                if (element) {
                                    this.targetElement = element;
                                }
                                var args = {
                                    popup: this.popupObj || null,
                                    cancel: false,
                                    date: this.inputElement.value,
                                    model: this,
                                    e: event
                                };
                                this.trigger('open', args);
                                if (!args.cancel) {
                                    this.createPopup();
                                    var isPreset = !this.isCustomRange || this.isMobile && this.isCustomRange;
                                    if (!isUndefined(this.presets[0].start && this.presets[0].end && this.presets[0].label) && isPreset) {
                                        this.setScrollPosition();
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'hide',
                    value: function hide() {
                        if (this.popupObj) {
                            if (isNullOrUndefined(this.previousEndValue) && isNullOrUndefined(this.previousStartValue)) {
                                this.clearRange();
                            } else {
                                if (!isNullOrUndefined(this.previousStartValue)) {
                                    this.setProperties({ startDate: new Date('' + this.previousStartValue) }, true);
                                    this.setValue();
                                    this.currentDate = new Date('' + this.startDate);
                                } else {
                                    this.setProperties({ startDate: null }, true);
                                    this.setValue();
                                }
                                if (!isNullOrUndefined(this.previousEndValue)) {
                                    this.setProperties({ endDate: new Date('' + this.previousEndValue) }, true);
                                    this.setValue();
                                } else {
                                    this.setProperties({ endDate: null }, true);
                                    this.setValue();
                                }
                            }
                            if (this.isPopupOpen()) {
                                var args = {
                                    cancel: false,
                                    popup: this.popupObj,
                                    date: this.inputElement.value,
                                    model: this,
                                    e: event
                                };
                                this.trigger('close', args);
                                if (!args.cancel) {
                                    if (this.isMobile) {
                                        if (!isNullOrUndefined(this.startButton) && !isNullOrUndefined(this.endButton)) {
                                            EventHandler.remove(this.startButton.element, 'click', this.deviceHeaderClick);
                                            EventHandler.remove(this.endButton.element, 'click', this.deviceHeaderClick);
                                        }
                                    }
                                    if (this.popupObj) {
                                        this.popupObj.hide();
                                    }
                                    if (!this.isMobile) {
                                        if (!isNullOrUndefined(this.leftKeyboardModule) && !isNullOrUndefined(this.rightKeyboardModule)) {
                                            this.leftKeyboardModule.destroy();
                                            this.rightKeyboardModule.destroy();
                                        }
                                        if (!isNullOrUndefined(this.presetElement)) {
                                            this.presetKeyboardModule.destroy();
                                        }
                                        if (!isNullOrUndefined(this.cancelButton)) {
                                            this.btnKeyboardModule.destroy();
                                        }
                                    }
                                    this.targetElement = null;
                                    removeClass([document.body], OVERFLOW$1);
                                    EventHandler.remove(document, 'mousedown touchstart', this.documentHandler);
                                    if (this.isMobile && this.modal) {
                                        this.modal.style.display = 'none';
                                        this.modal.outerHTML = '';
                                        this.modal = null;
                                    }
                                    this.isKeyPopup = this.dateDisabled = false;
                                }
                            }
                        }
                    }
                }, {
                    key: 'setLocale',
                    value: function setLocale() {
                        this.globalize = new Internationalization(this.locale);
                        this.l10n.setLocale(this.locale);
                        this.setProperties({ placeholder: this.l10n.getConstant('placeholder') }, true);
                        Input.setPlaceholder(this.placeholder, this.inputElement);
                        this.updateInput();
                        this.changeTrigger();
                    }
                }, {
                    key: 'refreshChange',
                    value: function refreshChange() {
                        this.refreshControl();
                        this.changeTrigger();
                    }
                }, {
                    key: 'setDate',
                    value: function setDate() {
                        Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
                        this.refreshChange();
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var format = { format: this.format, type: 'date', skeleton: 'yMd' };
                        var _iteratorNormalCompletion22 = true;
                        var _didIteratorError22 = false;
                        var _iteratorError22 = undefined;

                        try {
                            for (var _iterator22 = Object.keys(newProp)[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                                var prop = _step22.value;

                                this.hide();
                                switch (prop) {
                                    case 'width':
                                        this.setEleWidth(this.width);
                                        break;
                                    case 'separator':
                                        this.previousEleValue = this.inputElement.value;
                                        this.setProperties({ separator: newProp.separator }, true);
                                        this.updateInput();
                                        this.changeTrigger();
                                        break;
                                    case 'placeholder':
                                        Input.setPlaceholder(newProp.placeholder, this.inputElement);
                                        this.setProperties({ placeholder: newProp.placeholder }, true);
                                        break;
                                    case 'readonly':
                                        Input.setReadonly(this.readonly, this.inputElement);
                                        this.inputElement.setAttribute('aria-readonly', '' + this.readonly);
                                        break;
                                    case 'cssClass':
                                        if (this.popupWrapper) {
                                            addClass([this.popupWrapper], [newProp.cssClass]);
                                        }
                                        addClass([this.inputWrapper.container], [newProp.cssClass]);
                                        this.setProperties({ cssClass: newProp.cssClass }, true);
                                        break;
                                    case 'enabled':
                                        this.setProperties({ enabled: newProp.enabled }, true);
                                        Input.setEnabled(this.enabled, this.inputElement);
                                        this.bindEvents();
                                        break;
                                    case 'enableRtl':
                                        this.setProperties({ enableRtl: newProp.enableRtl }, true);
                                        Input.setEnableRtl(this.enableRtl, [this.inputWrapper.container]);
                                        break;
                                    case 'zIndex':
                                        this.setProperties({ zIndex: newProp.zIndex }, true);
                                        break;
                                    case 'format':
                                        this.setProperties({ format: newProp.format }, true);
                                        this.updateInput();
                                        this.changeTrigger();
                                        break;
                                    case 'locale':
                                        this.setProperties({ locale: newProp.locale }, true);
                                        this.setLocale();
                                        break;
                                    case 'showClearButton':
                                        Input.setClearButton(this.showClearButton, this.inputElement, this.inputWrapper);
                                        this.bindClearEvent();
                                        break;
                                    case 'startDate':
                                        if (typeof newProp.startDate === 'string') {
                                            newProp.startDate = this.globalize.parseDate(newProp.startDate, format);
                                        }
                                        this.setProperties({ startDate: newProp.startDate }, true);
                                        this.setValue();
                                        this.setDate();
                                        break;
                                    case 'endDate':
                                        if (typeof newProp.endDate === 'string') {
                                            newProp.endDate = this.globalize.parseDate(newProp.endDate, format);
                                        }
                                        this.setProperties({ endDate: this.checkDateValue(new Date('' + newProp.endDate)) }, true);
                                        this.setValue();
                                        this.setDate();
                                        break;
                                    case 'value':
                                        this.setProperties({ value: newProp.value }, true);
                                        if (isNullOrUndefined(this.value)) {
                                            this.setProperties({ startDate: null }, true);
                                            this.setProperties({ endDate: null }, true);
                                            this.setProperties({ value: null }, true);
                                        }
                                        this.updateValue();
                                        this.setValue();
                                        this.setDate();
                                        break;
                                    case 'minDays':
                                        this.setProperties({ minDays: newProp.minDays }, true);
                                        this.refreshChange();
                                        break;
                                    case 'maxDays':
                                        this.setProperties({ maxDays: newProp.maxDays }, true);
                                        this.refreshChange();
                                        break;
                                    case 'min':
                                        this.setProperties({ min: this.checkDateValue(new Date('' + newProp.min)) }, true);
                                        this.previousEleValue = this.inputElement.value;
                                        this.refreshChange();
                                        break;
                                    case 'max':
                                        this.setProperties({ max: this.checkDateValue(new Date('' + newProp.max)) }, true);
                                        this.refreshChange();
                                        break;
                                    case 'strictMode':
                                        this.setProperties({ strictMode: newProp.strictMode }, true);
                                        this.refreshChange();
                                        break;
                                    case 'presets':
                                        this.setProperties({ presets: newProp.presets }, true);
                                        this.processPresets();
                                        break;
                                    case 'floatLabelType':
                                        this.floatLabelType = newProp.floatLabelType;
                                        Input.removeFloating(this.inputWrapper);
                                        Input.addFloating(this.inputElement, this.floatLabelType, this.placeholder);
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError22 = true;
                            _iteratorError22 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion22 && _iterator22.return) {
                                    _iterator22.return();
                                }
                            } finally {
                                if (_didIteratorError22) {
                                    throw _iteratorError22;
                                }
                            }
                        }
                    }
                }]);

                return DateRangePicker;
            }(CalendarBase));

            __decorate$2([Property(null)], DateRangePicker.prototype, "value", void 0);
            __decorate$2([Property(false)], DateRangePicker.prototype, "enablePersistence", void 0);
            __decorate$2([Property(false)], DateRangePicker.prototype, "enableRtl", void 0);
            __decorate$2([Property(new Date(1900, 0, 1))], DateRangePicker.prototype, "min", void 0);
            __decorate$2([Property(new Date(2099, 11, 31))], DateRangePicker.prototype, "max", void 0);
            __decorate$2([Property('en-US')], DateRangePicker.prototype, "locale", void 0);
            __decorate$2([Property(0)], DateRangePicker.prototype, "firstDayOfWeek", void 0);
            __decorate$2([Property(false)], DateRangePicker.prototype, "weekNumber", void 0);
            __decorate$2([Event()], DateRangePicker.prototype, "created", void 0);
            __decorate$2([Event()], DateRangePicker.prototype, "destroyed", void 0);
            __decorate$2([Event()], DateRangePicker.prototype, "change", void 0);
            __decorate$2([Event()], DateRangePicker.prototype, "navigated", void 0);
            __decorate$2([Event()], DateRangePicker.prototype, "renderDayCell", void 0);
            __decorate$2([Property(null)], DateRangePicker.prototype, "startDate", void 0);
            __decorate$2([Property(null)], DateRangePicker.prototype, "endDate", void 0);
            __decorate$2([Collection([{}], Presets)], DateRangePicker.prototype, "presets", void 0);
            __decorate$2([Property('')], DateRangePicker.prototype, "width", void 0);
            __decorate$2([Property(1000)], DateRangePicker.prototype, "zIndex", void 0);
            __decorate$2([Property(true)], DateRangePicker.prototype, "showClearButton", void 0);
            __decorate$2([Property(true)], DateRangePicker.prototype, "showTodayButton", void 0);
            __decorate$2([Property('Month')], DateRangePicker.prototype, "start", void 0);
            __decorate$2([Property('Month')], DateRangePicker.prototype, "depth", void 0);
            __decorate$2([Property('')], DateRangePicker.prototype, "cssClass", void 0);
            __decorate$2([Property('-')], DateRangePicker.prototype, "separator", void 0);
            __decorate$2([Property(null)], DateRangePicker.prototype, "minDays", void 0);
            __decorate$2([Property(null)], DateRangePicker.prototype, "maxDays", void 0);
            __decorate$2([Property(false)], DateRangePicker.prototype, "strictMode", void 0);
            __decorate$2([Property(null)], DateRangePicker.prototype, "format", void 0);
            __decorate$2([Property(true)], DateRangePicker.prototype, "enabled", void 0);
            __decorate$2([Property(false)], DateRangePicker.prototype, "readonly", void 0);
            __decorate$2([Property('Never')], DateRangePicker.prototype, "floatLabelType", void 0);
            __decorate$2([Property(null)], DateRangePicker.prototype, "placeholder", void 0);
            __decorate$2([Event()], DateRangePicker.prototype, "open", void 0);
            __decorate$2([Event()], DateRangePicker.prototype, "close", void 0);
            __decorate$2([Event()], DateRangePicker.prototype, "select", void 0);
            __decorate$2([Event()], DateRangePicker.prototype, "focus", void 0);
            __decorate$2([Event()], DateRangePicker.prototype, "blur", void 0);
            _export('DateRangePicker', DateRangePicker = __decorate$2([NotifyPropertyChanges], DateRangePicker));

            /**
             * DateRangePicker modules
             */

            __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            WRAPPERCLASS = 'e-time-wrapper';
            POPUP$2 = 'e-popup';
            ERROR$2 = 'e-error';
            POPUPDIMENSION = '240px';
            DAY = new Date().getDate();
            MONTH$1 = new Date().getMonth();
            YEAR$1 = new Date().getFullYear();
            ROOT$3 = 'e-timepicker';
            CONTENT$2 = 'e-content';
            SELECTED$2 = 'e-active';
            HOVER$1 = 'e-hover';
            NAVIGATION = 'e-navigation';
            DISABLED$2 = 'e-disabled';
            ICONANIMATION = 'e-icon-anim';
            FOCUS = 'e-input-focus';
            LISTCLASS$1 = cssClass.li;
            HALFPOSITION = 2;
            ANIMATIONDURATION = 50;

            (function (TimePickerBase) {
                function createListItems(min, max, globalize, timeFormat, step) {
                    var start = void 0;
                    var end = void 0;
                    var interval = step * 60000;
                    var listItems = [];
                    var timeCollections = [];
                    start = +min.setMilliseconds(0);
                    end = +max.setMilliseconds(0);
                    while (end >= start) {
                        timeCollections.push(start);
                        listItems.push(globalize.formatDate(new Date(start), { format: timeFormat, type: 'time' }));
                        start += interval;
                    }
                    var listTag = ListBase.createList(listItems, null, true);
                    return { collection: timeCollections, list: listTag };
                }
                TimePickerBase.createListItems = createListItems;
            })(TimePickerBase || _export('TimePickerBase', TimePickerBase = {}));
            /**
             * TimePicker is an intuitive interface component which provides an options to select a time value
             * from popup list or to set a desired time value.
             * ```
             * <input id='timepicker' type='text'/>
             * <script>
             *   var timePickerObj = new TimePicker({ value: new Date() });
             *   timePickerObj.appendTo('#timepicker');
             * </script>
             * ```
             */

            _export('TimePicker', TimePicker = function (_Component2) {
                _inherits(TimePicker, _Component2);

                /**
                 * Constructor for creating the widget
                 */
                function TimePicker(options, element) {
                    _classCallCheck(this, TimePicker);

                    var _this10 = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, options, element));

                    _this10.liCollections = [];
                    _this10.timeCollections = [];
                    _this10.disableItemCollection = [];
                    return _this10;
                }
                /**
                 * Initialize the event handler
                 * @private
                 */


                _createClass(TimePicker, [{
                    key: 'preRender',
                    value: function preRender() {
                        this.keyConfigure = {
                            enter: 'enter',
                            escape: 'escape',
                            end: 'end',
                            tab: 'tab',
                            home: 'home',
                            down: 'downarrow',
                            up: 'uparrow',
                            left: 'leftarrow',
                            right: 'rightarrow',
                            open: 'alt+downarrow',
                            close: 'alt+uparrow'
                        };
                        this.cloneElement = this.element.cloneNode(true);
                        this.inputElement = this.element;
                        this.angularTag = null;
                        if (this.element.tagName === 'EJS-TIMEPICKER') {
                            this.angularTag = this.element.tagName;
                            this.inputElement = createElement('input');
                            this.element.appendChild(this.inputElement);
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.initialize();
                        this.createInputElement();
                        this.setEnable();
                        this.validateInterval();
                        this.bindEvents();
                        this.validateDisable();
                        this.setValue(this.getFormattedValue(this.value));
                    }
                }, {
                    key: 'validateDisable',
                    value: function validateDisable() {
                        this.setMinMax(this.initMin, this.initMax);
                        this.popupCreation();
                        this.popupObj.hide();
                        if (!isNaN(+this.value) && this.value !== null) {
                            if (!this.valueIsDisable(this.value)) {
                                //disable value given in value property so reset the date based on current date
                                if (this.strictMode) {
                                    this.resetState();
                                }
                                this.initValue = null;
                                this.initMax = this.getDateObject(this.initMax);
                                this.initMin = this.getDateObject(this.initMin);
                                this.timeCollections = this.liCollections = [];
                                this.setMinMax(this.initMin, this.initMax);
                            }
                        }
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        this.globalize = new Internationalization(this.locale);
                        this.defaultCulture = new Internationalization('en');
                        // persist the value property.
                        this.setProperties({ value: this.checkDateValue(new Date('' + this.value)) }, true);
                        this.setProperties({ min: this.checkDateValue(new Date('' + this.min)) }, true);
                        this.setProperties({ max: this.checkDateValue(new Date('' + this.max)) }, true);
                        this.checkAttributes(); //check the input element attributes
                        var localeText = { placeholder: this.placeholder };
                        this.l10n = new L10n('timepicker', localeText, this.locale);
                        this.setProperties({ placeholder: this.placeholder || this.l10n.getConstant('placeholder') }, true);
                        this.initValue = this.checkDateValue(this.value);
                        this.initMin = this.checkDateValue(this.min);
                        this.initMax = this.checkDateValue(this.max);
                        this.isNavigate = this.isPreventBlur = this.isTextSelected = false;
                        this.activeIndex = this.valueWithMinutes = this.prevDate = null;
                        if (!isNullOrUndefined(this.element.getAttribute('id'))) {
                            if (this.angularTag !== null) {
                                this.inputElement.id = this.element.getAttribute('id') + '_input';
                            }
                        } else {
                            //for angular case
                            this.element.id = getUniqueID('ej2_timepicker');
                            if (this.angularTag !== null) {
                                attributes(this.inputElement, { 'id': this.element.id + '_input' });
                            }
                        }
                        if (isNullOrUndefined(this.inputElement.getAttribute('name'))) {
                            attributes(this.inputElement, { 'name': this.element.id });
                        }
                    }
                }, {
                    key: 'checkDateValue',
                    value: function checkDateValue(value) {
                        return !isNullOrUndefined(value) && value instanceof Date && !isNaN(+value) ? value : null;
                    }
                }, {
                    key: 'createInputElement',
                    value: function createInputElement() {
                        this.inputWrapper = Input.createInput({
                            element: this.inputElement,
                            floatLabelType: this.floatLabelType,
                            properties: {
                                readonly: this.readonly,
                                placeholder: this.placeholder,
                                cssClass: this.cssClass,
                                enabled: this.enabled,
                                enableRtl: this.enableRtl,
                                showClearButton: this.showClearButton
                            },
                            buttons: [' e-input-group-icon e-time-icon e-icons']
                        });
                        this.inputWrapper.container.style.width = this.setWidth(this.width);
                        attributes(this.inputElement, {
                            'aria-haspopup': 'true', 'aria-autocomplete': 'list', 'tabindex': '0', 'aria-activedescendant': 'null',
                            'aria-owns': this.element.id + '_options', 'aria-expanded': 'false', 'role': 'combobox', 'autocomplete': 'off',
                            'autocorrect': 'off', 'autocapitalize': 'off', 'spellcheck': 'false', 'aria-disabled': 'false', 'aria-invalid': 'false'
                        });
                        if (!this.isNullOrEmpty(this.inputStyle)) {
                            Input.addAttributes({ 'style': this.inputStyle }, this.inputElement);
                        }
                        addClass([this.inputWrapper.container], WRAPPERCLASS);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.hide();
                        this.unBindEvents();
                        var ariaAttribute = {
                            'aria-haspopup': 'true', 'aria-autocomplete': 'list', 'tabindex': '0', 'aria-activedescendant': 'null',
                            'aria-owns': this.element.id + '_options', 'aria-expanded': 'false', 'role': 'combobox', 'autocomplete': 'off',
                            'autocorrect': 'off', 'autocapitalize': 'off', 'spellcheck': 'false', 'aria-disabled': 'true', 'aria-invalid': 'false'
                        };
                        if (this.inputElement) {
                            Input.removeAttributes(ariaAttribute, this.inputElement);
                            if (this.angularTag === null) {
                                this.inputWrapper.container.parentElement.appendChild(this.inputElement);
                            }
                            this.ensureInputAttribute();
                            this.enableElement([this.inputElement]);
                            this.inputElement.classList.remove('e-input');
                            if (isNullOrUndefined(this.cloneElement.getAttribute('disabled'))) {
                                Input.setEnabled(true, this.inputElement, this.floatLabelType);
                            }
                        }
                        if (this.inputWrapper.container) {
                            remove(this.inputWrapper.container);
                        }
                        this.inputWrapper = this.popupWrapper = this.cloneElement = undefined;
                        this.liCollections = this.timeCollections = this.disableItemCollection = [];
                        if (!isNullOrUndefined(this.rippleFn)) {
                            this.rippleFn();
                        }
                        _get(TimePicker.prototype.__proto__ || Object.getPrototypeOf(TimePicker.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'ensureInputAttribute',
                    value: function ensureInputAttribute() {
                        for (var i = 0; i < this.inputElement.attributes.length; i++) {
                            var prop = this.inputElement.attributes[i].name;
                            if (isNullOrUndefined(this.cloneElement.getAttribute(prop))) {
                                if (prop.toLowerCase() === 'value' || isNullOrUndefined(this.cloneElement.getAttribute('value'))) {
                                    this.inputElement.value = '';
                                }
                                this.inputElement.removeAttribute(prop);
                            }
                        }
                    }
                }, {
                    key: 'popupCreation',
                    value: function popupCreation() {
                        this.popupWrapper = createElement('div', {
                            className: ROOT$3 + ' ' + POPUP$2,
                            attrs: { 'id': this.element.id + '_popup', 'style': 'visibility:hidden' }
                        });
                        if (!isNullOrUndefined(this.cssClass)) {
                            this.popupWrapper.classList.add(this.cssClass);
                        }
                        if (!isNullOrUndefined(this.step) && this.step > 0) {
                            this.generateList();
                            append([this.listWrapper], this.popupWrapper);
                        }
                        document.body.appendChild(this.popupWrapper);
                        this.addSelection();
                        this.renderPopup();
                        this.setScrollPosition();
                    }
                }, {
                    key: 'getPopupHeight',
                    value: function getPopupHeight() {
                        var height = parseInt(POPUPDIMENSION, 10);
                        var popupHeight = this.popupWrapper.getBoundingClientRect().height;
                        return popupHeight > height ? height : popupHeight;
                    }
                }, {
                    key: 'generateList',
                    value: function generateList() {
                        this.createListItems();
                        this.wireListEvents();
                        var rippleModel = { duration: 300, selector: '.' + LISTCLASS$1 };
                        this.rippleFn = rippleEffect(this.listWrapper, rippleModel);
                        this.liCollections = this.listWrapper.querySelectorAll('.' + LISTCLASS$1);
                    }
                }, {
                    key: 'popupCalculation',
                    value: function popupCalculation() {
                        var left = 0;
                        if (Browser.isDevice) {
                            var firstItem = this.isEmptyList() ? this.listTag : this.liCollections[0];
                            left = -(parseInt(getComputedStyle(firstItem).textIndent, 10) - (this.enableRtl ? parseInt(getComputedStyle(this.inputElement).paddingRight, 10) : parseInt(getComputedStyle(this.inputElement).paddingLeft, 10)));
                        }
                        return left;
                    }
                }, {
                    key: 'isEmptyList',
                    value: function isEmptyList() {
                        return !isNullOrUndefined(this.liCollections) && this.liCollections.length === 0 || isNullOrUndefined(this.liCollections);
                    }
                }, {
                    key: 'renderPopup',
                    value: function renderPopup() {
                        var _this11 = this;

                        this.containerStyle = this.inputWrapper.container.getBoundingClientRect();
                        var offset = Browser.isDevice ? this.setPopupPosition() : 2;
                        this.popupObj = new Popup(this.popupWrapper, {
                            width: this.setPopupWidth(this.width),
                            zIndex: this.zIndex,
                            targetType: 'relative',
                            collision: { X: 'flip', Y: 'flip' },
                            relateTo: this.inputWrapper.container,
                            position: { X: 'left', Y: 'bottom' },
                            enableRtl: this.enableRtl,
                            offsetY: offset,
                            offsetX: this.popupCalculation(),
                            open: function open() {
                                _this11.popupWrapper.style.visibility = 'visible';
                                addClass([_this11.inputWrapper.buttons[0]], SELECTED$2);
                            }, close: function close() {
                                removeClass([_this11.inputWrapper.buttons[0]], SELECTED$2);
                                _this11.unWireListEvents();
                                _this11.inputElement.setAttribute('aria-activedescendant', 'null');
                                remove(_this11.popupObj.element);
                                _this11.popupObj.destroy();
                                _this11.popupWrapper.innerHTML = '';
                                _this11.listWrapper = _this11.popupWrapper = _this11.listTag = undefined;
                            }
                        });
                        if (!Browser.isDevice) {
                            this.popupObj.collision = { X: 'none', Y: 'flip' };
                        }
                        this.popupObj.element.style.maxHeight = POPUPDIMENSION;
                    }
                }, {
                    key: 'getFormattedValue',
                    value: function getFormattedValue(value) {
                        if (isNullOrUndefined(this.checkDateValue(value))) {
                            return null;
                        } else {
                            return this.globalize.formatDate(value, { skeleton: 'medium', type: 'time' });
                        }
                    }
                }, {
                    key: 'getDateObject',
                    value: function getDateObject(text) {
                        if (!this.isNullOrEmpty(text)) {
                            var dateValue = this.createDateObj(text);
                            var value = !this.isNullOrEmpty(this.initValue);
                            if (this.checkDateValue(dateValue)) {
                                var date = value ? this.initValue.getDate() : DAY;
                                var month = value ? this.initValue.getMonth() : MONTH$1;
                                var year = value ? this.initValue.getFullYear() : YEAR$1;
                                return new Date(year, month, date, dateValue.getHours(), dateValue.getMinutes(), dateValue.getSeconds());
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'checkErrorState',
                    value: function checkErrorState(val) {
                        var value = this.getDateObject(val);
                        if (this.validateState(value)) {
                            removeClass([this.inputWrapper.container], ERROR$2);
                            attributes(this.inputElement, { 'aria-invalid': 'false' });
                        } else {
                            addClass([this.inputWrapper.container], ERROR$2);
                            attributes(this.inputElement, { 'aria-invalid': 'true' });
                        }
                    }
                }, {
                    key: 'validateInterval',
                    value: function validateInterval() {
                        if (!isNullOrUndefined(this.step) && this.step > 0) {
                            this.enableElement([this.inputWrapper.buttons[0]]);
                        } else {
                            this.disableTimeIcon();
                        }
                    }
                }, {
                    key: 'disableTimeIcon',
                    value: function disableTimeIcon() {
                        this.disableElement([this.inputWrapper.buttons[0]]);
                        this.hide();
                    }
                }, {
                    key: 'disableElement',
                    value: function disableElement(element) {
                        addClass(element, DISABLED$2);
                    }
                }, {
                    key: 'enableElement',
                    value: function enableElement(element) {
                        removeClass(element, DISABLED$2);
                    }
                }, {
                    key: 'selectInputText',
                    value: function selectInputText() {
                        this.inputElement.setSelectionRange(0, this.inputElement.value.length);
                    }
                }, {
                    key: 'getMeridianText',
                    value: function getMeridianText() {
                        var meridian = void 0;
                        if (this.locale === 'en' || this.locale === 'en-US') {
                            meridian = getValue('dayPeriods.format.wide', getDefaultDateObject());
                        } else {
                            meridian = getValue('main.' + '' + this.locale + '.dates.calendars.gregorian.dayPeriods.format.abbreviated', cldrData);
                        }
                        return meridian;
                    }
                }, {
                    key: 'getCursorSelection',
                    value: function getCursorSelection() {
                        var input = this.inputElement;
                        var start = 0;
                        var end = 0;
                        if (!isNaN(input.selectionStart)) {
                            start = input.selectionStart;
                            end = input.selectionEnd;
                        }
                        return { start: Math.abs(start), end: Math.abs(end) };
                    }
                }, {
                    key: 'getActiveElement',
                    value: function getActiveElement() {
                        if (!isNullOrUndefined(this.popupWrapper)) {
                            return this.popupWrapper.querySelectorAll('.' + SELECTED$2);
                        } else {
                            return null;
                        }
                    }
                }, {
                    key: 'isNullOrEmpty',
                    value: function isNullOrEmpty(value) {
                        if (isNullOrUndefined(value) || typeof value === 'string' && value.trim() === '') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }, {
                    key: 'setWidth',
                    value: function setWidth(width) {
                        if (typeof width === 'number') {
                            width = formatUnit(width);
                        } else if (typeof width === 'string') {
                            width = width.match(/px|%|em/) ? width : formatUnit(width);
                        } else {
                            width = '100%';
                        }
                        return width;
                    }
                }, {
                    key: 'setPopupWidth',
                    value: function setPopupWidth(width) {
                        width = this.setWidth(width);
                        if (width.indexOf('%') > -1) {
                            var inputWidth = this.containerStyle.width * parseFloat(width) / 100;
                            width = inputWidth.toString() + 'px';
                        }
                        if (Browser.isDevice) {
                            var firstItem = this.isEmptyList() ? this.listTag : this.liCollections[0];
                            width = parseInt(width, 10) + (parseInt(getComputedStyle(firstItem).textIndent, 10) - parseInt(getComputedStyle(this.inputElement).textIndent, 10) + parseInt(getComputedStyle(this.inputElement.parentElement).borderLeftWidth, 10)) * 2 + 'px';
                        }
                        return width;
                    }
                }, {
                    key: 'setScrollPosition',
                    value: function setScrollPosition() {
                        var listHeight = this.getPopupHeight();
                        var element = void 0;
                        element = this.selectedElement;
                        if (!isNullOrUndefined(element)) {
                            this.findScrollTop(element);
                        } else if (this.popupWrapper && this.checkDateValue(this.scrollTo)) {
                            this.setScrollTo();
                        }
                    }
                }, {
                    key: 'findScrollTop',
                    value: function findScrollTop(element) {
                        var listHeight = this.getPopupHeight();
                        var nextEle = element.nextElementSibling;
                        var height = nextEle ? nextEle.offsetTop : element.offsetTop;
                        var liHeight = element.getBoundingClientRect().height;
                        if (height + element.offsetTop > listHeight) {
                            this.popupWrapper.scrollTop = nextEle ? height - (listHeight / HALFPOSITION + liHeight / HALFPOSITION) : height;
                        } else {
                            this.popupWrapper.scrollTop = 0;
                        }
                    }
                }, {
                    key: 'setScrollTo',
                    value: function setScrollTo() {
                        var element = void 0;
                        if (!isNullOrUndefined(this.popupWrapper)) {
                            var items = this.popupWrapper.querySelectorAll('.' + LISTCLASS$1);
                            if (items.length) {
                                var initialTime = this.timeCollections[0];
                                var scrollTime = this.getDateObject(this.checkDateValue(this.scrollTo)).getTime();
                                element = items[Math.round((scrollTime - initialTime) / (this.step * 60000))];
                            }
                        } else {
                            this.popupWrapper.scrollTop = 0;
                        }
                        if (!isNullOrUndefined(element)) {
                            this.findScrollTop(element);
                        } else {
                            this.popupWrapper.scrollTop = 0;
                        }
                    }
                }, {
                    key: 'getText',
                    value: function getText() {
                        return isNullOrUndefined(this.checkDateValue(this.value)) ? '' : this.getValue(this.value);
                    }
                }, {
                    key: 'getValue',
                    value: function getValue(value) {
                        return isNullOrUndefined(this.checkDateValue(value)) ? null : this.globalize.formatDate(value, {
                            format: this.cldrTimeFormat(), type: 'time'
                        });
                    }
                }, {
                    key: 'cldrDateFormat',
                    value: function cldrDateFormat() {
                        var cldrDate = void 0;
                        if (this.locale === 'en' || this.locale === 'en-US') {
                            cldrDate = getValue('dateFormats.short', getDefaultDateObject());
                        } else {
                            cldrDate = this.getCultureDateObject(cldrData, '' + this.locale);
                        }
                        return cldrDate;
                    }
                }, {
                    key: 'cldrTimeFormat',
                    value: function cldrTimeFormat() {
                        var cldrTime = void 0;
                        if (this.isNullOrEmpty(this.format)) {
                            if (this.locale === 'en' || this.locale === 'en-US') {
                                cldrTime = getValue('timeFormats.short', getDefaultDateObject());
                            } else {
                                cldrTime = this.getCultureTimeObject(cldrData, '' + this.locale);
                            }
                        } else {
                            cldrTime = this.format;
                        }
                        return cldrTime;
                    }
                }, {
                    key: 'dateToNumeric',
                    value: function dateToNumeric() {
                        var cldrTime = void 0;
                        if (this.locale === 'en' || this.locale === 'en-US') {
                            cldrTime = getValue('timeFormats.medium', getDefaultDateObject());
                        } else {
                            cldrTime = getValue('main.' + '' + this.locale + '.dates.calendars.gregorian.timeFormats.medium', cldrData);
                        }
                        return cldrTime;
                    }
                }, {
                    key: 'getExactDateTime',
                    value: function getExactDateTime(value) {
                        if (isNullOrUndefined(this.checkDateValue(value))) {
                            return null;
                        } else {
                            return this.globalize.formatDate(value, { format: this.dateToNumeric(), type: 'time' });
                        }
                    }
                }, {
                    key: 'setValue',
                    value: function setValue(value) {
                        var time = this.checkValue(value);
                        if (!this.strictMode && !this.validateState(time)) {
                            this.initValue = this.valueWithMinutes = null;
                            this.validateMinMax(this.value, this.min, this.max);
                        } else {
                            if (this.isNullOrEmpty(time)) {
                                this.initValue = null;
                                this.validateMinMax(this.value, this.min, this.max);
                            } else {
                                this.initValue = this.compareFormatChange(time);
                            }
                        }
                        this.updateInput(true, this.initValue);
                    }
                }, {
                    key: 'compareFormatChange',
                    value: function compareFormatChange(value) {
                        if (isNullOrUndefined(value)) {
                            return null;
                        }
                        return value !== this.getText() ? this.getDateObject(value) : this.getDateObject(this.value);
                    }
                }, {
                    key: 'updatePlaceHolder',
                    value: function updatePlaceHolder() {
                        Input.setPlaceholder(this.l10n.getConstant('placeholder'), this.inputElement);
                    }
                }, {
                    key: 'popupHandler',
                    value: function popupHandler(e) {
                        if (this.isPopupOpen()) {
                            this.closePopup(0, e);
                        } else {
                            if (!Browser.isDevice) {
                                this.inputElement.focus();
                            }
                            this.show(e);
                            addClass([this.inputWrapper.container], FOCUS);
                        }
                    }
                }, {
                    key: 'mouseDownHandler',
                    value: function mouseDownHandler() {
                        if (!this.readonly) {
                            var curPos = this.getCursorSelection();
                            this.inputElement.setSelectionRange(0, 0);
                            EventHandler.add(this.inputElement, 'mouseup', this.mouseUpHandler, this);
                        }
                    }
                }, {
                    key: 'mouseUpHandler',
                    value: function mouseUpHandler(event) {
                        if (!this.readonly) {
                            event.preventDefault();
                            EventHandler.remove(this.inputElement, 'mouseup', this.mouseUpHandler);
                            var curPos = this.getCursorSelection();
                            if (!(curPos.start === 0 && curPos.end === this.inputElement.value.length)) {
                                if (this.inputElement.value.length > 0) {
                                    this.cursorDetails = this.focusSelection();
                                }
                                this.inputElement.setSelectionRange(this.cursorDetails.start, this.cursorDetails.end);
                            }
                        }
                    }
                }, {
                    key: 'focusSelection',
                    value: function focusSelection() {
                        var regex = new RegExp('^[a-zA-Z0-9]+$');
                        var split = this.inputElement.value.split('');
                        split.push(' ');
                        var curPos = this.getCursorSelection();
                        var start = 0;
                        var end = 0;
                        var isSeparator = false;
                        if (!this.isTextSelected) {
                            for (var i = 0; i < split.length; i++) {
                                if (!regex.test(split[i])) {
                                    end = i;
                                    isSeparator = true;
                                }
                                if (isSeparator) {
                                    if (curPos.start >= start && curPos.end <= end) {
                                        end = end;
                                        this.isTextSelected = true;
                                        break;
                                    } else {
                                        start = i + 1;
                                        isSeparator = false;
                                    }
                                }
                            }
                        } else {
                            start = curPos.start;
                            end = curPos.end;
                            this.isTextSelected = false;
                        }
                        return { start: start, end: end };
                    }
                }, {
                    key: 'inputHandler',
                    value: function inputHandler(event) {
                        if (!this.readonly && this.enabled) {
                            if (event.action !== 'right' && event.action !== 'left' && event.action !== 'tab') {
                                event.preventDefault();
                            }
                            switch (event.action) {
                                case 'home':
                                case 'end':
                                case 'up':
                                case 'down':
                                    this.keyHandler(event);
                                    break;
                                case 'enter':
                                    if (this.isNavigate) {
                                        this.selectedElement = this.liCollections[this.activeIndex];
                                        this.valueWithMinutes = new Date(this.timeCollections[this.activeIndex]);
                                        this.updateValue(this.valueWithMinutes, event);
                                    } else {
                                        this.updateValue(this.inputElement.value, event);
                                    }
                                    this.hide();
                                    addClass([this.inputWrapper.container], FOCUS);
                                    this.isNavigate = false;
                                    break;
                                case 'open':
                                    this.show(event);
                                    break;
                                case 'escape':
                                    Input.setValue(this.objToString(this.value), this.inputElement, this.floatLabelType, this.showClearButton);
                                    this.previousState(this.value);
                                    this.hide();
                                    break;
                                case 'close':
                                    this.hide();
                                    break;
                                default:
                                    this.isNavigate = false;
                                    break;
                            }
                        }
                    }
                }, {
                    key: 'onMouseClick',
                    value: function onMouseClick(event) {
                        var target = event.target;
                        var li = this.selectedElement = closest(target, '.' + LISTCLASS$1);
                        this.setSelection(li, event);
                        if (li && li.classList.contains(LISTCLASS$1)) {
                            this.hide();
                            if (!Browser.isDevice) {
                                addClass([this.inputWrapper.container], FOCUS);
                            }
                        }
                    }
                }, {
                    key: 'closePopup',
                    value: function closePopup(delay, e) {
                        if (this.isPopupOpen() && this.popupWrapper) {
                            var args = {
                                popup: this.popupObj,
                                e: event || null,
                                cancel: false,
                                name: 'open'
                            };
                            this.trigger('close', args);
                            if (!args.cancel) {
                                var animModel = {
                                    name: 'FadeOut',
                                    duration: ANIMATIONDURATION,
                                    delay: delay ? delay : 0
                                };
                                this.popupObj.hide(new Animation(animModel));
                                removeClass([this.inputWrapper.container], [ICONANIMATION]);
                                attributes(this.inputElement, { 'aria-expanded': 'false' });
                                EventHandler.remove(document, 'mousedown touchstart', this.documentClickHandler);
                            }
                        }
                    }
                }, {
                    key: 'checkValueChange',
                    value: function checkValueChange(event, isNavigation) {
                        if (!this.strictMode && !this.validateState(this.valueWithMinutes)) {
                            this.initValue = this.valueWithMinutes = null;
                            this.setProperties({ value: this.compareFormatChange(this.inputElement.value) }, true);
                            this.prevValue = this.inputElement.value;
                            if (+this.prevDate !== +this.value) {
                                this.changeEvent(event);
                            }
                        } else {
                            if (!isNavigation) {
                                if (this.prevValue !== this.inputElement.value || isNullOrUndefined(this.checkDateValue(this.value))) {
                                    this.valueProcess(event, this.compareFormatChange(this.inputElement.value));
                                }
                            } else {
                                var value = this.getDateObject(new Date(this.timeCollections[this.activeIndex]));
                                if (+this.prevDate !== +value) {
                                    this.valueProcess(event, value);
                                }
                            }
                        }
                    }
                }, {
                    key: 'onMouseOver',
                    value: function onMouseOver(event) {
                        var currentLi = closest(event.target, '.' + LISTCLASS$1);
                        this.setHover(currentLi, HOVER$1);
                    }
                }, {
                    key: 'setHover',
                    value: function setHover(li, className) {
                        if (this.enabled && this.isValidLI(li) && !li.classList.contains(className)) {
                            this.removeHover(className);
                            addClass([li], className);
                            if (className === NAVIGATION) {
                                li.setAttribute('aria-selected', 'true');
                            }
                        }
                    }
                }, {
                    key: 'setSelection',
                    value: function setSelection(li, event) {
                        if (this.isValidLI(li) && !li.classList.contains(SELECTED$2)) {
                            this.checkValue(li.getAttribute('data-value'));
                            this.selectedElement = li;
                            this.activeIndex = Array.prototype.slice.call(this.liCollections).indexOf(li);
                            this.valueWithMinutes = new Date(this.timeCollections[this.activeIndex]);
                            addClass([this.selectedElement], SELECTED$2);
                            this.selectedElement.setAttribute('aria-selected', 'true');
                            this.checkValueChange(event, true);
                        }
                    }
                }, {
                    key: 'onMouseLeave',
                    value: function onMouseLeave() {
                        this.removeHover(HOVER$1);
                    }
                }, {
                    key: 'scrollHandler',
                    value: function scrollHandler() {
                        if (this.getModuleName() === 'timepicker' && Browser.isDevice) {
                            return;
                        } else {
                            this.hide();
                        }
                    }
                }, {
                    key: 'setMinMax',
                    value: function setMinMax(minVal, maxVal) {
                        if (isNullOrUndefined(this.checkDateValue(minVal))) {
                            this.initMin = this.getDateObject('12:00:00 AM');
                        }
                        if (isNullOrUndefined(this.checkDateValue(maxVal))) {
                            this.initMax = this.getDateObject('11:59:59 PM');
                        }
                    }
                }, {
                    key: 'validateMinMax',
                    value: function validateMinMax(dateVal, minVal, maxVal) {
                        var value = dateVal instanceof Date ? dateVal : this.getDateObject(dateVal);
                        if (!isNullOrUndefined(this.checkDateValue(value))) {
                            dateVal = this.strictOperation(this.initMin, this.initMax, dateVal, value);
                        } else if (+this.createDateObj(this.getFormattedValue(this.initMin)) > +this.createDateObj(this.getFormattedValue(this.initMax))) {
                            this.disableTimeIcon();
                        }
                        if (this.strictMode) {
                            dateVal = this.valueIsDisable(dateVal) ? dateVal : null;
                        }
                        this.checkErrorState(dateVal);
                        return dateVal;
                    }
                }, {
                    key: 'valueIsDisable',
                    value: function valueIsDisable(value) {
                        if (this.disableItemCollection.length > 0) {
                            if (this.disableItemCollection.length === this.timeCollections.length) {
                                return false;
                            }
                            var time = value instanceof Date ? this.objToString(value) : value;
                            for (var index = 0; index < this.disableItemCollection.length; index++) {
                                if (time === this.disableItemCollection[index]) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    }
                }, {
                    key: 'validateState',
                    value: function validateState(val) {
                        if (!this.strictMode) {
                            if (this.valueIsDisable(val)) {
                                var value = typeof val === 'string' ? this.setCurrentDate(this.getDateObject(val)) : this.setCurrentDate(this.getDateObject(val));
                                var maxValue = this.setCurrentDate(this.getDateObject(this.initMax));
                                var minValue = this.setCurrentDate(this.getDateObject(this.initMin));
                                if (!isNullOrUndefined(this.checkDateValue(value))) {
                                    if (+value > +maxValue || +value < +minValue) {
                                        return false;
                                    }
                                } else {
                                    if (+maxValue < +minValue || this.inputElement.value !== '') {
                                        return false;
                                    }
                                }
                            } else {
                                return false;
                            }
                        }
                        return true;
                    }
                }, {
                    key: 'strictOperation',
                    value: function strictOperation(minimum, maximum, dateVal, val) {
                        var maxValue = this.createDateObj(this.getFormattedValue(maximum));
                        var minValue = this.createDateObj(this.getFormattedValue(minimum));
                        var value = this.createDateObj(this.getFormattedValue(val));
                        if (this.strictMode) {
                            if (+minValue > +maxValue) {
                                this.disableTimeIcon();
                                this.initValue = this.getDateObject(maxValue);
                                Input.setValue(this.getValue(this.initValue), this.inputElement, this.floatLabelType, this.showClearButton);
                                return this.inputElement.value;
                            } else if (+minValue >= +value) {
                                return this.getDateObject(minValue);
                            } else if (+value >= +maxValue || +minValue === +maxValue) {
                                return this.getDateObject(maxValue);
                            }
                        } else {
                            if (+minValue > +maxValue) {
                                this.disableTimeIcon();
                                if (!isNaN(+this.createDateObj(dateVal))) {
                                    return dateVal;
                                }
                            }
                        }
                        return dateVal;
                    }
                }, {
                    key: 'bindEvents',
                    value: function bindEvents() {
                        EventHandler.add(this.inputWrapper.buttons[0], 'click', this.popupHandler, this);
                        EventHandler.add(this.inputElement, 'blur', this.inputBlurHandler, this);
                        EventHandler.add(this.inputElement, 'focus', this.inputFocusHandler, this);
                        EventHandler.add(this.inputElement, 'change', this.inputChangeHandler, this);
                        if (this.showClearButton) {
                            EventHandler.add(this.inputWrapper.clearButton, 'mousedown touchstart', this.clearHandler, this);
                        }
                        if (!Browser.isDevice) {
                            this.inputEvent = new KeyboardEvents(this.inputWrapper.container, {
                                keyAction: this.inputHandler.bind(this), keyConfigs: this.keyConfigure, eventName: 'keydown'
                            });
                            if (this.showClearButton) {
                                EventHandler.add(this.inputElement, 'mousedown touchstart', this.mouseDownHandler, this);
                            }
                        }
                    }
                }, {
                    key: 'inputChangeHandler',
                    value: function inputChangeHandler(e) {
                        e.stopPropagation();
                    }
                }, {
                    key: 'unBindEvents',
                    value: function unBindEvents() {
                        EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown touchstart', this.popupHandler);
                        EventHandler.remove(this.inputElement, 'blur', this.inputBlurHandler);
                        EventHandler.remove(this.inputElement, 'focus', this.inputFocusHandler);
                        EventHandler.remove(this.inputElement, 'change', this.inputChangeHandler);
                        if (this.inputEvent) {
                            this.inputEvent.destroy();
                        }
                        EventHandler.remove(this.inputElement, 'mousedown touchstart', this.mouseDownHandler);
                        EventHandler.remove(this.inputWrapper.clearButton, 'mousedown touchstart', this.clearHandler);
                    }
                }, {
                    key: 'bindClearEvent',
                    value: function bindClearEvent() {
                        if (this.showClearButton && this.inputWrapper.clearButton) {
                            EventHandler.add(this.inputWrapper.clearButton, 'mousedown touchstart', this.clearHandler, this);
                        }
                    }
                }, {
                    key: 'clearHandler',
                    value: function clearHandler(e) {
                        e.preventDefault();
                        this.clear(e);
                        if (this.popupWrapper) {
                            this.popupWrapper.scrollTop = 0;
                        }
                    }
                }, {
                    key: 'clear',
                    value: function clear(event) {
                        this.setProperties({ value: null }, true);
                        this.initValue = null;
                        this.resetState();
                        this.changeEvent(event);
                    }
                }, {
                    key: 'setZIndex',
                    value: function setZIndex() {
                        if (this.popupObj) {
                            this.popupObj.zIndex = this.zIndex;
                            this.popupObj.dataBind();
                        }
                    }
                }, {
                    key: 'checkAttributes',
                    value: function checkAttributes() {
                        var attributes$$1 = ['step', 'disabled', 'readonly', 'style', 'name', 'value', 'min', 'max', 'placeholder'];
                        var value = void 0;
                        var _iteratorNormalCompletion23 = true;
                        var _didIteratorError23 = false;
                        var _iteratorError23 = undefined;

                        try {
                            for (var _iterator23 = attributes$$1[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                                var prop = _step23.value;

                                if (!isNullOrUndefined(this.inputElement.getAttribute(prop))) {
                                    switch (prop) {
                                        case 'disabled':
                                            var enabled = isNullOrUndefined(this.inputElement.getAttribute(prop));
                                            this.setProperties({ enabled: enabled }, true);
                                            break;
                                        case 'readonly':
                                            var readonly = !isNullOrUndefined(this.inputElement.getAttribute(prop));
                                            this.setProperties({ readonly: readonly }, true);
                                            break;
                                        case 'style':
                                            this.inputStyle = this.inputElement.getAttribute(prop);
                                            break;
                                        case 'name':
                                            this.inputElement.setAttribute('name', this.inputElement.getAttribute(prop));
                                            break;
                                        case 'step':
                                            this.step = parseInt(this.inputElement.getAttribute(prop), 10);
                                            break;
                                        case 'placeholder':
                                            this.placeholder = this.inputElement.getAttribute(prop);
                                            break;
                                        case 'min':
                                            value = new Date(this.inputElement.getAttribute(prop));
                                            if (!isNullOrUndefined(this.checkDateValue(value))) {
                                                this.setProperties({ min: value }, true);
                                            }
                                            break;
                                        case 'max':
                                            value = new Date(this.inputElement.getAttribute(prop));
                                            if (!isNullOrUndefined(this.checkDateValue(value))) {
                                                this.setProperties({ max: value }, true);
                                            }
                                            break;
                                        case 'value':
                                            value = new Date(this.inputElement.getAttribute(prop));
                                            if (!isNullOrUndefined(this.checkDateValue(value))) {
                                                this.initValue = value;
                                                this.updateInput(false, this.initValue);
                                            }
                                            break;
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError23 = true;
                            _iteratorError23 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion23 && _iterator23.return) {
                                    _iterator23.return();
                                }
                            } finally {
                                if (_didIteratorError23) {
                                    throw _iteratorError23;
                                }
                            }
                        }
                    }
                }, {
                    key: 'setCurrentDate',
                    value: function setCurrentDate(value) {
                        if (isNullOrUndefined(this.checkDateValue(value))) {
                            return null;
                        }
                        return new Date(YEAR$1, MONTH$1, DAY, value.getHours(), value.getMinutes(), value.getSeconds());
                    }
                }, {
                    key: 'getTextFormat',
                    value: function getTextFormat() {
                        var time = 0;
                        if (this.cldrTimeFormat().split(' ')[0] === 'a' || this.cldrTimeFormat().indexOf('a') === 0) {
                            time = 1;
                        } else if (this.cldrTimeFormat().indexOf('a') < 0) {
                            var strArray = this.cldrTimeFormat().split(' ');
                            for (var i = 0; i < strArray.length; i++) {
                                if (strArray[i].toLowerCase().indexOf('h') >= 0) {
                                    time = i;
                                    break;
                                }
                            }
                        }
                        return time;
                    }
                }, {
                    key: 'updateValue',
                    value: function updateValue(value, event) {
                        var val = void 0;
                        if (this.isNullOrEmpty(value)) {
                            this.resetState();
                        } else {
                            val = this.checkValue(value);
                            if (this.strictMode) {
                                // this case set previous value to the text box when set invalid date
                                var inputVal = val === null && value.trim().length > 0 ? this.previousState(this.prevDate) : this.inputElement.value;
                                Input.setValue(inputVal, this.inputElement, this.floatLabelType, this.showClearButton);
                            }
                        }
                        this.checkValueChange(event, typeof value === 'string' ? false : true);
                    }
                }, {
                    key: 'previousState',
                    value: function previousState(date) {
                        var value = this.getDateObject(date);
                        for (var i = 0; i < this.timeCollections.length; i++) {
                            if (+value === this.timeCollections[i]) {
                                this.activeIndex = i;
                                this.selectedElement = this.liCollections[i];
                                this.valueWithMinutes = new Date(this.timeCollections[i]);
                                break;
                            }
                        }
                        return this.prevValue;
                    }
                }, {
                    key: 'resetState',
                    value: function resetState() {
                        this.removeSelection();
                        Input.setValue('', this.inputElement, this.floatLabelType, false);
                        this.valueWithMinutes = this.activeIndex = null;
                        if (!this.strictMode) {
                            this.checkErrorState(null);
                        }
                    }
                }, {
                    key: 'objToString',
                    value: function objToString(val) {
                        if (isNullOrUndefined(this.checkDateValue(val))) {
                            return null;
                        } else {
                            return this.globalize.formatDate(val, { format: this.cldrTimeFormat(), type: 'time' });
                        }
                    }
                }, {
                    key: 'checkValue',
                    value: function checkValue(value) {
                        if (!this.isNullOrEmpty(value)) {
                            var date = value instanceof Date ? value : this.getDateObject(value);
                            return this.validateValue(date, value);
                        }
                        this.resetState();
                        return this.valueWithMinutes = null;
                    }
                }, {
                    key: 'validateValue',
                    value: function validateValue(date, value) {
                        var time = void 0;
                        var val = this.validateMinMax(value, this.min, this.max);
                        var newval = this.createDateObj(val);
                        if (this.getFormattedValue(newval) !== this.getFormattedValue(this.value)) {
                            this.valueWithMinutes = isNullOrUndefined(newval) ? null : newval;
                            time = this.objToString(this.valueWithMinutes);
                        } else {
                            if (this.strictMode) {
                                //for strict mode case, when value not present within a range. Reset the nearest range value.
                                date = newval;
                            }
                            this.valueWithMinutes = this.checkDateValue(date);
                            time = this.objToString(this.valueWithMinutes);
                        }
                        if (!this.strictMode && isNullOrUndefined(time)) {
                            var _value = val.trim().length > 0 ? val : '';
                            Input.setValue(_value, this.inputElement, this.floatLabelType, this.showClearButton);
                        } else {
                            Input.setValue(time, this.inputElement, this.floatLabelType, this.showClearButton);
                        }
                        return time;
                    }
                }, {
                    key: 'findNextElement',
                    value: function findNextElement(event) {
                        var textVal = this.inputElement.value;
                        var value = isNullOrUndefined(this.valueWithMinutes) ? this.createDateObj(textVal) : this.getDateObject(this.valueWithMinutes);
                        var timeVal = null;
                        var count = this.liCollections.length;
                        if (!isNullOrUndefined(this.checkDateValue(value)) || !isNullOrUndefined(this.activeIndex)) {
                            if (event.action === 'home') {
                                var index = this.validLiElement(0);
                                timeVal = +this.createDateObj(new Date(this.timeCollections[index]));
                                this.activeIndex = index;
                            } else if (event.action === 'end') {
                                var _index = this.validLiElement(this.timeCollections.length - 1, true);
                                timeVal = +this.createDateObj(new Date(this.timeCollections[_index]));
                                this.activeIndex = _index;
                            } else {
                                if (event.action === 'down') {
                                    for (var i = 0; i < count; i++) {
                                        if (+value < this.timeCollections[i]) {
                                            var _index2 = this.validLiElement(i);
                                            timeVal = +this.createDateObj(new Date(this.timeCollections[_index2]));
                                            this.activeIndex = _index2;
                                            break;
                                        } else if (i === count - 1) {
                                            var _index3 = this.validLiElement(0);
                                            timeVal = +this.createDateObj(new Date(this.timeCollections[_index3]));
                                            this.activeIndex = _index3;
                                            break;
                                        }
                                    }
                                } else {
                                    for (var _i2 = count - 1; _i2 >= 0; _i2--) {
                                        if (+value > this.timeCollections[_i2]) {
                                            var _index4 = this.validLiElement(_i2, true);
                                            timeVal = +this.createDateObj(new Date(this.timeCollections[_index4]));
                                            this.activeIndex = _index4;
                                            break;
                                        } else if (_i2 === 0) {
                                            var _index5 = this.validLiElement(count - 1);
                                            timeVal = +this.createDateObj(new Date(this.timeCollections[_index5]));
                                            this.activeIndex = _index5;
                                            break;
                                        }
                                    }
                                }
                            }
                            this.selectedElement = this.liCollections[this.activeIndex];
                            this.elementValue(isNullOrUndefined(timeVal) ? null : new Date(timeVal));
                        } else {
                            var _index6 = this.validLiElement(0, event.action === 'down' ? false : true);
                            this.activeIndex = _index6;
                            this.selectedElement = this.liCollections[_index6];
                            this.elementValue(new Date(this.timeCollections[_index6]));
                        }
                    }
                }, {
                    key: 'elementValue',
                    value: function elementValue(value) {
                        if (!isNullOrUndefined(this.checkDateValue(value))) {
                            this.checkValue(value);
                        }
                    }
                }, {
                    key: 'validLiElement',
                    value: function validLiElement(index, backward) {
                        var elementIndex = null;
                        var items = isNullOrUndefined(this.popupWrapper) ? this.liCollections : this.popupWrapper.querySelectorAll('.' + LISTCLASS$1);
                        var isCheck = true;
                        if (items.length) {
                            if (backward) {
                                for (var i = index; i >= 0; i--) {
                                    if (!items[i].classList.contains(DISABLED$2)) {
                                        elementIndex = i;
                                        break;
                                    } else if (i === 0) {
                                        if (isCheck) {
                                            index = i = items.length;
                                            isCheck = false;
                                        }
                                    }
                                }
                            } else {
                                for (var _i3 = index; _i3 <= items.length - 1; _i3++) {
                                    if (!items[_i3].classList.contains(DISABLED$2)) {
                                        elementIndex = _i3;
                                        break;
                                    } else if (_i3 === items.length - 1) {
                                        if (isCheck) {
                                            index = _i3 = -1;
                                            isCheck = false;
                                        }
                                    }
                                }
                            }
                        }
                        return elementIndex;
                    }
                }, {
                    key: 'keyHandler',
                    value: function keyHandler(event) {
                        if (isNullOrUndefined(this.step) || this.step <= 0 || this.inputWrapper.buttons[0].classList.contains(DISABLED$2)) {
                            return;
                        }
                        var count = this.timeCollections.length;
                        if (isNullOrUndefined(this.getActiveElement()) || this.getActiveElement().length === 0) {
                            if (this.liCollections.length > 0) {
                                if (isNullOrUndefined(this.value) && isNullOrUndefined(this.activeIndex)) {
                                    var index = this.validLiElement(0, event.action === 'down' ? false : true);
                                    this.activeIndex = index;
                                    this.selectedElement = this.liCollections[index];
                                    this.elementValue(new Date(this.timeCollections[index]));
                                } else {
                                    this.findNextElement(event);
                                }
                            } else {
                                this.findNextElement(event);
                            }
                        } else {
                            var nextItem = void 0;
                            if (event.keyCode >= 37 && event.keyCode <= 40) {
                                var _index7 = event.keyCode === 40 || event.keyCode === 39 ? ++this.activeIndex : --this.activeIndex;
                                this.activeIndex = _index7 = this.activeIndex === count ? 0 : this.activeIndex;
                                this.activeIndex = _index7 = this.activeIndex < 0 ? count - 1 : this.activeIndex;
                                this.activeIndex = _index7 = this.validLiElement(this.activeIndex, event.keyCode === 40 || event.keyCode === 39 ? false : true);
                                nextItem = isNullOrUndefined(this.timeCollections[_index7]) ? this.timeCollections[0] : this.timeCollections[_index7];
                            } else if (event.action === 'home') {
                                var _index8 = this.validLiElement(0);
                                this.activeIndex = _index8;
                                nextItem = this.timeCollections[_index8];
                            } else if (event.action === 'end') {
                                var _index9 = this.validLiElement(count - 1, true);
                                this.activeIndex = _index9;
                                nextItem = this.timeCollections[_index9];
                            }
                            this.selectedElement = this.liCollections[this.activeIndex];
                            this.elementValue(new Date(nextItem));
                        }
                        this.isNavigate = true;
                        this.setHover(this.selectedElement, NAVIGATION);
                        this.setActiveDescendant();
                        this.selectInputText();
                        if (this.isPopupOpen() && this.selectedElement !== null && (!event || event.type !== 'click')) {
                            this.setScrollPosition();
                        }
                    }
                }, {
                    key: 'setPopupPosition',
                    value: function setPopupPosition() {
                        var offsetValue = void 0;
                        var popupHeight = this.getPopupHeight();
                        var element = this.getActiveElement();
                        var liHeight = this.liCollections[0].getBoundingClientRect().height;
                        var listHeight = popupHeight / HALFPOSITION;
                        var height = element.length === 0 ? this.liCollections[0].offsetTop : element[0].offsetTop;
                        var lastItemOffsetValue = this.liCollections[this.liCollections.length - 1].offsetTop;
                        var ulPadding = parseInt(getComputedStyle(this.listTag).paddingTop, 10);
                        if (lastItemOffsetValue - listHeight < height) {
                            var count = popupHeight / liHeight;
                            offsetValue = (count - (this.liCollections.length - this.activeIndex)) * liHeight - ulPadding - HALFPOSITION;
                        } else if (height + liHeight > listHeight) {
                            offsetValue = listHeight - liHeight / HALFPOSITION;
                        } else {
                            offsetValue = height;
                        }
                        offsetValue = offsetValue + HALFPOSITION + (liHeight - this.containerStyle.height) / HALFPOSITION;
                        return -offsetValue;
                    }
                }, {
                    key: 'getCultureTimeObject',
                    value: function getCultureTimeObject(ld, c) {
                        return getValue('main.' + c + '.dates.calendars.gregorian.timeFormats.short', ld);
                    }
                }, {
                    key: 'getCultureDateObject',
                    value: function getCultureDateObject(ld, c) {
                        return getValue('main.' + c + '.dates.calendars.gregorian.dateFormats.short', ld);
                    }
                }, {
                    key: 'wireListEvents',
                    value: function wireListEvents() {
                        EventHandler.add(this.listWrapper, 'click', this.onMouseClick, this);
                        if (!Browser.isDevice) {
                            EventHandler.add(this.listWrapper, 'mouseover', this.onMouseOver, this);
                            EventHandler.add(this.listWrapper, 'mouseout', this.onMouseLeave, this);
                        }
                    }
                }, {
                    key: 'unWireListEvents',
                    value: function unWireListEvents() {
                        if (this.listWrapper) {
                            EventHandler.remove(this.listWrapper, 'click', this.onMouseClick);
                            if (!Browser.isDevice) {
                                EventHandler.remove(this.listWrapper, 'mouseover', this.onMouseOver);
                                EventHandler.remove(this.listWrapper, 'mouseout', this.onMouseLeave);
                            }
                        }
                    }
                }, {
                    key: 'valueProcess',
                    value: function valueProcess(event, value) {
                        var result = isNullOrUndefined(this.checkDateValue(value)) ? null : value;
                        if (+this.prevDate !== +result) {
                            this.initValue = result;
                            this.changeEvent(event);
                        }
                    }
                }, {
                    key: 'changeEvent',
                    value: function changeEvent(e) {
                        this.addSelection();
                        this.updateInput(true, this.initValue);
                        var eventArgs = {
                            e: e || null,
                            value: this.value,
                            text: this.inputElement.value,
                            isInteracted: !isNullOrUndefined(e),
                            element: this.element
                        };
                        eventArgs.value = this.valueWithMinutes || this.getDateObject(this.inputElement.value);
                        this.prevDate = this.valueWithMinutes || this.getDateObject(this.inputElement.value);
                        this.trigger('change', eventArgs);
                    }
                }, {
                    key: 'updateInput',
                    value: function updateInput(isUpdate, date) {
                        if (isUpdate) {
                            this.prevValue = this.getValue(date);
                        }
                        this.prevDate = this.valueWithMinutes = date;
                        this.setProperties({ value: date }, true);
                    }
                }, {
                    key: 'setActiveDescendant',
                    value: function setActiveDescendant() {
                        if (!isNullOrUndefined(this.selectedElement)) {
                            attributes(this.inputElement, { 'aria-activedescendant': this.selectedElement.getAttribute('id') });
                        } else {
                            attributes(this.inputElement, { 'aria-activedescendant': 'null' });
                        }
                    }
                }, {
                    key: 'removeSelection',
                    value: function removeSelection() {
                        this.removeHover(HOVER$1);
                        if (!isNullOrUndefined(this.popupWrapper)) {
                            var items = this.popupWrapper.querySelectorAll('.' + SELECTED$2);
                            if (items.length) {
                                removeClass(items, SELECTED$2);
                                items[0].removeAttribute('aria-selected');
                            }
                        }
                    }
                }, {
                    key: 'removeHover',
                    value: function removeHover(className) {
                        var hoveredItem = this.getHoverItem(className);
                        if (hoveredItem && hoveredItem.length) {
                            removeClass(hoveredItem, className);
                            if (className === NAVIGATION) {
                                hoveredItem[0].removeAttribute('aria-selected');
                            }
                        }
                    }
                }, {
                    key: 'getHoverItem',
                    value: function getHoverItem(className) {
                        var hoveredItem = void 0;
                        if (!isNullOrUndefined(this.popupWrapper)) {
                            hoveredItem = this.popupWrapper.querySelectorAll('.' + className);
                        }
                        return hoveredItem;
                    }
                }, {
                    key: 'setActiveClass',
                    value: function setActiveClass() {
                        if (!isNullOrUndefined(this.popupWrapper)) {
                            var items = this.popupWrapper.querySelectorAll('.' + LISTCLASS$1);
                            if (items.length) {
                                for (var i = 0; i < items.length; i++) {
                                    if (this.timeCollections[i] === +this.getDateObject(this.valueWithMinutes)) {
                                        items[i].setAttribute('aria-selected', 'true');
                                        this.selectedElement = items[i];
                                        this.activeIndex = i;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'addSelection',
                    value: function addSelection() {
                        this.selectedElement = null;
                        this.removeSelection();
                        this.setActiveClass();
                        if (!isNullOrUndefined(this.selectedElement)) {
                            addClass([this.selectedElement], SELECTED$2);
                            this.selectedElement.setAttribute('aria-selected', 'true');
                        }
                    }
                }, {
                    key: 'isValidLI',
                    value: function isValidLI(li) {
                        return li && li.classList.contains(LISTCLASS$1) && !li.classList.contains(DISABLED$2);
                    }
                }, {
                    key: 'createDateObj',
                    value: function createDateObj(val) {
                        var today = this.globalize.formatDate(new Date(), { skeleton: 'short', type: 'date' });
                        var value = null;
                        if (typeof val === 'string') {
                            if (val.toUpperCase().indexOf('AM') > -1 || val.toUpperCase().indexOf('PM') > -1) {
                                today = this.defaultCulture.formatDate(new Date(), { skeleton: 'short', type: 'date' });
                                value = isNaN(+new Date(today + ' ' + val)) ? null : new Date(new Date(today + ' ' + val).setMilliseconds(0));
                                if (isNullOrUndefined(value)) {
                                    value = this.TimeParse(today, val);
                                }
                            } else {
                                value = this.TimeParse(today, val);
                            }
                        } else if (val instanceof Date) {
                            value = val;
                        }
                        return value;
                    }
                }, {
                    key: 'TimeParse',
                    value: function TimeParse(today, val) {
                        var value = void 0;
                        value = this.globalize.parseDate(today + ' ' + val, {
                            format: this.cldrDateFormat() + ' ' + this.cldrTimeFormat(), type: 'datetime'
                        });
                        value = isNullOrUndefined(value) ? this.globalize.parseDate(today + ' ' + val, {
                            format: this.cldrDateFormat() + ' ' + this.dateToNumeric(), type: 'datetime'
                        }) : value;
                        value = isNullOrUndefined(value) ? value : new Date(value.setMilliseconds(0));
                        return value;
                    }
                }, {
                    key: 'createListItems',
                    value: function createListItems() {
                        var _this12 = this;

                        this.listWrapper = createElement('div', { className: CONTENT$2, attrs: { 'tabindex': '0' } });
                        var start = void 0;
                        var end = void 0;
                        var interval = this.step * 60000;
                        var listItems = [];
                        this.timeCollections = [];
                        this.disableItemCollection = [];
                        start = +this.getDateObject(this.initMin).setMilliseconds(0);
                        end = +this.getDateObject(this.initMax).setMilliseconds(0);
                        while (end >= start) {
                            this.timeCollections.push(start);
                            listItems.push(this.globalize.formatDate(new Date(start), { format: this.cldrTimeFormat(), type: 'time' }));
                            start += interval;
                        }
                        var listBaseOptions = {
                            itemCreated: function itemCreated(args) {
                                var eventArgs = {
                                    element: args.item,
                                    text: args.text, value: _this12.getDateObject(args.text), isDisabled: false
                                };
                                _this12.trigger('itemRender', eventArgs);
                                if (eventArgs.isDisabled) {
                                    eventArgs.element.classList.add(DISABLED$2);
                                }
                                if (eventArgs.element.classList.contains(DISABLED$2)) {
                                    _this12.disableItemCollection.push(eventArgs.element.getAttribute('data-value'));
                                }
                            }
                        };
                        this.listTag = ListBase.createList(listItems, listBaseOptions, true);
                        attributes(this.listTag, { 'role': 'listbox', 'aria-hidden': 'false', 'id': this.element.id + '_options' });
                        append([this.listTag], this.listWrapper);
                    }
                }, {
                    key: 'documentClickHandler',
                    value: function documentClickHandler(event) {
                        if (!Browser.isDevice) {
                            event.preventDefault();
                        }
                        var target = event.target;
                        if (!closest(target, '#' + this.popupObj.element.id) && target !== this.inputElement && target !== (this.inputWrapper && this.inputWrapper.buttons[0]) && target !== (this.inputWrapper && this.inputWrapper.clearButton) && target !== (this.inputWrapper && this.inputWrapper.container)) {
                            if (this.isPopupOpen()) {
                                this.hide();
                            }
                        } else if (target !== this.inputElement) {
                            if (!Browser.isDevice) {
                                this.isPreventBlur = (Browser.isIE || Browser.info.name === 'edge') && document.activeElement === this.inputElement;
                                event.preventDefault();
                            }
                        }
                    }
                }, {
                    key: 'setEnableRtl',
                    value: function setEnableRtl() {
                        Input.setEnableRtl(this.enableRtl, [this.inputWrapper.container]);
                        if (this.popupObj) {
                            this.popupObj.enableRtl = this.enableRtl;
                            this.popupObj.dataBind();
                        }
                    }
                }, {
                    key: 'setEnable',
                    value: function setEnable() {
                        Input.setEnabled(this.enabled, this.inputElement, this.floatLabelType);
                        if (this.enabled) {
                            removeClass([this.inputWrapper.container], DISABLED$2);
                            attributes(this.inputElement, { 'aria-disabled': 'false' });
                        } else {
                            this.hide();
                            addClass([this.inputWrapper.container], DISABLED$2);
                            attributes(this.inputElement, { 'aria-disabled': 'true' });
                        }
                    }
                }, {
                    key: 'getProperty',
                    value: function getProperty(date, val) {
                        if (val === 'min') {
                            this.initMin = this.checkDateValue(new Date('' + date.min));
                            this.setProperties({ min: this.initMin }, true);
                        } else {
                            this.initMax = this.checkDateValue(new Date('' + date.max));
                            this.setProperties({ max: this.initMax }, true);
                        }
                        if (this.inputElement.value === '') {
                            this.validateMinMax(this.value, this.min, this.max);
                        } else {
                            this.checkValue(this.inputElement.value);
                        }
                        this.checkValueChange(null, false);
                    }
                }, {
                    key: 'inputBlurHandler',
                    value: function inputBlurHandler(e) {
                        // IE popup closing issue when click over the scrollbar
                        if (this.isPreventBlur && this.isPopupOpen()) {
                            this.inputElement.focus();
                            return;
                        }
                        this.closePopup(0, e);
                        removeClass([this.inputWrapper.container], [FOCUS]);
                        var blurArguments = {
                            model: this
                        };
                        this.trigger('blur', blurArguments);
                        if (this.getText() !== this.inputElement.value) {
                            this.updateValue(this.inputElement.value, e);
                        } else if (this.inputElement.value.trim().length === 0) {
                            this.resetState();
                        }
                        this.cursorDetails = null;
                        this.isNavigate = false;
                    }
                }, {
                    key: 'focusOut',
                    value: function focusOut() {
                        if (document.activeElement === this.inputElement) {
                            this.inputElement.blur();
                            var blurArguments = {
                                model: this
                            };
                            this.trigger('blur', blurArguments);
                        }
                    }
                }, {
                    key: 'isPopupOpen',
                    value: function isPopupOpen() {
                        if (this.popupWrapper && this.popupWrapper.classList.contains('' + ROOT$3)) {
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: 'inputFocusHandler',
                    value: function inputFocusHandler() {
                        var focusArguments = {
                            model: this
                        };
                        if (!this.readonly && !Browser.isDevice) {
                            this.selectInputText();
                        }
                        this.trigger('focus', focusArguments);
                    }
                }, {
                    key: 'focusIn',
                    value: function focusIn() {
                        if (document.activeElement !== this.inputElement && this.enabled) {
                            this.inputElement.focus();
                            var focusArguments = {
                                model: this
                            };
                            this.trigger('focus', focusArguments);
                        }
                    }
                }, {
                    key: 'hide',
                    value: function hide() {
                        this.closePopup(100, null);
                    }
                }, {
                    key: 'show',
                    value: function show(event) {
                        if (this.enabled && this.readonly || !this.enabled || this.popupWrapper) {
                            return;
                        } else {
                            var args = {
                                popup: this.popupObj || null,
                                cancel: false,
                                e: event || null,
                                name: 'open'
                            };
                            this.trigger('open', args);
                            if (!args.cancel && !this.isPopupOpen() && !this.inputWrapper.buttons[0].classList.contains(DISABLED$2)) {
                                this.popupCreation();
                                if (!args.cancel) {
                                    var openAnimation = {
                                        name: 'FadeIn',
                                        duration: ANIMATIONDURATION
                                    };
                                    this.popupObj.refreshPosition(this.inputElement);
                                    this.popupObj.show(new Animation(openAnimation));
                                    this.setActiveDescendant();
                                    attributes(this.inputElement, { 'aria-expanded': 'true' });
                                }
                                EventHandler.add(document, 'mousedown touchstart', this.documentClickHandler, this);
                            }
                        }
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        var keyEntity = ['value'];
                        return this.addOnPersist(keyEntity);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'timepicker';
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion24 = true;
                        var _didIteratorError24 = false;
                        var _iteratorError24 = undefined;

                        try {
                            for (var _iterator24 = Object.keys(newProp)[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                                var prop = _step24.value;

                                switch (prop) {
                                    case 'placeholder':
                                        Input.setPlaceholder(newProp.placeholder, this.inputElement);
                                        this.inputElement.setAttribute('aria-placeholder', newProp.placeholder);
                                        break;
                                    case 'readonly':
                                        Input.setReadonly(this.readonly, this.inputElement, this.floatLabelType);
                                        if (this.readonly) {
                                            this.hide();
                                        }
                                        break;
                                    case 'cssClass':
                                        addClass([this.inputWrapper.container], [newProp.cssClass]);
                                        if (this.popupWrapper) {
                                            addClass([this.popupWrapper], [newProp.cssClass]);
                                        }
                                        this.setProperties({ cssClass: newProp.cssClass }, true);
                                        break;
                                    case 'enabled':
                                        this.setProperties({ enabled: newProp.enabled }, true);
                                        this.setEnable();
                                        break;
                                    case 'enableRtl':
                                        this.setProperties({ enableRtl: newProp.enableRtl }, true);
                                        this.setEnableRtl();
                                        break;
                                    case 'zIndex':
                                        this.setProperties({ zIndex: newProp.zIndex }, true);
                                        this.setZIndex();
                                        break;
                                    case 'min':
                                    case 'max':
                                        this.getProperty(newProp, prop);
                                        break;
                                    case 'showClearButton':
                                        Input.setClearButton(this.showClearButton, this.inputElement, this.inputWrapper);
                                        this.bindClearEvent();
                                        break;
                                    case 'locale':
                                        this.setProperties({ locale: newProp.locale }, true);
                                        this.globalize = new Internationalization(this.locale);
                                        this.l10n.setLocale(this.locale);
                                        this.updatePlaceHolder();
                                        this.setValue(this.value);
                                        break;
                                    case 'width':
                                        setStyleAttribute(this.inputWrapper.container, { 'width': this.setWidth(newProp.width) });
                                        this.containerStyle = this.inputWrapper.container.getBoundingClientRect();
                                        break;
                                    case 'format':
                                        this.setProperties({ format: newProp.format }, true);
                                        this.setValue(this.value);
                                        break;
                                    case 'value':
                                        if (typeof newProp.value === 'string') {
                                            this.setProperties({ value: this.checkDateValue(new Date(newProp.value)) }, true);
                                            newProp.value = this.value;
                                        } else {
                                            newProp.value = this.checkDateValue(new Date('' + newProp.value));
                                        }
                                        this.initValue = newProp.value;
                                        newProp.value = this.compareFormatChange(this.checkValue(newProp.value));
                                        this.checkValueChange(null, false);
                                        break;
                                    case 'floatLabelType':
                                        this.floatLabelType = newProp.floatLabelType;
                                        Input.removeFloating(this.inputWrapper);
                                        Input.addFloating(this.inputElement, this.floatLabelType, this.placeholder);
                                        break;
                                    case 'strictMode':
                                        if (newProp.strictMode) {
                                            this.checkErrorState(null);
                                        }
                                        this.setProperties({ strictMode: newProp.strictMode }, true);
                                        this.checkValue(this.inputElement.value);
                                        this.checkValueChange(null, false);
                                        break;
                                    case 'scrollTo':
                                        if (this.checkDateValue(new Date('' + newProp.scrollTo))) {
                                            if (this.popupWrapper) {
                                                this.setScrollTo();
                                            }
                                            this.setProperties({ scrollTo: newProp.scrollTo }, true);
                                        } else {
                                            this.setProperties({ scrollTo: null }, true);
                                        }
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError24 = true;
                            _iteratorError24 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion24 && _iterator24.return) {
                                    _iterator24.return();
                                }
                            } finally {
                                if (_didIteratorError24) {
                                    throw _iteratorError24;
                                }
                            }
                        }
                    }
                }]);

                return TimePicker;
            }(Component));

            __decorate$3([Property(null)], TimePicker.prototype, "width", void 0);
            __decorate$3([Property(null)], TimePicker.prototype, "cssClass", void 0);
            __decorate$3([Property(false)], TimePicker.prototype, "strictMode", void 0);
            __decorate$3([Property(null)], TimePicker.prototype, "format", void 0);
            __decorate$3([Property(true)], TimePicker.prototype, "enabled", void 0);
            __decorate$3([Property(false)], TimePicker.prototype, "readonly", void 0);
            __decorate$3([Property('Never')], TimePicker.prototype, "floatLabelType", void 0);
            __decorate$3([Property(null)], TimePicker.prototype, "placeholder", void 0);
            __decorate$3([Property(1000)], TimePicker.prototype, "zIndex", void 0);
            __decorate$3([Property(false)], TimePicker.prototype, "enablePersistence", void 0);
            __decorate$3([Property(true)], TimePicker.prototype, "showClearButton", void 0);
            __decorate$3([Property(30)], TimePicker.prototype, "step", void 0);
            __decorate$3([Property(null)], TimePicker.prototype, "scrollTo", void 0);
            __decorate$3([Property(null)], TimePicker.prototype, "value", void 0);
            __decorate$3([Property(null)], TimePicker.prototype, "min", void 0);
            __decorate$3([Property(null)], TimePicker.prototype, "max", void 0);
            __decorate$3([Property(false)], TimePicker.prototype, "enableRtl", void 0);
            __decorate$3([Event()], TimePicker.prototype, "change", void 0);
            __decorate$3([Event()], TimePicker.prototype, "created", void 0);
            __decorate$3([Event()], TimePicker.prototype, "destroyed", void 0);
            __decorate$3([Event()], TimePicker.prototype, "open", void 0);
            __decorate$3([Event()], TimePicker.prototype, "itemRender", void 0);
            __decorate$3([Event()], TimePicker.prototype, "close", void 0);
            __decorate$3([Event()], TimePicker.prototype, "blur", void 0);
            __decorate$3([Event()], TimePicker.prototype, "focus", void 0);
            _export('TimePicker', TimePicker = __decorate$3([NotifyPropertyChanges], TimePicker));

            /**
             * TimePicker modules
             */

            __decorate$4 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            DATEWRAPPER$1 = 'e-date-wrapper';
            DATEPICKERROOT = 'e-datepicker';
            DATETIMEWRAPPER = 'e-datetime-wrapper';
            DAY$1 = new Date().getDate();
            MONTH$2 = new Date().getMonth();
            YEAR$2 = new Date().getFullYear();
            HOUR = new Date().getHours();
            MINUTE = new Date().getMinutes();
            SECOND = new Date().getSeconds();
            MILLISECOND = new Date().getMilliseconds();
            ROOT$4 = 'e-datetimepicker';
            DATETIMEPOPUPWRAPPER = 'e-datetimepopup-wrapper';
            INPUTWRAPPER$1 = 'e-input-group-icon';
            POPUP$3 = 'e-popup';
            TIMEICON = 'e-time-icon';
            INPUTFOCUS$2 = 'e-input-focus';
            POPUPDIMENSION$1 = '250px';
            ICONANIMATION$1 = 'e-icon-anim';
            DISABLED$3 = 'e-disabled';
            ERROR$3 = 'e-error';
            CONTENT$3 = 'e-content';
            NAVIGATION$1 = 'e-navigation';
            ACTIVE$2 = 'e-active';
            HOVER$2 = 'e-hover';
            ICONS$1 = 'e-icons';
            HALFPOSITION$1 = 2;
            LISTCLASS$2 = cssClass.li;
            ANIMATIONDURATION$1 = 100;
            OVERFLOW$2 = 'e-time-overflow';

            _export('DateTimePicker', DateTimePicker = function (_DatePicker) {
                _inherits(DateTimePicker, _DatePicker);

                /**
                 * Constructor for creating the widget
                 */
                function DateTimePicker(options, element) {
                    _classCallCheck(this, DateTimePicker);

                    var _this13 = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, options, element));

                    _this13.valueWithMinutes = null;
                    _this13.previousDateTime = null;
                    return _this13;
                }

                _createClass(DateTimePicker, [{
                    key: 'focusHandler',
                    value: function focusHandler() {
                        addClass([this.inputWrapper.container], INPUTFOCUS$2);
                    }
                }, {
                    key: 'focusIn',
                    value: function focusIn() {
                        _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'focusIn', this).call(this);
                    }
                }, {
                    key: 'focusOut',
                    value: function focusOut() {
                        if (document.activeElement === this.inputElement) {
                            this.inputElement.blur();
                            removeClass([this.inputWrapper.container], [INPUTFOCUS$2]);
                        }
                    }
                }, {
                    key: 'blurHandler',
                    value: function blurHandler() {
                        // IE popup closing issue when click over the scrollbar
                        if (this.isTimePopupOpen() && this.isPreventBlur) {
                            this.inputElement.focus();
                            return;
                        }
                        removeClass([this.inputWrapper.container], INPUTFOCUS$2);
                        var blurArguments = {
                            model: this
                        };
                        this.trigger('blur', blurArguments);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this.popupObject && this.popupObject.element.classList.contains(POPUP$3)) {
                            this.dateTimeWrapper = undefined;
                            this.liCollections = this.timeCollections = [];
                            if (!isNullOrUndefined(this.rippleFn)) {
                                this.rippleFn();
                            }
                        }
                        var ariaAttribute = {
                            'aria-live': 'assertive', 'aria-atomic': 'true', 'aria-invalid': 'false',
                            'aria-haspopup': 'true', 'aria-activedescendant': 'null',
                            'autocorrect': 'off', 'autocapitalize': 'off', 'spellcheck': 'false',
                            'aria-owns': this.element.id + '_options', 'aria-expanded': 'false', 'role': 'combobox', 'autocomplete': 'off'
                        };
                        if (this.inputElement) {
                            Input.removeAttributes(ariaAttribute, this.inputElement);
                            this.inputElement.removeAttribute('aria-placeholder');
                        }
                        if (this.isCalendar()) {
                            if (this.popupWrapper) {
                                detach(this.popupWrapper);
                            }
                            this.popupObject = this.popupWrapper = null;
                            this.keyboardHandler.destroy();
                        }
                        this.unBindInputEvents();
                        _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.timekeyConfigure = {
                            enter: 'enter',
                            escape: 'escape',
                            end: 'end',
                            tab: 'tab',
                            home: 'home',
                            down: 'downarrow',
                            up: 'uparrow',
                            left: 'leftarrow',
                            right: 'rightarrow',
                            open: 'alt+downarrow',
                            close: 'alt+uparrow'
                        };
                        this.valueWithMinutes = null;
                        this.previousDateTime = null;
                        this.isPreventBlur = false;
                        this.cloneElement = this.element.cloneNode(true);
                        this.dateTimeFormat = this.cldrDateTimeFormat();
                        this.initValue = this.value;
                        this.checkAttributes();
                        var localeText = { placeholder: this.placeholder };
                        this.l10n = new L10n('datetimepicker', localeText, this.locale);
                        this.setProperties({ placeholder: this.placeholder || this.l10n.getConstant('placeholder') }, true);
                        _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'render', this).call(this);
                        this.createInputElement();
                        this.bindInputEvents();
                        this.setValue();
                    }
                }, {
                    key: 'setValue',
                    value: function setValue() {
                        this.initValue = this.validateMinMaxRange(this.value);
                        if (!this.strictMode && this.isDateObject(this.initValue)) {
                            var value = this.validateMinMaxRange(this.initValue);
                            Input.setValue(this.getFormattedValue(value), this.inputElement, this.floatLabelType, this.showClearButton);
                            this.setProperties({ value: value }, true);
                        } else {
                            if (isNullOrUndefined(this.value)) {
                                this.initValue = null;
                                this.setProperties({ value: null }, true);
                            }
                        }
                        this.valueWithMinutes = this.value;
                        _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'updateInput', this).call(this);
                    }
                }, {
                    key: 'validateMinMaxRange',
                    value: function validateMinMaxRange(value) {
                        var result = value;
                        if (this.isDateObject(value)) {
                            result = this.validateValue(value);
                        } else {
                            if (+this.min > +this.max) {
                                this.disablePopupButton(true);
                            }
                        }
                        this.checkValidState(result);
                        return result;
                    }
                }, {
                    key: 'checkValidState',
                    value: function checkValidState(value) {
                        this.isValidState = true;
                        if (!this.strictMode) {
                            if (+value > +this.max || +value < +this.min) {
                                this.isValidState = false;
                            }
                        }
                        this.checkErrorState();
                    }
                }, {
                    key: 'checkErrorState',
                    value: function checkErrorState() {
                        if (this.isValidState) {
                            removeClass([this.inputWrapper.container], ERROR$3);
                        } else {
                            addClass([this.inputWrapper.container], ERROR$3);
                        }
                        attributes(this.inputElement, { 'aria-invalid': this.isValidState ? 'false' : 'true' });
                    }
                }, {
                    key: 'validateValue',
                    value: function validateValue(value) {
                        var dateVal = value;
                        if (this.strictMode) {
                            if (+this.min > +this.max) {
                                this.disablePopupButton(true);
                                dateVal = this.max;
                            } else if (+value < +this.min) {
                                dateVal = this.min;
                            } else if (+value > +this.max) {
                                dateVal = this.max;
                            }
                        } else {
                            if (+this.min > +this.max) {
                                this.disablePopupButton(true);
                                dateVal = value;
                            }
                        }
                        return dateVal;
                    }
                }, {
                    key: 'disablePopupButton',
                    value: function disablePopupButton(isDisable) {
                        if (isDisable) {
                            addClass([this.inputWrapper.buttons[0], this.timeIcon], DISABLED$3);
                            this.hide();
                        } else {
                            removeClass([this.inputWrapper.buttons[0], this.timeIcon], DISABLED$3);
                        }
                    }
                }, {
                    key: 'getFormattedValue',
                    value: function getFormattedValue(value) {
                        if (!isNullOrUndefined(value)) {
                            var dateOptions = { format: this.cldrDateTimeFormat(), type: 'dateTime', skeleton: 'yMd' };
                            return this.globalize.formatDate(value, dateOptions);
                        } else {
                            return null;
                        }
                    }
                }, {
                    key: 'isDateObject',
                    value: function isDateObject(value) {
                        return !isNullOrUndefined(value) && !isNaN(+value) ? true : false;
                    }
                }, {
                    key: 'createInputElement',
                    value: function createInputElement() {
                        removeClass([this.inputElement], DATEPICKERROOT);
                        removeClass([this.inputWrapper.container], DATEWRAPPER$1);
                        addClass([this.inputWrapper.container], DATETIMEWRAPPER);
                        addClass([this.inputElement], ROOT$4);
                        this.renderTimeIcon();
                    }
                }, {
                    key: 'renderTimeIcon',
                    value: function renderTimeIcon() {
                        this.timeIcon = Input.appendSpan(INPUTWRAPPER$1 + ' ' + TIMEICON + ' ' + ICONS$1, this.inputWrapper.container);
                    }
                }, {
                    key: 'bindInputEvents',
                    value: function bindInputEvents() {
                        EventHandler.add(this.timeIcon, 'mousedown touchstart', this.timeHandler, this);
                        EventHandler.add(this.inputWrapper.buttons[0], 'mousedown touchstart', this.dateHandler, this);
                        EventHandler.add(this.inputElement, 'blur', this.blurHandler, this);
                        EventHandler.add(this.inputElement, 'focus', this.focusHandler, this);
                        this.keyboardHandler = new KeyboardEvents(this.inputElement, {
                            eventName: 'keydown',
                            keyAction: this.inputKeyAction.bind(this),
                            keyConfigs: this.keyConfigs
                        });
                    }
                }, {
                    key: 'unBindInputEvents',
                    value: function unBindInputEvents() {
                        EventHandler.remove(this.timeIcon, 'mousedown touchstart', this.timeHandler);
                        EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown touchstart', this.dateHandler);
                        if (this.inputElement) {
                            EventHandler.remove(this.inputElement, 'blur', this.blurHandler);
                            EventHandler.remove(this.inputElement, 'focus', this.focusHandler);
                        }
                        if (this.keyboardHandler) {
                            this.keyboardHandler.destroy();
                        }
                    }
                }, {
                    key: 'cldrTimeFormat',
                    value: function cldrTimeFormat() {
                        var cldrTime = void 0;
                        if (this.isNullOrEmpty(this.timeFormat)) {
                            if (this.locale === 'en' || this.locale === 'en-US') {
                                cldrTime = getValue('timeFormats.short', getDefaultDateObject());
                            } else {
                                cldrTime = this.getCultureTimeObject(cldrData, '' + this.locale);
                            }
                        } else {
                            cldrTime = this.timeFormat;
                        }
                        return cldrTime;
                    }
                }, {
                    key: 'cldrDateTimeFormat',
                    value: function cldrDateTimeFormat() {
                        var cldrTime = void 0;
                        var culture = new Internationalization(this.locale);
                        var dateFormat = culture.getDatePattern({ skeleton: 'yMd' });
                        if (this.isNullOrEmpty(this.format)) {
                            cldrTime = dateFormat + ' ' + this.getCldrFormat('time');
                        } else {
                            cldrTime = this.format;
                        }
                        return cldrTime;
                    }
                }, {
                    key: 'getCldrFormat',
                    value: function getCldrFormat(type) {
                        var cldrDateTime = void 0;
                        if (this.locale === 'en' || this.locale === 'en-US') {
                            cldrDateTime = getValue('timeFormats.short', getDefaultDateObject());
                        } else {
                            cldrDateTime = this.getCultureTimeObject(cldrData, '' + this.locale);
                        }
                        return cldrDateTime;
                    }
                }, {
                    key: 'isNullOrEmpty',
                    value: function isNullOrEmpty(value) {
                        if (isNullOrUndefined(value) || typeof value === 'string' && value.trim() === '') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }, {
                    key: 'getCultureTimeObject',
                    value: function getCultureTimeObject(ld, c) {
                        return getValue('main.' + '' + this.locale + '.dates.calendars.gregorian.timeFormats.short', ld);
                    }
                }, {
                    key: 'timeHandler',
                    value: function timeHandler(e) {
                        if (e.currentTarget === this.timeIcon) {
                            e.preventDefault();
                        }
                        if (this.enabled && !this.readonly) {
                            if (this.isDatePopupOpen()) {
                                _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'hide', this).call(this, e);
                            }
                            if (this.isTimePopupOpen()) {
                                this.closePopup(e);
                            } else {
                                if (!Browser.isDevice) {
                                    this.inputElement.focus();
                                }
                                this.popupCreation('time', e);
                            }
                        }
                        addClass([this.inputWrapper.container], [INPUTFOCUS$2]);
                    }
                }, {
                    key: 'dateHandler',
                    value: function dateHandler(e) {
                        if (e.currentTarget === this.inputWrapper.buttons[0]) {
                            e.preventDefault();
                        }
                        if (this.enabled && !this.readonly) {
                            if (this.isTimePopupOpen()) {
                                this.closePopup(e);
                            }
                            if (!isNullOrUndefined(this.popupWrapper)) {
                                this.popupCreation('date', e);
                            }
                        }
                    }
                }, {
                    key: 'show',
                    value: function show(type, e) {
                        if (this.enabled && this.readonly || !this.enabled) {
                            return;
                        } else {
                            if (type === 'time' && !this.dateTimeWrapper) {
                                if (this.isDatePopupOpen()) {
                                    this.hide(e);
                                }
                                this.popupCreation('time', e);
                            } else if (!this.popupObj) {
                                if (this.isTimePopupOpen()) {
                                    this.hide(e);
                                }
                                _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'show', this).call(this);
                                this.popupCreation('date', e);
                            }
                        }
                    }
                }, {
                    key: 'toggle',
                    value: function toggle(e) {
                        if (this.isDatePopupOpen()) {
                            _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'hide', this).call(this, e);
                            this.show('time', null);
                        } else if (this.isTimePopupOpen()) {
                            this.hide(e);
                            _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'show', this).call(this, null, e);
                            this.popupCreation('date', null);
                        } else {
                            this.show(null, e);
                        }
                    }
                }, {
                    key: 'listCreation',
                    value: function listCreation() {
                        var value = isNullOrUndefined(this.value) ? this.inputElement.value !== '' ? this.globalize.parseDate(this.inputElement.value, { format: this.cldrDateTimeFormat(), type: 'datetime' }) : new Date() : this.value;
                        this.valueWithMinutes = value;
                        this.listWrapper = createElement('div', { className: CONTENT$3, attrs: { 'tabindex': '0' } });
                        var min = this.startTime(value);
                        var max = this.endTime(value);
                        var listDetails = TimePickerBase.createListItems(min, max, this.globalize, this.cldrTimeFormat(), this.step);
                        this.timeCollections = listDetails.collection;
                        this.listTag = listDetails.list;
                        attributes(this.listTag, { 'role': 'listbox', 'aria-hidden': 'false', 'id': this.element.id + '_options' });
                        append([listDetails.list], this.listWrapper);
                        this.wireTimeListEvents();
                        var rippleModel = { duration: 300, selector: '.' + LISTCLASS$2 };
                        this.rippleFn = rippleEffect(this.listWrapper, rippleModel);
                        this.liCollections = this.listWrapper.querySelectorAll('.' + LISTCLASS$2);
                    }
                }, {
                    key: 'popupCreation',
                    value: function popupCreation(type, e) {
                        if (type === 'date') {
                            if (!this.readonly && this.popupWrapper) {
                                addClass([this.popupWrapper], DATETIMEPOPUPWRAPPER);
                                attributes(this.popupWrapper, { 'id': this.element.id + '_datepopup' });
                            }
                        } else {
                            if (!this.readonly) {
                                this.dateTimeWrapper = createElement('div', {
                                    className: ROOT$4 + ' ' + POPUP$3,
                                    attrs: { 'id': this.element.id + '_timepopup', 'style': 'visibility:hidden ; display:block' }
                                });
                                if (!isNullOrUndefined(this.cssClass)) {
                                    this.dateTimeWrapper.classList.add(this.cssClass);
                                }
                                if (!isNullOrUndefined(this.step) && this.step > 0) {
                                    this.listCreation();
                                    append([this.listWrapper], this.dateTimeWrapper);
                                }
                                document.body.appendChild(this.dateTimeWrapper);
                                this.addTimeSelection();
                                this.renderPopup();
                                this.setTimeScrollPosition();
                                this.openPopup(e);
                                this.popupObject.refreshPosition(this.inputElement);
                            }
                        }
                    }
                }, {
                    key: 'openPopup',
                    value: function openPopup(e) {
                        this.preventArgs = {
                            cancel: false,
                            popup: this.popupObject,
                            e: e || null
                        };
                        this.trigger('open', this.preventArgs);
                        if (!this.preventArgs.cancel && !this.readonly) {
                            var openAnimation = {
                                name: 'FadeIn',
                                duration: ANIMATIONDURATION$1
                            };
                            this.popupObject.show(new Animation(openAnimation));
                            addClass([this.inputWrapper.container], [ICONANIMATION$1]);
                            attributes(this.inputElement, { 'aria-expanded': 'true' });
                            EventHandler.add(document, 'mousedown touchstart', this.documentClickHandler, this);
                        }
                    }
                }, {
                    key: 'documentClickHandler',
                    value: function documentClickHandler(event) {
                        if (!Browser.isDevice) {
                            event.preventDefault();
                        }
                        var target = event.target;
                        if (!closest(target, '#' + (this.popupObject && this.popupObject.element.id)) && target !== this.inputElement && target !== this.timeIcon && target !== this.inputWrapper.container) {
                            if (this.isTimePopupOpen()) {
                                this.hide(event);
                            }
                        } else if (target !== this.inputElement) {
                            if (!Browser.isDevice) {
                                this.isPreventBlur = (Browser.isIE || Browser.info.name === 'edge') && document.activeElement === this.inputElement;
                                event.preventDefault();
                            }
                        }
                    }
                }, {
                    key: 'isTimePopupOpen',
                    value: function isTimePopupOpen() {
                        return this.dateTimeWrapper && this.dateTimeWrapper.classList.contains('' + ROOT$4) ? true : false;
                    }
                }, {
                    key: 'isDatePopupOpen',
                    value: function isDatePopupOpen() {
                        return this.popupWrapper && this.popupWrapper.classList.contains('' + DATETIMEPOPUPWRAPPER) ? true : false;
                    }
                }, {
                    key: 'renderPopup',
                    value: function renderPopup() {
                        var _this14 = this;

                        this.containerStyle = this.inputWrapper.container.getBoundingClientRect();
                        if (Browser.isDevice) {
                            this.timeModal = createElement('div');
                            this.timeModal.className = '' + ROOT$4 + ' e-time-modal';
                            document.body.className += ' ' + OVERFLOW$2;
                            this.timeModal.style.display = 'block';
                            document.body.appendChild(this.timeModal);
                        }
                        var offset = 4;
                        this.popupObject = new Popup(this.dateTimeWrapper, {
                            width: this.setPopupWidth(),
                            zIndex: this.zIndex,
                            targetType: 'container',
                            collision: Browser.isDevice ? { X: 'fit', Y: 'fit' } : { X: 'flip', Y: 'flip' },
                            relateTo: Browser.isDevice ? document.body : this.inputWrapper.container,
                            position: Browser.isDevice ? { X: 'center', Y: 'center' } : { X: 'left', Y: 'bottom' },
                            enableRtl: this.enableRtl,
                            offsetY: offset,
                            open: function open() {
                                _this14.dateTimeWrapper.style.visibility = 'visible';
                                addClass([_this14.timeIcon], ACTIVE$2);
                                if (!Browser.isDevice) {
                                    _this14.inputEvent = new KeyboardEvents(_this14.inputWrapper.container, {
                                        keyAction: _this14.TimeKeyActionHandle.bind(_this14), keyConfigs: _this14.timekeyConfigure, eventName: 'keydown'
                                    });
                                }
                            }, close: function close() {
                                removeClass([_this14.timeIcon], ACTIVE$2);
                                _this14.unWireTimeListEvents();
                                _this14.inputElement.setAttribute('aria-activedescendant', 'null');
                                remove(_this14.popupObject.element);
                                _this14.popupObject.destroy();
                                _this14.dateTimeWrapper.innerHTML = '';
                                _this14.listWrapper = _this14.dateTimeWrapper = undefined;
                                if (_this14.inputEvent) {
                                    _this14.inputEvent.destroy();
                                }
                            }
                        });
                        this.popupObject.element.style.maxHeight = POPUPDIMENSION$1;
                    }
                }, {
                    key: 'setDimension',
                    value: function setDimension(width) {
                        if (typeof width === 'number') {
                            width = formatUnit(width);
                        } else if (typeof width === 'string') {
                            width = width;
                        } else {
                            width = '100%';
                        }
                        return width;
                    }
                }, {
                    key: 'setPopupWidth',
                    value: function setPopupWidth() {
                        var width = this.setDimension(this.width);
                        if (width.indexOf('%') > -1) {
                            var inputWidth = this.containerStyle.width * parseFloat(width) / 100;
                            width = inputWidth.toString() + 'px';
                        }
                        return width;
                    }
                }, {
                    key: 'wireTimeListEvents',
                    value: function wireTimeListEvents() {
                        EventHandler.add(this.listWrapper, 'click', this.onMouseClick, this);
                        if (!Browser.isDevice) {
                            EventHandler.add(this.listWrapper, 'mouseover', this.onMouseOver, this);
                            EventHandler.add(this.listWrapper, 'mouseout', this.onMouseLeave, this);
                        }
                    }
                }, {
                    key: 'unWireTimeListEvents',
                    value: function unWireTimeListEvents() {
                        if (this.listWrapper) {
                            EventHandler.remove(this.listWrapper, 'click', this.onMouseClick);
                            EventHandler.remove(document, 'mousedown touchstart', this.documentClickHandler);
                            if (!Browser.isDevice) {
                                EventHandler.add(this.listWrapper, 'mouseover', this.onMouseOver, this);
                                EventHandler.add(this.listWrapper, 'mouseout', this.onMouseLeave, this);
                            }
                        }
                    }
                }, {
                    key: 'onMouseOver',
                    value: function onMouseOver(event) {
                        var currentLi = closest(event.target, '.' + LISTCLASS$2);
                        this.setTimeHover(currentLi, HOVER$2);
                    }
                }, {
                    key: 'onMouseLeave',
                    value: function onMouseLeave() {
                        this.removeTimeHover(HOVER$2);
                    }
                }, {
                    key: 'setTimeHover',
                    value: function setTimeHover(li, className) {
                        if (this.enabled && this.isValidLI(li) && !li.classList.contains(className)) {
                            this.removeTimeHover(className);
                            addClass([li], className);
                        }
                    }
                }, {
                    key: 'getPopupHeight',
                    value: function getPopupHeight() {
                        var height = parseInt(POPUPDIMENSION$1, 10);
                        var popupHeight = this.dateTimeWrapper.getBoundingClientRect().height;
                        return popupHeight > height ? height : popupHeight;
                    }
                }, {
                    key: 'changeEvent',
                    value: function changeEvent(e) {
                        if (+this.previousDateTime !== +this.value) {
                            _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'changeEvent', this).call(this, e);
                            if (!Browser.isDevice) {
                                this.inputElement.focus();
                            }
                            this.valueWithMinutes = this.value;
                            this.setInputValue('date');
                        }
                    }
                }, {
                    key: 'updateValue',
                    value: function updateValue(e) {
                        this.setInputValue('time');
                        if (+this.previousDateTime !== +this.value) {
                            this.changedArgs = {
                                value: this.value, e: e || null,
                                isInteracted: !isNullOrUndefined(e),
                                element: this.element
                            };
                            this.addTimeSelection();
                            this.trigger('change', this.changedArgs);
                            this.previousDateTime = this.value;
                        }
                    }
                }, {
                    key: 'setTimeScrollPosition',
                    value: function setTimeScrollPosition() {
                        var popupHeight = this.getPopupHeight();
                        var popupElement = void 0;
                        popupElement = this.selectedElement;
                        if (!isNullOrUndefined(popupElement)) {
                            var nextEle = popupElement.nextElementSibling;
                            var height = nextEle ? nextEle.offsetTop : popupElement.offsetTop;
                            var liHeight = popupElement.getBoundingClientRect().height;
                            if (height + popupElement.offsetTop > popupHeight) {
                                this.dateTimeWrapper.scrollTop = nextEle ? height - (popupHeight / HALFPOSITION$1 + liHeight / HALFPOSITION$1) : height;
                            } else {
                                this.dateTimeWrapper.scrollTop = 0;
                            }
                        }
                    }
                }, {
                    key: 'setInputValue',
                    value: function setInputValue(type) {
                        if (type === 'date') {
                            this.inputElement.value = this.previousElementValue = this.getFormattedValue(this.getFullDateTime());
                            this.setProperties({ value: this.getFullDateTime() }, true);
                        } else {
                            var tempVal = this.getFormattedValue(new Date(this.timeCollections[this.activeIndex]));
                            Input.setValue(tempVal, this.inputElement, this.floatLabelType, this.showClearButton);
                            this.previousElementValue = this.inputElement.value;
                            this.setProperties({ value: new Date(this.timeCollections[this.activeIndex]) }, true);
                        }
                    }
                }, {
                    key: 'getFullDateTime',
                    value: function getFullDateTime() {
                        var value = null;
                        if (this.isDateObject(this.valueWithMinutes)) {
                            value = this.combineDateTime(this.valueWithMinutes);
                        } else {
                            value = this.previousDate;
                        }
                        return this.validateMinMaxRange(value);
                    }
                }, {
                    key: 'combineDateTime',
                    value: function combineDateTime(value) {
                        if (this.isDateObject(value)) {
                            var day = this.previousDate.getDate();
                            var month = this.previousDate.getMonth();
                            var year = this.previousDate.getFullYear();
                            var hour = value.getHours();
                            var minutes = value.getMinutes();
                            var seconds = value.getSeconds();
                            return new Date(year, month, day, hour, minutes, seconds);
                        } else {
                            return this.previousDate;
                        }
                    }
                }, {
                    key: 'onMouseClick',
                    value: function onMouseClick(event) {
                        var target = event.target;
                        var li = this.selectedElement = closest(target, '.' + LISTCLASS$2);
                        if (li && li.classList.contains(LISTCLASS$2)) {
                            this.timeValue = li.getAttribute('data-value');
                            this.hide(event);
                        }
                        this.setSelection(li, event);
                    }
                }, {
                    key: 'setSelection',
                    value: function setSelection(li, event) {
                        if (this.isValidLI(li) && !li.classList.contains(ACTIVE$2)) {
                            var value = li.getAttribute('data-value');
                            this.selectedElement = li;
                            var index = Array.prototype.slice.call(this.liCollections).indexOf(li);
                            this.activeIndex = index;
                            this.valueWithMinutes = new Date(this.timeCollections[this.activeIndex]);
                            addClass([this.selectedElement], ACTIVE$2);
                            this.selectedElement.setAttribute('aria-selected', 'true');
                            this.updateValue(event);
                        }
                    }
                }, {
                    key: 'setTimeActiveClass',
                    value: function setTimeActiveClass() {
                        var collections = isNullOrUndefined(this.dateTimeWrapper) ? this.listWrapper : this.dateTimeWrapper;
                        if (!isNullOrUndefined(collections)) {
                            var items = collections.querySelectorAll('.' + LISTCLASS$2);
                            if (items.length) {
                                for (var i = 0; i < items.length; i++) {
                                    if (this.timeCollections[i] === +this.valueWithMinutes) {
                                        items[i].setAttribute('aria-selected', 'true');
                                        this.selectedElement = items[i];
                                        this.activeIndex = i;
                                        this.setTimeActiveDescendant();
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'setTimeActiveDescendant',
                    value: function setTimeActiveDescendant() {
                        if (!isNullOrUndefined(this.selectedElement)) {
                            attributes(this.inputElement, { 'aria-activedescendant': this.selectedElement.getAttribute('id') });
                        } else {
                            attributes(this.inputElement, { 'aria-activedescendant': 'null' });
                        }
                    }
                }, {
                    key: 'addTimeSelection',
                    value: function addTimeSelection() {
                        this.selectedElement = null;
                        this.removeTimeSelection();
                        this.setTimeActiveClass();
                        if (!isNullOrUndefined(this.selectedElement)) {
                            addClass([this.selectedElement], ACTIVE$2);
                            this.selectedElement.setAttribute('aria-selected', 'true');
                        }
                    }
                }, {
                    key: 'removeTimeSelection',
                    value: function removeTimeSelection() {
                        this.removeTimeHover(HOVER$2);
                        if (!isNullOrUndefined(this.dateTimeWrapper)) {
                            var items = this.dateTimeWrapper.querySelectorAll('.' + ACTIVE$2);
                            if (items.length) {
                                removeClass(items, ACTIVE$2);
                                items[0].removeAttribute('aria-selected');
                            }
                        }
                    }
                }, {
                    key: 'removeTimeHover',
                    value: function removeTimeHover(className) {
                        var hoveredItem = this.getTimeHoverItem(className);
                        if (hoveredItem && hoveredItem.length) {
                            removeClass(hoveredItem, className);
                        }
                    }
                }, {
                    key: 'getTimeHoverItem',
                    value: function getTimeHoverItem(className) {
                        var collections = isNullOrUndefined(this.dateTimeWrapper) ? this.listWrapper : this.dateTimeWrapper;
                        var hoveredItem = void 0;
                        if (!isNullOrUndefined(collections)) {
                            hoveredItem = collections.querySelectorAll('.' + className);
                        }
                        return hoveredItem;
                    }
                }, {
                    key: 'isValidLI',
                    value: function isValidLI(li) {
                        return li && li.classList.contains(LISTCLASS$2) && !li.classList.contains(DISABLED$3);
                    }
                }, {
                    key: 'calculateStartEnd',
                    value: function calculateStartEnd(value, range, method) {
                        var day = value.getDate();
                        var month = value.getMonth();
                        var year = value.getFullYear();
                        var hours = value.getHours();
                        var minutes = value.getMinutes();
                        var seconds = value.getSeconds();
                        var milliseconds = value.getMilliseconds();
                        if (range) {
                            if (method === 'starttime') {
                                return new Date(year, month, day, 0, 0, 0);
                            } else {
                                return new Date(year, month, day, 23, 59, 59);
                            }
                        } else {
                            return new Date(year, month, day, hours, minutes, seconds, milliseconds);
                        }
                    }
                }, {
                    key: 'startTime',
                    value: function startTime(date) {
                        var tempStartValue = void 0;
                        var start = void 0;
                        var tempMin = this.min;
                        var value = void 0;
                        value = date === null ? new Date() : date;
                        if (+value.getDate() === +tempMin.getDate() && +value.getMonth() === +tempMin.getMonth() && +value.getFullYear() === +tempMin.getFullYear() || +new Date(value.getFullYear(), value.getMonth(), value.getDate()) <= +new Date(tempMin.getFullYear(), tempMin.getMonth(), tempMin.getDate())) {
                            start = false;
                            tempStartValue = this.min;
                        } else if (+value < +this.max && +value > +this.min) {
                            start = true;
                            tempStartValue = value;
                        } else if (+value >= +this.max) {
                            start = true;
                            tempStartValue = this.max;
                        }
                        return this.calculateStartEnd(tempStartValue, start, 'starttime');
                    }
                }, {
                    key: 'endTime',
                    value: function endTime(date) {
                        var tempEndValue = void 0;
                        var end = void 0;
                        var tempMax = this.max;
                        var value = void 0;
                        value = date === null ? new Date() : date;
                        if (+value.getDate() === +tempMax.getDate() && +value.getMonth() === +tempMax.getMonth() && +value.getFullYear() === +tempMax.getFullYear() || +new Date(value.getUTCFullYear(), value.getMonth(), value.getDate()) >= +new Date(tempMax.getFullYear(), tempMax.getMonth(), tempMax.getDate())) {
                            end = false;
                            tempEndValue = this.max;
                        } else if (+value < +this.max && +value > +this.min) {
                            end = true;
                            tempEndValue = value;
                        } else if (+value <= +this.min) {
                            end = true;
                            tempEndValue = this.min;
                        }
                        return this.calculateStartEnd(tempEndValue, end, 'endtime');
                    }
                }, {
                    key: 'hide',
                    value: function hide(e) {
                        if (this.popupObj || this.dateTimeWrapper) {
                            this.preventArgs = {
                                cancel: false,
                                popup: this.popupObj || this.popupObject,
                                e: e || null
                            };
                            if (isNullOrUndefined(this.popupObj)) {
                                this.trigger('close', this.preventArgs);
                            }
                            if (!this.preventArgs.cancel) {
                                if (this.isDatePopupOpen()) {
                                    _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'hide', this).call(this, e);
                                } else if (this.isTimePopupOpen()) {
                                    this.closePopup(e);
                                    removeClass([document.body], OVERFLOW$2);
                                    if (Browser.isDevice && this.timeModal) {
                                        this.timeModal.style.display = 'none';
                                        this.timeModal.outerHTML = '';
                                        this.timeModal = null;
                                    }
                                    this.setTimeActiveDescendant();
                                }
                            }
                        }
                    }
                }, {
                    key: 'closePopup',
                    value: function closePopup(e) {
                        if (this.isTimePopupOpen() && this.popupObject) {
                            var animModel = {
                                name: 'FadeOut',
                                duration: ANIMATIONDURATION$1,
                                delay: 0
                            };
                            this.popupObject.hide(new Animation(animModel));
                            this.inputWrapper.container.classList.remove(ICONANIMATION$1);
                            attributes(this.inputElement, { 'aria-expanded': 'false' });
                            EventHandler.remove(document, 'mousedown touchstart', this.documentClickHandler);
                        }
                        if (Browser.isDevice) {
                            removeClass([this.inputWrapper.container], INPUTFOCUS$2);
                        }
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'preRender', this).call(this);
                    }
                }, {
                    key: 'getProperty',
                    value: function getProperty(date, val) {
                        if (val === 'min') {
                            this.setProperties({ min: this.validateValue(date.min) }, true);
                        } else {
                            this.setProperties({ max: this.validateValue(date.max) }, true);
                        }
                    }
                }, {
                    key: 'checkAttributes',
                    value: function checkAttributes() {
                        var attributes$$1 = ['style', 'name', 'step', 'disabled', 'readonly', 'value', 'min', 'max', 'placeholder', 'type'];
                        var value = void 0;
                        var _iteratorNormalCompletion25 = true;
                        var _didIteratorError25 = false;
                        var _iteratorError25 = undefined;

                        try {
                            for (var _iterator25 = attributes$$1[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                                var prop = _step25.value;

                                if (!isNullOrUndefined(this.inputElement.getAttribute(prop))) {
                                    switch (prop) {
                                        case 'name':
                                            this.inputElement.setAttribute('name', this.inputElement.getAttribute(prop));
                                            break;
                                        case 'step':
                                            this.step = parseInt(this.inputElement.getAttribute(prop), 10);
                                            break;
                                        case 'readonly':
                                            var readonly = !isNullOrUndefined(this.inputElement.getAttribute(prop));
                                            this.setProperties({ readonly: readonly }, true);
                                            break;
                                        case 'placeholder':
                                            this.placeholder = this.inputElement.getAttribute(prop);
                                            break;
                                        case 'min':
                                            value = new Date(this.inputElement.getAttribute(prop));
                                            if (!this.isNullOrEmpty(value) && !isNaN(+value)) {
                                                this.setProperties({ min: value }, true);
                                            }
                                            break;
                                        case 'disabled':
                                            var enabled = isNullOrUndefined(this.inputElement.getAttribute(prop));
                                            this.setProperties({ enabled: enabled }, true);
                                            break;
                                        case 'max':
                                            value = new Date(this.inputElement.getAttribute(prop));
                                            if (!this.isNullOrEmpty(value) && !isNaN(+value)) {
                                                this.setProperties({ max: value }, true);
                                            }
                                            break;
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError25 = true;
                            _iteratorError25 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion25 && _iterator25.return) {
                                    _iterator25.return();
                                }
                            } finally {
                                if (_didIteratorError25) {
                                    throw _iteratorError25;
                                }
                            }
                        }
                    }
                }, {
                    key: 'getTimeActiveElement',
                    value: function getTimeActiveElement() {
                        if (!isNullOrUndefined(this.dateTimeWrapper)) {
                            return this.dateTimeWrapper.querySelectorAll('.' + ACTIVE$2);
                        } else {
                            return null;
                        }
                    }
                }, {
                    key: 'createDateObj',
                    value: function createDateObj(val) {
                        return val instanceof Date ? val : null;
                    }
                }, {
                    key: 'getDateObject',
                    value: function getDateObject(text) {
                        if (!this.isNullOrEmpty(text)) {
                            var dateValue = this.createDateObj(text);
                            var value = this.valueWithMinutes;
                            var status = !isNullOrUndefined(value);
                            if (this.checkDateValue(dateValue)) {
                                var date = status ? value.getDate() : DAY$1;
                                var month = status ? value.getMonth() : MONTH$2;
                                var year = status ? value.getFullYear() : YEAR$2;
                                var hour = status ? value.getHours() : HOUR;
                                var minute = status ? value.getMinutes() : MINUTE;
                                var second = status ? value.getSeconds() : SECOND;
                                var millisecond = status ? value.getMilliseconds() : MILLISECOND;
                                return new Date(year, month, date, hour, minute, second, millisecond);
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'findNextTimeElement',
                    value: function findNextTimeElement(event) {
                        var textVal = this.inputElement.value;
                        var value = isNullOrUndefined(this.valueWithMinutes) ? this.createDateObj(textVal) : this.getDateObject(this.valueWithMinutes);
                        var dateTimeVal = null;
                        var listCount = this.liCollections.length;
                        if (!isNullOrUndefined(this.checkDateValue(value)) || !isNullOrUndefined(this.activeIndex)) {
                            if (event.action === 'home') {
                                dateTimeVal = +this.createDateObj(new Date(this.timeCollections[0]));
                                this.activeIndex = 0;
                            } else if (event.action === 'end') {
                                dateTimeVal = +this.createDateObj(new Date(this.timeCollections[this.timeCollections.length - 1]));
                                this.activeIndex = this.timeCollections.length - 1;
                            } else {
                                if (event.action === 'down') {
                                    for (var i = 0; i < listCount; i++) {
                                        if (+value < this.timeCollections[i]) {
                                            dateTimeVal = +this.createDateObj(new Date(this.timeCollections[i]));
                                            this.activeIndex = i;
                                            break;
                                        }
                                    }
                                } else {
                                    for (var _i4 = listCount - 1; _i4 >= 0; _i4--) {
                                        if (+value > this.timeCollections[_i4]) {
                                            dateTimeVal = +this.createDateObj(new Date(this.timeCollections[_i4]));
                                            this.activeIndex = _i4;
                                            break;
                                        }
                                    }
                                }
                            }
                            this.selectedElement = this.liCollections[this.activeIndex];
                            this.timeElementValue(isNullOrUndefined(dateTimeVal) ? null : new Date(dateTimeVal));
                        }
                    }
                }, {
                    key: 'setTimeValue',
                    value: function setTimeValue(date, value) {
                        var time = void 0;
                        var val = this.validateMinMaxRange(value);
                        var newval = this.createDateObj(val);
                        if (this.getFormattedValue(newval) !== (!isNullOrUndefined(this.value) ? this.getFormattedValue(this.value) : null)) {
                            this.valueWithMinutes = isNullOrUndefined(newval) ? null : newval;
                            time = new Date(+this.valueWithMinutes);
                        } else {
                            if (this.strictMode) {
                                //for strict mode case, when value not present within a range. Reset the nearest range value.
                                date = newval;
                            }
                            this.valueWithMinutes = this.checkDateValue(date);
                            time = new Date(+this.valueWithMinutes);
                        }
                        var dateString = this.globalize.formatDate(time, {
                            format: !isNullOrUndefined(this.format) ? this.format : this.cldrDateTimeFormat(), type: 'dateTime', skeleton: 'yMd'
                        });
                        if (!this.strictMode && isNullOrUndefined(time)) {
                            Input.setValue(dateString, this.inputElement, this.floatLabelType, this.showClearButton);
                        } else {
                            Input.setValue(dateString, this.inputElement, this.floatLabelType, this.showClearButton);
                        }
                        return time;
                    }
                }, {
                    key: 'timeElementValue',
                    value: function timeElementValue(value) {
                        if (!isNullOrUndefined(this.checkDateValue(value)) && !this.isNullOrEmpty(value)) {
                            var date = value instanceof Date ? value : this.getDateObject(value);
                            return this.setTimeValue(date, value);
                        }
                        return null;
                    }
                }, {
                    key: 'timeKeyHandler',
                    value: function timeKeyHandler(event) {
                        if (isNullOrUndefined(this.step) || this.step <= 0) {
                            return;
                        }
                        var listCount = this.timeCollections.length;
                        if (isNullOrUndefined(this.getTimeActiveElement()) || this.getTimeActiveElement().length === 0) {
                            if (this.liCollections.length > 0) {
                                if (isNullOrUndefined(this.value) && isNullOrUndefined(this.activeIndex)) {
                                    this.activeIndex = 0;
                                    this.selectedElement = this.liCollections[0];
                                    this.timeElementValue(new Date(this.timeCollections[0]));
                                } else {
                                    this.findNextTimeElement(event);
                                }
                            }
                        } else {
                            var nextItemValue = void 0;
                            if (event.keyCode >= 37 && event.keyCode <= 40) {
                                var index = event.keyCode === 40 || event.keyCode === 39 ? ++this.activeIndex : --this.activeIndex;
                                this.activeIndex = index = this.activeIndex === listCount ? 0 : this.activeIndex;
                                this.activeIndex = index = this.activeIndex < 0 ? listCount - 1 : this.activeIndex;
                                nextItemValue = isNullOrUndefined(this.timeCollections[index]) ? this.timeCollections[0] : this.timeCollections[index];
                            } else if (event.action === 'home') {
                                this.activeIndex = 0;
                                nextItemValue = this.timeCollections[0];
                            } else if (event.action === 'end') {
                                this.activeIndex = listCount - 1;
                                nextItemValue = this.timeCollections[listCount - 1];
                            }
                            this.selectedElement = this.liCollections[this.activeIndex];
                            this.timeElementValue(new Date(nextItemValue));
                        }
                        this.isNavigate = true;
                        this.setTimeHover(this.selectedElement, NAVIGATION$1);
                        this.setTimeActiveDescendant();
                        if (this.isTimePopupOpen() && this.selectedElement !== null && (!event || event.type !== 'click')) {
                            this.setTimeScrollPosition();
                        }
                    }
                }, {
                    key: 'TimeKeyActionHandle',
                    value: function TimeKeyActionHandle(event) {
                        if (this.enabled) {
                            if (event.action !== 'right' && event.action !== 'left' && event.action !== 'tab') {
                                event.preventDefault();
                            }
                            switch (event.action) {
                                case 'up':
                                case 'down':
                                case 'home':
                                case 'end':
                                    this.timeKeyHandler(event);
                                    break;
                                case 'enter':
                                    if (this.isNavigate) {
                                        this.selectedElement = this.liCollections[this.activeIndex];
                                        this.valueWithMinutes = new Date(this.timeCollections[this.activeIndex]);
                                        this.setInputValue('time');
                                        if (+this.previousDateTime !== +this.value) {
                                            this.changedArgs.value = this.value;
                                            this.addTimeSelection();
                                            this.previousDateTime = this.value;
                                        }
                                    } else {
                                        this.updateValue(event);
                                    }
                                    this.hide(event);
                                    addClass([this.inputWrapper.container], INPUTFOCUS$2);
                                    this.isNavigate = false;
                                    break;
                                case 'escape':
                                    this.hide(event);
                                    break;
                                default:
                                    this.isNavigate = false;
                                    break;
                            }
                        }
                    }
                }, {
                    key: 'inputKeyAction',
                    value: function inputKeyAction(event) {
                        switch (event.action) {
                            case 'altDownArrow':
                                this.strictModeUpdate();
                                this.updateInput();
                                this.toggle(event);
                                break;
                        }
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion26 = true;
                        var _didIteratorError26 = false;
                        var _iteratorError26 = undefined;

                        try {
                            for (var _iterator26 = Object.keys(newProp)[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
                                var prop = _step26.value;

                                switch (prop) {
                                    case 'value':
                                        var options = { format: this.cldrDateTimeFormat(), type: 'dateTime', skeleton: 'yMd' };
                                        if (typeof newProp.value === 'string') {
                                            this.setProperties({ value: this.globalize.parseDate(newProp.value, options) }, true);
                                            newProp.value = this.globalize.parseDate(newProp.value, options);
                                        }
                                        newProp.value = this.validateValue(newProp.value);
                                        Input.setValue(this.getFormattedValue(newProp.value), this.inputElement, this.floatLabelType, this.showClearButton);
                                        this.valueWithMinutes = newProp.value;
                                        this.setProperties({ value: newProp.value }, true);
                                        this.previousDateTime = new Date(this.inputElement.value);
                                        this.updateInput();
                                        this.changeTrigger(null);
                                        break;
                                    case 'min':
                                    case 'max':
                                        this.getProperty(newProp, prop);
                                        this.updateInput();
                                        break;
                                    case 'enableRtl':
                                        Input.setEnableRtl(this.enableRtl, [this.inputWrapper.container]);
                                        break;
                                    case 'cssClass':
                                        Input.setCssClass(newProp.cssClass, [this.inputWrapper.container]);
                                        if (this.dateTimeWrapper) {
                                            addClass([this.dateTimeWrapper], [newProp.cssClass]);
                                        }
                                        break;
                                    case 'locale':
                                        this.globalize = new Internationalization(this.locale);
                                        this.l10n.setLocale(this.locale);
                                        this.setProperties({ placeholder: this.l10n.getConstant('placeholder') }, true);
                                        Input.setPlaceholder(this.l10n.getConstant('placeholder'), this.inputElement);
                                        this.dateTimeFormat = this.cldrDateTimeFormat();
                                        _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'updateInput', this).call(this);
                                        break;
                                    case 'format':
                                        this.setProperties({ format: newProp.format }, true);
                                        this.setValue();
                                        break;
                                    case 'placeholder':
                                        Input.setPlaceholder(newProp.placeholder, this.inputElement);
                                        this.inputElement.setAttribute('aria-placeholder', newProp.placeholder);
                                        break;
                                    case 'enabled':
                                        Input.setEnabled(this.enabled, this.inputElement);
                                        this.bindEvents();
                                        break;
                                    case 'strictMode':
                                        this.updateInput();
                                        break;
                                    case 'width':
                                        this.setWidth(newProp.width);
                                        break;
                                    case 'readonly':
                                        Input.setReadonly(this.readonly, this.inputElement);
                                        break;
                                    case 'floatLabelType':
                                        this.floatLabelType = newProp.floatLabelType;
                                        Input.removeFloating(this.inputWrapper);
                                        Input.addFloating(this.inputElement, this.floatLabelType, this.placeholder);
                                        break;
                                    default:
                                        _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), 'onPropertyChanged', this).call(this, newProp, oldProp);
                                        break;
                                }
                                this.hide(null);
                            }
                        } catch (err) {
                            _didIteratorError26 = true;
                            _iteratorError26 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion26 && _iterator26.return) {
                                    _iterator26.return();
                                }
                            } finally {
                                if (_didIteratorError26) {
                                    throw _iteratorError26;
                                }
                            }
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'datetimepicker';
                    }
                }]);

                return DateTimePicker;
            }(DatePicker));

            __decorate$4([Property(null)], DateTimePicker.prototype, "timeFormat", void 0);
            __decorate$4([Property(30)], DateTimePicker.prototype, "step", void 0);
            __decorate$4([Property(1000)], DateTimePicker.prototype, "zIndex", void 0);
            __decorate$4([Property(false)], DateTimePicker.prototype, "enablePersistence", void 0);
            __decorate$4([Property(true)], DateTimePicker.prototype, "showClearButton", void 0);
            __decorate$4([Property(null)], DateTimePicker.prototype, "placeholder", void 0);
            __decorate$4([Property(false)], DateTimePicker.prototype, "strictMode", void 0);
            __decorate$4([Event()], DateTimePicker.prototype, "open", void 0);
            __decorate$4([Event()], DateTimePicker.prototype, "close", void 0);
            __decorate$4([Event()], DateTimePicker.prototype, "blur", void 0);
            __decorate$4([Event()], DateTimePicker.prototype, "focus", void 0);
            __decorate$4([Event()], DateTimePicker.prototype, "created", void 0);
            __decorate$4([Event()], DateTimePicker.prototype, "destroyed", void 0);
            _export('DateTimePicker', DateTimePicker = __decorate$4([NotifyPropertyChanges], DateTimePicker));

            /**
             * DateTimePicker modules
             */

            /**
             * Calendar all modules
             */

            _export('CalendarBase', CalendarBase);

            _export('Calendar', Calendar);

            _export('DatePicker', DatePicker);

            _export('Presets', Presets);

            _export('DateRangePicker', DateRangePicker);

            _export('TimePickerBase', TimePickerBase);

            _export('TimePicker', TimePicker);

            _export('DateTimePicker', DateTimePicker);
        }
    };
});

//# sourceMappingURL=ej2-calendars.es2015-compiled.js.map