'use strict';

System.register(['@syncfusion/ej2-base', '@syncfusion/ej2-popups'], function (_export, _context) {
    "use strict";

    var Animation, Browser, ChildProperty, Collection, Complex, Component, Event, EventHandler, Internationalization, NotifyPropertyChanges, Property, SvgRenderer, compile, createElement, isNullOrUndefined, merge, remove, setStyleAttribute, Tooltip, _get, _createClass, _typeof, __decorate$1, Font, Margin, Border, Annotation, Container, TooltipSettings, __decorate$2, Line, Label, Range, Tick, Pointer, Axis, loaded, load, animationComplete, axisLabelRender, tooltipRender, annotationRender, gaugeMouseMove, gaugeMouseLeave, gaugeMouseDown, gaugeMouseUp, valueChange, resized, VisibleRange, GaugeLocation, Size, Rect, CustomizeOption, PathOption, RectOption, TextOption, VisibleLabels, Align, AxisLayoutPanel, Animations, AxisRenderer, Annotations, GaugeTooltip, __decorate, LinearGauge;

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
     * Specifies Linear-Gauge Helper methods
     */
    /** @private */
    function stringToNumber(value, containerSize) {
        if (value !== null && value !== undefined) {
            return value.indexOf('%') !== -1 ? containerSize / 100 * parseInt(value, 10) : parseInt(value, 10);
        }
        return null;
    }
    /**
     * Function to measure the height and width of the text.
     * @param  {string} text
     * @param  {FontModel} font
     * @param  {string} id
     * @returns no
     * @private
     */
    function measureText(text, font) {
        var htmlObject = document.getElementById('gauge-measuretext');
        var size = void 0;
        if (htmlObject === null) {
            htmlObject = createElement('text', { id: 'gauge-measuretext' });
            document.body.appendChild(htmlObject);
        }
        htmlObject.innerHTML = text;
        htmlObject.style.position = 'absolute';
        htmlObject.style.fontSize = font.size;
        htmlObject.style.fontWeight = font.fontWeight;
        htmlObject.style.fontStyle = font.fontStyle;
        htmlObject.style.fontFamily = font.fontFamily;
        htmlObject.style.visibility = 'hidden';
        htmlObject.style.top = '-100';
        htmlObject.style.left = '0';
        htmlObject.style.whiteSpace = 'nowrap';
        size = new Size(htmlObject.clientWidth, htmlObject.clientHeight);
        //remove(htmlObject);
        return size;
    }
    /** @private */
    function withInRange(value, start, end, max, min, type) {
        var withIn = void 0;
        if (type === 'pointer') {
            withIn = value <= max && value >= min;
        } else {
            withIn = start != null && start <= max && start >= min && end != null && end <= max && end >= min;
        }
        return withIn;
    }
    function convertPixelToValue(parentElement, pointerElement, orientation, axis, type, location) {
        var elementRect = parentElement.getBoundingClientRect();
        var pointerRect = pointerElement.getBoundingClientRect();
        var height = pointerElement.id.indexOf('MarkerPointer') > -1 ? pointerRect.height / 2 : !axis.isInversed ? 0 : pointerRect.height;
        var width = pointerElement.id.indexOf('MarkerPointer') > -1 ? pointerRect.width / 2 : !axis.isInversed ? pointerRect.width : 0;
        var size = new Size(axis.lineBounds.width, axis.lineBounds.height);
        var y = type === 'drag' ? location.y - axis.lineBounds.y : pointerRect.top + height - elementRect.top - axis.lineBounds.y;
        var x = type === 'drag' ? location.x - axis.lineBounds.x : pointerRect.left + width - elementRect.left - axis.lineBounds.x;
        var newSize = orientation === 'Vertical' ? size.height : size.width;
        var divideVal = orientation === 'Vertical' ? y : x;
        var value = orientation === 'Vertical' ? axis.isInversed ? divideVal / newSize : 1 - divideVal / newSize : axis.isInversed ? 1 - divideVal / newSize : divideVal / newSize;
        value = value * axis.visibleRange.delta + axis.visibleRange.min;
        return value;
    }
    function getPathToRect(path, size, parentElement) {
        var tempDiv = document.getElementById('gauge_path');
        if (tempDiv === null) {
            tempDiv = createElement('text', { id: 'gauge_path' });
            tempDiv.style.position = 'absolute';
            tempDiv.style.top = '0px';
            tempDiv.style.left = '0px';
            parentElement.appendChild(tempDiv);
        }
        var render = new SvgRenderer('id');
        var svg = render.createSvg({ id: 'box_path', width: size.width, height: size.height });
        svg.appendChild(path);
        tempDiv.appendChild(svg);
        var svgRect = path.getBBox();
        remove(tempDiv);
        return svgRect;
    }
    /** @private */
    function getElement(id) {
        return document.getElementById(id);
    }
    /** @private */
    function removeElement(id) {
        var element = getElement(id);
        if (element) {
            remove(element);
        }
    }
    /** @private */
    function isPointerDrag(axes) {
        var pointerEnable = false;
        axes.map(function (axis, index) {
            axis.pointers.map(function (pointer, index) {
                if (pointer.enableDrag) {
                    pointerEnable = true;
                }
            });
        });
        return pointerEnable;
    }
    /** @private */
    function valueToCoefficient(value, axis, orientation, range) {
        var result = (value - range.min) / range.delta;
        result = orientation === 'Vertical' ? !axis.isInversed ? 1 - result : result : !axis.isInversed ? result : 1 - result;
        return result;
    }
    function getFontStyle(font) {
        var style = '';
        style = 'font-size:' + font.size + '; font-style:' + font.fontStyle + '; font-weight:' + font.fontWeight + '; font-family:' + font.fontFamily + ';opacity:' + font.opacity + '; color:' + font.color + ';';
        return style;
    }
    /** @private */
    function getLabelFormat(format) {
        var customLabelFormat = format && format.match('{value}') !== null;
        var skeleton = customLabelFormat ? '' : format;
        return skeleton;
    }
    /** @private */
    function getTemplateFunction(template) {
        var templateFn = null;
        try {
            if (document.querySelectorAll(template).length) {
                templateFn = compile(document.querySelector(template).innerHTML.trim());
            }
        } catch (e) {
            templateFn = compile(template);
        }
        return templateFn;
    }
    /** @private */
    function getElementOffset(childElement, parentElement) {
        var width = void 0;
        var height = void 0;
        parentElement.appendChild(childElement);
        width = childElement.offsetWidth;
        height = childElement.offsetHeight;
        parentElement.removeChild(childElement);
        return new Size(width, height);
    }
    /** @private */

    /** @private */
    function textElement(options, font, color, parent) {
        var renderOptions = {};
        var htmlObject = void 0;
        var renderer = new SvgRenderer('');
        var style = 'fill:' + color + '; font-size:' + font.size + '; font-style:' + font.fontStyle + ' ; font-weight:' + font.fontWeight + '; font-family:' + font.fontFamily + '; text-anchor:' + options.anchor + '; transform:' + options.transform + '; opacity:' + font.opacity + '; dominant-baseline:' + options.baseLine + ';';
        renderOptions = {
            'id': options.id,
            'x': options.x,
            'y': options.y,
            'style': style
        };
        htmlObject = renderer.createText(renderOptions, options.text);
        parent.appendChild(htmlObject);
        return htmlObject;
    }
    function calculateNiceInterval(min, max, size, orientation) {
        var delta = max - min;
        var currentInterval = void 0;
        var intervalDivs = [10, 5, 2, 1];
        var desiredIntervalsCount = getActualDesiredIntervalsCount(size, orientation);
        var niceInterval = delta / desiredIntervalsCount;
        var minInterval = Math.pow(10, Math.floor(Math.log(niceInterval) / Math.log(10)));
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = intervalDivs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var interval = _step.value;

                currentInterval = minInterval * interval;
                if (desiredIntervalsCount < delta / currentInterval) {
                    break;
                }
                niceInterval = currentInterval;
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

        return niceInterval;
    }
    function getActualDesiredIntervalsCount(size, orientation) {
        var maximumLabels = 5;
        var desiredIntervalsCount = (orientation === 'Horizontal' ? 0.533 : 1) * maximumLabels;
        desiredIntervalsCount = Math.max(size * (desiredIntervalsCount / 100), 1);
        return desiredIntervalsCount;
    }
    /** @private */
    function getPointer(target, gauge) {
        var split = [];
        var axisIndex = void 0;
        var radix = 10;
        var pointIndex = void 0;
        var axis = void 0;
        var pointer = void 0;
        split = target.id.split('_');
        axisIndex = parseInt(split[2], radix);
        pointIndex = parseInt(split[4], radix);
        axis = gauge.axes[axisIndex];
        pointer = gauge.axes[axisIndex].pointers[pointIndex];
        return { axis: axis, axisIndex: axisIndex, pointer: pointer, pointerIndex: pointIndex };
    }
    /** @private */
    function getRangeColor(value, ranges) {
        var rangeColor = null;
        ranges.forEach(function (range, index) {
            if (value >= range.start && range.end >= value) {
                rangeColor = range.interior;
            }
        });
        return rangeColor;
    }
    /** @private */
    function getRangePalette() {
        var palette = ['#ff5985', '#ffb133', '#fcde0b', '#27d5ff', '#50c917'];
        return palette;
    }
    /** @private */
    function calculateShapes(location, shape, size, url, options, orientation, axis, pointer) {
        var path = void 0;
        var width = size.width;
        var height = size.height;
        var locX = location.x;
        var locY = location.y;
        var radius = void 0;
        switch (shape) {
            case 'Circle':
                radius = (width + height) / 4;
                locX = orientation === 'Vertical' ? !axis.opposedPosition ? pointer.placement !== 'Far' ? locX - radius : locX + radius : pointer.placement === 'Near' ? locX - radius : locX + radius : locX;
                locY = orientation === 'Vertical' ? locY : !axis.opposedPosition ? pointer.placement === 'Far' ? locY + radius : locY - radius : pointer.placement === 'Near' ? locY - radius : locY + radius;
                merge(options, { 'r': radius, 'cx': locX, 'cy': locY });
                break;
            case 'Diamond':
            case 'Rectangle':
                locX = orientation === 'Horizontal' ? locX - width / 2 : !axis.opposedPosition && pointer.placement !== 'Far' || axis.opposedPosition && pointer.placement === 'Near' ? locX - width : locX;
                locY = orientation === 'Vertical' ? locY : !axis.opposedPosition ? pointer.placement === 'Far' ? locY + height / 2 : locY - height / 2 : pointer.placement === 'Near' ? locY - height / 2 : locY + height / 2;
                if (shape === 'Diamond') {
                    path = 'M' + ' ' + locX + ' ' + locY + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + (locY - height / 2) + ' ' + 'L' + ' ' + (locX + width) + ' ' + locY + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + locX + ' ' + locY + ' z';
                } else {
                    path = 'M' + ' ' + locX + ' ' + (locY - height / 2) + ' ' + 'L' + ' ' + (locX + width) + ' ' + (locY - height / 2) + ' ' + 'L' + ' ' + (locX + width) + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + locX + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + locX + ' ' + (locY - height / 2) + ' z';
                }
                merge(options, { 'd': path });
                break;
            case 'Triangle':
                if (orientation === 'Vertical') {
                    path = 'M' + ' ' + locX + ' ' + locY + ' ' + 'L' + (locX - width) + ' ' + (locY - height / 2) + 'L' + (locX - width) + ' ' + (locY + height / 2) + ' Z';
                } else {
                    path = 'M' + ' ' + locX + ' ' + locY + ' ' + 'L' + (locX + width / 2) + ' ' + (locY - height) + 'L' + (locX - width / 2) + ' ' + (locY - height) + ' Z';
                }
                merge(options, { 'd': path });
                break;
            case 'InvertedTriangle':
                if (orientation === 'Vertical') {
                    path = 'M' + ' ' + locX + ' ' + locY + ' ' + 'L' + (locX + width) + ' ' + (locY - height / 2) + 'L' + (locX + width) + ' ' + (locY + height / 2) + ' Z';
                } else {
                    path = 'M' + ' ' + locX + ' ' + locY + ' ' + 'L' + (locX + width / 2) + ' ' + (locY + height) + 'L' + (locX - width / 2) + ' ' + (locY + height) + ' Z';
                }
                merge(options, { 'd': path });
                break;
            case 'Arrow':
                if (orientation === 'Vertical') {
                    path = 'M' + ' ' + locX + ' ' + locY + ' ' + 'L' + (locX - width / 2) + ' ' + (locY - height / 2) + ' ' + 'L' + (locX - width / 2) + ' ' + (locY - height / 2 + height / 4) + ' ' + 'L' + (locX - width) + ' ' + (locY - height / 2 + height / 4) + ' ' + 'L' + (locX - width) + ' ' + (locY + height / 2 - height / 4) + ' ' + 'L' + (locX - width / 2) + ' ' + (locY + height / 2 - height / 4) + ' ' + 'L' + (locX - width / 2) + ' ' + (locY + height / 2) + 'z';
                } else {
                    path = 'M' + ' ' + locX + ' ' + locY + ' ' + 'L' + (locX + width / 2) + ' ' + (locY - height / 2) + ' ' + 'L' + (locX + width / 2 - width / 4) + ' ' + (locY - height / 2) + ' ' + 'L' + (locX + width / 2 - width / 4) + ' ' + (locY - height) + ' ' + 'L' + (locX - width / 2 + width / 4) + ' ' + (locY - height) + ' ' + 'L' + (locX - width / 2 + width / 4) + ' ' + (locY - height / 2) + ' ' + 'L' + (locX - width / 2) + ' ' + (locY - height / 2) + 'z';
                }
                merge(options, { 'd': path });
                break;
            case 'InvertedArrow':
                if (orientation === 'Vertical') {
                    path = 'M' + ' ' + locX + ' ' + locY + 'L' + (locX + width / 2) + ' ' + (locY - height / 2) + ' ' + 'L' + (locX + width / 2) + ' ' + (locY - height / 2 + height / 4) + ' ' + 'L' + (locX + width) + ' ' + (locY - height / 2 + height / 4) + ' ' + 'L' + (locX + width) + ' ' + (locY + height / 2 - height / 4) + ' ' + 'L' + (locX + width / 2) + ' ' + (locY + height / 2 - height / 4) + ' ' + 'L' + (locX + width / 2) + ' ' + (locY + height / 2) + 'z';
                } else {
                    path = 'M' + ' ' + locX + ' ' + locY + ' ' + 'L' + (locX + width / 2) + ' ' + (locY + height / 2) + ' ' + 'L' + (locX + width / 2 - width / 4) + ' ' + (locY + height / 2) + ' ' + 'L' + (locX + width / 2 - width / 4) + ' ' + (locY + height) + ' ' + 'L' + (locX - width / 2 + width / 4) + ' ' + (locY + height) + ' ' + 'L' + (locX - width / 2 + width / 4) + ' ' + (locY + height / 2) + ' ' + 'L' + (locX - width / 2) + ' ' + (locY + height / 2) + 'z';
                }
                merge(options, { 'd': path });
                break;
            case 'Image':
                merge(options, { 'href': url, 'height': height, 'width': width, x: locX - width / 2, y: locY - height / 2 });
                break;
        }
        return options;
    }
    /** @private */
    function getBox(location, boxName, orientation, size, type, containerWidth, axis, cornerRadius) {
        var path = ' ';
        var radius = cornerRadius;
        var x1 = void 0;
        var y1 = void 0;
        var rectWidth = void 0;
        var rectHeight = void 0;
        var bottomRadius = void 0;
        var topRadius = void 0;
        switch (boxName) {
            case 'RoundedRectangle':
                x1 = location.x;
                y1 = location.y;
                rectWidth = location.width;
                rectHeight = location.height;
                path = 'M' + ' ' + x1 + ' ' + (radius + y1) + ' Q ' + x1 + ' ' + y1 + ' ' + (x1 + radius) + ' ' + y1 + ' ';
                path += 'L' + ' ' + (x1 + rectWidth - radius) + ' ' + y1 + ' Q ' + (x1 + rectWidth) + ' ' + y1 + ' ' + (x1 + rectWidth) + ' ' + (y1 + radius) + ' ';
                path += 'L ' + (x1 + rectWidth) + ' ' + (y1 + rectHeight - radius) + ' Q ' + (x1 + rectWidth) + ' ' + (y1 + rectHeight) + ' ' + (x1 + rectWidth - radius) + ' ' + (y1 + rectHeight) + ' ';
                path += ' L ' + (x1 + radius) + ' ' + (y1 + rectHeight) + ' Q ' + x1 + ' ' + (y1 + rectHeight) + ' ' + x1 + ' ' + (y1 + rectHeight - radius) + ' ';
                path += 'L' + ' ' + x1 + ' ' + (radius + y1) + ' ' + 'z';
                break;
            case 'Thermometer':
                var width = orientation === 'Vertical' ? location.width : location.height;
                bottomRadius = width + width / 2 / Math.PI;
                topRadius = width / 2;
                if (orientation === 'Vertical') {
                    var addValue = containerWidth + containerWidth / 2 / Math.PI - bottomRadius;
                    var _y = type === 'bar' ? location.y + addValue : location.y;
                    var locY = type === 'bar' ? location.y + (topRadius - topRadius / Math.PI) : location.y;
                    var locHeight = location.height;
                    path = 'M' + location.x + ' ' + (_y + locHeight) + ' A ' + bottomRadius + ' ' + bottomRadius + ', 0, 1, 0, ' + (location.x + location.width) + ' ' + (_y + locHeight) + ' L ' + (location.x + location.width) + ' ' + locY + ' A ' + topRadius + ' ' + topRadius + ', 0, 1, 0, ' + location.x + ' ' + locY + ' z ';
                } else {
                    var _x3 = type === 'bar' && !axis.isInversed ? location.x - (containerWidth + containerWidth / 2 / Math.PI - bottomRadius) : location.x;
                    var locWidth = type === 'bar' ? location.width - (topRadius - topRadius / Math.PI) : location.width;
                    path = 'M' + _x3 + ' ' + location.y + ' A ' + bottomRadius + ' ' + bottomRadius + ', 0, 1, 0, ' + _x3 + ' ' + (location.y + location.height) + ' L ' + ((type === 'bar' ? location.x : _x3) + locWidth) + ' ' + (location.y + location.height) + ' A ' + topRadius + ' ' + topRadius + ', 0, 1, 0, ' + ((type === 'bar' ? location.x : _x3) + locWidth) + ' ' + location.y + ' z ';
                }
                break;
        }
        return path;
    }

    /**
     * @private
     * To calculate the overall axis bounds for gauge.
     */
    return {
        setters: [function (_syncfusionEj2Base) {
            Animation = _syncfusionEj2Base.Animation;
            Browser = _syncfusionEj2Base.Browser;
            ChildProperty = _syncfusionEj2Base.ChildProperty;
            Collection = _syncfusionEj2Base.Collection;
            Complex = _syncfusionEj2Base.Complex;
            Component = _syncfusionEj2Base.Component;
            Event = _syncfusionEj2Base.Event;
            EventHandler = _syncfusionEj2Base.EventHandler;
            Internationalization = _syncfusionEj2Base.Internationalization;
            NotifyPropertyChanges = _syncfusionEj2Base.NotifyPropertyChanges;
            Property = _syncfusionEj2Base.Property;
            SvgRenderer = _syncfusionEj2Base.SvgRenderer;
            compile = _syncfusionEj2Base.compile;
            createElement = _syncfusionEj2Base.createElement;
            isNullOrUndefined = _syncfusionEj2Base.isNullOrUndefined;
            merge = _syncfusionEj2Base.merge;
            remove = _syncfusionEj2Base.remove;
            setStyleAttribute = _syncfusionEj2Base.setStyleAttribute;
        }, function (_syncfusionEj2Popups) {
            Tooltip = _syncfusionEj2Popups.Tooltip;
        }],
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

            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('Font', Font = function (_ChildProperty) {
                _inherits(Font, _ChildProperty);

                function Font() {
                    _classCallCheck(this, Font);

                    return _possibleConstructorReturn(this, (Font.__proto__ || Object.getPrototypeOf(Font)).apply(this, arguments));
                }

                return Font;
            }(ChildProperty));

            __decorate$1([Property('16px')], Font.prototype, "size", void 0);
            __decorate$1([Property('')], Font.prototype, "color", void 0);
            __decorate$1([Property('Segoe UI')], Font.prototype, "fontFamily", void 0);
            __decorate$1([Property('Regular')], Font.prototype, "fontWeight", void 0);
            __decorate$1([Property('Normal')], Font.prototype, "fontStyle", void 0);
            __decorate$1([Property(1)], Font.prototype, "opacity", void 0);
            /**
             * Configures the margin of linear gauge.
             */

            _export('Margin', Margin = function (_ChildProperty2) {
                _inherits(Margin, _ChildProperty2);

                function Margin() {
                    _classCallCheck(this, Margin);

                    return _possibleConstructorReturn(this, (Margin.__proto__ || Object.getPrototypeOf(Margin)).apply(this, arguments));
                }

                return Margin;
            }(ChildProperty));

            __decorate$1([Property(10)], Margin.prototype, "left", void 0);
            __decorate$1([Property(10)], Margin.prototype, "right", void 0);
            __decorate$1([Property(10)], Margin.prototype, "top", void 0);
            __decorate$1([Property(10)], Margin.prototype, "bottom", void 0);
            /**
             * Configures the border in linear gauge.
             */

            _export('Border', Border = function (_ChildProperty3) {
                _inherits(Border, _ChildProperty3);

                function Border() {
                    _classCallCheck(this, Border);

                    return _possibleConstructorReturn(this, (Border.__proto__ || Object.getPrototypeOf(Border)).apply(this, arguments));
                }

                return Border;
            }(ChildProperty));

            __decorate$1([Property(null)], Border.prototype, "color", void 0);
            __decorate$1([Property(0)], Border.prototype, "width", void 0);
            /**
             * Options for customizing the annotation.
             */

            _export('Annotation', Annotation = function (_ChildProperty4) {
                _inherits(Annotation, _ChildProperty4);

                function Annotation() {
                    _classCallCheck(this, Annotation);

                    return _possibleConstructorReturn(this, (Annotation.__proto__ || Object.getPrototypeOf(Annotation)).apply(this, arguments));
                }

                return Annotation;
            }(ChildProperty));

            __decorate$1([Property('')], Annotation.prototype, "content", void 0);
            __decorate$1([Property(0)], Annotation.prototype, "x", void 0);
            __decorate$1([Property(0)], Annotation.prototype, "y", void 0);
            __decorate$1([Property('None')], Annotation.prototype, "verticalAlignment", void 0);
            __decorate$1([Property('None')], Annotation.prototype, "horizontalAlignment", void 0);
            __decorate$1([Property('-1')], Annotation.prototype, "zIndex", void 0);
            __decorate$1([Complex({ size: '12px', color: null }, Font)], Annotation.prototype, "font", void 0);
            __decorate$1([Property(null)], Annotation.prototype, "axisIndex", void 0);
            __decorate$1([Property(null)], Annotation.prototype, "axisValue", void 0);
            /**
             * Options for customizing the container of linear gauge.
             */

            _export('Container', Container = function (_ChildProperty5) {
                _inherits(Container, _ChildProperty5);

                function Container() {
                    _classCallCheck(this, Container);

                    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
                }

                return Container;
            }(ChildProperty));

            __decorate$1([Property('Normal')], Container.prototype, "type", void 0);
            __decorate$1([Property(0)], Container.prototype, "height", void 0);
            __decorate$1([Property(0)], Container.prototype, "width", void 0);
            __decorate$1([Property(10)], Container.prototype, "roundedCornerRadius", void 0);
            __decorate$1([Property('transparent')], Container.prototype, "backgroundColor", void 0);
            __decorate$1([Complex({ width: 1, color: '#bfbfbf' }, Border)], Container.prototype, "border", void 0);
            __decorate$1([Property(0)], Container.prototype, "offset", void 0);
            /**
             * Options for customizing the tooltip in linear gauge.
             */

            _export('TooltipSettings', TooltipSettings = function (_ChildProperty6) {
                _inherits(TooltipSettings, _ChildProperty6);

                function TooltipSettings() {
                    _classCallCheck(this, TooltipSettings);

                    return _possibleConstructorReturn(this, (TooltipSettings.__proto__ || Object.getPrototypeOf(TooltipSettings)).apply(this, arguments));
                }

                return TooltipSettings;
            }(ChildProperty));

            __decorate$1([Property(false)], TooltipSettings.prototype, "enable", void 0);
            __decorate$1([Property('#FFFFFF')], TooltipSettings.prototype, "fill", void 0);
            __decorate$1([Complex({ color: '#686868', size: '13px' }, Font)], TooltipSettings.prototype, "textStyle", void 0);
            __decorate$1([Property(null)], TooltipSettings.prototype, "format", void 0);
            __decorate$1([Property(null)], TooltipSettings.prototype, "template", void 0);
            __decorate$1([Property(true)], TooltipSettings.prototype, "enableAnimation", void 0);
            __decorate$1([Complex({ color: 'black', width: 2 }, Border)], TooltipSettings.prototype, "border", void 0);

            __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('Line', Line = function (_ChildProperty7) {
                _inherits(Line, _ChildProperty7);

                function Line() {
                    _classCallCheck(this, Line);

                    return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
                }

                return Line;
            }(ChildProperty));

            __decorate$2([Property('')], Line.prototype, "dashArray", void 0);
            __decorate$2([Property(null)], Line.prototype, "height", void 0);
            __decorate$2([Property(2)], Line.prototype, "width", void 0);
            __decorate$2([Property(null)], Line.prototype, "color", void 0);
            __decorate$2([Property(0)], Line.prototype, "offset", void 0);
            /**
             * Options for customizing the axis labels appearance.
             */

            _export('Label', Label = function (_ChildProperty8) {
                _inherits(Label, _ChildProperty8);

                function Label() {
                    _classCallCheck(this, Label);

                    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
                }

                return Label;
            }(ChildProperty));

            __decorate$2([Complex({ size: '12px', color: null }, Font)], Label.prototype, "font", void 0);
            __decorate$2([Property(false)], Label.prototype, "useRangeColor", void 0);
            __decorate$2([Property('')], Label.prototype, "format", void 0);
            __decorate$2([Property(0)], Label.prototype, "offset", void 0);
            /**
             * Options for customizing the ranges of an axis.
             */

            _export('Range', Range = function (_ChildProperty9) {
                _inherits(Range, _ChildProperty9);

                function Range() {
                    _classCallCheck(this, Range);

                    return _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
                }

                return Range;
            }(ChildProperty));

            __decorate$2([Property(null)], Range.prototype, "start", void 0);
            __decorate$2([Property(null)], Range.prototype, "end", void 0);
            __decorate$2([Property('Outside')], Range.prototype, "position", void 0);
            __decorate$2([Property('')], Range.prototype, "color", void 0);
            __decorate$2([Property(10)], Range.prototype, "startWidth", void 0);
            __decorate$2([Property(10)], Range.prototype, "endWidth", void 0);
            __decorate$2([Property(0)], Range.prototype, "offset", void 0);
            __decorate$2([Complex({ color: '#000000', width: 0 }, Border)], Range.prototype, "border", void 0);
            /**
             * Options for customizing the minor tick lines.
             */

            _export('Tick', Tick = function (_ChildProperty10) {
                _inherits(Tick, _ChildProperty10);

                function Tick() {
                    _classCallCheck(this, Tick);

                    return _possibleConstructorReturn(this, (Tick.__proto__ || Object.getPrototypeOf(Tick)).apply(this, arguments));
                }

                return Tick;
            }(ChildProperty));

            __decorate$2([Property(20)], Tick.prototype, "height", void 0);
            __decorate$2([Property(2)], Tick.prototype, "width", void 0);
            __decorate$2([Property(null)], Tick.prototype, "interval", void 0);
            __decorate$2([Property(null)], Tick.prototype, "color", void 0);
            __decorate$2([Property(null)], Tick.prototype, "offset", void 0);
            /**
             * Options for customizing the pointers of an axis.
             */

            _export('Pointer', Pointer = function (_ChildProperty11) {
                _inherits(Pointer, _ChildProperty11);

                function Pointer() {
                    _classCallCheck(this, Pointer);

                    var _this11 = _possibleConstructorReturn(this, (Pointer.__proto__ || Object.getPrototypeOf(Pointer)).apply(this, arguments));

                    /** @private */
                    _this11.animationComplete = true;
                    /** @private */
                    _this11.currentValue = null;
                    return _this11;
                }

                return Pointer;
            }(ChildProperty));

            __decorate$2([Property('Marker')], Pointer.prototype, "type", void 0);
            __decorate$2([Property(null)], Pointer.prototype, "value", void 0);
            __decorate$2([Property('InvertedTriangle')], Pointer.prototype, "markerType", void 0);
            __decorate$2([Property(null)], Pointer.prototype, "imageUrl", void 0);
            __decorate$2([Complex({ color: '#808080' }, Border)], Pointer.prototype, "border", void 0);
            __decorate$2([Property(10)], Pointer.prototype, "roundedCornerRadius", void 0);
            __decorate$2([Property('Far')], Pointer.prototype, "placement", void 0);
            __decorate$2([Property(20)], Pointer.prototype, "height", void 0);
            __decorate$2([Property(20)], Pointer.prototype, "width", void 0);
            __decorate$2([Property(null)], Pointer.prototype, "color", void 0);
            __decorate$2([Property(1)], Pointer.prototype, "opacity", void 0);
            __decorate$2([Property(0)], Pointer.prototype, "animationDuration", void 0);
            __decorate$2([Property(false)], Pointer.prototype, "enableDrag", void 0);
            __decorate$2([Property(0)], Pointer.prototype, "offset", void 0);
            __decorate$2([Property(null)], Pointer.prototype, "description", void 0);

            _export('Axis', Axis = function (_ChildProperty12) {
                _inherits(Axis, _ChildProperty12);

                function Axis() {
                    _classCallCheck(this, Axis);

                    var _this12 = _possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).apply(this, arguments));

                    /** @private */
                    _this12.visibleLabels = [];
                    return _this12;
                }

                return Axis;
            }(ChildProperty));

            __decorate$2([Property(0)], Axis.prototype, "minimum", void 0);
            __decorate$2([Property(100)], Axis.prototype, "maximum", void 0);
            __decorate$2([Property(false)], Axis.prototype, "isInversed", void 0);
            __decorate$2([Property(false)], Axis.prototype, "opposedPosition", void 0);
            __decorate$2([Complex({}, Line)], Axis.prototype, "line", void 0);
            __decorate$2([Collection([{}], Range)], Axis.prototype, "ranges", void 0);
            __decorate$2([Collection([{}], Pointer)], Axis.prototype, "pointers", void 0);
            __decorate$2([Complex({ width: 2, height: 20 }, Tick)], Axis.prototype, "majorTicks", void 0);
            __decorate$2([Complex({ width: 1, height: 10 }, Tick)], Axis.prototype, "minorTicks", void 0);
            __decorate$2([Complex({}, Label)], Axis.prototype, "labelStyle", void 0);

            /**
             * Specifies the linear gauge constant value
             */
            /** @private */
            loaded = 'loaded';
            load = 'load';
            animationComplete = 'animationComplete';
            axisLabelRender = 'axisLabelRender';
            tooltipRender = 'tooltipRender';
            annotationRender = 'annotationRender';
            gaugeMouseMove = 'gaugeMouseMove';
            gaugeMouseLeave = 'gaugeMouseLeave';
            gaugeMouseDown = 'gaugeMouseDown';
            gaugeMouseUp = 'gaugeMouseUp';
            valueChange = 'valueChange';
            resized = 'resized';

            _export('VisibleRange', VisibleRange = function VisibleRange(min, max, interval, delta) {
                _classCallCheck(this, VisibleRange);

                this.min = min;
                this.max = max;
                this.interval = interval;
                this.delta = delta;
            });

            _export('GaugeLocation', GaugeLocation = function GaugeLocation(x, y) {
                _classCallCheck(this, GaugeLocation);

                this.x = x;
                this.y = y;
            });

            _export('Size', Size = function Size(width, height) {
                _classCallCheck(this, Size);

                this.width = width;
                this.height = height;
            });

            _export('Rect', Rect = function Rect(x, y, width, height) {
                _classCallCheck(this, Rect);

                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            });

            _export('CustomizeOption', CustomizeOption = function CustomizeOption(id) {
                _classCallCheck(this, CustomizeOption);

                this.id = id;
            });

            _export('PathOption', PathOption = function (_CustomizeOption) {
                _inherits(PathOption, _CustomizeOption);

                function PathOption(id, fill, width, color, opacity, dashArray, d) {
                    var transform = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';

                    _classCallCheck(this, PathOption);

                    var _this13 = _possibleConstructorReturn(this, (PathOption.__proto__ || Object.getPrototypeOf(PathOption)).call(this, id));

                    _this13.opacity = opacity;
                    _this13.fill = fill;
                    _this13.stroke = color;
                    _this13['stroke-width'] = width;
                    _this13['stroke-dasharray'] = dashArray;
                    _this13.d = d;
                    _this13.transform = transform;
                    return _this13;
                }

                return PathOption;
            }(CustomizeOption));

            _export('RectOption', RectOption = function RectOption(id, fill, border, opacity, rect, transform, dashArray) {
                _classCallCheck(this, RectOption);

                this.opacity = opacity;
                this.id = id;
                this.y = rect.y;
                this.x = rect.x;
                this.fill = fill;
                this.stroke = border.color;
                this['stroke-width'] = border.width;
                this.height = rect.height;
                this.width = rect.width;
            });

            _export('TextOption', TextOption = function (_CustomizeOption2) {
                _inherits(TextOption, _CustomizeOption2);

                function TextOption(id, x, y, anchor, text) {
                    var transform = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
                    var baseLine = arguments[6];

                    _classCallCheck(this, TextOption);

                    var _this14 = _possibleConstructorReturn(this, (TextOption.__proto__ || Object.getPrototypeOf(TextOption)).call(this, id));

                    _this14.transform = '';
                    _this14.baseLine = 'auto';
                    _this14.x = x;
                    _this14.y = y;
                    _this14.anchor = anchor;
                    _this14.text = text;
                    _this14.transform = transform;
                    _this14.baseLine = baseLine;
                    return _this14;
                }

                return TextOption;
            }(CustomizeOption));

            _export('VisibleLabels', VisibleLabels = function VisibleLabels(text, value, size) {
                _classCallCheck(this, VisibleLabels);

                this.text = text;
                this.value = value;
                this.size = size;
            });

            _export('Align', Align = function Align(axisIndex, align) {
                _classCallCheck(this, Align);

                this.align = align;
                this.axisIndex = axisIndex;
            });

            AxisLayoutPanel = function () {
                function AxisLayoutPanel(gauge) {
                    _classCallCheck(this, AxisLayoutPanel);

                    this.gauge = gauge;
                }
                /**
                 * To calculate the axis bounds
                 */


                _createClass(AxisLayoutPanel, [{
                    key: 'calculateAxesBounds',
                    value: function calculateAxesBounds() {
                        var axis = void 0;
                        var bounds = void 0;
                        this.gauge.nearSizes = [];
                        this.gauge.farSizes = [];
                        var x = void 0;
                        var y = void 0;
                        var width = void 0;
                        var height = void 0;
                        var axisPadding = 8;
                        var containerRect = this.gauge.containerBounds;
                        this.checkThermometer();
                        for (var i = 0; i < this.gauge.axes.length; i++) {
                            axis = this.gauge.axes[i];
                            axis.checkAlign = new Align(i, !axis.opposedPosition ? 'Near' : 'Far');
                            !axis.opposedPosition ? this.gauge.nearSizes.push(1) : this.gauge.farSizes.push(1);
                            this.calculateLineBounds(axis, i);
                            this.calculateTickBounds(axis, i);
                            this.calculateLabelBounds(axis, i);
                            if (axis.pointers.length > 0) {
                                this.calculatePointerBounds(axis, i);
                            }
                            if (axis.ranges.length > 0) {
                                this.calculateRangesBounds(axis, i);
                            }
                            bounds = axis.labelBounds;
                            if (this.gauge.orientation === 'Vertical') {
                                x = !axis.opposedPosition ? bounds.x - axisPadding : axis.lineBounds.x;
                                y = axis.lineBounds.y;
                                height = axis.lineBounds.height;
                                width = Math.abs(!axis.opposedPosition ? axis.lineBounds.x - x : bounds.x + bounds.width + axisPadding - x);
                            } else {
                                y = !axis.opposedPosition ? bounds.y - bounds.height - axisPadding : axis.lineBounds.y;
                                x = axis.lineBounds.x;
                                width = axis.lineBounds.width;
                                height = Math.abs(!axis.opposedPosition ? Math.abs(axis.lineBounds.y - y) : bounds.y + axisPadding - y);
                            }
                            axis.bounds = new Rect(x, y, width, height);
                        }
                    }
                }, {
                    key: 'calculateLineBounds',
                    value: function calculateLineBounds(axis, axisIndex) {
                        var x = void 0;
                        var y = void 0;
                        var width = void 0;
                        var height = void 0;
                        var index = void 0;
                        var prevAxis = void 0;
                        var lineHeight = axis.line.height;
                        var orientation = this.gauge.orientation;
                        var containerRect = this.gauge.containerBounds;
                        lineHeight = axis.line.width > 0 ? lineHeight : null;
                        if (orientation === 'Vertical') {
                            y = isNullOrUndefined(lineHeight) ? containerRect.y : containerRect.y + (containerRect.height / 2 - lineHeight / 2);
                            width = axis.line.width;
                            height = isNullOrUndefined(lineHeight) ? containerRect.height : lineHeight;
                        } else {
                            x = isNullOrUndefined(lineHeight) ? containerRect.x : containerRect.x + (containerRect.width / 2 - lineHeight / 2);
                            height = axis.line.width;
                            width = isNullOrUndefined(lineHeight) ? containerRect.width : lineHeight;
                        }
                        index = this.checkPreviousAxes(axis, axisIndex);
                        if (isNullOrUndefined(index)) {
                            if (orientation === 'Vertical') {
                                x = (!axis.opposedPosition ? containerRect.x : containerRect.x + containerRect.width) + axis.line.offset;
                            } else {
                                y = (!axis.opposedPosition ? containerRect.y : containerRect.y + containerRect.height) + axis.line.offset;
                            }
                        } else {
                            prevAxis = this.gauge.axes[index];
                            if (orientation === 'Vertical') {
                                x = (!axis.opposedPosition ? prevAxis.bounds.x : prevAxis.bounds.x + prevAxis.bounds.width) + axis.line.offset;
                            } else {
                                y = (!axis.opposedPosition ? prevAxis.bounds.y : prevAxis.bounds.y + prevAxis.bounds.height) + axis.line.offset;
                            }
                        }
                        axis.lineBounds = new Rect(x, y, width, height);
                    }
                }, {
                    key: 'calculateTickBounds',
                    value: function calculateTickBounds(axis, axisIndex) {
                        var x = void 0;
                        var y = void 0;
                        var major = void 0;
                        var minor = void 0;
                        var min = Math.min(axis.minimum, axis.maximum);
                        var max = Math.max(axis.minimum, axis.maximum);
                        min = min === max ? max - 1 : min;
                        var interval = axis.majorTicks.interval;
                        var bounds = axis.lineBounds;
                        major = axis.majorTicks;
                        minor = axis.minorTicks;
                        axis.majorInterval = major.interval;
                        axis.minorInterval = minor.interval;
                        var size = this.gauge.orientation === 'Vertical' ? bounds.height : bounds.width;
                        var lineSize = (this.gauge.orientation === 'Vertical' ? bounds.width : bounds.height) / 2;
                        axis.majorInterval = isNullOrUndefined(axis.majorInterval) ? calculateNiceInterval(min, max, size, this.gauge.orientation) : major.interval;
                        axis.visibleRange = new VisibleRange(min, max, axis.majorInterval, max - min);
                        axis.minorInterval = isNullOrUndefined(axis.minorInterval) ? axis.majorInterval / 2 : axis.minorInterval;
                        if (this.gauge.orientation === 'Vertical') {
                            x = (!axis.opposedPosition ? bounds.x - lineSize - major.height : bounds.x + lineSize) + major.offset;
                            axis.majorTickBounds = new Rect(x, bounds.y, major.height, bounds.height);
                            x = (!axis.opposedPosition ? bounds.x - lineSize - minor.height : bounds.x + lineSize) + minor.offset;
                            axis.minorTickBounds = new Rect(x, bounds.y, minor.height, bounds.height);
                        } else {
                            y = (!axis.opposedPosition ? bounds.y - lineSize - major.height : bounds.y + lineSize) + major.offset;
                            axis.majorTickBounds = new Rect(bounds.x, y, bounds.width, major.height);
                            y = (!axis.opposedPosition ? bounds.y - lineSize - minor.height : bounds.y + lineSize) + minor.offset;
                            axis.minorTickBounds = new Rect(bounds.x, y, bounds.width, minor.height);
                        }
                    }
                }, {
                    key: 'calculateLabelBounds',
                    value: function calculateLabelBounds(axis, axisIndex) {
                        var x = void 0;
                        var y = void 0;
                        var width = void 0;
                        var height = void 0;
                        var padding = 5;
                        var bounds = axis.majorTickBounds;
                        var offset = axis.labelStyle.offset;
                        this.calculateVisibleLabels(axis);
                        width = axis.maxLabelSize.width;
                        height = axis.maxLabelSize.height / 2;
                        if (this.gauge.orientation === 'Vertical') {
                            x = (!axis.opposedPosition ? bounds.x - width - padding : bounds.x + bounds.width + padding) + offset;
                            y = axis.lineBounds.y;
                        } else {
                            y = (!axis.opposedPosition ? bounds.y - padding : bounds.y + bounds.height + padding + height) + offset;
                            x = axis.lineBounds.x;
                        }
                        axis.labelBounds = new Rect(x, y, width, height);
                    }
                }, {
                    key: 'calculatePointerBounds',
                    value: function calculatePointerBounds(axis, axisIndex) {
                        var pointer = void 0;
                        var range = axis.visibleRange;
                        var orientation = this.gauge.orientation;
                        var line = axis.lineBounds;
                        var label = axis.labelBounds;
                        var minimumValue = Math.min(range.min, range.max);
                        var maximumValue = Math.max(range.min, range.max);
                        for (var i = 0; i < axis.pointers.length; i++) {
                            pointer = axis.pointers[i];
                            pointer.currentValue = pointer.value !== null ? pointer.value < minimumValue ? minimumValue : pointer.value > maximumValue ? maximumValue : pointer.value : minimumValue;
                            if (pointer.width > 0 && withInRange(pointer.currentValue, null, null, range.max, range.min, 'pointer')) {
                                this['calculate' + pointer.type + 'Bounds'](axisIndex, axis, i, pointer);
                            }
                        }
                    }
                }, {
                    key: 'calculateMarkerBounds',
                    value: function calculateMarkerBounds(axisIndex, axis, pointerIndex, pointer) {
                        var x = void 0;
                        var y = void 0;
                        var line = axis.lineBounds;
                        var offset = pointer.offset;
                        var range = axis.visibleRange;
                        var placement = pointer.placement;
                        var tick = axis.majorTickBounds;
                        var label = axis.labelBounds;
                        var border = pointer.border.width;
                        if (this.gauge.orientation === 'Vertical') {
                            x = !axis.opposedPosition ? placement === 'Near' ? label.x : placement === 'Center' ? tick.x : line.x : placement === 'Far' ? label.x + label.width : placement === 'Center' ? tick.x + tick.width : line.x;
                            x = !axis.opposedPosition ? (pointer.placement === 'Far' ? x + border : x - border) + offset : (pointer.placement === 'Near' ? x - border : x + border) + offset;
                            y = valueToCoefficient(pointer.currentValue, axis, this.gauge.orientation, range) * line.height + line.y;
                        } else {
                            y = !axis.opposedPosition ? placement === 'Near' ? label.y - label.height : placement === 'Center' ? tick.y : line.y : placement === 'Far' ? label.y : placement === 'Center' ? tick.y + tick.height : line.y;
                            y = !axis.opposedPosition ? (pointer.placement === 'Far' ? y + border : y - border) + offset : (pointer.placement === 'Near' ? y - border : y + border) + offset;
                            x = valueToCoefficient(pointer.currentValue, axis, this.gauge.orientation, range) * line.width + line.x;
                        }
                        pointer.bounds = new Rect(x, y, pointer.width, pointer.height);
                    }
                }, {
                    key: 'calculateBarBounds',
                    value: function calculateBarBounds(axisIndex, axis, pointerIndex, pointer) {
                        var x1 = void 0;
                        var x2 = void 0;
                        var y1 = void 0;
                        var y2 = void 0;
                        var height = void 0;
                        var width = void 0;
                        var line = axis.lineBounds;
                        var padding = 10;
                        var range = axis.visibleRange;
                        var orientation = this.gauge.orientation;
                        var offset = pointer.offset;
                        var container = this.gauge.containerBounds;
                        if (orientation === 'Vertical') {
                            x1 = container.width > 0 ? container.x + (container.width / 2 - pointer.width / 2) : !axis.opposedPosition ? line.x + padding : line.x - pointer.width - padding;
                            x1 += offset;
                            y1 = valueToCoefficient(pointer.currentValue, axis, orientation, range) * line.height + line.y;
                            y2 = valueToCoefficient(range.min, axis, orientation, range) * line.height + line.y;
                            height = Math.abs(y2 - y1);
                            y1 = !axis.isInversed ? y1 : y2;
                            width = pointer.width;
                        } else {
                            x1 = valueToCoefficient(range.min, axis, orientation, range) * line.width + line.x;
                            y1 = container.height > 0 ? container.y + container.height / 2 - pointer.height / 2 : !axis.opposedPosition ? line.y + padding : line.y - pointer.height - padding;
                            y1 += offset;
                            height = pointer.height;
                            x2 = valueToCoefficient(pointer.currentValue, axis, orientation, range) * line.width + line.x;
                            width = Math.abs(x2 - x1);
                            x1 = !axis.isInversed ? x1 : x2;
                        }
                        pointer.bounds = new Rect(x1, y1, width, height);
                    }
                }, {
                    key: 'calculateRangesBounds',
                    value: function calculateRangesBounds(axis, axisIndex) {
                        var range = void 0;
                        var start = void 0;
                        var end = void 0;
                        var line = axis.lineBounds;
                        var visibleRange = axis.visibleRange;
                        var orientation = this.gauge.orientation;
                        var startVal = void 0;
                        var endVal = void 0;
                        var pointX = void 0;
                        var pointY = void 0;
                        var width = void 0;
                        var height = void 0;
                        var position = void 0;
                        var startWidth = void 0;
                        var endWidth = void 0;
                        var colors = void 0;
                        for (var i = 0; i < axis.ranges.length; i++) {
                            range = axis.ranges[i];
                            if (withInRange(null, range.start, range.end, visibleRange.max, visibleRange.min, 'range')) {
                                start = Math.min(range.start, range.end);
                                end = Math.max(range.start, range.end);
                                position = range.position;
                                startWidth = range.startWidth;
                                endWidth = range.endWidth;
                                colors = this.gauge.rangePalettes.length ? this.gauge.rangePalettes : getRangePalette();
                                range.interior = range.color ? range.color : colors[i % colors.length];
                                if (this.gauge.orientation === 'Vertical') {
                                    pointX = line.x + range.offset;
                                    pointY = valueToCoefficient(end, axis, orientation, visibleRange) * line.height + line.y;
                                    height = valueToCoefficient(start, axis, orientation, visibleRange) * line.height + line.y;
                                    height -= pointY;
                                    startVal = !axis.opposedPosition ? position === 'Inside' ? pointX + startWidth : pointX - startWidth : position === 'Inside' ? pointX - startWidth : pointX + startWidth;
                                    endVal = !axis.opposedPosition ? position === 'Inside' ? pointX + endWidth : pointX - endWidth : position === 'Inside' ? pointX - endWidth : pointX + endWidth;
                                    range.path = 'M' + pointX + ' ' + pointY + ' L ' + pointX + ' ' + (pointY + height) + ' L ' + startVal + ' ' + (pointY + height) + ' L ' + endVal + ' ' + pointY + ' L ' + pointX + ' ' + pointY + ' z ';
                                } else {
                                    pointX = valueToCoefficient(end, axis, orientation, visibleRange) * line.width + line.x;
                                    pointY = axis.lineBounds.y + range.offset;
                                    width = valueToCoefficient(start, axis, orientation, visibleRange) * line.width + line.x;
                                    width = pointX - width;
                                    startVal = !axis.opposedPosition ? position === 'Inside' ? pointY + startWidth : pointY - startWidth : position === 'Inside' ? pointY - startWidth : pointY + startWidth;
                                    endVal = !axis.opposedPosition ? position === 'Inside' ? pointY + endWidth : pointY - endWidth : position === 'Inside' ? pointY - endWidth : pointY + endWidth;
                                    range.path = 'M' + pointX + ' ' + pointY + ' L ' + (pointX - width) + ' ' + pointY + ' L ' + (pointX - width) + ' ' + startVal + ' L ' + pointX + ' ' + endVal + ' L ' + pointX + ' ' + pointY + ' z ';
                                }
                            }
                        }
                    }
                }, {
                    key: 'checkPreviousAxes',
                    value: function checkPreviousAxes(currentAxis, axisIndex) {
                        var index = axisIndex - 1;
                        var prevAxis = void 0;
                        var isPositive = index >= 0 ? true : false;
                        if (isPositive) {
                            prevAxis = this.gauge.axes[index];
                            index = prevAxis.checkAlign.align === currentAxis.checkAlign.align ? index : this.checkPreviousAxes(currentAxis, index);
                        } else {
                            index = null;
                        }
                        return index;
                    }
                }, {
                    key: 'calculateVisibleLabels',
                    value: function calculateVisibleLabels(axis) {
                        axis.visibleLabels = [];
                        var min = axis.visibleRange.min;
                        var max = axis.visibleRange.max;
                        var interval = axis.visibleRange.interval;
                        var format = void 0;
                        var argsData = void 0;
                        var style = axis.labelStyle;
                        var labelSize = void 0;
                        var customLabelFormat = style.format && style.format.match('{value}') !== null;
                        format = this.gauge.intl.getNumberFormat({
                            format: getLabelFormat(style.format), useGrouping: this.gauge.useGroupingSeparator
                        });
                        for (var i = min; i <= max && interval > 0; i += interval) {
                            argsData = {
                                cancel: false, name: axisLabelRender, axis: axis,
                                text: customLabelFormat ? style.format.replace(new RegExp('{value}', 'g'), format(i)) : format(i),
                                value: i
                            };
                            this.gauge.trigger(axisLabelRender, argsData);
                            labelSize = measureText(argsData.text, axis.labelStyle.font);
                            if (!argsData.cancel) {
                                axis.visibleLabels.push(new VisibleLabels(argsData.text, i, labelSize));
                            }
                        }
                        this.getMaxLabelWidth(this.gauge, axis);
                    }
                }, {
                    key: 'getMaxLabelWidth',
                    value: function getMaxLabelWidth(gauge, axis) {
                        axis.maxLabelSize = new Size(0, 0);
                        var label = void 0;
                        for (var i = 0; i < axis.visibleLabels.length; i++) {
                            label = axis.visibleLabels[i];
                            label.size = measureText(label.text, axis.labelStyle.font);
                            if (label.size.width > axis.maxLabelSize.width) {
                                axis.maxLabelSize.width = label.size.width;
                            }
                            if (label.size.height > axis.maxLabelSize.height) {
                                axis.maxLabelSize.height = label.size.height;
                            }
                        }
                    }
                }, {
                    key: 'checkThermometer',
                    value: function checkThermometer() {
                        if (this.gauge.container.type === 'Thermometer') {
                            this.gauge.axes.map(function (axis, index) {
                                if (axis.isInversed) {
                                    axis.pointers.map(function (pointer, index) {
                                        if (pointer.type === 'Bar') {
                                            axis.isInversed = false;
                                        }
                                    });
                                }
                            });
                        }
                    }
                }]);

                return AxisLayoutPanel;
            }();

            Animations = function () {
                function Animations(gauge) {
                    _classCallCheck(this, Animations);

                    this.gauge = gauge;
                }
                /**
                 * To do the marker pointer animation.
                 * @return {void}
                 * @private
                 */


                _createClass(Animations, [{
                    key: 'performMarkerAnimation',
                    value: function performMarkerAnimation(element, axis, pointer) {
                        var _this15 = this;

                        var markerElement = element;
                        var options = void 0;
                        var timeStamp = void 0;
                        var range = axis.visibleRange;
                        var rectHeight = this.gauge.orientation === 'Vertical' ? axis.lineBounds.height : axis.lineBounds.width;
                        var rectY = this.gauge.orientation === 'Vertical' ? axis.lineBounds.y : axis.lineBounds.x;
                        if (this.gauge.orientation === 'Vertical') {
                            pointer.bounds.y = valueToCoefficient(pointer.currentValue, axis, this.gauge.orientation, range) * rectHeight + rectY;
                        } else {
                            pointer.bounds.x = valueToCoefficient(pointer.currentValue, axis, this.gauge.orientation, range) * rectHeight + rectY;
                        }
                        options = new PathOption(markerElement.id, null, null, null);
                        options = calculateShapes(pointer.bounds, pointer.markerType, new Size(pointer.width, pointer.height), pointer.imageUrl, options, this.gauge.orientation, axis, pointer);
                        var currentValue = void 0;
                        var start = pointer.startValue;
                        var end = pointer.currentValue;
                        start = start === end ? range.min : start;
                        var val = Math.abs(start - end);
                        var currentPath = options.d;
                        new Animation({}).animate(markerElement, {
                            duration: pointer.animationDuration,
                            progress: function progress(args) {
                                if (args.timeStamp >= args.delay) {
                                    timeStamp = (args.timeStamp - args.delay) / args.duration;
                                    currentValue = start < end ? start + timeStamp * val : start - timeStamp * val;
                                    if (_this15.gauge.orientation === 'Vertical') {
                                        pointer.bounds.y = valueToCoefficient(currentValue, axis, _this15.gauge.orientation, range) * rectHeight + rectY;
                                    } else {
                                        pointer.bounds.x = valueToCoefficient(currentValue, axis, _this15.gauge.orientation, range) * rectHeight + rectY;
                                    }
                                    options = calculateShapes(pointer.bounds, pointer.markerType, new Size(pointer.width, pointer.height), pointer.imageUrl, options, _this15.gauge.orientation, axis, pointer);
                                    markerElement.setAttribute('d', options.d);
                                }
                            },
                            end: function end(model) {
                                markerElement.setAttribute('d', currentPath);
                                pointer.startValue = pointer.currentValue;
                                pointer.animationComplete = true;
                                _this15.gauge.trigger(animationComplete, { axis: axis, pointer: pointer });
                            }
                        });
                    }
                }, {
                    key: 'performBarAnimation',
                    value: function performBarAnimation(element, axis, pointer) {
                        var _this16 = this;

                        var val = void 0;
                        var radix = 10;
                        var timeStamp = void 0;
                        var value2 = void 0;
                        var value1 = void 0;
                        var currentValue = void 0;
                        var clipHeight = void 0;
                        var clipY = void 0;
                        var clipX = void 0;
                        var clipVal = void 0;
                        var rectHeight = void 0;
                        var rectY = void 0;
                        var clipWidth = void 0;
                        var currentHeight = void 0;
                        var clipElement = void 0;
                        var range = axis.visibleRange;
                        var pointerElement = element;
                        var lineHeight = this.gauge.orientation === 'Vertical' ? axis.lineBounds.height : axis.lineBounds.width;
                        var lineY = this.gauge.orientation === 'Vertical' ? axis.lineBounds.y : axis.lineBounds.x;
                        var size = new Size(this.gauge.availableSize.width, this.gauge.availableSize.height);
                        var start = pointer.startValue;
                        var end = pointer.currentValue;
                        start = start === end ? range.min : start;
                        var path = '';
                        var currentPath = '';
                        var tagName = pointerElement.tagName;
                        val = Math.abs(start - end);
                        var pointerValue = valueToCoefficient(end, axis, this.gauge.orientation, range) * lineHeight + lineY;
                        var startPointerVal = valueToCoefficient(range.min, axis, this.gauge.orientation, range) * lineHeight + lineY;
                        rectY = this.gauge.orientation === 'Vertical' ? !axis.isInversed ? pointerValue : startPointerVal : axis.isInversed ? pointerValue : startPointerVal;
                        rectHeight = Math.abs(startPointerVal - pointerValue);
                        if (this.gauge.container.type === 'Thermometer' && start === 0) {
                            clipElement = pointerElement.parentElement.childNodes[1].childNodes[0].childNodes[0];
                            if (this.gauge.orientation === 'Vertical') {
                                clipY = clipElement.getAttribute('y');
                                clipHeight = clipElement.getAttribute('height');
                                clipVal = parseInt(clipY, radix) + parseInt(clipHeight, radix);
                                clipElement.setAttribute('y', clipVal.toString());
                            } else {
                                clipX = clipElement.getAttribute('x');
                                clipWidth = clipElement.getAttribute('width');
                                clipVal = parseInt(clipX, radix) + parseInt(clipWidth, radix);
                                clipElement.setAttribute('width', '0');
                            }
                        }
                        path = getBox(pointer.bounds, this.gauge.container.type, this.gauge.orientation, new Size(pointer.bounds.width, pointer.bounds.height), 'bar', this.gauge.container.width, axis, pointer.roundedCornerRadius);
                        new Animation({}).animate(pointerElement, {
                            duration: pointer.animationDuration,
                            progress: function progress(animate) {
                                if (animate.timeStamp >= animate.delay) {
                                    timeStamp = (animate.timeStamp - animate.delay) / animate.duration;
                                    currentValue = start < end ? start + timeStamp * val : start - timeStamp * val;
                                    value2 = valueToCoefficient(currentValue, axis, _this16.gauge.orientation, range) * lineHeight + lineY;
                                    value1 = valueToCoefficient(range.min, axis, _this16.gauge.orientation, range) * lineHeight + lineY;
                                    currentHeight = Math.abs(value2 - value1);
                                    if (_this16.gauge.orientation === 'Vertical') {
                                        pointer.bounds.y = !axis.isInversed ? value2 : value1;
                                        pointer.bounds.height = currentHeight;
                                    } else {
                                        pointer.bounds.x = axis.isInversed ? value2 : value1;
                                        pointer.bounds.width = currentHeight;
                                    }
                                    if (tagName === 'path') {
                                        if (start === 0 && _this16.gauge.container.type === 'Thermometer') {
                                            _this16.gauge.orientation === 'Vertical' ? clipElement.setAttribute('y', (clipVal - timeStamp * parseInt(clipHeight, radix)).toString()) : clipElement.setAttribute('width', (timeStamp * parseInt(clipWidth, radix)).toString());
                                        }
                                        currentPath = getBox(pointer.bounds, _this16.gauge.container.type, _this16.gauge.orientation, new Size(pointer.bounds.width, pointer.bounds.height), 'bar', _this16.gauge.container.width, axis, pointer.roundedCornerRadius);
                                        pointerElement.setAttribute('d', currentPath);
                                    } else {
                                        if (_this16.gauge.orientation === 'Vertical') {
                                            pointerElement.setAttribute('y', pointer.bounds.y.toString());
                                            pointerElement.setAttribute('height', pointer.bounds.height.toString());
                                        } else {
                                            pointerElement.setAttribute('x', pointer.bounds.x.toString());
                                            pointerElement.setAttribute('width', pointer.bounds.width.toString());
                                        }
                                    }
                                }
                            },
                            end: function end(model) {
                                if (tagName === 'path') {
                                    if (start === 0 && _this16.gauge.container.type === 'Thermometer') {
                                        pointerElement.parentElement.children[1].remove();
                                    } else {
                                        pointerElement.setAttribute('d', path);
                                    }
                                } else {
                                    if (_this16.gauge.orientation === 'Vertical') {
                                        pointerElement.setAttribute('y', rectY.toString());
                                        pointerElement.setAttribute('height', rectHeight.toString());
                                    } else {
                                        pointerElement.setAttribute('x', rectY.toString());
                                        pointerElement.setAttribute('width', rectHeight.toString());
                                    }
                                }
                                pointer.startValue = pointer.currentValue;
                                _this16.gauge.trigger(animationComplete, { axis: axis, pointer: pointer });
                            }
                        });
                    }
                }]);

                return Animations;
            }();

            AxisRenderer = function (_Animations) {
                _inherits(AxisRenderer, _Animations);

                function AxisRenderer(gauge) {
                    _classCallCheck(this, AxisRenderer);

                    return _possibleConstructorReturn(this, (AxisRenderer.__proto__ || Object.getPrototypeOf(AxisRenderer)).call(this, gauge));
                }

                _createClass(AxisRenderer, [{
                    key: 'renderAxes',
                    value: function renderAxes() {
                        var _this18 = this;

                        var axis = void 0;
                        var major = void 0;
                        var minor = void 0;
                        this.axisElements = [];
                        this.axisObject = this.gauge.renderer.createGroup({
                            id: this.gauge.element.id + '_Axis_Collections',
                            transform: 'translate( 0, 0 )'
                        });
                        for (var i = 0; i < this.gauge.axes.length; i++) {
                            axis = this.gauge.axes[i];
                            major = axis.majorTicks;
                            minor = axis.minorTicks;
                            this.htmlObject = this.gauge.renderer.createGroup({ id: this.gauge.element.id + '_Axis_Group_' + i });
                            this.drawAxisLine(axis, this.htmlObject, i);
                            this.drawRanges(axis, this.htmlObject, i);
                            this.drawTicks(axis, major, this.htmlObject, 'MajorTicks', axis.majorTickBounds);
                            this.drawTicks(axis, minor, this.htmlObject, 'MinorTicks', axis.minorTickBounds);
                            this.drawAxisLabels(axis, this.htmlObject);
                            this.drawPointers(axis, this.htmlObject, i);
                            this.axisElements.push(this.htmlObject);
                        }
                        this.axisElements.forEach(function (axisElement) {
                            _this18.axisObject.appendChild(axisElement);
                        });
                        this.gauge.svgObject.appendChild(this.axisObject);
                        if (this.gauge.nearSizes.length !== this.gauge.farSizes.length && this.gauge.axes.length > 1) {
                            this.axisAlign(this.gauge.axes);
                        }
                    }
                }, {
                    key: 'axisAlign',
                    value: function axisAlign(axes) {
                        var nearAxisWidth = 0;
                        var farAxisWidth = 0;
                        var tranX = void 0;
                        var transY = void 0;
                        if (this.gauge.orientation === 'Vertical') {
                            axes.forEach(function (axis, axisIndex) {
                                if (!axis.opposedPosition) {
                                    nearAxisWidth += axis.bounds.width;
                                } else {
                                    farAxisWidth += axis.bounds.width;
                                }
                            });
                            nearAxisWidth += this.gauge.containerBounds.width / 2;
                            farAxisWidth += this.gauge.containerBounds.width / 2;
                            tranX = nearAxisWidth / 2 - farAxisWidth / 2;
                            this.axisObject.setAttribute('transform', 'translate(' + tranX + ',0)');
                            if (!isNullOrUndefined(this.gauge.containerObject)) {
                                this.gauge.containerObject.setAttribute('transform', 'translate(' + tranX + ',0)');
                            }
                        } else {
                            axes.forEach(function (axis, axisIndex) {
                                if (!axis.opposedPosition) {
                                    nearAxisWidth += axis.bounds.height;
                                } else {
                                    farAxisWidth += axis.bounds.height;
                                }
                            });
                            nearAxisWidth += this.gauge.containerBounds.height / 2;
                            farAxisWidth += this.gauge.containerBounds.height / 2;
                            transY = nearAxisWidth / 2 - farAxisWidth / 2;
                            this.axisObject.setAttribute('transform', 'translate(0,' + transY + ')');
                            if (!isNullOrUndefined(this.gauge.containerObject)) {
                                this.gauge.containerObject.setAttribute('transform', 'translate(0,' + transY + ')');
                            }
                        }
                    }
                }, {
                    key: 'drawAxisLine',
                    value: function drawAxisLine(axis, axisObject, axisIndex) {
                        var options = void 0;
                        var rect = axis.lineBounds;
                        var path = '';
                        if (axis.line.width > 0) {
                            path = 'M' + rect.x + ' ' + rect.y + ' L ' + (this.gauge.orientation === 'Vertical' ? rect.x : rect.x + rect.width) + ' ' + (this.gauge.orientation === 'Vertical' ? rect.y + rect.height : rect.y) + 'z';
                            options = new PathOption(this.gauge.element.id + '_AxisLine_' + axisIndex, axis.line.color, axis.line.width, axis.line.color, 1, axis.line.dashArray, path);
                            axisObject.appendChild(this.gauge.renderer.drawPath(options));
                        }
                    }
                }, {
                    key: 'drawTicks',
                    value: function drawTicks(axis, ticks, axisObject, tickID, tickBounds) {
                        var tickPath = '';
                        var pointY = void 0;
                        var pointX = void 0;
                        var options = void 0;
                        var range = axis.visibleRange;
                        var line = axis.lineBounds;
                        var interval = tickID === 'MajorTicks' ? axis.majorInterval : axis.minorInterval;
                        for (var i = range.min; i <= range.max && interval > 0; i += interval) {
                            if (tickID === 'MajorTicks' || tickID === 'MinorTicks' && i !== range.min && i !== range.max && i % axis.majorInterval !== 0) {
                                if (this.gauge.orientation === 'Vertical') {
                                    pointX = tickBounds.x;
                                    pointY = valueToCoefficient(i, axis, this.gauge.orientation, range) * line.height + line.y;
                                    tickPath = tickPath.concat('M' + pointX + ' ' + pointY + ' ' + 'L' + (pointX + ticks.height) + ' ' + pointY + ' ');
                                } else {
                                    pointX = valueToCoefficient(i, axis, this.gauge.orientation, range) * line.width + line.x;
                                    pointY = tickBounds.y;
                                    tickPath = tickPath.concat('M' + pointX + ' ' + pointY + ' ' + 'L' + pointX + ' ' + (pointY + ticks.height) + ' ');
                                }
                            }
                        }
                        options = new PathOption(this.gauge.element.id + '_' + tickID + 'Line_' + 0, ticks.color, ticks.width, ticks.color, 1, null, tickPath);
                        axisObject.appendChild(this.gauge.renderer.drawPath(options));
                    }
                }, {
                    key: 'drawAxisLabels',
                    value: function drawAxisLabels(axis, axisObject) {
                        var options = void 0;
                        var pointX = void 0;
                        var pointY = void 0;
                        var rect = axis.lineBounds;
                        var bounds = axis.labelBounds;
                        var tick = axis.majorTickBounds;
                        var labelSize = void 0;
                        var range = axis.visibleRange;
                        var anchor = void 0;
                        var baseline = void 0;
                        var padding = 5;
                        var labelColor = void 0;
                        var offset = axis.labelStyle.offset;
                        var labelElement = this.gauge.renderer.createGroup({ id: this.gauge.element.id + '_AxisLabelsGroup' });
                        for (var i = 0; i < axis.visibleLabels.length; i++) {
                            labelSize = axis.visibleLabels[i].size;
                            labelColor = axis.labelStyle.useRangeColor ? getRangeColor(axis.visibleLabels[i].value, axis.ranges) : null;
                            labelColor = isNullOrUndefined(labelColor) ? axis.labelStyle.font.color : labelColor;
                            if (this.gauge.orientation === 'Vertical') {
                                pointY = valueToCoefficient(axis.visibleLabels[i].value, axis, this.gauge.orientation, range) * rect.height + rect.y;
                                pointX = !axis.opposedPosition ? tick.x - labelSize.width - padding + offset : bounds.x;
                                pointY += labelSize.height / 4;
                            } else {
                                pointX = valueToCoefficient(axis.visibleLabels[i].value, axis, this.gauge.orientation, range) * rect.width + rect.x;
                                pointY = bounds.y;
                                anchor = 'middle';
                                baseline = '';
                            }
                            options = new TextOption(this.gauge.element.id + '_AxisLabel_' + i, pointX, pointY, anchor, axis.visibleLabels[i].text, null, baseline);
                            textElement(options, axis.labelStyle.font, labelColor, labelElement);
                        }
                        axisObject.appendChild(labelElement);
                    }
                }, {
                    key: 'drawPointers',
                    value: function drawPointers(axis, axisObject, axisIndex) {
                        var pointer = void 0;
                        var clipId = void 0;
                        var pointesGroup = void 0;
                        var pointerClipRectGroup = void 0;
                        pointesGroup = this.gauge.renderer.createGroup({ id: this.gauge.element.id + '_PointersGroup' });
                        for (var i = 0; i < axis.pointers.length; i++) {
                            pointer = axis.pointers[i];
                            clipId = 'url(#' + this.gauge.element.id + '_AxisIndex_' + axisIndex + '_' + '_' + pointer.type + 'ClipRect_' + i + ')';
                            if (!isNullOrUndefined(pointer.bounds)) {
                                pointerClipRectGroup = this.gauge.renderer.createGroup({
                                    'id': this.gauge.element.id + '_AxisIndex_' + axisIndex + '_' + pointer.type + 'Pointer_' + i,
                                    'clip-path': clipId
                                });
                                if (isNullOrUndefined(pointer.startValue)) {
                                    pointer.startValue = axis.visibleRange.min;
                                }
                                this['draw' + pointer.type + 'Pointer'](axis, axisIndex, pointer, i, pointerClipRectGroup);
                                pointesGroup.appendChild(pointerClipRectGroup);
                            }
                        }
                        axisObject.appendChild(pointesGroup);
                    }
                }, {
                    key: 'drawMarkerPointer',
                    value: function drawMarkerPointer(axis, axisIndex, pointer, pointerIndex, parentElement) {
                        var options = void 0;
                        var pointerID = this.gauge.element.id + '_AxisIndex_' + axisIndex + '_' + pointer.type + 'Pointer' + '_' + pointerIndex;
                        var transform = 'translate( 0, 0 )';
                        var pointerElement = void 0;
                        if (getElement(pointerID) && getElement(pointerID).childElementCount > 0) {
                            remove(getElement(pointerID));
                        }
                        options = new PathOption(pointerID, pointer.color, pointer.border.width, pointer.border.color, pointer.opacity, null, null, transform);
                        options = calculateShapes(pointer.bounds, pointer.markerType, new Size(pointer.width, pointer.height), pointer.imageUrl, options, this.gauge.orientation, axis, pointer);
                        pointerElement = pointer.markerType === 'Circle' ? this.gauge.renderer.drawCircle(options) : pointer.markerType === 'Image' ? this.gauge.renderer.drawImage(options) : this.gauge.renderer.drawPath(options);
                        parentElement.appendChild(pointerElement);
                        if (pointer.animationDuration > 0 && !this.gauge.gaugeResized) {
                            pointer.animationComplete = false;
                            this.performMarkerAnimation(pointerElement, axis, pointer);
                        }
                        pointerElement.setAttribute('aria-label', pointer.description || 'Pointer:' + Number(pointer.currentValue).toString());
                    }
                }, {
                    key: 'drawBarPointer',
                    value: function drawBarPointer(axis, axisIndex, pointer, pointerIndex, parentElement) {
                        var rectOptions = void 0;
                        var clipRectElement = void 0;
                        var pointerElement = void 0;
                        var path = '';
                        var options = void 0;
                        var box = void 0;
                        var size = new Size(this.gauge.availableSize.width, this.gauge.availableSize.height);
                        var pointerID = this.gauge.element.id + '_AxisIndex_' + axisIndex + '_' + pointer.type + 'Pointer' + '_' + pointerIndex;
                        if (getElement(pointerID) && getElement(pointerID).childElementCount > 0) {
                            remove(getElement(pointerID));
                        }
                        if (this.gauge.container.type === 'Normal') {
                            rectOptions = new RectOption(pointerID, pointer.color, pointer.border, pointer.opacity, pointer.bounds, null, null);
                            box = pointer.bounds;
                            pointerElement = this.gauge.renderer.drawRectangle(rectOptions);
                        } else {
                            path = getBox(pointer.bounds, this.gauge.container.type, this.gauge.orientation, new Size(pointer.bounds.width, pointer.bounds.height), 'bar', this.gauge.container.width, axis, pointer.roundedCornerRadius);
                            options = new PathOption(pointerID, pointer.color, pointer.border.width, pointer.border.color, pointer.opacity, null, path);
                            pointerElement = this.gauge.renderer.drawPath(options);
                            box = getPathToRect(pointerElement.cloneNode(true), size, this.gauge.element);
                        }
                        if (getElement(pointerID) && getElement(pointerID).childElementCount > 0) {
                            var element = getElement(pointerID).firstElementChild;
                            if (this.gauge.container.type === 'Normal') {
                                element.setAttribute('x', rectOptions.x + '');
                                element.setAttribute('y', rectOptions.y + '');
                                element.setAttribute('width', rectOptions.width + '');
                                element.setAttribute('height', rectOptions.height + '');
                            } else {
                                element.setAttribute('d', options.d);
                            }
                        } else {
                            parentElement.appendChild(pointerElement);
                        }
                        pointerElement.setAttribute('aria-label', pointer.description || 'Pointer:' + Number(pointer.currentValue).toString());
                        if (pointer.animationDuration > 0 && !this.gauge.gaugeResized) {
                            if (this.gauge.container.type === 'Thermometer' && pointer.startValue === 0) {
                                clipRectElement = this.gauge.renderer.drawClipPath(new RectOption(this.gauge.element.id + '_AxisIndex_' + axisIndex + '_' + '_' + pointer.type + 'ClipRect_' + pointerIndex, 'transparent', { width: 1, color: 'Gray' }, 1, box));
                                parentElement.appendChild(clipRectElement);
                            }
                            this.performBarAnimation(pointerElement, axis, pointer);
                        }
                    }
                }, {
                    key: 'drawRanges',
                    value: function drawRanges(axis, axisObject, axisIndex) {
                        var range = void 0;
                        var options = void 0;
                        var rangeElement = this.gauge.renderer.createGroup({ id: this.gauge.element.id + '_RangesGroup' });
                        for (var j = 0; j < axis.ranges.length; j++) {
                            range = axis.ranges[j];
                            if (!isNullOrUndefined(range.path)) {
                                options = new PathOption(this.gauge.element.id + '_AxisIndex_' + axisIndex + '_Range_' + j, range.interior, range.border.width, range.border.color, 1, null, range.path);
                                rangeElement.appendChild(this.gauge.renderer.drawPath(options));
                            }
                        }
                        axisObject.appendChild(rangeElement);
                    }
                }]);

                return AxisRenderer;
            }(Animations);

            _export('Annotations', Annotations = function () {
                function Annotations(gauge) {
                    _classCallCheck(this, Annotations);

                    this.gauge = gauge;
                }
                /**
                 * To render annotation elements
                 */


                _createClass(Annotations, [{
                    key: 'renderAnnotationElements',
                    value: function renderAnnotationElements() {
                        var _this19 = this;

                        var secondaryID = this.gauge.element.id + '_Secondary_Element';
                        var annotationGroup = createElement('div', { id: this.gauge.element.id + '_AnnotationsGroup' });
                        annotationGroup.style.position = 'absolute';
                        annotationGroup.style.top = '0px';
                        annotationGroup.style.left = '0px';
                        this.gauge.annotations.map(function (annotation, index) {
                            if (annotation.content !== null) {
                                _this19.createAnnotationTemplate(annotationGroup, index);
                            }
                        });
                        if (annotationGroup.childElementCount > 0 && !isNullOrUndefined(getElement(secondaryID))) {
                            getElement(secondaryID).appendChild(annotationGroup);
                        }
                    }
                }, {
                    key: 'createAnnotationTemplate',
                    value: function createAnnotationTemplate(element, annotationIndex) {
                        var left = void 0;
                        var top = void 0;
                        var templateFn = void 0;
                        var renderAnnotation = false;
                        var templateElement = void 0;
                        var axis = void 0;
                        var axisIndex = void 0;
                        var id = this.gauge.element.id + '_Annotation_' + annotationIndex;
                        var annotation = this.gauge.annotations[annotationIndex];
                        var childElement = void 0;
                        childElement = createElement('div', {
                            id: this.gauge.element.id + '_Annotation_' + annotationIndex, styles: 'position: absolute; z-index:' + annotation.zIndex + ';'
                        });
                        var argsData = {
                            cancel: false, name: annotationRender, content: annotation.content,
                            annotation: annotation, textStyle: annotation.font
                        };
                        this.gauge.trigger(annotationRender, argsData);
                        if (!argsData.cancel) {
                            templateFn = getTemplateFunction(argsData.content);
                            if (templateFn && templateFn(this.gauge).length) {
                                templateElement = templateFn(this.gauge);
                                while (templateElement.length > 0) {
                                    childElement.appendChild(templateElement[0]);
                                }
                            } else {
                                childElement.appendChild(createElement('div', {
                                    innerHTML: argsData.content,
                                    styles: getFontStyle(argsData.textStyle)
                                }));
                            }
                            var offset = getElementOffset(childElement.cloneNode(true), this.gauge.element);
                            if (!isNullOrUndefined(annotation.axisValue)) {
                                axisIndex = isNullOrUndefined(annotation.axisIndex) ? 0 : annotation.axisIndex;
                                axis = this.gauge.axes[axisIndex];
                                var range = axis.visibleRange;
                                renderAnnotation = annotation.axisValue >= range.min && annotation.axisValue <= range.max ? true : false;
                                var line = axis.lineBounds;
                                if (this.gauge.orientation === 'Vertical') {
                                    left = line.x + annotation.x;
                                    top = valueToCoefficient(annotation.axisValue, axis, this.gauge.orientation, range) * line.height + line.y;
                                    top += annotation.y;
                                } else {
                                    left = valueToCoefficient(annotation.axisValue, axis, this.gauge.orientation, range) * line.width + line.x;
                                    left += annotation.x;
                                    top = line.y + annotation.y;
                                }
                                left -= offset.width / 2;
                                top -= offset.height / 2;
                            } else {
                                var elementRect = this.gauge.element.getBoundingClientRect();
                                var bounds = this.gauge.svgObject.getBoundingClientRect();
                                renderAnnotation = true;
                                left = Math.abs(bounds.left - elementRect.left);
                                top = Math.abs(bounds.top - elementRect.top);
                                left = annotation.horizontalAlignment === 'None' ? left + annotation.x : left;
                                top = annotation.verticalAlignment === 'None' ? top + annotation.y : top;
                                switch (annotation.verticalAlignment) {
                                    case 'Near':
                                        top = top + annotation.y;
                                        break;
                                    case 'Center':
                                        top = top + annotation.y + (bounds.height / 2 - offset.height / 2);
                                        break;
                                    case 'Far':
                                        top = top + bounds.height + annotation.y - offset.height;
                                        break;
                                }
                                switch (annotation.horizontalAlignment) {
                                    case 'Near':
                                        left = left + annotation.x;
                                        break;
                                    case 'Center':
                                        left = left + annotation.x + (bounds.width / 2 - offset.width / 2);
                                        break;
                                    case 'Far':
                                        left = left + bounds.width + annotation.x - offset.width;
                                        break;
                                }
                            }
                            childElement.style.left = left + 'px';
                            childElement.style.top = top + 'px';
                            if (renderAnnotation) {
                                element.appendChild(childElement);
                            }
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'Annotations';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(gauge) {
                        // Destroy method performed here
                    }
                }]);

                return Annotations;
            }());

            _export('GaugeTooltip', GaugeTooltip = function () {
                function GaugeTooltip(gauge) {
                    _classCallCheck(this, GaugeTooltip);

                    this.gauge = gauge;
                    this.element = gauge.element;
                    this.tooltip = gauge.tooltip;
                    this.textStyle = this.tooltip.textStyle;
                    this.borderStyle = this.tooltip.border;
                    this.ejTooltip = new Tooltip({
                        opensOn: 'custom',
                        beforeRender: this.onBeforeRender.bind(this),
                        beforeOpen: this.tooltipCustomization.bind(this),
                        openDelay: 0, closeDelay: 1000
                    });
                    this.ejTooltip.appendTo(this.element);
                }
                /**
                 * Internal use for tooltip rendering
                 * @param pointerElement
                 */


                _createClass(GaugeTooltip, [{
                    key: 'renderTooltip',
                    value: function renderTooltip(pointerElement) {
                        this.pointerElement = pointerElement;
                        var clientRect = this.gauge.element.getBoundingClientRect();
                        var current = getPointer(pointerElement, this.gauge);
                        this.currentAxis = current.axis;
                        this.axisIndex = current.axisIndex;
                        this.currentPointer = current.pointer;
                        var ele = this.appendTargetElement();
                        if (pointerElement.getAttribute('data-tooltip-id') === null && ele.getAttribute('aria-describedby') === null) {
                            this.ejTooltip.open(ele);
                        }
                    }
                }, {
                    key: 'appendTargetElement',
                    value: function appendTargetElement() {
                        var location = this.getTooltipLocation();
                        var element = getElement(this.element.id + '_EJTooltip_');
                        var elementSpace = 2;
                        if (element) {
                            element.style.left = location.x - elementSpace / 2 + 'px';
                            element.style.top = location.y - elementSpace / 2 + 'px';
                        } else {
                            element = createElement('div', {
                                id: this.element.id + '_EJTooltip_',
                                styles: 'position:absolute; left:' + location.x + 'px;top:' + location.y + 'px;'
                            });
                            element.appendChild(createElement('div', {
                                id: this.element.id + '_GaugeTooltip',
                                styles: 'position:absolute;width:' + elementSpace + 'px;height:' + elementSpace + 'px;background:transparent'
                            }));
                            getElement(this.element.id + '_Secondary_Element').appendChild(element);
                        }
                        return element;
                    }
                }, {
                    key: 'getTooltipPosition',
                    value: function getTooltipPosition() {
                        var position = void 0;
                        if (this.gauge.orientation === 'Vertical') {
                            position = !this.currentAxis.opposedPosition ? 'LeftCenter' : 'RightCenter';
                        } else {
                            position = this.currentAxis.opposedPosition ? 'TopCenter' : 'BottomCenter';
                        }
                        return position;
                    }
                }, {
                    key: 'getTooltipLocation',
                    value: function getTooltipLocation() {
                        var location = void 0;
                        var bounds = void 0;
                        var lineX = void 0;
                        var lineY = void 0;
                        var size = new Size(this.gauge.availableSize.width, this.gauge.availableSize.height);
                        var x = void 0;
                        var y = void 0;
                        var height = void 0;
                        var width = void 0;
                        var lineId = this.gauge.element.id + '_AxisLine_' + this.axisIndex;
                        var tickID = this.gauge.element.id + '_MajorTicksLine_' + this.axisIndex;
                        var lineBounds = void 0;
                        if (getElement(lineId)) {
                            lineBounds = getElement(lineId).getBoundingClientRect();
                            lineX = lineBounds.left;
                            lineY = lineBounds.top;
                        } else {
                            lineBounds = getElement(tickID).getBoundingClientRect();
                            lineX = !this.currentAxis.opposedPosition ? lineBounds.left + lineBounds.width : lineBounds.left;
                            lineY = !this.currentAxis.opposedPosition ? lineBounds.top + lineBounds.height : lineBounds.top;
                        }
                        bounds = this.pointerElement.getBoundingClientRect();
                        var elementRect = this.gauge.element.getBoundingClientRect();
                        x = bounds.left - elementRect.left;
                        y = bounds.top - elementRect.top;
                        height = bounds.height;
                        width = bounds.width;
                        if (this.gauge.orientation === 'Vertical') {
                            x = lineX - elementRect.left;
                            y = this.currentPointer.type === 'Marker' ? y + height / 2 : !this.currentAxis.isInversed ? y : y + height;
                        } else {
                            y = lineY - elementRect.top;
                            x = this.currentPointer.type === 'Marker' ? x + width / 2 : !this.currentAxis.isInversed ? x + width : x;
                        }
                        location = new GaugeLocation(x, y);
                        return location;
                    }
                }, {
                    key: 'onBeforeRender',
                    value: function onBeforeRender(args) {
                        var pointerValue = convertPixelToValue(this.element, this.pointerElement, this.gauge.orientation, this.currentAxis, 'tooltip', null);
                        var tooltipFormat = this.gauge.tooltip.format || this.currentAxis.labelStyle.format;
                        var customLabelFormat = tooltipFormat && tooltipFormat.match('{value}') !== null;
                        var format = this.gauge.intl.getNumberFormat({
                            format: getLabelFormat(tooltipFormat), useGrouping: this.gauge.useGroupingSeparator
                        });
                        var content = customLabelFormat ? tooltipFormat.replace(new RegExp('{value}', 'g'), format(pointerValue)) : format(pointerValue);
                        content = this.tooltip.template ? getTemplateFunction(this.tooltip.template)({ 'value': content })[0] : content;
                        var argsData = {
                            cancel: false, name: tooltipRender,
                            content: content,
                            border: this.borderStyle,
                            axis: this.currentAxis, pointer: this.currentPointer,
                            textStyle: this.textStyle
                        };
                        this.gauge.trigger(tooltipRender, argsData);
                        this.ejTooltip.content = argsData.content;
                        this.textStyle = argsData.textStyle;
                        this.borderStyle = argsData.border;
                        this.ejTooltip.position = this.getTooltipPosition();
                        this.ejTooltip.dataBind();
                    }
                }, {
                    key: 'tooltipCustomization',
                    value: function tooltipCustomization(args) {
                        var font = this.textStyle;
                        var borderColor = this.borderStyle.color;
                        var border = this.borderStyle.width;
                        var pointerSize = 8;
                        var outerWidth = void 0;
                        var innerWidth = void 0;
                        args.element.classList.remove('e-popup-close');
                        args.element.classList.add('e-popup-open');
                        var arrowEle = args.element.querySelector('.e-arrow-tip');
                        setStyleAttribute(args.element, {
                            'backgroundColor': this.tooltip.fill, 'borderColor': borderColor || '#212121',
                            'borderWidth': border + 'px'
                        });
                        setStyleAttribute(args.element.querySelector('.e-tip-content'), {
                            'color': font.color, 'fontFamily': font.fontFamily, 'fontSize': font.size,
                            'fontWeight': font.fontWeight, 'opacity': font.opacity.toString(), 'fontStyle': font.fontStyle
                        });
                        setStyleAttribute(args.element.querySelector('.e-arrow-tip'), {
                            'width': 2 * (pointerSize + border) + 'px', 'height': pointerSize + border + 'px'
                        });
                        if (arrowEle.classList.contains('e-tip-top')) {
                            pointerSize = args.element.querySelector('.e-arrow-tip').offsetHeight;
                            outerWidth = pointerSize + 'px';
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-outer'), {
                                'borderRightColor': 'transparent', 'borderLeftColor': 'transparent', 'borderBottomColor': borderColor,
                                'borderLeftWidth': outerWidth, 'borderRightWidth': outerWidth, 'borderBottomWidth': outerWidth
                            });
                            innerWidth = pointerSize - border + 'px';
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-inner'), {
                                'borderRightColor': 'transparent', 'borderLeftColor': 'transparent', 'borderBottomColor': this.tooltip.fill,
                                'borderLeftWidth': innerWidth, 'borderRightWidth': innerWidth, 'borderBottomWidth': innerWidth,
                                'left': border + 'px', 'top': border + 'px'
                            });
                        } else if (arrowEle.classList.contains('e-tip-bottom')) {
                            pointerSize = args.element.querySelector('.e-arrow-tip').offsetHeight;
                            outerWidth = pointerSize + 'px';
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-outer'), {
                                'borderRightColor': 'transparent', 'borderLeftColor': 'transparent', 'borderTopColor': borderColor,
                                'borderLeftWidth': outerWidth, 'borderRightWidth': outerWidth, 'borderTopWidth': outerWidth
                            });
                            innerWidth = pointerSize - border + 'px';
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-inner'), {
                                'borderRightColor': 'transparent', 'borderLeftColor': 'transparent', 'borderTopColor': this.tooltip.fill,
                                'borderLeftWidth': innerWidth, 'borderRightWidth': innerWidth, 'borderTopWidth': innerWidth,
                                'left': border + 'px', 'top': '0'
                            });
                        } else if (arrowEle.classList.contains('e-tip-left')) {
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip'), {
                                'width': pointerSize + border + 'px', 'height': 2 * (pointerSize + border) + 'px'
                            });
                            pointerSize = args.element.querySelector('.e-arrow-tip').offsetWidth;
                            outerWidth = pointerSize + 'px';
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-outer'), {
                                'borderTopColor': 'transparent', 'borderBottomColor': 'transparent', 'borderRightColor': borderColor,
                                'borderTopWidth': outerWidth, 'borderBottomWidth': outerWidth, 'borderRightWidth': outerWidth
                            });
                            innerWidth = pointerSize - border + 'px';
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-inner'), {
                                'borderTopColor': 'transparent', 'borderBottomColor': 'transparent', 'borderRightColor': this.tooltip.fill,
                                'borderTopWidth': innerWidth, 'borderBottomWidth': innerWidth, 'borderRightWidth': innerWidth,
                                'left': border + 'px', 'top': border + 'px'
                            });
                        } else {
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip'), {
                                'width': pointerSize + border + 'px', 'height': 2 * (pointerSize + border) + 'px'
                            });
                            pointerSize = args.element.querySelector('.e-arrow-tip').offsetWidth;
                            outerWidth = pointerSize + 'px';
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-outer'), {
                                'borderTopColor': 'transparent', 'borderBottomColor': 'transparent', 'borderLeftColor': borderColor,
                                'borderTopWidth': outerWidth, 'borderBottomWidth': outerWidth, 'borderLeftWidth': outerWidth
                            });
                            innerWidth = pointerSize - border + 'px';
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-inner'), {
                                'borderTopColor': 'transparent', 'borderBottomColor': 'transparent', 'borderLeftColor': this.tooltip.fill,
                                'borderTopWidth': innerWidth, 'borderBottomWidth': innerWidth, 'borderLeftWidth': innerWidth,
                                'left': (border <= 1 ? 0 : -1) + 'px', 'top': border + 'px'
                            });
                        }
                        this.ejTooltip.refresh(args.target);
                        setStyleAttribute(args.element, {
                            'display': 'block', 'transitionProperty': 'left,top',
                            'transitionDuration': this.tooltip.enableAnimation ? '1000ms' : '0ms'
                        });
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'Tooltip';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(gauge) {
                        // Destroy method performed here
                    }
                }]);

                return GaugeTooltip;
            }());

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('LinearGauge', LinearGauge = function (_Component) {
                _inherits(LinearGauge, _Component);

                /**
                 * @private
                 * Constructor for creating the widget
                 * @hidden
                 */
                function LinearGauge(options, element) {
                    _classCallCheck(this, LinearGauge);

                    var _this20 = _possibleConstructorReturn(this, (LinearGauge.__proto__ || Object.getPrototypeOf(LinearGauge)).call(this, options, element));

                    /** @private */
                    _this20.pointerDrag = false;
                    /** @private */
                    _this20.mouseX = 0;
                    /** @private */
                    _this20.mouseY = 0;
                    /** @private */
                    _this20.gaugeResized = false;
                    return _this20;
                }
                /**
                 * Initialize the preRender method.
                 */


                _createClass(LinearGauge, [{
                    key: 'preRender',
                    value: function preRender() {
                        this.unWireEvents();
                        this.trigger(load, { gauge: this });
                        this.themeEffect();
                        this.initPrivateVariable();
                        this.setCulture();
                        this.createSvg();
                        this.wireEvents();
                    }
                }, {
                    key: 'themeEffect',
                    value: function themeEffect() {
                        if (this.theme === 'Highcontrast') {
                            this.titleStyle.color = this.titleStyle.color || '#FFFFFF';
                            this.setThemeColors('#FFFFFF', '#FFFFFF');
                        } else {
                            this.titleStyle.color = this.titleStyle.color || '#424242';
                            this.setThemeColors('#686868', '#a6a6a6');
                        }
                    }
                }, {
                    key: 'setThemeColors',
                    value: function setThemeColors(labelcolor, others) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = this.axes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var axis = _step2.value;

                                axis.line.color = axis.line.color || others;
                                axis.labelStyle.font.color = axis.labelStyle.font.color || labelcolor;
                                axis.majorTicks.color = axis.majorTicks.color || others;
                                axis.minorTicks.color = axis.minorTicks.color || others;
                                var _iteratorNormalCompletion4 = true;
                                var _didIteratorError4 = false;
                                var _iteratorError4 = undefined;

                                try {
                                    for (var _iterator4 = axis.pointers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                        var pointer = _step4.value;

                                        pointer.color = pointer.color || others;
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

                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = this.annotations[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var annotation = _step3.value;

                                annotation.font.color = annotation.font.color || labelcolor;
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
                    key: 'initPrivateVariable',
                    value: function initPrivateVariable() {
                        this.renderer = new SvgRenderer(this.element.id);
                        this.gaugeAxisLayoutPanel = new AxisLayoutPanel(this);
                        this.axisRenderer = new AxisRenderer(this);
                    }
                }, {
                    key: 'setCulture',
                    value: function setCulture() {
                        this.intl = new Internationalization();
                    }
                }, {
                    key: 'createSvg',
                    value: function createSvg() {
                        this.removeSvg();
                        this.calculateSize();
                        this.svgObject = this.renderer.createSvg({
                            id: this.element.id + '_svg',
                            width: this.availableSize.width,
                            height: this.availableSize.height
                        });
                    }
                }, {
                    key: 'removeSvg',
                    value: function removeSvg() {
                        removeElement(this.element.id + '_Secondary_Element');
                        if (!isNullOrUndefined(this.svgObject) && !isNullOrUndefined(this.svgObject.parentNode)) {
                            remove(this.svgObject);
                        }
                    }
                }, {
                    key: 'calculateSize',
                    value: function calculateSize() {
                        var width = stringToNumber(this.width, this.element.offsetWidth) || this.element.offsetWidth || 600;
                        var height = stringToNumber(this.height, this.element.offsetHeight) || this.element.offsetHeight || 450;
                        this.availableSize = new Size(width, height);
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.renderGaugeElements();
                        this.calculateBounds();
                        this.renderAxisElements();
                        this.trigger(loaded, { gauge: this });
                    }
                }, {
                    key: 'renderGaugeElements',
                    value: function renderGaugeElements() {
                        this.appendSecondaryElement();
                        this.renderBorder();
                        this.renderTitle();
                        this.renderContainer();
                    }
                }, {
                    key: 'appendSecondaryElement',
                    value: function appendSecondaryElement() {
                        if (isNullOrUndefined(getElement(this.element.id + '_Secondary_Element'))) {
                            var secondaryElement = createElement('div');
                            secondaryElement.id = this.element.id + '_Secondary_Element';
                            secondaryElement.setAttribute('style', 'position: relative');
                            this.element.appendChild(secondaryElement);
                        }
                    }
                }, {
                    key: 'calculateBounds',
                    value: function calculateBounds() {
                        this.gaugeAxisLayoutPanel.calculateAxesBounds();
                    }
                }, {
                    key: 'renderAxisElements',
                    value: function renderAxisElements() {
                        this.axisRenderer.renderAxes();
                        this.element.appendChild(this.svgObject);
                        if (this.annotationsModule) {
                            this.annotationsModule.renderAnnotationElements();
                        }
                    }
                }, {
                    key: 'renderBorder',
                    value: function renderBorder() {
                        var width = this.border.width;
                        if (width > 0) {
                            var rect = new RectOption(this.element.id + '_LinearGaugeBorder', this.background, this.border, 1, new Rect(width / 2, width / 2, this.availableSize.width - width, this.availableSize.height - width), null, null);
                            this.svgObject.appendChild(this.renderer.drawRectangle(rect));
                        }
                    }
                }, {
                    key: 'renderTitle',
                    value: function renderTitle() {
                        var x = void 0;
                        var y = void 0;
                        var height = void 0;
                        var width = void 0;
                        var titleBounds = void 0;
                        if (this.title) {
                            var size = measureText(this.title, this.titleStyle);
                            var options = new TextOption(this.element.id + '_LinearGaugeTitle', this.availableSize.width / 2, this.margin.top + size.height / 2, 'middle', this.title);
                            titleBounds = {
                                x: options.x - size.width / 2,
                                y: options.y,
                                width: size.width,
                                height: size.height
                            };
                            var element = textElement(options, this.titleStyle, this.titleStyle.color, this.svgObject);
                            element.setAttribute('aria-label', this.description || this.title);
                            element.setAttribute('tabindex', this.tabIndex.toString());
                        }
                        x = this.margin.left;
                        y = isNullOrUndefined(titleBounds) ? this.margin.top : titleBounds.y;
                        height = this.availableSize.height - y - this.margin.bottom;
                        width = this.availableSize.width - this.margin.left - this.margin.right;
                        this.actualRect = { x: x, y: y, width: width, height: height };
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        EventHandler.remove(this.element, Browser.touchStartEvent, this.gaugeOnMouseDown);
                        EventHandler.remove(this.element, Browser.touchMoveEvent, this.mouseMove);
                        EventHandler.remove(this.element, Browser.touchEndEvent, this.mouseEnd);
                        EventHandler.remove(this.element, 'contextmenu', this.gaugeRightClick);
                        EventHandler.remove(this.element, Browser.isPointer ? 'pointerleave' : 'mouseleave', this.mouseLeave);
                        EventHandler.remove(window, Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize', this.gaugeResize.bind(this));
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        /*! Bind the Event handler */
                        EventHandler.add(this.element, Browser.touchStartEvent, this.gaugeOnMouseDown, this);
                        EventHandler.add(this.element, Browser.touchMoveEvent, this.mouseMove, this);
                        EventHandler.add(this.element, Browser.touchEndEvent, this.mouseEnd, this);
                        EventHandler.add(this.element, 'contextmenu', this.gaugeRightClick, this);
                        EventHandler.add(this.element, Browser.isPointer ? 'pointerleave' : 'mouseleave', this.mouseLeave, this);
                        EventHandler.add(window, Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize', this.gaugeResize, this);
                        this.setStyle(this.element);
                    }
                }, {
                    key: 'setStyle',
                    value: function setStyle(element) {
                        element.style.touchAction = isPointerDrag(this.axes) ? 'none' : 'element';
                        element.style.msTouchAction = isPointerDrag(this.axes) ? 'none' : 'element';
                        element.style.msContentZooming = 'none';
                        element.style.msUserSelect = 'none';
                        element.style.webkitUserSelect = 'none';
                        element.style.position = 'relative';
                    }
                }, {
                    key: 'gaugeResize',
                    value: function gaugeResize(e) {
                        var _this21 = this;

                        var args = {
                            gauge: this,
                            previousSize: new Size(this.availableSize.width, this.availableSize.height),
                            name: resized,
                            currentSize: new Size(0, 0)
                        };
                        if (this.resizeTo) {
                            clearTimeout(this.resizeTo);
                        }
                        if (this.element.classList.contains('e-lineargauge')) {
                            this.resizeTo = setTimeout(function () {
                                _this21.gaugeResized = true;
                                _this21.createSvg();
                                _this21.refreshing = true;
                                args.currentSize = new Size(_this21.availableSize.width, _this21.availableSize.height);
                                _this21.trigger(resized, args);
                                _this21.render();
                            }, 500);
                        }
                        return false;
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.unWireEvents();
                        this.removeSvg();
                        _get(LinearGauge.prototype.__proto__ || Object.getPrototypeOf(LinearGauge.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'renderContainer',
                    value: function renderContainer() {
                        var width = void 0;
                        var height = void 0;
                        var x = void 0;
                        var y = void 0;
                        var options = void 0;
                        var path = '';
                        var topRadius = void 0;
                        var bottomRadius = void 0;
                        var fill = this.container.backgroundColor;
                        var rect = void 0;
                        var radius = this.container.width;
                        bottomRadius = radius + radius / 2 / Math.PI;
                        topRadius = radius / 2;
                        if (this.orientation === 'Vertical') {
                            height = this.actualRect.height;
                            height = this.container.height > 0 ? this.container.height : (height / 2 - height / 2 / 4) * 2;
                            width = this.container.width;
                            height = this.container.type === 'Thermometer' ? height - bottomRadius * 2 - topRadius : height;
                            x = this.actualRect.x + (this.actualRect.width / 2 - this.container.width / 2) + this.container.offset;
                            y = this.actualRect.y + (this.actualRect.height / 2 - (this.container.type === 'Thermometer' ? (height + bottomRadius * 2 - topRadius) / 2 : height / 2));
                            height = height;
                        } else {
                            width = this.container.height > 0 ? this.container.height : (this.actualRect.width / 2 - this.actualRect.width / 2 / 4) * 2;
                            width = this.container.type === 'Thermometer' ? width - bottomRadius * 2 - topRadius : width;
                            x = this.actualRect.x + (this.actualRect.width / 2 - (this.container.type === 'Thermometer' ? (width - bottomRadius * 2 + topRadius) / 2 : width / 2));
                            y = this.actualRect.y + (this.actualRect.height / 2 - this.container.width / 2) + this.container.offset;
                            height = this.container.width;
                        }
                        this.containerBounds = { x: x, y: y, width: width, height: height };
                        if (this.containerBounds.width > 0) {
                            this.containerObject = this.renderer.createGroup({ id: this.element.id + '_Container_Group', transform: 'translate( 0, 0)' });
                            if (this.container.type === 'Normal') {
                                rect = new RectOption(this.element.id + '_' + this.container.type + '_Layout', fill, this.container.border, 1, new Rect(x, y, width, height));
                                this.containerObject.appendChild(this.renderer.drawRectangle(rect));
                            } else {
                                path = getBox(this.containerBounds, this.container.type, this.orientation, new Size(this.container.height, this.container.width), 'container', null, null, this.container.roundedCornerRadius);
                                options = new PathOption(this.element.id + '_' + this.container.type + '_Layout', fill, this.container.border.width, this.container.border.color, 1, '', path);
                                this.containerObject.appendChild(this.renderer.drawPath(options));
                            }
                            this.svgObject.appendChild(this.containerObject);
                        }
                    }
                }, {
                    key: 'gaugeOnMouseDown',
                    value: function gaugeOnMouseDown(e) {
                        var element = e.target;
                        var clientRect = this.element.getBoundingClientRect();
                        var current = void 0;
                        var args = this.getMouseArgs(e, 'touchstart', gaugeMouseDown);
                        this.trigger(gaugeMouseDown, args);
                        this.mouseX = args.x;
                        this.mouseY = args.y;
                        if (args.target) {
                            if (!args.cancel && (args.target.id.indexOf('MarkerPointer') > -1 || args.target.id.indexOf('BarPointer') > -1)) {
                                current = this.moveOnPointer(args.target);
                                if (!isNullOrUndefined(current) && current.pointer) {
                                    this.pointerDrag = true;
                                    this.mouseElement = args.target;
                                }
                            }
                        }
                        return true;
                    }
                }, {
                    key: 'mouseMove',
                    value: function mouseMove(e) {
                        var current = void 0;
                        var args = this.getMouseArgs(e, 'touchmove', gaugeMouseMove);
                        this.trigger(gaugeMouseMove, args);
                        this.mouseX = args.x;
                        this.mouseY = args.y;
                        if (args.target && !args.cancel) {
                            if (args.target.id.indexOf('MarkerPointer') > -1 || args.target.id.indexOf('BarPointer') > -1) {
                                if (this.tooltipModule && this.tooltip.enable) {
                                    this.tooltipModule.renderTooltip(args.target);
                                }
                                current = this.moveOnPointer(args.target);
                                if (!isNullOrUndefined(current) && current.pointer) {
                                    this.element.style.cursor = current.style;
                                }
                            } else {
                                if (this.tooltipModule && this.tooltip.enable) {
                                    this.tooltipModule.ejTooltip.close();
                                }
                                this.element.style.cursor = this.pointerDrag ? this.element.style.cursor : 'auto';
                            }
                            this.gaugeOnMouseMove(e);
                        }
                        return false;
                    }
                }, {
                    key: 'moveOnPointer',
                    value: function moveOnPointer(element) {
                        var current = void 0;
                        var clientRect = this.element.getBoundingClientRect();
                        var axis = void 0;
                        var isPointer = false;
                        var pointer = void 0;
                        var top = void 0;
                        var left = void 0;
                        var pointerElement = getElement(element.id);
                        var svgPath = pointerElement;
                        var cursorStyle = void 0;
                        var process = void 0;
                        current = getPointer(element, this);
                        axis = current.axis;
                        pointer = current.pointer;
                        if (pointer.enableDrag) {
                            if (pointer.type === 'Bar') {
                                if (this.orientation === 'Vertical') {
                                    top = pointerElement.getBoundingClientRect().top - clientRect.top;
                                    top = !axis.isInversed ? top : top + svgPath.getBBox().height;
                                    isPointer = !axis.isInversed ? this.mouseY < top + 10 && this.mouseY >= top : this.mouseY <= top && this.mouseY > top - 10;
                                    cursorStyle = 'n-resize';
                                } else {
                                    left = pointerElement.getBoundingClientRect().left - clientRect.left;
                                    left = !axis.isInversed ? left + svgPath.getBBox().width : left;
                                    isPointer = !axis.isInversed ? this.mouseX > left - 10 && this.mouseX <= left : this.mouseX >= left && this.mouseX < left + 10;
                                    cursorStyle = 'e-resize';
                                }
                            } else {
                                isPointer = true;
                                cursorStyle = 'pointer';
                            }
                        }
                        if (isPointer) {
                            process = { pointer: isPointer, style: cursorStyle };
                        }
                        return process;
                    }
                }, {
                    key: 'gaugeRightClick',
                    value: function gaugeRightClick(event) {
                        if (event.buttons === 2 || event.pointerType === 'touch') {
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        }
                        return true;
                    }
                }, {
                    key: 'mouseLeave',
                    value: function mouseLeave(e) {
                        var parentNode = void 0;
                        var args = this.getMouseArgs(e, 'touchmove', gaugeMouseLeave);
                        if (!isNullOrUndefined(this.mouseElement)) {
                            parentNode = this.element;
                            parentNode.style.cursor = '';
                            this.mouseElement = null;
                            this.pointerDrag = false;
                        }
                        if (this.tooltip.enable && this.tooltipModule) {
                            this.tooltipModule.ejTooltip.close();
                        }
                        return false;
                    }
                }, {
                    key: 'gaugeOnMouseMove',
                    value: function gaugeOnMouseMove(e) {
                        var current = void 0;
                        if (this.pointerDrag) {
                            current = getPointer(this.mouseElement, this);
                            if (current.pointer.enableDrag && current.pointer.animationComplete) {
                                this[current.pointer.type.toLowerCase() + 'Drag'](current.axis, current.pointer);
                            }
                        }
                        return true;
                    }
                }, {
                    key: 'mouseEnd',
                    value: function mouseEnd(e) {
                        var _this22 = this;

                        var parentNode = void 0;
                        var tooltipInterval = void 0;
                        var isTouch = e.pointerType === 'touch' || e.pointerType === '2' || e.type === 'touchend';
                        var args = this.getMouseArgs(e, 'touchend', gaugeMouseUp);
                        this.trigger(gaugeMouseUp, args);
                        if (!isNullOrUndefined(this.mouseElement)) {
                            parentNode = this.element;
                            parentNode.style.cursor = '';
                            this.mouseElement = null;
                            this.pointerDrag = false;
                        }
                        if (!args.cancel && isTouch && this.tooltip.enable && this.tooltipModule) {
                            if (args.target.id.indexOf('Pointer') >= 0) {
                                this.tooltipModule.renderTooltip(args.target);
                                tooltipInterval = setTimeout(function () {
                                    _this22.tooltipModule.ejTooltip.close();
                                }, 2000);
                            }
                        }
                        return true;
                    }
                }, {
                    key: 'getMouseArgs',
                    value: function getMouseArgs(e, type, name) {
                        var rect = this.element.getBoundingClientRect();
                        var location = new GaugeLocation(-rect.left, -rect.top);
                        var isTouch = e.type === type;
                        location.x += isTouch ? e.changedTouches[0].clientX : e.clientX;
                        location.y += isTouch ? e.changedTouches[0].clientY : e.clientY;
                        return {
                            cancel: false, name: name,
                            model: this,
                            x: location.x, y: location.y,
                            target: isTouch ? e.target : e.target
                        };
                    }
                }, {
                    key: 'markerDrag',
                    value: function markerDrag(axis, pointer) {
                        var options = void 0;
                        var value = convertPixelToValue(this.element, this.mouseElement, this.orientation, axis, 'drag', new GaugeLocation(this.mouseX, this.mouseY));
                        var process = withInRange(value, null, null, axis.visibleRange.max, axis.visibleRange.min, 'pointer');
                        if (withInRange(value, null, null, axis.visibleRange.max, axis.visibleRange.min, 'pointer')) {
                            this.triggerDragEvent(this.mouseElement);
                            options = new PathOption('pointerID', pointer.color, pointer.border.width, pointer.border.color, pointer.opacity, null, null, '');
                            if (this.orientation === 'Vertical') {
                                pointer.bounds.y = this.mouseY;
                            } else {
                                pointer.bounds.x = this.mouseX;
                            }
                            pointer.currentValue = value;
                            options = calculateShapes(pointer.bounds, pointer.markerType, new Size(pointer.width, pointer.height), pointer.imageUrl, options, this.orientation, axis, pointer);
                            if (pointer.markerType === 'Image') {
                                this.mouseElement.setAttribute('x', (pointer.bounds.x - pointer.bounds.width / 2).toString());
                                this.mouseElement.setAttribute('y', (pointer.bounds.y - pointer.bounds.height / 2).toString());
                            } else {
                                this.mouseElement.setAttribute('d', options.d);
                            }
                        }
                    }
                }, {
                    key: 'barDrag',
                    value: function barDrag(axis, pointer) {
                        var line = axis.lineBounds;
                        var range = axis.visibleRange;
                        var value1 = void 0;
                        var value2 = void 0;
                        var isDrag = void 0;
                        var lineHeight = this.orientation === 'Vertical' ? line.height : line.width;
                        var lineY = this.orientation === 'Vertical' ? line.y : line.x;
                        var path = void 0;
                        value1 = valueToCoefficient(range.min, axis, this.orientation, range) * lineHeight + lineY;
                        value2 = valueToCoefficient(range.max, axis, this.orientation, range) * lineHeight + lineY;
                        if (this.orientation === 'Vertical') {
                            isDrag = !axis.isInversed ? this.mouseY > value2 && this.mouseY < value1 : this.mouseY > value1 && this.mouseY < value2;
                            if (isDrag) {
                                if (this.container.type === 'Normal') {
                                    if (!axis.isInversed) {
                                        this.mouseElement.setAttribute('y', this.mouseY.toString());
                                    }
                                    this.mouseElement.setAttribute('height', Math.abs(value1 - this.mouseY).toString());
                                } else {
                                    if (!axis.isInversed) {
                                        pointer.bounds.y = this.mouseY;
                                    }
                                    pointer.bounds.height = Math.abs(value1 - this.mouseY);
                                }
                            }
                        } else {
                            isDrag = !axis.isInversed ? this.mouseX > value1 && this.mouseX < value2 : this.mouseX > value2 && this.mouseX < value1;
                            if (isDrag) {
                                if (this.container.type === 'Normal') {
                                    if (axis.isInversed) {
                                        this.mouseElement.setAttribute('x', this.mouseX.toString());
                                    }
                                    this.mouseElement.setAttribute('width', Math.abs(value1 - this.mouseX).toString());
                                } else {
                                    if (axis.isInversed) {
                                        pointer.bounds.x = this.mouseX;
                                    }
                                    pointer.bounds.width = Math.abs(value1 - this.mouseX);
                                }
                            }
                        }
                        if (isDrag && this.mouseElement.tagName === 'path') {
                            this.triggerDragEvent(this.mouseElement);
                            path = getBox(pointer.bounds, this.container.type, this.orientation, new Size(pointer.bounds.width, pointer.bounds.height), 'bar', this.container.width, axis, pointer.roundedCornerRadius);
                            this.mouseElement.setAttribute('d', path);
                        }
                    }
                }, {
                    key: 'triggerDragEvent',
                    value: function triggerDragEvent(activeElement) {
                        var active = getPointer(this.mouseElement, this);
                        var value = convertPixelToValue(this.element, this.mouseElement, this.orientation, active.axis, 'tooltip', null);
                        var dragArgs = {
                            name: 'valueChange',
                            gauge: this,
                            element: this.mouseElement,
                            axisIndex: active.axisIndex,
                            axis: active.axis,
                            pointerIndex: active.pointerIndex,
                            pointer: active.pointer,
                            value: value
                        };
                        this.trigger(valueChange, dragArgs);
                    }
                }, {
                    key: 'setPointerValue',
                    value: function setPointerValue(axisIndex, pointerIndex, value) {
                        var axis = this.axes[axisIndex];
                        var pointer = axis.pointers[pointerIndex];
                        var id = this.element.id + '_AxisIndex_' + axisIndex + '_' + pointer.type + 'Pointer_' + pointerIndex;
                        var pointerElement = getElement(id);
                        pointer.currentValue = value;
                        if (pointerElement !== null && withInRange(pointer.currentValue, null, null, axis.visibleRange.max, axis.visibleRange.min, 'pointer')) {
                            this.gaugeAxisLayoutPanel['calculate' + pointer.type + 'Bounds'](axisIndex, axis, pointerIndex, pointer);
                            this.axisRenderer['draw' + pointer.type + 'Pointer'](axis, axisIndex, pointer, pointerIndex, pointerElement.parentElement);
                        }
                    }
                }, {
                    key: 'setAnnotationValue',
                    value: function setAnnotationValue(annotationIndex, content) {
                        var elementExist = getElement(this.element.id + '_Annotation_' + annotationIndex) === null;
                        var element = getElement(this.element.id + '_AnnotationsGroup') || createElement('div', {
                            id: this.element.id + '_AnnotationsGroup'
                        });
                        var annotation = this.annotations[annotationIndex];
                        if (content !== null) {
                            if (getElement(this.element.id + '_Annotation_' + annotationIndex)) {
                                getElement(this.element.id + '_Annotation_' + annotationIndex).remove();
                            }
                            annotation.content = content;
                            this.annotationsModule.createAnnotationTemplate(element, annotationIndex);
                            if (!elementExist) {
                                element.appendChild(getElement(this.element.id + '_Annotation_' + annotationIndex));
                            }
                        }
                    }
                }, {
                    key: 'requiredModules',
                    value: function requiredModules() {
                        var modules = [];
                        var annotationEnable = false;
                        this.annotations.map(function (annotation, index) {
                            annotationEnable = annotation.content != null;
                        });
                        if (annotationEnable) {
                            modules.push({
                                member: 'Annotations',
                                args: [this, Annotations]
                            });
                        }
                        if (this.tooltip.enable) {
                            modules.push({
                                member: 'Tooltip',
                                args: [this, GaugeTooltip]
                            });
                        }
                        return modules;
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        var keyEntity = ['loaded'];
                        return this.addOnPersist(keyEntity);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'lineargauge';
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var renderer = false;
                        var refreshBounds = false;
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = Object.keys(newProp)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var prop = _step5.value;

                                switch (prop) {
                                    case 'height':
                                    case 'width':
                                    case 'margin':
                                        this.createSvg();
                                        refreshBounds = true;
                                        break;
                                    case 'title':
                                        refreshBounds = newProp.title === '' || oldProp.title === '';
                                        renderer = !(newProp.title === '' || oldProp.title === '');
                                        break;
                                    case 'titleStyle':
                                        if (newProp.titleStyle && newProp.titleStyle.size) {
                                            refreshBounds = true;
                                        } else {
                                            renderer = true;
                                        }
                                        break;
                                    case 'border':
                                        renderer = true;
                                        break;
                                    case 'background':
                                        renderer = true;
                                        break;
                                    case 'container':
                                        refreshBounds = true;
                                        break;
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

                        if (!refreshBounds && renderer) {
                            this.removeSvg();
                            this.renderGaugeElements();
                            this.renderAxisElements();
                        }
                        if (refreshBounds) {
                            this.createSvg();
                            this.renderGaugeElements();
                            this.calculateBounds();
                            this.renderAxisElements();
                        }
                    }
                }]);

                return LinearGauge;
            }(Component));

            __decorate([Property(null)], LinearGauge.prototype, "width", void 0);
            __decorate([Property(null)], LinearGauge.prototype, "height", void 0);
            __decorate([Property('Vertical')], LinearGauge.prototype, "orientation", void 0);
            __decorate([Complex({}, Margin)], LinearGauge.prototype, "margin", void 0);
            __decorate([Complex({ color: '', width: 0 }, Border)], LinearGauge.prototype, "border", void 0);
            __decorate([Property('transparent')], LinearGauge.prototype, "background", void 0);
            __decorate([Property('')], LinearGauge.prototype, "title", void 0);
            __decorate([Complex({ size: '15px', color: null }, Font)], LinearGauge.prototype, "titleStyle", void 0);
            __decorate([Complex({}, Container)], LinearGauge.prototype, "container", void 0);
            __decorate([Collection([{}], Axis)], LinearGauge.prototype, "axes", void 0);
            __decorate([Complex({}, TooltipSettings)], LinearGauge.prototype, "tooltip", void 0);
            __decorate([Collection([{}], Annotation)], LinearGauge.prototype, "annotations", void 0);
            __decorate([Property([])], LinearGauge.prototype, "rangePalettes", void 0);
            __decorate([Property(false)], LinearGauge.prototype, "useGroupingSeparator", void 0);
            __decorate([Property(null)], LinearGauge.prototype, "description", void 0);
            __decorate([Property(1)], LinearGauge.prototype, "tabIndex", void 0);
            __decorate([Property('Material')], LinearGauge.prototype, "theme", void 0);
            __decorate([Event()], LinearGauge.prototype, "loaded", void 0);
            __decorate([Event()], LinearGauge.prototype, "load", void 0);
            __decorate([Event()], LinearGauge.prototype, "animationComplete", void 0);
            __decorate([Event()], LinearGauge.prototype, "axisLabelRender", void 0);
            __decorate([Event()], LinearGauge.prototype, "annotationRender", void 0);
            __decorate([Event()], LinearGauge.prototype, "tooltipRender", void 0);
            __decorate([Event()], LinearGauge.prototype, "gaugeMouseMove", void 0);
            __decorate([Event()], LinearGauge.prototype, "gaugeMouseLeave", void 0);
            __decorate([Event()], LinearGauge.prototype, "gaugeMouseDown", void 0);
            __decorate([Event()], LinearGauge.prototype, "gaugeMouseUp", void 0);
            __decorate([Event()], LinearGauge.prototype, "valueChange", void 0);
            __decorate([Event()], LinearGauge.prototype, "resized", void 0);
            _export('LinearGauge', LinearGauge = __decorate([NotifyPropertyChanges], LinearGauge));

            /**
             * Linear gauge component exported items
             */

            /**
             * LinearGauge component exported.
             */

            _export('LinearGauge', LinearGauge);

            _export('Font', Font);

            _export('Margin', Margin);

            _export('Border', Border);

            _export('Annotation', Annotation);

            _export('Container', Container);

            _export('TooltipSettings', TooltipSettings);

            _export('Line', Line);

            _export('Label', Label);

            _export('Range', Range);

            _export('Tick', Tick);

            _export('Pointer', Pointer);

            _export('Axis', Axis);

            _export('stringToNumber', stringToNumber);

            _export('measureText', measureText);

            _export('withInRange', withInRange);

            _export('convertPixelToValue', convertPixelToValue);

            _export('getPathToRect', getPathToRect);

            _export('getElement', getElement);

            _export('removeElement', removeElement);

            _export('isPointerDrag', isPointerDrag);

            _export('valueToCoefficient', valueToCoefficient);

            _export('getFontStyle', getFontStyle);

            _export('getLabelFormat', getLabelFormat);

            _export('getTemplateFunction', getTemplateFunction);

            _export('getElementOffset', getElementOffset);

            _export('VisibleRange', VisibleRange);

            _export('GaugeLocation', GaugeLocation);

            _export('Size', Size);

            _export('Rect', Rect);

            _export('CustomizeOption', CustomizeOption);

            _export('PathOption', PathOption);

            _export('RectOption', RectOption);

            _export('TextOption', TextOption);

            _export('VisibleLabels', VisibleLabels);

            _export('Align', Align);

            _export('textElement', textElement);

            _export('calculateNiceInterval', calculateNiceInterval);

            _export('getActualDesiredIntervalsCount', getActualDesiredIntervalsCount);

            _export('getPointer', getPointer);

            _export('getRangeColor', getRangeColor);

            _export('getRangePalette', getRangePalette);

            _export('calculateShapes', calculateShapes);

            _export('getBox', getBox);

            _export('Annotations', Annotations);

            _export('GaugeTooltip', GaugeTooltip);
        }
    };
});

//# sourceMappingURL=ej2-lineargauge.es2015-compiled.js.map