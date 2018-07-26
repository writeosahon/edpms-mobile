'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _get, _typeof, _createClass, instances, uid, headerRegex, defaultType, Ajax, EventHandler, Observer, Base, REGX_MOBILE, REGX_IE, REGX_IE11, REGX_IOS, REGX_IOS7, REGX_ANDROID, REGX_WINDOWS, REGX_VERSION, REGX_BROWSER, Browser, __decorate, Animation, isRippleEnabled, Animation_1, CanvasRenderer, MODULE_SUFFIX, ModuleLoader, ChildProperty, defaultNumberingSystem, defaultNumberSymbols, latnNumberSystem, ParserBase, errorText, percentSign, minusSign, mapper$1, NumberFormat, IntlBase, abbreviateRegexGlobal, standalone, weekdayKey, timeSetter, datePartMatcher, timeSeparator, DateFormat, standalone$1, latnRegex$1, timeSetter$1, month, DateParser, parseRegex, groupRegex, keys, NumberParser, onIntlChange, rightToLeft, cldrData, defaultCulture, defaultCurrencyCode, mapper, Internationalization, __decorate$1, componentCount, lastPageID, lastHistoryLen, Component, __decorate$2, defaultPosition, Position, Draggable, Draggable_1, __decorate$3, Droppable, __decorate$4, keyCode, KeyboardEvents, KeyboardEvents_1, L10n, SvgRenderer, __decorate$5, SwipeSettings, swipeRegex, Touch, LINES, QUOTES, IF_STMT, ELSEIF_STMT, ELSE_STMT, FOR_STMT, IF_OR_FOR, CALL_FUNCTION, NOT_NUMBER, WORD, DBL_QUOTED_STR, exp, HAS_ROW, Engine, engineObj;

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

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    /**
     * Create Instance from constructor function with desired parameters.
     * @param {Function} classFunction - Class function to which need to create instance
     * @param {any[]} params - Parameters need to passed while creating instance
     * @return {any}
     * @private
     */
    function createInstance(classFunction, params) {
        var arrayParam = params;
        arrayParam.unshift(undefined);
        return new (Function.prototype.bind.apply(classFunction, arrayParam))();
    }
    /**
     * To run a callback function immediately after the browser has completed other operations.
     * @param {Function} handler - callback function to be triggered.
     * @return {Function}
     * @private
     */
    function setImmediate(handler) {
        var unbind = void 0;
        var num = new Uint16Array(5);
        var intCrypto = window.msCrypto || window.crypto;
        intCrypto.getRandomValues(num);
        var secret = 'ej2' + combineArray(num);
        var messageHandler = function messageHandler(event) {
            if (event.source === window && typeof event.data === 'string' && event.data.length <= 32 && event.data === secret) {
                handler();
                unbind();
            }
        };
        window.addEventListener('message', messageHandler, false);
        window.postMessage(secret, '*');
        return unbind = function unbind() {
            window.removeEventListener('message', messageHandler);
            handler = messageHandler = secret = undefined;
        };
    }
    /**
     * To get nameSpace value from the desired object.
     * @param {string} nameSpace - String value to the get the inner object
     * @param {any} obj - Object to get the inner object value.
     * @return {any}
     * @private
     */
    function getValue(nameSpace, obj) {
        /* tslint:disable no-any */
        var value = obj;
        var splits = nameSpace.split('.');
        for (var i = 0; i < splits.length && !isUndefined(value); i++) {
            value = value[splits[i]];
        }
        return value;
    }
    /**
     * To set value for the nameSpace in desired object.
     * @param {string} nameSpace - String value to the get the inner object
     * @param {any} value - Value that you need to set.
     * @param {any} obj - Object to get the inner object value.
     * @return {void}
     * @private
     */
    function setValue(nameSpace, value, obj) {
        var keys = nameSpace.split('.');
        var start = obj || {};
        var fromObj = start;
        var i = void 0;
        var length = keys.length;
        var key = void 0;
        for (i = 0; i < length; i++) {
            key = keys[i];
            if (i + 1 === length) {
                fromObj[key] = value === undefined ? {} : value;
            } else if (isNullOrUndefined(fromObj[key])) {
                fromObj[key] = {};
            }
            fromObj = fromObj[key];
        }
        return start;
    }
    /**
     * Delete an item from Object
     * @param {any} obj - Object in which we need to delete an item.
     * @param {string} params - String value to the get the inner object
     * @return {void}
     * @private
     */
    function deleteObject(obj, key) {
        delete obj[key];
    }
    /**
     * Check weather the given argument is only object.
     * @param {any} obj - Object which is need to check.
     * @return {boolean}
     * @private
     */
    function isObject(obj) {
        var objCon = {};
        return !isNullOrUndefined(obj) && obj.constructor === objCon.constructor;
    }
    /**
     * To get enum value by giving the string.
     * @param {any} enumObject - Enum object.
     * @param {string} enumValue - Enum value to be searched
     * @return {any}
     * @private
     */
    function getEnumValue(enumObject, enumValue) {
        return enumObject[enumValue];
    }
    /**
     * Merge the source object into destination object.
     * @param {any} source - source object which is going to merge with destination object
     * @param {any} destination - object need to be merged
     * @return {void}
     * @private
     */
    function merge(source, destination) {
        if (!isNullOrUndefined(destination)) {
            var temrObj = source;
            var tempProp = destination;
            var _keys = Object.keys(destination);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var key = _step.value;

                    temrObj[key] = tempProp[key];
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
    }
    /**
     * Extend the two object with newer one.
     * @param {any} copied - Resultant object after merged
     * @param {Object} first - First object need to merge
     * @param {Object} second - Second object need to merge
     * @return {Object}
     * @private
     */
    function extend(copied, first, second, deep) {
        var _arguments = arguments;

        var result = copied || {};
        var length = arguments.length;
        if (deep) {
            length = length - 1;
        }

        var _loop = function _loop(i) {
            if (!_arguments[i]) {
                return 'continue';
            }
            var obj1 = _arguments[i];
            Object.keys(obj1).forEach(function (key) {
                var src = result[key];
                var copy = obj1[key];
                var clone = void 0;
                if (deep && isObject(copy)) {
                    clone = isObject(src) ? src : {};
                    result[key] = extend({}, clone, copy, true);
                } else {
                    result[key] = copy;
                }
            });
        };

        for (var i = 1; i < length; i++) {
            var _ret = _loop(i);

            if (_ret === 'continue') continue;
        }
        return result;
    }
    /**
     * To check whether the object is null or undefined.
     * @param {Object} value - To check the object is null or undefined
     * @return {boolean}
     * @private
     */
    function isNullOrUndefined(value) {
        return value === undefined || value === null;
    }
    /**
     * To check whether the object is undefined.
     * @param {Object} value - To check the object is undefined
     * @return {boolean}
     * @private
     */
    function isUndefined(value) {
        return 'undefined' === typeof value;
    }
    /**
     * To return the generated unique name
     * @param {string} definedName - To concatenate the unique id to provided name
     * @return {string}
     * @private
     */
    function getUniqueID(definedName) {
        return definedName + '_' + uid++;
    }
    /**
     * It limits the rate at which a function can fire. The function will fire only once every provided second instead of as quickly.
     * @param {Function} eventFunction - Specifies the function to run when the event occurs
     * @param {number} delay - A number that specifies the milliseconds for function delay call option
     * @return {Function}
     * @private
     */
    function debounce(eventFunction, delay) {
        var out = void 0;
        // tslint:disable-next-line
        return function () {
            var _this = this;

            var args = arguments;
            var later = function later() {
                out = null;
                return eventFunction.apply(_this, args);
            };
            clearTimeout(out);
            out = setTimeout(later, delay);
        };
    }
    // Added since lint ignored after added '//tslint:disable-next-line' 
    /* tslint:disable:no-any */
    /**
     * To convert the object to string for query url
     * @param  {Object} data
     * @returns string
     * @private
     */
    function queryParams(data) {
        var array = [];
        var keys = Object.keys(data);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var key = _step2.value;

                array.push(encodeURIComponent(key) + '=' + encodeURIComponent('' + data[key]));
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

        return array.join('&');
    }
    /**
     * To check whether the given array contains object.
     * @param {T[]} value- Specifies the T type array to be checked.
     * @private
     */
    function isObjectArray(value) {
        var parser = Object.prototype.toString;
        if (parser.call(value) === '[object Array]') {
            if (parser.call(value[0]) === '[object Object]') {
                return true;
            }
        }
        return false;
    }
    /**
     * To check whether the  child element is descendant to parent element or parent and child are same element.
     * @param{Element} - Specifies the child element to compare with parent.
     * @param{Element} - Specifies the parent element.
     * @return boolean
     * @private
     */
    function compareElementParent(child, parent) {
        var node = child;
        if (node === parent) {
            return true;
        } else if (node === document || !node) {
            return false;
        } else {
            return compareElementParent(node.parentNode, parent);
        }
    }
    /**
     * To throw custom error message.
     * @param{string} - Specifies the error message to be thrown.
     * @private
     */
    function throwError(message) {
        try {
            throw new Error(message);
        } catch (e) {
            throw e.message + '\n' + e.stack;
        }
    }
    /**
     * This function is used to print given element
     * @param{Element} element - Specifies the print content element.
     * @param{Window} printWindow - Specifies the print window.
     * @private
     */
    function print(element, printWindow) {
        var div = document.createElement('div');
        var links = [].slice.call(document.getElementsByTagName('head')[0].querySelectorAll('link, style'));
        var reference = '';
        if (isNullOrUndefined(printWindow)) {
            printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
        }
        div.appendChild(element.cloneNode(true));
        for (var i = 0, len = links.length; i < len; i++) {
            reference += links[i].outerHTML;
        }
        printWindow.document.write('<!DOCTYPE html> <html><head>' + reference + '</head><body>' + div.innerHTML + '<script> (function() { window.ready = true; })(); </script>' + '</body></html>');
        printWindow.document.close();
        printWindow.focus();
        // tslint:disable-next-line
        var interval = setInterval(function () {
            if (printWindow.ready) {
                printWindow.print();
                printWindow.close();
                clearInterval(interval);
            }
        }, 500);
        return printWindow;
    }
    /**
     * Function to normalize the units applied to the element.
     * @param  {number|string} value
     * @return {string} result
     * @private
     */
    function formatUnit(value) {
        var result = value + '';
        if (result === 'auto' || result.indexOf('%') !== -1 || result.indexOf('px') !== -1) {
            return result;
        }
        return result + 'px';
    }
    /**
     * Function to fetch the Instances of a HTML element for the given component.
     * @param {string | HTMLElement} element
     * @param {any} component
     * @return {Object} inst
     * @private
     */
    // tslint:disable-next-line
    function getInstance(element, component) {
        // tslint:disable-next-line:no-any
        var elem = typeof element === 'string' ? document.querySelector(element) : element;
        if (elem[instances]) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = elem[instances][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var inst = _step3.value;

                    if (inst instanceof component) {
                        return inst;
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
        return null;
    }
    /**
     * Function to add instances for the given element.
     * @param {string | HTMLElement} element
     * @param {Object} instance
     * @return {void}
     * @private
     */
    function addInstance(element, instance) {
        // tslint:disable-next-line:no-any
        var elem = typeof element === 'string' ? document.querySelector(element) : element;
        if (elem[instances]) {
            elem[instances].push(instance);
        } else {
            elem[instances] = [instance];
        }
    }
    /**
     * Function to generate the unique id.
     * @return {string}
     * @private
     */
    function uniqueID() {
        // tslint:disable-next-line:no-any
        var num = new Uint16Array(5);
        var intCrypto = window.msCrypto || window.crypto;
        return intCrypto.getRandomValues(num);
    }
    function combineArray(num) {
        var ret = '';
        for (var i = 0; i < 5; i++) {
            ret += (i ? ',' : '') + num[i];
        }
        return ret;
    }

    /**
     * Functions related to dom operations.
     */
    /**
     * Function to create Html element.
     * @param tagName - Name of the tag, id and class names.
     * @param properties - Object to set properties in the element.
     * @param properties.id - To set the id to the created element.
     * @param properties.className - To add classes to the element.
     * @param properties.innerHTML - To set the innerHTML to element.
     * @param properties.styles - To set the some custom styles to element.
     * @param properties.attrs - To set the attributes to element.
     * @private
     */
    function createElement(tagName, properties) {
        var element = document.createElement(tagName);
        if (typeof properties === 'undefined') {
            return element;
        }
        element.innerHTML = properties.innerHTML ? properties.innerHTML : '';
        if (properties.className !== undefined) {
            element.className = properties.className;
        }
        if (properties.id !== undefined) {
            element.id = properties.id;
        }
        if (properties.styles !== undefined) {
            element.setAttribute('style', properties.styles);
        }
        if (properties.attrs !== undefined) {
            attributes(element, properties.attrs);
        }
        return element;
    }
    /**
     * The function used to add the classes to array of elements
     * @param  {Element[]|NodeList} elements - An array of elements that need to add a list of classes
     * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
     * @private
     */
    function addClass(elements, classes) {
        var classList = getClassList(classes);
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var ele = _step5.value;
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = classList[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var className = _step6.value;

                        if (!ele.classList.contains(className)) {
                            ele.classList.add(className);
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

        return elements;
    }
    /**
     * The function used to add the classes to array of elements
     * @param  {Element[]|NodeList} elements - An array of elements that need to remove a list of classes
     * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
     * @private
     */
    function removeClass(elements, classes) {
        var classList = getClassList(classes);
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
            for (var _iterator7 = elements[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var ele = _step7.value;

                if (ele.className !== '') {
                    var _iteratorNormalCompletion8 = true;
                    var _didIteratorError8 = false;
                    var _iteratorError8 = undefined;

                    try {
                        for (var _iterator8 = classList[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                            var className = _step8.value;

                            ele.classList.remove(className);
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

        return elements;
    }
    function getClassList(classes) {
        var classList = [];
        if (typeof classes === 'string') {
            classList.push(classes);
        } else {
            classList = classes;
        }
        return classList;
    }
    /**
     * The function used to check element is visible or not.
     * @param  {Element|Node} element - An element the need to check visibility
     * @private
     */
    function isVisible(element) {
        var ele = element;
        return ele.style.visibility === '' && ele.offsetWidth > 0;
    }
    /**
     * The function used to insert an array of elements into a first of the element.
     * @param  {Element[]|NodeList} fromElements - An array of elements that need to prepend.
     * @param  {Element} toElement - An element that is going to prepend.
     * @private
     */
    function prepend(fromElements, toElement) {
        var docFrag = document.createDocumentFragment();
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
            for (var _iterator9 = fromElements[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var ele = _step9.value;

                docFrag.appendChild(ele);
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

        toElement.insertBefore(docFrag, toElement.firstElementChild);
        return fromElements;
    }
    /**
     * The function used to insert an array of elements into last of the element.
     * @param  {Element[]|NodeList} fromElements - An array of elements that need to append.
     * @param  {Element} toElement - An element that is going to prepend.
     * @private
     */
    function append(fromElements, toElement) {
        var docFrag = document.createDocumentFragment();
        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
            for (var _iterator10 = fromElements[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var ele = _step10.value;

                docFrag.appendChild(ele);
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

        toElement.appendChild(docFrag);
        return fromElements;
    }
    /**
     * The function used to remove the element from the
     * @param  {Element|Node|HTMLElement} element - An element that is going to detach from the Dom
     * @private
     */
    function detach(element) {
        var parentNode = element.parentNode;
        return parentNode.removeChild(element);
    }
    /**
     * The function used to remove the element from Dom also clear the bounded events
     * @param  {Element|Node|HTMLElement} element - An element remove from the Dom
     * @private
     */
    function remove(element) {
        var parentNode = element.parentNode;
        EventHandler.clearEvents(element);
        parentNode.removeChild(element);
    }
    /**
     * The function helps to set multiple attributes to an element
     * @param  {Element|Node} element - An element that need to set attributes.
     * @param  {{[key:string]:string}} attributes - JSON Object that is going to as attributes.
     * @private
     */
    function attributes(element, attributes) {
        var keys = Object.keys(attributes);
        var ele = element;
        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
            for (var _iterator11 = keys[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var key = _step11.value;

                ele.setAttribute(key, attributes[key]);
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

        return ele;
    }
    /**
     * The function selects the element from giving context.
     * @param  {string} selector - Selector string need fetch element from the
     * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
     * @private
     */
    function select(selector) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

        return context.querySelector(selector);
    }
    /**
     * The function selects an array of element from the given context.
     * @param  {string} selector - Selector string need fetch element from the
     * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
     * @private
     */
    function selectAll(selector) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

        var nodeList = context.querySelectorAll(selector);
        return nodeList;
    }
    /**
     * Returns single closest parent element based on class selector.
     * @param  {Element} element - An element that need to find the closest element.
     * @param  {string} selector - A classSelector of closest element.
     * @private
     */
    function closest(element, selector) {
        var el = element;
        if (typeof el.closest === 'function') {
            return el.closest(selector);
        }
        while (el && el.nodeType === 1) {
            if (matches(el, selector)) {
                return el;
            }
            el = el.parentNode;
        }
        return null;
    }
    /**
     * Returns all sibling elements of the given element.
     * @param  {Element|Node} element - An element that need to get siblings.
     * @private
     */
    function siblings(element) {
        var siblings = [];
        var childNodes = Array.prototype.slice.call(element.parentNode.childNodes);
        var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
            for (var _iterator12 = childNodes[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var curNode = _step12.value;

                if (curNode.nodeType === Node.ELEMENT_NODE && element !== curNode) {
                    siblings.push(curNode);
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

        return siblings;
    }
    /**
     * set the value if not exist. Otherwise set the existing value
     * @param  {HTMLElement} element - An element to which we need to set value.
     * @param  {string} property - Property need to get or set.
     * @param  {string} value - value need to set.
     * @private
     */
    function getAttributeOrDefault(element, property, value) {
        var attrVal = element.getAttribute(property);
        if (isNullOrUndefined(attrVal)) {
            element.setAttribute(property, value.toString());
            attrVal = value;
        }
        return attrVal;
    }
    /**
     * Set the style attributes to Html element.
     * @param {HTMLElement} element - Element which we want to set attributes
     * @param {any} attrs - Set the given attributes to element
     * @return {void}
     * @private
     */
    function setStyleAttribute(element, attrs) {
        if (attrs !== undefined) {
            Object.keys(attrs).forEach(function (key) {
                // tslint:disable-next-line:no-any
                element.style[key] = attrs[key];
            });
        }
    }
    /**
     * Method for add and remove classes to a dom element.
     * @param {Element} element - Element for add and remove classes
     * @param {string[]} addClasses - List of classes need to be add to the element
     * @param {string[]} removeClasses - List of classes need to be remove from the element
     * @return {void}
     * @private
     */
    function classList(element, addClasses, removeClasses) {
        addClass([element], addClasses);
        removeClass([element], removeClasses);
    }
    /**
     * Method to check whether the element matches the given selector.
     * @param {Element} element - Element to compare with the selector.
     * @param {string} selector - String selector which element will satisfy.
     * @return {void}
     * @private
     */
    function matches(element, selector) {
        var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
        if (matches) {
            return matches.call(element, selector);
        } else {
            return [].indexOf.call(document.querySelectorAll(selector), element) !== -1;
        }
    }

    /**
     * Returns the Class Object
     * @param {ClassObject} instance - instance of ClassObject
     * @param {string} curKey - key of the current instance
     * @param {Object} defaultValue - default Value
     * @param {Object[]} type
     */
    function getObject(instance, curKey, defaultValue, type) {
        if (!instance.properties.hasOwnProperty(curKey)) {
            instance.properties[curKey] = createInstance(type, [instance, curKey, defaultValue]);
        }
        return instance.properties[curKey];
    }
    /**
     * Returns object array
     * @param {ClassObject} instance
     * @param {string} curKey
     * @param {Object[]} defaultValue
     * @param type
     * @param {boolean} isSetter
     * @returns {Object[]}
     */
    function getObjectArray(instance, curKey, defaultValue, type, isSetter, isFactory) {
        var result = [];
        var len = defaultValue.length;
        for (var i = 0; i < len; i++) {
            var curType = type;
            if (isFactory) {
                curType = type(defaultValue[i]);
            }
            if (isSetter) {
                var inst = createInstance(curType, [instance, curKey, {}, true]);
                inst.setProperties(defaultValue[i], true);
                result.push(inst);
            } else {
                result.push(createInstance(curType, [instance, curKey, defaultValue[i], true]));
            }
        }
        return result;
    }
    /**
     * Returns the properties of the object
     * @param {Object} defaultValue
     * @param {string} curKey
     */
    function propertyGetter(defaultValue, curKey) {
        return function () {
            if (!this.properties.hasOwnProperty(curKey)) {
                this.properties[curKey] = defaultValue;
            }
            return this.properties[curKey];
        };
    }
    /**
     * Set the properties for the object
     * @param {Object} defaultValue
     * @param {string} curKey
     */
    function propertySetter(defaultValue, curKey) {
        return function (newValue) {
            if (this.properties[curKey] !== newValue) {
                var oldVal = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
                this.saveChanges(curKey, newValue, oldVal);
                this.properties[curKey] = newValue;
            }
        };
    }
    /**
     * Returns complex objects
     */
    function complexGetter(defaultValue, curKey, type) {
        return function () {
            return getObject(this, curKey, defaultValue, type);
        };
    }
    /**
     * Sets complex objects
     */
    function complexSetter(defaultValue, curKey, type) {
        return function (newValue) {
            getObject(this, curKey, defaultValue, type).setProperties(newValue);
        };
    }
    function complexFactoryGetter(defaultValue, curKey, type) {
        return function () {
            var curType = type({});
            return getObject(this, curKey, defaultValue, curType);
        };
    }
    function complexFactorySetter(defaultValue, curKey, type) {
        return function (newValue) {
            var curType = type(newValue);
            getObject(this, curKey, defaultValue, curType).setProperties(newValue);
        };
    }
    function complexArrayGetter(defaultValue, curKey, type) {
        return function () {
            if (!this.properties.hasOwnProperty(curKey)) {
                var defCollection = getObjectArray(this, curKey, defaultValue, type, false);
                this.properties[curKey] = defCollection;
            }
            return this.properties[curKey];
        };
    }
    function complexArraySetter(defaultValue, curKey, type) {
        return function (newValue) {
            var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false);
            var newValCollection = getObjectArray(this, curKey, newValue, type, true);
            this.saveChanges(curKey, newValCollection, oldValueCollection);
            this.properties[curKey] = newValCollection;
        };
    }
    function complexArrayFactorySetter(defaultValue, curKey, type) {
        return function (newValue) {
            var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false, true);
            var newValCollection = getObjectArray(this, curKey, newValue, type, true, true);
            this.saveChanges(curKey, newValCollection, oldValueCollection);
            this.properties[curKey] = newValCollection;
        };
    }
    function complexArrayFactoryGetter(defaultValue, curKey, type) {
        return function () {
            var curType = type({});
            if (!this.properties.hasOwnProperty(curKey)) {
                var defCollection = getObjectArray(this, curKey, defaultValue, curType, false);
                this.properties[curKey] = defCollection;
            }
            return this.properties[curKey];
        };
    }
    /**
     * Method used to create property. General syntax below.
     * @param  {T} defaultValue? - Specifies the default value of property.
     * ```
     * @Property('TypeScript')
     * propertyName: Type;
     * ```
     * @private
     */
    function Property(defaultValue) {
        return function (target, key) {
            var propertyDescriptor = {
                set: propertySetter(defaultValue, key),
                get: propertyGetter(defaultValue, key),
                enumerable: true,
                configurable: true
            };
            //new property creation
            Object.defineProperty(target, key, propertyDescriptor);
            addPropertyCollection(target, key, 'prop', defaultValue);
        };
    }
    /**
     * Method used to create complex property. General syntax below.
     * @param  {T} defaultValue - Specifies the default value of property.
     * @param  {Function} type - Specifies the class type of complex object.
     * ```
     * @Complex<Type>({},Type)
     * propertyName: Type;
     * ```
     * @private
     */
    function Complex(defaultValue, type) {
        return function (target, key) {
            var propertyDescriptor = {
                set: complexSetter(defaultValue, key, type),
                get: complexGetter(defaultValue, key, type),
                enumerable: true,
                configurable: true
            };
            //new property creation
            Object.defineProperty(target, key, propertyDescriptor);
            addPropertyCollection(target, key, 'complexProp', defaultValue, type);
        };
    }
    /**
     * Method used to create complex Factory property. General syntax below.
     * @param  {Function} defaultType - Specifies the default value of property.
     * @param  {Function} type - Specifies the class factory type of complex object.
     * ```
     * @ComplexFactory(defaultType, factoryFunction)
     * propertyName: Type1 | Type2;
     * ```
     * @private
     */
    function ComplexFactory(type) {
        return function (target, key) {
            var propertyDescriptor = {
                set: complexFactorySetter({}, key, type),
                get: complexFactoryGetter({}, key, type),
                enumerable: true,
                configurable: true
            };
            //new property creation
            Object.defineProperty(target, key, propertyDescriptor);
            addPropertyCollection(target, key, 'complexProp', {}, type);
        };
    }
    /**
     * Method used to create complex array property. General syntax below.
     * @param  {T[]} defaultValue - Specifies the default value of property.
     * @param  {Function} type - Specifies the class type of complex object.
     * ```
     * @Collection([], Type);
     * propertyName: Type;
     * ```
     * @private
     */
    function Collection(defaultValue, type) {
        return function (target, key) {
            var propertyDescriptor = {
                set: complexArraySetter(defaultValue, key, type),
                get: complexArrayGetter(defaultValue, key, type),
                enumerable: true,
                configurable: true
            };
            //new property creation
            Object.defineProperty(target, key, propertyDescriptor);
            addPropertyCollection(target, key, 'colProp', defaultValue, type);
        };
    }
    /**
     * Method used to create complex factory array property. General syntax below.
     * @param  {T[]} defaultType - Specifies the default type of property.
     * @param  {Function} type - Specifies the class type of complex object.
     * ```
     * @Collection([], Type);
     * propertyName: Type;
     * ```
     * @private
     */
    function CollectionFactory(type) {
        return function (target, key) {
            var propertyDescriptor = {
                set: complexArrayFactorySetter([], key, type),
                get: complexArrayFactoryGetter([], key, type),
                enumerable: true,
                configurable: true
            };
            //new property creation
            Object.defineProperty(target, key, propertyDescriptor);
            addPropertyCollection(target, key, 'colProp', {}, type);
        };
    }
    /**
     * Method used to create event property. General syntax below.
     * @param  {Function} defaultValue? - Specifies the default value of property.
     * @param  {boolean} isComplex? - Specifies the whether it is complex object.
     * ```
     * @Event(()=>{return true;})
     * ```
     * @private
     */
    function Event() {
        return function (target, key) {
            var eventDescriptor = {
                set: function set(newValue) {
                    var oldValue = this.properties[key];
                    if (oldValue !== newValue) {
                        var finalContext = getParentContext(this, key);
                        if (isUndefined(oldValue) === false) {
                            finalContext.context.removeEventListener(finalContext.prefix, oldValue);
                        }
                        finalContext.context.addEventListener(finalContext.prefix, newValue);
                        this.properties[key] = newValue;
                    }
                },
                get: propertyGetter(undefined, key),
                enumerable: true,
                configurable: true
            };
            Object.defineProperty(target, key, eventDescriptor);
            addPropertyCollection(target, key, 'event');
        };
    }
    /**
     * NotifyPropertyChanges is triggers the call back when the property has been changed.
     *
     * ```
     *  @NotifyPropertyChanges
     * class DemoClass implements INotifyPropertyChanged {
     *
     *     @Property()
     *     property1: string;
     *
     *     dataBind: () => void;
     *
     *     constructor() { }
     *
     *     onPropertyChanged(newProp: any, oldProp: any) {
     *         // Called when property changed
     *     }
     * }
     * ```
     * @private
     */
    function NotifyPropertyChanges(classConstructor) {}
    /** Need to code */

    /**
     * Method  used to create the builderObject for the target component.
     * @private
     */
    function addPropertyCollection(target, key, propertyType, defaultValue, type) {
        if (isUndefined(target.propList)) {
            target.propList = {
                props: [],
                complexProps: [],
                colProps: [],
                events: [],
                propNames: [],
                complexPropNames: [],
                colPropNames: [],
                eventNames: []
            };
        }
        /* tslint:disable no-any */
        target.propList[propertyType + 's'].push({
            propertyName: key,
            defaultValue: defaultValue,
            type: type
        });
        target.propList[propertyType + 'Names'].push(key);
        /* tslint:enable no-any */
    }
    /**
     * Returns an object containing the builder properties
     * @param {Function} component
     * @private
     */
    function getBuilderProperties(component) {
        if (isUndefined(component.prototype.builderObject)) {
            component.prototype.builderObject = {
                properties: {}, propCollections: [], add: function add() {
                    this.isPropertyArray = true;
                    this.propCollections.push(extend({}, this.properties, {}));
                }
            };
            var rex = /complex/;
            var _iteratorNormalCompletion18 = true;
            var _didIteratorError18 = false;
            var _iteratorError18 = undefined;

            try {
                for (var _iterator18 = Object.keys(component.prototype.propList)[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                    var key = _step18.value;

                    var _loop3 = function _loop3(prop) {
                        if (rex.test(key)) {
                            component.prototype.builderObject[prop.propertyName] = function (value) {
                                var childType = {};
                                merge(childType, getBuilderProperties(prop.type));
                                value(childType);
                                var tempValue = void 0;
                                if (!childType.isPropertyArray) {
                                    tempValue = extend({}, childType.properties, {});
                                } else {
                                    tempValue = childType.propCollections;
                                }
                                this.properties[prop.propertyName] = tempValue;
                                childType.properties = {};
                                childType.propCollections = [];
                                childType.isPropertyArray = false;
                                return this;
                            };
                        } else {
                            component.prototype.builderObject[prop.propertyName] = function (value) {
                                this.properties[prop.propertyName] = value;
                                return this;
                            };
                        }
                    };

                    var _iteratorNormalCompletion19 = true;
                    var _didIteratorError19 = false;
                    var _iteratorError19 = undefined;

                    try {
                        for (var _iterator19 = component.prototype.propList[key][Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                            var prop = _step19.value;

                            _loop3(prop);
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
        return component.prototype.builderObject;
    }
    /**
     * Method used to create builder for the components
     * @param {any} component -specifies the target component for which builder to be created.
     * @private
     */
    function CreateBuilder(component) {
        var builderFunction = function builderFunction(element) {
            this.element = element;
            return this;
        };
        var instanceFunction = function instanceFunction(element) {
            if (!builderFunction.prototype.hasOwnProperty('create')) {
                builderFunction.prototype = getBuilderProperties(component);
                builderFunction.prototype.create = function () {
                    var temp = extend({}, {}, this.properties);
                    this.properties = {};
                    return new component(temp, this.element);
                };
            }
            return new builderFunction(element);
        };
        return instanceFunction;
    }
    /**
     * Returns parent options for the object
     * @param {Object} context
     * @param {string} prefix
     * @private
     */
    function getParentContext(context, prefix) {
        if (context.hasOwnProperty('parentObj') === false) {
            return { context: context, prefix: prefix };
        } else {
            var curText = getValue('propName', context);
            if (curText) {
                prefix = curText + '-' + prefix;
            }
            return getParentContext(getValue('parentObj', context), prefix);
        }
    }

    /**
     * Ripple provides material theme's wave effect when an element is clicked
     * ```html
     * <div id='ripple'></div>
     * <script>
     *   rippleEffect(document.getElementById('ripple'));
     * </script>
     * ```
     * @private
     * @param HTMLElement element - Target element
     * @param RippleOptions rippleOptions - Ripple options .
     */
    function rippleEffect(element, rippleOptions, done) {
        var rippleModel = getRippleModel(rippleOptions);
        if (rippleModel.rippleFlag === false || rippleModel.rippleFlag === undefined && !isRippleEnabled) {
            return Function;
        }
        element.setAttribute('data-ripple', 'true');
        EventHandler.add(element, 'mousedown', rippleHandler, { parent: element, rippleOptions: rippleModel });
        EventHandler.add(element, 'mouseup', rippleUpHandler, { parent: element, rippleOptions: rippleModel, done: done });
        EventHandler.add(element, 'mouseleave', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
        if (Browser.isPointer) {
            EventHandler.add(element, 'transitionend', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
        }
        return function () {
            element.removeAttribute('data-ripple');
            EventHandler.remove(element, 'mousedown', rippleHandler);
            EventHandler.remove(element, 'mouseup', rippleUpHandler);
            EventHandler.remove(element, 'mouseleave', rippleLeaveHandler);
            EventHandler.remove(element, 'transitionend', rippleLeaveHandler);
        };
    }
    function getRippleModel(rippleOptions) {
        var rippleModel = {
            selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
            ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
            rippleFlag: rippleOptions && rippleOptions.rippleFlag,
            isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
            duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
        };
        return rippleModel;
    }
    /**
     * Handler for ripple event
     * @param {MouseEvent} e
     * @returns {void}
     * @private
     */
    function rippleHandler(e) {
        var target = e.target;
        var selector = this.rippleOptions.selector;
        var element = selector ? closest(target, selector) : target;
        if (!element || this.rippleOptions && closest(target, this.rippleOptions.ignore)) {
            return;
        }
        var offset = element.getBoundingClientRect();
        var offsetX = e.pageX - document.body.scrollLeft;
        var offsetY = e.pageY - document.body.scrollTop;
        var pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right));
        var pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom));
        var radius = Math.sqrt(pageX * pageX + pageY * pageY);
        var diameter = radius * 2 + 'px';
        var x = offsetX - offset.left - radius;
        var y = offsetY - offset.top - radius;
        if (this.rippleOptions && this.rippleOptions.isCenterRipple) {
            x = 0;
            y = 0;
            diameter = '100%';
        }
        element.classList.add('e-ripple');
        var duration = this.rippleOptions.duration.toString();
        var styles = 'width: ' + diameter + ';height: ' + diameter + ';left: ' + x + 'px;top: ' + y + 'px;' + 'transition-duration: ' + duration + 'ms;';
        var rippleElement = createElement('div', { className: 'e-ripple-element', styles: styles });
        element.appendChild(rippleElement);
        window.getComputedStyle(rippleElement).getPropertyValue('opacity');
        rippleElement.style.transform = 'scale(1)';
        if (element !== this.parent) {
            EventHandler.add(element, 'mouseleave', rippleLeaveHandler, { parent: this.parent, rippleOptions: this.rippleOptions });
        }
    }
    /**
     * Handler for ripple element mouse up event
     * @param {MouseEvent} e
     * @returns {void}
     * @private
     */
    function rippleUpHandler(e) {
        removeRipple(e, this);
    }
    /**
     * Handler for ripple element mouse move event
     * @param {MouseEvent} e
     * @returns {void}
     * @private
     */
    function rippleLeaveHandler(e) {
        removeRipple(e, this);
    }
    /**
     * Handler for removing ripple element
     * @param {MouseEvent} e
     * @param {rippleArgs} eventArgs
     * @returns {void}
     * @private
     */
    function removeRipple(e, eventArgs) {
        var duration = eventArgs.rippleOptions.duration;
        var target = e.target;
        var selector = eventArgs.rippleOptions.selector;
        var element = selector ? closest(target, selector) : target;
        if (!element || element && element.className.indexOf('e-ripple') === -1) {
            return;
        }
        var rippleElements = selectAll('.e-ripple-element', element);
        var rippleElement = rippleElements[rippleElements.length - 1];
        if (rippleElement) {
            rippleElement.style.opacity = '0.5';
        }
        if (eventArgs.parent !== element) {
            EventHandler.remove(element, 'mouseleave', rippleLeaveHandler);
        }
        /* tslint:disable:align */
        setTimeout(function () {
            if (rippleElement && rippleElement.parentNode) {
                rippleElement.parentNode.removeChild(rippleElement);
            }
            if (!element.getElementsByClassName('e-ripple-element').length) {
                element.classList.remove('e-ripple');
            }
            if (eventArgs.done) {
                eventArgs.done(e);
            }
        }, duration);
    }

    /**
     * Animation Module provides support to enable ripple effect functionality to Essential JS 2 components.
     * @param {boolean} isRipple Specifies the boolean value to enable or disable ripple effect.
     * @returns {boolean}
     */
    function enableRipple(isRipple) {
        _export('isRippleEnabled', isRippleEnabled = isRipple);
        return isRippleEnabled;
    }

    /**
     * Set the default culture to all EJ2 components
     * @param {string} cultureName - Specifies the culture name to be set as default culture.
     */
    function setCulture(cultureName) {
        _export('defaultCulture', defaultCulture = cultureName);
        onIntlChange.notify('notifyExternalChange', { 'locale': defaultCulture });
    }
    /**
     * Set the default currency code to all EJ2 components
     * @param {string} currencyCode Specifies the culture name to be set as default culture.
     * @returns {void}
     */
    function setCurrencyCode(currencyCode) {
        _export('defaultCurrencyCode', defaultCurrencyCode = currencyCode);
        onIntlChange.notify('notifyExternalChange', { 'currencyCode': defaultCurrencyCode });
    }
    /**
     * Load the CLDR data into context
     * @param {Object[]} obj Specifies the CLDR data's to be used for formatting and parser.
     * @returns {void}
     */
    function loadCldr() {
        for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
            data[_key] = arguments[_key];
        }

        var _iteratorNormalCompletion32 = true;
        var _didIteratorError32 = false;
        var _iteratorError32 = undefined;

        try {
            for (var _iterator32 = data[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
                var obj = _step32.value;

                extend(cldrData, obj, {}, true);
            }
        } catch (err) {
            _didIteratorError32 = true;
            _iteratorError32 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion32 && _iterator32.return) {
                    _iterator32.return();
                }
            } finally {
                if (_didIteratorError32) {
                    throw _iteratorError32;
                }
            }
        }
    }
    /**
     * To enable or disable RTL functionality for all components globally.
     * @param {boolean} status - Optional argument Specifies the status value to enable or disable rtl option.
     * @returns {void}
     */
    function enableRtl() {
        var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _export('rightToLeft', rightToLeft = status);
        onIntlChange.notify('notifyExternalChange', { enableRtl: rightToLeft });
    }
    /**
     * To get the numeric CLDR object for given culture
     * @param {string} locale - Specifies the locale for which numericObject to be returned.
     * @ignore
     * @private
     */
    function getNumericObject(locale, type) {
        /* tslint:disable no-any */
        var numObject = IntlBase.getDependables(cldrData, locale, true)[mapper[0]];
        var dateObject = IntlBase.getDependables(cldrData, locale)[mapper[1]];
        var numSystem = getValue('defaultNumberingSystem', numObject);
        var symbPattern = getValue('symbols-numberSystem-' + numSystem, numObject);
        var pattern = IntlBase.getSymbolPattern(type || 'decimal', numSystem, numObject, false);
        return extend(symbPattern, IntlBase.getFormatData(pattern, true, '', true), { 'dateSeparator': IntlBase.getDateSeparator(dateObject) });
    }
    /**
     * To get the default date CLDR object.
     * @ignore
     * @private
     */
    function getDefaultDateObject() {
        return IntlBase.getDependables(cldrData, '', false)[mapper[1]];
    }

    // let cachedTemplate: Object = {};
    /**
     * The function to set regular expression for template expression string.
     * @param  {RegExp} value - Value expression.
     * @private
     */

    // /**
    //  * To render the template string from the given data.
    //  * @param  {string} template - String Template.
    //  * @param  {Object[]|JSON} data - DataSource for the template.
    //  * @param  {Object} helper? - custom helper object.
    //  */
    // export function template(template: string, data: JSON, helper?: Object): string {
    //     let hash: string = hashCode(template);
    //     let tmpl: Function;
    //     if (!cachedTemplate[hash]) {
    //         tmpl = cachedTemplate[hash] = compile(template, helper);
    //     } else {
    //         tmpl = cachedTemplate[hash];
    //     }
    //     return tmpl(data);
    // }
    /**
     * Compile the template string into template function.
     * @param  {string} template - The template string which is going to convert.
     * @param  {Object} helper? - Helper functions as an object.
     * @private
     */
    function compile$1(template, helper) {
        var argName = 'data';
        var evalExpResult = evalExp(template, argName, helper);
        var fnCode = 'var str="' + evalExpResult + '"; return str;';
        // tslint:disable-next-line:no-function-constructor-with-string-args
        var fn = new Function(argName, fnCode);
        return fn.bind(helper);
    }
    // function used to evaluate the function expression
    function evalExp(str, nameSpace, helper) {
        /**
         * Variable containing Local Keys
         */
        var localKeys = [];
        return str.replace(LINES, '').replace(DBL_QUOTED_STR, '\'$1\'').replace(exp, function (match, cnt, offset, matchStr) {
            var matches = cnt.match(CALL_FUNCTION);
            // matches to detect any function calls
            if (matches) {
                var rlStr = matches[1];
                if (ELSEIF_STMT.test(cnt)) {
                    //handling else-if condition
                    cnt = '";} ' + cnt.replace(matches[1], rlStr.replace(WORD, function (str) {
                        str = str.trim();
                        return addNameSpace(str, !QUOTES.test(str) && localKeys.indexOf(str) === -1, nameSpace, localKeys);
                    })) + '{ \n str = str + "';
                } else if (IF_STMT.test(cnt)) {
                    //handling if condition
                    cnt = '"; ' + cnt.replace(matches[1], rlStr.replace(WORD, function (strs) {
                        strs = strs.trim();
                        return addNameSpace(strs, !QUOTES.test(strs) && localKeys.indexOf(strs) === -1, nameSpace, localKeys);
                    })) + '{ \n str = str + "';
                } else if (FOR_STMT.test(cnt)) {
                    //handling for condition
                    var _rlStr = matches[1].split(' of ');
                    // replace for each into actual JavaScript
                    cnt = '"; ' + cnt.replace(matches[1], function (mtc) {
                        localKeys.push(_rlStr[0]);
                        localKeys.push(_rlStr[0] + 'Index');
                        return 'var i=0; i < ' + addNameSpace(_rlStr[1], true, nameSpace, localKeys) + '.length; i++';
                    }) + '{ \n ' + _rlStr[0] + '= ' + addNameSpace(_rlStr[1], true, nameSpace, localKeys) + '[i]; \n var ' + _rlStr[0] + 'Index=i; \n str = str + "';
                } else {
                    //helper function handling
                    var fnStr = cnt.split('(');
                    var fNameSpace = helper && helper.hasOwnProperty(fnStr[0]) ? 'this.' : 'global';
                    fNameSpace = /\./.test(fnStr[0]) ? '' : fNameSpace;
                    cnt = '" + ' + (fNameSpace === 'global' ? '' : fNameSpace) + cnt.replace(rlStr, addNameSpace(matches[1].replace(',', nameSpace + '.'), fNameSpace === 'global' ? false : true, nameSpace, localKeys)) + '+"';
                }
            } else if (ELSE_STMT.test(cnt)) {
                //handling else condition
                cnt = '"; ' + cnt.replace(ELSE_STMT, '} else { \n str = str + "');
            } else if (!!cnt.match(IF_OR_FOR)) {
                // close condition 
                cnt = cnt.replace(IF_OR_FOR, '"; \n } \n str = str + "');
            } else {
                // evaluate normal expression
                cnt = '"+' + addNameSpace(cnt, localKeys.indexOf(cnt) === -1, nameSpace, localKeys) + '+"';
            }
            return cnt;
        });
    }
    function addNameSpace(str, addNS, nameSpace, ignoreList) {
        return addNS && !NOT_NUMBER.test(str) && ignoreList.indexOf(str.split('.')[0]) === -1 ? nameSpace + '.' + str : str;
    }
    // // Create hashCode for template string to storeCached function
    // function hashCode(str: string): string {
    //     return str.split('').reduce((a: number, b: string) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0).toString();
    // }

    /**
     * Template Engine Bridge
     */

    /**
     * Compile the template string into template function.
     * @param  {string} templateString - The template string which is going to convert.
     * @param  {Object} helper? - Helper functions as an object.
     * @private
     */
    //tslint:disable-next-line
    function compile$$1(templateString, helper) {
        var compiler = engineObj.compile(templateString, helper);
        //tslint:disable-next-line
        return function (data, component, propName) {
            var result = compiler(data, component, propName);
            if (typeof result === 'string') {
                var ele = createElement(HAS_ROW.test(result) ? 'table' : 'div', { innerHTML: result });
                return ele.childNodes;
            } else {
                return result;
            }
        };
    }
    /**
     * Set your custom template engine for template rendering.
     * @param  {ITemplateEngine} classObj - Class object for custom template.
     * @private
     */
    function setTemplateEngine(classObj) {
        engineObj.compile = classObj.compile;
    }
    /**
     * Get current template engine for template rendering.
     * @param  {ITemplateEngine} classObj - Class object for custom template.
     * @private
     */
    function getTemplateEngine() {
        return engineObj.compile;
    }
    //Default Engine Class
    return {
        setters: [],
        execute: function () {
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

            instances = 'ej2_instances';
            uid = 0;
            headerRegex = /^(.*?):[ \t]*([^\r\n]*)$/gm;
            defaultType = 'GET';

            _export('Ajax', Ajax = function () {
                /**
                 * Constructor for Ajax class
                 * @param  {string|Object} options?
                 * @param  {string} type?
                 * @param  {boolean} async?
                 * @returns defaultType
                 */
                function Ajax(options, type, async) {
                    _classCallCheck(this, Ajax);

                    /**
                     * A boolean value indicating whether the request should be sent asynchronous or not.
                     * @default true
                     */
                    this.mode = true;
                    this.options = {};
                    if (typeof options === 'string') {
                        this.url = options;
                        this.type = type ? type.toUpperCase() : defaultType;
                        this.mode = !isNullOrUndefined(async) ? async : true;
                    } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
                        this.options = options;
                        merge(this, this.options);
                    }
                    this.type = this.type ? this.type.toUpperCase() : defaultType;
                }
                /**
                 * Send the request to server.
                 * @param {any} data - To send the user data
                 * @return {Promise}
                 */


                _createClass(Ajax, [{
                    key: 'send',
                    value: function send(data) {
                        var _this2 = this;

                        this.data = isNullOrUndefined(data) ? this.data : data;
                        var promise = new Promise(function (resolve, reject) {
                            _this2.httpRequest = new XMLHttpRequest();
                            _this2.httpRequest.onreadystatechange = function () {
                                _this2.stateChange(resolve, reject);
                            };
                            _this2.httpRequest.open(_this2.type, _this2.url, _this2.mode);
                            // Set default headers
                            if (!isNullOrUndefined(_this2.data)) {
                                _this2.httpRequest.setRequestHeader('Content-Type', _this2.contentType || 'application/json; charset=utf-8');
                            }
                            if (_this2.beforeSend) {
                                _this2.beforeSend();
                            }
                            _this2.httpRequest.send(!isNullOrUndefined(_this2.data) ? _this2.data : null);
                        });
                        return promise;
                    }
                }, {
                    key: 'successHandler',
                    value: function successHandler(data) {
                        if (this.onSuccess) {
                            this.onSuccess(data, this);
                        }
                        return data;
                    }
                }, {
                    key: 'failureHandler',
                    value: function failureHandler(reason) {
                        if (this.onFailure) {
                            this.onFailure(this.httpRequest);
                        }
                        return reason;
                    }
                }, {
                    key: 'stateChange',
                    value: function stateChange(resolve, reject) {
                        var data = this.httpRequest.responseText;
                        if (this.dataType && this.dataType.toLowerCase() === 'json') {
                            if (data === '') {
                                data = undefined;
                            } else {
                                try {
                                    data = JSON.parse(data);
                                } catch (error) {
                                    // no exception handle
                                }
                            }
                        }
                        if (this.httpRequest.readyState === 4) {
                            if (this.httpRequest.status === 200 || this.httpRequest.status === 304) {
                                resolve(this.successHandler(data));
                            } else {
                                reject(new Error(this.failureHandler(this.httpRequest.statusText)));
                            }
                        }
                    }
                }, {
                    key: 'getResponseHeader',
                    value: function getResponseHeader(key) {
                        var responseHeaders = void 0;
                        var header = void 0;
                        responseHeaders = {};
                        var headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
                        while (headers) {
                            responseHeaders[headers[1].toLowerCase()] = headers[2];
                            headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
                        }
                        header = responseHeaders[key.toLowerCase()];
                        return isNullOrUndefined(header) ? null : header;
                    }
                }]);

                return Ajax;
            }());

            _export('EventHandler', EventHandler = function () {
                function EventHandler() {
                    _classCallCheck(this, EventHandler);
                }

                _createClass(EventHandler, null, [{
                    key: 'addOrGetEventData',
                    value: function addOrGetEventData(element) {
                        if ('__eventList' in element) {
                            return element.__eventList.events;
                        } else {
                            element.__eventList = {};
                            return element.__eventList.events = [];
                        }
                    }
                }, {
                    key: 'add',
                    value: function add(element, eventName, listener, bindTo, intDebounce) {
                        var eventData = EventHandler.addOrGetEventData(element);
                        var debounceListener = void 0;
                        if (intDebounce) {
                            debounceListener = debounce(listener, intDebounce);
                        } else {
                            debounceListener = listener;
                        }
                        if (bindTo) {
                            debounceListener = debounceListener.bind(bindTo);
                        }
                        var event = eventName.split(' ');
                        for (var i = 0; i < event.length; i++) {
                            eventData.push({
                                name: event[i],
                                listener: listener,
                                debounce: debounceListener
                            });
                            element.addEventListener(event[i], debounceListener);
                        }
                        return debounceListener;
                    }
                }, {
                    key: 'remove',
                    value: function remove(element, eventName, listener) {
                        var eventData = EventHandler.addOrGetEventData(element);
                        var event = eventName.split(' ');

                        var _loop2 = function _loop2(j) {
                            var index = -1;
                            var debounceListener = void 0;
                            if (eventData && eventData.length !== 0) {
                                eventData.some(function (x, i) {
                                    return x.name === event[j] && x.listener === listener ? (index = i, debounceListener = x.debounce, true) : false;
                                });
                            }
                            if (index !== -1) {
                                eventData.splice(index, 1);
                            }
                            if (debounceListener) {
                                element.removeEventListener(event[j], debounceListener);
                            }
                        };

                        for (var j = 0; j < event.length; j++) {
                            _loop2(j);
                        }
                    }
                }, {
                    key: 'clearEvents',
                    value: function clearEvents(element) {
                        var eventData = void 0;
                        var copyData = void 0;
                        eventData = EventHandler.addOrGetEventData(element);
                        copyData = extend([], copyData, eventData);
                        for (var i = 0; i < copyData.length; i++) {
                            element.removeEventListener(copyData[i].name, copyData[i].debounce);
                            eventData.shift();
                        }
                    }
                }, {
                    key: 'trigger',
                    value: function trigger(element, eventName, eventProp) {
                        var eventData = EventHandler.addOrGetEventData(element);
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = eventData[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var event = _step4.value;

                                if (event.name === eventName) {
                                    event.debounce.call(this, eventProp);
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
                }]);

                return EventHandler;
            }());

            Observer = function () {
                function Observer(context) {
                    _classCallCheck(this, Observer);

                    this.ranArray = [];
                    this.boundedEvents = {};
                    if (isNullOrUndefined(context)) {
                        return;
                    }
                    this.context = context;
                }

                _createClass(Observer, [{
                    key: 'on',
                    value: function on(property, handler, context, id) {
                        if (isNullOrUndefined(handler)) {
                            return;
                        }
                        var cntxt = context || this.context;
                        if (this.notExist(property)) {
                            this.boundedEvents[property] = [{ handler: handler, context: cntxt }];
                            return;
                        }
                        if (!isNullOrUndefined(id)) {
                            if (this.ranArray.indexOf(id) === -1) {
                                this.ranArray.push(id);
                                this.boundedEvents[property].push({ handler: handler, context: cntxt, id: id });
                            }
                        } else if (!this.isHandlerPresent(this.boundedEvents[property], handler)) {
                            this.boundedEvents[property].push({ handler: handler, context: cntxt });
                        }
                    }
                }, {
                    key: 'off',
                    value: function off(property, handler, id) {
                        if (this.notExist(property)) {
                            return;
                        }
                        var curObject = getValue(property, this.boundedEvents);
                        if (handler) {
                            for (var i = 0; i < curObject.length; i++) {
                                if (id) {
                                    curObject.splice(i, 1);
                                    var indexLocation = this.ranArray.indexOf(id);
                                    if (indexLocation !== -1) {
                                        this.ranArray.splice(indexLocation, 1);
                                    }
                                    break;
                                } else if (handler === curObject[i].handler) {
                                    curObject.splice(i, 1);
                                    break;
                                }
                            }
                        } else {
                            delete this.boundedEvents[property];
                        }
                    }
                }, {
                    key: 'notify',
                    value: function notify(property, argument) {
                        if (this.notExist(property)) {
                            return;
                        }
                        if (argument) {
                            argument.name = property;
                        }
                        var curObject = getValue(property, this.boundedEvents).slice(0);
                        var _iteratorNormalCompletion13 = true;
                        var _didIteratorError13 = false;
                        var _iteratorError13 = undefined;

                        try {
                            for (var _iterator13 = curObject[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                var cur = _step13.value;

                                cur.handler.call(cur.context, argument);
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
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.boundedEvents = this.context = undefined;
                    }
                }, {
                    key: 'notExist',
                    value: function notExist(prop) {
                        return this.boundedEvents.hasOwnProperty(prop) === false;
                    }
                }, {
                    key: 'isHandlerPresent',
                    value: function isHandlerPresent(boundedEvents, handler) {
                        var _iteratorNormalCompletion14 = true;
                        var _didIteratorError14 = false;
                        var _iteratorError14 = undefined;

                        try {
                            for (var _iterator14 = boundedEvents[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                                var cur = _step14.value;

                                if (cur.handler === handler) {
                                    return true;
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

                        return false;
                    }
                }]);

                return Observer;
            }();

            _export('Base', Base = function () {
                /**
                 * Base constructor accept options and element
                 */
                function Base(options, element) {
                    _classCallCheck(this, Base);

                    this.isProtectedOnChange = true;
                    this.properties = {};
                    this.changedProperties = {};
                    this.oldProperties = {};
                    this.refreshing = false;
                    // tslint:disable-next-line:no-empty
                    this.finalUpdate = function () {};
                    this.childChangedProperties = {};
                    this.modelObserver = new Observer(this);
                    if (!isUndefined(element)) {
                        if ('string' === typeof element) {
                            this.element = document.querySelector(element);
                        } else {
                            this.element = element;
                        }
                        if (!isNullOrUndefined(this.element)) {
                            this.isProtectedOnChange = false;
                            this.addInstance();
                        }
                    }
                    if (!isUndefined(options)) {
                        this.setProperties(options, true);
                    }
                    this.isDestroyed = false;
                }
                /** Property base section */
                /**
                 * Function used to set bunch of property at a time.
                 * @private
                 * @param  {Object} prop - JSON object which holds components properties.
                 * @param  {boolean} muteOnChange? - Specifies to true when we set properties.
                 */


                _createClass(Base, [{
                    key: 'setProperties',
                    value: function setProperties(prop, muteOnChange) {
                        var prevDetection = this.isProtectedOnChange;
                        this.isProtectedOnChange = !!muteOnChange;
                        merge(this, prop);
                        if (muteOnChange !== true) {
                            merge(this.changedProperties, prop);
                            this.dataBind();
                        }
                        this.finalUpdate();
                        this.changedProperties = {};
                        this.oldProperties = {};
                        this.isProtectedOnChange = prevDetection;
                    }
                }, {
                    key: 'clearChanges',
                    value: function clearChanges() {
                        this.finalUpdate();
                        this.changedProperties = {};
                        this.oldProperties = {};
                        this.childChangedProperties = {};
                    }
                }, {
                    key: 'dataBind',
                    value: function dataBind() {
                        Base.callChildDataBind(this.childChangedProperties, this);
                        if (Object.getOwnPropertyNames(this.changedProperties).length) {
                            var prevDetection = this.isProtectedOnChange;
                            var newChanges = this.changedProperties;
                            var oldChanges = this.oldProperties;
                            this.clearChanges();
                            this.isProtectedOnChange = true;
                            this.onPropertyChanged(newChanges, oldChanges);
                            this.isProtectedOnChange = prevDetection;
                        }
                    }
                }, {
                    key: 'saveChanges',
                    value: function saveChanges(key, newValue, oldValue) {
                        if (this.isProtectedOnChange) {
                            return;
                        }
                        this.oldProperties[key] = oldValue;
                        this.changedProperties[key] = newValue;
                        this.finalUpdate();
                        this.finalUpdate = setImmediate(this.dataBind.bind(this));
                    }
                }, {
                    key: 'addEventListener',
                    value: function addEventListener(eventName, handler) {
                        this.modelObserver.on(eventName, handler);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener(eventName, handler) {
                        this.modelObserver.off(eventName, handler);
                    }
                }, {
                    key: 'trigger',
                    value: function trigger(eventName, eventProp) {
                        if (this.isDestroyed !== true) {
                            var prevDetection = this.isProtectedOnChange;
                            this.isProtectedOnChange = false;
                            this.modelObserver.notify(eventName, eventProp);
                            this.isProtectedOnChange = prevDetection;
                        }
                    }
                }, {
                    key: 'addInstance',
                    value: function addInstance() {
                        // Add module class to the root element
                        var moduleClass = 'e-' + this.getModuleName().toLowerCase();
                        addClass([this.element], ['e-control', moduleClass]);
                        if (!isNullOrUndefined(this.element.ej2_instances)) {
                            this.element.ej2_instances.push(this);
                        } else {
                            setValue('ej2_instances', [this], this.element);
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this3 = this;

                        this.element.ej2_instances = this.element.ej2_instances.filter(function (i) {
                            return i !== _this3;
                        });
                        removeClass([this.element], ['e-' + this.getModuleName()]);
                        if (this.element.ej2_instances.length === 0) {
                            // Remove module class from the root element
                            removeClass([this.element], ['e-control']);
                        }
                        this.clearChanges();
                        this.modelObserver.destroy();
                        this.isDestroyed = true;
                    }
                }], [{
                    key: 'callChildDataBind',
                    value: function callChildDataBind(obj, parent) {
                        var keys = Object.keys(obj);
                        var _iteratorNormalCompletion15 = true;
                        var _didIteratorError15 = false;
                        var _iteratorError15 = undefined;

                        try {
                            for (var _iterator15 = keys[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                                var key = _step15.value;

                                if (parent[key] instanceof Array) {
                                    var _iteratorNormalCompletion16 = true;
                                    var _didIteratorError16 = false;
                                    var _iteratorError16 = undefined;

                                    try {
                                        for (var _iterator16 = parent[key][Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                                            var _obj = _step16.value;

                                            if (_obj.dataBind !== undefined) {
                                                _obj.dataBind();
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
                                } else {
                                    parent[key].dataBind();
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
                }]);

                return Base;
            }());

            REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
            REGX_IE = /msie|trident/i;
            REGX_IE11 = /Trident\/7\./;
            REGX_IOS = /(ipad|iphone|ipod touch)/i;
            REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i;
            REGX_ANDROID = /android/i;
            REGX_WINDOWS = /trident|windows phone|edge/i;
            REGX_VERSION = /(version)[ \/]([\w.]+)/i;
            REGX_BROWSER = {
                OPERA: /(opera|opr)(?:.*version|)[ \/]([\w.]+)/i,
                EDGE: /(edge)(?:.*version|)[ \/]([\w.]+)/i,
                CHROME: /(chrome|crios)[ \/]([\w.]+)/i,
                PANTHOMEJS: /(phantomjs)[ \/]([\w.]+)/i,
                SAFARI: /(safari)[ \/]([\w.]+)/i,
                WEBKIT: /(webkit)[ \/]([\w.]+)/i,
                MSIE: /(msie|trident) ([\w.]+)/i,
                MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
            };

            /* istanbul ignore else  */
            if (typeof window !== 'undefined') {
                window.browserDetails = window.browserDetails || {};
            }
            /**
             * Get configuration details for Browser
             * @private
             */

            _export('Browser', Browser = function () {
                function Browser() {
                    _classCallCheck(this, Browser);
                }

                _createClass(Browser, null, [{
                    key: 'extractBrowserDetail',
                    value: function extractBrowserDetail() {
                        var browserInfo = { culture: {} };
                        var keys = Object.keys(REGX_BROWSER);
                        var clientInfo = [];
                        var _iteratorNormalCompletion17 = true;
                        var _didIteratorError17 = false;
                        var _iteratorError17 = undefined;

                        try {
                            for (var _iterator17 = keys[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                                var key = _step17.value;

                                clientInfo = Browser.userAgent.match(REGX_BROWSER[key]);
                                if (clientInfo) {
                                    browserInfo.name = clientInfo[1].toLowerCase() === 'opr' ? 'opera' : clientInfo[1].toLowerCase();
                                    browserInfo.name = clientInfo[1].toLowerCase() === 'crios' ? 'chrome' : browserInfo.name;
                                    browserInfo.version = clientInfo[2];
                                    browserInfo.culture.name = browserInfo.culture.language = navigator.language;
                                    if (!!Browser.userAgent.match(REGX_IE11)) {
                                        browserInfo.name = 'msie';
                                        break;
                                    }
                                    var version = Browser.userAgent.match(REGX_VERSION);
                                    if (browserInfo.name === 'safari' && version) {
                                        browserInfo.version = version[2];
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

                        return browserInfo;
                    }
                }, {
                    key: 'getEvent',
                    value: function getEvent(event) {
                        // tslint:disable-next-line:no-any
                        var events = {
                            start: {
                                isPointer: 'pointerdown', isTouch: 'touchstart', isDevice: 'mousedown'
                            },
                            move: {
                                isPointer: 'pointermove', isTouch: 'touchmove', isDevice: 'mousemove'
                            },
                            end: {
                                isPointer: 'pointerup', isTouch: 'touchend', isDevice: 'mouseup'
                            }
                        };
                        return Browser.isPointer ? events[event].isPointer : Browser.isTouch ? events[event].isTouch + (!Browser.isDevice ? ' ' + events[event].isDevice : '') : events[event].isDevice;
                    }
                }, {
                    key: 'getTouchStartEvent',
                    value: function getTouchStartEvent() {
                        return Browser.getEvent('start');
                    }
                }, {
                    key: 'getTouchEndEvent',
                    value: function getTouchEndEvent() {
                        return Browser.getEvent('end');
                    }
                }, {
                    key: 'getTouchMoveEvent',
                    value: function getTouchMoveEvent() {
                        return Browser.getEvent('move');
                    }
                }, {
                    key: 'getValue',
                    value: function getValue(key, regX) {
                        var browserDetails = window.browserDetails;
                        if ('undefined' === typeof browserDetails[key]) {
                            return browserDetails[key] = regX.test(Browser.userAgent);
                        }
                        return browserDetails[key];
                    }
                }, {
                    key: 'userAgent',
                    set: function set(uA) {
                        Browser.uA = uA;
                        window.browserDetails = {};
                    },
                    get: function get() {
                        return Browser.uA;
                    }
                }, {
                    key: 'info',
                    get: function get() {
                        if (isUndefined(window.browserDetails.info)) {
                            return window.browserDetails.info = Browser.extractBrowserDetail();
                        }
                        return window.browserDetails.info;
                    }
                }, {
                    key: 'isIE',
                    get: function get() {
                        return Browser.getValue('isIE', REGX_IE);
                    }
                }, {
                    key: 'isTouch',
                    get: function get() {
                        if (isUndefined(window.browserDetails.isTouch)) {
                            return window.browserDetails.isTouch = 'ontouchstart' in window;
                        }
                        return window.browserDetails.isTouch;
                    }
                }, {
                    key: 'isPointer',
                    get: function get() {
                        if (isUndefined(window.browserDetails.isPointer)) {
                            return window.browserDetails.isPointer = 'pointerEnabled' in window.navigator;
                        }
                        return window.browserDetails.isPointer;
                    }
                }, {
                    key: 'isMSPointer',
                    get: function get() {
                        if (isUndefined(window.browserDetails.isMSPointer)) {
                            return window.browserDetails.isMSPointer = 'msPointerEnabled' in window.navigator;
                        }
                        return window.browserDetails.isMSPointer;
                    }
                }, {
                    key: 'isDevice',
                    get: function get() {
                        return Browser.getValue('isDevice', REGX_MOBILE);
                    }
                }, {
                    key: 'isIos',
                    get: function get() {
                        return Browser.getValue('isIos', REGX_IOS);
                    }
                }, {
                    key: 'isIos7',
                    get: function get() {
                        return Browser.getValue('isIos7', REGX_IOS7);
                    }
                }, {
                    key: 'isAndroid',
                    get: function get() {
                        return Browser.getValue('isAndroid', REGX_ANDROID);
                    }
                }, {
                    key: 'isWebView',
                    get: function get() {
                        if (isUndefined(window.browserDetails.isWebView)) {
                            window.browserDetails.isWebView = !(isUndefined(window.cordova) && isUndefined(window.PhoneGap) && isUndefined(window.phonegap) && window.forge !== 'object');
                            return window.browserDetails.isWebView;
                        }
                        return window.browserDetails.isWebView;
                    }
                }, {
                    key: 'isWindows',
                    get: function get() {
                        return Browser.getValue('isWindows', REGX_WINDOWS);
                    }
                }, {
                    key: 'touchStartEvent',
                    get: function get() {
                        if (isUndefined(window.browserDetails.touchStartEvent)) {
                            return window.browserDetails.touchStartEvent = Browser.getTouchStartEvent();
                        }
                        return window.browserDetails.touchStartEvent;
                    }
                }, {
                    key: 'touchMoveEvent',
                    get: function get() {
                        if (isUndefined(window.browserDetails.touchMoveEvent)) {
                            return window.browserDetails.touchMoveEvent = Browser.getTouchMoveEvent();
                        }
                        return window.browserDetails.touchMoveEvent;
                    }
                }, {
                    key: 'touchEndEvent',
                    get: function get() {
                        if (isUndefined(window.browserDetails.touchEndEvent)) {
                            return window.browserDetails.touchEndEvent = Browser.getTouchEndEvent();
                        }
                        return window.browserDetails.touchEndEvent;
                    }
                }]);

                return Browser;
            }());

            /* istanbul ignore next */
            Browser.uA = typeof navigator !== 'undefined' ? navigator.userAgent : '';
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('Animation', Animation = Animation_1 = function (_Base) {
                _inherits(Animation, _Base);

                function Animation(options) {
                    _classCallCheck(this, Animation);

                    var _this4 = _possibleConstructorReturn(this, (Animation.__proto__ || Object.getPrototypeOf(Animation)).call(this, options, undefined));

                    /**
                     * @private
                     */
                    _this4.easing = {
                        ease: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
                        linear: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
                        easeIn: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
                        easeOut: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
                        easeInOut: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
                        elasticInOut: 'cubic-bezier(0.5,-0.58,0.38,1.81)',
                        elasticIn: 'cubic-bezier(0.17,0.67,0.59,1.81)',
                        elasticOut: 'cubic-bezier(0.7,-0.75,0.99,1.01)'
                    };
                    return _this4;
                }
                /**
                 * Applies animation to the current element.
                 * @param {string | HTMLElement} element - Element which needs to be animated.
                 * @param {AnimationModel} options - Overriding default animation settings.
                 * @return {void}
                 */


                _createClass(Animation, [{
                    key: 'animate',
                    value: function animate(element, options) {
                        options = !options ? {} : options;
                        var model = this.getModel(options);
                        if (typeof element === 'string') {
                            var elements = Array.prototype.slice.call(selectAll(element, document));
                            var _iteratorNormalCompletion20 = true;
                            var _didIteratorError20 = false;
                            var _iteratorError20 = undefined;

                            try {
                                for (var _iterator20 = elements[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                                    var _element = _step20.value;

                                    model.element = _element;
                                    Animation_1.delayAnimation(model);
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
                            model.element = element;
                            Animation_1.delayAnimation(model);
                        }
                    }
                }, {
                    key: 'getModel',
                    value: function getModel(options) {
                        return {
                            name: options.name || this.name,
                            delay: options.delay || this.delay,
                            duration: options.duration !== undefined ? options.duration : this.duration,
                            begin: options.begin || this.begin,
                            end: options.end || this.end,
                            fail: options.fail || this.fail,
                            progress: options.progress || this.progress,
                            timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] : options.timingFunction || this.easing[this.timingFunction]
                        };
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {}
                    // no code needed

                    /**
                     * Returns module name as animation
                     * @private
                     */

                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'animation';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        //Override base destroy;
                    }
                }], [{
                    key: 'stop',
                    value: function stop(element, model) {
                        element.style.animation = '';
                        element.removeAttribute('e-animate');
                        var animationId = element.getAttribute('e-animation-id');
                        if (animationId) {
                            var frameId = parseInt(animationId, 10);
                            cancelAnimationFrame(frameId);
                            element.removeAttribute('e-animation-id');
                        }
                        if (model && model.end) {
                            model.end.call(this, model);
                        }
                    }
                }, {
                    key: 'delayAnimation',
                    value: function delayAnimation(model) {
                        if (model.delay) {
                            setTimeout(function () {
                                Animation_1.applyAnimation(model);
                            }, model.delay);
                        } else {
                            Animation_1.applyAnimation(model);
                        }
                    }
                }, {
                    key: 'applyAnimation',
                    value: function applyAnimation(model) {
                        var _this5 = this;

                        model.timeStamp = 0;
                        var step = 0;
                        var timerId = 0;
                        var startTime = 0;
                        var prevTimeStamp = 0;
                        var duration = model.duration;
                        model.element.setAttribute('e-animate', 'true');
                        var startAnimation = function startAnimation(timeStamp) {
                            try {
                                if (timeStamp) {
                                    // let step: number = model.timeStamp = timeStamp - startTime;
                                    /** phantomjs workaround for timestamp fix */
                                    prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
                                    model.timeStamp = timeStamp + model.timeStamp - prevTimeStamp;
                                    prevTimeStamp = timeStamp;
                                    /** phantomjs workaround end */
                                    // trigger animation begin event
                                    if (!step && model.begin) {
                                        model.begin.call(_this5, model);
                                    }
                                    step = step + 1;
                                    var avg = model.timeStamp / step;
                                    if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute('e-animate')) {
                                        // apply animation effect to the current element                
                                        model.element.style.animation = model.name + ' ' + model.duration + 'ms ' + model.timingFunction;
                                        if (model.progress) {
                                            model.progress.call(_this5, model);
                                        }
                                        // repeat requestAnimationFrame 
                                        requestAnimationFrame(startAnimation);
                                    } else {
                                        // clear requestAnimationFrame
                                        cancelAnimationFrame(timerId);
                                        model.element.removeAttribute('e-animation-id');
                                        model.element.removeAttribute('e-animate');
                                        model.element.style.animation = '';
                                        if (model.end) {
                                            model.end.call(_this5, model);
                                        }
                                    }
                                } else {
                                    startTime = performance.now();
                                    // set initial requestAnimationFrame
                                    timerId = requestAnimationFrame(startAnimation);
                                    model.element.setAttribute('e-animation-id', timerId.toString());
                                }
                            } catch (e) {
                                cancelAnimationFrame(timerId);
                                model.element.removeAttribute('e-animation-id');
                                if (model.fail) {
                                    model.fail.call(_this5, e);
                                }
                            }
                        };
                        startAnimation();
                    }
                }]);

                return Animation;
            }(Base));

            __decorate([Property('FadeIn')], Animation.prototype, "name", void 0);
            __decorate([Property(400)], Animation.prototype, "duration", void 0);
            __decorate([Property('ease')], Animation.prototype, "timingFunction", void 0);
            __decorate([Property(0)], Animation.prototype, "delay", void 0);
            __decorate([Event()], Animation.prototype, "progress", void 0);
            __decorate([Event()], Animation.prototype, "begin", void 0);
            __decorate([Event()], Animation.prototype, "end", void 0);
            __decorate([Event()], Animation.prototype, "fail", void 0);
            _export('Animation', Animation = Animation_1 = __decorate([NotifyPropertyChanges], Animation));
            _export('isRippleEnabled', isRippleEnabled = false);

            _export('CanvasRenderer', CanvasRenderer = function () {
                /* End-Properties */
                function CanvasRenderer(rootID) {
                    _classCallCheck(this, CanvasRenderer);

                    this.rootId = rootID;
                }
                // method to get the attributes value
                /* tslint:disable */


                _createClass(CanvasRenderer, [{
                    key: 'getOptionValue',
                    value: function getOptionValue(options, key) {
                        return options[key];
                    }
                }, {
                    key: 'createCanvas',
                    value: function createCanvas(options) {
                        var canvasObj = document.createElement('canvas');
                        canvasObj.setAttribute('id', this.rootId + '_canvas');
                        this.ctx = canvasObj.getContext('2d');
                        this.canvasObj = canvasObj;
                        this.setCanvasSize(options.width, options.height);
                        return this.canvasObj;
                    }
                }, {
                    key: 'setCanvasSize',
                    value: function setCanvasSize(width, height) {
                        var element = document.getElementById(this.rootId);
                        var size = !isNullOrUndefined(element) ? element.getBoundingClientRect() : null;
                        if (isNullOrUndefined(this.width)) {
                            this.canvasObj.setAttribute('width', width ? width.toString() : size.width.toString());
                        } else {
                            this.canvasObj.setAttribute('width', this.width.toString());
                        }
                        if (isNullOrUndefined(this.height)) {
                            this.canvasObj.setAttribute('height', height ? height.toString() : '450');
                        } else {
                            this.canvasObj.setAttribute('height', this.height.toString());
                        }
                    }
                }, {
                    key: 'setAttributes',
                    value: function setAttributes(options) {
                        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
                        var dashArray = this.getOptionValue(options, 'stroke-dasharray');
                        if (!isNullOrUndefined(dashArray)) {
                            var dashArrayString = dashArray.split(',');
                            this.ctx.setLineDash([parseInt(dashArrayString[0], 10), parseInt(dashArrayString[1], 10)]);
                        }
                        this.ctx.strokeStyle = this.getOptionValue(options, 'stroke');
                    }
                }, {
                    key: 'drawLine',
                    value: function drawLine(options) {
                        this.ctx.save();
                        this.ctx.beginPath();
                        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
                        this.ctx.strokeStyle = options.stroke;
                        this.ctx.moveTo(options.x1, options.y1);
                        this.ctx.lineTo(options.x2, options.y2);
                        this.ctx.stroke();
                        this.ctx.restore();
                        this.dataUrl = this.canvasObj.toDataURL();
                    }
                }, {
                    key: 'drawRectangle',
                    value: function drawRectangle(options) {
                        var canvasCtx = this.ctx;
                        var cornerRadius = options.rx;
                        this.ctx.save();
                        this.ctx.beginPath();
                        this.ctx.globalAlpha = this.getOptionValue(options, 'opacity');
                        this.setAttributes(options);
                        this.ctx.rect(options.x, options.y, options.width, options.height);
                        if (cornerRadius !== null && cornerRadius >= 0) {
                            this.drawCornerRadius(options);
                        } else {
                            if (options.fill === 'none') {
                                options.fill = 'transparent';
                            }
                            this.ctx.fillStyle = options.fill;
                            this.ctx.fillRect(options.x, options.y, options.width, options.height);
                            this.ctx.stroke();
                        }
                        this.ctx.restore();
                        this.ctx = canvasCtx;
                        this.dataUrl = this.canvasObj.toDataURL();
                    }
                }, {
                    key: 'drawCornerRadius',
                    value: function drawCornerRadius(options) {
                        var cornerRadius = options.rx;
                        var x = options.x;
                        var y = options.y;
                        var width = options.width;
                        var height = options.height;
                        if (options.fill === 'none') {
                            options.fill = 'transparent';
                        }
                        this.ctx.fillStyle = options.fill;
                        if (width < 2 * cornerRadius) {
                            cornerRadius = width / 2;
                        }
                        if (height < 2 * cornerRadius) {
                            cornerRadius = height / 2;
                        }
                        this.ctx.beginPath();
                        this.ctx.moveTo(x + width - cornerRadius, y);
                        this.ctx.arcTo(x + width, y, x + width, y + height, cornerRadius);
                        this.ctx.arcTo(x + width, y + height, x, y + height, cornerRadius);
                        this.ctx.arcTo(x, y + height, x, y, cornerRadius);
                        this.ctx.arcTo(x, y, x + width, y, cornerRadius);
                        this.ctx.closePath();
                        this.ctx.fill();
                        this.ctx.stroke();
                        this.dataUrl = this.canvasObj.toDataURL();
                    }
                }, {
                    key: 'drawPath',
                    value: function drawPath(options, canvasTranslate) {
                        var path = options.d;
                        var dataSplit = path.split(' ');
                        var borderWidth = this.getOptionValue(options, 'stroke-width');
                        var canvasCtx = this.ctx;
                        var flag = true;
                        this.ctx.save();
                        this.ctx.beginPath();
                        if (canvasTranslate) {
                            this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
                        }
                        this.ctx.globalAlpha = options.opacity ? options.opacity : this.getOptionValue(options, 'fill-opacity');
                        this.setAttributes(options);
                        for (var i = 0; i < dataSplit.length; i = i + 3) {
                            var x1 = parseFloat(dataSplit[i + 1]);
                            var y1 = parseFloat(dataSplit[i + 2]);
                            switch (dataSplit[i]) {
                                case 'M':
                                    if (!options.innerR && !options.cx) {
                                        this.ctx.moveTo(x1, y1);
                                    }
                                    break;
                                case 'L':
                                    if (!options.innerR) {
                                        this.ctx.lineTo(x1, y1);
                                    }
                                    break;
                                case 'C':
                                    var c1 = parseFloat(dataSplit[i + 3]);
                                    var c2 = parseFloat(dataSplit[i + 4]);
                                    var c3 = parseFloat(dataSplit[i + 5]);
                                    var c4 = parseFloat(dataSplit[i + 6]);
                                    this.ctx.bezierCurveTo(x1, y1, c1, c2, c3, c4);
                                    i = i + 4;
                                    break;
                                case 'A':
                                    if (!options.innerR) {
                                        if (options.cx) {
                                            this.ctx.arc(options.cx, options.cy, options.radius, 0, 2 * Math.PI, options.counterClockWise);
                                        } else {
                                            this.ctx.moveTo(options.x, options.y);
                                            this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                                            this.ctx.lineTo(options.x, options.y);
                                        }
                                    } else if (flag) {
                                        this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                                        this.ctx.arc(options.x, options.y, options.innerR, options.end, options.start, !options.counterClockWise);
                                        flag = false;
                                    }
                                    i = i + 5;
                                    break;
                                case 'z':
                                    this.ctx.closePath();
                                    break;
                            }
                        }
                        if (options.fill !== 'none' && options.fill !== undefined) {
                            this.ctx.fillStyle = options.fill;
                            this.ctx.fill();
                        }
                        if (borderWidth > 0) {
                            this.ctx.stroke();
                        }
                        this.ctx.restore();
                        this.ctx = canvasCtx;
                        this.dataUrl = this.canvasObj.toDataURL();
                    }
                }, {
                    key: 'drawText',
                    value: function drawText(options, label) {
                        var fontWeight = this.getOptionValue(options, 'font-weight');
                        if (!isNullOrUndefined(fontWeight) && fontWeight.toLowerCase() === 'regular') {
                            fontWeight = 'normal';
                        }
                        var fontSize = this.getOptionValue(options, 'font-size');
                        var fontFamily = this.getOptionValue(options, 'font-family');
                        var fontStyle = this.getOptionValue(options, 'font-style').toLowerCase();
                        var font = fontStyle + ' ' + fontWeight + ' ' + fontSize + ' ' + fontFamily;
                        var anchor = this.getOptionValue(options, 'text-anchor');
                        var opacity = options.opacity !== undefined ? options.opacity : 1;
                        if (anchor === 'middle') {
                            anchor = 'center';
                        }
                        this.ctx.save();
                        this.ctx.fillStyle = options.fill;
                        this.ctx.font = font;
                        this.ctx.textAlign = anchor;
                        this.ctx.globalAlpha = opacity;
                        if (options.baseline) {
                            this.ctx.textBaseline = options.baseline;
                        }
                        var txtlngth = 0;
                        this.ctx.translate(options.x + txtlngth / 2, options.y);
                        this.ctx.rotate(options.labelRotation * Math.PI / 180);
                        this.ctx.fillText(label, 0, 0);
                        this.ctx.restore();
                        this.dataUrl = this.canvasObj.toDataURL();
                    }
                }, {
                    key: 'drawCircle',
                    value: function drawCircle(options) {
                        var canvasCtx = this.ctx;
                        this.ctx.save();
                        this.ctx.beginPath();
                        this.ctx.arc(options.cx, options.cy, options.r, 0, 2 * Math.PI);
                        this.ctx.fillStyle = options.fill;
                        this.ctx.globalAlpha = options.opacity;
                        this.ctx.fill();
                        this.setAttributes(options);
                        this.ctx.stroke();
                        this.ctx.restore();
                        this.ctx = canvasCtx;
                        this.dataUrl = this.canvasObj.toDataURL();
                    }
                }, {
                    key: 'drawPolyline',
                    value: function drawPolyline(options) {
                        this.ctx.save();
                        this.ctx.beginPath();
                        var points = options.points.split(' ');
                        for (var i = 0; i < points.length - 1; i++) {
                            var point = points[i].split(',');
                            var x = parseFloat(point[0]);
                            var y = parseFloat(point[1]);
                            if (i === 0) {
                                this.ctx.moveTo(x, y);
                            } else {
                                this.ctx.lineTo(x, y);
                            }
                        }
                        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
                        this.ctx.strokeStyle = options.stroke;
                        this.ctx.stroke();
                        this.ctx.restore();
                        this.dataUrl = this.canvasObj.toDataURL();
                    }
                }, {
                    key: 'drawEllipse',
                    value: function drawEllipse(options) {
                        var canvasCtx = this.ctx;
                        var circumference = Math.max(options.rx, options.ry);
                        var scaleX = options.rx / circumference;
                        var scaleY = options.ry / circumference;
                        this.ctx.save();
                        this.ctx.beginPath();
                        this.ctx.translate(options.cx, options.cy);
                        this.ctx.save();
                        this.ctx.scale(scaleX, scaleY);
                        this.ctx.arc(0, 0, circumference, 0, 2 * Math.PI, false);
                        this.ctx.fillStyle = options.fill;
                        this.ctx.fill();
                        this.ctx.restore();
                        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
                        this.ctx.strokeStyle = options.stroke;
                        this.ctx.stroke();
                        this.ctx.restore();
                        this.ctx = canvasCtx;
                        this.dataUrl = this.canvasObj.toDataURL();
                    }
                }, {
                    key: 'drawImage',
                    value: function drawImage(options) {
                        this.ctx.save();
                        var imageObj = new Image();
                        if (!isNullOrUndefined(options.href)) {
                            imageObj.src = options.href;
                            this.ctx.drawImage(imageObj, options.x, options.y, options.width, options.height);
                        }
                        this.ctx.restore();
                        this.dataUrl = this.canvasObj.toDataURL();
                    }
                }, {
                    key: 'createLinearGradient',
                    value: function createLinearGradient(colors) {
                        var myGradient = void 0;
                        if (!isNullOrUndefined(colors[0].colorStop)) {
                            myGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasObj.height);
                        }
                        var color = this.setGradientValues(colors, myGradient);
                        return color;
                    }
                }, {
                    key: 'createRadialGradient',
                    value: function createRadialGradient(colors) {
                        var myGradient = void 0;
                        if (!isNullOrUndefined(colors[0].colorStop)) {
                            myGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, this.canvasObj.height);
                        }
                        var colorName = this.setGradientValues(colors, myGradient);
                        return colorName;
                    }
                }, {
                    key: 'setGradientValues',
                    value: function setGradientValues(colors, myGradient) {
                        var colorName = void 0;
                        if (!isNullOrUndefined(colors[0].colorStop)) {
                            for (var i = 0; i <= colors.length - 1; i++) {
                                var color = colors[i].color;
                                var newColorStop = colors[i].colorStop.slice(0, -1);
                                var stopColor = parseInt(newColorStop, 10) / 100;
                                myGradient.addColorStop(stopColor, color);
                            }
                            colorName = myGradient.toString();
                        } else {
                            colorName = colors[0].color.toString();
                        }
                        this.dataUrl = this.canvasObj.toDataURL();
                        return colorName;
                    }
                }, {
                    key: 'setElementAttributes',
                    value: function setElementAttributes(options, element) {
                        var keys = Object.keys(options);
                        var values = Object.keys(options).map(function (key) {
                            return options[key];
                        });
                        for (var i = 0; i < keys.length; i++) {
                            element.setAttribute(keys[i], values[i]);
                        }
                        return element;
                    }
                }, {
                    key: 'updateCanvasAttributes',
                    value: function updateCanvasAttributes(options) {
                        this.setElementAttributes(options, this.canvasObj);
                        var ctx = this.ctx;
                        if (!isNullOrUndefined(this.dataUrl)) {
                            var img = new Image();
                            img.onload = function () {
                                ctx.drawImage(img, 0, 0);
                            };
                            img.src = this.dataUrl;
                        }
                    }
                }]);

                return CanvasRenderer;
            }());

            MODULE_SUFFIX = 'Module';

            _export('ModuleLoader', ModuleLoader = function () {
                function ModuleLoader(parent) {
                    _classCallCheck(this, ModuleLoader);

                    this.loadedModules = [];
                    this.parent = parent;
                }

                _createClass(ModuleLoader, [{
                    key: 'inject',
                    value: function inject(requiredModules, moduleList) {
                        var reqLength = requiredModules.length;
                        if (reqLength === 0) {
                            this.clean();
                            return;
                        }
                        if (this.loadedModules.length) {
                            this.clearUnusedModule(requiredModules);
                        }
                        for (var i = 0; i < reqLength; i++) {
                            var modl = requiredModules[i];
                            var _iteratorNormalCompletion21 = true;
                            var _didIteratorError21 = false;
                            var _iteratorError21 = undefined;

                            try {
                                for (var _iterator21 = moduleList[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                                    var module = _step21.value;

                                    var modName = modl.member;
                                    if (module.prototype.getModuleName() === modl.member && !this.isModuleLoaded(modName)) {
                                        var moduleObject = createInstance(module, modl.args);
                                        var memberName = this.getMemberName(modName);
                                        if (modl.isProperty) {
                                            setValue(memberName, module, this.parent);
                                        } else {
                                            setValue(memberName, moduleObject, this.parent);
                                        }
                                        var loadedModule = modl;
                                        loadedModule.member = memberName;
                                        this.loadedModules.push(loadedModule);
                                    }
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
                    }
                }, {
                    key: 'clean',
                    value: function clean() {
                        var _iteratorNormalCompletion22 = true;
                        var _didIteratorError22 = false;
                        var _iteratorError22 = undefined;

                        try {
                            for (var _iterator22 = this.loadedModules[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                                var modules = _step22.value;

                                if (!modules.isProperty) {
                                    getValue(modules.member, this.parent).destroy();
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

                        this.loadedModules = [];
                    }
                }, {
                    key: 'clearUnusedModule',
                    value: function clearUnusedModule(moduleList) {
                        var _this6 = this;

                        var usedModules = moduleList.map(function (arg) {
                            return _this6.getMemberName(arg.member);
                        });
                        var removableModule = this.loadedModules.filter(function (module) {
                            return usedModules.indexOf(module.member) === -1;
                        });
                        var _iteratorNormalCompletion23 = true;
                        var _didIteratorError23 = false;
                        var _iteratorError23 = undefined;

                        try {
                            for (var _iterator23 = removableModule[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                                var mod = _step23.value;

                                if (!mod.isProperty) {
                                    getValue(mod.member, this.parent).destroy();
                                }
                                this.loadedModules.splice(this.loadedModules.indexOf(mod), 1);
                                deleteObject(this.parent, mod.member);
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
                    key: 'getMemberName',
                    value: function getMemberName(name) {
                        return name[0].toLowerCase() + name.substring(1) + MODULE_SUFFIX;
                    }
                }, {
                    key: 'isModuleLoaded',
                    value: function isModuleLoaded(modName) {
                        var _iteratorNormalCompletion24 = true;
                        var _didIteratorError24 = false;
                        var _iteratorError24 = undefined;

                        try {
                            for (var _iterator24 = this.loadedModules[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                                var mod = _step24.value;

                                if (mod.member === this.getMemberName(modName)) {
                                    return true;
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

                        return false;
                    }
                }]);

                return ModuleLoader;
            }());

            _export('ChildProperty', ChildProperty = function () {
                function ChildProperty(parent, propName, defaultValue, isArray) {
                    _classCallCheck(this, ChildProperty);

                    this.properties = {};
                    this.changedProperties = {};
                    this.childChangedProperties = {};
                    this.oldProperties = {};
                    // tslint:disable-next-line:no-empty
                    this.finalUpdate = function () {};
                    this.callChildDataBind = getValue('callChildDataBind', Base);
                    this.parentObj = parent;
                    this.controlParent = this.parentObj.controlParent || this.parentObj;
                    this.propName = propName;
                    this.setProperties(defaultValue, true);
                    this.isParentArray = isArray;
                }
                /**
                 * Updates the property changes
                 * @param {boolean} val
                 * @param {string} propName
                 * @returns {void}
                 */


                _createClass(ChildProperty, [{
                    key: 'updateChange',
                    value: function updateChange(val, propName) {
                        if (val === true) {
                            this.parentObj.childChangedProperties[propName] = val;
                        } else {
                            delete this.parentObj.childChangedProperties[propName];
                        }
                        if (this.parentObj.updateChange) {
                            this.parentObj.updateChange(val, this.parentObj.propName);
                        }
                    }
                }, {
                    key: 'updateTimeOut',
                    value: function updateTimeOut() {
                        if (this.parentObj.updateTimeOut) {
                            this.parentObj.finalUpdate();
                            this.parentObj.updateTimeOut();
                        } else {
                            var changeTime = setTimeout(this.parentObj.dataBind.bind(this.parentObj));
                            var clearUpdate = function clearUpdate() {
                                clearTimeout(changeTime);
                            };
                            this.finalUpdate = clearUpdate;
                        }
                    }
                }, {
                    key: 'clearChanges',
                    value: function clearChanges() {
                        this.finalUpdate();
                        this.updateChange(false, this.propName);
                        this.oldProperties = {};
                        this.changedProperties = {};
                    }
                }, {
                    key: 'setProperties',
                    value: function setProperties(prop, muteOnChange) {
                        if (muteOnChange === true) {
                            merge(this, prop);
                            this.updateChange(false, this.propName);
                            this.clearChanges();
                        } else {
                            merge(this, prop);
                        }
                    }
                }, {
                    key: 'dataBind',
                    value: function dataBind() {
                        this.callChildDataBind(this.childChangedProperties, this);
                        if (this.isParentArray) {
                            var curIndex = this.parentObj[this.propName].indexOf(this);
                            if (Object.keys(this.changedProperties).length) {
                                setValue(this.propName + '.' + curIndex, this.changedProperties, this.parentObj.changedProperties);
                                setValue(this.propName + '.' + curIndex, this.oldProperties, this.parentObj.oldProperties);
                            }
                        } else {
                            this.parentObj.changedProperties[this.propName] = this.changedProperties;
                            this.parentObj.oldProperties[this.propName] = this.oldProperties;
                        }
                        this.clearChanges();
                    }
                }, {
                    key: 'saveChanges',
                    value: function saveChanges(key, newValue, oldValue) {
                        if (this.controlParent.isProtectedOnChange) {
                            return;
                        }
                        this.oldProperties[key] = oldValue;
                        this.changedProperties[key] = newValue;
                        this.updateChange(true, this.propName);
                        this.finalUpdate();
                        this.updateTimeOut();
                    }
                }]);

                return ChildProperty;
            }());

            defaultNumberingSystem = {
                'latn': {
                    '_digits': '0123456789',
                    '_type': 'numeric'
                }
            };
            defaultNumberSymbols = {
                'decimal': '.',
                'group': ',',
                'percentSign': '%',
                'plusSign': '+',
                'minusSign': '-',
                'infinity': '∞',
                'nan': 'NaN',
                'exponential': 'E'
            };
            latnNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            ParserBase = function () {
                function ParserBase() {
                    _classCallCheck(this, ParserBase);
                }

                _createClass(ParserBase, null, [{
                    key: 'getMainObject',
                    value: function getMainObject(obj, cName) {
                        return getValue('main.' + cName, obj);
                    }
                }, {
                    key: 'getNumberingSystem',
                    value: function getNumberingSystem(obj) {
                        return getValue('supplemental.numberingSystems', obj) || this.numberingSystems;
                    }
                }, {
                    key: 'reverseObject',
                    value: function reverseObject(prop, keys) {
                        var propKeys = keys || Object.keys(prop);
                        var res = {};
                        var _iteratorNormalCompletion25 = true;
                        var _didIteratorError25 = false;
                        var _iteratorError25 = undefined;

                        try {
                            for (var _iterator25 = propKeys[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                                var key = _step25.value;

                                /* tslint:disable no-any */
                                if (!res.hasOwnProperty(prop[key])) {
                                    res[prop[key]] = key;
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

                        return res;
                    }
                }, {
                    key: 'getSymbolRegex',
                    value: function getSymbolRegex(props) {
                        var regexStr = props.map(function (str) {
                            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
                        }).join('|');
                        return new RegExp(regexStr, 'g');
                    }
                }, {
                    key: 'getSymbolMatch',
                    value: function getSymbolMatch(prop) {
                        var matchKeys = Object.keys(defaultNumberSymbols);
                        var ret = {};
                        var _iteratorNormalCompletion26 = true;
                        var _didIteratorError26 = false;
                        var _iteratorError26 = undefined;

                        try {
                            for (var _iterator26 = matchKeys[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
                                var key = _step26.value;

                                ret[prop[key]] = defaultNumberSymbols[key];
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

                        return ret;
                    }
                }, {
                    key: 'constructRegex',
                    value: function constructRegex(val) {
                        var len = val.length;
                        var ret = '';
                        for (var i = 0; i < len; i++) {
                            if (i !== len - 1) {
                                ret += val[i] + '|';
                            } else {
                                ret += val[i];
                            }
                        }
                        return ret;
                    }
                }, {
                    key: 'convertValueParts',
                    value: function convertValueParts(value, regex, obj) {
                        return value.replace(regex, function (str) {
                            return obj[str];
                        });
                    }
                }, {
                    key: 'getDefaultNumberingSystem',
                    value: function getDefaultNumberingSystem(obj) {
                        var ret = {};
                        ret.obj = getValue('numbers', obj);
                        ret.nSystem = getValue('defaultNumberingSystem', ret.obj);
                        return ret;
                    }
                }, {
                    key: 'getCurrentNumericOptions',
                    value: function getCurrentNumericOptions(curObj, numberSystem, needSymbols) {
                        var ret = {};
                        var cur = this.getDefaultNumberingSystem(curObj);
                        if (!isUndefined(cur.nSystem)) {
                            var digits = getValue(cur.nSystem + '._digits', numberSystem);
                            if (!isUndefined(digits)) {
                                ret.numericPair = this.reverseObject(digits, latnNumberSystem);
                                ret.numberParseRegex = new RegExp(this.constructRegex(digits), 'g');
                                ret.numericRegex = '[' + digits[0] + '-' + digits[9] + ']';
                                if (needSymbols) {
                                    ret.numericRegex = digits[0] + '-' + digits[9];
                                    ret.symbolNumberSystem = getValue('symbols-numberSystem-' + cur.nSystem, cur.obj);
                                    ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem);
                                    ret.numberSystem = cur.nSystem;
                                }
                            }
                        }
                        return ret;
                    }
                }, {
                    key: 'getNumberMapper',
                    value: function getNumberMapper(curObj, numberSystem, isNumber) {
                        var ret = { mapper: {} };
                        var cur = this.getDefaultNumberingSystem(curObj);
                        if (!isUndefined(cur.nSystem)) {
                            ret.numberSystem = cur.nSystem;
                            ret.numberSymbols = getValue('symbols-numberSystem-' + cur.nSystem, cur.obj);
                            ret.timeSeparator = getValue('timeSeparator', ret.numberSymbols);
                            var digits = getValue(cur.nSystem + '._digits', numberSystem);
                            if (!isUndefined(digits)) {
                                var _iteratorNormalCompletion27 = true;
                                var _didIteratorError27 = false;
                                var _iteratorError27 = undefined;

                                try {
                                    for (var _iterator27 = latnNumberSystem[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
                                        var i = _step27.value;

                                        ret.mapper[i] = digits[i];
                                    }
                                } catch (err) {
                                    _didIteratorError27 = true;
                                    _iteratorError27 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion27 && _iterator27.return) {
                                            _iterator27.return();
                                        }
                                    } finally {
                                        if (_didIteratorError27) {
                                            throw _iteratorError27;
                                        }
                                    }
                                }
                            }
                        }
                        return ret;
                    }
                }]);

                return ParserBase;
            }();

            ParserBase.nPair = 'numericPair';
            ParserBase.nRegex = 'numericRegex';
            ParserBase.numberingSystems = defaultNumberingSystem;

            errorText = {
                'ms': 'minimumSignificantDigits',
                'ls': 'maximumSignificantDigits',
                'mf': 'minimumFractionDigits',
                'lf': 'maximumFractionDigits'
            };
            percentSign = 'percentSign';
            minusSign = 'minusSign';
            mapper$1 = ['infinity', 'nan', 'group', 'decimal', 'exponential'];

            NumberFormat = function () {
                function NumberFormat() {
                    _classCallCheck(this, NumberFormat);
                }

                _createClass(NumberFormat, null, [{
                    key: 'numberFormatter',
                    value: function numberFormatter(culture, option, cldr) {
                        var _this7 = this;

                        var fOptions = extend({}, option);
                        var cOptions = {};
                        var dOptions = {};
                        var symbolPattern = void 0;
                        var dependable = IntlBase.getDependables(cldr, culture, true);
                        dOptions.numberMapper = ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr), true);
                        dOptions.currencySymbol = IntlBase.getCurrencySymbol(dependable.numericObject, fOptions.currency || defaultCurrencyCode);
                        /* tslint:disable no-any */
                        dOptions.percentSymbol = dOptions.numberMapper.numberSymbols[percentSign];
                        dOptions.minusSymbol = dOptions.numberMapper.numberSymbols[minusSign];
                        var symbols = dOptions.numberMapper.numberSymbols;
                        if (option.format && !IntlBase.formatRegex.test(option.format)) {
                            cOptions = IntlBase.customFormat(option.format, dOptions, dependable.numericObject);
                        } else {
                            extend(fOptions, IntlBase.getProperNumericSkeleton(option.format || 'N'));
                            fOptions.isCurrency = fOptions.type === 'currency';
                            fOptions.isPercent = fOptions.type === 'percent';
                            symbolPattern = IntlBase.getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount);
                            fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, true);
                            this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, false, true);
                            if (!isUndefined(fOptions.fractionDigits)) {
                                fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits;
                            }
                            if (isUndefined(fOptions.useGrouping)) {
                                fOptions.useGrouping = true;
                            }
                            if (fOptions.isCurrency) {
                                symbolPattern = symbolPattern.replace(/\u00A4/g, IntlBase.defaultCurrency);
                            }
                            var split = symbolPattern.split(';');
                            cOptions.nData = IntlBase.getFormatData(split[1] || '-' + split[0], true, dOptions.currencySymbol);
                            cOptions.pData = IntlBase.getFormatData(split[0], false, dOptions.currencySymbol);
                            if (fOptions.useGrouping) {
                                fOptions.groupSeparator = symbols[mapper$1[2]];
                                fOptions.groupData = this.getGroupingDetails(split[0]);
                            }
                            var minFrac = isUndefined(fOptions.minimumFractionDigits);
                            if (minFrac) {
                                fOptions.minimumFractionDigits = cOptions.nData.minimumFraction;
                            }
                            if (isUndefined(fOptions.maximumFractionDigits)) {
                                var mval = cOptions.nData.maximumFraction;
                                fOptions.maximumFractionDigits = isUndefined(mval) && fOptions.isPercent ? 0 : mval;
                            }
                            var mfrac = fOptions.minimumFractionDigits;
                            var lfrac = fOptions.maximumFractionDigits;
                            if (!isUndefined(mfrac) && !isUndefined(lfrac)) {
                                if (mfrac > lfrac) {
                                    fOptions.maximumFractionDigits = mfrac;
                                }
                            }
                        }
                        extend(cOptions.nData, fOptions);
                        extend(cOptions.pData, fOptions);
                        return function (value) {
                            if (isNaN(value)) {
                                return symbols[mapper$1[1]];
                            } else if (!isFinite(value)) {
                                return symbols[mapper$1[0]];
                            }
                            return _this7.intNumberFormatter(value, cOptions, dOptions);
                        };
                    }
                }, {
                    key: 'getGroupingDetails',
                    value: function getGroupingDetails(pattern) {
                        var ret = {};
                        var match = pattern.match(IntlBase.negativeDataRegex);
                        if (match && match[4]) {
                            var _pattern = match[4];
                            var p = _pattern.lastIndexOf(',');
                            if (p !== -1) {
                                var temp = _pattern.split('.')[0];
                                ret.primary = temp.length - p - 1;
                                var s = _pattern.lastIndexOf(',', p - 1);
                                if (s !== -1) {
                                    ret.secondary = p - 1 - s;
                                }
                            }
                        }
                        return ret;
                    }
                }, {
                    key: 'checkValueRange',
                    value: function checkValueRange(val1, val2, checkbothExist, isFraction) {
                        var decide = isFraction ? 'f' : 's';
                        var dint = 0;
                        var str1 = errorText['l' + decide];
                        var str2 = errorText['m' + decide];
                        if (!isUndefined(val1)) {
                            this.checkRange(val1, str1, isFraction);
                            dint++;
                        }
                        if (!isUndefined(val2)) {
                            this.checkRange(val2, str2, isFraction);
                            dint++;
                        }
                        if (dint === 2) {
                            if (val1 < val2) {
                                throwError(str2 + 'specified must be less than the' + str1);
                            } else {
                                return true;
                            }
                        } else if (checkbothExist && dint === 1) {
                            throwError('Both' + str2 + 'and' + str2 + 'must be present');
                        }
                        return false;
                    }
                }, {
                    key: 'checkRange',
                    value: function checkRange(val, text, isFraction) {
                        var range = isFraction ? [0, 20] : [1, 21];
                        if (val < range[0] || val > range[1]) {
                            throwError(text + 'value must be within the range' + range[0] + 'to' + range[1]);
                        }
                    }
                }, {
                    key: 'intNumberFormatter',
                    value: function intNumberFormatter(value, fOptions, dOptions) {
                        var curData = void 0;
                        if (isUndefined(fOptions.nData.type)) {
                            return undefined;
                        } else {
                            if (value < 0) {
                                value = value * -1;
                                curData = fOptions.nData;
                            } else if (value === 0) {
                                curData = fOptions.zeroData || fOptions.pData;
                            } else {
                                curData = fOptions.pData;
                            }
                            var fValue = '';
                            if (curData.isPercent) {
                                value = value * 100;
                            }
                            if (curData.groupOne) {
                                fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits);
                            } else {
                                fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits);
                                if (curData.minimumIntegerDigits) {
                                    fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits);
                                }
                            }
                            if (curData.type === 'scientific') {
                                fValue = value.toExponential(curData.maximumFractionDigits);
                                fValue = fValue.replace('e', dOptions.numberMapper.numberSymbols[mapper$1[4]]);
                            }
                            fValue = fValue.replace('.', dOptions.numberMapper.numberSymbols[mapper$1[3]]);
                            if (curData.useGrouping) {
                                fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ',', dOptions.numberMapper.numberSymbols[mapper$1[3]] || '.', curData.groupData.secondary);
                            }
                            fValue = ParserBase.convertValueParts(fValue, IntlBase.latnParseRegex, dOptions.numberMapper.mapper);
                            if (curData.nlead === 'N/A') {
                                return curData.nlead;
                            } else {
                                return curData.nlead + fValue + curData.nend;
                            }
                        }
                    }
                }, {
                    key: 'processSignificantDigits',
                    value: function processSignificantDigits(value, min, max) {
                        var temp = value + '';
                        var tn = void 0;
                        var length = temp.length;
                        if (length < min) {
                            return value.toPrecision(min);
                        } else {
                            temp = value.toPrecision(max);
                            tn = +temp;
                            return tn + '';
                        }
                    }
                }, {
                    key: 'groupNumbers',
                    value: function groupNumbers(val, level1, sep, decimalSymbol, level2) {
                        var flag = !isNullOrUndefined(level2) && level2 !== 0;
                        var split = val.split(decimalSymbol);
                        var prefix = split[0];
                        var length = prefix.length;
                        var str = '';
                        while (length > level1) {
                            str = prefix.slice(length - level1, length) + (str.length ? sep + str : '');
                            length -= level1;
                            if (flag) {
                                level1 = level2;
                                flag = false;
                            }
                        }
                        split[0] = prefix.slice(0, length) + (str.length ? sep : '') + str;
                        return split.join(decimalSymbol);
                    }
                }, {
                    key: 'processFraction',
                    value: function processFraction(value, min, max) {
                        var temp = (value + '').split('.')[1];
                        var length = temp ? temp.length : 0;
                        if (min && length < min) {
                            var ret = '';
                            if (length === 0) {
                                ret = value.toFixed(min);
                            } else {
                                ret += value;
                                for (var j = 0; j < min - length; j++) {
                                    ret += '0';
                                }
                                return ret;
                            }
                            return value.toFixed(min);
                        } else if (!isNullOrUndefined(max) && (length > max || max === 0)) {
                            return value.toFixed(max);
                        }
                        return value + '';
                    }
                }, {
                    key: 'processMinimumIntegers',
                    value: function processMinimumIntegers(value, min) {
                        var temp = value.split('.');
                        var lead = temp[0];
                        var len = lead.length;
                        if (len < min) {
                            for (var i = 0; i < min - len; i++) {
                                lead = '0' + lead;
                            }
                            temp[0] = lead;
                        }
                        return temp.join('.');
                    }
                }]);

                return NumberFormat;
            }();

            (function (IntlBase) {
                // tslint:disable-next-line:max-line-length
                IntlBase.negativeDataRegex = /^(('[^']+'|''|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
                IntlBase.customRegex = /^(('[^']+'|''|[^*#@0,.])*)(\*.)?((([0#,]*[0,]*[0#]*)(\.[0#]*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
                IntlBase.latnParseRegex = /0|1|2|3|4|5|6|7|8|9/g;
                var fractionRegex = /[0-9]/g;
                IntlBase.defaultCurrency = '$';
                var mapper = ['infinity', 'nan', 'group', 'decimal'];
                var patternRegex = /G|M|L|H|c|'| a|yy|y|EEEE|E/g;
                var patternMatch = {
                    'G': '',
                    'M': 'm',
                    'L': 'm',
                    'H': 'h',
                    'c': 'd',
                    '\'': '"',
                    ' a': ' AM/PM',
                    'yy': 'yy',
                    'y': 'yyyy',
                    'EEEE': 'dddd',
                    'E': 'ddd'
                };
                IntlBase.formatRegex = /(^[ncpae]{1})([0-1]?[0-9]|20)?$/i;
                IntlBase.currencyFormatRegex = /(^[ca]{1})([0-1]?[0-9]|20)?$/i;
                IntlBase.curWithoutNumberRegex = /(c|a)$/ig;
                var typeMapper = {
                    '$': 'isCurrency',
                    '%': 'isPercent',
                    '-': 'isNegative',
                    0: 'nlead',
                    1: 'nend'
                };
                IntlBase.dateParseRegex = /([a-z])\1*|'([^']|'')+'|''|./gi;
                IntlBase.basicPatterns = ['short', 'medium', 'long', 'full'];
                /* tslint:disable:quotemark */
                IntlBase.defaultObject = {
                    'dates': {
                        'calendars': {
                            'gregorian': {
                                'months': {
                                    'stand-alone': {
                                        'abbreviated': {
                                            '1': 'Jan',
                                            '2': 'Feb',
                                            '3': 'Mar',
                                            '4': 'Apr',
                                            '5': 'May',
                                            '6': 'Jun',
                                            '7': 'Jul',
                                            '8': 'Aug',
                                            '9': 'Sep',
                                            '10': 'Oct',
                                            '11': 'Nov',
                                            '12': 'Dec'
                                        },
                                        'narrow': {
                                            '1': 'J',
                                            '2': 'F',
                                            '3': 'M',
                                            '4': 'A',
                                            '5': 'M',
                                            '6': 'J',
                                            '7': 'J',
                                            '8': 'A',
                                            '9': 'S',
                                            '10': 'O',
                                            '11': 'N',
                                            '12': 'D'
                                        },
                                        'wide': {
                                            '1': 'January',
                                            '2': 'February',
                                            '3': 'March',
                                            '4': 'April',
                                            '5': 'May',
                                            '6': 'June',
                                            '7': 'July',
                                            '8': 'August',
                                            '9': 'September',
                                            '10': 'October',
                                            '11': 'November',
                                            '12': 'December'
                                        }
                                    }
                                },
                                "days": {
                                    "stand-alone": {
                                        "abbreviated": {
                                            "sun": "Sun",
                                            "mon": "Mon",
                                            "tue": "Tue",
                                            "wed": "Wed",
                                            "thu": "Thu",
                                            "fri": "Fri",
                                            "sat": "Sat"
                                        },
                                        "narrow": {
                                            "sun": "S",
                                            "mon": "M",
                                            "tue": "T",
                                            "wed": "W",
                                            "thu": "T",
                                            "fri": "F",
                                            "sat": "S"
                                        },
                                        "short": {
                                            "sun": "Su",
                                            "mon": "Mo",
                                            "tue": "Tu",
                                            "wed": "We",
                                            "thu": "Th",
                                            "fri": "Fr",
                                            "sat": "Sa"
                                        },
                                        "wide": {
                                            "sun": "Sunday",
                                            "mon": "Monday",
                                            "tue": "Tuesday",
                                            "wed": "Wednesday",
                                            "thu": "Thursday",
                                            "fri": "Friday",
                                            "sat": "Saturday"
                                        }
                                    }
                                },
                                "dayPeriods": {
                                    "format": {
                                        "wide": {
                                            "am": "AM",
                                            "pm": "PM"
                                        }
                                    }
                                },
                                'eras': {
                                    'eraNames': {
                                        '0': 'Before Christ',
                                        '0-alt-variant': 'Before Common Era',
                                        '1': 'Anno Domini',
                                        "1-alt-variant": "Common Era"
                                    },
                                    'eraAbbr': {
                                        '0': 'BC',
                                        '0-alt-variant': 'BCE',
                                        '1': 'AD',
                                        '1-alt-variant': 'CE'
                                    },
                                    'eraNarrow': {
                                        '0': 'B',
                                        '0-alt-variant': 'BCE',
                                        '1': 'A',
                                        '1-alt-variant': 'CE'
                                    }
                                },
                                'dateFormats': {
                                    'full': 'EEEE, MMMM d, y',
                                    'long': 'MMMM d, y',
                                    'medium': 'MMM d, y',
                                    'short': 'M/d/yy'
                                },
                                'timeFormats': {
                                    'full': 'h:mm:ss a zzzz',
                                    'long': 'h:mm:ss a z',
                                    'medium': 'h:mm:ss a',
                                    'short': 'h:mm a'
                                },
                                'dateTimeFormats': {
                                    'full': "{1} 'at' {0}",
                                    'long': "{1} 'at' {0}",
                                    'medium': '{1}, {0}',
                                    'short': '{1}, {0}',
                                    'availableFormats': {
                                        'd': 'd',
                                        'E': 'ccc',
                                        'Ed': 'd E',
                                        'Ehm': 'E h:mm a',
                                        'EHm': 'E HH:mm',
                                        'Ehms': 'E h:mm:ss a',
                                        'EHms': 'E HH:mm:ss',
                                        'Gy': 'y G',
                                        'GyMMM': 'MMM y G',
                                        'GyMMMd': 'MMM d, y G',
                                        'GyMMMEd': 'E, MMM d, y G',
                                        'h': 'h a',
                                        'H': 'HH',
                                        'hm': 'h:mm a',
                                        'Hm': 'HH:mm',
                                        'hms': 'h:mm:ss a',
                                        'Hms': 'HH:mm:ss',
                                        'hmsv': 'h:mm:ss a v',
                                        'Hmsv': 'HH:mm:ss v',
                                        'hmv': 'h:mm a v',
                                        'Hmv': 'HH:mm v',
                                        'M': 'L',
                                        'Md': 'M/d',
                                        'MEd': 'E, M/d',
                                        'MMM': 'LLL',
                                        'MMMd': 'MMM d',
                                        'MMMEd': 'E, MMM d',
                                        'MMMMd': 'MMMM d',
                                        'ms': 'mm:ss',
                                        'y': 'y',
                                        'yM': 'M/y',
                                        'yMd': 'M/d/y',
                                        'yMEd': 'E, M/d/y',
                                        'yMMM': 'MMM y',
                                        'yMMMd': 'MMM d, y',
                                        'yMMMEd': 'E, MMM d, y',
                                        'yMMMM': 'MMMM y'
                                    }
                                }
                            }
                        },
                        'timeZoneNames': {
                            "hourFormat": "+HH:mm;-HH:mm",
                            "gmtFormat": "GMT{0}",
                            "gmtZeroFormat": "GMT"
                        }
                    },
                    'numbers': {
                        'currencies': {
                            'USD': {
                                'displayName': 'US Dollar',
                                'symbol': '$',
                                'symbol-alt-narrow': '$'
                            },
                            'EUR': {
                                'displayName': 'Euro',
                                'symbol': '€',
                                'symbol-alt-narrow': '€'
                            },
                            'GBP': {
                                'displayName': 'British Pound',
                                'symbol-alt-narrow': '£'
                            }
                        },
                        'defaultNumberingSystem': 'latn',
                        'minimumGroupingDigits': '1',
                        'symbols-numberSystem-latn': {
                            'decimal': '.',
                            'group': ',',
                            'list': ';',
                            'percentSign': '%',
                            'plusSign': '+',
                            'minusSign': '-',
                            'exponential': 'E',
                            'superscriptingExponent': '×',
                            'perMille': '‰',
                            'infinity': '∞',
                            'nan': 'NaN',
                            'timeSeparator': ':'
                        },
                        'decimalFormats-numberSystem-latn': {
                            'standard': '#,##0.###'
                        },
                        'percentFormats-numberSystem-latn': {
                            'standard': '#,##0%'
                        },
                        'currencyFormats-numberSystem-latn': {
                            'standard': '¤#,##0.00',
                            'accounting': '¤#,##0.00;(¤#,##0.00)'
                        },
                        'scientificFormats-numberSystem-latn': {
                            'standard': '#E0'
                        }
                    }
                };
                /* tslint:enable:quotemark */
                IntlBase.monthIndex = {
                    3: 'abbreviated',
                    4: 'wide',
                    5: 'narrow',
                    1: 'abbreviated'
                };
                /**
                 *
                 */
                IntlBase.month = 'months';
                IntlBase.days = 'days';
                /**
                 * Default numerber Object
                 */
                IntlBase.patternMatcher = {
                    C: 'currency',
                    P: 'percent',
                    N: 'decimal',
                    A: 'currency',
                    E: 'scientific'
                };
                /**
                 * Returns the resultant pattern based on the skeleton, dateObject and the type provided
                 * @private
                 * @param {string} skeleton
                 * @param {Object} dateObject
                 * @param {string} type
                 * @returns {string}
                 */
                function getResultantPattern(skeleton, dateObject, type) {
                    var resPattern = void 0;
                    var iType = type || 'date';
                    if (IntlBase.basicPatterns.indexOf(skeleton) !== -1) {
                        resPattern = getValue(iType + 'Formats.' + skeleton, dateObject);
                        if (iType === 'dateTime') {
                            var dPattern = getValue('dateFormats.' + skeleton, dateObject);
                            var tPattern = getValue('timeFormats.' + skeleton, dateObject);
                            resPattern = resPattern.replace('{1}', dPattern).replace('{0}', tPattern);
                        }
                    } else {
                        resPattern = getValue('dateTimeFormats.availableFormats.' + skeleton, dateObject);
                    }
                    return resPattern;
                }
                IntlBase.getResultantPattern = getResultantPattern;
                /**
                 * Returns the dependable object for provided cldr data and culture
                 * @private
                 * @param {Object} cldr
                 * @param {string} culture
                 * @param {boolean} isNumber
                 * @returns {Dependables}
                 */
                function getDependables(cldr, culture, isNumber) {
                    var ret = {};
                    ret.parserObject = ParserBase.getMainObject(cldr, culture) || IntlBase.defaultObject;
                    if (isNumber) {
                        ret.numericObject = getValue('numbers', ret.parserObject);
                    } else {
                        ret.dateObject = getValue('dates.calendars.gregorian', ret.parserObject);
                    }
                    return ret;
                }
                IntlBase.getDependables = getDependables;
                /**
                 * Returns the symbol pattern for provided parameters
                 * @private
                 * @param {string} type
                 * @param {string} numSystem
                 * @param {Object} obj
                 * @param {boolean} isAccount
                 * @returns {string}
                 */
                function getSymbolPattern(type, numSystem, obj, isAccount) {
                    return getValue(type + 'Formats-numberSystem-' + numSystem + (isAccount ? '.accounting' : '.standard'), obj) || (isAccount ? getValue(type + 'Formats-numberSystem-' + numSystem + '.standard', obj) : '');
                }
                IntlBase.getSymbolPattern = getSymbolPattern;
                /**
                 * Returns proper numeric skeleton
                 * @private
                 * @param {string} skeleton
                 * @returns {NumericSkeleton}
                 */
                function getProperNumericSkeleton(skeleton) {
                    var matches = skeleton.match(IntlBase.formatRegex);
                    var ret = {};
                    var pattern = matches[1].toUpperCase();
                    ret.isAccount = pattern === 'A';
                    /* tslint:disable no-any */
                    ret.type = IntlBase.patternMatcher[pattern];
                    if (skeleton.length > 1) {
                        ret.fractionDigits = parseInt(matches[2], 10);
                    }
                    return ret;
                }
                IntlBase.getProperNumericSkeleton = getProperNumericSkeleton;
                /**
                 * Returns format data for number formatting like minimum fraction, maximum fraction, etc..,
                 * @private
                 * @param {string} pattern
                 * @param {boolean} needFraction
                 * @param {string} cSymbol
                 * @param {boolean} fractionOnly
                 * @returns {NegativeData}
                 */
                function getFormatData(pattern, needFraction, cSymbol, fractionOnly) {
                    var nData = fractionOnly ? {} : { nlead: '', nend: '' };
                    var match = pattern.match(IntlBase.customRegex);
                    if (match) {
                        if (!fractionOnly) {
                            nData.nlead = changeCurrencySymbol(match[1], cSymbol);
                            nData.nend = changeCurrencySymbol(match[10], cSymbol);
                            nData.groupPattern = match[4];
                        }
                        var fraction = match[7];
                        if (fraction && needFraction) {
                            var fmatch = fraction.match(fractionRegex);
                            if (!isNullOrUndefined(fmatch)) {
                                nData.minimumFraction = fmatch.length;
                            } else {
                                nData.minimumFraction = 0;
                            }
                            nData.maximumFraction = fraction.length - 1;
                        }
                    }
                    return nData;
                }
                IntlBase.getFormatData = getFormatData;
                /**
                 * Changes currency symbol
                 * @private
                 * @param {string} val
                 * @param {string} sym
                 * @returns {string}
                 */
                function changeCurrencySymbol(val, sym) {
                    if (val) {
                        return val.replace(IntlBase.defaultCurrency, sym);
                    }
                    return '';
                }
                /**
                 * Returns currency symbol based on currency code
                 * @private
                 * @param {Object} numericObject
                 * @param {string} currencyCode
                 * @returns {string}
                 */
                function getCurrencySymbol(numericObject, currencyCode) {
                    return getValue('currencies.' + currencyCode + '.symbol', numericObject) || '$';
                }
                IntlBase.getCurrencySymbol = getCurrencySymbol;
                /**
                 * Returns formatting options for custom number format
                 * @private
                 * @param {string} format
                 * @param {CommonOptions} dOptions
                 * @param {Dependables} obj
                 * @returns {GenericFormatOptions}
                 */
                function customFormat(format, dOptions, obj) {
                    var options = {};
                    var formatSplit = format.split(';');
                    var data = ['pData', 'nData', 'zeroData'];
                    for (var i = 0; i < formatSplit.length; i++) {
                        options[data[i]] = customNumberFormat(formatSplit[i], dOptions, obj);
                    }
                    if (isNullOrUndefined(options.nData)) {
                        options.nData = extend({}, options.pData);
                        options.nData.nlead = isNullOrUndefined(dOptions) ? '-' + options.nData.nlead : dOptions.minusSymbol + options.nData.nlead;
                    }
                    return options;
                }
                IntlBase.customFormat = customFormat;
                /**
                 * Returns custom formatting options
                 * @private
                 * @param {string} format
                 * @param {CommonOptions} dOptions
                 * @param {Object} numObject
                 * @returns {NegativeData}
                 */
                function customNumberFormat(format, dOptions, numObject) {
                    var cOptions = { type: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
                    var pattern = format.match(IntlBase.customRegex);
                    if (isNullOrUndefined(pattern) || pattern[5] === '' && format !== 'N/A') {
                        cOptions.type = undefined;
                    }
                    cOptions.nlead = pattern[1];
                    cOptions.nend = pattern[10];
                    var integerPart = pattern[6];
                    cOptions.useGrouping = integerPart.indexOf(',') !== -1;
                    integerPart = integerPart.replace(/,/g, '');
                    var fractionPart = pattern[7];
                    if (integerPart.indexOf('0') !== -1) {
                        cOptions.minimumIntegerDigits = integerPart.length - integerPart.indexOf('0');
                    }
                    if (!isNullOrUndefined(fractionPart)) {
                        cOptions.minimumFractionDigits = fractionPart.lastIndexOf('0');
                        cOptions.maximumFractionDigits = fractionPart.lastIndexOf('#');
                        if (cOptions.minimumFractionDigits === -1) {
                            cOptions.minimumFractionDigits = 0;
                        }
                        if (cOptions.maximumFractionDigits === -1 || cOptions.maximumFractionDigits < cOptions.minimumFractionDigits) {
                            cOptions.maximumFractionDigits = cOptions.minimumFractionDigits;
                        }
                    }
                    if (!isNullOrUndefined(dOptions)) {
                        extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '$', dOptions.currencySymbol));
                        if (!cOptions.isCurrency) {
                            extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', dOptions.percentSymbol));
                        }
                    } else {
                        extend(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', '%'));
                    }
                    if (!isNullOrUndefined(numObject)) {
                        var symbolPattern = getSymbolPattern(cOptions.type, dOptions.numberMapper.numberSystem, numObject, false);
                        if (cOptions.useGrouping) {
                            cOptions.groupSeparator = dOptions.numberMapper.numberSymbols[mapper[2]];
                            cOptions.groupData = NumberFormat.getGroupingDetails(symbolPattern.split(';')[0]);
                        }
                        cOptions.nlead = cOptions.nlead.replace(/\'/g, '');
                        cOptions.nend = cOptions.nend.replace(/\'/g, '');
                    }
                    return cOptions;
                }
                /**
                 * Returns formatting options for currency or percent type
                 * @private
                 * @param {string[]} parts
                 * @param {string} actual
                 * @param {string} symbol
                 * @returns {NegativeData}
                 */
                function isCurrencyPercent(parts, actual, symbol) {
                    var options = { nlead: parts[0], nend: parts[1] };
                    for (var i = 0; i < 2; i++) {
                        var part = parts[i];
                        var loc = part.indexOf(actual);
                        if (loc !== -1 && (loc < part.indexOf('\'') || loc > part.lastIndexOf('\''))) {
                            options[typeMapper[i]] = part.substr(0, loc) + symbol + part.substr(loc + 1);
                            options[typeMapper[actual]] = true;
                            options.type = options.isCurrency ? 'currency' : 'percent';
                            break;
                        }
                    }
                    return options;
                }
                IntlBase.isCurrencyPercent = isCurrencyPercent;
                /**
                 * Returns culture based date separator
                 * @private
                 * @param {Object} dateObj
                 * @returns {string}
                 */
                function getDateSeparator(dateObj) {
                    var value = (getValue('dateFormats.short', dateObj) || '').match(/[d‏M‏]([^d‏M])[d‏M‏]/i);
                    return value ? value[1] : '/';
                }
                IntlBase.getDateSeparator = getDateSeparator;
                /**
                 * Returns Native Date Time pattern
                 * @private
                 * @param {string} culture
                 * @param {DateFormatOptions} options
                 * @param {Object} cldr
                 * @returns {string}
                 */
                function getActualDateTimeFormat(culture, options, cldr, isExcelFormat) {
                    var dependable = getDependables(cldr, culture);
                    var actualPattern = options.format || getResultantPattern(options.skeleton, dependable.dateObject, options.type);
                    if (isExcelFormat) {
                        actualPattern = actualPattern.replace(patternRegex, function (pattern) {
                            return patternMatch[pattern];
                        });
                        if (actualPattern.indexOf('z') !== -1) {
                            var tLength = actualPattern.match(/z/g).length;
                            var timeZonePattern = void 0;
                            var _options = { 'timeZone': {} };
                            _options.numMapper = ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
                            _options.timeZone = getValue('dates.timeZoneNames', dependable.parserObject);
                            var value = new Date();
                            var timezone = value.getTimezoneOffset();
                            var pattern = tLength < 4 ? '+H;-H' : _options.timeZone.hourFormat;
                            pattern = pattern.replace(/:/g, _options.numMapper.timeSeparator);
                            if (timezone === 0) {
                                timeZonePattern = _options.timeZone.gmtZeroFormat;
                            } else {
                                timeZonePattern = DateFormat.getTimeZoneValue(timezone, pattern);
                                timeZonePattern = _options.timeZone.gmtFormat.replace(/\{0\}/, timeZonePattern);
                            }
                            actualPattern = actualPattern.replace(/[z]+/, '"' + timeZonePattern + '"');
                        }
                        actualPattern = actualPattern.replace(/ $/, '');
                    }
                    return actualPattern;
                }
                IntlBase.getActualDateTimeFormat = getActualDateTimeFormat;
                /**
                 * Returns Native Number pattern
                 * @private
                 * @param {string} culture
                 * @param {NumberFormatOptions} options
                 * @param {Object} cldr
                 * @returns {string}
                 */
                function getActualNumberFormat(culture, options, cldr) {
                    var dependable = getDependables(cldr, culture, true);
                    var parseOptions = { custom: true };
                    var minFrac = void 0;
                    var curObj = {};
                    var curMatch = (options.format || '').match(IntlBase.currencyFormatRegex);
                    if (curMatch) {
                        var dOptions = {};
                        dOptions.numberMapper = ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr), true);
                        var curCode = getCurrencySymbol(dependable.numericObject, options.currency || defaultCurrencyCode);
                        var symbolPattern = getSymbolPattern('currency', dOptions.numberMapper.numberSystem, dependable.numericObject, /a/i.test(options.format));
                        symbolPattern = symbolPattern.replace(/\u00A4/g, curCode);
                        var split = symbolPattern.split(';');
                        curObj.hasNegativePattern = split.length > 1;
                        curObj.nData = getFormatData(split[1] || '-' + split[0], true, curCode);
                        curObj.pData = getFormatData(split[0], false, curCode);
                        if (!curMatch[2] && !options.minimumFractionDigits && !options.maximumFractionDigits) {
                            minFrac = getFormatData(symbolPattern.split(';')[0], true, '', true).minimumFraction;
                        }
                    }
                    var actualPattern = void 0;
                    if (IntlBase.formatRegex.test(options.format) || !options.format) {
                        extend(parseOptions, getProperNumericSkeleton(options.format || 'N'));
                        parseOptions.custom = false;
                        actualPattern = '###0';
                        if (parseOptions.fractionDigits || options.minimumFractionDigits || options.maximumFractionDigits || minFrac) {
                            var defaultMinimum = 0;
                            if (parseOptions.fractionDigits) {
                                options.minimumFractionDigits = options.maximumFractionDigits = parseOptions.fractionDigits;
                            }
                            actualPattern = fractionDigitsPattern(actualPattern, minFrac || parseOptions.fractionDigits || options.minimumFractionDigits || defaultMinimum, options.maximumFractionDigits || defaultMinimum);
                        }
                        if (options.minimumIntegerDigits) {
                            actualPattern = minimumIntegerPattern(actualPattern, options.minimumIntegerDigits);
                        }
                        if (options.useGrouping) {
                            actualPattern = groupingPattern(actualPattern);
                        }
                        if (parseOptions.type === 'currency') {
                            var cPattern = actualPattern;
                            actualPattern = curObj.pData.nlead + cPattern + curObj.pData.nend;
                            if (curObj.hasNegativePattern) {
                                actualPattern += ';' + curObj.nData.nlead + cPattern + curObj.nData.nend;
                            }
                        }
                        if (parseOptions.type === 'percent') {
                            actualPattern += ' %';
                        }
                    } else {
                        actualPattern = options.format.replace(/\'/g, '"');
                    }
                    return actualPattern;
                }
                IntlBase.getActualNumberFormat = getActualNumberFormat;
                function fractionDigitsPattern(pattern, minDigits, maxDigits) {
                    pattern += '.';
                    for (var a = 0; a < minDigits; a++) {
                        pattern += '0';
                    }
                    if (minDigits < maxDigits) {
                        var diff = maxDigits - minDigits;
                        for (var b = 0; b < diff; b++) {
                            pattern += '#';
                        }
                    }
                    return pattern;
                }
                function minimumIntegerPattern(pattern, digits) {
                    var temp = pattern.split('.');
                    var integer = '';
                    for (var x = 0; x < digits; x++) {
                        integer += '0';
                    }
                    return temp[1] ? integer + '.' + temp[1] : integer;
                }
                function groupingPattern(pattern) {
                    var temp = pattern.split('.');
                    var integer = temp[0];
                    var no = 3 - integer.length % 3;
                    var hash = no && no === 1 ? '#' : no === 2 ? '##' : '';
                    integer = hash + integer;
                    pattern = '';
                    for (var x = integer.length - 1; x > 0; x = x - 3) {
                        pattern = ',' + integer[x - 2] + integer[x - 1] + integer[x] + pattern;
                    }
                    pattern = pattern.slice(1);
                    return temp[1] ? pattern + '.' + temp[1] : pattern;
                }
            })(IntlBase || (IntlBase = {}));

            abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLL|EEEEE|EEEE|E|K|ccc|G+|z+/gi;
            standalone = 'stand-alone';
            weekdayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
            timeSetter = {
                m: 'getMinutes',
                h: 'getHours',
                H: 'getHours',
                s: 'getSeconds',
                d: 'getDate'
            };
            datePartMatcher = {
                'M': 'month',
                'd': 'day',
                'E': 'weekday',
                'c': 'weekday',
                'y': 'year',
                'm': 'minute',
                'h': 'hour',
                'H': 'hour',
                's': 'second',
                'L': 'month',
                'a': 'designator',
                'z': 'timeZone',
                'Z': 'timeZone',
                'G': 'era'
            };
            timeSeparator = 'timeSeparator';

            DateFormat = function () {
                function DateFormat() {
                    _classCallCheck(this, DateFormat);
                }

                _createClass(DateFormat, null, [{
                    key: 'dateFormat',
                    value: function dateFormat(culture, option, cldr) {
                        var _this8 = this;

                        var dependable = IntlBase.getDependables(cldr, culture);
                        var formatOptions = {};
                        var resPattern = option.format || IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type);
                        formatOptions.dateSeperator = IntlBase.getDateSeparator(dependable.dateObject);
                        if (isUndefined(resPattern)) {
                            throwError('Format options or type given must be invalid');
                        } else {
                            formatOptions.pattern = resPattern;
                            formatOptions.numMapper = ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
                            var patternMatch = resPattern.match(abbreviateRegexGlobal) || [];
                            var _iteratorNormalCompletion28 = true;
                            var _didIteratorError28 = false;
                            var _iteratorError28 = undefined;

                            try {
                                for (var _iterator28 = patternMatch[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                                    var str = _step28.value;

                                    var len = str.length;
                                    var char = str[0];
                                    if (char === 'K') {
                                        char = 'h';
                                    }
                                    /* tslint:disable no-any */
                                    switch (char) {
                                        case 'E':
                                        case 'c':
                                            formatOptions.weekday = dependable.dateObject[IntlBase.days][standalone][IntlBase.monthIndex[len]];
                                            break;
                                        case 'M':
                                        case 'L':
                                            formatOptions.month = dependable.dateObject[IntlBase.month][standalone][IntlBase.monthIndex[len]];
                                            break;
                                        case 'a':
                                            formatOptions.designator = getValue('dayPeriods.format.wide', dependable.dateObject);
                                            break;
                                        case 'G':
                                            var eText = len <= 3 ? 'eraAbbr' : len === 4 ? 'eraNames' : 'eraNarrow';
                                            formatOptions.era = getValue('eras.' + eText, dependable.dateObject);
                                            break;
                                        case 'z':
                                            formatOptions.timeZone = getValue('dates.timeZoneNames', dependable.parserObject);
                                            break;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError28 = true;
                                _iteratorError28 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion28 && _iterator28.return) {
                                        _iterator28.return();
                                    }
                                } finally {
                                    if (_didIteratorError28) {
                                        throw _iteratorError28;
                                    }
                                }
                            }
                        }
                        return function (value) {
                            if (isNaN(value.getDate())) {
                                return null;
                            }
                            return _this8.intDateFormatter(value, formatOptions);
                        };
                    }
                }, {
                    key: 'intDateFormatter',
                    value: function intDateFormatter(value, options) {
                        var pattern = options.pattern;
                        var ret = '';
                        var matches = pattern.match(IntlBase.dateParseRegex);
                        var _iteratorNormalCompletion29 = true;
                        var _didIteratorError29 = false;
                        var _iteratorError29 = undefined;

                        try {
                            for (var _iterator29 = matches[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
                                var match = _step29.value;

                                var length = match.length;
                                var char = match[0];
                                if (char === 'K') {
                                    char = 'h';
                                }
                                var curval = void 0;
                                var isNumber = void 0;
                                var processNumber = void 0;
                                var curstr = '';
                                switch (char) {
                                    case 'M':
                                    case 'L':
                                        curval = value.getMonth() + 1;
                                        if (length > 2) {
                                            ret += options.month[curval];
                                        } else {
                                            isNumber = true;
                                        }
                                        break;
                                    case 'E':
                                    case 'c':
                                        ret += options.weekday[weekdayKey[value.getDay()]];
                                        break;
                                    case 'H':
                                    case 'h':
                                    case 'm':
                                    case 's':
                                    case 'd':
                                        isNumber = true;
                                        curval = value[timeSetter[char]]();
                                        if (char === 'h') {
                                            curval = curval % 12 || 12;
                                        }
                                        break;
                                    case 'y':
                                        processNumber = true;
                                        curstr += value.getFullYear();
                                        if (length === 2) {
                                            curstr = curstr.substr(curstr.length - 2);
                                        }
                                        break;
                                    case 'a':
                                        var desig = value.getHours() < 12 ? 'am' : 'pm';
                                        ret += options.designator[desig];
                                        break;
                                    case 'G':
                                        var dec = value.getFullYear() < 0 ? 0 : 1;
                                        ret += options.era[dec];
                                        break;
                                    case '\'':
                                        ret += match === '\'\'' ? '\'' : match.replace(/\'/g, '');
                                        break;
                                    case 'z':
                                        var timezone = value.getTimezoneOffset();
                                        var _pattern2 = length < 4 ? '+H;-H' : options.timeZone.hourFormat;
                                        _pattern2 = _pattern2.replace(/:/g, options.numMapper.timeSeparator);
                                        if (timezone === 0) {
                                            ret += options.timeZone.gmtZeroFormat;
                                        } else {
                                            processNumber = true;
                                            curstr = this.getTimeZoneValue(timezone, _pattern2);
                                        }
                                        curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
                                        break;
                                    case ':':
                                        ret += options.numMapper.numberSymbols[timeSeparator];
                                        /* tslint:enable no-any */
                                        break;
                                    case '/':
                                        ret += options.dateSeperator;
                                        break;
                                    default:
                                        ret += match;
                                }
                                if (isNumber) {
                                    processNumber = true;
                                    curstr = this.checkTwodigitNumber(curval, length);
                                }
                                if (processNumber) {
                                    ret += ParserBase.convertValueParts(curstr, IntlBase.latnParseRegex, options.numMapper.mapper);
                                }
                            }
                        } catch (err) {
                            _didIteratorError29 = true;
                            _iteratorError29 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion29 && _iterator29.return) {
                                    _iterator29.return();
                                }
                            } finally {
                                if (_didIteratorError29) {
                                    throw _iteratorError29;
                                }
                            }
                        }

                        return ret;
                    }
                }, {
                    key: 'checkTwodigitNumber',
                    value: function checkTwodigitNumber(val, len) {
                        var ret = val + '';
                        if (len === 2 && ret.length !== 2) {
                            return '0' + ret;
                        }
                        return ret;
                    }
                }, {
                    key: 'getTimeZoneValue',
                    value: function getTimeZoneValue(tVal, pattern) {
                        var _this9 = this;

                        var splt = pattern.split(';');
                        var curPattern = splt[tVal > 0 ? 1 : 0];
                        var no = Math.abs(tVal);
                        return curPattern = curPattern.replace(/HH?|mm/g, function (str) {
                            var len = str.length;
                            var ishour = str.indexOf('H') !== -1;
                            return _this9.checkTwodigitNumber(Math.floor(ishour ? no / 60 : no % 60), len);
                        });
                    }
                }]);

                return DateFormat;
            }();

            standalone$1 = 'stand-alone';
            latnRegex$1 = /^[0-9]*$/;
            timeSetter$1 = {
                minute: 'setMinutes',
                hour: 'setHours',
                second: 'setSeconds',
                day: 'setDate',
                month: 'setMonth'
            };
            month = 'months';

            DateParser = function () {
                function DateParser() {
                    _classCallCheck(this, DateParser);
                }

                _createClass(DateParser, null, [{
                    key: 'dateParser',
                    value: function dateParser(culture, option, cldr) {
                        var _this10 = this;

                        var dependable = IntlBase.getDependables(cldr, culture);
                        var numOptions = ParserBase.getCurrentNumericOptions(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
                        var parseOptions = {};
                        var resPattern = option.format || IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type);
                        var regexString = '';
                        var hourOnly = void 0;
                        if (isUndefined(resPattern)) {
                            throwError('Format options or type given must be invalid');
                        } else {
                            parseOptions = { pattern: resPattern, evalposition: {} };
                            var patternMatch = resPattern.match(IntlBase.dateParseRegex) || [];
                            var length = patternMatch.length;
                            var gmtCorrection = 0;
                            var zCorrectTemp = 0;
                            var isgmtTraversed = false;
                            var nRegx = numOptions.numericRegex;
                            for (var i = 0; i < length; i++) {
                                var str = patternMatch[i];
                                var len = str.length;
                                var char = str[0] === 'K' ? 'h' : str[0];
                                var isNumber = void 0;
                                var canUpdate = void 0;
                                var charKey = datePartMatcher[char];
                                var optional = len === 2 ? '' : '?';
                                if (isgmtTraversed) {
                                    gmtCorrection = zCorrectTemp;
                                    isgmtTraversed = false;
                                }
                                switch (char) {
                                    case 'E':
                                    case 'c':
                                        // tslint:disable-next-line
                                        var weekObject = ParserBase.reverseObject(dependable.dateObject[IntlBase.days][standalone$1][IntlBase.monthIndex[len]]);
                                        regexString += '(' + Object.keys(weekObject).join('|') + ')';
                                        break;
                                    case 'M':
                                    case 'L':
                                    case 'd':
                                    case 'm':
                                    case 's':
                                    case 'h':
                                    case 'H':
                                        canUpdate = true;
                                        if ((char === 'M' || char === 'L') && len > 2) {
                                            // tslint:disable-next-line
                                            parseOptions[charKey] = ParserBase.reverseObject(dependable.dateObject[month][standalone$1][IntlBase.monthIndex[len]]);
                                            /* tslint:disable no-any */
                                            regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                                        } else {
                                            isNumber = true;
                                            regexString += '(' + nRegx + nRegx + optional + ')';
                                        }
                                        if (char === 'h') {
                                            parseOptions.hour12 = true;
                                        }
                                        break;
                                    case 'y':
                                        canUpdate = isNumber = true;
                                        if (len === 2) {
                                            regexString += '(' + nRegx + nRegx + ')';
                                        } else {
                                            regexString += '(' + nRegx + '{' + len + ',})';
                                        }
                                        break;
                                    case 'a':
                                        canUpdate = true;
                                        parseOptions[charKey] = ParserBase.reverseObject(getValue('dayPeriods.format.wide', dependable.dateObject));
                                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                                        break;
                                    case 'G':
                                        canUpdate = true;
                                        var eText = len <= 3 ? 'eraAbbr' : len === 4 ? 'eraNames' : 'eraNarrow';
                                        parseOptions[charKey] = ParserBase.reverseObject(getValue('eras.' + eText, dependable.dateObject));
                                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + '?)';
                                        break;
                                    case 'z':
                                        var tval = new Date().getTimezoneOffset();
                                        canUpdate = tval !== 0;
                                        parseOptions[charKey] = getValue('dates.timeZoneNames', dependable.parserObject);
                                        var tzone = parseOptions[charKey];
                                        hourOnly = len < 4;
                                        var hpattern = hourOnly ? '+H;-H' : tzone.hourFormat;
                                        regexString += '(' + this.parseTimeZoneRegx(hpattern, tzone, nRegx) + ')?';
                                        isgmtTraversed = true;
                                        zCorrectTemp = hourOnly ? 6 : 12;
                                        break;
                                    case '\'':
                                        var iString = str.replace(/\'/g, '');
                                        regexString += '(' + iString + ')?';
                                        break;
                                    default:
                                        regexString += '([\\D])';
                                        break;
                                }
                                if (canUpdate) {
                                    parseOptions.evalposition[charKey] = { isNumber: isNumber, pos: i + 1 + gmtCorrection, hourOnly: hourOnly };
                                }
                                if (i === length - 1 && !isNullOrUndefined(regexString)) {
                                    parseOptions.parserRegex = new RegExp('^' + regexString + '$');
                                }
                            }
                        }
                        return function (value) {
                            var parsedDateParts = _this10.internalDateParse(value, parseOptions, numOptions);
                            if (isNullOrUndefined(parsedDateParts) || !Object.keys(parsedDateParts).length) {
                                return null;
                            }
                            return _this10.getDateObject(parsedDateParts);
                        };
                    }
                }, {
                    key: 'getDateObject',
                    value: function getDateObject(options, value) {
                        var res = value || new Date();
                        res.setMilliseconds(0);
                        var tKeys = ['hour', 'minute', 'second', 'month', 'day'];
                        var y = options.year;
                        var desig = options.designator;
                        var tzone = options.timeZone;
                        if (!isUndefined(y)) {
                            var len = (y + '').length;
                            if (len <= 2) {
                                var century = Math.floor(res.getFullYear() / 100) * 100;
                                y += century;
                            }
                            res.setFullYear(y);
                        }
                        var _iteratorNormalCompletion30 = true;
                        var _didIteratorError30 = false;
                        var _iteratorError30 = undefined;

                        try {
                            for (var _iterator30 = tKeys[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
                                var key = _step30.value;

                                var tValue = options[key];
                                if (!isUndefined(tValue)) {
                                    if (key === 'month') {
                                        tValue -= 1;
                                        if (tValue < 0 || tValue > 11) {
                                            return new Date('invalid');
                                        }
                                        var pDate = res.getDate();
                                        res.setDate(1);
                                        res[timeSetter$1[key]](tValue);
                                        var lDate = new Date(res.getFullYear(), tValue + 1, 0).getDate();
                                        res.setDate(pDate < lDate ? pDate : lDate);
                                    } else {
                                        if (key === 'day') {
                                            var lastDay = new Date(res.getFullYear(), res.getMonth() + 1, 0).getDate();
                                            if (tValue < 1 || tValue > lastDay) {
                                                return null;
                                            }
                                        }
                                        res[timeSetter$1[key]](tValue);
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError30 = true;
                            _iteratorError30 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion30 && _iterator30.return) {
                                    _iterator30.return();
                                }
                            } finally {
                                if (_didIteratorError30) {
                                    throw _iteratorError30;
                                }
                            }
                        }

                        if (!isUndefined(desig)) {
                            var hour = res.getHours();
                            if (desig === 'pm') {
                                res.setHours(hour + (hour === 12 ? 0 : 12));
                            } else if (hour === 12) {
                                res.setHours(0);
                            }
                        }
                        if (!isUndefined(tzone)) {
                            var tzValue = tzone - res.getTimezoneOffset();
                            if (tzValue !== 0) {
                                res.setMinutes(res.getMinutes() + tzValue);
                            }
                        }
                        return res;
                    }
                }, {
                    key: 'internalDateParse',
                    value: function internalDateParse(value, parseOptions, num) {
                        var matches = value.match(parseOptions.parserRegex);
                        var retOptions = { 'hour': 0, 'minute': 0, 'second': 0 };
                        var nRegx = num.numericRegex;
                        if (isNullOrUndefined(matches)) {
                            return null;
                        } else {
                            var props = Object.keys(parseOptions.evalposition);
                            var _iteratorNormalCompletion31 = true;
                            var _didIteratorError31 = false;
                            var _iteratorError31 = undefined;

                            try {
                                for (var _iterator31 = props[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
                                    var prop = _step31.value;

                                    var curObject = parseOptions.evalposition[prop];
                                    var matchString = matches[curObject.pos];
                                    if (curObject.isNumber) {
                                        retOptions[prop] = this.internalNumberParser(matchString, num);
                                    } else {
                                        if (prop === 'timeZone' && !isUndefined(matchString)) {
                                            var pos = curObject.pos;
                                            var val = void 0;
                                            var tmatch = matches[pos + 1];
                                            var flag = !isUndefined(tmatch);
                                            if (curObject.hourOnly) {
                                                val = this.getZoneValue(flag, tmatch, matches[pos + 4], num) * 60;
                                            } else {
                                                val = this.getZoneValue(flag, tmatch, matches[pos + 7], num) * 60;
                                                val += this.getZoneValue(flag, matches[pos + 4], matches[pos + 10], num);
                                            }
                                            if (!isNullOrUndefined(val)) {
                                                retOptions[prop] = val;
                                            }
                                        } else {
                                            retOptions[prop] = parseOptions[prop][matchString];
                                        }
                                    }
                                }
                            } catch (err) {
                                _didIteratorError31 = true;
                                _iteratorError31 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion31 && _iterator31.return) {
                                        _iterator31.return();
                                    }
                                } finally {
                                    if (_didIteratorError31) {
                                        throw _iteratorError31;
                                    }
                                }
                            }

                            if (parseOptions.hour12) {
                                retOptions.hour12 = true;
                            }
                        }
                        return retOptions;
                    }
                }, {
                    key: 'internalNumberParser',
                    value: function internalNumberParser(value, option) {
                        value = ParserBase.convertValueParts(value, option.numberParseRegex, option.numericPair);
                        if (latnRegex$1.test(value)) {
                            return +value;
                        }
                        return null;
                    }
                }, {
                    key: 'parseTimeZoneRegx',
                    value: function parseTimeZoneRegx(hourFormat, tZone, nRegex) {
                        var pattern = tZone.gmtFormat;
                        var ret = void 0;
                        var cRegex = '(' + nRegex + ')' + '(' + nRegex + ')';
                        var splitStr = void 0;
                        ret = hourFormat.replace('+', '\\+');
                        if (hourFormat.indexOf('HH') !== -1) {
                            ret = ret.replace(/HH|mm/g, '(' + cRegex + ')');
                        } else {
                            ret = ret.replace(/H|m/g, '(' + cRegex + '?)');
                        }
                        splitStr = ret.split(';').map(function (str) {
                            return pattern.replace('{0}', str);
                        });
                        ret = splitStr.join('|') + '|' + tZone.gmtZeroFormat;
                        return ret;
                    }
                }, {
                    key: 'getZoneValue',
                    value: function getZoneValue(flag, val1, val2, num) {
                        var ival = flag ? val1 : val2;
                        if (!ival) {
                            return 0;
                        }
                        var value = this.internalNumberParser(ival, num);
                        if (flag) {
                            return -value;
                        }
                        return value;
                    }
                }]);

                return DateParser;
            }();

            parseRegex = /^([^0-9]*)(([0-9,]*[0-9]+)(\.[0-9]+)?)([Ee][+-]?[0-9]+)?([^0-9]*)$/;
            groupRegex = /,/g;
            keys = ['minusSign', 'infinity'];

            NumberParser = function () {
                function NumberParser() {
                    _classCallCheck(this, NumberParser);
                }

                _createClass(NumberParser, null, [{
                    key: 'numberParser',
                    value: function numberParser(culture, option, cldr) {
                        var _this11 = this;

                        var dependable = IntlBase.getDependables(cldr, culture, true);
                        var parseOptions = { custom: true };
                        var numOptions = void 0;
                        if (IntlBase.formatRegex.test(option.format) || !option.format) {
                            extend(parseOptions, IntlBase.getProperNumericSkeleton(option.format || 'N'));
                            parseOptions.custom = false;
                        } else {
                            extend(parseOptions, IntlBase.customFormat(option.format, null, null));
                        }
                        numOptions = ParserBase.getCurrentNumericOptions(dependable.parserObject, ParserBase.getNumberingSystem(cldr), true);
                        parseOptions.symbolRegex = ParserBase.getSymbolRegex(Object.keys(numOptions.symbolMatch));
                        // tslint:disable-next-line:no-any
                        parseOptions.infinity = numOptions.symbolNumberSystem[keys[1]];
                        var symbolpattern = IntlBase.getSymbolPattern(parseOptions.type, numOptions.numberSystem, dependable.numericObject, parseOptions.isAccount);
                        if (symbolpattern) {
                            symbolpattern = symbolpattern.replace(/\u00A4/g, IntlBase.defaultCurrency);
                            var split = symbolpattern.split(';');
                            parseOptions.nData = IntlBase.getFormatData(split[1] || '-' + split[0], true, '');
                            parseOptions.pData = IntlBase.getFormatData(split[0], true, '');
                        }
                        return function (value) {
                            return _this11.getParsedNumber(value, parseOptions, numOptions);
                        };
                    }
                }, {
                    key: 'getParsedNumber',
                    value: function getParsedNumber(value, options, numOptions) {
                        var isNegative = void 0;
                        var isPercent = void 0;
                        var tempValue = void 0;
                        var lead = void 0;
                        var end = void 0;
                        var ret = void 0;
                        if (value.indexOf(options.infinity) !== -1) {
                            return Infinity;
                        } else {
                            value = ParserBase.convertValueParts(value, options.symbolRegex, numOptions.symbolMatch);
                            value = ParserBase.convertValueParts(value, numOptions.numberParseRegex, numOptions.numericPair);
                            if (value.indexOf('.') === 0) {
                                value = '0' + value;
                            }
                            var _matches = value.match(parseRegex);
                            if (isNullOrUndefined(_matches)) {
                                return NaN;
                            }
                            lead = _matches[1];
                            tempValue = _matches[2];
                            var exponent = _matches[5];
                            end = _matches[6];
                            isNegative = options.custom ? lead === options.nData.nlead && end === options.nData.nend : lead.indexOf(options.nData.nlead) !== -1 && end.indexOf(options.nData.nend) !== -1;
                            isPercent = isNegative ? options.nData.isPercent : options.pData.isPercent;
                            tempValue = tempValue.replace(groupRegex, '');
                            if (exponent) {
                                tempValue += exponent;
                            }
                            ret = +tempValue;
                            if (options.type === 'percent' || isPercent) {
                                ret = ret / 100;
                            }
                            if (options.custom || options.fractionDigits) {
                                ret = parseFloat(ret.toFixed(options.custom ? isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits : options.fractionDigits));
                            }
                            if (isNegative) {
                                ret *= -1;
                            }
                            return ret;
                        }
                    }
                }]);

                return NumberParser;
            }();

            _export('onIntlChange', onIntlChange = new Observer());

            _export('rightToLeft', rightToLeft = false);

            _export('cldrData', cldrData = {});

            _export('defaultCulture', defaultCulture = 'en-US');

            _export('defaultCurrencyCode', defaultCurrencyCode = 'USD');

            mapper = ['numericObject', 'dateObject'];

            _export('Internationalization', Internationalization = function () {
                function Internationalization(cultureName) {
                    _classCallCheck(this, Internationalization);

                    if (cultureName) {
                        this.culture = cultureName;
                    }
                }
                /**
                 * Returns the format function for given options.
                 * @param {DateFormatOptions} options - Specifies the format options in which the format function will return.
                 * @returns {Function}
                 */


                _createClass(Internationalization, [{
                    key: 'getDateFormat',
                    value: function getDateFormat(options) {
                        return DateFormat.dateFormat(this.getCulture(), options || { type: 'date', skeleton: 'short' }, cldrData);
                    }
                }, {
                    key: 'getNumberFormat',
                    value: function getNumberFormat(options) {
                        if (options && !options.currency) {
                            options.currency = defaultCurrencyCode;
                        }
                        return NumberFormat.numberFormatter(this.getCulture(), options || {}, cldrData);
                    }
                }, {
                    key: 'getDateParser',
                    value: function getDateParser(options) {
                        return DateParser.dateParser(this.getCulture(), options || { skeleton: 'short', type: 'date' }, cldrData);
                    }
                }, {
                    key: 'getNumberParser',
                    value: function getNumberParser(options) {
                        return NumberParser.numberParser(this.getCulture(), options || { format: 'N' }, cldrData);
                    }
                }, {
                    key: 'formatNumber',
                    value: function formatNumber(value, option) {
                        return this.getNumberFormat(option)(value);
                    }
                }, {
                    key: 'formatDate',
                    value: function formatDate(value, option) {
                        return this.getDateFormat(option)(value);
                    }
                }, {
                    key: 'parseDate',
                    value: function parseDate(value, option) {
                        return this.getDateParser(option)(value);
                    }
                }, {
                    key: 'parseNumber',
                    value: function parseNumber(value, option) {
                        return this.getNumberParser(option)(value);
                    }
                }, {
                    key: 'getDatePattern',
                    value: function getDatePattern(option, isExcelFormat) {
                        return IntlBase.getActualDateTimeFormat(this.getCulture(), option, cldrData, isExcelFormat);
                    }
                }, {
                    key: 'getNumberPattern',
                    value: function getNumberPattern(option) {
                        return IntlBase.getActualNumberFormat(this.getCulture(), option, cldrData);
                    }
                }, {
                    key: 'getCulture',
                    value: function getCulture() {
                        return this.culture || defaultCulture;
                    }
                }]);

                return Internationalization;
            }());

            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            componentCount = 0;
            lastPageID = void 0;
            lastHistoryLen = 0;

            _export('Component', Component = function (_Base2) {
                _inherits(Component, _Base2);

                /**
                 * Initialize the constructor for component base
                 */
                function Component(options, selector) {
                    _classCallCheck(this, Component);

                    var _this12 = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, options, selector));

                    _this12.randomId = uniqueID();
                    _this12.needsID = false;
                    if (isNullOrUndefined(_this12.enableRtl)) {
                        _this12.setProperties({ 'enableRtl': rightToLeft }, true);
                    }
                    if (isNullOrUndefined(_this12.locale)) {
                        _this12.setProperties({ 'locale': defaultCulture }, true);
                    }
                    _this12.moduleLoader = new ModuleLoader(_this12);
                    _this12.localObserver = new Observer(_this12);
                    // tslint:disable-next-line:no-function-constructor-with-string-args
                    _this12.detectFunction = new Function('args', 'var prop = Object.keys(args); if(prop.length){this[prop[0]] = args[prop[0]];}');
                    onIntlChange.on('notifyExternalChange', _this12.detectFunction, _this12, _this12.randomId);
                    if (!isUndefined(selector)) {
                        _this12.appendTo();
                    }
                    return _this12;
                }

                _createClass(Component, [{
                    key: 'requiredModules',
                    value: function requiredModules() {
                        return [];
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this.isDestroyed) {
                            return;
                        }
                        if (this.enablePersistence) {
                            this.setPersistData();
                        }
                        this.localObserver.destroy();
                        if (this.refreshing) {
                            return;
                        }
                        this.trigger('destroyed', { cancel: false });
                        _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'destroy', this).call(this);
                        this.moduleLoader.clean();
                        onIntlChange.off('notifyExternalChange', this.detectFunction, this.randomId);
                    }
                }, {
                    key: 'refresh',
                    value: function refresh() {
                        this.refreshing = true;
                        this.moduleLoader.clean();
                        this.destroy();
                        this.clearChanges();
                        this.localObserver = new Observer(this);
                        this.preRender();
                        this.injectModules();
                        this.render();
                        this.refreshing = false;
                    }
                }, {
                    key: 'appendTo',
                    value: function appendTo(selector) {
                        if (!isNullOrUndefined(selector) && typeof selector === 'string') {
                            this.element = document.querySelector(selector);
                        } else if (!isNullOrUndefined(selector)) {
                            this.element = selector;
                        }
                        if (!isNullOrUndefined(this.element)) {
                            this.isProtectedOnChange = false;
                            if (this.needsID && !this.element.id) {
                                this.element.id = this.getUniqueID(this.getModuleName());
                            }
                            if (this.enablePersistence) {
                                this.mergePersistData();
                                window.addEventListener('unload', this.setPersistData.bind(this));
                            }
                            var inst = getValue('ej2_instances', this.element);
                            if (!inst || inst.indexOf(this) === -1) {
                                _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'addInstance', this).call(this);
                            }
                            this.preRender();
                            this.injectModules();
                            this.render();
                            this.trigger('created');
                        }
                    }
                }, {
                    key: 'dataBind',
                    value: function dataBind() {
                        this.injectModules();
                        _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'dataBind', this).call(this);
                    }
                }, {
                    key: 'on',
                    value: function on(event, handler, context) {
                        if (typeof event === 'string') {
                            this.localObserver.on(event, handler, context);
                        } else {
                            var _iteratorNormalCompletion33 = true;
                            var _didIteratorError33 = false;
                            var _iteratorError33 = undefined;

                            try {
                                for (var _iterator33 = event[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
                                    var arg = _step33.value;

                                    this.localObserver.on(arg.event, arg.handler, arg.context);
                                }
                            } catch (err) {
                                _didIteratorError33 = true;
                                _iteratorError33 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion33 && _iterator33.return) {
                                        _iterator33.return();
                                    }
                                } finally {
                                    if (_didIteratorError33) {
                                        throw _iteratorError33;
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'off',
                    value: function off(event, handler) {
                        if (typeof event === 'string') {
                            this.localObserver.off(event, handler);
                        } else {
                            var _iteratorNormalCompletion34 = true;
                            var _didIteratorError34 = false;
                            var _iteratorError34 = undefined;

                            try {
                                for (var _iterator34 = event[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
                                    var arg = _step34.value;

                                    this.localObserver.off(arg.event, arg.handler);
                                }
                            } catch (err) {
                                _didIteratorError34 = true;
                                _iteratorError34 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion34 && _iterator34.return) {
                                        _iterator34.return();
                                    }
                                } finally {
                                    if (_didIteratorError34) {
                                        throw _iteratorError34;
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'notify',
                    value: function notify(property, argument) {
                        if (this.isDestroyed !== true) {
                            this.localObserver.notify(property, argument);
                        }
                    }
                }, {
                    key: 'getInjectedModules',
                    value: function getInjectedModules() {
                        return this.injectedModules;
                    }
                }, {
                    key: 'injectModules',
                    value: function injectModules() {
                        if (this.injectedModules && this.injectedModules.length) {
                            this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
                        }
                    }
                }, {
                    key: 'mergePersistData',
                    value: function mergePersistData() {
                        var data = window.localStorage.getItem(this.getModuleName() + this.element.id);
                        if (!(isNullOrUndefined(data) || data === '')) {
                            this.setProperties(JSON.parse(data), true);
                        }
                    }
                }, {
                    key: 'setPersistData',
                    value: function setPersistData() {
                        if (!this.isDestroyed) {
                            window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
                        }
                    }
                }, {
                    key: 'clearTemplate',
                    value: function clearTemplate(templateName) {
                        //No Code
                    }
                }, {
                    key: 'getUniqueID',
                    value: function getUniqueID(definedName) {
                        if (this.isHistoryChanged()) {
                            componentCount = 0;
                        }
                        lastPageID = this.pageID(location.href);
                        lastHistoryLen = history.length;
                        return definedName + '_' + lastPageID + '_' + componentCount++;
                    }
                }, {
                    key: 'pageID',
                    value: function pageID(url) {
                        var hash = 0;
                        if (url.length === 0) {
                            return hash;
                        }
                        for (var i = 0; i < url.length; i++) {
                            var char = url.charCodeAt(i);
                            hash = (hash << 5) - hash + char;
                            hash = hash & hash; // Convert to 32bit integer
                        }
                        return Math.abs(hash);
                    }
                }, {
                    key: 'isHistoryChanged',
                    value: function isHistoryChanged() {
                        return lastPageID !== this.pageID(location.href) || lastHistoryLen !== history.length;
                    }
                }, {
                    key: 'addOnPersist',
                    value: function addOnPersist(options) {
                        var _this13 = this;

                        var persistObj = {};
                        var _iteratorNormalCompletion35 = true;
                        var _didIteratorError35 = false;
                        var _iteratorError35 = undefined;

                        try {
                            for (var _iterator35 = options[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
                                var key = _step35.value;

                                var objValue = void 0;
                                objValue = getValue(key, this);
                                if (!isUndefined(objValue)) {
                                    setValue(key, this.getActualProperties(objValue), persistObj);
                                }
                            }
                        } catch (err) {
                            _didIteratorError35 = true;
                            _iteratorError35 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion35 && _iterator35.return) {
                                    _iterator35.return();
                                }
                            } finally {
                                if (_didIteratorError35) {
                                    throw _iteratorError35;
                                }
                            }
                        }

                        return JSON.stringify(persistObj, function (key, value) {
                            return _this13.getActualProperties(value);
                        });
                    }
                }, {
                    key: 'getActualProperties',
                    value: function getActualProperties(obj) {
                        if (obj instanceof ChildProperty) {
                            return getValue('properties', obj);
                        } else {
                            return obj;
                        }
                    }
                }, {
                    key: 'ignoreOnPersist',
                    value: function ignoreOnPersist(options) {
                        return JSON.stringify(this.iterateJsonProperties(this.properties, options));
                    }
                }, {
                    key: 'iterateJsonProperties',
                    value: function iterateJsonProperties(obj, ignoreList) {
                        var _this14 = this;

                        var newObj = {};

                        var _loop4 = function _loop4(key) {
                            if (ignoreList.indexOf(key) === -1) {
                                // tslint:disable-next-line:no-any
                                var value = obj[key];
                                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !(value instanceof Array)) {
                                    var newList = ignoreList.filter(function (str) {
                                        return new RegExp(key + '.').test(str);
                                    }).map(function (str) {
                                        return str.replace(key + '.', '');
                                    });
                                    newObj[key] = _this14.iterateJsonProperties(_this14.getActualProperties(value), newList);
                                } else {
                                    newObj[key] = value;
                                }
                            }
                        };

                        var _iteratorNormalCompletion36 = true;
                        var _didIteratorError36 = false;
                        var _iteratorError36 = undefined;

                        try {
                            for (var _iterator36 = Object.keys(obj)[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
                                var key = _step36.value;

                                _loop4(key);
                            }
                        } catch (err) {
                            _didIteratorError36 = true;
                            _iteratorError36 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion36 && _iterator36.return) {
                                    _iterator36.return();
                                }
                            } finally {
                                if (_didIteratorError36) {
                                    throw _iteratorError36;
                                }
                            }
                        }

                        return newObj;
                    }
                }], [{
                    key: 'Inject',
                    value: function Inject() {
                        if (!this.prototype.injectedModules) {
                            this.prototype.injectedModules = [];
                        }

                        for (var _len2 = arguments.length, moduleList = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                            moduleList[_key2] = arguments[_key2];
                        }

                        for (var i = 0; i < moduleList.length; i++) {
                            if (this.prototype.injectedModules.indexOf(moduleList[i]) === -1) {
                                this.prototype.injectedModules.push(moduleList[i]);
                            }
                        }
                    }
                }]);

                return Component;
            }(Base));

            __decorate$1([Property(false)], Component.prototype, "enablePersistence", void 0);
            __decorate$1([Property()], Component.prototype, "enableRtl", void 0);
            __decorate$1([Property()], Component.prototype, "locale", void 0);
            _export('Component', Component = __decorate$1([NotifyPropertyChanges], Component));
            //Function handling for page navigation detection 
            /* istanbul ignore next */
            (function () {
                if (typeof window !== 'undefined') {
                    window.addEventListener('popstate',
                    /* istanbul ignore next */
                    function () {
                        componentCount = 0;
                    });
                }
            })();

            __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            defaultPosition = { left: 0, top: 0, bottom: 0, right: 0 };

            _export('Position', Position = function (_ChildProperty) {
                _inherits(Position, _ChildProperty);

                function Position() {
                    _classCallCheck(this, Position);

                    return _possibleConstructorReturn(this, (Position.__proto__ || Object.getPrototypeOf(Position)).apply(this, arguments));
                }

                return Position;
            }(ChildProperty));

            __decorate$2([Property(0)], Position.prototype, "left", void 0);
            __decorate$2([Property(0)], Position.prototype, "top", void 0);
            /**
             * Draggable Module provides support to enable draggable functionality in Dom Elements.
             * ```html
             * <div id='drag'>Draggable</div>
             * <script>
             * var ele = document.getElementById('drag');
             * var drag:Draggable = new Draggable(ele,{
             *     clone:false,
             *     drag: function(e) {
             *      //drag handler code.
             *      },
             *     handle:'.class'
             * });
             * </script>
             * ```
             */

            _export('Draggable', Draggable = Draggable_1 = function (_Base3) {
                _inherits(Draggable, _Base3);

                function Draggable(element, options) {
                    _classCallCheck(this, Draggable);

                    var _this16 = _possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, options, element));

                    _this16.dragLimit = Draggable_1.getDefaultPosition();
                    _this16.borderWidth = Draggable_1.getDefaultPosition();
                    _this16.padding = Draggable_1.getDefaultPosition();
                    _this16.diffX = 0;
                    _this16.diffY = 0;
                    _this16.droppables = {};
                    _this16.bind();
                    return _this16;
                }

                _createClass(Draggable, [{
                    key: 'bind',
                    value: function bind() {
                        this.toggleEvents();
                        if (Browser.isIE) {
                            addClass([this.element], 'e-block-touch');
                        }
                        this.droppables[this.scope] = {};
                    }
                }, {
                    key: 'toggleEvents',
                    value: function toggleEvents(isUnWire) {
                        var ele = void 0;
                        if (!isUndefined(this.handle)) {
                            ele = select(this.handle, this.element);
                        }
                        if (isUnWire) {
                            EventHandler.remove(ele || this.element, Browser.touchStartEvent, this.initialize);
                        } else {
                            EventHandler.add(ele || this.element, Browser.touchStartEvent, this.initialize, this);
                        }
                    }
                }, {
                    key: 'initialize',
                    value: function initialize(evt) {
                        this.target = evt.currentTarget;
                        if (this.preventDefault && !isUndefined(evt.changedTouches)) {
                            evt.preventDefault();
                        }
                        if (this.abort) {
                            if (!isNullOrUndefined(closest(evt.target, this.abort))) {
                                return;
                            }
                        }
                        this.element.setAttribute('aria-grabbed', 'true');
                        var intCoord = this.getCoordinates(evt);
                        this.initialPosition = { x: intCoord.pageX, y: intCoord.pageY };
                        if (!this.clone) {
                            var pos = this.element.getBoundingClientRect();
                            this.relativeXPosition = intCoord.pageX - pos.left;
                            this.relativeYPosition = intCoord.pageY - pos.top;
                        }
                        EventHandler.add(document, Browser.touchMoveEvent, this.intDragStart, this);
                        EventHandler.add(document, Browser.touchEndEvent, this.intDestroy, this);
                        this.toggleEvents(true);
                        document.body.classList.add('e-prevent-select');
                        EventHandler.trigger(document.documentElement, Browser.touchStartEvent, evt);
                    }
                }, {
                    key: 'intDragStart',
                    value: function intDragStart(evt) {
                        var isChangeTouch = !isUndefined(evt.changedTouches);
                        if (isChangeTouch && evt.changedTouches.length !== 1) {
                            return;
                        }
                        var intCordinate = this.getCoordinates(evt);
                        var pos = void 0;
                        var styleProp = getComputedStyle(this.element);
                        this.margin = {
                            left: parseInt(styleProp.marginLeft, 10),
                            top: parseInt(styleProp.marginTop, 10),
                            right: parseInt(styleProp.marginRight, 10),
                            bottom: parseInt(styleProp.marginBottom, 10)
                        };
                        var element = this.element;
                        if (this.clone && this.dragTarget) {
                            var intClosest = closest(evt.target, this.dragTarget);
                            if (!isNullOrUndefined(intClosest)) {
                                element = intClosest;
                            }
                        }
                        this.offset = this.calculateParentPosition(element);
                        this.position = this.getMousePosition(evt);
                        var x = this.initialPosition.x - intCordinate.pageX;
                        var y = this.initialPosition.y - intCordinate.pageY;
                        var distance = Math.sqrt(x * x + y * y);
                        if (distance >= this.distance) {
                            var ele = this.getHelperElement(evt);
                            if (!ele || isNullOrUndefined(ele)) {
                                return;
                            }
                            var dragTargetElement = this.helperElement = ele;
                            this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent);
                            if (this.dragStart) {
                                var curTarget = this.getProperTargetElement(evt);
                                this.trigger('dragStart', { event: evt, element: element, target: curTarget });
                            }
                            if (this.dragArea) {
                                this.setDragArea();
                            } else {
                                this.dragLimit = { left: 0, right: 0, bottom: 0, top: 0 };
                                this.borderWidth = { top: 0, left: 0 };
                            }
                            pos = { left: this.position.left - this.parentClientRect.left, top: this.position.top - this.parentClientRect.top };
                            if (this.clone && !this.enableTailMode) {
                                this.diffX = this.position.left - this.offset.left;
                                this.diffY = this.position.top - this.offset.top;
                            }
                            var posValue = this.getProcessedPositionValue({ top: pos.top - this.diffY + 'px',
                                left: pos.left - this.diffX + 'px' });
                            setStyleAttribute(dragTargetElement, {
                                position: 'absolute', top: posValue.top, left: posValue.left
                            });
                            EventHandler.remove(document, Browser.touchMoveEvent, this.intDragStart);
                            EventHandler.remove(document, Browser.touchEndEvent, this.intDestroy);
                            if (isVisible(dragTargetElement)) {
                                EventHandler.add(document, Browser.touchMoveEvent, this.intDrag, this);
                                EventHandler.add(document, Browser.touchEndEvent, this.intDragStop, this);
                                this.setGlobalDroppables(false, this.element, dragTargetElement);
                            } else {
                                document.body.classList.remove('e-prevent-select');
                            }
                        }
                    }
                }, {
                    key: 'getProcessedPositionValue',
                    value: function getProcessedPositionValue(value) {
                        if (this.axis) {
                            if (this.axis === 'x') {
                                value.top = '0px';
                            } else if (this.axis === 'y') {
                                value.left = '0px';
                            }
                        }
                        if (this.queryPositionInfo) {
                            return this.queryPositionInfo(value);
                        }
                        return value;
                    }
                }, {
                    key: 'calculateParentPosition',
                    value: function calculateParentPosition(ele) {
                        if (isNullOrUndefined(ele)) {
                            return { left: 0, top: 0 };
                        }
                        var rect = ele.getBoundingClientRect();
                        var style = getComputedStyle(ele);
                        return {
                            left: rect.left + window.pageXOffset - parseInt(style.marginLeft, 10),
                            top: rect.top + window.pageYOffset - parseInt(style.marginTop, 10)
                        };
                    }
                }, {
                    key: 'intDrag',
                    value: function intDrag(evt) {
                        if (!isUndefined(evt.changedTouches) && evt.changedTouches.length !== 1) {
                            return;
                        }
                        var left = void 0;
                        var top = void 0;
                        this.position = this.getMousePosition(evt);
                        var docHeight = this.getDocumentWidthHeight('Height');
                        if (docHeight < this.position.top) {
                            this.position.top = docHeight;
                        }
                        var docWidth = this.getDocumentWidthHeight('Width');
                        if (docWidth < this.position.left) {
                            this.position.left = docWidth;
                        }
                        if (this.drag) {
                            var curTarget = this.getProperTargetElement(evt);
                            this.trigger('drag', { event: evt, element: this.element, target: curTarget });
                        }
                        var eleObj = this.checkTargetElement(evt);
                        if (eleObj.target && eleObj.instance) {
                            eleObj.instance.intOver(evt, eleObj.target);
                            /* tslint:disable no-any */
                            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
                            this.hoverObject = eleObj;
                        } else if (this.hoverObject) {
                            this.hoverObject.instance.intOut(evt, eleObj.target);
                            this.hoverObject.instance.dragData[this.scope] = null;
                            this.hoverObject = null;
                        }
                        var helperElement = this.droppables[this.scope].helper;
                        this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
                        var tLeft = this.parentClientRect.left;
                        var tTop = this.parentClientRect.top;
                        var intCoord = this.getCoordinates(evt);
                        var pagex = intCoord.pageX;
                        var pagey = intCoord.pageY;
                        var dLeft = this.position.left - this.diffX;
                        var dTop = this.position.top - this.diffY;
                        if (this.dragArea) {
                            var styles = getComputedStyle(helperElement);
                            if (this.pageX !== pagex || this.skipDistanceCheck) {
                                var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft) + parseFloat(styles.marginRight));
                                if (this.dragLimit.left > dLeft) {
                                    left = this.dragLimit.left;
                                } else if (this.dragLimit.right < dLeft + helperWidth) {
                                    left = this.dragLimit.right - helperWidth;
                                } else {
                                    left = dLeft;
                                }
                            }
                            if (this.pageY !== pagey || this.skipDistanceCheck) {
                                var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop) + parseFloat(styles.marginBottom));
                                if (this.dragLimit.top > dTop) {
                                    top = this.dragLimit.top;
                                } else if (this.dragLimit.bottom < dTop + helperHeight) {
                                    top = this.dragLimit.bottom - helperHeight;
                                } else {
                                    top = dTop;
                                }
                            }
                        } else {
                            left = dLeft;
                            top = dTop;
                        }
                        var iTop = tTop + this.borderWidth.top;
                        var iLeft = tLeft + this.borderWidth.left;
                        var dragValue = this.getProcessedPositionValue({ top: top - iTop + 'px', left: left - iLeft + 'px' });
                        setStyleAttribute(helperElement, { left: dragValue.left, top: dragValue.top });
                        this.position.left = left;
                        this.position.top = top;
                        this.pageX = pagex;
                        this.pageY = pagey;
                    }
                }, {
                    key: 'getDocumentWidthHeight',
                    value: function getDocumentWidthHeight(str) {
                        var docBody = document.body;
                        var docEle = document.documentElement;
                        var returnValue = Math.max(docBody['scroll' + str], docEle['scroll' + str], docBody['offset' + str], docEle['offset' + str], docEle['client' + str]);
                        return returnValue;
                    }
                }, {
                    key: 'intDragStop',
                    value: function intDragStop(evt) {
                        if (!isUndefined(evt.changedTouches) && evt.changedTouches.length !== 1) {
                            return;
                        }
                        var type = ['touchend', 'pointerup', 'mouseup'];
                        if (type.indexOf(evt.type) !== -1) {
                            if (this.dragStop) {
                                var curTarget = this.getProperTargetElement(evt);
                                this.trigger('dragStop', { event: evt, element: this.element, target: curTarget, helper: this.helperElement });
                            }
                            this.intDestroy(evt);
                        } else {
                            this.element.setAttribute('aria-grabbed', 'false');
                        }
                        var eleObj = this.checkTargetElement(evt);
                        if (eleObj.target && eleObj.instance) {
                            eleObj.instance.dragStopCalled = true;
                            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
                            eleObj.instance.intDrop(evt, eleObj.target);
                        }
                        this.setGlobalDroppables(true);
                        document.body.classList.remove('e-prevent-select');
                    }
                }, {
                    key: 'intDestroy',
                    value: function intDestroy(evt) {
                        this.toggleEvents();
                        document.body.classList.remove('e-prevent-select');
                        this.element.setAttribute('aria-grabbed', 'false');
                        EventHandler.remove(document, Browser.touchMoveEvent, this.intDragStart);
                        EventHandler.remove(document, Browser.touchEndEvent, this.intDragStop);
                        EventHandler.remove(document, Browser.touchEndEvent, this.intDestroy);
                        EventHandler.remove(document, Browser.touchMoveEvent, this.intDrag);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        //No Code to handle
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'draggable';
                    }
                }, {
                    key: 'setDragArea',
                    value: function setDragArea() {
                        var eleWidthBound = void 0;
                        var eleHeightBound = void 0;
                        var top = 0;
                        var left = 0;
                        var ele = void 0;
                        var type = _typeof(this.dragArea);
                        if (type === 'string') {
                            ele = select(this.dragArea);
                        } else {
                            ele = this.dragArea;
                        }
                        if (ele) {
                            var elementArea = ele.getBoundingClientRect();
                            eleWidthBound = elementArea.width ? elementArea.width : elementArea.right - elementArea.left;
                            eleHeightBound = elementArea.height ? elementArea.height : elementArea.bottom - elementArea.top;
                            var _keys2 = ['Top', 'Left', 'Bottom', 'Right'];
                            var styles = getComputedStyle(ele);
                            for (var i = 0; i < _keys2.length; i++) {
                                var key = _keys2[i];
                                var tborder = styles['border' + key + 'Width'];
                                var tpadding = styles['padding' + key];
                                var lowerKey = key.toLowerCase();
                                this.borderWidth[lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder);
                                this.padding[lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
                            }
                            top = elementArea.top;
                            left = elementArea.left;
                            this.dragLimit.left = left + this.borderWidth.left + this.padding.left;
                            this.dragLimit.top = top + this.borderWidth.top + this.padding.top;
                            this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right);
                            this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
                        }
                    }
                }, {
                    key: 'getProperTargetElement',
                    value: function getProperTargetElement(evt) {
                        var intCoord = this.getCoordinates(evt);
                        var ele = void 0;
                        var prevStyle = this.helperElement.style.display || '';
                        if (compareElementParent(evt.target, this.helperElement) || evt.type.indexOf('touch') !== -1) {
                            this.helperElement.style.display = 'none';
                            ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY);
                            this.helperElement.style.display = prevStyle;
                        } else {
                            ele = evt.target;
                        }
                        return ele;
                    }
                }, {
                    key: 'getMousePosition',
                    value: function getMousePosition(evt) {
                        var intCoord = this.getCoordinates(evt);
                        var pageX = this.clone ? intCoord.pageX : intCoord.pageX - this.relativeXPosition;
                        var pageY = this.clone ? intCoord.pageY : intCoord.pageY - this.relativeYPosition;
                        return {
                            left: pageX - (this.margin.left + this.cursorAt.left),
                            top: pageY - (this.margin.top + this.cursorAt.top)
                        };
                    }
                }, {
                    key: 'getCoordinates',
                    value: function getCoordinates(evt) {
                        if (evt.type.indexOf('touch') > -1) {
                            return evt.changedTouches[0];
                        }
                        return evt;
                    }
                }, {
                    key: 'getHelperElement',
                    value: function getHelperElement(evt) {
                        var element = void 0;
                        if (this.clone) {
                            if (this.helper) {
                                element = this.helper({ sender: evt, element: this.target });
                            } else {
                                element = createElement('div', { className: 'e-drag-helper e-block-touch', innerHTML: 'Draggable' });
                                document.body.appendChild(element);
                            }
                        } else {
                            element = this.element;
                        }
                        return element;
                    }
                }, {
                    key: 'setGlobalDroppables',
                    value: function setGlobalDroppables(reset, drag, helper) {
                        this.droppables[this.scope] = reset ? null : {
                            draggable: drag,
                            helper: helper,
                            draggedElement: this.element
                        };
                    }
                }, {
                    key: 'checkTargetElement',
                    value: function checkTargetElement(evt) {
                        var target = this.getProperTargetElement(evt);
                        var dropIns = this.getDropInstance(target);
                        if (!dropIns && target && !isNullOrUndefined(target.parentNode)) {
                            var parent = closest(target.parentNode, '.e-droppable') || target.parentElement;
                            if (parent) {
                                dropIns = this.getDropInstance(parent);
                            }
                        }
                        return { target: target, instance: dropIns };
                    }
                }, {
                    key: 'getDropInstance',
                    value: function getDropInstance(ele) {
                        var name = 'getModuleName';
                        var drop = void 0;
                        var eleInst = ele && ele.ej2_instances;
                        if (eleInst) {
                            var _iteratorNormalCompletion37 = true;
                            var _didIteratorError37 = false;
                            var _iteratorError37 = undefined;

                            try {
                                for (var _iterator37 = eleInst[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
                                    var inst = _step37.value;

                                    if (inst[name]() === 'droppable') {
                                        drop = inst;
                                        break;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError37 = true;
                                _iteratorError37 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion37 && _iterator37.return) {
                                        _iterator37.return();
                                    }
                                } finally {
                                    if (_didIteratorError37) {
                                        throw _iteratorError37;
                                    }
                                }
                            }
                        }
                        return drop;
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.toggleEvents(true);
                        _get(Draggable.prototype.__proto__ || Object.getPrototypeOf(Draggable.prototype), 'destroy', this).call(this);
                    }
                }], [{
                    key: 'getDefaultPosition',
                    value: function getDefaultPosition() {
                        return extend({}, defaultPosition);
                    }
                }]);

                return Draggable;
            }(Base));

            __decorate$2([Complex({}, Position)], Draggable.prototype, "cursorAt", void 0);
            __decorate$2([Property(true)], Draggable.prototype, "clone", void 0);
            __decorate$2([Property()], Draggable.prototype, "dragArea", void 0);
            __decorate$2([Event()], Draggable.prototype, "drag", void 0);
            __decorate$2([Event()], Draggable.prototype, "dragStart", void 0);
            __decorate$2([Event()], Draggable.prototype, "dragStop", void 0);
            __decorate$2([Property(1)], Draggable.prototype, "distance", void 0);
            __decorate$2([Property()], Draggable.prototype, "handle", void 0);
            __decorate$2([Property()], Draggable.prototype, "abort", void 0);
            __decorate$2([Property()], Draggable.prototype, "helper", void 0);
            __decorate$2([Property('default')], Draggable.prototype, "scope", void 0);
            __decorate$2([Property('')], Draggable.prototype, "dragTarget", void 0);
            __decorate$2([Property()], Draggable.prototype, "axis", void 0);
            __decorate$2([Property()], Draggable.prototype, "queryPositionInfo", void 0);
            __decorate$2([Property(false)], Draggable.prototype, "enableTailMode", void 0);
            __decorate$2([Property(false)], Draggable.prototype, "skipDistanceCheck", void 0);
            __decorate$2([Property(true)], Draggable.prototype, "preventDefault", void 0);
            _export('Draggable', Draggable = Draggable_1 = __decorate$2([NotifyPropertyChanges], Draggable));

            __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('Droppable', Droppable = function (_Base4) {
                _inherits(Droppable, _Base4);

                function Droppable(element, options) {
                    _classCallCheck(this, Droppable);

                    var _this17 = _possibleConstructorReturn(this, (Droppable.__proto__ || Object.getPrototypeOf(Droppable)).call(this, options, element));

                    _this17.mouseOver = false;
                    _this17.dragData = {};
                    _this17.dragStopCalled = false;
                    _this17.bind();
                    return _this17;
                }

                _createClass(Droppable, [{
                    key: 'bind',
                    value: function bind() {
                        this.wireEvents();
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        EventHandler.add(this.element, Browser.touchEndEvent, this.intDrop, this);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        //No Code to handle
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'droppable';
                    }
                }, {
                    key: 'intOver',
                    value: function intOver(event, element) {
                        if (!this.mouseOver) {
                            this.trigger('over', { event: event, target: element });
                            this.mouseOver = true;
                        }
                    }
                }, {
                    key: 'intOut',
                    value: function intOut(event, element) {
                        if (this.mouseOver) {
                            this.trigger('out', { evt: event, target: element });
                            this.mouseOver = false;
                        }
                    }
                }, {
                    key: 'intDrop',
                    value: function intDrop(evt, element) {
                        if (!this.dragStopCalled) {
                            return;
                        } else {
                            this.dragStopCalled = false;
                        }
                        var accept = true;
                        var drag = this.dragData[this.scope];
                        var isDrag = drag ? drag.helper && isVisible(drag.helper) : false;
                        var area = void 0;
                        if (isDrag) {
                            area = this.isDropArea(evt, drag.helper, element);
                            if (this.accept) {
                                accept = matches(drag.helper, this.accept);
                            }
                        }
                        if (isDrag && this.drop && area.canDrop && accept) {
                            this.trigger('drop', { event: evt, target: area.target, droppedElement: drag.helper, dragData: drag });
                        }
                    }
                }, {
                    key: 'isDropArea',
                    value: function isDropArea(evt, helper, element) {
                        var area = { canDrop: true, target: element || evt.target };
                        var isTouch = evt.type === 'touchend';
                        if (isTouch || area.target === helper) {
                            helper.style.display = 'none';
                            var coord = isTouch ? evt.changedTouches[0] : evt;
                            var ele = document.elementFromPoint(coord.clientX, coord.clientY);
                            area.canDrop = false;
                            area.canDrop = compareElementParent(ele, this.element);
                            if (area.canDrop) {
                                area.target = ele;
                            }
                            helper.style.display = '';
                        }
                        return area;
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        EventHandler.remove(this.element, Browser.touchEndEvent, this.intDrop);
                        _get(Droppable.prototype.__proto__ || Object.getPrototypeOf(Droppable.prototype), 'destroy', this).call(this);
                    }
                }]);

                return Droppable;
            }(Base));

            __decorate$3([Property()], Droppable.prototype, "accept", void 0);
            __decorate$3([Property('default')], Droppable.prototype, "scope", void 0);
            __decorate$3([Event()], Droppable.prototype, "drop", void 0);
            __decorate$3([Event()], Droppable.prototype, "over", void 0);
            __decorate$3([Event()], Droppable.prototype, "out", void 0);
            _export('Droppable', Droppable = __decorate$3([NotifyPropertyChanges], Droppable));

            __decorate$4 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            keyCode = {
                'backspace': 8,
                'tab': 9,
                'enter': 13,
                'shift': 16,
                'control': 17,
                'alt': 18,
                'pause': 19,
                'capslock': 20,
                'space': 32,
                'escape': 27,
                'pageup': 33,
                'pagedown': 34,
                'end': 35,
                'home': 36,
                'leftarrow': 37,
                'uparrow': 38,
                'rightarrow': 39,
                'downarrow': 40,
                'insert': 45,
                'delete': 46,
                'f1': 112,
                'f2': 113,
                'f3': 114,
                'f4': 115,
                'f5': 116,
                'f6': 117,
                'f7': 118,
                'f8': 119,
                'f9': 120,
                'f10': 121,
                'f11': 122,
                'f12': 123,
                'semicolon': 186,
                'plus': 187,
                'comma': 188,
                'minus': 189,
                'dot': 190,
                'forwardslash': 191,
                'graveaccent': 192,
                'openbracket': 219,
                'backslash': 220,
                'closebracket': 221,
                'singlequote': 222
            };

            _export('KeyboardEvents', KeyboardEvents = KeyboardEvents_1 = function (_Base5) {
                _inherits(KeyboardEvents, _Base5);

                /**
                 * Initializes the KeyboardEvents
                 * @param {HTMLElement} element
                 * @param {KeyboardEventsModel} options
                 */
                function KeyboardEvents(element, options) {
                    _classCallCheck(this, KeyboardEvents);

                    var _this18 = _possibleConstructorReturn(this, (KeyboardEvents.__proto__ || Object.getPrototypeOf(KeyboardEvents)).call(this, options, element));

                    /**
                     * To handle a key press event returns null
                     */
                    _this18.keyPressHandler = function (e) {
                        var isAltKey = e.altKey;
                        var isCtrlKey = e.ctrlKey;
                        var isShiftKey = e.shiftKey;
                        var curkeyCode = e.which;
                        var keys = Object.keys(_this18.keyConfigs);
                        var _iteratorNormalCompletion38 = true;
                        var _didIteratorError38 = false;
                        var _iteratorError38 = undefined;

                        try {
                            for (var _iterator38 = keys[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
                                var key = _step38.value;

                                var configCollection = _this18.keyConfigs[key].split(',');
                                var _iteratorNormalCompletion39 = true;
                                var _didIteratorError39 = false;
                                var _iteratorError39 = undefined;

                                try {
                                    for (var _iterator39 = configCollection[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
                                        var rconfig = _step39.value;

                                        var rKeyObj = KeyboardEvents_1.getKeyConfigData(rconfig.trim());
                                        if (isAltKey === rKeyObj.altKey && isCtrlKey === rKeyObj.ctrlKey && isShiftKey === rKeyObj.shiftKey && curkeyCode === rKeyObj.keyCode) {
                                            e.action = key;
                                            if (_this18.keyAction) {
                                                _this18.keyAction(e);
                                            }
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError39 = true;
                                    _iteratorError39 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion39 && _iterator39.return) {
                                            _iterator39.return();
                                        }
                                    } finally {
                                        if (_didIteratorError39) {
                                            throw _iteratorError39;
                                        }
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError38 = true;
                            _iteratorError38 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion38 && _iterator38.return) {
                                    _iterator38.return();
                                }
                            } finally {
                                if (_didIteratorError38) {
                                    throw _iteratorError38;
                                }
                            }
                        }
                    };
                    _this18.bind();
                    return _this18;
                }
                /**
                 * Unwire bound events and destroy the instance.
                 * @return {void}
                 */


                _createClass(KeyboardEvents, [{
                    key: 'destroy',
                    value: function destroy() {
                        this.unwireEvents();
                        _get(KeyboardEvents.prototype.__proto__ || Object.getPrototypeOf(KeyboardEvents.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        // No code are needed
                    }
                }, {
                    key: 'bind',
                    value: function bind() {
                        this.wireEvents();
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'keyboard';
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        this.element.addEventListener(this.eventName, this.keyPressHandler);
                    }
                }, {
                    key: 'unwireEvents',
                    value: function unwireEvents() {
                        this.element.removeEventListener(this.eventName, this.keyPressHandler);
                    }
                }], [{
                    key: 'getKeyConfigData',
                    value: function getKeyConfigData(config) {
                        if (config in this.configCache) {
                            return this.configCache[config];
                        }
                        var keys = config.toLowerCase().split('+');
                        var keyData = {
                            altKey: keys.indexOf('alt') !== -1 ? true : false,
                            ctrlKey: keys.indexOf('ctrl') !== -1 ? true : false,
                            shiftKey: keys.indexOf('shift') !== -1 ? true : false,
                            keyCode: null
                        };
                        if (keys[keys.length - 1].length > 1 && !!Number(keys[keys.length - 1])) {
                            keyData.keyCode = Number(keys[keys.length - 1]);
                        } else {
                            keyData.keyCode = KeyboardEvents_1.getKeyCode(keys[keys.length - 1]);
                        }
                        KeyboardEvents_1.configCache[config] = keyData;
                        return keyData;
                    }
                }, {
                    key: 'getKeyCode',
                    value: function getKeyCode(keyVal) {
                        return keyCode[keyVal] || keyVal.toUpperCase().charCodeAt(0);
                    }
                }]);

                return KeyboardEvents;
            }(Base));

            KeyboardEvents.configCache = {};
            __decorate$4([Property({})], KeyboardEvents.prototype, "keyConfigs", void 0);
            __decorate$4([Property('keyup')], KeyboardEvents.prototype, "eventName", void 0);
            __decorate$4([Event()], KeyboardEvents.prototype, "keyAction", void 0);
            _export('KeyboardEvents', KeyboardEvents = KeyboardEvents_1 = __decorate$4([NotifyPropertyChanges], KeyboardEvents));

            _export('L10n', L10n = function () {
                /**
                 * Constructor
                 */
                function L10n(controlName, localeStrings, locale) {
                    _classCallCheck(this, L10n);

                    this.controlName = controlName;
                    this.localeStrings = localeStrings;
                    this.setLocale(locale || defaultCulture);
                }
                /**
                 * Sets the locale text
                 * @param {string} locale
                 * @returns {void}
                 */


                _createClass(L10n, [{
                    key: 'setLocale',
                    value: function setLocale(locale) {
                        var intLocale = this.intGetControlConstant(L10n.locale, locale);
                        this.currentLocale = intLocale || this.localeStrings;
                    }
                }, {
                    key: 'getConstant',
                    value: function getConstant(prop) {
                        /* tslint:disable no-any */
                        return this.currentLocale[prop] || this.localeStrings[prop] || '';
                    }
                }, {
                    key: 'intGetControlConstant',
                    value: function intGetControlConstant(curObject, locale) {
                        if (curObject[locale]) {
                            return curObject[locale][this.controlName];
                        }
                        return null;
                    }
                }], [{
                    key: 'load',
                    value: function load(localeObject) {
                        this.locale = extend(this.locale, localeObject, {}, true);
                    }
                }]);

                return L10n;
            }());

            L10n.locale = {};

            /**
             * To import utils
             */

            _export('SvgRenderer', SvgRenderer = function () {
                /* End-Properties */
                function SvgRenderer(rootID) {
                    _classCallCheck(this, SvgRenderer);

                    //Internal Variables 
                    this.svgLink = 'http://www.w3.org/2000/svg';
                    this.rootId = rootID;
                }
                // method to get the attributes value
                /* tslint:disable */


                _createClass(SvgRenderer, [{
                    key: 'getOptionValue',
                    value: function getOptionValue(options, key) {
                        return options[key];
                    }
                }, {
                    key: 'createSvg',
                    value: function createSvg(options) {
                        if (isNullOrUndefined(options.id)) {
                            options.id = this.rootId + '_svg';
                        }
                        this.svgObj = document.getElementById(options.id);
                        if (isNullOrUndefined(document.getElementById(options.id))) {
                            this.svgObj = document.createElementNS(this.svgLink, 'svg');
                        }
                        this.svgObj = this.setElementAttributes(options, this.svgObj);
                        this.setSVGSize(options.width, options.height);
                        return this.svgObj;
                    }
                }, {
                    key: 'setSVGSize',
                    value: function setSVGSize(width, height) {
                        var element = document.getElementById(this.rootId);
                        var size = !isNullOrUndefined(element) ? element.getBoundingClientRect() : null;
                        if (isNullOrUndefined(this.width) || this.width <= 0) {
                            this.svgObj.setAttribute('width', width ? width.toString() : size.width.toString());
                        } else {
                            this.svgObj.setAttribute('width', this.width.toString());
                        }
                        if (isNullOrUndefined(this.height) || this.height <= 0) {
                            this.svgObj.setAttribute('height', height ? height.toString() : '450');
                        } else {
                            this.svgObj.setAttribute('height', this.height.toString());
                        }
                    }
                }, {
                    key: 'drawPath',
                    value: function drawPath(options) {
                        var path = document.getElementById(options.id);
                        if (path === null) {
                            path = document.createElementNS(this.svgLink, 'path');
                        }
                        path = this.setElementAttributes(options, path);
                        return path;
                    }
                }, {
                    key: 'drawLine',
                    value: function drawLine(options) {
                        var line = document.getElementById(options.id);
                        if (line === null) {
                            line = document.createElementNS(this.svgLink, 'line');
                        }
                        line = this.setElementAttributes(options, line);
                        return line;
                    }
                }, {
                    key: 'drawRectangle',
                    value: function drawRectangle(options) {
                        var rectangle = document.getElementById(options.id);
                        if (rectangle === null) {
                            rectangle = document.createElementNS(this.svgLink, 'rect');
                        }
                        rectangle = this.setElementAttributes(options, rectangle);
                        return rectangle;
                    }
                }, {
                    key: 'drawCircle',
                    value: function drawCircle(options) {
                        var circle = document.getElementById(options.id);
                        if (circle === null) {
                            circle = document.createElementNS(this.svgLink, 'circle');
                        }
                        circle = this.setElementAttributes(options, circle);
                        return circle;
                    }
                }, {
                    key: 'drawPolyline',
                    value: function drawPolyline(options) {
                        var polyline = document.getElementById(options.id);
                        if (polyline === null) {
                            polyline = document.createElementNS(this.svgLink, 'polyline');
                        }
                        polyline = this.setElementAttributes(options, polyline);
                        return polyline;
                    }
                }, {
                    key: 'drawEllipse',
                    value: function drawEllipse(options) {
                        var ellipse = document.getElementById(options.id);
                        if (ellipse === null) {
                            ellipse = document.createElementNS(this.svgLink, 'ellipse');
                        }
                        ellipse = this.setElementAttributes(options, ellipse);
                        return ellipse;
                    }
                }, {
                    key: 'drawPolygon',
                    value: function drawPolygon(options) {
                        var polygon = document.getElementById(options.id);
                        if (polygon === null) {
                            polygon = document.createElementNS(this.svgLink, 'polygon');
                        }
                        polygon = this.setElementAttributes(options, polygon);
                        return polygon;
                    }
                }, {
                    key: 'drawImage',
                    value: function drawImage(options) {
                        var img = document.createElementNS(this.svgLink, 'image');
                        img.setAttributeNS(null, 'height', options.height.toString());
                        img.setAttributeNS(null, 'width', options.width.toString());
                        img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', options.href);
                        img.setAttributeNS(null, 'x', options.x.toString());
                        img.setAttributeNS(null, 'y', options.y.toString());
                        img.setAttributeNS(null, 'id', options.id);
                        img.setAttributeNS(null, 'visibility', options.visibility);
                        if (!isNullOrUndefined(this.getOptionValue(options, 'clip-path'))) {
                            img.setAttributeNS(null, 'clip-path', this.getOptionValue(options, 'clip-path'));
                        }
                        if (!isNullOrUndefined(options.preserveAspectRatio)) {
                            img.setAttributeNS(null, 'preserveAspectRatio', options.preserveAspectRatio);
                        }
                        return img;
                    }
                }, {
                    key: 'createText',
                    value: function createText(options, label) {
                        var text = document.createElementNS(this.svgLink, 'text');
                        text = this.setElementAttributes(options, text);
                        if (!isNullOrUndefined(label)) {
                            text.textContent = label;
                        }
                        return text;
                    }
                }, {
                    key: 'createTSpan',
                    value: function createTSpan(options, label) {
                        var tSpan = document.createElementNS(this.svgLink, 'tspan');
                        tSpan = this.setElementAttributes(options, tSpan);
                        if (!isNullOrUndefined(label)) {
                            tSpan.textContent = label;
                        }
                        return tSpan;
                    }
                }, {
                    key: 'createTitle',
                    value: function createTitle(text) {
                        var title = document.createElementNS(this.svgLink, 'title');
                        title.textContent = text;
                        return title;
                    }
                }, {
                    key: 'createDefs',
                    value: function createDefs() {
                        var defs = document.createElementNS(this.svgLink, 'defs');
                        return defs;
                    }
                }, {
                    key: 'createClipPath',
                    value: function createClipPath(options) {
                        var clipPath = document.createElementNS(this.svgLink, 'clipPath');
                        clipPath = this.setElementAttributes(options, clipPath);
                        return clipPath;
                    }
                }, {
                    key: 'createForeignObject',
                    value: function createForeignObject(options) {
                        var foreignObject = document.createElementNS(this.svgLink, 'foreignObject');
                        foreignObject = this.setElementAttributes(options, foreignObject);
                        return foreignObject;
                    }
                }, {
                    key: 'createGroup',
                    value: function createGroup(options) {
                        var group = document.createElementNS(this.svgLink, 'g');
                        group = this.setElementAttributes(options, group);
                        return group;
                    }
                }, {
                    key: 'createPattern',
                    value: function createPattern(options, element) {
                        var pattern = document.createElementNS(this.svgLink, element);
                        pattern = this.setElementAttributes(options, pattern);
                        return pattern;
                    }
                }, {
                    key: 'createRadialGradient',
                    value: function createRadialGradient(colors, name, options) {
                        var colorName = void 0;
                        if (!isNullOrUndefined(colors[0].colorStop)) {
                            var newOptions = {
                                'id': this.rootId + '_' + name + 'radialGradient',
                                'cx': options.cx + '%',
                                'cy': options.cy + '%',
                                'r': options.r + '%',
                                'fx': options.fx + '%',
                                'fy': options.fy + '%'
                            };
                            this.drawGradient('radialGradient', newOptions, colors);
                            colorName = 'url(#' + this.rootId + '_' + name + 'radialGradient)';
                        } else {
                            colorName = colors[0].color.toString();
                        }
                        return colorName;
                    }
                }, {
                    key: 'createLinearGradient',
                    value: function createLinearGradient(colors, name, options) {
                        var colorName = void 0;
                        if (!isNullOrUndefined(colors[0].colorStop)) {
                            var newOptions = {
                                'id': this.rootId + '_' + name + 'linearGradient',
                                'x1': options.x1 + '%',
                                'y1': options.y1 + '%',
                                'x2': options.x2 + '%',
                                'y2': options.y2 + '%'
                            };
                            this.drawGradient('linearGradient', newOptions, colors);
                            colorName = 'url(#' + this.rootId + '_' + name + 'linearGradient)';
                        } else {
                            colorName = colors[0].color.toString();
                        }
                        return colorName;
                    }
                }, {
                    key: 'drawGradient',
                    value: function drawGradient(gradientType, options, colors) {
                        var defs = this.createDefs();
                        var gradient = document.createElementNS(this.svgLink, gradientType);
                        gradient = this.setElementAttributes(options, gradient);
                        for (var i = 0; i < colors.length; i++) {
                            var stop = document.createElementNS(this.svgLink, 'stop');
                            stop.setAttribute('offset', colors[i].colorStop);
                            stop.setAttribute('stop-color', colors[i].color);
                            stop.setAttribute('stop-opacity', '1');
                            gradient.appendChild(stop);
                        }
                        defs.appendChild(gradient);
                        return defs;
                    }
                }, {
                    key: 'drawClipPath',
                    value: function drawClipPath(options) {
                        var defs = this.createDefs();
                        var clipPath = this.createClipPath({ 'id': options.id });
                        var rect = this.drawRectangle(options);
                        clipPath.appendChild(rect);
                        defs.appendChild(clipPath);
                        return defs;
                    }
                }, {
                    key: 'drawCircularClipPath',
                    value: function drawCircularClipPath(options) {
                        var defs = this.createDefs();
                        var clipPath = this.createClipPath({ 'id': options.id });
                        var circle = this.drawCircle(options);
                        clipPath.appendChild(circle);
                        defs.appendChild(clipPath);
                        return defs;
                    }
                }, {
                    key: 'setElementAttributes',
                    value: function setElementAttributes(options, element) {
                        var keys = Object.keys(options);
                        for (var i = 0; i < keys.length; i++) {
                            element.setAttribute(keys[i], options[keys[i]]);
                        }
                        return element;
                    }
                }]);

                return SvgRenderer;
            }());

            __decorate$5 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('SwipeSettings', SwipeSettings = function (_ChildProperty2) {
                _inherits(SwipeSettings, _ChildProperty2);

                function SwipeSettings() {
                    _classCallCheck(this, SwipeSettings);

                    return _possibleConstructorReturn(this, (SwipeSettings.__proto__ || Object.getPrototypeOf(SwipeSettings)).apply(this, arguments));
                }

                return SwipeSettings;
            }(ChildProperty));

            __decorate$5([Property(50)], SwipeSettings.prototype, "swipeThresholdDistance", void 0);
            swipeRegex = /(Up|Down)/;

            _export('Touch', Touch = function (_Base6) {
                _inherits(Touch, _Base6);

                /* End-Properties */
                function Touch(element, options) {
                    _classCallCheck(this, Touch);

                    var _this20 = _possibleConstructorReturn(this, (Touch.__proto__ || Object.getPrototypeOf(Touch)).call(this, options, element));

                    _this20.touchAction = true;
                    _this20.tapCount = 0;
                    _this20.startEvent = function (evt) {
                        if (_this20.touchAction === true) {
                            var point = evt.changedTouches ? evt.changedTouches[0] : evt;
                            if (evt.changedTouches !== undefined) {
                                _this20.touchAction = false;
                            }
                            _this20.isTouchMoved = false;
                            _this20.movedDirection = '';
                            _this20.startPoint = _this20.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
                            _this20.startEventData = point;
                            _this20.hScrollLocked = _this20.vScrollLocked = false;
                            _this20.tStampStart = Date.now();
                            _this20.timeOutTapHold = setTimeout(function () {
                                _this20.tapHoldEvent(evt);
                            }, _this20.tapHoldThreshold);
                            EventHandler.add(_this20.element, Browser.touchMoveEvent, _this20.moveEvent, _this20);
                            EventHandler.add(_this20.element, Browser.touchEndEvent, _this20.endEvent, _this20);
                        }
                    };
                    _this20.moveEvent = function (evt) {
                        var point = evt.changedTouches ? evt.changedTouches[0] : evt;
                        _this20.movedPoint = point;
                        _this20.isTouchMoved = !(point.clientX === _this20.startPoint.clientX && point.clientY === _this20.startPoint.clientY);
                        var eScrollArgs = {};
                        if (_this20.isTouchMoved) {
                            clearTimeout(_this20.timeOutTapHold);
                            _this20.calcScrollPoints(evt);
                            var scrollArg = {
                                startEvents: _this20.startEventData,
                                originalEvent: evt, startX: _this20.startPoint.clientX,
                                startY: _this20.startPoint.clientY, distanceX: _this20.distanceX,
                                distanceY: _this20.distanceY, scrollDirection: _this20.scrollDirection,
                                velocity: _this20.getVelocity(point)
                            };
                            eScrollArgs = extend(eScrollArgs, {}, scrollArg);
                            _this20.trigger('scroll', eScrollArgs);
                            _this20.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
                        }
                    };
                    _this20.endEvent = function (evt) {
                        clearTimeout(_this20.timeOutTapHold);
                        clearTimeout(_this20.timeOutTap);
                        var point = evt;
                        if (evt.changedTouches) {
                            point = evt.changedTouches[0];
                        }
                        var diffX = point.clientX - _this20.startPoint.clientX;
                        var diffY = point.clientY - _this20.startPoint.clientY;
                        diffX = Math.floor(diffX < 0 ? -1 * diffX : diffX);
                        diffY = Math.floor(diffY < 0 ? -1 * diffY : diffX);
                        _this20.isTouchMoved = diffX > 1 || diffY > 1;
                        _this20.endPoint = point;
                        var eSwipeArgs = void 0;
                        var tDistance = _this20.swipeSettings.swipeThresholdDistance;
                        _this20.calcPoints(evt);
                        var swipeArgs = {
                            originalEvent: evt,
                            startEvents: _this20.startEventData,
                            startX: _this20.startPoint.clientX,
                            startY: _this20.startPoint.clientY,
                            distanceX: _this20.distanceX, distanceY: _this20.distanceY, swipeDirection: _this20.movedDirection,
                            velocity: _this20.getVelocity(point)
                        };
                        if (!_this20.isTouchMoved) {
                            if (typeof _this20.tap === 'function') {
                                _this20.trigger('tap', { originalEvent: evt, tapCount: ++_this20.tapCount });
                                _this20.timeOutTap = setTimeout(function () {
                                    _this20.tapCount = 0;
                                }, _this20.tapThreshold);
                            }
                        } else {
                            eSwipeArgs = extend(eSwipeArgs, _this20.defaultArgs, swipeArgs);
                            var canTrigger = false;
                            var ele = _this20.element;
                            var scrollBool = _this20.isScrollable(ele);
                            var moved = swipeRegex.test(_this20.movedDirection);
                            if (tDistance < _this20.distanceX && !moved || tDistance < _this20.distanceY && moved) {
                                if (!scrollBool) {
                                    canTrigger = true;
                                } else {
                                    canTrigger = _this20.checkSwipe(ele, moved);
                                }
                            }
                            if (canTrigger) {
                                _this20.trigger('swipe', eSwipeArgs);
                            }
                        }
                        _this20.modeClear = setTimeout(function () {
                            _this20.touchAction = true;
                        }, typeof _this20.tap !== 'function' ? 0 : 10);
                        _this20.lastTapTime = new Date().getTime();
                        EventHandler.remove(_this20.element, Browser.touchMoveEvent, _this20.moveEvent);
                        EventHandler.remove(_this20.element, Browser.touchEndEvent, _this20.endEvent);
                    };
                    _this20.bind();
                    return _this20;
                }
                // triggers when property changed 
                /**
                 * @private
                 * @param newProp
                 * @param oldProp
                 */


                _createClass(Touch, [{
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        //No Code to handle
                    }
                }, {
                    key: 'bind',
                    value: function bind() {
                        this.wireEvents();
                        if (Browser.isIE) {
                            this.element.classList.add('e-block-touch');
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.unwireEvents();
                        _get(Touch.prototype.__proto__ || Object.getPrototypeOf(Touch.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        EventHandler.add(this.element, Browser.touchStartEvent, this.startEvent, this);
                    }
                }, {
                    key: 'unwireEvents',
                    value: function unwireEvents() {
                        EventHandler.remove(this.element, Browser.touchStartEvent, this.startEvent);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'touch';
                    }
                }, {
                    key: 'isScrollable',
                    value: function isScrollable(element) {
                        var eleStyle = getComputedStyle(element);
                        var style = eleStyle.overflow + eleStyle.overflowX + eleStyle.overflowY;
                        if (/(auto|scroll)/.test(style)) {
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: 'tapHoldEvent',
                    value: function tapHoldEvent(evt) {
                        this.tapCount = 0;
                        this.touchAction = true;
                        var eTapArgs = void 0;
                        EventHandler.remove(this.element, Browser.touchMoveEvent, this.moveEvent);
                        EventHandler.remove(this.element, Browser.touchEndEvent, this.endEvent);
                        eTapArgs = { originalEvent: evt };
                        this.trigger('tapHold', eTapArgs);
                    }
                }, {
                    key: 'calcPoints',
                    value: function calcPoints(evt) {
                        var point = evt.changedTouches ? evt.changedTouches[0] : evt;
                        this.defaultArgs = { originalEvent: evt };
                        this.distanceX = Math.abs(Math.abs(point.clientX) - Math.abs(this.startPoint.clientX));
                        this.distanceY = Math.abs(Math.abs(point.clientY) - Math.abs(this.startPoint.clientY));
                        if (this.distanceX > this.distanceY) {
                            this.movedDirection = point.clientX > this.startPoint.clientX ? 'Right' : 'Left';
                        } else {
                            this.movedDirection = point.clientY < this.startPoint.clientY ? 'Up' : 'Down';
                        }
                    }
                }, {
                    key: 'calcScrollPoints',
                    value: function calcScrollPoints(evt) {
                        var point = evt.changedTouches ? evt.changedTouches[0] : evt;
                        this.defaultArgs = { originalEvent: evt };
                        this.distanceX = Math.abs(Math.abs(point.clientX) - Math.abs(this.lastMovedPoint.clientX));
                        this.distanceY = Math.abs(Math.abs(point.clientY) - Math.abs(this.lastMovedPoint.clientY));
                        if ((this.distanceX > this.distanceY || this.hScrollLocked === true) && this.vScrollLocked === false) {
                            this.scrollDirection = point.clientX > this.lastMovedPoint.clientX ? 'Right' : 'Left';
                            this.hScrollLocked = true;
                        } else {
                            this.scrollDirection = point.clientY < this.lastMovedPoint.clientY ? 'Up' : 'Down';
                            this.vScrollLocked = true;
                        }
                    }
                }, {
                    key: 'getVelocity',
                    value: function getVelocity(pnt) {
                        var newX = pnt.clientX;
                        var newY = pnt.clientY;
                        var newT = Date.now();
                        var xDist = newX - this.startPoint.clientX;
                        var yDist = newY - this.startPoint.clientX;
                        var interval = newT - this.tStampStart;
                        return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
                    }
                }, {
                    key: 'checkSwipe',
                    value: function checkSwipe(ele, flag) {
                        var keys = ['scroll', 'offset'];
                        var temp = flag ? ['Height', 'Top'] : ['Width', 'Left'];
                        if (ele[keys[0] + temp[0]] <= ele[keys[1] + temp[0]]) {
                            return true;
                        }
                        return ele[keys[0] + temp[1]] === 0 || ele[keys[1] + temp[0]] + ele[keys[0] + temp[1]] >= ele[keys[0] + temp[0]];
                    }
                }]);

                return Touch;
            }(Base));

            __decorate$5([Event()], Touch.prototype, "tap", void 0);
            __decorate$5([Event()], Touch.prototype, "tapHold", void 0);
            __decorate$5([Event()], Touch.prototype, "swipe", void 0);
            __decorate$5([Event()], Touch.prototype, "scroll", void 0);
            __decorate$5([Property(350)], Touch.prototype, "tapThreshold", void 0);
            __decorate$5([Property(750)], Touch.prototype, "tapHoldThreshold", void 0);
            __decorate$5([Complex({}, SwipeSettings)], Touch.prototype, "swipeSettings", void 0);
            _export('Touch', Touch = __decorate$5([NotifyPropertyChanges], Touch));

            /**
             * Template Engine
             */
            LINES = new RegExp('\\n|\\r|\\s\\s+', 'g');
            QUOTES = new RegExp(/'|"/g);
            IF_STMT = new RegExp('if ?\\(');
            ELSEIF_STMT = new RegExp('else if ?\\(');
            ELSE_STMT = new RegExp('else');
            FOR_STMT = new RegExp('for ?\\(');
            IF_OR_FOR = new RegExp('(\/if|\/for)');
            CALL_FUNCTION = new RegExp('\\((.*)\\)', '');
            NOT_NUMBER = new RegExp('^[0-9]+$', 'g');
            WORD = new RegExp('[\\w"\'.\\s+]+', 'g');
            DBL_QUOTED_STR = new RegExp('"(.*?)"', 'g');
            exp = new RegExp('\\${([^}]*)}', 'g');
            HAS_ROW = /^[\n\r.]+\<tr|^\<tr/;

            Engine = function () {
                function Engine() {
                    _classCallCheck(this, Engine);
                }

                _createClass(Engine, [{
                    key: 'compile',
                    value: function compile(templateString) {
                        var helper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                        return compile$1(templateString, helper);
                    }
                }]);

                return Engine;
            }();

            engineObj = { compile: new Engine().compile };

            _export('Ajax', Ajax);

            _export('Animation', Animation);

            _export('rippleEffect', rippleEffect);

            _export('isRippleEnabled', isRippleEnabled);

            _export('enableRipple', enableRipple);

            _export('Base', Base);

            _export('Browser', Browser);

            _export('CanvasRenderer', CanvasRenderer);

            _export('Component', Component);

            _export('ChildProperty', ChildProperty);

            _export('Position', Position);

            _export('Draggable', Draggable);

            _export('Droppable', Droppable);

            _export('EventHandler', EventHandler);

            _export('onIntlChange', onIntlChange);

            _export('rightToLeft', rightToLeft);

            _export('cldrData', cldrData);

            _export('defaultCulture', defaultCulture);

            _export('defaultCurrencyCode', defaultCurrencyCode);

            _export('Internationalization', Internationalization);

            _export('setCulture', setCulture);

            _export('setCurrencyCode', setCurrencyCode);

            _export('loadCldr', loadCldr);

            _export('enableRtl', enableRtl);

            _export('getNumericObject', getNumericObject);

            _export('getDefaultDateObject', getDefaultDateObject);

            _export('KeyboardEvents', KeyboardEvents);

            _export('L10n', L10n);

            _export('ModuleLoader', ModuleLoader);

            _export('Property', Property);

            _export('Complex', Complex);

            _export('ComplexFactory', ComplexFactory);

            _export('Collection', Collection);

            _export('CollectionFactory', CollectionFactory);

            _export('Event', Event);

            _export('NotifyPropertyChanges', NotifyPropertyChanges);

            _export('CreateBuilder', CreateBuilder);

            _export('SvgRenderer', SvgRenderer);

            _export('SwipeSettings', SwipeSettings);

            _export('Touch', Touch);

            _export('compile', compile$$1);

            _export('setTemplateEngine', setTemplateEngine);

            _export('getTemplateEngine', getTemplateEngine);

            _export('createInstance', createInstance);

            _export('setImmediate', setImmediate);

            _export('getValue', getValue);

            _export('setValue', setValue);

            _export('deleteObject', deleteObject);

            _export('isObject', isObject);

            _export('getEnumValue', getEnumValue);

            _export('merge', merge);

            _export('extend', extend);

            _export('isNullOrUndefined', isNullOrUndefined);

            _export('isUndefined', isUndefined);

            _export('getUniqueID', getUniqueID);

            _export('debounce', debounce);

            _export('queryParams', queryParams);

            _export('isObjectArray', isObjectArray);

            _export('compareElementParent', compareElementParent);

            _export('throwError', throwError);

            _export('print', print);

            _export('formatUnit', formatUnit);

            _export('getInstance', getInstance);

            _export('addInstance', addInstance);

            _export('uniqueID', uniqueID);

            _export('createElement', createElement);

            _export('addClass', addClass);

            _export('removeClass', removeClass);

            _export('isVisible', isVisible);

            _export('prepend', prepend);

            _export('append', append);

            _export('detach', detach);

            _export('remove', remove);

            _export('attributes', attributes);

            _export('select', select);

            _export('selectAll', selectAll);

            _export('closest', closest);

            _export('siblings', siblings);

            _export('getAttributeOrDefault', getAttributeOrDefault);

            _export('setStyleAttribute', setStyleAttribute);

            _export('classList', classList);

            _export('matches', matches);
        }
    };
});

//# sourceMappingURL=ej2-base.es2015-compiled.js.map