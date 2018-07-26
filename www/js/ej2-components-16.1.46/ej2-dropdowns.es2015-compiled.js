'use strict';

System.register(['@syncfusion/ej2-base', '@syncfusion/ej2-data', '@syncfusion/ej2-lists', '@syncfusion/ej2-popups', '@syncfusion/ej2-inputs', '@syncfusion/ej2-buttons'], function (_export, _context) {
    "use strict";

    var Animation, Browser, ChildProperty, Complex, Component, Event, EventHandler, KeyboardEvents, L10n, NotifyPropertyChanges, Property, addClass, append, attributes, classList, closest, compile, createElement, detach, extend, formatUnit, getUniqueID, getValue, isNullOrUndefined, isUndefined, prepend, remove, removeClass, rippleEffect, select, setStyleAttribute, setValue, DataManager, DataUtil, Predicate, Query, ListBase, cssClass, Popup, createSpinner, _hideSpinner, isCollide, _showSpinner, Input, createCheckBox, _createClass, _get, _typeof, queryString, prevString, matches, activeClass, __decorate, FieldSettings, dropDownBaseClasses, DropDownBase, __decorate$1, dropDownListClasses, inputObject, DropDownList, __decorate$2, inputObject$1, ComboBox, __decorate$3, SPINNER_CLASS, AutoComplete, FLOATLINE, FLOATTEXT, LABELTOP, LABELBOTTOM, __decorate$4, FOCUS, DISABLED, OVER_ALL_WRAPPER, ELEMENT_WRAPPER, ELEMENT_MOBILE_WRAPPER, HIDE_LIST, DELIMITER_VIEW, CHIP_WRAPPER, CHIP, CHIP_CONTENT, CHIP_CLOSE, CHIP_SELECTED, SEARCHBOX_WRAPPER, DELIMITER_VIEW_WRAPPER, ZERO_SIZE, REMAIN_WRAPPER, CLOSEICON_CLASS, DELIMITER_WRAPPER, POPUP_WRAPPER, INPUT_ELEMENT, RTL_CLASS, CLOSE_ICON_HIDE, MOBILE_CHIP, FOOTER, HEADER, DISABLE_ICON, SPINNER_CLASS$1, HIDDEN_ELEMENT, _destroy, dropdownIcon, iconAnimation, MultiSelect, ICON, CHECKBOXFRAME, CHECK, CHECKBOXWRAP, INDETERMINATE, checkAllParent, searchBackIcon, filterBarClearIcon, filterInput, filterParent, mobileFilter, clearIcon, popupFullScreen, device, FOCUS$1, CheckBoxSelection;

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
     * Search and focus the list item based on key code matches with list text content
     * @param  { number } keyCode - Specifies the key code which pressed on keyboard events.
     * @param  { HTMLElement[]] } items - Specifies an array of HTMLElement, from which matches find has done.
     * @param { number } selectedIndex - Specifies the selected item in list item, so that search will happen
     * after selected item otherwise it will do from initial.
     * @param  { boolean } ignoreCase - Specifies the case consideration when search has done.
     */
    function _incrementalSearch(keyCode, items, selectedIndex, ignoreCase) {
        queryString += String.fromCharCode(keyCode);
        setTimeout(function () {
            queryString = '';
        }, 1000);
        var index = void 0;
        queryString = ignoreCase ? queryString.toLowerCase() : queryString;
        if (prevString === queryString) {
            for (var i = 0; i < matches.length; i++) {
                if (matches[i].classList.contains(activeClass)) {
                    index = i;
                    break;
                }
            }
            index = index + 1;
            return matches[index];
        } else {
            var listItems = items;
            var strLength = queryString.length;
            var text = void 0;
            var item = void 0;
            selectedIndex = selectedIndex ? selectedIndex + 1 : 0;
            var _i = selectedIndex;
            matches = [];
            do {
                if (_i === listItems.length) {
                    _i = -1;
                }
                _i === -1 ? index = 0 : index = _i;
                item = listItems[index];
                text = ignoreCase ? item.innerText.toLowerCase() : item.innerText;
                if (text.substr(0, strLength) === queryString) {
                    matches.push(listItems[index]);
                }
                _i++;
            } while (_i !== selectedIndex);
            prevString = queryString;
            return matches[0];
        }
    }
    function Search(inputVal, items, searchType, ignoreCase) {
        var listItems = items;
        ignoreCase = ignoreCase !== undefined && ignoreCase !== null ? ignoreCase : true;
        var itemData = { item: null, index: null };
        if (inputVal.length) {
            var strLength = inputVal.length;
            var queryStr = ignoreCase ? inputVal.toLocaleLowerCase() : inputVal;
            for (var i = 0, itemsData = listItems; i < itemsData.length; i++) {
                var item = itemsData[i];
                var text = (ignoreCase ? item.textContent.toLocaleLowerCase() : item.textContent).replace(/^\s+|\s+$/g, '');
                if (searchType === 'Equal' && text === queryStr || searchType === 'StartsWith' && text.substr(0, strLength) === queryStr) {
                    itemData.item = item;
                    itemData.index = i;
                    return { item: item, index: i };
                }
            }
            return itemData;
        }
        return itemData;
    }

    /**
     * Function helps to find which highlightSearch is to call based on your data.
     * @param  {HTMLElement} content - Specifies an content element.
     * @param  {string} query - Specifies the string to be highlighted.
     * @param  {boolean} ignoreCase - Specifies the ignoreCase option.
     * @param  {HightLightType} type - Specifies the type of highlight.
     */
    function highlightSearch(content, query, ignoreCase, type) {
        revert(content);
        if (query === '') {
            return;
        } else {
            var ignoreRegex = ignoreCase ? 'gim' : 'gm';
            query = /^[a-zA-Z0-9- ]*$/.test(query) ? query : query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            var replaceQuery = type === 'StartsWith' ? '^(' + query + ')' : type === 'EndsWith' ? '(' + query + ')$' : '(' + query + ')';
            var pattern = new RegExp(replaceQuery, ignoreRegex);
            var li = content.querySelectorAll('ul li');
            for (var i = 0; i < li.length; i++) {
                var element = li[i];
                element.innerHTML = element.innerHTML.replace(pattern, '<span class="e-highlight">$1</span>');
            }
        }
    }
    /**
     * Function helps to remove highlighted element based on your data.
     * @param  {HTMLElement} id - Specifies an id of list data.
     */
    function revert(content) {
        var contentElement = content.querySelectorAll('.e-highlight');
        for (var i = contentElement.length - 1; i >= 0; i--) {
            var parent = contentElement[i].parentNode;
            var text = document.createTextNode(contentElement[i].textContent);
            parent.replaceChild(text, contentElement[i]);
        }
    }

    /**
     * Common source
     */

    /**
     * Function to create Float Label element.
     * @param overAllWrapper - overall wrapper of multiselect.
     * @param element - the given html element.
     * @param inputElement - specify the input wrapper.
     * @param value - Value of the MultiSelect.
     * @param floatLabelType - Specify the FloatLabel Type.
     * @param placeholder - Specify the PlaceHolder text.
     */
    function createFloatLabel(overAllWrapper, searchWrapper, element, inputElement, value, floatLabelType, placeholder) {
        var floatLinelement = void 0;
        var floatLabelElement = void 0;
        floatLinelement = createElement('span', { className: FLOATLINE });
        floatLabelElement = createElement('label', { className: FLOATTEXT });
        if (!isNullOrUndefined(element.id) && element.id !== '') {
            floatLabelElement.id = 'label_' + element.id.replace(/ /g, '_');
            attributes(element, { 'aria-labelledby': floatLabelElement.id });
        }
        if (!isNullOrUndefined(inputElement.placeholder) && inputElement.placeholder !== '') {
            floatLabelElement.innerHTML = inputElement.placeholder;
            inputElement.removeAttribute('placeholder');
        }
        if (!isNullOrUndefined(placeholder) && placeholder !== '') {
            floatLabelElement.innerHTML = placeholder;
        }
        searchWrapper.appendChild(floatLinelement);
        searchWrapper.appendChild(floatLabelElement);
        overAllWrapper.classList.add('e-float-input');
        updateFloatLabelState(value, floatLabelElement);
        if (floatLabelType === 'Always') {
            if (floatLabelElement.classList.contains(LABELBOTTOM)) {
                removeClass([floatLabelElement], LABELBOTTOM);
            }
            addClass([floatLabelElement], LABELTOP);
        }
    }
    /**
     * Function to update status of the Float Label element.
     * @param value - Value of the MultiSelect.
     * @param label - float label element.
     */
    function updateFloatLabelState(value, label) {
        if (value && value.length > 0) {
            addClass([label], LABELTOP);
            removeClass([label], LABELBOTTOM);
        } else {
            removeClass([label], LABELTOP);
            addClass([label], LABELBOTTOM);
        }
    }
    /**
     * Function to remove Float Label element.
     * @param overAllWrapper - overall wrapper of multiselect.
     * @param componentWrapper - wrapper element of multiselect.
     * @param searchWrapper - search wrapper of multiselect.
     * @param inputElement - specify the input wrapper.
     * @param value - Value of the MultiSelect.
     * @param floatLabelType - Specify the FloatLabel Type.
     * @param placeholder - Specify the PlaceHolder text.
     */
    function removeFloating(overAllWrapper, componentWrapper, searchWrapper, inputElement, value, floatLabelType, placeholder) {
        var placeholderElement = componentWrapper.querySelector('.' + FLOATTEXT);
        var floatLine = componentWrapper.querySelector('.' + FLOATLINE);
        var placeholderText = void 0;
        if (!isNullOrUndefined(placeholderElement)) {
            placeholderText = placeholderElement.innerText;
            detach(searchWrapper.querySelector('.' + FLOATTEXT));
            setPlaceHolder(value, inputElement, placeholderText);
            if (!isNullOrUndefined(floatLine)) {
                detach(searchWrapper.querySelector('.' + FLOATLINE));
            }
        } else {
            placeholderText = placeholder !== null ? placeholder : '';
            setPlaceHolder(value, inputElement, placeholderText);
        }
        overAllWrapper.classList.remove('e-float-input');
    }
    /**
     * Function to set the placeholder to the element.
     * @param value - Value of the MultiSelect.
     * @param inputElement - specify the input wrapper.
     * @param placeholder - Specify the PlaceHolder text.
     */
    function setPlaceHolder(value, inputElement, placeholder) {
        if (value && value.length) {
            inputElement.placeholder = '';
        } else {
            inputElement.placeholder = placeholder;
        }
    }
    /**
     * Function for focusing the Float Element.
     * @param overAllWrapper - overall wrapper of multiselect.
     * @param componentWrapper - wrapper element of multiselect.
     */
    function floatLabelFocus(overAllWrapper, componentWrapper) {
        overAllWrapper.classList.add('e-input-focus');
        var label = componentWrapper.querySelector('.' + FLOATTEXT);
        if (!isNullOrUndefined(label)) {
            addClass([label], LABELTOP);
            if (label.classList.contains(LABELBOTTOM)) {
                removeClass([label], LABELBOTTOM);
            }
        }
    }
    /**
     * Function to focus the Float Label element.
     * @param overAllWrapper - overall wrapper of multiselect.
     * @param componentWrapper - wrapper element of multiselect.
     * @param value - Value of the MultiSelect.
     * @param floatLabelType - Specify the FloatLabel Type.
     * @param placeholder - Specify the PlaceHolder text.
     */
    function floatLabelBlur(overAllWrapper, componentWrapper, value, floatLabelType, placeholder) {
        overAllWrapper.classList.remove('e-input-focus');
        var label = componentWrapper.querySelector('.' + FLOATTEXT);
        if (value && value.length <= 0 && floatLabelType === 'Auto' && !isNullOrUndefined(label)) {
            if (label.classList.contains(LABELTOP)) {
                removeClass([label], LABELTOP);
            }
            addClass([label], LABELBOTTOM);
        }
    }

    return {
        setters: [function (_syncfusionEj2Base) {
            Animation = _syncfusionEj2Base.Animation;
            Browser = _syncfusionEj2Base.Browser;
            ChildProperty = _syncfusionEj2Base.ChildProperty;
            Complex = _syncfusionEj2Base.Complex;
            Component = _syncfusionEj2Base.Component;
            Event = _syncfusionEj2Base.Event;
            EventHandler = _syncfusionEj2Base.EventHandler;
            KeyboardEvents = _syncfusionEj2Base.KeyboardEvents;
            L10n = _syncfusionEj2Base.L10n;
            NotifyPropertyChanges = _syncfusionEj2Base.NotifyPropertyChanges;
            Property = _syncfusionEj2Base.Property;
            addClass = _syncfusionEj2Base.addClass;
            append = _syncfusionEj2Base.append;
            attributes = _syncfusionEj2Base.attributes;
            classList = _syncfusionEj2Base.classList;
            closest = _syncfusionEj2Base.closest;
            compile = _syncfusionEj2Base.compile;
            createElement = _syncfusionEj2Base.createElement;
            detach = _syncfusionEj2Base.detach;
            extend = _syncfusionEj2Base.extend;
            formatUnit = _syncfusionEj2Base.formatUnit;
            getUniqueID = _syncfusionEj2Base.getUniqueID;
            getValue = _syncfusionEj2Base.getValue;
            isNullOrUndefined = _syncfusionEj2Base.isNullOrUndefined;
            isUndefined = _syncfusionEj2Base.isUndefined;
            prepend = _syncfusionEj2Base.prepend;
            remove = _syncfusionEj2Base.remove;
            removeClass = _syncfusionEj2Base.removeClass;
            rippleEffect = _syncfusionEj2Base.rippleEffect;
            select = _syncfusionEj2Base.select;
            setStyleAttribute = _syncfusionEj2Base.setStyleAttribute;
            setValue = _syncfusionEj2Base.setValue;
        }, function (_syncfusionEj2Data) {
            DataManager = _syncfusionEj2Data.DataManager;
            DataUtil = _syncfusionEj2Data.DataUtil;
            Predicate = _syncfusionEj2Data.Predicate;
            Query = _syncfusionEj2Data.Query;
        }, function (_syncfusionEj2Lists) {
            ListBase = _syncfusionEj2Lists.ListBase;
            cssClass = _syncfusionEj2Lists.cssClass;
        }, function (_syncfusionEj2Popups) {
            Popup = _syncfusionEj2Popups.Popup;
            createSpinner = _syncfusionEj2Popups.createSpinner;
            _hideSpinner = _syncfusionEj2Popups.hideSpinner;
            isCollide = _syncfusionEj2Popups.isCollide;
            _showSpinner = _syncfusionEj2Popups.showSpinner;
        }, function (_syncfusionEj2Inputs) {
            Input = _syncfusionEj2Inputs.Input;
        }, function (_syncfusionEj2Buttons) {
            createCheckBox = _syncfusionEj2Buttons.createCheckBox;
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
            queryString = '';
            prevString = '';
            matches = [];
            activeClass = 'e-active';

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('FieldSettings', FieldSettings = function (_ChildProperty) {
                _inherits(FieldSettings, _ChildProperty);

                function FieldSettings() {
                    _classCallCheck(this, FieldSettings);

                    return _possibleConstructorReturn(this, (FieldSettings.__proto__ || Object.getPrototypeOf(FieldSettings)).apply(this, arguments));
                }

                return FieldSettings;
            }(ChildProperty));

            __decorate([Property()], FieldSettings.prototype, "text", void 0);
            __decorate([Property()], FieldSettings.prototype, "value", void 0);
            __decorate([Property()], FieldSettings.prototype, "iconCss", void 0);
            __decorate([Property()], FieldSettings.prototype, "groupBy", void 0);

            _export('dropDownBaseClasses', dropDownBaseClasses = {
                root: 'e-dropdownbase',
                rtl: 'e-rtl',
                content: 'e-content',
                selected: 'e-active',
                hover: 'e-hover',
                noData: 'e-nodata',
                fixedHead: 'e-fixed-head',
                focus: 'e-item-focus',
                li: cssClass.li,
                group: cssClass.group,
                disabled: cssClass.disabled,
                grouping: 'e-dd-group'
            });

            _export('DropDownBase', DropDownBase = function (_Component) {
                _inherits(DropDownBase, _Component);

                /**
                 * * Constructor for DropDownBase class
                 */
                function DropDownBase(options, element) {
                    _classCallCheck(this, DropDownBase);

                    return _possibleConstructorReturn(this, (DropDownBase.__proto__ || Object.getPrototypeOf(DropDownBase)).call(this, options, element));
                }

                _createClass(DropDownBase, [{
                    key: 'getPropObject',
                    value: function getPropObject(prop, newProp, oldProp) {
                        var newProperty = new Object();
                        var oldProperty = new Object();
                        // tslint:disable-next-line:no-function-constructor-with-string-args
                        var propName = new Function('prop', 'return prop');
                        newProperty[propName(prop)] = newProp[propName(prop)];
                        oldProperty[propName(prop)] = oldProp[propName(prop)];
                        var data = new Object();
                        data.newProperty = newProperty;
                        data.oldProperty = oldProperty;
                        return data;
                    }
                }, {
                    key: 'getValueByText',
                    value: function getValueByText(text, ignoreCase, ignoreAccent) {
                        var value = null;
                        if (!isNullOrUndefined(this.listData)) {
                            if (ignoreCase) {
                                value = this.checkValueCase(text, true, ignoreAccent);
                            } else {
                                value = this.checkValueCase(text, false, ignoreAccent);
                            }
                        }
                        return value;
                    }
                }, {
                    key: 'checkValueCase',
                    value: function checkValueCase(text, ignoreCase, ignoreAccent, isTextByValue) {
                        var _this3 = this;

                        var value = null;
                        if (isTextByValue) {
                            value = text;
                        }
                        var dataSource = this.listData;
                        var fields = this.fields;
                        var type = this.typeOfData(dataSource).typeof;
                        if (type === 'string' || type === 'number') {
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = dataSource[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var item = _step.value;

                                    if (!isNullOrUndefined(item)) {
                                        if (ignoreAccent) {
                                            value = this.checkingAccent(String(item), text, ignoreCase);
                                        } else {
                                            if (ignoreCase) {
                                                if (this.checkIgnoreCase(String(item), text)) {
                                                    value = this.getItemValue(String(item), text, ignoreCase);
                                                }
                                            } else {
                                                if (this.checkNonIgnoreCase(String(item), text)) {
                                                    value = this.getItemValue(String(item), text, ignoreCase, isTextByValue);
                                                }
                                            }
                                        }
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
                        } else {
                            if (ignoreCase) {
                                dataSource.filter(function (item) {
                                    if (_this3.checkIgnoreCase(getValue(fields.text, item).toString(), text)) {
                                        value = getValue(fields.value, item);
                                    }
                                });
                            } else {
                                if (isTextByValue) {
                                    dataSource.filter(function (item) {
                                        var itemValue = getValue(fields.value, item);
                                        if (!isNullOrUndefined(itemValue) && _this3.stringTrim(itemValue) === value.toString()) {
                                            value = getValue(fields.text, item);
                                        }
                                    });
                                } else {
                                    dataSource.filter(function (item) {
                                        if (_this3.checkNonIgnoreCase(getValue(fields.text, item), text)) {
                                            value = getValue(fields.value, item);
                                        }
                                    });
                                }
                            }
                        }
                        return value;
                    }
                }, {
                    key: 'checkingAccent',
                    value: function checkingAccent(item, text, ignoreCase) {
                        var dataItem = DataUtil.ignoreDiacritics(String(item));
                        var textItem = DataUtil.ignoreDiacritics(text.toString());
                        var value = null;
                        if (ignoreCase) {
                            if (this.checkIgnoreCase(dataItem, textItem)) {
                                value = this.getItemValue(String(item), text, ignoreCase);
                            }
                        } else {
                            if (this.checkNonIgnoreCase(String(item), text)) {
                                value = this.getItemValue(String(item), text, ignoreCase);
                            }
                        }
                        return value;
                    }
                }, {
                    key: 'checkIgnoreCase',
                    value: function checkIgnoreCase(item, text) {
                        return String(item).toLowerCase() === text.toString().toLowerCase() ? true : false;
                    }
                }, {
                    key: 'checkNonIgnoreCase',
                    value: function checkNonIgnoreCase(item, text) {
                        return String(item) === text.toString() ? true : false;
                    }
                }, {
                    key: 'getItemValue',
                    value: function getItemValue(dataItem, typedText, ignoreCase, isTextByValue) {
                        var value = null;
                        var dataSource = this.listData;
                        var type = this.typeOfData(dataSource).typeof;
                        if (isTextByValue) {
                            value = dataItem.toString();
                        } else {
                            if (ignoreCase) {
                                value = type === 'string' ? String(dataItem) : this.getFormattedValue(String(dataItem));
                            } else {
                                value = type === 'string' ? typedText : this.getFormattedValue(typedText);
                            }
                        }
                        return value;
                    }
                }, {
                    key: 'l10nUpdate',
                    value: function l10nUpdate(actionFailure) {
                        if (this.noRecordsTemplate !== 'No Records Found' || this.actionFailureTemplate !== 'The Request Failed') {
                            var template = actionFailure ? this.actionFailureTemplate : this.noRecordsTemplate;
                            var compiledString = void 0;
                            this.list.innerHTML = '';
                            compiledString = compile(template);
                            var _iteratorNormalCompletion2 = true;
                            var _didIteratorError2 = false;
                            var _iteratorError2 = undefined;

                            try {
                                for (var _iterator2 = compiledString({})[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    var item = _step2.value;

                                    this.list.appendChild(item);
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
                        } else {
                            var l10nLocale = { noRecordsTemplate: 'No Records Found', actionFailureTemplate: 'The Request Failed' };
                            this.l10n = new L10n('dropdowns', l10nLocale, this.locale);
                            this.list.innerHTML = actionFailure ? this.l10n.getConstant('actionFailureTemplate') : this.l10n.getConstant('noRecordsTemplate');
                        }
                    }
                }, {
                    key: 'getTextByValue',
                    value: function getTextByValue(value) {
                        var text = void 0;
                        text = this.checkValueCase(value, false, false, true);
                        return text;
                    }
                }, {
                    key: 'stringTrim',
                    value: function stringTrim(item) {
                        if (!isNullOrUndefined(item)) {
                            var itemValue = item.toString();
                            return itemValue.trim();
                        }
                        return item.toString();
                    }
                }, {
                    key: 'getFormattedValue',
                    value: function getFormattedValue(value) {
                        if (this.listData && this.listData.length) {
                            var item = this.typeOfData(this.listData);
                            if (typeof getValue(this.fields.value ? this.fields.value : 'value', item.item) === 'number' || item.typeof === 'number') {
                                return parseInt(value, 10);
                            }
                            var val = this.fields.value ? this.fields.value : 'value';
                            if (typeof getValue(val, item.item) === 'boolean' || item.typeof === 'boolean') {
                                return value === 'true';
                            }
                        }
                        return value;
                    }
                }, {
                    key: 'setEnableRtl',
                    value: function setEnableRtl() {
                        if (this.list) {
                            this.enableRtlElements.push(this.list);
                        }
                        this.enableRtl ? addClass(this.enableRtlElements, dropDownBaseClasses.rtl) : removeClass(this.enableRtlElements, dropDownBaseClasses.rtl);
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        this.bindEvent = true;
                        if (this.element.tagName === 'UL') {
                            var jsonElement = ListBase.createJsonFromElement(this.element);
                            this.setProperties({ fields: { text: 'text', value: 'text' } }, true);
                            this.resetList(jsonElement, this.fields);
                        } else if (this.element.tagName === 'SELECT') {
                            var dataSource = this.dataSource instanceof Array ? this.dataSource.length > 0 ? true : false : !isNullOrUndefined(this.dataSource) ? true : false;
                            if (!dataSource) {
                                this.renderItemsBySelect();
                            }
                        } else {
                            this.setListData(this.dataSource, this.fields, this.query);
                        }
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist([]);
                    }
                }, {
                    key: 'setEnabled',
                    value: function setEnabled() {
                        if (this.enabled) {
                            this.element.setAttribute('aria-disabled', 'false');
                        } else {
                            this.element.setAttribute('aria-disabled', 'true');
                        }
                    }
                }, {
                    key: 'renderItemsBySelect',
                    value: function renderItemsBySelect() {
                        var element = this.element;
                        var fields = { value: 'value', text: 'text' };
                        var jsonElement = [];
                        var group = element.querySelectorAll('select>optgroup');
                        var option = element.querySelectorAll('select>option');
                        this.getJSONfromOption(jsonElement, option, fields);
                        if (group.length) {
                            for (var i = 0; i < group.length; i++) {
                                var item = group[i];
                                var optionGroup = {};
                                optionGroup[fields.text] = item.label;
                                optionGroup.isHeader = true;
                                var child = item.querySelectorAll('option');
                                jsonElement.push(optionGroup);
                                this.getJSONfromOption(jsonElement, child, fields);
                            }
                            var items = element.querySelectorAll('select>option');
                        }
                        this.fields.text = fields.text;
                        this.fields.value = fields.value;
                        this.resetList(jsonElement, fields);
                    }
                }, {
                    key: 'getJSONfromOption',
                    value: function getJSONfromOption(items, options, fields) {
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var option = _step3.value;

                                var json = {};
                                json[fields.text] = option.innerText;
                                json[fields.value] = option.getAttribute(fields.value) ? option.getAttribute(fields.value) : option.innerText;
                                items.push(json);
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
                        // there is no event handler
                        this.scrollTimer = -1;
                        this.enableRtlElements = [];
                        this.isRequested = false;
                    }
                }, {
                    key: 'setListData',
                    value: function setListData(dataSource, fields, query) {
                        var _this4 = this;

                        fields = fields ? fields : this.fields;
                        var ulElement = void 0;
                        this.isActive = true;
                        if (dataSource instanceof DataManager) {
                            var eventArgs = { cancel: false, data: dataSource, query: query };
                            this.trigger('actionBegin', eventArgs);
                            if (eventArgs.cancel) {
                                return;
                            }
                            this.showSpinner();
                            this.isRequested = true;
                            eventArgs.data.executeQuery(this.getQuery(eventArgs.query)).then(function (e) {
                                _this4.trigger('actionComplete', e);
                                if (e.cancel) {
                                    return;
                                }
                                var listItems = e.result;
                                ulElement = _this4.renderItems(listItems, fields);
                                _this4.onActionComplete(ulElement, listItems, e);
                                _this4.isRequested = false;
                                _this4.hideSpinner();
                                _this4.trigger('dataBound', { items: listItems, e: e });
                            }).catch(function (e) {
                                _this4.isRequested = false;
                                _this4.onActionFailure(e);
                                _this4.hideSpinner();
                            });
                        } else {
                            this.showSpinner();
                            var dataManager = new DataManager(dataSource);
                            var listItems = this.getQuery(query).executeLocal(dataManager);
                            ulElement = this.renderItems(listItems, fields);
                            this.onActionComplete(ulElement, listItems);
                            this.hideSpinner();
                            this.trigger('dataBound', { items: listItems });
                        }
                    }
                }, {
                    key: 'showSpinner',
                    value: function showSpinner() {
                        // Used this method in component side.
                    }
                }, {
                    key: 'hideSpinner',
                    value: function hideSpinner() {
                        // Used this method in component side.
                    }
                }, {
                    key: 'onActionFailure',
                    value: function onActionFailure(e) {
                        this.liCollections = [];
                        this.trigger('actionFailure', e);
                        this.l10nUpdate(true);
                        addClass([this.list], dropDownBaseClasses.noData);
                    }
                }, {
                    key: 'onActionComplete',
                    value: function onActionComplete(ulElement, list, e) {
                        this.listData = list;
                        this.list.innerHTML = '';
                        this.list.appendChild(ulElement);
                        this.liCollections = this.list.querySelectorAll('.' + dropDownBaseClasses.li);
                        this.ulElement = this.list.querySelector('ul');
                        this.postRender(this.list, list, this.bindEvent);
                    }
                }, {
                    key: 'postRender',
                    value: function postRender(listElement, list, bindEvent) {
                        var focusItem = listElement.querySelector('.' + dropDownBaseClasses.li);
                        var selectedItem = listElement.querySelector('.' + dropDownBaseClasses.selected);
                        if (focusItem && !selectedItem) {
                            addClass([focusItem], dropDownBaseClasses.focus);
                        }
                        if (list.length <= 0) {
                            this.l10nUpdate();
                            addClass([listElement], dropDownBaseClasses.noData);
                        } else {
                            listElement.classList.remove(dropDownBaseClasses.noData);
                        }
                        if (this.groupTemplate) {
                            this.renderGroupTemplate(listElement);
                        }
                    }
                }, {
                    key: 'getQuery',
                    value: function getQuery(query) {
                        return query ? query : this.query ? this.query : new Query();
                    }
                }, {
                    key: 'renderGroupTemplate',
                    value: function renderGroupTemplate(listEle) {
                        if (this.fields.groupBy !== null && this.dataSource || this.element.querySelector('.' + dropDownBaseClasses.group)) {
                            var dataSource = this.dataSource;
                            var headerItems = listEle.querySelectorAll('.' + dropDownBaseClasses.group);
                            var tempHeaders = ListBase.renderGroupTemplate(this.groupTemplate, dataSource, this.fields.properties, headerItems);
                        }
                    }
                }, {
                    key: 'createListItems',
                    value: function createListItems(dataSource, fields) {
                        if (dataSource && fields.groupBy || this.element.querySelector('optgroup')) {
                            if (fields.groupBy) {
                                if (this.sortOrder !== 'None') {
                                    dataSource = this.getSortedDataSource(dataSource);
                                }
                                dataSource = ListBase.groupDataSource(dataSource, fields.properties, this.sortOrder);
                            }
                            addClass([this.list], dropDownBaseClasses.grouping);
                        } else {
                            dataSource = this.getSortedDataSource(dataSource);
                        }
                        var options = this.listOption(dataSource, fields);
                        return ListBase.createList(dataSource, options, true);
                    }
                }, {
                    key: 'listOption',
                    value: function listOption(dataSource, fields) {
                        var iconCss = isNullOrUndefined(fields.iconCss) ? false : true;
                        var options = fields.text !== null || fields.value !== null ? {
                            fields: fields.properties,
                            showIcon: iconCss, ariaAttributes: { groupItemRole: 'presentation' }
                        } : { fields: { value: 'text' } };
                        return extend({}, options, fields, true);
                    }
                }, {
                    key: 'setFloatingHeader',
                    value: function setFloatingHeader(e) {
                        if (isNullOrUndefined(this.fixedHeaderElement)) {
                            this.fixedHeaderElement = createElement('div', { className: dropDownBaseClasses.fixedHead });
                            if (!this.list.querySelector('li').classList.contains(dropDownBaseClasses.group)) {
                                this.fixedHeaderElement.style.display = 'none';
                            }
                            prepend([this.fixedHeaderElement], this.list);
                            this.setFixedHeader();
                        }
                        if (!isNullOrUndefined(this.fixedHeaderElement) && this.fixedHeaderElement.style.zIndex === '0') {
                            this.setFixedHeader();
                        }
                        this.scrollStop(e);
                    }
                }, {
                    key: 'scrollStop',
                    value: function scrollStop(e) {
                        var target = e.target;
                        var liHeight = parseInt(getComputedStyle(this.liCollections[0], null).getPropertyValue('height'), 10);
                        var topIndex = Math.round(target.scrollTop / liHeight);
                        var liCollections = this.ulElement.querySelectorAll('li');
                        for (var i = topIndex; i > -1; i--) {
                            if (!isNullOrUndefined(liCollections[i]) && liCollections[i].classList.contains(dropDownBaseClasses.group)) {
                                var currentLi = liCollections[i];
                                this.fixedHeaderElement.innerHTML = currentLi.innerHTML;
                                this.fixedHeaderElement.style.display = 'block';
                                break;
                            } else {
                                this.fixedHeaderElement.style.display = 'none';
                            }
                        }
                    }
                }, {
                    key: 'renderItems',
                    value: function renderItems(listData, fields) {
                        var ulElement = void 0;
                        if (this.itemTemplate && listData) {
                            var dataSource = listData;
                            if (dataSource && fields.groupBy) {
                                dataSource = ListBase.groupDataSource(dataSource, fields.properties, this.sortOrder);
                            } else {
                                dataSource = this.getSortedDataSource(dataSource);
                            }
                            ulElement = this.templateListItem(dataSource, fields);
                        } else {
                            ulElement = this.createListItems(listData, fields);
                        }
                        return ulElement;
                    }
                }, {
                    key: 'templateListItem',
                    value: function templateListItem(dataSource, fields) {
                        var option = this.listOption(dataSource, fields);
                        return ListBase.renderContentTemplate(this.itemTemplate, dataSource, fields.properties, option);
                    }
                }, {
                    key: 'typeOfData',
                    value: function typeOfData(items) {
                        var item = { typeof: null, item: null };
                        for (var i = 0; !isNullOrUndefined(items) && i < items.length; i++) {
                            if (!isNullOrUndefined(items[i])) {
                                return item = { typeof: _typeof(items[i]), item: items[i] };
                            }
                        }
                        return item;
                    }
                }, {
                    key: 'setFixedHeader',
                    value: function setFixedHeader() {
                        this.list.parentElement.style.display = 'block';
                        var liWidth = this.liCollections[0].offsetWidth;
                        this.fixedHeaderElement.style.width = liWidth.toString() + 'px';
                        setStyleAttribute(this.fixedHeaderElement, { zIndex: 10 });
                        var firstLi = this.ulElement.querySelector('.' + dropDownBaseClasses.group);
                        this.fixedHeaderElement.innerHTML = firstLi.innerHTML;
                    }
                }, {
                    key: 'getSortedDataSource',
                    value: function getSortedDataSource(dataSource) {
                        if (dataSource && this.sortOrder !== 'None') {
                            var textField = this.fields.text ? this.fields.text : 'text';
                            dataSource = ListBase.getDataSource(dataSource, ListBase.addSorting(this.sortOrder, textField));
                        }
                        return dataSource;
                    }
                }, {
                    key: 'getIndexByValue',
                    value: function getIndexByValue(value) {
                        var index = void 0;
                        var listItems = this.getItems();
                        for (var i = 0; i < listItems.length; i++) {
                            if (!isNullOrUndefined(value) && listItems[i].getAttribute('data-value') === value.toString()) {
                                index = i;
                                break;
                            }
                        }
                        return index;
                    }
                }, {
                    key: 'dispatchEvent',
                    value: function dispatchEvent(element, type) {
                        var evt = document.createEvent('HTMLEvents');
                        evt.initEvent(type, false, true);
                        element.dispatchEvent(evt);
                    }
                }, {
                    key: 'setFields',
                    value: function setFields() {
                        var fields = this.fields;
                        if (this.fields.value && !this.fields.text) {
                            this.fields.text = this.fields.value;
                        } else if (!fields.value && fields.text) {
                            this.fields.value = this.fields.text;
                        } else if (!this.fields.value && !this.fields.text) {
                            this.fields.value = this.fields.text = 'text';
                        }
                    }
                }, {
                    key: 'resetList',
                    value: function resetList(dataSource, fields, query) {
                        if (this.list) {
                            this.setListData(dataSource, fields, query);
                        }
                    }
                }, {
                    key: 'updateSelection',
                    value: function updateSelection() {
                        // This is for after added the item, need to update the selected index values.
                    }
                }, {
                    key: 'renderList',
                    value: function renderList() {
                        // This is for render the list items.
                        this.render();
                    }
                }, {
                    key: 'updateDataSource',
                    value: function updateDataSource(prop) {
                        this.resetList(this.dataSource);
                    }
                }, {
                    key: 'setUpdateInitial',
                    value: function setUpdateInitial(props, newProp) {
                        if (!isNullOrUndefined(newProp.fields)) {
                            this.setFields();
                        }
                        for (var j = 0; props.length > j; j++) {
                            if (newProp[props[j]]) {
                                this.updateDataSource(props[j]);
                            }
                        }
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        this.setUpdateInitial(['query', 'sortOrder', 'dataSource', 'itemTemplate'], newProp);
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = Object.keys(newProp)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var prop = _step4.value;

                                switch (prop) {
                                    case 'query':
                                    case 'sortOrder':
                                    case 'dataSource':
                                    case 'itemTemplate':
                                        break;
                                    case 'enableRtl':
                                        this.setEnableRtl();
                                        break;
                                    case 'enabled':
                                        this.setEnabled();
                                        break;
                                    case 'groupTemplate':
                                        this.renderGroupTemplate(this.list);
                                        break;
                                    case 'locale':
                                        if (this.list && !isNullOrUndefined(this.liCollections) && this.liCollections.length === 0) {
                                            this.l10nUpdate();
                                        }
                                        break;
                                    case 'zIndex':
                                        this.setProperties({ zIndex: newProp.zIndex }, true);
                                        this.setZIndex();
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
                    }
                }, {
                    key: 'render',
                    value: function render(isEmptyData) {
                        this.list = createElement('div', { className: dropDownBaseClasses.content, attrs: { 'tabindex': '0' } });
                        this.list.classList.add(dropDownBaseClasses.root);
                        this.setFields();
                        var rippleModel = { duration: 300, selector: '.' + dropDownBaseClasses.li };
                        this.rippleFun = rippleEffect(this.list, rippleModel);
                        var group = this.element.querySelector('select>optgroup');
                        if (this.fields.groupBy || !isNullOrUndefined(group)) {
                            EventHandler.add(this.list, 'scroll', this.setFloatingHeader, this);
                        }
                        if (this.getModuleName() === 'dropdownbase') {
                            if (this.element.getAttribute('tabindex')) {
                                this.list.setAttribute('tabindex', this.element.getAttribute('tabindex'));
                            }
                            removeClass([this.element], dropDownBaseClasses.root);
                            this.element.style.display = 'none';
                            var wrapperElement = document.createElement('div');
                            this.element.parentElement.insertBefore(wrapperElement, this.element);
                            wrapperElement.appendChild(this.element);
                            wrapperElement.appendChild(this.list);
                        }
                        this.setEnableRtl();
                        this.setEnabled();
                        if (!isEmptyData) {
                            this.initialize();
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'dropdownbase';
                    }
                }, {
                    key: 'getItems',
                    value: function getItems() {
                        return this.ulElement.querySelectorAll('.' + dropDownBaseClasses.li);
                    }
                }, {
                    key: 'addItem',
                    value: function addItem(items, itemIndex) {
                        if (!this.list || this.list.textContent === this.noRecordsTemplate) {
                            this.renderList();
                        }
                        var itemsCount = this.getItems().length;
                        var selectedItemValue = this.list.querySelector('.' + dropDownBaseClasses.selected);
                        items = items instanceof Array ? items : [items];
                        var index = void 0;
                        index = isNullOrUndefined(itemIndex) || itemIndex < 0 || itemIndex > itemsCount - 1 ? itemsCount : itemIndex;
                        var fields = this.fields;
                        var liCollections = [];
                        for (var i = 0; i < items.length; i++) {
                            var item = items[i];
                            var li = createElement('li', { className: dropDownBaseClasses.li, id: 'option-add-' + i });
                            li.setAttribute('data-value', getValue(fields.value, item));
                            li.setAttribute('role', 'option');
                            li.appendChild(document.createTextNode(getValue(fields.text, item)));
                            liCollections.push(li);
                            this.listData.push(item);
                            this.updateActionCompleteData(li, item);
                        }
                        if (itemsCount === 0 && isNullOrUndefined(this.list.querySelector('ul'))) {
                            this.list.innerHTML = '';
                            this.list.appendChild(this.ulElement);
                            append(liCollections, this.ulElement);
                        } else {
                            for (var _i2 = 0; _i2 < items.length; _i2++) {
                                if (this.liCollections[index]) {
                                    this.liCollections[index].parentNode.insertBefore(liCollections[_i2], this.liCollections[index]);
                                } else {
                                    this.ulElement.appendChild(liCollections[_i2]);
                                }
                                var tempLi = [].slice.call(this.liCollections);
                                tempLi.splice(index, 0, liCollections[_i2]);
                                this.liCollections = tempLi;
                                index += 1;
                            }
                        }
                        if (selectedItemValue || itemIndex === 0) {
                            this.updateSelection();
                        }
                    }
                }, {
                    key: 'setZIndex',
                    value: function setZIndex() {
                        // this is for component wise
                    }
                }, {
                    key: 'updateActionCompleteData',
                    value: function updateActionCompleteData(li, item) {}
                    // this is for ComboBox custom value

                    /**
                     * Gets the data Object that matches the given value.
                     * @param { string | number } value - Specifies the value of the list item.
                     * @returns Object.
                     */

                }, {
                    key: 'getDataByValue',
                    value: function getDataByValue(value) {
                        if (!isNullOrUndefined(this.listData)) {
                            var type = this.typeOfData(this.listData).typeof;
                            if (type === 'string' || type === 'number') {
                                var _iteratorNormalCompletion5 = true;
                                var _didIteratorError5 = false;
                                var _iteratorError5 = undefined;

                                try {
                                    for (var _iterator5 = this.listData[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                        var item = _step5.value;

                                        if (!isNullOrUndefined(item) && item === value) {
                                            return item;
                                        }
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
                            } else {
                                var _iteratorNormalCompletion6 = true;
                                var _didIteratorError6 = false;
                                var _iteratorError6 = undefined;

                                try {
                                    for (var _iterator6 = this.listData[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                        var _item = _step6.value;

                                        if (!isNullOrUndefined(_item) && getValue(this.fields.value ? this.fields.value : 'value', _item) === value) {
                                            return _item;
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
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (document.body.contains(this.list)) {
                            EventHandler.remove(this.list, 'scroll', this.setFloatingHeader);
                            if (!isNullOrUndefined(this.rippleFun)) {
                                this.rippleFun();
                            }
                            detach(this.list);
                        }
                        _get(DropDownBase.prototype.__proto__ || Object.getPrototypeOf(DropDownBase.prototype), 'destroy', this).call(this);
                    }
                }]);

                return DropDownBase;
            }(Component));

            __decorate([Complex({ text: null, value: null, iconCss: null, groupBy: null }, FieldSettings)], DropDownBase.prototype, "fields", void 0);
            __decorate([Property(false)], DropDownBase.prototype, "enableRtl", void 0);
            __decorate([Property(false)], DropDownBase.prototype, "enablePersistence", void 0);
            __decorate([Property(null)], DropDownBase.prototype, "itemTemplate", void 0);
            __decorate([Property(null)], DropDownBase.prototype, "groupTemplate", void 0);
            __decorate([Property('No Records Found')], DropDownBase.prototype, "noRecordsTemplate", void 0);
            __decorate([Property('The Request Failed')], DropDownBase.prototype, "actionFailureTemplate", void 0);
            __decorate([Property('None')], DropDownBase.prototype, "sortOrder", void 0);
            __decorate([Property(true)], DropDownBase.prototype, "enabled", void 0);
            __decorate([Property([])], DropDownBase.prototype, "dataSource", void 0);
            __decorate([Property(null)], DropDownBase.prototype, "query", void 0);
            __decorate([Property(1000)], DropDownBase.prototype, "zIndex", void 0);
            __decorate([Property(false)], DropDownBase.prototype, "ignoreAccent", void 0);
            __decorate([Event()], DropDownBase.prototype, "actionBegin", void 0);
            __decorate([Event()], DropDownBase.prototype, "actionComplete", void 0);
            __decorate([Event()], DropDownBase.prototype, "actionFailure", void 0);
            __decorate([Event()], DropDownBase.prototype, "select", void 0);
            __decorate([Event()], DropDownBase.prototype, "dataBound", void 0);
            __decorate([Event()], DropDownBase.prototype, "created", void 0);
            __decorate([Event()], DropDownBase.prototype, "destroyed", void 0);
            _export('DropDownBase', DropDownBase = __decorate([NotifyPropertyChanges], DropDownBase));

            /**
             * export all modules from current location
             */

            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('dropDownListClasses', dropDownListClasses = {
                root: 'e-dropdownlist',
                hover: dropDownBaseClasses.hover,
                selected: dropDownBaseClasses.selected,
                rtl: dropDownBaseClasses.rtl,
                li: dropDownBaseClasses.li,
                disable: dropDownBaseClasses.disabled,
                base: dropDownBaseClasses.root,
                focus: dropDownBaseClasses.focus,
                input: 'e-input-group',
                inputFocus: 'e-input-focus',
                icon: 'e-input-group-icon e-ddl-icon',
                iconAnimation: 'e-icon-anim',
                value: 'e-input-value',
                device: 'e-ddl-device',
                backIcon: 'e-input-group-icon e-back-icon e-icons',
                filterBarClearIcon: 'e-input-group-icon e-clear-icon e-icons',
                filterInput: 'e-input-filter',
                filterParent: 'e-filter-parent',
                mobileFilter: 'e-ddl-device-filter',
                footer: 'e-ddl-footer',
                header: 'e-ddl-header',
                clearIcon: 'e-clear-icon',
                clearIconHide: 'e-clear-icon-hide',
                popupFullScreen: 'e-popup-full-page',
                disableIcon: 'e-ddl-disable-icon',
                hiddenElement: 'e-ddl-hidden'
            });

            inputObject = {
                container: null,
                buttons: []
            };

            _export('DropDownList', DropDownList = function (_DropDownBase) {
                _inherits(DropDownList, _DropDownBase);

                /**
                 * * Constructor for creating the DropDownList component.
                 */
                function DropDownList(options, element) {
                    _classCallCheck(this, DropDownList);

                    var _this5 = _possibleConstructorReturn(this, (DropDownList.__proto__ || Object.getPrototypeOf(DropDownList)).call(this, options, element));

                    _this5.previousValue = null;
                    return _this5;
                }

                _createClass(DropDownList, [{
                    key: 'preRender',
                    value: function preRender() {
                        this.element.style.opacity = '0';
                        this.initializeData();
                        _get(DropDownList.prototype.__proto__ || Object.getPrototypeOf(DropDownList.prototype), 'preRender', this).call(this);
                        this.activeIndex = this.index;
                        this.queryString = '';
                    }
                }, {
                    key: 'initializeData',
                    value: function initializeData() {
                        this.isPopupOpen = false;
                        this.isDocumentClick = false;
                        this.isInteracted = false;
                        this.isFilterFocus = false;
                        this.beforePopupOpen = false;
                        this.initial = true;
                        this.initRemoteRender = false;
                        this.isNotSearchList = false;
                        this.isTyped = false;
                        this.isSelected = false;
                        this.preventFocus = false;
                        this.preventAutoFill = false;
                        this.isValidKey = false;
                        this.typedString = '';
                        this.isEscapeKey = false;
                        this.isPreventBlur = false;
                        this.isTabKey = false;
                        this.actionCompleteData = { isUpdated: false };
                        this.prevSelectPoints = {};
                        this.isSelectCustom = false;
                        this.isDropDownClick = false;
                        this.preventAltUp = false;
                        this.isCustomFilter = false;
                        this.isSecondClick = false;
                        this.keyConfigure = {
                            tab: 'tab',
                            enter: '13',
                            escape: '27',
                            end: '35',
                            home: '36',
                            down: '40',
                            up: '38',
                            pageUp: '33',
                            pageDown: '34',
                            open: 'alt+40',
                            close: 'shift+tab',
                            hide: 'alt+38',
                            space: '32'
                        };
                    }
                }, {
                    key: 'setZIndex',
                    value: function setZIndex() {
                        if (this.popupObj) {
                            this.popupObj.setProperties({ 'zIndex': this.zIndex });
                        }
                    }
                }, {
                    key: 'renderList',
                    value: function renderList(isEmptyData) {
                        _get(DropDownList.prototype.__proto__ || Object.getPrototypeOf(DropDownList.prototype), 'render', this).call(this, isEmptyData);
                        this.wireListEvents();
                    }
                }, {
                    key: 'floatLabelChange',
                    value: function floatLabelChange() {
                        if (this.getModuleName() === 'dropdownlist' && this.floatLabelType === 'Auto') {
                            var floatElement = this.inputWrapper.container.querySelector('.e-float-text');
                            if (this.inputElement.value !== '' || this.isInteracted) {
                                classList(floatElement, ['e-label-top'], ['e-label-bottom']);
                            } else {
                                classList(floatElement, ['e-label-bottom'], ['e-label-top']);
                            }
                        }
                    }
                }, {
                    key: 'resetHandler',
                    value: function resetHandler(e) {
                        e.preventDefault();
                        this.clear(e);
                        this.onChangeEvent(e);
                    }
                }, {
                    key: 'resetFocusElement',
                    value: function resetFocusElement() {
                        this.removeHover();
                        this.removeSelection();
                        this.removeFocus();
                        this.list.scrollTop = 0;
                        if (this.getModuleName() !== 'autocomplete') {
                            var li = this.ulElement.querySelector('.' + dropDownListClasses.li);
                            if (li) {
                                li.classList.add(dropDownListClasses.focus);
                            }
                        }
                    }
                }, {
                    key: 'clear',
                    value: function clear(e, property, maintainVal) {
                        this.resetSelection(maintainVal);
                        var dataItem = this.getItemData();
                        if (this.previousValue === dataItem.value) {
                            return;
                        }
                        this.onChangeEvent(e);
                    }
                }, {
                    key: 'resetSelection',
                    value: function resetSelection(maintainVal) {
                        if (this.list) {
                            if (this.allowFiltering && this.getModuleName() !== 'autocomplete') {
                                this.onActionComplete(this.actionCompleteData.ulElement.cloneNode(true), this.actionCompleteData.list);
                            }
                            this.resetFocusElement();
                        }
                        this.hiddenElement.innerHTML = '';
                        this.inputElement.value = '';
                        if (!maintainVal) {
                            this.value = null;
                            this.itemData = null;
                        }
                        this.text = null;
                        this.index = null;
                        this.activeIndex = null;
                        this.item = null;
                        this.queryString = '';
                        if (this.valueTempElement) {
                            detach(this.valueTempElement);
                            this.inputElement.style.display = 'block';
                            this.valueTempElement = null;
                        }
                        this.setSelection(null, null);
                        this.isSelectCustom = false;
                        this.updateIconState();
                    }
                }, {
                    key: 'setHTMLAttributes',
                    value: function setHTMLAttributes() {
                        if (Object.keys(this.htmlAttributes).length) {
                            var _iteratorNormalCompletion7 = true;
                            var _didIteratorError7 = false;
                            var _iteratorError7 = undefined;

                            try {
                                for (var _iterator7 = Object.keys(this.htmlAttributes)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                    var htmlAttr = _step7.value;

                                    if (htmlAttr === 'class') {
                                        this.inputWrapper.container.classList.add(this.htmlAttributes[htmlAttr]);
                                    } else if (htmlAttr === 'disabled' && this.htmlAttributes[htmlAttr] === 'disabled') {
                                        this.enabled = false;
                                        this.setEnable();
                                    } else if (htmlAttr === 'readonly' && this.htmlAttributes[htmlAttr] === 'readonly') {
                                        this.readonly = true;
                                        this.dataBind();
                                    } else if (htmlAttr === 'style') {
                                        this.inputWrapper.container.setAttribute('style', this.htmlAttributes[htmlAttr]);
                                    } else {
                                        var defaultAttr = ['title', 'id', 'placeholder'];
                                        var validateAttr = ['name', 'required'];
                                        if (validateAttr.indexOf(htmlAttr) > -1) {
                                            this.hiddenElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                                        } else if (defaultAttr.indexOf(htmlAttr) > -1) {
                                            htmlAttr === 'placeholder' ? Input.setPlaceholder(this.htmlAttributes[htmlAttr], this.inputElement) : this.element.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                                        } else {
                                            this.inputWrapper.container.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
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
                    }
                }, {
                    key: 'getAriaAttributes',
                    value: function getAriaAttributes() {
                        return {
                            'aria-disabled': 'false',
                            'aria-owns': this.element.id + '_options',
                            'role': 'listbox',
                            'aria-haspopup': 'true',
                            'aria-expanded': 'false',
                            'aria-activedescendant': 'null',
                            'aria-labelledby': this.hiddenElement.id
                        };
                    }
                }, {
                    key: 'setEnableRtl',
                    value: function setEnableRtl() {
                        Input.setEnableRtl(this.enableRtl, [this.inputElement.parentElement]);
                        if (this.popupObj) {
                            this.popupObj.enableRtl = this.enableRtl;
                            this.popupObj.dataBind();
                        }
                    }
                }, {
                    key: 'setEnable',
                    value: function setEnable() {
                        Input.setEnabled(this.enabled, this.inputElement);
                        if (this.enabled) {
                            removeClass([this.inputWrapper.container], dropDownListClasses.disable);
                            this.inputElement.setAttribute('aria-disabled', 'false');
                            this.targetElement().setAttribute('tabindex', this.tabIndex);
                        } else {
                            this.hidePopup();
                            addClass([this.inputWrapper.container], dropDownListClasses.disable);
                            this.inputElement.setAttribute('aria-disabled', 'true');
                            this.targetElement().tabIndex = -1;
                        }
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist(['value']);
                    }
                }, {
                    key: 'preventTabIndex',
                    value: function preventTabIndex(element) {
                        if (this.getModuleName() === 'dropdownlist') {
                            element.tabIndex = -1;
                        }
                    }
                }, {
                    key: 'targetElement',
                    value: function targetElement() {
                        return this.inputWrapper.container;
                    }
                }, {
                    key: 'getNgDirective',
                    value: function getNgDirective() {
                        return 'EJS-DROPDOWNLIST';
                    }
                }, {
                    key: 'getElementByText',
                    value: function getElementByText(text) {
                        return this.getElementByValue(this.getValueByText(text));
                    }
                }, {
                    key: 'getElementByValue',
                    value: function getElementByValue(value) {
                        var item = void 0;
                        var listItems = this.getItems();
                        var _iteratorNormalCompletion8 = true;
                        var _didIteratorError8 = false;
                        var _iteratorError8 = undefined;

                        try {
                            for (var _iterator8 = listItems[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                var liItem = _step8.value;

                                if (this.getFormattedValue(liItem.getAttribute('data-value')) === value) {
                                    item = liItem;
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

                        return item;
                    }
                }, {
                    key: 'initValue',
                    value: function initValue() {
                        this.renderList();
                        if (this.dataSource instanceof DataManager) {
                            this.initRemoteRender = true;
                        } else {
                            this.updateValues();
                        }
                    }
                }, {
                    key: 'updateValues',
                    value: function updateValues() {
                        if (!isNullOrUndefined(this.value)) {
                            this.setSelection(this.getElementByValue(this.value), null);
                        } else if (this.text && isNullOrUndefined(this.value)) {
                            var element = this.getElementByText(this.text);
                            if (isNullOrUndefined(element)) {
                                this.setProperties({ text: null });
                                return;
                            } else {
                                this.setSelection(element, null);
                            }
                        } else {
                            this.setSelection(this.liCollections[this.activeIndex], null);
                        }
                        this.setHiddenValue();
                        Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
                    }
                }, {
                    key: 'onBlur',
                    value: function onBlur(e) {
                        var target = e.relatedTarget;
                        var currentTarget = e.target;
                        var isPreventBlur = this.isPreventBlur;
                        this.isPreventBlur = false;
                        //IE 11 - issue
                        if (isPreventBlur && !this.isDocumentClick && this.isPopupOpen && (!isNullOrUndefined(currentTarget) || !this.isFilterLayout() && isNullOrUndefined(target))) {
                            if (this.getModuleName() === 'dropdownlist' && this.allowFiltering && this.isPopupOpen) {
                                this.filterInput.focus();
                            } else {
                                this.targetElement().focus();
                            }
                            return;
                        }
                        if (this.isDocumentClick || !isNullOrUndefined(this.popupObj) && document.body.contains(this.popupObj.element) && this.popupObj.element.classList.contains(dropDownListClasses.mobileFilter)) {
                            if (!this.beforePopupOpen) {
                                this.isDocumentClick = false;
                            }
                            return;
                        }
                        if (this.getModuleName() === 'dropdownlist' && !this.isFilterFocus && target !== this.inputElement && (document.activeElement !== target || document.activeElement === target && currentTarget.classList.contains(dropDownListClasses.inputFocus)) || isNullOrUndefined(target) && this.getModuleName() === 'dropdownlist' && this.allowFiltering && currentTarget !== this.inputWrapper.container || this.getModuleName() !== 'dropdownlist' && !this.inputWrapper.container.contains(target) || this.isTabKey) {
                            this.isDocumentClick = this.isPopupOpen ? true : false;
                            this.focusOutAction();
                            this.isTabKey = false;
                        }
                        if (this.isRequested && !this.isPopupOpen && !this.isPreventBlur) {
                            this.isActive = false;
                            this.beforePopupOpen = false;
                        }
                    }
                }, {
                    key: 'focusOutAction',
                    value: function focusOutAction() {
                        this.isInteracted = false;
                        this.focusOut();
                        this.onFocusOut();
                    }
                }, {
                    key: 'onFocusOut',
                    value: function onFocusOut() {
                        if (this.isSelected) {
                            this.isSelectCustom = false;
                            this.onChangeEvent(null);
                        }
                        this.floatLabelChange();
                        this.dispatchEvent(this.hiddenElement, 'change');
                        if (this.inputWrapper.clearButton) {
                            addClass([this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
                        }
                        this.trigger('blur');
                    }
                }, {
                    key: 'onFocus',
                    value: function onFocus() {
                        if (!this.isInteracted) {
                            this.isInteracted = true;
                            this.trigger('focus');
                        }
                        this.updateIconState();
                    }
                }, {
                    key: 'wireEvent',
                    value: function wireEvent() {
                        EventHandler.add(this.inputWrapper.container, 'mousedown', this.dropDownClick, this);
                        EventHandler.add(this.inputWrapper.container, 'focus', this.focusIn, this);
                        EventHandler.add(this.inputWrapper.container, 'keypress', this.onSearch, this);
                        this.bindCommonEvent();
                    }
                }, {
                    key: 'bindCommonEvent',
                    value: function bindCommonEvent() {
                        EventHandler.add(this.targetElement(), 'blur', this.onBlur, this);
                        if (!Browser.isDevice) {
                            this.keyboardModule = new KeyboardEvents(this.targetElement(), {
                                keyAction: this.keyActionHandler.bind(this), keyConfigs: this.keyConfigure, eventName: 'keydown'
                            });
                        }
                        this.bindClearEvent();
                    }
                }, {
                    key: 'bindClearEvent',
                    value: function bindClearEvent() {
                        if (this.showClearButton) {
                            EventHandler.add(this.inputWrapper.clearButton, 'mousedown', this.resetHandler, this);
                        }
                    }
                }, {
                    key: 'unBindCommonEvent',
                    value: function unBindCommonEvent() {
                        EventHandler.remove(this.targetElement(), 'blur', this.onBlur);
                        if (!Browser.isDevice) {
                            this.keyboardModule.destroy();
                        }
                        if (this.showClearButton) {
                            EventHandler.remove(this.inputWrapper.clearButton, 'mousedown', this.resetHandler);
                        }
                    }
                }, {
                    key: 'updateIconState',
                    value: function updateIconState() {
                        if (this.showClearButton) {
                            if (this.inputElement.value !== '') {
                                removeClass([this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
                            } else {
                                addClass([this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
                            }
                        }
                    }
                }, {
                    key: 'wireListEvents',
                    value: function wireListEvents() {
                        EventHandler.add(this.list, 'click', this.onMouseClick, this);
                        EventHandler.add(this.list, 'mouseover', this.onMouseOver, this);
                        EventHandler.add(this.list, 'mouseout', this.onMouseLeave, this);
                    }
                }, {
                    key: 'onSearch',
                    value: function onSearch(e) {
                        if (e.charCode !== 32 && e.charCode !== 13) {
                            if (this.list === undefined) {
                                this.renderList();
                            }
                            this.searchKeyEvent = e;
                            if (!this.isRequested && !isNullOrUndefined(this.list.querySelector('li'))) {
                                this.incrementalSearch(e);
                            }
                        }
                    }
                }, {
                    key: 'onMouseClick',
                    value: function onMouseClick(e) {
                        var target = e.target;
                        var classList$$1 = target.classList;
                        var li = closest(target, '.' + dropDownBaseClasses.li);
                        if (!this.isValidLI(li)) {
                            return;
                        }
                        this.setSelection(li, e);
                        if (Browser.isDevice && this.isFilterLayout()) {
                            history.back();
                        } else {
                            var delay = 100;
                            this.closePopup(delay);
                        }
                    }
                }, {
                    key: 'onMouseOver',
                    value: function onMouseOver(e) {
                        var currentLi = closest(e.target, '.' + dropDownBaseClasses.li);
                        this.setHover(currentLi);
                    }
                }, {
                    key: 'setHover',
                    value: function setHover(li) {
                        if (this.enabled && this.isValidLI(li) && !li.classList.contains(dropDownBaseClasses.hover)) {
                            this.removeHover();
                            addClass([li], dropDownBaseClasses.hover);
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
                        var hoveredItem = this.list.querySelectorAll('.' + dropDownBaseClasses.hover);
                        if (hoveredItem && hoveredItem.length) {
                            removeClass(hoveredItem, dropDownBaseClasses.hover);
                        }
                    }
                }, {
                    key: 'isValidLI',
                    value: function isValidLI(li) {
                        return li && li.hasAttribute('role') && li.getAttribute('role') === 'option';
                    }
                }, {
                    key: 'incrementalSearch',
                    value: function incrementalSearch(e) {
                        if (this.liCollections.length > 0) {
                            var li = _incrementalSearch(e.charCode, this.liCollections, this.activeIndex, true);
                            if (!isNullOrUndefined(li)) {
                                this.setSelection(li, e);
                                this.setScrollPosition();
                            }
                        }
                    }
                }, {
                    key: 'hideSpinner',
                    value: function hideSpinner() {
                        if (!isNullOrUndefined(this.spinnerElement)) {
                            _hideSpinner(this.spinnerElement);
                            removeClass([this.spinnerElement], dropDownListClasses.disableIcon);
                            this.spinnerElement.innerHTML = '';
                            this.spinnerElement = null;
                        }
                    }
                }, {
                    key: 'showSpinner',
                    value: function showSpinner() {
                        if (isNullOrUndefined(this.spinnerElement)) {
                            this.spinnerElement = Browser.isDevice && !isNullOrUndefined(this.filterInputObj) && this.filterInputObj.buttons[1] || !isNullOrUndefined(this.filterInputObj) && this.filterInputObj.buttons[0] || this.inputWrapper.buttons[0];
                            addClass([this.spinnerElement], dropDownListClasses.disableIcon);
                            createSpinner({
                                target: this.spinnerElement,
                                width: Browser.isDevice ? '16px' : '14px'
                            });
                            _showSpinner(this.spinnerElement);
                        }
                    }
                }, {
                    key: 'keyActionHandler',
                    value: function keyActionHandler(e) {
                        var preventAction = e.action === 'pageUp' || e.action === 'pageDown';
                        var preventHomeEnd = this.getModuleName() !== 'dropdownlist' && (e.action === 'home' || e.action === 'end');
                        this.isEscapeKey = e.action === 'escape';
                        this.isTabKey = !this.isPopupOpen && e.action === 'tab';
                        var isNavigation = e.action === 'down' || e.action === 'up' || e.action === 'pageUp' || e.action === 'pageDown' || e.action === 'home' || e.action === 'end';
                        if ((this.isEditTextBox() || preventAction || preventHomeEnd) && !this.isPopupOpen) {
                            return;
                        }
                        if (!this.readonly) {
                            var isTabAction = e.action === 'tab' || e.action === 'close';
                            if (this.list === undefined && !this.isRequested && !isTabAction && e.action !== 'escape') {
                                this.searchKeyEvent = e;
                                this.renderList();
                            }
                            if (isNullOrUndefined(this.list) || !isNullOrUndefined(this.liCollections) && isNavigation && this.liCollections.length === 0 || this.isRequested) {
                                return;
                            }
                            if (isTabAction && this.isPopupOpen || e.action === 'escape') {
                                e.preventDefault();
                            }
                            this.isSelected = e.action === 'escape' ? false : this.isSelected;
                            this.isTyped = isNavigation || e.action === 'escape' ? false : this.isTyped;
                            switch (e.action) {
                                case 'down':
                                case 'up':
                                    var focusEle = this.list.querySelector('.' + dropDownListClasses.focus);
                                    if (this.isSelectFocusItem(focusEle)) {
                                        this.setSelection(focusEle, e);
                                    } else {
                                        var nextItem = void 0;
                                        var index = e.action === 'down' ? this.activeIndex + 1 : this.activeIndex - 1;
                                        var startIndex = 0;
                                        if (this.getModuleName() === 'autocomplete') {
                                            startIndex = e.action === 'down' && isNullOrUndefined(this.activeIndex) ? 0 : this.liCollections.length - 1;
                                            index = index < 0 ? this.liCollections.length - 1 : index === this.liCollections.length ? 0 : index;
                                        }
                                        nextItem = isNullOrUndefined(this.activeIndex) ? this.liCollections[startIndex] : this.liCollections[index];
                                        this.setSelection(nextItem, e);
                                    }
                                    e.preventDefault();
                                    break;
                                case 'pageUp':
                                    this.pageUpSelection(this.activeIndex - this.getPageCount(), e);
                                    e.preventDefault();
                                    break;
                                case 'pageDown':
                                    this.pageDownSelection(this.activeIndex + this.getPageCount(), e);
                                    e.preventDefault();
                                    break;
                                case 'home':
                                    if (this.getModuleName() === 'dropdownlist') {
                                        e.preventDefault();
                                        if (this.activeIndex === 0) {
                                            return;
                                        }
                                        this.setSelection(this.liCollections[0], e);
                                    }
                                    break;
                                case 'end':
                                    if (this.getModuleName() === 'dropdownlist') {
                                        e.preventDefault();
                                        var lastLi = this.getItems().length - 1;
                                        if (this.activeIndex === lastLi) {
                                            return;
                                        }
                                        this.setSelection(this.liCollections[lastLi], e);
                                    }
                                    break;
                                case 'space':
                                    if (this.getModuleName() === 'dropdownlist') {
                                        if (!this.beforePopupOpen) {
                                            this.showPopup();
                                        }
                                    }
                                    break;
                                case 'open':
                                    this.showPopup();
                                    break;
                                case 'hide':
                                    this.preventAltUp = this.isPopupOpen;
                                    this.hidePopup();
                                    this.focusDropDown(e);
                                    break;
                                case 'enter':
                                    this.selectCurrentItem(e);
                                    break;
                                case 'escape':
                                case 'tab':
                                case 'close':
                                    if (this.isPopupOpen) {
                                        this.hidePopup();
                                        this.focusDropDown(e);
                                    }
                                    break;
                            }
                        }
                    }
                }, {
                    key: 'selectCurrentItem',
                    value: function selectCurrentItem(e) {
                        if (this.isPopupOpen) {
                            var li = this.list.querySelector('.' + dropDownListClasses.focus);
                            if (li) {
                                this.setSelection(li, e);
                                this.isTyped = false;
                            }
                            if (this.isSelected) {
                                this.isSelectCustom = false;
                                this.onChangeEvent(e);
                            }
                            this.hidePopup();
                            this.focusDropDown(e);
                        } else {
                            this.showPopup();
                        }
                    }
                }, {
                    key: 'isSelectFocusItem',
                    value: function isSelectFocusItem(element) {
                        return !isNullOrUndefined(element);
                    }
                }, {
                    key: 'getPageCount',
                    value: function getPageCount() {
                        var liHeight = this.list.classList.contains(dropDownBaseClasses.noData) ? null : getComputedStyle(this.getItems()[0], null).getPropertyValue('height');
                        return Math.round(this.list.getBoundingClientRect().height / parseInt(liHeight, 10));
                    }
                }, {
                    key: 'pageUpSelection',
                    value: function pageUpSelection(steps, event) {
                        var previousItem = steps >= 0 ? this.liCollections[steps + 1] : this.liCollections[0];
                        this.setSelection(previousItem, event);
                    }
                }, {
                    key: 'pageDownSelection',
                    value: function pageDownSelection(steps, event) {
                        var list = this.getItems();
                        var previousItem = steps <= list.length ? this.liCollections[steps - 1] : this.liCollections[list.length - 1];
                        this.setSelection(previousItem, event);
                    }
                }, {
                    key: 'unWireEvent',
                    value: function unWireEvent() {
                        EventHandler.remove(this.inputWrapper.container, 'mousedown', this.dropDownClick);
                        EventHandler.remove(this.inputWrapper.container, 'keypress', this.onSearch);
                        EventHandler.remove(this.inputWrapper.container, 'focus', this.focusIn);
                        this.unBindCommonEvent();
                    }
                }, {
                    key: 'unWireListEvents',
                    value: function unWireListEvents() {
                        EventHandler.remove(this.list, 'click', this.onMouseClick);
                        EventHandler.remove(this.list, 'mouseover', this.onMouseOver);
                        EventHandler.remove(this.list, 'mouseout', this.onMouseLeave);
                    }
                }, {
                    key: 'onDocumentClick',
                    value: function onDocumentClick(e) {
                        var target = e.target;
                        if (!(!isNullOrUndefined(this.popupObj) && closest(target, '#' + this.popupObj.element.id)) && !this.inputWrapper.container.contains(e.target)) {
                            if (this.inputWrapper.container.classList.contains(dropDownListClasses.inputFocus) || this.isPopupOpen) {
                                this.isDocumentClick = true;
                                var isActive = this.isRequested;
                                this.isInteracted = false;
                                this.hidePopup();
                                if (!isActive) {
                                    this.onFocusOut();
                                    this.inputWrapper.container.classList.remove(dropDownListClasses.inputFocus);
                                }
                            }
                        } else if (target !== this.inputElement && !(this.allowFiltering && target === this.filterInput) && !(this.getModuleName() === 'combobox' && !this.allowFiltering && Browser.isDevice && target === this.inputWrapper.buttons[0])) {
                            this.isPreventBlur = (Browser.isIE || Browser.info.name === 'edge') && (document.activeElement === this.targetElement() || document.activeElement === this.filterInput);
                            e.preventDefault();
                        }
                    }
                }, {
                    key: 'activeStateChange',
                    value: function activeStateChange() {
                        if (this.isDocumentClick) {
                            this.hidePopup();
                            this.onFocusOut();
                            this.inputWrapper.container.classList.remove(dropDownListClasses.inputFocus);
                        }
                    }
                }, {
                    key: 'focusDropDown',
                    value: function focusDropDown(e) {
                        if (!this.initial && this.isFilterLayout()) {
                            this.focusIn();
                        }
                    }
                }, {
                    key: 'dropDownClick',
                    value: function dropDownClick(e) {
                        if (e.which === 3 || e.button === 2) {
                            return;
                        }
                        if (this.targetElement().classList.contains(dropDownListClasses.disable) || this.inputWrapper.clearButton === e.target) {
                            return;
                        }
                        var target = e.target;
                        if (target !== this.inputElement && !(this.allowFiltering && target === this.filterInput) && this.getModuleName() !== 'combobox') {
                            e.preventDefault();
                        }
                        if (!this.readonly) {
                            if (this.isPopupOpen) {
                                this.hidePopup();
                                if (this.isFilterLayout()) {
                                    this.focusDropDown(e);
                                }
                            } else {
                                this.focusIn();
                                this.floatLabelChange();
                                this.queryString = this.inputElement.value.trim() === '' ? null : this.inputElement.value;
                                this.isDropDownClick = true;
                                this.showPopup();
                            }
                            var proxy = this;
                            if (!this.isSecondClick) {
                                setTimeout(function () {
                                    proxy.cloneElements();
                                }, 100);
                            }
                        }
                    }
                }, {
                    key: 'cloneElements',
                    value: function cloneElements() {
                        if (this.list) {
                            var ulElement = this.list.querySelector('ul');
                            if (ulElement) {
                                ulElement = ulElement.cloneNode ? ulElement.cloneNode(true) : ulElement;
                                this.actionCompleteData.ulElement = ulElement;
                                this.isSecondClick = true;
                            }
                        }
                    }
                }, {
                    key: 'updateSelectedItem',
                    value: function updateSelectedItem(li, e, preventSelect) {
                        this.removeSelection();
                        li.classList.add(dropDownBaseClasses.selected);
                        this.removeHover();
                        var value = this.getFormattedValue(li.getAttribute('data-value'));
                        this.item = li;
                        this.itemData = this.getDataByValue(value);
                        if (!this.initial && !preventSelect) {
                            this.isSelected = true;
                            var eventArgs = {
                                e: e,
                                item: this.item,
                                itemData: this.itemData,
                                isInteracted: e ? true : false,
                                cancel: false
                            };
                            this.trigger('select', eventArgs);
                            if (eventArgs.cancel) {
                                return;
                            }
                        }
                        var focusedItem = this.list.querySelector('.' + dropDownBaseClasses.focus);
                        if (focusedItem) {
                            removeClass([focusedItem], dropDownBaseClasses.focus);
                        }
                        li.setAttribute('aria-selected', 'true');
                        this.activeIndex = this.getIndexByValue(value);
                    }
                }, {
                    key: 'activeItem',
                    value: function activeItem(li) {
                        if (this.isValidLI(li) && !li.classList.contains(dropDownBaseClasses.selected)) {
                            this.removeSelection();
                            li.classList.add(dropDownBaseClasses.selected);
                            this.removeHover();
                            li.setAttribute('aria-selected', 'true');
                        }
                    }
                }, {
                    key: 'setValue',
                    value: function setValue(e) {
                        var dataItem = this.getItemData();
                        if (dataItem.value === null) {
                            Input.setValue(null, this.inputElement, this.floatLabelType, this.showClearButton);
                        } else {
                            Input.setValue(dataItem.text, this.inputElement, this.floatLabelType, this.showClearButton);
                        }
                        if (this.previousValue === dataItem.value) {
                            this.isSelected = false;
                            return true;
                        } else {
                            this.isSelected = !this.initial ? true : false;
                            this.isSelectCustom = false;
                            if (this.getModuleName() === 'dropdownlist') {
                                this.updateIconState();
                            }
                            return false;
                        }
                    }
                }, {
                    key: 'setSelection',
                    value: function setSelection(li, e) {
                        if (this.isValidLI(li) && !li.classList.contains(dropDownBaseClasses.selected)) {
                            this.updateSelectedItem(li, e, false);
                        }
                        if (this.list) {
                            this.removeHover();
                        }
                        this.selectedLI = li;
                        if (this.setValue(e)) {
                            return;
                        }
                        if (this.valueTemplate && this.itemData !== null) {
                            this.setValueTemplate();
                        } else if (this.inputElement.previousSibling === this.valueTempElement) {
                            detach(this.valueTempElement);
                            this.inputElement.style.display = 'block';
                        }
                        if (this.isPopupOpen) {
                            attributes(this.targetElement(), { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
                            if (this.isFilterLayout()) {
                                attributes(this.filterInput, { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
                            }
                        }
                        if (!this.isPopupOpen && !isNullOrUndefined(li) || this.isPopupOpen && !isNullOrUndefined(e) && (e.type !== 'keydown' || e.type === 'keydown' && e.action === 'enter')) {
                            this.isSelectCustom = false;
                            this.onChangeEvent(e);
                        }
                        if (this.isPopupOpen && !isNullOrUndefined(this.selectedLI) && this.itemData !== null && (!e || e.type !== 'click')) {
                            this.setScrollPosition(e);
                        }
                    }
                }, {
                    key: 'setValueTemplate',
                    value: function setValueTemplate() {
                        var compiledString = void 0;
                        if (!this.valueTempElement) {
                            this.valueTempElement = createElement('span', { className: dropDownListClasses.value });
                            this.inputElement.parentElement.insertBefore(this.valueTempElement, this.inputElement);
                            this.inputElement.style.display = 'none';
                        }
                        this.valueTempElement.innerHTML = '';
                        compiledString = compile(this.valueTemplate);
                        var _iteratorNormalCompletion9 = true;
                        var _didIteratorError9 = false;
                        var _iteratorError9 = undefined;

                        try {
                            for (var _iterator9 = compiledString(this.itemData)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                var item = _step9.value;

                                this.valueTempElement.appendChild(item);
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
                }, {
                    key: 'removeSelection',
                    value: function removeSelection() {
                        var selectedItems = this.list.querySelectorAll('.' + dropDownBaseClasses.selected);
                        if (selectedItems.length) {
                            removeClass(selectedItems, dropDownBaseClasses.selected);
                            selectedItems[0].removeAttribute('aria-selected');
                        }
                    }
                }, {
                    key: 'getItemData',
                    value: function getItemData() {
                        var fields = this.fields;
                        var dataItem = {};
                        dataItem = this.itemData;
                        var dataValue = void 0;
                        var dataText = void 0;
                        if (!isNullOrUndefined(dataItem)) {
                            dataValue = getValue(fields.value, dataItem);
                            dataText = getValue(fields.text, dataItem);
                        }
                        var value = !isNullOrUndefined(dataItem) && !isUndefined(dataValue) ? dataValue : dataItem;
                        var text = !isNullOrUndefined(dataItem) && !isUndefined(dataValue) ? dataText : dataItem;
                        return { value: value, text: text };
                    }
                }, {
                    key: 'onChangeEvent',
                    value: function onChangeEvent(eve) {
                        var dataItem = this.getItemData();
                        var index = this.isSelectCustom ? null : this.activeIndex;
                        this.setProperties({ 'value': dataItem.value, 'index': index, 'text': dataItem.text }, true);
                        this.detachChangeEvent(eve);
                    }
                }, {
                    key: 'detachChangeEvent',
                    value: function detachChangeEvent(eve) {
                        this.isSelected = false;
                        this.previousValue = this.value;
                        this.activeIndex = this.index;
                        this.typedString = !isNullOrUndefined(this.text) ? this.text : '';
                        if (!this.initial) {
                            this.setHiddenValue();
                            var eventArgs = {
                                e: eve,
                                item: this.item,
                                itemData: this.itemData,
                                isInteracted: eve ? true : false,
                                value: this.value
                            };
                            this.trigger('change', eventArgs);
                        }
                    }
                }, {
                    key: 'setHiddenValue',
                    value: function setHiddenValue() {
                        if (!isNullOrUndefined(this.value)) {
                            this.hiddenElement.innerHTML = '<option selected>' + this.text + '</option>';
                            var selectedElement = this.hiddenElement.querySelector('option');
                            selectedElement.setAttribute('value', this.value.toString());
                        } else {
                            this.hiddenElement.innerHTML = '';
                        }
                    }
                }, {
                    key: 'onFilterUp',
                    value: function onFilterUp(e) {
                        this.isValidKey = e.keyCode === 40 || e.keyCode === 38 || this.isValidKey;
                        if (this.isValidKey) {
                            this.isValidKey = false;
                            switch (e.keyCode) {
                                case 38: //up arrow 
                                case 40:
                                    //down arrow 
                                    if (this.getModuleName() === 'autocomplete' && !this.isPopupOpen && !this.preventAltUp && !this.isRequested) {
                                        this.preventAutoFill = true;
                                        this.searchLists(e);
                                    } else {
                                        this.preventAutoFill = false;
                                    }
                                    this.preventAltUp = false;
                                    e.preventDefault();
                                    break;
                                case 46: //delete
                                case 8:
                                    //backspace
                                    this.typedString = this.filterInput.value;
                                    if (!this.isPopupOpen && this.typedString !== '' || this.isPopupOpen && this.queryString.length > 0) {
                                        this.preventAutoFill = true;
                                        this.searchLists(e);
                                    } else if (this.typedString === '') {
                                        this.resetFocusElement();
                                        this.activeIndex = null;
                                        if (this.getModuleName() === 'autocomplete') {
                                            this.hidePopup();
                                        }
                                    }
                                    e.preventDefault();
                                    break;
                                default:
                                    this.typedString = this.filterInput.value;
                                    this.preventAutoFill = false;
                                    this.searchLists(e);
                                    break;
                            }
                        }
                    }
                }, {
                    key: 'onFilterDown',
                    value: function onFilterDown(e) {
                        switch (e.keyCode) {
                            case 13:
                                //enter
                                break;
                            case 40: //down arrow 
                            case 38:
                                //up arrow 
                                this.queryString = this.filterInput.value;
                                e.preventDefault();
                                break;
                            case 9:
                                //tab 
                                if (this.isPopupOpen) {
                                    e.preventDefault();
                                }
                                break;
                            default:
                                this.prevSelectPoints = this.getSelectionPoints();
                                this.queryString = this.filterInput.value;
                                break;
                        }
                    }
                }, {
                    key: 'removeFillSelection',
                    value: function removeFillSelection() {
                        if (this.isInteracted) {
                            var selection = this.getSelectionPoints();
                            this.inputElement.setSelectionRange(selection.end, selection.end);
                        }
                    }
                }, {
                    key: 'getSelectionPoints',
                    value: function getSelectionPoints() {
                        var input = this.inputElement;
                        return { start: Math.abs(input.selectionStart), end: Math.abs(input.selectionEnd) };
                    }
                }, {
                    key: 'searchLists',
                    value: function searchLists(e) {
                        var _this6 = this;

                        this.isTyped = true;
                        this.activeIndex = null;
                        if (this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon)) {
                            var clearElement = this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon);
                            clearElement.style.visibility = this.filterInput.value === '' ? 'hidden' : 'visible';
                        }
                        if (this.isFiltering()) {
                            var eventArgs = {
                                preventDefaultAction: false,
                                text: this.filterInput.value,
                                updateData: function updateData(dataSource, query, fields) {
                                    if (eventArgs.cancel) {
                                        return;
                                    }
                                    _this6.isCustomFilter = true;
                                    _this6.filteringAction(dataSource, query, fields);
                                },
                                baseEventArgs: e,
                                cancel: false
                            };
                            this.trigger('filtering', eventArgs);
                            if (eventArgs.cancel) {
                                return;
                            }
                            if (!this.isCustomFilter && !eventArgs.preventDefaultAction) {
                                var filterQuery = this.query ? this.query.clone() : new Query();
                                var dataType = this.typeOfData(this.dataSource).typeof;
                                if (!(this.dataSource instanceof DataManager) && dataType === 'string' || dataType === 'number') {
                                    filterQuery.where('', 'startswith', this.filterInput.value, true, this.ignoreAccent);
                                } else {
                                    var fields = this.fields;
                                    filterQuery.where(!isNullOrUndefined(fields.text) ? fields.text : '', 'startswith', this.filterInput.value, true, this.ignoreAccent);
                                }
                                this.filteringAction(this.dataSource, filterQuery, this.fields);
                            }
                        }
                    }
                }, {
                    key: 'filteringAction',
                    value: function filteringAction(dataSource, query, fields) {
                        if (!isNullOrUndefined(this.filterInput)) {
                            this.beforePopupOpen = true;
                            if (this.filterInput.value.trim() === '') {
                                this.actionCompleteData.isUpdated = false;
                                this.isTyped = false;
                                this.onActionComplete(this.actionCompleteData.ulElement, this.actionCompleteData.list);
                                this.isTyped = true;
                                if (!isNullOrUndefined(this.itemData) && this.getModuleName() === 'dropdownlist') {
                                    this.focusIndexItem();
                                    this.setScrollPosition();
                                }
                                this.isNotSearchList = true;
                            } else {
                                this.isNotSearchList = false;
                                this.resetList(dataSource, fields, query);
                            }
                        }
                    }
                }, {
                    key: 'setSearchBox',
                    value: function setSearchBox(popupElement) {
                        if (this.isFiltering()) {
                            var parentElement = createElement('span', {
                                className: dropDownListClasses.filterParent
                            });
                            this.filterInput = createElement('input', {
                                attrs: { type: 'text' },
                                className: dropDownListClasses.filterInput
                            });
                            this.element.parentNode.insertBefore(this.filterInput, this.element);
                            var backIcon = false;
                            if (Browser.isDevice) {
                                backIcon = true;
                            }
                            this.filterInputObj = Input.createInput({
                                element: this.filterInput,
                                buttons: backIcon ? [dropDownListClasses.backIcon, dropDownListClasses.filterBarClearIcon] : [dropDownListClasses.filterBarClearIcon],
                                properties: { placeholder: this.filterBarPlaceholder }
                            });
                            append([this.filterInputObj.container], parentElement);
                            prepend([parentElement], popupElement);
                            attributes(this.filterInput, {
                                'aria-disabled': 'false',
                                'aria-owns': this.element.id + '_options',
                                'role': 'listbox',
                                'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null,
                                'autocomplete': 'off',
                                'autocorrect': 'off',
                                'autocapitalize': 'off',
                                'spellcheck': 'false'
                            });
                            this.clearIconElement = this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon);
                            if (!Browser.isDevice && this.clearIconElement) {
                                EventHandler.add(this.clearIconElement, 'click', this.clearText, this);
                                this.clearIconElement.style.visibility = 'hidden';
                            }
                            if (!Browser.isDevice) {
                                this.searchKeyModule = new KeyboardEvents(this.filterInput, {
                                    keyAction: this.keyActionHandler.bind(this),
                                    keyConfigs: this.keyConfigure,
                                    eventName: 'keydown'
                                });
                            }
                            EventHandler.add(this.filterInput, 'input', this.onInput, this);
                            EventHandler.add(this.filterInput, 'keyup', this.onFilterUp, this);
                            EventHandler.add(this.filterInput, 'keydown', this.onFilterDown, this);
                            EventHandler.add(this.filterInput, 'blur', this.onBlur, this);
                            return this.filterInputObj;
                        } else {
                            return inputObject;
                        }
                    }
                }, {
                    key: 'onInput',
                    value: function onInput() {
                        this.isValidKey = true;
                    }
                }, {
                    key: 'onActionFailure',
                    value: function onActionFailure(e) {
                        _get(DropDownList.prototype.__proto__ || Object.getPrototypeOf(DropDownList.prototype), 'onActionFailure', this).call(this, e);
                        if (this.beforePopupOpen) {
                            this.renderPopup();
                        }
                    }
                }, {
                    key: 'onActionComplete',
                    value: function onActionComplete(ulElement, list, e, isUpdated) {
                        if (this.isNotSearchList) {
                            this.isNotSearchList = false;
                            return;
                        }
                        if (this.isActive) {
                            var selectedItem = this.selectedLI ? this.selectedLI.cloneNode(true) : null;
                            _get(DropDownList.prototype.__proto__ || Object.getPrototypeOf(DropDownList.prototype), 'onActionComplete', this).call(this, ulElement, list, e);
                            if (this.isRequested && !isNullOrUndefined(this.searchKeyEvent) && this.searchKeyEvent.type === 'keydown') {
                                this.isRequested = false;
                                this.keyActionHandler(this.searchKeyEvent);
                                this.searchKeyEvent = null;
                            }
                            if (this.isRequested && !isNullOrUndefined(this.searchKeyEvent)) {
                                this.incrementalSearch(this.searchKeyEvent);
                                this.searchKeyEvent = null;
                            }
                            this.list.scrollTop = 0;
                            if (!isNullOrUndefined(ulElement)) {
                                attributes(ulElement, { 'id': this.element.id + '_options', 'role': 'listbox', 'aria-hidden': 'false' });
                            }
                            if (this.initRemoteRender) {
                                this.initial = true;
                                this.activeIndex = this.index;
                                this.updateValues();
                                this.initRemoteRender = false;
                                this.initial = false;
                            }
                            if (this.getModuleName() !== 'autocomplete' && this.isFiltering() && !this.isTyped) {
                                if (!this.actionCompleteData.isUpdated) {
                                    this.actionCompleteData = { ulElement: ulElement.cloneNode(true), list: list, isUpdated: true };
                                }
                                this.addNewItem(list, selectedItem);
                                if (!isNullOrUndefined(this.itemData)) {
                                    this.focusIndexItem();
                                }
                            }
                            if (this.beforePopupOpen) {
                                this.renderPopup();
                            }
                        }
                    }
                }, {
                    key: 'addNewItem',
                    value: function addNewItem(listData, newElement) {
                        var _this7 = this;

                        if (!isNullOrUndefined(this.itemData) && !isNullOrUndefined(newElement)) {
                            var value = this.getItemData().value;
                            var isExist = listData.some(function (data) {
                                return (typeof data === 'string' || typeof data === 'number') && data === value || getValue(_this7.fields.value, data) === value;
                            });
                            if (!isExist) {
                                this.addItem(this.itemData);
                            }
                        }
                    }
                }, {
                    key: 'updateActionCompleteData',
                    value: function updateActionCompleteData(li, item) {
                        if (this.getModuleName() !== 'autocomplete' && this.actionCompleteData.ulElement) {
                            this.actionCompleteData.ulElement.appendChild(li.cloneNode(true));
                            this.actionCompleteData.list.push(item);
                        }
                    }
                }, {
                    key: 'focusIndexItem',
                    value: function focusIndexItem() {
                        var value = this.getItemData().value;
                        this.activeIndex = this.getIndexByValue(value);
                        var element = this.list.querySelector('[data-value="' + value + '"]');
                        this.selectedLI = element;
                        this.activeItem(element);
                        this.removeFocus();
                    }
                }, {
                    key: 'updateSelection',
                    value: function updateSelection() {
                        var selectedItem = this.list.querySelector('.' + dropDownBaseClasses.selected);
                        if (selectedItem) {
                            this.setProperties({ 'index': this.getIndexByValue(selectedItem.getAttribute('data-value')) });
                            this.activeIndex = this.index;
                        } else {
                            this.removeFocus();
                            this.list.querySelector('.' + dropDownBaseClasses.li).classList.add(dropDownListClasses.focus);
                        }
                    }
                }, {
                    key: 'removeFocus',
                    value: function removeFocus() {
                        var highlightedItem = this.list.querySelectorAll('.' + dropDownListClasses.focus);
                        if (highlightedItem && highlightedItem.length) {
                            removeClass(highlightedItem, dropDownListClasses.focus);
                        }
                    }
                }, {
                    key: 'renderPopup',
                    value: function renderPopup() {
                        if (this.popupObj && document.body.contains(this.popupObj.element)) {
                            this.refreshPopup();
                            return;
                        }
                        var popupEle = createElement('div', { id: this.element.id + '_popup', className: 'e-ddl e-popup' });
                        var searchBox = this.setSearchBox(popupEle);
                        this.listHeight = formatUnit(this.popupHeight);
                        if (this.headerTemplate) {
                            var compiledString = void 0;
                            this.header = document.createElement('div');
                            addClass([this.header], dropDownListClasses.header);
                            compiledString = compile(this.headerTemplate);
                            var _iteratorNormalCompletion10 = true;
                            var _didIteratorError10 = false;
                            var _iteratorError10 = undefined;

                            try {
                                for (var _iterator10 = compiledString({})[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                    var item = _step10.value;

                                    this.header.appendChild(item);
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

                            append([this.header], popupEle);
                        }
                        append([this.list], popupEle);
                        if (this.footerTemplate) {
                            this.setFooterTemplate(popupEle);
                        }
                        document.body.appendChild(popupEle);
                        popupEle.style.visibility = 'hidden';
                        if (this.popupHeight !== 'auto') {
                            this.searchBoxHeight = 0;
                            if (!isNullOrUndefined(searchBox.container)) {
                                this.searchBoxHeight = searchBox.container.parentElement.getBoundingClientRect().height;
                                this.listHeight = (parseInt(this.listHeight, 10) - this.searchBoxHeight).toString() + 'px';
                            }
                            if (this.headerTemplate) {
                                var height = Math.round(this.header.getBoundingClientRect().height);
                                this.listHeight = (parseInt(this.listHeight, 10) - (height + this.searchBoxHeight)).toString() + 'px';
                            }
                            if (this.footerTemplate) {
                                var _height = Math.round(this.footer.getBoundingClientRect().height);
                                this.listHeight = (parseInt(this.listHeight, 10) - (_height + this.searchBoxHeight)).toString() + 'px';
                            }
                            this.list.style.maxHeight = (parseInt(this.listHeight, 10) - 2).toString() + 'px'; // due to box-sizing property
                            popupEle.style.maxHeight = formatUnit(this.popupHeight);
                        } else {
                            popupEle.style.height = 'auto';
                        }
                        var offsetValue = 0;
                        var left = void 0;
                        if (!isNullOrUndefined(this.selectedLI) && !isNullOrUndefined(this.activeIndex) && this.activeIndex >= 0) {
                            this.setScrollPosition();
                        } else {
                            this.list.scrollTop = 0;
                        }
                        if (Browser.isDevice && !this.allowFiltering && (this.getModuleName() === 'dropdownlist' || this.isDropDownClick && this.getModuleName() === 'combobox')) {
                            offsetValue = this.getOffsetValue(popupEle);
                            var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
                            left = -(parseInt(getComputedStyle(firstItem).textIndent, 10) - parseInt(getComputedStyle(this.inputElement).paddingLeft, 10) + parseInt(getComputedStyle(this.inputElement.parentElement).borderLeftWidth, 10));
                        }
                        this.getFocusElement();
                        this.createPopup(popupEle, offsetValue, left);
                        this.checkCollision(popupEle);
                        if (Browser.isDevice) {
                            this.popupObj.element.classList.add(dropDownListClasses.device);
                            if (this.getModuleName() === 'dropdownlist' || this.getModuleName() === 'combobox' && !this.allowFiltering && this.isDropDownClick) {
                                this.popupObj.collision = { X: 'fit', Y: 'fit' };
                            }
                            if (this.isFilterLayout()) {
                                this.popupObj.element.classList.add(dropDownListClasses.mobileFilter);
                                this.popupObj.position = { X: 0, Y: 0 };
                                this.popupObj.dataBind();
                                attributes(this.popupObj.element, { style: 'left:0px;right:0px;top:0px;bottom:0px;' });
                                addClass([document.body, this.popupObj.element], dropDownListClasses.popupFullScreen);
                                this.setSearchBoxPosition();
                                this.backIconElement = searchBox.container.querySelector('.e-back-icon');
                                this.clearIconElement = searchBox.container.querySelector('.' + dropDownListClasses.clearIcon);
                                EventHandler.add(this.backIconElement, 'click', this.clickOnBackIcon, this);
                                EventHandler.add(this.clearIconElement, 'click', this.clearText, this);
                            }
                        }
                        popupEle.style.visibility = 'visible';
                        addClass([popupEle], 'e-popup-close');
                        var scrollParentElements = this.popupObj.getScrollableParent(this.inputWrapper.container);
                        var _iteratorNormalCompletion11 = true;
                        var _didIteratorError11 = false;
                        var _iteratorError11 = undefined;

                        try {
                            for (var _iterator11 = scrollParentElements[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                var element = _step11.value;

                                EventHandler.add(element, 'scroll', this.scrollHandler, this);
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

                        if (Browser.isDevice && this.isFilterLayout()) {
                            EventHandler.add(this.list, 'scroll', this.listScroll, this);
                        }
                        attributes(this.targetElement(), { 'aria-expanded': 'true' });
                        var inputParent = this.isFiltering() ? this.filterInput.parentElement : this.inputWrapper.container;
                        addClass([inputParent], [dropDownListClasses.inputFocus]);
                        var animModel = { name: 'FadeIn', duration: 100 };
                        this.beforePopupOpen = true;
                        var eventArgs = { popup: this.popupObj, cancel: false };
                        this.trigger('open', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        addClass([this.inputWrapper.container], [dropDownListClasses.iconAnimation]);
                        this.popupObj.show(new Animation(animModel));
                    }
                }, {
                    key: 'checkCollision',
                    value: function checkCollision(popupEle) {
                        if (!Browser.isDevice || Browser.isDevice && !(this.getModuleName() === 'dropdownlist' || this.isDropDownClick)) {
                            var collision = isCollide(popupEle);
                            if (collision.length > 0) {
                                popupEle.style.marginTop = -parseInt(getComputedStyle(popupEle).marginTop, 10) + 'px';
                            }
                        }
                    }
                }, {
                    key: 'getOffsetValue',
                    value: function getOffsetValue(popupEle) {
                        var popupStyles = getComputedStyle(popupEle);
                        var borderTop = parseInt(popupStyles.borderTop, 10);
                        var borderBottom = parseInt(popupStyles.borderBottom, 10);
                        return this.setPopupPosition(borderTop + borderBottom);
                    }
                }, {
                    key: 'createPopup',
                    value: function createPopup(element, offsetValue, left) {
                        var _this8 = this;

                        this.popupObj = new Popup(element, {
                            width: this.setWidth(), targetType: 'relative',
                            relateTo: this.inputWrapper.container, collision: { X: 'flip', Y: 'flip' }, offsetY: offsetValue,
                            enableRtl: this.enableRtl, offsetX: left, position: { X: 'left', Y: 'bottom' },
                            zIndex: this.zIndex,
                            close: function close() {
                                if (!_this8.isDocumentClick) {
                                    _this8.focusDropDown();
                                }
                                _this8.isDocumentClick = false;
                                _this8.destroyPopup();
                            },
                            open: function open() {
                                EventHandler.add(document, 'mousedown', _this8.onDocumentClick, _this8);
                                _this8.isPopupOpen = true;
                                if (_this8.isFilterLayout()) {
                                    removeClass([_this8.inputWrapper.container], [dropDownListClasses.inputFocus]);
                                    _this8.isFilterFocus = true;
                                    _this8.filterInput.focus();
                                    if (_this8.inputWrapper.clearButton) {
                                        addClass([_this8.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
                                    }
                                }
                                _this8.activeStateChange();
                            }
                        });
                    }
                }, {
                    key: 'isEmptyList',
                    value: function isEmptyList() {
                        return !isNullOrUndefined(this.liCollections) && this.liCollections.length === 0;
                    }
                }, {
                    key: 'getFocusElement',
                    value: function getFocusElement() {
                        // combo-box used this method
                    }
                }, {
                    key: 'isFilterLayout',
                    value: function isFilterLayout() {
                        return this.getModuleName() === 'dropdownlist' && this.allowFiltering;
                    }
                }, {
                    key: 'scrollHandler',
                    value: function scrollHandler() {
                        if (Browser.isDevice && (this.getModuleName() === 'dropdownlist' && !this.isFilterLayout() || this.getModuleName() === 'combobox' && !this.allowFiltering && this.isDropDownClick)) {
                            this.hidePopup();
                        }
                        if (this.fields.groupBy && !isNullOrUndefined(this.fixedHeaderElement)) {
                            this.fixedHeaderElement.style.zIndex = '0';
                            this.fixedHeaderElement.style.display = 'none';
                        }
                    }
                }, {
                    key: 'setSearchBoxPosition',
                    value: function setSearchBoxPosition() {
                        var searchBoxHeight = this.filterInput.parentElement.getBoundingClientRect().height;
                        this.popupObj.element.style.maxHeight = '100%';
                        this.popupObj.element.style.width = '100%';
                        this.list.style.maxHeight = window.innerHeight - searchBoxHeight + 'px';
                        this.list.style.height = window.innerHeight - searchBoxHeight + 'px';
                        var clearElement = this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon);
                        detach(this.filterInput);
                        clearElement.parentElement.insertBefore(this.filterInput, clearElement);
                    }
                }, {
                    key: 'setPopupPosition',
                    value: function setPopupPosition(border) {
                        var offsetValue = void 0;
                        var popupOffset = border;
                        var selectedLI = this.list.querySelector('.' + dropDownListClasses.focus) || this.selectedLI;
                        var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
                        var lastItem = this.isEmptyList() ? this.list : this.liCollections[this.getItems().length - 1];
                        var liHeight = firstItem.getBoundingClientRect().height;
                        var listHeight = this.list.offsetHeight / 2;
                        var height = isNullOrUndefined(selectedLI) ? firstItem.offsetTop : selectedLI.offsetTop;
                        var lastItemOffsetValue = lastItem.offsetTop;
                        if (lastItemOffsetValue - listHeight < height && !isNullOrUndefined(this.liCollections) && this.liCollections.length > 0 && !isNullOrUndefined(selectedLI)) {
                            var count = this.list.offsetHeight / liHeight;
                            var paddingBottom = parseInt(getComputedStyle(this.list).paddingBottom, 10);
                            offsetValue = (count - (this.liCollections.length - this.activeIndex)) * liHeight - popupOffset + paddingBottom;
                            this.list.scrollTop = selectedLI.offsetTop;
                        } else if (height > listHeight) {
                            offsetValue = listHeight - liHeight / 2;
                            this.list.scrollTop = height - listHeight + liHeight / 2;
                        } else {
                            offsetValue = height;
                        }
                        var inputHeight = this.inputWrapper.container.offsetHeight;
                        offsetValue = offsetValue + liHeight + popupOffset - (liHeight - inputHeight) / 2;
                        return -offsetValue;
                    }
                }, {
                    key: 'setWidth',
                    value: function setWidth() {
                        var width = formatUnit(this.popupWidth);
                        if (width.indexOf('%') > -1) {
                            var inputWidth = this.inputWrapper.container.offsetWidth * parseFloat(width) / 100;
                            width = inputWidth.toString() + 'px';
                        }
                        if (Browser.isDevice && !this.allowFiltering && (this.getModuleName() === 'dropdownlist' || this.isDropDownClick && this.getModuleName() === 'combobox')) {
                            var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
                            width = parseInt(width, 10) + (parseInt(getComputedStyle(firstItem).textIndent, 10) - parseInt(getComputedStyle(this.inputElement).paddingLeft, 10) + parseInt(getComputedStyle(this.inputElement.parentElement).borderLeftWidth, 10)) * 2 + 'px';
                        }
                        return width;
                    }
                }, {
                    key: 'scrollBottom',
                    value: function scrollBottom(isInitial) {
                        var currentOffset = this.list.offsetHeight;
                        var nextBottom = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
                        var nextOffset = this.list.scrollTop + nextBottom - currentOffset;
                        nextOffset = isInitial ? nextOffset + parseInt(getComputedStyle(this.list).paddingTop, 10) * 2 : nextOffset;
                        var boxRange = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
                        boxRange = this.fields.groupBy && !isNullOrUndefined(this.fixedHeaderElement) ? boxRange - this.fixedHeaderElement.offsetHeight : boxRange;
                        if (this.activeIndex === 0) {
                            this.list.scrollTop = 0;
                        } else if (nextBottom > currentOffset || !(boxRange > 0 && this.list.offsetHeight > boxRange)) {
                            this.list.scrollTop = nextOffset;
                        }
                    }
                }, {
                    key: 'scrollTop',
                    value: function scrollTop() {
                        var nextOffset = this.selectedLI.offsetTop - this.list.scrollTop;
                        var nextBottom = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
                        nextOffset = this.fields.groupBy && !isNullOrUndefined(this.fixedHeaderElement) ? nextOffset - this.fixedHeaderElement.offsetHeight : nextOffset;
                        var boxRange = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
                        if (this.activeIndex === 0) {
                            this.list.scrollTop = 0;
                        } else if (nextOffset < 0) {
                            this.list.scrollTop = this.list.scrollTop + nextOffset;
                        } else if (!(boxRange > 0 && this.list.offsetHeight > boxRange)) {
                            this.list.scrollTop = this.selectedLI.offsetTop - (this.fields.groupBy && !isNullOrUndefined(this.fixedHeaderElement) ? this.fixedHeaderElement.offsetHeight : 0);
                        }
                    }
                }, {
                    key: 'isEditTextBox',
                    value: function isEditTextBox() {
                        return false;
                    }
                }, {
                    key: 'isFiltering',
                    value: function isFiltering() {
                        return this.allowFiltering;
                    }
                }, {
                    key: 'isPopupButton',
                    value: function isPopupButton() {
                        return true;
                    }
                }, {
                    key: 'setScrollPosition',
                    value: function setScrollPosition(e) {
                        if (!isNullOrUndefined(e)) {
                            switch (e.action) {
                                case 'pageDown':
                                case 'down':
                                case 'end':
                                    this.scrollBottom();
                                    break;
                                default:
                                    this.scrollTop();
                                    break;
                            }
                        } else {
                            this.scrollBottom(true);
                        }
                    }
                }, {
                    key: 'clearText',
                    value: function clearText() {
                        this.filterInput.value = '';
                        this.searchLists(null);
                    }
                }, {
                    key: 'listScroll',
                    value: function listScroll() {
                        this.filterInput.blur();
                    }
                }, {
                    key: 'closePopup',
                    value: function closePopup(delay) {
                        this.isTyped = false;
                        if (!(this.popupObj && document.body.contains(this.popupObj.element) && this.beforePopupOpen)) {
                            return;
                        }
                        EventHandler.remove(document, 'mousedown', this.onDocumentClick);
                        this.isActive = false;
                        this.filterInputObj = null;
                        this.isDropDownClick = false;
                        this.preventAutoFill = false;
                        var scrollableParentElements = this.popupObj.getScrollableParent(this.inputWrapper.container);
                        var _iteratorNormalCompletion12 = true;
                        var _didIteratorError12 = false;
                        var _iteratorError12 = undefined;

                        try {
                            for (var _iterator12 = scrollableParentElements[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                var element = _step12.value;

                                EventHandler.remove(element, 'scroll', this.scrollHandler);
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

                        if (Browser.isDevice && this.isFilterLayout()) {
                            removeClass([document.body, this.popupObj.element], dropDownListClasses.popupFullScreen);
                            EventHandler.remove(this.list, 'scroll', this.listScroll);
                        }
                        if (this.isFilterLayout()) {
                            if (!Browser.isDevice) {
                                this.searchKeyModule.destroy();
                                if (this.clearIconElement) {
                                    EventHandler.remove(this.clearIconElement, 'click', this.clearText);
                                }
                            }
                            if (this.backIconElement) {
                                EventHandler.remove(this.backIconElement, 'click', this.clickOnBackIcon);
                                EventHandler.remove(this.clearIconElement, 'click', this.clearText);
                            }
                            EventHandler.remove(this.filterInput, 'input', this.onInput);
                            EventHandler.remove(this.filterInput, 'keyup', this.onFilterUp);
                            EventHandler.remove(this.filterInput, 'keydown', this.onFilterDown);
                            EventHandler.remove(this.filterInput, 'blur', this.onBlur);
                            this.filterInput = null;
                        }
                        attributes(this.targetElement(), { 'aria-expanded': 'false', 'aria-activedescendant': null });
                        this.inputWrapper.container.classList.remove(dropDownListClasses.iconAnimation);
                        if (this.isFiltering()) {
                            this.actionCompleteData.isUpdated = false;
                        }
                        this.beforePopupOpen = false;
                        var eventArgs = { popup: this.popupObj, cancel: false };
                        this.trigger('close', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        var animModel = {
                            name: 'FadeOut',
                            duration: 100,
                            delay: delay ? delay : 0
                        };
                        if (this.getModuleName() === 'autocomplete') {
                            this.rippleFun();
                        }
                        if (this.isPopupOpen) {
                            this.popupObj.hide(new Animation(animModel));
                        } else {
                            this.destroyPopup();
                        }
                    }
                }, {
                    key: 'destroyPopup',
                    value: function destroyPopup() {
                        this.isPopupOpen = false;
                        this.isFilterFocus = false;
                        this.popupObj.destroy();
                        detach(this.popupObj.element);
                    }
                }, {
                    key: 'clickOnBackIcon',
                    value: function clickOnBackIcon() {
                        this.hidePopup();
                        this.focusIn();
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        if (this.element.tagName === 'INPUT') {
                            this.inputElement = this.element;
                        } else {
                            this.inputElement = createElement('input');
                            if (this.element.tagName !== this.getNgDirective()) {
                                this.element.style.display = 'none';
                            }
                            this.element.parentElement.insertBefore(this.inputElement, this.element);
                            this.preventTabIndex(this.inputElement);
                        }
                        this.inputWrapper = Input.createInput({
                            element: this.inputElement,
                            buttons: this.isPopupButton() ? [dropDownListClasses.icon] : null,
                            floatLabelType: this.floatLabelType,
                            properties: {
                                readonly: this.getModuleName() === 'dropdownlist' ? true : this.readonly,
                                placeholder: this.placeholder,
                                cssClass: this.cssClass,
                                enabled: this.enabled,
                                enableRtl: this.enableRtl,
                                showClearButton: this.showClearButton
                            }
                        });
                        if (this.element.tagName === this.getNgDirective()) {
                            this.element.appendChild(this.inputWrapper.container);
                        } else {
                            this.inputElement.parentElement.insertBefore(this.element, this.inputElement);
                        }
                        var name = this.element.getAttribute('name') ? this.element.getAttribute('name') : this.element.getAttribute('id');
                        this.hiddenElement = createElement('select', {
                            attrs: { 'name': name, 'aria-hidden': 'true', 'tabindex': '-1', 'class': dropDownListClasses.hiddenElement }
                        });
                        prepend([this.hiddenElement], this.inputWrapper.container);
                        this.element.removeAttribute('name');
                        this.setFields();
                        this.inputWrapper.container.style.width = formatUnit(this.width);
                        this.inputWrapper.container.classList.add('e-ddl');
                        this.wireEvent();
                        this.tabIndex = this.element.hasAttribute('tabindex') ? this.element.getAttribute('tabindex') : '0';
                        this.element.removeAttribute('tabindex');
                        var id = this.element.getAttribute('id') ? this.element.getAttribute('id') : getUniqueID('ej2_dropdownlist');
                        this.element.id = id;
                        this.hiddenElement.id = id + '_hidden';
                        this.targetElement().setAttribute('tabindex', this.tabIndex);
                        attributes(this.targetElement(), this.getAriaAttributes());
                        this.setHTMLAttributes();
                        if (this.value !== null || this.activeIndex !== null || this.text !== null) {
                            this.initValue();
                        } else if (this.element.tagName === 'SELECT' && this.element.options[0]) {
                            var selectElement = this.element;
                            this.value = selectElement.options[selectElement.selectedIndex].value;
                            this.text = isNullOrUndefined(this.value) ? null : selectElement.options[selectElement.selectedIndex].textContent;
                            this.initValue();
                        }
                        this.preventTabIndex(this.element);
                        if (!this.enabled) {
                            this.targetElement().tabIndex = -1;
                        }
                        this.initial = false;
                        this.element.style.opacity = '';
                        this.inputElement.onselect = function (e) {
                            e.stopImmediatePropagation();
                        };
                        this.inputElement.onchange = function (e) {
                            e.stopImmediatePropagation();
                        };
                        if (this.element.hasAttribute('autofocus')) {
                            this.focusIn();
                        }
                    }
                }, {
                    key: 'setFooterTemplate',
                    value: function setFooterTemplate(popupEle) {
                        var compiledString = void 0;
                        if (this.footer) {
                            this.footer.innerHTML = '';
                        } else {
                            this.footer = document.createElement('div');
                            addClass([this.footer], dropDownListClasses.footer);
                        }
                        compiledString = compile(this.footerTemplate);
                        var _iteratorNormalCompletion13 = true;
                        var _didIteratorError13 = false;
                        var _iteratorError13 = undefined;

                        try {
                            for (var _iterator13 = compiledString({})[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                var item = _step13.value;

                                this.footer.appendChild(item);
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

                        append([this.footer], popupEle);
                    }
                }, {
                    key: 'setOldText',
                    value: function setOldText(text) {
                        this.text = text;
                    }
                }, {
                    key: 'setOldValue',
                    value: function setOldValue(value) {
                        this.value = value;
                    }
                }, {
                    key: 'refreshPopup',
                    value: function refreshPopup() {
                        if (!isNullOrUndefined(this.popupObj) && document.body.contains(this.popupObj.element) && (this.allowFiltering && !(Browser.isDevice && this.isFilterLayout()) || this.getModuleName() === 'autocomplete')) {
                            this.popupObj.refreshPosition(this.inputWrapper.container);
                        }
                    }
                }, {
                    key: 'updateDataSource',
                    value: function updateDataSource(prop) {
                        this.clear(null, prop, true);
                        this.resetList(this.dataSource);
                        this.itemData = this.getDataByValue(this.value);
                        var dataItem = this.getItemData();
                        this.setProperties({ 'value': dataItem.value, 'text': dataItem.text });
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        this.setUpdateInitial(['query', 'dataSource'], newProp);
                        var _iteratorNormalCompletion14 = true;
                        var _didIteratorError14 = false;
                        var _iteratorError14 = undefined;

                        try {
                            for (var _iterator14 = Object.keys(newProp)[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                                var prop = _step14.value;

                                switch (prop) {
                                    case 'query':
                                    case 'dataSource':
                                        break;
                                    case 'htmlAttributes':
                                        this.setHTMLAttributes();
                                        break;
                                    case 'width':
                                        setStyleAttribute(this.inputWrapper.container, { 'width': formatUnit(newProp.width) });
                                        break;
                                    case 'placeholder':
                                        Input.setPlaceholder(newProp.placeholder, this.inputElement);
                                        break;
                                    case 'filterBarPlaceholder':
                                        Input.setPlaceholder(newProp.filterBarPlaceholder, this.filterInput);
                                        break;
                                    case 'readonly':
                                        Input.setReadonly(newProp.readonly, this.inputElement);
                                        break;
                                    case 'cssClass':
                                        Input.setCssClass(newProp.cssClass, [this.inputWrapper.container]);
                                        if (this.popupObj) {
                                            this.popupObj.element.classList.add(newProp.cssClass);
                                        }
                                        break;
                                    case 'enableRtl':
                                        this.setEnableRtl();
                                        break;
                                    case 'enabled':
                                        this.setEnable();
                                        break;
                                    case 'text':
                                        if (newProp.text === null) {
                                            this.clear();
                                            return;
                                        }
                                        if (!this.list) {
                                            if (this.dataSource instanceof DataManager) {
                                                this.initRemoteRender = true;
                                            }
                                            this.renderList();
                                        }
                                        if (!this.initRemoteRender) {
                                            var li = this.getElementByText(newProp.text);
                                            if (this.isValidLI(li)) {
                                                this.setSelection(li, null);
                                            } else {
                                                this.setOldText(oldProp.text);
                                            }
                                        }
                                        break;
                                    case 'value':
                                        if (newProp.value === null) {
                                            this.clear();
                                            return;
                                        }
                                        if (!this.list) {
                                            if (this.dataSource instanceof DataManager) {
                                                this.initRemoteRender = true;
                                            }
                                            this.renderList();
                                        }
                                        if (!this.initRemoteRender) {
                                            var item = this.getElementByValue(newProp.value);
                                            if (this.isValidLI(item)) {
                                                this.setSelection(item, null);
                                            } else {
                                                this.setOldValue(oldProp.value);
                                            }
                                        }
                                        break;
                                    case 'index':
                                        if (newProp.index === null) {
                                            this.clear();
                                            return;
                                        }
                                        if (!this.list) {
                                            if (this.dataSource instanceof DataManager) {
                                                this.initRemoteRender = true;
                                            }
                                            this.renderList();
                                        }
                                        if (!this.initRemoteRender) {
                                            var element = this.liCollections[newProp.index];
                                            if (this.isValidLI(element)) {
                                                this.setSelection(element, null);
                                            } else {
                                                this.index = oldProp.index;
                                            }
                                        }
                                        break;
                                    case 'footerTemplate':
                                        if (this.popupObj) {
                                            this.setFooterTemplate(this.popupObj.element);
                                        }
                                        break;
                                    case 'floatLabelType':
                                        Input.removeFloating(this.inputWrapper);
                                        Input.addFloating(this.inputElement, newProp.floatLabelType, this.placeholder);
                                        break;
                                    case 'showClearButton':
                                        Input.setClearButton(newProp.showClearButton, this.inputElement, this.inputWrapper);
                                        this.bindClearEvent();
                                        break;
                                    default:
                                        var ddlProps = void 0;
                                        ddlProps = this.getPropObject(prop, newProp, oldProp);
                                        _get(DropDownList.prototype.__proto__ || Object.getPrototypeOf(DropDownList.prototype), 'onPropertyChanged', this).call(this, ddlProps.newProperty, ddlProps.oldProperty);
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
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'dropdownlist';
                    }
                }, {
                    key: 'showPopup',
                    value: function showPopup() {
                        if (this.beforePopupOpen) {
                            this.refreshPopup();
                            return;
                        }
                        this.beforePopupOpen = true;
                        if (this.isFiltering() && !this.isActive && this.actionCompleteData.list && this.actionCompleteData.list[0]) {
                            this.isActive = true;
                            this.onActionComplete(this.actionCompleteData.ulElement, this.actionCompleteData.list, null, true);
                        } else if (isNullOrUndefined(this.list) || !isUndefined(this.list) && this.list.classList.contains(dropDownBaseClasses.noData)) {
                            this.renderList();
                        }
                        if (Browser.isDevice && this.isFilterLayout()) {
                            var proxy = this;
                            window.onpopstate = function () {
                                proxy.hidePopup();
                            };
                            history.pushState({}, '');
                        }
                        if (!isNullOrUndefined(this.list.children[0]) || this.list.classList.contains(dropDownBaseClasses.noData)) {
                            this.renderPopup();
                        }
                        attributes(this.targetElement(), { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
                    }
                }, {
                    key: 'hidePopup',
                    value: function hidePopup() {
                        if (this.isEscapeKey && this.getModuleName() === 'dropdownlist') {
                            Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
                            this.isEscapeKey = false;
                            if (!isNullOrUndefined(this.index)) {
                                this.selectedLI = this.liCollections[this.index];
                                this.updateSelectedItem(this.selectedLI, null, true);
                                if (this.valueTemplate && this.itemData !== null) {
                                    this.setValueTemplate();
                                }
                            } else {
                                this.resetSelection();
                            }
                        }
                        this.closePopup();
                        var dataItem = this.getItemData();
                        if (this.inputElement.value.trim() === '' && !this.isInteracted && (this.isSelectCustom || !isNullOrUndefined(this.selectedLI) && this.inputElement.value !== dataItem.text)) {
                            this.isSelectCustom = false;
                            this.clear();
                        }
                    }
                }, {
                    key: 'focusIn',
                    value: function focusIn() {
                        if (this.targetElement().classList.contains(dropDownListClasses.disable)) {
                            return;
                        }
                        var isFocused = false;
                        if (this.preventFocus && Browser.isDevice) {
                            this.inputWrapper.container.tabIndex = 1;
                            this.inputWrapper.container.focus();
                            this.preventFocus = false;
                            isFocused = true;
                        }
                        if (!isFocused) {
                            this.targetElement().focus();
                        }
                        addClass([this.inputWrapper.container], [dropDownListClasses.inputFocus]);
                        this.onFocus();
                    }
                }, {
                    key: 'focusOut',
                    value: function focusOut() {
                        this.isTyped = true;
                        this.hidePopup();
                        this.targetElement().blur();
                        removeClass([this.inputWrapper.container], [dropDownListClasses.inputFocus]);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this9 = this;

                        this.isActive = false;
                        this.hidePopup();
                        this.unWireEvent();
                        if (this.list) {
                            this.unWireListEvents();
                        }
                        ['readonly', 'aria-disabled', 'aria-placeholder', 'placeholder'].forEach(function (value) {
                            _this9.inputElement.removeAttribute(value);
                        });
                        this.inputElement.setAttribute('tabindex', this.tabIndex);
                        this.inputElement.classList.remove('e-input');
                        Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
                        this.element.style.display = 'block';
                        if (this.inputWrapper.container.parentElement.tagName === this.getNgDirective()) {
                            detach(this.inputWrapper.container);
                        } else {
                            this.inputWrapper.container.parentElement.insertBefore(this.element, this.inputWrapper.container);
                            detach(this.inputWrapper.container);
                        }
                        _get(DropDownList.prototype.__proto__ || Object.getPrototypeOf(DropDownList.prototype), 'destroy', this).call(this);
                    }
                }]);

                return DropDownList;
            }(DropDownBase));

            __decorate$1([Property(null)], DropDownList.prototype, "cssClass", void 0);
            __decorate$1([Property('100%')], DropDownList.prototype, "width", void 0);
            __decorate$1([Property('300px')], DropDownList.prototype, "popupHeight", void 0);
            __decorate$1([Property('100%')], DropDownList.prototype, "popupWidth", void 0);
            __decorate$1([Property(null)], DropDownList.prototype, "placeholder", void 0);
            __decorate$1([Property(null)], DropDownList.prototype, "filterBarPlaceholder", void 0);
            __decorate$1([Property({})], DropDownList.prototype, "htmlAttributes", void 0);
            __decorate$1([Property(null)], DropDownList.prototype, "query", void 0);
            __decorate$1([Property(null)], DropDownList.prototype, "valueTemplate", void 0);
            __decorate$1([Property(null)], DropDownList.prototype, "headerTemplate", void 0);
            __decorate$1([Property(null)], DropDownList.prototype, "footerTemplate", void 0);
            __decorate$1([Property(false)], DropDownList.prototype, "allowFiltering", void 0);
            __decorate$1([Property(false)], DropDownList.prototype, "readonly", void 0);
            __decorate$1([Property(null)], DropDownList.prototype, "text", void 0);
            __decorate$1([Property(null)], DropDownList.prototype, "value", void 0);
            __decorate$1([Property(null)], DropDownList.prototype, "index", void 0);
            __decorate$1([Property('Never')], DropDownList.prototype, "floatLabelType", void 0);
            __decorate$1([Property(false)], DropDownList.prototype, "showClearButton", void 0);
            __decorate$1([Event()], DropDownList.prototype, "filtering", void 0);
            __decorate$1([Event()], DropDownList.prototype, "change", void 0);
            __decorate$1([Event()], DropDownList.prototype, "open", void 0);
            __decorate$1([Event()], DropDownList.prototype, "close", void 0);
            __decorate$1([Event()], DropDownList.prototype, "blur", void 0);
            __decorate$1([Event()], DropDownList.prototype, "focus", void 0);
            _export('DropDownList', DropDownList = __decorate$1([NotifyPropertyChanges], DropDownList));

            /**
             * export all modules from current location
             */

            __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            /// <reference path='../drop-down-list/drop-down-list-model.d.ts'/>
            /* tslint:disable */
            /* tslint:enable */
            dropDownListClasses.root = 'e-combobox';
            inputObject$1 = {
                container: null,
                buttons: []
            };

            _export('ComboBox', ComboBox = function (_DropDownList) {
                _inherits(ComboBox, _DropDownList);

                /**
                 * *Constructor for creating the component
                 */
                function ComboBox(options, element) {
                    _classCallCheck(this, ComboBox);

                    return _possibleConstructorReturn(this, (ComboBox.__proto__ || Object.getPrototypeOf(ComboBox)).call(this, options, element));
                }

                _createClass(ComboBox, [{
                    key: 'preRender',
                    value: function preRender() {
                        _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'preRender', this).call(this);
                    }
                }, {
                    key: 'wireEvent',
                    value: function wireEvent() {
                        if (this.getModuleName() === 'combobox') {
                            EventHandler.add(this.inputWrapper.buttons[0], 'mousedown', this.preventBlur, this);
                            EventHandler.add(this.inputWrapper.container, 'blur', this.onBlur, this);
                        }
                        if (!isNullOrUndefined(this.inputWrapper.buttons[0])) {
                            EventHandler.add(this.inputWrapper.buttons[0], 'mousedown', this.dropDownClick, this);
                        }
                        EventHandler.add(this.inputElement, 'focus', this.targetFocus, this);
                        if (!this.readonly) {
                            EventHandler.add(this.inputElement, 'input', this.onInput, this);
                            EventHandler.add(this.inputElement, 'keyup', this.onFilterUp, this);
                            EventHandler.add(this.inputElement, 'keydown', this.onFilterDown, this);
                        }
                        this.bindCommonEvent();
                    }
                }, {
                    key: 'preventBlur',
                    value: function preventBlur(e) {
                        if (!this.allowFiltering && document.activeElement !== this.inputElement && !document.activeElement.classList.contains(dropDownListClasses.input) && Browser.isDevice || !Browser.isDevice) {
                            e.preventDefault();
                        }
                    }
                }, {
                    key: 'targetElement',
                    value: function targetElement() {
                        return this.inputElement;
                    }
                }, {
                    key: 'setOldText',
                    value: function setOldText(text) {
                        Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
                        this.customValue();
                        this.removeSelection();
                    }
                }, {
                    key: 'setOldValue',
                    value: function setOldValue(value) {
                        if (this.allowCustom) {
                            this.valueMuteChange(this.value);
                        } else {
                            this.valueMuteChange(null);
                        }
                        this.removeSelection();
                        this.setHiddenValue();
                    }
                }, {
                    key: 'valueMuteChange',
                    value: function valueMuteChange(value) {
                        var inputValue = isNullOrUndefined(value) ? null : value.toString();
                        Input.setValue(inputValue, this.inputElement, this.floatLabelType, this.showClearButton);
                        this.setProperties({ value: value, text: value, index: null }, true);
                        this.activeIndex = this.index;
                        var fields = this.fields;
                        var dataItem = {};
                        dataItem[fields.text] = isNullOrUndefined(value) ? null : value.toString();
                        dataItem[fields.value] = isNullOrUndefined(value) ? null : value.toString();
                        this.itemData = dataItem;
                        this.item = null;
                        if (this.previousValue !== this.value) {
                            this.detachChangeEvent(null);
                        }
                    }
                }, {
                    key: 'updateValues',
                    value: function updateValues() {
                        if (!isNullOrUndefined(this.value)) {
                            var li = this.getElementByValue(this.value);
                            if (li) {
                                this.setSelection(li, null);
                            } else if (this.allowCustom) {
                                this.valueMuteChange(this.value);
                            } else {
                                this.valueMuteChange(null);
                            }
                        } else if (this.text && isNullOrUndefined(this.value)) {
                            var _li = this.getElementByText(this.text);
                            if (_li) {
                                this.setSelection(_li, null);
                            } else {
                                Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
                                this.customValue();
                            }
                        } else {
                            this.setSelection(this.liCollections[this.activeIndex], null);
                        }
                        this.setHiddenValue();
                        Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
                    }
                }, {
                    key: 'getAriaAttributes',
                    value: function getAriaAttributes() {
                        var ariaAttributes = {
                            'aria-owns': this.element.id + '_options',
                            'role': 'combobox',
                            'aria-autocomplete': 'both',
                            'aria-labelledby': this.hiddenElement.id,
                            'aria-hasPopup': 'true',
                            'aria-expanded': 'false',
                            'aria-readonly': this.readonly.toString(),
                            'autocomplete': 'off',
                            'autocorrect': 'off',
                            'autocapitalize': 'off',
                            'spellcheck': 'false'
                        };
                        return ariaAttributes;
                    }
                }, {
                    key: 'searchLists',
                    value: function searchLists(e) {
                        this.isTyped = true;
                        if (this.isFiltering()) {
                            _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'searchLists', this).call(this, e);
                            if (this.filterInput.value.trim() === '') {
                                this.setHoverList(this.ulElement.querySelector('.' + dropDownListClasses.li));
                            }
                        } else {
                            if (this.ulElement && this.inputElement.value === '' && this.preventAutoFill) {
                                this.setHoverList(this.ulElement.querySelector('.' + dropDownListClasses.li));
                            }
                            this.incrementalSearch(e);
                        }
                    }
                }, {
                    key: 'getNgDirective',
                    value: function getNgDirective() {
                        return 'EJS-COMBOBOX';
                    }
                }, {
                    key: 'setSearchBox',
                    value: function setSearchBox() {
                        this.filterInput = this.inputElement;
                        return this.isFiltering() ? this.inputWrapper : inputObject$1;
                    }
                }, {
                    key: 'onActionComplete',
                    value: function onActionComplete(ulElement, list, e, isUpdated) {
                        _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'onActionComplete', this).call(this, ulElement, list, e);
                        if (this.isSelectCustom) {
                            this.removeSelection();
                        }
                        if (!this.preventAutoFill && this.getModuleName() === 'combobox' && this.isTyped) {
                            this.inlineSearch();
                        }
                    }
                }, {
                    key: 'getFocusElement',
                    value: function getFocusElement() {
                        var dataItem = this.isSelectCustom ? { text: '' } : this.getItemData();
                        var selected = this.list.querySelector('.' + dropDownListClasses.selected);
                        var isSelected = dataItem.text === this.inputElement.value && !isNullOrUndefined(selected);
                        if (isSelected) {
                            return selected;
                        }
                        if ((Browser.isDevice && !this.isDropDownClick || !Browser.isDevice) && !isNullOrUndefined(this.liCollections) && this.liCollections.length > 0) {
                            var inputValue = this.inputElement.value;
                            var activeItem = Search(inputValue, this.liCollections, 'StartsWith', true);
                            var activeElement = activeItem.item;
                            if (!isNullOrUndefined(activeElement)) {
                                var count = this.getIndexByValue(activeElement.getAttribute('data-value')) - 1;
                                var height = parseInt(getComputedStyle(this.liCollections[0], null).getPropertyValue('height'), 10);
                                if (!isNaN(height) && this.getModuleName() !== 'autocomplete') {
                                    this.removeFocus();
                                    var fixedHead = this.fields.groupBy ? this.liCollections[0].offsetHeight : 0;
                                    this.list.scrollTop = count * height + fixedHead;
                                    addClass([activeElement], dropDownListClasses.focus);
                                }
                            } else {
                                if (this.isSelectCustom && this.inputElement.value.trim() !== '') {
                                    this.removeFocus();
                                    this.list.scrollTop = 0;
                                }
                            }
                            return activeElement;
                        } else {
                            return null;
                        }
                    }
                }, {
                    key: 'setValue',
                    value: function setValue(e) {
                        if (e && e.type === 'keydown' && e.action === 'enter') {
                            this.removeFillSelection();
                        }
                        if (this.autofill && this.getModuleName() === 'combobox' && e && e.type === 'keydown' && e.action !== 'enter') {
                            this.preventAutoFill = false;
                            this.inlineSearch(e);
                            return false;
                        } else {
                            return _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'setValue', this).call(this, e);
                        }
                    }
                }, {
                    key: 'showSpinner',
                    value: function showSpinner() {
                        if (isNullOrUndefined(this.spinnerElement)) {
                            this.spinnerElement = this.inputWrapper.buttons[0] || this.inputWrapper.clearButton;
                            addClass([this.spinnerElement], dropDownListClasses.disableIcon);
                            createSpinner({
                                target: this.spinnerElement,
                                width: Browser.isDevice ? '16px' : '14px'
                            });
                            _showSpinner(this.spinnerElement);
                        }
                    }
                }, {
                    key: 'hideSpinner',
                    value: function hideSpinner() {
                        if (!isNullOrUndefined(this.spinnerElement)) {
                            _hideSpinner(this.spinnerElement);
                            this.spinnerElement.innerHTML = '';
                            removeClass([this.spinnerElement], dropDownListClasses.disableIcon);
                            this.spinnerElement = null;
                        }
                    }
                }, {
                    key: 'setAutoFill',
                    value: function setAutoFill(activeElement, isHover) {
                        if (!isHover) {
                            this.setHoverList(activeElement);
                        }
                        if (this.autofill && !this.preventAutoFill) {
                            var currentValue = this.getTextByValue(activeElement.getAttribute('data-value')).toString();
                            var currentFillValue = this.getFormattedValue(activeElement.getAttribute('data-value'));
                            if (this.getModuleName() === 'combobox') {
                                if (!this.isSelected && this.previousValue !== currentFillValue) {
                                    this.updateSelectedItem(activeElement, null);
                                    this.isSelected = true;
                                    this.previousValue = this.getFormattedValue(activeElement.getAttribute('data-value'));
                                } else {
                                    this.updateSelectedItem(activeElement, null, true);
                                }
                            }
                            if (!this.isAndroidAutoFill(currentValue)) {
                                this.setAutoFillSelection(currentValue);
                            }
                        }
                    }
                }, {
                    key: 'isAndroidAutoFill',
                    value: function isAndroidAutoFill(value) {
                        if (Browser.isAndroid) {
                            var currentPoints = this.getSelectionPoints();
                            var prevEnd = this.prevSelectPoints.end;
                            var curEnd = currentPoints.end;
                            var prevStart = this.prevSelectPoints.start;
                            var curStart = currentPoints.start;
                            if (prevEnd !== 0 && (prevEnd === value.length && prevStart === value.length || prevStart > curStart && prevEnd > curEnd || prevEnd === curEnd && prevStart === curStart)) {
                                return true;
                            } else {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    }
                }, {
                    key: 'isSelectFocusItem',
                    value: function isSelectFocusItem(element) {
                        return !isNullOrUndefined(element);
                    }
                }, {
                    key: 'inlineSearch',
                    value: function inlineSearch(e) {
                        var isKeyNavigate = e && (e.action === 'down' || e.action === 'up' || e.action === 'home' || e.action === 'end' || e.action === 'pageUp' || e.action === 'pageDown');
                        var activeElement = isKeyNavigate ? this.liCollections[this.activeIndex] : this.getFocusElement();
                        if (!isNullOrUndefined(activeElement)) {
                            if (!isKeyNavigate) {
                                var value = this.getFormattedValue(activeElement.getAttribute('data-value'));
                                this.activeIndex = this.getIndexByValue(value);
                                this.activeIndex = !isNullOrUndefined(this.activeIndex) ? this.activeIndex : null;
                            }
                            this.preventAutoFill = this.inputElement.value === '' ? false : this.preventAutoFill;
                            this.setAutoFill(activeElement, isKeyNavigate);
                        } else if (this.inputElement.value === '') {
                            this.activeIndex = null;
                            this.list.scrollTop = 0;
                            var focusItem = this.list.querySelector('.' + dropDownListClasses.li);
                            this.setHoverList(focusItem);
                        } else {
                            this.activeIndex = null;
                            this.removeSelection();
                            this.removeFocus();
                        }
                    }
                }, {
                    key: 'incrementalSearch',
                    value: function incrementalSearch(e) {
                        this.showPopup();
                        if (!isNullOrUndefined(this.listData)) {
                            this.inlineSearch(e);
                            e.preventDefault();
                        }
                    }
                }, {
                    key: 'setAutoFillSelection',
                    value: function setAutoFillSelection(currentValue) {
                        var selection = this.getSelectionPoints();
                        var value = this.inputElement.value.substr(0, selection.start);
                        if (value && value.toLowerCase() === currentValue.substr(0, selection.start).toLowerCase()) {
                            var inputValue = value + currentValue.substr(value.length, currentValue.length);
                            Input.setValue(inputValue, this.inputElement, this.floatLabelType, this.showClearButton);
                            this.inputElement.setSelectionRange(selection.start, this.inputElement.value.length);
                        } else {
                            Input.setValue(currentValue, this.inputElement, this.floatLabelType, this.showClearButton);
                            this.inputElement.setSelectionRange(0, this.inputElement.value.length);
                        }
                    }
                }, {
                    key: 'getValueByText',
                    value: function getValueByText(text) {
                        return _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'getValueByText', this).call(this, text, true, this.ignoreAccent);
                    }
                }, {
                    key: 'unWireEvent',
                    value: function unWireEvent() {
                        if (this.getModuleName() === 'combobox') {
                            EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown', this.preventBlur);
                            EventHandler.remove(this.inputWrapper.container, 'blur', this.onBlur);
                        }
                        if (!isNullOrUndefined(this.inputWrapper.buttons[0])) {
                            EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown', this.dropDownClick);
                        }
                        EventHandler.remove(this.inputElement, 'focus', this.targetFocus);
                        if (!this.readonly) {
                            EventHandler.remove(this.inputElement, 'input', this.onInput);
                            EventHandler.remove(this.inputElement, 'keyup', this.onFilterUp);
                            EventHandler.remove(this.inputElement, 'keydown', this.onFilterDown);
                        }
                        this.unBindCommonEvent();
                    }
                }, {
                    key: 'setSelection',
                    value: function setSelection(li, e) {
                        _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'setSelection', this).call(this, li, e);
                        if (!isNullOrUndefined(li) && !this.autofill && !this.isDropDownClick) {
                            this.removeFocus();
                        }
                    }
                }, {
                    key: 'selectCurrentItem',
                    value: function selectCurrentItem(e) {
                        var li = void 0;
                        if (this.isPopupOpen) {
                            li = this.list.querySelector('.' + dropDownListClasses.focus);
                            if (li) {
                                this.setSelection(li, e);
                                this.isTyped = false;
                            }
                            if (this.isSelected) {
                                this.isSelectCustom = false;
                                this.onChangeEvent(e);
                            }
                        }
                        if (e.action === 'enter' && this.inputElement.value.trim() === '') {
                            this.clear(e);
                        } else if (this.isTyped && !this.isSelected && isNullOrUndefined(li)) {
                            this.customValue();
                        }
                        this.hidePopup();
                    }
                }, {
                    key: 'setHoverList',
                    value: function setHoverList(li) {
                        this.removeSelection();
                        if (this.isValidLI(li) && !li.classList.contains(dropDownListClasses.selected)) {
                            this.removeFocus();
                            li.classList.add(dropDownListClasses.focus);
                        }
                    }
                }, {
                    key: 'targetFocus',
                    value: function targetFocus(e) {
                        if (Browser.isDevice && !this.allowFiltering) {
                            this.preventFocus = false;
                        }
                        this.onFocus();
                    }
                }, {
                    key: 'dropDownClick',
                    value: function dropDownClick(e) {
                        e.preventDefault();
                        if (Browser.isDevice && !this.allowFiltering) {
                            this.preventFocus = true;
                        }
                        _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'dropDownClick', this).call(this, e);
                    }
                }, {
                    key: 'customValue',
                    value: function customValue() {
                        var value = this.getValueByText(this.inputElement.value);
                        if (!this.allowCustom && this.inputElement.value !== '') {
                            this.setProperties({ value: value });
                            if (isNullOrUndefined(this.value)) {
                                Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
                            }
                        } else if (this.inputElement.value.trim() !== '') {
                            var previousValue = this.value;
                            if (isNullOrUndefined(value)) {
                                var _value = this.inputElement.value === '' ? null : this.inputElement.value;
                                var fields = this.fields;
                                var eventArgs = void 0;
                                eventArgs = { text: _value, item: {} };
                                if (!this.initial) {
                                    this.trigger('customValueSpecifier', eventArgs);
                                }
                                var item = eventArgs.item;
                                var dataItem = {};
                                if (item && getValue(fields.text, item) && getValue(fields.value, item)) {
                                    dataItem = item;
                                } else {
                                    setValue(fields.text, _value, dataItem);
                                    setValue(fields.value, _value, dataItem);
                                }
                                this.itemData = dataItem;
                                var changeData = {
                                    text: getValue(fields.text, this.itemData),
                                    value: getValue(fields.value, this.itemData),
                                    index: null
                                };
                                this.setProperties(changeData, true);
                                this.setSelection(null, null);
                                this.isSelectCustom = true;
                            } else {
                                this.isSelectCustom = false;
                                this.setProperties({ value: value });
                            }
                            if (previousValue !== this.value) {
                                this.onChangeEvent(null);
                            }
                        } else if (this.allowCustom) {
                            this.isSelectCustom = true;
                        }
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        this.setUpdateInitial(['query', 'dataSource'], newProp);
                        var _iteratorNormalCompletion15 = true;
                        var _didIteratorError15 = false;
                        var _iteratorError15 = undefined;

                        try {
                            for (var _iterator15 = Object.keys(newProp)[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                                var prop = _step15.value;

                                switch (prop) {
                                    case 'readonly':
                                        Input.setReadonly(this.readonly, this.inputElement);
                                        if (this.readonly) {
                                            EventHandler.remove(this.inputElement, 'keyup', this.onFilterUp);
                                            EventHandler.remove(this.inputElement, 'keydown', this.onFilterDown);
                                        } else {
                                            EventHandler.add(this.inputElement, 'keyup', this.onFilterUp, this);
                                            EventHandler.add(this.inputElement, 'keydown', this.onFilterDown, this);
                                        }
                                        break;
                                    case 'allowFiltering':
                                        this.setSearchBox();
                                        break;
                                    case 'allowCustom':
                                        break;
                                    default:
                                        var comboProps = void 0;
                                        comboProps = this.getPropObject(prop, newProp, oldProp);
                                        _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'onPropertyChanged', this).call(this, comboProps.newProperty, comboProps.oldProperty);
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
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'render', this).call(this);
                        this.setSearchBox();
                        if (this.isFiltering() && this.getModuleName() === 'combobox' && isNullOrUndefined(this.list)) {
                            _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'renderList', this).call(this);
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'combobox';
                    }
                }, {
                    key: 'hidePopup',
                    value: function hidePopup() {
                        var inputValue = this.inputElement.value === '' ? null : this.inputElement.value;
                        if (!isNullOrUndefined(this.listData)) {
                            var isEscape = this.isEscapeKey;
                            if (this.isEscapeKey) {
                                Input.setValue(this.typedString, this.inputElement, this.floatLabelType, this.showClearButton);
                                this.isEscapeKey = false;
                            }
                            if (this.autofill) {
                                this.removeFillSelection();
                            }
                            var dataItem = this.isSelectCustom ? { text: '' } : this.getItemData();
                            var selected = this.list.querySelector('.' + dropDownListClasses.selected);
                            if (dataItem.text === this.inputElement.value && !isNullOrUndefined(selected)) {
                                if (this.isSelected) {
                                    this.onChangeEvent(null);
                                    this.isSelectCustom = false;
                                }
                                _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'hidePopup', this).call(this);
                                return;
                            }
                            if (this.getModuleName() === 'combobox' && this.inputElement.value.trim() !== '') {
                                var searchItem = Search(this.inputElement.value, this.liCollections, 'Equal', true);
                                this.selectedLI = searchItem.item;
                                if (isNullOrUndefined(searchItem.index)) {
                                    searchItem.index = Search(this.inputElement.value, this.liCollections, 'StartsWith', true).index;
                                }
                                this.activeIndex = searchItem.index;
                                if (!isNullOrUndefined(this.selectedLI)) {
                                    this.updateSelectedItem(this.selectedLI, null, true);
                                } else if (isEscape) {
                                    this.isSelectCustom = true;
                                    this.removeSelection();
                                }
                            }
                            if (!this.isEscapeKey && this.isTyped && !this.isInteracted) {
                                this.customValue();
                            }
                        }
                        if (isNullOrUndefined(this.listData) && this.allowCustom && !isNullOrUndefined(inputValue) && inputValue !== this.value) {
                            this.customValue();
                        }
                        _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'hidePopup', this).call(this);
                    }
                }, {
                    key: 'focusIn',
                    value: function focusIn() {
                        if (Browser.isDevice && !this.allowFiltering) {
                            this.preventFocus = true;
                        }
                        _get(ComboBox.prototype.__proto__ || Object.getPrototypeOf(ComboBox.prototype), 'focusIn', this).call(this);
                    }
                }]);

                return ComboBox;
            }(DropDownList));

            __decorate$2([Property(false)], ComboBox.prototype, "autofill", void 0);
            __decorate$2([Property(true)], ComboBox.prototype, "allowCustom", void 0);
            __decorate$2([Property({})], ComboBox.prototype, "htmlAttributes", void 0);
            __decorate$2([Property(false)], ComboBox.prototype, "allowFiltering", void 0);
            __decorate$2([Property(null)], ComboBox.prototype, "query", void 0);
            __decorate$2([Property(null)], ComboBox.prototype, "index", void 0);
            __decorate$2([Property(true)], ComboBox.prototype, "showClearButton", void 0);
            __decorate$2([Event()], ComboBox.prototype, "customValueSpecifier", void 0);
            __decorate$2([Event()], ComboBox.prototype, "filtering", void 0);
            __decorate$2([Property(null)], ComboBox.prototype, "valueTemplate", void 0);
            __decorate$2([Property('Never')], ComboBox.prototype, "floatLabelType", void 0);
            __decorate$2([Property(null)], ComboBox.prototype, "filterBarPlaceholder", void 0);
            _export('ComboBox', ComboBox = __decorate$2([NotifyPropertyChanges], ComboBox));

            /**
             * export all modules from current location
             */

            __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            SPINNER_CLASS = 'e-atc-spinner-icon';

            dropDownListClasses.root = 'e-autocomplete';
            dropDownListClasses.icon = 'e-input-group-icon e-ddl-icon e-search-icon';
            /**
             * The AutoComplete component provides the matched suggestion list when type into the input,
             * from which the user can select one.
             * ```html
             * <input id="list" type="text"/>
             * ```
             * ```typescript
             *   let atcObj:AutoComplete = new AutoComplete();
             *   atcObj.appendTo("#list");
             * ```
             */

            _export('AutoComplete', AutoComplete = function (_ComboBox) {
                _inherits(AutoComplete, _ComboBox);

                /**
                 * * Constructor for creating the widget
                 */
                function AutoComplete(options, element) {
                    _classCallCheck(this, AutoComplete);

                    var _this11 = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, options, element));

                    _this11.isFiltered = false;
                    return _this11;
                }

                _createClass(AutoComplete, [{
                    key: 'preRender',
                    value: function preRender() {
                        _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), 'preRender', this).call(this);
                    }
                }, {
                    key: 'getNgDirective',
                    value: function getNgDirective() {
                        return 'EJS-AUTOCOMPLETE';
                    }
                }, {
                    key: 'getQuery',
                    value: function getQuery(query) {
                        var filterQuery = query ? query.clone() : this.query ? this.query.clone() : new Query();
                        var filterType = this.queryString === '' && !isNullOrUndefined(this.value) ? 'equal' : this.filterType;
                        var queryString = this.queryString === '' && !isNullOrUndefined(this.value) ? this.value : this.queryString;
                        if (this.isFiltered) {
                            return filterQuery;
                        }
                        if (this.queryString !== null) {
                            var dataType = this.typeOfData(this.dataSource).typeof;
                            if (!(this.dataSource instanceof DataManager) && dataType === 'string' || dataType === 'number') {
                                filterQuery.where('', filterType, queryString, this.ignoreCase, this.ignoreAccent);
                            } else {
                                var mapping = !isNullOrUndefined(this.fields.value) ? this.fields.value : '';
                                filterQuery.where(mapping, filterType, queryString, this.ignoreCase, this.ignoreAccent);
                            }
                        }
                        if (!isNullOrUndefined(this.suggestionCount)) {
                            filterQuery.take(this.suggestionCount);
                        }
                        return filterQuery;
                    }
                }, {
                    key: 'searchLists',
                    value: function searchLists(e) {
                        var _this12 = this;

                        this.isTyped = true;
                        this.isSelectCustom = false;
                        if (isNullOrUndefined(this.list)) {
                            _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), 'renderList', this).call(this, true);
                        }
                        var isDownUpKey = e.keyCode === 40 || e.keyCode === 38;
                        this.queryString = this.filterInput.value;
                        if (isDownUpKey) {
                            this.queryString = this.queryString === '' ? null : this.queryString;
                            this.beforePopupOpen = true;
                            this.resetList(this.dataSource, this.fields);
                            return;
                        }
                        this.isSelected = false;
                        this.activeIndex = null;
                        var eventArgs = {
                            preventDefaultAction: false,
                            text: this.filterInput.value,
                            updateData: function updateData(dataSource, query, fields) {
                                if (eventArgs.cancel) {
                                    return;
                                }
                                _this12.isFiltered = true;
                                _this12.filterAction(dataSource, query, fields);
                            },
                            cancel: false
                        };
                        this.trigger('filtering', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        if (!this.isFiltered && !eventArgs.preventDefaultAction) {
                            this.filterAction(this.dataSource, null, this.fields);
                        }
                    }
                }, {
                    key: 'filterAction',
                    value: function filterAction(dataSource, query, fields) {
                        this.beforePopupOpen = true;
                        if (this.queryString !== '' && (this.queryString.length >= this.minLength || this.isFiltered)) {
                            this.resetList(dataSource, fields, query);
                        } else {
                            this.hidePopup();
                        }
                    }
                }, {
                    key: 'clear',
                    value: function clear(e, property) {
                        if (isNullOrUndefined(property) || property !== 'dataSource') {
                            _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), 'clear', this).call(this, e);
                        }
                        if (this.beforePopupOpen) {
                            this.hidePopup();
                        }
                    }
                }, {
                    key: 'onActionComplete',
                    value: function onActionComplete(ulElement, list, e, isUpdated) {
                        this.fixedHeaderElement = null;
                        _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), 'onActionComplete', this).call(this, ulElement, list, e);
                        var item = this.list.querySelector('.' + dropDownListClasses.li);
                        if (!isNullOrUndefined(item)) {
                            removeClass([item], dropDownListClasses.focus);
                        }
                        this.postBackAction();
                    }
                }, {
                    key: 'postBackAction',
                    value: function postBackAction() {
                        if (this.queryString !== null && this.queryString !== '' && this.highlight) {
                            highlightSearch(this.list, this.queryString, this.ignoreCase, this.filterType);
                        }
                        if (this.autofill && !isNullOrUndefined(this.liCollections[0])) {
                            var items = [this.liCollections[0]];
                            var searchItem = Search(this.inputElement.value, items, 'StartsWith', this.ignoreCase);
                            if (!isNullOrUndefined(searchItem.item)) {
                                _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), 'setAutoFill', this).call(this, this.liCollections[0], true);
                            }
                        }
                    }
                }, {
                    key: 'setSelection',
                    value: function setSelection(li, e) {
                        if (!this.isValidLI(li)) {
                            return;
                        }
                        if (!isNullOrUndefined(e) && e.type === 'keydown' && e.action !== 'enter' && this.isValidLI(li)) {
                            var value = this.getFormattedValue(li.getAttribute('data-value'));
                            this.activeIndex = this.getIndexByValue(value);
                            this.setHoverList(li);
                            this.selectedLI = li;
                            this.setScrollPosition(e);
                            if (this.autofill) {
                                this.preventAutoFill = false;
                                _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), 'setAutoFill', this).call(this, li);
                            }
                            attributes(this.inputElement, { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
                        } else {
                            _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), 'setSelection', this).call(this, li, e);
                        }
                    }
                }, {
                    key: 'showSpinner',
                    value: function showSpinner() {
                        if (isNullOrUndefined(this.spinnerElement)) {
                            this.spinnerElement = this.inputWrapper.buttons[0] || this.inputWrapper.clearButton || Input.appendSpan('e-input-group-icon ' + SPINNER_CLASS, this.inputWrapper.container);
                            addClass([this.spinnerElement], dropDownListClasses.disableIcon);
                            createSpinner({
                                target: this.spinnerElement,
                                width: Browser.isDevice ? '16px' : '14px'
                            });
                            _showSpinner(this.spinnerElement);
                        }
                    }
                }, {
                    key: 'hideSpinner',
                    value: function hideSpinner() {
                        if (!isNullOrUndefined(this.spinnerElement)) {
                            _hideSpinner(this.spinnerElement);
                            removeClass([this.spinnerElement], dropDownListClasses.disableIcon);
                            if (this.spinnerElement.classList.contains(SPINNER_CLASS)) {
                                detach(this.spinnerElement);
                            } else {
                                this.spinnerElement.innerHTML = '';
                            }
                            this.spinnerElement = null;
                        }
                    }
                }, {
                    key: 'isFiltering',
                    value: function isFiltering() {
                        return true;
                    }
                }, {
                    key: 'renderPopup',
                    value: function renderPopup() {
                        this.list.scrollTop = 0;
                        _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), 'renderPopup', this).call(this);
                        if (this.highlight) {
                            highlightSearch(this.list, this.queryString, this.ignoreCase, this.filterType);
                        }
                    }
                }, {
                    key: 'isEditTextBox',
                    value: function isEditTextBox() {
                        return true && this.inputElement.value.trim() !== '';
                    }
                }, {
                    key: 'isPopupButton',
                    value: function isPopupButton() {
                        return this.showPopupButton;
                    }
                }, {
                    key: 'isSelectFocusItem',
                    value: function isSelectFocusItem(element) {
                        return false;
                    }
                }, {
                    key: 'showPopup',
                    value: function showPopup() {
                        if (this.beforePopupOpen) {
                            this.refreshPopup();
                            return;
                        }
                        this.beforePopupOpen = true;
                        this.preventAutoFill = true;
                        if (isNullOrUndefined(this.list)) {
                            this.renderList();
                        } else {
                            this.resetList(this.dataSource, this.fields);
                        }
                    }
                }, {
                    key: 'hidePopup',
                    value: function hidePopup() {
                        _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), 'hidePopup', this).call(this);
                        this.activeIndex = -1;
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        this.setUpdateInitial(['query', 'dataSource'], newProp);
                        var _iteratorNormalCompletion16 = true;
                        var _didIteratorError16 = false;
                        var _iteratorError16 = undefined;

                        try {
                            for (var _iterator16 = Object.keys(newProp)[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                                var prop = _step16.value;

                                switch (prop) {
                                    case 'showPopupButton':
                                        if (this.showPopupButton) {
                                            var button = Input.appendSpan(dropDownListClasses.icon, this.inputWrapper.container);
                                            this.inputWrapper.buttons[0] = button;
                                            EventHandler.add(this.inputWrapper.buttons[0], 'click', this.dropDownClick, this);
                                        } else {
                                            detach(this.inputWrapper.buttons[0]);
                                            this.inputWrapper.buttons[0] = null;
                                        }
                                        break;
                                    default:
                                        var atcProps = void 0;
                                        atcProps = this.getPropObject(prop, newProp, oldProp);
                                        _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), 'onPropertyChanged', this).call(this, atcProps.newProperty, atcProps.oldProperty);
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
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'autocomplete';
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), 'render', this).call(this);
                    }
                }]);

                return AutoComplete;
            }(ComboBox));

            __decorate$3([Complex({ value: null, iconCss: null, groupBy: null }, FieldSettings)], AutoComplete.prototype, "fields", void 0);
            __decorate$3([Property(true)], AutoComplete.prototype, "ignoreCase", void 0);
            __decorate$3([Property(false)], AutoComplete.prototype, "showPopupButton", void 0);
            __decorate$3([Property(false)], AutoComplete.prototype, "highlight", void 0);
            __decorate$3([Property(20)], AutoComplete.prototype, "suggestionCount", void 0);
            __decorate$3([Property({})], AutoComplete.prototype, "htmlAttributes", void 0);
            __decorate$3([Property(null)], AutoComplete.prototype, "query", void 0);
            __decorate$3([Property(1)], AutoComplete.prototype, "minLength", void 0);
            __decorate$3([Property('Contains')], AutoComplete.prototype, "filterType", void 0);
            __decorate$3([Event()], AutoComplete.prototype, "filtering", void 0);
            __decorate$3([Property(null)], AutoComplete.prototype, "index", void 0);
            __decorate$3([Property('Never')], AutoComplete.prototype, "floatLabelType", void 0);
            __decorate$3([Property(null)], AutoComplete.prototype, "valueTemplate", void 0);
            __decorate$3([Property(null)], AutoComplete.prototype, "filterBarPlaceholder", void 0);
            __decorate$3([Property(false)], AutoComplete.prototype, "allowFiltering", void 0);
            __decorate$3([Property(null)], AutoComplete.prototype, "text", void 0);
            _export('AutoComplete', AutoComplete = __decorate$3([NotifyPropertyChanges], AutoComplete));

            /**
             * export all modules from current location
             */

            /**
             * FloatLable Moduel
             * Specifies whether to display the floating label above the input element.
             */
            FLOATLINE = 'e-float-line';
            FLOATTEXT = 'e-float-text';
            LABELTOP = 'e-label-top';
            LABELBOTTOM = 'e-label-bottom';

            __decorate$4 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            FOCUS = 'e-input-focus';
            DISABLED = 'e-disabled';
            OVER_ALL_WRAPPER = 'e-multiselect e-input-group';
            ELEMENT_WRAPPER = 'e-multi-select-wrapper';
            ELEMENT_MOBILE_WRAPPER = 'e-mob-wrapper';
            HIDE_LIST = 'e-hide-listitem';
            DELIMITER_VIEW = 'e-delim-view';
            CHIP_WRAPPER = 'e-chips-collection';
            CHIP = 'e-chips';
            CHIP_CONTENT = 'e-chipcontent';
            CHIP_CLOSE = 'e-chips-close';
            CHIP_SELECTED = 'e-chip-selected';
            SEARCHBOX_WRAPPER = 'e-searcher';
            DELIMITER_VIEW_WRAPPER = 'e-delimiter';
            ZERO_SIZE = 'e-zero-size';
            REMAIN_WRAPPER = 'e-remain';
            CLOSEICON_CLASS = 'e-chips-close e-close-hooker';
            DELIMITER_WRAPPER = 'e-delim-values';
            POPUP_WRAPPER = 'e-ddl e-popup e-multi-select-list-wrapper';
            INPUT_ELEMENT = 'e-dropdownbase';
            RTL_CLASS = 'e-rtl';
            CLOSE_ICON_HIDE = 'e-close-icon-hide';
            MOBILE_CHIP = 'e-mob-chip';
            FOOTER = 'e-ddl-footer';
            HEADER = 'e-ddl-header';
            DISABLE_ICON = 'e-ddl-disable-icon';
            SPINNER_CLASS$1 = 'e-ms-spinner-icon';
            HIDDEN_ELEMENT = 'e-multi-hidden';
            _destroy = 'destroy';
            dropdownIcon = 'e-input-group-icon e-ddl-icon';
            iconAnimation = 'e-icon-anim';

            _export('MultiSelect', MultiSelect = function (_DropDownBase2) {
                _inherits(MultiSelect, _DropDownBase2);

                /**
                 * Constructor for creating the DropDownList widget.
                 */
                function MultiSelect(option, element) {
                    _classCallCheck(this, MultiSelect);

                    var _this13 = _possibleConstructorReturn(this, (MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).call(this, option, element));

                    _this13.mobFilter = true;
                    _this13.isFiltered = false;
                    _this13.focused = true;
                    _this13.isValidKey = false;
                    _this13.scrollFocusStatus = false;
                    _this13.keyDownStatus = false;
                    return _this13;
                }

                _createClass(MultiSelect, [{
                    key: 'enableRTL',
                    value: function enableRTL(state) {
                        if (state) {
                            this.overAllWrapper.classList.add(RTL_CLASS);
                        } else {
                            this.overAllWrapper.classList.remove(RTL_CLASS);
                        }
                        if (this.popupObj) {
                            this.popupObj.enableRtl = state;
                            this.popupObj.dataBind();
                        }
                    }
                }, {
                    key: 'requiredModules',
                    value: function requiredModules() {
                        var modules = [];
                        if (this.mode === 'CheckBox') {
                            this.allowCustomValue = false;
                            this.hideSelectedItem = false;
                            this.closePopupOnSelect = false;
                            this.allowFiltering = true;
                            modules.push({
                                member: 'CheckBoxSelection',
                                args: [this]
                            });
                        }
                        return modules;
                    }
                }, {
                    key: 'updateHTMLAttribute',
                    value: function updateHTMLAttribute() {
                        if (Object.keys(this.htmlAttributes).length) {
                            var _iteratorNormalCompletion17 = true;
                            var _didIteratorError17 = false;
                            var _iteratorError17 = undefined;

                            try {
                                for (var _iterator17 = Object.keys(this.htmlAttributes)[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                                    var htmlAttr = _step17.value;

                                    switch (htmlAttr) {
                                        case 'class':
                                            this.overAllWrapper.classList.add(this.htmlAttributes[htmlAttr]);
                                            this.popupWrapper.classList.add(this.htmlAttributes[htmlAttr]);
                                            break;
                                        case 'disabled':
                                            this.enable(false);
                                            break;
                                        case 'placeholder':
                                            this.inputElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                                            break;
                                        default:
                                            var defaultAttr = ['title', 'id'];
                                            var validateAttr = ['name', 'required'];
                                            if (validateAttr.indexOf(htmlAttr) > -1) {
                                                this.hiddenElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                                            } else if (defaultAttr.indexOf(htmlAttr) > -1) {
                                                this.element.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                                            } else {
                                                this.overAllWrapper.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                                            }
                                            break;
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
                        }
                    }
                }, {
                    key: 'updateReadonly',
                    value: function updateReadonly(state) {
                        if (state || this.mode === 'CheckBox') {
                            this.inputElement.setAttribute('readonly', 'true');
                        } else {
                            this.inputElement.removeAttribute('readonly');
                        }
                    }
                }, {
                    key: 'updateClearButton',
                    value: function updateClearButton(state) {
                        if (state) {
                            if (this.overAllClear.parentNode) {
                                this.overAllClear.style.display = '';
                            } else {
                                this.componentWrapper.appendChild(this.overAllClear);
                            }
                            this.componentWrapper.classList.remove(CLOSE_ICON_HIDE);
                        } else {
                            this.overAllClear.style.display = 'none';
                            this.componentWrapper.classList.add(CLOSE_ICON_HIDE);
                        }
                    }
                }, {
                    key: 'updateCssClass',
                    value: function updateCssClass() {
                        if (this.cssClass) {
                            this.popupWrapper.classList.add(this.cssClass);
                            this.overAllWrapper.classList.add(this.cssClass);
                        }
                    }
                }, {
                    key: 'onPopupShown',
                    value: function onPopupShown() {
                        if (Browser.isDevice && this.mode === 'CheckBox' && this.allowFiltering) {
                            var proxy = this;
                            window.onpopstate = function () {
                                proxy.hidePopup();
                            };
                            history.pushState({}, '');
                        }
                        var eventArgs = { popup: this.popupObj, cancel: false };
                        this.trigger('open', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        var animModel = { name: 'FadeIn', duration: 100 };
                        this.focusAtFirstListItem();
                        document.body.appendChild(this.popupObj.element);
                        this.refreshPopup();
                        if (this.mode === 'CheckBox') {
                            addClass([this.overAllWrapper], [iconAnimation]);
                        }
                        this.popupObj.show(animModel);
                        attributes(this.inputElement, { 'aria-expanded': 'true' });
                        if (!this.isFirstClick) {
                            var ulElement = this.list.querySelector('ul');
                            if (ulElement) {
                                this.mainList = ulElement.cloneNode ? ulElement.cloneNode(true) : ulElement;
                            }
                            this.isFirstClick = true;
                        }
                        this.refreshListItems(null);
                        this.notify('reOrder', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', e: this });
                    }
                }, {
                    key: 'focusAtFirstListItem',
                    value: function focusAtFirstListItem() {
                        if (this.ulElement && this.ulElement.querySelector('li.' + dropDownBaseClasses.li)) {
                            var element = void 0;
                            if (this.mode === 'CheckBox') {
                                element = this.list.querySelector('li.' + dropDownBaseClasses.li + ':not(.' + HIDE_LIST + ')');
                            } else {
                                element = this.ulElement.querySelector('li.' + dropDownBaseClasses.li + ':not(.' + HIDE_LIST + ')');
                            }
                            if (element !== null) {
                                this.removeFocus();
                                this.addListFocus(element);
                            }
                        }
                    }
                }, {
                    key: 'focusAtLastListItem',
                    value: function focusAtLastListItem(data) {
                        var activeElement = void 0;
                        if (data) {
                            activeElement = Search(data, this.liCollections, 'StartsWith', this.ignoreCase);
                        } else {
                            if (this.value && this.value.length) {
                                Search(this.value[this.value.length - 1], this.liCollections, 'StartsWith', this.ignoreCase);
                            } else {
                                activeElement = null;
                            }
                        }
                        if (activeElement && activeElement.item !== null) {
                            this.addListFocus(activeElement.item);
                            this.scrollBottom(activeElement.item, activeElement.index);
                        }
                    }
                }, {
                    key: 'getAriaAttributes',
                    value: function getAriaAttributes() {
                        var ariaAttributes = {
                            'aria-disabled': 'false',
                            'aria-owns': this.element.id + '_options',
                            'role': 'listbox',
                            'aria-multiselectable': 'true',
                            'aria-activedescendant': 'null',
                            'aria-haspopup': 'true',
                            'aria-expanded': 'false'
                        };
                        return ariaAttributes;
                    }
                }, {
                    key: 'updateListARIA',
                    value: function updateListARIA() {
                        attributes(this.ulElement, { 'id': this.element.id + '_options', 'role': 'listbox', 'aria-hidden': 'false' });
                        attributes(this.inputElement, this.getAriaAttributes());
                        var li = void 0;
                        li = this.list.querySelectorAll('li.' + dropDownBaseClasses.li);
                        var temp = li.length;
                        if (li && li.length) {
                            while (temp > 0) {
                                if (li[temp - 1].getAttribute('aria-selected') !== 'true') {
                                    li[temp - 1].setAttribute('aria-selected', 'false');
                                }
                                temp--;
                            }
                        }
                    }
                }, {
                    key: 'removelastSelection',
                    value: function removelastSelection(e) {
                        var elements = void 0;
                        elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
                        var value = elements[elements.length - 1].getAttribute('data-value');
                        if (!isNullOrUndefined(this.value)) {
                            this.tempValues = this.value.slice();
                        }
                        this.removeValue(value, e);
                        this.removeChipSelection();
                        this.updateDelimeter(this.delimiterChar);
                        this.makeTextBoxEmpty();
                        if (this.allowFiltering && this.mainList && this.listData) {
                            var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
                            this.onActionComplete(list, this.mainData);
                            this.refreshSelection();
                        }
                        this.focusAtLastListItem(value);
                    }
                }, {
                    key: 'onActionFailure',
                    value: function onActionFailure(e) {
                        _get(MultiSelect.prototype.__proto__ || Object.getPrototypeOf(MultiSelect.prototype), 'onActionFailure', this).call(this, e);
                        this.renderPopup();
                        this.onPopupShown();
                    }
                }, {
                    key: 'targetElement',
                    value: function targetElement() {
                        this.targetInputElement = this.inputElement;
                        if (this.mode === 'CheckBox') {
                            this.notify('targetElement', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
                        }
                        return this.targetInputElement.value;
                    }
                }, {
                    key: 'onActionComplete',
                    value: function onActionComplete(ulElement, list, e, isUpdated) {
                        _get(MultiSelect.prototype.__proto__ || Object.getPrototypeOf(MultiSelect.prototype), 'onActionComplete', this).call(this, ulElement, list, e);
                        if (this.mode === 'CheckBox' && this.showSelectAll) {
                            this.notify('selectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
                        }
                        if (!this.mainList && !this.mainData) {
                            this.mainList = ulElement.cloneNode ? ulElement.cloneNode(true) : ulElement;
                            this.mainData = list;
                            this.mainListCollection = this.liCollections;
                        } else if (!isNullOrUndefined(this.mainData) && this.mainData.length === 0) {
                            this.mainData = list;
                        }
                        if ((this.remoteCustomValue || list.length <= 0) && this.allowCustomValue && this.inputFocus && this.allowFiltering) {
                            this.checkForCustomValue(this.tempQuery, this.fields);
                            return;
                        }
                        if (this.value && this.value.length) {
                            this.refreshSelection();
                        }
                        this.updateListARIA();
                        this.unwireListEvents();
                        this.wireListEvents();
                        if (!isNullOrUndefined(this.setInitialValue)) {
                            this.setInitialValue();
                        }
                        if (!isNullOrUndefined(this.selectAllAction)) {
                            this.selectAllAction();
                        }
                        if (this.setDynValue) {
                            this.initialValueUpdate();
                            this.initialUpdate();
                            this.refreshPlaceHolder();
                            this.updateValueState(null, this.value, null);
                        }
                        this.renderPopup();
                        this.refreshPopup();
                        if (this.beforePopupOpen) {
                            this.beforePopupOpen = false;
                            this.onPopupShown();
                        }
                    }
                }, {
                    key: 'refreshSelection',
                    value: function refreshSelection() {
                        var value = void 0;
                        var element = void 0;
                        var className = this.hideSelectedItem ? HIDE_LIST : dropDownBaseClasses.selected;
                        if (!isNullOrUndefined(this.value)) {
                            for (var index = 0; this.value[index]; index++) {
                                value = this.value[index];
                                element = this.ulElement.querySelector('li[data-value="' + value + '"]');
                                if (element) {
                                    addClass([element], className);
                                    if (this.hideSelectedItem && element.previousSibling && element.previousElementSibling.classList.contains(dropDownBaseClasses.group) && (!element.nextElementSibling || element.nextElementSibling.classList.contains(dropDownBaseClasses.group))) {
                                        addClass([element.previousElementSibling], className);
                                    }
                                    if (this.hideSelectedItem && element.classList.contains(dropDownBaseClasses.focus)) {
                                        removeClass([element], dropDownBaseClasses.focus);
                                        var listEle = element.parentElement.querySelectorAll('.' + dropDownBaseClasses.li + ':not(.' + HIDE_LIST + ')');
                                        if (listEle.length > 0) {
                                            addClass([listEle[0]], dropDownBaseClasses.focus);
                                        } else {
                                            this.l10nUpdate();
                                            addClass([this.list], dropDownBaseClasses.noData);
                                        }
                                    }
                                    element.setAttribute('aria-selected', 'true');
                                    if (this.mode === 'CheckBox' && element.classList.contains('e-active')) {
                                        var ariaValue = element.firstElementChild.getAttribute('aria-checked');
                                        if (isNullOrUndefined(ariaValue) || ariaValue === 'false') {
                                            var args = {
                                                module: 'CheckBoxSelection',
                                                enable: this.mode === 'CheckBox',
                                                li: element,
                                                e: null
                                            };
                                            this.notify('updatelist', args);
                                        }
                                    }
                                }
                            }
                        }
                        this.checkSelectAll();
                        this.checkMaxSelection();
                    }
                }, {
                    key: 'checkSelectAll',
                    value: function checkSelectAll() {
                        var searchCount = this.list.querySelectorAll('li.' + dropDownBaseClasses.li).length;
                        var searchActiveCount = this.list.querySelectorAll('li.' + dropDownBaseClasses.selected).length;
                        if (searchCount === searchActiveCount && this.mode === 'CheckBox' && this.showSelectAll) {
                            this.notify('checkSelectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'check' });
                        }
                        if (searchCount !== searchActiveCount && this.mode === 'CheckBox' && this.showSelectAll) {
                            this.notify('checkSelectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'uncheck' });
                        }
                    }
                }, {
                    key: 'openClick',
                    value: function openClick(e) {
                        if (!this.openOnClick) {
                            if (this.targetElement() !== '') {
                                this.showPopup();
                            } else {
                                this.hidePopup();
                            }
                        }
                    }
                }, {
                    key: 'KeyUp',
                    value: function KeyUp(e) {
                        var _this14 = this;

                        this.isValidKey = e.keyCode === 8 || this.isValidKey;
                        if (this.isValidKey) {
                            this.isValidKey = false;
                            this.expandTextbox();
                            switch (e.keyCode) {
                                default:
                                    if (!this.isPopupOpen() && this.openOnClick) {
                                        this.showPopup();
                                    }
                                    this.openClick(e);
                                    if (this.checkTextLength() && !this.allowFiltering && e.keyCode !== 8) {
                                        this.focusAtFirstListItem();
                                    } else {
                                        var text = this.targetElement();
                                        this.keyCode = e.keyCode;
                                        if (this.allowFiltering) {
                                            var eventArgs = {
                                                preventDefaultAction: false,
                                                text: this.targetElement(),
                                                updateData: function updateData(dataSource, query, fields) {
                                                    if (eventArgs.cancel) {
                                                        return;
                                                    }
                                                    _this14.isFiltered = true;
                                                    _this14.remoteFilterAction = true;
                                                    _this14.dataUpdater(dataSource, query, fields);
                                                },
                                                event: e,
                                                cancel: false
                                            };
                                            this.trigger('filtering', eventArgs);
                                            if (eventArgs.cancel) {
                                                return;
                                            }
                                            if (!this.isFiltered && !eventArgs.preventDefaultAction) {
                                                this.filterAction = true;
                                                this.dataUpdater(this.dataSource, null, this.fields);
                                            }
                                        } else if (this.allowCustomValue) {
                                            var query = new Query();
                                            query = text !== '' ? query.where(this.fields.text, 'startswith', text, true, this.ignoreAccent) : query;
                                            this.dataUpdater(this.mainData, query, this.fields);
                                            break;
                                        } else {
                                            var liCollections = void 0;
                                            liCollections = this.list.querySelectorAll('li.' + dropDownBaseClasses.li + ':not(.e-hide-listitem)');
                                            var activeElement = Search(this.targetElement(), liCollections, 'StartsWith', this.ignoreCase);
                                            if (activeElement && activeElement.item !== null) {
                                                this.addListFocus(activeElement.item);
                                                this.list.scrollTop = activeElement.item.getBoundingClientRect().height * activeElement.index;
                                            } else if (this.targetElement() !== '') {
                                                this.removeFocus();
                                            } else {
                                                this.focusAtFirstListItem();
                                            }
                                        }
                                    }
                            }
                        }
                    }
                }, {
                    key: 'getQuery',
                    value: function getQuery(query) {
                        var filterQuery = query ? query.clone() : this.query ? this.query.clone() : new Query();
                        if (this.filterAction) {
                            if (this.targetElement() !== null) {
                                var dataType = this.typeOfData(this.dataSource).typeof;
                                if (!(this.dataSource instanceof DataManager) && dataType === 'string' || dataType === 'number') {
                                    filterQuery.where('', 'startswith', this.targetElement(), true, this.ignoreAccent);
                                } else {
                                    var fields = this.fields;
                                    filterQuery.where(!isNullOrUndefined(fields.text) ? fields.text : '', 'startswith', this.targetElement(), true, this.ignoreAccent);
                                }
                            }
                            return filterQuery;
                        } else {
                            if (this.dataSource instanceof DataManager && !isNullOrUndefined(this.value) && !this.remoteFilterAction) {
                                var predicate = void 0;
                                var field = isNullOrUndefined(this.fields.value) ? this.fields.text : this.fields.value;
                                for (var i = 0; i < this.value.length; i++) {
                                    if (i === 0) {
                                        predicate = new Predicate(field, 'equal', this.value[i]);
                                    } else {
                                        predicate = predicate.or(field, 'equal', this.value[i]);
                                    }
                                }
                                return new Query().where(predicate);
                            } else {
                                return query ? query : this.query ? this.query : new Query();
                            }
                        }
                    }
                }, {
                    key: 'dataUpdater',
                    value: function dataUpdater(dataSource, query, fields) {
                        if (this.targetElement().trim() === '') {
                            var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
                            this.remoteCustomValue = false;
                            this.onActionComplete(list, this.mainData);
                            if (this.value && this.value.length) {
                                this.refreshSelection();
                            }
                            if (this.keyCode !== 8) {
                                this.focusAtFirstListItem();
                            }
                            this.notify('reOrder', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', e: this });
                        } else {
                            this.resetList(dataSource, fields, query);
                            if (this.allowCustomValue) {
                                if (!(dataSource instanceof DataManager)) {
                                    this.checkForCustomValue(query, fields);
                                } else {
                                    this.remoteCustomValue = true;
                                    this.tempQuery = query;
                                }
                            }
                        }
                        this.refreshPopup();
                    }
                }, {
                    key: 'checkForCustomValue',
                    value: function checkForCustomValue(query, fields) {
                        var dataChecks = !this.getValueByText(this.inputElement.value, this.ignoreCase);
                        if (this.allowCustomValue && dataChecks) {
                            var text = this.fields.text;
                            var value = this.fields.value;
                            var data = {};
                            var customData = !isNullOrUndefined(this.mainData) && this.mainData.length > 0 ? this.mainData[0] : this.mainData;
                            if (typeof customData !== 'string') {
                                var dataSource = Object.keys(customData);
                                for (var i = 0; i < dataSource.length; i++) {
                                    data[dataSource[i]] = '';
                                }
                                data[value] = data[text] = this.inputElement.value;
                                var tempData = JSON.parse(JSON.stringify(this.listData));
                                tempData.splice(0, 0, data);
                                this.resetList(tempData, fields ? fields : this.fields, query);
                            } else {
                                var _tempData = [this.inputElement.value];
                                this.resetList(_tempData, fields ? fields : this.fields);
                            }
                        }
                        if (this.value && this.value.length) {
                            this.refreshSelection();
                        }
                    }
                }, {
                    key: 'getNgDirective',
                    value: function getNgDirective() {
                        return 'EJS-MULTISELECT';
                    }
                }, {
                    key: 'wrapperClick',
                    value: function wrapperClick(e) {
                        this.setDynValue = false;
                        if (this.readonly || !this.enabled) {
                            return;
                        }
                        if (e.target === this.overAllClear) {
                            e.preventDefault();
                            return;
                        }
                        if (!this.inputFocus && this.mode !== 'CheckBox') {
                            this.inputElement.focus();
                        }
                        if (this.mode === 'CheckBox') {
                            this.focusIn();
                        }
                        if (e.target && e.target.classList.toString().indexOf(CHIP_CLOSE) !== -1) {
                            if (this.isPopupOpen()) {
                                this.refreshPopup();
                            }
                            return;
                        }
                        if (!this.isPopupOpen() && this.openOnClick) {
                            this.showPopup();
                        } else {
                            this.hidePopup();
                            if (this.mode === 'CheckBox') {
                                this.inputElement.focus();
                            }
                        }
                        e.preventDefault();
                    }
                }, {
                    key: 'enable',
                    value: function enable(state) {
                        if (state) {
                            this.overAllWrapper.classList.remove(DISABLED);
                            this.inputElement.removeAttribute('disabled');
                            attributes(this.inputElement, { 'aria-disabled': 'false' });
                        } else {
                            this.overAllWrapper.classList.add(DISABLED);
                            this.inputElement.setAttribute('disabled', 'true');
                            attributes(this.inputElement, { 'aria-disabled': 'true' });
                        }
                        if (this.enabled !== state) {
                            this.enabled = state;
                        }
                        this.hidePopup();
                    }
                }, {
                    key: 'onBlur',
                    value: function onBlur(eve) {
                        var target = !isNullOrUndefined(eve) && eve.relatedTarget;
                        if (document.body.contains(this.popupObj.element) && this.popupObj.element.contains(target)) {
                            if (this.mode !== 'CheckBox') {
                                this.inputElement.focus();
                            }
                            return;
                        }
                        if (this.mode === 'CheckBox' && Browser.isIE && !isNullOrUndefined(eve)) {
                            this.inputFocus = false;
                            this.overAllWrapper.classList.remove(FOCUS);
                            return;
                        }
                        if (this.scrollFocusStatus) {
                            eve.preventDefault();
                            this.inputElement.focus();
                            this.scrollFocusStatus = false;
                            return;
                        }
                        this.inputFocus = false;
                        this.overAllWrapper.classList.remove(FOCUS);
                        if (this.mode !== 'Box' && this.mode !== 'CheckBox') {
                            this.refreshListItems(null);
                            this.updateDelimView();
                        }
                        this.updateValueState(eve, this.value, this.tempValues);
                        this.dispatchEvent(this.hiddenElement, 'change');
                        this.overAllClear.style.display = 'none';
                        if (this.isPopupOpen()) {
                            this.hidePopup();
                        }
                        this.makeTextBoxEmpty();
                        this.trigger('blur');
                        this.focused = true;
                        if (Browser.isDevice && this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
                            this.removeChipFocus();
                        }
                        this.removeChipSelection();
                        this.refreshInputHight();
                        floatLabelBlur(this.overAllWrapper, this.componentWrapper, this.value, this.floatLabelType, this.placeholder);
                        this.refreshPlaceHolder();
                    }
                }, {
                    key: 'refreshInputHight',
                    value: function refreshInputHight() {
                        if (!this.value || !this.value.length) {
                            this.searchWrapper.classList.remove(ZERO_SIZE);
                        } else {
                            this.searchWrapper.classList.add(ZERO_SIZE);
                        }
                    }
                }, {
                    key: 'validateValues',
                    value: function validateValues(newValue, oldValue) {
                        return JSON.stringify(newValue.slice().sort()) !== JSON.stringify(oldValue.slice().sort());
                    }
                }, {
                    key: 'updateValueState',
                    value: function updateValueState(event, newVal, oldVal) {
                        var newValue = newVal ? newVal : [];
                        var oldValue = oldVal ? oldVal : [];
                        if (this.validateValues(newValue, oldValue)) {
                            var eventArgs = {
                                e: event,
                                oldValue: oldVal,
                                value: newVal,
                                isInteracted: event ? true : false
                            };
                            this.trigger('change', eventArgs);
                        }
                    }
                }, {
                    key: 'getPagingCount',
                    value: function getPagingCount() {
                        var height = this.list.classList.contains(dropDownBaseClasses.noData) ? null : getComputedStyle(this.getItems()[0], null).getPropertyValue('height');
                        return Math.round(this.list.getBoundingClientRect().height / parseInt(height, 10));
                    }
                }, {
                    key: 'pageUpSelection',
                    value: function pageUpSelection(steps) {
                        var collection = this.list.querySelectorAll('li.' + dropDownBaseClasses.li + ':not(.e-reorder-hide)');
                        var previousItem = void 0;
                        if (this.mode === 'CheckBox') {
                            previousItem = steps >= 0 ? collection[steps + 1] : collection[0];
                        } else {
                            previousItem = steps >= 0 ? this.liCollections[steps + 1] : this.liCollections[0];
                        }
                        this.addListFocus(previousItem);
                        this.scrollBottom(previousItem, this.getIndexByValue(previousItem.getAttribute('data-value')));
                    }
                }, {
                    key: 'pageDownSelection',
                    value: function pageDownSelection(steps) {
                        var list = this.getItems();
                        var collection = this.list.querySelectorAll('li.' + dropDownBaseClasses.li + ':not(.e-reorder-hide)');
                        var previousItem = void 0;
                        if (this.mode === 'CheckBox') {
                            previousItem = steps <= collection.length ? collection[steps - 1] : collection[collection.length - 1];
                        } else {
                            previousItem = steps <= list.length ? this.liCollections[steps - 1] : this.liCollections[list.length - 1];
                        }
                        this.addListFocus(previousItem);
                        this.scrollBottom(previousItem, this.getIndexByValue(previousItem.getAttribute('data-value')));
                    }
                }, {
                    key: 'focusIn',
                    value: function focusIn() {
                        if (this.enabled && !this.readonly) {
                            this.inputFocus = true;
                            if (!this.value) {
                                this.tempValues = this.value;
                            } else {
                                this.tempValues = this.value.slice();
                            }
                            if (this.value && this.value.length) {
                                if (this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
                                    this.chipCollectionWrapper.style.display = '';
                                } else {
                                    this.showDelimWrapper();
                                }
                                if (this.mode !== 'CheckBox') {
                                    this.viewWrapper.style.display = 'none';
                                }
                            }
                            if (this.mode !== 'CheckBox') {
                                this.searchWrapper.classList.remove(ZERO_SIZE);
                            }
                            if (this.focused) {
                                this.inputElement.focus();
                                this.trigger('focus');
                                this.focused = false;
                            }
                            if (!this.overAllWrapper.classList.contains(FOCUS)) {
                                this.overAllWrapper.classList.add(FOCUS);
                            }
                            floatLabelFocus(this.overAllWrapper, this.componentWrapper);
                            if (this.isPopupOpen()) {
                                this.refreshPopup();
                            }
                            return true;
                        } else {
                            return false;
                        }
                    }
                }, {
                    key: 'showDelimWrapper',
                    value: function showDelimWrapper() {
                        if (this.mode === 'CheckBox') {
                            this.viewWrapper.style.display = '';
                        } else {
                            this.delimiterWrapper.style.display = '';
                        }
                        this.componentWrapper.classList.add(DELIMITER_VIEW_WRAPPER);
                    }
                }, {
                    key: 'hideDelimWrapper',
                    value: function hideDelimWrapper() {
                        this.delimiterWrapper.style.display = 'none';
                        this.componentWrapper.classList.remove(DELIMITER_VIEW_WRAPPER);
                    }
                }, {
                    key: 'expandTextbox',
                    value: function expandTextbox() {
                        var size = 5;
                        if (this.placeholder) {
                            size = size > this.inputElement.placeholder.length ? size : this.inputElement.placeholder.length;
                        }
                        if (this.inputElement.value.length > size) {
                            this.inputElement.size = this.inputElement.value.length;
                        } else {
                            this.inputElement.size = size;
                        }
                    }
                }, {
                    key: 'isPopupOpen',
                    value: function isPopupOpen() {
                        return this.popupWrapper !== null && this.popupWrapper.parentElement !== null;
                    }
                }, {
                    key: 'refreshPopup',
                    value: function refreshPopup() {
                        if (this.popupObj && this.mobFilter) {
                            this.popupObj.setProperties({ width: this.calcPopupWidth() });
                            this.popupObj.refreshPosition(this.overAllWrapper);
                            if (!Browser.isIE) {
                                this.popupObj.show();
                            }
                        }
                    }
                }, {
                    key: 'checkTextLength',
                    value: function checkTextLength() {
                        return this.targetElement().length < 1;
                    }
                }, {
                    key: 'popupKeyActions',
                    value: function popupKeyActions(keyCode) {
                        switch (keyCode) {
                            case 38:
                                this.hidePopup();
                                if (this.mode === 'CheckBox') {
                                    this.inputElement.focus();
                                }
                                break;
                            case 40:
                                if (!this.isPopupOpen()) {
                                    this.showPopup();
                                }
                                break;
                        }
                    }
                }, {
                    key: 'updateAriaAttribute',
                    value: function updateAriaAttribute() {
                        var focusedItem = this.list.querySelector('.' + dropDownBaseClasses.focus);
                        if (!isNullOrUndefined(focusedItem)) {
                            this.inputElement.setAttribute('aria-activedescendant', focusedItem.id);
                        }
                    }
                }, {
                    key: 'onKeyDown',
                    value: function onKeyDown(e) {
                        this.keyDownStatus = true;
                        if (e.keyCode > 111 && e.keyCode < 124) {
                            return;
                        }
                        if (e.altKey) {
                            this.popupKeyActions(e.keyCode);
                            e.preventDefault();
                            return;
                        } else if (this.isPopupOpen()) {
                            var focusedItem = this.list.querySelector('.' + dropDownBaseClasses.focus);
                            var activeIndex = void 0;
                            switch (e.keyCode) {
                                case 36:
                                case 35:
                                    break;
                                case 33:
                                    e.preventDefault();
                                    if (focusedItem) {
                                        this.getIndexByValue(focusedItem.getAttribute('data-value'));
                                        this.pageUpSelection(activeIndex - this.getPagingCount());
                                        this.updateAriaAttribute();
                                    }
                                    return;
                                case 34:
                                    e.preventDefault();
                                    if (focusedItem) {
                                        this.getIndexByValue(focusedItem.getAttribute('data-value'));
                                        this.pageDownSelection(activeIndex + this.getPagingCount());
                                        this.updateAriaAttribute();
                                    }
                                    return;
                                case 38:
                                    e.preventDefault();
                                    this.moveByList(-1);
                                    this.updateAriaAttribute();
                                    break;
                                case 40:
                                    e.preventDefault();
                                    this.moveByList(1);
                                    this.updateAriaAttribute();
                                    break;
                                case 27:
                                    e.preventDefault();
                                    this.hidePopup();
                                    if (this.mode === 'CheckBox') {
                                        this.inputElement.focus();
                                    }
                                    return;
                                case 13:
                                    e.preventDefault();
                                    if (this.mode !== 'CheckBox') {
                                        this.selectByKey(e);
                                    }
                                    return;
                                case 32:
                                    if (this.mode === 'CheckBox') {
                                        e.preventDefault();
                                        this.selectByKey(e);
                                    }
                                    return;
                            }
                        } else {
                            switch (e.keyCode) {
                                case 13:
                                case 9:
                                case 16:
                                case 17:
                                case 20:
                                    return;
                                case 40:
                                    if (this.openOnClick) {
                                        this.showPopup();
                                    }
                                    break;
                                case 27:
                                    e.preventDefault();
                                    this.escapeAction();
                                    return;
                            }
                        }
                        if (this.checkTextLength()) {
                            if (this.mode !== 'Delimiter' && this.mode !== 'CheckBox' && this.value && this.value.length) {
                                switch (e.keyCode) {
                                    case 37:
                                        //left arrow  
                                        e.preventDefault();
                                        this.moveBy(-1);
                                        break;
                                    case 39:
                                        //right arrow  
                                        e.preventDefault();
                                        this.moveBy(1);
                                        break;
                                    case 8:
                                        this.removelastSelection(e);
                                        break;
                                    case 46:
                                        //del
                                        this.removeSelectedChip(e);
                                        break;
                                }
                            } else if (e.keyCode === 8 && this.mode === 'Delimiter') {
                                if (this.value && this.value.length) {
                                    e.preventDefault();
                                    var temp = this.value[this.value.length - 1];
                                    this.removeValue(temp, e);
                                    this.updateDelimeter(this.delimiterChar);
                                    this.focusAtLastListItem(temp);
                                }
                            }
                        }
                        this.expandTextbox();
                        this.refreshPopup();
                    }
                }, {
                    key: 'selectByKey',
                    value: function selectByKey(e) {
                        this.removeChipSelection();
                        this.selectListByKey(e);
                        if (this.hideSelectedItem) {
                            this.focusAtFirstListItem();
                        }
                    }
                }, {
                    key: 'escapeAction',
                    value: function escapeAction() {
                        var temp = this.tempValues ? this.tempValues.slice() : [];
                        if (this.value && this.validateValues(this.value, temp)) {
                            this.value = temp;
                            this.initialValueUpdate();
                            if (this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
                                this.chipCollectionWrapper.style.display = '';
                            } else {
                                this.showDelimWrapper();
                            }
                            this.refreshPlaceHolder();
                            if (this.value.length) {
                                this.showOverAllClear();
                            } else {
                                this.hideOverAllClear();
                            }
                        }
                        this.makeTextBoxEmpty();
                    }
                }, {
                    key: 'scrollBottom',
                    value: function scrollBottom(selectedLI, activeIndex) {
                        var currentOffset = this.list.getBoundingClientRect().height;
                        var nextBottom = selectedLI.offsetTop + selectedLI.getBoundingClientRect().height - this.list.scrollTop;
                        var nextOffset = this.list.scrollTop + nextBottom - currentOffset;
                        var boxRange = selectedLI.offsetTop + selectedLI.getBoundingClientRect().height - this.list.scrollTop;
                        boxRange = this.fields.groupBy && !isUndefined(this.fixedHeaderElement) ? boxRange - this.fixedHeaderElement.getBoundingClientRect().height : boxRange;
                        if (activeIndex === 0) {
                            this.list.scrollTop = 0;
                        } else if (nextBottom > currentOffset) {
                            this.list.scrollTop = nextOffset;
                        } else if (!(boxRange > 0 && this.list.getBoundingClientRect().height > boxRange)) {
                            this.list.scrollTop = nextOffset;
                        }
                    }
                }, {
                    key: 'scrollTop',
                    value: function scrollTop(selectedLI, activeIndex) {
                        var nextOffset = selectedLI.offsetTop - this.list.scrollTop;
                        var nextBottom = selectedLI.offsetTop + selectedLI.getBoundingClientRect().height - this.list.scrollTop;
                        nextOffset = this.fields.groupBy && !isUndefined(this.fixedHeaderElement) ? nextOffset - this.fixedHeaderElement.getBoundingClientRect().height : nextOffset;
                        var boxRange = selectedLI.offsetTop + selectedLI.getBoundingClientRect().height - this.list.scrollTop;
                        if (activeIndex === 0) {
                            this.list.scrollTop = 0;
                        } else if (nextOffset < 0) {
                            this.list.scrollTop = this.list.scrollTop + nextOffset;
                        } else if (!(boxRange > 0 && this.list.getBoundingClientRect().height > boxRange)) {
                            this.list.scrollTop = selectedLI.offsetTop - (this.fields.groupBy && !isUndefined(this.fixedHeaderElement) ? this.fixedHeaderElement.getBoundingClientRect().height : 0);
                        }
                    }
                }, {
                    key: 'selectListByKey',
                    value: function selectListByKey(e) {
                        var li = this.list.querySelector('li.' + dropDownBaseClasses.focus);
                        var limit = this.value && this.value.length ? this.value.length : 0;
                        if (li !== null) {
                            if (li.classList.contains('e-active')) {
                                limit = limit - 1;
                            }
                            if (this.isValidLI(li) && limit < this.maximumSelectionLength) {
                                this.updateListSelection(li, e);
                                this.addListFocus(li);
                                if (this.mode === 'CheckBox') {
                                    this.updateDelimView();
                                    this.refreshInputHight();
                                    this.updateDelimeter(this.delimiterChar);
                                } else {
                                    this.updateDelimeter(this.delimiterChar);
                                }
                                this.makeTextBoxEmpty();
                                if (this.mode !== 'CheckBox') {
                                    this.refreshListItems(li.textContent);
                                }
                                this.refreshPopup();
                                if (this.value && this.value.length) {
                                    this.removeListSelection();
                                    this.refreshSelection();
                                }
                            }
                            if (this.closePopupOnSelect) {
                                this.hidePopup();
                            }
                        }
                        this.refreshPlaceHolder();
                    }
                }, {
                    key: 'refreshListItems',
                    value: function refreshListItems(data) {
                        if ((this.allowFiltering || this.allowCustomValue) && this.mainList && this.listData) {
                            var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
                            this.onActionComplete(list, this.mainData);
                            this.focusAtLastListItem(data);
                            if (this.value && this.value.length) {
                                this.refreshSelection();
                            }
                        }
                    }
                }, {
                    key: 'removeSelectedChip',
                    value: function removeSelectedChip(e) {
                        var selectedElem = this.chipCollectionWrapper.querySelector('span.' + CHIP_SELECTED);
                        var temp = void 0;
                        if (selectedElem !== null) {
                            if (!isNullOrUndefined(this.value)) {
                                this.tempValues = this.value.slice();
                            }
                            temp = selectedElem.nextElementSibling;
                            if (temp !== null) {
                                this.removeChipSelection();
                                this.addChipSelection(temp);
                            }
                            this.removeValue(selectedElem.getAttribute('data-value'), e);
                            this.makeTextBoxEmpty();
                        }
                        if (this.closePopupOnSelect) {
                            this.hidePopup();
                        }
                    }
                }, {
                    key: 'moveByTop',
                    value: function moveByTop(state) {
                        var elements = this.list.querySelectorAll('li.' + dropDownBaseClasses.li);
                        var index = void 0;
                        if (elements.length > 1) {
                            this.removeFocus();
                            index = state ? 0 : elements.length - 1;
                            this.addListFocus(elements[index]);
                            this.scrollBottom(elements[index], index);
                        }
                        this.updateAriaAttribute();
                    }
                }, {
                    key: 'moveByList',
                    value: function moveByList(position) {
                        if (this.list) {
                            var elements = this.list.querySelectorAll('li.' + dropDownBaseClasses.li + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
                            var selectedElem = this.list.querySelector('li.' + dropDownBaseClasses.focus);
                            var temp = -1;
                            if (elements.length) {
                                for (var index = 0; index < elements.length; index++) {
                                    if (elements[index] === selectedElem) {
                                        temp = index;
                                        break;
                                    }
                                }
                                if (position > 0) {
                                    if (temp < elements.length - 1) {
                                        this.removeFocus();
                                        this.addListFocus(elements[++temp]);
                                        this.scrollBottom(elements[temp], temp);
                                    }
                                } else {
                                    if (temp > 0) {
                                        this.removeFocus();
                                        this.addListFocus(elements[--temp]);
                                        this.scrollTop(elements[temp], temp);
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'moveBy',
                    value: function moveBy(position) {
                        var elements = void 0;
                        var selectedElem = void 0;
                        var temp = void 0;
                        elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
                        selectedElem = this.chipCollectionWrapper.querySelector('span.' + CHIP_SELECTED);
                        if (selectedElem === null) {
                            if (position < 0) {
                                this.addChipSelection(elements[elements.length - 1]);
                            }
                        } else {
                            if (position < 0) {
                                temp = selectedElem.previousElementSibling;
                                if (temp !== null) {
                                    this.removeChipSelection();
                                    this.addChipSelection(temp);
                                }
                            } else {
                                temp = selectedElem.nextElementSibling;
                                this.removeChipSelection();
                                if (temp !== null) {
                                    this.addChipSelection(temp);
                                }
                            }
                        }
                    }
                }, {
                    key: 'chipClick',
                    value: function chipClick(e) {
                        if (this.enabled) {
                            var elem = closest(e.target, '.' + CHIP);
                            this.removeChipSelection();
                            this.addChipSelection(elem);
                            this.trigger('chipSelection', e);
                        }
                    }
                }, {
                    key: 'removeChipSelection',
                    value: function removeChipSelection() {
                        if (this.chipCollectionWrapper) {
                            this.removeChipFocus();
                        }
                    }
                }, {
                    key: 'addChipSelection',
                    value: function addChipSelection(element) {
                        addClass([element], CHIP_SELECTED);
                    }
                }, {
                    key: 'onChipRemove',
                    value: function onChipRemove(e) {
                        if (e.which === 3 || e.button === 2) {
                            return;
                        }
                        if (this.enabled && !this.readonly) {
                            var element = e.target.parentElement;
                            var value = this.getFormattedValue(element.getAttribute('data-value'));
                            if (this.isPopupOpen() && this.mode !== 'CheckBox') {
                                this.hidePopup();
                            }
                            if (!this.inputFocus) {
                                this.inputElement.focus();
                            }
                            this.removeValue(value, e);
                            this.updateDelimeter(this.delimiterChar);
                            this.makeTextBoxEmpty();
                            e.preventDefault();
                        }
                    }
                }, {
                    key: 'makeTextBoxEmpty',
                    value: function makeTextBoxEmpty() {
                        this.inputElement.value = '';
                        this.refreshPlaceHolder();
                    }
                }, {
                    key: 'refreshPlaceHolder',
                    value: function refreshPlaceHolder() {
                        if (this.placeholder && this.floatLabelType === 'Never') {
                            if (this.value && this.value.length) {
                                this.inputElement.placeholder = '';
                            } else {
                                this.inputElement.placeholder = this.placeholder;
                            }
                        } else {
                            this.setFloatLabelType();
                        }
                        this.expandTextbox();
                    }
                }, {
                    key: 'removeValue',
                    value: function removeValue(value, eve) {
                        var index = this.value.indexOf(this.getFormattedValue(value));
                        var className = this.hideSelectedItem ? HIDE_LIST : dropDownBaseClasses.selected;
                        if (index !== -1) {
                            var element = this.list.querySelector('li[data-value="' + value + '"]');
                            var eventArgs = {
                                e: eve,
                                item: element,
                                itemData: this.getDataByValue(value),
                                isInteracted: eve ? true : false,
                                cancel: false
                            };
                            this.trigger('removing', eventArgs);
                            if (eventArgs.cancel) {
                                return;
                            }
                            this.value.splice(index, 1);
                            this.setProperties({ value: [].concat([], this.value) }, true);
                            if (element !== null) {
                                element.setAttribute('aria-selected', 'false');
                                removeClass([element], className);
                                this.notify('activeList', {
                                    module: 'CheckBoxSelection',
                                    enable: this.mode === 'CheckBox', li: element,
                                    e: this, index: index
                                });
                                this.notify('updatelist', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', li: element, e: eve });
                                attributes(this.inputElement, { 'aria-activedescendant': element.id });
                                if (this.value.length !== this.mainData.length && this.mode === 'CheckBox' && this.showSelectAll) {
                                    this.notify('checkSelectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'uncheck' });
                                }
                            }
                            this.updateMainList(true, value);
                            this.removeChip(value);
                            this.updateChipStatus();
                            var limit = this.value && this.value.length ? this.value.length : 0;
                            if (limit < this.maximumSelectionLength) {
                                var collection = this.list.querySelectorAll('li.' + dropDownBaseClasses.li + ':not(.e-active)');
                                removeClass(collection, 'e-disable');
                            }
                            this.trigger('removed', eventArgs);
                        }
                    }
                }, {
                    key: 'updateMainList',
                    value: function updateMainList(state, value) {
                        if (this.allowFiltering) {
                            var element2 = this.mainList.querySelector('li[data-value="' + value + '"]');
                            if (element2) {
                                if (state) {
                                    element2.setAttribute('aria-selected', 'false');
                                    removeClass([element2], this.hideSelectedItem ? HIDE_LIST : dropDownBaseClasses.selected);
                                    if (this.mode === 'CheckBox') {
                                        element2.firstElementChild.setAttribute('aria-checked', 'false');
                                        removeClass([element2.firstElementChild.lastElementChild], 'e-check');
                                    }
                                } else {
                                    element2.setAttribute('aria-selected', 'true');
                                    addClass([element2], this.hideSelectedItem ? HIDE_LIST : dropDownBaseClasses.selected);
                                    if (this.mode === 'CheckBox') {
                                        element2.firstElementChild.setAttribute('aria-checked', 'true');
                                        addClass([element2.firstElementChild.lastElementChild], 'e-check');
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'removeChip',
                    value: function removeChip(value) {
                        if (this.chipCollectionWrapper) {
                            var element = this.chipCollectionWrapper.querySelector('span[data-value="' + value + '"]');
                            if (element) {
                                remove(element);
                            }
                        }
                    }
                }, {
                    key: 'updateChipStatus',
                    value: function updateChipStatus() {
                        if (this.value.length) {
                            if (!isNullOrUndefined(this.chipCollectionWrapper)) {
                                this.chipCollectionWrapper.style.display = '';
                            }
                            if (this.mode === 'Delimiter' || this.mode === 'CheckBox') {
                                this.showDelimWrapper();
                            }
                            this.showOverAllClear();
                        } else {
                            if (!isNullOrUndefined(this.chipCollectionWrapper)) {
                                this.chipCollectionWrapper.style.display = 'none';
                            }
                            if (!isNullOrUndefined(this.delimiterWrapper)) {
                                this.delimiterWrapper.style.display = 'none';
                            }
                            this.hideOverAllClear();
                        }
                    }
                }, {
                    key: 'addValue',
                    value: function addValue(value, text, eve) {
                        if (!this.value) {
                            this.value = [];
                        }
                        this.setProperties({ value: [].concat([], this.value, [value]) }, true);
                        var element = this.list.querySelector('li[data-value="' + value + '"]');
                        this.removeFocus();
                        if (element) {
                            this.addListFocus(element);
                            this.addListSelection(element);
                        }
                        if (this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
                            this.addChip(text, value, eve);
                        }
                        this.updateChipStatus();
                        this.checkMaxSelection();
                    }
                }, {
                    key: 'checkMaxSelection',
                    value: function checkMaxSelection() {
                        var limit = this.value && this.value.length ? this.value.length : 0;
                        if (limit === this.maximumSelectionLength) {
                            var collection = this.list.querySelectorAll('li.' + dropDownBaseClasses.li + ':not(.e-active)');
                            addClass(collection, 'e-disable');
                        }
                    }
                }, {
                    key: 'dispatchSelect',
                    value: function dispatchSelect(value, eve, element, isNotTrigger) {
                        if (this.initStatus && !isNotTrigger) {
                            var eventArgs = {
                                e: eve,
                                item: element,
                                itemData: this.getDataByValue(value),
                                isInteracted: eve ? true : false,
                                cancel: false
                            };
                            this.trigger('select', eventArgs);
                            if (eventArgs.cancel) {
                                return true;
                            }
                        }
                        return false;
                    }
                }, {
                    key: 'addChip',
                    value: function addChip(text, value, e) {
                        if (this.chipCollectionWrapper) {
                            var item = this.getChip(text, value, e);
                            if (item.cancel) {
                                return;
                            }
                            this.chipCollectionWrapper.appendChild(item.element);
                        }
                    }
                }, {
                    key: 'removeChipFocus',
                    value: function removeChipFocus() {
                        var elements = void 0;
                        var closeElements = void 0;
                        elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
                        closeElements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP_CLOSE.split(' ')[0]);
                        removeClass(elements, CHIP_SELECTED);
                        if (Browser.isDevice) {
                            for (var index = 0; index < closeElements.length; index++) {
                                closeElements[index].style.display = 'none';
                            }
                        }
                    }
                }, {
                    key: 'onMobileChipInteraction',
                    value: function onMobileChipInteraction(e) {
                        var chipElem = closest(e.target, '.' + CHIP);
                        var chipClose = chipElem.querySelector('span.' + CHIP_CLOSE.split(' ')[0]);
                        if (this.enabled && !this.readonly) {
                            if (!chipElem.classList.contains(CHIP_SELECTED)) {
                                this.removeChipFocus();
                                chipClose.style.display = '';
                                chipElem.classList.add(CHIP_SELECTED);
                            }
                            this.refreshPopup();
                            e.preventDefault();
                        }
                    }
                }, {
                    key: 'getChip',
                    value: function getChip(data, value, e) {
                        var itemData = { text: value, value: value };
                        var chip = createElement('span', {
                            className: CHIP,
                            attrs: { 'data-value': value, 'title': data }
                        });
                        var chipContent = createElement('span', { className: CHIP_CONTENT });
                        var chipClose = createElement('span', { className: CHIP_CLOSE });
                        if (this.mainData) {
                            itemData = this.getDataByValue(value);
                        }
                        if (this.valueTemplate && itemData) {
                            var compiledString = compile(this.valueTemplate);
                            var _iteratorNormalCompletion18 = true;
                            var _didIteratorError18 = false;
                            var _iteratorError18 = undefined;

                            try {
                                for (var _iterator18 = compiledString(itemData)[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                                    var item = _step18.value;

                                    chipContent.appendChild(item);
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
                        } else {
                            chipContent.innerHTML = data;
                        }
                        chip.appendChild(chipContent);
                        var eventArgs = {
                            isInteracted: e ? true : false,
                            itemData: itemData,
                            e: e,
                            setClass: function setClass(classes) {
                                addClass([chip], classes);
                            },
                            cancel: false
                        };
                        this.trigger('tagging', eventArgs);
                        if (eventArgs.cancel) {
                            return { cancel: true, element: chip };
                        }
                        if (Browser.isDevice) {
                            chip.classList.add(MOBILE_CHIP);
                            append([chipClose], chip);
                            chipClose.style.display = 'none';
                            EventHandler.add(chip, 'click', this.onMobileChipInteraction, this);
                        } else {
                            EventHandler.add(chip, 'mousedown', this.chipClick, this);
                            if (this.showClearButton) {
                                chip.appendChild(chipClose);
                            }
                        }
                        EventHandler.add(chipClose, 'mousedown', this.onChipRemove, this);
                        return { cancel: false, element: chip };
                    }
                }, {
                    key: 'calcPopupWidth',
                    value: function calcPopupWidth() {
                        var width = formatUnit(this.popupWidth);
                        if (width.indexOf('%') > -1) {
                            var inputWidth = this.componentWrapper.getBoundingClientRect().width * parseFloat(width) / 100;
                            width = inputWidth.toString() + 'px';
                        }
                        return width;
                    }
                }, {
                    key: 'mouseIn',
                    value: function mouseIn() {
                        if (this.enabled && !this.readonly) {
                            this.showOverAllClear();
                        }
                    }
                }, {
                    key: 'mouseOut',
                    value: function mouseOut() {
                        if (!this.inputFocus) {
                            this.overAllClear.style.display = 'none';
                        }
                    }
                }, {
                    key: 'listOption',
                    value: function listOption(dataSource, fields) {
                        var iconCss = isNullOrUndefined(fields.iconCss) ? false : true;
                        var fieldProperty = fields.properties;
                        this.listCurrentOptions = fields.text !== null || fields.value !== null ? {
                            fields: fieldProperty, showIcon: iconCss, ariaAttributes: { groupItemRole: 'presentation' }
                        } : { fields: { value: 'text' } };
                        extend(this.listCurrentOptions, this.listCurrentOptions, fields, true);
                        if (this.mode === 'CheckBox') {
                            this.notify('listoption', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', dataSource: dataSource, fieldProperty: fieldProperty });
                        }
                        return this.listCurrentOptions;
                    }
                }, {
                    key: 'renderPopup',
                    value: function renderPopup() {
                        var _this15 = this;

                        if (!this.list) {
                            _get(MultiSelect.prototype.__proto__ || Object.getPrototypeOf(MultiSelect.prototype), 'render', this).call(this);
                        }
                        if (!this.popupObj) {
                            document.body.appendChild(this.popupWrapper);
                            var overAllHeight = parseInt(this.popupHeight, 10);
                            this.popupWrapper.style.visibility = 'hidden';
                            if (this.headerTemplate) {
                                var compiledString = void 0;
                                this.header = document.createElement('div');
                                addClass([this.header], HEADER);
                                compiledString = compile(this.headerTemplate);
                                var elements = compiledString({});
                                for (var temp = 0; temp < elements.length; temp++) {
                                    this.header.appendChild(elements[temp]);
                                }
                                if (this.mode === 'CheckBox' && this.showSelectAll) {
                                    prepend([this.header], this.popupWrapper);
                                } else {
                                    append([this.header], this.popupWrapper);
                                }
                                EventHandler.add(this.header, 'mousedown', this.onListMouseDown, this);
                                overAllHeight -= this.header.getBoundingClientRect().height;
                            }
                            append([this.list], this.popupWrapper);
                            if (this.footerTemplate) {
                                var _compiledString = void 0;
                                this.footer = document.createElement('div');
                                addClass([this.footer], FOOTER);
                                _compiledString = compile(this.footerTemplate);
                                var _elements = _compiledString({});
                                for (var _temp = 0; _temp < _elements.length; _temp++) {
                                    this.footer.appendChild(_elements[_temp]);
                                }
                                append([this.footer], this.popupWrapper);
                                EventHandler.add(this.footer, 'mousedown', this.onListMouseDown, this);
                                overAllHeight -= this.footer.getBoundingClientRect().height;
                            }
                            if (this.mode === 'CheckBox' && this.showSelectAll) {
                                this.notify('selectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
                                overAllHeight -= this.selectAllHeight;
                            } else if (this.mode === 'CheckBox' && !this.showSelectAll) {
                                this.notify('selectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
                                overAllHeight = parseInt(this.popupHeight, 10);
                            }
                            if (this.mode === 'CheckBox') {
                                var args = {
                                    module: 'CheckBoxSelection',
                                    enable: this.mode === 'CheckBox',
                                    popupElement: this.popupWrapper
                                };
                                this.notify('searchBox', args);
                                overAllHeight -= this.searchBoxHeight;
                                addClass([this.popupWrapper], 'e-checkbox');
                            }
                            if (this.popupHeight !== 'auto') {
                                this.list.style.maxHeight = formatUnit(overAllHeight);
                                this.popupWrapper.style.maxHeight = formatUnit(this.popupHeight);
                            } else {
                                this.list.style.maxHeight = formatUnit(this.popupHeight);
                            }
                            this.popupObj = new Popup(this.popupWrapper, {
                                width: this.calcPopupWidth(), targetType: 'relative', position: { X: 'left', Y: 'bottom' },
                                relateTo: this.overAllWrapper, collision: { X: 'flip', Y: 'flip' }, offsetY: 1,
                                enableRtl: this.enableRtl,
                                zIndex: this.zIndex,
                                close: function close() {
                                    if (_this15.popupObj.element.parentElement) {
                                        detach(_this15.popupObj.element);
                                    }
                                },
                                open: function open() {
                                    _this15.notify('inputFocus', { module: 'CheckBoxSelection', enable: _this15.mode === 'CheckBox', value: 'focus' });
                                }
                            });
                            this.popupObj.close();
                            this.popupWrapper.style.visibility = '';
                            if (this.mode === 'CheckBox' && Browser.isDevice) {
                                this.notify('deviceSearchBox', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
                            }
                        }
                    }
                }, {
                    key: 'ClearAll',
                    value: function ClearAll(e) {
                        if (this.enabled && !this.readonly) {
                            var temp = void 0;
                            var tempValues = this.value ? this.value.slice() : [];
                            for (temp = this.value[0]; this.value.length !== 0; temp = this.value[0]) {
                                this.removeValue(temp, e);
                            }
                            this.updateDelimeter(this.delimiterChar);
                            if (this.mode !== 'Box') {
                                this.updateDelimView();
                            }
                            this.makeTextBoxEmpty();
                            if (this.isPopupOpen()) {
                                this.refreshPopup();
                            }
                            this.removeFocus();
                            if (!this.inputFocus) {
                                this.updateValueState(e, this.value, tempValues);
                                if (this.mode !== 'CheckBox') {
                                    this.inputElement.focus();
                                }
                            }
                            if (this.mode === 'CheckBox') {
                                this.refreshPlaceHolder();
                                this.refreshInputHight();
                            }
                            e.preventDefault();
                        }
                    }
                }, {
                    key: 'windowResize',
                    value: function windowResize() {
                        this.refreshPopup();
                        if (!this.inputFocus && this.viewWrapper && this.viewWrapper.parentElement) {
                            this.updateDelimView();
                        }
                    }
                }, {
                    key: 'wireEvent',
                    value: function wireEvent() {
                        EventHandler.add(this.componentWrapper, 'mousedown', this.wrapperClick, this);
                        EventHandler.add(window, 'resize', this.windowResize, this);
                        EventHandler.add(this.inputElement, 'focus', this.focusIn, this);
                        EventHandler.add(this.inputElement, 'keydown', this.onKeyDown, this);
                        EventHandler.add(this.inputElement, 'keyup', this.KeyUp, this);
                        EventHandler.add(this.inputElement, 'input', this.onInput, this);
                        EventHandler.add(this.inputElement, 'blur', this.onBlur, this);
                        EventHandler.add(this.componentWrapper, 'mousemove', this.mouseIn, this);
                        EventHandler.add(this.componentWrapper, 'mouseout', this.mouseOut, this);
                        EventHandler.add(this.overAllClear, 'mouseup', this.ClearAll, this);
                    }
                }, {
                    key: 'onInput',
                    value: function onInput() {
                        if (this.keyDownStatus) {
                            this.isValidKey = true;
                        } else {
                            this.isValidKey = false;
                        }
                        this.keyDownStatus = false;
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        this.initializeData();
                        _get(MultiSelect.prototype.__proto__ || Object.getPrototypeOf(MultiSelect.prototype), 'preRender', this).call(this);
                    }
                }, {
                    key: 'initializeData',
                    value: function initializeData() {
                        this.mainListCollection = [];
                        this.beforePopupOpen = false;
                        this.filterAction = false;
                        this.remoteFilterAction = false;
                        this.isFirstClick = false;
                    }
                }, {
                    key: 'updateData',
                    value: function updateData(delimiterChar) {
                        var data = '';
                        var delim = this.mode === 'Delimiter' || this.mode === 'CheckBox';
                        var text = [];
                        var temp = void 0;
                        var tempData = this.listData;
                        this.listData = this.mainData;
                        this.hiddenElement.innerHTML = '';
                        if (!isNullOrUndefined(this.value)) {
                            for (var index = 0; this.value[index]; index++) {
                                if (this.listData) {
                                    temp = this.getTextByValue(this.value[index]);
                                } else {
                                    temp = this.value[index];
                                }
                                data += temp + delimiterChar + ' ';
                                text.push(temp);
                                this.hiddenElement.innerHTML += '<option selected value =' + this.value[index] + '>' + index + '</option>';
                            }
                        }
                        this.text = text.toString();
                        if (delim) {
                            this.delimiterWrapper.innerHTML = data;
                        }
                        this.listData = tempData;
                    }
                }, {
                    key: 'initialValueUpdate',
                    value: function initialValueUpdate() {
                        if (this.list) {
                            var text = void 0;
                            var element = void 0;
                            var value = void 0;
                            if (this.chipCollectionWrapper) {
                                this.chipCollectionWrapper.innerHTML = '';
                            }
                            this.removeListSelection();
                            if (!isNullOrUndefined(this.value)) {
                                for (var index = 0; this.value[index]; index++) {
                                    value = this.value[index];
                                    element = this.hideSelectedItem ? this.ulElement.querySelector('li[data-value="' + value + '"]') : this.list.querySelector('li[data-value="' + value + '"]');
                                    text = this.getTextByValue(value);
                                    if (element && element.getAttribute('aria-selected') !== 'true' || element && element.getAttribute('aria-selected') === 'true' && this.hideSelectedItem && (this.mode === 'Box' || this.mode === 'Default')) {
                                        text = this.getTextByValue(value);
                                        this.addChip(text, value);
                                        this.addListSelection(element);
                                    } else if (value && this.allowCustomValue) {
                                        var indexItem = this.listData.length;
                                        var newValue = {};
                                        setValue(this.fields.text, value, newValue);
                                        setValue(this.fields.value, value, newValue);
                                        this.addItem(newValue, indexItem);
                                        text = this.getTextByValue(value);
                                        this.addChip(text, value);
                                        this.addListSelection(element);
                                    }
                                }
                            }
                            if (this.mode === 'CheckBox') {
                                this.updateDelimView();
                                this.updateValueState(null, this.value, this.tempValues);
                                this.refreshInputHight();
                                this.updateDelimeter(this.delimiterChar);
                            } else {
                                this.updateDelimeter(this.delimiterChar);
                            }
                            if (this.mode === 'CheckBox' && this.showSelectAll && isNullOrUndefined(this.value)) {
                                this.notify('checkSelectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'uncheck' });
                            }
                            if (!this.inputFocus) {
                                if (this.mode === 'Box') {
                                    this.chipCollectionWrapper.style.display = '';
                                } else if (this.mode === 'Delimiter' || this.mode === 'CheckBox') {
                                    this.showDelimWrapper();
                                }
                            }
                        }
                    }
                }, {
                    key: 'isValidLI',
                    value: function isValidLI(li) {
                        return li && !li.classList.contains(dropDownBaseClasses.disabled) && !li.classList.contains(dropDownBaseClasses.group) && li.classList.contains(dropDownBaseClasses.li);
                    }
                }, {
                    key: 'updateListSelection',
                    value: function updateListSelection(li, e) {
                        var value = this.getFormattedValue(li.getAttribute('data-value'));
                        var text = this.getTextByValue(value);
                        this.removeHover();
                        if (!this.value || this.value.indexOf(value) === -1) {
                            var argsCancel = this.dispatchSelect(value, e, li, li.getAttribute('aria-selected') === 'true');
                            if (argsCancel) {
                                return;
                            }
                            if ((this.allowCustomValue || this.allowFiltering) && !this.mainList.querySelector('li[data-value="' + value + '"]')) {
                                var temp = li.cloneNode(true);
                                var data = this.getDataByValue(value);
                                append([temp], this.mainList);
                                this.mainData.push(this.getDataByValue(value));
                                var eventArgs = {
                                    newData: data,
                                    cancel: false
                                };
                                this.trigger('customValueSelection', eventArgs);
                                if (eventArgs.cancel) {
                                    return;
                                }
                            }
                            this.remoteCustomValue = false;
                            this.addValue(value, text, e);
                        } else {
                            this.removeValue(value, e);
                        }
                    }
                }, {
                    key: 'removeListSelection',
                    value: function removeListSelection() {
                        var className = this.hideSelectedItem ? HIDE_LIST : dropDownBaseClasses.selected;
                        var selectedItems = this.list.querySelectorAll('.' + className);
                        var temp = selectedItems.length;
                        if (selectedItems && selectedItems.length) {
                            removeClass(selectedItems, className);
                            while (temp > 0) {
                                selectedItems[temp - 1].setAttribute('aria-selected', 'false');
                                temp--;
                            }
                        }
                        if (!isNullOrUndefined(this.mainList)) {
                            var selectItems = this.mainList.querySelectorAll('.' + className);
                            var temp1 = selectItems.length;
                            if (selectItems && selectItems.length) {
                                removeClass(selectItems, className);
                                while (temp1 > 0) {
                                    selectItems[temp1 - 1].setAttribute('aria-selected', 'false');
                                    if (this.mode === 'CheckBox') {
                                        selectItems[temp1 - 1].firstElementChild.setAttribute('aria-checked', 'false');
                                        removeClass([selectItems[temp1 - 1].firstElementChild.lastElementChild], 'e-check');
                                    }
                                    temp1--;
                                }
                            }
                        }
                    }
                }, {
                    key: 'removeHover',
                    value: function removeHover() {
                        var hoveredItem = this.list.querySelectorAll('.' + dropDownBaseClasses.hover);
                        if (hoveredItem && hoveredItem.length) {
                            removeClass(hoveredItem, dropDownBaseClasses.hover);
                        }
                    }
                }, {
                    key: 'removeFocus',
                    value: function removeFocus() {
                        var hoveredItem = this.list.querySelectorAll('.' + dropDownBaseClasses.focus);
                        var mainlist = this.mainList.querySelectorAll('.' + dropDownBaseClasses.focus);
                        if (hoveredItem && hoveredItem.length) {
                            removeClass(hoveredItem, dropDownBaseClasses.focus);
                            removeClass(mainlist, dropDownBaseClasses.focus);
                        }
                    }
                }, {
                    key: 'addListHover',
                    value: function addListHover(li) {
                        if (this.enabled && this.isValidLI(li)) {
                            this.removeHover();
                            addClass([li], dropDownBaseClasses.hover);
                        }
                    }
                }, {
                    key: 'addListFocus',
                    value: function addListFocus(element) {
                        if (this.enabled && this.isValidLI(element)) {
                            this.removeFocus();
                            addClass([element], dropDownBaseClasses.focus);
                        }
                    }
                }, {
                    key: 'addListSelection',
                    value: function addListSelection(element) {
                        var className = this.hideSelectedItem ? HIDE_LIST : dropDownBaseClasses.selected;
                        if (this.isValidLI(element) && !element.classList.contains(dropDownBaseClasses.hover)) {
                            addClass([element], className);
                            this.updateMainList(false, element.getAttribute('data-value'));
                            element.setAttribute('aria-selected', 'true');
                            if (this.mode === 'CheckBox') {
                                var ariaCheck = element.firstElementChild.getAttribute('aria-checked');
                                if (ariaCheck === 'false' || isNullOrUndefined(ariaCheck)) {
                                    this.notify('updatelist', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', li: element, e: this });
                                }
                            }
                            this.notify('activeList', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', li: element, e: this });
                            if (this.chipCollectionWrapper !== null) {
                                this.removeChipSelection();
                            }
                            attributes(this.inputElement, { 'aria-activedescendant': element.id });
                        }
                    }
                }, {
                    key: 'updateDelimeter',
                    value: function updateDelimeter(delimChar) {
                        this.updateData(delimChar);
                    }
                }, {
                    key: 'onMouseClick',
                    value: function onMouseClick(e) {
                        this.scrollFocusStatus = false;
                        var target = e.target;
                        var li = closest(target, '.' + dropDownBaseClasses.li);
                        if (this.isValidLI(li)) {
                            var limit = this.value && this.value.length ? this.value.length : 0;
                            if (li.classList.contains('e-active')) {
                                limit = limit - 1;
                            }
                            if (limit < this.maximumSelectionLength) {
                                this.updateListSelection(li, e);
                                this.addListFocus(li);
                                if ((this.allowCustomValue || this.allowFiltering) && this.mainList && this.listData) {
                                    if (this.mode !== 'CheckBox') {
                                        this.focusAtLastListItem(li.getAttribute('data-value'));
                                    }
                                    this.refreshSelection();
                                } else {
                                    this.makeTextBoxEmpty();
                                }
                            }
                            if (this.mode === 'CheckBox') {
                                this.updateDelimView();
                                this.refreshInputHight();
                                this.updateDelimeter(this.delimiterChar);
                            } else {
                                this.updateDelimeter(this.delimiterChar);
                            }
                            this.checkSelectAll();
                            this.refreshPopup();
                            if (this.hideSelectedItem) {
                                this.focusAtFirstListItem();
                            }
                            if (this.closePopupOnSelect) {
                                this.hidePopup();
                            } else {
                                e.preventDefault();
                            }
                            this.makeTextBoxEmpty();
                        } else {
                            e.preventDefault();
                        }
                        if (this.mode !== 'CheckBox') {
                            this.refreshListItems(isNullOrUndefined(li) ? null : li.textContent);
                        }
                        this.refreshPlaceHolder();
                    }
                }, {
                    key: 'onMouseOver',
                    value: function onMouseOver(e) {
                        var currentLi = closest(e.target, '.' + dropDownBaseClasses.li);
                        this.addListHover(currentLi);
                    }
                }, {
                    key: 'onMouseLeave',
                    value: function onMouseLeave(e) {
                        this.removeHover();
                    }
                }, {
                    key: 'onListMouseDown',
                    value: function onListMouseDown(e) {
                        e.preventDefault();
                        this.scrollFocusStatus = true;
                    }
                }, {
                    key: 'wireListEvents',
                    value: function wireListEvents() {
                        EventHandler.add(this.list, 'mousedown', this.onListMouseDown, this);
                        EventHandler.add(this.list, 'mouseup', this.onMouseClick, this);
                        EventHandler.add(this.list, 'mouseover', this.onMouseOver, this);
                        EventHandler.add(this.list, 'mouseout', this.onMouseLeave, this);
                    }
                }, {
                    key: 'unwireListEvents',
                    value: function unwireListEvents() {
                        if (this.list) {
                            EventHandler.remove(this.list, 'mousedown', this.onListMouseDown);
                            EventHandler.remove(this.list, 'mouseup', this.onMouseClick);
                            EventHandler.remove(this.list, 'mouseover', this.onMouseOver);
                            EventHandler.remove(this.list, 'mouseout', this.onMouseLeave);
                        }
                    }
                }, {
                    key: 'hideOverAllClear',
                    value: function hideOverAllClear() {
                        if (!this.value || !this.value.length) {
                            this.overAllClear.style.display = 'none';
                        }
                    }
                }, {
                    key: 'showOverAllClear',
                    value: function showOverAllClear() {
                        if (this.value && this.value.length) {
                            this.overAllClear.style.display = '';
                        }
                    }
                }, {
                    key: 'showSpinner',
                    value: function showSpinner() {
                        if (isNullOrUndefined(this.spinnerElement)) {
                            if (this.overAllClear.style.display !== 'none') {
                                this.spinnerElement = this.overAllClear;
                            } else {
                                this.spinnerElement = createElement('span', { className: CLOSEICON_CLASS + ' ' + SPINNER_CLASS$1 });
                                this.componentWrapper.appendChild(this.spinnerElement);
                            }
                            addClass([this.spinnerElement], DISABLE_ICON);
                            createSpinner({
                                target: this.spinnerElement,
                                width: Browser.isDevice ? '16px' : '14px'
                            });
                            _showSpinner(this.spinnerElement);
                        }
                    }
                }, {
                    key: 'hideSpinner',
                    value: function hideSpinner() {
                        if (!isNullOrUndefined(this.spinnerElement)) {
                            _hideSpinner(this.spinnerElement);
                            removeClass([this.spinnerElement], DISABLE_ICON);
                            if (this.spinnerElement.classList.contains(SPINNER_CLASS$1)) {
                                detach(this.spinnerElement);
                            } else {
                                this.spinnerElement.innerHTML = '';
                            }
                            this.spinnerElement = null;
                        }
                    }
                }, {
                    key: 'updateDelimView',
                    value: function updateDelimView() {
                        if (this.delimiterWrapper) {
                            this.hideDelimWrapper();
                        }
                        if (this.chipCollectionWrapper) {
                            this.chipCollectionWrapper.style.display = 'none';
                        }
                        this.viewWrapper.style.display = '';
                        if (this.value && this.value.length) {
                            var data = '';
                            var temp = void 0;
                            var tempData = void 0;
                            var tempIndex = 1;
                            var wrapperleng = void 0;
                            var remaining = void 0;
                            this.viewWrapper.innerHTML = '';
                            var l10nLocale = {
                                noRecordsTemplate: 'No Records Found',
                                actionFailureTemplate: 'The Request Failed',
                                overflowCountTemplate: '+${count} more..'
                            };
                            var l10n = new L10n('dropdowns', l10nLocale, this.locale);
                            var remainContent = l10n.getConstant('overflowCountTemplate');
                            var raminElement = createElement('span', {
                                className: REMAIN_WRAPPER
                            });
                            var compiledString = compile(remainContent);
                            raminElement.appendChild(compiledString({ 'count': this.value.length })[0]);
                            this.viewWrapper.appendChild(raminElement);
                            var remainSize = raminElement.getBoundingClientRect().width;
                            remove(raminElement);
                            this.viewWrapper.innerHTML = '';
                            var inputleng = this.searchWrapper.getBoundingClientRect().width;
                            var overAllContainer = parseInt(window.getComputedStyle(this.componentWrapper).width, 10) - parseInt(window.getComputedStyle(this.componentWrapper).paddingLeft, 10) - parseInt(window.getComputedStyle(this.componentWrapper).paddingRight, 10);
                            var remainValue = void 0;
                            if (!isNullOrUndefined(this.value)) {
                                for (var index = 0; this.value[index]; index++) {
                                    data += index === 0 ? '' : this.delimiterChar + ' ';
                                    if (this.mainData && this.mainData.length) {
                                        if (this.mode === 'CheckBox') {
                                            remainValue = 110;
                                            var newTemp = this.listData;
                                            this.listData = this.mainData;
                                            temp = this.getTextByValue(this.value[index]);
                                            this.listData = newTemp;
                                        } else {
                                            remainValue = 0;
                                            temp = this.getTextByValue(this.value[index]);
                                        }
                                    } else {
                                        temp = this.value[index];
                                    }
                                    data += temp;
                                    temp = this.viewWrapper.innerHTML;
                                    this.viewWrapper.innerHTML = data;
                                    wrapperleng = this.viewWrapper.getBoundingClientRect().width;
                                    if (wrapperleng > overAllContainer - remainValue) {
                                        if (tempData !== undefined) {
                                            temp = tempData;
                                            index = tempIndex + 1;
                                        }
                                        this.viewWrapper.innerHTML = temp;
                                        remaining = this.value.length - index;
                                        break;
                                    } else if (wrapperleng + remainSize <= overAllContainer) {
                                        tempData = data;
                                        tempIndex = index;
                                    } else if (index === 0) {
                                        tempData = '';
                                        tempIndex = -1;
                                    }
                                }
                            }
                            if (remaining > 0) {
                                raminElement.innerHTML = '';
                                raminElement.appendChild(compiledString({ 'count': remaining })[0]);
                                this.viewWrapper.appendChild(raminElement);
                            }
                        } else {
                            this.viewWrapper.innerHTML = '';
                            this.viewWrapper.style.display = 'none';
                        }
                    }
                }, {
                    key: 'unWireEvent',
                    value: function unWireEvent() {
                        EventHandler.remove(this.componentWrapper, 'mousedown', this.wrapperClick);
                        EventHandler.remove(window, 'resize', this.windowResize);
                        EventHandler.remove(this.inputElement, 'focus', this.focusIn);
                        EventHandler.remove(this.inputElement, 'keydown', this.onKeyDown);
                        EventHandler.remove(this.inputElement, 'input', this.onInput);
                        EventHandler.remove(this.inputElement, 'keyup', this.KeyUp);
                        EventHandler.remove(this.inputElement, 'blur', this.onBlur);
                        EventHandler.remove(this.componentWrapper, 'mousemove', this.mouseIn);
                        EventHandler.remove(this.componentWrapper, 'mouseout', this.mouseOut);
                        EventHandler.remove(this.overAllClear, 'mousedown', this.ClearAll);
                    }
                }, {
                    key: 'selectAllItem',
                    value: function selectAllItem(state) {
                        var li = void 0;
                        li = this.list.querySelectorAll(state ? 'li[aria-selected="false"]:not(.e-reorder-hide)' : 'li[aria-selected="true"]:not(.e-reorder-hide)');
                        var length = li.length;
                        if (li && li.length) {
                            while (length > 0) {
                                this.updateListSelection(li[length - 1], null);
                                length--;
                            }
                        }
                        if (this.mode !== 'Box' && !this.isPopupOpen()) {
                            this.updateDelimView();
                        } else {
                            this.searchWrapper.classList.remove(ZERO_SIZE);
                        }
                        if (this.mode === 'CheckBox') {
                            this.updateDelimView();
                            this.refreshInputHight();
                            this.updateDelimeter(this.delimiterChar);
                        } else {
                            this.updateDelimeter(this.delimiterChar);
                        }
                        this.refreshPlaceHolder();
                    }
                }, {
                    key: 'setZIndex',
                    value: function setZIndex() {
                        if (this.popupObj) {
                            this.popupObj.setProperties({ 'zIndex': this.zIndex });
                        }
                    }
                }, {
                    key: 'updateDataSource',
                    value: function updateDataSource(prop) {
                        this.resetList(this.dataSource);
                        if (this.value && this.value.length) {
                            this.refreshSelection();
                        }
                    }
                }, {
                    key: 'onLoadSelect',
                    value: function onLoadSelect() {
                        this.setDynValue = true;
                        this.renderPopup();
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist(['value']);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        if (newProp.dataSource && !isNullOrUndefined(Object.keys(newProp.dataSource))) {
                            this.mainList = null;
                            this.mainData = null;
                        }
                        this.setUpdateInitial(['query', 'dataSource'], newProp);
                        var _iteratorNormalCompletion19 = true;
                        var _didIteratorError19 = false;
                        var _iteratorError19 = undefined;

                        try {
                            for (var _iterator19 = Object.keys(newProp)[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                                var prop = _step19.value;

                                switch (prop) {
                                    case 'query':
                                    case 'dataSource':
                                        break;
                                    case 'htmlAttributes':
                                        this.updateHTMLAttribute();
                                        break;
                                    case 'showClearButton':
                                        this.updateClearButton(newProp.showClearButton);
                                        break;
                                    case 'value':
                                        if (!this.list) {
                                            if (this.dataSource instanceof DataManager) {
                                                this.onLoadSelect();
                                            }
                                        } else if (!this.inputFocus) {
                                            this.initialValueUpdate();
                                            if (this.mode !== 'Box') {
                                                this.updateDelimView();
                                            }
                                            this.refreshInputHight();
                                            this.refreshPlaceHolder();
                                            this.updateValueState(null, this.value, oldProp.value);
                                        }
                                        break;
                                    case 'width':
                                        setStyleAttribute(this.overAllWrapper, { 'width': formatUnit(newProp.width) });
                                        this.popupObj.setProperties({ width: this.calcPopupWidth() });
                                        break;
                                    case 'placeholder':
                                        this.refreshPlaceHolder();
                                        break;
                                    case 'delimiterChar':
                                        if (this.mode !== 'Box') {
                                            this.updateDelimView();
                                        }
                                        this.updateData(newProp.delimiterChar);
                                        break;
                                    case 'cssClass':
                                        this.popupWrapper.classList.remove(oldProp.cssClass);
                                        this.overAllWrapper.classList.remove(oldProp.cssClass);
                                        this.updateCssClass();
                                        break;
                                    case 'enableRtl':
                                        this.enableRTL(newProp.enableRtl);
                                        _get(MultiSelect.prototype.__proto__ || Object.getPrototypeOf(MultiSelect.prototype), 'onPropertyChanged', this).call(this, newProp, oldProp);
                                        break;
                                    case 'readonly':
                                        this.updateReadonly(newProp.readonly);
                                        this.hidePopup();
                                        break;
                                    case 'enabled':
                                        this.hidePopup();
                                        this.enable(newProp.enabled);
                                        break;
                                    case 'showSelectAll':
                                        this.popupObj.destroy();
                                        this.popupObj = null;
                                        this.renderPopup();
                                        break;
                                    case 'showDropDownIcon':
                                        this.dropDownIcon();
                                        break;
                                    case 'floatLabelType':
                                        this.setFloatLabelType();
                                        break;
                                    case 'enableSelectionOrder':
                                        break;
                                    default:
                                        var msProps = void 0;
                                        msProps = this.getPropObject(prop, newProp, oldProp);
                                        _get(MultiSelect.prototype.__proto__ || Object.getPrototypeOf(MultiSelect.prototype), 'onPropertyChanged', this).call(this, msProps.newProperty, msProps.oldProperty);
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
                    key: 'hidePopup',
                    value: function hidePopup() {
                        var delay = 100;
                        if (this.isPopupOpen()) {
                            var eventArgs = { popup: this.popupObj, cancel: false };
                            this.trigger('close', eventArgs);
                            if (eventArgs.cancel) {
                                return;
                            }
                            var animModel = {
                                name: 'FadeOut',
                                duration: 100,
                                delay: delay ? delay : 0
                            };
                            this.beforePopupOpen = false;
                            this.overAllWrapper.classList.remove(iconAnimation);
                            this.popupObj.hide(new Animation(animModel));
                            attributes(this.inputElement, { 'aria-expanded': 'false' });
                            this.notify('inputFocus', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'clear' });
                            this.popupObj.hide();
                            removeClass([document.body, this.popupObj.element], 'e-popup-full-page');
                        }
                    }
                }, {
                    key: 'showPopup',
                    value: function showPopup() {
                        if (!this.ulElement) {
                            this.beforePopupOpen = true;
                            _get(MultiSelect.prototype.__proto__ || Object.getPrototypeOf(MultiSelect.prototype), 'render', this).call(this);
                            return;
                        }
                        var mainLiLength = this.ulElement.querySelectorAll('li.' + 'e-list-item').length;
                        var liLength = this.ulElement.querySelectorAll('li.' + HIDE_LIST).length;
                        if (mainLiLength > 0 && mainLiLength === liLength) {
                            this.beforePopupOpen = false;
                            return;
                        }
                        this.onPopupShown();
                    }
                }, {
                    key: 'selectAll',
                    value: function selectAll(state) {
                        var _this16 = this;

                        if (isNullOrUndefined(this.list)) {
                            this.selectAllAction = function () {
                                if (_this16.mode === 'CheckBox' && _this16.showSelectAll) {
                                    var args = {
                                        module: 'CheckBoxSelection',
                                        enable: _this16.mode === 'CheckBox',
                                        value: state ? 'check' : 'uncheck'
                                    };
                                    _this16.notify('checkSelectAll', args);
                                }
                                _this16.selectAllItem(state);
                                _this16.selectAllAction = null;
                            };
                            _get(MultiSelect.prototype.__proto__ || Object.getPrototypeOf(MultiSelect.prototype), 'render', this).call(this);
                        } else {
                            this.selectAllAction = null;
                            if (this.mode === 'CheckBox' && this.showSelectAll) {
                                var args = {
                                    module: 'CheckBoxSelection',
                                    enable: this.mode === 'CheckBox',
                                    value: state ? 'check' : 'uncheck'
                                };
                                this.notify('checkSelectAll', args);
                            }
                            this.selectAllItem(state);
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'multiselect';
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var _this17 = this;

                        this.initStatus = false;
                        this.setDynValue = false;
                        this.searchWrapper = createElement('span', { className: SEARCHBOX_WRAPPER });
                        this.viewWrapper = createElement('span', { className: DELIMITER_VIEW + ' ' + DELIMITER_WRAPPER, styles: 'display:none;' });
                        this.overAllClear = createElement('span', {
                            className: CLOSEICON_CLASS, styles: 'display:none;'
                        });
                        this.componentWrapper = createElement('div', { className: ELEMENT_WRAPPER });
                        this.overAllWrapper = createElement('div', { className: OVER_ALL_WRAPPER });
                        if (this.mode === 'CheckBox') {
                            addClass([this.overAllWrapper], 'e-checkbox');
                        }
                        if (Browser.isDevice) {
                            this.componentWrapper.classList.add(ELEMENT_MOBILE_WRAPPER);
                        }
                        this.overAllWrapper.style.width = formatUnit(this.width);
                        this.overAllWrapper.appendChild(this.componentWrapper);
                        this.popupWrapper = createElement('div', { id: this.element.id + '_popup', className: POPUP_WRAPPER });
                        if (this.mode === 'Delimiter' || this.mode === 'CheckBox') {
                            this.delimiterWrapper = createElement('span', { className: DELIMITER_WRAPPER, styles: 'display:none' });
                            this.componentWrapper.appendChild(this.delimiterWrapper);
                        } else {
                            this.chipCollectionWrapper = createElement('span', {
                                className: CHIP_WRAPPER,
                                styles: 'display:none'
                            });
                            this.componentWrapper.appendChild(this.chipCollectionWrapper);
                        }
                        if (this.mode !== 'Box') {
                            this.componentWrapper.appendChild(this.viewWrapper);
                        }
                        this.componentWrapper.appendChild(this.searchWrapper);
                        if (this.showClearButton && !Browser.isDevice) {
                            this.componentWrapper.appendChild(this.overAllClear);
                        } else {
                            this.componentWrapper.classList.add(CLOSE_ICON_HIDE);
                        }
                        this.dropDownIcon();
                        this.inputElement = createElement('input', {
                            className: INPUT_ELEMENT,
                            attrs: {
                                spellcheck: 'false',
                                type: 'text',
                                autocomplete: 'off',
                                tabindex: '0'
                            }
                        });
                        if (this.element.tagName !== this.getNgDirective()) {
                            this.element.style.display = 'none';
                        }
                        if (this.element.tagName === this.getNgDirective()) {
                            this.element.appendChild(this.overAllWrapper);
                            this.searchWrapper.appendChild(this.inputElement);
                        } else {
                            this.element.parentElement.insertBefore(this.overAllWrapper, this.element);
                            this.searchWrapper.appendChild(this.inputElement);
                            this.searchWrapper.appendChild(this.element);
                            this.element.removeAttribute('tabindex');
                        }
                        var name = this.element.getAttribute('name') ? this.element.getAttribute('name') : this.element.getAttribute('id');
                        var id = this.element.getAttribute('id') ? this.element.getAttribute('id') : getUniqueID('ej2_dropdownlist');
                        this.element.id = id;
                        if (this.floatLabelType !== 'Never') {
                            createFloatLabel(this.overAllWrapper, this.searchWrapper, this.element, this.inputElement, this.value, this.floatLabelType, this.placeholder);
                        } else if (this.floatLabelType === 'Never') {
                            this.refreshPlaceHolder();
                        }
                        this.element.style.opacity = '';
                        this.hiddenElement = createElement('select', {
                            attrs: { 'name': name, 'aria-hidden': 'true', 'class': HIDDEN_ELEMENT, 'tabindex': '-1', 'multiple': 'true' }
                        });
                        this.element.removeAttribute('name');
                        this.componentWrapper.appendChild(this.hiddenElement);
                        if (this.mode !== 'CheckBox') {
                            this.hideOverAllClear();
                        }
                        this.wireEvent();
                        this.enable(this.enabled);
                        this.enableRTL(this.enableRtl);
                        if (!(this.dataSource instanceof DataManager)) {
                            this.renderPopup();
                        }
                        if (this.value && this.value.length) {
                            if (!(this.dataSource instanceof DataManager)) {
                                this.initialValueUpdate();
                                this.initialUpdate();
                            } else {
                                this.setInitialValue = function () {
                                    _this17.initialValueUpdate();
                                    _this17.initialUpdate();
                                    _this17.setInitialValue = null;
                                };
                                _get(MultiSelect.prototype.__proto__ || Object.getPrototypeOf(MultiSelect.prototype), 'render', this).call(this);
                            }
                        } else {
                            this.initialUpdate();
                        }
                        this.initStatus = true;
                        this.checkAutoFocus();
                    }
                }, {
                    key: 'checkAutoFocus',
                    value: function checkAutoFocus() {
                        if (this.element.hasAttribute('autofocus')) {
                            this.focusIn();
                        }
                    }
                }, {
                    key: 'setFloatLabelType',
                    value: function setFloatLabelType() {
                        removeFloating(this.overAllWrapper, this.componentWrapper, this.searchWrapper, this.inputElement, this.value, this.floatLabelType, this.placeholder);
                        if (this.floatLabelType !== 'Never') {
                            createFloatLabel(this.overAllWrapper, this.searchWrapper, this.element, this.inputElement, this.value, this.floatLabelType, this.placeholder);
                        }
                    }
                }, {
                    key: 'dropDownIcon',
                    value: function dropDownIcon() {
                        if (this.mode === 'CheckBox' && this.showDropDownIcon) {
                            this.dropIcon = createElement('span', { className: dropdownIcon });
                            this.componentWrapper.appendChild(this.dropIcon);
                            addClass([this.componentWrapper], ['e-down-icon']);
                        } else {
                            if (!isNullOrUndefined(this.dropIcon)) {
                                this.dropIcon.parentElement.removeChild(this.dropIcon);
                                removeClass([this.componentWrapper], ['e-down-icon']);
                            }
                        }
                    }
                }, {
                    key: 'initialUpdate',
                    value: function initialUpdate() {
                        if (this.mode !== 'Box') {
                            this.updateDelimView();
                        }
                        this.updateCssClass();
                        this.updateHTMLAttribute();
                        this.updateReadonly(this.readonly);
                        this.refreshInputHight();
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this.popupObj) {
                            this.popupObj.hide();
                        }
                        this.notify(_destroy, {});
                        this.unwireListEvents();
                        this.unWireEvent();
                        this.list = null;
                        this.popupObj = null;
                        this.mainList = null;
                        this.mainData = null;
                        _get(MultiSelect.prototype.__proto__ || Object.getPrototypeOf(MultiSelect.prototype), 'destroy', this).call(this);
                        var temp = ['readonly', 'aria-disabled', 'aria-placeholder', 'placeholder'];
                        var length = temp.length;
                        while (length > 0) {
                            this.inputElement.removeAttribute(temp[length - 1]);
                            length--;
                        }
                        this.element.style.display = 'block';
                        if (this.overAllWrapper.parentElement) {
                            if (this.overAllWrapper.parentElement.tagName === this.getNgDirective()) {
                                remove(this.overAllWrapper);
                            } else {
                                this.overAllWrapper.parentElement.insertBefore(this.element, this.overAllWrapper);
                                remove(this.overAllWrapper);
                            }
                        }
                    }
                }]);

                return MultiSelect;
            }(DropDownBase));

            __decorate$4([Property(null)], MultiSelect.prototype, "cssClass", void 0);
            __decorate$4([Property('100%')], MultiSelect.prototype, "width", void 0);
            __decorate$4([Property('300px')], MultiSelect.prototype, "popupHeight", void 0);
            __decorate$4([Property('100%')], MultiSelect.prototype, "popupWidth", void 0);
            __decorate$4([Property(null)], MultiSelect.prototype, "placeholder", void 0);
            __decorate$4([Property(null)], MultiSelect.prototype, "filterBarPlaceholder", void 0);
            __decorate$4([Property({})], MultiSelect.prototype, "htmlAttributes", void 0);
            __decorate$4([Property(null)], MultiSelect.prototype, "valueTemplate", void 0);
            __decorate$4([Property(null)], MultiSelect.prototype, "headerTemplate", void 0);
            __decorate$4([Property(null)], MultiSelect.prototype, "footerTemplate", void 0);
            __decorate$4([Property(null)], MultiSelect.prototype, "itemTemplate", void 0);
            __decorate$4([Property(false)], MultiSelect.prototype, "allowFiltering", void 0);
            __decorate$4([Property(false)], MultiSelect.prototype, "allowCustomValue", void 0);
            __decorate$4([Property(true)], MultiSelect.prototype, "showClearButton", void 0);
            __decorate$4([Property(1000)], MultiSelect.prototype, "maximumSelectionLength", void 0);
            __decorate$4([Property(false)], MultiSelect.prototype, "readonly", void 0);
            __decorate$4([Property(null)], MultiSelect.prototype, "text", void 0);
            __decorate$4([Property(null)], MultiSelect.prototype, "value", void 0);
            __decorate$4([Property(true)], MultiSelect.prototype, "hideSelectedItem", void 0);
            __decorate$4([Property(true)], MultiSelect.prototype, "closePopupOnSelect", void 0);
            __decorate$4([Property('Default')], MultiSelect.prototype, "mode", void 0);
            __decorate$4([Property(',')], MultiSelect.prototype, "delimiterChar", void 0);
            __decorate$4([Property(true)], MultiSelect.prototype, "ignoreCase", void 0);
            __decorate$4([Property(false)], MultiSelect.prototype, "showDropDownIcon", void 0);
            __decorate$4([Property('Never')], MultiSelect.prototype, "floatLabelType", void 0);
            __decorate$4([Property(false)], MultiSelect.prototype, "showSelectAll", void 0);
            __decorate$4([Property('Select All')], MultiSelect.prototype, "selectAllText", void 0);
            __decorate$4([Property('Unselect All')], MultiSelect.prototype, "unSelectAllText", void 0);
            __decorate$4([Property(true)], MultiSelect.prototype, "enableSelectionOrder", void 0);
            __decorate$4([Property(true)], MultiSelect.prototype, "openOnClick", void 0);
            __decorate$4([Event()], MultiSelect.prototype, "change", void 0);
            __decorate$4([Event()], MultiSelect.prototype, "removing", void 0);
            __decorate$4([Event()], MultiSelect.prototype, "removed", void 0);
            __decorate$4([Event()], MultiSelect.prototype, "open", void 0);
            __decorate$4([Event()], MultiSelect.prototype, "close", void 0);
            __decorate$4([Event()], MultiSelect.prototype, "blur", void 0);
            __decorate$4([Event()], MultiSelect.prototype, "focus", void 0);
            __decorate$4([Event()], MultiSelect.prototype, "chipSelection", void 0);
            __decorate$4([Event()], MultiSelect.prototype, "filtering", void 0);
            __decorate$4([Event()], MultiSelect.prototype, "tagging", void 0);
            __decorate$4([Event()], MultiSelect.prototype, "customValueSelection", void 0);
            _export('MultiSelect', MultiSelect = __decorate$4([NotifyPropertyChanges], MultiSelect));

            ICON = 'e-icons';
            CHECKBOXFRAME = 'e-frame';
            CHECK = 'e-check';
            CHECKBOXWRAP = 'e-checkbox-wrapper';
            INDETERMINATE = 'e-stop';
            checkAllParent = 'e-selectall-parent';
            searchBackIcon = 'e-input-group-icon e-back-icon e-icons';
            filterBarClearIcon = 'e-input-group-icon e-clear-icon e-icons';
            filterInput = 'e-input-filter';
            filterParent = 'e-filter-parent';
            mobileFilter = 'e-ddl-device-filter';
            clearIcon = 'e-clear-icon';
            popupFullScreen = 'e-popup-full-page';
            device = 'e-ddl-device';
            FOCUS$1 = 'e-input-focus';

            _export('CheckBoxSelection', CheckBoxSelection = function () {
                function CheckBoxSelection(parent) {
                    _classCallCheck(this, CheckBoxSelection);

                    this.activeLi = [];
                    this.activeEle = [];
                    this.parent = parent;
                    this.addEventListener();
                }

                _createClass(CheckBoxSelection, [{
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'CheckBoxSelection';
                    }
                }, {
                    key: 'addEventListener',
                    value: function addEventListener() {
                        if (this.parent.isDestroyed) {
                            return;
                        }
                        this.parent.on('updatelist', this.listSelection, this);
                        this.parent.on('listoption', this.listOption, this);
                        this.parent.on('selectAll', this.setSelectAll, this);
                        this.parent.on('checkSelectAll', this.checkSelectAll, this);
                        this.parent.on('searchBox', this.setSearchBox, this);
                        this.parent.on('blur', this.onBlur, this);
                        this.parent.on('targetElement', this.targetElement, this);
                        this.parent.on('deviceSearchBox', this.setDeviceSearchBox, this);
                        this.parent.on('inputFocus', this.getFocus, this);
                        this.parent.on('reOrder', this.setReorder, this);
                        this.parent.on('activeList', this.getActiveList, this);
                        EventHandler.add(document, 'mousedown', this.onDocumentClick, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        if (this.parent.isDestroyed) {
                            return;
                        }
                        this.parent.off('updatelist', this.listSelection);
                        this.parent.off('listoption', this.listOption);
                        this.parent.off('selectAll', this.setSelectAll);
                        this.parent.off('checkSelectAll', this.checkSelectAll);
                        this.parent.off('searchBox', this.setSearchBox);
                        this.parent.off('blur', this.onBlur);
                        this.parent.off('targetElement', this.targetElement);
                        this.parent.off('deviceSearchBox', this.setDeviceSearchBox);
                        this.parent.off('inputFocus', this.getFocus);
                        this.parent.off('reOrder', this.setReorder);
                        this.parent.off('activeList', this.getActiveList);
                        EventHandler.remove(document, 'mousedown', this.onDocumentClick);
                    }
                }, {
                    key: 'listOption',
                    value: function listOption(args) {
                        var _this18 = this;

                        if (isNullOrUndefined(this.parent.listCurrentOptions.itemCreated)) {
                            this.parent.listCurrentOptions.itemCreated = function (e) {
                                _this18.checboxCreate(e);
                            };
                        } else {
                            var itemCreated = this.parent.listCurrentOptions.itemCreated;
                            this.parent.listCurrentOptions.itemCreated = function (e) {
                                _this18.checboxCreate(e);
                                itemCreated.apply(_this18, [e]);
                            };
                        }
                    }
                }, {
                    key: 'checboxCreate',
                    value: function checboxCreate(e) {
                        var item = void 0;
                        if (!isNullOrUndefined(e.item)) {
                            item = e.item;
                        } else {
                            item = e;
                        }
                        if (item.className !== 'e-list-group-item ' && item.className !== 'e-list-group-item') {
                            var checkboxEle = createCheckBox(true);
                            var icon = select('div.' + ICON, item);
                            var id = item.getAttribute('data-uid');
                            item.insertBefore(checkboxEle, item.childNodes[isNullOrUndefined(icon) ? 0 : 1]);
                            select('.' + CHECKBOXFRAME, checkboxEle);
                            var frame = select('.' + CHECKBOXFRAME, checkboxEle);
                            return item;
                        } else {
                            return item;
                        }
                    }
                }, {
                    key: 'setSelectAll',
                    value: function setSelectAll() {
                        if (this.parent.showSelectAll) {
                            if (isNullOrUndefined(this.checkAllParent)) {
                                this.checkAllParent = createElement('div', {
                                    className: checkAllParent
                                });
                                this.selectAllSpan = createElement('span', {
                                    className: 'e-all-text'
                                });
                                this.selectAllSpan.textContent = '';
                                this.checkAllParent.appendChild(this.selectAllSpan);
                                this.setLocale();
                                this.checboxCreate(this.checkAllParent);
                                if (this.parent.headerTemplate) {
                                    if (!isNullOrUndefined(this.filterParent)) {
                                        append([this.checkAllParent], this.filterParent);
                                    } else {
                                        append([this.checkAllParent], this.parent.popupWrapper);
                                    }
                                }
                                if (!this.parent.headerTemplate) {
                                    if (!isNullOrUndefined(this.filterParent)) {
                                        append([this.checkAllParent], this.filterParent);
                                    } else {
                                        prepend([this.checkAllParent], this.parent.popupWrapper);
                                    }
                                }
                                EventHandler.add(this.checkAllParent, 'mousedown', this.clickHandler, this);
                            }
                            if (this.parent.list.classList.contains('e-nodata')) {
                                this.checkAllParent.style.display = 'none';
                            } else {
                                this.checkAllParent.style.display = 'block';
                            }
                            this.parent.selectAllHeight = this.checkAllParent.getBoundingClientRect().height;
                        } else if (!isNullOrUndefined(this.checkAllParent)) {
                            this.checkAllParent.parentElement.removeChild(this.checkAllParent);
                            this.checkAllParent = null;
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.removeEventListener();
                    }
                }, {
                    key: 'listSelection',
                    value: function listSelection(args) {
                        var target = void 0;
                        if (!isNullOrUndefined(args.e)) {
                            target = !isNullOrUndefined(args.e.target) ? args.e.target.classList.contains('e-frame') ? args.e.target : args.li.querySelector('.e-checkbox-wrapper').childNodes[1] : args.li.querySelector('.e-checkbox-wrapper').childNodes[1];
                        } else {
                            target = args.li.lastElementChild.childNodes[1];
                        }
                        if (this.parent.itemTemplate) {
                            target = args.li.firstElementChild.childNodes[1];
                        }
                        this.checkWrapper = closest(target, '.' + CHECKBOXWRAP);
                        if (!isNullOrUndefined(this.checkWrapper)) {
                            var checkElement = select('.' + CHECKBOXFRAME, this.checkWrapper);
                            var selectAll = false;
                            this.validateCheckNode(this.checkWrapper, checkElement.classList.contains(CHECK), args.li, args.e, selectAll);
                        }
                    }
                }, {
                    key: 'validateCheckNode',
                    value: function validateCheckNode(checkWrap, isCheck, li, e, selectAll) {
                        this.changeState(checkWrap, isCheck ? 'uncheck' : 'check', e, true, selectAll);
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(e) {
                        var target = void 0;
                        if (e.currentTarget.classList.contains(this.checkAllParent.className)) {
                            target = e.currentTarget.firstElementChild.lastElementChild;
                        } else {
                            target = e.currentTarget;
                        }
                        this.checkWrapper = closest(target, '.' + CHECKBOXWRAP);
                        var selectAll = true;
                        if (!isNullOrUndefined(this.checkWrapper)) {
                            var checkElement = select('.' + CHECKBOXFRAME, this.checkWrapper);
                            this.validateCheckNode(this.checkWrapper, checkElement.classList.contains(CHECK), null, e, selectAll);
                        }
                        e.preventDefault();
                    }
                }, {
                    key: 'changeState',
                    value: function changeState(wrapper, state, e, isPrevent, selectAll) {
                        var ariaState = void 0;
                        var frameSpan = wrapper.getElementsByClassName(CHECKBOXFRAME)[0];
                        if (state === 'check' && !frameSpan.classList.contains(CHECK)) {
                            frameSpan.classList.remove(INDETERMINATE);
                            frameSpan.classList.add(CHECK);
                            ariaState = 'true';
                            if (selectAll) {
                                this.parent.selectAll(true);
                                this.setLocale(true);
                            }
                        } else if (state === 'uncheck' && (frameSpan.classList.contains(CHECK) || frameSpan.classList.contains(INDETERMINATE))) {
                            removeClass([frameSpan], [CHECK, INDETERMINATE]);
                            ariaState = 'false';
                            if (selectAll) {
                                this.parent.selectAll(false);
                                this.setLocale();
                            }
                        }
                        ariaState = state === 'check' ? 'true' : state === 'uncheck' ? 'false' : ariaState;
                        if (!isNullOrUndefined(ariaState)) {
                            wrapper.setAttribute('aria-checked', ariaState);
                        }
                    }
                }, {
                    key: 'setSearchBox',
                    value: function setSearchBox(args) {
                        if (isNullOrUndefined(this.filterParent)) {
                            this.filterParent = createElement('span', {
                                className: filterParent
                            });
                            this.filterInput = createElement('input', {
                                attrs: { type: 'text' },
                                className: filterInput
                            });
                            this.parent.element.parentNode.insertBefore(this.filterInput, this.parent.element);
                            var backIcon = false;
                            if (Browser.isDevice) {
                                backIcon = true;
                                this.parent.mobFilter = false;
                            }
                            this.filterInputObj = Input.createInput({
                                element: this.filterInput,
                                buttons: backIcon ? [searchBackIcon, filterBarClearIcon] : [filterBarClearIcon],
                                properties: { placeholder: this.parent.filterBarPlaceholder }
                            });
                            append([this.filterInputObj.container], this.filterParent);
                            prepend([this.filterParent], args.popupElement);
                            attributes(this.filterInput, {
                                'aria-disabled': 'false',
                                'aria-owns': this.parent.element.id + '_options',
                                'role': 'listbox',
                                'aria-activedescendant': null,
                                'autocomplete': 'off',
                                'autocorrect': 'off',
                                'autocapitalize': 'off',
                                'spellcheck': 'false'
                            });
                            this.clearIconElement = this.filterInput.parentElement.querySelector('.' + clearIcon);
                            if (!Browser.isDevice && this.clearIconElement) {
                                EventHandler.add(this.clearIconElement, 'mousedown', this.clearText, this);
                                this.clearIconElement.style.visibility = 'hidden';
                            }
                            EventHandler.add(this.filterInput, 'input', this.parent.onInput, this.parent);
                            EventHandler.add(this.filterInput, 'keyup', this.parent.KeyUp, this.parent);
                            EventHandler.add(this.filterInput, 'keydown', this.parent.onKeyDown, this.parent);
                            EventHandler.add(this.filterInput, 'blur', this.onBlur, this);
                            this.parent.searchBoxHeight = this.filterInputObj.container.parentElement.getBoundingClientRect().height;
                            return this.filterInputObj;
                        }
                    }
                }, {
                    key: 'clickOnBackIcon',
                    value: function clickOnBackIcon(e) {
                        this.parent.hidePopup();
                        removeClass([document.body, this.parent.popupObj.element], popupFullScreen);
                    }
                }, {
                    key: 'clearText',
                    value: function clearText(e) {
                        this.parent.targetInputElement.value = '';
                        this.parent.refreshPopup();
                        this.parent.refreshListItems(null);
                        this.clearIconElement.style.visibility = 'hidden';
                        this.filterInput.focus();
                        this.setReorder(e);
                        e.preventDefault();
                    }
                }, {
                    key: 'setDeviceSearchBox',
                    value: function setDeviceSearchBox() {
                        this.parent.popupObj.element.classList.add(device);
                        this.parent.popupObj.element.classList.add(mobileFilter);
                        this.parent.popupObj.position = { X: 0, Y: 0 };
                        this.parent.popupObj.dataBind();
                        attributes(this.parent.popupObj.element, { style: 'left:0px;right:0px;top:0px;bottom:0px;' });
                        addClass([document.body, this.parent.popupObj.element], popupFullScreen);
                        this.setSearchBoxPosition();
                        this.backIconElement = this.filterInputObj.container.querySelector('.e-back-icon');
                        this.clearIconElement = this.filterInputObj.container.querySelector('.' + clearIcon);
                        this.clearIconElement.style.visibility = 'hidden';
                        EventHandler.add(this.backIconElement, 'click', this.clickOnBackIcon, this);
                        EventHandler.add(this.clearIconElement, 'click', this.clearText, this);
                    }
                }, {
                    key: 'setSearchBoxPosition',
                    value: function setSearchBoxPosition() {
                        var searchBoxHeight = this.filterInput.parentElement.getBoundingClientRect().height;
                        this.parent.popupObj.element.style.maxHeight = '100%';
                        this.parent.popupObj.element.style.width = '100%';
                        this.parent.list.style.maxHeight = window.innerHeight - searchBoxHeight + 'px';
                        this.parent.list.style.height = window.innerHeight - searchBoxHeight + 'px';
                        var clearElement = this.filterInput.parentElement.querySelector('.' + clearIcon);
                        detach(this.filterInput);
                        clearElement.parentElement.insertBefore(this.filterInput, clearElement);
                    }
                }, {
                    key: 'targetElement',
                    value: function targetElement() {
                        this.parent.targetInputElement = this.filterInput;
                        this.clearIconElement.style.visibility = this.parent.targetInputElement.value === '' ? 'hidden' : 'visible';
                        return this.parent.targetInputElement.value;
                    }
                }, {
                    key: 'onBlur',
                    value: function onBlur(e) {
                        var target = void 0;
                        if (Browser.isIE) {
                            target = !isNullOrUndefined(e) && e.target;
                        }
                        if (!Browser.isIE) {
                            target = !isNullOrUndefined(e) && e.relatedTarget;
                        }
                        if (document.body.contains(this.parent.popupObj.element) && this.parent.popupObj.element.contains(target) && !Browser.isIE) {
                            this.filterInput.focus();
                            return;
                        }
                        if (this.parent.scrollFocusStatus) {
                            e.preventDefault();
                            this.filterInput.focus();
                            this.parent.scrollFocusStatus = false;
                            return;
                        }
                        if (document.body.contains(this.parent.popupObj.element) && !this.parent.popupObj.element.classList.contains('e-popup-close')) {
                            this.parent.inputFocus = false;
                            this.parent.updateValueState(e, this.parent.value, this.parent.tempValues);
                            this.parent.dispatchEvent(this.parent.hiddenElement, 'change');
                        }
                        if (document.body.contains(this.parent.popupObj.element) && !this.parent.popupObj.element.classList.contains('e-popup-close')) {
                            this.parent.inputFocus = false;
                            this.parent.overAllWrapper.classList.remove(FOCUS$1);
                            this.parent.trigger('blur');
                            this.parent.focused = true;
                        }
                        if (document.body.contains(this.parent.popupObj.element) && !this.parent.popupObj.element.classList.contains('e-popup-close') && !Browser.isDevice) {
                            this.parent.hidePopup();
                        }
                    }
                }, {
                    key: 'onDocumentClick',
                    value: function onDocumentClick(e) {
                        var target = e.target;
                        if (!(!isNullOrUndefined(this.parent.popupObj) && closest(target, '#' + this.parent.popupObj.element.id)) && !this.parent.overAllWrapper.contains(e.target)) {
                            if (this.parent.overAllWrapper.classList.contains(dropDownBaseClasses.focus) || this.parent.isPopupOpen()) {
                                this.parent.inputFocus = false;
                                this.parent.hidePopup();
                                this.parent.onBlur();
                                this.parent.focused = true;
                            }
                        }
                    }
                }, {
                    key: 'getFocus',
                    value: function getFocus(e) {
                        this.parent.overAllWrapper.classList.remove(FOCUS$1);
                        if (e.value === 'focus') {
                            this.filterInput.focus();
                        }
                        if (e.value === 'clear') {
                            this.filterInput.value = '';
                            this.clearIconElement.style.visibility = 'hidden';
                        }
                    }
                }, {
                    key: 'checkSelectAll',
                    value: function checkSelectAll(e) {
                        if (e.value === 'check' && this.checkAllParent.getAttribute('aria-checked') !== 'true') {
                            this.changeState(this.checkAllParent, e.value, null, null, false);
                            this.setLocale(true);
                        }
                        if (e.value === 'uncheck') {
                            this.changeState(this.checkAllParent, e.value, null, null, false);
                            this.setLocale();
                        }
                    }
                }, {
                    key: 'setLocale',
                    value: function setLocale(unSelect) {
                        if (this.parent.selectAllText !== 'Select All' || this.parent.unSelectAllText !== 'Unselect All') {
                            var template = unSelect ? this.parent.unSelectAllText : this.parent.selectAllText;
                            var compiledString = void 0;
                            this.selectAllSpan.textContent = '';
                            compiledString = compile(template);
                            var _iteratorNormalCompletion20 = true;
                            var _didIteratorError20 = false;
                            var _iteratorError20 = undefined;

                            try {
                                for (var _iterator20 = compiledString({})[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                                    var item = _step20.value;

                                    this.selectAllSpan.textContent = item.textContent;
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
                        } else {
                            var l10nLocale = { selectAllText: 'Select All', unSelectAllText: 'Unselect All' };
                            var l10n = new L10n('dropdowns', l10nLocale, this.parent.locale);
                            this.selectAllSpan.textContent = unSelect ? l10n.getConstant('unSelectAllText') : l10n.getConstant('selectAllText');
                        }
                    }
                }, {
                    key: 'getActiveList',
                    value: function getActiveList(args) {
                        if (args.li.classList.contains('e-active')) {
                            this.activeLi.push(args.li.cloneNode(true));
                        } else {
                            this.activeLi.splice(args.index, 1);
                        }
                    }
                }, {
                    key: 'setReorder',
                    value: function setReorder(args) {
                        if (this.parent.enableSelectionOrder && !isNullOrUndefined(this.parent.value)) {
                            var activeLiCount = this.parent.ulElement.querySelectorAll('li.e-active').length;
                            var remLi = void 0;
                            var ulEle = createElement('ul', {
                                className: 'e-list-parent e-ul e-reorder'
                            });
                            var removeEle = createElement('div');
                            if (activeLiCount > 0) {
                                append(this.parent.ulElement.querySelectorAll('li.e-active'), ulEle);
                                remLi = this.parent.ulElement.querySelectorAll('li.e-active');
                                addClass(remLi, 'e-reorder-hide');
                                prepend([ulEle], this.parent.list);
                            }
                            this.parent.focusAtFirstListItem();
                        }
                    }
                }]);

                return CheckBoxSelection;
            }());

            _export('incrementalSearch', _incrementalSearch);

            _export('Search', Search);

            _export('highlightSearch', highlightSearch);

            _export('FieldSettings', FieldSettings);

            _export('dropDownBaseClasses', dropDownBaseClasses);

            _export('DropDownBase', DropDownBase);

            _export('dropDownListClasses', dropDownListClasses);

            _export('DropDownList', DropDownList);

            _export('ComboBox', ComboBox);

            _export('AutoComplete', AutoComplete);

            _export('MultiSelect', MultiSelect);

            _export('CheckBoxSelection', CheckBoxSelection);
        }
    };
});

//# sourceMappingURL=ej2-dropdowns.es2015-compiled.js.map