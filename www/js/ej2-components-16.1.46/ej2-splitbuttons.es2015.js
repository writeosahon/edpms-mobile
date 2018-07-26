import { Browser, ChildProperty, Collection, Component, Event, EventHandler, KeyboardEvents, NotifyPropertyChanges, Property, addClass, attributes, classList, closest, createElement, deleteObject, detach, extend, getInstance, getUniqueID, getValue, remove, removeClass, rippleEffect, select, setValue } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { Popup, getZindexPartial } from '@syncfusion/ej2-popups';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @param props
 * @param model
 */
function getModel(props, model) {
    let obj = extend({}, props);
    for (let prop of Object.keys(obj)) {
        if ((model).indexOf(prop) < 0) {
            deleteObject(obj, prop);
        }
    }
    return obj;
}
class Item extends ChildProperty {
}
__decorate([
    Property('')
], Item.prototype, "iconCss", void 0);
__decorate([
    Property('')
], Item.prototype, "id", void 0);
__decorate([
    Property(false)
], Item.prototype, "separator", void 0);
__decorate([
    Property('')
], Item.prototype, "text", void 0);
__decorate([
    Property('')
], Item.prototype, "url", void 0);

/**
 * Common modules
 */

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const classNames = {
    DISABLED: 'e-disabled',
    FOCUS: 'e-focused',
    ICON: 'e-menu-icon',
    ITEM: 'e-item',
    POPUP: 'e-dropdown-popup',
    RTL: 'e-rtl',
    SEPARATOR: 'e-separator',
    VERTICAL: 'e-vertical'
};
/**
 * DropDownButton component is used to toggle contextual overlays for displaying list of action items.
 * It can contain both text and images.
 * ``````html
 * <button id="element">DropDownButton</button>
 * ```
 * ```typescript
 * <script>
 * var dropDownButtonObj = new DropDownButton({items: [{ text: 'Action1' }, { text: 'Action2' },{ text: 'Action3' }]);
 * dropDownButtonObj.appendTo("#element");
 * </script>
 * ```
 */
let DropDownButton = class DropDownButton extends Component {
    /**
     * Constructor for creating the widget
     * @param  {DropDownButtonModel} options?
     * @param  {string|HTMLButtonElement} element?
     */
    constructor(options, element) {
        super(options, element);
    }
    preRender() {
        /** */
    }
    /**
     * Get the properties to be maintained in the persisted state.
     * @returns string
     */
    getPersistData() {
        return this.addOnPersist([]);
    }
    /**
     * To open/close DropDownButton popup based on current state of the DropDownButton.
     * @returns void
     */
    toggle() {
        this.canOpen() ? this.openPopUp() : this.closePopup();
    }
    /**
     * Initialize the Component rendering
     * @returns void
     * @private
     */
    render() {
        this.initialize();
        if (!this.disabled) {
            this.wireEvents();
        }
    }
    createPopup() {
        let div = createElement('div', {
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
        attributes(this.element, {
            ['role']: 'menu', ['aria-haspopup']: this.items.length || this.target ? 'true' : 'false', ['aria-expanded']: 'false',
            ['aria-owns']: this.getPopUpElement().id
        });
        if (this.cssClass) {
            addClass([div], this.cssClass.split(' '));
        }
        if (this.enableRtl) {
            div.classList.add(classNames.RTL);
        }
    }
    getTargetElement() {
        return typeof (this.target) === 'string' ? select(this.target) : this.target;
    }
    createItems(items) {
        let showIcon = this.hasIcon(items, 'iconCss');
        let span;
        let item;
        let li;
        let eventArgs;
        let ul = createElement('ul', {
            attrs: { 'tabindex': '0' }
        });
        for (let i = 0; i < items.length; i++) {
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
            }
            else {
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
    hasIcon(items, field) {
        for (let i = 0, len = items.length; i < len; i++) {
            if (items[i][field]) {
                return true;
            }
        }
        return false;
    }
    createAnchor(item) {
        return createElement('a', { className: 'e-menu-text e-menu-url', innerHTML: item.text, attrs: { 'href': item.url } });
    }
    initialize() {
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
    setIconPositionTop() {
        let iconSpan = this.element.querySelector('.e-icon-left');
        if (iconSpan && this.iconPosition === 'Top') {
            addClass([this.element], 'e-top-icon-btn');
            removeClass([iconSpan], 'e-icon-left');
            addClass([iconSpan], 'e-icon-top');
        }
    }
    appendArrowSpan() {
        this.element.appendChild(createElement('span', {
            className: 'e-btn-icon e-icons ' + 'e-icon-' + (this.cssClass.indexOf(classNames.VERTICAL) > -1
                ? 'bottom' : 'right') + ' e-caret'
        }));
    }
    setActiveElem() {
        this.activeElem = this.element;
    }
    /**
     * Get component name.
     * @returns string
     * @private
     */
    getModuleName() {
        return 'dropdown-btn';
    }
    canOpen() {
        return this.getPopUpElement().classList.contains('e-popup-close');
    }
    /**
     * Destroys the widget.
     * @returns void
     */
    destroy() {
        detach(this.element.querySelector('span.e-caret'));
        super.destroy();
        this.button.destroy();
        ['role', 'aria-haspopup', 'aria-expanded', 'aria-owns'].forEach((key) => {
            this.element.removeAttribute(key);
        });
        removeClass([this.element, this.activeElem], ['e-ddb-active', 'e-btn']);
        detach(this.getPopUpElement());
        this.unWireEvents();
    }
    getPopUpElement() {
        return this.dropDown.element;
    }
    getULElement() {
        return this.getPopUpElement().children[0];
    }
    wireEvents() {
        let popupElement = this.getPopUpElement();
        EventHandler.add(document, 'click', this.clickHandler, this);
        EventHandler.add(this.element, 'keydown', this.keyBoardHandler, this);
        if (!this.target) {
            EventHandler.add(popupElement, 'keydown', this.keyBoardHandler, this);
        }
        rippleEffect(popupElement, { selector: '.' + classNames.ITEM });
    }
    keyBoardHandler(e) {
        if (e.target === this.element && (e.keyCode === 9 || (!e.altKey && e.keyCode === 40) || e.keyCode === 38)) {
            return;
        }
        else {
            if (e.keyCode !== 9) {
                e.preventDefault();
            }
        }
        switch (e.keyCode) {
            case 38:
            case 40:
                if (e.altKey && (e.keyCode === 38 || e.keyCode === 40)) {
                    this.keyEventHandler(e);
                }
                else {
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
    upDownKeyHandler(e) {
        let ul = this.getULElement();
        let defaultIdx = e.keyCode === 40 ? 0 : ul.childElementCount - 1;
        let liIdx = defaultIdx;
        let li = null;
        for (let i = 0, len = ul.children.length; i < len; i++) {
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
    isValidLI(li, index, keyCode, count = 0) {
        if (li.classList.contains(classNames.SEPARATOR) || li.classList.contains(classNames.DISABLED)) {
            if (index === (keyCode === 40 ? this.items.length - 1 : 0)) {
                index = keyCode === 40 ? 0 : this.items.length - 1;
            }
            else {
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
    keyEventHandler(e) {
        if (e.keyCode === 27 || e.keyCode === 38 || e.keyCode === 9) {
            if (!this.canOpen()) {
                this.closePopup(e);
                this.element.focus();
            }
        }
        else {
            this.clickHandler(e);
        }
    }
    getLI(elem) {
        return elem.tagName === 'LI' ? elem : closest(elem, 'li');
    }
    clickHandler(e) {
        let trgt = e.target;
        let canOpen = this.canOpen();
        if (closest(trgt, '#' + this.element.id)) {
            if (canOpen) {
                this.openPopUp(e);
            }
            else {
                this.closePopup(e);
                this.activeElem.focus();
            }
        }
        else {
            if (closest(trgt, '#' + this.getPopUpElement().id)) {
                let eventArgs;
                let liIdx;
                let item;
                let li = this.getLI(trgt);
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
            }
            else {
                if (!canOpen) {
                    this.closePopup(e);
                }
            }
        }
    }
    openPopUp(e = null) {
        if (!this.target) {
            this.getPopUpElement().appendChild(this.createItems(this.items));
        }
        let ul = this.getULElement();
        let beforeOpenArgs = { element: ul, items: this.items, event: e, cancel: false };
        this.trigger('beforeOpen', beforeOpenArgs);
        if (!beforeOpenArgs.cancel) {
            this.dropDown.show();
            addClass([this.activeElem], 'e-ddb-active');
            this.element.setAttribute('aria-expanded', 'true');
            ul.focus();
            let openArgs = { element: ul, items: this.items };
            this.trigger('open', openArgs);
        }
    }
    closePopup(e = null) {
        let ul = this.getULElement();
        let beforeCloseArgs = { element: ul, items: this.items, event: e, cancel: false };
        this.trigger('beforeClose', beforeCloseArgs);
        if (!beforeCloseArgs.cancel) {
            this.dropDown.hide();
            removeClass([this.activeElem], 'e-ddb-active');
            this.element.setAttribute('aria-expanded', 'false');
            let closeArgs = { element: ul, items: this.items };
            this.trigger('close', closeArgs);
            if (!this.target) {
                detach(ul);
            }
        }
    }
    unWireEvents() {
        EventHandler.remove(document, 'click', this.clickHandler);
        EventHandler.remove(this.element, 'keydown', this.keyBoardHandler);
        EventHandler.remove(this.getPopUpElement(), 'keydown', this.keyBoardHandler);
    }
    /**
     * Called internally if any of the property value changed.
     * @param  {DropDownButtonModel} newProp
     * @param  {DropDownButtonModel} oldProp
     * @returns void
     * @private
     */
    onPropertyChanged(newProp, oldProp) {
        let btnModel = ['content', 'cssClass', 'iconCss', 'disabled', 'enableRtl'];
        if (newProp.iconPosition === 'Left') {
            btnModel.push('iconPosition');
        }
        this.button.setProperties(getModel(newProp, btnModel));
        let popupElement = this.getPopUpElement();
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'content':
                    if (!this.element.querySelector('span.e-caret')) {
                        this.appendArrowSpan();
                    }
                    break;
                case 'cssClass':
                    if (newProp.cssClass.indexOf(classNames.VERTICAL) > -1) {
                        let arrowSpan = this.element.querySelector('span.e-caret');
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
    }
};
__decorate$1([
    Property('')
], DropDownButton.prototype, "content", void 0);
__decorate$1([
    Property('')
], DropDownButton.prototype, "cssClass", void 0);
__decorate$1([
    Property(false)
], DropDownButton.prototype, "disabled", void 0);
__decorate$1([
    Property('')
], DropDownButton.prototype, "iconCss", void 0);
__decorate$1([
    Property('Left')
], DropDownButton.prototype, "iconPosition", void 0);
__decorate$1([
    Collection([], Item)
], DropDownButton.prototype, "items", void 0);
__decorate$1([
    Property('')
], DropDownButton.prototype, "target", void 0);
__decorate$1([
    Event()
], DropDownButton.prototype, "beforeItemRender", void 0);
__decorate$1([
    Event()
], DropDownButton.prototype, "beforeOpen", void 0);
__decorate$1([
    Event()
], DropDownButton.prototype, "beforeClose", void 0);
__decorate$1([
    Event()
], DropDownButton.prototype, "close", void 0);
__decorate$1([
    Event()
], DropDownButton.prototype, "open", void 0);
__decorate$1([
    Event()
], DropDownButton.prototype, "select", void 0);
DropDownButton = __decorate$1([
    NotifyPropertyChanges
], DropDownButton);

/**
 * DropDownButton modules
 */

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path='../drop-down-button/drop-down-button-model.d.ts'/>
const RTL = 'e-rtl';
const TAGNAME = 'EJS-SPLITBUTTON';
/**
 * SplitButton component has primary and secondary button. Primary button is used to select
 * default action and secondary button is used to toggle contextual overlays for displaying list of
 * action items. It can contain both text and images.
 * ```html
 * <button id="element"></button>
 * ```
 * ```typescript
 * <script>
 * var splitBtnObj = new SplitButton({content: 'SplitButton'});
 * splitBtnObj.appendTo("#element");
 * </script>
 * ```
 */
let SplitButton = class SplitButton extends DropDownButton {
    /**
     * Constructor for creating the widget
     * @param  {SplitButtonModel} options?
     * @param  {string|HTMLButtonElement} element?
     */
    constructor(options, element) {
        super(options, element);
    }
    /**
     * Initialize Angular support.
     * @private
     */
    preRender() {
        let ele = this.element;
        if (ele.tagName === TAGNAME) {
            let ejInstance = getValue('ej2_instances', ele);
            let btn = createElement('button');
            let wrapper = createElement(TAGNAME, { className: 'e-' + this.getModuleName() + '-wrapper' });
            for (let idx = 0, len = ele.attributes.length; idx < len; idx++) {
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
    render() {
        this.initWrapper();
        this.createPrimaryButton();
        this.createSecondaryButton();
        this.setAria();
        this.wireEvents();
    }
    initWrapper() {
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
    createPrimaryButton() {
        let btnModel = {
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
    createSecondaryButton() {
        let btnElem = createElement('button', {
            className: 'e-icon-btn',
            attrs: { 'tabindex': '-1' },
            id: this.element.id + '_dropdownbtn'
        });
        this.wrapper.appendChild(btnElem);
        let dropDownBtnModel = {
            cssClass: this.cssClass,
            disabled: this.disabled,
            enableRtl: this.enableRtl,
            items: this.items,
            target: this.target,
            beforeItemRender: (args) => {
                this.trigger('beforeItemRender', args);
            },
            beforeOpen: (args) => {
                this.trigger('beforeOpen', args);
            },
            open: (args) => {
                this.trigger('open', args);
            },
            close: (args) => {
                this.trigger('close', args);
            },
            select: (args) => {
                this.trigger('select', args);
            }
        };
        this.secondaryBtnObj = new DropDownButton(dropDownBtnModel, btnElem);
        this.secondaryBtnObj.dropDown.relateTo = this.wrapper;
        this.dropDown = this.secondaryBtnObj.dropDown;
        this.secondaryBtnObj.activeElem = this.element;
        EventHandler.remove(this.getPopUpElement(), 'keydown', this.secondaryBtnObj.keyBoardHandler);
        this.secondaryBtnObj.element.querySelector('.e-btn-icon').classList.remove('e-icon-right');
    }
    setAria() {
        attributes(this.element, {
            'role': 'listbox', 'aria-expanded': 'false', 'aria-haspopup': 'true',
            'aria-label': this.element.textContent + ' splitbutton', 'aria-owns': this.secondaryBtnObj.dropDown.element.id
        });
    }
    /**
     * Get component name.
     * @returns string
     * @private
     */
    getModuleName() {
        return 'split-btn';
    }
    /**
     * To open/close SplitButton popup based on current state of the SplitButton.
     * @returns void
     */
    toggle() {
        this.secondaryBtnObj.toggle();
    }
    destroy() {
        this.primaryBtnObj.destroy();
        this.secondaryBtnObj.destroy();
        if (this.wrapper.tagName === TAGNAME) {
            this.wrapper.innerHTML = '';
            removeClass([this.wrapper], ['e-rtl', 'e-' + this.getModuleName() + '-wrapper']);
            removeClass([this.wrapper], this.cssClass.split(' '));
        }
        else {
            removeClass([this.element], ['e-' + this.getModuleName(), RTL]);
            ['role', 'aria-label', 'aria-haspopup', 'aria-expanded', 'aria-owns'].forEach((key) => {
                this.element.removeAttribute(key);
            });
            this.wrapper.parentNode.insertBefore(this.element, this.wrapper);
            remove(this.wrapper);
        }
        this.unWireEvents();
    }
    wireEvents() {
        EventHandler.add(this.element, 'click', this.primaryBtnClickHandler, this);
        EventHandler.add(this.getPopUpElement(), 'keydown', this.keyBoardHandler, this);
        new KeyboardEvents(this.element, {
            keyAction: this.btnKeyBoardHandler.bind(this),
            keyConfigs: {
                altdownarrow: 'alt+downarrow'
            }
        });
    }
    unWireEvents() {
        EventHandler.remove(this.element, 'click', this.primaryBtnClickHandler);
        getInstance(this.element, KeyboardEvents).destroy();
    }
    primaryBtnClickHandler() {
        this.trigger('click', { element: this.element });
    }
    btnKeyBoardHandler(e) {
        switch (e.action) {
            case 'altdownarrow':
                this.clickHandler(e);
                break;
        }
    }
    /**
     * Called internally if any of the property value changed.
     * @param  {SplitButtonModel} newProp
     * @param  {SplitButtonModel} oldProp
     * @returns void
     */
    onPropertyChanged(newProp, oldProp) {
        let model = ['content', 'iconCss', 'cssClass', 'disabled', 'enableRtl'];
        if (newProp.iconPosition === 'Left') {
            model.push('iconPosition');
        }
        this.primaryBtnObj.setProperties(getModel(newProp, model));
        model = ['items', 'beforeOpen', 'beforeItemRender', 'select', 'open',
            'close', 'cssClass', 'disabled', 'enableRtl'];
        this.secondaryBtnObj.setProperties(getModel(newProp, model));
        for (let prop of Object.keys(newProp)) {
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
                    }
                    else {
                        removeClass([this.wrapper], RTL);
                    }
                    break;
            }
        }
    }
};
__decorate$2([
    Property('')
], SplitButton.prototype, "content", void 0);
__decorate$2([
    Property('')
], SplitButton.prototype, "cssClass", void 0);
__decorate$2([
    Property(false)
], SplitButton.prototype, "disabled", void 0);
__decorate$2([
    Property('')
], SplitButton.prototype, "iconCss", void 0);
__decorate$2([
    Property('Left')
], SplitButton.prototype, "iconPosition", void 0);
__decorate$2([
    Collection([], Item)
], SplitButton.prototype, "items", void 0);
__decorate$2([
    Property('')
], SplitButton.prototype, "target", void 0);
__decorate$2([
    Event()
], SplitButton.prototype, "beforeItemRender", void 0);
__decorate$2([
    Event()
], SplitButton.prototype, "beforeOpen", void 0);
__decorate$2([
    Event()
], SplitButton.prototype, "beforeClose", void 0);
__decorate$2([
    Event()
], SplitButton.prototype, "click", void 0);
__decorate$2([
    Event()
], SplitButton.prototype, "close", void 0);
__decorate$2([
    Event()
], SplitButton.prototype, "open", void 0);
__decorate$2([
    Event()
], SplitButton.prototype, "select", void 0);
SplitButton = __decorate$2([
    NotifyPropertyChanges
], SplitButton);

/**
 * Split Button modules
 */

/**
 * SplitButton all module
 */

export { getModel, Item, DropDownButton, SplitButton };
//# sourceMappingURL=ej2-splitbuttons.es2015.js.map
