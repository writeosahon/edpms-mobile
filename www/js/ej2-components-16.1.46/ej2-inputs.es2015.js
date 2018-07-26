import { Animation, Base, Browser, ChildProperty, Collection, Complex, Component, Event, EventHandler, Internationalization, KeyboardEvents, L10n, NotifyPropertyChanges, Property, addClass, attributes, classList, closest, compile, createElement, detach, extend, formatUnit, getNumericObject, getValue, isNullOrUndefined, merge, removeClass, select, selectAll, setStyleAttribute, setValue } from '@syncfusion/ej2-base';
import { Tooltip } from '@syncfusion/ej2-popups';

const CLASSNAMES = {
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
/**
 * Base for Input creation through util methods.
 */
var Input;
(function (Input) {
    function createInput(args) {
        let inputObject = { container: null, buttons: [], clearButton: null };
        if (isNullOrUndefined(args.floatLabelType) || args.floatLabelType === 'Never') {
            inputObject.container = createInputContainer(args, CLASSNAMES.INPUTGROUP, CLASSNAMES.INPUTCUSTOMTAG, 'span');
            args.element.parentNode.insertBefore(inputObject.container, args.element);
            addClass([args.element], CLASSNAMES.INPUT);
            inputObject.container.appendChild(args.element);
        }
        else {
            createFloatingInput(args, inputObject);
        }
        args.element.addEventListener('focus', function () {
            let parent = getParentNode(this);
            if (parent.classList.contains('e-input-group')) {
                parent.classList.add('e-input-focus');
            }
        });
        args.element.addEventListener('blur', function () {
            let parent = getParentNode(this);
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
            for (let i = 0; i < args.buttons.length; i++) {
                inputObject.buttons.push(appendSpan(args.buttons[i], inputObject.container));
            }
        }
        inputObject = setPropertyValue(args, inputObject);
        return inputObject;
    }
    Input.createInput = createInput;
    function _focusFn() {
        let label = getParentNode(this).getElementsByClassName('e-float-text')[0];
        addClass([label], CLASSNAMES.LABELTOP);
        if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
            removeClass([label], CLASSNAMES.LABELBOTTOM);
        }
    }
    function _blurFn() {
        let parent = getParentNode(this);
        if (parent.getElementsByTagName('input')[0].value === '') {
            let label = parent.getElementsByClassName('e-float-text')[0];
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
        let floatLinelement;
        let floatLabelElement;
        if (args.floatLabelType === 'Auto') {
            wireFloatingEvents(args.element);
        }
        if (isNullOrUndefined(inputObject.container)) {
            inputObject.container = createInputContainer(args, CLASSNAMES.FLOATINPUT, CLASSNAMES.FLOATCUSTOMTAG, 'div');
            args.element.parentNode.insertBefore(inputObject.container, args.element);
        }
        else {
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
        if (!isNullOrUndefined(args.properties) && !isNullOrUndefined(args.properties.placeholder) &&
            args.properties.placeholder !== '') {
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
            args.element.addEventListener('input', (event) => {
                updateLabelState(args.element.value, floatLabelElement);
            });
            args.element.addEventListener('blur', (event) => {
                updateLabelState(args.element.value, floatLabelElement);
            });
        }
    }
    function setPropertyValue(args, inputObject) {
        if (!isNullOrUndefined(args.properties)) {
            for (let prop of Object.keys(args.properties)) {
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
        }
        return inputObject;
    }
    function updateIconState(value, button) {
        if (value) {
            removeClass([button], CLASSNAMES.CLEARICONHIDE);
        }
        else {
            addClass([button], CLASSNAMES.CLEARICONHIDE);
        }
    }
    function updateLabelState(value, label) {
        if (value) {
            addClass([label], CLASSNAMES.LABELTOP);
            if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
                removeClass([label], CLASSNAMES.LABELBOTTOM);
            }
        }
        else {
            if (label.classList.contains(CLASSNAMES.LABELTOP)) {
                removeClass([label], CLASSNAMES.LABELTOP);
            }
            addClass([label], CLASSNAMES.LABELBOTTOM);
        }
    }
    function getParentNode(element) {
        let parentNode = element.parentNode;
        return parentNode;
    }
    /**
     * To create clear button.
     */
    function createClearButton(element, inputObject, initial) {
        let button = createElement('span', { className: CLASSNAMES.CLEARICON });
        let container = inputObject.container;
        if (!isNullOrUndefined(initial)) {
            container.appendChild(button);
        }
        else {
            let baseElement = inputObject.container.classList.contains(CLASSNAMES.FLOATINPUT) ?
                inputObject.container.querySelector('.' + CLASSNAMES.FLOATTEXT) : element;
            baseElement.insertAdjacentElement('afterend', button);
        }
        if (!isNullOrUndefined(container) &&
            container.classList.contains(CLASSNAMES.FLOATINPUT)) {
            addClass([container], CLASSNAMES.INPUTGROUP);
        }
        addClass([button], CLASSNAMES.CLEARICONHIDE);
        wireClearBtnEvents(element, button, container);
        return button;
    }
    function wireClearBtnEvents(element, button, container) {
        button.addEventListener('click', (event) => {
            if (!(element.classList.contains(CLASSNAMES.DISABLE) || element.readOnly)) {
                event.preventDefault();
                if (element !== document.activeElement) {
                    element.focus();
                }
                element.value = '';
                addClass([button], CLASSNAMES.CLEARICONHIDE);
            }
        });
        element.addEventListener('input', (event) => {
            updateIconState(element.value, button);
        });
        element.addEventListener('focus', (event) => {
            updateIconState(element.value, button);
        });
        element.addEventListener('blur', (event) => {
            setTimeout(() => { addClass([button], CLASSNAMES.CLEARICONHIDE); }, 200);
        });
    }
    function validateLabel(element, floatLabelType) {
        let parent = getParentNode(element);
        if (parent.classList.contains(CLASSNAMES.FLOATINPUT) && floatLabelType === 'Auto') {
            let label = getParentNode(element).getElementsByClassName('e-float-text')[0];
            updateLabelState(element.value, label);
        }
    }
    /**
     * To create input box contianer.
     */
    function createInputContainer(args, className, tagClass, tag) {
        let container;
        if (!isNullOrUndefined(args.customTag)) {
            container = createElement(args.customTag, { className: className });
            container.classList.add(tagClass);
        }
        else {
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
        if ((!isNullOrUndefined(floatLabelType)) && floatLabelType === 'Auto') {
            validateLabel(element, floatLabelType);
        }
        if (!isNullOrUndefined(clearButton) && clearButton) {
            let parentElement = getParentNode(element);
            let button = parentElement.getElementsByClassName(CLASSNAMES.CLEARICON)[0];
            if (element.value && parentElement.classList.contains('e-input-focus')) {
                removeClass([button], CLASSNAMES.CLEARICONHIDE);
            }
            else {
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
        let parentElement;
        parentElement = getParentNode(element);
        if (parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
            if (!isNullOrUndefined(placeholder) && placeholder !== '') {
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = placeholder;
                parentElement.classList.remove(CLASSNAMES.NOFLOATLABEL);
            }
            else {
                parentElement.classList.add(CLASSNAMES.NOFLOATLABEL);
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
            }
        }
        else {
            if (!isNullOrUndefined(placeholder) && placeholder !== '') {
                attributes(element, { 'placeholder': placeholder, 'aria-placeholder': placeholder });
            }
            else {
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
        }
        else {
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
        }
        else {
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
        let disabledAttrs = { 'disabled': 'disabled', 'aria-disabled': 'true' };
        if (isEnable) {
            element.classList.remove(CLASSNAMES.DISABLE);
            removeAttributes(disabledAttrs, element);
        }
        else {
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
        }
        else {
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
        for (let key of Object.keys(attrs)) {
            let parentElement;
            parentElement = getParentNode(element);
            if (key === 'disabled') {
                element.classList.remove(CLASSNAMES.DISABLE);
            }
            if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
                parentElement.classList.remove(CLASSNAMES.DISABLE);
            }
            if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
            }
            else {
                element.removeAttribute(key);
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
        for (let key of Object.keys(attrs)) {
            let parentElement;
            parentElement = getParentNode(element);
            if (key === 'disabled') {
                element.classList.add(CLASSNAMES.DISABLE);
            }
            if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
                parentElement.classList.add(CLASSNAMES.DISABLE);
            }
            if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = attrs[key];
            }
            else {
                element.setAttribute(key, attrs[key]);
            }
        }
    }
    Input.addAttributes = addAttributes;
    function removeFloating(input) {
        let container = input.container;
        if (!isNullOrUndefined(container) && container.classList.contains(CLASSNAMES.FLOATINPUT)) {
            let inputEle = container.querySelector('input');
            let placeholder = container.querySelector('.' + CLASSNAMES.FLOATTEXT).textContent;
            let clearButton = container.querySelector('.e-clear-icon') !== null;
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
        let container = closest(input, '.' + CLASSNAMES.INPUTGROUP);
        if (type !== 'Never') {
            let customTag = container.tagName;
            customTag = customTag !== 'DIV' && customTag !== 'SPAN' ? customTag : null;
            let args = { element: input, floatLabelType: type, customTag: customTag, properties: { placeholder: placeholder } };
            let iconEle = container.querySelector('.e-clear-icon');
            let inputObj = { container: container };
            input.classList.remove(CLASSNAMES.INPUT);
            createFloatingInput(args, inputObj);
            if (isNullOrUndefined(iconEle)) {
                iconEle = container.querySelector('.e-input-group-icon');
            }
            if (isNullOrUndefined(iconEle)) {
                container.classList.remove(CLASSNAMES.INPUTGROUP);
            }
            else {
                let floatLine = container.querySelector('.' + CLASSNAMES.FLOATLINE);
                let floatText = container.querySelector('.' + CLASSNAMES.FLOATTEXT);
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
        let button = createElement('span', { className: iconClass });
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
            let ele = this;
            setTimeout(() => { ele.classList.remove('e-input-btn-ripple'); }, 500);
        });
        return button;
    }
    Input.appendSpan = appendSpan;
})(Input || (Input = {}));

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const ROOT = 'e-control-wrapper e-numeric';
const SPINICON = 'e-input-group-icon';
const SPINUP = 'e-spin-up';
const SPINDOWN = 'e-spin-down';
const ERROR = 'e-error';
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INTREGEXP = new RegExp('/^(-)?(\d*)$/');
const DECIMALSEPARATOR = '.';
/**
 * Represents the NumericTextBox component that allows the user to enter only numeric values.
 * ```html
 * <input type='text' id="numeric"/>
 * ```
 * ```typescript
 * <script>
 *   var numericObj = new NumericTextBox({ value: 10 });
 *   numericObj.appendTo("#numeric");
 * </script>
 * ```
 */
let NumericTextBox = class NumericTextBox extends Component {
    constructor(options, element) {
        super(options, element);
    }
    preRender() {
        this.isPrevFocused = false;
        this.decimalSeparator = '.';
        this.intRegExp = new RegExp('/^(-)?(\d*)$/');
        this.isCalled = false;
        let ejInstance = getValue('ej2_instances', this.element);
        this.cloneElement = this.element.cloneNode(true);
        this.angularTagName = null;
        if (this.element.tagName === 'EJS-NUMERICTEXTBOX') {
            this.angularTagName = this.element.tagName;
            let input = createElement('input');
            let index = 0;
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
        let localeText = { incrementTitle: 'Increment value', decrementTitle: 'Decrement value', placeholder: '' };
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
    /**
     * To Initialize the control rendering
     * @private
     */
    render() {
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
    checkAttributes() {
        let attributes$$1 = ['value', 'min', 'max', 'step', 'disabled', 'readonly', 'style', 'name'];
        for (let prop of attributes$$1) {
            if (!isNullOrUndefined(this.element.getAttribute(prop))) {
                switch (prop) {
                    case 'disabled':
                        let enabled = this.element.getAttribute(prop) === 'disabled' ||
                            this.element.getAttribute(prop) === 'true' ? false : true;
                        this.setProperties({ enabled: enabled }, true);
                        break;
                    case 'readonly':
                        let readonly = this.element.getAttribute(prop) === 'readonly'
                            || this.element.getAttribute(prop) === 'true' ? true : false;
                        this.setProperties({ readonly: readonly }, true);
                        break;
                    case 'style':
                        this.inputStyle = this.element.getAttribute(prop);
                        break;
                    case 'name':
                        this.inputName = this.element.getAttribute(prop);
                        break;
                    default:
                        let value = this.instance.getNumberParser({ format: 'n' })(this.element.getAttribute(prop));
                        if ((value !== null && !isNaN(value)) || (prop === 'value')) {
                            this.setProperties(setValue(prop, value, {}), true);
                        }
                        break;
                }
            }
        }
    }
    updatePlaceholder() {
        this.setProperties({ placeholder: this.l10n.getConstant('placeholder') }, true);
    }
    initCultureFunc() {
        this.instance = new Internationalization(this.locale);
    }
    initCultureInfo() {
        this.cultureInfo.format = this.format;
        if (getValue('currency', this) !== null) {
            setValue('currency', this.currency, this.cultureInfo);
            this.setProperties({ currencyCode: this.currency }, true);
        }
    }
    /* Wrapper creation */
    createWrapper() {
        let inputObj = Input.createInput({
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
        this.hiddenInput = (createElement('input', { attrs: { type: 'hidden' } }));
        this.inputName = this.inputName !== null ? this.inputName : this.element.id;
        this.element.removeAttribute('name');
        attributes(this.hiddenInput, { 'name': this.inputName });
        this.container.insertBefore(this.hiddenInput, this.container.childNodes[1]);
        if (this.inputStyle !== null) {
            attributes(this.container, { 'style': this.inputStyle });
        }
    }
    /* Spinner creation */
    spinBtnCreation() {
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
    validateMinMax() {
        if (!(typeof (this.min) === 'number' && !isNaN(this.min))) {
            this.setProperties({ min: -(Number.MAX_VALUE) }, true);
        }
        if (!(typeof (this.max) === 'number' && !isNaN(this.max))) {
            this.setProperties({ max: Number.MAX_VALUE }, true);
        }
        if (this.decimals !== null) {
            if (this.min !== -(Number.MAX_VALUE)) {
                this.setProperties({ min: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.min)) }, true);
            }
            if (this.max !== (Number.MAX_VALUE)) {
                this.setProperties({ max: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.max)) }, true);
            }
        }
        this.setProperties({ min: this.min > this.max ? this.max : this.min }, true);
        attributes(this.element, { 'aria-valuemin': this.min.toString(), 'aria-valuemax': this.max.toString() });
    }
    formattedValue(decimals, value) {
        return this.instance.getNumberFormat({
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals, useGrouping: false
        })(value);
    }
    validateStep() {
        if (this.decimals !== null) {
            this.setProperties({ step: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.step)) }, true);
        }
    }
    action(operation, event) {
        this.isInteract = true;
        let value = this.isFocused ? this.instance.getNumberParser({ format: 'n' })(this.element.value) : this.value;
        this.changeValue(this.performAction(value, this.step, operation));
        this.raiseChangeEvent(event);
    }
    checkErrorClass() {
        if (this.isValidState) {
            removeClass([this.container], ERROR);
        }
        else {
            addClass([this.container], ERROR);
        }
        attributes(this.element, { 'aria-invalid': this.isValidState ? 'false' : 'true' });
    }
    bindClearEvent() {
        if (this.showClearButton) {
            EventHandler.add(this.inputWrapper.clearButton, 'mousedown touchstart', this.resetHandler, this);
        }
    }
    resetHandler(e) {
        e.preventDefault();
        if (!(this.inputWrapper.clearButton.classList.contains('e-clear-icon-hide'))) {
            this.clear(e);
        }
    }
    clear(event) {
        this.setProperties({ value: null }, true);
        this.setElementValue('');
    }
    wireEvents() {
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
    wireSpinBtnEvents() {
        /* bind spin button events */
        EventHandler.add(this.spinUp, Browser.touchStartEvent, this.mouseDownOnSpinner, this);
        EventHandler.add(this.spinDown, Browser.touchStartEvent, this.mouseDownOnSpinner, this);
        EventHandler.add(this.spinUp, Browser.touchEndEvent, this.mouseUpOnSpinner, this);
        EventHandler.add(this.spinDown, Browser.touchEndEvent, this.mouseUpOnSpinner, this);
        EventHandler.add(this.spinUp, Browser.touchMoveEvent, this.touchMoveOnSpinner, this);
        EventHandler.add(this.spinDown, Browser.touchMoveEvent, this.touchMoveOnSpinner, this);
    }
    unwireEvents() {
        EventHandler.remove(this.element, 'focus', this.focusIn);
        EventHandler.remove(this.element, 'blur', this.focusOut);
        EventHandler.remove(this.element, 'keydown', this.keyDownHandler);
        EventHandler.remove(this.element, 'keypress', this.keyPressHandler);
        EventHandler.remove(this.element, 'change', this.changeHandler);
        EventHandler.remove(this.element, 'paste', this.pasteHandler);
    }
    unwireSpinBtnEvents() {
        /* unbind spin button events */
        EventHandler.remove(this.spinUp, Browser.touchStartEvent, this.mouseDownOnSpinner);
        EventHandler.remove(this.spinDown, Browser.touchStartEvent, this.mouseDownOnSpinner);
        EventHandler.remove(this.spinUp, Browser.touchEndEvent, this.mouseUpOnSpinner);
        EventHandler.remove(this.spinDown, Browser.touchEndEvent, this.mouseUpOnSpinner);
        EventHandler.remove(this.spinUp, Browser.touchMoveEvent, this.touchMoveOnSpinner);
        EventHandler.remove(this.spinDown, Browser.touchMoveEvent, this.touchMoveOnSpinner);
    }
    changeHandler(event) {
        if (!this.element.value.length) {
            this.setProperties({ value: null }, true);
        }
        let parsedInput = this.instance.getNumberParser({ format: 'n' })(this.element.value);
        this.updateValue(parsedInput, event);
    }
    raiseChangeEvent(event) {
        if (this.prevValue !== this.value) {
            let eventArgs = {};
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
    pasteHandler() {
        let beforeUpdate = this.element.value;
        setTimeout(() => {
            if (!this.numericRegex().test(this.element.value)) {
                this.setElementValue(beforeUpdate);
            }
        });
    }
    keyDownHandler(event) {
        switch (event.keyCode) {
            case 38:
                event.preventDefault();
                this.action(INCREMENT, event);
                break;
            case 40:
                event.preventDefault();
                this.action(DECREMENT, event);
                break;
            default: break;
        }
        if (!this.element.value.length) {
            this.setProperties({ value: null }, true);
            this.isKeyDown = true;
            this.updateValue(this.instance.getNumberParser({ format: 'n' })(this.element.value));
            this.isKeyDown = false;
        }
    }
    ;
    performAction(value, step, operation) {
        if (value === null || isNaN(value)) {
            value = 0;
        }
        let updatedValue = operation === INCREMENT ? value + step : value - step;
        updatedValue = this.correctRounding(value, step, updatedValue);
        return this.strictMode ? this.trimValue(updatedValue) : updatedValue;
    }
    ;
    correctRounding(value, step, result) {
        let floatExp = new RegExp('[,.](.*)');
        let valueText = value.toString();
        let stepText = step.toString();
        let floatValue = floatExp.test(value.toString());
        let floatStep = floatExp.test(step.toString());
        if (floatValue || floatStep) {
            let valueCount = floatValue ? floatExp.exec(value.toString())[0].length : 0;
            let stepCount = floatStep ? floatExp.exec(step.toString())[0].length : 0;
            let max = Math.max(valueCount, stepCount);
            return value = this.roundValue(result, max);
        }
        return result;
    }
    ;
    roundValue(result, precision) {
        precision = precision || 0;
        let divide = Math.pow(10, precision);
        return result *= divide, result = Math.round(result) / divide;
    }
    ;
    updateValue(value, event) {
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
    updateCurrency(prop, propVal) {
        setValue(prop, propVal, this.cultureInfo);
        this.updateValue(this.value);
    }
    changeValue(value) {
        if (!(value || value === 0)) {
            value = null;
            this.setProperties({ value: value }, true);
        }
        else {
            let numberOfDecimals;
            let decimalPart = value.toString().split('.')[1];
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
    ;
    modifyText() {
        if (this.value || this.value === 0) {
            let value = this.formatNumber();
            let elementValue = this.isFocused ? value : this.instance.getNumberFormat(this.cultureInfo)(this.value);
            this.setElementValue(elementValue);
            attributes(this.element, { 'aria-valuenow': value });
            this.hiddenInput.value = value;
        }
        else {
            this.setElementValue('');
            this.element.removeAttribute('aria-valuenow');
            this.hiddenInput.value = null;
        }
    }
    ;
    setElementValue(val, element) {
        Input.setValue(val, (element ? element : this.element), this.floatLabelType, this.showClearButton);
    }
    validateState() {
        this.isValidState = true;
        if (this.value || this.value === 0) {
            this.isValidState = !(this.value > this.max || this.value < this.min);
        }
        this.checkErrorClass();
    }
    formatNumber() {
        let numberOfDecimals;
        let currentValue = this.value;
        let decimalPart = currentValue.toString().split('.')[1];
        numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
        if (this.decimals !== null) {
            numberOfDecimals = numberOfDecimals < this.decimals ? numberOfDecimals : this.decimals;
        }
        return this.instance.getNumberFormat({
            maximumFractionDigits: numberOfDecimals,
            minimumFractionDigits: numberOfDecimals, useGrouping: false
        })(this.value);
    }
    ;
    trimValue(value) {
        if (value > this.max) {
            return this.max;
        }
        if (value < this.min) {
            return this.min;
        }
        return value;
    }
    ;
    roundNumber(value, precision) {
        let result = value;
        let decimals = precision || 0;
        let result1 = result.toString().split('e');
        result = Math.round(Number(result1[0] + 'e' + (result1[1] ? (Number(result1[1]) + decimals) : decimals)));
        let result2 = result.toString().split('e');
        result = Number(result2[0] + 'e' + (result2[1] ? (Number(result2[1]) - decimals) : -decimals));
        return Number(result.toFixed(decimals));
    }
    ;
    cancelEvent(event) {
        event.preventDefault();
        return false;
    }
    keyPressHandler(event) {
        if (event.which === 0 || event.metaKey || event.ctrlKey || event.keyCode === 8 || event.keyCode === 13) {
            return true;
        }
        let currentChar = String.fromCharCode(event.which);
        let text = this.element.value;
        text = text.substring(0, this.element.selectionStart) + currentChar + text.substring(this.element.selectionEnd);
        if (!this.numericRegex().test(text)) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        else {
            return true;
        }
    }
    ;
    numericRegex() {
        let numericObject = getNumericObject(this.locale);
        let decimalSeparator = getValue('decimal', numericObject);
        let fractionRule = '*';
        if (decimalSeparator === DECIMALSEPARATOR) {
            decimalSeparator = '\\' + decimalSeparator;
        }
        if (this.decimals === 0) {
            return INTREGEXP;
        }
        if (this.decimals && this.validateDecimalOnType) {
            fractionRule = '{0,' + this.decimals + '}';
        }
        return new RegExp('^(-)?(((\\d+(' + decimalSeparator + '\\d' + fractionRule +
            ')?)|(' + decimalSeparator + '\\d' + fractionRule + ')))?$');
    }
    ;
    mouseWheel(event) {
        event.preventDefault();
        let delta;
        let rawEvent = event;
        if (rawEvent.wheelDelta) {
            delta = rawEvent.wheelDelta / 120;
        }
        else if (rawEvent.detail) {
            delta = -rawEvent.detail / 3;
        }
        if (delta > 0) {
            this.action(INCREMENT, event);
        }
        else if (delta < 0) {
            this.action(DECREMENT, event);
        }
        this.cancelEvent(event);
    }
    focusIn(event) {
        if (!this.enabled || this.readonly) {
            return;
        }
        this.isFocused = true;
        removeClass([this.container], ERROR);
        this.prevValue = this.value;
        if ((this.value || this.value === 0)) {
            let formatValue = this.formatNumber();
            this.setElementValue(formatValue);
            if (!this.isPrevFocused) {
                this.element.setSelectionRange(0, formatValue.length);
            }
        }
        if (!Browser.isDevice) {
            EventHandler.add(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel, this);
        }
    }
    ;
    focusOut(event) {
        if (this.isPrevFocused) {
            event.preventDefault();
            if (Browser.isDevice) {
                let value = this.element.value;
                this.element.focus();
                this.isPrevFocused = false;
                let ele = this.element;
                setTimeout(() => {
                    this.setElementValue(value, ele);
                }, 200);
            }
        }
        else {
            this.isFocused = false;
            if (!this.element.value.length) {
                this.setProperties({ value: null }, true);
            }
            let parsedInput = this.instance.getNumberParser({ format: 'n' })(this.element.value);
            this.updateValue(parsedInput);
            if (!Browser.isDevice) {
                EventHandler.remove(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel);
            }
        }
    }
    ;
    mouseDownOnSpinner(event) {
        if (this.isFocused) {
            this.isPrevFocused = true;
            event.preventDefault();
        }
        if (!this.getElementData(event)) {
            return;
        }
        let result = this.getElementData(event);
        let target = event.currentTarget;
        let action = (target.classList.contains(SPINUP)) ? INCREMENT : DECREMENT;
        EventHandler.add(target, 'mouseleave', this.mouseUpClick, this);
        this.timeOut = setInterval(() => { this.isCalled = true; this.action(action, event); }, 150);
        EventHandler.add(document, 'mouseup', this.mouseUpClick, this);
    }
    touchMoveOnSpinner(event) {
        let target = document.elementFromPoint(event.clientX, event.clientY);
        if (!(target.classList.contains(SPINICON))) {
            clearInterval(this.timeOut);
        }
    }
    mouseUpOnSpinner(event) {
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
        let target = event.currentTarget;
        let action = (target.classList.contains(SPINUP)) ? INCREMENT : DECREMENT;
        EventHandler.remove(target, 'mouseleave', this.mouseUpClick);
        if (!this.isCalled) {
            this.action(action, event);
        }
        this.isCalled = false;
        EventHandler.remove(document, 'mouseup', this.mouseUpClick);
    }
    getElementData(event) {
        if ((event.which && event.which === 3) || (event.button && event.button === 2)
            || !this.enabled || this.readonly) {
            return false;
        }
        clearInterval(this.timeOut);
        return true;
    }
    mouseUpClick(event) {
        event.stopPropagation();
        clearInterval(this.timeOut);
        this.isCalled = false;
        EventHandler.remove(this.spinUp, 'mouseleave', this.mouseUpClick);
        EventHandler.remove(this.spinDown, 'mouseleave', this.mouseUpClick);
    }
    /**
     * Increments the NumericTextBox value with the specified step value.
     * @param  {number} step - Specifies the value used to increment the NumericTextBox value.
     * if its not given then numeric value will be incremented based on the step property value.
     */
    increment(step = this.step) {
        this.changeValue(this.performAction(this.value, step, INCREMENT));
    }
    /**
     * Decrements the NumericTextBox value with specified step value.
     * @param  {number} step - Specifies the value used to decrement the NumericTextBox value.
     * if its not given then numeric value will be decremented based on the step property value.
     */
    decrement(step = this.step) {
        this.changeValue(this.performAction(this.value, step, DECREMENT));
    }
    /**
     * Removes the component from the DOM and detaches all its related event handlers.
     * Also it maintains the initial input element from the DOM.
     * @method destroy
     * @return {void}
     */
    destroy() {
        this.unwireEvents();
        detach(this.hiddenInput);
        if (this.showSpinButton) {
            this.unwireSpinBtnEvents();
            detach(this.spinUp);
            detach(this.spinDown);
        }
        this.container.parentElement.appendChild(this.cloneElement);
        detach(this.container);
        super.destroy();
    }
    /**
     * Returns the value of NumericTextBox with the format applied to the NumericTextBox.
     */
    getText() {
        return this.element.value;
    }
    /**
     * Gets the properties to be maintained in the persisted state.
     * @return {string}
     */
    getPersistData() {
        let keyEntity = ['value'];
        return this.addOnPersist(keyEntity);
    }
    /**
     * Calls internally if any of the property value is changed.
     * @private
     */
    onPropertyChanged(newProp, oldProp) {
        for (let prop of Object.keys(newProp)) {
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
                    }
                    else {
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
                    }
                    else {
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
                    let propVal = getValue(prop, newProp);
                    this.setProperties({ currencyCode: propVal }, true);
                    this.updateCurrency(prop, propVal);
                    break;
                case 'currencyCode':
                    let propValue = getValue(prop, newProp);
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
    }
    /**
     * Gets the component name
     * @private
     */
    getModuleName() {
        return 'numerictextbox';
    }
};
__decorate([
    Property('')
], NumericTextBox.prototype, "cssClass", void 0);
__decorate([
    Property(null)
], NumericTextBox.prototype, "value", void 0);
__decorate([
    Property(-(Number.MAX_VALUE))
], NumericTextBox.prototype, "min", void 0);
__decorate([
    Property(Number.MAX_VALUE)
], NumericTextBox.prototype, "max", void 0);
__decorate([
    Property(1)
], NumericTextBox.prototype, "step", void 0);
__decorate([
    Property(null)
], NumericTextBox.prototype, "width", void 0);
__decorate([
    Property(null)
], NumericTextBox.prototype, "placeholder", void 0);
__decorate([
    Property(true)
], NumericTextBox.prototype, "showSpinButton", void 0);
__decorate([
    Property(false)
], NumericTextBox.prototype, "readonly", void 0);
__decorate([
    Property(true)
], NumericTextBox.prototype, "enabled", void 0);
__decorate([
    Property(false)
], NumericTextBox.prototype, "enableRtl", void 0);
__decorate([
    Property(false)
], NumericTextBox.prototype, "showClearButton", void 0);
__decorate([
    Property(false)
], NumericTextBox.prototype, "enablePersistence", void 0);
__decorate([
    Property('n2')
], NumericTextBox.prototype, "format", void 0);
__decorate([
    Property(null)
], NumericTextBox.prototype, "decimals", void 0);
__decorate([
    Property(null)
], NumericTextBox.prototype, "currency", void 0);
__decorate([
    Property(null)
], NumericTextBox.prototype, "currencyCode", void 0);
__decorate([
    Property(true)
], NumericTextBox.prototype, "strictMode", void 0);
__decorate([
    Property(false)
], NumericTextBox.prototype, "validateDecimalOnType", void 0);
__decorate([
    Property('Never')
], NumericTextBox.prototype, "floatLabelType", void 0);
__decorate([
    Event()
], NumericTextBox.prototype, "created", void 0);
__decorate([
    Event()
], NumericTextBox.prototype, "destroyed", void 0);
__decorate([
    Event()
], NumericTextBox.prototype, "change", void 0);
NumericTextBox = __decorate([
    NotifyPropertyChanges
], NumericTextBox);

/**
 * NumericTextBox modules
 */

/**
 * MaskedTextBox base module
 */
const ERROR$1 = 'e-error';
const INPUTGROUP = 'e-input-group';
const FLOATINPUT = 'e-float-input';
const UTILMASK = 'e-utility-mask';
const TOPLABEL = 'e-label-top';
const BOTTOMLABEL = 'e-label-bottom';
/**
 * @hidden
 * Built-in masking elements collection.
 */
let regularExpressions = {
    '0': '[0-9]',
    '9': '[0-9 ]',
    '#': '[0-9 +-]',
    'L': '[A-Za-z]',
    '?': '[A-Za-z ]',
    '&': '[^\x7f ]+',
    'C': '[^\x7f]+',
    'A': '[A-Za-z0-9]',
    'a': '[A-Za-z0-9 ]',
};
/**
 * @hidden
 * Generate required masking elements to the MaskedTextBox from user mask input.
 */
function createMask() {
    attributes(this.element, { 'role': 'textbox', 'autocomplete': 'off', 'autocorrect': 'off', 'autocapitalize': 'off',
        'spellcheck': 'false', 'aria-live': 'assertive', 'aria-valuenow': '' });
    if (this.mask) {
        let splitMask = this.mask.split(']');
        for (let i = 0; i < splitMask.length; i++) {
            if (splitMask[i][splitMask[i].length - 1] === '\\') {
                splitMask[i] = splitMask[i] + ']';
                let splitInnerMask = splitMask[i].split('[');
                for (let j = 0; j < splitInnerMask.length; j++) {
                    if (splitInnerMask[j][splitInnerMask[j].length - 1] === '\\') {
                        splitInnerMask[j] = splitInnerMask[j] + '[';
                    }
                    pushIntoRegExpCollec.call(this, splitInnerMask[j]);
                }
            }
            else {
                let splitInnerMask = splitMask[i].split('[');
                if (splitInnerMask.length > 1) {
                    let chkSpace = false;
                    for (let j = 0; j < splitInnerMask.length; j++) {
                        if (splitInnerMask[j] === '\\') {
                            this.customRegExpCollec.push('[');
                            this.hiddenMask += splitInnerMask[j] + '[';
                        }
                        else if (splitInnerMask[j] === '') {
                            chkSpace = true;
                        }
                        else if ((splitInnerMask[j] !== '' && chkSpace) || j === splitInnerMask.length - 1) {
                            this.customRegExpCollec.push('[' + splitInnerMask[j] + ']');
                            this.hiddenMask += this.promptChar;
                            chkSpace = false;
                        }
                        else {
                            pushIntoRegExpCollec.call(this, splitInnerMask[j]);
                        }
                    }
                }
                else {
                    pushIntoRegExpCollec.call(this, splitInnerMask[0]);
                }
            }
        }
        this.escapeMaskValue = this.hiddenMask;
        this.promptMask = this.hiddenMask.replace(/[09?LCAa#&]/g, this.promptChar);
        if (!isNullOrUndefined(this.customCharacters)) {
            for (let i = 0; i < this.promptMask.length; i++) {
                if (!isNullOrUndefined(this.customCharacters[this.promptMask[i]])) {
                    this.promptMask = this.promptMask.replace(new RegExp(this.promptMask[i], 'g'), this.promptChar);
                }
            }
        }
        let escapeNumber = 0;
        if (this.hiddenMask.match(new RegExp(/\\/))) {
            for (let i = 0; i < this.hiddenMask.length; i++) {
                let j = 0;
                if (i >= 2) {
                    j = i;
                }
                escapeNumber = this.hiddenMask.length - this.promptMask.length;
                j = j - escapeNumber;
                if ((i > 0 && this.hiddenMask[i - 1] !== '\\') && (this.hiddenMask[i] === '>' ||
                    this.hiddenMask[i] === '<' || this.hiddenMask[i] === '|')) {
                    this.promptMask = this.promptMask.substring(0, j) +
                        this.promptMask.substring((i + 1) - escapeNumber, this.promptMask.length);
                    this.escapeMaskValue = this.escapeMaskValue.substring(0, j) +
                        this.escapeMaskValue.substring((i + 1) - escapeNumber, this.escapeMaskValue.length);
                }
                if (this.hiddenMask[i] === '\\') {
                    this.promptMask = this.promptMask.substring(0, j) + this.hiddenMask[i + 1] +
                        this.promptMask.substring((i + 2) - escapeNumber, this.promptMask.length);
                    this.escapeMaskValue = this.escapeMaskValue.substring(0, j) + this.escapeMaskValue[i + 1] +
                        this.escapeMaskValue.substring((i + 2) - escapeNumber, this.escapeMaskValue.length);
                }
            }
        }
        else {
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
    let value = '';
    let k = 0;
    let checkMask = false;
    if (!isNullOrUndefined(element) && !isNullOrUndefined(this) && element.value !== this.promptMask) {
        for (let i = 0; i < this.customRegExpCollec.length; i++) {
            if (checkMask) {
                checkMask = false;
            }
            if (this.customRegExpCollec[k] === '>' || this.customRegExpCollec[k] === '<' ||
                this.customRegExpCollec[k] === '|' || this.customRegExpCollec[k] === '\\') {
                --i;
                checkMask = true;
            }
            if (!checkMask) {
                if ((element.value[i] !== this.promptChar) && (!isNullOrUndefined(this.customRegExpCollec[k]) &&
                    ((!isNullOrUndefined(this.regExpCollec[this.customRegExpCollec[k]])) ||
                        (this.customRegExpCollec[k].length > 2 && this.customRegExpCollec[k][0] === '[' &&
                            this.customRegExpCollec[k][this.customRegExpCollec[k].length - 1] === ']') ||
                        (!isNullOrUndefined(this.customCharacters) &&
                            (!isNullOrUndefined(this.customCharacters[this.customRegExpCollec[k]]))))) && (element.value !== '')) {
                    value += element.value[i];
                }
            }
            ++k;
        }
    }
    return value;
}
function pushIntoRegExpCollec(value) {
    for (let k = 0; k < value.length; k++) {
        this.hiddenMask += value[k];
        if (value[k] !== '\\') {
            this.customRegExpCollec.push(value[k]);
        }
    }
}
function maskInputFocusHandler(event) {
    if (this.promptMask.length > 0) {
        this.focusEventArgs = { selectionStart: 0, selectionEnd: this.promptMask.length };
    }
    else {
        this.focusEventArgs = { selectionStart: 0, selectionEnd: this.element.value.length };
    }
    let eventArgs = {};
    merge(eventArgs, this.focusEventArgs);
    this.trigger('focus', eventArgs);
    this.focusEventArgs = eventArgs;
    if (this.mask) {
        this.isFocus = true;
        if (this.placeholder && this.element.value === '') {
            setElementValue.call(this, this.promptMask);
            this.element.setSelectionRange(this.focusEventArgs.selectionStart, this.focusEventArgs.selectionEnd);
            setTimeout(() => {
                this.element.setSelectionRange(this.focusEventArgs.selectionStart, this.focusEventArgs.selectionEnd);
            }, 1);
        }
        else {
            this.element.setSelectionRange(this.focusEventArgs.selectionStart, this.focusEventArgs.selectionEnd);
        }
    }
}
function maskInputBlurHandler(event) {
    if (this.mask) {
        this.isFocus = false;
        if (this.placeholder && this.element.value === this.promptMask && this.floatLabelType !== 'Always') {
            setElementValue.call(this, '');
            let labelElement = this.element.parentNode.querySelector('.e-float-text');
            if (this.floatLabelType === 'Auto' && !isNullOrUndefined(labelElement) && labelElement.classList.contains(TOPLABEL)) {
                removeClass([labelElement], TOPLABEL);
            }
        }
    }
}
function maskInputPasteHandler(event) {
    if (this.mask) {
        let sIndex = this.element.selectionStart;
        let eIndex = this.element.selectionEnd;
        let oldValue = this.element.value;
        setElementValue.call(this, '');
        setTimeout(() => {
            let value = this.element.value;
            if (this.redoCollec.length > 0 && this.redoCollec[0].value === this.element.value) {
                value = strippedValue.call(this, this.element);
            }
            setElementValue.call(this, oldValue);
            this.element.selectionStart = sIndex;
            this.element.selectionEnd = eIndex;
            let i = 0;
            this.maskKeyPress = true;
            do {
                validateValue.call(this, value[i], false, null);
                ++i;
            } while (i < value.length);
            this.maskKeyPress = false;
            if (this.element.value === oldValue) {
                let i = 0;
                this.maskKeyPress = true;
                do {
                    validateValue.call(this, value[i], false, null);
                    ++i;
                } while (i < value.length);
                this.maskKeyPress = false;
            }
        }, 1);
    }
}
function maskInputCutHandler(event) {
    if (this.mask) {
        let sIndex = this.element.selectionStart;
        let eIndex = this.element.selectionEnd;
        this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd });
        let value = this.element.value.substring(0, sIndex) + this.promptMask.substring(sIndex, eIndex) +
            this.element.value.substring(eIndex);
        setTimeout(() => {
            setElementValue.call(this, value);
            this.element.selectionStart = this.element.selectionEnd = sIndex;
        }, 0);
    }
}
function maskInputDropHandler(event) {
    event.preventDefault();
}
function maskInputKeyDownHandler(event) {
    if (this.mask) {
        if (event.keyCode !== 229) {
            if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
                event.preventDefault();
            }
            removeMaskInputValues.call(this, event);
        }
        else {
            setTimeout(() => {
                removeMaskInputValues.call(this, event);
            }, 0);
        }
        let startValue = this.element.value;
        if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
            let collec;
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
            }
            else if (event.keyCode === 89 && this.redoCollec.length > 0 && startValue !== this.redoCollec[0].value) {
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
    let collec;
    let sIndex = this.element.selectionStart;
    let eIndex = this.element.selectionEnd;
    if (this.redoCollec.length > 0) {
        collec = this.redoCollec[0];
        setElementValue.call(this, collec.value);
        if ((collec.startIndex - sIndex) === 1) {
            this.element.selectionStart = collec.startIndex;
            this.element.selectionEnd = collec.endIndex;
        }
        else {
            this.element.selectionStart = sIndex + 1;
            this.element.selectionEnd = eIndex + 1;
        }
    }
    else {
        setElementValue.call(this, this.promptMask);
        this.element.selectionStart = this.element.selectionEnd = sIndex;
    }
}
function removeMaskInputValues(event) {
    let isRemove = false;
    let oldEventVal;
    let isDeleted = false;
    if (this.element.value.length < this.promptMask.length) {
        isRemove = true;
        mobileRemoveFunction.call(this);
        oldEventVal = this.element.value;
    }
    let initStartIndex = this.element.selectionStart;
    let initEndIndex = this.element.selectionEnd;
    let startIndex = this.element.selectionStart;
    let endIndex = this.element.selectionEnd;
    let maskValue = this.hiddenMask.replace(/[>|\\<]/g, '');
    let curMask = maskValue[startIndex - 1];
    let parentElement = this.element.parentNode;
    if (isRemove || event.keyCode === 8 || event.keyCode === 46) {
        this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: endIndex });
        let multipleDel = false;
        if (startIndex > 0 || ((event.keyCode === 8 || event.keyCode === 46) && startIndex < this.element.value.length
            && ((this.element.selectionEnd - startIndex) !== this.element.value.length))) {
            let index = startIndex;
            if (startIndex !== endIndex) {
                startIndex = endIndex;
                if (event.keyCode === 46) {
                    multipleDel = true;
                }
            }
            else if (event.keyCode === 46) {
                ++index;
            }
            else {
                --index;
            }
            for (let k = startIndex; (event.keyCode === 8 || isRemove || multipleDel) ? k > index : k < index; (event.keyCode === 8 || isRemove || multipleDel) ? k-- : k++) {
                for (let i = startIndex; (event.keyCode === 8 || isRemove || multipleDel) ? i > 0 : i < this.element.value.length; (event.keyCode === 8 || isRemove || multipleDel) ? i-- : i++) {
                    let sIndex;
                    if (((event.keyCode === 8 || multipleDel) && ((initStartIndex !== initEndIndex && initStartIndex !== startIndex) ||
                        (initStartIndex === initEndIndex))) || isRemove) {
                        curMask = maskValue[i - 1];
                        sIndex = startIndex - 1;
                    }
                    else {
                        curMask = maskValue[i];
                        sIndex = startIndex;
                        ++startIndex;
                    }
                    let oldValue = this.element.value[sIndex];
                    if ((isNullOrUndefined(this.regExpCollec[curMask]) && (!isNullOrUndefined(this.customCharacters)
                        && isNullOrUndefined(this.customCharacters[curMask]))
                        && ((this.hiddenMask[sIndex] !== this.promptChar && this.customRegExpCollec[sIndex][0] !== '['
                            && this.customRegExpCollec[sIndex][this.customRegExpCollec[sIndex].length - 1] !== ']')))
                        || (this.promptMask[sIndex] !== this.promptChar && isNullOrUndefined(this.customCharacters))) {
                        this.element.selectionStart = this.element.selectionEnd = sIndex;
                        event.preventDefault();
                        if (event.keyCode === 46 && !multipleDel) {
                            ++this.element.selectionStart;
                        }
                    }
                    else {
                        let value = this.element.value;
                        let prompt = this.promptChar;
                        let elementValue = value.substring(0, sIndex) + prompt + value.substring(startIndex, value.length);
                        setElementValue.call(this, elementValue);
                        event.preventDefault();
                        this.element.selectionStart = this.element.selectionEnd = sIndex;
                        isDeleted = true;
                    }
                    startIndex = this.element.selectionStart;
                    if ((!isDeleted && event.keyCode === 8) || multipleDel || (!isDeleted && !(event.keyCode === 46))) {
                        sIndex = startIndex - 1;
                    }
                    else {
                        sIndex = startIndex;
                        isDeleted = false;
                    }
                    oldValue = this.element.value[sIndex];
                    if (((initStartIndex !== initEndIndex) && (this.element.selectionStart === initStartIndex))
                        || (this.promptMask[sIndex] === this.promptChar) || ((oldValue !== this.promptMask[sIndex]) &&
                        (this.promptMask[sIndex] !== this.promptChar) && !isNullOrUndefined(this.customCharacters))) {
                        break;
                    }
                }
            }
        }
        if (this.element.selectionStart === 0 && (this.element.selectionEnd === this.element.value.length)) {
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
        let oldValue = this.element.value;
        if ((!event.ctrlKey) || (event.ctrlKey && event.code !== 'KeyA' && event.code !== 'KeyY'
            && event.code !== 'KeyZ' && event.code !== 'KeyX' && event.code !== 'KeyC' && event.code !== 'KeyV')) {
            this.maskKeyPress = true;
            let key = event.key;
            if (key === 'Spacebar') {
                key = String.fromCharCode(event.keyCode);
            }
            if (!key) {
                this.isIosInvalid = true;
                validateValue.call(this, String.fromCharCode(event.keyCode), event.ctrlKey, event);
                event.preventDefault();
                this.isIosInvalid = false;
            }
            else if (key && key.length === 1) {
                validateValue.call(this, key, event.ctrlKey, event);
                event.preventDefault();
            }
        }
        triggerMaskChangeEvent.call(this, event, oldValue);
    }
}
function triggerMaskChangeEvent(event, oldValue) {
    if (!isNullOrUndefined(this.changeEventArgs)) {
        let eventArgs = {};
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
        let collec;
        if (!this.maskKeyPress && event.keyCode === 229) {
            let oldEventVal;
            if (this.element.value.length === 1) {
                this.element.value = this.element.value + this.promptMask;
                this.element.setSelectionRange(1, 1);
            }
            if (this.element.value.length > this.promptMask.length) {
                let startIndex = this.element.selectionStart;
                let addedValues = this.element.value.length - this.promptMask.length;
                let val = this.element.value.substring(startIndex - addedValues, startIndex);
                if (this.undoCollec.length > 0) {
                    collec = this.undoCollec[this.undoCollec.length - 1];
                    let startIndex = this.element.selectionStart;
                    oldEventVal = collec.value;
                    let oldVal = collec.value.substring(startIndex - addedValues, startIndex);
                    collec = this.redoCollec[0];
                    val = val.trim();
                    let isSpace = Browser.isAndroid && val === '';
                    if (!isSpace && oldVal !== val && collec.value.substring(startIndex - addedValues, startIndex) !== val) {
                        validateValue.call(this, val, event.ctrlKey, event);
                    }
                    else if (isSpace) {
                        preventUnsupportedValues.call(this, event, startIndex - 1, this.element.selectionEnd - 1, val, event.ctrlKey, false);
                    }
                }
                else {
                    oldEventVal = this.promptMask;
                    validateValue.call(this, val, event.ctrlKey, event);
                }
                this.maskKeyPress = false;
                triggerMaskChangeEvent.call(this, event, oldEventVal);
            }
        }
        else {
            removeMaskError.call(this);
        }
        let val = strippedValue.call(this, this.element);
        if (!((this.element.selectionStart === 0) && (this.promptMask === this.element.value) && val === '')
            || (val === '' && this.value !== val)) {
            this.prevValue = val;
            this.value = val;
        }
    }
    else {
        triggerMaskChangeEvent.call(this, event);
        this.value = this.element.value;
    }
}
function mobileSwipeCheck(key) {
    if (key.length > 1 && ((this.promptMask.length + key.length) < this.element.value.length)) {
        let elementValue = this.redoCollec[0].value.substring(0, this.redoCollec[0].startIndex) + key +
            this.redoCollec[0].value.substring(this.redoCollec[0].startIndex, this.redoCollec[0].value.length);
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
    let startIndex = this.element.selectionStart;
    let initStartIndex = startIndex;
    let endIndex = this.element.selectionEnd;
    let curMask;
    let allowText = false;
    let value = this.element.value;
    let eventOldVal;
    let prevSupport = false;
    let isEqualVal = false;
    for (let k = 0; k < key.length; k++) {
        let keyValue = key[k];
        startIndex = this.element.selectionStart;
        endIndex = this.element.selectionEnd;
        if (!this.maskKeyPress && initStartIndex === startIndex) {
            startIndex = startIndex + k;
        }
        if ((!this.maskKeyPress || startIndex < this.promptMask.length)) {
            for (let i = startIndex; i < this.promptMask.length; i++) {
                let maskValue = this.escapeMaskValue;
                curMask = maskValue[startIndex];
                if (this.hiddenMask[startIndex] === '\\' && this.hiddenMask[startIndex + 1] === key) {
                    isEqualVal = true;
                }
                if ((isNullOrUndefined(this.regExpCollec[curMask]) && (isNullOrUndefined(this.customCharacters)
                    || (!isNullOrUndefined(this.customCharacters) && isNullOrUndefined(this.customCharacters[curMask])))
                    && ((this.hiddenMask[startIndex] !== this.promptChar && this.customRegExpCollec[startIndex][0] !== '['
                        && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] !== ']')))
                    || ((this.promptMask[startIndex] !== this.promptChar) && isNullOrUndefined(this.customCharacters))
                    || (this.promptChar === curMask && this.escapeMaskValue === this.mask)) {
                    this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
                    startIndex = this.element.selectionStart;
                    curMask = this.hiddenMask[startIndex];
                }
            }
            if (!isNullOrUndefined(this.customCharacters) && !isNullOrUndefined(this.customCharacters[curMask])) {
                let customValStr = this.customCharacters[curMask];
                let customValArr = customValStr.split(',');
                for (let i = 0; i < customValArr.length; i++) {
                    if (keyValue.match(new RegExp('[' + customValArr[i] + ']'))) {
                        allowText = true;
                        break;
                    }
                }
            }
            else if (!isNullOrUndefined(this.regExpCollec[curMask]) && keyValue.match(new RegExp(this.regExpCollec[curMask]))
                && this.promptMask[startIndex] === this.promptChar) {
                allowText = true;
            }
            else if (this.promptMask[startIndex] === this.promptChar && this.customRegExpCollec[startIndex][0] === '['
                && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] === ']'
                && keyValue.match(new RegExp(this.customRegExpCollec[startIndex]))) {
                allowText = true;
            }
            if ((!this.maskKeyPress || startIndex < this.hiddenMask.length) && allowText) {
                if (k === 0) {
                    if (this.maskKeyPress) {
                        this.undoCollec.push({ value: value, startIndex: startIndex, endIndex: startIndex });
                    }
                    else {
                        let sIndex = this.element.selectionStart;
                        let eIndex = this.element.selectionEnd;
                        if (this.redoCollec.length > 0) {
                            eventOldVal = this.redoCollec[0].value;
                            setElementValue.call(this, eventOldVal);
                            this.undoCollec.push(this.redoCollec[0]);
                        }
                        else {
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
            }
            else {
                startIndex = this.element.selectionStart;
                preventUnsupportedValues.call(this, event, startIndex, initStartIndex, key, isCtrlKey, prevSupport);
            }
            if (k === key.length - 1 && !allowText) {
                if (!Browser.isAndroid || (Browser.isAndroid && startIndex < this.promptMask.length)) {
                    this.redoCollec.unshift({
                        value: this.element.value, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd
                    });
                }
            }
        }
        else {
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
        let value = this.element.value;
        let elementValue = value.substring(0, startIndex) + keyValue + value.substring(startIndex + 1, value.length);
        setElementValue.call(this, elementValue);
        this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
    }
    triggerMaskChangeEvent.call(this, event, eventOldVal);
}
function preventUnsupportedValues(event, sIdx, idx, key, ctrl, chkSupport) {
    if (!this.maskKeyPress) {
        let eventOldVal;
        let value = this.element.value;
        if (sIdx >= this.promptMask.length) {
            setElementValue.call(this, value.substring(0, sIdx));
        }
        else {
            if (idx === sIdx) {
                setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx + 1, value.length));
            }
            else {
                if (this.promptMask.length === this.element.value.length) {
                    setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx, value.length));
                }
                else {
                    setElementValue.call(this, value.substring(0, idx) + value.substring(idx + 1, value.length));
                }
            }
            this.element.selectionStart = this.element.selectionEnd = (chkSupport ||
                this.element.value[idx] !== this.promptChar) ? sIdx : idx;
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
    let parentElement = this.element.parentNode;
    let timer = 200;
    if (parentElement.classList.contains(INPUTGROUP) || parentElement.classList.contains(FLOATINPUT)) {
        addClass([parentElement], ERROR$1);
    }
    else {
        addClass([this.element], ERROR$1);
    }
    if (this.isIosInvalid === true) {
        timer = 400;
    }
    attributes(this.element, { 'aria-invalid': 'true' });
    setTimeout(() => {
        if (!this.maskKeyPress) {
            removeMaskError.call(this);
        }
    }, timer);
}
function removeMaskError() {
    let parentElement = this.element.parentNode;
    removeClass([parentElement], ERROR$1);
    removeClass([this.element], ERROR$1);
    attributes(this.element, { 'aria-invalid': 'false' });
}
/**
 * @hidden
 * Validates user input using masking elements '<' , '>' and '|'.
 */
function changeToLowerUpperCase(key, value) {
    let promptMask;
    let i;
    let curVal = value;
    let caseCount = 0;
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
            if (((promptMask[i] === this.promptChar) && (i > this.element.selectionStart)) ||
                (this.element.value.indexOf(this.promptChar) < 0 && (this.element.selectionStart + caseCount) === i)) {
                caseCount = 0;
                break;
            }
            curVal = promptMask;
        }
    }
    while (i >= 0 && promptMask) {
        if (i === 0 || promptMask[i - 1] !== '\\') {
            let val = this.element.value;
            if (promptMask[i] === '>') {
                key = key.toUpperCase();
                break;
            }
            else if (promptMask[i] === '<') {
                key = key.toLowerCase();
                break;
            }
            else if (promptMask[i] === '|') {
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
            for (let i = 0; i < val.length; i++) {
                validateValue.call(this, val[i], false, null);
            }
        }
        this.value = strippedValue.call(this, this.element);
        this.maskKeyPress = false;
        let labelElement = this.element.parentNode.querySelector('.e-float-text');
        if (this.element.value === this.promptMask && this.floatLabelType === 'Auto' &&
            !isNullOrUndefined(labelElement) && labelElement.classList.contains(TOPLABEL) && !this.isFocus) {
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
    Input.setValue(val, (element ? element : this.element), this.floatLabelType);
}
/**
 * @hidden
 * Provide mask support to input textbox through utility method.
 */
function maskInput(args) {
    let inputEle = getMaskInput(args);
    applyMask.call(inputEle);
    let val = strippedValue.call(this, this.element);
    this.prevValue = val;
    this.value = val;
    if (args.mask) {
        unwireEvents.call(inputEle);
        wireEvents.call(inputEle);
    }
}
function getMaskInput(args) {
    addClass([args.element], UTILMASK);
    let inputEle = {
        element: args.element,
        mask: args.mask,
        promptMask: '',
        hiddenMask: '',
        escapeMaskValue: '',
        promptChar: args.promptChar ? (args.promptChar.length > 1) ? args.promptChar = args.promptChar[0]
            : args.promptChar : '_',
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
    let inputEle;
    if (!isNullOrUndefined(args) && args.element.classList.contains(UTILMASK)) {
        inputEle = getMaskInput(args);
    }
    return inputEle;
}
/**
 * @hidden
 * Arguments to perform undo and redo functionalities.
 */
class MaskUndo {
}

/**
 * MaskedTextbox base modules
 */

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const ROOT$1 = 'e-widget e-control-wrapper e-mask';
const INPUT = 'e-input';
/**
 * The MaskedTextBox allows the user to enter the valid input only based on the provided mask.
 * ```html
 * <input id="mask" type="text" />
 * ```
 * ```typescript
 * <script>
 * var maskObj = new MaskedTextBox({ mask: "(999) 9999-999" });
 * maskObj.appendTo('#mask');
 * </script>
 * ```
 */
let MaskedTextBox = class MaskedTextBox extends Component {
    constructor(options, element) {
        super(options, element);
    }
    /**
     * Gets the component name
     * @private
     */
    getModuleName() {
        return 'maskedtextbox';
    }
    /**
     * Initializes the event handler
     * @private
     */
    preRender() {
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
        let ejInstance = getValue('ej2_instances', this.element);
        this.cloneElement = this.element.cloneNode(true);
        this.angularTagName = null;
        if (this.element.tagName === 'EJS-MASKEDTEXTBOX') {
            this.angularTagName = this.element.tagName;
            let input = createElement('input');
            for (let i = 0; i < this.element.attributes.length; i++) {
                input.setAttribute(this.element.attributes[i].nodeName, this.element.attributes[i].nodeValue);
                input.innerHTML = this.element.innerHTML;
            }
            this.element.parentNode.appendChild(input);
            this.element.parentNode.removeChild(this.element);
            this.element = input;
            setValue('ej2_instances', ejInstance, this.element);
        }
    }
    /**
     * Gets the properties to be maintained in the persisted state.
     * @return {string}
     */
    getPersistData() {
        let keyEntity = ['value'];
        return this.addOnPersist(keyEntity);
    }
    /**
     * Initializes the component rendering.
     * @private
     */
    render() {
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
    resetMaskedTextBox() {
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
        let val = strippedValue.call(this, this.element);
        this.prevValue = val;
        this.value = val;
        if (!this.isInitial) {
            unwireEvents.call(this);
        }
        wireEvents.call(this);
    }
    setMaskPlaceholder(setVal) {
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
    setCssClass(cssClass, element) {
        if (cssClass) {
            addClass(element, cssClass);
        }
    }
    setWidth(width) {
        if (!isNullOrUndefined(width)) {
            this.element.style.width = formatUnit(width);
        }
    }
    createWrapper() {
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
    /**
     * Calls internally if any of the property value is changed.
     * @hidden
     */
    onPropertyChanged(newProp, oldProp) {
        for (let prop of Object.keys(newProp)) {
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
                    let strippedValue$$1 = this.value;
                    this.mask = newProp.mask;
                    this.updateValue(strippedValue$$1);
                    break;
                case 'promptChar':
                    if (newProp.promptChar.length > 1) {
                        newProp.promptChar = newProp.promptChar[0];
                    }
                    if (newProp.promptChar) {
                        this.promptChar = newProp.promptChar;
                    }
                    else {
                        this.promptChar = '_';
                    }
                    let value = this.element.value.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                    if (this.promptMask === this.element.value) {
                        value = this.promptMask.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                    }
                    this.promptMask = this.promptMask.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                    this.undoCollec = this.redoCollec = [];
                    setElementValue.call(this, value);
                    break;
            }
        }
    }
    updateValue(strippedVal) {
        this.resetMaskedTextBox();
        setMaskValue.call(this, strippedVal);
    }
    /**
     * Gets the value of the MaskedTextBox with the masked format.
     * By using `value` property, you can get the raw value of maskedtextbox without literals and prompt characters.
     * @return {string}
     */
    getMaskedValue() {
        return unstrippedValue.call(this, this.element);
    }
    /**
     * Removes the component from the DOM and detaches all its related event handlers.
     * Also it maintains the initial input element from the DOM.
     * @method destroy
     * @return {void}
     */
    destroy() {
        unwireEvents.call(this);
        this.inputObj.container.parentElement.appendChild(this.cloneElement);
        detach(this.inputObj.container);
        super.destroy();
    }
};
__decorate$1([
    Property(null)
], MaskedTextBox.prototype, "cssClass", void 0);
__decorate$1([
    Property(null)
], MaskedTextBox.prototype, "width", void 0);
__decorate$1([
    Property(null)
], MaskedTextBox.prototype, "placeholder", void 0);
__decorate$1([
    Property('Never')
], MaskedTextBox.prototype, "floatLabelType", void 0);
__decorate$1([
    Property(true)
], MaskedTextBox.prototype, "enabled", void 0);
__decorate$1([
    Property(false)
], MaskedTextBox.prototype, "enablePersistence", void 0);
__decorate$1([
    Property(false)
], MaskedTextBox.prototype, "enableRtl", void 0);
__decorate$1([
    Property(null)
], MaskedTextBox.prototype, "mask", void 0);
__decorate$1([
    Property('_')
], MaskedTextBox.prototype, "promptChar", void 0);
__decorate$1([
    Property(null)
], MaskedTextBox.prototype, "value", void 0);
__decorate$1([
    Property(null)
], MaskedTextBox.prototype, "customCharacters", void 0);
__decorate$1([
    Event()
], MaskedTextBox.prototype, "created", void 0);
__decorate$1([
    Event()
], MaskedTextBox.prototype, "destroyed", void 0);
__decorate$1([
    Event()
], MaskedTextBox.prototype, "change", void 0);
__decorate$1([
    Event()
], MaskedTextBox.prototype, "focus", void 0);
MaskedTextBox = __decorate$1([
    NotifyPropertyChanges
], MaskedTextBox);

/**
 * MaskedTextbox modules
 */

/**
 * MaskedTextbox modules
 */

/**
 * Input box Component
 */

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the ticks data of the Slider.
 */
class TicksData extends ChildProperty {
}
__decorate$2([
    Property('None')
], TicksData.prototype, "placement", void 0);
__decorate$2([
    Property(10)
], TicksData.prototype, "largeStep", void 0);
__decorate$2([
    Property(1)
], TicksData.prototype, "smallStep", void 0);
__decorate$2([
    Property(false)
], TicksData.prototype, "showSmallTicks", void 0);
__decorate$2([
    Property(null)
], TicksData.prototype, "format", void 0);
/**
 * It illustrates the tooltip data in slider.
 */
class TooltipData extends ChildProperty {
}
__decorate$2([
    Property('')
], TooltipData.prototype, "cssClass", void 0);
__decorate$2([
    Property('Before')
], TooltipData.prototype, "placement", void 0);
__decorate$2([
    Property('Focus')
], TooltipData.prototype, "showOn", void 0);
__decorate$2([
    Property(false)
], TooltipData.prototype, "isVisible", void 0);
__decorate$2([
    Property(null)
], TooltipData.prototype, "format", void 0);
const classNames = {
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
/**
 * The Slider component allows the user to select a value or range
 * of values in-between a min and max range, by dragging the handle over the slider bar.
 * ```html
 * <div id='slider'></div>
 * ```
 * ```typescript
 * <script>
 *   var sliderObj = new Slider({ value: 10 });
 *   sliderObj.appendTo('#slider');
 * </script>
 * ```
 */
let Slider = class Slider extends Component {
    constructor(options, element) {
        super(options, element);
        this.horDir = 'left';
        this.verDir = 'bottom';
        this.transition = {
            handle: 'left .4s cubic-bezier(.25, .8, .25, 1), right .4s cubic-bezier(.25, .8, .25, 1), ' +
                'top .4s cubic-bezier(.25, .8, .25, 1) , bottom .4s cubic-bezier(.25, .8, .25, 1)',
            rangeBar: 'all .4s cubic-bezier(.25, .8, .25, 1)'
        };
        this.transitionOnMaterialTooltip = {
            handle: 'left 1ms ease-out, right 1ms ease-out, bottom 1ms ease-out',
            rangeBar: 'left 1ms ease-out, right 1ms ease-out, bottom 1ms ease-out, width 1ms ease-out, height 1ms ease-out'
        };
        this.scaleTransform = 'transform .4s cubic-bezier(.25, .8, .25, 1)';
        this.customAriaText = null;
    }
    preRender() {
        let localeText = { incrementTitle: 'Increase', decrementTitle: 'Decrease' };
        this.l10n = new L10n('slider', localeText, this.locale);
        this.tickElementCollection = [];
        this.tooltipFormatInfo = {};
        this.ticksFormatInfo = {};
        this.initCultureInfo();
        this.initCultureFunc();
    }
    initCultureFunc() {
        this.internationalization = new Internationalization(this.locale);
    }
    initCultureInfo() {
        this.tooltipFormatInfo.format = (!isNullOrUndefined(this.tooltip.format)) ? this.tooltip.format : null;
        this.ticksFormatInfo.format = (!isNullOrUndefined(this.ticks.format)) ? this.ticks.format : null;
    }
    formatString(value, formatInfo) {
        let formatValue = null;
        let formatString = null;
        if ((value || value === 0)) {
            formatValue = this.formatNumber(value);
            let numberOfDecimals = this.numberOfDecimals(value);
            formatString = this.internationalization.getNumberFormat(formatInfo)(this.makeRoundNumber(value, numberOfDecimals));
        }
        return { elementVal: formatValue, formatString: formatString };
    }
    ;
    formatNumber(value) {
        let numberOfDecimals = this.numberOfDecimals(value);
        return this.internationalization.getNumberFormat({
            maximumFractionDigits: numberOfDecimals,
            minimumFractionDigits: numberOfDecimals, useGrouping: false
        })(value);
    }
    ;
    numberOfDecimals(value) {
        let decimalPart = value.toString().split('.')[1];
        let numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
        return numberOfDecimals;
    }
    makeRoundNumber(value, precision) {
        let decimals = precision || 0;
        return Number(value.toFixed(decimals));
    }
    ;
    fractionalToInteger(value) {
        value = (this.numberOfDecimals(value) === 0) ? Number(value).toFixed(this.noOfDecimals) : value;
        let tens = 1;
        for (let i = 0; i < this.noOfDecimals; i++) {
            tens *= 10;
        }
        value = Number((value * tens).toFixed(0));
        return value;
    }
    /**
     * To Initialize the control rendering
     * @private
     */
    render() {
        this.initialize();
        this.initRender();
        this.wireEvents();
        this.setZindex();
    }
    initialize() {
        addClass([this.element], classNames.root);
        this.setCSSClass();
    }
    setCSSClass(oldCSSClass) {
        if (oldCSSClass) {
            removeClass([this.element], oldCSSClass.split(' '));
        }
        if (this.cssClass) {
            addClass([this.element], this.cssClass.split(' '));
        }
    }
    setEnabled() {
        let tooltipElement = this.type !== 'Range' ? [this.firstTooltipElement] :
            [this.firstTooltipElement, this.secondTooltipElement];
        if (!this.enabled) {
            addClass([this.sliderContainer], [classNames.sliderDisabled]);
            if (this.tooltip.isVisible && this.tooltip.showOn === 'Always') {
                tooltipElement.forEach((tooltipElement) => {
                    tooltipElement.classList.add(classNames.sliderDisabled);
                });
            }
            this.unwireEvents();
        }
        else {
            removeClass([this.sliderContainer], [classNames.sliderDisabled]);
            if (this.tooltip.isVisible && this.tooltip.showOn === 'Always') {
                tooltipElement.forEach((tooltipElement) => {
                    tooltipElement.classList.remove(classNames.sliderDisabled);
                });
            }
            this.wireEvents();
        }
    }
    getTheme(container) {
        let theme = window.getComputedStyle(container, ':after').getPropertyValue('content');
        return theme.replace(/['"]+/g, '');
    }
    /**
     * Initialize the rendering
     * @private
     */
    initRender() {
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
        this.hiddenInput = (createElement('input', {
            attrs: {
                type: 'hidden', value: (isNullOrUndefined(this.value) ? this.min.toString() : this.value.toString()),
                name: this.element.getAttribute('name') || this.element.getAttribute('id') ||
                    '_' + (Math.random() * 1000).toFixed(0) + 'slider', class: classNames.sliderHiddenInput
            }
        }));
        this.hiddenInput.tabIndex = -1;
        this.sliderContainer.appendChild(this.hiddenInput);
        if (this.showButtons) {
            this.setButtons();
        }
        this.setEnableRTL();
        if (this.type === 'Range') {
            this.rangeValueUpdate();
        }
        else {
            this.value = isNullOrUndefined(this.value) ? parseFloat(formatUnit(this.min.toString())) : this.value;
        }
        this.previousVal = this.type !== 'Range' ? this.checkHandleValue(parseFloat(formatUnit(this.value.toString()))) :
            [this.checkHandleValue(parseFloat(formatUnit(this.value[0].toString()))),
                this.checkHandleValue(parseFloat(formatUnit(this.value[1].toString())))];
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
        }
        else {
            removeClass([this.sliderContainer], [classNames.sliderDisabled]);
        }
        if (this.readOnly) {
            addClass([this.sliderContainer], [classNames.readOnly]);
        }
        else {
            removeClass([this.sliderContainer], [classNames.readOnly]);
        }
    }
    createRangeBar() {
        if (this.type !== 'Default') {
            this.rangeBar = (createElement('div', { attrs: { class: classNames.rangeBar } }));
            this.element.appendChild(this.rangeBar);
        }
    }
    setOrientClass() {
        if (this.orientation !== 'Vertical') {
            this.sliderContainer.classList.remove(classNames.verticalSlider);
            this.sliderContainer.classList.add(classNames.horizontalSlider);
            this.firstHandle.setAttribute('aria-orientation', 'horizontal');
            if (this.type === 'Range') {
                this.secondHandle.setAttribute('aria-orientation', 'horizontal');
            }
        }
        else {
            this.sliderContainer.classList.remove(classNames.horizontalSlider);
            this.sliderContainer.classList.add(classNames.verticalSlider);
            this.firstHandle.setAttribute('aria-orientation', 'vertical');
            if (this.type === 'Range') {
                this.secondHandle.setAttribute('aria-orientation', 'vertical');
            }
        }
    }
    setAriaAttributes(element) {
        if (this.type !== 'Range') {
            attributes(element, {
                'aria-valuemin': this.min.toString(), 'aria-valuemax': this.max.toString()
            });
        }
        else {
            let range = [[this.min.toString(), this.value[1].toString()],
                [this.value[0].toString(), this.max.toString()]];
            range.forEach((range, index) => {
                let element = index === 0 ? this.firstHandle : this.secondHandle;
                if (element) {
                    attributes(element, {
                        'aria-valuemin': range[0], 'aria-valuemax': range[1]
                    });
                }
            });
        }
    }
    createSecondHandle() {
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
                    class: classNames.sliderHandle + ' ' +
                        classNames.sliderMaterialHandle
                }
            });
            this.element.appendChild(this.secondMaterialHandle);
        }
    }
    createFirstHandle() {
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
                    class: classNames.sliderHandle + ' ' +
                        classNames.sliderMaterialHandle
                }
            });
            this.element.appendChild(this.firstMaterialHandle);
        }
    }
    wireFirstHandleEvt(destroy) {
        if (!destroy) {
            EventHandler.add(this.firstHandle, 'mousedown touchstart', this.handleFocus, this);
            EventHandler.add(this.firstHandle, 'transitionend', this.transitionEnd, this);
            EventHandler.add(this.firstHandle, 'mouseenter touchenter', this.handleOver, this);
            EventHandler.add(this.firstHandle, 'mouseleave touchend', this.handleLeave, this);
        }
        else {
            EventHandler.remove(this.firstHandle, 'mousedown touchstart', this.handleFocus);
            EventHandler.remove(this.firstHandle, 'transitionend', this.transitionEnd);
            EventHandler.remove(this.firstHandle, 'mouseenter touchenter', this.handleOver);
            EventHandler.remove(this.firstHandle, 'mouseleave touchend', this.handleLeave);
        }
    }
    wireSecondHandleEvt(destroy) {
        if (!destroy) {
            EventHandler.add(this.secondHandle, 'mousedown touchstart', this.handleFocus, this);
            EventHandler.add(this.secondHandle, 'transitionend', this.transitionEnd, this);
            EventHandler.add(this.secondHandle, 'mouseenter touchenter', this.handleOver, this);
            EventHandler.add(this.secondHandle, 'mouseleave touchend', this.handleLeave, this);
        }
        else {
            EventHandler.remove(this.secondHandle, 'mousedown touchstart', this.handleFocus);
            EventHandler.remove(this.secondHandle, 'transitionend', this.transitionEnd);
            EventHandler.remove(this.secondHandle, 'mouseenter touchenter', this.handleOver);
            EventHandler.remove(this.secondHandle, 'mouseleave touchend', this.handleLeave);
        }
    }
    handleStart() {
        let pos = (this.activeHandle === 1) ? this.handlePos1 : this.handlePos2;
        let tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
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
    transitionEnd(e) {
        this.handleStart();
        this.getHandle().style.transition = 'none';
        if (this.type !== 'Default') {
            this.rangeBar.style.transition = 'none';
        }
        if (this.tooltip.isVisible) {
            let tooltipObj = this.activeHandle === 1 ? this.firstTooltipObj : this.secondTooltipObj;
            let tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
            if (!this.isMaterial) {
                tooltipObj.animation = { open: { effect: 'None' }, close: { effect: 'FadeOut', duration: 500 } };
                this.tooltipAnimation();
            }
            else {
                if (!tooltipElement.classList.contains(classNames.materialTooltipOpen) && e.propertyName !== 'transform') {
                    this.openMaterialTooltip();
                }
                else {
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
    handleFocusOut() {
        if (this.firstHandle.classList.contains(classNames.sliderHandleFocused)) {
            this.firstHandle.classList.remove(classNames.sliderHandleFocused);
        }
        if (this.type === 'Range') {
            if (this.secondHandle.classList.contains(classNames.sliderHandleFocused)) {
                this.secondHandle.classList.remove(classNames.sliderHandleFocused);
            }
        }
    }
    handleFocus(e) {
        if (e.currentTarget === this.firstHandle) {
            this.firstHandle.classList.add(classNames.sliderHandleFocused);
        }
        else {
            this.secondHandle.classList.add(classNames.sliderHandleFocused);
        }
    }
    handleOver(e) {
        if (this.tooltip.isVisible && this.tooltip.showOn === 'Hover') {
            this.tooltipValue();
            let tooltipObj = e.currentTarget === this.firstHandle ? this.firstTooltipObj : this.secondTooltipObj;
            tooltipObj.animation = { open: { effect: 'None' }, close: { effect: 'FadeOut', duration: 500 } };
            if (e.currentTarget === this.firstHandle) {
                this.firstTooltipObj.open(this.firstHandle);
            }
            else {
                this.secondTooltipObj.open(this.secondHandle);
            }
        }
    }
    handleLeave(e) {
        if (this.tooltip.isVisible && this.tooltip.showOn === 'Hover' &&
            !e.currentTarget.classList.contains(classNames.sliderHandleFocused) &&
            !e.currentTarget.classList.contains(classNames.sliderTabHandle)) {
            this.tooltipValue();
            let tooltipObj = e.currentTarget === this.firstHandle ? this.firstTooltipObj : this.secondTooltipObj;
            if (e.currentTarget === this.firstHandle) {
                this.firstTooltipObj.close();
            }
            else {
                this.secondTooltipObj.close();
            }
            tooltipObj.animation = { open: { effect: 'None' }, close: { effect: 'FadeOut', duration: 500 } };
        }
    }
    setHandler() {
        if (this.min > this.max) {
            this.min = this.max;
        }
        this.createFirstHandle();
        if (this.type === 'Range') {
            this.createSecondHandle();
        }
    }
    setEnableRTL() {
        this.enableRtl && this.orientation !== 'Vertical' ? addClass([this.sliderContainer], classNames.rtl) :
            removeClass([this.sliderContainer], classNames.rtl);
        let preDir = (this.orientation !== 'Vertical') ? this.horDir : this.verDir;
        if (this.enableRtl) {
            this.horDir = 'right';
            this.verDir = 'bottom';
        }
        else {
            this.horDir = 'left';
            this.verDir = 'bottom';
        }
        let currDir = (this.orientation !== 'Vertical') ? this.horDir : this.verDir;
        if (preDir !== currDir) {
            if (this.orientation === 'Horizontal') {
                setStyleAttribute(this.firstHandle, { 'right': '', 'left': 'auto' });
                if (this.type === 'Range') {
                    setStyleAttribute(this.secondHandle, { 'top': '', 'left': 'auto' });
                }
            }
        }
    }
    tooltipValue() {
        let text;
        let args = {
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
    setTooltipContent() {
        if (this.type === 'Range') {
            let content = this.formatContent(this.tooltipFormatInfo, false);
            this.firstTooltipObj.content = content;
            this.secondTooltipObj.content = content;
        }
        else {
            if (!isNullOrUndefined(this.handleVal1)) {
                let content = this.formatContent(this.tooltipFormatInfo, false);
                this.firstTooltipObj.content = content;
            }
        }
    }
    formatContent(formatInfo, ariaContent) {
        let content = '';
        if (!ariaContent) {
            if (this.type === 'Range') {
                if (this.enableRtl && this.orientation !== 'Vertical') {
                    content = (!isNullOrUndefined(formatInfo.format)) ? (this.formatString(this.handleVal2, formatInfo)
                        .formatString + ' - ' + this.formatString(this.handleVal1, formatInfo).formatString) :
                        (this.handleVal2.toString() + ' - ' + this.handleVal1.toString());
                }
                else {
                    content = (!isNullOrUndefined(formatInfo.format)) ? (this.formatString(this.handleVal1, formatInfo)
                        .formatString + ' - ' + this.formatString(this.handleVal2, formatInfo).formatString) :
                        (this.handleVal1.toString() + ' - ' + this.handleVal2.toString());
                }
            }
            else {
                if (!isNullOrUndefined(this.handleVal1)) {
                    content = (!isNullOrUndefined(formatInfo.format)) ?
                        this.formatString(this.handleVal1, formatInfo).formatString : this.handleVal1.toString();
                }
            }
            return content;
        }
        else {
            if (this.type === 'Range') {
                if (this.enableRtl && this.orientation !== 'Vertical') {
                    content = (!isNullOrUndefined(this.tooltip) && !isNullOrUndefined(this.tooltip.format)) ?
                        (this.formatString(this.handleVal2, formatInfo).elementVal + ' - ' +
                            this.formatString(this.handleVal1, formatInfo).elementVal) :
                        (this.handleVal2.toString() + ' - ' + this.handleVal1.toString());
                }
                else {
                    content = (!isNullOrUndefined(this.tooltip) && !isNullOrUndefined(this.tooltip.format)) ?
                        (this.formatString(this.handleVal1, formatInfo).elementVal + ' - ' +
                            this.formatString(this.handleVal2, formatInfo).elementVal) :
                        (this.handleVal1.toString() + ' - ' + this.handleVal2.toString());
                }
            }
            else {
                if (!isNullOrUndefined(this.handleVal1)) {
                    content = (!isNullOrUndefined(this.tooltip) && !isNullOrUndefined(this.tooltip.format)) ?
                        this.formatString(this.handleVal1, formatInfo).elementVal : this.handleVal1.toString();
                }
            }
            return content;
        }
    }
    addTooltipClass(content) {
        if (this.isMaterial && this.tooltip.isVisible) {
            let count = content.toString().length;
            let tooltipElement = this.type !== 'Range' ? [this.firstTooltipElement] :
                [this.firstTooltipElement, this.secondTooltipElement];
            tooltipElement.forEach((element, index) => {
                if (!element) {
                    let cssClass = count > 4 ? classNames.sliderMaterialRange : classNames.sliderMaterialDefault;
                    !index ? this.firstTooltipObj.cssClass = classNames.sliderTooltip + ' ' + cssClass :
                        this.secondTooltipObj.cssClass = classNames.sliderTooltip + ' ' + cssClass;
                }
                else {
                    if (count > 4) {
                        element.classList.remove(classNames.sliderMaterialDefault);
                        if (!element.classList.contains(classNames.sliderMaterialRange)) {
                            element.classList.add(classNames.sliderMaterialRange);
                            element.style.transform = 'scale(1)';
                        }
                    }
                    else {
                        element.classList.remove(classNames.sliderMaterialRange);
                        if (!element.classList.contains(classNames.sliderMaterialDefault)) {
                            element.classList.add(classNames.sliderMaterialDefault);
                            element.style.transform = this.getTooltipTransformProperties(this.previousTooltipClass).rotate;
                        }
                    }
                }
            });
        }
    }
    tooltipPlacement() {
        let tooltipPosition;
        if (this.orientation === 'Horizontal') {
            this.tooltip.placement === 'Before' ? tooltipPosition = 'TopCenter' : tooltipPosition = 'BottomCenter';
        }
        else {
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
    tooltipBeforeOpen(args) {
        let tooltipElement = args.target === this.firstHandle ? this.firstTooltipElement = args.element :
            this.secondTooltipElement = args.element;
        args.target.removeAttribute('aria-describedby');
        if (this.isMaterial && this.tooltip.isVisible) {
            let transformProperties = this.getTooltipTransformProperties(this.previousTooltipClass);
            tooltipElement.firstChild.classList.add(classNames.materialTooltipHide);
            this.handleStart();
            if (tooltipElement.firstElementChild.innerText.length > 4) {
                tooltipElement.style.transform = `${transformProperties.translate} scale(0.01)`;
            }
            else {
                tooltipElement.style.transform = `${transformProperties.translate} ${transformProperties.rotate} scale(0.01)`;
            }
        }
    }
    wireMaterialTooltipEvent(destroy) {
        if (this.isMaterial && this.tooltip.isVisible) {
            if (!destroy) {
                EventHandler.add(this.firstTooltipElement, 'mousedown touchstart', this.sliderDown, this);
                if (this.type === 'Range') {
                    EventHandler.add(this.secondTooltipElement, 'mousedown touchstart', this.sliderDown, this);
                }
            }
            else {
                EventHandler.remove(this.firstTooltipElement, 'mousedown touchstart', this.sliderDown);
                if (this.type === 'Range') {
                    EventHandler.remove(this.secondTooltipElement, 'mousedown touchstart', this.sliderDown);
                }
            }
        }
    }
    tooltipPositionCalculation(position) {
        let cssClass;
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
    getTooltipTransformProperties(className) {
        if (this.firstTooltipElement) {
            let position;
            if (this.orientation === 'Horizontal') {
                position = (this.firstTooltipElement.clientHeight + 14) - (this.firstTooltipElement.clientHeight / 2);
            }
            else {
                position = (this.firstTooltipElement.clientWidth + 14) - (this.firstTooltipElement.clientWidth / 2);
            }
            let transformProperties = this.orientation === 'Horizontal' ?
                (className === classNames.horizontalTooltipBefore ? { rotate: 'rotate(45deg)', translate: `translateY(${position}px)` } :
                    { rotate: 'rotate(225deg)', translate: `translateY(${-(position)}px)` }) :
                (className === classNames.verticalTooltipBefore ? { rotate: 'rotate(-45deg)', translate: `translateX(${position}px)` } :
                    { rotate: 'rotate(-225deg)', translate: `translateX(${(-position)}px)` });
            return transformProperties;
        }
        return undefined;
    }
    openMaterialTooltip() {
        this.refreshTooltip();
        let tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
        let handle = this.activeHandle === 1 ? this.firstMaterialHandle : this.secondMaterialHandle;
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
        }
        else {
            tooltipElement.style.transform = this.getTooltipTransformProperties(this.previousTooltipClass).rotate;
        }
        if (this.type === 'Default') {
            setTimeout(() => { tooltipElement.style.transition = this.transition.handle; }, 2500);
        }
        else {
            setTimeout(() => { tooltipElement.style.transition = 'none'; }, 2500);
        }
    }
    checkTooltipPosition(args) {
        let tooltipPosition = args.target === this.firstHandle ? this.firstHandleTooltipPosition :
            this.secondHandleTooltipPosition;
        if (tooltipPosition === undefined || tooltipPosition !== args.collidedPosition) {
            let tooltipClass = this.tooltipPositionCalculation(args.collidedPosition);
            args.element.classList.remove(this.previousTooltipClass);
            args.element.classList.add(tooltipClass);
            this.previousTooltipClass = tooltipClass;
            if (args.element.style.transform && args.element.classList.contains(classNames.materialTooltipOpen) &&
                args.element.firstElementChild.innerText.length < 4) {
                args.element.style.transform = this.getTooltipTransformProperties(this.previousTooltipClass).rotate;
            }
            if (args.target === this.firstHandle) {
                this.firstHandleTooltipPosition = args.collidedPosition;
            }
            else {
                this.secondHandleTooltipPosition = args.collidedPosition;
            }
        }
    }
    renderTooltip() {
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
    tooltipAfterClose(args) {
        if (args.element === this.firstTooltipElement) {
            this.firstTooltipElement = undefined;
        }
        else {
            this.secondTooltipElement = undefined;
        }
    }
    setButtons() {
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
    buttonTitle() {
        let enabledRTL = this.enableRtl && this.orientation !== 'Vertical';
        this.l10n.setLocale(this.locale);
        let decrementTitle = this.l10n.getConstant('decrementTitle');
        let incrementTitle = this.l10n.getConstant('incrementTitle');
        attributes(enabledRTL ? this.secondBtn : this.firstBtn, { 'aria-label': decrementTitle, title: decrementTitle });
        attributes(enabledRTL ? this.firstBtn : this.secondBtn, { 'aria-label': incrementTitle, title: incrementTitle });
    }
    buttonFocusOut() {
        if (this.isMaterial) {
            this.getHandle().style.transform = this.getHandle().style.transform.replace('scale(1.5)', 'scale(1)');
        }
    }
    repeatButton(args) {
        let buttonElement = args.target.parentElement;
        let tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
        if (!tooltipElement && this.tooltip.isVisible) {
            this.openTooltip();
        }
        let hVal = this.handleValueUpdate();
        let enabledRTL = this.enableRtl && this.orientation !== 'Vertical';
        let value;
        if (args.target.parentElement.classList.contains(classNames.firstButton)
            || args.target.classList.contains(classNames.firstButton)) {
            enabledRTL ? (value = this.add(hVal, parseFloat(this.step.toString()), true)) :
                (value = this.add(hVal, parseFloat(this.step.toString()), false));
        }
        else if (args.target.parentElement.classList.contains(classNames.secondButton)
            || (args.target.classList.contains(classNames.secondButton))) {
            enabledRTL ? (value = this.add(hVal, parseFloat(this.step.toString()), false)) :
                (value = this.add(hVal, parseFloat(this.step.toString()), true));
        }
        if (value >= this.min && value <= this.max) {
            this.changeHandleValue(value);
            this.refreshTooltipOnMove();
        }
    }
    repeatHandlerMouse(args) {
        args.preventDefault();
        if (args.type === ('mousedown') || args.type === ('touchstart')) {
            this.buttonClick(args);
            this.repeatInterval = setInterval(this.repeatButton.bind(this), 180, args);
        }
    }
    materialChange() {
        if (this.getHandle().style.transform.indexOf('scale(1.5') === -1) {
            this.getHandle().style.transform = 'scale(1.5)';
        }
    }
    repeatHandlerUp(e) {
        this.changeEvent('changed');
        if (this.tooltip.isVisible && this.tooltip.showOn !== 'Always' && !this.isMaterial) {
            this.closeTooltip();
        }
        clearInterval(this.repeatInterval);
        this.getHandle().focus();
    }
    renderScale() {
        let orien = this.orientation === 'Vertical' ? 'v' : 'h';
        this.noOfDecimals = this.numberOfDecimals(this.step);
        this.ul = createElement('ul', {
            className: classNames.scale + ' ' + 'e-' + orien + '-scale ' + classNames.tick + '-' + this.ticks.placement.toLowerCase(),
            attrs: { role: 'presentation', tabIndex: '-1', 'aria-hidden': 'true' }
        });
        if (Browser.isAndroid && orien === 'h') {
            this.ul.classList.add(classNames.sliderTickPosition);
        }
        let smallStep = this.ticks.smallStep;
        if (!this.ticks.showSmallTicks) {
            this.ticks.largeStep > 0 ? (smallStep = this.ticks.largeStep) :
                (smallStep = (parseFloat(formatUnit(this.max))) - (parseFloat(formatUnit(this.min))));
        }
        else if (smallStep <= 0) {
            smallStep = parseFloat(formatUnit(this.step));
        }
        let min = this.fractionalToInteger(this.min);
        let max = this.fractionalToInteger(this.max);
        let steps = this.fractionalToInteger(smallStep);
        let count = Math.abs((max - min) / steps);
        this.element.appendChild(this.ul);
        let li;
        let start = parseFloat(this.min.toString());
        if (orien === 'v') {
            start = parseFloat(this.max.toString());
        }
        let left = 0;
        let tickWidth = 100 / count;
        if (tickWidth === Infinity) {
            tickWidth = 5;
        }
        for (let i = 0; i <= count; i++) {
            li = (createElement('li', {
                attrs: {
                    class: classNames.tick, title: start.toString(), role: 'presentation', tabIndex: '-1',
                    'aria-hidden': 'true'
                }
            }));
            let islargeTick;
            if (this.numberOfDecimals(this.max) === 0 && this.numberOfDecimals(this.min) === 0 && this.numberOfDecimals(this.step) === 0) {
                if (orien === 'h') {
                    islargeTick = ((start - parseFloat(this.min.toString())) % this.ticks.largeStep === 0) ? true : false;
                }
                else {
                    islargeTick = (Math.abs(start - parseFloat(this.max.toString())) % this.ticks.largeStep === 0) ? true : false;
                }
            }
            else {
                let largestep = this.fractionalToInteger(this.ticks.largeStep);
                let startValue = this.fractionalToInteger(start);
                islargeTick = ((startValue - min) % largestep === 0) ? true : false;
            }
            if (islargeTick) {
                li.classList.add(classNames.large);
            }
            (orien === 'h') ? (li.style.width = tickWidth + '%') : (li.style.height = tickWidth + '%');
            let repeat = islargeTick ? (this.ticks.placement === 'Both' ? 2 : 1) : 0;
            if (islargeTick) {
                for (let j = 0; j < repeat; j++) {
                    this.createTick(li, start);
                }
            }
            else {
                this.formatTicksValue(li, start);
            }
            this.ul.appendChild(li);
            this.tickElementCollection.push(li);
            let decimalPoints;
            if (this.numberOfDecimals(smallStep) > this.numberOfDecimals(start)) {
                decimalPoints = this.numberOfDecimals(smallStep);
            }
            else {
                decimalPoints = this.numberOfDecimals(start);
            }
            if (orien === 'h') {
                start = this.makeRoundNumber(start + smallStep, decimalPoints);
            }
            else {
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
        }
        else {
            this.firstChild.style.height = tickWidth / 2 + '%';
            this.lastChild.style.height = tickWidth / 2 + '%';
        }
        let eventArgs = { ticksWrapper: this.ul, tickElements: this.tickElementCollection };
        this.trigger('renderedTicks', eventArgs);
        this.scaleAlignment();
    }
    createTick(li, start) {
        let span = createElement('span', {
            className: classNames.tickValue + ' ' + classNames.tick + '-' + this.ticks.placement.toLowerCase(),
            attrs: { role: 'presentation', tabIndex: '-1', 'aria-hidden': 'true' }
        });
        li.appendChild(span);
        span.innerHTML = this.formatTicksValue(li, start);
    }
    formatTicksValue(li, start) {
        let tickText = this.formatNumber(start);
        let text = !isNullOrUndefined(this.ticks) && !isNullOrUndefined(this.ticks.format) ?
            this.formatString(start, this.ticksFormatInfo).formatString : tickText;
        let eventArgs = { value: start, text: text, tickElement: li };
        this.trigger('renderingTicks', eventArgs);
        li.setAttribute('title', eventArgs.text.toString());
        return eventArgs.text.toString();
    }
    scaleAlignment() {
        this.tickValuePosition();
        let orien = this.orientation === 'Vertical' ? 'v' : 'h';
        if (this.orientation === 'Vertical') {
            (this.element.getBoundingClientRect().width <= 15) ?
                this.sliderContainer.classList.add(classNames.sliderSmallSize) :
                this.sliderContainer.classList.remove(classNames.sliderSmallSize);
        }
        else {
            (this.element.getBoundingClientRect().height <= 15) ?
                this.sliderContainer.classList.add(classNames.sliderSmallSize) :
                this.sliderContainer.classList.remove(classNames.sliderSmallSize);
        }
    }
    tickValuePosition() {
        let first = this.firstChild.getBoundingClientRect();
        let firstChild;
        let smallStep = this.ticks.smallStep;
        let count = Math.abs((parseFloat(formatUnit(this.max))) - (parseFloat(formatUnit(this.min)))) / smallStep;
        if (this.firstChild.children.length > 0) {
            firstChild = this.firstChild.children[0].getBoundingClientRect();
        }
        let tickElements = [this.sliderContainer.querySelectorAll('.' + classNames.tick + '.' +
                classNames.large + ' .' + classNames.tickValue)];
        let other;
        if (this.ticks.placement === 'Both') {
            other = [].slice.call(tickElements[0], 2);
        }
        else {
            other = [].slice.call(tickElements[0], 1);
        }
        let tickWidth = this.orientation === 'Vertical' ?
            (first.height * 2) : (first.width * 2);
        for (let i = 0; i < this.firstChild.children.length; i++) {
            if (this.orientation === 'Vertical') {
                this.firstChild.children[i].style.top = -(firstChild.height / 2) + 'px';
            }
            else {
                if (!this.enableRtl) {
                    this.firstChild.children[i].style.left = -(firstChild.width / 2) + 'px';
                }
                else {
                    this.firstChild.children[i].style.left = (tickWidth -
                        this.firstChild.children[i].getBoundingClientRect().width) / 2 + 'px';
                }
            }
        }
        for (let i = 0; i < other.length; i++) {
            let otherChild = other[i].getBoundingClientRect();
            if (this.orientation === 'Vertical') {
                setStyleAttribute(other[i], { top: (tickWidth - otherChild.height) / 2 + 'px' });
            }
            else {
                setStyleAttribute(other[i], { left: (tickWidth - otherChild.width) / 2 + 'px' });
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
                }
                else {
                    this.firstChild.classList.remove(classNames.sliderLastTick);
                    this.firstChild.style.right = this.firstHandle.style.right;
                    this.firstChild.children[0].style.left =
                        (this.firstChild.getBoundingClientRect().width / 2) + 2 + 'px';
                    if (this.ticks.placement === 'Both') {
                        this.firstChild.children[1].style.left =
                            (this.firstChild.getBoundingClientRect().width / 2) + 2 + 'px';
                    }
                }
            }
            if (this.orientation === 'Vertical') {
                this.firstChild.classList.remove(classNames.sliderLastTick);
            }
        }
    }
    setAriaAttrValue(element) {
        let ariaValueText;
        let isTickFormatted = ((!isNullOrUndefined(this.ticks) && !isNullOrUndefined(this.ticks.format))) ? true : false;
        let text = !isTickFormatted ?
            this.formatContent(this.ticksFormatInfo, false) : this.formatContent(this.tooltipFormatInfo, false);
        let valuenow = isTickFormatted ? this.formatContent(this.ticksFormatInfo, true) :
            this.formatContent(this.tooltipFormatInfo, true);
        text = (!this.customAriaText) ? (text) : (this.customAriaText);
        if (text.split(' - ').length === 2) {
            ariaValueText = text.split(' - ');
        }
        else {
            ariaValueText = [text, text];
        }
        this.setAriaAttributes(element);
        if (this.type !== 'Range') {
            attributes(element, { 'aria-valuenow': valuenow, 'aria-valuetext': text });
        }
        else {
            (!this.enableRtl) ? ((element === this.firstHandle) ?
                attributes(element, { 'aria-valuenow': valuenow.split(' - ')[0], 'aria-valuetext': ariaValueText[0] }) :
                attributes(element, { 'aria-valuenow': valuenow.split(' - ')[1], 'aria-valuetext': ariaValueText[1] })) :
                ((element === this.firstHandle) ?
                    attributes(element, { 'aria-valuenow': valuenow.split(' - ')[1], 'aria-valuetext': ariaValueText[1] }) :
                    attributes(element, { 'aria-valuenow': valuenow.split(' - ')[0], 'aria-valuetext': ariaValueText[0] }));
        }
    }
    handleValueUpdate() {
        let hVal;
        if (this.type === 'Range') {
            if (this.activeHandle === 1) {
                hVal = this.handleVal1;
            }
            else {
                hVal = this.handleVal2;
            }
        }
        else {
            hVal = this.handleVal1;
        }
        return hVal;
    }
    buttonClick(args) {
        let value;
        let enabledRTL = this.enableRtl && this.orientation !== 'Vertical';
        let hVal = this.handleValueUpdate();
        if ((args.keyCode === 40) || (args.keyCode === 37)
            || args.currentTarget.classList.contains(classNames.firstButton)) {
            enabledRTL ? (value = this.add(hVal, parseFloat(this.step.toString()), true)) :
                (value = this.add(hVal, parseFloat(this.step.toString()), false));
        }
        else if ((args.keyCode === 38) || (args.keyCode === 39) ||
            args.currentTarget.classList.contains(classNames.secondButton)) {
            enabledRTL ? (value = this.add(hVal, parseFloat(this.step.toString()), false)) :
                (value = this.add(hVal, parseFloat(this.step.toString()), true));
        }
        else if ((args.keyCode === 33
            || args.currentTarget.classList.contains(classNames.firstButton))) {
            enabledRTL ? (value = this.add(hVal, parseFloat(this.ticks.largeStep.toString()), false)) :
                (value = this.add(hVal, parseFloat(this.ticks.largeStep.toString()), true));
        }
        else if ((args.keyCode === 34) ||
            args.currentTarget.classList.contains(classNames.secondButton)) {
            enabledRTL ? (value = this.add(hVal, parseFloat(this.ticks.largeStep.toString()), true)) :
                (value = this.add(hVal, parseFloat(this.ticks.largeStep.toString()), false));
        }
        else if ((args.keyCode === 36)) {
            value = parseFloat(this.min.toString());
        }
        else if ((args.keyCode === 35)) {
            value = parseFloat(this.max.toString());
        }
        this.changeHandleValue(value);
        if (this.isMaterial && !this.tooltip.isVisible &&
            !this.getHandle().classList.contains(classNames.sliderTabHandle)) {
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
    tooltipAnimation() {
        if (this.tooltip.isVisible) {
            let tooltipObj = this.activeHandle === 1 ? this.firstTooltipObj : this.secondTooltipObj;
            let tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
            if (this.isMaterial) {
                !tooltipElement.classList.contains(classNames.materialTooltipOpen) ? this.openMaterialTooltip() : this.refreshTooltip();
            }
            else {
                tooltipObj.animation = { open: { effect: 'None' }, close: { effect: 'FadeOut', duration: 500 } };
                this.openTooltip();
            }
        }
    }
    buttonUp(args) {
        if (this.tooltip.isVisible) {
            if (!this.isMaterial) {
                let tooltipObj = this.activeHandle === 1 ? this.firstTooltipObj : this.secondTooltipObj;
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
    setRangeBar() {
        if (this.orientation === 'Horizontal') {
            if (this.type === 'MinRange') {
                this.enableRtl ? (this.rangeBar.style.right = '0px') : (this.rangeBar.style.left = '0px');
                setStyleAttribute(this.rangeBar, { 'width': isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + 'px' });
            }
            else {
                this.enableRtl ? (this.rangeBar.style.right =
                    this.handlePos1 + 'px') : (this.rangeBar.style.left = this.handlePos1 + 'px');
                setStyleAttribute(this.rangeBar, { 'width': this.handlePos2 - this.handlePos1 + 'px' });
            }
        }
        else {
            if (this.type === 'MinRange') {
                this.rangeBar.style.bottom = '0px';
                setStyleAttribute(this.rangeBar, { 'height': isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + 'px' });
            }
            else {
                this.rangeBar.style.bottom = this.handlePos1 + 'px';
                setStyleAttribute(this.rangeBar, { 'height': this.handlePos2 - this.handlePos1 + 'px' });
            }
        }
    }
    setValue() {
        this.handleVal1 = isNullOrUndefined(this.value) ? this.checkHandleValue(parseFloat(this.min.toString())) :
            this.checkHandleValue(parseFloat(this.value.toString()));
        this.handlePos1 = this.checkHandlePosition(this.handleVal1);
        this.preHandlePos1 = this.handlePos1;
        isNullOrUndefined(this.activeHandle) ? (this.type === 'Range' ? this.activeHandle = 2 : this.activeHandle = 1) :
            this.activeHandle = this.activeHandle;
        if (this.type === 'Default' || this.type === 'MinRange') {
            this.setHandlePosition();
            this.handleStart();
            this.value = this.handleVal1;
            this.setAriaAttrValue(this.firstHandle);
            this.changeEvent('changed');
        }
        else {
            this.validateRangeValue();
        }
        if (this.type !== 'Default') {
            this.setRangeBar();
        }
    }
    rangeValueUpdate() {
        if (this.value === null || typeof (this.value) !== 'object') {
            this.value = [parseFloat(formatUnit(this.min)), parseFloat(formatUnit(this.max))];
        }
    }
    validateRangeValue() {
        this.rangeValueUpdate();
        this.setRangeValue();
    }
    modifyZindex() {
        if (this.type === 'Range') {
            if (this.activeHandle === 1) {
                this.firstHandle.style.zIndex = (this.zIndex + 4) + '';
                this.secondHandle.style.zIndex = (this.zIndex + 3) + '';
                if (this.isMaterial && this.tooltip.isVisible && this.firstTooltipElement && this.secondTooltipElement) {
                    this.firstTooltipElement.style.zIndex = (this.zIndex + 4) + '';
                    this.secondTooltipElement.style.zIndex = (this.zIndex + 3) + '';
                }
            }
            else {
                this.firstHandle.style.zIndex = (this.zIndex + 3) + '';
                this.secondHandle.style.zIndex = (this.zIndex + 4) + '';
                if (this.isMaterial && this.tooltip.isVisible && this.firstTooltipElement && this.secondTooltipElement) {
                    this.firstTooltipElement.style.zIndex = (this.zIndex + 3) + '';
                    this.secondTooltipElement.style.zIndex = (this.zIndex + 4) + '';
                }
            }
        }
        else if (this.isMaterial && this.tooltip.isVisible && this.firstTooltipElement) {
            this.firstTooltipElement.style.zIndex = (this.zIndex + 4) + '';
        }
    }
    setHandlePosition() {
        let pos = (this.activeHandle === 1) ? this.handlePos1 : this.handlePos2;
        let val = (this.activeHandle === 1) ? this.handleVal1 : this.handleVal2;
        let handle;
        let tooltipElement;
        if (this.isMaterial && this.tooltip.isVisible) {
            tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
            handle = [this.getHandle(), (this.activeHandle === 1 ? this.firstMaterialHandle : this.secondMaterialHandle)];
        }
        else {
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
        }
        else {
            handle[0].classList.remove(classNames.sliderHandleStart);
            if (this.tooltip.isVisible && this.isMaterial) {
                handle[1].classList.remove(classNames.sliderHandleStart);
                if (tooltipElement) {
                    tooltipElement.classList.remove(classNames.sliderTooltipStart);
                }
            }
        }
        handle.forEach((handle) => {
            if (this.orientation === 'Horizontal') {
                this.enableRtl ? (handle.style.right =
                    `${pos}px`) : (handle.style.left = `${pos}px`);
            }
            else {
                handle.style.bottom = `${pos}px`;
            }
        });
        this.changeEvent('change');
    }
    getHandle() {
        return (this.activeHandle === 1) ? this.firstHandle : this.secondHandle;
    }
    setRangeValue() {
        let temp = this.activeHandle;
        this.updateRangeValue();
        this.activeHandle = 1;
        this.setHandlePosition();
        this.activeHandle = 2;
        this.setHandlePosition();
        this.activeHandle = 1;
    }
    changeEvent(eventName) {
        let previous = eventName === 'change' ? this.previousVal : this.previousChanged;
        if (this.type !== 'Range') {
            this.setProperties({ 'value': this.handleVal1 }, true);
            if (previous !== this.value) {
                this.trigger(eventName, this.changeEventArgs(eventName));
                this.setPreviousVal(eventName, this.value);
            }
            this.setAriaAttrValue(this.firstHandle);
        }
        else {
            let value = this.value = [this.handleVal1, this.handleVal2];
            this.setProperties({ 'value': value }, true);
            if (previous.length === this.value.length
                && this.value[0] !== previous[0] || this.value[1] !== previous[1]) {
                this.trigger(eventName, this.changeEventArgs(eventName));
                this.setPreviousVal(eventName, this.value);
            }
            this.setAriaAttrValue(this.getHandle());
        }
        this.hiddenInput.value = this.value.toString();
    }
    changeEventArgs(eventName) {
        let eventArgs;
        if (this.tooltip.isVisible && this.firstTooltipObj) {
            this.tooltipValue();
            eventArgs = {
                value: this.value,
                previousValue: eventName === 'change' ? this.previousVal : this.previousChanged,
                action: eventName, text: this.firstTooltipObj.content
            };
        }
        else {
            eventArgs = {
                value: this.value,
                previousValue: eventName === 'change' ? this.previousVal : this.previousChanged,
                action: eventName, text: isNullOrUndefined(this.ticksFormatInfo.format) ? this.value.toString() :
                    (this.type !== 'Range' ? this.formatString(this.value, this.ticksFormatInfo).formatString :
                        (this.formatString(this.value[0], this.ticksFormatInfo).formatString + ' - ' +
                            this.formatString(this.value[1], this.ticksFormatInfo).formatString))
            };
        }
        return eventArgs;
    }
    setPreviousVal(eventName, value) {
        if (eventName === 'change') {
            this.previousVal = value;
        }
        else {
            this.previousChanged = value;
        }
    }
    updateRangeValue() {
        let values = this.value.toString().split(',').map(Number);
        if ((this.enableRtl && this.orientation !== 'Vertical') || this.rtl) {
            this.value = [values[1], values[0]];
        }
        else {
            this.value = [values[0], values[1]];
        }
        if (this.enableRtl && this.orientation !== 'Vertical') {
            this.handleVal1 = this.checkHandleValue(this.value[1]);
            this.handleVal2 = this.checkHandleValue(this.value[0]);
        }
        else {
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
    checkHandlePosition(value) {
        let pos;
        value = (100 *
            (value - (parseFloat(formatUnit(this.min))))) / ((parseFloat(formatUnit(this.max))) - (parseFloat(formatUnit(this.min))));
        if (this.orientation === 'Horizontal') {
            pos = this.element.getBoundingClientRect().width * (value / 100);
        }
        else {
            pos = this.element.getBoundingClientRect().height * (value / 100);
        }
        if (((parseFloat(formatUnit(this.max))) === (parseFloat(formatUnit(this.min))))) {
            if (this.orientation === 'Horizontal') {
                pos = this.element.getBoundingClientRect().width;
            }
            else {
                pos = this.element.getBoundingClientRect().height;
            }
        }
        return pos;
    }
    checkHandleValue(value) {
        if (this.min > this.max) {
            this.min = this.max;
        }
        if (this.min === this.max) {
            return (parseFloat(formatUnit(this.max)));
        }
        let handle = this.tempStartEnd();
        if (value < handle.start) {
            value = handle.start;
        }
        else if (value > handle.end) {
            value = handle.end;
        }
        return value;
    }
    onResize() {
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
            this.enableRtl ? this.firstHandle.style.right =
                `${this.handlePos1}px` : this.firstHandle.style.left = `${this.handlePos1}px`;
            if (this.isMaterial && this.tooltip.isVisible && this.firstMaterialHandle) {
                this.enableRtl ? this.firstMaterialHandle.style.right =
                    `${this.handlePos1}px` : this.firstMaterialHandle.style.left = `${this.handlePos1}px`;
            }
            if (this.type === 'MinRange') {
                this.enableRtl ? (this.rangeBar.style.right = '0px') : (this.rangeBar.style.left = '0px');
                setStyleAttribute(this.rangeBar, { 'width': isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + 'px' });
            }
            else if (this.type === 'Range') {
                this.enableRtl ? this.secondHandle.style.right =
                    `${this.handlePos2}px` : this.secondHandle.style.left = `${this.handlePos2}px`;
                if (this.isMaterial && this.tooltip.isVisible && this.secondMaterialHandle) {
                    this.enableRtl ? this.secondMaterialHandle.style.right =
                        `${this.handlePos2}px` : this.secondMaterialHandle.style.left = `${this.handlePos2}px`;
                }
                this.enableRtl ? (this.rangeBar.style.right =
                    this.handlePos1 + 'px') : (this.rangeBar.style.left = this.handlePos1 + 'px');
                setStyleAttribute(this.rangeBar, { 'width': this.handlePos2 - this.handlePos1 + 'px' });
            }
        }
        else {
            this.firstHandle.style.bottom = `${this.handlePos1}px`;
            if (this.isMaterial && this.tooltip.isVisible && this.firstMaterialHandle) {
                this.firstMaterialHandle.style.bottom = `${this.handlePos1}px`;
            }
            if (this.type === 'MinRange') {
                this.rangeBar.style.bottom = '0px';
                setStyleAttribute(this.rangeBar, { 'height': isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + 'px' });
            }
            else if (this.type === 'Range') {
                this.secondHandle.style.bottom = `${this.handlePos2}px`;
                if (this.isMaterial && this.tooltip.isVisible && this.secondMaterialHandle) {
                    this.secondMaterialHandle.style.bottom = `${this.handlePos2}px`;
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
            setTimeout(() => {
                this.firstHandle.style.transition = this.scaleTransform;
                if (this.type === 'Range') {
                    this.secondHandle.style.transition = this.scaleTransform;
                }
            });
        }
        this.refreshTooltip();
    }
    changeHandleValue(value) {
        let position = null;
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
        }
        else {
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
    tempStartEnd() {
        if (this.min > this.max) {
            return {
                start: this.max,
                end: this.min
            };
        }
        else {
            return {
                start: this.min,
                end: this.max
            };
        }
    }
    xyToPosition(position) {
        let pos;
        if (this.min === this.max) {
            return 100;
        }
        if (this.orientation === 'Horizontal') {
            let left = position.x - this.element.getBoundingClientRect().left;
            let num = this.element.offsetWidth / 100;
            this.val = (left / num);
        }
        else {
            let top = position.y - this.element.getBoundingClientRect().top;
            let num = this.element.offsetHeight / 100;
            this.val = 100 - (top / num);
        }
        let val = this.stepValueCalculation(this.val);
        if (val < 0) {
            val = 0;
        }
        else if (val > 100) {
            val = 100;
        }
        if (this.enableRtl && this.orientation !== 'Vertical') {
            val = 100 - val;
        }
        if (this.orientation === 'Horizontal') {
            pos = this.element.getBoundingClientRect().width * (val / 100);
        }
        else {
            pos = this.element.getBoundingClientRect().height * (val / 100);
        }
        return pos;
    }
    stepValueCalculation(value) {
        if (this.step === 0) {
            this.step = 1;
        }
        let percentStep = (parseFloat(formatUnit(this.step))) / ((parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min))) / 100);
        let remain = value % Math.abs(percentStep);
        if (remain !== 0) {
            if ((percentStep / 2) > remain) {
                value -= remain;
            }
            else {
                value += Math.abs(percentStep) - remain;
            }
        }
        return value;
    }
    add(a, b, addition) {
        let precision;
        let x = Math.pow(10, precision || 3);
        let val;
        if (addition) {
            val = (Math.round(a * x) + Math.round(b * x)) / x;
        }
        else {
            val = (Math.round(a * x) - Math.round(b * x)) / x;
        }
        return val;
    }
    round(a) {
        let f = this.step.toString().split('.');
        return f[1] ? parseFloat(a.toFixed(f[1].length)) : Math.round(a);
    }
    positionToValue(pos) {
        let val;
        let diff = parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min));
        if (this.orientation === 'Horizontal') {
            val = (pos / this.element.getBoundingClientRect().width) * diff;
        }
        else {
            val = (pos / this.element.getBoundingClientRect().height) * diff;
        }
        let total = this.add(val, parseFloat(this.min.toString()), true);
        return (total);
    }
    sliderBarClick(evt) {
        evt.preventDefault();
        let pos;
        if (evt.type === 'mousedown' || evt.type === 'click') {
            pos = { x: evt.clientX, y: evt.clientY };
        }
        else if (evt.type === 'touchstart') {
            pos = { x: evt.changedTouches[0].clientX, y: evt.changedTouches[0].clientY };
        }
        let handlepos = this.xyToPosition(pos);
        let handleVal = this.positionToValue(handlepos);
        if (this.type !== 'Range') {
            this.handleVal1 = handleVal;
            this.firstHandle.classList.add(classNames.sliderActiveHandle);
        }
        if (this.type === 'Range' && (this.handlePos2 - handlepos) < (handlepos - this.handlePos1)) {
            this.secondHandle.classList.add(classNames.sliderActiveHandle);
            this.handlePos2 = this.preHandlePos2 = handlepos;
            this.handleVal2 = handleVal;
            this.activeHandle = 2;
            this.modifyZindex();
            this.secondHandle.focus();
        }
        else {
            this.firstHandle.classList.add(classNames.sliderActiveHandle);
            this.handlePos1 = this.preHandlePos1 = handlepos;
            this.handleVal1 = handleVal;
            this.activeHandle = 1;
            this.modifyZindex();
            this.firstHandle.focus();
        }
        if (this.isMaterial && this.tooltip.isVisible) {
            let tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
            tooltipElement.classList.add(classNames.materialTooltipActive);
        }
        let focusedElement = this.element.querySelector('.' + classNames.sliderTabHandle);
        if (focusedElement && this.getHandle() !== focusedElement) {
            focusedElement.classList.remove(classNames.sliderTabHandle);
        }
        let handle = this.activeHandle === 1 ? this.firstHandle : this.secondHandle;
        if (evt.target === handle) {
            if (this.isMaterial && !this.tooltip.isVisible &&
                !this.getHandle().classList.contains(classNames.sliderTabHandle)) {
                this.materialChange();
            }
            this.tooltipAnimation();
            return;
        }
        if (!this.checkRepeatedValue(handleVal)) {
            return;
        }
        let transition = this.isMaterial && this.tooltip.isVisible ?
            this.transitionOnMaterialTooltip : this.transition;
        this.getHandle().style.transition = transition.handle;
        if (this.type !== 'Default') {
            this.rangeBar.style.transition = transition.rangeBar;
        }
        this.setHandlePosition();
        if (this.type !== 'Default') {
            this.setRangeBar();
        }
    }
    refreshTooltipOnMove() {
        if (this.tooltip.isVisible) {
            this.tooltipValue();
            this.activeHandle === 1 ? this.firstTooltipObj.refresh(this.firstHandle) :
                this.secondTooltipObj.refresh(this.secondHandle);
        }
    }
    sliderDown(event) {
        event.preventDefault();
        this.sliderBarClick(event);
        EventHandler.add(document, 'mousemove touchmove', this.sliderBarMove, this);
        EventHandler.add(document, 'mouseup touchend', this.sliderBarUp, this);
    }
    sliderBarUp() {
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
                let tooltipObj = this.activeHandle === 1 ? this.firstTooltipObj : this.secondTooltipObj;
                tooltipObj.animation = { open: { effect: 'None' }, close: { effect: 'None' } };
            }
        }
        if (this.isMaterial) {
            this.getHandle().style.transform = this.getHandle().style.transform.replace('scale(1.5)', 'scale(1)');
            if (this.tooltip.isVisible) {
                let tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
                tooltipElement.classList.remove(classNames.materialTooltipActive);
            }
        }
        EventHandler.remove(document, 'mousemove touchmove', this.sliderBarMove);
        EventHandler.remove(document, 'mouseup touchend', this.sliderBarUp);
    }
    sliderBarMove(evt) {
        if (evt.type !== 'touchmove') {
            evt.preventDefault();
        }
        let pos;
        if (evt.type === 'mousemove') {
            pos = { x: evt.clientX, y: evt.clientY };
        }
        else {
            pos = { x: evt.changedTouches[0].clientX, y: evt.changedTouches[0].clientY };
        }
        let handlepos = this.xyToPosition(pos);
        let handleVal = this.positionToValue(handlepos);
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
            }
            else if (this.activeHandle === 2) {
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
        if (this.isMaterial && !this.tooltip.isVisible &&
            !this.getHandle().classList.contains(classNames.sliderTabHandle)) {
            this.materialChange();
        }
        let tooltipElement = this.activeHandle === 1 ? this.firstTooltipElement : this.secondTooltipElement;
        if (this.tooltip.isVisible) {
            if (this.isMaterial) {
                !tooltipElement.classList.contains(classNames.materialTooltipOpen) ? this.openMaterialTooltip() :
                    this.refreshTooltipOnMove();
            }
            else {
                !tooltipElement ? this.openTooltip() : this.refreshTooltipOnMove();
            }
        }
        if (this.type !== 'Default') {
            this.setRangeBar();
        }
    }
    checkRepeatedValue(currentValue) {
        if (this.type === 'Range') {
            let previousVal = this.enableRtl && this.orientation !== 'Vertical' ? (this.activeHandle === 1 ?
                this.previousVal[1] : this.previousVal[0]) :
                (this.activeHandle === 1 ? this.previousVal[0] : this.previousVal[1]);
            if (currentValue === previousVal) {
                return 0;
            }
        }
        else {
            if (currentValue === this.previousVal) {
                return 0;
            }
        }
        return 1;
    }
    refreshTooltip() {
        if (this.tooltip.isVisible && this.firstTooltipObj) {
            this.tooltipValue();
            this.firstTooltipObj.refresh(this.firstHandle);
            if (this.type === 'Range') {
                this.secondTooltipObj.refresh(this.secondHandle);
            }
        }
    }
    openTooltip() {
        if (this.tooltip.isVisible && this.firstTooltipObj) {
            this.tooltipValue();
            if (this.isMaterial) {
                this.openMaterialTooltip();
            }
            else {
                if (this.activeHandle === 1) {
                    this.firstTooltipObj.open(this.firstHandle);
                }
                else {
                    this.secondTooltipObj.open(this.secondHandle);
                }
            }
        }
    }
    keyDown(event) {
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
    wireButtonEvt(destroy) {
        if (!destroy) {
            EventHandler.add(this.firstBtn, 'mouseleave touchleave', this.buttonFocusOut, this);
            EventHandler.add(this.secondBtn, 'mouseleave touchleave', this.buttonFocusOut, this);
            EventHandler.add(this.firstBtn, 'mousedown touchstart', this.repeatHandlerMouse, this);
            EventHandler.add(this.firstBtn, 'mouseup mouseleave touchup touchend', this.repeatHandlerUp, this);
            EventHandler.add(this.secondBtn, 'mousedown touchstart', this.repeatHandlerMouse, this);
            EventHandler.add(this.secondBtn, 'mouseup mouseleave touchup touchend', this.repeatHandlerUp, this);
            EventHandler.add(this.firstBtn, 'focusout', this.sliderFocusOut, this);
            EventHandler.add(this.secondBtn, 'focusout', this.sliderFocusOut, this);
        }
        else {
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
    wireEvents() {
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
    unwireEvents() {
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
    keyUp(event) {
        if (event.keyCode === 9 && event.target.classList.contains(classNames.sliderHandle)) {
            if (!event.target.classList.contains(classNames.sliderTabHandle)) {
                if (this.element.querySelector('.' + classNames.sliderTabHandle)) {
                    this.element.querySelector('.' + classNames.sliderTabHandle).classList.remove(classNames.sliderTabHandle);
                }
                event.target.classList.add(classNames.sliderTabHandle);
                let parentElement = event.target.parentElement;
                if (parentElement === this.element) {
                    parentElement.querySelector('.' + classNames.sliderTrack).classList.add(classNames.sliderTabTrack);
                    if (this.type === 'Range' || this.type === 'MinRange') {
                        parentElement.querySelector('.' + classNames.rangeBar).classList.add(classNames.sliderTabRange);
                    }
                }
                if (this.type === 'Range') {
                    (event.target.previousSibling).classList.contains(classNames.sliderHandle) ?
                        this.activeHandle = 2 : this.activeHandle = 1;
                }
                this.tooltipAnimation();
                if (this.tooltip.isVisible && this.tooltip.showOn !== 'Always' && !this.isMaterial) {
                    this.closeTooltip();
                }
            }
        }
        this.changeEvent('changed');
    }
    hover(event) {
        if (!isNullOrUndefined(event)) {
            if (event.type === 'mouseover' || event.type === 'touchmove' || event.type === 'mousemove' ||
                event.type === 'pointermove' || event.type === 'touchstart') {
                this.sliderContainer.classList.add(classNames.sliderHover);
            }
            else {
                this.sliderContainer.classList.remove(classNames.sliderHover);
            }
        }
    }
    sliderFocusOut(event) {
        if (event.relatedTarget !== this.secondHandle && event.relatedTarget !== this.firstHandle &&
            event.relatedTarget !== this.element && event.relatedTarget !== this.firstBtn && event.relatedTarget !== this.secondBtn) {
            this.hiddenInput.focus();
            this.hiddenInput.blur();
            if (this.isMaterial && this.tooltip.isVisible) {
                let transformProperties = this.getTooltipTransformProperties(this.previousTooltipClass);
                let tooltipElement = this.type !== 'Range' ? [this.firstTooltipElement] :
                    [this.firstTooltipElement, this.secondTooltipElement];
                let hiddenHandle = this.type !== 'Range' ? [this.firstHandle] : [this.firstHandle, this.secondHandle];
                let handle = this.type !== 'Range' ? [this.firstMaterialHandle] :
                    [this.firstMaterialHandle, this.secondMaterialHandle];
                tooltipElement.forEach((tooltipElement, index) => {
                    if (tooltipElement) {
                        tooltipElement.style.transition = this.scaleTransform;
                        tooltipElement.firstChild.classList.remove(classNames.materialTooltipShow);
                        tooltipElement.firstChild.classList.add(classNames.materialTooltipHide);
                        hiddenHandle[index].style.cursor = '-webkit-grab';
                        hiddenHandle[index].style.cursor = 'grab';
                        handle[index].style.transform = 'scale(1)';
                        tooltipElement.classList.remove(classNames.materialTooltipOpen);
                        if (tooltipElement.firstElementChild.innerText.length > 4) {
                            tooltipElement.style.transform = transformProperties.translate + ' ' + 'scale(0.01)';
                        }
                        else {
                            tooltipElement.style.transform = transformProperties.translate + ' ' +
                                transformProperties.rotate + ' ' + 'scale(0.01)';
                        }
                        setTimeout(() => { tooltipElement.style.transition = 'none'; }, 2500);
                    }
                });
            }
            if (this.element.querySelector('.' + classNames.sliderTabHandle)) {
                this.element.querySelector('.' + classNames.sliderTabHandle).classList.remove(classNames.sliderTabHandle);
            }
            if (this.element.querySelector('.' + classNames.sliderTabTrack)) {
                this.element.querySelector('.' + classNames.sliderTabTrack).classList.remove(classNames.sliderTabTrack);
                if ((this.type === 'Range' || this.type === 'MinRange') &&
                    this.element.querySelector('.' + classNames.sliderTabRange)) {
                    this.element.querySelector('.' + classNames.sliderTabRange).classList.remove(classNames.sliderTabRange);
                }
            }
        }
    }
    closeTooltip() {
        if (this.tooltip.isVisible) {
            this.tooltipValue();
            if (this.activeHandle === 1) {
                this.firstTooltipObj.close();
            }
            else {
                this.secondTooltipObj.close();
            }
        }
    }
    removeElement(element) {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }
    changeSliderType(type) {
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
    changeRtl() {
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
            let enabledRTL = this.enableRtl && this.orientation !== 'Vertical';
            attributes(enabledRTL ? this.secondBtn : this.firstBtn, { 'aria-label': 'Decrease', title: 'Decrease' });
            attributes(enabledRTL ? this.firstBtn : this.secondBtn, { 'aria-label': 'Increase', title: 'Increase' });
        }
    }
    changeOrientation() {
        this.changeSliderType(this.type);
    }
    updateConfig() {
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
    /**
     * Get the properties to be maintained in the persisted state.
     * @private
     */
    getPersistData() {
        let keyEntity = ['value'];
        return this.addOnPersist(keyEntity);
    }
    /**
     * Prepares the slider for safe removal from the DOM.
     * Detaches all event handlers, attributes, and classes to avoid memory leaks.
     * @method destroy
     * @return {void}
     */
    destroy() {
        super.destroy();
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
    /**
     * Calls internally if any of the property value is changed.
     * @private
     */
    onPropertyChanged(newProp, oldProp) {
        for (let prop of Object.keys(newProp)) {
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
                                }
                                else {
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
                        Array.prototype.forEach.call(this.sliderContainer.classList, (className) => {
                            if (className.match(/e-scale-/)) {
                                this.sliderContainer.classList.remove(className);
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
                    }
                    else {
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
    }
    setReadOnly() {
        if (this.readOnly) {
            this.unwireEvents();
            this.sliderContainer.classList.add(classNames.readOnly);
        }
        else {
            this.wireEvents();
            this.sliderContainer.classList.remove(classNames.readOnly);
        }
    }
    setMinMaxValue() {
        this.setValue();
        this.refreshTooltip();
        if (!isNullOrUndefined(this.sliderContainer.querySelector('.' + classNames.scale))) {
            if (this.ul) {
                detach(this.ul);
                Array.prototype.forEach.call(this.sliderContainer.classList, (className) => {
                    if (className.match(/e-scale-/)) {
                        this.sliderContainer.classList.remove(className);
                    }
                });
            }
        }
        if (this.ticks.placement !== 'None') {
            this.renderScale();
            this.setZindex();
        }
    }
    setZindex() {
        this.zIndex = 6;
        if (!isNullOrUndefined(this.ticks) && this.ticks.placement !== 'None') {
            this.ul.style.zIndex = (this.zIndex + -7) + '';
            this.element.style.zIndex = (this.zIndex + 2) + '';
        }
        if (!this.isMaterial && !isNullOrUndefined(this.ticks) && this.ticks.placement === 'Both') {
            this.element.style.zIndex = (this.zIndex + 2) + '';
        }
        this.firstHandle.style.zIndex = (this.zIndex + 3) + '';
        if (this.type === 'Range') {
            this.secondHandle.style.zIndex = (this.zIndex + 4) + '';
        }
    }
    setTooltip() {
        this.changeSliderType(this.type);
    }
    /**
     * Gets the component name
     * @private
     */
    getModuleName() {
        return 'slider';
    }
};
__decorate$2([
    Property(null)
], Slider.prototype, "value", void 0);
__decorate$2([
    Property(1)
], Slider.prototype, "step", void 0);
__decorate$2([
    Property(0)
], Slider.prototype, "min", void 0);
__decorate$2([
    Property(100)
], Slider.prototype, "max", void 0);
__decorate$2([
    Property(false)
], Slider.prototype, "readOnly", void 0);
__decorate$2([
    Property('Default')
], Slider.prototype, "type", void 0);
__decorate$2([
    Complex({}, TicksData)
], Slider.prototype, "ticks", void 0);
__decorate$2([
    Property(true)
], Slider.prototype, "enabled", void 0);
__decorate$2([
    Property(false)
], Slider.prototype, "enableRtl", void 0);
__decorate$2([
    Complex({}, TooltipData)
], Slider.prototype, "tooltip", void 0);
__decorate$2([
    Property(false)
], Slider.prototype, "showButtons", void 0);
__decorate$2([
    Property(true)
], Slider.prototype, "enableAnimation", void 0);
__decorate$2([
    Property('Horizontal')
], Slider.prototype, "orientation", void 0);
__decorate$2([
    Property('')
], Slider.prototype, "cssClass", void 0);
__decorate$2([
    Event()
], Slider.prototype, "created", void 0);
__decorate$2([
    Event()
], Slider.prototype, "change", void 0);
__decorate$2([
    Event()
], Slider.prototype, "changed", void 0);
__decorate$2([
    Event()
], Slider.prototype, "renderingTicks", void 0);
__decorate$2([
    Event()
], Slider.prototype, "renderedTicks", void 0);
__decorate$2([
    Event()
], Slider.prototype, "tooltipChange", void 0);
Slider = __decorate$2([
    NotifyPropertyChanges
], Slider);

/**
 * Slider modules
 */

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * global declarations
 */
const VALIDATE_EMAIL = new RegExp('^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,5}' +
    '|[.]{1}[a-zA-Z]{2,4}[.]{1}[a-zA-Z]{2,4})$');
const VALIDATE_URL = new RegExp('^((ftp|http|https):\/\/)?www\.([A-z]{2,})\.([A-z]{2,})$');
const VALIDATE_DATE_ISO = new RegExp('^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$');
const VALIDATE_DIGITS = new RegExp('^[0-9]*$');
const VALIDATE_PHONE = new RegExp('^[+]?[0-9]{9,13}$');
const VALIDATE_CREDITCARD = new RegExp('^\\d{13,16}$');
/**
 * ErrorOption values
 * @private
 */
var ErrorOption;
(function (ErrorOption) {
    ErrorOption[ErrorOption["Message"] = 0] = "Message";
    ErrorOption[ErrorOption["Label"] = 1] = "Label";
})(ErrorOption || (ErrorOption = {}));
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
let FormValidator = FormValidator_1 = class FormValidator extends Base {
    // Initializes the FormValidator 
    constructor(element, options) {
        super(options, element);
        this.validated = [];
        this.errorRules = [];
        this.allowSubmit = false;
        this.required = 'required';
        this.infoElement = null;
        this.inputElement = null;
        this.selectQuery = 'input:not([type=reset]):not([type=button]), select, textarea';
        /**
         * Specifies the default messages for validation rules.
         * @default : { List of validation message };
         */
        this.defaultMessages = {
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
            equalTo: 'Please enter the valid match text',
        };
        if (typeof this.rules === 'undefined') {
            this.rules = {};
        }
        element = typeof element === 'string' ? select(element, document) : element;
        // Set novalidate to prevent default HTML5 form validation
        if (this.element != null) {
            this.element.setAttribute('novalidate', '');
            this.inputElements = selectAll(this.selectQuery, this.element);
            this.createHTML5Rules();
            this.wireEvents();
        }
        else {
            return undefined;
        }
    }
    /**
     * Add validation rules to the corresponding input element based on `name` attribute.
     * @param {string} name `name` of form field.
     * @param {Object} rules Validation rules for the corresponding element.
     * @return {void}
     */
    addRules(name, rules) {
        if (name) {
            if (this.rules.hasOwnProperty(name)) {
                extend(this.rules[name], rules, {});
            }
            else {
                this.rules[name] = rules;
            }
        }
    }
    /**
     * Remove validation to the corresponding field based on name attribute.
     * When no parameter is passed, remove all the validations in the form.
     * @param {string} name Input name attribute value.
     * @param {string[]} rules List of validation rules need to be remove from the corresponding element.
     * @return {void}
     */
    removeRules(name, rules) {
        if (!name && !rules) {
            this.rules = {};
        }
        else if (this.rules[name] && !rules) {
            delete this.rules[name];
        }
        else if (!isNullOrUndefined(this.rules[name] && rules)) {
            for (let i = 0; i < rules.length; i++) {
                delete this.rules[name][rules[i]];
            }
        }
        else {
            return;
        }
    }
    /**
     * Validate the current form values using defined rules.
     * Returns `true` when the form is valid otherwise `false`
     * @param {string} selected - Optional parameter to validate specified element.
     * @return {boolean}
     */
    validate(selected) {
        let rules = Object.keys(this.rules);
        if (selected && rules.length) {
            this.validateRules(selected);
            //filter the selected element it don't have any valid input element
            return rules.indexOf(selected) !== -1 && this.errorRules.filter((data) => {
                return data.name === selected;
            }).length === 0;
        }
        else {
            for (let name of rules) {
                this.validateRules(name);
            }
            return this.errorRules.length === 0;
        }
    }
    /**
     * Reset the value of all the fields in form.
     * @return {void}
     */
    reset() {
        this.element.reset();
        this.clearForm();
    }
    /**
     * Get input element by name.
     * @param {string} name - Input element name attribute value.
     * @return {HTMLInputElement}
     */
    getInputElement(name) {
        this.inputElement = (select('[name=' + name + ']', this.element));
        return this.inputElement;
    }
    /**
     * Destroy the form validator object and error elements.
     * @return {void}
     */
    destroy() {
        this.reset();
        this.unwireEvents();
        this.rules = {};
        let elements = selectAll('.' + this.errorClass + ', .' + this.validClass, this.element);
        for (let element of elements) {
            element.remove();
        }
        super.destroy();
    }
    /**
     * @private
     */
    onPropertyChanged(newProp, oldProp) {
        // No code are needed
    }
    ;
    /**
     * @private
     */
    getModuleName() {
        return 'formValidator';
    }
    clearForm() {
        this.errorRules = [];
        this.validated = [];
        let elements = selectAll(this.selectQuery, this.element);
        for (let element of elements) {
            let input = element;
            input.removeAttribute('aria-invalid');
            input.classList.remove(this.errorClass);
            if (input.name.length > 0) {
                this.getInputElement(input.name);
                this.getErrorElement(input.name);
                this.hideMessage(input.name);
            }
            input.classList.remove(this.validClass);
        }
    }
    createHTML5Rules() {
        let defRules = ['required', 'regex', 'rangeLength', 'maxLength', 'minLength', 'dateIso', 'digits', 'pattern',
            'data-val-required', 'type', 'data-validation', 'min', 'max', 'range', 'equalTo', 'data-val-minlength-min',
            'data-val-equalto-other', 'data-val-maxlength-max', 'data-val-range-min', 'data-val-regex-pattern', 'data-val-length-max',
            'data-val-creditcard', 'data-val-phone'];
        let acceptedTypes = ['email', 'url', 'date', 'number', 'tel'];
        for (let input of (this.inputElements)) {
            // Default attribute rules 
            let allRule = {};
            for (let rule of defRules) {
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
                            let id = input.getAttribute(rule);
                            this.defRule(input, allRule, rule, id);
                            break;
                        default:
                            if (input.getAttribute('data-val') === 'true') {
                                this.annotationRule(input, allRule, rule, input.getAttribute(rule));
                            }
                            else {
                                this.defRule(input, allRule, rule, input.getAttribute(rule));
                            }
                    }
                }
            }
            //adding pattern type validation
            if (Object.keys(allRule).length !== 0) {
                this.addRules(input.name, allRule);
            }
        }
    }
    annotationRule(input, ruleCon, ruleName, value) {
        let annotationRule = ruleName.split('-');
        let rulesList = ['required', 'creditcard', 'phone', 'maxlength', 'minlength', 'range', 'regex', 'equalto'];
        let ruleFirstName = annotationRule[annotationRule.length - 1];
        let ruleSecondName = annotationRule[annotationRule.length - 2];
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
        }
        else if (rulesList.indexOf(ruleSecondName) !== -1) {
            switch (ruleSecondName) {
                case 'maxlength':
                    this.defRule(input, ruleCon, 'maxLength', value);
                    break;
                case 'minlength':
                    this.defRule(input, ruleCon, 'minLength', value);
                    break;
                case 'range':
                    let minvalue = input.getAttribute('data-val-range-min');
                    let maxvalue = input.getAttribute('data-val-range-max');
                    this.defRule(input, ruleCon, 'range', [minvalue, maxvalue]);
                    break;
                case 'equalto':
                    let id = input.getAttribute(ruleName).split('.');
                    this.defRule(input, ruleCon, 'equalTo', id[id.length - 1]);
                    break;
                case 'regex':
                    this.defRule(input, ruleCon, 'regex', value);
                    break;
            }
        }
    }
    defRule(input, ruleCon, ruleName, value) {
        let message = input.getAttribute('data-' + ruleName + '-message');
        let annotationMessage = input.getAttribute('data-val-' + ruleName);
        if (message) {
            value = [value, message];
        }
        else if (annotationMessage) {
            value = [value, annotationMessage];
        }
        ruleCon[ruleName] = value;
    }
    // Wire events to the form elements
    wireEvents() {
        for (let input of (this.inputElements)) {
            if (FormValidator_1.isCheckable(input)) {
                EventHandler.add(input, 'click', this.clickHandler, this);
            }
            else if (input.tagName === 'SELECT') {
                EventHandler.add(input, 'change', this.changeHandler, this);
            }
            else {
                EventHandler.add(input, 'focusout', this.focusOutHandler, this);
                EventHandler.add(input, 'keyup', this.keyUpHandler, this);
            }
        }
        EventHandler.add(this.element, 'submit', this.submitHandler, this);
        EventHandler.add(this.element, 'reset', this.resetHandler, this);
    }
    // UnWire events to the form elements
    unwireEvents() {
        for (let input of (this.inputElements)) {
            EventHandler.clearEvents(input);
        }
        EventHandler.remove(this.element, 'submit', this.submitHandler);
        EventHandler.remove(this.element, 'reset', this.resetHandler);
    }
    // Handle input element focusout event
    focusOutHandler(e) {
        this.trigger('focusout', e);
        //FormValidator.triggerCallback(this.focusout, e);
        let element = e.target;
        if (this.rules[element.name]) {
            if (this.rules[element.name][this.required] || element.value.length > 0) {
                this.validate(element.name);
            }
            else if (this.validated.indexOf(element.name) === -1) {
                this.validated.push(element.name);
            }
        }
    }
    // Handle input element keyup event
    keyUpHandler(e) {
        this.trigger('keyup', e);
        let element = e.target;
        // List of keys need to prevent while validation
        let excludeKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        if (e.which === 9 && (!this.rules[element.name] || (this.rules[element.name] && !this.rules[element.name][this.required]))) {
            return;
        }
        if (this.validated.indexOf(element.name) !== -1 && this.rules[element.name] && excludeKeys.indexOf(e.which) === -1) {
            this.validate(element.name);
        }
    }
    // Handle input click event
    clickHandler(e) {
        this.trigger('click', e);
        let element = e.target;
        // If element type is not submit allow validation
        if (element.type !== 'submit') {
            this.validate(element.name);
        }
        else if (element.getAttribute('formnovalidate') !== null) {
            // Prevent form validation, if submit button has formnovalidate attribute
            this.allowSubmit = true;
        }
    }
    // Handle input change event
    changeHandler(e) {
        this.trigger('change', e);
        let element = e.target;
        this.validate(element.name);
    }
    // Handle form submit event
    submitHandler(e) {
        this.trigger('submit', e);
        //FormValidator.triggerCallback(this.submit, e);
        // Prevent form submit if validation failed
        if (!this.allowSubmit && !this.validate()) {
            e.preventDefault();
        }
        else {
            this.allowSubmit = false;
        }
    }
    // Handle form reset
    resetHandler() {
        this.clearForm();
    }
    // Validate each rule based on input element name
    validateRules(name) {
        if (!this.rules[name]) {
            return;
        }
        let rules = Object.keys(this.rules[name]);
        this.getInputElement(name);
        this.getErrorElement(name);
        for (let rule of rules) {
            let errorMessage = this.getErrorMessage(this.rules[name][rule], rule);
            let errorRule = { name: name, message: errorMessage };
            let eventArgs = {
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
                }
                else {
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
            }
            else {
                this.hideMessage(name);
                eventArgs.status = 'success';
                this.trigger('validationComplete', eventArgs);
            }
        }
    }
    // Check the input element whether it's value satisfy the validation rule or not
    isValid(name, rule) {
        let params = this.rules[name][rule];
        let param = (params instanceof Array && typeof params[1] === 'string') ? params[0] : params;
        let currentRule = this.rules[name][rule];
        let args = { value: this.inputElement.value, param: param, element: this.inputElement, formElement: this.element };
        this.trigger('validationBegin', args);
        if (currentRule && typeof currentRule[0] === 'function') {
            let fn = currentRule[0];
            return fn.call(this, { element: this.inputElement, value: this.inputElement.value });
        }
        else if (FormValidator_1.isCheckable(this.inputElement)) {
            if (rule !== 'required') {
                return true;
            }
            return selectAll('input[name=' + name + ']:checked', this.element).length > 0;
        }
        else {
            return FormValidator_1.checkValidator[rule](args);
        }
    }
    // Return default error message or custom error message 
    getErrorMessage(ruleValue, rule) {
        let message = (ruleValue instanceof Array && typeof ruleValue[1] === 'string') ? ruleValue[1] : this.defaultMessages[rule];
        let formats = message.match(/{(\d)}/g);
        if (!isNullOrUndefined(formats)) {
            for (let i = 0; i < formats.length; i++) {
                let value = ruleValue instanceof Array ? ruleValue[i] : ruleValue;
                message = message.replace(formats[i], value);
            }
        }
        return message;
    }
    // Create error element based on name and error message
    createErrorElement(name, message, input) {
        let errorElement = createElement(this.errorElement, {
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
        }
        else if (input.hasAttribute('data-msg-containerid') === true) {
            // Append error message into custom div element
            let containerId = input.getAttribute('data-msg-containerid');
            let divElement = this.element.querySelector('#' + containerId);
            divElement.appendChild(errorElement);
        }
        else if (this.customPlacement != null) {
            // Call custom placement function if customPlacement is not null
            this.customPlacement.call(this, this.inputElement, errorElement);
        }
        else {
            this.inputElement.parentNode.insertBefore(errorElement, this.inputElement.nextSibling);
        }
        errorElement.style.display = 'block';
        this.getErrorElement(name);
        this.validated.push(name);
        this.checkRequired(name);
    }
    // Get error element by name
    getErrorElement(name) {
        this.infoElement = select(this.errorElement + '.' + this.errorClass, this.inputElement.parentElement);
        if (!this.infoElement) {
            this.infoElement = select(this.errorElement + '.' + this.errorClass + '[for="' + name + '"]');
        }
        return this.infoElement;
    }
    // Remove existing rule from errorRules object
    removeErrorRules(name) {
        for (let i = 0; i < this.errorRules.length; i++) {
            let rule = this.errorRules[i];
            if (rule.name === name) {
                this.errorRules.splice(i, 1);
            }
        }
    }
    // Show error message to the input element
    showMessage(errorRule) {
        this.infoElement.style.display = 'block';
        this.infoElement.innerHTML = errorRule.message;
        this.checkRequired(errorRule.name);
    }
    // Hide error message based on input name
    hideMessage(name) {
        if (this.infoElement) {
            this.infoElement.style.display = 'none';
            this.removeErrorRules(name);
            this.inputElement.classList.add(this.validClass);
            this.inputElement.classList.remove(this.errorClass);
            this.inputElement.setAttribute('aria-invalid', 'false');
        }
    }
    // Check whether the input element have required rule and its value is not empty
    checkRequired(name) {
        if (!this.rules[name][this.required] && !this.inputElement.value.length) {
            this.infoElement.innerHTML = this.inputElement.value;
            this.infoElement.setAttribute('aria-invalid', 'false');
            this.hideMessage(name);
        }
    }
    // Return boolean result if the input have chekcable or submit types
    static isCheckable(input) {
        let inputType = input.getAttribute('type');
        return inputType && (inputType === 'checkbox' || inputType === 'radio' || inputType === 'submit');
    }
};
// List of function to validate the rules
FormValidator.checkValidator = {
    required: (option) => {
        return option.value.length > 0;
    },
    email: (option) => {
        return VALIDATE_EMAIL.test(option.value);
    },
    url: (option) => {
        return VALIDATE_URL.test(option.value);
    },
    dateIso: (option) => {
        return VALIDATE_DATE_ISO.test(option.value);
    },
    tel: (option) => {
        return VALIDATE_PHONE.test(option.value);
    },
    creditcard: (option) => {
        return VALIDATE_CREDITCARD.test(option.value);
    },
    number: (option) => {
        return !isNaN(Number(option.value)) && option.value.indexOf(' ') === -1;
    },
    digits: (option) => {
        return VALIDATE_DIGITS.test(option.value);
    },
    maxLength: (option) => {
        return option.value.length <= option.param;
    },
    minLength: (option) => {
        return option.value.length >= option.param;
    },
    rangeLength: (option) => {
        let param = option.param;
        return option.value.length >= param[0] && option.value.length <= param[1];
    },
    range: (option) => {
        let param = option.param;
        return !isNaN(Number(option.value)) && Number(option.value) >= param[0] && Number(option.value) <= param[1];
    },
    date: (option) => {
        return !isNaN(new Date(option.value).getTime());
    },
    max: (option) => {
        if (!isNaN(Number(option.value))) {
            // Maximum rule validation for number
            return +option.value <= option.param;
        }
        // Maximum rule validation for date
        return new Date(option.value).getTime() <= new Date(JSON.parse(JSON.stringify(option.param))).getTime();
    },
    min: (option) => {
        if (!isNaN(Number(option.value))) {
            // Minimum rule validation for number
            return +option.value >= option.param;
        }
        // Minimum rule validation for date
        return new Date(option.value).getTime() >= new Date(JSON.parse(JSON.stringify(option.param))).getTime();
    },
    regex: (option) => {
        return new RegExp(option.param).test(option.value);
    },
    equalTo: (option) => {
        let compareTo = option.formElement.querySelector('#' + option.param);
        option.param = compareTo.value;
        return option.param === option.value;
    },
};
__decorate$3([
    Property('e-hidden')
], FormValidator.prototype, "ignore", void 0);
__decorate$3([
    Property()
], FormValidator.prototype, "rules", void 0);
__decorate$3([
    Property('e-error')
], FormValidator.prototype, "errorClass", void 0);
__decorate$3([
    Property('e-valid')
], FormValidator.prototype, "validClass", void 0);
__decorate$3([
    Property('label')
], FormValidator.prototype, "errorElement", void 0);
__decorate$3([
    Property('div')
], FormValidator.prototype, "errorContainer", void 0);
__decorate$3([
    Property(ErrorOption.Label)
], FormValidator.prototype, "errorOption", void 0);
__decorate$3([
    Event()
], FormValidator.prototype, "focusout", void 0);
__decorate$3([
    Event()
], FormValidator.prototype, "keyup", void 0);
__decorate$3([
    Event()
], FormValidator.prototype, "click", void 0);
__decorate$3([
    Event()
], FormValidator.prototype, "change", void 0);
__decorate$3([
    Event()
], FormValidator.prototype, "submit", void 0);
__decorate$3([
    Event()
], FormValidator.prototype, "validationBegin", void 0);
__decorate$3([
    Event()
], FormValidator.prototype, "validationComplete", void 0);
__decorate$3([
    Event()
], FormValidator.prototype, "customPlacement", void 0);
FormValidator = FormValidator_1 = __decorate$3([
    NotifyPropertyChanges
], FormValidator);
var FormValidator_1;

/**
 * Input box Component
 */

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const ROOT$2 = 'e-uploader';
const CONTROL_WRAPPER = 'e-upload';
const INPUT_WRAPPER = 'e-file-select';
const DROP_AREA = 'e-file-drop';
const DROP_WRAPPER = 'e-file-select-wrap';
const LIST_PARENT = 'e-upload-files';
const FILE = 'e-upload-file-list';
const STATUS = 'e-file-status';
const ACTION_BUTTONS = 'e-upload-actions';
const UPLOAD_BUTTONS = 'e-file-upload-btn e-css e-btn e-primary';
const CLEAR_BUTTONS = 'e-file-clear-btn e-css e-btn e-flat';
const FILE_NAME = 'e-file-name';
const FILE_TYPE = 'e-file-type';
const FILE_SIZE = 'e-file-size';
const CLEAR_ICON = 'e-file-remove-btn';
const REMOVE_ICON = 'e-file-delete-btn';
const DRAG_HOVER = 'e-upload-drag-hover';
const PROGRESS_WRAPPER = 'e-upload-progress-wrap';
const PROGRESSBAR = 'e-upload-progress-bar';
const PROGRESSBAR_TEXT = 'e-progress-bar-text';
const UPLOAD_INPROGRESS = 'e-upload-progress';
const UPLOAD_SUCCESS = 'e-upload-success';
const UPLOAD_FAILED = 'e-upload-fails';
const TEXT_CONTAINER = 'e-file-container';
const VALIDATION_FAILS = 'e-validation-fails';
const RTL = 'e-rtl';
const DISABLED = 'e-disabled';
const RTL_CONTAINER = 'e-rtl-container';
const ICON_FOCUSED = 'e-clear-icon-focus';
const PROGRESS_INNER_WRAPPER = 'e-progress-inner-wrap';
class FilesProp extends ChildProperty {
}
__decorate$4([
    Property('')
], FilesProp.prototype, "name", void 0);
__decorate$4([
    Property(null)
], FilesProp.prototype, "size", void 0);
__decorate$4([
    Property('')
], FilesProp.prototype, "type", void 0);
class ButtonsProps extends ChildProperty {
}
__decorate$4([
    Property('Browse')
], ButtonsProps.prototype, "browse", void 0);
__decorate$4([
    Property('Upload')
], ButtonsProps.prototype, "upload", void 0);
__decorate$4([
    Property('Clear')
], ButtonsProps.prototype, "clear", void 0);
class AsyncSettings extends ChildProperty {
}
__decorate$4([
    Property('')
], AsyncSettings.prototype, "saveUrl", void 0);
__decorate$4([
    Property('')
], AsyncSettings.prototype, "removeUrl", void 0);
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
let Uploader = class Uploader extends Component {
    /**
     * Triggers when change the Uploader value.
     */
    constructor(options, element) {
        super(options, element);
        this.initialAttr = { accept: null, multiple: false, disabled: false };
        this.fileList = [];
        this.filesData = [];
        this.uploadedFilesData = [];
        this.isForm = false;
    }
    /**
     * Calls internally if any of the property value is changed.
     * @private
     */
    onPropertyChanged(newProp, oldProp) {
        for (let prop of Object.keys(newProp)) {
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
    }
    setLocalizedTexts() {
        if (isNullOrUndefined(this.template)) {
            if (typeof (this.buttons.browse) === 'string') {
                this.browseButton.innerText = (this.buttons.browse === 'Browse') ?
                    this.localizedTexts('Browse') : this.buttons.browse;
                this.browseButton.setAttribute('title', this.browseButton.innerText);
                this.uploadWrapper.querySelector('.' + DROP_AREA).innerHTML = this.localizedTexts('dropFilesHint');
            }
            this.updateFileList();
        }
    }
    getKeyValue(val) {
        let keyValue;
        for (let key of Object.keys(this.preLocaleObj)) {
            if (this.preLocaleObj[key] === val) {
                keyValue = key;
            }
        }
        return keyValue;
    }
    updateFileList() {
        let element;
        if (this.fileList.length > 0 && !isNullOrUndefined(this.uploadWrapper.querySelector('.' + LIST_PARENT))) {
            for (let i = 0; i < this.fileList.length; i++) {
                element = this.fileList[i].querySelector('.e-file-status');
                element.innerHTML = this.localizedTexts(this.getKeyValue(this.filesData[i].status));
                this.filesData[i].status = this.localizedTexts(this.getKeyValue(this.filesData[i].status));
                if (this.fileList[i].classList.contains(UPLOAD_SUCCESS)) {
                    /* istanbul ignore next */
                    this.fileList[i].querySelector('.e-icons').setAttribute('title', this.localizedTexts('remove'));
                }
                else {
                    this.fileList[i].querySelector('.e-icons').setAttribute('title', this.localizedTexts('delete'));
                }
                if (!this.autoUpload) {
                    this.uploadButton.innerText = (this.buttons.upload === 'Upload') ?
                        this.localizedTexts('Upload') : this.buttons.upload;
                    this.clearButton.innerText = (this.buttons.clear === 'Clear') ?
                        this.localizedTexts('Clear') : this.buttons.clear;
                }
            }
        }
    }
    reRenderFileList() {
        if (this.listParent) {
            detach(this.listParent);
            this.listParent = null;
            this.fileList = [];
            this.removeActionButtons();
            this.createFileList(this.filesData);
            this.renderActionButtons();
        }
    }
    preRender() {
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
        let ejInstance = getValue('ej2_instances', this.element);
        if (this.element.tagName === 'EJS-UPLOADER' || this.element.tagName === 'UPLOADERCOMPONENT') {
            let inputElement = createElement('input', { attrs: { type: 'file' } });
            let index = 0;
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
    getPersistData() {
        return this.addOnPersist([]);
    }
    /**
     * Return the module name of the component.
     */
    getModuleName() {
        return 'uploader';
    }
    /**
     * To Initialize the control rendering
     * @private
     */
    render() {
        this.renderBrowseButton();
        this.initializeUpload();
        this.wireEvents();
        this.setMultipleSelection();
        this.setExtensions(this.allowedExtensions);
        this.setRTL();
        this.renderPreLoadFiles();
        this.setControlStatus();
    }
    renderBrowseButton() {
        this.browseButton = createElement('button', { className: 'e-css e-btn', attrs: { 'type': 'button' } });
        if (typeof (this.buttons.browse) === 'string') {
            this.browseButton.innerText = (this.buttons.browse === 'Browse') ?
                this.localizedTexts('Browse') : this.buttons.browse;
            this.browseButton.setAttribute('title', this.browseButton.innerText);
        }
        else {
            this.browseButton.appendChild(this.buttons.browse);
        }
        this.element.setAttribute('aria-label', 'Uploader');
    }
    renderActionButtons() {
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
    wireActionButtonEvents() {
        EventHandler.add(this.uploadButton, 'click', this.uploadButtonClick, this);
        EventHandler.add(this.clearButton, 'click', this.clearButtonClick, this);
    }
    unwireActionButtonEvents() {
        EventHandler.remove(this.uploadButton, 'click', this.uploadButtonClick);
        EventHandler.remove(this.clearButton, 'click', this.clearButtonClick);
    }
    removeActionButtons() {
        if (this.actionButtons) {
            this.unwireActionButtonEvents();
            detach(this.actionButtons);
            this.actionButtons = null;
        }
    }
    renderButtonTemplates() {
        if (typeof (this.buttons.browse) === 'string') {
            this.browseButton.innerText = (this.buttons.browse === 'Browse') ?
                this.localizedTexts('Browse') : this.buttons.browse;
            this.browseButton.setAttribute('title', this.browseButton.innerText);
        }
        else {
            this.browseButton.appendChild(this.buttons.browse);
        }
        if (this.uploadButton) {
            let uploadText;
            uploadText = isNullOrUndefined(this.buttons.upload) ? 'Upload' : this.buttons.upload;
            this.buttons.upload = uploadText;
            if (typeof (this.buttons.upload) === 'string') {
                this.uploadButton.innerText = (this.buttons.upload === 'Upload') ?
                    this.localizedTexts('Upload') : this.buttons.upload;
                this.uploadButton.setAttribute('title', this.uploadButton.innerText);
            }
            else {
                this.uploadButton.appendChild(this.buttons.upload);
            }
        }
        if (this.clearButton) {
            let clearText;
            clearText = isNullOrUndefined(this.buttons.clear) ? 'Clear' : this.buttons.clear;
            this.buttons.clear = clearText;
            if (typeof (this.buttons.clear) === 'string') {
                this.clearButton.innerText = (this.buttons.clear === 'Clear') ?
                    this.localizedTexts('Clear') : this.buttons.clear;
                this.clearButton.setAttribute('title', this.clearButton.innerText);
            }
            else {
                this.clearButton.appendChild(this.buttons.clear);
            }
        }
    }
    initializeUpload() {
        this.element.setAttribute('tabindex', '-1');
        let inputWrapper = createElement('span', { className: INPUT_WRAPPER });
        this.element.parentElement.insertBefore(inputWrapper, this.element);
        this.dropAreaWrapper = createElement('div', { className: DROP_WRAPPER });
        this.element.parentElement.insertBefore(this.dropAreaWrapper, this.element);
        inputWrapper.appendChild(this.element);
        this.dropAreaWrapper.appendChild(this.browseButton);
        this.dropAreaWrapper.appendChild(inputWrapper);
        let fileDropArea = createElement('span', { className: DROP_AREA });
        fileDropArea.innerHTML = this.localizedTexts('dropFilesHint');
        this.dropAreaWrapper.appendChild(fileDropArea);
        this.uploadWrapper = createElement('div', { className: CONTROL_WRAPPER, attrs: { 'aria-activedescendant': 'li-focused' } });
        this.dropAreaWrapper.parentElement.insertBefore(this.uploadWrapper, this.dropAreaWrapper);
        this.uploadWrapper.appendChild(this.dropAreaWrapper);
        this.setDropArea();
    }
    renderPreLoadFiles() {
        if (isNullOrUndefined(this.files[0].size) || !isNullOrUndefined(this.template)) {
            return;
        }
        let files = [].slice.call(this.files);
        let filesData = [];
        if (!this.multiple) {
            this.clearData();
            files = [files[0]];
        }
        for (let data of files) {
            let fileData = {
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
        this.createFileList(filesData);
        if (!this.autoUpload && this.listParent && !this.actionButtons && !this.isForm) {
            this.renderActionButtons();
        }
        this.checkActionButtonStatus();
    }
    checkActionButtonStatus() {
        if (this.actionButtons) {
            let length = this.uploadWrapper.querySelectorAll('.' + VALIDATION_FAILS).length +
                this.uploadWrapper.querySelectorAll('.e-upload-fails:not(.e-upload-progress)').length +
                this.uploadWrapper.querySelectorAll('span.' + UPLOAD_SUCCESS).length +
                this.uploadWrapper.querySelectorAll('span.' + UPLOAD_INPROGRESS).length;
            if (length > 0 && length === this.uploadWrapper.querySelectorAll('li').length) {
                this.uploadButton.setAttribute('disabled', 'disabled');
            }
            else {
                this.uploadButton.removeAttribute('disabled');
            }
        }
    }
    setDropArea() {
        let dropTextArea = this.dropAreaWrapper.querySelector('.e-file-drop');
        if (this.dropArea) {
            this.dropZoneElement = (typeof (this.dropArea) !== 'string') ? this.dropArea :
                document.querySelector(this.dropArea);
            let element = this.element;
            let enableDropText = false;
            while (element.parentNode) {
                element = element.parentNode;
                if (element === this.dropZoneElement) {
                    enableDropText = true;
                }
            }
            if (!enableDropText) {
                dropTextArea.textContent = '';
            }
        }
        else {
            this.dropZoneElement = this.uploadWrapper;
            dropTextArea.textContent = this.localizedTexts('dropFilesHint');
        }
        this.bindDropEvents();
    }
    setMultipleSelection() {
        if (this.multiple && !this.element.hasAttribute('multiple')) {
            let newAttr = document.createAttribute('multiple');
            this.element.setAttributeNode(newAttr);
        }
        else if (!this.multiple) {
            this.element.removeAttribute('multiple');
        }
    }
    checkAutoUpload(fileData) {
        if (this.autoUpload) {
            this.upload(fileData);
            this.removeActionButtons();
        }
        else if (!this.actionButtons) {
            this.renderActionButtons();
        }
        this.checkActionButtonStatus();
    }
    wireEvents() {
        EventHandler.add(this.browseButton, 'click', this.browseButtonClick, this);
        EventHandler.add(this.element, 'change', this.onSelectFiles, this);
        EventHandler.add(document, 'click', this.removeFocus, this);
        this.keyboardModule = new KeyboardEvents(this.uploadWrapper, {
            keyAction: this.keyActionHandler.bind(this),
            keyConfigs: this.keyConfigs,
            eventName: 'keydown',
        });
        if (this.isForm) {
            EventHandler.add(this.element.closest('form'), 'reset', this.resetForm, this);
        }
    }
    unWireEvents() {
        EventHandler.remove(this.browseButton, 'click', this.browseButtonClick);
        EventHandler.remove(this.element, 'change', this.onSelectFiles);
        EventHandler.remove(document, 'click', this.removeFocus);
        this.keyboardModule.destroy();
    }
    resetForm() {
        this.clearAll();
        this.element.value = '';
    }
    keyActionHandler(e) {
        switch (e.action) {
            case 'next':
                if (e.target === this.browseButton && isNullOrUndefined(this.listParent)) {
                    this.browseButton.blur();
                }
                else if (e.target === this.uploadButton) {
                    this.uploadButton.blur();
                }
                else {
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
                }
                else {
                    this.setReverseFocus(e);
                    e.preventDefault();
                    e.stopPropagation();
                }
                break;
            case 'enter':
                if (e.target === this.clearButton) {
                    this.clearButtonClick();
                }
                else if (e.target === this.uploadButton) {
                    this.uploadButtonClick();
                }
                else if (e.target === this.browseButton) {
                    this.browseButtonClick();
                }
                else {
                    this.removeFiles(e);
                    this.browseButton.focus();
                }
                e.preventDefault();
                e.stopPropagation();
                break;
        }
    }
    setReverseFocus(e) {
        let target = e.target;
        if (target === this.uploadButton) {
            this.uploadButton.blur();
            this.clearButton.focus();
        }
        else if (target === this.clearButton && this.listParent && this.listParent.querySelector('.e-icons')) {
            this.clearButton.blur();
            let items = [].slice.call(this.listParent.querySelectorAll('span.e-icons'));
            items[items.length - 1].classList.add(ICON_FOCUSED);
            items[items.length - 1].focus();
        }
        else {
            let iconElements = [].slice.call(this.listParent.querySelectorAll('span.e-icons'));
            let index = iconElements.indexOf(target);
            if (index > 0) {
                this.removeFocus();
                iconElements[index - 1].classList.add(ICON_FOCUSED);
                iconElements[index - 1].focus();
            }
            else {
                this.removeFocus();
                this.browseButton.focus();
            }
        }
    }
    setTabFocus(e) {
        let target = e.target;
        if (target === this.clearButton) {
            this.removeFocus();
            if (this.uploadButton.hasAttribute('disabled')) {
                return;
            }
            this.uploadButton.focus();
        }
        else if (target.classList.contains('e-icons')) {
            let iconElements = [].slice.call(this.listParent.querySelectorAll('span.e-icons'));
            let index = iconElements.indexOf(target);
            if (index < (iconElements.length - 1)) {
                this.removeFocus();
                iconElements[index + 1].classList.add(ICON_FOCUSED);
                iconElements[index + 1].focus();
            }
            else {
                this.removeFocus();
                this.clearButton.focus();
            }
        }
        else {
            this.browseButton.blur();
            let iconElement = this.listParent.querySelector('span.e-icons');
            iconElement.focus();
            iconElement.classList.add(ICON_FOCUSED);
        }
    }
    removeFocus() {
        if (this.uploadWrapper && this.listParent && this.listParent.querySelector('.' + ICON_FOCUSED)) {
            document.activeElement.blur();
            this.listParent.querySelector('.' + ICON_FOCUSED).classList.remove(ICON_FOCUSED);
        }
    }
    browseButtonClick() {
        this.element.click();
    }
    uploadButtonClick() {
        this.upload(this.filesData);
    }
    clearButtonClick() {
        this.clearAll();
    }
    bindDropEvents() {
        if (this.dropZoneElement) {
            EventHandler.add(this.dropZoneElement, 'drop', this.dropElement, this);
            EventHandler.add(this.dropZoneElement, 'dragover', this.dragHover, this);
            EventHandler.add(this.dropZoneElement, 'dragleave', this.onDragLeave, this);
        }
    }
    unBindDropEvents() {
        if (this.dropZoneElement) {
            EventHandler.remove(this.dropZoneElement, 'drop', this.dropElement);
            EventHandler.remove(this.dropZoneElement, 'dragover', this.dragHover);
            EventHandler.remove(this.dropZoneElement, 'dragleave', this.onDragLeave);
        }
    }
    onDragLeave(e) {
        this.dropZoneElement.classList.remove(DRAG_HOVER);
    }
    dragHover(e) {
        if (!this.enabled) {
            return;
        }
        this.dropZoneElement.classList.add(DRAG_HOVER);
        e.preventDefault();
        e.stopPropagation();
    }
    dropElement(e) {
        this.dropZoneElement.classList.remove(DRAG_HOVER);
        this.onSelectFiles(e);
        e.preventDefault();
        e.stopPropagation();
    }
    removeFiles(args) {
        if (!this.enabled) {
            return;
        }
        let selectedElement = args.target.parentElement;
        let index = this.fileList.indexOf(selectedElement);
        let fileData = this.filesData[index];
        this.remove(fileData);
        this.element.value = '';
        this.checkActionButtonStatus();
    }
    removeFilesData(file, customTemplate) {
        if (customTemplate) {
            return;
        }
        let selectedElement = this.getLiElement(file);
        if (isNullOrUndefined(selectedElement)) {
            return;
        }
        detach(selectedElement);
        let index = this.fileList.indexOf(selectedElement);
        this.fileList.splice(index, 1);
        this.filesData.splice(index, 1);
        if (this.fileList.length === 0 && !isNullOrUndefined(this.listParent)) {
            detach(this.listParent);
            this.listParent = null;
            this.removeActionButtons();
        }
    }
    removeUploadedFile(file, eventArgs, custom) {
        let selectedFiles = file;
        let ajax = new XMLHttpRequest();
        ajax.addEventListener('load', (e) => { this.removeCompleted(e, selectedFiles, custom); }, false);
        /* istanbul ignore next */
        ajax.addEventListener('error', (e) => { this.removeFailed(e, selectedFiles, custom); }, false);
        ajax.open('POST', this.asyncSettings.removeUrl);
        eventArgs.currentRequest = ajax;
        this.trigger('removing', eventArgs);
        /* istanbul ignore next */
        if (eventArgs.cancel) {
            return;
        }
        let name = this.element.getAttribute('name');
        let formData = new FormData();
        formData.append(name, selectedFiles.rawFile);
        this.updateFormData(formData, eventArgs.customFormData);
        ajax.send(formData);
    }
    removeCompleted(e, files, customTemplate) {
        let args = {
            e, operation: 'remove', file: this.updateStatus(files, this.localizedTexts('removedSuccessMessage'), '2')
        };
        this.trigger('success', args);
        this.removeFilesData(files, customTemplate);
        let index = this.uploadedFilesData.indexOf(files);
        this.uploadedFilesData.splice(index, 1);
        this.trigger('change', { files: this.uploadedFilesData });
    }
    removeFailed(e, files, customTemplate) {
        let args = {
            e, operation: 'remove', file: this.updateStatus(files, this.localizedTexts('removedFailedMessage'), '0')
        };
        if (!customTemplate) {
            let index = this.filesData.indexOf(files);
            let rootElement = this.fileList[index];
            if (rootElement) {
                let statusElement = rootElement.querySelector('.' + STATUS);
                rootElement.classList.remove(UPLOAD_SUCCESS);
                statusElement.classList.remove(UPLOAD_SUCCESS);
                rootElement.classList.add(UPLOAD_FAILED);
                statusElement.classList.add(UPLOAD_FAILED);
            }
            this.checkActionButtonStatus();
        }
        this.trigger('failure', args);
    }
    onSelectFiles(args) {
        if (!this.enabled) {
            return;
        }
        let fileData = [];
        let targetFiles;
        if (args.type === 'drop') {
            let files = args.dataTransfer.files;
            targetFiles = this.multiple ? this.sortFileList(files) : [files[0]];
        }
        else {
            targetFiles = [].slice.call(args.target.files);
        }
        if (!this.multiple) {
            this.clearData();
            targetFiles = [targetFiles[0]];
        }
        for (let i = 0; i < targetFiles.length; i++) {
            let file = targetFiles[i];
            let eventArgs = {
                name: file.name,
                rawFile: file,
                size: file.size,
                status: this.localizedTexts('readyToUploadMessage'),
                type: this.getFileType(file.name),
                validationMessages: this.validatedFileSize(file.size),
                statusCode: '1'
            };
            eventArgs.status = eventArgs.validationMessages.minSize !== '' ? this.localizedTexts('invalidMinFileSize') :
                eventArgs.validationMessages.maxSize !== '' ? this.localizedTexts('invalidMaxFileSize') : eventArgs.status;
            if (eventArgs.validationMessages.minSize !== '' || eventArgs.validationMessages.maxSize !== '') {
                eventArgs.statusCode = '0';
            }
            fileData.push(eventArgs);
        }
        let eventArgs = {
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
            let dataFiles = this.checkExtension(eventArgs.modifiedFilesData);
            this.updateSortedFileList(dataFiles);
            if (!this.isForm) {
                this.checkAutoUpload(dataFiles);
            }
            this.filesData = dataFiles;
        }
        else {
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
    clearData() {
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
    updateSortedFileList(filesData) {
        let previousListClone = createElement('div', { id: 'clonewrapper' });
        let added = -1;
        let removedList;
        if (this.listParent) {
            for (let i = 0; i < this.listParent.querySelectorAll('li').length; i++) {
                let liElement = this.listParent.querySelectorAll('li')[i];
                previousListClone.appendChild(liElement.cloneNode(true));
            }
            removedList = this.listParent.querySelectorAll('li');
            for (let item of removedList) {
                detach(item);
            }
            this.removeActionButtons();
            let oldList = [].slice.call(previousListClone.childNodes);
            detach(this.listParent);
            this.listParent = null;
            this.fileList = [];
            this.createParentUL();
            for (let index = 0; index < filesData.length; index++) {
                for (let j = 0; j < this.filesData.length; j++) {
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
        }
        else {
            this.createFileList(filesData);
        }
    }
    checkExtension(files) {
        let dropFiles = files;
        if (this.allowedExtensions !== '') {
            let allowedExtensions = [];
            let extensions = this.allowedExtensions.split(',');
            for (let extension of extensions) {
                allowedExtensions.push(extension.trim().toLocaleLowerCase());
            }
            for (let i = 0; i < files.length; i++) {
                if (allowedExtensions.indexOf(('.' + files[i].type).toLocaleLowerCase()) === -1) {
                    files[i].status = this.localizedTexts('invalidFileType');
                    files[i].statusCode = '0';
                }
            }
        }
        return dropFiles;
    }
    validatedFileSize(fileSize) {
        let minSizeError = '';
        let maxSizeError = '';
        if (fileSize < this.minFileSize) {
            minSizeError = this.localizedTexts('invalidMinFileSize');
        }
        else if (fileSize > this.maxFileSize) {
            maxSizeError = this.localizedTexts('invalidMaxFileSize');
        }
        else {
            minSizeError = '';
            maxSizeError = '';
        }
        let errorMessage = { minSize: minSizeError, maxSize: maxSizeError };
        return errorMessage;
    }
    createCustomfileList(fileData) {
        this.createParentUL();
        for (let listItem of fileData) {
            let liElement = createElement('li', { className: FILE, attrs: { 'data-file-name': listItem.name } });
            this.uploadTemplateFn = this.templateComplier(this.template);
            let length = this.uploadTemplateFn(listItem).length;
            for (let i = 0; i < length; i++) {
                liElement.appendChild(this.uploadTemplateFn(listItem)[i]);
            }
            this.listParent.appendChild(liElement);
            this.fileList.push(liElement);
        }
    }
    createParentUL() {
        if (isNullOrUndefined(this.listParent)) {
            this.listParent = createElement('ul', { className: LIST_PARENT });
            this.uploadWrapper.appendChild(this.listParent);
            this.listParent.style.display = this.showFileList ? 'block' : 'none';
        }
    }
    createFileList(fileData) {
        this.createParentUL();
        if (this.template !== '' && !isNullOrUndefined(this.template)) {
            this.createCustomfileList(fileData);
        }
        else {
            for (let listItem of fileData) {
                let liElement = createElement('li', { className: FILE, attrs: { 'data-file-name': listItem.name } });
                let textContainer = createElement('span', { className: TEXT_CONTAINER });
                let textElement = createElement('span', { className: FILE_NAME, attrs: { 'title': listItem.name } });
                textElement.innerHTML = this.getFileNameOnly(listItem.name);
                let fileExtension = createElement('span', { className: FILE_TYPE });
                fileExtension.innerHTML = '.' + this.getFileType(listItem.name);
                if (!this.enableRtl) {
                    textContainer.appendChild(textElement);
                    textContainer.appendChild(fileExtension);
                }
                else {
                    let rtlContainer = createElement('span', { className: RTL_CONTAINER });
                    rtlContainer.appendChild(fileExtension);
                    rtlContainer.appendChild(textElement);
                    textContainer.appendChild(rtlContainer);
                }
                let fileSize = createElement('span', { className: FILE_SIZE });
                fileSize.innerHTML = this.bytesToSize(listItem.size);
                textContainer.appendChild(fileSize);
                let statusElement = createElement('span', { className: STATUS });
                textContainer.appendChild(statusElement);
                statusElement.innerHTML = listItem.status;
                liElement.appendChild(textContainer);
                let iconElement = createElement('span', { className: ' e-icons', attrs: { 'tabindex': '-1' } });
                if (Browser.info.name === 'msie') {
                    /* istanbul ignore next */
                    iconElement.classList.add('e-msie');
                }
                if (listItem.statusCode !== '2') {
                    iconElement.setAttribute('title', this.localizedTexts('remove'));
                }
                else {
                    iconElement.setAttribute('title', this.localizedTexts('delete'));
                }
                liElement.appendChild(iconElement);
                EventHandler.add(iconElement, 'click', this.removeFiles, this);
                if (listItem.statusCode === '2') {
                    statusElement.classList.add(UPLOAD_SUCCESS);
                    iconElement.classList.add(REMOVE_ICON);
                }
                else if (listItem.statusCode !== '1') {
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
        }
    }
    truncateName(name) {
        let nameElement = name;
        let text;
        if (nameElement.offsetWidth < nameElement.scrollWidth) {
            text = nameElement.textContent;
            nameElement.dataset.tail = text.slice(text.length - 10);
        }
    }
    getFileType(name) {
        let extension;
        let index = name.lastIndexOf('.');
        if (index >= 0) {
            extension = name.substring(index + 1);
        }
        return extension ? extension : '';
    }
    getFileNameOnly(name) {
        let type = this.getFileType(name);
        let names = name.split('.' + type);
        return type = names[0];
    }
    setInitialAttributes() {
        if (this.initialAttr.accept) {
            this.element.setAttribute('accept', this.initialAttr.accept);
        }
        if (this.initialAttr.disabled) {
            this.element.setAttribute('disabled', 'disabled');
        }
        if (this.initialAttr.multiple) {
            let newAttr = document.createAttribute('multiple');
            this.element.setAttributeNode(newAttr);
        }
    }
    filterfileList(files) {
        let filterFiles = [];
        let li;
        for (let i = 0; i < files.length; i++) {
            li = this.getLiElement(files[i]);
            if (!li.classList.contains(UPLOAD_SUCCESS)) {
                filterFiles.push(files[i]);
            }
        }
        return filterFiles;
    }
    updateStatus(files, status, statusCode) {
        if (!(status === '' || isNullOrUndefined(status)) && !(statusCode === '' || isNullOrUndefined(statusCode))) {
            files.status = status;
            files.statusCode = statusCode;
        }
        let li = this.getLiElement(files);
        if (!isNullOrUndefined(li)) {
            if (!isNullOrUndefined(li.querySelector('.' + STATUS)) && !((status === '' || isNullOrUndefined(status)))) {
                li.querySelector('.' + STATUS).textContent = status;
            }
        }
        return files;
    }
    getLiElement(files) {
        let liElements = [];
        let li;
        if (this.uploadWrapper) {
            liElements = this.uploadWrapper.querySelectorAll('.' + LIST_PARENT + '> li');
            for (let i = 0; i < liElements.length; i++) {
                if (liElements[i].getAttribute('data-file-name') === files.name) {
                    li = liElements[i];
                }
            }
        }
        return li;
    }
    createProgressBar(liElement) {
        let progressbarWrapper = createElement('span', { className: PROGRESS_WRAPPER });
        let progressBar = createElement('progressbar', { className: PROGRESSBAR, attrs: { value: '0', max: '100' } });
        let progressbarInnerWrapper = createElement('span', { className: PROGRESS_INNER_WRAPPER });
        progressBar.setAttribute('style', 'width: 0%');
        let progressbarText = createElement('span', { className: PROGRESSBAR_TEXT });
        progressbarText.textContent = '0%';
        progressbarInnerWrapper.appendChild(progressBar);
        progressbarWrapper.appendChild(progressbarInnerWrapper);
        progressbarWrapper.appendChild(progressbarText);
        liElement.querySelector('.' + TEXT_CONTAINER).appendChild(progressbarWrapper);
    }
    /* istanbul ignore next */
    updateProgressbar(e, li) {
        if (!isNaN(Math.round((e.loaded / e.total) * 100)) && !isNullOrUndefined(li.querySelector('.' + PROGRESSBAR))) {
            if (!isNullOrUndefined(this.progressInterval) && this.progressInterval !== '') {
                let value = (Math.round((e.loaded / e.total) * 100)) % parseInt(this.progressInterval, 10);
                if (value === 0 || value === 100) {
                    this.changeProgressValue(li, Math.round((e.loaded / e.total) * 100).toString() + '%');
                }
            }
            else {
                this.changeProgressValue(li, Math.round((e.loaded / e.total) * 100).toString() + '%');
            }
        }
    }
    changeProgressValue(li, progressValue) {
        li.querySelector('.' + PROGRESSBAR).setAttribute('style', 'width:' + progressValue);
        li.querySelector('.' + PROGRESSBAR_TEXT).textContent = progressValue;
    }
    uploadInProgress(e, files, customUI) {
        let li = this.getLiElement(files);
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
        let args = { e, operation: 'upload', file: this.updateStatus(files, this.localizedTexts('inProgress'), '3') };
        this.trigger('progress', args);
    }
    /* istanbul ignore next */
    uploadComplete(e, files, customUI) {
        let status = e.target;
        if (status.readyState === 4 && status.status === 200) {
            let li = this.getLiElement(files);
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
            let args = { e, operation: 'upload', file: this.updateStatus(files, this.localizedTexts('uploadSuccessMessage'), '2') };
            this.trigger('success', args);
            this.uploadedFilesData.push(files);
            this.trigger('change', { files: this.uploadedFilesData });
            this.checkActionButtonStatus();
        }
        else {
            this.uploadFailed(e, files);
        }
    }
    uploadFailed(e, files) {
        let li = this.getLiElement(files);
        let args = { e, operation: 'upload', file: this.updateStatus(files, this.localizedTexts('uploadFailedMessage'), '0') };
        if (!isNullOrUndefined(li)) {
            this.updateProgressBarClasses(li, UPLOAD_FAILED);
            this.removeProgressbar(li, 'failure');
            li.querySelector('.' + CLEAR_ICON).setAttribute('title', this.localizedTexts('remove'));
            li.querySelector('.e-icons').classList.remove(UPLOAD_INPROGRESS);
        }
        this.trigger('failure', args);
        this.checkActionButtonStatus();
    }
    updateProgressBarClasses(li, className) {
        let progressBar = li.querySelector('.' + PROGRESSBAR);
        if (!isNullOrUndefined(progressBar)) {
            progressBar.classList.add(className);
        }
    }
    removeProgressbar(li, callType) {
        if (!isNullOrUndefined(li.querySelector('.' + PROGRESS_WRAPPER))) {
            this.progressAnimation = new Animation({ duration: 1250 });
            this.progressAnimation.animate(li.querySelector('.' + PROGRESS_WRAPPER), { name: 'FadeOut' });
            this.progressAnimation.animate(li.querySelector('.' + PROGRESSBAR_TEXT), { name: 'FadeOut' });
            setTimeout(() => { this.animateProgressBar(li, callType); }, 750);
        }
    }
    /* istanbul ignore next */
    animateProgressBar(li, callType) {
        if (callType === 'success') {
            li.classList.add(UPLOAD_SUCCESS);
            if (!isNullOrUndefined(li.querySelector('.' + STATUS))) {
                li.querySelector('.' + STATUS).classList.remove(UPLOAD_INPROGRESS);
                this.progressAnimation.animate(li.querySelector('.' + STATUS), { name: 'FadeIn' });
                li.querySelector('.' + STATUS).classList.add(UPLOAD_SUCCESS);
            }
        }
        else {
            if (!isNullOrUndefined(li.querySelector('.' + STATUS))) {
                li.querySelector('.' + STATUS).classList.remove(UPLOAD_INPROGRESS);
                this.progressAnimation.animate(li.querySelector('.' + STATUS), { name: 'FadeIn' });
                li.querySelector('.' + STATUS).classList.add(UPLOAD_FAILED);
            }
        }
        detach(li.querySelector('.' + PROGRESS_WRAPPER));
    }
    setExtensions(extensions) {
        this.element.setAttribute('accept', extensions);
    }
    templateComplier(uploadTemplate) {
        if (uploadTemplate) {
            try {
                if (document.querySelectorAll(uploadTemplate).length) {
                    return compile(document.querySelector(uploadTemplate).innerHTML.trim());
                }
            }
            catch (exception) {
                return compile(uploadTemplate);
            }
        }
        return undefined;
    }
    setRTL() {
        this.enableRtl ? addClass([this.uploadWrapper], RTL) : removeClass([this.uploadWrapper], RTL);
    }
    localizedTexts(localeText) {
        this.l10n.setLocale(this.locale);
        return this.l10n.getConstant(localeText);
    }
    setControlStatus() {
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
        }
        else {
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
    checkHTMLAttributes() {
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
    /* istanbul ignore next */
    updateFormData(formData, customData) {
        if (customData.length > 0 && customData[0]) {
            for (let i = 0; i < customData.length; i++) {
                let data = customData[i];
                // tslint:disable-next-line
                formData.append(Object.keys(data)[i], Object.values(data)[i]);
            }
        }
    }
    /**
     * It is used to convert bytes value into kilobytes or megabytes depending on the size based
     * on [binary prefix](https://en.wikipedia.org/wiki/Binary_prefix).
     * @param { number } bytes - specifies the file size in bytes.
     * @returns string
     */
    bytesToSize(bytes) {
        let i = -1;
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
    /**
     * Allows you to sort the file data alphabetically based on its file name clearly.
     * @param { FileList } filesData - specifies the files data for upload.
     * @returns File[]
     */
    sortFileList(filesData) {
        let files = filesData;
        let fileNames = [];
        for (let i = 0; i < files.length; i++) {
            fileNames.push(files[i].name);
        }
        let sortedFileNames = fileNames.sort();
        let sortedFilesData = [];
        for (let name of sortedFileNames) {
            for (let i = 0; i < files.length; i++) {
                if (name === files[i].name) {
                    sortedFilesData.push(files[i]);
                }
            }
        }
        return sortedFilesData;
    }
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     * @method destroy
     * @return {void}.
     */
    destroy() {
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
        super.destroy();
    }
    /**
     * Allows you to call the upload process manually by calling save URL action.
     * To process the selected files (added in upload queue), pass an empty argument otherwise
     * upload the specific file based on its argument.
     * @param { FileInfo[] } files - specifies the files data for upload.
     * @returns void
     */
    upload(files, custom) {
        let selectedFiles = [];
        if (this.asyncSettings.saveUrl === '' || isNullOrUndefined(this.asyncSettings.saveUrl)) {
            return;
        }
        if (!custom || isNullOrUndefined(custom)) {
            if (!this.multiple) {
                let file = [];
                file.push(files[0]);
                selectedFiles = this.filterfileList(file);
            }
            else {
                selectedFiles = this.filterfileList(files);
            }
        }
        else {
            selectedFiles = files;
        }
        for (let i = 0; i < selectedFiles.length; i++) {
            let ajax = new XMLHttpRequest();
            ajax.addEventListener('load', (e) => { this.uploadComplete(e, selectedFiles[i], custom); }, false);
            /* istanbul ignore next */
            ajax.addEventListener('error', (e) => { this.uploadFailed(e, selectedFiles[i]); }, false);
            ajax.upload.addEventListener('progress', (e) => { this.uploadInProgress(e, selectedFiles[i], custom); }, false);
            ajax.open('POST', this.asyncSettings.saveUrl);
            let formData = new FormData();
            if (selectedFiles[i].statusCode === '1') {
                let eventArgs = {
                    fileData: selectedFiles[i],
                    customFormData: [],
                    cancel: false,
                    currentRequest: ajax
                };
                this.trigger('uploading', eventArgs);
                if (eventArgs.cancel) {
                    return;
                }
                let name = this.element.getAttribute('name');
                formData.append(name, selectedFiles[i].rawFile, selectedFiles[i].name);
                this.updateFormData(formData, eventArgs.customFormData);
                ajax.send(formData);
            }
        }
    }
    /**
     * Remove the uploaded file from server manually by calling the remove URL action.
     * If you pass an empty argument to this method, the complete file list can be cleared,
     * otherwise remove the specific file based on its argument (“file_data”).
     * @param { FileInfo | FileInfo[] } fileData - specifies the files data to remove from file list/server.
     * @returns void
     */
    remove(fileData, customTemplate) {
        let removeFiles = [];
        fileData = !isNullOrUndefined(fileData) ? fileData : this.filesData;
        if (fileData instanceof Array) {
            removeFiles = fileData;
        }
        else {
            removeFiles.push(fileData);
        }
        let eventArgs = {
            cancel: false,
            filesData: removeFiles,
            customFormData: []
        };
        let removeUrl = this.asyncSettings.removeUrl;
        let validUrl = (removeUrl === '' || isNullOrUndefined(removeUrl)) ? false : true;
        for (let files of removeFiles) {
            if (files.statusCode === '2' && validUrl) {
                this.removeUploadedFile(files, eventArgs, customTemplate);
            }
            else {
                this.trigger('removing', eventArgs);
                if (eventArgs.cancel) {
                    return;
                }
                this.removeFilesData(files, customTemplate);
            }
        }
    }
    /**
     * Clear all the file entries from list that can be uploaded files or added in upload queue.
     * @returns void
     */
    clearAll() {
        if (isNullOrUndefined(this.listParent)) {
            return;
        }
        let eventArgs = {
            cancel: false,
            filesData: this.filesData
        };
        this.trigger('clearing', eventArgs);
        if (eventArgs.cancel) {
            return;
        }
        this.clearData();
    }
    getFilesData() {
        return this.filesData;
    }
};
__decorate$4([
    Complex({ saveUrl: '', removeUrl: '' }, AsyncSettings)
], Uploader.prototype, "asyncSettings", void 0);
__decorate$4([
    Property(false)
], Uploader.prototype, "enableRtl", void 0);
__decorate$4([
    Property(true)
], Uploader.prototype, "enabled", void 0);
__decorate$4([
    Property(null)
], Uploader.prototype, "template", void 0);
__decorate$4([
    Property(true)
], Uploader.prototype, "multiple", void 0);
__decorate$4([
    Property(true)
], Uploader.prototype, "autoUpload", void 0);
__decorate$4([
    Complex({}, ButtonsProps)
], Uploader.prototype, "buttons", void 0);
__decorate$4([
    Property('')
], Uploader.prototype, "allowedExtensions", void 0);
__decorate$4([
    Property(0)
], Uploader.prototype, "minFileSize", void 0);
__decorate$4([
    Property(30000000)
], Uploader.prototype, "maxFileSize", void 0);
__decorate$4([
    Property(null)
], Uploader.prototype, "dropArea", void 0);
__decorate$4([
    Collection([{}], FilesProp)
], Uploader.prototype, "files", void 0);
__decorate$4([
    Property(true)
], Uploader.prototype, "showFileList", void 0);
__decorate$4([
    Event()
], Uploader.prototype, "selected", void 0);
__decorate$4([
    Event()
], Uploader.prototype, "uploading", void 0);
__decorate$4([
    Event()
], Uploader.prototype, "success", void 0);
__decorate$4([
    Event()
], Uploader.prototype, "failure", void 0);
__decorate$4([
    Event()
], Uploader.prototype, "removing", void 0);
__decorate$4([
    Event()
], Uploader.prototype, "clearing", void 0);
__decorate$4([
    Event()
], Uploader.prototype, "progress", void 0);
__decorate$4([
    Event()
], Uploader.prototype, "change", void 0);
Uploader = __decorate$4([
    NotifyPropertyChanges
], Uploader);

/**
 * Uploader modules
 */

/**
 * NumericTextBox all modules
 */

export { NumericTextBox, regularExpressions, createMask, applyMask, wireEvents, unwireEvents, unstrippedValue, strippedValue, maskInputFocusHandler, maskInputBlurHandler, maskInputDropHandler, mobileRemoveFunction, setMaskValue, setElementValue, maskInput, getVal, getMaskedVal, MaskUndo, MaskedTextBox, Input, TicksData, TooltipData, Slider, ErrorOption, FormValidator, FilesProp, ButtonsProps, AsyncSettings, Uploader };
//# sourceMappingURL=ej2-inputs.es2015.js.map
