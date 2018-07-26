'use strict';

System.register(['@syncfusion/ej2-base', '@syncfusion/ej2-data', '@syncfusion/ej2-pdf-export', '@syncfusion/ej2-popups'], function (_export2, _context) {
    "use strict";

    var Ajax, Animation, Browser, ChildProperty, Collection, Complex, Component, Event, EventHandler, Internationalization, L10n, NotifyPropertyChanges, Property, SvgRenderer, compile, createElement, extend, isNullOrUndefined, merge, _print, remove, setStyleAttribute, DataManager, Query, PdfBitmap, PdfDocument, PdfPageOrientation, Tooltip, _get, _createClass, _typeof, Size, Point, MinMax, GeoLocation, TextOption, PathOption, RectOption, CircleOption, PolygonOption, PolylineOption, LineOption, Line, MapLocation, Rect, PatternOptions, MapAjax, Theme, FabricTheme, BootstrapTheme, HighContrastTheme, __decorate$1, Annotation, Arrow, Font, Border, TooltipSettings, Margin, ColorMappingSettings, SelectionSettings, HighlightSettings, NavigationLineSettings, BubbleSettings, CommonTitleSettings, SubTitleSettings, TitleSettings, ZoomSettings, LegendSettings, DataLabelSettings, ShapeSettings, MarkerSettings, LayerSettings, Tile, MapsAreaSettings, load, loaded, click, rightClick, doubleClick, resize, tooltipRender, shapeSelected, shapeHighlight, mousemove, mouseup, mousedown, layerRendering, shapeRendering, markerRendering, _markerClick, markerMouseMove, dataLabelRendering, bubbleRendering, _bubbleClick, bubbleMouseMove, animationComplete, legendRendering, annotationRendering, itemSelection, itemHighlight, beforePrint, BingMap, ColorMapping, LayerPanel, Annotations, ExportUtils, __decorate, Maps, Bubble, Marker, DataLabel, NavigationLine, Legend, Highlight, Selection, MapsTooltip, Zoom;

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
     * To find number from string
     * @private
     */
    function stringToNumber(value, containerSize) {
        if (value !== null && value !== undefined) {
            return value.indexOf('%') !== -1 ? containerSize / 100 * parseInt(value, 10) : parseInt(value, 10);
        }
        return null;
    }
    /**
     * Method to calculate the width and height of the maps
     */
    function calculateSize(maps) {
        var containerWidth = maps.element.clientWidth;
        var containerHeight = maps.element.clientHeight;
        maps.availableSize = new Size(stringToNumber(maps.width, containerWidth) || containerWidth || 600, stringToNumber(maps.height, containerHeight) || containerHeight || (maps.isDevice ? Math.min(window.innerWidth, window.innerHeight) : 450));
    }
    /**
     * Method to create svg for maps.
     */
    function createSvg(maps) {
        maps.renderer = new SvgRenderer(maps.element.id);
        calculateSize(maps);
        maps.svgObject = maps.renderer.createSvg({
            id: maps.element.id + '_svg',
            width: maps.availableSize.width,
            height: maps.availableSize.height
        });
    }
    /**
     * Method to convert degrees to radians
     */
    function degreesToRadians(deg) {
        return deg * (Math.PI / 180);
    }
    /**
     * Convert radians to degrees method
     */
    function radiansToDegrees(radian) {
        return radian * (180 / Math.PI);
    }
    /**
     * Method for converting from latitude and longitude values to points
     */
    function convertGeoToPoint(latitude, longitude, factor, layer, mapModel) {
        var mapSize = new Size(mapModel.mapAreaRect.width, mapModel.mapAreaRect.height);
        var x = void 0;
        var y = void 0;
        var value = void 0;
        var lat = void 0;
        var lng = void 0;
        var temp = void 0;
        var longitudeMinMax = mapModel.baseMapBounds.longitude;
        var latitudeMinMax = mapModel.baseMapBounds.latitude;
        var latRadian = degreesToRadians(latitude);
        var lngRadian = degreesToRadians(longitude);
        var type = mapModel.projectionType;
        var size = mapModel.isTileMap ? Math.pow(2, 1) * 256 : isNullOrUndefined(factor) ? Math.min(mapSize.width, mapSize.height) : Math.min(mapSize.width, mapSize.height) * factor;
        if (layer.geometryType === 'Normal') {
            x = isNullOrUndefined(factor) ? longitude : Math.abs((longitude - longitudeMinMax.min) * factor);
            y = isNullOrUndefined(factor) ? latitude : Math.abs((latitudeMinMax.max - latitude) * factor);
        } else if (layer.geometryType === 'Geographic') {
            switch (type) {
                case 'Mercator':
                    var pixelOrigin = new Point(size / 2, size / 2);
                    x = pixelOrigin.x + longitude * (size / 360);
                    var sinY = calculateBound(Math.sin(degreesToRadians(latitude)), -0.9999, 0.9999);
                    y = pixelOrigin.y + 0.5 * Math.log((1 + sinY) / (1 - sinY)) * -(size / (2 * Math.PI));
                    break;
                case 'Winkel3':
                    value = aitoff(lngRadian, latRadian);
                    lng = (value.x + lngRadian / (Math.PI / 2)) / 2;
                    lat = (value.y + latRadian) / 2;
                    break;
                case 'Miller':
                    lng = lngRadian;
                    lat = 1.25 * Math.log(Math.tan(Math.PI / 4 + .4 * latRadian));
                    break;
                case 'Eckert3':
                    temp = Math.sqrt(Math.PI * (4 + Math.PI));
                    lng = 2 / temp * lngRadian * (1 + Math.sqrt(1 - 4 * latRadian * latRadian / (Math.PI * Math.PI)));
                    lat = 4 / temp * latRadian;
                    break;
                case 'AitOff':
                    value = aitoff(lngRadian, latRadian);
                    lng = value.x;
                    lat = value.y;
                    break;
                case 'Eckert5':
                    lng = lngRadian * (1 + Math.cos(latRadian)) / Math.sqrt(2 + Math.PI);
                    lat = 2 * latRadian / Math.sqrt(2 + Math.PI);
                    break;
                case 'Equirectangular':
                    lng = lngRadian;
                    lat = latRadian;
                    break;
                case 'Eckert6':
                    var epsilon = 1e-6;
                    temp = (1 + Math.PI / 2) * Math.sin(latRadian);
                    var delta = Infinity;
                    for (var i = 0; i < 10 && Math.abs(delta) > epsilon; i++) {
                        delta = (latRadian + Math.sin(latRadian) - temp) / (1 + Math.cos(latRadian));
                        latRadian = latRadian - delta;
                    }
                    temp = Math.sqrt(2 + Math.PI);
                    lng = lngRadian * (1 + Math.cos(latRadian)) / temp;
                    lat = 2 * latRadian / temp;
                    break;
            }
            x = type === 'Mercator' ? x : roundTo(xToCoordinate(mapModel, radiansToDegrees(lng)), 3);
            y = type === 'Mercator' ? y : -roundTo(yToCoordinate(mapModel, radiansToDegrees(lat)), 3);
        }
        return new Point(x, y);
    }
    /**
     * Converting tile latitude and longitude to point
     */
    function convertTileLatLongToPoint(center, zoomLevel, tileTranslatePoint, isMapCoordinates) {
        var size = Math.pow(2, zoomLevel) * 256;
        var x = (center.x + 180) / 360;
        var sinLatitude = Math.sin(center.y * Math.PI / 180);
        var y = 0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
        var pixelX = center.x;
        var pixelY = center.y;
        if (isMapCoordinates) {
            pixelX = x * size + 0.5 + tileTranslatePoint.x;
            pixelY = y * size + 0.5 + tileTranslatePoint.y;
        }
        return { x: pixelX, y: pixelY };
    }
    /**
     * Method for calculate x point
     */
    function xToCoordinate(mapObject, val) {
        var longitudeMinMax = mapObject.baseMapBounds.longitude;
        var totalSize = isNullOrUndefined(mapObject.baseSize) ? mapObject.mapAreaRect.width : mapObject.mapAreaRect.width + Math.abs(mapObject.baseSize.width - mapObject.mapAreaRect.width) / 2;
        return Math.round(totalSize * (val - longitudeMinMax.min) / (longitudeMinMax.max - longitudeMinMax.min) * 100) / 100;
    }
    /**
     * Method for calculate y point
     */
    function yToCoordinate(mapObject, val) {
        var latitudeMinMax = mapObject.baseMapBounds.latitude;
        return Math.round(mapObject.mapAreaRect.height * (val - latitudeMinMax.min) / (latitudeMinMax.max - latitudeMinMax.min) * 100) / 100;
    }
    /**
     * Method for calculate aitoff projection
     */
    function aitoff(x, y) {
        var cosy = Math.cos(y);
        var sincia = sinci(acos(cosy * Math.cos(x /= 2)));
        return new Point(2 * cosy * Math.sin(x) * sincia, Math.sin(y) * sincia);
    }
    /**
     * Method to round the number
     */
    function roundTo(a, b) {
        var c = Math.pow(10, b);
        return Math.round(a * c) / c;
    }
    function sinci(x) {
        return x / Math.sin(x);
    }
    function acos(a) {
        return Math.acos(a);
    }
    /**
     * Method to calculate bound
     */
    function calculateBound(value, min, max) {
        if (!isNullOrUndefined(min)) {
            value = Math.max(value, min);
        }
        if (!isNullOrUndefined(max)) {
            value = Math.min(value, max);
        }
        return value;
    }
    /**
     * Map internal class for point
     */

    /**
     * Function to measure the height and width of the text.
     * @param  {string} text
     * @param  {FontModel} font
     * @param  {string} id
     * @returns no
     * @private
     */
    function measureText(text, font) {
        var htmlObject = document.getElementById('mapsmeasuretext');
        if (htmlObject === null) {
            htmlObject = createElement('text', { id: 'mapsmeasuretext' });
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
        // For bootstrap line height issue
        htmlObject.style.lineHeight = 'normal';
        return new Size(htmlObject.clientWidth, htmlObject.clientHeight);
    }
    /**
     * Internal use of text options
     * @private
     */

    /**
     * Internal rendering of text
     * @private
     */
    function renderTextElement(options, font, color, parent) {
        var isMinus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        var renderOptions = {
            'id': options.id,
            'x': options.x,
            'y': options.y,
            'fill': color,
            'font-size': font.size,
            'font-style': font.fontStyle,
            'font-family': font.fontFamily,
            'font-weight': font.fontWeight,
            'text-anchor': options.anchor,
            'transform': options.transform,
            'opacity': font.opacity,
            'dominant-baseline': options.baseLine
        };
        var text = typeof options.text === 'string' ? options.text : isMinus ? options.text[options.text.length - 1] : options.text[0];
        var tspanElement = void 0;
        var renderer = new SvgRenderer('');
        var height = void 0;
        var htmlObject = renderer.createText(renderOptions, text);
        htmlObject.style['user-select'] = 'none';
        htmlObject.style['-moz-user-select'] = 'none';
        htmlObject.style['-webkit-touch-callout'] = 'none';
        htmlObject.style['-webkit-user-select'] = 'none';
        htmlObject.style['-khtml-user-select'] = 'none';
        htmlObject.style['-ms-user-select'] = 'none';
        htmlObject.style['-o-user-select'] = 'none';
        if (typeof options.text !== 'string' && options.text.length > 1) {
            for (var i = 1, len = options.text.length; i < len; i++) {
                height = measureText(options.text[i], font).height;
                tspanElement = renderer.createTSpan({
                    'x': options.x, 'id': options.id,
                    'y': options.y + (isMinus ? -(i * height) : i * height)
                }, isMinus ? options.text[options.text.length - (i + 1)] : options.text[i]);
                htmlObject.appendChild(tspanElement);
            }
        }
        parent.appendChild(htmlObject);
        return htmlObject;
    }
    /**
     * @private
     */
    function convertElement(element, markerId, data, index, mapObj) {
        var childElement = createElement('div', {
            id: markerId,
            styles: 'position: absolute;pointer-events: auto;'
        });
        while (element.length > 0) {
            childElement.appendChild(element[0]);
        }
        var templateHtml = childElement.innerHTML;
        var properties = Object.keys(data);
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].toLowerCase() !== 'latitude' && properties[i].toLowerCase() !== 'longitude') {
                templateHtml = templateHtml.replace(new RegExp('{{:' + properties[i] + '}}', 'g'), data[properties[i].toString()]);
            }
        }
        childElement.innerHTML = templateHtml;
        return childElement;
    }
    function convertElementFromLabel(element, labelId, data, index, mapObj) {
        var labelEle = isNullOrUndefined(element.childElementCount) ? element[0] : element;
        var templateHtml = labelEle.outerHTML;
        var properties = Object.keys(data);
        for (var i = 0; i < properties.length; i++) {
            templateHtml = templateHtml.replace(new RegExp('{{:' + properties[i] + '}}', 'g'), data[properties[i].toString()]);
        }
        return createElement('div', {
            id: labelId,
            innerHTML: templateHtml,
            styles: 'position: absolute'
        });
    }
    /**
     * Internal use of append shape element
     * @private
     */
    function appendShape(shape, element) {
        if (element) {
            element.appendChild(shape);
        }
        return shape;
    }
    /**
     * Internal rendering of Circle
     * @private
     */
    function drawCircle(maps, options, element) {
        return appendShape(maps.renderer.drawCircle(options), element);
    }
    /**
     * Internal rendering of Rectangle
     * @private
     */
    function drawRectangle(maps, options, element) {
        return appendShape(maps.renderer.drawRectangle(options), element);
    }
    /**
     * Internal rendering of Path
     * @private
     */
    function drawPath(maps, options, element) {
        return appendShape(maps.renderer.drawPath(options), element);
    }
    /**
     * Internal rendering of Polygon
     * @private
     */
    function drawPolygon(maps, options, element) {
        return appendShape(maps.renderer.drawPolygon(options), element);
    }
    /**
     * Internal rendering of Polyline
     * @private
     */
    function drawPolyline(maps, options, element) {
        return appendShape(maps.renderer.drawPolyline(options), element);
    }
    /**
     * Internal rendering of Line
     * @private
     */
    function drawLine(maps, options, element) {
        return appendShape(maps.renderer.drawLine(options), element);
    }
    /**
     * @private
     * Calculate marker shapes
     */
    function calculateShapes(maps, shape, options, size, location, markerEle) {
        var tempGroup = void 0;
        switch (shape) {
            case 'Balloon':
                tempGroup = drawBalloon(maps, options, size, location, markerEle);
                break;
            case 'Cross':
                options.d = 'M ' + location.x + ' ' + (location.y - size.height / 2) + ' L ' + location.x + ' ' + (location.y + size.height / 2) + ' M ' + (location.x - size.width / 2) + ' ' + location.y + ' L ' + (location.x + size.width / 2) + ' ' + location.y;
                break;
            case 'Diamond':
                options.d = 'M ' + location.x + ' ' + (location.y - size.height / 2) + ' L ' + (location.x + size.width / 2) + ' ' + location.y + ' L ' + location.x + ' ' + (location.y + size.height / 2) + ' L ' + (location.x - size.width / 2) + ' ' + location.y + ' Z';
                break;
            case 'Star':
                options.d = 'M ' + (location.x + size.width / 3) + ' ' + (location.y - size.height / 2) + ' L ' + (location.x - size.width / 2) + ' ' + (location.y + size.height / 6) + ' L ' + (location.x + size.width / 2) + ' ' + (location.y + size.height / 6) + ' L ' + (location.x - size.width / 3) + ' ' + (location.y - size.height / 2) + ' L ' + location.x + ' ' + (location.y + size.height / 2) + ' L ' + (location.x + size.width / 3) + ' ' + (location.y - size.height / 2) + ' Z';
                break;
            case 'Triangle':
                options.d = 'M ' + location.x + ' ' + (location.y - size.height / 2) + ' L ' + (location.x + size.width / 2) + ' ' + (location.y + size.height / 2) + ' L ' + (location.x - size.width / 2) + ' ' + (location.y + size.height / 2) + ' Z';
                break;
            case 'HorizontalLine':
                options.d = ' M ' + (location.x - size.width / 2) + ' ' + location.y + ' L ' + (location.x + size.width / 2) + ' ' + location.y;
                break;
            case 'VerticalLine':
                options.d = 'M ' + location.x + ' ' + (location.y - size.height / 2) + ' L ' + location.x + ' ' + (location.y + size.height / 2);
                break;
        }
        return shape === 'Balloon' ? tempGroup : maps.renderer.drawPath(options);
    }
    /**
     * Internal rendering of Diamond
     * @private
     */
    function drawDiamond(maps, options, size, location, element) {
        options.d = 'M ' + location.x + ' ' + (location.y - size.height / 2) + ' L ' + (location.x + size.width / 2) + ' ' + location.y + ' L ' + location.x + ' ' + (location.y + size.height / 2) + ' L ' + (location.x - size.width / 2) + ' ' + location.y + ' Z';
        return appendShape(maps.renderer.drawPath(options), element);
    }
    /**
     * Internal rendering of Triangle
     * @private
     */
    function drawTriangle(maps, options, size, location, element) {
        options.d = 'M ' + location.x + ' ' + (location.y - size.height / 2) + ' L ' + (location.x + size.width / 2) + ' ' + (location.y + size.height / 2) + ' L ' + (location.x - size.width / 2) + ' ' + (location.y + size.height / 2) + ' Z';
        return appendShape(maps.renderer.drawPath(options), element);
    }
    /**
     * Internal rendering of Cross
     * @private
     */
    function drawCross(maps, options, size, location, element) {
        options.d = 'M ' + location.x + ' ' + (location.y - size.height / 2) + ' L ' + location.x + ' ' + (location.y + size.height / 2) + ' M ' + (location.x - size.width / 2) + ' ' + location.y + ' L ' + (location.x + size.width / 2) + ' ' + location.y;
        return appendShape(maps.renderer.drawPath(options), element);
    }
    /**
     * Internal rendering of HorizontalLine
     * @private
     */
    function drawHorizontalLine(maps, options, size, location, element) {
        options.d = ' M ' + (location.x - size.width / 2) + ' ' + location.y + ' L ' + (location.x + size.width / 2) + ' ' + location.y;
        return appendShape(maps.renderer.drawPath(options), element);
    }
    /**
     * Internal rendering of VerticalLine
     * @private
     */
    function drawVerticalLine(maps, options, size, location, element) {
        options.d = 'M ' + location.x + ' ' + (location.y - size.height / 2) + ' L ' + location.x + ' ' + (location.y + size.height / 2);
        return appendShape(maps.renderer.drawPath(options), element);
    }
    /**
     * Internal rendering of Star
     * @private
     */
    function drawStar(maps, options, size, location, element) {
        options.d = 'M ' + (location.x + size.width / 3) + ' ' + (location.y - size.height / 2) + ' L ' + (location.x - size.width / 2) + ' ' + (location.y + size.height / 6) + ' L ' + (location.x + size.width / 2) + ' ' + (location.y + size.height / 6) + ' L ' + (location.x - size.width / 3) + ' ' + (location.y - size.height / 2) + ' L ' + location.x + ' ' + (location.y + size.height / 2) + ' L ' + (location.x + size.width / 3) + ' ' + (location.y - size.height / 2) + ' Z';
        return appendShape(maps.renderer.drawPath(options), element);
    }
    /**
     * Internal rendering of Balloon
     * @private
     */
    function drawBalloon(maps, options, size, location, element) {
        var width = size.width;
        var height = size.height;
        location.x -= width / 2;
        location.y -= height;
        options.d = 'M15,0C8.8,0,3.8,5,3.8,11.2C3.8,17.5,9.4,24.4,15,30c5.6-5.6,11.2-12.5,11.2-18.8C26.2,5,21.2,0,15,0z M15,16' + 'c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S17.8,16,15,16z';
        var balloon = maps.renderer.drawPath(options);
        var x = size.width / 22.5;
        var y = size.height / 30;
        balloon.setAttribute('transform', 'translate(' + location.x + ', ' + location.y + ') scale(' + x + ', ' + y + ')');
        var g = maps.renderer.createGroup({ id: options.id });
        appendShape(balloon, g);
        return appendShape(g, element);
    }
    /**
     * Internal rendering of Pattern
     * @private
     */
    function drawPattern(maps, options, elements, element) {
        var pattern = maps.renderer.createPattern(options, 'pattern');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var ele = _step.value;

                appendShape(ele, pattern);
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

        return appendShape(pattern, element);
    }
    /**
     * Method to get specific field and vaues from data.
     * @private
     */
    // tslint:disable:no-any
    function getFieldData(dataSource, fields) {
        var newData = [];
        var data = void 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = dataSource[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var temp = _step2.value;

                data = {};
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = fields[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var field = _step3.value;

                        if (temp[field]) {
                            data[field] = temp[field];
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

                newData.push(data);
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

        return newData;
    }
    /**
     * To find the index of dataSource from shape properties
     */
    // tslint:disable:no-string-literal
    function checkShapeDataFields(dataSource, properties, dataPath, propertyPath) {
        if (!isNullOrUndefined(properties)) {
            for (var i = 0; i < dataSource.length; i++) {
                if (dataSource[i][dataPath] === properties[propertyPath]) {
                    return i;
                }
            }
        }
        return null;
    }
    function filter(points, start, end) {
        var pointObject = [];
        for (var i = 0; i < points.length; i++) {
            var point = points[i];
            if (start <= point.y && end >= point.y) {
                pointObject.push(point);
            }
        }
        return pointObject;
    }
    /**
     * To find the midpoint of the polygon from points
     */
    function findMidPointOfPolygon(points) {
        if (!points.length) {
            return null;
        }
        var min = 0;
        var max = points.length;
        var startX = void 0;
        var startY = void 0;
        var startX1 = void 0;
        var startY1 = void 0;
        var sum = 0;
        var xSum = 0;
        var ySum = 0;
        for (var i = min; i <= max - 1; i++) {
            startX = points[i].x;
            startY = points[i].y;
            if (i === max - 1) {
                startX1 = points[0].x;
                startY1 = points[0].y;
            } else {
                startX1 = points[i + 1].x;
                startY1 = points[i + 1].y;
            }
            sum = sum + Math.abs(startX * startY1 - startX1 * startY);
            xSum = xSum + Math.abs((startX + startX1) * (startX * startY1 - startX1 * startY));
            ySum = ySum + Math.abs((startY + startY1) * (startX * startY1 - startX1 * startY));
        }
        sum = 0.5 * sum;
        xSum = 1 / (4 * sum) * xSum;
        ySum = 1 / (4 * sum) * ySum;
        /* Code for finding nearest points in polygon related to midPoint*/
        var rightMinPoint = { x: 0, y: 0 };
        var rightMaxPoint = { x: 0, y: 0 };
        var leftMinPoint = { x: 0, y: 0 };
        var leftMaxPoint = { x: 0, y: 0 };
        var bottomMinPoint = { x: 0, y: 0 };
        var bottomMaxPoint = { x: 0, y: 0 };
        var topMinPoint = { x: 0, y: 0 };
        var topMaxPoint = { x: 0, y: 0 };
        var height = 0;
        for (var _i = min; _i <= max - 1; _i++) {
            var point = points[_i];
            if (point.y > ySum) {
                if (point.x < xSum && xSum - point.x < xSum - bottomMinPoint.x) {
                    bottomMinPoint = { x: point.x, y: point.y };
                } else if (point.x > xSum && (bottomMaxPoint.x === 0 || point.x - xSum < bottomMaxPoint.x - xSum)) {
                    bottomMaxPoint = { x: point.x, y: point.y };
                }
            } else {
                if (point.x < xSum && xSum - point.x < xSum - topMinPoint.x) {
                    topMinPoint = { x: point.x, y: point.y };
                } else if (point.x > xSum && (topMaxPoint.x === 0 || point.x - xSum < topMaxPoint.x - xSum)) {
                    topMaxPoint = { x: point.x, y: point.y };
                }
            }
            height = bottomMaxPoint.y - topMaxPoint.y + (bottomMaxPoint.y - topMaxPoint.y) / 4;
            if (point.x > xSum) {
                if (point.y < ySum && ySum - point.y < ySum - rightMinPoint.y) {
                    rightMinPoint = { x: point.x, y: point.y };
                } else if (point.y > ySum && (rightMaxPoint.y === 0 || point.y - ySum < rightMaxPoint.y - ySum)) {
                    rightMaxPoint = { x: point.x, y: point.y };
                }
            } else {
                if (point.y < ySum && ySum - point.y < ySum - leftMinPoint.y) {
                    leftMinPoint = { x: point.x, y: point.y };
                } else if (point.y > ySum && (leftMaxPoint.y === 0 || point.y - ySum < leftMaxPoint.y - ySum)) {
                    leftMaxPoint = { x: point.x, y: point.y };
                }
            }
        }
        return {
            x: xSum, y: ySum, rightMin: rightMinPoint, rightMax: rightMaxPoint,
            leftMin: leftMinPoint, leftMax: leftMaxPoint, points: points, topMax: topMaxPoint, topMin: topMinPoint,
            bottomMax: bottomMaxPoint, bottomMin: bottomMinPoint, height: height
        };
    }
    /**
     * @private
     * Check custom path
     */
    /* tslint:disable:no-string-literal */
    function isCustomPath(layerData) {
        var customPath = false;
        if (Object.prototype.toString.call(layerData) === '[object Array]') {
            layerData.forEach(function (layer, index) {
                if (!isNullOrUndefined(layer['geometry']) && layer['geometry']['type'] === 'Path') {
                    customPath = true;
                }
            });
        }
        return customPath;
    }
    /**
     * @private
     * Trim the title text
     */
    function textTrim(maxWidth, text, font) {
        var label = text;
        var size = measureText(text, font).width;
        if (size > maxWidth) {
            var textLength = text.length;
            for (var i = textLength - 1; i >= 0; --i) {
                label = text.substring(0, i) + '...';
                size = measureText(label, font).width;
                if (size <= maxWidth || label.length < 4) {
                    if (label.length < 4) {
                        label = ' ';
                    }
                    return label;
                }
            }
        }
        return label;
    }
    /**
     * Method to calculate x position of title
     */
    function findPosition(location, alignment, textSize, type) {
        var x = void 0;
        var y = void 0;
        switch (alignment) {
            case 'Near':
                x = location.x;
                break;
            case 'Center':
                x = type === 'title' ? location.width / 2 - textSize.width / 2 : location.x + location.width / 2 - textSize.width / 2;
                break;
            case 'Far':
                x = type === 'title' ? location.width - location.y - textSize.width : location.x + location.width - textSize.width;
                break;
        }
        y = type === 'title' ? location.y + textSize.height / 2 : location.y + location.height / 2 + textSize.height / 2;
        return new Point(x, y);
    }
    /**
     * To remove element by id
     */
    function removeElement(id) {
        var element = document.getElementById(id);
        return element ? remove(element) : null;
    }
    /**
     * @private
     */
    function getTranslate(mapObject, layer, animate) {
        var zoomFactor = animate ? 1 : mapObject.zoomSettings.zoomFactor;
        var min = mapObject.baseMapRectBounds['min'];
        var max = mapObject.baseMapRectBounds['max'];
        var size = mapObject.mapAreaRect;
        var availSize = mapObject.availableSize;
        var x = void 0;
        var y = void 0;
        var mapWidth = Math.abs(max['x'] - min['x']);
        var mapHeight = Math.abs(min['y'] - max['y']);
        var factor = animate ? 1 : mapObject.zoomSettings.zoomFactor;
        var scaleFactor = void 0;
        var center = mapObject.centerPosition;
        if (!isNullOrUndefined(center.longitude) && !isNullOrUndefined(center.latitude)) {
            var leftPosition = (mapWidth + Math.abs(mapObject.mapAreaRect.width - mapWidth)) / 2 / factor;
            var topPosition = (mapHeight + Math.abs(mapObject.mapAreaRect.height - mapHeight)) / 2 / factor;
            var point = convertGeoToPoint(center.latitude, center.longitude, mapObject.mapLayerPanel.calculateFactor(layer), layer, mapObject);
            x = -point.x + leftPosition;
            y = -point.y + topPosition;
            scaleFactor = zoomFactor;
        } else {
            scaleFactor = parseFloat(Math.min(size.width / mapWidth, size.height / mapHeight).toFixed(2));
            mapWidth *= scaleFactor;
            mapHeight *= scaleFactor;
            x = size.x + (-min['x'] + (size.width / 2 - mapWidth / 2));
            y = size.y + (-min['y'] + (size.height / 2 - mapHeight / 2));
        }
        return { scale: scaleFactor, location: new Point(x, y) };
    }
    /**
     * To get the html element by specified id
     */
    function getElementByID(id) {
        return document.getElementById(id);
    }
    /**
     * To apply internalization
     */
    function Internalize(maps, value) {
        maps.formatFunction = maps.intl.getNumberFormat({ format: maps.format, useGrouping: maps.useGroupingSeparator });
        return maps.formatFunction(value);
    }
    /**
     * Function     to compile the template function for maps.
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
     * Function to get element from id.
     * @returns Element
     * @private
     */
    function getElement(id) {
        return document.getElementById(id);
    }
    /**
     * Function to get shape data using target id
     */
    function getShapeData(targetId, map) {
        var layerIndex = parseInt(targetId.split('_LayerIndex_')[1].split('_')[0], 10);
        var shapeIndex = parseInt(targetId.split('_ShapeIndex_')[1].split('_')[0], 10);
        var layer = map.layers[layerIndex];
        var shapeData = layer.layerData[shapeIndex]['property'];
        var data = void 0;
        if (layer.dataSource) {
            data = layer.dataSource[checkShapeDataFields(layer.dataSource, shapeData, layer.shapeDataPath, layer.shapePropertyPath)];
        }
        return { shapeData: shapeData, data: data };
    }
    /**
     * Function to trigger shapeSelected event
     * @private
     */
    function triggerShapeEvent(targetId, selection, maps, eventName) {
        var shape = getShapeData(targetId, maps);
        var eventArgs = {
            cancel: false,
            name: eventName,
            fill: selection.fill,
            opacity: selection.opacity,
            border: selection.border,
            shapeData: shape.shapeData,
            data: shape.data,
            target: targetId
        };
        maps.trigger(eventName, eventArgs);
        return eventArgs;
    }
    /**
     * Function to get elements using class name
     */
    function getElementsByClassName(className) {
        return document.getElementsByClassName(className);
    }
    /**
     * Function to get elements using querySelectorAll
     */
    // export function querySelectorAll(args: string, element: Element): NodeListOf<Element> {
    //     return element.querySelectorAll('.' + args);
    // }
    /**
     * Function to get elements using querySelector
     */
    function querySelector(args, elementSelector) {
        var targetEle = null;
        if (document.getElementById(elementSelector)) {
            targetEle = document.getElementById(elementSelector).querySelector('#' + args);
        }
        return targetEle;
    }
    /**
     * Function to get the element for selection and highlight using public method
     */
    function getTargetElement(layerIndex, name, enable, map) {
        var targetId = void 0;
        var targetEle = void 0;
        var shapeData = map.layers[layerIndex].shapeData['features'];
        for (var i = 0; i < shapeData.length; i++) {
            if (shapeData[i]['properties'].name === name) {
                targetId = map.element.id + '_' + 'LayerIndex_' + layerIndex + '_ShapeIndex_' + i + '_dataIndex_undefined';
                break;
            }
        }
        targetEle = getElement(targetId);
        return targetEle;
    }
    /**
     * Function to create style element for highlight and selection
     */
    function createStyle(id, className, eventArgs) {
        return createElement('style', {
            id: id, innerHTML: '.' + className + '{fill:' + eventArgs.fill + ';' + 'opacity:' + eventArgs.opacity.toString() + ';' + '}'
        });
    }
    /**
     * Function to customize the style for highlight and selection
     */
    function customizeStyle(id, className, eventArgs) {
        var styleEle = getElement(id);
        styleEle.innerHTML = '.' + className + '{fill:' + eventArgs.fill + ';' + 'opacity:' + eventArgs.opacity.toString() + ';' + 'stroke-width:' + eventArgs.border.width.toString() + 'stroke-color:' + eventArgs.border.color + '}';
    }
    /**
     * Function to remove class from element
     */
    function removeClass(element) {
        element.removeAttribute('class');
    }
    /**
     * Animation Effect Calculation End
     * @private
     */
    function elementAnimate(element, delay, duration, point, maps, ele) {
        var radius = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

        var centerX = point.x;
        var centerY = point.y;
        var height = 0;
        var transform = element.getAttribute('transform') || '';
        new Animation({}).animate(element, {
            duration: duration,
            delay: delay,
            progress: function progress(args) {
                if (args.timeStamp > args.delay) {
                    height = (args.timeStamp - args.delay) / args.duration;
                    element.setAttribute('transform', 'translate( ' + (centerX - radius * height) + ' ' + (centerY - radius * height) + ' ) scale(' + height + ')');
                }
            },
            end: function end(model) {
                element.setAttribute('transform', transform);
                if (!ele) {
                    return;
                }
                var event = {
                    cancel: false, name: animationComplete, element: ele, maps: maps
                };
                maps.trigger(animationComplete, event);
            }
        });
    }
    function timeout(id) {
        removeElement(id);
    }
    function showTooltip(text, size, x, y, areaWidth, areaHeight, id, element, isTouch) {
        var tooltip = document.getElementById(id);
        var width = measureText(text, {
            fontFamily: 'Segoe UI', size: '8px',
            fontStyle: 'Normal', fontWeight: 'Regular'
        }).width;
        var str = text.split(' ');
        var demo = str[0].length;
        for (var i = 1; i < str.length; i++) {
            if (demo < str[i].length) {
                demo = str[i].length;
            }
        }
        if (!tooltip) {
            tooltip = createElement('div', {
                id: id,
                styles: 'background-color: rgb(255, 255, 255) !important; color:black !important; ' + 'position:absolute;border:1px solid rgb(0, 0, 0); padding-left:5px;' + 'font-size:12px; font-family: "Segoe UI"; text-align:center'
            });
        }
        if (x < areaWidth - width) {
            x = x;
        } else if (x > areaWidth - width && x < areaWidth - demo * 8) {
            width = areaWidth - x;
        } else if (x >= areaWidth - demo * 8) {
            if (x > width) {
                x = x - width;
            } else {
                width = x;
                x = 0;
            }
        }
        var size1 = size.split('px');
        wordWrap(tooltip, text, x, y, size1, width, areaWidth, element);
        var height = tooltip.clientHeight;
        if (height + parseInt(size1[0], 10) * 2 > areaHeight) {
            width = x;
            x = 0;
        }
        wordWrap(tooltip, text, x, y, size1, width, areaWidth, element);
        if (isTouch) {
            setTimeout(timeout, 5000, id);
        }
    }
    function wordWrap(tooltip, text, x, y, size1, width, areaWidth, element) {
        tooltip.innerHTML = text;
        tooltip.style.top = (y + parseInt(size1[0], 10)).toString() + 'px';
        tooltip.style.left = x.toString() + 'px';
        tooltip.style.width = width.toString() + 'px';
        tooltip.style.maxWidth = areaWidth.toString() + 'px';
        tooltip.style.wordWrap = 'break-word';
        element.appendChild(tooltip);
    }
    // /**
    //  * 
    //  * @param touchList 
    //  * @param e 
    //  * @param touches 
    //  */
    // export function addTouchPointer(touchList: ITouches[], e: PointerEvent, touches: TouchList): ITouches[] {
    //     if (touches) {
    //         touchList = [];
    //         for (let i: number = 0, length: number = touches.length; i < length; i++) {
    //             touchList.push({ pageX: touches[i].clientX, pageY: touches[i].clientY, pointerId: null });
    //         }
    //     } else {
    //         touchList = touchList ? touchList : [];
    //         if (touchList.length === 0) {
    //             touchList.push({ pageX: e.clientX, pageY: e.clientY, pointerId: e.pointerId });
    //         } else {
    //             for (let i: number = 0, length: number = touchList.length; i < length; i++) {
    //                 if (touchList[i].pointerId === e.pointerId) {
    //                     touchList[i] = { pageX: e.clientX, pageY: e.clientY, pointerId: e.pointerId };
    //                 } else {
    //                     touchList.push({ pageX: e.clientX, pageY: e.clientY, pointerId: e.pointerId });
    //                 }
    //             }
    //         }
    //     }
    //     return touchList;
    // }
    /** @private */
    function createTooltip(id, text, top, left, fontSize) {
        var tooltip = getElement(id);
        var style = 'top:' + top.toString() + 'px;' + 'left:' + left.toString() + 'px;' + 'background:' + '#FFFFFF' + ';' + 'position:absolute;border:1px solid #707070;font-size:' + fontSize + ';border-radius:2px;';
        if (!tooltip) {
            tooltip = createElement('div', {
                id: id, innerHTML: '&nbsp;' + text + '&nbsp;', styles: style
            });
            document.body.appendChild(tooltip);
        } else {
            tooltip.setAttribute('innerHTML', '&nbsp;' + text + '&nbsp;');
            tooltip.setAttribute('styles', style);
        }
    }
    /** @private */
    function drawSymbol(location, shape, size, url, options) {
        var renderer = new SvgRenderer('');
        var temp = calculateLegendShapes(location, size, shape, options, url);
        var htmlObject = renderer['draw' + temp.functionName](temp.renderOption);
        return htmlObject;
    }
    /** @private */
    function calculateLegendShapes(location, size, shape, options, url) {
        var path = void 0;
        var functionName = 'Path';
        var width = size.width;
        var height = size.height;
        var locX = location.x;
        var locY = location.y;
        var x = location.x + -width / 2;
        var y = location.y + -height / 2;
        switch (shape) {
            case 'Circle':
            case 'Bubble':
                functionName = 'Ellipse';
                merge(options, { 'rx': width / 2, 'ry': height / 2, 'cx': locX, 'cy': locY });
                break;
            case 'Star':
                path = 'M ' + (location.x + size.width / 3) + ' ' + (location.y - size.height / 2) + ' L ' + (location.x - size.width / 2) + ' ' + (location.y + size.height / 6) + ' L ' + (location.x + size.width / 2) + ' ' + (location.y + size.height / 6) + ' L ' + (location.x - size.width / 3) + ' ' + (location.y - size.height / 2) + ' L ' + location.x + ' ' + (location.y + size.height / 2) + ' L ' + (location.x + size.width / 3) + ' ' + (location.y - size.height / 2) + ' Z';
                merge(options, { 'd': path });
                break;
            case 'Cross':
                path = 'M' + ' ' + x + ' ' + locY + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + locY + ' ' + 'M' + ' ' + locX + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + locX + ' ' + (locY + -height / 2);
                merge(options, { 'd': path });
                break;
            case 'HorizontalLine':
                path = 'M' + ' ' + x + ' ' + locY + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + locY;
                merge(options, { 'd': path });
                break;
            case 'VerticalLine':
                path = 'M' + ' ' + locX + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + locX + ' ' + (locY + -height / 2);
                merge(options, { 'd': path });
                break;
            case 'Diamond':
                path = 'M' + ' ' + x + ' ' + locY + ' ' + 'L' + ' ' + locX + ' ' + (locY + -height / 2) + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + locY + ' ' + 'L' + ' ' + locX + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + x + ' ' + locY + ' z';
                merge(options, { 'd': path });
                break;
            case 'Rectangle':
                path = 'M' + ' ' + x + ' ' + (locY + -height / 2) + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + (locY + -height / 2) + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + x + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + x + ' ' + (locY + -height / 2) + ' z';
                merge(options, { 'd': path });
                break;
            case 'Triangle':
                path = 'M' + ' ' + x + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + locX + ' ' + (locY + -height / 2) + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + x + ' ' + (locY + height / 2) + ' z';
                merge(options, { 'd': path });
                break;
            case 'InvertedTriangle':
                path = 'M' + ' ' + (locX + width / 2) + ' ' + (locY - height / 2) + ' ' + 'L' + ' ' + locX + ' ' + (locY + height / 2) + ' ' + 'L' + ' ' + (locX - width / 2) + ' ' + (locY - height / 2) + ' ' + 'L' + ' ' + (locX + width / 2) + ' ' + (locY - height / 2) + ' z';
                merge(options, { 'd': path });
                break;
            case 'Pentagon':
                var eq = 72;
                var xValue = void 0;
                var yValue = void 0;
                for (var i = 0; i <= 5; i++) {
                    xValue = width / 2 * Math.cos(Math.PI / 180 * (i * eq));
                    yValue = height / 2 * Math.sin(Math.PI / 180 * (i * eq));
                    if (i === 0) {
                        path = 'M' + ' ' + (locX + xValue) + ' ' + (locY + yValue) + ' ';
                    } else {
                        path = path.concat('L' + ' ' + (locX + xValue) + ' ' + (locY + yValue) + ' ');
                    }
                }
                path = path.concat('Z');
                merge(options, { 'd': path });
                break;
            case 'Image':
                functionName = 'Image';
                merge(options, { 'href': url, 'height': height, 'width': width, x: x, y: y });
                break;
        }
        return { renderOption: options, functionName: functionName };
    }
    /**
     * Animation Effect Calculation End
     * @private
     */
    // export function markerTemplateAnimate(element: Element, delay: number, duration: number, point: MapLocation): void {
    //     let delta: number = 0;
    //     let top: string = (element as HTMLElement).style.top;
    //     let y: number = parseInt(top, 10);
    //     new Animation({}).animate(<HTMLElement>element, {
    //         duration: duration,
    //         delay: delay,
    //         progress: (args: AnimationOptions): void => {
    //             if (args.timeStamp > args.delay) {
    //                 delta = ((args.timeStamp - args.delay) / args.duration);
    //                 (element as HTMLElement).style.top = y - 100 + (delta * 100) + 'px';
    //             }
    //         },
    //         end: (model: AnimationOptions) => {
    //             (element as HTMLElement).style.top = top;
    //         }
    //     });
    // }
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
    function changeBorderWidth(element, index, scale, maps) {
        var childNode = void 0;
        for (var l = 0; l < element.childElementCount; l++) {
            childNode = element.childNodes[l];
            if (childNode.id.indexOf('_NavigationGroup') > -1) {
                changeNavaigationLineWidth(childNode, index, scale, maps);
            } else {
                var currentStroke = maps.layersCollection[index].shapeSettings.border.width;
                childNode.setAttribute('stroke-width', (currentStroke / scale).toString());
            }
        }
    }
    /** @private */
    function changeNavaigationLineWidth(element, index, scale, maps) {
        var node = void 0;
        for (var m = 0; m < element.childElementCount; m++) {
            node = element.childNodes[m];
            if (node.tagName === 'path') {
                var currentStroke = maps.layersCollection[index].navigationLineSettings[parseFloat(node.id.split('_')[2])].width;
                node.setAttribute('stroke-width', (currentStroke / scale).toString());
            }
        }
    }
    // /** Pinch zoom helper methods */
    /** @private */
    function targetTouches(event) {
        var targetTouches = [];
        var touches = event.touches;
        for (var i = 0; i < touches.length; i++) {
            targetTouches.push({ pageX: touches[i].pageX, pageY: touches[i].pageY });
        }
        return targetTouches;
    }
    /** @private */
    function calculateScale(startTouches, endTouches) {
        var startDistance = getDistance(startTouches[0], startTouches[1]);
        var endDistance = getDistance(endTouches[0], endTouches[1]);
        return endDistance / startDistance;
    }
    /** @private */
    function getDistance(a, b) {
        var x = a.pageX - b.pageX;
        var y = a.pageY - b.pageY;
        return Math.sqrt(x * x + y * y);
    }
    /** @private */
    function getTouches(touches, maps) {
        var rect = maps.element.getBoundingClientRect();
        var posTop = rect.top + document.defaultView.pageXOffset;
        var posLeft = rect.left + document.defaultView.pageYOffset;
        return Array.prototype.slice.call(touches).map(function (touch) {
            return {
                x: touch.pageX - posLeft,
                y: touch.pageY - posTop
            };
        });
    }
    /** @private */
    function getTouchCenter(touches) {
        return {
            x: touches.map(function (e) {
                return e['x'];
            }).reduce(sum) / touches.length,
            y: touches.map(function (e) {
                return e['y'];
            }).reduce(sum) / touches.length
        };
    }
    /** @private */
    function sum(a, b) {
        return a + b;
    }
    /**
     * Animation Effect Calculation End
     * @private
     */
    function zoomAnimate(element, delay, duration, point, scale, size, maps) {
        var delta = 0;
        var previousLocation = maps.previousPoint;
        var preScale = maps.previousScale;
        var diffScale = scale - preScale;
        var currentLocation = new MapLocation(0, 0);
        var currentScale = 1;
        if (scale === preScale) {
            element.setAttribute('transform', 'scale( ' + scale + ' ) translate( ' + point.x + ' ' + point.y + ' )');
            return;
        }
        var slope = function slope(previousLocation, point) {
            if (previousLocation.x === point.x) {
                return null;
            }
            return (point.y - previousLocation.y) / (point.x - previousLocation.x);
        };
        var intercept = function intercept(point, slopeValue) {
            if (slopeValue === null) {
                return point.x;
            }
            return point.y - slopeValue * point.x;
        };
        var slopeFactor = slope(previousLocation, point);
        var slopeIntersection = intercept(previousLocation, slopeFactor);
        var horizontalDifference = point.x - previousLocation.x;
        var verticalDifference = point.y - previousLocation.y;
        animate(element, delay, duration, function (args) {
            if (args.timeStamp > args.delay) {
                delta = (args.timeStamp - args.delay) / args.duration;
                currentScale = preScale + delta * diffScale;
                currentLocation.x = previousLocation.x + delta * horizontalDifference / (currentScale / scale);
                if (slopeFactor == null) {
                    currentLocation.y = previousLocation.y + delta * verticalDifference;
                } else {
                    currentLocation.y = slopeFactor * currentLocation.x + slopeIntersection;
                }
                args.element.setAttribute('transform', 'scale( ' + currentScale + ' ) ' + 'translate( ' + currentLocation.x + ' ' + currentLocation.y + ' )');
                maps.translatePoint = currentLocation;
                maps.scale = currentScale;
                maps.zoomModule.processTemplate(point.x, point.y, currentScale, maps);
            }
        }, function () {
            maps.translatePoint = point;
            maps.scale = scale;
            element.setAttribute('transform', 'scale( ' + scale + ' ) translate( ' + point.x + ' ' + point.y + ' )');
            maps.zoomModule.processTemplate(point.x, point.y, scale, maps);
        });
    }
    /**
     * To process custom animation
     */
    function animate(element, delay, duration, process, end) {
        var _this6 = this;

        var start = null;
        var clearAnimation = void 0;
        var startAnimation = function startAnimation(timestamp) {
            if (!start) {
                start = timestamp;
            }
            var progress = timestamp - start;
            if (progress < duration) {
                process.call(_this6, { element: element, delay: 0, timeStamp: progress, duration: duration });
                window.requestAnimationFrame(startAnimation);
            } else {
                window.cancelAnimationFrame(clearAnimation);
                end.call(_this6, { element: element });
            }
        };
        clearAnimation = window.requestAnimationFrame(startAnimation);
    }

    /**
     * Animation Translate
     * @private
     */
    function smoothTranslate(element, delay, duration, point) {
        var delta = 0;
        var transform = element.getAttribute('transform').split(' ');
        if (transform.length === 2) {
            transform[2] = transform[1].split(')')[0];
            transform[1] = transform[0].split('(')[1];
        }
        var previousLocation = new MapLocation(parseInt(transform[1], 10), parseInt(transform[2], 10));
        var diffx = point.x - previousLocation.x;
        var diffy = point.y - previousLocation.y;
        var currentLocation = new MapLocation(0, 0);
        animate(element, delay, duration, function (args) {
            if (args.timeStamp > args.delay) {
                delta = (args.timeStamp - args.delay) / args.duration;
                currentLocation.x = previousLocation.x + delta * diffx;
                currentLocation.y = previousLocation.y + delta * diffy;
                args.element.setAttribute('transform', 'translate( ' + currentLocation.x + ' ' + currentLocation.y + ' )');
            }
        }, function () {
            element.setAttribute('transform', 'translate( ' + point.x + ' ' + point.y + ' )');
        });
    }

    /**
     * Specifies Maps Themes
     */

    /**
     * Internal use of Method to getting colors based on themes.
     * @private
     * @param theme
     */
    function getShapeColor(theme) {
        return ['#B5E485', '#7BC1E8', '#DF819C', '#EC9B79', '#78D0D3', '#D6D572', '#9178E3', '#A1E5B4', '#87A4B4', '#E4C16C'];
    }
    /**
     * HighContrast Theme configuration
     */
    return {
        setters: [function (_syncfusionEj2Base) {
            Ajax = _syncfusionEj2Base.Ajax;
            Animation = _syncfusionEj2Base.Animation;
            Browser = _syncfusionEj2Base.Browser;
            ChildProperty = _syncfusionEj2Base.ChildProperty;
            Collection = _syncfusionEj2Base.Collection;
            Complex = _syncfusionEj2Base.Complex;
            Component = _syncfusionEj2Base.Component;
            Event = _syncfusionEj2Base.Event;
            EventHandler = _syncfusionEj2Base.EventHandler;
            Internationalization = _syncfusionEj2Base.Internationalization;
            L10n = _syncfusionEj2Base.L10n;
            NotifyPropertyChanges = _syncfusionEj2Base.NotifyPropertyChanges;
            Property = _syncfusionEj2Base.Property;
            SvgRenderer = _syncfusionEj2Base.SvgRenderer;
            compile = _syncfusionEj2Base.compile;
            createElement = _syncfusionEj2Base.createElement;
            extend = _syncfusionEj2Base.extend;
            isNullOrUndefined = _syncfusionEj2Base.isNullOrUndefined;
            merge = _syncfusionEj2Base.merge;
            _print = _syncfusionEj2Base.print;
            remove = _syncfusionEj2Base.remove;
            setStyleAttribute = _syncfusionEj2Base.setStyleAttribute;
        }, function (_syncfusionEj2Data) {
            DataManager = _syncfusionEj2Data.DataManager;
            Query = _syncfusionEj2Data.Query;
        }, function (_syncfusionEj2PdfExport) {
            PdfBitmap = _syncfusionEj2PdfExport.PdfBitmap;
            PdfDocument = _syncfusionEj2PdfExport.PdfDocument;
            PdfPageOrientation = _syncfusionEj2PdfExport.PdfPageOrientation;
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

            _export2('Size', Size = function Size(width, height) {
                _classCallCheck(this, Size);

                this.width = width;
                this.height = height;
            });

            _export2('Point', Point = function Point(x, y) {
                _classCallCheck(this, Point);

                this.x = x;
                this.y = y;
            });

            _export2('MinMax', MinMax = function MinMax(min, max) {
                _classCallCheck(this, MinMax);

                this.min = min;
                this.max = max;
            });

            _export2('GeoLocation', GeoLocation = function GeoLocation(latitude, longitude) {
                _classCallCheck(this, GeoLocation);

                this.latitude = new MinMax(latitude.min, latitude.max);
                this.longitude = new MinMax(longitude.min, longitude.max);
            });

            _export2('TextOption', TextOption = function TextOption(id, x, y, anchor, text) {
                var transform = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
                var baseLine = arguments[6];

                _classCallCheck(this, TextOption);

                this.transform = '';
                this.baseLine = 'auto';
                this.id = id;
                this.x = x;
                this.y = y;
                this.anchor = anchor;
                this.text = text;
                this.transform = transform;
                this.baseLine = baseLine;
            });

            _export2('PathOption', PathOption = function PathOption(id, fill, width, color, opacity, dashArray, d) {
                _classCallCheck(this, PathOption);

                this.id = id;
                this.opacity = opacity;
                this.fill = fill;
                this.stroke = color;
                this['stroke-width'] = width;
                this['stroke-dasharray'] = dashArray;
                this.d = d;
            });

            _export2('RectOption', RectOption = function (_PathOption) {
                _inherits(RectOption, _PathOption);

                function RectOption(id, fill, border, opacity, rect, rx, ry, transform, dashArray) {
                    _classCallCheck(this, RectOption);

                    var _this = _possibleConstructorReturn(this, (RectOption.__proto__ || Object.getPrototypeOf(RectOption)).call(this, id, fill, border.width, border.color, opacity, dashArray));

                    _this.y = rect.y;
                    _this.x = rect.x;
                    _this.height = rect.height;
                    _this.width = rect.width;
                    _this.rx = rx ? rx : 0;
                    _this.ry = ry ? ry : 0;
                    _this.transform = transform ? transform : '';
                    _this['stroke-dasharray'] = dashArray;
                    return _this;
                }

                return RectOption;
            }(PathOption));

            _export2('CircleOption', CircleOption = function (_PathOption2) {
                _inherits(CircleOption, _PathOption2);

                function CircleOption(id, fill, border, opacity, cx, cy, r, dashArray) {
                    _classCallCheck(this, CircleOption);

                    var _this2 = _possibleConstructorReturn(this, (CircleOption.__proto__ || Object.getPrototypeOf(CircleOption)).call(this, id, fill, border.width, border.color, opacity));

                    _this2.cy = cy;
                    _this2.cx = cx;
                    _this2.r = r;
                    _this2['stroke-dasharray'] = dashArray;
                    return _this2;
                }

                return CircleOption;
            }(PathOption));

            _export2('PolygonOption', PolygonOption = function (_PathOption3) {
                _inherits(PolygonOption, _PathOption3);

                function PolygonOption(id, points, fill, width, color) {
                    var opacity = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
                    var dashArray = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';

                    _classCallCheck(this, PolygonOption);

                    var _this3 = _possibleConstructorReturn(this, (PolygonOption.__proto__ || Object.getPrototypeOf(PolygonOption)).call(this, id, fill, width, color, opacity, dashArray));

                    _this3.points = points;
                    return _this3;
                }

                return PolygonOption;
            }(PathOption));

            _export2('PolylineOption', PolylineOption = function (_PolygonOption) {
                _inherits(PolylineOption, _PolygonOption);

                function PolylineOption(id, points, fill, width, color) {
                    var opacity = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
                    var dashArray = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';

                    _classCallCheck(this, PolylineOption);

                    return _possibleConstructorReturn(this, (PolylineOption.__proto__ || Object.getPrototypeOf(PolylineOption)).call(this, id, points, fill, width, color, opacity, dashArray));
                }

                return PolylineOption;
            }(PolygonOption));

            _export2('LineOption', LineOption = function (_PathOption4) {
                _inherits(LineOption, _PathOption4);

                function LineOption(id, line, fill, width, color) {
                    var opacity = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
                    var dashArray = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';

                    _classCallCheck(this, LineOption);

                    var _this5 = _possibleConstructorReturn(this, (LineOption.__proto__ || Object.getPrototypeOf(LineOption)).call(this, id, fill, width, color, opacity, dashArray));

                    _this5.x1 = line.x1;
                    _this5.y1 = line.y1;
                    _this5.x2 = line.x2;
                    _this5.y2 = line.y2;
                    return _this5;
                }

                return LineOption;
            }(PathOption));

            _export2('Line', Line = function Line(x1, y1, x2, y2) {
                _classCallCheck(this, Line);

                this.x1 = x1;
                this.y1 = y1;
                this.x2 = x2;
                this.y2 = y2;
            });

            _export2('MapLocation', MapLocation = function MapLocation(x, y) {
                _classCallCheck(this, MapLocation);

                this.x = x;
                this.y = y;
            });

            _export2('Rect', Rect = function Rect(x, y, width, height) {
                _classCallCheck(this, Rect);

                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            });

            _export2('PatternOptions', PatternOptions = function PatternOptions(id, x, y, width, height) {
                var patternUnits = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'userSpaceOnUse';
                var patternContentUnits = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'userSpaceOnUse';
                var patternTransform = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
                var href = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';

                _classCallCheck(this, PatternOptions);

                this.id = id;
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.patternUnits = patternUnits;
                this.patternContentUnits = patternContentUnits;
                this.patternTransform = patternTransform;
                this.href = href;
            });

            _export2('MapAjax', MapAjax = function MapAjax(url, sendData) {
                _classCallCheck(this, MapAjax);

                this.url = null;
                this.sendData = null;
                this.url = url;
                this.sendData = sendData;
            });

            (function (Theme) {
                /** @private */
                Theme.mapsTitleFont = {
                    size: '14px',
                    fontWeight: 'Medium',
                    color: '#424242',
                    fontStyle: 'Medium',
                    fontFamily: 'Roboto, Noto, Sans-serif'
                };
                /** @private */
                Theme.mapsSubTitleFont = {
                    size: '13px',
                    fontWeight: 'Medium',
                    color: '#424242',
                    fontStyle: 'Medium',
                    fontFamily: 'Roboto, Noto, Sans-serif'
                };
                /** @private */
                Theme.tooltipLabelFont = {
                    size: '12px',
                    fontWeight: 'Regular',
                    color: '#FFFFFF',
                    fontStyle: 'Regular',
                    fontFamily: 'Roboto'
                };
                /** @private */
                Theme.legendTitleFont = {
                    size: '14px',
                    fontWeight: 'Regular',
                    color: '#757575',
                    fontStyle: 'Regular',
                    fontFamily: 'Roboto, Noto, Sans-serif'
                };
                /** @private */
                Theme.legendLabelFont = {
                    size: '13px',
                    fontWeight: 'Medium',
                    color: '#757575',
                    fontStyle: 'Medium',
                    fontFamily: 'Roboto, Noto, Sans-serif'
                };
                /** @private */
                Theme.dataLabelFont = {
                    size: '12px',
                    fontWeight: 'Medium',
                    color: '#000000',
                    fontStyle: 'Medium',
                    fontFamily: 'Roboto, Noto, Sans-serif'
                };
            })(Theme || (Theme = {}));

            (function (FabricTheme) {
                /** @private */
                FabricTheme.mapsTitleFont = {
                    size: '14px',
                    fontWeight: 'Semibold',
                    color: '#424242',
                    fontStyle: 'Semibold',
                    fontFamily: 'SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif'
                };
                /** @private */
                FabricTheme.mapsSubTitleFont = {
                    size: '13px',
                    fontWeight: 'Regular',
                    color: '#424242',
                    fontStyle: 'Regular',
                    fontFamily: 'SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif'
                };
                /** @private */
                FabricTheme.tooltipLabelFont = {
                    size: '12px',
                    fontWeight: 'Regular',
                    color: '#FFFFFF',
                    fontStyle: 'Regular',
                    fontFamily: 'Roboto'
                };
                /** @private */
                FabricTheme.legendTitleFont = {
                    size: '14px',
                    fontWeight: 'Regular',
                    color: '#757575',
                    fontStyle: 'Regular',
                    fontFamily: 'SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif'
                };
                /** @private */
                FabricTheme.legendLabelFont = {
                    size: '13px',
                    fontWeight: 'Medium',
                    color: '#757575',
                    fontStyle: 'Medium',
                    fontFamily: 'SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif'
                };
                /** @private */
                FabricTheme.dataLabelFont = {
                    size: '12px',
                    fontWeight: 'Medium',
                    color: '#000000',
                    fontStyle: 'Medium',
                    fontFamily: 'SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif'
                };
            })(FabricTheme || (FabricTheme = {}));

            (function (BootstrapTheme) {
                /** @private */
                BootstrapTheme.mapsTitleFont = {
                    size: '14px',
                    fontWeight: 'Semibold',
                    color: '#424242',
                    fontStyle: 'Semibold',
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
                };
                /** @private */
                BootstrapTheme.mapsSubTitleFont = {
                    size: '13px',
                    fontWeight: 'Regular',
                    color: '#424242',
                    fontStyle: 'Regular',
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
                };
                /** @private */
                BootstrapTheme.tooltipLabelFont = {
                    size: '12px',
                    fontWeight: 'Regular',
                    color: '#FFFFFF',
                    fontStyle: 'Regular',
                    fontFamily: 'Roboto'
                };
                /** @private */
                BootstrapTheme.legendTitleFont = {
                    size: '14px',
                    fontWeight: 'Regular',
                    color: '#757575',
                    fontStyle: 'Regular',
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
                };
                /** @private */
                BootstrapTheme.legendLabelFont = {
                    size: '13px',
                    fontWeight: 'Medium',
                    color: '#757575',
                    fontStyle: 'Medium',
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
                };
                /** @private */
                BootstrapTheme.dataLabelFont = {
                    size: '12px',
                    fontWeight: 'Medium',
                    color: '#000000',
                    fontStyle: 'Medium',
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
                };
            })(BootstrapTheme || (BootstrapTheme = {}));(function (HighContrastTheme) {
                /** @private */
                HighContrastTheme.mapsTitleFont = {
                    size: '14px',
                    fontWeight: 'Medium',
                    color: '#FFFFFF',
                    fontStyle: 'Medium',
                    fontFamily: 'Roboto, Noto, Sans-serif'
                };
                /** @private */
                HighContrastTheme.mapsSubTitleFont = {
                    size: '13px',
                    fontWeight: 'Medium',
                    color: '#FFFFFF',
                    fontStyle: 'Medium',
                    fontFamily: 'Roboto, Noto, Sans-serif'
                };
                /** @private */
                HighContrastTheme.tooltipLabelFont = {
                    size: '12px',
                    fontWeight: 'Regular',
                    color: '#FFFFFF',
                    fontStyle: 'Regular',
                    fontFamily: 'Roboto'
                };
                /** @private */
                HighContrastTheme.legendTitleFont = {
                    size: '14px',
                    fontWeight: 'Regular',
                    color: '#FFFFFF',
                    fontStyle: 'Regular',
                    fontFamily: 'Roboto, Noto, Sans-serif'
                };
                /** @private */
                HighContrastTheme.legendLabelFont = {
                    size: '13px',
                    fontWeight: 'Medium',
                    color: '#FFFFFF',
                    fontStyle: 'Medium',
                    fontFamily: 'Roboto, Noto, Sans-serif'
                };
                /** @private */
                HighContrastTheme.dataLabelFont = {
                    size: '12px',
                    fontWeight: 'Medium',
                    color: '#000000',
                    fontStyle: 'Medium',
                    fontFamily: 'Roboto, Noto, Sans-serif'
                };
            })(HighContrastTheme || (HighContrastTheme = {}));

            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export2('Annotation', Annotation = function (_ChildProperty) {
                _inherits(Annotation, _ChildProperty);

                function Annotation() {
                    _classCallCheck(this, Annotation);

                    return _possibleConstructorReturn(this, (Annotation.__proto__ || Object.getPrototypeOf(Annotation)).apply(this, arguments));
                }

                return Annotation;
            }(ChildProperty));

            __decorate$1([Property('')], Annotation.prototype, "content", void 0);
            __decorate$1([Property('0px')], Annotation.prototype, "x", void 0);
            __decorate$1([Property('0px')], Annotation.prototype, "y", void 0);
            __decorate$1([Property('None')], Annotation.prototype, "verticalAlignment", void 0);
            __decorate$1([Property('None')], Annotation.prototype, "horizontalAlignment", void 0);
            __decorate$1([Property('-1')], Annotation.prototype, "zIndex", void 0);

            _export2('Arrow', Arrow = function (_ChildProperty2) {
                _inherits(Arrow, _ChildProperty2);

                function Arrow() {
                    _classCallCheck(this, Arrow);

                    return _possibleConstructorReturn(this, (Arrow.__proto__ || Object.getPrototypeOf(Arrow)).apply(this, arguments));
                }

                return Arrow;
            }(ChildProperty));

            __decorate$1([Property('Start')], Arrow.prototype, "position", void 0);
            __decorate$1([Property('false')], Arrow.prototype, "showArrow", void 0);
            __decorate$1([Property(2)], Arrow.prototype, "size", void 0);
            __decorate$1([Property('black')], Arrow.prototype, "color", void 0);
            __decorate$1([Property(0)], Arrow.prototype, "offSet", void 0);
            /**
             * Configures the fonts in maps.
             */

            _export2('Font', Font = function (_ChildProperty3) {
                _inherits(Font, _ChildProperty3);

                function Font() {
                    _classCallCheck(this, Font);

                    return _possibleConstructorReturn(this, (Font.__proto__ || Object.getPrototypeOf(Font)).apply(this, arguments));
                }

                return Font;
            }(ChildProperty));

            __decorate$1([Property(null)], Font.prototype, "size", void 0);
            __decorate$1([Property(null)], Font.prototype, "color", void 0);
            __decorate$1([Property(null)], Font.prototype, "fontFamily", void 0);
            __decorate$1([Property(null)], Font.prototype, "fontWeight", void 0);
            __decorate$1([Property(null)], Font.prototype, "fontStyle", void 0);
            __decorate$1([Property(1)], Font.prototype, "opacity", void 0);
            /**
             * Configures the borders in the maps.
             */

            _export2('Border', Border = function (_ChildProperty4) {
                _inherits(Border, _ChildProperty4);

                function Border() {
                    _classCallCheck(this, Border);

                    return _possibleConstructorReturn(this, (Border.__proto__ || Object.getPrototypeOf(Border)).apply(this, arguments));
                }

                return Border;
            }(ChildProperty));

            __decorate$1([Property('')], Border.prototype, "color", void 0);
            __decorate$1([Property(0)], Border.prototype, "width", void 0);
            /**
             * To configure the tooltip settings of the maps.
             */

            _export2('TooltipSettings', TooltipSettings = function (_ChildProperty5) {
                _inherits(TooltipSettings, _ChildProperty5);

                function TooltipSettings() {
                    _classCallCheck(this, TooltipSettings);

                    return _possibleConstructorReturn(this, (TooltipSettings.__proto__ || Object.getPrototypeOf(TooltipSettings)).apply(this, arguments));
                }

                return TooltipSettings;
            }(ChildProperty));

            __decorate$1([Property(false)], TooltipSettings.prototype, "visible", void 0);
            __decorate$1([Property('')], TooltipSettings.prototype, "template", void 0);
            __decorate$1([Property('#363F4C')], TooltipSettings.prototype, "fill", void 0);
            __decorate$1([Complex({ color: 'transparent', width: 1 }, Border)], TooltipSettings.prototype, "border", void 0);
            __decorate$1([Complex(Theme.tooltipLabelFont, Font)], TooltipSettings.prototype, "textStyle", void 0);
            __decorate$1([Property(null)], TooltipSettings.prototype, "format", void 0);
            __decorate$1([Property(null)], TooltipSettings.prototype, "valuePath", void 0);
            /**
             * Configures the maps margins.
             */

            _export2('Margin', Margin = function (_ChildProperty6) {
                _inherits(Margin, _ChildProperty6);

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
             * To configure ColorMapping in Maps
             */

            _export2('ColorMappingSettings', ColorMappingSettings = function (_ChildProperty7) {
                _inherits(ColorMappingSettings, _ChildProperty7);

                function ColorMappingSettings() {
                    _classCallCheck(this, ColorMappingSettings);

                    return _possibleConstructorReturn(this, (ColorMappingSettings.__proto__ || Object.getPrototypeOf(ColorMappingSettings)).apply(this, arguments));
                }

                return ColorMappingSettings;
            }(ChildProperty));

            __decorate$1([Property(null)], ColorMappingSettings.prototype, "from", void 0);
            __decorate$1([Property(null)], ColorMappingSettings.prototype, "to", void 0);
            __decorate$1([Property(null)], ColorMappingSettings.prototype, "value", void 0);
            __decorate$1([Property(null)], ColorMappingSettings.prototype, "color", void 0);
            __decorate$1([Property(null)], ColorMappingSettings.prototype, "label", void 0);
            /**
             * To configure the selection settings
             */

            _export2('SelectionSettings', SelectionSettings = function (_ChildProperty8) {
                _inherits(SelectionSettings, _ChildProperty8);

                function SelectionSettings() {
                    _classCallCheck(this, SelectionSettings);

                    return _possibleConstructorReturn(this, (SelectionSettings.__proto__ || Object.getPrototypeOf(SelectionSettings)).apply(this, arguments));
                }

                return SelectionSettings;
            }(ChildProperty));

            __decorate$1([Property(false)], SelectionSettings.prototype, "enable", void 0);
            __decorate$1([Property('#D2691E')], SelectionSettings.prototype, "fill", void 0);
            __decorate$1([Property(1)], SelectionSettings.prototype, "opacity", void 0);
            __decorate$1([Property(false)], SelectionSettings.prototype, "enableMultiSelect", void 0);
            __decorate$1([Complex({ color: 'transparent', width: 0 }, Border)], SelectionSettings.prototype, "border", void 0);
            /**
             * To configure the highlight settings
             */

            _export2('HighlightSettings', HighlightSettings = function (_ChildProperty9) {
                _inherits(HighlightSettings, _ChildProperty9);

                function HighlightSettings() {
                    _classCallCheck(this, HighlightSettings);

                    return _possibleConstructorReturn(this, (HighlightSettings.__proto__ || Object.getPrototypeOf(HighlightSettings)).apply(this, arguments));
                }

                return HighlightSettings;
            }(ChildProperty));

            __decorate$1([Property('#6B8E23')], HighlightSettings.prototype, "fill", void 0);
            __decorate$1([Property(false)], HighlightSettings.prototype, "enable", void 0);
            __decorate$1([Property(1)], HighlightSettings.prototype, "opacity", void 0);
            __decorate$1([Complex({ color: 'transparent', width: 0 }, Border)], HighlightSettings.prototype, "border", void 0);
            /**
             * NavigationSelectedLine
             */

            _export2('NavigationLineSettings', NavigationLineSettings = function (_ChildProperty10) {
                _inherits(NavigationLineSettings, _ChildProperty10);

                function NavigationLineSettings() {
                    _classCallCheck(this, NavigationLineSettings);

                    return _possibleConstructorReturn(this, (NavigationLineSettings.__proto__ || Object.getPrototypeOf(NavigationLineSettings)).apply(this, arguments));
                }

                return NavigationLineSettings;
            }(ChildProperty));

            __decorate$1([Property(false)], NavigationLineSettings.prototype, "visible", void 0);
            __decorate$1([Property(1)], NavigationLineSettings.prototype, "width", void 0);
            __decorate$1([Property(null)], NavigationLineSettings.prototype, "longitude", void 0);
            __decorate$1([Property(null)], NavigationLineSettings.prototype, "latitude", void 0);
            __decorate$1([Property('')], NavigationLineSettings.prototype, "dashArray", void 0);
            __decorate$1([Property('black')], NavigationLineSettings.prototype, "color", void 0);
            __decorate$1([Property(0)], NavigationLineSettings.prototype, "angle", void 0);
            __decorate$1([Complex({ showArrow: false, position: 'Start', size: 5, color: 'black' }, Arrow)], NavigationLineSettings.prototype, "arrowSettings", void 0);
            __decorate$1([Complex({}, SelectionSettings)], NavigationLineSettings.prototype, "selectionSettings", void 0);
            __decorate$1([Complex({}, HighlightSettings)], NavigationLineSettings.prototype, "highlightSettings", void 0);
            /**
             * Bubble settings model class
             */

            _export2('BubbleSettings', BubbleSettings = function (_ChildProperty11) {
                _inherits(BubbleSettings, _ChildProperty11);

                function BubbleSettings() {
                    _classCallCheck(this, BubbleSettings);

                    return _possibleConstructorReturn(this, (BubbleSettings.__proto__ || Object.getPrototypeOf(BubbleSettings)).apply(this, arguments));
                }

                return BubbleSettings;
            }(ChildProperty));

            __decorate$1([Complex({}, Border)], BubbleSettings.prototype, "border", void 0);
            __decorate$1([Property(false)], BubbleSettings.prototype, "visible", void 0);
            __decorate$1([Property([])], BubbleSettings.prototype, "dataSource", void 0);
            __decorate$1([Property(1000)], BubbleSettings.prototype, "animationDuration", void 0);
            __decorate$1([Property(0)], BubbleSettings.prototype, "animationDelay", void 0);
            __decorate$1([Property('')], BubbleSettings.prototype, "fill", void 0);
            __decorate$1([Property(10)], BubbleSettings.prototype, "minRadius", void 0);
            __decorate$1([Property(20)], BubbleSettings.prototype, "maxRadius", void 0);
            __decorate$1([Property(1)], BubbleSettings.prototype, "opacity", void 0);
            __decorate$1([Property(null)], BubbleSettings.prototype, "valuePath", void 0);
            __decorate$1([Property('Circle')], BubbleSettings.prototype, "bubbleType", void 0);
            __decorate$1([Property(null)], BubbleSettings.prototype, "colorValuePath", void 0);
            __decorate$1([Collection([], ColorMappingSettings)], BubbleSettings.prototype, "colorMapping", void 0);
            __decorate$1([Complex({}, TooltipSettings)], BubbleSettings.prototype, "tooltipSettings", void 0);
            __decorate$1([Complex({}, SelectionSettings)], BubbleSettings.prototype, "selectionSettings", void 0);
            __decorate$1([Complex({}, HighlightSettings)], BubbleSettings.prototype, "highlightSettings", void 0);
            /**
             * To configure title of the maps.
             */

            _export2('CommonTitleSettings', CommonTitleSettings = function (_ChildProperty12) {
                _inherits(CommonTitleSettings, _ChildProperty12);

                function CommonTitleSettings() {
                    _classCallCheck(this, CommonTitleSettings);

                    return _possibleConstructorReturn(this, (CommonTitleSettings.__proto__ || Object.getPrototypeOf(CommonTitleSettings)).apply(this, arguments));
                }

                return CommonTitleSettings;
            }(ChildProperty));

            __decorate$1([Property('')], CommonTitleSettings.prototype, "text", void 0);
            __decorate$1([Property('')], CommonTitleSettings.prototype, "description", void 0);
            /**
             * To configure subtitle of the maps.
             */

            _export2('SubTitleSettings', SubTitleSettings = function (_CommonTitleSettings) {
                _inherits(SubTitleSettings, _CommonTitleSettings);

                function SubTitleSettings() {
                    _classCallCheck(this, SubTitleSettings);

                    return _possibleConstructorReturn(this, (SubTitleSettings.__proto__ || Object.getPrototypeOf(SubTitleSettings)).apply(this, arguments));
                }

                return SubTitleSettings;
            }(CommonTitleSettings));

            __decorate$1([Complex({}, Font)], SubTitleSettings.prototype, "textStyle", void 0);
            __decorate$1([Property('Center')], SubTitleSettings.prototype, "alignment", void 0);
            /**
             * To configure title of the maps.
             */

            _export2('TitleSettings', TitleSettings = function (_CommonTitleSettings2) {
                _inherits(TitleSettings, _CommonTitleSettings2);

                function TitleSettings() {
                    _classCallCheck(this, TitleSettings);

                    return _possibleConstructorReturn(this, (TitleSettings.__proto__ || Object.getPrototypeOf(TitleSettings)).apply(this, arguments));
                }

                return TitleSettings;
            }(CommonTitleSettings));

            __decorate$1([Complex({}, Font)], TitleSettings.prototype, "textStyle", void 0);
            __decorate$1([Property('Center')], TitleSettings.prototype, "alignment", void 0);
            __decorate$1([Complex({}, SubTitleSettings)], TitleSettings.prototype, "subtitleSettings", void 0);
            /**
             * Options to configure maps Zooming Settings.
             */

            _export2('ZoomSettings', ZoomSettings = function (_ChildProperty13) {
                _inherits(ZoomSettings, _ChildProperty13);

                function ZoomSettings() {
                    _classCallCheck(this, ZoomSettings);

                    return _possibleConstructorReturn(this, (ZoomSettings.__proto__ || Object.getPrototypeOf(ZoomSettings)).apply(this, arguments));
                }

                return ZoomSettings;
            }(ChildProperty));

            __decorate$1([Property(false)], ZoomSettings.prototype, "enable", void 0);
            __decorate$1([Property('Horizontal')], ZoomSettings.prototype, "toolBarOrientation", void 0);
            __decorate$1([Property('#737373')], ZoomSettings.prototype, "color", void 0);
            __decorate$1([Property('#e61576')], ZoomSettings.prototype, "highlightColor", void 0);
            __decorate$1([Property('#e61576')], ZoomSettings.prototype, "selectionColor", void 0);
            __decorate$1([Property('Far')], ZoomSettings.prototype, "horizontalAlignment", void 0);
            __decorate$1([Property('Near')], ZoomSettings.prototype, "verticalAlignment", void 0);
            __decorate$1([Property(['ZoomIn', 'ZoomOut', 'Reset'])], ZoomSettings.prototype, "toolbars", void 0);
            __decorate$1([Property(true)], ZoomSettings.prototype, "mouseWheelZoom", void 0);
            __decorate$1([Property(false)], ZoomSettings.prototype, "doubleClickZoom", void 0);
            __decorate$1([Property(false)], ZoomSettings.prototype, "pinchZooming", void 0);
            __decorate$1([Property(false)], ZoomSettings.prototype, "zoomOnClick", void 0);
            __decorate$1([Property(1)], ZoomSettings.prototype, "zoomFactor", void 0);
            __decorate$1([Property(10)], ZoomSettings.prototype, "maxZoom", void 0);
            __decorate$1([Property(1)], ZoomSettings.prototype, "minZoom", void 0);
            /**
             * Configures the legend settings.
             */

            _export2('LegendSettings', LegendSettings = function (_ChildProperty14) {
                _inherits(LegendSettings, _ChildProperty14);

                function LegendSettings() {
                    _classCallCheck(this, LegendSettings);

                    return _possibleConstructorReturn(this, (LegendSettings.__proto__ || Object.getPrototypeOf(LegendSettings)).apply(this, arguments));
                }

                return LegendSettings;
            }(ChildProperty));

            __decorate$1([Property(false)], LegendSettings.prototype, "toggleVisibility", void 0);
            __decorate$1([Property(false)], LegendSettings.prototype, "visible", void 0);
            __decorate$1([Property('transparent')], LegendSettings.prototype, "background", void 0);
            __decorate$1([Property('Layers')], LegendSettings.prototype, "type", void 0);
            __decorate$1([Property(false)], LegendSettings.prototype, "invertedPointer", void 0);
            __decorate$1([Property('After')], LegendSettings.prototype, "labelPosition", void 0);
            __decorate$1([Property('None')], LegendSettings.prototype, "labelDisplayMode", void 0);
            __decorate$1([Property('Circle')], LegendSettings.prototype, "shape", void 0);
            __decorate$1([Property('')], LegendSettings.prototype, "width", void 0);
            __decorate$1([Property('')], LegendSettings.prototype, "height", void 0);
            __decorate$1([Complex({}, Font)], LegendSettings.prototype, "textStyle", void 0);
            __decorate$1([Property(15)], LegendSettings.prototype, "shapeWidth", void 0);
            __decorate$1([Property(15)], LegendSettings.prototype, "shapeHeight", void 0);
            __decorate$1([Property(10)], LegendSettings.prototype, "shapePadding", void 0);
            __decorate$1([Complex({ color: '#000000', width: 0 }, Border)], LegendSettings.prototype, "border", void 0);
            __decorate$1([Complex({ color: '#000000', width: 0 }, Border)], LegendSettings.prototype, "shapeBorder", void 0);
            __decorate$1([Complex({}, CommonTitleSettings)], LegendSettings.prototype, "title", void 0);
            __decorate$1([Complex({}, Font)], LegendSettings.prototype, "titleStyle", void 0);
            __decorate$1([Property('Bottom')], LegendSettings.prototype, "position", void 0);
            __decorate$1([Property('Center')], LegendSettings.prototype, "alignment", void 0);
            __decorate$1([Property('None')], LegendSettings.prototype, "orientation", void 0);
            __decorate$1([Property({ x: 0, y: 0 })], LegendSettings.prototype, "location", void 0);
            __decorate$1([Property(null)], LegendSettings.prototype, "fill", void 0);
            __decorate$1([Property('Default')], LegendSettings.prototype, "mode", void 0);
            /**
             * Customization for Data label settings.
             */

            _export2('DataLabelSettings', DataLabelSettings = function (_ChildProperty15) {
                _inherits(DataLabelSettings, _ChildProperty15);

                function DataLabelSettings() {
                    _classCallCheck(this, DataLabelSettings);

                    return _possibleConstructorReturn(this, (DataLabelSettings.__proto__ || Object.getPrototypeOf(DataLabelSettings)).apply(this, arguments));
                }

                return DataLabelSettings;
            }(ChildProperty));

            __decorate$1([Property(false)], DataLabelSettings.prototype, "visible", void 0);
            __decorate$1([Complex({ width: 0, color: 'transparent' }, Border)], DataLabelSettings.prototype, "border", void 0);
            __decorate$1([Property('black')], DataLabelSettings.prototype, "fill", void 0);
            __decorate$1([Property(1)], DataLabelSettings.prototype, "opacity", void 0);
            __decorate$1([Property(5)], DataLabelSettings.prototype, "rx", void 0);
            __decorate$1([Property(5)], DataLabelSettings.prototype, "ry", void 0);
            __decorate$1([Complex({}, Font)], DataLabelSettings.prototype, "textStyle", void 0);
            __decorate$1([Property('')], DataLabelSettings.prototype, "labelPath", void 0);
            __decorate$1([Property('None')], DataLabelSettings.prototype, "smartLabelMode", void 0);
            __decorate$1([Property('None')], DataLabelSettings.prototype, "intersectionAction", void 0);
            __decorate$1([Property('')], DataLabelSettings.prototype, "template", void 0);
            /**
             * To configure the shapeSettings in the maps.
             */

            _export2('ShapeSettings', ShapeSettings = function (_ChildProperty16) {
                _inherits(ShapeSettings, _ChildProperty16);

                function ShapeSettings() {
                    _classCallCheck(this, ShapeSettings);

                    return _possibleConstructorReturn(this, (ShapeSettings.__proto__ || Object.getPrototypeOf(ShapeSettings)).apply(this, arguments));
                }

                return ShapeSettings;
            }(ChildProperty));

            __decorate$1([Property('#A6A6A6')], ShapeSettings.prototype, "fill", void 0);
            __decorate$1([Property([])], ShapeSettings.prototype, "palette", void 0);
            __decorate$1([Property(5)], ShapeSettings.prototype, "circleRadius", void 0);
            __decorate$1([Complex({ width: 0, color: '#000000' }, Border)], ShapeSettings.prototype, "border", void 0);
            __decorate$1([Property('')], ShapeSettings.prototype, "dashArray", void 0);
            __decorate$1([Property(1)], ShapeSettings.prototype, "opacity", void 0);
            __decorate$1([Property(null)], ShapeSettings.prototype, "colorValuePath", void 0);
            __decorate$1([Property(null)], ShapeSettings.prototype, "valuePath", void 0);
            __decorate$1([Collection([], ColorMappingSettings)], ShapeSettings.prototype, "colorMapping", void 0);
            __decorate$1([Property(false)], ShapeSettings.prototype, "autofill", void 0);
            /**
             * To configure the marker settings for the maps.
             */

            _export2('MarkerSettings', MarkerSettings = function (_ChildProperty17) {
                _inherits(MarkerSettings, _ChildProperty17);

                function MarkerSettings() {
                    _classCallCheck(this, MarkerSettings);

                    return _possibleConstructorReturn(this, (MarkerSettings.__proto__ || Object.getPrototypeOf(MarkerSettings)).apply(this, arguments));
                }

                return MarkerSettings;
            }(ChildProperty));

            __decorate$1([Complex({ color: 'transparent', width: 1 }, Border)], MarkerSettings.prototype, "border", void 0);
            __decorate$1([Property(null)], MarkerSettings.prototype, "dashArray", void 0);
            __decorate$1([Property(false)], MarkerSettings.prototype, "visible", void 0);
            __decorate$1([Property('#FF471A')], MarkerSettings.prototype, "fill", void 0);
            __decorate$1([Property(10)], MarkerSettings.prototype, "height", void 0);
            __decorate$1([Property(10)], MarkerSettings.prototype, "width", void 0);
            __decorate$1([Property(1)], MarkerSettings.prototype, "opacity", void 0);
            __decorate$1([Property('Balloon')], MarkerSettings.prototype, "shape", void 0);
            __decorate$1([Property('')], MarkerSettings.prototype, "legendText", void 0);
            __decorate$1([Property(new Point(0, 0))], MarkerSettings.prototype, "offset", void 0);
            __decorate$1([Property('')], MarkerSettings.prototype, "imageUrl", void 0);
            __decorate$1([Property(null)], MarkerSettings.prototype, "template", void 0);
            __decorate$1([Property([])], MarkerSettings.prototype, "dataSource", void 0);
            __decorate$1([Complex({}, TooltipSettings)], MarkerSettings.prototype, "tooltipSettings", void 0);
            __decorate$1([Property(1000)], MarkerSettings.prototype, "animationDuration", void 0);
            __decorate$1([Property(0)], MarkerSettings.prototype, "animationDelay", void 0);
            __decorate$1([Complex({}, SelectionSettings)], MarkerSettings.prototype, "selectionSettings", void 0);
            __decorate$1([Complex({}, HighlightSettings)], MarkerSettings.prototype, "highlightSettings", void 0);
            /**
             * To configure the layers of the maps.
             */

            _export2('LayerSettings', LayerSettings = function (_ChildProperty18) {
                _inherits(LayerSettings, _ChildProperty18);

                function LayerSettings() {
                    _classCallCheck(this, LayerSettings);

                    var _this26 = _possibleConstructorReturn(this, (LayerSettings.__proto__ || Object.getPrototypeOf(LayerSettings)).apply(this, arguments));

                    /**
                     * @private
                     */
                    _this26.isBaseLayer = false;
                    return _this26;
                }

                return LayerSettings;
            }(ChildProperty));

            __decorate$1([Property(null)], LayerSettings.prototype, "shapeData", void 0);
            __decorate$1([Property()], LayerSettings.prototype, "query", void 0);
            __decorate$1([Complex({}, ShapeSettings)], LayerSettings.prototype, "shapeSettings", void 0);
            __decorate$1([Property([])], LayerSettings.prototype, "dataSource", void 0);
            __decorate$1([Property('Layer')], LayerSettings.prototype, "type", void 0);
            __decorate$1([Property('Geographic')], LayerSettings.prototype, "geometryType", void 0);
            __decorate$1([Property('Aerial')], LayerSettings.prototype, "bingMapType", void 0);
            __decorate$1([Property('')], LayerSettings.prototype, "key", void 0);
            __decorate$1([Property('Geometry')], LayerSettings.prototype, "layerType", void 0);
            __decorate$1([Property('http://a.tile.openstreetmap.org/level/tileX/tileY.png')], LayerSettings.prototype, "urlTemplate", void 0);
            __decorate$1([Property(true)], LayerSettings.prototype, "visible", void 0);
            __decorate$1([Property('name')], LayerSettings.prototype, "shapeDataPath", void 0);
            __decorate$1([Property('name')], LayerSettings.prototype, "shapePropertyPath", void 0);
            __decorate$1([Property(0)], LayerSettings.prototype, "animationDuration", void 0);
            __decorate$1([Collection([], MarkerSettings)], LayerSettings.prototype, "markerSettings", void 0);
            __decorate$1([Complex({}, DataLabelSettings)], LayerSettings.prototype, "dataLabelSettings", void 0);
            __decorate$1([Collection([], BubbleSettings)], LayerSettings.prototype, "bubbleSettings", void 0);
            __decorate$1([Collection([], NavigationLineSettings)], LayerSettings.prototype, "navigationLineSettings", void 0);
            __decorate$1([Complex({}, TooltipSettings)], LayerSettings.prototype, "tooltipSettings", void 0);
            __decorate$1([Complex({}, SelectionSettings)], LayerSettings.prototype, "selectionSettings", void 0);
            __decorate$1([Complex({}, HighlightSettings)], LayerSettings.prototype, "highlightSettings", void 0);
            /**
             * Internal use for bing type layer rendering
             */

            _export2('Tile', Tile = function Tile(x, y) {
                var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 256;
                var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 256;
                var top = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var left = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var src = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

                _classCallCheck(this, Tile);

                this.x = x;
                this.y = y;
                this.top = top;
                this.left = left;
                this.height = height;
                this.width = width;
                this.src = src;
            });

            _export2('MapsAreaSettings', MapsAreaSettings = function (_ChildProperty19) {
                _inherits(MapsAreaSettings, _ChildProperty19);

                function MapsAreaSettings() {
                    _classCallCheck(this, MapsAreaSettings);

                    return _possibleConstructorReturn(this, (MapsAreaSettings.__proto__ || Object.getPrototypeOf(MapsAreaSettings)).apply(this, arguments));
                }

                return MapsAreaSettings;
            }(ChildProperty));

            __decorate$1([Property('transparent')], MapsAreaSettings.prototype, "background", void 0);
            __decorate$1([Complex({ color: 'transparent', width: 1 }, Border)], MapsAreaSettings.prototype, "border", void 0);

            /**
             * Maps constants doc
             */
            /**
             * Specifies maps load event name.
             * @private
             */

            _export2('load', load = 'load');

            _export2('loaded', loaded = 'loaded');

            _export2('click', click = 'click');

            _export2('rightClick', rightClick = 'rightClick');

            _export2('doubleClick', doubleClick = 'doubleClick');

            _export2('resize', resize = 'resize');

            _export2('tooltipRender', tooltipRender = 'tooltipRender');

            _export2('shapeSelected', shapeSelected = 'shapeSelected');

            _export2('shapeHighlight', shapeHighlight = 'shapeHighlight');

            _export2('mousemove', mousemove = 'mousemove');

            _export2('mouseup', mouseup = 'mouseup');

            _export2('mousedown', mousedown = 'mousedown');

            _export2('layerRendering', layerRendering = 'layerRendering');

            _export2('shapeRendering', shapeRendering = 'shapeRendering');

            _export2('markerRendering', markerRendering = 'markerRendering');

            _export2('markerClick', _markerClick = 'markerClick');

            _export2('markerMouseMove', markerMouseMove = 'markerMouseMove');

            _export2('dataLabelRendering', dataLabelRendering = 'dataLabelRendering');

            _export2('bubbleRendering', bubbleRendering = 'bubbleRendering');

            _export2('bubbleClick', _bubbleClick = 'bubbleClick');

            _export2('bubbleMouseMove', bubbleMouseMove = 'bubbleMouseMove');

            _export2('animationComplete', animationComplete = 'animationComplete');

            _export2('legendRendering', legendRendering = 'legendRendering');

            _export2('annotationRendering', annotationRendering = 'annotationRendering');

            _export2('itemSelection', itemSelection = 'itemSelection');

            _export2('itemHighlight', itemHighlight = 'itemHighlight');

            _export2('beforePrint', beforePrint = 'beforePrint');

            _export2('BingMap', BingMap = function () {
                function BingMap(maps) {
                    _classCallCheck(this, BingMap);

                    this.maps = maps;
                }

                _createClass(BingMap, [{
                    key: 'getBingMap',
                    value: function getBingMap(tile, key, type, language) {
                        var quadKey = '';
                        for (var i = this.maps.tileZoomLevel; i > 0; i--) {
                            var digit = 0;
                            var mask = 1 << i - 1;
                            if ((tile.x & mask) !== 0) {
                                digit++;
                            }
                            if ((tile.y & mask) !== 0) {
                                digit += 2;
                            }
                            quadKey = quadKey + '' + digit;
                        }
                        var layerType = '';
                        if (type === 'Aerial') {
                            layerType = 'A,G';
                        } else if (type === 'AerialWithLabel') {
                            layerType = 'A,G,L';
                        } else {
                            layerType = 'G,VE,BX,L,LA';
                        }
                        return 'http://ak.dynamic.t2.tiles.virtualearth.net/comp/ch/' + quadKey + '?mkt=' + language + '&ur=IN&it=' + layerType + '&shading=hill&og=45&n=z&Key=' + key;
                    }
                }]);

                return BingMap;
            }());

            _export2('ColorMapping', ColorMapping = function () {
                function ColorMapping(maps) {
                    _classCallCheck(this, ColorMapping);

                    this.maps = maps;
                }
                /**
                 * To get color based on shape settings.
                 * @private
                 */


                _createClass(ColorMapping, [{
                    key: 'getShapeColorMapping',
                    value: function getShapeColorMapping(shapeSettings, layerData, color) {
                        var colorValuePath = shapeSettings.colorValuePath ? shapeSettings.colorValuePath : shapeSettings.valuePath;
                        var equalValue = layerData[colorValuePath];
                        var colorValue = Number(equalValue);
                        var shapeColor = this.getColorByValue(shapeSettings.colorMapping, colorValue, equalValue);
                        return shapeColor ? shapeColor : color;
                    }
                }, {
                    key: 'getColorByValue',
                    value: function getColorByValue(colorMapping, colorValue, equalValue) {
                        if (isNaN(colorValue) && isNullOrUndefined(equalValue)) {
                            return null;
                        }
                        var fill = '';
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = colorMapping[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var colorMap = _step4.value;

                                if (colorMap.from && colorMap.to && colorValue >= colorMap.from && colorValue <= colorMap.to || colorMap.value === equalValue) {
                                    fill = colorMap.color;
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

                        return fill || (!colorMapping.length ? equalValue : null);
                    }
                }]);

                return ColorMapping;
            }());

            _export2('LayerPanel', LayerPanel = function () {
                function LayerPanel(map) {
                    _classCallCheck(this, LayerPanel);

                    this.tileTranslatePoint = new MapLocation(0, 0);
                    this.isMapCoordinates = true;
                    this.ajaxProcessCount = 0;
                    this.mapObject = map;
                    this.ajaxModule = new Ajax();
                    this.ajaxResponse = [];
                }
                /* tslint:disable:no-string-literal */


                _createClass(LayerPanel, [{
                    key: 'measureLayerPanel',
                    value: function measureLayerPanel() {
                        var _this28 = this;

                        var layerCollection = this.mapObject.layersCollection;
                        var areaRect = this.mapObject.mapAreaRect;
                        var secondaryEle = getElementByID(this.mapObject.element.id + '_Secondary_Element');
                        if (this.mapObject.isTileMap && secondaryEle) {
                            this.tileSvgObject = this.mapObject.renderer.createSvg({
                                id: this.mapObject.element.id + '_Tile_SVG', width: areaRect.width,
                                height: areaRect.height,
                                style: 'pointer-events:none'
                            });
                            secondaryEle.appendChild(this.tileSvgObject);
                        }
                        this.layerGroup = this.mapObject.renderer.createGroup({
                            id: this.mapObject.element.id + '_Layer_Collections',
                            'clip-path': 'url(#' + this.mapObject.element.id + '_MapArea_ClipRect)'
                        });
                        this.clipRectElement = this.mapObject.renderer.drawClipPath(new RectOption(this.mapObject.element.id + '_MapArea_ClipRect', 'transparent', { width: 1, color: 'Gray' }, 1, {
                            x: this.mapObject.isTileMap ? 0 : areaRect.x, y: this.mapObject.isTileMap ? 0 : areaRect.y,
                            width: areaRect.width, height: areaRect.height
                        }));
                        this.layerGroup.appendChild(this.clipRectElement);
                        this.mapObject.baseMapBounds = null;
                        this.mapObject.baseMapRectBounds = null;
                        this.mapObject.baseSize = null;
                        var layerCount = layerCollection.length - 1;
                        layerCollection.forEach(function (layer, index) {
                            _this28.currentLayer = layer;
                            _this28.processLayers(layer, index);
                        });
                    }
                }, {
                    key: 'processLayers',
                    value: function processLayers(layer, layerIndex) {
                        this.layerObject = this.mapObject.renderer.createGroup({
                            id: this.mapObject.element.id + '_LayerIndex_' + layerIndex
                        });
                        var eventArgs = {
                            cancel: false, name: layerRendering, index: layerIndex,
                            layer: layer, maps: this.mapObject
                        };
                        this.mapObject.trigger(layerRendering, eventArgs);
                        if (!eventArgs.cancel) {
                            if (layer.layerType !== 'Geometry') {
                                var center = new Point(this.mapObject.centerPosition.longitude, this.mapObject.centerPosition.latitude);
                                this.currentFactor = this.calculateFactor(layer);
                                if (isNullOrUndefined(this.mapObject.tileZoomLevel)) {
                                    this.mapObject.tileZoomLevel = this.mapObject.zoomSettings.zoomFactor;
                                }
                                this.mapObject.tileTranslatePoint = this.panTileMap(this.mapObject.availableSize.width, this.mapObject.availableSize.height, center);
                                this.generateTiles(this.mapObject.tileZoomLevel, this.mapObject.tileTranslatePoint);
                                if (this.mapObject.markerModule) {
                                    this.mapObject.markerModule.markerRender(this.layerObject, layerIndex, this.mapObject.tileZoomLevel);
                                }
                                if (this.mapObject.navigationLineModule) {
                                    this.layerObject.appendChild(this.mapObject.navigationLineModule.renderNavigation(this.currentLayer, this.mapObject.tileZoomLevel, layerIndex));
                                }
                                this.translateLayerElements(this.layerObject, layerIndex);
                                this.layerGroup.appendChild(this.layerObject);
                            } else {
                                if (!isNullOrUndefined(layer.shapeData) && (!isNullOrUndefined(layer.shapeData['geometries']) || !isNullOrUndefined(layer.shapeData['features']))) {
                                    var featureData = !isNullOrUndefined(layer.shapeData['geometries']) && layer.shapeData['geometries'].length > 0 ? layer.shapeData['geometries'] : layer.shapeData['features'];
                                    layer.layerData = [];
                                    var bbox = layer.shapeData['bbox'];
                                    if (!isNullOrUndefined(bbox) && layer.isBaseLayer) {
                                        this.mapObject.baseMapBounds = new GeoLocation({ min: bbox[0][1], max: bbox[1][1] }, { min: bbox[0][0], max: bbox[1][0] });
                                    } else if (isNullOrUndefined(this.mapObject.baseMapBounds) && !isCustomPath(featureData)) {
                                        this.calculateRectBounds(featureData);
                                        // if (isNullOrUndefined(this.mapObject.baseSize)) {
                                        //     let minSize: Point = convertGeoToPoint(
                                        //         this.mapObject.baseMapBounds.latitude.min,
                                        //         this.mapObject.baseMapBounds.longitude.min, this.calculateFactor(layer), layer, this.mapObject
                                        //     );
                                        //     let maxSize: Point = convertGeoToPoint(
                                        //         this.mapObject.baseMapBounds.latitude.max,
                                        //         this.mapObject.baseMapBounds.longitude.max, this.calculateFactor(layer), layer, this.mapObject
                                        //     );
                                        //     this.mapObject.baseSize = new Size(Math.abs(minSize.x - maxSize.x), Math.abs(minSize.y - maxSize.y));
                                        // }
                                    }
                                    this.calculatePathCollection(layerIndex, featureData);
                                }
                            }
                        }
                        if (!this.mapObject.isTileMap) {
                            this.mapObject.svgObject.appendChild(this.layerGroup);
                        } else if (this.tileSvgObject) {
                            this.tileSvgObject.appendChild(this.layerGroup);
                        }
                    }
                }, {
                    key: 'bubbleCalculation',
                    value: function bubbleCalculation(bubbleSettings, range) {
                        if (bubbleSettings.dataSource != null && bubbleSettings != null) {
                            if (bubbleSettings.colorValuePath == null) {
                                return;
                            }
                            for (var i = 0; i < bubbleSettings.dataSource.length; i++) {
                                var bubbledata = parseFloat(bubbleSettings.dataSource[i][bubbleSettings.valuePath]);
                                if (i !== 0) {
                                    if (bubbledata > range.max) {
                                        range.max = bubbledata;
                                    } else if (bubbledata < range.min) {
                                        range.min = bubbledata;
                                    }
                                } else {
                                    range.max = range.min = bubbledata;
                                }
                            }
                        }
                    }
                }, {
                    key: 'calculatePathCollection',
                    value: function calculatePathCollection(layerIndex, renderData) {
                        var _this29 = this;

                        this.groupElements = [];
                        if (!isCustomPath(renderData)) {
                            this.currentFactor = this.calculateFactor(this.currentLayer);
                        }
                        this.rectBounds = null;
                        var shapeSettings = this.currentLayer.shapeSettings;
                        renderData.forEach(function (geometryData, index) {
                            if (!isNullOrUndefined(geometryData['geometry']) || !isNullOrUndefined(geometryData['coordinates'])) {
                                var type = !isNullOrUndefined(geometryData['geometry']) ? geometryData['geometry']['type'] : geometryData['type'];
                                var coords = !isNullOrUndefined(geometryData['geometry']) ? geometryData['geometry']['coordinates'] : geometryData['coordinates'];
                                var data = geometryData['geometry'];
                                var properties = geometryData['properties'];
                                _this29.generatePoints(type, coords, data, properties);
                            }
                        });
                        this.currentLayer.rectBounds = this.rectBounds;
                        if (isNullOrUndefined(this.mapObject.baseMapRectBounds) && this.currentLayer.isBaseLayer) {
                            this.mapObject.baseMapRectBounds = this.rectBounds;
                        }
                        var colors = shapeSettings.palette.length > 1 ? shapeSettings.palette : getShapeColor(this.mapObject.theme);
                        var labelTemplateEle = createElement('div', {
                            id: this.mapObject.element.id + '_LayerIndex_' + layerIndex + '_Label_Template_Group',
                            className: 'template',
                            styles: 'pointer-events: none; overflow: hidden; position: absolute;' + 'top:' + this.mapObject.mapAreaRect.y + 'px;' + 'left:' + this.mapObject.mapAreaRect.x + 'px;' + 'height:' + this.mapObject.mapAreaRect.height + 'px;' + 'width:' + this.mapObject.mapAreaRect.width + 'px;'
                        });
                        for (var i = 0; i < this.currentLayer.layerData.length; i++) {
                            var k = void 0;
                            var currentShapeData = this.currentLayer.layerData[i];
                            var pathOptions = void 0;
                            var polyLineOptions = void 0;
                            var circleOptions = void 0;
                            var groupElement = void 0;
                            var path = '';
                            var points = '';
                            var fill = shapeSettings.autofill ? colors[i % colors.length] : shapeSettings.fill;
                            if (shapeSettings.colorValuePath !== null && !isNullOrUndefined(currentShapeData['property'])) {
                                k = checkShapeDataFields(this.currentLayer.dataSource, currentShapeData['property'], this.currentLayer.shapeDataPath, this.currentLayer.shapePropertyPath);
                                if (k !== null && shapeSettings.colorMapping.length === 0) {
                                    fill = this.currentLayer.dataSource[k][shapeSettings.colorValuePath];
                                } else if (currentShapeData['property'][shapeSettings.colorValuePath] && this.currentLayer.dataSource.length === 0 && shapeSettings.colorMapping.length === 0) {
                                    fill = currentShapeData['property'][shapeSettings.colorValuePath];
                                }
                            }
                            var shapeID = this.mapObject.element.id + '_LayerIndex_' + layerIndex + '_ShapeIndex_' + i + '_dataIndex_' + k;
                            fill = this.getShapeColorMapping(this.currentLayer, currentShapeData['property'], fill);
                            var eventArgs = {
                                cancel: false, name: shapeRendering, index: i,
                                data: this.currentLayer.dataSource ? this.currentLayer.dataSource[k] : null, maps: this.mapObject,
                                shape: shapeSettings, fill: fill, border: { width: shapeSettings.border.width, color: shapeSettings.border.color }
                            };
                            this.mapObject.trigger(shapeRendering, eventArgs);
                            var drawingType = !isNullOrUndefined(currentShapeData['_isMultiPolygon']) ? 'MultiPolygon' : isNullOrUndefined(currentShapeData['type']) ? currentShapeData[0]['type'] : currentShapeData['type'];
                            drawingType = drawingType === 'Polygon' || drawingType === 'MultiPolygon' ? 'Polygon' : drawingType;
                            if (this.groupElements.length < 1) {
                                groupElement = this.mapObject.renderer.createGroup({
                                    id: this.mapObject.element.id + '_LayerIndex_' + layerIndex + '_' + drawingType + '_Group', transform: ''
                                });
                                this.groupElements.push(groupElement);
                            } else {
                                for (var _i2 = 0; _i2 < this.groupElements.length; _i2++) {
                                    var ele = this.groupElements[_i2];
                                    if (ele.id.indexOf(drawingType) > -1) {
                                        groupElement = ele;
                                        break;
                                    } else if (_i2 >= this.groupElements.length - 1) {
                                        groupElement = this.mapObject.renderer.createGroup({
                                            id: this.mapObject.element.id + '_LayerIndex_' + layerIndex + '_' + drawingType + '_Group'
                                        });
                                        this.groupElements.push(groupElement);
                                        break;
                                    }
                                }
                            }
                            var pathEle = void 0;
                            switch (drawingType) {
                                case 'Polygon':
                                    if (!currentShapeData['_isMultiPolygon']) {
                                        path += 'M' + currentShapeData[0]['point']['x'] + ' ' + currentShapeData[0]['point']['y'];
                                        currentShapeData.map(function (shapeData) {
                                            path += ' L ' + shapeData['point']['x'] + ' ' + shapeData['point']['y'];
                                        });
                                    } else {
                                        path = this.generateMultiPolygonPath(currentShapeData);
                                    }
                                    path += ' z ';
                                    if (path.length > 3) {
                                        pathOptions = new PathOption(shapeID, eventArgs.fill, eventArgs.border.width, eventArgs.border.color, shapeSettings.opacity, shapeSettings.dashArray, path);
                                        pathEle = this.mapObject.renderer.drawPath(pathOptions);
                                    }
                                    break;
                                case 'LineString':
                                    currentShapeData.map(function (lineData) {
                                        points += lineData['point']['x'] + ' , ' + lineData['point']['y'] + ' ';
                                    });
                                    polyLineOptions = new PolylineOption(shapeID, points, eventArgs.fill, eventArgs.border.width, eventArgs.border.color, shapeSettings.opacity, shapeSettings.dashArray);
                                    pathEle = this.mapObject.renderer.drawPolyline(polyLineOptions);
                                    break;
                                case 'Point':
                                    var pointData = currentShapeData['point'];
                                    circleOptions = new CircleOption(shapeID, eventArgs.fill, eventArgs.border, shapeSettings.opacity, pointData['x'], pointData['y'], shapeSettings.circleRadius, null);
                                    pathEle = this.mapObject.renderer.drawCircle(circleOptions);
                                    break;
                                case 'Path':
                                    path = currentShapeData['point'];
                                    pathOptions = new PathOption(shapeID, eventArgs.fill, eventArgs.border.width, eventArgs.border.color, shapeSettings.opacity, shapeSettings.dashArray, path);
                                    pathEle = this.mapObject.renderer.drawPath(pathOptions);
                                    break;
                            }
                            if (!isNullOrUndefined(pathEle)) {
                                pathEle.setAttribute('aria-label', !isNullOrUndefined(currentShapeData['property']) ? currentShapeData['property'][this.currentLayer.shapePropertyPath] : '');
                                pathEle.setAttribute('tabindex', (this.mapObject.tabIndex + i + 2).toString());
                                groupElement.appendChild(pathEle);
                            }
                        }
                        var bubbleG = void 0;
                        if (this.currentLayer.bubbleSettings.length && this.mapObject.bubbleModule) {
                            (function () {
                                var length = _this29.currentLayer.bubbleSettings.length;
                                var bubble = void 0;

                                var _loop = function _loop(j) {
                                    bubble = _this29.currentLayer.bubbleSettings[j];
                                    bubbleG = _this29.mapObject.renderer.createGroup({
                                        id: _this29.mapObject.element.id + '_LayerIndex_' + layerIndex + '_bubble_Group_' + j
                                    });
                                    var range = { min: 0, max: 0 };
                                    _this29.bubbleCalculation(bubble, range);
                                    bubble.dataSource.map(function (bubbleData, i) {
                                        _this29.renderBubble(_this29.currentLayer, bubbleData, colors[i % colors.length], range, j, i, bubbleG, layerIndex, bubble);
                                    });
                                    _this29.groupElements.push(bubbleG);
                                };

                                for (var j = 0; j < length; j++) {
                                    _loop(j);
                                }
                            })();
                        }
                        var group = this.mapObject.renderer.createGroup({
                            id: this.mapObject.element.id + '_layerIndex_' + layerIndex + '_dataLableIndex_Group', style: 'pointer-events: none;'
                        });
                        if (this.mapObject.dataLabelModule && this.currentLayer.dataLabelSettings.visible) {
                            renderData.map(function (currentShapeData, i) {
                                _this29.renderLabel(_this29.currentLayer, layerIndex, currentShapeData, group, i, labelTemplateEle);
                            });
                            this.groupElements.push(group);
                        }
                        if (this.mapObject.navigationLineModule) {
                            this.groupElements.push(this.mapObject.navigationLineModule.renderNavigation(this.currentLayer, this.currentFactor, layerIndex));
                        }
                        this.groupElements.map(function (element) {
                            _this29.layerObject.appendChild(element);
                        });
                        if (this.mapObject.markerModule) {
                            this.mapObject.markerModule.markerRender(this.layerObject, layerIndex, this.currentFactor);
                        }
                        this.translateLayerElements(this.layerObject, layerIndex);
                        this.layerGroup.appendChild(this.layerObject);
                    }
                }, {
                    key: 'renderLabel',
                    value: function renderLabel(layer, layerIndex, shape, group, shapeIndex, labelTemplateEle) {
                        this.mapObject.dataLabelModule.renderLabel(layer, layerIndex, shape, layer.layerData, group, labelTemplateEle, shapeIndex);
                    }
                }, {
                    key: 'generateMultiPolygonPath',
                    value: function generateMultiPolygonPath(currentShapeData) {
                        var path = '';
                        var shape = void 0;
                        for (var j = 0; j < currentShapeData.length; j++) {
                            path += 'M' + currentShapeData[j][0]['point']['x'] + ' ' + currentShapeData[j][0]['point']['y'];
                            shape = currentShapeData[j];
                            shape.map(function (shapeData) {
                                path += ' L ' + shapeData['point']['x'] + ' ' + shapeData['point']['y'];
                            });
                        }
                        return path;
                    }
                }, {
                    key: 'renderBubble',
                    value: function renderBubble(layer, bubbleData, color, range, bubbleIndex, dataIndex, group, layerIndex, bubbleSettings) {
                        if (isNullOrUndefined(this.mapObject.bubbleModule) || !bubbleSettings.visible) {
                            return null;
                        }
                        color = bubbleSettings.fill ? bubbleSettings.fill : color;
                        this.mapObject.bubbleModule.id = this.mapObject.element.id + '_LayerIndex_' + layerIndex + '_BubbleIndex_' + bubbleIndex + '_dataIndex_' + dataIndex;
                        this.mapObject.bubbleModule.renderBubble(bubbleSettings, bubbleData, color, range, bubbleIndex, dataIndex, layerIndex, layer, group);
                    }
                }, {
                    key: 'getShapeColorMapping',
                    value: function getShapeColorMapping(layer, shape, color) {
                        color = color ? color : layer.shapeSettings.fill;
                        if (layer.shapeSettings.colorMapping.length === 0 && isNullOrUndefined(layer.dataSource)) {
                            return color;
                        }
                        var index = checkShapeDataFields(layer.dataSource, shape, layer.shapeDataPath, layer.shapePropertyPath);
                        var colorMapping = new ColorMapping(this.mapObject);
                        if (isNullOrUndefined(layer.dataSource[index])) {
                            return color;
                        }
                        return colorMapping.getShapeColorMapping(layer.shapeSettings, layer.dataSource[index], color);
                    }
                }, {
                    key: 'generatePoints',
                    value: function generatePoints(type, coordinates, data, properties) {
                        var _this30 = this;

                        var latitude = void 0;
                        var longitude = void 0;
                        var newData = [];
                        switch (type.toLowerCase()) {
                            case 'polygon':
                                newData = this.calculatePolygonBox(coordinates[0], data, properties);
                                if (newData.length > 0) {
                                    newData['property'] = properties;
                                    newData['type'] = type;
                                    newData['_isMultiPolygon'] = false;
                                    this.currentLayer.layerData.push(newData);
                                }
                                break;
                            case 'multipolygon':
                                var multiPolygonDatas = [];
                                for (var i = 0; i < coordinates.length; i++) {
                                    newData = this.calculatePolygonBox(coordinates[i][0], data, properties);
                                    if (newData.length > 0) {
                                        multiPolygonDatas.push(newData);
                                    }
                                }
                                multiPolygonDatas['property'] = properties;
                                multiPolygonDatas['type'] = type;
                                multiPolygonDatas['_isMultiPolygon'] = true;
                                this.currentLayer.layerData.push(multiPolygonDatas);
                                break;
                            case 'linestring':
                                coordinates.map(function (points, index) {
                                    latitude = points[1];
                                    longitude = points[0];
                                    var point = convertGeoToPoint(latitude, longitude, _this30.currentFactor, _this30.currentLayer, _this30.mapObject);
                                    newData.push({
                                        point: point, lat: latitude, lng: longitude
                                    });
                                });
                                newData['property'] = properties;
                                newData['type'] = type;
                                this.currentLayer.layerData.push(newData);
                                break;
                            case 'point':
                                latitude = coordinates[1];
                                longitude = coordinates[0];
                                var point = convertGeoToPoint(latitude, longitude, this.currentFactor, this.currentLayer, this.mapObject);
                                this.currentLayer.layerData.push({
                                    point: point, type: type, lat: latitude, lng: longitude, property: properties
                                });
                                break;
                            case 'path':
                                this.currentLayer.layerData.push({
                                    point: data['d'], type: type, property: properties
                                });
                                break;
                        }
                    }
                }, {
                    key: 'calculateFactor',
                    value: function calculateFactor(layer) {
                        var horFactor = void 0;
                        var verFactor = 1;
                        var divide = 10;
                        var exp = 'e+1';
                        var bounds = this.mapObject.baseMapBounds;
                        var mapSize = new Size(this.mapObject.mapAreaRect.width, this.mapObject.mapAreaRect.height - 5);
                        var mapHeight = void 0;
                        var mapWidth = void 0;
                        if (bounds) {
                            var start = convertGeoToPoint(bounds.latitude.min, bounds.longitude.min, null, layer, this.mapObject);
                            var end = convertGeoToPoint(bounds.latitude.max, bounds.longitude.max, null, layer, this.mapObject);
                            mapHeight = end.y - start.y;
                            mapWidth = end.x - start.x;
                        } else {
                            mapHeight = mapWidth = 500;
                        }
                        if (mapHeight < mapSize.height) {
                            horFactor = parseFloat(Math.abs(Number(mapSize.height / Number(mapHeight.toString() + exp)) * 100).toString().split('.')[0]) / divide;
                        } else {
                            horFactor = mapSize.height / mapHeight;
                        }
                        if (mapWidth < mapSize.width) {
                            verFactor = parseFloat(Math.abs(Number(mapSize.width / Number(mapWidth.toString() + exp)) * 100).toString().split('.')[0]) / divide;
                        } else {
                            verFactor = mapSize.width / mapWidth;
                        }
                        return Math.min(verFactor, horFactor);
                    }
                }, {
                    key: 'translateLayerElements',
                    value: function translateLayerElements(layerElement, index) {
                        var childNode = void 0;
                        if (!isNullOrUndefined(this.mapObject.baseMapRectBounds)) {
                            var duration = this.currentLayer.animationDuration;
                            var animate$$1 = duration !== 0 || isNullOrUndefined(this.mapObject.zoomModule);
                            var translate = getTranslate(this.mapObject, this.currentLayer, animate$$1);
                            var scale = this.mapObject.previousScale = translate['scale'];
                            var location = this.mapObject.previousPoint = translate['location'];
                            this.mapObject.baseTranslatePoint = this.mapObject.translatePoint = location;
                            this.mapObject.baseScale = this.mapObject.scale = scale;
                            for (var i = 0; i < layerElement.childElementCount; i++) {
                                childNode = layerElement.childNodes[i];
                                if (!(childNode.id.indexOf('_Markers_Group') > -1) && !(childNode.id.indexOf('_bubble_Group') > -1) && !(childNode.id.indexOf('_dataLableIndex_Group') > -1)) {
                                    var transform = 'scale( ' + scale + ' ) ' + 'translate( ' + location.x + ' ' + location.y + ' ) ';
                                    childNode.setAttribute('transform', transform);
                                    if (duration > 0 && !isNullOrUndefined(this.mapObject.zoomModule)) {
                                        translate = getTranslate(this.mapObject, this.currentLayer);
                                        this.mapObject.scale = translate['scale'];
                                        this.mapObject.translatePoint = translate['location'];
                                    }
                                }
                            }
                        } else if (this.mapObject.isTileMap) {
                            for (var _i3 = 0; _i3 < layerElement.childElementCount; _i3++) {
                                childNode = layerElement.childNodes[_i3];
                                if (!(childNode.id.indexOf('_Markers_Group') > -1) && !(childNode.id.indexOf('_bubble_Group') > -1) && !(childNode.id.indexOf('_dataLableIndex_Group') > -1) && !(childNode.id.indexOf('_line_Group') > -1)) {
                                    var _transform = 'scale( ' + this.mapObject.scale + ' ) ' + 'translate( ' + this.mapObject.translatePoint.x + ' ' + this.mapObject.translatePoint.y + ' ) ';
                                    childNode.setAttribute('transform', _transform);
                                }
                            }
                        }
                    }
                }, {
                    key: 'calculateRectBounds',
                    value: function calculateRectBounds(layerData) {
                        var _this31 = this;

                        layerData.forEach(function (obj, index) {
                            if (!isNullOrUndefined(obj['geometry']) || !isNullOrUndefined(obj['coordinates'])) {
                                var type = !isNullOrUndefined(obj['geometry']) ? obj['geometry']['type'] : obj['type'];
                                var coordinates = !isNullOrUndefined(obj['geometry']) ? obj['geometry']['coordinates'] : obj['coordinates'];
                                switch (type.toLowerCase()) {
                                    case 'polygon':
                                        _this31.calculateRectBox(coordinates[0]);
                                        break;
                                    case 'multipolygon':
                                        coordinates.map(function (point, index) {
                                            _this31.calculateRectBox(point[0]);
                                        });
                                        break;
                                }
                            }
                        });
                    }
                }, {
                    key: 'calculatePolygonBox',
                    value: function calculatePolygonBox(coordinates, data, properties) {
                        var _this32 = this;

                        var newData = [];
                        var bounds = this.mapObject.baseMapBounds;
                        coordinates.map(function (currentPoint, index) {
                            var latitude = currentPoint[1];
                            var longitude = currentPoint[0];
                            if (longitude >= bounds.longitude.min && longitude <= bounds.longitude.max && latitude >= bounds.latitude.min && latitude <= bounds.latitude.max) {
                                var point = convertGeoToPoint(latitude, longitude, _this32.currentFactor, _this32.currentLayer, _this32.mapObject);
                                if (isNullOrUndefined(_this32.rectBounds)) {
                                    _this32.rectBounds = { min: { x: point.x, y: point.y }, max: { x: point.x, y: point.y } };
                                } else {
                                    _this32.rectBounds['min']['x'] = Math.min(_this32.rectBounds['min']['x'], point.x);
                                    _this32.rectBounds['min']['y'] = Math.min(_this32.rectBounds['min']['y'], point.y);
                                    _this32.rectBounds['max']['x'] = Math.max(_this32.rectBounds['max']['x'], point.x);
                                    _this32.rectBounds['max']['y'] = Math.max(_this32.rectBounds['max']['y'], point.y);
                                }
                                newData.push({
                                    point: point,
                                    lat: latitude,
                                    lng: longitude
                                });
                            }
                        });
                        return newData;
                    }
                }, {
                    key: 'calculateRectBox',
                    value: function calculateRectBox(coordinates) {
                        var _this33 = this;

                        coordinates.forEach(function (currentCoords) {
                            if (isNullOrUndefined(_this33.mapObject.baseMapBounds)) {
                                _this33.mapObject.baseMapBounds = new GeoLocation({ min: currentCoords[1], max: currentCoords[1] }, { min: currentCoords[0], max: currentCoords[0] });
                            } else {
                                _this33.mapObject.baseMapBounds.latitude.min = Math.min(_this33.mapObject.baseMapBounds.latitude.min, currentCoords[1]);
                                _this33.mapObject.baseMapBounds.latitude.max = Math.max(_this33.mapObject.baseMapBounds.latitude.max, currentCoords[1]);
                                _this33.mapObject.baseMapBounds.longitude.min = Math.min(_this33.mapObject.baseMapBounds.longitude.min, currentCoords[0]);
                                _this33.mapObject.baseMapBounds.longitude.max = Math.max(_this33.mapObject.baseMapBounds.longitude.max, currentCoords[0]);
                            }
                        });
                    }
                }, {
                    key: 'generateTiles',
                    value: function generateTiles(zoomLevel, tileTranslatePoint) {
                        var userLang = this.mapObject.locale;
                        var size = this.mapObject.availableSize;
                        this.tiles = [];
                        var xcount = void 0;
                        var ycount = void 0;
                        xcount = ycount = Math.pow(2, zoomLevel);
                        var width = size.width / 2;
                        var height = size.height / 2;
                        var baseLayer = this.mapObject.layers[this.mapObject.baseLayerIndex];
                        this.urlTemplate = baseLayer.urlTemplate;
                        var endY = Math.min(ycount, (-tileTranslatePoint.y + size.height) / 256 + 1);
                        var endX = Math.min(xcount, (-tileTranslatePoint.x + size.width) / 256 + 1);
                        var startX = -(tileTranslatePoint.x + 256) / 256;
                        var startY = -(tileTranslatePoint.y + 256) / 256;
                        var bing = new BingMap(this.mapObject);
                        for (var i = Math.round(startX); i < Math.round(endX); i++) {
                            for (var j = Math.round(startY); j < Math.round(endY); j++) {
                                var x = 256 * i + tileTranslatePoint.x;
                                var y = 256 * j + tileTranslatePoint.y;
                                if (x > -256 && x <= size.width && y > -256 && y < size.height) {
                                    if (i >= 0 && j >= 0) {
                                        var tile = new Tile(i, j);
                                        tile.left = x;
                                        tile.top = y;
                                        if (baseLayer.layerType === 'Bing') {
                                            tile.src = bing.getBingMap(tile, baseLayer.key, baseLayer.bingMapType, userLang);
                                        } else {
                                            tile.src = this.urlTemplate.replace('level', zoomLevel.toString()).replace('tileX', tile.x.toString()).replace('tileY', tile.y.toString());
                                        }
                                        this.tiles.push(tile);
                                    }
                                }
                            }
                        }
                        var proxTiles = extend([], this.tiles, [], true);
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = this.mapObject.layers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var layer = _step5.value;

                                if (!(layer.type === 'SubLayer' && layer.visible)) {
                                    continue;
                                }
                                if (layer.layerType === 'OSM' || layer.layerType === 'Bing') {
                                    var _iteratorNormalCompletion6 = true;
                                    var _didIteratorError6 = false;
                                    var _iteratorError6 = undefined;

                                    try {
                                        for (var _iterator6 = proxTiles[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                            var baseTile = _step6.value;

                                            var subtile = extend(baseTile, {}, {}, true);
                                            if (layer.layerType === 'Bing') {
                                                subtile.src = bing.getBingMap(subtile, layer.key, layer.bingMapType, userLang);
                                            } else {
                                                subtile.src = layer.urlTemplate.replace('level', zoomLevel.toString()).replace('tileX', baseTile.x.toString()).replace('tileY', baseTile.y.toString());
                                            }
                                            this.tiles.push(subtile);
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

                        this.arrangeTiles();
                    }
                }, {
                    key: 'arrangeTiles',
                    value: function arrangeTiles() {
                        var htmlString = this.templateCompiler(this.tiles);
                        if (getElementByID(this.mapObject.element.id + '_tile_parent')) {
                            document.getElementById(this.mapObject.element.id + '_tile_parent').innerHTML = htmlString;
                        }
                    }
                }, {
                    key: 'templateCompiler',
                    value: function templateCompiler(tiles) {
                        var tileElment = '';
                        var _iteratorNormalCompletion7 = true;
                        var _didIteratorError7 = false;
                        var _iteratorError7 = undefined;

                        try {
                            for (var _iterator7 = tiles[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                var tile = _step7.value;

                                tileElment += '<div><div style="position:absolute;left: ' + tile.left + 'px;top: ' + tile.top + 'px;height: ' + tile.height + 'px;width: ' + tile.width + 'px;"><img src="' + tile.src + '"></img></div></div>';
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

                        return tileElment;
                    }
                }, {
                    key: 'panTileMap',
                    value: function panTileMap(factorX, factorY, centerPosition) {
                        var level = this.mapObject.tileZoomLevel;
                        var padding = 20;
                        var x = void 0;
                        var y = void 0;
                        var totalSize = Math.pow(2, level) * 256;
                        x = factorX / 2 - totalSize / 2;
                        y = factorY / 2 - totalSize / 2;
                        var position = convertTileLatLongToPoint(centerPosition, level, { x: x, y: y }, this.isMapCoordinates);
                        x -= position.x - factorX / 2;
                        y = y - (position.y - factorY / 2) + padding;
                        this.mapObject.scale = Math.pow(2, level - 1);
                        this.mapObject.translatePoint = new Point((x - 0.5 * this.mapObject.scale) / this.mapObject.scale, (y - 0.5 * this.mapObject.scale) / this.mapObject.scale);
                        return new Point(x, y);
                    }
                }]);

                return LayerPanel;
            }());

            _export2('Annotations', Annotations = function () {
                function Annotations(map) {
                    _classCallCheck(this, Annotations);

                    this.map = map;
                }

                _createClass(Annotations, [{
                    key: 'renderAnnotationElements',
                    value: function renderAnnotationElements() {
                        var _this34 = this;

                        var secondaryID = this.map.element.id + '_Secondary_Element';
                        var annotationGroup = createElement('div', { id: this.map.element.id + '_Annotations_Group' });
                        annotationGroup.style.position = 'absolute';
                        annotationGroup.style.top = '0px';
                        annotationGroup.style.left = '0px';
                        this.map.annotations.map(function (annotation, index) {
                            if (annotation.content !== null) {
                                _this34.createAnnotationTemplate(annotationGroup, annotation, index);
                            }
                        });
                        if (annotationGroup.childElementCount > 0 && !isNullOrUndefined(getElementByID(secondaryID))) {
                            getElementByID(secondaryID).appendChild(annotationGroup);
                        }
                    }
                }, {
                    key: 'createAnnotationTemplate',
                    value: function createAnnotationTemplate(parentElement, annotation, annotationIndex) {
                        var left = void 0;
                        var top = void 0;
                        var templateFn = void 0;
                        var map = this.map;
                        var templateElement = void 0;
                        var availSize = map.availableSize;
                        var id = map.element.id + '_Annotation_' + annotationIndex;
                        var childElement = createElement('div', {
                            id: map.element.id + '_Annotation_' + annotationIndex, styles: 'position: absolute; z-index:' + annotation.zIndex + ';'
                        });
                        var argsData = {
                            cancel: false, name: annotationRendering, content: annotation.content,
                            annotation: annotation
                        };
                        this.map.trigger(annotationRendering, argsData);
                        templateFn = getTemplateFunction(argsData.content);
                        if (templateFn && templateFn(this.map).length) {
                            templateElement = templateFn(this.map);
                            while (templateElement.length > 0) {
                                childElement.appendChild(templateElement[0]);
                            }
                        } else {
                            childElement.appendChild(createElement('div', {
                                innerHTML: argsData.content
                            }));
                        }
                        var offset = getElementOffset(childElement.cloneNode(true), map.element);
                        var elementRect = map.element.getBoundingClientRect();
                        var bounds = map.svgObject.getBoundingClientRect();
                        left = Math.abs(bounds.left - elementRect.left);
                        top = Math.abs(bounds.top - elementRect.top);
                        var annotationXValue = annotation.x.indexOf('%') > -1 ? availSize.width / 100 * parseFloat(annotation.x) : parseFloat(annotation.x);
                        var annotationYValue = annotation.y.indexOf('%') > -1 ? availSize.height / 100 * parseFloat(annotation.y) : parseFloat(annotation.y);
                        left = annotation.horizontalAlignment === 'None' ? left + annotationXValue : left;
                        top = annotation.verticalAlignment === 'None' ? top + annotationYValue : top;
                        switch (annotation.verticalAlignment) {
                            case 'Near':
                                top = top + annotationYValue;
                                break;
                            case 'Center':
                                top = top + annotationYValue + (bounds.height / 2 - offset.height / 2);
                                break;
                            case 'Far':
                                top = top + bounds.height + annotationYValue - offset.height;
                                break;
                        }
                        switch (annotation.horizontalAlignment) {
                            case 'Near':
                                left = left + annotationXValue;
                                break;
                            case 'Center':
                                left = left + annotationXValue + (bounds.width / 2 - offset.width / 2);
                                break;
                            case 'Far':
                                left = left + bounds.width + annotationXValue - offset.width;
                                break;
                        }
                        childElement.style.left = left + 'px';
                        childElement.style.top = top + 'px';
                        parentElement.appendChild(childElement);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'Annotations';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(map) {
                        // Destroy method performed here
                    }
                }]);

                return Annotations;
            }());

            ExportUtils = function () {
                /**
                 * Constructor for Maps
                 * @param control
                 */
                function ExportUtils(control) {
                    _classCallCheck(this, ExportUtils);

                    this.control = control;
                }
                /**
                 * To print the Maps
                 * @param elements
                 */


                _createClass(ExportUtils, [{
                    key: 'print',
                    value: function print(elements) {
                        this.printWindow = window.open('', 'print', 'height=' + window.outerHeight + ',width=' + window.outerWidth + ',tabbar=no');
                        this.printWindow.moveTo(0, 0);
                        this.printWindow.resizeTo(screen.availWidth, screen.availHeight);
                        var argsData = {
                            cancel: false, htmlContent: this.getHTMLContent(elements), name: beforePrint
                        };
                        this.control.trigger(beforePrint, argsData);
                        if (!argsData.cancel) {
                            _print(argsData.htmlContent, this.printWindow);
                        }
                    }
                }, {
                    key: 'getHTMLContent',
                    value: function getHTMLContent(elements) {
                        var div = createElement('div');
                        if (elements) {
                            if (elements instanceof Array) {
                                elements.forEach(function (value) {
                                    div.appendChild(getElement(value).cloneNode(true));
                                });
                            } else if (elements instanceof Element) {
                                div.appendChild(elements.cloneNode(true));
                            } else {
                                div.appendChild(getElement(elements).cloneNode(true));
                            }
                        } else {
                            div.appendChild(this.control.element.cloneNode(true));
                        }
                        return div;
                    }
                }, {
                    key: 'export',
                    value: function _export(type, fileName, orientation) {
                        var _this35 = this;

                        var element = createElement('canvas', {
                            id: 'ej2-canvas',
                            attrs: {
                                'width': this.control.availableSize.width.toString(),
                                'height': this.control.availableSize.height.toString()
                            }
                        });
                        var isDownload = !(Browser.userAgent.toString().indexOf('HeadlessChrome') > -1);
                        orientation = isNullOrUndefined(orientation) ? PdfPageOrientation.Landscape : orientation;
                        var svgData = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + this.control.svgObject.outerHTML + '</svg>';
                        var url = window.URL.createObjectURL(new Blob(type === 'SVG' ? [svgData] : [new XMLSerializer().serializeToString(this.control.svgObject)], { type: 'image/svg+xml' }));
                        if (type === 'SVG') {
                            this.triggerDownload(fileName, type, url, isDownload);
                        } else {
                            var image = new Image();
                            var ctx = element.getContext('2d');
                            image.onload = function () {
                                ctx.drawImage(image, 0, 0);
                                window.URL.revokeObjectURL(url);
                                if (type === 'PDF') {
                                    var _document = new PdfDocument();
                                    var imageString = element.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
                                    _document.pageSettings.orientation = orientation;
                                    imageString = imageString.slice(imageString.indexOf(',') + 1);
                                    _document.pages.add().graphics.drawImage(new PdfBitmap(imageString), 0, 0, _this35.control.availableSize.width - 60, _this35.control.availableSize.height);
                                    if (isDownload) {
                                        _document.save(fileName + '.pdf');
                                        _document.destroy();
                                    }
                                } else {
                                    _this35.triggerDownload(fileName, type, element.toDataURL('image/png').replace('image/png', 'image/octet-stream'), isDownload);
                                }
                            };
                            image.src = url;
                        }
                    }
                }, {
                    key: 'triggerDownload',
                    value: function triggerDownload(fileName, type, url, isDownload) {
                        createElement('a', {
                            attrs: {
                                'download': fileName + '.' + type.toLocaleLowerCase(),
                                'href': url
                            }
                        }).dispatchEvent(new MouseEvent(isDownload ? 'click' : 'move', {
                            view: window,
                            bubbles: false,
                            cancelable: true
                        }));
                    }
                }]);

                return ExportUtils;
            }();

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export2('Maps', Maps = function (_Component) {
                _inherits(Maps, _Component);

                /**
                 * Constructor for creating the widget
                 */
                function Maps(options, element) {
                    _classCallCheck(this, Maps);

                    var _this36 = _possibleConstructorReturn(this, (Maps.__proto__ || Object.getPrototypeOf(Maps)).call(this, options, element));

                    /**
                     * Check layer whether is normal or tile
                     * @private
                     */
                    _this36.isTileMap = false;
                    /** @private */
                    _this36.baseSize = new Size(0, 0);
                    /** @private */
                    _this36.translatePoint = new Point(0, 0);
                    /** @private */
                    _this36.baseTranslatePoint = new Point(0, 0);
                    /** @private */
                    _this36.tileTranslatePoint = new Point(0, 0);
                    /** @private */
                    _this36.baseTileTranslatePoint = new Point(0, 0);
                    /** @private */
                    _this36.isDevice = Browser.isDevice;
                    return _this36;
                }
                /**
                 * Gets the localized label by locale keyword.
                 * @param  {string} key
                 * @return {string}
                 */


                _createClass(Maps, [{
                    key: 'getLocalizedLabel',
                    value: function getLocalizedLabel(key) {
                        return this.localeObject.getConstant(key);
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        this.trigger(load, { maps: this });
                        this.themeEffect();
                        this.initPrivateVariable();
                        this.unWireEVents();
                        this.createSVG();
                        this.wireEVents();
                        this.setCulture();
                    }
                }, {
                    key: 'setTextStyle',
                    value: function setTextStyle(theme, font) {
                        font.color = font.color || theme.color;
                        font.size = font.size || theme.size;
                        font.fontFamily = font.fontFamily || theme.fontFamily;
                        font.fontStyle = font.fontStyle || theme.fontStyle;
                        font.fontWeight = font.fontWeight || theme.fontWeight;
                    }
                }, {
                    key: 'themeEffect',
                    value: function themeEffect() {
                        switch (this.theme) {
                            case 'Material':
                                this.setTextStyle(Theme.mapsTitleFont, this.titleSettings.textStyle);
                                this.setTextStyle(Theme.mapsSubTitleFont, this.titleSettings.subtitleSettings.textStyle);
                                this.setTextStyle(Theme.legendLabelFont, this.legendSettings.textStyle);
                                this.setTextStyle(Theme.legendTitleFont, this.legendSettings.textStyle);
                                this.setLabelFont(this.layers, Theme.dataLabelFont);
                                break;
                            case 'Bootstrap':
                                this.setTextStyle(BootstrapTheme.mapsTitleFont, this.titleSettings.textStyle);
                                this.setTextStyle(BootstrapTheme.mapsSubTitleFont, this.titleSettings.subtitleSettings.textStyle);
                                this.setTextStyle(BootstrapTheme.legendLabelFont, this.legendSettings.textStyle);
                                this.setTextStyle(BootstrapTheme.legendTitleFont, this.legendSettings.textStyle);
                                this.setLabelFont(this.layers, BootstrapTheme.dataLabelFont);
                                break;
                            case 'Fabric':
                                this.setTextStyle(FabricTheme.mapsTitleFont, this.titleSettings.textStyle);
                                this.setTextStyle(FabricTheme.mapsSubTitleFont, this.titleSettings.subtitleSettings.textStyle);
                                this.setTextStyle(FabricTheme.legendLabelFont, this.legendSettings.textStyle);
                                this.setTextStyle(FabricTheme.legendTitleFont, this.legendSettings.textStyle);
                                this.setLabelFont(this.layers, FabricTheme.dataLabelFont);
                                break;
                            case 'Highcontrast':
                                this.setTextStyle(HighContrastTheme.mapsTitleFont, this.titleSettings.textStyle);
                                this.setTextStyle(HighContrastTheme.mapsSubTitleFont, this.titleSettings.subtitleSettings.textStyle);
                                this.setTextStyle(HighContrastTheme.legendLabelFont, this.legendSettings.textStyle);
                                this.setTextStyle(HighContrastTheme.legendTitleFont, this.legendSettings.textStyle);
                                this.setLabelFont(this.layers, HighContrastTheme.dataLabelFont);
                                break;
                        }
                    }
                }, {
                    key: 'setLabelFont',
                    value: function setLabelFont(layers, style) {
                        var _iteratorNormalCompletion8 = true;
                        var _didIteratorError8 = false;
                        var _iteratorError8 = undefined;

                        try {
                            for (var _iterator8 = layers[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                var layer = _step8.value;

                                this.setTextStyle(style, layer.dataLabelSettings.textStyle);
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
                    key: 'render',
                    value: function render() {
                        this.findBaseAndSubLayers();
                        this.createSecondaryElement();
                        this.addTabIndex();
                        this.renderBorder();
                        this.renderTitle(this.titleSettings, 'title', null, null);
                        this.renderArea();
                        this.processRequestJsonData();
                    }
                }, {
                    key: 'processRequestJsonData',
                    value: function processRequestJsonData() {
                        var _this37 = this;

                        var length = this.layersCollection.length - 1;
                        this.serverProcess = { request: 0, response: 0 };
                        this.layersCollection.forEach(function (layer, layerIndex) {
                            if (layer.shapeData instanceof DataManager) {
                                _this37.serverProcess['request']++;
                                var dataModule = layer.shapeData;
                                var queryModule = layer.query instanceof Query ? layer.query : new Query();
                                var dataManager = dataModule.executeQuery(queryModule);
                                dataManager.then(function (e) {
                                    _this37.processResponseJsonData('DataManager', e, layer);
                                });
                            } else if (layer.shapeData instanceof MapAjax) {
                                _this37.serverProcess['request']++;
                                var mapAjax = layer.shapeData;
                                var xhr = new XMLHttpRequest();
                                xhr.open('GET', mapAjax.url, true);
                                xhr.addEventListener('load', function () {
                                    _this37.processResponseJsonData('Ajax', xhr.responseText, layer);
                                });
                                xhr.send(mapAjax.sendData);
                            }
                            if (_this37.serverProcess['request'] === _this37.serverProcess['response'] && length === layerIndex) {
                                _this37.processResponseJsonData(null);
                            }
                        });
                    }
                }, {
                    key: 'processResponseJsonData',
                    value: function processResponseJsonData(type, data, layer) {
                        if (type) {
                            this.serverProcess['response']++;
                            layer.shapeData = type === 'DataManager' ? !isNullOrUndefined(data['result']) ? data['result'] : data['actual'] : JSON.parse(data);
                        }
                        if (!isNullOrUndefined(type) && this.serverProcess['request'] === this.serverProcess['response']) {
                            var collection = this.layersCollection;
                            this.layersCollection = [];
                            for (var i = 0; i < collection.length; i++) {
                                if (collection[i].isBaseLayer) {
                                    this.layersCollection.push(collection[i]);
                                }
                            }
                            for (var j = 0; j < collection.length; j++) {
                                if (!collection[j].isBaseLayer) {
                                    this.layersCollection.push(collection[j]);
                                }
                            }
                            this.renderMap();
                        } else if (isNullOrUndefined(type)) {
                            this.renderMap();
                        }
                    }
                }, {
                    key: 'renderMap',
                    value: function renderMap() {
                        if (this.legendModule && this.legendSettings.visible) {
                            this.legendModule.renderLegend();
                        }
                        this.createTile();
                        if (this.zoomSettings.enable && this.zoomModule) {
                            this.zoomModule.createZoomingToolbars();
                        }
                        this.mapLayerPanel.measureLayerPanel();
                        this.element.appendChild(this.svgObject);
                        //this.setSecondaryElementPosition();
                        this.arrangeTemplate();
                        if (this.annotationsModule) {
                            this.annotationsModule.renderAnnotationElements();
                        }
                        this.zoomingChange();
                        this.trigger(loaded, { maps: this });
                    }
                }, {
                    key: 'renderArea',
                    value: function renderArea() {
                        var rect = new RectOption(this.element.id + '_MapAreaBorder', this.mapsArea.background, this.mapsArea.border, 1, this.mapAreaRect);
                        this.svgObject.appendChild(this.renderer.drawRectangle(rect));
                    }
                }, {
                    key: 'addTabIndex',
                    value: function addTabIndex() {
                        this.element.setAttribute('aria-label', this.description || 'Maps Element');
                        this.element.setAttribute('tabindex', this.tabIndex.toString());
                    }
                }, {
                    key: 'zoomingChange',
                    value: function zoomingChange() {
                        var left = void 0;
                        var top = void 0;
                        if (getElementByID(this.element.id + '_Layer_Collections') && this.zoomModule) {
                            this.zoomModule.layerCollectionEle = getElementByID(this.element.id + '_Layer_Collections');
                        }
                        if (this.isTileMap && getElementByID(this.element.id + '_Tile_SVG') && getElementByID(this.element.id + '_tile_parent')) {
                            var tileRect = getElementByID(this.element.id + '_tile_parent').getBoundingClientRect();
                            var tileSvgRect = getElementByID(this.element.id + '_Tile_SVG').getBoundingClientRect();
                            left = tileRect.left - tileSvgRect.left;
                            top = tileRect.top - tileSvgRect.top;
                            getElementByID(this.element.id + '_Tile_SVG').setAttribute('transform', 'translate(' + left + ' ' + top + ')');
                            var markerTemplateElements = document.getElementsByClassName('template');
                            if (!isNullOrUndefined(markerTemplateElements) && markerTemplateElements.length > 0) {
                                for (var i = 0; i < markerTemplateElements.length; i++) {
                                    var templateGroupEle = markerTemplateElements[i];
                                    templateGroupEle.style.left = left + 'px';
                                    templateGroupEle.style.top = top + 'px';
                                }
                            }
                        }
                        if (this.zoomSettings.zoomFactor >= 1) {
                            if (this.zoomModule && this.zoomModule.toolBarGroup && this.zoomSettings.enable) {
                                this.zoomModule.alignToolBar();
                            }
                            var elements = this.svgObject.querySelector('#' + this.element.id + '_Layer_Collections');
                            if (!isNullOrUndefined(elements) && elements.childElementCount > 0) {
                                for (var _i4 = 0; _i4 < elements.childNodes.length; _i4++) {
                                    var childElement = elements.childNodes[_i4];
                                    if (childElement.tagName === 'g') {
                                        var layerIndex = parseFloat(childElement.id.split('_')[2]);
                                        for (var j = 0; j < childElement.childNodes.length; j++) {
                                            var childNode = childElement.childNodes[j];
                                            if (!(childNode.id.indexOf('_Markers_Group') > -1) && !(childNode.id.indexOf('_bubble_Group') > -1) && !(childNode.id.indexOf('_dataLableIndex_Group') > -1)) {
                                                changeBorderWidth(childNode, layerIndex, this.scale, this);
                                            }
                                        }
                                    }
                                }
                            }
                            if (this.zoomModule && this.previousScale !== this.scale) {
                                this.zoomModule.applyTransform(true);
                            }
                        }
                    }
                }, {
                    key: 'createSecondaryElement',
                    value: function createSecondaryElement() {
                        if (isNullOrUndefined(document.getElementById(this.element.id + '_Secondary_Element'))) {
                            var secondaryElement = createElement('div', {
                                id: this.element.id + '_Secondary_Element',
                                styles: 'position: absolute;z-index:1;'
                            });
                            this.element.appendChild(secondaryElement);
                        }
                    }
                }, {
                    key: 'arrangeTemplate',
                    value: function arrangeTemplate() {
                        var secondaryEle = getElementByID(this.element.id + '_Secondary_Element');
                        if (document.getElementById(this.element.id + '_Legend_Border')) {
                            document.getElementById(this.element.id + '_Legend_Border').style.pointerEvents = 'none';
                        }
                        var templateElements = document.getElementsByClassName('template');
                        if (!isNullOrUndefined(templateElements) && templateElements.length > 0 && getElementByID(this.element.id + '_Layer_Collections')) {
                            for (var i = 0; i < templateElements.length; i++) {
                                var templateGroupEle = templateElements[i];
                                if (!isNullOrUndefined(templateGroupEle) && templateGroupEle.childElementCount > 0) {
                                    var layerOffset = getElementByID(this.element.id + '_Layer_Collections').getBoundingClientRect();
                                    var elementOffset = getElementByID(templateGroupEle.id).getBoundingClientRect();
                                    for (var j = 0; j < templateGroupEle.childElementCount; j++) {
                                        var currentTemplate = templateGroupEle.childNodes[j];
                                        var templateOffset = currentTemplate.getBoundingClientRect();
                                        currentTemplate.style.left = (this.isTileMap ? parseFloat(currentTemplate.style.left) : layerOffset.left < elementOffset.left ? parseFloat(currentTemplate.style.left) - Math.abs(elementOffset.left - layerOffset.left) : parseFloat(currentTemplate.style.left) + Math.abs(elementOffset.left - layerOffset.left)) - templateOffset.width / 2 + 'px';
                                        currentTemplate.style.top = (this.isTileMap ? parseFloat(currentTemplate.style.top) : layerOffset.top < elementOffset.top ? parseFloat(currentTemplate.style.top) - Math.abs(elementOffset.top - layerOffset.top) : parseFloat(currentTemplate.style.top) + Math.abs(elementOffset.top - layerOffset.top)) - templateOffset.height / 2 + 'px';
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'createTile',
                    value: function createTile() {
                        var mainLayer = this.layersCollection[0];
                        var padding = 20;
                        if (mainLayer.isBaseLayer && (mainLayer.layerType === 'OSM' || mainLayer.layerType === 'Bing')) {
                            removeElement(this.element.id + '_tile_parent');
                            var elementRect = this.element.getBoundingClientRect();
                            var parentRect = this.element.parentElement.getBoundingClientRect();
                            var left = Math.abs(elementRect.left - parentRect.left);
                            var top = Math.abs(elementRect.top - parentRect.top);
                            var ele = createElement('div', {
                                id: this.element.id + '_tile_parent', styles: 'position: absolute; left: ' + (this.mapAreaRect.x + left) + 'px; top: ' + (this.mapAreaRect.y + top + padding) + 'px; height: ' + this.mapAreaRect.height + 'px; width: ' + this.mapAreaRect.width + 'px; overflow: hidden;'
                            });
                            this.element.appendChild(ele);
                        }
                    }
                }, {
                    key: 'initPrivateVariable',
                    value: function initPrivateVariable() {
                        this.renderer = new SvgRenderer(this.element.id);
                        this.mapLayerPanel = new LayerPanel(this);
                    }
                }, {
                    key: 'findBaseAndSubLayers',
                    value: function findBaseAndSubLayers() {
                        var _this38 = this;

                        var baseIndex = this.baseLayerIndex;
                        var mainLayers = [];
                        var subLayers = [];
                        this.layersCollection = [];
                        this.layers.forEach(function (layer) {
                            layer.type === 'Layer' ? mainLayers.push(layer) : subLayers.push(layer);
                        });
                        for (var i = 0; i < mainLayers.length; i++) {
                            var baseLayer = mainLayers[i];
                            if (baseLayer.visible && baseIndex === i) {
                                baseLayer.isBaseLayer = true;
                                this.isTileMap = baseLayer.layerType === 'Geometry' ? false : true;
                                this.layersCollection.push(baseLayer);
                                break;
                            } else if (i === mainLayers.length - 1) {
                                this.layersCollection.push(mainLayers[0]);
                                break;
                            }
                        }
                        subLayers.map(function (subLayer, subLayerIndex) {
                            if (subLayer.visible) {
                                _this38.layersCollection.push(subLayer);
                            }
                        });
                    }
                }, {
                    key: 'renderBorder',
                    value: function renderBorder() {
                        var width = this.border.width;
                        if (width > 0 || this.background) {
                            var borderRect = new RectOption(this.element.id + '_MapBorder', this.background, this.border, 1, new Rect(width / 2, width / 2, this.availableSize.width - width, this.availableSize.height - width));
                            this.svgObject.appendChild(this.renderer.drawRectangle(borderRect));
                        }
                    }
                }, {
                    key: 'renderTitle',
                    value: function renderTitle(title, type, bounds, groupEle) {
                        var style = title.textStyle;
                        var height = void 0;
                        var width = Math.abs(this.margin.left + this.margin.right - this.availableSize.width);
                        if (title.text) {
                            if (isNullOrUndefined(groupEle)) {
                                groupEle = this.renderer.createGroup({ id: this.element.id + '_Title_Group' });
                            }
                            var trimmedTitle = textTrim(width, title.text, style);
                            var elementSize = measureText(trimmedTitle, style);
                            var rect = isNullOrUndefined(bounds) ? new Rect(this.margin.left, this.margin.top, this.availableSize.width, this.availableSize.height) : bounds;
                            var location = findPosition(rect, title.alignment, elementSize, type);
                            var options = new TextOption(this.element.id + '_Map_' + type, location.x, location.y, 'start', trimmedTitle);
                            var titleBounds = new Rect(location.x, location.y, elementSize.width, elementSize.height);
                            var element = renderTextElement(options, style, style.color, groupEle);
                            element.setAttribute('aria-label', this.description || title.text);
                            element.setAttribute('tabindex', (this.tabIndex + (type === 'title' ? 1 : 2)).toString());
                            if (type === 'title' && !title.subtitleSettings.text || type === 'subtitle') {
                                height = Math.abs(titleBounds.y + this.margin.bottom - this.availableSize.height);
                                this.mapAreaRect = new Rect(this.margin.left, titleBounds.y + 10, width, height - 10);
                            }
                            if (type !== 'subtitle' && title.subtitleSettings.text) {
                                this.renderTitle(title.subtitleSettings, 'subtitle', titleBounds, groupEle);
                            } else {
                                this.svgObject.appendChild(groupEle);
                            }
                        } else {
                            height = Math.abs(this.margin.top + this.margin.bottom - this.availableSize.height);
                            this.mapAreaRect = new Rect(this.margin.left, this.margin.top, width, height);
                        }
                    }
                }, {
                    key: 'createSVG',
                    value: function createSVG() {
                        this.removeSvg();
                        createSvg(this);
                    }
                }, {
                    key: 'removeSvg',
                    value: function removeSvg() {
                        removeElement(this.element.id + '_Secondary_Element');
                        removeElement(this.element.id + '_tile_parent');
                        if (document.getElementsByClassName('e-tooltip-wrap')[0]) {
                            remove(document.getElementsByClassName('e-tooltip-wrap')[0]);
                        }
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
                    key: 'wireEVents',
                    value: function wireEVents() {
                        //let cancelEvent: string = Browser.isPointer ? 'pointerleave' : 'mouseleave';
                        EventHandler.add(this.element, 'click', this.mapsOnClick, this);
                        // EventHandler.add(this.element, 'contextmenu', this.mapsOnRightClick, this);
                        EventHandler.add(this.element, 'dblclick', this.mapsOnDoubleClick, this);
                        EventHandler.add(this.element, Browser.touchStartEvent, this.mouseDownOnMap, this);
                        EventHandler.add(this.element, Browser.touchMoveEvent, this.mouseMoveOnMap, this);
                        EventHandler.add(this.element, Browser.touchEndEvent, this.mouseEndOnMap, this);
                        //  EventHandler.add(this.element, cancelEvent, this.mouseLeaveOnMap, this);
                        window.addEventListener(Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize', this.mapsOnResize.bind(this));
                    }
                }, {
                    key: 'unWireEVents',
                    value: function unWireEVents() {
                        //let cancelEvent: string = Browser.isPointer ? 'pointerleave' : 'mouseleave';
                        EventHandler.remove(this.element, 'click', this.mapsOnClick);
                        // EventHandler.remove(this.element, 'contextmenu', this.mapsOnRightClick);
                        EventHandler.remove(this.element, 'dblclick', this.mapsOnDoubleClick);
                        EventHandler.remove(this.element, Browser.touchStartEvent, this.mouseDownOnMap);
                        EventHandler.remove(this.element, Browser.touchMoveEvent, this.mouseMoveOnMap);
                        EventHandler.remove(this.element, Browser.touchEndEvent, this.mouseEndOnMap);
                        //EventHandler.remove(this.element, cancelEvent, this.mouseLeaveOnMap);
                        window.removeEventListener(Browser.isTouch && 'orientation' in window && 'onorientationchange' in window ? 'orientationchange' : 'resize', this.mapsOnResize);
                    }
                }, {
                    key: 'mapsOnClick',
                    value: function mapsOnClick(e) {
                        var targetEle = e.target;
                        var targetId = targetEle.id;
                        var eventArgs = {
                            cancel: false, name: click, target: targetId, x: e.clientX, y: e.clientY
                        };
                        this.trigger(click, eventArgs);
                        if (targetEle.id.indexOf('ShapeIndex') !== -1) {
                            var layerIndex = parseInt(targetEle.id.split('_LayerIndex_')[1].split('_')[0], 10);
                            triggerShapeEvent(targetId, this.layers[layerIndex].selectionSettings, this, shapeSelected);
                        }
                        if (this.markerModule) {
                            this.markerModule.markerClick(e);
                        }
                        if (this.bubbleModule) {
                            this.bubbleModule.bubbleClick(e);
                        }
                        if (!eventArgs.cancel) {
                            this.notify(click, targetEle);
                        }
                    }
                }, {
                    key: 'mouseEndOnMap',
                    value: function mouseEndOnMap(e) {
                        var pageX = void 0;
                        var pageY = void 0;
                        var target = void 0;
                        var touchArg = void 0;
                        var rect = this.element.getBoundingClientRect();
                        var element = e.target;
                        if (e.type.indexOf('touch') !== -1) {
                            this.isTouch = true;
                            touchArg = e;
                            pageX = touchArg.changedTouches[0].clientX;
                            pageY = touchArg.changedTouches[0].clientY;
                            target = touchArg.target;
                        } else {
                            this.isTouch = e.pointerType === 'touch';
                            pageX = e.clientX;
                            pageY = e.clientY;
                            target = e.target;
                        }
                        if (this.isTouch) {
                            this.titleTooltip(e, pageX, pageY, true);
                        }
                        this.notify(Browser.touchEndEvent, e);
                        e.preventDefault();
                        return false;
                    }
                }, {
                    key: 'mouseDownOnMap',
                    value: function mouseDownOnMap(e) {
                        var rect = this.element.getBoundingClientRect();
                        var element = e.target;
                        this.notify(Browser.touchStartEvent, e);
                    }
                }, {
                    key: 'mapsOnDoubleClick',
                    value: function mapsOnDoubleClick(e) {
                        this.notify('dblclick', e);
                    }
                }, {
                    key: 'mouseMoveOnMap',
                    value: function mouseMoveOnMap(e) {
                        var target = void 0;
                        target = e.type === 'touchmove' ? e.target : target = e.target;
                        if (target.id.indexOf('_MarkerIndex_') > -1 && this.markerModule) {
                            this.markerModule.markerExplode(target.id, target);
                        }
                        // if (target.id.indexOf('ShapeIndex') !== -1 && !this.highlightSettings.enable) {
                        //     triggerShapeEvent(target.id, this.highlightSettings, this, shapeHighlight);
                        // }
                        if (this.markerModule) {
                            this.markerModule.markerMove(e);
                        }
                        if (this.bubbleModule) {
                            this.bubbleModule.bubbleMove(e);
                        }
                        this.onMouseMove(e);
                        this.notify(Browser.touchMoveEvent, e);
                    }
                }, {
                    key: 'onMouseMove',
                    value: function onMouseMove(e) {
                        var element = e.target;
                        if (!this.isTouch) {
                            this.titleTooltip(e, e.pageX, e.pageY);
                        }
                        return false;
                    }
                }, {
                    key: 'titleTooltip',
                    value: function titleTooltip(event, x, y, isTouch) {
                        var targetId = event.target.id;
                        if (targetId === this.element.id + '_Map_title' && event.target.textContent.indexOf('...') > -1) {
                            showTooltip(this.titleSettings.text, this.titleSettings.textStyle.size, x, y, this.element.offsetWidth, this.element.offsetHeight, this.element.id + '_EJ2_Title_Tooltip', getElement(this.element.id + '_Secondary_Element'), isTouch);
                        } else {
                            removeElement(this.element.id + '_EJ2_Title_Tooltip');
                        }
                    }
                }, {
                    key: 'mapsOnResize',
                    value: function mapsOnResize(e) {
                        var _this39 = this;

                        var args = {
                            name: resize,
                            previousSize: this.availableSize,
                            currentSize: new Size(0, 0),
                            maps: this
                        };
                        if (this.resizeTo) {
                            clearTimeout(this.resizeTo);
                        }
                        if (this.element.classList.contains('e-maps')) {
                            this.resizeTo = setTimeout(function () {
                                _this39.unWireEVents();
                                _this39.createSVG();
                                _this39.refreshing = true;
                                _this39.wireEVents();
                                args.currentSize = _this39.availableSize;
                                _this39.trigger(resize, args);
                                _this39.render();
                            }, 500);
                        }
                        return false;
                    }
                }, {
                    key: 'zoomByPosition',
                    value: function zoomByPosition(centerPosition, zoomFactor) {
                        var lattitude = centerPosition.latitude;
                        var longitude = centerPosition.longitude;
                        var factor = this.mapLayerPanel.calculateFactor(this.layersCollection[0]);
                        var position = convertGeoToPoint(lattitude, longitude, factor, this.layersCollection[0], this);
                        if (this.zoomModule) {
                            this.zoomModule.performZooming(position, zoomFactor, 'ZoomIn');
                        }
                    }
                }, {
                    key: 'addLayer',
                    value: function addLayer(layer) {
                        this.layers.push(new LayerSettings(this.layers[0], 'layers', layer));
                        this.refresh();
                    }
                }, {
                    key: 'removeLayer',
                    value: function removeLayer(index) {
                        this.layers.splice(index, 1);
                        this.refresh();
                    }
                }, {
                    key: 'addMarker',
                    value: function addMarker(layerIndex, marker) {
                        var currentMarker = this.layers[layerIndex].markerSettings;
                        currentMarker.push(new MarkerSettings(currentMarker[0], 'markerSettings', marker));
                        this.refresh();
                    }
                }, {
                    key: 'setCulture',
                    value: function setCulture() {
                        this.intl = new Internationalization();
                        this.setLocaleConstants();
                        this.localeObject = new L10n(this.getModuleName(), this.defaultLocalConstants, this.locale);
                    }
                }, {
                    key: 'setLocaleConstants',
                    value: function setLocaleConstants() {
                        // Need to modify after the api confirm
                        this.defaultLocalConstants = {
                            ZoomIn: 'ZoomIn',
                            Zoom: 'Zoom',
                            ZoomOut: 'ZoomOut',
                            Pan: 'Pan',
                            Reset: 'Reset'
                        };
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.unWireEVents();
                        _get(Maps.prototype.__proto__ || Object.getPrototypeOf(Maps.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'maps';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return '';
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var render = false;
                        var _iteratorNormalCompletion9 = true;
                        var _didIteratorError9 = false;
                        var _iteratorError9 = undefined;

                        try {
                            for (var _iterator9 = Object.keys(newProp)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                var prop = _step9.value;

                                switch (prop) {
                                    case 'background':
                                        this.renderBorder();
                                        break;
                                    case 'height':
                                    case 'width':
                                        this.createSVG();
                                        render = true;
                                        break;
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

                        if (render) {
                            this.render();
                        }
                    }
                }, {
                    key: 'requiredModules',
                    value: function requiredModules() {
                        var modules = [];
                        var isVisible = this.findVisibleLayers(this.layers);
                        var annotationEnable = false;
                        this.annotations.map(function (annotation, index) {
                            annotationEnable = annotation.content != null;
                        });
                        if (this.isBubbleVisible()) {
                            modules.push({
                                member: 'Bubble',
                                args: [this]
                            });
                        }
                        if (isVisible.highlight) {
                            modules.push({
                                member: 'Highlight',
                                args: [this]
                            });
                        }
                        if (isVisible.selection) {
                            modules.push({
                                member: 'Selection',
                                args: [this]
                            });
                        }
                        if (this.legendSettings.visible) {
                            modules.push({
                                member: 'Legend',
                                args: [this]
                            });
                        }
                        if (this.zoomSettings.enable || this.zoomSettings.zoomFactor > this.zoomSettings.minZoom) {
                            modules.push({
                                member: 'Zoom',
                                args: [this]
                            });
                        }
                        if (this.isMarkersVisible()) {
                            modules.push({
                                member: 'Marker',
                                args: [this]
                            });
                        }
                        if (this.isDataLabelVisible()) {
                            modules.push({
                                member: 'DataLabel',
                                args: [this]
                            });
                        }
                        if (this.isNavigationVisible()) {
                            modules.push({
                                member: 'NavigationLine',
                                args: [this]
                            });
                        }
                        if (isVisible.tooltip) {
                            modules.push({
                                member: 'MapsTooltip',
                                args: [this]
                            });
                        }
                        if (annotationEnable) {
                            modules.push({
                                member: 'Annotations',
                                args: [this, Annotations]
                            });
                        }
                        return modules;
                    }
                }, {
                    key: 'isMarkersVisible',
                    value: function isMarkersVisible() {
                        var isVisible = false;
                        this.layers.forEach(function (layer, layerIndex) {
                            for (var i = 0; i < layer.markerSettings.length; i++) {
                                if (layer.markerSettings[i].visible) {
                                    isVisible = true;
                                    break;
                                }
                            }
                        });
                        return isVisible;
                    }
                }, {
                    key: 'isDataLabelVisible',
                    value: function isDataLabelVisible() {
                        var isVisible = false;
                        for (var i = 0; i < this.layers.length; i++) {
                            if (this.layers[i].dataLabelSettings.visible) {
                                isVisible = true;
                                break;
                            }
                        }
                        return isVisible;
                    }
                }, {
                    key: 'isNavigationVisible',
                    value: function isNavigationVisible() {
                        var isVisible = false;
                        this.layers.forEach(function (layer, layerIndex) {
                            for (var i = 0; i < layer.navigationLineSettings.length; i++) {
                                if (layer.navigationLineSettings[i].visible) {
                                    isVisible = true;
                                    break;
                                }
                            }
                        });
                        return isVisible;
                    }
                }, {
                    key: 'isBubbleVisible',
                    value: function isBubbleVisible() {
                        var isVisible = false;
                        var _iteratorNormalCompletion10 = true;
                        var _didIteratorError10 = false;
                        var _iteratorError10 = undefined;

                        try {
                            for (var _iterator10 = this.layers[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                var layer = _step10.value;

                                if (this.getBubbleVisible(layer)) {
                                    isVisible = true;
                                    break;
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

                        return isVisible;
                    }
                }, {
                    key: 'getBubbleVisible',
                    value: function getBubbleVisible(layer) {
                        var isVisible = false;
                        var _iteratorNormalCompletion11 = true;
                        var _didIteratorError11 = false;
                        var _iteratorError11 = undefined;

                        try {
                            for (var _iterator11 = layer.bubbleSettings[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                var bubble = _step11.value;

                                if (bubble.visible) {
                                    isVisible = true;
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

                        return isVisible;
                    }
                }, {
                    key: 'print',
                    value: function print(id) {
                        var exportChart = new ExportUtils(this);
                        exportChart.print(id);
                    }
                }, {
                    key: 'export',
                    value: function _export(type, fileName, orientation) {
                        var exportMap = new ExportUtils(this);
                        exportMap.export(type, fileName, orientation);
                    }
                }, {
                    key: 'findVisibleLayers',
                    value: function findVisibleLayers(layers) {
                        var isLayerVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        var isBubblevisible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                        var istooltipVisible = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                        var isSelection = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                        var isHighlight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

                        var bubbles = void 0;
                        var markers = void 0;
                        var navigationLine = void 0;
                        var _iteratorNormalCompletion12 = true;
                        var _didIteratorError12 = false;
                        var _iteratorError12 = undefined;

                        try {
                            for (var _iterator12 = layers[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                var layer = _step12.value;

                                isLayerVisible = layer.visible || isLayerVisible;
                                if (layer.visible) {
                                    bubbles = layer.bubbleSettings;
                                    markers = layer.markerSettings;
                                    navigationLine = layer.navigationLineSettings;
                                    var _iteratorNormalCompletion13 = true;
                                    var _didIteratorError13 = false;
                                    var _iteratorError13 = undefined;

                                    try {
                                        for (var _iterator13 = navigationLine[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                            var navigation = _step13.value;

                                            if (navigation.visible) {
                                                isSelection = navigation.highlightSettings.enable || isSelection;
                                                isHighlight = navigation.selectionSettings.enable || isHighlight;
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

                                    var _iteratorNormalCompletion14 = true;
                                    var _didIteratorError14 = false;
                                    var _iteratorError14 = undefined;

                                    try {
                                        for (var _iterator14 = markers[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                                            var marker = _step14.value;

                                            if (marker.visible) {
                                                istooltipVisible = marker.tooltipSettings.visible || istooltipVisible;
                                                isSelection = marker.selectionSettings.enable || isSelection;
                                                isHighlight = marker.highlightSettings.enable || isHighlight;
                                            }
                                            if (istooltipVisible) {
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

                                    var _iteratorNormalCompletion15 = true;
                                    var _didIteratorError15 = false;
                                    var _iteratorError15 = undefined;

                                    try {
                                        for (var _iterator15 = bubbles[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                                            var bubble = _step15.value;

                                            if (bubble.visible) {
                                                istooltipVisible = bubble.tooltipSettings.visible || istooltipVisible;
                                                isSelection = bubble.selectionSettings.enable || isSelection;
                                                isHighlight = bubble.highlightSettings.enable || isHighlight;
                                            }
                                            if (istooltipVisible) {
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

                                    istooltipVisible = layer.tooltipSettings.visible || istooltipVisible;
                                    isSelection = layer.selectionSettings.enable || isSelection;
                                    isHighlight = layer.highlightSettings.enable || isHighlight;
                                }
                                if (isLayerVisible && isBubblevisible && istooltipVisible) {
                                    break;
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

                        return {
                            layer: isLayerVisible, bubble: isBubblevisible, tooltip: istooltipVisible,
                            selection: isSelection, highlight: isHighlight
                        };
                    }
                }]);

                return Maps;
            }(Component));

            __decorate([Property(null)], Maps.prototype, "background", void 0);
            __decorate([Property(false)], Maps.prototype, "useGroupingSeparator", void 0);
            __decorate([Property(null)], Maps.prototype, "format", void 0);
            __decorate([Property(null)], Maps.prototype, "width", void 0);
            __decorate([Property(null)], Maps.prototype, "height", void 0);
            __decorate([Complex({}, TitleSettings)], Maps.prototype, "titleSettings", void 0);
            __decorate([Complex({}, ZoomSettings)], Maps.prototype, "zoomSettings", void 0);
            __decorate([Complex({}, LegendSettings)], Maps.prototype, "legendSettings", void 0);
            __decorate([Collection([], LayerSettings)], Maps.prototype, "layers", void 0);
            __decorate([Collection([], Annotation)], Maps.prototype, "annotations", void 0);
            __decorate([Complex({}, Margin)], Maps.prototype, "margin", void 0);
            __decorate([Complex({ color: '#DDDDDD', width: 0 }, Border)], Maps.prototype, "border", void 0);
            __decorate([Property('Material')], Maps.prototype, "theme", void 0);
            __decorate([Property('Mercator')], Maps.prototype, "projectionType", void 0);
            __decorate([Property(0)], Maps.prototype, "baseLayerIndex", void 0);
            __decorate([Property(null)], Maps.prototype, "description", void 0);
            __decorate([Property(1)], Maps.prototype, "tabIndex", void 0);
            __decorate([Property({ latitude: null, longitude: null })], Maps.prototype, "centerPosition", void 0);
            __decorate([Complex({}, MapsAreaSettings)], Maps.prototype, "mapsArea", void 0);
            __decorate([Event()], Maps.prototype, "load", void 0);
            __decorate([Event()], Maps.prototype, "beforePrint", void 0);
            __decorate([Event()], Maps.prototype, "loaded", void 0);
            __decorate([Event()], Maps.prototype, "click", void 0);
            __decorate([Event()], Maps.prototype, "doubleClick", void 0);
            __decorate([Event()], Maps.prototype, "rightClick", void 0);
            __decorate([Event()], Maps.prototype, "resize", void 0);
            __decorate([Event()], Maps.prototype, "tooltipRender", void 0);
            __decorate([Event()], Maps.prototype, "shapeSelected", void 0);
            __decorate([Event()], Maps.prototype, "itemSelection", void 0);
            __decorate([Event()], Maps.prototype, "itemHighlight", void 0);
            __decorate([Event()], Maps.prototype, "shapeHighlight", void 0);
            __decorate([Event()], Maps.prototype, "layerRendering", void 0);
            __decorate([Event()], Maps.prototype, "shapeRendering", void 0);
            __decorate([Event()], Maps.prototype, "markerRendering", void 0);
            __decorate([Event()], Maps.prototype, "markerClick", void 0);
            __decorate([Event()], Maps.prototype, "markerMouseMove", void 0);
            __decorate([Event()], Maps.prototype, "dataLabelRendering", void 0);
            __decorate([Event()], Maps.prototype, "bubbleRendering", void 0);
            __decorate([Event()], Maps.prototype, "bubbleClick", void 0);
            __decorate([Event()], Maps.prototype, "bubbleMouseMove", void 0);
            __decorate([Event()], Maps.prototype, "animationComplete", void 0);
            __decorate([Event()], Maps.prototype, "annotationRendering", void 0);
            _export2('Maps', Maps = __decorate([NotifyPropertyChanges], Maps));

            /**
             * Bubble module class
             */

            _export2('Bubble', Bubble = function () {
                function Bubble(maps) {
                    _classCallCheck(this, Bubble);

                    /**
                     * Bubble Id for current layer
                     */
                    this.id = '';
                    this.maps = maps;
                    this.bubbleCollection = [];
                }
                /**
                 * To render bubble
                 */
                /* tslint:disable:no-string-literal */


                _createClass(Bubble, [{
                    key: 'renderBubble',
                    value: function renderBubble(bubbleSettings, shapeData, color, range, bubbleIndex, dataIndex, layerIndex, layer, group) {
                        var layerData = layer.layerData;
                        var colorValuePath = bubbleSettings.colorValuePath;
                        var equalValue = shapeData[colorValuePath];
                        var colorValue = Number(shapeData[colorValuePath]);
                        var bubbleValue = Number(shapeData[bubbleSettings.valuePath]);
                        if (isNaN(bubbleValue) && isNaN(colorValue) && isNullOrUndefined(equalValue)) {
                            return null;
                        }
                        var radius = this.getRatioOfBubble(bubbleSettings.minRadius, bubbleSettings.maxRadius, bubbleValue, range.min, range.max);
                        var colorMapping = new ColorMapping(this.maps);
                        var shapeColor = colorMapping.getColorByValue(bubbleSettings.colorMapping, colorValue, equalValue);
                        shapeColor = shapeColor ? shapeColor : color;
                        var shapePoints = [[]];
                        var midIndex = 0;
                        var pointsLength = 0;
                        var currentLength = 0;
                        for (var i = 0, len = layerData.length; i < len; i++) {
                            var shape = layerData[i];
                            shape = shape['property'];
                            if (shapeData[layer.shapeDataPath] === shape[layer.shapePropertyPath]) {
                                if (!layerData[i]['_isMultiPolygon']) {
                                    shapePoints.push(this.getPoints(layerData[i], []));
                                    currentLength = shapePoints[shapePoints.length - 1].length;
                                    if (pointsLength < currentLength) {
                                        pointsLength = currentLength;
                                        midIndex = shapePoints.length - 1;
                                    }
                                } else {
                                    var _layer = layerData[i];
                                    for (var j = 0; j < _layer.length; j++) {
                                        shapePoints.push(this.getPoints(_layer[j], []));
                                        currentLength = shapePoints[shapePoints.length - 1].length;
                                        if (pointsLength < currentLength) {
                                            pointsLength = currentLength;
                                            midIndex = shapePoints.length - 1;
                                        }
                                    }
                                }
                            }
                        }
                        var center = findMidPointOfPolygon(shapePoints[midIndex]);
                        if (!isNullOrUndefined(center)) {
                            var centerY = this.maps.projectionType === 'Mercator' ? center['y'] : -center['y'];
                            var eventArgs = {
                                cancel: false, name: bubbleRendering, border: bubbleSettings.border,
                                cx: center['x'], cy: centerY, data: shapeData, fill: shapeColor, maps: this.maps,
                                radius: radius
                            };
                            this.maps.trigger(bubbleRendering, eventArgs);
                            if (eventArgs.cancel) {
                                return;
                            }
                            var bubbleElement = void 0;
                            if (bubbleSettings.bubbleType === 'Circle') {
                                var circle = new CircleOption(this.id, eventArgs.fill, eventArgs.border, bubbleSettings.opacity, 0, 0, eventArgs.radius, null);
                                bubbleElement = drawCircle(this.maps, circle, group);
                            } else {
                                var y = this.maps.projectionType === 'Mercator' ? eventArgs.cy - radius : eventArgs.cy + radius;
                                var rectangle = new RectOption(this.id, eventArgs.fill, eventArgs.border, bubbleSettings.opacity, new Rect(0, 0, radius * 2, radius * 2), 2, 2);
                                eventArgs.cx -= radius;
                                eventArgs.cy = y;
                                bubbleElement = drawRectangle(this.maps, rectangle, group);
                            }
                            this.bubbleCollection.push({
                                LayerIndex: layerIndex,
                                BubbleIndex: bubbleIndex,
                                DataIndex: dataIndex,
                                element: bubbleElement,
                                center: { x: eventArgs.cx, y: eventArgs.cy }
                            });
                            var animate$$1 = layer.animationDuration !== 0 || isNullOrUndefined(this.maps.zoomModule);
                            var translate = getTranslate(this.maps, layer, animate$$1);
                            var scale = translate['scale'];
                            var transPoint = translate['location'];
                            var position = new MapLocation(this.maps.isTileMap ? eventArgs.cx : (eventArgs.cx + transPoint.x) * scale, this.maps.isTileMap ? eventArgs.cy : (eventArgs.cy + transPoint.y) * scale);
                            bubbleElement.setAttribute('transform', 'translate( ' + position.x + ' ' + position.y + ' )');
                            var bubble = bubbleSettings.dataSource.length - 1 === dataIndex ? 'bubble' : null;
                            if (bubbleSettings.bubbleType === 'Square') {
                                position.x += radius;
                                position.y += radius * (this.maps.projectionType === 'Mercator' ? 1 : -1);
                            } else {
                                radius = 0;
                            }
                            if (bubbleSettings.animationDuration > 0) {
                                elementAnimate(bubbleElement, bubbleSettings.animationDelay, bubbleSettings.animationDuration, position, this.maps, bubble, radius);
                            }
                        }
                    }
                }, {
                    key: 'getPoints',
                    value: function getPoints(shape, points) {
                        shape.map(function (current, index) {
                            points.push(new Point(current['point']['x'], current['point']['y']));
                        });
                        return points;
                    }
                }, {
                    key: 'getRatioOfBubble',
                    value: function getRatioOfBubble(min, max, value, minValue, maxValue) {
                        var percent = 100 / (maxValue - minValue) * (value - minValue);
                        var bubbleRadius = (max - min) / 100 * percent + min;
                        if (maxValue === minValue) {
                            bubbleRadius = (max - min) / 100 + min;
                        }
                        return bubbleRadius;
                    }
                }, {
                    key: 'bubbleClick',
                    value: function bubbleClick(e) {
                        var target = e.target.id;
                        if (target.indexOf('_LayerIndex_') === -1) {
                            return;
                        }
                        var data = this.getbubble(target);
                        if (isNullOrUndefined(data)) {
                            return;
                        }
                        var eventArgs = {
                            cancel: false, name: _bubbleClick, data: data, maps: this.maps,
                            target: target, x: e.clientX, y: e.clientY
                        };
                        this.maps.trigger(_bubbleClick, eventArgs);
                    }
                }, {
                    key: 'getbubble',
                    value: function getbubble(target) {
                        var id = target.split('_LayerIndex_');
                        var index = parseInt(id[1].split('_')[0], 10);
                        var layer = this.maps.layers[index];
                        var data = void 0;
                        if (target.indexOf('_BubbleIndex_') > -1) {
                            var bubbleIndex = parseInt(id[1].split('_BubbleIndex_')[1], 10);
                            if (!isNaN(bubbleIndex)) {
                                data = layer.dataSource[bubbleIndex];
                                return data;
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'bubbleMove',
                    value: function bubbleMove(e) {
                        var target = e.target.id;
                        if (target.indexOf('_LayerIndex_') === -1) {
                            return;
                        }
                        var data = this.getbubble(target);
                        if (isNullOrUndefined(data)) {
                            return;
                        }
                        var eventArgs = {
                            cancel: false, name: bubbleMouseMove, data: data, maps: this.maps,
                            target: target, x: e.clientX, y: e.clientY
                        };
                        this.maps.trigger(bubbleMouseMove, eventArgs);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'Bubble';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(maps) {
                        /**
                         * Destroy method performed here
                         */
                    }
                }]);

                return Bubble;
            }());

            _export2('Marker', Marker = function () {
                function Marker(maps) {
                    _classCallCheck(this, Marker);

                    this.maps = maps;
                    this.trackElements = [];
                }
                /* tslint:disable:no-string-literal */


                _createClass(Marker, [{
                    key: 'markerRender',
                    value: function markerRender(layerElement, layerIndex, factor) {
                        var _this40 = this;

                        var templateFn = void 0;
                        var currentLayer = this.maps.layersCollection[layerIndex];
                        this.markerSVGObject = this.maps.renderer.createGroup({ id: this.maps.element.id + '_Markers_Group' });
                        var markerTemplateEle = createElement('div', {
                            id: this.maps.element.id + '_LayerIndex_' + layerIndex + '_Markers_Template_Group',
                            className: 'template',
                            styles: 'overflow: hidden; position: absolute;pointer-events: none;' + 'top:' + (this.maps.isTileMap ? 0 : this.maps.mapAreaRect.y) + 'px;' + 'left:' + (this.maps.isTileMap ? 0 : this.maps.mapAreaRect.x) + 'px;' + 'height:' + this.maps.mapAreaRect.height + 'px;' + 'width:' + this.maps.mapAreaRect.width + 'px;'
                        });
                        currentLayer.markerSettings.map(function (markerSettings, markerIndex) {
                            var markerData = markerSettings.dataSource;
                            markerData.forEach(function (data, dataIndex) {
                                var eventArgs = {
                                    cancel: false, name: markerRendering, fill: markerSettings.fill, height: markerSettings.height,
                                    width: markerSettings.width, imageUrl: markerSettings.imageUrl, shape: markerSettings.shape,
                                    template: markerSettings.template, data: data, maps: _this40.maps, marker: markerSettings,
                                    border: markerSettings.border
                                };
                                _this40.maps.trigger(markerRendering, eventArgs);
                                var lng = data['longitude'];
                                var lat = data['latitude'];
                                var offset = markerSettings.offset;
                                if (!eventArgs.cancel && markerSettings.visible && !isNullOrUndefined(lng) && !isNullOrUndefined(lat)) {
                                    var markerID = _this40.maps.element.id + '_LayerIndex_' + layerIndex + '_MarkerIndex_' + markerIndex + '_DataIndex_' + dataIndex;
                                    var location = _this40.maps.isTileMap ? convertTileLatLongToPoint(new MapLocation(lng, lat), factor, _this40.maps.tileTranslatePoint, true) : convertGeoToPoint(lat, lng, factor, currentLayer, _this40.maps);
                                    var animate$$1 = currentLayer.animationDuration !== 0 || isNullOrUndefined(_this40.maps.zoomModule);
                                    var translate = _this40.maps.isTileMap ? new Object() : getTranslate(_this40.maps, currentLayer, animate$$1);
                                    var scale = translate['scale'];
                                    var transPoint = translate['location'];
                                    if (eventArgs.template) {
                                        templateFn = getTemplateFunction(eventArgs.template);
                                        if (templateFn && templateFn(_this40.maps).length) {
                                            var templateElement = templateFn(_this40.maps);
                                            var markerElement = convertElement(templateElement, markerID, data, markerIndex, _this40.maps);
                                            markerElement.style.left = (_this40.maps.isTileMap ? location.x : Math.abs(_this40.maps.baseMapRectBounds['min']['x'] - location.x) * scale) + offset.x + 'px';
                                            markerElement.style.top = (_this40.maps.isTileMap ? location.y : Math.abs(_this40.maps.baseMapRectBounds['min']['y'] - location.y) * scale) + offset.y + 'px';
                                            markerTemplateEle.appendChild(markerElement);
                                        }
                                    } else {
                                        var shapeCustom = {
                                            size: new Size(eventArgs.width, eventArgs.height),
                                            fill: eventArgs.fill, borderColor: eventArgs.border.color,
                                            borderWidth: eventArgs.border.width, opacity: markerSettings.opacity,
                                            dashArray: markerSettings.dashArray
                                        };
                                        var ele = _this40.drawSymbol(eventArgs.shape, eventArgs.imageUrl, { x: 0, y: 0 }, markerID, shapeCustom);
                                        var x = (_this40.maps.isTileMap ? location.x : (location.x + transPoint.x) * scale) + offset.x;
                                        var y = (_this40.maps.isTileMap ? location.y : (location.y + transPoint.y) * scale) + offset.y;
                                        ele.setAttribute('transform', 'translate( ' + x + ' ' + y + ' )');
                                        _this40.markerSVGObject.appendChild(ele);
                                        var element = markerData.length - 1 === dataIndex ? 'marker' : null;
                                        var markerPoint = new Point(x, y);
                                        if (markerSettings.animationDuration > 0) {
                                            elementAnimate(ele, markerSettings.animationDelay, markerSettings.animationDuration, markerPoint, _this40.maps, element);
                                        }
                                    }
                                }
                            });
                        });
                        if (this.markerSVGObject.childElementCount > 0) {
                            layerElement.appendChild(this.markerSVGObject);
                        }
                        if (markerTemplateEle.childElementCount > 0 && getElementByID(this.maps.element.id + '_Secondary_Element')) {
                            getElementByID(this.maps.element.id + '_Secondary_Element').appendChild(markerTemplateEle);
                        }
                    }
                }, {
                    key: 'markerExplode',
                    value: function markerExplode(targetId, targetElement) {
                        var layerIndex = parseFloat(targetId.split('_')[2]);
                        var markerIndex = parseFloat(targetId.split('_')[4]);
                        var dataIndex = parseFloat(targetId.split('_')[6]);
                        var layer = this.maps.layersCollection[layerIndex];
                        var marker = layer.markerSettings[markerIndex];
                        var element = marker.shape === 'Balloon' ? targetElement.parentNode : targetElement;
                        var lat = marker.dataSource[dataIndex]['latitude'];
                        var lng = marker.dataSource[dataIndex]['longitude'];
                        var transform = element.getAttribute('transform') || '';
                        var transX = parseFloat(transform.split(' ')[1]);
                        var transY = parseFloat(transform.split(' ')[2]);
                        var location = { x: transX, y: transY };
                        var elements = document.getElementsByClassName('EJ2-Map_Trackball');
                        if (elements.length > 0 && this.previousExplodeId !== targetId) {
                            this.removeTrackElements();
                        }
                        if (elements.length === 0 && marker.shape !== 'Image' && isNullOrUndefined(marker.template)) {
                            for (var i = 0; i < 2; i++) {
                                var markerID = this.maps.element.id + '_LayerIndex_' + layerIndex + '_MarkerIndex_' + markerIndex + '_Trackball_' + i;
                                var shape = {
                                    size: new Size(marker.width + 5 + (i ? 20 : 0), marker.height + 5 + (i ? 10 : 0)),
                                    fill: marker.fill, borderColor: i ? 'transparent' : marker.border.color,
                                    borderWidth: i ? 0 : marker.border.width, opacity: i ? 0.2 : marker.opacity,
                                    dashArray: marker.dashArray
                                };
                                if (marker.shape === 'Balloon') {
                                    var rect = element.getBoundingClientRect();
                                    var currentWidth = rect.width / 2 - shape['size'].width / 2;
                                    var currentHeight = rect.height / 2 - shape['size'].height / 2;
                                    location.y -= currentHeight;
                                    location.x += currentWidth / 4;
                                }
                                var trackEle = this.drawSymbol(marker.shape, marker.imageUrl, location, markerID, shape);
                                location.x = transX;
                                location.y = transY;
                                trackEle.setAttribute('style', 'pointer-events:none');
                                trackEle.setAttribute('class', 'EJ2-Map_Trackball');
                                this.trackElements.push(trackEle);
                                element.parentNode.appendChild(trackEle);
                            }
                            this.previousExplodeId = targetId;
                            this.removeMarkerExplode();
                        }
                    }
                }, {
                    key: 'removeMarkerExplode',
                    value: function removeMarkerExplode() {
                        this.isMarkerExplode = window.setTimeout(this.removeTrackElements, 2000);
                    }
                }, {
                    key: 'removeTrackElements',
                    value: function removeTrackElements() {
                        var elements = document.getElementsByClassName('EJ2-Map_Trackball');
                        for (var i = 0, len = elements.length; i < len; i++) {
                            this.previousExplodeId = '';
                            remove(elements[0]);
                        }
                    }
                }, {
                    key: 'drawSymbol',
                    value: function drawSymbol(shape, imageUrl, location, markerID, shapeCustom) {
                        var markerEle = void 0;
                        var x = void 0;
                        var y = void 0;
                        var size = shapeCustom['size'];
                        var borderColor = shapeCustom['borderColor'];
                        var borderWidth = parseFloat(shapeCustom['borderWidth']);
                        var fill = shapeCustom['fill'];
                        var dashArray = shapeCustom['dashArray'];
                        var border = { color: borderColor, width: borderWidth };
                        var opacity = shapeCustom['opacity'];
                        var circleOptions = void 0;
                        var pathOptions = void 0;
                        var rectOptions = void 0;
                        pathOptions = new PathOption(markerID, fill, borderWidth, borderColor, opacity, dashArray, '');
                        if (shape === 'Circle') {
                            var radius = (size.width + size.height) / 4;
                            circleOptions = new CircleOption(markerID, fill, border, opacity, location.x, location.y, radius, dashArray);
                            markerEle = this.maps.renderer.drawCircle(circleOptions);
                        } else if (shape === 'Rectangle') {
                            x = location.x - size.width / 2;
                            y = location.y - size.height / 2;
                            rectOptions = new RectOption(markerID, fill, border, opacity, new Rect(x, y, size.width, size.height), null, null, '', dashArray);
                            markerEle = this.maps.renderer.drawRectangle(rectOptions);
                        } else if (shape === 'Image') {
                            x = location.x - size.width / 2;
                            y = location.y - size.height / 2;
                            merge(pathOptions, { 'href': imageUrl, 'height': size.height, 'width': size.width, x: x, y: y });
                            markerEle = this.maps.renderer.drawImage(pathOptions);
                        } else {
                            markerEle = calculateShapes(this.maps, shape, pathOptions, size, location, this.markerSVGObject);
                        }
                        return markerEle;
                    }
                }, {
                    key: 'markerClick',
                    value: function markerClick(e) {
                        var target = e.target.id;
                        if (target.indexOf('_LayerIndex_') === -1) {
                            return;
                        }
                        var options = this.getMarker(target);
                        if (isNullOrUndefined(options)) {
                            return;
                        }
                        var eventArgs = {
                            cancel: false, name: _markerClick, data: options.data, maps: this.maps, marker: options.marker,
                            target: target, x: e.clientX, y: e.clientY
                        };
                        this.maps.trigger(_markerClick, eventArgs);
                    }
                }, {
                    key: 'getMarker',
                    value: function getMarker(target) {
                        var id = target.split('_LayerIndex_');
                        var index = parseInt(id[1].split('_')[0], 10);
                        var layer = this.maps.layers[index];
                        var data = void 0;
                        var marker = void 0;
                        if (target.indexOf('_MarkerIndex_') > -1) {
                            var markerIndex = parseInt(id[1].split('_MarkerIndex_')[1].split('_')[0], 10);
                            var dataIndex = parseInt(id[1].split('_DataIndex_')[1].split('_')[0], 10);
                            marker = layer.markerSettings[markerIndex];
                            if (!isNaN(markerIndex)) {
                                data = marker.dataSource[dataIndex];
                                return { marker: marker, data: data };
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'markerMove',
                    value: function markerMove(e) {
                        var targetId = e.target.id;
                        if (targetId.indexOf('_LayerIndex_') === -1) {
                            return;
                        }
                        var options = this.getMarker(targetId);
                        if (isNullOrUndefined(options)) {
                            return;
                        }
                        var eventArgs = {
                            cancel: false, name: markerMouseMove, data: options.data, maps: this.maps,
                            target: targetId, x: e.clientX, y: e.clientY
                        };
                        this.maps.trigger(markerMouseMove, eventArgs);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'Marker';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(maps) {
                        /**
                         * Destroy method performed here
                         */
                    }
                }]);

                return Marker;
            }());

            _export2('DataLabel', DataLabel = function () {
                function DataLabel(maps) {
                    _classCallCheck(this, DataLabel);

                    this.intersect = [];
                    this.value = { rightWidth: 0, leftWidth: 0, heightTop: 0, heightBottom: 0 };
                    this.maps = maps;
                    this.dataLabelCollections = [];
                }
                //tslint:disable:max-func-body-length


                _createClass(DataLabel, [{
                    key: 'getDataLabel',
                    value: function getDataLabel(dataSource, labelPath, shapeName, shapeDataPath) {
                        var text = void 0;
                        for (var i = 0; i < dataSource.length; i++) {
                            var data = dataSource[i];
                            if (data[shapeDataPath] === shapeName) {
                                text = data;
                                break;
                            }
                        }
                        return text;
                    }
                }, {
                    key: 'renderLabel',
                    value: function renderLabel(layer, layerIndex, shape, layerData, group, labelTemplateElement, index) {
                        var dataLabel = layer.dataLabelSettings;
                        var style = layer.dataLabelSettings.textStyle;
                        var templateFn = void 0;
                        var options = void 0;
                        var dataLabelSettings = layer.dataLabelSettings;
                        var labelpath = layer.dataLabelSettings.labelPath;
                        var shapePoint = [[]];
                        var midIndex = 0;
                        var pointsLength = 0;
                        var shapeData = shape;
                        var element = void 0;
                        var text = '';
                        var datasrcObj = void 0;
                        var currentLength = 0;
                        var location = void 0;
                        var labelId = this.maps.element.id + '_LayerIndex_' + layerIndex + '_shapeIndex_' + index + '_LabelIndex_' + index;
                        var textLocation = new Point(0, 0);
                        /* tslint:disable:no-string-literal */
                        for (var i = 0, len = layerData.length; i < len; i++) {
                            var shapes = layerData[i];
                            shape = shapes['property'];
                            if (!isNullOrUndefined(shapes['property']) && shapeData['properties']['name'] === shape['name']) {
                                if (!layerData[i]['_isMultiPolygon']) {
                                    shapePoint.push(this.getPoint(layerData[i], []));
                                    currentLength = shapePoint[shapePoint.length - 1].length;
                                    if (pointsLength < currentLength) {
                                        pointsLength = currentLength;
                                        midIndex = shapePoint.length - 1;
                                    }
                                } else {
                                    var _layer2 = layerData[i];
                                    for (var j = 0; j < _layer2.length; j++) {
                                        shapePoint.push(this.getPoint(_layer2[j], []));
                                        currentLength = shapePoint[shapePoint.length - 1].length;
                                        if (pointsLength < currentLength) {
                                            pointsLength = currentLength;
                                            midIndex = shapePoint.length - 1;
                                        }
                                    }
                                }
                            }
                        }
                        if (!isNullOrUndefined(layer.dataSource) && layer.dataSource.length > 0) {
                            var localData = extend([], layer.dataSource, null, true);
                            datasrcObj = this.getDataLabel(localData, labelpath, shapeData['properties'][layer.shapePropertyPath], layer.shapeDataPath);
                            datasrcObj[labelpath] = datasrcObj[labelpath];
                            text = datasrcObj[labelpath];
                        } else {
                            text = shapeData['properties'][labelpath];
                        }
                        location = findMidPointOfPolygon(shapePoint[midIndex]);
                        if (!isNullOrUndefined(text) && !isNullOrUndefined(location)) {
                            location['y'] = this.maps.projectionType === 'Mercator' ? location['y'] : -location['y'];
                            if (!isNullOrUndefined(this.maps.format) && !isNaN(parseFloat(text))) {
                                text = Internalize(this.maps, parseFloat(text));
                                if (!isNullOrUndefined(datasrcObj)) {
                                    datasrcObj[labelpath] = text;
                                }
                            }
                            var eventargs = {
                                name: 'labelRendering', maps: this.maps, cancel: false, border: dataLabel.border, datalabel: dataLabel,
                                fill: dataLabel.fill, template: dataLabel.template, text: text
                            };
                            this.maps.trigger('labelRendering', eventargs);
                            var position = [];
                            var width = location['rightMax']['x'] - location['leftMax']['x'];
                            var textSize = measureText(text, style);
                            var trimmedLable = textTrim(width, text, style);
                            var elementSize = measureText(trimmedLable, style);
                            var startY = location['y'] - textSize['height'] / 4;
                            var endY = location['y'] + textSize['height'] / 4;
                            var start = location['y'] - textSize['height'] / 4;
                            var end = location['y'] + textSize['height'] / 4;
                            position = filter(shapePoint[midIndex], startY, endY);
                            if (position.length > 5 && (!isNullOrUndefined(shapeData['geometry']) ? shapeData['geometry']['type'] !== 'MultiPolygon' : shapeData['type'] !== 'MultiPolygon')) {
                                var location1 = findMidPointOfPolygon(position);
                                location['x'] = location1['x'];
                                width = location1['rightMax']['x'] - location1['leftMax']['x'];
                            }
                            var xpositionEnds = location['x'] + textSize['width'] / 2;
                            var xpositionStart = location['x'] - textSize['width'] / 2;
                            trimmedLable = textTrim(width, text, style);
                            elementSize = measureText(trimmedLable, style);
                            this.value[index] = { rightWidth: xpositionEnds, leftWidth: xpositionStart, heightTop: start, heightBottom: end };
                            var animate$$1 = layer.animationDuration !== 0 || isNullOrUndefined(this.maps.zoomModule);
                            var translate = getTranslate(this.maps, layer, animate$$1);
                            var scale = translate['scale'];
                            var transPoint = translate['location'];
                            var labelElement = void 0;
                            if (eventargs.template !== '') {
                                templateFn = getTemplateFunction(eventargs.template);
                                var templateElement = templateFn(this.maps);
                                labelElement = convertElementFromLabel(templateElement, labelId, !isNullOrUndefined(datasrcObj) ? datasrcObj : shapeData['properties'], index, this.maps);
                                labelElement.style.left = Math.abs(this.maps.baseMapRectBounds['min']['x'] - location['x']) * scale + 'px';
                                labelElement.style.top = Math.abs(this.maps.baseMapRectBounds['min']['y'] - location['y']) * scale + 'px';
                                labelTemplateElement.appendChild(labelElement);
                                var labelWidth = labelElement.offsetWidth;
                                var labelHeight = labelElement.offsetHeight;
                                // if (labelWidth > width || labelWidth === 0 || labelHeight > location['height']) {
                                //     labelElement.style.display = 'None';
                                // }
                            } else {
                                if (dataLabelSettings.smartLabelMode === 'Trim') {
                                    options = new TextOption(labelId, textLocation.x, textLocation.y, 'middle', trimmedLable, '', '');
                                }
                                if (dataLabelSettings.smartLabelMode === 'None') {
                                    options = new TextOption(labelId, textLocation.x, textLocation.y, 'middle', text, '', '');
                                }
                                if (dataLabelSettings.smartLabelMode === 'Hide') {
                                    text = width >= textSize['width'] ? text : '';
                                    options = new TextOption(labelId, textLocation.x, textLocation.y, 'middle', text, '', '');
                                }
                                text = options['text'];
                                if (dataLabelSettings.intersectionAction === 'Hide') {
                                    for (var _i5 = 0; _i5 < this.intersect.length; _i5++) {
                                        if (!isNullOrUndefined(this.intersect[_i5])) {
                                            if (this.value[index]['leftWidth'] > this.intersect[_i5]['rightWidth'] || this.value[index]['rightWidth'] < this.intersect[_i5]['leftWidth'] || this.value[index]['heightTop'] > this.intersect[_i5]['heightBottom'] || this.value[index]['heightBottom'] < this.intersect[_i5]['heightTop']) {
                                                text = text;
                                            } else {
                                                text = '';
                                                break;
                                            }
                                        }
                                    }
                                    this.intersect.push(this.value[index]);
                                    options = new TextOption(labelId, textLocation.x, textLocation.y, 'middle', text, '', '');
                                }
                                var difference = void 0;
                                if (dataLabelSettings.intersectionAction === 'Trim') {
                                    for (var _j = 0; _j < this.intersect.length; _j++) {
                                        if (!isNullOrUndefined(this.intersect[_j])) {
                                            if (this.intersect[_j]['rightWidth'] < this.value[index]['leftWidth'] || this.intersect[_j]['leftWidth'] > this.value[index]['rightWidth'] || this.intersect[_j]['heightBottom'] < this.value[index]['heightTop'] || this.intersect[_j]['heightTop'] > this.value[index]['heightBottom']) {
                                                trimmedLable = text;
                                                difference = 0;
                                            } else {
                                                if (this.value[index]['leftWidth'] > this.intersect[_j]['leftWidth']) {
                                                    width = this.intersect[_j]['rightWidth'] - this.value[index]['leftWidth'];
                                                    difference = width - (this.value[index]['rightWidth'] - this.value[index]['leftWidth']);
                                                    trimmedLable = textTrim(difference, text, style);
                                                    break;
                                                }
                                                if (this.value[index]['leftWidth'] < this.intersect[_j]['leftWidth']) {
                                                    width = this.value[index]['rightWidth'] - this.intersect[_j]['leftWidth'];
                                                    difference = Math.abs(width - (this.value[index]['rightWidth'] - this.value[index]['leftWidth']));
                                                    trimmedLable = textTrim(difference, text, style);
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    this.intersect.push(this.value[index]);
                                    options = new TextOption(labelId, textLocation.x, textLocation.y, 'middle', trimmedLable, '', '');
                                }
                                if (dataLabelSettings.intersectionAction === 'None') {
                                    options = new TextOption(labelId, textLocation.x, textLocation.y, 'middle', text, '', '');
                                }
                                if (trimmedLable.length > 1) {
                                    var border = eventargs.border;
                                    if (border['width'] > 1) {
                                        var fill = eventargs.fill;
                                        var opacity = dataLabelSettings.opacity;
                                        var rx = dataLabelSettings.rx;
                                        var ry = dataLabelSettings.ry;
                                        var x = location['x'] - textSize['width'] / 2;
                                        var y = location['y'] - textSize['height'] / 2;
                                        var rectOptions = new RectOption(this.maps.element.id + '_LayerIndex_' + layerIndex + '_shapeIndex_' + index + '_rectIndex_' + index, fill, border, opacity, new Rect(x, y, textSize['width'], textSize['height']), rx, ry);
                                        var rect = this.maps.renderer.drawRectangle(rectOptions);
                                        group.appendChild(rect);
                                    }
                                }
                                element = renderTextElement(options, style, style.color, group);
                                element.setAttribute('transform', 'translate( ' + (location['x'] + transPoint.x) * scale + ' ' + ((location['y'] + transPoint.y) * scale + elementSize.height / 4) + ' )');
                                group.appendChild(element);
                            }
                            this.dataLabelCollections.push({
                                location: { x: location['x'], y: location['y'] + elementSize.height / 4 },
                                element: isNullOrUndefined(labelElement) ? element : labelElement,
                                layerIndex: layerIndex,
                                shapeIndex: index,
                                labelIndex: index
                            });
                            if (labelTemplateElement.childElementCount > 0 && !this.maps.element.contains(labelTemplateElement)) {
                                document.getElementById(this.maps.element.id + '_Secondary_Element').appendChild(labelTemplateElement);
                            }
                        }
                    }
                }, {
                    key: 'getPoint',
                    value: function getPoint(shapes, points) {
                        shapes.map(function (current, index) {
                            points.push(new Point(current['point']['x'], current['point']['y']));
                        });
                        return points;
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'DataLabel';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(maps) {
                        /**
                         * Destroy method performed here
                         */
                    }
                }]);

                return DataLabel;
            }());

            _export2('NavigationLine', NavigationLine = function () {
                function NavigationLine(maps) {
                    _classCallCheck(this, NavigationLine);

                    this.maps = maps;
                }
                /* tslint:disable:no-string-literal */
                //tslint:disable:max-func-body-length


                _createClass(NavigationLine, [{
                    key: 'renderNavigation',
                    value: function renderNavigation(layer, factor, layerIndex) {
                        var navigationEle = void 0;
                        var navigation = void 0;
                        navigation = layer.navigationLineSettings;
                        var longitude = void 0;
                        var point = [];
                        var latitude = void 0;
                        var visible = void 0;
                        var angle = void 0;
                        var width = void 0;
                        var color = void 0;
                        var dashArray = void 0;
                        var pathOption = void 0;
                        var direction = void 0;
                        var showArrow = void 0;
                        var arrowColor = void 0;
                        var arrowSize = void 0;
                        var arrowSettings = void 0;
                        var arrowPosition = void 0;
                        var startArrow = void 0;
                        var endArrow = void 0;
                        var offSet = void 0;
                        var offSetValue = void 0;
                        var navigationGroup = void 0;
                        var d = void 0;
                        var group = this.maps.renderer.createGroup({
                            id: this.maps.element.id + '_layerIndex_' + layerIndex + '_line_Group'
                        });
                        for (var i = 0; i < navigation.length; i++) {
                            latitude = navigation[i]['properties']['latitude'];
                            longitude = navigation[i]['properties']['longitude'];
                            visible = navigation[i]['properties']['visible'];
                            angle = navigation[i]['properties']['angle'];
                            width = navigation[i]['width'] || 1;
                            color = navigation[i]['color'];
                            dashArray = navigation[i]['properties']['dashArray'];
                            arrowSettings = navigation[i]['properties']['arrowSettings'];
                            showArrow = isNullOrUndefined(arrowSettings) ? false : arrowSettings['properties']['showArrow'];
                            if (longitude['length'] === latitude['length'] && visible) {
                                for (var _i6 = 0; _i6 < longitude['length']; _i6++) {
                                    var location = this.maps.isTileMap ? convertTileLatLongToPoint(new Point(longitude[_i6], latitude[_i6]), factor, this.maps.tileTranslatePoint, true) : convertGeoToPoint(latitude[_i6], longitude[_i6], factor, layer, this.maps);
                                    point.push(location);
                                }
                            }
                            navigationGroup = this.maps.renderer.createGroup({
                                id: this.maps.element.id + '_layerIndex_' + layerIndex + '_NavigationGroup' + i + ''
                            });
                            for (var j = 0; j < point['length'] - 1; j++) {
                                angle = -1 > angle ? -1 : angle;
                                angle = 1 < angle ? 1 : angle;
                                var arcId = this.maps.element.id + '_LayerIndex_' + layerIndex + '_NavigationIndex_' + i + '_Line' + j + '';
                                var radius = this.convertRadius(point[j], point[j + 1]);
                                if (angle <= 1 && angle > 0) {
                                    direction = 0;
                                    if (point[j]['x'] > point[j + 1]['x']) {
                                        direction = 1;
                                    }
                                }
                                if (angle >= -1 && angle < 0) {
                                    direction = 1;
                                    if (point[j]['x'] > point[j + 1]['x']) {
                                        direction = 0;
                                    }
                                }
                                if (point[j]['x'] !== point[j + 1]['x']) {
                                    if (showArrow) {
                                        arrowColor = arrowSettings['properties']['color'];
                                        arrowSize = arrowSettings['properties']['size'];
                                        offSetValue = arrowSettings['properties']['offSet'] === undefined ? 0 : arrowSettings['properties']['offSet'];
                                        var divide = Math.round(arrowSize / 2);
                                        arrowPosition = arrowSettings['properties']['position'];
                                        startArrow = arrowPosition === 'Start' ? 'url(#triangle' + i + ')' : null;
                                        endArrow = arrowPosition === 'End' ? 'url(#triangle' + i + ')' : null;
                                        if (offSet !== 0 && angle === 0) {
                                            offSet = arrowPosition === 'Start' ? offSetValue : -offSetValue;
                                        }
                                        offSet = isNullOrUndefined(offSet) ? 0 : offSet;
                                        var triId = this.maps.element.id + '_triangle';
                                        var defElement = this.maps.renderer.createDefs();
                                        defElement.innerHTML += '<marker id="' + 'triangle' + i + '"></marker>';
                                        var markerEle = defElement.querySelector('#' + 'triangle' + i);
                                        markerEle.setAttribute('markerWidth', arrowSize.toString());
                                        markerEle.setAttribute('markerHeight', arrowSize.toString());
                                        markerEle.setAttribute('refX', (divide - offSet).toString());
                                        markerEle.setAttribute('refY', divide.toString());
                                        markerEle.setAttribute('orient', 'auto');
                                        var d2 = 'M 0,0  L 0,' + arrowSize + ' L ' + divide + ', ' + divide + ' Z';
                                        pathOption = new PathOption(triId, arrowColor, width, color, 1, dashArray, d2);
                                        navigationEle = this.maps.renderer.drawPath(pathOption);
                                        markerEle.appendChild(navigationEle);
                                        defElement.appendChild(markerEle);
                                        navigationGroup.appendChild(defElement);
                                    }
                                    d = angle === 0 ? 'M ' + point[j]['x'] + ',' + point[j]['y'] + 'L ' + point[j + 1]['x'] + ',' + point[j + 1]['y'] + '' : 'M ' + point[j]['x'] + ',' + point[j]['y'] + ' A ' + angle * radius + ' ' + angle * radius + ' ' + 0 + ',' + 0 + ',' + direction + ' , ' + point[j + 1]['x'] + ',' + point[j + 1]['y'] + ' ';
                                    pathOption = new PathOption(arcId, 'none', 2, color, 1, dashArray, d);
                                    navigationEle = this.maps.renderer.drawPath(pathOption);
                                    if (!isNullOrUndefined(arrowPosition)) {
                                        arrowPosition === 'Start' ? navigationEle.setAttribute('marker-start', startArrow) : navigationEle.setAttribute('marker-end', endArrow);
                                    }
                                    navigationGroup.appendChild(navigationEle);
                                    group.appendChild(navigationGroup);
                                }
                            }
                            point = [];
                        }
                        return group;
                    }
                }, {
                    key: 'convertRadius',
                    value: function convertRadius(point1, point2) {
                        var value1 = point2['x'] - point1['x'];
                        var value2 = point2['y'] - point1['y'];
                        var value = Math.sqrt(Math.pow(value1, 2) + Math.pow(value2, 2));
                        return value;
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'NavigationLine';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(maps) {
                        /**
                         * Destroy method performed here
                         */
                    }
                }]);

                return NavigationLine;
            }());

            _export2('Legend', Legend = function () {
                function Legend(maps) {
                    _classCallCheck(this, Legend);

                    this.legendBorderRect = new Rect(0, 0, 0, 0);
                    this.totalPages = [];
                    this.page = 0;
                    this.currentPage = 0;
                    this.interactiveLocation = new Point(0, 0);
                    this.legendItemRect = new Rect(0, 0, 0, 0);
                    this.heightIncrement = 0;
                    this.widthIncrement = 0;
                    this.textMaxWidth = 0;
                    this.areaRect = new Rect(0, 0, 0, 0);
                    this.maps = maps;
                    this.addEventListener();
                }

                _createClass(Legend, [{
                    key: 'renderLegend',
                    value: function renderLegend() {
                        this.calculateLegendBounds();
                        this.drawLegend();
                    }
                }, {
                    key: 'calculateLegendBounds',
                    value: function calculateLegendBounds() {
                        var _this41 = this;

                        var map = this.maps;
                        var legend = map.legendSettings;
                        this.legendCollection = [];
                        var spacing = 10;
                        var leftPadding = 10;
                        var topPadding = map.mapAreaRect.y;
                        this.legendRenderingCollections = [];
                        map.layersCollection.forEach(function (layer, layerIndex) {
                            if (!isNullOrUndefined(layer.shapeData)) {
                                var layerData = layer.shapeData['features'];
                                var dataPath = layer.shapeDataPath;
                                var propertyPath = layer.shapePropertyPath;
                                var dataSource = layer.dataSource;
                                var colorValuePath = void 0;
                                var colorMapping = void 0;
                                if (legend.type === 'Layers' && layer.visible) {
                                    colorValuePath = layer.shapeSettings.colorValuePath;
                                    colorMapping = layer.shapeSettings.colorMapping;
                                    _this41.getLegends(layerIndex, layerData, colorMapping, dataSource, dataPath, colorValuePath, propertyPath);
                                } else if (legend.type === 'Bubbles') {
                                    var _iteratorNormalCompletion16 = true;
                                    var _didIteratorError16 = false;
                                    var _iteratorError16 = undefined;

                                    try {
                                        for (var _iterator16 = layer.bubbleSettings[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                                            var bubble = _step16.value;

                                            if (bubble.visible) {
                                                colorValuePath = bubble.colorValuePath;
                                                colorMapping = bubble.colorMapping;
                                                dataSource = bubble.dataSource;
                                                _this41.getLegends(layerIndex, layerData, colorMapping, dataSource, dataPath, colorValuePath, propertyPath);
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
                                    _this41.getMarkersLegendCollections(layerIndex, layer.markerSettings);
                                }
                            }
                        });
                        var defaultSize = 25;
                        var legendTitle = map.legendSettings.title.text;
                        var titleTextStyle = map.legendSettings.titleStyle;
                        if (this.legendCollection.length > 0) {
                            var legendMode = legend.mode;
                            var shapeX = 0;
                            var shapeY = 0;
                            var textX = 0;
                            var textY = 0;
                            var shapePadding = legend.shapePadding;
                            var textPadding = 10;
                            var shapeHeight = legend.shapeHeight;
                            var shapeWidth = legend.shapeWidth;
                            var shapeLocation = [];
                            var textLocation = [];
                            var position = legend.position;
                            var labelAction = legend.labelDisplayMode;
                            var arrangement = legend.orientation === 'None' ? position === 'Top' || position === 'Bottom' ? 'Horizontal' : 'Vertical' : legend.orientation;
                            var legendWidth = legend.width.length > 1 ? legend.width.indexOf('%') > -1 ? map.availableSize.width / 100 * parseInt(legend.width, 10) : parseInt(legend.width, 10) : null;
                            var legendHeight = legend.height.length > 1 ? legend.height.indexOf('%') > -1 ? map.availableSize.height / 100 * parseInt(legend.height, 10) : parseInt(legend.height, 10) : null;
                            var legendItemStartX = void 0;
                            var legendItemStartY = void 0;
                            var startX = 0;
                            var startY = 0;
                            var legendtitleSize = measureText(legendTitle, titleTextStyle);
                            if (legendMode === 'Interactive') {
                                var itemTextStyle = legend.textStyle;
                                var rectWidth = void 0;
                                var rectHeight = void 0;
                                var legendLength = this.legendCollection.length;
                                rectWidth = arrangement === 'Horizontal' ? isNullOrUndefined(legendWidth) ? map.mapAreaRect.width / legendLength : legendWidth / legendLength : isNullOrUndefined(legendWidth) ? defaultSize : legendWidth;
                                rectHeight = arrangement === 'Horizontal' ? isNullOrUndefined(legendHeight) ? defaultSize : legendHeight : isNullOrUndefined(legendHeight) ? map.mapAreaRect.height / legendLength : legendHeight / legendLength;
                                startX = 0;
                                startY = legendtitleSize.height + spacing;
                                var _position = legend.labelPosition;
                                var _textX = 0;
                                var _textY = 0;
                                var _textPadding = 10;
                                var itemStartX = 0;
                                var itemStartY = 0;
                                var maxTextHeight = 0;
                                var maxTextWidth = 0;
                                for (var i = 0; i < this.legendCollection.length; i++) {
                                    startX = arrangement === 'Horizontal' ? startX + rectWidth : startX;
                                    startY = arrangement === 'Horizontal' ? startY : startY + rectHeight;
                                    var legendText = this.legendCollection[i]['text'];
                                    var itemTextSize = new Size(0, 0);
                                    if (labelAction === 'None') {
                                        itemTextSize = measureText(legendText, itemTextStyle);
                                    } else if (labelAction === 'Trim') {
                                        legendText = textTrim(arrangement === 'Horizontal' ? rectWidth : rectHeight, legendText, itemTextStyle);
                                        itemTextSize = measureText(legendText, itemTextStyle);
                                    } else {
                                        legendText = '';
                                    }
                                    maxTextHeight = Math.max(maxTextHeight, itemTextSize.height);
                                    maxTextWidth = Math.max(maxTextWidth, itemTextSize.width);
                                    if (itemTextSize.width > 0 && itemTextSize.height > 0) {
                                        if (arrangement === 'Horizontal') {
                                            _textX = startX + rectWidth / 2;
                                            _textY = _position === 'After' ? startY + rectHeight + itemTextSize.height / 2 + _textPadding : startY - _textPadding;
                                        } else {
                                            _textX = _position === 'After' ? startX - itemTextSize.width / 2 - _textPadding : startX + rectWidth + itemTextSize.width / 2 + _textPadding;
                                            _textY = startY + rectHeight / 2 + itemTextSize.height / 4;
                                        }
                                    }
                                    if (i === 0) {
                                        itemStartX = arrangement === 'Horizontal' ? startX : _position === 'After' ? _textX - itemTextSize.width / 2 : startX;
                                        itemStartY = arrangement === 'Horizontal' ? _position === 'After' ? startY : _textY - itemTextSize.height / 2 : startY;
                                    } else if (i === this.legendCollection.length - 1) {
                                        legendWidth = arrangement === 'Horizontal' ? Math.abs(startX + rectWidth - itemStartX) : rectWidth + maxTextWidth + _textPadding;
                                        legendHeight = arrangement === 'Horizontal' ? rectHeight + maxTextHeight / 2 + _textPadding : Math.abs(startY + rectHeight - itemStartY);
                                    }
                                    this.legendRenderingCollections.push({
                                        fill: this.legendCollection[i]['fill'], x: startX, y: startY,
                                        width: rectWidth, height: rectHeight,
                                        text: legendText, textX: _textX, textY: _textY,
                                        textWidth: itemTextSize.width, textHeight: itemTextSize.height
                                    });
                                }
                                this.legendItemRect = { x: itemStartX, y: itemStartY, width: legendWidth, height: legendHeight };
                            } else {
                                legendWidth = isNullOrUndefined(legendWidth) ? map.mapAreaRect.width : legendWidth;
                                legendHeight = isNullOrUndefined(legendHeight) ? map.mapAreaRect.height : legendHeight;
                                var j = 0;
                                for (var _i7 = 0; _i7 < this.legendCollection.length; _i7++) {
                                    var legendItem = this.legendCollection[_i7];
                                    if (isNullOrUndefined(this.totalPages[this.page])) {
                                        this.totalPages[this.page] = { Page: this.page + 1, Collection: [] };
                                    }
                                    var legendTextSize = measureText(legendItem['text'], legend.textStyle);
                                    this.textMaxWidth = Math.max(this.textMaxWidth, legendTextSize.width);
                                    if (_i7 === 0) {
                                        startX = shapeX = leftPadding + shapeWidth / 2;
                                        startY = shapeY = topPadding + legendtitleSize.height + (shapeHeight > legendTextSize.height ? shapeHeight / 2 : legendTextSize.height / 4);
                                    } else {
                                        var maxSize = legendTextSize.height > shapeHeight ? legendTextSize.height : shapeHeight;
                                        if (arrangement === 'Horizontal') {
                                            var prvePositionX = textLocation[j - 1].x + textLocation[j - 1].width + textPadding + shapeWidth;
                                            if (prvePositionX + shapePadding + legendTextSize.width > legendWidth) {
                                                var nextPositionY = (textLocation[j - 1].y > shapeLocation[j - 1].y + shapeHeight / 2 ? textLocation[j - 1].y : shapeLocation[j - 1].y + shapeHeight / 2) + topPadding;
                                                if (nextPositionY + maxSize > legendHeight) {
                                                    this.getPageChanged();
                                                    j = 0;
                                                    shapeLocation = [];
                                                    textLocation = [];
                                                    shapeX = startX;
                                                    shapeY = startY;
                                                } else {
                                                    shapeX = shapeLocation[0].x;
                                                    shapeY = nextPositionY + maxSize / 2;
                                                }
                                            } else {
                                                shapeX = prvePositionX - shapeWidth / 2;
                                                shapeY = shapeLocation[j - 1].y;
                                            }
                                        } else {
                                            var prevPositionY = textLocation[j - 1].y > shapeLocation[j - 1].y + shapeHeight / 2 ? textLocation[j - 1].y : shapeLocation[j - 1].y + shapeHeight / 2;
                                            if (prevPositionY + topPadding + maxSize > legendHeight) {
                                                var nextPositionX = textLocation[j - 1].x + this.textMaxWidth + textPadding;
                                                if (nextPositionX + shapePadding + legendTextSize.width > legendWidth) {
                                                    shapeX = startX;
                                                    shapeY = startY;
                                                    textLocation = [];
                                                    shapeLocation = [];
                                                    this.getPageChanged();
                                                    j = 0;
                                                } else {
                                                    shapeX = nextPositionX + shapeWidth / 2;
                                                    shapeY = shapeLocation[0].y;
                                                }
                                            } else {
                                                shapeX = shapeLocation[j - 1].x;
                                                shapeY = prevPositionY + topPadding + shapeHeight / 2;
                                            }
                                        }
                                    }
                                    textX = shapeX + shapeWidth / 2 + shapePadding;
                                    textY = shapeY + legendTextSize.height / 4;
                                    shapeLocation.push({ x: shapeX, y: shapeY });
                                    textLocation.push({ x: textX, y: textY, width: legendTextSize.width, height: legendTextSize.height / 2 });
                                    this.totalPages[this.page]['Collection'].push({
                                        DisplayText: legendItem['text'],
                                        ImageSrc: legendItem['imageSrc'],
                                        Shape: { x: shapeX, y: shapeY },
                                        Text: { x: textX, y: textY },
                                        Fill: legendItem['fill'],
                                        Rect: {
                                            x: shapeLocation[j].x - shapeWidth / 2,
                                            y: shapeLocation[j].y - shapeHeight / 2 < textY - legendTextSize.height ? shapeLocation[j].y - shapeHeight / 2 : textY - legendTextSize.height,
                                            width: Math.abs(shapeLocation[j].x - shapeWidth / 2 - (textX + legendTextSize.width)),
                                            height: shapeHeight > legendTextSize.height ? shapeHeight : legendTextSize.height
                                        }
                                    });
                                    j++;
                                }
                                var collection = this.totalPages[0]['Collection'];
                                collection.forEach(function (legendObj, index) {
                                    var legendRect = new Rect(legendObj['Rect']['x'], legendObj['Rect']['y'], legendObj['Rect']['width'], legendObj['Rect']['height']);
                                    if (index === 0) {
                                        legendItemStartX = legendRect.x;
                                        legendItemStartY = legendRect.y;
                                    }
                                    _this41.widthIncrement = Math.max(_this41.widthIncrement, Math.abs(legendItemStartX - (legendRect.x + legendRect.width)));
                                    _this41.heightIncrement = Math.max(_this41.heightIncrement, Math.abs(legendItemStartY - (legendRect.y + legendRect.height)));
                                });
                                legendWidth = this.widthIncrement < legendWidth ? this.widthIncrement : legendWidth;
                                legendHeight = this.heightIncrement < legendHeight ? this.heightIncrement : legendHeight;
                                this.legendItemRect = {
                                    x: collection[0]['Rect']['x'], y: collection[0]['Rect']['y'],
                                    width: legendWidth, height: legendHeight
                                };
                            }
                        }
                    }
                }, {
                    key: 'getLegends',
                    value: function getLegends(layerIndex, layerData, colorMapping, dataSource, dataPath, colorValuePath, propertyPath) {
                        this.getRangeLegendCollection(layerIndex, layerData, colorMapping, dataSource, dataPath, colorValuePath, propertyPath);
                        this.getEqualLegendCollection(layerIndex, layerData, colorMapping, dataSource, dataPath, colorValuePath, propertyPath);
                        this.getDataLegendCollection(layerIndex, layerData, colorMapping, dataSource, dataPath, colorValuePath, propertyPath);
                    }
                }, {
                    key: 'getPageChanged',
                    value: function getPageChanged() {
                        this.page++;
                        if (isNullOrUndefined(this.totalPages[this.page])) {
                            this.totalPages[this.page] = { Page: this.page + 1, Collection: [] };
                        }
                    }
                }, {
                    key: 'drawLegend',
                    value: function drawLegend() {
                        var map = this.maps;
                        var legend = map.legendSettings;
                        var render = map.renderer;
                        var textOptions = void 0;
                        var textFont = legend.textStyle;
                        this.legendGroup = render.createGroup({ id: map.element.id + '_Legend_Group' });
                        var eventArgs = {
                            name: legendRendering, cancel: false, fill: '', shape: legend.shape,
                            shapeBorder: legend.shapeBorder
                        };
                        if (legend.mode === 'Interactive') {
                            for (var i = 0; i < this.legendRenderingCollections.length; i++) {
                                var itemId = map.element.id + '_Legend_Index_' + i;
                                var textId = map.element.id + '_Legend_Index_' + i + '_Text';
                                var item = this.legendRenderingCollections[i];
                                var bounds = new Rect(item['x'], item['y'], item['width'], item['height']);
                                var textLocation = new Point(item['textX'], item['textY']);
                                eventArgs.fill = item['fill'];
                                map.trigger(legendRendering, eventArgs);
                                var rectOptions = new RectOption(itemId, eventArgs.fill, eventArgs.shapeBorder, 1, bounds);
                                textOptions = new TextOption(textId, textLocation.x, textLocation.y, 'middle', item['text'], '', '');
                                renderTextElement(textOptions, textFont, textFont.color, this.legendGroup);
                                this.legendGroup.appendChild(render.drawRectangle(rectOptions));
                            }
                            this.renderLegendBorder();
                        } else {
                            this.drawLegendItem(this.currentPage);
                        }
                    }
                }, {
                    key: 'drawLegendItem',
                    value: function drawLegendItem(page) {
                        var map = this.maps;
                        var legend = map.legendSettings;
                        var spacing = 10;
                        var shapeSize = new Size(legend.shapeWidth, legend.shapeHeight);
                        var textOptions = void 0;
                        var render = map.renderer;
                        var shapeBorder = legend.shapeBorder;
                        var eventArgs = {
                            name: legendRendering, cancel: false, fill: '', shape: legend.shape
                        };
                        if (page >= 0 && page < this.totalPages.length) {
                            if (querySelector(this.legendGroup.id, this.maps.element.id)) {
                                remove(querySelector(this.legendGroup.id, this.maps.element.id));
                            }
                            var strokeColor = legend.shape === 'HorizontalLine' || legend.shape === 'VerticalLine' || legend.shape === 'Cross' ? isNullOrUndefined(legend.fill) ? '#000000' : legend.fill : shapeBorder.color;
                            var strokeWidth = legend.shape === 'HorizontalLine' || legend.shape === 'VerticalLine' || legend.shape === 'Cross' ? shapeBorder.width === 0 ? 1 : shapeBorder.width : shapeBorder.width;
                            eventArgs.shapeBorder = { width: strokeWidth, color: strokeColor };
                            for (var i = 0; i < this.totalPages[page]['Collection'].length; i++) {
                                var collection = this.totalPages[page]['Collection'][i];
                                var legendElement = render.createGroup({ id: map.element.id + '_Legend_Index_' + i });
                                var legendText = collection['DisplayText'];
                                eventArgs.fill = collection['Fill'];
                                eventArgs.shape = legend.type === 'Markers' ? isNullOrUndefined(collection['ImageSrc']) ? legend.shape : 'Image' : legend.shape;
                                map.trigger(legendRendering, eventArgs);
                                var shapeId = map.element.id + '_Legend_Shape_Index_' + i;
                                var textId = map.element.id + '_Legend_Text_Index_' + i;
                                var shapeLocation = collection['Shape'];
                                var textLocation = collection['Text'];
                                var imageUrl = isNullOrUndefined(collection['ImageSrc']) ? legend.shape : collection['ImageSrc'];
                                var renderOptions = new PathOption(shapeId, eventArgs.fill, eventArgs.shapeBorder.width, eventArgs.shapeBorder.color, 1, '');
                                legendElement.appendChild(drawSymbol(shapeLocation, eventArgs.shape, shapeSize, collection['ImageSrc'], renderOptions));
                                textOptions = new TextOption(textId, textLocation.x, textLocation.y, 'start', legendText, '', '');
                                renderTextElement(textOptions, legend.textStyle, legend.textStyle.color, legendElement);
                                this.legendGroup.appendChild(legendElement);
                            }
                            var pagingGroup = void 0;
                            var width = spacing;
                            var height = spacing / 2;
                            if (this.page !== 0) {
                                var pagingText = page + 1 + '/' + this.totalPages.length;
                                var pagingFont = legend.textStyle;
                                var pagingTextSize = measureText(pagingText, pagingFont);
                                var leftPageX = this.legendItemRect.x + this.legendItemRect.width - pagingTextSize.width - width * 2 - spacing;
                                var rightPageX = this.legendItemRect.x + this.legendItemRect.width;
                                var locY = this.legendItemRect.y + this.legendItemRect.height + height / 2 + spacing;
                                var pageTextX = rightPageX - width - pagingTextSize.width / 2 - spacing / 2;
                                pagingGroup = render.createGroup({ id: map.element.id + '_Legend_Paging_Group' });
                                var leftPageElement = render.createGroup({ id: map.element.id + '_Legend_Left_Paging_Group' });
                                var rightPageElement = render.createGroup({ id: map.element.id + '_Legend_Right_Paging_Group' });
                                var rightPath = ' M ' + rightPageX + ' ' + locY + ' L ' + (rightPageX - width) + ' ' + (locY - height) + ' L ' + (rightPageX - width) + ' ' + (locY + height) + ' z ';
                                var leftPath = ' M ' + leftPageX + ' ' + locY + ' L ' + (leftPageX + width) + ' ' + (locY - height) + ' L ' + (leftPageX + width) + ' ' + (locY + height) + ' z ';
                                var leftPageOptions = new PathOption(map.element.id + '_Left_Page', '#a6a6a6', 0, '#a6a6a6', 1, '', leftPath);
                                leftPageElement.appendChild(render.drawPath(leftPageOptions));
                                var leftRectPageOptions = new RectOption(map.element.id + '_Left_Page_Rect', 'transparent', {}, 1, new Rect(leftPageX - width / 2, locY - height * 2, width * 2, spacing * 2), null, null, '', '');
                                leftPageElement.appendChild(render.drawRectangle(leftRectPageOptions));
                                this.wireEvents(leftPageElement);
                                var rightPageOptions = new PathOption(map.element.id + '_Right_Page', '#a6a6a6', 0, '#a6a6a6', 1, '', rightPath);
                                rightPageElement.appendChild(render.drawPath(rightPageOptions));
                                var rightRectPageOptions = new RectOption(map.element.id + '_Right_Page_Rect', 'transparent', {}, 1, new Rect(rightPageX - width, locY - height, width, spacing), null, null, '', '');
                                rightPageElement.appendChild(render.drawRectangle(rightRectPageOptions));
                                this.wireEvents(rightPageElement);
                                pagingGroup.appendChild(leftPageElement);
                                pagingGroup.appendChild(rightPageElement);
                                var pageTextOptions = {
                                    'id': map.element.id + '_Paging_Text',
                                    'x': pageTextX,
                                    'y': locY + pagingTextSize.height / 4,
                                    'fill': '#a6a6a6',
                                    'font-size': '14px',
                                    'font-style': pagingFont.fontStyle,
                                    'font-family': pagingFont.fontFamily,
                                    'font-weight': pagingFont.fontWeight,
                                    'text-anchor': 'middle',
                                    'transform': '',
                                    'opacity': 1,
                                    'dominant-baseline': ''
                                };
                                pagingGroup.appendChild(render.createText(pageTextOptions, pagingText));
                                this.legendGroup.appendChild(pagingGroup);
                            }
                            this.renderLegendBorder();
                        }
                    }
                }, {
                    key: 'renderLegendBorder',
                    value: function renderLegendBorder() {
                        var map = this.maps;
                        var legend = map.legendSettings;
                        var legendTitle = legend.title.text;
                        var textStyle = legend.titleStyle;
                        var textOptions = void 0;
                        var spacing = 10;
                        var trimTitle = textTrim(this.legendItemRect.width + spacing * 2, legendTitle, textStyle);
                        var textSize = measureText(trimTitle, textStyle);
                        this.legendBorderRect = new Rect(this.legendItemRect.x - spacing, this.legendItemRect.y - spacing - textSize.height, this.legendItemRect.width + spacing * 2, this.legendItemRect.height + spacing * 2 + textSize.height + (legend.mode === 'Interactive' ? 0 : this.page !== 0 ? spacing : 0));
                        if (legendTitle) {
                            textOptions = new TextOption(map.element.id + '_LegendTitle', this.legendItemRect.x + this.legendItemRect.width / 2, this.legendItemRect.y - textSize.height / 2, 'middle', trimTitle, '');
                            renderTextElement(textOptions, textStyle, textStyle.color, this.legendGroup);
                        }
                        var renderOptions = new RectOption(map.element.id + '_Legend_Border', legend.background, legend.border, 1, this.legendBorderRect, null, null, '', '');
                        this.legendGroup.appendChild(map.renderer.drawRectangle(renderOptions));
                        this.translate = legend.position !== 'Float' ? this.getLegendAlignment(map, this.legendBorderRect.width, this.legendBorderRect.height, legend) : legend.location;
                        this.legendGroup.setAttribute('transform', 'translate( ' + (this.translate.x + -this.legendBorderRect.x) + ' ' + (this.translate.y + -this.legendBorderRect.y) + ' )');
                        map.svgObject.appendChild(this.legendGroup);
                    }
                }, {
                    key: 'changeNextPage',
                    value: function changeNextPage(e) {
                        this.currentPage = e.target.id.indexOf('_Left_Page_') > -1 ? this.currentPage - 1 : this.currentPage + 1;
                        this.legendGroup = this.maps.renderer.createGroup({ id: this.maps.element.id + '_Legend_Group' });
                        this.drawLegendItem(this.currentPage);
                        if (querySelector(this.maps.element.id + '_Legend_Border', this.maps.element.id)) {
                            querySelector(this.maps.element.id + '_Legend_Border', this.maps.element.id).style.pointerEvents = 'none';
                        }
                    }
                }, {
                    key: 'getLegendAlignment',
                    value: function getLegendAlignment(map, width, height, legend) {
                        var x = void 0;
                        var y = void 0;
                        var spacing = 10;
                        var totalWidth = map.availableSize.width;
                        var totalHeight = map.availableSize.height;
                        switch (legend.position) {
                            case 'Top':
                            case 'Bottom':
                                map.mapAreaRect.height = map.mapAreaRect.height - height;
                                x = totalWidth / 2 - width / 2;
                                y = legend.position === 'Top' ? map.mapAreaRect.y : map.mapAreaRect.y + map.mapAreaRect.height;
                                map.mapAreaRect.y = legend.position === 'Top' ? map.mapAreaRect.y + height + spacing : map.mapAreaRect.y;
                                break;
                            case 'Left':
                            case 'Right':
                                map.mapAreaRect.width = map.mapAreaRect.width - width;
                                x = legend.position === 'Left' ? map.mapAreaRect.x : map.mapAreaRect.x + map.mapAreaRect.width;
                                y = totalHeight / 2 - height / 2;
                                map.mapAreaRect.x = legend.position === 'Left' ? map.mapAreaRect.x + width : map.mapAreaRect.x;
                                break;
                        }
                        switch (legend.alignment) {
                            case 'Near':
                                if (legend.position === 'Top' || legend.position === 'Bottom') {
                                    x = map.mapAreaRect.x;
                                } else {
                                    y = map.mapAreaRect.y;
                                }
                                break;
                            case 'Far':
                                if (legend.position === 'Top' || legend.position === 'Bottom') {
                                    x = totalWidth - width;
                                } else {
                                    y = totalHeight - height;
                                }
                                break;
                        }
                        return new Point(x, y);
                    }
                }, {
                    key: 'getMarkersLegendCollections',
                    value: function getMarkersLegendCollections(layerIndex, markers) {
                        var _this42 = this;

                        markers.forEach(function (marker, markerIndex) {
                            var dataSource = marker.dataSource;
                            var field = marker.legendText;
                            var templateFn = void 0;
                            dataSource.forEach(function (data, dataIndex) {
                                var imageSrc = null;
                                if (marker.visible && !isNullOrUndefined(data['latitude']) && !isNullOrUndefined(data['longitude'])) {
                                    if (marker.template) {
                                        templateFn = getTemplateFunction(marker.template);
                                        var templateElement = templateFn(_this42.maps);
                                        var markerEle = isNullOrUndefined(templateElement.childElementCount) ? templateElement[0] : templateElement;
                                        imageSrc = markerEle.querySelector('img').src;
                                    }
                                    var text = isNullOrUndefined(data[field]) ? '' : data[field];
                                    _this42.legendCollection.push({
                                        layerIndex: layerIndex, markerIndex: markerIndex, dataIndex: dataIndex,
                                        fill: marker.fill, text: text, imageSrc: imageSrc
                                    });
                                }
                            });
                        });
                    }
                }, {
                    key: 'getRangeLegendCollection',
                    value: function getRangeLegendCollection(layerIndex, layerData, colorMapping, dataSource, dataPath, colorValuePath, propertyPath) {
                        var _this43 = this;

                        var legendText = void 0;
                        var fill = this.maps.legendSettings.fill;

                        var _loop2 = function _loop2(colorMap) {
                            if (!isNullOrUndefined(colorMap.from) && !isNullOrUndefined(colorMap.to)) {
                                legendText = !isNullOrUndefined(colorMap.label) ? colorMap.label : colorMap.from + ' - ' + colorMap.to;
                                var rangeData = [];
                                var colorMapProcess = false;
                                dataSource.forEach(function (data, dataIndex) {
                                    var colorValue = parseFloat(data[colorValuePath]);
                                    if (colorValue >= colorMap.from && colorValue <= colorMap.to) {
                                        colorMapProcess = true;
                                        rangeData.push(_this43.getLegendData(layerIndex, dataIndex, data, dataPath, layerData, propertyPath, colorValue));
                                    }
                                });
                                if (!colorMapProcess) {
                                    rangeData.push({
                                        layerIndex: layerIndex, shapeIndex: null, dataIndex: null,
                                        name: null, value: null
                                    });
                                }
                                var legendFill = isNullOrUndefined(fill) ? colorMap.color : fill;
                                _this43.getOverallLegendItemsCollection(legendText, legendFill, rangeData);
                            }
                        };

                        var _iteratorNormalCompletion17 = true;
                        var _didIteratorError17 = false;
                        var _iteratorError17 = undefined;

                        try {
                            for (var _iterator17 = colorMapping[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                                var colorMap = _step17.value;

                                _loop2(colorMap);
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
                }, {
                    key: 'getOverallLegendItemsCollection',
                    value: function getOverallLegendItemsCollection(legendText, legendFill, legendData) {
                        var newColllection = [];
                        if (legendData.length > 0) {
                            for (var i = 0; i < legendData.length; i++) {
                                var collection = legendData[i];
                                if (collection.length > 0) {
                                    for (var j = 0; j < collection.length; j++) {
                                        newColllection.push(collection[j]);
                                    }
                                } else {
                                    newColllection.push(legendData[i]);
                                }
                                newColllection['_isVisible'] = true;
                            }
                            this.legendCollection.push({ text: legendText, fill: legendFill, data: newColllection });
                        }
                    }
                }, {
                    key: 'getEqualLegendCollection',
                    value: function getEqualLegendCollection(layerIndex, layerData, colorMapping, dataSource, dataPath, colorValuePath, propertyPath) {
                        var _this44 = this;

                        var fill = this.maps.legendSettings.fill;
                        var legendText = void 0;

                        var _loop3 = function _loop3(colorMap) {
                            if (!isNullOrUndefined(colorMap.value)) {
                                legendText = !isNullOrUndefined(colorMap.label) ? colorMap.label : colorMap.value;
                                var equalData = [];
                                var eqaulColorProcess = false;
                                dataSource.forEach(function (data, dataIndex) {
                                    var equalValue = data[colorValuePath];
                                    if (equalValue === colorMap.value) {
                                        eqaulColorProcess = true;
                                        equalData.push(_this44.getLegendData(layerIndex, dataIndex, data, dataPath, layerData, propertyPath, equalValue));
                                    }
                                });
                                if (!eqaulColorProcess) {
                                    equalData.push({
                                        layerIndex: layerIndex, shapeIndex: null, dataIndex: null,
                                        name: null, value: null
                                    });
                                }
                                var legendFill = isNullOrUndefined(fill) ? colorMap.color : fill;
                                _this44.getOverallLegendItemsCollection(legendText, legendFill, equalData);
                            }
                        };

                        var _iteratorNormalCompletion18 = true;
                        var _didIteratorError18 = false;
                        var _iteratorError18 = undefined;

                        try {
                            for (var _iterator18 = colorMapping[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                                var colorMap = _step18.value;

                                _loop3(colorMap);
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
                }, {
                    key: 'getDataLegendCollection',
                    value: function getDataLegendCollection(layerIndex, layerData, colorMapping, dataSource, dataPath, colorValuePath, propertyPath) {
                        var _this45 = this;

                        var legendText = void 0;
                        var fill = this.maps.legendSettings.fill;
                        if (!isNullOrUndefined(colorValuePath)) {
                            dataSource.forEach(function (data, dataIndex) {
                                var dataValue = data[colorValuePath];
                                var newData = [];
                                var legendFill = isNullOrUndefined(fill) ? dataValue : fill;
                                if (!isNullOrUndefined(dataValue) && colorMapping.length === 0) {
                                    legendText = data[dataPath];
                                    newData.push(_this45.getLegendData(layerIndex, dataIndex, data, dataPath, layerData, propertyPath, dataValue));
                                }
                                _this45.getOverallLegendItemsCollection(legendText, legendFill, newData);
                            });
                        }
                    }
                }, {
                    key: 'interactiveHandler',
                    value: function interactiveHandler(e) {
                        var target = e.target;
                        var legend = this.maps.legendSettings;
                        var id = this.maps.element.id + '_Interactive_Legend';
                        var hoverId = legend.type === 'Layers' ? '_ShapeIndex_' : legend.type === 'Markers' ? '_MarkerIndex_' : '_BubbleIndex_';
                        if (target.id.indexOf(hoverId) > 1) {
                            var layerIndex = parseFloat(target.id.split('_')[2]);
                            var dataIndex = parseFloat(target.id.split('_')[6]);
                            var fill = void 0;
                            var stroke = void 0;
                            var strokeWidth = void 0;
                            if (!isNullOrUndefined(querySelector(id, this.maps.element.id))) {
                                remove(querySelector(id, this.maps.element.id));
                            }
                            var layer = this.maps.layersCollection[layerIndex];
                            if (legend.visible && this.legendRenderingCollections.length > 0 && legend.mode === 'Interactive' && (legend.type === 'Layers' ? layer.visible : legend.type === 'Markers' ? layer.markerSettings[parseFloat(target.id.split('_')[4])].visible : this.maps.getBubbleVisible(this.maps.layersCollection[layerIndex]))) {
                                var svgRect = this.maps.svgObject.getBoundingClientRect();
                                for (var i = 0; i < this.legendCollection.length; i++) {
                                    var currentData = this.legendCollection[i];
                                    var legendElement = querySelector(this.maps.element.id + '_Legend_Index_' + i, this.maps.element.id);
                                    var legendRect = legendElement.getBoundingClientRect();
                                    var rect = new Rect(Math.abs(legendRect.left - svgRect.left), Math.abs(legendRect.top - svgRect.top), legendRect.width, legendRect.height);
                                    fill = legendElement.getAttribute('fill');
                                    stroke = legend.shapeBorder.color;
                                    strokeWidth = legend.shapeBorder.width;
                                    if (!isNullOrUndefined(currentData['data'])) {
                                        var data = currentData['data'];
                                        for (var j = 0; j < data.length; j++) {
                                            if (dataIndex === data[j]['dataIndex'] && layerIndex === data[j]['layerIndex']) {
                                                this.renderInteractivePointer(legend, fill, stroke, id, strokeWidth, rect);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (!isNullOrUndefined(querySelector(id, this.maps.element.id))) {
                                remove(querySelector(id, this.maps.element.id));
                            }
                        }
                    }
                }, {
                    key: 'renderInteractivePointer',
                    value: function renderInteractivePointer(legend, fill, stroke, id, strokeWidth, rect) {
                        var path = void 0;
                        var pathOptions = void 0;
                        var locX = void 0;
                        var locY = void 0;
                        var height = 10;
                        var width = 10;
                        var direction = legend.orientation === 'None' ? legend.position === 'Top' || legend.position === 'Bottom' ? 'Horizontal' : 'Vertical' : legend.orientation;
                        if (direction === 'Horizontal') {
                            if (!legend.invertedPointer) {
                                locX = rect.x + rect.width / 2;
                                locY = rect.y;
                                path = ' M ' + locX + ' ' + locY + ' L ' + (locX - width) + ' ' + (locY - height) + ' L ' + (locX + width) + ' ' + (locY - height) + ' Z ';
                            } else {
                                locX = rect.x + rect.width / 2;
                                locY = rect.y + rect.height;
                                path = ' M ' + locX + ' ' + locY + ' L ' + (locX - width) + ' ' + (locY + height) + ' L ' + (locX + width) + ' ' + (locY + height) + ' Z ';
                            }
                        } else {
                            if (!legend.invertedPointer) {
                                locX = rect.x + rect.width;
                                locY = rect.y + rect.height / 2;
                                path = ' M ' + locX + ' ' + locY + ' L ' + (locX + width) + ' ' + (locY - height) + ' L ' + (locX + width) + ' ' + (locY + height) + ' z ';
                            } else {
                                locX = rect.x;
                                locY = rect.y + rect.height / 2;
                                path = ' M ' + locX + ' ' + locY + ' L ' + (locX - width) + ' ' + (locY - height) + ' L ' + (locX - width) + ' ' + (locY + height) + ' z ';
                            }
                        }
                        pathOptions = new PathOption(id, fill, strokeWidth, stroke, 1, '', path);
                        this.maps.svgObject.appendChild(this.maps.renderer.drawPath(pathOptions));
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents(element) {
                        EventHandler.add(element, Browser.touchStartEvent, this.changeNextPage, this);
                    }
                }, {
                    key: 'addEventListener',
                    value: function addEventListener() {
                        if (this.maps.isDestroyed) {
                            return;
                        }
                        this.maps.on(Browser.touchMoveEvent, this.interactiveHandler, this);
                        this.maps.on(Browser.touchEndEvent, this.interactiveHandler, this);
                        // this.maps.on(click, this.legendClick, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        if (this.maps.isDestroyed) {
                            return;
                        }
                        this.maps.off(Browser.touchMoveEvent, this.interactiveHandler);
                        this.maps.off(Browser.touchEndEvent, this.interactiveHandler);
                        // this.maps.off(click, this.legendClick);
                    }
                }, {
                    key: 'getLegendData',
                    value: function getLegendData(layerIndex, dataIndex, data, dataPath, layerData, shapePropertyPath, value) {
                        var legendData = [];
                        if (Object.prototype.toString.call(layerData) === '[object Array]') {
                            for (var i = 0; i < layerData.length; i++) {
                                var shapeData = layerData[i];
                                if (shapeData['properties'][shapePropertyPath] === data[dataPath]) {
                                    legendData.push({
                                        layerIndex: layerIndex, shapeIndex: i, dataIndex: dataIndex,
                                        name: data[dataPath], value: value
                                    });
                                }
                            }
                        }
                        return legendData;
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'Legend';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(maps) {
                        /**
                         * Destroy method performed here
                         */
                        this.removeEventListener();
                    }
                }]);

                return Legend;
            }());

            _export2('Highlight', Highlight = function () {
                function Highlight(maps) {
                    _classCallCheck(this, Highlight);

                    this.maps = maps;
                    this.addEventListener();
                }
                /**
                 * To bind events for highlight module
                 */


                _createClass(Highlight, [{
                    key: 'addEventListener',
                    value: function addEventListener() {
                        if (this.maps.isDestroyed) {
                            return;
                        }
                        this.maps.on(Browser.touchMoveEvent, this.mouseMove, this);
                        this.maps.on(Browser.touchStartEvent, this.mouseMove, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        if (this.maps.isDestroyed) {
                            return;
                        }
                        this.maps.off(Browser.touchMoveEvent, this.mouseMove);
                        this.maps.off(Browser.touchStartEvent, this.mouseMove);
                    }
                }, {
                    key: 'addHighlight',
                    value: function addHighlight(layerIndex, name, enable) {
                        var targetEle = getTargetElement(layerIndex, name, enable, this.maps);
                        if (enable) {
                            this.mapHighlight(targetEle, null, null);
                        } else {
                            removeClass(targetEle);
                        }
                    }
                }, {
                    key: 'mouseMove',
                    value: function mouseMove(e) {
                        var targetEle = e.target;
                        var layerIndex = void 0;
                        var isTouch = e.pointerType === 'touch' || e.pointerType === '2' || e.type.indexOf('touch') > -1;
                        if ((targetEle.id.indexOf('LayerIndex') !== -1 || targetEle.id.indexOf('NavigationIndex') > -1) && targetEle.getAttribute('class') !== 'ShapeselectionMapStyle' && !isTouch) {
                            layerIndex = parseInt(targetEle.id.split('_LayerIndex_')[1].split('_')[0], 10);
                            var shapeData = void 0;
                            var data = void 0;
                            var shapeIn = void 0;
                            var dataIndex = void 0;
                            if (targetEle.id.indexOf('ShapeIndex') > -1) {
                                shapeIn = parseInt(targetEle.id.split('_ShapeIndex_')[1].split('_')[0], 10);
                                shapeData = this.maps.layers[layerIndex].shapeData['features'] ? this.maps.layers[layerIndex].shapeData['features'][shapeIn]['properties'] : null;
                                dataIndex = parseInt(targetEle.id.split('_dataIndex_')[1].split('_')[0], 10);
                                data = isNullOrUndefined(dataIndex) ? null : this.maps.layers[layerIndex].dataSource[dataIndex];
                                this.highlightSettings = this.maps.layers[layerIndex].highlightSettings;
                            } else if (targetEle.id.indexOf('BubbleIndex') > -1) {
                                var bubble = parseInt(targetEle.id.split('_BubbleIndex_')[1].split('_')[0], 10);
                                dataIndex = parseInt(targetEle.id.split('_dataIndex_')[1].split('_')[0], 10);
                                data = this.maps.layers[layerIndex].bubbleSettings[bubble].dataSource[dataIndex];
                                this.highlightSettings = this.maps.layers[layerIndex].bubbleSettings[bubble].highlightSettings;
                            } else if (targetEle.id.indexOf('MarkerIndex') > -1) {
                                var marker = parseInt(targetEle.id.split('_MarkerIndex_')[1].split('_')[0], 10);
                                dataIndex = parseInt(targetEle.id.split('_DataIndex_')[1].split('_')[0], 10);
                                data = this.maps.layers[layerIndex].markerSettings[marker].dataSource[dataIndex];
                                this.highlightSettings = this.maps.layers[layerIndex].markerSettings[marker].highlightSettings;
                            } else {
                                var index = parseInt(targetEle.id.split('_NavigationIndex_')[1].split('_')[0], 10);
                                layerIndex = parseInt(targetEle.id.split('_LayerIndex_')[1].split('_')[0], 10);
                                shapeData = null;
                                data = {
                                    latitude: this.maps.layers[layerIndex].navigationLineSettings[index].latitude,
                                    longitude: this.maps.layers[layerIndex].navigationLineSettings[index].longitude
                                };
                                this.highlightSettings = this.maps.layers[layerIndex].navigationLineSettings[index].highlightSettings;
                            }
                            if (this.highlightSettings.enable) {
                                this.mapHighlight(targetEle, shapeData, data);
                            } else {
                                var element = document.getElementsByClassName('highlightMapStyle')[0];
                                if (!isNullOrUndefined(element)) {
                                    removeClass(element);
                                    if (element.id.indexOf('NavigationIndex') > -1) {
                                        var _index = parseInt(element.id.split('_NavigationIndex_')[1].split('_')[0], 10);
                                        var _layerIndex = parseInt(element.parentElement.id.split('_layerIndex_')[1].split('_')[0], 10);
                                        element.setAttribute('stroke-width', this.maps.layers[_layerIndex].navigationLineSettings[_index].width.toString());
                                        element.setAttribute('stroke', this.maps.layers[_layerIndex].navigationLineSettings[_index].color);
                                    }
                                }
                            }
                        } else if (getElementsByClassName('highlightMapStyle').length > 0) {
                            targetEle = getElementsByClassName('highlightMapStyle')[0];
                            if (targetEle.id.indexOf('NavigationIndex') > -1) {
                                var _index2 = parseInt(targetEle.id.split('_NavigationIndex_')[1].split('_')[0], 10);
                                layerIndex = parseInt(targetEle.parentElement.id.split('_layerIndex_')[1].split('_')[0], 10);
                                targetEle.setAttribute('stroke-width', this.maps.layers[layerIndex].navigationLineSettings[_index2].width.toString());
                                targetEle.setAttribute('stroke', this.maps.layers[layerIndex].navigationLineSettings[_index2].color);
                            }
                            removeClass(targetEle);
                        }
                    }
                }, {
                    key: 'mapHighlight',
                    value: function mapHighlight(targetEle, shapeData, data) {
                        var eventArgs = {
                            opacity: this.highlightSettings.opacity,
                            fill: targetEle.id.indexOf('NavigationIndex') === -1 ? this.highlightSettings.fill : 'none',
                            border: { color: this.highlightSettings.border.color, width: this.highlightSettings.border.width },
                            name: itemHighlight,
                            target: targetEle.id,
                            cancel: false,
                            shapeData: shapeData,
                            data: data
                        };
                        this.maps.trigger(itemHighlight, eventArgs);
                        this.highlightMap(targetEle, eventArgs);
                    }
                }, {
                    key: 'highlightMap',
                    value: function highlightMap(targetEle, eventArgs) {
                        if (targetEle.getAttribute('class') === 'highlightMapStyle') {
                            return;
                        } else {
                            if (getElementsByClassName('highlightMapStyle').length > 0) {
                                var elem = getElementsByClassName('highlightMapStyle')[0];
                                removeClass(elem);
                                if (elem.id.indexOf('NavigationIndex') > -1) {
                                    var index = parseInt(elem.id.split('_NavigationIndex_')[1].split('_')[0], 10);
                                    var layerIndex = parseInt(elem.parentElement.id.split('_layerIndex_')[1].split('_')[0], 10);
                                    elem.setAttribute('stroke-width', this.maps.layers[layerIndex].navigationLineSettings[index].width.toString());
                                    elem.setAttribute('stroke', this.maps.layers[layerIndex].navigationLineSettings[index].color);
                                }
                            }
                            if (!getElement('highlightMap')) {
                                document.body.appendChild(createStyle('highlightMap', 'highlightMapStyle', eventArgs));
                            } else {
                                customizeStyle('highlightMap', 'highlightMapStyle', eventArgs);
                            }
                            targetEle.setAttribute('stroke-width', eventArgs.border.width.toString());
                            targetEle.setAttribute('stroke', eventArgs.border.color);
                            targetEle.setAttribute('class', 'highlightMapStyle');
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'Highlight';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(maps) {
                        /**
                         * Destroy method performed here
                         */
                        this.removeEventListener();
                    }
                }]);

                return Highlight;
            }());

            _export2('Selection', Selection = function () {
                /* tslint:disable:no-string-literal */
                function Selection(maps) {
                    _classCallCheck(this, Selection);

                    this.maps = maps;
                    this.addEventListener();
                }
                /**
                 * For binding events to selection module
                 */


                _createClass(Selection, [{
                    key: 'addEventListener',
                    value: function addEventListener() {
                        if (this.maps.isDestroyed) {
                            return;
                        }
                        this.maps.on(click, this.mouseClick, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        if (this.maps.isDestroyed) {
                            return;
                        }
                        this.maps.off(click, this.mouseClick);
                    }
                }, {
                    key: 'mouseClick',
                    value: function mouseClick(targetEle) {
                        if (targetEle.id.indexOf('LayerIndex') > -1 || targetEle.id.indexOf('NavigationIndex') > -1) {
                            var layerIndex = void 0;
                            var shapeData = void 0;
                            var data = void 0;
                            var shapeIndex = void 0;
                            var dataIndex = void 0;
                            layerIndex = parseInt(targetEle.id.split('_LayerIndex_')[1].split('_')[0], 10);
                            if (targetEle.id.indexOf('ShapeIndex') > -1) {
                                shapeIndex = parseInt(targetEle.id.split('_ShapeIndex_')[1].split('_')[0], 10);
                                shapeData = this.maps.layers[layerIndex].shapeData['features'] ? this.maps.layers[layerIndex].shapeData['features'][shapeIndex]['properties'] : null;
                                dataIndex = parseInt(targetEle.id.split('_dataIndex_')[1].split('_')[0], 10);
                                data = isNullOrUndefined(dataIndex) ? null : this.maps.layers[layerIndex].dataSource[dataIndex];
                                this.selectionsettings = this.maps.layers[layerIndex].selectionSettings;
                                this.selectionType = 'Shape';
                            } else if (targetEle.id.indexOf('BubbleIndex') > -1) {
                                var bubbleIndex = parseInt(targetEle.id.split('_BubbleIndex_')[1].split('_')[0], 10);
                                dataIndex = parseInt(targetEle.id.split('_dataIndex_')[1].split('_')[0], 10);
                                data = this.maps.layers[layerIndex].bubbleSettings[bubbleIndex].dataSource[dataIndex];
                                this.selectionsettings = this.maps.layers[layerIndex].bubbleSettings[bubbleIndex].selectionSettings;
                                this.selectionType = 'Bubble';
                            } else if (targetEle.id.indexOf('MarkerIndex') > -1) {
                                var markerIndex = parseInt(targetEle.id.split('_MarkerIndex_')[1].split('_')[0], 10);
                                dataIndex = parseInt(targetEle.id.split('_DataIndex_')[1].split('_')[0], 10);
                                data = this.maps.layers[layerIndex].markerSettings[markerIndex].dataSource[dataIndex];
                                this.selectionsettings = this.maps.layers[layerIndex].markerSettings[markerIndex].selectionSettings;
                                this.selectionType = 'Marker';
                            } else {
                                var index = parseInt(targetEle.id.split('_NavigationIndex_')[1].split('_')[0], 10);
                                shapeData = null;
                                data = {
                                    latitude: this.maps.layers[layerIndex].navigationLineSettings[index].latitude,
                                    longitude: this.maps.layers[layerIndex].navigationLineSettings[index].longitude
                                };
                                this.selectionsettings = this.maps.layers[layerIndex].navigationLineSettings[index].selectionSettings;
                                this.selectionType = 'navigationline';
                            }
                            if (this.selectionsettings.enable) {
                                this.selectMap(targetEle, shapeData, data);
                            }
                        }
                    }
                }, {
                    key: 'addSelection',
                    value: function addSelection(layerIndex, name, enable) {
                        var targetEle = getTargetElement(layerIndex, name, enable, this.maps);
                        if (enable) {
                            this.selectMap(targetEle, null, null);
                        } else {
                            removeClass(targetEle);
                        }
                    }
                }, {
                    key: 'selectMap',
                    value: function selectMap(targetEle, shapeData, data) {
                        var selectionsettings = this.selectionsettings;
                        var eventArgs = {
                            opacity: this.selectionsettings.opacity,
                            fill: this.selectionType !== 'navigationline' ? this.selectionsettings.fill : 'none',
                            border: { color: this.selectionsettings.border.color, width: this.selectionsettings.border.width },
                            name: itemSelection,
                            target: targetEle.id,
                            cancel: false,
                            shapeData: shapeData,
                            data: data
                        };
                        this.maps.trigger(itemSelection, eventArgs);
                        // if (this.maps.legendSettings.visible && !this.maps.legendSettings.toggleVisibility && this.maps.legendSettings.legendSelection) {
                        //     this.removeLegendSelection(this.maps.legendModule.legendCollection, targetEle);
                        // }
                        if (targetEle.getAttribute('class') === this.selectionType + 'selectionMapStyle') {
                            removeClass(targetEle);
                            if (targetEle.id.indexOf('NavigationIndex') > -1) {
                                var index = parseInt(targetEle.id.split('_NavigationIndex_')[1].split('_')[0], 10);
                                var layerIndex = parseInt(targetEle.parentElement.id.split('_layerIndex_')[1].split('_')[0], 10);
                                targetEle.setAttribute('stroke-width', this.maps.layers[layerIndex].navigationLineSettings[index].width.toString());
                                targetEle.setAttribute('stroke', this.maps.layers[layerIndex].navigationLineSettings[index].color);
                            }
                        } else {
                            if (!this.selectionsettings.enableMultiSelect && getElementsByClassName(this.selectionType + 'selectionMapStyle').length > 0) {
                                var ele = getElementsByClassName(this.selectionType + 'selectionMapStyle')[0];
                                removeClass(ele);
                                if (ele.id.indexOf('NavigationIndex') > -1) {
                                    var _index3 = parseInt(targetEle.id.split('_NavigationIndex_')[1].split('_')[0], 10);
                                    var _layerIndex2 = parseInt(targetEle.parentElement.id.split('_layerIndex_')[1].split('_')[0], 10);
                                    ele.setAttribute('stroke-width', this.maps.layers[_layerIndex2].navigationLineSettings[_index3].width.toString());
                                    ele.setAttribute('stroke', this.maps.layers[_layerIndex2].navigationLineSettings[_index3].color);
                                }
                            }
                            if (!getElement(this.selectionType + 'selectionMap')) {
                                document.body.appendChild(createStyle(this.selectionType + 'selectionMap', this.selectionType + 'selectionMapStyle', eventArgs));
                            } else {
                                customizeStyle(this.selectionType + 'selectionMap', this.selectionType + 'selectionMapStyle', eventArgs);
                            }
                            targetEle.setAttribute('stroke-width', eventArgs.border.width.toString());
                            targetEle.setAttribute('stroke', eventArgs.border.color);
                            targetEle.setAttribute('class', this.selectionType + 'selectionMapStyle');
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'Selection';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(maps) {
                        /**
                         * Destroy method performed here
                         */
                        this.removeEventListener();
                    }
                }]);

                return Selection;
            }());

            _export2('MapsTooltip', MapsTooltip = function () {
                function MapsTooltip(maps) {
                    _classCallCheck(this, MapsTooltip);

                    this.isTouch = false;
                    this.touchDelay = 0;
                    this.maps = maps;
                    this.element = maps.element;
                    this.addEventListener();
                    this.ejTooltip = new Tooltip({
                        opensOn: 'custom',
                        position: 'TopCenter',
                        beforeRender: this.onBeforeRender.bind(this),
                        beforeOpen: this.tooltipCustomization.bind(this),
                        openDelay: 0, closeDelay: 1
                    });
                    this.ejTooltip.appendTo(this.element);
                }
                /**
                 * To bind events for tooltip module
                 */


                _createClass(MapsTooltip, [{
                    key: 'addEventListener',
                    value: function addEventListener() {
                        if (this.maps.isDestroyed) {
                            return;
                        }
                        this.maps.on(Browser.touchMoveEvent, this.mouseMove, this);
                        this.maps.on(Browser.touchEndEvent, this.mouseMove, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        if (this.maps.isDestroyed) {
                            return;
                        }
                        this.maps.off(Browser.touchMoveEvent, this.mouseMove);
                        this.maps.off(Browser.touchEndEvent, this.mouseMove);
                    }
                }, {
                    key: 'mouseMove',
                    value: function mouseMove(e) {
                        if (this.isTouch && new Date().getTime() < this.touchDelay) {
                            return;
                        }
                        this.setMouseXY(e);
                        this.renderTooltip(e);
                    }
                }, {
                    key: 'setMouseXY',
                    value: function setMouseXY(e) {
                        var pageX = void 0;
                        var pageY = void 0;
                        if (e.type.indexOf('touch') > -1) {
                            this.isTouch = true;
                            var touchArg = e;
                            pageY = touchArg.changedTouches[0].clientY;
                            pageX = touchArg.changedTouches[0].clientX;
                        } else {
                            this.isTouch = e.pointerType === 'touch' || e.pointerType === '2';
                            pageX = e.clientX;
                            pageY = e.clientY;
                        }
                        this.mouse = new MapLocation(pageX, pageY);
                        this.touchDelay = new Date().getTime() + 100;
                    }
                }, {
                    key: 'renderTooltip',
                    value: function renderTooltip(e) {
                        if (this.previousId === e.target.id) {
                            this.ejTooltip.refresh(this.appendTargetElement(this.mouse, 0));
                        } else if (this.manipulateTarget(e.target)) {
                            this.shapeColor = e.target.getAttribute('fill');
                            if (document.querySelector('.e-tip-content') && !this.setTooltipContent(this.options) && !this.isTouch) {
                                var args = {
                                    type: null, cancel: false, element: this.customTooltip, event: e,
                                    name: 'custom', target: this.tooltipEle
                                };
                                this.tooltipCustomization(args);
                                return;
                            } else {
                                this.closeTooltip(1);
                            }
                            this.ejTooltip.open(this.appendTargetElement(this.mouse));
                        } else {
                            this.closeTooltip(1);
                        }
                    }
                }, {
                    key: 'getTargetElement',
                    value: function getTargetElement(element) {
                        var hoverElements = ['_ShapeIndex_', '_MarkerIndex_', '_BubbleIndex_'];
                        if (!isNullOrUndefined(element.id) && element.id.length > 0 && element.id !== this.maps.element.id) {
                            for (var i = 0; i < hoverElements.length; i++) {
                                if (element.id.indexOf(hoverElements[i]) > -1) {
                                    this.tooltipEle = element;
                                    break;
                                } else if (i === hoverElements.length - 1) {
                                    this.getTargetElement(element.parentNode);
                                }
                            }
                        } else if (element.id !== this.maps.element.id) {
                            this.getTargetElement(element.parentNode);
                        }
                    }
                }, {
                    key: 'closeTooltip',
                    value: function closeTooltip(delay) {
                        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                        var effect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'None';

                        this.ejTooltip.closeDelay = duration;
                        this.ejTooltip.close({ delay: delay, duration: duration, effect: effect });
                        this.previousId = null;
                    }
                }, {
                    key: 'manipulateTarget',
                    value: function manipulateTarget(currentTarget) {
                        this.tooltipEle = null;
                        this.getTargetElement(currentTarget);
                        if (isNullOrUndefined(this.tooltipEle)) {
                            return false;
                        }
                        var target = this.tooltipEle.id;
                        this.previousId = target;
                        var index = parseFloat(target.split('_')[2]);
                        var layer = this.maps.layersCollection[index];
                        if (target.indexOf('_ShapeIndex_') > -1) {
                            this.options = layer.tooltipSettings;
                            var shape = parseInt(target.split('_')[4], 10);
                            if (isNullOrUndefined(layer.shapeData['features'])) {
                                return false;
                            }
                            var value = layer.shapeData['features'][shape]['properties'];
                            index = checkShapeDataFields(layer.dataSource, value, layer.shapeDataPath, layer.shapePropertyPath);
                            if (this.options.visible && (!isNullOrUndefined(index) && !isNaN(index) || !isNullOrUndefined(value))) {
                                this.currentData = layer.dataSource[index] || value;
                                return true;
                            }
                        } else if (target.indexOf('_MarkerIndex_') > -1) {
                            var markerIndex = parseInt(target.split('_')[4], 10);
                            var dataIndex = parseInt(target.split('_')[6], 10);
                            var marker = layer.markerSettings[markerIndex];
                            this.options = marker.tooltipSettings;
                            if (!isNaN(markerIndex) && this.options.visible) {
                                this.currentData = marker.dataSource[dataIndex];
                                return true;
                            }
                        } else if (target.indexOf('_BubbleIndex_') > -1) {
                            var bubbleIndex = parseInt(target.split('_')[4], 10);
                            var _dataIndex = parseInt(target.split('_')[6], 10);
                            this.options = layer.bubbleSettings[bubbleIndex].tooltipSettings;
                            if (!isNaN(bubbleIndex) && this.options.visible) {
                                this.currentData = layer.bubbleSettings[bubbleIndex].dataSource[_dataIndex];
                                return true;
                            }
                        }
                        return false;
                    }
                }, {
                    key: 'appendTargetElement',
                    value: function appendTargetElement(location) {
                        var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

                        var element = getElement(this.element.id + '_MapsTooltip');
                        var svgRect = getElement(this.element.id + '_svg').getBoundingClientRect();
                        location.x -= svgRect.left;
                        location.y -= padding + svgRect.top;
                        this.position = location;
                        if (element) {
                            element.style.left = location.x + 'px';
                            element.style.top = location.y + 'px';
                        } else {
                            element = createElement('div', {
                                id: this.element.id + '_MapsTooltip',
                                styles: 'position: absolute;left:' + location.x + 'px;top:' + location.y + 'px;width:2px;height:2px;background:transparent;pointer-events:none;'
                            });
                            getElement(this.element.id + '_Secondary_Element').appendChild(element);
                        }
                        return element;
                    }
                }, {
                    key: 'formatter',
                    value: function formatter(format, data) {
                        if (isNullOrUndefined(format)) {
                            return null;
                        }
                        var keys = Object.keys(data);
                        var _iteratorNormalCompletion19 = true;
                        var _didIteratorError19 = false;
                        var _iteratorError19 = undefined;

                        try {
                            for (var _iterator19 = keys[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                                var key = _step19.value;

                                format = format.split('${' + key + '}').join(data[key]);
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

                        return format;
                    }
                }, {
                    key: 'onBeforeRender',
                    value: function onBeforeRender(args) {
                        args.cancel = this.setTooltipContent(this.options);
                        this.ejTooltip.dataBind();
                    }
                }, {
                    key: 'setTooltipContent',
                    value: function setTooltipContent() {
                        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options;

                        var localData = extend({}, this.currentData, null, true);
                        if (this.maps.format && !isNaN(parseFloat(localData[options.valuePath]))) {
                            localData[options.valuePath] = Internalize(this.maps, parseFloat(localData[options.valuePath]));
                        }
                        var content = this.formatter(options.format, localData) || localData[options.valuePath];
                        content = options.template ? this.joinElements(getTemplateFunction(options.template)(localData)) : content;
                        this.textStyle = extend(options.textStyle, options.textStyle, null, true);
                        this.textStyle.color = this.textStyle.color || this.shapeColor;
                        var argsData = {
                            cancel: false, name: tooltipRender,
                            content: content,
                            border: options.border,
                            textStyle: this.textStyle,
                            fill: options.fill
                        };
                        this.maps.trigger(tooltipRender, argsData);
                        this.border = argsData.border;
                        this.shapeColor = argsData.fill;
                        this.ejTooltip.content = argsData.content;
                        return argsData.cancel || isNullOrUndefined(argsData.content) || argsData.content === '';
                    }
                }, {
                    key: 'joinElements',
                    value: function joinElements(elements) {
                        var elementString = '';
                        [].forEach.call(elements, function (ele) {
                            elementString += ele.outerHTML;
                        });
                        return elementString;
                    }
                }, {
                    key: 'tooltipCustomization',
                    value: function tooltipCustomization(args) {
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options;

                        this.customTooltip = args.element;
                        if (options.template) {
                            setStyleAttribute(args.element, {
                                'backgroundColor': 'transparent', 'borderColor': 'transparent',
                                'borderWidth': '1px', 'pointer-events': 'none'
                            });
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip'), {
                                'width': '0px', 'height': '0px'
                            });
                            if (this.isTouch) {
                                this.closeTooltip(1, 1500, 'FadeOut');
                            }
                            return null;
                        }
                        var font = this.textStyle;
                        var borderColor = this.border.color;
                        var border = this.border.width;
                        var pointerSize = 8;
                        var outerWidth = void 0;
                        var arrowEle = args.element.querySelector('.e-arrow-tip');
                        setStyleAttribute(args.element, {
                            'backgroundColor': this.shapeColor, 'borderColor': borderColor || '#212121',
                            'borderWidth': border + 'px', 'pointer-events': 'none', 'borderRadius': '5px', 'padding-left': '5px',
                            'padding-right': '5px', 'padding-top': '3px', 'padding-bottom': '3px'
                        });
                        setStyleAttribute(args.element.querySelector('.e-tip-content'), {
                            'color': font.color, 'fontFamily': font.fontFamily, 'fontSize': font.size,
                            'fontWeight': font.fontWeight, 'fontStyle': font.fontStyle, 'padding-left': '5px',
                            'padding-right': '5px', 'padding-top': '3px', 'padding-bottom': '3px'
                        });
                        setStyleAttribute(args.element.querySelector('.e-arrow-tip'), {
                            'width': 2 * (pointerSize + border) + 'px', 'height': pointerSize + border + 'px'
                        });
                        if (arrowEle.classList.contains('e-tip-top')) {
                            outerWidth = pointerSize + 'px';
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-outer'), {
                                'borderRightColor': 'transparent', 'borderLeftColor': 'transparent', 'borderBottomColor': borderColor,
                                'borderLeftWidth': outerWidth, 'borderRightWidth': outerWidth, 'borderBottomWidth': outerWidth
                            });
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-inner'), {
                                color: this.shapeColor, top: '0px'
                            });
                        } else if (arrowEle.classList.contains('e-tip-bottom')) {
                            outerWidth = pointerSize + 'px';
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-outer'), {
                                'borderRightColor': 'transparent', 'borderLeftColor': 'transparent', 'borderTopColor': borderColor,
                                'borderLeftWidth': outerWidth, 'borderRightWidth': outerWidth, 'borderTopWidth': outerWidth
                            });
                            setStyleAttribute(args.element.querySelector('.e-arrow-tip-inner'), {
                                color: this.shapeColor
                            });
                        }
                        setStyleAttribute(args.element, {
                            'display': 'block', 'transitionProperty': 'left,top',
                            'transitionDuration': '1ms'
                        });
                        if (this.isTouch) {
                            this.closeTooltip(1000, 1500, 'FadeOut');
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'MapsTooltip';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(maps) {
                        this.removeEventListener();
                        this.ejTooltip.destroy();
                    }
                }]);

                return MapsTooltip;
            }());

            _export2('Zoom', Zoom = function () {
                function Zoom(maps) {
                    _classCallCheck(this, Zoom);

                    this.isPanning = false;
                    this.mouseEnter = false;
                    this.isTouch = false;
                    this.rectZoomingStart = false;
                    this.pinchRect = new Rect(0, 0, 0, 0);
                    this.browserName = Browser.info.name;
                    this.isPointer = Browser.isPointer;
                    this.handled = false;
                    this.pinchFactor = 1;
                    this.startTouches = [];
                    this.maps = maps;
                    this.wheelEvent = this.browserName === 'mozilla' ? this.isPointer ? 'mousewheel' : 'DOMMouseScroll' : 'mousewheel';
                    this.cancelEvent = this.isPointer ? 'pointerleave' : 'mouseleave';
                    this.selectionColor = this.maps.zoomSettings.selectionColor;
                    this.fillColor = this.maps.zoomSettings.color;
                    this.addEventListener();
                    this.groupElements = [];
                }
                /* tslint:disable:no-string-literal */


                _createClass(Zoom, [{
                    key: 'performZooming',
                    value: function performZooming(position, newZoomFactor, type) {
                        var map = this.maps;
                        var prevLevel = map.tileZoomLevel;
                        var prevScale = map.scale;
                        var maxZoom = map.zoomSettings.maxZoom;
                        var minZoom = map.zoomSettings.minZoom;
                        if (!map.isTileMap && (type === 'ZoomIn' ? newZoomFactor >= minZoom && newZoomFactor <= maxZoom : newZoomFactor >= minZoom)) {
                            var availSize = map.mapAreaRect;
                            var minBounds = map.baseMapRectBounds['min'];
                            var maxBounds = map.baseMapRectBounds['max'];
                            var mapTotalWidth = Math.abs(minBounds['x'] - maxBounds['x']);
                            var mapTotalHeight = Math.abs(minBounds['y'] - maxBounds['y']);
                            var point = map.translatePoint;
                            var translatePointX = point.x - (availSize.width / prevScale - availSize.width / newZoomFactor) / (availSize.width / position.x);
                            var translatePointY = point.y - (availSize.height / prevScale - availSize.height / newZoomFactor) / (availSize.height / position.y);
                            var currentHeight = Math.abs(map.baseMapRectBounds['max']['y'] - map.baseMapRectBounds['min']['y']) * newZoomFactor;
                            translatePointX = currentHeight < map.mapAreaRect.height ? availSize.x + (-minBounds['x'] + (availSize.width / 2 - mapTotalWidth / 2)) : translatePointX;
                            translatePointY = currentHeight < map.mapAreaRect.height ? availSize.y + (-minBounds['y'] + (availSize.height / 2 - mapTotalHeight / 2)) : translatePointY;
                            map.translatePoint = new Point(translatePointX, translatePointY);
                            map.scale = newZoomFactor;
                        } else if (map.isTileMap && newZoomFactor >= minZoom && newZoomFactor <= maxZoom) {
                            this.getTileTranslatePosition(prevLevel, newZoomFactor, position);
                            map.tileZoomLevel = newZoomFactor;
                            map.scale = Math.pow(2, newZoomFactor - 1);
                            map.mapLayerPanel.generateTiles(newZoomFactor, map.tileTranslatePoint);
                            map.translatePoint.x = (map.tileTranslatePoint.x - 0.5 * map.scale) / map.scale;
                            map.translatePoint.y = (map.tileTranslatePoint.y - 0.5 * map.scale) / map.scale;
                        }
                        this.applyTransform();
                        map.trigger(doubleClick, this);
                    }
                }, {
                    key: 'getTileTranslatePosition',
                    value: function getTileTranslatePosition(prevLevel, currentLevel, position) {
                        var map = this.maps;
                        var tileDefaultSize = 256;
                        var bounds = getElementByID(this.maps.element.id).getBoundingClientRect();
                        var prevSize = Math.pow(2, prevLevel) * 256;
                        var totalSize = Math.pow(2, currentLevel) * 256;
                        var x = (position.x - map.tileTranslatePoint.x) / prevSize * 100;
                        var y = (position.y - map.tileTranslatePoint.y) / prevSize * 100;
                        map.tileTranslatePoint.x = currentLevel === 1 ? bounds.width / 2 - tileDefaultSize * 2 / 2 : position.x - x * totalSize / 100;
                        map.tileTranslatePoint.y = currentLevel === 1 ? bounds.height / 2 - tileDefaultSize * 2 / 2 : position.y - y * totalSize / 100;
                    }
                }, {
                    key: 'performRectZooming',
                    value: function performRectZooming() {
                        var map = this.maps;
                        var size = map.availableSize;
                        var prevLevel = map.tileZoomLevel;
                        var zoomRect = this.zoomingRect;
                        if (zoomRect.height > 0 && zoomRect.width > 0) {
                            var x = this.zoomingRect.x + this.zoomingRect.width / 2;
                            var y = this.zoomingRect.y + this.zoomingRect.height / 2;
                            var zoomCalculationFactor = void 0;
                            if (!map.isTileMap) {
                                var scale = map.previousScale = map.scale;
                                zoomCalculationFactor = scale + Math.round((size.width / zoomRect.width + size.height / zoomRect.height) / 2);
                                var translatePoint = map.previousPoint = map.translatePoint;
                                var translatePointX = translatePoint.x - (size.width / scale - size.width / zoomCalculationFactor) / (size.width / x);
                                var translatePointY = translatePoint.y - (size.height / scale - size.height / zoomCalculationFactor) / (size.height / y);
                                map.translatePoint = new Point(translatePointX, translatePointY);
                                map.scale = zoomCalculationFactor;
                            } else {
                                zoomCalculationFactor = prevLevel + Math.round(prevLevel + (size.width / zoomRect.width + size.height / zoomRect.height) / 2);
                                this.getTileTranslatePosition(prevLevel, zoomCalculationFactor, { x: x, y: y });
                                map.tileZoomLevel = zoomCalculationFactor;
                                map.mapLayerPanel.generateTiles(zoomCalculationFactor, map.tileTranslatePoint);
                                map.translatePoint.x = (map.tileTranslatePoint.x - 0.5 * Math.pow(2, zoomCalculationFactor)) / Math.pow(2, zoomCalculationFactor);
                                map.translatePoint.y = (map.tileTranslatePoint.y - 0.5 * Math.pow(2, zoomCalculationFactor)) / Math.pow(2, zoomCalculationFactor);
                                map.scale = Math.pow(2, zoomCalculationFactor);
                            }
                            this.applyTransform(true);
                            this.zoomingRect = null;
                        }
                    }
                }, {
                    key: 'setInteraction',
                    value: function setInteraction(newInteraction) {
                        this.lastScale = 1;
                        this.interaction = newInteraction;
                    }
                }, {
                    key: 'updateInteraction',
                    value: function updateInteraction() {
                        if (this.fingers === 2) {
                            this.setInteraction('zoom');
                        } else {
                            this.setInteraction(null);
                        }
                    }
                }, {
                    key: 'performPinchZooming',
                    value: function performPinchZooming(e) {
                        var map = this.maps;
                        var prevLevel = map.tileZoomLevel;
                        var availSize = map.mapAreaRect;
                        var scale = calculateScale(this.touchStartList, this.touchMoveList);
                        var touchCenter = getTouchCenter(getTouches(this.touchMoveList, this.maps));
                        var newScale = scale / this.lastScale;
                        this.lastScale = scale;
                        this.pinchFactor *= newScale;
                        this.pinchFactor = Math.min(this.maps.zoomSettings.maxZoom, Math.max(this.pinchFactor, this.maps.zoomSettings.minZoom));
                        var zoomCalculationFactor = this.pinchFactor;
                        if (!map.isTileMap) {
                            var minBounds = map.baseMapRectBounds['min'];
                            var maxBounds = map.baseMapRectBounds['max'];
                            var mapTotalWidth = Math.abs(minBounds['x'] - maxBounds['x']);
                            var mapTotalHeight = Math.abs(minBounds['y'] - maxBounds['y']);
                            var translatePoint = map.translatePoint;
                            var currentHeight = Math.abs(map.baseMapRectBounds['max']['y'] - map.baseMapRectBounds['min']['y']) * zoomCalculationFactor;
                            var translatePointX = translatePoint.x - (availSize.width / map.scale - availSize.width / zoomCalculationFactor) / (availSize.width / touchCenter.x);
                            var translatePointY = translatePoint.y - (availSize.height / map.scale - availSize.height / zoomCalculationFactor) / (availSize.height / touchCenter.y);
                            // translatePointX = (currentHeight < map.mapAreaRect.height) ? (availSize.x + ((-(minBounds['x'])) + ((availSize.width / 2) - (mapTotalWidth / 2)))) : translatePointX;
                            //translatePointY = (currentHeight < map.mapAreaRect.height) ? (availSize.y + ((-(minBounds['y'])) + ((availSize.height / 2) - (mapTotalHeight / 2)))) : translatePointY;
                            map.translatePoint = new Point(translatePointX, translatePointY);
                            map.scale = zoomCalculationFactor;
                        } else {
                            var newTileFactor = zoomCalculationFactor;
                            this.getTileTranslatePosition(prevLevel, newTileFactor, { x: touchCenter.x, y: touchCenter.y });
                            map.tileZoomLevel = newTileFactor;
                            map.mapLayerPanel.generateTiles(newTileFactor, map.tileTranslatePoint);
                            map.translatePoint.x = (map.tileTranslatePoint.x - 0.5 * Math.pow(2, newTileFactor)) / Math.pow(2, newTileFactor);
                            map.translatePoint.y = (map.tileTranslatePoint.y - 0.5 * Math.pow(2, newTileFactor)) / Math.pow(2, newTileFactor);
                            map.scale = Math.pow(2, newTileFactor);
                        }
                        this.applyTransform();
                    }
                }, {
                    key: 'drawZoomRectangle',
                    value: function drawZoomRectangle() {
                        var map = this.maps;
                        var down = this.mouseDownPoints;
                        var move = this.mouseMovePoints;
                        var x = void 0;
                        var y = void 0;
                        var width = void 0;
                        var height = void 0;
                        var border = { width: 1, color: '#009900' };
                        width = Math.abs(move.x - down.x);
                        height = Math.abs(move.y - down.y);
                        x = move.x > down.x ? down.x : down.x - width;
                        y = move.y > down.y ? down.y : down.y - height;
                        var elementRect = getElementByID(map.element.id).getBoundingClientRect();
                        if (x > map.mapAreaRect.x && x < map.mapAreaRect.x + map.mapAreaRect.width && y > map.mapAreaRect.y && y < map.mapAreaRect.y + map.mapAreaRect.height) {
                            this.zoomingRect = new Rect(x, y, width, height);
                            var rectSVGObject = map.renderer.createSvg({
                                id: map.element.id + '_Selection_Rect_Zooming',
                                width: map.availableSize.width,
                                height: map.availableSize.height
                            });
                            var rectOption = new RectOption(map.element.id + '_ZoomRect', '#d3d3d3', border, 0.5, this.zoomingRect, 0, 0, '', '3');
                            rectSVGObject.appendChild(map.renderer.drawRectangle(rectOption));
                            getElementByID(map.element.id + '_Secondary_Element').appendChild(rectSVGObject);
                        }
                    }
                }, {
                    key: 'animateTransform',
                    value: function animateTransform(element, animate$$1, x, y, scale) {
                        var duration = this.currentLayer.animationDuration;
                        if (!animate$$1 || duration === 0) {
                            element.setAttribute('transform', 'scale(' + scale + ') translate( ' + x + ' ' + y + ' )');
                            return;
                        }
                        zoomAnimate(element, 0, duration, new MapLocation(x, y), scale, this.maps.mapAreaRect, this.maps);
                    }
                }, {
                    key: 'applyTransform',
                    value: function applyTransform(animate$$1) {
                        var layerIndex = void 0;
                        this.templateCount = 0;
                        var scale = this.maps.scale;
                        var x = this.maps.translatePoint.x;
                        var y = this.maps.translatePoint.y;
                        if (this.layerCollectionEle) {
                            for (var i = 0; i < this.layerCollectionEle.childElementCount; i++) {
                                var layerElement = this.layerCollectionEle.childNodes[i];
                                if (layerElement.tagName === 'g') {
                                    this.templateCount++;
                                    var index = parseFloat(layerElement.id.split('_')[2]);
                                    this.currentLayer = this.maps.layersCollection[index];
                                    var factor = this.maps.mapLayerPanel.calculateFactor(this.currentLayer);
                                    for (var j = 0; j < layerElement.childElementCount; j++) {
                                        var currentEle = layerElement.childNodes[j];
                                        if (!(currentEle.id.indexOf('_Markers_Group') > -1) && !(currentEle.id.indexOf('_bubble_Group') > -1) && !(currentEle.id.indexOf('_dataLableIndex_Group') > -1)) {
                                            if (this.maps.isTileMap && currentEle.id.indexOf('_line_Group') > -1) {
                                                currentEle.remove();
                                                layerElement.appendChild(this.maps.navigationLineModule.renderNavigation(this.currentLayer, this.maps.tileZoomLevel, index));
                                            } else {
                                                changeBorderWidth(currentEle, index, scale, this.maps);
                                                this.animateTransform(currentEle, animate$$1, x, y, scale);
                                            }
                                        } else if (currentEle.id.indexOf('_Markers_Group') > -1) {
                                            for (var k = 0; k < currentEle.childElementCount; k++) {
                                                this.markerTranslate(currentEle.childNodes[k], factor, x, y, scale, 'Marker', animate$$1);
                                            }
                                        } else if (currentEle.id.indexOf('_bubble_Group') > -1) {
                                            var childElement = void 0;
                                            for (var _k = 0; _k < currentEle.childElementCount; _k++) {
                                                childElement = currentEle.childNodes[_k];
                                                var bubbleTransform = childElement.getAttribute('transform');
                                                layerIndex = parseFloat(childElement.id.split('_')[2]);
                                                var bubleIndex = parseFloat(childElement.id.split('_')[4]);
                                                var dataIndex = parseFloat(childElement.id.split('_')[6]);
                                                for (var l = 0; l < this.maps.bubbleModule.bubbleCollection.length; l++) {
                                                    var bubbleCollection = this.maps.bubbleModule.bubbleCollection[l];
                                                    if (bubbleCollection['LayerIndex'] === layerIndex && bubbleCollection['BubbleIndex'] === bubleIndex && bubbleCollection['DataIndex'] === dataIndex) {
                                                        var centerX = bubbleCollection['center']['x'];
                                                        var centerY = bubbleCollection['center']['y'];
                                                        var currentX = (centerX + x) * scale;
                                                        var currentY = (centerY + y) * scale;
                                                        var duration = this.currentLayer.animationDuration;
                                                        if (!animate$$1 || duration === 0) {
                                                            childElement.setAttribute('transform', 'translate( ' + currentX + ' ' + currentY + ' )');
                                                        } else {
                                                            smoothTranslate(childElement, 0, duration, new MapLocation(currentX, currentY));
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        } else if (currentEle.id.indexOf('_dataLableIndex_Group') > -1) {
                                            for (var _k2 = 0; _k2 < currentEle.childElementCount; _k2++) {
                                                this.dataLabelTranslate(currentEle.childNodes[_k2], factor, x, y, scale, 'DataLabel', animate$$1);
                                            }
                                        }
                                    }
                                }
                            }
                            if (!animate$$1 || this.currentLayer.animationDuration === 0) {
                                this.processTemplate(x, y, scale, this.maps);
                            }
                        }
                    }
                }, {
                    key: 'processTemplate',
                    value: function processTemplate(x, y, scale, maps) {
                        for (var i = 0; i < this.templateCount; i++) {
                            this.currentLayer = maps.layersCollection[i];
                            var factor = maps.mapLayerPanel.calculateFactor(this.currentLayer);
                            var markerTemplateElement = getElementByID(maps.element.id + '_LayerIndex_' + i + '_Markers_Template_Group');
                            var datalabelTemplateElemement = getElementByID(maps.element.id + '_LayerIndex_' + i + '_Label_Template_Group');
                            if (!isNullOrUndefined(markerTemplateElement) && markerTemplateElement.childElementCount > 0) {
                                for (var k = 0; k < markerTemplateElement.childElementCount; k++) {
                                    this.markerTranslate(markerTemplateElement.childNodes[k], factor, x, y, scale, 'Template');
                                }
                            }
                            if (!isNullOrUndefined(datalabelTemplateElemement) && datalabelTemplateElemement.childElementCount > 0) {
                                for (var _k3 = 0; _k3 < datalabelTemplateElemement.childElementCount; _k3++) {
                                    this.dataLabelTranslate(datalabelTemplateElemement.childNodes[_k3], factor, x, y, scale, 'Template');
                                }
                            }
                        }
                    }
                }, {
                    key: 'dataLabelTranslate',
                    value: function dataLabelTranslate(element, factor, x, y, scale, type) {
                        var animate$$1 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

                        var labelCollection = this.maps.dataLabelModule.dataLabelCollections;
                        var layerIndex = parseFloat(element.id.split('_')[2]);
                        var shapeIndex = parseFloat(element.id.split('_')[4]);
                        var labelIndex = parseFloat(element.id.split('_')[6]);
                        var duration = this.currentLayer.animationDuration;
                        for (var l = 0; l < labelCollection.length; l++) {
                            var label = labelCollection[l];
                            if (label['layerIndex'] === layerIndex && label['shapeIndex'] === shapeIndex && label['labelIndex'] === labelIndex) {
                                var labelX = label['location']['x'];
                                var labelY = label['location']['y'];
                                if (type === 'Template') {
                                    var layerEle = getElementByID(this.maps.element.id + '_Layer_Collections');
                                    labelX = Math.abs(this.maps.baseMapRectBounds['min']['x'] - labelX) * scale;
                                    labelY = Math.abs(this.maps.baseMapRectBounds['min']['y'] - labelY) * scale;
                                    var templateOffset = element.getBoundingClientRect();
                                    var layerOffset = layerEle.getBoundingClientRect();
                                    var elementOffset = element.parentElement.getBoundingClientRect();
                                    var _x30 = labelX + (layerOffset.left - elementOffset.left) - templateOffset.width / 2;
                                    var _y = labelY + (layerOffset.top - elementOffset.top) - templateOffset.height / 2;
                                    element.style.left = _x30 + 'px';
                                    element.style.top = _y + 'px';
                                } else {
                                    labelX = (labelX + x) * scale;
                                    labelY = (labelY + y) * scale;
                                    if (!animate$$1 || duration === 0) {
                                        element.setAttribute('transform', 'translate( ' + labelX + ' ' + labelY + ' )');
                                    } else {
                                        smoothTranslate(element, 0, duration, new MapLocation(labelX, labelY));
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'markerTranslate',
                    value: function markerTranslate(element, factor, x, y, scale, type) {
                        var animate$$1 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

                        var layerIndex = parseInt(element.id.split('_')[2], 10);
                        var markerIndex = parseInt(element.id.split('_')[4], 10);
                        var dataIndex = parseInt(element.id.split('_')[6], 10);
                        var layer = this.maps.layersCollection[layerIndex];
                        var marker = layer.markerSettings[markerIndex];
                        if (!isNullOrUndefined(marker) && !isNullOrUndefined(marker.dataSource) && !isNullOrUndefined(marker.dataSource[dataIndex])) {
                            var lng = marker.dataSource[dataIndex]['longitude'];
                            var lat = marker.dataSource[dataIndex]['latitude'];
                            var duration = this.currentLayer.animationDuration;
                            var location = this.maps.isTileMap ? convertTileLatLongToPoint(new Point(lng, lat), this.maps.tileZoomLevel, this.maps.tileTranslatePoint, true) : convertGeoToPoint(lat, lng, factor, layer, this.maps);
                            if (this.maps.isTileMap) {
                                if (type === 'Template') {
                                    var templateOffset = element.getBoundingClientRect();
                                    element.style.left = location.x - templateOffset.width / 2 + 'px';
                                    element.style.top = location.y - templateOffset.height / 2 + 'px';
                                } else {
                                    element.setAttribute('transform', 'translate( ' + location.x + ' ' + location.y + ' )');
                                }
                            } else {
                                if (type === 'Template') {
                                    location.x = Math.abs(this.maps.baseMapRectBounds['min']['x'] - location.x) * scale;
                                    location.y = Math.abs(this.maps.baseMapRectBounds['min']['y'] - location.y) * scale;
                                    var _templateOffset = element.getBoundingClientRect();
                                    var layerOffset = getElementByID(this.maps.element.id + '_Layer_Collections').getBoundingClientRect();
                                    var elementOffset = element.parentElement.getBoundingClientRect();
                                    element.style.left = location.x + (layerOffset.left - elementOffset.left) - _templateOffset.width / 2 + marker.offset.x + 'px';
                                    element.style.top = location.y + (layerOffset.top - elementOffset.top) - _templateOffset.height / 2 + marker.offset.y + 'px';
                                } else {
                                    location.x = (location.x + x) * scale + marker.offset.x;
                                    location.y = (location.y + y) * scale + marker.offset.y;
                                    if (!animate$$1 || duration === 0) {
                                        element.setAttribute('transform', 'translate( ' + location.x + ' ' + location.y + ' )');
                                    } else {
                                        smoothTranslate(element, 0, duration, location);
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'panning',
                    value: function panning() {
                        var map = this.maps;
                        var areaRect = map.mapAreaRect;
                        var down = this.mouseDownPoints;
                        var move = this.mouseMovePoints;
                        var scale = map.scale;
                        var translatePoint = map.translatePoint;
                        var x = void 0;
                        var y = void 0;
                        if (!map.isTileMap) {
                            var _x32 = translatePoint.x - (down.x - move.x) / scale;
                            var _y2 = translatePoint.y - (down.y - move.y) / scale;
                            var layerRect = getElementByID(map.element.id + '_Layer_Collections').getBoundingClientRect();
                            var elementRect = getElementByID(map.element.id + '_svg').getBoundingClientRect();
                            var panningXDirection = down.x - move.x < 0 ? layerRect.left <= elementRect.left + map.mapAreaRect.x : layerRect.left + layerRect.width >= elementRect.left + elementRect.width + map.mapAreaRect.x + map.margin.left;
                            var panningYDirection = down.y - move.y < 0 ? layerRect.top <= elementRect.top + map.mapAreaRect.y : layerRect.top + layerRect.height >= elementRect.top + elementRect.height + map.mapAreaRect.y + map.margin.top;
                            if (panningXDirection && panningYDirection) {
                                map.translatePoint = new Point(_x32, _y2);
                                this.applyTransform();
                            }
                        } else if (this.maps.tileZoomLevel > 1) {
                            x = map.tileTranslatePoint.x - (down.x - move.x);
                            y = map.tileTranslatePoint.y - (down.y - move.y);
                            map.tileTranslatePoint.x = x;
                            map.tileTranslatePoint.y = y;
                            map.mapLayerPanel.generateTiles(map.tileZoomLevel, map.tileTranslatePoint);
                            map.translatePoint.x = (map.tileTranslatePoint.x - (down.x - move.x)) / map.scale;
                            map.translatePoint.y = (map.tileTranslatePoint.y - (down.y - move.y)) / map.scale;
                            this.applyTransform();
                        }
                        this.mouseDownPoints = this.mouseMovePoints;
                    }
                }, {
                    key: 'toolBarZooming',
                    value: function toolBarZooming(zoomFactor, type) {
                        var map = this.maps;
                        var prevLevel = map.tileZoomLevel;
                        var scale = map.previousScale = map.scale;
                        var maxZoom = map.zoomSettings.maxZoom;
                        var minZoom = map.zoomSettings.minZoom;
                        var size = map.mapAreaRect;
                        zoomFactor = type === 'ZoomOut' ? Math.round(zoomFactor) === 1 ? 1 : zoomFactor : zoomFactor;
                        if (!map.isTileMap && (type === 'ZoomIn' ? zoomFactor >= minZoom && zoomFactor <= maxZoom : zoomFactor >= minZoom)) {
                            var translatePoint = map.previousPoint = map.translatePoint;
                            var min = map.baseMapRectBounds['min'];
                            var max = map.baseMapRectBounds['max'];
                            var mapWidth = Math.abs(max['x'] - min['x']);
                            var mapHeight = Math.abs(min['y'] - max['y']);
                            var translatePointX = translatePoint.x - (size.width / scale - size.width / zoomFactor) / 2;
                            var translatePointY = translatePoint.y - (size.height / scale - size.height / zoomFactor) / 2;
                            var currentHeight = Math.abs(map.baseMapRectBounds['max']['y'] - map.baseMapRectBounds['min']['y']) * zoomFactor;
                            translatePointX = currentHeight < map.mapAreaRect.height ? size.x + (-min['x'] + (size.width / 2 - mapWidth / 2)) : translatePointX;
                            translatePointY = currentHeight < map.mapAreaRect.height ? size.y + (-min['y'] + (size.height / 2 - mapHeight / 2)) : translatePointY;
                            map.translatePoint = new Point(translatePointX, translatePointY);
                            map.scale = zoomFactor;
                        } else if (map.isTileMap && zoomFactor >= minZoom && zoomFactor <= maxZoom) {
                            var tileZoomFactor = zoomFactor;
                            map.scale = Math.pow(2, tileZoomFactor - 1);
                            map.tileZoomLevel = tileZoomFactor;
                            var position = { x: map.availableSize.width / 2, y: map.availableSize.height / 2 };
                            this.getTileTranslatePosition(prevLevel, tileZoomFactor, position);
                            map.mapLayerPanel.generateTiles(tileZoomFactor, map.tileTranslatePoint);
                            map.translatePoint.x = (map.tileTranslatePoint.x - 0.5 * map.scale) / map.scale;
                            map.translatePoint.y = (map.tileTranslatePoint.y - 0.5 * map.scale) / map.scale;
                        }
                        this.applyTransform(true);
                    }
                }, {
                    key: 'createZoomingToolbars',
                    value: function createZoomingToolbars() {
                        var map = this.maps;
                        this.toolBarGroup = map.renderer.createGroup({
                            id: map.element.id + '_Zooming_KitCollection',
                            opacity: 0.3
                        });
                        var kitHeight = 16;
                        var kitWidth = 16;
                        var xSpacing = 15;
                        var ySpacing = 15;
                        var padding = 20;
                        var orientation = map.zoomSettings.toolBarOrientation;
                        var toolbarsCollection = map.zoomSettings.toolbars;
                        var shadowElement = '<filter id="chart_shadow" height="130%"><feGaussianBlur in="SourceAlpha" stdDeviation="5"/>';
                        shadowElement += '<feOffset dx="-3" dy="4" result="offsetblur"/><feComponentTransfer><feFuncA type="linear" slope="1"/>';
                        shadowElement += '</feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
                        var toolBarLength = map.zoomSettings.toolbars.length;
                        var toolWidth = map.zoomSettings.toolBarOrientation === 'Horizontal' ? toolBarLength * kitWidth + toolBarLength * padding : kitWidth * 2;
                        var toolHeight = map.zoomSettings.toolBarOrientation === 'Horizontal' ? kitHeight * 2 : toolBarLength * kitHeight + toolBarLength * padding;
                        this.toolBarGroup.appendChild(map.renderer.drawRectangle(new RectOption(map.element.id + '_Zooming_Rect', 'transparent', { color: 'transparent', width: 1 }, 1, new Rect(0, 0, toolWidth, toolHeight), 0, 0)));
                        var defElement = map.renderer.createDefs();
                        defElement.innerHTML = shadowElement;
                        this.toolBarGroup.appendChild(defElement);
                        var outerElement = map.renderer.drawRectangle(new RectOption(map.element.id + '_Zooming_Rect', 'transparent', { color: 'transparent', width: 1 }, 0.1, new Rect(0, 0, toolWidth, toolHeight), 0, 0));
                        outerElement.setAttribute('filter', 'url(#chart_shadow)');
                        this.toolBarGroup.appendChild(outerElement);
                        for (var i = 0; i < toolbarsCollection.length; i++) {
                            var toolbar = toolbarsCollection[i];
                            this.currentToolbarEle = map.renderer.createGroup({
                                id: map.element.id + '_Zooming_ToolBar_' + toolbar + '_Group',
                                transform: 'translate( ' + xSpacing + ' ' + ySpacing + ' ) '
                            });
                            this.currentToolbarEle.setAttribute('class', 'e-maps-toolbar');
                            var direction = '';
                            switch (toolbar.toLowerCase()) {
                                case 'zoom':
                                    direction = 'M0.001,14.629L1.372,16l4.571-4.571v-0.685l0.228-0.274c1.051,0.868,2.423,1.417,3.885,1.417c3.291,0,';
                                    direction += '5.943-2.651,5.943-5.943S13.395,0,10.103,0S4.16,2.651,4.16,5.943c0,1.508,0.503,2.834,1.417,3.885l-0.274,0.228H4.571';
                                    direction = direction + 'L0.001,14.629L0.001,14.629z M5.943,5.943c0-2.285,1.828-4.114,4.114-4.114s4.114,1.828,4.114,';
                                    this.currentToolbarEle.appendChild(map.renderer.drawPath(new PathOption(map.element.id + '_Zooming_ToolBar_' + toolbar, this.fillColor, 1, this.fillColor, 1, null, direction + '4.114s-1.828,4.114-4.114,4.114S5.943,8.229,5.943,5.943z')));
                                    this.zoomElements = this.currentToolbarEle;
                                    this.wireEvents(this.currentToolbarEle, this.performToolBarAction);
                                    break;
                                case 'zoomin':
                                    direction = 'M 8, 0 L 8, 16 M 0, 8 L 16, 8';
                                    this.currentToolbarEle.appendChild(map.renderer.drawPath(new PathOption(map.element.id + '_Zooming_ToolBar_' + toolbar + '_Path', this.fillColor, 3, this.fillColor, 1, null, direction)));
                                    this.zoomInElements = this.currentToolbarEle;
                                    this.wireEvents(this.currentToolbarEle, this.performToolBarAction);
                                    break;
                                case 'zoomout':
                                    direction = 'M 0, 8 L 16, 8';
                                    this.currentToolbarEle.appendChild(map.renderer.drawPath(new PathOption(map.element.id + '_Zooming_ToolBar_' + toolbar, this.fillColor, 3, this.fillColor, 1, null, direction)));
                                    this.zoomOutElements = this.currentToolbarEle;
                                    this.wireEvents(this.currentToolbarEle, this.performToolBarAction);
                                    break;
                                case 'pan':
                                    direction = 'M5,3h2.3L7.275,5.875h1.4L8.65,3H11L8,0L5,3z M3,11V8.7l2.875,0.025v-1.4L3,7.35V5L0,8L3,';
                                    direction += '11z M11,13H8.7l0.025-2.875h-1.4L7.35,13H5l3,3L11,13z M13,5v2.3l-2.875-0.025v1.4L13,8.65V11l3-3L13,5z';
                                    this.currentToolbarEle.appendChild(map.renderer.drawPath(new PathOption(map.element.id + '_Zooming_ToolBar_' + toolbar, this.selectionColor, 1, this.selectionColor, 1, null, direction)));
                                    this.panColor = this.selectionColor;
                                    this.panElements = this.currentToolbarEle;
                                    this.wireEvents(this.currentToolbarEle, this.performToolBarAction);
                                    break;
                                case 'reset':
                                    direction = 'M12.364,8h-2.182l2.909,3.25L16,8h-2.182c0-3.575-2.618-6.5-5.818-6.5c-1.128,0-2.218,0.366-3.091,';
                                    direction += '1.016l1.055,1.178C6.581,3.328,7.272,3.125,8,3.125C10.4,3.125,12.363,5.319,12.364,8L12.364,8z M11.091,';
                                    direction += '13.484l-1.055-1.178C9.419,12.672,8.728,12.875,8,12.875c-2.4,0-4.364-2.194-4.364-4.875h2.182L2.909,4.75L0,8h2.182c0,';
                                    this.currentToolbarEle.appendChild(map.renderer.drawPath(new PathOption(map.element.id + '_Zooming_ToolBar_' + toolbar, this.fillColor, null, null, 1, null, direction + '3.575,2.618,6.5,5.818,6.5C9.128,14.5,10.219,14.134,11.091,13.484L11.091,13.484z')));
                                    this.wireEvents(this.currentToolbarEle, this.performToolBarAction);
                                    break;
                            }
                            this.currentToolbarEle.appendChild(map.renderer.drawCircle(new CircleOption(map.element.id + '_Zooming_ToolBar_' + toolbar + '_Rect', 'transparent', { color: this.fillColor, width: 1 }, 1, 8, 8, 16, '')));
                            xSpacing = orientation === 'Horizontal' ? xSpacing + (kitWidth + padding) : xSpacing;
                            ySpacing = orientation === 'Horizontal' ? ySpacing : ySpacing + (kitHeight + padding);
                            this.toolBarGroup.appendChild(this.currentToolbarEle);
                        }
                    }
                }, {
                    key: 'performToolBarAction',
                    value: function performToolBarAction(e) {
                        var target = e.target;
                        e.stopImmediatePropagation();
                        var isTouch = e.pointerType === 'touch' || e.pointerType === '2' || e.type.indexOf('touch') > -1;
                        var toolbar = target.id.split('_')[3];
                        if (isTouch) {
                            this.handled = true;
                            this.performZoomingByToolBar(toolbar);
                        } else if ((e.type === 'mousedown' || e.type === 'pointerdown') && !this.handled) {
                            this.handled = false;
                            this.performZoomingByToolBar(toolbar);
                        } else {
                            this.handled = false;
                        }
                    }
                }, {
                    key: 'performZoomingByToolBar',
                    value: function performZoomingByToolBar(type) {
                        var map = this.maps;
                        switch (type.toLowerCase()) {
                            case 'zoom':
                                this.panColor = this.fillColor;
                                this.zoomColor = this.selectionColor;
                                this.applySelection(this.zoomElements, this.selectionColor);
                                this.applySelection(this.panElements, this.fillColor);
                                break;
                            case 'pan':
                                this.panColor = this.selectionColor;
                                this.zoomColor = this.fillColor;
                                this.applySelection(this.zoomElements, this.fillColor);
                                this.applySelection(this.panElements, this.selectionColor);
                                break;
                            case 'zoomin':
                                this.toolBarZooming((map.isTileMap ? map.tileZoomLevel : map.scale) + 1, 'ZoomIn');
                                break;
                            case 'zoomout':
                                this.toolBarZooming((map.isTileMap ? map.tileZoomLevel : map.scale) - 1, 'ZoomOut');
                                break;
                            case 'reset':
                                this.toolBarZooming(1, 'ZoomOut');
                                this.applySelection(this.zoomElements, this.fillColor);
                                this.applySelection(this.panElements, this.selectionColor);
                        }
                        this.panningStyle(type.toLowerCase());
                    }
                }, {
                    key: 'panningStyle',
                    value: function panningStyle(toolbar) {
                        var svg = getElementByID(this.maps.element.id + '_svg');
                        if (toolbar === 'pan' || this.isPanning) {
                            svg.setAttribute('class', 'e-maps-panning');
                        } else {
                            svg.setAttribute('class', '');
                        }
                    }
                }, {
                    key: 'applySelection',
                    value: function applySelection(elements, color) {
                        if (!elements) {
                            return;
                        }
                        var childElement = void 0;
                        for (var i = 0; i < elements.childElementCount; i++) {
                            childElement = elements.childNodes[i];
                            if (childElement.tagName !== 'circle') {
                                childElement.setAttribute('fill', color);
                                childElement.setAttribute('stroke', color);
                            }
                        }
                    }
                }, {
                    key: 'showTooltip',
                    value: function showTooltip(e) {
                        var text = e.target.id.split('_')[3];
                        if (!this.isTouch) {
                            createTooltip('EJ2_Map_Toolbar_Tip', this.maps.getLocalizedLabel(text), e.pageY + 10, e.pageX + 10, '10px');
                        }
                    }
                }, {
                    key: 'removeTooltip',
                    value: function removeTooltip() {
                        if (getElementByID('EJ2_Map_Toolbar_Tip')) {
                            remove(getElementByID('EJ2_Map_Toolbar_Tip'));
                        }
                    }
                }, {
                    key: 'alignToolBar',
                    value: function alignToolBar() {
                        var map = this.maps;
                        var padding = 10;
                        var element = createElement('div', { id: map.element.id + '_ToolBar', styles: 'position:absolute;z-index:2' });
                        var rectSVGObject = map.renderer.createSvg({
                            id: map.element.id + '_Zooming_ToolBar', width: 10, height: 10
                        });
                        rectSVGObject.appendChild(this.toolBarGroup);
                        element.appendChild(rectSVGObject);
                        if (getElementByID(map.element.id + '_Secondary_Element')) {
                            getElementByID(map.element.id + '_Secondary_Element').appendChild(element);
                        }
                        var toolBarSize = this.toolBarGroup.getBoundingClientRect();
                        rectSVGObject.setAttribute('height', (toolBarSize.height + padding / 2).toString());
                        rectSVGObject.setAttribute('width', (toolBarSize.width + padding / 2).toString());
                        var size = map.mapAreaRect;
                        var x = 0;
                        var y = 0;
                        switch (map.zoomSettings.verticalAlignment) {
                            case 'Near':
                                y = size.y;
                                break;
                            case 'Center':
                                y = size.height / 2 - toolBarSize.height / 2;
                                break;
                            case 'Far':
                                y = size.height - toolBarSize.height - padding;
                                break;
                        }
                        switch (map.zoomSettings.horizontalAlignment) {
                            case 'Near':
                                x = size.x;
                                break;
                            case 'Center':
                                x = size.width / 2 - toolBarSize.width / 2;
                                break;
                            case 'Far':
                                x = size.width - toolBarSize.width - padding;
                                break;
                        }
                        element.style.left = x + 'px';
                        element.style.top = y + 'px';
                        var color = this.maps.zoomSettings.highlightColor;
                        var css = ' .e-maps-toolbar:hover > circle { stroke:' + color + '; } .e-maps-toolbar:hover > path { fill: ' + color + ' ;  stroke: ' + color + '; }';
                        var style = document.createElement('style');
                        style.appendChild(document.createTextNode(css));
                        element.appendChild(style);
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents(element, process) {
                        EventHandler.add(element, Browser.touchStartEvent, process, this);
                        EventHandler.add(element, 'mouseover', this.showTooltip, this);
                        EventHandler.add(element, 'mouseout', this.removeTooltip, this);
                    }
                }, {
                    key: 'mapMouseWheel',
                    value: function mapMouseWheel(e) {
                        if (this.maps.zoomSettings.enable && this.maps.zoomSettings.mouseWheelZoom) {
                            var position = this.getMousePosition(e.pageX, e.pageY);
                            var map = this.maps;
                            var size = map.availableSize;
                            var prevLevel = map.tileZoomLevel;
                            var prevScale = map.scale;
                            var delta = 1;
                            var value = map.isTileMap ? prevLevel : prevScale;
                            if (position.x > map.mapAreaRect.x && position.x < map.mapAreaRect.x + map.mapAreaRect.width && position.y > map.mapAreaRect.y && position.y < map.mapAreaRect.y + map.mapAreaRect.height) {
                                e.preventDefault();
                                var direction = this.browserName === 'mozilla' && !this.isPointer ? -e.detail / 3 > 0 ? 'ZoomIn' : 'ZoomOut' : e.wheelDelta / 120 > 0 ? 'ZoomIn' : 'ZoomOut';
                                if (direction === 'ZoomIn') {
                                    this.performZooming(position, value + delta, direction);
                                } else {
                                    this.performZooming(position, value - delta, direction);
                                }
                            }
                        }
                    }
                }, {
                    key: 'doubleClick',
                    value: function doubleClick(e) {
                        var pageX = e.pageX;
                        var pageY = e.pageY;
                        var target = e.target;
                        if (this.maps.zoomSettings.enable && this.maps.zoomSettings.doubleClickZoom) {
                            var position = this.getMousePosition(pageX, pageY);
                            var map = this.maps;
                            var size = map.availableSize;
                            var prevLevel = map.tileZoomLevel;
                            var prevScale = map.scale;
                            var value = map.isTileMap ? prevLevel : prevScale;
                            if (position.x > map.mapAreaRect.x && position.x < map.mapAreaRect.x + map.mapAreaRect.width && position.y > map.mapAreaRect.y && position.y < map.mapAreaRect.y + map.mapAreaRect.height) {
                                this.performZooming(position, value + 1, 'ZoomIn');
                            }
                        }
                    }
                }, {
                    key: 'mouseDownHandler',
                    value: function mouseDownHandler(e) {
                        var pageX = void 0;
                        var pageY = void 0;
                        var target = void 0;
                        var touches = null;
                        var element = e.target;
                        if (e.type === 'touchstart') {
                            this.isTouch = true;
                            touches = e.touches;
                            target = e.target;
                            pageX = touches[0].clientX;
                            pageY = touches[0].clientY;
                        } else {
                            pageX = e.pageX;
                            pageY = e.pageY;
                            target = e.target;
                        }
                        this.isPanning = this.panColor === this.selectionColor ? true : this.zoomColor !== this.selectionColor;
                        this.rectZoomingStart = !this.isPanning && this.maps.zoomSettings.enable;
                        this.mouseDownPoints = this.getMousePosition(pageX, pageY);
                        if (this.isTouch) {
                            this.firstMove = true;
                            this.pinchFactor = this.maps.scale;
                            this.fingers = touches.length;
                        }
                    }
                }, {
                    key: 'mouseMoveHandler',
                    value: function mouseMoveHandler(e) {
                        var pageX = void 0;
                        var pageY = void 0;
                        var map = this.maps;
                        var target = void 0;
                        var touches = null;
                        var zoom = this.maps.zoomSettings;
                        if (e.type === 'touchmove') {
                            this.isTouch = true;
                            target = e.target;
                            touches = e.touches;
                            pageX = touches[0].clientX;
                            pageY = touches[0].clientY;
                        } else {
                            pageX = e.pageX;
                            pageY = e.pageY;
                            target = e.target;
                        }
                        if (getElementByID(map.element.id + '_Zooming_KitCollection')) {
                            if (target.id.indexOf('_Zooming_') > -1) {
                                getElementByID(map.element.id + '_Zooming_KitCollection').setAttribute('opacity', '1');
                            } else {
                                getElementByID(map.element.id + '_Zooming_KitCollection').setAttribute('opacity', '0.3');
                            }
                        }
                        if (this.isTouch) {
                            if (this.maps.zoomSettings.pinchZooming) {
                                if (this.firstMove && touches.length === 2) {
                                    this.rectZoomingStart = false;
                                    this.updateInteraction();
                                    this.touchStartList = targetTouches(e);
                                } else if (this.touchStartList.length === 2 && touches.length === 2) {
                                    this.touchMoveList = targetTouches(e);
                                    e.preventDefault();
                                    this.rectZoomingStart = false;
                                    this.performPinchZooming(e);
                                }
                                this.firstMove = false;
                            }
                        }
                        this.mouseMovePoints = this.getMousePosition(pageX, pageY);
                        var targetId = e.target['id'];
                        var targetEle = e.target;
                        if (zoom.enable && this.isPanning) {
                            e.preventDefault();
                            this.maps.element.style.cursor = 'pointer';
                            this.panning();
                        }
                        if (this.isTouch ? touches.length === 1 && this.rectZoomingStart : this.rectZoomingStart) {
                            e.preventDefault();
                            this.drawZoomRectangle();
                        }
                    }
                }, {
                    key: 'mouseUpHandler',
                    value: function mouseUpHandler(e) {
                        var map = this.maps;
                        this.rectZoomingStart = false;
                        this.isPanning = false;
                        this.isTouch = false;
                        this.touchStartList = [];
                        this.touchMoveList = [];
                        this.lastScale = 1;
                        this.maps.element.style.cursor = 'auto';
                        var zoomRectElement = getElementByID(this.maps.element.id + '_Selection_Rect_Zooming');
                        if (zoomRectElement && this.maps.zoomSettings.enable) {
                            remove(zoomRectElement);
                            this.performRectZooming();
                        }
                    }
                }, {
                    key: 'mouseCancelHandler',
                    value: function mouseCancelHandler(e) {
                        this.isPanning = false;
                        this.isTouch = false;
                        this.rectZoomingStart = false;
                        var zoomRectElement = getElementByID(this.maps.element.id + '_Selection_Rect_Zooming');
                        if (zoomRectElement && this.maps.zoomSettings.enable) {
                            remove(zoomRectElement);
                            this.performRectZooming();
                        }
                    }
                }, {
                    key: 'click',
                    value: function click(e) {
                        var map = this.maps;
                        if (map.zoomSettings.zoomOnClick && e.target.id.indexOf('_ShapeIndex_') > -1 && !map.zoomSettings.doubleClickZoom && this.zoomColor === this.selectionColor && this.zoomElements) {
                            var bounds = e.target.getBBox();
                            var boundwidth = bounds.width;
                            var boundHeight = bounds.height;
                            var layerScale = void 0;
                            var availWidth = map.availableSize.width;
                            var availHeight = map.availableSize.height;
                            layerScale = (availWidth - 100) / (availHeight - 100) > boundwidth / boundHeight ? (availHeight - 100) / boundHeight : (availWidth - 100) / boundwidth;
                            var leftPos = (availWidth / 2 - boundwidth * map.scale / 2) / layerScale;
                            var topPos = (availHeight / 2 - boundHeight * map.scale / 2) / layerScale;
                            var translatePointX = -bounds.x + leftPos;
                            var translatePointY = -bounds.y + topPos;
                            map.previousScale = map.scale;
                            map.previousPoint = map.translatePoint;
                            map.scale = layerScale;
                            map.translatePoint = { x: translatePointX, y: translatePointY };
                            this.applyTransform(true);
                        }
                    }
                }, {
                    key: 'getMousePosition',
                    value: function getMousePosition(pageX, pageY) {
                        var map = this.maps;
                        var elementRect = map.element.getBoundingClientRect();
                        var pageXOffset = map.element.ownerDocument.defaultView.pageXOffset;
                        var pageYOffset = map.element.ownerDocument.defaultView.pageYOffset;
                        var clientTop = map.element.ownerDocument.documentElement.clientTop;
                        var clientLeft = map.element.ownerDocument.documentElement.clientLeft;
                        var positionX = elementRect.left + pageXOffset - clientLeft;
                        var positionY = elementRect.top + pageYOffset - clientTop;
                        return new Point(pageX - positionX, pageY - positionY);
                    }
                }, {
                    key: 'addEventListener',
                    value: function addEventListener() {
                        if (this.maps.isDestroyed) {
                            return;
                        }
                        EventHandler.add(this.maps.element, this.wheelEvent, this.mapMouseWheel, this);
                        EventHandler.add(this.maps.element, 'click', this.click, this);
                        EventHandler.add(this.maps.element, 'dblclick', this.doubleClick, this);
                        this.maps.on(Browser.touchMoveEvent, this.mouseMoveHandler, this);
                        this.maps.on(Browser.touchStartEvent, this.mouseDownHandler, this);
                        this.maps.on(Browser.touchEndEvent, this.mouseUpHandler, this);
                        EventHandler.add(this.maps.element, this.cancelEvent, this.mouseCancelHandler, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        if (this.maps.isDestroyed) {
                            return;
                        }
                        EventHandler.remove(this.maps.element, this.wheelEvent, this.mapMouseWheel);
                        EventHandler.remove(this.maps.element, 'click', this.click);
                        EventHandler.remove(this.maps.element, 'dblclick', this.doubleClick);
                        this.maps.off(Browser.touchMoveEvent, this.mouseMoveHandler);
                        this.maps.off(Browser.touchStartEvent, this.mouseDownHandler);
                        this.maps.off(Browser.touchEndEvent, this.mouseUpHandler);
                        this.maps.off(this.cancelEvent, this.mouseCancelHandler);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'Zoom';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(maps) {
                        this.removeEventListener();
                        /**
                         * Destroy method performed here
                         */
                    }
                }]);

                return Zoom;
            }());

            _export2('Maps', Maps);

            _export2('load', load);

            _export2('loaded', loaded);

            _export2('click', click);

            _export2('rightClick', rightClick);

            _export2('doubleClick', doubleClick);

            _export2('resize', resize);

            _export2('tooltipRender', tooltipRender);

            _export2('shapeSelected', shapeSelected);

            _export2('shapeHighlight', shapeHighlight);

            _export2('mousemove', mousemove);

            _export2('mouseup', mouseup);

            _export2('mousedown', mousedown);

            _export2('layerRendering', layerRendering);

            _export2('shapeRendering', shapeRendering);

            _export2('markerRendering', markerRendering);

            _export2('markerClick', _markerClick);

            _export2('markerMouseMove', markerMouseMove);

            _export2('dataLabelRendering', dataLabelRendering);

            _export2('bubbleRendering', bubbleRendering);

            _export2('bubbleClick', _bubbleClick);

            _export2('bubbleMouseMove', bubbleMouseMove);

            _export2('animationComplete', animationComplete);

            _export2('legendRendering', legendRendering);

            _export2('annotationRendering', annotationRendering);

            _export2('itemSelection', itemSelection);

            _export2('itemHighlight', itemHighlight);

            _export2('beforePrint', beforePrint);

            _export2('Annotation', Annotation);

            _export2('Arrow', Arrow);

            _export2('Font', Font);

            _export2('Border', Border);

            _export2('TooltipSettings', TooltipSettings);

            _export2('Margin', Margin);

            _export2('ColorMappingSettings', ColorMappingSettings);

            _export2('SelectionSettings', SelectionSettings);

            _export2('HighlightSettings', HighlightSettings);

            _export2('NavigationLineSettings', NavigationLineSettings);

            _export2('BubbleSettings', BubbleSettings);

            _export2('CommonTitleSettings', CommonTitleSettings);

            _export2('SubTitleSettings', SubTitleSettings);

            _export2('TitleSettings', TitleSettings);

            _export2('ZoomSettings', ZoomSettings);

            _export2('LegendSettings', LegendSettings);

            _export2('DataLabelSettings', DataLabelSettings);

            _export2('ShapeSettings', ShapeSettings);

            _export2('MarkerSettings', MarkerSettings);

            _export2('LayerSettings', LayerSettings);

            _export2('Tile', Tile);

            _export2('MapsAreaSettings', MapsAreaSettings);

            _export2('Size', Size);

            _export2('stringToNumber', stringToNumber);

            _export2('calculateSize', calculateSize);

            _export2('createSvg', createSvg);

            _export2('degreesToRadians', degreesToRadians);

            _export2('radiansToDegrees', radiansToDegrees);

            _export2('convertGeoToPoint', convertGeoToPoint);

            _export2('convertTileLatLongToPoint', convertTileLatLongToPoint);

            _export2('xToCoordinate', xToCoordinate);

            _export2('yToCoordinate', yToCoordinate);

            _export2('aitoff', aitoff);

            _export2('roundTo', roundTo);

            _export2('sinci', sinci);

            _export2('acos', acos);

            _export2('calculateBound', calculateBound);

            _export2('Point', Point);

            _export2('MinMax', MinMax);

            _export2('GeoLocation', GeoLocation);

            _export2('measureText', measureText);

            _export2('TextOption', TextOption);

            _export2('PathOption', PathOption);

            _export2('RectOption', RectOption);

            _export2('CircleOption', CircleOption);

            _export2('PolygonOption', PolygonOption);

            _export2('PolylineOption', PolylineOption);

            _export2('LineOption', LineOption);

            _export2('Line', Line);

            _export2('MapLocation', MapLocation);

            _export2('Rect', Rect);

            _export2('PatternOptions', PatternOptions);

            _export2('renderTextElement', renderTextElement);

            _export2('convertElement', convertElement);

            _export2('convertElementFromLabel', convertElementFromLabel);

            _export2('appendShape', appendShape);

            _export2('drawCircle', drawCircle);

            _export2('drawRectangle', drawRectangle);

            _export2('drawPath', drawPath);

            _export2('drawPolygon', drawPolygon);

            _export2('drawPolyline', drawPolyline);

            _export2('drawLine', drawLine);

            _export2('calculateShapes', calculateShapes);

            _export2('drawDiamond', drawDiamond);

            _export2('drawTriangle', drawTriangle);

            _export2('drawCross', drawCross);

            _export2('drawHorizontalLine', drawHorizontalLine);

            _export2('drawVerticalLine', drawVerticalLine);

            _export2('drawStar', drawStar);

            _export2('drawBalloon', drawBalloon);

            _export2('drawPattern', drawPattern);

            _export2('getFieldData', getFieldData);

            _export2('checkShapeDataFields', checkShapeDataFields);

            _export2('filter', filter);

            _export2('findMidPointOfPolygon', findMidPointOfPolygon);

            _export2('isCustomPath', isCustomPath);

            _export2('textTrim', textTrim);

            _export2('findPosition', findPosition);

            _export2('removeElement', removeElement);

            _export2('getTranslate', getTranslate);

            _export2('getElementByID', getElementByID);

            _export2('Internalize', Internalize);

            _export2('getTemplateFunction', getTemplateFunction);

            _export2('getElement', getElement);

            _export2('getShapeData', getShapeData);

            _export2('triggerShapeEvent', triggerShapeEvent);

            _export2('getElementsByClassName', getElementsByClassName);

            _export2('querySelector', querySelector);

            _export2('getTargetElement', getTargetElement);

            _export2('createStyle', createStyle);

            _export2('customizeStyle', customizeStyle);

            _export2('removeClass', removeClass);

            _export2('elementAnimate', elementAnimate);

            _export2('timeout', timeout);

            _export2('showTooltip', showTooltip);

            _export2('wordWrap', wordWrap);

            _export2('createTooltip', createTooltip);

            _export2('drawSymbol', drawSymbol);

            _export2('calculateLegendShapes', calculateLegendShapes);

            _export2('getElementOffset', getElementOffset);

            _export2('changeBorderWidth', changeBorderWidth);

            _export2('changeNavaigationLineWidth', changeNavaigationLineWidth);

            _export2('targetTouches', targetTouches);

            _export2('calculateScale', calculateScale);

            _export2('getDistance', getDistance);

            _export2('getTouches', getTouches);

            _export2('getTouchCenter', getTouchCenter);

            _export2('sum', sum);

            _export2('zoomAnimate', zoomAnimate);

            _export2('animate', animate);

            _export2('MapAjax', MapAjax);

            _export2('smoothTranslate', smoothTranslate);

            _export2('LayerPanel', LayerPanel);

            _export2('Bubble', Bubble);

            _export2('BingMap', BingMap);

            _export2('Marker', Marker);

            _export2('ColorMapping', ColorMapping);

            _export2('DataLabel', DataLabel);

            _export2('NavigationLine', NavigationLine);

            _export2('Legend', Legend);

            _export2('Highlight', Highlight);

            _export2('Selection', Selection);

            _export2('MapsTooltip', MapsTooltip);

            _export2('Zoom', Zoom);

            _export2('Annotations', Annotations);
        }
    };
});

//# sourceMappingURL=ej2-maps.es2015-compiled.js.map