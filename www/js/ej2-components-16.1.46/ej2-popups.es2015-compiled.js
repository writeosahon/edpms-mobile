'use strict';

System.register(['@syncfusion/ej2-base', '@syncfusion/ej2-buttons'], function (_export, _context) {
    "use strict";

    var Animation, Browser, ChildProperty, Collection, Complex, Component, Draggable, Event, EventHandler, L10n, NotifyPropertyChanges, Property, Touch, addClass, attributes, classList, closest, createElement, detach, formatUnit, getUniqueID, isNullOrUndefined, prepend, remove, removeClass, setStyleAttribute, Button, _slicedToArray, _createClass, _get, _typeof, elementRect, element, parentDocument, fixedParent, parentDocument$1, targetContainer, __decorate, PositionData, CLASSNAMES, Popup, __decorate$1, ButtonProps, AnimationSettings, ROOT, RTL, DLG_HEADER_CONTENT, DLG_HEADER, DLG_FOOTER_CONTENT, MODAL_DLG, DLG_CONTENT, DLG_CLOSE_ICON, DLG_OVERLAY, DLG_CONTAINER, SCROLL_DISABLED, DLG_PRIMARY_BUTTON, ICON, POPUP_ROOT, DEVICE, FULLSCREEN, DLG_CLOSE_ICON_BTN, DLG_HIDE, DLG_SHOW, Dialog, __decorate$2, TOUCHEND_HIDE_DELAY, TAPHOLD_THRESHOLD, SHOW_POINTER_TIP_GAP, HIDE_POINTER_TIP_GAP, MOUSE_TRAIL_GAP, POINTER_ADJUST, ROOT$1, RTL$1, DEVICE$1, ICON$1, CLOSE, TOOLTIP_WRAP, CONTENT, ARROW_TIP, ARROW_TIP_OUTER, ARROW_TIP_INNER, TIP_BOTTOM, TIP_TOP, TIP_LEFT, TIP_RIGHT, POPUP_ROOT$1, POPUP_OPEN, POPUP_CLOSE, Animation$1, Tooltip, globalTimeOut, spinTemplate, spinCSSClass, DEFT_MAT_WIDTH, DEFT_FAB_WIDTH, DEFT_BOOT_WIDTH, CLS_SHOWSPIN, CLS_HIDESPIN, CLS_MATERIALSPIN, CLS_FABRICSPIN, CLS_BOOTSPIN, CLS_HIGHCONTRASTSPIN, CLS_SPINWRAP, CLS_SPININWRAP, CLS_SPINCIRCLE, CLS_SPINARC, CLS_SPINLABEL, CLS_SPINTEMPLATE;

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

    function calculateRelativeBasedPosition(anchor, element) {
        var fixedElement = false;
        var anchorPos = { left: 0, top: 0 };
        var tempAnchor = anchor;
        if (!anchor || !element) {
            return anchorPos;
        }
        if (isNullOrUndefined(element.offsetParent) && element.style.position === 'fixed') {
            fixedElement = true;
        }
        while ((element.offsetParent || fixedElement) && anchor && element.offsetParent !== anchor) {
            anchorPos.left += anchor.offsetLeft;
            anchorPos.top += anchor.offsetTop;
            anchor = anchor.offsetParent;
        }
        anchor = tempAnchor;
        while ((element.offsetParent || fixedElement) && anchor && element.offsetParent !== anchor) {
            anchorPos.left -= anchor.scrollLeft;
            anchorPos.top -= anchor.scrollTop;
            anchor = anchor.parentElement;
        }
        return anchorPos;
    }
    function calculatePosition(currentElement, positionX, positionY, parentElement) {
        fixedParent = parentElement ? true : false;
        if (!currentElement) {
            return { left: 0, top: 0 };
        }
        if (!positionX) {
            positionX = 'left';
        }
        if (!positionY) {
            positionY = 'top';
        }
        parentDocument = currentElement.ownerDocument;
        element = currentElement;
        var pos = { left: 0, top: 0 };
        return updatePosition(positionX.toLowerCase(), positionY.toLowerCase(), pos);
    }
    function setPosx(value, pos) {
        pos.left = value;
    }
    function setPosy(value, pos) {
        pos.top = value;
    }
    function updatePosition(posX, posY, pos) {
        elementRect = element.getBoundingClientRect();
        switch (posY + posX) {
            case 'topcenter':
                setPosx(getElementHCenter(), pos);
                setPosy(getElementTop(), pos);
                break;
            case 'topright':
                setPosx(getElementRight(), pos);
                setPosy(getElementTop(), pos);
                break;
            case 'centercenter':
                setPosx(getElementHCenter(), pos);
                setPosy(getElementVCenter(), pos);
                break;
            case 'centerright':
                setPosx(getElementRight(), pos);
                setPosy(getElementVCenter(), pos);
                break;
            case 'centerleft':
                setPosx(getElementLeft(), pos);
                setPosy(getElementVCenter(), pos);
                break;
            case 'bottomcenter':
                setPosx(getElementHCenter(), pos);
                setPosy(getElementBottom(), pos);
                break;
            case 'bottomright':
                setPosx(getElementRight(), pos);
                setPosy(getElementBottom(), pos);
                break;
            case 'bottomleft':
                setPosx(getElementLeft(), pos);
                setPosy(getElementBottom(), pos);
                break;
            default:
            case 'topleft':
                setPosx(getElementLeft(), pos);
                setPosy(getElementTop(), pos);
                break;
        }
        return pos;
    }
    function getBodyScrollTop() {
        return parentDocument.documentElement.scrollTop || parentDocument.body.scrollTop;
    }
    function getBodyScrollLeft() {
        return parentDocument.documentElement.scrollLeft || parentDocument.body.scrollLeft;
    }
    function getElementBottom() {
        return fixedParent ? elementRect.bottom : elementRect.bottom + getBodyScrollTop();
    }
    function getElementVCenter() {
        return getElementTop() + elementRect.height / 2;
    }
    function getElementTop() {
        return fixedParent ? elementRect.top : elementRect.top + getBodyScrollTop();
    }
    function getElementLeft() {
        return elementRect.left + getBodyScrollLeft();
    }
    function getElementRight() {
        return elementRect.right + getBodyScrollLeft();
    }
    function getElementHCenter() {
        return getElementLeft() + elementRect.width / 2;
    }

    /**
     * Collision module.
     */

    function fit(element) {
        var viewPortElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var axis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { X: false, Y: false };
        var position = arguments[3];

        if (!axis.Y && !axis.X) {
            return { left: 0, top: 0 };
        }
        var elemData = element.getBoundingClientRect();
        targetContainer = viewPortElement;
        parentDocument$1 = element.ownerDocument;
        if (!position) {
            position = calculatePosition(element, 'left', 'top');
        }
        if (axis.X) {
            var containerWidth = targetContainer ? getTargetContainerWidth() : getViewPortWidth();
            var containerLeft = ContainerLeft();
            var containerRight = ContainerRight();
            var overLeft = containerLeft - position.left;
            var overRight = position.left + elemData.width - containerRight;
            if (elemData.width > containerWidth) {
                if (overLeft > 0 && overRight <= 0) {
                    position.left = containerRight - elemData.width;
                } else if (overRight > 0 && overLeft <= 0) {
                    position.left = containerLeft;
                } else {
                    position.left = overLeft > overRight ? containerRight - elemData.width : containerLeft;
                }
            } else if (overLeft > 0) {
                position.left += overLeft;
            } else if (overRight > 0) {
                position.left -= overRight;
            }
        }
        if (axis.Y) {
            var containerHeight = targetContainer ? getTargetContainerHeight() : getViewPortHeight();
            var containerTop = ContainerTop();
            var containerBottom = ContainerBottom();
            var overTop = containerTop - position.top;
            var overBottom = position.top + elemData.height - containerBottom;
            if (elemData.height > containerHeight) {
                if (overTop > 0 && overBottom <= 0) {
                    position.top = containerBottom - elemData.height;
                } else if (overBottom > 0 && overTop <= 0) {
                    position.top = containerTop;
                } else {
                    position.top = overTop > overBottom ? containerBottom - elemData.height : containerTop;
                }
            } else if (overTop > 0) {
                position.top += overTop;
            } else if (overBottom > 0) {
                position.top -= overBottom;
            }
        }
        return position;
    }
    function isCollide(element) {
        var viewPortElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var x = arguments[2];
        var y = arguments[3];

        var elemOffset = calculatePosition(element, 'left', 'top');
        if (x) {
            elemOffset.left = x;
        }
        if (y) {
            elemOffset.top = y;
        }
        var data = [];
        targetContainer = viewPortElement;
        parentDocument$1 = element.ownerDocument;
        var elementRect = element.getBoundingClientRect();
        var top = elemOffset.top;
        var left = elemOffset.left;
        var right = elemOffset.left + elementRect.width;
        var bottom = elemOffset.top + elementRect.height;
        var yAxis = topCollideCheck(top, bottom);
        var xAxis = leftCollideCheck(left, right);
        if (yAxis.topSide) {
            data.push('top');
        }
        if (xAxis.rightSide) {
            data.push('right');
        }
        if (xAxis.leftSide) {
            data.push('left');
        }
        if (yAxis.bottomSide) {
            data.push('bottom');
        }
        return data;
    }
    function flip(element, target, offsetX, offsetY, positionX, positionY) {
        var viewPortElement = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        var axis = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : { X: true, Y: true };
        var fixedParent = arguments[8];

        if (!target || !element || !positionX || !positionY || !axis.X && !axis.Y) {
            return;
        }
        var tEdge = { TL: null,
            TR: null,
            BL: null,
            BR: null };
        var eEdge = {
            TL: null,
            TR: null,
            BL: null,
            BR: null
        };
        var elementRect = element.getBoundingClientRect();
        var pos = {
            posX: positionX, posY: positionY, offsetX: offsetX, offsetY: offsetY, position: { left: 0, top: 0 }
        };
        targetContainer = viewPortElement;
        parentDocument$1 = target.ownerDocument;
        updateElementData(target, tEdge, pos, fixedParent);
        setPosition(eEdge, pos, elementRect);
        if (axis.X) {
            leftFlip(target, eEdge, tEdge, pos, elementRect, true);
        }
        if (axis.Y && tEdge.TL.top > -1) {
            topFlip(target, eEdge, tEdge, pos, elementRect, true);
        }
        setPopup(element, pos);
    }
    function setPopup(element, pos) {
        var left = 0;
        var top = 0;
        if (element.offsetParent != null && (getComputedStyle(element.offsetParent).position === 'absolute' || getComputedStyle(element.offsetParent).position === 'relative')) {
            var data = calculatePosition(element.offsetParent, 'left', 'top');
            left = data.left;
            top = data.top;
        }
        element.style.top = pos.position.top + pos.offsetY - top + 'px';
        element.style.left = pos.position.left + pos.offsetX - left + 'px';
    }
    function updateElementData(target, edge, pos, fixedParent) {
        pos.position = calculatePosition(target, pos.posX, pos.posY, fixedParent);
        edge.TL = calculatePosition(target, 'left', 'top', fixedParent);
        edge.TR = calculatePosition(target, 'right', 'top', fixedParent);
        edge.BR = calculatePosition(target, 'left', 'bottom', fixedParent);
        edge.BL = calculatePosition(target, 'right', 'bottom', fixedParent);
    }
    function setPosition(eStatus, pos, elementRect) {
        eStatus.TL = { top: pos.position.top + pos.offsetY, left: pos.position.left + pos.offsetX };
        eStatus.TR = { top: eStatus.TL.top, left: eStatus.TL.left + elementRect.width };
        eStatus.BL = { top: eStatus.TL.top + elementRect.height,
            left: eStatus.TL.left };
        eStatus.BR = { top: eStatus.TL.top + elementRect.height,
            left: eStatus.TL.left + elementRect.width };
    }
    function leftCollideCheck(left, right) {
        var leftSide = false;
        var rightSide = false;
        if (left - getBodyScrollLeft$1() < ContainerLeft()) {
            leftSide = true;
        }
        if (right > ContainerRight()) {
            rightSide = true;
        }
        return { leftSide: leftSide, rightSide: rightSide };
    }
    function leftFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
        var collideSide = leftCollideCheck(edge.TL.left, edge.TR.left);
        if (tEdge.TL.left - getBodyScrollLeft$1() <= ContainerLeft()) {
            collideSide.leftSide = false;
        }
        if (tEdge.TR.left >= ContainerRight()) {
            collideSide.rightSide = false;
        }
        if (collideSide.leftSide && !collideSide.rightSide || !collideSide.leftSide && collideSide.rightSide) {
            if (pos.posX === 'right') {
                pos.posX = 'left';
            } else {
                pos.posX = 'right';
            }
            pos.offsetX = pos.offsetX + elementRect.width;
            pos.offsetX = -1 * pos.offsetX;
            pos.position = calculatePosition(target, pos.posX, pos.posY);
            setPosition(edge, pos, elementRect);
            if (deepCheck) {
                leftFlip(target, edge, tEdge, pos, elementRect, false);
            }
        }
    }
    function topFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
        var collideSide = topCollideCheck(edge.TL.top, edge.BL.top);
        if (tEdge.TL.top - getBodyScrollTop$1() <= ContainerTop()) {
            collideSide.topSide = false;
        }
        if (tEdge.BL.top >= ContainerBottom()) {
            collideSide.bottomSide = false;
        }
        if (collideSide.topSide && !collideSide.bottomSide || !collideSide.topSide && collideSide.bottomSide) {
            if (pos.posY === 'top') {
                pos.posY = 'bottom';
            } else {
                pos.posY = 'top';
            }
            pos.offsetY = pos.offsetY + elementRect.height;
            pos.offsetY = -1 * pos.offsetY;
            pos.position = calculatePosition(target, pos.posX, pos.posY);
            setPosition(edge, pos, elementRect);
            if (deepCheck) {
                topFlip(target, edge, tEdge, pos, elementRect, false);
            }
        }
    }
    function topCollideCheck(top, bottom) {
        var topSide = false;
        var bottomSide = false;
        if (top - getBodyScrollTop$1() < ContainerTop()) {
            topSide = true;
        }
        if (bottom > ContainerBottom()) {
            bottomSide = true;
        }
        return { topSide: topSide, bottomSide: bottomSide };
    }
    function getTargetContainerWidth() {
        return targetContainer.getBoundingClientRect().width;
    }
    function getTargetContainerHeight() {
        return targetContainer.getBoundingClientRect().height;
    }
    function getTargetContainerLeft() {
        return targetContainer.getBoundingClientRect().left;
    }
    function getTargetContainerTop() {
        return targetContainer.getBoundingClientRect().top;
    }
    function ContainerTop() {
        if (targetContainer) {
            return getTargetContainerTop();
        }
        return 0;
    }
    function ContainerLeft() {
        if (targetContainer) {
            return getTargetContainerLeft();
        }
        return 0;
    }
    function ContainerRight() {
        if (targetContainer) {
            return getBodyScrollLeft$1() + getTargetContainerLeft() + getTargetContainerWidth();
        }
        return getBodyScrollLeft$1() + getViewPortWidth();
    }
    function ContainerBottom() {
        if (targetContainer) {
            return getBodyScrollTop$1() + getTargetContainerTop() + getTargetContainerHeight();
        }
        return getBodyScrollTop$1() + getViewPortHeight();
    }
    function getBodyScrollTop$1() {
        // if(targetContainer)
        //     return targetContainer.scrollTop;
        return parentDocument$1.documentElement.scrollTop || parentDocument$1.body.scrollTop;
    }
    function getBodyScrollLeft$1() {
        // if(targetContainer)
        //     return targetContainer.scrollLeft;
        return parentDocument$1.documentElement.scrollLeft || parentDocument$1.body.scrollLeft;
    }
    function getViewPortHeight() {
        return window.innerHeight;
    }
    function getViewPortWidth() {
        return window.innerWidth;
    }

    /**
     * Gets scrollable parent elements for the given element.
     * @param { HTMLElement } element - Specify the element to get the scrollable parents of it.
     * @private
     */
    function _getScrollableParent(element, fixedParent) {
        var eleStyle = getComputedStyle(element);
        var scrollParents = [];
        var overflowRegex = /(auto|scroll)/;
        var parent = element.parentElement;
        while (parent && parent.tagName !== 'HTML') {
            var parentStyle = getComputedStyle(parent);
            if (!(eleStyle.position === 'absolute' && parentStyle.position === 'static') && overflowRegex.test(parentStyle.overflow + parentStyle.overflowY + parentStyle.overflowX)) {
                scrollParents.push(parent);
            }
            parent = parent.parentElement;
        }
        if (!fixedParent) {
            scrollParents.push(document);
        }
        return scrollParents;
    }
    /**
     * Gets the maximum z-index of the given element.
     * @param { HTMLElement } element - Specify the element to get the maximum z-index of it.
     * @private
     */
    function getZindexPartial(element) {
        // upto body traversal
        var parent = element.parentElement;
        var parentZindex = [];
        while (parent) {
            if (parent.tagName !== 'BODY') {
                var index = document.defaultView.getComputedStyle(parent, null).getPropertyValue('z-index');
                var position = document.defaultView.getComputedStyle(parent, null).getPropertyValue('position');
                if (index !== 'auto' && position !== 'static') {
                    parentZindex.push(index);
                }
                parent = parent.parentElement;
            } else {
                break;
            }
        }
        //Body direct children element traversal
        var childrenZindex = [];
        for (var i = 0; i < document.body.children.length; i++) {
            if (!element.isEqualNode(document.body.children[i])) {
                var _index = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue('z-index');
                var _position = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue('position');
                if (_index !== 'auto' && _position !== 'static') {
                    childrenZindex.push(_index);
                }
            }
        }
        childrenZindex.push('999');
        var finalValue = parentZindex.concat(childrenZindex);
        return Math.max.apply(Math, finalValue) + 1;
    }

    /**
     * Popup Components
     */

    /**
     * Popup Components
     */

    /**
     * Create a spinner for the specified target element.
     * ```
     * E.g : createSpinner({ target: targetElement, width: '34px', label: 'Loading..' });
     * ```
     * @param args
     * @private
     */
    function createSpinner(args) {
        var radius = void 0;
        var container = create_spinner_container(args.target);
        if (!isNullOrUndefined(args.cssClass)) {
            container.wrap.classList.add(args.cssClass);
        }
        if (!isNullOrUndefined(args.template) || !isNullOrUndefined(spinTemplate)) {
            var template = !isNullOrUndefined(args.template) ? args.template : spinTemplate;
            container.wrap.classList.add(CLS_SPINTEMPLATE);
            replaceContent(container.wrap, template, spinCSSClass);
        } else {
            var theme = !isNullOrUndefined(args.type) ? args.type : getTheme(container.wrap);
            var width = !isNullOrUndefined(args.width) ? args.width : undefined;
            radius = calculateRadius(width, theme);
            setTheme(theme, container.wrap, radius);
            if (!isNullOrUndefined(args.label)) {
                createLabel(container.inner_wrap, args.label);
            }
        }
        container.wrap.classList.add(CLS_HIDESPIN);
    }
    function createLabel(container, label) {
        var labelEle = document.createElement('div');
        labelEle.classList.add(CLS_SPINLABEL);
        labelEle.textContent = label;
        container.appendChild(labelEle);
        return labelEle;
    }
    function createMaterialSpinner(container, radius) {
        var uniqueID = random_generator();
        globalTimeOut[uniqueID] = { timeOut: 0, type: 'Material', radius: radius };
        create_material_element(container, uniqueID);
        mat_calculate_attributes(radius, container);
    }
    function startMatAnimate(container, uniqueID, radius) {
        var globalObject = {};
        var timeOutVar = 0;
        globalTimeOut[uniqueID].timeOut = 0;
        globalObject[uniqueID] = globalVariables(uniqueID, radius, 0, 0);
        var spinnerInfo = { uniqueID: uniqueID, container: container, globalInfo: globalObject, timeOutVar: timeOutVar };
        animateMaterial(spinnerInfo);
    }
    function createFabricSpinner(container, radius) {
        var uniqueID = random_generator();
        globalTimeOut[uniqueID] = { timeOut: 0, type: 'Fabric', radius: radius };
        create_fabric_element(container, uniqueID, CLS_FABRICSPIN);
        fb_calculate_attributes(radius, container, CLS_FABRICSPIN);
    }
    function createHighContrastSpinner(container, radius) {
        var uniqueID = random_generator();
        globalTimeOut[uniqueID] = { timeOut: 0, type: 'HighContrast', radius: radius };
        create_fabric_element(container, uniqueID, CLS_HIGHCONTRASTSPIN);
        fb_calculate_attributes(radius, container, CLS_HIGHCONTRASTSPIN);
    }
    function getTheme(container) {
        var theme = window.getComputedStyle(container, ':after').getPropertyValue('content');
        return theme.replace(/['"]+/g, '');
    }
    function setTheme(theme, container, radius) {
        var innerContainer = container.querySelector('.' + CLS_SPININWRAP);
        var svg = innerContainer.querySelector('svg');
        if (!isNullOrUndefined(svg)) {
            innerContainer.removeChild(svg);
        }
        switch (theme) {
            case 'Material':
                createMaterialSpinner(innerContainer, radius);
                break;
            case 'Fabric':
                createFabricSpinner(innerContainer, radius);
                break;
            case 'Bootstrap':
                createBootstrapSpinner(innerContainer, radius);
                break;
            case 'HighContrast':
                createHighContrastSpinner(innerContainer, radius);
                break;
        }
    }
    function createBootstrapSpinner(innerContainer, radius) {
        var uniqueID = random_generator();
        globalTimeOut[uniqueID] = { timeOut: 0, type: 'Bootstrap', radius: radius };
        create_bootstrap_element(innerContainer, uniqueID);
        boot_calculate_attributes(innerContainer, radius);
    }
    function create_bootstrap_element(innerContainer, uniqueID) {
        var svgBoot = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var viewBoxValue = 64;
        var trans = 32;
        var defaultRadius = 2;
        svgBoot.setAttribute('id', uniqueID);
        svgBoot.setAttribute('class', CLS_BOOTSPIN);
        svgBoot.setAttribute('viewBox', '0 0 ' + viewBoxValue + ' ' + viewBoxValue);
        innerContainer.insertBefore(svgBoot, innerContainer.firstChild);
        for (var item = 0; item <= 7; item++) {
            var bootCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            bootCircle.setAttribute('class', CLS_SPINCIRCLE + '_' + item);
            bootCircle.setAttribute('r', defaultRadius + '');
            bootCircle.setAttribute('transform', 'translate(' + trans + ',' + trans + ')');
            svgBoot.appendChild(bootCircle);
        }
    }
    function boot_calculate_attributes(innerContainer, radius) {
        var svg = innerContainer.querySelector('svg.e-spin-bootstrap');
        svg.style.width = svg.style.height = radius + 'px';
        var x = 0;
        var y = 0;
        var rad = 24;
        var startArc = 90;
        for (var item = 0; item <= 7; item++) {
            var start = defineArcPoints(x, y, rad, startArc);
            var circleEle = svg.querySelector('.' + CLS_SPINCIRCLE + '_' + item);
            circleEle.setAttribute('cx', start.x + '');
            circleEle.setAttribute('cy', start.y + '');
            startArc = startArc >= 360 ? 0 : startArc;
            startArc = startArc + 45;
        }
    }
    function generateSeries(begin, stop) {
        var series = [];
        var start = begin;
        var end = stop;
        var increment = false;
        var count = 1;
        formSeries(start);
        function formSeries(i) {
            series.push(i);
            if (i !== end || count === 1) {
                if (i <= start && i > 1 && !increment) {
                    i = parseFloat((i - 0.2).toFixed(2));
                } else if (i === 1) {
                    i = 7;
                    i = parseFloat((i + 0.2).toFixed(2));
                    increment = true;
                } else if (i < 8 && increment) {
                    i = parseFloat((i + 0.2).toFixed(2));
                    if (i === 8) {
                        increment = false;
                    }
                } else if (i <= 8 && !increment) {
                    i = parseFloat((i - 0.2).toFixed(2));
                }
                ++count;
                formSeries(i);
            }
        }
        return series;
    }
    function animateBootstrap(innerContainer) {
        var svg = innerContainer.querySelector('svg.e-spin-bootstrap');
        var id = svg.getAttribute('id');
        for (var i = 1; i <= 8; i++) {
            var circleEle = innerContainer.getElementsByClassName('e-path-circle_' + (i === 8 ? 0 : i))[0];
            rotation(circleEle, i, i, generateSeries(i, i), id);
        }
        function rotation(circle, start, end, series, id) {
            var count = 0;
            boot_animate(start);
            function boot_animate(radius) {
                if (globalTimeOut[id].isAnimate) {
                    ++count;
                    circle.setAttribute('r', radius + '');
                    if (count >= series.length) {
                        count = 0;
                    }
                    globalTimeOut[id].timeOut = setTimeout(boot_animate.bind(null, series[count]), 18);
                }
            }
        }
    }
    function replaceContent(container, template, cssClass) {
        if (!isNullOrUndefined(cssClass)) {
            container.classList.add(cssClass);
        }
        var inner = container.querySelector('.e-spinner-inner');
        inner.innerHTML = template;
    }
    function calculateRadius(width, theme) {
        var defaultSize = theme === 'Material' ? DEFT_MAT_WIDTH : theme === 'Fabric' ? DEFT_FAB_WIDTH : DEFT_BOOT_WIDTH;
        width = width ? parseFloat(width + '') : defaultSize;
        return theme === 'Bootstrap' ? width : width / 2;
    }
    function globalVariables(id, radius, count, previousId) {
        return {
            radius: radius,
            count: count,
            previousId: previousId
        };
    }
    function random_generator() {
        var random = '';
        var combine = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            random += combine.charAt(Math.floor(Math.random() * combine.length));
        }
        return random;
    }
    function create_fabric_element(innerContainer, uniqueID, themeClass) {
        var svgFabric = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgFabric.setAttribute('id', uniqueID);
        svgFabric.setAttribute('class', themeClass);
        var fabricCirclePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        fabricCirclePath.setAttribute('class', CLS_SPINCIRCLE);
        var fabricCircleArc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        fabricCircleArc.setAttribute('class', CLS_SPINARC);
        innerContainer.insertBefore(svgFabric, innerContainer.firstChild);
        svgFabric.appendChild(fabricCirclePath);
        svgFabric.appendChild(fabricCircleArc);
    }
    function create_material_element(innerContainer, uniqueID) {
        var svgMaterial = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgMaterial.setAttribute('class', CLS_MATERIALSPIN);
        svgMaterial.setAttribute('id', uniqueID);
        var matCirclePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        matCirclePath.setAttribute('class', CLS_SPINCIRCLE);
        innerContainer.insertBefore(svgMaterial, innerContainer.firstChild);
        svgMaterial.appendChild(matCirclePath);
    }
    function create_spinner_container(target) {
        var spinnerContainer = document.createElement('div');
        spinnerContainer.classList.add(CLS_SPINWRAP);
        var spinnerInnerContainer = document.createElement('div');
        spinnerInnerContainer.classList.add(CLS_SPININWRAP);
        target.appendChild(spinnerContainer);
        spinnerContainer.appendChild(spinnerInnerContainer);
        return { wrap: spinnerContainer, inner_wrap: spinnerInnerContainer };
    }
    function animateMaterial(spinnerInfo) {
        var start = 1;
        var end = 149;
        var duration = 1333;
        var max = 75;
        createCircle(start, end, easeAnimation, duration, spinnerInfo.globalInfo[spinnerInfo.uniqueID].count, max, spinnerInfo);
        spinnerInfo.globalInfo[spinnerInfo.uniqueID].count = ++spinnerInfo.globalInfo[spinnerInfo.uniqueID].count % 4;
    }
    function createCircle(start, end, easing, duration, count, max, spinnerInfo) {
        var id = ++spinnerInfo.globalInfo[spinnerInfo.uniqueID].previousId;
        var startTime = new Date().getTime();
        var change = end - start;
        var diameter = getSize(spinnerInfo.globalInfo[spinnerInfo.uniqueID].radius * 2 + '');
        var strokeSize = getStrokeSize(diameter);
        var rotate = -90 * (spinnerInfo.globalInfo[spinnerInfo.uniqueID].count || 0);
        mat_animation(spinnerInfo);
        function mat_animation(spinnerInfo) {
            var currentTime = Math.max(0, Math.min(new Date().getTime() - startTime, duration));
            updatePath(easing(currentTime, start, change, duration), spinnerInfo.container);
            if (id === spinnerInfo.globalInfo[spinnerInfo.uniqueID].previousId && currentTime < duration) {
                globalTimeOut[spinnerInfo.uniqueID].timeOut = setTimeout(mat_animation.bind(null, spinnerInfo), 1);
            } else {
                animateMaterial(spinnerInfo);
            }
        }
        function updatePath(value, container) {
            if (!isNullOrUndefined(container.querySelector('svg.e-spin-material')) && !isNullOrUndefined(container.querySelector('svg.e-spin-material').querySelector('path.e-path-circle'))) {
                var svg = container.querySelector('svg.e-spin-material');
                var path = svg.querySelector('path.e-path-circle');
                path.setAttribute('stroke-dashoffset', getDashOffset(diameter, strokeSize, value, max) + '');
                path.setAttribute('transform', 'rotate(' + rotate + ' ' + diameter / 2 + ' ' + diameter / 2 + ')');
            }
        }
    }
    function mat_calculate_attributes(radius, container) {
        var diameter = radius * 2;
        var svg = container.querySelector('svg.e-spin-material');
        var path = svg.querySelector('path.e-path-circle');
        var strokeSize = getStrokeSize(diameter);
        var transformOrigin = diameter / 2 + 'px';
        svg.setAttribute('viewBox', '0 0 ' + diameter + ' ' + diameter);
        svg.style.width = svg.style.height = diameter + 'px';
        svg.style.transformOrigin = transformOrigin + ' ' + transformOrigin + ' ' + transformOrigin;
        path.setAttribute('stroke-width', strokeSize + '');
        path.setAttribute('d', drawArc(diameter, strokeSize));
        path.setAttribute('stroke-dasharray', (diameter - strokeSize) * Math.PI * 0.75 + '');
        path.setAttribute('stroke-dashoffset', getDashOffset(diameter, strokeSize, 1, 75) + '');
    }
    function getSize(value) {
        var parsed = parseFloat(value);
        return parsed;
    }
    function drawArc(diameter, strokeSize) {
        var radius = diameter / 2;
        var offset = strokeSize / 2;
        return 'M' + radius + ',' + offset + 'A' + (radius - offset) + ',' + (radius - offset) + ' 0 1 1 ' + offset + ',' + radius;
    }
    function getStrokeSize(diameter) {
        return 10 / 100 * diameter;
    }
    function getDashOffset(diameter, strokeSize, value, max) {
        return (diameter - strokeSize) * Math.PI * (3 * max / 100 - value / 100);
    }
    function easeAnimation(current, start, change, duration) {
        var timestamp = (current /= duration) * current;
        var timecount = timestamp * current;
        return start + change * (6 * timecount * timestamp + -15 * timestamp * timestamp + 10 * timecount);
    }
    function fb_calculate_attributes(radius, innerConainer, trgClass) {
        var centerX = radius;
        var centerY = radius;
        var diameter = radius * 2;
        var startArc = 315;
        var endArc = 45;
        var svg = innerConainer.querySelector('.' + trgClass);
        var circle = svg.querySelector('.e-path-circle');
        var path = svg.querySelector('.e-path-arc');
        var transformOrigin = diameter / 2 + 'px';
        circle.setAttribute('d', defineCircle(centerX, centerY, radius));
        path.setAttribute('d', defineArc(centerX, centerY, radius, startArc, endArc));
        svg.setAttribute('viewBox', '0 0 ' + diameter + ' ' + diameter);
        svg.style.transformOrigin = transformOrigin + ' ' + transformOrigin + ' ' + transformOrigin;
        svg.style.width = svg.style.height = diameter + 'px';
    }
    function defineArcPoints(centerX, centerY, radius, angle) {
        var radians = (angle - 90) * Math.PI / 180.0;
        return {
            x: centerX + radius * Math.cos(radians),
            y: centerY + radius * Math.sin(radians)
        };
    }
    function defineArc(x, y, radius, startArc, endArc) {
        var start = defineArcPoints(x, y, radius, endArc);
        var end = defineArcPoints(x, y, radius, startArc);
        var d = ['M', start.x, start.y, 'A', radius, radius, 0, 0, 0, end.x, end.y].join(' ');
        return d;
    }
    function defineCircle(x, y, radius) {
        var d = ['M', x, y, 'm', -radius, 0, 'a', radius, radius, 0, 1, 0, radius * 2, 0, 'a', radius, radius, 0, 1, 0, -radius * 2, 0].join(' ');
        return d;
    }
    /**
     * Function to show the Spinner.
     * @param container - Specify the target of the Spinner.
     * @private
     */
    function showSpinner(container) {
        showHideSpinner(container, false);
    }
    function showHideSpinner(container, isHide) {
        var spinnerWrap = container.classList.contains(CLS_SPINWRAP) ? container : container.querySelector('.' + CLS_SPINWRAP);
        var inner = spinnerWrap.querySelector('.' + CLS_SPININWRAP);
        var spinCheck = void 0;
        spinCheck = isHide ? !spinnerWrap.classList.contains(CLS_SPINTEMPLATE) && !spinnerWrap.classList.contains(CLS_HIDESPIN) : !spinnerWrap.classList.contains(CLS_SPINTEMPLATE) && !spinnerWrap.classList.contains(CLS_SHOWSPIN);
        if (spinCheck) {
            var svgEle = spinnerWrap.querySelector('svg');
            if (isNullOrUndefined(svgEle)) {
                return;
            }
            var id = svgEle.getAttribute('id');
            globalTimeOut[id].isAnimate = !isHide;
            switch (globalTimeOut[id].type) {
                case 'Material':
                    isHide ? clearTimeout(globalTimeOut[id].timeOut) : startMatAnimate(inner, id, globalTimeOut[id].radius);
                    break;
                case 'Bootstrap':
                    isHide ? clearTimeout(globalTimeOut[id].timeOut) : animateBootstrap(inner);
                    break;
            }
        }
        isHide ? classList(spinnerWrap, [CLS_HIDESPIN], [CLS_SHOWSPIN]) : classList(spinnerWrap, [CLS_SHOWSPIN], [CLS_HIDESPIN]);
    }
    /**
     * Function to hide the Spinner.
     * @param container - Specify the target of the Spinner.
     * @private
     */
    function hideSpinner(container) {
        showHideSpinner(container, true);
    }
    /**
     * Function to change the Spinners in a page globally from application end.
     * ```
     * E.g : setSpinner({ cssClass: 'custom-css'; type: 'Material' });
     * ```
     * @param args
     * @private
     */
    function setSpinner(args) {
        if (args.template !== undefined) {
            spinTemplate = args.template;
            if (args.template !== undefined) {
                spinCSSClass = args.cssClass;
            }
        }
        var container = document.querySelectorAll('.' + CLS_SPINWRAP);
        for (var index = 0; index < container.length; index++) {
            ensureTemplate(args.template, container[index], args.type, args.cssClass);
        }
    }
    function ensureTemplate(template, container, theme, cssClass) {
        if (isNullOrUndefined(template) && !container.classList.contains(CLS_SPINTEMPLATE)) {
            replaceTheme(container, theme, cssClass);
            if (container.classList.contains(CLS_SHOWSPIN)) {
                container.classList.remove(CLS_SHOWSPIN);
                showSpinner(container);
            } else {
                container.classList.remove(CLS_HIDESPIN);
                hideSpinner(container);
            }
        } else {
            spinTemplate = template;
            if (!isNullOrUndefined(cssClass)) {
                spinCSSClass = cssClass;
            }
        }
    }
    function replaceTheme(container, theme, cssClass) {
        if (!isNullOrUndefined(cssClass)) {
            container.classList.add(cssClass);
        }
        var svgElement = container.querySelector('svg');
        var radius = theme === 'Bootstrap' ? parseFloat(svgElement.style.height) : parseFloat(svgElement.style.height) / 2;
        var classNames = svgElement.getAttribute('class');
        var svgClassList = classNames.split(/\s/);
        if (svgClassList.indexOf('e-spin-material') >= 0) {
            var id = svgElement.getAttribute('id');
            clearTimeout(globalTimeOut[id].timeOut);
        }
        setTheme(theme, container, radius);
    }

    /**
     * spinner modules
     */

    /**
     * Popup Components
     */

    return {
        setters: [function (_syncfusionEj2Base) {
            Animation = _syncfusionEj2Base.Animation;
            Browser = _syncfusionEj2Base.Browser;
            ChildProperty = _syncfusionEj2Base.ChildProperty;
            Collection = _syncfusionEj2Base.Collection;
            Complex = _syncfusionEj2Base.Complex;
            Component = _syncfusionEj2Base.Component;
            Draggable = _syncfusionEj2Base.Draggable;
            Event = _syncfusionEj2Base.Event;
            EventHandler = _syncfusionEj2Base.EventHandler;
            L10n = _syncfusionEj2Base.L10n;
            NotifyPropertyChanges = _syncfusionEj2Base.NotifyPropertyChanges;
            Property = _syncfusionEj2Base.Property;
            Touch = _syncfusionEj2Base.Touch;
            addClass = _syncfusionEj2Base.addClass;
            attributes = _syncfusionEj2Base.attributes;
            classList = _syncfusionEj2Base.classList;
            closest = _syncfusionEj2Base.closest;
            createElement = _syncfusionEj2Base.createElement;
            detach = _syncfusionEj2Base.detach;
            formatUnit = _syncfusionEj2Base.formatUnit;
            getUniqueID = _syncfusionEj2Base.getUniqueID;
            isNullOrUndefined = _syncfusionEj2Base.isNullOrUndefined;
            prepend = _syncfusionEj2Base.prepend;
            remove = _syncfusionEj2Base.remove;
            removeClass = _syncfusionEj2Base.removeClass;
            setStyleAttribute = _syncfusionEj2Base.setStyleAttribute;
        }, function (_syncfusionEj2Buttons) {
            Button = _syncfusionEj2Buttons.Button;
        }],
        execute: function () {
            _slicedToArray = function () {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;

                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);

                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }

                    return _arr;
                }

                return function (arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();

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
            elementRect = void 0;
            element = void 0;
            parentDocument = void 0;
            fixedParent = false;
            parentDocument$1 = void 0;
            targetContainer = void 0;

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('PositionData', PositionData = function (_ChildProperty) {
                _inherits(PositionData, _ChildProperty);

                function PositionData() {
                    _classCallCheck(this, PositionData);

                    return _possibleConstructorReturn(this, (PositionData.__proto__ || Object.getPrototypeOf(PositionData)).apply(this, arguments));
                }

                return PositionData;
            }(ChildProperty));

            __decorate([Property('left')], PositionData.prototype, "X", void 0);
            __decorate([Property('top')], PositionData.prototype, "Y", void 0);
            // don't use space in classNames
            CLASSNAMES = {
                ROOT: 'e-popup',
                RTL: 'e-rtl',
                OPEN: 'e-popup-open',
                CLOSE: 'e-popup-close'
            };

            _export('Popup', Popup = function (_Component) {
                _inherits(Popup, _Component);

                function Popup(element, options) {
                    _classCallCheck(this, Popup);

                    var _this2 = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, options, element));

                    _this2.fixedParent = false;
                    return _this2;
                }
                /**
                 * Called internally if any of the property value changed.
                 * @private
                 */


                _createClass(Popup, [{
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = Object.keys(newProp)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var prop = _step.value;

                                switch (prop) {
                                    case 'width':
                                        setStyleAttribute(this.element, { 'width': formatUnit(newProp.width) });
                                        break;
                                    case 'height':
                                        setStyleAttribute(this.element, { 'height': formatUnit(newProp.height) });
                                        break;
                                    case 'zIndex':
                                        setStyleAttribute(this.element, { 'zIndex': newProp.zIndex });
                                        break;
                                    case 'enableRtl':
                                        this.setEnableRtl();
                                        break;
                                    case 'position':
                                    case 'relateTo':
                                        this.refreshPosition();
                                        break;
                                    case 'offsetX':
                                        var x = newProp.offsetX - oldProp.offsetX;
                                        this.element.style.left = (parseInt(this.element.style.left, 10) + x).toString() + 'px';
                                        break;
                                    case 'offsetY':
                                        var y = newProp.offsetY - oldProp.offsetY;
                                        this.element.style.top = (parseInt(this.element.style.top, 10) + y).toString() + 'px';
                                        break;
                                    case 'content':
                                        this.setContent();
                                        break;
                                    case 'actionOnScroll':
                                        if (newProp.actionOnScroll !== 'none') {
                                            this.wireScrollEvents();
                                        } else {
                                            this.unwireScrollEvents();
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
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'popup';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist([]);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.element.classList.remove(CLASSNAMES.ROOT, CLASSNAMES.RTL);
                        this.unwireEvents();
                        _get(Popup.prototype.__proto__ || Object.getPrototypeOf(Popup.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.element.classList.add(CLASSNAMES.ROOT);
                        var styles = {};
                        if (this.zIndex !== 1000) {
                            styles.zIndex = this.zIndex;
                        }
                        if (this.width !== 'auto') {
                            styles.width = formatUnit(this.width);
                        }
                        if (this.height !== 'auto') {
                            styles.height = formatUnit(this.height);
                        }
                        setStyleAttribute(this.element, styles);
                        this.setEnableRtl();
                        this.setContent();
                        this.wireEvents();
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        if (Browser.isDevice) {
                            EventHandler.add(window, 'orientationchange', this.orientationOnChange, this);
                        }
                        if (this.actionOnScroll !== 'none') {
                            this.wireScrollEvents();
                        }
                    }
                }, {
                    key: 'wireScrollEvents',
                    value: function wireScrollEvents() {
                        if (this.getRelateToElement()) {
                            var _iteratorNormalCompletion2 = true;
                            var _didIteratorError2 = false;
                            var _iteratorError2 = undefined;

                            try {
                                for (var _iterator2 = this.getScrollableParent(this.getRelateToElement())[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    var parent = _step2.value;

                                    EventHandler.add(parent, 'scroll', this.scrollRefresh, this);
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
                    }
                }, {
                    key: 'unwireEvents',
                    value: function unwireEvents() {
                        if (Browser.isDevice) {
                            EventHandler.remove(window, 'orientationchange', this.orientationOnChange);
                        }
                        if (this.actionOnScroll !== 'none') {
                            this.unwireScrollEvents();
                        }
                    }
                }, {
                    key: 'unwireScrollEvents',
                    value: function unwireScrollEvents() {
                        if (this.getRelateToElement()) {
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;

                            try {
                                for (var _iterator3 = this.getScrollableParent(this.getRelateToElement())[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var parent = _step3.value;

                                    EventHandler.remove(parent, 'scroll', this.scrollRefresh);
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
                    }
                }, {
                    key: 'getRelateToElement',
                    value: function getRelateToElement() {
                        var relateToElement = this.relateTo === '' ? document.body : this.relateTo;
                        this.setProperties({ relateTo: relateToElement }, true);
                        return typeof this.relateTo === 'string' ? document.querySelector(this.relateTo) : this.relateTo;
                    }
                }, {
                    key: 'scrollRefresh',
                    value: function scrollRefresh(e) {
                        if (this.actionOnScroll === 'reposition') {
                            if (!(this.element.offsetParent === e.target || this.element.offsetParent && this.element.offsetParent.tagName === 'BODY' && e.target.parentElement == null)) {
                                this.refreshPosition();
                            }
                        } else if (this.actionOnScroll === 'hide') {
                            this.hide();
                        }
                        if (this.actionOnScroll !== 'none') {
                            if (this.getRelateToElement()) {
                                var targetVisible = this.isElementOnViewport(this.getRelateToElement(), e.target);
                                if (!targetVisible && !this.targetInvisibleStatus) {
                                    this.trigger('targetExitViewport');
                                    this.targetInvisibleStatus = true;
                                } else if (targetVisible) {
                                    this.targetInvisibleStatus = false;
                                }
                            }
                        }
                    }
                }, {
                    key: 'isElementOnViewport',
                    value: function isElementOnViewport(relateToElement, scrollElement) {
                        var scrollParents = this.getScrollableParent(relateToElement);
                        for (var parent = 0; parent < scrollParents.length; parent++) {
                            if (this.isElementVisible(relateToElement, scrollParents[parent])) {
                                continue;
                            } else {
                                return false;
                            }
                        }
                        return true;
                    }
                }, {
                    key: 'isElementVisible',
                    value: function isElementVisible(relateToElement, scrollElement) {
                        var rect = relateToElement.getBoundingClientRect();
                        if (!rect.height || !rect.width) {
                            return false;
                        }
                        if (scrollElement.getBoundingClientRect) {
                            var parent = scrollElement.getBoundingClientRect();
                            return !(rect.bottom < parent.top) && !(rect.bottom > parent.bottom) && !(rect.right > parent.right) && !(rect.left < parent.left);
                        } else {
                            var win = window;
                            var windowView = {
                                top: win.scrollY,
                                left: win.scrollX,
                                right: win.scrollX + win.outerWidth,
                                bottom: win.scrollY + win.outerHeight
                            };
                            var off = calculatePosition(relateToElement);
                            var ele = {
                                top: off.top,
                                left: off.left,
                                right: off.left + rect.width,
                                bottom: off.top + rect.height
                            };
                            var elementView = {
                                top: windowView.bottom - ele.top,
                                left: windowView.right - ele.left,
                                bottom: ele.bottom - windowView.top,
                                right: ele.right - windowView.left
                            };
                            return elementView.top > 0 && elementView.left > 0 && elementView.right > 0 && elementView.bottom > 0;
                        }
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        //There is no event handler
                    }
                }, {
                    key: 'setEnableRtl',
                    value: function setEnableRtl() {
                        this.reposition();
                        this.enableRtl ? this.element.classList.add(CLASSNAMES.RTL) : this.element.classList.remove(CLASSNAMES.RTL);
                    }
                }, {
                    key: 'setContent',
                    value: function setContent() {
                        if (!isNullOrUndefined(this.content)) {
                            this.element.innerHTML = '';
                            if (typeof this.content === 'string') {
                                this.element.textContent = this.content;
                            } else {
                                this.element.appendChild(this.content);
                            }
                        }
                    }
                }, {
                    key: 'orientationOnChange',
                    value: function orientationOnChange() {
                        var _this3 = this;

                        setTimeout(function () {
                            _this3.refreshPosition();
                        }, 200);
                    }
                }, {
                    key: 'refreshPosition',
                    value: function refreshPosition(target) {
                        if (!isNullOrUndefined(target)) {
                            this.checkFixedParent(target);
                        }
                        this.reposition();
                        this.checkCollision();
                    }
                }, {
                    key: 'reposition',
                    value: function reposition() {
                        var pos = void 0;
                        var relateToElement = this.getRelateToElement();
                        if (typeof this.position.X === 'number' && typeof this.position.Y === 'number') {
                            pos = { left: this.position.X, top: this.position.Y };
                        } else if (relateToElement) {
                            var display = this.element.style.display;
                            this.element.style.display = 'block';
                            pos = this.getAnchorPosition(relateToElement, this.element, this.position, this.offsetX, this.offsetY);
                            this.element.style.display = display;
                        } else {
                            pos = { left: 0, top: 0 };
                        }
                        this.element.style.left = pos.left + 'px';
                        this.element.style.top = pos.top + 'px';
                    }
                }, {
                    key: 'getAnchorPosition',
                    value: function getAnchorPosition(anchorEle, ele, position, offsetX, offsetY) {
                        var eleRect = ele.getBoundingClientRect();
                        var anchorRect = anchorEle.getBoundingClientRect();
                        var anchor = anchorEle;
                        var anchorPos = { left: 0, top: 0 };
                        if (ele.offsetParent && ele.offsetParent.tagName === 'BODY' && anchorEle.tagName === 'BODY') {
                            anchorPos = calculatePosition(anchorEle);
                        } else {
                            anchorPos = calculateRelativeBasedPosition(anchor, ele);
                        }
                        switch (position.X) {
                            default:
                            case 'left':
                                break;
                            case 'center':
                                if (this.targetType === 'container') {
                                    anchorPos.left += anchorRect.width / 2 - eleRect.width / 2;
                                } else {
                                    anchorPos.left += anchorRect.width / 2;
                                }
                                break;
                            case 'right':
                                if (this.targetType === 'container') {
                                    anchorPos.left += anchorRect.width - eleRect.width;
                                } else {
                                    anchorPos.left += anchorRect.width;
                                }
                                break;
                        }
                        switch (position.Y) {
                            default:
                            case 'top':
                                break;
                            case 'center':
                                if (this.targetType === 'container') {
                                    anchorPos.top += anchorRect.height / 2 - eleRect.height / 2;
                                } else {
                                    anchorPos.top += anchorRect.height / 2;
                                }
                                break;
                            case 'bottom':
                                if (this.targetType === 'container') {
                                    anchorPos.top += anchorRect.height - eleRect.height;
                                } else {
                                    anchorPos.top += anchorRect.height;
                                }
                                break;
                        }
                        anchorPos.left += offsetX;
                        anchorPos.top += offsetY;
                        return anchorPos;
                    }
                }, {
                    key: 'callFlip',
                    value: function callFlip(param) {
                        var relateToElement = this.getRelateToElement();
                        flip(this.element, relateToElement, this.offsetX, this.offsetY, this.position.X, this.position.Y, this.viewPortElement, param, this.fixedParent);
                    }
                }, {
                    key: 'callFit',
                    value: function callFit(param) {
                        if (isCollide(this.element, this.viewPortElement).length !== 0) {
                            var data = fit(this.element, this.viewPortElement, param);
                            this.element.style.left = data.left + 'px';
                            this.element.style.top = data.top + 'px';
                        }
                    }
                }, {
                    key: 'checkCollision',
                    value: function checkCollision() {
                        var horz = this.collision.X;
                        var vert = this.collision.Y;
                        if (horz === 'none' && vert === 'none') {
                            return;
                        }
                        if (horz === 'flip' && vert === 'flip') {
                            this.callFlip({ X: true, Y: true });
                        } else if (horz === 'fit' && vert === 'fit') {
                            this.callFit({ X: true, Y: true });
                        } else {
                            if (horz === 'fit') {
                                this.callFit({ X: true, Y: false });
                            } else if (vert === 'fit') {
                                this.callFit({ X: false, Y: true });
                            }
                            if (horz === 'flip') {
                                this.callFlip({ X: true, Y: false });
                            } else if (vert === 'flip') {
                                this.callFlip({ Y: true, X: false });
                            }
                        }
                    }
                }, {
                    key: 'show',
                    value: function show(animationOptions) {
                        var _this4 = this;

                        if (this.zIndex === 1000) {
                            this.zIndex = getZindexPartial(this.element);
                            setStyleAttribute(this.element, { 'zIndex': this.zIndex });
                        }
                        animationOptions = !isNullOrUndefined(animationOptions) && (typeof animationOptions === 'undefined' ? 'undefined' : _typeof(animationOptions)) === 'object' ? animationOptions : this.showAnimation;
                        if (this.collision.X !== 'none' || this.collision.Y !== 'none') {
                            removeClass([this.element], CLASSNAMES.CLOSE);
                            addClass([this.element], CLASSNAMES.OPEN);
                            this.checkCollision();
                            removeClass([this.element], CLASSNAMES.OPEN);
                            addClass([this.element], CLASSNAMES.CLOSE);
                        }
                        if (!isNullOrUndefined(animationOptions)) {
                            animationOptions.begin = function () {
                                if (!_this4.isDestroyed) {
                                    removeClass([_this4.element], CLASSNAMES.CLOSE);
                                    addClass([_this4.element], CLASSNAMES.OPEN);
                                }
                            };
                            animationOptions.end = function () {
                                if (!_this4.isDestroyed) {
                                    _this4.trigger('open');
                                }
                            };
                            new Animation(animationOptions).animate(this.element);
                        } else {
                            removeClass([this.element], CLASSNAMES.CLOSE);
                            addClass([this.element], CLASSNAMES.OPEN);
                            this.trigger('open');
                        }
                    }
                }, {
                    key: 'hide',
                    value: function hide(animationOptions) {
                        var _this5 = this;

                        animationOptions = !isNullOrUndefined(animationOptions) && (typeof animationOptions === 'undefined' ? 'undefined' : _typeof(animationOptions)) === 'object' ? animationOptions : this.hideAnimation;
                        if (!isNullOrUndefined(animationOptions)) {
                            animationOptions.end = function () {
                                if (!_this5.isDestroyed) {
                                    removeClass([_this5.element], CLASSNAMES.OPEN);
                                    addClass([_this5.element], CLASSNAMES.CLOSE);
                                    _this5.trigger('close');
                                }
                            };
                            new Animation(animationOptions).animate(this.element);
                        } else {
                            removeClass([this.element], CLASSNAMES.OPEN);
                            addClass([this.element], CLASSNAMES.CLOSE);
                            this.trigger('close');
                        }
                    }
                }, {
                    key: 'getScrollableParent',
                    value: function getScrollableParent(element) {
                        this.checkFixedParent(element);
                        return _getScrollableParent(element, this.fixedParent);
                    }
                }, {
                    key: 'checkFixedParent',
                    value: function checkFixedParent(element) {
                        var parent = element.parentElement;
                        while (parent && parent.tagName !== 'HTML') {
                            var parentStyle = getComputedStyle(parent);
                            if (parentStyle.position === 'fixed' && this.element.offsetParent && this.element.offsetParent.tagName === 'BODY') {
                                this.element.style.position = 'fixed';
                                this.fixedParent = true;
                            }
                            parent = parent.parentElement;
                            if (isNullOrUndefined(this.element.offsetParent) && parentStyle.position === 'fixed' && this.element.style.position === 'fixed') {
                                this.fixedParent = true;
                            }
                        }
                    }
                }]);

                return Popup;
            }(Component));

            __decorate([Property('auto')], Popup.prototype, "height", void 0);
            __decorate([Property('auto')], Popup.prototype, "width", void 0);
            __decorate([Property(null)], Popup.prototype, "content", void 0);
            __decorate([Property('container')], Popup.prototype, "targetType", void 0);
            __decorate([Property(null)], Popup.prototype, "viewPortElement", void 0);
            __decorate([Property({ X: 'none', Y: 'none' })], Popup.prototype, "collision", void 0);
            __decorate([Property('')], Popup.prototype, "relateTo", void 0);
            __decorate([Complex({}, PositionData)], Popup.prototype, "position", void 0);
            __decorate([Property(0)], Popup.prototype, "offsetX", void 0);
            __decorate([Property(0)], Popup.prototype, "offsetY", void 0);
            __decorate([Property(1000)], Popup.prototype, "zIndex", void 0);
            __decorate([Property(false)], Popup.prototype, "enableRtl", void 0);
            __decorate([Property('reposition')], Popup.prototype, "actionOnScroll", void 0);
            __decorate([Property(null)], Popup.prototype, "showAnimation", void 0);
            __decorate([Property(null)], Popup.prototype, "hideAnimation", void 0);
            __decorate([Event()], Popup.prototype, "open", void 0);
            __decorate([Event()], Popup.prototype, "close", void 0);
            __decorate([Event()], Popup.prototype, "targetExitViewport", void 0);
            _export('Popup', Popup = __decorate([NotifyPropertyChanges], Popup));
            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('ButtonProps', ButtonProps = function (_ChildProperty2) {
                _inherits(ButtonProps, _ChildProperty2);

                function ButtonProps() {
                    _classCallCheck(this, ButtonProps);

                    return _possibleConstructorReturn(this, (ButtonProps.__proto__ || Object.getPrototypeOf(ButtonProps)).apply(this, arguments));
                }

                return ButtonProps;
            }(ChildProperty));

            __decorate$1([Property()], ButtonProps.prototype, "buttonModel", void 0);
            __decorate$1([Property()], ButtonProps.prototype, "click", void 0);
            /**
             * Specifies Dialog open and close animation settings.
             */

            _export('AnimationSettings', AnimationSettings = function (_ChildProperty3) {
                _inherits(AnimationSettings, _ChildProperty3);

                function AnimationSettings() {
                    _classCallCheck(this, AnimationSettings);

                    return _possibleConstructorReturn(this, (AnimationSettings.__proto__ || Object.getPrototypeOf(AnimationSettings)).apply(this, arguments));
                }

                return AnimationSettings;
            }(ChildProperty));

            __decorate$1([Property('Fade')], AnimationSettings.prototype, "effect", void 0);
            __decorate$1([Property(400)], AnimationSettings.prototype, "duration", void 0);
            __decorate$1([Property(0)], AnimationSettings.prototype, "delay", void 0);
            ROOT = 'e-dialog';
            RTL = 'e-rtl';
            DLG_HEADER_CONTENT = 'e-dlg-header-content';
            DLG_HEADER = 'e-dlg-header';
            DLG_FOOTER_CONTENT = 'e-footer-content';
            MODAL_DLG = 'e-dlg-modal';
            DLG_CONTENT = 'e-dlg-content';
            DLG_CLOSE_ICON = 'e-icon-dlg-close';
            DLG_OVERLAY = 'e-dlg-overlay';
            DLG_CONTAINER = 'e-dlg-container';
            SCROLL_DISABLED = 'e-scroll-disabled';
            DLG_PRIMARY_BUTTON = 'e-primary';
            ICON = 'e-icons';
            POPUP_ROOT = 'e-popup';
            DEVICE = 'e-device';
            FULLSCREEN = 'e-dlg-fullscreen';
            DLG_CLOSE_ICON_BTN = 'e-dlg-closeicon-btn';
            DLG_HIDE = 'e-popup-close';
            DLG_SHOW = 'e-popup-open';

            _export('Dialog', Dialog = function (_Component2) {
                _inherits(Dialog, _Component2);

                /**
                 * Constructor for creating the widget
                 * @hidden
                 */
                function Dialog(options, element) {
                    _classCallCheck(this, Dialog);

                    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, options, element));
                }
                /**
                 * Initialize the control rendering
                 * @private
                 */


                _createClass(Dialog, [{
                    key: 'render',
                    value: function render() {
                        this.initialize();
                        this.initRender();
                        this.wireEvents();
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        var _this9 = this;

                        this.headerContent = null;
                        var classArray = [];
                        for (var j = 0; j < this.element.classList.length; j++) {
                            if (!isNullOrUndefined(this.element.classList[j].match('e-control')) || !isNullOrUndefined(this.element.classList[j].match(ROOT))) {
                                classArray.push(this.element.classList[j]);
                            }
                        }
                        removeClass([this.element], classArray);
                        this.clonedEle = this.element.cloneNode(true);
                        this.closeIconClickEventHandler = function (event) {
                            _this9.hide();
                            _this9.closedFrom = event;
                        };
                        this.dlgOverlayClickEventHandler = function (event) {
                            _this9.trigger('overlayClick', event);
                        };
                        var localeText = { close: 'Close' };
                        this.l10n = new L10n('dialog', localeText, this.locale);
                    }
                }, {
                    key: 'keyDown',
                    value: function keyDown(event) {
                        var _this10 = this;

                        if (event.keyCode === 9) {
                            if (this.isModal) {
                                var buttonObj = void 0;
                                if (!isNullOrUndefined(this.btnObj)) {
                                    buttonObj = this.btnObj[this.btnObj.length - 1];
                                }
                                if (!isNullOrUndefined(buttonObj) && document.activeElement === buttonObj.element && !event.shiftKey) {
                                    event.preventDefault();
                                    this.focusableElements(this.element).focus();
                                }
                                if (document.activeElement === this.focusableElements(this.element) && event.shiftKey) {
                                    event.preventDefault();
                                    if (!isNullOrUndefined(buttonObj)) {
                                        buttonObj.element.focus();
                                    }
                                }
                            }
                        }
                        var element = document.activeElement;
                        var isTagName = ['input', 'textarea'].indexOf(element.tagName.toLowerCase()) > -1;
                        var isContentEdit = false;
                        if (!isTagName) {
                            isContentEdit = element.hasAttribute('contenteditable') && element.getAttribute('contenteditable') === 'true';
                        }
                        if (event.keyCode === 27 && this.closeOnEscape) {
                            this.hide();
                            this.closedFrom = event;
                        }
                        if (event.keyCode === 13 && !event.ctrlKey && element.tagName.toLowerCase() !== 'textarea' && isTagName && !isNullOrUndefined(this.primaryButtonEle) || event.keyCode === 13 && event.ctrlKey && (element.tagName.toLowerCase() === 'textarea' || isContentEdit) && !isNullOrUndefined(this.primaryButtonEle)) {
                            var buttonIndex = void 0;
                            var firstPrimary = this.buttons.some(function (data, index) {
                                buttonIndex = index;
                                var buttonModel = data.buttonModel;
                                return !isNullOrUndefined(buttonModel) && buttonModel.isPrimary === true;
                            });
                            if (firstPrimary && typeof this.buttons[buttonIndex].click === 'function') {
                                setTimeout(function () {
                                    _this10.buttons[buttonIndex].click.call(_this10, event);
                                });
                            }
                        }
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        if (!isNullOrUndefined(this.target)) {
                            this.targetEle = typeof this.target === 'string' ? document.querySelector(this.target) : this.target;
                        }
                        addClass([this.element], ROOT);
                        if (Browser.isDevice) {
                            addClass([this.element], DEVICE);
                        }
                        this.setCSSClass();
                        this.setMaxHeight();
                    }
                }, {
                    key: 'initRender',
                    value: function initRender() {
                        var _this11 = this;

                        attributes(this.element, { role: 'dialog' });
                        if (this.zIndex === 1000) {
                            this.zIndex = getZindexPartial(this.element);
                        }
                        this.setTargetContent();
                        if (this.header !== '') {
                            this.setHeader();
                        }
                        if (this.showCloseIcon) {
                            this.renderCloseIcon();
                        }
                        if (!isNullOrUndefined(this.content) && this.content !== '') {
                            this.setContent();
                        } else if (this.element.hasChildNodes()) {
                            this.contentEle = this.element;
                        }
                        if (this.footerTemplate !== '') {
                            this.setFooterTemplate();
                        }
                        if (!isNullOrUndefined(this.buttons[0].buttonModel) && this.footerTemplate === '') {
                            this.setButton();
                        }
                        if (this.allowDragging && !this.isModal && !isNullOrUndefined(this.headerContent)) {
                            this.setAllowDragging();
                        }
                        attributes(this.element, { 'aria-modal': this.isModal ? 'true' : 'false' });
                        if (this.isModal) {
                            this.setIsModal();
                        }
                        if (!isNullOrUndefined(this.targetEle)) {
                            this.isModal ? this.targetEle.appendChild(this.dlgContainer) : this.targetEle.appendChild(this.element);
                        }
                        this.popupObj = new Popup(this.element, {
                            height: this.height,
                            width: this.width,
                            zIndex: this.zIndex,
                            relateTo: this.target,
                            actionOnScroll: 'none',
                            open: function open() {
                                _this11.focusContent();
                                _this11.trigger('open');
                            },
                            close: function close(event) {
                                _this11.unBindEvent(_this11.element);
                                if (_this11.isModal) {
                                    _this11.dlgContainer.style.display = 'none';
                                }
                                _this11.trigger('close', _this11.closedFrom);
                                _this11.closedFrom = {};
                                if (!isNullOrUndefined(_this11.storeActiveElement)) {
                                    _this11.storeActiveElement.focus();
                                }
                            }
                        });
                        this.positionChange();
                        this.setEnableRTL();
                        addClass([this.element], DLG_HIDE);
                        if (this.isModal) {
                            this.setOverlayZindex();
                        }
                        if (this.visible) {
                            this.show();
                        } else {
                            if (this.isModal) {
                                this.dlgOverlay.style.display = 'none';
                            }
                        }
                    }
                }, {
                    key: 'setOverlayZindex',
                    value: function setOverlayZindex() {
                        var zIndex = parseInt(this.element.style.zIndex, 10) ? parseInt(this.element.style.zIndex, 10) : this.zIndex;
                        this.dlgOverlay.style.zIndex = (zIndex - 1).toString();
                        this.dlgContainer.style.zIndex = zIndex.toString();
                    }
                }, {
                    key: 'positionChange',
                    value: function positionChange() {
                        if (!this.isModal) {
                            this.popupObj.setProperties({
                                position: {
                                    X: this.position.X, Y: this.position.Y
                                }
                            });
                        } else {
                            this.dlgContainer.classList.add('e-dlg-' + this.position.X + '-' + this.position.Y);
                        }
                    }
                }, {
                    key: 'setAllowDragging',
                    value: function setAllowDragging() {
                        var _this12 = this;

                        var handleContent = '.' + DLG_HEADER_CONTENT;
                        this.dragObj = new Draggable(this.element, {
                            clone: false,
                            handle: handleContent,
                            dragStart: function dragStart(event) {
                                _this12.trigger('dragStart', event);
                            },
                            dragStop: function dragStop(event) {
                                _this12.trigger('dragStop', event);
                            },
                            drag: function drag(event) {
                                _this12.trigger('drag', event);
                            }
                        });
                        if (!isNullOrUndefined(this.targetEle)) {
                            this.dragObj.dragArea = this.targetEle;
                        }
                    }
                }, {
                    key: 'setButton',
                    value: function setButton() {
                        this.buttonContent = [];
                        this.btnObj = [];
                        for (var i = 0; i < this.buttons.length; i++) {
                            var btn = createElement('button', { attrs: { type: 'button' } });
                            this.buttonContent.push(btn.outerHTML);
                        }
                        this.setFooterTemplate();
                        for (var _i = 0; _i < this.buttons.length; _i++) {
                            this.btnObj[_i] = new Button(this.buttons[_i].buttonModel);
                            if (typeof this.buttons[_i].click === 'function') {
                                EventHandler.add(this.ftrTemplateContent.children[_i], 'click', this.buttons[_i].click, this);
                            }
                            this.btnObj[_i].appendTo(this.ftrTemplateContent.children[_i]);
                            if (!this.btnObj[_i].isPrimary) {
                                this.btnObj[_i].element.classList.add('e-flat');
                            }
                            this.primaryButtonEle = this.element.getElementsByClassName('e-primary')[0];
                        }
                    }
                }, {
                    key: 'setContent',
                    value: function setContent() {
                        attributes(this.element, { 'aria-describedby': this.element.id + '_dialog-content' });
                        this.contentEle = createElement('div', { className: DLG_CONTENT, id: this.element.id + '_dialog-content' });
                        typeof this.content === 'string' ? this.contentEle.innerHTML = this.content : this.contentEle.appendChild(this.content);
                        !isNullOrUndefined(this.headerContent) ? this.element.insertBefore(this.contentEle, this.element.children[1]) : this.element.insertBefore(this.contentEle, this.element.children[0]);
                        if (this.height === 'auto') {
                            this.setMaxHeight();
                        }
                    }
                }, {
                    key: 'setMaxHeight',
                    value: function setMaxHeight() {
                        var display = this.element.style.display;
                        this.element.style.display = 'none';
                        this.element.style.maxHeight = !isNullOrUndefined(this.target) ? this.targetEle.offsetHeight - 20 + 'px' : window.innerHeight - 20 + 'px';
                        this.element.style.display = display;
                    }
                }, {
                    key: 'setEnableRTL',
                    value: function setEnableRTL() {
                        this.enableRtl ? addClass([this.element], RTL) : removeClass([this.element], RTL);
                    }
                }, {
                    key: 'setTargetContent',
                    value: function setTargetContent() {
                        var isContent = this.element.innerHTML.replace(/\s/g, '') !== '';
                        if (this.element.children.length > 0 || isContent) {
                            var contentDiv = document.createDocumentFragment();
                            while (this.element.childNodes.length !== 0) {
                                contentDiv.appendChild(this.element.childNodes[0]);
                            }
                            this.setProperties({ content: contentDiv }, true);
                        }
                    }
                }, {
                    key: 'setHeader',
                    value: function setHeader() {
                        this.headerEle = createElement('div', { id: this.element.id + '_title', className: DLG_HEADER, innerHTML: this.header });
                        attributes(this.element, { 'aria-labelledby': this.element.id + '_title' });
                        this.createHeaderContent();
                        this.headerContent.appendChild(this.headerEle);
                        this.element.insertBefore(this.headerContent, this.element.children[0]);
                    }
                }, {
                    key: 'setFooterTemplate',
                    value: function setFooterTemplate() {
                        this.ftrTemplateContent = createElement('div', {
                            className: DLG_FOOTER_CONTENT,
                            innerHTML: this.footerTemplate !== '' ? this.footerTemplate : this.buttonContent.join('')
                        });
                        this.element.appendChild(this.ftrTemplateContent);
                    }
                }, {
                    key: 'createHeaderContent',
                    value: function createHeaderContent() {
                        if (isNullOrUndefined(this.headerContent)) {
                            this.headerContent = createElement('div', { className: DLG_HEADER_CONTENT });
                        }
                    }
                }, {
                    key: 'renderCloseIcon',
                    value: function renderCloseIcon() {
                        this.closeIcon = createElement('button', { className: DLG_CLOSE_ICON_BTN, attrs: { type: 'button' } });
                        this.closeIconBtnObj = new Button({ cssClass: 'e-flat', iconCss: DLG_CLOSE_ICON + ' ' + ICON });
                        this.closeIconTitle();
                        if (!isNullOrUndefined(this.headerContent)) {
                            prepend([this.closeIcon], this.headerContent);
                        } else {
                            this.createHeaderContent();
                            prepend([this.closeIcon], this.headerContent);
                            this.element.insertBefore(this.headerContent, this.element.children[0]);
                        }
                        this.closeIconBtnObj.appendTo(this.closeIcon);
                    }
                }, {
                    key: 'closeIconTitle',
                    value: function closeIconTitle() {
                        this.l10n.setLocale(this.locale);
                        var closeIconTitle = this.l10n.getConstant('close');
                        this.closeIcon.setAttribute('title', closeIconTitle);
                    }
                }, {
                    key: 'setCSSClass',
                    value: function setCSSClass(oldCSSClass) {
                        if (this.cssClass) {
                            addClass([this.element], this.cssClass.split(' '));
                        }
                        if (oldCSSClass) {
                            removeClass([this.element], oldCSSClass.split(' '));
                        }
                    }
                }, {
                    key: 'setIsModal',
                    value: function setIsModal() {
                        this.dlgContainer = createElement('div', { className: DLG_CONTAINER });
                        this.element.parentNode.insertBefore(this.dlgContainer, this.element);
                        this.dlgContainer.appendChild(this.element);
                        addClass([this.element], MODAL_DLG);
                        this.dlgOverlay = createElement('div', { className: DLG_OVERLAY });
                        this.dlgOverlay.style.zIndex = (this.zIndex - 1).toString();
                        this.dlgContainer.appendChild(this.dlgOverlay);
                    }
                }, {
                    key: 'getValidFocusNode',
                    value: function getValidFocusNode(items) {
                        var node = void 0;
                        for (var u = 0; u < items.length; u++) {
                            node = items[u];
                            if ((node.clientHeight > 0 || node.tagName.toLowerCase() === 'a' && node.hasAttribute('href')) && node.tabIndex > -1 && !node.disabled && !this.disableElement(node, '[disabled],[aria-disabled="true"],[type="hidden"]')) {
                                return node;
                            }
                        }
                        return node;
                    }
                }, {
                    key: 'focusableElements',
                    value: function focusableElements(content) {
                        if (!isNullOrUndefined(content)) {
                            var value = 'input,select,textarea,button,a,[contenteditable="true"],[tabindex]';
                            var items = content.querySelectorAll(value);
                            return this.getValidFocusNode(items);
                        }
                        return null;
                    }
                }, {
                    key: 'getAutoFocusNode',
                    value: function getAutoFocusNode(container) {
                        var node = container.querySelector('.' + DLG_CLOSE_ICON_BTN);
                        var value = '[autofocus]';
                        var items = container.querySelectorAll(value);
                        var validNode = this.getValidFocusNode(items);
                        if (!isNullOrUndefined(validNode)) {
                            node = validNode;
                        } else {
                            validNode = this.focusableElements(this.contentEle);
                            if (!isNullOrUndefined(validNode)) {
                                return node = validNode;
                            } else if (!isNullOrUndefined(this.primaryButtonEle)) {
                                return this.element.querySelector('.' + DLG_PRIMARY_BUTTON);
                            }
                        }
                        return node;
                    }
                }, {
                    key: 'disableElement',
                    value: function disableElement(element, t) {
                        var elementMatch = element ? element.matches || element.webkitMatchesSelector || element.msMatchesSelector : null;
                        if (elementMatch) {
                            for (; element; element = element.parentNode) {
                                if (element instanceof Element && elementMatch.call(element, t)) {
                                    return element;
                                }
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'focusContent',
                    value: function focusContent() {
                        var element = this.getAutoFocusNode(this.element);
                        var node = !isNullOrUndefined(element) ? element : this.element;
                        node.focus();
                        this.bindEvent(this.element);
                    }
                }, {
                    key: 'bindEvent',
                    value: function bindEvent(element) {
                        EventHandler.add(element, 'keydown', this.keyDown, this);
                    }
                }, {
                    key: 'unBindEvent',
                    value: function unBindEvent(element) {
                        EventHandler.remove(element, 'keydown', this.keyDown);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'dialog';
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = Object.keys(newProp)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var prop = _step4.value;

                                switch (prop) {
                                    case 'content':
                                        if (!isNullOrUndefined(this.content) && this.content !== '') {
                                            if (!isNullOrUndefined(this.contentEle) && this.contentEle.getAttribute('role') !== 'dialog') {
                                                this.contentEle.innerHTML = '';
                                                typeof this.content === 'string' ? this.contentEle.innerHTML = this.content : this.contentEle.appendChild(this.content);
                                                this.setMaxHeight();
                                            } else {
                                                this.setContent();
                                            }
                                        } else if (!isNullOrUndefined(this.contentEle)) {
                                            this.element.removeChild(this.contentEle);
                                        }
                                        break;
                                    case 'header':
                                        if (this.header === '') {
                                            detach(this.headerEle);
                                        } else {
                                            this.element.getElementsByClassName(DLG_HEADER).length > 0 ? this.element.getElementsByClassName(DLG_HEADER)[0].innerHTML = this.header : this.setHeader();
                                        }
                                        break;
                                    case 'footerTemplate':
                                        this.element.getElementsByClassName(DLG_FOOTER_CONTENT).length > 0 ? this.ftrTemplateContent.innerHTML = this.footerTemplate : this.setFooterTemplate();
                                        break;
                                    case 'showCloseIcon':
                                        if (this.element.getElementsByClassName(DLG_CLOSE_ICON).length > 0) {
                                            if (!this.showCloseIcon && this.header === '') {
                                                detach(this.headerContent);
                                            } else if (!this.showCloseIcon) {
                                                detach(this.closeIcon);
                                            }
                                        } else {
                                            this.renderCloseIcon();
                                            this.wireEvents();
                                        }
                                        break;
                                    case 'locale':
                                        if (this.showCloseIcon) {
                                            this.closeIconTitle();
                                        }
                                        break;
                                    case 'visible':
                                        this.visible ? this.show() : this.hide();
                                        break;
                                    case 'isModal':
                                        this.element.setAttribute('aria-modal', this.isModal ? 'true' : 'false');
                                        if (this.isModal) {
                                            this.setIsModal();
                                            this.wireEvents();
                                            if (!isNullOrUndefined(this.targetEle)) {
                                                this.isModal ? this.targetEle.appendChild(this.dlgContainer) : this.targetEle.appendChild(this.element);
                                            }
                                        } else {
                                            removeClass([this.element], MODAL_DLG);
                                            removeClass([document.body], SCROLL_DISABLED);
                                            detach(this.dlgOverlay);
                                            while (this.dlgContainer.firstChild) {
                                                this.dlgContainer.parentElement.insertBefore(this.dlgContainer.firstChild, this.dlgContainer);
                                            }
                                            this.dlgContainer.parentElement.removeChild(this.dlgContainer);
                                        }
                                        break;
                                    case 'height':
                                        setStyleAttribute(this.element, { 'height': formatUnit(newProp.height) });
                                        break;
                                    case 'width':
                                        setStyleAttribute(this.element, { 'width': formatUnit(newProp.width) });
                                        break;
                                    case 'zIndex':
                                        this.popupObj.zIndex = this.zIndex;
                                        if (this.isModal) {
                                            this.setOverlayZindex();
                                        }
                                        break;
                                    case 'cssClass':
                                        this.setCSSClass(oldProp.cssClass);
                                        break;
                                    case 'animationSettings':
                                        this.show();
                                        break;
                                    case 'buttons':
                                        if (!isNullOrUndefined(this.buttons[0].buttonModel) && this.footerTemplate === '') {
                                            if (!isNullOrUndefined(this.ftrTemplateContent)) {
                                                detach(this.ftrTemplateContent);
                                            }
                                            this.setButton();
                                        }
                                        break;
                                    case 'allowDragging':
                                        if (this.allowDragging && !this.isModal && !isNullOrUndefined(this.headerContent)) {
                                            this.setAllowDragging();
                                        } else {
                                            this.dragObj.destroy();
                                        }
                                        break;
                                    case 'target':
                                        this.popupObj.relateTo = newProp.target;
                                        break;
                                    case 'position':
                                        if (oldProp.position.X === this.position.X && oldProp.position.Y === this.position.Y) {
                                            break;
                                        }
                                        if (this.isModal) {
                                            this.dlgContainer.classList.remove('e-dlg-' + oldProp.position.X + '-' + oldProp.position.Y);
                                            this.dlgContainer.classList.add('e-dlg-' + this.position.X + '-' + this.position.Y);
                                        } else {
                                            this.popupObj.position.X = this.position.X;
                                            this.popupObj.position.Y = this.position.Y;
                                            break;
                                        }
                                        break;
                                    case 'enableRtl':
                                        this.setEnableRTL();
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
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist([]);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this.element.classList.contains(ROOT)) {
                            this.unWireEvents();
                            _get(Dialog.prototype.__proto__ || Object.getPrototypeOf(Dialog.prototype), 'destroy', this).call(this);
                            var classArray = [ROOT, RTL, MODAL_DLG];
                            removeClass([this.element, this.element], classArray);
                            if (this.popupObj.element.classList.contains(POPUP_ROOT)) {
                                this.popupObj.destroy();
                            }
                            if (!isNullOrUndefined(this.btnObj)) {
                                for (var i; i < this.btnObj.length; i++) {
                                    this.btnObj[i].destroy();
                                }
                            }
                            if (this.isModal) {
                                detach(this.dlgOverlay);
                                this.dlgContainer.parentNode.insertBefore(this.element, this.dlgContainer);
                                detach(this.dlgContainer);
                            }
                            this.element.innerHTML = '';
                            while (this.element.attributes.length > 0) {
                                this.element.removeAttribute(this.element.attributes[0].name);
                            }
                            for (var k = 0; k < this.clonedEle.attributes.length; k++) {
                                this.element.setAttribute(this.clonedEle.attributes[k].name, this.clonedEle.attributes[k].value);
                            }
                        }
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        if (this.showCloseIcon) {
                            EventHandler.add(this.closeIcon, 'click', this.closeIconClickEventHandler, this);
                        }
                        if (this.isModal) {
                            EventHandler.add(this.dlgOverlay, 'click', this.dlgOverlayClickEventHandler, this);
                        }
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        if (this.showCloseIcon) {
                            EventHandler.remove(this.closeIcon, 'click', this.closeIconClickEventHandler);
                        }
                        if (this.isModal) {
                            EventHandler.remove(this.dlgOverlay, 'click', this.dlgOverlayClickEventHandler);
                        }
                        if (!isNullOrUndefined(this.buttons[0].buttonModel)) {
                            for (var i = 0; i < this.buttons.length; i++) {
                                if (typeof this.buttons[i].click === 'function') {
                                    EventHandler.remove(this.ftrTemplateContent.children[i], 'click', this.buttons[i].click);
                                }
                            }
                        }
                    }
                }, {
                    key: 'refreshPosition',
                    value: function refreshPosition() {
                        this.popupObj.refreshPosition();
                    }
                }, {
                    key: 'show',
                    value: function show(isFullScreen) {
                        if (!this.element.classList.contains(DLG_SHOW) || !isNullOrUndefined(isFullScreen)) {
                            if (!isNullOrUndefined(isFullScreen)) {
                                this.fullScreen(isFullScreen);
                            }
                            var eventArgs = {
                                cancel: false,
                                container: this.isModal ? this.dlgContainer : this.element
                            };
                            this.trigger('beforeOpen', eventArgs);
                            if (eventArgs.cancel) {
                                return;
                            }
                            this.storeActiveElement = document.activeElement;
                            this.element.tabIndex = -1;
                            if (this.isModal && !isNullOrUndefined(this.dlgOverlay)) {
                                this.dlgOverlay.style.display = 'block';
                                this.dlgContainer.style.display = 'flex';
                                if (!isNullOrUndefined(this.targetEle)) {
                                    if (this.targetEle === document.body) {
                                        this.dlgContainer.style.position = 'fixed';
                                    } else {
                                        this.dlgContainer.style.position = 'absolute';
                                    }
                                    this.dlgOverlay.style.position = 'absolute';
                                    this.element.style.position = 'relative';
                                    addClass([this.targetEle], SCROLL_DISABLED);
                                } else {
                                    addClass([document.body], SCROLL_DISABLED);
                                }
                            }
                            var openAnimation = {
                                name: this.animationSettings.effect + 'In',
                                duration: this.animationSettings.duration,
                                delay: this.animationSettings.delay
                            };
                            this.animationSettings.effect === 'None' ? this.popupObj.show() : this.popupObj.show(openAnimation);
                            this.dialogOpen = true;
                            var prevOnChange = this.isProtectedOnChange;
                            this.isProtectedOnChange = true;
                            this.visible = true;
                            this.isProtectedOnChange = prevOnChange;
                        }
                    }
                }, {
                    key: 'hide',
                    value: function hide() {
                        var eventArgs = {
                            cancel: false,
                            container: this.isModal ? this.dlgContainer : this.element
                        };
                        this.trigger('beforeClose', eventArgs);
                        if (eventArgs.cancel) {
                            return;
                        }
                        if (this.isModal) {
                            this.dlgOverlay.style.display = 'none';
                            !isNullOrUndefined(this.targetEle) ? removeClass([this.targetEle], SCROLL_DISABLED) : removeClass([document.body], SCROLL_DISABLED);
                        }
                        var closeAnimation = {
                            name: this.animationSettings.effect + 'Out',
                            duration: this.animationSettings.duration,
                            delay: this.animationSettings.delay
                        };
                        this.animationSettings.effect === 'None' ? this.popupObj.hide() : this.popupObj.hide(closeAnimation);
                        this.dialogOpen = false;
                        var prevOnChange = this.isProtectedOnChange;
                        this.isProtectedOnChange = true;
                        this.visible = false;
                        this.isProtectedOnChange = prevOnChange;
                    }
                }, {
                    key: 'fullScreen',
                    value: function fullScreen(args) {
                        var top = this.element.offsetTop;
                        var left = this.element.offsetLeft;
                        if (args) {
                            addClass([this.element], FULLSCREEN);
                            var display = this.element.style.display;
                            this.element.style.display = 'none';
                            this.element.style.maxHeight = !isNullOrUndefined(this.target) ? this.targetEle.offsetHeight + 'px' : window.innerHeight + 'px';
                            this.element.style.display = display;
                            addClass([document.body], SCROLL_DISABLED);
                            if (this.allowDragging && !isNullOrUndefined(this.dragObj)) {
                                this.dragObj.destroy();
                            }
                        } else {
                            removeClass([this.element], FULLSCREEN);
                            removeClass([document.body], SCROLL_DISABLED);
                            if (this.allowDragging && !this.isModal && !isNullOrUndefined(this.headerContent)) {
                                this.setAllowDragging();
                            }
                        }
                        return args;
                    }
                }]);

                return Dialog;
            }(Component));

            __decorate$1([Property('')], Dialog.prototype, "content", void 0);
            __decorate$1([Property(false)], Dialog.prototype, "showCloseIcon", void 0);
            __decorate$1([Property(false)], Dialog.prototype, "isModal", void 0);
            __decorate$1([Property('')], Dialog.prototype, "header", void 0);
            __decorate$1([Property(true)], Dialog.prototype, "visible", void 0);
            __decorate$1([Property('auto')], Dialog.prototype, "height", void 0);
            __decorate$1([Property('100%')], Dialog.prototype, "width", void 0);
            __decorate$1([Property('')], Dialog.prototype, "cssClass", void 0);
            __decorate$1([Property(1000)], Dialog.prototype, "zIndex", void 0);
            __decorate$1([Property(null)], Dialog.prototype, "target", void 0);
            __decorate$1([Property('')], Dialog.prototype, "footerTemplate", void 0);
            __decorate$1([Property(false)], Dialog.prototype, "allowDragging", void 0);
            __decorate$1([Collection([{}], ButtonProps)], Dialog.prototype, "buttons", void 0);
            __decorate$1([Property(true)], Dialog.prototype, "closeOnEscape", void 0);
            __decorate$1([Complex({}, AnimationSettings)], Dialog.prototype, "animationSettings", void 0);
            __decorate$1([Complex({ X: 'center', Y: 'center' }, PositionData)], Dialog.prototype, "position", void 0);
            __decorate$1([Event()], Dialog.prototype, "created", void 0);
            __decorate$1([Event()], Dialog.prototype, "open", void 0);
            __decorate$1([Event()], Dialog.prototype, "beforeOpen", void 0);
            __decorate$1([Event()], Dialog.prototype, "close", void 0);
            __decorate$1([Event()], Dialog.prototype, "beforeClose", void 0);
            __decorate$1([Event()], Dialog.prototype, "dragStart", void 0);
            __decorate$1([Event()], Dialog.prototype, "dragStop", void 0);
            __decorate$1([Event()], Dialog.prototype, "drag", void 0);
            __decorate$1([Event()], Dialog.prototype, "overlayClick", void 0);
            _export('Dialog', Dialog = __decorate$1([NotifyPropertyChanges], Dialog));

            /**
             * Dialog Component
             */

            __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            TOUCHEND_HIDE_DELAY = 1500;
            TAPHOLD_THRESHOLD = 500;
            SHOW_POINTER_TIP_GAP = 0;
            HIDE_POINTER_TIP_GAP = 8;
            MOUSE_TRAIL_GAP = 2;
            POINTER_ADJUST = 2;
            ROOT$1 = 'e-tooltip';
            RTL$1 = 'e-rtl';
            DEVICE$1 = 'e-bigger';
            ICON$1 = 'e-icons';
            CLOSE = 'e-tooltip-close';
            TOOLTIP_WRAP = 'e-tooltip-wrap';
            CONTENT = 'e-tip-content';
            ARROW_TIP = 'e-arrow-tip';
            ARROW_TIP_OUTER = 'e-arrow-tip-outer';
            ARROW_TIP_INNER = 'e-arrow-tip-inner';
            TIP_BOTTOM = 'e-tip-bottom';
            TIP_TOP = 'e-tip-top';
            TIP_LEFT = 'e-tip-left';
            TIP_RIGHT = 'e-tip-right';
            POPUP_ROOT$1 = 'e-popup';
            POPUP_OPEN = 'e-popup-open';
            POPUP_CLOSE = 'e-popup-close';

            _export('Animation', Animation$1 = function (_ChildProperty4) {
                _inherits(Animation$1, _ChildProperty4);

                function Animation$1() {
                    _classCallCheck(this, Animation$1);

                    return _possibleConstructorReturn(this, (Animation$1.__proto__ || Object.getPrototypeOf(Animation$1)).apply(this, arguments));
                }

                return Animation$1;
            }(ChildProperty));

            __decorate$2([Property({ effect: 'FadeIn', duration: 150, delay: 0 })], Animation$1.prototype, "open", void 0);
            __decorate$2([Property({ effect: 'FadeOut', duration: 150, delay: 0 })], Animation$1.prototype, "close", void 0);
            /**
             * Represents the Tooltip component that displays a piece of information about the target element on mouse hover.
             * ```html
             * <div id="tooltip">Show Tooltip</div>
             * ```
             * ```typescript
             * <script>
             *   var tooltipObj = new Tooltip({ content: 'Tooltip text' });
             *   tooltipObj.appendTo("#tooltip");
             * </script>
             * ```
             */

            _export('Tooltip', Tooltip = function (_Component3) {
                _inherits(Tooltip, _Component3);

                /**
                 * Constructor for creating the Tooltip Component
                 */
                function Tooltip(options, element) {
                    _classCallCheck(this, Tooltip);

                    return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, options, element));
                }

                _createClass(Tooltip, [{
                    key: 'initialize',
                    value: function initialize() {
                        this.formatPosition();
                        addClass([this.element], ROOT$1);
                    }
                }, {
                    key: 'formatPosition',
                    value: function formatPosition() {
                        if (this.position.indexOf('Top') === 0 || this.position.indexOf('Bottom') === 0) {
                            var _position$split = this.position.split(/(?=[A-Z])/);

                            var _position$split2 = _slicedToArray(_position$split, 2);

                            this.tooltipPositionY = _position$split2[0];
                            this.tooltipPositionX = _position$split2[1];
                        } else {
                            var _position$split3 = this.position.split(/(?=[A-Z])/);

                            var _position$split4 = _slicedToArray(_position$split3, 2);

                            this.tooltipPositionX = _position$split4[0];
                            this.tooltipPositionY = _position$split4[1];
                        }
                    }
                }, {
                    key: 'renderArrow',
                    value: function renderArrow() {
                        this.setTipClass(this.position);
                        var tip = createElement('div', { className: ARROW_TIP + ' ' + this.tipClass });
                        tip.appendChild(createElement('div', { className: ARROW_TIP_OUTER + ' ' + this.tipClass }));
                        tip.appendChild(createElement('div', { className: ARROW_TIP_INNER + ' ' + this.tipClass }));
                        this.tooltipEle.appendChild(tip);
                    }
                }, {
                    key: 'setTipClass',
                    value: function setTipClass(position) {
                        if (position.indexOf('Right') === 0) {
                            this.tipClass = TIP_LEFT;
                        } else if (position.indexOf('Bottom') === 0) {
                            this.tipClass = TIP_TOP;
                        } else if (position.indexOf('Left') === 0) {
                            this.tipClass = TIP_RIGHT;
                        } else {
                            this.tipClass = TIP_BOTTOM;
                        }
                    }
                }, {
                    key: 'renderPopup',
                    value: function renderPopup(target) {
                        var elePos = this.mouseTrail ? { top: 0, left: 0 } : this.getTooltipPosition(target);
                        this.popupObj = new Popup(this.tooltipEle, {
                            height: this.height,
                            width: this.width,
                            position: {
                                X: elePos.left,
                                Y: elePos.top
                            },
                            enableRtl: this.enableRtl,
                            open: this.openPopupHandler.bind(this),
                            close: this.closePopupHandler.bind(this)
                        });
                    }
                }, {
                    key: 'getTooltipPosition',
                    value: function getTooltipPosition(target) {
                        var pos = calculatePosition(target, this.tooltipPositionX, this.tooltipPositionY);
                        var offsetPos = this.calculateTooltipOffset(this.position);
                        var elePos = this.collisionFlipFit(target, pos.left + offsetPos.left, pos.top + offsetPos.top);
                        return elePos;
                    }
                }, {
                    key: 'reposition',
                    value: function reposition(target) {
                        var elePos = this.getTooltipPosition(target);
                        this.popupObj.position = { X: elePos.left, Y: elePos.top };
                        this.popupObj.dataBind();
                    }
                }, {
                    key: 'openPopupHandler',
                    value: function openPopupHandler() {
                        this.trigger('afterOpen', this.tooltipEventArgs);
                    }
                }, {
                    key: 'closePopupHandler',
                    value: function closePopupHandler() {
                        this.clear();
                        this.trigger('afterClose', this.tooltipEventArgs);
                    }
                }, {
                    key: 'calculateTooltipOffset',
                    value: function calculateTooltipOffset(position) {
                        var pos = { top: 0, left: 0 };
                        var tooltipEleWidth = this.tooltipEle.offsetWidth;
                        var tooltipEleHeight = this.tooltipEle.offsetHeight;
                        var arrowEle = this.tooltipEle.querySelector('.' + ARROW_TIP);
                        var tipWidth = arrowEle ? arrowEle.offsetWidth : 0;
                        var tipHeight = arrowEle ? arrowEle.offsetHeight : 0;
                        var tipAdjust = this.showTipPointer ? SHOW_POINTER_TIP_GAP : HIDE_POINTER_TIP_GAP;
                        var tipHeightAdjust = tipHeight / 2 + POINTER_ADJUST + (this.tooltipEle.offsetHeight - this.tooltipEle.clientHeight);
                        var tipWidthAdjust = tipWidth / 2 + POINTER_ADJUST + (this.tooltipEle.offsetWidth - this.tooltipEle.clientWidth);
                        if (this.mouseTrail) {
                            tipAdjust += MOUSE_TRAIL_GAP;
                        }
                        switch (position) {
                            case 'RightTop':
                                pos.left += tipWidth + tipAdjust;
                                pos.top -= tooltipEleHeight - tipHeightAdjust;
                                break;
                            case 'RightCenter':
                                pos.left += tipWidth + tipAdjust;
                                pos.top -= tooltipEleHeight / 2;
                                break;
                            case 'RightBottom':
                                pos.left += tipWidth + tipAdjust;
                                pos.top -= tipHeightAdjust;
                                break;
                            case 'BottomRight':
                                pos.top += tipHeight + tipAdjust;
                                pos.left -= tipWidthAdjust;
                                break;
                            case 'BottomCenter':
                                pos.top += tipHeight + tipAdjust;
                                pos.left -= tooltipEleWidth / 2;
                                break;
                            case 'BottomLeft':
                                pos.top += tipHeight + tipAdjust;
                                pos.left -= tooltipEleWidth - tipWidthAdjust;
                                break;
                            case 'LeftBottom':
                                pos.left -= tipWidth + tooltipEleWidth + tipAdjust;
                                pos.top -= tipHeightAdjust;
                                break;
                            case 'LeftCenter':
                                pos.left -= tipWidth + tooltipEleWidth + tipAdjust;
                                pos.top -= tooltipEleHeight / 2;
                                break;
                            case 'LeftTop':
                                pos.left -= tipWidth + tooltipEleWidth + tipAdjust;
                                pos.top -= tooltipEleHeight - tipHeightAdjust;
                                break;
                            case 'TopLeft':
                                pos.top -= tooltipEleHeight + tipHeight + tipAdjust;
                                pos.left -= tooltipEleWidth - tipWidthAdjust;
                                break;
                            case 'TopRight':
                                pos.top -= tooltipEleHeight + tipHeight + tipAdjust;
                                pos.left -= tipWidthAdjust;
                                break;
                            default:
                                pos.top -= tooltipEleHeight + tipHeight + tipAdjust;
                                pos.left -= tooltipEleWidth / 2;
                                break;
                        }
                        pos.left += this.offsetX;
                        pos.top += this.offsetY;
                        return pos;
                    }
                }, {
                    key: 'updateTipPosition',
                    value: function updateTipPosition(position) {
                        var selEle = this.tooltipEle.querySelectorAll('.' + ARROW_TIP + ',.' + ARROW_TIP_OUTER + ',.' + ARROW_TIP_INNER);
                        var removeList = [TIP_BOTTOM, TIP_TOP, TIP_LEFT, TIP_RIGHT];
                        removeClass(selEle, removeList);
                        this.setTipClass(position);
                        addClass(selEle, this.tipClass);
                    }
                }, {
                    key: 'adjustArrow',
                    value: function adjustArrow(target, position, tooltipPositionX, tooltipPositionY) {
                        if (this.showTipPointer === false) {
                            return;
                        }
                        this.updateTipPosition(position);
                        var leftValue = void 0;
                        var topValue = void 0;
                        var tooltipWidth = this.tooltipEle.clientWidth;
                        var tooltipHeight = this.tooltipEle.clientHeight;
                        var arrowEle = this.tooltipEle.querySelector('.' + ARROW_TIP);
                        var arrowInnerELe = this.tooltipEle.querySelector('.' + ARROW_TIP_INNER);
                        var tipWidth = arrowEle.offsetWidth;
                        var tipHeight = arrowEle.offsetHeight;
                        if (this.tipClass === TIP_BOTTOM || this.tipClass === TIP_TOP) {
                            if (this.tipClass === TIP_BOTTOM) {
                                topValue = '99.9%';
                                // Arrow icon aligned -2px height from ArrowOuterTip div
                                arrowInnerELe.style.top = '-' + (tipHeight - 2) + 'px';
                            } else {
                                topValue = -(tipHeight - 1) + 'px';
                                // Arrow icon aligned -6px height from ArrowOuterTip div
                                arrowInnerELe.style.top = '-' + (tipHeight - 6) + 'px';
                            }
                            var tipPosExclude = tooltipPositionX !== 'Center' || tooltipWidth > target.offsetWidth || this.mouseTrail;
                            if (tipPosExclude && tooltipPositionX === 'Left' || !tipPosExclude && this.tipPointerPosition === 'End') {
                                leftValue = tooltipWidth - tipWidth - POINTER_ADJUST + 'px';
                            } else if (tipPosExclude && tooltipPositionX === 'Right' || !tipPosExclude && this.tipPointerPosition === 'Start') {
                                leftValue = POINTER_ADJUST + 'px';
                            } else {
                                leftValue = tooltipWidth / 2 - tipWidth / 2 + 'px';
                            }
                        } else {
                            if (this.tipClass === TIP_RIGHT) {
                                leftValue = '99.9%';
                                // Arrow icon aligned -2px left from ArrowOuterTip div
                                arrowInnerELe.style.left = '-' + (tipWidth - 2) + 'px';
                            } else {
                                leftValue = -(tipWidth - 1) + 'px';
                                // Arrow icon aligned -2px from ArrowOuterTip width
                                arrowInnerELe.style.left = -tipWidth + (tipWidth - 2) + 'px';
                            }
                            var _tipPosExclude = tooltipPositionY !== 'Center' || tooltipHeight > target.offsetHeight || this.mouseTrail;
                            if (_tipPosExclude && tooltipPositionY === 'Top' || !_tipPosExclude && this.tipPointerPosition === 'End') {
                                topValue = tooltipHeight - tipHeight - POINTER_ADJUST + 'px';
                            } else if (_tipPosExclude && tooltipPositionY === 'Bottom' || !_tipPosExclude && this.tipPointerPosition === 'Start') {
                                topValue = POINTER_ADJUST + 'px';
                            } else {
                                topValue = tooltipHeight / 2 - tipHeight / 2 + 'px';
                            }
                        }
                        arrowEle.style.top = topValue;
                        arrowEle.style.left = leftValue;
                    }
                }, {
                    key: 'renderContent',
                    value: function renderContent(target) {
                        var tooltipContent = this.tooltipEle.querySelector('.' + CONTENT);
                        if (target && !isNullOrUndefined(target.getAttribute('title'))) {
                            target.setAttribute('data-content', target.getAttribute('title'));
                            target.removeAttribute('title');
                        }
                        if (!isNullOrUndefined(this.content)) {
                            if (typeof this.content === 'string') {
                                tooltipContent.innerHTML = this.content;
                            } else {
                                while (tooltipContent.firstChild) {
                                    tooltipContent.removeChild(tooltipContent.firstChild);
                                }
                                tooltipContent.appendChild(this.content);
                            }
                        } else {
                            if (target && !isNullOrUndefined(target.getAttribute('data-content'))) {
                                tooltipContent.innerHTML = target.getAttribute('data-content');
                            }
                        }
                    }
                }, {
                    key: 'renderCloseIcon',
                    value: function renderCloseIcon() {
                        if (!this.isSticky) {
                            return;
                        }
                        var tipClose = createElement('div', { className: ICON$1 + ' ' + CLOSE });
                        this.tooltipEle.appendChild(tipClose);
                        EventHandler.add(tipClose, Browser.touchStartEvent, this.onStickyClose, this);
                    }
                }, {
                    key: 'addDescribedBy',
                    value: function addDescribedBy(target, id) {
                        var describedby = (target.getAttribute('aria-describedby') || '').split(/\s+/);
                        if (describedby.indexOf(id) < 0) {
                            describedby.push(id);
                        }
                        attributes(target, { 'aria-describedby': describedby.join(' ').trim(), 'data-tooltip-id': id });
                    }
                }, {
                    key: 'removeDescribedBy',
                    value: function removeDescribedBy(target) {
                        var id = target.getAttribute('data-tooltip-id');
                        var describedby = (target.getAttribute('aria-describedby') || '').split(/\s+/);
                        var index = describedby.indexOf(id);
                        if (index !== -1) {
                            describedby.splice(index, 1);
                        }
                        target.removeAttribute('data-tooltip-id');
                        var orgdescribedby = describedby.join(' ').trim();
                        if (orgdescribedby) {
                            target.setAttribute('aria-describedby', orgdescribedby);
                        } else {
                            target.removeAttribute('aria-describedby');
                        }
                    }
                }, {
                    key: 'tapHoldHandler',
                    value: function tapHoldHandler(evt) {
                        clearTimeout(this.autoCloseTimer);
                        this.targetHover(evt.originalEvent);
                    }
                }, {
                    key: 'touchEndHandler',
                    value: function touchEndHandler(e) {
                        var _this15 = this;

                        if (this.isSticky) {
                            return;
                        }
                        var close = function close() {
                            _this15.close();
                        };
                        this.autoCloseTimer = setTimeout(close, TOUCHEND_HIDE_DELAY);
                    }
                }, {
                    key: 'targetClick',
                    value: function targetClick(e) {
                        var target = void 0;
                        if (this.target) {
                            target = closest(e.target, this.target);
                        } else {
                            target = this.element;
                        }
                        if (isNullOrUndefined(target)) {
                            return;
                        }
                        if (target.getAttribute('data-tooltip-id') === null) {
                            this.targetHover(e);
                        } else if (!this.isSticky) {
                            this.hideTooltip(this.animation.close, e, target);
                        }
                    }
                }, {
                    key: 'targetHover',
                    value: function targetHover(e) {
                        var target = void 0;
                        if (this.target) {
                            target = closest(e.target, this.target);
                        } else {
                            target = this.element;
                        }
                        if (isNullOrUndefined(target) || target.getAttribute('data-tooltip-id') !== null) {
                            return;
                        }
                        var targetList = [].slice.call(document.querySelectorAll('[data-tooltip-id= ' + this.ctrlId + '_content]'));
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = targetList[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var _target = _step5.value;

                                this.restoreElement(_target);
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

                        this.showTooltip(target, this.animation.open, e);
                        this.wireMouseEvents(e, target);
                    }
                }, {
                    key: 'showTooltip',
                    value: function showTooltip(target, showAnimation, e) {
                        var _this16 = this;

                        clearTimeout(this.showTimer);
                        clearTimeout(this.hideTimer);
                        this.tooltipEventArgs = e ? { type: e.type, cancel: false, target: target, event: e, element: this.tooltipEle } : { type: null, cancel: false, target: target, event: null, element: this.tooltipEle };
                        this.trigger('beforeRender', this.tooltipEventArgs);
                        if (this.tooltipEventArgs.cancel) {
                            this.isHidden = true;
                            this.clear();
                            return;
                        }
                        this.isHidden = false;
                        if (isNullOrUndefined(this.tooltipEle)) {
                            this.ctrlId = this.element.getAttribute('id') ? getUniqueID(this.element.getAttribute('id')) : getUniqueID('tooltip');
                            this.tooltipEle = createElement('div', {
                                className: TOOLTIP_WRAP + ' ' + POPUP_ROOT$1, attrs: {
                                    role: 'tooltip', 'aria-hidden': 'false', 'id': this.ctrlId + '_content'
                                }, styles: 'width:' + formatUnit(this.width) + ';height:' + formatUnit(this.height) + ';position:absolute;'
                            });
                            if (this.cssClass) {
                                addClass([this.tooltipEle], this.cssClass.split(' '));
                            }
                            if (Browser.isDevice) {
                                addClass([this.tooltipEle], DEVICE$1);
                            }
                            if (this.width !== 'auto') {
                                this.tooltipEle.style.maxWidth = formatUnit(this.width);
                            }
                            this.tooltipEle.appendChild(createElement('div', { className: CONTENT }));
                            document.body.appendChild(this.tooltipEle);
                            this.addDescribedBy(target, this.ctrlId + '_content');
                            this.renderContent(target);
                            addClass([this.tooltipEle], POPUP_OPEN);
                            if (this.showTipPointer) {
                                this.renderArrow();
                            }
                            this.renderCloseIcon();
                            this.renderPopup(target);
                        } else {
                            this.adjustArrow(target, this.position, this.tooltipPositionX, this.tooltipPositionY);
                            this.addDescribedBy(target, this.ctrlId + '_content');
                            this.renderContent(target);
                            Animation.stop(this.tooltipEle);
                            this.reposition(target);
                        }
                        removeClass([this.tooltipEle], POPUP_OPEN);
                        addClass([this.tooltipEle], POPUP_CLOSE);
                        this.tooltipEventArgs = e ? { type: e.type, cancel: false, target: target, event: e, element: this.tooltipEle } : { type: null, cancel: false, target: target, event: null, element: this.tooltipEle };
                        this.trigger('beforeOpen', this.tooltipEventArgs);
                        if (this.tooltipEventArgs.cancel) {
                            this.isHidden = true;
                            this.clear();
                            return;
                        }
                        var openAnimation = {
                            name: showAnimation.effect, duration: showAnimation.duration, delay: showAnimation.delay, timingFunction: 'easeOut'
                        };
                        if (showAnimation.effect === 'None') {
                            openAnimation = undefined;
                        }
                        if (this.openDelay > 0) {
                            var show = function show() {
                                if (_this16.popupObj) {
                                    _this16.popupObj.show(openAnimation);
                                }
                            };
                            this.showTimer = setTimeout(show, this.openDelay);
                        } else {
                            this.popupObj.show(openAnimation);
                        }
                    }
                }, {
                    key: 'checkCollision',
                    value: function checkCollision(target, x, y) {
                        var elePos = {
                            left: x, top: y, position: this.position,
                            horizontal: this.tooltipPositionX, vertical: this.tooltipPositionY
                        };
                        var affectedPos = isCollide(this.tooltipEle, this.target ? this.element : null, x, y);
                        if (affectedPos.length > 0) {
                            elePos.horizontal = affectedPos.indexOf('left') >= 0 ? 'Right' : affectedPos.indexOf('right') >= 0 ? 'Left' : this.tooltipPositionX;
                            elePos.vertical = affectedPos.indexOf('top') >= 0 ? 'Bottom' : affectedPos.indexOf('bottom') >= 0 ? 'Top' : this.tooltipPositionY;
                        }
                        return elePos;
                    }
                }, {
                    key: 'collisionFlipFit',
                    value: function collisionFlipFit(target, x, y) {
                        var elePos = this.checkCollision(target, x, y);
                        var newpos = elePos.position;
                        if (this.tooltipPositionY !== elePos.vertical) {
                            newpos = this.position.indexOf('Bottom') === 0 || this.position.indexOf('Top') === 0 ? elePos.vertical + this.tooltipPositionX : this.tooltipPositionX + elePos.vertical;
                        }
                        if (this.tooltipPositionX !== elePos.horizontal) {
                            if (newpos.indexOf('Left') === 0) {
                                elePos.vertical = newpos === 'LeftTop' || newpos === 'LeftCenter' ? 'Top' : 'Bottom';
                                newpos = elePos.vertical + 'Left';
                            }
                            if (newpos.indexOf('Right') === 0) {
                                elePos.vertical = newpos === 'RightTop' || newpos === 'RightCenter' ? 'Top' : 'Bottom';
                                newpos = elePos.vertical + 'Right';
                            }
                            elePos.horizontal = this.tooltipPositionX;
                        }
                        this.tooltipEventArgs = {
                            type: null, cancel: false, target: target, event: null,
                            element: this.tooltipEle, collidedPosition: newpos
                        };
                        this.trigger('beforeCollision', this.tooltipEventArgs);
                        if (elePos.position !== newpos) {
                            var pos = calculatePosition(target, this.tooltipPositionX, elePos.vertical);
                            this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
                            var offsetPos = this.calculateTooltipOffset(newpos);
                            elePos.position = newpos;
                            elePos.left = pos.left + offsetPos.left;
                            elePos.top = pos.top + offsetPos.top;
                        } else {
                            this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
                        }
                        var eleOffset = { left: elePos.left, top: elePos.top };
                        var left = fit(this.tooltipEle, this.target ? this.element : null, { X: true, Y: false }, eleOffset).left;
                        if (this.showTipPointer && (newpos.indexOf('Bottom') === 0 || newpos.indexOf('Top') === 0)) {
                            var arrowEle = this.tooltipEle.querySelector('.' + ARROW_TIP);
                            var arrowleft = parseInt(arrowEle.style.left, 10) - (left - elePos.left);
                            if (arrowleft < 0) {
                                arrowleft = 0;
                            } else if (arrowleft + arrowEle.offsetWidth > this.tooltipEle.clientWidth) {
                                arrowleft = this.tooltipEle.clientWidth - arrowEle.offsetWidth;
                            }
                            arrowEle.style.left = arrowleft.toString() + 'px';
                        }
                        eleOffset.left = left;
                        return eleOffset;
                    }
                }, {
                    key: 'hideTooltip',
                    value: function hideTooltip(hideAnimation, e, targetElement) {
                        var _this17 = this;

                        var target = void 0;
                        if (e) {
                            target = this.target ? targetElement || e.target : this.element;
                            this.tooltipEventArgs = {
                                type: e.type, cancel: false, target: target, event: e, element: this.tooltipEle
                            };
                        } else {
                            target = document.querySelector('[data-tooltip-id= ' + this.ctrlId + '_content]');
                            this.tooltipEventArgs = {
                                type: null, cancel: false, target: target, event: null, element: this.tooltipEle
                            };
                        }
                        if (isNullOrUndefined(target)) {
                            return;
                        }
                        this.trigger('beforeClose', this.tooltipEventArgs);
                        if (!this.tooltipEventArgs.cancel) {
                            this.restoreElement(target);
                            this.isHidden = true;
                            var closeAnimation = {
                                name: hideAnimation.effect, duration: hideAnimation.duration, delay: hideAnimation.delay, timingFunction: 'easeIn'
                            };
                            if (hideAnimation.effect === 'None') {
                                closeAnimation = undefined;
                            }
                            if (this.closeDelay > 0) {
                                var hide = function hide() {
                                    if (_this17.popupObj) {
                                        _this17.popupObj.hide(closeAnimation);
                                    }
                                };
                                this.hideTimer = setTimeout(hide, this.closeDelay);
                            } else {
                                this.popupObj.hide(closeAnimation);
                            }
                        } else {
                            this.isHidden = false;
                        }
                    }
                }, {
                    key: 'restoreElement',
                    value: function restoreElement(target) {
                        this.unwireMouseEvents(target);
                        if (!isNullOrUndefined(target.getAttribute('data-content'))) {
                            target.setAttribute('title', target.getAttribute('data-content'));
                            target.removeAttribute('data-content');
                        }
                        this.removeDescribedBy(target);
                    }
                }, {
                    key: 'clear',
                    value: function clear() {
                        if (this.tooltipEle) {
                            removeClass([this.tooltipEle], POPUP_CLOSE);
                            addClass([this.tooltipEle], POPUP_OPEN);
                        }
                        if (this.isHidden) {
                            if (this.popupObj) {
                                this.popupObj.destroy();
                            }
                            if (this.tooltipEle) {
                                remove(this.tooltipEle);
                            }
                            this.tooltipEle = null;
                            this.popupObj = null;
                        }
                    }
                }, {
                    key: 'onMouseOut',
                    value: function onMouseOut(e) {
                        this.hideTooltip(this.animation.close, e);
                    }
                }, {
                    key: 'onStickyClose',
                    value: function onStickyClose(e) {
                        this.close();
                    }
                }, {
                    key: 'onMouseMove',
                    value: function onMouseMove(event) {
                        var eventPageX = 0;
                        var eventPageY = 0;
                        if (event.type.indexOf('touch') > -1) {
                            event.preventDefault();
                            eventPageX = event.touches[0].pageX;
                            eventPageY = event.touches[0].pageY;
                        } else {
                            eventPageX = event.pageX;
                            eventPageY = event.pageY;
                        }
                        Animation.stop(this.tooltipEle);
                        removeClass([this.tooltipEle], POPUP_CLOSE);
                        addClass([this.tooltipEle], POPUP_OPEN);
                        this.adjustArrow(event.target, this.position, this.tooltipPositionX, this.tooltipPositionY);
                        var pos = this.calculateTooltipOffset(this.position);
                        var x = eventPageX + pos.left + this.offsetX;
                        var y = eventPageY + pos.top + this.offsetY;
                        var elePos = this.checkCollision(event.target, x, y);
                        if (this.tooltipPositionX !== elePos.horizontal || this.tooltipPositionY !== elePos.vertical) {
                            var newpos = this.position.indexOf('Bottom') === 0 || this.position.indexOf('Top') === 0 ? elePos.vertical + elePos.horizontal : elePos.horizontal + elePos.vertical;
                            elePos.position = newpos;
                            this.adjustArrow(event.target, elePos.position, elePos.horizontal, elePos.vertical);
                            var colpos = this.calculateTooltipOffset(elePos.position);
                            elePos.left = eventPageX + colpos.left - this.offsetX;
                            elePos.top = eventPageY + colpos.top - this.offsetY;
                        }
                        this.tooltipEle.style.left = elePos.left + 'px';
                        this.tooltipEle.style.top = elePos.top + 'px';
                    }
                }, {
                    key: 'keyDown',
                    value: function keyDown(event) {
                        if (this.tooltipEle && event.keyCode === 27) {
                            this.close();
                        }
                    }
                }, {
                    key: 'touchEnd',
                    value: function touchEnd(e) {
                        if (this.tooltipEle && closest(e.target, '.' + ROOT$1) === null) {
                            this.close();
                        }
                    }
                }, {
                    key: 'scrollHandler',
                    value: function scrollHandler(e) {
                        if (this.tooltipEle) {
                            this.close();
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.initialize();
                        this.wireEvents(this.opensOn);
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        this.tipClass = TIP_BOTTOM;
                        this.tooltipPositionX = 'Center';
                        this.tooltipPositionY = 'Top';
                        this.isHidden = true;
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents(trigger) {
                        var triggerList = this.getTriggerList(trigger);
                        var _iteratorNormalCompletion6 = true;
                        var _didIteratorError6 = false;
                        var _iteratorError6 = undefined;

                        try {
                            for (var _iterator6 = triggerList[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                var opensOn = _step6.value;

                                if (opensOn === 'Custom') {
                                    return;
                                }
                                if (opensOn === 'Focus') {
                                    this.wireFocusEvents();
                                }
                                if (opensOn === 'Click') {
                                    EventHandler.add(this.element, Browser.touchStartEvent, this.targetClick, this);
                                }
                                if (opensOn === 'Hover') {
                                    if (Browser.isDevice) {
                                        this.touchModule = new Touch(this.element, {
                                            tapHoldThreshold: TAPHOLD_THRESHOLD,
                                            tapHold: this.tapHoldHandler.bind(this)
                                        });
                                        EventHandler.add(this.element, Browser.touchEndEvent, this.touchEndHandler, this);
                                    } else {
                                        EventHandler.add(this.element, 'mouseover', this.targetHover, this);
                                    }
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

                        EventHandler.add(document, 'touchend', this.touchEnd, this);
                        EventHandler.add(document, 'scroll', this.scrollHandler, this);
                        EventHandler.add(document, 'keydown', this.keyDown, this);
                    }
                }, {
                    key: 'getTriggerList',
                    value: function getTriggerList(trigger) {
                        if (trigger === 'Auto') {
                            trigger = Browser.isDevice ? 'Hover' : 'Hover Focus';
                        }
                        return trigger.split(' ');
                    }
                }, {
                    key: 'wireFocusEvents',
                    value: function wireFocusEvents() {
                        if (!isNullOrUndefined(this.target)) {
                            var targetList = [].slice.call(this.element.querySelectorAll(this.target));
                            var _iteratorNormalCompletion7 = true;
                            var _didIteratorError7 = false;
                            var _iteratorError7 = undefined;

                            try {
                                for (var _iterator7 = targetList[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                    var target = _step7.value;

                                    EventHandler.add(target, 'focus', this.targetHover, this);
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
                            EventHandler.add(this.element, 'focus', this.targetHover, this);
                        }
                    }
                }, {
                    key: 'wireMouseEvents',
                    value: function wireMouseEvents(e, target) {
                        if (this.tooltipEle) {
                            if (!this.isSticky) {
                                if (e.type === 'focus') {
                                    EventHandler.add(target, 'blur', this.onMouseOut, this);
                                }
                                if (e.type === 'mouseover') {
                                    EventHandler.add(target, 'mouseleave', this.onMouseOut, this);
                                }
                            }
                            if (this.mouseTrail) {
                                EventHandler.add(target, 'mousemove touchstart mouseenter', this.onMouseMove, this);
                            }
                        }
                    }
                }, {
                    key: 'unwireEvents',
                    value: function unwireEvents(trigger) {
                        var triggerList = this.getTriggerList(trigger);
                        var _iteratorNormalCompletion8 = true;
                        var _didIteratorError8 = false;
                        var _iteratorError8 = undefined;

                        try {
                            for (var _iterator8 = triggerList[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                var opensOn = _step8.value;

                                if (opensOn === 'Custom') {
                                    return;
                                }
                                if (opensOn === 'Focus') {
                                    this.unwireFocusEvents();
                                }
                                if (opensOn === 'Click') {
                                    EventHandler.remove(this.element, Browser.touchStartEvent, this.targetClick);
                                }
                                if (opensOn === 'Hover') {
                                    if (Browser.isDevice) {
                                        if (this.touchModule) {
                                            this.touchModule.destroy();
                                        }
                                        EventHandler.remove(this.element, Browser.touchEndEvent, this.touchEndHandler);
                                    } else {
                                        EventHandler.remove(this.element, 'mouseover', this.targetHover);
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

                        EventHandler.remove(document, 'touchend', this.touchEnd);
                        EventHandler.remove(document, 'scroll', this.scrollHandler);
                        EventHandler.remove(document, 'keydown', this.keyDown);
                    }
                }, {
                    key: 'unwireFocusEvents',
                    value: function unwireFocusEvents() {
                        if (!isNullOrUndefined(this.target)) {
                            var targetList = [].slice.call(this.element.querySelectorAll(this.target));
                            var _iteratorNormalCompletion9 = true;
                            var _didIteratorError9 = false;
                            var _iteratorError9 = undefined;

                            try {
                                for (var _iterator9 = targetList[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                    var target = _step9.value;

                                    EventHandler.remove(target, 'focus', this.targetHover);
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
                        } else {
                            EventHandler.remove(this.element, 'focus', this.targetHover);
                        }
                    }
                }, {
                    key: 'unwireMouseEvents',
                    value: function unwireMouseEvents(target) {
                        if (!this.isSticky) {
                            var triggerList = this.getTriggerList(this.opensOn);
                            var _iteratorNormalCompletion10 = true;
                            var _didIteratorError10 = false;
                            var _iteratorError10 = undefined;

                            try {
                                for (var _iterator10 = triggerList[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                    var opensOn = _step10.value;

                                    if (opensOn === 'Focus') {
                                        EventHandler.remove(target, 'blur', this.onMouseOut);
                                    }
                                    if (opensOn === 'Hover' && !Browser.isDevice) {
                                        EventHandler.remove(target, 'mouseleave', this.onMouseOut);
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
                        if (this.mouseTrail) {
                            EventHandler.remove(target, 'mousemove touchstart mouseenter', this.onMouseMove);
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'tooltip';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist([]);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion11 = true;
                        var _didIteratorError11 = false;
                        var _iteratorError11 = undefined;

                        try {
                            for (var _iterator11 = Object.keys(newProp)[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                var prop = _step11.value;

                                switch (prop) {
                                    case 'width':
                                        if (this.tooltipEle) {
                                            this.tooltipEle.style.width = formatUnit(newProp.width);
                                        }
                                        break;
                                    case 'height':
                                        if (this.tooltipEle) {
                                            this.tooltipEle.style.height = formatUnit(newProp.height);
                                        }
                                        break;
                                    case 'content':
                                        if (this.tooltipEle) {
                                            this.renderContent();
                                        }
                                        break;
                                    case 'opensOn':
                                        this.unwireEvents(oldProp.opensOn);
                                        this.wireEvents(newProp.opensOn);
                                        break;
                                    case 'position':
                                        this.formatPosition();
                                        var target = document.querySelector('[data-tooltip-id= ' + this.ctrlId + '_content]');
                                        if (this.tooltipEle && target) {
                                            var arrowInnerELe = this.tooltipEle.querySelector('.' + ARROW_TIP_INNER);
                                            arrowInnerELe.style.top = arrowInnerELe.style.left = null;
                                            this.reposition(target);
                                        }
                                        break;
                                    case 'tipPointerPosition':
                                        var trgt = document.querySelector('[data-tooltip-id= ' + this.ctrlId + '_content]');
                                        if (this.tooltipEle && trgt) {
                                            this.reposition(trgt);
                                        }
                                        break;
                                    case 'offsetX':
                                        if (this.tooltipEle) {
                                            var x = newProp.offsetX - oldProp.offsetX;
                                            this.tooltipEle.style.left = (parseInt(this.tooltipEle.style.left, 10) + x).toString() + 'px';
                                        }
                                        break;
                                    case 'offsetY':
                                        if (this.tooltipEle) {
                                            var y = newProp.offsetY - oldProp.offsetY;
                                            this.tooltipEle.style.top = (parseInt(this.tooltipEle.style.top, 10) + y).toString() + 'px';
                                        }
                                        break;
                                    case 'cssClass':
                                        if (this.tooltipEle) {
                                            if (oldProp.cssClass) {
                                                removeClass([this.tooltipEle], oldProp.cssClass.split(' '));
                                            }
                                            if (newProp.cssClass) {
                                                addClass([this.tooltipEle], newProp.cssClass.split(' '));
                                            }
                                        }
                                        break;
                                    case 'enableRtl':
                                        if (this.tooltipEle) {
                                            if (this.enableRtl) {
                                                addClass([this.tooltipEle], RTL$1);
                                            } else {
                                                removeClass([this.tooltipEle], RTL$1);
                                            }
                                        }
                                        break;
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
                    key: 'open',
                    value: function open(element) {
                        var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.animation.open;

                        if (element.style.display === 'none') {
                            return;
                        }
                        this.showTooltip(element, animation);
                    }
                }, {
                    key: 'close',
                    value: function close() {
                        var animation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.animation.close;

                        this.hideTooltip(animation);
                    }
                }, {
                    key: 'refresh',
                    value: function refresh(target) {
                        if (this.tooltipEle) {
                            this.renderContent(target);
                        }
                        if (this.popupObj && target) {
                            this.reposition(target);
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        _get(Tooltip.prototype.__proto__ || Object.getPrototypeOf(Tooltip.prototype), 'destroy', this).call(this);
                        removeClass([this.element], ROOT$1);
                        this.unwireEvents(this.opensOn);
                        if (this.popupObj) {
                            this.popupObj.destroy();
                        }
                        if (this.tooltipEle) {
                            remove(this.tooltipEle);
                        }
                        this.tooltipEle = null;
                        this.popupObj = null;
                    }
                }]);

                return Tooltip;
            }(Component));

            __decorate$2([Property('auto')], Tooltip.prototype, "width", void 0);
            __decorate$2([Property('auto')], Tooltip.prototype, "height", void 0);
            __decorate$2([Property()], Tooltip.prototype, "content", void 0);
            __decorate$2([Property()], Tooltip.prototype, "target", void 0);
            __decorate$2([Property('TopCenter')], Tooltip.prototype, "position", void 0);
            __decorate$2([Property(0)], Tooltip.prototype, "offsetX", void 0);
            __decorate$2([Property(0)], Tooltip.prototype, "offsetY", void 0);
            __decorate$2([Property(true)], Tooltip.prototype, "showTipPointer", void 0);
            __decorate$2([Property('Auto')], Tooltip.prototype, "tipPointerPosition", void 0);
            __decorate$2([Property('Auto')], Tooltip.prototype, "opensOn", void 0);
            __decorate$2([Property(false)], Tooltip.prototype, "mouseTrail", void 0);
            __decorate$2([Property(false)], Tooltip.prototype, "isSticky", void 0);
            __decorate$2([Complex({}, Animation$1)], Tooltip.prototype, "animation", void 0);
            __decorate$2([Property(0)], Tooltip.prototype, "openDelay", void 0);
            __decorate$2([Property(0)], Tooltip.prototype, "closeDelay", void 0);
            __decorate$2([Property()], Tooltip.prototype, "cssClass", void 0);
            __decorate$2([Property(false)], Tooltip.prototype, "enableRtl", void 0);
            __decorate$2([Event()], Tooltip.prototype, "beforeRender", void 0);
            __decorate$2([Event()], Tooltip.prototype, "beforeOpen", void 0);
            __decorate$2([Event()], Tooltip.prototype, "afterOpen", void 0);
            __decorate$2([Event()], Tooltip.prototype, "beforeClose", void 0);
            __decorate$2([Event()], Tooltip.prototype, "afterClose", void 0);
            __decorate$2([Event()], Tooltip.prototype, "beforeCollision", void 0);
            __decorate$2([Event()], Tooltip.prototype, "created", void 0);
            __decorate$2([Event()], Tooltip.prototype, "destroyed", void 0);
            _export('Tooltip', Tooltip = __decorate$2([NotifyPropertyChanges], Tooltip));

            /**
             * Tooltip modules
             */

            globalTimeOut = {};
            spinTemplate = null;
            spinCSSClass = null;
            DEFT_MAT_WIDTH = 30;
            DEFT_FAB_WIDTH = 30;
            DEFT_BOOT_WIDTH = 30;
            CLS_SHOWSPIN = 'e-spin-show';
            CLS_HIDESPIN = 'e-spin-hide';
            CLS_MATERIALSPIN = 'e-spin-material';
            CLS_FABRICSPIN = 'e-spin-fabric';
            CLS_BOOTSPIN = 'e-spin-bootstrap';
            CLS_HIGHCONTRASTSPIN = 'e-spin-high-contrast';
            CLS_SPINWRAP = 'e-spinner-pane';
            CLS_SPININWRAP = 'e-spinner-inner';
            CLS_SPINCIRCLE = 'e-path-circle';
            CLS_SPINARC = 'e-path-arc';
            CLS_SPINLABEL = 'e-spin-label';
            CLS_SPINTEMPLATE = 'e-spin-template';

            _export('PositionData', PositionData);

            _export('Popup', Popup);

            _export('getScrollableParent', _getScrollableParent);

            _export('getZindexPartial', getZindexPartial);

            _export('calculateRelativeBasedPosition', calculateRelativeBasedPosition);

            _export('calculatePosition', calculatePosition);

            _export('fit', fit);

            _export('isCollide', isCollide);

            _export('flip', flip);

            _export('ButtonProps', ButtonProps);

            _export('AnimationSettings', AnimationSettings);

            _export('Dialog', Dialog);

            _export('Animation', Animation$1);

            _export('Tooltip', Tooltip);

            _export('createSpinner', createSpinner);

            _export('showSpinner', showSpinner);

            _export('hideSpinner', hideSpinner);

            _export('setSpinner', setSpinner);
        }
    };
});

//# sourceMappingURL=ej2-popups.es2015-compiled.js.map