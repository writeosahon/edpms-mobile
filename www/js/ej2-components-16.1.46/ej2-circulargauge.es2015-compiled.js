'use strict';

System.register(['@syncfusion/ej2-base', '@syncfusion/ej2-popups'], function (_export, _context) {
    "use strict";

    var Animation, Browser, ChildProperty, Collection, Complex, Component, Event, EventHandler, Internationalization, NotifyPropertyChanges, Property, SvgRenderer, compile, createElement, merge, remove, setStyleAttribute, Tooltip, _get, _createClass, _typeof, CustomizeOption, PathOption, RectOption, Size, GaugeLocation, Rect, TextOption, VisibleLabels, __decorate$1, Border, Font, Margin, TooltipSettings, Theme, __decorate$2, Line, Label, Range, Tick, Cap, NeedleTail, Animation$1, Annotation, Pointer, Axis, loaded, load, animationComplete, axisLabelRender, tooltipRender, annotationRender, gaugeMouseMove, gaugeMouseLeave, gaugeMouseDown, gaugeMouseUp, dragStart, dragMove, dragEnd, resized, Annotations, GaugeTooltip, AxisRenderer, PointerRenderer, labelPadding, AxisLayoutPanel, __decorate, CircularGauge;

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
     * Specifies Circular-Gauge Helper methods
     */
    /**
     * Function to measure the height and width of the text.
     * @param  {string} text
     * @param  {FontModel} font
     * @param  {string} id
     * @returns Size
     * @private
     */
    function measureText(text, font) {
        var htmlObject = document.getElementById('gauge-measuretext');
        if (htmlObject === null) {
            htmlObject = createElement('text', { id: 'gauge-measuretext' });
            document.body.appendChild(htmlObject);
        }
        var style = 'position: absolute; visibility: hidden;' + ';left: 0; top: -100; white-space: nowrap;' + getFontStyle(font);
        htmlObject.innerHTML = text;
        htmlObject.setAttribute('style', style);
        return new Size(htmlObject.clientWidth, htmlObject.clientHeight);
    }
    /**
     * Function to find number from string
     * * @returns number
     * @private
     */
    function toPixel(value, maxDimension) {
        if (value !== null && value !== undefined) {
            return value.indexOf('%') !== -1 ? maxDimension / 100 * parseInt(value, 10) : parseInt(value, 10);
        }
        return null;
    }
    /**
     * Function to get the style from FontModel.
     * @returns string
     * @private
     */
    function getFontStyle(font) {
        var style = '';
        style = 'font-size:' + font.size + '; font-style:' + font.fontStyle + '; font-weight:' + font.fontWeight + '; font-family:' + font.fontFamily + ';opacity:' + font.opacity + '; color:' + font.color + ';';
        return style;
    }
    /**
     * Function to set style to the element.
     * @private
     */
    function setStyles(element, fill, border) {
        setStyleAttribute(element, {
            'stroke': border.color, 'stroke-width': border.width,
            'fill': fill
        });
    }
    /**
     * Function to measure the element rect.
     * @returns ClientRect
     * @private
     */
    function measureElementRect(element) {
        var bounds = void 0;
        document.body.appendChild(element);
        bounds = element.getBoundingClientRect();
        removeElement(element.id);
        return bounds;
    }
    /**
     * Function to convert the number from string.
     * @returns number
     * @private
     */
    function stringToNumber(value, containerSize) {
        if (value !== null && value !== undefined) {
            return value.indexOf('%') !== -1 ? containerSize / 100 * parseInt(value, 10) : parseInt(value, 10);
        }
        return null;
    }
    /**
     * Function to create the text element.
     * @returns Element
     * @private
     */
    function textElement(options, font, color, parent, styles) {
        var renderOptions = {};
        var htmlObject = void 0;
        var renderer = new SvgRenderer('');
        var style = styles + ' font-size:' + font.size + '; font-style:' + font.fontStyle + ' ; font-weight:' + font.fontWeight + '; font-family:' + font.fontFamily + ';';
        renderOptions = {
            'id': options.id,
            'x': options.x,
            'y': options.y,
            'fill': color,
            'text-anchor': options.anchor,
            'transform': options.transform,
            'opacity': font.opacity,
            'dominant-baseline': options.baseLine,
            'style': style
        };
        htmlObject = renderer.createText(renderOptions, options.text);
        parent.appendChild(htmlObject);
        return htmlObject;
    }
    /**
     * Function to append the path to the element.
     * @returns Element
     * @private
     */
    function appendPath(options, element, gauge, functionName) {
        functionName = functionName ? functionName : 'Path';
        var htmlObject = gauge.renderer['draw' + functionName](options);
        htmlObject.setAttribute('transform', options.transform);
        htmlObject.setAttribute('style', options.style);
        element.appendChild(htmlObject);
        return htmlObject;
    }
    /**
     * Function to calculate the sum of array values.
     * @returns number
     * @private
     */
    function calculateSum(from, to, values) {
        var sum = 0;
        var length = values.length;
        for (; from < length; from++) {
            sum += values[from];
        }
        return sum;
    }
    /**
     * Function to calculate the value for linear animation effect
     * @param currentTime
     * @param startValue
     * @param endValue
     * @param duration
     * @private
     */
    function linear(currentTime, startValue, endValue, duration) {
        return -endValue * Math.cos(currentTime / duration * (Math.PI / 2)) + endValue + startValue;
    }
    /**
     * Function to get the angle from value for circular gauge.
     * @returns number
     * @private
     */
    function getAngleFromValue(value, maximumValue, minimumValue, startAngle, endAngle, isClockWise) {
        var angle = void 0;
        endAngle -= isCompleteAngle(startAngle, endAngle) ? 0.0001 : 0;
        startAngle -= 90;
        endAngle -= 90;
        if (isClockWise) {
            angle = (value - minimumValue) * (getDegree(startAngle, endAngle) / (maximumValue - minimumValue)) + startAngle;
        } else {
            angle = endAngle - (value - minimumValue) * (getDegree(startAngle, endAngle) / (maximumValue - minimumValue));
            angle = angle < 0 ? 360 + angle : angle;
        }
        angle = Math.round(angle) >= 360 ? angle - 360 : Math.round(angle) < 0 ? 360 + angle : angle;
        return angle;
    }
    /**
     * Function to get the degree for circular gauge.
     * @returns number
     * @private
     */
    function getDegree(startAngle, endAngle) {
        var degree = endAngle - startAngle;
        return degree < 0 ? degree + 360 : degree;
    }
    /**
     * Function to get the value from angle for circular gauge.
     * @returns number
     * @private
     */
    function getValueFromAngle(angle, maximumValue, minimumValue, startAngle, endAngle, isClockWise) {
        endAngle -= isCompleteAngle(startAngle, endAngle) ? 0.0001 : 0;
        angle = angle < startAngle ? angle + 360 : angle;
        if (isClockWise) {
            return (angle - startAngle) / getDegree(startAngle, endAngle) * (maximumValue - minimumValue) + minimumValue;
        } else {
            return maximumValue - ((angle - startAngle) / getDegree(startAngle, endAngle) * (maximumValue - minimumValue) + minimumValue);
        }
    }
    /**
     * Function to check whether it's a complete circle for circular gauge.
     * @returns boolean
     * @private
     */
    function isCompleteAngle(startAngle, endAngle) {
        var totalAngle = endAngle - startAngle;
        totalAngle = totalAngle <= 0 ? totalAngle + 360 : totalAngle;
        return Math.floor(totalAngle / 360) !== 0;
    }
    /**
     * Function to get angle from location for circular gauge.
     * @returns number
     * @private
     */
    function getAngleFromLocation(center, point) {
        var angle = Math.atan2(point.y - center.y, point.x - center.x);
        angle = Math.round((angle < 0 ? 6.283 + angle : angle) * (180 / Math.PI)) - 270;
        angle += angle < 0 ? 360 : 0;
        return angle;
    }
    /**
     * Function to get the location from angle for circular gauge.
     * @returns GaugeLocation
     * @private
     */
    function getLocationFromAngle(degree, radius, center) {
        var radian = degree * Math.PI / 180;
        return new GaugeLocation(Math.cos(radian) * radius + center.x, Math.sin(radian) * radius + center.y);
    }
    /**
     * Function to get the path direction of the circular gauge.
     * @returns string
     * @private
     */
    function getPathArc(center, start, end, radius, startWidth, endWidth) {
        end -= isCompleteAngle(start, end) ? 0.0001 : 0;
        var degree = getDegree(start, end);
        var startRadius = radius - startWidth;
        var endRadius = radius - endWidth;
        var arcRadius = radius - (startWidth + endWidth) / 2;
        if (startWidth !== undefined && endWidth !== undefined) {
            return getRangePath(getLocationFromAngle(start, radius, center), getLocationFromAngle(end, radius, center), getLocationFromAngle(start, startRadius, center), getLocationFromAngle(end, endRadius, center), radius, arcRadius, arcRadius, degree < 180 ? 0 : 1);
        } else {
            return getCirclePath(getLocationFromAngle(start, radius, center), getLocationFromAngle(end, radius, center), radius, degree < 180 ? 0 : 1);
        }
    }
    /**
     * Function to get the range path direction of the circular gauge.
     * @returns string
     * @private
     */
    function getRangePath(start, end, innerStart, innerEnd, radius, startRadius, endRadius, clockWise) {
        return 'M ' + start.x + ' ' + start.y + ' A ' + radius + ' ' + radius + ' 0 ' + clockWise + ' 1 ' + end.x + ' ' + end.y + ' L ' + innerEnd.x + ' ' + innerEnd.y + ' A ' + endRadius + ' ' + startRadius + ' 0 ' + clockWise + ' 0 ' + innerStart.x + ' ' + innerStart.y + ' Z';
    }
    /**
     * Function to calculate the complete path arc of the circular gauge.
     * @returns string
     * @private
     */
    function getCompleteArc(center, start, end, radius, innerRadius) {
        end -= isCompleteAngle(start, end) ? 0.0001 : 0;
        var degree = getDegree(start, end);
        return getCompletePath(center, getLocationFromAngle(start, radius, center), getLocationFromAngle(end, radius, center), radius, getLocationFromAngle(start, innerRadius, center), getLocationFromAngle(end, innerRadius, center), innerRadius, degree < 180 ? 0 : 1);
    }
    /**
     * Function to get the circular path direction of the circular gauge.
     * @returns string
     * @private
     */
    function getCirclePath(start, end, radius, clockWise) {
        return 'M ' + start.x + ' ' + start.y + ' A ' + radius + ' ' + radius + ' 0 ' + clockWise + ' 1 ' + end.x + ' ' + end.y;
    }
    /**
     * Function to get the complete path direction of the circular gauge.
     * @returns string
     * @private
     */
    function getCompletePath(center, start, end, radius, innerStart, innerEnd, innerRadius, clockWise) {
        return 'M ' + start.x + ' ' + start.y + ' A ' + radius + ' ' + radius + ' 0 ' + clockWise + ' 1 ' + end.x + ' ' + end.y + ' L ' + innerEnd.x + ' ' + innerEnd.y + ' A ' + innerRadius + ' ' + innerRadius + ' 0 ' + clockWise + ',0 ' + innerStart.x + ' ' + innerStart.y + ' Z';
    }
    /**
     * Function to get element from id.
     * @returns Element
     * @private
     */
    function getElement(id) {
        return document.getElementById(id);
    }
    /**
     * Function to compile the template function for circular gauge.
     * @returns Function
     * @private
     */
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
    /**
     * Function to remove the element from id.
     * @private
     */
    function removeElement(id) {
        var element = getElement(id);
        if (element) {
            remove(element);
        }
    }
    /**
     * Function to get current point for circular gauge using element id.
     * @returns IVisiblePointer
     * @private
     */
    function getPointer(targetId, gauge) {
        var tempString = void 0;
        tempString = targetId.split(gauge.element.id + '_Axis_')[1];
        return {
            axisIndex: +tempString[0],
            pointerIndex: +tempString[tempString.length - 1]
        };
    }
    /**
     * Function to convert the label using formar for cirular gauge.
     * @returns string
     * @private
     */
    function getLabelFormat(format) {
        var customLabelFormat = format && format.match('{value}') !== null;
        var skeleton = customLabelFormat ? '' : format;
        return skeleton;
    }
    /**
     * Function to calculate the marker shape for circular gauge.
     * @returns PathOption
     * @private
     */
    function calculateShapes(location, shape, size, url, options) {
        var path = void 0;
        var width = size.width;
        var height = size.height;
        var locX = location.x;
        var locY = location.y;
        var x = location.x + -width / 2;
        var y = location.y + -height / 2;
        switch (shape) {
            case 'Circle':
                merge(options, { 'rx': width / 2, 'ry': height / 2, 'cx': locX, 'cy': locY });
                break;
            case 'Diamond':
                path = 'M' + ' ' + x + ' ' + locY + ' ' + 'L' + ' ' + locX + ' ' + (locY + -height / 2) + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + locY + ' ' + 'L' + ' ' + locX + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + x + ' ' + locY + ' Z';
                merge(options, { 'd': path });
                break;
            case 'Rectangle':
                path = 'M' + ' ' + x + ' ' + (locY + -height / 2) + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + (locY + -height / 2) + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + x + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + x + ' ' + (locY + -height / 2) + ' Z';
                merge(options, { 'd': path });
                break;
            case 'Triangle':
                path = 'M' + ' ' + locX + ' ' + locY + ' ' + 'L' + ' ' + (locX - height) + ' ' + (locY - width / 2) + 'L' + ' ' + (locX - height) + ' ' + (locY + width / 2) + ' Z';
                merge(options, { 'd': path });
                break;
            case 'InvertedTriangle':
                path = 'M' + ' ' + locX + ' ' + locY + ' ' + 'L' + ' ' + (locX + height) + ' ' + (locY - width / 2) + 'L' + ' ' + (locX + height) + ' ' + (locY + width / 2) + ' Z';
                merge(options, { 'd': path });
                break;
            case 'Image':
                merge(options, { 'href': url, 'height': height, 'width': width, x: x, y: y });
                break;
        }
        return options;
    }
    /**
     * Function to get range color from value for circular gauge.
     * @returns string
     * @private
     */
    function getRangeColor(value, ranges, color) {
        var min = 0;
        var max = 0;
        var currentRange = ranges.filter(function (range) {
            min = Math.min(range.start, range.end);
            max = Math.max(range.start, range.end);
            return value >= min && max >= value;
        });
        return currentRange.length ? currentRange[0].rangeColor : color;
    }
    /** @private */

    /** @private */
    function getRangePalette(theme) {
        var palette = ['#50c917', '#27d5ff', '#fcde0b', '#ffb133', '#ff5985'];
        // switch (theme) {
        //     case 'Material':
        //         palette = ['#50c917', '#27d5ff', '#fcde0b', '#ffb133', '#ff5985'];
        //         break;
        //      case 'Fabric':
        //         palette = ['#50c917', '#27d5ff', '#fcde0b', '#ffb133', '#ff5985'];
        //         break;
        // }
        return palette;
    }

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

            _export('CustomizeOption', CustomizeOption = function CustomizeOption(id) {
                _classCallCheck(this, CustomizeOption);

                this.id = id;
            });

            _export('PathOption', PathOption = function (_CustomizeOption) {
                _inherits(PathOption, _CustomizeOption);

                function PathOption(id, fill, width, color, opacity, dashArray, d) {
                    var transform = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
                    var style = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';

                    _classCallCheck(this, PathOption);

                    var _this = _possibleConstructorReturn(this, (PathOption.__proto__ || Object.getPrototypeOf(PathOption)).call(this, id));

                    _this.opacity = opacity;
                    _this.fill = fill;
                    _this.stroke = color;
                    _this['stroke-width'] = width;
                    _this['stroke-dasharray'] = dashArray;
                    _this.d = d;
                    _this.transform = transform;
                    _this.style = style;
                    return _this;
                }

                return PathOption;
            }(CustomizeOption));

            _export('RectOption', RectOption = function (_CustomizeOption2) {
                _inherits(RectOption, _CustomizeOption2);

                function RectOption(id, fill, border, opacity, rect) {
                    _classCallCheck(this, RectOption);

                    var _this2 = _possibleConstructorReturn(this, (RectOption.__proto__ || Object.getPrototypeOf(RectOption)).call(this, id));

                    _this2.y = rect.y;
                    _this2.x = rect.x;
                    _this2.height = rect.height;
                    _this2.width = rect.width;
                    _this2.opacity = opacity;
                    _this2.fill = fill;
                    _this2.stroke = border.color;
                    _this2['stroke-width'] = border.width;
                    return _this2;
                }

                return RectOption;
            }(CustomizeOption));

            _export('Size', Size = function Size(width, height) {
                _classCallCheck(this, Size);

                this.width = width;
                this.height = height;
            });

            _export('GaugeLocation', GaugeLocation = function GaugeLocation(x, y) {
                _classCallCheck(this, GaugeLocation);

                this.x = x;
                this.y = y;
            });

            _export('Rect', Rect = function Rect(x, y, width, height) {
                _classCallCheck(this, Rect);

                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            });

            _export('TextOption', TextOption = function (_CustomizeOption3) {
                _inherits(TextOption, _CustomizeOption3);

                function TextOption(id, x, y, anchor, text) {
                    var transform = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
                    var baseLine = arguments[6];

                    _classCallCheck(this, TextOption);

                    var _this3 = _possibleConstructorReturn(this, (TextOption.__proto__ || Object.getPrototypeOf(TextOption)).call(this, id));

                    _this3.transform = '';
                    _this3.baseLine = 'auto';
                    _this3.x = x;
                    _this3.y = y;
                    _this3.anchor = anchor;
                    _this3.text = text;
                    _this3.transform = transform;
                    _this3.baseLine = baseLine;
                    return _this3;
                }

                return TextOption;
            }(CustomizeOption));

            _export('VisibleLabels', VisibleLabels = function VisibleLabels(text, value, size) {
                _classCallCheck(this, VisibleLabels);

                this.text = text;
                this.value = value;
                this.size = size;
            });

            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('Border', Border = function (_ChildProperty) {
                _inherits(Border, _ChildProperty);

                function Border() {
                    _classCallCheck(this, Border);

                    return _possibleConstructorReturn(this, (Border.__proto__ || Object.getPrototypeOf(Border)).apply(this, arguments));
                }

                return Border;
            }(ChildProperty));

            __decorate$1([Property('')], Border.prototype, "color", void 0);
            __decorate$1([Property(1)], Border.prototype, "width", void 0);
            /**
             * Configures the fonts in circular gauge.
             */

            _export('Font', Font = function (_ChildProperty2) {
                _inherits(Font, _ChildProperty2);

                function Font() {
                    _classCallCheck(this, Font);

                    return _possibleConstructorReturn(this, (Font.__proto__ || Object.getPrototypeOf(Font)).apply(this, arguments));
                }

                return Font;
            }(ChildProperty));

            __decorate$1([Property('16px')], Font.prototype, "size", void 0);
            __decorate$1([Property('')], Font.prototype, "color", void 0);
            __decorate$1([Property('Segoe UI')], Font.prototype, "fontFamily", void 0);
            __decorate$1([Property('Normal')], Font.prototype, "fontWeight", void 0);
            __decorate$1([Property('Normal')], Font.prototype, "fontStyle", void 0);
            __decorate$1([Property(1)], Font.prototype, "opacity", void 0);
            /**
             * Configures the margin of circular gauge.
             */

            _export('Margin', Margin = function (_ChildProperty3) {
                _inherits(Margin, _ChildProperty3);

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
             * Configures the tooltip in circular gauge.
             */

            _export('TooltipSettings', TooltipSettings = function (_ChildProperty4) {
                _inherits(TooltipSettings, _ChildProperty4);

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

            /**
             * Specifies gauge Themes
             */

            (function (Theme) {
                /** @private */
                Theme.axisLabelFont = {
                    size: '12px',
                    fontWeight: 'Normal',
                    color: null,
                    fontStyle: 'Normal',
                    fontFamily: 'Segoe UI'
                };
                /** @private */
                Theme.axisLineColor = null;
                /** @private */
                Theme.tickLineColor = null;
                /** @private */
                Theme.pointerColor = null;
            })(Theme || (Theme = {}));
            __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('Line', Line = function (_ChildProperty5) {
                _inherits(Line, _ChildProperty5);

                function Line() {
                    _classCallCheck(this, Line);

                    return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
                }

                return Line;
            }(ChildProperty));

            __decorate$2([Property(2)], Line.prototype, "width", void 0);
            __decorate$2([Property('')], Line.prototype, "dashArray", void 0);
            __decorate$2([Property(Theme.axisLineColor)], Line.prototype, "color", void 0);
            /**
             * Configures the axis label.
             */

            _export('Label', Label = function (_ChildProperty6) {
                _inherits(Label, _ChildProperty6);

                function Label() {
                    _classCallCheck(this, Label);

                    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
                }

                return Label;
            }(ChildProperty));

            __decorate$2([Complex(Theme.axisLabelFont, Font)], Label.prototype, "font", void 0);
            __decorate$2([Property('')], Label.prototype, "format", void 0);
            __decorate$2([Property('Inside')], Label.prototype, "position", void 0);
            __decorate$2([Property('None')], Label.prototype, "hiddenLabel", void 0);
            __decorate$2([Property(false)], Label.prototype, "autoAngle", void 0);
            __decorate$2([Property(false)], Label.prototype, "useRangeColor", void 0);
            __decorate$2([Property(0)], Label.prototype, "offset", void 0);
            /**
             * Configures the ranges of an axis.
             */

            _export('Range', Range = function (_ChildProperty7) {
                _inherits(Range, _ChildProperty7);

                function Range() {
                    _classCallCheck(this, Range);

                    return _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
                }

                return Range;
            }(ChildProperty));

            __decorate$2([Property(null)], Range.prototype, "start", void 0);
            __decorate$2([Property(null)], Range.prototype, "end", void 0);
            __decorate$2([Property(null)], Range.prototype, "radius", void 0);
            __decorate$2([Property(10)], Range.prototype, "startWidth", void 0);
            __decorate$2([Property(10)], Range.prototype, "endWidth", void 0);
            __decorate$2([Property(null)], Range.prototype, "color", void 0);
            /**
             * Configures the major and minor tick lines of an axis.
             */

            _export('Tick', Tick = function (_ChildProperty8) {
                _inherits(Tick, _ChildProperty8);

                function Tick() {
                    _classCallCheck(this, Tick);

                    return _possibleConstructorReturn(this, (Tick.__proto__ || Object.getPrototypeOf(Tick)).apply(this, arguments));
                }

                return Tick;
            }(ChildProperty));

            __decorate$2([Property(null)], Tick.prototype, "width", void 0);
            __decorate$2([Property(null)], Tick.prototype, "height", void 0);
            __decorate$2([Property(null)], Tick.prototype, "interval", void 0);
            __decorate$2([Property(0)], Tick.prototype, "offset", void 0);
            __decorate$2([Property(Theme.tickLineColor)], Tick.prototype, "color", void 0);
            __decorate$2([Property('Inside')], Tick.prototype, "position", void 0);
            __decorate$2([Property(false)], Tick.prototype, "useRangeColor", void 0);
            /**
             * Configures the needle cap in pointer.
             */

            _export('Cap', Cap = function (_ChildProperty9) {
                _inherits(Cap, _ChildProperty9);

                function Cap() {
                    _classCallCheck(this, Cap);

                    return _possibleConstructorReturn(this, (Cap.__proto__ || Object.getPrototypeOf(Cap)).apply(this, arguments));
                }

                return Cap;
            }(ChildProperty));

            __decorate$2([Property('#FFFFFF')], Cap.prototype, "color", void 0);
            __decorate$2([Complex({ color: Theme.pointerColor, width: 8 }, Border)], Cap.prototype, "border", void 0);
            __decorate$2([Property(8)], Cap.prototype, "radius", void 0);
            /**
             * Configures the back needle in pointers.
             */

            _export('NeedleTail', NeedleTail = function (_ChildProperty10) {
                _inherits(NeedleTail, _ChildProperty10);

                function NeedleTail() {
                    _classCallCheck(this, NeedleTail);

                    return _possibleConstructorReturn(this, (NeedleTail.__proto__ || Object.getPrototypeOf(NeedleTail)).apply(this, arguments));
                }

                return NeedleTail;
            }(ChildProperty));

            __decorate$2([Property(Theme.pointerColor)], NeedleTail.prototype, "color", void 0);
            __decorate$2([Complex({ color: Theme.pointerColor, width: 0 }, Border)], NeedleTail.prototype, "border", void 0);
            __decorate$2([Property('0%')], NeedleTail.prototype, "length", void 0);
            /**
             * Configures the animation of pointers.
             */

            _export('Animation', Animation$1 = function (_ChildProperty11) {
                _inherits(Animation$1, _ChildProperty11);

                function Animation$1() {
                    _classCallCheck(this, Animation$1);

                    return _possibleConstructorReturn(this, (Animation$1.__proto__ || Object.getPrototypeOf(Animation$1)).apply(this, arguments));
                }

                return Animation$1;
            }(ChildProperty));

            __decorate$2([Property(true)], Animation$1.prototype, "enable", void 0);
            __decorate$2([Property(1000)], Animation$1.prototype, "duration", void 0);
            /**
             * ‘Annotation’ module is used to handle annotation action for an axis.
             */

            _export('Annotation', Annotation = function (_ChildProperty12) {
                _inherits(Annotation, _ChildProperty12);

                function Annotation() {
                    _classCallCheck(this, Annotation);

                    return _possibleConstructorReturn(this, (Annotation.__proto__ || Object.getPrototypeOf(Annotation)).apply(this, arguments));
                }

                return Annotation;
            }(ChildProperty));

            __decorate$2([Property(null)], Annotation.prototype, "content", void 0);
            __decorate$2([Property(90)], Annotation.prototype, "angle", void 0);
            __decorate$2([Property('50%')], Annotation.prototype, "radius", void 0);
            __decorate$2([Property('-1')], Annotation.prototype, "zIndex", void 0);
            __decorate$2([Property(false)], Annotation.prototype, "autoAngle", void 0);
            __decorate$2([Complex({ size: '12px', color: '#686868' }, Font)], Annotation.prototype, "textStyle", void 0);
            __decorate$2([Property(null)], Annotation.prototype, "description", void 0);
            /**
             * Configures the pointers of an axis.
             */

            _export('Pointer', Pointer = function (_ChildProperty13) {
                _inherits(Pointer, _ChildProperty13);

                function Pointer() {
                    _classCallCheck(this, Pointer);

                    return _possibleConstructorReturn(this, (Pointer.__proto__ || Object.getPrototypeOf(Pointer)).apply(this, arguments));
                }

                return Pointer;
            }(ChildProperty));

            __decorate$2([Property(null)], Pointer.prototype, "value", void 0);
            __decorate$2([Property('Needle')], Pointer.prototype, "type", void 0);
            __decorate$2([Property(null)], Pointer.prototype, "imageUrl", void 0);
            __decorate$2([Property(null)], Pointer.prototype, "radius", void 0);
            __decorate$2([Property(20)], Pointer.prototype, "pointerWidth", void 0);
            __decorate$2([Complex({}, Cap)], Pointer.prototype, "cap", void 0);
            __decorate$2([Complex({}, NeedleTail)], Pointer.prototype, "needleTail", void 0);
            __decorate$2([Property(Theme.pointerColor)], Pointer.prototype, "color", void 0);
            __decorate$2([Complex({ color: '#DDDDDD', width: 0 }, Border)], Pointer.prototype, "border", void 0);
            __decorate$2([Complex(null, Animation$1)], Pointer.prototype, "animation", void 0);
            __decorate$2([Property('Circle')], Pointer.prototype, "markerShape", void 0);
            __decorate$2([Property(5)], Pointer.prototype, "markerHeight", void 0);
            __decorate$2([Property(null)], Pointer.prototype, "description", void 0);
            __decorate$2([Property(5)], Pointer.prototype, "markerWidth", void 0);
            /**
             * Configures an axis in a gauge.
             */

            _export('Axis', Axis = function (_ChildProperty14) {
                _inherits(Axis, _ChildProperty14);

                function Axis() {
                    _classCallCheck(this, Axis);

                    var _this17 = _possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).apply(this, arguments));

                    /** @private */
                    _this17.visibleLabels = [];
                    return _this17;
                }

                return Axis;
            }(ChildProperty));

            __decorate$2([Property(null)], Axis.prototype, "minimum", void 0);
            __decorate$2([Property(null)], Axis.prototype, "maximum", void 0);
            __decorate$2([Property(null)], Axis.prototype, "radius", void 0);
            __decorate$2([Complex({}, Line)], Axis.prototype, "lineStyle", void 0);
            __decorate$2([Collection([{}], Range)], Axis.prototype, "ranges", void 0);
            __decorate$2([Collection([{}], Pointer)], Axis.prototype, "pointers", void 0);
            __decorate$2([Collection([{}], Annotation)], Axis.prototype, "annotations", void 0);
            __decorate$2([Complex({ width: 2, height: 10 }, Tick)], Axis.prototype, "majorTicks", void 0);
            __decorate$2([Complex({ width: 2, height: 5 }, Tick)], Axis.prototype, "minorTicks", void 0);
            __decorate$2([Property(200)], Axis.prototype, "startAngle", void 0);
            __decorate$2([Property(160)], Axis.prototype, "endAngle", void 0);
            __decorate$2([Property('ClockWise')], Axis.prototype, "direction", void 0);
            __decorate$2([Property(null)], Axis.prototype, "background", void 0);
            __decorate$2([Complex({}, Label)], Axis.prototype, "labelStyle", void 0);

            /**
             * Specifies the gauge constant value
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
            dragStart = 'dragStart';
            dragMove = 'dragMove';
            dragEnd = 'dragEnd';
            resized = 'resized';

            _export('Annotations', Annotations = function () {
                /**
                 * Constructor for Annotation module.
                 * @private.
                 */
                function Annotations(gauge) {
                    _classCallCheck(this, Annotations);

                    this.gauge = gauge;
                    this.elementId = gauge.element.id;
                }
                /**
                 * Method to render the annotation for circular gauge.
                 */


                _createClass(Annotations, [{
                    key: 'renderAnnotation',
                    value: function renderAnnotation(axis, index) {
                        var _this18 = this;

                        var element = createElement('div', {
                            id: this.elementId + '_Annotations_' + index
                        });
                        var parentElement = getElement(this.elementId + '_Secondary_Element');
                        axis.annotations.map(function (annotation, annotationIndex) {
                            if (annotation.content !== null) {
                                _this18.createTemplate(element, annotationIndex, index);
                            }
                        });
                        if (parentElement && element.childElementCount) {
                            parentElement.appendChild(element);
                        }
                    }
                }, {
                    key: 'createTemplate',
                    value: function createTemplate(element, annotationIndex, axisIndex) {
                        var axis = this.gauge.axes[axisIndex];
                        var annotation = axis.annotations[annotationIndex];
                        var childElement = createElement('div', {
                            id: this.elementId + '_Axis_' + axisIndex + '_Annotation_' + annotationIndex,
                            styles: 'position: absolute; z-index:' + annotation.zIndex + ';transform:' + (annotation.autoAngle ? 'rotate(' + (annotation.angle - 90) + 'deg)' : 'rotate(0deg)') + ';'
                        });
                        var argsData = {
                            cancel: false, name: annotationRender, content: annotation.content,
                            axis: axis, annotation: annotation, textStyle: annotation.textStyle
                        };
                        this.gauge.trigger(annotationRender, argsData);
                        var templateFn = void 0;
                        var templateElement = void 0;
                        if (!argsData.cancel) {
                            templateFn = getTemplateFunction(argsData.content);
                            if (templateFn && templateFn(axis).length) {
                                templateElement = templateFn(axis);
                                while (templateElement.length > 0) {
                                    childElement.appendChild(templateElement[0]);
                                }
                            } else {
                                childElement.appendChild(createElement('div', {
                                    innerHTML: argsData.content,
                                    styles: getFontStyle(argsData.textStyle)
                                }));
                            }
                            this.updateLocation(childElement, axis, annotation);
                            element.appendChild(childElement);
                        }
                    }
                }, {
                    key: 'updateLocation',
                    value: function updateLocation(element, axis, annotation) {
                        var location = getLocationFromAngle(annotation.angle - 90, stringToNumber(annotation.radius, axis.currentRadius), this.gauge.midPoint);
                        var elementRect = measureElementRect(element);
                        element.style.left = location.x - elementRect.width / 2 + 'px';
                        element.style.top = location.y - elementRect.height / 2 + 'px';
                        element.setAttribute('aria-label', annotation.description || 'Annotation');
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        // Returns te module name
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
                /**
                 * Constructor for Tooltip module.
                 * @private.
                 */
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
                 * Method to render the tooltip for circular gauge.
                 */


                _createClass(GaugeTooltip, [{
                    key: 'renderTooltip',
                    value: function renderTooltip(target) {
                        var currentPointer = getPointer(target.id, this.gauge);
                        var element = void 0;
                        var angle = void 0;
                        this.currentAxis = this.gauge.axes[currentPointer.axisIndex];
                        this.currentPointer = this.currentAxis.pointers[currentPointer.pointerIndex];
                        angle = getAngleFromValue(this.currentPointer.currentValue, this.currentAxis.visibleRange.max, this.currentAxis.visibleRange.min, this.currentAxis.startAngle, this.currentAxis.endAngle, this.currentAxis.direction === 'ClockWise') % 360;
                        element = this.appendTargetElement(angle);
                        if (element.getAttribute('data-tooltip-id') === null) {
                            this.findPosition(angle);
                            this.ejTooltip.open(element);
                        }
                    }
                }, {
                    key: 'appendTargetElement',
                    value: function appendTargetElement(angle) {
                        var location = getLocationFromAngle(angle, this.currentAxis.currentRadius, this.gauge.midPoint);
                        var element = getElement(this.element.id + '_GaugeTooltip');
                        if (element) {
                            element.style.left = location.x + 'px';
                            element.style.top = location.y + 'px';
                        } else {
                            element = createElement('div', {
                                id: this.element.id + '_GaugeTooltip',
                                styles: 'position:absolute;left:' + location.x + 'px;top:' + location.y + 'px;width:2px;height:2px;background:transparent'
                            });
                            getElement(this.element.id + '_Secondary_Element').appendChild(element);
                        }
                        return element;
                    }
                }, {
                    key: 'findPosition',
                    value: function findPosition(angle) {
                        switch (true) {
                            case angle >= 0 && angle <= 45:
                                this.ejTooltip.position = 'RightBottom';
                                break;
                            case angle >= 45 && angle < 90:
                                this.ejTooltip.position = 'BottomRight';
                                break;
                            case angle >= 90 && angle < 135:
                                this.ejTooltip.position = 'BottomLeft';
                                break;
                            case angle >= 135 && angle < 180:
                                this.ejTooltip.position = 'LeftBottom';
                                break;
                            case angle >= 180 && angle < 225:
                                this.ejTooltip.position = 'LeftTop';
                                break;
                            case angle >= 225 && angle < 270:
                                this.ejTooltip.position = 'TopLeft';
                                break;
                            case angle >= 270 && angle < 315:
                                this.ejTooltip.position = 'TopRight';
                                break;
                            default:
                                this.ejTooltip.position = 'RightTop';
                                break;
                        }
                        this.ejTooltip.dataBind();
                    }
                }, {
                    key: 'onBeforeRender',
                    value: function onBeforeRender(args) {
                        var tooltipFormat = this.gauge.tooltip.format || this.currentAxis.labelStyle.format;
                        var customLabelFormat = tooltipFormat && tooltipFormat.match('{value}') !== null;
                        var format = this.gauge.intl.getNumberFormat({
                            format: getLabelFormat(tooltipFormat), useGrouping: this.gauge.useGroupingSeparator
                        });
                        var content = customLabelFormat ? tooltipFormat.replace(new RegExp('{value}', 'g'), format(this.currentPointer.currentValue)) : format(this.currentPointer.currentValue);
                        content = this.tooltip.template ? getTemplateFunction(this.tooltip.template)(this.currentAxis)[0] : content;
                        var argsData = {
                            cancel: false, name: tooltipRender,
                            content: content,
                            border: this.borderStyle,
                            axis: this.currentAxis, pointer: this.currentPointer,
                            textStyle: this.textStyle
                        };
                        this.gauge.trigger(tooltipRender, argsData);
                        this.borderStyle = argsData.border;
                        args.cancel = argsData.cancel;
                        this.ejTooltip.content = argsData.content;
                        this.textStyle = argsData.textStyle;
                        this.ejTooltip.dataBind();
                    }
                }, {
                    key: 'tooltipCustomization',
                    value: function tooltipCustomization(args) {
                        var font = this.textStyle;
                        var borderColor = this.borderStyle.color;
                        var border = this.borderStyle.width;
                        var pointerSize = 5;
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
                        // Returns te module name
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

            AxisRenderer = function () {
                /**
                 * Constructor for axis renderer.
                 * @private.
                 */
                function AxisRenderer(gauge) {
                    _classCallCheck(this, AxisRenderer);

                    this.gauge = gauge;
                }
                /**
                 * Method to render the axis element of the circular gauge.
                 * @return {void}
                 * @private
                 */


                _createClass(AxisRenderer, [{
                    key: 'drawAxisOuterLine',
                    value: function drawAxisOuterLine(axis, index, element, gauge) {
                        var background = axis.background;
                        this.setRangeColor(axis);
                        if (background !== null) {
                            appendPath(new PathOption(gauge.element.id + '_AxisOuterLine_' + index, background, 0, 'transparent', null, '0', getPathArc(gauge.midPoint, 0, 360, Math.min(axis.rect.width, axis.rect.height) / 2), '', 'pointer-events:none;'), element, gauge);
                        }
                    }
                }, {
                    key: 'drawAxisLine',
                    value: function drawAxisLine(axis, index, element, gauge) {
                        var startAngle = axis.startAngle;
                        var endAngle = axis.endAngle;
                        if (axis.lineStyle.width > 0) {
                            startAngle = !isCompleteAngle(startAngle, endAngle) ? startAngle : [0, endAngle = 360][0];
                            appendPath(new PathOption(gauge.element.id + '_AxisLine_' + index, 'transparent', axis.lineStyle.width, axis.lineStyle.color, null, axis.lineStyle.dashArray, getPathArc(gauge.midPoint, startAngle - 90, endAngle - 90, axis.currentRadius), '', 'pointer-events:none;'), element, gauge);
                        }
                    }
                }, {
                    key: 'drawAxisLabels',
                    value: function drawAxisLabels(axis, index, element, gauge) {
                        var labelElement = gauge.renderer.createGroup({
                            id: gauge.element.id + '_Axis_Labels_' + index
                        });
                        var min = axis.visibleRange.min;
                        var max = axis.visibleRange.max;
                        var labelCollection = axis.visibleLabels;
                        var location = void 0;
                        var style = axis.labelStyle;
                        var anchor = void 0;
                        var angle = void 0;
                        var label = void 0;
                        var radius = axis.currentRadius;
                        var labelPadding = 10;
                        if (style.position === 'Outside') {
                            radius += axis.nearSize - (axis.maxLabelSize.height + axis.lineStyle.width / 2) + labelPadding / 2;
                        } else {
                            radius -= axis.farSize - (axis.maxLabelSize.height + axis.lineStyle.width / 2) + (style.autoAngle ? labelPadding : 0);
                        }
                        for (var i = 0, length = labelCollection.length; i < length; i++) {
                            if (i === 0 && style.hiddenLabel === 'First' || i === length - 1 && style.hiddenLabel === 'Last') {
                                continue;
                            }
                            label = labelCollection[i];
                            angle = Math.round(getAngleFromValue(label.value, max, min, axis.startAngle, axis.endAngle, axis.direction === 'ClockWise'));
                            location = getLocationFromAngle(angle, radius, gauge.midPoint);
                            anchor = this.findAnchor(location, style, angle, label);
                            textElement(new TextOption(gauge.element.id + '_Axis_' + index + '_Label_' + i, location.x, location.y, anchor, label.text, style.autoAngle ? 'rotate(' + (angle + 90) + ',' + location.x + ',' + location.y + ')' : '', 'auto'), style.font, style.useRangeColor ? getRangeColor(label.value, axis.ranges, style.font.color) : style.font.color, labelElement, 'pointer-events:none;');
                        }
                        element.appendChild(labelElement);
                    }
                }, {
                    key: 'findAnchor',
                    value: function findAnchor(location, style, angle, label) {
                        if (style.autoAngle) {
                            return 'middle';
                        }
                        var anchor = style.position === 'Inside' ? angle > 120 && angle < 240 ? 'start' : 300 < angle || angle < 60 ? 'end' : 'middle' : angle > 120 && angle < 240 ? 'end' : 300 < angle || angle < 60 ? 'start' : 'middle';
                        location.y += style.position === 'Inside' ? angle >= 240 && angle <= 300 ? label.size.height / 2 : angle >= 60 && angle <= 120 ? 0 : label.size.height / 4 : angle >= 240 && angle <= 300 ? 0 : angle >= 60 && angle <= 120 ? label.size.height / 2 : label.size.height / 4;
                        return anchor;
                    }
                }, {
                    key: 'drawMinorTickLines',
                    value: function drawMinorTickLines(axis, index, element, gauge) {
                        var minorTickElements = gauge.renderer.createGroup({
                            id: gauge.element.id + '_Axis_MinorTickLines_' + index
                        });
                        var minorLineStyle = axis.minorTicks;
                        var minorInterval = minorLineStyle.interval !== null ? minorLineStyle.interval : axis.visibleRange.interval / 2;
                        var isRangeColor = minorLineStyle.useRangeColor;
                        if (minorLineStyle.width && minorLineStyle.height && minorInterval) {
                            for (var i = axis.visibleRange.min, max = axis.visibleRange.max; i <= max; i += minorInterval) {
                                if (this.majorValues.indexOf(+i.toFixed(3)) < 0) {
                                    appendPath(new PathOption(gauge.element.id + '_Axis_Minor_TickLine_' + index + '_' + i, 'transparent', minorLineStyle.width, isRangeColor ? getRangeColor(i, axis.ranges, minorLineStyle.color) : minorLineStyle.color, null, '0', this.calculateTicks(i, minorLineStyle, axis), '', 'pointer-events:none;'), minorTickElements, gauge);
                                }
                            }
                            element.appendChild(minorTickElements);
                        }
                    }
                }, {
                    key: 'drawMajorTickLines',
                    value: function drawMajorTickLines(axis, index, element, gauge) {
                        var majorTickElements = gauge.renderer.createGroup({
                            id: gauge.element.id + '_Axis_MajorTickLines_' + index
                        });
                        var majorLineStyle = axis.majorTicks;
                        var isRangeColor = majorLineStyle.useRangeColor;
                        this.majorValues = [];
                        if (majorLineStyle.width && majorLineStyle.height && axis.visibleRange.interval) {
                            for (var i = axis.visibleRange.min, max = axis.visibleRange.max, interval = axis.visibleRange.interval; i <= max; i += interval) {
                                this.majorValues.push(+i.toFixed(3));
                                appendPath(new PathOption(gauge.element.id + '_Axis_Major_TickLine_' + index + '_' + i, 'transparent', majorLineStyle.width, isRangeColor ? getRangeColor(i, axis.ranges, majorLineStyle.color) : majorLineStyle.color, null, '0', this.calculateTicks(i, majorLineStyle, axis), '', 'pointer-events:none;'), majorTickElements, gauge);
                            }
                            element.appendChild(majorTickElements);
                        }
                    }
                }, {
                    key: 'calculateTicks',
                    value: function calculateTicks(value, options, axis) {
                        var axisLineWidth = axis.lineStyle.width / 2 + options.offset;
                        var isOutside = options.position === 'Outside';
                        var angle = getAngleFromValue(value, axis.visibleRange.max, axis.visibleRange.min, axis.startAngle, axis.endAngle, axis.direction === 'ClockWise');
                        var start = getLocationFromAngle(angle, axis.currentRadius + (isOutside ? axisLineWidth : -axisLineWidth), this.gauge.midPoint);
                        var end = getLocationFromAngle(angle, axis.currentRadius + (isOutside ? axisLineWidth : -axisLineWidth) + (isOutside ? options.height : -options.height), this.gauge.midPoint);
                        return 'M ' + start.x + ' ' + start.y + ' L ' + end.x + ' ' + end.y + ' ';
                    }
                }, {
                    key: 'drawAxisRange',
                    value: function drawAxisRange(axis, index, element, gauge) {
                        var _this19 = this;

                        var rangeElement = gauge.renderer.createGroup({
                            id: gauge.element.id + '_Axis_Ranges_' + index
                        });
                        var startAngle = void 0;
                        var endAngle = void 0;
                        var isClockWise = axis.direction === 'ClockWise';
                        var startValue = void 0;
                        var endValue = void 0;
                        var min = axis.visibleRange.min;
                        var max = axis.visibleRange.max;
                        var startWidth = void 0;
                        var endWidth = void 0;
                        axis.ranges.map(function (range, rangeIndex) {
                            _this19.calculateRangeRadius(axis, range);
                            startValue = Math.min(Math.max(range.start, min), range.end);
                            endValue = Math.min(Math.max(range.start, range.end), max);
                            if (startValue !== endValue) {
                                startAngle = getAngleFromValue(startValue, max, min, axis.startAngle, axis.endAngle, isClockWise);
                                endAngle = getAngleFromValue(endValue, max, min, axis.startAngle, axis.endAngle, isClockWise);
                                if (range.startWidth.length > 0) {
                                    startWidth = toPixel(range.startWidth, range.currentRadius);
                                } else {
                                    startWidth = range.startWidth;
                                }
                                if (range.endWidth.length > 0) {
                                    endWidth = toPixel(range.endWidth, range.currentRadius);
                                } else {
                                    endWidth = range.endWidth;
                                }
                                endAngle = isClockWise ? endAngle : [startAngle, startAngle = endAngle][0];
                                endWidth = isClockWise ? endWidth : [startWidth, startWidth = endWidth][0];
                                appendPath(new PathOption(gauge.element.id + '_Axis_' + index + '_Range_' + rangeIndex, range.rangeColor, 0, range.rangeColor, 1, '0', getPathArc(gauge.midPoint, Math.round(startAngle), Math.round(endAngle), range.currentRadius, startWidth, endWidth), '', 'pointer-events:none;'), rangeElement, gauge);
                            }
                        });
                        element.appendChild(rangeElement);
                    }
                }, {
                    key: 'calculateRangeRadius',
                    value: function calculateRangeRadius(axis, range) {
                        var radius = range.radius !== null ? range.radius : '100%';
                        range.currentRadius = stringToNumber(radius, axis.currentRadius);
                    }
                }, {
                    key: 'setRangeColor',
                    value: function setRangeColor(axis) {
                        var rangeColors = getRangePalette(this.gauge.theme);
                        axis.ranges.map(function (range, index) {
                            range.rangeColor = range.color ? range.color : rangeColors[index % rangeColors.length];
                        });
                    }
                }]);

                return AxisRenderer;
            }();

            PointerRenderer = function () {
                /**
                 * Constructor for pointer renderer.
                 * @private.
                 */
                function PointerRenderer(gauge) {
                    _classCallCheck(this, PointerRenderer);

                    this.gauge = gauge;
                }
                /**
                 * Method to render the axis pointers of the circular gauge.
                 * @return {void}
                 * @private
                 */


                _createClass(PointerRenderer, [{
                    key: 'drawPointers',
                    value: function drawPointers(axis, axisIndex, element, gauge) {
                        var _this20 = this;

                        var animate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

                        var pointerElement = gauge.renderer.createGroup({
                            id: gauge.element.id + '_Axis_Pointers_' + axisIndex
                        });
                        var childElement = void 0;
                        var range = void 0;
                        axis.pointers.map(function (pointer, pointerIndex) {
                            range = axis.visibleRange;
                            pointer.pathElement = [];
                            _this20.calculatePointerRadius(axis, pointer);
                            childElement = gauge.renderer.createGroup({
                                id: gauge.element.id + '_Axis_' + axisIndex + '_Pointer_' + pointerIndex
                            });
                            _this20['draw' + pointer.type + 'Pointer'](axis, axisIndex, pointerIndex, childElement, gauge);
                            _this20.setPointerValue(axis, pointer, pointer.currentValue);
                            pointerElement.appendChild(childElement);
                            if (animate) {
                                _this20.doPointerAnimation(pointer, axis);
                            }
                        });
                        element.appendChild(pointerElement);
                    }
                }, {
                    key: 'calculatePointerRadius',
                    value: function calculatePointerRadius(axis, pointer) {
                        var padding = 5;
                        pointer.currentRadius = pointer.radius === null ? axis.currentRadius - (axis.farSize + padding) : stringToNumber(pointer.radius, axis.currentRadius);
                    }
                }, {
                    key: 'drawNeedlePointer',
                    value: function drawNeedlePointer(axis, axisIndex, index, parentElement, gauge) {
                        var pointer = axis.pointers[index];
                        var pointerRadius = void 0;
                        var location = void 0;
                        var direction = void 0;
                        var mid = gauge.midPoint;
                        var width = pointer.pointerWidth / 2;
                        var rectDirection = void 0;
                        // To render the needle
                        location = getLocationFromAngle(0, pointer.currentRadius, mid);
                        direction = 'M ' + mid.x + ' ' + (mid.y - width) + ' L ' + location.x + ' ' + mid.y + ' L ' + mid.x + ' ' + (mid.y + width) + ' Z';
                        pointer.pathElement.push(appendPath(new PathOption(gauge.element.id + '_Axis_' + axisIndex + '_Pointer_Needle_' + index, pointer.color, pointer.border.width, pointer.border.color, null, '0', direction), parentElement, gauge));
                        pointerRadius = stringToNumber(pointer.needleTail.length, pointer.currentRadius);
                        // To render the rect element for touch
                        rectDirection = 'M ' + mid.x + ' ' + (mid.y - width) + ' L ' + location.x + ' ' + (mid.y - width) + ' L ' + location.x + ' ' + (mid.y + width) + ' L ' + mid.x + ' ' + (mid.y + width);
                        // To render the needle tail
                        if (pointerRadius) {
                            location = getLocationFromAngle(180, pointerRadius, gauge.midPoint);
                            direction = 'M ' + mid.x + ' ' + (mid.y - width) + ' L ' + location.x + ' ' + (mid.y - width) + ' L ' + location.x + ' ' + (mid.y + width) + ' L ' + mid.x + ' ' + (mid.y + width) + ' Z';
                            pointer.pathElement.push(appendPath(new PathOption(gauge.element.id + '_Axis_' + axisIndex + '_Pointer_NeedleTail_' + index, pointer.needleTail.color, pointer.needleTail.border.width, pointer.needleTail.border.color, null, '0', direction), parentElement, gauge));
                            rectDirection += ' L ' + location.x + ' ' + (mid.y + width) + ' L ' + location.x + ' ' + (mid.y - width);
                        }
                        // To render the cap
                        if (pointer.cap.radius) {
                            pointer.pathElement.push(appendPath(calculateShapes(mid, 'Circle', new Size(pointer.cap.radius * 2, pointer.cap.radius * 2), '', new PathOption(gauge.element.id + '_Axis_' + axisIndex + '_Pointer_NeedleCap_' + index, pointer.cap.color, pointer.cap.border.width, pointer.cap.border.color, null, '0', '', '')), parentElement, gauge, 'Ellipse'));
                        }
                        pointer.pathElement.push(appendPath(new PathOption(gauge.element.id + '_Axis_' + axisIndex + '_Pointer_NeedleRect_' + index, 'transparent', 0, 'transpanret', null, '0', rectDirection + ' Z'), parentElement, gauge));
                    }
                }, {
                    key: 'setPointerValue',
                    value: function setPointerValue(axis, pointer, value) {
                        var location = this.gauge.midPoint;
                        var isClockWise = axis.direction === 'ClockWise';
                        var startAngle = getAngleFromValue(axis.visibleRange.min, axis.visibleRange.max, axis.visibleRange.min, axis.startAngle, axis.endAngle, isClockWise);
                        var endAngle = getAngleFromValue(value, axis.visibleRange.max, axis.visibleRange.min, axis.startAngle, axis.endAngle, isClockWise);
                        endAngle = isClockWise ? endAngle : [startAngle, startAngle = endAngle][0];
                        pointer.pathElement.map(function (element) {
                            if (pointer.type === 'RangeBar') {
                                element.setAttribute('d', getCompleteArc(location, startAngle, endAngle, pointer.currentRadius, pointer.currentRadius - pointer.pointerWidth));
                            } else {
                                element.setAttribute('transform', 'rotate(' + getAngleFromValue(value, axis.visibleRange.max, axis.visibleRange.min, axis.startAngle, axis.endAngle, isClockWise) + ',' + location.x + ',' + location.y + ')');
                            }
                            element.setAttribute('aria-label', pointer.description || 'Pointer:' + value.toString());
                        });
                    }
                }, {
                    key: 'drawMarkerPointer',
                    value: function drawMarkerPointer(axis, axisIndex, index, parentElement, gauge) {
                        var pointer = axis.pointers[index];
                        var location = getLocationFromAngle(0, pointer.currentRadius, gauge.midPoint);
                        pointer.pathElement.push(appendPath(calculateShapes(location, pointer.markerShape, new Size(pointer.markerWidth, pointer.markerHeight), pointer.imageUrl, new PathOption(gauge.element.id + '_Axis_' + axisIndex + '_Pointer_Marker_' + index, pointer.color, pointer.border.width, pointer.border.color, null, '0', '', '')), parentElement, gauge, pointer.markerShape === 'Circle' ? 'Ellipse' : pointer.markerShape === 'Image' ? 'Image' : 'Path'));
                    }
                }, {
                    key: 'drawRangeBarPointer',
                    value: function drawRangeBarPointer(axis, axisIndex, index, parentElement, gauge) {
                        var pointer = axis.pointers[index];
                        pointer.pathElement.push(appendPath(new PathOption(gauge.element.id + '_Axis_' + axisIndex + '_Pointer_RangeBar_' + index, pointer.color, pointer.border.width, pointer.border.color, 1, '0', ''), parentElement, gauge));
                    }
                }, {
                    key: 'doPointerAnimation',
                    value: function doPointerAnimation(pointer, axis) {
                        var _this21 = this;

                        var startValue = axis.visibleRange.min;
                        var endValue = pointer.currentValue;
                        if (pointer.animation.enable && startValue !== endValue && this.gauge.animatePointer) {
                            pointer.pathElement.map(function (element) {
                                if (pointer.type === 'RangeBar') {
                                    _this21.performRangeBarAnimation(element, startValue, endValue, axis, pointer, pointer.currentRadius, pointer.currentRadius - pointer.pointerWidth);
                                } else {
                                    _this21.performNeedleAnimation(element, startValue, endValue, axis, pointer, pointer.currentRadius, pointer.currentRadius - pointer.pointerWidth);
                                }
                            });
                        }
                    }
                }, {
                    key: 'performNeedleAnimation',
                    value: function performNeedleAnimation(element, start, _end, axis, pointer, radius, innerRadius) {
                        var _this22 = this;

                        var isClockWise = axis.direction === 'ClockWise';
                        var startAngle = getAngleFromValue(start, axis.visibleRange.max, axis.visibleRange.min, axis.startAngle, axis.endAngle, isClockWise);
                        var pointAngle = getAngleFromValue(_end, axis.visibleRange.max, axis.visibleRange.min, axis.startAngle, axis.endAngle, isClockWise);
                        var endAngle = startAngle > pointAngle ? pointAngle + 360 : pointAngle;
                        var sweepAngle = void 0;
                        new Animation({}).animate(element, {
                            duration: pointer.animation.duration,
                            progress: function progress(args) {
                                sweepAngle = start < _end || Math.round(startAngle) === Math.round(endAngle) ? isClockWise ? endAngle - startAngle : endAngle - startAngle - 360 : isClockWise ? endAngle - startAngle - 360 : endAngle - startAngle;
                                element.style.animation = 'None';
                                element.setAttribute('transform', 'rotate(' + linear(args.timeStamp, startAngle, sweepAngle, args.duration) + ',' + _this22.gauge.midPoint.x.toString() + ',' + _this22.gauge.midPoint.y.toString() + ')');
                            },
                            end: function end(model) {
                                _this22.setPointerValue(axis, pointer, _end);
                                if (pointer.type === 'Marker' || element.id.indexOf('_Pointer_NeedleCap') >= 0) {
                                    _this22.gauge.trigger(animationComplete, { axis: axis, pointer: pointer });
                                }
                            }
                        });
                    }
                }, {
                    key: 'performRangeBarAnimation',
                    value: function performRangeBarAnimation(element, start, _end2, axis, pointer, radius, innerRadius) {
                        var _this23 = this;

                        var isClockWise = axis.direction === 'ClockWise';
                        var startAngle = getAngleFromValue(start, axis.visibleRange.max, axis.visibleRange.min, axis.startAngle, axis.endAngle, isClockWise);
                        var minAngle = getAngleFromValue(axis.visibleRange.min, axis.visibleRange.max, axis.visibleRange.min, axis.startAngle, axis.endAngle, isClockWise);
                        var pointAngle = getAngleFromValue(_end2, axis.visibleRange.max, axis.visibleRange.min, axis.startAngle, axis.endAngle, isClockWise);
                        var sweepAngle = void 0;
                        var endAngle = startAngle > pointAngle ? pointAngle + 360 : pointAngle;
                        new Animation({}).animate(element, {
                            duration: pointer.animation.duration,
                            progress: function progress(arg) {
                                element.style.animation = 'None';
                                sweepAngle = start < _end2 || Math.round(startAngle) === Math.round(endAngle) ? isClockWise ? endAngle - startAngle : endAngle - startAngle - 360 : isClockWise ? endAngle - startAngle - 360 : endAngle - startAngle;
                                if (isClockWise) {
                                    element.setAttribute('d', getCompleteArc(_this23.gauge.midPoint, minAngle, linear(arg.timeStamp, startAngle, sweepAngle, arg.duration) + 0.0001, radius, innerRadius));
                                } else {
                                    element.setAttribute('d', getCompleteArc(_this23.gauge.midPoint, linear(arg.timeStamp, startAngle, sweepAngle, arg.duration), minAngle + 0.0001, radius, innerRadius));
                                }
                            },
                            end: function end(model) {
                                _this23.setPointerValue(axis, pointer, _end2);
                                _this23.gauge.trigger(animationComplete, { axis: axis, pointer: pointer });
                            }
                        });
                    }
                }]);

                return PointerRenderer;
            }();

            labelPadding = 10;

            AxisLayoutPanel = function () {
                function AxisLayoutPanel(gauge) {
                    _classCallCheck(this, AxisLayoutPanel);

                    this.gauge = gauge;
                    this.axisRenderer = new AxisRenderer(gauge);
                    this.pointerRenderer = new PointerRenderer(gauge);
                }
                /**
                 * Measure the calculate the axis size and radius.
                 * @return {void}
                 * @private
                 */


                _createClass(AxisLayoutPanel, [{
                    key: 'measureAxis',
                    value: function measureAxis(rect) {
                        this.measureAxisSize(this.gauge, rect);
                        this.calculateAxesRadius();
                    }
                }, {
                    key: 'calculateAxesRadius',
                    value: function calculateAxesRadius() {
                        var totalRadius = void 0;
                        var currentRadius = void 0;
                        var rangeMaximumRadius = 0;
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = this.gauge.axes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var axis = _step.value;

                                totalRadius = Math.min(axis.rect.width, axis.rect.height) / 2;
                                currentRadius = axis.radius != null ? stringToNumber(axis.radius, totalRadius) : totalRadius;
                                rangeMaximumRadius = Math.max.apply(Math, axis.ranges.map(function (value) {
                                    return value.radius ? value.radius.indexOf('%') < 0 ? 100 : parseInt(value.radius, 10) : 0;
                                }));
                                currentRadius = rangeMaximumRadius > 100 && axis.radius == null ? currentRadius * 100 / rangeMaximumRadius : currentRadius;
                                axis.currentRadius = currentRadius - axis.nearSize;
                                axis.visibleRange.interval = this.calculateNumericInterval(axis, axis.rect);
                                this.calculateVisibleLabels(axis);
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
                    key: 'measureAxisSize',
                    value: function measureAxisSize(gauge, rect) {
                        var _this24 = this;

                        var sum = void 0;
                        this.computeSize(gauge.axes, rect);
                        gauge.axes.map(function (axis, index) {
                            sum = calculateSum(index, _this24.farSizes.length - 1, _this24.farSizes);
                            axis.rect = new Rect(rect.x + sum, rect.y + sum, rect.width - sum * 2, rect.height - sum * 2);
                        });
                    }
                }, {
                    key: 'calculateAxisValues',
                    value: function calculateAxisValues(rect) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = this.gauge.axes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var axis = _step2.value;

                                this.calculateVisibleRange(axis, rect);
                                this.calculateVisibleLabels(axis);
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
                    key: 'calculateVisibleRange',
                    value: function calculateVisibleRange(axis, rect) {
                        var interval = axis.majorTicks.interval;
                        var minimumValue = Math.min(axis.minimum === null ? 0 : axis.minimum, axis.maximum);
                        var maximumValue = Math.max(axis.minimum, axis.maximum === null ? 100 : axis.maximum);
                        axis.pointers.map(function (pointer) {
                            pointer.currentValue = pointer.value !== null ? pointer.value < minimumValue ? minimumValue : pointer.value > maximumValue ? maximumValue : pointer.value : minimumValue;
                            minimumValue = axis.minimum === null ? Math.min(pointer.currentValue, minimumValue) : minimumValue;
                            maximumValue = axis.maximum === null ? Math.max(pointer.currentValue, maximumValue) : maximumValue;
                        });
                        minimumValue = minimumValue === maximumValue ? interval !== null ? minimumValue - interval : minimumValue - 1 : minimumValue;
                        axis.visibleRange = { min: minimumValue, max: maximumValue, interval: interval };
                        axis.visibleRange.interval = this.calculateNumericInterval(axis, rect);
                    }
                }, {
                    key: 'calculateNumericInterval',
                    value: function calculateNumericInterval(axis, rect) {
                        if (axis.majorTicks.interval !== null) {
                            return axis.majorTicks.interval;
                        }
                        var totalAngle = axis.endAngle - axis.startAngle;
                        totalAngle = totalAngle <= 0 ? totalAngle + 360 : totalAngle;
                        return this.calculateNiceInterval(axis.visibleRange.max, axis.visibleRange.min, axis.currentRadius ? axis.currentRadius : rect.width / 2, totalAngle);
                    }
                }, {
                    key: 'calculateNiceInterval',
                    value: function calculateNiceInterval(maxValue, minValue, radius, degree) {
                        var delta = maxValue - minValue;
                        var circumference = 2 * Math.PI * radius * (degree / 360);
                        var desiredIntervalsCount = Math.max(circumference * (0.533 * 3 / 100), 1);
                        var niceInterval = delta / desiredIntervalsCount;
                        var minInterval = Math.pow(10, Math.floor(Math.log(niceInterval) / Math.log(10)));
                        var _arr = [10, 5, 2, 1];
                        for (var _i = 0; _i < _arr.length; _i++) {
                            var interval = _arr[_i];
                            var currentInterval = minInterval * interval;
                            if (desiredIntervalsCount < delta / currentInterval) {
                                break;
                            }
                            niceInterval = currentInterval;
                        }
                        return niceInterval;
                    }
                }, {
                    key: 'calculateVisibleLabels',
                    value: function calculateVisibleLabels(axis) {
                        var style = axis.labelStyle;
                        var customLabelFormat = style.format && style.format.match('{value}') !== null;
                        var format = this.gauge.intl.getNumberFormat({
                            format: getLabelFormat(style.format), useGrouping: this.gauge.useGroupingSeparator
                        });
                        var argsData = void 0;
                        axis.visibleLabels = [];
                        for (var i = axis.visibleRange.min, interval = axis.visibleRange.interval, max = axis.visibleRange.max; i <= max && interval; i += interval) {
                            argsData = {
                                cancel: false, name: axisLabelRender, axis: axis,
                                text: customLabelFormat ? style.format.replace(new RegExp('{value}', 'g'), format(i)) : format(i),
                                value: i
                            };
                            this.gauge.trigger(axisLabelRender, argsData);
                            if (!argsData.cancel) {
                                axis.visibleLabels.push(new VisibleLabels(argsData.text, i));
                            }
                        }
                        this.getMaxLabelWidth(this.gauge, axis);
                    }
                }, {
                    key: 'computeSize',
                    value: function computeSize(axes, rect) {
                        var lineSize = void 0;
                        var outerHeight = void 0;
                        var innerHeight = void 0;
                        var isMajorTickOutside = void 0;
                        var isMinorTickOutside = void 0;
                        var isLabelOutside = void 0;
                        var axisPadding = 5;
                        var majorTickOffset = 0;
                        var minorTickOffset = 0;
                        var labelOffset = 0;
                        this.farSizes = [];
                        this.calculateAxisValues(rect);
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = axes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var axis = _step3.value;

                                lineSize = axis.lineStyle.width / 2;
                                outerHeight = 0;
                                innerHeight = 0;
                                isMajorTickOutside = axis.majorTicks.position === 'Outside';
                                majorTickOffset = axis.majorTicks.offset;
                                isMinorTickOutside = axis.minorTicks.position === 'Outside';
                                minorTickOffset = axis.minorTicks.offset;
                                isLabelOutside = axis.labelStyle.position === 'Outside';
                                labelOffset = axis.labelStyle.offset;
                                // Calculating the outer space of the axis
                                outerHeight += !(isMajorTickOutside && isMinorTickOutside && isLabelOutside) ? axisPadding : 0;
                                outerHeight += (isMajorTickOutside ? axis.majorTicks.height + lineSize : 0) + (isLabelOutside ? axis.maxLabelSize.height + labelPadding + labelOffset : 0) + (isMinorTickOutside && !isMajorTickOutside ? axis.minorTicks.height + lineSize : 0) + lineSize;
                                outerHeight += isMajorTickOutside && isMinorTickOutside ? Math.max(majorTickOffset, minorTickOffset) : isMajorTickOutside ? majorTickOffset : isMinorTickOutside ? minorTickOffset : 0;
                                // Calculating the inner space of the axis
                                innerHeight += (!isMajorTickOutside ? axis.majorTicks.height + lineSize : 0) + (!isLabelOutside ? axis.maxLabelSize.height + labelPadding + labelOffset : 0) + (!isMinorTickOutside && isMajorTickOutside ? axis.minorTicks.height + lineSize : 0) + lineSize;
                                innerHeight += !isMajorTickOutside && !isMinorTickOutside ? Math.max(majorTickOffset, minorTickOffset) : !isMajorTickOutside ? majorTickOffset : !isMinorTickOutside ? minorTickOffset : 0;
                                if (this.farSizes[this.farSizes.length - 1]) {
                                    this.farSizes[this.farSizes.length - 1] += innerHeight + outerHeight;
                                }
                                axis.nearSize = outerHeight - axisPadding;
                                axis.farSize = innerHeight;
                                outerHeight = this.gauge.axes.length === this.farSizes.length + 1 ? 0 : outerHeight;
                                this.farSizes.push(outerHeight);
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
                    key: 'renderAxes',
                    value: function renderAxes() {
                        var _this25 = this;

                        var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                        var gauge = this.gauge;
                        var renderer = this.axisRenderer;
                        var element = void 0;
                        var axesElements = gauge.renderer.createGroup({
                            'id': gauge.element.id + '_AxesCollection',
                            'clip-path': 'url(#' + gauge.element.id + '_GaugeAreaClipRect_' + ')'
                        });
                        // To append the secondary element for annotation and tooltip
                        gauge.element.appendChild(createElement('div', {
                            id: gauge.element.id + '_Secondary_Element',
                            styles: 'position: relative'
                        }));
                        gauge.axes.map(function (axis, index) {
                            element = gauge.renderer.createGroup({
                                id: gauge.element.id + '_Axis_Group_' + index
                            });
                            renderer.drawAxisOuterLine(axis, index, element, gauge);
                            renderer.drawAxisRange(axis, index, element, gauge);
                            renderer.drawAxisLine(axis, index, element, gauge);
                            renderer.drawMajorTickLines(axis, index, element, gauge);
                            renderer.drawMinorTickLines(axis, index, element, gauge);
                            renderer.drawAxisLabels(axis, index, element, gauge);
                            _this25.pointerRenderer.drawPointers(axis, index, element, gauge, animate);
                            if (gauge.annotationsModule) {
                                gauge.annotationsModule.renderAnnotation(axis, index);
                            }
                            axesElements.appendChild(element);
                        });
                        // For append clip rect for axes
                        gauge.svgObject.appendChild(gauge.renderer.drawClipPath({
                            'id': gauge.element.id + '_GaugeAreaClipRect_',
                            'x': 0, 'y': 0,
                            'width': gauge.availableSize.width,
                            'height': gauge.availableSize.height,
                            'fill': 'transparent', 'stroke': 'transparent'
                        }));
                        gauge.svgObject.appendChild(axesElements);
                    }
                }, {
                    key: 'getMaxLabelWidth',
                    value: function getMaxLabelWidth(gauge, axis) {
                        axis.maxLabelSize = new Size(0, 0);
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = axis.visibleLabels[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var label = _step4.value;

                                label.size = measureText(label.text, axis.labelStyle.font);
                                axis.maxLabelSize.width = label.size.width > axis.maxLabelSize.width ? label.size.width : axis.maxLabelSize.width;
                                axis.maxLabelSize.height = label.size.height > axis.maxLabelSize.height ? label.size.height : axis.maxLabelSize.height;
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

                return AxisLayoutPanel;
            }();

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('CircularGauge', CircularGauge = function (_Component) {
                _inherits(CircularGauge, _Component);

                /**
                 * Constructor for creating the widget
                 * @hidden
                 */
                function CircularGauge(options, element) {
                    _classCallCheck(this, CircularGauge);

                    return _possibleConstructorReturn(this, (CircularGauge.__proto__ || Object.getPrototypeOf(CircularGauge)).call(this, options, element));
                }
                /**
                 *  To create svg object, renderer and binding events for the container.
                 */


                _createClass(CircularGauge, [{
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
                            this.setThemeColors('#212121', '#757575');
                        }
                    }
                }, {
                    key: 'setThemeColors',
                    value: function setThemeColors(labelcolor, others) {
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = this.axes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var axis = _step5.value;

                                axis.lineStyle.color = axis.lineStyle.color || others;
                                axis.labelStyle.font.color = axis.labelStyle.font.color || labelcolor;
                                axis.majorTicks.color = axis.majorTicks.color || others;
                                axis.minorTicks.color = axis.minorTicks.color || others;
                                var _iteratorNormalCompletion6 = true;
                                var _didIteratorError6 = false;
                                var _iteratorError6 = undefined;

                                try {
                                    for (var _iterator6 = axis.pointers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                        var pointer = _step6.value;

                                        pointer.color = pointer.color || others;
                                        pointer.needleTail.color = pointer.needleTail.color || others;
                                        pointer.needleTail.border.color = pointer.needleTail.border.color || others;
                                        pointer.cap.color = pointer.cap.color || others;
                                        pointer.cap.border.color = pointer.cap.border.color || others;
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
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.calculateBounds();
                        this.renderElements();
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        EventHandler.remove(this.element, Browser.touchStartEvent, this.gaugeOnMouseDown);
                        EventHandler.remove(this.element, Browser.touchMoveEvent, this.mouseMove);
                        EventHandler.remove(this.element, Browser.touchEndEvent, this.mouseEnd);
                        EventHandler.remove(this.element, 'contextmenu', this.gaugeRightClick);
                        EventHandler.remove(this.element, Browser.isPointer ? 'pointerleave' : 'mouseleave', this.mouseLeave);
                        window.removeEventListener(Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize', this.gaugeResize);
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
                        window.addEventListener(Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize', this.gaugeResize.bind(this));
                        /*! Apply the style for circular gauge */
                        this.setGaugeStyle(this.element);
                    }
                }, {
                    key: 'mouseMove',
                    value: function mouseMove(e) {
                        var args = this.getMouseArgs(e, 'touchmove', gaugeMouseMove);
                        this.trigger(gaugeMouseMove, args);
                        var dragArgs = void 0;
                        var tooltip = this.tooltipModule;
                        if (!args.cancel) {
                            if (this.tooltip.enable && tooltip) {
                                if (args.target.id.indexOf('_Pointer_') >= 0 && !this.activePointer) {
                                    tooltip.renderTooltip(args.target);
                                } else {
                                    tooltip.ejTooltip.close();
                                }
                            }
                            if (this.enablePointerDrag && this.activePointer) {
                                dragArgs = {
                                    axis: this.activeAxis,
                                    pointer: this.activePointer,
                                    previousValue: this.activePointer.currentValue,
                                    name: dragMove,
                                    currentValue: null
                                };
                                this.pointerDrag(new GaugeLocation(args.x, args.y));
                                dragArgs.currentValue = this.activePointer.currentValue;
                                this.trigger(dragMove, dragArgs);
                            }
                        }
                        return false;
                    }
                }, {
                    key: 'mouseLeave',
                    value: function mouseLeave(e) {
                        this.activeAxis = null;
                        this.activePointer = null;
                        this.svgObject.setAttribute('cursor', 'auto');
                        var args = this.getMouseArgs(e, 'touchmove', gaugeMouseLeave);
                        this.trigger(gaugeMouseLeave, args);
                        if (this.tooltip.enable && this.tooltipModule) {
                            this.tooltipModule.ejTooltip.close();
                        }
                        return false;
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
                    key: 'pointerDrag',
                    value: function pointerDrag(location) {
                        var axis = this.activeAxis;
                        var range = axis.visibleRange;
                        var value = getValueFromAngle(getAngleFromLocation(this.midPoint, location), range.max, range.min, axis.startAngle, axis.endAngle, axis.direction === 'ClockWise');
                        if (value >= range.min && value <= range.max) {
                            this.activePointer.currentValue = value;
                            this.activePointer.value = value;
                            this.gaugeAxisLayoutPanel.pointerRenderer.setPointerValue(axis, this.activePointer, value);
                        }
                    }
                }, {
                    key: 'gaugeOnMouseDown',
                    value: function gaugeOnMouseDown(e) {
                        var currentPointer = void 0;
                        var args = this.getMouseArgs(e, 'touchstart', gaugeMouseDown);
                        this.trigger(gaugeMouseDown, args);
                        if (!args.cancel && args.target.id.indexOf('_Pointer_') >= 0 && args.target.id.indexOf(this.element.id + '_Axis_') >= 0) {
                            currentPointer = getPointer(args.target.id, this);
                            this.activeAxis = this.axes[currentPointer.axisIndex];
                            this.activePointer = this.activeAxis.pointers[currentPointer.pointerIndex];
                            this.trigger(dragStart, {
                                axis: this.activeAxis,
                                name: dragStart,
                                pointer: this.activePointer,
                                currentValue: this.activePointer.currentValue
                            });
                            this.svgObject.setAttribute('cursor', 'pointer');
                        }
                        return false;
                    }
                }, {
                    key: 'mouseEnd',
                    value: function mouseEnd(e) {
                        var args = this.getMouseArgs(e, 'touchend', gaugeMouseUp);
                        var isTouch = e.pointerType === 'touch' || e.pointerType === '2' || e.type === 'touchend';
                        var tooltipInterval = void 0;
                        var tooltip = this.tooltipModule;
                        this.trigger(gaugeMouseUp, args);
                        if (this.activeAxis && this.activePointer) {
                            this.trigger(dragEnd, {
                                name: dragEnd,
                                axis: this.activeAxis,
                                pointer: this.activePointer,
                                currentValue: this.activePointer.currentValue
                            });
                            if (!args.cancel && isTouch && this.tooltip.enable && tooltip) {
                                if (args.target.id.indexOf('_Pointer_') >= 0) {
                                    tooltip.renderTooltip(args.target);
                                    tooltipInterval = window.setTimeout(function () {
                                        tooltip.ejTooltip.close();
                                    }, 2000);
                                }
                            }
                            this.activeAxis = null;
                            this.activePointer = null;
                        }
                        this.svgObject.setAttribute('cursor', 'auto');
                        return false;
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
                            x: location.x, y: location.y,
                            target: isTouch ? e.target : e.target
                        };
                    }
                }, {
                    key: 'gaugeResize',
                    value: function gaugeResize(e) {
                        var _this27 = this;

                        var args = {
                            gauge: this,
                            previousSize: new Size(this.availableSize.width, this.availableSize.height),
                            name: resized,
                            currentSize: new Size(0, 0)
                        };
                        this.animatePointer = false;
                        if (this.resizeTo) {
                            clearTimeout(this.resizeTo);
                        }
                        if (this.element.classList.contains('e-circulargauge')) {
                            this.resizeTo = window.setTimeout(function () {
                                _this27.createSvg();
                                _this27.calculateBounds();
                                _this27.renderElements();
                                args.currentSize = _this27.availableSize;
                                _this27.trigger(resized, args);
                            }, 500);
                        }
                        return false;
                    }
                }, {
                    key: 'setGaugeStyle',
                    value: function setGaugeStyle(element) {
                        element.style.touchAction = this.enablePointerDrag ? 'none' : 'element';
                        element.style.msTouchAction = this.enablePointerDrag ? 'none' : 'element';
                        element.style.msContentZooming = 'none';
                        element.style.msUserSelect = 'none';
                        element.style.webkitUserSelect = 'none';
                        element.style.position = 'relative';
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
                        this.calculateSvgSize();
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
                        if (this.svgObject) {
                            while (this.svgObject.childNodes.length > 0) {
                                this.svgObject.removeChild(this.svgObject.firstChild);
                            }
                            if (!this.svgObject.hasChildNodes() && this.svgObject.parentNode) {
                                remove(this.svgObject);
                            }
                        }
                    }
                }, {
                    key: 'initPrivateVariable',
                    value: function initPrivateVariable() {
                        this.renderer = new SvgRenderer(this.element.id);
                        this.gaugeAxisLayoutPanel = new AxisLayoutPanel(this);
                        this.animatePointer = true;
                    }
                }, {
                    key: 'calculateSvgSize',
                    value: function calculateSvgSize() {
                        var containerWidth = this.element.offsetWidth;
                        var containerHeight = this.element.offsetHeight;
                        var width = stringToNumber(this.width, containerWidth) || containerWidth || 600;
                        var height = stringToNumber(this.height, containerHeight) || containerHeight || 450;
                        this.availableSize = new Size(width, height);
                    }
                }, {
                    key: 'calculateBounds',
                    value: function calculateBounds() {
                        var padding = 5;
                        var margin = this.margin;
                        // Title Height;
                        var titleHeight = 0;
                        if (this.title) {
                            titleHeight = measureText(this.title, this.titleStyle).height + padding;
                        }
                        var top = margin.top + titleHeight + this.border.width;
                        var left = margin.left + this.border.width;
                        var width = this.availableSize.width - left - margin.right - this.border.width;
                        var height = this.availableSize.height - top - this.border.width - margin.bottom;
                        var radius = Math.min(width, height) / 2;
                        var rect = new Rect(left + width / 2 - radius, top + height / 2 - radius, radius * 2, radius * 2);
                        var centerX = this.centerX !== null ? stringToNumber(this.centerX, this.availableSize.width) : rect.x + rect.width / 2;
                        var centerY = this.centerY !== null ? stringToNumber(this.centerY, this.availableSize.height) : rect.y + rect.height / 2;
                        this.midPoint = new GaugeLocation(centerX, centerY);
                        this.gaugeAxisLayoutPanel.measureAxis(rect);
                    }
                }, {
                    key: 'renderElements',
                    value: function renderElements() {
                        var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                        this.renderBorder();
                        this.renderTitle();
                        this.gaugeAxisLayoutPanel.renderAxes(animate);
                        this.element.appendChild(this.svgObject);
                        this.trigger(loaded, { gauge: this });
                    }
                }, {
                    key: 'renderTitle',
                    value: function renderTitle() {
                        if (this.title) {
                            var size = measureText(this.title, this.titleStyle);
                            var options = new TextOption(this.element.id + '_CircularGaugeTitle', this.availableSize.width / 2, this.margin.top + 3 * (size.height / 4), 'middle', this.title);
                            var element = textElement(options, this.titleStyle, this.titleStyle.color, this.svgObject, '');
                            element.setAttribute('aria-label', this.description || this.title);
                            element.setAttribute('tabindex', this.tabIndex.toString());
                        }
                    }
                }, {
                    key: 'renderBorder',
                    value: function renderBorder() {
                        var borderWidth = this.border.width;
                        if (borderWidth > 0 || this.background !== null && this.background !== 'transparent') {
                            this.svgObject.appendChild(this.renderer.drawRectangle(new RectOption(this.element.id + '_CircularGaugeBorder', this.background, this.border, null, new Rect(borderWidth / 2, borderWidth / 2, this.availableSize.width - borderWidth, this.availableSize.height - borderWidth))));
                        }
                    }
                }, {
                    key: 'setPointerValue',
                    value: function setPointerValue(axisIndex, pointerIndex, value) {
                        var _this28 = this;

                        var axis = this.axes[axisIndex];
                        var pointer = axis.pointers[pointerIndex];
                        var pointerRadius = pointer.currentRadius;
                        var enableAnimation = pointer.animation.enable;
                        value = value < axis.visibleRange.min ? axis.visibleRange.min : value;
                        value = value > axis.visibleRange.max ? axis.visibleRange.max : value;
                        pointer.pathElement.map(function (element) {
                            if (pointer.type === 'RangeBar') {
                                setStyles(element, pointer.color, pointer.border);
                                if (enableAnimation) {
                                    _this28.gaugeAxisLayoutPanel.pointerRenderer.performRangeBarAnimation(element, pointer.currentValue, value, axis, pointer, pointerRadius, pointerRadius - pointer.pointerWidth);
                                } else {
                                    _this28.gaugeAxisLayoutPanel.pointerRenderer.setPointerValue(axis, pointer, value);
                                }
                            } else {
                                if (element.id.indexOf('_Pointer_NeedleCap_') >= 0) {
                                    setStyles(element, pointer.cap.color, pointer.cap.border);
                                } else if (element.id.indexOf('_Pointer_NeedleTail_') >= 0) {
                                    setStyles(element, pointer.needleTail.color, pointer.needleTail.border);
                                } else if (element.id.indexOf('_Pointer_NeedleRect_') >= 0) {
                                    setStyles(element, 'transparent', { color: 'transparent', width: 0 });
                                } else {
                                    setStyles(element, pointer.color, pointer.border);
                                }
                                if (enableAnimation) {
                                    _this28.gaugeAxisLayoutPanel.pointerRenderer.performNeedleAnimation(element, pointer.currentValue, value, axis, pointer, pointerRadius, pointerRadius - pointer.pointerWidth);
                                } else {
                                    _this28.gaugeAxisLayoutPanel.pointerRenderer.setPointerValue(axis, pointer, value);
                                }
                            }
                        });
                        pointer.currentValue = value;
                        pointer.value = value;
                    }
                }, {
                    key: 'setAnnotationValue',
                    value: function setAnnotationValue(axisIndex, annotationIndex, content) {
                        var isElementExist = getElement(this.element.id + '_Annotations_' + axisIndex) !== null;
                        var element = getElement(this.element.id + '_Annotations_' + axisIndex) || createElement('div', {
                            id: this.element.id + '_Annotations_' + axisIndex
                        });
                        var annotation = this.axes[axisIndex].annotations[annotationIndex];
                        if (content !== null) {
                            removeElement(this.element.id + '_Axis_' + axisIndex + '_Annotation_' + annotationIndex);
                            annotation.content = content;
                            this.annotationsModule.createTemplate(element, annotationIndex, axisIndex);
                            if (!isElementExist) {
                                getElement(this.element.id + '_Secondary_Element').appendChild(element);
                            }
                        }
                    }
                }, {
                    key: 'setRangeValue',
                    value: function setRangeValue(axisIndex, rangeIndex, start, end) {
                        var element = getElement(this.element.id + '_Axis_' + axisIndex + '_Range_' + rangeIndex);
                        var axis = this.axes[axisIndex];
                        var range = axis.ranges[rangeIndex];
                        var axisRange = axis.visibleRange;
                        var isClockWise = axis.direction === 'ClockWise';
                        var startValue = Math.min(Math.max(start, axisRange.min), end);
                        var endValue = Math.min(Math.max(start, end), axisRange.max);
                        var startAngle = getAngleFromValue(startValue, axisRange.max, axisRange.min, axis.startAngle, axis.endAngle, isClockWise);
                        var endAngle = getAngleFromValue(endValue, axisRange.max, axisRange.min, axis.startAngle, axis.endAngle, isClockWise);
                        var startWidth = void 0;
                        if (range.startWidth.length > 0) {
                            startWidth = toPixel(range.startWidth, range.currentRadius);
                        } else {
                            startWidth = range.startWidth;
                        }
                        var endWidth = void 0;
                        if (range.endWidth.length > 0) {
                            endWidth = toPixel(range.endWidth, range.currentRadius);
                        } else {
                            endWidth = range.endWidth;
                        }
                        endAngle = isClockWise ? endAngle : [startAngle, startAngle = endAngle][0];
                        endWidth = isClockWise ? endWidth : [startWidth, startWidth = endWidth][0];
                        element.setAttribute('d', getPathArc(this.midPoint, Math.round(startAngle), Math.round(endAngle), range.currentRadius, startWidth, endWidth));
                        setStyles(element, range.color ? range.color : range.rangeColor, {
                            color: range.color ? range.color : range.rangeColor,
                            width: 0
                        });
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.unWireEvents();
                        this.removeSvg();
                        _get(CircularGauge.prototype.__proto__ || Object.getPrototypeOf(CircularGauge.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'requiredModules',
                    value: function requiredModules() {
                        var modules = [];
                        var annotationEnable = false;
                        var axes = this.axes;
                        axes.map(function (axis) {
                            axis.annotations.map(function (annotation) {
                                annotationEnable = annotationEnable || annotation.content !== null;
                            });
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
                        return this.addOnPersist([]);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        // property method calculated
                        var renderer = false;
                        var refreshBounds = false;
                        var refreshWithoutAnimation = false;
                        var _iteratorNormalCompletion7 = true;
                        var _didIteratorError7 = false;
                        var _iteratorError7 = undefined;

                        try {
                            for (var _iterator7 = Object.keys(newProp)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                var prop = _step7.value;

                                switch (prop) {
                                    case 'height':
                                    case 'width':
                                    case 'centerX':
                                    case 'centerY':
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
                                    case 'axes':
                                        refreshWithoutAnimation = true;
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

                        if (!refreshBounds && renderer) {
                            this.removeSvg();
                            this.renderElements();
                        }
                        if (refreshBounds) {
                            this.removeSvg();
                            this.calculateBounds();
                            this.renderElements();
                        }
                        if (refreshWithoutAnimation && !renderer && !refreshBounds) {
                            this.removeSvg();
                            this.calculateBounds();
                            this.renderElements(false);
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'circulargauge';
                    }
                }]);

                return CircularGauge;
            }(Component));

            __decorate([Property(null)], CircularGauge.prototype, "width", void 0);
            __decorate([Property(null)], CircularGauge.prototype, "height", void 0);
            __decorate([Complex({ color: 'transparent', width: 0 }, Border)], CircularGauge.prototype, "border", void 0);
            __decorate([Property('transparent')], CircularGauge.prototype, "background", void 0);
            __decorate([Property('')], CircularGauge.prototype, "title", void 0);
            __decorate([Complex({ size: '15px', color: null }, Font)], CircularGauge.prototype, "titleStyle", void 0);
            __decorate([Complex({}, Margin)], CircularGauge.prototype, "margin", void 0);
            __decorate([Collection([{}], Axis)], CircularGauge.prototype, "axes", void 0);
            __decorate([Complex({}, TooltipSettings)], CircularGauge.prototype, "tooltip", void 0);
            __decorate([Property(false)], CircularGauge.prototype, "enablePointerDrag", void 0);
            __decorate([Property(null)], CircularGauge.prototype, "centerX", void 0);
            __decorate([Property(null)], CircularGauge.prototype, "centerY", void 0);
            __decorate([Property('Material')], CircularGauge.prototype, "theme", void 0);
            __decorate([Property(false)], CircularGauge.prototype, "useGroupingSeparator", void 0);
            __decorate([Property(null)], CircularGauge.prototype, "description", void 0);
            __decorate([Property(1)], CircularGauge.prototype, "tabIndex", void 0);
            __decorate([Event()], CircularGauge.prototype, "loaded", void 0);
            __decorate([Event()], CircularGauge.prototype, "load", void 0);
            __decorate([Event()], CircularGauge.prototype, "animationComplete", void 0);
            __decorate([Event()], CircularGauge.prototype, "axisLabelRender", void 0);
            __decorate([Event()], CircularGauge.prototype, "annotationRender", void 0);
            __decorate([Event()], CircularGauge.prototype, "tooltipRender", void 0);
            __decorate([Event()], CircularGauge.prototype, "dragStart", void 0);
            __decorate([Event()], CircularGauge.prototype, "dragMove", void 0);
            __decorate([Event()], CircularGauge.prototype, "dragEnd", void 0);
            __decorate([Event()], CircularGauge.prototype, "gaugeMouseMove", void 0);
            __decorate([Event()], CircularGauge.prototype, "gaugeMouseLeave", void 0);
            __decorate([Event()], CircularGauge.prototype, "gaugeMouseDown", void 0);
            __decorate([Event()], CircularGauge.prototype, "gaugeMouseUp", void 0);
            __decorate([Event()], CircularGauge.prototype, "resized", void 0);
            _export('CircularGauge', CircularGauge = __decorate([NotifyPropertyChanges], CircularGauge));

            /**
             * Circular Gauge component exported items
             */

            /**
             * Circular Gauge component exported.
             */

            _export('CircularGauge', CircularGauge);

            _export('Annotations', Annotations);

            _export('Line', Line);

            _export('Label', Label);

            _export('Range', Range);

            _export('Tick', Tick);

            _export('Cap', Cap);

            _export('NeedleTail', NeedleTail);

            _export('Animation', Animation$1);

            _export('Annotation', Annotation);

            _export('Pointer', Pointer);

            _export('Axis', Axis);

            _export('Border', Border);

            _export('Font', Font);

            _export('Margin', Margin);

            _export('TooltipSettings', TooltipSettings);

            _export('GaugeTooltip', GaugeTooltip);

            _export('measureText', measureText);

            _export('toPixel', toPixel);

            _export('getFontStyle', getFontStyle);

            _export('setStyles', setStyles);

            _export('measureElementRect', measureElementRect);

            _export('stringToNumber', stringToNumber);

            _export('textElement', textElement);

            _export('appendPath', appendPath);

            _export('calculateSum', calculateSum);

            _export('linear', linear);

            _export('getAngleFromValue', getAngleFromValue);

            _export('getDegree', getDegree);

            _export('getValueFromAngle', getValueFromAngle);

            _export('isCompleteAngle', isCompleteAngle);

            _export('getAngleFromLocation', getAngleFromLocation);

            _export('getLocationFromAngle', getLocationFromAngle);

            _export('getPathArc', getPathArc);

            _export('getRangePath', getRangePath);

            _export('getCompleteArc', getCompleteArc);

            _export('getCirclePath', getCirclePath);

            _export('getCompletePath', getCompletePath);

            _export('getElement', getElement);

            _export('getTemplateFunction', getTemplateFunction);

            _export('removeElement', removeElement);

            _export('getPointer', getPointer);

            _export('getLabelFormat', getLabelFormat);

            _export('calculateShapes', calculateShapes);

            _export('getRangeColor', getRangeColor);

            _export('CustomizeOption', CustomizeOption);

            _export('PathOption', PathOption);

            _export('RectOption', RectOption);

            _export('Size', Size);

            _export('GaugeLocation', GaugeLocation);

            _export('Rect', Rect);

            _export('TextOption', TextOption);

            _export('VisibleLabels', VisibleLabels);
        }
    };
});

//# sourceMappingURL=ej2-circulargauge.es2015-compiled.js.map