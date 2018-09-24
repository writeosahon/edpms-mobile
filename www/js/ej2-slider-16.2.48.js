var ej = function(exports) {
    "use strict";
    function createInstance(classFunction, params) {
        var arrayParam = params;
        return arrayParam.unshift(void 0), new (Function.prototype.bind.apply(classFunction, arrayParam))();
    }
    function setImmediate(handler) {
        var unbind, num = new Uint16Array(5);
        (window.msCrypto || window.crypto).getRandomValues(num);
        var secret = "ej2" + function(num) {
            for (var ret = "", i = 0; i < 5; i++) ret += (i ? "," : "") + num[i];
            return ret;
        }(num), messageHandler = function(event) {
            event.source === window && "string" == typeof event.data && event.data.length <= 32 && event.data === secret && (handler(), 
            unbind());
        };
        return window.addEventListener("message", messageHandler, !1), window.postMessage(secret, "*"), 
        unbind = function() {
            window.removeEventListener("message", messageHandler), handler = messageHandler = secret = void 0;
        };
    }
    function getValue(nameSpace, obj) {
        for (var value = obj, splits = nameSpace.split("."), i = 0; i < splits.length && !isUndefined(value); i++) value = value[splits[i]];
        return value;
    }
    function setValue(nameSpace, value, obj) {
        var i, key, keys = nameSpace.split("."), start = obj || {}, fromObj = start, length = keys.length;
        for (i = 0; i < length; i++) key = keys[i], i + 1 === length ? fromObj[key] = void 0 === value ? {} : value : isNullOrUndefined(fromObj[key]) && (fromObj[key] = {}), 
        fromObj = fromObj[key];
        return start;
    }
    function deleteObject(obj, key) {
        delete obj[key];
    }
    function isObject$1(obj) {
        return !isNullOrUndefined(obj) && obj.constructor === {}.constructor;
    }
    function merge(source, destination) {
        if (!isNullOrUndefined(destination)) for (var temrObj = source, tempProp = destination, _i = 0, keys_1 = Object.keys(destination); _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            isNullOrUndefined(temrObj.deepMerge) || -1 === temrObj.deepMerge.indexOf(key) || !isObject$1(tempProp[key]) && !Array.isArray(tempProp[key]) ? temrObj[key] = tempProp[key] : extend(temrObj[key], temrObj[key], tempProp[key], !0);
        }
    }
    function extend(copied, first, second, deep) {
        var result = copied || {}, length = arguments.length;
        deep && (length -= 1);
        for (var _loop_1 = function(i) {
            if (!arguments_1[i]) return "continue";
            var obj1 = arguments_1[i];
            Object.keys(obj1).forEach(function(key) {
                var clone, src = result[key], copy = obj1[key];
                deep && (isObject$1(copy) || Array.isArray(copy)) ? isObject$1(copy) ? (clone = src || {}, 
                result[key] = extend({}, clone, copy, deep)) : (clone = src || [], result[key] = extend([], clone, copy, deep)) : result[key] = copy;
            });
        }, arguments_1 = arguments, i = 1; i < length; i++) _loop_1(i);
        return result;
    }
    function isNullOrUndefined(value) {
        return void 0 === value || null === value;
    }
    function isUndefined(value) {
        return void 0 === value;
    }
    function getUniqueID(definedName) {
        return definedName + "_" + uid++;
    }
    function debounce(eventFunction, delay) {
        var out;
        return function() {
            var _this = this, args = arguments;
            clearTimeout(out), out = setTimeout(function() {
                return out = null, eventFunction.apply(_this, args);
            }, delay);
        };
    }
    function compareElementParent(child, parent) {
        var node = child;
        return node === parent || !(node === document || !node) && compareElementParent(node.parentNode, parent);
    }
    function throwError(message) {
        try {
            throw new Error(message);
        } catch (e) {
            throw e.message + "\n" + e.stack;
        }
    }
    function formatUnit(value) {
        var result = value + "";
        return "auto" === result || -1 !== result.indexOf("%") || -1 !== result.indexOf("px") ? result : result + "px";
    }
    function getInstance(element, component) {
        var elem = "string" == typeof element ? document.querySelector(element) : element;
        if (elem[instances]) for (var _i = 0, _a = elem[instances]; _i < _a.length; _i++) {
            var inst = _a[_i];
            if (inst instanceof component) return inst;
        }
        return null;
    }
    function uniqueID() {
        if ("undefined" != typeof window) {
            var num = new Uint16Array(5);
            return (window.msCrypto || window.crypto).getRandomValues(num);
        }
    }
    function createElement(tagName, properties) {
        var element = SVG_REG.test(tagName) ? document.createElementNS("http://www.w3.org/2000/svg", tagName) : document.createElement(tagName);
        return void 0 === properties ? element : (element.innerHTML = properties.innerHTML ? properties.innerHTML : "", 
        void 0 !== properties.className && (element.className = properties.className), void 0 !== properties.id && (element.id = properties.id), 
        void 0 !== properties.styles && element.setAttribute("style", properties.styles), 
        void 0 !== properties.attrs && attributes(element, properties.attrs), element);
    }
    function addClass(elements, classes) {
        for (var classList = getClassList(classes), _i = 0, _a = elements; _i < _a.length; _i++) for (var ele = _a[_i], _b = 0, classList_1 = classList; _b < classList_1.length; _b++) {
            var className = classList_1[_b];
            ele.classList.contains(className) || ele.classList.add(className);
        }
        return elements;
    }
    function removeClass(elements, classes) {
        for (var classList = getClassList(classes), _i = 0, _a = elements; _i < _a.length; _i++) {
            var ele = _a[_i];
            if ("" !== ele.className) for (var _b = 0, classList_2 = classList; _b < classList_2.length; _b++) {
                var className = classList_2[_b];
                ele.classList.remove(className);
            }
        }
        return elements;
    }
    function getClassList(classes) {
        var classList = [];
        return "string" == typeof classes ? classList.push(classes) : classList = classes, 
        classList;
    }
    function isVisible(element) {
        var ele = element;
        return "" === ele.style.visibility && ele.offsetWidth > 0;
    }
    function prepend(fromElements, toElement) {
        for (var docFrag = document.createDocumentFragment(), _i = 0, _a = fromElements; _i < _a.length; _i++) {
            var ele = _a[_i];
            docFrag.appendChild(ele);
        }
        return toElement.insertBefore(docFrag, toElement.firstElementChild), fromElements;
    }
    function append(fromElements, toElement) {
        for (var docFrag = document.createDocumentFragment(), _i = 0, _a = fromElements; _i < _a.length; _i++) {
            var ele = _a[_i];
            docFrag.appendChild(ele);
        }
        return toElement.appendChild(docFrag), fromElements;
    }
    function detach(element) {
        return element.parentNode.removeChild(element);
    }
    function remove(element) {
        var parentNode = element.parentNode;
        EventHandler.clearEvents(element), parentNode.removeChild(element);
    }
    function attributes(element, attributes) {
        for (var ele = element, _i = 0, keys_1 = Object.keys(attributes); _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            ele.setAttribute(key, attributes[key]);
        }
        return ele;
    }
    function select(selector, context) {
        return void 0 === context && (context = document), context.querySelector(selector);
    }
    function selectAll(selector, context) {
        void 0 === context && (context = document);
        return context.querySelectorAll(selector);
    }
    function closest(element, selector) {
        var el = element;
        if ("function" == typeof el.closest) return el.closest(selector);
        for (;el && 1 === el.nodeType; ) {
            if (matches(el, selector)) return el;
            el = el.parentNode;
        }
        return null;
    }
    function setStyleAttribute(element, attrs) {
        void 0 !== attrs && Object.keys(attrs).forEach(function(key) {
            element.style[key] = attrs[key];
        });
    }
    function matches(element, selector) {
        var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
        return matches ? matches.call(element, selector) : -1 !== [].indexOf.call(document.querySelectorAll(selector), element);
    }
    function getObject(instance, curKey, defaultValue, type) {
        return instance.properties.hasOwnProperty(curKey) && instance.properties[curKey] instanceof type || (instance.properties[curKey] = createInstance(type, [ instance, curKey, defaultValue ])), 
        instance.properties[curKey];
    }
    function getObjectArray(instance, curKey, defaultValue, type, isSetter, isFactory) {
        for (var result = [], len = defaultValue.length, i = 0; i < len; i++) {
            var curType = type;
            if (isFactory && (curType = type(defaultValue[i])), isSetter) {
                var inst = createInstance(curType, [ instance, curKey, {}, !0 ]);
                inst.setProperties(defaultValue[i], !0), result.push(inst);
            } else result.push(createInstance(curType, [ instance, curKey, defaultValue[i], !0 ]));
        }
        return result;
    }
    function propertyGetter(defaultValue, curKey) {
        return function() {
            return this.properties.hasOwnProperty(curKey) || (this.properties[curKey] = defaultValue), 
            this.properties[curKey];
        };
    }
    function Property(defaultValue) {
        return function(target, key) {
            var propertyDescriptor = {
                set: function(defaultValue, curKey) {
                    return function(newValue) {
                        if (this.properties[curKey] !== newValue) {
                            var oldVal = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
                            this.saveChanges(curKey, newValue, oldVal), this.properties[curKey] = newValue;
                        }
                    };
                }(defaultValue, key),
                get: propertyGetter(defaultValue, key),
                enumerable: !0,
                configurable: !0
            };
            Object.defineProperty(target, key, propertyDescriptor), addPropertyCollection(target, key, "prop", defaultValue);
        };
    }
    function Complex(defaultValue, type) {
        return function(target, key) {
            var propertyDescriptor = {
                set: function(defaultValue, curKey, type) {
                    return function(newValue) {
                        getObject(this, curKey, defaultValue, type).setProperties(newValue);
                    };
                }(defaultValue, key, type),
                get: function(defaultValue, curKey, type) {
                    return function() {
                        return getObject(this, curKey, defaultValue, type);
                    };
                }(defaultValue, key, type),
                enumerable: !0,
                configurable: !0
            };
            Object.defineProperty(target, key, propertyDescriptor), addPropertyCollection(target, key, "complexProp", defaultValue, type);
        };
    }
    function Collection(defaultValue, type) {
        return function(target, key) {
            var propertyDescriptor = {
                set: function(defaultValue, curKey, type) {
                    return function(newValue) {
                        var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, !1), newValCollection = getObjectArray(this, curKey, newValue, type, !0);
                        this.saveChanges(curKey, newValCollection, oldValueCollection), this.properties[curKey] = newValCollection;
                    };
                }(defaultValue, key, type),
                get: function(defaultValue, curKey, type) {
                    return function() {
                        if (!this.properties.hasOwnProperty(curKey)) {
                            var defCollection = getObjectArray(this, curKey, defaultValue, type, !1);
                            this.properties[curKey] = defCollection;
                        }
                        return this.properties[curKey];
                    };
                }(defaultValue, key, type),
                enumerable: !0,
                configurable: !0
            };
            Object.defineProperty(target, key, propertyDescriptor), addPropertyCollection(target, key, "colProp", defaultValue, type);
        };
    }
    function Event() {
        return function(target, key) {
            var eventDescriptor = {
                set: function(newValue) {
                    var oldValue = this.properties[key];
                    if (oldValue !== newValue) {
                        var finalContext = getParentContext(this, key);
                        !1 === isUndefined(oldValue) && finalContext.context.removeEventListener(finalContext.prefix, oldValue), 
                        finalContext.context.addEventListener(finalContext.prefix, newValue), this.properties[key] = newValue;
                    }
                },
                get: propertyGetter(void 0, key),
                enumerable: !0,
                configurable: !0
            };
            Object.defineProperty(target, key, eventDescriptor), addPropertyCollection(target, key, "event");
        };
    }
    function NotifyPropertyChanges(classConstructor) {}
    function addPropertyCollection(target, key, propertyType, defaultValue, type) {
        isUndefined(target.propList) && (target.propList = {
            props: [],
            complexProps: [],
            colProps: [],
            events: [],
            propNames: [],
            complexPropNames: [],
            colPropNames: [],
            eventNames: []
        }), target.propList[propertyType + "s"].push({
            propertyName: key,
            defaultValue: defaultValue,
            type: type
        }), target.propList[propertyType + "Names"].push(key);
    }
    function getBuilderProperties(component) {
        if (isUndefined(component.prototype.builderObject)) {
            component.prototype.builderObject = {
                properties: {},
                propCollections: [],
                add: function() {
                    this.isPropertyArray = !0, this.propCollections.push(extend({}, this.properties, {}));
                }
            };
            for (var rex = /complex/, _i = 0, _a = Object.keys(component.prototype.propList); _i < _a.length; _i++) for (var key = _a[_i], _loop_1 = function(prop) {
                rex.test(key) ? component.prototype.builderObject[prop.propertyName] = function(value) {
                    var childType = {};
                    merge(childType, getBuilderProperties(prop.type)), value(childType);
                    var tempValue;
                    return tempValue = childType.isPropertyArray ? childType.propCollections : extend({}, childType.properties, {}), 
                    this.properties[prop.propertyName] = tempValue, childType.properties = {}, childType.propCollections = [], 
                    childType.isPropertyArray = !1, this;
                } : component.prototype.builderObject[prop.propertyName] = function(value) {
                    return this.properties[prop.propertyName] = value, this;
                };
            }, _b = 0, _c = component.prototype.propList[key]; _b < _c.length; _b++) {
                _loop_1(_c[_b]);
            }
        }
        return component.prototype.builderObject;
    }
    function getParentContext(context, prefix) {
        if (!1 === context.hasOwnProperty("parentObj")) return {
            context: context,
            prefix: prefix
        };
        var curText = getValue("propName", context);
        return curText && (prefix = curText + "-" + prefix), getParentContext(getValue("parentObj", context), prefix);
    }
    function rippleEffect(element, rippleOptions, done) {
        var rippleModel = function(rippleOptions) {
            return {
                selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
                ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
                rippleFlag: rippleOptions && rippleOptions.rippleFlag,
                isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
                duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
            };
        }(rippleOptions);
        return !1 === rippleModel.rippleFlag || void 0 === rippleModel.rippleFlag && !isRippleEnabled ? Function : (element.setAttribute("data-ripple", "true"), 
        EventHandler.add(element, "mousedown", rippleHandler, {
            parent: element,
            rippleOptions: rippleModel
        }), EventHandler.add(element, "mouseup", rippleUpHandler, {
            parent: element,
            rippleOptions: rippleModel,
            done: done
        }), EventHandler.add(element, "mouseleave", rippleLeaveHandler, {
            parent: element,
            rippleOptions: rippleModel
        }), Browser.isPointer && EventHandler.add(element, "transitionend", rippleLeaveHandler, {
            parent: element,
            rippleOptions: rippleModel
        }), function() {
            element.removeAttribute("data-ripple"), EventHandler.remove(element, "mousedown", rippleHandler), 
            EventHandler.remove(element, "mouseup", rippleUpHandler), EventHandler.remove(element, "mouseleave", rippleLeaveHandler), 
            EventHandler.remove(element, "transitionend", rippleLeaveHandler);
        });
    }
    function rippleHandler(e) {
        var target = e.target, selector = this.rippleOptions.selector, element = selector ? closest(target, selector) : target;
        if (!(!element || this.rippleOptions && closest(target, this.rippleOptions.ignore))) {
            var offset = element.getBoundingClientRect(), offsetX = e.pageX - document.body.scrollLeft, offsetY = e.pageY - (!document.body.scrollTop && document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop), pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right)), pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom)), radius = Math.sqrt(pageX * pageX + pageY * pageY), diameter = 2 * radius + "px", x = offsetX - offset.left - radius, y = offsetY - offset.top - radius;
            this.rippleOptions && this.rippleOptions.isCenterRipple && (x = 0, y = 0, diameter = "100%"), 
            element.classList.add("e-ripple");
            var rippleElement = createElement("div", {
                className: "e-ripple-element",
                styles: "width: " + diameter + ";height: " + diameter + ";left: " + x + "px;top: " + y + "px;transition-duration: " + this.rippleOptions.duration.toString() + "ms;"
            });
            element.appendChild(rippleElement), window.getComputedStyle(rippleElement).getPropertyValue("opacity"), 
            rippleElement.style.transform = "scale(1)", element !== this.parent && EventHandler.add(element, "mouseleave", rippleLeaveHandler, {
                parent: this.parent,
                rippleOptions: this.rippleOptions
            });
        }
    }
    function rippleUpHandler(e) {
        removeRipple(e, this);
    }
    function rippleLeaveHandler(e) {
        removeRipple(e, this);
    }
    function removeRipple(e, eventArgs) {
        var duration = eventArgs.rippleOptions.duration, target = e.target, selector = eventArgs.rippleOptions.selector, element = selector ? closest(target, selector) : target;
        if (element && (!element || -1 !== element.className.indexOf("e-ripple"))) {
            var rippleElements = selectAll(".e-ripple-element", element), rippleElement = rippleElements[rippleElements.length - 1];
            rippleElement && (rippleElement.style.opacity = "0.5"), eventArgs.parent !== element && EventHandler.remove(element, "mouseleave", rippleLeaveHandler), 
            setTimeout(function() {
                rippleElement && rippleElement.parentNode && rippleElement.parentNode.removeChild(rippleElement), 
                element.getElementsByClassName("e-ripple-element").length || element.classList.remove("e-ripple"), 
                eventArgs.done && eventArgs.done(e);
            }, duration);
        }
    }
    function compile$1(template, helper) {
        var fnCode = 'var str="' + function(str, nameSpace, helper) {
            var varCOunt = 0, localKeys = [];
            return str.replace(LINES, "").replace(DBL_QUOTED_STR, "'$1'").replace(exp, function(match, cnt, offset, matchStr) {
                var matches = cnt.match(CALL_FUNCTION);
                if (matches) {
                    var rlStr = matches[1];
                    if (ELSEIF_STMT.test(cnt)) cnt = '";} ' + cnt.replace(matches[1], rlStr.replace(WORD, function(str) {
                        return str = str.trim(), addNameSpace(str, !QUOTES.test(str) && -1 === localKeys.indexOf(str), nameSpace, localKeys);
                    })) + '{ \n str = str + "'; else if (IF_STMT.test(cnt)) cnt = '"; ' + cnt.replace(matches[1], rlStr.replace(WORD, function(strs) {
                        return strs = strs.trim(), addNameSpace(strs, !QUOTES.test(strs) && -1 === localKeys.indexOf(strs), nameSpace, localKeys);
                    })) + '{ \n str = str + "'; else if (FOR_STMT.test(cnt)) {
                        var rlStr_1 = matches[1].split(" of ");
                        cnt = '"; ' + cnt.replace(matches[1], function(mtc) {
                            return localKeys.push(rlStr_1[0]), localKeys.push(rlStr_1[0] + "Index"), "var i" + (varCOunt += 1) + "=0; i" + varCOunt + " < " + addNameSpace(rlStr_1[1], !0, nameSpace, localKeys) + ".length; i" + varCOunt + "++";
                        }) + "{ \n " + rlStr_1[0] + "= " + addNameSpace(rlStr_1[1], !0, nameSpace, localKeys) + "[i" + varCOunt + "]; \n var " + rlStr_1[0] + "Index=i" + varCOunt + '; \n str = str + "';
                    } else {
                        var fnStr = cnt.split("("), fNameSpace = helper && helper.hasOwnProperty(fnStr[0]) ? "this." : "global";
                        fNameSpace = /\./.test(fnStr[0]) ? "" : fNameSpace, cnt = '" + ' + ("global" === fNameSpace ? "" : fNameSpace) + cnt.replace(rlStr, addNameSpace(matches[1].replace(",", nameSpace + "."), "global" !== fNameSpace, nameSpace, localKeys)) + '+"';
                    }
                } else cnt = ELSE_STMT.test(cnt) ? '"; ' + cnt.replace(ELSE_STMT, '} else { \n str = str + "') : cnt.match(IF_OR_FOR) ? cnt.replace(IF_OR_FOR, '"; \n } \n str = str + "') : '"+' + addNameSpace(cnt, -1 === localKeys.indexOf(cnt), nameSpace, localKeys) + '+"';
                return cnt;
            });
        }(template, "data", helper) + '"; return str;';
        return new Function("data", fnCode).bind(helper);
    }
    function addNameSpace(str, addNS, nameSpace, ignoreList) {
        return addNS && !NOT_NUMBER.test(str) && -1 === ignoreList.indexOf(str.split(".")[0]) ? nameSpace + "." + str : str;
    }
    function compile$$1(templateString, helper) {
        var compiler = engineObj.compile(templateString, helper);
        return function(data, component, propName) {
            var result = compiler(data, component, propName);
            if ("string" == typeof result) {
                if (HAS_SVG.test(result)) {
                    return createElement("svg", {
                        innerHTML: result
                    }).childNodes;
                }
                return createElement(HAS_ROW.test(result) ? "table" : "div", {
                    innerHTML: result
                }).childNodes;
            }
            return result;
        };
    }
    function calculatePosition(currentElement, positionX, positionY, parentElement, targetValues) {
        if (popupRect = targetValues, fixedParent = !!parentElement, !currentElement) return {
            left: 0,
            top: 0
        };
        positionX || (positionX = "left"), positionY || (positionY = "top"), parentDocument = currentElement.ownerDocument, 
        element = currentElement;
        return function(posX, posY, pos) {
            switch (elementRect = element.getBoundingClientRect(), posY + posX) {
              case "topcenter":
                setPosx(getElementHCenter(), pos), setPosy(getElementTop(), pos);
                break;

              case "topright":
                setPosx(getElementRight(), pos), setPosy(getElementTop(), pos);
                break;

              case "centercenter":
                setPosx(getElementHCenter(), pos), setPosy(getElementVCenter(), pos);
                break;

              case "centerright":
                setPosx(getElementRight(), pos), setPosy(getElementVCenter(), pos);
                break;

              case "centerleft":
                setPosx(getElementLeft(), pos), setPosy(getElementVCenter(), pos);
                break;

              case "bottomcenter":
                setPosx(getElementHCenter(), pos), setPosy(getElementBottom(), pos);
                break;

              case "bottomright":
                setPosx(getElementRight(), pos), setPosy(getElementBottom(), pos);
                break;

              case "bottomleft":
                setPosx(getElementLeft(), pos), setPosy(getElementBottom(), pos);
                break;

              default:
              case "topleft":
                setPosx(getElementLeft(), pos), setPosy(getElementTop(), pos);
            }
            return pos;
        }(positionX.toLowerCase(), positionY.toLowerCase(), {
            left: 0,
            top: 0
        });
    }
    function setPosx(value, pos) {
        pos.left = value;
    }
    function setPosy(value, pos) {
        pos.top = value;
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
        return elementRect.right + getBodyScrollLeft() - (popupRect ? popupRect.width : 0);
    }
    function getElementHCenter() {
        return getElementLeft() + elementRect.width / 2;
    }
    function fit(element, viewPortElement, axis, position) {
        if (void 0 === viewPortElement && (viewPortElement = null), void 0 === axis && (axis = {
            X: !1,
            Y: !1
        }), !axis.Y && !axis.X) return {
            left: 0,
            top: 0
        };
        var elemData = element.getBoundingClientRect();
        if (targetContainer = viewPortElement, parentDocument$1 = element.ownerDocument, 
        position || (position = calculatePosition(element, "left", "top")), axis.X) {
            var containerWidth = targetContainer ? getTargetContainerWidth() : getViewPortWidth(), containerLeft = ContainerLeft(), containerRight = ContainerRight(), overLeft = containerLeft - position.left, overRight = position.left + elemData.width - containerRight;
            elemData.width > containerWidth ? position.left = overLeft > 0 && overRight <= 0 ? containerRight - elemData.width : overRight > 0 && overLeft <= 0 ? containerLeft : overLeft > overRight ? containerRight - elemData.width : containerLeft : overLeft > 0 ? position.left += overLeft : overRight > 0 && (position.left -= overRight);
        }
        if (axis.Y) {
            var containerHeight = targetContainer ? getTargetContainerHeight() : getViewPortHeight(), containerTop = ContainerTop(), containerBottom = ContainerBottom(), overTop = containerTop - position.top, overBottom = position.top + elemData.height - containerBottom;
            elemData.height > containerHeight ? position.top = overTop > 0 && overBottom <= 0 ? containerBottom - elemData.height : overBottom > 0 && overTop <= 0 ? containerTop : overTop > overBottom ? containerBottom - elemData.height : containerTop : overTop > 0 ? position.top += overTop : overBottom > 0 && (position.top -= overBottom);
        }
        return position;
    }
    function isCollide(element, viewPortElement, x, y) {
        void 0 === viewPortElement && (viewPortElement = null);
        var elemOffset = calculatePosition(element, "left", "top");
        x && (elemOffset.left = x), y && (elemOffset.top = y);
        var data = [];
        targetContainer = viewPortElement, parentDocument$1 = element.ownerDocument;
        var elementRect = element.getBoundingClientRect(), top = elemOffset.top, left = elemOffset.left, right = elemOffset.left + elementRect.width, yAxis = topCollideCheck(top, elemOffset.top + elementRect.height), xAxis = leftCollideCheck(left, right);
        return yAxis.topSide && data.push("top"), xAxis.rightSide && data.push("right"), 
        xAxis.leftSide && data.push("left"), yAxis.bottomSide && data.push("bottom"), data;
    }
    function flip(element, target, offsetX, offsetY, positionX, positionY, viewPortElement, axis, fixedParent) {
        if (void 0 === viewPortElement && (viewPortElement = null), void 0 === axis && (axis = {
            X: !0,
            Y: !0
        }), target && element && positionX && positionY && (axis.X || axis.Y)) {
            var tEdge = {
                TL: null,
                TR: null,
                BL: null,
                BR: null
            }, eEdge = {
                TL: null,
                TR: null,
                BL: null,
                BR: null
            }, elementRect = element.getBoundingClientRect(), pos = {
                posX: positionX,
                posY: positionY,
                offsetX: offsetX,
                offsetY: offsetY,
                position: {
                    left: 0,
                    top: 0
                }
            };
            targetContainer = viewPortElement, parentDocument$1 = target.ownerDocument, function(target, edge, pos, fixedParent, elementRect) {
                pos.position = calculatePosition(target, pos.posX, pos.posY, fixedParent, elementRect), 
                edge.TL = calculatePosition(target, "left", "top", fixedParent, elementRect), edge.TR = calculatePosition(target, "right", "top", fixedParent, elementRect), 
                edge.BR = calculatePosition(target, "left", "bottom", fixedParent, elementRect), 
                edge.BL = calculatePosition(target, "right", "bottom", fixedParent, elementRect);
            }(target, tEdge, pos, fixedParent, elementRect), setPosition(eEdge, pos, elementRect), 
            axis.X && leftFlip(target, eEdge, tEdge, pos, elementRect, !0), axis.Y && tEdge.TL.top > -1 && topFlip(target, eEdge, tEdge, pos, elementRect, !0), 
            function(element, pos, elementRect) {
                var left = 0, top = 0;
                if (null != element.offsetParent && ("absolute" === getComputedStyle(element.offsetParent).position || "relative" === getComputedStyle(element.offsetParent).position)) {
                    var data = calculatePosition(element.offsetParent, "left", "top", !1, elementRect);
                    left = data.left, top = data.top;
                }
                element.style.top = pos.position.top + pos.offsetY - top + "px", element.style.left = pos.position.left + pos.offsetX - left + "px";
            }(element, pos, elementRect);
        }
    }
    function setPosition(eStatus, pos, elementRect) {
        eStatus.TL = {
            top: pos.position.top + pos.offsetY,
            left: pos.position.left + pos.offsetX
        }, eStatus.TR = {
            top: eStatus.TL.top,
            left: eStatus.TL.left + elementRect.width
        }, eStatus.BL = {
            top: eStatus.TL.top + elementRect.height,
            left: eStatus.TL.left
        }, eStatus.BR = {
            top: eStatus.TL.top + elementRect.height,
            left: eStatus.TL.left + elementRect.width
        };
    }
    function leftCollideCheck(left, right) {
        var leftSide = !1, rightSide = !1;
        return left - getBodyScrollLeft$1() < ContainerLeft() && (leftSide = !0), right > ContainerRight() && (rightSide = !0), 
        {
            leftSide: leftSide,
            rightSide: rightSide
        };
    }
    function leftFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
        var collideSide = leftCollideCheck(edge.TL.left, edge.TR.left);
        tEdge.TL.left - getBodyScrollLeft$1() <= ContainerLeft() && (collideSide.leftSide = !1), 
        tEdge.TR.left >= ContainerRight() && (collideSide.rightSide = !1), (collideSide.leftSide && !collideSide.rightSide || !collideSide.leftSide && collideSide.rightSide) && ("right" === pos.posX ? pos.posX = "left" : pos.posX = "right", 
        pos.offsetX = pos.offsetX + elementRect.width, pos.offsetX = -1 * pos.offsetX, pos.position = calculatePosition(target, pos.posX, pos.posY, !1), 
        setPosition(edge, pos, elementRect), deepCheck && leftFlip(target, edge, tEdge, pos, elementRect, !1));
    }
    function topFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
        var collideSide = topCollideCheck(edge.TL.top, edge.BL.top);
        tEdge.TL.top - getBodyScrollTop$1() <= ContainerTop() && (collideSide.topSide = !1), 
        tEdge.BL.top >= ContainerBottom() && (collideSide.bottomSide = !1), (collideSide.topSide && !collideSide.bottomSide || !collideSide.topSide && collideSide.bottomSide) && ("top" === pos.posY ? pos.posY = "bottom" : pos.posY = "top", 
        pos.offsetY = pos.offsetY + elementRect.height, pos.offsetY = -1 * pos.offsetY, 
        pos.position = calculatePosition(target, pos.posX, pos.posY, !1, elementRect), setPosition(edge, pos, elementRect), 
        deepCheck && topFlip(target, edge, tEdge, pos, elementRect, !1));
    }
    function topCollideCheck(top, bottom) {
        var topSide = !1, bottomSide = !1;
        return top - getBodyScrollTop$1() < ContainerTop() && (topSide = !0), bottom > ContainerBottom() && (bottomSide = !0), 
        {
            topSide: topSide,
            bottomSide: bottomSide
        };
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
        return targetContainer ? getTargetContainerTop() : 0;
    }
    function ContainerLeft() {
        return targetContainer ? getTargetContainerLeft() : 0;
    }
    function ContainerRight() {
        return targetContainer ? getBodyScrollLeft$1() + getTargetContainerLeft() + getTargetContainerWidth() : getBodyScrollLeft$1() + getViewPortWidth();
    }
    function ContainerBottom() {
        return targetContainer ? getBodyScrollTop$1() + getTargetContainerTop() + getTargetContainerHeight() : getBodyScrollTop$1() + getViewPortHeight();
    }
    function getBodyScrollTop$1() {
        return parentDocument$1.documentElement.scrollTop || parentDocument$1.body.scrollTop;
    }
    function getBodyScrollLeft$1() {
        return parentDocument$1.documentElement.scrollLeft || parentDocument$1.body.scrollLeft;
    }
    function getViewPortHeight() {
        return window.innerHeight;
    }
    function getViewPortWidth() {
        return window.innerWidth;
    }
    function getZindexPartial(element) {
        for (var parent = element.parentElement, parentZindex = []; parent && "BODY" !== parent.tagName; ) {
            var index = document.defaultView.getComputedStyle(parent, null).getPropertyValue("z-index"), position = document.defaultView.getComputedStyle(parent, null).getPropertyValue("position");
            "auto" !== index && "static" !== position && parentZindex.push(index), parent = parent.parentElement;
        }
        for (var childrenZindex = [], i = 0; i < document.body.children.length; i++) if (!element.isEqualNode(document.body.children[i])) {
            index = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue("z-index"), 
            position = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue("position");
            "auto" !== index && "static" !== position && childrenZindex.push(index);
        }
        childrenZindex.push("999");
        var siblingsZindex = [];
        if (!isNullOrUndefined(element.parentElement) && "BODY" !== element.parentElement.tagName) {
            var childNodes = [].slice.call(element.parentElement.children);
            for (i = 0; i < childNodes.length; i++) {
                index = document.defaultView.getComputedStyle(childNodes[i], null).getPropertyValue("z-index"), 
                position = document.defaultView.getComputedStyle(childNodes[i], null).getPropertyValue("position");
                "auto" !== index && "static" !== position && siblingsZindex.push(index);
            }
        }
        var finalValue = parentZindex.concat(childrenZindex, siblingsZindex);
        return Math.max.apply(Math, finalValue) + 1;
    }
    function wrapperInitialize(tag, type, element, WRAPPER, role) {
        if (element.tagName === tag) {
            for (var ejInstance = getValue("ej2_instances", element), input = createElement("input", {
                attrs: {
                    type: type
                }
            }), props = [ "change", "cssClass", "label", "labelPosition" ], wrapper = createElement(tag, {
                className: WRAPPER,
                attrs: {
                    role: role,
                    "aria-checked": "false"
                }
            }), index = 0, len = element.attributes.length; index < len; index++) -1 === props.indexOf(element.attributes[index].nodeName) && input.setAttribute(element.attributes[index].nodeName, element.attributes[index].nodeValue);
            element.parentNode.insertBefore(input, element), detach(element), (element = input).parentNode.insertBefore(wrapper, element), 
            wrapper.appendChild(element), setValue("ej2_instances", ejInstance, element);
        }
        return element;
    }
    function getTextNode(element) {
        for (var node, childnode = element.childNodes, i = 0; i < childnode.length; i++) if (3 === (node = childnode[i]).nodeType) return node;
        return null;
    }
    function rippleMouseHandler(e, rippleSpan) {
        if (rippleSpan) {
            var event_1 = document.createEvent("MouseEvents");
            event_1.initEvent(e.type, !1, !0), rippleSpan.dispatchEvent(event_1);
        }
    }
    function calculatePosition$1(currentElement, positionX, positionY, parentElement, targetValues) {
        if (popupRect$1 = targetValues, fixedParent$1 = !!parentElement, !currentElement) return {
            left: 0,
            top: 0
        };
        positionX || (positionX = "left"), positionY || (positionY = "top"), parentDocument$2 = currentElement.ownerDocument, 
        element$1 = currentElement;
        return function(posX, posY, pos) {
            switch (elementRect$1 = element$1.getBoundingClientRect(), posY + posX) {
              case "topcenter":
                setPosx$1(getElementHCenter$1(), pos), setPosy$1(getElementTop$1(), pos);
                break;

              case "topright":
                setPosx$1(getElementRight$1(), pos), setPosy$1(getElementTop$1(), pos);
                break;

              case "centercenter":
                setPosx$1(getElementHCenter$1(), pos), setPosy$1(getElementVCenter$1(), pos);
                break;

              case "centerright":
                setPosx$1(getElementRight$1(), pos), setPosy$1(getElementVCenter$1(), pos);
                break;

              case "centerleft":
                setPosx$1(getElementLeft$1(), pos), setPosy$1(getElementVCenter$1(), pos);
                break;

              case "bottomcenter":
                setPosx$1(getElementHCenter$1(), pos), setPosy$1(getElementBottom$1(), pos);
                break;

              case "bottomright":
                setPosx$1(getElementRight$1(), pos), setPosy$1(getElementBottom$1(), pos);
                break;

              case "bottomleft":
                setPosx$1(getElementLeft$1(), pos), setPosy$1(getElementBottom$1(), pos);
                break;

              default:
              case "topleft":
                setPosx$1(getElementLeft$1(), pos), setPosy$1(getElementTop$1(), pos);
            }
            return pos;
        }(positionX.toLowerCase(), positionY.toLowerCase(), {
            left: 0,
            top: 0
        });
    }
    function setPosx$1(value, pos) {
        pos.left = value;
    }
    function setPosy$1(value, pos) {
        pos.top = value;
    }
    function getBodyScrollTop$2() {
        return parentDocument$2.documentElement.scrollTop || parentDocument$2.body.scrollTop;
    }
    function getBodyScrollLeft$2() {
        return parentDocument$2.documentElement.scrollLeft || parentDocument$2.body.scrollLeft;
    }
    function getElementBottom$1() {
        return fixedParent$1 ? elementRect$1.bottom : elementRect$1.bottom + getBodyScrollTop$2();
    }
    function getElementVCenter$1() {
        return getElementTop$1() + elementRect$1.height / 2;
    }
    function getElementTop$1() {
        return fixedParent$1 ? elementRect$1.top : elementRect$1.top + getBodyScrollTop$2();
    }
    function getElementLeft$1() {
        return elementRect$1.left + getBodyScrollLeft$2();
    }
    function getElementRight$1() {
        return elementRect$1.right + getBodyScrollLeft$2() - (popupRect$1 ? popupRect$1.width : 0);
    }
    function getElementHCenter$1() {
        return getElementLeft$1() + elementRect$1.width / 2;
    }
    function fit$1(element, viewPortElement, axis, position) {
        if (void 0 === viewPortElement && (viewPortElement = null), void 0 === axis && (axis = {
            X: !1,
            Y: !1
        }), !axis.Y && !axis.X) return {
            left: 0,
            top: 0
        };
        var elemData = element.getBoundingClientRect();
        if (targetContainer$1 = viewPortElement, parentDocument$3 = element.ownerDocument, 
        position || (position = calculatePosition$1(element, "left", "top")), axis.X) {
            var containerWidth = targetContainer$1 ? getTargetContainerWidth$1() : getViewPortWidth$1(), containerLeft = ContainerLeft$1(), containerRight = ContainerRight$1(), overLeft = containerLeft - position.left, overRight = position.left + elemData.width - containerRight;
            elemData.width > containerWidth ? position.left = overLeft > 0 && overRight <= 0 ? containerRight - elemData.width : overRight > 0 && overLeft <= 0 ? containerLeft : overLeft > overRight ? containerRight - elemData.width : containerLeft : overLeft > 0 ? position.left += overLeft : overRight > 0 && (position.left -= overRight);
        }
        if (axis.Y) {
            var containerHeight = targetContainer$1 ? getTargetContainerHeight$1() : getViewPortHeight$1(), containerTop = ContainerTop$1(), containerBottom = ContainerBottom$1(), overTop = containerTop - position.top, overBottom = position.top + elemData.height - containerBottom;
            elemData.height > containerHeight ? position.top = overTop > 0 && overBottom <= 0 ? containerBottom - elemData.height : overBottom > 0 && overTop <= 0 ? containerTop : overTop > overBottom ? containerBottom - elemData.height : containerTop : overTop > 0 ? position.top += overTop : overBottom > 0 && (position.top -= overBottom);
        }
        return position;
    }
    function isCollide$1(element, viewPortElement, x, y) {
        void 0 === viewPortElement && (viewPortElement = null);
        var elemOffset = calculatePosition$1(element, "left", "top");
        x && (elemOffset.left = x), y && (elemOffset.top = y);
        var data = [];
        targetContainer$1 = viewPortElement, parentDocument$3 = element.ownerDocument;
        var elementRect = element.getBoundingClientRect(), top = elemOffset.top, left = elemOffset.left, right = elemOffset.left + elementRect.width, yAxis = topCollideCheck$1(top, elemOffset.top + elementRect.height), xAxis = leftCollideCheck$1(left, right);
        return yAxis.topSide && data.push("top"), xAxis.rightSide && data.push("right"), 
        xAxis.leftSide && data.push("left"), yAxis.bottomSide && data.push("bottom"), data;
    }
    function flip$1(element, target, offsetX, offsetY, positionX, positionY, viewPortElement, axis, fixedParent) {
        if (void 0 === viewPortElement && (viewPortElement = null), void 0 === axis && (axis = {
            X: !0,
            Y: !0
        }), target && element && positionX && positionY && (axis.X || axis.Y)) {
            var tEdge = {
                TL: null,
                TR: null,
                BL: null,
                BR: null
            }, eEdge = {
                TL: null,
                TR: null,
                BL: null,
                BR: null
            }, elementRect = element.getBoundingClientRect(), pos = {
                posX: positionX,
                posY: positionY,
                offsetX: offsetX,
                offsetY: offsetY,
                position: {
                    left: 0,
                    top: 0
                }
            };
            targetContainer$1 = viewPortElement, parentDocument$3 = target.ownerDocument, function(target, edge, pos, fixedParent, elementRect) {
                pos.position = calculatePosition$1(target, pos.posX, pos.posY, fixedParent, elementRect), 
                edge.TL = calculatePosition$1(target, "left", "top", fixedParent, elementRect), 
                edge.TR = calculatePosition$1(target, "right", "top", fixedParent, elementRect), 
                edge.BR = calculatePosition$1(target, "left", "bottom", fixedParent, elementRect), 
                edge.BL = calculatePosition$1(target, "right", "bottom", fixedParent, elementRect);
            }(target, tEdge, pos, fixedParent, elementRect), setPosition$1(eEdge, pos, elementRect), 
            axis.X && leftFlip$1(target, eEdge, tEdge, pos, elementRect, !0), axis.Y && tEdge.TL.top > -1 && topFlip$1(target, eEdge, tEdge, pos, elementRect, !0), 
            function(element, pos, elementRect) {
                var left = 0, top = 0;
                if (null != element.offsetParent && ("absolute" === getComputedStyle(element.offsetParent).position || "relative" === getComputedStyle(element.offsetParent).position)) {
                    var data = calculatePosition$1(element.offsetParent, "left", "top", !1, elementRect);
                    left = data.left, top = data.top;
                }
                element.style.top = pos.position.top + pos.offsetY - top + "px", element.style.left = pos.position.left + pos.offsetX - left + "px";
            }(element, pos, elementRect);
        }
    }
    function setPosition$1(eStatus, pos, elementRect) {
        eStatus.TL = {
            top: pos.position.top + pos.offsetY,
            left: pos.position.left + pos.offsetX
        }, eStatus.TR = {
            top: eStatus.TL.top,
            left: eStatus.TL.left + elementRect.width
        }, eStatus.BL = {
            top: eStatus.TL.top + elementRect.height,
            left: eStatus.TL.left
        }, eStatus.BR = {
            top: eStatus.TL.top + elementRect.height,
            left: eStatus.TL.left + elementRect.width
        };
    }
    function leftCollideCheck$1(left, right) {
        var leftSide = !1, rightSide = !1;
        return left - getBodyScrollLeft$3() < ContainerLeft$1() && (leftSide = !0), right > ContainerRight$1() && (rightSide = !0), 
        {
            leftSide: leftSide,
            rightSide: rightSide
        };
    }
    function leftFlip$1(target, edge, tEdge, pos, elementRect, deepCheck) {
        var collideSide = leftCollideCheck$1(edge.TL.left, edge.TR.left);
        tEdge.TL.left - getBodyScrollLeft$3() <= ContainerLeft$1() && (collideSide.leftSide = !1), 
        tEdge.TR.left >= ContainerRight$1() && (collideSide.rightSide = !1), (collideSide.leftSide && !collideSide.rightSide || !collideSide.leftSide && collideSide.rightSide) && ("right" === pos.posX ? pos.posX = "left" : pos.posX = "right", 
        pos.offsetX = pos.offsetX + elementRect.width, pos.offsetX = -1 * pos.offsetX, pos.position = calculatePosition$1(target, pos.posX, pos.posY, !1), 
        setPosition$1(edge, pos, elementRect), deepCheck && leftFlip$1(target, edge, tEdge, pos, elementRect, !1));
    }
    function topFlip$1(target, edge, tEdge, pos, elementRect, deepCheck) {
        var collideSide = topCollideCheck$1(edge.TL.top, edge.BL.top);
        tEdge.TL.top - getBodyScrollTop$3() <= ContainerTop$1() && (collideSide.topSide = !1), 
        tEdge.BL.top >= ContainerBottom$1() && (collideSide.bottomSide = !1), (collideSide.topSide && !collideSide.bottomSide || !collideSide.topSide && collideSide.bottomSide) && ("top" === pos.posY ? pos.posY = "bottom" : pos.posY = "top", 
        pos.offsetY = pos.offsetY + elementRect.height, pos.offsetY = -1 * pos.offsetY, 
        pos.position = calculatePosition$1(target, pos.posX, pos.posY, !1, elementRect), 
        setPosition$1(edge, pos, elementRect), deepCheck && topFlip$1(target, edge, tEdge, pos, elementRect, !1));
    }
    function topCollideCheck$1(top, bottom) {
        var topSide = !1, bottomSide = !1;
        return top - getBodyScrollTop$3() < ContainerTop$1() && (topSide = !0), bottom > ContainerBottom$1() && (bottomSide = !0), 
        {
            topSide: topSide,
            bottomSide: bottomSide
        };
    }
    function getTargetContainerWidth$1() {
        return targetContainer$1.getBoundingClientRect().width;
    }
    function getTargetContainerHeight$1() {
        return targetContainer$1.getBoundingClientRect().height;
    }
    function getTargetContainerLeft$1() {
        return targetContainer$1.getBoundingClientRect().left;
    }
    function getTargetContainerTop$1() {
        return targetContainer$1.getBoundingClientRect().top;
    }
    function ContainerTop$1() {
        return targetContainer$1 ? getTargetContainerTop$1() : 0;
    }
    function ContainerLeft$1() {
        return targetContainer$1 ? getTargetContainerLeft$1() : 0;
    }
    function ContainerRight$1() {
        return targetContainer$1 ? getBodyScrollLeft$3() + getTargetContainerLeft$1() + getTargetContainerWidth$1() : getBodyScrollLeft$3() + getViewPortWidth$1();
    }
    function ContainerBottom$1() {
        return targetContainer$1 ? getBodyScrollTop$3() + getTargetContainerTop$1() + getTargetContainerHeight$1() : getBodyScrollTop$3() + getViewPortHeight$1();
    }
    function getBodyScrollTop$3() {
        return parentDocument$3.documentElement.scrollTop || parentDocument$3.body.scrollTop;
    }
    function getBodyScrollLeft$3() {
        return parentDocument$3.documentElement.scrollLeft || parentDocument$3.body.scrollLeft;
    }
    function getViewPortHeight$1() {
        return window.innerHeight;
    }
    function getViewPortWidth$1() {
        return window.innerWidth;
    }
    function copy(copied, first, second, deep) {
        var result = copied || {}, length = arguments.length;
        deep && (length -= 1);
        for (var _loop_1 = function(i) {
            if (!arguments_1[i]) return "continue";
            var obj1 = arguments_1[i];
            Object.keys(obj1).forEach(function(key) {
                var clone, src = result[key], copy = obj1[key];
                deep && (isObject(copy) || Array.isArray(copy)) ? isObject(copy) ? (clone = src || {}, 
                result[key] = copy({}, clone, copy, deep)) : (clone = src || [], result[key] = copy([], clone, copy, deep)) : result[key] = copy;
            });
        }, arguments_1 = arguments, i = 1; i < length; i++) _loop_1(i);
        return result;
    }
    var instances = "ej2_instances", uid = 0, headerRegex = /^(.*?):[ \t]*([^\r\n]*)$/gm, defaultType = "GET", Ajax = function() {
        function Ajax(options, type, async, contentType) {
            this.mode = !0, this.emitError = !0, this.options = {}, "string" == typeof options ? (this.url = options, 
            this.type = type ? type.toUpperCase() : defaultType, this.mode = !!isNullOrUndefined(async) || async) : "object" == typeof options && (this.options = options, 
            merge(this, this.options)), this.type = this.type ? this.type.toUpperCase() : defaultType, 
            this.contentType = void 0 !== this.contentType ? this.contentType : contentType;
        }
        return Ajax.prototype.send = function(data) {
            var _this = this;
            this.data = isNullOrUndefined(data) ? this.data : data;
            var eventArgs = {
                cancel: !1
            };
            return new Promise(function(resolve, reject) {
                _this.httpRequest = new XMLHttpRequest(), _this.httpRequest.onreadystatechange = function() {
                    _this.stateChange(resolve, reject);
                }, isNullOrUndefined(_this.onLoad) || (_this.httpRequest.onload = _this.onLoad), 
                isNullOrUndefined(_this.onProgress) || (_this.httpRequest.onprogress = _this.onProgress), 
                isNullOrUndefined(_this.onAbort) || (_this.httpRequest.onabort = _this.onAbort), 
                isNullOrUndefined(_this.onError) || (_this.httpRequest.onerror = _this.onError), 
                isNullOrUndefined(_this.onUploadProgress) || (_this.httpRequest.upload.onprogress = _this.onUploadProgress), 
                _this.httpRequest.open(_this.type, _this.url, _this.mode), isNullOrUndefined(_this.data) || null === _this.contentType || _this.httpRequest.setRequestHeader("Content-Type", _this.contentType || "application/json; charset=utf-8"), 
                _this.beforeSend && _this.beforeSend(eventArgs), eventArgs.cancel || _this.httpRequest.send(isNullOrUndefined(_this.data) ? null : _this.data);
            });
        }, Ajax.prototype.successHandler = function(data) {
            return this.onSuccess && this.onSuccess(data, this), data;
        }, Ajax.prototype.failureHandler = function(reason) {
            return this.onFailure && this.onFailure(this.httpRequest), reason;
        }, Ajax.prototype.stateChange = function(resolve, reject) {
            var data = this.httpRequest.responseText;
            if (this.dataType && "json" === this.dataType.toLowerCase()) if ("" === data) data = void 0; else try {
                data = JSON.parse(data);
            } catch (error) {}
            4 === this.httpRequest.readyState && (this.httpRequest.status >= 200 && this.httpRequest.status <= 299 || 304 === this.httpRequest.status ? resolve(this.successHandler(data)) : this.emitError ? reject(new Error(this.failureHandler(this.httpRequest.statusText))) : resolve());
        }, Ajax.prototype.getResponseHeader = function(key) {
            var responseHeaders, header;
            responseHeaders = {};
            for (var headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders()); headers; ) responseHeaders[headers[1].toLowerCase()] = headers[2], 
            headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
            return header = responseHeaders[key.toLowerCase()], isNullOrUndefined(header) ? null : header;
        }, Ajax;
    }(), EventHandler = function() {
        function EventHandler() {}
        return EventHandler.addOrGetEventData = function(element) {
            return "__eventList" in element ? element.__eventList.events : (element.__eventList = {}, 
            element.__eventList.events = []);
        }, EventHandler.add = function(element, eventName, listener, bindTo, intDebounce) {
            var debounceListener, eventData = EventHandler.addOrGetEventData(element);
            debounceListener = intDebounce ? debounce(listener, intDebounce) : listener, bindTo && (debounceListener = debounceListener.bind(bindTo));
            for (var event = eventName.split(" "), i = 0; i < event.length; i++) eventData.push({
                name: event[i],
                listener: listener,
                debounce: debounceListener
            }), element.addEventListener(event[i], debounceListener);
            return debounceListener;
        }, EventHandler.remove = function(element, eventName, listener) {
            for (var eventData = EventHandler.addOrGetEventData(element), event = eventName.split(" "), _loop_1 = function(j) {
                var debounceListener, index = -1;
                eventData && 0 !== eventData.length && eventData.some(function(x, i) {
                    return x.name === event[j] && x.listener === listener && (index = i, debounceListener = x.debounce, 
                    !0);
                }), -1 !== index && eventData.splice(index, 1), debounceListener && element.removeEventListener(event[j], debounceListener);
            }, j = 0; j < event.length; j++) _loop_1(j);
        }, EventHandler.clearEvents = function(element) {
            var eventData, copyData;
            copyData = extend([], copyData, eventData = EventHandler.addOrGetEventData(element));
            for (var i = 0; i < copyData.length; i++) element.removeEventListener(copyData[i].name, copyData[i].debounce), 
            eventData.shift();
        }, EventHandler.trigger = function(element, eventName, eventProp) {
            for (var _i = 0, eventData_1 = EventHandler.addOrGetEventData(element); _i < eventData_1.length; _i++) {
                var event_1 = eventData_1[_i];
                event_1.name === eventName && event_1.debounce.call(this, eventProp);
            }
        }, EventHandler;
    }(), SVG_REG = /^svg|^path|^g/, Observer = function() {
        function Observer(context) {
            this.ranArray = [], this.boundedEvents = {}, isNullOrUndefined(context) || (this.context = context);
        }
        return Observer.prototype.on = function(property, handler, context, id) {
            if (!isNullOrUndefined(handler)) {
                var cntxt = context || this.context;
                this.notExist(property) ? this.boundedEvents[property] = [ {
                    handler: handler,
                    context: cntxt
                } ] : isNullOrUndefined(id) ? this.isHandlerPresent(this.boundedEvents[property], handler) || this.boundedEvents[property].push({
                    handler: handler,
                    context: cntxt
                }) : -1 === this.ranArray.indexOf(id) && (this.ranArray.push(id), this.boundedEvents[property].push({
                    handler: handler,
                    context: cntxt,
                    id: id
                }));
            }
        }, Observer.prototype.off = function(property, handler, id) {
            if (!this.notExist(property)) {
                var curObject = getValue(property, this.boundedEvents);
                if (handler) for (var i = 0; i < curObject.length; i++) {
                    if (id) {
                        curObject.splice(i, 1);
                        var indexLocation = this.ranArray.indexOf(id);
                        -1 !== indexLocation && this.ranArray.splice(indexLocation, 1);
                        break;
                    }
                    if (handler === curObject[i].handler) {
                        curObject.splice(i, 1);
                        break;
                    }
                } else delete this.boundedEvents[property];
            }
        }, Observer.prototype.notify = function(property, argument) {
            if (!this.notExist(property)) {
                argument && (argument.name = property);
                for (var _i = 0, curObject_1 = getValue(property, this.boundedEvents).slice(0); _i < curObject_1.length; _i++) {
                    var cur = curObject_1[_i];
                    cur.handler.call(cur.context, argument);
                }
            }
        }, Observer.prototype.destroy = function() {
            this.boundedEvents = this.context = void 0;
        }, Observer.prototype.notExist = function(prop) {
            return !1 === this.boundedEvents.hasOwnProperty(prop);
        }, Observer.prototype.isHandlerPresent = function(boundedEvents, handler) {
            for (var _i = 0, boundedEvents_1 = boundedEvents; _i < boundedEvents_1.length; _i++) {
                if (boundedEvents_1[_i].handler === handler) return !0;
            }
            return !1;
        }, Observer;
    }(), Base = function() {
        function Base(options, element) {
            this.isProtectedOnChange = !0, this.properties = {}, this.changedProperties = {}, 
            this.oldProperties = {}, this.refreshing = !1, this.finalUpdate = function() {}, 
            this.childChangedProperties = {}, this.modelObserver = new Observer(this), isUndefined(element) || (this.element = "string" == typeof element ? document.querySelector(element) : element, 
            isNullOrUndefined(this.element) || (this.isProtectedOnChange = !1, this.addInstance())), 
            isUndefined(options) || this.setProperties(options, !0), this.isDestroyed = !1;
        }
        return Base.prototype.setProperties = function(prop, muteOnChange) {
            var prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = !!muteOnChange, merge(this, prop), !0 !== muteOnChange && (merge(this.changedProperties, prop), 
            this.dataBind()), this.finalUpdate(), this.changedProperties = {}, this.oldProperties = {}, 
            this.isProtectedOnChange = prevDetection;
        }, Base.callChildDataBind = function(obj, parent) {
            for (var _i = 0, keys_1 = Object.keys(obj); _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (parent[key] instanceof Array) for (var _a = 0, _b = parent[key]; _a < _b.length; _a++) {
                    var obj_1 = _b[_a];
                    void 0 !== obj_1.dataBind && obj_1.dataBind();
                } else parent[key].dataBind();
            }
        }, Base.prototype.clearChanges = function() {
            this.finalUpdate(), this.changedProperties = {}, this.oldProperties = {}, this.childChangedProperties = {};
        }, Base.prototype.dataBind = function() {
            if (Base.callChildDataBind(this.childChangedProperties, this), Object.getOwnPropertyNames(this.changedProperties).length) {
                var prevDetection = this.isProtectedOnChange, newChanges = this.changedProperties, oldChanges = this.oldProperties;
                this.clearChanges(), this.isProtectedOnChange = !0, this.onPropertyChanged(newChanges, oldChanges), 
                this.isProtectedOnChange = prevDetection;
            }
        }, Base.prototype.saveChanges = function(key, newValue, oldValue) {
            this.isProtectedOnChange || (this.oldProperties[key] = oldValue, this.changedProperties[key] = newValue, 
            this.finalUpdate(), this.finalUpdate = setImmediate(this.dataBind.bind(this)));
        }, Base.prototype.addEventListener = function(eventName, handler) {
            this.modelObserver.on(eventName, handler);
        }, Base.prototype.removeEventListener = function(eventName, handler) {
            this.modelObserver.off(eventName, handler);
        }, Base.prototype.trigger = function(eventName, eventProp) {
            if (!0 !== this.isDestroyed) {
                var prevDetection = this.isProtectedOnChange;
                this.isProtectedOnChange = !1, this.modelObserver.notify(eventName, eventProp), 
                this.isProtectedOnChange = prevDetection;
            }
        }, Base.prototype.addInstance = function() {
            var moduleClass = "e-" + this.getModuleName().toLowerCase();
            addClass([ this.element ], [ "e-control", moduleClass ]), isNullOrUndefined(this.element.ej2_instances) ? setValue("ej2_instances", [ this ], this.element) : this.element.ej2_instances.push(this);
        }, Base.prototype.destroy = function() {
            var _this = this;
            this.element.ej2_instances = this.element.ej2_instances.filter(function(i) {
                return i !== _this;
            }), removeClass([ this.element ], [ "e-" + this.getModuleName() ]), 0 === this.element.ej2_instances.length && removeClass([ this.element ], [ "e-control" ]), 
            this.clearChanges(), this.modelObserver.destroy(), this.isDestroyed = !0;
        }, Base;
    }(), REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i, REGX_IE = /msie|trident/i, REGX_IE11 = /Trident\/7\./, REGX_IOS = /(ipad|iphone|ipod touch)/i, REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i, REGX_ANDROID = /android/i, REGX_WINDOWS = /trident|windows phone|edge/i, REGX_VERSION = /(version)[ \/]([\w.]+)/i, REGX_BROWSER = {
        OPERA: /(opera|opr)(?:.*version|)[ \/]([\w.]+)/i,
        EDGE: /(edge)(?:.*version|)[ \/]([\w.]+)/i,
        CHROME: /(chrome|crios)[ \/]([\w.]+)/i,
        PANTHOMEJS: /(phantomjs)[ \/]([\w.]+)/i,
        SAFARI: /(safari)[ \/]([\w.]+)/i,
        WEBKIT: /(webkit)[ \/]([\w.]+)/i,
        MSIE: /(msie|trident) ([\w.]+)/i,
        MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
    };
    "undefined" != typeof window && (window.browserDetails = window.browserDetails || {});
    var IntlBase, Browser = function() {
        function Browser() {}
        return Browser.extractBrowserDetail = function() {
            for (var browserInfo = {
                culture: {}
            }, clientInfo = [], _i = 0, keys_1 = Object.keys(REGX_BROWSER); _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (clientInfo = Browser.userAgent.match(REGX_BROWSER[key])) {
                    if (browserInfo.name = "opr" === clientInfo[1].toLowerCase() ? "opera" : clientInfo[1].toLowerCase(), 
                    browserInfo.name = "crios" === clientInfo[1].toLowerCase() ? "chrome" : browserInfo.name, 
                    browserInfo.version = clientInfo[2], browserInfo.culture.name = browserInfo.culture.language = navigator.language, 
                    Browser.userAgent.match(REGX_IE11)) {
                        browserInfo.name = "msie";
                        break;
                    }
                    var version = Browser.userAgent.match(REGX_VERSION);
                    "safari" === browserInfo.name && version && (browserInfo.version = version[2]);
                    break;
                }
            }
            return browserInfo;
        }, Browser.getEvent = function(event) {
            var events = {
                start: {
                    isPointer: "pointerdown",
                    isTouch: "touchstart",
                    isDevice: "mousedown"
                },
                move: {
                    isPointer: "pointermove",
                    isTouch: "touchmove",
                    isDevice: "mousemove"
                },
                end: {
                    isPointer: "pointerup",
                    isTouch: "touchend",
                    isDevice: "mouseup"
                },
                cancel: {
                    isPointer: "pointercancel",
                    isTouch: "touchcancel",
                    isDevice: "mouseleave"
                }
            };
            return Browser.isPointer ? events[event].isPointer : Browser.isTouch ? events[event].isTouch + (Browser.isDevice ? "" : " " + events[event].isDevice) : events[event].isDevice;
        }, Browser.getTouchStartEvent = function() {
            return Browser.getEvent("start");
        }, Browser.getTouchEndEvent = function() {
            return Browser.getEvent("end");
        }, Browser.getTouchMoveEvent = function() {
            return Browser.getEvent("move");
        }, Browser.getTouchCancelEvent = function() {
            return Browser.getEvent("cancel");
        }, Browser.getValue = function(key, regX) {
            var browserDetails = window.browserDetails;
            return void 0 === browserDetails[key] ? browserDetails[key] = regX.test(Browser.userAgent) : browserDetails[key];
        }, Object.defineProperty(Browser, "userAgent", {
            get: function() {
                return Browser.uA;
            },
            set: function(uA) {
                Browser.uA = uA, window.browserDetails = {};
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "info", {
            get: function() {
                return isUndefined(window.browserDetails.info) ? window.browserDetails.info = Browser.extractBrowserDetail() : window.browserDetails.info;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "isIE", {
            get: function() {
                return Browser.getValue("isIE", REGX_IE);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "isTouch", {
            get: function() {
                return isUndefined(window.browserDetails.isTouch) ? window.browserDetails.isTouch = "ontouchstart" in window : window.browserDetails.isTouch;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "isPointer", {
            get: function() {
                return isUndefined(window.browserDetails.isPointer) ? window.browserDetails.isPointer = "pointerEnabled" in window.navigator : window.browserDetails.isPointer;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "isMSPointer", {
            get: function() {
                return isUndefined(window.browserDetails.isMSPointer) ? window.browserDetails.isMSPointer = "msPointerEnabled" in window.navigator : window.browserDetails.isMSPointer;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "isDevice", {
            get: function() {
                return Browser.getValue("isDevice", REGX_MOBILE);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "isIos", {
            get: function() {
                return Browser.getValue("isIos", REGX_IOS);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "isIos7", {
            get: function() {
                return Browser.getValue("isIos7", REGX_IOS7);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "isAndroid", {
            get: function() {
                return Browser.getValue("isAndroid", REGX_ANDROID);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "isWebView", {
            get: function() {
                return isUndefined(window.browserDetails.isWebView) ? (window.browserDetails.isWebView = !(isUndefined(window.cordova) && isUndefined(window.PhoneGap) && isUndefined(window.phonegap) && "object" !== window.forge), 
                window.browserDetails.isWebView) : window.browserDetails.isWebView;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "isWindows", {
            get: function() {
                return Browser.getValue("isWindows", REGX_WINDOWS);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "touchStartEvent", {
            get: function() {
                return isUndefined(window.browserDetails.touchStartEvent) ? window.browserDetails.touchStartEvent = Browser.getTouchStartEvent() : window.browserDetails.touchStartEvent;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "touchMoveEvent", {
            get: function() {
                return isUndefined(window.browserDetails.touchMoveEvent) ? window.browserDetails.touchMoveEvent = Browser.getTouchMoveEvent() : window.browserDetails.touchMoveEvent;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "touchEndEvent", {
            get: function() {
                return isUndefined(window.browserDetails.touchEndEvent) ? window.browserDetails.touchEndEvent = Browser.getTouchEndEvent() : window.browserDetails.touchEndEvent;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Browser, "touchCancelEvent", {
            get: function() {
                return isUndefined(window.browserDetails.touchCancelEvent) ? window.browserDetails.touchCancelEvent = Browser.getTouchCancelEvent() : window.browserDetails.touchCancelEvent;
            },
            enumerable: !0,
            configurable: !0
        }), Browser.uA = "undefined" != typeof navigator ? navigator.userAgent : "", Browser;
    }(), __extends$1 = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate$1 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, Animation = function(_super) {
        function Animation(options) {
            var _this = _super.call(this, options, void 0) || this;
            return _this.easing = {
                ease: "cubic-bezier(0.250, 0.100, 0.250, 1.000)",
                linear: "cubic-bezier(0.250, 0.250, 0.750, 0.750)",
                easeIn: "cubic-bezier(0.420, 0.000, 1.000, 1.000)",
                easeOut: "cubic-bezier(0.000, 0.000, 0.580, 1.000)",
                easeInOut: "cubic-bezier(0.420, 0.000, 0.580, 1.000)",
                elasticInOut: "cubic-bezier(0.5,-0.58,0.38,1.81)",
                elasticIn: "cubic-bezier(0.17,0.67,0.59,1.81)",
                elasticOut: "cubic-bezier(0.7,-0.75,0.99,1.01)"
            }, _this;
        }
        return __extends$1(Animation, _super), Animation_1 = Animation, Animation.prototype.animate = function(element, options) {
            options = options || {};
            var model = this.getModel(options);
            if ("string" == typeof element) for (var _i = 0, elements_1 = Array.prototype.slice.call(selectAll(element, document)); _i < elements_1.length; _i++) {
                var element_1 = elements_1[_i];
                model.element = element_1, Animation_1.delayAnimation(model);
            } else model.element = element, Animation_1.delayAnimation(model);
        }, Animation.stop = function(element, model) {
            element.style.animation = "", element.removeAttribute("e-animate");
            var animationId = element.getAttribute("e-animation-id");
            if (animationId) {
                var frameId = parseInt(animationId, 10);
                cancelAnimationFrame(frameId), element.removeAttribute("e-animation-id");
            }
            model && model.end && model.end.call(this, model);
        }, Animation.delayAnimation = function(model) {
            model.delay ? setTimeout(function() {
                Animation_1.applyAnimation(model);
            }, model.delay) : Animation_1.applyAnimation(model);
        }, Animation.applyAnimation = function(model) {
            var _this = this;
            model.timeStamp = 0;
            var step = 0, timerId = 0, prevTimeStamp = 0, duration = model.duration;
            model.element.setAttribute("e-animate", "true");
            var startAnimation = function(timeStamp) {
                try {
                    if (timeStamp) {
                        prevTimeStamp = 0 === prevTimeStamp ? timeStamp : prevTimeStamp, model.timeStamp = timeStamp + model.timeStamp - prevTimeStamp, 
                        prevTimeStamp = timeStamp, !step && model.begin && model.begin.call(_this, model), 
                        step += 1;
                        var avg = model.timeStamp / step;
                        model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute("e-animate") ? (model.element.style.animation = model.name + " " + model.duration + "ms " + model.timingFunction, 
                        model.progress && model.progress.call(_this, model), requestAnimationFrame(startAnimation)) : (cancelAnimationFrame(timerId), 
                        model.element.removeAttribute("e-animation-id"), model.element.removeAttribute("e-animate"), 
                        model.element.style.animation = "", model.end && model.end.call(_this, model));
                    } else performance.now(), timerId = requestAnimationFrame(startAnimation), model.element.setAttribute("e-animation-id", timerId.toString());
                } catch (e) {
                    cancelAnimationFrame(timerId), model.element.removeAttribute("e-animation-id"), 
                    model.fail && model.fail.call(_this, e);
                }
            };
            startAnimation();
        }, Animation.prototype.getModel = function(options) {
            return {
                name: options.name || this.name,
                delay: options.delay || this.delay,
                duration: void 0 !== options.duration ? options.duration : this.duration,
                begin: options.begin || this.begin,
                end: options.end || this.end,
                fail: options.fail || this.fail,
                progress: options.progress || this.progress,
                timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] : options.timingFunction || this.easing[this.timingFunction]
            };
        }, Animation.prototype.onPropertyChanged = function(newProp, oldProp) {}, Animation.prototype.getModuleName = function() {
            return "animation";
        }, Animation.prototype.destroy = function() {}, __decorate$1([ Property("FadeIn") ], Animation.prototype, "name", void 0), 
        __decorate$1([ Property(400) ], Animation.prototype, "duration", void 0), __decorate$1([ Property("ease") ], Animation.prototype, "timingFunction", void 0), 
        __decorate$1([ Property(0) ], Animation.prototype, "delay", void 0), __decorate$1([ Event() ], Animation.prototype, "progress", void 0), 
        __decorate$1([ Event() ], Animation.prototype, "begin", void 0), __decorate$1([ Event() ], Animation.prototype, "end", void 0), 
        __decorate$1([ Event() ], Animation.prototype, "fail", void 0), Animation = Animation_1 = __decorate$1([ NotifyPropertyChanges ], Animation);
        var Animation_1;
    }(Base), isRippleEnabled = !1, CanvasRenderer = function() {
        function CanvasRenderer(rootID) {
            this.rootId = rootID;
        }
        return CanvasRenderer.prototype.getOptionValue = function(options, key) {
            return options[key];
        }, CanvasRenderer.prototype.createCanvas = function(options) {
            var canvasObj = document.createElement("canvas");
            return canvasObj.setAttribute("id", this.rootId + "_canvas"), this.ctx = canvasObj.getContext("2d"), 
            this.canvasObj = canvasObj, this.setCanvasSize(options.width, options.height), this.canvasObj;
        }, CanvasRenderer.prototype.setCanvasSize = function(width, height) {
            var element = document.getElementById(this.rootId), size = isNullOrUndefined(element) ? null : element.getBoundingClientRect();
            isNullOrUndefined(this.width) ? this.canvasObj.setAttribute("width", width ? width.toString() : size.width.toString()) : this.canvasObj.setAttribute("width", this.width.toString()), 
            isNullOrUndefined(this.height) ? this.canvasObj.setAttribute("height", height ? height.toString() : "450") : this.canvasObj.setAttribute("height", this.height.toString());
        }, CanvasRenderer.prototype.setAttributes = function(options) {
            this.ctx.lineWidth = this.getOptionValue(options, "stroke-width");
            var dashArray = this.getOptionValue(options, "stroke-dasharray");
            if (!isNullOrUndefined(dashArray)) {
                var dashArrayString = dashArray.split(",");
                this.ctx.setLineDash([ parseInt(dashArrayString[0], 10), parseInt(dashArrayString[1], 10) ]);
            }
            this.ctx.strokeStyle = this.getOptionValue(options, "stroke");
        }, CanvasRenderer.prototype.drawLine = function(options) {
            this.ctx.save(), this.ctx.beginPath(), this.ctx.lineWidth = this.getOptionValue(options, "stroke-width"), 
            this.ctx.strokeStyle = options.stroke, this.ctx.moveTo(options.x1, options.y1), 
            this.ctx.lineTo(options.x2, options.y2), this.ctx.stroke(), this.ctx.restore(), 
            this.dataUrl = this.canvasObj.toDataURL();
        }, CanvasRenderer.prototype.drawRectangle = function(options) {
            var canvasCtx = this.ctx, cornerRadius = options.rx;
            this.ctx.save(), this.ctx.beginPath(), this.ctx.globalAlpha = this.getOptionValue(options, "opacity"), 
            this.setAttributes(options), this.ctx.rect(options.x, options.y, options.width, options.height), 
            null !== cornerRadius && cornerRadius >= 0 ? this.drawCornerRadius(options) : ("none" === options.fill && (options.fill = "transparent"), 
            this.ctx.fillStyle = options.fill, this.ctx.fillRect(options.x, options.y, options.width, options.height), 
            this.ctx.stroke()), this.ctx.restore(), this.ctx = canvasCtx, this.dataUrl = this.canvasObj.toDataURL();
        }, CanvasRenderer.prototype.drawCornerRadius = function(options) {
            var cornerRadius = options.rx, x = options.x, y = options.y, width = options.width, height = options.height;
            "none" === options.fill && (options.fill = "transparent"), this.ctx.fillStyle = options.fill, 
            width < 2 * cornerRadius && (cornerRadius = width / 2), height < 2 * cornerRadius && (cornerRadius = height / 2), 
            this.ctx.beginPath(), this.ctx.moveTo(x + width - cornerRadius, y), this.ctx.arcTo(x + width, y, x + width, y + height, cornerRadius), 
            this.ctx.arcTo(x + width, y + height, x, y + height, cornerRadius), this.ctx.arcTo(x, y + height, x, y, cornerRadius), 
            this.ctx.arcTo(x, y, x + width, y, cornerRadius), this.ctx.closePath(), this.ctx.fill(), 
            this.ctx.stroke(), this.dataUrl = this.canvasObj.toDataURL();
        }, CanvasRenderer.prototype.drawPath = function(options, canvasTranslate) {
            var dataSplit = options.d.split(" "), borderWidth = this.getOptionValue(options, "stroke-width"), canvasCtx = this.ctx, flag = !0;
            this.ctx.save(), this.ctx.beginPath(), canvasTranslate && this.ctx.translate(canvasTranslate[0], canvasTranslate[1]), 
            this.ctx.globalAlpha = options.opacity ? options.opacity : this.getOptionValue(options, "fill-opacity"), 
            this.setAttributes(options);
            for (var i = 0; i < dataSplit.length; i += 3) {
                var x1 = parseFloat(dataSplit[i + 1]), y1 = parseFloat(dataSplit[i + 2]);
                switch (dataSplit[i]) {
                  case "M":
                    options.innerR || options.cx || this.ctx.moveTo(x1, y1);
                    break;

                  case "L":
                    options.innerR || this.ctx.lineTo(x1, y1);
                    break;

                  case "C":
                    var c1 = parseFloat(dataSplit[i + 3]), c2 = parseFloat(dataSplit[i + 4]), c3 = parseFloat(dataSplit[i + 5]), c4 = parseFloat(dataSplit[i + 6]);
                    this.ctx.bezierCurveTo(x1, y1, c1, c2, c3, c4), i += 4;
                    break;

                  case "A":
                    options.innerR ? flag && (this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise), 
                    this.ctx.arc(options.x, options.y, options.innerR, options.end, options.start, !options.counterClockWise), 
                    flag = !1) : options.cx ? this.ctx.arc(options.cx, options.cy, options.radius, 0, 2 * Math.PI, options.counterClockWise) : (this.ctx.moveTo(options.x, options.y), 
                    this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise), 
                    this.ctx.lineTo(options.x, options.y)), i += 5;
                    break;

                  case "z":
                    this.ctx.closePath();
                }
            }
            "none" !== options.fill && void 0 !== options.fill && (this.ctx.fillStyle = options.fill, 
            this.ctx.fill()), borderWidth > 0 && this.ctx.stroke(), this.ctx.restore(), this.ctx = canvasCtx, 
            this.dataUrl = this.canvasObj.toDataURL();
        }, CanvasRenderer.prototype.drawText = function(options, label) {
            var fontWeight = this.getOptionValue(options, "font-weight");
            isNullOrUndefined(fontWeight) || "regular" !== fontWeight.toLowerCase() || (fontWeight = "normal");
            var fontSize = this.getOptionValue(options, "font-size"), fontFamily = this.getOptionValue(options, "font-family"), font = this.getOptionValue(options, "font-style").toLowerCase() + " " + fontWeight + " " + fontSize + " " + fontFamily, anchor = this.getOptionValue(options, "text-anchor"), opacity = void 0 !== options.opacity ? options.opacity : 1;
            "middle" === anchor && (anchor = "center"), this.ctx.save(), this.ctx.fillStyle = options.fill, 
            this.ctx.font = font, this.ctx.textAlign = anchor, this.ctx.globalAlpha = opacity, 
            options.baseline && (this.ctx.textBaseline = options.baseline);
            this.ctx.translate(options.x + 0, options.y), this.ctx.rotate(options.labelRotation * Math.PI / 180), 
            this.ctx.fillText(label, 0, 0), this.ctx.restore(), this.dataUrl = this.canvasObj.toDataURL();
        }, CanvasRenderer.prototype.drawCircle = function(options) {
            var canvasCtx = this.ctx;
            this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(options.cx, options.cy, options.r, 0, 2 * Math.PI), 
            this.ctx.fillStyle = options.fill, this.ctx.globalAlpha = options.opacity, this.ctx.fill(), 
            this.setAttributes(options), this.ctx.stroke(), this.ctx.restore(), this.ctx = canvasCtx, 
            this.dataUrl = this.canvasObj.toDataURL();
        }, CanvasRenderer.prototype.drawPolyline = function(options) {
            this.ctx.save(), this.ctx.beginPath();
            for (var points = options.points.split(" "), i = 0; i < points.length - 1; i++) {
                var point = points[i].split(","), x = parseFloat(point[0]), y = parseFloat(point[1]);
                0 === i ? this.ctx.moveTo(x, y) : this.ctx.lineTo(x, y);
            }
            this.ctx.lineWidth = this.getOptionValue(options, "stroke-width"), this.ctx.strokeStyle = options.stroke, 
            this.ctx.stroke(), this.ctx.restore(), this.dataUrl = this.canvasObj.toDataURL();
        }, CanvasRenderer.prototype.drawEllipse = function(options) {
            var canvasCtx = this.ctx, circumference = Math.max(options.rx, options.ry), scaleX = options.rx / circumference, scaleY = options.ry / circumference;
            this.ctx.save(), this.ctx.beginPath(), this.ctx.translate(options.cx, options.cy), 
            this.ctx.save(), this.ctx.scale(scaleX, scaleY), this.ctx.arc(0, 0, circumference, 0, 2 * Math.PI, !1), 
            this.ctx.fillStyle = options.fill, this.ctx.fill(), this.ctx.restore(), this.ctx.lineWidth = this.getOptionValue(options, "stroke-width"), 
            this.ctx.strokeStyle = options.stroke, this.ctx.stroke(), this.ctx.restore(), this.ctx = canvasCtx, 
            this.dataUrl = this.canvasObj.toDataURL();
        }, CanvasRenderer.prototype.drawImage = function(options) {
            this.ctx.save();
            var imageObj = new Image();
            isNullOrUndefined(options.href) || (imageObj.src = options.href, this.ctx.drawImage(imageObj, options.x, options.y, options.width, options.height)), 
            this.ctx.restore(), this.dataUrl = this.canvasObj.toDataURL();
        }, CanvasRenderer.prototype.createLinearGradient = function(colors) {
            var myGradient;
            isNullOrUndefined(colors[0].colorStop) || (myGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasObj.height));
            return this.setGradientValues(colors, myGradient);
        }, CanvasRenderer.prototype.createRadialGradient = function(colors) {
            var myGradient;
            isNullOrUndefined(colors[0].colorStop) || (myGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, this.canvasObj.height));
            return this.setGradientValues(colors, myGradient);
        }, CanvasRenderer.prototype.setGradientValues = function(colors, myGradient) {
            var colorName;
            if (isNullOrUndefined(colors[0].colorStop)) colorName = colors[0].color.toString(); else {
                for (var i = 0; i <= colors.length - 1; i++) {
                    var color = colors[i].color, newColorStop = colors[i].colorStop.slice(0, -1), stopColor = parseInt(newColorStop, 10) / 100;
                    myGradient.addColorStop(stopColor, color);
                }
                colorName = myGradient.toString();
            }
            return this.dataUrl = this.canvasObj.toDataURL(), colorName;
        }, CanvasRenderer.prototype.setElementAttributes = function(options, element) {
            for (var keys = Object.keys(options), values = Object.keys(options).map(function(key) {
                return options[key];
            }), i = 0; i < keys.length; i++) element.setAttribute(keys[i], values[i]);
            return element;
        }, CanvasRenderer.prototype.updateCanvasAttributes = function(options) {
            this.setElementAttributes(options, this.canvasObj);
            var ctx = this.ctx;
            if (!isNullOrUndefined(this.dataUrl)) {
                var img_1 = new Image();
                img_1.onload = function() {
                    ctx.drawImage(img_1, 0, 0);
                }, img_1.src = this.dataUrl;
            }
        }, CanvasRenderer;
    }(), ModuleLoader = function() {
        function ModuleLoader(parent) {
            this.loadedModules = [], this.parent = parent;
        }
        return ModuleLoader.prototype.inject = function(requiredModules, moduleList) {
            var reqLength = requiredModules.length;
            if (0 !== reqLength) {
                this.loadedModules.length && this.clearUnusedModule(requiredModules);
                for (var i = 0; i < reqLength; i++) for (var modl = requiredModules[i], _i = 0, moduleList_1 = moduleList; _i < moduleList_1.length; _i++) {
                    var module = moduleList_1[_i], modName = modl.member;
                    if (module.prototype.getModuleName() === modl.member && !this.isModuleLoaded(modName)) {
                        var moduleObject = createInstance(module, modl.args), memberName = this.getMemberName(modName);
                        modl.isProperty ? setValue(memberName, module, this.parent) : setValue(memberName, moduleObject, this.parent);
                        var loadedModule = modl;
                        loadedModule.member = memberName, this.loadedModules.push(loadedModule);
                    }
                }
            } else this.clean();
        }, ModuleLoader.prototype.clean = function() {
            for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
                var modules = _a[_i];
                modules.isProperty || getValue(modules.member, this.parent).destroy();
            }
            this.loadedModules = [];
        }, ModuleLoader.prototype.clearUnusedModule = function(moduleList) {
            for (var _this = this, usedModules = moduleList.map(function(arg) {
                return _this.getMemberName(arg.member);
            }), _i = 0, removableModule_1 = this.loadedModules.filter(function(module) {
                return -1 === usedModules.indexOf(module.member);
            }); _i < removableModule_1.length; _i++) {
                var mod = removableModule_1[_i];
                mod.isProperty || getValue(mod.member, this.parent).destroy(), this.loadedModules.splice(this.loadedModules.indexOf(mod), 1), 
                deleteObject(this.parent, mod.member);
            }
        }, ModuleLoader.prototype.getMemberName = function(name) {
            return name[0].toLowerCase() + name.substring(1) + "Module";
        }, ModuleLoader.prototype.isModuleLoaded = function(modName) {
            for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
                if (_a[_i].member === this.getMemberName(modName)) return !0;
            }
            return !1;
        }, ModuleLoader;
    }(), ChildProperty = function() {
        function ChildProperty(parent, propName, defaultValue, isArray) {
            this.properties = {}, this.changedProperties = {}, this.childChangedProperties = {}, 
            this.oldProperties = {}, this.finalUpdate = function() {}, this.callChildDataBind = getValue("callChildDataBind", Base), 
            this.parentObj = parent, this.controlParent = this.parentObj.controlParent || this.parentObj, 
            this.propName = propName, this.setProperties(defaultValue, !0), this.isParentArray = isArray;
        }
        return ChildProperty.prototype.updateChange = function(val, propName) {
            !0 === val ? this.parentObj.childChangedProperties[propName] = val : delete this.parentObj.childChangedProperties[propName], 
            this.parentObj.updateChange && this.parentObj.updateChange(val, this.parentObj.propName);
        }, ChildProperty.prototype.updateTimeOut = function() {
            if (this.parentObj.updateTimeOut) this.parentObj.finalUpdate(), this.parentObj.updateTimeOut(); else {
                var changeTime_1 = setTimeout(this.parentObj.dataBind.bind(this.parentObj));
                this.finalUpdate = function() {
                    clearTimeout(changeTime_1);
                };
            }
        }, ChildProperty.prototype.clearChanges = function() {
            this.finalUpdate(), this.updateChange(!1, this.propName), this.oldProperties = {}, 
            this.changedProperties = {};
        }, ChildProperty.prototype.setProperties = function(prop, muteOnChange) {
            !0 === muteOnChange ? (merge(this, prop), this.updateChange(!1, this.propName), 
            this.clearChanges()) : merge(this, prop);
        }, ChildProperty.prototype.dataBind = function() {
            if (this.callChildDataBind(this.childChangedProperties, this), this.isParentArray) {
                var curIndex = this.parentObj[this.propName].indexOf(this);
                Object.keys(this.changedProperties).length && (setValue(this.propName + "." + curIndex, this.changedProperties, this.parentObj.changedProperties), 
                setValue(this.propName + "." + curIndex, this.oldProperties, this.parentObj.oldProperties));
            } else this.parentObj.changedProperties[this.propName] = this.changedProperties, 
            this.parentObj.oldProperties[this.propName] = this.oldProperties;
            this.clearChanges();
        }, ChildProperty.prototype.saveChanges = function(key, newValue, oldValue) {
            this.controlParent.isProtectedOnChange || (this.oldProperties[key] = oldValue, this.changedProperties[key] = newValue, 
            this.updateChange(!0, this.propName), this.finalUpdate(), this.updateTimeOut());
        }, ChildProperty;
    }(), defaultNumberingSystem = {
        latn: {
            _digits: "0123456789",
            _type: "numeric"
        }
    }, defaultNumberSymbols = {
        decimal: ".",
        group: ",",
        percentSign: "%",
        plusSign: "+",
        minusSign: "-",
        infinity: "∞",
        nan: "NaN",
        exponential: "E"
    }, latnNumberSystem = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], ParserBase = function() {
        function ParserBase() {}
        return ParserBase.getMainObject = function(obj, cName) {
            return getValue("main." + cName, obj);
        }, ParserBase.getNumberingSystem = function(obj) {
            return getValue("supplemental.numberingSystems", obj) || this.numberingSystems;
        }, ParserBase.reverseObject = function(prop, keys) {
            for (var res = {}, _i = 0, propKeys_1 = keys || Object.keys(prop); _i < propKeys_1.length; _i++) {
                var key = propKeys_1[_i];
                res.hasOwnProperty(prop[key]) || (res[prop[key]] = key);
            }
            return res;
        }, ParserBase.getSymbolRegex = function(props) {
            var regexStr = props.map(function(str) {
                return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
            }).join("|");
            return new RegExp(regexStr, "g");
        }, ParserBase.getSymbolMatch = function(prop) {
            for (var ret = {}, _i = 0, matchKeys_1 = Object.keys(defaultNumberSymbols); _i < matchKeys_1.length; _i++) {
                var key = matchKeys_1[_i];
                ret[prop[key]] = defaultNumberSymbols[key];
            }
            return ret;
        }, ParserBase.constructRegex = function(val) {
            for (var len = val.length, ret = "", i = 0; i < len; i++) ret += i !== len - 1 ? val[i] + "|" : val[i];
            return ret;
        }, ParserBase.convertValueParts = function(value, regex, obj) {
            return value.replace(regex, function(str) {
                return obj[str];
            });
        }, ParserBase.getDefaultNumberingSystem = function(obj) {
            var ret = {};
            return ret.obj = getValue("numbers", obj), ret.nSystem = getValue("defaultNumberingSystem", ret.obj), 
            ret;
        }, ParserBase.getCurrentNumericOptions = function(curObj, numberSystem, needSymbols) {
            var ret = {}, cur = this.getDefaultNumberingSystem(curObj);
            if (!isUndefined(cur.nSystem)) {
                var digits = getValue(cur.nSystem + "._digits", numberSystem);
                isUndefined(digits) || (ret.numericPair = this.reverseObject(digits, latnNumberSystem), 
                ret.numberParseRegex = new RegExp(this.constructRegex(digits), "g"), ret.numericRegex = "[" + digits[0] + "-" + digits[9] + "]", 
                needSymbols && (ret.numericRegex = digits[0] + "-" + digits[9], ret.symbolNumberSystem = getValue("symbols-numberSystem-" + cur.nSystem, cur.obj), 
                ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem), ret.numberSystem = cur.nSystem));
            }
            return ret;
        }, ParserBase.getNumberMapper = function(curObj, numberSystem, isNumber) {
            var ret = {
                mapper: {}
            }, cur = this.getDefaultNumberingSystem(curObj);
            if (!isUndefined(cur.nSystem)) {
                ret.numberSystem = cur.nSystem, ret.numberSymbols = getValue("symbols-numberSystem-" + cur.nSystem, cur.obj), 
                ret.timeSeparator = getValue("timeSeparator", ret.numberSymbols);
                var digits = getValue(cur.nSystem + "._digits", numberSystem);
                if (!isUndefined(digits)) for (var _i = 0, latnNumberSystem_1 = latnNumberSystem; _i < latnNumberSystem_1.length; _i++) {
                    var i = latnNumberSystem_1[_i];
                    ret.mapper[i] = digits[i];
                }
            }
            return ret;
        }, ParserBase.nPair = "numericPair", ParserBase.nRegex = "numericRegex", ParserBase.numberingSystems = defaultNumberingSystem, 
        ParserBase;
    }(), errorText = {
        ms: "minimumSignificantDigits",
        ls: "maximumSignificantDigits",
        mf: "minimumFractionDigits",
        lf: "maximumFractionDigits"
    }, mapper$1 = [ "infinity", "nan", "group", "decimal", "exponential" ], NumberFormat = function() {
        function NumberFormat() {}
        return NumberFormat.numberFormatter = function(culture, option, cldr) {
            var symbolPattern, _this = this, fOptions = extend({}, option), cOptions = {}, dOptions = {}, dependable = IntlBase.getDependables(cldr, culture, !0);
            dOptions.numberMapper = ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr), !0), 
            dOptions.currencySymbol = IntlBase.getCurrencySymbol(dependable.numericObject, fOptions.currency || defaultCurrencyCode), 
            dOptions.percentSymbol = dOptions.numberMapper.numberSymbols.percentSign, dOptions.minusSymbol = dOptions.numberMapper.numberSymbols.minusSign;
            var symbols = dOptions.numberMapper.numberSymbols;
            if (option.format && !IntlBase.formatRegex.test(option.format)) cOptions = IntlBase.customFormat(option.format, dOptions, dependable.numericObject); else {
                extend(fOptions, IntlBase.getProperNumericSkeleton(option.format || "N")), fOptions.isCurrency = "currency" === fOptions.type, 
                fOptions.isPercent = "percent" === fOptions.type, symbolPattern = IntlBase.getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount), 
                fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, !0), 
                this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, !1, !0), 
                isUndefined(fOptions.fractionDigits) || (fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits), 
                isUndefined(fOptions.useGrouping) && (fOptions.useGrouping = !0), fOptions.isCurrency && (symbolPattern = symbolPattern.replace(/\u00A4/g, IntlBase.defaultCurrency));
                var split = symbolPattern.split(";");
                cOptions.nData = IntlBase.getFormatData(split[1] || "-" + split[0], !0, dOptions.currencySymbol), 
                cOptions.pData = IntlBase.getFormatData(split[0], !1, dOptions.currencySymbol), 
                fOptions.useGrouping && (fOptions.groupSeparator = symbols[mapper$1[2]], fOptions.groupData = this.getGroupingDetails(split[0]));
                if (isUndefined(fOptions.minimumFractionDigits) && (fOptions.minimumFractionDigits = cOptions.nData.minimumFraction), 
                isUndefined(fOptions.maximumFractionDigits)) {
                    var mval = cOptions.nData.maximumFraction;
                    fOptions.maximumFractionDigits = isUndefined(mval) && fOptions.isPercent ? 0 : mval;
                }
                var mfrac = fOptions.minimumFractionDigits, lfrac = fOptions.maximumFractionDigits;
                isUndefined(mfrac) || isUndefined(lfrac) || mfrac > lfrac && (fOptions.maximumFractionDigits = mfrac);
            }
            return extend(cOptions.nData, fOptions), extend(cOptions.pData, fOptions), function(value) {
                return isNaN(value) ? symbols[mapper$1[1]] : isFinite(value) ? _this.intNumberFormatter(value, cOptions, dOptions) : symbols[mapper$1[0]];
            };
        }, NumberFormat.getGroupingDetails = function(pattern) {
            var ret = {}, match = pattern.match(IntlBase.negativeDataRegex);
            if (match && match[4]) {
                var pattern_1 = match[4], p = pattern_1.lastIndexOf(",");
                if (-1 !== p) {
                    var temp = pattern_1.split(".")[0];
                    ret.primary = temp.length - p - 1;
                    var s = pattern_1.lastIndexOf(",", p - 1);
                    -1 !== s && (ret.secondary = p - 1 - s);
                }
            }
            return ret;
        }, NumberFormat.checkValueRange = function(val1, val2, checkbothExist, isFraction) {
            var decide = isFraction ? "f" : "s", dint = 0, str1 = errorText["l" + decide], str2 = errorText["m" + decide];
            if (isUndefined(val1) || (this.checkRange(val1, str1, isFraction), dint++), isUndefined(val2) || (this.checkRange(val2, str2, isFraction), 
            dint++), 2 === dint) {
                if (!(val1 < val2)) return !0;
                throwError(str2 + "specified must be less than the" + str1);
            } else checkbothExist && 1 === dint && throwError("Both" + str2 + "and" + str2 + "must be present");
            return !1;
        }, NumberFormat.checkRange = function(val, text, isFraction) {
            var range = isFraction ? [ 0, 20 ] : [ 1, 21 ];
            (val < range[0] || val > range[1]) && throwError(text + "value must be within the range" + range[0] + "to" + range[1]);
        }, NumberFormat.intNumberFormatter = function(value, fOptions, dOptions) {
            var curData;
            if (!isUndefined(fOptions.nData.type)) {
                value < 0 ? (value *= -1, curData = fOptions.nData) : curData = 0 === value ? fOptions.zeroData || fOptions.pData : fOptions.pData;
                var fValue = "";
                return curData.isPercent && (value *= 100), curData.groupOne ? fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits) : (fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits), 
                curData.minimumIntegerDigits && (fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits))), 
                "scientific" === curData.type && (fValue = (fValue = value.toExponential(curData.maximumFractionDigits)).replace("e", dOptions.numberMapper.numberSymbols[mapper$1[4]])), 
                fValue = fValue.replace(".", dOptions.numberMapper.numberSymbols[mapper$1[3]]), 
                curData.useGrouping && (fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ",", dOptions.numberMapper.numberSymbols[mapper$1[3]] || ".", curData.groupData.secondary)), 
                fValue = ParserBase.convertValueParts(fValue, IntlBase.latnParseRegex, dOptions.numberMapper.mapper), 
                "N/A" === curData.nlead ? curData.nlead : curData.nlead + fValue + curData.nend;
            }
        }, NumberFormat.processSignificantDigits = function(value, min, max) {
            var temp = value + "";
            return temp.length < min ? value.toPrecision(min) : (temp = value.toPrecision(max), 
            +temp + "");
        }, NumberFormat.groupNumbers = function(val, level1, sep, decimalSymbol, level2) {
            for (var flag = !isNullOrUndefined(level2) && 0 !== level2, split = val.split(decimalSymbol), prefix = split[0], length = prefix.length, str = ""; length > level1; ) str = prefix.slice(length - level1, length) + (str.length ? sep + str : ""), 
            length -= level1, flag && (level1 = level2, flag = !1);
            return split[0] = prefix.slice(0, length) + (str.length ? sep : "") + str, split.join(decimalSymbol);
        }, NumberFormat.processFraction = function(value, min, max) {
            var temp = (value + "").split(".")[1], length = temp ? temp.length : 0;
            if (min && length < min) {
                var ret = "";
                if (0 !== length) {
                    ret += value;
                    for (var j = 0; j < min - length; j++) ret += "0";
                    return ret;
                }
                return ret = value.toFixed(min), value.toFixed(min);
            }
            return !isNullOrUndefined(max) && (length > max || 0 === max) ? value.toFixed(max) : value + "";
        }, NumberFormat.processMinimumIntegers = function(value, min) {
            var temp = value.split("."), lead = temp[0], len = lead.length;
            if (len < min) {
                for (var i = 0; i < min - len; i++) lead = "0" + lead;
                temp[0] = lead;
            }
            return temp.join(".");
        }, NumberFormat;
    }();
    !function(IntlBase) {
        function getResultantPattern(skeleton, dateObject, type) {
            var resPattern, iType = type || "date";
            if (-1 !== IntlBase.basicPatterns.indexOf(skeleton)) {
                if (resPattern = getValue(iType + "Formats." + skeleton, dateObject), "dateTime" === iType) {
                    var dPattern = getValue("dateFormats." + skeleton, dateObject), tPattern = getValue("timeFormats." + skeleton, dateObject);
                    resPattern = resPattern.replace("{1}", dPattern).replace("{0}", tPattern);
                }
            } else resPattern = getValue("dateTimeFormats.availableFormats." + skeleton, dateObject);
            return resPattern;
        }
        function getDependables(cldr, culture, isNumber) {
            var ret = {};
            return ret.parserObject = ParserBase.getMainObject(cldr, culture) || IntlBase.defaultObject, 
            isNumber ? ret.numericObject = getValue("numbers", ret.parserObject) : ret.dateObject = getValue("dates.calendars.gregorian", ret.parserObject), 
            ret;
        }
        function getSymbolPattern(type, numSystem, obj, isAccount) {
            return getValue(type + "Formats-numberSystem-" + numSystem + (isAccount ? ".accounting" : ".standard"), obj) || (isAccount ? getValue(type + "Formats-numberSystem-" + numSystem + ".standard", obj) : "");
        }
        function getProperNumericSkeleton(skeleton) {
            var matches = skeleton.match(IntlBase.formatRegex), ret = {}, pattern = matches[1].toUpperCase();
            return ret.isAccount = "A" === pattern, ret.type = IntlBase.patternMatcher[pattern], 
            skeleton.length > 1 && (ret.fractionDigits = parseInt(matches[2], 10)), ret;
        }
        function getFormatData(pattern, needFraction, cSymbol, fractionOnly) {
            var nData = fractionOnly ? {} : {
                nlead: "",
                nend: ""
            }, match = pattern.match(IntlBase.customRegex);
            if (match) {
                fractionOnly || (nData.nlead = changeCurrencySymbol(match[1], cSymbol), nData.nend = changeCurrencySymbol(match[10], cSymbol), 
                nData.groupPattern = match[4]);
                var fraction = match[7];
                if (fraction && needFraction) {
                    var fmatch = fraction.match(fractionRegex);
                    isNullOrUndefined(fmatch) ? nData.minimumFraction = 0 : nData.minimumFraction = fmatch.length, 
                    nData.maximumFraction = fraction.length - 1;
                }
            }
            return nData;
        }
        function changeCurrencySymbol(val, sym) {
            return val ? val.replace(IntlBase.defaultCurrency, sym) : "";
        }
        function getCurrencySymbol(numericObject, currencyCode) {
            return getValue("currencies." + currencyCode + ".symbol", numericObject) || "$";
        }
        function isCurrencyPercent(parts, actual, symbol) {
            for (var options = {
                nlead: parts[0],
                nend: parts[1]
            }, i = 0; i < 2; i++) {
                var part = parts[i], loc = part.indexOf(actual);
                if (-1 !== loc && (loc < part.indexOf("'") || loc > part.lastIndexOf("'"))) {
                    options[typeMapper[i]] = part.substr(0, loc) + symbol + part.substr(loc + 1), options[typeMapper[actual]] = !0, 
                    options.type = options.isCurrency ? "currency" : "percent";
                    break;
                }
            }
            return options;
        }
        IntlBase.negativeDataRegex = /^(('[^']+'|''|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/, 
        IntlBase.customRegex = /^(('[^']+'|''|[^*#@0,.])*)(\*.)?((([0#,]*[0,]*[0#]*)(\.[0#]*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/, 
        IntlBase.latnParseRegex = /0|1|2|3|4|5|6|7|8|9/g;
        var fractionRegex = /[0-9]/g;
        IntlBase.defaultCurrency = "$";
        var mapper = [ "infinity", "nan", "group", "decimal" ], patternRegex = /G|M|L|H|c|'| a|yy|y|EEEE|E/g, patternMatch = {
            G: "",
            M: "m",
            L: "m",
            H: "h",
            c: "d",
            "'": '"',
            " a": " AM/PM",
            yy: "yy",
            y: "yyyy",
            EEEE: "dddd",
            E: "ddd"
        }, defaultFirstDay = "mon", firstDayMapper = {
            sun: 0,
            mon: 1,
            tue: 2,
            wed: 3,
            thu: 4,
            fri: 5,
            sat: 6
        };
        IntlBase.formatRegex = /(^[ncpae]{1})([0-1]?[0-9]|20)?$/i, IntlBase.currencyFormatRegex = /(^[ca]{1})([0-1]?[0-9]|20)?$/i, 
        IntlBase.curWithoutNumberRegex = /(c|a)$/gi;
        var typeMapper = {
            $: "isCurrency",
            "%": "isPercent",
            "-": "isNegative",
            0: "nlead",
            1: "nend"
        };
        IntlBase.dateParseRegex = /([a-z])\1*|'([^']|'')+'|''|./gi, IntlBase.basicPatterns = [ "short", "medium", "long", "full" ], 
        IntlBase.defaultObject = {
            dates: {
                calendars: {
                    gregorian: {
                        months: {
                            "stand-alone": {
                                abbreviated: {
                                    "1": "Jan",
                                    "2": "Feb",
                                    "3": "Mar",
                                    "4": "Apr",
                                    "5": "May",
                                    "6": "Jun",
                                    "7": "Jul",
                                    "8": "Aug",
                                    "9": "Sep",
                                    "10": "Oct",
                                    "11": "Nov",
                                    "12": "Dec"
                                },
                                narrow: {
                                    "1": "J",
                                    "2": "F",
                                    "3": "M",
                                    "4": "A",
                                    "5": "M",
                                    "6": "J",
                                    "7": "J",
                                    "8": "A",
                                    "9": "S",
                                    "10": "O",
                                    "11": "N",
                                    "12": "D"
                                },
                                wide: {
                                    "1": "January",
                                    "2": "February",
                                    "3": "March",
                                    "4": "April",
                                    "5": "May",
                                    "6": "June",
                                    "7": "July",
                                    "8": "August",
                                    "9": "September",
                                    "10": "October",
                                    "11": "November",
                                    "12": "December"
                                }
                            }
                        },
                        days: {
                            "stand-alone": {
                                abbreviated: {
                                    sun: "Sun",
                                    mon: "Mon",
                                    tue: "Tue",
                                    wed: "Wed",
                                    thu: "Thu",
                                    fri: "Fri",
                                    sat: "Sat"
                                },
                                narrow: {
                                    sun: "S",
                                    mon: "M",
                                    tue: "T",
                                    wed: "W",
                                    thu: "T",
                                    fri: "F",
                                    sat: "S"
                                },
                                short: {
                                    sun: "Su",
                                    mon: "Mo",
                                    tue: "Tu",
                                    wed: "We",
                                    thu: "Th",
                                    fri: "Fr",
                                    sat: "Sa"
                                },
                                wide: {
                                    sun: "Sunday",
                                    mon: "Monday",
                                    tue: "Tuesday",
                                    wed: "Wednesday",
                                    thu: "Thursday",
                                    fri: "Friday",
                                    sat: "Saturday"
                                }
                            }
                        },
                        dayPeriods: {
                            format: {
                                wide: {
                                    am: "AM",
                                    pm: "PM"
                                }
                            }
                        },
                        eras: {
                            eraNames: {
                                "0": "Before Christ",
                                "0-alt-variant": "Before Common Era",
                                "1": "Anno Domini",
                                "1-alt-variant": "Common Era"
                            },
                            eraAbbr: {
                                "0": "BC",
                                "0-alt-variant": "BCE",
                                "1": "AD",
                                "1-alt-variant": "CE"
                            },
                            eraNarrow: {
                                "0": "B",
                                "0-alt-variant": "BCE",
                                "1": "A",
                                "1-alt-variant": "CE"
                            }
                        },
                        dateFormats: {
                            full: "EEEE, MMMM d, y",
                            long: "MMMM d, y",
                            medium: "MMM d, y",
                            short: "M/d/yy"
                        },
                        timeFormats: {
                            full: "h:mm:ss a zzzz",
                            long: "h:mm:ss a z",
                            medium: "h:mm:ss a",
                            short: "h:mm a"
                        },
                        dateTimeFormats: {
                            full: "{1} 'at' {0}",
                            long: "{1} 'at' {0}",
                            medium: "{1}, {0}",
                            short: "{1}, {0}",
                            availableFormats: {
                                d: "d",
                                E: "ccc",
                                Ed: "d E",
                                Ehm: "E h:mm a",
                                EHm: "E HH:mm",
                                Ehms: "E h:mm:ss a",
                                EHms: "E HH:mm:ss",
                                Gy: "y G",
                                GyMMM: "MMM y G",
                                GyMMMd: "MMM d, y G",
                                GyMMMEd: "E, MMM d, y G",
                                h: "h a",
                                H: "HH",
                                hm: "h:mm a",
                                Hm: "HH:mm",
                                hms: "h:mm:ss a",
                                Hms: "HH:mm:ss",
                                hmsv: "h:mm:ss a v",
                                Hmsv: "HH:mm:ss v",
                                hmv: "h:mm a v",
                                Hmv: "HH:mm v",
                                M: "L",
                                Md: "M/d",
                                MEd: "E, M/d",
                                MMM: "LLL",
                                MMMd: "MMM d",
                                MMMEd: "E, MMM d",
                                MMMMd: "MMMM d",
                                ms: "mm:ss",
                                y: "y",
                                yM: "M/y",
                                yMd: "M/d/y",
                                yMEd: "E, M/d/y",
                                yMMM: "MMM y",
                                yMMMd: "MMM d, y",
                                yMMMEd: "E, MMM d, y",
                                yMMMM: "MMMM y"
                            }
                        }
                    }
                },
                timeZoneNames: {
                    hourFormat: "+HH:mm;-HH:mm",
                    gmtFormat: "GMT{0}",
                    gmtZeroFormat: "GMT"
                }
            },
            numbers: {
                currencies: {
                    USD: {
                        displayName: "US Dollar",
                        symbol: "$",
                        "symbol-alt-narrow": "$"
                    },
                    EUR: {
                        displayName: "Euro",
                        symbol: "€",
                        "symbol-alt-narrow": "€"
                    },
                    GBP: {
                        displayName: "British Pound",
                        "symbol-alt-narrow": "£"
                    }
                },
                defaultNumberingSystem: "latn",
                minimumGroupingDigits: "1",
                "symbols-numberSystem-latn": {
                    decimal: ".",
                    group: ",",
                    list: ";",
                    percentSign: "%",
                    plusSign: "+",
                    minusSign: "-",
                    exponential: "E",
                    superscriptingExponent: "×",
                    perMille: "‰",
                    infinity: "∞",
                    nan: "NaN",
                    timeSeparator: ":"
                },
                "decimalFormats-numberSystem-latn": {
                    standard: "#,##0.###"
                },
                "percentFormats-numberSystem-latn": {
                    standard: "#,##0%"
                },
                "currencyFormats-numberSystem-latn": {
                    standard: "¤#,##0.00",
                    accounting: "¤#,##0.00;(¤#,##0.00)"
                },
                "scientificFormats-numberSystem-latn": {
                    standard: "#E0"
                }
            }
        }, IntlBase.monthIndex = {
            3: "abbreviated",
            4: "wide",
            5: "narrow",
            1: "abbreviated"
        }, IntlBase.month = "months", IntlBase.days = "days", IntlBase.patternMatcher = {
            C: "currency",
            P: "percent",
            N: "decimal",
            A: "currency",
            E: "scientific"
        }, IntlBase.getResultantPattern = getResultantPattern, IntlBase.getDependables = getDependables, 
        IntlBase.getSymbolPattern = getSymbolPattern, IntlBase.getProperNumericSkeleton = getProperNumericSkeleton, 
        IntlBase.getFormatData = getFormatData, IntlBase.getCurrencySymbol = getCurrencySymbol, 
        IntlBase.customFormat = function(format, dOptions, obj) {
            for (var options = {}, formatSplit = format.split(";"), data = [ "pData", "nData", "zeroData" ], i = 0; i < formatSplit.length; i++) options[data[i]] = function(format, dOptions, numObject) {
                var cOptions = {
                    type: "decimal",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }, pattern = format.match(IntlBase.customRegex);
                (isNullOrUndefined(pattern) || "" === pattern[5] && "N/A" !== format) && (cOptions.type = void 0), 
                cOptions.nlead = pattern[1], cOptions.nend = pattern[10];
                var integerPart = pattern[6];
                cOptions.useGrouping = -1 !== integerPart.indexOf(","), integerPart = integerPart.replace(/,/g, "");
                var fractionPart = pattern[7];
                if (-1 !== integerPart.indexOf("0") && (cOptions.minimumIntegerDigits = integerPart.length - integerPart.indexOf("0")), 
                isNullOrUndefined(fractionPart) || (cOptions.minimumFractionDigits = fractionPart.lastIndexOf("0"), 
                cOptions.maximumFractionDigits = fractionPart.lastIndexOf("#"), -1 === cOptions.minimumFractionDigits && (cOptions.minimumFractionDigits = 0), 
                (-1 === cOptions.maximumFractionDigits || cOptions.maximumFractionDigits < cOptions.minimumFractionDigits) && (cOptions.maximumFractionDigits = cOptions.minimumFractionDigits)), 
                isNullOrUndefined(dOptions) ? extend(cOptions, isCurrencyPercent([ cOptions.nlead, cOptions.nend ], "%", "%")) : (extend(cOptions, isCurrencyPercent([ cOptions.nlead, cOptions.nend ], "$", dOptions.currencySymbol)), 
                cOptions.isCurrency || extend(cOptions, isCurrencyPercent([ cOptions.nlead, cOptions.nend ], "%", dOptions.percentSymbol))), 
                !isNullOrUndefined(numObject)) {
                    var symbolPattern = getSymbolPattern(cOptions.type, dOptions.numberMapper.numberSystem, numObject, !1);
                    cOptions.useGrouping && (cOptions.groupSeparator = dOptions.numberMapper.numberSymbols[mapper[2]], 
                    cOptions.groupData = NumberFormat.getGroupingDetails(symbolPattern.split(";")[0])), 
                    cOptions.nlead = cOptions.nlead.replace(/\'/g, ""), cOptions.nend = cOptions.nend.replace(/\'/g, "");
                }
                return cOptions;
            }(formatSplit[i], dOptions, obj);
            return isNullOrUndefined(options.nData) && (options.nData = extend({}, options.pData), 
            options.nData.nlead = isNullOrUndefined(dOptions) ? "-" + options.nData.nlead : dOptions.minusSymbol + options.nData.nlead), 
            options;
        }, IntlBase.isCurrencyPercent = isCurrencyPercent, IntlBase.getDateSeparator = function(dateObj) {
            var value = (getValue("dateFormats.short", dateObj) || "").match(/[d‏M‏]([^d‏M])[d‏M‏]/i);
            return value ? value[1] : "/";
        }, IntlBase.getActualDateTimeFormat = function(culture, options, cldr, isExcelFormat) {
            var dependable = getDependables(cldr, culture), actualPattern = options.format || getResultantPattern(options.skeleton, dependable.dateObject, options.type);
            if (isExcelFormat) {
                if (-1 !== (actualPattern = actualPattern.replace(patternRegex, function(pattern) {
                    return patternMatch[pattern];
                })).indexOf("z")) {
                    var tLength = actualPattern.match(/z/g).length, timeZonePattern = void 0, options_1 = {
                        timeZone: {}
                    };
                    options_1.numMapper = ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr)), 
                    options_1.timeZone = getValue("dates.timeZoneNames", dependable.parserObject);
                    var timezone = new Date().getTimezoneOffset(), pattern = tLength < 4 ? "+H;-H" : options_1.timeZone.hourFormat;
                    pattern = pattern.replace(/:/g, options_1.numMapper.timeSeparator), 0 === timezone ? timeZonePattern = options_1.timeZone.gmtZeroFormat : (timeZonePattern = DateFormat.getTimeZoneValue(timezone, pattern), 
                    timeZonePattern = options_1.timeZone.gmtFormat.replace(/\{0\}/, timeZonePattern)), 
                    actualPattern = actualPattern.replace(/[z]+/, '"' + timeZonePattern + '"');
                }
                actualPattern = actualPattern.replace(/ $/, "");
            }
            return actualPattern;
        }, IntlBase.getActualNumberFormat = function(culture, options, cldr) {
            var minFrac, dependable = getDependables(cldr, culture, !0), parseOptions = {
                custom: !0
            }, curObj = {}, curMatch = (options.format || "").match(IntlBase.currencyFormatRegex);
            if (curMatch) {
                var dOptions = {};
                dOptions.numberMapper = ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr), !0);
                var curCode = getCurrencySymbol(dependable.numericObject, options.currency || defaultCurrencyCode), symbolPattern = getSymbolPattern("currency", dOptions.numberMapper.numberSystem, dependable.numericObject, /a/i.test(options.format)), split = (symbolPattern = symbolPattern.replace(/\u00A4/g, curCode)).split(";");
                curObj.hasNegativePattern = split.length > 1, curObj.nData = getFormatData(split[1] || "-" + split[0], !0, curCode), 
                curObj.pData = getFormatData(split[0], !1, curCode), curMatch[2] || options.minimumFractionDigits || options.maximumFractionDigits || (minFrac = getFormatData(symbolPattern.split(";")[0], !0, "", !0).minimumFraction);
            }
            var actualPattern;
            if (IntlBase.formatRegex.test(options.format) || !options.format) {
                if (extend(parseOptions, getProperNumericSkeleton(options.format || "N")), parseOptions.custom = !1, 
                actualPattern = "###0", (parseOptions.fractionDigits || options.minimumFractionDigits || options.maximumFractionDigits || minFrac) && (parseOptions.fractionDigits && (options.minimumFractionDigits = options.maximumFractionDigits = parseOptions.fractionDigits), 
                actualPattern = function(pattern, minDigits, maxDigits) {
                    pattern += ".";
                    for (var a = 0; a < minDigits; a++) pattern += "0";
                    if (minDigits < maxDigits) for (var diff = maxDigits - minDigits, b = 0; b < diff; b++) pattern += "#";
                    return pattern;
                }(actualPattern, minFrac || parseOptions.fractionDigits || options.minimumFractionDigits || 0, options.maximumFractionDigits || 0)), 
                options.minimumIntegerDigits && (actualPattern = function(pattern, digits) {
                    for (var temp = pattern.split("."), integer = "", x = 0; x < digits; x++) integer += "0";
                    return temp[1] ? integer + "." + temp[1] : integer;
                }(actualPattern, options.minimumIntegerDigits)), options.useGrouping && (actualPattern = function(pattern) {
                    var temp = pattern.split("."), integer = temp[0], no = 3 - integer.length % 3;
                    pattern = "";
                    for (var x = (integer = (no && 1 === no ? "#" : 2 === no ? "##" : "") + integer).length - 1; x > 0; x -= 3) pattern = "," + integer[x - 2] + integer[x - 1] + integer[x] + pattern;
                    return pattern = pattern.slice(1), temp[1] ? pattern + "." + temp[1] : pattern;
                }(actualPattern)), "currency" === parseOptions.type) {
                    var cPattern = actualPattern;
                    actualPattern = curObj.pData.nlead + cPattern + curObj.pData.nend, curObj.hasNegativePattern && (actualPattern += ";" + curObj.nData.nlead + cPattern + curObj.nData.nend);
                }
                "percent" === parseOptions.type && (actualPattern += " %");
            } else actualPattern = options.format.replace(/\'/g, '"');
            return actualPattern;
        }, IntlBase.getWeekData = function(culture, cldr) {
            var firstDay = defaultFirstDay, mapper = getValue("supplemental.weekData.firstDay", cldr);
            return mapper && /en-/.test(culture) && (firstDay = mapper[(culture = culture.slice(3)).slice(0, 2).toUpperCase() + culture.substr(2)] || defaultFirstDay), 
            firstDayMapper[firstDay];
        };
    }(IntlBase || (IntlBase = {}));
    var lastPageID, abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLL|EEEEE|EEEE|E|K|ccc|G+|z+/gi, weekdayKey = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ], timeSetter = {
        m: "getMinutes",
        h: "getHours",
        H: "getHours",
        s: "getSeconds",
        d: "getDate"
    }, datePartMatcher = {
        M: "month",
        d: "day",
        E: "weekday",
        c: "weekday",
        y: "year",
        m: "minute",
        h: "hour",
        H: "hour",
        s: "second",
        L: "month",
        a: "designator",
        z: "timeZone",
        Z: "timeZone",
        G: "era"
    }, DateFormat = function() {
        function DateFormat() {}
        return DateFormat.dateFormat = function(culture, option, cldr) {
            var _this = this, dependable = IntlBase.getDependables(cldr, culture), formatOptions = {}, resPattern = option.format || IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type);
            if (formatOptions.dateSeperator = IntlBase.getDateSeparator(dependable.dateObject), 
            isUndefined(resPattern)) throwError("Format options or type given must be invalid"); else {
                formatOptions.pattern = resPattern, formatOptions.numMapper = ParserBase.getNumberMapper(dependable.parserObject, ParserBase.getNumberingSystem(cldr));
                for (var _i = 0, patternMatch_1 = resPattern.match(abbreviateRegexGlobal) || []; _i < patternMatch_1.length; _i++) {
                    var str = patternMatch_1[_i], len = str.length, char = str[0];
                    switch ("K" === char && (char = "h"), char) {
                      case "E":
                      case "c":
                        formatOptions.weekday = dependable.dateObject[IntlBase.days]["stand-alone"][IntlBase.monthIndex[len]];
                        break;

                      case "M":
                      case "L":
                        formatOptions.month = dependable.dateObject[IntlBase.month]["stand-alone"][IntlBase.monthIndex[len]];
                        break;

                      case "a":
                        formatOptions.designator = getValue("dayPeriods.format.wide", dependable.dateObject);
                        break;

                      case "G":
                        var eText = len <= 3 ? "eraAbbr" : 4 === len ? "eraNames" : "eraNarrow";
                        formatOptions.era = getValue("eras." + eText, dependable.dateObject);
                        break;

                      case "z":
                        formatOptions.timeZone = getValue("dates.timeZoneNames", dependable.parserObject);
                    }
                }
            }
            return function(value) {
                return isNaN(value.getDate()) ? null : _this.intDateFormatter(value, formatOptions);
            };
        }, DateFormat.intDateFormatter = function(value, options) {
            for (var ret = "", _i = 0, matches_1 = options.pattern.match(IntlBase.dateParseRegex); _i < matches_1.length; _i++) {
                var match = matches_1[_i], length_1 = match.length, char = match[0];
                "K" === char && (char = "h");
                var curval = void 0, isNumber = void 0, processNumber = void 0, curstr = "";
                switch (char) {
                  case "M":
                  case "L":
                    curval = value.getMonth() + 1, length_1 > 2 ? ret += options.month[curval] : isNumber = !0;
                    break;

                  case "E":
                  case "c":
                    ret += options.weekday[weekdayKey[value.getDay()]];
                    break;

                  case "H":
                  case "h":
                  case "m":
                  case "s":
                  case "d":
                    isNumber = !0, curval = value[timeSetter[char]](), "h" === char && (curval = curval % 12 || 12);
                    break;

                  case "y":
                    processNumber = !0, curstr += value.getFullYear(), 2 === length_1 && (curstr = curstr.substr(curstr.length - 2));
                    break;

                  case "a":
                    var desig = value.getHours() < 12 ? "am" : "pm";
                    ret += options.designator[desig];
                    break;

                  case "G":
                    var dec = value.getFullYear() < 0 ? 0 : 1;
                    ret += options.era[dec];
                    break;

                  case "'":
                    ret += "''" === match ? "'" : match.replace(/\'/g, "");
                    break;

                  case "z":
                    var timezone = value.getTimezoneOffset(), pattern_1 = length_1 < 4 ? "+H;-H" : options.timeZone.hourFormat;
                    pattern_1 = pattern_1.replace(/:/g, options.numMapper.timeSeparator), 0 === timezone ? ret += options.timeZone.gmtZeroFormat : (processNumber = !0, 
                    curstr = this.getTimeZoneValue(timezone, pattern_1)), curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
                    break;

                  case ":":
                    ret += options.numMapper.numberSymbols.timeSeparator;
                    break;

                  case "/":
                    ret += options.dateSeperator;
                    break;

                  default:
                    ret += match;
                }
                isNumber && (processNumber = !0, curstr = this.checkTwodigitNumber(curval, length_1)), 
                processNumber && (ret += ParserBase.convertValueParts(curstr, IntlBase.latnParseRegex, options.numMapper.mapper));
            }
            return ret;
        }, DateFormat.checkTwodigitNumber = function(val, len) {
            var ret = val + "";
            return 2 === len && 2 !== ret.length ? "0" + ret : ret;
        }, DateFormat.getTimeZoneValue = function(tVal, pattern) {
            var _this = this, curPattern = pattern.split(";")[tVal > 0 ? 1 : 0], no = Math.abs(tVal);
            return curPattern = curPattern.replace(/HH?|mm/g, function(str) {
                var len = str.length, ishour = -1 !== str.indexOf("H");
                return _this.checkTwodigitNumber(Math.floor(ishour ? no / 60 : no % 60), len);
            });
        }, DateFormat;
    }(), latnRegex$1 = /^[0-9]*$/, timeSetter$1 = {
        minute: "setMinutes",
        hour: "setHours",
        second: "setSeconds",
        day: "setDate",
        month: "setMonth"
    }, DateParser = function() {
        function DateParser() {}
        return DateParser.dateParser = function(culture, option, cldr) {
            var hourOnly, _this = this, dependable = IntlBase.getDependables(cldr, culture), numOptions = ParserBase.getCurrentNumericOptions(dependable.parserObject, ParserBase.getNumberingSystem(cldr)), parseOptions = {}, resPattern = option.format || IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type), regexString = "";
            if (isUndefined(resPattern)) throwError("Format options or type given must be invalid"); else {
                parseOptions = {
                    pattern: resPattern,
                    evalposition: {}
                };
                for (var patternMatch = resPattern.match(IntlBase.dateParseRegex) || [], length_1 = patternMatch.length, gmtCorrection = 0, zCorrectTemp = 0, isgmtTraversed = !1, nRegx = numOptions.numericRegex, i = 0; i < length_1; i++) {
                    var str = patternMatch[i], len = str.length, char = "K" === str[0] ? "h" : str[0], isNumber = void 0, canUpdate = void 0, charKey = datePartMatcher[char], optional = 2 === len ? "" : "?";
                    switch (isgmtTraversed && (gmtCorrection = zCorrectTemp, isgmtTraversed = !1), char) {
                      case "E":
                      case "c":
                        var weekObject = ParserBase.reverseObject(dependable.dateObject[IntlBase.days]["stand-alone"][IntlBase.monthIndex[len]]);
                        regexString += "(" + Object.keys(weekObject).join("|") + ")";
                        break;

                      case "M":
                      case "L":
                      case "d":
                      case "m":
                      case "s":
                      case "h":
                      case "H":
                        canUpdate = !0, ("M" === char || "L" === char) && len > 2 ? (parseOptions[charKey] = ParserBase.reverseObject(dependable.dateObject.months["stand-alone"][IntlBase.monthIndex[len]]), 
                        regexString += "(" + Object.keys(parseOptions[charKey]).join("|") + ")") : (isNumber = !0, 
                        regexString += "(" + nRegx + nRegx + optional + ")"), "h" === char && (parseOptions.hour12 = !0);
                        break;

                      case "y":
                        canUpdate = isNumber = !0, regexString += 2 === len ? "(" + nRegx + nRegx + ")" : "(" + nRegx + "{" + len + ",})";
                        break;

                      case "a":
                        canUpdate = !0, parseOptions[charKey] = ParserBase.reverseObject(getValue("dayPeriods.format.wide", dependable.dateObject)), 
                        regexString += "(" + Object.keys(parseOptions[charKey]).join("|") + ")";
                        break;

                      case "G":
                        canUpdate = !0;
                        var eText = len <= 3 ? "eraAbbr" : 4 === len ? "eraNames" : "eraNarrow";
                        parseOptions[charKey] = ParserBase.reverseObject(getValue("eras." + eText, dependable.dateObject)), 
                        regexString += "(" + Object.keys(parseOptions[charKey]).join("|") + "?)";
                        break;

                      case "z":
                        canUpdate = 0 !== new Date().getTimezoneOffset(), parseOptions[charKey] = getValue("dates.timeZoneNames", dependable.parserObject);
                        var tzone = parseOptions[charKey], hpattern = (hourOnly = len < 4) ? "+H;-H" : tzone.hourFormat;
                        regexString += "(" + this.parseTimeZoneRegx(hpattern, tzone, nRegx) + ")?", isgmtTraversed = !0, 
                        zCorrectTemp = hourOnly ? 6 : 12;
                        break;

                      case "'":
                        regexString += "(" + str.replace(/\'/g, "") + ")?";
                        break;

                      default:
                        regexString += "([\\D])";
                    }
                    canUpdate && (parseOptions.evalposition[charKey] = {
                        isNumber: isNumber,
                        pos: i + 1 + gmtCorrection,
                        hourOnly: hourOnly
                    }), i !== length_1 - 1 || isNullOrUndefined(regexString) || (parseOptions.parserRegex = new RegExp("^" + regexString + "$"));
                }
            }
            return function(value) {
                var parsedDateParts = _this.internalDateParse(value, parseOptions, numOptions);
                return isNullOrUndefined(parsedDateParts) || !Object.keys(parsedDateParts).length ? null : _this.getDateObject(parsedDateParts);
            };
        }, DateParser.getDateObject = function(options, value) {
            var res = value || new Date();
            res.setMilliseconds(0);
            var y = options.year, desig = options.designator, tzone = options.timeZone;
            if (!isUndefined(y)) {
                if ((y + "").length <= 2) {
                    y += 100 * Math.floor(res.getFullYear() / 100);
                }
                res.setFullYear(y);
            }
            for (var _i = 0, tKeys_1 = [ "hour", "minute", "second", "month", "day" ]; _i < tKeys_1.length; _i++) {
                var key = tKeys_1[_i], tValue = options[key];
                if (!isUndefined(tValue)) if ("month" === key) {
                    if ((tValue -= 1) < 0 || tValue > 11) return new Date("invalid");
                    var pDate = res.getDate();
                    res.setDate(1), res[timeSetter$1[key]](tValue);
                    var lDate = new Date(res.getFullYear(), tValue + 1, 0).getDate();
                    res.setDate(pDate < lDate ? pDate : lDate);
                } else {
                    if ("day" === key) {
                        var lastDay = new Date(res.getFullYear(), res.getMonth() + 1, 0).getDate();
                        if (tValue < 1 || tValue > lastDay) return null;
                    }
                    res[timeSetter$1[key]](tValue);
                }
            }
            if (!isUndefined(desig)) {
                var hour = res.getHours();
                "pm" === desig ? res.setHours(hour + (12 === hour ? 0 : 12)) : 12 === hour && res.setHours(0);
            }
            if (!isUndefined(tzone)) {
                var tzValue = tzone - res.getTimezoneOffset();
                0 !== tzValue && res.setMinutes(res.getMinutes() + tzValue);
            }
            return res;
        }, DateParser.internalDateParse = function(value, parseOptions, num) {
            var matches = value.match(parseOptions.parserRegex), retOptions = {
                hour: 0,
                minute: 0,
                second: 0
            };
            num.numericRegex;
            if (isNullOrUndefined(matches)) return null;
            for (var _i = 0, props_1 = Object.keys(parseOptions.evalposition); _i < props_1.length; _i++) {
                var prop = props_1[_i], curObject = parseOptions.evalposition[prop], matchString = matches[curObject.pos];
                if (curObject.isNumber) retOptions[prop] = this.internalNumberParser(matchString, num); else if ("timeZone" !== prop || isUndefined(matchString)) retOptions[prop] = parseOptions[prop][matchString]; else {
                    var pos = curObject.pos, val = void 0, tmatch = matches[pos + 1], flag = !isUndefined(tmatch);
                    curObject.hourOnly ? val = 60 * this.getZoneValue(flag, tmatch, matches[pos + 4], num) : (val = 60 * this.getZoneValue(flag, tmatch, matches[pos + 7], num), 
                    val += this.getZoneValue(flag, matches[pos + 4], matches[pos + 10], num)), isNullOrUndefined(val) || (retOptions[prop] = val);
                }
            }
            return parseOptions.hour12 && (retOptions.hour12 = !0), retOptions;
        }, DateParser.internalNumberParser = function(value, option) {
            return value = ParserBase.convertValueParts(value, option.numberParseRegex, option.numericPair), 
            latnRegex$1.test(value) ? +value : null;
        }, DateParser.parseTimeZoneRegx = function(hourFormat, tZone, nRegex) {
            var ret, splitStr, pattern = tZone.gmtFormat, cRegex = "(" + nRegex + ")(" + nRegex + ")";
            return ret = hourFormat.replace("+", "\\+"), ret = -1 !== hourFormat.indexOf("HH") ? ret.replace(/HH|mm/g, "(" + cRegex + ")") : ret.replace(/H|m/g, "(" + cRegex + "?)"), 
            splitStr = ret.split(";").map(function(str) {
                return pattern.replace("{0}", str);
            }), ret = splitStr.join("|") + "|" + tZone.gmtZeroFormat;
        }, DateParser.getZoneValue = function(flag, val1, val2, num) {
            var ival = flag ? val1 : val2;
            if (!ival) return 0;
            var value = this.internalNumberParser(ival, num);
            return flag ? -value : value;
        }, DateParser;
    }(), parseRegex = /^([^0-9]*)(([0-9,]*[0-9]+)(\.[0-9]+)?)([Ee][+-]?[0-9]+)?([^0-9]*)$/, groupRegex = /,/g, keys = [ "minusSign", "infinity" ], NumberParser = function() {
        function NumberParser() {}
        return NumberParser.numberParser = function(culture, option, cldr) {
            var numOptions, _this = this, dependable = IntlBase.getDependables(cldr, culture, !0), parseOptions = {
                custom: !0
            };
            IntlBase.formatRegex.test(option.format) || !option.format ? (extend(parseOptions, IntlBase.getProperNumericSkeleton(option.format || "N")), 
            parseOptions.custom = !1) : extend(parseOptions, IntlBase.customFormat(option.format, null, null)), 
            numOptions = ParserBase.getCurrentNumericOptions(dependable.parserObject, ParserBase.getNumberingSystem(cldr), !0), 
            parseOptions.symbolRegex = ParserBase.getSymbolRegex(Object.keys(numOptions.symbolMatch)), 
            parseOptions.infinity = numOptions.symbolNumberSystem[keys[1]];
            var symbolpattern = IntlBase.getSymbolPattern(parseOptions.type, numOptions.numberSystem, dependable.numericObject, parseOptions.isAccount);
            if (symbolpattern) {
                var split = (symbolpattern = symbolpattern.replace(/\u00A4/g, IntlBase.defaultCurrency)).split(";");
                parseOptions.nData = IntlBase.getFormatData(split[1] || "-" + split[0], !0, ""), 
                parseOptions.pData = IntlBase.getFormatData(split[0], !0, "");
            }
            return function(value) {
                return _this.getParsedNumber(value, parseOptions, numOptions);
            };
        }, NumberParser.getParsedNumber = function(value, options, numOptions) {
            var isNegative, isPercent, tempValue, lead, end, ret;
            if (-1 !== value.indexOf(options.infinity)) return 1 / 0;
            value = ParserBase.convertValueParts(value, options.symbolRegex, numOptions.symbolMatch), 
            0 === (value = ParserBase.convertValueParts(value, numOptions.numberParseRegex, numOptions.numericPair)).indexOf(".") && (value = "0" + value);
            var matches = value.match(parseRegex);
            if (isNullOrUndefined(matches)) return NaN;
            lead = matches[1], tempValue = matches[2];
            var exponent = matches[5];
            return end = matches[6], isNegative = options.custom ? lead === options.nData.nlead && end === options.nData.nend : -1 !== lead.indexOf(options.nData.nlead) && -1 !== end.indexOf(options.nData.nend), 
            isPercent = isNegative ? options.nData.isPercent : options.pData.isPercent, tempValue = tempValue.replace(groupRegex, ""), 
            exponent && (tempValue += exponent), ret = +tempValue, ("percent" === options.type || isPercent) && (ret /= 100), 
            (options.custom || options.fractionDigits) && (ret = parseFloat(ret.toFixed(options.custom ? isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits : options.fractionDigits))), 
            isNegative && (ret *= -1), ret;
        }, NumberParser;
    }(), onIntlChange = new Observer(), rightToLeft = !1, cldrData = {}, defaultCulture = "en-US", defaultCurrencyCode = "USD", mapper = [ "numericObject", "dateObject" ], Internationalization = function() {
        function Internationalization(cultureName) {
            cultureName && (this.culture = cultureName);
        }
        return Internationalization.prototype.getDateFormat = function(options) {
            return DateFormat.dateFormat(this.getCulture(), options || {
                type: "date",
                skeleton: "short"
            }, cldrData);
        }, Internationalization.prototype.getNumberFormat = function(options) {
            return options && !options.currency && (options.currency = defaultCurrencyCode), 
            NumberFormat.numberFormatter(this.getCulture(), options || {}, cldrData);
        }, Internationalization.prototype.getDateParser = function(options) {
            return DateParser.dateParser(this.getCulture(), options || {
                skeleton: "short",
                type: "date"
            }, cldrData);
        }, Internationalization.prototype.getNumberParser = function(options) {
            return NumberParser.numberParser(this.getCulture(), options || {
                format: "N"
            }, cldrData);
        }, Internationalization.prototype.formatNumber = function(value, option) {
            return this.getNumberFormat(option)(value);
        }, Internationalization.prototype.formatDate = function(value, option) {
            return this.getDateFormat(option)(value);
        }, Internationalization.prototype.parseDate = function(value, option) {
            return this.getDateParser(option)(value);
        }, Internationalization.prototype.parseNumber = function(value, option) {
            return this.getNumberParser(option)(value);
        }, Internationalization.prototype.getDatePattern = function(option, isExcelFormat) {
            return IntlBase.getActualDateTimeFormat(this.getCulture(), option, cldrData, isExcelFormat);
        }, Internationalization.prototype.getNumberPattern = function(option) {
            return IntlBase.getActualNumberFormat(this.getCulture(), option, cldrData);
        }, Internationalization.prototype.getFirstDayOfWeek = function() {
            return IntlBase.getWeekData(this.getCulture(), cldrData);
        }, Internationalization.prototype.getCulture = function() {
            return this.culture || defaultCulture;
        }, Internationalization;
    }(), __extends$2 = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate$2 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, componentCount = 0, lastHistoryLen = 0, Component = function(_super) {
        function Component(options, selector) {
            var _this = _super.call(this, options, selector) || this;
            return _this.randomId = uniqueID(), _this.needsID = !1, _this.createElement = createElement, 
            isNullOrUndefined(_this.enableRtl) && _this.setProperties({
                enableRtl: rightToLeft
            }, !0), isNullOrUndefined(_this.locale) && _this.setProperties({
                locale: defaultCulture
            }, !0), _this.moduleLoader = new ModuleLoader(_this), _this.localObserver = new Observer(_this), 
            _this.detectFunction = new Function("args", "var prop = Object.keys(args); if(prop.length){this[prop[0]] = args[prop[0]];}"), 
            onIntlChange.on("notifyExternalChange", _this.detectFunction, _this, _this.randomId), 
            isUndefined(selector) || _this.appendTo(), _this;
        }
        return __extends$2(Component, _super), Component.prototype.requiredModules = function() {
            return [];
        }, Component.prototype.destroy = function() {
            this.isDestroyed || (this.enablePersistence && this.setPersistData(), this.localObserver.destroy(), 
            this.refreshing || (this.trigger("destroyed", {
                cancel: !1
            }), _super.prototype.destroy.call(this), this.moduleLoader.clean(), onIntlChange.off("notifyExternalChange", this.detectFunction, this.randomId)));
        }, Component.prototype.refresh = function() {
            this.refreshing = !0, this.moduleLoader.clean(), this.destroy(), this.clearChanges(), 
            this.localObserver = new Observer(this), this.preRender(), this.injectModules(), 
            this.render(), this.refreshing = !1;
        }, Component.prototype.appendTo = function(selector) {
            if (isNullOrUndefined(selector) || "string" != typeof selector ? isNullOrUndefined(selector) || (this.element = selector) : this.element = document.querySelector(selector), 
            !isNullOrUndefined(this.element)) {
                this.isProtectedOnChange = !1, this.needsID && !this.element.id && (this.element.id = this.getUniqueID(this.getModuleName())), 
                this.enablePersistence && (this.mergePersistData(), window.addEventListener("unload", this.setPersistData.bind(this)));
                var inst = getValue("ej2_instances", this.element);
                inst && -1 !== inst.indexOf(this) || _super.prototype.addInstance.call(this), this.preRender(), 
                this.injectModules(), this.render(), this.trigger("created");
            }
        }, Component.prototype.dataBind = function() {
            this.injectModules(), _super.prototype.dataBind.call(this);
        }, Component.prototype.on = function(event, handler, context) {
            if ("string" == typeof event) this.localObserver.on(event, handler, context); else for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                var arg = event_1[_i];
                this.localObserver.on(arg.event, arg.handler, arg.context);
            }
        }, Component.prototype.off = function(event, handler) {
            if ("string" == typeof event) this.localObserver.off(event, handler); else for (var _i = 0, event_2 = event; _i < event_2.length; _i++) {
                var arg = event_2[_i];
                this.localObserver.off(arg.event, arg.handler);
            }
        }, Component.prototype.notify = function(property, argument) {
            !0 !== this.isDestroyed && this.localObserver.notify(property, argument);
        }, Component.prototype.getInjectedModules = function() {
            return this.injectedModules;
        }, Component.Inject = function() {
            for (var moduleList = [], _i = 0; _i < arguments.length; _i++) moduleList[_i] = arguments[_i];
            this.prototype.injectedModules || (this.prototype.injectedModules = []);
            for (var i = 0; i < moduleList.length; i++) -1 === this.prototype.injectedModules.indexOf(moduleList[i]) && this.prototype.injectedModules.push(moduleList[i]);
        }, Component.prototype.injectModules = function() {
            this.injectedModules && this.injectedModules.length && this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
        }, Component.prototype.mergePersistData = function() {
            var data = window.localStorage.getItem(this.getModuleName() + this.element.id);
            isNullOrUndefined(data) || "" === data || this.setProperties(JSON.parse(data), !0);
        }, Component.prototype.setPersistData = function() {
            this.isDestroyed || window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
        }, Component.prototype.clearTemplate = function(templateName) {}, Component.prototype.getUniqueID = function(definedName) {
            return this.isHistoryChanged() && (componentCount = 0), lastPageID = this.pageID(location.href), 
            lastHistoryLen = history.length, definedName + "_" + lastPageID + "_" + componentCount++;
        }, Component.prototype.pageID = function(url) {
            var hash = 0;
            if (0 === url.length) return hash;
            for (var i = 0; i < url.length; i++) {
                hash = (hash << 5) - hash + url.charCodeAt(i), hash &= hash;
            }
            return Math.abs(hash);
        }, Component.prototype.isHistoryChanged = function() {
            return lastPageID !== this.pageID(location.href) || lastHistoryLen !== history.length;
        }, Component.prototype.addOnPersist = function(options) {
            for (var _this = this, persistObj = {}, _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var key = options_1[_i], objValue = void 0;
                isUndefined(objValue = getValue(key, this)) || setValue(key, this.getActualProperties(objValue), persistObj);
            }
            return JSON.stringify(persistObj, function(key, value) {
                return _this.getActualProperties(value);
            });
        }, Component.prototype.getActualProperties = function(obj) {
            return obj instanceof ChildProperty ? getValue("properties", obj) : obj;
        }, Component.prototype.ignoreOnPersist = function(options) {
            return JSON.stringify(this.iterateJsonProperties(this.properties, options));
        }, Component.prototype.iterateJsonProperties = function(obj, ignoreList) {
            for (var newObj = {}, _loop_1 = function(key) {
                if (-1 === ignoreList.indexOf(key)) {
                    var value = obj[key];
                    if ("object" != typeof value || value instanceof Array) newObj[key] = value; else {
                        var newList = ignoreList.filter(function(str) {
                            return new RegExp(key + ".").test(str);
                        }).map(function(str) {
                            return str.replace(key + ".", "");
                        });
                        newObj[key] = this_1.iterateJsonProperties(this_1.getActualProperties(value), newList);
                    }
                }
            }, this_1 = this, _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
                _loop_1(_a[_i]);
            }
            return newObj;
        }, __decorate$2([ Property(!1) ], Component.prototype, "enablePersistence", void 0), 
        __decorate$2([ Property() ], Component.prototype, "enableRtl", void 0), __decorate$2([ Property() ], Component.prototype, "locale", void 0), 
        Component = __decorate$2([ NotifyPropertyChanges ], Component);
    }(Base);
    "undefined" != typeof window && window.addEventListener("popstate", function() {
        componentCount = 0;
    });
    var elementRect, popupRect, element, parentDocument, parentDocument$1, targetContainer, elementRect$1, popupRect$1, element$1, parentDocument$2, parentDocument$3, targetContainer$1, __extends$3 = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate$3 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, defaultPosition = {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
    }, Position = function(_super) {
        function Position() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends$3(Position, _super), __decorate$3([ Property(0) ], Position.prototype, "left", void 0), 
        __decorate$3([ Property(0) ], Position.prototype, "top", void 0), Position;
    }(ChildProperty), Draggable = function(_super) {
        function Draggable(element, options) {
            var _this = _super.call(this, options, element) || this;
            return _this.dragLimit = Draggable_1.getDefaultPosition(), _this.borderWidth = Draggable_1.getDefaultPosition(), 
            _this.padding = Draggable_1.getDefaultPosition(), _this.diffX = 0, _this.diffY = 0, 
            _this.droppables = {}, _this.bind(), _this;
        }
        return __extends$3(Draggable, _super), Draggable_1 = Draggable, Draggable.prototype.bind = function() {
            this.toggleEvents(), Browser.isIE && addClass([ this.element ], "e-block-touch"), 
            this.droppables[this.scope] = {};
        }, Draggable.getDefaultPosition = function() {
            return extend({}, defaultPosition);
        }, Draggable.prototype.toggleEvents = function(isUnWire) {
            var ele;
            isUndefined(this.handle) || (ele = select(this.handle, this.element)), isUnWire ? EventHandler.remove(ele || this.element, Browser.touchStartEvent, this.initialize) : EventHandler.add(ele || this.element, Browser.touchStartEvent, this.initialize, this);
        }, Draggable.prototype.initialize = function(evt) {
            if (this.target = evt.currentTarget, !this.abort || isNullOrUndefined(closest(evt.target, this.abort))) {
                this.preventDefault && !isUndefined(evt.changedTouches) && evt.preventDefault(), 
                this.element.setAttribute("aria-grabbed", "true");
                var intCoord = this.getCoordinates(evt);
                if (this.initialPosition = {
                    x: intCoord.pageX,
                    y: intCoord.pageY
                }, !this.clone) {
                    var pos = this.element.getBoundingClientRect();
                    this.relativeXPosition = intCoord.pageX - pos.left, this.relativeYPosition = intCoord.pageY - pos.top;
                }
                EventHandler.add(document, Browser.touchMoveEvent, this.intDragStart, this), EventHandler.add(document, Browser.touchEndEvent, this.intDestroy, this), 
                this.toggleEvents(!0), document.body.classList.add("e-prevent-select"), EventHandler.trigger(document.documentElement, Browser.touchStartEvent, evt);
            }
        }, Draggable.prototype.intDragStart = function(evt) {
            var isChangeTouch = !isUndefined(evt.changedTouches);
            if (!isChangeTouch || 1 === evt.changedTouches.length) {
                isChangeTouch && evt.preventDefault();
                var pos, intCordinate = this.getCoordinates(evt), styleProp = getComputedStyle(this.element);
                this.margin = {
                    left: parseInt(styleProp.marginLeft, 10),
                    top: parseInt(styleProp.marginTop, 10),
                    right: parseInt(styleProp.marginRight, 10),
                    bottom: parseInt(styleProp.marginBottom, 10)
                };
                var element = this.element;
                if (this.clone && this.dragTarget) {
                    var intClosest = closest(evt.target, this.dragTarget);
                    isNullOrUndefined(intClosest) || (element = intClosest);
                }
                this.offset = this.calculateParentPosition(element), this.position = this.getMousePosition(evt);
                var x = this.initialPosition.x - intCordinate.pageX, y = this.initialPosition.y - intCordinate.pageY;
                if (Math.sqrt(x * x + y * y) >= this.distance) {
                    var ele = this.getHelperElement(evt);
                    if (!ele || isNullOrUndefined(ele)) return;
                    var dragTargetElement = this.helperElement = ele;
                    if (this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent), 
                    this.dragStart) {
                        var curTarget = this.getProperTargetElement(evt);
                        this.trigger("dragStart", {
                            event: evt,
                            element: element,
                            target: curTarget
                        });
                    }
                    this.dragArea ? this.setDragArea() : (this.dragLimit = {
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0
                    }, this.borderWidth = {
                        top: 0,
                        left: 0
                    }), pos = {
                        left: this.position.left - this.parentClientRect.left,
                        top: this.position.top - this.parentClientRect.top
                    }, this.clone && !this.enableTailMode && (this.diffX = this.position.left - this.offset.left, 
                    this.diffY = this.position.top - this.offset.top);
                    var posValue = this.getProcessedPositionValue({
                        top: pos.top - this.diffY + "px",
                        left: pos.left - this.diffX + "px"
                    });
                    setStyleAttribute(dragTargetElement, this.getDragPosition({
                        position: "absolute",
                        left: posValue.left,
                        top: posValue.top
                    })), EventHandler.remove(document, Browser.touchMoveEvent, this.intDragStart), EventHandler.remove(document, Browser.touchEndEvent, this.intDestroy), 
                    isVisible(dragTargetElement) ? (EventHandler.add(document, Browser.touchMoveEvent, this.intDrag, this), 
                    EventHandler.add(document, Browser.touchEndEvent, this.intDragStop, this), this.setGlobalDroppables(!1, this.element, dragTargetElement)) : (this.toggleEvents(), 
                    document.body.classList.remove("e-prevent-select"));
                }
            }
        }, Draggable.prototype.elementInViewport = function(el) {
            for (this.top = el.offsetTop, this.left = el.offsetLeft, this.width = el.offsetWidth, 
            this.height = el.offsetHeight; el.offsetParent; ) el = el.offsetParent, this.top += el.offsetTop, 
            this.left += el.offsetLeft;
            return this.top >= window.pageYOffset && this.left >= window.pageXOffset && this.top + this.height <= window.pageYOffset + window.innerHeight && this.left + this.width <= window.pageXOffset + window.innerWidth;
        }, Draggable.prototype.getProcessedPositionValue = function(value) {
            return this.queryPositionInfo ? this.queryPositionInfo(value) : value;
        }, Draggable.prototype.calculateParentPosition = function(ele) {
            if (isNullOrUndefined(ele)) return {
                left: 0,
                top: 0
            };
            var rect = ele.getBoundingClientRect(), style = getComputedStyle(ele);
            return {
                left: rect.left + window.pageXOffset - parseInt(style.marginLeft, 10),
                top: rect.top + window.pageYOffset - parseInt(style.marginTop, 10)
            };
        }, Draggable.prototype.intDrag = function(evt) {
            if (isUndefined(evt.changedTouches) || 1 === evt.changedTouches.length) {
                var left, top;
                this.position = this.getMousePosition(evt);
                var docHeight = this.getDocumentWidthHeight("Height");
                docHeight < this.position.top && (this.position.top = docHeight);
                var docWidth = this.getDocumentWidthHeight("Width");
                if (docWidth < this.position.left && (this.position.left = docWidth), this.drag) {
                    var curTarget = this.getProperTargetElement(evt);
                    this.trigger("drag", {
                        event: evt,
                        element: this.element,
                        target: curTarget
                    });
                }
                var eleObj = this.checkTargetElement(evt);
                eleObj.target && eleObj.instance ? (eleObj.instance.dragData[this.scope] = this.droppables[this.scope], 
                eleObj.instance.intOver(evt, eleObj.target), this.hoverObject = eleObj) : this.hoverObject && (this.hoverObject.instance.intOut(evt, eleObj.target), 
                this.hoverObject.instance.dragData[this.scope] = null, this.hoverObject = null);
                var helperElement = this.droppables[this.scope].helper;
                this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
                var tLeft = this.parentClientRect.left, tTop = this.parentClientRect.top, intCoord = this.getCoordinates(evt), pagex = intCoord.pageX, pagey = intCoord.pageY, dLeft = this.position.left - this.diffX, dTop = this.position.top - this.diffY;
                if (this.dragArea) {
                    var styles = getComputedStyle(helperElement);
                    if (this.pageX !== pagex || this.skipDistanceCheck) {
                        var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft) + parseFloat(styles.marginRight));
                        left = this.dragLimit.left > dLeft ? this.dragLimit.left : this.dragLimit.right < dLeft + helperWidth ? this.dragLimit.right - helperWidth : dLeft;
                    }
                    if (this.pageY !== pagey || this.skipDistanceCheck) {
                        var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop) + parseFloat(styles.marginBottom));
                        top = this.dragLimit.top > dTop ? this.dragLimit.top : this.dragLimit.bottom < dTop + helperHeight ? this.dragLimit.bottom - helperHeight : dTop;
                    }
                } else left = dLeft, top = dTop;
                var iTop = tTop + this.borderWidth.top, iLeft = tLeft + this.borderWidth.left, dragValue = this.getProcessedPositionValue({
                    top: top - iTop + "px",
                    left: left - iLeft + "px"
                });
                setStyleAttribute(helperElement, this.getDragPosition(dragValue)), !this.elementInViewport(helperElement) && this.enableAutoScroll && this.helperElement.scrollIntoView(), 
                this.position.left = left, this.position.top = top, this.pageX = pagex, this.pageY = pagey;
            }
        }, Draggable.prototype.getDragPosition = function(dragValue) {
            var temp = extend({}, dragValue);
            return this.axis && ("x" === this.axis ? delete temp.top : "y" === this.axis && delete temp.left), 
            temp;
        }, Draggable.prototype.getDocumentWidthHeight = function(str) {
            var docBody = document.body, docEle = document.documentElement;
            return Math.max(docBody["scroll" + str], docEle["scroll" + str], docBody["offset" + str], docEle["offset" + str], docEle["client" + str]);
        }, Draggable.prototype.intDragStop = function(evt) {
            if (isUndefined(evt.changedTouches) || 1 === evt.changedTouches.length) {
                if (-1 !== [ "touchend", "pointerup", "mouseup" ].indexOf(evt.type)) {
                    if (this.dragStop) {
                        var curTarget = this.getProperTargetElement(evt);
                        this.trigger("dragStop", {
                            event: evt,
                            element: this.element,
                            target: curTarget,
                            helper: this.helperElement
                        });
                    }
                    this.intDestroy(evt);
                } else this.element.setAttribute("aria-grabbed", "false");
                var eleObj = this.checkTargetElement(evt);
                eleObj.target && eleObj.instance && (eleObj.instance.dragStopCalled = !0, eleObj.instance.dragData[this.scope] = this.droppables[this.scope], 
                eleObj.instance.intDrop(evt, eleObj.target)), this.setGlobalDroppables(!0), document.body.classList.remove("e-prevent-select");
            }
        }, Draggable.prototype.intDestroy = function(evt) {
            this.toggleEvents(), document.body.classList.remove("e-prevent-select"), this.element.setAttribute("aria-grabbed", "false"), 
            EventHandler.remove(document, Browser.touchMoveEvent, this.intDragStart), EventHandler.remove(document, Browser.touchEndEvent, this.intDragStop), 
            EventHandler.remove(document, Browser.touchEndEvent, this.intDestroy), EventHandler.remove(document, Browser.touchMoveEvent, this.intDrag);
        }, Draggable.prototype.onPropertyChanged = function(newProp, oldProp) {}, Draggable.prototype.getModuleName = function() {
            return "draggable";
        }, Draggable.prototype.setDragArea = function() {
            var eleWidthBound, eleHeightBound, ele, top = 0, left = 0;
            if (ele = "string" === typeof this.dragArea ? select(this.dragArea) : this.dragArea) {
                var elementArea = ele.getBoundingClientRect();
                eleWidthBound = elementArea.width ? elementArea.width : elementArea.right - elementArea.left, 
                eleHeightBound = elementArea.height ? elementArea.height : elementArea.bottom - elementArea.top;
                for (var keys = [ "Top", "Left", "Bottom", "Right" ], styles = getComputedStyle(ele), i = 0; i < keys.length; i++) {
                    var key = keys[i], tborder = styles["border" + key + "Width"], tpadding = styles["padding" + key], lowerKey = key.toLowerCase();
                    this.borderWidth[lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder), 
                    this.padding[lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
                }
                top = elementArea.top, left = elementArea.left, this.dragLimit.left = left + this.borderWidth.left + this.padding.left, 
                this.dragLimit.top = top + this.borderWidth.top + this.padding.top, this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right), 
                this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
            }
        }, Draggable.prototype.getProperTargetElement = function(evt) {
            var ele, intCoord = this.getCoordinates(evt), prevStyle = this.helperElement.style.display || "";
            return compareElementParent(evt.target, this.helperElement) || -1 !== evt.type.indexOf("touch") ? (this.helperElement.style.display = "none", 
            ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY), this.helperElement.style.display = prevStyle) : ele = evt.target, 
            ele;
        }, Draggable.prototype.getMousePosition = function(evt) {
            var intCoord = this.getCoordinates(evt), pageX = this.clone ? intCoord.pageX : intCoord.pageX - this.relativeXPosition, pageY = this.clone ? intCoord.pageY : intCoord.pageY - this.relativeYPosition;
            return {
                left: pageX - (this.margin.left + this.cursorAt.left),
                top: pageY - (this.margin.top + this.cursorAt.top)
            };
        }, Draggable.prototype.getCoordinates = function(evt) {
            return evt.type.indexOf("touch") > -1 ? evt.changedTouches[0] : evt;
        }, Draggable.prototype.getHelperElement = function(evt) {
            var element;
            return this.clone ? this.helper ? element = this.helper({
                sender: evt,
                element: this.target
            }) : (element = createElement("div", {
                className: "e-drag-helper e-block-touch",
                innerHTML: "Draggable"
            }), document.body.appendChild(element)) : element = this.element, element;
        }, Draggable.prototype.setGlobalDroppables = function(reset, drag, helper) {
            this.droppables[this.scope] = reset ? null : {
                draggable: drag,
                helper: helper,
                draggedElement: this.element
            };
        }, Draggable.prototype.checkTargetElement = function(evt) {
            var target = this.getProperTargetElement(evt), dropIns = this.getDropInstance(target);
            if (!dropIns && target && !isNullOrUndefined(target.parentNode)) {
                var parent_1 = closest(target.parentNode, ".e-droppable") || target.parentElement;
                parent_1 && (dropIns = this.getDropInstance(parent_1));
            }
            return {
                target: target,
                instance: dropIns
            };
        }, Draggable.prototype.getDropInstance = function(ele) {
            var drop, eleInst = ele && ele.ej2_instances;
            if (eleInst) for (var _i = 0, eleInst_1 = eleInst; _i < eleInst_1.length; _i++) {
                var inst = eleInst_1[_i];
                if ("droppable" === inst.getModuleName()) {
                    drop = inst;
                    break;
                }
            }
            return drop;
        }, Draggable.prototype.destroy = function() {
            this.toggleEvents(!0), _super.prototype.destroy.call(this);
        }, __decorate$3([ Complex({}, Position) ], Draggable.prototype, "cursorAt", void 0), 
        __decorate$3([ Property(!0) ], Draggable.prototype, "clone", void 0), __decorate$3([ Property() ], Draggable.prototype, "dragArea", void 0), 
        __decorate$3([ Event() ], Draggable.prototype, "drag", void 0), __decorate$3([ Event() ], Draggable.prototype, "dragStart", void 0), 
        __decorate$3([ Event() ], Draggable.prototype, "dragStop", void 0), __decorate$3([ Property(1) ], Draggable.prototype, "distance", void 0), 
        __decorate$3([ Property() ], Draggable.prototype, "handle", void 0), __decorate$3([ Property() ], Draggable.prototype, "abort", void 0), 
        __decorate$3([ Property() ], Draggable.prototype, "helper", void 0), __decorate$3([ Property("default") ], Draggable.prototype, "scope", void 0), 
        __decorate$3([ Property("") ], Draggable.prototype, "dragTarget", void 0), __decorate$3([ Property() ], Draggable.prototype, "axis", void 0), 
        __decorate$3([ Property() ], Draggable.prototype, "queryPositionInfo", void 0), 
        __decorate$3([ Property(!1) ], Draggable.prototype, "enableTailMode", void 0), __decorate$3([ Property(!1) ], Draggable.prototype, "skipDistanceCheck", void 0), 
        __decorate$3([ Property(!0) ], Draggable.prototype, "preventDefault", void 0), __decorate$3([ Property(!1) ], Draggable.prototype, "enableAutoScroll", void 0), 
        Draggable = Draggable_1 = __decorate$3([ NotifyPropertyChanges ], Draggable);
        var Draggable_1;
    }(Base), __extends$4 = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate$4 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, Droppable = function(_super) {
        function Droppable(element, options) {
            var _this = _super.call(this, options, element) || this;
            return _this.mouseOver = !1, _this.dragData = {}, _this.dragStopCalled = !1, _this.bind(), 
            _this;
        }
        return __extends$4(Droppable, _super), Droppable.prototype.bind = function() {
            this.wireEvents();
        }, Droppable.prototype.wireEvents = function() {
            EventHandler.add(this.element, Browser.touchEndEvent, this.intDrop, this);
        }, Droppable.prototype.onPropertyChanged = function(newProp, oldProp) {}, Droppable.prototype.getModuleName = function() {
            return "droppable";
        }, Droppable.prototype.intOver = function(event, element) {
            if (!this.mouseOver) {
                var drag = this.dragData[this.scope];
                this.trigger("over", {
                    event: event,
                    target: element,
                    dragData: drag
                }), this.mouseOver = !0;
            }
        }, Droppable.prototype.intOut = function(event, element) {
            this.mouseOver && (this.trigger("out", {
                evt: event,
                target: element
            }), this.mouseOver = !1);
        }, Droppable.prototype.intDrop = function(evt, element) {
            if (this.dragStopCalled) {
                this.dragStopCalled = !1;
                var area, accept = !0, drag = this.dragData[this.scope], isDrag = !!drag && (drag.helper && isVisible(drag.helper));
                isDrag && (area = this.isDropArea(evt, drag.helper, element), this.accept && (accept = matches(drag.helper, this.accept))), 
                isDrag && this.drop && area.canDrop && accept && this.trigger("drop", {
                    event: evt,
                    target: area.target,
                    droppedElement: drag.helper,
                    dragData: drag
                }), this.mouseOver = !1;
            }
        }, Droppable.prototype.isDropArea = function(evt, helper, element) {
            var area = {
                canDrop: !0,
                target: element || evt.target
            }, isTouch = "touchend" === evt.type;
            if (isTouch || area.target === helper) {
                helper.style.display = "none";
                var coord = isTouch ? evt.changedTouches[0] : evt, ele = document.elementFromPoint(coord.clientX, coord.clientY);
                area.canDrop = !1, area.canDrop = compareElementParent(ele, this.element), area.canDrop && (area.target = ele), 
                helper.style.display = "";
            }
            return area;
        }, Droppable.prototype.destroy = function() {
            EventHandler.remove(this.element, Browser.touchEndEvent, this.intDrop), _super.prototype.destroy.call(this);
        }, __decorate$4([ Property() ], Droppable.prototype, "accept", void 0), __decorate$4([ Property("default") ], Droppable.prototype, "scope", void 0), 
        __decorate$4([ Event() ], Droppable.prototype, "drop", void 0), __decorate$4([ Event() ], Droppable.prototype, "over", void 0), 
        __decorate$4([ Event() ], Droppable.prototype, "out", void 0), Droppable = __decorate$4([ NotifyPropertyChanges ], Droppable);
    }(Base), __extends$5 = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate$5 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, keyCode = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        control: 17,
        alt: 18,
        pause: 19,
        capslock: 20,
        space: 32,
        escape: 27,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        leftarrow: 37,
        uparrow: 38,
        rightarrow: 39,
        downarrow: 40,
        insert: 45,
        delete: 46,
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123,
        semicolon: 186,
        plus: 187,
        comma: 188,
        minus: 189,
        dot: 190,
        forwardslash: 191,
        graveaccent: 192,
        openbracket: 219,
        backslash: 220,
        closebracket: 221,
        singlequote: 222
    }, KeyboardEvents = function(_super) {
        function KeyboardEvents(element, options) {
            var _this = _super.call(this, options, element) || this;
            return _this.keyPressHandler = function(e) {
                for (var isAltKey = e.altKey, isCtrlKey = e.ctrlKey, isShiftKey = e.shiftKey, curkeyCode = e.which, _i = 0, keys_1 = Object.keys(_this.keyConfigs); _i < keys_1.length; _i++) for (var key = keys_1[_i], _a = 0, configCollection_1 = _this.keyConfigs[key].split(","); _a < configCollection_1.length; _a++) {
                    var rconfig = configCollection_1[_a], rKeyObj = KeyboardEvents_1.getKeyConfigData(rconfig.trim());
                    isAltKey === rKeyObj.altKey && isCtrlKey === rKeyObj.ctrlKey && isShiftKey === rKeyObj.shiftKey && curkeyCode === rKeyObj.keyCode && (e.action = key, 
                    _this.keyAction && _this.keyAction(e));
                }
            }, _this.bind(), _this;
        }
        return __extends$5(KeyboardEvents, _super), KeyboardEvents_1 = KeyboardEvents, KeyboardEvents.prototype.destroy = function() {
            this.unwireEvents(), _super.prototype.destroy.call(this);
        }, KeyboardEvents.prototype.onPropertyChanged = function(newProp, oldProp) {}, KeyboardEvents.prototype.bind = function() {
            this.wireEvents();
        }, KeyboardEvents.prototype.getModuleName = function() {
            return "keyboard";
        }, KeyboardEvents.prototype.wireEvents = function() {
            this.element.addEventListener(this.eventName, this.keyPressHandler);
        }, KeyboardEvents.prototype.unwireEvents = function() {
            this.element.removeEventListener(this.eventName, this.keyPressHandler);
        }, KeyboardEvents.getKeyConfigData = function(config) {
            if (config in this.configCache) return this.configCache[config];
            var keys = config.toLowerCase().split("+"), keyData = {
                altKey: -1 !== keys.indexOf("alt"),
                ctrlKey: -1 !== keys.indexOf("ctrl"),
                shiftKey: -1 !== keys.indexOf("shift"),
                keyCode: null
            };
            return keys[keys.length - 1].length > 1 && Number(keys[keys.length - 1]) ? keyData.keyCode = Number(keys[keys.length - 1]) : keyData.keyCode = KeyboardEvents_1.getKeyCode(keys[keys.length - 1]), 
            KeyboardEvents_1.configCache[config] = keyData, keyData;
        }, KeyboardEvents.getKeyCode = function(keyVal) {
            return keyCode[keyVal] || keyVal.toUpperCase().charCodeAt(0);
        }, KeyboardEvents.configCache = {}, __decorate$5([ Property({}) ], KeyboardEvents.prototype, "keyConfigs", void 0), 
        __decorate$5([ Property("keyup") ], KeyboardEvents.prototype, "eventName", void 0), 
        __decorate$5([ Event() ], KeyboardEvents.prototype, "keyAction", void 0), KeyboardEvents = KeyboardEvents_1 = __decorate$5([ NotifyPropertyChanges ], KeyboardEvents);
        var KeyboardEvents_1;
    }(Base), L10n = function() {
        function L10n(controlName, localeStrings, locale) {
            this.controlName = controlName, this.localeStrings = localeStrings, this.setLocale(locale || defaultCulture);
        }
        return L10n.prototype.setLocale = function(locale) {
            var intLocale = this.intGetControlConstant(L10n.locale, locale);
            this.currentLocale = intLocale || this.localeStrings;
        }, L10n.load = function(localeObject) {
            this.locale = extend(this.locale, localeObject, {}, !0);
        }, L10n.prototype.getConstant = function(prop) {
            return this.currentLocale[prop] || this.localeStrings[prop] || "";
        }, L10n.prototype.intGetControlConstant = function(curObject, locale) {
            return curObject[locale] ? curObject[locale][this.controlName] : null;
        }, L10n.locale = {}, L10n;
    }(), SvgRenderer = function() {
        function SvgRenderer(rootID) {
            this.svgLink = "http://www.w3.org/2000/svg", this.rootId = rootID;
        }
        return SvgRenderer.prototype.getOptionValue = function(options, key) {
            return options[key];
        }, SvgRenderer.prototype.createSvg = function(options) {
            return isNullOrUndefined(options.id) && (options.id = this.rootId + "_svg"), this.svgObj = document.getElementById(options.id), 
            isNullOrUndefined(document.getElementById(options.id)) && (this.svgObj = document.createElementNS(this.svgLink, "svg")), 
            this.svgObj = this.setElementAttributes(options, this.svgObj), this.setSVGSize(options.width, options.height), 
            this.svgObj;
        }, SvgRenderer.prototype.setSVGSize = function(width, height) {
            var element = document.getElementById(this.rootId), size = isNullOrUndefined(element) ? null : element.getBoundingClientRect();
            isNullOrUndefined(this.width) || this.width <= 0 ? this.svgObj.setAttribute("width", width ? width.toString() : size.width.toString()) : this.svgObj.setAttribute("width", this.width.toString()), 
            isNullOrUndefined(this.height) || this.height <= 0 ? this.svgObj.setAttribute("height", height ? height.toString() : "450") : this.svgObj.setAttribute("height", this.height.toString());
        }, SvgRenderer.prototype.drawPath = function(options) {
            var path = document.getElementById(options.id);
            return null === path && (path = document.createElementNS(this.svgLink, "path")), 
            path = this.setElementAttributes(options, path);
        }, SvgRenderer.prototype.drawLine = function(options) {
            var line = document.getElementById(options.id);
            return null === line && (line = document.createElementNS(this.svgLink, "line")), 
            line = this.setElementAttributes(options, line);
        }, SvgRenderer.prototype.drawRectangle = function(options) {
            var rectangle = document.getElementById(options.id);
            return null === rectangle && (rectangle = document.createElementNS(this.svgLink, "rect")), 
            rectangle = this.setElementAttributes(options, rectangle);
        }, SvgRenderer.prototype.drawCircle = function(options) {
            var circle = document.getElementById(options.id);
            return null === circle && (circle = document.createElementNS(this.svgLink, "circle")), 
            circle = this.setElementAttributes(options, circle);
        }, SvgRenderer.prototype.drawPolyline = function(options) {
            var polyline = document.getElementById(options.id);
            return null === polyline && (polyline = document.createElementNS(this.svgLink, "polyline")), 
            polyline = this.setElementAttributes(options, polyline);
        }, SvgRenderer.prototype.drawEllipse = function(options) {
            var ellipse = document.getElementById(options.id);
            return null === ellipse && (ellipse = document.createElementNS(this.svgLink, "ellipse")), 
            ellipse = this.setElementAttributes(options, ellipse);
        }, SvgRenderer.prototype.drawPolygon = function(options) {
            var polygon = document.getElementById(options.id);
            return null === polygon && (polygon = document.createElementNS(this.svgLink, "polygon")), 
            polygon = this.setElementAttributes(options, polygon);
        }, SvgRenderer.prototype.drawImage = function(options) {
            var img = document.createElementNS(this.svgLink, "image");
            return img.setAttributeNS(null, "height", options.height.toString()), img.setAttributeNS(null, "width", options.width.toString()), 
            img.setAttributeNS("http://www.w3.org/1999/xlink", "href", options.href), img.setAttributeNS(null, "x", options.x.toString()), 
            img.setAttributeNS(null, "y", options.y.toString()), img.setAttributeNS(null, "id", options.id), 
            img.setAttributeNS(null, "visibility", options.visibility), isNullOrUndefined(this.getOptionValue(options, "clip-path")) || img.setAttributeNS(null, "clip-path", this.getOptionValue(options, "clip-path")), 
            isNullOrUndefined(options.preserveAspectRatio) || img.setAttributeNS(null, "preserveAspectRatio", options.preserveAspectRatio), 
            img;
        }, SvgRenderer.prototype.createText = function(options, label) {
            var text = document.createElementNS(this.svgLink, "text");
            return text = this.setElementAttributes(options, text), isNullOrUndefined(label) || (text.textContent = label), 
            text;
        }, SvgRenderer.prototype.createTSpan = function(options, label) {
            var tSpan = document.createElementNS(this.svgLink, "tspan");
            return tSpan = this.setElementAttributes(options, tSpan), isNullOrUndefined(label) || (tSpan.textContent = label), 
            tSpan;
        }, SvgRenderer.prototype.createTitle = function(text) {
            var title = document.createElementNS(this.svgLink, "title");
            return title.textContent = text, title;
        }, SvgRenderer.prototype.createDefs = function() {
            return document.createElementNS(this.svgLink, "defs");
        }, SvgRenderer.prototype.createClipPath = function(options) {
            var clipPath = document.createElementNS(this.svgLink, "clipPath");
            return clipPath = this.setElementAttributes(options, clipPath);
        }, SvgRenderer.prototype.createForeignObject = function(options) {
            var foreignObject = document.createElementNS(this.svgLink, "foreignObject");
            return foreignObject = this.setElementAttributes(options, foreignObject);
        }, SvgRenderer.prototype.createGroup = function(options) {
            var group = document.createElementNS(this.svgLink, "g");
            return group = this.setElementAttributes(options, group);
        }, SvgRenderer.prototype.createPattern = function(options, element) {
            var pattern = document.createElementNS(this.svgLink, element);
            return pattern = this.setElementAttributes(options, pattern);
        }, SvgRenderer.prototype.createRadialGradient = function(colors, name, options) {
            var colorName;
            if (isNullOrUndefined(colors[0].colorStop)) colorName = colors[0].color.toString(); else {
                var newOptions = {
                    id: this.rootId + "_" + name + "radialGradient",
                    cx: options.cx + "%",
                    cy: options.cy + "%",
                    r: options.r + "%",
                    fx: options.fx + "%",
                    fy: options.fy + "%"
                };
                this.drawGradient("radialGradient", newOptions, colors), colorName = "url(#" + this.rootId + "_" + name + "radialGradient)";
            }
            return colorName;
        }, SvgRenderer.prototype.createLinearGradient = function(colors, name, options) {
            var colorName;
            if (isNullOrUndefined(colors[0].colorStop)) colorName = colors[0].color.toString(); else {
                var newOptions = {
                    id: this.rootId + "_" + name + "linearGradient",
                    x1: options.x1 + "%",
                    y1: options.y1 + "%",
                    x2: options.x2 + "%",
                    y2: options.y2 + "%"
                };
                this.drawGradient("linearGradient", newOptions, colors), colorName = "url(#" + this.rootId + "_" + name + "linearGradient)";
            }
            return colorName;
        }, SvgRenderer.prototype.drawGradient = function(gradientType, options, colors) {
            var defs = this.createDefs(), gradient = document.createElementNS(this.svgLink, gradientType);
            gradient = this.setElementAttributes(options, gradient);
            for (var i = 0; i < colors.length; i++) {
                var stop_1 = document.createElementNS(this.svgLink, "stop");
                stop_1.setAttribute("offset", colors[i].colorStop), stop_1.setAttribute("stop-color", colors[i].color), 
                stop_1.setAttribute("stop-opacity", "1"), gradient.appendChild(stop_1);
            }
            return defs.appendChild(gradient), defs;
        }, SvgRenderer.prototype.drawClipPath = function(options) {
            var defs = this.createDefs(), clipPath = this.createClipPath({
                id: options.id
            }), rect = this.drawRectangle(options);
            return clipPath.appendChild(rect), defs.appendChild(clipPath), defs;
        }, SvgRenderer.prototype.drawCircularClipPath = function(options) {
            var defs = this.createDefs(), clipPath = this.createClipPath({
                id: options.id
            }), circle = this.drawCircle(options);
            return clipPath.appendChild(circle), defs.appendChild(clipPath), defs;
        }, SvgRenderer.prototype.setElementAttributes = function(options, element) {
            for (var keys = Object.keys(options), i = 0; i < keys.length; i++) element.setAttribute(keys[i], options[keys[i]]);
            return element;
        }, SvgRenderer;
    }(), __extends$6 = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate$6 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, SwipeSettings = function(_super) {
        function SwipeSettings() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends$6(SwipeSettings, _super), __decorate$6([ Property(50) ], SwipeSettings.prototype, "swipeThresholdDistance", void 0), 
        SwipeSettings;
    }(ChildProperty), swipeRegex = /(Up|Down)/, Touch = function(_super) {
        function Touch(element, options) {
            var _this = _super.call(this, options, element) || this;
            return _this.touchAction = !0, _this.tapCount = 0, _this.startEvent = function(evt) {
                if (!0 === _this.touchAction) {
                    var point = evt.changedTouches ? evt.changedTouches[0] : evt;
                    void 0 !== evt.changedTouches && (_this.touchAction = !1), _this.isTouchMoved = !1, 
                    _this.movedDirection = "", _this.startPoint = _this.lastMovedPoint = {
                        clientX: point.clientX,
                        clientY: point.clientY
                    }, _this.startEventData = point, _this.hScrollLocked = _this.vScrollLocked = !1, 
                    _this.tStampStart = Date.now(), _this.timeOutTapHold = setTimeout(function() {
                        _this.tapHoldEvent(evt);
                    }, _this.tapHoldThreshold), EventHandler.add(_this.element, Browser.touchMoveEvent, _this.moveEvent, _this), 
                    EventHandler.add(_this.element, Browser.touchEndEvent, _this.endEvent, _this), EventHandler.add(_this.element, Browser.touchCancelEvent, _this.cancelEvent, _this);
                }
            }, _this.moveEvent = function(evt) {
                var point = evt.changedTouches ? evt.changedTouches[0] : evt;
                _this.movedPoint = point, _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
                var eScrollArgs = {};
                if (_this.isTouchMoved) {
                    clearTimeout(_this.timeOutTapHold), _this.calcScrollPoints(evt);
                    eScrollArgs = extend(eScrollArgs, {}, {
                        startEvents: _this.startEventData,
                        originalEvent: evt,
                        startX: _this.startPoint.clientX,
                        startY: _this.startPoint.clientY,
                        distanceX: _this.distanceX,
                        distanceY: _this.distanceY,
                        scrollDirection: _this.scrollDirection,
                        velocity: _this.getVelocity(point)
                    }), _this.trigger("scroll", eScrollArgs), _this.lastMovedPoint = {
                        clientX: point.clientX,
                        clientY: point.clientY
                    };
                }
            }, _this.cancelEvent = function(evt) {
                clearTimeout(_this.timeOutTapHold), clearTimeout(_this.timeOutTap), _this.tapCount = 0, 
                _this.swipeFn(evt), EventHandler.remove(_this.element, Browser.touchCancelEvent, _this.cancelEvent);
            }, _this.endEvent = function(evt) {
                _this.swipeFn(evt), _this.isTouchMoved || "function" == typeof _this.tap && (_this.trigger("tap", {
                    originalEvent: evt,
                    tapCount: ++_this.tapCount
                }), _this.timeOutTap = setTimeout(function() {
                    _this.tapCount = 0;
                }, _this.tapThreshold)), _this.modeclear();
            }, _this.swipeFn = function(evt) {
                clearTimeout(_this.timeOutTapHold), clearTimeout(_this.timeOutTap);
                var point = evt;
                evt.changedTouches && (point = evt.changedTouches[0]);
                var diffX = point.clientX - _this.startPoint.clientX, diffY = point.clientY - _this.startPoint.clientY;
                diffX = Math.floor(diffX < 0 ? -1 * diffX : diffX), diffY = Math.floor(diffY < 0 ? -1 * diffY : diffX), 
                _this.isTouchMoved = diffX > 1 || diffY > 1, _this.endPoint = point, _this.calcPoints(evt);
                var swipeArgs = {
                    originalEvent: evt,
                    startEvents: _this.startEventData,
                    startX: _this.startPoint.clientX,
                    startY: _this.startPoint.clientY,
                    distanceX: _this.distanceX,
                    distanceY: _this.distanceY,
                    swipeDirection: _this.movedDirection,
                    velocity: _this.getVelocity(point)
                };
                if (_this.isTouchMoved) {
                    var eSwipeArgs = void 0, tDistance = _this.swipeSettings.swipeThresholdDistance;
                    eSwipeArgs = extend(eSwipeArgs, _this.defaultArgs, swipeArgs);
                    var canTrigger = !1, ele = _this.element, scrollBool = _this.isScrollable(ele), moved = swipeRegex.test(_this.movedDirection);
                    (tDistance < _this.distanceX && !moved || tDistance < _this.distanceY && moved) && (canTrigger = !scrollBool || _this.checkSwipe(ele, moved)), 
                    canTrigger && _this.trigger("swipe", eSwipeArgs);
                }
                _this.modeclear();
            }, _this.modeclear = function() {
                _this.modeClear = setTimeout(function() {
                    _this.touchAction = !0;
                }, "function" != typeof _this.tap ? 0 : 10), _this.lastTapTime = new Date().getTime(), 
                EventHandler.remove(_this.element, Browser.touchMoveEvent, _this.moveEvent), EventHandler.remove(_this.element, Browser.touchEndEvent, _this.endEvent), 
                EventHandler.remove(_this.element, Browser.touchCancelEvent, _this.cancelEvent);
            }, _this.bind(), _this;
        }
        return __extends$6(Touch, _super), Touch.prototype.onPropertyChanged = function(newProp, oldProp) {}, 
        Touch.prototype.bind = function() {
            this.wireEvents(), Browser.isIE && this.element.classList.add("e-block-touch");
        }, Touch.prototype.destroy = function() {
            this.unwireEvents(), _super.prototype.destroy.call(this);
        }, Touch.prototype.wireEvents = function() {
            EventHandler.add(this.element, Browser.touchStartEvent, this.startEvent, this);
        }, Touch.prototype.unwireEvents = function() {
            EventHandler.remove(this.element, Browser.touchStartEvent, this.startEvent);
        }, Touch.prototype.getModuleName = function() {
            return "touch";
        }, Touch.prototype.isScrollable = function(element) {
            var eleStyle = getComputedStyle(element), style = eleStyle.overflow + eleStyle.overflowX + eleStyle.overflowY;
            return !!/(auto|scroll)/.test(style);
        }, Touch.prototype.tapHoldEvent = function(evt) {
            this.tapCount = 0, this.touchAction = !0;
            var eTapArgs;
            EventHandler.remove(this.element, Browser.touchMoveEvent, this.moveEvent), EventHandler.remove(this.element, Browser.touchEndEvent, this.endEvent), 
            eTapArgs = {
                originalEvent: evt
            }, this.trigger("tapHold", eTapArgs), EventHandler.remove(this.element, Browser.touchCancelEvent, this.cancelEvent);
        }, Touch.prototype.calcPoints = function(evt) {
            var point = evt.changedTouches ? evt.changedTouches[0] : evt;
            this.defaultArgs = {
                originalEvent: evt
            }, this.distanceX = Math.abs(Math.abs(point.clientX) - Math.abs(this.startPoint.clientX)), 
            this.distanceY = Math.abs(Math.abs(point.clientY) - Math.abs(this.startPoint.clientY)), 
            this.distanceX > this.distanceY ? this.movedDirection = point.clientX > this.startPoint.clientX ? "Right" : "Left" : this.movedDirection = point.clientY < this.startPoint.clientY ? "Up" : "Down";
        }, Touch.prototype.calcScrollPoints = function(evt) {
            var point = evt.changedTouches ? evt.changedTouches[0] : evt;
            this.defaultArgs = {
                originalEvent: evt
            }, this.distanceX = Math.abs(Math.abs(point.clientX) - Math.abs(this.lastMovedPoint.clientX)), 
            this.distanceY = Math.abs(Math.abs(point.clientY) - Math.abs(this.lastMovedPoint.clientY)), 
            (this.distanceX > this.distanceY || !0 === this.hScrollLocked) && !1 === this.vScrollLocked ? (this.scrollDirection = point.clientX > this.lastMovedPoint.clientX ? "Right" : "Left", 
            this.hScrollLocked = !0) : (this.scrollDirection = point.clientY < this.lastMovedPoint.clientY ? "Up" : "Down", 
            this.vScrollLocked = !0);
        }, Touch.prototype.getVelocity = function(pnt) {
            var newX = pnt.clientX, newY = pnt.clientY, newT = Date.now(), xDist = newX - this.startPoint.clientX, yDist = newY - this.startPoint.clientX, interval = newT - this.tStampStart;
            return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
        }, Touch.prototype.checkSwipe = function(ele, flag) {
            var keys = [ "scroll", "offset" ], temp = flag ? [ "Height", "Top" ] : [ "Width", "Left" ];
            return ele[keys[0] + temp[0]] <= ele[keys[1] + temp[0]] || (0 === ele[keys[0] + temp[1]] || ele[keys[1] + temp[0]] + ele[keys[0] + temp[1]] >= ele[keys[0] + temp[0]]);
        }, __decorate$6([ Event() ], Touch.prototype, "tap", void 0), __decorate$6([ Event() ], Touch.prototype, "tapHold", void 0), 
        __decorate$6([ Event() ], Touch.prototype, "swipe", void 0), __decorate$6([ Event() ], Touch.prototype, "scroll", void 0), 
        __decorate$6([ Property(350) ], Touch.prototype, "tapThreshold", void 0), __decorate$6([ Property(750) ], Touch.prototype, "tapHoldThreshold", void 0), 
        __decorate$6([ Complex({}, SwipeSettings) ], Touch.prototype, "swipeSettings", void 0), 
        Touch = __decorate$6([ NotifyPropertyChanges ], Touch);
    }(Base), LINES = new RegExp("\\n|\\r|\\s\\s+", "g"), QUOTES = new RegExp(/'|"/g), IF_STMT = new RegExp("if ?\\("), ELSEIF_STMT = new RegExp("else if ?\\("), ELSE_STMT = new RegExp("else"), FOR_STMT = new RegExp("for ?\\("), IF_OR_FOR = new RegExp("(/if|/for)"), CALL_FUNCTION = new RegExp("\\((.*)\\)", ""), NOT_NUMBER = new RegExp("^[0-9]+$", "g"), WORD = new RegExp("[\\w\"'.\\s+]+", "g"), DBL_QUOTED_STR = new RegExp('"(.*?)"', "g"), exp = new RegExp("\\${([^}]*)}", "g"), HAS_ROW = /^[\n\r.]+\<tr|^\<tr/, HAS_SVG = /^[\n\r.]+\<svg|^\<path|^\<g/, engineObj = {
        compile: new (function() {
            function Engine() {}
            return Engine.prototype.compile = function(templateString, helper) {
                return void 0 === helper && (helper = {}), compile$1(templateString, helper);
            }, Engine;
        }())().compile
    }, _base = Object.freeze({
        Ajax: Ajax,
        Animation: Animation,
        rippleEffect: rippleEffect,
        get isRippleEnabled() {
            return isRippleEnabled;
        },
        enableRipple: function(isRipple) {
            return isRippleEnabled = isRipple;
        },
        Base: Base,
        getComponent: function(elem, comp) {
            var instance, i;
            for (i = 0; i < elem.ej2_instances.length; i++) if (comp === (instance = elem.ej2_instances[i]).getModuleName()) return instance;
        },
        Browser: Browser,
        CanvasRenderer: CanvasRenderer,
        Component: Component,
        ChildProperty: ChildProperty,
        Position: Position,
        Draggable: Draggable,
        Droppable: Droppable,
        EventHandler: EventHandler,
        onIntlChange: onIntlChange,
        get rightToLeft() {
            return rightToLeft;
        },
        cldrData: cldrData,
        get defaultCulture() {
            return defaultCulture;
        },
        get defaultCurrencyCode() {
            return defaultCurrencyCode;
        },
        Internationalization: Internationalization,
        setCulture: function(cultureName) {
            defaultCulture = cultureName, onIntlChange.notify("notifyExternalChange", {
                locale: defaultCulture
            });
        },
        setCurrencyCode: function(currencyCode) {
            defaultCurrencyCode = currencyCode, onIntlChange.notify("notifyExternalChange", {
                currencyCode: defaultCurrencyCode
            });
        },
        loadCldr: function() {
            for (var data = [], _i = 0; _i < arguments.length; _i++) data[_i] = arguments[_i];
            for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
                var obj = data_1[_a];
                extend(cldrData, obj, {}, !0);
            }
        },
        enableRtl: function(status) {
            void 0 === status && (status = !0), rightToLeft = status, onIntlChange.notify("notifyExternalChange", {
                enableRtl: rightToLeft
            });
        },
        getNumericObject: function(locale, type) {
            var numObject = IntlBase.getDependables(cldrData, locale, !0)[mapper[0]], dateObject = IntlBase.getDependables(cldrData, locale)[mapper[1]], numSystem = getValue("defaultNumberingSystem", numObject), symbPattern = getValue("symbols-numberSystem-" + numSystem, numObject), pattern = IntlBase.getSymbolPattern(type || "decimal", numSystem, numObject, !1);
            return extend(symbPattern, IntlBase.getFormatData(pattern, !0, "", !0), {
                dateSeparator: IntlBase.getDateSeparator(dateObject)
            });
        },
        getDefaultDateObject: function() {
            return IntlBase.getDependables(cldrData, "", !1)[mapper[1]];
        },
        KeyboardEvents: KeyboardEvents,
        L10n: L10n,
        ModuleLoader: ModuleLoader,
        Property: Property,
        Complex: Complex,
        ComplexFactory: function(type) {
            return function(target, key) {
                var propertyDescriptor = {
                    set: function(defaultValue, curKey, type) {
                        return function(newValue) {
                            var curType = type(newValue);
                            getObject(this, curKey, defaultValue, curType).setProperties(newValue);
                        };
                    }({}, key, type),
                    get: function(defaultValue, curKey, type) {
                        return function() {
                            var curType = type({});
                            return this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : getObject(this, curKey, defaultValue, curType);
                        };
                    }({}, key, type),
                    enumerable: !0,
                    configurable: !0
                };
                Object.defineProperty(target, key, propertyDescriptor), addPropertyCollection(target, key, "complexProp", {}, type);
            };
        },
        Collection: Collection,
        CollectionFactory: function(type) {
            return function(target, key) {
                var propertyDescriptor = {
                    set: function(defaultValue, curKey, type) {
                        return function(newValue) {
                            var oldValueCollection = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue, newValCollection = getObjectArray(this, curKey, newValue, type, !0, !0);
                            this.saveChanges(curKey, newValCollection, oldValueCollection), this.properties[curKey] = newValCollection;
                        };
                    }([], key, type),
                    get: function(defaultValue, curKey, type) {
                        return function() {
                            var curType = type({});
                            if (!this.properties.hasOwnProperty(curKey)) {
                                var defCollection = getObjectArray(this, curKey, defaultValue, curType, !1);
                                this.properties[curKey] = defCollection;
                            }
                            return this.properties[curKey];
                        };
                    }([], key, type),
                    enumerable: !0,
                    configurable: !0
                };
                Object.defineProperty(target, key, propertyDescriptor), addPropertyCollection(target, key, "colProp", {}, type);
            };
        },
        Event: Event,
        NotifyPropertyChanges: NotifyPropertyChanges,
        CreateBuilder: function(component) {
            var builderFunction = function(element) {
                return this.element = element, this;
            };
            return function(element) {
                return builderFunction.prototype.hasOwnProperty("create") || ((builderFunction.prototype = getBuilderProperties(component)).create = function() {
                    var temp = extend({}, {}, this.properties);
                    return this.properties = {}, new component(temp, this.element);
                }), new builderFunction(element);
            };
        },
        SvgRenderer: SvgRenderer,
        SwipeSettings: SwipeSettings,
        Touch: Touch,
        compile: compile$$1,
        setTemplateEngine: function(classObj) {
            engineObj.compile = classObj.compile;
        },
        getTemplateEngine: function() {
            return engineObj.compile;
        },
        createInstance: createInstance,
        setImmediate: setImmediate,
        getValue: getValue,
        setValue: setValue,
        deleteObject: deleteObject,
        isObject: isObject$1,
        getEnumValue: function(enumObject, enumValue) {
            return enumObject[enumValue];
        },
        merge: merge,
        extend: extend,
        isNullOrUndefined: isNullOrUndefined,
        isUndefined: isUndefined,
        getUniqueID: getUniqueID,
        debounce: debounce,
        queryParams: function(data) {
            for (var array = [], _i = 0, keys_2 = Object.keys(data); _i < keys_2.length; _i++) {
                var key = keys_2[_i];
                array.push(encodeURIComponent(key) + "=" + encodeURIComponent("" + data[key]));
            }
            return array.join("&");
        },
        isObjectArray: function(value) {
            var parser = Object.prototype.toString;
            return "[object Array]" === parser.call(value) && "[object Object]" === parser.call(value[0]);
        },
        compareElementParent: compareElementParent,
        throwError: throwError,
        print: function(element, printWindow) {
            var div = document.createElement("div"), links = [].slice.call(document.getElementsByTagName("head")[0].querySelectorAll("link, style")), reference = "";
            isNullOrUndefined(printWindow) && (printWindow = window.open("", "print", "height=452,width=1024,tabbar=no")), 
            div.appendChild(element.cloneNode(!0));
            for (var i = 0, len = links.length; i < len; i++) reference += links[i].outerHTML;
            printWindow.document.write("<!DOCTYPE html> <html><head>" + reference + "</head><body>" + div.innerHTML + "<script> (function() { window.ready = true; })(); <\/script></body></html>"), 
            printWindow.document.close(), printWindow.focus();
            var interval = setInterval(function() {
                printWindow.ready && (printWindow.print(), printWindow.close(), clearInterval(interval));
            }, 500);
            return printWindow;
        },
        formatUnit: formatUnit,
        getInstance: getInstance,
        addInstance: function(element, instance) {
            var elem = "string" == typeof element ? document.querySelector(element) : element;
            elem[instances] ? elem[instances].push(instance) : elem[instances] = [ instance ];
        },
        uniqueID: uniqueID,
        createElement: createElement,
        addClass: addClass,
        removeClass: removeClass,
        isVisible: isVisible,
        prepend: prepend,
        append: append,
        detach: detach,
        remove: remove,
        attributes: attributes,
        select: select,
        selectAll: selectAll,
        closest: closest,
        siblings: function(element) {
            for (var siblings = [], _i = 0, childNodes_1 = Array.prototype.slice.call(element.parentNode.childNodes); _i < childNodes_1.length; _i++) {
                var curNode = childNodes_1[_i];
                curNode.nodeType === Node.ELEMENT_NODE && element !== curNode && siblings.push(curNode);
            }
            return siblings;
        },
        getAttributeOrDefault: function(element, property, value) {
            var attrVal = element.getAttribute(property);
            return isNullOrUndefined(attrVal) && (element.setAttribute(property, value.toString()), 
            attrVal = value), attrVal;
        },
        setStyleAttribute: setStyleAttribute,
        classList: function(element, addClasses, removeClasses) {
            addClass([ element ], addClasses), removeClass([ element ], removeClasses);
        },
        matches: matches,
        Observer: Observer
    }), fixedParent = !1, __extends$7 = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate$7 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, PositionData = function(_super) {
        function PositionData() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends$7(PositionData, _super), __decorate$7([ Property("left") ], PositionData.prototype, "X", void 0), 
        __decorate$7([ Property("top") ], PositionData.prototype, "Y", void 0), PositionData;
    }(ChildProperty), CLASSNAMES_ROOT = "e-popup", CLASSNAMES_RTL = "e-rtl", CLASSNAMES_OPEN = "e-popup-open", CLASSNAMES_CLOSE = "e-popup-close", Popup = function(_super) {
        function Popup(element, options) {
            var _this = _super.call(this, options, element) || this;
            return _this.fixedParent = !1, _this;
        }
        return __extends$7(Popup, _super), Popup.prototype.onPropertyChanged = function(newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                switch (_a[_i]) {
                  case "width":
                    setStyleAttribute(this.element, {
                        width: formatUnit(newProp.width)
                    });
                    break;

                  case "height":
                    setStyleAttribute(this.element, {
                        height: formatUnit(newProp.height)
                    });
                    break;

                  case "zIndex":
                    setStyleAttribute(this.element, {
                        zIndex: newProp.zIndex
                    });
                    break;

                  case "enableRtl":
                    this.setEnableRtl();
                    break;

                  case "position":
                  case "relateTo":
                    this.refreshPosition();
                    break;

                  case "offsetX":
                    var x = newProp.offsetX - oldProp.offsetX;
                    this.element.style.left = (parseInt(this.element.style.left, 10) + x).toString() + "px";
                    break;

                  case "offsetY":
                    var y = newProp.offsetY - oldProp.offsetY;
                    this.element.style.top = (parseInt(this.element.style.top, 10) + y).toString() + "px";
                    break;

                  case "content":
                    this.setContent();
                    break;

                  case "actionOnScroll":
                    "none" !== newProp.actionOnScroll ? this.wireScrollEvents() : this.unwireScrollEvents();
                }
            }
        }, Popup.prototype.getModuleName = function() {
            return "popup";
        }, Popup.prototype.getPersistData = function() {
            return this.addOnPersist([]);
        }, Popup.prototype.destroy = function() {
            this.element.classList.remove(CLASSNAMES_ROOT, CLASSNAMES_RTL), this.unwireEvents(), 
            _super.prototype.destroy.call(this);
        }, Popup.prototype.render = function() {
            this.element.classList.add(CLASSNAMES_ROOT);
            var styles = {};
            1e3 !== this.zIndex && (styles.zIndex = this.zIndex), "auto" !== this.width && (styles.width = formatUnit(this.width)), 
            "auto" !== this.height && (styles.height = formatUnit(this.height)), setStyleAttribute(this.element, styles), 
            this.setEnableRtl(), this.setContent(), this.wireEvents();
        }, Popup.prototype.wireEvents = function() {
            Browser.isDevice && EventHandler.add(window, "orientationchange", this.orientationOnChange, this), 
            "none" !== this.actionOnScroll && this.wireScrollEvents();
        }, Popup.prototype.wireScrollEvents = function() {
            if (this.getRelateToElement()) for (var _i = 0, _a = this.getScrollableParent(this.getRelateToElement()); _i < _a.length; _i++) {
                var parent_1 = _a[_i];
                EventHandler.add(parent_1, "scroll", this.scrollRefresh, this);
            }
        }, Popup.prototype.unwireEvents = function() {
            Browser.isDevice && EventHandler.remove(window, "orientationchange", this.orientationOnChange), 
            "none" !== this.actionOnScroll && this.unwireScrollEvents();
        }, Popup.prototype.unwireScrollEvents = function() {
            if (this.getRelateToElement()) for (var _i = 0, _a = this.getScrollableParent(this.getRelateToElement()); _i < _a.length; _i++) {
                var parent_2 = _a[_i];
                EventHandler.remove(parent_2, "scroll", this.scrollRefresh);
            }
        }, Popup.prototype.getRelateToElement = function() {
            var relateToElement = "" === this.relateTo || isNullOrUndefined(this.relateTo) ? document.body : this.relateTo;
            return this.setProperties({
                relateTo: relateToElement
            }, !0), "string" == typeof this.relateTo ? document.querySelector(this.relateTo) : this.relateTo;
        }, Popup.prototype.scrollRefresh = function(e) {
            if ("reposition" === this.actionOnScroll ? this.element.offsetParent === e.target || this.element.offsetParent && "BODY" === this.element.offsetParent.tagName && null == e.target.parentElement || this.refreshPosition() : "hide" === this.actionOnScroll && this.hide(), 
            "none" !== this.actionOnScroll && this.getRelateToElement()) {
                var targetVisible = this.isElementOnViewport(this.getRelateToElement(), e.target);
                targetVisible || this.targetInvisibleStatus ? targetVisible && (this.targetInvisibleStatus = !1) : (this.trigger("targetExitViewport"), 
                this.targetInvisibleStatus = !0);
            }
        }, Popup.prototype.isElementOnViewport = function(relateToElement, scrollElement) {
            for (var scrollParents = this.getScrollableParent(relateToElement), parent_3 = 0; parent_3 < scrollParents.length; parent_3++) if (!this.isElementVisible(relateToElement, scrollParents[parent_3])) return !1;
            return !0;
        }, Popup.prototype.isElementVisible = function(relateToElement, scrollElement) {
            var rect = relateToElement.getBoundingClientRect();
            if (!rect.height || !rect.width) return !1;
            if (scrollElement.getBoundingClientRect) {
                var parent_4 = scrollElement.getBoundingClientRect();
                return !(rect.bottom < parent_4.top || rect.bottom > parent_4.bottom || rect.right > parent_4.right || rect.left < parent_4.left);
            }
            var win = window, windowView_top = win.scrollY, windowView_left = win.scrollX, windowView_right = win.scrollX + win.outerWidth, windowView_bottom = win.scrollY + win.outerHeight, off = calculatePosition(relateToElement), ele_top = off.top, ele_left = off.left, ele_right = off.left + rect.width, ele_bottom = off.top + rect.height;
            return windowView_bottom - ele_top > 0 && windowView_right - ele_left > 0 && ele_right - windowView_left > 0 && ele_bottom - windowView_top > 0;
        }, Popup.prototype.preRender = function() {}, Popup.prototype.setEnableRtl = function() {
            this.reposition(), this.enableRtl ? this.element.classList.add(CLASSNAMES_RTL) : this.element.classList.remove(CLASSNAMES_RTL);
        }, Popup.prototype.setContent = function() {
            isNullOrUndefined(this.content) || (this.element.innerHTML = "", "string" == typeof this.content ? this.element.textContent = this.content : this.element.appendChild(this.content));
        }, Popup.prototype.orientationOnChange = function() {
            var _this = this;
            setTimeout(function() {
                _this.refreshPosition();
            }, 200);
        }, Popup.prototype.refreshPosition = function(target) {
            isNullOrUndefined(target) || this.checkFixedParent(target), this.reposition(), this.checkCollision();
        }, Popup.prototype.reposition = function() {
            var pos, relateToElement = this.getRelateToElement();
            if ("number" == typeof this.position.X && "number" == typeof this.position.Y) pos = {
                left: this.position.X,
                top: this.position.Y
            }; else if (relateToElement) {
                var display = this.element.style.display;
                this.element.style.display = "block", pos = this.getAnchorPosition(relateToElement, this.element, this.position, this.offsetX, this.offsetY), 
                this.element.style.display = display;
            } else pos = {
                left: 0,
                top: 0
            };
            this.element.style.left = pos.left + "px", this.element.style.top = pos.top + "px";
        }, Popup.prototype.getAnchorPosition = function(anchorEle, ele, position, offsetX, offsetY) {
            var eleRect = ele.getBoundingClientRect(), anchorRect = anchorEle.getBoundingClientRect(), anchor = anchorEle, anchorPos = {
                left: 0,
                top: 0
            };
            switch (anchorPos = ele.offsetParent && "BODY" === ele.offsetParent.tagName && "BODY" === anchorEle.tagName ? calculatePosition(anchorEle) : function(anchor, element) {
                var fixedElement = !1, anchorPos = {
                    left: 0,
                    top: 0
                }, tempAnchor = anchor;
                if (!anchor || !element) return anchorPos;
                for (isNullOrUndefined(element.offsetParent) && "fixed" === element.style.position && (fixedElement = !0); (element.offsetParent || fixedElement) && anchor && element.offsetParent !== anchor; ) anchorPos.left += anchor.offsetLeft, 
                anchorPos.top += anchor.offsetTop, anchor = anchor.offsetParent;
                for (anchor = tempAnchor; (element.offsetParent || fixedElement) && anchor && element.offsetParent !== anchor; ) anchorPos.left -= anchor.scrollLeft, 
                anchorPos.top -= anchor.scrollTop, anchor = anchor.parentElement;
                return anchorPos;
            }(anchor, ele), position.X) {
              default:
              case "left":
                break;

              case "center":
                "container" === this.targetType ? anchorPos.left += anchorRect.width / 2 - eleRect.width / 2 : anchorPos.left += anchorRect.width / 2;
                break;

              case "right":
                "container" === this.targetType ? anchorPos.left += anchorRect.width - eleRect.width : anchorPos.left += anchorRect.width;
            }
            switch (position.Y) {
              default:
              case "top":
                break;

              case "center":
                "container" === this.targetType ? anchorPos.top += anchorRect.height / 2 - eleRect.height / 2 : anchorPos.top += anchorRect.height / 2;
                break;

              case "bottom":
                "container" === this.targetType ? anchorPos.top += anchorRect.height - eleRect.height : anchorPos.top += anchorRect.height;
            }
            return anchorPos.left += offsetX, anchorPos.top += offsetY, anchorPos;
        }, Popup.prototype.callFlip = function(param) {
            var relateToElement = this.getRelateToElement();
            flip(this.element, relateToElement, this.offsetX, this.offsetY, this.position.X, this.position.Y, this.viewPortElement, param, this.fixedParent);
        }, Popup.prototype.callFit = function(param) {
            if (0 !== isCollide(this.element, this.viewPortElement).length) if (isNullOrUndefined(this.viewPortElement)) {
                var data = fit(this.element, this.viewPortElement, param);
                this.element.style.left = data.left + "px", this.element.style.top = data.top + "px";
            } else {
                var elementRect = this.element.getBoundingClientRect(), viewPortRect = this.viewPortElement.getBoundingClientRect();
                param && !0 === param.Y && (viewPortRect.top > elementRect.top ? this.element.style.top = "0px" : viewPortRect.bottom < elementRect.bottom && (this.element.style.top = parseInt(this.element.style.top, 10) - (elementRect.bottom - viewPortRect.bottom) + "px")), 
                param && !0 === param.X && (viewPortRect.right < elementRect.right ? this.element.style.left = parseInt(this.element.style.left, 10) - (elementRect.right - viewPortRect.right) + "px" : viewPortRect.left > elementRect.left && (this.element.style.left = parseInt(this.element.style.left, 10) + (viewPortRect.left - elementRect.left) + "px"));
            }
        }, Popup.prototype.checkCollision = function() {
            var horz = this.collision.X, vert = this.collision.Y;
            "none" === horz && "none" === vert || ("flip" === horz && "flip" === vert ? this.callFlip({
                X: !0,
                Y: !0
            }) : "fit" === horz && "fit" === vert ? this.callFit({
                X: !0,
                Y: !0
            }) : ("flip" === horz ? this.callFlip({
                X: !0,
                Y: !1
            }) : "flip" === vert && this.callFlip({
                Y: !0,
                X: !1
            }), "fit" === horz ? this.callFit({
                X: !0,
                Y: !1
            }) : "fit" === vert && this.callFit({
                X: !1,
                Y: !0
            })));
        }, Popup.prototype.show = function(animationOptions, relativeElement) {
            var _this = this;
            if (1e3 === this.zIndex || !isNullOrUndefined(relativeElement)) {
                var zIndexElement = isNullOrUndefined(relativeElement) ? this.element : relativeElement;
                this.zIndex = getZindexPartial(zIndexElement), setStyleAttribute(this.element, {
                    zIndex: this.zIndex
                });
            }
            animationOptions = isNullOrUndefined(animationOptions) || "object" != typeof animationOptions ? this.showAnimation : animationOptions, 
            "none" === this.collision.X && "none" === this.collision.Y || (removeClass([ this.element ], CLASSNAMES_CLOSE), 
            addClass([ this.element ], CLASSNAMES_OPEN), this.checkCollision(), removeClass([ this.element ], CLASSNAMES_OPEN), 
            addClass([ this.element ], CLASSNAMES_CLOSE)), isNullOrUndefined(animationOptions) ? (removeClass([ this.element ], CLASSNAMES_CLOSE), 
            addClass([ this.element ], CLASSNAMES_OPEN), this.trigger("open")) : (animationOptions.begin = function() {
                _this.isDestroyed || (removeClass([ _this.element ], CLASSNAMES_CLOSE), addClass([ _this.element ], CLASSNAMES_OPEN));
            }, animationOptions.end = function() {
                _this.isDestroyed || _this.trigger("open");
            }, new Animation(animationOptions).animate(this.element));
        }, Popup.prototype.hide = function(animationOptions) {
            var _this = this;
            isNullOrUndefined(animationOptions = isNullOrUndefined(animationOptions) || "object" != typeof animationOptions ? this.hideAnimation : animationOptions) ? (removeClass([ this.element ], CLASSNAMES_OPEN), 
            addClass([ this.element ], CLASSNAMES_CLOSE), this.trigger("close")) : (animationOptions.end = function() {
                _this.isDestroyed || (removeClass([ _this.element ], CLASSNAMES_OPEN), addClass([ _this.element ], CLASSNAMES_CLOSE), 
                _this.trigger("close"));
            }, new Animation(animationOptions).animate(this.element));
        }, Popup.prototype.getScrollableParent = function(element) {
            return this.checkFixedParent(element), function(element, fixedParent) {
                for (var eleStyle = getComputedStyle(element), scrollParents = [], overflowRegex = /(auto|scroll)/, parent = element.parentElement; parent && "HTML" !== parent.tagName; ) {
                    var parentStyle = getComputedStyle(parent);
                    "absolute" === eleStyle.position && "static" === parentStyle.position || !overflowRegex.test(parentStyle.overflow + parentStyle.overflowY + parentStyle.overflowX) || scrollParents.push(parent), 
                    parent = parent.parentElement;
                }
                return fixedParent || scrollParents.push(document), scrollParents;
            }(element, this.fixedParent);
        }, Popup.prototype.checkFixedParent = function(element) {
            for (var parent = element.parentElement; parent && "HTML" !== parent.tagName; ) {
                var parentStyle = getComputedStyle(parent);
                "fixed" === parentStyle.position && this.element.offsetParent && "BODY" === this.element.offsetParent.tagName && (this.element.style.position = "fixed", 
                this.fixedParent = !0), parent = parent.parentElement, isNullOrUndefined(this.element.offsetParent) && "fixed" === parentStyle.position && "fixed" === this.element.style.position && (this.fixedParent = !0);
            }
        }, __decorate$7([ Property("auto") ], Popup.prototype, "height", void 0), __decorate$7([ Property("auto") ], Popup.prototype, "width", void 0), 
        __decorate$7([ Property(null) ], Popup.prototype, "content", void 0), __decorate$7([ Property("container") ], Popup.prototype, "targetType", void 0), 
        __decorate$7([ Property(null) ], Popup.prototype, "viewPortElement", void 0), __decorate$7([ Property({
            X: "none",
            Y: "none"
        }) ], Popup.prototype, "collision", void 0), __decorate$7([ Property("") ], Popup.prototype, "relateTo", void 0), 
        __decorate$7([ Complex({}, PositionData) ], Popup.prototype, "position", void 0), 
        __decorate$7([ Property(0) ], Popup.prototype, "offsetX", void 0), __decorate$7([ Property(0) ], Popup.prototype, "offsetY", void 0), 
        __decorate$7([ Property(1e3) ], Popup.prototype, "zIndex", void 0), __decorate$7([ Property(!1) ], Popup.prototype, "enableRtl", void 0), 
        __decorate$7([ Property("reposition") ], Popup.prototype, "actionOnScroll", void 0), 
        __decorate$7([ Property(null) ], Popup.prototype, "showAnimation", void 0), __decorate$7([ Property(null) ], Popup.prototype, "hideAnimation", void 0), 
        __decorate$7([ Event() ], Popup.prototype, "open", void 0), __decorate$7([ Event() ], Popup.prototype, "close", void 0), 
        __decorate$7([ Event() ], Popup.prototype, "targetExitViewport", void 0), Popup = __decorate$7([ NotifyPropertyChanges ], Popup);
    }(Component), __extends$9 = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate$9 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, cssClassName_RTL = "e-rtl", cssClassName_BUTTON = "e-btn", cssClassName_PRIMARY = "e-primary", cssClassName_ICONBTN = "e-icon-btn", Button = function(_super) {
        function Button(options, element) {
            return _super.call(this, options, element) || this;
        }
        return __extends$9(Button, _super), Button.prototype.preRender = function() {}, 
        Button.prototype.render = function() {
            this.initialize();
        }, Button.prototype.initialize = function() {
            this.cssClass && addClass([ this.element ], this.cssClass.split(" ")), this.isPrimary && this.element.classList.add(cssClassName_PRIMARY), 
            this.content && (this.element.innerHTML = this.content), this.setIconCss(), this.enableRtl && this.element.classList.add(cssClassName_RTL), 
            this.disabled ? this.controlStatus(this.disabled) : this.wireEvents(), this.removeRippleEffect = rippleEffect(this.element, {
                selector: "." + cssClassName_BUTTON
            });
        }, Button.prototype.controlStatus = function(disabled) {
            this.element.disabled = disabled;
        }, Button.prototype.setIconCss = function() {
            if (this.iconCss) {
                var span = this.createElement("span", {
                    className: "e-btn-icon " + this.iconCss
                });
                this.element.textContent.trim() ? span.classList.add("e-icon-" + this.iconPosition.toLowerCase()) : this.element.classList.add(cssClassName_ICONBTN);
                var node = this.element.childNodes[0];
                node && "Left" === this.iconPosition ? this.element.insertBefore(span, node) : this.element.appendChild(span);
            }
        }, Button.prototype.wireEvents = function() {
            this.isToggle && EventHandler.add(this.element, "click", this.btnClickHandler, this);
        }, Button.prototype.unWireEvents = function() {
            this.isToggle && EventHandler.remove(this.element, "click", this.btnClickHandler);
        }, Button.prototype.btnClickHandler = function() {
            this.element.classList.contains("e-active") ? this.element.classList.remove("e-active") : this.element.classList.add("e-active");
        }, Button.prototype.destroy = function() {
            var span, element = this.element;
            _super.prototype.destroy.call(this), removeClass([ this.element ], [ cssClassName_PRIMARY, cssClassName_RTL, cssClassName_ICONBTN, "e-success", "e-info", "e-danger", "e-warning", "e-flat", "e-outline", "e-small", "e-bigger", "e-active", "e-round" ]), 
            [ "e-ripple", "disabled" ].forEach(function(value) {
                element.removeAttribute(value);
            }), this.content && (element.innerHTML = element.innerHTML.replace(this.content, "")), 
            (span = element.querySelector("span.e-btn-icon")) && detach(span), this.unWireEvents(), 
            this.removeRippleEffect();
        }, Button.prototype.getModuleName = function() {
            return "btn";
        }, Button.prototype.getPersistData = function() {
            return this.addOnPersist([]);
        }, Button.prototype.onPropertyChanged = function(newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                switch (_a[_i]) {
                  case "isPrimary":
                    newProp.isPrimary ? this.element.classList.add(cssClassName_PRIMARY) : this.element.classList.remove(cssClassName_PRIMARY);
                    break;

                  case "disabled":
                    this.controlStatus(newProp.disabled), this.unWireEvents();
                    break;

                  case "iconCss":
                    var span = this.element.querySelector("span.e-btn-icon");
                    span ? (span.className = "e-btn-icon " + newProp.iconCss, this.element.textContent.trim() && ("Left" === this.iconPosition ? span.classList.add("e-icon-left") : span.classList.add("e-icon-right"))) : this.setIconCss();
                    break;

                  case "iconPosition":
                    (span = this.element.querySelector("span.e-btn-icon")) && detach(span), this.setIconCss();
                    break;

                  case "cssClass":
                    oldProp.cssClass && removeClass([ this.element ], oldProp.cssClass.split(" ")), 
                    newProp.cssClass && addClass([ this.element ], newProp.cssClass.split(" "));
                    break;

                  case "enableRtl":
                    newProp.enableRtl ? this.element.classList.add(cssClassName_RTL) : this.element.classList.remove(cssClassName_RTL);
                    break;

                  case "content":
                    getTextNode(this.element) || this.element.classList.remove(cssClassName_ICONBTN), 
                    this.element.innerHTML = newProp.content, this.setIconCss();
                    break;

                  case "isToggle":
                    newProp.isToggle ? EventHandler.add(this.element, "click", this.btnClickHandler, this) : (EventHandler.remove(this.element, "click", this.btnClickHandler), 
                    removeClass([ this.element ], [ "e-active" ]));
                }
            }
        }, __decorate$9([ Property("Left") ], Button.prototype, "iconPosition", void 0), 
        __decorate$9([ Property("") ], Button.prototype, "iconCss", void 0), __decorate$9([ Property(!1) ], Button.prototype, "disabled", void 0), 
        __decorate$9([ Property(!1) ], Button.prototype, "isPrimary", void 0), __decorate$9([ Property("") ], Button.prototype, "cssClass", void 0), 
        __decorate$9([ Property("") ], Button.prototype, "content", void 0), __decorate$9([ Property(!1) ], Button.prototype, "isToggle", void 0), 
        Button = __decorate$9([ NotifyPropertyChanges ], Button);
    }(Component), __extends$10 = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate$10 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, RIPPLE = "e-ripple-container", WRAPPER = "e-checkbox-wrapper", __extends$11 = (function(_super) {
        function CheckBox(options, element) {
            var _this = _super.call(this, options, element) || this;
            return _this.isKeyPressed = !1, _this;
        }
        __extends$10(CheckBox, _super), CheckBox.prototype.changeState = function(state) {
            var ariaState, rippleSpan, frameSpan = this.getWrapper().getElementsByClassName("e-frame")[0];
            isRippleEnabled && (rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0]), 
            "check" === state ? (frameSpan.classList.remove("e-stop"), frameSpan.classList.add("e-check"), 
            rippleSpan && (rippleSpan.classList.remove("e-ripple-stop"), rippleSpan.classList.add("e-ripple-check")), 
            ariaState = "true", this.element.checked = !0) : "uncheck" === state ? (removeClass([ frameSpan ], [ "e-check", "e-stop" ]), 
            rippleSpan && removeClass([ rippleSpan ], [ "e-ripple-check", "e-ripple-stop" ]), 
            ariaState = "false", this.element.checked = !1) : (frameSpan.classList.remove("e-check"), 
            frameSpan.classList.add("e-stop"), rippleSpan && (rippleSpan.classList.remove("e-ripple-check"), 
            rippleSpan.classList.add("e-ripple-stop")), ariaState = "mixed", this.element.indeterminate = !0), 
            this.getWrapper().setAttribute("aria-checked", ariaState);
        }, CheckBox.prototype.clickHandler = function(event) {
            this.focusOutHandler(), this.indeterminate ? (this.changeState(this.checked ? "check" : "uncheck"), 
            this.indeterminate = !1, this.element.indeterminate = !1) : this.checked ? (this.changeState("uncheck"), 
            this.checked = !1) : (this.changeState("check"), this.checked = !0);
            var changeEventArgs = {
                checked: this.element.checked,
                event: event
            };
            this.trigger("change", changeEventArgs);
        }, CheckBox.prototype.destroy = function() {
            var _this = this, wrapper = this.getWrapper();
            _super.prototype.destroy.call(this), this.disabled || this.unWireEvents(), "INPUT" === this.tagName ? (wrapper.parentNode.insertBefore(this.element, wrapper), 
            detach(wrapper), this.element.checked = !1, this.indeterminate && (this.element.indeterminate = !1), 
            [ "name", "value", "disabled" ].forEach(function(key) {
                _this.element.removeAttribute(key);
            })) : ([ "role", "aria-checked", "class" ].forEach(function(key) {
                wrapper.removeAttribute(key);
            }), this.element.id && wrapper.setAttribute("id", this.element.id), wrapper.innerHTML = "");
        }, CheckBox.prototype.focusHandler = function() {
            this.isKeyPressed && this.getWrapper().classList.add("e-focus");
        }, CheckBox.prototype.focusOutHandler = function() {
            this.getWrapper().classList.remove("e-focus");
        }, CheckBox.prototype.getModuleName = function() {
            return "checkbox";
        }, CheckBox.prototype.getPersistData = function() {
            return this.addOnPersist([ "checked", "indeterminate" ]);
        }, CheckBox.prototype.getWrapper = function() {
            return this.element.parentElement.parentElement;
        }, CheckBox.prototype.initialize = function() {
            this.name && this.element.setAttribute("name", this.name), this.value && this.element.setAttribute("value", this.value), 
            this.checked && this.changeState("check"), this.indeterminate && this.changeState(), 
            this.disabled && this.setDisabled();
        }, CheckBox.prototype.initWrapper = function() {
            var wrapper = this.element.parentElement;
            wrapper.classList.contains(WRAPPER) || (wrapper = this.createElement("div", {
                className: WRAPPER,
                attrs: {
                    role: "checkbox",
                    "aria-checked": "false"
                }
            }), this.element.parentNode.insertBefore(wrapper, this.element));
            var label = this.createElement("label", {
                attrs: {
                    for: this.element.id
                }
            }), frameSpan = this.createElement("span", {
                className: "e-icons e-frame"
            });
            if (this.enableRtl && wrapper.classList.add("e-rtl"), this.cssClass && addClass([ wrapper ], this.cssClass.split(" ")), 
            wrapper.appendChild(label), label.appendChild(this.element), label.appendChild(frameSpan), 
            isRippleEnabled) {
                var rippleSpan = this.createElement("span", {
                    className: RIPPLE
                });
                "Before" === this.labelPosition ? label.appendChild(rippleSpan) : label.insertBefore(rippleSpan, frameSpan), 
                rippleEffect(rippleSpan, {
                    duration: 400,
                    isCenterRipple: !0
                });
            }
            this.label && this.setText(this.label);
        }, CheckBox.prototype.keyDownHandler = function() {
            this.isKeyPressed = !0;
        }, CheckBox.prototype.labelMouseHandler = function(e) {
            rippleMouseHandler(e, this.getWrapper().getElementsByClassName(RIPPLE)[0]);
        }, CheckBox.prototype.mouseDownHandler = function() {
            this.isKeyPressed = !1;
        }, CheckBox.prototype.onPropertyChanged = function(newProp, oldProp) {
            for (var wrapper = this.getWrapper(), _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                switch (_a[_i]) {
                  case "checked":
                    this.indeterminate = !1, this.element.indeterminate = !1, this.changeState(newProp.checked ? "check" : "uncheck");
                    break;

                  case "indeterminate":
                    newProp.indeterminate ? this.changeState() : (this.element.indeterminate = !1, this.changeState(this.checked ? "check" : "uncheck"));
                    break;

                  case "disabled":
                    newProp.disabled ? (this.setDisabled(), this.unWireEvents()) : (this.element.disabled = !1, 
                    wrapper.classList.remove("e-checkbox-disabled"), wrapper.setAttribute("aria-disabled", "false"), 
                    this.wireEvents());
                    break;

                  case "cssClass":
                    oldProp.cssClass && wrapper.classList.remove(oldProp.cssClass), wrapper.classList.add(newProp.cssClass);
                    break;

                  case "enableRtl":
                    newProp.enableRtl ? wrapper.classList.add("e-rtl") : wrapper.classList.remove("e-rtl");
                    break;

                  case "label":
                    this.setText(newProp.label);
                    break;

                  case "labelPosition":
                    var label = wrapper.getElementsByClassName("e-label")[0], labelWrap = wrapper.getElementsByTagName("label")[0];
                    detach(label), "After" === newProp.labelPosition ? labelWrap.appendChild(label) : labelWrap.insertBefore(label, wrapper.getElementsByClassName("e-frame")[0]);
                    break;

                  case "name":
                    this.element.setAttribute("name", newProp.name);
                    break;

                  case "value":
                    this.element.setAttribute("value", newProp.value);
                }
            }
        }, CheckBox.prototype.preRender = function() {
            var element = this.element;
            this.tagName = this.element.tagName, element = wrapperInitialize("EJS-CHECKBOX", "checkbox", element, WRAPPER, "checkbox"), 
            this.element = element, "checkbox" !== this.element.getAttribute("type") && this.element.setAttribute("type", "checkbox"), 
            this.element.id || (this.element.id = getUniqueID("e-" + this.getModuleName()));
        }, CheckBox.prototype.render = function() {
            this.initWrapper(), this.initialize(), this.disabled || this.wireEvents();
        }, CheckBox.prototype.setDisabled = function() {
            var wrapper = this.getWrapper();
            this.element.disabled = !0, wrapper.classList.add("e-checkbox-disabled"), wrapper.setAttribute("aria-disabled", "true");
        }, CheckBox.prototype.setText = function(text) {
            var label = this.getWrapper().getElementsByClassName("e-label")[0];
            if (label) label.textContent = text; else {
                label = this.createElement("span", {
                    className: "e-label",
                    innerHTML: text
                });
                var labelWrap = this.getWrapper().getElementsByTagName("label")[0];
                "Before" === this.labelPosition ? labelWrap.insertBefore(label, this.getWrapper().getElementsByClassName("e-frame")[0]) : labelWrap.appendChild(label);
            }
        }, CheckBox.prototype.unWireEvents = function() {
            var wrapper = this.getWrapper();
            EventHandler.remove(this.element, "click", this.clickHandler), EventHandler.remove(document, "keydown", this.keyDownHandler), 
            EventHandler.remove(wrapper, "mousedown", this.mouseDownHandler), EventHandler.remove(this.element, "focus", this.focusHandler), 
            EventHandler.remove(this.element, "focusout", this.focusOutHandler);
            var label = wrapper.getElementsByTagName("label")[0];
            EventHandler.remove(label, "mousedown", this.labelMouseHandler), EventHandler.remove(label, "mouseup", this.labelMouseHandler);
        }, CheckBox.prototype.wireEvents = function() {
            var wrapper = this.getWrapper();
            EventHandler.add(this.element, "click", this.clickHandler, this), EventHandler.add(document, "keydown", this.keyDownHandler, this), 
            EventHandler.add(wrapper, "mousedown", this.mouseDownHandler, this), EventHandler.add(this.element, "focus", this.focusHandler, this), 
            EventHandler.add(this.element, "focusout", this.focusOutHandler, this);
            var label = wrapper.getElementsByTagName("label")[0];
            EventHandler.add(label, "mousedown", this.labelMouseHandler, this), EventHandler.add(label, "mouseup", this.labelMouseHandler, this);
        }, __decorate$10([ Event() ], CheckBox.prototype, "change", void 0), __decorate$10([ Property(!1) ], CheckBox.prototype, "checked", void 0), 
        __decorate$10([ Property("") ], CheckBox.prototype, "cssClass", void 0), __decorate$10([ Property(!1) ], CheckBox.prototype, "disabled", void 0), 
        __decorate$10([ Property(!1) ], CheckBox.prototype, "indeterminate", void 0), __decorate$10([ Property("") ], CheckBox.prototype, "label", void 0), 
        __decorate$10([ Property("After") ], CheckBox.prototype, "labelPosition", void 0), 
        __decorate$10([ Property("") ], CheckBox.prototype, "name", void 0), __decorate$10([ Property("") ], CheckBox.prototype, "value", void 0), 
        CheckBox = __decorate$10([ NotifyPropertyChanges ], CheckBox);
    }(Component), function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }()), __decorate$11 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __extends$12 = (function(_super) {
        function RadioButton(options, element) {
            var _this = _super.call(this, options, element) || this;
            return _this.isKeyPressed = !1, _this;
        }
        return __extends$11(RadioButton, _super), RadioButton_1 = RadioButton, RadioButton.prototype.changeHandler = function(event) {
            this.checked = !0, this.dataBind();
            var changeEventArgs = {
                value: this.value,
                event: event
            };
            this.trigger("change", changeEventArgs);
        }, RadioButton.prototype.updateChange = function(state) {
            for (var input, name = this.element.getAttribute("name"), radioGrp = document.querySelectorAll('input.e-radio[name="' + name + '"]'), i = 0; i < radioGrp.length; i++) (input = radioGrp[i]) !== this.element && (getInstance(input, RadioButton_1).checked = !1);
        }, RadioButton.prototype.destroy = function() {
            var _this = this, radioWrap = this.element.parentElement;
            _super.prototype.destroy.call(this), this.disabled || this.unWireEvents(), "INPUT" === this.tagName ? (radioWrap.parentNode.insertBefore(this.element, radioWrap), 
            detach(radioWrap), this.element.checked = !1, [ "name", "value", "disabled" ].forEach(function(key) {
                _this.element.removeAttribute(key);
            })) : ([ "role", "aria-checked", "class" ].forEach(function(key) {
                radioWrap.removeAttribute(key);
            }), this.element.id && radioWrap.setAttribute("id", this.element.id), radioWrap.innerHTML = "");
        }, RadioButton.prototype.focusHandler = function() {
            this.isKeyPressed && this.getLabel().classList.add("e-focus");
        }, RadioButton.prototype.focusOutHandler = function() {
            this.getLabel().classList.remove("e-focus");
        }, RadioButton.prototype.getModuleName = function() {
            return "radio";
        }, RadioButton.prototype.getPersistData = function() {
            return this.addOnPersist([ "checked" ]);
        }, RadioButton.prototype.getLabel = function() {
            return this.element.nextElementSibling;
        }, RadioButton.prototype.initialize = function() {
            this.initWrapper(), this.name && this.element.setAttribute("name", this.name), this.value && this.element.setAttribute("value", this.value), 
            this.checked && (this.element.checked = !0), this.disabled && this.setDisabled();
        }, RadioButton.prototype.initWrapper = function() {
            var rippleSpan, wrapper = this.element.parentElement;
            wrapper.classList.contains("e-radio-wrapper") || (wrapper = this.createElement("div", {
                className: "e-radio-wrapper"
            }), this.element.parentNode.insertBefore(wrapper, this.element));
            var label = this.createElement("label", {
                attrs: {
                    for: this.element.id
                }
            });
            wrapper.appendChild(this.element), wrapper.appendChild(label), isRippleEnabled && (rippleSpan = this.createElement("span", {
                className: "e-ripple-container"
            }), label.appendChild(rippleSpan), rippleEffect(rippleSpan, {
                duration: 400,
                isCenterRipple: !0
            })), this.enableRtl && label.classList.add("e-rtl"), this.cssClass && addClass([ label ], this.cssClass.split(" ")), 
            this.label && this.setText(this.label);
        }, RadioButton.prototype.keyDownHandler = function() {
            this.isKeyPressed = !0;
        }, RadioButton.prototype.labelRippleHandler = function(e) {
            rippleMouseHandler(e, this.getLabel().getElementsByClassName("e-ripple-container")[0]);
        }, RadioButton.prototype.mouseDownHandler = function() {
            this.isKeyPressed = !1;
        }, RadioButton.prototype.onPropertyChanged = function(newProp, oldProp) {
            for (var label = this.getLabel(), _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                switch (_a[_i]) {
                  case "checked":
                    newProp.checked && this.updateChange(newProp.checked), this.element.checked = newProp.checked;
                    break;

                  case "disabled":
                    newProp.disabled ? (this.setDisabled(), this.unWireEvents()) : (this.element.disabled = !1, 
                    this.wireEvents());
                    break;

                  case "cssClass":
                    oldProp.cssClass && removeClass([ label ], oldProp.cssClass.split(" ")), addClass([ label ], newProp.cssClass.split(" "));
                    break;

                  case "enableRtl":
                    newProp.enableRtl ? label.classList.add("e-rtl") : label.classList.remove("e-rtl");
                    break;

                  case "label":
                    this.setText(newProp.label);
                    break;

                  case "labelPosition":
                    "Before" === newProp.labelPosition ? label.classList.add("e-right") : label.classList.remove("e-right");
                    break;

                  case "name":
                    this.element.setAttribute("name", newProp.name);
                    break;

                  case "value":
                    this.element.setAttribute("value", newProp.value);
                }
            }
        }, RadioButton.prototype.preRender = function() {
            var element = this.element;
            this.tagName = this.element.tagName, element = wrapperInitialize("EJS-RADIOBUTTON", "radio", element, "e-radio-wrapper", "radio"), 
            this.element = element, "radio" !== this.element.getAttribute("type") && this.element.setAttribute("type", "radio"), 
            this.element.id || (this.element.id = getUniqueID("e-" + this.getModuleName()));
        }, RadioButton.prototype.render = function() {
            this.initialize(), this.disabled || this.wireEvents();
        }, RadioButton.prototype.setDisabled = function() {
            this.element.disabled = !0;
        }, RadioButton.prototype.setText = function(text) {
            var label = this.getLabel(), textLabel = label.getElementsByClassName("e-label")[0];
            textLabel ? textLabel.textContent = text : (textLabel = this.createElement("span", {
                className: "e-label",
                innerHTML: text
            }), label.appendChild(textLabel)), "Before" === this.labelPosition ? this.getLabel().classList.add("e-right") : this.getLabel().classList.remove("e-right");
        }, RadioButton.prototype.unWireEvents = function() {
            var label = this.getLabel();
            EventHandler.remove(this.element, "change", this.changeHandler), EventHandler.remove(document, "keydown", this.keyDownHandler), 
            EventHandler.remove(label, "mousedown", this.mouseDownHandler), EventHandler.remove(this.element, "focus", this.focusHandler), 
            EventHandler.remove(this.element, "focusout", this.focusOutHandler);
            var rippleLabel = label.getElementsByClassName("e-label")[0];
            rippleLabel && (EventHandler.remove(rippleLabel, "mousedown", this.labelRippleHandler), 
            EventHandler.remove(rippleLabel, "mouseup", this.labelRippleHandler));
        }, RadioButton.prototype.wireEvents = function() {
            var label = this.getLabel();
            EventHandler.add(this.element, "change", this.changeHandler, this), EventHandler.add(document, "keydown", this.keyDownHandler, this), 
            EventHandler.add(label, "mousedown", this.mouseDownHandler, this), EventHandler.add(this.element, "focus", this.focusHandler, this), 
            EventHandler.add(this.element, "focusout", this.focusOutHandler, this);
            var rippleLabel = label.getElementsByClassName("e-label")[0];
            rippleLabel && (EventHandler.add(rippleLabel, "mousedown", this.labelRippleHandler, this), 
            EventHandler.add(rippleLabel, "mouseup", this.labelRippleHandler, this));
        }, __decorate$11([ Event() ], RadioButton.prototype, "change", void 0), __decorate$11([ Property(!1) ], RadioButton.prototype, "checked", void 0), 
        __decorate$11([ Property("") ], RadioButton.prototype, "cssClass", void 0), __decorate$11([ Property(!1) ], RadioButton.prototype, "disabled", void 0), 
        __decorate$11([ Property("") ], RadioButton.prototype, "label", void 0), __decorate$11([ Property("After") ], RadioButton.prototype, "labelPosition", void 0), 
        __decorate$11([ Property("") ], RadioButton.prototype, "name", void 0), __decorate$11([ Property("") ], RadioButton.prototype, "value", void 0), 
        RadioButton = RadioButton_1 = __decorate$11([ NotifyPropertyChanges ], RadioButton);
        var RadioButton_1;
    }(Component), function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }()), __decorate$12 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, RIPPLE$2 = "e-ripple-container", __extends$8 = (function(_super) {
        function Switch(options, element) {
            var _this = _super.call(this, options, element) || this;
            return _this.isKeyPressed = !1, _this.isDrag = !1, _this;
        }
        __extends$12(Switch, _super), Switch.prototype.changeState = function(state) {
            var ariaState, rippleSpan, wrapper = this.getWrapper(), bar = wrapper.querySelector(".e-switch-inner"), handle = wrapper.querySelector(".e-switch-handle");
            isRippleEnabled && (rippleSpan = wrapper.getElementsByClassName(RIPPLE$2)[0]), state ? (addClass([ bar, handle ], "e-switch-active"), 
            ariaState = "true", this.element.checked = !0, this.checked = !0, rippleSpan && addClass([ rippleSpan ], [ "e-ripple-check" ])) : (removeClass([ bar, handle ], "e-switch-active"), 
            ariaState = "false", this.element.checked = !1, this.checked = !1, rippleSpan && removeClass([ rippleSpan ], [ "e-ripple-check" ])), 
            wrapper.setAttribute("aria-checked", ariaState);
        }, Switch.prototype.clickHandler = function(evt) {
            this.isDrag = !1, this.focusOutHandler(), this.changeState(!this.checked), this.element.focus();
            var changeEventArgs = {
                checked: this.element.checked,
                event: evt
            };
            this.trigger("change", changeEventArgs);
        }, Switch.prototype.destroy = function() {
            _super.prototype.destroy.call(this), this.disabled || this.unWireEvents(), function(ejInst, wrapper, tagName) {
                "INPUT" === tagName ? (wrapper.parentNode.insertBefore(ejInst.element, wrapper), 
                detach(wrapper), ejInst.element.checked = !1, [ "name", "value", "disabled" ].forEach(function(key) {
                    ejInst.element.removeAttribute(key);
                })) : (ejInst.element.id && wrapper.setAttribute("id", ejInst.element.id), [ "role", "aria-checked", "class" ].forEach(function(key) {
                    wrapper.removeAttribute(key);
                }), wrapper.innerHTML = "");
            }(this, this.getWrapper(), this.tagName);
        }, Switch.prototype.focusHandler = function() {
            this.isKeyPressed && this.getWrapper().classList.add("e-focus");
        }, Switch.prototype.focusOutHandler = function() {
            this.getWrapper().classList.remove("e-focus");
        }, Switch.prototype.getModuleName = function() {
            return "switch";
        }, Switch.prototype.getPersistData = function() {
            return this.addOnPersist([ "checked" ]);
        }, Switch.prototype.getWrapper = function() {
            return this.element.parentElement;
        }, Switch.prototype.initialize = function() {
            this.name && this.element.setAttribute("name", this.name), this.value && this.element.setAttribute("value", this.value), 
            this.checked && this.changeState(!0), this.disabled && this.setDisabled(), (this.onLabel || this.offLabel) && this.setLabel(this.onLabel, this.offLabel);
        }, Switch.prototype.initWrapper = function() {
            var wrapper = this.element.parentElement;
            wrapper.classList.contains("e-switch-wrapper") || (wrapper = this.createElement("div", {
                className: "e-switch-wrapper",
                attrs: {
                    role: "switch",
                    "aria-checked": "false"
                }
            }), this.element.parentNode.insertBefore(wrapper, this.element));
            var switchInner = this.createElement("span", {
                className: "e-switch-inner"
            }), onLabel = this.createElement("span", {
                className: "e-switch-on"
            }), offLabel = this.createElement("span", {
                className: "e-switch-off"
            }), handle = this.createElement("span", {
                className: "e-switch-handle"
            });
            if (wrapper.appendChild(this.element), switchInner.appendChild(onLabel), switchInner.appendChild(offLabel), 
            wrapper.appendChild(switchInner), wrapper.appendChild(handle), isRippleEnabled) {
                var rippleSpan = this.createElement("span", {
                    className: RIPPLE$2
                });
                handle.appendChild(rippleSpan), rippleEffect(rippleSpan, {
                    duration: 400,
                    isCenterRipple: !0
                });
            }
            this.enableRtl && wrapper.classList.add("e-rtl"), this.cssClass && addClass([ wrapper ], this.cssClass.split(" "));
        }, Switch.prototype.onPropertyChanged = function(newProp, oldProp) {
            for (var wrapper = this.getWrapper(), _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                switch (_a[_i]) {
                  case "checked":
                    this.changeState(newProp.checked);
                    break;

                  case "disabled":
                    newProp.disabled ? (this.setDisabled(), this.unWireEvents()) : (this.element.disabled = !1, 
                    wrapper.classList.remove("e-switch-disabled"), wrapper.setAttribute("aria-disabled", "false"), 
                    this.wireEvents());
                    break;

                  case "value":
                    this.element.setAttribute("value", newProp.value);
                    break;

                  case "name":
                    this.element.setAttribute("name", newProp.name);
                    break;

                  case "onLabel":
                  case "offLabel":
                    this.setLabel(newProp.onLabel, newProp.offLabel);
                    break;

                  case "enableRtl":
                    newProp.enableRtl ? wrapper.classList.add("e-rtl") : wrapper.classList.remove("e-rtl");
                    break;

                  case "cssClass":
                    oldProp.cssClass && wrapper.classList.remove(oldProp.cssClass), wrapper.classList.add(newProp.cssClass);
                }
            }
        }, Switch.prototype.preRender = function() {
            var element = this.element;
            this.tagName = this.element.tagName, function(proxy, control, wrapper, element, moduleName) {
                element = wrapperInitialize(control, "checkbox", element, wrapper, moduleName), 
                proxy.element = element, "checkbox" !== proxy.element.getAttribute("type") && proxy.element.setAttribute("type", "checkbox"), 
                proxy.element.id || (proxy.element.id = getUniqueID("e-" + moduleName));
            }(this, "EJS-SWITCH", "e-switch-wrapper", element, this.getModuleName());
        }, Switch.prototype.render = function() {
            this.initWrapper(), this.initialize(), this.disabled || this.wireEvents();
        }, Switch.prototype.rippleHandler = function(e) {
            rippleMouseHandler(e, this.getWrapper().getElementsByClassName(RIPPLE$2)[0]), "mousedown" === e.type && e.currentTarget.classList.contains("e-switch-wrapper") && 1 === e.which && (this.isDrag = !0, 
            this.isKeyPressed = !1);
        }, Switch.prototype.rippleTouchHandler = function(eventType) {
            var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE$2)[0];
            if (rippleSpan) {
                var event_1 = document.createEvent("MouseEvents");
                event_1.initEvent(eventType, !1, !0), rippleSpan.dispatchEvent(event_1);
            }
        }, Switch.prototype.setDisabled = function() {
            var wrapper = this.getWrapper();
            this.element.disabled = !0, wrapper.classList.add("e-switch-disabled"), wrapper.setAttribute("aria-disabled", "true");
        }, Switch.prototype.setLabel = function(onText, offText) {
            var wrapper = this.getWrapper();
            onText && (wrapper.querySelector(".e-switch-on").textContent = onText), offText && (wrapper.querySelector(".e-switch-off").textContent = offText);
        }, Switch.prototype.switchFocusHandler = function() {
            this.isKeyPressed = !0;
        }, Switch.prototype.switchMouseUp = function(e) {
            var target = e.target;
            this.getWrapper().getElementsByClassName(RIPPLE$2)[0];
            "touchmove" === e.type && e.preventDefault(), "touchstart" === e.type && (this.isDrag = !0, 
            this.rippleTouchHandler("mousedown")), this.isDrag && ("mouseup" === e.type && target.className.indexOf("e-switch") < 0 || "touchend" === e.type) && (this.clickHandler(e), 
            this.rippleTouchHandler("mouseup"), e.preventDefault());
        }, Switch.prototype.toggle = function() {
            this.clickHandler();
        }, Switch.prototype.wireEvents = function() {
            var wrapper = this.getWrapper();
            wrapper.querySelector(".e-switch-handle");
            EventHandler.add(wrapper, "click", this.clickHandler, this), EventHandler.add(this.element, "focus", this.focusHandler, this), 
            EventHandler.add(this.element, "focusout", this.focusOutHandler, this), EventHandler.add(document, "mouseup", this.switchMouseUp, this), 
            EventHandler.add(document, "keydown", this.switchFocusHandler, this), EventHandler.add(wrapper, "mousedown mouseup", this.rippleHandler, this), 
            EventHandler.add(wrapper, "touchstart touchmove touchend", this.switchMouseUp, this);
        }, Switch.prototype.unWireEvents = function() {
            var wrapper = this.getWrapper();
            wrapper.querySelector(".e-switch-handle");
            EventHandler.remove(wrapper, "click", this.clickHandler), EventHandler.remove(this.element, "focus", this.focusHandler), 
            EventHandler.remove(this.element, "focusout", this.focusOutHandler), EventHandler.remove(document, "mouseup", this.switchMouseUp), 
            EventHandler.remove(document, "keydown", this.switchFocusHandler), EventHandler.remove(wrapper, "mousedown mouseup", this.rippleHandler), 
            EventHandler.remove(wrapper, "touchstart touchmove touchend", this.switchMouseUp);
        }, __decorate$12([ Event() ], Switch.prototype, "change", void 0), __decorate$12([ Property(!1) ], Switch.prototype, "checked", void 0), 
        __decorate$12([ Property("") ], Switch.prototype, "cssClass", void 0), __decorate$12([ Property(!1) ], Switch.prototype, "disabled", void 0), 
        __decorate$12([ Property("") ], Switch.prototype, "name", void 0), __decorate$12([ Property("") ], Switch.prototype, "onLabel", void 0), 
        __decorate$12([ Property("") ], Switch.prototype, "offLabel", void 0), __decorate$12([ Property("") ], Switch.prototype, "value", void 0), 
        Switch = __decorate$12([ NotifyPropertyChanges ], Switch);
    }(Component), function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }()), __decorate$8 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, ButtonProps = function(_super) {
        function ButtonProps() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends$8(ButtonProps, _super), __decorate$8([ Property() ], ButtonProps.prototype, "buttonModel", void 0), 
        __decorate$8([ Property() ], ButtonProps.prototype, "click", void 0), ButtonProps;
    }(ChildProperty), AnimationSettings = function(_super) {
        function AnimationSettings() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends$8(AnimationSettings, _super), __decorate$8([ Property("Fade") ], AnimationSettings.prototype, "effect", void 0), 
        __decorate$8([ Property(400) ], AnimationSettings.prototype, "duration", void 0), 
        __decorate$8([ Property(0) ], AnimationSettings.prototype, "delay", void 0), AnimationSettings;
    }(ChildProperty), ROOT = "e-dialog", __extends$13 = (function(_super) {
        function Dialog(options, element) {
            return _super.call(this, options, element) || this;
        }
        __extends$8(Dialog, _super), Dialog.prototype.render = function() {
            this.initialize(), this.initRender(), this.wireEvents();
        }, Dialog.prototype.preRender = function() {
            var _this = this;
            this.headerContent = null;
            for (var classArray = [], j = 0; j < this.element.classList.length; j++) isNullOrUndefined(this.element.classList[j].match("e-control")) && isNullOrUndefined(this.element.classList[j].match(ROOT)) || classArray.push(this.element.classList[j]);
            removeClass([ this.element ], classArray), this.clonedEle = this.element.cloneNode(!0), 
            this.closeIconClickEventHandler = function(event) {
                _this.hide(event);
            }, this.dlgOverlayClickEventHandler = function(event) {
                _this.trigger("overlayClick", event);
            };
            if (this.l10n = new L10n("dialog", {
                close: "Close"
            }, this.locale), isNullOrUndefined(this.target)) {
                var prevOnChange = this.isProtectedOnChange;
                this.isProtectedOnChange = !0, this.target = document.body, this.isProtectedOnChange = prevOnChange;
            }
        }, Dialog.prototype.keyDown = function(event) {
            var _this = this;
            if (9 === event.keyCode && this.isModal) {
                var buttonObj = void 0;
                isNullOrUndefined(this.btnObj) || (buttonObj = this.btnObj[this.btnObj.length - 1]), 
                isNullOrUndefined(buttonObj) || document.activeElement !== buttonObj.element || event.shiftKey || (event.preventDefault(), 
                this.focusableElements(this.element).focus()), document.activeElement === this.focusableElements(this.element) && event.shiftKey && (event.preventDefault(), 
                isNullOrUndefined(buttonObj) || buttonObj.element.focus());
            }
            var element = document.activeElement, isTagName = [ "input", "textarea" ].indexOf(element.tagName.toLowerCase()) > -1, isContentEdit = !1;
            if (isTagName || (isContentEdit = element.hasAttribute("contenteditable") && "true" === element.getAttribute("contenteditable")), 
            27 === event.keyCode && this.closeOnEscape && this.hide(event), 13 === event.keyCode && !event.ctrlKey && "textarea" !== element.tagName.toLowerCase() && isTagName && !isNullOrUndefined(this.primaryButtonEle) || 13 === event.keyCode && event.ctrlKey && ("textarea" === element.tagName.toLowerCase() || isContentEdit) && !isNullOrUndefined(this.primaryButtonEle)) {
                var buttonIndex_1;
                this.buttons.some(function(data, index) {
                    buttonIndex_1 = index;
                    var buttonModel = data.buttonModel;
                    return !isNullOrUndefined(buttonModel) && !0 === buttonModel.isPrimary;
                }) && "function" == typeof this.buttons[buttonIndex_1].click && setTimeout(function() {
                    _this.buttons[buttonIndex_1].click.call(_this, event);
                });
            }
        }, Dialog.prototype.initialize = function() {
            isNullOrUndefined(this.target) || (this.targetEle = "string" == typeof this.target ? document.querySelector(this.target) : this.target), 
            addClass([ this.element ], ROOT), Browser.isDevice && addClass([ this.element ], "e-device"), 
            this.setCSSClass(), this.setMaxHeight();
        }, Dialog.prototype.initRender = function() {
            var _this = this;
            this.initialRender = !0, attributes(this.element, {
                role: "dialog"
            }), 1e3 === this.zIndex ? (this.setzIndex(this.element, !1), this.calculatezIndex = !0) : this.calculatezIndex = !1, 
            this.setTargetContent(), "" === this.header || isNullOrUndefined(this.header) || this.setHeader(), 
            this.showCloseIcon && this.renderCloseIcon(), this.setContent(), "" === this.footerTemplate || isNullOrUndefined(this.footerTemplate) ? isNullOrUndefined(this.buttons[0].buttonModel) || this.setButton() : this.setFooterTemplate(), 
            this.allowDragging && !isNullOrUndefined(this.headerContent) && this.setAllowDragging(), 
            attributes(this.element, {
                "aria-modal": this.isModal ? "true" : "false"
            }), this.isModal && this.setIsModal(), isNullOrUndefined(this.targetEle) || (this.isModal ? this.targetEle.appendChild(this.dlgContainer) : this.targetEle.appendChild(this.element)), 
            this.popupObj = new Popup(this.element, {
                height: this.height,
                width: this.width,
                zIndex: this.zIndex,
                relateTo: this.target,
                actionOnScroll: "none",
                open: function(event) {
                    _this.focusContent();
                    var eventArgs = {
                        container: _this.isModal ? _this.dlgContainer : _this.element,
                        element: _this.element,
                        target: _this.target
                    };
                    _this.trigger("open", eventArgs);
                },
                close: function(event) {
                    _this.unBindEvent(_this.element), _this.isModal && (_this.dlgContainer.style.display = "none"), 
                    _this.trigger("close", _this.closeArgs), isNullOrUndefined(_this.storeActiveElement) || _this.storeActiveElement.focus();
                }
            }), this.positionChange(), this.setEnableRTL(), addClass([ this.element ], "e-popup-close"), 
            this.isModal && this.setOverlayZindex(), this.visible ? this.show() : this.isModal && (this.dlgOverlay.style.display = "none"), 
            this.initialRender = !1;
        }, Dialog.prototype.setOverlayZindex = function(zIndexValue) {
            var zIndex;
            zIndex = isNullOrUndefined(zIndexValue) ? parseInt(this.element.style.zIndex, 10) ? parseInt(this.element.style.zIndex, 10) : this.zIndex : zIndexValue, 
            this.dlgOverlay.style.zIndex = (zIndex - 1).toString(), this.dlgContainer.style.zIndex = zIndex.toString();
        }, Dialog.prototype.positionChange = function() {
            this.isModal ? "number" == typeof this.position.X && "number" == typeof this.position.Y ? this.setPopupPosition() : (this.element.style.top = "0px", 
            this.element.style.left = "0px", this.dlgContainer.classList.add("e-dlg-" + this.position.X + "-" + this.position.Y)) : this.setPopupPosition();
        }, Dialog.prototype.setPopupPosition = function() {
            this.popupObj.setProperties({
                position: {
                    X: this.position.X,
                    Y: this.position.Y
                }
            });
        }, Dialog.prototype.setAllowDragging = function() {
            var _this = this;
            this.dragObj = new Draggable(this.element, {
                clone: !1,
                abort: ".e-dlg-closeicon-btn",
                handle: ".e-dlg-header-content",
                dragStart: function(event) {
                    _this.trigger("dragStart", event);
                },
                dragStop: function(event) {
                    _this.isModal && (isNullOrUndefined(_this.position) || _this.dlgContainer.classList.remove("e-dlg-" + _this.position.X + "-" + _this.position.Y), 
                    _this.element.style.position = "relative"), _this.trigger("dragStop", event);
                },
                drag: function(event) {
                    _this.trigger("drag", event);
                }
            }), isNullOrUndefined(this.targetEle) || (this.dragObj.dragArea = this.targetEle);
        }, Dialog.prototype.setButton = function() {
            this.buttonContent = [], this.btnObj = [];
            for (var i = 0; i < this.buttons.length; i++) {
                var btn = this.createElement("button", {
                    attrs: {
                        type: "button"
                    }
                });
                this.buttonContent.push(btn.outerHTML);
            }
            this.setFooterTemplate();
            for (i = 0; i < this.buttons.length; i++) this.btnObj[i] = new Button(this.buttons[i].buttonModel), 
            "function" == typeof this.buttons[i].click && EventHandler.add(this.ftrTemplateContent.children[i], "click", this.buttons[i].click, this), 
            this.btnObj[i].appendTo(this.ftrTemplateContent.children[i]), this.btnObj[i].element.classList.add("e-flat"), 
            this.primaryButtonEle = this.element.getElementsByClassName("e-primary")[0];
        }, Dialog.prototype.setContent = function() {
            attributes(this.element, {
                "aria-describedby": this.element.id + "_dialog-content"
            }), this.contentEle = this.createElement("div", {
                className: "e-dlg-content",
                id: this.element.id + "_dialog-content"
            }), this.innerContentElement ? this.contentEle.appendChild(this.innerContentElement) : (isNullOrUndefined(this.content) || "" === this.content) && this.initialRender || ("string" == typeof this.content ? this.contentEle.innerHTML = this.content : this.content instanceof HTMLElement ? this.contentEle.appendChild(this.content) : this.setTemplate(this.content, this.contentEle)), 
            isNullOrUndefined(this.headerContent) ? this.element.insertBefore(this.contentEle, this.element.children[0]) : this.element.insertBefore(this.contentEle, this.element.children[1]), 
            "auto" === this.height && this.setMaxHeight();
        }, Dialog.prototype.setTemplate = function(template, toElement) {
            for (var fromElements = [], _i = 0, _a = compile$$1(template)({}); _i < _a.length; _i++) {
                var item = _a[_i];
                fromElements.push(item);
            }
            append([].slice.call(fromElements), toElement);
        }, Dialog.prototype.setMaxHeight = function() {
            var display = this.element.style.display;
            this.element.style.display = "none", this.element.style.maxHeight = isNullOrUndefined(this.target) ? window.innerHeight - 20 + "px" : this.targetEle.offsetHeight - 20 + "px", 
            this.element.style.display = display;
        }, Dialog.prototype.setEnableRTL = function() {
            this.enableRtl ? addClass([ this.element ], "e-rtl") : removeClass([ this.element ], "e-rtl");
        }, Dialog.prototype.setTargetContent = function() {
            if (isNullOrUndefined(this.content) || "" === this.content) {
                var isContent = "" !== this.element.innerHTML.replace(/\s/g, "");
                if (this.element.children.length > 0 || isContent) for (this.innerContentElement = document.createDocumentFragment(); 0 !== this.element.childNodes.length; ) this.innerContentElement.appendChild(this.element.childNodes[0]);
            }
        }, Dialog.prototype.setHeader = function() {
            this.headerEle ? this.headerEle.innerHTML = "" : this.headerEle = this.createElement("div", {
                id: this.element.id + "_title",
                className: "e-dlg-header"
            }), this.createHeaderContent(), this.headerContent.appendChild(this.headerEle), 
            this.setTemplate(this.header, this.headerEle), attributes(this.element, {
                "aria-labelledby": this.element.id + "_title"
            }), this.element.insertBefore(this.headerContent, this.element.children[0]);
        }, Dialog.prototype.setFooterTemplate = function() {
            this.ftrTemplateContent ? this.ftrTemplateContent.innerHTML = "" : this.ftrTemplateContent = this.createElement("div", {
                className: "e-footer-content"
            }), "" === this.footerTemplate || isNullOrUndefined(this.footerTemplate) ? this.ftrTemplateContent.innerHTML = this.buttonContent.join("") : this.setTemplate(this.footerTemplate, this.ftrTemplateContent), 
            this.element.appendChild(this.ftrTemplateContent);
        }, Dialog.prototype.createHeaderContent = function() {
            isNullOrUndefined(this.headerContent) && (this.headerContent = this.createElement("div", {
                className: "e-dlg-header-content"
            }));
        }, Dialog.prototype.renderCloseIcon = function() {
            this.closeIcon = this.createElement("button", {
                className: "e-dlg-closeicon-btn",
                attrs: {
                    type: "button"
                }
            }), this.closeIconBtnObj = new Button({
                cssClass: "e-flat",
                iconCss: "e-icon-dlg-close e-icons"
            }), this.closeIconTitle(), isNullOrUndefined(this.headerContent) ? (this.createHeaderContent(), 
            prepend([ this.closeIcon ], this.headerContent), this.element.insertBefore(this.headerContent, this.element.children[0])) : prepend([ this.closeIcon ], this.headerContent), 
            this.closeIconBtnObj.appendTo(this.closeIcon);
        }, Dialog.prototype.closeIconTitle = function() {
            this.l10n.setLocale(this.locale);
            var closeIconTitle = this.l10n.getConstant("close");
            this.closeIcon.setAttribute("title", closeIconTitle);
        }, Dialog.prototype.setCSSClass = function(oldCSSClass) {
            this.cssClass && addClass([ this.element ], this.cssClass.split(" ")), oldCSSClass && removeClass([ this.element ], oldCSSClass.split(" "));
        }, Dialog.prototype.setIsModal = function() {
            this.dlgContainer = this.createElement("div", {
                className: "e-dlg-container"
            }), this.element.classList.remove("e-popup-open"), this.element.parentNode.insertBefore(this.dlgContainer, this.element), 
            this.dlgContainer.appendChild(this.element), addClass([ this.element ], "e-dlg-modal"), 
            this.dlgOverlay = this.createElement("div", {
                className: "e-dlg-overlay"
            }), this.dlgOverlay.style.zIndex = (this.zIndex - 1).toString(), this.dlgContainer.appendChild(this.dlgOverlay);
        }, Dialog.prototype.getValidFocusNode = function(items) {
            for (var node, u = 0; u < items.length; u++) if (((node = items[u]).clientHeight > 0 || "a" === node.tagName.toLowerCase() && node.hasAttribute("href")) && node.tabIndex > -1 && !node.disabled && !this.disableElement(node, '[disabled],[aria-disabled="true"],[type="hidden"]')) return node;
            return node;
        }, Dialog.prototype.focusableElements = function(content) {
            if (!isNullOrUndefined(content)) {
                var items = content.querySelectorAll('input,select,textarea,button,a,[contenteditable="true"],[tabindex]');
                return this.getValidFocusNode(items);
            }
            return null;
        }, Dialog.prototype.getAutoFocusNode = function(container) {
            var node = container.querySelector(".e-dlg-closeicon-btn"), items = container.querySelectorAll("[autofocus]"), validNode = this.getValidFocusNode(items);
            if (isNullOrUndefined(validNode)) {
                if (validNode = this.focusableElements(this.contentEle), !isNullOrUndefined(validNode)) return node = validNode;
                if (!isNullOrUndefined(this.primaryButtonEle)) return this.element.querySelector(".e-primary");
            } else node = validNode;
            return node;
        }, Dialog.prototype.disableElement = function(element, t) {
            var elementMatch = element ? element.matches || element.webkitMatchesSelector || element.msMatchesSelector : null;
            if (elementMatch) for (;element; element = element.parentNode) if (element instanceof Element && elementMatch.call(element, t)) return element;
            return null;
        }, Dialog.prototype.focusContent = function() {
            var element = this.getAutoFocusNode(this.element);
            (isNullOrUndefined(element) ? this.element : element).focus(), this.bindEvent(this.element);
        }, Dialog.prototype.bindEvent = function(element) {
            EventHandler.add(element, "keydown", this.keyDown, this);
        }, Dialog.prototype.unBindEvent = function(element) {
            EventHandler.remove(element, "keydown", this.keyDown);
        }, Dialog.prototype.getModuleName = function() {
            return "dialog";
        }, Dialog.prototype.onPropertyChanged = function(newProp, oldProp) {
            if (this.element.classList.contains(ROOT)) for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                switch (_a[_i]) {
                  case "content":
                    isNullOrUndefined(this.content) || "" === this.content ? isNullOrUndefined(this.contentEle) || (detach(this.contentEle), 
                    this.contentEle = null) : isNullOrUndefined(this.contentEle) || "dialog" === this.contentEle.getAttribute("role") ? this.setContent() : (this.contentEle.innerHTML = "", 
                    "string" == typeof this.content ? this.contentEle.innerHTML = this.content : this.contentEle.appendChild(this.content), 
                    this.setMaxHeight());
                    break;

                  case "header":
                    "" === this.header || isNullOrUndefined(this.header) ? this.headerEle && (detach(this.headerEle), 
                    this.headerEle = null) : this.setHeader();
                    break;

                  case "footerTemplate":
                    if ("" === this.footerTemplate || isNullOrUndefined(this.footerTemplate)) {
                        if (!this.ftrTemplateContent) return;
                        detach(this.ftrTemplateContent), this.ftrTemplateContent = null, this.buttons = [ {} ];
                    } else this.setFooterTemplate(), this.buttons = [ {} ];
                    break;

                  case "showCloseIcon":
                    this.element.getElementsByClassName("e-icon-dlg-close").length > 0 ? this.showCloseIcon || "" !== this.header && !isNullOrUndefined(this.header) ? this.showCloseIcon || detach(this.closeIcon) : (detach(this.headerContent), 
                    this.headerContent = null) : (this.renderCloseIcon(), this.wireEvents());
                    break;

                  case "locale":
                    this.showCloseIcon && this.closeIconTitle();
                    break;

                  case "visible":
                    this.visible ? this.show() : this.hide();
                    break;

                  case "isModal":
                    this.updateIsModal();
                    break;

                  case "height":
                    setStyleAttribute(this.element, {
                        height: formatUnit(newProp.height)
                    });
                    break;

                  case "width":
                    setStyleAttribute(this.element, {
                        width: formatUnit(newProp.width)
                    });
                    break;

                  case "zIndex":
                    this.popupObj.zIndex = this.zIndex, this.isModal && this.setOverlayZindex(this.zIndex);
                    break;

                  case "cssClass":
                    this.setCSSClass(oldProp.cssClass);
                    break;

                  case "buttons":
                    isNullOrUndefined(this.buttons[0].buttonModel) || (isNullOrUndefined(this.ftrTemplateContent) || (detach(this.ftrTemplateContent), 
                    this.ftrTemplateContent = null), this.footerTemplate = "", this.setButton());
                    break;

                  case "allowDragging":
                    this.allowDragging && !isNullOrUndefined(this.headerContent) ? this.setAllowDragging() : this.dragObj.destroy();
                    break;

                  case "target":
                    this.popupObj.relateTo = newProp.target;
                    break;

                  case "position":
                    if (this.isModal) {
                        var positionX = isNullOrUndefined(oldProp.position.X) ? this.position.X : oldProp.position.X, positionY = isNullOrUndefined(oldProp.position.Y) ? this.position.Y : oldProp.position.Y;
                        this.dlgContainer.classList.contains("e-dlg-" + positionX + "-" + positionY) && this.dlgContainer.classList.remove("e-dlg-" + positionX + "-" + positionY);
                    }
                    this.positionChange();
                    break;

                  case "enableRtl":
                    this.setEnableRTL();
                }
            }
        }, Dialog.prototype.updateIsModal = function() {
            if (this.element.setAttribute("aria-modal", this.isModal ? "true" : "false"), this.isModal) this.setIsModal(), 
            this.element.style.top = "0px", this.element.style.left = "0px", isNullOrUndefined(this.targetEle) || this.targetEle.appendChild(this.dlgContainer); else {
                for (removeClass([ this.element ], "e-dlg-modal"), removeClass([ document.body ], "e-scroll-disabled"), 
                detach(this.dlgOverlay); this.dlgContainer.firstChild; ) this.dlgContainer.parentElement.insertBefore(this.dlgContainer.firstChild, this.dlgContainer);
                this.dlgContainer.parentElement.removeChild(this.dlgContainer);
            }
            this.visible && this.show(), this.positionChange();
        }, Dialog.prototype.setzIndex = function(zIndexElement, setPopupZindex) {
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = !0, this.zIndex = getZindexPartial(zIndexElement), this.isProtectedOnChange = prevOnChange, 
            setPopupZindex && (this.popupObj.zIndex = this.zIndex);
        }, Dialog.prototype.getPersistData = function() {
            return this.addOnPersist([]);
        }, Dialog.prototype.destroy = function() {
            if (this.element.classList.contains(ROOT)) {
                this.unWireEvents(), _super.prototype.destroy.call(this);
                var classArray = [ ROOT, "e-rtl", "e-dlg-modal" ];
                if (removeClass([ this.element, this.element ], classArray), this.popupObj.element.classList.contains("e-popup") && this.popupObj.destroy(), 
                !isNullOrUndefined(this.btnObj)) for (var i = void 0; i < this.btnObj.length; i++) this.btnObj[i].destroy();
                for (this.isModal && (detach(this.dlgOverlay), this.dlgContainer.parentNode.insertBefore(this.element, this.dlgContainer), 
                detach(this.dlgContainer)), this.element.innerHTML = ""; this.element.attributes.length > 0; ) this.element.removeAttribute(this.element.attributes[0].name);
                for (var k = 0; k < this.clonedEle.attributes.length; k++) this.element.setAttribute(this.clonedEle.attributes[k].name, this.clonedEle.attributes[k].value);
            }
        }, Dialog.prototype.wireEvents = function() {
            this.showCloseIcon && EventHandler.add(this.closeIcon, "click", this.closeIconClickEventHandler, this), 
            this.isModal && EventHandler.add(this.dlgOverlay, "click", this.dlgOverlayClickEventHandler, this);
        }, Dialog.prototype.unWireEvents = function() {
            if (this.showCloseIcon && EventHandler.remove(this.closeIcon, "click", this.closeIconClickEventHandler), 
            this.isModal && EventHandler.remove(this.dlgOverlay, "click", this.dlgOverlayClickEventHandler), 
            !isNullOrUndefined(this.buttons[0].buttonModel)) for (var i = 0; i < this.buttons.length; i++) "function" == typeof this.buttons[i].click && EventHandler.remove(this.ftrTemplateContent.children[i], "click", this.buttons[i].click);
        }, Dialog.prototype.refreshPosition = function() {
            this.popupObj.refreshPosition();
        }, Dialog.prototype.show = function(isFullScreen) {
            if (this.element.classList.contains(ROOT) && (!this.element.classList.contains("e-popup-open") || !isNullOrUndefined(isFullScreen))) {
                isNullOrUndefined(isFullScreen) || this.fullScreen(isFullScreen);
                var eventArgs = {
                    cancel: !1,
                    element: this.element,
                    container: this.isModal ? this.dlgContainer : this.element,
                    target: this.target
                };
                if (this.trigger("beforeOpen", eventArgs), eventArgs.cancel) return;
                this.storeActiveElement = document.activeElement, this.element.tabIndex = -1, this.isModal && !isNullOrUndefined(this.dlgOverlay) && (this.dlgOverlay.style.display = "block", 
                this.dlgContainer.style.display = "flex", isNullOrUndefined(this.targetEle) ? addClass([ document.body ], "e-scroll-disabled") : (this.targetEle === document.body ? this.dlgContainer.style.position = "fixed" : this.dlgContainer.style.position = "absolute", 
                this.dlgOverlay.style.position = "absolute", this.element.style.position = "relative", 
                addClass([ this.targetEle ], "e-scroll-disabled")));
                var openAnimation = {
                    name: this.animationSettings.effect + "In",
                    duration: this.animationSettings.duration,
                    delay: this.animationSettings.delay
                }, zIndexElement = this.isModal ? this.element.parentElement : this.element;
                this.calculatezIndex && (this.setzIndex(zIndexElement, !0), setStyleAttribute(this.element, {
                    zIndex: this.zIndex
                }), this.isModal && this.setOverlayZindex(this.zIndex)), "None" === this.animationSettings.effect ? this.popupObj.show() : this.popupObj.show(openAnimation), 
                this.dialogOpen = !0;
                var prevOnChange = this.isProtectedOnChange;
                this.isProtectedOnChange = !0, this.visible = !0, this.isProtectedOnChange = prevOnChange;
            }
        }, Dialog.prototype.hide = function(event) {
            if (this.element.classList.contains(ROOT)) {
                var eventArgs = {
                    cancel: !1,
                    isInteraction: !!event,
                    element: this.element,
                    target: this.target,
                    container: this.isModal ? this.dlgContainer : this.element,
                    event: event
                };
                if (this.trigger("beforeClose", eventArgs), this.closeArgs = eventArgs, !eventArgs.cancel) {
                    this.isModal && (this.dlgOverlay.style.display = "none", isNullOrUndefined(this.targetEle) ? removeClass([ document.body ], "e-scroll-disabled") : removeClass([ this.targetEle ], "e-scroll-disabled"));
                    var closeAnimation = {
                        name: this.animationSettings.effect + "Out",
                        duration: this.animationSettings.duration,
                        delay: this.animationSettings.delay
                    };
                    "None" === this.animationSettings.effect ? this.popupObj.hide() : this.popupObj.hide(closeAnimation), 
                    this.dialogOpen = !1;
                    var prevOnChange = this.isProtectedOnChange;
                    this.isProtectedOnChange = !0, this.visible = !1, this.isProtectedOnChange = prevOnChange;
                }
            }
        }, Dialog.prototype.fullScreen = function(args) {
            this.element.offsetTop, this.element.offsetLeft;
            if (args) {
                addClass([ this.element ], "e-dlg-fullscreen");
                var display = this.element.style.display;
                this.element.style.display = "none", this.element.style.maxHeight = isNullOrUndefined(this.target) ? window.innerHeight + "px" : this.targetEle.offsetHeight + "px", 
                this.element.style.display = display, addClass([ document.body ], "e-scroll-disabled"), 
                this.allowDragging && !isNullOrUndefined(this.dragObj) && this.dragObj.destroy();
            } else removeClass([ this.element ], "e-dlg-fullscreen"), removeClass([ document.body ], "e-scroll-disabled"), 
            this.allowDragging && !isNullOrUndefined(this.headerContent) && this.setAllowDragging();
            return args;
        }, __decorate$8([ Property("") ], Dialog.prototype, "content", void 0), __decorate$8([ Property(!1) ], Dialog.prototype, "showCloseIcon", void 0), 
        __decorate$8([ Property(!1) ], Dialog.prototype, "isModal", void 0), __decorate$8([ Property("") ], Dialog.prototype, "header", void 0), 
        __decorate$8([ Property(!0) ], Dialog.prototype, "visible", void 0), __decorate$8([ Property("auto") ], Dialog.prototype, "height", void 0), 
        __decorate$8([ Property("100%") ], Dialog.prototype, "width", void 0), __decorate$8([ Property("") ], Dialog.prototype, "cssClass", void 0), 
        __decorate$8([ Property(1e3) ], Dialog.prototype, "zIndex", void 0), __decorate$8([ Property(null) ], Dialog.prototype, "target", void 0), 
        __decorate$8([ Property("") ], Dialog.prototype, "footerTemplate", void 0), __decorate$8([ Property(!1) ], Dialog.prototype, "allowDragging", void 0), 
        __decorate$8([ Collection([ {} ], ButtonProps) ], Dialog.prototype, "buttons", void 0), 
        __decorate$8([ Property(!0) ], Dialog.prototype, "closeOnEscape", void 0), __decorate$8([ Complex({}, AnimationSettings) ], Dialog.prototype, "animationSettings", void 0), 
        __decorate$8([ Complex({
            X: "center",
            Y: "center"
        }, PositionData) ], Dialog.prototype, "position", void 0), __decorate$8([ Event() ], Dialog.prototype, "created", void 0), 
        __decorate$8([ Event() ], Dialog.prototype, "open", void 0), __decorate$8([ Event() ], Dialog.prototype, "beforeOpen", void 0), 
        __decorate$8([ Event() ], Dialog.prototype, "close", void 0), __decorate$8([ Event() ], Dialog.prototype, "beforeClose", void 0), 
        __decorate$8([ Event() ], Dialog.prototype, "dragStart", void 0), __decorate$8([ Event() ], Dialog.prototype, "dragStop", void 0), 
        __decorate$8([ Event() ], Dialog.prototype, "drag", void 0), __decorate$8([ Event() ], Dialog.prototype, "overlayClick", void 0), 
        Dialog = __decorate$8([ NotifyPropertyChanges ], Dialog);
    }(Component), function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }()), __decorate$13 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, Animation$1 = function(_super) {
        function Animation$$1() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends$13(Animation$$1, _super), __decorate$13([ Property({
            effect: "FadeIn",
            duration: 150,
            delay: 0
        }) ], Animation$$1.prototype, "open", void 0), __decorate$13([ Property({
            effect: "FadeOut",
            duration: 150,
            delay: 0
        }) ], Animation$$1.prototype, "close", void 0), Animation$$1;
    }(ChildProperty), Tooltip = function(_super) {
        function Tooltip(options, element) {
            return _super.call(this, options, element) || this;
        }
        return __extends$13(Tooltip, _super), Tooltip.prototype.initialize = function() {
            this.formatPosition(), addClass([ this.element ], "e-tooltip");
        }, Tooltip.prototype.formatPosition = function() {
            0 === this.position.indexOf("Top") || 0 === this.position.indexOf("Bottom") ? (_a = this.position.split(/(?=[A-Z])/), 
            this.tooltipPositionY = _a[0], this.tooltipPositionX = _a[1]) : (_b = this.position.split(/(?=[A-Z])/), 
            this.tooltipPositionX = _b[0], this.tooltipPositionY = _b[1]);
            var _a, _b;
        }, Tooltip.prototype.renderArrow = function() {
            this.setTipClass(this.position);
            var tip = createElement("div", {
                className: "e-arrow-tip " + this.tipClass
            });
            tip.appendChild(createElement("div", {
                className: "e-arrow-tip-outer " + this.tipClass
            })), tip.appendChild(createElement("div", {
                className: "e-arrow-tip-inner " + this.tipClass
            })), this.tooltipEle.appendChild(tip);
        }, Tooltip.prototype.setTipClass = function(position) {
            0 === position.indexOf("Right") ? this.tipClass = "e-tip-left" : 0 === position.indexOf("Bottom") ? this.tipClass = "e-tip-top" : 0 === position.indexOf("Left") ? this.tipClass = "e-tip-right" : this.tipClass = "e-tip-bottom";
        }, Tooltip.prototype.renderPopup = function(target) {
            var elePos = this.mouseTrail ? {
                top: 0,
                left: 0
            } : this.getTooltipPosition(target);
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
        }, Tooltip.prototype.getTooltipPosition = function(target) {
            this.tooltipEle.style.display = "none";
            var pos = calculatePosition(target, this.tooltipPositionX, this.tooltipPositionY);
            this.tooltipEle.style.display = "";
            var offsetPos = this.calculateTooltipOffset(this.position);
            return this.collisionFlipFit(target, pos.left + offsetPos.left, pos.top + offsetPos.top);
        }, Tooltip.prototype.reposition = function(target) {
            var elePos = this.getTooltipPosition(target);
            this.popupObj.position = {
                X: elePos.left,
                Y: elePos.top
            }, this.popupObj.dataBind();
        }, Tooltip.prototype.openPopupHandler = function() {
            this.trigger("afterOpen", this.tooltipEventArgs);
        }, Tooltip.prototype.closePopupHandler = function() {
            this.clear(), this.trigger("afterClose", this.tooltipEventArgs);
        }, Tooltip.prototype.calculateTooltipOffset = function(position) {
            var pos = {
                top: 0,
                left: 0
            }, tooltipEleWidth = this.tooltipEle.offsetWidth, tooltipEleHeight = this.tooltipEle.offsetHeight, arrowEle = this.tooltipEle.querySelector(".e-arrow-tip"), tipWidth = arrowEle ? arrowEle.offsetWidth : 0, tipHeight = arrowEle ? arrowEle.offsetHeight : 0, tipAdjust = this.showTipPointer ? 0 : 8, tipHeightAdjust = tipHeight / 2 + 2 + (this.tooltipEle.offsetHeight - this.tooltipEle.clientHeight), tipWidthAdjust = tipWidth / 2 + 2 + (this.tooltipEle.offsetWidth - this.tooltipEle.clientWidth);
            switch (this.mouseTrail && (tipAdjust += 2), position) {
              case "RightTop":
                pos.left += tipWidth + tipAdjust, pos.top -= tooltipEleHeight - tipHeightAdjust;
                break;

              case "RightCenter":
                pos.left += tipWidth + tipAdjust, pos.top -= tooltipEleHeight / 2;
                break;

              case "RightBottom":
                pos.left += tipWidth + tipAdjust, pos.top -= tipHeightAdjust;
                break;

              case "BottomRight":
                pos.top += tipHeight + tipAdjust, pos.left -= tipWidthAdjust;
                break;

              case "BottomCenter":
                pos.top += tipHeight + tipAdjust, pos.left -= tooltipEleWidth / 2;
                break;

              case "BottomLeft":
                pos.top += tipHeight + tipAdjust, pos.left -= tooltipEleWidth - tipWidthAdjust;
                break;

              case "LeftBottom":
                pos.left -= tipWidth + tooltipEleWidth + tipAdjust, pos.top -= tipHeightAdjust;
                break;

              case "LeftCenter":
                pos.left -= tipWidth + tooltipEleWidth + tipAdjust, pos.top -= tooltipEleHeight / 2;
                break;

              case "LeftTop":
                pos.left -= tipWidth + tooltipEleWidth + tipAdjust, pos.top -= tooltipEleHeight - tipHeightAdjust;
                break;

              case "TopLeft":
                pos.top -= tooltipEleHeight + tipHeight + tipAdjust, pos.left -= tooltipEleWidth - tipWidthAdjust;
                break;

              case "TopRight":
                pos.top -= tooltipEleHeight + tipHeight + tipAdjust, pos.left -= tipWidthAdjust;
                break;

              default:
                pos.top -= tooltipEleHeight + tipHeight + tipAdjust, pos.left -= tooltipEleWidth / 2;
            }
            return pos.left += this.offsetX, pos.top += this.offsetY, pos;
        }, Tooltip.prototype.updateTipPosition = function(position) {
            var selEle = this.tooltipEle.querySelectorAll(".e-arrow-tip,.e-arrow-tip-outer,.e-arrow-tip-inner");
            removeClass(selEle, [ "e-tip-bottom", "e-tip-top", "e-tip-left", "e-tip-right" ]), 
            this.setTipClass(position), addClass(selEle, this.tipClass);
        }, Tooltip.prototype.adjustArrow = function(target, position, tooltipPositionX, tooltipPositionY) {
            if (!1 !== this.showTipPointer) {
                this.updateTipPosition(position);
                var leftValue, topValue, tooltipWidth = this.tooltipEle.clientWidth, tooltipHeight = this.tooltipEle.clientHeight, arrowEle = this.tooltipEle.querySelector(".e-arrow-tip"), arrowInnerELe = this.tooltipEle.querySelector(".e-arrow-tip-inner"), tipWidth = arrowEle.offsetWidth, tipHeight = arrowEle.offsetHeight;
                if ("e-tip-bottom" === this.tipClass || "e-tip-top" === this.tipClass) {
                    "e-tip-bottom" === this.tipClass ? (topValue = "99.9%", arrowInnerELe.style.top = "-" + (tipHeight - 2) + "px") : (topValue = -(tipHeight - 1) + "px", 
                    arrowInnerELe.style.top = "-" + (tipHeight - 6) + "px");
                    leftValue = (tipPosExclude = "Center" !== tooltipPositionX || tooltipWidth > target.offsetWidth || this.mouseTrail) && "Left" === tooltipPositionX || !tipPosExclude && "End" === this.tipPointerPosition ? tooltipWidth - tipWidth - 2 + "px" : tipPosExclude && "Right" === tooltipPositionX || !tipPosExclude && "Start" === this.tipPointerPosition ? "2px" : tooltipWidth / 2 - tipWidth / 2 + "px";
                } else {
                    "e-tip-right" === this.tipClass ? (leftValue = "99.9%", arrowInnerELe.style.left = "-" + (tipWidth - 2) + "px") : (leftValue = -(tipWidth - 1) + "px", 
                    arrowInnerELe.style.left = tipWidth - 2 - tipWidth + "px");
                    var tipPosExclude;
                    topValue = (tipPosExclude = "Center" !== tooltipPositionY || tooltipHeight > target.offsetHeight || this.mouseTrail) && "Top" === tooltipPositionY || !tipPosExclude && "End" === this.tipPointerPosition ? tooltipHeight - tipHeight - 2 + "px" : tipPosExclude && "Bottom" === tooltipPositionY || !tipPosExclude && "Start" === this.tipPointerPosition ? "2px" : tooltipHeight / 2 - tipHeight / 2 + "px";
                }
                arrowEle.style.top = topValue, arrowEle.style.left = leftValue;
            }
        }, Tooltip.prototype.renderContent = function(target) {
            var tooltipContent = this.tooltipEle.querySelector(".e-tip-content");
            if (target && !isNullOrUndefined(target.getAttribute("title")) && (target.setAttribute("data-content", target.getAttribute("title")), 
            target.removeAttribute("title")), isNullOrUndefined(this.content)) target && !isNullOrUndefined(target.getAttribute("data-content")) && (tooltipContent.innerHTML = target.getAttribute("data-content")); else if (tooltipContent.innerHTML = "", 
            this.content instanceof HTMLElement) tooltipContent.appendChild(this.content); else if ("string" == typeof this.content) tooltipContent.innerHTML = this.content; else {
                append(compile$$1(this.content)(), tooltipContent);
            }
        }, Tooltip.prototype.renderCloseIcon = function() {
            if (this.isSticky) {
                var tipClose = createElement("div", {
                    className: "e-icons e-tooltip-close"
                });
                this.tooltipEle.appendChild(tipClose), EventHandler.add(tipClose, Browser.touchStartEvent, this.onStickyClose, this);
            }
        }, Tooltip.prototype.addDescribedBy = function(target, id) {
            var describedby = (target.getAttribute("aria-describedby") || "").split(/\s+/);
            describedby.indexOf(id) < 0 && describedby.push(id), attributes(target, {
                "aria-describedby": describedby.join(" ").trim(),
                "data-tooltip-id": id
            });
        }, Tooltip.prototype.removeDescribedBy = function(target) {
            var id = target.getAttribute("data-tooltip-id"), describedby = (target.getAttribute("aria-describedby") || "").split(/\s+/), index = describedby.indexOf(id);
            -1 !== index && describedby.splice(index, 1), target.removeAttribute("data-tooltip-id");
            var orgdescribedby = describedby.join(" ").trim();
            orgdescribedby ? target.setAttribute("aria-describedby", orgdescribedby) : target.removeAttribute("aria-describedby");
        }, Tooltip.prototype.tapHoldHandler = function(evt) {
            clearTimeout(this.autoCloseTimer), this.targetHover(evt.originalEvent);
        }, Tooltip.prototype.touchEndHandler = function(e) {
            var _this = this;
            if (!this.isSticky) {
                this.autoCloseTimer = setTimeout(function() {
                    _this.close();
                }, 1500);
            }
        }, Tooltip.prototype.targetClick = function(e) {
            var target;
            isNullOrUndefined(target = this.target ? closest(e.target, this.target) : this.element) || (null === target.getAttribute("data-tooltip-id") ? this.targetHover(e) : this.isSticky || this.hideTooltip(this.animation.close, e, target));
        }, Tooltip.prototype.targetHover = function(e) {
            var target;
            if (target = this.target ? closest(e.target, this.target) : this.element, !isNullOrUndefined(target) && null === target.getAttribute("data-tooltip-id")) {
                for (var _i = 0, targetList_1 = [].slice.call(document.querySelectorAll("[data-tooltip-id= " + this.ctrlId + "_content]")); _i < targetList_1.length; _i++) {
                    var target_1 = targetList_1[_i];
                    this.restoreElement(target_1);
                }
                this.showTooltip(target, this.animation.open, e), this.wireMouseEvents(e, target);
            }
        }, Tooltip.prototype.showTooltip = function(target, showAnimation, e) {
            var _this = this;
            if (clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.tooltipEventArgs = e ? {
                type: e.type,
                cancel: !1,
                target: target,
                event: e,
                element: this.tooltipEle
            } : {
                type: null,
                cancel: !1,
                target: target,
                event: null,
                element: this.tooltipEle
            }, this.trigger("beforeRender", this.tooltipEventArgs), this.tooltipEventArgs.cancel) return this.isHidden = !0, 
            void this.clear();
            if (this.isHidden = !1, isNullOrUndefined(this.tooltipEle) ? (this.ctrlId = this.element.getAttribute("id") ? getUniqueID(this.element.getAttribute("id")) : getUniqueID("tooltip"), 
            this.tooltipEle = createElement("div", {
                className: "e-tooltip-wrap e-popup",
                attrs: {
                    role: "tooltip",
                    "aria-hidden": "false",
                    id: this.ctrlId + "_content"
                },
                styles: "width:" + formatUnit(this.width) + ";height:" + formatUnit(this.height) + ";position:absolute;"
            }), this.cssClass && addClass([ this.tooltipEle ], this.cssClass.split(" ")), Browser.isDevice && addClass([ this.tooltipEle ], "e-bigger"), 
            "auto" !== this.width && (this.tooltipEle.style.maxWidth = formatUnit(this.width)), 
            this.tooltipEle.appendChild(createElement("div", {
                className: "e-tip-content"
            })), document.body.appendChild(this.tooltipEle), this.addDescribedBy(target, this.ctrlId + "_content"), 
            this.renderContent(target), addClass([ this.tooltipEle ], "e-popup-open"), this.showTipPointer && this.renderArrow(), 
            this.renderCloseIcon(), this.renderPopup(target)) : (this.adjustArrow(target, this.position, this.tooltipPositionX, this.tooltipPositionY), 
            this.addDescribedBy(target, this.ctrlId + "_content"), this.renderContent(target), 
            Animation.stop(this.tooltipEle), this.reposition(target)), removeClass([ this.tooltipEle ], "e-popup-open"), 
            addClass([ this.tooltipEle ], "e-popup-close"), this.tooltipEventArgs = e ? {
                type: e.type,
                cancel: !1,
                target: target,
                event: e,
                element: this.tooltipEle
            } : {
                type: null,
                cancel: !1,
                target: target,
                event: null,
                element: this.tooltipEle
            }, this.trigger("beforeOpen", this.tooltipEventArgs), this.tooltipEventArgs.cancel) return this.isHidden = !0, 
            void this.clear();
            var openAnimation = {
                name: showAnimation.effect,
                duration: showAnimation.duration,
                delay: showAnimation.delay,
                timingFunction: "easeOut"
            };
            if ("None" === showAnimation.effect && (openAnimation = void 0), this.openDelay > 0) {
                this.showTimer = setTimeout(function() {
                    _this.popupObj && _this.popupObj.show(openAnimation, target);
                }, this.openDelay);
            } else this.popupObj.show(openAnimation, target);
        }, Tooltip.prototype.checkCollision = function(target, x, y) {
            var elePos = {
                left: x,
                top: y,
                position: this.position,
                horizontal: this.tooltipPositionX,
                vertical: this.tooltipPositionY
            }, affectedPos = isCollide(this.tooltipEle, this.target ? this.element : null, x, y);
            return affectedPos.length > 0 && (elePos.horizontal = affectedPos.indexOf("left") >= 0 ? "Right" : affectedPos.indexOf("right") >= 0 ? "Left" : this.tooltipPositionX, 
            elePos.vertical = affectedPos.indexOf("top") >= 0 ? "Bottom" : affectedPos.indexOf("bottom") >= 0 ? "Top" : this.tooltipPositionY), 
            elePos;
        }, Tooltip.prototype.collisionFlipFit = function(target, x, y) {
            var elePos = this.checkCollision(target, x, y), newpos = elePos.position;
            if (this.tooltipPositionY !== elePos.vertical && (newpos = 0 === this.position.indexOf("Bottom") || 0 === this.position.indexOf("Top") ? elePos.vertical + this.tooltipPositionX : this.tooltipPositionX + elePos.vertical), 
            this.tooltipPositionX !== elePos.horizontal && (0 === newpos.indexOf("Left") && (elePos.vertical = "LeftTop" === newpos || "LeftCenter" === newpos ? "Top" : "Bottom", 
            newpos = elePos.vertical + "Left"), 0 === newpos.indexOf("Right") && (elePos.vertical = "RightTop" === newpos || "RightCenter" === newpos ? "Top" : "Bottom", 
            newpos = elePos.vertical + "Right"), elePos.horizontal = this.tooltipPositionX), 
            this.tooltipEventArgs = {
                type: null,
                cancel: !1,
                target: target,
                event: null,
                element: this.tooltipEle,
                collidedPosition: newpos
            }, this.trigger("beforeCollision", this.tooltipEventArgs), elePos.position !== newpos) {
                var pos = calculatePosition(target, this.tooltipPositionX, elePos.vertical);
                this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
                var offsetPos = this.calculateTooltipOffset(newpos);
                elePos.position = newpos, elePos.left = pos.left + offsetPos.left, elePos.top = pos.top + offsetPos.top;
            } else this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
            var eleOffset = {
                left: elePos.left,
                top: elePos.top
            }, left = fit(this.tooltipEle, this.target ? this.element : null, {
                X: !0,
                Y: !1
            }, eleOffset).left;
            if (this.showTipPointer && (0 === newpos.indexOf("Bottom") || 0 === newpos.indexOf("Top"))) {
                var arrowEle = this.tooltipEle.querySelector(".e-arrow-tip"), arrowleft = parseInt(arrowEle.style.left, 10) - (left - elePos.left);
                arrowleft < 0 ? arrowleft = 0 : arrowleft + arrowEle.offsetWidth > this.tooltipEle.clientWidth && (arrowleft = this.tooltipEle.clientWidth - arrowEle.offsetWidth), 
                arrowEle.style.left = arrowleft.toString() + "px";
            }
            return eleOffset.left = left, eleOffset;
        }, Tooltip.prototype.hideTooltip = function(hideAnimation, e, targetElement) {
            var target, _this = this;
            if (e ? (target = this.target ? targetElement || e.target : this.element, this.tooltipEventArgs = {
                type: e.type,
                cancel: !1,
                target: target,
                event: e,
                element: this.tooltipEle
            }) : (target = document.querySelector("[data-tooltip-id= " + this.ctrlId + "_content]"), 
            this.tooltipEventArgs = {
                type: null,
                cancel: !1,
                target: target,
                event: null,
                element: this.tooltipEle
            }), !isNullOrUndefined(target)) if (this.trigger("beforeClose", this.tooltipEventArgs), 
            this.tooltipEventArgs.cancel) this.isHidden = !1; else {
                this.restoreElement(target), this.isHidden = !0;
                var closeAnimation_1 = {
                    name: hideAnimation.effect,
                    duration: hideAnimation.duration,
                    delay: hideAnimation.delay,
                    timingFunction: "easeIn"
                };
                if ("None" === hideAnimation.effect && (closeAnimation_1 = void 0), this.closeDelay > 0) {
                    this.hideTimer = setTimeout(function() {
                        _this.popupObj && _this.popupObj.hide(closeAnimation_1);
                    }, this.closeDelay);
                } else this.popupObj.hide(closeAnimation_1);
            }
        }, Tooltip.prototype.restoreElement = function(target) {
            this.unwireMouseEvents(target), isNullOrUndefined(target.getAttribute("data-content")) || (target.setAttribute("title", target.getAttribute("data-content")), 
            target.removeAttribute("data-content")), this.removeDescribedBy(target);
        }, Tooltip.prototype.clear = function() {
            this.tooltipEle && (removeClass([ this.tooltipEle ], "e-popup-close"), addClass([ this.tooltipEle ], "e-popup-open")), 
            this.isHidden && (this.popupObj && this.popupObj.destroy(), this.tooltipEle && remove(this.tooltipEle), 
            this.tooltipEle = null, this.popupObj = null);
        }, Tooltip.prototype.onMouseOut = function(e) {
            this.hideTooltip(this.animation.close, e);
        }, Tooltip.prototype.onStickyClose = function(e) {
            this.close();
        }, Tooltip.prototype.onMouseMove = function(event) {
            var eventPageX = 0, eventPageY = 0;
            event.type.indexOf("touch") > -1 ? (event.preventDefault(), eventPageX = event.touches[0].pageX, 
            eventPageY = event.touches[0].pageY) : (eventPageX = event.pageX, eventPageY = event.pageY), 
            Animation.stop(this.tooltipEle), removeClass([ this.tooltipEle ], "e-popup-close"), 
            addClass([ this.tooltipEle ], "e-popup-open"), this.adjustArrow(event.target, this.position, this.tooltipPositionX, this.tooltipPositionY);
            var pos = this.calculateTooltipOffset(this.position), x = eventPageX + pos.left + this.offsetX, y = eventPageY + pos.top + this.offsetY, elePos = this.checkCollision(event.target, x, y);
            if (this.tooltipPositionX !== elePos.horizontal || this.tooltipPositionY !== elePos.vertical) {
                var newpos = 0 === this.position.indexOf("Bottom") || 0 === this.position.indexOf("Top") ? elePos.vertical + elePos.horizontal : elePos.horizontal + elePos.vertical;
                elePos.position = newpos, this.adjustArrow(event.target, elePos.position, elePos.horizontal, elePos.vertical);
                var colpos = this.calculateTooltipOffset(elePos.position);
                elePos.left = eventPageX + colpos.left - this.offsetX, elePos.top = eventPageY + colpos.top - this.offsetY;
            }
            this.tooltipEle.style.left = elePos.left + "px", this.tooltipEle.style.top = elePos.top + "px";
        }, Tooltip.prototype.keyDown = function(event) {
            this.tooltipEle && 27 === event.keyCode && this.close();
        }, Tooltip.prototype.touchEnd = function(e) {
            this.tooltipEle && null === closest(e.target, ".e-tooltip") && this.close();
        }, Tooltip.prototype.scrollHandler = function(e) {
            this.tooltipEle && this.close();
        }, Tooltip.prototype.render = function() {
            this.initialize(), this.wireEvents(this.opensOn);
        }, Tooltip.prototype.preRender = function() {
            this.tipClass = "e-tip-bottom", this.tooltipPositionX = "Center", this.tooltipPositionY = "Top", 
            this.isHidden = !0;
        }, Tooltip.prototype.wireEvents = function(trigger) {
            for (var _i = 0, triggerList_1 = this.getTriggerList(trigger); _i < triggerList_1.length; _i++) {
                var opensOn = triggerList_1[_i];
                if ("Custom" === opensOn) return;
                "Focus" === opensOn && this.wireFocusEvents(), "Click" === opensOn && EventHandler.add(this.element, Browser.touchStartEvent, this.targetClick, this), 
                "Hover" === opensOn && (Browser.isDevice ? (this.touchModule = new Touch(this.element, {
                    tapHoldThreshold: 500,
                    tapHold: this.tapHoldHandler.bind(this)
                }), EventHandler.add(this.element, Browser.touchEndEvent, this.touchEndHandler, this)) : EventHandler.add(this.element, "mouseover", this.targetHover, this));
            }
            EventHandler.add(document, "touchend", this.touchEnd, this), EventHandler.add(document, "scroll", this.scrollHandler, this), 
            EventHandler.add(document, "keydown", this.keyDown, this);
        }, Tooltip.prototype.getTriggerList = function(trigger) {
            return "Auto" === trigger && (trigger = Browser.isDevice ? "Hover" : "Hover Focus"), 
            trigger.split(" ");
        }, Tooltip.prototype.wireFocusEvents = function() {
            if (isNullOrUndefined(this.target)) EventHandler.add(this.element, "focus", this.targetHover, this); else for (var _i = 0, targetList_2 = [].slice.call(this.element.querySelectorAll(this.target)); _i < targetList_2.length; _i++) {
                var target = targetList_2[_i];
                EventHandler.add(target, "focus", this.targetHover, this);
            }
        }, Tooltip.prototype.wireMouseEvents = function(e, target) {
            this.tooltipEle && (this.isSticky || ("focus" === e.type && EventHandler.add(target, "blur", this.onMouseOut, this), 
            "mouseover" === e.type && EventHandler.add(target, "mouseleave", this.onMouseOut, this)), 
            this.mouseTrail && EventHandler.add(target, "mousemove touchstart mouseenter", this.onMouseMove, this));
        }, Tooltip.prototype.unwireEvents = function(trigger) {
            for (var _i = 0, triggerList_2 = this.getTriggerList(trigger); _i < triggerList_2.length; _i++) {
                var opensOn = triggerList_2[_i];
                if ("Custom" === opensOn) return;
                "Focus" === opensOn && this.unwireFocusEvents(), "Click" === opensOn && EventHandler.remove(this.element, Browser.touchStartEvent, this.targetClick), 
                "Hover" === opensOn && (Browser.isDevice ? (this.touchModule && this.touchModule.destroy(), 
                EventHandler.remove(this.element, Browser.touchEndEvent, this.touchEndHandler)) : EventHandler.remove(this.element, "mouseover", this.targetHover));
            }
            EventHandler.remove(document, "touchend", this.touchEnd), EventHandler.remove(document, "scroll", this.scrollHandler), 
            EventHandler.remove(document, "keydown", this.keyDown);
        }, Tooltip.prototype.unwireFocusEvents = function() {
            if (isNullOrUndefined(this.target)) EventHandler.remove(this.element, "focus", this.targetHover); else for (var _i = 0, targetList_3 = [].slice.call(this.element.querySelectorAll(this.target)); _i < targetList_3.length; _i++) {
                var target = targetList_3[_i];
                EventHandler.remove(target, "focus", this.targetHover);
            }
        }, Tooltip.prototype.unwireMouseEvents = function(target) {
            if (!this.isSticky) for (var _i = 0, triggerList_3 = this.getTriggerList(this.opensOn); _i < triggerList_3.length; _i++) {
                var opensOn = triggerList_3[_i];
                "Focus" === opensOn && EventHandler.remove(target, "blur", this.onMouseOut), "Hover" !== opensOn || Browser.isDevice || EventHandler.remove(target, "mouseleave", this.onMouseOut);
            }
            this.mouseTrail && EventHandler.remove(target, "mousemove touchstart mouseenter", this.onMouseMove);
        }, Tooltip.prototype.getModuleName = function() {
            return "tooltip";
        }, Tooltip.prototype.getPersistData = function() {
            return this.addOnPersist([]);
        }, Tooltip.prototype.onPropertyChanged = function(newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                switch (_a[_i]) {
                  case "width":
                    this.tooltipEle && (this.tooltipEle.style.width = formatUnit(newProp.width));
                    break;

                  case "height":
                    this.tooltipEle && (this.tooltipEle.style.height = formatUnit(newProp.height));
                    break;

                  case "content":
                    this.tooltipEle && this.renderContent();
                    break;

                  case "opensOn":
                    this.unwireEvents(oldProp.opensOn), this.wireEvents(newProp.opensOn);
                    break;

                  case "position":
                    this.formatPosition();
                    var target = document.querySelector("[data-tooltip-id= " + this.ctrlId + "_content]");
                    if (this.tooltipEle && target) {
                        var arrowInnerELe = this.tooltipEle.querySelector(".e-arrow-tip-inner");
                        arrowInnerELe.style.top = arrowInnerELe.style.left = null, this.reposition(target);
                    }
                    break;

                  case "tipPointerPosition":
                    var trgt = document.querySelector("[data-tooltip-id= " + this.ctrlId + "_content]");
                    this.tooltipEle && trgt && this.reposition(trgt);
                    break;

                  case "offsetX":
                    if (this.tooltipEle) {
                        var x = newProp.offsetX - oldProp.offsetX;
                        this.tooltipEle.style.left = (parseInt(this.tooltipEle.style.left, 10) + x).toString() + "px";
                    }
                    break;

                  case "offsetY":
                    if (this.tooltipEle) {
                        var y = newProp.offsetY - oldProp.offsetY;
                        this.tooltipEle.style.top = (parseInt(this.tooltipEle.style.top, 10) + y).toString() + "px";
                    }
                    break;

                  case "cssClass":
                    this.tooltipEle && (oldProp.cssClass && removeClass([ this.tooltipEle ], oldProp.cssClass.split(" ")), 
                    newProp.cssClass && addClass([ this.tooltipEle ], newProp.cssClass.split(" ")));
                    break;

                  case "enableRtl":
                    this.tooltipEle && (this.enableRtl ? addClass([ this.tooltipEle ], "e-rtl") : removeClass([ this.tooltipEle ], "e-rtl"));
                }
            }
        }, Tooltip.prototype.open = function(element, animation) {
            void 0 === animation && (animation = this.animation.open), "none" !== element.style.display && this.showTooltip(element, animation);
        }, Tooltip.prototype.close = function(animation) {
            void 0 === animation && (animation = this.animation.close), this.hideTooltip(animation);
        }, Tooltip.prototype.refresh = function(target) {
            this.tooltipEle && this.renderContent(target), this.popupObj && target && this.reposition(target);
        }, Tooltip.prototype.destroy = function() {
            _super.prototype.destroy.call(this), removeClass([ this.element ], "e-tooltip"), 
            this.unwireEvents(this.opensOn), this.popupObj && this.popupObj.destroy(), this.tooltipEle && remove(this.tooltipEle), 
            this.tooltipEle = null, this.popupObj = null;
        }, __decorate$13([ Property("auto") ], Tooltip.prototype, "width", void 0), __decorate$13([ Property("auto") ], Tooltip.prototype, "height", void 0), 
        __decorate$13([ Property() ], Tooltip.prototype, "content", void 0), __decorate$13([ Property() ], Tooltip.prototype, "target", void 0), 
        __decorate$13([ Property("TopCenter") ], Tooltip.prototype, "position", void 0), 
        __decorate$13([ Property(0) ], Tooltip.prototype, "offsetX", void 0), __decorate$13([ Property(0) ], Tooltip.prototype, "offsetY", void 0), 
        __decorate$13([ Property(!0) ], Tooltip.prototype, "showTipPointer", void 0), __decorate$13([ Property("Auto") ], Tooltip.prototype, "tipPointerPosition", void 0), 
        __decorate$13([ Property("Auto") ], Tooltip.prototype, "opensOn", void 0), __decorate$13([ Property(!1) ], Tooltip.prototype, "mouseTrail", void 0), 
        __decorate$13([ Property(!1) ], Tooltip.prototype, "isSticky", void 0), __decorate$13([ Complex({}, Animation$1) ], Tooltip.prototype, "animation", void 0), 
        __decorate$13([ Property(0) ], Tooltip.prototype, "openDelay", void 0), __decorate$13([ Property(0) ], Tooltip.prototype, "closeDelay", void 0), 
        __decorate$13([ Property() ], Tooltip.prototype, "cssClass", void 0), __decorate$13([ Property(!1) ], Tooltip.prototype, "enableRtl", void 0), 
        __decorate$13([ Event() ], Tooltip.prototype, "beforeRender", void 0), __decorate$13([ Event() ], Tooltip.prototype, "beforeOpen", void 0), 
        __decorate$13([ Event() ], Tooltip.prototype, "afterOpen", void 0), __decorate$13([ Event() ], Tooltip.prototype, "beforeClose", void 0), 
        __decorate$13([ Event() ], Tooltip.prototype, "afterClose", void 0), __decorate$13([ Event() ], Tooltip.prototype, "beforeCollision", void 0), 
        __decorate$13([ Event() ], Tooltip.prototype, "created", void 0), __decorate$13([ Event() ], Tooltip.prototype, "destroyed", void 0), 
        Tooltip = __decorate$13([ NotifyPropertyChanges ], Tooltip);
    }(Component), __extends = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, TicksData = function(_super) {
        function TicksData() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(TicksData, _super), __decorate([ Property("None") ], TicksData.prototype, "placement", void 0), 
        __decorate([ Property(10) ], TicksData.prototype, "largeStep", void 0), __decorate([ Property(1) ], TicksData.prototype, "smallStep", void 0), 
        __decorate([ Property(!1) ], TicksData.prototype, "showSmallTicks", void 0), __decorate([ Property(null) ], TicksData.prototype, "format", void 0), 
        TicksData;
    }(ChildProperty), LimitData = function(_super) {
        function LimitData() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(LimitData, _super), __decorate([ Property(!1) ], LimitData.prototype, "enabled", void 0), 
        __decorate([ Property(null) ], LimitData.prototype, "minStart", void 0), __decorate([ Property(null) ], LimitData.prototype, "minEnd", void 0), 
        __decorate([ Property(null) ], LimitData.prototype, "maxStart", void 0), __decorate([ Property(null) ], LimitData.prototype, "maxEnd", void 0), 
        __decorate([ Property(!1) ], LimitData.prototype, "startHandleFixed", void 0), __decorate([ Property(!1) ], LimitData.prototype, "endHandleFixed", void 0), 
        LimitData;
    }(ChildProperty), TooltipData = function(_super) {
        function TooltipData() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(TooltipData, _super), __decorate([ Property("") ], TooltipData.prototype, "cssClass", void 0), 
        __decorate([ Property("Before") ], TooltipData.prototype, "placement", void 0), 
        __decorate([ Property("Focus") ], TooltipData.prototype, "showOn", void 0), __decorate([ Property(!1) ], TooltipData.prototype, "isVisible", void 0), 
        __decorate([ Property(null) ], TooltipData.prototype, "format", void 0), TooltipData;
    }(ChildProperty), classNames_root = "e-slider", classNames_rtl = "e-rtl", classNames_sliderHiddenInput = "e-slider-input", classNames_controlWrapper = "e-control-wrapper", classNames_sliderHandle = "e-handle", classNames_rangeBar = "e-range", classNames_sliderButton = "e-slider-button", classNames_firstButton = "e-first-button", classNames_secondButton = "e-second-button", classNames_scale = "e-scale", classNames_tick = "e-tick", classNames_large = "e-large", classNames_tickValue = "e-tick-value", classNames_sliderTooltip = "e-slider-tooltip", classNames_sliderHover = "e-slider-hover", classNames_sliderFirstHandle = "e-handle-first", classNames_sliderSecondHandle = "e-handle-second", classNames_sliderDisabled = "e-disabled", classNames_sliderContainer = "e-slider-container", classNames_horizontalTooltipBefore = "e-slider-horizontal-before", classNames_horizontalTooltipAfter = "e-slider-horizontal-after", classNames_verticalTooltipBefore = "e-slider-vertical-before", classNames_verticalTooltipAfter = "e-slider-vertical-after", classNames_materialTooltipOpen = "e-material-tooltip-open", classNames_materialTooltipActive = "e-tooltip-active", classNames_materialSlider = "e-material-slider", classNames_sliderTrack = "e-slider-track", classNames_sliderHandleFocused = "e-handle-focused", classNames_verticalSlider = "e-vertical", classNames_horizontalSlider = "e-horizontal", classNames_sliderHandleStart = "e-handle-start", classNames_sliderTooltipStart = "e-material-tooltip-start", classNames_sliderTabHandle = "e-tab-handle", classNames_sliderButtonIcon = "e-button-icon", classNames_sliderSmallSize = "e-small-size", classNames_sliderTickPosition = "e-tick-pos", classNames_sliderFirstTick = "e-first-tick", classNames_sliderLastTick = "e-last-tick", classNames_sliderButtonClass = "e-slider-btn", classNames_sliderTabTrack = "e-tab-track", classNames_sliderTabRange = "e-tab-range", classNames_sliderActiveHandle = "e-handle-active", classNames_sliderMaterialHandle = "e-material-handle", classNames_sliderMaterialRange = "e-material-range", classNames_sliderMaterialDefault = "e-material-default", classNames_materialTooltipShow = "e-material-tooltip-show", classNames_materialTooltipHide = "e-material-tooltip-hide", classNames_readonly = "e-read-only", classNames_limits = "e-limits", classNames_limitBarDefault = "e-limit-bar", classNames_limitBarFirst = "e-limit-first", classNames_limitBarSecond = "e-limit-second", classNames_dragHorizontal = "e-drag-horizontal", classNames_dragVertical = "e-drag-vertical", Slider = function(_super) {
        function Slider(options, element) {
            var _this = _super.call(this, options, element) || this;
            return _this.horDir = "left", _this.verDir = "bottom", _this.transition = {
                handle: "left .4s cubic-bezier(.25, .8, .25, 1), right .4s cubic-bezier(.25, .8, .25, 1), top .4s cubic-bezier(.25, .8, .25, 1) , bottom .4s cubic-bezier(.25, .8, .25, 1)",
                rangeBar: "all .4s cubic-bezier(.25, .8, .25, 1)"
            }, _this.transitionOnMaterialTooltip = {
                handle: "left 1ms ease-out, right 1ms ease-out, bottom 1ms ease-out",
                rangeBar: "left 1ms ease-out, right 1ms ease-out, bottom 1ms ease-out, width 1ms ease-out, height 1ms ease-out"
            }, _this.scaleTransform = "transform .4s cubic-bezier(.25, .8, .25, 1)", _this.customAriaText = null, 
            _this.drag = !0, _this;
        }
        return __extends(Slider, _super), Slider.prototype.preRender = function() {
            this.l10n = new L10n("slider", {
                incrementTitle: "Increase",
                decrementTitle: "Decrease"
            }, this.locale), this.isElementFocused = !1, this.tickElementCollection = [], this.tooltipFormatInfo = {}, 
            this.ticksFormatInfo = {}, this.initCultureInfo(), this.initCultureFunc();
        }, Slider.prototype.initCultureFunc = function() {
            this.internationalization = new Internationalization(this.locale);
        }, Slider.prototype.initCultureInfo = function() {
            this.tooltipFormatInfo.format = isNullOrUndefined(this.tooltip.format) ? null : this.tooltip.format, 
            this.ticksFormatInfo.format = isNullOrUndefined(this.ticks.format) ? null : this.ticks.format;
        }, Slider.prototype.formatString = function(value, formatInfo) {
            var formatValue = null, formatString = null;
            if (value || 0 === value) {
                formatValue = this.formatNumber(value);
                var numberOfDecimals = this.numberOfDecimals(value);
                formatString = this.internationalization.getNumberFormat(formatInfo)(this.makeRoundNumber(value, numberOfDecimals));
            }
            return {
                elementVal: formatValue,
                formatString: formatString
            };
        }, Slider.prototype.formatNumber = function(value) {
            var numberOfDecimals = this.numberOfDecimals(value);
            return this.internationalization.getNumberFormat({
                maximumFractionDigits: numberOfDecimals,
                minimumFractionDigits: numberOfDecimals,
                useGrouping: !1
            })(value);
        }, Slider.prototype.numberOfDecimals = function(value) {
            var decimalPart = value.toString().split(".")[1];
            return decimalPart && decimalPart.length ? decimalPart.length : 0;
        }, Slider.prototype.makeRoundNumber = function(value, precision) {
            var decimals = precision || 0;
            return Number(value.toFixed(decimals));
        }, Slider.prototype.fractionalToInteger = function(value) {
            value = 0 === this.numberOfDecimals(value) ? Number(value).toFixed(this.noOfDecimals) : value;
            for (var tens = 1, i = 0; i < this.noOfDecimals; i++) tens *= 10;
            return value = Number((value * tens).toFixed(0));
        }, Slider.prototype.render = function() {
            this.initialize(), this.initRender(), this.wireEvents(), this.setZindex();
        }, Slider.prototype.initialize = function() {
            addClass([ this.element ], classNames_root), this.setCSSClass();
        }, Slider.prototype.setCSSClass = function(oldCSSClass) {
            oldCSSClass && removeClass([ this.element ], oldCSSClass.split(" ")), this.cssClass && addClass([ this.element ], this.cssClass.split(" "));
        }, Slider.prototype.setEnabled = function() {
            var tooltipElement = "Range" !== this.type ? [ this.firstTooltipElement ] : [ this.firstTooltipElement, this.secondTooltipElement ];
            this.enabled ? (removeClass([ this.sliderContainer ], [ classNames_sliderDisabled ]), 
            this.tooltip.isVisible && "Always" === this.tooltip.showOn && tooltipElement.forEach(function(tooltipElement) {
                tooltipElement.classList.remove(classNames_sliderDisabled);
            }), this.wireEvents()) : (addClass([ this.sliderContainer ], [ classNames_sliderDisabled ]), 
            this.tooltip.isVisible && "Always" === this.tooltip.showOn && tooltipElement.forEach(function(tooltipElement) {
                tooltipElement.classList.add(classNames_sliderDisabled);
            }), this.unwireEvents());
        }, Slider.prototype.getTheme = function(container) {
            return window.getComputedStyle(container, ":after").getPropertyValue("content").replace(/['"]+/g, "");
        }, Slider.prototype.initRender = function() {
            this.sliderContainer = createElement("div", {
                className: classNames_sliderContainer + " " + classNames_controlWrapper
            }), this.element.parentNode.insertBefore(this.sliderContainer, this.element), this.sliderContainer.appendChild(this.element), 
            this.sliderTrack = createElement("div", {
                className: classNames_sliderTrack
            }), this.element.appendChild(this.sliderTrack), this.element.tabIndex = -1, this.isMaterial = "material" === this.getTheme(this.sliderContainer), 
            this.isBootstrap = "bootstrap" === this.getTheme(this.sliderContainer), this.setHandler(), 
            this.createRangeBar(), this.limits.enabled && this.createLimitBar(), this.setOrientClass(), 
            this.hiddenInput = createElement("input", {
                attrs: {
                    type: "hidden",
                    value: isNullOrUndefined(this.value) ? this.min.toString() : this.value.toString(),
                    name: this.element.getAttribute("name") || this.element.getAttribute("id") || "_" + (1e3 * Math.random()).toFixed(0) + "slider",
                    class: classNames_sliderHiddenInput
                }
            }), this.hiddenInput.tabIndex = -1, this.sliderContainer.appendChild(this.hiddenInput), 
            this.showButtons && this.setButtons(), this.setEnableRTL(), "Range" === this.type ? this.rangeValueUpdate() : this.value = isNullOrUndefined(this.value) ? parseFloat(formatUnit(this.min.toString())) : this.value, 
            this.previousVal = "Range" !== this.type ? this.checkHandleValue(parseFloat(formatUnit(this.value.toString()))) : [ this.checkHandleValue(parseFloat(formatUnit(this.value[0].toString()))), this.checkHandleValue(parseFloat(formatUnit(this.value[1].toString()))) ], 
            this.previousChanged = this.previousVal, isNullOrUndefined(this.element.hasAttribute("name")) || this.element.removeAttribute("name"), 
            this.setValue(), this.limits.enabled && this.setLimitBar(), "None" !== this.ticks.placement && this.renderScale(), 
            this.tooltip.isVisible && this.renderTooltip(), this.enabled ? removeClass([ this.sliderContainer ], [ classNames_sliderDisabled ]) : addClass([ this.sliderContainer ], [ classNames_sliderDisabled ]), 
            this.readonly ? addClass([ this.sliderContainer ], [ classNames_readonly ]) : removeClass([ this.sliderContainer ], [ classNames_readonly ]);
        }, Slider.prototype.createRangeBar = function() {
            "Default" !== this.type && (this.rangeBar = createElement("div", {
                attrs: {
                    class: classNames_rangeBar
                }
            }), this.element.appendChild(this.rangeBar), this.drag && "Range" === this.type && ("Horizontal" === this.orientation ? this.rangeBar.classList.add(classNames_dragHorizontal) : this.rangeBar.classList.add(classNames_dragVertical)));
        }, Slider.prototype.createLimitBar = function() {
            var firstElementClassName = "Range" !== this.type ? classNames_limitBarDefault : classNames_limitBarFirst;
            firstElementClassName += " " + classNames_limits, this.limitBarFirst = createElement("div", {
                attrs: {
                    class: firstElementClassName
                }
            }), this.element.appendChild(this.limitBarFirst), "Range" === this.type && (this.limitBarSecond = createElement("div", {
                attrs: {
                    class: classNames_limitBarSecond + " " + classNames_limits
                }
            }), this.element.appendChild(this.limitBarSecond));
        }, Slider.prototype.setOrientClass = function() {
            "Vertical" !== this.orientation ? (this.sliderContainer.classList.remove(classNames_verticalSlider), 
            this.sliderContainer.classList.add(classNames_horizontalSlider), this.firstHandle.setAttribute("aria-orientation", "horizontal"), 
            "Range" === this.type && this.secondHandle.setAttribute("aria-orientation", "horizontal")) : (this.sliderContainer.classList.remove(classNames_horizontalSlider), 
            this.sliderContainer.classList.add(classNames_verticalSlider), this.firstHandle.setAttribute("aria-orientation", "vertical"), 
            "Range" === this.type && this.secondHandle.setAttribute("aria-orientation", "vertical"));
        }, Slider.prototype.setAriaAttributes = function(element) {
            var _this = this, min = this.min, max = this.max;
            if (!isNullOrUndefined(this.customValues) && this.customValues.length > 0 && (min = this.customValues[0], 
            max = this.customValues[this.customValues.length - 1]), "Range" !== this.type) attributes(element, {
                "aria-valuemin": min.toString(),
                "aria-valuemax": max.toString()
            }); else {
                (!isNullOrUndefined(this.customValues) && this.customValues.length > 0 ? [ [ min.toString(), this.customValues[this.value[1]].toString() ], [ this.customValues[this.value[0]].toString(), max.toString() ] ] : [ [ min.toString(), this.value[1].toString() ], [ this.value[0].toString(), max.toString() ] ]).forEach(function(range, index) {
                    var element = 0 === index ? _this.firstHandle : _this.secondHandle;
                    element && attributes(element, {
                        "aria-valuemin": range[0],
                        "aria-valuemax": range[1]
                    });
                });
            }
        }, Slider.prototype.createSecondHandle = function() {
            this.secondHandle = createElement("div", {
                attrs: {
                    class: classNames_sliderHandle,
                    role: "slider",
                    "aria-labelledby": this.element.id + "_title",
                    tabIndex: "0"
                }
            }), this.secondHandle.classList.add(classNames_sliderSecondHandle), this.element.appendChild(this.secondHandle), 
            this.isMaterial && this.tooltip.isVisible && (this.secondMaterialHandle = createElement("div", {
                attrs: {
                    class: classNames_sliderHandle + " " + classNames_sliderMaterialHandle
                }
            }), this.element.appendChild(this.secondMaterialHandle));
        }, Slider.prototype.createFirstHandle = function() {
            this.firstHandle = createElement("div", {
                attrs: {
                    class: classNames_sliderHandle,
                    role: "slider",
                    "aria-labelledby": this.element.id + "_title",
                    tabIndex: "0"
                }
            }), this.firstHandle.classList.add(classNames_sliderFirstHandle), this.element.appendChild(this.firstHandle), 
            this.isMaterial && this.tooltip.isVisible && (this.firstMaterialHandle = createElement("div", {
                attrs: {
                    class: classNames_sliderHandle + " " + classNames_sliderMaterialHandle
                }
            }), this.element.appendChild(this.firstMaterialHandle));
        }, Slider.prototype.wireFirstHandleEvt = function(destroy) {
            destroy ? (EventHandler.remove(this.firstHandle, "mousedown touchstart", this.handleFocus), 
            EventHandler.remove(this.firstHandle, "transitionend", this.transitionEnd), EventHandler.remove(this.firstHandle, "mouseenter touchenter", this.handleOver), 
            EventHandler.remove(this.firstHandle, "mouseleave touchend", this.handleLeave)) : (EventHandler.add(this.firstHandle, "mousedown touchstart", this.handleFocus, this), 
            EventHandler.add(this.firstHandle, "transitionend", this.transitionEnd, this), EventHandler.add(this.firstHandle, "mouseenter touchenter", this.handleOver, this), 
            EventHandler.add(this.firstHandle, "mouseleave touchend", this.handleLeave, this));
        }, Slider.prototype.wireSecondHandleEvt = function(destroy) {
            destroy ? (EventHandler.remove(this.secondHandle, "mousedown touchstart", this.handleFocus), 
            EventHandler.remove(this.secondHandle, "transitionend", this.transitionEnd), EventHandler.remove(this.secondHandle, "mouseenter touchenter", this.handleOver), 
            EventHandler.remove(this.secondHandle, "mouseleave touchend", this.handleLeave)) : (EventHandler.add(this.secondHandle, "mousedown touchstart", this.handleFocus, this), 
            EventHandler.add(this.secondHandle, "transitionend", this.transitionEnd, this), 
            EventHandler.add(this.secondHandle, "mouseenter touchenter", this.handleOver, this), 
            EventHandler.add(this.secondHandle, "mouseleave touchend", this.handleLeave, this));
        }, Slider.prototype.handleStart = function() {
            var pos = 1 === this.activeHandle ? this.handlePos1 : this.handlePos2, tooltipElement = 1 === this.activeHandle ? this.firstTooltipElement : this.secondTooltipElement;
            0 === pos && "Range" !== this.type && (this.getHandle().classList.add(classNames_sliderHandleStart), 
            this.isMaterial && this.tooltip.isVisible && (this.firstMaterialHandle.classList.add(classNames_sliderHandleStart), 
            tooltipElement && tooltipElement.classList.add(classNames_sliderTooltipStart)));
        }, Slider.prototype.transitionEnd = function(e) {
            if (this.handleStart(), this.getHandle().style.transition = "none", "Default" !== this.type && (this.rangeBar.style.transition = "none"), 
            this.tooltip.isVisible) {
                var tooltipObj = 1 === this.activeHandle ? this.firstTooltipObj : this.secondTooltipObj, tooltipElement = 1 === this.activeHandle ? this.firstTooltipElement : this.secondTooltipElement;
                this.isMaterial ? tooltipElement.classList.contains(classNames_materialTooltipOpen) || "transform" === e.propertyName ? ("Default" === this.type && (tooltipElement.style.transition = this.transition.handle), 
                this.refreshTooltip()) : this.openMaterialTooltip() : (tooltipObj.animation = {
                    open: {
                        effect: "None"
                    },
                    close: {
                        effect: "FadeOut",
                        duration: 500
                    }
                }, this.tooltipAnimation());
            }
            "Always" !== this.tooltip.showOn && this.closeTooltip();
        }, Slider.prototype.handleFocusOut = function() {
            this.firstHandle.classList.contains(classNames_sliderHandleFocused) && this.firstHandle.classList.remove(classNames_sliderHandleFocused), 
            "Range" === this.type && this.secondHandle.classList.contains(classNames_sliderHandleFocused) && this.secondHandle.classList.remove(classNames_sliderHandleFocused);
        }, Slider.prototype.handleFocus = function(e) {
            e.currentTarget === this.firstHandle ? this.firstHandle.classList.add(classNames_sliderHandleFocused) : this.secondHandle.classList.add(classNames_sliderHandleFocused);
        }, Slider.prototype.handleOver = function(e) {
            if (this.tooltip.isVisible && "Hover" === this.tooltip.showOn) {
                this.tooltipValue();
                (e.currentTarget === this.firstHandle ? this.firstTooltipObj : this.secondTooltipObj).animation = {
                    open: {
                        effect: "None"
                    },
                    close: {
                        effect: "FadeOut",
                        duration: 500
                    }
                }, e.currentTarget === this.firstHandle ? this.firstTooltipObj.open(this.firstHandle) : this.secondTooltipObj.open(this.secondHandle);
            }
        }, Slider.prototype.handleLeave = function(e) {
            if (this.tooltip.isVisible && "Hover" === this.tooltip.showOn && !e.currentTarget.classList.contains(classNames_sliderHandleFocused) && !e.currentTarget.classList.contains(classNames_sliderTabHandle)) {
                this.tooltipValue();
                var tooltipObj = e.currentTarget === this.firstHandle ? this.firstTooltipObj : this.secondTooltipObj;
                e.currentTarget === this.firstHandle ? this.firstTooltipObj.close() : this.secondTooltipObj.close(), 
                tooltipObj.animation = {
                    open: {
                        effect: "None"
                    },
                    close: {
                        effect: "FadeOut",
                        duration: 500
                    }
                };
            }
        }, Slider.prototype.setHandler = function() {
            this.min > this.max && (this.min = this.max), this.createFirstHandle(), "Range" === this.type && this.createSecondHandle();
        }, Slider.prototype.setEnableRTL = function() {
            this.enableRtl && "Vertical" !== this.orientation ? addClass([ this.sliderContainer ], classNames_rtl) : removeClass([ this.sliderContainer ], classNames_rtl);
            var preDir = "Vertical" !== this.orientation ? this.horDir : this.verDir;
            this.enableRtl ? (this.horDir = "right", this.verDir = "bottom") : (this.horDir = "left", 
            this.verDir = "bottom");
            preDir !== ("Vertical" !== this.orientation ? this.horDir : this.verDir) && "Horizontal" === this.orientation && (setStyleAttribute(this.firstHandle, {
                right: "",
                left: "auto"
            }), "Range" === this.type && setStyleAttribute(this.secondHandle, {
                top: "",
                left: "auto"
            }));
        }, Slider.prototype.tooltipValue = function() {
            var text, args = {
                value: this.value,
                text: ""
            };
            this.setTooltipContent(), args.text = text = this.firstTooltipObj.content, this.trigger("tooltipChange", args), 
            this.addTooltipClass(args.text), text !== args.text && (this.customAriaText = args.text, 
            this.firstTooltipObj.content = args.text, this.setAriaAttrValue(this.firstHandle), 
            "Range" === this.type && (this.secondTooltipObj.content = args.text, this.setAriaAttrValue(this.secondHandle)));
        }, Slider.prototype.setTooltipContent = function() {
            var content;
            "Range" === this.type ? (content = this.formatContent(this.tooltipFormatInfo, !1), 
            this.firstTooltipObj.content = content, this.secondTooltipObj.content = content) : isNullOrUndefined(this.handleVal1) || (content = this.formatContent(this.tooltipFormatInfo, !1), 
            this.firstTooltipObj.content = content);
        }, Slider.prototype.formatContent = function(formatInfo, ariaContent) {
            var content = "", handle1 = this.handleVal1, handle2 = this.handleVal2;
            return !isNullOrUndefined(this.customValues) && this.customValues.length > 0 && (handle1 = this.customValues[this.handleVal1], 
            handle2 = this.customValues[this.handleVal2]), ariaContent ? ("Range" === this.type ? content = this.enableRtl && "Vertical" !== this.orientation ? isNullOrUndefined(this.tooltip) || isNullOrUndefined(this.tooltip.format) ? handle2.toString() + " - " + handle1.toString() : this.formatString(handle2, formatInfo).elementVal + " - " + this.formatString(handle1, formatInfo).elementVal : isNullOrUndefined(this.tooltip) || isNullOrUndefined(this.tooltip.format) ? handle1.toString() + " - " + handle2.toString() : this.formatString(handle1, formatInfo).elementVal + " - " + this.formatString(handle2, formatInfo).elementVal : isNullOrUndefined(handle1) || (content = isNullOrUndefined(this.tooltip) || isNullOrUndefined(this.tooltip.format) ? handle1.toString() : this.formatString(handle1, formatInfo).elementVal), 
            content) : ("Range" === this.type ? content = this.enableRtl && "Vertical" !== this.orientation ? isNullOrUndefined(formatInfo.format) ? handle2.toString() + " - " + handle1.toString() : this.formatString(handle2, formatInfo).formatString + " - " + this.formatString(handle1, formatInfo).formatString : isNullOrUndefined(formatInfo.format) ? handle1.toString() + " - " + handle2.toString() : this.formatString(handle1, formatInfo).formatString + " - " + this.formatString(handle2, formatInfo).formatString : isNullOrUndefined(handle1) || (content = isNullOrUndefined(formatInfo.format) ? handle1.toString() : this.formatString(handle1, formatInfo).formatString), 
            content);
        }, Slider.prototype.addTooltipClass = function(content) {
            var _this = this;
            if (this.isMaterial && this.tooltip.isVisible) {
                var count_1 = content.toString().length;
                ("Range" !== this.type ? [ this.firstTooltipElement ] : [ this.firstTooltipElement, this.secondTooltipElement ]).forEach(function(element, index) {
                    if (element) count_1 > 4 ? (element.classList.remove(classNames_sliderMaterialDefault), 
                    element.classList.contains(classNames_sliderMaterialRange) || (element.classList.add(classNames_sliderMaterialRange), 
                    element.style.transform = "scale(1)")) : (element.classList.remove(classNames_sliderMaterialRange), 
                    element.classList.contains(classNames_sliderMaterialDefault) || (element.classList.add(classNames_sliderMaterialDefault), 
                    element.style.transform = _this.getTooltipTransformProperties(_this.previousTooltipClass).rotate)); else {
                        var cssClass = count_1 > 4 ? classNames_sliderMaterialRange : classNames_sliderMaterialDefault;
                        index ? _this.secondTooltipObj.cssClass = classNames_sliderTooltip + " " + cssClass : _this.firstTooltipObj.cssClass = classNames_sliderTooltip + " " + cssClass;
                    }
                });
            }
        }, Slider.prototype.tooltipPlacement = function() {
            var tooltipPosition;
            tooltipPosition = "Horizontal" === this.orientation ? "Before" === this.tooltip.placement ? "TopCenter" : "BottomCenter" : "Before" === this.tooltip.placement ? "LeftCenter" : "RightCenter", 
            this.firstTooltipObj.position = tooltipPosition, "Range" === this.type && (this.secondTooltipObj.position = tooltipPosition), 
            this.isMaterial && (this.firstTooltipObj.showTipPointer = !0, this.setProperties({
                tooltip: {
                    showOn: "Always"
                }
            }, !0), this.firstTooltipObj.height = 30, "Range" === this.type && (this.secondTooltipObj.showTipPointer = !0, 
            this.secondTooltipObj.height = 30));
        }, Slider.prototype.tooltipBeforeOpen = function(args) {
            var tooltipElement = args.target === this.firstHandle ? this.firstTooltipElement = args.element : this.secondTooltipElement = args.element;
            if ("" !== this.tooltip.cssClass && addClass([ tooltipElement ], this.tooltip.cssClass.split(" ")), 
            args.target.removeAttribute("aria-describedby"), this.isMaterial && this.tooltip.isVisible) {
                var transformProperties = this.getTooltipTransformProperties(this.previousTooltipClass);
                tooltipElement.firstChild.classList.add(classNames_materialTooltipHide), this.handleStart(), 
                tooltipElement.firstElementChild.innerText.length > 4 ? tooltipElement.style.transform = transformProperties.translate + " scale(0.01)" : tooltipElement.style.transform = transformProperties.translate + " " + transformProperties.rotate + " scale(0.01)";
            }
            if (this.isBootstrap) switch (this.bootstrapCollisionArgs.collidedPosition) {
              case "TopCenter":
                this.firstTooltipObj.setProperties({
                    offsetY: -6
                }, !1), "Range" === this.type && this.secondTooltipObj.setProperties({
                    offsetY: -6
                }, !1);
                break;

              case "BottomCenter":
                this.firstTooltipObj.setProperties({
                    offsetY: 6
                }, !1), "Range" === this.type && this.secondTooltipObj.setProperties({
                    offsetY: 6
                }, !1);
                break;

              case "LeftCenter":
                this.firstTooltipObj.setProperties({
                    offsetX: -6
                }, !1), "Range" === this.type && this.secondTooltipObj.setProperties({
                    offsetX: -6
                }, !1);
                break;

              case "RightCenter":
                this.firstTooltipObj.setProperties({
                    offsetX: 6
                }, !1), "Range" === this.type && this.secondTooltipObj.setProperties({
                    offsetX: 6
                }, !1);
            }
        }, Slider.prototype.wireMaterialTooltipEvent = function(destroy) {
            this.isMaterial && this.tooltip.isVisible && (destroy ? (EventHandler.remove(this.firstTooltipElement, "mousedown touchstart", this.sliderDown), 
            "Range" === this.type && EventHandler.remove(this.secondTooltipElement, "mousedown touchstart", this.sliderDown)) : (EventHandler.add(this.firstTooltipElement, "mousedown touchstart", this.sliderDown, this), 
            "Range" === this.type && EventHandler.add(this.secondTooltipElement, "mousedown touchstart", this.sliderDown, this)));
        }, Slider.prototype.tooltipPositionCalculation = function(position) {
            var cssClass;
            switch (position) {
              case "TopCenter":
                cssClass = classNames_horizontalTooltipBefore;
                break;

              case "BottomCenter":
                cssClass = classNames_horizontalTooltipAfter;
                break;

              case "LeftCenter":
                cssClass = classNames_verticalTooltipBefore;
                break;

              case "RightCenter":
                cssClass = classNames_verticalTooltipAfter;
            }
            return cssClass;
        }, Slider.prototype.getTooltipTransformProperties = function(className) {
            if (this.firstTooltipElement) {
                var position = void 0;
                position = "Horizontal" === this.orientation ? this.firstTooltipElement.clientHeight + 14 - this.firstTooltipElement.clientHeight / 2 : this.firstTooltipElement.clientWidth + 14 - this.firstTooltipElement.clientWidth / 2;
                return "Horizontal" === this.orientation ? className === classNames_horizontalTooltipBefore ? {
                    rotate: "rotate(45deg)",
                    translate: "translateY(" + position + "px)"
                } : {
                    rotate: "rotate(225deg)",
                    translate: "translateY(" + -position + "px)"
                } : className === classNames_verticalTooltipBefore ? {
                    rotate: "rotate(-45deg)",
                    translate: "translateX(" + position + "px)"
                } : {
                    rotate: "rotate(-225deg)",
                    translate: "translateX(" + -position + "px)"
                };
            }
        }, Slider.prototype.openMaterialTooltip = function() {
            var _this = this;
            this.refreshTooltip();
            var tooltipElement = 1 === this.activeHandle ? this.firstTooltipElement : this.secondTooltipElement, handle = 1 === this.activeHandle ? this.firstMaterialHandle : this.secondMaterialHandle;
            tooltipElement.firstChild.classList.contains(classNames_materialTooltipHide) && tooltipElement.firstChild.classList.remove(classNames_materialTooltipHide), 
            tooltipElement.firstChild.classList.add(classNames_materialTooltipShow), this.getHandle().style.cursor = "default", 
            tooltipElement.style.transition = this.scaleTransform, tooltipElement.classList.add(classNames_materialTooltipOpen), 
            handle.style.transform = "scale(0)", tooltipElement.firstElementChild.innerText.length > 4 ? tooltipElement.style.transform = "scale(1)" : tooltipElement.style.transform = this.getTooltipTransformProperties(this.previousTooltipClass).rotate, 
            "Default" === this.type ? setTimeout(function() {
                tooltipElement.style.transition = _this.transition.handle;
            }, 2500) : setTimeout(function() {
                tooltipElement.style.transition = "none";
            }, 2500);
        }, Slider.prototype.checkTooltipPosition = function(args) {
            var tooltipPosition = args.target === this.firstHandle ? this.firstHandleTooltipPosition : this.secondHandleTooltipPosition;
            if (this.isMaterial && (void 0 === tooltipPosition || tooltipPosition !== args.collidedPosition)) {
                var tooltipClass = this.tooltipPositionCalculation(args.collidedPosition);
                args.element.classList.remove(this.previousTooltipClass), args.element.classList.add(tooltipClass), 
                this.previousTooltipClass = tooltipClass, args.element.style.transform && args.element.classList.contains(classNames_materialTooltipOpen) && args.element.firstElementChild.innerText.length < 4 && (args.element.style.transform = this.getTooltipTransformProperties(this.previousTooltipClass).rotate), 
                args.target === this.firstHandle ? this.firstHandleTooltipPosition = args.collidedPosition : this.secondHandleTooltipPosition = args.collidedPosition;
            }
            this.bootstrapCollisionArgs = args;
        }, Slider.prototype.renderTooltip = function() {
            "Auto" === this.tooltip.showOn && this.setProperties({
                tooltip: {
                    showOn: "Hover"
                }
            }, !0);
            var tooltipPointer = !!this.isBootstrap;
            this.firstTooltipObj = new Tooltip({
                showTipPointer: tooltipPointer,
                cssClass: classNames_sliderTooltip,
                animation: {
                    open: {
                        effect: "None"
                    },
                    close: {
                        effect: "None"
                    }
                },
                opensOn: "Custom",
                beforeOpen: this.tooltipBeforeOpen.bind(this),
                beforeCollision: this.checkTooltipPosition.bind(this),
                afterClose: this.tooltipAfterClose.bind(this)
            }), this.firstTooltipObj.appendTo(this.firstHandle), "Range" === this.type && (this.secondTooltipObj = new Tooltip({
                showTipPointer: tooltipPointer,
                cssClass: classNames_sliderTooltip,
                animation: {
                    open: {
                        effect: "None"
                    },
                    close: {
                        effect: "None"
                    }
                },
                opensOn: "Custom",
                beforeOpen: this.tooltipBeforeOpen.bind(this),
                beforeCollision: this.checkTooltipPosition.bind(this),
                afterClose: this.tooltipAfterClose.bind(this)
            }), this.secondTooltipObj.appendTo(this.secondHandle)), this.tooltipPlacement(), 
            this.firstHandle.style.transition = "none", "Default" !== this.type && (this.rangeBar.style.transition = "none"), 
            "Range" === this.type && (this.secondHandle.style.transition = "none"), this.isMaterial && (this.sliderContainer.classList.add(classNames_materialSlider), 
            this.tooltipValue(), this.firstTooltipObj.open(this.firstHandle), "Range" === this.type && this.secondTooltipObj.open(this.secondHandle));
        }, Slider.prototype.tooltipAfterClose = function(args) {
            args.element === this.firstTooltipElement ? this.firstTooltipElement = void 0 : this.secondTooltipElement = void 0;
        }, Slider.prototype.setButtons = function() {
            this.firstBtn = createElement("div", {
                className: classNames_sliderButton + " " + classNames_firstButton
            }), this.firstBtn.appendChild(createElement("span", {
                className: classNames_sliderButtonIcon
            })), this.firstBtn.tabIndex = -1, this.secondBtn = createElement("div", {
                className: classNames_sliderButton + " " + classNames_secondButton
            }), this.secondBtn.appendChild(createElement("span", {
                className: classNames_sliderButtonIcon
            })), this.secondBtn.tabIndex = -1, this.sliderContainer.classList.add(classNames_sliderButtonClass), 
            this.sliderContainer.appendChild(this.firstBtn), this.sliderContainer.appendChild(this.secondBtn), 
            this.sliderContainer.appendChild(this.element), this.buttonTitle();
        }, Slider.prototype.buttonTitle = function() {
            var enabledRTL = this.enableRtl && "Vertical" !== this.orientation;
            this.l10n.setLocale(this.locale);
            var decrementTitle = this.l10n.getConstant("decrementTitle"), incrementTitle = this.l10n.getConstant("incrementTitle");
            attributes(enabledRTL ? this.secondBtn : this.firstBtn, {
                "aria-label": decrementTitle,
                title: decrementTitle
            }), attributes(enabledRTL ? this.firstBtn : this.secondBtn, {
                "aria-label": incrementTitle,
                title: incrementTitle
            });
        }, Slider.prototype.buttonFocusOut = function() {
            this.isMaterial && this.getHandle().classList.remove("e-large-thumb-size");
        }, Slider.prototype.repeatButton = function(args) {
            args.target.parentElement;
            !(1 === this.activeHandle ? this.firstTooltipElement : this.secondTooltipElement) && this.tooltip.isVisible && this.openTooltip();
            var value, hVal = this.handleValueUpdate(), enabledRTL = this.enableRtl && "Vertical" !== this.orientation;
            args.target.parentElement.classList.contains(classNames_firstButton) || args.target.classList.contains(classNames_firstButton) ? value = enabledRTL ? this.add(hVal, parseFloat(this.step.toString()), !0) : this.add(hVal, parseFloat(this.step.toString()), !1) : (args.target.parentElement.classList.contains(classNames_secondButton) || args.target.classList.contains(classNames_secondButton)) && (value = enabledRTL ? this.add(hVal, parseFloat(this.step.toString()), !1) : this.add(hVal, parseFloat(this.step.toString()), !0)), 
            this.limits.enabled && (value = this.getLimitCorrectedValues(value)), value >= this.min && value <= this.max && (this.changeHandleValue(value), 
            this.refreshTooltipOnMove());
        }, Slider.prototype.repeatHandlerMouse = function(args) {
            args.preventDefault(), "mousedown" !== args.type && "touchstart" !== args.type || (this.buttonClick(args), 
            this.repeatInterval = setInterval(this.repeatButton.bind(this), 180, args));
        }, Slider.prototype.materialChange = function() {
            this.getHandle().classList.contains("e-large-thumb-size") || this.getHandle().classList.add("e-large-thumb-size");
        }, Slider.prototype.repeatHandlerUp = function(e) {
            this.changeEvent("changed"), this.tooltip.isVisible && "Always" !== this.tooltip.showOn && !this.isMaterial && this.closeTooltip(), 
            clearInterval(this.repeatInterval), this.getHandle().focus();
        }, Slider.prototype.customTickCounter = function(bigNum) {
            var tickCount = 4;
            return !isNullOrUndefined(this.customValues) && this.customValues.length > 0 && (bigNum > 4 && (tickCount = 3), 
            bigNum > 7 && (tickCount = 2), bigNum > 14 && (tickCount = 1), bigNum > 28 && (tickCount = 0)), 
            tickCount;
        }, Slider.prototype.renderScale = function() {
            var orien = "Vertical" === this.orientation ? "v" : "h";
            this.noOfDecimals = this.numberOfDecimals(this.step), this.ul = createElement("ul", {
                className: classNames_scale + " e-" + orien + "-scale " + classNames_tick + "-" + this.ticks.placement.toLowerCase(),
                attrs: {
                    role: "presentation",
                    tabIndex: "-1",
                    "aria-hidden": "true"
                }
            }), this.ul.style.zIndex = "-1", Browser.isAndroid && "h" === orien && this.ul.classList.add(classNames_sliderTickPosition);
            var smallStep = this.ticks.smallStep;
            this.ticks.showSmallTicks ? smallStep <= 0 && (smallStep = parseFloat(formatUnit(this.step))) : smallStep = this.ticks.largeStep > 0 ? this.ticks.largeStep : parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min));
            var min = this.fractionalToInteger(this.min), max = this.fractionalToInteger(this.max), steps = this.fractionalToInteger(smallStep), bigNum = !isNullOrUndefined(this.customValues) && this.customValues.length > 0 && this.customValues.length - 1, customStep = this.customTickCounter(bigNum), count = !isNullOrUndefined(this.customValues) && this.customValues.length > 0 ? bigNum * customStep + bigNum : Math.abs((max - min) / steps);
            this.element.appendChild(this.ul);
            var li, start = parseFloat(this.min.toString());
            "v" === orien && (start = parseFloat(this.max.toString()));
            var islargeTick, left = 0, tickWidth = 100 / count;
            tickWidth === 1 / 0 && (tickWidth = 5);
            for (var i = 0, y = !isNullOrUndefined(this.customValues) && this.customValues.length > 0 ? this.customValues.length - 1 : 0, k = 0; i <= count; i++) {
                if (li = createElement("li", {
                    attrs: {
                        class: classNames_tick,
                        role: "presentation",
                        tabIndex: "-1",
                        "aria-hidden": "true"
                    }
                }), !isNullOrUndefined(this.customValues) && this.customValues.length > 0) (islargeTick = i % (customStep + 1) == 0) && ("h" === orien ? (start = this.customValues[k], 
                k++) : (start = this.customValues[y], y--), li.setAttribute("title", start.toString())); else if (li.setAttribute("title", start.toString()), 
                0 === this.numberOfDecimals(this.max) && 0 === this.numberOfDecimals(this.min) && 0 === this.numberOfDecimals(this.step)) islargeTick = "h" === orien ? (start - parseFloat(this.min.toString())) % this.ticks.largeStep == 0 : Math.abs(start - parseFloat(this.max.toString())) % this.ticks.largeStep == 0; else {
                    var largestep = this.fractionalToInteger(this.ticks.largeStep);
                    islargeTick = (this.fractionalToInteger(start) - min) % largestep == 0;
                }
                islargeTick && li.classList.add(classNames_large), "h" === orien ? li.style.width = tickWidth + "%" : li.style.height = tickWidth + "%";
                var repeat = islargeTick ? "Both" === this.ticks.placement ? 2 : 1 : 0;
                if (islargeTick) for (var j = 0; j < repeat; j++) this.createTick(li, start); else isNullOrUndefined(this.customValues) && this.formatTicksValue(li, start);
                this.ul.appendChild(li), this.tickElementCollection.push(li);
                var decimalPoints = void 0;
                isNullOrUndefined(this.customValues) && (decimalPoints = this.numberOfDecimals(smallStep) > this.numberOfDecimals(start) ? this.numberOfDecimals(smallStep) : this.numberOfDecimals(start), 
                start = "h" === orien ? this.makeRoundNumber(start + smallStep, decimalPoints) : this.makeRoundNumber(start - smallStep, decimalPoints), 
                left = this.makeRoundNumber(left + smallStep, decimalPoints));
            }
            this.tickesAlignment(orien, tickWidth);
        }, Slider.prototype.tickesAlignment = function(orien, tickWidth) {
            this.firstChild = this.ul.firstElementChild, this.lastChild = this.ul.lastElementChild, 
            this.firstChild.classList.add(classNames_sliderFirstTick), this.lastChild.classList.add(classNames_sliderLastTick), 
            this.sliderContainer.classList.add(classNames_scale + "-" + this.ticks.placement.toLowerCase()), 
            "h" === orien ? (this.firstChild.style.width = tickWidth / 2 + "%", this.lastChild.style.width = tickWidth / 2 + "%") : (this.firstChild.style.height = tickWidth / 2 + "%", 
            this.lastChild.style.height = tickWidth / 2 + "%");
            var eventArgs = {
                ticksWrapper: this.ul,
                tickElements: this.tickElementCollection
            };
            this.trigger("renderedTicks", eventArgs), this.scaleAlignment();
        }, Slider.prototype.createTick = function(li, start) {
            var span = createElement("span", {
                className: classNames_tickValue + " " + classNames_tick + "-" + this.ticks.placement.toLowerCase(),
                attrs: {
                    role: "presentation",
                    tabIndex: "-1",
                    "aria-hidden": "true"
                }
            });
            li.appendChild(span), span.innerHTML = isNullOrUndefined(this.customValues) ? this.formatTicksValue(li, start) : start;
        }, Slider.prototype.formatTicksValue = function(li, start) {
            var tickText = this.formatNumber(start), eventArgs = {
                value: start,
                text: isNullOrUndefined(this.ticks) || isNullOrUndefined(this.ticks.format) ? tickText : this.formatString(start, this.ticksFormatInfo).formatString,
                tickElement: li
            };
            return this.trigger("renderingTicks", eventArgs), li.setAttribute("title", eventArgs.text.toString()), 
            eventArgs.text.toString();
        }, Slider.prototype.scaleAlignment = function() {
            this.tickValuePosition();
            this.orientation;
            "Vertical" === this.orientation ? this.element.getBoundingClientRect().width <= 15 ? this.sliderContainer.classList.add(classNames_sliderSmallSize) : this.sliderContainer.classList.remove(classNames_sliderSmallSize) : this.element.getBoundingClientRect().height <= 15 ? this.sliderContainer.classList.add(classNames_sliderSmallSize) : this.sliderContainer.classList.remove(classNames_sliderSmallSize);
        }, Slider.prototype.tickValuePosition = function() {
            var firstChild, first = this.firstChild.getBoundingClientRect(), smallStep = this.ticks.smallStep, count = Math.abs(parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min))) / smallStep;
            this.firstChild.children.length > 0 && (firstChild = this.firstChild.children[0].getBoundingClientRect());
            var other, tickElements = [ this.sliderContainer.querySelectorAll("." + classNames_tick + "." + classNames_large + " ." + classNames_tickValue) ];
            other = "Both" === this.ticks.placement ? [].slice.call(tickElements[0], 2) : [].slice.call(tickElements[0], 1);
            for (var tickWidth = "Vertical" === this.orientation ? 2 * first.height : 2 * first.width, i = 0; i < this.firstChild.children.length; i++) "Vertical" === this.orientation ? this.firstChild.children[i].style.top = -firstChild.height / 2 + "px" : this.enableRtl ? this.firstChild.children[i].style.left = (tickWidth - this.firstChild.children[i].getBoundingClientRect().width) / 2 + "px" : this.firstChild.children[i].style.left = -firstChild.width / 2 + "px";
            for (i = 0; i < other.length; i++) {
                var otherChild = other[i].getBoundingClientRect();
                "Vertical" === this.orientation ? setStyleAttribute(other[i], {
                    top: (tickWidth - otherChild.height) / 2 + "px"
                }) : setStyleAttribute(other[i], {
                    left: (tickWidth - otherChild.width) / 2 + "px"
                });
            }
            this.enableRtl && this.lastChild.children.length && 0 !== count && (this.lastChild.children[0].style.left = -this.lastChild.getBoundingClientRect().width / 2 + "px", 
            "Both" === this.ticks.placement && (this.lastChild.children[1].style.left = -this.lastChild.getBoundingClientRect().width / 2 + "px")), 
            0 === count && ("Horizontal" === this.orientation && (this.enableRtl ? (this.firstChild.classList.remove(classNames_sliderLastTick), 
            this.firstChild.style.right = this.firstHandle.style.right, this.firstChild.children[0].style.left = this.firstChild.getBoundingClientRect().width / 2 + 2 + "px", 
            "Both" === this.ticks.placement && (this.firstChild.children[1].style.left = this.firstChild.getBoundingClientRect().width / 2 + 2 + "px")) : (this.firstChild.classList.remove(classNames_sliderLastTick), 
            this.firstChild.style.left = this.firstHandle.style.left)), "Vertical" === this.orientation && this.firstChild.classList.remove(classNames_sliderLastTick));
        }, Slider.prototype.setAriaAttrValue = function(element) {
            var ariaValueText, isTickFormatted = !isNullOrUndefined(this.ticks) && !isNullOrUndefined(this.ticks.format), text = isTickFormatted ? this.formatContent(this.tooltipFormatInfo, !1) : this.formatContent(this.ticksFormatInfo, !1), valuenow = isTickFormatted ? this.formatContent(this.ticksFormatInfo, !0) : this.formatContent(this.tooltipFormatInfo, !0);
            ariaValueText = 2 === (text = this.customAriaText ? this.customAriaText : text).split(" - ").length ? text.split(" - ") : [ text, text ], 
            this.setAriaAttributes(element), "Range" !== this.type ? attributes(element, {
                "aria-valuenow": valuenow,
                "aria-valuetext": text
            }) : this.enableRtl ? element === this.firstHandle ? attributes(element, {
                "aria-valuenow": valuenow.split(" - ")[1],
                "aria-valuetext": ariaValueText[1]
            }) : attributes(element, {
                "aria-valuenow": valuenow.split(" - ")[0],
                "aria-valuetext": ariaValueText[0]
            }) : element === this.firstHandle ? attributes(element, {
                "aria-valuenow": valuenow.split(" - ")[0],
                "aria-valuetext": ariaValueText[0]
            }) : attributes(element, {
                "aria-valuenow": valuenow.split(" - ")[1],
                "aria-valuetext": ariaValueText[1]
            });
        }, Slider.prototype.handleValueUpdate = function() {
            return "Range" === this.type ? 1 === this.activeHandle ? this.handleVal1 : this.handleVal2 : this.handleVal1;
        }, Slider.prototype.getLimitCorrectedValues = function(value) {
            return value = "MinRange" === this.type || "Default" === this.type ? this.getLimitValueAndPosition(value, this.limits.minStart, this.limits.minEnd)[0] : 1 === this.activeHandle ? this.getLimitValueAndPosition(value, this.limits.minStart, this.limits.minEnd)[0] : this.getLimitValueAndPosition(value, this.limits.maxStart, this.limits.maxEnd)[0];
        }, Slider.prototype.focusSliderElement = function() {
            this.isElementFocused || (this.element.focus(), this.isElementFocused = !0);
        }, Slider.prototype.buttonClick = function(args) {
            this.focusSliderElement();
            var value, enabledRTL = this.enableRtl && "Vertical" !== this.orientation, hVal = this.handleValueUpdate();
            40 === args.keyCode || 37 === args.keyCode || args.currentTarget.classList.contains(classNames_firstButton) ? value = enabledRTL ? this.add(hVal, parseFloat(this.step.toString()), !0) : this.add(hVal, parseFloat(this.step.toString()), !1) : 38 === args.keyCode || 39 === args.keyCode || args.currentTarget.classList.contains(classNames_secondButton) ? value = enabledRTL ? this.add(hVal, parseFloat(this.step.toString()), !1) : this.add(hVal, parseFloat(this.step.toString()), !0) : 33 === args.keyCode || args.currentTarget.classList.contains(classNames_firstButton) ? value = enabledRTL ? this.add(hVal, parseFloat(this.ticks.largeStep.toString()), !1) : this.add(hVal, parseFloat(this.ticks.largeStep.toString()), !0) : 34 === args.keyCode || args.currentTarget.classList.contains(classNames_secondButton) ? value = enabledRTL ? this.add(hVal, parseFloat(this.ticks.largeStep.toString()), !0) : this.add(hVal, parseFloat(this.ticks.largeStep.toString()), !1) : 36 === args.keyCode ? value = parseFloat(this.min.toString()) : 35 === args.keyCode && (value = parseFloat(this.max.toString())), 
            this.limits.enabled && (value = this.getLimitCorrectedValues(value)), this.changeHandleValue(value), 
            !this.isMaterial || this.tooltip.isVisible || this.getHandle().classList.contains(classNames_sliderTabHandle) || this.materialChange(), 
            this.tooltipAnimation(), this.getHandle().focus(), args.currentTarget.classList.contains(classNames_firstButton) && EventHandler.add(this.firstBtn, "mouseup touchend", this.buttonUp, this), 
            args.currentTarget.classList.contains(classNames_secondButton) && EventHandler.add(this.secondBtn, "mouseup touchend", this.buttonUp, this);
        }, Slider.prototype.tooltipAnimation = function() {
            if (this.tooltip.isVisible) {
                var tooltipObj = 1 === this.activeHandle ? this.firstTooltipObj : this.secondTooltipObj, tooltipElement = 1 === this.activeHandle ? this.firstTooltipElement : this.secondTooltipElement;
                this.isMaterial ? tooltipElement.classList.contains(classNames_materialTooltipOpen) ? this.refreshTooltip() : this.openMaterialTooltip() : (tooltipObj.animation = {
                    open: {
                        effect: "None"
                    },
                    close: {
                        effect: "FadeOut",
                        duration: 500
                    }
                }, this.openTooltip());
            }
        }, Slider.prototype.buttonUp = function(args) {
            if (this.tooltip.isVisible && !this.isMaterial) {
                (1 === this.activeHandle ? this.firstTooltipObj : this.secondTooltipObj).animation = {
                    open: {
                        effect: "None"
                    },
                    close: {
                        effect: "None"
                    }
                };
            }
            args.currentTarget.classList.contains(classNames_firstButton) && EventHandler.remove(this.firstBtn, "mouseup touchend", this.buttonUp), 
            args.currentTarget.classList.contains(classNames_secondButton) && EventHandler.remove(this.secondBtn, "mouseup touchend", this.buttonUp);
        }, Slider.prototype.setRangeBar = function() {
            "Horizontal" === this.orientation ? "MinRange" === this.type ? (this.enableRtl ? this.rangeBar.style.right = "0px" : this.rangeBar.style.left = "0px", 
            setStyleAttribute(this.rangeBar, {
                width: isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + "px"
            })) : (this.enableRtl ? this.rangeBar.style.right = this.handlePos1 + "px" : this.rangeBar.style.left = this.handlePos1 + "px", 
            setStyleAttribute(this.rangeBar, {
                width: this.handlePos2 - this.handlePos1 + "px"
            })) : "MinRange" === this.type ? (this.rangeBar.style.bottom = "0px", setStyleAttribute(this.rangeBar, {
                height: isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + "px"
            })) : (this.rangeBar.style.bottom = this.handlePos1 + "px", setStyleAttribute(this.rangeBar, {
                height: this.handlePos2 - this.handlePos1 + "px"
            }));
        }, Slider.prototype.checkValidValueAndPos = function(value) {
            return value = this.checkHandleValue(value), value = this.checkHandlePosition(value);
        }, Slider.prototype.setLimitBarPositions = function(fromMinPostion, fromMaxpostion, toMinPostion, toMaxpostion) {
            "Horizontal" === this.orientation ? this.enableRtl ? (this.limitBarFirst.style.right = fromMinPostion + "px", 
            this.limitBarFirst.style.width = fromMaxpostion - fromMinPostion + "px") : (this.limitBarFirst.style.left = fromMinPostion + "px", 
            this.limitBarFirst.style.width = fromMaxpostion - fromMinPostion + "px") : (this.limitBarFirst.style.bottom = fromMinPostion + "px", 
            this.limitBarFirst.style.height = fromMaxpostion - fromMinPostion + "px"), "Range" === this.type && ("Horizontal" === this.orientation ? this.enableRtl ? (this.limitBarSecond.style.right = toMinPostion + "px", 
            this.limitBarSecond.style.width = toMaxpostion - toMinPostion + "px") : (this.limitBarSecond.style.left = toMinPostion + "px", 
            this.limitBarSecond.style.width = toMaxpostion - toMinPostion + "px") : (this.limitBarSecond.style.bottom = toMinPostion + "px", 
            this.limitBarSecond.style.height = toMaxpostion - toMinPostion + "px"));
        }, Slider.prototype.setLimitBar = function() {
            if ("Default" === this.type || "MinRange" === this.type) {
                var fromPosition = this.getLimitValueAndPosition(this.limits.minStart, this.limits.minStart, this.limits.minEnd, !0)[0];
                fromPosition = this.checkValidValueAndPos(fromPosition);
                var toPosition = this.getLimitValueAndPosition(this.limits.minEnd, this.limits.minStart, this.limits.minEnd, !0)[0];
                toPosition = this.checkValidValueAndPos(toPosition), this.setLimitBarPositions(fromPosition, toPosition);
            } else if ("Range" === this.type) {
                var fromMinPostion = this.getLimitValueAndPosition(this.limits.minStart, this.limits.minStart, this.limits.minEnd, !0)[0];
                fromMinPostion = this.checkValidValueAndPos(fromMinPostion);
                var fromMaxpostion = this.getLimitValueAndPosition(this.limits.minEnd, this.limits.minStart, this.limits.minEnd, !0)[0];
                fromMaxpostion = this.checkValidValueAndPos(fromMaxpostion);
                var toMinPostion = this.getLimitValueAndPosition(this.limits.maxStart, this.limits.maxStart, this.limits.maxEnd, !0)[0];
                toMinPostion = this.checkValidValueAndPos(toMinPostion);
                var toMaxpostion = this.getLimitValueAndPosition(this.limits.maxEnd, this.limits.maxStart, this.limits.maxEnd, !0)[0];
                toMaxpostion = this.checkValidValueAndPos(toMaxpostion), this.setLimitBarPositions(fromMinPostion, fromMaxpostion, toMinPostion, toMaxpostion);
            }
        }, Slider.prototype.getLimitValueAndPosition = function(currentValue, minValue, maxValue, limitBar) {
            return isNullOrUndefined(minValue) && (minValue = this.min, isNullOrUndefined(currentValue) && limitBar && (currentValue = minValue)), 
            isNullOrUndefined(maxValue) && (maxValue = this.max, isNullOrUndefined(currentValue) && limitBar && (currentValue = maxValue)), 
            currentValue < minValue && (currentValue = minValue), currentValue > maxValue && (currentValue = maxValue), 
            [ currentValue, this.checkHandlePosition(currentValue) ];
        }, Slider.prototype.setValue = function() {
            if (!isNullOrUndefined(this.customValues) && this.customValues.length > 0 && (this.min = 0, 
            this.max = this.customValues.length - 1), this.setAriaAttributes(this.firstHandle), 
            this.handleVal1 = isNullOrUndefined(this.value) ? this.checkHandleValue(parseFloat(this.min.toString())) : this.checkHandleValue(parseFloat(this.value.toString())), 
            this.handlePos1 = this.checkHandlePosition(this.handleVal1), this.preHandlePos1 = this.handlePos1, 
            isNullOrUndefined(this.activeHandle) ? "Range" === this.type ? this.activeHandle = 2 : this.activeHandle = 1 : this.activeHandle = this.activeHandle, 
            "Default" === this.type || "MinRange" === this.type) {
                if (this.limits.enabled) {
                    var values = this.getLimitValueAndPosition(this.handleVal1, this.limits.minStart, this.limits.minEnd);
                    this.handleVal1 = values[0], this.handlePos1 = values[1], this.preHandlePos1 = this.handlePos1;
                }
                this.setHandlePosition(), this.handleStart(), this.value = this.handleVal1, this.setAriaAttrValue(this.firstHandle), 
                this.changeEvent("changed");
            } else this.validateRangeValue();
            "Default" !== this.type && this.setRangeBar(), this.limits.enabled && this.setLimitBar();
        }, Slider.prototype.rangeValueUpdate = function() {
            null !== this.value && "object" == typeof this.value || (this.value = [ parseFloat(formatUnit(this.min)), parseFloat(formatUnit(this.max)) ]);
        }, Slider.prototype.validateRangeValue = function() {
            this.rangeValueUpdate(), this.setRangeValue();
        }, Slider.prototype.modifyZindex = function() {
            "Range" === this.type ? 1 === this.activeHandle ? (this.firstHandle.style.zIndex = this.zIndex + 4 + "", 
            this.secondHandle.style.zIndex = this.zIndex + 3 + "", this.isMaterial && this.tooltip.isVisible && this.firstTooltipElement && this.secondTooltipElement && (this.firstTooltipElement.style.zIndex = this.zIndex + 4 + "", 
            this.secondTooltipElement.style.zIndex = this.zIndex + 3 + "")) : (this.firstHandle.style.zIndex = this.zIndex + 3 + "", 
            this.secondHandle.style.zIndex = this.zIndex + 4 + "", this.isMaterial && this.tooltip.isVisible && this.firstTooltipElement && this.secondTooltipElement && (this.firstTooltipElement.style.zIndex = this.zIndex + 3 + "", 
            this.secondTooltipElement.style.zIndex = this.zIndex + 4 + "")) : this.isMaterial && this.tooltip.isVisible && this.firstTooltipElement && (this.firstTooltipElement.style.zIndex = this.zIndex + 4 + "");
        }, Slider.prototype.setHandlePosition = function() {
            var handle, tooltipElement, _this = this, pos = 1 === this.activeHandle ? this.handlePos1 : this.handlePos2;
            1 === this.activeHandle ? this.handleVal1 : this.handleVal2;
            this.isMaterial && this.tooltip.isVisible ? (tooltipElement = 1 === this.activeHandle ? this.firstTooltipElement : this.secondTooltipElement, 
            handle = [ this.getHandle(), 1 === this.activeHandle ? this.firstMaterialHandle : this.secondMaterialHandle ]) : handle = [ this.getHandle() ], 
            this.tooltip.isVisible && 0 === pos && "Range" !== this.type ? (handle[0].classList.add(classNames_sliderHandleStart), 
            this.isMaterial && (handle[1].classList.add(classNames_sliderHandleStart), tooltipElement && tooltipElement.classList.add(classNames_sliderTooltipStart))) : (handle[0].classList.remove(classNames_sliderHandleStart), 
            this.tooltip.isVisible && this.isMaterial && (handle[1].classList.remove(classNames_sliderHandleStart), 
            tooltipElement && tooltipElement.classList.remove(classNames_sliderTooltipStart))), 
            handle.forEach(function(handle) {
                "Horizontal" === _this.orientation ? _this.enableRtl ? handle.style.right = pos + "px" : handle.style.left = pos + "px" : handle.style.bottom = pos + "px";
            }), this.changeEvent("change");
        }, Slider.prototype.getHandle = function() {
            return 1 === this.activeHandle ? this.firstHandle : this.secondHandle;
        }, Slider.prototype.setRangeValue = function() {
            this.activeHandle;
            this.updateRangeValue(), this.activeHandle = 1, this.setHandlePosition(), this.activeHandle = 2, 
            this.setHandlePosition(), this.activeHandle = 1;
        }, Slider.prototype.changeEvent = function(eventName) {
            var previous = "change" === eventName ? this.previousVal : this.previousChanged;
            if ("Range" !== this.type) this.setProperties({
                value: this.handleVal1
            }, !0), previous !== this.value && (this.trigger(eventName, this.changeEventArgs(eventName)), 
            this.setPreviousVal(eventName, this.value)), this.setAriaAttrValue(this.firstHandle); else {
                var value = this.value = [ this.handleVal1, this.handleVal2 ];
                this.setProperties({
                    value: value
                }, !0), (previous.length === this.value.length && this.value[0] !== previous[0] || this.value[1] !== previous[1]) && (this.trigger(eventName, this.changeEventArgs(eventName)), 
                this.setPreviousVal(eventName, this.value)), this.setAriaAttrValue(this.getHandle());
            }
            this.hiddenInput.value = this.value.toString();
        }, Slider.prototype.changeEventArgs = function(eventName) {
            var eventArgs;
            return this.tooltip.isVisible && this.firstTooltipObj ? (this.tooltipValue(), eventArgs = {
                value: this.value,
                previousValue: "change" === eventName ? this.previousVal : this.previousChanged,
                action: eventName,
                text: this.firstTooltipObj.content
            }) : eventArgs = {
                value: this.value,
                previousValue: "change" === eventName ? this.previousVal : this.previousChanged,
                action: eventName,
                text: isNullOrUndefined(this.ticksFormatInfo.format) ? this.value.toString() : "Range" !== this.type ? this.formatString(this.value, this.ticksFormatInfo).formatString : this.formatString(this.value[0], this.ticksFormatInfo).formatString + " - " + this.formatString(this.value[1], this.ticksFormatInfo).formatString
            }, eventArgs;
        }, Slider.prototype.setPreviousVal = function(eventName, value) {
            "change" === eventName ? this.previousVal = value : this.previousChanged = value;
        }, Slider.prototype.updateRangeValue = function() {
            var values = this.value.toString().split(",").map(Number);
            if (this.enableRtl && "Vertical" !== this.orientation || this.rtl ? this.value = [ values[1], values[0] ] : this.value = [ values[0], values[1] ], 
            this.enableRtl && "Vertical" !== this.orientation ? (this.handleVal1 = this.checkHandleValue(this.value[1]), 
            this.handleVal2 = this.checkHandleValue(this.value[0])) : (this.handleVal1 = this.checkHandleValue(this.value[0]), 
            this.handleVal2 = this.checkHandleValue(this.value[1])), this.handlePos1 = this.checkHandlePosition(this.handleVal1), 
            this.handlePos2 = this.checkHandlePosition(this.handleVal2), this.handlePos1 > this.handlePos2 && (this.handlePos1 = this.handlePos2, 
            this.handleVal1 = this.handleVal2), this.preHandlePos1 = this.handlePos1, this.preHandlePos2 = this.handlePos2, 
            this.limits.enabled) {
                this.activeHandle = 1;
                var values_1 = this.getLimitValueAndPosition(this.handleVal1, this.limits.minStart, this.limits.minEnd);
                this.handleVal1 = values_1[0], this.handlePos1 = values_1[1], this.preHandlePos1 = this.handlePos1, 
                this.activeHandle = 2, values_1 = this.getLimitValueAndPosition(this.handleVal2, this.limits.maxStart, this.limits.maxEnd), 
                this.handleVal2 = values_1[0], this.handlePos2 = values_1[1], this.preHandlePos2 = this.handlePos2;
            }
        }, Slider.prototype.checkHandlePosition = function(value) {
            var pos;
            return value = 100 * (value - parseFloat(formatUnit(this.min))) / (parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min))), 
            pos = "Horizontal" === this.orientation ? this.element.getBoundingClientRect().width * (value / 100) : this.element.getBoundingClientRect().height * (value / 100), 
            parseFloat(formatUnit(this.max)) === parseFloat(formatUnit(this.min)) && (pos = "Horizontal" === this.orientation ? this.element.getBoundingClientRect().width : this.element.getBoundingClientRect().height), 
            pos;
        }, Slider.prototype.checkHandleValue = function(value) {
            if (this.min > this.max && (this.min = this.max), this.min === this.max) return parseFloat(formatUnit(this.max));
            var handle = this.tempStartEnd();
            return value < handle.start ? value = handle.start : value > handle.end && (value = handle.end), 
            value;
        }, Slider.prototype.onResize = function() {
            var _this = this;
            this.firstHandle.style.transition = "none", "Default" !== this.type && (this.rangeBar.style.transition = "none"), 
            "Range" === this.type && (this.secondHandle.style.transition = "none"), this.handlePos1 = this.checkHandlePosition(this.handleVal1), 
            this.handleVal2 && (this.handlePos2 = this.checkHandlePosition(this.handleVal2)), 
            "Horizontal" === this.orientation ? (this.enableRtl ? this.firstHandle.style.right = this.handlePos1 + "px" : this.firstHandle.style.left = this.handlePos1 + "px", 
            this.isMaterial && this.tooltip.isVisible && this.firstMaterialHandle && (this.enableRtl ? this.firstMaterialHandle.style.right = this.handlePos1 + "px" : this.firstMaterialHandle.style.left = this.handlePos1 + "px"), 
            "MinRange" === this.type ? (this.enableRtl ? this.rangeBar.style.right = "0px" : this.rangeBar.style.left = "0px", 
            setStyleAttribute(this.rangeBar, {
                width: isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + "px"
            })) : "Range" === this.type && (this.enableRtl ? this.secondHandle.style.right = this.handlePos2 + "px" : this.secondHandle.style.left = this.handlePos2 + "px", 
            this.isMaterial && this.tooltip.isVisible && this.secondMaterialHandle && (this.enableRtl ? this.secondMaterialHandle.style.right = this.handlePos2 + "px" : this.secondMaterialHandle.style.left = this.handlePos2 + "px"), 
            this.enableRtl ? this.rangeBar.style.right = this.handlePos1 + "px" : this.rangeBar.style.left = this.handlePos1 + "px", 
            setStyleAttribute(this.rangeBar, {
                width: this.handlePos2 - this.handlePos1 + "px"
            }))) : (this.firstHandle.style.bottom = this.handlePos1 + "px", this.isMaterial && this.tooltip.isVisible && this.firstMaterialHandle && (this.firstMaterialHandle.style.bottom = this.handlePos1 + "px"), 
            "MinRange" === this.type ? (this.rangeBar.style.bottom = "0px", setStyleAttribute(this.rangeBar, {
                height: isNullOrUndefined(this.handlePos1) ? 0 : this.handlePos1 + "px"
            })) : "Range" === this.type && (this.secondHandle.style.bottom = this.handlePos2 + "px", 
            this.isMaterial && this.tooltip.isVisible && this.secondMaterialHandle && (this.secondMaterialHandle.style.bottom = this.handlePos2 + "px"), 
            this.rangeBar.style.bottom = this.handlePos1 + "px", setStyleAttribute(this.rangeBar, {
                height: this.handlePos2 - this.handlePos1 + "px"
            }))), this.limits.enabled && this.setLimitBar(), "None" !== this.ticks.placement && this.ul && (this.removeElement(this.ul), 
            this.renderScale()), this.tooltip.isVisible || setTimeout(function() {
                _this.firstHandle.style.transition = _this.scaleTransform, "Range" === _this.type && (_this.secondHandle.style.transition = _this.scaleTransform);
            }), this.refreshTooltip();
        }, Slider.prototype.changeHandleValue = function(value) {
            var position = null;
            1 === this.activeHandle ? (this.limits.enabled && this.limits.startHandleFixed || (this.handleVal1 = this.checkHandleValue(value), 
            this.handlePos1 = this.checkHandlePosition(this.handleVal1), "Range" === this.type && this.handlePos1 > this.handlePos2 && (this.handlePos1 = this.handlePos2, 
            this.handleVal1 = this.handleVal2), this.handlePos1 !== this.preHandlePos1 && (position = this.preHandlePos1 = this.handlePos1)), 
            this.modifyZindex()) : (this.limits.enabled && this.limits.endHandleFixed || (this.handleVal2 = this.checkHandleValue(value), 
            this.handlePos2 = this.checkHandlePosition(this.handleVal2), "Range" === this.type && this.handlePos2 < this.handlePos1 && (this.handlePos2 = this.handlePos1, 
            this.handleVal2 = this.handleVal1), this.handlePos2 !== this.preHandlePos2 && (position = this.preHandlePos2 = this.handlePos2)), 
            this.modifyZindex()), null !== position && ("Default" !== this.type && this.setRangeBar(), 
            this.setHandlePosition());
        }, Slider.prototype.tempStartEnd = function() {
            return this.min > this.max ? {
                start: this.max,
                end: this.min
            } : {
                start: this.min,
                end: this.max
            };
        }, Slider.prototype.xyToPosition = function(position) {
            if (this.min === this.max) return 100;
            if ("Horizontal" === this.orientation) {
                var left = position.x - this.element.getBoundingClientRect().left, num = this.element.offsetWidth / 100;
                this.val = left / num;
            } else {
                var top_1 = position.y - this.element.getBoundingClientRect().top;
                num = this.element.offsetHeight / 100;
                this.val = 100 - top_1 / num;
            }
            var val = this.stepValueCalculation(this.val);
            return val < 0 ? val = 0 : val > 100 && (val = 100), this.enableRtl && "Vertical" !== this.orientation && (val = 100 - val), 
            "Horizontal" === this.orientation ? this.element.getBoundingClientRect().width * (val / 100) : this.element.getBoundingClientRect().height * (val / 100);
        }, Slider.prototype.stepValueCalculation = function(value) {
            0 === this.step && (this.step = 1);
            var percentStep = parseFloat(formatUnit(this.step)) / ((parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min))) / 100), remain = value % Math.abs(percentStep);
            return 0 !== remain && (percentStep / 2 > remain ? value -= remain : value += Math.abs(percentStep) - remain), 
            value;
        }, Slider.prototype.add = function(a, b, addition) {
            var x = Math.pow(10, 3);
            return addition ? (Math.round(a * x) + Math.round(b * x)) / x : (Math.round(a * x) - Math.round(b * x)) / x;
        }, Slider.prototype.round = function(a) {
            var f = this.step.toString().split(".");
            return f[1] ? parseFloat(a.toFixed(f[1].length)) : Math.round(a);
        }, Slider.prototype.positionToValue = function(pos) {
            var val, diff = parseFloat(formatUnit(this.max)) - parseFloat(formatUnit(this.min));
            val = "Horizontal" === this.orientation ? pos / this.element.getBoundingClientRect().width * diff : pos / this.element.getBoundingClientRect().height * diff;
            return this.add(val, parseFloat(this.min.toString()), !0);
        }, Slider.prototype.sliderBarClick = function(evt) {
            evt.preventDefault();
            var pos;
            "mousedown" === evt.type || "click" === evt.type ? pos = {
                x: evt.clientX,
                y: evt.clientY
            } : "touchstart" === evt.type && (pos = {
                x: evt.changedTouches[0].clientX,
                y: evt.changedTouches[0].clientY
            });
            var handlepos = this.xyToPosition(pos), handleVal = this.positionToValue(handlepos);
            if ("Range" === this.type && this.handlePos2 - handlepos < handlepos - this.handlePos1) {
                if (this.activeHandle = 2, !this.limits.enabled || !this.limits.endHandleFixed) {
                    if (this.limits.enabled) {
                        handleVal = (value = this.getLimitValueAndPosition(handleVal, this.limits.maxStart, this.limits.maxEnd))[0], 
                        handlepos = value[1];
                    }
                    this.secondHandle.classList.add(classNames_sliderActiveHandle), this.handlePos2 = this.preHandlePos2 = handlepos, 
                    this.handleVal2 = handleVal;
                }
                this.modifyZindex(), this.secondHandle.focus();
            } else {
                if (this.activeHandle = 1, !this.limits.enabled || !this.limits.startHandleFixed) {
                    if (this.limits.enabled) {
                        var value;
                        handleVal = (value = this.getLimitValueAndPosition(handleVal, this.limits.minStart, this.limits.minEnd))[0], 
                        handlepos = value[1];
                    }
                    this.firstHandle.classList.add(classNames_sliderActiveHandle), this.handlePos1 = this.preHandlePos1 = handlepos, 
                    this.handleVal1 = handleVal;
                }
                this.modifyZindex(), this.firstHandle.focus();
            }
            if (this.isMaterial && this.tooltip.isVisible) {
                (1 === this.activeHandle ? this.firstTooltipElement : this.secondTooltipElement).classList.add(classNames_materialTooltipActive);
            }
            var focusedElement = this.element.querySelector("." + classNames_sliderTabHandle);
            focusedElement && this.getHandle() !== focusedElement && focusedElement.classList.remove(classNames_sliderTabHandle);
            var handle = 1 === this.activeHandle ? this.firstHandle : this.secondHandle;
            if (evt.target === handle) return !this.isMaterial || this.tooltip.isVisible || this.getHandle().classList.contains(classNames_sliderTabHandle) || this.materialChange(), 
            void this.tooltipAnimation();
            if (this.checkRepeatedValue(handleVal)) {
                var transition = this.isMaterial && this.tooltip.isVisible ? this.transitionOnMaterialTooltip : this.transition;
                this.getHandle().style.transition = transition.handle, "Default" !== this.type && (this.rangeBar.style.transition = transition.rangeBar), 
                this.setHandlePosition(), "Default" !== this.type && this.setRangeBar();
            }
        }, Slider.prototype.refreshTooltipOnMove = function() {
            this.tooltip.isVisible && (this.tooltipValue(), 1 === this.activeHandle ? this.firstTooltipObj.refresh(this.firstHandle) : this.secondTooltipObj.refresh(this.secondHandle));
        }, Slider.prototype.sliderDown = function(event) {
            if (event.preventDefault(), this.focusSliderElement(), "Range" === this.type && this.drag && event.target === this.rangeBar) {
                var xPostion = void 0, yPostion = void 0;
                "mousedown" === event.type ? (xPostion = (_a = [ event.clientX, event.clientY ])[0], 
                yPostion = _a[1]) : "touchstart" === event.type && (xPostion = (_b = [ event.changedTouches[0].clientX, event.changedTouches[0].clientY ])[0], 
                yPostion = _b[1]), "Horizontal" === this.orientation ? (this.firstPartRemain = xPostion - this.rangeBar.getBoundingClientRect().left, 
                this.secondPartRemain = this.rangeBar.getBoundingClientRect().right - xPostion) : (this.firstPartRemain = yPostion - this.rangeBar.getBoundingClientRect().top, 
                this.secondPartRemain = this.rangeBar.getBoundingClientRect().bottom - yPostion), 
                this.minDiff = this.handleVal2 - this.handleVal1, this.getHandle().focus(), EventHandler.add(document, "mousemove touchmove", this.dragRangeBarMove, this), 
                EventHandler.add(document, "mouseup touchend", this.dragRangeBarUp, this);
            } else this.sliderBarClick(event), EventHandler.add(document, "mousemove touchmove", this.sliderBarMove, this), 
            EventHandler.add(document, "mouseup touchend", this.sliderBarUp, this);
            var _a, _b;
        }, Slider.prototype.handleValueAdjust = function(handleValue, assignValue, handleNumber) {
            1 === handleNumber ? (this.handleVal1 = assignValue, this.handleVal2 = this.handleVal1 + this.minDiff) : 2 === handleNumber && (this.handleVal2 = assignValue, 
            this.handleVal1 = this.handleVal2 - this.minDiff), this.handlePos1 = this.checkHandlePosition(this.handleVal1), 
            this.handlePos2 = this.checkHandlePosition(this.handleVal2);
        }, Slider.prototype.dragRangeBarMove = function(event) {
            "touchmove" !== event.type && event.preventDefault();
            var pos;
            this.rangeBar.style.transition = "none", this.firstHandle.style.transition = "none", 
            this.secondHandle.style.transition = "none";
            var xPostion, yPostion;
            if ("mousemove" === event.type ? (xPostion = (_a = [ event.clientX, event.clientY ])[0], 
            yPostion = _a[1]) : (xPostion = (_b = [ event.changedTouches[0].clientX, event.changedTouches[0].clientY ])[0], 
            yPostion = _b[1]), !(this.limits.enabled && this.limits.startHandleFixed || this.limits.enabled && this.limits.endHandleFixed)) {
                if (pos = this.enableRtl ? {
                    x: xPostion + this.secondPartRemain,
                    y: yPostion + this.secondPartRemain
                } : {
                    x: xPostion - this.firstPartRemain,
                    y: yPostion + this.secondPartRemain
                }, this.handlePos1 = this.xyToPosition(pos), this.handleVal1 = this.positionToValue(this.handlePos1), 
                pos = this.enableRtl ? {
                    x: xPostion - this.firstPartRemain,
                    y: yPostion - this.firstPartRemain
                } : {
                    x: xPostion + this.secondPartRemain,
                    y: yPostion - this.firstPartRemain
                }, this.handlePos2 = this.xyToPosition(pos), this.handleVal2 = this.positionToValue(this.handlePos2), 
                this.limits.enabled) {
                    var value = this.getLimitValueAndPosition(this.handleVal1, this.limits.minStart, this.limits.minEnd);
                    this.handleVal1 = value[0], this.handlePos1 = value[1], this.handleVal1 === this.limits.minEnd && this.handleValueAdjust(this.handleVal1, this.limits.minEnd, 1), 
                    this.handleVal1 === this.limits.minStart && this.handleValueAdjust(this.handleVal1, this.limits.minStart, 1), 
                    value = this.getLimitValueAndPosition(this.handleVal2, this.limits.maxStart, this.limits.maxEnd), 
                    this.handleVal2 = value[0], this.handlePos2 = value[1], this.handleVal2 === this.limits.maxStart && this.handleValueAdjust(this.handleVal2, this.limits.maxStart, 2), 
                    this.handleVal2 === this.limits.maxEnd && this.handleValueAdjust(this.handleVal2, this.limits.maxEnd, 2);
                }
                this.handleVal2 === this.max && this.handleValueAdjust(this.handleVal2, this.max, 2), 
                this.handleVal1 === this.min && this.handleValueAdjust(this.handleVal1, this.min, 1);
            }
            this.activeHandle = 1, this.setHandlePosition(), this.tooltip.isVisible && (this.isMaterial ? this.firstTooltipElement.classList.contains(classNames_materialTooltipOpen) ? this.refreshTooltipOnMove() : this.openMaterialTooltip() : this.firstTooltipElement ? this.refreshTooltipOnMove() : this.openTooltip()), 
            this.activeHandle = 2, this.setHandlePosition(), this.tooltip.isVisible && (this.isMaterial ? this.secondTooltipElement.classList.contains(classNames_materialTooltipOpen) ? this.refreshTooltipOnMove() : this.openMaterialTooltip() : this.secondTooltipElement ? this.refreshTooltipOnMove() : this.openTooltip()), 
            this.setRangeBar();
            var _a, _b;
        }, Slider.prototype.sliderBarUp = function() {
            if (this.changeEvent("changed"), this.handleFocusOut(), this.firstHandle.classList.remove(classNames_sliderActiveHandle), 
            "Range" === this.type && this.secondHandle.classList.remove(classNames_sliderActiveHandle), 
            this.tooltip.isVisible && ("Always" !== this.tooltip.showOn && this.closeTooltip(), 
            !this.isMaterial)) {
                (1 === this.activeHandle ? this.firstTooltipObj : this.secondTooltipObj).animation = {
                    open: {
                        effect: "None"
                    },
                    close: {
                        effect: "None"
                    }
                };
            }
            if (this.isMaterial && (this.getHandle().classList.remove("e-large-thumb-size"), 
            this.tooltip.isVisible)) {
                (1 === this.activeHandle ? this.firstTooltipElement : this.secondTooltipElement).classList.remove(classNames_materialTooltipActive);
            }
            EventHandler.remove(document, "mousemove touchmove", this.sliderBarMove), EventHandler.remove(document, "mouseup touchend", this.sliderBarUp);
        }, Slider.prototype.sliderBarMove = function(evt) {
            "touchmove" !== evt.type && evt.preventDefault();
            var pos;
            pos = "mousemove" === evt.type ? {
                x: evt.clientX,
                y: evt.clientY
            } : {
                x: evt.changedTouches[0].clientX,
                y: evt.changedTouches[0].clientY
            };
            var handlepos = this.xyToPosition(pos), handleVal = this.positionToValue(handlepos);
            if (handlepos = Math.round(handlepos), "Range" !== this.type && 1 === this.activeHandle) {
                if (!this.limits.enabled || !this.limits.startHandleFixed) {
                    if (this.limits.enabled) {
                        var valueAndPostion = this.getLimitValueAndPosition(handleVal, this.limits.minStart, this.limits.minEnd);
                        handlepos = valueAndPostion[1], handleVal = valueAndPostion[0];
                    }
                    this.handlePos1 = handlepos, this.handleVal1 = handleVal;
                }
                this.firstHandle.classList.add(classNames_sliderActiveHandle);
            }
            if ("Range" === this.type) if (1 === this.activeHandle) {
                if (this.firstHandle.classList.add(classNames_sliderActiveHandle), !(this.limits.enabled && this.limits.startHandleFixed || (handlepos > this.handlePos2 && (handlepos = this.handlePos2, 
                handleVal = this.handleVal2), handlepos === this.preHandlePos1))) {
                    if (this.limits.enabled) {
                        handleVal = (value = this.getLimitValueAndPosition(handleVal, this.limits.minStart, this.limits.minEnd))[0], 
                        handlepos = value[1];
                    }
                    this.handlePos1 = this.preHandlePos1 = handlepos, this.handleVal1 = handleVal, this.activeHandle = 1;
                }
            } else if (2 === this.activeHandle && (this.secondHandle.classList.add(classNames_sliderActiveHandle), 
            !(this.limits.enabled && this.limits.endHandleFixed || (handlepos < this.handlePos1 && (handlepos = this.handlePos1, 
            handleVal = this.handleVal1), handlepos === this.preHandlePos2)))) {
                if (this.limits.enabled) {
                    var value;
                    handleVal = (value = this.getLimitValueAndPosition(handleVal, this.limits.maxStart, this.limits.maxEnd))[0], 
                    handlepos = value[1];
                }
                this.handlePos2 = this.preHandlePos2 = handlepos, this.handleVal2 = handleVal, this.activeHandle = 2;
            }
            if (this.checkRepeatedValue(handleVal)) {
                this.getHandle().style.transition = this.scaleTransform, "Default" !== this.type && (this.rangeBar.style.transition = "none"), 
                this.setHandlePosition(), !this.isMaterial || this.tooltip.isVisible || this.getHandle().classList.contains(classNames_sliderTabHandle) || this.materialChange();
                var tooltipElement = 1 === this.activeHandle ? this.firstTooltipElement : this.secondTooltipElement;
                this.tooltip.isVisible && (this.isMaterial ? tooltipElement.classList.contains(classNames_materialTooltipOpen) ? this.refreshTooltipOnMove() : this.openMaterialTooltip() : tooltipElement ? this.refreshTooltipOnMove() : this.openTooltip()), 
                "Default" !== this.type && this.setRangeBar();
            }
        }, Slider.prototype.dragRangeBarUp = function(event) {
            this.changeEvent("changed"), this.tooltip.isVisible && ("Always" === this.tooltip.showOn || this.isMaterial || (this.activeHandle = 1, 
            this.firstTooltipObj.animation = {
                open: {
                    effect: "None"
                },
                close: {
                    effect: "FadeOut",
                    duration: 500
                }
            }, this.closeTooltip(), this.activeHandle = 2, this.secondTooltipObj.animation = {
                open: {
                    effect: "None"
                },
                close: {
                    effect: "FadeOut",
                    duration: 500
                }
            }, this.closeTooltip())), EventHandler.remove(document, "mousemove touchmove", this.dragRangeBarMove), 
            EventHandler.remove(document, "mouseup touchend", this.dragRangeBarUp);
        }, Slider.prototype.checkRepeatedValue = function(currentValue) {
            if ("Range" === this.type) {
                if (currentValue === (this.enableRtl && "Vertical" !== this.orientation ? 1 === this.activeHandle ? this.previousVal[1] : this.previousVal[0] : 1 === this.activeHandle ? this.previousVal[0] : this.previousVal[1])) return 0;
            } else if (currentValue === this.previousVal) return 0;
            return 1;
        }, Slider.prototype.refreshTooltip = function() {
            this.tooltip.isVisible && this.firstTooltipObj && (this.tooltipValue(), this.firstTooltipObj.refresh(this.firstHandle), 
            "Range" === this.type && this.secondTooltipObj.refresh(this.secondHandle));
        }, Slider.prototype.openTooltip = function() {
            this.tooltip.isVisible && this.firstTooltipObj && (this.tooltipValue(), this.isMaterial ? this.openMaterialTooltip() : 1 === this.activeHandle ? this.firstTooltipObj.open(this.firstHandle) : this.secondTooltipObj.open(this.secondHandle));
        }, Slider.prototype.keyDown = function(event) {
            switch (event.keyCode) {
              case 37:
              case 38:
              case 39:
              case 40:
              case 33:
              case 34:
              case 36:
              case 35:
                event.preventDefault(), this.buttonClick(event), this.tooltip.isVisible && "Always" !== this.tooltip.showOn && !this.isMaterial && this.closeTooltip();
            }
        }, Slider.prototype.wireButtonEvt = function(destroy) {
            destroy ? (EventHandler.remove(this.firstBtn, "mouseleave touchleave", this.buttonFocusOut), 
            EventHandler.remove(this.secondBtn, "mouseleave touchleave", this.buttonFocusOut), 
            EventHandler.remove(this.firstBtn, "mousedown touchstart", this.repeatHandlerMouse), 
            EventHandler.remove(this.firstBtn, "mouseup mouseleave touchup touchend", this.repeatHandlerUp), 
            EventHandler.remove(this.secondBtn, "mousedown touchstart", this.repeatHandlerMouse), 
            EventHandler.remove(this.secondBtn, "mouseup mouseleave touchup touchend", this.repeatHandlerUp), 
            EventHandler.remove(this.firstBtn, "focusout", this.sliderFocusOut), EventHandler.remove(this.secondBtn, "focusout", this.sliderFocusOut)) : (EventHandler.add(this.firstBtn, "mouseleave touchleave", this.buttonFocusOut, this), 
            EventHandler.add(this.secondBtn, "mouseleave touchleave", this.buttonFocusOut, this), 
            EventHandler.add(this.firstBtn, "mousedown touchstart", this.repeatHandlerMouse, this), 
            EventHandler.add(this.firstBtn, "mouseup mouseleave touchup touchend", this.repeatHandlerUp, this), 
            EventHandler.add(this.secondBtn, "mousedown touchstart", this.repeatHandlerMouse, this), 
            EventHandler.add(this.secondBtn, "mouseup mouseleave touchup touchend", this.repeatHandlerUp, this), 
            EventHandler.add(this.firstBtn, "focusout", this.sliderFocusOut, this), EventHandler.add(this.secondBtn, "focusout", this.sliderFocusOut, this));
        }, Slider.prototype.wireEvents = function() {
            this.onresize = this.onResize.bind(this), window.addEventListener("resize", this.onresize), 
            this.enabled && !this.readonly && (EventHandler.add(this.element, "mousedown touchstart", this.sliderDown, this), 
            EventHandler.add(this.sliderContainer, "keydown", this.keyDown, this), EventHandler.add(this.sliderContainer, "keyup", this.keyUp, this), 
            EventHandler.add(this.element, "focusout", this.sliderFocusOut, this), EventHandler.add(this.sliderContainer, "mouseover mouseout touchstart touchend", this.hover, this), 
            this.wireFirstHandleEvt(!1), "Range" === this.type && this.wireSecondHandleEvt(!1), 
            this.showButtons && this.wireButtonEvt(!1), this.wireMaterialTooltipEvent(!1));
        }, Slider.prototype.unwireEvents = function() {
            EventHandler.remove(this.element, "mousedown touchstart", this.sliderDown), EventHandler.remove(this.sliderContainer, "keydown", this.keyDown), 
            EventHandler.remove(this.sliderContainer, "keyup", this.keyUp), EventHandler.remove(this.element, "focusout", this.sliderFocusOut), 
            EventHandler.remove(this.sliderContainer, "mouseover mouseout touchstart touchend", this.hover), 
            this.wireFirstHandleEvt(!0), "Range" === this.type && this.wireSecondHandleEvt(!0), 
            this.showButtons && this.wireButtonEvt(!0), this.wireMaterialTooltipEvent(!0);
        }, Slider.prototype.keyUp = function(event) {
            if (9 === event.keyCode && event.target.classList.contains(classNames_sliderHandle) && (this.focusSliderElement(), 
            !event.target.classList.contains(classNames_sliderTabHandle))) {
                this.element.querySelector("." + classNames_sliderTabHandle) && this.element.querySelector("." + classNames_sliderTabHandle).classList.remove(classNames_sliderTabHandle), 
                event.target.classList.add(classNames_sliderTabHandle);
                var parentElement = event.target.parentElement;
                parentElement === this.element && (parentElement.querySelector("." + classNames_sliderTrack).classList.add(classNames_sliderTabTrack), 
                "Range" !== this.type && "MinRange" !== this.type || parentElement.querySelector("." + classNames_rangeBar).classList.add(classNames_sliderTabRange)), 
                "Range" === this.type && (event.target.previousSibling.classList.contains(classNames_sliderHandle) ? this.activeHandle = 2 : this.activeHandle = 1), 
                this.getHandle().focus(), this.tooltipAnimation(), this.tooltip.isVisible && "Always" !== this.tooltip.showOn && !this.isMaterial && this.closeTooltip();
            }
            this.changeEvent("changed");
        }, Slider.prototype.hover = function(event) {
            isNullOrUndefined(event) || ("mouseover" === event.type || "touchmove" === event.type || "mousemove" === event.type || "pointermove" === event.type || "touchstart" === event.type ? this.sliderContainer.classList.add(classNames_sliderHover) : this.sliderContainer.classList.remove(classNames_sliderHover));
        }, Slider.prototype.sliderFocusOut = function(event) {
            var _this = this;
            if (event.relatedTarget !== this.secondHandle && event.relatedTarget !== this.firstHandle && event.relatedTarget !== this.element && event.relatedTarget !== this.firstBtn && event.relatedTarget !== this.secondBtn) {
                if (this.isMaterial && this.tooltip.isVisible) {
                    var transformProperties_1 = this.getTooltipTransformProperties(this.previousTooltipClass), tooltipElement = "Range" !== this.type ? [ this.firstTooltipElement ] : [ this.firstTooltipElement, this.secondTooltipElement ], hiddenHandle_1 = "Range" !== this.type ? [ this.firstHandle ] : [ this.firstHandle, this.secondHandle ], handle_1 = "Range" !== this.type ? [ this.firstMaterialHandle ] : [ this.firstMaterialHandle, this.secondMaterialHandle ];
                    tooltipElement.forEach(function(tooltipElement, index) {
                        tooltipElement && (tooltipElement.style.transition = _this.scaleTransform, tooltipElement.firstChild.classList.remove(classNames_materialTooltipShow), 
                        tooltipElement.firstChild.classList.add(classNames_materialTooltipHide), hiddenHandle_1[index].style.cursor = "-webkit-grab", 
                        hiddenHandle_1[index].style.cursor = "grab", handle_1[index].style.transform = "scale(1)", 
                        tooltipElement.classList.remove(classNames_materialTooltipOpen), tooltipElement.firstElementChild.innerText.length > 4 ? tooltipElement.style.transform = transformProperties_1.translate + " scale(0.01)" : tooltipElement.style.transform = transformProperties_1.translate + " " + transformProperties_1.rotate + " scale(0.01)", 
                        setTimeout(function() {
                            tooltipElement.style.transition = "none";
                        }, 2500));
                    });
                }
                this.element.querySelector("." + classNames_sliderTabHandle) && this.element.querySelector("." + classNames_sliderTabHandle).classList.remove(classNames_sliderTabHandle), 
                this.element.querySelector("." + classNames_sliderTabTrack) && (this.element.querySelector("." + classNames_sliderTabTrack).classList.remove(classNames_sliderTabTrack), 
                "Range" !== this.type && "MinRange" !== this.type || !this.element.querySelector("." + classNames_sliderTabRange) || this.element.querySelector("." + classNames_sliderTabRange).classList.remove(classNames_sliderTabRange)), 
                this.hiddenInput.focus(), this.hiddenInput.blur(), this.isElementFocused = !1;
            }
        }, Slider.prototype.closeTooltip = function() {
            this.tooltip.isVisible && (this.tooltipValue(), 1 === this.activeHandle ? this.firstTooltipObj.close() : this.secondTooltipObj.close());
        }, Slider.prototype.removeElement = function(element) {
            element.parentNode && element.parentNode.removeChild(element);
        }, Slider.prototype.changeSliderType = function(type) {
            this.isMaterial && this.firstMaterialHandle && (this.sliderContainer.classList.remove(classNames_materialSlider), 
            this.removeElement(this.firstMaterialHandle), this.firstTooltipElement = void 0, 
            this.firstHandleTooltipPosition = void 0, this.secondMaterialHandle && (this.removeElement(this.secondMaterialHandle), 
            this.secondTooltipElement = void 0, this.secondHandleTooltipPosition = void 0)), 
            this.tooltip.isVisible && this.isMaterial && this.sliderContainer.classList.add(classNames_materialSlider), 
            this.removeElement(this.firstHandle), "Default" !== type && ("Range" === type && this.removeElement(this.secondHandle), 
            this.removeElement(this.rangeBar)), this.tooltip.isVisible && !isNullOrUndefined(this.firstTooltipObj) && (this.firstTooltipObj.destroy(), 
            "Range" !== type || isNullOrUndefined(this.secondTooltipObj) || this.secondTooltipObj.destroy()), 
            (this.limits.enabled && "MinRange" === type || "Default" === type) && (isNullOrUndefined(this.limitBarFirst) || this.removeElement(this.limitBarFirst)), 
            "Range" === type && this.limits.enabled && (isNullOrUndefined(this.limitBarFirst) || isNullOrUndefined(this.limitBarSecond) || (this.removeElement(this.limitBarFirst), 
            this.removeElement(this.limitBarSecond))), this.createRangeBar(), this.limits.enabled && this.createLimitBar(), 
            this.setHandler(), this.setOrientClass(), this.wireFirstHandleEvt(!1), "Range" === this.type && this.wireSecondHandleEvt(!1), 
            this.setValue(), this.tooltip.isVisible && (this.renderTooltip(), this.wireMaterialTooltipEvent(!1)), 
            this.updateConfig();
        }, Slider.prototype.changeRtl = function() {
            if (this.enableRtl || "Range" !== this.type || (this.value = [ this.handleVal2, this.handleVal1 ]), 
            this.updateConfig(), this.tooltip.isVisible && (this.firstTooltipObj.refresh(this.firstHandle), 
            "Range" === this.type && this.secondTooltipObj.refresh(this.secondHandle)), this.showButtons) {
                var enabledRTL = this.enableRtl && "Vertical" !== this.orientation;
                attributes(enabledRTL ? this.secondBtn : this.firstBtn, {
                    "aria-label": "Decrease",
                    title: "Decrease"
                }), attributes(enabledRTL ? this.firstBtn : this.secondBtn, {
                    "aria-label": "Increase",
                    title: "Increase"
                });
            }
        }, Slider.prototype.changeOrientation = function() {
            this.changeSliderType(this.type);
        }, Slider.prototype.updateConfig = function() {
            this.setEnableRTL(), this.setValue(), this.tooltip.isVisible && this.refreshTooltip(), 
            "None" !== this.ticks.placement && this.ul && (this.removeElement(this.ul), this.renderScale()), 
            this.limitsPropertyChange();
        }, Slider.prototype.limitsPropertyChange = function() {
            this.limits.enabled ? (isNullOrUndefined(this.limitBarFirst) && "Range" !== this.type && this.createLimitBar(), 
            isNullOrUndefined(this.limitBarFirst) && isNullOrUndefined(this.limitBarSecond) && "Range" === this.type && this.createLimitBar(), 
            this.setLimitBar(), this.setValue()) : (isNullOrUndefined(this.limitBarFirst) || detach(this.limitBarFirst), 
            isNullOrUndefined(this.limitBarSecond) || detach(this.limitBarSecond));
        }, Slider.prototype.getPersistData = function() {
            return this.addOnPersist([ "value" ]);
        }, Slider.prototype.destroy = function() {
            _super.prototype.destroy.call(this), this.unwireEvents(), window.removeEventListener("resize", this.onresize), 
            removeClass([ this.sliderContainer ], [ classNames_sliderDisabled ]), this.firstHandle.removeAttribute("aria-orientation"), 
            "Range" === this.type && this.secondHandle.removeAttribute("aria-orientation"), 
            this.sliderContainer.parentNode.insertBefore(this.element, this.sliderContainer), 
            detach(this.sliderContainer), this.tooltip.isVisible && (this.firstTooltipObj.destroy(), 
            "Range" !== this.type || isNullOrUndefined(this.secondTooltipObj) || this.secondTooltipObj.destroy()), 
            this.element.innerHTML = "";
        }, Slider.prototype.onPropertyChanged = function(newProp, oldProp) {
            for (var _this = this, _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                switch (_a[_i]) {
                  case "cssClass":
                    this.setCSSClass(oldProp.cssClass);
                    break;

                  case "value":
                    isNullOrUndefined(oldProp.value) || isNullOrUndefined(newProp.value) || oldProp.value.toString() !== newProp.value.toString() && (this.setValue(), 
                    this.refreshTooltip(), "Range" === this.type && (oldProp.value[0] === newProp.value[0] ? this.activeHandle = 2 : this.activeHandle = 1));
                    break;

                  case "min":
                  case "step":
                  case "max":
                    this.setMinMaxValue();
                    break;

                  case "tooltip":
                    isNullOrUndefined(newProp.tooltip) || isNullOrUndefined(oldProp.tooltip) || this.setTooltip();
                    break;

                  case "type":
                    this.changeSliderType(oldProp.type), this.setZindex();
                    break;

                  case "enableRtl":
                    oldProp.enableRtl !== newProp.enableRtl && "Vertical" !== this.orientation && (this.rtl = oldProp.enableRtl, 
                    this.changeRtl());
                    break;

                  case "limits":
                    this.limitsPropertyChange();
                    break;

                  case "orientation":
                    this.changeOrientation();
                    break;

                  case "ticks":
                    isNullOrUndefined(this.sliderContainer.querySelector("." + classNames_scale)) || (detach(this.ul), 
                    Array.prototype.forEach.call(this.sliderContainer.classList, function(className) {
                        className.match(/e-scale-/) && _this.sliderContainer.classList.remove(className);
                    })), "None" !== this.ticks.placement && (this.renderScale(), this.setZindex());
                    break;

                  case "locale":
                    this.showButtons && this.buttonTitle();
                    break;

                  case "showButtons":
                    newProp.showButtons ? (this.setButtons(), this.onResize(), this.enabled && !this.readonly && this.wireButtonEvt(!1)) : this.firstBtn && this.secondBtn && (this.sliderContainer.removeChild(this.firstBtn), 
                    this.sliderContainer.removeChild(this.secondBtn), this.firstBtn = void 0, this.secondBtn = void 0);
                    break;

                  case "enabled":
                    this.setEnabled();
                    break;

                  case "readonly":
                    this.setReadOnly();
                    break;

                  case "customValue":
                    this.setValue(), this.onResize();
                }
            }
        }, Slider.prototype.setReadOnly = function() {
            this.readonly ? (this.unwireEvents(), this.sliderContainer.classList.add(classNames_readonly)) : (this.wireEvents(), 
            this.sliderContainer.classList.remove(classNames_readonly));
        }, Slider.prototype.setMinMaxValue = function() {
            var _this = this;
            this.setValue(), this.refreshTooltip(), isNullOrUndefined(this.sliderContainer.querySelector("." + classNames_scale)) || this.ul && (detach(this.ul), 
            Array.prototype.forEach.call(this.sliderContainer.classList, function(className) {
                className.match(/e-scale-/) && _this.sliderContainer.classList.remove(className);
            })), "None" !== this.ticks.placement && (this.renderScale(), this.setZindex());
        }, Slider.prototype.setZindex = function() {
            this.zIndex = 6, isNullOrUndefined(this.ticks) || "None" === this.ticks.placement || (this.ul.style.zIndex = this.zIndex + -7 + "", 
            this.element.style.zIndex = this.zIndex + 2 + ""), this.isMaterial || isNullOrUndefined(this.ticks) || "Both" !== this.ticks.placement || (this.element.style.zIndex = this.zIndex + 2 + ""), 
            this.firstHandle.style.zIndex = this.zIndex + 3 + "", "Range" === this.type && (this.secondHandle.style.zIndex = this.zIndex + 4 + "");
        }, Slider.prototype.setTooltip = function() {
            this.changeSliderType(this.type);
        }, Slider.prototype.getModuleName = function() {
            return "slider";
        }, __decorate([ Property(null) ], Slider.prototype, "value", void 0), __decorate([ Property(null) ], Slider.prototype, "customValues", void 0), 
        __decorate([ Property(1) ], Slider.prototype, "step", void 0), __decorate([ Property(0) ], Slider.prototype, "min", void 0), 
        __decorate([ Property(100) ], Slider.prototype, "max", void 0), __decorate([ Property(!1) ], Slider.prototype, "readonly", void 0), 
        __decorate([ Property("Default") ], Slider.prototype, "type", void 0), __decorate([ Complex({}, TicksData) ], Slider.prototype, "ticks", void 0), 
        __decorate([ Complex({}, LimitData) ], Slider.prototype, "limits", void 0), __decorate([ Property(!0) ], Slider.prototype, "enabled", void 0), 
        __decorate([ Property(!1) ], Slider.prototype, "enableRtl", void 0), __decorate([ Complex({}, TooltipData) ], Slider.prototype, "tooltip", void 0), 
        __decorate([ Property(!1) ], Slider.prototype, "showButtons", void 0), __decorate([ Property(!0) ], Slider.prototype, "enableAnimation", void 0), 
        __decorate([ Property("Horizontal") ], Slider.prototype, "orientation", void 0), 
        __decorate([ Property("") ], Slider.prototype, "cssClass", void 0), __decorate([ Event() ], Slider.prototype, "created", void 0), 
        __decorate([ Event() ], Slider.prototype, "change", void 0), __decorate([ Event() ], Slider.prototype, "changed", void 0), 
        __decorate([ Event() ], Slider.prototype, "renderingTicks", void 0), __decorate([ Event() ], Slider.prototype, "renderedTicks", void 0), 
        __decorate([ Event() ], Slider.prototype, "tooltipChange", void 0), Slider = __decorate([ NotifyPropertyChanges ], Slider);
    }(Component), _slider = Object.freeze({
        TicksData: TicksData,
        LimitData: LimitData,
        TooltipData: TooltipData,
        Slider: Slider
    }), fixedParent$1 = !1, __extends$15 = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate$15 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, PositionData$1 = function(_super) {
        function PositionData() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends$15(PositionData, _super), __decorate$15([ Property("left") ], PositionData.prototype, "X", void 0), 
        __decorate$15([ Property("top") ], PositionData.prototype, "Y", void 0), PositionData;
    }(ChildProperty), CLASSNAMES$__ROOT = "e-popup", CLASSNAMES$__RTL = "e-rtl", CLASSNAMES$__OPEN = "e-popup-open", CLASSNAMES$__CLOSE = "e-popup-close", Popup$1 = function(_super) {
        function Popup(element, options) {
            var _this = _super.call(this, options, element) || this;
            return _this.fixedParent = !1, _this;
        }
        return __extends$15(Popup, _super), Popup.prototype.onPropertyChanged = function(newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                switch (_a[_i]) {
                  case "width":
                    setStyleAttribute(this.element, {
                        width: formatUnit(newProp.width)
                    });
                    break;

                  case "height":
                    setStyleAttribute(this.element, {
                        height: formatUnit(newProp.height)
                    });
                    break;

                  case "zIndex":
                    setStyleAttribute(this.element, {
                        zIndex: newProp.zIndex
                    });
                    break;

                  case "enableRtl":
                    this.setEnableRtl();
                    break;

                  case "position":
                  case "relateTo":
                    this.refreshPosition();
                    break;

                  case "offsetX":
                    var x = newProp.offsetX - oldProp.offsetX;
                    this.element.style.left = (parseInt(this.element.style.left, 10) + x).toString() + "px";
                    break;

                  case "offsetY":
                    var y = newProp.offsetY - oldProp.offsetY;
                    this.element.style.top = (parseInt(this.element.style.top, 10) + y).toString() + "px";
                    break;

                  case "content":
                    this.setContent();
                    break;

                  case "actionOnScroll":
                    "none" !== newProp.actionOnScroll ? this.wireScrollEvents() : this.unwireScrollEvents();
                }
            }
        }, Popup.prototype.getModuleName = function() {
            return "popup";
        }, Popup.prototype.getPersistData = function() {
            return this.addOnPersist([]);
        }, Popup.prototype.destroy = function() {
            this.element.classList.remove(CLASSNAMES$__ROOT, CLASSNAMES$__RTL), this.unwireEvents(), 
            _super.prototype.destroy.call(this);
        }, Popup.prototype.render = function() {
            this.element.classList.add(CLASSNAMES$__ROOT);
            var styles = {};
            1e3 !== this.zIndex && (styles.zIndex = this.zIndex), "auto" !== this.width && (styles.width = formatUnit(this.width)), 
            "auto" !== this.height && (styles.height = formatUnit(this.height)), setStyleAttribute(this.element, styles), 
            this.setEnableRtl(), this.setContent(), this.wireEvents();
        }, Popup.prototype.wireEvents = function() {
            Browser.isDevice && EventHandler.add(window, "orientationchange", this.orientationOnChange, this), 
            "none" !== this.actionOnScroll && this.wireScrollEvents();
        }, Popup.prototype.wireScrollEvents = function() {
            if (this.getRelateToElement()) for (var _i = 0, _a = this.getScrollableParent(this.getRelateToElement()); _i < _a.length; _i++) {
                var parent_1 = _a[_i];
                EventHandler.add(parent_1, "scroll", this.scrollRefresh, this);
            }
        }, Popup.prototype.unwireEvents = function() {
            Browser.isDevice && EventHandler.remove(window, "orientationchange", this.orientationOnChange), 
            "none" !== this.actionOnScroll && this.unwireScrollEvents();
        }, Popup.prototype.unwireScrollEvents = function() {
            if (this.getRelateToElement()) for (var _i = 0, _a = this.getScrollableParent(this.getRelateToElement()); _i < _a.length; _i++) {
                var parent_2 = _a[_i];
                EventHandler.remove(parent_2, "scroll", this.scrollRefresh);
            }
        }, Popup.prototype.getRelateToElement = function() {
            var relateToElement = "" === this.relateTo || isNullOrUndefined(this.relateTo) ? document.body : this.relateTo;
            return this.setProperties({
                relateTo: relateToElement
            }, !0), "string" == typeof this.relateTo ? document.querySelector(this.relateTo) : this.relateTo;
        }, Popup.prototype.scrollRefresh = function(e) {
            if ("reposition" === this.actionOnScroll ? this.element.offsetParent === e.target || this.element.offsetParent && "BODY" === this.element.offsetParent.tagName && null == e.target.parentElement || this.refreshPosition() : "hide" === this.actionOnScroll && this.hide(), 
            "none" !== this.actionOnScroll && this.getRelateToElement()) {
                var targetVisible = this.isElementOnViewport(this.getRelateToElement(), e.target);
                targetVisible || this.targetInvisibleStatus ? targetVisible && (this.targetInvisibleStatus = !1) : (this.trigger("targetExitViewport"), 
                this.targetInvisibleStatus = !0);
            }
        }, Popup.prototype.isElementOnViewport = function(relateToElement, scrollElement) {
            for (var scrollParents = this.getScrollableParent(relateToElement), parent_3 = 0; parent_3 < scrollParents.length; parent_3++) if (!this.isElementVisible(relateToElement, scrollParents[parent_3])) return !1;
            return !0;
        }, Popup.prototype.isElementVisible = function(relateToElement, scrollElement) {
            var rect = relateToElement.getBoundingClientRect();
            if (!rect.height || !rect.width) return !1;
            if (scrollElement.getBoundingClientRect) {
                var parent_4 = scrollElement.getBoundingClientRect();
                return !(rect.bottom < parent_4.top || rect.bottom > parent_4.bottom || rect.right > parent_4.right || rect.left < parent_4.left);
            }
            var win = window, windowView_top = win.scrollY, windowView_left = win.scrollX, windowView_right = win.scrollX + win.outerWidth, windowView_bottom = win.scrollY + win.outerHeight, off = calculatePosition$1(relateToElement), ele_top = off.top, ele_left = off.left, ele_right = off.left + rect.width, ele_bottom = off.top + rect.height;
            return windowView_bottom - ele_top > 0 && windowView_right - ele_left > 0 && ele_right - windowView_left > 0 && ele_bottom - windowView_top > 0;
        }, Popup.prototype.preRender = function() {}, Popup.prototype.setEnableRtl = function() {
            this.reposition(), this.enableRtl ? this.element.classList.add(CLASSNAMES$__RTL) : this.element.classList.remove(CLASSNAMES$__RTL);
        }, Popup.prototype.setContent = function() {
            isNullOrUndefined(this.content) || (this.element.innerHTML = "", "string" == typeof this.content ? this.element.textContent = this.content : this.element.appendChild(this.content));
        }, Popup.prototype.orientationOnChange = function() {
            var _this = this;
            setTimeout(function() {
                _this.refreshPosition();
            }, 200);
        }, Popup.prototype.refreshPosition = function(target) {
            isNullOrUndefined(target) || this.checkFixedParent(target), this.reposition(), this.checkCollision();
        }, Popup.prototype.reposition = function() {
            var pos, relateToElement = this.getRelateToElement();
            if ("number" == typeof this.position.X && "number" == typeof this.position.Y) pos = {
                left: this.position.X,
                top: this.position.Y
            }; else if (relateToElement) {
                var display = this.element.style.display;
                this.element.style.display = "block", pos = this.getAnchorPosition(relateToElement, this.element, this.position, this.offsetX, this.offsetY), 
                this.element.style.display = display;
            } else pos = {
                left: 0,
                top: 0
            };
            this.element.style.left = pos.left + "px", this.element.style.top = pos.top + "px";
        }, Popup.prototype.getAnchorPosition = function(anchorEle, ele, position, offsetX, offsetY) {
            var eleRect = ele.getBoundingClientRect(), anchorRect = anchorEle.getBoundingClientRect(), anchor = anchorEle, anchorPos = {
                left: 0,
                top: 0
            };
            switch (anchorPos = ele.offsetParent && "BODY" === ele.offsetParent.tagName && "BODY" === anchorEle.tagName ? calculatePosition$1(anchorEle) : function(anchor, element) {
                var fixedElement = !1, anchorPos = {
                    left: 0,
                    top: 0
                }, tempAnchor = anchor;
                if (!anchor || !element) return anchorPos;
                for (isNullOrUndefined(element.offsetParent) && "fixed" === element.style.position && (fixedElement = !0); (element.offsetParent || fixedElement) && anchor && element.offsetParent !== anchor; ) anchorPos.left += anchor.offsetLeft, 
                anchorPos.top += anchor.offsetTop, anchor = anchor.offsetParent;
                for (anchor = tempAnchor; (element.offsetParent || fixedElement) && anchor && element.offsetParent !== anchor; ) anchorPos.left -= anchor.scrollLeft, 
                anchorPos.top -= anchor.scrollTop, anchor = anchor.parentElement;
                return anchorPos;
            }(anchor, ele), position.X) {
              default:
              case "left":
                break;

              case "center":
                "container" === this.targetType ? anchorPos.left += anchorRect.width / 2 - eleRect.width / 2 : anchorPos.left += anchorRect.width / 2;
                break;

              case "right":
                "container" === this.targetType ? anchorPos.left += anchorRect.width - eleRect.width : anchorPos.left += anchorRect.width;
            }
            switch (position.Y) {
              default:
              case "top":
                break;

              case "center":
                "container" === this.targetType ? anchorPos.top += anchorRect.height / 2 - eleRect.height / 2 : anchorPos.top += anchorRect.height / 2;
                break;

              case "bottom":
                "container" === this.targetType ? anchorPos.top += anchorRect.height - eleRect.height : anchorPos.top += anchorRect.height;
            }
            return anchorPos.left += offsetX, anchorPos.top += offsetY, anchorPos;
        }, Popup.prototype.callFlip = function(param) {
            var relateToElement = this.getRelateToElement();
            flip$1(this.element, relateToElement, this.offsetX, this.offsetY, this.position.X, this.position.Y, this.viewPortElement, param, this.fixedParent);
        }, Popup.prototype.callFit = function(param) {
            if (0 !== isCollide$1(this.element, this.viewPortElement).length) if (isNullOrUndefined(this.viewPortElement)) {
                var data = fit$1(this.element, this.viewPortElement, param);
                this.element.style.left = data.left + "px", this.element.style.top = data.top + "px";
            } else {
                var elementRect = this.element.getBoundingClientRect(), viewPortRect = this.viewPortElement.getBoundingClientRect();
                param && !0 === param.Y && (viewPortRect.top > elementRect.top ? this.element.style.top = "0px" : viewPortRect.bottom < elementRect.bottom && (this.element.style.top = parseInt(this.element.style.top, 10) - (elementRect.bottom - viewPortRect.bottom) + "px")), 
                param && !0 === param.X && (viewPortRect.right < elementRect.right ? this.element.style.left = parseInt(this.element.style.left, 10) - (elementRect.right - viewPortRect.right) + "px" : viewPortRect.left > elementRect.left && (this.element.style.left = parseInt(this.element.style.left, 10) + (viewPortRect.left - elementRect.left) + "px"));
            }
        }, Popup.prototype.checkCollision = function() {
            var horz = this.collision.X, vert = this.collision.Y;
            "none" === horz && "none" === vert || ("flip" === horz && "flip" === vert ? this.callFlip({
                X: !0,
                Y: !0
            }) : "fit" === horz && "fit" === vert ? this.callFit({
                X: !0,
                Y: !0
            }) : ("flip" === horz ? this.callFlip({
                X: !0,
                Y: !1
            }) : "flip" === vert && this.callFlip({
                Y: !0,
                X: !1
            }), "fit" === horz ? this.callFit({
                X: !0,
                Y: !1
            }) : "fit" === vert && this.callFit({
                X: !1,
                Y: !0
            })));
        }, Popup.prototype.show = function(animationOptions, relativeElement) {
            var _this = this;
            if (1e3 === this.zIndex || !isNullOrUndefined(relativeElement)) {
                var zIndexElement = isNullOrUndefined(relativeElement) ? this.element : relativeElement;
                this.zIndex = function(element) {
                    for (var parent = element.parentElement, parentZindex = []; parent && "BODY" !== parent.tagName; ) {
                        var index = document.defaultView.getComputedStyle(parent, null).getPropertyValue("z-index"), position = document.defaultView.getComputedStyle(parent, null).getPropertyValue("position");
                        "auto" !== index && "static" !== position && parentZindex.push(index), parent = parent.parentElement;
                    }
                    for (var childrenZindex = [], i = 0; i < document.body.children.length; i++) element.isEqualNode(document.body.children[i]) || (index = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue("z-index"), 
                    position = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue("position"), 
                    "auto" !== index && "static" !== position && childrenZindex.push(index));
                    childrenZindex.push("999");
                    var siblingsZindex = [];
                    if (!isNullOrUndefined(element.parentElement) && "BODY" !== element.parentElement.tagName) {
                        var childNodes = [].slice.call(element.parentElement.children);
                        for (i = 0; i < childNodes.length; i++) index = document.defaultView.getComputedStyle(childNodes[i], null).getPropertyValue("z-index"), 
                        position = document.defaultView.getComputedStyle(childNodes[i], null).getPropertyValue("position"), 
                        "auto" !== index && "static" !== position && siblingsZindex.push(index);
                    }
                    var finalValue = parentZindex.concat(childrenZindex, siblingsZindex);
                    return Math.max.apply(Math, finalValue) + 1;
                }(zIndexElement), setStyleAttribute(this.element, {
                    zIndex: this.zIndex
                });
            }
            animationOptions = isNullOrUndefined(animationOptions) || "object" != typeof animationOptions ? this.showAnimation : animationOptions, 
            "none" === this.collision.X && "none" === this.collision.Y || (removeClass([ this.element ], CLASSNAMES$__CLOSE), 
            addClass([ this.element ], CLASSNAMES$__OPEN), this.checkCollision(), removeClass([ this.element ], CLASSNAMES$__OPEN), 
            addClass([ this.element ], CLASSNAMES$__CLOSE)), isNullOrUndefined(animationOptions) ? (removeClass([ this.element ], CLASSNAMES$__CLOSE), 
            addClass([ this.element ], CLASSNAMES$__OPEN), this.trigger("open")) : (animationOptions.begin = function() {
                _this.isDestroyed || (removeClass([ _this.element ], CLASSNAMES$__CLOSE), addClass([ _this.element ], CLASSNAMES$__OPEN));
            }, animationOptions.end = function() {
                _this.isDestroyed || _this.trigger("open");
            }, new Animation(animationOptions).animate(this.element));
        }, Popup.prototype.hide = function(animationOptions) {
            var _this = this;
            isNullOrUndefined(animationOptions = isNullOrUndefined(animationOptions) || "object" != typeof animationOptions ? this.hideAnimation : animationOptions) ? (removeClass([ this.element ], CLASSNAMES$__OPEN), 
            addClass([ this.element ], CLASSNAMES$__CLOSE), this.trigger("close")) : (animationOptions.end = function() {
                _this.isDestroyed || (removeClass([ _this.element ], CLASSNAMES$__OPEN), addClass([ _this.element ], CLASSNAMES$__CLOSE), 
                _this.trigger("close"));
            }, new Animation(animationOptions).animate(this.element));
        }, Popup.prototype.getScrollableParent = function(element) {
            return this.checkFixedParent(element), function(element, fixedParent) {
                for (var eleStyle = getComputedStyle(element), scrollParents = [], overflowRegex = /(auto|scroll)/, parent = element.parentElement; parent && "HTML" !== parent.tagName; ) {
                    var parentStyle = getComputedStyle(parent);
                    "absolute" === eleStyle.position && "static" === parentStyle.position || !overflowRegex.test(parentStyle.overflow + parentStyle.overflowY + parentStyle.overflowX) || scrollParents.push(parent), 
                    parent = parent.parentElement;
                }
                return fixedParent || scrollParents.push(document), scrollParents;
            }(element, this.fixedParent);
        }, Popup.prototype.checkFixedParent = function(element) {
            for (var parent = element.parentElement; parent && "HTML" !== parent.tagName; ) {
                var parentStyle = getComputedStyle(parent);
                "fixed" === parentStyle.position && this.element.offsetParent && "BODY" === this.element.offsetParent.tagName && (this.element.style.position = "fixed", 
                this.fixedParent = !0), parent = parent.parentElement, isNullOrUndefined(this.element.offsetParent) && "fixed" === parentStyle.position && "fixed" === this.element.style.position && (this.fixedParent = !0);
            }
        }, __decorate$15([ Property("auto") ], Popup.prototype, "height", void 0), __decorate$15([ Property("auto") ], Popup.prototype, "width", void 0), 
        __decorate$15([ Property(null) ], Popup.prototype, "content", void 0), __decorate$15([ Property("container") ], Popup.prototype, "targetType", void 0), 
        __decorate$15([ Property(null) ], Popup.prototype, "viewPortElement", void 0), __decorate$15([ Property({
            X: "none",
            Y: "none"
        }) ], Popup.prototype, "collision", void 0), __decorate$15([ Property("") ], Popup.prototype, "relateTo", void 0), 
        __decorate$15([ Complex({}, PositionData$1) ], Popup.prototype, "position", void 0), 
        __decorate$15([ Property(0) ], Popup.prototype, "offsetX", void 0), __decorate$15([ Property(0) ], Popup.prototype, "offsetY", void 0), 
        __decorate$15([ Property(1e3) ], Popup.prototype, "zIndex", void 0), __decorate$15([ Property(!1) ], Popup.prototype, "enableRtl", void 0), 
        __decorate$15([ Property("reposition") ], Popup.prototype, "actionOnScroll", void 0), 
        __decorate$15([ Property(null) ], Popup.prototype, "showAnimation", void 0), __decorate$15([ Property(null) ], Popup.prototype, "hideAnimation", void 0), 
        __decorate$15([ Event() ], Popup.prototype, "open", void 0), __decorate$15([ Event() ], Popup.prototype, "close", void 0), 
        __decorate$15([ Event() ], Popup.prototype, "targetExitViewport", void 0), Popup = __decorate$15([ NotifyPropertyChanges ], Popup);
    }(Component), __extends$14 = function() {
        var extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __());
        };
    }(), __decorate$14 = function(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, Animation$2 = function(_super) {
        function Animation$$1() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends$14(Animation$$1, _super), __decorate$14([ Property({
            effect: "FadeIn",
            duration: 150,
            delay: 0
        }) ], Animation$$1.prototype, "open", void 0), __decorate$14([ Property({
            effect: "FadeOut",
            duration: 150,
            delay: 0
        }) ], Animation$$1.prototype, "close", void 0), Animation$$1;
    }(ChildProperty), Tooltip$1 = function(_super) {
        function Tooltip(options, element) {
            return _super.call(this, options, element) || this;
        }
        return __extends$14(Tooltip, _super), Tooltip.prototype.initialize = function() {
            this.formatPosition(), addClass([ this.element ], "e-tooltip");
        }, Tooltip.prototype.formatPosition = function() {
            0 === this.position.indexOf("Top") || 0 === this.position.indexOf("Bottom") ? (_a = this.position.split(/(?=[A-Z])/), 
            this.tooltipPositionY = _a[0], this.tooltipPositionX = _a[1]) : (_b = this.position.split(/(?=[A-Z])/), 
            this.tooltipPositionX = _b[0], this.tooltipPositionY = _b[1]);
            var _a, _b;
        }, Tooltip.prototype.renderArrow = function() {
            this.setTipClass(this.position);
            var tip = createElement("div", {
                className: "e-arrow-tip " + this.tipClass
            });
            tip.appendChild(createElement("div", {
                className: "e-arrow-tip-outer " + this.tipClass
            })), tip.appendChild(createElement("div", {
                className: "e-arrow-tip-inner " + this.tipClass
            })), this.tooltipEle.appendChild(tip);
        }, Tooltip.prototype.setTipClass = function(position) {
            0 === position.indexOf("Right") ? this.tipClass = "e-tip-left" : 0 === position.indexOf("Bottom") ? this.tipClass = "e-tip-top" : 0 === position.indexOf("Left") ? this.tipClass = "e-tip-right" : this.tipClass = "e-tip-bottom";
        }, Tooltip.prototype.renderPopup = function(target) {
            var elePos = this.mouseTrail ? {
                top: 0,
                left: 0
            } : this.getTooltipPosition(target);
            this.popupObj = new Popup$1(this.tooltipEle, {
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
        }, Tooltip.prototype.getTooltipPosition = function(target) {
            this.tooltipEle.style.display = "none";
            var pos = calculatePosition$1(target, this.tooltipPositionX, this.tooltipPositionY);
            this.tooltipEle.style.display = "";
            var offsetPos = this.calculateTooltipOffset(this.position);
            return this.collisionFlipFit(target, pos.left + offsetPos.left, pos.top + offsetPos.top);
        }, Tooltip.prototype.reposition = function(target) {
            var elePos = this.getTooltipPosition(target);
            this.popupObj.position = {
                X: elePos.left,
                Y: elePos.top
            }, this.popupObj.dataBind();
        }, Tooltip.prototype.openPopupHandler = function() {
            this.trigger("afterOpen", this.tooltipEventArgs);
        }, Tooltip.prototype.closePopupHandler = function() {
            this.clear(), this.trigger("afterClose", this.tooltipEventArgs);
        }, Tooltip.prototype.calculateTooltipOffset = function(position) {
            var pos = {
                top: 0,
                left: 0
            }, tooltipEleWidth = this.tooltipEle.offsetWidth, tooltipEleHeight = this.tooltipEle.offsetHeight, arrowEle = this.tooltipEle.querySelector(".e-arrow-tip"), tipWidth = arrowEle ? arrowEle.offsetWidth : 0, tipHeight = arrowEle ? arrowEle.offsetHeight : 0, tipAdjust = this.showTipPointer ? 0 : 8, tipHeightAdjust = tipHeight / 2 + 2 + (this.tooltipEle.offsetHeight - this.tooltipEle.clientHeight), tipWidthAdjust = tipWidth / 2 + 2 + (this.tooltipEle.offsetWidth - this.tooltipEle.clientWidth);
            switch (this.mouseTrail && (tipAdjust += 2), position) {
              case "RightTop":
                pos.left += tipWidth + tipAdjust, pos.top -= tooltipEleHeight - tipHeightAdjust;
                break;

              case "RightCenter":
                pos.left += tipWidth + tipAdjust, pos.top -= tooltipEleHeight / 2;
                break;

              case "RightBottom":
                pos.left += tipWidth + tipAdjust, pos.top -= tipHeightAdjust;
                break;

              case "BottomRight":
                pos.top += tipHeight + tipAdjust, pos.left -= tipWidthAdjust;
                break;

              case "BottomCenter":
                pos.top += tipHeight + tipAdjust, pos.left -= tooltipEleWidth / 2;
                break;

              case "BottomLeft":
                pos.top += tipHeight + tipAdjust, pos.left -= tooltipEleWidth - tipWidthAdjust;
                break;

              case "LeftBottom":
                pos.left -= tipWidth + tooltipEleWidth + tipAdjust, pos.top -= tipHeightAdjust;
                break;

              case "LeftCenter":
                pos.left -= tipWidth + tooltipEleWidth + tipAdjust, pos.top -= tooltipEleHeight / 2;
                break;

              case "LeftTop":
                pos.left -= tipWidth + tooltipEleWidth + tipAdjust, pos.top -= tooltipEleHeight - tipHeightAdjust;
                break;

              case "TopLeft":
                pos.top -= tooltipEleHeight + tipHeight + tipAdjust, pos.left -= tooltipEleWidth - tipWidthAdjust;
                break;

              case "TopRight":
                pos.top -= tooltipEleHeight + tipHeight + tipAdjust, pos.left -= tipWidthAdjust;
                break;

              default:
                pos.top -= tooltipEleHeight + tipHeight + tipAdjust, pos.left -= tooltipEleWidth / 2;
            }
            return pos.left += this.offsetX, pos.top += this.offsetY, pos;
        }, Tooltip.prototype.updateTipPosition = function(position) {
            var selEle = this.tooltipEle.querySelectorAll(".e-arrow-tip,.e-arrow-tip-outer,.e-arrow-tip-inner");
            removeClass(selEle, [ "e-tip-bottom", "e-tip-top", "e-tip-left", "e-tip-right" ]), 
            this.setTipClass(position), addClass(selEle, this.tipClass);
        }, Tooltip.prototype.adjustArrow = function(target, position, tooltipPositionX, tooltipPositionY) {
            if (!1 !== this.showTipPointer) {
                this.updateTipPosition(position);
                var leftValue, topValue, tooltipWidth = this.tooltipEle.clientWidth, tooltipHeight = this.tooltipEle.clientHeight, arrowEle = this.tooltipEle.querySelector(".e-arrow-tip"), arrowInnerELe = this.tooltipEle.querySelector(".e-arrow-tip-inner"), tipWidth = arrowEle.offsetWidth, tipHeight = arrowEle.offsetHeight;
                if ("e-tip-bottom" === this.tipClass || "e-tip-top" === this.tipClass) {
                    "e-tip-bottom" === this.tipClass ? (topValue = "99.9%", arrowInnerELe.style.top = "-" + (tipHeight - 2) + "px") : (topValue = -(tipHeight - 1) + "px", 
                    arrowInnerELe.style.top = "-" + (tipHeight - 6) + "px");
                    leftValue = (tipPosExclude = "Center" !== tooltipPositionX || tooltipWidth > target.offsetWidth || this.mouseTrail) && "Left" === tooltipPositionX || !tipPosExclude && "End" === this.tipPointerPosition ? tooltipWidth - tipWidth - 2 + "px" : tipPosExclude && "Right" === tooltipPositionX || !tipPosExclude && "Start" === this.tipPointerPosition ? "2px" : tooltipWidth / 2 - tipWidth / 2 + "px";
                } else {
                    "e-tip-right" === this.tipClass ? (leftValue = "99.9%", arrowInnerELe.style.left = "-" + (tipWidth - 2) + "px") : (leftValue = -(tipWidth - 1) + "px", 
                    arrowInnerELe.style.left = tipWidth - 2 - tipWidth + "px");
                    var tipPosExclude;
                    topValue = (tipPosExclude = "Center" !== tooltipPositionY || tooltipHeight > target.offsetHeight || this.mouseTrail) && "Top" === tooltipPositionY || !tipPosExclude && "End" === this.tipPointerPosition ? tooltipHeight - tipHeight - 2 + "px" : tipPosExclude && "Bottom" === tooltipPositionY || !tipPosExclude && "Start" === this.tipPointerPosition ? "2px" : tooltipHeight / 2 - tipHeight / 2 + "px";
                }
                arrowEle.style.top = topValue, arrowEle.style.left = leftValue;
            }
        }, Tooltip.prototype.renderContent = function(target) {
            var tooltipContent = this.tooltipEle.querySelector(".e-tip-content");
            if (target && !isNullOrUndefined(target.getAttribute("title")) && (target.setAttribute("data-content", target.getAttribute("title")), 
            target.removeAttribute("title")), isNullOrUndefined(this.content)) target && !isNullOrUndefined(target.getAttribute("data-content")) && (tooltipContent.innerHTML = target.getAttribute("data-content")); else if (tooltipContent.innerHTML = "", 
            this.content instanceof HTMLElement) tooltipContent.appendChild(this.content); else if ("string" == typeof this.content) tooltipContent.innerHTML = this.content; else {
                append(compile$$1(this.content)(), tooltipContent);
            }
        }, Tooltip.prototype.renderCloseIcon = function() {
            if (this.isSticky) {
                var tipClose = createElement("div", {
                    className: "e-icons e-tooltip-close"
                });
                this.tooltipEle.appendChild(tipClose), EventHandler.add(tipClose, Browser.touchStartEvent, this.onStickyClose, this);
            }
        }, Tooltip.prototype.addDescribedBy = function(target, id) {
            var describedby = (target.getAttribute("aria-describedby") || "").split(/\s+/);
            describedby.indexOf(id) < 0 && describedby.push(id), attributes(target, {
                "aria-describedby": describedby.join(" ").trim(),
                "data-tooltip-id": id
            });
        }, Tooltip.prototype.removeDescribedBy = function(target) {
            var id = target.getAttribute("data-tooltip-id"), describedby = (target.getAttribute("aria-describedby") || "").split(/\s+/), index = describedby.indexOf(id);
            -1 !== index && describedby.splice(index, 1), target.removeAttribute("data-tooltip-id");
            var orgdescribedby = describedby.join(" ").trim();
            orgdescribedby ? target.setAttribute("aria-describedby", orgdescribedby) : target.removeAttribute("aria-describedby");
        }, Tooltip.prototype.tapHoldHandler = function(evt) {
            clearTimeout(this.autoCloseTimer), this.targetHover(evt.originalEvent);
        }, Tooltip.prototype.touchEndHandler = function(e) {
            var _this = this;
            if (!this.isSticky) {
                this.autoCloseTimer = setTimeout(function() {
                    _this.close();
                }, 1500);
            }
        }, Tooltip.prototype.targetClick = function(e) {
            var target;
            isNullOrUndefined(target = this.target ? closest(e.target, this.target) : this.element) || (null === target.getAttribute("data-tooltip-id") ? this.targetHover(e) : this.isSticky || this.hideTooltip(this.animation.close, e, target));
        }, Tooltip.prototype.targetHover = function(e) {
            var target;
            if (target = this.target ? closest(e.target, this.target) : this.element, !isNullOrUndefined(target) && null === target.getAttribute("data-tooltip-id")) {
                for (var _i = 0, targetList_1 = [].slice.call(document.querySelectorAll("[data-tooltip-id= " + this.ctrlId + "_content]")); _i < targetList_1.length; _i++) {
                    var target_1 = targetList_1[_i];
                    this.restoreElement(target_1);
                }
                this.showTooltip(target, this.animation.open, e), this.wireMouseEvents(e, target);
            }
        }, Tooltip.prototype.showTooltip = function(target, showAnimation, e) {
            var _this = this;
            if (clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.tooltipEventArgs = e ? {
                type: e.type,
                cancel: !1,
                target: target,
                event: e,
                element: this.tooltipEle
            } : {
                type: null,
                cancel: !1,
                target: target,
                event: null,
                element: this.tooltipEle
            }, this.trigger("beforeRender", this.tooltipEventArgs), this.tooltipEventArgs.cancel) return this.isHidden = !0, 
            void this.clear();
            if (this.isHidden = !1, isNullOrUndefined(this.tooltipEle) ? (this.ctrlId = this.element.getAttribute("id") ? getUniqueID(this.element.getAttribute("id")) : getUniqueID("tooltip"), 
            this.tooltipEle = createElement("div", {
                className: "e-tooltip-wrap e-popup",
                attrs: {
                    role: "tooltip",
                    "aria-hidden": "false",
                    id: this.ctrlId + "_content"
                },
                styles: "width:" + formatUnit(this.width) + ";height:" + formatUnit(this.height) + ";position:absolute;"
            }), this.cssClass && addClass([ this.tooltipEle ], this.cssClass.split(" ")), Browser.isDevice && addClass([ this.tooltipEle ], "e-bigger"), 
            "auto" !== this.width && (this.tooltipEle.style.maxWidth = formatUnit(this.width)), 
            this.tooltipEle.appendChild(createElement("div", {
                className: "e-tip-content"
            })), document.body.appendChild(this.tooltipEle), this.addDescribedBy(target, this.ctrlId + "_content"), 
            this.renderContent(target), addClass([ this.tooltipEle ], "e-popup-open"), this.showTipPointer && this.renderArrow(), 
            this.renderCloseIcon(), this.renderPopup(target)) : (this.adjustArrow(target, this.position, this.tooltipPositionX, this.tooltipPositionY), 
            this.addDescribedBy(target, this.ctrlId + "_content"), this.renderContent(target), 
            Animation.stop(this.tooltipEle), this.reposition(target)), removeClass([ this.tooltipEle ], "e-popup-open"), 
            addClass([ this.tooltipEle ], "e-popup-close"), this.tooltipEventArgs = e ? {
                type: e.type,
                cancel: !1,
                target: target,
                event: e,
                element: this.tooltipEle
            } : {
                type: null,
                cancel: !1,
                target: target,
                event: null,
                element: this.tooltipEle
            }, this.trigger("beforeOpen", this.tooltipEventArgs), this.tooltipEventArgs.cancel) return this.isHidden = !0, 
            void this.clear();
            var openAnimation = {
                name: showAnimation.effect,
                duration: showAnimation.duration,
                delay: showAnimation.delay,
                timingFunction: "easeOut"
            };
            if ("None" === showAnimation.effect && (openAnimation = void 0), this.openDelay > 0) {
                this.showTimer = setTimeout(function() {
                    _this.popupObj && _this.popupObj.show(openAnimation, target);
                }, this.openDelay);
            } else this.popupObj.show(openAnimation, target);
        }, Tooltip.prototype.checkCollision = function(target, x, y) {
            var elePos = {
                left: x,
                top: y,
                position: this.position,
                horizontal: this.tooltipPositionX,
                vertical: this.tooltipPositionY
            }, affectedPos = isCollide$1(this.tooltipEle, this.target ? this.element : null, x, y);
            return affectedPos.length > 0 && (elePos.horizontal = affectedPos.indexOf("left") >= 0 ? "Right" : affectedPos.indexOf("right") >= 0 ? "Left" : this.tooltipPositionX, 
            elePos.vertical = affectedPos.indexOf("top") >= 0 ? "Bottom" : affectedPos.indexOf("bottom") >= 0 ? "Top" : this.tooltipPositionY), 
            elePos;
        }, Tooltip.prototype.collisionFlipFit = function(target, x, y) {
            var elePos = this.checkCollision(target, x, y), newpos = elePos.position;
            if (this.tooltipPositionY !== elePos.vertical && (newpos = 0 === this.position.indexOf("Bottom") || 0 === this.position.indexOf("Top") ? elePos.vertical + this.tooltipPositionX : this.tooltipPositionX + elePos.vertical), 
            this.tooltipPositionX !== elePos.horizontal && (0 === newpos.indexOf("Left") && (elePos.vertical = "LeftTop" === newpos || "LeftCenter" === newpos ? "Top" : "Bottom", 
            newpos = elePos.vertical + "Left"), 0 === newpos.indexOf("Right") && (elePos.vertical = "RightTop" === newpos || "RightCenter" === newpos ? "Top" : "Bottom", 
            newpos = elePos.vertical + "Right"), elePos.horizontal = this.tooltipPositionX), 
            this.tooltipEventArgs = {
                type: null,
                cancel: !1,
                target: target,
                event: null,
                element: this.tooltipEle,
                collidedPosition: newpos
            }, this.trigger("beforeCollision", this.tooltipEventArgs), elePos.position !== newpos) {
                var pos = calculatePosition$1(target, this.tooltipPositionX, elePos.vertical);
                this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
                var offsetPos = this.calculateTooltipOffset(newpos);
                elePos.position = newpos, elePos.left = pos.left + offsetPos.left, elePos.top = pos.top + offsetPos.top;
            } else this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
            var eleOffset = {
                left: elePos.left,
                top: elePos.top
            }, left = fit$1(this.tooltipEle, this.target ? this.element : null, {
                X: !0,
                Y: !1
            }, eleOffset).left;
            if (this.showTipPointer && (0 === newpos.indexOf("Bottom") || 0 === newpos.indexOf("Top"))) {
                var arrowEle = this.tooltipEle.querySelector(".e-arrow-tip"), arrowleft = parseInt(arrowEle.style.left, 10) - (left - elePos.left);
                arrowleft < 0 ? arrowleft = 0 : arrowleft + arrowEle.offsetWidth > this.tooltipEle.clientWidth && (arrowleft = this.tooltipEle.clientWidth - arrowEle.offsetWidth), 
                arrowEle.style.left = arrowleft.toString() + "px";
            }
            return eleOffset.left = left, eleOffset;
        }, Tooltip.prototype.hideTooltip = function(hideAnimation, e, targetElement) {
            var target, _this = this;
            if (e ? (target = this.target ? targetElement || e.target : this.element, this.tooltipEventArgs = {
                type: e.type,
                cancel: !1,
                target: target,
                event: e,
                element: this.tooltipEle
            }) : (target = document.querySelector("[data-tooltip-id= " + this.ctrlId + "_content]"), 
            this.tooltipEventArgs = {
                type: null,
                cancel: !1,
                target: target,
                event: null,
                element: this.tooltipEle
            }), !isNullOrUndefined(target)) if (this.trigger("beforeClose", this.tooltipEventArgs), 
            this.tooltipEventArgs.cancel) this.isHidden = !1; else {
                this.restoreElement(target), this.isHidden = !0;
                var closeAnimation_1 = {
                    name: hideAnimation.effect,
                    duration: hideAnimation.duration,
                    delay: hideAnimation.delay,
                    timingFunction: "easeIn"
                };
                if ("None" === hideAnimation.effect && (closeAnimation_1 = void 0), this.closeDelay > 0) {
                    this.hideTimer = setTimeout(function() {
                        _this.popupObj && _this.popupObj.hide(closeAnimation_1);
                    }, this.closeDelay);
                } else this.popupObj.hide(closeAnimation_1);
            }
        }, Tooltip.prototype.restoreElement = function(target) {
            this.unwireMouseEvents(target), isNullOrUndefined(target.getAttribute("data-content")) || (target.setAttribute("title", target.getAttribute("data-content")), 
            target.removeAttribute("data-content")), this.removeDescribedBy(target);
        }, Tooltip.prototype.clear = function() {
            this.tooltipEle && (removeClass([ this.tooltipEle ], "e-popup-close"), addClass([ this.tooltipEle ], "e-popup-open")), 
            this.isHidden && (this.popupObj && this.popupObj.destroy(), this.tooltipEle && remove(this.tooltipEle), 
            this.tooltipEle = null, this.popupObj = null);
        }, Tooltip.prototype.onMouseOut = function(e) {
            this.hideTooltip(this.animation.close, e);
        }, Tooltip.prototype.onStickyClose = function(e) {
            this.close();
        }, Tooltip.prototype.onMouseMove = function(event) {
            var eventPageX = 0, eventPageY = 0;
            event.type.indexOf("touch") > -1 ? (event.preventDefault(), eventPageX = event.touches[0].pageX, 
            eventPageY = event.touches[0].pageY) : (eventPageX = event.pageX, eventPageY = event.pageY), 
            Animation.stop(this.tooltipEle), removeClass([ this.tooltipEle ], "e-popup-close"), 
            addClass([ this.tooltipEle ], "e-popup-open"), this.adjustArrow(event.target, this.position, this.tooltipPositionX, this.tooltipPositionY);
            var pos = this.calculateTooltipOffset(this.position), x = eventPageX + pos.left + this.offsetX, y = eventPageY + pos.top + this.offsetY, elePos = this.checkCollision(event.target, x, y);
            if (this.tooltipPositionX !== elePos.horizontal || this.tooltipPositionY !== elePos.vertical) {
                var newpos = 0 === this.position.indexOf("Bottom") || 0 === this.position.indexOf("Top") ? elePos.vertical + elePos.horizontal : elePos.horizontal + elePos.vertical;
                elePos.position = newpos, this.adjustArrow(event.target, elePos.position, elePos.horizontal, elePos.vertical);
                var colpos = this.calculateTooltipOffset(elePos.position);
                elePos.left = eventPageX + colpos.left - this.offsetX, elePos.top = eventPageY + colpos.top - this.offsetY;
            }
            this.tooltipEle.style.left = elePos.left + "px", this.tooltipEle.style.top = elePos.top + "px";
        }, Tooltip.prototype.keyDown = function(event) {
            this.tooltipEle && 27 === event.keyCode && this.close();
        }, Tooltip.prototype.touchEnd = function(e) {
            this.tooltipEle && null === closest(e.target, ".e-tooltip") && this.close();
        }, Tooltip.prototype.scrollHandler = function(e) {
            this.tooltipEle && this.close();
        }, Tooltip.prototype.render = function() {
            this.initialize(), this.wireEvents(this.opensOn);
        }, Tooltip.prototype.preRender = function() {
            this.tipClass = "e-tip-bottom", this.tooltipPositionX = "Center", this.tooltipPositionY = "Top", 
            this.isHidden = !0;
        }, Tooltip.prototype.wireEvents = function(trigger) {
            for (var _i = 0, triggerList_1 = this.getTriggerList(trigger); _i < triggerList_1.length; _i++) {
                var opensOn = triggerList_1[_i];
                if ("Custom" === opensOn) return;
                "Focus" === opensOn && this.wireFocusEvents(), "Click" === opensOn && EventHandler.add(this.element, Browser.touchStartEvent, this.targetClick, this), 
                "Hover" === opensOn && (Browser.isDevice ? (this.touchModule = new Touch(this.element, {
                    tapHoldThreshold: 500,
                    tapHold: this.tapHoldHandler.bind(this)
                }), EventHandler.add(this.element, Browser.touchEndEvent, this.touchEndHandler, this)) : EventHandler.add(this.element, "mouseover", this.targetHover, this));
            }
            EventHandler.add(document, "touchend", this.touchEnd, this), EventHandler.add(document, "scroll", this.scrollHandler, this), 
            EventHandler.add(document, "keydown", this.keyDown, this);
        }, Tooltip.prototype.getTriggerList = function(trigger) {
            return "Auto" === trigger && (trigger = Browser.isDevice ? "Hover" : "Hover Focus"), 
            trigger.split(" ");
        }, Tooltip.prototype.wireFocusEvents = function() {
            if (isNullOrUndefined(this.target)) EventHandler.add(this.element, "focus", this.targetHover, this); else for (var _i = 0, targetList_2 = [].slice.call(this.element.querySelectorAll(this.target)); _i < targetList_2.length; _i++) {
                var target = targetList_2[_i];
                EventHandler.add(target, "focus", this.targetHover, this);
            }
        }, Tooltip.prototype.wireMouseEvents = function(e, target) {
            this.tooltipEle && (this.isSticky || ("focus" === e.type && EventHandler.add(target, "blur", this.onMouseOut, this), 
            "mouseover" === e.type && EventHandler.add(target, "mouseleave", this.onMouseOut, this)), 
            this.mouseTrail && EventHandler.add(target, "mousemove touchstart mouseenter", this.onMouseMove, this));
        }, Tooltip.prototype.unwireEvents = function(trigger) {
            for (var _i = 0, triggerList_2 = this.getTriggerList(trigger); _i < triggerList_2.length; _i++) {
                var opensOn = triggerList_2[_i];
                if ("Custom" === opensOn) return;
                "Focus" === opensOn && this.unwireFocusEvents(), "Click" === opensOn && EventHandler.remove(this.element, Browser.touchStartEvent, this.targetClick), 
                "Hover" === opensOn && (Browser.isDevice ? (this.touchModule && this.touchModule.destroy(), 
                EventHandler.remove(this.element, Browser.touchEndEvent, this.touchEndHandler)) : EventHandler.remove(this.element, "mouseover", this.targetHover));
            }
            EventHandler.remove(document, "touchend", this.touchEnd), EventHandler.remove(document, "scroll", this.scrollHandler), 
            EventHandler.remove(document, "keydown", this.keyDown);
        }, Tooltip.prototype.unwireFocusEvents = function() {
            if (isNullOrUndefined(this.target)) EventHandler.remove(this.element, "focus", this.targetHover); else for (var _i = 0, targetList_3 = [].slice.call(this.element.querySelectorAll(this.target)); _i < targetList_3.length; _i++) {
                var target = targetList_3[_i];
                EventHandler.remove(target, "focus", this.targetHover);
            }
        }, Tooltip.prototype.unwireMouseEvents = function(target) {
            if (!this.isSticky) for (var _i = 0, triggerList_3 = this.getTriggerList(this.opensOn); _i < triggerList_3.length; _i++) {
                var opensOn = triggerList_3[_i];
                "Focus" === opensOn && EventHandler.remove(target, "blur", this.onMouseOut), "Hover" !== opensOn || Browser.isDevice || EventHandler.remove(target, "mouseleave", this.onMouseOut);
            }
            this.mouseTrail && EventHandler.remove(target, "mousemove touchstart mouseenter", this.onMouseMove);
        }, Tooltip.prototype.getModuleName = function() {
            return "tooltip";
        }, Tooltip.prototype.getPersistData = function() {
            return this.addOnPersist([]);
        }, Tooltip.prototype.onPropertyChanged = function(newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                switch (_a[_i]) {
                  case "width":
                    this.tooltipEle && (this.tooltipEle.style.width = formatUnit(newProp.width));
                    break;

                  case "height":
                    this.tooltipEle && (this.tooltipEle.style.height = formatUnit(newProp.height));
                    break;

                  case "content":
                    this.tooltipEle && this.renderContent();
                    break;

                  case "opensOn":
                    this.unwireEvents(oldProp.opensOn), this.wireEvents(newProp.opensOn);
                    break;

                  case "position":
                    this.formatPosition();
                    var target = document.querySelector("[data-tooltip-id= " + this.ctrlId + "_content]");
                    if (this.tooltipEle && target) {
                        var arrowInnerELe = this.tooltipEle.querySelector(".e-arrow-tip-inner");
                        arrowInnerELe.style.top = arrowInnerELe.style.left = null, this.reposition(target);
                    }
                    break;

                  case "tipPointerPosition":
                    var trgt = document.querySelector("[data-tooltip-id= " + this.ctrlId + "_content]");
                    this.tooltipEle && trgt && this.reposition(trgt);
                    break;

                  case "offsetX":
                    if (this.tooltipEle) {
                        var x = newProp.offsetX - oldProp.offsetX;
                        this.tooltipEle.style.left = (parseInt(this.tooltipEle.style.left, 10) + x).toString() + "px";
                    }
                    break;

                  case "offsetY":
                    if (this.tooltipEle) {
                        var y = newProp.offsetY - oldProp.offsetY;
                        this.tooltipEle.style.top = (parseInt(this.tooltipEle.style.top, 10) + y).toString() + "px";
                    }
                    break;

                  case "cssClass":
                    this.tooltipEle && (oldProp.cssClass && removeClass([ this.tooltipEle ], oldProp.cssClass.split(" ")), 
                    newProp.cssClass && addClass([ this.tooltipEle ], newProp.cssClass.split(" ")));
                    break;

                  case "enableRtl":
                    this.tooltipEle && (this.enableRtl ? addClass([ this.tooltipEle ], "e-rtl") : removeClass([ this.tooltipEle ], "e-rtl"));
                }
            }
        }, Tooltip.prototype.open = function(element, animation) {
            void 0 === animation && (animation = this.animation.open), "none" !== element.style.display && this.showTooltip(element, animation);
        }, Tooltip.prototype.close = function(animation) {
            void 0 === animation && (animation = this.animation.close), this.hideTooltip(animation);
        }, Tooltip.prototype.refresh = function(target) {
            this.tooltipEle && this.renderContent(target), this.popupObj && target && this.reposition(target);
        }, Tooltip.prototype.destroy = function() {
            _super.prototype.destroy.call(this), removeClass([ this.element ], "e-tooltip"), 
            this.unwireEvents(this.opensOn), this.popupObj && this.popupObj.destroy(), this.tooltipEle && remove(this.tooltipEle), 
            this.tooltipEle = null, this.popupObj = null;
        }, __decorate$14([ Property("auto") ], Tooltip.prototype, "width", void 0), __decorate$14([ Property("auto") ], Tooltip.prototype, "height", void 0), 
        __decorate$14([ Property() ], Tooltip.prototype, "content", void 0), __decorate$14([ Property() ], Tooltip.prototype, "target", void 0), 
        __decorate$14([ Property("TopCenter") ], Tooltip.prototype, "position", void 0), 
        __decorate$14([ Property(0) ], Tooltip.prototype, "offsetX", void 0), __decorate$14([ Property(0) ], Tooltip.prototype, "offsetY", void 0), 
        __decorate$14([ Property(!0) ], Tooltip.prototype, "showTipPointer", void 0), __decorate$14([ Property("Auto") ], Tooltip.prototype, "tipPointerPosition", void 0), 
        __decorate$14([ Property("Auto") ], Tooltip.prototype, "opensOn", void 0), __decorate$14([ Property(!1) ], Tooltip.prototype, "mouseTrail", void 0), 
        __decorate$14([ Property(!1) ], Tooltip.prototype, "isSticky", void 0), __decorate$14([ Complex({}, Animation$2) ], Tooltip.prototype, "animation", void 0), 
        __decorate$14([ Property(0) ], Tooltip.prototype, "openDelay", void 0), __decorate$14([ Property(0) ], Tooltip.prototype, "closeDelay", void 0), 
        __decorate$14([ Property() ], Tooltip.prototype, "cssClass", void 0), __decorate$14([ Property(!1) ], Tooltip.prototype, "enableRtl", void 0), 
        __decorate$14([ Event() ], Tooltip.prototype, "beforeRender", void 0), __decorate$14([ Event() ], Tooltip.prototype, "beforeOpen", void 0), 
        __decorate$14([ Event() ], Tooltip.prototype, "afterOpen", void 0), __decorate$14([ Event() ], Tooltip.prototype, "beforeClose", void 0), 
        __decorate$14([ Event() ], Tooltip.prototype, "afterClose", void 0), __decorate$14([ Event() ], Tooltip.prototype, "beforeCollision", void 0), 
        __decorate$14([ Event() ], Tooltip.prototype, "created", void 0), __decorate$14([ Event() ], Tooltip.prototype, "destroyed", void 0), 
        Tooltip = __decorate$14([ NotifyPropertyChanges ], Tooltip);
    }(Component), _tooltip = Object.freeze({
        Animation: Animation$2,
        Tooltip: Tooltip$1
    }), inputs = {};
    copy(inputs, _slider);
    var popups = {};
    copy(popups, _tooltip);
    var base = _base;
    return exports.inputs = inputs, exports.base = base, exports.popups = popups, exports;
}({});

this.ejs = ej;
