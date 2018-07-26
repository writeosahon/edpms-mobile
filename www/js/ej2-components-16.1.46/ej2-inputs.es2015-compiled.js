'use strict';

System.register(['@syncfusion/ej2-base', '@syncfusion/ej2-popups'], function (_export, _context) {
    "use strict";

    var Animation, Base, Browser, ChildProperty, Collection, Complex, Component, Event, EventHandler, Internationalization, KeyboardEvents, L10n, NotifyPropertyChanges, Property, addClass, attributes, classList, closest, compile, createElement, detach, extend, formatUnit, getNumericObject, getValue, isNullOrUndefined, merge, removeClass, select, selectAll, setStyleAttribute, setValue, Tooltip, _createClass, _get, _typeof, CLASSNAMES, Input, __decorate, ROOT, SPINICON, SPINUP, SPINDOWN, ERROR, INCREMENT, DECREMENT, INTREGEXP, DECIMALSEPARATOR, NumericTextBox, ERROR$1, INPUTGROUP, FLOATINPUT, UTILMASK, TOPLABEL, BOTTOMLABEL, regularExpressions, MaskUndo, __decorate$1, ROOT$1, INPUT, MaskedTextBox, __decorate$2, TicksData, TooltipData, classNames, Slider, __decorate$3, VALIDATE_EMAIL, VALIDATE_URL, VALIDATE_DATE_ISO, VALIDATE_DIGITS, VALIDATE_PHONE, VALIDATE_CREDITCARD, ErrorOption, FormValidator, FormValidator_1, __decorate$4, ROOT$2, CONTROL_WRAPPER, INPUT_WRAPPER, DROP_AREA, DROP_WRAPPER, LIST_PARENT, FILE, STATUS, ACTION_BUTTONS, UPLOAD_BUTTONS, CLEAR_BUTTONS, FILE_NAME, FILE_TYPE, FILE_SIZE, CLEAR_ICON, REMOVE_ICON, DRAG_HOVER, PROGRESS_WRAPPER, PROGRESSBAR, PROGRESSBAR_TEXT, UPLOAD_INPROGRESS, UPLOAD_SUCCESS, UPLOAD_FAILED, TEXT_CONTAINER, VALIDATION_FAILS, RTL, DISABLED, RTL_CONTAINER, ICON_FOCUSED, PROGRESS_INNER_WRAPPER, FilesProp, ButtonsProps, AsyncSettings, Uploader;

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
     * @hidden
     * Generate required masking elements to the MaskedTextBox from user mask input.
     */
    function createMask() {
        attributes(this.element, { 'role': 'textbox', 'autocomplete': 'off', 'autocorrect': 'off', 'autocapitalize': 'off',
            'spellcheck': 'false', 'aria-live': 'assertive', 'aria-valuenow': '' });
        if (this.mask) {
            var splitMask = this.mask.split(']');
            for (var i = 0; i < splitMask.length; i++) {
                if (splitMask[i][splitMask[i].length - 1] === '\\') {
                    splitMask[i] = splitMask[i] + ']';
                    var splitInnerMask = splitMask[i].split('[');
                    for (var j = 0; j < splitInnerMask.length; j++) {
                        if (splitInnerMask[j][splitInnerMask[j].length - 1] === '\\') {
                            splitInnerMask[j] = splitInnerMask[j] + '[';
                        }
                        pushIntoRegExpCollec.call(this, splitInnerMask[j]);
                    }
                } else {
                    var _splitInnerMask = splitMask[i].split('[');
                    if (_splitInnerMask.length > 1) {
                        var chkSpace = false;
                        for (var _j = 0; _j < _splitInnerMask.length; _j++) {
                            if (_splitInnerMask[_j] === '\\') {
                                this.customRegExpCollec.push('[');
                                this.hiddenMask += _splitInnerMask[_j] + '[';
                            } else if (_splitInnerMask[_j] === '') {
                                chkSpace = true;
                            } else if (_splitInnerMask[_j] !== '' && chkSpace || _j === _splitInnerMask.length - 1) {
                                this.customRegExpCollec.push('[' + _splitInnerMask[_j] + ']');
                                this.hiddenMask += this.promptChar;
                                chkSpace = false;
                            } else {
                                pushIntoRegExpCollec.call(this, _splitInnerMask[_j]);
                            }
                        }
                    } else {
                        pushIntoRegExpCollec.call(this, _splitInnerMask[0]);
                    }
                }
            }
            this.escapeMaskValue = this.hiddenMask;
            this.promptMask = this.hiddenMask.replace(/[09?LCAa#&]/g, this.promptChar);
            if (!isNullOrUndefined(this.customCharacters)) {
                for (var _i = 0; _i < this.promptMask.length; _i++) {
                    if (!isNullOrUndefined(this.customCharacters[this.promptMask[_i]])) {
                        this.promptMask = this.promptMask.replace(new RegExp(this.promptMask[_i], 'g'), this.promptChar);
                    }
                }
            }
            var escapeNumber = 0;
            if (this.hiddenMask.match(new RegExp(/\\/))) {
                for (var _i2 = 0; _i2 < this.hiddenMask.length; _i2++) {
                    var _j2 = 0;
                    if (_i2 >= 2) {
                        _j2 = _i2;
                    }
                    escapeNumber = this.hiddenMask.length - this.promptMask.length;
                    _j2 = _j2 - escapeNumber;
                    if (_i2 > 0 && this.hiddenMask[_i2 - 1] !== '\\' && (this.hiddenMask[_i2] === '>' || this.hiddenMask[_i2] === '<' || this.hiddenMask[_i2] === '|')) {
                        this.promptMask = this.promptMask.substring(0, _j2) + this.promptMask.substring(_i2 + 1 - escapeNumber, this.promptMask.length);
                        this.escapeMaskValue = this.escapeMaskValue.substring(0, _j2) + this.escapeMaskValue.substring(_i2 + 1 - escapeNumber, this.escapeMaskValue.length);
                    }
                    if (this.hiddenMask[_i2] === '\\') {
                        this.promptMask = this.promptMask.substring(0, _j2) + this.hiddenMask[_i2 + 1] + this.promptMask.substring(_i2 + 2 - escapeNumber, this.promptMask.length);
                        this.escapeMaskValue = this.escapeMaskValue.substring(0, _j2) + this.escapeMaskValue[_i2 + 1] + this.escapeMaskValue.substring(_i2 + 2 - escapeNumber, this.escapeMaskValue.length);
                    }
                }
            } else {
                this.promptMask = this.promptMask.replace(/[>|<]/g, '');
                this.escapeMaskValue = this.hiddenMask.replace(/[>|<]/g, '');
            }
            attributes(this.element, { 'aria-invalid': 'false' });
        }
    }
    /**
     * @hidden
     * Apply mask ability with masking elements to the MaskedTextBox.
     */
    function applyMask() {
        setElementValue.call(this, this.promptMask);
        setMaskValue.call(this, this.value);
    }
    /**
     * @hidden
     * To wire required events to the MaskedTextBox.
     */
    function wireEvents() {
        EventHandler.add(this.element, 'keydown', maskInputKeyDownHandler, this);
        EventHandler.add(this.element, 'keypress', maskInputKeyPressHandler, this);
        EventHandler.add(this.element, 'keyup', maskInputKeyUpHandler, this);
        EventHandler.add(this.element, 'focus', maskInputFocusHandler, this);
        EventHandler.add(this.element, 'blur', maskInputBlurHandler, this);
        EventHandler.add(this.element, 'paste', maskInputPasteHandler, this);
        EventHandler.add(this.element, 'cut', maskInputCutHandler, this);
        EventHandler.add(this.element, 'drop', maskInputDropHandler, this);
    }
    /**
     * @hidden
     * To unwire events attached to the MaskedTextBox.
     */
    function unwireEvents() {
        EventHandler.remove(this.element, 'keydown', maskInputKeyDownHandler);
        EventHandler.remove(this.element, 'keypress', maskInputKeyPressHandler);
        EventHandler.remove(this.element, 'keyup', maskInputKeyUpHandler);
        EventHandler.remove(this.element, 'focus', maskInputFocusHandler);
        EventHandler.remove(this.element, 'blur', maskInputBlurHandler);
        EventHandler.remove(this.element, 'paste', maskInputPasteHandler);
        EventHandler.remove(this.element, 'cut', maskInputCutHandler);
    }
    /**
     * @hidden
     * To get masked value from the MaskedTextBox.
     */
    function unstrippedValue(element) {
        return element.value;
    }
    /**
     * @hidden
     * To extract raw value from the MaskedTextBox.
     */
    function strippedValue(element) {
        var value = '';
        var k = 0;
        var checkMask = false;
        if (!isNullOrUndefined(element) && !isNullOrUndefined(this) && element.value !== this.promptMask) {
            for (var i = 0; i < this.customRegExpCollec.length; i++) {
                if (checkMask) {
                    checkMask = false;
                }
                if (this.customRegExpCollec[k] === '>' || this.customRegExpCollec[k] === '<' || this.customRegExpCollec[k] === '|' || this.customRegExpCollec[k] === '\\') {
                    --i;
                    checkMask = true;
                }
                if (!checkMask) {
                    if (element.value[i] !== this.promptChar && !isNullOrUndefined(this.customRegExpCollec[k]) && (!isNullOrUndefined(this.regExpCollec[this.customRegExpCollec[k]]) || this.customRegExpCollec[k].length > 2 && this.customRegExpCollec[k][0] === '[' && this.customRegExpCollec[k][this.customRegExpCollec[k].length - 1] === ']' || !isNullOrUndefined(this.customCharacters) && !isNullOrUndefined(this.customCharacters[this.customRegExpCollec[k]])) && element.value !== '') {
                        value += element.value[i];
                    }
                }
                ++k;
            }
        }
        return value;
    }
    function pushIntoRegExpCollec(value) {
        for (var k = 0; k < value.length; k++) {
            this.hiddenMask += value[k];
            if (value[k] !== '\\') {
                this.customRegExpCollec.push(value[k]);
            }
        }
    }
    function maskInputFocusHandler(event) {
        var _this5 = this;

        if (this.promptMask.length > 0) {
            this.focusEventArgs = { selectionStart: 0, selectionEnd: this.promptMask.length };
        } else {
            this.focusEventArgs = { selectionStart: 0, selectionEnd: this.element.value.length };
        }
        var eventArgs = {};
        merge(eventArgs, this.focusEventArgs);
        this.trigger('focus', eventArgs);
        this.focusEventArgs = eventArgs;
        if (this.mask) {
            this.isFocus = true;
            if (this.placeholder && this.element.value === '') {
                setElementValue.call(this, this.promptMask);
                this.element.setSelectionRange(this.focusEventArgs.selectionStart, this.focusEventArgs.selectionEnd);
                setTimeout(function () {
                    _this5.element.setSelectionRange(_this5.focusEventArgs.selectionStart, _this5.focusEventArgs.selectionEnd);
                }, 1);
            } else {
                this.element.setSelectionRange(this.focusEventArgs.selectionStart, this.focusEventArgs.selectionEnd);
            }
        }
    }
    function maskInputBlurHandler(event) {
        if (this.mask) {
            this.isFocus = false;
            if (this.placeholder && this.element.value === this.promptMask && this.floatLabelType !== 'Always') {
                setElementValue.call(this, '');
                var labelElement = this.element.parentNode.querySelector('.e-float-text');
                if (this.floatLabelType === 'Auto' && !isNullOrUndefined(labelElement) && labelElement.classList.contains(TOPLABEL)) {
                    removeClass([labelElement], TOPLABEL);
                }
            }
        }
    }
    function maskInputPasteHandler(event) {
        var _this6 = this;

        if (this.mask) {
            var sIndex = this.element.selectionStart;
            var eIndex = this.element.selectionEnd;
            var oldValue = this.element.value;
            setElementValue.call(this, '');
            setTimeout(function () {
                var value = _this6.element.value;
                if (_this6.redoCollec.length > 0 && _this6.redoCollec[0].value === _this6.element.value) {
                    value = strippedValue.call(_this6, _this6.element);
                }
                setElementValue.call(_this6, oldValue);
                _this6.element.selectionStart = sIndex;
                _this6.element.selectionEnd = eIndex;
                var i = 0;
                _this6.maskKeyPress = true;
                do {
                    validateValue.call(_this6, value[i], false, null);
                    ++i;
                } while (i < value.length);
                _this6.maskKeyPress = false;
                if (_this6.element.value === oldValue) {
                    var _i3 = 0;
                    _this6.maskKeyPress = true;
                    do {
                        validateValue.call(_this6, value[_i3], false, null);
                        ++_i3;
                    } while (_i3 < value.length);
                    _this6.maskKeyPress = false;
                }
            }, 1);
        }
    }
    function maskInputCutHandler(event) {
        var _this7 = this;

        if (this.mask) {
            var sIndex = this.element.selectionStart;
            var eIndex = this.element.selectionEnd;
            this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd });
            var value = this.element.value.substring(0, sIndex) + this.promptMask.substring(sIndex, eIndex) + this.element.value.substring(eIndex);
            setTimeout(function () {
                setElementValue.call(_this7, value);
                _this7.element.selectionStart = _this7.element.selectionEnd = sIndex;
            }, 0);
        }
    }
    function maskInputDropHandler(event) {
        event.preventDefault();
    }
    function maskInputKeyDownHandler(event) {
        var _this8 = this;

        if (this.mask) {
            if (event.keyCode !== 229) {
                if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
                    event.preventDefault();
                }
                removeMaskInputValues.call(this, event);
            } else {
                setTimeout(function () {
                    removeMaskInputValues.call(_this8, event);
                }, 0);
            }
            var startValue = this.element.value;
            if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
                var collec = void 0;
                if (event.keyCode === 90 && this.undoCollec.length > 0 && startValue !== this.undoCollec[this.undoCollec.length - 1].value) {
                    collec = this.undoCollec[this.undoCollec.length - 1];
                    this.redoCollec.unshift({
                        value: this.element.value, startIndex: this.element.selectionStart,
                        endIndex: this.element.selectionEnd
                    });
                    setElementValue.call(this, collec.value);
                    this.element.selectionStart = collec.startIndex;
                    this.element.selectionEnd = collec.endIndex;
                    this.undoCollec.splice(this.undoCollec.length - 1, 1);
                } else if (event.keyCode === 89 && this.redoCollec.length > 0 && startValue !== this.redoCollec[0].value) {
                    collec = this.redoCollec[0];
                    this.undoCollec.push({
                        value: this.element.value, startIndex: this.element.selectionStart,
                        endIndex: this.element.selectionEnd
                    });
                    setElementValue.call(this, collec.value);
                    this.element.selectionStart = collec.startIndex;
                    this.element.selectionEnd = collec.endIndex;
                    this.redoCollec.splice(0, 1);
                }
            }
        }
    }
    function mobileRemoveFunction() {
        var collec = void 0;
        var sIndex = this.element.selectionStart;
        var eIndex = this.element.selectionEnd;
        if (this.redoCollec.length > 0) {
            collec = this.redoCollec[0];
            setElementValue.call(this, collec.value);
            if (collec.startIndex - sIndex === 1) {
                this.element.selectionStart = collec.startIndex;
                this.element.selectionEnd = collec.endIndex;
            } else {
                this.element.selectionStart = sIndex + 1;
                this.element.selectionEnd = eIndex + 1;
            }
        } else {
            setElementValue.call(this, this.promptMask);
            this.element.selectionStart = this.element.selectionEnd = sIndex;
        }
    }
    function removeMaskInputValues(event) {
        var isRemove = false;
        var oldEventVal = void 0;
        var isDeleted = false;
        if (this.element.value.length < this.promptMask.length) {
            isRemove = true;
            mobileRemoveFunction.call(this);
            oldEventVal = this.element.value;
        }
        var initStartIndex = this.element.selectionStart;
        var initEndIndex = this.element.selectionEnd;
        var startIndex = this.element.selectionStart;
        var endIndex = this.element.selectionEnd;
        var maskValue = this.hiddenMask.replace(/[>|\\<]/g, '');
        var curMask = maskValue[startIndex - 1];
        var parentElement = this.element.parentNode;
        if (isRemove || event.keyCode === 8 || event.keyCode === 46) {
            this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: endIndex });
            var multipleDel = false;
            if (startIndex > 0 || (event.keyCode === 8 || event.keyCode === 46) && startIndex < this.element.value.length && this.element.selectionEnd - startIndex !== this.element.value.length) {
                var index = startIndex;
                if (startIndex !== endIndex) {
                    startIndex = endIndex;
                    if (event.keyCode === 46) {
                        multipleDel = true;
                    }
                } else if (event.keyCode === 46) {
                    ++index;
                } else {
                    --index;
                }
                for (var k = startIndex; event.keyCode === 8 || isRemove || multipleDel ? k > index : k < index; event.keyCode === 8 || isRemove || multipleDel ? k-- : k++) {
                    for (var i = startIndex; event.keyCode === 8 || isRemove || multipleDel ? i > 0 : i < this.element.value.length; event.keyCode === 8 || isRemove || multipleDel ? i-- : i++) {
                        var sIndex = void 0;
                        if ((event.keyCode === 8 || multipleDel) && (initStartIndex !== initEndIndex && initStartIndex !== startIndex || initStartIndex === initEndIndex) || isRemove) {
                            curMask = maskValue[i - 1];
                            sIndex = startIndex - 1;
                        } else {
                            curMask = maskValue[i];
                            sIndex = startIndex;
                            ++startIndex;
                        }
                        var oldValue = this.element.value[sIndex];
                        if (isNullOrUndefined(this.regExpCollec[curMask]) && !isNullOrUndefined(this.customCharacters) && isNullOrUndefined(this.customCharacters[curMask]) && this.hiddenMask[sIndex] !== this.promptChar && this.customRegExpCollec[sIndex][0] !== '[' && this.customRegExpCollec[sIndex][this.customRegExpCollec[sIndex].length - 1] !== ']' || this.promptMask[sIndex] !== this.promptChar && isNullOrUndefined(this.customCharacters)) {
                            this.element.selectionStart = this.element.selectionEnd = sIndex;
                            event.preventDefault();
                            if (event.keyCode === 46 && !multipleDel) {
                                ++this.element.selectionStart;
                            }
                        } else {
                            var value = this.element.value;
                            var prompt = this.promptChar;
                            var elementValue = value.substring(0, sIndex) + prompt + value.substring(startIndex, value.length);
                            setElementValue.call(this, elementValue);
                            event.preventDefault();
                            this.element.selectionStart = this.element.selectionEnd = sIndex;
                            isDeleted = true;
                        }
                        startIndex = this.element.selectionStart;
                        if (!isDeleted && event.keyCode === 8 || multipleDel || !isDeleted && !(event.keyCode === 46)) {
                            sIndex = startIndex - 1;
                        } else {
                            sIndex = startIndex;
                            isDeleted = false;
                        }
                        oldValue = this.element.value[sIndex];
                        if (initStartIndex !== initEndIndex && this.element.selectionStart === initStartIndex || this.promptMask[sIndex] === this.promptChar || oldValue !== this.promptMask[sIndex] && this.promptMask[sIndex] !== this.promptChar && !isNullOrUndefined(this.customCharacters)) {
                            break;
                        }
                    }
                }
            }
            if (this.element.selectionStart === 0 && this.element.selectionEnd === this.element.value.length) {
                setElementValue.call(this, this.promptMask);
                event.preventDefault();
                this.element.selectionStart = this.element.selectionEnd = startIndex;
            }
            this.redoCollec.unshift({
                value: this.element.value, startIndex: this.element.selectionStart,
                endIndex: this.element.selectionEnd
            });
            triggerMaskChangeEvent.call(this, event, oldEventVal);
        }
    }
    function maskInputKeyPressHandler(event) {
        if (this.mask) {
            var oldValue = this.element.value;
            if (!event.ctrlKey || event.ctrlKey && event.code !== 'KeyA' && event.code !== 'KeyY' && event.code !== 'KeyZ' && event.code !== 'KeyX' && event.code !== 'KeyC' && event.code !== 'KeyV') {
                this.maskKeyPress = true;
                var key = event.key;
                if (key === 'Spacebar') {
                    key = String.fromCharCode(event.keyCode);
                }
                if (!key) {
                    this.isIosInvalid = true;
                    validateValue.call(this, String.fromCharCode(event.keyCode), event.ctrlKey, event);
                    event.preventDefault();
                    this.isIosInvalid = false;
                } else if (key && key.length === 1) {
                    validateValue.call(this, key, event.ctrlKey, event);
                    event.preventDefault();
                }
            }
            triggerMaskChangeEvent.call(this, event, oldValue);
        }
    }
    function triggerMaskChangeEvent(event, oldValue) {
        if (!isNullOrUndefined(this.changeEventArgs)) {
            var eventArgs = {};
            this.changeEventArgs = { value: this.element.value, maskedValue: this.element.value, isInteraction: false };
            if (this.mask) {
                this.changeEventArgs.value = strippedValue.call(this, this.element);
            }
            if (!isNullOrUndefined(event)) {
                this.changeEventArgs.isInteraction = true;
                this.changeEventArgs.event = event;
            }
            merge(eventArgs, this.changeEventArgs);
            this.trigger('change', eventArgs);
        }
        attributes(this.element, { 'aria-valuenow': this.element.value });
    }
    function maskInputKeyUpHandler(event) {
        if (this.mask) {
            var collec = void 0;
            if (!this.maskKeyPress && event.keyCode === 229) {
                var oldEventVal = void 0;
                if (this.element.value.length === 1) {
                    this.element.value = this.element.value + this.promptMask;
                    this.element.setSelectionRange(1, 1);
                }
                if (this.element.value.length > this.promptMask.length) {
                    var startIndex = this.element.selectionStart;
                    var addedValues = this.element.value.length - this.promptMask.length;
                    var _val = this.element.value.substring(startIndex - addedValues, startIndex);
                    if (this.undoCollec.length > 0) {
                        collec = this.undoCollec[this.undoCollec.length - 1];
                        var _startIndex = this.element.selectionStart;
                        oldEventVal = collec.value;
                        var oldVal = collec.value.substring(_startIndex - addedValues, _startIndex);
                        collec = this.redoCollec[0];
                        _val = _val.trim();
                        var isSpace = Browser.isAndroid && _val === '';
                        if (!isSpace && oldVal !== _val && collec.value.substring(_startIndex - addedValues, _startIndex) !== _val) {
                            validateValue.call(this, _val, event.ctrlKey, event);
                        } else if (isSpace) {
                            preventUnsupportedValues.call(this, event, _startIndex - 1, this.element.selectionEnd - 1, _val, event.ctrlKey, false);
                        }
                    } else {
                        oldEventVal = this.promptMask;
                        validateValue.call(this, _val, event.ctrlKey, event);
                    }
                    this.maskKeyPress = false;
                    triggerMaskChangeEvent.call(this, event, oldEventVal);
                }
            } else {
                removeMaskError.call(this);
            }
            var val = strippedValue.call(this, this.element);
            if (!(this.element.selectionStart === 0 && this.promptMask === this.element.value && val === '') || val === '' && this.value !== val) {
                this.prevValue = val;
                this.value = val;
            }
        } else {
            triggerMaskChangeEvent.call(this, event);
            this.value = this.element.value;
        }
    }
    function mobileSwipeCheck(key) {
        if (key.length > 1 && this.promptMask.length + key.length < this.element.value.length) {
            var elementValue = this.redoCollec[0].value.substring(0, this.redoCollec[0].startIndex) + key + this.redoCollec[0].value.substring(this.redoCollec[0].startIndex, this.redoCollec[0].value.length);
            setElementValue.call(this, elementValue);
            this.element.selectionStart = this.element.selectionEnd = this.redoCollec[0].startIndex + key.length;
        }
        this.element.selectionStart = this.element.selectionStart - key.length;
        this.element.selectionEnd = this.element.selectionEnd - key.length;
    }
    function mobileValidation(key) {
        if (!this.maskKeyPress) {
            mobileSwipeCheck.call(this, key);
        }
    }
    function validateValue(key, isCtrlKey, event) {
        mobileValidation.call(this, key);
        if (isNullOrUndefined(this) || isNullOrUndefined(key)) {
            return;
        }
        var startIndex = this.element.selectionStart;
        var initStartIndex = startIndex;
        var endIndex = this.element.selectionEnd;
        var curMask = void 0;
        var allowText = false;
        var value = this.element.value;
        var eventOldVal = void 0;
        var prevSupport = false;
        var isEqualVal = false;
        for (var k = 0; k < key.length; k++) {
            var keyValue = key[k];
            startIndex = this.element.selectionStart;
            endIndex = this.element.selectionEnd;
            if (!this.maskKeyPress && initStartIndex === startIndex) {
                startIndex = startIndex + k;
            }
            if (!this.maskKeyPress || startIndex < this.promptMask.length) {
                for (var i = startIndex; i < this.promptMask.length; i++) {
                    var maskValue = this.escapeMaskValue;
                    curMask = maskValue[startIndex];
                    if (this.hiddenMask[startIndex] === '\\' && this.hiddenMask[startIndex + 1] === key) {
                        isEqualVal = true;
                    }
                    if (isNullOrUndefined(this.regExpCollec[curMask]) && (isNullOrUndefined(this.customCharacters) || !isNullOrUndefined(this.customCharacters) && isNullOrUndefined(this.customCharacters[curMask])) && this.hiddenMask[startIndex] !== this.promptChar && this.customRegExpCollec[startIndex][0] !== '[' && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] !== ']' || this.promptMask[startIndex] !== this.promptChar && isNullOrUndefined(this.customCharacters) || this.promptChar === curMask && this.escapeMaskValue === this.mask) {
                        this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
                        startIndex = this.element.selectionStart;
                        curMask = this.hiddenMask[startIndex];
                    }
                }
                if (!isNullOrUndefined(this.customCharacters) && !isNullOrUndefined(this.customCharacters[curMask])) {
                    var customValStr = this.customCharacters[curMask];
                    var customValArr = customValStr.split(',');
                    for (var _i4 = 0; _i4 < customValArr.length; _i4++) {
                        if (keyValue.match(new RegExp('[' + customValArr[_i4] + ']'))) {
                            allowText = true;
                            break;
                        }
                    }
                } else if (!isNullOrUndefined(this.regExpCollec[curMask]) && keyValue.match(new RegExp(this.regExpCollec[curMask])) && this.promptMask[startIndex] === this.promptChar) {
                    allowText = true;
                } else if (this.promptMask[startIndex] === this.promptChar && this.customRegExpCollec[startIndex][0] === '[' && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] === ']' && keyValue.match(new RegExp(this.customRegExpCollec[startIndex]))) {
                    allowText = true;
                }
                if ((!this.maskKeyPress || startIndex < this.hiddenMask.length) && allowText) {
                    if (k === 0) {
                        if (this.maskKeyPress) {
                            this.undoCollec.push({ value: value, startIndex: startIndex, endIndex: startIndex });
                        } else {
                            var sIndex = this.element.selectionStart;
                            var eIndex = this.element.selectionEnd;
                            if (this.redoCollec.length > 0) {
                                eventOldVal = this.redoCollec[0].value;
                                setElementValue.call(this, eventOldVal);
                                this.undoCollec.push(this.redoCollec[0]);
                            } else {
                                this.undoCollec.push({ value: this.promptMask, startIndex: startIndex, endIndex: startIndex });
                                eventOldVal = this.promptMask;
                                setElementValue.call(this, eventOldVal);
                            }
                            this.element.selectionStart = sIndex;
                            this.element.selectionEnd = eIndex;
                        }
                    }
                    startIndex = this.element.selectionStart;
                    applySupportedValues.call(this, event, startIndex, keyValue, eventOldVal, isEqualVal);
                    prevSupport = true;
                    if (k === key.length - 1) {
                        this.redoCollec.unshift({
                            value: this.element.value, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd
                        });
                    }
                    allowText = false;
                } else {
                    startIndex = this.element.selectionStart;
                    preventUnsupportedValues.call(this, event, startIndex, initStartIndex, key, isCtrlKey, prevSupport);
                }
                if (k === key.length - 1 && !allowText) {
                    if (!Browser.isAndroid || Browser.isAndroid && startIndex < this.promptMask.length) {
                        this.redoCollec.unshift({
                            value: this.element.value, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd
                        });
                    }
                }
            } else {
                if (key.length === 1 && !isCtrlKey && !isNullOrUndefined(event)) {
                    addMaskErrorClass.call(this);
                }
            }
        }
    }
    function applySupportedValues(event, startIndex, keyValue, eventOldVal, isEqualVal) {
        if (this.hiddenMask.length > this.promptMask.length) {
            keyValue = changeToLowerUpperCase.call(this, keyValue, this.element.value);
        }
        if (!isEqualVal) {
            var value = this.element.value;
            var elementValue = value.substring(0, startIndex) + keyValue + value.substring(startIndex + 1, value.length);
            setElementValue.call(this, elementValue);
            this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
        }
        triggerMaskChangeEvent.call(this, event, eventOldVal);
    }
    function preventUnsupportedValues(event, sIdx, idx, key, ctrl, chkSupport) {
        if (!this.maskKeyPress) {
            var eventOldVal = void 0;
            var value = this.element.value;
            if (sIdx >= this.promptMask.length) {
                setElementValue.call(this, value.substring(0, sIdx));
            } else {
                if (idx === sIdx) {
                    setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx + 1, value.length));
                } else {
                    if (this.promptMask.length === this.element.value.length) {
                        setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx, value.length));
                    } else {
                        setElementValue.call(this, value.substring(0, idx) + value.substring(idx + 1, value.length));
                    }
                }
                this.element.selectionStart = this.element.selectionEnd = chkSupport || this.element.value[idx] !== this.promptChar ? sIdx : idx;
            }
            eventOldVal = this.element.value;
            triggerMaskChangeEvent.call(this, event, eventOldVal);
            addMaskErrorClass.call(this);
        }
        if (key.length === 1 && !ctrl && !isNullOrUndefined(event)) {
            addMaskErrorClass.call(this);
        }
    }
    function addMaskErrorClass() {
        var _this9 = this;

        var parentElement = this.element.parentNode;
        var timer = 200;
        if (parentElement.classList.contains(INPUTGROUP) || parentElement.classList.contains(FLOATINPUT)) {
            addClass([parentElement], ERROR$1);
        } else {
            addClass([this.element], ERROR$1);
        }
        if (this.isIosInvalid === true) {
            timer = 400;
        }
        attributes(this.element, { 'aria-invalid': 'true' });
        setTimeout(function () {
            if (!_this9.maskKeyPress) {
                removeMaskError.call(_this9);
            }
        }, timer);
    }
    function removeMaskError() {
        var parentElement = this.element.parentNode;
        removeClass([parentElement], ERROR$1);
        removeClass([this.element], ERROR$1);
        attributes(this.element, { 'aria-invalid': 'false' });
    }
    /**
     * @hidden
     * Validates user input using masking elements '<' , '>' and '|'.
     */
    function changeToLowerUpperCase(key, value) {
        var promptMask = void 0;
        var i = void 0;
        var curVal = value;
        var caseCount = 0;
        for (i = 0; i < this.hiddenMask.length; i++) {
            if (this.hiddenMask[i] === '\\') {
                promptMask = curVal.substring(0, i) + '\\' + curVal.substring(i, curVal.length);
            }
            if (this.hiddenMask[i] === '>' || this.hiddenMask[i] === '<' || this.hiddenMask[i] === '|') {
                if (this.hiddenMask[i] !== curVal[i]) {
                    promptMask = curVal.substring(0, i) + this.hiddenMask[i] + curVal.substring(i, curVal.length);
                }
                ++caseCount;
            }
            if (promptMask) {
                if (promptMask[i] === this.promptChar && i > this.element.selectionStart || this.element.value.indexOf(this.promptChar) < 0 && this.element.selectionStart + caseCount === i) {
                    caseCount = 0;
                    break;
                }
                curVal = promptMask;
            }
        }
        while (i >= 0 && promptMask) {
            if (i === 0 || promptMask[i - 1] !== '\\') {
                var val = this.element.value;
                if (promptMask[i] === '>') {
                    key = key.toUpperCase();
                    break;
                } else if (promptMask[i] === '<') {
                    key = key.toLowerCase();
                    break;
                } else if (promptMask[i] === '|') {
                    break;
                }
            }
            --i;
        }
        return key;
    }
    /**
     * @hidden
     * To set updated values in the MaskedTextBox.
     */
    function setMaskValue(val) {
        if (this.mask && val !== undefined && (val === '' || this.prevValue !== val)) {
            this.maskKeyPress = true;
            setElementValue.call(this, this.promptMask);
            if (val !== '') {
                this.element.selectionStart = 0;
                this.element.selectionEnd = 0;
            }
            if (val !== null) {
                for (var i = 0; i < val.length; i++) {
                    validateValue.call(this, val[i], false, null);
                }
            }
            this.value = strippedValue.call(this, this.element);
            this.maskKeyPress = false;
            var labelElement = this.element.parentNode.querySelector('.e-float-text');
            if (this.element.value === this.promptMask && this.floatLabelType === 'Auto' && !isNullOrUndefined(labelElement) && labelElement.classList.contains(TOPLABEL) && !this.isFocus) {
                removeClass([labelElement], TOPLABEL);
                addClass([labelElement], BOTTOMLABEL);
                setElementValue.call(this, '');
            }
        }
    }
    /**
     * @hidden
     * To set updated values in the input element.
     */
    function setElementValue(val, element) {
        if (!this.isFocus && this.floatLabelType === 'Auto' && isNullOrUndefined(this.value)) {
            val = '';
        }
        Input.setValue(val, element ? element : this.element, this.floatLabelType);
    }
    /**
     * @hidden
     * Provide mask support to input textbox through utility method.
     */
    function maskInput(args) {
        var inputEle = getMaskInput(args);
        applyMask.call(inputEle);
        var val = strippedValue.call(this, this.element);
        this.prevValue = val;
        this.value = val;
        if (args.mask) {
            unwireEvents.call(inputEle);
            wireEvents.call(inputEle);
        }
    }
    function getMaskInput(args) {
        addClass([args.element], UTILMASK);
        var inputEle = {
            element: args.element,
            mask: args.mask,
            promptMask: '',
            hiddenMask: '',
            escapeMaskValue: '',
            promptChar: args.promptChar ? args.promptChar.length > 1 ? args.promptChar = args.promptChar[0] : args.promptChar : '_',
            value: args.value ? args.value : null,
            regExpCollec: regularExpressions,
            customRegExpCollec: [],
            customCharacters: args.customCharacters,
            undoCollec: [],
            redoCollec: [],
            maskKeyPress: false,
            prevValue: ''
        };
        createMask.call(inputEle);
        return inputEle;
    }
    /**
     * @hidden
     * Gets raw value of the textbox which has been masked through utility method.
     */
    function getVal(args) {
        return strippedValue.call(getUtilMaskEle(args), args.element);
    }
    /**
     * @hidden
     * Gets masked value of the textbox which has been masked through utility method.
     */
    function getMaskedVal(args) {
        return unstrippedValue.call(getUtilMaskEle(args), args.element);
    }
    function getUtilMaskEle(args) {
        var inputEle = void 0;
        if (!isNullOrUndefined(args) && args.element.classList.contains(UTILMASK)) {
            inputEle = getMaskInput(args);
        }
        return inputEle;
    }
    /**
     * @hidden
     * Arguments to perform undo and redo functionalities.
     */
    return {
        setters: [function (_syncfusionEj2Base) {
            Animation = _syncfusionEj2Base.Animation;
            Base = _syncfusionEj2Base.Base;
            Browser = _syncfusionEj2Base.Browser;
            ChildProperty = _syncfusionEj2Base.ChildProperty;
            Collection = _syncfusionEj2Base.Collection;
            Complex = _syncfusionEj2Base.Complex;
            Component = _syncfusionEj2Base.Component;
            Event = _syncfusionEj2Base.Event;
            EventHandler = _syncfusionEj2Base.EventHandler;
            Internationalization = _syncfusionEj2Base.Internationalization;
            KeyboardEvents = _syncfusionEj2Base.KeyboardEvents;
            L10n = _syncfusionEj2Base.L10n;
            NotifyPropertyChanges = _syncfusionEj2Base.NotifyPropertyChanges;
            Property = _syncfusionEj2Base.Property;
            addClass = _syncfusionEj2Base.addClass;
            attributes = _syncfusionEj2Base.attributes;
            classList = _syncfusionEj2Base.classList;
            closest = _syncfusionEj2Base.closest;
            compile = _syncfusionEj2Base.compile;
            createElement = _syncfusionEj2Base.createElement;
            detach = _syncfusionEj2Base.detach;
            extend = _syncfusionEj2Base.extend;
            formatUnit = _syncfusionEj2Base.formatUnit;
            getNumericObject = _syncfusionEj2Base.getNumericObject;
            getValue = _syncfusionEj2Base.getValue;
            isNullOrUndefined = _syncfusionEj2Base.isNullOrUndefined;
            merge = _syncfusionEj2Base.merge;
            removeClass = _syncfusionEj2Base.removeClass;
            select = _syncfusionEj2Base.select;
            selectAll = _syncfusionEj2Base.selectAll;
            setStyleAttribute = _syncfusionEj2Base.setStyleAttribute;
            setValue = _syncfusionEj2Base.setValue;
        }, function (_syncfusionEj2Popups) {
            Tooltip = _syncfusionEj2Popups.Tooltip;
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
            CLASSNAMES = {
                RTL: 'e-rtl',
                DISABLE: 'e-disabled',
                INPUT: 'e-input',
                INPUTGROUP: 'e-input-group',
                FLOATINPUT: 'e-float-input',
                FLOATLINE: 'e-float-line',
                FLOATTEXT: 'e-float-text',
                CLEARICON: 'e-clear-icon',
                CLEARICONHIDE: 'e-clear-icon-hide',
                LABELTOP: 'e-label-top',
                LABELBOTTOM: 'e-label-bottom',
                NOFLOATLABEL: 'e-no-float-label',
                INPUTCUSTOMTAG: 'e-input-custom-tag',
                FLOATCUSTOMTAG: 'e-float-custom-tag'
            };

            (function (Input) {
                function createInput(args) {
                    var inputObject = { container: null, buttons: [], clearButton: null };
                    if (isNullOrUndefined(args.floatLabelType) || args.floatLabelType === 'Never') {
                        inputObject.container = createInputContainer(args, CLASSNAMES.INPUTGROUP, CLASSNAMES.INPUTCUSTOMTAG, 'span');
                        args.element.parentNode.insertBefore(inputObject.container, args.element);
                        addClass([args.element], CLASSNAMES.INPUT);
                        inputObject.container.appendChild(args.element);
                    } else {
                        createFloatingInput(args, inputObject);
                    }
                    args.element.addEventListener('focus', function () {
                        var parent = getParentNode(this);
                        if (parent.classList.contains('e-input-group')) {
                            parent.classList.add('e-input-focus');
                        }
                    });
                    args.element.addEventListener('blur', function () {
                        var parent = getParentNode(this);
                        if (parent.classList.contains('e-input-group')) {
                            parent.classList.remove('e-input-focus');
                        }
                    });
                    if (!isNullOrUndefined(args.properties) && !isNullOrUndefined(args.properties.showClearButton) && args.properties.showClearButton) {
                        setClearButton(args.properties.showClearButton, args.element, inputObject, true);
                        if (inputObject.container.classList.contains(CLASSNAMES.FLOATINPUT)) {
                            addClass([inputObject.container], CLASSNAMES.INPUTGROUP);
                        }
                    }
                    if (!isNullOrUndefined(args.buttons)) {
                        for (var i = 0; i < args.buttons.length; i++) {
                            inputObject.buttons.push(appendSpan(args.buttons[i], inputObject.container));
                        }
                    }
                    inputObject = setPropertyValue(args, inputObject);
                    return inputObject;
                }
                Input.createInput = createInput;
                function _focusFn() {
                    var label = getParentNode(this).getElementsByClassName('e-float-text')[0];
                    addClass([label], CLASSNAMES.LABELTOP);
                    if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
                        removeClass([label], CLASSNAMES.LABELBOTTOM);
                    }
                }
                function _blurFn() {
                    var parent = getParentNode(this);
                    if (parent.getElementsByTagName('input')[0].value === '') {
                        var label = parent.getElementsByClassName('e-float-text')[0];
                        if (label.classList.contains(CLASSNAMES.LABELTOP)) {
                            removeClass([label], CLASSNAMES.LABELTOP);
                        }
                        addClass([label], CLASSNAMES.LABELBOTTOM);
                    }
                }
                function wireFloatingEvents(element) {
                    element.addEventListener('focus', _focusFn);
                    element.addEventListener('blur', _blurFn);
                }
                function unwireFloatingEvents(element) {
                    element.removeEventListener('focus', _focusFn);
                    element.removeEventListener('blur', _blurFn);
                }
                function createFloatingInput(args, inputObject) {
                    var floatLinelement = void 0;
                    var floatLabelElement = void 0;
                    if (args.floatLabelType === 'Auto') {
                        wireFloatingEvents(args.element);
                    }
                    if (isNullOrUndefined(inputObject.container)) {
                        inputObject.container = createInputContainer(args, CLASSNAMES.FLOATINPUT, CLASSNAMES.FLOATCUSTOMTAG, 'div');
                        args.element.parentNode.insertBefore(inputObject.container, args.element);
                    } else {
                        if (!isNullOrUndefined(args.customTag)) {
                            inputObject.container.classList.add(CLASSNAMES.FLOATCUSTOMTAG);
                        }
                        inputObject.container.classList.add(CLASSNAMES.FLOATINPUT);
                    }
                    floatLinelement = createElement('span', { className: CLASSNAMES.FLOATLINE });
                    floatLabelElement = createElement('label', { className: CLASSNAMES.FLOATTEXT });
                    if (!isNullOrUndefined(args.element.id) && args.element.id !== '') {
                        floatLabelElement.id = 'label_' + args.element.id.replace(/ /g, '_');
                        attributes(args.element, { 'aria-labelledby': floatLabelElement.id });
                    }
                    if (!isNullOrUndefined(args.element.placeholder) && args.element.placeholder !== '') {
                        floatLabelElement.innerHTML = args.element.placeholder;
                        args.element.removeAttribute('placeholder');
                    }
                    if (!isNullOrUndefined(args.properties) && !isNullOrUndefined(args.properties.placeholder) && args.properties.placeholder !== '') {
                        floatLabelElement.innerHTML = args.properties.placeholder;
                    }
                    if (!floatLabelElement.innerHTML) {
                        inputObject.container.classList.add(CLASSNAMES.NOFLOATLABEL);
                    }
                    inputObject.container.appendChild(args.element);
                    inputObject.container.appendChild(floatLinelement);
                    inputObject.container.appendChild(floatLabelElement);
                    updateLabelState(args.element.value, floatLabelElement);
                    if (args.floatLabelType === 'Always') {
                        if (floatLabelElement.classList.contains(CLASSNAMES.LABELBOTTOM)) {
                            removeClass([floatLabelElement], CLASSNAMES.LABELBOTTOM);
                        }
                        addClass([floatLabelElement], CLASSNAMES.LABELTOP);
                    }
                    if (args.floatLabelType === 'Auto') {
                        args.element.addEventListener('input', function (event) {
                            updateLabelState(args.element.value, floatLabelElement);
                        });
                        args.element.addEventListener('blur', function (event) {
                            updateLabelState(args.element.value, floatLabelElement);
                        });
                    }
                }
                function setPropertyValue(args, inputObject) {
                    if (!isNullOrUndefined(args.properties)) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = Object.keys(args.properties)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var prop = _step.value;

                                switch (prop) {
                                    case 'cssClass':
                                        setCssClass(args.properties.cssClass, [inputObject.container]);
                                        break;
                                    case 'enabled':
                                        setEnabled(args.properties.enabled, args.element);
                                        break;
                                    case 'enableRtl':
                                        setEnableRtl(args.properties.enableRtl, [inputObject.container]);
                                        break;
                                    case 'placeholder':
                                        setPlaceholder(args.properties.placeholder, args.element);
                                        break;
                                    case 'readonly':
                                        setReadonly(args.properties.readonly, args.element);
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
                    return inputObject;
                }
                function updateIconState(value, button) {
                    if (value) {
                        removeClass([button], CLASSNAMES.CLEARICONHIDE);
                    } else {
                        addClass([button], CLASSNAMES.CLEARICONHIDE);
                    }
                }
                function updateLabelState(value, label) {
                    if (value) {
                        addClass([label], CLASSNAMES.LABELTOP);
                        if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
                            removeClass([label], CLASSNAMES.LABELBOTTOM);
                        }
                    } else {
                        if (label.classList.contains(CLASSNAMES.LABELTOP)) {
                            removeClass([label], CLASSNAMES.LABELTOP);
                        }
                        addClass([label], CLASSNAMES.LABELBOTTOM);
                    }
                }
                function getParentNode(element) {
                    var parentNode = element.parentNode;
                    return parentNode;
                }
                /**
                 * To create clear button.
                 */
                function createClearButton(element, inputObject, initial) {
                    var button = createElement('span', { className: CLASSNAMES.CLEARICON });
                    var container = inputObject.container;
                    if (!isNullOrUndefined(initial)) {
                        container.appendChild(button);
                    } else {
                        var baseElement = inputObject.container.classList.contains(CLASSNAMES.FLOATINPUT) ? inputObject.container.querySelector('.' + CLASSNAMES.FLOATTEXT) : element;
                        baseElement.insertAdjacentElement('afterend', button);
                    }
                    if (!isNullOrUndefined(container) && container.classList.contains(CLASSNAMES.FLOATINPUT)) {
                        addClass([container], CLASSNAMES.INPUTGROUP);
                    }
                    addClass([button], CLASSNAMES.CLEARICONHIDE);
                    wireClearBtnEvents(element, button, container);
                    return button;
                }
                function wireClearBtnEvents(element, button, container) {
                    button.addEventListener('click', function (event) {
                        if (!(element.classList.contains(CLASSNAMES.DISABLE) || element.readOnly)) {
                            event.preventDefault();
                            if (element !== document.activeElement) {
                                element.focus();
                            }
                            element.value = '';
                            addClass([button], CLASSNAMES.CLEARICONHIDE);
                        }
                    });
                    element.addEventListener('input', function (event) {
                        updateIconState(element.value, button);
                    });
                    element.addEventListener('focus', function (event) {
                        updateIconState(element.value, button);
                    });
                    element.addEventListener('blur', function (event) {
                        setTimeout(function () {
                            addClass([button], CLASSNAMES.CLEARICONHIDE);
                        }, 200);
                    });
                }
                function validateLabel(element, floatLabelType) {
                    var parent = getParentNode(element);
                    if (parent.classList.contains(CLASSNAMES.FLOATINPUT) && floatLabelType === 'Auto') {
                        var label = getParentNode(element).getElementsByClassName('e-float-text')[0];
                        updateLabelState(element.value, label);
                    }
                }
                /**
                 * To create input box contianer.
                 */
                function createInputContainer(args, className, tagClass, tag) {
                    var container = void 0;
                    if (!isNullOrUndefined(args.customTag)) {
                        container = createElement(args.customTag, { className: className });
                        container.classList.add(tagClass);
                    } else {
                        container = createElement(tag, { className: className });
                    }
                    container.classList.add('e-control-wrapper');
                    return container;
                }
                /**
                 * Sets the value to the input element.
                 * ```
                 * E.g : Input.setValue('content', element, "Auto", true );
                 * ```
                 * @param value - Specify the value of the input element.
                 * @param element - The element on which the specified value is updated.
                 * @param floatLabelType - Specify the float label type of the input element.
                 * @param clearButton - Boolean value to specify whether the clear icon is enabled / disabled on the input.
                 */
                function setValue$$1(value, element, floatLabelType, clearButton) {
                    element.value = value;
                    if (!isNullOrUndefined(floatLabelType) && floatLabelType === 'Auto') {
                        validateLabel(element, floatLabelType);
                    }
                    if (!isNullOrUndefined(clearButton) && clearButton) {
                        var parentElement = getParentNode(element);
                        var button = parentElement.getElementsByClassName(CLASSNAMES.CLEARICON)[0];
                        if (element.value && parentElement.classList.contains('e-input-focus')) {
                            removeClass([button], CLASSNAMES.CLEARICONHIDE);
                        } else {
                            addClass([button], CLASSNAMES.CLEARICONHIDE);
                        }
                    }
                }
                Input.setValue = setValue$$1;
                /**
                 * Sets the single or multiple cssClass to wrapper of input element.
                 * ```
                 * E.g : Input.setCssClass('e-custom-class', [element]);
                 * ```
                 * @param cssClass - Css class names which are needed to add.
                 * @param elements - The elements which are needed to add / remove classes.
                 * @param oldClass - Css class names which are needed to remove. If old classes are need to remove, can give this optional parameter.
                 */
                function setCssClass(cssClass, elements, oldClass) {
                    if (!isNullOrUndefined(oldClass) && oldClass !== '') {
                        removeClass(elements, oldClass);
                    }
                    if (!isNullOrUndefined(cssClass) && cssClass !== '') {
                        addClass(elements, cssClass);
                    }
                }
                Input.setCssClass = setCssClass;
                /**
                 * Set the placeholder attribute to the input element.
                 * ```
                 * E.g : Input.setPlaceholder('Search here', element);
                 * ```
                 * @param placeholder - Placeholder value which is need to add.
                 * @param element - The element on which the placeholder is need to add.
                 */
                function setPlaceholder(placeholder, element) {
                    var parentElement = void 0;
                    parentElement = getParentNode(element);
                    if (parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
                        if (!isNullOrUndefined(placeholder) && placeholder !== '') {
                            parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = placeholder;
                            parentElement.classList.remove(CLASSNAMES.NOFLOATLABEL);
                        } else {
                            parentElement.classList.add(CLASSNAMES.NOFLOATLABEL);
                            parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
                        }
                    } else {
                        if (!isNullOrUndefined(placeholder) && placeholder !== '') {
                            attributes(element, { 'placeholder': placeholder, 'aria-placeholder': placeholder });
                        } else {
                            element.removeAttribute('placeholder');
                            element.removeAttribute('aria-placeholder');
                        }
                    }
                }
                Input.setPlaceholder = setPlaceholder;
                /**
                 * Set the read only attribute to the input element
                 * ```
                 * E.g : Input.setReadonly(true, element);
                 * ```
                 * @param isReadonly
                 * - Boolean value to specify whether to set read only. Setting "True" value enables read only.
                 * @param element
                 * - The element which is need to enable read only.
                 */
                function setReadonly(isReadonly, element, floatLabelType) {
                    if (isReadonly) {
                        attributes(element, { readonly: '' });
                    } else {
                        element.removeAttribute('readonly');
                    }
                    if (!isNullOrUndefined(floatLabelType)) {
                        validateLabel(element, floatLabelType);
                    }
                }
                Input.setReadonly = setReadonly;
                /**
                 * Displays the element direction from right to left when its enabled.
                 * ```
                 * E.g : Input.setEnableRtl(true, [inputObj.container]);
                 * ```
                 * @param isRtl
                 * - Boolean value to specify whether to set RTL. Setting "True" value enables the RTL mode.
                 * @param elements
                 * - The elements that are needed to enable/disable RTL.
                 */
                function setEnableRtl(isRtl, elements) {
                    if (isRtl) {
                        addClass(elements, CLASSNAMES.RTL);
                    } else {
                        removeClass(elements, CLASSNAMES.RTL);
                    }
                }
                Input.setEnableRtl = setEnableRtl;
                /**
                 * Enables or disables the given input element.
                 * ```
                 * E.g : Input.setEnabled(false, element);
                 * ```
                 * @param isEnable
                 * - Boolean value to specify whether to enable or disable.
                 * @param element
                 * - Element to be enabled or disabled.
                 */
                function setEnabled(isEnable, element, floatLabelType) {
                    var disabledAttrs = { 'disabled': 'disabled', 'aria-disabled': 'true' };
                    if (isEnable) {
                        element.classList.remove(CLASSNAMES.DISABLE);
                        removeAttributes(disabledAttrs, element);
                    } else {
                        element.classList.add(CLASSNAMES.DISABLE);
                        addAttributes(disabledAttrs, element);
                    }
                    if (!isNullOrUndefined(floatLabelType)) {
                        validateLabel(element, floatLabelType);
                    }
                }
                Input.setEnabled = setEnabled;
                function setClearButton(isClear, element, inputObject, initial) {
                    if (isClear) {
                        inputObject.clearButton = createClearButton(element, inputObject, initial);
                    } else {
                        inputObject.clearButton.remove();
                        inputObject.clearButton = null;
                    }
                }
                Input.setClearButton = setClearButton;
                /**
                 * Removing the multiple attributes from the given element such as "disabled","id" , etc.
                 * ```
                 * E.g : Input.removeAttributes({ 'disabled': 'disabled', 'aria-disabled': 'true' }, element);
                 * ```
                 * @param attrs
                 *  - Array of attributes which are need to removed from the element.
                 * @param element
                 *  - Element on which the attributes are needed to be removed.
                 */
                function removeAttributes(attrs, element) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = Object.keys(attrs)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var key = _step2.value;

                            var parentElement = void 0;
                            parentElement = getParentNode(element);
                            if (key === 'disabled') {
                                element.classList.remove(CLASSNAMES.DISABLE);
                            }
                            if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
                                parentElement.classList.remove(CLASSNAMES.DISABLE);
                            }
                            if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
                                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
                            } else {
                                element.removeAttribute(key);
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
                Input.removeAttributes = removeAttributes;
                /**
                 * Adding the multiple attributes to the given element such as "disabled","id" , etc.
                 * ```
                 * E.g : Input.addAttributes({ 'id': 'inputpopup' }, element);
                 * ```
                 * @param attrs
                 * - Array of attributes which is added to element.
                 * @param element
                 * - Element on which the attributes are needed to be added.
                 */
                function addAttributes(attrs, element) {
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = Object.keys(attrs)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var key = _step3.value;

                            var parentElement = void 0;
                            parentElement = getParentNode(element);
                            if (key === 'disabled') {
                                element.classList.add(CLASSNAMES.DISABLE);
                            }
                            if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
                                parentElement.classList.add(CLASSNAMES.DISABLE);
                            }
                            if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
                                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = attrs[key];
                            } else {
                                element.setAttribute(key, attrs[key]);
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
                Input.addAttributes = addAttributes;
                function removeFloating(input) {
                    var container = input.container;
                    if (!isNullOrUndefined(container) && container.classList.contains(CLASSNAMES.FLOATINPUT)) {
                        var inputEle = container.querySelector('input');
                        var placeholder = container.querySelector('.' + CLASSNAMES.FLOATTEXT).textContent;
                        var clearButton = container.querySelector('.e-clear-icon') !== null;
                        detach(container.querySelector('.' + CLASSNAMES.FLOATLINE));
                        detach(container.querySelector('.' + CLASSNAMES.FLOATTEXT));
                        classList(container, [CLASSNAMES.INPUTGROUP], [CLASSNAMES.FLOATINPUT]);
                        unwireFloatingEvents(inputEle);
                        attributes(inputEle, { 'placeholder': placeholder });
                        inputEle.classList.add(CLASSNAMES.INPUT);
                        if (!clearButton) {
                            inputEle.removeAttribute('required');
                        }
                    }
                }
                Input.removeFloating = removeFloating;
                function addFloating(input, type, placeholder) {
                    var container = closest(input, '.' + CLASSNAMES.INPUTGROUP);
                    if (type !== 'Never') {
                        var customTag = container.tagName;
                        customTag = customTag !== 'DIV' && customTag !== 'SPAN' ? customTag : null;
                        var args = { element: input, floatLabelType: type, customTag: customTag, properties: { placeholder: placeholder } };
                        var iconEle = container.querySelector('.e-clear-icon');
                        var inputObj = { container: container };
                        input.classList.remove(CLASSNAMES.INPUT);
                        createFloatingInput(args, inputObj);
                        if (isNullOrUndefined(iconEle)) {
                            iconEle = container.querySelector('.e-input-group-icon');
                        }
                        if (isNullOrUndefined(iconEle)) {
                            container.classList.remove(CLASSNAMES.INPUTGROUP);
                        } else {
                            var floatLine = container.querySelector('.' + CLASSNAMES.FLOATLINE);
                            var floatText = container.querySelector('.' + CLASSNAMES.FLOATTEXT);
                            container.insertBefore(input, iconEle);
                            container.insertBefore(floatLine, iconEle);
                            container.insertBefore(floatText, iconEle);
                        }
                    }
                }
                Input.addFloating = addFloating;
                /**
                 * Creates a new span element with the given icons added and append it in container element.
                 * ```
                 * E.g : Input.appendSpan('e-icon-spin', inputObj.container);
                 * ```
                 * @param iconClass - Icon classes which are need to add to the span element which is going to created.
                 * Span element acts as icon or button element for input.
                 * @param container - The container on which created span element is going to append.
                 */
                function appendSpan(iconClass, container) {
                    var button = createElement('span', { className: iconClass });
                    container.appendChild(button);
                    if (!container.classList.contains(CLASSNAMES.INPUTGROUP)) {
                        container.classList.add(CLASSNAMES.INPUTGROUP);
                    }
                    button.addEventListener('mousedown', function () {
                        if (!container.classList.contains('e-disabled') && !container.querySelector('input').readOnly) {
                            this.classList.add('e-input-btn-ripple');
                        }
                    });
                    button.addEventListener('mouseup', function () {
                        var ele = this;
                        setTimeout(function () {
                            ele.classList.remove('e-input-btn-ripple');
                        }, 500);
                    });
                    return button;
                }
                Input.appendSpan = appendSpan;
            })(Input || _export('Input', Input = {}));

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            ROOT = 'e-control-wrapper e-numeric';
            SPINICON = 'e-input-group-icon';
            SPINUP = 'e-spin-up';
            SPINDOWN = 'e-spin-down';
            ERROR = 'e-error';
            INCREMENT = 'increment';
            DECREMENT = 'decrement';
            INTREGEXP = new RegExp('/^(-)?(\d*)$/');
            DECIMALSEPARATOR = '.';

            _export('NumericTextBox', NumericTextBox = function (_Component) {
                _inherits(NumericTextBox, _Component);

                function NumericTextBox(options, element) {
                    _classCallCheck(this, NumericTextBox);

                    return _possibleConstructorReturn(this, (NumericTextBox.__proto__ || Object.getPrototypeOf(NumericTextBox)).call(this, options, element));
                }

                _createClass(NumericTextBox, [{
                    key: 'preRender',
                    value: function preRender() {
                        this.isPrevFocused = false;
                        this.decimalSeparator = '.';
                        this.intRegExp = new RegExp('/^(-)?(\d*)$/');
                        this.isCalled = false;
                        var ejInstance = getValue('ej2_instances', this.element);
                        this.cloneElement = this.element.cloneNode(true);
                        this.angularTagName = null;
                        if (this.element.tagName === 'EJS-NUMERICTEXTBOX') {
                            this.angularTagName = this.element.tagName;
                            var input = createElement('input');
                            var index = 0;
                            for (index; index < this.element.attributes.length; index++) {
                                input.setAttribute(this.element.attributes[index].nodeName, this.element.attributes[index].nodeValue);
                                input.innerHTML = this.element.innerHTML;
                            }
                            if (this.element.hasAttribute('id')) {
                                this.element.removeAttribute('id');
                            }
                            this.element.classList.remove('e-control', 'e-numerictextbox');
                            this.element.classList.add('e-numeric-container');
                            this.element.appendChild(input);
                            this.element = input;
                            setValue('ej2_instances', ejInstance, this.element);
                        }
                        attributes(this.element, { 'role': 'spinbutton', 'tabindex': '0', 'autocomplete': 'off', 'aria-live': 'assertive' });
                        var localeText = { incrementTitle: 'Increment value', decrementTitle: 'Decrement value', placeholder: '' };
                        this.l10n = new L10n('numerictextbox', localeText, this.locale);
                        this.isValidState = true;
                        this.inputStyle = null;
                        this.inputName = null;
                        this.cultureInfo = {};
                        this.initCultureInfo();
                        this.initCultureFunc();
                        this.checkAttributes();
                        this.prevValue = this.value;
                        this.validateMinMax();
                        this.validateStep();
                        if (this.placeholder === null) {
                            this.updatePlaceholder();
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        if (this.element.tagName.toLowerCase() === 'input') {
                            this.createWrapper();
                            if (this.showSpinButton) {
                                this.spinBtnCreation();
                            }
                            if (!isNullOrUndefined(this.width)) {
                                setStyleAttribute(this.container, { 'width': formatUnit(this.width) });
                            }
                            if (!this.container.classList.contains('e-input-group')) {
                                this.container.classList.add('e-input-group');
                            }
                            this.changeValue(this.value);
                            this.wireEvents();
                            if (this.value !== null && !isNaN(this.value)) {
                                if (this.decimals) {
                                    this.setProperties({ value: this.roundNumber(this.value, this.decimals) }, true);
                                }
                            }
                        }
                    }
                }, {
                    key: 'checkAttributes',
                    value: function checkAttributes() {
                        var attributes$$1 = ['value', 'min', 'max', 'step', 'disabled', 'readonly', 'style', 'name'];
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = attributes$$1[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var prop = _step4.value;

                                if (!isNullOrUndefined(this.element.getAttribute(prop))) {
                                    switch (prop) {
                                        case 'disabled':
                                            var enabled = this.element.getAttribute(prop) === 'disabled' || this.element.getAttribute(prop) === 'true' ? false : true;
                                            this.setProperties({ enabled: enabled }, true);
                                            break;
                                        case 'readonly':
                                            var readonly = this.element.getAttribute(prop) === 'readonly' || this.element.getAttribute(prop) === 'true' ? true : false;
                                            this.setProperties({ readonly: readonly }, true);
                                            break;
                                        case 'style':
                                            this.inputStyle = this.element.getAttribute(prop);
                                            break;
                                        case 'name':
                                            this.inputName = this.element.getAttribute(prop);
                                            break;
                                        default:
                                            var value = this.instance.getNumberParser({ format: 'n' })(this.element.getAttribute(prop));
                                            if (value !== null && !isNaN(value) || prop === 'value') {
                                                this.setProperties(setValue(prop, value, {}), true);
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
                    key: 'updatePlaceholder',
                    value: function updatePlaceholder() {
                        this.setProperties({ placeholder: this.l10n.getConstant('placeholder') }, true);
                    }
                }, {
                    key: 'initCultureFunc',
                    value: function initCultureFunc() {
                        this.instance = new Internationalization(this.locale);
                    }
                }, {
                    key: 'initCultureInfo',
                    value: function initCultureInfo() {
                        this.cultureInfo.format = this.format;
                        if (getValue('currency', this) !== null) {
                            setValue('currency', this.currency, this.cultureInfo);
                            this.setProperties({ currencyCode: this.currency }, true);
                        }
                    }
                }, {
                    key: 'createWrapper',
                    value: function createWrapper() {
                        var inputObj = Input.createInput({
                            element: this.element,
                            floatLabelType: this.floatLabelType,
                            properties: {
                                readonly: this.readonly,
                                placeholder: this.placeholder,
                                cssClass: this.cssClass,
                                enableRtl: this.enableRtl,
                                showClearButton: this.showClearButton,
                                enabled: this.enabled
                            }
                        });
                        this.inputWrapper = inputObj;
                        this.container = inputObj.container;
                        this.container.setAttribute('class', ROOT + ' ' + this.container.getAttribute('class'));
                        if (this.readonly) {
                            attributes(this.element, { 'aria-readonly': 'true' });
                        }
                        this.hiddenInput = createElement('input', { attrs: { type: 'hidden' } });
                        this.inputName = this.inputName !== null ? this.inputName : this.element.id;
                        this.element.removeAttribute('name');
                        attributes(this.hiddenInput, { 'name': this.inputName });
                        this.container.insertBefore(this.hiddenInput, this.container.childNodes[1]);
                        if (this.inputStyle !== null) {
                            attributes(this.container, { 'style': this.inputStyle });
                        }
                    }
                }, {
                    key: 'spinBtnCreation',
                    value: function spinBtnCreation() {
                        this.spinDown = Input.appendSpan(SPINICON + ' ' + SPINDOWN, this.container);
                        attributes(this.spinDown, {
                            'title': this.l10n.getConstant('decrementTitle'),
                            'aria-label': this.l10n.getConstant('decrementTitle')
                        });
                        this.spinUp = Input.appendSpan(SPINICON + ' ' + SPINUP, this.container);
                        attributes(this.spinUp, {
                            'title': this.l10n.getConstant('incrementTitle'),
                            'aria-label': this.l10n.getConstant('incrementTitle')
                        });
                        this.wireSpinBtnEvents();
                    }
                }, {
                    key: 'validateMinMax',
                    value: function validateMinMax() {
                        if (!(typeof this.min === 'number' && !isNaN(this.min))) {
                            this.setProperties({ min: -Number.MAX_VALUE }, true);
                        }
                        if (!(typeof this.max === 'number' && !isNaN(this.max))) {
                            this.setProperties({ max: Number.MAX_VALUE }, true);
                        }
                        if (this.decimals !== null) {
                            if (this.min !== -Number.MAX_VALUE) {
                                this.setProperties({ min: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.min)) }, true);
                            }
                            if (this.max !== Number.MAX_VALUE) {
                                this.setProperties({ max: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.max)) }, true);
                            }
                        }
                        this.setProperties({ min: this.min > this.max ? this.max : this.min }, true);
                        attributes(this.element, { 'aria-valuemin': this.min.toString(), 'aria-valuemax': this.max.toString() });
                    }
                }, {
                    key: 'formattedValue',
                    value: function formattedValue(decimals, value) {
                        return this.instance.getNumberFormat({
                            maximumFractionDigits: decimals,
                            minimumFractionDigits: decimals, useGrouping: false
                        })(value);
                    }
                }, {
                    key: 'validateStep',
                    value: function validateStep() {
                        if (this.decimals !== null) {
                            this.setProperties({ step: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.step)) }, true);
                        }
                    }
                }, {
                    key: 'action',
                    value: function action(operation, event) {
                        this.isInteract = true;
                        var value = this.isFocused ? this.instance.getNumberParser({ format: 'n' })(this.element.value) : this.value;
                        this.changeValue(this.performAction(value, this.step, operation));
                        this.raiseChangeEvent(event);
                    }
                }, {
                    key: 'checkErrorClass',
                    value: function checkErrorClass() {
                        if (this.isValidState) {
                            removeClass([this.container], ERROR);
                        } else {
                            addClass([this.container], ERROR);
                        }
                        attributes(this.element, { 'aria-invalid': this.isValidState ? 'false' : 'true' });
                    }
                }, {
                    key: 'bindClearEvent',
                    value: function bindClearEvent() {
                        if (this.showClearButton) {
                            EventHandler.add(this.inputWrapper.clearButton, 'mousedown touchstart', this.resetHandler, this);
                        }
                    }
                }, {
                    key: 'resetHandler',
                    value: function resetHandler(e) {
                        e.preventDefault();
                        if (!this.inputWrapper.clearButton.classList.contains('e-clear-icon-hide')) {
                            this.clear(e);
                        }
                    }
                }, {
                    key: 'clear',
                    value: function clear(event) {
                        this.setProperties({ value: null }, true);
                        this.setElementValue('');
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        EventHandler.add(this.element, 'focus', this.focusIn, this);
                        EventHandler.add(this.element, 'blur', this.focusOut, this);
                        EventHandler.add(this.element, 'keydown', this.keyDownHandler, this);
                        EventHandler.add(this.element, 'keypress', this.keyPressHandler, this);
                        EventHandler.add(this.element, 'change', this.changeHandler, this);
                        EventHandler.add(this.element, 'paste', this.pasteHandler, this);
                        if (this.enabled) {
                            this.bindClearEvent();
                        }
                    }
                }, {
                    key: 'wireSpinBtnEvents',
                    value: function wireSpinBtnEvents() {
                        /* bind spin button events */
                        EventHandler.add(this.spinUp, Browser.touchStartEvent, this.mouseDownOnSpinner, this);
                        EventHandler.add(this.spinDown, Browser.touchStartEvent, this.mouseDownOnSpinner, this);
                        EventHandler.add(this.spinUp, Browser.touchEndEvent, this.mouseUpOnSpinner, this);
                        EventHandler.add(this.spinDown, Browser.touchEndEvent, this.mouseUpOnSpinner, this);
                        EventHandler.add(this.spinUp, Browser.touchMoveEvent, this.touchMoveOnSpinner, this);
                        EventHandler.add(this.spinDown, Browser.touchMoveEvent, this.touchMoveOnSpinner, this);
                    }
                }, {
                    key: 'unwireEvents',
                    value: function unwireEvents() {
                        EventHandler.remove(this.element, 'focus', this.focusIn);
                        EventHandler.remove(this.element, 'blur', this.focusOut);
                        EventHandler.remove(this.element, 'keydown', this.keyDownHandler);
                        EventHandler.remove(this.element, 'keypress', this.keyPressHandler);
                        EventHandler.remove(this.element, 'change', this.changeHandler);
                        EventHandler.remove(this.element, 'paste', this.pasteHandler);
                    }
                }, {
                    key: 'unwireSpinBtnEvents',
                    value: function unwireSpinBtnEvents() {
                        /* unbind spin button events */
                        EventHandler.remove(this.spinUp, Browser.touchStartEvent, this.mouseDownOnSpinner);
                        EventHandler.remove(this.spinDown, Browser.touchStartEvent, this.mouseDownOnSpinner);
                        EventHandler.remove(this.spinUp, Browser.touchEndEvent, this.mouseUpOnSpinner);
                        EventHandler.remove(this.spinDown, Browser.touchEndEvent, this.mouseUpOnSpinner);
                        EventHandler.remove(this.spinUp, Browser.touchMoveEvent, this.touchMoveOnSpinner);
                        EventHandler.remove(this.spinDown, Browser.touchMoveEvent, this.touchMoveOnSpinner);
                    }
                }, {
                    key: 'changeHandler',
                    value: function changeHandler(event) {
                        if (!this.element.value.length) {
                            this.setProperties({ value: null }, true);
                        }
                        var parsedInput = this.instance.getNumberParser({ format: 'n' })(this.element.value);
                        this.updateValue(parsedInput, event);
                    }
                }, {
                    key: 'raiseChangeEvent',
                    value: function raiseChangeEvent(event) {
                        if (this.prevValue !== this.value) {
                            var eventArgs = {};
                            this.changeEventArgs = { value: this.value, previousValue: this.prevValue, isInteraction: this.isInteract, event: event };
                            if (event) {
                                this.changeEventArgs.event = event;
                            }
                            merge(eventArgs, this.changeEventArgs);
                            this.prevValue = this.value;
                            this.isInteract = false;
                            this.trigger('change', eventArgs);
                        }
                    }
                }, {
                    key: 'pasteHandler',
                    value: function pasteHandler() {
                        var _this2 = this;

                        var beforeUpdate = this.element.value;
                        setTimeout(function () {
                            if (!_this2.numericRegex().test(_this2.element.value)) {
                                _this2.setElementValue(beforeUpdate);
                            }
                        });
                    }
                }, {
                    key: 'keyDownHandler',
                    value: function keyDownHandler(event) {
                        switch (event.keyCode) {
                            case 38:
                                event.preventDefault();
                                this.action(INCREMENT, event);
                                break;
                            case 40:
                                event.preventDefault();
                                this.action(DECREMENT, event);
                                break;
                            default:
                                break;
                        }
                        if (!this.element.value.length) {
                            this.setProperties({ value: null }, true);
                            this.isKeyDown = true;
                            this.updateValue(this.instance.getNumberParser({ format: 'n' })(this.element.value));
                            this.isKeyDown = false;
                        }
                    }
                }, {
                    key: 'performAction',
                    value: function performAction(value, step, operation) {
                        if (value === null || isNaN(value)) {
                            value = 0;
                        }
                        var updatedValue = operation === INCREMENT ? value + step : value - step;
                        updatedValue = this.correctRounding(value, step, updatedValue);
                        return this.strictMode ? this.trimValue(updatedValue) : updatedValue;
                    }
                }, {
                    key: 'correctRounding',
                    value: function correctRounding(value, step, result) {
                        var floatExp = new RegExp('[,.](.*)');
                        var valueText = value.toString();
                        var stepText = step.toString();
                        var floatValue = floatExp.test(value.toString());
                        var floatStep = floatExp.test(step.toString());
                        if (floatValue || floatStep) {
                            var valueCount = floatValue ? floatExp.exec(value.toString())[0].length : 0;
                            var stepCount = floatStep ? floatExp.exec(step.toString())[0].length : 0;
                            var max = Math.max(valueCount, stepCount);
                            return value = this.roundValue(result, max);
                        }
                        return result;
                    }
                }, {
                    key: 'roundValue',
                    value: function roundValue(result, precision) {
                        precision = precision || 0;
                        var divide = Math.pow(10, precision);
                        return result *= divide, result = Math.round(result) / divide;
                    }
                }, {
                    key: 'updateValue',
                    value: function updateValue(value, event) {
                        if (event) {
                            this.isInteract = true;
                        }
                        if (value !== null && !isNaN(value)) {
                            if (this.decimals) {
                                value = this.roundNumber(value, this.decimals);
                            }
                        }
                        this.changeValue(value === null || isNaN(value) ? null : this.strictMode ? this.trimValue(value) : value);
                        if (!this.isKeyDown) {
                            this.raiseChangeEvent(event);
                        }
                    }
                }, {
                    key: 'updateCurrency',
                    value: function updateCurrency(prop, propVal) {
                        setValue(prop, propVal, this.cultureInfo);
                        this.updateValue(this.value);
                    }
                }, {
                    key: 'changeValue',
                    value: function changeValue(value) {
                        if (!(value || value === 0)) {
                            value = null;
                            this.setProperties({ value: value }, true);
                        } else {
                            var numberOfDecimals = void 0;
                            var decimalPart = value.toString().split('.')[1];
                            numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
                            if (this.decimals !== null) {
                                numberOfDecimals = numberOfDecimals < this.decimals ? numberOfDecimals : this.decimals;
                            }
                            this.setProperties({ value: this.roundNumber(value, numberOfDecimals) }, true);
                        }
                        this.modifyText();
                        if (!this.strictMode) {
                            this.validateState();
                        }
                    }
                }, {
                    key: 'modifyText',
                    value: function modifyText() {
                        if (this.value || this.value === 0) {
                            var value = this.formatNumber();
                            var elementValue = this.isFocused ? value : this.instance.getNumberFormat(this.cultureInfo)(this.value);
                            this.setElementValue(elementValue);
                            attributes(this.element, { 'aria-valuenow': value });
                            this.hiddenInput.value = value;
                        } else {
                            this.setElementValue('');
                            this.element.removeAttribute('aria-valuenow');
                            this.hiddenInput.value = null;
                        }
                    }
                }, {
                    key: 'setElementValue',
                    value: function setElementValue(val, element) {
                        Input.setValue(val, element ? element : this.element, this.floatLabelType, this.showClearButton);
                    }
                }, {
                    key: 'validateState',
                    value: function validateState() {
                        this.isValidState = true;
                        if (this.value || this.value === 0) {
                            this.isValidState = !(this.value > this.max || this.value < this.min);
                        }
                        this.checkErrorClass();
                    }
                }, {
                    key: 'formatNumber',
                    value: function formatNumber() {
                        var numberOfDecimals = void 0;
                        var currentValue = this.value;
                        var decimalPart = currentValue.toString().split('.')[1];
                        numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
                        if (this.decimals !== null) {
                            numberOfDecimals = numberOfDecimals < this.decimals ? numberOfDecimals : this.decimals;
                        }
                        return this.instance.getNumberFormat({
                            maximumFractionDigits: numberOfDecimals,
                            minimumFractionDigits: numberOfDecimals, useGrouping: false
                        })(this.value);
                    }
                }, {
                    key: 'trimValue',
                    value: function trimValue(value) {
                        if (value > this.max) {
                            return this.max;
                        }
                        if (value < this.min) {
                            return this.min;
                        }
                        return value;
                    }
                }, {
                    key: 'roundNumber',
                    value: function roundNumber(value, precision) {
                        var result = value;
                        var decimals = precision || 0;
                        var result1 = result.toString().split('e');
                        result = Math.round(Number(result1[0] + 'e' + (result1[1] ? Number(result1[1]) + decimals : decimals)));
                        var result2 = result.toString().split('e');
                        result = Number(result2[0] + 'e' + (result2[1] ? Number(result2[1]) - decimals : -decimals));
                        return Number(result.toFixed(decimals));
                    }
                }, {
                    key: 'cancelEvent',
                    value: function cancelEvent(event) {
                        event.preventDefault();
                        return false;
                    }
                }, {
                    key: 'keyPressHandler',
                    value: function keyPressHandler(event) {
                        if (event.which === 0 || event.metaKey || event.ctrlKey || event.keyCode === 8 || event.keyCode === 13) {
                            return true;
                        }
                        var currentChar = String.fromCharCode(event.which);
                        var text = this.element.value;
                        text = text.substring(0, this.element.selectionStart) + currentChar + text.substring(this.element.selectionEnd);
                        if (!this.numericRegex().test(text)) {
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        } else {
                            return true;
                        }
                    }
                }, {
                    key: 'numericRegex',
                    value: function numericRegex() {
                        var numericObject = getNumericObject(this.locale);
                        var decimalSeparator = getValue('decimal', numericObject);
                        var fractionRule = '*';
                        if (decimalSeparator === DECIMALSEPARATOR) {
                            decimalSeparator = '\\' + decimalSeparator;
                        }
                        if (this.decimals === 0) {
                            return INTREGEXP;
                        }
                        if (this.decimals && this.validateDecimalOnType) {
                            fractionRule = '{0,' + this.decimals + '}';
                        }
                        return new RegExp('^(-)?(((\\d+(' + decimalSeparator + '\\d' + fractionRule + ')?)|(' + decimalSeparator + '\\d' + fractionRule + ')))?$');
                    }
                }, {
                    key: 'mouseWheel',
                    value: function mouseWheel(event) {
                        event.preventDefault();
                        var delta = void 0;
                        var rawEvent = event;
                        if (rawEvent.wheelDelta) {
                            delta = rawEvent.wheelDelta / 120;
                        } else if (rawEvent.detail) {
                            delta = -rawEvent.detail / 3;
                        }
                        if (delta > 0) {
                            this.action(INCREMENT, event);
                        } else if (delta < 0) {
                            this.action(DECREMENT, event);
                        }
                        this.cancelEvent(event);
                    }
                }, {
                    key: 'focusIn',
                    value: function focusIn(event) {
                        if (!this.enabled || this.readonly) {
                            return;
                        }
                        this.isFocused = true;
                        removeClass([this.container], ERROR);
                        this.prevValue = this.value;
                        if (this.value || this.value === 0) {
                            var formatValue = this.formatNumber();
                            this.setElementValue(formatValue);
                            if (!this.isPrevFocused) {
                                this.element.setSelectionRange(0, formatValue.length);
                            }
                        }
                        if (!Browser.isDevice) {
                            EventHandler.add(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel, this);
                        }
                    }
                }, {
                    key: 'focusOut',
                    value: function focusOut(event) {
                        var _this3 = this;

                        if (this.isPrevFocused) {
                            event.preventDefault();
                            if (Browser.isDevice) {
                                var value = this.element.value;
                                this.element.focus();
                                this.isPrevFocused = false;
                                var ele = this.element;
                                setTimeout(function () {
                                    _this3.setElementValue(value, ele);
                                }, 200);
                            }
                        } else {
                            this.isFocused = false;
                            if (!this.element.value.length) {
                                this.setProperties({ value: null }, true);
                            }
                            var parsedInput = this.instance.getNumberParser({ format: 'n' })(this.element.value);
                            this.updateValue(parsedInput);
                            if (!Browser.isDevice) {
                                EventHandler.remove(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel);
                            }
                        }
                    }
                }, {
                    key: 'mouseDownOnSpinner',
                    value: function mouseDownOnSpinner(event) {
                        var _this4 = this;

                        if (this.isFocused) {
                            this.isPrevFocused = true;
                            event.preventDefault();
                        }
                        if (!this.getElementData(event)) {
                            return;
                        }
                        var result = this.getElementData(event);
                        var target = event.currentTarget;
                        var action = target.classList.contains(SPINUP) ? INCREMENT : DECREMENT;
                        EventHandler.add(target, 'mouseleave', this.mouseUpClick, this);
                        this.timeOut = setInterval(function () {
                            _this4.isCalled = true;_this4.action(action, event);
                        }, 150);
                        EventHandler.add(document, 'mouseup', this.mouseUpClick, this);
                    }
                }, {
                    key: 'touchMoveOnSpinner',
                    value: function touchMoveOnSpinner(event) {
                        var target = document.elementFromPoint(event.clientX, event.clientY);
                        if (!target.classList.contains(SPINICON)) {
                            clearInterval(this.timeOut);
                        }
                    }
                }, {
                    key: 'mouseUpOnSpinner',
                    value: function mouseUpOnSpinner(event) {
                        if (this.isPrevFocused) {
                            this.element.focus();
                            if (!Browser.isDevice) {
                                this.isPrevFocused = false;
                            }
                        }
                        if (!Browser.isDevice) {
                            event.preventDefault();
                        }
                        if (!this.getElementData(event)) {
                            return;
                        }
                        var target = event.currentTarget;
                        var action = target.classList.contains(SPINUP) ? INCREMENT : DECREMENT;
                        EventHandler.remove(target, 'mouseleave', this.mouseUpClick);
                        if (!this.isCalled) {
                            this.action(action, event);
                        }
                        this.isCalled = false;
                        EventHandler.remove(document, 'mouseup', this.mouseUpClick);
                    }
                }, {
                    key: 'getElementData',
                    value: function getElementData(event) {
                        if (event.which && event.which === 3 || event.button && event.button === 2 || !this.enabled || this.readonly) {
                            return false;
                        }
                        clearInterval(this.timeOut);
                        return true;
                    }
                }, {
                    key: 'mouseUpClick',
                    value: function mouseUpClick(event) {
                        event.stopPropagation();
                        clearInterval(this.timeOut);
                        this.isCalled = false;
                        EventHandler.remove(this.spinUp, 'mouseleave', this.mouseUpClick);
                        EventHandler.remove(this.spinDown, 'mouseleave', this.mouseUpClick);
                    }
                }, {
                    key: 'increment',
                    value: function increment() {
                        var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.step;

                        this.changeValue(this.performAction(this.value, step, INCREMENT));
                    }
                }, {
                    key: 'decrement',
                    value: function decrement() {
                        var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.step;

                        this.changeValue(this.performAction(this.value, step, DECREMENT));
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.unwireEvents();
                        detach(this.hiddenInput);
                        if (this.showSpinButton) {
                            this.unwireSpinBtnEvents();
                            detach(this.spinUp);
                            detach(this.spinDown);
                        }
                        this.container.parentElement.appendChild(this.cloneElement);
                        detach(this.container);
                        _get(NumericTextBox.prototype.__proto__ || Object.getPrototypeOf(NumericTextBox.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'getText',
                    value: function getText() {
                        return this.element.value;
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
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = Object.keys(newProp)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var prop = _step5.value;

                                switch (prop) {
                                    case 'width':
                                        setStyleAttribute(this.container, { 'width': formatUnit(newProp.width) });
                                        break;
                                    case 'cssClass':
                                        Input.setCssClass(newProp.cssClass, [this.container], oldProp.cssClass);
                                        break;
                                    case 'enabled':
                                        Input.setEnabled(newProp.enabled, this.element);
                                        break;
                                    case 'enableRtl':
                                        Input.setEnableRtl(newProp.enableRtl, [this.container]);
                                        break;
                                    case 'readonly':
                                        Input.setReadonly(newProp.readonly, this.element);
                                        if (this.readonly) {
                                            attributes(this.element, { 'aria-readonly': 'true' });
                                        } else {
                                            this.element.removeAttribute('aria-readonly');
                                        }
                                        break;
                                    case 'placeholder':
                                        Input.setPlaceholder(newProp.placeholder, this.element);
                                        break;
                                    case 'step':
                                        this.step = newProp.step;
                                        this.validateStep();
                                        break;
                                    case 'showSpinButton':
                                        if (newProp.showSpinButton) {
                                            this.spinBtnCreation();
                                        } else {
                                            detach(this.spinUp);
                                            detach(this.spinDown);
                                        }
                                        break;
                                    case 'showClearButton':
                                        Input.setClearButton(newProp.showClearButton, this.element, this.inputWrapper);
                                        break;
                                    case 'value':
                                        this.updateValue(newProp.value);
                                        break;
                                    case 'min':
                                    case 'max':
                                        setValue(prop, getValue(prop, newProp), this);
                                        this.validateMinMax();
                                        this.updateValue(this.value);
                                        break;
                                    case 'strictMode':
                                        this.strictMode = newProp.strictMode;
                                        this.updateValue(this.value);
                                        this.validateState();
                                        break;
                                    case 'locale':
                                        this.initCultureFunc();
                                        this.l10n.setLocale(this.locale);
                                        if (!isNullOrUndefined(this.spinDown)) {
                                            attributes(this.spinDown, {
                                                'title': this.l10n.getConstant('decrementTitle'),
                                                'aria-label': this.l10n.getConstant('decrementTitle')
                                            });
                                        }
                                        if (!isNullOrUndefined(this.spinUp)) {
                                            attributes(this.spinUp, {
                                                'title': this.l10n.getConstant('incrementTitle'),
                                                'aria-label': this.l10n.getConstant('incrementTitle')
                                            });
                                        }
                                        this.updatePlaceholder();
                                        Input.setPlaceholder(this.placeholder, this.element);
                                        this.updateValue(this.value);
                                        break;
                                    case 'currency':
                                        var propVal = getValue(prop, newProp);
                                        this.setProperties({ currencyCode: propVal }, true);
                                        this.updateCurrency(prop, propVal);
                                        break;
                                    case 'currencyCode':
                                        var propValue = getValue(prop, newProp);
                                        this.setProperties({ currency: propValue }, true);
                                        this.updateCurrency('currency', propValue);
                                        break;
                                    case 'format':
                                        setValue(prop, getValue(prop, newProp), this);
                                        this.initCultureInfo();
                                        this.updateValue(this.value);
                                        break;
                                    case 'decimals':
                                        this.decimals = newProp.decimals;
                                        this.updateValue(this.value);
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
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'numerictextbox';
                    }
                }]);

                return NumericTextBox;
            }(Component));

            __decorate([Property('')], NumericTextBox.prototype, "cssClass", void 0);
            __decorate([Property(null)], NumericTextBox.prototype, "value", void 0);
            __decorate([Property(-Number.MAX_VALUE)], NumericTextBox.prototype, "min", void 0);
            __decorate([Property(Number.MAX_VALUE)], NumericTextBox.prototype, "max", void 0);
            __decorate([Property(1)], NumericTextBox.prototype, "step", void 0);
            __decorate([Property(null)], NumericTextBox.prototype, "width", void 0);
            __decorate([Property(null)], NumericTextBox.prototype, "placeholder", void 0);
            __decorate([Property(true)], NumericTextBox.prototype, "showSpinButton", void 0);
            __decorate([Property(false)], NumericTextBox.prototype, "readonly", void 0);
            __decorate([Property(true)], NumericTextBox.prototype, "enabled", void 0);
            __decorate([Property(false)], NumericTextBox.prototype, "enableRtl", void 0);
            __decorate([Property(false)], NumericTextBox.prototype, "showClearButton", void 0);
            __decorate([Property(false)], NumericTextBox.prototype, "enablePersistence", void 0);
            __decorate([Property('n2')], NumericTextBox.prototype, "format", void 0);
            __decorate([Property(null)], NumericTextBox.prototype, "decimals", void 0);
            __decorate([Property(null)], NumericTextBox.prototype, "currency", void 0);
            __decorate([Property(null)], NumericTextBox.prototype, "currencyCode", void 0);
            __decorate([Property(true)], NumericTextBox.prototype, "strictMode", void 0);
            __decorate([Property(false)], NumericTextBox.prototype, "validateDecimalOnType", void 0);
            __decorate([Property('Never')], NumericTextBox.prototype, "floatLabelType", void 0);
            __decorate([Event()], NumericTextBox.prototype, "created", void 0);
            __decorate([Event()], NumericTextBox.prototype, "destroyed", void 0);
            __decorate([Event()], NumericTextBox.prototype, "change", void 0);
            _export('NumericTextBox', NumericTextBox = __decorate([NotifyPropertyChanges], NumericTextBox));

            /**
             * NumericTextBox modules
             */

            /**
             * MaskedTextBox base module
             */
            ERROR$1 = 'e-error';
            INPUTGROUP = 'e-input-group';
            FLOATINPUT = 'e-float-input';
            UTILMASK = 'e-utility-mask';
            TOPLABEL = 'e-label-top';
            BOTTOMLABEL = 'e-label-bottom';

            _export('regularExpressions', regularExpressions = {
                '0': '[0-9]',
                '9': '[0-9 ]',
                '#': '[0-9 +-]',
                'L': '[A-Za-z]',
                '?': '[A-Za-z ]',
                '&': '[^\x7f ]+',
                'C': '[^\x7f]+',
                'A': '[A-Za-z0-9]',
                'a': '[A-Za-z0-9 ]'
            });

            _export('MaskUndo', MaskUndo = function MaskUndo() {
                _classCallCheck(this, MaskUndo);
            });

            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            ROOT$1 = 'e-widget e-control-wrapper e-mask';
            INPUT = 'e-input';

            _export('MaskedTextBox', MaskedTextBox = function (_Component2) {
                _inherits(MaskedTextBox, _Component2);

                function MaskedTextBox(options, element) {
                    _classCallCheck(this, MaskedTextBox);

                    return _possibleConstructorReturn(this, (MaskedTextBox.__proto__ || Object.getPrototypeOf(MaskedTextBox)).call(this, options, element));
                }
                /**
                 * Gets the component name
                 * @private
                 */


                _createClass(MaskedTextBox, [{
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'maskedtextbox';
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        this.promptMask = '';
                        this.hiddenMask = '';
                        this.escapeMaskValue = '';
                        this.regExpCollec = regularExpressions;
                        this.customRegExpCollec = [];
                        this.undoCollec = [];
                        this.redoCollec = [];
                        this.changeEventArgs = {};
                        this.focusEventArgs = {};
                        this.maskKeyPress = false;
                        this.isFocus = false;
                        this.isInitial = false;
                        this.isIosInvalid = false;
                        var ejInstance = getValue('ej2_instances', this.element);
                        this.cloneElement = this.element.cloneNode(true);
                        this.angularTagName = null;
                        if (this.element.tagName === 'EJS-MASKEDTEXTBOX') {
                            this.angularTagName = this.element.tagName;
                            var input = createElement('input');
                            for (var i = 0; i < this.element.attributes.length; i++) {
                                input.setAttribute(this.element.attributes[i].nodeName, this.element.attributes[i].nodeValue);
                                input.innerHTML = this.element.innerHTML;
                            }
                            this.element.parentNode.appendChild(input);
                            this.element.parentNode.removeChild(this.element);
                            this.element = input;
                            setValue('ej2_instances', ejInstance, this.element);
                        }
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        var keyEntity = ['value'];
                        return this.addOnPersist(keyEntity);
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        if (this.element.tagName.toLowerCase() === 'input') {
                            if (this.floatLabelType === 'Never') {
                                addClass([this.element], INPUT);
                            }
                            this.createWrapper();
                            this.isInitial = true;
                            this.resetMaskedTextBox();
                            this.isInitial = false;
                            this.setMaskPlaceholder(true);
                            this.setWidth(this.width);
                        }
                    }
                }, {
                    key: 'resetMaskedTextBox',
                    value: function resetMaskedTextBox() {
                        this.promptMask = '';
                        this.hiddenMask = '';
                        this.escapeMaskValue = '';
                        this.customRegExpCollec = [];
                        this.undoCollec = [];
                        this.redoCollec = [];
                        if (this.promptChar.length > 1) {
                            this.promptChar = this.promptChar[0];
                        }
                        createMask.call(this);
                        applyMask.call(this);
                        var val = strippedValue.call(this, this.element);
                        this.prevValue = val;
                        this.value = val;
                        if (!this.isInitial) {
                            unwireEvents.call(this);
                        }
                        wireEvents.call(this);
                    }
                }, {
                    key: 'setMaskPlaceholder',
                    value: function setMaskPlaceholder(setVal) {
                        if (this.placeholder) {
                            Input.setPlaceholder(this.placeholder, this.element);
                            if (this.element.value === this.promptMask && setVal && this.floatLabelType !== 'Always') {
                                setElementValue.call(this, '');
                            }
                            if (this.floatLabelType === 'Never') {
                                maskInputBlurHandler.call(this);
                            }
                        }
                    }
                }, {
                    key: 'setCssClass',
                    value: function setCssClass(cssClass, element) {
                        if (cssClass) {
                            addClass(element, cssClass);
                        }
                    }
                }, {
                    key: 'setWidth',
                    value: function setWidth(width) {
                        if (!isNullOrUndefined(width)) {
                            this.element.style.width = formatUnit(width);
                        }
                    }
                }, {
                    key: 'createWrapper',
                    value: function createWrapper() {
                        this.inputObj = Input.createInput({
                            element: this.element,
                            customTag: this.angularTagName,
                            floatLabelType: this.floatLabelType,
                            properties: {
                                enableRtl: this.enableRtl,
                                enabled: this.enabled,
                                placeholder: this.placeholder
                            }
                        });
                        this.inputObj.container.setAttribute('class', ROOT$1 + ' ' + this.inputObj.container.getAttribute('class'));
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion6 = true;
                        var _didIteratorError6 = false;
                        var _iteratorError6 = undefined;

                        try {
                            for (var _iterator6 = Object.keys(newProp)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                var prop = _step6.value;

                                switch (prop) {
                                    case 'value':
                                        setMaskValue.call(this, this.value);
                                        if (this.placeholder) {
                                            this.setMaskPlaceholder(false);
                                        }
                                        break;
                                    case 'placeholder':
                                        this.setMaskPlaceholder(true);
                                        break;
                                    case 'width':
                                        this.setWidth(newProp.width);
                                        break;
                                    case 'cssClass':
                                        this.setCssClass(newProp.cssClass, [this.inputObj.container]);
                                        break;
                                    case 'enabled':
                                        Input.setEnabled(newProp.enabled, this.element);
                                        break;
                                    case 'enableRtl':
                                        Input.setEnableRtl(newProp.enableRtl, [this.inputObj.container]);
                                        break;
                                    case 'customCharacters':
                                        this.customCharacters = newProp.customCharacters;
                                        this.resetMaskedTextBox();
                                        break;
                                    case 'mask':
                                        var strippedValue$$1 = this.value;
                                        this.mask = newProp.mask;
                                        this.updateValue(strippedValue$$1);
                                        break;
                                    case 'promptChar':
                                        if (newProp.promptChar.length > 1) {
                                            newProp.promptChar = newProp.promptChar[0];
                                        }
                                        if (newProp.promptChar) {
                                            this.promptChar = newProp.promptChar;
                                        } else {
                                            this.promptChar = '_';
                                        }
                                        var value = this.element.value.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                                        if (this.promptMask === this.element.value) {
                                            value = this.promptMask.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                                        }
                                        this.promptMask = this.promptMask.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                                        this.undoCollec = this.redoCollec = [];
                                        setElementValue.call(this, value);
                                        break;
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
                }, {
                    key: 'updateValue',
                    value: function updateValue(strippedVal) {
                        this.resetMaskedTextBox();
                        setMaskValue.call(this, strippedVal);
                    }
                }, {
                    key: 'getMaskedValue',
                    value: function getMaskedValue() {
                        return unstrippedValue.call(this, this.element);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        unwireEvents.call(this);
                        this.inputObj.container.parentElement.appendChild(this.cloneElement);
                        detach(this.inputObj.container);
                        _get(MaskedTextBox.prototype.__proto__ || Object.getPrototypeOf(MaskedTextBox.prototype), 'destroy', this).call(this);
                    }
                }]);

                return MaskedTextBox;
            }(Component));

            __decorate$1([Property(null)], MaskedTextBox.prototype, "cssClass", void 0);
            __decorate$1([Property(null)], MaskedTextBox.prototype, "width", void 0);
            __decorate$1([Property(null)], MaskedTextBox.prototype, "placeholder", void 0);
            __decorate$1([Property('Never')], MaskedTextBox.prototype, "floatLabelType", void 0);
            __decorate$1([Property(true)], MaskedTextBox.prototype, "enabled", void 0);
            __decorate$1([Property(false)], MaskedTextBox.prototype, "enablePersistence", void 0);
            __decorate$1([Property(false)], MaskedTextBox.prototype, "enableRtl", void 0);
            __decorate$1([Property(null)], MaskedTextBox.prototype, "mask", void 0);
            __decorate$1([Property('_')], MaskedTextBox.prototype, "promptChar", void 0);
            __decorate$1([Property(null)], MaskedTextBox.prototype, "value", void 0);
            __decorate$1([Property(null)], MaskedTextBox.prototype, "customCharacters", void 0);
            __decorate$1([Event()], MaskedTextBox.prototype, "created", void 0);
            __decorate$1([Event()], MaskedTextBox.prototype, "destroyed", void 0);
            __decorate$1([Event()], MaskedTextBox.prototype, "change", void 0);
            __decorate$1([Event()], MaskedTextBox.prototype, "focus", void 0);
            _export('MaskedTextBox', MaskedTextBox = __decorate$1([NotifyPropertyChanges], MaskedTextBox));

            /**
             * MaskedTextbox modules
             */

            /**
             * MaskedTextbox modules
             */

            /**
             * Input box Component
             */

            __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('TicksData', TicksData = function (_ChildProperty) {
                _inherits(TicksData, _ChildProperty);

                function TicksData() {
                    _classCallCheck(this, TicksData);

                    return _possibleConstructorReturn(this, (TicksData.__proto__ || Object.getPrototypeOf(TicksData)).apply(this, arguments));
                }

                return TicksData;
            }(ChildProperty));

            __decorate$2([Property('None')], TicksData.prototype, "placement", void 0);
            __decorate$2([Property(10)], TicksData.prototype, "largeStep", void 0);
            __decorate$2([Property(1)], TicksData.prototype, "smallStep", void 0);
            __decorate$2([Property(false)], TicksData.prototype, "showSmallTicks", void 0);
            __decorate$2([Property(null)], TicksData.prototype, "format", void 0);
            /**
             * It illustrates the tooltip data in slider.
             */

            _export('TooltipData', TooltipData = function (_ChildProperty2) {
                _inherits(TooltipData, _ChildProperty2);

                function TooltipData() {
                    _classCallCheck(this, TooltipData);

                    return _possibleConstructorReturn(this, (TooltipData.__proto__ || Object.getPrototypeOf(TooltipData)).apply(this, arguments));
                }

                return TooltipData;
            }(ChildProperty));

            __decorate$2([Property('')], TooltipData.prototype, "cssClass", void 0);
            __decorate$2([Property('Before')], TooltipData.prototype, "placement", void 0);
            __decorate$2([Property('Focus')], TooltipData.prototype, "showOn", void 0);
            __decorate$2([Property(false)], TooltipData.prototype, "isVisible", void 0);
            __decorate$2([Property(null)], TooltipData.prototype, "format", void 0);
            classNames = {
                root: 'e-slider',
                rtl: 'e-rtl',
                sliderHiddenInput: 'e-slider-input',
                sliderHandle: 'e-handle',
                rangeBar: 'e-range',
                sliderButton: 'e-slider-button',
                firstButton: 'e-first-button',
                secondButton: 'e-second-button',
                scale: 'e-scale',
                tick: 'e-tick',
                large: 'e-large',
                tickValue: 'e-tick-value',
                sliderTooltip: 'e-slider-tooltip',
                sliderHover: 'e-slider-hover',
                sliderFirstHandle: 'e-handle-first',
                sliderSecondHandle: 'e-handle-second',
                sliderDisabled: 'e-disabled',
                sliderContainer: 'e-slider-container',
                horizontalTooltipBefore: 'e-slider-horizontal-before',
                horizontalTooltipAfter: 'e-slider-horizontal-after',
                verticalTooltipBefore: 'e-slider-vertical-before',
                verticalTooltipAfter: 'e-slider-vertical-after',
                materialTooltip: 'e-material-tooltip',
                materialTooltipOpen: 'e-material-tooltip-open',
                materialTooltipActive: 'e-tooltip-active',
                materialSlider: 'e-material-slider',
                sliderTrack: 'e-slider-track',
                sliderHandleFocused: 'e-handle-focused',
                verticalSlider: 'e-vertical',
                horizontalSlider: 'e-horizontal',
                sliderHandleStart: 'e-handle-start',
                sliderTooltipStart: 'e-material-tooltip-start',
                sliderTabHandle: 'e-tab-handle',
                sliderButtonIcon: 'e-button-icon',
                sliderSmallSize: 'e-small-size',
                sliderTickPosition: 'e-tick-pos',
                sliderFirstTick: 'e-first-tick',
                sliderLastTick: 'e-last-tick',
                sliderButtonClass: 'e-slider-btn',
                sliderTooltipWrapper: 'e-tooltip-wrap',
                sliderTabTrack: 'e-tab-track',
                sliderTabRange: 'e-tab-range',
                sliderActiveHandle: 'e-handle-active',
                sliderMaterialHandle: 'e-material-handle',
                sliderMaterialRange: 'e-material-range',
                sliderMaterialDefault: 'e-material-default',
                materialTooltipShow: 'e-material-tooltip-show',
                materialTooltipHide: 'e-material-tooltip-hide',
                readOnly: 'e-read-only'
            };

            _export('Slider', Slider = function (_Component3) {
                _inherits(Slider, _Component3);

                function Slider(options, element) {
                    _classCallCheck(this, Slider);

                    var _this13 = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, options, element));

                    _this13.horDir = 'left';
                    _this13.verDir = 'bottom';
                    _this13.transition = {
                        handle: 'left .4s cubic-bezier(.25, .8, .25, 1), right .4s cubic-bezier(.25, .8, .25, 1), ' + 'top .4s cubic-bezier(.25, .8, .25, 1) , bottom .4s cubic-bezier(.25, .8, .25, 1)',
                        rangeBar: 'all .4s cubic-bezier(.25, .8, .25, 1)'
                    };
                    _this13.transitionOnMaterialTooltip = {
                        handle: 'left 1ms ease-out, right 1ms ease-out, bottom 1ms ease-out',
                        rangeBar: 'left 1ms ease-out, right 1ms ease-out, bottom 1ms ease-out, width 1ms ease-out, height 1ms ease-out'
                    };
                    _this13.scaleTransform = 'transform .4s cubic-bezier(.25, .8, .25, 1)';
                    _this13.customAriaText = null;
                    return _this13;
                }

                _createClass(Slider, [{
                    key: 'preRender',
                    value: function preRender() {
                        var localeText = { incrementTitle: 'Increase', decrementTitle: 'Decrease' };
                        this.l10n = new L10n('slider', localeText, this.locale);
                        this.tickElementCollection = [];
                        this.tooltipFormatInfo = {};
                        this.ticksFormatInfo = {};
                        this.initCultureInfo();
                        this.initCultureFunc();
                    }
                }, {
                    key: 'initCultureFunc',
                    value: function initCultureFunc() {
                        this.internationalization = new Internationalization(this.locale);
                    }
                }, {
                    key: 'initCultureInfo',
                    value: function initCultureInfo() {
                        this.tooltipFormatInfo.format = !isNullOrUndefined(this.tooltip.format) ? this.tooltip.format : null;
                        this.ticksFormatInfo.format = !isNullOrUndefined(this.ticks.format) ? this.ticks.format : null;
                    }
                }, {
                    key: 'formatString',
                    value: function formatString(value, formatInfo) {
                        var formatValue = null;
                        var formatString = null;
                        if (value || value === 0) {
                            formatValue = this.formatNumber(value);
                            var numberOfDecimals = this.numberOfDecimals(value);
                            formatString = this.internationalization.getNumberFormat(formatInfo)(this.makeRoundNumber(value, numberOfDecimals));
                        }
                        return { elementVal: formatValue, formatString: formatString };
                    }
                }, {
                    key: 'formatNumber',
                    value: function formatNumber(value) {
                        var numberOfDecimals = this.numberOfDecimals(value);
                        return this.internationalization.getNumberFormat({
                            maximumFractionDigits: numberOfDecimals,
                            minimumFractionDigits: numberOfDecimals, useGrouping: false
                        })(value);
                    }
                }, {
                    key: 'numberOfDecimals',
                    value: function numberOfDecimals(value) {
                        var decimalPart = value.toString().split('.')[1];
                        var numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
                        return numberOfDecimals;
                    }
                }, {
                    key: 'makeRoundNumber',
                    value: function makeRoundNumber(value, precision) {
                        var decimals = precision || 0;
                        return Number(value.toFixed(decimals));
                    }
                }, {
                    key: 'fractionalToInteger',
                    value: function fractionalToInteger(value) {
                        value = this.numberOfDecimals(value) === 0 ? Number(value).toFixed(this.noOfDecimals) : value;
                        var tens = 1;
                        for (var i = 0; i < this.noOfDecimals; i++) {
                            tens *= 10;
                        }
                        value = Number((value * tens).toFixed(0));
                        return value;
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.initialize();
                        this.initRender();
                        this.wireEvents();
                        this.setZindex();
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        addClass([this.element], classNames.root);
                        this.setCSSClass();
                    }
                }, {
                    key: 'setCSSClass',
                    value: function setCSSClass(oldCSSClass) {
                        if (oldCSSClass) {
                            removeClass([this.element], oldCSSClass.split(' '));
                        }
                        if (this.cssClass) {
                            addClass([this.element], this.cssClass.split(' '));
                        }
                    }
                }, {
                    key: 'setEnabled',
                    value: function setEnabled() {
                        var tooltipElement = this.type !== 'Range' ? [this.firstTooltipElement] : [this.firstTooltipElement, this.secondTooltipElement];
                        if (!this.enabled) {
                            addClass([this.sliderContainer], [classNames.sliderDisabled]);
                            if (this.tooltip.isVisible && this.tooltip.showOn === 'Always') {
                                tooltipElement.forEach(function (tooltipElement) {
                                    tooltipElement.classList.add(classNames.sliderDisabled);
                                });
                            }
                            this.unwireEvents();
                        } else {
                            removeClass([this.sliderContainer], [classNames.sliderDisabled]);
                            if (this.tooltip.isVisible && this.tooltip.showOn === 'Always') {
                                tooltipElement.forEach(function (tooltipElement) {
                                    tooltipElement.classList.remove(classNames.sliderDisabled);
                                });
                            }
                            this.wireEvents();
                        }
                    }
                }, {
                    key: 'getTheme',
                    value: function getTheme(container) {
                        var theme = window.getComputedStyle(container, ':after').getPropertyValue('content');
                        return theme.replace(/['"]+/g, '');
                    }
                }, {
                    key: 'initRender',
                    value: function initRender() {
                        this.sliderContainer = createElement('div', { className: classNames.sliderContainer });
                        this.element.parentNode.insertBefore(this.sliderContainer, this.element);
                        this.sliderContainer.appendChild(this.element);
                        this.sliderTrack = createElement('div', { className: classNames.sliderTrack });
                        this.element.appendChild(this.sliderTrack);
                        this.element.tabIndex = -1;
                        this.isMaterial = this.getTheme(this.sliderContainer) === 'material';
                        this.setHandler();
                        this.createRangeBar();
                        this.setOrientClass();
                        this.hiddenInput = createElement('input', {
                            attrs: {
                                type: 'hidden', value: isNullOrUndefined(this.value) ? this.min.toString() : this.value.toString(),
                                name: this.element.getAttribute('name') || this.element.getAttribute('id') || '_' + (Math.random() * 1000).toFixed(0) + 'slider', class: classNames.sliderHiddenInput
                            }
                        });
                        this.hiddenInput.tabIndex = -1;
                        this.sliderContainer.appendChild(this.hiddenInput);
                        if (this.showButtons) {
                            this.setButtons();
                        }
                        this.setEnableRTL();
                        if (this.type === 'Range') {
                            this.rangeValueUpdate();
                        } else {
                            this.value = isNullOrUndefined(this.value) ? parseFloat(formatUnit(this.min.toString())) : this.value;
                        }
                        this.previousVal = this.type !== 'Range' ? this.checkHandleValue(parseFloat(formatUnit(this.value.toString()))) : [this.checkHandleValue(parseFloat(formatUnit(this.value[0].toString()))), this.checkHandleValue(parseFloat(formatUnit(this.value[1].toString())))];
                        this.previousChanged = this.previousVal;
                        this.setValue();
                        if (this.ticks.placement !== 'None') {
                            this.renderScale();
                        }
                        if (this.tooltip.isVisible) {
                            this.renderTooltip();
                        }
                        if (!this.enabled) {
                            addClass([this.sliderContainer], [classNames.sliderDisabled]);
                        } else {
                            removeClass([this.sliderContainer], [classNames.sliderDisabled]);
                        }
                        if (this.readOnly) {
                            addClass([this.sliderContainer], [classNames.readOnly]);
                        } else {
                            removeClass([this.sliderContainer], [classNames.readOnly]);
                        }
                    }
                }, {
                    key: 'createRangeBar',
                    value: function createRangeBar() {
                        if (this.type !== 'Default') {
                            this.rangeBar = createElement('div', { attrs: { class: classNames.rangeBar } });
                            this.element.appendChild(this.rangeBar);
                        }
                    }
                }, {
                    key: 'setOrientClass',
                    value: function setOrientClass() {
                        if (this.orientation !== 'Vertical') {
                            this.sliderContainer.classList.remove(classNames.verticalSlider);
                            this.sliderContainer.classList.add(classNames.horizontalSlider);
                            this.firstHandle.setAttribute('aria-orientation', 'horizontal');
                            if (this.type === 'Range') {
                                this.secondHandle.setAttribute('aria-orientation', 'horizontal');
                            }
                        } else {
                            this.sliderContainer.classList.remove(classNames.horizontalSlider);
                            this.sliderContainer.classList.add(classNames.verticalSlider);
                            this.firstHandle.setAttribute('aria-orientation', 'vertical');
                            if (this.type === 'Range') {
                                this.secondHandle.setAttribute('aria-orientation', 'vertical');
                            }
                        }
                    }
                }, {
                    key: 'setAriaAttributes',
                    value: function setAriaAttributes(element) {
                        var _this14 = this;

                        if (this.type !== 'Range') {
                            attributes(element, {
                                'aria-valuemin': this.min.toString(), 'aria-valuemax': this.max.toString()
                            });
                        } else {
                            var range = [[this.min.toString(), this.value[1].toString()], [this.value[0].toString(), this.max.toString()]];
                            range.forEach(function (range, index) {
                                var element = index === 0 ? _this14.firstHandle : _this14.secondHandle;
                                if (element) {
                                    attributes(element, {
                                        'aria-valuemin': range[0], 'aria-valuemax': range[1]
                                    });
                                }
                            });
                        }
                    }
                }, {
                    key: 'createSecondHandle',
                    value: function createSecondHandle() {
                        this.secondHandle = createElement('div', {
                            attrs: {
                                class: classNames.sliderHandle, 'role': 'slider', 'aria-labelledby': this.element.id + '_title', tabIndex: '0'
                            }
                        });
                        this.secondHandle.classList.add(classNames.sliderSecondHandle);
                        this.element.appendChild(this.secondHandle);
                        if (this.isMaterial && this.tooltip.isVisible) {
                            this.secondMaterialHandle = createElement('div', {
                                attrs: {
                                    class: classNames.sliderHandle + ' ' + classNames.sliderMaterialHandle
                                }
                            });
                            this.element.appendChild(this.secondMaterialHandle);
                        }
                    }
                }, {
                    key: 'createFirstHandle',
                    value: function createFirstHandle() {
                        this.firstHandle = createElement('div', {
                            attrs: {
                                class: classNames.sliderHandle, 'role': 'slider', 'aria-labelledby': this.element.id + '_title', tabIndex: '0'
                            }
                        });
                        this.firstHandle.classList.add(classNames.sliderFirstHandle);
                        this.element.appendChild(this.firstHandle);
                        if (this.isMaterial && this.tooltip.isVisible) {
                            this.firstMaterialHandle = createElement('div', {
                                attrs: {
                                    class: classNames.sliderHandle + ' ' + classNames.sliderMaterialHandle
                                }
                            });
                            this.element.appendChild(this.firstMaterialHandle);
                        }
                    }
                }, {
                    key: 'wireFirstHandleEvt',
                    value: function wireFirstHandleEvt(destroy) {
                        if (!destroy) {
                            EventHandler.add(this.firstHandle, 'mousedown touchstart', this.handleFocus, this);
                            EventHandler.add(this.firstHandle, 'transitionend', this.transitionEnd, this);
                            EventHandler.add(this.firstHandle, 'mouseenter touchenter', this.handleOver, this);
                            EventHandler.add(this.firstHandle, 'mouseleave touchend', this.handleLeave, this);
                        } else {
                            EventHandler.remove(this.firstHandle, 'mousedown touchstart', this.handleFocus);
                            EventHandler.remove(this.firstHandle, 'transitionend', this.transitionEnd);
                            EventHandler.remove(this.firstHandle, 'mouseenter touchenter', this.handleOver);
                            EventHandler.remove(this.firstHandle, 'mouseleave touchend', this.handleLeave);
                        }
                    }
                }, {
                    key: 'wireSecondHandleEvt',
                    value: function wireSecondHandleEvt(destroy) {
                        if (!destroy) {
                            EventHandler.add(this.secondHandle, 'mousedown touchstart', this.handleFocus, this);
                            EventHandler.add(this.secondHandle, 'transitionend', this.transitionEnd, this);
                            EventHandler.add(this.secondHandle, 'mouseenter touchenter', this.handleOver, this);
                            EventHandler.add(this.secondHandle, 'mouseleave touchend', this.handleLeave, this);
                        } else {
                            EventHandler.remove(this.secondHandle, 'mousedown touchstart', this.handleFocus);
                            EventHandler.remove(this.secondHandle, 'transitionend', this.transitionEnd);
                            EventHandler.remove(this.secondHandle, 'mouseenter touchenter', this.handleOver);
                            EventHandler.remove(this.secondHandle, 'mouseleave touchend', this.handleLeave);
                        }
                    }
                }, {
                    key: 'handleStart',
                    value: function handleStart() {
                        var pos = this.activeHandle === 1 ? this.handlePos1 : this.handlePos2;
                        var tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
                        if (pos === 0 && this.type !== 'Range') {
                            this.getHandle().classList.add(classNames.sliderHandleStart);
                            if (this.isMaterial && this.tooltip.isVisible) {
                                this.firstMaterialHandle.classList.add(classNames.sliderHandleStart);
                                if (tooltipElement) {
                                    tooltipElement.classList.add(classNames.sliderTooltipStart);
                                }
                            }
                        }
                    }
                }, {
                    key: 'transitionEnd',
                    value: function transitionEnd(e) {
                        this.handleStart();
                        this.getHandle().style.transition = 'none';
                        if (this.type !== 'Default') {
                            this.rangeBar.style.transition = 'none';
                        }
                        if (this.tooltip.isVisible) {
                            var tooltipObj = this.activeHandle === 1 ? this.firstTooltipObj : this.secondTooltipObj;
                            var tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
                            if (!this.isMaterial) {
                                tooltipObj.animation = { open: { effect: 'None' }, close: { effect: 'FadeOut', duration: 500 } };
                                this.tooltipAnimation();
                            } else {
                                if (!tooltipElement.classList.contains(classNames.materialTooltipOpen) && e.propertyName !== 'transform') {
                                    this.openMaterialTooltip();
                                } else {
                                    if (this.type === 'Default') {
                                        tooltipElement.style.transition = this.transition.handle;
                                    }
                                    this.refreshTooltip();
                                }
                            }
                        }
                        if (this.tooltip.showOn !== 'Always') {
                            this.closeTooltip();
                        }
                    }
                }, {
                    key: 'handleFocusOut',
                    value: function handleFocusOut() {
                        if (this.firstHandle.classList.contains(classNames.sliderHandleFocused)) {
                            this.firstHandle.classList.remove(classNames.sliderHandleFocused);
                        }
                        if (this.type === 'Range') {
                            if (this.secondHandle.classList.contains(classNames.sliderHandleFocused)) {
                                this.secondHandle.classList.remove(classNames.sliderHandleFocused);
                            }
                        }
                    }
                }, {
                    key: 'handleFocus',
                    value: function handleFocus(e) {
                        if (e.currentTarget === this.firstHandle) {
                            this.firstHandle.classList.add(classNames.sliderHandleFocused);
                        } else {
                            this.secondHandle.classList.add(classNames.sliderHandleFocused);
                        }
                    }
                }, {
                    key: 'handleOver',
                    value: function handleOver(e) {
                        if (this.tooltip.isVisible && this.tooltip.showOn === 'Hover') {
                            this.tooltipValue();
                            var tooltipObj = e.currentTarget === this.firstHandle ? this.firstTooltipObj : this.secondTooltipObj;
                            tooltipObj.animation = { open: { effect: 'None' }, close: { effect: 'FadeOut', duration: 500 } };
                            if (e.currentTarget === this.firstHandle) {
                                this.firstTooltipObj.open(this.firstHandle);
                            } else {
                                this.secondTooltipObj.open(this.secondHandle);
                            }
                        }
                    }
                }, {
                    key: 'handleLeave',
                    value: function handleLeave(e) {
                        if (this.tooltip.isVisible && this.tooltip.showOn === 'Hover' && !e.currentTarget.classList.contains(classNames.sliderHandleFocused) && !e.currentTarget.classList.contains(classNames.sliderTabHandle)) {
                            this.tooltipValue();
                            var tooltipObj = e.currentTarget === this.firstHandle ? this.firstTooltipObj : this.secondTooltipObj;
                            if (e.currentTarget === this.firstHandle) {
                                this.firstTooltipObj.close();
                            } else {
                                this.secondTooltipObj.close();
                            }
                            tooltipObj.animation = { open: { effect: 'None' }, close: { effect: 'FadeOut', duration: 500 } };
                        }
                    }
                }, {
                    key: 'setHandler',
                    value: function setHandler() {
                        if (this.min > this.max) {
                            this.min = this.max;
                        }
                        this.createFirstHandle();
                        if (this.type === 'Range') {
                            this.createSecondHandle();
                        }
                    }
                }, {
                    key: 'setEnableRTL',
                    value: function setEnableRTL() {
                        this.enableRtl && this.orientation !== 'Vertical' ? addClass([this.sliderContainer], classNames.rtl) : removeClass([this.sliderContainer], classNames.rtl);
                        var preDir = this.orientation !== 'Vertical' ? this.horDir : this.verDir;
                        if (this.enableRtl) {
                            this.horDir = 'right';
                            this.verDir = 'bottom';
                        } else {
                            this.horDir = 'left';
                            this.verDir = 'bottom';
                        }
                        var currDir = this.orientation !== 'Vertical' ? this.horDir : this.verDir;
                        if (preDir !== currDir) {
                            if (this.orientation === 'Horizontal') {
                                setStyleAttribute(this.firstHandle, { 'right': '', 'left': 'auto' });
                                if (this.type === 'Range') {
                                    setStyleAttribute(this.secondHandle, { 'top': '', 'left': 'auto' });
                                }
                            }
                        }
                    }
                }, {
                    key: 'tooltipValue',
                    value: function tooltipValue() {
                        var text = void 0;
                        var args = {
                            value: this.value,
                            text: ''
                        };
                        this.setTooltipContent();
                        args.text = text = this.firstTooltipObj.content;
                        this.trigger('tooltipChange', args);
                        this.addTooltipClass(args.text);
                        if (text !== args.text) {
                            this.customAriaText = args.text;
                            this.firstTooltipObj.content = args.text;
                            this.setAriaAttrValue(this.firstHandle);
                            if (this.type === 'Range') {
                                this.secondTooltipObj.content = args.text;
                                this.setAriaAttrValue(this.secondHandle);
                            }
                        }
                    }
                }, {
                    key: 'setTooltipContent',
                    value: function setTooltipContent() {
                        if (this.type === 'Range') {
                            var content = this.formatContent(this.tooltipFormatInfo, false);
                            this.firstTooltipObj.content = content;
                            this.secondTooltipObj.content = content;
                        } else {
                            if (!isNullOrUndefined(this.handleVal1)) {
                                var _content = this.formatContent(this.tooltipFormatInfo, false);
                                this.firstTooltipObj.content = _content;
                            }
                        }
                    }
                }, {
                    key: 'formatContent',
                    value: function formatContent(formatInfo, ariaContent) {
                        var content = '';
                        if (!ariaContent) {
                            if (this.type === 'Range') {
                                if (this.enableRtl && this.orientation !== 'Vertical') {
                                    content = !isNullOrUndefined(formatInfo.format) ? this.formatString(this.handleVal2, formatInfo).formatString + ' - ' + this.formatString(this.handleVal1, formatInfo).formatString : this.handleVal2.toString() + ' - ' + this.handleVal1.toString();
                                } else {
                                    content = !isNullOrUndefined(formatInfo.format) ? this.formatString(this.handleVal1, formatInfo).formatString + ' - ' + this.formatString(this.handleVal2, formatInfo).formatString : this.handleVal1.toString() + ' - ' + this.handleVal2.toString();
                                }
                            } else {
                                if (!isNullOrUndefined(this.handleVal1)) {
                                    content = !isNullOrUndefined(formatInfo.format) ? this.formatString(this.handleVal1, formatInfo).formatString : this.handleVal1.toString();
                                }
                            }
                            return content;
                        } else {
                            if (this.type === 'Range') {
                                if (this.enableRtl && this.orientation !== 'Vertical') {
                                    content = !isNullOrUndefined(this.tooltip) && !isNullOrUndefined(this.tooltip.format) ? this.formatString(this.handleVal2, formatInfo).elementVal + ' - ' + this.formatString(this.handleVal1, formatInfo).elementVal : this.handleVal2.toString() + ' - ' + this.handleVal1.toString();
                                } else {
                                    content = !isNullOrUndefined(this.tooltip) && !isNullOrUndefined(this.tooltip.format) ? this.formatString(this.handleVal1, formatInfo).elementVal + ' - ' + this.formatString(this.handleVal2, formatInfo).elementVal : this.handleVal1.toString() + ' - ' + this.handleVal2.toString();
                                }
                            } else {
                                if (!isNullOrUndefined(this.handleVal1)) {
                                    content = !isNullOrUndefined(this.tooltip) && !isNullOrUndefined(this.tooltip.format) ? this.formatString(this.handleVal1, formatInfo).elementVal : this.handleVal1.toString();
                                }
                            }
                            return content;
                        }
                    }
                }, {
                    key: 'addTooltipClass',
                    value: function addTooltipClass(content) {
                        var _this15 = this;

                        if (this.isMaterial && this.tooltip.isVisible) {
                            var count = content.toString().length;
                            var tooltipElement = this.type !== 'Range' ? [this.firstTooltipElement] : [this.firstTooltipElement, this.secondTooltipElement];
                            tooltipElement.forEach(function (element, index) {
                                if (!element) {
                                    var cssClass = count > 4 ? classNames.sliderMaterialRange : classNames.sliderMaterialDefault;
                                    !index ? _this15.firstTooltipObj.cssClass = classNames.sliderTooltip + ' ' + cssClass : _this15.secondTooltipObj.cssClass = classNames.sliderTooltip + ' ' + cssClass;
                                } else {
                                    if (count > 4) {
                                        element.classList.remove(classNames.sliderMaterialDefault);
                                        if (!element.classList.contains(classNames.sliderMaterialRange)) {
                                            element.classList.add(classNames.sliderMaterialRange);
                                            element.style.transform = 'scale(1)';
                                        }
                                    } else {
                                        element.classList.remove(classNames.sliderMaterialRange);
                                        if (!element.classList.contains(classNames.sliderMaterialDefault)) {
                                            element.classList.add(classNames.sliderMaterialDefault);
                                            element.style.transform = _this15.getTooltipTransformProperties(_this15.previousTooltipClass).rotate;
                                        }
                                    }
                                }
                            });
                        }
                    }
                }, {
                    key: 'tooltipPlacement',
                    value: function tooltipPlacement() {
                        var tooltipPosition = void 0;
                        if (this.orientation === 'Horizontal') {
                            this.tooltip.placement === 'Before' ? tooltipPosition = 'TopCenter' : tooltipPosition = 'BottomCenter';
                        } else {
                            this.tooltip.placement === 'Before' ? tooltipPosition = 'LeftCenter' : tooltipPosition = 'RightCenter';
                        }
                        this.firstTooltipObj.position = tooltipPosition;
                        if (this.type === 'Range') {
                            this.secondTooltipObj.position = tooltipPosition;
                        }
                        if (this.isMaterial) {
                            this.firstTooltipObj.showTipPointer = true;
                            this.setProperties({ tooltip: { showOn: 'Always' } }, true);
                            this.firstTooltipObj.height = 30;
                            if (this.type === 'Range') {
                                this.secondTooltipObj.showTipPointer = true;
                                this.secondTooltipObj.height = 30;
                            }
                        }
                    }
                }, {
                    key: 'tooltipBeforeOpen',
                    value: function tooltipBeforeOpen(args) {
                        var tooltipElement = args.target === this.firstHandle ? this.firstTooltipElement = args.element : this.secondTooltipElement = args.element;
                        args.target.removeAttribute('aria-describedby');
                        if (this.isMaterial && this.tooltip.isVisible) {
                            var transformProperties = this.getTooltipTransformProperties(this.previousTooltipClass);
                            tooltipElement.firstChild.classList.add(classNames.materialTooltipHide);
                            this.handleStart();
                            if (tooltipElement.firstElementChild.innerText.length > 4) {
                                tooltipElement.style.transform = transformProperties.translate + ' scale(0.01)';
                            } else {
                                tooltipElement.style.transform = transformProperties.translate + ' ' + transformProperties.rotate + ' scale(0.01)';
                            }
                        }
                    }
                }, {
                    key: 'wireMaterialTooltipEvent',
                    value: function wireMaterialTooltipEvent(destroy) {
                        if (this.isMaterial && this.tooltip.isVisible) {
                            if (!destroy) {
                                EventHandler.add(this.firstTooltipElement, 'mousedown touchstart', this.sliderDown, this);
                                if (this.type === 'Range') {
                                    EventHandler.add(this.secondTooltipElement, 'mousedown touchstart', this.sliderDown, this);
                                }
                            } else {
                                EventHandler.remove(this.firstTooltipElement, 'mousedown touchstart', this.sliderDown);
                                if (this.type === 'Range') {
                                    EventHandler.remove(this.secondTooltipElement, 'mousedown touchstart', this.sliderDown);
                                }
                            }
                        }
                    }
                }, {
                    key: 'tooltipPositionCalculation',
                    value: function tooltipPositionCalculation(position) {
                        var cssClass = void 0;
                        switch (position) {
                            case 'TopCenter':
                                cssClass = classNames.horizontalTooltipBefore;
                                break;
                            case 'BottomCenter':
                                cssClass = classNames.horizontalTooltipAfter;
                                break;
                            case 'LeftCenter':
                                cssClass = classNames.verticalTooltipBefore;
                                break;
                            case 'RightCenter':
                                cssClass = classNames.verticalTooltipAfter;
                                break;
                        }
                        return cssClass;
                    }
                }, {
                    key: 'getTooltipTransformProperties',
                    value: function getTooltipTransformProperties(className) {
                        if (this.firstTooltipElement) {
                            var position = void 0;
                            if (this.orientation === 'Horizontal') {
                                position = this.firstTooltipElement.clientHeight + 14 - this.firstTooltipElement.clientHeight / 2;
                            } else {
                                position = this.firstTooltipElement.clientWidth + 14 - this.firstTooltipElement.clientWidth / 2;
                            }
                            var transformProperties = this.orientation === 'Horizontal' ? className === classNames.horizontalTooltipBefore ? { rotate: 'rotate(45deg)', translate: 'translateY(' + position + 'px)' } : { rotate: 'rotate(225deg)', translate: 'translateY(' + -position + 'px)' } : className === classNames.verticalTooltipBefore ? { rotate: 'rotate(-45deg)', translate: 'translateX(' + position + 'px)' } : { rotate: 'rotate(-225deg)', translate: 'translateX(' + -position + 'px)' };
                            return transformProperties;
                        }
                        return undefined;
                    }
                }, {
                    key: 'openMaterialTooltip',
                    value: function openMaterialTooltip() {
                        var _this16 = this;

                        this.refreshTooltip();
                        var tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
                        var handle = this.activeHandle === 1 ? this.firstMaterialHandle : this.secondMaterialHandle;
                        if (tooltipElement.firstChild.classList.contains(classNames.materialTooltipHide)) {
                            tooltipElement.firstChild.classList.remove(classNames.materialTooltipHide);
                        }
                        tooltipElement.firstChild.classList.add(classNames.materialTooltipShow);
                        this.getHandle().style.cursor = 'default';
                        tooltipElement.style.transition = this.scaleTransform;
                        tooltipElement.classList.add(classNames.materialTooltipOpen);
                        handle.style.transform = 'scale(0)';
                        if (tooltipElement.firstElementChild.innerText.length > 4) {
                            tooltipElement.style.transform = 'scale(1)';
                        } else {
                            tooltipElement.style.transform = this.getTooltipTransformProperties(this.previousTooltipClass).rotate;
                        }
                        if (this.type === 'Default') {
                            setTimeout(function () {
                                tooltipElement.style.transition = _this16.transition.handle;
                            }, 2500);
                        } else {
                            setTimeout(function () {
                                tooltipElement.style.transition = 'none';
                            }, 2500);
                        }
                    }
                }, {
                    key: 'checkTooltipPosition',
                    value: function checkTooltipPosition(args) {
                        var tooltipPosition = args.target === this.firstHandle ? this.firstHandleTooltipPosition : this.secondHandleTooltipPosition;
                        if (tooltipPosition === undefined || tooltipPosition !== args.collidedPosition) {
                            var tooltipClass = this.tooltipPositionCalculation(args.collidedPosition);
                            args.element.classList.remove(this.previousTooltipClass);
                            args.element.classList.add(tooltipClass);
                            this.previousTooltipClass = tooltipClass;
                            if (args.element.style.transform && args.element.classList.contains(classNames.materialTooltipOpen) && args.element.firstElementChild.innerText.length < 4) {
                                args.element.style.transform = this.getTooltipTransformProperties(this.previousTooltipClass).rotate;
                            }
                            if (args.target === this.firstHandle) {
                                this.firstHandleTooltipPosition = args.collidedPosition;
                            } else {
                                this.secondHandleTooltipPosition = args.collidedPosition;
                            }
                        }
                    }
                }, {
                    key: 'renderTooltip',
                    value: function renderTooltip() {
                        if (this.tooltip.showOn === 'Auto') {
                            this.setProperties({ tooltip: { showOn: 'Hover' } }, true);
                        }
                        this.firstTooltipObj = new Tooltip({
                            showTipPointer: false,
                            cssClass: classNames.sliderTooltip,
                            animation: { open: { effect: 'None' }, close: { effect: 'None' } },
                            opensOn: 'Custom',
                            beforeOpen: this.tooltipBeforeOpen.bind(this),
                            beforeCollision: this.checkTooltipPosition.bind(this),
                            afterClose: this.tooltipAfterClose.bind(this)
                        });
                        this.firstTooltipObj.appendTo(this.firstHandle);
                        if (this.type === 'Range') {
                            this.secondTooltipObj = new Tooltip({
                                showTipPointer: false,
                                cssClass: classNames.sliderTooltip,
                                animation: { open: { effect: 'None' }, close: { effect: 'None' } },
                                opensOn: 'Custom',
                                beforeOpen: this.tooltipBeforeOpen.bind(this),
                                beforeCollision: this.checkTooltipPosition.bind(this),
                                afterClose: this.tooltipAfterClose.bind(this)
                            });
                            this.secondTooltipObj.appendTo(this.secondHandle);
                        }
                        this.tooltipPlacement();
                        this.firstHandle.style.transition = 'none';
                        if (this.type !== 'Default') {
                            this.rangeBar.style.transition = 'none';
                        }
                        if (this.type === 'Range') {
                            this.secondHandle.style.transition = 'none';
                        }
                        if (this.isMaterial) {
                            this.sliderContainer.classList.add(classNames.materialSlider);
                            this.tooltipValue();
                            this.firstTooltipObj.open(this.firstHandle);
                            if (this.type === 'Range') {
                                this.secondTooltipObj.open(this.secondHandle);
                            }
                        }
                    }
                }, {
                    key: 'tooltipAfterClose',
                    value: function tooltipAfterClose(args) {
                        if (args.element === this.firstTooltipElement) {
                            this.firstTooltipElement = undefined;
                        } else {
                            this.secondTooltipElement = undefined;
                        }
                    }
                }, {
                    key: 'setButtons',
                    value: function setButtons() {
                        this.firstBtn = createElement('div', { className: classNames.sliderButton + ' ' + classNames.firstButton });
                        this.firstBtn.appendChild(createElement('span', { className: classNames.sliderButtonIcon }));
                        this.firstBtn.tabIndex = -1;
                        this.secondBtn = createElement('div', { className: classNames.sliderButton + ' ' + classNames.secondButton });
                        this.secondBtn.appendChild(createElement('span', { className: classNames.sliderButtonIcon }));
                        this.secondBtn.tabIndex = -1;
                        this.sliderContainer.classList.add(classNames.sliderButtonClass);
                        this.sliderContainer.appendChild(this.firstBtn);
                        this.sliderContainer.appendChild(this.secondBtn);
                        this.sliderContainer.appendChild(this.element);
                        this.buttonTitle();
                    }
                }, {
                    key: 'buttonTitle',
                    value: function buttonTitle() {
                        var enabledRTL = this.enableRtl && this.orientation !== 'Vertical';
                        this.l10n.setLocale(this.locale);
                        var decrementTitle = this.l10n.getConstant('decrementTitle');
                        var incrementTitle = this.l10n.getConstant('incrementTitle');
                        attributes(enabledRTL ? this.secondBtn : this.firstBtn, { 'aria-label': decrementTitle, title: decrementTitle });
                        attributes(enabledRTL ? this.firstBtn : this.secondBtn, { 'aria-label': incrementTitle, title: incrementTitle });
                    }
                }, {
                    key: 'buttonFocusOut',
                    value: function buttonFocusOut() {
                        if (this.isMaterial) {
                            this.getHandle().style.transform = this.getHandle().style.transform.replace('scale(1.5)', 'scale(1)');
                        }
                    }
                }, {
                    key: 'repeatButton',
                    value: function repeatButton(args) {
                        var buttonElement = args.target.parentElement;
                        var tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
                        if (!tooltipElement && this.tooltip.isVisible) {
                            this.openTooltip();
                        }
                        var hVal = this.handleValueUpdate();
                        var enabledRTL = this.enableRtl && this.orientation !== 'Vertical';
                        var value = void 0;
                        if (args.target.parentElement.classList.contains(classNames.firstButton) || args.target.classList.contains(classNames.firstButton)) {
                            enabledRTL ? value = this.add(hVal, parseFloat(this.step.toString()), true) : value = this.add(hVal, parseFloat(this.step.toString()), false);
                        } else if (args.target.parentElement.classList.contains(classNames.secondButton) || args.target.classList.contains(classNames.secondButton)) {
                            enabledRTL ? value = this.add(hVal, parseFloat(this.step.toString()), false) : value = this.add(hVal, parseFloat(this.step.toString()), true);
                        }
                        if (value >= this.min && value <= this.max) {
                            this.changeHandleValue(value);
                            this.refreshTooltipOnMove();
                        }
                    }
                }, {
                    key: 'repeatHandlerMouse',
                    value: function repeatHandlerMouse(args) {
                        args.preventDefault();
                        if (args.type === 'mousedown' || args.type === 'touchstart') {
                            this.buttonClick(args);
                            this.repeatInterval = setInterval(this.repeatButton.bind(this), 180, args);
                        }
                    }
                }, {
                    key: 'materialChange',
                    value: function materialChange() {
                        if (this.getHandle().style.transform.indexOf('scale(1.5') === -1) {
                            this.getHandle().style.transform = 'scale(1.5)';
                        }
                    }
                }, {
                    key: 'repeatHandlerUp',
                    value: function repeatHandlerUp(e) {
                        this.changeEvent('changed');
                        if (this.tooltip.isVisible && this.tooltip.showOn !== 'Always' && !this.isMaterial) {
                            this.closeTooltip();
                        }
                        clearInterval(this.repeatInterval);
                        this.getHandle().focus();
                    }
                }, {
                    key: 'renderScale',
                    value: function renderScale() {
                        var orien = this.orientation === 'Vertical' ? 'v' : 'h';
                        this.noOfDecimals = this.numberOfDecimals(this.step);
                        this.ul = createElement('ul', {
                            className: classNames.scale + ' ' + 'e-' + orien + '-scale ' + classNames.tick + '-' + this.ticks.placement.toLowerCase(),
                            attrs: { role: 'presentation', tabIndex: '-1', 'aria-hidden': 'true' }
                        });
                        if (Browser.isAndroid && orien === 'h') {
                            this.ul.classList.add(classNames.sliderTickPosition);
                        }
                        var smallStep = this.ticks.smallStep;
                        if (!this.ticks.showSmallTicks) {
                            this.ticks.largeStep > 0 ? smallStep = this.ticks.largeStep : smallStep = parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min));
                        } else if (smallStep <= 0) {
                            smallStep = parseFloat(formatUnit(this.step));
                        }
                        var min = this.fractionalToInteger(this.min);
                        var max = this.fractionalToInteger(this.max);
                        var steps = this.fractionalToInteger(smallStep);
                        var count = Math.abs((max - min) / steps);
                        this.element.appendChild(this.ul);
                        var li = void 0;
                        var start = parseFloat(this.min.toString());
                        if (orien === 'v') {
                            start = parseFloat(this.max.toString());
                        }
                        var left = 0;
                        var tickWidth = 100 / count;
                        if (tickWidth === Infinity) {
                            tickWidth = 5;
                        }
                        for (var i = 0; i <= count; i++) {
                            li = createElement('li', {
                                attrs: {
                                    class: classNames.tick, title: start.toString(), role: 'presentation', tabIndex: '-1',
                                    'aria-hidden': 'true'
                                }
                            });
                            var islargeTick = void 0;
                            if (this.numberOfDecimals(this.max) === 0 && this.numberOfDecimals(this.min) === 0 && this.numberOfDecimals(this.step) === 0) {
                                if (orien === 'h') {
                                    islargeTick = (start - parseFloat(this.min.toString())) % this.ticks.largeStep === 0 ? true : false;
                                } else {
                                    islargeTick = Math.abs(start - parseFloat(this.max.toString())) % this.ticks.largeStep === 0 ? true : false;
                                }
                            } else {
                                var largestep = this.fractionalToInteger(this.ticks.largeStep);
                                var startValue = this.fractionalToInteger(start);
                                islargeTick = (startValue - min) % largestep === 0 ? true : false;
                            }
                            if (islargeTick) {
                                li.classList.add(classNames.large);
                            }
                            orien === 'h' ? li.style.width = tickWidth + '%' : li.style.height = tickWidth + '%';
                            var repeat = islargeTick ? this.ticks.placement === 'Both' ? 2 : 1 : 0;
                            if (islargeTick) {
                                for (var j = 0; j < repeat; j++) {
                                    this.createTick(li, start);
                                }
                            } else {
                                this.formatTicksValue(li, start);
                            }
                            this.ul.appendChild(li);
                            this.tickElementCollection.push(li);
                            var decimalPoints = void 0;
                            if (this.numberOfDecimals(smallStep) > this.numberOfDecimals(start)) {
                                decimalPoints = this.numberOfDecimals(smallStep);
                            } else {
                                decimalPoints = this.numberOfDecimals(start);
                            }
                            if (orien === 'h') {
                                start = this.makeRoundNumber(start + smallStep, decimalPoints);
                            } else {
                                start = this.makeRoundNumber(start - smallStep, decimalPoints);
                            }
                            left = this.makeRoundNumber(left + smallStep, decimalPoints);
                        }
                        this.firstChild = this.ul.firstElementChild;
                        this.lastChild = this.ul.lastElementChild;
                        this.firstChild.classList.add(classNames.sliderFirstTick);
                        this.lastChild.classList.add(classNames.sliderLastTick);
                        this.sliderContainer.classList.add(classNames.scale + '-' + this.ticks.placement.toLowerCase());
                        if (orien === 'h') {
                            this.firstChild.style.width = tickWidth / 2 + '%';
                            this.lastChild.style.width = tickWidth / 2 + '%';
                        } else {
                            this.firstChild.style.height = tickWidth / 2 + '%';
                            this.lastChild.style.height = tickWidth / 2 + '%';
                        }
                        var eventArgs = { ticksWrapper: this.ul, tickElements: this.tickElementCollection };
                        this.trigger('renderedTicks', eventArgs);
                        this.scaleAlignment();
                    }
                }, {
                    key: 'createTick',
                    value: function createTick(li, start) {
                        var span = createElement('span', {
                            className: classNames.tickValue + ' ' + classNames.tick + '-' + this.ticks.placement.toLowerCase(),
                            attrs: { role: 'presentation', tabIndex: '-1', 'aria-hidden': 'true' }
                        });
                        li.appendChild(span);
                        span.innerHTML = this.formatTicksValue(li, start);
                    }
                }, {
                    key: 'formatTicksValue',
                    value: function formatTicksValue(li, start) {
                        var tickText = this.formatNumber(start);
                        var text = !isNullOrUndefined(this.ticks) && !isNullOrUndefined(this.ticks.format) ? this.formatString(start, this.ticksFormatInfo).formatString : tickText;
                        var eventArgs = { value: start, text: text, tickElement: li };
                        this.trigger('renderingTicks', eventArgs);
                        li.setAttribute('title', eventArgs.text.toString());
                        return eventArgs.text.toString();
                    }
                }, {
                    key: 'scaleAlignment',
                    value: function scaleAlignment() {
                        this.tickValuePosition();
                        var orien = this.orientation === 'Vertical' ? 'v' : 'h';
                        if (this.orientation === 'Vertical') {
                            this.element.getBoundingClientRect().width <= 15 ? this.sliderContainer.classList.add(classNames.sliderSmallSize) : this.sliderContainer.classList.remove(classNames.sliderSmallSize);
                        } else {
                            this.element.getBoundingClientRect().height <= 15 ? this.sliderContainer.classList.add(classNames.sliderSmallSize) : this.sliderContainer.classList.remove(classNames.sliderSmallSize);
                        }
                    }
                }, {
                    key: 'tickValuePosition',
                    value: function tickValuePosition() {
                        var first = this.firstChild.getBoundingClientRect();
                        var firstChild = void 0;
                        var smallStep = this.ticks.smallStep;
                        var count = Math.abs(parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min))) / smallStep;
                        if (this.firstChild.children.length > 0) {
                            firstChild = this.firstChild.children[0].getBoundingClientRect();
                        }
                        var tickElements = [this.sliderContainer.querySelectorAll('.' + classNames.tick + '.' + classNames.large + ' .' + classNames.tickValue)];
                        var other = void 0;
                        if (this.ticks.placement === 'Both') {
                            other = [].slice.call(tickElements[0], 2);
                        } else {
                            other = [].slice.call(tickElements[0], 1);
                        }
                        var tickWidth = this.orientation === 'Vertical' ? first.height * 2 : first.width * 2;
                        for (var i = 0; i < this.firstChild.children.length; i++) {
                            if (this.orientation === 'Vertical') {
                                this.firstChild.children[i].style.top = -(firstChild.height / 2) + 'px';
                            } else {
                                if (!this.enableRtl) {
                                    this.firstChild.children[i].style.left = -(firstChild.width / 2) + 'px';
                                } else {
                                    this.firstChild.children[i].style.left = (tickWidth - this.firstChild.children[i].getBoundingClientRect().width) / 2 + 'px';
                                }
                            }
                        }
                        for (var _i5 = 0; _i5 < other.length; _i5++) {
                            var otherChild = other[_i5].getBoundingClientRect();
                            if (this.orientation === 'Vertical') {
                                setStyleAttribute(other[_i5], { top: (tickWidth - otherChild.height) / 2 + 'px' });
                            } else {
                                setStyleAttribute(other[_i5], { left: (tickWidth - otherChild.width) / 2 + 'px' });
                            }
                        }
                        if (this.enableRtl && this.lastChild.children.length && count !== 0) {
                            this.lastChild.children[0].style.left = -(this.lastChild.getBoundingClientRect().width / 2) + 'px';
                            if (this.ticks.placement === 'Both') {
                                this.lastChild.children[1].style.left = -(this.lastChild.getBoundingClientRect().width / 2) + 'px';
                            }
                        }
                        if (count === 0) {
                            if (this.orientation === 'Horizontal') {
                                if (!this.enableRtl) {
                                    this.firstChild.classList.remove(classNames.sliderLastTick);
                                    this.firstChild.style.left = this.firstHandle.style.left;
                                } else {
                                    this.firstChild.classList.remove(classNames.sliderLastTick);
                                    this.firstChild.style.right = this.firstHandle.style.right;
                                    this.firstChild.children[0].style.left = this.firstChild.getBoundingClientRect().width / 2 + 2 + 'px';
                                    if (this.ticks.placement === 'Both') {
                                        this.firstChild.children[1].style.left = this.firstChild.getBoundingClientRect().width / 2 + 2 + 'px';
                                    }
                                }
                            }
                            if (this.orientation === 'Vertical') {
                                this.firstChild.classList.remove(classNames.sliderLastTick);
                            }
                        }
                    }
                }, {
                    key: 'setAriaAttrValue',
                    value: function setAriaAttrValue(element) {
                        var ariaValueText = void 0;
                        var isTickFormatted = !isNullOrUndefined(this.ticks) && !isNullOrUndefined(this.ticks.format) ? true : false;
                        var text = !isTickFormatted ? this.formatContent(this.ticksFormatInfo, false) : this.formatContent(this.tooltipFormatInfo, false);
                        var valuenow = isTickFormatted ? this.formatContent(this.ticksFormatInfo, true) : this.formatContent(this.tooltipFormatInfo, true);
                        text = !this.customAriaText ? text : this.customAriaText;
                        if (text.split(' - ').length === 2) {
                            ariaValueText = text.split(' - ');
                        } else {
                            ariaValueText = [text, text];
                        }
                        this.setAriaAttributes(element);
                        if (this.type !== 'Range') {
                            attributes(element, { 'aria-valuenow': valuenow, 'aria-valuetext': text });
                        } else {
                            !this.enableRtl ? element === this.firstHandle ? attributes(element, { 'aria-valuenow': valuenow.split(' - ')[0], 'aria-valuetext': ariaValueText[0] }) : attributes(element, { 'aria-valuenow': valuenow.split(' - ')[1], 'aria-valuetext': ariaValueText[1] }) : element === this.firstHandle ? attributes(element, { 'aria-valuenow': valuenow.split(' - ')[1], 'aria-valuetext': ariaValueText[1] }) : attributes(element, { 'aria-valuenow': valuenow.split(' - ')[0], 'aria-valuetext': ariaValueText[0] });
                        }
                    }
                }, {
                    key: 'handleValueUpdate',
                    value: function handleValueUpdate() {
                        var hVal = void 0;
                        if (this.type === 'Range') {
                            if (this.activeHandle === 1) {
                                hVal = this.handleVal1;
                            } else {
                                hVal = this.handleVal2;
                            }
                        } else {
                            hVal = this.handleVal1;
                        }
                        return hVal;
                    }
                }, {
                    key: 'buttonClick',
                    value: function buttonClick(args) {
                        var value = void 0;
                        var enabledRTL = this.enableRtl && this.orientation !== 'Vertical';
                        var hVal = this.handleValueUpdate();
                        if (args.keyCode === 40 || args.keyCode === 37 || args.currentTarget.classList.contains(classNames.firstButton)) {
                            enabledRTL ? value = this.add(hVal, parseFloat(this.step.toString()), true) : value = this.add(hVal, parseFloat(this.step.toString()), false);
                        } else if (args.keyCode === 38 || args.keyCode === 39 || args.currentTarget.classList.contains(classNames.secondButton)) {
                            enabledRTL ? value = this.add(hVal, parseFloat(this.step.toString()), false) : value = this.add(hVal, parseFloat(this.step.toString()), true);
                        } else if (args.keyCode === 33 || args.currentTarget.classList.contains(classNames.firstButton)) {
                            enabledRTL ? value = this.add(hVal, parseFloat(this.ticks.largeStep.toString()), false) : value = this.add(hVal, parseFloat(this.ticks.largeStep.toString()), true);
                        } else if (args.keyCode === 34 || args.currentTarget.classList.contains(classNames.secondButton)) {
                            enabledRTL ? value = this.add(hVal, parseFloat(this.ticks.largeStep.toString()), true) : value = this.add(hVal, parseFloat(this.ticks.largeStep.toString()), false);
                        } else if (args.keyCode === 36) {
                            value = parseFloat(this.min.toString());
                        } else if (args.keyCode === 35) {
                            value = parseFloat(this.max.toString());
                        }
                        this.changeHandleValue(value);
                        if (this.isMaterial && !this.tooltip.isVisible && !this.getHandle().classList.contains(classNames.sliderTabHandle)) {
                            this.materialChange();
                        }
                        this.tooltipAnimation();
                        this.getHandle().focus();
                        if (args.currentTarget.classList.contains(classNames.firstButton)) {
                            EventHandler.add(this.firstBtn, 'mouseup touchend', this.buttonUp, this);
                        }
                        if (args.currentTarget.classList.contains(classNames.secondButton)) {
                            EventHandler.add(this.secondBtn, 'mouseup touchend', this.buttonUp, this);
                        }
                    }
                }, {
                    key: 'tooltipAnimation',
                    value: function tooltipAnimation() {
                        if (this.tooltip.isVisible) {
                            var tooltipObj = this.activeHandle === 1 ? this.firstTooltipObj : this.secondTooltipObj;
                            var tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
                            if (this.isMaterial) {
                                !tooltipElement.classList.contains(classNames.materialTooltipOpen) ? this.openMaterialTooltip() : this.refreshTooltip();
                            } else {
                                tooltipObj.animation = { open: { effect: 'None' }, close: { effect: 'FadeOut', duration: 500 } };
                                this.openTooltip();
                            }
                        }
                    }
                }, {
                    key: 'buttonUp',
                    value: function buttonUp(args) {
                        if (this.tooltip.isVisible) {
                            if (!this.isMaterial) {
                                var tooltipObj = this.activeHandle === 1 ? this.firstTooltipObj : this.secondTooltipObj;
                                tooltipObj.animation = { open: { effect: 'None' }, close: { effect: 'None' } };
                            }
                        }
                        if (args.currentTarget.classList.contains(classNames.firstButton)) {
                            EventHandler.remove(this.firstBtn, 'mouseup touchend', this.buttonUp);
                        }
                        if (args.currentTarget.classList.contains(classNames.secondButton)) {
                            EventHandler.remove(this.secondBtn, 'mouseup touchend', this.buttonUp);
                        }
                    }
                }, {
                    key: 'setRangeBar',
                    value: function setRangeBar() {
                        if (this.orientation === 'Horizontal') {
                            if (this.type === 'MinRange') {
                                this.enableRtl ? this.rangeBar.style.right = '0px' : this.rangeBar.style.left = '0px';
                                setStyleAttribute(this.rangeBar, { 'width': isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + 'px' });
                            } else {
                                this.enableRtl ? this.rangeBar.style.right = this.handlePos1 + 'px' : this.rangeBar.style.left = this.handlePos1 + 'px';
                                setStyleAttribute(this.rangeBar, { 'width': this.handlePos2 - this.handlePos1 + 'px' });
                            }
                        } else {
                            if (this.type === 'MinRange') {
                                this.rangeBar.style.bottom = '0px';
                                setStyleAttribute(this.rangeBar, { 'height': isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + 'px' });
                            } else {
                                this.rangeBar.style.bottom = this.handlePos1 + 'px';
                                setStyleAttribute(this.rangeBar, { 'height': this.handlePos2 - this.handlePos1 + 'px' });
                            }
                        }
                    }
                }, {
                    key: 'setValue',
                    value: function setValue() {
                        this.handleVal1 = isNullOrUndefined(this.value) ? this.checkHandleValue(parseFloat(this.min.toString())) : this.checkHandleValue(parseFloat(this.value.toString()));
                        this.handlePos1 = this.checkHandlePosition(this.handleVal1);
                        this.preHandlePos1 = this.handlePos1;
                        isNullOrUndefined(this.activeHandle) ? this.type === 'Range' ? this.activeHandle = 2 : this.activeHandle = 1 : this.activeHandle = this.activeHandle;
                        if (this.type === 'Default' || this.type === 'MinRange') {
                            this.setHandlePosition();
                            this.handleStart();
                            this.value = this.handleVal1;
                            this.setAriaAttrValue(this.firstHandle);
                            this.changeEvent('changed');
                        } else {
                            this.validateRangeValue();
                        }
                        if (this.type !== 'Default') {
                            this.setRangeBar();
                        }
                    }
                }, {
                    key: 'rangeValueUpdate',
                    value: function rangeValueUpdate() {
                        if (this.value === null || _typeof(this.value) !== 'object') {
                            this.value = [parseFloat(formatUnit(this.min)), parseFloat(formatUnit(this.max))];
                        }
                    }
                }, {
                    key: 'validateRangeValue',
                    value: function validateRangeValue() {
                        this.rangeValueUpdate();
                        this.setRangeValue();
                    }
                }, {
                    key: 'modifyZindex',
                    value: function modifyZindex() {
                        if (this.type === 'Range') {
                            if (this.activeHandle === 1) {
                                this.firstHandle.style.zIndex = this.zIndex + 4 + '';
                                this.secondHandle.style.zIndex = this.zIndex + 3 + '';
                                if (this.isMaterial && this.tooltip.isVisible && this.firstTooltipElement && this.secondTooltipElement) {
                                    this.firstTooltipElement.style.zIndex = this.zIndex + 4 + '';
                                    this.secondTooltipElement.style.zIndex = this.zIndex + 3 + '';
                                }
                            } else {
                                this.firstHandle.style.zIndex = this.zIndex + 3 + '';
                                this.secondHandle.style.zIndex = this.zIndex + 4 + '';
                                if (this.isMaterial && this.tooltip.isVisible && this.firstTooltipElement && this.secondTooltipElement) {
                                    this.firstTooltipElement.style.zIndex = this.zIndex + 3 + '';
                                    this.secondTooltipElement.style.zIndex = this.zIndex + 4 + '';
                                }
                            }
                        } else if (this.isMaterial && this.tooltip.isVisible && this.firstTooltipElement) {
                            this.firstTooltipElement.style.zIndex = this.zIndex + 4 + '';
                        }
                    }
                }, {
                    key: 'setHandlePosition',
                    value: function setHandlePosition() {
                        var _this17 = this;

                        var pos = this.activeHandle === 1 ? this.handlePos1 : this.handlePos2;
                        var val = this.activeHandle === 1 ? this.handleVal1 : this.handleVal2;
                        var handle = void 0;
                        var tooltipElement = void 0;
                        if (this.isMaterial && this.tooltip.isVisible) {
                            tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
                            handle = [this.getHandle(), this.activeHandle === 1 ? this.firstMaterialHandle : this.secondMaterialHandle];
                        } else {
                            handle = [this.getHandle()];
                        }
                        if (this.tooltip.isVisible && pos === 0 && this.type !== 'Range') {
                            handle[0].classList.add(classNames.sliderHandleStart);
                            if (this.isMaterial) {
                                handle[1].classList.add(classNames.sliderHandleStart);
                                if (tooltipElement) {
                                    tooltipElement.classList.add(classNames.sliderTooltipStart);
                                }
                            }
                        } else {
                            handle[0].classList.remove(classNames.sliderHandleStart);
                            if (this.tooltip.isVisible && this.isMaterial) {
                                handle[1].classList.remove(classNames.sliderHandleStart);
                                if (tooltipElement) {
                                    tooltipElement.classList.remove(classNames.sliderTooltipStart);
                                }
                            }
                        }
                        handle.forEach(function (handle) {
                            if (_this17.orientation === 'Horizontal') {
                                _this17.enableRtl ? handle.style.right = pos + 'px' : handle.style.left = pos + 'px';
                            } else {
                                handle.style.bottom = pos + 'px';
                            }
                        });
                        this.changeEvent('change');
                    }
                }, {
                    key: 'getHandle',
                    value: function getHandle() {
                        return this.activeHandle === 1 ? this.firstHandle : this.secondHandle;
                    }
                }, {
                    key: 'setRangeValue',
                    value: function setRangeValue() {
                        var temp = this.activeHandle;
                        this.updateRangeValue();
                        this.activeHandle = 1;
                        this.setHandlePosition();
                        this.activeHandle = 2;
                        this.setHandlePosition();
                        this.activeHandle = 1;
                    }
                }, {
                    key: 'changeEvent',
                    value: function changeEvent(eventName) {
                        var previous = eventName === 'change' ? this.previousVal : this.previousChanged;
                        if (this.type !== 'Range') {
                            this.setProperties({ 'value': this.handleVal1 }, true);
                            if (previous !== this.value) {
                                this.trigger(eventName, this.changeEventArgs(eventName));
                                this.setPreviousVal(eventName, this.value);
                            }
                            this.setAriaAttrValue(this.firstHandle);
                        } else {
                            var value = this.value = [this.handleVal1, this.handleVal2];
                            this.setProperties({ 'value': value }, true);
                            if (previous.length === this.value.length && this.value[0] !== previous[0] || this.value[1] !== previous[1]) {
                                this.trigger(eventName, this.changeEventArgs(eventName));
                                this.setPreviousVal(eventName, this.value);
                            }
                            this.setAriaAttrValue(this.getHandle());
                        }
                        this.hiddenInput.value = this.value.toString();
                    }
                }, {
                    key: 'changeEventArgs',
                    value: function changeEventArgs(eventName) {
                        var eventArgs = void 0;
                        if (this.tooltip.isVisible && this.firstTooltipObj) {
                            this.tooltipValue();
                            eventArgs = {
                                value: this.value,
                                previousValue: eventName === 'change' ? this.previousVal : this.previousChanged,
                                action: eventName, text: this.firstTooltipObj.content
                            };
                        } else {
                            eventArgs = {
                                value: this.value,
                                previousValue: eventName === 'change' ? this.previousVal : this.previousChanged,
                                action: eventName, text: isNullOrUndefined(this.ticksFormatInfo.format) ? this.value.toString() : this.type !== 'Range' ? this.formatString(this.value, this.ticksFormatInfo).formatString : this.formatString(this.value[0], this.ticksFormatInfo).formatString + ' - ' + this.formatString(this.value[1], this.ticksFormatInfo).formatString
                            };
                        }
                        return eventArgs;
                    }
                }, {
                    key: 'setPreviousVal',
                    value: function setPreviousVal(eventName, value) {
                        if (eventName === 'change') {
                            this.previousVal = value;
                        } else {
                            this.previousChanged = value;
                        }
                    }
                }, {
                    key: 'updateRangeValue',
                    value: function updateRangeValue() {
                        var values = this.value.toString().split(',').map(Number);
                        if (this.enableRtl && this.orientation !== 'Vertical' || this.rtl) {
                            this.value = [values[1], values[0]];
                        } else {
                            this.value = [values[0], values[1]];
                        }
                        if (this.enableRtl && this.orientation !== 'Vertical') {
                            this.handleVal1 = this.checkHandleValue(this.value[1]);
                            this.handleVal2 = this.checkHandleValue(this.value[0]);
                        } else {
                            this.handleVal1 = this.checkHandleValue(this.value[0]);
                            this.handleVal2 = this.checkHandleValue(this.value[1]);
                        }
                        this.handlePos1 = this.checkHandlePosition(this.handleVal1);
                        this.handlePos2 = this.checkHandlePosition(this.handleVal2);
                        if (this.handlePos1 > this.handlePos2) {
                            this.handlePos1 = this.handlePos2;
                            this.handleVal1 = this.handleVal2;
                        }
                        this.preHandlePos1 = this.handlePos1;
                        this.preHandlePos2 = this.handlePos2;
                    }
                }, {
                    key: 'checkHandlePosition',
                    value: function checkHandlePosition(value) {
                        var pos = void 0;
                        value = 100 * (value - parseFloat(formatUnit(this.min))) / (parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min)));
                        if (this.orientation === 'Horizontal') {
                            pos = this.element.getBoundingClientRect().width * (value / 100);
                        } else {
                            pos = this.element.getBoundingClientRect().height * (value / 100);
                        }
                        if (parseFloat(formatUnit(this.max)) === parseFloat(formatUnit(this.min))) {
                            if (this.orientation === 'Horizontal') {
                                pos = this.element.getBoundingClientRect().width;
                            } else {
                                pos = this.element.getBoundingClientRect().height;
                            }
                        }
                        return pos;
                    }
                }, {
                    key: 'checkHandleValue',
                    value: function checkHandleValue(value) {
                        if (this.min > this.max) {
                            this.min = this.max;
                        }
                        if (this.min === this.max) {
                            return parseFloat(formatUnit(this.max));
                        }
                        var handle = this.tempStartEnd();
                        if (value < handle.start) {
                            value = handle.start;
                        } else if (value > handle.end) {
                            value = handle.end;
                        }
                        return value;
                    }
                }, {
                    key: 'onResize',
                    value: function onResize() {
                        var _this18 = this;

                        this.firstHandle.style.transition = 'none';
                        if (this.type !== 'Default') {
                            this.rangeBar.style.transition = 'none';
                        }
                        if (this.type === 'Range') {
                            this.secondHandle.style.transition = 'none';
                        }
                        this.handlePos1 = this.checkHandlePosition(this.handleVal1);
                        if (this.handleVal2) {
                            this.handlePos2 = this.checkHandlePosition(this.handleVal2);
                        }
                        if (this.orientation === 'Horizontal') {
                            this.enableRtl ? this.firstHandle.style.right = this.handlePos1 + 'px' : this.firstHandle.style.left = this.handlePos1 + 'px';
                            if (this.isMaterial && this.tooltip.isVisible && this.firstMaterialHandle) {
                                this.enableRtl ? this.firstMaterialHandle.style.right = this.handlePos1 + 'px' : this.firstMaterialHandle.style.left = this.handlePos1 + 'px';
                            }
                            if (this.type === 'MinRange') {
                                this.enableRtl ? this.rangeBar.style.right = '0px' : this.rangeBar.style.left = '0px';
                                setStyleAttribute(this.rangeBar, { 'width': isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + 'px' });
                            } else if (this.type === 'Range') {
                                this.enableRtl ? this.secondHandle.style.right = this.handlePos2 + 'px' : this.secondHandle.style.left = this.handlePos2 + 'px';
                                if (this.isMaterial && this.tooltip.isVisible && this.secondMaterialHandle) {
                                    this.enableRtl ? this.secondMaterialHandle.style.right = this.handlePos2 + 'px' : this.secondMaterialHandle.style.left = this.handlePos2 + 'px';
                                }
                                this.enableRtl ? this.rangeBar.style.right = this.handlePos1 + 'px' : this.rangeBar.style.left = this.handlePos1 + 'px';
                                setStyleAttribute(this.rangeBar, { 'width': this.handlePos2 - this.handlePos1 + 'px' });
                            }
                        } else {
                            this.firstHandle.style.bottom = this.handlePos1 + 'px';
                            if (this.isMaterial && this.tooltip.isVisible && this.firstMaterialHandle) {
                                this.firstMaterialHandle.style.bottom = this.handlePos1 + 'px';
                            }
                            if (this.type === 'MinRange') {
                                this.rangeBar.style.bottom = '0px';
                                setStyleAttribute(this.rangeBar, { 'height': isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + 'px' });
                            } else if (this.type === 'Range') {
                                this.secondHandle.style.bottom = this.handlePos2 + 'px';
                                if (this.isMaterial && this.tooltip.isVisible && this.secondMaterialHandle) {
                                    this.secondMaterialHandle.style.bottom = this.handlePos2 + 'px';
                                }
                                this.rangeBar.style.bottom = this.handlePos1 + 'px';
                                setStyleAttribute(this.rangeBar, { 'height': this.handlePos2 - this.handlePos1 + 'px' });
                            }
                        }
                        if (this.ticks.placement !== 'None' && this.ul) {
                            this.removeElement(this.ul);
                            this.renderScale();
                        }
                        if (!this.tooltip.isVisible) {
                            setTimeout(function () {
                                _this18.firstHandle.style.transition = _this18.scaleTransform;
                                if (_this18.type === 'Range') {
                                    _this18.secondHandle.style.transition = _this18.scaleTransform;
                                }
                            });
                        }
                        this.refreshTooltip();
                    }
                }, {
                    key: 'changeHandleValue',
                    value: function changeHandleValue(value) {
                        var position = null;
                        if (this.activeHandle === 1) {
                            this.handleVal1 = this.checkHandleValue(value);
                            this.handlePos1 = this.checkHandlePosition(this.handleVal1);
                            if (this.type === 'Range' && this.handlePos1 > this.handlePos2) {
                                this.handlePos1 = this.handlePos2;
                                this.handleVal1 = this.handleVal2;
                            }
                            if (this.handlePos1 !== this.preHandlePos1) {
                                position = this.preHandlePos1 = this.handlePos1;
                            }
                            this.modifyZindex();
                        } else {
                            this.handleVal2 = this.checkHandleValue(value);
                            this.handlePos2 = this.checkHandlePosition(this.handleVal2);
                            if (this.type === 'Range' && this.handlePos2 < this.handlePos1) {
                                this.handlePos2 = this.handlePos1;
                                this.handleVal2 = this.handleVal1;
                            }
                            if (this.handlePos2 !== this.preHandlePos2) {
                                position = this.preHandlePos2 = this.handlePos2;
                            }
                            this.modifyZindex();
                        }
                        if (position !== null) {
                            if (this.type !== 'Default') {
                                this.setRangeBar();
                            }
                            this.setHandlePosition();
                        }
                    }
                }, {
                    key: 'tempStartEnd',
                    value: function tempStartEnd() {
                        if (this.min > this.max) {
                            return {
                                start: this.max,
                                end: this.min
                            };
                        } else {
                            return {
                                start: this.min,
                                end: this.max
                            };
                        }
                    }
                }, {
                    key: 'xyToPosition',
                    value: function xyToPosition(position) {
                        var pos = void 0;
                        if (this.min === this.max) {
                            return 100;
                        }
                        if (this.orientation === 'Horizontal') {
                            var left = position.x - this.element.getBoundingClientRect().left;
                            var num = this.element.offsetWidth / 100;
                            this.val = left / num;
                        } else {
                            var top = position.y - this.element.getBoundingClientRect().top;
                            var _num = this.element.offsetHeight / 100;
                            this.val = 100 - top / _num;
                        }
                        var val = this.stepValueCalculation(this.val);
                        if (val < 0) {
                            val = 0;
                        } else if (val > 100) {
                            val = 100;
                        }
                        if (this.enableRtl && this.orientation !== 'Vertical') {
                            val = 100 - val;
                        }
                        if (this.orientation === 'Horizontal') {
                            pos = this.element.getBoundingClientRect().width * (val / 100);
                        } else {
                            pos = this.element.getBoundingClientRect().height * (val / 100);
                        }
                        return pos;
                    }
                }, {
                    key: 'stepValueCalculation',
                    value: function stepValueCalculation(value) {
                        if (this.step === 0) {
                            this.step = 1;
                        }
                        var percentStep = parseFloat(formatUnit(this.step)) / ((parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min))) / 100);
                        var remain = value % Math.abs(percentStep);
                        if (remain !== 0) {
                            if (percentStep / 2 > remain) {
                                value -= remain;
                            } else {
                                value += Math.abs(percentStep) - remain;
                            }
                        }
                        return value;
                    }
                }, {
                    key: 'add',
                    value: function add(a, b, addition) {
                        var precision = void 0;
                        var x = Math.pow(10, precision || 3);
                        var val = void 0;
                        if (addition) {
                            val = (Math.round(a * x) + Math.round(b * x)) / x;
                        } else {
                            val = (Math.round(a * x) - Math.round(b * x)) / x;
                        }
                        return val;
                    }
                }, {
                    key: 'round',
                    value: function round(a) {
                        var f = this.step.toString().split('.');
                        return f[1] ? parseFloat(a.toFixed(f[1].length)) : Math.round(a);
                    }
                }, {
                    key: 'positionToValue',
                    value: function positionToValue(pos) {
                        var val = void 0;
                        var diff = parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min));
                        if (this.orientation === 'Horizontal') {
                            val = pos / this.element.getBoundingClientRect().width * diff;
                        } else {
                            val = pos / this.element.getBoundingClientRect().height * diff;
                        }
                        var total = this.add(val, parseFloat(this.min.toString()), true);
                        return total;
                    }
                }, {
                    key: 'sliderBarClick',
                    value: function sliderBarClick(evt) {
                        evt.preventDefault();
                        var pos = void 0;
                        if (evt.type === 'mousedown' || evt.type === 'click') {
                            pos = { x: evt.clientX, y: evt.clientY };
                        } else if (evt.type === 'touchstart') {
                            pos = { x: evt.changedTouches[0].clientX, y: evt.changedTouches[0].clientY };
                        }
                        var handlepos = this.xyToPosition(pos);
                        var handleVal = this.positionToValue(handlepos);
                        if (this.type !== 'Range') {
                            this.handleVal1 = handleVal;
                            this.firstHandle.classList.add(classNames.sliderActiveHandle);
                        }
                        if (this.type === 'Range' && this.handlePos2 - handlepos < handlepos - this.handlePos1) {
                            this.secondHandle.classList.add(classNames.sliderActiveHandle);
                            this.handlePos2 = this.preHandlePos2 = handlepos;
                            this.handleVal2 = handleVal;
                            this.activeHandle = 2;
                            this.modifyZindex();
                            this.secondHandle.focus();
                        } else {
                            this.firstHandle.classList.add(classNames.sliderActiveHandle);
                            this.handlePos1 = this.preHandlePos1 = handlepos;
                            this.handleVal1 = handleVal;
                            this.activeHandle = 1;
                            this.modifyZindex();
                            this.firstHandle.focus();
                        }
                        if (this.isMaterial && this.tooltip.isVisible) {
                            var tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
                            tooltipElement.classList.add(classNames.materialTooltipActive);
                        }
                        var focusedElement = this.element.querySelector('.' + classNames.sliderTabHandle);
                        if (focusedElement && this.getHandle() !== focusedElement) {
                            focusedElement.classList.remove(classNames.sliderTabHandle);
                        }
                        var handle = this.activeHandle === 1 ? this.firstHandle : this.secondHandle;
                        if (evt.target === handle) {
                            if (this.isMaterial && !this.tooltip.isVisible && !this.getHandle().classList.contains(classNames.sliderTabHandle)) {
                                this.materialChange();
                            }
                            this.tooltipAnimation();
                            return;
                        }
                        if (!this.checkRepeatedValue(handleVal)) {
                            return;
                        }
                        var transition = this.isMaterial && this.tooltip.isVisible ? this.transitionOnMaterialTooltip : this.transition;
                        this.getHandle().style.transition = transition.handle;
                        if (this.type !== 'Default') {
                            this.rangeBar.style.transition = transition.rangeBar;
                        }
                        this.setHandlePosition();
                        if (this.type !== 'Default') {
                            this.setRangeBar();
                        }
                    }
                }, {
                    key: 'refreshTooltipOnMove',
                    value: function refreshTooltipOnMove() {
                        if (this.tooltip.isVisible) {
                            this.tooltipValue();
                            this.activeHandle === 1 ? this.firstTooltipObj.refresh(this.firstHandle) : this.secondTooltipObj.refresh(this.secondHandle);
                        }
                    }
                }, {
                    key: 'sliderDown',
                    value: function sliderDown(event) {
                        event.preventDefault();
                        this.sliderBarClick(event);
                        EventHandler.add(document, 'mousemove touchmove', this.sliderBarMove, this);
                        EventHandler.add(document, 'mouseup touchend', this.sliderBarUp, this);
                    }
                }, {
                    key: 'sliderBarUp',
                    value: function sliderBarUp() {
                        this.changeEvent('changed');
                        this.handleFocusOut();
                        this.firstHandle.classList.remove(classNames.sliderActiveHandle);
                        if (this.type === 'Range') {
                            this.secondHandle.classList.remove(classNames.sliderActiveHandle);
                        }
                        if (this.tooltip.isVisible) {
                            if (this.tooltip.showOn !== 'Always') {
                                this.closeTooltip();
                            }
                            if (!this.isMaterial) {
                                var tooltipObj = this.activeHandle === 1 ? this.firstTooltipObj : this.secondTooltipObj;
                                tooltipObj.animation = { open: { effect: 'None' }, close: { effect: 'None' } };
                            }
                        }
                        if (this.isMaterial) {
                            this.getHandle().style.transform = this.getHandle().style.transform.replace('scale(1.5)', 'scale(1)');
                            if (this.tooltip.isVisible) {
                                var tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
                                tooltipElement.classList.remove(classNames.materialTooltipActive);
                            }
                        }
                        EventHandler.remove(document, 'mousemove touchmove', this.sliderBarMove);
                        EventHandler.remove(document, 'mouseup touchend', this.sliderBarUp);
                    }
                }, {
                    key: 'sliderBarMove',
                    value: function sliderBarMove(evt) {
                        if (evt.type !== 'touchmove') {
                            evt.preventDefault();
                        }
                        var pos = void 0;
                        if (evt.type === 'mousemove') {
                            pos = { x: evt.clientX, y: evt.clientY };
                        } else {
                            pos = { x: evt.changedTouches[0].clientX, y: evt.changedTouches[0].clientY };
                        }
                        var handlepos = this.xyToPosition(pos);
                        var handleVal = this.positionToValue(handlepos);
                        handlepos = Math.round(handlepos);
                        if (this.type !== 'Range' && this.activeHandle === 1) {
                            this.handlePos1 = handlepos;
                            this.handleVal1 = handleVal;
                            this.firstHandle.classList.add(classNames.sliderActiveHandle);
                        }
                        if (this.type === 'Range') {
                            if (this.activeHandle === 1) {
                                this.firstHandle.classList.add(classNames.sliderActiveHandle);
                                if (handlepos > this.handlePos2) {
                                    handlepos = this.handlePos2;
                                    handleVal = this.handleVal2;
                                }
                                if (handlepos !== this.preHandlePos1) {
                                    this.handlePos1 = this.preHandlePos1 = handlepos;
                                    this.handleVal1 = handleVal;
                                    this.activeHandle = 1;
                                }
                            } else if (this.activeHandle === 2) {
                                this.secondHandle.classList.add(classNames.sliderActiveHandle);
                                if (handlepos < this.handlePos1) {
                                    handlepos = this.handlePos1;
                                    handleVal = this.handleVal1;
                                }
                                if (handlepos !== this.preHandlePos2) {
                                    this.handlePos2 = this.preHandlePos2 = handlepos;
                                    this.handleVal2 = handleVal;
                                    this.activeHandle = 2;
                                }
                            }
                        }
                        if (!this.checkRepeatedValue(handleVal)) {
                            return;
                        }
                        this.getHandle().style.transition = this.scaleTransform;
                        if (this.type !== 'Default') {
                            this.rangeBar.style.transition = 'none';
                        }
                        this.setHandlePosition();
                        if (this.isMaterial && !this.tooltip.isVisible && !this.getHandle().classList.contains(classNames.sliderTabHandle)) {
                            this.materialChange();
                        }
                        var tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
                        if (this.tooltip.isVisible) {
                            if (this.isMaterial) {
                                !tooltipElement.classList.contains(classNames.materialTooltipOpen) ? this.openMaterialTooltip() : this.refreshTooltipOnMove();
                            } else {
                                !tooltipElement ? this.openTooltip() : this.refreshTooltipOnMove();
                            }
                        }
                        if (this.type !== 'Default') {
                            this.setRangeBar();
                        }
                    }
                }, {
                    key: 'checkRepeatedValue',
                    value: function checkRepeatedValue(currentValue) {
                        if (this.type === 'Range') {
                            var previousVal = this.enableRtl && this.orientation !== 'Vertical' ? this.activeHandle === 1 ? this.previousVal[1] : this.previousVal[0] : this.activeHandle === 1 ? this.previousVal[0] : this.previousVal[1];
                            if (currentValue === previousVal) {
                                return 0;
                            }
                        } else {
                            if (currentValue === this.previousVal) {
                                return 0;
                            }
                        }
                        return 1;
                    }
                }, {
                    key: 'refreshTooltip',
                    value: function refreshTooltip() {
                        if (this.tooltip.isVisible && this.firstTooltipObj) {
                            this.tooltipValue();
                            this.firstTooltipObj.refresh(this.firstHandle);
                            if (this.type === 'Range') {
                                this.secondTooltipObj.refresh(this.secondHandle);
                            }
                        }
                    }
                }, {
                    key: 'openTooltip',
                    value: function openTooltip() {
                        if (this.tooltip.isVisible && this.firstTooltipObj) {
                            this.tooltipValue();
                            if (this.isMaterial) {
                                this.openMaterialTooltip();
                            } else {
                                if (this.activeHandle === 1) {
                                    this.firstTooltipObj.open(this.firstHandle);
                                } else {
                                    this.secondTooltipObj.open(this.secondHandle);
                                }
                            }
                        }
                    }
                }, {
                    key: 'keyDown',
                    value: function keyDown(event) {
                        switch (event.keyCode) {
                            case 37:
                            case 38:
                            case 39:
                            case 40:
                            case 33:
                            case 34:
                            case 36:
                            case 35:
                                event.preventDefault();
                                this.buttonClick(event);
                                if (this.tooltip.isVisible && this.tooltip.showOn !== 'Always' && !this.isMaterial) {
                                    this.closeTooltip();
                                }
                                break;
                        }
                    }
                }, {
                    key: 'wireButtonEvt',
                    value: function wireButtonEvt(destroy) {
                        if (!destroy) {
                            EventHandler.add(this.firstBtn, 'mouseleave touchleave', this.buttonFocusOut, this);
                            EventHandler.add(this.secondBtn, 'mouseleave touchleave', this.buttonFocusOut, this);
                            EventHandler.add(this.firstBtn, 'mousedown touchstart', this.repeatHandlerMouse, this);
                            EventHandler.add(this.firstBtn, 'mouseup mouseleave touchup touchend', this.repeatHandlerUp, this);
                            EventHandler.add(this.secondBtn, 'mousedown touchstart', this.repeatHandlerMouse, this);
                            EventHandler.add(this.secondBtn, 'mouseup mouseleave touchup touchend', this.repeatHandlerUp, this);
                            EventHandler.add(this.firstBtn, 'focusout', this.sliderFocusOut, this);
                            EventHandler.add(this.secondBtn, 'focusout', this.sliderFocusOut, this);
                        } else {
                            EventHandler.remove(this.firstBtn, 'mouseleave touchleave', this.buttonFocusOut);
                            EventHandler.remove(this.secondBtn, 'mouseleave touchleave', this.buttonFocusOut);
                            EventHandler.remove(this.firstBtn, 'mousedown touchstart', this.repeatHandlerMouse);
                            EventHandler.remove(this.firstBtn, 'mouseup mouseleave touchup touchend', this.repeatHandlerUp);
                            EventHandler.remove(this.secondBtn, 'mousedown touchstart', this.repeatHandlerMouse);
                            EventHandler.remove(this.secondBtn, 'mouseup mouseleave touchup touchend', this.repeatHandlerUp);
                            EventHandler.remove(this.firstBtn, 'focusout', this.sliderFocusOut);
                            EventHandler.remove(this.secondBtn, 'focusout', this.sliderFocusOut);
                        }
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        this.onresize = this.onResize.bind(this);
                        window.addEventListener('resize', this.onresize);
                        if (this.enabled && !this.readOnly) {
                            EventHandler.add(this.element, 'mousedown touchstart', this.sliderDown, this);
                            EventHandler.add(this.sliderContainer, 'keydown', this.keyDown, this);
                            EventHandler.add(this.sliderContainer, 'keyup', this.keyUp, this);
                            EventHandler.add(this.element, 'focusout', this.sliderFocusOut, this);
                            EventHandler.add(this.sliderContainer, 'mouseover mouseout touchstart touchend', this.hover, this);
                            this.wireFirstHandleEvt(false);
                            if (this.type === 'Range') {
                                this.wireSecondHandleEvt(false);
                            }
                            if (this.showButtons) {
                                this.wireButtonEvt(false);
                            }
                            this.wireMaterialTooltipEvent(false);
                        }
                    }
                }, {
                    key: 'unwireEvents',
                    value: function unwireEvents() {
                        EventHandler.remove(this.element, 'mousedown touchstart', this.sliderDown);
                        EventHandler.remove(this.sliderContainer, 'keydown', this.keyDown);
                        EventHandler.remove(this.sliderContainer, 'keyup', this.keyUp);
                        EventHandler.remove(this.element, 'focusout', this.sliderFocusOut);
                        EventHandler.remove(this.sliderContainer, 'mouseover mouseout touchstart touchend', this.hover);
                        this.wireFirstHandleEvt(true);
                        if (this.type === 'Range') {
                            this.wireSecondHandleEvt(true);
                        }
                        if (this.showButtons) {
                            this.wireButtonEvt(true);
                        }
                        this.wireMaterialTooltipEvent(true);
                    }
                }, {
                    key: 'keyUp',
                    value: function keyUp(event) {
                        if (event.keyCode === 9 && event.target.classList.contains(classNames.sliderHandle)) {
                            if (!event.target.classList.contains(classNames.sliderTabHandle)) {
                                if (this.element.querySelector('.' + classNames.sliderTabHandle)) {
                                    this.element.querySelector('.' + classNames.sliderTabHandle).classList.remove(classNames.sliderTabHandle);
                                }
                                event.target.classList.add(classNames.sliderTabHandle);
                                var parentElement = event.target.parentElement;
                                if (parentElement === this.element) {
                                    parentElement.querySelector('.' + classNames.sliderTrack).classList.add(classNames.sliderTabTrack);
                                    if (this.type === 'Range' || this.type === 'MinRange') {
                                        parentElement.querySelector('.' + classNames.rangeBar).classList.add(classNames.sliderTabRange);
                                    }
                                }
                                if (this.type === 'Range') {
                                    event.target.previousSibling.classList.contains(classNames.sliderHandle) ? this.activeHandle = 2 : this.activeHandle = 1;
                                }
                                this.tooltipAnimation();
                                if (this.tooltip.isVisible && this.tooltip.showOn !== 'Always' && !this.isMaterial) {
                                    this.closeTooltip();
                                }
                            }
                        }
                        this.changeEvent('changed');
                    }
                }, {
                    key: 'hover',
                    value: function hover(event) {
                        if (!isNullOrUndefined(event)) {
                            if (event.type === 'mouseover' || event.type === 'touchmove' || event.type === 'mousemove' || event.type === 'pointermove' || event.type === 'touchstart') {
                                this.sliderContainer.classList.add(classNames.sliderHover);
                            } else {
                                this.sliderContainer.classList.remove(classNames.sliderHover);
                            }
                        }
                    }
                }, {
                    key: 'sliderFocusOut',
                    value: function sliderFocusOut(event) {
                        var _this19 = this;

                        if (event.relatedTarget !== this.secondHandle && event.relatedTarget !== this.firstHandle && event.relatedTarget !== this.element && event.relatedTarget !== this.firstBtn && event.relatedTarget !== this.secondBtn) {
                            this.hiddenInput.focus();
                            this.hiddenInput.blur();
                            if (this.isMaterial && this.tooltip.isVisible) {
                                var transformProperties = this.getTooltipTransformProperties(this.previousTooltipClass);
                                var tooltipElement = this.type !== 'Range' ? [this.firstTooltipElement] : [this.firstTooltipElement, this.secondTooltipElement];
                                var hiddenHandle = this.type !== 'Range' ? [this.firstHandle] : [this.firstHandle, this.secondHandle];
                                var handle = this.type !== 'Range' ? [this.firstMaterialHandle] : [this.firstMaterialHandle, this.secondMaterialHandle];
                                tooltipElement.forEach(function (tooltipElement, index) {
                                    if (tooltipElement) {
                                        tooltipElement.style.transition = _this19.scaleTransform;
                                        tooltipElement.firstChild.classList.remove(classNames.materialTooltipShow);
                                        tooltipElement.firstChild.classList.add(classNames.materialTooltipHide);
                                        hiddenHandle[index].style.cursor = '-webkit-grab';
                                        hiddenHandle[index].style.cursor = 'grab';
                                        handle[index].style.transform = 'scale(1)';
                                        tooltipElement.classList.remove(classNames.materialTooltipOpen);
                                        if (tooltipElement.firstElementChild.innerText.length > 4) {
                                            tooltipElement.style.transform = transformProperties.translate + ' ' + 'scale(0.01)';
                                        } else {
                                            tooltipElement.style.transform = transformProperties.translate + ' ' + transformProperties.rotate + ' ' + 'scale(0.01)';
                                        }
                                        setTimeout(function () {
                                            tooltipElement.style.transition = 'none';
                                        }, 2500);
                                    }
                                });
                            }
                            if (this.element.querySelector('.' + classNames.sliderTabHandle)) {
                                this.element.querySelector('.' + classNames.sliderTabHandle).classList.remove(classNames.sliderTabHandle);
                            }
                            if (this.element.querySelector('.' + classNames.sliderTabTrack)) {
                                this.element.querySelector('.' + classNames.sliderTabTrack).classList.remove(classNames.sliderTabTrack);
                                if ((this.type === 'Range' || this.type === 'MinRange') && this.element.querySelector('.' + classNames.sliderTabRange)) {
                                    this.element.querySelector('.' + classNames.sliderTabRange).classList.remove(classNames.sliderTabRange);
                                }
                            }
                        }
                    }
                }, {
                    key: 'closeTooltip',
                    value: function closeTooltip() {
                        if (this.tooltip.isVisible) {
                            this.tooltipValue();
                            if (this.activeHandle === 1) {
                                this.firstTooltipObj.close();
                            } else {
                                this.secondTooltipObj.close();
                            }
                        }
                    }
                }, {
                    key: 'removeElement',
                    value: function removeElement(element) {
                        if (element.parentNode) {
                            element.parentNode.removeChild(element);
                        }
                    }
                }, {
                    key: 'changeSliderType',
                    value: function changeSliderType(type) {
                        if (this.isMaterial && this.firstMaterialHandle) {
                            this.sliderContainer.classList.remove(classNames.materialSlider);
                            this.removeElement(this.firstMaterialHandle);
                            this.firstTooltipElement = undefined;
                            this.firstHandleTooltipPosition = undefined;
                            if (this.secondMaterialHandle) {
                                this.removeElement(this.secondMaterialHandle);
                                this.secondTooltipElement = undefined;
                                this.secondHandleTooltipPosition = undefined;
                            }
                        }
                        if (this.tooltip.isVisible && this.isMaterial) {
                            this.sliderContainer.classList.add(classNames.materialSlider);
                        }
                        this.removeElement(this.firstHandle);
                        if (type !== 'Default') {
                            if (type === 'Range') {
                                this.removeElement(this.secondHandle);
                            }
                            this.removeElement(this.rangeBar);
                        }
                        if (this.tooltip.isVisible && !isNullOrUndefined(this.firstTooltipObj)) {
                            this.firstTooltipObj.destroy();
                            if (type === 'Range' && !isNullOrUndefined(this.secondTooltipObj)) {
                                this.secondTooltipObj.destroy();
                            }
                        }
                        this.createRangeBar();
                        this.setHandler();
                        this.setOrientClass();
                        this.wireFirstHandleEvt(false);
                        if (this.type === 'Range') {
                            this.wireSecondHandleEvt(false);
                        }
                        this.setValue();
                        if (this.tooltip.isVisible) {
                            this.renderTooltip();
                            this.wireMaterialTooltipEvent(false);
                        }
                        this.updateConfig();
                    }
                }, {
                    key: 'changeRtl',
                    value: function changeRtl() {
                        if (!this.enableRtl && this.type === 'Range') {
                            this.value = [this.handleVal2, this.handleVal1];
                        }
                        this.updateConfig();
                        if (this.tooltip.isVisible) {
                            this.firstTooltipObj.refresh(this.firstHandle);
                            if (this.type === 'Range') {
                                this.secondTooltipObj.refresh(this.secondHandle);
                            }
                        }
                        if (this.showButtons) {
                            var enabledRTL = this.enableRtl && this.orientation !== 'Vertical';
                            attributes(enabledRTL ? this.secondBtn : this.firstBtn, { 'aria-label': 'Decrease', title: 'Decrease' });
                            attributes(enabledRTL ? this.firstBtn : this.secondBtn, { 'aria-label': 'Increase', title: 'Increase' });
                        }
                    }
                }, {
                    key: 'changeOrientation',
                    value: function changeOrientation() {
                        this.changeSliderType(this.type);
                    }
                }, {
                    key: 'updateConfig',
                    value: function updateConfig() {
                        this.setEnableRTL();
                        this.setValue();
                        if (this.tooltip.isVisible) {
                            this.refreshTooltip();
                        }
                        if (this.ticks.placement !== 'None') {
                            if (this.ul) {
                                this.removeElement(this.ul);
                                this.renderScale();
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
                    key: 'destroy',
                    value: function destroy() {
                        _get(Slider.prototype.__proto__ || Object.getPrototypeOf(Slider.prototype), 'destroy', this).call(this);
                        this.unwireEvents();
                        window.removeEventListener('resize', this.onresize);
                        removeClass([this.sliderContainer], [classNames.sliderDisabled]);
                        this.firstHandle.removeAttribute('aria-orientation');
                        if (this.type === 'Range') {
                            this.secondHandle.removeAttribute('aria-orientation');
                        }
                        this.sliderContainer.parentNode.insertBefore(this.element, this.sliderContainer);
                        detach(this.sliderContainer);
                        if (this.tooltip.isVisible) {
                            this.firstTooltipObj.destroy();
                            if (this.type === 'Range' && !isNullOrUndefined(this.secondTooltipObj)) {
                                this.secondTooltipObj.destroy();
                            }
                        }
                        this.element.innerHTML = '';
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _this20 = this;

                        var _iteratorNormalCompletion7 = true;
                        var _didIteratorError7 = false;
                        var _iteratorError7 = undefined;

                        try {
                            for (var _iterator7 = Object.keys(newProp)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                var prop = _step7.value;

                                switch (prop) {
                                    case 'cssClass':
                                        this.setCSSClass(oldProp.cssClass);
                                        break;
                                    case 'value':
                                        if (!isNullOrUndefined(oldProp.value) && !isNullOrUndefined(newProp.value)) {
                                            if (oldProp.value.toString() !== newProp.value.toString()) {
                                                this.setValue();
                                                this.refreshTooltip();
                                                if (this.type === 'Range') {
                                                    if (oldProp.value[0] === newProp.value[0]) {
                                                        this.activeHandle = 2;
                                                    } else {
                                                        this.activeHandle = 1;
                                                    }
                                                }
                                            }
                                        }
                                        break;
                                    case 'min':
                                    case 'step':
                                    case 'max':
                                        this.setMinMaxValue();
                                        break;
                                    case 'tooltip':
                                        if (!isNullOrUndefined(newProp.tooltip) && !isNullOrUndefined(oldProp.tooltip)) {
                                            this.setTooltip();
                                        }
                                        break;
                                    case 'type':
                                        this.changeSliderType(oldProp.type);
                                        this.setZindex();
                                        break;
                                    case 'enableRtl':
                                        if (oldProp.enableRtl !== newProp.enableRtl && this.orientation !== 'Vertical') {
                                            this.rtl = oldProp.enableRtl;
                                            this.changeRtl();
                                        }
                                        break;
                                    case 'orientation':
                                        this.changeOrientation();
                                        break;
                                    case 'ticks':
                                        if (!isNullOrUndefined(this.sliderContainer.querySelector('.' + classNames.scale))) {
                                            detach(this.ul);
                                            Array.prototype.forEach.call(this.sliderContainer.classList, function (className) {
                                                if (className.match(/e-scale-/)) {
                                                    _this20.sliderContainer.classList.remove(className);
                                                }
                                            });
                                        }
                                        if (this.ticks.placement !== 'None') {
                                            this.renderScale();
                                            this.setZindex();
                                        }
                                        break;
                                    case 'locale':
                                        if (this.showButtons) {
                                            this.buttonTitle();
                                        }
                                        break;
                                    case 'showButtons':
                                        if (newProp.showButtons) {
                                            this.setButtons();
                                            this.onResize();
                                            if (this.enabled && !this.readOnly) {
                                                this.wireButtonEvt(false);
                                            }
                                        } else {
                                            if (this.firstBtn && this.secondBtn) {
                                                this.sliderContainer.removeChild(this.firstBtn);
                                                this.sliderContainer.removeChild(this.secondBtn);
                                                this.firstBtn = undefined;
                                                this.secondBtn = undefined;
                                            }
                                        }
                                        break;
                                    case 'enabled':
                                        this.setEnabled();
                                        break;
                                    case 'readOnly':
                                        this.setReadOnly();
                                        break;
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
                    key: 'setReadOnly',
                    value: function setReadOnly() {
                        if (this.readOnly) {
                            this.unwireEvents();
                            this.sliderContainer.classList.add(classNames.readOnly);
                        } else {
                            this.wireEvents();
                            this.sliderContainer.classList.remove(classNames.readOnly);
                        }
                    }
                }, {
                    key: 'setMinMaxValue',
                    value: function setMinMaxValue() {
                        var _this21 = this;

                        this.setValue();
                        this.refreshTooltip();
                        if (!isNullOrUndefined(this.sliderContainer.querySelector('.' + classNames.scale))) {
                            if (this.ul) {
                                detach(this.ul);
                                Array.prototype.forEach.call(this.sliderContainer.classList, function (className) {
                                    if (className.match(/e-scale-/)) {
                                        _this21.sliderContainer.classList.remove(className);
                                    }
                                });
                            }
                        }
                        if (this.ticks.placement !== 'None') {
                            this.renderScale();
                            this.setZindex();
                        }
                    }
                }, {
                    key: 'setZindex',
                    value: function setZindex() {
                        this.zIndex = 6;
                        if (!isNullOrUndefined(this.ticks) && this.ticks.placement !== 'None') {
                            this.ul.style.zIndex = this.zIndex + -7 + '';
                            this.element.style.zIndex = this.zIndex + 2 + '';
                        }
                        if (!this.isMaterial && !isNullOrUndefined(this.ticks) && this.ticks.placement === 'Both') {
                            this.element.style.zIndex = this.zIndex + 2 + '';
                        }
                        this.firstHandle.style.zIndex = this.zIndex + 3 + '';
                        if (this.type === 'Range') {
                            this.secondHandle.style.zIndex = this.zIndex + 4 + '';
                        }
                    }
                }, {
                    key: 'setTooltip',
                    value: function setTooltip() {
                        this.changeSliderType(this.type);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'slider';
                    }
                }]);

                return Slider;
            }(Component));

            __decorate$2([Property(null)], Slider.prototype, "value", void 0);
            __decorate$2([Property(1)], Slider.prototype, "step", void 0);
            __decorate$2([Property(0)], Slider.prototype, "min", void 0);
            __decorate$2([Property(100)], Slider.prototype, "max", void 0);
            __decorate$2([Property(false)], Slider.prototype, "readOnly", void 0);
            __decorate$2([Property('Default')], Slider.prototype, "type", void 0);
            __decorate$2([Complex({}, TicksData)], Slider.prototype, "ticks", void 0);
            __decorate$2([Property(true)], Slider.prototype, "enabled", void 0);
            __decorate$2([Property(false)], Slider.prototype, "enableRtl", void 0);
            __decorate$2([Complex({}, TooltipData)], Slider.prototype, "tooltip", void 0);
            __decorate$2([Property(false)], Slider.prototype, "showButtons", void 0);
            __decorate$2([Property(true)], Slider.prototype, "enableAnimation", void 0);
            __decorate$2([Property('Horizontal')], Slider.prototype, "orientation", void 0);
            __decorate$2([Property('')], Slider.prototype, "cssClass", void 0);
            __decorate$2([Event()], Slider.prototype, "created", void 0);
            __decorate$2([Event()], Slider.prototype, "change", void 0);
            __decorate$2([Event()], Slider.prototype, "changed", void 0);
            __decorate$2([Event()], Slider.prototype, "renderingTicks", void 0);
            __decorate$2([Event()], Slider.prototype, "renderedTicks", void 0);
            __decorate$2([Event()], Slider.prototype, "tooltipChange", void 0);
            _export('Slider', Slider = __decorate$2([NotifyPropertyChanges], Slider));

            /**
             * Slider modules
             */

            __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            VALIDATE_EMAIL = new RegExp('^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,5}' + '|[.]{1}[a-zA-Z]{2,4}[.]{1}[a-zA-Z]{2,4})$');
            VALIDATE_URL = new RegExp('^((ftp|http|https):\/\/)?www\.([A-z]{2,})\.([A-z]{2,})$');
            VALIDATE_DATE_ISO = new RegExp('^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$');
            VALIDATE_DIGITS = new RegExp('^[0-9]*$');
            VALIDATE_PHONE = new RegExp('^[+]?[0-9]{9,13}$');
            VALIDATE_CREDITCARD = new RegExp('^\\d{13,16}$');

            (function (ErrorOption) {
                ErrorOption[ErrorOption["Message"] = 0] = "Message";
                ErrorOption[ErrorOption["Label"] = 1] = "Label";
            })(ErrorOption || _export('ErrorOption', ErrorOption = {}));
            /**
             * FormValidator class enables you to validate the form fields based on your defined rules
             * ```html
             * <form id='formId'>
             *  <input type='text' name='Name' />
             *  <input type='text' name='Age' />
             * </form>
             * <script>
             *   let formObject = new FormValidator('#formId', {
             *      rules: { Name: { required: true }, Age: { range: [18, 30] } };
             *   });
             *   formObject.validate();
             * </script>
             * ```
             */

            _export('FormValidator', FormValidator = FormValidator_1 = function (_Base) {
                _inherits(FormValidator, _Base);

                // Initializes the FormValidator 
                function FormValidator(element, options) {
                    _classCallCheck(this, FormValidator);

                    var _this22 = _possibleConstructorReturn(this, (FormValidator.__proto__ || Object.getPrototypeOf(FormValidator)).call(this, options, element));

                    _this22.validated = [];
                    _this22.errorRules = [];
                    _this22.allowSubmit = false;
                    _this22.required = 'required';
                    _this22.infoElement = null;
                    _this22.inputElement = null;
                    _this22.selectQuery = 'input:not([type=reset]):not([type=button]), select, textarea';
                    /**
                     * Specifies the default messages for validation rules.
                     * @default : { List of validation message };
                     */
                    _this22.defaultMessages = {
                        required: 'This field is required.',
                        email: 'Please enter a valid email address.',
                        url: 'Please enter a valid URL.',
                        date: 'Please enter a valid date.',
                        dateIso: 'Please enter a valid date ( ISO ).',
                        creditcard: 'Please enter valid card number',
                        number: 'Please enter a valid number.',
                        digits: 'Please enter only digits.',
                        maxLength: 'Please enter no more than {0} characters.',
                        minLength: 'Please enter at least {0} characters.',
                        rangeLength: 'Please enter a value between {0} and {1} characters long.',
                        range: 'Please enter a value between {0} and {1}.',
                        max: 'Please enter a value less than or equal to {0}.',
                        min: 'Please enter a value greater than or equal to {0}.',
                        regex: 'Please enter a correct value.',
                        tel: 'Please enter a valid phone number.',
                        pattern: 'Please enter a correct pattern value.',
                        equalTo: 'Please enter the valid match text'
                    };
                    if (typeof _this22.rules === 'undefined') {
                        _this22.rules = {};
                    }
                    element = typeof element === 'string' ? select(element, document) : element;
                    // Set novalidate to prevent default HTML5 form validation
                    if (_this22.element != null) {
                        _this22.element.setAttribute('novalidate', '');
                        _this22.inputElements = selectAll(_this22.selectQuery, _this22.element);
                        _this22.createHTML5Rules();
                        _this22.wireEvents();
                    } else {
                        var _ret;

                        return _ret = undefined, _possibleConstructorReturn(_this22, _ret);
                    }
                    return _this22;
                }
                /**
                 * Add validation rules to the corresponding input element based on `name` attribute.
                 * @param {string} name `name` of form field.
                 * @param {Object} rules Validation rules for the corresponding element.
                 * @return {void}
                 */


                _createClass(FormValidator, [{
                    key: 'addRules',
                    value: function addRules(name, rules) {
                        if (name) {
                            if (this.rules.hasOwnProperty(name)) {
                                extend(this.rules[name], rules, {});
                            } else {
                                this.rules[name] = rules;
                            }
                        }
                    }
                }, {
                    key: 'removeRules',
                    value: function removeRules(name, rules) {
                        if (!name && !rules) {
                            this.rules = {};
                        } else if (this.rules[name] && !rules) {
                            delete this.rules[name];
                        } else if (!isNullOrUndefined(this.rules[name] && rules)) {
                            for (var i = 0; i < rules.length; i++) {
                                delete this.rules[name][rules[i]];
                            }
                        } else {
                            return;
                        }
                    }
                }, {
                    key: 'validate',
                    value: function validate(selected) {
                        var rules = Object.keys(this.rules);
                        if (selected && rules.length) {
                            this.validateRules(selected);
                            //filter the selected element it don't have any valid input element
                            return rules.indexOf(selected) !== -1 && this.errorRules.filter(function (data) {
                                return data.name === selected;
                            }).length === 0;
                        } else {
                            var _iteratorNormalCompletion8 = true;
                            var _didIteratorError8 = false;
                            var _iteratorError8 = undefined;

                            try {
                                for (var _iterator8 = rules[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                    var name = _step8.value;

                                    this.validateRules(name);
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

                            return this.errorRules.length === 0;
                        }
                    }
                }, {
                    key: 'reset',
                    value: function reset() {
                        this.element.reset();
                        this.clearForm();
                    }
                }, {
                    key: 'getInputElement',
                    value: function getInputElement(name) {
                        this.inputElement = select('[name=' + name + ']', this.element);
                        return this.inputElement;
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.reset();
                        this.unwireEvents();
                        this.rules = {};
                        var elements = selectAll('.' + this.errorClass + ', .' + this.validClass, this.element);
                        var _iteratorNormalCompletion9 = true;
                        var _didIteratorError9 = false;
                        var _iteratorError9 = undefined;

                        try {
                            for (var _iterator9 = elements[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                var element = _step9.value;

                                element.remove();
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

                        _get(FormValidator.prototype.__proto__ || Object.getPrototypeOf(FormValidator.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        // No code are needed
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'formValidator';
                    }
                }, {
                    key: 'clearForm',
                    value: function clearForm() {
                        this.errorRules = [];
                        this.validated = [];
                        var elements = selectAll(this.selectQuery, this.element);
                        var _iteratorNormalCompletion10 = true;
                        var _didIteratorError10 = false;
                        var _iteratorError10 = undefined;

                        try {
                            for (var _iterator10 = elements[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                var element = _step10.value;

                                var input = element;
                                input.removeAttribute('aria-invalid');
                                input.classList.remove(this.errorClass);
                                if (input.name.length > 0) {
                                    this.getInputElement(input.name);
                                    this.getErrorElement(input.name);
                                    this.hideMessage(input.name);
                                }
                                input.classList.remove(this.validClass);
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
                }, {
                    key: 'createHTML5Rules',
                    value: function createHTML5Rules() {
                        var defRules = ['required', 'regex', 'rangeLength', 'maxLength', 'minLength', 'dateIso', 'digits', 'pattern', 'data-val-required', 'type', 'data-validation', 'min', 'max', 'range', 'equalTo', 'data-val-minlength-min', 'data-val-equalto-other', 'data-val-maxlength-max', 'data-val-range-min', 'data-val-regex-pattern', 'data-val-length-max', 'data-val-creditcard', 'data-val-phone'];
                        var acceptedTypes = ['email', 'url', 'date', 'number', 'tel'];
                        var _iteratorNormalCompletion11 = true;
                        var _didIteratorError11 = false;
                        var _iteratorError11 = undefined;

                        try {
                            for (var _iterator11 = this.inputElements[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                var input = _step11.value;

                                // Default attribute rules 
                                var allRule = {};
                                var _iteratorNormalCompletion12 = true;
                                var _didIteratorError12 = false;
                                var _iteratorError12 = undefined;

                                try {
                                    for (var _iterator12 = defRules[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                        var rule = _step12.value;

                                        if (input.getAttribute(rule) !== null) {
                                            switch (rule) {
                                                case 'required':
                                                    this.defRule(input, allRule, rule, input.required);
                                                    break;
                                                case 'data-validation':
                                                    rule = input.getAttribute(rule);
                                                    this.defRule(input, allRule, rule, true);
                                                    break;
                                                case 'type':
                                                    if (acceptedTypes.indexOf(input.type) !== -1) {
                                                        this.defRule(input, allRule, input.type, true);
                                                    }
                                                    break;
                                                case 'rangeLength':
                                                case 'range':
                                                    this.defRule(input, allRule, rule, JSON.parse(input.getAttribute(rule)));
                                                    break;
                                                case 'equalTo':
                                                    var id = input.getAttribute(rule);
                                                    this.defRule(input, allRule, rule, id);
                                                    break;
                                                default:
                                                    if (input.getAttribute('data-val') === 'true') {
                                                        this.annotationRule(input, allRule, rule, input.getAttribute(rule));
                                                    } else {
                                                        this.defRule(input, allRule, rule, input.getAttribute(rule));
                                                    }
                                            }
                                        }
                                    }
                                    //adding pattern type validation
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

                                if (Object.keys(allRule).length !== 0) {
                                    this.addRules(input.name, allRule);
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
                }, {
                    key: 'annotationRule',
                    value: function annotationRule(input, ruleCon, ruleName, value) {
                        var annotationRule = ruleName.split('-');
                        var rulesList = ['required', 'creditcard', 'phone', 'maxlength', 'minlength', 'range', 'regex', 'equalto'];
                        var ruleFirstName = annotationRule[annotationRule.length - 1];
                        var ruleSecondName = annotationRule[annotationRule.length - 2];
                        if (rulesList.indexOf(ruleFirstName) !== -1) {
                            switch (ruleFirstName) {
                                case 'required':
                                    this.defRule(input, ruleCon, 'required', value);
                                    break;
                                case 'creditcard':
                                    this.defRule(input, ruleCon, 'creditcard', value);
                                    break;
                                case 'phone':
                                    this.defRule(input, ruleCon, 'tel', value);
                                    break;
                            }
                        } else if (rulesList.indexOf(ruleSecondName) !== -1) {
                            switch (ruleSecondName) {
                                case 'maxlength':
                                    this.defRule(input, ruleCon, 'maxLength', value);
                                    break;
                                case 'minlength':
                                    this.defRule(input, ruleCon, 'minLength', value);
                                    break;
                                case 'range':
                                    var minvalue = input.getAttribute('data-val-range-min');
                                    var maxvalue = input.getAttribute('data-val-range-max');
                                    this.defRule(input, ruleCon, 'range', [minvalue, maxvalue]);
                                    break;
                                case 'equalto':
                                    var id = input.getAttribute(ruleName).split('.');
                                    this.defRule(input, ruleCon, 'equalTo', id[id.length - 1]);
                                    break;
                                case 'regex':
                                    this.defRule(input, ruleCon, 'regex', value);
                                    break;
                            }
                        }
                    }
                }, {
                    key: 'defRule',
                    value: function defRule(input, ruleCon, ruleName, value) {
                        var message = input.getAttribute('data-' + ruleName + '-message');
                        var annotationMessage = input.getAttribute('data-val-' + ruleName);
                        if (message) {
                            value = [value, message];
                        } else if (annotationMessage) {
                            value = [value, annotationMessage];
                        }
                        ruleCon[ruleName] = value;
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        var _iteratorNormalCompletion13 = true;
                        var _didIteratorError13 = false;
                        var _iteratorError13 = undefined;

                        try {
                            for (var _iterator13 = this.inputElements[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                var input = _step13.value;

                                if (FormValidator_1.isCheckable(input)) {
                                    EventHandler.add(input, 'click', this.clickHandler, this);
                                } else if (input.tagName === 'SELECT') {
                                    EventHandler.add(input, 'change', this.changeHandler, this);
                                } else {
                                    EventHandler.add(input, 'focusout', this.focusOutHandler, this);
                                    EventHandler.add(input, 'keyup', this.keyUpHandler, this);
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

                        EventHandler.add(this.element, 'submit', this.submitHandler, this);
                        EventHandler.add(this.element, 'reset', this.resetHandler, this);
                    }
                }, {
                    key: 'unwireEvents',
                    value: function unwireEvents() {
                        var _iteratorNormalCompletion14 = true;
                        var _didIteratorError14 = false;
                        var _iteratorError14 = undefined;

                        try {
                            for (var _iterator14 = this.inputElements[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                                var input = _step14.value;

                                EventHandler.clearEvents(input);
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

                        EventHandler.remove(this.element, 'submit', this.submitHandler);
                        EventHandler.remove(this.element, 'reset', this.resetHandler);
                    }
                }, {
                    key: 'focusOutHandler',
                    value: function focusOutHandler(e) {
                        this.trigger('focusout', e);
                        //FormValidator.triggerCallback(this.focusout, e);
                        var element = e.target;
                        if (this.rules[element.name]) {
                            if (this.rules[element.name][this.required] || element.value.length > 0) {
                                this.validate(element.name);
                            } else if (this.validated.indexOf(element.name) === -1) {
                                this.validated.push(element.name);
                            }
                        }
                    }
                }, {
                    key: 'keyUpHandler',
                    value: function keyUpHandler(e) {
                        this.trigger('keyup', e);
                        var element = e.target;
                        // List of keys need to prevent while validation
                        var excludeKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                        if (e.which === 9 && (!this.rules[element.name] || this.rules[element.name] && !this.rules[element.name][this.required])) {
                            return;
                        }
                        if (this.validated.indexOf(element.name) !== -1 && this.rules[element.name] && excludeKeys.indexOf(e.which) === -1) {
                            this.validate(element.name);
                        }
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(e) {
                        this.trigger('click', e);
                        var element = e.target;
                        // If element type is not submit allow validation
                        if (element.type !== 'submit') {
                            this.validate(element.name);
                        } else if (element.getAttribute('formnovalidate') !== null) {
                            // Prevent form validation, if submit button has formnovalidate attribute
                            this.allowSubmit = true;
                        }
                    }
                }, {
                    key: 'changeHandler',
                    value: function changeHandler(e) {
                        this.trigger('change', e);
                        var element = e.target;
                        this.validate(element.name);
                    }
                }, {
                    key: 'submitHandler',
                    value: function submitHandler(e) {
                        this.trigger('submit', e);
                        //FormValidator.triggerCallback(this.submit, e);
                        // Prevent form submit if validation failed
                        if (!this.allowSubmit && !this.validate()) {
                            e.preventDefault();
                        } else {
                            this.allowSubmit = false;
                        }
                    }
                }, {
                    key: 'resetHandler',
                    value: function resetHandler() {
                        this.clearForm();
                    }
                }, {
                    key: 'validateRules',
                    value: function validateRules(name) {
                        if (!this.rules[name]) {
                            return;
                        }
                        var rules = Object.keys(this.rules[name]);
                        this.getInputElement(name);
                        this.getErrorElement(name);
                        var _iteratorNormalCompletion15 = true;
                        var _didIteratorError15 = false;
                        var _iteratorError15 = undefined;

                        try {
                            for (var _iterator15 = rules[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                                var rule = _step15.value;

                                var errorMessage = this.getErrorMessage(this.rules[name][rule], rule);
                                var errorRule = { name: name, message: errorMessage };
                                var eventArgs = {
                                    inputName: name,
                                    element: this.inputElement,
                                    message: errorMessage
                                };
                                if (!this.isValid(name, rule) && !this.inputElement.classList.contains(this.ignore)) {
                                    this.removeErrorRules(name);
                                    this.errorRules.push(errorRule);
                                    // Set aria attributes to invalid elements
                                    this.inputElement.setAttribute('aria-invalid', 'true');
                                    this.inputElement.setAttribute('aria-describedby', this.inputElement.id + '-info');
                                    if (!this.infoElement) {
                                        this.createErrorElement(name, errorRule.message, this.inputElement);
                                    } else {
                                        this.showMessage(errorRule);
                                    }
                                    eventArgs.errorElement = this.infoElement;
                                    eventArgs.status = 'failure';
                                    this.inputElement.classList.add(this.errorClass);
                                    this.inputElement.classList.remove(this.validClass);
                                    this.trigger('validationComplete', eventArgs);
                                    // Set aria-required to required rule elements
                                    if (rule === 'required') {
                                        this.inputElement.setAttribute('aria-required', 'true');
                                    }
                                    break;
                                } else {
                                    this.hideMessage(name);
                                    eventArgs.status = 'success';
                                    this.trigger('validationComplete', eventArgs);
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
                    key: 'isValid',
                    value: function isValid(name, rule) {
                        var params = this.rules[name][rule];
                        var param = params instanceof Array && typeof params[1] === 'string' ? params[0] : params;
                        var currentRule = this.rules[name][rule];
                        var args = { value: this.inputElement.value, param: param, element: this.inputElement, formElement: this.element };
                        this.trigger('validationBegin', args);
                        if (currentRule && typeof currentRule[0] === 'function') {
                            var fn = currentRule[0];
                            return fn.call(this, { element: this.inputElement, value: this.inputElement.value });
                        } else if (FormValidator_1.isCheckable(this.inputElement)) {
                            if (rule !== 'required') {
                                return true;
                            }
                            return selectAll('input[name=' + name + ']:checked', this.element).length > 0;
                        } else {
                            return FormValidator_1.checkValidator[rule](args);
                        }
                    }
                }, {
                    key: 'getErrorMessage',
                    value: function getErrorMessage(ruleValue, rule) {
                        var message = ruleValue instanceof Array && typeof ruleValue[1] === 'string' ? ruleValue[1] : this.defaultMessages[rule];
                        var formats = message.match(/{(\d)}/g);
                        if (!isNullOrUndefined(formats)) {
                            for (var i = 0; i < formats.length; i++) {
                                var value = ruleValue instanceof Array ? ruleValue[i] : ruleValue;
                                message = message.replace(formats[i], value);
                            }
                        }
                        return message;
                    }
                }, {
                    key: 'createErrorElement',
                    value: function createErrorElement(name, message, input) {
                        var errorElement = createElement(this.errorElement, {
                            className: this.errorClass,
                            innerHTML: message,
                            attrs: { for: name }
                        });
                        // Create message design if errorOption is message
                        if (this.errorOption === ErrorOption.Message) {
                            errorElement.classList.remove(this.errorClass);
                            errorElement.classList.add('e-message');
                            errorElement = createElement(this.errorContainer, { className: this.errorClass, innerHTML: errorElement.outerHTML });
                        }
                        errorElement.id = this.inputElement.name + '-info';
                        // Append error message into MVC error message element
                        if (this.element.querySelector('[data-valmsg-for="' + input.id + '"]')) {
                            this.element.querySelector('[data-valmsg-for="' + input.id + '"]').appendChild(errorElement);
                        } else if (input.hasAttribute('data-msg-containerid') === true) {
                            // Append error message into custom div element
                            var containerId = input.getAttribute('data-msg-containerid');
                            var divElement = this.element.querySelector('#' + containerId);
                            divElement.appendChild(errorElement);
                        } else if (this.customPlacement != null) {
                            // Call custom placement function if customPlacement is not null
                            this.customPlacement.call(this, this.inputElement, errorElement);
                        } else {
                            this.inputElement.parentNode.insertBefore(errorElement, this.inputElement.nextSibling);
                        }
                        errorElement.style.display = 'block';
                        this.getErrorElement(name);
                        this.validated.push(name);
                        this.checkRequired(name);
                    }
                }, {
                    key: 'getErrorElement',
                    value: function getErrorElement(name) {
                        this.infoElement = select(this.errorElement + '.' + this.errorClass, this.inputElement.parentElement);
                        if (!this.infoElement) {
                            this.infoElement = select(this.errorElement + '.' + this.errorClass + '[for="' + name + '"]');
                        }
                        return this.infoElement;
                    }
                }, {
                    key: 'removeErrorRules',
                    value: function removeErrorRules(name) {
                        for (var i = 0; i < this.errorRules.length; i++) {
                            var rule = this.errorRules[i];
                            if (rule.name === name) {
                                this.errorRules.splice(i, 1);
                            }
                        }
                    }
                }, {
                    key: 'showMessage',
                    value: function showMessage(errorRule) {
                        this.infoElement.style.display = 'block';
                        this.infoElement.innerHTML = errorRule.message;
                        this.checkRequired(errorRule.name);
                    }
                }, {
                    key: 'hideMessage',
                    value: function hideMessage(name) {
                        if (this.infoElement) {
                            this.infoElement.style.display = 'none';
                            this.removeErrorRules(name);
                            this.inputElement.classList.add(this.validClass);
                            this.inputElement.classList.remove(this.errorClass);
                            this.inputElement.setAttribute('aria-invalid', 'false');
                        }
                    }
                }, {
                    key: 'checkRequired',
                    value: function checkRequired(name) {
                        if (!this.rules[name][this.required] && !this.inputElement.value.length) {
                            this.infoElement.innerHTML = this.inputElement.value;
                            this.infoElement.setAttribute('aria-invalid', 'false');
                            this.hideMessage(name);
                        }
                    }
                }], [{
                    key: 'isCheckable',
                    value: function isCheckable(input) {
                        var inputType = input.getAttribute('type');
                        return inputType && (inputType === 'checkbox' || inputType === 'radio' || inputType === 'submit');
                    }
                }]);

                return FormValidator;
            }(Base));

            // List of function to validate the rules
            FormValidator.checkValidator = {
                required: function required(option) {
                    return option.value.length > 0;
                },
                email: function email(option) {
                    return VALIDATE_EMAIL.test(option.value);
                },
                url: function url(option) {
                    return VALIDATE_URL.test(option.value);
                },
                dateIso: function dateIso(option) {
                    return VALIDATE_DATE_ISO.test(option.value);
                },
                tel: function tel(option) {
                    return VALIDATE_PHONE.test(option.value);
                },
                creditcard: function creditcard(option) {
                    return VALIDATE_CREDITCARD.test(option.value);
                },
                number: function number(option) {
                    return !isNaN(Number(option.value)) && option.value.indexOf(' ') === -1;
                },
                digits: function digits(option) {
                    return VALIDATE_DIGITS.test(option.value);
                },
                maxLength: function maxLength(option) {
                    return option.value.length <= option.param;
                },
                minLength: function minLength(option) {
                    return option.value.length >= option.param;
                },
                rangeLength: function rangeLength(option) {
                    var param = option.param;
                    return option.value.length >= param[0] && option.value.length <= param[1];
                },
                range: function range(option) {
                    var param = option.param;
                    return !isNaN(Number(option.value)) && Number(option.value) >= param[0] && Number(option.value) <= param[1];
                },
                date: function date(option) {
                    return !isNaN(new Date(option.value).getTime());
                },
                max: function max(option) {
                    if (!isNaN(Number(option.value))) {
                        // Maximum rule validation for number
                        return +option.value <= option.param;
                    }
                    // Maximum rule validation for date
                    return new Date(option.value).getTime() <= new Date(JSON.parse(JSON.stringify(option.param))).getTime();
                },
                min: function min(option) {
                    if (!isNaN(Number(option.value))) {
                        // Minimum rule validation for number
                        return +option.value >= option.param;
                    }
                    // Minimum rule validation for date
                    return new Date(option.value).getTime() >= new Date(JSON.parse(JSON.stringify(option.param))).getTime();
                },
                regex: function regex(option) {
                    return new RegExp(option.param).test(option.value);
                },
                equalTo: function equalTo(option) {
                    var compareTo = option.formElement.querySelector('#' + option.param);
                    option.param = compareTo.value;
                    return option.param === option.value;
                }
            };
            __decorate$3([Property('e-hidden')], FormValidator.prototype, "ignore", void 0);
            __decorate$3([Property()], FormValidator.prototype, "rules", void 0);
            __decorate$3([Property('e-error')], FormValidator.prototype, "errorClass", void 0);
            __decorate$3([Property('e-valid')], FormValidator.prototype, "validClass", void 0);
            __decorate$3([Property('label')], FormValidator.prototype, "errorElement", void 0);
            __decorate$3([Property('div')], FormValidator.prototype, "errorContainer", void 0);
            __decorate$3([Property(ErrorOption.Label)], FormValidator.prototype, "errorOption", void 0);
            __decorate$3([Event()], FormValidator.prototype, "focusout", void 0);
            __decorate$3([Event()], FormValidator.prototype, "keyup", void 0);
            __decorate$3([Event()], FormValidator.prototype, "click", void 0);
            __decorate$3([Event()], FormValidator.prototype, "change", void 0);
            __decorate$3([Event()], FormValidator.prototype, "submit", void 0);
            __decorate$3([Event()], FormValidator.prototype, "validationBegin", void 0);
            __decorate$3([Event()], FormValidator.prototype, "validationComplete", void 0);
            __decorate$3([Event()], FormValidator.prototype, "customPlacement", void 0);
            _export('FormValidator', FormValidator = FormValidator_1 = __decorate$3([NotifyPropertyChanges], FormValidator));

            __decorate$4 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            ROOT$2 = 'e-uploader';
            CONTROL_WRAPPER = 'e-upload';
            INPUT_WRAPPER = 'e-file-select';
            DROP_AREA = 'e-file-drop';
            DROP_WRAPPER = 'e-file-select-wrap';
            LIST_PARENT = 'e-upload-files';
            FILE = 'e-upload-file-list';
            STATUS = 'e-file-status';
            ACTION_BUTTONS = 'e-upload-actions';
            UPLOAD_BUTTONS = 'e-file-upload-btn e-css e-btn e-primary';
            CLEAR_BUTTONS = 'e-file-clear-btn e-css e-btn e-flat';
            FILE_NAME = 'e-file-name';
            FILE_TYPE = 'e-file-type';
            FILE_SIZE = 'e-file-size';
            CLEAR_ICON = 'e-file-remove-btn';
            REMOVE_ICON = 'e-file-delete-btn';
            DRAG_HOVER = 'e-upload-drag-hover';
            PROGRESS_WRAPPER = 'e-upload-progress-wrap';
            PROGRESSBAR = 'e-upload-progress-bar';
            PROGRESSBAR_TEXT = 'e-progress-bar-text';
            UPLOAD_INPROGRESS = 'e-upload-progress';
            UPLOAD_SUCCESS = 'e-upload-success';
            UPLOAD_FAILED = 'e-upload-fails';
            TEXT_CONTAINER = 'e-file-container';
            VALIDATION_FAILS = 'e-validation-fails';
            RTL = 'e-rtl';
            DISABLED = 'e-disabled';
            RTL_CONTAINER = 'e-rtl-container';
            ICON_FOCUSED = 'e-clear-icon-focus';
            PROGRESS_INNER_WRAPPER = 'e-progress-inner-wrap';

            _export('FilesProp', FilesProp = function (_ChildProperty3) {
                _inherits(FilesProp, _ChildProperty3);

                function FilesProp() {
                    _classCallCheck(this, FilesProp);

                    return _possibleConstructorReturn(this, (FilesProp.__proto__ || Object.getPrototypeOf(FilesProp)).apply(this, arguments));
                }

                return FilesProp;
            }(ChildProperty));

            __decorate$4([Property('')], FilesProp.prototype, "name", void 0);
            __decorate$4([Property(null)], FilesProp.prototype, "size", void 0);
            __decorate$4([Property('')], FilesProp.prototype, "type", void 0);

            _export('ButtonsProps', ButtonsProps = function (_ChildProperty4) {
                _inherits(ButtonsProps, _ChildProperty4);

                function ButtonsProps() {
                    _classCallCheck(this, ButtonsProps);

                    return _possibleConstructorReturn(this, (ButtonsProps.__proto__ || Object.getPrototypeOf(ButtonsProps)).apply(this, arguments));
                }

                return ButtonsProps;
            }(ChildProperty));

            __decorate$4([Property('Browse')], ButtonsProps.prototype, "browse", void 0);
            __decorate$4([Property('Upload')], ButtonsProps.prototype, "upload", void 0);
            __decorate$4([Property('Clear')], ButtonsProps.prototype, "clear", void 0);

            _export('AsyncSettings', AsyncSettings = function (_ChildProperty5) {
                _inherits(AsyncSettings, _ChildProperty5);

                function AsyncSettings() {
                    _classCallCheck(this, AsyncSettings);

                    return _possibleConstructorReturn(this, (AsyncSettings.__proto__ || Object.getPrototypeOf(AsyncSettings)).apply(this, arguments));
                }

                return AsyncSettings;
            }(ChildProperty));

            __decorate$4([Property('')], AsyncSettings.prototype, "saveUrl", void 0);
            __decorate$4([Property('')], AsyncSettings.prototype, "removeUrl", void 0);
            /**
             * The uploader component allows to upload images, documents, and other files from local to server.
             * ```html
             * <input type='file' name='images[]' id='upload'/>
             * ```
             * ```typescript
             * <script>
             *   var uploadObj = new Uploader();
             *   uploadObj.appendTo('#upload');
             * </script>
             * ```
             */

            _export('Uploader', Uploader = function (_Component4) {
                _inherits(Uploader, _Component4);

                /**
                 * Triggers when change the Uploader value.
                 */
                function Uploader(options, element) {
                    _classCallCheck(this, Uploader);

                    var _this26 = _possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).call(this, options, element));

                    _this26.initialAttr = { accept: null, multiple: false, disabled: false };
                    _this26.fileList = [];
                    _this26.filesData = [];
                    _this26.uploadedFilesData = [];
                    _this26.isForm = false;
                    return _this26;
                }
                /**
                 * Calls internally if any of the property value is changed.
                 * @private
                 */


                _createClass(Uploader, [{
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion16 = true;
                        var _didIteratorError16 = false;
                        var _iteratorError16 = undefined;

                        try {
                            for (var _iterator16 = Object.keys(newProp)[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                                var prop = _step16.value;

                                switch (prop) {
                                    case 'allowedExtensions':
                                        this.setExtensions(this.allowedExtensions);
                                        this.clearAll();
                                        break;
                                    case 'enabled':
                                        this.setControlStatus();
                                        break;
                                    case 'multiple':
                                        this.setMultipleSelection();
                                        break;
                                    case 'enableRtl':
                                        this.setRTL();
                                        this.reRenderFileList();
                                        break;
                                    case 'buttons':
                                        this.buttons.browse = isNullOrUndefined(this.buttons.browse) ? '' : this.buttons.browse;
                                        this.buttons.clear = isNullOrUndefined(this.buttons.clear) ? '' : this.buttons.clear;
                                        this.buttons.upload = isNullOrUndefined(this.buttons.upload) ? '' : this.buttons.upload;
                                        this.renderButtonTemplates();
                                        break;
                                    case 'dropArea':
                                        this.unBindDropEvents();
                                        this.setDropArea();
                                        break;
                                    case 'showFileList':
                                        if (this.listParent) {
                                            this.listParent.style.display = this.showFileList ? 'block' : 'none';
                                            this.actionButtons.style.display = this.showFileList ? 'block' : 'none';
                                        }
                                        break;
                                    case 'files':
                                        this.renderPreLoadFiles();
                                        break;
                                    case 'minFileSize':
                                    case 'maxFileSize':
                                    case 'template':
                                    case 'autoUpload':
                                        this.clearAll();
                                        break;
                                    case 'locale':
                                        this.l10n.setLocale(this.locale);
                                        this.setLocalizedTexts();
                                        this.preLocaleObj = getValue('currentLocale', this.l10n);
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
                    key: 'setLocalizedTexts',
                    value: function setLocalizedTexts() {
                        if (isNullOrUndefined(this.template)) {
                            if (typeof this.buttons.browse === 'string') {
                                this.browseButton.innerText = this.buttons.browse === 'Browse' ? this.localizedTexts('Browse') : this.buttons.browse;
                                this.browseButton.setAttribute('title', this.browseButton.innerText);
                                this.uploadWrapper.querySelector('.' + DROP_AREA).innerHTML = this.localizedTexts('dropFilesHint');
                            }
                            this.updateFileList();
                        }
                    }
                }, {
                    key: 'getKeyValue',
                    value: function getKeyValue(val) {
                        var keyValue = void 0;
                        var _iteratorNormalCompletion17 = true;
                        var _didIteratorError17 = false;
                        var _iteratorError17 = undefined;

                        try {
                            for (var _iterator17 = Object.keys(this.preLocaleObj)[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                                var key = _step17.value;

                                if (this.preLocaleObj[key] === val) {
                                    keyValue = key;
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

                        return keyValue;
                    }
                }, {
                    key: 'updateFileList',
                    value: function updateFileList() {
                        var element = void 0;
                        if (this.fileList.length > 0 && !isNullOrUndefined(this.uploadWrapper.querySelector('.' + LIST_PARENT))) {
                            for (var i = 0; i < this.fileList.length; i++) {
                                element = this.fileList[i].querySelector('.e-file-status');
                                element.innerHTML = this.localizedTexts(this.getKeyValue(this.filesData[i].status));
                                this.filesData[i].status = this.localizedTexts(this.getKeyValue(this.filesData[i].status));
                                if (this.fileList[i].classList.contains(UPLOAD_SUCCESS)) {
                                    /* istanbul ignore next */
                                    this.fileList[i].querySelector('.e-icons').setAttribute('title', this.localizedTexts('remove'));
                                } else {
                                    this.fileList[i].querySelector('.e-icons').setAttribute('title', this.localizedTexts('delete'));
                                }
                                if (!this.autoUpload) {
                                    this.uploadButton.innerText = this.buttons.upload === 'Upload' ? this.localizedTexts('Upload') : this.buttons.upload;
                                    this.clearButton.innerText = this.buttons.clear === 'Clear' ? this.localizedTexts('Clear') : this.buttons.clear;
                                }
                            }
                        }
                    }
                }, {
                    key: 'reRenderFileList',
                    value: function reRenderFileList() {
                        if (this.listParent) {
                            detach(this.listParent);
                            this.listParent = null;
                            this.fileList = [];
                            this.removeActionButtons();
                            this.createFileList(this.filesData);
                            this.renderActionButtons();
                        }
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        this.cloneElement = this.element.cloneNode(true);
                        this.localeText = { Browse: 'Browse', Clear: 'Clear', Upload: 'Upload',
                            dropFilesHint: 'or Drop files here', invalidMaxFileSize: 'File size is too large',
                            invalidMinFileSize: 'File size is too small', invalidFileType: 'File type is not allowed',
                            uploadFailedMessage: 'File failed to upload', uploadSuccessMessage: 'File uploaded successfully',
                            removedSuccessMessage: 'File removed successfully', removedFailedMessage: 'File failed to remove', inProgress: 'Uploading',
                            readyToUploadMessage: 'Ready to upload', remove: 'Remove', cancel: 'Cancel', delete: 'Delete file'
                        };
                        this.l10n = new L10n('uploader', this.localeText, this.locale);
                        this.preLocaleObj = getValue('currentLocale', this.l10n);
                        this.checkHTMLAttributes();
                        if (this.asyncSettings.saveUrl === '' && this.asyncSettings.removeUrl === '' && !this.autoUpload) {
                            if (!isNullOrUndefined(this.element.closest('form'))) {
                                this.isForm = true;
                                this.element.closest('form').setAttribute('enctype', 'multipart/form-data');
                                this.element.closest('form').setAttribute('encoding', 'multipart/form-data');
                            }
                        }
                        var ejInstance = getValue('ej2_instances', this.element);
                        if (this.element.tagName === 'EJS-UPLOADER' || this.element.tagName === 'UPLOADERCOMPONENT') {
                            var inputElement = createElement('input', { attrs: { type: 'file' } });
                            var index = 0;
                            for (index; index < this.element.attributes.length; index++) {
                                inputElement.setAttribute(this.element.attributes[index].nodeName, this.element.attributes[index].nodeValue);
                                inputElement.innerHTML = this.element.innerHTML;
                            }
                            if (!inputElement.hasAttribute('name')) {
                                inputElement.setAttribute('name', 'UploadFiles');
                            }
                            this.element.appendChild(inputElement);
                            this.element = inputElement;
                            setValue('ej2_instances', ejInstance, this.element);
                        }
                        if (isNullOrUndefined(this.element.getAttribute('name'))) {
                            this.element.setAttribute('name', this.element.getAttribute('id'));
                        }
                        if (!this.element.hasAttribute('type')) {
                            this.element.setAttribute('type', 'file');
                        }
                        this.keyConfigs = {
                            previous: 'shift+tab',
                            enter: 'enter',
                            next: 'tab'
                        };
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist([]);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'uploader';
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.renderBrowseButton();
                        this.initializeUpload();
                        this.wireEvents();
                        this.setMultipleSelection();
                        this.setExtensions(this.allowedExtensions);
                        this.setRTL();
                        this.renderPreLoadFiles();
                        this.setControlStatus();
                    }
                }, {
                    key: 'renderBrowseButton',
                    value: function renderBrowseButton() {
                        this.browseButton = createElement('button', { className: 'e-css e-btn', attrs: { 'type': 'button' } });
                        if (typeof this.buttons.browse === 'string') {
                            this.browseButton.innerText = this.buttons.browse === 'Browse' ? this.localizedTexts('Browse') : this.buttons.browse;
                            this.browseButton.setAttribute('title', this.browseButton.innerText);
                        } else {
                            this.browseButton.appendChild(this.buttons.browse);
                        }
                        this.element.setAttribute('aria-label', 'Uploader');
                    }
                }, {
                    key: 'renderActionButtons',
                    value: function renderActionButtons() {
                        this.element.setAttribute('tabindex', '-1');
                        this.actionButtons = createElement('div', { className: ACTION_BUTTONS });
                        this.uploadButton = createElement('button', { className: UPLOAD_BUTTONS, attrs: { 'type': 'button', 'tabindex': '-1' } });
                        this.clearButton = createElement('button', { className: CLEAR_BUTTONS, attrs: { 'type': 'button', 'tabindex': '-1' } });
                        this.actionButtons.appendChild(this.clearButton);
                        this.actionButtons.appendChild(this.uploadButton);
                        this.renderButtonTemplates();
                        this.uploadWrapper.appendChild(this.actionButtons);
                        this.browseButton.blur();
                        this.uploadButton.focus();
                        this.wireActionButtonEvents();
                    }
                }, {
                    key: 'wireActionButtonEvents',
                    value: function wireActionButtonEvents() {
                        EventHandler.add(this.uploadButton, 'click', this.uploadButtonClick, this);
                        EventHandler.add(this.clearButton, 'click', this.clearButtonClick, this);
                    }
                }, {
                    key: 'unwireActionButtonEvents',
                    value: function unwireActionButtonEvents() {
                        EventHandler.remove(this.uploadButton, 'click', this.uploadButtonClick);
                        EventHandler.remove(this.clearButton, 'click', this.clearButtonClick);
                    }
                }, {
                    key: 'removeActionButtons',
                    value: function removeActionButtons() {
                        if (this.actionButtons) {
                            this.unwireActionButtonEvents();
                            detach(this.actionButtons);
                            this.actionButtons = null;
                        }
                    }
                }, {
                    key: 'renderButtonTemplates',
                    value: function renderButtonTemplates() {
                        if (typeof this.buttons.browse === 'string') {
                            this.browseButton.innerText = this.buttons.browse === 'Browse' ? this.localizedTexts('Browse') : this.buttons.browse;
                            this.browseButton.setAttribute('title', this.browseButton.innerText);
                        } else {
                            this.browseButton.appendChild(this.buttons.browse);
                        }
                        if (this.uploadButton) {
                            var uploadText = void 0;
                            uploadText = isNullOrUndefined(this.buttons.upload) ? 'Upload' : this.buttons.upload;
                            this.buttons.upload = uploadText;
                            if (typeof this.buttons.upload === 'string') {
                                this.uploadButton.innerText = this.buttons.upload === 'Upload' ? this.localizedTexts('Upload') : this.buttons.upload;
                                this.uploadButton.setAttribute('title', this.uploadButton.innerText);
                            } else {
                                this.uploadButton.appendChild(this.buttons.upload);
                            }
                        }
                        if (this.clearButton) {
                            var clearText = void 0;
                            clearText = isNullOrUndefined(this.buttons.clear) ? 'Clear' : this.buttons.clear;
                            this.buttons.clear = clearText;
                            if (typeof this.buttons.clear === 'string') {
                                this.clearButton.innerText = this.buttons.clear === 'Clear' ? this.localizedTexts('Clear') : this.buttons.clear;
                                this.clearButton.setAttribute('title', this.clearButton.innerText);
                            } else {
                                this.clearButton.appendChild(this.buttons.clear);
                            }
                        }
                    }
                }, {
                    key: 'initializeUpload',
                    value: function initializeUpload() {
                        this.element.setAttribute('tabindex', '-1');
                        var inputWrapper = createElement('span', { className: INPUT_WRAPPER });
                        this.element.parentElement.insertBefore(inputWrapper, this.element);
                        this.dropAreaWrapper = createElement('div', { className: DROP_WRAPPER });
                        this.element.parentElement.insertBefore(this.dropAreaWrapper, this.element);
                        inputWrapper.appendChild(this.element);
                        this.dropAreaWrapper.appendChild(this.browseButton);
                        this.dropAreaWrapper.appendChild(inputWrapper);
                        var fileDropArea = createElement('span', { className: DROP_AREA });
                        fileDropArea.innerHTML = this.localizedTexts('dropFilesHint');
                        this.dropAreaWrapper.appendChild(fileDropArea);
                        this.uploadWrapper = createElement('div', { className: CONTROL_WRAPPER, attrs: { 'aria-activedescendant': 'li-focused' } });
                        this.dropAreaWrapper.parentElement.insertBefore(this.uploadWrapper, this.dropAreaWrapper);
                        this.uploadWrapper.appendChild(this.dropAreaWrapper);
                        this.setDropArea();
                    }
                }, {
                    key: 'renderPreLoadFiles',
                    value: function renderPreLoadFiles() {
                        if (isNullOrUndefined(this.files[0].size) || !isNullOrUndefined(this.template)) {
                            return;
                        }
                        var files = [].slice.call(this.files);
                        var filesData = [];
                        if (!this.multiple) {
                            this.clearData();
                            files = [files[0]];
                        }
                        var _iteratorNormalCompletion18 = true;
                        var _didIteratorError18 = false;
                        var _iteratorError18 = undefined;

                        try {
                            for (var _iterator18 = files[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                                var data = _step18.value;

                                var fileData = {
                                    name: this.getFileNameOnly(data.name) + '.' + data.type.split('.')[data.type.split('.').length - 1],
                                    rawFile: '',
                                    size: data.size,
                                    status: this.localizedTexts('uploadSuccessMessage'),
                                    type: data.type,
                                    validationMessages: { minSize: '', maxSize: '' },
                                    statusCode: '2'
                                };
                                filesData.push(fileData);
                                this.filesData.push(fileData);
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

                        this.createFileList(filesData);
                        if (!this.autoUpload && this.listParent && !this.actionButtons && !this.isForm) {
                            this.renderActionButtons();
                        }
                        this.checkActionButtonStatus();
                    }
                }, {
                    key: 'checkActionButtonStatus',
                    value: function checkActionButtonStatus() {
                        if (this.actionButtons) {
                            var length = this.uploadWrapper.querySelectorAll('.' + VALIDATION_FAILS).length + this.uploadWrapper.querySelectorAll('.e-upload-fails:not(.e-upload-progress)').length + this.uploadWrapper.querySelectorAll('span.' + UPLOAD_SUCCESS).length + this.uploadWrapper.querySelectorAll('span.' + UPLOAD_INPROGRESS).length;
                            if (length > 0 && length === this.uploadWrapper.querySelectorAll('li').length) {
                                this.uploadButton.setAttribute('disabled', 'disabled');
                            } else {
                                this.uploadButton.removeAttribute('disabled');
                            }
                        }
                    }
                }, {
                    key: 'setDropArea',
                    value: function setDropArea() {
                        var dropTextArea = this.dropAreaWrapper.querySelector('.e-file-drop');
                        if (this.dropArea) {
                            this.dropZoneElement = typeof this.dropArea !== 'string' ? this.dropArea : document.querySelector(this.dropArea);
                            var element = this.element;
                            var enableDropText = false;
                            while (element.parentNode) {
                                element = element.parentNode;
                                if (element === this.dropZoneElement) {
                                    enableDropText = true;
                                }
                            }
                            if (!enableDropText) {
                                dropTextArea.textContent = '';
                            }
                        } else {
                            this.dropZoneElement = this.uploadWrapper;
                            dropTextArea.textContent = this.localizedTexts('dropFilesHint');
                        }
                        this.bindDropEvents();
                    }
                }, {
                    key: 'setMultipleSelection',
                    value: function setMultipleSelection() {
                        if (this.multiple && !this.element.hasAttribute('multiple')) {
                            var newAttr = document.createAttribute('multiple');
                            this.element.setAttributeNode(newAttr);
                        } else if (!this.multiple) {
                            this.element.removeAttribute('multiple');
                        }
                    }
                }, {
                    key: 'checkAutoUpload',
                    value: function checkAutoUpload(fileData) {
                        if (this.autoUpload) {
                            this.upload(fileData);
                            this.removeActionButtons();
                        } else if (!this.actionButtons) {
                            this.renderActionButtons();
                        }
                        this.checkActionButtonStatus();
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        EventHandler.add(this.browseButton, 'click', this.browseButtonClick, this);
                        EventHandler.add(this.element, 'change', this.onSelectFiles, this);
                        EventHandler.add(document, 'click', this.removeFocus, this);
                        this.keyboardModule = new KeyboardEvents(this.uploadWrapper, {
                            keyAction: this.keyActionHandler.bind(this),
                            keyConfigs: this.keyConfigs,
                            eventName: 'keydown'
                        });
                        if (this.isForm) {
                            EventHandler.add(this.element.closest('form'), 'reset', this.resetForm, this);
                        }
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        EventHandler.remove(this.browseButton, 'click', this.browseButtonClick);
                        EventHandler.remove(this.element, 'change', this.onSelectFiles);
                        EventHandler.remove(document, 'click', this.removeFocus);
                        this.keyboardModule.destroy();
                    }
                }, {
                    key: 'resetForm',
                    value: function resetForm() {
                        this.clearAll();
                        this.element.value = '';
                    }
                }, {
                    key: 'keyActionHandler',
                    value: function keyActionHandler(e) {
                        switch (e.action) {
                            case 'next':
                                if (e.target === this.browseButton && isNullOrUndefined(this.listParent)) {
                                    this.browseButton.blur();
                                } else if (e.target === this.uploadButton) {
                                    this.uploadButton.blur();
                                } else {
                                    this.setTabFocus(e);
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (e.target === this.clearButton && this.uploadButton.hasAttribute('disabled')) {
                                        this.clearButton.blur();
                                    }
                                }
                                break;
                            case 'previous':
                                if (e.target === this.browseButton) {
                                    this.browseButton.blur();
                                } else {
                                    this.setReverseFocus(e);
                                    e.preventDefault();
                                    e.stopPropagation();
                                }
                                break;
                            case 'enter':
                                if (e.target === this.clearButton) {
                                    this.clearButtonClick();
                                } else if (e.target === this.uploadButton) {
                                    this.uploadButtonClick();
                                } else if (e.target === this.browseButton) {
                                    this.browseButtonClick();
                                } else {
                                    this.removeFiles(e);
                                    this.browseButton.focus();
                                }
                                e.preventDefault();
                                e.stopPropagation();
                                break;
                        }
                    }
                }, {
                    key: 'setReverseFocus',
                    value: function setReverseFocus(e) {
                        var target = e.target;
                        if (target === this.uploadButton) {
                            this.uploadButton.blur();
                            this.clearButton.focus();
                        } else if (target === this.clearButton && this.listParent && this.listParent.querySelector('.e-icons')) {
                            this.clearButton.blur();
                            var items = [].slice.call(this.listParent.querySelectorAll('span.e-icons'));
                            items[items.length - 1].classList.add(ICON_FOCUSED);
                            items[items.length - 1].focus();
                        } else {
                            var iconElements = [].slice.call(this.listParent.querySelectorAll('span.e-icons'));
                            var index = iconElements.indexOf(target);
                            if (index > 0) {
                                this.removeFocus();
                                iconElements[index - 1].classList.add(ICON_FOCUSED);
                                iconElements[index - 1].focus();
                            } else {
                                this.removeFocus();
                                this.browseButton.focus();
                            }
                        }
                    }
                }, {
                    key: 'setTabFocus',
                    value: function setTabFocus(e) {
                        var target = e.target;
                        if (target === this.clearButton) {
                            this.removeFocus();
                            if (this.uploadButton.hasAttribute('disabled')) {
                                return;
                            }
                            this.uploadButton.focus();
                        } else if (target.classList.contains('e-icons')) {
                            var iconElements = [].slice.call(this.listParent.querySelectorAll('span.e-icons'));
                            var index = iconElements.indexOf(target);
                            if (index < iconElements.length - 1) {
                                this.removeFocus();
                                iconElements[index + 1].classList.add(ICON_FOCUSED);
                                iconElements[index + 1].focus();
                            } else {
                                this.removeFocus();
                                this.clearButton.focus();
                            }
                        } else {
                            this.browseButton.blur();
                            var iconElement = this.listParent.querySelector('span.e-icons');
                            iconElement.focus();
                            iconElement.classList.add(ICON_FOCUSED);
                        }
                    }
                }, {
                    key: 'removeFocus',
                    value: function removeFocus() {
                        if (this.uploadWrapper && this.listParent && this.listParent.querySelector('.' + ICON_FOCUSED)) {
                            document.activeElement.blur();
                            this.listParent.querySelector('.' + ICON_FOCUSED).classList.remove(ICON_FOCUSED);
                        }
                    }
                }, {
                    key: 'browseButtonClick',
                    value: function browseButtonClick() {
                        this.element.click();
                    }
                }, {
                    key: 'uploadButtonClick',
                    value: function uploadButtonClick() {
                        this.upload(this.filesData);
                    }
                }, {
                    key: 'clearButtonClick',
                    value: function clearButtonClick() {
                        this.clearAll();
                    }
                }, {
                    key: 'bindDropEvents',
                    value: function bindDropEvents() {
                        if (this.dropZoneElement) {
                            EventHandler.add(this.dropZoneElement, 'drop', this.dropElement, this);
                            EventHandler.add(this.dropZoneElement, 'dragover', this.dragHover, this);
                            EventHandler.add(this.dropZoneElement, 'dragleave', this.onDragLeave, this);
                        }
                    }
                }, {
                    key: 'unBindDropEvents',
                    value: function unBindDropEvents() {
                        if (this.dropZoneElement) {
                            EventHandler.remove(this.dropZoneElement, 'drop', this.dropElement);
                            EventHandler.remove(this.dropZoneElement, 'dragover', this.dragHover);
                            EventHandler.remove(this.dropZoneElement, 'dragleave', this.onDragLeave);
                        }
                    }
                }, {
                    key: 'onDragLeave',
                    value: function onDragLeave(e) {
                        this.dropZoneElement.classList.remove(DRAG_HOVER);
                    }
                }, {
                    key: 'dragHover',
                    value: function dragHover(e) {
                        if (!this.enabled) {
                            return;
                        }
                        this.dropZoneElement.classList.add(DRAG_HOVER);
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }, {
                    key: 'dropElement',
                    value: function dropElement(e) {
                        this.dropZoneElement.classList.remove(DRAG_HOVER);
                        this.onSelectFiles(e);
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }, {
                    key: 'removeFiles',
                    value: function removeFiles(args) {
                        if (!this.enabled) {
                            return;
                        }
                        var selectedElement = args.target.parentElement;
                        var index = this.fileList.indexOf(selectedElement);
                        var fileData = this.filesData[index];
                        this.remove(fileData);
                        this.element.value = '';
                        this.checkActionButtonStatus();
                    }
                }, {
                    key: 'removeFilesData',
                    value: function removeFilesData(file, customTemplate) {
                        if (customTemplate) {
                            return;
                        }
                        var selectedElement = this.getLiElement(file);
                        if (isNullOrUndefined(selectedElement)) {
                            return;
                        }
                        detach(selectedElement);
                        var index = this.fileList.indexOf(selectedElement);
                        this.fileList.splice(index, 1);
                        this.filesData.splice(index, 1);
                        if (this.fileList.length === 0 && !isNullOrUndefined(this.listParent)) {
                            detach(this.listParent);
                            this.listParent = null;
                            this.removeActionButtons();
                        }
                    }
                }, {
                    key: 'removeUploadedFile',
                    value: function removeUploadedFile(file, eventArgs, custom) {
                        var _this27 = this;

                        var selectedFiles = file;
                        var ajax = new XMLHttpRequest();
                        ajax.addEventListener('load', function (e) {
                            _this27.removeCompleted(e, selectedFiles, custom);
                        }, false);
                        /* istanbul ignore next */
                        ajax.addEventListener('error', function (e) {
                            _this27.removeFailed(e, selectedFiles, custom);
                        }, false);
                        ajax.open('POST', this.asyncSettings.removeUrl);
                        eventArgs.currentRequest = ajax;
                        this.trigger('removing', eventArgs);
                        /* istanbul ignore next */
                        if (eventArgs.cancel) {
                            return;
                        }
                        var name = this.element.getAttribute('name');
                        var formData = new FormData();
                        formData.append(name, selectedFiles.rawFile);
                        this.updateFormData(formData, eventArgs.customFormData);
                        ajax.send(formData);
                    }
                }, {
                    key: 'removeCompleted',
                    value: function removeCompleted(e, files, customTemplate) {
                        var args = {
                            e: e, operation: 'remove', file: this.updateStatus(files, this.localizedTexts('removedSuccessMessage'), '2')
                        };
                        this.trigger('success', args);
                        this.removeFilesData(files, customTemplate);
                        var index = this.uploadedFilesData.indexOf(files);
                        this.uploadedFilesData.splice(index, 1);
                        this.trigger('change', { files: this.uploadedFilesData });
                    }
                }, {
                    key: 'removeFailed',
                    value: function removeFailed(e, files, customTemplate) {
                        var args = {
                            e: e, operation: 'remove', file: this.updateStatus(files, this.localizedTexts('removedFailedMessage'), '0')
                        };
                        if (!customTemplate) {
                            var index = this.filesData.indexOf(files);
                            var rootElement = this.fileList[index];
                            if (rootElement) {
                                var statusElement = rootElement.querySelector('.' + STATUS);
                                rootElement.classList.remove(UPLOAD_SUCCESS);
                                statusElement.classList.remove(UPLOAD_SUCCESS);
                                rootElement.classList.add(UPLOAD_FAILED);
                                statusElement.classList.add(UPLOAD_FAILED);
                            }
                            this.checkActionButtonStatus();
                        }
                        this.trigger('failure', args);
                    }
                }, {
                    key: 'onSelectFiles',
                    value: function onSelectFiles(args) {
                        if (!this.enabled) {
                            return;
                        }
                        var fileData = [];
                        var targetFiles = void 0;
                        if (args.type === 'drop') {
                            var files = args.dataTransfer.files;
                            targetFiles = this.multiple ? this.sortFileList(files) : [files[0]];
                        } else {
                            targetFiles = [].slice.call(args.target.files);
                        }
                        if (!this.multiple) {
                            this.clearData();
                            targetFiles = [targetFiles[0]];
                        }
                        for (var i = 0; i < targetFiles.length; i++) {
                            var file = targetFiles[i];
                            var _eventArgs = {
                                name: file.name,
                                rawFile: file,
                                size: file.size,
                                status: this.localizedTexts('readyToUploadMessage'),
                                type: this.getFileType(file.name),
                                validationMessages: this.validatedFileSize(file.size),
                                statusCode: '1'
                            };
                            _eventArgs.status = _eventArgs.validationMessages.minSize !== '' ? this.localizedTexts('invalidMinFileSize') : _eventArgs.validationMessages.maxSize !== '' ? this.localizedTexts('invalidMaxFileSize') : _eventArgs.status;
                            if (_eventArgs.validationMessages.minSize !== '' || _eventArgs.validationMessages.maxSize !== '') {
                                _eventArgs.statusCode = '0';
                            }
                            fileData.push(_eventArgs);
                        }
                        var eventArgs = {
                            cancel: false,
                            filesData: fileData,
                            isModified: false,
                            modifiedFilesData: [],
                            progressInterval: ''
                        };
                        if (args.type === 'drop') {
                            fileData = this.checkExtension(fileData);
                        }
                        this.trigger('selected', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        if (eventArgs.isModified && eventArgs.modifiedFilesData.length > 0) {
                            var dataFiles = this.checkExtension(eventArgs.modifiedFilesData);
                            this.updateSortedFileList(dataFiles);
                            if (!this.isForm) {
                                this.checkAutoUpload(dataFiles);
                            }
                            this.filesData = dataFiles;
                        } else {
                            this.createFileList(fileData);
                            this.filesData = this.filesData.concat(fileData);
                            if (!this.isForm) {
                                this.checkAutoUpload(fileData);
                            }
                        }
                        if (!isNullOrUndefined(eventArgs.progressInterval) && eventArgs.progressInterval !== '') {
                            this.progressInterval = eventArgs.progressInterval;
                        }
                    }
                }, {
                    key: 'clearData',
                    value: function clearData() {
                        if (!isNullOrUndefined(this.listParent)) {
                            detach(this.listParent);
                            this.listParent = null;
                        }
                        if (Browser.info.name !== 'msie') {
                            this.element.value = '';
                        }
                        this.fileList = [];
                        this.filesData = [];
                        this.removeActionButtons();
                    }
                }, {
                    key: 'updateSortedFileList',
                    value: function updateSortedFileList(filesData) {
                        var previousListClone = createElement('div', { id: 'clonewrapper' });
                        var added = -1;
                        var removedList = void 0;
                        if (this.listParent) {
                            for (var i = 0; i < this.listParent.querySelectorAll('li').length; i++) {
                                var liElement = this.listParent.querySelectorAll('li')[i];
                                previousListClone.appendChild(liElement.cloneNode(true));
                            }
                            removedList = this.listParent.querySelectorAll('li');
                            var _iteratorNormalCompletion19 = true;
                            var _didIteratorError19 = false;
                            var _iteratorError19 = undefined;

                            try {
                                for (var _iterator19 = removedList[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                                    var item = _step19.value;

                                    detach(item);
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

                            this.removeActionButtons();
                            var oldList = [].slice.call(previousListClone.childNodes);
                            detach(this.listParent);
                            this.listParent = null;
                            this.fileList = [];
                            this.createParentUL();
                            for (var index = 0; index < filesData.length; index++) {
                                for (var j = 0; j < this.filesData.length; j++) {
                                    if (this.filesData[j].name === filesData[index].name) {
                                        this.listParent.appendChild(oldList[j]);
                                        EventHandler.add(oldList[j].querySelector('.e-icons'), 'click', this.removeFiles, this);
                                        this.fileList.push(oldList[j]);
                                        added = index;
                                    }
                                }
                                if (added !== index) {
                                    this.createFileList([filesData[index]]);
                                }
                            }
                        } else {
                            this.createFileList(filesData);
                        }
                    }
                }, {
                    key: 'checkExtension',
                    value: function checkExtension(files) {
                        var dropFiles = files;
                        if (this.allowedExtensions !== '') {
                            var allowedExtensions = [];
                            var extensions = this.allowedExtensions.split(',');
                            var _iteratorNormalCompletion20 = true;
                            var _didIteratorError20 = false;
                            var _iteratorError20 = undefined;

                            try {
                                for (var _iterator20 = extensions[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                                    var extension = _step20.value;

                                    allowedExtensions.push(extension.trim().toLocaleLowerCase());
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

                            for (var i = 0; i < files.length; i++) {
                                if (allowedExtensions.indexOf(('.' + files[i].type).toLocaleLowerCase()) === -1) {
                                    files[i].status = this.localizedTexts('invalidFileType');
                                    files[i].statusCode = '0';
                                }
                            }
                        }
                        return dropFiles;
                    }
                }, {
                    key: 'validatedFileSize',
                    value: function validatedFileSize(fileSize) {
                        var minSizeError = '';
                        var maxSizeError = '';
                        if (fileSize < this.minFileSize) {
                            minSizeError = this.localizedTexts('invalidMinFileSize');
                        } else if (fileSize > this.maxFileSize) {
                            maxSizeError = this.localizedTexts('invalidMaxFileSize');
                        } else {
                            minSizeError = '';
                            maxSizeError = '';
                        }
                        var errorMessage = { minSize: minSizeError, maxSize: maxSizeError };
                        return errorMessage;
                    }
                }, {
                    key: 'createCustomfileList',
                    value: function createCustomfileList(fileData) {
                        this.createParentUL();
                        var _iteratorNormalCompletion21 = true;
                        var _didIteratorError21 = false;
                        var _iteratorError21 = undefined;

                        try {
                            for (var _iterator21 = fileData[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                                var listItem = _step21.value;

                                var liElement = createElement('li', { className: FILE, attrs: { 'data-file-name': listItem.name } });
                                this.uploadTemplateFn = this.templateComplier(this.template);
                                var length = this.uploadTemplateFn(listItem).length;
                                for (var i = 0; i < length; i++) {
                                    liElement.appendChild(this.uploadTemplateFn(listItem)[i]);
                                }
                                this.listParent.appendChild(liElement);
                                this.fileList.push(liElement);
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
                    key: 'createParentUL',
                    value: function createParentUL() {
                        if (isNullOrUndefined(this.listParent)) {
                            this.listParent = createElement('ul', { className: LIST_PARENT });
                            this.uploadWrapper.appendChild(this.listParent);
                            this.listParent.style.display = this.showFileList ? 'block' : 'none';
                        }
                    }
                }, {
                    key: 'createFileList',
                    value: function createFileList(fileData) {
                        this.createParentUL();
                        if (this.template !== '' && !isNullOrUndefined(this.template)) {
                            this.createCustomfileList(fileData);
                        } else {
                            var _iteratorNormalCompletion22 = true;
                            var _didIteratorError22 = false;
                            var _iteratorError22 = undefined;

                            try {
                                for (var _iterator22 = fileData[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                                    var listItem = _step22.value;

                                    var liElement = createElement('li', { className: FILE, attrs: { 'data-file-name': listItem.name } });
                                    var textContainer = createElement('span', { className: TEXT_CONTAINER });
                                    var textElement = createElement('span', { className: FILE_NAME, attrs: { 'title': listItem.name } });
                                    textElement.innerHTML = this.getFileNameOnly(listItem.name);
                                    var fileExtension = createElement('span', { className: FILE_TYPE });
                                    fileExtension.innerHTML = '.' + this.getFileType(listItem.name);
                                    if (!this.enableRtl) {
                                        textContainer.appendChild(textElement);
                                        textContainer.appendChild(fileExtension);
                                    } else {
                                        var rtlContainer = createElement('span', { className: RTL_CONTAINER });
                                        rtlContainer.appendChild(fileExtension);
                                        rtlContainer.appendChild(textElement);
                                        textContainer.appendChild(rtlContainer);
                                    }
                                    var fileSize = createElement('span', { className: FILE_SIZE });
                                    fileSize.innerHTML = this.bytesToSize(listItem.size);
                                    textContainer.appendChild(fileSize);
                                    var statusElement = createElement('span', { className: STATUS });
                                    textContainer.appendChild(statusElement);
                                    statusElement.innerHTML = listItem.status;
                                    liElement.appendChild(textContainer);
                                    var iconElement = createElement('span', { className: ' e-icons', attrs: { 'tabindex': '-1' } });
                                    if (Browser.info.name === 'msie') {
                                        /* istanbul ignore next */
                                        iconElement.classList.add('e-msie');
                                    }
                                    if (listItem.statusCode !== '2') {
                                        iconElement.setAttribute('title', this.localizedTexts('remove'));
                                    } else {
                                        iconElement.setAttribute('title', this.localizedTexts('delete'));
                                    }
                                    liElement.appendChild(iconElement);
                                    EventHandler.add(iconElement, 'click', this.removeFiles, this);
                                    if (listItem.statusCode === '2') {
                                        statusElement.classList.add(UPLOAD_SUCCESS);
                                        iconElement.classList.add(REMOVE_ICON);
                                    } else if (listItem.statusCode !== '1') {
                                        statusElement.classList.remove(UPLOAD_SUCCESS);
                                        statusElement.classList.add(VALIDATION_FAILS);
                                    }
                                    if (this.autoUpload && listItem.statusCode === '1' && this.asyncSettings.saveUrl !== '') {
                                        /* istanbul ignore next */
                                        statusElement.innerHTML = '';
                                    }
                                    if (!iconElement.classList.contains(REMOVE_ICON)) {
                                        iconElement.classList.add(CLEAR_ICON);
                                    }
                                    this.listParent.appendChild(liElement);
                                    this.fileList.push(liElement);
                                    this.truncateName(textElement);
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
                    }
                }, {
                    key: 'truncateName',
                    value: function truncateName(name) {
                        var nameElement = name;
                        var text = void 0;
                        if (nameElement.offsetWidth < nameElement.scrollWidth) {
                            text = nameElement.textContent;
                            nameElement.dataset.tail = text.slice(text.length - 10);
                        }
                    }
                }, {
                    key: 'getFileType',
                    value: function getFileType(name) {
                        var extension = void 0;
                        var index = name.lastIndexOf('.');
                        if (index >= 0) {
                            extension = name.substring(index + 1);
                        }
                        return extension ? extension : '';
                    }
                }, {
                    key: 'getFileNameOnly',
                    value: function getFileNameOnly(name) {
                        var type = this.getFileType(name);
                        var names = name.split('.' + type);
                        return type = names[0];
                    }
                }, {
                    key: 'setInitialAttributes',
                    value: function setInitialAttributes() {
                        if (this.initialAttr.accept) {
                            this.element.setAttribute('accept', this.initialAttr.accept);
                        }
                        if (this.initialAttr.disabled) {
                            this.element.setAttribute('disabled', 'disabled');
                        }
                        if (this.initialAttr.multiple) {
                            var newAttr = document.createAttribute('multiple');
                            this.element.setAttributeNode(newAttr);
                        }
                    }
                }, {
                    key: 'filterfileList',
                    value: function filterfileList(files) {
                        var filterFiles = [];
                        var li = void 0;
                        for (var i = 0; i < files.length; i++) {
                            li = this.getLiElement(files[i]);
                            if (!li.classList.contains(UPLOAD_SUCCESS)) {
                                filterFiles.push(files[i]);
                            }
                        }
                        return filterFiles;
                    }
                }, {
                    key: 'updateStatus',
                    value: function updateStatus(files, status, statusCode) {
                        if (!(status === '' || isNullOrUndefined(status)) && !(statusCode === '' || isNullOrUndefined(statusCode))) {
                            files.status = status;
                            files.statusCode = statusCode;
                        }
                        var li = this.getLiElement(files);
                        if (!isNullOrUndefined(li)) {
                            if (!isNullOrUndefined(li.querySelector('.' + STATUS)) && !(status === '' || isNullOrUndefined(status))) {
                                li.querySelector('.' + STATUS).textContent = status;
                            }
                        }
                        return files;
                    }
                }, {
                    key: 'getLiElement',
                    value: function getLiElement(files) {
                        var liElements = [];
                        var li = void 0;
                        if (this.uploadWrapper) {
                            liElements = this.uploadWrapper.querySelectorAll('.' + LIST_PARENT + '> li');
                            for (var i = 0; i < liElements.length; i++) {
                                if (liElements[i].getAttribute('data-file-name') === files.name) {
                                    li = liElements[i];
                                }
                            }
                        }
                        return li;
                    }
                }, {
                    key: 'createProgressBar',
                    value: function createProgressBar(liElement) {
                        var progressbarWrapper = createElement('span', { className: PROGRESS_WRAPPER });
                        var progressBar = createElement('progressbar', { className: PROGRESSBAR, attrs: { value: '0', max: '100' } });
                        var progressbarInnerWrapper = createElement('span', { className: PROGRESS_INNER_WRAPPER });
                        progressBar.setAttribute('style', 'width: 0%');
                        var progressbarText = createElement('span', { className: PROGRESSBAR_TEXT });
                        progressbarText.textContent = '0%';
                        progressbarInnerWrapper.appendChild(progressBar);
                        progressbarWrapper.appendChild(progressbarInnerWrapper);
                        progressbarWrapper.appendChild(progressbarText);
                        liElement.querySelector('.' + TEXT_CONTAINER).appendChild(progressbarWrapper);
                    }
                }, {
                    key: 'updateProgressbar',
                    value: function updateProgressbar(e, li) {
                        if (!isNaN(Math.round(e.loaded / e.total * 100)) && !isNullOrUndefined(li.querySelector('.' + PROGRESSBAR))) {
                            if (!isNullOrUndefined(this.progressInterval) && this.progressInterval !== '') {
                                var value = Math.round(e.loaded / e.total * 100) % parseInt(this.progressInterval, 10);
                                if (value === 0 || value === 100) {
                                    this.changeProgressValue(li, Math.round(e.loaded / e.total * 100).toString() + '%');
                                }
                            } else {
                                this.changeProgressValue(li, Math.round(e.loaded / e.total * 100).toString() + '%');
                            }
                        }
                    }
                }, {
                    key: 'changeProgressValue',
                    value: function changeProgressValue(li, progressValue) {
                        li.querySelector('.' + PROGRESSBAR).setAttribute('style', 'width:' + progressValue);
                        li.querySelector('.' + PROGRESSBAR_TEXT).textContent = progressValue;
                    }
                }, {
                    key: 'uploadInProgress',
                    value: function uploadInProgress(e, files, customUI) {
                        var li = this.getLiElement(files);
                        if (isNullOrUndefined(li) && (!customUI || isNullOrUndefined(customUI))) {
                            /* istanbul ignore next */
                            return;
                        }
                        if (!isNullOrUndefined(li)) {
                            if (!(li.querySelectorAll('.' + PROGRESS_WRAPPER).length > 0) && li.querySelector('.' + STATUS)) {
                                li.querySelector('.' + STATUS).classList.add(UPLOAD_INPROGRESS);
                                this.createProgressBar(li);
                                this.updateProgressBarClasses(li, UPLOAD_INPROGRESS);
                            }
                            this.updateProgressbar(e, li);
                            if (!isNullOrUndefined(li.querySelector('.e-icons'))) {
                                li.querySelector('.e-icons').removeAttribute('title');
                                li.querySelector('.e-icons').classList.add(UPLOAD_INPROGRESS);
                            }
                        }
                        var args = { e: e, operation: 'upload', file: this.updateStatus(files, this.localizedTexts('inProgress'), '3') };
                        this.trigger('progress', args);
                    }
                }, {
                    key: 'uploadComplete',
                    value: function uploadComplete(e, files, customUI) {
                        var status = e.target;
                        if (status.readyState === 4 && status.status === 200) {
                            var li = this.getLiElement(files);
                            if (isNullOrUndefined(li) && (!customUI || isNullOrUndefined(customUI))) {
                                return;
                            }
                            if (!isNullOrUndefined(li)) {
                                this.updateProgressBarClasses(li, UPLOAD_SUCCESS);
                                this.removeProgressbar(li, 'success');
                                if (!isNullOrUndefined(li.querySelector('.' + CLEAR_ICON))) {
                                    li.querySelector('.' + CLEAR_ICON).classList.add(REMOVE_ICON);
                                    li.querySelector('.' + CLEAR_ICON).setAttribute('title', this.localizedTexts('delete'));
                                    li.querySelector('.' + CLEAR_ICON).classList.remove(CLEAR_ICON);
                                }
                                if (!isNullOrUndefined(li.querySelector('.e-icons'))) {
                                    li.querySelector('.e-icons').classList.remove(UPLOAD_INPROGRESS);
                                    li.querySelector('.e-icons').setAttribute('title', this.localizedTexts('delete'));
                                }
                            }
                            var args = { e: e, operation: 'upload', file: this.updateStatus(files, this.localizedTexts('uploadSuccessMessage'), '2') };
                            this.trigger('success', args);
                            this.uploadedFilesData.push(files);
                            this.trigger('change', { files: this.uploadedFilesData });
                            this.checkActionButtonStatus();
                        } else {
                            this.uploadFailed(e, files);
                        }
                    }
                }, {
                    key: 'uploadFailed',
                    value: function uploadFailed(e, files) {
                        var li = this.getLiElement(files);
                        var args = { e: e, operation: 'upload', file: this.updateStatus(files, this.localizedTexts('uploadFailedMessage'), '0') };
                        if (!isNullOrUndefined(li)) {
                            this.updateProgressBarClasses(li, UPLOAD_FAILED);
                            this.removeProgressbar(li, 'failure');
                            li.querySelector('.' + CLEAR_ICON).setAttribute('title', this.localizedTexts('remove'));
                            li.querySelector('.e-icons').classList.remove(UPLOAD_INPROGRESS);
                        }
                        this.trigger('failure', args);
                        this.checkActionButtonStatus();
                    }
                }, {
                    key: 'updateProgressBarClasses',
                    value: function updateProgressBarClasses(li, className) {
                        var progressBar = li.querySelector('.' + PROGRESSBAR);
                        if (!isNullOrUndefined(progressBar)) {
                            progressBar.classList.add(className);
                        }
                    }
                }, {
                    key: 'removeProgressbar',
                    value: function removeProgressbar(li, callType) {
                        var _this28 = this;

                        if (!isNullOrUndefined(li.querySelector('.' + PROGRESS_WRAPPER))) {
                            this.progressAnimation = new Animation({ duration: 1250 });
                            this.progressAnimation.animate(li.querySelector('.' + PROGRESS_WRAPPER), { name: 'FadeOut' });
                            this.progressAnimation.animate(li.querySelector('.' + PROGRESSBAR_TEXT), { name: 'FadeOut' });
                            setTimeout(function () {
                                _this28.animateProgressBar(li, callType);
                            }, 750);
                        }
                    }
                }, {
                    key: 'animateProgressBar',
                    value: function animateProgressBar(li, callType) {
                        if (callType === 'success') {
                            li.classList.add(UPLOAD_SUCCESS);
                            if (!isNullOrUndefined(li.querySelector('.' + STATUS))) {
                                li.querySelector('.' + STATUS).classList.remove(UPLOAD_INPROGRESS);
                                this.progressAnimation.animate(li.querySelector('.' + STATUS), { name: 'FadeIn' });
                                li.querySelector('.' + STATUS).classList.add(UPLOAD_SUCCESS);
                            }
                        } else {
                            if (!isNullOrUndefined(li.querySelector('.' + STATUS))) {
                                li.querySelector('.' + STATUS).classList.remove(UPLOAD_INPROGRESS);
                                this.progressAnimation.animate(li.querySelector('.' + STATUS), { name: 'FadeIn' });
                                li.querySelector('.' + STATUS).classList.add(UPLOAD_FAILED);
                            }
                        }
                        detach(li.querySelector('.' + PROGRESS_WRAPPER));
                    }
                }, {
                    key: 'setExtensions',
                    value: function setExtensions(extensions) {
                        this.element.setAttribute('accept', extensions);
                    }
                }, {
                    key: 'templateComplier',
                    value: function templateComplier(uploadTemplate) {
                        if (uploadTemplate) {
                            try {
                                if (document.querySelectorAll(uploadTemplate).length) {
                                    return compile(document.querySelector(uploadTemplate).innerHTML.trim());
                                }
                            } catch (exception) {
                                return compile(uploadTemplate);
                            }
                        }
                        return undefined;
                    }
                }, {
                    key: 'setRTL',
                    value: function setRTL() {
                        this.enableRtl ? addClass([this.uploadWrapper], RTL) : removeClass([this.uploadWrapper], RTL);
                    }
                }, {
                    key: 'localizedTexts',
                    value: function localizedTexts(localeText) {
                        this.l10n.setLocale(this.locale);
                        return this.l10n.getConstant(localeText);
                    }
                }, {
                    key: 'setControlStatus',
                    value: function setControlStatus() {
                        if (!this.enabled) {
                            this.uploadWrapper.classList.add(DISABLED);
                            this.element.setAttribute('disabled', 'disabled');
                            this.browseButton.setAttribute('disabled', 'disabled');
                            if (!isNullOrUndefined(this.clearButton)) {
                                this.clearButton.setAttribute('disabled', 'disabled');
                            }
                            if (!isNullOrUndefined(this.uploadButton)) {
                                this.uploadButton.setAttribute('disabled', 'disabled');
                            }
                        } else {
                            if (this.uploadWrapper.classList.contains(DISABLED)) {
                                this.uploadWrapper.classList.remove(DISABLED);
                            }
                            if (!isNullOrUndefined(this.browseButton) && this.element.hasAttribute('disabled')) {
                                this.element.removeAttribute('disabled');
                                this.browseButton.removeAttribute('disabled');
                            }
                            if (!isNullOrUndefined(this.clearButton) && this.clearButton.hasAttribute('disabled')) {
                                this.clearButton.removeAttribute('disabled');
                            }
                            if (!isNullOrUndefined(this.uploadButton) && this.uploadButton.hasAttribute('disabled')) {
                                this.uploadButton.hasAttribute('disabled');
                            }
                        }
                    }
                }, {
                    key: 'checkHTMLAttributes',
                    value: function checkHTMLAttributes() {
                        if (this.element.hasAttribute('accept')) {
                            this.allowedExtensions = this.element.getAttribute('accept');
                            this.initialAttr.accept = this.allowedExtensions;
                        }
                        if (this.element.hasAttribute('multiple')) {
                            this.multiple = true;
                            this.initialAttr.multiple = true;
                        }
                        if (this.element.hasAttribute('disabled')) {
                            this.enabled = false;
                            this.initialAttr.disabled = true;
                        }
                    }
                }, {
                    key: 'updateFormData',
                    value: function updateFormData(formData, customData) {
                        if (customData.length > 0 && customData[0]) {
                            for (var i = 0; i < customData.length; i++) {
                                var data = customData[i];
                                // tslint:disable-next-line
                                formData.append(Object.keys(data)[i], Object.values(data)[i]);
                            }
                        }
                    }
                }, {
                    key: 'bytesToSize',
                    value: function bytesToSize(bytes) {
                        var i = -1;
                        if (!bytes) {
                            return '0.0 KB';
                        }
                        do {
                            bytes = bytes / 1000;
                            i++;
                        } while (bytes > 99);
                        if (i >= 2) {
                            bytes = bytes * 1000;
                            i = 1;
                        }
                        return Math.max(bytes, 0).toFixed(1) + ' ' + ['KB', 'MB'][i];
                    }
                }, {
                    key: 'sortFileList',
                    value: function sortFileList(filesData) {
                        var files = filesData;
                        var fileNames = [];
                        for (var i = 0; i < files.length; i++) {
                            fileNames.push(files[i].name);
                        }
                        var sortedFileNames = fileNames.sort();
                        var sortedFilesData = [];
                        var _iteratorNormalCompletion23 = true;
                        var _didIteratorError23 = false;
                        var _iteratorError23 = undefined;

                        try {
                            for (var _iterator23 = sortedFileNames[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                                var name = _step23.value;

                                for (var _i6 = 0; _i6 < files.length; _i6++) {
                                    if (name === files[_i6].name) {
                                        sortedFilesData.push(files[_i6]);
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

                        return sortedFilesData;
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.element.value = null;
                        this.clearAll();
                        this.unWireEvents();
                        this.unBindDropEvents();
                        if (this.multiple) {
                            this.element.removeAttribute('multiple');
                        }
                        if (!this.enabled) {
                            this.element.removeAttribute('disabled');
                        }
                        this.element.removeAttribute('accept');
                        this.setInitialAttributes();
                        this.uploadWrapper.parentElement.appendChild(this.cloneElement);
                        this.cloneElement.classList.remove('e-control', ROOT$2);
                        detach(this.uploadWrapper);
                        this.uploadWrapper = null;
                        _get(Uploader.prototype.__proto__ || Object.getPrototypeOf(Uploader.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'upload',
                    value: function upload(files, custom) {
                        var _this29 = this;

                        var selectedFiles = [];
                        if (this.asyncSettings.saveUrl === '' || isNullOrUndefined(this.asyncSettings.saveUrl)) {
                            return;
                        }
                        if (!custom || isNullOrUndefined(custom)) {
                            if (!this.multiple) {
                                var file = [];
                                file.push(files[0]);
                                selectedFiles = this.filterfileList(file);
                            } else {
                                selectedFiles = this.filterfileList(files);
                            }
                        } else {
                            selectedFiles = files;
                        }

                        var _loop = function _loop(i) {
                            var ajax = new XMLHttpRequest();
                            ajax.addEventListener('load', function (e) {
                                _this29.uploadComplete(e, selectedFiles[i], custom);
                            }, false);
                            /* istanbul ignore next */
                            ajax.addEventListener('error', function (e) {
                                _this29.uploadFailed(e, selectedFiles[i]);
                            }, false);
                            ajax.upload.addEventListener('progress', function (e) {
                                _this29.uploadInProgress(e, selectedFiles[i], custom);
                            }, false);
                            ajax.open('POST', _this29.asyncSettings.saveUrl);
                            var formData = new FormData();
                            if (selectedFiles[i].statusCode === '1') {
                                var eventArgs = {
                                    fileData: selectedFiles[i],
                                    customFormData: [],
                                    cancel: false,
                                    currentRequest: ajax
                                };
                                _this29.trigger('uploading', eventArgs);
                                if (eventArgs.cancel) {
                                    return {
                                        v: void 0
                                    };
                                }
                                var name = _this29.element.getAttribute('name');
                                formData.append(name, selectedFiles[i].rawFile, selectedFiles[i].name);
                                _this29.updateFormData(formData, eventArgs.customFormData);
                                ajax.send(formData);
                            }
                        };

                        for (var i = 0; i < selectedFiles.length; i++) {
                            var _ret2 = _loop(i);

                            if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
                        }
                    }
                }, {
                    key: 'remove',
                    value: function remove(fileData, customTemplate) {
                        var removeFiles = [];
                        fileData = !isNullOrUndefined(fileData) ? fileData : this.filesData;
                        if (fileData instanceof Array) {
                            removeFiles = fileData;
                        } else {
                            removeFiles.push(fileData);
                        }
                        var eventArgs = {
                            cancel: false,
                            filesData: removeFiles,
                            customFormData: []
                        };
                        var removeUrl = this.asyncSettings.removeUrl;
                        var validUrl = removeUrl === '' || isNullOrUndefined(removeUrl) ? false : true;
                        var _iteratorNormalCompletion24 = true;
                        var _didIteratorError24 = false;
                        var _iteratorError24 = undefined;

                        try {
                            for (var _iterator24 = removeFiles[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                                var files = _step24.value;

                                if (files.statusCode === '2' && validUrl) {
                                    this.removeUploadedFile(files, eventArgs, customTemplate);
                                } else {
                                    this.trigger('removing', eventArgs);
                                    if (eventArgs.cancel) {
                                        return;
                                    }
                                    this.removeFilesData(files, customTemplate);
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
                }, {
                    key: 'clearAll',
                    value: function clearAll() {
                        if (isNullOrUndefined(this.listParent)) {
                            return;
                        }
                        var eventArgs = {
                            cancel: false,
                            filesData: this.filesData
                        };
                        this.trigger('clearing', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        this.clearData();
                    }
                }, {
                    key: 'getFilesData',
                    value: function getFilesData() {
                        return this.filesData;
                    }
                }]);

                return Uploader;
            }(Component));

            __decorate$4([Complex({ saveUrl: '', removeUrl: '' }, AsyncSettings)], Uploader.prototype, "asyncSettings", void 0);
            __decorate$4([Property(false)], Uploader.prototype, "enableRtl", void 0);
            __decorate$4([Property(true)], Uploader.prototype, "enabled", void 0);
            __decorate$4([Property(null)], Uploader.prototype, "template", void 0);
            __decorate$4([Property(true)], Uploader.prototype, "multiple", void 0);
            __decorate$4([Property(true)], Uploader.prototype, "autoUpload", void 0);
            __decorate$4([Complex({}, ButtonsProps)], Uploader.prototype, "buttons", void 0);
            __decorate$4([Property('')], Uploader.prototype, "allowedExtensions", void 0);
            __decorate$4([Property(0)], Uploader.prototype, "minFileSize", void 0);
            __decorate$4([Property(30000000)], Uploader.prototype, "maxFileSize", void 0);
            __decorate$4([Property(null)], Uploader.prototype, "dropArea", void 0);
            __decorate$4([Collection([{}], FilesProp)], Uploader.prototype, "files", void 0);
            __decorate$4([Property(true)], Uploader.prototype, "showFileList", void 0);
            __decorate$4([Event()], Uploader.prototype, "selected", void 0);
            __decorate$4([Event()], Uploader.prototype, "uploading", void 0);
            __decorate$4([Event()], Uploader.prototype, "success", void 0);
            __decorate$4([Event()], Uploader.prototype, "failure", void 0);
            __decorate$4([Event()], Uploader.prototype, "removing", void 0);
            __decorate$4([Event()], Uploader.prototype, "clearing", void 0);
            __decorate$4([Event()], Uploader.prototype, "progress", void 0);
            __decorate$4([Event()], Uploader.prototype, "change", void 0);
            _export('Uploader', Uploader = __decorate$4([NotifyPropertyChanges], Uploader));

            /**
             * Uploader modules
             */

            /**
             * NumericTextBox all modules
             */

            _export('NumericTextBox', NumericTextBox);

            _export('regularExpressions', regularExpressions);

            _export('createMask', createMask);

            _export('applyMask', applyMask);

            _export('wireEvents', wireEvents);

            _export('unwireEvents', unwireEvents);

            _export('unstrippedValue', unstrippedValue);

            _export('strippedValue', strippedValue);

            _export('maskInputFocusHandler', maskInputFocusHandler);

            _export('maskInputBlurHandler', maskInputBlurHandler);

            _export('maskInputDropHandler', maskInputDropHandler);

            _export('mobileRemoveFunction', mobileRemoveFunction);

            _export('setMaskValue', setMaskValue);

            _export('setElementValue', setElementValue);

            _export('maskInput', maskInput);

            _export('getVal', getVal);

            _export('getMaskedVal', getMaskedVal);

            _export('MaskUndo', MaskUndo);

            _export('MaskedTextBox', MaskedTextBox);

            _export('Input', Input);

            _export('TicksData', TicksData);

            _export('TooltipData', TooltipData);

            _export('Slider', Slider);

            _export('ErrorOption', ErrorOption);

            _export('FormValidator', FormValidator);

            _export('FilesProp', FilesProp);

            _export('ButtonsProps', ButtonsProps);

            _export('AsyncSettings', AsyncSettings);

            _export('Uploader', Uploader);
        }
    };
});

//# sourceMappingURL=ej2-inputs.es2015-compiled.js.map