import { Animation, Browser, ChildProperty, Collection, Complex, Component, Event, EventHandler, Internationalization, L10n, NotifyPropertyChanges, Property, SvgRenderer, Touch, compile, createElement, extend, getValue, isNullOrUndefined, merge, print, remove } from '@syncfusion/ej2-base';
import { DataManager, DataUtil, Query } from '@syncfusion/ej2-data';
import { PdfBitmap, PdfDocument, PdfPageOrientation } from '@syncfusion/ej2-pdf-export';

/**
 * Specifies Chart Themes
 */
var Theme;
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
    Theme.axisTitleFont = {
        size: '14px',
        fontWeight: 'Normal',
        color: null,
        fontStyle: 'Normal',
        fontFamily: 'Segoe UI'
    };
    /** @private */
    Theme.chartTitleFont = {
        size: '15px',
        fontWeight: '500',
        color: null,
        fontStyle: 'Normal',
        fontFamily: 'Segoe UI'
    };
    /** @private */
    Theme.crosshairLabelFont = {
        size: '13px',
        fontWeight: 'Normal',
        color: null,
        fontStyle: 'Normal',
        fontFamily: 'Segoe UI'
    };
    /** @private */
    Theme.tooltipLabelFont = {
        size: '13px',
        fontWeight: 'Normal',
        color: null,
        fontStyle: 'Normal',
        fontFamily: 'Segoe UI'
    };
    /** @private */
    Theme.legendLabelFont = {
        size: '13px',
        fontWeight: 'Normal',
        color: null,
        fontStyle: 'Normal',
        fontFamily: 'Segoe UI'
    };
    /** @private */
    Theme.stripLineLabelFont = {
        size: '12px',
        fontWeight: 'Regular',
        color: '#353535',
        fontStyle: 'Normal',
        fontFamily: 'Segoe UI'
    };
})(Theme || (Theme = {}));
/** @private */
function getSeriesColor(theme) {
    let palette;
    switch (theme) {
        case 'Fabric':
            palette = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',
                '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300'];
            break;
        case 'Bootstrap':
            palette = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',
                '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
            break;
        case 'Highcontrast':
            palette = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF',
                '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];
            break;
        default:
            palette = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883',
                '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
            break;
    }
    return palette;
}
/** @private */
function getThemeColor(theme) {
    let style;
    switch (theme) {
        case 'Highcontrast':
            style = {
                axisLabel: '#ffffff',
                axisTitle: '#ffffff',
                axisLine: '#ffffff',
                majorGridLine: '#BFBFBF',
                minorGridLine: '#969696',
                majorTickLine: '#BFBFBF',
                minorTickLine: '#969696',
                chartTitle: '#ffffff',
                legendLabel: '#ffffff',
                background: '#000000',
                areaBorder: '#ffffff',
                errorBar: '#ffffff',
                crosshairLine: '#ffffff',
                crosshairFill: '#ffffff',
                crosshairLabel: '#000000',
                tooltipFill: '#ffffff',
                tooltipBoldLabel: '#000000',
                tooltipLightLabel: '#000000',
                tooltipHeaderLine: '#969696',
                markerShadow: '#BFBFBF',
                selectionRectFill: 'rgba(255, 217, 57, 0.3)',
                selectionRectStroke: '#ffffff',
                selectionCircleStroke: '#FFD939'
            };
            break;
        default:
            style = {
                axisLabel: '#686868',
                axisTitle: '#424242',
                axisLine: '#b5b5b5',
                majorGridLine: '#dbdbdb',
                minorGridLine: '#eaeaea',
                majorTickLine: '#b5b5b5',
                minorTickLine: '#d6d6d6',
                chartTitle: '#424242',
                legendLabel: '#353535',
                background: '#FFFFFF',
                areaBorder: 'Gray',
                errorBar: '#000000',
                crosshairLine: '#4f4f4f',
                crosshairFill: '#4f4f4f',
                crosshairLabel: '#e5e5e5',
                tooltipFill: 'rgba(0, 8, 22, 0.75)',
                tooltipBoldLabel: '#ffffff',
                tooltipLightLabel: '#dbdbdb',
                tooltipHeaderLine: '#ffffff',
                markerShadow: null,
                selectionRectFill: 'rgba(41, 171, 226, 0.1)',
                selectionRectStroke: '#29abe2',
                selectionCircleStroke: '#29abe2'
            };
            break;
    }
    return style;
}

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Defines the appearance of the connectors
 */
class Connector extends ChildProperty {
}
__decorate$1([
    Property('Line')
], Connector.prototype, "type", void 0);
__decorate$1([
    Property(null)
], Connector.prototype, "color", void 0);
__decorate$1([
    Property(1)
], Connector.prototype, "width", void 0);
__decorate$1([
    Property(null)
], Connector.prototype, "length", void 0);
__decorate$1([
    Property('')
], Connector.prototype, "dashArray", void 0);
/**
 * Configures the fonts in charts.
 */
class Font extends ChildProperty {
}
__decorate$1([
    Property('16px')
], Font.prototype, "size", void 0);
__decorate$1([
    Property('')
], Font.prototype, "color", void 0);
__decorate$1([
    Property('Segoe UI')
], Font.prototype, "fontFamily", void 0);
__decorate$1([
    Property('Normal')
], Font.prototype, "fontWeight", void 0);
__decorate$1([
    Property('Normal')
], Font.prototype, "fontStyle", void 0);
__decorate$1([
    Property(1)
], Font.prototype, "opacity", void 0);
__decorate$1([
    Property('Center')
], Font.prototype, "textAlignment", void 0);
__decorate$1([
    Property('Trim')
], Font.prototype, "textOverflow", void 0);
/**
 * Configures the borders in the chart.
 */
class Border extends ChildProperty {
}
__decorate$1([
    Property('')
], Border.prototype, "color", void 0);
__decorate$1([
    Property(1)
], Border.prototype, "width", void 0);
/**
 * Configures the chart area.
 */
class ChartArea extends ChildProperty {
}
__decorate$1([
    Complex({}, Border)
], ChartArea.prototype, "border", void 0);
__decorate$1([
    Property('transparent')
], ChartArea.prototype, "background", void 0);
__decorate$1([
    Property(1)
], ChartArea.prototype, "opacity", void 0);
/**
 * Configures the chart margins.
 */
class Margin extends ChildProperty {
}
__decorate$1([
    Property(10)
], Margin.prototype, "left", void 0);
__decorate$1([
    Property(10)
], Margin.prototype, "right", void 0);
__decorate$1([
    Property(10)
], Margin.prototype, "top", void 0);
__decorate$1([
    Property(10)
], Margin.prototype, "bottom", void 0);
/**
 * Configures the animation behavior for chart series.
 */
class Animation$1 extends ChildProperty {
}
__decorate$1([
    Property(true)
], Animation$1.prototype, "enable", void 0);
__decorate$1([
    Property(1000)
], Animation$1.prototype, "duration", void 0);
__decorate$1([
    Property(0)
], Animation$1.prototype, "delay", void 0);
/** @private */
class Indexes extends ChildProperty {
}
__decorate$1([
    Property(0)
], Indexes.prototype, "series", void 0);
__decorate$1([
    Property(0)
], Indexes.prototype, "point", void 0);
/**
 * Column series rounded corner options
 */
class CornerRadius extends ChildProperty {
}
__decorate$1([
    Property(0)
], CornerRadius.prototype, "topLeft", void 0);
__decorate$1([
    Property(0)
], CornerRadius.prototype, "topRight", void 0);
__decorate$1([
    Property(0)
], CornerRadius.prototype, "bottomLeft", void 0);
__decorate$1([
    Property(0)
], CornerRadius.prototype, "bottomRight", void 0);
/**
 * @private
 */
class Index {
    constructor(seriesIndex, pointIndex) {
        this.series = seriesIndex;
        this.point = pointIndex;
    }
}
/**
 * Configures the Empty Points of series
 */
class EmptyPointSettings extends ChildProperty {
}
__decorate$1([
    Property(null)
], EmptyPointSettings.prototype, "fill", void 0);
__decorate$1([
    Complex({ color: 'transparent', width: 0 }, Border)
], EmptyPointSettings.prototype, "border", void 0);
__decorate$1([
    Property('Gap')
], EmptyPointSettings.prototype, "mode", void 0);
/**
 * Configures the ToolTips in the chart.
 */
class TooltipSettings extends ChildProperty {
}
__decorate$1([
    Property(false)
], TooltipSettings.prototype, "enable", void 0);
__decorate$1([
    Property(false)
], TooltipSettings.prototype, "shared", void 0);
__decorate$1([
    Property(null)
], TooltipSettings.prototype, "fill", void 0);
__decorate$1([
    Property(null)
], TooltipSettings.prototype, "header", void 0);
__decorate$1([
    Property(0.75)
], TooltipSettings.prototype, "opacity", void 0);
__decorate$1([
    Complex(Theme.tooltipLabelFont, Font)
], TooltipSettings.prototype, "textStyle", void 0);
__decorate$1([
    Property(null)
], TooltipSettings.prototype, "format", void 0);
__decorate$1([
    Property(null)
], TooltipSettings.prototype, "template", void 0);
__decorate$1([
    Property(true)
], TooltipSettings.prototype, "enableAnimation", void 0);
__decorate$1([
    Complex({ color: '#cccccc', width: 0.5 }, Border)
], TooltipSettings.prototype, "border", void 0);

/**
 * Methods for calculating the text size.
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
    let htmlObject = document.getElementById('chartmeasuretext');
    if (htmlObject === null) {
        htmlObject = createElement('text', { id: 'chartmeasuretext' });
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
 * Function to sort the dataSource, by default it sort the data in ascending order.
 * @param  {Object} data
 * @param  {string} fields
 * @param  {boolean} isDescending
 * @returns Object
 */
function sort(data, fields, isDescending) {
    let sortData = extend([], data, null);
    sortData.sort((a, b) => {
        let first = 0;
        let second = 0;
        for (let i = 0; i < fields.length; i++) {
            first += a[fields[i]];
            second += b[fields[i]];
        }
        if ((!isDescending && first < second) || (isDescending && first > second)) {
            return -1;
        }
        else if (first === second) {
            return 0;
        }
        return 1;
    });
    return sortData;
}
/** @private */
function rotateTextSize(font, text, angle, chart) {
    let renderer = new SvgRenderer(chart.element.id);
    let box;
    let options;
    let htmlObject;
    options = {
        'font-size': font.size,
        'font-style': font.fontStyle,
        'font-family': font.fontFamily,
        'font-weight': font.fontWeight,
        'transform': 'rotate(' + angle + ', 0, 0)',
        'text-anchor': 'middle'
    };
    htmlObject = renderer.createText(options, text);
    if (!chart.delayRedraw) {
        chart.element.appendChild(chart.svgObject);
    }
    chart.svgObject.appendChild(htmlObject);
    box = htmlObject.getBoundingClientRect();
    remove(htmlObject);
    if (!chart.delayRedraw) {
        remove(chart.svgObject);
    }
    return new Size((box.right - box.left), (box.bottom - box.top));
}
/** @private */
function removeElement(id) {
    let element = getElement(id);
    if (element) {
        remove(element);
    }
}
/** @private */
function logBase(value, base) {
    return Math.log(value) / Math.log(base);
}
/** @private */
function showTooltip(text, x, y, areaWidth, id, element, isTouch) {
    //let id1: string = 'EJ2_legend_tooltip';
    let tooltip = document.getElementById(id);
    let width = measureText(text, {
        fontFamily: 'Segoe UI', size: '12px',
        fontStyle: 'Normal', fontWeight: 'Regular'
    }).width + 5;
    x = (x + width > areaWidth) ? x - width : x;
    if (!tooltip) {
        tooltip = createElement('div', {
            innerHTML: text,
            id: id,
            styles: 'top:' + (y + 15).toString() + 'px;left:' + (x + 15).toString() +
                'px;background-color: rgb(255, 255, 255) !important; color:black !important; ' +
                'position:absolute;border:1px solid rgb(112, 112, 112); padding-left : 3px; padding-right : 2px;' +
                'padding-bottom : 2px; padding-top : 2px; font-size:12px; font-family: "Segoe UI"'
        });
        element.appendChild(tooltip);
    }
    else {
        tooltip.innerHTML = text;
        tooltip.style.top = (y + 15).toString() + 'px';
        tooltip.style.left = (x + 15).toString() + 'px';
    }
    if (isTouch) {
        setTimeout(() => { removeElement(id); }, 1500);
    }
}
/** @private */
function inside(value, range) {
    return (value < range.max) && (value > range.min);
}
/** @private */
function withIn(value, range) {
    return (value <= range.max) && (value >= range.min);
}
/** @private */
function withInRange(previousPoint, currentPoint, nextPoint, series) {
    let mX2 = series.logWithIn(currentPoint.xValue, series.xAxis);
    let mX1 = previousPoint ? series.logWithIn(previousPoint.xValue, series.xAxis) : mX2;
    let mX3 = nextPoint ? series.logWithIn(nextPoint.xValue, series.xAxis) : mX2;
    let xStart = Math.floor(series.xAxis.visibleRange.min);
    let xEnd = Math.ceil(series.xAxis.visibleRange.max);
    return ((mX1 >= xStart && mX1 <= xEnd) || (mX2 >= xStart && mX2 <= xEnd) ||
        (mX3 >= xStart && mX3 <= xEnd) || (xStart >= mX1 && xStart <= mX3));
}
/** @private */
function sum(values) {
    let sum = 0;
    for (let value of values) {
        sum += value;
    }
    return sum;
}
/** @private */
function subArraySum(values, first, last, index, series) {
    let sum = 0;
    if (index !== null) {
        for (let i = (first + 1); i < last; i++) {
            if (index.indexOf(i) === -1) {
                sum += values[i][series.yName];
            }
        }
    }
    else {
        for (let i = (first + 1); i < last; i++) {
            if (!isNullOrUndefined(values[i][series.yName])) {
                sum += values[i][series.yName];
            }
        }
    }
    return sum;
}
/** @private */
function subtractThickness(rect, thickness) {
    rect.x += thickness.left;
    rect.y += thickness.top;
    rect.width -= thickness.left + thickness.right;
    rect.height -= thickness.top + thickness.bottom;
    return rect;
}
/** @private */
function subtractRect(rect, thickness) {
    rect.x += thickness.x;
    rect.y += thickness.y;
    rect.width -= thickness.x + thickness.width;
    rect.height -= thickness.y + thickness.height;
    return rect;
}
/** @private */
function degreeToLocation(degree, radius, center) {
    let radian = (degree * Math.PI) / 180;
    return new ChartLocation(Math.cos(radian) * radius + center.x, Math.sin(radian) * radius + center.y);
}
function getAccumulationLegend(locX, locY, r, height, width, mode) {
    let cartesianlarge = degreeToLocation(270, r, new ChartLocation(locX, locY));
    let cartesiansmall = degreeToLocation(270, r, new ChartLocation(locX + (width / 10), locY));
    return 'M' + ' ' + locX + ' ' + locY + ' ' + 'L' + ' ' + (locX + r) + ' ' + (locY) + ' ' + 'A' + ' ' + (r) + ' ' + (r) +
        ' ' + 0 + ' ' + 1 + ' ' + 1 + ' ' + cartesianlarge.x + ' ' + cartesianlarge.y + ' ' + 'Z' + ' ' + 'M' + ' ' + (locX +
        (width / 10)) + ' ' + (locY - (height / 10)) + ' ' + 'L' + (locX + (r)) + ' ' + (locY - height / 10) + ' ' + 'A' + ' '
        + (r) + ' ' + (r) + ' ' + 0 + ' ' + 0 + ' ' + 0 + ' ' + cartesiansmall.x + ' ' + cartesiansmall.y + ' ' + 'Z';
}
/** @private */
function getAngle(center, point) {
    let angle = Math.atan2((point.y - center.y), (point.x - center.x));
    angle = angle < 0 ? (6.283 + angle) : angle;
    return angle * (180 / Math.PI);
}
/** @private */
function subArray(values, index) {
    let subArray = [];
    for (let i = 0; i <= index - 1; i++) {
        subArray.push(values[i]);
    }
    return subArray;
}
/** @private */
function valueToCoefficient(value, axis) {
    let range = axis.visibleRange;
    let result = (value - range.min) / (range.delta);
    return axis.isInversed ? (1 - result) : result;
}
/** @private */
function TransformToVisible(x, y, xAxis, yAxis, isInverted, series) {
    x = (xAxis.valueType === 'Logarithmic' ? logBase(x > 1 ? x : 1, xAxis.logBase) : x);
    y = (yAxis.valueType === 'Logarithmic' ?
        logBase(y > 1 ? y : 1, yAxis.logBase) : y);
    x += xAxis.valueType === 'Category' && xAxis.labelPlacement === 'BetweenTicks' && series.type !== 'Radar' ? 0.5 : 0;
    let radius = series.chart.radius * valueToCoefficient(y, yAxis);
    let point = CoefficientToVector(valueToPolarCoefficient(x, xAxis), series.chart.primaryXAxis.startAngle);
    return {
        x: (series.clipRect.width / 2 + series.clipRect.x) + radius * point.x,
        y: (series.clipRect.height / 2 + series.clipRect.y) + radius * point.y
    };
}
/**
 * method to find series, point index by element id
 * @private
 */
function indexFinder(id, isPoint = false) {
    let ids = ['NaN', 'NaN'];
    if (id.indexOf('_Point_') > -1) {
        ids = id.split('_Series_')[1].split('_Point_');
    }
    else if (id.indexOf('_shape_') > -1 && (!isPoint || (isPoint && id.indexOf('_legend_') === -1))) {
        ids = id.split('_shape_');
        ids[0] = '0';
    }
    else if (id.indexOf('_text_') > -1 && (!isPoint || (isPoint && id.indexOf('_legend_') === -1))) {
        ids = id.split('_text_');
        ids[0] = '0';
    }
    return new Index(parseInt(ids[0], 10), parseInt(ids[1], 10));
}
/** @private */
function CoefficientToVector(coefficient, startAngle) {
    startAngle = startAngle < 0 ? startAngle + 360 : startAngle;
    let angle = Math.PI * (1.5 - 2 * coefficient);
    angle = angle + (startAngle * Math.PI) / 180;
    return { x: Math.cos(angle), y: Math.sin(angle) };
}
/** @private */
function valueToPolarCoefficient(value, axis) {
    let range = axis.visibleRange;
    let delta;
    let length;
    if (axis.valueType !== 'Category') {
        delta = (range.max - (axis.valueType === 'DateTime' ? axis.dateTimeInterval : range.interval)) - range.min;
        length = axis.visibleLabels.length - 1;
        delta = delta === 0 ? 1 : delta;
    }
    else {
        delta = range.delta;
        length = axis.visibleLabels.length;
    }
    return axis.isInversed ? ((value - range.min) / delta) * (1 - 1 / (length)) :
        1 - ((value - range.min) / delta) * (1 - 1 / (length));
}
/** @private */
class Mean {
    constructor(verticalStandardMean, verticalSquareRoot, horizontalStandardMean, horizontalSquareRoot, verticalMean, horizontalMean) {
        this.verticalStandardMean = verticalStandardMean;
        this.horizontalStandardMean = horizontalStandardMean;
        this.verticalSquareRoot = verticalSquareRoot;
        this.horizontalSquareRoot = horizontalSquareRoot;
        this.verticalMean = verticalMean;
        this.horizontalMean = horizontalMean;
    }
}
/** @private */
class PolarArc {
    constructor(startAngle, endAngle, innerRadius, radius, currentXPosition) {
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.innerRadius = innerRadius;
        this.radius = radius;
        this.currentXPosition = currentXPosition;
    }
}
/** @private */
function createTooltip(id, text, top, left, fontSize) {
    let tooltip = getElement(id);
    let style = 'top:' + top.toString() + 'px;' +
        'left:' + left.toString() + 'px;' +
        'color:black !important' +
        'background:#FFFFFF !important' + ';' +
        'position:absolute;border:1px solid #707070;font-size:' + fontSize + ';border-radius:2px;';
    if (!tooltip) {
        tooltip = createElement('div', {
            id: id, innerHTML: '&nbsp;' + text + '&nbsp;', styles: style
        });
        document.body.appendChild(tooltip);
    }
    else {
        tooltip.setAttribute('innerHTML', '&nbsp;' + text + '&nbsp;');
        tooltip.setAttribute('styles', style);
    }
}
/** @private */
function createZoomingLabels(chart, axis, parent, index, isVertical, rect) {
    let margin = 5;
    let opposedPosition = axis.opposedPosition;
    let anchor = isVertical ? 'start' : 'auto';
    let size;
    let chartRect = chart.availableSize.width;
    let x;
    let y;
    let rx = 3;
    let arrowLocation;
    let direction;
    for (let i = 0; i < 2; i++) {
        size = measureText(i ? axis.endLabel : axis.startLabel, axis.labelStyle);
        if (isVertical) {
            arrowLocation = i ? new ChartLocation(rect.x, rect.y + rx) :
                new ChartLocation(axis.rect.x, (rect.y + rect.height - rx));
            x = (rect.x + (opposedPosition ? (rect.width + margin) : -(size.width + margin + margin)));
            y = (rect.y + (i ? 0 : rect.height - size.height - margin));
            x += (x < 0 || ((chartRect) < (x + size.width + margin))) ? (opposedPosition ? -(size.width / 2) : size.width / 2) : 0;
            direction = findDirection(rx, rx, new Rect(x, y, size.width + margin, size.height + margin), arrowLocation, margin, false, false, !opposedPosition, arrowLocation.x, arrowLocation.y + (i ? -rx : rx));
        }
        else {
            arrowLocation = i ? new ChartLocation((rect.x + rect.width - rx), (rect.y + rect.height)) :
                new ChartLocation(rect.x + rx, (rect.y + rect.height));
            x = (rect.x + (i ? (rect.width - size.width - margin) : 0));
            y = (opposedPosition ? (rect.y - size.height - 10) : (rect.y + rect.height + margin));
            direction = findDirection(rx, rx, new Rect(x, y, size.width + margin, size.height + margin), arrowLocation, margin, opposedPosition, !opposedPosition, false, arrowLocation.x + (i ? rx : -rx), arrowLocation.y);
        }
        x = x + (margin / 2);
        y = y + (3 * (size.height / 4)) + (margin / 2);
        parent.appendChild(chart.renderer.drawPath(new PathOption(chart.element.id + '_Zoom_' + index + '_AxisLabel_Shape_' + i, chart.themeStyle.crosshairFill, 2, chart.themeStyle.crosshairFill, 1, null, direction)));
        textElement(new TextOption(chart.element.id + '_Zoom_' + index + '_AxisLabel_' + i, x, y, anchor, i ? axis.endLabel : axis.startLabel), { color: chart.themeStyle.crosshairLabel, fontFamily: 'Segoe UI', fontWeight: 'Regular', size: '11px' }, chart.themeStyle.crosshairLabel, parent);
    }
    return parent;
}
//Within bounds
/** @private */
function withInBounds(x, y, bounds, width = 0, height = 0) {
    return (x >= bounds.x - width && x <= bounds.x + bounds.width + width && y >= bounds.y - height
        && y <= bounds.y + bounds.height + height);
}
/** @private */
function getValueXByPoint(value, size, axis) {
    let actualValue = !axis.isInversed ? value / size : (1 - (value / size));
    return actualValue * (axis.visibleRange.delta) + axis.visibleRange.min;
}
/** @private */
function getValueYByPoint(value, size, axis) {
    let actualValue = axis.isInversed ? value / size : (1 - (value / size));
    return actualValue * (axis.visibleRange.delta) + axis.visibleRange.min;
}
/** @private */
function findClipRect(series) {
    let rect = series.clipRect;
    if (series.chart.requireInvertedAxis) {
        rect.x = series.yAxis.rect.x;
        rect.y = series.xAxis.rect.y;
        rect.width = series.yAxis.rect.width;
        rect.height = series.xAxis.rect.height;
    }
    else {
        rect.x = series.xAxis.rect.x;
        rect.y = series.yAxis.rect.y;
        rect.width = series.xAxis.rect.width;
        rect.height = series.yAxis.rect.height;
    }
}
/** @private */
function firstToLowerCase(str) {
    return str.substr(0, 1).toLowerCase() + str.substr(1);
}
/** @private */
function getMinPointsDelta(axis, seriesCollection) {
    let minDelta = Number.MAX_VALUE;
    let xValues;
    let minVal;
    seriesCollection.forEach((series, index) => {
        xValues = [];
        if (series.visible &&
            (axis.name === series.xAxisName || (axis.name === 'primaryXAxis' && series.xAxisName === null)
                || (axis.name === series.chart.primaryXAxis.name && !series.xAxisName))) {
            xValues = series.points.map((point, index) => {
                return point.xValue;
            });
            xValues.sort((first, second) => { return first - second; });
            if (xValues.length === 1) {
                minVal = xValues[0] - ((!isNullOrUndefined(series.xMin) && series.xAxis.valueType !== 'DateTime') ?
                    series.xMin : axis.visibleRange.min);
                if (minVal !== 0) {
                    minDelta = Math.min(minDelta, minVal);
                }
            }
            else {
                xValues.forEach((value, index, xValues) => {
                    if (index > 0 && value) {
                        minVal = value - xValues[index - 1];
                        if (minVal !== 0) {
                            minDelta = Math.min(minDelta, minVal);
                        }
                    }
                });
            }
        }
    });
    if (minDelta === Number.MAX_VALUE) {
        minDelta = 1;
    }
    return minDelta;
}
/** @private */
function getAnimationFunction(effect) {
    let functionName;
    switch (effect) {
        case 'Linear':
            functionName = linear;
            break;
    }
    return functionName;
}
/**
 * Animation Effect Calculation Started Here
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
 * Animation Effect Calculation End
 * @private
 */
function markerAnimate(element, delay, duration, series, pointIndex, point, isLabel) {
    let centerX = point.x;
    let centerY = point.y;
    let height = 0;
    element.style.visibility = 'hidden';
    new Animation({}).animate(element, {
        duration: duration,
        delay: delay,
        progress: (args) => {
            if (args.timeStamp > args.delay) {
                args.element.style.visibility = 'visible';
                height = ((args.timeStamp - args.delay) / args.duration);
                element.setAttribute('transform', 'translate(' + centerX
                    + ' ' + centerY + ') scale(' + height + ') translate(' + (-centerX) + ' ' + (-centerY) + ')');
            }
        },
        end: (model) => {
            element.style.visibility = '';
            element.removeAttribute('transform');
            if ((series.type === 'Scatter' || series.type === 'Bubble') && !isLabel && (pointIndex === series.points.length - 1)) {
                series.chart.trigger('animationComplete', { series: series });
            }
        }
    });
}
/**
 * Animation for template
 * @private
 */
function templateAnimate(element, delay, duration, name, isRemove) {
    new Animation({}).animate(element, {
        duration: duration,
        delay: delay,
        name: name,
        progress: (args) => {
            args.element.style.visibility = 'visible';
        },
        end: (args) => {
            if (isRemove) {
                remove(args.element);
            }
            else {
                args.element.style.visibility = 'visible';
            }
        },
    });
}
/** @private */
function drawSymbol(location, shape, size, url, options, label) {
    let renderer = new SvgRenderer('');
    let temp = calculateShapes(location, size, shape, options, url);
    let htmlObject = renderer['draw' + temp.functionName](temp.renderOption);
    htmlObject.setAttribute('aria-label', label);
    return htmlObject;
}
/** @private */
function calculateShapes(location, size, shape, options, url) {
    let path;
    let functionName = 'Path';
    let width = size.width;
    let height = size.height;
    let locX = location.x;
    let locY = location.y;
    let x = location.x + (-width / 2);
    let y = location.y + (-height / 2);
    switch (shape) {
        case 'Circle':
        case 'Bubble':
            functionName = 'Ellipse';
            merge(options, { 'rx': width / 2, 'ry': height / 2, 'cx': locX, 'cy': locY });
            break;
        case 'Cross':
            path = 'M' + ' ' + x + ' ' + locY + ' ' + 'L' + ' ' + (locX + (width / 2)) + ' ' + locY + ' ' +
                'M' + ' ' + locX + ' ' + (locY + (height / 2)) + ' ' + 'L' + ' ' + locX + ' ' +
                (locY + (-height / 2));
            merge(options, { 'd': path });
            break;
        case 'HorizontalLine':
            path = 'M' + ' ' + x + ' ' + locY + ' ' + 'L' + ' ' + (locX + (width / 2)) + ' ' + locY;
            merge(options, { 'd': path });
            break;
        case 'VerticalLine':
            path = 'M' + ' ' + locX + ' ' + (locY + (height / 2)) + ' ' + 'L' + ' ' + locX + ' ' + (locY + (-height / 2));
            merge(options, { 'd': path });
            break;
        case 'Diamond':
            path = 'M' + ' ' + x + ' ' + locY + ' ' +
                'L' + ' ' + locX + ' ' + (locY + (-height / 2)) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + locY + ' ' +
                'L' + ' ' + locX + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + x + ' ' + locY + ' z';
            merge(options, { 'd': path });
            break;
        case 'Rectangle':
        case 'Hilo':
        case 'HiloOpenClose':
        case 'Candle':
        case 'Waterfall':
        case 'BoxAndWhisker':
        case 'StepArea':
            path = 'M' + ' ' + x + ' ' + (locY + (-height / 2)) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + (locY + (-height / 2)) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + x + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + x + ' ' + (locY + (-height / 2)) + ' z';
            merge(options, { 'd': path });
            break;
        case 'Pyramid':
        case 'Triangle':
            path = 'M' + ' ' + x + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + locX + ' ' + (locY + (-height / 2)) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + x + ' ' + (locY + (height / 2)) + ' z';
            merge(options, { 'd': path });
            break;
        case 'Funnel':
        case 'InvertedTriangle':
            path = 'M' + ' ' + (locX + (width / 2)) + ' ' + (locY - (height / 2)) + ' ' +
                'L' + ' ' + locX + ' ' + (locY + (height / 2)) + ' ' +
                'L' + ' ' + (locX - (width / 2)) + ' ' + (locY - (height / 2)) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + (locY - (height / 2)) + ' z';
            merge(options, { 'd': path });
            break;
        case 'Pentagon':
            let eq = 72;
            let xValue;
            let yValue;
            for (let i = 0; i <= 5; i++) {
                xValue = (width / 2) * Math.cos((Math.PI / 180) * (i * eq));
                yValue = (height / 2) * Math.sin((Math.PI / 180) * (i * eq));
                if (i === 0) {
                    path = 'M' + ' ' + (locX + xValue) + ' ' + (locY + yValue) + ' ';
                }
                else {
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
    options = calculateLegendShapes(location, new Size(width, height), shape, options).renderOption;
    return { renderOption: options, functionName: functionName };
}
/** @private */
function getRectLocation(startLocation, endLocation, outerRect) {
    let x;
    let y;
    x = (endLocation.x < outerRect.x) ? outerRect.x :
        (endLocation.x > (outerRect.x + outerRect.width)) ? outerRect.x + outerRect.width : endLocation.x;
    y = (endLocation.y < outerRect.y) ? outerRect.y :
        (endLocation.y > (outerRect.y + outerRect.height)) ? outerRect.y + outerRect.height : endLocation.y;
    return new Rect((x > startLocation.x ? startLocation.x : x), (y > startLocation.y ? startLocation.y : y), Math.abs(x - startLocation.x), Math.abs(y - startLocation.y));
}
/** @private */
function minMax(value, min, max) {
    return value > max ? max : (value < min ? min : value);
}
/** @private */
function getElement(id) {
    return document.getElementById(id);
}
/** @private */
function getTemplateFunction(template) {
    let templateFn = null;
    try {
        if (document.querySelectorAll(template).length) {
            templateFn = compile(document.querySelector(template).innerHTML.trim());
        }
    }
    catch (e) {
        templateFn = compile(template);
    }
    return templateFn;
}
/** @private */
function createTemplate(childElement, pointIndex, content, chart, point, series) {
    let templateFn;
    let templateElement;
    templateFn = getTemplateFunction(content);
    try {
        if (templateFn && templateFn({ chart: chart, series: series, point: point }).length) {
            templateElement = templateFn({ chart: chart, series: series, point: point });
            while (templateElement.length > 0) {
                childElement.appendChild(templateElement[0]);
            }
        }
    }
    catch (e) {
        return childElement;
    }
    return childElement;
}
/** @private */
function getFontStyle(font) {
    let style = '';
    style = 'font-size:' + font.size +
        '; font-style:' + font.fontStyle + '; font-weight:' + font.fontWeight +
        '; font-family:' + font.fontFamily + ';opacity:' + font.opacity +
        '; color:' + font.color + ';';
    return style;
}
/** @private */
function measureElementRect(element) {
    let bounds;
    document.body.appendChild(element);
    bounds = element.getBoundingClientRect();
    removeElement(element.id);
    return bounds;
}
/** @private */
function findlElement(elements, id) {
    let element;
    for (let i = 0, length = elements.length; i < length; i++) {
        if (elements[i].id.indexOf(id) > -1) {
            element = elements[i];
            continue;
        }
    }
    return element;
}
/** @private */
function getPoint(x, y, xAxis, yAxis, isInverted, series) {
    x = ((xAxis.valueType === 'Logarithmic') ? logBase(((x > 1) ? x : 1), xAxis.logBase) : x);
    y = ((yAxis.valueType === 'Logarithmic') ? logBase(((y > 1) ? y : 1), yAxis.logBase) : y);
    x = valueToCoefficient(x, xAxis);
    y = valueToCoefficient(y, yAxis);
    let xLength = (isInverted ? xAxis.rect.height : xAxis.rect.width);
    let yLength = (isInverted ? yAxis.rect.width : yAxis.rect.height);
    let locationX = isInverted ? y * (yLength) : x * (xLength);
    let locationY = isInverted ? (1 - x) * (xLength) : (1 - y) * (yLength);
    return new ChartLocation(locationX, locationY);
}
/** @private */
function appendElement(child, parent) {
    if (child && child.hasChildNodes() && parent) {
        parent.appendChild(child);
    }
    else {
        return null;
    }
}
/** @private */
function getDraggedRectLocation(x1, y1, x2, y2, outerRect) {
    let width = Math.abs(x1 - x2);
    let height = Math.abs(y1 - y2);
    let x = Math.max(checkBounds(Math.min(x1, x2), width, outerRect.x, outerRect.width), outerRect.x);
    let y = Math.max(checkBounds(Math.min(y1, y2), height, outerRect.y, outerRect.height), outerRect.y);
    return new Rect(x, y, Math.min(width, outerRect.width), Math.min(height, outerRect.height));
}
/** @private */
function checkBounds(start, size, min, max) {
    if (start < min) {
        start = min;
    }
    else if ((start + size) > (max + min)) {
        start = (max + min) - size;
    }
    return start;
}
/** @private */
function getLabelText(currentPoint, series, chart) {
    let labelFormat = series.yAxis.labelFormat;
    let text = [];
    let customLabelFormat = labelFormat.match('{value}') !== null;
    switch (series.seriesType) {
        case 'XY':
            text.push(currentPoint.text || currentPoint.yValue.toString());
            break;
        case 'HighLow':
            text.push(currentPoint.text || Math.max(currentPoint.high, currentPoint.low).toString());
            text.push(currentPoint.text || Math.min(currentPoint.high, currentPoint.low).toString());
            break;
        case 'HighLowOpenClose':
            text.push(currentPoint.text || Math.max(currentPoint.high, currentPoint.low).toString());
            text.push(currentPoint.text || Math.min(currentPoint.high, currentPoint.low).toString());
            text.push(currentPoint.text || Math.max(currentPoint.open, currentPoint.close).toString());
            text.push(currentPoint.text || Math.min(currentPoint.open, currentPoint.close).toString());
            break;
        case 'BoxPlot':
            text.push(currentPoint.text || currentPoint.median.toString());
            text.push(currentPoint.text || currentPoint.maximum.toString());
            text.push(currentPoint.text || currentPoint.minimum.toString());
            text.push(currentPoint.text || currentPoint.upperQuartile.toString());
            text.push(currentPoint.text || currentPoint.lowerQuartile.toString());
            for (let liers of currentPoint.outliers) {
                text.push(currentPoint.text || liers.toString());
            }
            break;
    }
    if (labelFormat && !currentPoint.text) {
        for (let i = 0; i < text.length; i++) {
            text[i] = customLabelFormat ? labelFormat.replace('{value}', series.yAxis.format(parseFloat(text[i]))) :
                series.yAxis.format(parseFloat(text[i]));
        }
    }
    return text;
}
/** @private */
function stopTimer(timer) {
    window.clearInterval(timer);
}
/** @private */
function isCollide(rect, collections, clipRect) {
    let isCollide;
    let currentRect = new Rect(rect.x + clipRect.x, rect.y + clipRect.y, rect.width, rect.height);
    isCollide = collections.some((rect) => {
        return (currentRect.x < rect.x + rect.width && currentRect.x + currentRect.width > rect.x &&
            currentRect.y < rect.y + rect.height && currentRect.height + currentRect.y > rect.y);
    });
    return isCollide;
}
/** @private */
function isOverlap(currentRect, rect) {
    return (currentRect.x < rect.x + rect.width && currentRect.x + currentRect.width > rect.x &&
        currentRect.y < rect.y + rect.height && currentRect.height + currentRect.y > rect.y);
}
/** @private */
function containsRect(currentRect, rect) {
    return (currentRect.x <= rect.x && currentRect.x + currentRect.width >= rect.x + rect.width &&
        currentRect.y <= rect.y && currentRect.height + currentRect.y >= rect.y + rect.height);
}
/** @private */
function calculateRect(location, textSize, margin) {
    return new Rect((location.x - (textSize.width / 2) - margin.left), (location.y - (textSize.height / 2) - margin.top), textSize.width + margin.left + margin.right, textSize.height + margin.top + margin.bottom);
}
/** @private */
function convertToHexCode(value) {
    return '#' + componentToHex(value.r) + componentToHex(value.g) + componentToHex(value.b);
}
/** @private */
function componentToHex(value) {
    let hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
/** @private */
function convertHexToColor(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? new ColorValue(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)) :
        new ColorValue(255, 255, 255);
}
/** @private */
function colorNameToHex(color) {
    let element;
    color = color === 'transparent' ? 'white' : color;
    element = document.getElementById('chartmeasuretext');
    element.style.color = color;
    color = window.getComputedStyle(element).color;
    let exp = /^(rgb|hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/;
    let isRGBValue = exp.exec(color);
    return convertToHexCode(new ColorValue(parseInt(isRGBValue[3], 10), parseInt(isRGBValue[4], 10), parseInt(isRGBValue[5], 10)));
}
/** @private */
function getSaturationColor(color, factor) {
    color = colorNameToHex(color);
    color = color.replace(/[^0-9a-f]/gi, '');
    if (color.length < 6) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    factor = factor || 0;
    // convert to decimal and change luminosity
    let rgb = '#';
    let colorCode;
    for (let i = 0; i < 3; i++) {
        colorCode = parseInt(color.substr(i * 2, 2), 16);
        colorCode = Math.round(Math.min(Math.max(0, colorCode + (colorCode * factor)), 255));
        rgb += ('00' + colorCode.toString(16)).substr(colorCode.toString(16).length);
    }
    return rgb;
}
/** @private */
function getMedian(values) {
    let half = Math.floor(values.length / 2);
    return values.length % 2 ? values[half] : ((values[half - 1] + values[half]) / 2.0);
}
/** @private */
// tslint:disable-next-line:max-func-body-length
function calculateLegendShapes(location, size, shape, options) {
    let padding = 10;
    let path = '';
    let height = size.height;
    let width = size.width;
    let locX = location.x;
    let locY = location.y;
    switch (shape) {
        case 'MultiColoredLine':
        case 'Line':
            path = 'M' + ' ' + (locX + (-width / 2)) + ' ' + (locY) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + (locY);
            merge(options, { 'd': path });
            break;
        case 'StepLine':
            options.fill = 'transparent';
            path = 'M' + ' ' + (locX + (-width / 2) - (padding / 4)) + ' ' + (locY + (height / 2)) + ' ' + 'L' + ' ' + (locX +
                (-width / 2) + (width / 10)) + ' ' + (locY + (height / 2)) + ' ' + 'L' + ' ' + (locX + (-width / 2) + (width / 10))
                + ' ' + (locY) + ' ' + 'L' + ' ' + (locX + (-width / 10)) + ' ' + (locY) + ' ' + 'L' + ' ' + (locX + (-width / 10))
                + ' ' + (locY + (height / 2)) + ' ' + 'L' + ' ' + (locX + (width / 5)) + ' ' + (locY + (height / 2)) + ' ' + 'L' +
                ' ' + (locX + (width / 5)) + ' ' + (locY + (-height / 2)) + ' ' + 'L' + ' ' + (locX + (width / 2)) + ' ' + (locY +
                (-height / 2)) + 'L' + ' ' + (locX + (width / 2)) + ' ' + (locY + (height / 2)) + ' ' + 'L' + '' + (locX + (width / 2)
                + (padding / 4)) + ' ' + (locY + (height / 2));
            merge(options, { 'd': path });
            break;
        case 'RightArrow':
            let space = 2;
            path = 'M' + ' ' + (locX + (-width / 2)) + ' ' + (locY - (height / 2)) + ' ' +
                'L' + ' ' + (locX + (width / 2)) + ' ' + (locY) + ' ' + 'L' + ' ' +
                (locX + (-width / 2)) + ' ' + (locY + (height / 2)) + ' L' + ' ' + (locX + (-width / 2)) + ' ' +
                (locY + (height / 2) - space) + ' ' + 'L' + ' ' + (locX + (width / 2) - (2 * space)) + ' ' + (locY) +
                ' L' + (locX + (-width / 2)) + ' ' + (locY - (height / 2) + space) + ' Z';
            merge(options, { 'd': path });
            break;
        case 'LeftArrow':
            options.fill = options.stroke;
            options.stroke = 'transparent';
            space = 2;
            path = 'M' + ' ' + (locX + (width / 2)) + ' ' + (locY - (height / 2)) + ' ' +
                'L' + ' ' + (locX + (-width / 2)) + ' ' + (locY) + ' ' + 'L' + ' ' +
                (locX + (width / 2)) + ' ' + (locY + (height / 2)) + ' ' + 'L' + ' ' +
                (locX + (width / 2)) + ' ' + (locY + (height / 2) - space) + ' L' + ' ' + (locX + (-width / 2) + (2 * space))
                + ' ' + (locY) + ' L' + (locX + (width / 2)) + ' ' + (locY - (height / 2) + space) + ' Z';
            merge(options, { 'd': path });
            break;
        case 'Column':
        case 'StackingColumn':
        case 'StackingColumn100':
        case 'RangeColumn':
            path = 'M' + ' ' + (locX - 3 * (width / 5)) + ' ' + (locY - (height / 5)) + ' ' + 'L' + ' ' +
                (locX + 3 * (-width / 10)) + ' ' + (locY - (height / 5)) + ' ' + 'L' + ' ' +
                (locX + 3 * (-width / 10)) + ' ' + (locY + (height / 2)) + ' ' + 'L' + ' ' + (locX - 3 *
                (width / 5)) + ' ' + (locY + (height / 2)) + ' ' + 'Z' + ' ' + 'M' + ' ' +
                (locX + (-width / 10) - (width / 20)) + ' ' + (locY - (height / 4) - (padding / 2))
                + ' ' + 'L' + ' ' + (locX + (width / 10) + (width / 20)) + ' ' + (locY - (height / 4) -
                (padding / 2)) + ' ' + 'L' + ' ' + (locX + (width / 10) + (width / 20)) + ' ' + (locY
                + (height / 2)) + ' ' + 'L' + ' ' + (locX + (-width / 10) - (width / 20)) + ' ' + (locY +
                (height / 2)) + ' ' + 'Z' + ' ' + 'M' + ' ' + (locX + 3 * (width / 10)) + ' ' + (locY) + ' ' +
                'L' + ' ' + (locX + 3 * (width / 5)) + ' ' + (locY) + ' ' + 'L' + ' '
                + (locX + 3 * (width / 5)) + ' ' + (locY + (height / 2)) + ' ' + 'L' + ' '
                + (locX + 3 * (width / 10)) + ' ' + (locY + (height / 2)) + ' ' + 'Z';
            merge(options, { 'd': path });
            break;
        case 'Bar':
        case 'StackingBar':
        case 'StackingBar100':
            path = 'M' + ' ' + (locX + (-width / 2) + (-padding / 4)) + ' ' + (locY - 3 * (height / 5)) + ' '
                + 'L' + ' ' + (locX + 3 * (width / 10)) + ' ' + (locY - 3 * (height / 5)) + ' ' + 'L' + ' ' +
                (locX + 3 * (width / 10)) + ' ' + (locY - 3 * (height / 10)) + ' ' + 'L' + ' ' +
                (locX - (width / 2) + (-padding / 4)) + ' ' + (locY - 3 * (height / 10)) + ' ' + 'Z' + ' '
                + 'M' + ' ' + (locX + (-width / 2) + (-padding / 4)) + ' ' + (locY - (height / 5)
                + (padding / 20)) + ' ' + 'L' + ' ' + (locX + (width / 2) + (padding / 4)) + ' ' + (locY
                - (height / 5) + (padding / 20)) + ' ' + 'L' + ' ' + (locX + (width / 2) + (padding / 4))
                + ' ' + (locY + (height / 10) + (padding / 20)) + ' ' + 'L' + ' ' + (locX - (width / 2)
                + (-padding / 4)) + ' ' + (locY + (height / 10) + (padding / 20)) + ' ' + 'Z' + ' ' + 'M'
                + ' ' + (locX - (width / 2) + (-padding / 4)) + ' ' + (locY + (height / 5)
                + (padding / 10)) + ' ' + 'L' + ' ' + (locX + (-width / 4)) + ' ' + (locY + (height / 5)
                + (padding / 10)) + ' ' + 'L' + ' ' + (locX + (-width / 4)) + ' ' + (locY + (height / 2)
                + (padding / 10)) + ' ' + 'L' + ' ' + (locX - (width / 2) + (-padding / 4))
                + ' ' + (locY + (height / 2) + (padding / 10)) + ' ' + 'Z';
            merge(options, { 'd': path });
            break;
        case 'Spline':
            options.fill = 'transparent';
            path = 'M' + ' ' + (locX - (width / 2)) + ' ' + (locY + (height / 5)) + ' ' + 'Q' + ' '
                + locX + ' ' + (locY - height) + ' ' + locX + ' ' + (locY + (height / 5))
                + ' ' + 'M' + ' ' + locX + ' ' + (locY + (height / 5)) + ' ' + 'Q' + ' ' + (locX
                + (width / 2)) + ' ' + (locY + (height / 2)) + ' ' + (locX + (width / 2)) + ' '
                + (locY - (height / 2));
            merge(options, { 'd': path });
            break;
        case 'Area':
        case 'MultiColoredArea':
        case 'RangeArea':
        case 'StackingArea':
        case 'StackingArea100':
            path = 'M' + ' ' + (locX - (width / 2) - (padding / 4)) + ' ' + (locY + (height / 2))
                + ' ' + 'L' + ' ' + (locX + (-width / 4) + (-padding / 8)) + ' ' + (locY - (height / 2))
                + ' ' + 'L' + ' ' + (locX) + ' ' + (locY + (height / 4)) + ' ' + 'L' + ' ' + (locX
                + (width / 4) + (padding / 8)) + ' ' + (locY + (-height / 2) + (height / 4)) + ' '
                + 'L' + ' ' + (locX + (height / 2) + (padding / 4)) + ' ' + (locY + (height / 2)) + ' ' + 'Z';
            merge(options, { 'd': path });
            break;
        case 'SplineArea':
            path = 'M' + ' ' + (locX - (width / 2)) + ' ' + (locY + (height / 5)) + ' ' + 'Q' + ' ' + locX
                + ' ' + (locY - height) + ' ' + locX + ' ' + (locY + (height / 5)) + ' ' + 'Z' + ' ' + 'M'
                + ' ' + locX + ' ' + (locY + (height / 5)) + ' ' + 'Q' + ' ' + (locX + (width / 2)) + ' '
                + (locY + (height / 2)) + ' ' + (locX + (width / 2)) + ' '
                + (locY - (height / 2)) + ' ' + ' Z';
            merge(options, { 'd': path });
            break;
        case 'Pie':
        case 'Doughnut':
            options.stroke = 'transparent';
            let r = Math.min(height, width) / 2;
            path = getAccumulationLegend(locX, locY, r, height, width, shape);
            merge(options, { 'd': path });
            break;
    }
    return { renderOption: options };
}
/** @private */
function textTrim(maxWidth, text, font) {
    let label = text;
    let size = measureText(text, font).width;
    if (size > maxWidth) {
        let textLength = text.length;
        for (let i = textLength - 1; i >= 0; --i) {
            label = text.substring(0, i) + '...';
            size = measureText(label, font).width;
            if (size <= maxWidth) {
                return label;
            }
        }
    }
    return label;
}
/** @private */
function stringToNumber(value, containerSize) {
    if (value !== null && value !== undefined) {
        return value.indexOf('%') !== -1 ? (containerSize / 100) * parseInt(value, 10) : parseInt(value, 10);
    }
    return null;
}
/** @private */
function findDirection(rX, rY, rect, arrowLocation, arrowPadding, top, bottom, left, tipX, tipY, tipRadius) {
    let direction = '';
    let startX = rect.x;
    let startY = rect.y;
    let width = rect.x + rect.width;
    let height = rect.y + rect.height;
    tipRadius = tipRadius ? tipRadius : 0;
    if (top) {
        direction = direction.concat('M' + ' ' + (startX) + ' ' + (startY + rY) + ' Q ' + startX + ' '
            + startY + ' ' + (startX + rX) + ' ' + startY + ' ' +
            ' L' + ' ' + (width - rX) + ' ' + (startY) + ' Q ' + width + ' '
            + startY + ' ' + (width) + ' ' + (startY + rY));
        direction = direction.concat(' L' + ' ' + (width) + ' ' + (height - rY) + ' Q ' + width + ' '
            + (height) + ' ' + (width - rX) + ' ' + (height));
        if (arrowPadding !== 0) {
            direction = direction.concat(' L' + ' ' + (arrowLocation.x + arrowPadding / 2) + ' ' + (height));
            direction = direction.concat(' L' + ' ' + (tipX + tipRadius) + ' ' + (height + arrowPadding - tipRadius));
            direction += ' Q' + ' ' + (tipX) + ' ' + (height + arrowPadding) + ' ' + (tipX - tipRadius) +
                ' ' + (height + arrowPadding - tipRadius);
        }
        if ((arrowLocation.x - arrowPadding / 2) > startX) {
            direction = direction.concat(' L' + ' ' + (arrowLocation.x - arrowPadding / 2) + ' ' + height +
                ' L' + ' ' + (startX + rX) + ' ' + height + ' Q ' + startX + ' '
                + height + ' ' + (startX) + ' ' + (height - rY) + ' z');
        }
        else {
            if (arrowPadding === 0) {
                direction = direction.concat(' L' + ' ' + (startX + rX) + ' ' + height + ' Q ' + startX + ' '
                    + height + ' ' + (startX) + ' ' + (height - rY) + ' z');
            }
            else {
                direction = direction.concat(' L' + ' ' + (startX) + ' ' + (height + rY) + ' z');
            }
        }
    }
    else if (bottom) {
        direction = direction.concat('M' + ' ' + (startX) + ' ' + (startY + rY) + ' Q ' + startX + ' '
            + (startY) + ' ' + (startX + rX) + ' ' + (startY) + ' L' + ' ' + (arrowLocation.x - arrowPadding / 2) + ' ' + (startY));
        direction = direction.concat(' L' + ' ' + (tipX - tipRadius) + ' ' + (arrowLocation.y + tipRadius));
        direction += ' Q' + ' ' + (tipX) + ' ' + (arrowLocation.y) + ' ' + (tipX + tipRadius) + ' ' + (arrowLocation.y + tipRadius);
        direction = direction.concat(' L' + ' ' + (arrowLocation.x + arrowPadding / 2) + ' ' + (startY) + ' L' + ' '
            + (width - rX) + ' ' + (startY) + ' Q ' + (width) + ' ' + (startY) + ' ' + (width) + ' ' + (startY + rY));
        direction = direction.concat(' L' + ' ' + (width) + ' ' + (height - rY) + ' Q ' + (width) + ' '
            + (height) + ' ' + (width - rX) + ' ' + (height) +
            ' L' + ' ' + (startX + rX) + ' ' + (height) + ' Q ' + (startX) + ' '
            + (height) + ' ' + (startX) + ' ' + (height - rY) + ' z');
    }
    else if (left) {
        direction = direction.concat('M' + ' ' + (startX) + ' ' + (startY + rY) + ' Q ' + startX + ' '
            + (startY) + ' ' + (startX + rX) + ' ' + (startY));
        direction = direction.concat(' L' + ' ' + (width - rX) + ' ' + (startY) + ' Q ' + (width) + ' '
            + (startY) + ' ' + (width) + ' ' + (startY + rY) + ' L' + ' ' + (width) + ' ' + (arrowLocation.y - arrowPadding / 2));
        direction = direction.concat(' L' + ' ' + (width + arrowPadding - tipRadius) + ' ' + (tipY - tipRadius));
        direction += ' Q ' + (width + arrowPadding) + ' ' + (tipY) + ' ' + (width + arrowPadding - tipRadius) + ' ' + (tipY + tipRadius);
        direction = direction.concat(' L' + ' ' + (width) + ' ' + (arrowLocation.y + arrowPadding / 2) +
            ' L' + ' ' + (width) + ' ' + (height - rY) + ' Q ' + width + ' ' + (height) + ' ' + (width - rX) + ' ' + (height));
        direction = direction.concat(' L' + ' ' + (startX + rX) + ' ' + (height) + ' Q ' + startX + ' '
            + (height) + ' ' + (startX) + ' ' + (height - rY) + ' z');
    }
    else {
        direction = direction.concat('M' + ' ' + (startX + rX) + ' ' + (startY) + ' Q ' + (startX) + ' '
            + (startY) + ' ' + (startX) + ' ' + (startY + rY) + ' L' + ' ' + (startX) + ' ' + (arrowLocation.y - arrowPadding / 2));
        direction = direction.concat(' L' + ' ' + (startX - arrowPadding + tipRadius) + ' ' + (tipY - tipRadius));
        direction += ' Q ' + (startX - arrowPadding) + ' ' + (tipY) + ' ' + (startX - arrowPadding + tipRadius) + ' ' + (tipY + tipRadius);
        direction = direction.concat(' L' + ' ' + (startX) + ' ' + (arrowLocation.y + arrowPadding / 2) +
            ' L' + ' ' + (startX) + ' ' + (height - rY) + ' Q ' + startX + ' '
            + (height) + ' ' + (startX + rX) + ' ' + (height));
        direction = direction.concat(' L' + ' ' + (width - rX) + ' ' + (height) + ' Q ' + width + ' '
            + (height) + ' ' + (width) + ' ' + (height - rY) +
            ' L' + ' ' + (width) + ' ' + (startY + rY) + ' Q ' + width + ' '
            + (startY) + ' ' + (width - rX) + ' ' + (startY) + ' z');
    }
    return direction;
}
/** @private */
function textElement(options, font, color, parent, isMinus = false) {
    let renderOptions = {};
    let htmlObject;
    let tspanElement;
    let renderer = new SvgRenderer('');
    let text;
    let height;
    renderOptions = {
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
    text = typeof options.text === 'string' ? options.text : isMinus ? options.text[options.text.length - 1] : options.text[0];
    htmlObject = renderer.createText(renderOptions, text);
    if (typeof options.text !== 'string' && options.text.length > 1) {
        for (let i = 1, len = options.text.length; i < len; i++) {
            height = (measureText(options.text[i], font).height);
            tspanElement = renderer.createTSpan({
                'x': options.x, 'id': options.id,
                'y': (options.y) + ((isMinus) ? -(i * height) : (i * height))
            }, isMinus ? options.text[options.text.length - (i + 1)] : options.text[i]);
            htmlObject.appendChild(tspanElement);
        }
    }
    parent.appendChild(htmlObject);
    return htmlObject;
}
/**
 * Method to calculate the width and height of the chart
 */
function calculateSize(chart) {
    let containerWidth = chart.element.clientWidth;
    let containerHeight = chart.element.clientHeight;
    chart.availableSize = new Size(stringToNumber(chart.width, containerWidth) || containerWidth || 600, stringToNumber(chart.height, containerHeight) || containerHeight || 450);
}
function createSvg(chart) {
    chart.renderer = new SvgRenderer(chart.element.id);
    calculateSize(chart);
    chart.svgObject = chart.renderer.createSvg({
        id: chart.element.id + '_svg',
        width: chart.availableSize.width,
        height: chart.availableSize.height
    });
}
/**
 * To calculate chart title and height
 * @param title
 * @param style
 * @param width
 */
function getTitle(title, style, width) {
    let titleCollection = [];
    switch (style.textOverflow) {
        case 'Wrap':
            titleCollection = textWrap(title, width, style);
            break;
        case 'Trim':
            titleCollection.push(textTrim(width, title, style));
            break;
        default:
            titleCollection.push(title);
            break;
    }
    return titleCollection;
}
/**
 * Method to calculate x position of title
 */
function titlePositionX(chartSize, leftPadding, rightPadding, titleStyle) {
    let positionX;
    if (titleStyle.textAlignment === 'Near') {
        positionX = leftPadding;
    }
    else if (titleStyle.textAlignment === 'Center') {
        positionX = chartSize.width / 2;
    }
    else {
        positionX = chartSize.width - rightPadding;
    }
    return positionX;
}
/**
 * Method to find new text and element size based on textOverflow
 */
function textWrap(currentLabel, maximumWidth, font) {
    let textCollection = currentLabel.split(' ');
    let label = '';
    let labelCollection = [];
    let text;
    for (let i = 0, len = textCollection.length; i < len; i++) {
        text = textCollection[i];
        if (measureText(label.concat(text), font).width < maximumWidth) {
            label = label.concat((label === '' ? '' : ' ') + text);
        }
        else {
            if (label !== '') {
                labelCollection.push(textTrim(maximumWidth, label, font));
                label = text;
            }
            else {
                labelCollection.push(textTrim(maximumWidth, text, font));
                text = '';
            }
        }
        if (label && i === len - 1) {
            labelCollection.push(textTrim(maximumWidth, label, font));
        }
    }
    return labelCollection;
}
/** @private */
class CustomizeOption {
    constructor(id) {
        this.id = id;
    }
}
/** @private */
class StackValues {
    constructor(startValue, endValue) {
        this.startValues = startValue;
        this.endValues = endValue;
    }
}
/** @private */
class TextOption extends CustomizeOption {
    constructor(id, x, y, anchor, text, transform = '', baseLine) {
        super(id);
        this.transform = '';
        this.baseLine = 'auto';
        this.x = x;
        this.y = y;
        this.anchor = anchor;
        this.text = text;
        this.transform = transform;
        this.baseLine = baseLine;
    }
}
/** @private */
class PathOption extends CustomizeOption {
    constructor(id, fill, width, color, opacity, dashArray, d) {
        super(id);
        this.opacity = opacity;
        this.fill = fill;
        this.stroke = color;
        this['stroke-width'] = width;
        this['stroke-dasharray'] = dashArray;
        this.d = d;
    }
}
/** @private */
class RectOption extends PathOption {
    constructor(id, fill, border, opacity, rect, rx, ry, transform, dashArray) {
        super(id, fill, border.width, border.color, opacity, dashArray);
        this.y = rect.y;
        this.x = rect.x;
        this.height = rect.height;
        this.width = rect.width;
        this.rx = rx ? rx : 0;
        this.ry = ry ? ry : 0;
        this.transform = transform ? transform : '';
    }
}
/** @private */
class CircleOption extends PathOption {
    constructor(id, fill, border, opacity, cx, cy, r) {
        super(id, fill, border.width, border.color, opacity);
        this.cy = cy;
        this.cx = cx;
        this.r = r;
    }
}
/** @private */
class PolygonOption {
    constructor(id, points, fill) {
        this.id = id;
        this.points = points;
        this.fill = fill;
    }
}
/** @private */
class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
/** @private */
class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
/** @private */
class ChartLocation {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
/** @private */
class Thickness {
    constructor(left, right, top, bottom) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }
}
/** @private */
class ColorValue {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}
/** @private */
class PointData {
    constructor(point, series, index = 0) {
        this.point = point;
        this.series = series;
        this.lierIndex = index;
    }
}
/** @private */
class AccPointData {
    constructor(point, series, index = 0) {
        this.point = point;
        this.series = series;
    }
}
/** @private */
class ControlPoints {
    constructor(controlPoint1, controlPoint2) {
        this.controlPoint1 = controlPoint1;
        this.controlPoint2 = controlPoint2;
    }
}

/**
 * Numeric Range.
 * @private
 */
class DoubleRange {
    //private mIsEmpty: boolean;
    /** @private */
    get start() {
        return this.mStart;
    }
    /** @private */
    get end() {
        return this.mEnd;
    }
    /*
      get isEmpty(): boolean {
         return this.mIsEmpty;
     }*/
    /** @private */
    get delta() {
        return (this.mEnd - this.mStart);
    }
    /** @private */
    get median() {
        return this.mStart + (this.mEnd - this.mStart) / 2;
    }
    constructor(start, end) {
        /*
          if (!isNaN(start) && !isNaN(end)) {
           this.mIsEmpty = true;
          } else {
              this.mIsEmpty = false;
          }*/
        if (start < end) {
            this.mStart = start;
            this.mEnd = end;
        }
        else {
            this.mStart = end;
            this.mEnd = start;
        }
    }
}

/**
 * Numeric module is used to render numeric axis.
 */
class Double {
    /**
     * Constructor for the dateTime module.
     * @private
     */
    constructor(chart) {
        this.chart = chart;
    }
    /**
     * Numeric Nice Interval for the axis.
     * @private
     */
    calculateNumericNiceInterval(axis, delta, size) {
        let actualDesiredIntervalsCount = axis.getActualDesiredIntervalsCount(size);
        let niceInterval = delta / actualDesiredIntervalsCount;
        if (axis.desiredIntervals != null) {
            return niceInterval;
        }
        let minInterval = Math.pow(10, Math.floor(logBase(niceInterval, 10)));
        for (let interval of axis.intervalDivs) {
            let currentInterval = minInterval * interval;
            if (actualDesiredIntervalsCount < (delta / currentInterval)) {
                break;
            }
            niceInterval = currentInterval;
        }
        return niceInterval;
    }
    /**
     * Actual Range for the axis.
     * @private
     */
    getActualRange(axis, size) {
        this.initializeDoubleRange(axis);
        axis.actualRange.interval = axis.interval || this.calculateNumericNiceInterval(axis, axis.doubleRange.delta, size);
        axis.actualRange.min = axis.doubleRange.start;
        axis.actualRange.max = axis.doubleRange.end;
    }
    /**
     * Range for the axis.
     * @private
     */
    initializeDoubleRange(axis) {
        //Axis Min
        if (axis.minimum !== null) {
            this.min = axis.minimum;
        }
        else if (this.min === null || this.min === Number.POSITIVE_INFINITY) {
            this.min = 0;
        }
        // Axis Max
        if (axis.maximum !== null) {
            this.max = axis.maximum;
        }
        else if (this.max === null || this.max === Number.NEGATIVE_INFINITY) {
            this.max = 5;
        }
        if (this.min === this.max) {
            this.max = axis.valueType.indexOf('Category') > -1 ? this.max : this.min + 1;
        }
        axis.doubleRange = new DoubleRange(this.min, this.max);
        axis.actualRange = {};
    }
    /**
     * The function to calculate the range and labels for the axis.
     * @return {void}
     * @private
     */
    calculateRangeAndInterval(size, axis) {
        this.calculateRange(axis, size);
        this.getActualRange(axis, size);
        this.applyRangePadding(axis, size);
        this.calculateVisibleLabels(axis, this.chart);
    }
    /**
     * Calculate Range for the axis.
     * @private
     */
    calculateRange(axis, size) {
        /*! Generate axis range */
        this.min = null;
        this.max = null;
        if (!axis.setRange()) {
            for (let series of axis.series) {
                if (!series.visible) {
                    continue;
                }
                this.paddingInterval = 0;
                if ((series.type.indexOf('Column') > -1 && axis.orientation === 'Horizontal')
                    || (series.type.indexOf('Bar') > -1 && axis.orientation === 'Vertical')) {
                    if ((series.xAxis.valueType === 'Double' || series.xAxis.valueType === 'DateTime')
                        && series.xAxis.rangePadding === 'Auto') {
                        this.paddingInterval = getMinPointsDelta(series.xAxis, axis.series) / 2;
                    }
                }
                //For xRange
                if (axis.orientation === 'Horizontal') {
                    if (this.chart.requireInvertedAxis) {
                        this.findMinMax(series.yMin, series.yMax);
                    }
                    else {
                        this.findMinMax(series.xMin - this.paddingInterval, series.xMax + this.paddingInterval);
                    }
                }
                // For yRange
                if (axis.orientation === 'Vertical') {
                    if (this.chart.requireInvertedAxis) {
                        this.findMinMax(series.xMin - this.paddingInterval, series.xMax + this.paddingInterval);
                    }
                    else {
                        this.findMinMax(series.yMin, series.yMax);
                    }
                }
            }
        }
    }
    findMinMax(min, max) {
        if (this.min === null || this.min > min) {
            this.min = min;
        }
        if (this.max === null || this.max < max) {
            this.max = max;
        }
    }
    /**
     * Apply padding for the range.
     * @private
     */
    applyRangePadding(axis, size) {
        let start = axis.actualRange.min;
        let end = axis.actualRange.max;
        if (!axis.setRange()) {
            let interval = axis.actualRange.interval;
            let padding = axis.getRangePadding(this.chart);
            if (padding === 'Additional' || padding === 'Round') {
                this.findAdditional(axis, start, end, interval);
            }
            else if (padding === 'Normal') {
                this.findNormal(axis, start, end, interval, size);
            }
            else {
                this.updateActualRange(axis, start, end, interval);
            }
        }
        axis.actualRange.delta = axis.actualRange.max - axis.actualRange.min;
        this.calculateVisibleRange(size, axis);
    }
    updateActualRange(axis, minimum, maximum, interval) {
        axis.actualRange.min = axis.minimum != null ? axis.minimum : minimum;
        axis.actualRange.max = axis.maximum != null ? axis.maximum : maximum;
        axis.actualRange.interval = axis.interval != null ? axis.interval : interval;
    }
    findAdditional(axis, start, end, interval) {
        let minimum;
        let maximum;
        minimum = Math.floor(start / interval) * interval;
        maximum = Math.ceil(end / interval) * interval;
        if (axis.rangePadding === 'Additional') {
            minimum -= interval;
            maximum += interval;
        }
        this.updateActualRange(axis, minimum, maximum, interval);
    }
    findNormal(axis, start, end, interval, size) {
        let remaining;
        let minimum;
        let maximum;
        let startValue = start;
        if (start < 0) {
            startValue = 0;
            minimum = start + (start / 20);
            remaining = interval + (minimum % interval);
            if ((0.365 * interval) >= remaining) {
                minimum -= interval;
            }
            if (minimum % interval < 0) {
                minimum = (minimum - interval) - (minimum % interval);
            }
        }
        else {
            minimum = start < ((5.0 / 6.0) * end) ? 0 : (start - (end - start) / 2);
            if (minimum % interval > 0) {
                minimum -= (minimum % interval);
            }
        }
        maximum = (end > 0) ? (end + (end - startValue) / 20) : (end - (end - startValue) / 20);
        remaining = interval - (maximum % interval);
        if ((0.365 * interval) >= remaining) {
            maximum += interval;
        }
        if (maximum % interval > 0) {
            maximum = (maximum + interval) - (maximum % interval);
        }
        axis.doubleRange = new DoubleRange(minimum, maximum);
        if (minimum === 0) {
            interval = this.calculateNumericNiceInterval(axis, axis.doubleRange.delta, size);
            maximum = Math.ceil(maximum / interval) * interval;
        }
        this.updateActualRange(axis, minimum, maximum, interval);
    }
    /**
     * Calculate visible range for axis.
     * @private
     */
    calculateVisibleRange(size, axis) {
        axis.visibleRange = {
            max: axis.actualRange.max, min: axis.actualRange.min,
            delta: axis.actualRange.delta, interval: axis.actualRange.interval
        };
        if (axis.zoomFactor < 1 || axis.zoomPosition > 0) {
            axis.calculateVisibleRange(size);
            axis.visibleRange.interval = (axis.enableAutoIntervalOnZooming && axis.valueType !== 'Category') ?
                this.calculateNumericNiceInterval(axis, axis.doubleRange.delta, size)
                : axis.visibleRange.interval;
        }
        axis.triggerRangeRender(this.chart, axis.visibleRange.min, axis.visibleRange.max, axis.visibleRange.interval);
    }
    /**
     * Calculate label for the axis.
     * @private
     */
    calculateVisibleLabels(axis, chart) {
        /*! Generate axis labels */
        axis.visibleLabels = [];
        let tempInterval = axis.visibleRange.min;
        if (axis.zoomFactor < 1 || axis.zoomPosition > 0 || this.paddingInterval) {
            tempInterval = axis.visibleRange.min - (axis.visibleRange.min % axis.visibleRange.interval);
        }
        let format = this.getFormat(axis);
        let isCustom = format.match('{value}') !== null;
        axis.format = chart.intl.getNumberFormat({
            format: isCustom ? '' : format,
            useGrouping: chart.useGroupingSeparator
        });
        axis.startLabel = axis.format(axis.visibleRange.min);
        axis.endLabel = axis.format(axis.visibleRange.max);
        for (; tempInterval <= axis.visibleRange.max; tempInterval += axis.visibleRange.interval) {
            if (withIn(tempInterval, axis.visibleRange)) {
                axis.triggerLabelRender(chart, tempInterval, this.formatValue(axis, isCustom, format, tempInterval), axis.labelStyle);
            }
        }
        axis.getMaxLabelWidth(chart);
    }
    /**
     * Format of the axis label.
     * @private
     */
    getFormat(axis) {
        if (axis.labelFormat) {
            return axis.labelFormat;
        }
        return axis.isStack100 ? '{value}%' : '';
    }
    /**
     * Formatted the axis label.
     * @private
     */
    formatValue(axis, isCustom, format, tempInterval) {
        return isCustom ? format.replace('{value}', axis.format(tempInterval))
            : axis.format(tempInterval);
    }
}

/**
 * Specifies the chart constant value
 */
/** @private */
const loaded = 'loaded';
/** @private */
const load = 'load';
/** @private */
const animationComplete = 'animationComplete';
/** @private */
const legendRender = 'legendRender';
/** @private */
const textRender = 'textRender';
/** @private */
const pointRender = 'pointRender';
/** @private */
const seriesRender = 'seriesRender';
/** @private */
const axisLabelRender = 'axisLabelRender';
/** @private */
const axisRangeCalculated = 'axisRangeCalculated';
/** @private */
const axisMultiLabelRender = 'axisMultiLabelRender';
/** @private */
const tooltipRender = 'tooltipRender';
/** @private */
const chartMouseMove = 'chartMouseMove';
/** @private */
const chartMouseClick = 'chartMouseClick';
/** @private */
const pointClick = 'pointClick';
/** @private */
const pointMove = 'pointMove';
/** @private */
const chartMouseLeave = 'chartMouseLeave';
/** @private */
const chartMouseDown = 'chartMouseDown';
/** @private */
const chartMouseUp = 'chartMouseUp';
/** @private */
const zoomComplete = 'zoomComplete';
/** @private */
const dragComplete = 'dragComplete';
/** @private */
const resized = 'resized';
/** @private */
const beforePrint = 'beforePrint';
/** @private */
const annotationRender = 'annotationRender';

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the Annotation for chart.
 */
class ChartAnnotationSettings extends ChildProperty {
}
__decorate$3([
    Property('0')
], ChartAnnotationSettings.prototype, "x", void 0);
__decorate$3([
    Property('0')
], ChartAnnotationSettings.prototype, "y", void 0);
__decorate$3([
    Property(null)
], ChartAnnotationSettings.prototype, "content", void 0);
__decorate$3([
    Property('Center')
], ChartAnnotationSettings.prototype, "horizontalAlignment", void 0);
__decorate$3([
    Property('Pixel')
], ChartAnnotationSettings.prototype, "coordinateUnits", void 0);
__decorate$3([
    Property('Chart')
], ChartAnnotationSettings.prototype, "region", void 0);
__decorate$3([
    Property('Middle')
], ChartAnnotationSettings.prototype, "verticalAlignment", void 0);
__decorate$3([
    Property(null)
], ChartAnnotationSettings.prototype, "xAxisName", void 0);
__decorate$3([
    Property(null)
], ChartAnnotationSettings.prototype, "yAxisName", void 0);
__decorate$3([
    Property(null)
], ChartAnnotationSettings.prototype, "description", void 0);
/**
 * label border properties.
 */
class LabelBorder extends ChildProperty {
}
__decorate$3([
    Property('')
], LabelBorder.prototype, "color", void 0);
__decorate$3([
    Property(1)
], LabelBorder.prototype, "width", void 0);
__decorate$3([
    Property('Rectangle')
], LabelBorder.prototype, "type", void 0);
/**
 * categories for multi level labels
 */
class MultiLevelCategories extends ChildProperty {
}
__decorate$3([
    Property(null)
], MultiLevelCategories.prototype, "start", void 0);
__decorate$3([
    Property(null)
], MultiLevelCategories.prototype, "end", void 0);
__decorate$3([
    Property('')
], MultiLevelCategories.prototype, "text", void 0);
__decorate$3([
    Property(null)
], MultiLevelCategories.prototype, "maximumTextWidth", void 0);
/**
 * Strip line properties
 */
class StripLineSettings extends ChildProperty {
}
__decorate$3([
    Property(true)
], StripLineSettings.prototype, "visible", void 0);
__decorate$3([
    Property(false)
], StripLineSettings.prototype, "startFromAxis", void 0);
__decorate$3([
    Property(null)
], StripLineSettings.prototype, "start", void 0);
__decorate$3([
    Property(null)
], StripLineSettings.prototype, "end", void 0);
__decorate$3([
    Property(null)
], StripLineSettings.prototype, "size", void 0);
__decorate$3([
    Property('#808080')
], StripLineSettings.prototype, "color", void 0);
__decorate$3([
    Complex({ color: 'transparent', width: 1 }, Border)
], StripLineSettings.prototype, "border", void 0);
__decorate$3([
    Property('')
], StripLineSettings.prototype, "text", void 0);
__decorate$3([
    Property(null)
], StripLineSettings.prototype, "rotation", void 0);
__decorate$3([
    Property('Middle')
], StripLineSettings.prototype, "horizontalAlignment", void 0);
__decorate$3([
    Property('Middle')
], StripLineSettings.prototype, "verticalAlignment", void 0);
__decorate$3([
    Complex(Theme.stripLineLabelFont, Font)
], StripLineSettings.prototype, "textStyle", void 0);
__decorate$3([
    Property('Behind')
], StripLineSettings.prototype, "zIndex", void 0);
__decorate$3([
    Property(1)
], StripLineSettings.prototype, "opacity", void 0);
/**
 * MultiLevelLabels properties
 */
class MultiLevelLabels extends ChildProperty {
}
__decorate$3([
    Property('Center')
], MultiLevelLabels.prototype, "alignment", void 0);
__decorate$3([
    Property('Wrap')
], MultiLevelLabels.prototype, "overflow", void 0);
__decorate$3([
    Complex(Theme.axisLabelFont, Font)
], MultiLevelLabels.prototype, "textStyle", void 0);
__decorate$3([
    Complex({ color: null, width: 1, type: 'Rectangle' }, LabelBorder)
], MultiLevelLabels.prototype, "border", void 0);
__decorate$3([
    Collection([], MultiLevelCategories)
], MultiLevelLabels.prototype, "categories", void 0);

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const axisPadding = 10;
/**
 * Configures the `rows` of the chart.
 */
class Row extends ChildProperty {
    constructor() {
        /**
         * The height of the row as a string accept input both as '100px' and '100%'.
         * If specified as '100%, row renders to the full height of its chart.
         * @default '100%'
         */
        super(...arguments);
        /** @private */
        this.axes = [];
        /** @private */
        this.nearSizes = [];
        /** @private */
        this.farSizes = [];
    }
    /**
     * Measure the row size
     * @return {void}
     * @private
     */
    computeSize(axis, clipRect) {
        let width = 0;
        let innerPadding = 5;
        if (axis.visible) {
            width += (axis.findTickSize(axis.crossInAxis) +
                axis.findLabelSize(axis.crossInAxis, innerPadding) + axis.lineStyle.width / 2);
        }
        if (axis.opposedPosition) {
            this.farSizes.push(width);
        }
        else {
            this.nearSizes.push(width);
        }
    }
}
__decorate$2([
    Property('100%')
], Row.prototype, "height", void 0);
__decorate$2([
    Complex({}, Border)
], Row.prototype, "border", void 0);
/**
 * Configures the `columns` of the chart.
 */
class Column extends ChildProperty {
    constructor() {
        /**
         * The width of the column as a string accepts input both as like '100px' or '100%'.
         * If specified as '100%, column renders to the full width of its chart.
         * @default '100%'
         */
        super(...arguments);
        /** @private */
        this.axes = [];
        /** @private */
        this.nearSizes = [];
        /** @private */
        this.farSizes = [];
        /** @private */
        this.padding = 0;
    }
    /**
     * Measure the column size
     * @return {void}
     * @private
     */
    computeSize(axis, clipRect) {
        let height = 0;
        let innerPadding = 5;
        if (axis.visible) {
            height += (axis.findTickSize(axis.crossInAxis) +
                axis.findLabelSize(axis.crossInAxis, innerPadding) + axis.lineStyle.width / 2);
        }
        if (axis.opposedPosition) {
            this.farSizes.push(height);
        }
        else {
            this.nearSizes.push(height);
        }
    }
}
__decorate$2([
    Property('100%')
], Column.prototype, "width", void 0);
__decorate$2([
    Complex({}, Border)
], Column.prototype, "border", void 0);
/**
 * Configures the major grid lines in the `axis`.
 */
class MajorGridLines extends ChildProperty {
}
__decorate$2([
    Property(1)
], MajorGridLines.prototype, "width", void 0);
__decorate$2([
    Property('')
], MajorGridLines.prototype, "dashArray", void 0);
__decorate$2([
    Property(null)
], MajorGridLines.prototype, "color", void 0);
/**
 * Configures the minor grid lines in the `axis`.
 */
class MinorGridLines extends ChildProperty {
}
__decorate$2([
    Property(0.7)
], MinorGridLines.prototype, "width", void 0);
__decorate$2([
    Property('')
], MinorGridLines.prototype, "dashArray", void 0);
__decorate$2([
    Property(null)
], MinorGridLines.prototype, "color", void 0);
/**
 * Configures the axis line of a chart.
 */
class AxisLine extends ChildProperty {
}
__decorate$2([
    Property(1)
], AxisLine.prototype, "width", void 0);
__decorate$2([
    Property('')
], AxisLine.prototype, "dashArray", void 0);
__decorate$2([
    Property(null)
], AxisLine.prototype, "color", void 0);
/**
 * Configures the major tick lines.
 */
class MajorTickLines extends ChildProperty {
}
__decorate$2([
    Property(1)
], MajorTickLines.prototype, "width", void 0);
__decorate$2([
    Property(5)
], MajorTickLines.prototype, "height", void 0);
__decorate$2([
    Property(null)
], MajorTickLines.prototype, "color", void 0);
/**
 * Configures the minor tick lines.
 */
class MinorTickLines extends ChildProperty {
}
__decorate$2([
    Property(0.7)
], MinorTickLines.prototype, "width", void 0);
__decorate$2([
    Property(5)
], MinorTickLines.prototype, "height", void 0);
__decorate$2([
    Property(null)
], MinorTickLines.prototype, "color", void 0);
/**
 * Configures the crosshair ToolTip.
 */
class CrosshairTooltip extends ChildProperty {
}
__decorate$2([
    Property(false)
], CrosshairTooltip.prototype, "enable", void 0);
__decorate$2([
    Property(null)
], CrosshairTooltip.prototype, "fill", void 0);
__decorate$2([
    Complex(Theme.crosshairLabelFont, Font)
], CrosshairTooltip.prototype, "textStyle", void 0);
/**
 * Configures the axes in the chart.
 */
class Axis extends ChildProperty {
    constructor() {
        /**
         * Options to customize the axis label.
         */
        super(...arguments);
        /** @private */
        this.visibleLabels = [];
        /** @private */
        this.series = [];
        /** @private */
        this.rect = new Rect(undefined, undefined, 0, 0);
        /** @private */
        this.axisBottomLine = null;
        /** @private */
        this.intervalDivs = [10, 5, 2, 1];
        /** @private */
        this.angle = this.labelRotation;
        /** @private */
        this.isStack100 = false;
        /** @private */
        this.crossAt = null;
        /** @private */
        this.updatedRect = null;
        /** @private */
        this.multiLevelLabelHeight = 0;
    }
    /**
     * The function used to find tick size.
     * @return {number}
     * @private
     */
    findTickSize(crossAxis) {
        if (this.tickPosition === 'Inside') {
            return 0;
        }
        if (crossAxis && (!crossAxis.visibleRange || this.isInside(crossAxis.visibleRange))) {
            return 0;
        }
        return this.majorTickLines.height;
    }
    /**
     * The function used to find axis position.
     * @return {number}
     * @private
     */
    isInside(range) {
        return (inside(this.crossAt, range) ||
            (!this.opposedPosition && this.crossAt >= range.max) || (this.opposedPosition && this.crossAt <= range.min));
    }
    /**
     * The function used to find label Size.
     * @return {number}
     * @private
     */
    findLabelSize(crossAxis, innerPadding) {
        let titleSize = 0;
        if (this.title) {
            titleSize = measureText(this.title, this.titleStyle).height + innerPadding;
        }
        if (this.labelPosition === 'Inside') {
            return titleSize + innerPadding;
        }
        let diff;
        let value;
        let labelSize = titleSize + innerPadding + axisPadding +
            ((this.orientation === 'Vertical') ? this.maxLabelSize.width : this.maxLabelSize.height) + this.multiLevelLabelHeight;
        if (crossAxis && this.placeNextToAxisLine) {
            let range = crossAxis.visibleRange;
            let size = (crossAxis.orientation === 'Horizontal') ? crossAxis.rect.width : crossAxis.rect.height;
            if (!range || !size) {
                return 0;
            }
            else if (this.isInside(range)) {
                value = this.findDifference(crossAxis);
                diff = (value) * (size / range.delta);
                diff = (value) * ((size - (diff < labelSize ? (labelSize - diff) : 0)) / range.delta);
                labelSize = (diff < labelSize) ? (labelSize - diff) : 0;
            }
        }
        return labelSize;
    }
    /**
     * The function used to find axis position.
     * @return {number}
     * @private
     */
    updateCrossValue(chart) {
        let value = this.crossAt;
        if (value === null || !this.isInside(this.crossInAxis.visibleRange)) {
            this.updatedRect = this.rect;
            return null;
        }
        let range = this.crossInAxis.visibleRange;
        if (!this.opposedPosition) {
            if (this.crossAt > range.max) {
                value = range.max;
            }
        }
        else {
            if (this.crossAt < range.min) {
                value = range.min;
            }
        }
        this.updatedRect = extend({}, this.rect, null, true);
        if (this.orientation === 'Horizontal') {
            value = this.crossInAxis.rect.height - (valueToCoefficient(value, this.crossInAxis) * this.crossInAxis.rect.height);
            this.updatedRect.y = this.crossInAxis.rect.y + value;
        }
        else {
            value = valueToCoefficient(value, this.crossInAxis) * this.crossInAxis.rect.width;
            this.updatedRect.x = this.crossInAxis.rect.x + value;
        }
    }
    findDifference(crossAxis) {
        let value = 0;
        if (this.opposedPosition) {
            value = crossAxis.isInversed ? crossAxis.visibleRange.min : crossAxis.visibleRange.max;
        }
        else {
            value = crossAxis.isInversed ? crossAxis.visibleRange.max : crossAxis.visibleRange.min;
        }
        return Math.abs(this.crossAt - value);
    }
    /**
     * The function used to find whether the range is set.
     * @return {boolean}
     * @private
     */
    setRange() {
        if (this.minimum != null && this.maximum != null) {
            return true;
        }
        return false;
    }
    /**
     * Calculate visible range for axis.
     * @return {void}
     * @private
     */
    calculateVisibleRange(size) {
        if (this.zoomFactor < 1 || this.zoomPosition > 0) {
            let baseRange = this.actualRange;
            let start;
            let end;
            if (!this.isInversed) {
                start = this.actualRange.min + this.zoomPosition * this.actualRange.delta;
                end = start + this.zoomFactor * this.actualRange.delta;
            }
            else {
                start = this.actualRange.max - (this.zoomPosition * this.actualRange.delta);
                end = start - (this.zoomFactor * this.actualRange.delta);
            }
            if (start < baseRange.min) {
                end = end + (baseRange.min - start);
                start = baseRange.min;
            }
            if (end > baseRange.max) {
                start = start - (end - baseRange.max);
                end = baseRange.max;
            }
            this.doubleRange = new DoubleRange(start, end);
            this.visibleRange.min = this.doubleRange.start;
            this.visibleRange.max = this.doubleRange.end;
            this.visibleRange.delta = this.doubleRange.delta;
        }
    }
    /**
     * Calculate desired interval for the axis.
     * @return {void}
     * @private
     */
    getActualDesiredIntervalsCount(availableSize) {
        let size = this.orientation === 'Horizontal' ? availableSize.width : availableSize.height;
        if (this.desiredIntervals === null) {
            let desiredIntervalsCount = (this.orientation === 'Horizontal' ? 0.533 : 1) * this.maximumLabels;
            desiredIntervalsCount = Math.max((size * (desiredIntervalsCount / 100)), 1);
            return desiredIntervalsCount;
        }
        else {
            return this.desiredIntervals;
        }
    }
    /**
     * Triggers the event.
     * @return {void}
     * @private
     */
    triggerLabelRender(chart, tempInterval, text, labelStyle) {
        let argsData;
        argsData = {
            cancel: false, name: axisLabelRender, axis: this,
            text: text, value: tempInterval, labelStyle: labelStyle
        };
        chart.trigger(axisLabelRender, argsData);
        if (!argsData.cancel) {
            this.visibleLabels.push(new VisibleLabels(argsData.text, argsData.value, argsData.labelStyle));
        }
    }
    /**
     * Triggers the event.
     * @return {void}
     * @private
     */
    triggerRangeRender(chart, minimum, maximum, interval) {
        let argsData;
        argsData = {
            cancel: false, name: axisRangeCalculated, axis: this,
            minimum: minimum, maximum: maximum, interval: interval
        };
        chart.trigger(axisRangeCalculated, argsData);
        if (!argsData.cancel) {
            this.visibleRange.min = argsData.minimum;
            this.visibleRange.max = argsData.maximum;
            this.visibleRange.interval = argsData.interval;
            this.visibleRange.delta = argsData.maximum - argsData.minimum;
        }
    }
    /**
     * Calculate padding for the axis.
     * @return {string}
     * @private
     */
    getRangePadding(chart) {
        let padding = this.rangePadding;
        if (padding !== 'Auto') {
            return padding;
        }
        switch (this.orientation) {
            case 'Horizontal':
                if (chart.requireInvertedAxis) {
                    padding = (this.isStack100 ? 'Round' : 'Normal');
                }
                else {
                    padding = 'None';
                }
                break;
            case 'Vertical':
                if (!chart.requireInvertedAxis) {
                    padding = (this.isStack100 ? 'Round' : 'Normal');
                }
                else {
                    padding = 'None';
                }
                break;
        }
        return padding;
    }
    /**
     * Calculate maximum label width for the axis.
     * @return {void}
     * @private
     */
    getMaxLabelWidth(chart) {
        let pointX;
        let previousEnd = 0;
        let isIntersect = false;
        this.angle = this.labelRotation;
        this.maxLabelSize = new Size(0, 0);
        let action = this.labelIntersectAction;
        let label;
        for (let i = 0; i < this.visibleLabels.length; i++) {
            label = this.visibleLabels[i];
            label.size = measureText(label.text, this.labelStyle);
            if (label.size.width > this.maxLabelSize.width) {
                this.maxLabelSize.width = label.size.width;
                this.rotatedLabel = label.text;
            }
            if (label.size.height > this.maxLabelSize.height) {
                this.maxLabelSize.height = label.size.height;
            }
            if (action === 'None' || action === 'Hide' || action === 'Trim') {
                continue;
            }
            if ((action !== 'None' || this.angle % 360 === 0) && this.orientation === 'Horizontal' &&
                this.rect.width > 0 && !isIntersect) {
                pointX = (valueToCoefficient(label.value, this) * this.rect.width) + this.rect.x;
                pointX -= label.size.width / 2;
                if (this.edgeLabelPlacement === 'Shift') {
                    if (i === 0 && pointX < this.rect.x) {
                        pointX = this.rect.x;
                    }
                    if (i === this.visibleLabels.length - 1 && ((pointX + label.size.width) > (this.rect.x + this.rect.width))) {
                        pointX = this.rect.x + this.rect.width - label.size.width;
                    }
                }
                switch (action) {
                    case 'MultipleRows':
                        if (i > 0) {
                            this.findMultiRows(i, pointX, label);
                        }
                        break;
                    case 'Rotate45':
                    case 'Rotate90':
                        if (i > 0 && (!this.isInversed ? pointX <= previousEnd : pointX + label.size.width >= previousEnd)) {
                            this.angle = (action === 'Rotate45') ? 45 : 90;
                            isIntersect = true;
                        }
                        break;
                    default:
                        label.text = textWrap(label.text, this.rect.width / this.visibleLabels.length, this.labelStyle);
                        let height = (label.size.height * label.text.length);
                        if (height > this.maxLabelSize.height) {
                            this.maxLabelSize.height = height;
                        }
                        break;
                }
                previousEnd = this.isInversed ? pointX : pointX + label.size.width;
            }
        }
        if (this.angle !== 0 && this.orientation === 'Horizontal') {
            this.maxLabelSize = rotateTextSize(this.labelStyle, this.rotatedLabel, this.angle, chart);
        }
        if (chart.multiLevelLabelModule && this.multiLevelLabels.length > 0) {
            chart.multiLevelLabelModule.getMultilevelLabelsHeight(this);
        }
    }
    /**
     * Finds the multiple rows for axis.
     * @return {void}
     */
    findMultiRows(length, currentX, currentLabel) {
        let label;
        let pointX;
        let store = [];
        let isMultiRows;
        for (let i = length - 1; i >= 0; i--) {
            label = this.visibleLabels[i];
            pointX = (valueToCoefficient(label.value, this) * this.rect.width) + this.rect.x;
            isMultiRows = !this.isInversed ? currentX < (pointX + label.size.width / 2) :
                currentX + currentLabel.size.width > (pointX - label.size.width / 2);
            if (isMultiRows) {
                store.push(label.index);
                currentLabel.index = (currentLabel.index > label.index) ? currentLabel.index : label.index + 1;
            }
            else {
                currentLabel.index = store.indexOf(label.index) > -1 ? currentLabel.index : label.index;
            }
        }
        let height = (currentLabel.size.height * currentLabel.index) + (5 * (currentLabel.index - 1));
        if (height > this.maxLabelSize.height) {
            this.maxLabelSize.height = height;
        }
    }
    /**
     * Finds the default module for axis.
     * @return {void}
     * @private
     */
    getModule(chart) {
        if (this.valueType === 'Double') {
            this.baseModule = new Double(chart);
        }
        else {
            this.baseModule = chart[firstToLowerCase(this.valueType) + 'Module'];
        }
    }
}
__decorate$2([
    Complex(Theme.axisLabelFont, Font)
], Axis.prototype, "labelStyle", void 0);
__decorate$2([
    Complex({}, CrosshairTooltip)
], Axis.prototype, "crosshairTooltip", void 0);
__decorate$2([
    Property('')
], Axis.prototype, "title", void 0);
__decorate$2([
    Complex(Theme.axisTitleFont, Font)
], Axis.prototype, "titleStyle", void 0);
__decorate$2([
    Property('')
], Axis.prototype, "labelFormat", void 0);
__decorate$2([
    Property('')
], Axis.prototype, "skeleton", void 0);
__decorate$2([
    Property('DateTime')
], Axis.prototype, "skeletonType", void 0);
__decorate$2([
    Property(0)
], Axis.prototype, "plotOffset", void 0);
__decorate$2([
    Property(false)
], Axis.prototype, "isIndexed", void 0);
__decorate$2([
    Property(10)
], Axis.prototype, "logBase", void 0);
__decorate$2([
    Property(0)
], Axis.prototype, "columnIndex", void 0);
__decorate$2([
    Property(0)
], Axis.prototype, "rowIndex", void 0);
__decorate$2([
    Property(1)
], Axis.prototype, "span", void 0);
__decorate$2([
    Property(null)
], Axis.prototype, "desiredIntervals", void 0);
__decorate$2([
    Property(3)
], Axis.prototype, "maximumLabels", void 0);
__decorate$2([
    Property(1)
], Axis.prototype, "zoomFactor", void 0);
__decorate$2([
    Property(0)
], Axis.prototype, "zoomPosition", void 0);
__decorate$2([
    Property(false)
], Axis.prototype, "opposedPosition", void 0);
__decorate$2([
    Property(true)
], Axis.prototype, "enableAutoIntervalOnZooming", void 0);
__decorate$2([
    Property('Auto')
], Axis.prototype, "rangePadding", void 0);
__decorate$2([
    Property('Double')
], Axis.prototype, "valueType", void 0);
__decorate$2([
    Property('None')
], Axis.prototype, "edgeLabelPlacement", void 0);
__decorate$2([
    Property('Auto')
], Axis.prototype, "intervalType", void 0);
__decorate$2([
    Property('BetweenTicks')
], Axis.prototype, "labelPlacement", void 0);
__decorate$2([
    Property('Outside')
], Axis.prototype, "tickPosition", void 0);
__decorate$2([
    Property('Outside')
], Axis.prototype, "labelPosition", void 0);
__decorate$2([
    Property('')
], Axis.prototype, "name", void 0);
__decorate$2([
    Property(true)
], Axis.prototype, "visible", void 0);
__decorate$2([
    Property(0)
], Axis.prototype, "minorTicksPerInterval", void 0);
__decorate$2([
    Property(0)
], Axis.prototype, "labelRotation", void 0);
__decorate$2([
    Property(null)
], Axis.prototype, "crossesAt", void 0);
__decorate$2([
    Property(true)
], Axis.prototype, "placeNextToAxisLine", void 0);
__decorate$2([
    Property(null)
], Axis.prototype, "crossesInAxis", void 0);
__decorate$2([
    Property(null)
], Axis.prototype, "minimum", void 0);
__decorate$2([
    Property(null)
], Axis.prototype, "maximum", void 0);
__decorate$2([
    Property(null)
], Axis.prototype, "interval", void 0);
__decorate$2([
    Complex({}, MajorTickLines)
], Axis.prototype, "majorTickLines", void 0);
__decorate$2([
    Complex({}, MinorTickLines)
], Axis.prototype, "minorTickLines", void 0);
__decorate$2([
    Complex({}, MajorGridLines)
], Axis.prototype, "majorGridLines", void 0);
__decorate$2([
    Complex({}, MinorGridLines)
], Axis.prototype, "minorGridLines", void 0);
__decorate$2([
    Complex({}, AxisLine)
], Axis.prototype, "lineStyle", void 0);
__decorate$2([
    Property('Trim')
], Axis.prototype, "labelIntersectAction", void 0);
__decorate$2([
    Property(false)
], Axis.prototype, "isInversed", void 0);
__decorate$2([
    Property(100)
], Axis.prototype, "coefficient", void 0);
__decorate$2([
    Property(0)
], Axis.prototype, "startAngle", void 0);
__decorate$2([
    Property(null)
], Axis.prototype, "description", void 0);
__decorate$2([
    Property(2)
], Axis.prototype, "tabIndex", void 0);
__decorate$2([
    Collection([], StripLineSettings)
], Axis.prototype, "stripLines", void 0);
__decorate$2([
    Collection([], MultiLevelLabels)
], Axis.prototype, "multiLevelLabels", void 0);
__decorate$2([
    Complex({ color: null, width: 0, type: 'Rectangle' }, LabelBorder)
], Axis.prototype, "border", void 0);
/** @private */
class VisibleLabels {
    constructor(text, value, labelStyle, size = new Size(0, 0), index = 1) {
        this.text = text;
        this.originalText = text;
        this.value = value;
        this.labelStyle = labelStyle;
        this.size = size;
        this.index = 1;
    }
}

/**
 * Specifies the Cartesian Axis Layout.
 */
const axisPadding$1 = 10;
class CartesianAxisLayoutPanel {
    /** @private */
    constructor(chartModule) {
        this.chart = chartModule;
        this.padding = 5;
    }
    /**
     * Measure the axis size.
     * @return {void}
     * @private
     */
    measureAxis(rect) {
        let chart = this.chart;
        this.crossAt(chart);
        this.seriesClipRect = new Rect(rect.x, rect.y, rect.width, rect.height);
        this.initialClipRect = rect;
        this.leftSize = 0;
        this.rightSize = 0;
        this.topSize = 0;
        this.bottomSize = 0;
        //Measure Axis size with initial Rect
        this.measureRowAxis(chart, this.initialClipRect);
        this.initialClipRect = subtractThickness(this.initialClipRect, new Thickness(this.leftSize, this.rightSize, 0, 0));
        this.measureColumnAxis(chart, this.initialClipRect);
        this.initialClipRect = subtractThickness(this.initialClipRect, new Thickness(0, 0, this.topSize, this.bottomSize));
        if (!this.chart.delayRedraw) {
            this.calculateAxisSize(this.initialClipRect);
        }
        this.leftSize = 0;
        this.rightSize = 0;
        this.topSize = 0;
        this.bottomSize = 0;
        //Measure Axis size with series Rect
        this.measureRowAxis(chart, this.initialClipRect);
        this.seriesClipRect = subtractThickness(this.seriesClipRect, new Thickness(this.leftSize, this.rightSize, 0, 0));
        this.measureColumnAxis(chart, this.initialClipRect);
        this.seriesClipRect = subtractThickness(this.seriesClipRect, new Thickness(0, 0, this.topSize, this.bottomSize));
        if (!this.chart.delayRedraw) {
            chart.refreshAxis();
            this.calculateAxisSize(this.seriesClipRect);
        }
    }
    measureRowAxis(chart, rect) {
        let row;
        this.calculateRowSize(rect);
        for (let item of chart.rows) {
            row = item;
            row.nearSizes = [];
            row.farSizes = [];
            this.arrangeAxis(row);
            this.measureDefinition(row, chart, new Size(chart.availableSize.width, row.computedHeight), rect);
            if (this.leftSize < sum(row.nearSizes)) {
                this.leftSize = sum(row.nearSizes);
            }
            if (this.rightSize < sum(row.farSizes)) {
                this.rightSize = sum(row.farSizes);
            }
        }
    }
    measureColumnAxis(chart, rect) {
        let column;
        this.calculateColumnSize(rect);
        for (let item of chart.columns) {
            column = item;
            column.farSizes = [];
            column.nearSizes = [];
            this.arrangeAxis(column);
            this.measureDefinition(column, chart, new Size(column.computedWidth, chart.availableSize.height), rect);
            if (this.bottomSize < sum(column.nearSizes)) {
                this.bottomSize = sum(column.nearSizes);
            }
            if (this.topSize < sum(column.farSizes)) {
                this.topSize = sum(column.farSizes);
            }
        }
    }
    /**
     * Measure the column and row in chart.
     * @return {void}
     * @private
     */
    measureDefinition(definition, chart, size, clipRect) {
        for (let axis of definition.axes) {
            axis.getModule(chart);
            axis.baseModule.calculateRangeAndInterval(size, axis);
            definition.computeSize(axis, clipRect);
        }
        if (definition.farSizes.length > 0) {
            definition.farSizes[definition.farSizes.length - 1] -= axisPadding$1;
        }
        if (definition.nearSizes.length > 0) {
            definition.nearSizes[definition.nearSizes.length - 1] -= axisPadding$1;
        }
    }
    /**
     * Measure the axis.
     * @return {void}
     * @private
     */
    calculateAxisSize(rect) {
        let chart = this.chart;
        let row;
        let column;
        let definition;
        let axis;
        let nearCount = 0;
        let farCount = 0;
        let size = 0;
        let x;
        let y;
        this.calculateRowSize(rect);
        for (let i = 0, len = chart.rows.length; i < len; i++) {
            row = chart.rows[i];
            nearCount = 0;
            farCount = 0;
            for (let j = 0, len = row.axes.length; j < len; j++) {
                axis = row.axes[j];
                if (axis.rect.height === 0) {
                    axis.rect.height = row.computedHeight;
                    size = 0;
                    for (let k = i + 1, len = i + axis.span; k < len; k++) {
                        definition = chart.rows[k];
                        size += definition.computedHeight;
                    }
                    axis.rect.y = (row.computedTop - size) + axis.plotOffset;
                    axis.rect.height = (axis.rect.height + size) - (2 * axis.plotOffset);
                    axis.rect.width = 0;
                }
                if (axis.opposedPosition) {
                    x = rect.x + rect.width + sum(subArray(row.farSizes, farCount));
                    axis.rect.x = axis.rect.x >= x ? axis.rect.x : x;
                    farCount++;
                }
                else {
                    x = rect.x - sum(subArray(row.nearSizes, nearCount));
                    axis.rect.x = axis.rect.x <= x ? axis.rect.x : x;
                    nearCount++;
                }
            }
        }
        this.calculateColumnSize(rect);
        for (let i = 0, len = chart.columns.length; i < len; i++) {
            column = chart.columns[i];
            nearCount = 0;
            farCount = 0;
            for (let j = 0, len = column.axes.length; j < len; j++) {
                axis = column.axes[j];
                if (axis.rect.width === 0) {
                    for (let k = i, len = (i + axis.span); k < len; k++) {
                        definition = chart.columns[k];
                        axis.rect.width += definition.computedWidth;
                    }
                    axis.rect.x = column.computedLeft + axis.plotOffset;
                    axis.rect.width -= (2 * axis.plotOffset);
                    axis.rect.height = 0;
                }
                if (axis.opposedPosition) {
                    y = rect.y - sum(subArray(column.farSizes, farCount));
                    axis.rect.y = axis.rect.y <= y ? axis.rect.y : y;
                    farCount++;
                }
                else {
                    y = rect.y + rect.height + sum(subArray(column.nearSizes, nearCount));
                    axis.rect.y = axis.rect.y >= y ? axis.rect.y : y;
                    nearCount++;
                }
            }
        }
    }
    /**
     * Measure the axis.
     * @return {void}
     * @private
     */
    measure() {
        let chart = this.chart;
        let row;
        let column;
        let definition;
        let actualIndex;
        let span;
        for (let axis of chart.axisCollections) {
            //definition.Axes = axis;
            if (axis.orientation === 'Vertical') {
                chart.verticalAxes.push(axis);
                actualIndex = this.getActualRow(axis);
                row = chart.rows[actualIndex];
                this.pushAxis(row, axis);
                span = ((actualIndex + axis.span) > chart.rows.length ? chart.rows.length : (actualIndex + axis.span));
                for (let j = actualIndex + 1; j < span; j++) {
                    definition = chart.rows[j];
                    definition.axes[row.axes.length - 1] = axis;
                    chart.rows[j] = definition;
                }
                chart.rows[actualIndex] = row;
            }
            else {
                chart.horizontalAxes.push(axis);
                actualIndex = this.getActualColumn(axis);
                column = chart.columns[actualIndex];
                this.pushAxis(column, axis);
                span = ((actualIndex + axis.span) > chart.columns.length ? chart.columns.length : (actualIndex + axis.span));
                for (let j = actualIndex + 1; j < span; j++) {
                    definition = chart.columns[j];
                    definition.axes[column.axes.length - 1] = axis;
                    chart.columns[j] = definition;
                }
                chart.columns[actualIndex] = column;
            }
        }
    }
    crossAt(chart) {
        for (let axis of chart.axisCollections) {
            if (axis.crossesAt === null) {
                continue;
            }
            let isTransposed = chart.isTransposed;
            if (!axis.crossesInAxis) {
                if (chart.requireInvertedAxis) {
                    axis.crossInAxis = ((axis.orientation === 'Horizontal')) ? chart.primaryXAxis : chart.primaryYAxis;
                }
                else {
                    axis.crossInAxis = ((axis.orientation === 'Horizontal')) ? chart.primaryYAxis : chart.primaryXAxis;
                }
                axis.crossAt = this.updateCrossAt(axis.crossInAxis, axis.crossesAt);
                continue;
            }
            else {
                for (let i = 2, len = chart.axisCollections.length; i < len; i++) {
                    if (axis.crossesInAxis === chart.axisCollections[i].name) {
                        axis.crossInAxis = chart.axisCollections[i];
                        axis.crossAt = this.updateCrossAt(axis.crossInAxis, axis.crossesAt);
                        continue;
                    }
                }
            }
        }
    }
    updateCrossAt(axis, crossAt) {
        switch (axis.valueType) {
            case 'DateTime':
                let option = {
                    skeleton: 'full',
                    type: 'dateTime'
                };
                let dateParser = this.chart.intl.getDateParser(option);
                let dateFormatter = this.chart.intl.getDateFormat(option);
                return Date.parse(dateParser(dateFormatter(new Date(DataUtil.parse.parseJson({ val: crossAt }).val))));
            case 'Category':
                return parseFloat(crossAt) ? parseFloat(crossAt) : axis.labels.indexOf(crossAt);
            case 'Logarithmic':
                return logBase(crossAt, axis.logBase);
            default:
                return crossAt;
        }
    }
    pushAxis(definition, axis) {
        for (let i = 0, len = definition.axes.length; i <= len; i++) {
            if (!definition.axes[i]) {
                definition.axes[i] = axis;
                break;
            }
        }
    }
    arrangeAxis(definition) {
        let axisCollection = [];
        for (let i = 0, len = definition.axes.length; i <= len; i++) {
            if (definition.axes[i]) {
                axisCollection.push(definition.axes[i]);
            }
        }
        definition.axes = axisCollection;
    }
    getActualColumn(axis) {
        let actualLength = this.chart.columns.length;
        let pos = axis.columnIndex;
        let result = pos >= actualLength ? actualLength - 1 : (pos < 0 ? 0 : pos);
        return result;
    }
    getActualRow(axis) {
        let actualLength = this.chart.rows.length;
        let pos = axis.rowIndex;
        let result = pos >= actualLength ? actualLength - 1 : (pos < 0 ? 0 : pos);
        return result;
    }
    /**
     * Measure the row size.
     * @return {void}
     */
    calculateRowSize(rect) {
        /*! Calculate row size */
        let chart = this.chart;
        let row;
        let rowTop = rect.y + rect.height;
        let height = 0;
        let remainingHeight = Math.max(0, rect.height);
        for (let i = 0, len = chart.rows.length; i < len; i++) {
            row = chart.rows[i];
            if (row.height.indexOf('%') !== -1) {
                height = Math.min(remainingHeight, (rect.height * parseInt(row.height, 10) / 100));
            }
            else {
                height = Math.min(remainingHeight, parseInt(row.height, 10));
            }
            height = (i !== (len - 1)) ? height : remainingHeight;
            row.computedHeight = height;
            rowTop -= height;
            row.computedTop = rowTop;
            remainingHeight -= height;
        }
    }
    /**
     * Measure the row size.
     * @return {void}
     */
    calculateColumnSize(rect) {
        /*! Calculate column size */
        let chart = this.chart;
        let column;
        let columnLeft = rect.x;
        let width = 0;
        let remainingWidth = Math.max(0, rect.width);
        for (let i = 0, len = chart.columns.length; i < len; i++) {
            column = chart.columns[i];
            if (column.width.indexOf('%') !== -1) {
                width = Math.min(remainingWidth, (rect.width * parseInt(column.width, 10) / 100));
            }
            else {
                width = Math.min(remainingWidth, parseInt(column.width, 10));
            }
            width = (i !== (len - 1)) ? width : remainingWidth;
            column.computedWidth = width;
            column.computedLeft = columnLeft;
            columnLeft += width;
            remainingWidth -= width;
        }
    }
    /**
     * To render the axis element.
     * @return {void}
     * @private
     */
    renderAxes() {
        let chart = this.chart;
        let axis;
        let axisElement = chart.renderer.createGroup({ id: chart.element.id + 'AxisInsideCollection' });
        let axisLineElement = chart.renderer.createGroup({ id: chart.element.id + 'AxisOutsideCollection' });
        let outsideElement;
        let isInside;
        for (let i = 0, len = chart.axisCollections.length; i < len; i++) {
            axis = chart.axisCollections[i];
            this.element = chart.renderer.createGroup({ id: chart.element.id + 'AxisGroup' + i + 'Inside' });
            outsideElement = chart.renderer.createGroup({ id: chart.element.id + 'AxisGroup' + i + 'Outside' });
            isInside = this.findAxisPosition(axis);
            if (axis.orientation === 'Horizontal') {
                axis.updateCrossValue(chart);
                if (axis.visible && axis.lineStyle.width > 0) {
                    this.drawAxisLine(axis, i, axis.plotOffset, 0, isInside ? outsideElement : this.element, axis.updatedRect);
                }
                if (axis.majorGridLines.width > 0 || axis.majorTickLines.width > 0) {
                    this.drawXAxisGridLine(axis, i, (isInside || axis.tickPosition === 'Inside') ? outsideElement : this.element, axis.updatedRect);
                }
                if (axis.visible) {
                    this.drawXAxisLabels(axis, i, (isInside || axis.labelPosition === 'Inside') ? outsideElement : this.element, (axis.placeNextToAxisLine ? axis.updatedRect : axis.rect));
                    this.drawXAxisBorder(axis, i, (isInside || axis.labelPosition === 'Inside') ? outsideElement : this.element, (axis.placeNextToAxisLine ? axis.updatedRect : axis.rect));
                    this.drawXAxisTitle(axis, i, isInside ? outsideElement : this.element, (axis.placeNextToAxisLine ? axis.updatedRect : axis.rect));
                }
            }
            else {
                axis.updateCrossValue(chart);
                if (axis.visible && axis.lineStyle.width > 0) {
                    this.drawAxisLine(axis, i, 0, axis.plotOffset, isInside ? outsideElement : this.element, axis.updatedRect);
                }
                if (axis.majorGridLines.width > 0 || axis.majorTickLines.width > 0) {
                    this.drawYAxisGridLine(axis, i, (isInside || axis.tickPosition === 'Inside') ? outsideElement : this.element, axis.updatedRect);
                }
                if (axis.visible) {
                    this.drawYAxisLabels(axis, i, (isInside || axis.labelPosition === 'Inside') ? outsideElement : this.element, (axis.placeNextToAxisLine ? axis.updatedRect : axis.rect));
                    this.drawYAxisBorder(axis, i, (isInside || axis.labelPosition === 'Inside') ? outsideElement : this.element, (axis.placeNextToAxisLine ? axis.updatedRect : axis.rect));
                    this.drawYAxisTitle(axis, i, isInside ? outsideElement : this.element, (axis.placeNextToAxisLine ? axis.updatedRect : axis.rect));
                }
            }
            axisElement.appendChild(this.element);
            if (outsideElement && outsideElement.childNodes.length > 0) {
                axisLineElement.appendChild(outsideElement);
            }
        }
        this.element = chart.renderer.createGroup({ id: chart.element.id + 'DefinitionLine' });
        for (let j = 0, len = chart.rows.length; j < len; j++) {
            let row = chart.rows[j];
            if (row.border.color) {
                this.drawBottomLine(row, j, true);
            }
        }
        for (let j = 0, len = chart.columns.length; j < len; j++) {
            let column = chart.columns[j];
            if (column.border.color) {
                this.drawBottomLine(column, j, false);
            }
        }
        axisElement.appendChild(this.element);
        chart.svgObject.appendChild(axisElement);
        return axisLineElement;
    }
    findAxisPosition(axis) {
        return axis.crossAt !== null && axis.isInside(axis.crossInAxis.visibleRange);
    }
    drawBottomLine(definition, index, isRow) {
        let chart = this.chart;
        let optionsLine = {};
        let x1;
        let x2;
        let y1;
        let y2;
        let definitionName;
        if (isRow) {
            definition = definition;
            y1 = y2 = definition.computedTop + definition.computedHeight;
            x1 = this.seriesClipRect.x;
            x2 = x1 + this.seriesClipRect.width;
            definitionName = 'Row';
        }
        else {
            definition = definition;
            x1 = x2 = definition.computedLeft;
            y1 = this.seriesClipRect.y;
            y2 = y1 + this.seriesClipRect.height;
            definitionName = 'Column';
        }
        optionsLine = {
            'id': chart.element.id + '_AxisBottom_' + definitionName + index,
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            'stroke-width': definition.border.width,
            'stroke': definition.border.color,
        };
        this.htmlObject = chart.renderer.drawLine(optionsLine);
        this.element.appendChild(this.htmlObject);
    }
    drawAxisLine(axis, index, plotX, plotY, parent, rect) {
        let chart = this.chart;
        let optionsLine = {};
        optionsLine = {
            'id': chart.element.id + 'AxisLine_' + index,
            x1: rect.x - plotX,
            y1: rect.y - plotY,
            x2: rect.x + rect.width + plotX,
            y2: rect.y + rect.height + plotY,
            'stroke-dasharray': axis.lineStyle.dashArray,
            'stroke-width': axis.lineStyle.width,
            'stroke': axis.lineStyle.color || chart.themeStyle.axisLine
        };
        this.htmlObject = chart.renderer.drawLine(optionsLine);
        parent.appendChild(this.htmlObject);
    }
    drawYAxisGridLine(axis, index, parent, rect) {
        let chart = this.chart;
        let tempInterval;
        let pointY = 0;
        let majorGrid = '';
        let majorTick = '';
        let minorGird = '';
        let minorTick = '';
        let minorDirection;
        let tickSize = axis.opposedPosition ? axis.majorTickLines.height : -axis.majorTickLines.height;
        let axisLineSize = (axis.opposedPosition) ? axis.lineStyle.width / 2 : -axis.lineStyle.width / 2;
        let ticksbwtLabel = (axis.valueType === 'Category' && axis.labelPlacement === 'BetweenTicks') ?
            0.5 : 0;
        let ticks = axis.tickPosition === 'Inside' ? (rect.x - tickSize - axisLineSize) : (rect.x + tickSize + axisLineSize);
        let length = axis.visibleLabels.length;
        if (axis.valueType.indexOf('Category') && axis.labelPlacement === 'BetweenTicks' && length > 0) {
            length += 1;
        }
        //Gridlines
        for (let i = 0; i < length; i++) {
            tempInterval = !axis.visibleLabels[i] ? (axis.visibleLabels[i - 1].value + axis.visibleRange.interval) - ticksbwtLabel
                : axis.visibleLabels[i].value - ticksbwtLabel;
            pointY = valueToCoefficient(tempInterval, axis) * rect.height;
            pointY = (pointY * -1) + (rect.y + rect.height);
            if (pointY >= rect.y && (rect.y + rect.height) >= pointY) {
                if ((inside(tempInterval, axis.visibleRange)) || this.isBorder(axis, i, pointY)) {
                    majorGrid = majorGrid.concat('M ' + this.seriesClipRect.x + ' ' + (pointY) +
                        ' L ' + (this.seriesClipRect.x + this.seriesClipRect.width) + ' ' + pointY + ' ');
                }
                majorTick = majorTick.concat('M ' + (rect.x + axisLineSize) + ' ' + pointY +
                    ' L ' + (ticks) + ' ' + pointY + ' ');
            }
            if ((axis.minorGridLines.width > 0 || axis.minorTickLines.width > 0) && axis.minorTicksPerInterval > 0) {
                minorDirection = this.drawAxisMinorLine(axis, tempInterval, minorGird, minorTick, rect, i);
                minorGird = minorDirection[0];
                minorTick = minorDirection[1];
            }
        }
        this.renderGridLine(axis, index, majorGrid, minorGird);
        this.renderTickLine(axis, index, majorTick, minorTick, parent);
    }
    isBorder(axis, index, value) {
        let chart = this.chart;
        let border = chart.chartArea.border;
        let rect = this.seriesClipRect;
        let orientation = axis.orientation;
        let start = (orientation === 'Horizontal') ? rect.x : rect.y;
        let size = (orientation === 'Horizontal') ? rect.width : rect.height;
        let startIndex = (orientation === 'Horizontal') ? 0 : axis.visibleLabels.length - 1;
        let endIndex = (orientation === 'Horizontal') ? axis.visibleLabels.length - 1 : 0;
        if (axis.plotOffset > 0) {
            return true;
        }
        else if ((value === start || value === (start + size)) && (border.width <= 0 || border.color === 'transparent')) {
            return true;
        }
        else if ((value !== start && index === startIndex) || (value !== (start + size) && index === endIndex)) {
            return true;
        }
        return false;
    }
    /**
     * To render the axis label.
     * @return {void}
     * @private
     */
    drawYAxisLabels(axis, index, parent, rect) {
        let chart = this.chart;
        let pointX = 0;
        let pointY = 0;
        let elementSize;
        let options;
        let isLabelInside = axis.labelPosition === 'Inside';
        let isTickInside = axis.tickPosition === 'Inside';
        let isOpposed = axis.opposedPosition;
        let tickSpace = axis.labelPosition === axis.tickPosition ? axis.majorTickLines.height : 0;
        let padding = tickSpace + this.padding + axis.lineStyle.width / 2;
        padding = (axis.opposedPosition) ? padding : -padding;
        let anchor = ((isOpposed && isLabelInside) || (!isOpposed && !isLabelInside)) ? 'end' : 'start';
        let labelElement = chart.renderer.createGroup({ id: chart.element.id + 'AxisLabels' + index });
        for (let i = 0, len = axis.visibleLabels.length; i < len; i++) {
            pointX = isLabelInside ? (rect.x - padding) : (rect.x + padding);
            elementSize = axis.visibleLabels[i].size;
            pointY = valueToCoefficient(axis.visibleLabels[i].value, axis) * rect.height;
            pointY = Math.floor((pointY * -1) + (rect.y + rect.height));
            options = new TextOption(chart.element.id + index + '_AxisLabel_' + i, pointX, pointY + (elementSize.height / 4), anchor, axis.visibleLabels[i].text);
            if (axis.edgeLabelPlacement) {
                switch (axis.edgeLabelPlacement) {
                    case 'None':
                        break;
                    case 'Hide':
                        if (((i === 0 || (axis.isInversed && i === len - 1)) && options.y > rect.y + rect.height) ||
                            (((i === len - 1) || (axis.isInversed && i === 0)) && options.y - elementSize.height / 2 < rect.y)) {
                            options.text = '';
                        }
                        break;
                    case 'Shift':
                        if ((i === 0 || (axis.isInversed && i === len - 1)) && options.y > rect.y + rect.height) {
                            options.y = pointY = rect.y + rect.height;
                        }
                        else if (((i === len - 1) || (axis.isInversed && i === 0)) && (options.y - elementSize.height / 2 < rect.y)) {
                            options.y = pointY = rect.y + elementSize.height / 2;
                        }
                        break;
                }
            }
            textElement(options, axis.labelStyle, axis.labelStyle.color || chart.themeStyle.axisLabel, labelElement);
        }
        if (!chart.delayRedraw) {
            parent.appendChild(labelElement);
        }
        else if (axis.visible) {
            this.createZoomingLabel(this.chart, labelElement, axis, index, rect);
        }
    }
    /**
     * To render the axis label border.
     * @return {void}
     * @private
     */
    drawYAxisBorder(axis, index, parent, rect) {
        if (axis.border.width > 0) {
            let startY;
            let pointY;
            let gap = (rect.height / axis.visibleRange.delta) * (axis.valueType === 'DateTime' ? axis.dateTimeInterval
                : axis.visibleRange.interval);
            let endY;
            let length = axis.maxLabelSize.width + 10 + ((axis.tickPosition === axis.labelPosition) ?
                axis.majorTickLines.height : 0);
            let labelBorder = '';
            let ticksbwtLabel = (axis.valueType === 'Category' && axis.labelPlacement === 'BetweenTicks') ? -0.5 : 0;
            let endX = ((axis.opposedPosition && axis.labelPosition === 'Inside') ||
                (!axis.opposedPosition && axis.labelPosition === 'Outside')) ? rect.x - length : rect.x + length;
            for (let i = 0; i < axis.visibleLabels.length; i++) {
                pointY = valueToCoefficient(axis.visibleLabels[i].value + ticksbwtLabel, axis);
                pointY = (axis.isInversed ? (1 - pointY) : pointY) * rect.height;
                if (axis.valueType === 'Category' && axis.labelPlacement === 'BetweenTicks') {
                    startY = Math.floor((pointY * -1) + (rect.y + rect.height));
                    endY = Math.floor((pointY * -1) - (gap) + (rect.y + rect.height));
                }
                else {
                    startY = Math.floor((pointY * -1) + gap / 2 + (rect.y + rect.height));
                    endY = Math.floor((pointY * -1) - gap / 2 + (rect.y + rect.height));
                }
                switch (axis.border.type) {
                    case 'Rectangle':
                    case 'WithoutTopBorder':
                        if (startY > (rect.y + rect.height)) {
                            labelBorder += ('M' + ' ' + endX + ' ' + (rect.y + rect.height) + ' ' + 'L' + ' ' + endX + ' ' + endY + ' ');
                        }
                        else if (Math.floor(rect.y) > (endY)) {
                            labelBorder += ('M' + ' ' + rect.x + ' ' + startY + ' ' + 'L' + ' ' + endX
                                + ' ' + startY + ' ' + 'L' + ' ' + endX + ' ' + (rect.y) + ' ');
                        }
                        else {
                            labelBorder += ('M' + ' ' + rect.x + ' ' + startY + ' ' + 'L' + ' ' + endX +
                                ' ' + startY + ' ' + 'L' + ' ' + endX + ' ' + endY + ' ');
                            if (i === axis.visibleLabels.length - 1) {
                                labelBorder += ('M' + ' ' + rect.x + ' ' + endY + ' ' + 'L' + ' ' +
                                    endX + ' ' + endY + ' ');
                            }
                        }
                        break;
                    case 'WithoutTopandBottomBorder':
                        if (!(startY > rect.y + rect.height) && !((endY) < Math.floor(rect.y))) {
                            labelBorder += ('M' + ' ' + rect.x + ' ' + startY + ' ' + 'L' + ' ' + endX +
                                ' ' + startY + ' ' + 'M' + ' ' + endX + ' ' + endY + ' ' +
                                'L' + ' ' + rect.x + ' ' + endY);
                        }
                        break;
                }
            }
            labelBorder += (axis.border.type === 'Rectangle') ? ('M' + ' ' + rect.x + ' ' + rect.y + ' ' + 'L' + ' ' +
                rect.x + ' ' + (rect.y + rect.height) + ' ') : '';
            if (labelBorder !== '') {
                this.createAxisBorderElement(axis, index, labelBorder, parent);
            }
        }
        if (axis.multiLevelLabels.length > 0 && this.chart.multiLevelLabelModule) {
            this.chart.multiLevelLabelModule.renderYAxisMultiLevelLabels(axis, index, parent, rect);
        }
    }
    drawYAxisTitle(axis, index, parent, rect) {
        let chart = this.chart;
        let labelRotation = (axis.opposedPosition) ? 90 : -90;
        let elementSize = measureText(axis.title, axis.titleStyle);
        let padding = (axis.tickPosition === 'Inside' ? 0 : axis.majorTickLines.height + this.padding) +
            (axis.labelPosition === 'Inside' ? 0 :
                (axis.maxLabelSize.width + axis.multiLevelLabelHeight + this.padding));
        padding = axis.opposedPosition ? padding : -padding;
        let x = rect.x + padding;
        let y = rect.y + rect.height / 2;
        let options = new TextOption(chart.element.id + '_AxisTitle_' + index, x, y - this.padding, 'middle', axis.title, 'rotate(' + labelRotation + ',' + (x) + ',' + (y) + ')');
        let element = textElement(options, axis.titleStyle, axis.titleStyle.color || chart.themeStyle.axisTitle, parent);
        element.setAttribute('aria-label', axis.description || axis.title);
        element.setAttribute('tabindex', axis.tabIndex.toString());
    }
    drawXAxisGridLine(axis, index, parent, rect) {
        let chart = this.chart;
        let tempInterval;
        let pointX = 0;
        let majorGrid = '';
        let majorTick = '';
        let minorGird = '';
        let minorTick = '';
        let minorDirection;
        let tickSize = (axis.opposedPosition) ? -axis.majorTickLines.height : axis.majorTickLines.height;
        let axisLineSize = (axis.opposedPosition) ? -axis.lineStyle.width / 2 : axis.lineStyle.width / 2;
        let ticksbwtLabel = (axis.valueType.indexOf('Category') > -1 && axis.labelPlacement === 'BetweenTicks') ?
            0.5 : 0;
        let length = axis.visibleLabels.length;
        let ticks = axis.tickPosition === 'Inside' ? (rect.y - tickSize - axisLineSize) : (rect.y + tickSize + axisLineSize);
        if (axis.valueType.indexOf('Category') > -1 && length > 0 && axis.labelPlacement === 'BetweenTicks') {
            length += 1;
        }
        //Gridlines
        for (let i = 0; i < length; i++) {
            if (axis.valueType !== 'DateTimeCategory') {
                tempInterval = axis.visibleLabels[i] ? axis.visibleLabels[i].value - ticksbwtLabel
                    : (axis.visibleLabels[i - 1].value + axis.visibleRange.interval) - ticksbwtLabel;
            }
            else {
                tempInterval = axis.visibleLabels[i] ?
                    axis.visibleLabels[i].value - ticksbwtLabel : axis.visibleRange.max;
            }
            pointX = (valueToCoefficient(tempInterval, axis) * rect.width) + rect.x;
            if (pointX >= rect.x && (rect.x + rect.width) >= pointX) {
                if (inside(tempInterval, axis.visibleRange) || this.isBorder(axis, i, pointX)) {
                    majorGrid = majorGrid.concat('M ' + pointX + ' ' + (this.seriesClipRect.y + this.seriesClipRect.height) +
                        ' L ' + pointX + ' ' + this.seriesClipRect.y + ' ');
                }
                majorTick = majorTick.concat('M ' + (pointX) + ' ' + (rect.y + axisLineSize) +
                    ' L ' + (pointX) + ' ' + ticks + ' ');
            }
            if (axis.minorTicksPerInterval > 0 && (axis.minorGridLines.width > 0 || axis.minorTickLines.width > 0)) {
                minorDirection = this.drawAxisMinorLine(axis, tempInterval, minorGird, minorTick, rect, i);
                minorGird = minorDirection[0];
                minorTick = minorDirection[1];
            }
        }
        this.renderGridLine(axis, index, majorGrid, minorGird);
        this.renderTickLine(axis, index, majorTick, minorTick, parent);
    }
    drawAxisMinorLine(axis, tempInterval, minorGird, minorTick, rect, labelIndex) {
        let value = tempInterval;
        let coor = 0;
        let position = 0;
        let range = axis.visibleRange;
        let isTickInside = axis.tickPosition === 'Inside';
        let direction = [];
        let tickSize = axis.opposedPosition ? -axis.minorTickLines.height : axis.minorTickLines.height;
        let logStart;
        let logEnd;
        let logInterval = 1;
        let logPosition = 1;
        let ticksX = isTickInside ? (rect.y - tickSize) : (rect.y + tickSize);
        let ticksY = isTickInside ? (rect.x + tickSize) : (rect.x - tickSize);
        if (axis.valueType === 'Logarithmic') {
            logStart = Math.pow(axis.logBase, value - range.interval);
            logEnd = Math.pow(axis.logBase, value);
            logInterval = (logEnd - logStart) / (axis.minorTicksPerInterval + 1);
            logPosition = logStart + logInterval;
        }
        if (axis.orientation === 'Horizontal') {
            for (let j = 0; j < axis.minorTicksPerInterval; j++) {
                value = this.findLogNumeric(axis, logPosition, logInterval, value, labelIndex);
                logPosition += logInterval;
                if (inside(value, range)) {
                    position = ((value - range.min) / (range.max - range.min));
                    position = Math.ceil((axis.isInversed ? (1 - position) : position) * rect.width);
                    coor = (Math.floor(position + rect.x));
                    minorGird = minorGird.concat('M' + ' ' + coor + ' ' + (this.seriesClipRect.y)
                        + 'L ' + coor + ' ' + (this.seriesClipRect.y + this.seriesClipRect.height));
                    coor = (Math.floor(position + rect.x));
                    minorTick = minorTick.concat('M' + ' ' + coor + ' ' + (rect.y)
                        + 'L ' + coor + ' ' + ticksX);
                }
            }
        }
        else {
            tickSize = axis.opposedPosition ? axis.minorTickLines.height : -axis.minorTickLines.height;
            for (let j = 0; j < axis.minorTicksPerInterval; j++) {
                value = this.findLogNumeric(axis, logPosition, logInterval, value, labelIndex);
                if (inside(value, range)) {
                    position = Math.ceil(((value - range.min) / (range.max - range.min)) * rect.height) * -1;
                    coor = (Math.floor(position + rect.y + rect.height));
                    minorGird = minorGird.concat('M' + ' ' + (this.seriesClipRect.x) + ' ' + coor
                        + 'L ' + (this.seriesClipRect.x + this.seriesClipRect.width) + ' ' + coor);
                    coor = (Math.floor(position + rect.y + rect.height));
                    minorTick = minorTick.concat('M' + ' ' + rect.x + ' ' + coor + 'L ' + ticksY + ' ' + coor);
                }
                logPosition += logInterval;
            }
        }
        direction.push(minorGird);
        direction.push(minorTick);
        return direction;
    }
    findLogNumeric(axis, logPosition, logInterval, value, labelIndex) {
        let range = axis.visibleRange;
        if (axis.valueType === 'Logarithmic') {
            value = logBase(logPosition, axis.logBase);
        }
        else if (axis.valueType === 'DateTime') {
            value += axis.dateTimeInterval / (axis.minorTicksPerInterval + 1);
        }
        else if (axis.valueType === 'DateTimeCategory') {
            let padding = axis.labelPlacement === 'BetweenTicks' ? 0.5 : 0;
            value += ((axis.visibleLabels[labelIndex + 1] ?
                axis.visibleLabels[labelIndex + 1].value - padding : axis.visibleRange.max) -
                (axis.visibleLabels[labelIndex] ?
                    axis.visibleLabels[labelIndex].value - padding : axis.visibleRange.min)) /
                (axis.minorTicksPerInterval + 1);
        }
        else {
            value += range.interval / (axis.minorTicksPerInterval + 1);
        }
        return value;
    }
    /**
     * To render the axis label.
     * @return {void}
     * @private
     */
    drawXAxisLabels(axis, index, parent, rect) {
        let chart = this.chart;
        let pointX = 0;
        let pointY = 0;
        let elementSize;
        let labelElement = chart.renderer.createGroup({ id: chart.element.id + 'AxisLabels' + index });
        let labelPosition = axis.labelPosition;
        let islabelInside = axis.labelPosition === 'Inside';
        let isTickInside = axis.tickPosition === 'Inside';
        let isOpposed = axis.opposedPosition;
        let tickSpace = axis.labelPosition === axis.tickPosition ? axis.majorTickLines.height : 0;
        let labelPadding;
        let padding = tickSpace + this.padding + axis.lineStyle.width / 2;
        let rotateSize;
        let diffHeight;
        let angle;
        let anglePadding = ((axis.angle === 90 || axis.angle === -90)) ? -2 : 0;
        let options;
        let yLocation;
        let previousEnd = axis.isInversed ? (rect.x + rect.width) : rect.x;
        let width = 0;
        let length = axis.visibleLabels.length;
        let intervalLength;
        let label;
        for (let i = 0, len = length; i < len; i++) {
            label = axis.visibleLabels[i];
            pointX = (valueToCoefficient(label.value, axis) * rect.width) + rect.x;
            elementSize = label.size;
            intervalLength = rect.width / length;
            width = ((axis.labelIntersectAction === 'Trim' || axis.labelIntersectAction === 'Wrap')
                && elementSize.width > intervalLength) ? intervalLength : elementSize.width;
            pointX -= width / 2;
            if (islabelInside && axis.angle) {
                pointY = isOpposed ? (rect.y + padding) : (rect.y - padding);
            }
            else {
                labelPadding = (isOpposed && !islabelInside) || (!isOpposed && islabelInside) ?
                    -(padding + (axis.angle ? (3 * (elementSize.height / 4) + (2 * axis.maxLabelSize.height / 5)) :
                        (label.index > 1 ? (2 * (elementSize.height / 4)) : 0)))
                    : padding + (axis.angle ? (3 * (elementSize.height / 4)) + (2 * axis.maxLabelSize.height / 5)
                        : (3 * (elementSize.height / 4)));
                pointY = (rect.y + (labelPadding * label.index));
            }
            options = new TextOption(chart.element.id + index + '_AxisLabel_' + i, pointX, pointY, '');
            if (axis.edgeLabelPlacement) {
                switch (axis.edgeLabelPlacement) {
                    case 'None':
                        break;
                    case 'Hide':
                        if (((i === 0 || (axis.isInversed && i === len - 1)) && options.x < rect.x) ||
                            ((i === len - 1 || (axis.isInversed && i === 0)) && (options.x + width > rect.x + rect.width))) {
                            continue;
                        }
                        break;
                    case 'Shift':
                        if ((i === 0 || (axis.isInversed && i === len - 1)) && options.x < rect.x) {
                            intervalLength -= (rect.x - options.x);
                            options.x = pointX = rect.x;
                        }
                        else if ((i === len - 1 || (axis.isInversed && i === 0)) && ((options.x + width) > rect.x + rect.width)) {
                            if (elementSize.width > intervalLength && axis.labelIntersectAction === 'Trim') {
                                intervalLength -= (options.x + width - (rect.x + rect.width));
                            }
                            else {
                                intervalLength = width;
                            }
                            options.x = pointX = rect.x + rect.width - intervalLength;
                        }
                        break;
                }
            }
            options.text = this.findAxisLabel(axis, label.text, intervalLength);
            if (axis.angle % 360 === 0 && axis.labelIntersectAction === 'Hide' && i !== 0 &&
                (!axis.isInversed ? options.x <= previousEnd : options.x + width >= previousEnd)) {
                continue;
            }
            previousEnd = axis.isInversed ? options.x : options.x + width;
            if (axis.angle !== 0) {
                angle = (axis.angle > 360) ? axis.angle % 360 : axis.angle;
                rotateSize = rotateTextSize(axis.labelStyle, label.text, angle, chart);
                diffHeight = islabelInside ? rotateSize.height :
                    axis.maxLabelSize.height - Math.ceil(rotateSize.height - elementSize.height);
                yLocation = axis.opposedPosition ? diffHeight / 2 : -diffHeight / 2;
                options.transform = 'rotate(' + angle + ',' + (pointX + width / 2 + anglePadding) + ','
                    + (pointY + yLocation) + ')';
                options.y += yLocation;
            }
            textElement(options, axis.labelStyle, axis.labelStyle.color || chart.themeStyle.axisLabel, labelElement, (axis.opposedPosition !== (axis.labelPosition === 'Inside'))).setAttribute('style', 'cursor: default');
        }
        if (!chart.delayRedraw) {
            parent.appendChild(labelElement);
        }
        else if (axis.visible) {
            this.createZoomingLabel(this.chart, labelElement, axis, index, rect);
        }
    }
    /**
     * To render the axis label border.
     * @return {void}
     * @private
     */
    drawXAxisBorder(axis, index, parent, axisRect) {
        if (axis.border.width > 0) {
            let startX;
            let startY = axisRect.y;
            let padding = 10;
            let pointX;
            let gap = (axisRect.width / axis.visibleRange.delta) * (axis.valueType === 'DateTime' ? axis.dateTimeInterval
                : axis.visibleRange.interval);
            let endX;
            let length = axis.maxLabelSize.height +
                ((axis.tickPosition === axis.labelPosition) ? axis.majorTickLines.height : 0);
            let labelBorder = '';
            let ticksbwtLabel = (axis.valueType === 'Category' && axis.labelPlacement === 'BetweenTicks') ? -0.5 : 0;
            let endY = ((axis.opposedPosition && axis.labelPosition === 'Inside') ||
                (!axis.opposedPosition && axis.labelPosition === 'Outside')) ?
                (axisRect.y + length + padding) : (axisRect.y - length - padding);
            for (let i = 0; i < axis.visibleLabels.length; i++) {
                pointX = valueToCoefficient(axis.visibleLabels[i].value + ticksbwtLabel, axis);
                pointX = (axis.isInversed ? (1 - pointX) : pointX) * axisRect.width;
                if (axis.valueType === 'Category' && axis.labelPlacement === 'BetweenTicks') {
                    startX = pointX + axisRect.x;
                    endX = pointX + (gap) + axisRect.x;
                }
                else {
                    startX = pointX - gap / 2 + axisRect.x;
                    endX = pointX + gap / 2 + axisRect.x;
                }
                switch (axis.border.type) {
                    case 'Rectangle':
                    case 'WithoutTopBorder':
                        if (startX < axisRect.x) {
                            labelBorder += ('M' + ' ' + axisRect.x + ' ' + endY + ' ' + 'L' + ' ' + endX + ' ' + endY + ' ');
                        }
                        else if (Math.floor(endX) > axisRect.width + axisRect.x) {
                            labelBorder += ('M' + ' ' + startX + ' ' + startY + ' ' + 'L' + ' ' + startX + ' ' + endY + ' ' +
                                'L' + ' ' + (axisRect.width + axisRect.x) + ' ' + endY + ' ');
                        }
                        else {
                            labelBorder += ('M' + ' ' + startX + ' ' + startY + ' ' + 'L' + ' ' + startX + ' ' +
                                endY + ' ' + 'L' + ' ' + endX + ' ' + endY + ' ');
                            if (i === axis.visibleLabels.length - 1) {
                                labelBorder += ('M' + ' ' + endX + ' ' + startY + ' ' + 'L' + ' ' + endX + ' ' + endY + ' ' +
                                    'M ' + endX + ' ' + endY + ' L ' + (axisRect.width + axisRect.x) + ' ' + endY);
                            }
                        }
                        break;
                    case 'WithoutTopandBottomBorder':
                        if (!(startX < axisRect.x) && !(Math.floor(endX) > axisRect.width + axisRect.x)) {
                            labelBorder += ('M' + ' ' + startX + ' ' + startY + ' ' + 'L' + ' ' + startX + ' ' + endY + ' ' +
                                'M ' + endX + ' ' + startY + ' L ' + endX + ' ' + endY);
                        }
                        break;
                }
            }
            labelBorder += (axis.border.type === 'Rectangle' ? ('M ' + ' ' + axisRect.x + ' ' + startY + 'L' + ' ' +
                (axisRect.x + axisRect.width) + ' ' + startY) : '');
            if (labelBorder !== '') {
                this.createAxisBorderElement(axis, index, labelBorder, parent);
            }
        }
        if (this.chart.multiLevelLabelModule && axis.multiLevelLabels.length > 0) {
            this.chart.multiLevelLabelModule.renderXAxisMultiLevelLabels(axis, index, parent, axisRect);
        }
    }
    /**
     * To create border element for axis.
     * @return {void}
     * @private
     */
    createAxisBorderElement(axis, index, labelBorder, parent) {
        let borderElement = this.chart.renderer.drawPath(new PathOption(this.chart.element.id + '_BorderLine_' + index, 'transparent', axis.border.width, axis.border.color || this.chart.themeStyle.axisLine, 1, '', labelBorder));
        borderElement.setAttribute('style', 'pointer-events: none');
        parent.appendChild(borderElement);
    }
    findAxisLabel(axis, label, width) {
        switch (axis.labelIntersectAction) {
            case 'Trim':
                return textTrim(width, label, axis.labelStyle);
            default:
                return label;
        }
    }
    drawXAxisTitle(axis, index, parent, rect) {
        let chart = this.chart;
        let elementSize = measureText(axis.title, axis.titleStyle);
        let padding = (axis.tickPosition === 'Inside' ? 0 : axis.majorTickLines.height + this.padding) +
            (axis.labelPosition === 'Inside' ? 0 :
                axis.maxLabelSize.height + axis.multiLevelLabelHeight + this.padding);
        padding = axis.opposedPosition ? -(padding + elementSize.height / 4) : (padding + (3 * elementSize.height / 4));
        let options = new TextOption(chart.element.id + '_AxisTitle_' + index, rect.x + rect.width / 2, rect.y + padding, 'middle', axis.title);
        let element = textElement(options, axis.titleStyle, axis.titleStyle.color || chart.themeStyle.axisTitle, parent);
        element.setAttribute('aria-label', axis.description || axis.title);
        element.setAttribute('tabindex', axis.tabIndex.toString());
    }
    renderTickLine(axis, index, majorTick, minorTick, parent) {
        let options;
        let chart = this.chart;
        if (axis.majorTickLines.width > 0 && axis.visible) {
            options = new PathOption(chart.element.id + '_MajorTickLine_' + index, 'transparent', axis.majorTickLines.width, axis.majorTickLines.color || chart.themeStyle.majorTickLine, null, null, majorTick);
            this.htmlObject = chart.renderer.drawPath(options);
            parent.appendChild(this.htmlObject);
        }
        if (axis.minorTickLines.width > 0 && axis.visible) {
            options = new PathOption(chart.element.id + '_MinorTickLine_' + index, 'transparent', axis.minorTickLines.width, axis.minorTickLines.color || chart.themeStyle.minorTickLine, null, null, minorTick);
            this.htmlObject = chart.renderer.drawPath(options);
            parent.appendChild(this.htmlObject);
        }
    }
    renderGridLine(axis, index, majorGrid, minorGird) {
        let chart = this.chart;
        let options;
        if (axis.majorGridLines.width > 0) {
            options = new PathOption(chart.element.id + '_MajorGridLine_' + index, 'transparent', axis.majorGridLines.width, axis.majorGridLines.color || chart.themeStyle.majorGridLine, null, axis.majorGridLines.dashArray, majorGrid);
            this.htmlObject = chart.renderer.drawPath(options);
            this.element.appendChild(this.htmlObject);
        }
        if (axis.minorGridLines.width > 0) {
            options = new PathOption(chart.element.id + '_MinorGridLine_' + index, 'transparent', axis.minorGridLines.width, axis.minorGridLines.color || chart.themeStyle.minorGridLine, null, axis.minorGridLines.dashArray, minorGird);
            this.htmlObject = chart.renderer.drawPath(options);
            this.element.appendChild(this.htmlObject);
        }
    }
    findParentNode(chart, label, axis, index) {
        if (axis.crossAt === null) {
            return document.getElementById(chart.element.id + 'AxisGroup' + index + 'Inside');
        }
        if (document.getElementById(chart.element.id + 'AxisGroup' + index + 'Inside').contains(document.getElementById(label.id))) {
            return document.getElementById(chart.element.id + 'AxisGroup' + index + 'Inside');
        }
        else {
            return document.getElementById(chart.element.id + 'AxisGroup' + index + 'Outside');
        }
    }
    createZoomingLabel(chart, labelElement, axis, index, rect) {
        let parentNode = this.findParentNode(chart, labelElement, axis, index);
        labelElement.setAttribute('opacity', '0.3');
        let zoomElement = chart.renderer.createGroup({
            id: chart.element.id + 'AxisLabels_Zoom' + index
        });
        zoomElement = createZoomingLabels(chart, axis, zoomElement, index, axis.orientation === 'Vertical', rect);
        parentNode.replaceChild(labelElement, document.getElementById(labelElement.id));
        if (getElement(chart.element.id + 'AxisLabels_Zoom' + index)) {
            parentNode.replaceChild(zoomElement, document.getElementById(zoomElement.id));
        }
        else {
            parentNode.appendChild(zoomElement);
        }
    }
}

/**
 * To get the data on mouse move.
 * @private
 */
class ChartData {
    /**
     * Constructor for the data.
     * @private
     */
    constructor(chart) {
        /** @private */
        this.currentPoints = [];
        /** @private */
        this.previousPoints = [];
        this.chart = chart;
        this.lierIndex = 0;
    }
    /**
     * Method to get the Data.
     * @private
     */
    getData() {
        let chart = this.chart;
        let point = null;
        let series = null;
        let width;
        let height;
        for (let len = chart.visibleSeries.length, i = len - 1; i >= 0; i--) {
            series = chart.visibleSeries[i];
            width = (series.type === 'Scatter' || series.drawType === 'Scatter' || (!series.isRectSeries && series.marker.visible))
                ? (series.marker.height + 5) / 2 : 0;
            height = (series.type === 'Scatter' || series.drawType === 'Scatter' || (!series.isRectSeries && series.marker.visible))
                ? (series.marker.width + 5) / 2 : 0;
            if (series.visible && withInBounds(chart.mouseX, chart.mouseY, series.clipRect, width, height)) {
                point = this.getRectPoint(series, series.clipRect, chart.mouseX, chart.mouseY);
            }
            if (point) {
                return new PointData(point, series);
            }
        }
        return new PointData(point, series);
    }
    isSelected(chart) {
        return (chart.selectionMode.indexOf('Drag') > -1 && chart.selectionModule && chart.selectionModule.rectPoints !== null);
    }
    getRectPoint(series, rect, x, y) {
        let fromCenterX;
        let fromCenterY;
        let clickAngle;
        let arcAngle = 0;
        let startAngle;
        let endAngle;
        let distanceFromCenter;
        for (let point of series.points) {
            if (!point.regionData) {
                if (!point.regions || !point.regions.length) {
                    continue;
                }
            }
            if (point.regionData && this.chart.chartAreaType === 'PolarRadar' && series.drawType.indexOf('Column') > -1) {
                fromCenterX = x - (series.clipRect.width / 2 + series.clipRect.x);
                fromCenterY = y - (series.clipRect.height / 2 + series.clipRect.y);
                arcAngle = 2 * Math.PI * (point.regionData.currentXPosition < 0 ? 1 + point.regionData.currentXPosition
                    : point.regionData.currentXPosition);
                clickAngle = (Math.atan2(fromCenterY, fromCenterX) + 0.5 * Math.PI - arcAngle) % (2 * Math.PI);
                clickAngle = clickAngle < 0 ? 2 * Math.PI + clickAngle : clickAngle;
                clickAngle = clickAngle + 2 * Math.PI * series.chart.primaryXAxis.startAngle;
                startAngle = point.regionData.startAngle;
                startAngle -= arcAngle;
                startAngle = startAngle < 0 ? 2 * Math.PI + startAngle : startAngle;
                endAngle = point.regionData.endAngle;
                endAngle -= arcAngle;
                endAngle = endAngle < 0 ? 2 * Math.PI + endAngle : endAngle;
                distanceFromCenter = Math.sqrt(Math.pow(Math.abs(fromCenterX), 2) + Math.pow(Math.abs(fromCenterY), 2));
                if (clickAngle >= startAngle && clickAngle <= endAngle &&
                    (((distanceFromCenter >= point.regionData.innerRadius && distanceFromCenter <= point.regionData.radius) ||
                        (distanceFromCenter <= point.regionData.innerRadius && distanceFromCenter >= point.regionData.radius))
                        && distanceFromCenter <= series.chart.radius)) {
                    return point;
                }
            }
            else if (this.checkRegionContainsPoint(point.regions, rect, x, y)) {
                return point;
            }
        }
        return null;
    }
    /**
     * Checks whether the region contains a point
     */
    checkRegionContainsPoint(regionRect, rect, x, y) {
        return regionRect.some((region, index) => {
            this.lierIndex = index;
            return withInBounds(x, y, new Rect((this.chart.chartAreaType === 'Cartesian' ? rect.x : 0) + region.x, (this.chart.chartAreaType === 'Cartesian' ? rect.y : 0) + region.y, region.width, region.height));
        });
    }
    getClosest(series, value) {
        let xData = series.xData;
        let closest;
        if (value >= series.xMin - 0.5 && value <= series.xMax + 0.5) {
            for (let data of xData) {
                if (closest == null || Math.abs(data - value) < Math.abs(closest - value)) {
                    closest = data;
                }
            }
        }
        return closest;
    }
    getClosestX(chart, series) {
        let value;
        let rect = series.clipRect;
        if (!chart.requireInvertedAxis) {
            value = getValueXByPoint(chart.mouseX - rect.x, rect.width, series.xAxis);
        }
        else {
            value = getValueYByPoint(chart.mouseY - rect.y, rect.height, series.xAxis);
        }
        let closest = this.getClosest(series, value);
        for (let point of series.points) {
            if (closest === point.xValue && point.visible) {
                return new PointData(point, series);
            }
        }
        return null;
    }
}

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the data label in the series.
 */
class DataLabelSettings extends ChildProperty {
}
__decorate$4([
    Property(false)
], DataLabelSettings.prototype, "visible", void 0);
__decorate$4([
    Property(null)
], DataLabelSettings.prototype, "name", void 0);
__decorate$4([
    Property('transparent')
], DataLabelSettings.prototype, "fill", void 0);
__decorate$4([
    Property(1)
], DataLabelSettings.prototype, "opacity", void 0);
__decorate$4([
    Property('Auto')
], DataLabelSettings.prototype, "position", void 0);
__decorate$4([
    Property(5)
], DataLabelSettings.prototype, "rx", void 0);
__decorate$4([
    Property(5)
], DataLabelSettings.prototype, "ry", void 0);
__decorate$4([
    Property('Center')
], DataLabelSettings.prototype, "alignment", void 0);
__decorate$4([
    Complex({ width: null, color: null }, Border)
], DataLabelSettings.prototype, "border", void 0);
__decorate$4([
    Complex({ left: 5, right: 5, top: 5, bottom: 5 }, Margin)
], DataLabelSettings.prototype, "margin", void 0);
__decorate$4([
    Complex({ size: '11px', color: null }, Font)
], DataLabelSettings.prototype, "font", void 0);
__decorate$4([
    Property(null)
], DataLabelSettings.prototype, "template", void 0);
/**
 *  Configures the marker in the series.
 */
class MarkerSettings extends ChildProperty {
}
__decorate$4([
    Property(false)
], MarkerSettings.prototype, "visible", void 0);
__decorate$4([
    Property('Circle')
], MarkerSettings.prototype, "shape", void 0);
__decorate$4([
    Property('')
], MarkerSettings.prototype, "imageUrl", void 0);
__decorate$4([
    Property(5)
], MarkerSettings.prototype, "height", void 0);
__decorate$4([
    Property(5)
], MarkerSettings.prototype, "width", void 0);
__decorate$4([
    Complex({ width: 2, color: null }, Border)
], MarkerSettings.prototype, "border", void 0);
__decorate$4([
    Property(null)
], MarkerSettings.prototype, "fill", void 0);
__decorate$4([
    Property(1)
], MarkerSettings.prototype, "opacity", void 0);
__decorate$4([
    Complex({}, DataLabelSettings)
], MarkerSettings.prototype, "dataLabel", void 0);
/**
 * Points model for the series.
 * @private
 */
class Points {
    constructor() {
        this.symbolLocations = null;
        this.regions = null;
        this.regionData = null;
        this.marker = {
            visible: true
        };
    }
}
/**
 * Defines the behavior of the Trendlines
 */
class Trendline extends ChildProperty {
    constructor() {
        super(...arguments);
        /** @private */
        this.clipRect = new Rect(0, 0, 0, 0);
    }
    /** @private */
    setDataSource(series, chart) {
        if (series) {
            this.points = series.points;
        }
        let type = firstToLowerCase(this.type);
        chart.trendLineModule.initDataSource(this, chart);
        chart.visibleSeriesCount++;
    }
}
__decorate$4([
    Property('')
], Trendline.prototype, "name", void 0);
__decorate$4([
    Property('Linear')
], Trendline.prototype, "type", void 0);
__decorate$4([
    Property(2)
], Trendline.prototype, "period", void 0);
__decorate$4([
    Property(2)
], Trendline.prototype, "polynomialOrder", void 0);
__decorate$4([
    Property(0)
], Trendline.prototype, "backwardForecast", void 0);
__decorate$4([
    Property(0)
], Trendline.prototype, "forwardForecast", void 0);
__decorate$4([
    Complex({}, Animation$1)
], Trendline.prototype, "animation", void 0);
__decorate$4([
    Complex({}, MarkerSettings)
], Trendline.prototype, "marker", void 0);
__decorate$4([
    Property(true)
], Trendline.prototype, "enableTooltip", void 0);
__decorate$4([
    Property(null)
], Trendline.prototype, "intercept", void 0);
__decorate$4([
    Property('')
], Trendline.prototype, "fill", void 0);
__decorate$4([
    Property(1)
], Trendline.prototype, "width", void 0);
__decorate$4([
    Property('SeriesType')
], Trendline.prototype, "legendShape", void 0);
/**
 * Configures Error bar in series.
 */
class ErrorBarCapSettings extends ChildProperty {
}
__decorate$4([
    Property(1)
], ErrorBarCapSettings.prototype, "width", void 0);
__decorate$4([
    Property(10)
], ErrorBarCapSettings.prototype, "length", void 0);
__decorate$4([
    Property(null)
], ErrorBarCapSettings.prototype, "color", void 0);
__decorate$4([
    Property(1)
], ErrorBarCapSettings.prototype, "opacity", void 0);
class ChartSegment extends ChildProperty {
}
__decorate$4([
    Property(null)
], ChartSegment.prototype, "value", void 0);
__decorate$4([
    Property(null)
], ChartSegment.prototype, "color", void 0);
__decorate$4([
    Property('0')
], ChartSegment.prototype, "dashArray", void 0);
class ErrorBarSettings extends ChildProperty {
}
__decorate$4([
    Property(false)
], ErrorBarSettings.prototype, "visible", void 0);
__decorate$4([
    Property('Fixed')
], ErrorBarSettings.prototype, "type", void 0);
__decorate$4([
    Property('Both')
], ErrorBarSettings.prototype, "direction", void 0);
__decorate$4([
    Property('Vertical')
], ErrorBarSettings.prototype, "mode", void 0);
__decorate$4([
    Property(null)
], ErrorBarSettings.prototype, "color", void 0);
__decorate$4([
    Property(1)
], ErrorBarSettings.prototype, "verticalError", void 0);
__decorate$4([
    Property(1)
], ErrorBarSettings.prototype, "width", void 0);
__decorate$4([
    Property(1)
], ErrorBarSettings.prototype, "horizontalError", void 0);
__decorate$4([
    Property(3)
], ErrorBarSettings.prototype, "verticalPositiveError", void 0);
__decorate$4([
    Property(3)
], ErrorBarSettings.prototype, "verticalNegativeError", void 0);
__decorate$4([
    Property(1)
], ErrorBarSettings.prototype, "horizontalPositiveError", void 0);
__decorate$4([
    Property(1)
], ErrorBarSettings.prototype, "horizontalNegativeError", void 0);
__decorate$4([
    Complex(null, ErrorBarCapSettings)
], ErrorBarSettings.prototype, "errorBarCap", void 0);
/**
 * Defines the common behavior of Series and Technical Indicators
 */
class SeriesBase extends ChildProperty {
    constructor() {
        /**
         * The DataSource field that contains the x value.
         * It is applicable for series and technical indicators
         * @default ''
         */
        super(...arguments);
        /** @private */
        this.currentViewData = [];
        /** @private */
        this.clipRect = new Rect(0, 0, 0, 0);
        /** @private */
        this.seriesType = 'XY';
    }
    /**
     * Process data for the series.
     * @hidden
     */
    processJsonData() {
        let i = 0;
        let len = Object.keys(this.currentViewData).length;
        let point = new Points();
        let textMappingName = this instanceof Series && this.marker.dataLabel.name ?
            this.marker.dataLabel.name : '';
        if (this instanceof Series && this.type === 'Waterfall') {
            this.chart[firstToLowerCase(this.type) + 'SeriesModule'].
                processWaterfallData(this.currentViewData, this);
        }
        this.points = [];
        this.xMin = Infinity;
        this.xMax = -Infinity;
        this.yMin = Infinity;
        this.yMax = -Infinity;
        this.sizeMax = -Infinity;
        this.getSeriesType();
        if (this.xAxis.valueType === 'Category') {
            while (i < len) {
                point = this.dataPoint(i, textMappingName);
                this.pushCategoryData(point, i, point.x);
                this.pushData(point, i);
                this.setEmptyPoint(point, i);
                i++;
            }
        }
        else if (this.xAxis.valueType.indexOf('DateTime') > -1) {
            let option = {
                skeleton: 'full',
                type: 'dateTime'
            };
            let dateParser = this.chart.intl.getDateParser(option);
            let dateFormatter = this.chart.intl.getDateFormat(option);
            while (i < len) {
                point = this.dataPoint(i, textMappingName);
                point.x = new Date(DataUtil.parse.parseJson({ val: point.x }).val);
                if (this.xAxis.valueType === 'DateTime') {
                    point.xValue = Date.parse(dateParser(dateFormatter(point.x)));
                }
                else {
                    this.pushCategoryData(point, i, Date.parse(dateParser(dateFormatter(point.x))).toString());
                }
                this.pushData(point, i);
                this.setEmptyPoint(point, i);
                i++;
            }
        }
        else {
            while (i < len) {
                point = this.dataPoint(i, textMappingName);
                point.xValue = point.x;
                this.pushData(point, i);
                this.setEmptyPoint(point, i);
                i++;
            }
        }
        if (this instanceof Series) {
            if (this.type.indexOf('Spline') > -1 || (this.drawType.indexOf('Spline') > -1 && this.chart.chartAreaType === 'PolarRadar')) {
                let isArea = (this.type.indexOf('Area') > -1 || this.drawType === 'Area');
                this.chart['spline' + (isArea ? 'Area' : '') + 'SeriesModule'].findSplinePoint(this);
            }
        }
    }
    pushData(point, i) {
        point.index = i;
        point.yValue = point.y;
        // To find the min, max for the axis range.
        this.xMin = Math.min(this.xMin, point.xValue);
        this.xMax = Math.max(this.xMax, point.xValue);
        this.xData.push(point.xValue);
    }
    /** @private */
    dataPoint(i, textMappingName) {
        let point;
        this.points[i] = new Points();
        point = this.points[i];
        let currentViewData = this.currentViewData;
        point.x = getValue(this.xName, currentViewData[i]);
        point.high = getValue(this.high, currentViewData[i]);
        point.low = getValue(this.low, currentViewData[i]);
        point.open = getValue(this.open, currentViewData[i]);
        point.close = getValue(this.close, currentViewData[i]);
        point.volume = getValue(this.volume, currentViewData[i]);
        point.interior = getValue(this.pointColorMapping, currentViewData[i]);
        if (this instanceof Series) {
            point.y = getValue(this.yName, currentViewData[i]);
            point.size = getValue(this.size, currentViewData[i]);
            point.text = getValue(textMappingName, currentViewData[i]);
        }
        return point;
    }
    /**
     * To set empty point value based on empty point mode
     * @private
     */
    setEmptyPoint(point, i) {
        if (!this.findVisibility(point)) {
            point.visible = true;
            return null;
        }
        point.isEmpty = true;
        let mode = this instanceof Series ? this.emptyPointSettings.mode : 'Drop';
        switch (mode) {
            case 'Zero':
                point.visible = true;
                if (this instanceof Series && this.seriesType.indexOf('HighLow') > -1) {
                    point.high = point.low = 0;
                    if (this.seriesType.indexOf('HighLowOpenClose') > -1) {
                        point.open = point.close = 0;
                    }
                }
                else {
                    point.y = point.yValue = this.yData[i] = 0;
                }
                break;
            case 'Average':
                if (this instanceof Series) {
                    if (this.seriesType.indexOf('HighLow') > -1) {
                        point.high = (isNullOrUndefined(point.high) || isNaN(+point.high)) ? this.getAverage(this.high, i) : point.high;
                        point.low = (isNullOrUndefined(point.low) || isNaN(+point.low)) ? this.getAverage(this.low, i) : point.low;
                        if (this.seriesType.indexOf('HighLowOpenClose') > -1) {
                            point.open = (isNullOrUndefined(point.open) || isNaN(+point.open)) ? this.getAverage(this.open, i) : point.open;
                            point.close = (isNullOrUndefined(point.close) || isNaN(+point.close)) ? this.getAverage(this.close, i) :
                                point.close;
                        }
                    }
                    else {
                        point.y = point.yValue = this.yData[i] = this.getAverage(this.yName, i);
                    }
                }
                point.visible = true;
                break;
            case 'Drop':
            case 'Gap':
                this.yData[i] = null;
                point.visible = false;
                break;
        }
    }
    findVisibility(point) {
        let type = this instanceof Series ? this.seriesType : 'HighLowOpenClose';
        let yValues;
        switch (type) {
            case 'XY':
                this.setXYMinMax(point.yValue);
                this.yData.push(point.yValue);
                if (this instanceof Series && this.type === 'Bubble') {
                    this.sizeMax = Math.max(this.sizeMax, (isNullOrUndefined(point.size) || isNaN(+point.size)) ? this.sizeMax
                        : point.size);
                }
                return isNullOrUndefined(point.x) || (isNullOrUndefined(point.y) || isNaN(+point.y));
            case 'HighLow':
                this.setHiloMinMax(point.high, point.low);
                return isNullOrUndefined(point.x) || (isNullOrUndefined(point.low) || isNaN(+point.low)) ||
                    (isNullOrUndefined(point.high) || isNaN(+point.high));
            case 'HighLowOpenClose':
                this.setHiloMinMax(point.high, point.low);
                return isNullOrUndefined(point.x) || (isNullOrUndefined(point.low) || isNaN(+point.low)) ||
                    (isNullOrUndefined(point.open) || isNaN(+point.open)) || (isNullOrUndefined(point.close) || isNaN(+point.close))
                    || (isNullOrUndefined(point.high) || isNaN(+point.high));
            case 'BoxPlot':
                yValues = (point.y || [null]).filter((value) => {
                    return !isNullOrUndefined(value) && !isNaN(value);
                }).sort((a, b) => {
                    return a - b;
                });
                point.y = yValues;
                this.yMin = Math.min(this.yMin, Math.min(...yValues));
                this.yMax = Math.max(this.yMax, Math.max(...yValues));
                return !yValues.length;
        }
    }
    /**
     * To get Y min max for the provided point seriesType XY
     */
    setXYMinMax(yValue) {
        this.yMin = Math.min(this.yMin, (isNullOrUndefined(yValue) || isNaN(yValue)) ? this.yMin : yValue);
        this.yMax = Math.max(this.yMax, (isNullOrUndefined(yValue) || isNaN(yValue)) ? this.yMax : yValue);
    }
    /**
     * To get Y min max for the provided point seriesType XY
     */
    setHiloMinMax(high, low) {
        this.yMin = Math.min(this.yMin, Math.min((isNullOrUndefined(low) || isNaN(low)) ? this.yMin : low, (isNullOrUndefined(high) || isNaN(high)) ? this.yMin : high));
        this.yMax = Math.max(this.yMax, Math.max((isNullOrUndefined(low) || isNaN(low)) ? this.yMax : low, (isNullOrUndefined(high) || isNaN(high)) ? this.yMax : high));
    }
    /**
     * Finds the type of the series
     * @private
     */
    getSeriesType() {
        let type;
        if (this instanceof Series) {
            let seriesType = this.chart.chartAreaType === 'PolarRadar' ? this.drawType : this.type;
            if (seriesType) {
                switch (seriesType) {
                    case 'RangeColumn':
                    case 'RangeArea':
                    case 'Hilo':
                        type = 'HighLow';
                        break;
                    case 'HiloOpenClose':
                    case 'Candle':
                        type = 'HighLowOpenClose';
                        break;
                    case 'BoxAndWhisker':
                        type = 'BoxPlot';
                        break;
                    default:
                        type = 'XY';
                }
            }
        }
        this.seriesType = type;
    }
    /** @private */
    pushCategoryData(point, index, pointX) {
        if (!this.xAxis.isIndexed) {
            if (this.xAxis.labels.indexOf(pointX) < 0) {
                this.xAxis.labels.push(pointX);
            }
            point.xValue = this.xAxis.labels.indexOf(pointX);
        }
        else {
            this.xAxis.labels[index] ? this.xAxis.labels[index] += ', ' + pointX :
                this.xAxis.labels.push(pointX);
            point.xValue = index;
        }
    }
    /**
     * To find average of given property
     */
    getAverage(member, i, data = this.currentViewData) {
        let previous = data[i - 1] ? (data[i - 1][member] || 0) : 0;
        let next = data[i + 1] ? (data[i + 1][member] || 0) : 0;
        return (previous + next) / 2;
    }
    /**
     * To find the control points for spline.
     * @return {void}
     * @private
     */
    refreshDataManager(chart) {
        this.chart = chart;
        if (isNullOrUndefined(this.query) && !isNullOrUndefined(this.dataSource)) {
            this.dataManagerSuccess({ result: this.dataSource, count: this.dataSource.length }, chart, false);
            return;
        }
        let dataManager = this.dataModule.getData(this.dataModule.generateQuery().requiresCount());
        dataManager.then((e) => this.dataManagerSuccess(e, chart));
    }
    dataManagerSuccess(e, chart, isRemoteData = true) {
        this.currentViewData = e.result !== '' ? e.result : [];
        if (this instanceof Series) {
            let argsData = {
                name: seriesRender, series: this, data: this.currentViewData, fill: this.interior
            };
            this.chart.trigger(seriesRender, argsData);
            this.interior = argsData.fill;
            this.currentViewData = argsData.data;
        }
        this.processJsonData();
        this.recordsCount = e.count;
        this.refreshChart(isRemoteData);
    }
    refreshChart(isRemoteData) {
        let chart = this.chart;
        if (this instanceof Series) {
            chart.visibleSeriesCount += isRemoteData ? 1 : 0;
        }
        chart.refreshTechnicalIndicator(this);
        if (this instanceof Series && this.category !== 'TrendLine') {
            for (let trendline of this.trendlines) {
                trendline.setDataSource(this, chart);
            }
        }
        //if (chart.visibleSeries.length === (chart.visibleSeriesCount - chart.indicators.length)) {
        if (chart.visibleSeries.length === (chart.visibleSeriesCount)) {
            chart.refreshBound();
            chart.trigger('loaded', { chart: chart });
        }
        if (this instanceof Series) {
            chart.visibleSeriesCount += isRemoteData ? 0 : 1;
        }
    }
}
__decorate$4([
    Property('')
], SeriesBase.prototype, "xName", void 0);
__decorate$4([
    Property('')
], SeriesBase.prototype, "high", void 0);
__decorate$4([
    Property('')
], SeriesBase.prototype, "low", void 0);
__decorate$4([
    Property('')
], SeriesBase.prototype, "open", void 0);
__decorate$4([
    Property('')
], SeriesBase.prototype, "close", void 0);
__decorate$4([
    Property('')
], SeriesBase.prototype, "volume", void 0);
__decorate$4([
    Property('')
], SeriesBase.prototype, "pointColorMapping", void 0);
__decorate$4([
    Property(null)
], SeriesBase.prototype, "xAxisName", void 0);
__decorate$4([
    Property(null)
], SeriesBase.prototype, "yAxisName", void 0);
__decorate$4([
    Complex(null, Animation$1)
], SeriesBase.prototype, "animation", void 0);
__decorate$4([
    Property(null)
], SeriesBase.prototype, "fill", void 0);
__decorate$4([
    Property(1)
], SeriesBase.prototype, "width", void 0);
__decorate$4([
    Property('0')
], SeriesBase.prototype, "dashArray", void 0);
__decorate$4([
    Property('')
], SeriesBase.prototype, "dataSource", void 0);
__decorate$4([
    Property()
], SeriesBase.prototype, "query", void 0);
__decorate$4([
    Collection([], ChartSegment)
], SeriesBase.prototype, "segments", void 0);
__decorate$4([
    Property('X')
], SeriesBase.prototype, "segmentAxis", void 0);
/**
 *  Configures the series in charts.
 */
class Series extends SeriesBase {
    // tslint:disable-next-line:no-any
    constructor(parent, propName, defaultValue, isArray) {
        super(parent, propName, defaultValue, isArray);
        this.visibleSeriesCount = 0;
        /** @private */
        this.category = 'Series';
        /** @private */
        this.isRectSeries = false;
        /** @private */
        this.drawPoints = [];
        /** @private */
        this.delayedAnimation = false;
    }
    /**
     * Refresh the axis label.
     * @return {boolean}
     * @private
     */
    refreshAxisLabel() {
        if (this.xAxis.valueType !== 'Category') {
            return null;
        }
        this.xAxis.labels = [];
        for (let item of this.xAxis.series) {
            if (item.visible) {
                item.xMin = Infinity;
                item.xMax = -Infinity;
                for (let point of item.points) {
                    item.pushCategoryData(point, point.index, point.x);
                    item.xMin = Math.min(item.xMin, point.xValue);
                    item.xMax = Math.max(item.xMax, point.xValue);
                }
            }
        }
    }
    /**
     * To get the series collection.
     * @return {void}
     * @private
     */
    findSeriesCollection(column, row, isStack) {
        let seriesCollection = [];
        for (let rowAxis of row.axes) {
            for (let rowSeries of rowAxis.series) {
                for (let axis of column.axes) {
                    for (let series of axis.series) {
                        if (series === rowSeries && series.visible && this.rectSeriesInChart(series, isStack)) {
                            seriesCollection.push(series);
                        }
                    }
                }
            }
        }
        return seriesCollection;
    }
    /**
     * To get the column type series.
     * @return {void}
     * @private
     */
    rectSeriesInChart(series, isStack) {
        let type = (series.type).toLowerCase();
        return (type.indexOf('column') !== -1 || type.indexOf('bar') !== -1 ||
            type.indexOf('hiloopenclose') !== -1 || type.indexOf('candle') !== -1 ||
            type.indexOf('hilo') !== -1 || series.drawType.indexOf('Column') !== -1 ||
            type.indexOf('waterfall') !== -1 || type.indexOf('boxandwhisker') !== -1 || isStack);
    }
    /**
     * To calculate the stacked values.
     * @return {void}
     * @private
     */
    calculateStackedValue(isStacking100, chart) {
        for (let columnItem of chart.columns) {
            for (let item of chart.rows) {
                this.calculateStackingValues(this.findSeriesCollection(columnItem, item, true), isStacking100);
            }
        }
    }
    calculateStackingValues(seriesCollection, isStacking100) {
        let startValues;
        let endValues;
        let yValues = [];
        let lastPositive = [];
        let lastNegative = [];
        let stackingGroup;
        let lastValue;
        let value;
        let frequencies = [];
        if (isStacking100) {
            frequencies = this.findFrequencies(seriesCollection);
        }
        for (let series of seriesCollection) {
            if (series.type.indexOf('Stacking') !== -1 || (series.drawType.indexOf('Stacking') !== -1 &&
                (series.chart.chartAreaType === 'PolarRadar'))) {
                stackingGroup = (series.type.indexOf('StackingArea') !== -1) ? 'StackingArea100' : series.stackingGroup;
                if (!lastPositive[stackingGroup]) {
                    lastPositive[stackingGroup] = [];
                    lastNegative[stackingGroup] = [];
                }
                yValues = series.yData;
                startValues = [];
                endValues = [];
                for (let j = 0, pointsLength = series.points.length; j < pointsLength; j++) {
                    lastValue = 0;
                    value = yValues[j];
                    if (lastPositive[stackingGroup][series.points[j].xValue] === undefined) {
                        lastPositive[stackingGroup][series.points[j].xValue] = 0;
                    }
                    if (lastNegative[stackingGroup][series.points[j].xValue] === undefined) {
                        lastNegative[stackingGroup][series.points[j].xValue] = 0;
                    }
                    if (isStacking100) {
                        value = value / frequencies[stackingGroup][series.points[j].xValue] * 100;
                        value = !isNaN(value) ? value : 0;
                        series.points[j].percent = value.toFixed(2);
                    }
                    if (value >= 0) {
                        lastValue = lastPositive[stackingGroup][series.points[j].xValue];
                        lastPositive[stackingGroup][series.points[j].xValue] += value;
                    }
                    else {
                        lastValue = lastNegative[stackingGroup][series.points[j].xValue];
                        lastNegative[stackingGroup][series.points[j].xValue] += value;
                    }
                    startValues.push(lastValue);
                    endValues.push(value + lastValue);
                    if (isStacking100 && (endValues[j] > 100)) {
                        endValues[j] = 100;
                    }
                }
                series.stackedValues = new StackValues(startValues, endValues);
                series.yMin = Math.min.apply(0, startValues);
                series.yMax = Math.max.apply(0, endValues);
                if (series.yMin > Math.min.apply(0, endValues)) {
                    series.yMin = (isStacking100) ? -100 : Math.min.apply(0, endValues);
                }
                if (series.yMax < Math.max.apply(0, startValues)) {
                    series.yMax = 0;
                }
            }
        }
    }
    findFrequencies(seriesCollection) {
        let frequencies = [];
        let stackingGroup;
        for (let series of seriesCollection) {
            series.yAxis.isStack100 = series.type.indexOf('100') !== -1 ? true : false;
            if (series.type.indexOf('Stacking') !== -1) {
                stackingGroup = (series.type.indexOf('StackingArea') !== -1) ? 'StackingArea100' : series.stackingGroup;
                if (!frequencies[stackingGroup]) {
                    frequencies[stackingGroup] = [];
                }
                for (let j = 0, pointsLength = series.points.length; j < pointsLength; j++) {
                    if (frequencies[stackingGroup][series.points[j].xValue] === undefined) {
                        frequencies[stackingGroup][series.points[j].xValue] = 0;
                    }
                    if (series.yData[j] > 0) {
                        frequencies[stackingGroup][series.points[j].xValue] += series.yData[j];
                    }
                    else {
                        frequencies[stackingGroup][series.points[j].xValue] -= series.yData[j];
                    }
                }
            }
        }
        return frequencies;
    }
    /**
     * To find the log values.
     * @return {void}
     * @private
     */
    logWithIn(value, axis) {
        if (axis.valueType === 'Logarithmic') {
            value = logBase(value, axis.logBase);
        }
        else {
            value = value;
        }
        return value;
    }
    /* private dataManagerFailure(e: { result: Object[] }): void {
         this.currentViewData = [];
         this.refreshChart();
     }*/
    /** @private */
    renderSeries(chart, index) {
        let seriesType = firstToLowerCase(this.type);
        if (seriesType.indexOf('100') !== -1) {
            seriesType = seriesType.replace('100', '');
        }
        if (chart[seriesType + 'SeriesModule']) {
            if (this.category !== 'Indicator' && this.category !== 'TrendLine') {
                this.createSeriesElements(chart);
            }
            chart[seriesType + 'SeriesModule'].render(this, this.xAxis, this.yAxis, chart.requireInvertedAxis);
            if (this.category !== 'Indicator') {
                if (this.errorBar.visible) {
                    this.chart.errorBarModule.render(this);
                }
                if (this.marker.dataLabel.visible) {
                    chart.dataLabelModule.render(this, this.chart, this.marker.dataLabel);
                }
                this.appendSeriesElement(chart.seriesElements, chart);
            }
            this.performAnimation(chart, seriesType, this.errorBar, this.marker, this.marker.dataLabel);
        }
    }
    /**
     * To create seris element.
     * @return {void}
     * @private
     */
    createSeriesElements(chart) {
        if (this.category !== 'Indicator') {
            let elementId = chart.element.id;
            let xAxisRect = this.xAxis.rect;
            // 8 for extend border value 5 for extend size value
            let explodeValue = this.marker.border.width + 8 + 5;
            let yAxisRect = this.yAxis.rect;
            let marker = this.marker;
            let render = chart.renderer;
            let index = this.index;
            let markerHeight = (this.type === 'Scatter') ? (this.marker.height + explodeValue) / 2 : 0;
            let markerWidth = (this.type === 'Scatter') ? (this.marker.width + explodeValue) / 2 : 0;
            if (chart.chartAreaType === 'PolarRadar') {
                this.clipRectElement = render.drawCircularClipPath(new CircleOption(elementId + '_ChartSeriesClipRect_' + index, 'transparent', { width: 1, color: 'Gray' }, 1, this.clipRect.width / 2 + this.clipRect.x, this.clipRect.height / 2 + this.clipRect.y, chart.radius));
            }
            else {
                this.clipRectElement = render.drawClipPath(new RectOption(elementId + '_ChartSeriesClipRect_' + index, 'transparent', { width: 1, color: 'Gray' }, 1, {
                    x: -markerWidth, y: -markerHeight,
                    width: this.clipRect.width + markerWidth * 2,
                    height: this.clipRect.height + markerHeight * 2
                }));
            }
            let transform;
            transform = chart.chartAreaType === 'Cartesian' ? 'translate(' + this.clipRect.x + ',' + (this.clipRect.y) + ')' : '';
            this.symbolElement = null;
            this.seriesElement = render.createGroup({
                'id': elementId + 'SeriesGroup' + index,
                'transform': transform,
                'clip-path': 'url(#' + elementId + '_ChartSeriesClipRect_' + index + ')'
            });
            this.seriesElement.appendChild(this.clipRectElement);
        }
    }
    /**
     * To append the series.
     * @return {void}
     * @private
     */
    appendSeriesElement(element, chart) {
        let marker = this.marker;
        let dataLabel = marker.dataLabel;
        if (this.category !== 'TrendLine') {
            chart.seriesElements.appendChild(this.seriesElement);
            let errorBar = this.errorBar;
            if (errorBar.visible) {
                if (chart.chartAreaType === 'PolarRadar') {
                    chart.seriesElements.appendChild(this.seriesElement);
                }
                else {
                    chart.seriesElements.appendChild(this.errorBarElement);
                }
            }
            if (this.type === 'Scatter' || this.type === 'Bubble') {
                chart.seriesElements.appendChild(this.seriesElement);
            }
        }
        if (marker.visible && ((chart.chartAreaType === 'Cartesian' && (!this.isRectSeries || this.type === 'BoxAndWhisker'))
            || ((this.drawType !== 'Scatter' && !this.isRectSeries) && chart.chartAreaType === 'PolarRadar')) &&
            this.type !== 'Scatter' && this.type !== 'Bubble') {
            chart.seriesElements.appendChild(this.symbolElement);
        }
        if (dataLabel.visible) {
            chart.dataLabelElements.appendChild(this.shapeElement);
            chart.dataLabelElements.appendChild(this.textElement);
        }
        if (chart.dataLabelElements.hasChildNodes()) {
            chart.seriesElements.appendChild(chart.dataLabelElements);
        }
    }
    /**
     * To perform animation for chart series.
     * @return {void}
     * @private
     */
    performAnimation(chart, type, errorBar, marker, dataLabel) {
        if (this.animation.enable && chart.animateSeries) {
            chart[type + 'SeriesModule'].doAnimation(this);
            if (errorBar.visible) {
                chart.errorBarModule.doErrorBarAnimation(this);
            }
            if (marker.visible) {
                chart.markerRender.doMarkerAnimation(this);
            }
            if (dataLabel.visible) {
                chart.dataLabelModule.doDataLabelAnimation(this);
            }
        }
    }
    /**
     * To set border color for empty point
     * @private
     */
    setPointColor(point, color) {
        color = point.interior || color;
        return point.isEmpty ? (this.emptyPointSettings.fill || color) : color;
    }
    /**
     * To set border color for empty point
     * @private
     */
    setBorderColor(point, border) {
        border.width = point.isEmpty ? (this.emptyPointSettings.border.width || border.width) : border.width;
        border.color = point.isEmpty ? (this.emptyPointSettings.border.color || border.color) : border.color;
        return border;
    }
}
__decorate$4([
    Property('')
], Series.prototype, "name", void 0);
__decorate$4([
    Property('')
], Series.prototype, "yName", void 0);
__decorate$4([
    Property('Line')
], Series.prototype, "drawType", void 0);
__decorate$4([
    Property(true)
], Series.prototype, "isClosed", void 0);
__decorate$4([
    Property('#2ecd71')
], Series.prototype, "bearFillColor", void 0);
__decorate$4([
    Property('#e74c3d')
], Series.prototype, "bullFillColor", void 0);
__decorate$4([
    Property(false)
], Series.prototype, "enableSolidCandles", void 0);
__decorate$4([
    Property('')
], Series.prototype, "size", void 0);
__decorate$4([
    Property('')
], Series.prototype, "stackingGroup", void 0);
__decorate$4([
    Property(true)
], Series.prototype, "visible", void 0);
__decorate$4([
    Complex({ color: 'transparent', width: 0 }, Border)
], Series.prototype, "border", void 0);
__decorate$4([
    Property(1)
], Series.prototype, "opacity", void 0);
__decorate$4([
    Property('Line')
], Series.prototype, "type", void 0);
__decorate$4([
    Complex(null, ErrorBarSettings)
], Series.prototype, "errorBar", void 0);
__decorate$4([
    Complex(null, MarkerSettings)
], Series.prototype, "marker", void 0);
__decorate$4([
    Collection([], Trendline)
], Series.prototype, "trendlines", void 0);
__decorate$4([
    Property(true)
], Series.prototype, "enableTooltip", void 0);
__decorate$4([
    Property('SeriesType')
], Series.prototype, "legendShape", void 0);
__decorate$4([
    Property(null)
], Series.prototype, "selectionStyle", void 0);
__decorate$4([
    Property(1)
], Series.prototype, "minRadius", void 0);
__decorate$4([
    Property(3)
], Series.prototype, "maxRadius", void 0);
__decorate$4([
    Property('Natural')
], Series.prototype, "splineType", void 0);
__decorate$4([
    Property(0.5)
], Series.prototype, "cardinalSplineTension", void 0);
__decorate$4([
    Complex(null, EmptyPointSettings)
], Series.prototype, "emptyPointSettings", void 0);
__decorate$4([
    Property(true)
], Series.prototype, "showMean", void 0);
__decorate$4([
    Property('Normal')
], Series.prototype, "boxPlotMode", void 0);
__decorate$4([
    Property(0.7)
], Series.prototype, "columnWidth", void 0);
__decorate$4([
    Property(0)
], Series.prototype, "columnSpacing", void 0);
__decorate$4([
    Property('#C64E4A')
], Series.prototype, "negativeFillColor", void 0);
__decorate$4([
    Property('#4E81BC')
], Series.prototype, "summaryFillColor", void 0);
__decorate$4([
    Property()
], Series.prototype, "intermediateSumIndexes", void 0);
__decorate$4([
    Property()
], Series.prototype, "sumIndexes", void 0);
__decorate$4([
    Complex({ color: 'black', width: 2 }, Connector)
], Series.prototype, "connector", void 0);
__decorate$4([
    Complex(null, CornerRadius)
], Series.prototype, "cornerRadius", void 0);

/**
 * data module is used to generate query and dataSource
 */
class Data {
    /**
     * Constructor for data module
     * @private
     */
    constructor(dataSource, query) {
        this.initDataManager(dataSource, query);
    }
    /**
     * The function used to initialize dataManager and query
     * @return {void}
     * @private
     */
    initDataManager(dataSource, query) {
        this.dataManager = dataSource instanceof DataManager ? dataSource : new DataManager(dataSource);
        this.query = query instanceof Query ? query : new Query();
    }
    /**
     * The function used to generate updated Query from chart model
     * @return {void}
     * @private
     */
    generateQuery() {
        let query = this.query.clone();
        return query;
    }
    /**
     * The function used to get dataSource by executing given Query
     * @param  {Query} query - A Query that specifies to generate dataSource
     * @return {void}
     * @private
     */
    getData(query) {
        return this.dataManager.executeQuery(query);
    }
}

/**
 * Marker Module used to render the marker for line type series.
 */
class MarkerExplode extends ChartData {
    /**
     * Constructor for the marker module.
     * @private
     */
    constructor(chart) {
        super(chart);
        this.addEventListener();
        this.elementId = chart.element.id;
    }
    /**
     * @hidden
     */
    addEventListener() {
        if (this.chart.isDestroyed) {
            return;
        }
        this.chart.on(Browser.touchMoveEvent, this.mouseMoveHandler, this);
        this.chart.on(Browser.touchEndEvent, this.mouseUpHandler, this);
    }
    /**
     * @hidden
     */
    /* public removeEventListener(): void {
         if (this.chart.isDestroyed) { return; }
         this.chart.off(Browser.touchMoveEvent, this.mouseMoveHandler);
    }*/
    /**
     * @hidden
     */
    mouseUpHandler() {
        let chart = this.chart;
        if (chart.isTouch && !chart.crosshair.enable && !this.isSelected(chart)) {
            this.markerMove(true);
        }
    }
    /**
     * @hidden
     */
    mouseMoveHandler() {
        let chart = this.chart;
        if ((!chart.crosshair.enable || (chart.tooltip.enable)) && (!chart.isTouch || chart.startMove) && !this.isSelected(chart)) {
            this.markerMove(false);
        }
    }
    markerMove(remove$$1) {
        let chart = this.chart;
        this.currentPoints = [];
        let data;
        let previous;
        let explodeSeries;
        if (!chart.tooltip.shared || !chart.tooltip.enable) {
            data = this.getData();
            previous = this.previousPoints[0];
            explodeSeries = data.series && (data.series.type === 'BoxAndWhisker' || data.series.type === 'Bubble' || data.series.drawType === 'Scatter'
                || data.series.type === 'Scatter' || (!data.series.isRectSeries && data.series.marker.visible));
            data.lierIndex = this.lierIndex;
            if (data.point && explodeSeries && ((!previous || (previous.point !== data.point)) ||
                (previous && previous.lierIndex > 3 && previous.lierIndex !== this.lierIndex))) {
                this.currentPoints.push(data);
            }
        }
        else {
            if (!withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect)) {
                return null;
            }
            if (chart.tooltip.enable) {
                let pointData = chart.chartAreaType === 'PolarRadar' ? this.getData() : null;
                for (let chartSeries of chart.visibleSeries) {
                    if (!chartSeries.enableTooltip || chartSeries.category === 'Indicator') {
                        continue;
                    }
                    if (chart.chartAreaType === 'Cartesian' && chartSeries.visible) {
                        data = this.getClosestX(chart, chartSeries);
                    }
                    else if (chart.chartAreaType === 'PolarRadar' && chartSeries.visible && pointData.point !== null) {
                        data = new PointData(chartSeries.points[pointData.point.index], chartSeries);
                    }
                    if (data) {
                        this.currentPoints.push(data);
                        data = null;
                    }
                }
            }
        }
        let length = this.previousPoints.length;
        if (this.currentPoints.length > 0) {
            if (length === 0 || (length > 0 && this.previousPoints[0].point !== this.currentPoints[0].point)) {
                if (this.previousPoints.length > 0) {
                    this.removeHighlightedMarker();
                }
                for (let data of this.currentPoints) {
                    if (data && data.point &&
                        (!data.series.isRectSeries || data.series.type === 'BoxAndWhisker')) {
                        stopTimer(this.markerExplode);
                        this.isRemove = true;
                        data.point.symbolLocations.map((location, index) => {
                            if (data.point.marker.visible) {
                                this.drawTrackBall(data.series, data.point, location, index);
                            }
                        });
                    }
                }
                this.previousPoints = extend([], this.currentPoints, null, true);
            }
        }
        if (!chart.tooltip.enable && ((this.currentPoints.length === 0 && this.isRemove) || (remove$$1 && this.isRemove) ||
            !withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect))) {
            this.isRemove = false;
            this.markerExplode = setTimeout(() => {
                this.removeHighlightedMarker();
            }, 2000);
        }
        this.currentPoints = [];
    }
    drawTrackBall(series, point, location, index) {
        let marker = point.marker;
        let seriesMarker = series.marker;
        let shape = marker.shape || seriesMarker.shape;
        let element = series.symbolElement || series.seriesElement;
        let symbolId = this.elementId + '_Series_' + series.index + '_Point_' + point.index + '_Trackball' +
            (index ? index : '');
        let size = new Size((marker.width || seriesMarker.width) + 5, (marker.height || seriesMarker.height) + 5);
        let border = (marker.border || series.border);
        let explodeSeries = (series.type === 'BoxAndWhisker' || series.type === 'Bubble' || series.type === 'Scatter');
        let borderColor = (border.color && border.color !== 'transparent') ? border.color :
            marker.fill || point.interior || (explodeSeries ? point.color : series.interior);
        let colorValue = convertHexToColor(colorNameToHex(borderColor));
        let borderWidth = marker.border ? marker.border.width : seriesMarker.border.width;
        let markerShadow = series.chart.themeStyle.markerShadow ||
            'rgba(' + colorValue.r + ',' + colorValue.g + ',' + colorValue.b + ',0.2)';
        for (let i = 0; i < 2; i++) {
            let options = new PathOption(symbolId + '_' + i, i ? (marker.fill || point.color || (explodeSeries ? series.interior : '#ffffff')) : 'transparent', borderWidth + (i ? 0 : 8), i ? borderColor : markerShadow, (marker.opacity || seriesMarker.opacity), null, null);
            let symbol = drawSymbol(location, shape, size, seriesMarker.imageUrl, options, '');
            symbol.setAttribute('style', 'pointer-events:none');
            symbol.setAttribute('class', 'EJ2-Trackball');
            element.appendChild(symbol);
        }
    }
    /**
     * @hidden
     */
    removeHighlightedMarker() {
        let elements = document.getElementsByClassName('EJ2-Trackball');
        for (let i = 0, len = elements.length; i < len; i++) {
            remove(elements[0]);
        }
        this.previousPoints = [];
    }
}

/**
 * Marker module used to render the marker for line type series.
 */
class Marker extends MarkerExplode {
    /**
     * Constructor for the marker module.
     * @private
     */
    constructor(chart) {
        super(chart);
        this.addEventListener();
    }
    /**
     * Render the marker for series.
     * @return {void}
     * @private
     */
    render(series) {
        this.createElement(series);
        for (let point of series.points) {
            if (point.visible && point.symbolLocations.length) {
                point.symbolLocations.map((location, index) => {
                    this.renderMarker(series, point, location, index);
                });
            }
        }
    }
    renderMarker(series, point, location, index) {
        let seriesIndex = series.index;
        let marker = series.marker;
        let border = {
            color: marker.border.color,
            width: marker.border.width
        };
        let borderColor = marker.border.color;
        let symbolId;
        let shapeOption;
        let isBoxPlot = series.type === 'BoxAndWhisker';
        let fill = marker.fill || (isBoxPlot ? point.interior || series.interior : '#ffffff');
        let argsData;
        let parentElement = isBoxPlot ?
            findlElement(series.seriesElement.childNodes, 'Series_' + series.index + '_Point_' + point.index)
            : series.symbolElement;
        border.color = borderColor || series.setPointColor(point, series.interior);
        symbolId = this.elementId + '_Series_' + seriesIndex + '_Point_' + point.index + '_Symbol' +
            (index ? index : '');
        argsData = {
            cancel: false, name: pointRender, series: series, point: point,
            fill: point.isEmpty ? (series.emptyPointSettings.fill || fill) : fill,
            border: {
                color: series.type === 'BoxAndWhisker' ?
                    (!isNullOrUndefined(borderColor) && borderColor !== 'transparent') ? borderColor :
                        getSaturationColor(fill, -0.6)
                    : border.color,
                width: border.width
            },
            height: marker.height,
            width: marker.width,
            shape: marker.shape
        };
        argsData.border = series.setBorderColor(point, { width: argsData.border.width, color: argsData.border.color });
        this.chart.trigger(pointRender, argsData);
        point.color = argsData.fill;
        if (!argsData.cancel) {
            let y;
            if (series.type === 'RangeArea') {
                y = index ? point.low : point.high;
            }
            else if (isBoxPlot) {
                y = point.outliers[index];
            }
            else {
                y = point.y;
            }
            shapeOption = new PathOption(symbolId, argsData.fill, argsData.border.width, argsData.border.color, marker.opacity, null);
            if (parentElement !== undefined && parentElement !== null) {
                parentElement.appendChild(drawSymbol(location, argsData.shape, new Size(argsData.width, argsData.height), marker.imageUrl, shapeOption, point.x.toString() + ':' + y.toString()));
            }
            point.marker = {
                border: argsData.border,
                fill: argsData.fill,
                height: argsData.height,
                visible: true,
                shape: argsData.shape,
                width: argsData.width
            };
        }
        else {
            location = null;
            point.marker = {
                visible: false
            };
        }
    }
    createElement(series) {
        let markerClipRect;
        let marker = series.marker;
        // 8 for extend border value 5 for extend size value
        let explodeValue = marker.border.width + 8 + 5;
        let render = series.chart.renderer;
        let transform;
        transform = series.chart.chartAreaType === 'Cartesian' ? 'translate(' + series.clipRect.x + ',' + (series.clipRect.y) + ')' : '';
        if (marker.visible) {
            let markerHeight = (marker.height + explodeValue) / 2;
            let markerWidth = (marker.width + explodeValue) / 2;
            if (series.chart.chartAreaType === 'Cartesian') {
                markerClipRect = render.drawClipPath(new RectOption(this.elementId + '_ChartMarkerClipRect_' + series.index, 'transparent', { width: 1, color: 'Gray' }, 1, {
                    x: -markerWidth, y: -markerHeight,
                    width: series.clipRect.width + markerWidth * 2,
                    height: series.clipRect.height + markerHeight * 2
                }));
            }
            else {
                markerClipRect = render.drawCircularClipPath(new CircleOption(this.elementId + '_ChartMarkerClipRect_' + series.index, 'transparent', { width: 1, color: 'Gray' }, 1, series.clipRect.width / 2 + series.clipRect.x, series.clipRect.height / 2 + series.clipRect.y, series.chart.radius + Math.max(markerHeight, markerWidth)));
            }
            series.symbolElement = render.createGroup({
                'id': this.elementId + 'SymbolGroup' + series.index,
                'transform': transform,
                'clip-path': 'url(#' + this.elementId + '_ChartMarkerClipRect_' + series.index + ')'
            });
            series.symbolElement.appendChild(markerClipRect);
        }
    }
    getRangeLowPoint(region, series) {
        let x = region.x;
        let y = region.y;
        if (series.chart.requireInvertedAxis) {
            y += region.height / 2;
            x += series.yAxis.isInversed ? region.width : 0;
        }
        else {
            y += series.yAxis.isInversed ? 0 : region.height;
            x += region.width / 2;
        }
        return { x: x, y: y };
    }
    /**
     * Animates the marker.
     * @return {void}.
     * @private
     */
    doMarkerAnimation(series) {
        if (!(series.isRectSeries || series.type === 'Scatter' || series.type === 'Bubble' ||
            (series.chart.chartAreaType === 'PolarRadar' && (series.drawType === 'Scatter' || series.drawType.indexOf('Column') > -1)))) {
            let markerElements = series.symbolElement.childNodes;
            let delay = series.animation.delay + series.animation.duration;
            let j = 1;
            let incFactor = series.type === 'RangeArea' ? 2 : 1;
            for (let i = 0; i < series.points.length; i++) {
                if (!series.points[i].symbolLocations.length || !markerElements[j]) {
                    continue;
                }
                markerAnimate(markerElements[j], delay, 200, series, i, series.points[i].symbolLocations[0], false);
                if (incFactor === 2) {
                    let lowPoint = this.getRangeLowPoint(series.points[i].regions[0], series);
                    markerAnimate(markerElements[j + 1], delay, 200, series, i, lowPoint, false);
                }
                j += incFactor;
            }
        }
    }
}

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the location for the legend.
 */
class Location extends ChildProperty {
}
__decorate$5([
    Property(0)
], Location.prototype, "x", void 0);
__decorate$5([
    Property(0)
], Location.prototype, "y", void 0);
/**
 * Configures the legends in charts.
 */
class LegendSettings extends ChildProperty {
}
__decorate$5([
    Property(true)
], LegendSettings.prototype, "visible", void 0);
__decorate$5([
    Property(null)
], LegendSettings.prototype, "height", void 0);
__decorate$5([
    Property(null)
], LegendSettings.prototype, "width", void 0);
__decorate$5([
    Complex({ x: 0, y: 0 }, Location)
], LegendSettings.prototype, "location", void 0);
__decorate$5([
    Property('Auto')
], LegendSettings.prototype, "position", void 0);
__decorate$5([
    Property(8)
], LegendSettings.prototype, "padding", void 0);
__decorate$5([
    Property('Center')
], LegendSettings.prototype, "alignment", void 0);
__decorate$5([
    Complex(Theme.legendLabelFont, Font)
], LegendSettings.prototype, "textStyle", void 0);
__decorate$5([
    Property(10)
], LegendSettings.prototype, "shapeHeight", void 0);
__decorate$5([
    Property(10)
], LegendSettings.prototype, "shapeWidth", void 0);
__decorate$5([
    Complex({}, Border)
], LegendSettings.prototype, "border", void 0);
__decorate$5([
    Property(5)
], LegendSettings.prototype, "shapePadding", void 0);
__decorate$5([
    Property('transparent')
], LegendSettings.prototype, "background", void 0);
__decorate$5([
    Property(1)
], LegendSettings.prototype, "opacity", void 0);
__decorate$5([
    Property(true)
], LegendSettings.prototype, "toggleVisibility", void 0);
__decorate$5([
    Property(null)
], LegendSettings.prototype, "description", void 0);
__decorate$5([
    Property(3)
], LegendSettings.prototype, "tabIndex", void 0);
/**
 * Legend base class for Chart and Accumulation chart.
 * @private
 */
class BaseLegend {
    /**
     * Constructor for the dateTime module.
     * @private
     */
    constructor(chart) {
        this.rowCount = 0; // legend row counts per page 
        this.columnCount = 0; // legend column counts per page 
        this.pageButtonSize = 8;
        this.pageXCollections = []; // pages of x locations
        this.maxColumns = 0;
        this.isTrimmed = false;
        this.maxWidth = 0;
        this.currentPage = 1;
        this.chart = chart;
        this.legend = chart.legendSettings;
        this.legendID = chart.element.id + '_chart_legend';
        this.isChartControl = (chart.getModuleName() === 'chart');
    }
    /**
     * Calculate the bounds for the legends.
     * @return {void}
     * @private
     */
    calculateLegendBounds(rect, availableSize) {
        let legend = this.legend;
        this.getPosition(legend.position, availableSize);
        this.legendBounds = new Rect(rect.x, rect.y, 0, 0);
        this.isVertical = (this.position === 'Left' || this.position === 'Right');
        if (this.isVertical) {
            this.legendBounds.height = stringToNumber(legend.height, availableSize.height - (rect.y - this.chart.margin.top)) || rect.height;
            this.legendBounds.width = stringToNumber(legend.width || '20%', availableSize.width);
        }
        else {
            this.legendBounds.width = stringToNumber(legend.width, availableSize.width) || rect.width;
            this.legendBounds.height = stringToNumber(legend.height || '20%', availableSize.height);
        }
        this.library.getLegendBounds(availableSize, this.legendBounds, legend);
        this.getLocation(this.position, legend.alignment, this.legendBounds, rect, availableSize);
    }
    /**
     * To find legend position based on available size for chart and accumulation chart
     */
    getPosition(position, availableSize) {
        if (this.isChartControl) {
            this.position = (position !== 'Auto') ? position : 'Bottom';
        }
        else {
            if (position === 'Auto' && this.chart.visibleSeries &&
                (this.chart.visibleSeries[0].type === 'Funnel' || this.chart.visibleSeries[0].type === 'Pyramid')) {
                position = 'Top';
            }
            this.position = (position !== 'Auto') ? position :
                (availableSize.width > availableSize.height ? 'Right' : 'Bottom');
        }
    }
    /**
     * To set bounds for chart and accumulation chart
     */
    setBounds(computedWidth, computedHeight, legend, legendBounds) {
        computedWidth = computedWidth < legendBounds.width ? computedWidth : legendBounds.width;
        computedHeight = computedHeight < legendBounds.height ? computedHeight : legendBounds.height;
        legendBounds.width = !legend.width ? computedWidth : legendBounds.width;
        legendBounds.height = !legend.height ? computedHeight : legendBounds.height;
        this.rowCount = Math.max(1, Math.ceil((legendBounds.height - legend.padding) / (this.maxItemHeight + legend.padding)));
    }
    /**
     * To find legend location based on position, alignment for chart and accumulation chart
     */
    getLocation(position, alignment, legendBounds, rect, availableSize) {
        let padding = this.legend.border.width;
        let legendHeight = legendBounds.height + padding;
        let legendWidth = legendBounds.width + padding;
        let marginBottom = this.chart.margin.bottom;
        if (position === 'Bottom') {
            legendBounds.x = this.alignLegend(legendBounds.x, availableSize.width, legendBounds.width, alignment);
            legendBounds.y = rect.y + (rect.height - legendHeight) + padding;
            subtractThickness(rect, new Thickness(0, 0, 0, legendHeight));
        }
        else if (position === 'Top') {
            legendBounds.x = this.alignLegend(legendBounds.x, availableSize.width, legendBounds.width, alignment);
            legendBounds.y = rect.y + padding;
            subtractThickness(rect, new Thickness(0, 0, legendHeight, 0));
        }
        else if (position === 'Right') {
            legendBounds.x = rect.x + (rect.width - legendBounds.width);
            legendBounds.y = rect.y + this.alignLegend(0, availableSize.height - (rect.y + marginBottom), legendBounds.height, alignment);
            subtractThickness(rect, new Thickness(0, legendWidth, 0, 0));
        }
        else if (position === 'Left') {
            legendBounds.y = rect.y + this.alignLegend(0, availableSize.height - (rect.y + marginBottom), legendBounds.height, alignment);
            subtractThickness(rect, new Thickness(legendWidth, 0, 0, 0));
        }
        else {
            legendBounds.x = this.legend.location.x;
            legendBounds.y = this.legend.location.y;
            subtractThickness(rect, new Thickness(0, 0, 0, 0));
        }
    }
    /**
     * To find legend alignment for chart and accumulation chart
     */
    alignLegend(start, size, legendSize, alignment) {
        switch (alignment) {
            case 'Far':
                start = (size - legendSize) - start;
                break;
            case 'Center':
                start = ((size - legendSize) / 2);
                break;
        }
        return start;
    }
    /**
     * Renders the legend.
     * @return {void}
     * @private
     */
    renderLegend(chart, legend, legendBounds) {
        let firstLegend = this.findFirstLegendPosition(this.legendCollections);
        let padding = legend.padding;
        this.maxItemHeight = Math.max(this.legendCollections[0].textSize.height, legend.shapeHeight);
        let legendGroup = chart.renderer.createGroup({ id: this.legendID + '_g' });
        let legendTranslateGroup = this.createLegendElements(chart, legendBounds, legendGroup, legend, this.legendID);
        if (firstLegend !== this.legendCollections.length) {
            let legendSeriesGroup; // legendItem group for each series group element
            let start; // starting shape center x,y position && to resolve lint error used new line for declaration
            start = new ChartLocation(legendBounds.x + padding + (legend.shapeWidth / 2), legendBounds.y + padding + this.maxItemHeight / 2);
            let textOptions = new TextOption('', start.x, start.y, 'start');
            //  initialization for totalPages legend click totalpage again calculate
            this.totalPages = this.isChartControl ? this.totalPages : 0;
            let textPadding = legend.shapePadding + padding + legend.shapeWidth;
            let count = 0;
            this.pageXCollections = [];
            this.legendCollections[firstLegend].location = start;
            let previousLegend = this.legendCollections[firstLegend];
            for (let legendOption of this.legendCollections) {
                if (legendOption.render && legendOption.text !== '') {
                    legendSeriesGroup = chart.renderer.createGroup({
                        id: this.legendID + this.generateId(legendOption, '_g_', count)
                    });
                    legendSeriesGroup.setAttribute('tabindex', legend.tabIndex.toString());
                    legendSeriesGroup.setAttribute('aria-label', legend.description || 'Click to show or hide the ' + legendOption.text + ' series');
                    this.library.getRenderPoint(legendOption, start, textPadding, previousLegend, legendBounds, count, firstLegend);
                    this.renderSymbol(legendOption, legendSeriesGroup, count);
                    this.renderText(chart, legendOption, legendSeriesGroup, textOptions, count);
                    legendSeriesGroup.setAttribute('style', 'cursor: ' + ((!legend.toggleVisibility && chart.selectionMode === 'None') ? 'auto' : 'pointer'));
                    legendTranslateGroup.appendChild(legendSeriesGroup);
                    previousLegend = legendOption;
                }
                count++;
            }
            if (this.isPaging) {
                this.renderPagingElements(chart, legendBounds, textOptions, legendGroup);
            }
        }
        chart.svgObject.appendChild(legendGroup);
    }
    /**
     * To find first valid legend text index for chart and accumulation chart
     */
    findFirstLegendPosition(legendCollection) {
        let count = 0;
        for (let legend of legendCollection) {
            if (legend.render && legend.text !== '') {
                break;
            }
            count++;
        }
        return count;
    }
    /**
     * To create legend rendering elements for chart and accumulation chart
     */
    createLegendElements(chart, legendBounds, legendGroup, legend, id) {
        let padding = legend.padding;
        let options = new RectOption(id + '_element', legend.background, legend.border, legend.opacity, legendBounds);
        legendGroup.appendChild(chart.renderer.drawRectangle(options));
        let legendItemsGroup = chart.renderer.createGroup({ id: id + '_collections' });
        legendGroup.appendChild(legendItemsGroup);
        this.legendTranslateGroup = chart.renderer.createGroup({ id: id + '_translate_g' });
        legendItemsGroup.appendChild(this.legendTranslateGroup);
        let clippath = chart.renderer.createClipPath({ id: id + '_clipPath' });
        options.y += padding;
        options.id += '_clipPath_rect';
        options.width = (!this.isChartControl && this.isVertical) ? this.maxWidth - padding : legendBounds.width;
        this.clipRect = chart.renderer.drawRectangle(options);
        clippath.appendChild(this.clipRect);
        chart.svgObject.appendChild(clippath);
        legendItemsGroup.setAttribute('style', 'clip-path:url(#' + clippath.id + ')');
        return this.legendTranslateGroup;
    }
    /**
     * To render legend symbols for chart and accumulation chart
     */
    renderSymbol(legendOption, group, i) {
        let symbolColor = legendOption.visible ? legendOption.fill : '#D3D3D3';
        let shape = (legendOption.shape === 'SeriesType') ? legendOption.type : legendOption.shape;
        shape = shape === 'Scatter' ? legendOption.markerShape : shape;
        let symbolOption = new PathOption(this.legendID + this.generateId(legendOption, '_shape_', i), symbolColor, 1, symbolColor, 1, '', '');
        group.appendChild(drawSymbol(legendOption.location, shape, new Size(this.legend.shapeWidth, this.legend.shapeHeight), '', symbolOption, 'Click to show or hide the ' + legendOption.text + ' series'));
        if (shape === 'Line' && legendOption.markerVisibility && legendOption.markerShape !== 'Image' ||
            legendOption.type === 'Doughnut') {
            symbolOption.id = this.legendID + this.generateId(legendOption, '_shape_marker_', i);
            shape = legendOption.type === 'Doughnut' ? 'Circle' : legendOption.markerShape;
            symbolOption.fill = legendOption.type === 'Doughnut' ? '#FFFFFF' : symbolOption.fill;
            group.appendChild(drawSymbol(legendOption.location, shape, new Size(this.legend.shapeWidth / 2, this.legend.shapeHeight / 2), '', symbolOption, 'Click to show or hide the ' + legendOption.text + ' series'));
        }
    }
    /**
     * To render legend text for chart and accumulation chart
     */
    renderText(chart, legendOption, group, textOptions, i) {
        let legend = chart.legendSettings;
        let hiddenColor = '#D3D3D3';
        textOptions.id = this.legendID + this.generateId(legendOption, '_text_', i);
        let fontcolor = legendOption.visible ? legend.textStyle.color || chart.themeStyle.legendLabel : hiddenColor;
        textOptions.text = legendOption.text;
        textOptions.x = legendOption.location.x + (legend.shapeWidth / 2) + legend.shapePadding;
        textOptions.y = legendOption.location.y + this.maxItemHeight / 4;
        let element = textElement(textOptions, legend.textStyle, fontcolor, group);
        element.setAttribute('aria-label', legend.description || 'Click to show or hide the ' + legendOption.text + ' series');
    }
    /**
     * To render legend paging elements for chart and accumulation chart
     */
    renderPagingElements(chart, bounds, textOption, legendGroup) {
        let paginggroup = chart.renderer.createGroup({ id: this.legendID + '_navigation' });
        legendGroup.appendChild(paginggroup);
        let grayColor = '#545454';
        let legend = chart.legendSettings; // to solve parameter lint error, legend declaration is here
        let padding = 8; // const padding for paging elements
        if (this.isChartControl || !this.isVertical) {
            this.totalPages = Math.ceil(this.totalPages / Math.max(1, this.rowCount - 1));
        }
        else {
            this.totalPages = Math.ceil(this.totalPages / this.maxColumns);
        }
        let symbolOption = new PathOption(this.legendID + '_pageup', 'transparent', 5, grayColor, 1, '', '');
        let iconSize = this.pageButtonSize;
        paginggroup.setAttribute('style', 'cursor: pointer');
        // Page left arrow drawing calculation started here
        this.clipPathHeight = (this.rowCount - 1) * (this.maxItemHeight + legend.padding);
        this.clipRect.setAttribute('height', this.clipPathHeight.toString());
        let x = bounds.x + iconSize / 2;
        let y = bounds.y + this.clipPathHeight + ((bounds.height - this.clipPathHeight) / 2);
        paginggroup.appendChild(drawSymbol({ x: x, y: y }, 'LeftArrow', new Size(iconSize, iconSize), '', symbolOption, 'LeftArrow'));
        // Page numbering rendering calculation started here
        textOption.x = x + (iconSize / 2) + padding;
        let size = measureText(this.totalPages + '/' + this.totalPages, legend.textStyle);
        textOption.y = y + (size.height / 4);
        textOption.id = this.legendID + '_pagenumber';
        textOption.text = '1/' + this.totalPages;
        let pageTextElement = textElement(textOption, legend.textStyle, legend.textStyle.color, paginggroup);
        // Page right arrow rendering calculation started here
        x = (textOption.x + padding + (iconSize / 2) + size.width);
        symbolOption.id = this.legendID + '_pagedown';
        paginggroup.appendChild(drawSymbol({ x: x, y: y }, 'RightArrow', new Size(iconSize, iconSize), '', symbolOption, 'RightArrow'));
        // placing the navigation buttons and page numbering in legend right corner
        paginggroup.setAttribute('transform', 'translate(' + (bounds.width - (2 * (iconSize + padding) +
            padding + size.width)) + ', ' + 0 + ')');
        this.translatePage(pageTextElement, this.currentPage - 1, this.currentPage);
    }
    /**
     * To translate legend pages for chart and accumulation chart
     */
    translatePage(pagingText, page, pageNumber) {
        let size = (this.clipPathHeight) * page;
        let translate = 'translate(0,-' + size + ')';
        if (!this.isChartControl && this.isVertical) {
            let pageLength = page * this.maxColumns;
            size = this.pageXCollections[page * this.maxColumns] - this.legendBounds.x;
            size = size < 0 ? 0 : size; // to avoid small pixel variation
            translate = 'translate(-' + size + ',0)';
        }
        this.legendTranslateGroup.setAttribute('transform', translate);
        pagingText.textContent = (pageNumber) + '/' + this.totalPages;
        this.currentPage = pageNumber;
    }
    /**
     * To change legend pages for chart and accumulation chart
     */
    changePage(event, pageUp) {
        let pageText = document.getElementById(this.legendID + '_pagenumber');
        let page = parseInt(pageText.textContent.split('/')[0], 10);
        if (pageUp && page > 1) {
            this.translatePage(pageText, (page - 2), (page - 1));
        }
        else if (!pageUp && page < this.totalPages) {
            this.translatePage(pageText, page, (page + 1));
        }
    }
    /**
     * To find legend elements id based on chart or accumulation chart
     * @private
     */
    generateId(option, prefix, count) {
        if (this.isChartControl) {
            return prefix + count;
        }
        else {
            return prefix + option.pointIndex;
        }
    }
    /**
     * To show or hide trimmed text tooltip for legend.
     * @return {void}
     * @private
     */
    move(event) {
        let x = this.chart.mouseX;
        let y = this.chart.mouseY;
        if (event.target.textContent.indexOf('...') > -1) {
            let targetId = event.target.id.split(this.legendID + '_text_');
            if (targetId.length === 2) {
                let index = parseInt(targetId[1], 10);
                let element = this.chart.element;
                if (!isNaN(index)) {
                    if (this.chart.isTouch) {
                        removeElement(this.chart.element.id + '_EJ2_Legend_Tooltip');
                    }
                    if (this.isChartControl) {
                        showTooltip(this.chart.series[index].name, x, y, element.offsetWidth, element.id + '_EJ2_Legend_Tooltip', getElement(this.chart.element.id + '_Secondary_Element'));
                    }
                    else {
                        showTooltip(this.chart.visibleSeries[0].points[index].x.toString(), x + 10, y + 10, element.offsetWidth, element.id + '_EJ2_Legend_Tooltip', getElement(this.chart.element.id + '_Secondary_Element'));
                    }
                }
            }
        }
        else {
            removeElement(this.chart.element.id + '_EJ2_Legend_Tooltip');
        }
        if (this.chart.isTouch) {
            clearTimeout(this.clearTooltip);
            this.clearTooltip = setTimeout(() => { removeElement(this.chart.element.id + '_EJ2_Legend_Tooltip'); }, 1000);
        }
    }
}
/**
 * Class for legend options
 * @private
 */
class LegendOptions {
    constructor(text, fill, shape, visible, type, markerShape, markerVisibility, pointIndex, seriesIndex) {
        this.location = { x: 0, y: 0 };
        this.text = text;
        this.fill = fill;
        this.shape = shape;
        this.visible = visible;
        this.type = type;
        this.markerVisibility = markerVisibility;
        this.markerShape = markerShape;
        this.pointIndex = pointIndex;
        this.seriesIndex = seriesIndex;
    }
}

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path='../series/chart-series-model.d.ts' />
/**
 * Defines how to represent the market trend using technical indicators
 */
class TechnicalIndicator extends SeriesBase {
    constructor() {
        super(...arguments);
        /** @private */
        this.clipRect = new Rect(0, 0, 0, 0);
    }
    /** @private */
    setDataSource(series, chart) {
        if (series) {
            this.xData = series.xData;
            this.yData = series.yData;
            this.points = series.points;
        }
        let type = firstToLowerCase(this.type);
        chart[type + 'IndicatorModule'].initDataSource(this, chart);
        chart.visibleSeriesCount += this.targetSeries.length;
    }
}
__decorate$6([
    Property('Sma')
], TechnicalIndicator.prototype, "type", void 0);
__decorate$6([
    Property(14)
], TechnicalIndicator.prototype, "period", void 0);
__decorate$6([
    Property(14)
], TechnicalIndicator.prototype, "kPeriod", void 0);
__decorate$6([
    Property(3)
], TechnicalIndicator.prototype, "dPeriod", void 0);
__decorate$6([
    Property(80)
], TechnicalIndicator.prototype, "overBought", void 0);
__decorate$6([
    Property(20)
], TechnicalIndicator.prototype, "overSold", void 0);
__decorate$6([
    Property(2)
], TechnicalIndicator.prototype, "standardDeviation", void 0);
__decorate$6([
    Property('Close')
], TechnicalIndicator.prototype, "field", void 0);
__decorate$6([
    Property(12)
], TechnicalIndicator.prototype, "slowPeriod", void 0);
__decorate$6([
    Property(26)
], TechnicalIndicator.prototype, "fastPeriod", void 0);
__decorate$6([
    Property(true)
], TechnicalIndicator.prototype, "showZones", void 0);
__decorate$6([
    Complex({ color: '#ff9933', width: 2 }, Connector)
], TechnicalIndicator.prototype, "macdLine", void 0);
__decorate$6([
    Property('Both')
], TechnicalIndicator.prototype, "macdType", void 0);
__decorate$6([
    Property('#2ecd71')
], TechnicalIndicator.prototype, "macdPositiveColor", void 0);
__decorate$6([
    Property('#e74c3d')
], TechnicalIndicator.prototype, "macdNegativeColor", void 0);
__decorate$6([
    Property('rgba(211,211,211,0.25)')
], TechnicalIndicator.prototype, "bandColor", void 0);
__decorate$6([
    Complex({ color: '#ffb735', width: 1 }, Connector)
], TechnicalIndicator.prototype, "upperLine", void 0);
__decorate$6([
    Complex({ color: '#f2ec2f', width: 1 }, Connector)
], TechnicalIndicator.prototype, "lowerLine", void 0);
__decorate$6([
    Complex({ color: '#f2ec2f', width: 1 }, Connector)
], TechnicalIndicator.prototype, "periodLine", void 0);
__decorate$6([
    Property('')
], TechnicalIndicator.prototype, "seriesName", void 0);

/**
 * Annotation Module handles the Annotation for chart and accumulation series.
 */
class ExportUtils {
    /**
     * Constructor for chart and accumulation annotation
     * @param control
     */
    constructor(control) {
        this.control = control;
    }
    /**
     * To print the accumulation and chart elements
     * @param elements
     */
    print(elements) {
        this.printWindow = window.open('', 'print', 'height=' + window.outerHeight + ',width=' + window.outerWidth + ',tabbar=no');
        this.printWindow.moveTo(0, 0);
        this.printWindow.resizeTo(screen.availWidth, screen.availHeight);
        let argsData = {
            cancel: false, htmlContent: this.getHTMLContent(elements), name: beforePrint
        };
        this.control.trigger(beforePrint, argsData);
        if (!argsData.cancel) {
            print(argsData.htmlContent, this.printWindow);
        }
    }
    /**
     * To get the html string of the chart and accumulation
     * @param elements
     * @private
     */
    getHTMLContent(elements) {
        let div = createElement('div');
        if (elements) {
            if (elements instanceof Array) {
                elements.forEach((value) => {
                    div.appendChild(getElement(value).cloneNode(true));
                });
            }
            else if (elements instanceof Element) {
                div.appendChild(elements.cloneNode(true));
            }
            else {
                div.appendChild(getElement(elements).cloneNode(true));
            }
        }
        else {
            div.appendChild(this.control.element.cloneNode(true));
        }
        return div;
    }
    /**
     * To export the file as image/svg format
     * @param type
     * @param fileName
     */
    export(type, fileName, orientation) {
        let element = createElement('canvas', {
            id: 'ej2-canvas',
            attrs: {
                'width': this.control.availableSize.width.toString(),
                'height': this.control.availableSize.height.toString()
            }
        });
        let isDownload = !(Browser.userAgent.toString().indexOf('HeadlessChrome') > -1);
        orientation = isNullOrUndefined(orientation) ? PdfPageOrientation.Landscape : orientation;
        let svgData = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
            this.control.svgObject.outerHTML +
            '</svg>';
        let url = window.URL.createObjectURL(new Blob(type === 'SVG' ? [svgData] :
            [(new XMLSerializer()).serializeToString(this.control.svgObject)], { type: 'image/svg+xml' }));
        if (type === 'SVG') {
            this.triggerDownload(fileName, type, url, isDownload);
        }
        else {
            let image = new Image();
            let ctx = element.getContext('2d');
            image.onload = (() => {
                ctx.drawImage(image, 0, 0);
                window.URL.revokeObjectURL(url);
                if (type === 'PDF') {
                    let document = new PdfDocument();
                    let imageString = element.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
                    document.pageSettings.orientation = orientation;
                    imageString = imageString.slice(imageString.indexOf(',') + 1);
                    document.pages.add().graphics.drawImage(new PdfBitmap(imageString), 0, 0, this.control.availableSize.width, this.control.availableSize.height);
                    if (isDownload) {
                        document.save(fileName + '.pdf');
                        document.destroy();
                    }
                }
                else {
                    if (window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(element.msToBlob(), fileName + '.' + type.toLocaleLowerCase());
                    }
                    else {
                        this.triggerDownload(fileName, type, element.toDataURL('image/png').replace('image/png', 'image/octet-stream'), isDownload);
                    }
                }
            });
            image.src = url;
        }
    }
    /**
     * To trigger the download element
     * @param fileName
     * @param type
     * @param url
     */
    triggerDownload(fileName, type, url, isDownload) {
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
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configures the crosshair in the chart.
 */
class CrosshairSettings extends ChildProperty {
}
__decorate([
    Property(false)
], CrosshairSettings.prototype, "enable", void 0);
__decorate([
    Complex({ color: null, width: 1 }, Border)
], CrosshairSettings.prototype, "line", void 0);
__decorate([
    Property('Both')
], CrosshairSettings.prototype, "lineType", void 0);
/**
 * Configures the zooming behavior for the chart.
 */
class ZoomSettings extends ChildProperty {
}
__decorate([
    Property(false)
], ZoomSettings.prototype, "enableSelectionZooming", void 0);
__decorate([
    Property(false)
], ZoomSettings.prototype, "enablePinchZooming", void 0);
__decorate([
    Property(false)
], ZoomSettings.prototype, "enableMouseWheelZooming", void 0);
__decorate([
    Property(true)
], ZoomSettings.prototype, "enableDeferredZooming", void 0);
__decorate([
    Property('XY')
], ZoomSettings.prototype, "mode", void 0);
__decorate([
    Property(['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'])
], ZoomSettings.prototype, "toolbarItems", void 0);
__decorate([
    Property(false)
], ZoomSettings.prototype, "enablePan", void 0);
/**
 * Represents the Chart control.
 * ```html
 * <div id="chart"/>
 * <script>
 *   var chartObj = new Chart({ isResponsive : true });
 *   chartObj.appendTo("#chart");
 * </script>
 * ```
 */
let Chart = class Chart extends Component {
    /**
     * Constructor for creating the widget
     * @hidden
     */
    constructor(options, element) {
        super(options, element);
        /** @private */
        this.chartAreaType = 'Cartesian';
    }
    /**
     * Initialize the event handler.
     */
    preRender() {
        this.unWireEvents();
        this.initPrivateVariable();
        this.setCulture();
        this.wireEvents();
    }
    initPrivateVariable() {
        this.animateSeries = true;
        this.delayRedraw = false;
        this.horizontalAxes = [];
        this.verticalAxes = [];
        this.refreshAxis();
        this.refreshDefinition(this.rows);
        this.refreshDefinition(this.columns);
        if (this.tooltipModule) {
            this.tooltipModule.previousPoints = [];
        }
    }
    /**
     * To Initialize the control rendering.
     */
    render() {
        this.trigger(load, { chart: this });
        this.createChartSvg();
        this.setTheme();
        this.markerRender = new Marker(this);
        this.calculateAreaType();
        this.calculateVisibleSeries();
        this.initTechnicalIndicators();
        this.initTrendLines();
        this.calculateVisibleAxis();
        this.processData();
    }
    /**
     * Gets the localized label by locale keyword.
     * @param  {string} key
     * @return {string}
     */
    getLocalizedLabel(key) {
        return this.localeObject.getConstant(key);
    }
    /**
     * Refresh the chart bounds.
     * @private
     */
    refreshBound() {
        if (this.legendModule && this.legendSettings.visible) {
            this.legendModule.getLegendOptions(this.visibleSeries, this);
        }
        let isCalculateStacking = false;
        let series;
        for (let i = 0, len = this.visibleSeries.length; i < len; i++) {
            series = this.visibleSeries[i];
            series.position = series.rectCount = undefined;
            if (((series.type.indexOf('Stacking') !== -1) || (series.drawType.indexOf('Stacking') !== -1
                && this.chartAreaType === 'PolarRadar')) && !isCalculateStacking) {
                series.calculateStackedValue(series.type.indexOf('100') > -1, this);
                isCalculateStacking = true;
            }
        }
        this.calculateBounds();
        this.renderElements();
    }
    renderElements() {
        this.renderBorder();
        this.renderTitle();
        this.renderAreaBorder();
        let axisElement = this.renderAxes();
        this.renderSeriesElements(axisElement);
        this.renderLegend();
        this.applyZoomkit();
        this.performSelection();
        this.setSecondaryElementPosition();
        this.renderAnnotation();
    }
    /**
     * To render the legend
     */
    renderAxes() {
        this.yAxisElements = this.renderer.createGroup({ id: this.element.id + 'yAxisCollection' });
        let axisElement;
        if (this.rows.length > 0 && this.columns.length > 0) {
            axisElement = this.chartAxisLayoutPanel.renderAxes();
        }
        if (this.stripLineModule) {
            this.stripLineModule.renderStripLine(this, 'Behind', this.axisCollections);
        }
        return axisElement;
    }
    /**
     * To render the legend
     */
    renderLegend() {
        if (this.legendModule && this.legendModule.legendCollections.length) {
            this.legendModule.renderLegend(this, this.legendSettings, this.legendModule.legendBounds);
        }
        this.element.appendChild(this.svgObject);
    }
    /**
     * To set the left and top position for data label template for center aligned chart
     */
    setSecondaryElementPosition() {
        let element = getElement(this.element.id + '_Secondary_Element');
        if (!element) {
            return;
        }
        let rect = this.element.getBoundingClientRect();
        let svgRect = getElement(this.element.id + '_svg').getBoundingClientRect();
        element.style.left = Math.max(svgRect.left - rect.left, 0) + 'px';
        element.style.top = Math.max(svgRect.top - rect.top, 0) + 'px';
    }
    initializeModuleElements() {
        this.dataLabelCollections = [];
        this.seriesElements = this.renderer.createGroup({ id: this.element.id + 'SeriesCollection' });
        if (this.indicators.length) {
            this.indicatorElements = this.renderer.createGroup({ id: this.element.id + 'IndicatorCollection' });
        }
        if (this.hasTrendlines()) {
            this.trendLineElements = this.renderer.createGroup({ id: this.element.id + 'TrendLineCollection' });
        }
        this.dataLabelElements = this.renderer.createGroup({ id: this.element.id + 'DataLabelCollection' });
    }
    hasTrendlines() {
        let isTrendline;
        for (let series of this.series) {
            isTrendline = series.trendlines.length ? true : false;
            if (isTrendline) {
                break;
            }
        }
        return isTrendline;
    }
    renderSeriesElements(axisElement) {
        // Initialize the series elements values
        this.initializeModuleElements();
        let tooltipDiv = document.createElement('div');
        tooltipDiv.id = this.element.id + '_Secondary_Element';
        tooltipDiv.setAttribute('style', 'position: relative');
        this.element.appendChild(tooltipDiv);
        // For userInteraction
        if (this.tooltip.enable) {
            this.svgObject.appendChild(this.renderer.createGroup({ id: this.element.id + '_UserInteraction', style: 'pointer-events:none;' }));
        }
        if (this.rows.length > 0 && this.columns.length > 0) {
            this.initializeIndicator();
            this.initializeTrendLine();
            this.renderSeries();
            this.appendElementsAfterSeries(axisElement);
        }
    }
    renderSeries() {
        for (let item of this.visibleSeries) {
            if (item.visible) {
                findClipRect(item);
                item.renderSeries(this, item.index);
            }
        }
        let clipRect = this.renderer.drawClipPath({
            'id': this.element.id + '_ChartAreaClipRect_',
            'x': this.chartAxisLayoutPanel.seriesClipRect.x,
            'y': this.chartAxisLayoutPanel.seriesClipRect.y,
            'width': this.chartAxisLayoutPanel.seriesClipRect.width,
            'height': this.chartAxisLayoutPanel.seriesClipRect.height,
            'fill': 'transparent',
            'stroke-width': 1,
            'stroke': 'Gray'
        });
        this.seriesElements.appendChild(clipRect);
        this.svgObject.appendChild(this.seriesElements);
    }
    initializeIndicator() {
        for (let indicator of this.indicators) {
            if (this[firstToLowerCase(indicator.type) + 'IndicatorModule']) {
                this[firstToLowerCase(indicator.type) + 'IndicatorModule'].createIndicatorElements(this, indicator, indicator.index);
            }
        }
        if (this.indicatorElements) {
            this.svgObject.appendChild(this.indicatorElements);
        }
    }
    initializeTrendLine() {
        for (let series of this.visibleSeries) {
            if (series.trendlines.length) {
                this.trendLineModule.getTrendLineElements(series, this);
            }
        }
        if (this.trendLineElements) {
            this.svgObject.appendChild(this.trendLineElements);
        }
    }
    appendElementsAfterSeries(axisElement) {
        if (this.chartAreaType === 'PolarRadar') {
            this.svgObject.appendChild(this.yAxisElements);
        }
        this.svgObject.appendChild(axisElement);
        if (this.stripLineModule) {
            this.stripLineModule.renderStripLine(this, 'Over', this.axisCollections);
        }
        if (!this.tooltip.enable) {
            this.svgObject.appendChild(this.renderer.createGroup({ id: this.element.id + '_UserInteraction', style: 'pointer-events:none;' }));
        }
    }
    applyZoomkit() {
        if (this.zoomModule && this.zoomModule.isZoomed && (!this.zoomSettings.enablePan || this.zoomModule.performedUI)) {
            this.zoomModule.applyZoomToolkit(this, this.axisCollections);
        }
    }
    renderAnnotation() {
        if (this.annotationModule) {
            this.annotationModule.renderAnnotations(getElement(this.element.id + '_Secondary_Element'));
        }
    }
    performSelection() {
        let selectedDataIndexes = [];
        if (this.selectionModule) {
            selectedDataIndexes = extend([], this.selectionModule.selectedDataIndexes, null, true);
            this.selectionModule.invokeSelection(this);
        }
        if (selectedDataIndexes.length > 0) {
            this.selectionModule.selectedDataIndexes = selectedDataIndexes;
            this.selectionModule.redrawSelection(this, this.selectionMode);
        }
    }
    processData() {
        this.visibleSeriesCount = 0;
        let check = true;
        for (let series of this.visibleSeries) {
            if (!series.visible && !this.legendSettings.visible) {
                this.visibleSeriesCount++;
                continue;
            }
            if (series.category !== 'Indicator' && series.category !== 'TrendLine') {
                this.initializeDataModule(series);
            }
        }
        for (let indicator of this.indicators) {
            if (indicator.dataSource) {
                let techIndicator = indicator;
                this.initializeDataModule(techIndicator);
                check = false;
            }
        }
        if (!this.visibleSeries.length || this.visibleSeriesCount === this.visibleSeries.length && check) {
            this.refreshBound();
            this.trigger('loaded', { chart: this });
        }
    }
    initializeDataModule(series) {
        series.xData = [];
        series.yData = [];
        series.dataModule = new Data(series.dataSource, series.query);
        series.points = [];
        series.refreshDataManager(this);
    }
    calculateBounds() {
        let margin = this.margin;
        // Title Height;
        let titleHeight = 0;
        let padding = 15;
        let left = margin.left;
        let width = this.availableSize.width - left - margin.right - this.border.width;
        this.titleCollection = [];
        if (this.title) {
            this.titleCollection = getTitle(this.title, this.titleStyle, width);
            titleHeight = (measureText(this.title, this.titleStyle).height * this.titleCollection.length) + padding;
        }
        let top = margin.top + titleHeight + this.chartArea.border.width / 2;
        let height = this.availableSize.height - top - this.border.width - margin.bottom;
        this.initialClipRect = new Rect(left, top, width, height);
        if (this.legendModule) {
            this.legendModule.calculateLegendBounds(this.initialClipRect, this.availableSize);
        }
        this.chartAxisLayoutPanel.measureAxis(this.initialClipRect);
    }
    /**
     * Handles the print method for chart control.
     */
    print(id) {
        let exportChart = new ExportUtils(this);
        exportChart.print(id);
    }
    /**
     * Handles the export method for chart control.
     * @param type
     * @param fileName
     */
    export(type, fileName, orientation) {
        let exportChart = new ExportUtils(this);
        exportChart.export(type, fileName, orientation);
    }
    /**
     * Defines the trendline initialization
     */
    initTrendLines() {
        for (let series of this.visibleSeries) {
            let trendIndex = 0;
            for (let trendline of series.trendlines) {
                let trendLine = trendline;
                let type = firstToLowerCase(trendLine.type);
                if (this.trendLineModule) {
                    trendLine.index = trendIndex;
                    trendLine.sourceIndex = series.index;
                    this.trendLineModule.initSeriesCollection(trendLine, this);
                    if (trendLine.targetSeries) {
                        trendLine.targetSeries.xAxisName = series.xAxisName;
                        trendLine.targetSeries.yAxisName = series.yAxisName;
                        this.visibleSeries.push(trendLine.targetSeries);
                    }
                }
                trendIndex++;
            }
        }
    }
    calculateAreaType() {
        let series = this.series[0];
        if (series) {
            this.requireInvertedAxis = ((series.type.indexOf('Bar') !== -1) && !this.isTransposed) ||
                ((series.type.indexOf('Bar') === -1) && this.isTransposed && this.chartAreaType !== 'PolarRadar');
        }
        this.chartAxisLayoutPanel = this.chartAreaType === 'PolarRadar' ? (this.polarSeriesModule || this.radarSeriesModule)
            : new CartesianAxisLayoutPanel(this);
    }
    calculateVisibleAxis() {
        let axis;
        let axes = [this.primaryXAxis, this.primaryYAxis];
        axes = this.chartAreaType === 'Cartesian' ? axes.concat(this.axes) : axes;
        this.axisCollections = [];
        if (this.zoomModule) {
            this.zoomModule.isPanning = this.zoomModule.isAxisZoomed(axes) && this.zoomSettings.enablePan;
            this.svgObject.setAttribute('cursor', this.zoomModule.isPanning ? 'pointer' : 'auto');
        }
        for (let i = 0, len = axes.length; i < len; i++) {
            axis = axes[i];
            axis.series = [];
            axis.labels = [];
            for (let series of this.visibleSeries) {
                this.initAxis(series, axis, true);
            }
            for (let indicator of this.indicators) {
                this.initAxis(indicator, axis, false);
            }
            if (axis.orientation != null) {
                this.axisCollections.push(axis);
            }
        }
        if (this.rows.length > 0 && this.columns.length > 0) {
            this.chartAxisLayoutPanel.measure();
        }
    }
    initAxis(series, axis, isSeries) {
        if (series.xAxisName === axis.name || (series.xAxisName == null && axis.name === 'primaryXAxis')) {
            axis.orientation = this.requireInvertedAxis ? 'Vertical' : 'Horizontal';
            series.xAxis = axis;
            if (isSeries) {
                axis.series.push(series);
            }
        }
        else if (series.yAxisName === axis.name || (series.yAxisName == null && axis.name === 'primaryYAxis')) {
            axis.orientation = this.requireInvertedAxis ? 'Horizontal' : 'Vertical';
            series.yAxis = axis;
            if (isSeries) {
                axis.series.push(series);
            }
        }
    }
    initTechnicalIndicators() {
        let i = 0;
        for (let indicator of this.indicators) {
            let techIndicator = indicator;
            let type = firstToLowerCase(techIndicator.type);
            if (this[type + 'IndicatorModule']) {
                techIndicator.index = i;
                this[type + 'IndicatorModule'].initSeriesCollection(techIndicator, this);
                for (let targetSeries of techIndicator.targetSeries) {
                    if (indicator.seriesName || indicator.dataSource) {
                        this.visibleSeries.push(targetSeries);
                    }
                }
            }
            i++;
        }
    }
    /** @private */
    refreshTechnicalIndicator(series) {
        if (this.indicators.length) {
            let targetIndicator = null;
            if (series instanceof Series && series.category !== 'Indicator') {
                for (let indicator of this.indicators) {
                    if (indicator.seriesName === series.name && !indicator.dataSource) {
                        targetIndicator = indicator;
                        targetIndicator.setDataSource(series, this);
                    }
                }
            }
            else if (series instanceof TechnicalIndicator) {
                targetIndicator = series;
                targetIndicator.setDataSource(series instanceof Series ? series : null, this);
            }
        }
    }
    calculateVisibleSeries() {
        let series;
        this.visibleSeries = [];
        let colors = this.palettes.length ? this.palettes : getSeriesColor(this.theme);
        let count = colors.length;
        for (let i = 0, len = this.series.length; i < len; i++) {
            series = this.series[i];
            series.index = i;
            series.interior = series.fill || colors[i % count];
            switch (series.type) {
                case 'Bar':
                case 'StackingBar':
                case 'StackingBar100':
                    if (this.series[0].type.indexOf('Bar') === -1) {
                        continue;
                    }
                    break;
                case 'Polar':
                case 'Radar':
                    if (this.chartAreaType !== 'PolarRadar') {
                        continue;
                    }
                    if (this.chartAreaType === 'PolarRadar' && ((series.xAxisName === null && series.yAxisName !== null) ||
                        (series.xAxisName !== null && series.yAxisName === null) ||
                        (series.xAxisName !== null && series.yAxisName !== null))) {
                        continue;
                    }
                    break;
                default:
                    if (this.chartAreaType === 'PolarRadar' || this.series[0].type.indexOf('Bar') > -1) {
                        continue;
                    }
                    break;
            }
            this.visibleSeries.push(series);
            this.series[i] = series;
        }
    }
    renderTitle() {
        if (this.title) {
            let anchor = this.titleStyle.textAlignment === 'Near' ? 'start' :
                this.titleStyle.textAlignment === 'Far' ? 'end' : 'middle';
            this.elementSize = measureText(this.title, this.titleStyle);
            let options = new TextOption(this.element.id + '_ChartTitle', titlePositionX(this.availableSize, this.margin.left, this.margin.right, this.titleStyle), this.margin.top + ((this.elementSize.height) * 3 / 4), anchor, this.titleCollection, '', 'auto');
            let element = textElement(options, this.titleStyle, this.titleStyle.color || this.themeStyle.chartTitle, this.svgObject);
            element.setAttribute('aria-label', this.description || this.title);
            element.setAttribute('tabindex', this.tabIndex.toString());
        }
    }
    renderBorder() {
        let width = this.border.width;
        let rect = new RectOption(this.element.id + '_ChartBorder', this.background || this.themeStyle.background, this.border, 1, new Rect(width / 2, width / 2, this.availableSize.width - width, this.availableSize.height - width));
        this.htmlObject = this.renderer.drawRectangle(rect);
        this.svgObject.appendChild(this.htmlObject);
    }
    renderAreaBorder() {
        if (this.chartAreaType === 'PolarRadar') {
            return null;
        }
        else {
            let rect = new RectOption(this.element.id + '_ChartAreaBorder', this.chartArea.background, { width: this.chartArea.border.width, color: this.chartArea.border.color || this.themeStyle.areaBorder }, this.chartArea.opacity, this.chartAxisLayoutPanel.seriesClipRect);
            this.htmlObject = this.renderer.drawRectangle(rect);
            this.svgObject.appendChild(this.htmlObject);
        }
    }
    /**
     * To add series for the chart
     * @param {SeriesModel[]} seriesCollection - Defines the series collection to be added in chart.
     * @return {void}.
     */
    addSeries(seriesCollection) {
        for (let series of seriesCollection) {
            series = new Series(this, 'series', series);
            this.series.push(series);
        }
        this.refresh();
    }
    /**
     * To Remove series for the chart
     * @param index - Defines the series index to be remove in chart series
     * @return {void}
     */
    removeSeries(index) {
        this.series.splice(index, 1);
        this.refresh();
    }
    /**
     * To destroy the widget
     * @method destroy
     * @return {void}.
     * @member of Chart
     */
    destroy() {
        this.unWireEvents();
        super.destroy();
        this.element.classList.remove('e-chart');
    }
    /**
     * Get component name
     */
    getModuleName() {
        return 'chart';
    }
    /**
     * Get the properties to be maintained in the persisted state.
     * @private
     */
    getPersistData() {
        let keyEntity = ['loaded', 'animationComplete'];
        return this.addOnPersist(keyEntity);
    }
    /**
     * Method to create SVG element.
     */
    createChartSvg() {
        this.removeSvg();
        createSvg(this);
    }
    /**
     * Method to bind events for chart
     */
    unWireEvents() {
        /*! Find the Events type */
        let startEvent = Browser.touchStartEvent;
        let moveEvent = Browser.touchMoveEvent;
        let stopEvent = Browser.touchEndEvent;
        let cancelEvent = Browser.isPointer ? 'pointerleave' : 'mouseleave';
        /*! UnBind the Event handler */
        EventHandler.remove(this.element, startEvent, this.chartOnMouseDown);
        EventHandler.remove(this.element, moveEvent, this.mouseMove);
        EventHandler.remove(this.element, stopEvent, this.mouseEnd);
        EventHandler.remove(this.element, 'click', this.chartOnMouseClick);
        EventHandler.remove(this.element, 'contextmenu', this.chartRightClick);
        EventHandler.remove(this.element, cancelEvent, this.mouseLeave);
        window.removeEventListener((Browser.isTouch && ('orientation' in window && 'onorientationchange' in window)) ? 'orientationchange' : 'resize', this.chartResize);
    }
    wireEvents() {
        /*! Find the Events type */
        let cancelEvent = Browser.isPointer ? 'pointerleave' : 'mouseleave';
        /*! Bind the Event handler */
        EventHandler.add(this.element, Browser.touchStartEvent, this.chartOnMouseDown, this);
        EventHandler.add(this.element, Browser.touchMoveEvent, this.mouseMove, this);
        EventHandler.add(this.element, Browser.touchEndEvent, this.mouseEnd, this);
        EventHandler.add(this.element, 'click', this.chartOnMouseClick, this);
        EventHandler.add(this.element, 'contextmenu', this.chartRightClick, this);
        EventHandler.add(this.element, cancelEvent, this.mouseLeave, this);
        window.addEventListener((Browser.isTouch && ('orientation' in window && 'onorientationchange' in window)) ? 'orientationchange' : 'resize', this.chartResize.bind(this));
        this.longPress = this.longPress.bind(this);
        new Touch(this.element, { tapHold: this.longPress, tapHoldThreshold: 500 });
        /*! Apply the style for chart */
        this.setStyle(this.element);
    }
    chartRightClick(event) {
        if (this.crosshair.enable && this.crosshairModule &&
            (event.buttons === 2 || event.which === 0 || event.pointerType === 'touch')) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        return true;
    }
    setStyle(element) {
        let zooming = this.zoomSettings;
        let disableScroll = zooming.enableSelectionZooming || zooming.enableMouseWheelZooming || zooming.enablePinchZooming ||
            this.selectionMode !== 'None' || this.crosshair.enable;
        element.style.touchAction = disableScroll ? 'none' : 'element';
        element.style.msTouchAction = disableScroll ? 'none' : 'element';
        element.style.msContentZooming = 'none';
        element.style.msUserSelect = 'none';
        element.style.webkitUserSelect = 'none';
        element.style.position = 'relative';
        element.style.display = 'block';
    }
    /**
     * Finds the orientation.
     * @return {boolean}
     * @private
     */
    isOrientation() {
        return ('orientation' in window && 'onorientationchange' in window);
    }
    /**
     * Handles the long press on chart.
     * @return {boolean}
     * @private
     */
    longPress(e) {
        this.mouseX = (e && e.originalEvent.changedTouches) ? (e.originalEvent.changedTouches[0].clientX) : 0;
        this.mouseY = (e && e.originalEvent.changedTouches) ? (e.originalEvent.changedTouches[0].clientY) : 0;
        this.startMove = true;
        this.setMouseXY(this.mouseX, this.mouseY);
        this.notify('tapHold', e);
        return false;
    }
    /**
     * To find mouse x, y for aligned chart element svg position
     */
    setMouseXY(pageX, pageY) {
        let rect = this.element.getBoundingClientRect();
        let svgRect = getElement(this.element.id + '_svg').getBoundingClientRect();
        this.mouseX = (pageX - rect.left) - Math.max(svgRect.left - rect.left, 0);
        this.mouseY = (pageY - rect.top) - Math.max(svgRect.top - rect.top, 0);
    }
    /**
     * Handles the chart resize.
     * @return {boolean}
     * @private
     */
    chartResize(e) {
        this.animateSeries = false;
        if (this.resizeTo) {
            clearTimeout(this.resizeTo);
        }
        this.resizeTo = setTimeout(() => {
            if (this.isDestroyed) {
                clearTimeout(this.resizeTo);
                return;
            }
            this.createChartSvg();
            this.refreshAxis();
            this.refreshBound();
            this.trigger('loaded', { chart: this });
        }, 500);
        return false;
    }
    /**
     * Handles the mouse move.
     * @return {boolean}
     * @private
     */
    mouseMove(e) {
        let pageX;
        let pageY;
        let touchArg;
        if (e.type === 'touchmove') {
            this.isTouch = true;
            touchArg = e;
            pageX = touchArg.changedTouches[0].clientX;
            pageY = touchArg.changedTouches[0].clientY;
        }
        else {
            this.isTouch = e.pointerType === 'touch' || e.pointerType === '2' || this.isTouch;
            pageX = e.clientX;
            pageY = e.clientY;
        }
        this.setMouseXY(pageX, pageY);
        this.chartOnMouseMove(e);
        return false;
    }
    /**
     * Handles the mouse leave.
     * @return {boolean}
     * @private
     */
    mouseLeave(e) {
        let pageX;
        let pageY;
        let touchArg;
        if (e.type === 'touchleave') {
            this.isTouch = true;
            touchArg = e;
            pageX = touchArg.changedTouches[0].clientX;
            pageY = touchArg.changedTouches[0].clientY;
        }
        else {
            this.isTouch = e.pointerType === 'touch' || e.pointerType === '2';
            pageX = e.clientX;
            pageY = e.clientY;
        }
        this.setMouseXY(pageX, pageY);
        this.chartOnMouseLeave(e);
        return false;
    }
    /**
     * Handles the mouse leave on chart.
     * @return {boolean}
     * @private
     */
    chartOnMouseLeave(e) {
        let element = e.target;
        let cancelEvent = Browser.isPointer ? 'pointerleave' : 'mouseleave';
        this.trigger(chartMouseLeave, { target: element.id, x: this.mouseX, y: this.mouseY });
        this.isChartDrag = false;
        this.notify(cancelEvent, e);
        return false;
    }
    /**
     * Handles the mouse click on chart.
     * @return {boolean}
     * @private
     */
    chartOnMouseClick(e) {
        let element = e.target;
        this.trigger(chartMouseClick, { target: element.id, x: this.mouseX, y: this.mouseY });
        if (this.pointClick) {
            this.triggerPointEvent(pointClick);
        }
        this.notify('click', e);
        return false;
    }
    triggerPointEvent(event) {
        let data = new ChartData(this);
        let pointData = data.getData();
        if (pointData.series && pointData.point) {
            this.trigger(event, { series: pointData.series,
                point: pointData.point,
                seriesIndex: pointData.series.index, pointIndex: pointData.point.index,
                x: this.mouseX, y: this.mouseY });
        }
    }
    /**
     * Handles the mouse move on chart.
     * @return {boolean}
     * @private
     */
    chartOnMouseMove(e) {
        let element = e.target;
        this.trigger(chartMouseMove, { target: element.id, x: this.mouseX, y: this.mouseY });
        if (this.pointMove) {
            this.triggerPointEvent(pointMove);
        }
        // Tooltip for chart series.
        if (!this.isTouch) {
            this.titleTooltip(e, this.mouseX, this.mouseY);
            this.axisTooltip(e, this.mouseX, this.mouseY);
        }
        this.notify(Browser.touchMoveEvent, e);
        this.isTouch = false;
        return false;
    }
    titleTooltip(event, x, y, isTouch) {
        let targetId = event.target.id;
        if ((targetId === (this.element.id + '_ChartTitle')) && (event.target.textContent.indexOf('...') > -1)) {
            showTooltip(this.title, x, y, this.element.offsetWidth, this.element.id + '_EJ2_Title_Tooltip', getElement(this.element.id + '_Secondary_Element'), isTouch);
        }
        else {
            removeElement(this.element.id + '_EJ2_Title_Tooltip');
        }
    }
    axisTooltip(event, x, y, isTouch) {
        let targetId = event.target.id;
        if (((targetId.indexOf('AxisLabel') > -1) || targetId.indexOf('Axis_MultiLevelLabel') > -1) &&
            (event.target.textContent.indexOf('...') > -1)) {
            showTooltip(this.findAxisLabel(targetId), x, y, this.element.offsetWidth, this.element.id + '_EJ2_AxisLabel_Tooltip', getElement(this.element.id + '_Secondary_Element'), isTouch);
        }
        else {
            removeElement(this.element.id + '_EJ2_AxisLabel_Tooltip');
        }
    }
    findAxisLabel(text) {
        let texts;
        if (text.indexOf('AxisLabel') > -1) {
            texts = ((text.replace(this.element.id, '')).replace('AxisLabel_', '')).split('_');
            return this.axisCollections[parseInt(texts[0], 10)].visibleLabels[parseInt(texts[1], 10)].originalText;
        }
        else {
            texts = ((text.replace(this.element.id, '')).replace('Axis_MultiLevelLabel_Level_', '').replace('Text_', '')).split('_');
            return (this.axisCollections[parseInt(texts[0], 10)].multiLevelLabels[parseInt(texts[1], 10)]
                .categories[parseInt(texts[2], 10)].text);
        }
    }
    /**
     * Handles the mouse down on chart.
     * @return {boolean}
     * @private
     */
    chartOnMouseDown(e) {
        let pageX;
        let pageY;
        let target;
        let touchArg;
        let offset = Browser.isDevice ? 20 : 30;
        let rect = this.element.getBoundingClientRect();
        let element = e.target;
        this.trigger(chartMouseDown, { target: element.id, x: this.mouseX, y: this.mouseY });
        if (e.type === 'touchstart') {
            this.isTouch = true;
            touchArg = e;
            pageX = touchArg.changedTouches[0].clientX;
            pageY = touchArg.changedTouches[0].clientY;
            target = touchArg.target;
        }
        else {
            this.isTouch = e.pointerType === 'touch';
            pageX = e.clientX;
            pageY = e.clientY;
            target = e.target;
        }
        let svgRect = getElement(this.element.id + '_svg').getBoundingClientRect();
        this.mouseDownX = this.previousMouseMoveX = (pageX - rect.left) - Math.max(svgRect.left - rect.left, 0);
        this.mouseDownY = this.previousMouseMoveY = (pageY - rect.top) - Math.max(svgRect.top - rect.top, 0);
        if (this.isTouch) {
            this.isDoubleTap = (new Date().getTime() < this.threshold && target.id.indexOf(this.element.id + '_Zooming_') === -1 &&
                (this.mouseDownX - offset >= this.mouseX || this.mouseDownX + offset >= this.mouseX) &&
                (this.mouseDownY - offset >= this.mouseY || this.mouseDownY + offset >= this.mouseY) &&
                (this.mouseX - offset >= this.mouseDownX || this.mouseX + offset >= this.mouseDownX) &&
                (this.mouseY - offset >= this.mouseDownY || this.mouseY + offset >= this.mouseDownY));
        }
        this.notify(Browser.touchStartEvent, e);
        return false;
    }
    /**
     * Handles the mouse up.
     * @return {boolean}
     * @private
     */
    mouseEnd(e) {
        let pageY;
        let pageX;
        let touchArg;
        if (e.type === 'touchend') {
            touchArg = e;
            pageX = touchArg.changedTouches[0].clientX;
            this.isTouch = true;
            pageY = touchArg.changedTouches[0].clientY;
        }
        else {
            pageY = e.clientY;
            pageX = e.clientX;
            this.isTouch = e.pointerType === 'touch' || e.pointerType === '2';
        }
        this.setMouseXY(pageX, pageY);
        this.chartOnMouseUp(e);
        return false;
    }
    /**
     * Handles the mouse up.
     * @return {boolean}
     * @private
     */
    chartOnMouseUp(e) {
        let element = e.target;
        this.trigger(chartMouseUp, { target: element.id, x: this.mouseX, y: this.mouseY });
        this.isChartDrag = false;
        if (this.isTouch) {
            this.titleTooltip(e, this.mouseX, this.mouseY, this.isTouch);
            this.axisTooltip(e, this.mouseX, this.mouseY, this.isTouch);
            this.threshold = new Date().getTime() + 300;
        }
        this.seriesElements.removeAttribute('clip-path');
        this.notify(Browser.touchEndEvent, e);
        return false;
    }
    /**
     * Method to set culture for chart
     */
    setCulture() {
        this.intl = new Internationalization();
        this.setLocaleConstants();
        this.localeObject = new L10n(this.getModuleName(), this.defaultLocalConstants, this.locale);
    }
    /**
     * Method to set the annotation content dynamically for chart.
     */
    setAnnotationValue(annotationIndex, content) {
        let parentNode = getElement(this.element.id + '_Annotation_Collections');
        let annotation = this.annotations[annotationIndex];
        let element;
        if (content !== null) {
            annotation.content = content;
            if (parentNode) {
                removeElement(this.element.id + '_Annotation_' + annotationIndex);
                element = createElement('div');
                this.annotationModule.processAnnotation(annotation, annotationIndex, element);
                parentNode.appendChild(element.children[0]);
            }
            else {
                this.annotationModule.renderAnnotations(getElement(this.element.id + '_Secondary_Element'));
            }
        }
    }
    /**
     * Method to set locale constants
     */
    setLocaleConstants() {
        this.defaultLocalConstants = {
            ZoomIn: 'ZoomIn',
            Zoom: 'Zoom',
            ZoomOut: 'ZoomOut',
            Pan: 'Pan',
            Reset: 'Reset',
            ResetZoom: 'Reset Zoom'
        };
    }
    /**
     * Theming for chart
     */
    setTheme() {
        /*! Set theme */
        this.themeStyle = getThemeColor(this.theme);
    }
    /**
     * To provide the array of modules needed for control rendering
     * @return {ModuleDeclaration[]}
     * @private
     */
    requiredModules() {
        let modules = [];
        let series = this.series;
        let enableAnnotation = false;
        let moduleName;
        let errorBarVisible = false;
        let dataLabelEnable = false;
        let zooming = this.zoomSettings;
        this.chartAreaType = (series.length > 0 && (series[0].type === 'Polar' || series[0].type === 'Radar')) ? 'PolarRadar' : 'Cartesian';
        if (this.tooltip.enable) {
            modules.push({
                member: 'Tooltip',
                args: [this]
            });
        }
        series.map((value) => {
            this.isLegend = (this.legendSettings.visible && ((value.name !== '') || !!this.isLegend));
            moduleName = value.type.indexOf('100') !== -1 ? value.type.replace('100', '') + 'Series' : value.type + 'Series';
            errorBarVisible = value.errorBar.visible || errorBarVisible;
            dataLabelEnable = value.marker.dataLabel.visible || dataLabelEnable;
            if (!modules.some((currentModule) => {
                return currentModule.member === moduleName;
            })) {
                modules.push({
                    member: moduleName,
                    args: [this, series]
                });
            }
            if (this.chartAreaType === 'PolarRadar') {
                modules.push({
                    member: value.drawType + 'Series',
                    args: [this, series]
                });
            }
        });
        this.findIndicatorModules(modules);
        this.findTrendLineModules(modules);
        modules = this.findAxisModule(modules);
        enableAnnotation = this.annotations.some((value) => {
            return (value.content !== null);
        });
        if (errorBarVisible) {
            modules.push({
                member: 'ErrorBar',
                args: [this, series]
            });
        }
        if (this.isLegend) {
            modules.push({
                member: 'Legend',
                args: [this]
            });
        }
        if (this.chartAreaType !== 'PolarRadar' && (zooming.enableSelectionZooming
            || zooming.enableMouseWheelZooming || zooming.enablePinchZooming || zooming.enablePan)) {
            modules.push({
                member: 'Zoom',
                args: [this, this.zoomSettings]
            });
        }
        if (this.selectionMode !== 'None' && !(this.chartAreaType === 'PolarRadar' &&
            this.selectionMode.indexOf('Drag') > -1)) {
            modules.push({
                member: 'Selection',
                args: [this]
            });
        }
        if (dataLabelEnable) {
            modules.push({
                member: 'DataLabel',
                args: [this, series]
            });
        }
        if (enableAnnotation) {
            modules.push({
                member: 'Annotation',
                args: [this]
            });
        }
        if (this.chartAreaType !== 'PolarRadar' && this.crosshair.enable) {
            modules.push({
                member: 'Crosshair',
                args: [this]
            });
        }
        return modules;
    }
    findAxisModule(modules) {
        let axisCollections = [];
        axisCollections.push(this.primaryXAxis);
        axisCollections.push(this.primaryYAxis);
        axisCollections = axisCollections.concat(this.axes);
        let datetimeEnabled = false;
        let categoryEnabled = false;
        let logarithmicEnabled = false;
        let striplineEnabled = false;
        let dateTimeCategoryEnabled = false;
        let multiLevelEnabled = false;
        for (let axis of axisCollections) {
            datetimeEnabled = axis.valueType === 'DateTime' || datetimeEnabled;
            categoryEnabled = axis.valueType === 'Category' || categoryEnabled;
            logarithmicEnabled = axis.valueType === 'Logarithmic' || logarithmicEnabled;
            dateTimeCategoryEnabled = axis.valueType === 'DateTimeCategory' || dateTimeCategoryEnabled;
            striplineEnabled = this.findStriplineVisibility(axis.stripLines) || striplineEnabled;
            multiLevelEnabled = axis.multiLevelLabels.length > 0 || multiLevelEnabled;
        }
        if (datetimeEnabled) {
            modules.push({
                member: 'DateTime',
                args: [this]
            });
        }
        if (categoryEnabled) {
            modules.push({
                member: 'Category',
                args: [this]
            });
        }
        if (logarithmicEnabled) {
            modules.push({
                member: 'Logarithmic',
                args: [this]
            });
        }
        if (striplineEnabled) {
            modules.push({
                member: 'StripLine',
                args: [this]
            });
        }
        if (multiLevelEnabled) {
            modules.push({
                member: 'MultiLevelLabel',
                args: [this]
            });
        }
        if (dateTimeCategoryEnabled) {
            modules.push({
                member: 'DateTimeCategory',
                args: [this]
            });
        }
        return modules;
    }
    findIndicatorModules(modules) {
        let macdEnable;
        let bandEnable;
        let indicators = this.indicators;
        if (this.indicators.length) {
            modules.push({
                member: 'LineSeries',
                args: [this]
            });
            indicators.map((indicator) => {
                macdEnable = macdEnable || indicator.type === 'Macd';
                bandEnable = bandEnable || indicator.type === 'BollingerBands';
            });
            if (macdEnable) {
                modules.push({
                    member: 'ColumnSeries',
                    args: [this]
                });
            }
            if (bandEnable) {
                modules.push({
                    member: 'RangeAreaSeries',
                    args: [this]
                });
            }
            for (let indicator of this.indicators) {
                modules.push({
                    member: indicator.type + 'Indicator',
                    args: [this]
                });
            }
        }
    }
    findTrendLineModules(modules) {
        let isLine;
        let isSpline;
        for (let series of this.series) {
            let markerEnable;
            series.trendlines.map((trendline) => {
                markerEnable = markerEnable || trendline.marker.visible;
                isLine = isLine || (trendline.type === 'Linear' || trendline.type === 'MovingAverage') ? true : false;
                isSpline = isSpline || !isLine ? true : false;
            });
            if (markerEnable) {
                modules.push({
                    member: 'Marker',
                    args: [this, series]
                });
            }
        }
        if (isLine || isSpline) {
            modules.push({
                member: 'TrendLine',
                args: [this]
            });
        }
        if (isLine) {
            modules.push({
                member: 'LineSeries',
                args: [this]
            });
        }
        if (isSpline) {
            modules.push({
                member: 'SplineSeries',
                args: [this]
            });
        }
    }
    findStriplineVisibility(striplines) {
        let visible = false;
        for (let stripline of striplines) {
            if (stripline.visible) {
                visible = true;
                break;
            }
        }
        return visible;
    }
    /**
     * To Remove the SVG.
     * @return {boolean}
     * @private
     */
    removeSvg() {
        if (document.getElementById(this.element.id + '_Secondary_Element')) {
            remove(document.getElementById(this.element.id + '_Secondary_Element'));
        }
        let removeLength = 0;
        if (this.zoomModule && this.zoomModule.pinchTarget) {
            this.zoomModule.pinchTarget.id = '';
            this.zoomModule.pinchTarget.setAttribute('opacity', '0');
            this.svgObject.appendChild(this.zoomModule.pinchTarget);
            removeLength = 1;
        }
        if (this.svgObject) {
            while (this.svgObject.childNodes.length > removeLength) {
                this.svgObject.removeChild(this.svgObject.firstChild);
            }
            if (!this.svgObject.hasChildNodes() && this.svgObject.parentNode) {
                remove(this.svgObject);
            }
        }
    }
    refreshDefinition(definitions) {
        for (let item of definitions) {
            item.axes = [];
        }
    }
    /**
     * Refresh the axis default value.
     * @return {boolean}
     * @private
     */
    refreshAxis() {
        let axis = this.primaryXAxis;
        axis.rect = new Rect(undefined, undefined, 0, 0);
        axis = this.primaryYAxis;
        axis.isStack100 = false;
        axis.rect = new Rect(undefined, undefined, 0, 0);
        for (let item of this.axes) {
            axis = item;
            axis.rect = new Rect(undefined, undefined, 0, 0);
            axis.isStack100 = false;
        }
    }
    axisChange(axis) {
        if (!axis.name && !axis.valueType) {
            return false;
        }
        this.refreshDefinition(this.columns);
        this.refreshDefinition(this.rows);
        this.calculateVisibleAxis();
        this.processData();
        return true;
    }
    /**
     * Called internally if any of the property value changed.
     * @private
     */
    // tslint:disable-next-line:max-func-body-length
    onPropertyChanged(newProp, oldProp) {
        let renderer = false;
        let refreshBounds = false;
        if (Object.keys(newProp).length === 1 && Object.keys(newProp)[0] === 'indicators') {
            //add valid check, it should happen only when property change is triggered for target series
            return;
        }
        this.animateSeries = false;
        if (!this.delayRedraw) {
            for (let prop of Object.keys(newProp)) {
                switch (prop) {
                    case 'primaryXAxis':
                        refreshBounds = this.axisChange(newProp.primaryXAxis);
                        if (newProp.primaryXAxis.edgeLabelPlacement) {
                            renderer = true;
                        }
                        if (!newProp.primaryXAxis.crosshairTooltip) {
                            refreshBounds = true;
                        }
                        break;
                    case 'primaryYAxis':
                        refreshBounds = this.axisChange(newProp.primaryYAxis);
                        if (newProp.primaryYAxis.edgeLabelPlacement) {
                            renderer = true;
                        }
                        if (!newProp.primaryYAxis.crosshairTooltip) {
                            refreshBounds = true;
                        }
                        break;
                    case 'height':
                    case 'width':
                        this.createChartSvg();
                        refreshBounds = true;
                        break;
                    case 'title':
                        refreshBounds = true;
                        break;
                    case 'titleStyle':
                        if (newProp.titleStyle && (newProp.titleStyle.size || newProp.titleStyle.textOverflow)) {
                            refreshBounds = true;
                        }
                        else {
                            renderer = true;
                        }
                        break;
                    case 'border':
                        renderer = true;
                        break;
                    case 'zoomSettings':
                    case 'background':
                        renderer = true;
                        break;
                    case 'chartArea':
                        if (newProp.chartArea.border && newProp.chartArea.border.width) {
                            refreshBounds = true;
                        }
                        renderer = true;
                        break;
                    case 'legendSettings':
                        if (!newProp.legendSettings.background || !newProp.legendSettings.opacity) {
                            refreshBounds = true;
                        }
                        renderer = true;
                        break;
                    case 'palettes':
                        this.calculateVisibleSeries();
                        renderer = true;
                        break;
                    case 'selectedDataIndexes':
                    case 'selectionMode':
                        if (this.selectionModule && newProp.selectionMode && newProp.selectionMode.indexOf('Drag') === -1) {
                            this.selectionModule.redrawSelection(this, oldProp.selectionMode);
                        }
                        break;
                    case 'isMultiSelect':
                        if (this.selectionModule && !newProp.isMultiSelect && this.selectionModule.selectedDataIndexes.length > 1) {
                            this.selectionModule.redrawSelection(this, oldProp.selectionMode);
                        }
                        break;
                    case 'theme':
                        this.animateSeries = true;
                        break;
                    case 'locale':
                    case 'currencyCode':
                        super.refresh();
                        break;
                    case 'tooltip':
                        this.tooltipModule.previousPoints = [];
                        break;
                }
            }
            if (!refreshBounds && renderer) {
                this.removeSvg();
                this.renderElements();
                this.trigger('loaded', { chart: this });
            }
            if (refreshBounds) {
                this.removeSvg();
                this.refreshAxis();
                this.refreshBound();
                this.trigger('loaded', { chart: this });
            }
        }
    }
};
__decorate([
    Property(null)
], Chart.prototype, "width", void 0);
__decorate([
    Property(null)
], Chart.prototype, "height", void 0);
__decorate([
    Property('')
], Chart.prototype, "title", void 0);
__decorate([
    Complex(Theme.chartTitleFont, Font)
], Chart.prototype, "titleStyle", void 0);
__decorate([
    Complex({}, Margin)
], Chart.prototype, "margin", void 0);
__decorate([
    Complex({ color: '#DDDDDD', width: 0 }, Border)
], Chart.prototype, "border", void 0);
__decorate([
    Property(null)
], Chart.prototype, "background", void 0);
__decorate([
    Complex({ border: { color: null, width: 0.5 }, background: 'transparent' }, ChartArea)
], Chart.prototype, "chartArea", void 0);
__decorate([
    Complex({ name: 'primaryXAxis' }, Axis)
], Chart.prototype, "primaryXAxis", void 0);
__decorate([
    Complex({ name: 'primaryYAxis' }, Axis)
], Chart.prototype, "primaryYAxis", void 0);
__decorate([
    Collection([{}], Row)
], Chart.prototype, "rows", void 0);
__decorate([
    Collection([{}], Column)
], Chart.prototype, "columns", void 0);
__decorate([
    Collection([{}], Axis)
], Chart.prototype, "axes", void 0);
__decorate([
    Collection([{}], Series)
], Chart.prototype, "series", void 0);
__decorate([
    Collection([{}], ChartAnnotationSettings)
], Chart.prototype, "annotations", void 0);
__decorate([
    Property([])
], Chart.prototype, "palettes", void 0);
__decorate([
    Property('Material')
], Chart.prototype, "theme", void 0);
__decorate([
    Complex({}, TooltipSettings)
], Chart.prototype, "tooltip", void 0);
__decorate([
    Complex({}, CrosshairSettings)
], Chart.prototype, "crosshair", void 0);
__decorate([
    Complex({}, LegendSettings)
], Chart.prototype, "legendSettings", void 0);
__decorate([
    Complex({}, ZoomSettings)
], Chart.prototype, "zoomSettings", void 0);
__decorate([
    Property('None')
], Chart.prototype, "selectionMode", void 0);
__decorate([
    Property(false)
], Chart.prototype, "isMultiSelect", void 0);
__decorate([
    Collection([], Indexes)
], Chart.prototype, "selectedDataIndexes", void 0);
__decorate([
    Property(false)
], Chart.prototype, "useGroupingSeparator", void 0);
__decorate([
    Property(false)
], Chart.prototype, "isTransposed", void 0);
__decorate([
    Collection([], TechnicalIndicator)
], Chart.prototype, "indicators", void 0);
__decorate([
    Property(null)
], Chart.prototype, "description", void 0);
__decorate([
    Property(1)
], Chart.prototype, "tabIndex", void 0);
__decorate([
    Property(true)
], Chart.prototype, "enableSideBySidePlacement", void 0);
__decorate([
    Event()
], Chart.prototype, "annotationRender", void 0);
__decorate([
    Event()
], Chart.prototype, "beforePrint", void 0);
__decorate([
    Event()
], Chart.prototype, "loaded", void 0);
__decorate([
    Event()
], Chart.prototype, "load", void 0);
__decorate([
    Event()
], Chart.prototype, "animationComplete", void 0);
__decorate([
    Event()
], Chart.prototype, "legendRender", void 0);
__decorate([
    Event()
], Chart.prototype, "textRender", void 0);
__decorate([
    Event()
], Chart.prototype, "pointRender", void 0);
__decorate([
    Event()
], Chart.prototype, "seriesRender", void 0);
__decorate([
    Event()
], Chart.prototype, "axisLabelRender", void 0);
__decorate([
    Event()
], Chart.prototype, "axisRangeCalculated", void 0);
__decorate([
    Event()
], Chart.prototype, "axisMultiLabelRender", void 0);
__decorate([
    Event()
], Chart.prototype, "tooltipRender", void 0);
__decorate([
    Event()
], Chart.prototype, "chartMouseMove", void 0);
__decorate([
    Event()
], Chart.prototype, "chartMouseClick", void 0);
__decorate([
    Event()
], Chart.prototype, "pointClick", void 0);
__decorate([
    Event()
], Chart.prototype, "pointMove", void 0);
__decorate([
    Event()
], Chart.prototype, "chartMouseLeave", void 0);
__decorate([
    Event()
], Chart.prototype, "chartMouseDown", void 0);
__decorate([
    Event()
], Chart.prototype, "chartMouseUp", void 0);
__decorate([
    Event()
], Chart.prototype, "dragComplete", void 0);
__decorate([
    Event()
], Chart.prototype, "zoomComplete", void 0);
__decorate([
    Property('USD')
], Chart.prototype, "currencyCode", void 0);
Chart = __decorate([
    NotifyPropertyChanges
], Chart);

/**
 * Common axis classes
 * @private
 */
class NiceInterval extends Double {
    /**
     * Method to calculate numeric datetime interval
     */
    calculateDateTimeNiceInterval(axis, size, start, end) {
        let oneDay = 24 * 60 * 60 * 1000;
        let startDate = new Date(start);
        let endDate = new Date(end);
        //var axisInterval ;
        let totalDays = (Math.abs((startDate.getTime() - endDate.getTime()) / (oneDay)));
        let interval;
        axis.actualIntervalType = axis.intervalType;
        switch (axis.intervalType) {
            case 'Years':
                interval = this.calculateNumericNiceInterval(axis, totalDays / 365, size);
                break;
            case 'Months':
                interval = this.calculateNumericNiceInterval(axis, totalDays / 30, size);
                break;
            case 'Days':
                interval = this.calculateNumericNiceInterval(axis, totalDays, size);
                break;
            case 'Hours':
                interval = this.calculateNumericNiceInterval(axis, totalDays * 24, size);
                break;
            case 'Minutes':
                interval = this.calculateNumericNiceInterval(axis, totalDays * 24 * 60, size);
                break;
            case 'Seconds':
                interval = this.calculateNumericNiceInterval(axis, totalDays * 24 * 60 * 60, size);
                break;
            case 'Auto':
                interval = this.calculateNumericNiceInterval(axis, totalDays / 365, size);
                if (interval >= 1) {
                    axis.actualIntervalType = 'Years';
                    return interval;
                }
                interval = this.calculateNumericNiceInterval(axis, totalDays / 30, size);
                if (interval >= 1) {
                    axis.actualIntervalType = 'Months';
                    return interval;
                }
                interval = this.calculateNumericNiceInterval(axis, totalDays, size);
                if (interval >= 1) {
                    axis.actualIntervalType = 'Days';
                    return interval;
                }
                interval = this.calculateNumericNiceInterval(axis, totalDays * 24, size);
                if (interval >= 1) {
                    axis.actualIntervalType = 'Hours';
                    return interval;
                }
                interval = this.calculateNumericNiceInterval(axis, totalDays * 24 * 60, size);
                if (interval >= 1) {
                    axis.actualIntervalType = 'Minutes';
                    return interval;
                }
                interval = this.calculateNumericNiceInterval(axis, totalDays * 24 * 60 * 60, size);
                axis.actualIntervalType = 'Seconds';
                return interval;
        }
        return interval;
    }
    /**
     * To get the skeleton for the DateTime axis.
     * @return {string}
     *  @private
     */
    getSkeleton(axis) {
        let skeleton;
        if (axis.skeleton) {
            return axis.skeleton;
        }
        if (axis.actualIntervalType === 'Years') {
            skeleton = 'yMMM';
        }
        else if (axis.actualIntervalType === 'Months') {
            skeleton = 'MMMd';
        }
        else if (axis.actualIntervalType === 'Days') {
            skeleton = 'yMd';
        }
        else if (axis.actualIntervalType === 'Hours') {
            skeleton = 'EHm';
        }
        else if (axis.actualIntervalType === 'Minutes' || axis.actualIntervalType === 'Seconds') {
            skeleton = 'Hms';
        }
        else {
            skeleton = 'Hms';
        }
        return skeleton;
    }
}

/**
 * `DateTime` module is used to render datetime axis.
 */
class DateTime extends NiceInterval {
    /**
     * Constructor for the dateTime module.
     * @private
     */
    constructor(chart) {
        super(chart);
    }
    /**
     * The function to calculate the range and labels for the axis.
     * @return {void}
     */
    calculateRangeAndInterval(size, axis) {
        this.calculateRange(axis, size);
        this.getActualRange(axis, size);
        this.applyRangePadding(axis, size);
        this.calculateVisibleLabels(axis);
    }
    /**
     * Actual Range for the axis.
     * @private
     */
    getActualRange(axis, size) {
        let option = {
            skeleton: 'full',
            type: 'dateTime'
        };
        let dateParser = this.chart.intl.getDateParser(option);
        let dateFormatter = this.chart.intl.getDateFormat(option);
        // Axis min
        if ((axis.minimum) !== null) {
            this.min = Date.parse(dateParser(dateFormatter(new Date(DataUtil.parse.parseJson({ val: axis.minimum }).val))));
        }
        else if (this.min === null || this.min === Number.POSITIVE_INFINITY) {
            this.min = Date.parse(dateParser(dateFormatter(new Date(1970, 1, 1))));
        }
        // Axis Max
        if ((axis.maximum) !== null) {
            this.max = Date.parse(dateParser(dateFormatter(new Date(DataUtil.parse.parseJson({ val: axis.maximum }).val))));
        }
        else if (this.max === null || this.max === Number.NEGATIVE_INFINITY) {
            this.max = Date.parse(dateParser(dateFormatter(new Date(1970, 5, 1))));
        }
        if (this.min === this.max) {
            this.max = this.max + 2592000000;
            this.min = this.min - 2592000000;
        }
        axis.actualRange = {};
        axis.doubleRange = new DoubleRange(this.min, this.max);
        let datetimeInterval = this.calculateDateTimeNiceInterval(axis, size, axis.doubleRange.start, axis.doubleRange.end);
        if (!axis.interval) {
            axis.actualRange.interval = datetimeInterval;
        }
        else {
            axis.actualRange.interval = axis.interval;
        }
        axis.actualRange.min = axis.doubleRange.start;
        axis.actualRange.max = axis.doubleRange.end;
    }
    /**
     * Apply padding for the range.
     * @private
     */
    applyRangePadding(axis, size) {
        this.start = (axis.actualRange.min);
        this.end = (axis.actualRange.max);
        let minimum;
        let maximum;
        let interval = axis.actualRange.interval;
        if (!axis.setRange()) {
            let rangePadding = axis.getRangePadding(this.chart);
            minimum = new Date(this.start);
            maximum = new Date(this.end);
            let intervalType = axis.actualIntervalType;
            if (rangePadding === 'None') {
                this.start = minimum.getTime();
                this.end = maximum.getTime();
            }
            else if (rangePadding === 'Additional' || rangePadding === 'Round') {
                switch (intervalType) {
                    case 'Years':
                        this.getYear(minimum, maximum, rangePadding, interval);
                        break;
                    case 'Months':
                        this.getMonth(minimum, maximum, rangePadding, interval);
                        break;
                    case 'Days':
                        this.getDay(minimum, maximum, rangePadding, interval);
                        break;
                    case 'Hours':
                        this.getHour(minimum, maximum, rangePadding, interval);
                        break;
                    case 'Minutes':
                        let minute = (minimum.getMinutes() / interval) * interval;
                        let endMinute = maximum.getMinutes() + (minimum.getMinutes() - minute);
                        if (rangePadding === 'Round') {
                            this.start = (new Date(minimum.getFullYear(), minimum.getMonth(), minimum.getDate(), minimum.getHours(), minute, 0)).getTime();
                            this.end = (new Date(maximum.getFullYear(), maximum.getMonth(), maximum.getDate(), maximum.getHours(), endMinute, 59)).getTime();
                        }
                        else {
                            this.start = (new Date(minimum.getFullYear(), maximum.getMonth(), minimum.getDate(), minimum.getHours(), minute + (-interval), 0)).getTime();
                            this.end = (new Date(maximum.getFullYear(), maximum.getMonth(), maximum.getDate(), maximum.getHours(), endMinute + (interval), 0)).getTime();
                        }
                        break;
                    case 'Seconds':
                        let second = (minimum.getSeconds() / interval) * interval;
                        let endSecond = maximum.getSeconds() + (minimum.getSeconds() - second);
                        if (rangePadding === 'Round') {
                            this.start = (new Date(minimum.getFullYear(), minimum.getMonth(), minimum.getDate(), minimum.getHours(), minimum.getMinutes(), second, 0)).getTime();
                            this.end = (new Date(maximum.getFullYear(), maximum.getMonth(), maximum.getDate(), maximum.getHours(), maximum.getMinutes(), endSecond, 0)).getTime();
                        }
                        else {
                            this.start = (new Date(minimum.getFullYear(), minimum.getMonth(), minimum.getDate(), minimum.getHours(), minimum.getMinutes(), second + (-interval), 0)).getTime();
                            this.end = (new Date(maximum.getFullYear(), maximum.getMonth(), maximum.getDate(), maximum.getHours(), maximum.getMinutes(), endSecond + (interval), 0)).getTime();
                        }
                        break;
                }
            }
        }
        axis.actualRange.min = (axis.minimum != null) ? this.min : this.start;
        axis.actualRange.max = (axis.maximum != null) ? this.max : this.end;
        axis.actualRange.delta = (axis.actualRange.max - axis.actualRange.min);
        axis.doubleRange = new DoubleRange(axis.actualRange.min, axis.actualRange.max);
        this.calculateVisibleRange(size, axis);
    }
    getYear(minimum, maximum, rangePadding, interval) {
        let startYear = minimum.getFullYear();
        let endYear = maximum.getFullYear();
        if (rangePadding === 'Additional') {
            this.start = (new Date(startYear - interval, 1, 1, 0, 0, 0)).getTime();
            this.end = (new Date(endYear + interval, 1, 1, 0, 0, 0)).getTime();
        }
        else {
            this.start = new Date(startYear, 0, 0, 0, 0, 0).getTime();
            this.end = new Date(endYear, 11, 30, 23, 59, 59).getTime();
        }
    }
    getMonth(minimum, maximum, rangePadding, interval) {
        let month = minimum.getMonth();
        let endMonth = maximum.getMonth();
        if (rangePadding === 'Round') {
            this.start = (new Date(minimum.getFullYear(), month, 0, 0, 0, 0)).getTime();
            this.end = (new Date(maximum.getFullYear(), endMonth, new Date(maximum.getFullYear(), maximum.getMonth(), 0).getDate(), 23, 59, 59)).getTime();
        }
        else {
            this.start = (new Date(minimum.getFullYear(), month + (-interval), 1, 0, 0, 0)).getTime();
            this.end = (new Date(maximum.getFullYear(), endMonth + (interval), endMonth === 2 ? 28 : 30, 0, 0, 0)).getTime();
        }
    }
    getDay(minimum, maximum, rangePadding, interval) {
        let day = minimum.getDate();
        let endDay = maximum.getDate();
        if (rangePadding === 'Round') {
            this.start = (new Date(minimum.getFullYear(), minimum.getMonth(), day, 0, 0, 0)).getTime();
            this.end = (new Date(maximum.getFullYear(), maximum.getMonth(), endDay, 23, 59, 59)).getTime();
        }
        else {
            this.start = (new Date(minimum.getFullYear(), minimum.getMonth(), day + (-interval), 0, 0, 0)).getTime();
            this.end = (new Date(maximum.getFullYear(), maximum.getMonth(), endDay + (interval), 0, 0, 0)).getTime();
        }
    }
    getHour(minimum, maximum, rangePadding, interval) {
        let hour = (minimum.getHours() / interval) * interval;
        let endHour = maximum.getHours() + (minimum.getHours() - hour);
        if (rangePadding === 'Round') {
            this.start = (new Date(minimum.getFullYear(), minimum.getMonth(), minimum.getDate(), hour, 0, 0)).getTime();
            this.end = (new Date(maximum.getFullYear(), maximum.getMonth(), maximum.getDate(), endHour, 59, 59)).getTime();
        }
        else {
            this.start = (new Date(minimum.getFullYear(), minimum.getMonth(), minimum.getDate(), hour + (-interval), 0, 0)).getTime();
            this.end = (new Date(maximum.getFullYear(), maximum.getMonth(), maximum.getDate(), endHour + (interval), 0, 0)).getTime();
        }
    }
    /**
     * Calculate visible range for axis.
     * @private
     */
    calculateVisibleRange(size, axis) {
        axis.visibleRange = {
            min: axis.actualRange.min,
            max: axis.actualRange.max,
            interval: axis.actualRange.interval,
            delta: axis.actualRange.delta,
        };
        if (axis.zoomFactor < 1 || axis.zoomPosition > 0) {
            axis.calculateVisibleRange(size);
            axis.visibleRange.interval = (axis.enableAutoIntervalOnZooming) ?
                this.calculateDateTimeNiceInterval(axis, size, axis.visibleRange.min, axis.visibleRange.max)
                : axis.visibleRange.interval;
        }
        axis.dateTimeInterval = this.increaseDateTimeInterval(axis, axis.visibleRange.min, axis.visibleRange.interval).getTime()
            - axis.visibleRange.min;
        axis.triggerRangeRender(this.chart, axis.visibleRange.min, axis.visibleRange.max, axis.visibleRange.interval);
    }
    /**
     * Calculate visible labels for the axis.
     * @private
     */
    calculateVisibleLabels(axis) {
        axis.visibleLabels = [];
        let tempInterval = axis.visibleRange.min;
        if (!axis.setRange()) {
            tempInterval = this.alignRangeStart(axis, tempInterval, axis.visibleRange.interval, axis.actualIntervalType).getTime();
        }
        axis.format = this.chart.intl.getDateFormat({
            format: axis.labelFormat, type: firstToLowerCase(axis.skeletonType), skeleton: this.getSkeleton(axis)
        });
        axis.startLabel = axis.format(new Date(axis.visibleRange.min));
        axis.endLabel = axis.format(new Date(axis.visibleRange.max));
        while (tempInterval <= axis.visibleRange.max) {
            if (withIn(tempInterval, axis.visibleRange)) {
                axis.triggerLabelRender(this.chart, tempInterval, axis.format(new Date(tempInterval)), axis.labelStyle);
            }
            tempInterval = this.increaseDateTimeInterval(axis, tempInterval, axis.visibleRange.interval).getTime();
        }
        axis.getMaxLabelWidth(this.chart);
    }
    /** @private */
    increaseDateTimeInterval(axis, value, interval) {
        let result = new Date(value);
        interval = Math.ceil(interval);
        switch (axis.actualIntervalType) {
            case 'Years':
                result.setFullYear(result.getFullYear() + interval);
                return result;
            case 'Months':
                result.setMonth(result.getMonth() + interval);
                return result;
            case 'Days':
                result.setDate(result.getDate() + interval);
                return result;
            case 'Hours':
                result.setHours(result.getHours() + interval);
                return result;
            case 'Minutes':
                result.setMinutes(result.getMinutes() + interval);
                return result;
            case 'Seconds':
                result.setSeconds(result.getSeconds() + interval);
                return result;
        }
        return result;
    }
    alignRangeStart(axis, sDate, intervalSize, intervalType) {
        let sResult = new Date(sDate);
        switch (axis.actualIntervalType) {
            case 'Years':
                let year = Math.floor(Math.floor(sResult.getFullYear() / intervalSize) * intervalSize);
                sResult = new Date(year, sResult.getMonth(), sResult.getDate(), 0, 0, 0);
                return sResult;
            case 'Months':
                let month = Math.floor(Math.floor((sResult.getMonth()) / intervalSize) * intervalSize);
                sResult = new Date(sResult.getFullYear(), month, sResult.getDate(), 0, 0, 0);
                return sResult;
            case 'Days':
                let day = Math.floor(Math.floor((sResult.getDate()) / intervalSize) * intervalSize);
                sResult = new Date(sResult.getFullYear(), sResult.getMonth(), day, 0, 0, 0);
                return sResult;
            case 'Hours':
                let hour = Math.floor(Math.floor((sResult.getHours()) / intervalSize) * intervalSize);
                sResult = new Date(sResult.getFullYear(), sResult.getMonth(), sResult.getDate(), hour, 0, 0);
                return sResult;
            case 'Minutes':
                let minutes = Math.floor(Math.floor((sResult.getMinutes()) / intervalSize) * intervalSize);
                sResult = new Date(sResult.getFullYear(), sResult.getMonth(), sResult.getDate(), sResult.getHours(), minutes, 0, 0);
                return sResult;
            case 'Seconds':
                let seconds = Math.floor(Math.floor((sResult.getSeconds()) / intervalSize) * intervalSize);
                sResult = new Date(sResult.getFullYear(), sResult.getMonth(), sResult.getDate(), sResult.getHours(), sResult.getMinutes(), seconds, 0);
                return sResult;
        }
        return sResult;
    }
    /**
     * Get module name
     */
    getModuleName() {
        /**
         * Returns the module name
         */
        return 'DateTime';
    }
    /**
     * To destroy the category axis.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * `Category` module is used to render category axis.
 */
class Category extends NiceInterval {
    /**
     * Constructor for the category module.
     * @private
     */
    constructor(chart) {
        super(chart);
    }
    /**
     * The function to calculate the range and labels for the axis.
     * @return {void}
     */
    calculateRangeAndInterval(size, axis) {
        this.calculateRange(axis, size);
        this.getActualRange(axis, size);
        this.applyRangePadding(axis, size);
        this.calculateVisibleLabels(axis);
    }
    /**
     * Actual Range for the axis.
     * @private
     */
    getActualRange(axis, size) {
        this.initializeDoubleRange(axis);
        // axis.doubleRange = new DoubleRange(<number>this.min, <number>this.max);
        axis.actualRange = {};
        if (!axis.interval) {
            axis.actualRange.interval = Math.max(1, Math.floor(axis.doubleRange.delta / axis.getActualDesiredIntervalsCount(size)));
        }
        else {
            axis.actualRange.interval = Math.ceil(axis.interval);
        }
        axis.actualRange.min = axis.doubleRange.start;
        axis.actualRange.max = axis.doubleRange.end;
        axis.actualRange.delta = axis.doubleRange.delta;
    }
    /**
     * Padding for the axis.
     * @private
     */
    applyRangePadding(axis, size) {
        let ticks = (axis.labelPlacement === 'BetweenTicks' && this.chart.chartAreaType !== 'PolarRadar') ? 0.5 : 0;
        if (ticks > 0) {
            axis.actualRange.min -= ticks;
            axis.actualRange.max += ticks;
        }
        else {
            axis.actualRange.max += axis.actualRange.max ? 0 : 0.5;
        }
        axis.doubleRange = new DoubleRange(axis.actualRange.min, axis.actualRange.max);
        axis.actualRange.delta = axis.doubleRange.delta;
        this.calculateVisibleRange(size, axis);
    }
    /**
     * Calculate label for the axis.
     * @private
     */
    calculateVisibleLabels(axis) {
        /*! Generate axis labels */
        axis.visibleLabels = [];
        let tempInterval = Math.ceil(axis.visibleRange.min);
        if (axis.zoomFactor < 1 || axis.zoomPosition > 0) {
            tempInterval = axis.visibleRange.min - (axis.visibleRange.min % axis.visibleRange.interval);
        }
        let position;
        axis.startLabel = axis.labels[Math.round(axis.visibleRange.min)];
        axis.endLabel = axis.labels[Math.floor(axis.visibleRange.max)];
        for (; tempInterval <= axis.visibleRange.max; tempInterval += axis.visibleRange.interval) {
            if (withIn(tempInterval, axis.visibleRange) && axis.labels.length > 0) {
                position = Math.round(tempInterval);
                axis.triggerLabelRender(this.chart, position, axis.labels[position] ? axis.labels[position] : position.toString(), axis.labelStyle);
            }
        }
        axis.getMaxLabelWidth(this.chart);
    }
    /**
     * Get module name
     */
    getModuleName() {
        /**
         * Returns the module name
         */
        return 'Category';
    }
    /**
     * To destroy the category axis.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * `Logarithmic` module is used to render log axis.
 */
class Logarithmic extends Double {
    /**
     * Constructor for the logerithmic module.
     * @private
     */
    constructor(chart) {
        super(chart);
    }
    /**
     * The method to calculate the range and labels for the axis.
     * @return {void}
     */
    calculateRangeAndInterval(size, axis) {
        this.calculateRange(axis, size);
        this.getActualRange(axis, size);
        this.calculateVisibleRange(size, axis);
        this.calculateVisibleLabels(axis, this.chart);
    }
    /**
     * Calculates actual range for the axis.
     * @private
     */
    getActualRange(axis, size) {
        this.initializeDoubleRange(axis);
        this.min = this.min < 0 ? 0 : this.min;
        let logStart = logBase(this.min, axis.logBase);
        logStart = isFinite(logStart) ? logStart : this.min;
        let logEnd = logBase(this.max, axis.logBase);
        logEnd = isFinite(logStart) ? logEnd : this.max;
        this.min = Math.floor(logStart / 1);
        this.max = Math.ceil(logEnd / 1);
        axis.actualRange.interval = axis.interval || this.calculateLogNiceInterval(this.max - this.min, size, axis);
        axis.actualRange.min = this.min;
        axis.actualRange.max = this.max;
        axis.actualRange.delta = this.max - this.min;
    }
    /**
     * Calculates visible range for the axis.
     * @private
     */
    calculateVisibleRange(size, axis) {
        axis.visibleRange = {
            interval: axis.actualRange.interval, max: axis.actualRange.max,
            min: axis.actualRange.min, delta: axis.actualRange.delta
        };
        if (axis.zoomFactor < 1 || axis.zoomPosition > 0) {
            axis.calculateVisibleRange(size);
            axis.visibleRange.interval = (axis.enableAutoIntervalOnZooming) ?
                this.calculateLogNiceInterval(axis.doubleRange.delta, size, axis)
                : axis.visibleRange.interval;
            axis.visibleRange.interval = Math.floor(axis.visibleRange.interval) === 0 ? 1 : Math.floor(axis.visibleRange.interval);
            axis.triggerRangeRender(this.chart, axis.visibleRange.min, axis.visibleRange.max, axis.visibleRange.interval);
        }
    }
    /**
     * Calculates log iInteval for the axis.
     * @private
     */
    calculateLogNiceInterval(delta, size, axis) {
        let actualDesiredIntervalsCount = axis.getActualDesiredIntervalsCount(size);
        let niceInterval = delta;
        let minInterval = Math.pow(10, Math.floor(logBase(niceInterval, 10)));
        for (let j = 0, len = axis.intervalDivs.length; j < len; j++) {
            let currentInterval = minInterval * axis.intervalDivs[j];
            if (actualDesiredIntervalsCount < (delta / currentInterval)) {
                break;
            }
            niceInterval = currentInterval;
        }
        return niceInterval;
    }
    /**
     * Calculates labels for the axis.
     * @private
     */
    calculateVisibleLabels(axis, chart) {
        /*! Generate axis labels */
        let tempInterval = axis.visibleRange.min;
        axis.visibleLabels = [];
        if (axis.zoomFactor < 1 || axis.zoomPosition > 0) {
            tempInterval = axis.visibleRange.min - (axis.visibleRange.min % axis.visibleRange.interval);
        }
        let axisFormat = this.getFormat(axis);
        let isCustomFormat = axisFormat.match('{value}') !== null;
        axis.format = chart.intl.getNumberFormat({
            format: isCustomFormat ? '' : axisFormat,
            useGrouping: chart.useGroupingSeparator
        });
        axis.startLabel = axis.format(Math.pow(axis.logBase, axis.visibleRange.min));
        axis.endLabel = axis.format(Math.pow(axis.logBase, axis.visibleRange.max));
        for (; tempInterval <= axis.visibleRange.max; tempInterval += axis.visibleRange.interval) {
            if (withIn(tempInterval, axis.visibleRange)) {
                axis.triggerLabelRender(this.chart, tempInterval, this.formatValue(axis, isCustomFormat, axisFormat, Math.pow(axis.logBase, tempInterval)), axis.labelStyle);
            }
        }
        axis.getMaxLabelWidth(this.chart);
    }
    /**
     * Get module name
     */
    getModuleName() {
        /**
         * Returns the module name
         */
        return 'Logarithmic';
    }
    /**
     * To destroy the category axis.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * Category module is used to render category axis.
 */
class DateTimeCategory extends Category {
    /**
     * Constructor for the category module.
     * @private
     */
    constructor(chart) {
        super(chart);
    }
    /**
     * The function to calculate the range and labels for the axis.
     * @return {void}
     * @private
     */
    calculateRangeAndInterval(size, axis) {
        this.axisSize = size;
        this.calculateRange(axis, size);
        this.getActualRange(axis, size);
        this.applyRangePadding(axis, size);
        this.calculateVisibleLabels(axis);
    }
    /**
     * Calculate label for the axis.
     * @private
     */
    calculateVisibleLabels(axis) {
        /*! Generate axis labels */
        axis.visibleLabels = [];
        let padding = axis.labelPlacement === 'BetweenTicks' ? 0.5 : 0;
        if (axis.intervalType === 'Auto') {
            this.calculateDateTimeNiceInterval(axis, this.axisSize, parseInt(axis.labels[0], 10), parseInt(axis.labels[axis.labels.length - 1], 10));
        }
        else {
            axis.actualIntervalType = axis.intervalType;
        }
        axis.format = this.chart.intl.getDateFormat({
            format: axis.labelFormat, type: firstToLowerCase(axis.skeletonType), skeleton: this.getSkeleton(axis)
        });
        for (let i = 0; i < axis.labels.length; i++) {
            if (!this.sameInterval(axis.labels.map(Number)[i], axis.labels.map(Number)[i - 1], axis.actualIntervalType, i)) {
                if (withIn(i - padding, axis.visibleRange)) {
                    axis.triggerLabelRender(this.chart, i, axis.format(new Date(axis.labels.map(Number)[i])), axis.labelStyle);
                }
            }
        }
        axis.getMaxLabelWidth(this.chart);
    }
    /**
     * get same interval
     */
    sameInterval(currentDate, previousDate, type, index) {
        let sameValue;
        if (index === 0) {
            sameValue = false;
        }
        else {
            switch (type) {
                case 'Years':
                    sameValue = new Date(currentDate).getFullYear() === new Date(previousDate).getFullYear();
                    break;
                case 'Months':
                    sameValue = new Date(currentDate).getFullYear() === new Date(previousDate).getFullYear() &&
                        new Date(currentDate).getMonth() === new Date(previousDate).getMonth();
                    break;
                case 'Days':
                    sameValue = (Math.abs(currentDate - previousDate) < 24 * 60 * 60 * 1000 &&
                        new Date(currentDate).getDay() === new Date(previousDate).getDay());
                    break;
                case 'Hours':
                    sameValue = (Math.abs(currentDate - previousDate) < 60 * 60 * 1000 &&
                        new Date(currentDate).getDay() === new Date(previousDate).getDay());
                    break;
                case 'Minutes':
                    sameValue = (Math.abs(currentDate - previousDate) < 60 * 1000 &&
                        new Date(currentDate).getMinutes() === new Date(previousDate).getMinutes());
                    break;
                case 'Seconds':
                    sameValue = (Math.abs(currentDate - previousDate) < 1000 &&
                        new Date(currentDate).getDay() === new Date(previousDate).getDay());
                    break;
            }
        }
        return sameValue;
    }
    /**
     * Get module name
     */
    getModuleName() {
        /**
         * Returns the module name
         */
        return 'DateTimeCategory';
    }
    /**
     * To destroy the category axis.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * StripLine src
 */
/**
 * `StripLine` module is used to render the stripLine in chart.
 */
class StripLine {
    measureStripLine(axis, stripline, seriesClipRect) {
        let actualStart;
        let actualEnd;
        if (axis.valueType === 'DateTimeCategory') {
            let start = stripline.start;
            let end = stripline.end;
            actualStart = start ? axis.labels.indexOf(start.getTime().toString()) : null;
            actualEnd = end ? axis.labels.indexOf(end.getTime().toString()) : null;
        }
        else {
            actualStart = stripline.start;
            actualEnd = stripline.end;
        }
        let rect = this.getFromTovalue(actualStart, actualEnd, stripline.size, stripline.startFromAxis, axis);
        let height = (axis.orientation === 'Vertical') ? (rect.to - rect.from) * axis.rect.height : seriesClipRect.height;
        let width = (axis.orientation === 'Horizontal') ? (rect.to - rect.from) * axis.rect.width : seriesClipRect.width;
        let x = (axis.orientation === 'Vertical') ? seriesClipRect.x : ((rect.from * axis.rect.width) + axis.rect.x);
        let y = (axis.orientation === 'Horizontal') ? seriesClipRect.y : (axis.rect.y + axis.rect.height -
            (rect.to * axis.rect.height));
        if (height !== 0 && width !== 0) {
            return new Rect(x, y, width, height);
        }
        return new Rect(0, 0, 0, 0);
    }
    /**
     * To get from to value from start, end, size, start from axis
     */
    getFromTovalue(start, end, size, startFromAxis, axis) {
        let from = startFromAxis ? axis.visibleRange.min : this.findValue(Math.min(start, isNullOrUndefined(end) ? start : end), axis);
        let to = this.findValue(this.getToValue(Math.max(start, isNullOrUndefined(end) ? start : end), from, size, axis, end), axis);
        return { from: valueToCoefficient(axis.isInversed ? to : from, axis), to: valueToCoefficient(axis.isInversed ? from : to, axis) };
    }
    getToValue(to, from, size, axis, end) {
        if (axis.valueType === 'DateTime') {
            return (isNullOrUndefined(end) ? new Date(new Date(from).getTime() + size) : to);
        }
        else {
            return isNullOrUndefined(end) ? (axis.valueType === 'Logarithmic' ? Math.pow(axis.logBase, from) : from) + size : to;
        }
    }
    findValue(value, axis) {
        if (axis.valueType === 'Logarithmic') {
            value = logBase(value, axis.logBase);
        }
        if (value < axis.visibleRange.min) {
            value = axis.visibleRange.min;
        }
        else if (value > axis.visibleRange.max) {
            value = axis.visibleRange.max;
        }
        return value;
    }
    /**
     * To render striplines based start and end.
     * @private
     * @param chart
     * @param position
     * @param axes
     */
    renderStripLine(chart, position, axes) {
        let id = chart.element.id + '_stripline_' + position + '_';
        let striplineGroup = chart.renderer.createGroup({ id: id + 'collections' });
        let seriesClipRect = chart.chartAxisLayoutPanel.seriesClipRect;
        let rect;
        let count = 0;
        for (let axis of axes) {
            for (let stripline of axis.stripLines) {
                if (stripline.visible && stripline.zIndex === position) {
                    rect = this.measureStripLine(axis, stripline, seriesClipRect);
                    this.renderRectangle(stripline, rect, id + 'rect_' + count, striplineGroup, chart);
                    this.renderText(stripline, rect, id + 'text_' + count, striplineGroup, chart, axis);
                    count++;
                }
            }
        }
        chart.svgObject.appendChild(striplineGroup);
    }
    renderRectangle(stripline, rect, id, parent, chart) {
        parent.appendChild(chart.renderer.drawRectangle(new RectOption(id, stripline.color, stripline.border, stripline.opacity, rect, 0, 0, '', '')));
    }
    renderText(stripline, rect, id, parent, chart, axis) {
        let textSize = measureText(stripline.text, stripline.textStyle);
        let textMid = 3 * (textSize.height / 8);
        let ty = rect.y + (rect.height / 2) + textMid;
        let rotation = (stripline.rotation === null) ? ((axis.orientation === 'Vertical') ? 0 : -90) : stripline.rotation;
        let tx = rect.x + (rect.width / 2);
        let alignment;
        let anchor;
        let padding = 5;
        if (axis.orientation === 'Horizontal') {
            tx = this.getTextStart(tx + (textMid * this.factor(stripline.horizontalAlignment)), rect.width, stripline.horizontalAlignment);
            ty = this.getTextStart(ty - textMid, rect.height, stripline.verticalAlignment);
            alignment = this.invertAlignment(stripline.horizontalAlignment);
        }
        else {
            tx = this.getTextStart(tx, rect.width, stripline.horizontalAlignment);
            ty = this.getTextStart(ty + (textMid * this.factor(stripline.verticalAlignment)) - padding, rect.height, stripline.verticalAlignment);
            alignment = stripline.verticalAlignment;
        }
        anchor = alignment;
        textElement(new TextOption(id, tx, ty, anchor, stripline.text, 'rotate(' + rotation + ' ' + tx + ',' + ty + ')', 'middle'), stripline.textStyle, stripline.textStyle.color, parent);
    }
    invertAlignment(anchor) {
        switch (anchor) {
            case 'Start':
                anchor = 'Start';
                break;
            case 'End':
                anchor = 'End';
                break;
        }
        return anchor;
    }
    factor(anchor) {
        let factor = 0;
        switch (anchor) {
            case 'Start':
                factor = 1;
                break;
            case 'End':
                factor = -1;
                break;
        }
        return factor;
    }
    getTextStart(xy, size, textAlignment) {
        let padding = 5;
        switch (textAlignment) {
            case 'Start':
                xy = xy - (size / 2) + padding;
                break;
            case 'End':
                xy = xy + (size / 2) - padding;
                break;
        }
        return xy;
    }
    /**
     * To get the module name for `StripLine`.
     * @private
     */
    getModuleName() {
        return 'StripLine';
    }
    /**
     * To destroy the `StripLine` module.
     * @private
     */
    destroy() {
        // destroy peform here
    }
}

/**
 * Base for line type series.
 */
class LineBase {
    /** @private */
    constructor(chartModule) {
        this.chart = chartModule;
        this.padding = 5;
    }
    /**
     * To improve the chart performance.
     * @return {void}
     * @private
     */
    improveChartPerformance(series) {
        let tempPoints = [];
        let xVisibleRange = series.xAxis.visibleRange;
        let yVisibleRange = series.yAxis.visibleRange;
        let seriesPoints = series.points;
        let areaBounds = series.clipRect;
        let xTolerance = Math.abs(xVisibleRange.delta / areaBounds.width);
        let yTolerance = Math.abs(yVisibleRange.delta / areaBounds.height);
        let prevXValue = (seriesPoints[0] && seriesPoints[0].x > xTolerance) ? 0 : xTolerance;
        let prevYValue = (seriesPoints[0] && seriesPoints[0].y > yTolerance) ? 0 : yTolerance;
        let xVal = 0;
        let yVal = 0;
        for (let currentPoint of seriesPoints) {
            currentPoint.symbolLocations = [];
            xVal = currentPoint.xValue ? currentPoint.xValue : xVisibleRange.min;
            yVal = currentPoint.yValue ? currentPoint.yValue : yVisibleRange.min;
            if (Math.abs(prevXValue - xVal) >= xTolerance || Math.abs(prevYValue - yVal) >= yTolerance) {
                tempPoints.push(currentPoint);
                prevXValue = xVal;
                prevYValue = yVal;
            }
        }
        return tempPoints;
    }
    /**
     * To generate the line path direction
     * @param firstPoint
     * @param secondPoint
     * @param series
     * @param isInverted
     * @param getPointLocation
     * @param startPoint
     */
    getLineDirection(firstPoint, secondPoint, series, isInverted, getPointLocation, startPoint) {
        let direction = '';
        if (firstPoint != null) {
            let point1 = getPointLocation(firstPoint.xValue, firstPoint.yValue, series.xAxis, series.yAxis, isInverted, series);
            let point2 = getPointLocation(secondPoint.xValue, secondPoint.yValue, series.xAxis, series.yAxis, isInverted, series);
            direction = startPoint + ' ' + (point1.x) + ' ' + (point1.y) + ' ' +
                'L' + ' ' + (point2.x) + ' ' + (point2.y) + ' ';
        }
        return direction;
    }
    /**
     * To append the line path.
     * @return {void}
     * @private
     */
    appendLinePath(options, series, clipRect) {
        let htmlObject = series.chart.renderer.drawPath(options);
        htmlObject.setAttribute('clip-path', clipRect);
        series.pathElement = htmlObject;
        series.seriesElement.appendChild(htmlObject);
        series.isRectSeries = false;
    }
    /**
     * To render the marker for the series.
     * @return {void}
     * @private
     */
    renderMarker(series) {
        if (series.marker.visible) {
            series.chart.markerRender.render(series);
        }
    }
    /**
     * To do the progressive animation.
     * @return {void}
     * @private
     */
    doProgressiveAnimation(series, option) {
        let animation = new Animation({});
        let path = series.pathElement;
        let strokeDashArray = path.getAttribute('stroke-dasharray');
        let pathLength = series.pathElement.getTotalLength();
        let currentTime;
        path.style.visibility = 'hidden';
        animation.animate(path, {
            duration: option.duration,
            delay: option.delay,
            progress: (args) => {
                if (args.timeStamp >= args.delay) {
                    path.style.visibility = 'visible';
                    currentTime = Math.abs(Math.round(((args.timeStamp - args.delay) * pathLength) / args.duration));
                    path.setAttribute('stroke-dasharray', currentTime + ',' + pathLength);
                }
            },
            end: (model) => {
                path.setAttribute('stroke-dasharray', strokeDashArray);
                series.chart.trigger('animationComplete', { series: series });
            }
        });
    }
    /**
     * To store the symbol location and region
     * @param point
     * @param series
     * @param isInverted
     * @param getLocation
     */
    storePointLocation(point, series, isInverted, getLocation) {
        point.symbolLocations.push(getLocation(point.xValue, point.yValue, series.xAxis, series.yAxis, isInverted, series));
        point.regions.push(new Rect(point.symbolLocations[0].x - series.marker.width, point.symbolLocations[0].y - series.marker.height, 2 * series.marker.width, 2 * series.marker.height));
    }
    /**
     * To do the linear animation.
     * @return {void}
     * @private
     */
    doLinearAnimation(series, animation) {
        let clipRect = series.clipRectElement.childNodes[0].childNodes[0];
        let effect = getAnimationFunction('Linear');
        let elementHeight = +clipRect.getAttribute('height');
        let elementWidth = +clipRect.getAttribute('width');
        let xCenter = +clipRect.getAttribute('x');
        let yCenter = series.chart.requireInvertedAxis ? +clipRect.getAttribute('height') + +clipRect.getAttribute('y') :
            +clipRect.getAttribute('y');
        let value;
        clipRect.style.visibility = 'hidden';
        new Animation({}).animate(clipRect, {
            duration: animation.duration,
            delay: animation.delay,
            progress: (args) => {
                if (args.timeStamp >= args.delay) {
                    clipRect.style.visibility = 'visible';
                    if (series.chart.requireInvertedAxis) {
                        value = effect(args.timeStamp - args.delay, 0, elementHeight, args.duration);
                        clipRect.setAttribute('transform', 'translate(' + xCenter + ' ' + yCenter +
                            ') scale(1,' + (value / elementHeight) + ') translate(' + (-xCenter) + ' ' + (-yCenter) + ')');
                    }
                    else {
                        value = effect(args.timeStamp - args.delay, 0, elementWidth, args.duration);
                        clipRect.setAttribute('transform', 'translate(' + xCenter + ' ' + yCenter +
                            ') scale(' + (value / elementWidth) + ', 1) translate(' + (-xCenter) + ' ' + (-yCenter) + ')');
                    }
                }
            },
            end: (model) => {
                clipRect.setAttribute('transform', 'translate(0,0)');
                series.chart.trigger('animationComplete', { series: series });
            }
        });
    }
}

/**
 * `LineSeries` module used to render the line series.
 */
class LineSeries extends LineBase {
    /**
     * Render Line Series.
     * @return {void}.
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let point1;
        let point2;
        let direction = '';
        let prevPoint = null;
        let startPoint = 'M';
        let options;
        let getCoordinate = series.chart.chartAreaType === 'PolarRadar' ? TransformToVisible : getPoint;
        let visiblePoints = this.improveChartPerformance(series);
        for (let point of visiblePoints) {
            point.regions = [];
            if (point.visible && withInRange(visiblePoints[point.index - 1], point, visiblePoints[point.index + 1], series)) {
                direction += this.getLineDirection(prevPoint, point, series, isInverted, getCoordinate, startPoint);
                startPoint = prevPoint ? 'L' : startPoint;
                prevPoint = point;
                this.storePointLocation(point, series, isInverted, getCoordinate);
            }
            else {
                prevPoint = (series.emptyPointSettings.mode === 'Drop') ? prevPoint : null;
                startPoint = (series.emptyPointSettings.mode === 'Drop') ? startPoint : 'M';
                point.symbolLocations = [];
            }
        }
        if (series.chart.chartAreaType === 'PolarRadar') {
            if (series.isClosed) {
                point2 = getCoordinate(visiblePoints[visiblePoints.length - 1].xValue, visiblePoints[visiblePoints.length - 1].yValue, xAxis, yAxis, isInverted, series);
                point1 = getCoordinate(visiblePoints[0].xValue, visiblePoints[0].yValue, xAxis, yAxis, isInverted, series);
                direction = direction.concat(startPoint + ' ' + point2.x + ' ' + point2.y + ' ' + 'L' + ' ' + point1.x + ' ' + point1.y);
            }
        }
        let name = series.category === 'Indicator' ? series.chart.element.id + '_Indicator_' + series.index + '_' + series.name :
            series.category === 'TrendLine' ? series.chart.element.id + '_Series_' + series.sourceIndex + '_TrendLine_' + series.index :
                series.chart.element.id + '_Series_' + series.index;
        options = new PathOption(name, 'none', series.width, series.interior, series.opacity, series.dashArray, direction);
        this.appendLinePath(options, series, '');
        this.renderMarker(series);
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        let option = series.animation;
        this.doProgressiveAnimation(series, option);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'LineSeries';
    }
    /**
     * To destroy the line series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * Column Series Base
 */
class ColumnBase {
    /**
     * To get the position of the column series.
     * @return {DoubleRange}
     * @private
     */
    getSideBySideInfo(series) {
        if (series.chart.enableSideBySidePlacement && !series.position) {
            this.getSideBySidePositions(series);
        }
        let position = !series.chart.enableSideBySidePlacement ? 0 : series.position;
        let rectCount = !series.chart.enableSideBySidePlacement ? 1 : series.rectCount;
        series.isRectSeries = true;
        let visibleSeries = series.chart.visibleSeries;
        let seriesSpacing = series.chart.enableSideBySidePlacement ? series.columnSpacing : 0; // Column Spacing
        let pointSpacing = series.columnWidth; // Column width
        let minimumPointDelta = getMinPointsDelta(series.xAxis, visibleSeries);
        let width = minimumPointDelta * pointSpacing;
        let radius;
        let location = (position) / rectCount - 0.5;
        let doubleRange = new DoubleRange(location, location + (1 / rectCount));
        if (!(isNaN(doubleRange.start) || isNaN(doubleRange.end))) {
            doubleRange = new DoubleRange(doubleRange.start * width, doubleRange.end * width);
            radius = seriesSpacing * doubleRange.delta;
            doubleRange = new DoubleRange(doubleRange.start + radius / 2, doubleRange.end - radius / 2);
        }
        return doubleRange;
    }
    /**
     * To get the rect values.
     * @return {Rect}
     * @private
     */
    getRectangle(x1, y1, x2, y2, series) {
        let point1 = getPoint(x1, y1, series.xAxis, series.yAxis, series.chart.requireInvertedAxis);
        let point2 = getPoint(x2, y2, series.xAxis, series.yAxis, series.chart.requireInvertedAxis);
        return new Rect(Math.min(point1.x, point2.x), Math.min(point1.y, point2.y), Math.abs(point2.x - point1.x), Math.abs(point2.y - point1.y));
    }
    /**
     * To get the position of each series.
     * @return {void}
     * @private
     */
    getSideBySidePositions(series) {
        let chart = series.chart;
        for (let columnItem of chart.columns) {
            for (let item of chart.rows) {
                this.findRectPosition(series.findSeriesCollection(columnItem, item, false));
            }
        }
    }
    findRectPosition(seriesCollection) {
        let stackingGroup = [];
        let vSeries = { rectCount: 0, position: null };
        seriesCollection.forEach((value) => {
            if (value.type.indexOf('Stacking') !== -1) {
                if (value.stackingGroup) {
                    if (stackingGroup[value.stackingGroup] === undefined) {
                        value.position = vSeries.rectCount;
                        stackingGroup[value.stackingGroup] = vSeries.rectCount++;
                    }
                    else {
                        value.position = stackingGroup[value.stackingGroup];
                    }
                }
                else {
                    if (vSeries.position === null) {
                        value.position = vSeries.rectCount;
                        vSeries.position = vSeries.rectCount++;
                    }
                    else {
                        value.position = vSeries.position;
                    }
                }
            }
            else {
                value.position = vSeries.rectCount++;
            }
        });
        seriesCollection.forEach((value) => {
            value.rectCount = vSeries.rectCount;
        });
    }
    /**
     * Updates the symbollocation for points
     * @return void
     * @private
     */
    updateSymbolLocation(point, rect, series) {
        if (!series.chart.requireInvertedAxis) {
            this.updateXRegion(point, rect, series);
        }
        else {
            this.updateYRegion(point, rect, series);
        }
    }
    /**
     * Update the region for the point.
     * @return {void}
     * @private
     */
    updateXRegion(point, rect, series) {
        point.regions.push(rect);
        point.symbolLocations.push({
            x: rect.x + (rect.width) / 2,
            y: (series.seriesType === 'BoxPlot' || series.seriesType.indexOf('HighLow') !== -1 ||
                (point.yValue >= 0 === !series.yAxis.isInversed)) ? rect.y : (rect.y + rect.height)
        });
    }
    /**
     * Update the region for the point in bar series.
     * @return {void}
     * @private
     */
    updateYRegion(point, rect, series) {
        point.regions.push(rect);
        point.symbolLocations.push({
            x: (series.seriesType === 'BoxPlot' || series.seriesType.indexOf('HighLow') !== -1 ||
                (point.yValue >= 0 === !series.yAxis.isInversed)) ? rect.x + rect.width : rect.x,
            y: rect.y + rect.height / 2
        });
    }
    /**
     * To trigger the point rendering event.
     * @return {void}
     * @private
     */
    triggerEvent(series, point, fill, border) {
        let argsData = {
            cancel: false, name: pointRender, series: series, point: point,
            fill: series.setPointColor(point, fill),
            border: series.setBorderColor(point, border)
        };
        series.chart.trigger(pointRender, argsData);
        point.color = argsData.fill;
        return argsData;
    }
    /**
     * To draw the rectangle for points.
     * @return {void}
     * @private
     */
    drawRectangle(series, point, rect, argsData) {
        let check = series.chart.requireInvertedAxis ? rect.height : rect.width;
        if (check <= 0) {
            return null;
        }
        let direction = this.calculateRoundedRectPath(rect, series.cornerRadius.topLeft, series.cornerRadius.topRight, series.cornerRadius.bottomLeft, series.cornerRadius.bottomRight);
        let name = series.category === 'Indicator' ? series.chart.element.id + '_Indicator_' + series.index + '_' + series.name +
            '_Point_' + point.index : series.chart.element.id + '_Series_' + series.index + '_Point_' + point.index;
        let options = new PathOption(name, argsData.fill, argsData.border.width, argsData.border.color, series.opacity, series.dashArray, direction);
        let element = series.chart.renderer.drawPath(options);
        switch (series.seriesType) {
            case 'XY':
                element.setAttribute('aria-label', point.x.toString() + ':' + point.yValue.toString());
                break;
            case 'HighLow':
                element.setAttribute('aria-label', point.x.toString() + ':' + point.high.toString() + ':' + point.low.toString());
                break;
        }
        series.seriesElement.appendChild(element);
    }
    /**
     * To animate the series.
     * @return {void}
     * @private
     */
    animate(series) {
        let rectElements = series.seriesElement.childNodes;
        let count = series.category === 'Indicator' ? 0 : 1;
        for (let point of series.points) {
            if (!point.symbolLocations.length && !(series.type === 'BoxAndWhisker' && point.regions.length)) {
                continue;
            }
            this.animateRect(rectElements[count], series, point);
            count++;
        }
    }
    /**
     * To animate the series.
     * @return {void}
     * @private
     */
    animateRect(element, series, point) {
        let option = series.animation;
        let effect = getAnimationFunction('Linear');
        let isPlot = point.yValue < 0;
        let x;
        let y;
        let elementHeight = +point.regions[0].height;
        let elementWidth = +point.regions[0].width;
        let centerX;
        let centerY;
        if (!series.chart.requireInvertedAxis) {
            x = +point.regions[0].x;
            if (series.type.indexOf('Stacking') > -1) {
                y = (1 - valueToCoefficient(0, series.yAxis)) * (series.yAxis.rect.height);
                centerX = x;
                centerY = y;
            }
            else {
                y = +point.regions[0].y;
                centerY = (series.seriesType.indexOf('HighLow') !== -1 || series.type.indexOf('Waterfall') !== -1) ? y + elementHeight / 2 :
                    (isPlot !== series.yAxis.isInversed) ? y : y + elementHeight;
                centerX = isPlot ? x : x + elementWidth;
            }
        }
        else {
            y = +point.regions[0].y;
            if (series.type.indexOf('Stacking') > -1) {
                x = (valueToCoefficient(0, series.yAxis)) * series.yAxis.rect.width;
                centerX = x;
                centerY = y;
            }
            else {
                x = +point.regions[0].x;
                centerY = isPlot ? y : y + elementHeight;
                centerX = (series.seriesType.indexOf('HighLow') !== -1 || series.type.indexOf('Waterfall') !== -1) ? x + elementWidth / 2 :
                    (isPlot !== series.yAxis.isInversed) ? x + elementWidth : x;
            }
        }
        let value;
        element.style.visibility = 'hidden';
        new Animation({}).animate(element, {
            duration: option.duration,
            delay: option.delay,
            progress: (args) => {
                if (args.timeStamp >= args.delay) {
                    element.style.visibility = 'visible';
                    if (!series.chart.requireInvertedAxis) {
                        elementHeight = elementHeight ? elementHeight : 1;
                        value = effect(args.timeStamp - args.delay, 0, elementHeight, args.duration);
                        element.setAttribute('transform', 'translate(' + centerX + ' ' + centerY +
                            ') scale(1,' + (value / elementHeight) + ') translate(' + (-centerX) + ' ' + (-centerY) + ')');
                    }
                    else {
                        elementWidth = elementWidth ? elementWidth : 1;
                        value = effect(args.timeStamp - args.delay, 0, elementWidth, args.duration);
                        element.setAttribute('transform', 'translate(' + centerX + ' ' + centerY +
                            ') scale(' + (value / elementWidth) + ', 1) translate(' + (-centerX) + ' ' + (-centerY) + ')');
                    }
                }
            },
            end: (model) => {
                element.setAttribute('transform', 'translate(0,0)');
                let seriesElement = series.seriesElement;
                if (element === seriesElement.lastElementChild || point.index === series.points.length - 1 ||
                    (series.type === 'Waterfall' && element === seriesElement.children[seriesElement.childElementCount - 2])) {
                    series.chart.trigger('animationComplete', { series: series });
                    if (series.type === 'Waterfall') {
                        let rectElements = seriesElement.childNodes;
                        for (let i = 0; i < rectElements.length; i++) {
                            if (rectElements[i].id.indexOf('Connector') !== -1) {
                                rectElements[i].style.visibility = 'visible';
                                rectElements[i].setAttribute('transform', 'translate(0,0)');
                            }
                        }
                    }
                }
            }
        });
    }
    /**
     * To get rounded rect path direction
     */
    calculateRoundedRectPath(rect, topLeft, topRight, bottomLeft, bottomRight) {
        return 'M' + ' ' + rect.x + ' ' + (topLeft + rect.y) +
            ' Q ' + rect.x + ' ' + rect.y + ' ' + (rect.x + topLeft) + ' ' +
            rect.y + ' ' + 'L' + ' ' + (rect.x + rect.width - topRight) + ' ' + rect.y +
            ' Q ' + (rect.x + rect.width) + ' ' + rect.y + ' ' +
            (rect.x + rect.width) + ' ' + (rect.y + topRight) + ' ' + 'L ' +
            (rect.x + rect.width) + ' ' + (rect.y + rect.height - bottomRight)
            + ' Q ' + (rect.x + rect.width) + ' ' + (rect.y + rect.height) + ' ' + (rect.x + rect.width - bottomRight) + ' ' +
            (rect.y + rect.height) + ' ' + 'L ' + (rect.x + bottomLeft) + ' ' + (rect.y + rect.height) + ' Q ' + rect.x + ' ' +
            (rect.y + rect.height) + ' ' + rect.x + ' ' + (rect.y + rect.height - bottomLeft) + ' ' + 'L' + ' ' + rect.x + ' ' +
            (topLeft + rect.y) + ' ' + 'Z';
    }
}

/**
 * `ColumnSeries` Module used to render the column series.
 */
class ColumnSeries extends ColumnBase {
    /**
     * Render Column series.
     * @return {void}
     * @private
     */
    render(series) {
        let rect;
        let sideBySideInfo = this.getSideBySideInfo(series);
        let origin = Math.max(series.yAxis.visibleRange.min, 0);
        let argsData;
        for (let pointColumn of series.points) {
            pointColumn.symbolLocations = [];
            pointColumn.regions = [];
            if (pointColumn.visible && withInRange(series.points[pointColumn.index - 1], pointColumn, series.points[pointColumn.index + 1], series)) {
                rect = this.getRectangle(pointColumn.xValue + sideBySideInfo.start, pointColumn.yValue, pointColumn.xValue + sideBySideInfo.end, origin, series);
                let color = series.category === 'Indicator' ? pointColumn.color : series.interior;
                argsData = this.triggerEvent(series, pointColumn, color, { width: series.border.width, color: series.border.color });
                if (!argsData.cancel) {
                    this.updateSymbolLocation(pointColumn, rect, series);
                    this.drawRectangle(series, pointColumn, rect, argsData);
                }
            }
        }
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.animate(series);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'ColumnSeries';
        /**
         * return the module name
         */
    }
    /**
     * To destroy the column series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * Base class for multi colored series
 */
class MultiColoredSeries extends LineBase {
    /**
     * To Generate the area path direction
     * @param xValue
     * @param yValue
     * @param series
     * @param isInverted
     * @param getPointLocation
     * @param startPoint
     * @param startPath
     */
    getAreaPathDirection(xValue, yValue, series, isInverted, getPointLocation, startPoint, startPath) {
        let direction = '';
        let firstPoint;
        if (startPoint === null) {
            firstPoint = getPointLocation(xValue, yValue, series.xAxis, series.yAxis, isInverted, series);
            direction += (startPath + ' ' + (firstPoint.x) + ' ' + (firstPoint.y) + ' ');
        }
        return direction;
    }
    /**
     * To Generate the empty point direction
     * @param firstPoint
     * @param secondPoint
     * @param series
     * @param isInverted
     * @param getPointLocation
     */
    getAreaEmptyDirection(firstPoint, secondPoint, series, isInverted, getPointLocation) {
        let direction = '';
        direction += this.getAreaPathDirection(firstPoint.x, firstPoint.y, series, isInverted, getPointLocation, null, 'L');
        direction += this.getAreaPathDirection(secondPoint.x, secondPoint.y, series, isInverted, getPointLocation, null, 'L');
        return direction;
    }
    /**
     * To set point color
     * @param points
     */
    setPointColor(currentPoint, previous, series, isXSegment, segments) {
        if (series.pointColorMapping === '') {
            let segment;
            let value;
            for (let i = 0; i < segments.length; i++) {
                segment = segments[i];
                value = isXSegment ? currentPoint.xValue : currentPoint.yValue;
                if (value <= this.getAxisValue(segment.value, isXSegment ? series.xAxis : series.yAxis, series.chart) || !segment.value) {
                    currentPoint.interior = segment.color;
                    break;
                }
            }
            if (currentPoint.interior == null) {
                currentPoint.interior = series.interior;
            }
            return false;
        }
        else {
            if (previous) {
                return series.setPointColor(currentPoint, series.interior) !== series.setPointColor(previous, series.interior);
            }
            else {
                return false;
            }
        }
    }
    sortSegments(series, chartSegments) {
        let axis = series.segmentAxis === 'X' ? series.xAxis : series.yAxis;
        let segments = [].concat(chartSegments);
        let access = this;
        return segments.sort((a, b) => {
            return access.getAxisValue(a.value, axis, series.chart) - access.getAxisValue(b.value, axis, series.chart);
        });
    }
    /**
     * Segment calculation performed here
     * @param series
     * @param options
     * @param chartSegments
     */
    applySegmentAxis(series, options, segments) {
        if (series.pointColorMapping !== '') {
            options.map((option) => {
                this.appendLinePath(option, series, '');
            });
            return null;
        }
        let isXSegment = series.segmentAxis === 'X';
        let axis = isXSegment ? series.xAxis : series.yAxis;
        let chart = series.chart;
        let segment;
        this.includeSegment(segments, axis, series, segments.length);
        let length = segments.length;
        let value;
        let clipPath;
        for (let index = 0; index < length; index++) {
            segment = segments[index];
            value = this.getAxisValue(segment.value, axis, series.chart);
            clipPath = this.createClipRect(index ? this.getAxisValue(segments[index - 1].value, axis, series.chart)
                : axis.visibleRange.min, value, series, index, isXSegment);
            if (clipPath) {
                options.map((option) => {
                    series.seriesElement.appendChild(chart.renderer.drawPath({
                        'clip-path': clipPath,
                        'stroke-dasharray': segment.dashArray,
                        'opacity': option.opacity,
                        'stroke': series.type.indexOf('Line') > -1 ? segment.color || series.interior : series.border.color,
                        'stroke-width': option['stroke-width'],
                        'fill': series.type.indexOf('Line') > -1 ? 'none' : segment.color || series.interior,
                        'id': option.id + '_Segment_' + index,
                        'd': option.d
                    }));
                });
            }
        }
    }
    includeSegment(segments, axis, series, length) {
        if (length <= 0) {
            segments.push({ value: axis.visibleRange.max, color: series.interior });
            return null;
        }
        if (this.getAxisValue(segments[length - 1].value, axis, series.chart) < axis.visibleRange.max) {
            segments.push({ value: axis.visibleRange.max, color: series.interior });
        }
    }
    /**
     * To create clip rect for segment axis
     * @param startValue
     * @param endValue
     * @param series
     * @param index
     * @param isX
     * @param chart
     */
    createClipRect(startValue, endValue, series, index, isX) {
        let isRequired = series.chart.requireInvertedAxis;
        let startPointLocation = getPoint(isX ? startValue : series.xAxis.visibleRange.min, isX ? series.yAxis.visibleRange.max : endValue, series.xAxis, series.yAxis, isRequired);
        let endPointLocation = getPoint(isX ? endValue : series.xAxis.visibleRange.max, isX ? series.yAxis.visibleRange.min : startValue, series.xAxis, series.yAxis, isRequired);
        endPointLocation = isRequired ?
            [startPointLocation, startPointLocation = endPointLocation][0] : endPointLocation;
        if ((endPointLocation.x - startPointLocation.x > 0) && (endPointLocation.y - startPointLocation.y > 0)) {
            series.seriesElement.appendChild(series.chart.renderer.drawClipPath(new RectOption(series.chart.element.id + '_ChartSegmentClipRect_' + index, 'transparent', { width: 1, color: 'Gray' }, 1, {
                x: startPointLocation.x,
                y: startPointLocation.y,
                width: endPointLocation.x - startPointLocation.x,
                height: endPointLocation.y - startPointLocation.y
            })));
            return 'url(#' + series.chart.element.id + '_ChartSegmentClipRect_' + index + ')';
        }
        return null;
    }
    /**
     * To get exact value from segment value
     * @param segmentValue
     * @param axis
     * @param chart
     */
    getAxisValue(segmentValue, axis, chart) {
        if (segmentValue === null) {
            segmentValue = axis.visibleRange.max;
        }
        if (axis.valueType === 'DateTime') {
            let option = { skeleton: 'full', type: 'dateTime' };
            return Date.parse(chart.intl.getDateParser(option)(chart.intl.getDateFormat(option)(new Date(DataUtil.parse.parseJson({ val: segmentValue }).val))));
        }
        else if (axis.valueType.indexOf('Category') > -1) {
            let xValue = axis.valueType === 'DateTimeCategory' ?
                (segmentValue.getTime()).toString() :
                segmentValue;
            return (axis.labels.indexOf(xValue) < 0) ? +segmentValue : axis.labels.indexOf(xValue);
        }
        else {
            return +segmentValue;
        }
    }
}

/**
 * `AreaSeries` module is used to render the area series.
 */
class AreaSeries extends MultiColoredSeries {
    /**
     * Render Area series.
     * @return {void}
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let startPoint = null;
        let direction = '';
        let origin = series.chart.chartAreaType === 'PolarRadar' ? series.points[0].yValue :
            Math.max(series.yAxis.visibleRange.min, 0);
        let currentXValue;
        let getCoordinate = series.chart.chartAreaType === 'PolarRadar' ? TransformToVisible : getPoint;
        series.points.map((point, i, seriesPoints) => {
            currentXValue = point.xValue;
            point.symbolLocations = [];
            point.regions = [];
            if (point.visible && withInRange(seriesPoints[i - 1], point, seriesPoints[i + 1], series)) {
                direction += this.getAreaPathDirection(currentXValue, origin, series, isInverted, getCoordinate, startPoint, 'M');
                startPoint = startPoint || new ChartLocation(currentXValue, origin);
                // First Point to draw the area path
                direction += this.getAreaPathDirection(currentXValue, point.yValue, series, isInverted, getCoordinate, null, 'L');
                if (seriesPoints[i + 1] && !seriesPoints[i + 1].visible && series.emptyPointSettings.mode !== 'Drop') {
                    direction += this.getAreaEmptyDirection({ 'x': currentXValue, 'y': origin }, startPoint, series, isInverted, getCoordinate);
                    startPoint = null;
                }
                this.storePointLocation(point, series, isInverted, getPoint);
            }
        });
        this.appendLinePath(new PathOption(series.chart.element.id + '_Series_' + series.index, series.interior, series.border.width, series.border.color, series.opacity, series.dashArray, (series.points.length > 1 ? (direction + this.getAreaPathDirection(series.points[series.points.length - 1].xValue, series.chart.chartAreaType === 'PolarRadar' ?
            series.points[series.points.length - 1].yValue : origin, series, isInverted, getCoordinate, null, 'L')) : '')), series, '');
        this.renderMarker(series);
    }
    /**
     * To destroy the area series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method calling here
         */
    }
    /**
     * Get module name
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'AreaSeries';
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        let option = series.animation;
        this.doLinearAnimation(series, option);
    }
}

/**
 * `BarSeries` module is used to render the bar series.
 */
class BarSeries extends ColumnBase {
    /**
     * Render Bar series.
     * @return {void}
     * @private
     */
    render(series) {
        let origin = Math.max(series.yAxis.visibleRange.min, 0);
        let sideBySideInfo = this.getSideBySideInfo(series);
        let rect;
        let argsData;
        for (let pointBar of series.points) {
            pointBar.symbolLocations = [];
            pointBar.regions = [];
            if (pointBar.visible && withInRange(series.points[pointBar.index - 1], pointBar, series.points[pointBar.index + 1], series)) {
                rect = this.getRectangle(pointBar.xValue + sideBySideInfo.start, pointBar.yValue, pointBar.xValue + sideBySideInfo.end, origin, series);
                argsData = this.triggerEvent(series, pointBar, series.interior, { width: series.border.width, color: series.border.color });
                if (!argsData.cancel) {
                    this.updateSymbolLocation(pointBar, rect, series);
                    this.drawRectangle(series, pointBar, rect, argsData);
                }
            }
        }
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.animate(series);
    }
    /**
     * To destroy the bar series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
    /**
     * Get module name
     */
    getModuleName() {
        return 'BarSeries';
    }
}

class PolarRadarPanel extends LineBase {
    /**
     * Measure the polar radar axis size.
     * @return {void}
     * @private
     */
    measureAxis(rect) {
        let chart = this.chart;
        this.initialClipRect = rect;
        this.seriesClipRect = new Rect(rect.x, rect.y, rect.width, rect.height);
        //Measure axis size calculation
        this.measureRowAxis(chart, this.initialClipRect);
        this.measureColumnAxis(chart, this.initialClipRect);
        this.calculateAxisSize();
    }
    measureRowAxis(chart, rect) {
        this.calculateRowSize(rect);
        let row = chart.rows[0];
        this.measureDefinition(row, chart, new Size(chart.availableSize.width, row.computedHeight), rect);
    }
    measureColumnAxis(chart, rect) {
        this.calculateColumnSize(rect);
        let column = chart.columns[0];
        this.measureDefinition(column, chart, new Size(column.computedWidth, chart.availableSize.height), rect);
    }
    /**
     * Measure the column and row in chart.
     * @return {void}
     * @private
     */
    measureDefinition(definition, chart, size, clipRect) {
        for (let axis of definition.axes) {
            axis.getModule(chart);
            axis.baseModule.calculateRangeAndInterval(size, axis);
        }
    }
    /**
     * Measure the axis.
     * @return {void}
     * @private
     */
    calculateAxisSize() {
        let chart = this.chart;
        let axis;
        let padding = 5;
        this.centerX = this.initialClipRect.width * 0.5 + this.initialClipRect.x;
        this.centerY = this.initialClipRect.height * 0.5 + this.initialClipRect.y;
        chart.radius = Math.min(this.initialClipRect.width, this.initialClipRect.height) / 2 - padding -
            chart.primaryXAxis.majorTickLines.height - chart.primaryXAxis.maxLabelSize.height;
        chart.radius = (chart.primaryXAxis.coefficient * chart.radius) / 100;
        this.seriesClipRect.y = this.centerY - chart.radius;
        this.seriesClipRect.x = this.centerX - chart.radius;
        this.seriesClipRect.height = 2 * chart.radius;
        this.seriesClipRect.width = 2 * chart.radius;
        this.calculateRowSize(this.seriesClipRect);
        axis = chart.primaryYAxis;
        axis.rect = this.seriesClipRect;
        this.calculateColumnSize(this.seriesClipRect);
        axis = chart.primaryXAxis;
        axis.rect = this.seriesClipRect;
    }
    /**
     * Measure the axis.
     * @return {void}
     * @private
     */
    measure() {
        let chart = this.chart;
        chart.verticalAxes.push(chart.primaryYAxis);
        let row = chart.rows[0];
        row.axes[0] = chart.primaryYAxis;
        chart.rows[0] = row;
        chart.horizontalAxes.push(chart.primaryXAxis);
        let column = chart.columns[0];
        column.axes[0] = chart.primaryXAxis;
        chart.columns[0] = column;
    }
    /**
     * Measure the row size.
     * @return {void}
     */
    calculateRowSize(rect) {
        /*! Calculate row size */
        let chart = this.chart;
        let row = chart.rows[0];
        row.computedHeight = rect.height / 2;
        row.computedTop = rect.y;
        chart.rows[0] = row;
    }
    /**
     * Measure the row size.
     * @return {void}
     */
    calculateColumnSize(rect) {
        /*! Calculate column size */
        let chart = this.chart;
        let column = chart.columns[0];
        column.computedLeft = rect.x;
        column.computedWidth = rect.width;
        chart.columns[0] = column;
    }
    /**
     * To render the axis element.
     * @return {void}
     * @private
     */
    renderAxes() {
        let axis;
        let chart = this.chart;
        this.startAngle = chart.primaryXAxis.startAngle;
        let axisElement = chart.renderer.createGroup({ id: chart.element.id + 'AxisCollection' });
        let axisLineElement = chart.renderer.createGroup({ id: chart.element.id + 'AxisOutsideCollection' });
        for (let i = 0, len = chart.axisCollections.length; i < len; i++) {
            this.element = chart.renderer.createGroup({ id: chart.element.id + 'AxisGroup' + i });
            axis = chart.axisCollections[i];
            if (axis.orientation === 'Horizontal') {
                if (axis.majorGridLines.width > 0 || axis.majorTickLines.width > 0) {
                    this.drawXAxisGridLine(axis, i);
                }
                if (axis.visible) {
                    this.drawXAxisLabels(axis, i);
                }
            }
            else {
                this.drawYAxisGridLine(axis, i);
                if (axis.lineStyle.width > 0) {
                    this.drawYAxisLine(axis, i, axis.plotOffset, 0);
                }
                if (axis.visible) {
                    this.drawYAxisLabels(axis, i);
                }
            }
            axisElement.appendChild(this.element);
        }
        axisElement.appendChild(this.element);
        chart.svgObject.appendChild(axisElement);
        return axisLineElement;
    }
    drawYAxisLine(axis, index, plotX, plotY) {
        let chart = this.chart;
        let optionsLine = {};
        let vector = CoefficientToVector(valueToPolarCoefficient(axis.visibleLabels[0].value, axis), this.startAngle);
        let axisLine = 'M ' + this.centerX + ' ' + this.centerY + 'L ' +
            (this.centerX + chart.radius * vector.x) + ' ' + (this.centerY + chart.radius * vector.y);
        optionsLine = {
            'id': chart.element.id + 'AxisLine_' + index,
            'd': axisLine,
            'stroke-dasharray': axis.lineStyle.dashArray,
            'stroke-width': axis.lineStyle.width,
            'stroke': axis.lineStyle.color || chart.themeStyle.axisLine
        };
        chart.yAxisElements.appendChild(chart.renderer.drawPath(optionsLine));
    }
    drawYAxisLabels(axis, index) {
        let chart = this.chart;
        let elementSize;
        let options;
        let pointX = 0;
        let pointY = 0;
        let vector;
        let angle = this.startAngle < 0 ? this.startAngle + 360 : this.startAngle;
        let anchor = 'middle';
        let radius;
        let padding = 5;
        let labelElement = chart.renderer.createGroup({ id: chart.element.id + 'AxisLabels' + index });
        vector = CoefficientToVector(valueToPolarCoefficient(axis.visibleLabels[0].value, axis), this.startAngle);
        for (let i = 0, len = axis.visibleLabels.length; i < len; i++) {
            radius = chart.radius * valueToCoefficient(axis.visibleLabels[i].value, axis);
            elementSize = axis.visibleLabels[i].size;
            radius = chart.radius * valueToCoefficient(axis.visibleLabels[i].value, axis);
            pointX = (this.centerX + radius * vector.x) + ((axis.majorTickLines.height + elementSize.width / 2 + padding / 2)
                * (Math.cos(angle * Math.PI / 180)) * (axis.labelPosition === 'Inside' ? 1 : -1));
            pointY = (this.centerY + radius * vector.y) + ((axis.majorTickLines.height + elementSize.height / 2)
                * (Math.sin(angle * Math.PI / 180)) * (axis.labelPosition === 'Inside' ? 1 : -1));
            options = new TextOption(chart.element.id + index + '_AxisLabel_' + i, pointX, pointY + (elementSize.height / 4), anchor, axis.visibleLabels[i].text);
            textElement(options, axis.labelStyle, axis.labelStyle.color || chart.themeStyle.axisLabel, labelElement);
        }
        chart.yAxisElements.appendChild(labelElement);
    }
    drawYAxisGridLine(axis, index) {
        let chart = this.chart;
        let options;
        let radius;
        let majorTick = '';
        let majorGrid = '';
        let vector;
        let vector2;
        let angle = this.startAngle < 0 ? this.startAngle + 360 : this.startAngle;
        let rect = axis.rect;
        let x1;
        let y1;
        let x2;
        let y2;
        let border = {
            color: axis.majorGridLines.color || chart.themeStyle.majorGridLine,
            width: axis.majorGridLines.width
        };
        if (axis.majorGridLines.width > 0) {
            if (chart.visibleSeries[0].type === 'Polar') {
                for (let j = 0; j < axis.visibleLabels.length; j++) {
                    radius = chart.radius * valueToCoefficient(axis.visibleLabels[j].value, axis);
                    options = new CircleOption(chart.element.id + '_MajorGridLine_' + index, 'transparent', border, axis.majorGridLines.width, this.centerX, this.centerY, radius);
                    this.element.appendChild(chart.renderer.drawCircle(options));
                }
            }
            else {
                for (let j = 0; j < axis.visibleLabels.length; j++) {
                    radius = chart.radius * valueToCoefficient(axis.visibleLabels[j].value, axis);
                    for (let i = 0, len = chart.primaryXAxis.visibleLabels.length; i < len; i++) {
                        vector = CoefficientToVector(valueToPolarCoefficient(chart.primaryXAxis.visibleLabels[i].value, chart.primaryXAxis), this.startAngle);
                        if (i + 1 < len) {
                            vector2 = CoefficientToVector(valueToPolarCoefficient(chart.primaryXAxis.visibleLabels[i + 1].value, chart.primaryXAxis), this.startAngle);
                        }
                        else {
                            vector2 = CoefficientToVector(valueToPolarCoefficient(chart.primaryXAxis.visibleLabels[0].value, chart.primaryXAxis), this.startAngle);
                        }
                        x1 = this.centerX + radius * vector.x;
                        y1 = this.centerY + radius * vector.y;
                        x2 = this.centerX + radius * vector2.x;
                        y2 = this.centerY + radius * vector2.y;
                        majorGrid = majorGrid.concat('M' + ' ' + x1 + ' ' + y1 + ' ' + 'L' + ' ' + x2 + ' ' + y2 + ' ');
                    }
                }
                options = new PathOption(chart.element.id + '_MajorGridLine_' + index, 'transparent', axis.majorGridLines.width, axis.majorGridLines.color || chart.themeStyle.majorGridLine, null, null, majorGrid);
                this.element.appendChild(chart.renderer.drawPath(options));
            }
        }
        if (axis.majorTickLines.width > 0) {
            vector = CoefficientToVector(valueToPolarCoefficient(axis.visibleLabels[0].value, axis), this.startAngle);
            for (let i = 0; i < axis.visibleLabels.length; i++) {
                radius = chart.radius * valueToCoefficient(axis.visibleLabels[i].value, axis);
                x1 = this.centerX + radius * vector.x;
                y1 = this.centerY + radius * vector.y;
                x2 = x1 + (axis.majorTickLines.height * (Math.cos(angle * Math.PI / 180)) * (axis.tickPosition === 'Inside' ? 1 : -1));
                y2 = y1 + (axis.majorTickLines.height * (Math.sin(angle * Math.PI / 180)) * (axis.tickPosition === 'Inside' ? 1 : -1));
                majorTick = majorTick.concat('M ' + x1 + ' ' + y1 +
                    ' L ' + x2 + ' ' + y2 + ' ');
            }
        }
        this.renderTickLine(axis, index, majorTick, '');
    }
    drawXAxisGridLine(axis, index) {
        let chart = this.chart;
        let tempInterval;
        let vector;
        let majorGrid = '';
        let majorTick = '';
        let minorGirdLine = '';
        let minorTickLine = '';
        let x1 = this.centerX;
        let x2;
        let y1 = this.centerY;
        let y2;
        let minorDirection;
        let tickSize = axis.majorTickLines.height;
        let rect = axis.rect;
        let length = axis.visibleLabels.length;
        //Gridlines
        for (let i = 0; i < length; i++) {
            tempInterval = axis.visibleLabels[i].value;
            vector = CoefficientToVector(valueToPolarCoefficient(axis.visibleLabels[i].value, axis), this.startAngle);
            x2 = this.centerX + chart.radius * vector.x;
            y2 = this.centerY + chart.radius * vector.y;
            let xLoc = x2 + (axis.majorTickLines.height * vector.x * (axis.tickPosition === 'Inside' ? -1 : 1));
            let yLoc = y2 + (axis.majorTickLines.height * vector.y * (axis.tickPosition === 'Inside' ? -1 : 1));
            majorGrid = majorGrid.concat('M ' + x1 + ' ' + y1 + ' ' + 'L' + x2 + ' ' + y2);
            majorTick = majorTick.concat('M ' + x2 + ' ' + y2 +
                ' L ' + xLoc + ' ' + yLoc + ' ');
            if (axis.minorTicksPerInterval > 0 && (axis.minorGridLines.width > 0 || axis.minorTickLines.width > 0)
                && axis.valueType !== 'Category' && chart.visibleSeries[0].type !== 'Radar') {
                minorDirection = this.drawAxisMinorLine(axis, tempInterval, minorGirdLine, minorTickLine);
                minorGirdLine = minorDirection[0];
                minorTickLine = minorDirection[1];
            }
        }
        this.renderTickLine(axis, index, majorTick, minorTickLine);
        this.renderGridLine(axis, index, majorGrid, minorGirdLine);
    }
    drawAxisMinorLine(axis, tempInterval, minorGird, minorTick) {
        let value = tempInterval;
        let x;
        let y;
        let vector;
        let range = axis.visibleRange;
        let direction = [];
        let tickSize = axis.minorTickLines.height;
        let rect = axis.rect;
        for (let j = 0; j < axis.minorTicksPerInterval; j++) {
            value += (axis.valueType === 'DateTime' ? axis.dateTimeInterval : axis.visibleRange.interval) /
                (axis.minorTicksPerInterval + 1);
            if (inside(value, range)) {
                vector = CoefficientToVector(valueToPolarCoefficient(value, axis), this.startAngle);
                x = this.centerX + this.chart.radius * vector.x;
                y = this.centerY + this.chart.radius * vector.y;
                let tickXSize = x + (axis.minorTickLines.height * vector.x * (axis.tickPosition === 'Inside' ? -1 : 1));
                let tickYSize = y + (axis.minorTickLines.height * vector.y * (axis.tickPosition === 'Inside' ? -1 : 1));
                minorGird = minorGird.concat('M' + ' ' + this.centerX + ' ' + this.centerY
                    + 'L ' + x + ' ' + y);
                minorTick = minorTick.concat('M' + ' ' + x + ' ' + y + 'L' + ' ' + (tickXSize) + ' ' +
                    (tickYSize));
            }
        }
        direction.push(minorGird);
        direction.push(minorTick);
        return direction;
    }
    /**
     * To render the axis label.
     * @return {void}
     * @private
     */
    drawXAxisLabels(axis, index) {
        let chart = this.chart;
        let pointX = 0;
        let pointY = 0;
        let labelElement = chart.renderer.createGroup({ id: chart.element.id + 'AxisLabels' + index });
        let options;
        let vector;
        let labelText;
        let firstLabelX;
        let islabelInside = axis.labelPosition === 'Inside';
        let padding = 5;
        let lastLabelX;
        let textAnchor = '';
        let ticksbwtLabel = axis.valueType === 'Category' && axis.labelPlacement === 'BetweenTicks'
            && chart.visibleSeries[0].type !== 'Radar' ? 0.5 : 0;
        let radius = chart.radius + axis.majorTickLines.height;
        radius = (islabelInside) ? -radius : radius;
        for (let i = 0, len = axis.visibleLabels.length; i < len; i++) {
            vector = CoefficientToVector(valueToPolarCoefficient(axis.visibleLabels[i].value + ticksbwtLabel, axis), this.startAngle);
            if (!isNaN(vector.x) && !isNaN(vector.y)) {
                pointX = this.centerX + (radius + axis.majorTickLines.height + padding) * vector.x;
                pointY = this.centerY + (radius + axis.majorTickLines.height + padding) * vector.y;
                textAnchor = parseFloat(pointX.toFixed(1)) === parseFloat(this.centerX.toFixed(1)) ? 'middle' :
                    ((pointX < this.centerX && !islabelInside) || (pointX > this.centerX && islabelInside)) ? 'end' : 'start';
            }
            labelText = axis.visibleLabels[i].text;
            if (i === 0) {
                firstLabelX = pointX;
            }
            else if (i === axis.visibleLabels.length - 1 && axis.valueType !== 'Category') {
                lastLabelX = measureText(labelText, axis.labelStyle).height;
                lastLabelX += pointX;
                labelText = (lastLabelX > firstLabelX) ? '' : labelText;
            }
            options = new TextOption(chart.element.id + index + '_AxisLabel_' + i, pointX, pointY, textAnchor, labelText, '', 'central');
            textElement(options, axis.labelStyle, axis.labelStyle.color || chart.themeStyle.axisLabel, labelElement);
        }
        this.element.appendChild(labelElement);
    }
    renderTickLine(axis, index, majorTickLine, minorTickLine) {
        let tickOptions;
        let chart = this.chart;
        if (axis.majorTickLines.width > 0) {
            tickOptions = new PathOption(chart.element.id + '_MajorTickLine_' + index, 'transparent', axis.majorTickLines.width, axis.majorTickLines.color || chart.themeStyle.majorTickLine, null, null, majorTickLine);
            chart.yAxisElements.appendChild(chart.renderer.drawPath(tickOptions));
        }
        if (axis.minorTickLines.width > 0) {
            tickOptions = new PathOption(chart.element.id + '_MinorTickLine_' + index, 'transparent', axis.minorTickLines.width, axis.minorTickLines.color || chart.themeStyle.minorTickLine, null, null, minorTickLine);
            chart.yAxisElements.appendChild(chart.renderer.drawPath(tickOptions));
        }
    }
    renderGridLine(axis, index, majorGrid, minorGird) {
        let chart = this.chart;
        let gridOptions;
        if (axis.majorGridLines.width > 0) {
            gridOptions = new PathOption(chart.element.id + '_MajorGridLine_' + index, 'transparent', axis.majorGridLines.width, axis.majorGridLines.color || chart.themeStyle.majorGridLine, null, axis.majorGridLines.dashArray, majorGrid);
            this.element.appendChild(chart.renderer.drawPath(gridOptions));
        }
        if (axis.minorGridLines.width > 0) {
            gridOptions = new PathOption(chart.element.id + '_MinorGridLine_' + index, 'transparent', axis.minorGridLines.width, axis.minorGridLines.color || chart.themeStyle.minorGridLine, null, axis.minorGridLines.dashArray, minorGird);
            this.element.appendChild(chart.renderer.drawPath(gridOptions));
        }
    }
}

/**
 * `PolarSeries` module is used to render the polar series.
 */
class PolarSeries extends PolarRadarPanel {
    /**
     * Render Polar Series.
     * @return {void}.
     * @private
     */
    render(series) {
        let seriesType = firstToLowerCase(series.drawType);
        if (series.drawType.indexOf('Column') > -1) {
            this.columnDrawTypeRender(series);
        }
        else {
            series.chart[seriesType + 'SeriesModule'].render(series, series.xAxis, series.yAxis, series.chart.requireInvertedAxis);
        }
    }
    /**
     * Render Column DrawType.
     * @return {void}.
     * @private
     */
    columnDrawTypeRender(series) {
        let visiblePoints = series.points;
        let options;
        let argsData;
        let startAngle;
        let endAngle;
        let itemCurrentXPos;
        let radius;
        let pointStartAngle;
        let pointEndAngle;
        let x1;
        let x2;
        let y1;
        let y2;
        let startValue;
        let endValue;
        let innerRadius;
        let centerX = (series.clipRect.width / 2) + series.clipRect.x;
        let dStartX;
        let dStartY;
        let centerY = (series.clipRect.height / 2) + series.clipRect.y;
        let dEndX;
        let dEndY;
        let axisInversed = series.xAxis.isInversed ? 1 : 0;
        let direction = '';
        let sumofYValues = 0;
        let interval = (series.points[1] ? series.points[1].xValue : 2 * series.points[0].xValue) - series.points[0].xValue;
        let ticks = series.xAxis.valueType === 'Category' && series.xAxis.labelPlacement === 'BetweenTicks' ? 0 : interval / 2;
        let rangeInterval = series.xAxis.valueType === 'DateTime' ? series.xAxis.dateTimeInterval : 1;
        let min = series.xAxis.actualRange.min;
        let inversedValue;
        this.getSeriesPosition(series);
        let position = series.xAxis.isInversed ? (series.rectCount - 1 - series.position) : series.position;
        let ticksbwtLabel = series.xAxis.valueType === 'Category' && series.xAxis.labelPlacement === 'BetweenTicks' ? 0.5
            : 0.5 - (series.rectCount / 2);
        do {
            sumofYValues += rangeInterval;
            min += rangeInterval;
        } while (min <= series.xAxis.actualRange.max - (series.xAxis.valueType === 'Category' ? 0 : 1));
        for (let point of series.points) {
            point.symbolLocations = [];
            point.regions = [];
            if (point.visible && withInRange(series.points[point.index - 1], point, series.points[point.index + 1], series)) {
                inversedValue = series.xAxis.isInversed ? (series.xAxis.visibleRange.max - point.xValue) :
                    point.xValue - series.xAxis.visibleRange.min;
                itemCurrentXPos = (inversedValue) +
                    ((interval / series.rectCount) * position - ticks) + (sumofYValues / 360 * series.xAxis.startAngle);
                itemCurrentXPos = (((itemCurrentXPos) / (sumofYValues)));
                startAngle = 2 * Math.PI * (itemCurrentXPos + series.xAxis.startAngle);
                endAngle = 2 * Math.PI * ((itemCurrentXPos + series.xAxis.startAngle) + (interval / series.rectCount) / (sumofYValues));
                pointStartAngle = startAngle;
                pointEndAngle = endAngle;
                startAngle = (startAngle - 0.5 * Math.PI);
                endAngle = (endAngle - 0.5 * Math.PI) - 0.000001;
                if (series.drawType === 'StackingColumn' || series.drawType === 'RangeColumn') {
                    startValue = series.drawType === 'RangeColumn' ? point.low : series.stackedValues.startValues[point.index];
                    endValue = series.drawType === 'RangeColumn' ? point.high : series.stackedValues.endValues[point.index];
                    endValue = (series.yAxis.valueType === 'Logarithmic' ?
                        logBase(endValue === 0 ? 1 : endValue, series.yAxis.logBase) : endValue);
                    endValue = endValue > series.yAxis.actualRange.max ? series.yAxis.actualRange.max : endValue;
                    radius = startValue === endValue ? 0 : series.chart.radius * valueToCoefficient(endValue, series.yAxis);
                    x1 = centerX + radius * Math.cos(startAngle);
                    x2 = centerX + radius * Math.cos(endAngle);
                    y1 = centerY + radius * Math.sin(startAngle);
                    y2 = centerY + radius * Math.sin(endAngle);
                    innerRadius = series.chart.radius * valueToCoefficient((startValue === 0 && series.yAxis.visibleRange.min !== 0) ? series.yAxis.visibleRange.min : startValue, series.yAxis);
                    dStartX = centerX + innerRadius * Math.cos(startAngle);
                    dStartY = centerY + innerRadius * Math.sin(startAngle);
                    dEndX = centerX + innerRadius * Math.cos(endAngle);
                    dEndY = centerY + innerRadius * Math.sin(endAngle);
                    if (series.type === 'Polar') {
                        direction = ('M' + ' ' + x1 + ' ' + y1 + ' ' + 'A' + ' ' + radius + ' ' + radius + ' ' + '0' + ' '
                            + '0' + ' ' + 1 + ' ' + x2 + ' ' + y2 + ' ' + 'L' + ' ' + dEndX + ' ' + dEndY + ' ' +
                            'A' + ' ' + innerRadius + ' ' + innerRadius + ' ' + '1' + ' ' + '0' + ' ' + '0' + ' '
                            + dStartX + ' ' + dStartY + ' ' + 'z');
                    }
                    else {
                        direction = ('M' + ' ' + x1 + ' ' + y1 + ' ' + 'L' + ' ' + x2 + ' ' + y2 + ' ' + 'L'
                            + dEndX + ' ' + dEndY + ' ' + 'L' + ' ' + dStartX + ' ' + dStartY + ' ' + 'z');
                    }
                    point.regionData = new PolarArc(pointStartAngle, pointEndAngle, innerRadius, radius, itemCurrentXPos);
                }
                else {
                    endValue = point.yValue > series.yAxis.actualRange.max ? series.yAxis.actualRange.max : point.yValue;
                    radius = series.chart.radius * valueToCoefficient((series.yAxis.valueType === 'Logarithmic' ? logBase(endValue, series.yAxis.logBase) : endValue), series.yAxis);
                    x1 = centerX + radius * Math.cos(startAngle);
                    x2 = centerX + radius * Math.cos(endAngle);
                    y1 = centerY + radius * Math.sin(startAngle);
                    y2 = centerY + radius * Math.sin(endAngle);
                    if (series.type === 'Polar') {
                        direction = ('M' + ' ' + x1 + ' ' + y1 + ' ' + 'A' + ' ' + radius + ' ' + radius + ' ' + '0' + ' ' +
                            '0' + ' ' + 1 + ' ' + x2 + ' ' + y2 + ' ' + 'L' + ' ' + centerX + ' ' +
                            centerY + ' ' + 'z');
                    }
                    else {
                        direction = ('M' + ' ' + x1 + ' ' + y1 + ' ' + 'L' + ' ' + x2 + ' ' + y2 + ' ' + 'L' + ' '
                            + centerX + ' ' + centerY + ' ' + 'z');
                    }
                    point.regionData = new PolarArc(pointStartAngle, pointEndAngle, 0, radius, itemCurrentXPos);
                }
                argsData = this.triggerEvent(series.chart, series, point);
                options = new PathOption(series.chart.element.id + '_Series_' + series.index + '_Point_' + point.index, argsData.fill, argsData.border.width, argsData.border.color, series.opacity, series.dashArray, direction);
                if (!argsData.cancel) {
                    this.appendLinePath(options, series, '');
                    if (series.type === 'Polar') {
                        point.symbolLocations.push({
                            x: centerX + radius * Math.cos((startAngle + (endAngle - startAngle) / 2)),
                            y: centerY + radius * Math.sin((startAngle + (endAngle - startAngle) / 2))
                        });
                    }
                    else {
                        point.symbolLocations.push({ x: (x1 + x2) / 2, y: (y1 + y2) / 2 });
                    }
                }
            }
        }
        series.isRectSeries = true;
    }
    /**
     * To trigger the point rendering event.
     * @return {void}
     * @private
     */
    triggerEvent(chart, series, point) {
        let argsData = {
            cancel: false, name: pointRender, series: series, point: point,
            fill: series.setPointColor(point, series.interior),
            border: series.setBorderColor(point, { width: series.border.width, color: series.border.color })
        };
        chart.trigger(pointRender, argsData);
        point.color = argsData.fill;
        return argsData;
    }
    /** get position for column drawtypes
     * @return {void}.
     * @private
     */
    getSeriesPosition(series) {
        let chart = series.chart;
        let seriesCollection = [];
        let stackingGroup = [];
        let vSeries = { rectCount: 0, position: null };
        for (let series of chart.visibleSeries) {
            if (series.visible && (series.type === 'Polar' || series.type === 'Radar') && series.drawType.indexOf('Column') !== -1) {
                seriesCollection.push(series);
            }
        }
        seriesCollection.forEach((series) => {
            if (series.drawType.indexOf('Stacking') !== -1) {
                if (series.stackingGroup) {
                    if (stackingGroup[series.stackingGroup] === undefined) {
                        series.position = vSeries.rectCount;
                        stackingGroup[series.stackingGroup] = vSeries.rectCount++;
                    }
                    else {
                        series.position = stackingGroup[series.stackingGroup];
                    }
                }
                else {
                    if (vSeries.position === null) {
                        series.position = vSeries.rectCount;
                        vSeries.position = vSeries.rectCount++;
                    }
                    else {
                        series.position = vSeries.position;
                    }
                }
            }
            else {
                series.position = vSeries.rectCount++;
            }
        });
        seriesCollection.forEach((value) => {
            value.rectCount = vSeries.rectCount;
        });
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        let option = series.animation;
        let duration = series.animation.duration;
        let delay = series.animation.delay;
        let rectElements = series.seriesElement.childNodes;
        let count = 1;
        if (series.drawType === 'Scatter') {
            for (let point of series.points) {
                if (!point.symbolLocations.length || !rectElements[count]) {
                    continue;
                }
                markerAnimate(rectElements[count], delay, duration, series, point.index, point.symbolLocations[0], false);
                count++;
            }
        }
        else {
            for (count = 1; count < rectElements.length; count++) {
                this.doPolarRadarAnimation(rectElements[count], delay, duration, series);
            }
        }
    }
    /**
     * To do the Polar Radar draw type column animation.
     * @return {void}
     * @private
     */
    doPolarRadarAnimation(animateElement, delay, duration, series) {
        let chartcenterX = series.clipRect.width / 2 + series.clipRect.x;
        let chartcenterY = series.clipRect.height / 2 + series.clipRect.y;
        let elementHeight = 0;
        animateElement.style.visibility = 'hidden';
        new Animation({}).animate(animateElement, {
            duration: duration,
            delay: delay,
            progress: (args) => {
                if (args.timeStamp > args.delay) {
                    args.element.style.visibility = 'visible';
                    elementHeight = ((args.timeStamp - args.delay) / args.duration);
                    animateElement.setAttribute('transform', 'translate(' + chartcenterX
                        + ' ' + chartcenterY + ') scale(' + elementHeight + ') translate(' + (-chartcenterX) + ' ' + (-chartcenterY) + ')');
                }
            },
            end: (model) => {
                animateElement.style.visibility = 'visible';
                animateElement.removeAttribute('transform');
                series.chart.trigger('animationComplete', { series: series });
            }
        });
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'PolarSeries';
    }
    /**
     * To destroy the polar series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * `RadarSeries` module is used to render the radar series.
 */
class RadarSeries extends PolarSeries {
    /**
     * Render radar Series.
     * @return {void}.
     * @private
     */
    render(series) {
        let seriesType = firstToLowerCase(series.drawType);
        if (series.drawType.indexOf('Column') === -1) {
            series.chart[seriesType + 'SeriesModule'].render(series, series.xAxis, series.yAxis, series.chart.requireInvertedAxis);
        }
        else {
            this.columnDrawTypeRender(series);
        }
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'RadarSeries';
    }
    /**
     * To destroy the radar series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * `StackingBarSeries` module is used to render the stacking bar series.
 */
class StackingBarSeries extends ColumnBase {
    /**
     * Render the Stacking bar series.
     * @return {void}
     * @private
     */
    render(series) {
        let origin = Math.max(series.yAxis.visibleRange.min, 0);
        let sideBySideInfo = this.getSideBySideInfo(series);
        let stackedValue = series.stackedValues;
        let rect;
        let argsData;
        for (let pointStack of series.points) {
            pointStack.symbolLocations = [];
            pointStack.regions = [];
            if (pointStack.visible && withInRange(series.points[pointStack.index - 1], pointStack, series.points[pointStack.index + 1], series)) {
                rect = this.getRectangle(pointStack.xValue + sideBySideInfo.start, stackedValue.endValues[pointStack.index], pointStack.xValue + sideBySideInfo.end, stackedValue.startValues[pointStack.index], series);
                argsData = this.triggerEvent(series, pointStack, series.interior, { width: series.border.width, color: series.border.color });
                if (!argsData.cancel) {
                    this.drawRectangle(series, pointStack, rect, argsData);
                    this.updateSymbolLocation(pointStack, rect, series);
                }
            }
        }
    }
    /**
     * To destroy the stacking bar.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'StackingBarSeries';
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.animate(series);
    }
}

/**
 * `CandleSeries` module is used to render the candle series.
 */
class CandleSeries extends ColumnBase {
    /**
     * Render Candle series.
     * @return {void}
     * @private
     */
    render(series) {
        let sideBySideInfo = this.getSideBySideInfo(series);
        let argsData;
        let borderWidth = Math.max(series.border.width, 1);
        for (let point of series.points) {
            let direction = '';
            let centerRegion;
            let tickRegion;
            let midPoint;
            midPoint = (sideBySideInfo.start + sideBySideInfo.end) / 2;
            //initializing after zooming and also normal initialization
            point.regions = [];
            point.symbolLocations = [];
            if (point.visible && withInRange(series.points[point.index - 1], point, series.points[point.index + 1], series)) {
                //region to cover the top and bottom ticks
                tickRegion = this.getRectangle((point.xValue + sideBySideInfo.median), Math.max(point.high, point.low), (point.xValue + sideBySideInfo.median), Math.min(point.high, point.low), series);
                if (!series.chart.requireInvertedAxis) {
                    tickRegion.x -= borderWidth / 2;
                    tickRegion.width = borderWidth;
                }
                else {
                    tickRegion.y -= borderWidth / 2;
                    tickRegion.height = borderWidth;
                }
                //get middleRect
                centerRegion = this.getRectangle((point.xValue + sideBySideInfo.start), Math.max(point.open, point.close), (point.xValue + sideBySideInfo.end), Math.min(point.open, point.close), series);
                direction = this.getPathString(tickRegion, centerRegion, series);
                argsData = this.triggerPointRenderEvent(series, point);
                if (!argsData.cancel) {
                    this.drawCandle(series, point, centerRegion, argsData, direction);
                    this.updateSymbolLocation(point, tickRegion, series);
                    this.updateSymbolLocation(point, centerRegion, series);
                }
            }
        }
    }
    /**
     * Trigger point rendering event
     */
    triggerPointRenderEvent(series, point) {
        let fill;
        fill = this.getCandleColor(point, series);
        let border = { color: series.border.color, width: Math.max(series.border.width, 1) };
        return this.triggerEvent(series, point, fill, border);
    }
    /**
     * Find the color of the candle
     * @param series
     * @private
     */
    getCandleColor(point, series) {
        let previousPoint = series.points[point.index - 1];
        if (series.enableSolidCandles === false) {
            if (!previousPoint) {
                return series.bearFillColor;
            }
            else {
                return previousPoint.close > point.close ? series.bullFillColor :
                    series.bearFillColor;
            }
        }
        else {
            return point.open > point.close ? series.bullFillColor :
                series.bearFillColor;
        }
    }
    /**
     * Finds the path of the candle shape
     * @param Series
     * @private
     */
    getPathString(topRect, midRect, series) {
        let direction = '';
        let width = series.chart.requireInvertedAxis ? topRect.height : topRect.width;
        let center = series.chart.requireInvertedAxis ? topRect.y + topRect.height / 2 :
            topRect.x + topRect.width / 2;
        //tick 1 segment
        direction += !series.chart.requireInvertedAxis ?
            'M' + ' ' + (center) + ' ' + (topRect.y) + ' ' + 'L' + ' ' + (center) + ' ' + midRect.y :
            'M' + ' ' + (topRect.x) + ' ' + (center) + ' ' + 'L' + ' ' + (midRect.x) + ' ' + center;
        direction = direction.concat(' M' + ' ' + (midRect.x) + ' ' + (midRect.y) + ' ' +
            'L' + ' ' + (midRect.x + midRect.width) + ' ' + (midRect.y) + ' ' +
            'L' + ' ' + (midRect.x + midRect.width) + ' ' +
            (midRect.y + midRect.height) + ' ' +
            'L' + ' ' + (midRect.x) + ' ' + (midRect.y + midRect.height) +
            ' ' + 'Z');
        direction += !series.chart.requireInvertedAxis ?
            ' M' + ' ' + (center) + ' ' + (midRect.y + midRect.height) + ' ' + 'L' + ' ' + (center) + ' ' + (topRect.y +
                topRect.height) :
            ' M' + ' ' + (midRect.x + midRect.width) + ' ' + (center) + ' ' + 'L' + ' ' +
                (topRect.x + topRect.width) + ' ' + center;
        return direction;
    }
    /**
     * Draws the candle shape
     * @param series
     * @private
     */
    drawCandle(series, point, rect, argsData, direction) {
        let check = series.chart.requireInvertedAxis ? rect.height : rect.width;
        if (check <= 0) {
            return null;
        }
        let fill = !series.enableSolidCandles ?
            (point.open > point.close ? argsData.fill : 'transparent') : argsData.fill;
        argsData.border.color = argsData.fill;
        let options = new PathOption(series.chart.element.id + '_Series_' + series.index + '_Point_' + point.index, fill, argsData.border.width, argsData.border.color, series.opacity, series.dashArray, direction);
        let candleElement = series.chart.renderer.drawPath(options);
        candleElement.setAttribute('aria-label', point.x.toString() + ':' + point.high.toString()
            + ':' + point.low.toString() + ':' + point.close.toString() + ':' + point.open.toString());
        series.seriesElement.appendChild(candleElement);
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.animate(series);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'CandleSeries';
        /**
         * return the module name
         */
    }
    /**
     * To destroy the candle series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the candle series.
         */
    }
}

/**
 * `StackingColumnSeries` module used to render the stacking column series.
 */
class StackingColumnSeries extends ColumnBase {
    /**
     * Render the Stacking column series.
     * @return {void}
     * @private
     */
    render(series) {
        series.isRectSeries = true;
        let origin = Math.max(series.yAxis.visibleRange.min, 0);
        let sideBySideInfo = this.getSideBySideInfo(series);
        let rect;
        let argsData;
        let stackedValue = series.stackedValues;
        for (let point of series.points) {
            point.symbolLocations = [];
            point.regions = [];
            if (point.visible && withInRange(series.points[point.index - 1], point, series.points[point.index + 1], series)) {
                rect = this.getRectangle(point.xValue + sideBySideInfo.start, stackedValue.endValues[point.index], point.xValue + sideBySideInfo.end, stackedValue.startValues[point.index], series);
                argsData = this.triggerEvent(series, point, series.interior, { width: series.border.width, color: series.border.color });
                if (!argsData.cancel) {
                    this.drawRectangle(series, point, rect, argsData);
                    this.updateSymbolLocation(point, rect, series);
                }
            }
        }
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.animate(series);
    }
    /**
     * To destroy the stacking column.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'StackingColumnSeries';
    }
}

/**
 * `StepLineSeries` module is used to render the step line series.
 */
class StepLineSeries extends LineBase {
    /**
     * Render the Step line series.
     * @return {void}
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let direction = '';
        let startPoint = 'M';
        let prevPoint = null;
        let pathOptions;
        let lineLength;
        let point1;
        let point2;
        let visiblePoints = this.improveChartPerformance(series);
        if (xAxis.valueType === 'Category' && xAxis.labelPlacement === 'BetweenTicks') {
            lineLength = 0.5;
        }
        else {
            lineLength = 0;
        }
        for (let point of visiblePoints) {
            point.symbolLocations = [];
            point.regions = [];
            if (point.visible && withInRange(visiblePoints[point.index - 1], point, visiblePoints[point.index + 1], series)) {
                if (prevPoint != null) {
                    point2 = getPoint(point.xValue, point.yValue, xAxis, yAxis, isInverted);
                    point1 = getPoint(prevPoint.xValue, prevPoint.yValue, xAxis, yAxis, isInverted);
                    direction = direction.concat(startPoint + ' ' + (point1.x) + ' ' + (point1.y) + ' ' + 'L' + ' ' +
                        (point2.x) + ' ' + (point1.y) + 'L' + ' ' + (point2.x) + ' ' + (point2.y) + ' ');
                    startPoint = 'L';
                }
                else {
                    point1 = getPoint(point.xValue - lineLength, point.yValue, xAxis, yAxis, isInverted);
                    direction = direction.concat(startPoint + ' ' + (point1.x) + ' ' + (point1.y) + ' ');
                    startPoint = 'L';
                }
                this.storePointLocation(point, series, isInverted, getPoint);
                prevPoint = point;
            }
            else {
                prevPoint = series.emptyPointSettings.mode === 'Drop' ? prevPoint : null;
                startPoint = series.emptyPointSettings.mode === 'Drop' ? startPoint : 'M';
            }
        }
        point1 = getPoint(visiblePoints[visiblePoints.length - 1].xValue + lineLength, visiblePoints[visiblePoints.length - 1].yValue, xAxis, yAxis, isInverted);
        direction = direction.concat(startPoint + ' ' + (point1.x) + ' ' + (point1.y) + ' ');
        pathOptions = new PathOption(series.chart.element.id + '_Series_' + series.index, 'transparent', series.width, series.interior, series.opacity, series.dashArray, direction);
        this.appendLinePath(pathOptions, series, '');
        this.renderMarker(series);
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        let option = series.animation;
        this.doLinearAnimation(series, option);
    }
    /**
     * To destroy the step line series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method calling here
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'StepLineSeries';
    }
}

/**
 * `StepAreaSeries` Module used to render the step area series.
 */
class StepAreaSeries extends LineBase {
    /**
     * Render StepArea series.
     * @return {void}
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let currentPoint;
        let secondPoint;
        let start = null;
        let direction = '';
        let pointsLength = series.points.length;
        let origin = Math.max(series.yAxis.visibleRange.min, 0);
        let options;
        let point;
        let xValue;
        let lineLength;
        let prevPoint = null;
        if (xAxis.valueType === 'Category' && xAxis.labelPlacement === 'BetweenTicks') {
            lineLength = 0.5;
        }
        else {
            lineLength = 0;
        }
        for (let i = 0; i < pointsLength; i++) {
            point = series.points[i];
            xValue = point.xValue;
            point.symbolLocations = [];
            point.regions = [];
            if (point.visible && withInRange(series.points[i - 1], point, series.points[i + 1], series)) {
                if (start === null) {
                    start = new ChartLocation(xValue, 0);
                    // Start point for the current path
                    currentPoint = getPoint(xValue - lineLength, origin, xAxis, yAxis, isInverted);
                    direction += ('M' + ' ' + (currentPoint.x) + ' ' + (currentPoint.y) + ' ');
                    currentPoint = getPoint(xValue - lineLength, point.yValue, xAxis, yAxis, isInverted);
                    direction += ('L' + ' ' + (currentPoint.x) + ' ' + (currentPoint.y) + ' ');
                }
                // First Point to draw the Steparea path
                if (prevPoint != null) {
                    currentPoint = getPoint(point.xValue, point.yValue, xAxis, yAxis, isInverted);
                    secondPoint = getPoint(prevPoint.xValue, prevPoint.yValue, xAxis, yAxis, isInverted);
                    direction += ('L' + ' ' +
                        (currentPoint.x) + ' ' + (secondPoint.y) + 'L' + ' ' + (currentPoint.x) + ' ' + (currentPoint.y) + ' ');
                }
                else if (series.emptyPointSettings.mode === 'Gap') {
                    currentPoint = getPoint(point.xValue, point.yValue, xAxis, yAxis, isInverted);
                    direction += 'L' + ' ' + (currentPoint.x) + ' ' + (currentPoint.y) + ' ';
                }
                this.storePointLocation(point, series, isInverted, getPoint);
                prevPoint = point;
            }
            if (series.points[i + 1] && !series.points[i + 1].visible && series.emptyPointSettings.mode !== 'Drop') {
                // current start point
                currentPoint = getPoint(xValue + lineLength, origin, xAxis, yAxis, isInverted);
                direction += ('L' + ' ' + (currentPoint.x) + ' ' + (currentPoint.y));
                start = null;
                prevPoint = null;
            }
        }
        if (pointsLength > 1) {
            start = { 'x': series.points[pointsLength - 1].xValue + lineLength, 'y': series.points[pointsLength - 1].yValue };
            secondPoint = getPoint(start.x, start.y, xAxis, yAxis, isInverted);
            direction += ('L' + ' ' + (secondPoint.x) + ' ' + (secondPoint.y) + ' ');
            start = { 'x': series.points[pointsLength - 1].xValue + lineLength, 'y': origin };
            secondPoint = getPoint(start.x, start.y, xAxis, yAxis, isInverted);
            direction += ('L' + ' ' + (secondPoint.x) + ' ' + (secondPoint.y) + ' ');
        }
        options = new PathOption(series.chart.element.id + '_Series_' + series.index, series.interior, series.border.width, series.border.color, series.opacity, series.dashArray, direction);
        this.appendLinePath(options, series, '');
        this.renderMarker(series);
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        let option = series.animation;
        this.doLinearAnimation(series, option);
    }
    /**
     * To destroy the step Area series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method calling here
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'StepAreaSeries';
    }
}

/**
 * `StackingAreaSeries` module used to render the Stacking Area series.
 */
class StackingAreaSeries extends LineBase {
    /**
     * Render the Stacking area series.
     * @return {void}
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let polarAreaType = series.chart.chartAreaType === 'PolarRadar';
        let getCoordinate = polarAreaType ? TransformToVisible : getPoint;
        let lineDirection = '';
        let visiblePoints = series.points;
        let pointsLength = visiblePoints.length;
        let stackedvalue = series.stackedValues;
        let origin = polarAreaType ?
            Math.max(series.yAxis.visibleRange.min, stackedvalue.endValues[0]) :
            Math.max(series.yAxis.visibleRange.min, stackedvalue.startValues[0]);
        let border = series.border;
        let options;
        let startPoint = 0;
        let point1 = getCoordinate(visiblePoints[0].xValue, origin, xAxis, yAxis, isInverted, series);
        let point2;
        lineDirection = lineDirection.concat('M' + ' ' + (point1.x) + ' ' + (point1.y) + ' ');
        for (let i = 0; i < pointsLength; i++) {
            visiblePoints[i].symbolLocations = [];
            visiblePoints[i].regions = [];
            if (visiblePoints[i].visible && withInRange(visiblePoints[i - 1], visiblePoints[i], visiblePoints[i + 1], series)) {
                point1 = getCoordinate(visiblePoints[i].xValue, stackedvalue.endValues[i], xAxis, yAxis, isInverted, series);
                lineDirection = lineDirection.concat('L' + ' ' + (point1.x) + ' ' + (point1.y) + ' ');
                visiblePoints[i].symbolLocations.push(getCoordinate(visiblePoints[i].xValue, stackedvalue.endValues[i], xAxis, yAxis, isInverted, series));
                visiblePoints[i].regions.push(new Rect(visiblePoints[i].symbolLocations[0].x - series.marker.width, visiblePoints[i].symbolLocations[0].y - series.marker.height, 2 * series.marker.width, 2 * series.marker.height));
            }
            else {
                if (series.emptyPointSettings.mode !== 'Drop') {
                    for (let j = i - 1; j >= startPoint; j--) {
                        point2 = getCoordinate(visiblePoints[j].xValue, stackedvalue.startValues[j], xAxis, yAxis, isInverted, series);
                        lineDirection = lineDirection.concat('L' + ' ' + (point2.x) + ' ' + (point2.y) + ' ');
                    }
                    if (visiblePoints[i + 1] && visiblePoints[i + 1].visible) {
                        point1 = getCoordinate(visiblePoints[i + 1].xValue, stackedvalue.startValues[i + 1], xAxis, yAxis, isInverted, series);
                        lineDirection = lineDirection.concat('M' + ' ' + (point1.x) + ' ' + (point1.y) + ' ');
                    }
                    startPoint = i + 1;
                }
            }
        }
        if (series.chart.chartAreaType === 'PolarRadar' && visiblePoints.length > 1) {
            point1 = { 'x': series.points[0].xValue, 'y': stackedvalue.endValues[0] };
            point2 = getCoordinate(point1.x, point1.y, xAxis, yAxis, isInverted, series);
            lineDirection += ('L' + ' ' + (point2.x) + ' ' + (point2.y) + ' ');
        }
        for (let j = pointsLength - 1; j >= startPoint; j--) {
            let previousSeries = this.getPreviousSeries(series);
            if (previousSeries.emptyPointSettings.mode !== 'Drop' || !previousSeries.points[j].isEmpty) {
                point2 = getCoordinate(visiblePoints[j].xValue, stackedvalue.startValues[j], xAxis, yAxis, isInverted, series);
                lineDirection = lineDirection.concat(((j === (pointsLength - 1) && polarAreaType) ? 'M' : 'L')
                    + ' ' + (point2.x) + ' ' + (point2.y) + ' ');
            }
        }
        options = new PathOption(series.chart.element.id + '_Series_' + series.index, series.interior, series.border.width, series.border.color, series.opacity, series.dashArray, lineDirection);
        this.appendLinePath(options, series, '');
        this.renderMarker(series);
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        let option = series.animation;
        this.doLinearAnimation(series, option);
    }
    /**
     * To destroy the stacking area.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method calling here
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'StackingAreaSeries';
    }
    /**
     * To find previous visible series
     */
    getPreviousSeries(series) {
        let seriesCollection = series.chart.visibleSeries;
        for (let i = 0, length = seriesCollection.length; i < length; i++) {
            if (series.index === seriesCollection[i].index && i !== 0) {
                return seriesCollection[i - 1];
            }
        }
        return seriesCollection[0];
    }
}

/**
 * `ScatterSeries` module is used to render the scatter series.
 */
class ScatterSeries {
    /**
     * Render the scatter series.
     * @return {void}
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let seriesIndex = series.index;
        let marker = series.marker;
        let border = series.border;
        let visiblePoints = series.points;
        let symbolId;
        let shapeOption;
        let argsData;
        let getCoordinate = series.chart.chartAreaType === 'PolarRadar' ? TransformToVisible : getPoint;
        for (let point of visiblePoints) {
            point.symbolLocations = [];
            point.regions = [];
            if (point.visible && withInRange(visiblePoints[point.index - 1], point, visiblePoints[point.index + 1], series)) {
                symbolId = series.chart.element.id + '_Series_' + seriesIndex + '_Point_' + point.index;
                argsData = {
                    cancel: false, name: pointRender, series: series, point: point,
                    fill: series.setPointColor(point, series.interior),
                    border: series.setBorderColor(point, { width: series.border.width, color: series.border.color }),
                    height: marker.height, width: marker.width, shape: marker.shape
                };
                series.chart.trigger(pointRender, argsData);
                if (!argsData.cancel) {
                    point.symbolLocations.push(getCoordinate(point.xValue, point.yValue, xAxis, yAxis, isInverted, series));
                    point.color = argsData.fill;
                    shapeOption = new PathOption(symbolId, argsData.fill, argsData.border.width, argsData.border.color, series.opacity, null);
                    series.seriesElement.appendChild(drawSymbol(point.symbolLocations[0], argsData.shape, new Size(argsData.width, argsData.height), marker.imageUrl, shapeOption, point.x.toString() + ':' + point.yValue.toString()));
                    point.regions.push(new Rect(point.symbolLocations[0].x - marker.width, point.symbolLocations[0].y - marker.height, 2 * marker.width, 2 * marker.height));
                    point.marker = {
                        border: argsData.border, fill: argsData.fill,
                        height: argsData.height, visible: true,
                        width: argsData.width, shape: argsData.shape
                    };
                }
                else {
                    point.marker = { visible: true };
                }
            }
        }
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        let duration = series.animation.duration;
        let delay = series.animation.delay;
        let rectElements = series.seriesElement.childNodes;
        let count = 1;
        for (let point of series.points) {
            if (!point.symbolLocations.length || !rectElements[count]) {
                continue;
            }
            markerAnimate(rectElements[count], delay, duration, series, point.index, point.symbolLocations[0], false);
            count++;
        }
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'ScatterSeries';
    }
    /**
     * To destroy the scatter.
     * @return {void}
     */
    destroy(chart) {
        /**
         * Destroy method calling here
         */
    }
}

/**
 * `RangeColumnSeries` module is used to render the range column series.
 */
class RangeColumnSeries extends ColumnBase {
    /**
     * Render Range Column series.
     * @return {void}
     * @private
     */
    render(series) {
        let rect;
        let sideBySideInfo = this.getSideBySideInfo(series);
        //let origin: number = Math.max(<number>series.yAxis.visibleRange.min, 0);
        let argsData;
        for (let rangePoint of series.points) {
            rangePoint.symbolLocations = [];
            rangePoint.regions = [];
            if (rangePoint.visible && withInRange(series.points[rangePoint.index - 1], rangePoint, series.points[rangePoint.index + 1], series)) {
                rect = this.getRectangle(rangePoint.xValue + sideBySideInfo.start, rangePoint.high, rangePoint.xValue + sideBySideInfo.end, rangePoint.low, series);
                argsData = this.triggerEvent(series, rangePoint, series.interior, { width: series.border.width, color: series.border.color });
                if (!argsData.cancel) {
                    this.updateSymbolLocation(rangePoint, rect, series);
                    this.drawRectangle(series, rangePoint, rect, argsData);
                }
            }
        }
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'RangeColumnSeries';
        /**
         * return the module name
         */
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.animate(series);
    }
    /**
     * To destroy the range column series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * `WaterfallSeries` module is used to render the waterfall series.
 */
class WaterfallSeries extends ColumnBase {
    /**
     * Render waterfall series.
     * @return {void}
     * @private
     */
    render(series) {
        let rect;
        let sideBySideInfo = this.getSideBySideInfo(series);
        let origin = Math.max(series.yAxis.visibleRange.min, 0);
        let argsData;
        let prevEndValue = 0;
        let direction = '';
        let currentEndValue = 0;
        let originValue;
        let prevRegion = null;
        let y;
        let isInversed = series.chart.requireInvertedAxis;
        let intermediateOrigin = 0;
        for (let point of series.points) {
            point.symbolLocations = [];
            point.regions = [];
            if (point.visible && withInRange(series.points[point.index - 1], point, series.points[point.index + 1], series)) {
                //Calcute the current point value to render waterfall series.
                let isSum = this.isIntermediateSum(series, point.index);
                let totalSum = this.isSumIndex(series, point.index);
                currentEndValue += isSum || totalSum === true ? 0 : point.yValue;
                //Calcute the origin value for points
                originValue = (isSum === true ? intermediateOrigin : ((prevEndValue !== null && !totalSum) ? prevEndValue : origin));
                rect = this.getRectangle(point.xValue + sideBySideInfo.start, currentEndValue, point.xValue + sideBySideInfo.end, originValue, series);
                argsData = this.triggerPointRenderEvent(series, point);
                //intermediateOrigin is used only for imtermediate data 
                if (isSum) {
                    intermediateOrigin = currentEndValue;
                }
                prevEndValue = currentEndValue;
                if (!argsData.cancel) {
                    this.updateSymbolLocation(point, rect, series);
                    this.drawRectangle(series, point, rect, argsData);
                }
                let currentRegion = point.regions[0];
                if (prevRegion !== null) {
                    let prevLeft = isInversed ? prevRegion.x : prevRegion.y;
                    let currentLeft = isInversed ? currentRegion.x : currentRegion.y;
                    let prevBottom = isInversed ? prevRegion.x + prevRegion.width : prevRegion.y + prevRegion.height;
                    let currentBottom = isInversed ?
                        currentRegion.x + currentRegion.width : currentRegion.y + currentRegion.height;
                    if (Math.round(prevLeft) === Math.round(currentLeft) ||
                        Math.round(prevBottom) === Math.round(currentLeft)) {
                        y = isInversed ? currentRegion.x : currentRegion.y;
                    }
                    else {
                        y = currentBottom;
                    }
                    if (isInversed) {
                        direction = direction.concat('M' + ' ' + y + ' ' + (prevRegion.y + prevRegion.height) + ' ' +
                            'L' + ' ' + y + ' ' + currentRegion.y + ' ');
                    }
                    else {
                        direction = direction.concat('M' + ' ' + prevRegion.x + ' ' + y + ' ' +
                            'L' + ' ' + (currentRegion.x + currentRegion.width) + ' ' + y + ' ');
                    }
                }
                prevRegion = point.regions[0];
            }
        }
        let options = new PathOption(series.chart.element.id + '_Series_' + series.index + '_Connector_', 'none', series.connector.width, series.connector.color, series.opacity, series.connector.dashArray, direction);
        let element = series.chart.renderer.drawPath(options);
        if (series.chart.animateSeries) {
            element.style.visibility = 'hidden';
        }
        series.seriesElement.appendChild(element);
    }
    /**
     * To check intermediateSumIndex in waterfall series.
     * @return boolean
     * @private
     */
    isIntermediateSum(series, index) {
        if (series.intermediateSumIndexes !== undefined && series.intermediateSumIndexes.indexOf(index) !== -1) {
            return true;
        }
        return false;
    }
    /**
     * To check sumIndex in waterfall series.
     * @return boolean
     * @private
     */
    isSumIndex(series, index) {
        if (series.sumIndexes !== undefined && series.sumIndexes.indexOf(index) !== -1) {
            return true;
        }
        return false;
    }
    /**
     * To trigger the point rendering event for waterfall series.
     * @return IPointRenderEventArgs
     * @private
     */
    triggerPointRenderEvent(series, point) {
        let color;
        let isSum = this.isIntermediateSum(series, point.index);
        let totalSum = this.isSumIndex(series, point.index);
        if (isSum || totalSum) {
            color = series.summaryFillColor;
        }
        else if (point.y < 0) {
            color = series.negativeFillColor;
        }
        else {
            color = series.interior;
        }
        return this.triggerEvent(series, point, color, { color: series.border.color, width: series.border.width });
    }
    /**
     * Add sumIndex and intermediateSumIndex data.
     * @return {object[]}
     * @private
     */
    processWaterfallData(json, series) {
        let data = json;
        let length = json.length;
        let index;
        let intermediateSum = series.intermediateSumIndexes;
        let sumIndex = series.sumIndexes;
        if (intermediateSum !== undefined && intermediateSum.length > 0) {
            for (let i = 0; i < intermediateSum.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if (j === intermediateSum[i]) {
                        if (i === 0) {
                            index = subArraySum(data, -1, intermediateSum[i], null, series);
                        }
                        else {
                            index = subArraySum(data, intermediateSum[i - 1], intermediateSum[i], null, series);
                        }
                        data[j][series.yName] = index;
                    }
                }
            }
        }
        if (sumIndex !== undefined && sumIndex.length > 0) {
            for (let k = 0; k < sumIndex.length; k++) {
                for (let j = 0; j < data.length; j++) {
                    if (j === sumIndex[k]) {
                        if (intermediateSum !== undefined) {
                            index = subArraySum(data, -1, sumIndex[k], sumIndex, series);
                        }
                        else {
                            index = subArraySum(data, -1, sumIndex[k], null, series);
                        }
                        data[j][series.yName] = index;
                    }
                }
            }
        }
        return data;
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.animate(series);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'WaterfallSeries';
        /**
         * return the module name
         */
    }
    /**
     * To destroy the waterfall series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the waterfall series.
         */
    }
}

/**
 * `HiloSeries` module is used to render the hilo series.
 */
class HiloSeries extends ColumnBase {
    /**
     * Render Hiloseries.
     * @return {void}
     * @private
     */
    render(series) {
        let region;
        let sideBySideInfo = this.getSideBySideInfo(series);
        let argsData;
        for (let point of series.points) {
            point.symbolLocations = [];
            point.regions = [];
            if (point.visible &&
                withInRange(series.points[point.index - 1], point, series.points[point.index + 1], series)) {
                region = this.getRectangle(point.xValue + sideBySideInfo.median, point.high, point.xValue + sideBySideInfo.median, point.low, series);
                argsData = this.triggerPointRenderEvent(series, point);
                if (!argsData.cancel) {
                    if (!series.chart.requireInvertedAxis) {
                        region.width = argsData.border.width;
                        region.x = region.x - (region.width / 2);
                    }
                    else {
                        region.height = argsData.border.width;
                        region.y = region.y - (region.height / 2);
                    }
                    argsData.border.width = 0;
                    this.updateSymbolLocation(point, region, series);
                    this.drawRectangle(series, point, region, argsData);
                }
            }
        }
    }
    /**
     * To trigger the point rendering event.
     * @return {void}
     * @private
     */
    triggerPointRenderEvent(series, point) {
        let border = { color: series.fill, width: Math.max(series.border.width, 2) };
        return super.triggerEvent(series, point, series.interior, border);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'HiloSeries';
        /**
         * return the module name
         */
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.animate(series);
    }
    /**
     * To destroy the Hilo series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the Hilo Series
         */
    }
}

/**
 * `HiloOpenCloseSeries` module is used to render the hiloOpenClose series.
 */
class HiloOpenCloseSeries extends ColumnBase {
    /**
     * Render HiloOpenCloseSeries series.
     * @return {void}
     * @private
     */
    render(series) {
        let highLowRect;
        let sideBySideInfo = this.getSideBySideInfo(series);
        let argsData;
        let borderWidth = Math.max(series.border.width, 2);
        for (let point of series.points) {
            point.symbolLocations = [];
            point.regions = [];
            if (point.visible &&
                withInRange(series.points[point.index - 1], point, series.points[point.index + 1], series)) {
                //highlow
                highLowRect = this.getRectangle(point.xValue + sideBySideInfo.start, Math.max(point.high, point.low), point.xValue + sideBySideInfo.end, Math.min(point.high, point.low), series);
                point.regions.push(this.getRectangle(point.xValue + sideBySideInfo.median, Math.max(point.high, point.low), point.xValue + sideBySideInfo.median, Math.min(point.high, point.low), series));
                this.updateTickRegion(!series.chart.requireInvertedAxis, point.regions[0], borderWidth);
                //open
                point.regions.push(this.getRectangle(point.xValue + sideBySideInfo.start, Math.max(point.open, point.close), point.xValue + sideBySideInfo.median, Math.max(point.open, point.close), series));
                //close
                point.regions.push(this.getRectangle(point.xValue + sideBySideInfo.median, Math.min(point.open, point.close), point.xValue + sideBySideInfo.end, Math.min(point.open, point.close), series));
                argsData = this.triggerPointRenderEvent(series, point);
                if (!argsData.cancel) {
                    this.updateSymbolLocation(point, point.regions[0], series);
                    let open = { x: point.regions[1].x, y: point.regions[1].y };
                    let close = { x: point.regions[2].x, y: point.regions[2].y };
                    this.drawHiloOpenClosePath(series, point, open, close, highLowRect, argsData);
                }
                this.updateTickRegion(series.chart.requireInvertedAxis, point.regions[1], borderWidth);
                this.updateTickRegion(series.chart.requireInvertedAxis, point.regions[2], borderWidth);
            }
        }
    }
    /**
     * Updates the tick region
     */
    updateTickRegion(horizontal, region, borderWidth) {
        if (horizontal) {
            region.x -= borderWidth / 2;
            region.width = borderWidth;
        }
        else {
            region.y -= borderWidth / 2;
            region.height = borderWidth;
        }
    }
    /**
     * Trigger point rendering event
     */
    triggerPointRenderEvent(series, point) {
        let fill = (point.open <= point.close) ? series.bearFillColor : series.bullFillColor;
        let border = { color: series.border.color, width: Math.max(series.border.width, 1) };
        return this.triggerEvent(series, point, fill, border);
    }
    /**
     * To draw the rectangle for points.
     * @return {void}
     * @private
     */
    drawHiloOpenClosePath(series, point, open, close, rect, argsData) {
        // region highlow
        let direction;
        let options;
        if (series.chart.requireInvertedAxis) {
            direction = ('M' + ' ' + (rect.x) + ' ' + (rect.y + rect.height / 2) + ' ' +
                'L' + ' ' + (rect.x + rect.width) + ' ' + (rect.y + rect.height / 2) + ' ');
            direction += ('M' + ' ' + (open.x) + ' ' + (rect.y + rect.height / 2) + ' ' +
                'L' + ' ' + (open.x) + ' ' + (rect.y + rect.height) + ' ');
            direction += ('M' + ' ' + (close.x) + ' ' + (rect.y + rect.height / 2) + ' ' +
                'L' + ' ' + (close.x) + ' ' + (rect.y) + ' ');
        }
        else {
            direction = ('M' + ' ' + (rect.x + rect.width / 2) + ' ' + (rect.y + rect.height) + ' ' +
                'L' + ' ' + (rect.x + rect.width / 2) + ' ' + (rect.y) + ' ');
            //region opentick
            direction += ('M' + ' ' + (rect.x) + ' ' + (open.y) + ' ' +
                'L' + ' ' + (rect.x + rect.width / 2) + ' ' + (open.y) + ' ');
            //region closetick
            direction += ('M' + ' ' + (rect.x + rect.width / 2) + ' ' + (close.y) + ' ' +
                'L' + ' ' + (rect.x + rect.width) + ' ' + (close.y) + ' ');
        }
        options = new PathOption(series.chart.element.id + '_Series_' + series.index + '_Point_' + point.index, argsData.fill, argsData.border.width, argsData.fill, series.opacity, series.dashArray, direction);
        let element = series.chart.renderer.drawPath(options);
        element.setAttribute('aria-label', point.x.toString() + ':' + point.high.toString()
            + ':' + point.low.toString() + ':' + point.close.toString() + ':' + point.open.toString());
        series.seriesElement.appendChild(element);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'HiloOpenCloseSeries';
        /**
         * return the module name
         */
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.animate(series);
    }
    /**
     * To destroy the column series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * `RangeAreaSeries` module is used to render the range area series.
 */
class RangeAreaSeries extends LineBase {
    /**
     * Render RangeArea Series.
     * @return {void}.
     * @private
     */
    render(series) {
        let point;
        let direction = '';
        let command = 'M';
        let closed = undefined;
        let visiblePoints = this.improveChartPerformance(series);
        for (let i = 0, length = visiblePoints.length; i < length; i++) {
            point = visiblePoints[i];
            point.symbolLocations = [];
            point.regions = [];
            let low = Math.min(point.low, point.high);
            let high = Math.max(point.low, point.high);
            if (series.yAxis.isInversed) {
                let temp = low;
                low = high;
                high = temp;
            }
            let lowPoint = getPoint(point.xValue, low, series.xAxis, series.yAxis, series.chart.requireInvertedAxis);
            let highPoint = getPoint(point.xValue, high, series.xAxis, series.yAxis, series.chart.requireInvertedAxis);
            point.symbolLocations.push(highPoint);
            point.symbolLocations.push(lowPoint);
            let rect = new Rect(Math.min(lowPoint.x, highPoint.x), Math.min(lowPoint.y, highPoint.y), Math.max(Math.abs(highPoint.x - lowPoint.x), series.marker.width), Math.max(Math.abs(highPoint.y - lowPoint.y), series.marker.width));
            if (!series.chart.requireInvertedAxis) {
                rect.x -= series.marker.width / 2;
            }
            else {
                rect.y -= series.marker.width / 2;
            }
            point.regions.push(rect);
            //Path to connect the high points
            if (point.visible && withInRange(visiblePoints[point.index - 1], point, visiblePoints[point.index + 1], series)) {
                direction = direction.concat(command + ' ' + (lowPoint.x) + ' ' + (lowPoint.y) + ' ');
                closed = false;
                if ((i + 1 < visiblePoints.length && !visiblePoints[i + 1].visible)
                    || i === visiblePoints.length - 1) {
                    // Path to connect the low points
                    direction = this.closeRangeAreaPath(visiblePoints, point, series, direction, i);
                    command = 'M';
                    direction = direction.concat(' ' + 'Z');
                    closed = true;
                }
                command = 'L';
            }
            else {
                if (closed === false && i !== 0) {
                    direction = this.closeRangeAreaPath(visiblePoints, point, series, direction, i);
                    closed = true;
                }
                command = 'M';
                point.symbolLocations = [];
            }
        }
        let name = series.category === 'Indicator' ? series.chart.element.id + '_Indicator_' + series.index + '_' + series.name :
            series.chart.element.id + '_Series_' + series.index;
        let options = new PathOption(name, series.interior, series.border.width, series.border.color, series.opacity, series.dashArray, direction);
        this.appendLinePath(options, series, '');
        this.renderMarker(series);
    }
    /**
     * path for rendering the low points
     * @return {void}.
     * @private
     */
    closeRangeAreaPath(visiblePoints, point, series, direction, i) {
        for (let j = i; j >= 0; j--) {
            if (visiblePoints[j].visible && visiblePoints[j].symbolLocations[0]) {
                point = visiblePoints[j];
                direction += 'L' + ' ' + (point.symbolLocations[0].x) + ' ' + ((point.symbolLocations[0].y)) + ' ';
            }
            else {
                break;
            }
        }
        return direction;
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        let option = series.animation;
        this.doLinearAnimation(series, option);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'RangeAreaSeries';
    }
    /**
     * To destroy the line series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys range area series
         */
    }
}

/**
 * `BubbleSeries` module is used to render the bubble series.
 */
class BubbleSeries {
    /**
     * Render the Bubble series.
     * @return {void}
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let marker = series.marker;
        let visiblePoints = series.points;
        let shapeOption;
        let argsData;
        //let bubbleMode: RadiusMode = bubbleOptions.radiusMode;
        let segmentRadius;
        let radius;
        let value = Math.max(series.chart.initialClipRect.height, series.chart.initialClipRect.width);
        let percentChange = value / 100;
        let maxRadius = series.maxRadius * percentChange;
        let minRadius = series.minRadius * percentChange;
        let maximumSize = null;
        let maxValue = null;
        if ((series.maxRadius === null || series.minRadius === null)) {
            for (let value of series.chart.visibleSeries) {
                if (value.type === 'Bubble' && value.visible === true && (value.maxRadius === null || value.minRadius === null)) {
                    maximumSize = value.sizeMax > maximumSize ? value.sizeMax : maximumSize;
                }
            }
            maxValue = (value / 5) / 2;
            minRadius = maxRadius = 1;
            radius = maxValue * maxRadius;
        }
        else {
            maximumSize = series.sizeMax;
            radius = maxRadius - minRadius;
        }
        for (let bubblePoint of visiblePoints) {
            bubblePoint.symbolLocations = [];
            bubblePoint.regions = [];
            if (bubblePoint.visible &&
                withInRange(visiblePoints[bubblePoint.index - 1], bubblePoint, visiblePoints[bubblePoint.index + 1], series)) {
                if ((series.maxRadius === null || series.minRadius === null)) {
                    segmentRadius = radius * Math.abs(+bubblePoint.size / maximumSize);
                }
                else {
                    segmentRadius = minRadius + radius * Math.abs(+bubblePoint.size / maximumSize);
                }
                segmentRadius = segmentRadius || minRadius;
                argsData = {
                    cancel: false, name: pointRender, series: series, point: bubblePoint,
                    fill: series.setPointColor(bubblePoint, series.interior),
                    border: series.setBorderColor(bubblePoint, { width: series.border.width, color: series.border.color }),
                    height: 2 * segmentRadius, width: 2 * segmentRadius
                };
                series.chart.trigger(pointRender, argsData);
                if (!argsData.cancel) {
                    bubblePoint.symbolLocations.push(getPoint(bubblePoint.xValue, bubblePoint.yValue, xAxis, yAxis, isInverted));
                    bubblePoint.color = argsData.fill;
                    shapeOption = new PathOption(series.chart.element.id + '_Series_' + series.index + '_Point_' + bubblePoint.index, argsData.fill, argsData.border.width, argsData.border.color, series.opacity, null);
                    series.seriesElement.appendChild(drawSymbol(bubblePoint.symbolLocations[0], 'Circle', new Size(argsData.width, argsData.height), marker.imageUrl, shapeOption, bubblePoint.x.toString() + ':' + bubblePoint.yValue.toString()));
                    bubblePoint.regions.push(new Rect(bubblePoint.symbolLocations[0].x - segmentRadius, bubblePoint.symbolLocations[0].y - segmentRadius, 2 * segmentRadius, 2 * segmentRadius));
                    bubblePoint.marker = {
                        border: argsData.border, fill: argsData.fill,
                        height: argsData.height, visible: true,
                        shape: 'Circle', width: argsData.width
                    };
                }
                else {
                    bubblePoint.marker = { visible: false };
                }
            }
        }
    }
    /**
     * To destroy the Bubble.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method calling here
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'BubbleSeries';
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        let duration = series.animation.duration;
        let delay = series.animation.delay;
        let rectElements = series.seriesElement.childNodes;
        let count = 1;
        for (let bubblePoint of series.points) {
            if (!bubblePoint.symbolLocations.length) {
                continue;
            }
            markerAnimate(rectElements[count], delay, duration, series, bubblePoint.index, bubblePoint.symbolLocations[0], false);
            count++;
        }
    }
}

/**
 * render Line series
 */
class SplineBase extends LineBase {
    /** @private */
    constructor(chartModule) {
        super(chartModule);
        this.splinePoints = [];
    }
    /**
     * To find the control points for spline.
     * @return {void}
     * @private
     */
    findSplinePoint(series) {
        let value;
        let points = this.filterEmptyPoints(series);
        this.splinePoints = this.findSplineCoefficients(points, series);
        if (points.length > 1) {
            series.drawPoints = [];
            for (let point of points) {
                if (point.index !== 0) {
                    let previous = this.getPreviousIndex(points, point.index - 1, series);
                    value = this.getControlPoints(points[previous], point, this.splinePoints[previous], this.splinePoints[point.index], series);
                    series.drawPoints.push(value);
                    if (point.yValue && value.controlPoint1.y && value.controlPoint2.y) {
                        series.yMin = Math.floor(Math.min(series.yMin, point.yValue, value.controlPoint1.y, value.controlPoint2.y));
                        series.yMax = Math.ceil(Math.max(series.yMax, point.yValue, value.controlPoint1.y, value.controlPoint2.y));
                    }
                }
            }
        }
    }
    getPreviousIndex(points, i, series) {
        if (series.emptyPointSettings.mode !== 'Drop') {
            return i;
        }
        while (isNullOrUndefined(points[i]) && i > -1) {
            i = i - 1;
        }
        return i;
    }
    getNextIndex(points, i, series) {
        if (series.emptyPointSettings.mode !== 'Drop') {
            return i;
        }
        while (isNullOrUndefined(points[i]) && i < points.length) {
            i = i + 1;
        }
        return i;
    }
    filterEmptyPoints(series) {
        if (series.emptyPointSettings.mode !== 'Drop') {
            return series.points;
        }
        let points = extend([], series.points, null, true);
        for (let i = 0; i < points.length; i++) {
            points[i].index = i;
            if (points[i].isEmpty) {
                points[i].symbolLocations = [];
                points[i].regions = [];
                points.splice(i, 1);
                i--;
            }
        }
        return points;
    }
    /**
     * To find the natural spline.
     * @return {void}
     * @private
     */
    findSplineCoefficients(points, series) {
        let count = points.length;
        let ySpline = [];
        let ySplineDuplicate = [];
        let coefficient1;
        let coefficient2;
        let coefficient3;
        let dy1;
        let dy2;
        let dx = [];
        let dy = [];
        let slope = [];
        let interPoint;
        let slopeLength;
        let cardinalSplineTension = series.cardinalSplineTension ? series.cardinalSplineTension : 0.5;
        cardinalSplineTension = cardinalSplineTension < 0 ? 0 : cardinalSplineTension > 1 ? 1 : cardinalSplineTension;
        switch (series.splineType) {
            case 'Monotonic':
                for (let i = 0; i < count - 1; i++) {
                    dx[i] = points[i + 1].xValue - points[i].xValue;
                    dy[i] = points[i + 1].yValue - points[i].yValue;
                    slope[i] = dy[i] / dx[i];
                }
                //interpolant points
                slopeLength = slope.length;
                // to find the first and last co-efficient value
                ySpline[0] = slope[0];
                ySpline[count - 1] = slope[slopeLength - 1];
                //to find the other co-efficient values
                for (let j = 0; j < dx.length; j++) {
                    if (slopeLength > j + 1) {
                        if (slope[j] * slope[j + 1] <= 0) {
                            ySpline[j + 1] = 0;
                        }
                        else {
                            interPoint = dx[j] + dx[j + 1];
                            ySpline[j + 1] = 3 * interPoint / ((interPoint + dx[j + 1]) / slope[j] + (interPoint + dx[j]) / slope[j + 1]);
                        }
                    }
                }
                break;
            case 'Cardinal':
                for (let i = 0; i < count; i++) {
                    if (i === 0) {
                        ySpline[i] = (count > 2) ? (cardinalSplineTension * (points[i + 2].xValue - points[i].xValue)) : 0;
                    }
                    else if (i === (count - 1)) {
                        ySpline[i] = (count > 2) ? (cardinalSplineTension * (points[count - 1].xValue - points[count - 3].xValue)) : 0;
                    }
                    else {
                        ySpline[i] = (cardinalSplineTension * (points[i + 1].xValue - points[i - 1].xValue));
                    }
                }
                break;
            default:
                if (series.splineType === 'Clamped') {
                    let firstIndex = (points[1].yValue - points[0].yValue) / (points[1].xValue - points[0].xValue);
                    let lastIndex = (points[count - 1].xValue - points[count - 2].xValue) /
                        (points[count - 1].yValue - points[count - 2].yValue);
                    ySpline[0] = (3 * (points[1].yValue - points[0].yValue)) / (points[1].xValue - points[0].xValue) - 3;
                    ySplineDuplicate[0] = 0.5;
                    ySpline[points.length - 1] = (3 * (points[points.length - 1].yValue - points[points.length - 2].yValue)) /
                        (points[points.length - 1].xValue - points[points.length - 2].xValue);
                    ySpline[0] = ySplineDuplicate[0] = Math.abs(ySpline[0]) === Infinity ? 0 : ySpline[0];
                    ySpline[points.length - 1] = ySplineDuplicate[points.length - 1] = Math.abs(ySpline[points.length - 1]) === Infinity ?
                        0 : ySpline[points.length - 1];
                }
                else {
                    // assigning the first and last value as zero
                    ySpline[0] = ySplineDuplicate[0] = 0;
                    ySpline[points.length - 1] = 0;
                }
                for (let i = 1; i < count - 1; i++) {
                    coefficient1 = points[i].xValue - points[i - 1].xValue;
                    coefficient2 = points[i + 1].xValue - points[i - 1].xValue;
                    coefficient3 = points[i + 1].xValue - points[i].xValue;
                    dy1 = points[i + 1].yValue - points[i].yValue || null;
                    dy2 = points[i].yValue - points[i - 1].yValue || null;
                    if (coefficient1 === 0 || coefficient2 === 0 || coefficient3 === 0) {
                        ySpline[i] = 0;
                        ySplineDuplicate[i] = 0;
                    }
                    else {
                        let p = 1 / (coefficient1 * ySpline[i - 1] + 2 * coefficient2);
                        ySpline[i] = -p * coefficient3;
                        ySplineDuplicate[i] = p * (6 * (dy1 / coefficient3 - dy2 / coefficient1) - coefficient1 * ySplineDuplicate[i - 1]);
                    }
                }
                for (let k = count - 2; k >= 0; k--) {
                    ySpline[k] = ySpline[k] * ySpline[k + 1] + ySplineDuplicate[k];
                }
                break;
        }
        return ySpline;
    }
    /**
     * To find the control points for spline.
     * @return {void}
     * @private
     */
    getControlPoints(point1, point2, ySpline1, ySpline2, series) {
        let controlPoint1;
        let controlPoint2;
        let point;
        let ySplineDuplicate1 = ySpline1;
        let ySplineDuplicate2 = ySpline2;
        switch (series.splineType) {
            case 'Cardinal':
                if (series.xAxis.valueType === 'DateTime') {
                    ySplineDuplicate1 = ySpline1 / this.dateTimeInterval(series);
                    ySplineDuplicate2 = ySpline2 / this.dateTimeInterval(series);
                }
                controlPoint1 = new ChartLocation(point1.xValue + ySpline1 / 3, point1.yValue + ySplineDuplicate1 / 3);
                controlPoint2 = new ChartLocation(point2.xValue - ySpline2 / 3, point2.yValue - ySplineDuplicate2 / 3);
                point = new ControlPoints(controlPoint1, controlPoint2);
                break;
            case 'Monotonic':
                let value = (point2.xValue - point1.xValue) / 3;
                controlPoint1 = new ChartLocation(point1.xValue + value, point1.yValue + ySpline1 * value);
                controlPoint2 = new ChartLocation(point2.xValue - value, point2.yValue - ySpline2 * value);
                point = new ControlPoints(controlPoint1, controlPoint2);
                break;
            default:
                let one3 = 1 / 3.0;
                let deltaX2 = (point2.xValue - point1.xValue);
                deltaX2 = deltaX2 * deltaX2;
                let y1 = one3 * (((2 * point1.yValue) + point2.yValue) - one3 * deltaX2 * (ySpline1 + 0.5 * ySpline2));
                let y2 = one3 * ((point1.yValue + (2 * point2.yValue)) - one3 * deltaX2 * (0.5 * ySpline1 + ySpline2));
                controlPoint1 = new ChartLocation((2 * (point1.xValue) + (point2.xValue)) * one3, y1);
                controlPoint2 = new ChartLocation(((point1.xValue) + 2 * (point2.xValue)) * one3, y2);
                point = new ControlPoints(controlPoint1, controlPoint2);
                break;
        }
        return point;
    }
    /**
     * calculate datetime interval in hours
     *
     */
    dateTimeInterval(series) {
        let interval = series.xAxis.actualIntervalType;
        let intervalInMilliseconds;
        if (interval === 'Years') {
            intervalInMilliseconds = 365 * 24 * 60 * 60 * 1000;
        }
        else if (interval === 'Months') {
            intervalInMilliseconds = 30 * 24 * 60 * 60 * 1000;
        }
        else if (interval === 'Days') {
            intervalInMilliseconds = 24 * 60 * 60 * 1000;
        }
        else if (interval === 'Hours') {
            intervalInMilliseconds = 60 * 60 * 1000;
        }
        else if (interval === 'Minutes') {
            intervalInMilliseconds = 60 * 1000;
        }
        else if (interval === 'Seconds') {
            intervalInMilliseconds = 1000;
        }
        else {
            intervalInMilliseconds = 30 * 24 * 60 * 60 * 1000;
        }
        return intervalInMilliseconds;
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        let option = series.animation;
        this.doLinearAnimation(series, option);
    }
}

/**
 * `SplineSeries` module is used to render the spline series.
 */
class SplineSeries extends SplineBase {
    /**
     * Render the spline series.
     * @return {void}
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let chart = series.chart;
        let marker = series.marker;
        let options;
        let firstPoint = null;
        let direction = '';
        let pt1;
        let pt2;
        let bpt1;
        let bpt2;
        let data;
        let controlPoint1;
        let controlPoint2;
        let startPoint = 'M';
        let points = this.filterEmptyPoints(series);
        let previous;
        let getCoordinate = series.chart.chartAreaType === 'PolarRadar' ? TransformToVisible : getPoint;
        for (let point of points) {
            previous = this.getPreviousIndex(points, point.index - 1, series);
            point.symbolLocations = [];
            point.regions = [];
            if (point.visible && withInRange(points[previous], point, points[this.getNextIndex(points, point.index - 1, series)], series)) {
                if (firstPoint !== null) {
                    data = series.drawPoints[previous];
                    controlPoint1 = data.controlPoint1;
                    controlPoint2 = data.controlPoint2;
                    pt1 = getCoordinate(firstPoint.xValue, firstPoint.yValue, xAxis, yAxis, isInverted, series);
                    pt2 = getCoordinate(point.xValue, point.yValue, xAxis, yAxis, isInverted, series);
                    bpt1 = getCoordinate(controlPoint1.x, controlPoint1.y, xAxis, yAxis, isInverted, series);
                    bpt2 = getCoordinate(controlPoint2.x, controlPoint2.y, xAxis, yAxis, isInverted, series);
                    direction = direction.concat((startPoint + ' ' + (pt1.x) + ' ' + (pt1.y) + ' ' + 'C' + ' ' + (bpt1.x) + ' '
                        + (bpt1.y) + ' ' + (bpt2.x) + ' ' + (bpt2.y) + ' ' + (pt2.x) + ' ' + (pt2.y) + ' '));
                    startPoint = 'L';
                }
                firstPoint = point;
                this.storePointLocation(point, series, isInverted, getCoordinate);
            }
            else {
                startPoint = 'M';
                firstPoint = null;
                point.symbolLocations = [];
            }
        }
        let name = series.category === 'TrendLine' ? series.chart.element.id + '_Series_' + series.sourceIndex + '_TrendLine_' + series.index :
            series.chart.element.id + '_Series_' + series.index;
        options = new PathOption(name, 'transparent', series.width, series.interior, series.opacity, series.dashArray, direction);
        this.appendLinePath(options, series, '');
        this.renderMarker(series);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'SplineSeries';
    }
    /**
     * To destroy the spline.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method calling here
         */
    }
}

/**
 * `SplineAreaSeries` module used to render the spline area series.
 */
class SplineAreaSeries extends SplineBase {
    /**
     * Render the splineArea series.
     * @return {void}
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let firstPoint = null;
        let direction = '';
        let startPoint = null;
        let startPoint1 = null;
        let pt1;
        let pt2;
        let bpt1;
        let bpt2;
        let controlPt1;
        let controlPt2;
        let points = this.filterEmptyPoints(series);
        let pointsLength = series.points.length;
        let point;
        let previous;
        let getCoordinate = series.chart.chartAreaType === 'PolarRadar' ? TransformToVisible : getPoint;
        let origin = series.chart.chartAreaType === 'PolarRadar' ? series.points[0].yValue :
            Math.max(series.yAxis.visibleRange.min, 0);
        for (let i = 0; i < pointsLength; i++) {
            point = series.points[i];
            point.symbolLocations = [];
            point.regions = [];
            previous = this.getPreviousIndex(points, point.index - 1, series);
            if (point.visible &&
                withInRange(points[previous], point, points[this.getNextIndex(points, point.index - 1, series)], series)) {
                if (firstPoint) {
                    controlPt1 = series.drawPoints[previous].controlPoint1;
                    controlPt2 = series.drawPoints[previous].controlPoint2;
                    pt1 = getCoordinate(firstPoint.xValue, firstPoint.yValue, xAxis, yAxis, isInverted, series);
                    pt2 = getCoordinate(point.xValue, point.yValue, xAxis, yAxis, isInverted, series);
                    bpt1 = getCoordinate(controlPt1.x, controlPt1.y, xAxis, yAxis, isInverted, series);
                    bpt2 = getCoordinate(controlPt2.x, controlPt2.y, xAxis, yAxis, isInverted, series);
                    direction = direction.concat(' C' + bpt1.x + ' '
                        + bpt1.y + ' ' + bpt2.x + ' ' + bpt2.y + ' ' + pt2.x + ' ' + pt2.y + ' ');
                }
                else {
                    // Start point for the current path
                    startPoint = getCoordinate(point.xValue, origin, xAxis, yAxis, isInverted, series);
                    direction += ('M ' + startPoint.x + ' ' + startPoint.y + ' ');
                    // First Point to draw the area path
                    startPoint1 = getCoordinate(point.xValue, point.yValue, xAxis, yAxis, isInverted, series);
                    direction += ('L ' + startPoint1.x + ' ' + startPoint1.y + ' ');
                }
                this.storePointLocation(point, series, isInverted, getCoordinate);
                firstPoint = point;
            }
            else {
                firstPoint = null;
                point.symbolLocations = [];
            }
            if (((i + 1 < pointsLength && !series.points[i + 1].visible) || i === pointsLength - 1)
                && pt2 && startPoint) {
                startPoint = getCoordinate(point.xValue, origin, xAxis, yAxis, isInverted, series);
                direction = direction.concat('L ' + (startPoint.x) + ' ' + (startPoint.y));
            }
        }
        this.appendLinePath(new PathOption(series.chart.element.id + '_Series_' + series.index, series.interior, series.border.width, series.border.color, series.opacity, series.dashArray, direction), series, '');
        this.renderMarker(series);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'SplineAreaSeries';
    }
    /**
     * To destroy the spline.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method calling here
         */
    }
}

/**
 * Technical Analysis module helps to predict the market trend
 */
class TechnicalAnalysis extends LineBase {
    /**
     * Defines the collection of series, that are used to represent the given technical indicator
     * @private
     */
    initSeriesCollection(indicator, chart) {
        indicator.targetSeries = [];
        let signalLine = new Series(indicator, 'targetSeries', {}, true);
        this.setSeriesProperties(signalLine, indicator, 'SignalLine', indicator.fill, indicator.width, chart);
    }
    /**
     * Initializes the properties of the given series
     * @private
     */
    setSeriesProperties(series, indicator, name, fill, width, chart) {
        series.name = name;
        series.xName = 'x';
        series.yName = 'y';
        series.fill = fill || '#606eff';
        series.dashArray = indicator.dashArray;
        series.width = width;
        series.xAxisName = indicator.xAxisName;
        series.animation = indicator.animation;
        series.yAxisName = indicator.yAxisName;
        series.clipRectElement = indicator.clipRectElement;
        series.points = [];
        series.enableTooltip = true;
        series.interior = series.fill;
        series.category = 'Indicator';
        series.index = indicator.index;
        series.chart = chart;
        series.xMin = Infinity;
        series.xMax = -Infinity;
        series.yMin = Infinity;
        series.yMax = -Infinity;
        series.xData = [];
        series.yData = [];
        series.marker.visible = false;
        indicator.targetSeries.push(series);
    }
    /**
     * Creates the elements of a technical indicator
     * @private
     */
    createIndicatorElements(chart, indicator, index) {
        if (indicator.seriesName || indicator.dataSource) {
            findClipRect(indicator.targetSeries[0]);
        }
        let clipRect = new Rect(0, 0, 0, 0);
        if (indicator.seriesName || indicator.dataSource) {
            clipRect = indicator.targetSeries[0].clipRect;
        }
        //defines the clip rect element
        let clipRectElement = chart.renderer.drawClipPath(new RectOption(chart.element.id + '_ChartIndicatorClipRect_' + index, 'transparent', { width: 1, color: 'Gray' }, 1, {
            x: 0, y: 0, width: clipRect.width,
            height: clipRect.height,
        }));
        //creates the group for an indicator
        indicator.indicatorElement = chart.renderer.createGroup({
            'id': chart.element.id + 'IndicatorGroup' + index,
            'transform': 'translate(' + clipRect.x + ',' + clipRect.y + ')',
            'clip-path': 'url(#' + chart.element.id + '_ChartIndicatorClipRect_' + index + ')'
        });
        indicator.indicatorElement.appendChild(clipRectElement);
        //Defines a group for each series in a technical indicator
        for (let series of indicator.targetSeries) {
            series.clipRectElement = clipRectElement;
            let element = series.chart.renderer.createGroup({
                'id': series.chart.element.id + '_Indicator_' +
                    indicator.index + '_' + series.name + '_Group'
            });
            indicator.indicatorElement.appendChild(element);
            series.seriesElement = element;
        }
        chart.indicatorElements.appendChild(indicator.indicatorElement);
    }
    getDataPoint(x, y, sourcePoint, series, index, indicator = null) {
        let point = new Points();
        point.x = x;
        point.y = y;
        point.xValue = sourcePoint.xValue;
        point.color = series.fill;
        point.index = index;
        point.yValue = y;
        point.visible = true;
        series.xMin = Math.min(series.xMin, point.xValue);
        series.yMin = Math.min(series.yMin, point.yValue);
        series.xMax = Math.max(series.xMax, point.xValue);
        series.yMax = Math.max(series.yMax, point.yValue);
        series.xData.push(point.xValue);
        if (indicator && indicator.type === 'Macd' && series.type === 'Column') {
            if (point.y >= 0) {
                point.color = indicator.macdPositiveColor;
            }
            else {
                point.color = indicator.macdNegativeColor;
            }
        }
        return point;
    }
    getRangePoint(x, high, low, sourcePoint, series, index, indicator = null) {
        let point = new Points();
        point.x = x;
        point.high = high;
        point.low = low;
        point.xValue = sourcePoint.xValue;
        point.color = series.fill;
        point.index = index;
        point.visible = true;
        series.xData.push(point.xValue);
        return point;
    }
    setSeriesRange(points, indicator, series = null) {
        if (!series) {
            indicator.targetSeries[0].points = points;
        }
        else {
            series.points = points;
        }
    }
}

/**
 * `SmaIndicator` module is used to render SMA indicator.
 */
class SmaIndicator extends TechnicalAnalysis {
    /**
     * Defines the predictions based on SMA approach
     * @private
     */
    initDataSource(indicator, chart) {
        let smaPoints = [];
        let points = indicator.points;
        if (points && points.length) {
            //prepare data
            let validData = points;
            let field = firstToLowerCase(indicator.field);
            let xField = 'x';
            let signalSeries = indicator.targetSeries[0];
            if (validData && validData.length && validData.length >= indicator.period) {
                //find initial average
                let average = 0;
                let sum$$1 = 0;
                for (let i = 0; i < indicator.period; i++) {
                    sum$$1 += validData[i][field];
                }
                average = sum$$1 / indicator.period;
                smaPoints.push(this.getDataPoint(validData[indicator.period - 1][xField], average, validData[indicator.period - 1], signalSeries, smaPoints.length));
                let index = indicator.period;
                while (index < validData.length) {
                    sum$$1 -= validData[index - indicator.period][field];
                    sum$$1 += validData[index][field];
                    average = sum$$1 / indicator.period;
                    smaPoints.push(this.getDataPoint(validData[index][xField], average, validData[index], signalSeries, smaPoints.length));
                    index++;
                }
            }
            this.setSeriesRange(smaPoints, indicator);
        }
    }
    /**
     * To destroy the SMA indicator
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the SMA indicator
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'SmaIndicator';
    }
}

/**
 * `EmaIndicator` module is used to render EMA indicator.
 */
class EmaIndicator extends TechnicalAnalysis {
    /**
     * Defines the predictions based on EMA approach
     * @private
     */
    initDataSource(indicator, chart) {
        let field = firstToLowerCase(indicator.field);
        let xField = 'x';
        let emaPoints = [];
        let signalSeries = indicator.targetSeries[0];
        //prepare data
        let validData = indicator.points;
        if (validData && validData.length && validData.length >= indicator.period) {
            //find initial average
            let sum$$1 = 0;
            let average = 0;
            //smoothing factor
            let k = (2 / (indicator.period + 1));
            for (let i = 0; i < indicator.period; i++) {
                sum$$1 += validData[i][field];
            }
            average = sum$$1 / indicator.period;
            emaPoints.push(this.getDataPoint(validData[indicator.period - 1][xField], average, validData[indicator.period - 1], signalSeries, emaPoints.length));
            let index = indicator.period;
            while (index < validData.length) {
                //previous average
                let prevAverage = emaPoints[index - indicator.period][signalSeries.yName];
                let yValue = (validData[index][field] - prevAverage) * k + prevAverage;
                emaPoints.push(this.getDataPoint(validData[index][xField], yValue, validData[index], signalSeries, emaPoints.length));
                index++;
            }
        }
        this.setSeriesRange(emaPoints, indicator);
    }
    /**
     * To destroy the EMA Indicator
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the EMA Indicator
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'EmaIndicator';
    }
}

/**
 * `TmaIndicator` module is used to render TMA indicator.
 */
class TmaIndicator extends TechnicalAnalysis {
    /**
     * Defines the predictions based on TMA approach
     * @private
     */
    initDataSource(indicator, chart) {
        let tmaPoints = [];
        let field = firstToLowerCase(indicator.field);
        let xField = 'x';
        let signalSeries = indicator.targetSeries[0];
        //prepare data
        let validData = indicator.points;
        if (validData && validData.length && validData.length >= indicator.period) {
            let signalSeries = indicator.targetSeries[0];
            //prepare data
            let validData = indicator.points;
            if (validData.length && validData.length >= indicator.period) {
                //smoothing factor
                let k = (2 / (indicator.period + 1));
                //find initial average
                let sum$$1 = 0;
                let smaValues = [];
                //sma values
                let index = 0;
                let length = validData.length;
                let period = indicator.period;
                while (length >= period) {
                    sum$$1 = 0;
                    index = validData.length - length;
                    for (let j = index; j < index + period; j++) {
                        sum$$1 = sum$$1 + validData[j][field];
                    }
                    sum$$1 = sum$$1 / period;
                    smaValues.push(sum$$1);
                    length--;
                }
                //initial values
                for (let k = 0; k < period - 1; k++) {
                    sum$$1 = 0;
                    for (let j = 0; j < k + 1; j++) {
                        sum$$1 = sum$$1 + validData[j][field];
                    }
                    sum$$1 = sum$$1 / (k + 1);
                    smaValues.splice(k, 0, sum$$1);
                }
                index = indicator.period;
                while (index <= smaValues.length) {
                    sum$$1 = 0;
                    for (let j = index - indicator.period; j < index; j++) {
                        sum$$1 = sum$$1 + smaValues[j];
                    }
                    sum$$1 = sum$$1 / indicator.period;
                    tmaPoints.push(this.getDataPoint(validData[index - 1][xField], sum$$1, validData[index - 1], signalSeries, tmaPoints.length));
                    index++;
                }
            }
        }
        this.setSeriesRange(tmaPoints, indicator);
    }
    /**
     * To destroy the TMA indicator.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the TMA Indicator
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'TmaIndicator';
    }
}

/**
 * `AccumulationDistributionIndicator` module is used to render accumulation distribution indicator.
 */
class AccumulationDistributionIndicator extends TechnicalAnalysis {
    /**
     * Defines the predictions using accumulation distribution approach
     * @private
     */
    initDataSource(indicator, chart) {
        let sourceSeries = indicator.sourceSeries;
        let adPoints = [];
        let validData = indicator.points;
        if (validData.length > 0 && validData.length > indicator.period) {
            adPoints = this.calculateADPoints(indicator, validData);
        }
        this.setSeriesRange(adPoints, indicator);
    }
    /**
     *  Calculates the Accumulation Distribution values
     * @private
     */
    calculateADPoints(indicator, validData) {
        let temp = [];
        let sum = 0;
        let i = 0;
        let value = 0;
        let high = 0;
        let low = 0;
        let close = 0;
        let signalSeries = indicator.targetSeries[0];
        for (i = 0; i < validData.length; i++) {
            high = Number(validData[i].high);
            low = Number(validData[i].low);
            close = Number(validData[i].close);
            /**
             * Money Flow Multiplier = [(Close -  Low) - (High - Close)] /(High - Low)
             * Money Flow Volume = Money Flow Multiplier x Volume for the Period
             * ADL = Previous ADL + Current Period's Money Flow Volume
             */
            value = ((close - low) - (high - close)) / (high - low);
            /**
             * Sum is to calculate the Y values of the Accumulation distribution indicator
             */
            sum = sum + value * Number(validData[i].volume);
            /**
             * To calculate the x and y values for the Accumulation distribution indicator
             */
            temp[i] = this.getDataPoint(validData[i].x, sum, validData[i], signalSeries, temp.length);
        }
        return temp;
    }
    /**
     * To destroy the Accumulation Distribution Technical Indicator.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the Accumulation Distribution Technical indicator
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the Indicator
         */
        return 'AccumulationDistributionIndicator';
    }
}

/**
 * `AtrIndicator` module is used to render ATR indicator.
 */
class AtrIndicator extends TechnicalAnalysis {
    /**
     * Defines the predictions using Average True Range approach
     * @private
     */
    initDataSource(indicator, chart) {
        let sourceSeries = indicator.sourceSeries;
        let validData = indicator.points;
        if (validData.length > 0 && validData.length > indicator.period) {
            this.calculateATRPoints(indicator, validData);
        }
    }
    /**
     *  To calculate Average True Range indicator points
     * @private
     */
    calculateATRPoints(indicator, validData) {
        let average = 0;
        let highLow = 0;
        let highClose = 0;
        let lowClose = 0;
        let trueRange = 0;
        let points = [];
        let temp = [];
        let period = indicator.period;
        let sum = 0;
        let y = 'y';
        let signalSeries = indicator.targetSeries[0];
        for (let i = 0; i < validData.length; i++) {
            /**
             * Current High less the current Low
             * Current High less the previous Close (absolute value)
             * Current Low less the previous Close (absolute value)
             */
            highLow = Number(validData[i].high) - Number(validData[i].low);
            if (i > 0) {
                //
                highClose = Math.abs(Number(validData[i].high) - Number(validData[i - 1].close));
                lowClose = Math.abs(Number(validData[i].low) - Number(validData[i - 1].close));
            }
            /**
             * To find the maximum of highLow, highClose, lowClose
             */
            trueRange = Math.max(highLow, highClose, lowClose);
            sum = sum + trueRange;
            /**
             * Push the x and y values for the Average true range indicator
             */
            if (i >= period) {
                average = (Number(temp[i - 1][y]) * (period - 1) + trueRange) / period;
                points.push(this.getDataPoint(validData[i].x, average, validData[i], signalSeries, points.length));
            }
            else {
                average = sum / period;
                if (i === period - 1) {
                    points.push(this.getDataPoint(validData[i].x, average, validData[i], signalSeries, points.length));
                }
            }
            temp[i] = { x: validData[i].x, y: average };
        }
        this.setSeriesRange(points, indicator);
    }
    /**
     * To destroy the Average true range indicator.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy the Average true range indicator
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the Indicator
         */
        return 'AtrIndicator';
    }
}

/**
 * `MomentumIndicator` module is used to render Momentum indicator.
 */
class MomentumIndicator extends TechnicalAnalysis {
    /**
     * Defines the collection of series to represent a momentum indicator
     * @private
     */
    initSeriesCollection(indicator, chart) {
        super.initSeriesCollection(indicator, chart);
        let upperLine = new Series(indicator, 'targetSeries', {}, true);
        super.setSeriesProperties(upperLine, indicator, 'UpperLine', indicator.upperLine.color, indicator.upperLine.width, chart);
    }
    /**
     * Defines the predictions using momentum approach
     * @private
     */
    initDataSource(indicator, chart) {
        let upperCollection = [];
        let signalCollection = [];
        let validData = indicator.points;
        if (validData && validData.length) {
            let upperSeries = indicator.targetSeries[1];
            let signalSeries = indicator.targetSeries[0];
            let length = indicator.period;
            if (validData.length >= indicator.period) {
                for (let i = 0; i < validData.length; i++) {
                    upperCollection.push(this.getDataPoint(validData[i].x, 100, validData[i], upperSeries, upperCollection.length));
                    if (!(i < length)) {
                        signalCollection.push(this.getDataPoint(validData[i].x, (Number(validData[i].close) / Number(validData[i - length].close) * 100), validData[i], signalSeries, signalCollection.length));
                    }
                }
            }
            this.setSeriesRange(signalCollection, indicator, indicator.targetSeries[0]);
            this.setSeriesRange(upperCollection, indicator, indicator.targetSeries[1]);
        }
    }
    /**
     * To destroy the momentum indicator
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the momentum indicator
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'MomentumIndicator';
    }
}

/**
 * `RsiIndicator` module is used to render RSI indicator.
 */
class RsiIndicator extends TechnicalAnalysis {
    /**
     * Initializes the series collection to represent the RSI Indicator
     * @private
     */
    initSeriesCollection(indicator, chart) {
        super.initSeriesCollection(indicator, chart);
        if (indicator.showZones) {
            let lowerLine = new Series(indicator, 'targetSeries', {}, true);
            super.setSeriesProperties(lowerLine, indicator, 'LowerLine', indicator.lowerLine.color, indicator.lowerLine.width, chart);
            let upperLine = new Series(indicator, 'targetSeries', {}, true);
            super.setSeriesProperties(upperLine, indicator, 'UpperLine', indicator.upperLine.color, indicator.upperLine.width, chart);
        }
    }
    /**
     * Defines the predictions using RSI approach
     * @private
     */
    initDataSource(indicator, chart) {
        let signalCollection = [];
        let lowerCollection = [];
        let upperCollection = [];
        let signalSeries = indicator.targetSeries[0];
        //prepare data
        let validData = indicator.points;
        if (validData.length && validData.length >= indicator.period) {
            //Find upper band and lower band values
            if (indicator.showZones) {
                for (let i = 0; i < validData.length; i++) {
                    upperCollection.push(this.getDataPoint(validData[i].x, indicator.overBought, validData[i], indicator.targetSeries[1], upperCollection.length));
                    lowerCollection.push(this.getDataPoint(validData[i].x, indicator.overSold, validData[i], indicator.targetSeries[2], lowerCollection.length));
                }
            }
            //Find signal line value
            let prevClose = Number(validData[0].close);
            let gain = 0;
            let loss = 0;
            for (let i = 1; i <= indicator.period; i++) {
                let close = Number(validData[i].close);
                if (close > prevClose) {
                    gain += close - prevClose;
                }
                else {
                    loss += prevClose - close;
                }
                prevClose = close;
            }
            gain = gain / indicator.period;
            loss = loss / indicator.period;
            signalCollection.push(this.getDataPoint(validData[indicator.period].x, 100 - (100 / (1 + gain / loss)), validData[indicator.period], signalSeries, signalCollection.length));
            for (let j = indicator.period + 1; j < validData.length; j++) {
                let close = Number(validData[j].close);
                if (close > prevClose) {
                    gain = (gain * (indicator.period - 1) + (close - prevClose)) / indicator.period;
                    loss = (loss * (indicator.period - 1)) / indicator.period;
                }
                else if (close < prevClose) {
                    loss = (loss * (indicator.period - 1) + (prevClose - close)) / indicator.period;
                    gain = (gain * (indicator.period - 1)) / indicator.period;
                }
                prevClose = close;
                signalCollection.push(this.getDataPoint(validData[j].x, 100 - (100 / (1 + gain / loss)), validData[j], signalSeries, signalCollection.length));
            }
        }
        this.setSeriesRange(signalCollection, indicator, indicator.targetSeries[0]);
        if (indicator.showZones) {
            this.setSeriesRange(upperCollection, indicator, indicator.targetSeries[1]);
            this.setSeriesRange(lowerCollection, indicator, indicator.targetSeries[2]);
        }
    }
    /**
     * To destroy the RSI Indicator.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the RSI Indicator
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the indicator.
         */
        return 'RsiIndicator';
    }
}

/**
 * `StochasticIndicator` module is used to render stochastic indicator.
 */
class StochasticIndicator extends TechnicalAnalysis {
    /**
     * Defines the collection of series that represents the stochastic indicator
     * @private
     */
    initSeriesCollection(indicator, chart) {
        super.initSeriesCollection(indicator, chart);
        let periodLine = new Series(indicator, 'targetSeries', {}, true);
        this.setSeriesProperties(periodLine, indicator, 'PeriodLine', indicator.periodLine.color, indicator.periodLine.width, chart);
        if (indicator.showZones) {
            let upperSeries = new Series(indicator, 'targetSeries', {}, true);
            this.setSeriesProperties(upperSeries, indicator, 'UpperLine', indicator.upperLine.color, indicator.upperLine.width, chart);
            let lowerSeries = new Series(indicator, 'targetSeries', {}, true);
            this.setSeriesProperties(lowerSeries, indicator, 'LowerLine', indicator.lowerLine.color, indicator.lowerLine.width, chart);
        }
    }
    /**
     * Defines the predictions based on stochastic approach
     * @private
     */
    initDataSource(indicator, chart) {
        let signalCollection = [];
        let upperCollection = [];
        let lowerCollection = [];
        let periodCollection = [];
        let source = [];
        let sourceSeries = indicator.sourceSeries;
        let validData = indicator.points;
        if (validData.length && validData.length >= indicator.period) {
            if (indicator.showZones) {
                for (let i = 0; i < validData.length; i++) {
                    upperCollection.push(this.getDataPoint(validData[i].x, indicator.overBought, validData[i], indicator.targetSeries[2], upperCollection.length));
                    lowerCollection.push(this.getDataPoint(validData[i].x, indicator.overSold, validData[i], indicator.targetSeries[3], lowerCollection.length));
                }
            }
            source = this.calculatePeriod(indicator.period, indicator.kPeriod, validData, indicator.targetSeries[1]);
            periodCollection = this.smaCalculation(indicator.period, indicator.kPeriod, source, indicator.targetSeries[1]);
            signalCollection = this.smaCalculation(indicator.period + indicator.kPeriod - 1, indicator.dPeriod, source, indicator.targetSeries[0]);
        }
        this.setSeriesRange(signalCollection, indicator, indicator.targetSeries[0]);
        this.setSeriesRange(periodCollection, indicator, indicator.targetSeries[1]);
        if (indicator.showZones) {
            this.setSeriesRange(upperCollection, indicator, indicator.targetSeries[2]);
            this.setSeriesRange(lowerCollection, indicator, indicator.targetSeries[3]);
        }
    }
    /**
     * Calculates the SMA Values
     * @private
     */
    smaCalculation(period, kPeriod, data, sourceSeries) {
        let pointCollection = [];
        if (data.length >= period + kPeriod) {
            let count = period + (kPeriod - 1);
            let temp = [];
            let values = [];
            for (let i = 0; i < data.length; i++) {
                let value = Number(data[i].y);
                temp.push(value);
            }
            let length = temp.length;
            while (length >= count) {
                let sum = 0;
                for (let i = period - 1; i < (period + kPeriod - 1); i++) {
                    sum = sum + temp[i];
                }
                sum = sum / kPeriod;
                values.push(sum.toFixed(2));
                temp.splice(0, 1);
                length = temp.length;
            }
            let len = count - 1;
            for (let i = 0; i < data.length; i++) {
                if (!(i < len)) {
                    pointCollection.push(this.getDataPoint(data[i].x, Number(values[i - len]), data[i], sourceSeries, pointCollection.length));
                    data[i].y = Number((values[i - len]));
                }
            }
        }
        return pointCollection;
    }
    /**
     * Calculates the period line values.
     * @private
     */
    calculatePeriod(period, kPeriod, data, series) {
        let lowValues = [];
        let highValues = [];
        let closeValues = [];
        let modifiedSource = [];
        for (let j = 0; j < data.length; j++) {
            lowValues[j] = data[j].low;
            highValues[j] = data[j].high;
            closeValues[j] = data[j].close;
        }
        if (data.length > period) {
            let mins = [];
            let maxs = [];
            for (let i = 0; i < period - 1; ++i) {
                maxs.push(0);
                mins.push(0);
                modifiedSource.push(this.getDataPoint(data[i].x, data[i].close, data[i], series, modifiedSource.length));
            }
            for (let i = period - 1; i < data.length; ++i) {
                let min = Number.MAX_VALUE;
                let max = Number.MIN_VALUE;
                for (let j = 0; j < period; ++j) {
                    min = Math.min(min, lowValues[i - j]);
                    max = Math.max(max, highValues[i - j]);
                }
                maxs.push(max);
                mins.push(min);
            }
            for (let i = period - 1; i < data.length; ++i) {
                let top = 0;
                let bottom = 0;
                top += closeValues[i] - mins[i];
                bottom += maxs[i] - mins[i];
                modifiedSource.push(this.getDataPoint(data[i].x, (top / bottom) * 100, data[i], series, modifiedSource.length));
            }
        }
        return modifiedSource;
    }
    /**
     * To destroy the Stocastic Indicator.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the stochastic indicator
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the indicator.
         */
        return 'StochasticIndicator';
    }
}

/**
 * `BollingerBands` module is used to render bollinger band indicator.
 */
class BollingerBands extends TechnicalAnalysis {
    /**
     * Initializes the series collection to represent bollinger band
     */
    initSeriesCollection(indicator, chart) {
        indicator.targetSeries = [];
        let rangeArea = new Series(indicator, 'targetSeries', {}, true);
        rangeArea.type = 'RangeArea';
        if (indicator.bandColor !== 'transparent' && indicator.bandColor !== 'none') {
            this.setSeriesProperties(rangeArea, indicator, 'BollingerBand', indicator.bandColor, 0, chart);
        }
        let signalLine = new Series(indicator, 'targetSeries', {}, true);
        this.setSeriesProperties(signalLine, indicator, 'SignalLine', indicator.fill, indicator.width, chart);
        let upperLine = new Series(indicator, 'targetSeries', {}, true);
        this.setSeriesProperties(upperLine, indicator, 'UpperLine', indicator.upperLine.color, indicator.upperLine.width, chart);
        let lowerLine = new Series(indicator, 'targetSeries', {}, true);
        this.setSeriesProperties(lowerLine, indicator, 'LowerLine', indicator.lowerLine.color, indicator.lowerLine.width, chart);
    }
    /**
     * Defines the predictions using Bollinger Band Approach
     * @private
     */
    initDataSource(indicator, chart) {
        let enableBand = indicator.bandColor !== 'transparent' && indicator.bandColor !== 'none';
        let start = enableBand ? 1 : 0;
        let signalCollection = [];
        let upperCollection = [];
        let lowerCollection = [];
        let bandCollection = [];
        let upperSeries = indicator.targetSeries[start + 1];
        let lowerSeries = indicator.targetSeries[start + 2];
        let signalSeries = indicator.targetSeries[start];
        let rangeAreaSeries = enableBand ? indicator.targetSeries[0] : null;
        //prepare data
        let validData = indicator.points;
        if (validData.length && validData.length >= indicator.period) {
            let sum = 0;
            let deviationSum = 0;
            let multiplier = indicator.standardDeviation;
            let limit = validData.length;
            let length = Math.round(indicator.period);
            let smaPoints = [];
            let deviations = [];
            let bollingerPoints = [];
            for (let i = 0; i < length; i++) {
                sum += Number(validData[i].close);
            }
            let sma = sum / indicator.period;
            for (let i = 0; i < limit; i++) {
                let y = Number(validData[i].close);
                if (i >= length - 1 && i < limit) {
                    if (i - indicator.period >= 0) {
                        let diff = y - Number(validData[i - length].close);
                        sum = sum + diff;
                        sma = sum / (indicator.period);
                        smaPoints[i] = sma;
                        deviations[i] = Math.pow(y - sma, 2);
                        deviationSum += deviations[i] - deviations[i - length];
                    }
                    else {
                        smaPoints[i] = sma;
                        deviations[i] = Math.pow(y - sma, 2);
                        deviationSum += deviations[i];
                    }
                    let range = Math.sqrt(deviationSum / (indicator.period));
                    let lowerBand = smaPoints[i] - (multiplier * range);
                    let upperBand = smaPoints[i] + (multiplier * range);
                    if (i + 1 === length) {
                        for (let j = 0; j < length - 1; j++) {
                            bollingerPoints[j] = {
                                'X': validData[j].x, 'mb': smaPoints[i],
                                'lb': lowerBand, 'ub': upperBand, visible: true
                            };
                        }
                    }
                    bollingerPoints[i] = {
                        'X': validData[i].x, 'mb': smaPoints[i],
                        'lb': lowerBand, 'ub': upperBand, visible: true
                    };
                }
                else {
                    if (i < indicator.period - 1) {
                        smaPoints[i] = sma;
                        deviations[i] = Math.pow(y - sma, 2);
                        deviationSum += deviations[i];
                    }
                }
            }
            let i = -1;
            let j = -1;
            for (let k = 0; k < limit; k++) {
                if (k >= (length - 1)) {
                    let ub = 'ub';
                    let lb = 'lb';
                    let mb = 'mb';
                    upperCollection.push(this.getDataPoint(validData[k].x, bollingerPoints[k][ub], validData[k], upperSeries, upperCollection.length));
                    lowerCollection.push(this.getDataPoint(validData[k].x, bollingerPoints[k][lb], validData[k], lowerSeries, lowerCollection.length));
                    signalCollection.push(this.getDataPoint(validData[k].x, bollingerPoints[k][mb], validData[k], signalSeries, signalCollection.length));
                    if (enableBand) {
                        bandCollection.push(this.getRangePoint(validData[k].x, upperCollection[++i].y, lowerCollection[++j].y, validData[k], rangeAreaSeries, bandCollection.length));
                    }
                }
            }
        }
        if (enableBand) {
            this.setSeriesRange(bandCollection, indicator, indicator.targetSeries[0]);
        }
        this.setSeriesRange(signalCollection, indicator, indicator.targetSeries[start]);
        this.setSeriesRange(upperCollection, indicator, indicator.targetSeries[start + 1]);
        this.setSeriesRange(lowerCollection, indicator, indicator.targetSeries[start + 2]);
    }
    /**
     * To destroy the Bollinger Band.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the bollinger band
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'BollingerBandsIndicator';
    }
}

/**
 * `MacdIndicator` module is used to render MACD indicator.
 */
class MacdIndicator extends TechnicalAnalysis {
    /**
     * Defines the collection of series to represent the MACD indicator
     * @private
     */
    initSeriesCollection(indicator, chart) {
        super.initSeriesCollection(indicator, chart);
        if (indicator.macdType === 'Line' || indicator.macdType === 'Both') {
            let macdSeries = new Series(indicator, 'targetSeries', {}, true);
            this.setSeriesProperties(macdSeries, indicator, 'MacdLine', indicator.macdLine.color, indicator.macdLine.width, chart);
        }
        if (indicator.macdType === 'Histogram' || indicator.macdType === 'Both') {
            let histogramSeries = new Series(indicator, 'targetSeries', {}, true);
            histogramSeries.type = 'Column';
            this.setSeriesProperties(histogramSeries, indicator, 'Histogram', indicator.macdPositiveColor, indicator.width, chart);
        }
    }
    /**
     * Defines the predictions using MACD approach
     * @private
     */
    initDataSource(indicator, chart) {
        let signalCollection = [];
        let fastPeriod = indicator.fastPeriod;
        let slowPeriod = indicator.slowPeriod;
        let trigger = indicator.period;
        let length = fastPeriod + trigger;
        let macdCollection = [];
        let histogramCollection = [];
        let validData = indicator.points;
        let signalSeries = indicator.targetSeries[0];
        let histogramSeries;
        let macdLineSeries;
        if (indicator.macdType === 'Histogram') {
            histogramSeries = indicator.targetSeries[1];
        }
        else {
            macdLineSeries = indicator.targetSeries[1];
            if (indicator.macdType === 'Both') {
                histogramSeries = indicator.targetSeries[2];
            }
        }
        if (validData && length < validData.length && slowPeriod <= fastPeriod &&
            slowPeriod > 0 && (length - 2) >= 0) {
            let shortEMA = this.calculateEMAValues(slowPeriod, validData, 'close');
            let longEMA = this.calculateEMAValues(fastPeriod, validData, 'close');
            let macdValues = this.getMACDVales(indicator, shortEMA, longEMA);
            macdCollection = this.getMACDPoints(indicator, macdValues, validData, macdLineSeries || signalSeries);
            let signalEMA = this.calculateEMAValues(trigger, macdCollection, 'y');
            signalCollection = this.getSignalPoints(indicator, signalEMA, validData, signalSeries);
            if (histogramSeries) {
                histogramCollection = this.getHistogramPoints(indicator, macdValues, signalEMA, validData, histogramSeries);
            }
        }
        this.setSeriesRange(signalCollection, indicator, indicator.targetSeries[0]);
        if (histogramSeries) {
            this.setSeriesRange(histogramCollection, indicator, histogramSeries);
        }
        if (macdLineSeries) {
            this.setSeriesRange(macdCollection, indicator, macdLineSeries);
        }
    }
    /**
     * Calculates the EMA values for the given period
     */
    calculateEMAValues(period, validData, field) {
        let sum = 0;
        let initialEMA = 0;
        let emaValues = [];
        let emaPercent = (2 / (period + 1));
        for (let i = 0; i < period; i++) {
            sum += Number(validData[i][field]);
        }
        initialEMA = (sum / period);
        emaValues.push(initialEMA);
        let emaAvg = initialEMA;
        for (let j = period; j < validData.length; j++) {
            emaAvg = (Number(validData[j][field]) - emaAvg) * emaPercent + emaAvg;
            emaValues.push(emaAvg);
        }
        return emaValues;
    }
    /**
     * Defines the MACD Points
     */
    getMACDPoints(indicator, macdPoints, validData, series) {
        let macdCollection = [];
        let dataMACDIndex = indicator.fastPeriod - 1;
        let macdIndex = 0;
        while (dataMACDIndex < validData.length) {
            macdCollection.push(this.getDataPoint(validData[dataMACDIndex].x, macdPoints[macdIndex], validData[dataMACDIndex], series, macdCollection.length));
            dataMACDIndex++;
            macdIndex++;
        }
        return macdCollection;
    }
    /**
     * Calculates the signal points
     */
    getSignalPoints(indicator, signalEma, validData, series) {
        let dataSignalIndex = indicator.fastPeriod + indicator.period - 2;
        let signalIndex = 0;
        let signalCollection = [];
        while (dataSignalIndex < validData.length) {
            signalCollection.push(this.getDataPoint(validData[dataSignalIndex].x, signalEma[signalIndex], validData[dataSignalIndex], series, signalCollection.length));
            dataSignalIndex++;
            signalIndex++;
        }
        return signalCollection;
    }
    /**
     * Calculates the MACD values
     */
    getMACDVales(indicator, shortEma, longEma) {
        let macdPoints = [];
        let diff = indicator.fastPeriod - indicator.slowPeriod;
        for (let i = 0; i < longEma.length; i++) {
            macdPoints.push((shortEma[i + diff] - longEma[i]));
        }
        return macdPoints;
    }
    /**
     * Calculates the Histogram Points
     */
    getHistogramPoints(indicator, macdPoints, signalEma, validData, series) {
        let dataHistogramIndex = indicator.fastPeriod + indicator.period - 2;
        let histogramIndex = 0;
        let histogramCollection = [];
        while (dataHistogramIndex < validData.length) {
            histogramCollection.push(this.getDataPoint(validData[dataHistogramIndex].x, macdPoints[histogramIndex + (indicator.period - 1)] - signalEma[histogramIndex], validData[dataHistogramIndex], series, histogramCollection.length, indicator));
            dataHistogramIndex++;
            histogramIndex++;
        }
        return histogramCollection;
    }
    /**
     * To destroy the MACD Indicator.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the MACD indicator
         */
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'MacdIndicator';
    }
}

/**
 * `Trendline` module is used to render 6 types of trendlines in chart.
 */
class Trendlines {
    /**
     * Defines the collection of series, that are used to represent a trendline
     * @private
     */
    initSeriesCollection(trendline, chart) {
        let trendLineSeries = new Series(trendline, 'targetSeries', {}, true);
        if (trendline.type === 'Linear' || trendline.type === 'MovingAverage') {
            trendLineSeries.type = 'Line';
        }
        else {
            trendLineSeries.type = 'Spline';
        }
        this.setSeriesProperties(trendLineSeries, trendline, trendline.type, trendline.fill, trendline.width, chart);
    }
    /**
     * Initializes the properties of the trendline series
     */
    setSeriesProperties(series, trendline, name, fill, width, chart) {
        series.name = trendline.name;
        series.xName = 'x';
        series.yName = 'y';
        series.fill = fill || 'blue';
        series.width = width;
        series.clipRectElement = trendline.clipRectElement;
        series.points = [];
        series.enableTooltip = trendline.enableTooltip;
        series.index = trendline.index;
        series.sourceIndex = trendline.sourceIndex;
        series.interior = series.fill;
        series.animation = trendline.animation;
        series.legendShape = 'HorizontalLine';
        series.marker = trendline.marker;
        series.category = 'TrendLine';
        series.chart = chart;
        series.xMin = Infinity;
        series.xMax = -Infinity;
        series.yMin = Infinity;
        series.yMax = -Infinity;
        series.xData = [];
        series.yData = [];
        trendline.targetSeries = series;
    }
    /**
     * Creates the elements of a trendline
     */
    createTrendLineElements(chart, trendline, index, element, clipRectElement) {
        trendline.trendLineElement = element;
        trendline.targetSeries.clipRectElement = clipRectElement;
        trendline.targetSeries.seriesElement = element;
        chart.trendLineElements.appendChild(trendline.trendLineElement);
    }
    /**
     * Defines the data point of trendline
     */
    getDataPoint(x, y, sourcePoint, series, index) {
        let trendPoint = new Points();
        trendPoint.x = x;
        trendPoint.y = y;
        trendPoint.xValue = Number(x);
        trendPoint.color = series.fill;
        trendPoint.index = index;
        trendPoint.yValue = Number(y);
        trendPoint.visible = true;
        series.xMin = Math.min(series.xMin, trendPoint.xValue);
        series.yMin = Math.min(series.yMin, trendPoint.yValue);
        series.xMax = Math.max(series.xMax, trendPoint.xValue);
        series.yMax = Math.max(series.yMax, trendPoint.yValue);
        series.xData.push(trendPoint.xValue);
        return trendPoint;
    }
    /**
     * Finds the slope and intercept of trendline
     */
    findSlopeIntercept(xValues, yValues, trendline, points) {
        let xAvg = 0;
        let yAvg = 0;
        let xyAvg = 0;
        let xxAvg = 0;
        let yyAvg = 0;
        let index = 0;
        let slope = 0;
        let intercept = 0;
        while (index < points.length) {
            xAvg += xValues[index];
            yAvg += yValues[index];
            xyAvg += xValues[index] * yValues[index];
            xxAvg += xValues[index] * xValues[index];
            yyAvg += yValues[index] * yValues[index];
            index++;
        }
        let type = trendline.type;
        if (trendline.intercept && (type === 'Linear' || type === 'Exponential')) {
            intercept = trendline.intercept;
            switch (type) {
                case 'Linear':
                    slope = ((xyAvg) - (trendline.intercept * xAvg)) / xxAvg;
                    break;
                case 'Exponential':
                    slope = ((xyAvg) - (Math.log(Math.abs(trendline.intercept)) * xAvg)) / xxAvg;
                    break;
            }
        }
        else {
            slope = ((points.length * xyAvg) - (xAvg * yAvg)) / ((points.length * xxAvg) - (xAvg * xAvg));
            if (type === 'Exponential' || type === 'Power') {
                intercept = Math.exp((yAvg - (slope * xAvg)) / points.length);
            }
            else {
                intercept = (yAvg - (slope * xAvg)) / points.length;
            }
        }
        return { slope: slope, intercept: intercept };
    }
    /**
     * Defines the points to draw the trendlines
     */
    initDataSource(trendline, chart) {
        let points = trendline.points;
        if (points && points.length) {
            //prepare data
            let trendlineSeries = trendline.targetSeries;
            switch (trendline.type) {
                case 'Linear':
                    this.setLinearRange(points, trendline, trendlineSeries);
                    break;
                case 'Exponential':
                    this.setExponentialRange(points, trendline, trendlineSeries);
                    break;
                case 'MovingAverage':
                    this.setMovingAverageRange(points, trendline, trendlineSeries);
                    break;
                case 'Polynomial':
                    this.setPolynomialRange(points, trendline, trendlineSeries);
                    break;
                case 'Power':
                    this.setPowerRange(points, trendline, trendlineSeries);
                    break;
                case 'Logarithmic':
                    this.setLogarithmicRange(points, trendline, trendlineSeries);
                    break;
            }
            if (trendline.type !== 'Linear' && trendline.type !== 'MovingAverage') {
                trendlineSeries.chart.splineSeriesModule.findSplinePoint(trendlineSeries);
            }
        }
    }
    /**
     * Calculation of exponential points
     */
    setExponentialRange(points, trendline, series) {
        let xValue = [];
        let yValue = [];
        let index = 0;
        let slopeIntercept;
        while (index < points.length) {
            let point = points[index];
            xValue.push(point.xValue);
            yValue.push(Math.log(point.yValue));
            index++;
        }
        slopeIntercept = this.findSlopeIntercept(xValue, yValue, trendline, points);
        series.points = this.getExponentialPoints(trendline, points, xValue, yValue, series, slopeIntercept);
    }
    /**
     * Calculation of logarithmic points
     */
    setLogarithmicRange(points, trendline, series) {
        let xLogValue = [];
        let yLogValue = [];
        let xPointsLgr = [];
        let slopeIntercept;
        let index = 0;
        while (index < points.length) {
            let point = points[index];
            xPointsLgr.push(point.xValue);
            xLogValue.push(Math.log(point.xValue));
            yLogValue.push(point.yValue);
            index++;
        }
        slopeIntercept = this.findSlopeIntercept(xLogValue, yLogValue, trendline, points);
        series.points = this.getLogarithmicPoints(trendline, points, xPointsLgr, yLogValue, series, slopeIntercept);
    }
    /**
     * Calculation of polynomial points
     */
    setPolynomialRange(points, trendline, series) {
        let xPolyValues = [];
        let yPolyValues = [];
        let index = 0;
        while (index < points.length) {
            let point = points[index];
            xPolyValues.push(point.xValue);
            yPolyValues.push(point.yValue);
            index++;
        }
        series.points = this.getPolynomialPoints(trendline, points, xPolyValues, yPolyValues, series);
    }
    /**
     * Calculation of power points
     */
    setPowerRange(points, trendline, series) {
        let xValues = [];
        let yValues = [];
        let powerPoints = [];
        let slopeIntercept;
        let index = 0;
        while (index < points.length) {
            let point = points[index];
            powerPoints.push(point.xValue);
            xValues.push(Math.log(point.xValue));
            yValues.push(Math.log(point.yValue));
            index++;
        }
        slopeIntercept = this.findSlopeIntercept(xValues, yValues, trendline, points);
        series.points = this.getPowerPoints(trendline, points, powerPoints, yValues, series, slopeIntercept);
    }
    /**
     * Calculation of linear points
     */
    setLinearRange(points, trendline, series) {
        let xValues = [];
        let yValues = [];
        let slopeIntercept;
        let index = 0;
        while (index < points.length) {
            let point = points[index];
            xValues.push(point.xValue);
            yValues.push(point.yValue);
            index++;
        }
        slopeIntercept = this.findSlopeIntercept(xValues, yValues, trendline, points);
        series.points = this.getLinearPoints(trendline, points, xValues, yValues, series, slopeIntercept);
    }
    /**
     * Calculation of moving average points
     */
    setMovingAverageRange(points, trendline, series) {
        let xValues = [];
        let yValues = [];
        let xAvgValues = [];
        let index = 0;
        while (index < points.length) {
            let point = points[index];
            xAvgValues.push(point.xValue);
            xValues.push(index + 1);
            yValues.push(point.yValue);
            index++;
        }
        series.points = this.getMovingAveragePoints(trendline, points, xAvgValues, yValues, series);
    }
    /**
     * Calculation of logarithmic points
     */
    getLogarithmicPoints(trendline, points, xValues, yValues, series, slopeInterceptLog) {
        let midPoint = Math.round((points.length / 2));
        let pts = [];
        let x1Log = xValues[0] - trendline.backwardForecast;
        let y1Log = slopeInterceptLog.intercept + (slopeInterceptLog.slope * Math.log(x1Log));
        let x2Log = xValues[midPoint - 1];
        let y2Log = slopeInterceptLog.intercept + (slopeInterceptLog.slope * Math.log(x2Log));
        let x3Log = xValues[xValues.length - 1] + trendline.forwardForecast;
        let y3Log = slopeInterceptLog.intercept + (slopeInterceptLog.slope * Math.log(x3Log));
        pts.push(this.getDataPoint(x1Log, y1Log, points[0], series, pts.length));
        pts.push(this.getDataPoint(x2Log, y2Log, points[midPoint - 1], series, pts.length));
        pts.push(this.getDataPoint(x3Log, y3Log, points[points.length - 1], series, pts.length));
        return pts;
    }
    /**
     * Defines the points based on data point
     */
    getPowerPoints(trendline, points, xValues, yValues, series, slopeInterceptPower) {
        let midPoint = Math.round((points.length / 2));
        let pts = [];
        let x1 = xValues[0] - trendline.backwardForecast;
        x1 = x1 > -1 ? x1 : 0;
        let y1 = slopeInterceptPower.intercept * Math.pow(x1, slopeInterceptPower.slope);
        let x2 = xValues[midPoint - 1];
        let y2 = slopeInterceptPower.intercept * Math.pow(x2, slopeInterceptPower.slope);
        let x3 = xValues[xValues.length - 1] + trendline.forwardForecast;
        let y3 = slopeInterceptPower.intercept * Math.pow(x3, slopeInterceptPower.slope);
        pts.push(this.getDataPoint(x1, y1, points[0], series, pts.length));
        pts.push(this.getDataPoint(x2, y2, points[midPoint - 1], series, pts.length));
        pts.push(this.getDataPoint(x3, y3, points[points.length - 1], series, pts.length));
        return pts;
    }
    /**
     * Get the polynomial points based on polynomial slopes
     */
    getPolynomialPoints(trendline, points, xValues, yValues, series) {
        let midPoint = Math.round((points.length / 2));
        let pts = [];
        let polynomialOrder = points.length <= trendline.polynomialOrder ? points.length : trendline.polynomialOrder;
        polynomialOrder = Math.max(2, polynomialOrder);
        polynomialOrder = Math.min(6, polynomialOrder);
        trendline.polynomialOrder = polynomialOrder;
        trendline.polynomialSlopes = [];
        trendline.polynomialSlopes.length = trendline.polynomialOrder + 1;
        let index = 0;
        while (index < xValues.length) {
            let xVal = xValues[index];
            let yVal = yValues[index];
            let subIndex = 0;
            while (subIndex <= trendline.polynomialOrder) {
                if (!trendline.polynomialSlopes[subIndex]) {
                    trendline.polynomialSlopes[subIndex] = 0;
                }
                trendline.polynomialSlopes[subIndex] += Math.pow(xVal, subIndex) * yVal;
                ++subIndex;
            }
            index++;
        }
        let numArray = [];
        numArray.length = 1 + 2 * trendline.polynomialOrder;
        let matrix = [];
        matrix.length = trendline.polynomialOrder + 1;
        let newIndex = 0;
        while (newIndex < (trendline.polynomialOrder + 1)) {
            matrix[newIndex] = [];
            matrix[newIndex].length = 3;
            newIndex++;
        }
        let nIndex = 0;
        while (nIndex < xValues.length) {
            let d = xValues[nIndex];
            let num2 = 1.0;
            let nIndex2 = 0;
            while (nIndex2 < numArray.length) {
                if (!numArray[nIndex2]) {
                    numArray[nIndex2] = 0;
                }
                numArray[nIndex2] += num2;
                num2 *= d;
                ++nIndex2;
            }
            ++nIndex;
        }
        let nnIndex = 0;
        while (nnIndex <= trendline.polynomialOrder) {
            let nnIndex2 = 0;
            while (nnIndex2 <= trendline.polynomialOrder) {
                matrix[nnIndex][nnIndex2] = numArray[nnIndex + nnIndex2];
                ++nnIndex2;
            }
            ++nnIndex;
        }
        if (!this.gaussJordanElimination(matrix, trendline.polynomialSlopes)) {
            trendline.polynomialSlopes = null;
        }
        pts = this.getPoints(trendline, points, xValues, yValues, series);
        return pts;
    }
    /**
     * Defines the moving average points
     */
    getMovingAveragePoints(trendline, points, xValues, yValues, series) {
        let pts = [];
        let period = trendline.period >= points.length ? points.length - 1 : trendline.period;
        period = Math.max(2, period);
        let index = 0;
        let y;
        let x;
        let count;
        let nullCount;
        while (index < points.length - 1) {
            y = count = nullCount = 0;
            for (let j = index; count < period; j++) {
                count++;
                if (!yValues[j]) {
                    nullCount++;
                }
                y += yValues[j];
            }
            y = period - nullCount <= 0 ? null : y / (period - nullCount);
            if (y && !isNaN(y)) {
                x = xValues[period - 1 + index];
                pts.push(this.getDataPoint(x, y, points[period - 1 + index], series, pts.length));
            }
            index++;
        }
        return pts;
    }
    /**
     * Defines the linear points
     */
    getLinearPoints(trendline, points, xValues, yValues, series, slopeInterceptLinear) {
        let pts = [];
        let x1Linear = xValues[0] - trendline.backwardForecast;
        let y1Linear = slopeInterceptLinear.slope * x1Linear + slopeInterceptLinear.intercept;
        let x2Linear = xValues[xValues.length - 1] + trendline.forwardForecast;
        let y2Linear = slopeInterceptLinear.slope * x2Linear + slopeInterceptLinear.intercept;
        pts.push(this.getDataPoint(x1Linear, y1Linear, points[0], series, pts.length));
        pts.push(this.getDataPoint(x2Linear, y2Linear, points[points.length - 1], series, pts.length));
        return pts;
    }
    /**
     * Defines the exponential points
     */
    getExponentialPoints(trendline, points, xValues, yValues, series, slopeInterceptExp) {
        let midPoint = Math.round((points.length / 2));
        let ptsExp = [];
        let x1 = xValues[0] - trendline.backwardForecast;
        let y1 = slopeInterceptExp.intercept * Math.exp(slopeInterceptExp.slope * x1);
        let x2 = xValues[midPoint - 1];
        let y2 = slopeInterceptExp.intercept * Math.exp(slopeInterceptExp.slope * x2);
        let x3 = xValues[xValues.length - 1] + trendline.forwardForecast;
        let y3 = slopeInterceptExp.intercept * Math.exp(slopeInterceptExp.slope * x3);
        ptsExp.push(this.getDataPoint(x1, y1, points[0], series, ptsExp.length));
        ptsExp.push(this.getDataPoint(x2, y2, points[midPoint - 1], series, ptsExp.length));
        ptsExp.push(this.getDataPoint(x3, y3, points[points.length - 1], series, ptsExp.length));
        return ptsExp;
    }
    /**
     * Defines the points based on data point
     */
    getPoints(trendline, points, xValues, yValues, series) {
        let midPoint = Math.round((points.length / 2));
        let polynomialSlopes = trendline.polynomialSlopes;
        let pts = [];
        let x1 = 1;
        let index = 1;
        let xValue;
        let yValue;
        while (index <= polynomialSlopes.length) {
            if (index === 1) {
                xValue = xValues[0] - trendline.backwardForecast;
                yValue = this.getPolynomialYValue(polynomialSlopes, xValue);
                pts.push(this.getDataPoint(xValue, yValue, points[0], series, pts.length));
            }
            else if (index === polynomialSlopes.length) {
                xValue = xValues[points.length - 1] + trendline.forwardForecast;
                yValue = this.getPolynomialYValue(polynomialSlopes, xValue);
                pts.push(this.getDataPoint(xValue, yValue, points[points.length - 1], series, pts.length));
            }
            else {
                x1 += (points.length + trendline.forwardForecast) / polynomialSlopes.length;
                xValue = xValues[parseInt(x1.toString(), 10) - 1];
                yValue = this.getPolynomialYValue(polynomialSlopes, xValue);
                pts.push(this.getDataPoint(xValue, yValue, points[parseInt(x1.toString(), 10) - 1], series, pts.length));
            }
            index++;
        }
        return pts;
    }
    /**
     * Defines the polynomial value of y
     */
    getPolynomialYValue(slopes, x) {
        let sum$$1 = 0;
        let index = 0;
        while (index < slopes.length) {
            sum$$1 += slopes[index] * Math.pow(x, index);
            index++;
        }
        return sum$$1;
    }
    /**
     * Defines the gauss jordan elimination
     */
    gaussJordanElimination(matrix, polynomialSlopes) {
        let length = matrix.length;
        let numArray1 = [];
        let numArray2 = [];
        let numArray3 = [];
        numArray1.length = length;
        numArray2.length = length;
        numArray3.length = length;
        let index = 0;
        while (index < length) {
            numArray3[index] = 0;
            ++index;
        }
        let index1 = 0;
        while (index1 < length) {
            let num1 = 0;
            let index2 = 0;
            let index3 = 0;
            let index4 = 0;
            while (index4 < length) {
                if (numArray3[index4] !== 1) {
                    let index5 = 0;
                    while (index5 < length) {
                        if (numArray3[index5] === 0 && Math.abs(matrix[index4][index5]) >= num1) {
                            num1 = Math.abs(matrix[index4][index5]);
                            index2 = index4;
                            index3 = index5;
                        }
                        ++index5;
                    }
                }
                ++index4;
            }
            ++numArray3[index3];
            if (index2 !== index3) {
                let index4 = 0;
                while (index4 < length) {
                    let num2 = matrix[index2][index4];
                    matrix[index2][index4] = matrix[index3][index4];
                    matrix[index3][index4] = num2;
                    ++index4;
                }
                let num3 = polynomialSlopes[index2];
                polynomialSlopes[index2] = polynomialSlopes[index3];
                polynomialSlopes[index3] = num3;
            }
            numArray2[index1] = index2;
            numArray1[index1] = index3;
            if (matrix[index3][index3] === 0.0) {
                return false;
            }
            let num4 = 1.0 / matrix[index3][index3];
            matrix[index3][index3] = 1.0;
            let iindex4 = 0;
            while (iindex4 < length) {
                matrix[index3][iindex4] *= num4;
                ++iindex4;
            }
            polynomialSlopes[index3] *= num4;
            let iandex4 = 0;
            while (iandex4 < length) {
                if (iandex4 !== index3) {
                    let num2 = matrix[iandex4][index3];
                    matrix[iandex4][index3] = 0.0;
                    let index5 = 0;
                    while (index5 < length) {
                        matrix[iandex4][index5] -= matrix[index3][index5] * num2;
                        ++index5;
                    }
                    polynomialSlopes[iandex4] -= polynomialSlopes[index3] * num2;
                }
                ++iandex4;
            }
            ++index1;
        }
        let iindex1 = length - 1;
        while (iindex1 >= 0) {
            if (numArray2[iindex1] !== numArray1[iindex1]) {
                let iindex2 = 0;
                while (iindex2 < length) {
                    let num = matrix[iindex2][numArray2[iindex1]];
                    matrix[iindex2][numArray2[iindex1]] = matrix[iindex2][numArray1[iindex1]];
                    matrix[iindex2][numArray1[iindex1]] = num;
                    ++iindex2;
                }
            }
            --iindex1;
        }
        return true;
    }
    /**
     * Defines the trendline elements
     */
    getTrendLineElements(series, chart) {
        findClipRect(series);
        let clipRect = series.clipRect;
        let clipRectElement = chart.renderer.drawClipPath(new RectOption(chart.element.id + '_ChartTrendlineClipRect_' + series.index, 'transparent', { width: 1, color: 'Gray' }, 1, {
            x: 0, y: 0, width: clipRect.width,
            height: clipRect.height,
        }));
        let element;
        element = chart.renderer.createGroup({
            'id': chart.element.id + 'TrendlineSeriesGroup' + series.index,
            'transform': 'translate(' + clipRect.x + ',' + clipRect.y + ')',
            'clip-path': 'url(#' + chart.element.id + '_ChartTrendlineClipRect_' + series.index + ')'
        });
        //defines the clip rect element
        element.appendChild(clipRectElement);
        for (let trendline of series.trendlines) {
            this.createTrendLineElements(chart, trendline, trendline.index, element, clipRectElement);
        }
    }
    /**
     * To destroy the trendline
     */
    destroy(chart) {
        /**
         * Destroys the Linear Trendline
         */
    }
    /**
     * Get module name
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'TrendLine';
    }
}

/**
 * `Crosshair` module is used to render the crosshair for chart.
 */
class Crosshair {
    /**
     * Constructor for crosshair module.
     * @private
     */
    constructor(chart) {
        this.arrowLocation = new ChartLocation(0, 0);
        this.rx = 2;
        this.ry = 2;
        this.chart = chart;
        this.elementID = this.chart.element.id;
        this.addEventListener();
    }
    /**
     * @hidden
     */
    addEventListener() {
        if (this.chart.isDestroyed) {
            return;
        }
        let cancelEvent = Browser.isPointer ? 'pointerleave' : 'mouseleave';
        this.chart.on(Browser.touchMoveEvent, this.mouseMoveHandler, this);
        this.chart.on(Browser.touchEndEvent, this.mouseUpHandler, this);
        this.chart.on(cancelEvent, this.mouseLeaveHandler, this);
        this.chart.on('tapHold', this.longPress, this);
    }
    mouseUpHandler() {
        if (this.chart.startMove) {
            this.removeCrosshair(2000);
        }
    }
    mouseLeaveHandler() {
        this.removeCrosshair(1000);
    }
    mouseMoveHandler(event) {
        let chart = this.chart;
        if (event.type === 'touchmove' && (Browser.isIos || Browser.isIos7) && chart.startMove && event.preventDefault) {
            event.preventDefault();
        }
        // Tooltip for chart series.
        if (!chart.disableTrackTooltip) {
            if (withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect)) {
                if (chart.startMove || !chart.isTouch) {
                    this.crosshair();
                }
            }
            else {
                this.removeCrosshair(1000);
            }
        }
    }
    /**
     * Handles the long press on chart.
     * @return {boolean}
     * @private
     */
    longPress() {
        let chart = this.chart;
        if (withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect)) {
            this.crosshair();
        }
        return false;
    }
    /**
     * Renders the crosshair.
     * @return {void}
     */
    crosshair() {
        let chart = this.chart;
        let horizontalCross = '';
        let verticalCross = '';
        let options;
        let crosshair = chart.crosshair;
        let chartRect = chart.chartAxisLayoutPanel.seriesClipRect;
        let crossGroup = document.getElementById(this.elementID + '_UserInteraction');
        this.stopAnimation();
        if (chart.tooltip.enable && !withInBounds(chart.tooltipModule.valueX, chart.tooltipModule.valueY, chartRect)) {
            return null;
        }
        this.valueX = chart.tooltip.enable ? chart.tooltipModule.valueX : chart.mouseX;
        this.valueY = chart.tooltip.enable ? chart.tooltipModule.valueY : chart.mouseY;
        crossGroup.setAttribute('opacity', '1');
        if (crosshair.lineType === 'Both' || crosshair.lineType === 'Horizontal') {
            horizontalCross += 'M ' + chartRect.x + ' ' + this.valueY +
                ' L ' + (chartRect.x + chartRect.width) + ' ' + this.valueY;
        }
        if (crosshair.lineType === 'Both' || crosshair.lineType === 'Vertical') {
            verticalCross += 'M ' + this.valueX + ' ' + chartRect.y +
                ' L ' + this.valueX + ' ' + (chartRect.y + chartRect.height);
        }
        if (crossGroup.childNodes.length === 0) {
            let axisTooltipGroup = chart.renderer.createGroup({ 'id': this.elementID + '_crosshair_axis' });
            options = new PathOption(this.elementID + '_HorizontalLine', 'none', crosshair.line.width, crosshair.line.color || chart.themeStyle.crosshairLine, 1, null, horizontalCross);
            this.renderCrosshairLine(options, crossGroup);
            options.d = verticalCross;
            options.id = this.elementID + '_VerticalLine';
            this.renderCrosshairLine(options, crossGroup);
            crossGroup.appendChild(axisTooltipGroup);
            this.renderAxisTooltip(chart, chartRect, crossGroup.lastChild);
        }
        else {
            document.getElementById(this.elementID + '_HorizontalLine').setAttribute('d', horizontalCross);
            document.getElementById(this.elementID + '_VerticalLine').setAttribute('d', verticalCross);
            this.renderAxisTooltip(chart, chartRect, crossGroup.lastChild);
        }
    }
    renderCrosshairLine(options, crossGroup) {
        let htmlObject = this.chart.renderer.drawPath(options);
        crossGroup.appendChild(htmlObject);
    }
    renderAxisTooltip(chart, chartRect, axisGroup) {
        let axis;
        let text;
        let rect;
        let pathElement;
        let textElem;
        let options;
        let padding = 5;
        let direction;
        let axisRect;
        for (let k = 0, length = chart.axisCollections.length; k < length; k++) {
            axis = chart.axisCollections[k];
            axisRect = !axis.placeNextToAxisLine ? axis.rect : axis.updatedRect;
            if (axis.crosshairTooltip.enable) {
                if ((this.valueX <= (axisRect.x + axisRect.width) && axisRect.x <= this.valueX) ||
                    (this.valueY <= (axisRect.y + axisRect.height) && axisRect.y <= this.valueY)) {
                    pathElement = document.getElementById(this.elementID + '_axis_tooltip_' + k);
                    textElem = document.getElementById(this.elementID + '_axis_tooltip_text_' + k);
                    text = this.getAxisText(axis);
                    if (!text) {
                        continue;
                    }
                    rect = this.tooltipLocation(text, axis, chartRect, axisRect);
                    if (pathElement === null) {
                        pathElement = chart.renderer.drawPath({
                            'id': this.elementID + '_axis_tooltip_' + k,
                            'fill': axis.crosshairTooltip.fill || chart.themeStyle.crosshairFill
                        });
                        axisGroup.appendChild(pathElement);
                        options = new TextOption(this.elementID + '_axis_tooltip_text_' + k, 0, 0, 'start', text);
                        textElem = textElement(options, axis.crosshairTooltip.textStyle, axis.crosshairTooltip.textStyle.color || chart.themeStyle.crosshairLabel, axisGroup);
                    }
                    direction = findDirection(this.rx, this.ry, rect, this.arrowLocation, 10, this.isTop, this.isBottom, this.isLeft, this.valueX, this.valueY);
                    pathElement.setAttribute('d', direction);
                    textElem.textContent = text;
                    textElem.setAttribute('x', (rect.x + padding).toString());
                    textElem.setAttribute('y', (rect.y + padding + 3 * this.elementSize.height / 4).toString());
                }
                else {
                    removeElement(this.elementID + '_axis_tooltip_' + k);
                    removeElement(this.elementID + '_axis_tooltip_text_' + k);
                }
            }
        }
    }
    getAxisText(axis) {
        let value;
        this.isBottom = false;
        this.isTop = false;
        this.isLeft = false;
        this.isRight = false;
        let labelValue = (axis.valueType === 'Category' && axis.labelPlacement === 'BetweenTicks')
            ? 0.5 : 0;
        if (axis.orientation === 'Horizontal') {
            value = getValueXByPoint(Math.abs(this.valueX - axis.rect.x), axis.rect.width, axis) + labelValue;
            this.isBottom = !axis.opposedPosition;
            this.isTop = axis.opposedPosition;
        }
        else {
            value = getValueYByPoint(Math.abs(this.valueY - axis.rect.y), axis.rect.height, axis) + labelValue;
            this.isRight = axis.opposedPosition;
            this.isLeft = !axis.opposedPosition;
        }
        if (axis.valueType === 'DateTime') {
            return axis.format(new Date(value));
        }
        else if (axis.valueType === 'Category') {
            return axis.labels[Math.floor(value)];
        }
        else if (axis.valueType === 'Logarithmic') {
            return value = axis.format(Math.pow(axis.logBase, value));
        }
        else {
            let customLabelFormat = axis.labelFormat && axis.labelFormat.match('{value}') !== null;
            return customLabelFormat ? axis.labelFormat.replace('{value}', axis.format(value)) : axis.format(value);
        }
    }
    tooltipLocation(text, axis, bounds, axisRect) {
        let padding = 5;
        let arrowPadding = 10;
        let tooltipRect;
        let boundsX = bounds.x;
        let boundsY = bounds.y;
        let islabelInside = axis.labelPosition === 'Inside';
        this.elementSize = measureText(text, axis.crosshairTooltip.textStyle);
        if (axis.orientation === 'Horizontal') {
            let yLocation = islabelInside ? axisRect.y - this.elementSize.height - (padding * 2 + arrowPadding) : axisRect.y;
            let height = islabelInside ? axisRect.y - this.elementSize.height - arrowPadding : axisRect.y + arrowPadding;
            this.arrowLocation = new ChartLocation(this.valueX, yLocation);
            tooltipRect = new Rect((this.valueX - (this.elementSize.width / 2) - padding), height, this.elementSize.width + padding * 2, this.elementSize.height + padding * 2);
            if (axis.opposedPosition) {
                tooltipRect.y = islabelInside ? axisRect.y : axisRect.y - (this.elementSize.height + padding * 2 + arrowPadding);
            }
            if (tooltipRect.x < boundsX) {
                tooltipRect.x = boundsX;
            }
            if (tooltipRect.x + tooltipRect.width > boundsX + bounds.width) {
                tooltipRect.x -= ((tooltipRect.x + tooltipRect.width) - (boundsX + bounds.width));
            }
            if (this.arrowLocation.x + arrowPadding / 2 > tooltipRect.x + tooltipRect.width - this.rx) {
                this.arrowLocation.x = tooltipRect.x + tooltipRect.width - this.rx - arrowPadding / 2;
            }
            if (this.arrowLocation.x - arrowPadding / 2 < tooltipRect.x + this.rx) {
                this.arrowLocation.x = tooltipRect.x + this.rx + arrowPadding / 2;
            }
        }
        else {
            this.arrowLocation = new ChartLocation(axisRect.x, this.valueY);
            let width = islabelInside ? axisRect.x : axisRect.x - (this.elementSize.width) - (padding * 2 + arrowPadding);
            tooltipRect = new Rect(width, this.valueY - (this.elementSize.height / 2) - padding, this.elementSize.width + (padding * 2), this.elementSize.height + padding * 2);
            if (axis.opposedPosition) {
                tooltipRect.x = islabelInside ? axisRect.x - this.elementSize.width - arrowPadding : axisRect.x + arrowPadding;
                if ((tooltipRect.x + tooltipRect.width) > this.chart.availableSize.width) {
                    this.arrowLocation.x -= ((tooltipRect.x + tooltipRect.width) - this.chart.availableSize.width);
                    tooltipRect.x -= ((tooltipRect.x + tooltipRect.width) - this.chart.availableSize.width);
                }
            }
            else {
                if (tooltipRect.x < 0) {
                    this.arrowLocation.x -= tooltipRect.x;
                    tooltipRect.x = 0;
                }
            }
            if (tooltipRect.y < boundsY) {
                tooltipRect.y = boundsY;
            }
            if (tooltipRect.y + tooltipRect.height >= boundsY + bounds.height) {
                tooltipRect.y -= ((tooltipRect.y + tooltipRect.height) - (boundsY + bounds.height));
            }
            if (this.arrowLocation.y + arrowPadding / 2 > tooltipRect.y + tooltipRect.height - this.ry) {
                this.arrowLocation.y = tooltipRect.y + tooltipRect.height - this.ry - arrowPadding / 2;
            }
            if (this.arrowLocation.y - arrowPadding / 2 < tooltipRect.y + this.ry) {
                this.arrowLocation.y = tooltipRect.y + this.ry + arrowPadding / 2;
            }
        }
        return tooltipRect;
    }
    stopAnimation() {
        stopTimer(this.crosshairInterval);
    }
    /**
     * Removes the crosshair on mouse leave.
     * @return {void}
     * @private
     */
    removeCrosshair(duration) {
        let chart = this.chart;
        let crosshair = document.getElementById(this.elementID + '_UserInteraction');
        this.stopAnimation();
        if (crosshair && crosshair.getAttribute('opacity') !== '0') {
            this.crosshairInterval = setTimeout(() => {
                new Animation({}).animate(crosshair, {
                    duration: 200,
                    progress: (args) => {
                        // crosshair.removeAttribute('e-animate');
                        crosshair.style.animation = '';
                        crosshair.setAttribute('opacity', (1 - (args.timeStamp / args.duration)).toString());
                    },
                    end: (model) => {
                        crosshair.setAttribute('opacity', '0');
                        chart.startMove = false;
                        if (chart.tooltipModule) {
                            chart.tooltipModule.valueX = null;
                            chart.tooltipModule.valueY = null;
                        }
                    }
                });
            }, duration);
        }
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name
         */
        return 'Crosshair';
    }
    /**
     * To destroy the crosshair.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * Tooltip Module used to render the tooltip for series.
 */
class BaseTooltip extends ChartData {
    /**
     * Constructor for tooltip module.
     * @private.
     */
    constructor(chart) {
        super(chart);
        this.padding = 5;
        this.arrowPadding = 12;
        this.rx = 2;
        this.ry = 2;
        this.markerPoint = [];
        this.element = this.chart.element;
        this.textStyle = chart.tooltip.textStyle;
        this.control = chart;
    }
    getElement(id) {
        return document.getElementById(id);
    }
    /**
     * Renders the tooltip.
     * @return {void}
     * @private
     */
    getTooltipElement(isTooltip) {
        this.inverted = this.chart.requireInvertedAxis;
        this.updateTemplateFn(this.control);
        this.formattedText = [];
        this.header = (this.control.tooltip.header === null) ?
            ((this.control.tooltip.shared) ? '<b>${point.x}</b>' : '<b>${series.name}</b>')
            : (this.control.tooltip.header);
        if (!isTooltip) {
            let elementCollection = document.getElementsByClassName('ejSVGTooltip');
            for (let i = elementCollection.length - 1; i >= 0; i--) {
                if (!this.getElement(this.element.id).contains(elementCollection[i])) {
                    elementCollection[i].remove();
                }
            }
            return this.createElement(this.control);
        }
        return null;
    }
    createElement(chart) {
        this.textElements = [];
        let tooltipDiv = document.createElement('div');
        tooltipDiv.id = this.element.id + '_tooltip';
        tooltipDiv.className = 'ejSVGTooltip';
        tooltipDiv.setAttribute('style', 'pointer-events:none; position:absolute;z-index: 1');
        if (!chart.tooltip.template || chart.tooltip.shared) {
            // SVG element for tooltip
            let svgObject = chart.renderer.createSvg({ id: this.element.id + '_tooltip_svg' });
            tooltipDiv.appendChild(svgObject);
            // Group to hold text and path.
            let groupElement = chart.renderer.createGroup({ id: this.element.id + '_tooltip_group' });
            svgObject.appendChild(groupElement);
            let pathElement = chart.renderer.drawPath({
                'id': this.element.id + '_tooltip_path', 'stroke-width': chart.tooltip.border.width,
                'fill': chart.tooltip.fill || chart.themeStyle.tooltipFill, 'opacity': chart.tooltip.opacity,
                'stroke': chart.tooltip.border.color
            });
            groupElement.appendChild(pathElement);
        }
        return tooltipDiv;
    }
    pushData(data, isFirst, tooltipDiv, isChart) {
        if (data.series.enableTooltip) {
            if (isChart) {
                this.currentPoints.push(data);
            }
            else {
                this.currentPoints.push(data);
            }
            this.stopAnimation();
            if (isFirst) {
                document.getElementById(this.element.id + '_Secondary_Element').appendChild(tooltipDiv);
            }
            return true;
        }
        return false;
    }
    renderTooltip(data, areaRect, location, textCollection, isFirst, cartesain) {
        if (this.triggerEvent(data, isFirst, textCollection)) {
            this.renderText(isFirst, this.control);
            this.removeHighlight(this.control);
            this.highlightPoints(data);
            return this.renderTooltipElement(this.control, data, areaRect, location, cartesain, isFirst);
        }
        else {
            this.removeHighlight(this.control);
            this.getElement(this.element.id + '_tooltip').remove();
            return null;
        }
    }
    renderTemplate(data, rect, location, point, isFirst) {
        this.removeHighlight(this.control);
        this.createTemplate(point, data, rect, location, this.getElement(this.element.id + '_tooltip'), isFirst);
    }
    renderTooltipElement(chart, pointData, areaRect, location, cartesain, isFirst) {
        let tooltipDiv = this.getElement(this.element.id + '_tooltip');
        let arrowLocation = new ChartLocation(0, 0);
        let tipLocation = new ChartLocation(0, 0);
        let svgObject = this.getElement(this.element.id + '_tooltip_svg');
        let groupElement = this.getElement(this.element.id + '_tooltip_group');
        let pathElement = this.getElement(this.element.id + '_tooltip_path');
        let rect;
        let isTop = false;
        let isLeft = false;
        let isBottom = false;
        let x = 0;
        let y = 0;
        this.tipRadius = 1;
        let series = pointData.series;
        if (this.header !== '') {
            this.elementSize.height += 5;
        }
        if (this.currentPoints.length > 1) {
            this.arrowPadding = 0;
            rect = this.sharedTooltipLocation(areaRect, this.valueX, this.valueY);
            isTop = true;
        }
        else {
            this.arrowPadding = 12;
            rect = this.seriesTooltipLocation(pointData, areaRect, location, arrowLocation, tipLocation);
            if (!this.inverted || !series.isRectSeries) {
                isTop = (rect.y < (location.y + (cartesain ? series.clipRect.y : 0)));
                isBottom = !isTop;
                y = (isTop ? 0 : this.arrowPadding);
            }
            else {
                isLeft = (rect.x < (location.x + series.clipRect.x));
                x = (isLeft ? 0 : this.arrowPadding);
            }
        }
        if (this.header !== '') {
            let headerSize = measureText(this.header, chart.tooltip.textStyle).height + (this.padding * 2) +
                (isBottom ? this.arrowPadding : 0); //header padding;
            let xLength = (this.padding * 3) + (!isLeft && !isTop && !isBottom ? this.arrowPadding : 0);
            let direction = 'M ' + xLength + ' ' + headerSize +
                'L ' + (rect.width + (!isLeft && !isTop && !isBottom ? this.arrowPadding : 0) - (this.padding * 2)) +
                ' ' + headerSize;
            let pathElement = this.chart.renderer.drawPath({
                'id': this.element.id + '_header_path', 'stroke-width': 1,
                'fill': null, 'opacity': 0.8, 'stroke': chart.themeStyle.tooltipHeaderLine, 'd': direction
            });
            groupElement.appendChild(pathElement);
        }
        let start = chart.tooltip.border.width / 2;
        let pointRect = new Rect(start + x, start + y, rect.width - start, rect.height - start);
        groupElement.setAttribute('opacity', '1');
        if (chart.tooltip.enableAnimation && !chart.tooltip.shared && !isFirst && !this.isComplete) {
            this.animateTooltipDiv(tooltipDiv, rect);
        }
        else {
            this.updateDiv(tooltipDiv, rect.x, rect.y);
        }
        this.isComplete = false;
        svgObject.setAttribute('height', (rect.height + chart.tooltip.border.width + (!((!this.inverted) ||
            (!pointData.series.isRectSeries)) ? 0 : this.arrowPadding)).toString());
        svgObject.setAttribute('width', (rect.width + chart.tooltip.border.width + (((!this.inverted) ||
            (!pointData.series.isRectSeries)) ? 0 : this.arrowPadding)).toString());
        svgObject.setAttribute('opacity', '1');
        pathElement.setAttribute('d', findDirection(this.rx, this.ry, pointRect, arrowLocation, this.arrowPadding, isTop, isBottom, isLeft, tipLocation.x, tipLocation.y, this.tipRadius));
        pathElement.setAttribute('filter', Browser.isIE ? '' : 'url(#chart_shadow_tooltip)');
        let shadowElement = '<filter id="chart_shadow_tooltip" height="130%"><feGaussianBlur in="SourceAlpha" stdDeviation="3"/>';
        shadowElement += '<feOffset dx="3" dy="3" result="offsetblur"/><feComponentTransfer><feFuncA type="linear" slope="0.5"/>';
        shadowElement += '</feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
        let defElement = chart.renderer.createDefs();
        defElement.setAttribute('id', 'chart_tooltip_definition');
        groupElement.appendChild(defElement);
        defElement.innerHTML = shadowElement;
        pathElement.setAttribute('stroke', chart.tooltip.border.color);
        this.changeText(new ChartLocation(x, y), isBottom, !isLeft && !isTop && !isBottom, rect);
        return new Side(isBottom, !isLeft && !isTop && !isBottom);
    }
    changeText(point, isBottom, isRight, rect) {
        let element = document.getElementById(this.element.id + '_tooltip_text');
        if (isBottom) {
            element.setAttribute('transform', 'translate(0,' + this.arrowPadding + ')');
        }
        if (isRight) {
            element.setAttribute('transform', 'translate(' + this.arrowPadding + ' 0)');
        }
    }
    renderText(isRender, chart) {
        let height = 0;
        let width = 0; // Padding for text;
        let subWidth = 0;
        let size;
        let lines;
        let key = 'properties';
        let font = extend({}, this.chart.tooltip.textStyle, null, true)[key];
        let groupElement = this.getElement(this.element.id + '_tooltip_group');
        let tspanElement;
        let tspanStyle = '';
        let line;
        let tspanOption;
        this.header = this.header.replace(/<b>/g, '').replace(/<\/b>/g, '').trim();
        let headerSpace = (this.header !== '' && this.formattedText[0] !== '') ? 5 : 0;
        let isRow = true;
        let isColumn = true;
        this.markerPoint = [];
        let markerSize = 10;
        let spaceWidth = 4;
        let dy = (22 / parseFloat(Theme.tooltipLabelFont.size)) * (parseFloat(font.size));
        if (!isRender) {
            removeElement(this.element.id + '_tooltip_text');
            removeElement(this.element.id + '_header_path');
            removeElement(this.element.id + '_tooltip_trackball_group');
            removeElement('chart_tooltip_definition');
        }
        let options = new TextOption(this.element.id + '_tooltip_text', this.padding * 2, this.padding * 4, 'start', '');
        let parentElement = textElement(options, font, null, groupElement, false);
        for (let k = 0, pointsLength = this.formattedText.length; k < pointsLength; k++) {
            let textCollection = this.formattedText[k].replace(/<(b|strong)>/g, '<b>')
                .replace(/<\/(b|strong)>/g, '</b>')
                .split(/<br.*?>/g);
            size = measureText(this.formattedText[k], font);
            if ((k !== 0) || (this.header === '')) {
                this.markerPoint.push((this.header !== '' ? (this.padding) : 0) + options.y + height);
            }
            for (let i = 0, len = textCollection.length; i < len; i++) {
                lines = textCollection[i].replace(/<b>/g, '<br><b>').replace(/<\/b>/g, '</b><br>').split('<br>');
                subWidth = 0;
                isColumn = true;
                height += dy;
                for (let k = 0, len = lines.length; k < len; k++) {
                    line = lines[k];
                    if (line.replace(/<b>/g, '').replace(/<\/b>/g, '').trim() !== '') {
                        subWidth += spaceWidth;
                        if (isColumn && !isRow) {
                            tspanOption = { x: (this.padding * 2) + (markerSize + 5), dy: dy + ((isColumn) ? headerSpace : 0), fill: '' };
                            headerSpace = null;
                        }
                        else {
                            if (isRow && isColumn) {
                                tspanOption = { x: (this.header === '') ? ((this.padding * 2) + (markerSize + 5)) : (this.padding * 2) };
                            }
                            else {
                                tspanOption = {};
                            }
                        }
                        isColumn = false;
                        tspanElement = chart.renderer.createTSpan(tspanOption, '');
                        parentElement.appendChild(tspanElement);
                        if (line.indexOf('<b>') > -1) {
                            tspanStyle = 'font-weight:bold';
                            font.fontWeight = 'bold';
                            (tspanElement).setAttribute('fill', chart.tooltip.textStyle.color || chart.themeStyle.tooltipBoldLabel);
                        }
                        else {
                            tspanStyle = '';
                            font.fontWeight = 'Normal';
                            (tspanElement).setAttribute('fill', chart.tooltip.textStyle.color || chart.themeStyle.tooltipLightLabel);
                        }
                        (tspanElement).textContent = line = line.replace(/<[a-zA-Z\/](.|\n)*?>/g, '');
                        subWidth += measureText(line, font).width;
                        if (tspanStyle !== '') {
                            tspanElement.setAttribute('style', tspanStyle);
                        }
                        isRow = false;
                    }
                }
                subWidth -= spaceWidth;
                width = Math.max(width, subWidth);
            }
        }
        height -= (this.header ? this.padding : 0);
        this.elementSize = new Size(width + (width > 0 ? (2 * this.padding) : 0), height + (this.header !== '' ? this.padding : 0));
        this.elementSize.width += (markerSize + 5); // marker size + marker Spacing
        let element = (parentElement.childNodes[0]);
        if (this.header !== '' && element) {
            font.fontWeight = 'bold';
            let width = (this.elementSize.width + (2 * this.padding)) / 2 - measureText(this.header, font).width / 2;
            element.setAttribute('x', width.toString());
        }
    }
    createTemplate(point, data, areaRect, location, parent, isFirst) {
        let chart = this.control;
        this.highlightPoints(data);
        let argsData = { cancel: false, name: tooltipRender, point: data.point, series: data.series, };
        this.chart.trigger(tooltipRender, argsData);
        let firstElement = this.getElement(this.element.id + '_tooltip').firstChild;
        if (firstElement) {
            firstElement.remove();
        }
        if (!argsData.cancel) {
            let templateElement = this.templateFn(point);
            let elem = createElement('div');
            while (templateElement.length > 0) {
                elem.appendChild(templateElement[0]);
            }
            parent.appendChild(elem);
            let rect = parent.getBoundingClientRect();
            this.padding = 0;
            this.elementSize = new Size(rect.width, rect.height);
            let tooltipRect = this.seriesTooltipLocation(data, areaRect, location, new ChartLocation(0, 0), new ChartLocation(0, 0));
            if (chart.tooltip.enableAnimation && !chart.tooltip.shared && !isFirst && !this.isComplete) {
                this.animateTooltipDiv(parent, tooltipRect);
            }
            else {
                this.updateDiv(parent, tooltipRect.x, tooltipRect.y);
            }
            this.isComplete = false;
        }
        else {
            this.removeHighlight(chart);
            this.getElement(this.element.id + '_tooltip').remove();
        }
    }
    sharedTooltipLocation(bounds, x, y) {
        let width = this.elementSize.width + (2 * this.padding);
        let height = this.elementSize.height + (2 * this.padding);
        let tooltipRect = new Rect(x + 2 * this.padding, y - height - this.padding, width, height);
        if (tooltipRect.y < bounds.y) {
            tooltipRect.y += (tooltipRect.height + 2 * this.padding);
        }
        if (tooltipRect.x + tooltipRect.width > bounds.x + bounds.width) {
            tooltipRect.x -= (tooltipRect.width + 4 * this.padding);
        }
        return tooltipRect;
    }
    seriesTooltipLocation(pointData, bounds, symbolLocation, arrowLocation, tipLocation) {
        let series = pointData.series;
        let location = new ChartLocation(symbolLocation.x, symbolLocation.y);
        if (series.type === 'RangeArea' && pointData.point.regions[0]) {
            if (!series.chart.requireInvertedAxis) {
                location.y = pointData.point.regions[0].y + pointData.point.regions[0].height / 2;
            }
            else {
                location.x = pointData.point.regions[0].x + pointData.point.regions[0].width / 2;
            }
        }
        let width = this.elementSize.width + (2 * this.padding);
        let height = this.elementSize.height + (2 * this.padding);
        let markerHeight = 0;
        if (!series.isRectSeries) {
            let chartSeries = pointData.series;
            markerHeight = (this.chart.tooltip.shared || chartSeries.marker.visible || series.type === 'Scatter'
                || chartSeries.drawType === 'Scatter') ? ((chartSeries.marker.height + 2) / 2 + (2 * chartSeries.marker.border.width)) : 0;
        }
        let clipX = this.chart.chartAreaType === 'PolarRadar' ? 0 : series.clipRect.x;
        let clipY = this.chart.chartAreaType === 'PolarRadar' ? 0 : series.clipRect.y;
        let boundsX = bounds.x;
        let boundsY = bounds.y;
        if (!this.inverted || !series.isRectSeries) {
            location.y = (series.type === 'Waterfall' && pointData.point.y < 0) ?
                location.y - pointData.point.regions[0].height : location.y;
            location = new ChartLocation(location.x + clipX - this.elementSize.width / 2 - this.padding, location.y + clipY - this.elementSize.height - (2 * this.padding) - this.arrowPadding - markerHeight);
            arrowLocation.x = tipLocation.x = width / 2;
            if (location.y < boundsY || (series.isRectSeries && pointData.point.y < 0 && series.type !== 'Waterfall')) {
                location.y = (symbolLocation.y < 0 ? 0 : symbolLocation.y) + clipY + markerHeight;
            }
            if (location.y + height + this.arrowPadding > boundsY + bounds.height) {
                location.y = (symbolLocation.y > bounds.height ? bounds.height : symbolLocation.y)
                    + clipY - this.elementSize.height - (2 * this.padding) - this.arrowPadding - markerHeight;
            }
            tipLocation.x = width / 2;
            if (location.x < boundsX) {
                arrowLocation.x -= (boundsX - location.x);
                tipLocation.x -= (boundsX - location.x);
                location.x = boundsX;
            }
            if (location.x + width > boundsX + bounds.width) {
                arrowLocation.x += ((location.x + width) - (boundsX + bounds.width));
                tipLocation.x += ((location.x + width) - (boundsX + bounds.width));
                location.x -= ((location.x + width) - (boundsX + bounds.width));
            }
            if (arrowLocation.x + this.arrowPadding / 2 > width - this.rx) {
                arrowLocation.x = width - this.rx - this.arrowPadding / 2;
                tipLocation.x = width;
                this.tipRadius = 0;
            }
            if (arrowLocation.x - this.arrowPadding / 2 < this.rx) {
                arrowLocation.x = this.rx + this.arrowPadding / 2;
                tipLocation.x = 0;
                this.tipRadius = 0;
            }
        }
        else {
            location.x = (series.type === 'Waterfall' && pointData.point.y < 0) ?
                location.x + pointData.point.regions[0].width : location.x;
            location = new ChartLocation(location.x + clipX + markerHeight, location.y + clipY - this.elementSize.height / 2 - (this.padding));
            arrowLocation.y = tipLocation.y = height / 2;
            if ((location.x + width + this.arrowPadding > boundsX + bounds.width) || (series.isRectSeries &&
                pointData.point.y < 0 && series.type !== 'Waterfall')) {
                location.x = (symbolLocation.x > bounds.width ? bounds.width : symbolLocation.x)
                    + clipX - markerHeight - (width + this.arrowPadding);
            }
            if (location.x < boundsX) {
                location.x = (symbolLocation.x < 0 ? 0 : symbolLocation.x) + clipX + markerHeight;
            }
            if (location.y <= boundsY) {
                arrowLocation.y -= (boundsY - location.y);
                tipLocation.y -= (boundsY - location.y);
                location.y = boundsY;
            }
            if (location.y + height >= boundsY + bounds.height) {
                arrowLocation.y += ((location.y + height) - (boundsY + bounds.height));
                tipLocation.y += ((location.y + height) - (boundsY + bounds.height));
                location.y -= ((location.y + height) - (boundsY + bounds.height));
            }
            if (arrowLocation.y + this.arrowPadding / 2 > height - this.ry) {
                arrowLocation.y = height - this.ry - this.arrowPadding / 2;
                tipLocation.y = height;
                this.tipRadius = 0;
            }
            if (arrowLocation.y - this.arrowPadding / 2 < this.ry) {
                arrowLocation.y = this.ry + this.arrowPadding / 2;
                tipLocation.y = 0;
                this.tipRadius = 0;
            }
        }
        return new Rect(location.x, location.y, width, height);
    }
    /*
   * @hidden
   */
    progressAnimation(element, tooltipGroup, series, opacity, rectOpacity, timeStamp, isRect, shared) {
        tooltipGroup.style.animation = '';
        tooltipGroup.setAttribute('opacity', (opacity - timeStamp).toString());
        if (element && isRect && !shared) {
            element.setAttribute('opacity', (rectOpacity + (rectOpacity * timeStamp)).toString());
        }
    }
    /*
     * @hidden
     */
    endAnimation(element, tooltipGroup, series, shared) {
        this.currentPoints = [];
        if (element && series.isRectSeries) {
            element.setAttribute('opacity', series.opacity.toString());
        }
        this.removeHighlight(this.control);
        tooltipGroup.setAttribute('opacity', '0');
        if (this.control.tooltip.template && !shared) {
            tooltipGroup.style.display = 'none';
        }
        this.isComplete = true;
        this.control.trigger('animationComplete', {});
    }
    removeHighlight(chart) {
        let item;
        let series;
        for (let i = 0, len = this.previousPoints.length; i < len; i++) {
            item = this.previousPoints[i];
            if (item.series.isRectSeries) {
                if (item.series.visible) {
                    this.highlightPoint(item.series, item.point.index, false);
                }
                continue;
            }
            series = item.series;
            if (!series.marker.visible && item.series.type !== 'Scatter' && item.series.type !== 'Bubble') {
                this.previousPoints.shift();
                len -= 1;
            }
        }
    }
    highlightPoint(series, pointIndex, highlight) {
        let element = this.getElement(this.element.id + '_Series_' + series.index + '_Point_' + pointIndex);
        if (element) {
            element.setAttribute('opacity', (highlight ? series.opacity / 2 : series.opacity).toString());
        }
    }
    highlightPoints(item) {
        if (item.series.isRectSeries) {
            this.highlightPoint(item.series, item.point.index, true);
            return null;
        }
    }
    animateTooltipDiv(tooltipDiv, rect) {
        let x = parseFloat(tooltipDiv.style.left);
        let y = parseFloat(tooltipDiv.style.top);
        let currenDiff;
        new Animation({}).animate(tooltipDiv, {
            duration: 300,
            progress: (args) => {
                currenDiff = (args.timeStamp / args.duration);
                tooltipDiv.style.animation = null;
                tooltipDiv.style.left = (x + currenDiff * (rect.x - x)) + 'px';
                tooltipDiv.style.top = (y + currenDiff * (rect.y - y)) + 'px';
            },
            end: (model) => {
                this.updateDiv(tooltipDiv, rect.x, rect.y);
            }
        });
    }
    updateDiv(tooltipDiv, x, y) {
        tooltipDiv.style.left = x + 'px';
        tooltipDiv.style.top = y + 'px';
    }
    triggerEvent(point, isFirst, textCollection, firstText = true) {
        let argsData = {
            cancel: false, name: tooltipRender, text: textCollection,
            point: point.point, series: point.series, textStyle: this.textStyle
        };
        this.chart.trigger(tooltipRender, argsData);
        if (!argsData.cancel) {
            if (point.series.type === 'BoxAndWhisker') {
                this.removeText();
                isFirst = true;
            }
            this.formattedText = this.formattedText.concat(argsData.text);
        }
        return !argsData.cancel;
    }
    removeText() {
        this.textElements = [];
        let element = this.getElement(this.element.id + '_tooltip_group');
        if (element.childNodes.length > 0) {
            while (element.lastChild && element.childNodes.length !== 1) {
                element.removeChild(element.lastChild);
            }
        }
    }
    updateTemplateFn(chart) {
        if (chart.tooltip.template) {
            try {
                if (document.querySelectorAll(chart.tooltip.template).length) {
                    this.templateFn = compile(document.querySelector(chart.tooltip.template).innerHTML.trim());
                }
            }
            catch (e) {
                this.templateFn = compile(chart.tooltip.template);
            }
        }
    }
    stopAnimation() {
        stopTimer(this.toolTipInterval);
    }
}
class Side {
    constructor(bottom, right) {
        this.isRight = right;
        this.isBottom = bottom;
    }
}

/**
 * `Tooltip` module is used to render the tooltip for chart series.
 */
class Tooltip extends BaseTooltip {
    /**
     * Constructor for tooltip module.
     * @private.
     */
    constructor(chart) {
        super(chart);
        this.addEventListener();
    }
    /**
     * @hidden
     */
    addEventListener() {
        if (this.chart.isDestroyed) {
            return;
        }
        let cancelEvent = Browser.isPointer ? 'pointerleave' : 'mouseleave';
        this.chart.on(cancelEvent, this.mouseLeaveHandler, this);
        this.chart.on('tapHold', this.longPress, this);
        this.chart.on(Browser.touchMoveEvent, this.mouseMoveHandler, this);
        this.chart.on(Browser.touchEndEvent, this.mouseUpHandler, this);
    }
    mouseUpHandler() {
        let chart = this.control;
        if (chart.isTouch && !this.isSelected(chart) &&
            ((withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect) && chart.tooltip.shared)
                || !chart.tooltip.shared)) {
            if (!chart.crosshair.enable) {
                this.tooltip();
                this.removeTooltip(2000);
            }
            else if (chart.startMove) {
                this.removeTooltip(2000);
            }
        }
    }
    mouseLeaveHandler() {
        this.removeTooltip(1000);
    }
    mouseMoveHandler() {
        let chart = this.chart;
        // Tooltip for chart series.
        if (!chart.disableTrackTooltip && !this.isSelected(chart)) {
            if (!chart.tooltip.shared && (!chart.isTouch || (chart.startMove))) {
                this.tooltip();
            }
            if (withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect)) {
                if (chart.tooltip.shared && (!chart.isTouch || (chart.startMove))) {
                    this.tooltip();
                }
            }
            else {
                if (chart.tooltip.shared) {
                    this.removeTooltip(1000);
                }
            }
        }
    }
    /**
     * Handles the long press on chart.
     * @return {boolean}
     * @private
     */
    longPress() {
        let chart = this.chart;
        if (chart.crosshair.enable && withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect)) {
            this.tooltip();
        }
        return false;
    }
    /**
     * Renders the tooltip.
     * @return {void}
     */
    tooltip() {
        let isTooltip = this.getElement(this.element.id + '_tooltip');
        let tooltipDiv = this.getTooltipElement(isTooltip);
        if (!this.chart.tooltip.shared) {
            this.renderSeriesTooltip(this.chart, !isTooltip, tooltipDiv);
        }
        else {
            this.renderGroupedTooltip(this.chart, !isTooltip, tooltipDiv);
        }
    }
    findHeader(data) {
        this.header = this.parseTemplate(data.point, data.series, this.header, data.series.xAxis, data.series.yAxis);
        if (this.header.replace(/<b>/g, '').replace(/<\/b>/g, '').trim() !== '') {
            this.formattedText = this.formattedText.concat(this.header);
        }
    }
    renderSeriesTooltip(chart, isFirst, tooltipDiv) {
        let data = this.getData();
        let markerSide;
        data.lierIndex = this.lierIndex;
        let rect = chart.chartAxisLayoutPanel.seriesClipRect;
        this.currentPoints = [];
        if (this.findData(data, this.previousPoints[0])) {
            if (this.pushData(data, isFirst, tooltipDiv, true)) {
                let text = this.getTooltipText(data);
                if (!chart.tooltip.template) {
                    if (this.header !== '') {
                        this.findHeader(data);
                    }
                    markerSide = this.renderTooltip(data, rect, this.getSymbolLocation(data), text, isFirst, chart.chartAreaType === 'Cartesian');
                    if (markerSide) {
                        this.drawMarker(markerSide.isBottom, markerSide.isRight, 10);
                    }
                }
                else {
                    this.renderTemplate(data, rect, this.getSymbolLocation(data), this.getTemplateText(data), isFirst);
                }
                this.isRemove = true;
            }
            this.previousPoints = extend([], this.currentPoints, null, true);
        }
        else {
            if (!data.point && this.isRemove) {
                this.removeTooltip(1000);
                this.isRemove = false;
            }
            else {
                for (let series of chart.visibleSeries) {
                    if (series.visible) {
                        data = this.getClosestX(chart, series) || data;
                    }
                }
            }
        }
        if (data && data.point) {
            this.findMouseValue(data, chart);
        }
    }
    findData(data, previous) {
        return data.point && ((!previous || (previous.point !== data.point)) ||
            (previous && previous.lierIndex > 3 && previous.lierIndex !== this.lierIndex));
    }
    getSymbolLocation(data) {
        return data.series.type === 'BoxAndWhisker' ?
            this.getBoxLocation(data) : data.point.symbolLocations[0];
    }
    getTooltipText(pointData) {
        let series = pointData.series;
        return this.parseTemplate(pointData.point, series, this.getFormat(this.chart, series), series.xAxis, series.yAxis);
    }
    getTemplateText(data) {
        let point = extend({}, data.point);
        point.x = this.formatPointValue(data.point, data.series.xAxis, 'x', true, false);
        if ((data.series.seriesType === 'XY')) {
            point.y = this.formatPointValue(data.point, data.series.yAxis, 'y', false, true);
        }
        else {
            point.low = this.formatPointValue(data.point, data.series.yAxis, 'low', false, true);
            point.high = this.formatPointValue(data.point, data.series.yAxis, 'high', false, true);
        }
        return point;
    }
    findMouseValue(data, chart) {
        if (!chart.requireInvertedAxis) {
            if (chart.chartAreaType === 'PolarRadar') {
                this.valueX = valueToPolarCoefficient(data.point.xValue, data.series.xAxis) * data.series.xAxis.rect.width
                    + data.series.xAxis.rect.x;
            }
            else {
                this.valueX = valueToCoefficient(data.point.xValue, data.series.xAxis) * data.series.xAxis.rect.width
                    + data.series.xAxis.rect.x;
            }
            this.valueY = chart.mouseY;
        }
        else {
            this.valueY = (1 - valueToCoefficient(data.point.xValue, data.series.xAxis)) * data.series.xAxis.rect.height
                + data.series.xAxis.rect.y;
            this.valueX = chart.mouseX;
        }
    }
    renderGroupedTooltip(chart, isFirst, tooltipDiv) {
        let data;
        let pointData = chart.chartAreaType === 'PolarRadar' ? this.getData() : null;
        this.stopAnimation();
        this.removeHighlight(chart);
        this.currentPoints = [];
        let extraPoints = [];
        let markerSide;
        if (isFirst) {
            document.getElementById(this.element.id + '_Secondary_Element').appendChild(tooltipDiv);
        }
        this.removeText();
        for (let series of chart.visibleSeries) {
            if (!series.enableTooltip) {
                continue;
            }
            if (chart.chartAreaType === 'Cartesian' && series.visible) {
                data = this.getClosestX(chart, series);
            }
            else if (chart.chartAreaType === 'PolarRadar' && series.visible && pointData.point !== null) {
                data = new PointData(series.points[pointData.point.index], series);
            }
            if (data && this.header !== '' && this.currentPoints.length === 0) {
                this.findHeader(data);
            }
            if (data && this.triggerEvent(data, isFirst, this.getTooltipText(data))) {
                if (series.category === 'Series') {
                    this.highlightPoints(data);
                }
                this.findMouseValue(data, chart);
                this.currentPoints.push(data);
                data = null;
            }
            else if (data) {
                extraPoints.push(data);
            }
        }
        if (this.currentPoints.length > 0) {
            this.renderText(isFirst, chart);
            markerSide = this.renderTooltipElement(chart, this.currentPoints[0], chart.chartAxisLayoutPanel.seriesClipRect, this.getSymbolLocation(this.currentPoints[0]), chart.chartAreaType === 'Cartesian', isFirst);
            this.drawMarker(markerSide.isBottom, markerSide.isRight, 10);
        }
        else {
            this.getElement(this.element.id + '_tooltip_path').setAttribute('d', '');
        }
        this.currentPoints = this.currentPoints.concat(extraPoints);
        this.previousPoints = extend([], this.currentPoints, null, true);
    }
    getBoxLocation(data) {
        let location;
        location = this.lierIndex > 3 ? data.point.symbolLocations[this.lierIndex - 4] :
            {
                x: data.point.regions[0].x + (data.point.regions[0].width / 2),
                y: data.point.regions[0].y + (data.point.regions[0].height / 2)
            };
        return location;
    }
    drawMarker(isBottom, isRight, size) {
        let shapeOption;
        let count = 0;
        let series;
        let markerGroup = this.chart.renderer.createGroup({ id: this.element.id + '_tooltip_trackball_group' });
        let groupElement = this.getElement(this.element.id + '_tooltip_group');
        let x = (this.padding * 2) + (size / 2) + (isRight ? this.arrowPadding : 0);
        for (let data of this.currentPoints) {
            series = data.series;
            if (series.visible && series.enableTooltip && data.point.visible) {
                shapeOption = new PathOption(this.element.id + '_Tooltip_Trackball_' + series.index, this.findColor(data, series) || series.interior, 1, '#cccccc', series.opacity, null);
                markerGroup.appendChild(drawSymbol(new ChartLocation(x, this.markerPoint[count] - this.padding + (isBottom ? this.arrowPadding : 0)), data.point.marker.shape || series.marker.shape, new Size(size, size), series.marker.imageUrl, shapeOption, null));
                count++;
            }
        }
        groupElement.appendChild(markerGroup);
    }
    findColor(data, series) {
        if (series.isRectSeries) {
            return data.point.color;
        }
        else {
            return (data.point.color && data.point.color !== '#ffffff' ? data.point.color : data.point.interior) || series.marker.fill;
        }
    }
    parseTemplate(point, series, format, xAxis, yAxis) {
        let val;
        let textValue;
        let chart = this.chart;
        for (let dataValue of Object.keys(point)) {
            val = new RegExp('${point' + '.' + dataValue + '}', 'gm');
            format = format.replace(val.source, this.formatPointValue(point, val.source === '${point.x}' ? xAxis : yAxis, dataValue, val.source === '${point.x}', (val.source === '${point.high}' ||
                val.source === '${point.open}' ||
                val.source === '${point.close}' ||
                val.source === '${point.low}' ||
                val.source === '${point.y}' ||
                val.source === '${point.minimum}' ||
                val.source === '${point.maximum}' ||
                val.source === '${point.outliers}' ||
                val.source === '${point.upperQuartile}' ||
                val.source === '${point.lowerQuartile}' ||
                val.source === '${point.median}')));
        }
        for (let dataValue of Object.keys(Object.getPrototypeOf(series))) {
            val = new RegExp('${series' + '.' + dataValue + '}', 'gm');
            textValue = series[dataValue];
            format = format.replace(val.source, textValue);
        }
        return format;
    }
    formatPointValue(point, axis, dataValue, isXPoint, isYPoint) {
        let textValue;
        let customLabelFormat;
        let value;
        if (axis.valueType !== 'Category' && isXPoint) {
            customLabelFormat = axis.labelFormat && axis.labelFormat.match('{value}') !== null;
            textValue = customLabelFormat ? axis.labelFormat.replace('{value}', axis.format(point[dataValue])) :
                axis.format(point[dataValue]);
        }
        else if (isYPoint) {
            customLabelFormat = axis.labelFormat && axis.labelFormat.match('{value}') !== null;
            value = dataValue === 'outliers' ? axis.format(point[dataValue][this.lierIndex - 4]) :
                axis.format(point[dataValue]);
            textValue = customLabelFormat ? axis.labelFormat.replace('{value}', value) : value;
        }
        else {
            textValue = point[dataValue];
        }
        return textValue;
    }
    getFormat(chart, series) {
        if (chart.tooltip.format) {
            if (series.seriesType === 'XY' && series.category === 'Indicator') {
                return this.getIndicatorTooltipFormat(series, chart, chart.tooltip.format);
            }
            return chart.tooltip.format;
        }
        let format = !chart.tooltip.shared ? '${point.x}' : '${series.name}';
        switch (series.seriesType) {
            case 'XY':
                if (series.category === 'Indicator') {
                    this.getIndicatorTooltipFormat(series, chart, chart.tooltip.format);
                }
                return format + ' : ' + ((series.type === 'Bubble') ? '<b>${point.y}</b>  Size : <b>${point.size}</b>'
                    : '<b>${point.y}</b>');
            case 'HighLow':
                return format + ('<br/>High : <b>${point.high}</b><br/>Low : <b>${point.low}</b>');
            case 'HighLowOpenClose':
                return format + ('<br/>High : <b>${point.high}</b><br/>Low : <b>${point.low}</b><br/>' +
                    'Open : <b>${point.open}</b><br/>Close : <b>${point.close}</b>');
            case 'BoxPlot': {
                return format + '<br/>' + (this.lierIndex > 3 ? 'Outliers : <b>${point.outliers}</b>' :
                    'Maximum : <b>${point.maximum}</b><br/>Q1 : <b>${point.upperQuartile}</b><br/>' +
                        'Median : <b>${point.median}</b><br/>Q3 : <b>${point.lowerQuartile}</b><br/>Minimum : <b>${point.minimum}</b>');
            }
        }
        return '';
    }
    getIndicatorTooltipFormat(series, chart, format) {
        let toolTip;
        if (series.seriesType === 'XY') {
            toolTip = series.name + ' : ${point.y}';
        }
        else {
            toolTip = format;
        }
        return toolTip;
    }
    /*
   * @hidden
   */
    removeHighlightedMarker(data) {
        for (let item of data) {
            removeElement(this.element.id + '_Series_' + item.series.index +
                '_Point_' + item.point.index + '_Trackball');
        }
        if (this.chart.markerRender) {
            this.chart.markerRender.removeHighlightedMarker();
        }
        this.previousPoints = [];
    }
    /**
     * Removes the tooltip on mouse leave.
     * @return {void}
     * @private
     */
    removeTooltip(duration) {
        let chart = this.chart;
        let tooltipElement = this.getElement(this.element.id + '_tooltip');
        this.stopAnimation();
        if (tooltipElement && this.previousPoints.length > 0) {
            let data = this.previousPoints;
            this.toolTipInterval = setTimeout(() => {
                let rectOpacity;
                let tooltipGroup = tooltipElement.firstChild;
                let series = data[0].series;
                let element = this.getElement(chart.element.id + '_Series_' + data[0].series.index
                    + '_Point_' + data[0].point.index);
                let opacity = parseFloat(tooltipGroup.getAttribute('opacity')) || 1;
                if (element && series.isRectSeries && !chart.tooltip.shared) {
                    rectOpacity = parseFloat(element.getAttribute('opacity'));
                }
                new Animation({}).animate(tooltipGroup, {
                    duration: 200,
                    progress: (args) => {
                        //  tooltipGroup.removeAttribute('e-animate');
                        this.progressAnimation(element, tooltipGroup, series, opacity, rectOpacity, (args.timeStamp / args.duration), series.isRectSeries, !chart.tooltip.shared);
                    },
                    end: (model) => {
                        this.valueX = null;
                        this.valueY = null;
                        this.endAnimation(element, tooltipGroup, series, chart.tooltip.shared);
                        this.removeHighlightedMarker(data);
                    }
                });
            }, duration);
        }
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name
         */
        return 'Tooltip';
    }
    /**
     * To destroy the tooltip.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * Zooming Toolkit created here
 * @private
 */
class Toolkit {
    /** @private */
    constructor(chart) {
        this.chart = chart;
        this.elementId = chart.element.id;
        this.selectionColor = '#ff4081';
        this.fillColor = '#737373';
    }
    /**
     * To create the pan button.
     * @return {void}
     * @private
     */
    createPanButton(childElement, parentElement, chart) {
        let render = this.chart.renderer;
        let fillColor = this.chart.zoomModule.isPanning ? this.selectionColor : this.fillColor;
        let direction = 'M5,3h2.3L7.275,5.875h1.4L8.65,3H11L8,0L5,3z M3,11V8.7l2.875,0.025v-1.4L3,7.35V5L0,8L3,';
        direction += '11z M11,13H8.7l0.025-2.875h-1.4L7.35,13H5l3,3L11,13z M13,5v2.3l-2.875-0.025v1.4L13,8.65V11l3-3L13,5z';
        childElement.id = this.elementId + '_Zooming_Pan';
        childElement.setAttribute('aria-label', this.chart.getLocalizedLabel('Pan'));
        this.panElements = childElement;
        childElement.appendChild(render.drawRectangle(new RectOption(this.elementId + '_Zooming_Pan_1', 'transparent', {}, 1, new Rect(0, 0, 16, 16))));
        childElement.appendChild(render.drawPath(new PathOption(this.elementId + '_Zooming_Pan_2', fillColor, null, null, 1, null, direction)));
        parentElement.appendChild(childElement);
        this.wireEvents(childElement, this.pan);
    }
    /**
     * To create the zoom button.
     * @return {void}
     * @private
     */
    createZoomButton(childElement, parentElement, chart) {
        let render = this.chart.renderer;
        let fillColor = this.chart.zoomModule.isPanning ? this.fillColor : this.selectionColor;
        let direction = 'M0.001,14.629L1.372,16l4.571-4.571v-0.685l0.228-0.274c1.051,0.868,2.423,1.417,3.885,1.417c3.291,0,';
        direction += '5.943-2.651,5.943-5.943S13.395,0,10.103,0S4.16,2.651,4.16,5.943c0,1.508,0.503,2.834,1.417,3.885l-0.274,0.228H4.571';
        direction = direction + 'L0.001,14.629L0.001,14.629z M5.943,5.943c0-2.285,1.828-4.114,4.114-4.114s4.114,1.828,4.114,';
        childElement.id = this.elementId + '_Zooming_Zoom';
        childElement.setAttribute('aria-label', this.chart.getLocalizedLabel('Zoom'));
        this.zoomElements = childElement;
        childElement.appendChild(render.drawRectangle(new RectOption(this.elementId + '_Zooming_Zoom_1', 'transparent', {}, 1, new Rect(0, 0, 16, 16))));
        childElement.appendChild(render.drawPath(new PathOption(this.elementId + '_Zooming_Zoom_3', fillColor, null, null, 1, null, direction + '4.114s-1.828,4.114-4.114,4.114S5.943,8.229,5.943,5.943z')));
        parentElement.appendChild(childElement);
        this.wireEvents(childElement, this.zoom);
    }
    /**
     * To create the ZoomIn button.
     * @return {void}
     * @private
     */
    createZoomInButton(childElement, parentElement, chart) {
        let render = this.chart.renderer;
        let fillColor = this.fillColor;
        let direction = 'M10.103,0C6.812,0,4.16,2.651,4.16,5.943c0,1.509,0.503,2.834,1.417,3.885l-0.274,0.229H4.571L0,';
        direction += '14.628l0,0L1.372,16l4.571-4.572v-0.685l0.228-0.275c1.052,0.868,2.423,1.417,3.885,1.417c3.291,0,5.943-2.651,';
        direction += '5.943-5.943C16,2.651,13.395,0,10.103,0z M10.058,10.058c-2.286,0-4.114-1.828-4.114-4.114c0-2.286,1.828-4.114,';
        childElement.id = this.elementId + '_Zooming_ZoomIn';
        childElement.setAttribute('aria-label', this.chart.getLocalizedLabel('ZoomIn'));
        let polygonDirection = '12.749,5.466 10.749,5.466 10.749,3.466 9.749,3.466 9.749,5.466 7.749,5.466 7.749,6.466';
        childElement.appendChild(render.drawRectangle(new RectOption(this.elementId + '_Zooming_ZoomIn_1', 'transparent', {}, 1, new Rect(0, 0, 16, 16))));
        childElement.appendChild(render.drawPath(new PathOption(this.elementId + '_Zooming_ZoomIn_2', fillColor, null, null, 1, null, direction + '4.114-4.114c2.286,0,4.114,1.828,4.114,4.114C14.172,8.229,12.344,10.058,10.058,10.058z')));
        childElement.appendChild(render.drawPolygon(new PolygonOption(this.elementId + '_Zooming_ZoomIn_3', polygonDirection + ' 9.749,6.466 9.749,8.466 10.749,8.466 10.749,6.466 12.749,6.466', fillColor)));
        this.zoomInElements = childElement;
        this.elementOpacity = chart.zoomModule.isPanning ? '0.2' : '1';
        childElement.setAttribute('opacity', this.elementOpacity);
        parentElement.appendChild(childElement);
        this.wireEvents(childElement, this.zoomIn);
    }
    /**
     * To create the ZoomOut button.
     * @return {void}
     * @private
     */
    createZoomOutButton(childElement, parentElement, chart) {
        let render = this.chart.renderer;
        let fillColor = this.fillColor;
        let direction = 'M0,14.622L1.378,16l4.533-4.533v-0.711l0.266-0.266c1.022,0.889,2.4,1.422,3.866,';
        direction += '1.422c3.289,0,5.955-2.666,5.955-5.955S13.333,0,10.044,0S4.089,2.667,4.134,5.911c0,1.466,0.533,2.844,';
        direction += '1.422,3.866l-0.266,0.266H4.578L0,14.622L0,14.622z M5.911,5.911c0-2.311,1.822-4.133,4.133-4.133s4.133,1.822,4.133,';
        childElement.id = this.elementId + '_Zooming_ZoomOut';
        childElement.setAttribute('aria-label', this.chart.getLocalizedLabel('ZoomOut'));
        childElement.appendChild(render.drawRectangle(new RectOption(this.elementId + '_Zooming_ZoomOut_1', 'transparent', {}, 1, new Rect(0, 0, 16, 16))));
        childElement.appendChild(render.drawPath(new PathOption(this.elementId + '_Zooming_ZoomOut_2', fillColor, null, null, 1, null, direction + '4.133s-1.866,4.133-4.133,4.133S5.911,8.222,5.911,5.911z M12.567,6.466h-5v-1h5V6.466z')));
        this.zoomOutElements = childElement;
        this.elementOpacity = chart.zoomModule.isPanning ? '0.2' : '1';
        childElement.setAttribute('opacity', this.elementOpacity);
        parentElement.appendChild(childElement);
        this.wireEvents(childElement, this.zoomOut);
    }
    /**
     * To create the Reset button.
     * @return {void}
     * @private
     */
    createResetButton(childElement, parentElement, chart, isDevice) {
        let render = this.chart.renderer;
        let fillColor = this.fillColor;
        let size;
        let direction = 'M12.364,8h-2.182l2.909,3.25L16,8h-2.182c0-3.575-2.618-6.5-5.818-6.5c-1.128,0-2.218,0.366-3.091,';
        direction += '1.016l1.055,1.178C6.581,3.328,7.272,3.125,8,3.125C10.4,3.125,12.363,5.319,12.364,8L12.364,8z M11.091,';
        direction += '13.484l-1.055-1.178C9.419,12.672,8.728,12.875,8,12.875c-2.4,0-4.364-2.194-4.364-4.875h2.182L2.909,4.75L0,8h2.182c0,';
        childElement.id = this.elementId + '_Zooming_Reset';
        childElement.setAttribute('aria-label', this.chart.getLocalizedLabel('Reset'));
        if (!isDevice) {
            childElement.appendChild(render.drawRectangle(new RectOption(this.elementId + '_Zooming_Reset_1', 'transparent', {}, 1, new Rect(0, 0, 16, 16))));
            childElement.appendChild(render.drawPath(new PathOption(this.elementId + '_Zooming_Reset_2', fillColor, null, null, 1, null, direction + '3.575,2.618,6.5,5.818,6.5C9.128,14.5,10.219,14.134,11.091,13.484L11.091,13.484z')));
        }
        else {
            size = measureText(this.chart.getLocalizedLabel('ResetZoom'), { size: '12px' });
            childElement.appendChild(render.drawRectangle(new RectOption(this.elementId + '_Zooming_Reset_1', 'transparent', {}, 1, new Rect(0, 0, size.width, size.height))));
            textElement(new TextOption(this.elementId + '_Zooming_Reset_2', 0 + size.width / 2, 0 + size.height * 3 / 4, 'middle', this.chart.getLocalizedLabel('ResetZoom'), 'rotate(0,' + (0) + ',' + (0) + ')', 'auto'), { size: '12px' }, 'black', childElement);
        }
        parentElement.appendChild(childElement);
        this.wireEvents(childElement, this.reset);
    }
    /**
     * To bind events.
     * @return {void}
     * @private
     */
    wireEvents(element, process) {
        EventHandler.add(element, 'mousedown touchstart', process, this);
        EventHandler.add(element, 'mouseover', this.showTooltip, this);
        EventHandler.add(element, 'mouseout', this.removeTooltip, this);
    }
    /**
     * To show tooltip.
     * @return {void}
     * @private
     */
    showTooltip(event) {
        let text = event.currentTarget.id.split('_Zooming_')[1];
        let left = (event.pageX - (measureText(text, { size: '10px' }).width + 5));
        if (!this.chart.isTouch) {
            createTooltip('EJ2_Chart_ZoomTip', this.chart.getLocalizedLabel(text), (event.pageY + 10), left, '10px');
        }
    }
    /** @private */
    removeTooltip() {
        removeElement('EJ2_Chart_ZoomTip');
    }
    // Toolkit events function calculation here.
    /** @private */
    reset() {
        let chart = this.chart;
        if (!chart.zoomModule.isDevice) {
            remove(chart.zoomModule.toolkitElements);
        }
        this.removeTooltip();
        chart.svgObject.setAttribute('cursor', 'auto');
        chart.axisCollections.forEach((axis) => {
            axis.zoomFactor = 1;
            axis.zoomPosition = 0;
        });
        chart.disableTrackTooltip = false;
        chart.zoomModule.isZoomed = chart.zoomModule.isPanning = chart.isChartDrag = chart.delayRedraw = false;
        chart.zoomModule.touchMoveList = chart.zoomModule.touchStartList = [];
        chart.zoomModule.pinchTarget = null;
        chart.removeSvg();
        chart.refreshAxis();
        chart.refreshBound();
        this.elementOpacity = '1';
        return false;
    }
    zoomIn(e) {
        this.zoomInOutCalculation(1, this.chart, this.chart.axisCollections, this.chart.zoomSettings.mode);
        return false;
    }
    zoomOut(e) {
        this.zoomInOutCalculation(-1, this.chart, this.chart.axisCollections, this.chart.zoomSettings.mode);
        return false;
    }
    zoom(e) {
        this.chart.zoomModule.isPanning = false;
        let zoomModule = this.chart.zoomModule;
        this.elementOpacity = '1';
        this.chart.svgObject.setAttribute('cursor', 'auto');
        this.zoomInElements.setAttribute('opacity', this.elementOpacity);
        this.zoomOutElements.setAttribute('opacity', this.elementOpacity);
        this.applySelection(this.zoomElements.childNodes, this.selectionColor);
        this.applySelection(this.panElements.childNodes, '#737373');
        return false;
    }
    /** @private */
    pan() {
        let zoomModule = this.chart.zoomModule;
        let element;
        this.chart.zoomModule.isPanning = true;
        this.chart.svgObject.setAttribute('cursor', 'pointer');
        this.elementOpacity = '0.2';
        element = this.zoomInElements ? this.zoomInElements.setAttribute('opacity', this.elementOpacity) : null;
        element = this.zoomOutElements ? this.zoomOutElements.setAttribute('opacity', this.elementOpacity) : null;
        element = this.panElements ? this.applySelection(this.panElements.childNodes, this.selectionColor) : null;
        element = this.zoomElements ? this.applySelection(this.zoomElements.childNodes, '#737373') : null;
        return false;
    }
    zoomInOutCalculation(scale, chart, axes, mode) {
        if (!chart.zoomModule.isPanning && this.elementOpacity !== '0.2') {
            let zoomFactor;
            let zoomPosition;
            let cumulative;
            chart.disableTrackTooltip = true;
            chart.delayRedraw = true;
            axes.forEach((axis) => {
                if ((axis.orientation === 'Horizontal' && mode !== 'Y') ||
                    (axis.orientation === 'Vertical' && mode !== 'X')) {
                    cumulative = Math.max(Math.max(1 / minMax(axis.zoomFactor, 0, 1), 1) + (0.25 * scale), 1);
                    zoomFactor = (cumulative === 1) ? 1 : minMax(1 / cumulative, 0, 1);
                    zoomPosition = (cumulative === 1) ? 0 : axis.zoomPosition + ((axis.zoomFactor - zoomFactor) * 0.5);
                    if (axis.zoomPosition !== zoomPosition || axis.zoomFactor !== zoomFactor) {
                        zoomFactor = (zoomPosition + zoomFactor) > 1 ? (1 - zoomPosition) : zoomFactor;
                    }
                    axis.zoomFactor = zoomFactor;
                    axis.zoomPosition = zoomPosition;
                }
            });
        }
    }
    applySelection(elements, color) {
        for (let i = 1, length = elements.length; i < length; i++) {
            elements[i].setAttribute('fill', color);
        }
    }
}

/**
 * `Zooming` module handles the zooming for chart.
 */
class Zoom {
    /**
     * Constructor for Zooming module.
     * @private.
     */
    constructor(chart) {
        this.chart = chart;
        this.isPointer = Browser.isPointer;
        this.browserName = Browser.info.name;
        this.wheelEvent = this.browserName === 'mozilla' ? (this.isPointer ? 'mousewheel' : 'DOMMouseScroll') : 'mousewheel';
        this.cancelEvent = this.isPointer ? 'pointerleave' : 'mouseleave';
        this.addEventListener();
        this.isDevice = Browser.isDevice;
        let zooming = chart.zoomSettings;
        this.toolkit = new Toolkit(chart);
        this.zooming = zooming;
        this.elementId = chart.element.id;
        this.zoomingRect = new Rect(0, 0, 0, 0);
        this.zoomAxes = [];
        this.zoomkitOpacity = 0.3;
        this.isIOS = Browser.isIos || Browser.isIos7;
        this.isZoomed = this.performedUI = this.zooming.enablePan && this.zooming.enableSelectionZooming;
    }
    /**
     * Function that handles the Rectangular zooming.
     * @return {void}
     */
    renderZooming(e, chart, isTouch) {
        this.calculateZoomAxesRange(chart, chart.axisCollections);
        if (this.zooming.enableSelectionZooming && (!isTouch
            || (chart.isDoubleTap && this.touchStartList.length === 1)) && (!this.isPanning || chart.isDoubleTap)) {
            this.isPanning = this.isDevice ? true : this.isPanning;
            this.performedUI = true;
            this.drawZoomingRectangle(chart);
        }
        else if (this.isPanning && chart.isChartDrag) {
            if (!isTouch || (isTouch && this.touchStartList.length === 1)) {
                this.pinchTarget = isTouch ? e.target : null;
                this.doPan(chart, chart.axisCollections);
            }
        }
    }
    // Zooming rectangle drawn here
    drawZoomingRectangle(chart) {
        let areaBounds = chart.chartAxisLayoutPanel.seriesClipRect;
        let startLocation = new ChartLocation(chart.previousMouseMoveX, chart.previousMouseMoveY);
        let endLocation = new ChartLocation(chart.mouseX, chart.mouseY);
        let rect = this.zoomingRect = getRectLocation(startLocation, endLocation, areaBounds);
        if (rect.width > 0 && rect.height > 0) {
            this.isZoomed = true;
            chart.disableTrackTooltip = true;
            chart.svgObject.setAttribute('cursor', 'crosshair');
            if (this.zooming.mode === 'X') {
                rect.height = areaBounds.height;
                rect.y = areaBounds.y;
            }
            else if (this.zooming.mode === 'Y') {
                rect.width = areaBounds.width;
                rect.x = areaBounds.x;
            }
            chart.svgObject.appendChild(chart.renderer.drawRectangle(new RectOption(this.elementId + '_ZoomArea', chart.themeStyle.selectionRectFill, { color: chart.themeStyle.selectionRectStroke, width: 1 }, 1, rect, 0, 0, '', '3')));
        }
    }
    // Panning performed here
    doPan(chart, axes) {
        if (chart.startMove && chart.crosshair.enable) {
            return null;
        }
        let currentScale;
        let offset;
        this.isZoomed = true;
        let translateX;
        let translateY;
        this.offset = !chart.delayRedraw ? chart.chartAxisLayoutPanel.seriesClipRect : this.offset;
        chart.delayRedraw = true;
        chart.disableTrackTooltip = true;
        axes.forEach((axis) => {
            currentScale = Math.max(1 / minMax(axis.zoomFactor, 0, 1), 1);
            if (axis.orientation === 'Horizontal') {
                offset = (chart.previousMouseMoveX - chart.mouseX) / axis.rect.width / currentScale;
                axis.zoomPosition = minMax(axis.zoomPosition + offset, 0, (1 - axis.zoomFactor));
            }
            else {
                offset = (chart.previousMouseMoveY - chart.mouseY) / axis.rect.height / currentScale;
                axis.zoomPosition = minMax(axis.zoomPosition - offset, 0, (1 - axis.zoomFactor));
            }
        });
        if (this.zooming.enableDeferredZooming) {
            translateX = chart.mouseX - chart.mouseDownX;
            translateY = chart.mouseY - chart.mouseDownY;
            switch (this.zooming.mode) {
                case 'X':
                    translateY = 0;
                    break;
                case 'Y':
                    translateX = 0;
                    break;
            }
            this.setTransform(translateX, translateY, null, null, chart, false);
            this.refreshAxis(chart.chartAxisLayoutPanel, chart, chart.axisCollections);
        }
        else {
            this.performZoomRedraw(chart);
        }
        chart.previousMouseMoveX = chart.mouseX;
        chart.previousMouseMoveY = chart.mouseY;
    }
    /**
     * Redraw the chart on zooming.
     * @return {void}
     * @private
     */
    performZoomRedraw(chart) {
        let rect = this.zoomingRect;
        chart.animateSeries = false;
        if (this.isZoomed) {
            if (rect.width > 0 && rect.height > 0) {
                this.performedUI = true;
                chart.svgObject.setAttribute('cursor', 'auto');
                this.doZoom(chart, chart.axisCollections, chart.chartAxisLayoutPanel.seriesClipRect);
                chart.isDoubleTap = false;
            }
            else if (chart.disableTrackTooltip) {
                chart.disableTrackTooltip = false;
                chart.delayRedraw = false;
                chart.removeSvg();
                chart.refreshAxis();
                chart.refreshBound();
            }
        }
    }
    refreshAxis(layout, chart, axes) {
        let mode = chart.zoomSettings.mode;
        layout.measureAxis(new Rect(chart.initialClipRect.x, chart.initialClipRect.y, chart.initialClipRect.width, chart.initialClipRect.height));
        axes.map((axis, index) => {
            if (axis.orientation === 'Horizontal' && mode !== 'Y') {
                layout.drawXAxisLabels(axis, index, null, (axis.placeNextToAxisLine ? axis.updatedRect : axis.rect));
            }
            if (axis.orientation === 'Vertical' && mode !== 'X') {
                layout.drawYAxisLabels(axis, index, null, (axis.placeNextToAxisLine ? axis.updatedRect : axis.rect));
            }
        });
    }
    // Rectangular zoom calculated here performed here
    doZoom(chart, axes, bounds) {
        let zoomRect = this.zoomingRect;
        let mode = this.zooming.mode;
        let argsData;
        let previousZF;
        let previousZP;
        let currentZF;
        let currentZP;
        this.isPanning = chart.zoomSettings.enablePan || this.isPanning;
        axes.forEach((axis) => {
            previousZF = currentZF = axis.zoomFactor;
            previousZP = currentZP = axis.zoomPosition;
            argsData = {
                cancel: false, name: zoomComplete, axis: axis, previousZoomFactor: previousZF, previousZoomPosition: previousZP,
                currentZoomFactor: currentZF, currentZoomPosition: currentZP
            };
            if (axis.orientation === 'Horizontal') {
                if (mode !== 'Y') {
                    currentZP += Math.abs((zoomRect.x - bounds.x) / (bounds.width)) * axis.zoomFactor;
                    currentZF *= (zoomRect.width / bounds.width);
                    argsData.currentZoomPosition = currentZP;
                    argsData.currentZoomFactor = currentZF;
                    chart.trigger(zoomComplete, argsData);
                }
            }
            else {
                if (mode !== 'X') {
                    currentZP += (1 - Math.abs((zoomRect.height + (zoomRect.y - bounds.y)) / (bounds.height))) * axis.zoomFactor;
                    currentZF *= (zoomRect.height / bounds.height);
                    argsData.currentZoomFactor = currentZF;
                    argsData.currentZoomPosition = currentZP;
                    chart.trigger(zoomComplete, argsData);
                }
            }
            if (!argsData.cancel) {
                axis.zoomFactor = argsData.currentZoomFactor;
                axis.zoomPosition = argsData.currentZoomPosition;
            }
        });
        this.zoomingRect = new Rect(0, 0, 0, 0);
        this.performZoomRedraw(chart);
    }
    /**
     * Function that handles the Mouse wheel zooming.
     * @return {void}
     * @private
     */
    performMouseWheelZooming(e, mouseX, mouseY, chart, axes) {
        let direction = (this.browserName === 'mozilla' && !this.isPointer) ?
            -(e.detail) / 3 > 0 ? 1 : -1 : (e.wheelDelta / 120) > 0 ? 1 : -1;
        let mode = this.zooming.mode;
        let origin = 0.5;
        let cumulative;
        let zoomFactor;
        let zoomPosition;
        this.isZoomed = true;
        this.calculateZoomAxesRange(chart, chart.axisCollections);
        chart.disableTrackTooltip = true;
        this.performedUI = true;
        this.isPanning = chart.zoomSettings.enablePan || this.isPanning;
        axes.forEach((axis) => {
            if ((axis.orientation === 'Vertical' && mode !== 'X') ||
                (axis.orientation === 'Horizontal' && mode !== 'Y')) {
                cumulative = Math.max(Math.max(1 / minMax(axis.zoomFactor, 0, 1), 1) + (0.25 * direction), 1);
                if (cumulative >= 1) {
                    origin = axis.orientation === 'Horizontal' ? mouseX / axis.rect.width : 1 - (mouseY / axis.rect.height);
                    origin = origin > 1 ? 1 : origin < 0 ? 0 : origin;
                    zoomFactor = (cumulative === 1) ? 1 : minMax(1 / cumulative, 0, 1);
                    zoomPosition = (cumulative === 1) ? 0 : axis.zoomPosition + ((axis.zoomFactor - zoomFactor) * origin);
                    if (axis.zoomPosition !== zoomPosition || axis.zoomFactor !== zoomFactor) {
                        zoomFactor = (zoomPosition + zoomFactor) > 1 ? (1 - zoomPosition) : zoomFactor;
                    }
                }
                axis.zoomFactor = zoomFactor;
                axis.zoomPosition = zoomPosition;
            }
        });
        this.performZoomRedraw(chart);
    }
    /**
     * Function that handles the Pinch zooming.
     * @return {void}
     * @private
     */
    performPinchZooming(e, chart) {
        if ((this.zoomingRect.width > 0 && this.zoomingRect.height > 0) || (chart.startMove && chart.crosshair.enable)) {
            return false;
        }
        this.calculateZoomAxesRange(chart, chart.axisCollections);
        this.isZoomed = true;
        this.isPanning = true;
        this.performedUI = true;
        this.offset = !chart.delayRedraw ? chart.chartAxisLayoutPanel.seriesClipRect : this.offset;
        chart.delayRedraw = true;
        chart.disableTrackTooltip = true;
        let elementOffset = chart.element.getBoundingClientRect();
        let touchDown = this.touchStartList;
        let touchMove = this.touchMoveList;
        let touch0StartX = touchDown[0].pageX - elementOffset.left;
        let touch0StartY = touchDown[0].pageY - elementOffset.top;
        let touch0EndX = touchMove[0].pageX - elementOffset.left;
        let touch0EndY = touchMove[0].pageY - elementOffset.top;
        let touch1StartX = touchDown[1].pageX - elementOffset.left;
        let touch1StartY = touchDown[1].pageY - elementOffset.top;
        let touch1EndX = touchMove[1].pageX - elementOffset.left;
        let touch1EndY = touchMove[1].pageY - elementOffset.top;
        let scaleX;
        let scaleY;
        let translateXValue;
        let translateYValue;
        let pinchRect;
        let clipX;
        let clipY;
        scaleX = Math.abs(touch0EndX - touch1EndX) / Math.abs(touch0StartX - touch1StartX);
        scaleY = Math.abs(touch0EndY - touch1EndY) / Math.abs(touch0StartY - touch1StartY);
        clipX = ((this.offset.x - touch0EndX) / scaleX) + touch0StartX;
        clipY = ((this.offset.y - touch0EndY) / scaleY) + touch0StartY;
        pinchRect = new Rect(clipX, clipY, this.offset.width / scaleX, this.offset.height / scaleY);
        translateXValue = (touch0EndX - (scaleX * touch0StartX));
        translateYValue = (touch0EndY - (scaleY * touch0StartY));
        if (!isNaN(scaleX - scaleX) && !isNaN(scaleY - scaleY)) {
            switch (this.zooming.mode) {
                case 'XY':
                    this.setTransform(translateXValue, translateYValue, scaleX, scaleY, chart, true);
                    break;
                case 'X':
                    this.setTransform(translateXValue, 0, scaleX, 1, chart, true);
                    break;
                case 'Y':
                    this.setTransform(0, translateYValue, 1, scaleY, chart, true);
                    break;
            }
        }
        this.calculatePinchZoomFactor(chart, pinchRect);
        this.refreshAxis(chart.chartAxisLayoutPanel, chart, chart.axisCollections);
        return true;
    }
    calculatePinchZoomFactor(chart, pinchRect) {
        let mode = this.zooming.mode;
        let selectionMin;
        let selectionMax;
        let rangeMin;
        let rangeMax;
        let value;
        let axisTrans;
        chart.axisCollections.forEach((axis, index) => {
            if ((axis.orientation === 'Horizontal' && mode !== 'Y') ||
                (axis.orientation === 'Vertical' && mode !== 'X')) {
                if (axis.orientation === 'Horizontal') {
                    value = pinchRect.x - this.offset.x;
                    axisTrans = axis.rect.width / this.zoomAxes[index].delta;
                    rangeMin = value / axisTrans + this.zoomAxes[index].min;
                    value = pinchRect.x + pinchRect.width - this.offset.x;
                    rangeMax = value / axisTrans + this.zoomAxes[index].min;
                }
                else {
                    value = pinchRect.y - this.offset.y;
                    axisTrans = axis.rect.height / this.zoomAxes[index].delta;
                    rangeMin = (value * -1 + axis.rect.height) / axisTrans + this.zoomAxes[index].min;
                    value = pinchRect.y + pinchRect.height - this.offset.y;
                    rangeMax = (value * -1 + axis.rect.height) / axisTrans + this.zoomAxes[index].min;
                }
                selectionMin = Math.min(rangeMin, rangeMax);
                selectionMax = Math.max(rangeMin, rangeMax);
                axis.zoomPosition = (selectionMin - this.zoomAxes[index].actualMin) / this.zoomAxes[index].actualDelta;
                axis.zoomFactor = (selectionMax - selectionMin) / this.zoomAxes[index].actualDelta;
                axis.zoomPosition = axis.zoomPosition < 0 ? 0 : axis.zoomPosition;
                axis.zoomFactor = axis.zoomFactor > 1 ? 1 : axis.zoomFactor;
            }
        });
    }
    // Series transformation style applied here.
    setTransform(transX, transY, scaleX, scaleY, chart, isPinch) {
        chart.seriesElements.setAttribute('clip-path', 'url(#' + this.elementId + '_ChartAreaClipRect_)');
        if (chart.indicatorElements) {
            chart.indicatorElements.setAttribute('clip-path', 'url(#' + this.elementId + '_ChartAreaClipRect_)');
        }
        let translate;
        let xAxisLoc;
        let yAxisLoc;
        let element;
        if (transX !== null && transY !== null) {
            chart.visibleSeries.forEach((value) => {
                xAxisLoc = chart.requireInvertedAxis ? value.yAxis.rect.x : value.xAxis.rect.x;
                yAxisLoc = chart.requireInvertedAxis ? value.xAxis.rect.y : value.yAxis.rect.y;
                translate = 'translate(' + (transX + (isPinch ? (scaleX * xAxisLoc) : xAxisLoc)) +
                    ',' + (transY + (isPinch ? (scaleY * yAxisLoc) : yAxisLoc)) + ')';
                translate = (scaleX || scaleY) ? translate + ' scale(' + scaleX + ' ' + scaleY + ')' : translate;
                if (value.category === 'Indicator') {
                    value.seriesElement.parentElement.setAttribute('transform', translate);
                }
                else {
                    value.seriesElement.setAttribute('transform', translate);
                }
                element = getElement(chart.element.id + '_Series_' + value.index + '_DataLabelCollections');
                if (value.errorBarElement) {
                    value.errorBarElement.setAttribute('transform', translate);
                }
                if (value.symbolElement) {
                    value.symbolElement.setAttribute('transform', translate);
                }
                if (value.textElement) {
                    value.textElement.setAttribute('visibility', 'hidden');
                    value.shapeElement.setAttribute('visibility', 'hidden');
                }
                if (element) {
                    element.style.visibility = 'hidden';
                }
            });
        }
    }
    calculateZoomAxesRange(chart, axes) {
        let range;
        let axisRange;
        chart.axisCollections.forEach((axis, index) => {
            axisRange = axis.visibleRange;
            if (this.zoomAxes[index]) {
                if (!chart.delayRedraw) {
                    this.zoomAxes[index].min = axisRange.min;
                    this.zoomAxes[index].delta = axisRange.delta;
                }
            }
            else {
                range = {
                    actualMin: axis.actualRange.min,
                    actualDelta: axis.actualRange.delta,
                    min: axisRange.min,
                    delta: axisRange.delta
                };
                this.zoomAxes[index] = range;
            }
        });
    }
    // Zooming Toolkit created here
    showZoomingToolkit(chart) {
        let toolboxItems = this.zooming.toolbarItems;
        let areaBounds = chart.chartAxisLayoutPanel.seriesClipRect;
        let spacing = 5;
        let render = chart.renderer;
        let length = this.isDevice ? 1 : toolboxItems.length;
        let iconSize = this.isDevice ? measureText('Reset Zoom', { size: '12px' }).width : 16;
        let height = this.isDevice ? measureText('Reset Zoom', { size: '12px' }).height : 22;
        let width = (length * iconSize) + ((length + 1) * spacing) + ((length - 1) * spacing);
        let transX = areaBounds.x + areaBounds.width - width - spacing;
        let transY = (areaBounds.y + spacing);
        let xPosition = spacing;
        let outerElement;
        let toolkit = this.toolkit;
        let element;
        let shadowElement = '<filter id="chart_shadow" height="130%"><feGaussianBlur in="SourceAlpha" stdDeviation="5"/>';
        shadowElement += '<feOffset dx="-3" dy="4" result="offsetblur"/><feComponentTransfer><feFuncA type="linear" slope="1"/>';
        shadowElement += '</feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
        if (length === 0 || getElement(this.elementId + '_Zooming_KitCollection')) {
            return false;
        }
        let defElement = render.createDefs();
        toolboxItems = this.isDevice ? ['Reset'] : toolboxItems;
        defElement.innerHTML = shadowElement;
        this.toolkitElements = render.createGroup({
            id: this.elementId + '_Zooming_KitCollection',
            transform: 'translate(' + transX + ',' + transY + ')'
        });
        this.toolkitElements.appendChild(defElement);
        this.toolkitElements.appendChild(render.drawRectangle(new RectOption(this.elementId + '_Zooming_Rect', '#fafafa', { color: 'transparent', width: 1 }, 1, new Rect(0, 0, width, (height + (spacing * 2))), 0, 0)));
        outerElement = render.drawRectangle(new RectOption(this.elementId + '_Zooming_Rect', '#fafafa', { color: 'transparent', width: 1 }, 0.1, new Rect(0, 0, width, (height + (spacing * 2))), 0, 0));
        outerElement.setAttribute('filter', 'url(#chart_shadow)');
        this.toolkitElements.appendChild(outerElement);
        let currentItem;
        for (let i = 1; i <= length; i++) {
            currentItem = toolboxItems[i - 1];
            element = render.createGroup({
                transform: 'translate(' + xPosition + ',' + (this.isDevice ? spacing : (spacing + 3)) + ')'
            });
            // for desktop toolkit hight is 32 and top padding is 8 icon size 16
            switch (currentItem) {
                case 'Pan':
                    toolkit.createPanButton(element, this.toolkitElements, chart);
                    break;
                case 'Zoom':
                    toolkit.createZoomButton(element, this.toolkitElements, chart);
                    break;
                case 'ZoomIn':
                    toolkit.createZoomInButton(element, this.toolkitElements, chart);
                    break;
                case 'ZoomOut':
                    toolkit.createZoomOutButton(element, this.toolkitElements, chart);
                    break;
                case 'Reset':
                    toolkit.createResetButton(element, this.toolkitElements, chart, this.isDevice);
                    break;
            }
            xPosition += iconSize + (spacing * 2);
        }
        this.toolkitElements.setAttribute('opacity', this.isDevice ? '1' : '' + this.zoomkitOpacity);
        this.toolkitElements.setAttribute('cursor', 'auto');
        chart.svgObject.appendChild(this.toolkitElements);
        if (!this.isDevice) {
            EventHandler.add(this.toolkitElements, 'mousemove touchstart', this.zoomToolkitMove, this);
            EventHandler.add(this.toolkitElements, 'mouseleave touchend', this.zoomToolkitLeave, this);
            if (this.isPanning) {
                toolkit.pan();
            }
        }
        return true;
    }
    /**
     * To the show the zooming toolkit.
     * @return {void}
     * @private
     */
    applyZoomToolkit(chart, axes) {
        let showToolkit = this.isAxisZoomed(axes);
        if (showToolkit) {
            this.showZoomingToolkit(chart);
            this.isZoomed = true;
        }
        else {
            this.toolkit.removeTooltip();
            this.isPanning = false;
            this.isZoomed = false;
            chart.svgObject.setAttribute('cursor', 'auto');
        }
    }
    /**
     * Return boolean property to show zooming toolkit.
     * @return {void}
     * @private
     */
    isAxisZoomed(axes) {
        let showToolkit = false;
        axes.forEach((axis) => {
            showToolkit = (showToolkit || (axis.zoomFactor !== 1 || axis.zoomPosition !== 0));
        });
        return showToolkit;
    }
    zoomToolkitMove(e) {
        let element = this.toolkitElements;
        let opacity = +element.getAttribute('opacity');
        this.zoomkitOpacity = 1;
        element.setAttribute('opacity', '' + this.zoomkitOpacity);
        return false;
    }
    zoomToolkitLeave(e) {
        let element = this.toolkitElements;
        this.zoomkitOpacity = 0.3;
        element.setAttribute('opacity', '' + this.zoomkitOpacity);
        return false;
    }
    /**
     * @hidden
     */
    addEventListener() {
        if (this.chart.isDestroyed) {
            return;
        }
        EventHandler.add(this.chart.element, this.wheelEvent, this.chartMouseWheel, this);
        this.chart.on(Browser.touchMoveEvent, this.mouseMoveHandler, this);
        this.chart.on(Browser.touchStartEvent, this.mouseDownHandler, this);
        this.chart.on(Browser.touchEndEvent, this.mouseUpHandler, this);
        this.chart.on(this.cancelEvent, this.mouseCancelHandler, this);
    }
    /**
     * @hidden
     */
    removeEventListener() {
        if (this.chart.isDestroyed) {
            return;
        }
        EventHandler.remove(this.chart.element, this.wheelEvent, this.chartMouseWheel);
        this.chart.off(Browser.touchMoveEvent, this.mouseMoveHandler);
        this.chart.off(Browser.touchStartEvent, this.mouseDownHandler);
        this.chart.off(Browser.touchEndEvent, this.mouseUpHandler);
        this.chart.off(this.cancelEvent, this.mouseCancelHandler);
    }
    /**
     * Handles the mouse wheel on chart.
     * @return {boolean}
     * @private
     */
    chartMouseWheel(e) {
        let chart = this.chart;
        let offset = chart.element.getBoundingClientRect();
        let svgRect = getElement(chart.element.id + '_svg').getBoundingClientRect();
        let mouseX = (e.clientX - offset.left) - Math.max(svgRect.left - offset.left, 0);
        let mouseY = (e.clientY - offset.top) - Math.max(svgRect.top - offset.top, 0);
        if (this.zooming.enableMouseWheelZooming &&
            withInBounds(mouseX, mouseY, chart.chartAxisLayoutPanel.seriesClipRect)) {
            e.preventDefault();
            this.performMouseWheelZooming(e, mouseX, mouseY, chart, chart.axisCollections);
        }
        return false;
    }
    /**
     * @hidden
     */
    mouseMoveHandler(e) {
        //Zooming for chart
        let chart = this.chart;
        let touches = null;
        if (e.type === 'touchmove') {
            if (e.preventDefault && this.isIOS &&
                (this.isPanning || (chart.isDoubleTap)
                    || (this.zooming.enablePinchZooming && this.touchStartList.length > 1))) {
                e.preventDefault();
            }
            touches = e.touches;
        }
        if (chart.isChartDrag) {
            if (chart.isTouch) {
                this.touchMoveList = this.addTouchPointer(this.touchMoveList, e, touches);
                if (this.zooming.enablePinchZooming && this.touchMoveList.length > 1
                    && this.touchStartList.length > 1) {
                    this.performPinchZooming(e, chart);
                }
            }
            this.renderZooming(e, chart, chart.isTouch);
        }
    }
    /**
     * @hidden
     */
    mouseDownHandler(e) {
        //Zooming for chart
        let chart = this.chart;
        let touches = null;
        let target;
        if (e.type === 'touchstart') {
            touches = e.touches;
            target = e.target;
        }
        else {
            target = e.target;
        }
        if (target.id.indexOf(chart.element.id + '_Zooming_') === -1 &&
            withInBounds(chart.previousMouseMoveX, chart.previousMouseMoveY, chart.chartAxisLayoutPanel.seriesClipRect)) {
            chart.isChartDrag = true;
        }
        if (chart.isTouch) {
            this.touchStartList = this.addTouchPointer(this.touchStartList, e, touches);
        }
    }
    /**
     * @hidden
     */
    mouseUpHandler(e) {
        let chart = this.chart;
        let performZoomRedraw = e.target.id.indexOf(chart.element.id + '_ZoomOut_') === -1 ||
            e.target.id.indexOf(chart.element.id + '_ZoomIn_') === -1;
        if (chart.isChartDrag || performZoomRedraw) {
            this.performZoomRedraw(chart);
        }
        if (chart.isTouch) {
            if (chart.isDoubleTap && withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect)
                && this.touchStartList.length === 1 && this.isZoomed) {
                this.toolkit.reset();
            }
            this.touchStartList = [];
            chart.isDoubleTap = false;
        }
    }
    /**
     * @hidden
     */
    mouseCancelHandler(e) {
        if (this.isZoomed) {
            this.performZoomRedraw(this.chart);
        }
        this.pinchTarget = null;
        this.touchStartList = [];
        this.touchMoveList = [];
    }
    /**
     * Handles the touch pointer.
     * @return {boolean}
     * @private
     */
    addTouchPointer(touchList, e, touches) {
        if (touches) {
            touchList = [];
            for (let i = 0, length = touches.length; i < length; i++) {
                touchList.push({ pageX: touches[i].clientX, pageY: touches[i].clientY, pointerId: null });
            }
        }
        else {
            touchList = touchList ? touchList : [];
            if (touchList.length === 0) {
                touchList.push({ pageX: e.clientX, pageY: e.clientY, pointerId: e.pointerId });
            }
            else {
                for (let i = 0, length = touchList.length; i < length; i++) {
                    if (touchList[i].pointerId === e.pointerId) {
                        touchList[i] = { pageX: e.clientX, pageY: e.clientY, pointerId: e.pointerId };
                    }
                    else {
                        touchList.push({ pageX: e.clientX, pageY: e.clientY, pointerId: e.pointerId });
                    }
                }
            }
        }
        return touchList;
    }
    /**
     * Get module name.
     */
    getModuleName() {
        // Returns te module name
        return 'Zoom';
    }
    /**
     * To destroy the zooming.
     * @return {void}
     * @private
     */
    destroy(chart) {
        // Destroy method performed here
        this.removeEventListener();
    }
}

/**
 * Selection Module handles the selection for chart.
 * @private
 */
class BaseSelection {
    constructor(control) {
        this.control = control;
    }
    /**
     * To create selection styles for series
     */
    seriesStyles() {
        let seriesclass;
        let style = document.getElementById(this.styleId);
        if (isNullOrUndefined(style)) {
            style = document.createElement('style');
            style.setAttribute('id', this.styleId);
            for (let series of this.control.visibleSeries) {
                seriesclass = series.selectionStyle || this.styleId + '_series_' + series.index;
                style.innerHTML += series.selectionStyle ? '' : '.' + seriesclass + ' { } ';
            }
            style.innerHTML += '.' + this.unselected + ' { opacity:' + (0.3) + ';} ';
            document.body.appendChild(style);
        }
    }
    /**
     * To concat indexes
     */
    concatIndexes(userIndexes, localIndexes) {
        return userIndexes.concat(localIndexes);
    }
    /**
     * Selected points series visibility checking on legend click
     */
    checkVisibility(selectedIndexes) {
        let visible = false;
        let uniqueSeries = [];
        for (let index of selectedIndexes) {
            if (uniqueSeries.indexOf(index.series) === -1) {
                uniqueSeries.push(index.series);
            }
        }
        for (let index of uniqueSeries) {
            if (this.control.series[index].visible) {
                visible = true;
                break;
            }
        }
        return visible;
    }
    /**
     * To add svg element style class
     * @private
     */
    addSvgClass(element, className) {
        let elementClassName = element.getAttribute('class') || '';
        elementClassName += ((elementClassName !== '') ? ' ' : '');
        if (elementClassName.indexOf(className) === -1) {
            element.setAttribute('class', elementClassName + className);
        }
    }
    /**
     * To remove svg element style class
     * @private
     */
    removeSvgClass(element, className) {
        let elementClassName = element.getAttribute('class') || '';
        if (elementClassName.indexOf(className) > -1) {
            element.setAttribute('class', elementClassName.replace(className, ''));
        }
    }
    /**
     * To get children from parent element
     */
    getChildren(parent) {
        let children = [];
        for (let i = 0; i < parent.childNodes.length; i++) {
            if (parent.childNodes[i].tagName !== 'defs') {
                children.push(parent.childNodes[i]);
            }
        }
        return children;
    }
}

/**
 * Selection src file
 */
/**
 * `Selection` module handles the selection for chart.
 * @private
 */
class Selection extends BaseSelection {
    /**
     * Constructor for selection module.
     * @private.
     */
    constructor(chart) {
        super(chart);
        this.chart = chart;
        this.renderer = chart.renderer;
        this.addEventListener();
    }
    /**
     * Binding events for selection module.
     */
    addEventListener() {
        if (this.chart.isDestroyed) {
            return;
        }
        let cancelEvent = Browser.isPointer ? 'pointerleave' : 'mouseleave';
        this.chart.on(Browser.touchMoveEvent, this.mouseMove, this);
        this.chart.on(cancelEvent, this.completeSelection, this);
        this.chart.on('click', this.calculateSelectedElements, this);
        this.chart.on(Browser.touchStartEvent, this.mousedown, this);
        this.chart.on(Browser.touchEndEvent, this.completeSelection, this);
    }
    /**
     * Chart mouse down
     */
    mousedown(e) {
        let chart = this.chart;
        if (chart.selectionMode === 'None' || chart.isChartDrag) {
            return;
        }
        if (chart.isDoubleTap || !chart.isTouch || this.rectPoints) {
            this.dragStart(chart, chart.chartAxisLayoutPanel.seriesClipRect, chart.mouseDownX, chart.mouseDownY, e);
        }
    }
    /**
     * UnBinding events for selection module.
     */
    removeEventListener() {
        if (this.chart.isDestroyed) {
            return;
        }
        this.chart.off(Browser.touchMoveEvent, this.mouseMove);
        this.chart.off('pointerleave' || 'mouseleave', this.completeSelection);
        this.chart.off('click', this.calculateSelectedElements);
        this.chart.off(Browser.touchStartEvent, this.mousedown);
        this.chart.off(Browser.touchEndEvent, this.completeSelection);
    }
    /**
     * To find private variable values
     */
    initPrivateVariables(chart) {
        this.styleId = chart.element.id + '_ej2_chart_selection';
        this.unselected = chart.element.id + '_ej2_deselected';
        this.closeIconId = chart.element.id + '_ej2_drag_close';
        this.draggedRectGroup = chart.element.id + '_ej2_drag_group';
        this.draggedRect = chart.element.id + '_ej2_drag_rect';
        this.selectedDataIndexes = [];
        this.rectPoints = null;
        this.isSeriesMode = chart.selectionMode === 'Series';
    }
    /**
     * Method to select the point and series.
     * @return {void}
     */
    invokeSelection(chart) {
        this.initPrivateVariables(chart);
        this.series = extend({}, chart.visibleSeries, null, true);
        this.seriesStyles();
        if (!(chart.selectionMode.indexOf('Drag') > -1)) {
            this.selectDataIndex(chart, this.concatIndexes(chart.selectedDataIndexes, this.selectedDataIndexes));
        }
    }
    generateStyle(series) {
        if (series) {
            return (series.selectionStyle || this.styleId + '_series_' + series.index);
        }
        return 'undefined';
    }
    selectDataIndex(chart, indexes) {
        for (let index of indexes) {
            this.performSelection(index, chart, this.getElementByIndex(chart, index)[0]);
        }
    }
    getElementByIndex(chart, index, suffix = '') {
        let elementId = chart.element.id + '_Series_' + index.series + '_Point' + '_' + index.point;
        let series = chart.series[index.series];
        elementId = (!series.isRectSeries && series.type !== 'Scatter' && series.type !== 'Bubble' &&
            series.marker.visible) ? (elementId + '_Symbol' + suffix) : elementId;
        return [getElement(elementId), (series.type === 'RangeArea' && series.marker.visible) ? getElement(elementId + '1') : null];
    }
    getClusterElements(chart, index) {
        let clusters = [];
        for (let series of chart.visibleSeries) {
            index = new Index(series.index, index.point);
            clusters.push(this.getElementByIndex(chart, index)[0]);
        }
        return clusters;
    }
    findElements(chart, series, index, suffix = '') {
        if (this.isSeriesMode) {
            return this.getSeriesElements(series);
        }
        else if (chart.selectionMode === 'Cluster') {
            return this.getClusterElements(chart, index);
        }
        else {
            return this.getElementByIndex(chart, index, suffix);
        }
    }
    /**
     * To find the selected element.
     * @return {void}
     * @private
     */
    calculateSelectedElements(event) {
        if (this.chart.selectionMode === 'None' || event.target.id.indexOf(this.chart.element.id + '_') === -1) {
            return;
        }
        if (event.target.id.indexOf('_Series_') > -1) {
            this.performSelection(this.indexFinder(event.target.id), this.chart, event.target);
        }
    }
    performSelection(index, chart, element) {
        this.isSeriesMode = chart.selectionMode === 'Series';
        if (chart.series[index.series].type === 'BoxAndWhisker' &&
            element.id === chart.element.id + '_Series_' + index.series + '_Point_' + index.point + '_BoxPath') {
            element = element.parentElement;
        }
        switch (chart.selectionMode) {
            case 'Series':
                this.selection(chart, index, this.getSeriesElements(chart.series[index.series]));
                this.blurEffect(chart.element.id, chart.visibleSeries);
                break;
            case 'Point':
                if (!isNaN(index.point)) {
                    this.selection(chart, index, [element]);
                    this.blurEffect(chart.element.id, chart.visibleSeries);
                }
                break;
            case 'Cluster':
                if (!isNaN(index.point)) {
                    this.clusterSelection(chart, chart.series, index);
                    this.blurEffect(chart.element.id, chart.visibleSeries);
                }
                break;
        }
    }
    selection(chart, index, selectedElements) {
        if (!chart.isMultiSelect && (chart.selectionMode.indexOf('Drag') === -1)) {
            this.removeMultiSelectEelments(chart, this.selectedDataIndexes, index, chart.series);
        }
        let className = selectedElements[0] && (selectedElements[0].getAttribute('class') || '');
        if (selectedElements[0] && className.indexOf(this.getSelectionClass(selectedElements[0].id)) > -1) {
            this.removeStyles(selectedElements);
            this.addOrRemoveIndex(this.selectedDataIndexes, index);
        }
        else {
            this.applyStyles(selectedElements);
            this.addOrRemoveIndex(this.selectedDataIndexes, index, true);
        }
    }
    clusterSelection(chart, series, index) {
        this.selection(chart, index, this.getClusterElements(chart, new Index(index.series, index.point)));
    }
    removeMultiSelectEelments(chart, index, currentIndex, seriesCollection) {
        let series;
        for (let i = 0; i < index.length; i++) {
            series = seriesCollection[index[i].series];
            if ((this.isSeriesMode && !this.toEquals(index[i], currentIndex, this.isSeriesMode)) ||
                (this.control.selectionMode === 'Cluster' && !this.toEquals(index[i], currentIndex, false)) ||
                (!this.isSeriesMode && this.toEquals(index[i], currentIndex, true) && !this.toEquals(index[i], currentIndex, false))) {
                this.removeStyles(this.findElements(chart, series, index[i]));
                index.splice(i, 1);
                i--;
            }
        }
    }
    blurEffect(chartId, visibleSeries) {
        let visibility = this.checkVisibility(this.selectedDataIndexes); // legend click scenario
        for (let series of visibleSeries) {
            if (series.visible) {
                this.checkSelectionElements(getElement(chartId + 'SeriesGroup' + series.index), this.generateStyle(series), visibility);
                if (!isNullOrUndefined(getElement(chartId + 'SymbolGroup' + series.index))) {
                    this.checkSelectionElements(getElement(chartId + 'SymbolGroup' + series.index), this.generateStyle(series), visibility);
                }
            }
        }
    }
    checkSelectionElements(element, className, visibility) {
        let children = (this.isSeriesMode ? [element] : element.childNodes);
        let elementClassName;
        let parentClassName;
        let legendShape;
        let selectElement = element;
        for (let i = 0; i < children.length; i++) {
            elementClassName = children[i].getAttribute('class') || '';
            parentClassName = children[i].parentNode.getAttribute('class') || '';
            if (elementClassName.indexOf(className) === -1 &&
                parentClassName.indexOf(className) === -1 && visibility) {
                this.addSvgClass(children[i], this.unselected);
            }
            else {
                selectElement = children[i];
                this.removeSvgClass(children[i], this.unselected);
            }
        }
        if (this.control.legendModule && this.control.legendSettings.visible) {
            legendShape = document.getElementById(this.control.element.id + '_chart_legend_shape_' + className.split('_series_')[1]);
            if (legendShape) {
                elementClassName = selectElement.getAttribute('class') || '';
                parentClassName = selectElement.parentNode.getAttribute('class') || '';
                if (elementClassName.indexOf(className) === -1 && parentClassName.indexOf(className) === -1 && visibility) {
                    this.addSvgClass(legendShape, this.unselected);
                }
                else {
                    this.removeSvgClass(legendShape, this.unselected);
                }
            }
        }
    }
    applyStyles(elements) {
        for (let element of elements) {
            if (element) {
                this.removeSvgClass(element.parentNode, this.unselected);
                this.removeSvgClass(element, this.unselected);
                this.addSvgClass(element, this.getSelectionClass(element.id));
            }
        }
    }
    getSelectionClass(id) {
        return this.generateStyle(this.control.series[this.indexFinder(id).series]);
    }
    removeStyles(elements) {
        for (let element of elements) {
            if (element) {
                this.removeSvgClass(element, this.getSelectionClass(element.id));
            }
        }
    }
    addOrRemoveIndex(indexes, index, add) {
        for (let i = 0; i < indexes.length; i++) {
            if (this.toEquals(indexes[i], index, this.isSeriesMode)) {
                indexes.splice(i, 1);
                i--;
            }
        }
        if (add) {
            indexes.push(index);
        }
    }
    toEquals(first, second, checkSeriesOnly) {
        return ((first.series === second.series || (this.control.selectionMode === 'Cluster' && !checkSeriesOnly))
            && (checkSeriesOnly || (first.point === second.point)));
    }
    /**
     * To redraw the selected points.
     * @return {void}
     * @private
     */
    redrawSelection(chart, oldMode) {
        this.isSeriesMode = oldMode === 'Series';
        let selectedDataIndexes = extend([], this.selectedDataIndexes, null, true);
        this.removeSelectedElements(chart, this.selectedDataIndexes, chart.series);
        this.blurEffect(chart.element.id, chart.visibleSeries);
        this.selectDataIndex(chart, selectedDataIndexes);
    }
    /** @private */
    legendSelection(chart, series) {
        let seriesStyle = this.generateStyle(chart.visibleSeries[series]);
        let selectedElements = document.getElementsByClassName(seriesStyle);
        this.isSeriesMode = chart.selectionMode === 'Series';
        let isBlurEffectNeeded = true;
        if (selectedElements.length > 0) {
            let elements = [];
            for (let i = 0; i < selectedElements.length; i++) {
                elements.push(selectedElements[i]);
            }
            this.removeStyles(elements);
            this.isSeriesMode = true;
            this.addOrRemoveIndex(this.selectedDataIndexes, new Index(series, NaN));
            for (let series of chart.visibleSeries) {
                seriesStyle = this.generateStyle(series);
                if (document.getElementsByClassName(seriesStyle).length > 0) {
                    for (let element of elements) {
                        this.checkSelectionElements(element, seriesStyle, true);
                    }
                    isBlurEffectNeeded = false;
                    break;
                }
            }
            if (isBlurEffectNeeded) {
                this.isSeriesMode = chart.selectionMode === 'Series';
                this.blurEffect(chart.element.id, chart.visibleSeries);
            }
        }
        else {
            let seriesElements = this.getSeriesElements(chart.visibleSeries[series]);
            for (let seriesElement of seriesElements) {
                this.checkSelectionElements(seriesElement, seriesStyle, false);
            }
            this.isSeriesMode = true;
            this.selection(chart, new Index(series, NaN), seriesElements);
            this.isSeriesMode = chart.selectionMode === 'Series';
            this.blurEffect(chart.element.id, chart.visibleSeries);
        }
    }
    getSeriesElements(series) {
        let seriesElements = [series.seriesElement];
        if (series.marker.visible && series.type !== 'Scatter' && series.type !== 'Bubble' && !series.isRectSeries) {
            seriesElements.push(series.symbolElement);
        }
        return seriesElements;
    }
    indexFinder(id) {
        let ids = ['NaN', 'NaN'];
        if (id.indexOf('SeriesGroup') > -1) {
            ids = id.split('SeriesGroup');
            ids[0] = ids[1];
        }
        else if (id.indexOf('SymbolGroup') > -1) {
            ids = id.split('SymbolGroup');
            ids[0] = ids[1];
        }
        else if (id.indexOf('_Point_') > -1) {
            ids = id.split('_Series_')[1].split('_Point_');
        }
        else if (id.indexOf('_Series_') > -1) {
            ids[0] = id.split('_Series_')[1];
        }
        return new Index(parseInt(ids[0], 10), parseInt(ids[1], 10));
    }
    /**
     * Drag selection that returns the selected data.
     * @return {void}
     * @private
     */
    calculateDragSelectedElements(chart, dragRect) {
        this.removeSelectedElements(chart, this.selectedDataIndexes, chart.series);
        let rect = new Rect(dragRect.x, dragRect.y, dragRect.width, dragRect.height);
        let axisOffset = new ChartLocation(chart.chartAxisLayoutPanel.seriesClipRect.x, chart.chartAxisLayoutPanel.seriesClipRect.y);
        this.removeOffset(rect, axisOffset);
        let points;
        let index;
        let selectedPointValues = [];
        let selectedSeriesValues = [];
        this.isSeriesMode = false;
        for (let series of chart.visibleSeries) {
            if (series.visible) {
                points = series.points;
                selectedPointValues = [];
                let xAxisOffset;
                let yAxisOffset;
                if ((chart.isTransposed || series.type.indexOf('Bar') !== -1) &&
                    !(chart.isTransposed && series.type.indexOf('Bar') !== -1)) {
                    xAxisOffset = series.xAxis.rect.y - axisOffset.y;
                    yAxisOffset = series.yAxis.rect.x - axisOffset.x;
                }
                else {
                    xAxisOffset = series.xAxis.rect.x - axisOffset.x;
                    yAxisOffset = series.yAxis.rect.y - axisOffset.y;
                }
                for (let j = 0; j < points.length; j++) {
                    let yValue = series.type !== 'RangeArea' ? points[j].yValue :
                        points[j].regions[0].y;
                    let isCurrentPoint;
                    if (series.type === 'BoxAndWhisker') {
                        isCurrentPoint = points[j].regions.some((region) => {
                            return withInBounds(region.x + xAxisOffset, region.y + yAxisOffset, rect);
                        });
                    }
                    else {
                        isCurrentPoint = points[j].symbolLocations.some((location) => {
                            return location && withInBounds(location.x + xAxisOffset, location.y + yAxisOffset, rect);
                        });
                    }
                    if (isCurrentPoint && series.category !== 'Indicator') {
                        index = new Index(series.index, points[j].index);
                        this.selection(chart, index, this.findElements(chart, series, index));
                        selectedPointValues.push({ x: points[j].xValue.toString(), y: yValue });
                    }
                    if (isCurrentPoint && series.type === 'RangeArea') {
                        selectedPointValues.push({ x: points[j].xValue.toString(), y: points[j].regions[0].y });
                    }
                }
                selectedSeriesValues.push(selectedPointValues);
            }
        }
        this.blurEffect(chart.element.id, chart.visibleSeries);
        this.rectPoints = new Rect(dragRect.x, dragRect.y, dragRect.width, dragRect.height);
        this.createCloseButton((dragRect.x + dragRect.width), dragRect.y);
        let args = {
            name: dragComplete,
            selectedDataValues: selectedSeriesValues,
            cancel: false
        };
        chart.trigger(dragComplete, args);
    }
    removeOffset(rect, clip) {
        rect.x -= clip.x;
        rect.y -= clip.y;
    }
    /**
     * Method to draw dragging rect.
     * @return {void}
     * @private
     */
    drawDraggingRect(chart, dragRect) {
        let cartesianLayout = chart.chartAxisLayoutPanel.seriesClipRect;
        switch (chart.selectionMode) {
            case 'DragX':
                dragRect.y = cartesianLayout.y;
                dragRect.height = cartesianLayout.height;
                break;
            case 'DragY':
                dragRect.x = cartesianLayout.x;
                dragRect.width = cartesianLayout.width;
                break;
        }
        if (dragRect.width < 5 || dragRect.height < 5) {
            return null;
        }
        let element = getElement(this.draggedRect);
        if (this.closeIcon) {
            removeElement(this.closeIconId);
        }
        if (element) {
            this.setAttributes(element, dragRect);
        }
        else {
            let dragGroup = chart.renderer.createGroup({ id: this.draggedRectGroup });
            chart.svgObject.appendChild(dragGroup);
            element = chart.renderer.drawRectangle(new RectOption(this.draggedRect, chart.themeStyle.selectionRectFill, { color: chart.themeStyle.selectionRectStroke, width: 1 }, 1, dragRect));
            element.setAttribute('style', 'cursor:move;');
            dragGroup.appendChild(element);
        }
    }
    createCloseButton(x, y) {
        let closeIcon = this.chart.renderer.createGroup({
            id: this.closeIconId,
            style: 'cursor:pointer; visibility: visible;'
        });
        closeIcon.appendChild(this.chart.renderer.drawCircle(new CircleOption(this.closeIconId + '_circle', '#FFFFFF', { color: this.chart.themeStyle.selectionCircleStroke, width: 1 }, 1, x, y, 10)));
        let direction = 'M ' + (x - 4) + ' ' + (y - 4) + ' L ' + (x + 4) + ' ' + (y + 4) + ' M ' + (x - 4) + ' ' + (y + 4) +
            ' L ' + (x + 4) + ' ' + (y - 4);
        closeIcon.appendChild(this.chart.renderer.drawPath({
            id: this.closeIconId + '_cross', d: direction,
            stroke: this.chart.themeStyle.selectionCircleStroke,
            'stroke-width': 2, fill: this.chart.themeStyle.selectionCircleStroke
        }));
        this.closeIcon = closeIcon;
        getElement(this.draggedRectGroup).appendChild(closeIcon);
    }
    /**
     * Method to remove dragged element.
     * @return {void}
     * @private
     */
    removeDraggedElements(chart, event) {
        if ((event.target.id.indexOf(this.closeIconId) > -1) && (event.type.indexOf('move') === -1)) {
            this.removeSelectedElements(chart, this.selectedDataIndexes, chart.series);
            this.blurEffect(chart.element.id, chart.visibleSeries);
            remove(getElement(this.draggedRectGroup));
            this.changeCursorStyle(false, chart.svgObject, 'auto');
            this.rectPoints = null;
        }
    }
    /**
     * Method to resize the drag rect.
     * @return {void}
     * @private
     */
    resizingSelectionRect(chart, location, tapped) {
        let rect = new Rect(this.rectPoints.x, this.rectPoints.y, this.rectPoints.width, this.rectPoints.height);
        let resize = this.findResizeMode(chart.svgObject, rect, location);
        if (this.resizing) {
            rect = getDraggedRectLocation(rect.x, rect.y, (rect.x + rect.width), (rect.y + rect.height), chart.chartAxisLayoutPanel.seriesClipRect);
            this.drawDraggingRect(chart, rect);
            this.dragRect = rect;
        }
        if (tapped) {
            this.resizing = resize;
        }
    }
    findResizeMode(chartSvgObject, rect, location) {
        let cursorStyle = 'se-resize';
        let resize = false;
        if (!this.resizing) {
            let resizeEdges = [new Rect(rect.x, (rect.y - 10), rect.width - 5, 20),
                new Rect((rect.x - 10), rect.y, 20, rect.height),
                new Rect(rect.x, (rect.y + rect.height - 10), rect.width - 10, 20),
                new Rect((rect.x + rect.width - 10), rect.y + 5, 20, rect.height - 15),
                new Rect((rect.x + rect.width - 10), (rect.y + rect.height - 10), 20, 20)]; //corner
            for (let i = 0; i < resizeEdges.length; i++) {
                if (withInBounds(location.x, location.y, resizeEdges[i])) {
                    cursorStyle = (i === 4) ? cursorStyle : (i % 2 === 0) ? 'ns-resize' : 'ew-resize';
                    resize = true;
                    this.resizeMode = i;
                    break;
                }
            }
        }
        else {
            let x = rect.x;
            let y = rect.y;
            let width = (location.x - x);
            let height = (location.y - y);
            switch (this.resizeMode) {
                case 0:
                    height = Math.abs((rect.height + rect.y) - location.y);
                    rect.y = Math.min((rect.height + rect.y), location.y);
                    rect.height = height;
                    break;
                case 1:
                    width = Math.abs((rect.width + rect.x) - location.x);
                    rect.x = Math.min((rect.width + rect.x), location.x);
                    rect.width = width;
                    break;
                case 2:
                    rect.height = Math.abs(height);
                    rect.y = Math.min(location.y, y);
                    break;
                case 3:
                    rect.width = Math.abs(width);
                    rect.x = Math.min(location.x, x);
                    break;
                case 4:
                    rect.width = Math.abs(width);
                    rect.height = Math.abs(height);
                    rect.x = Math.min(location.x, x);
                    rect.y = Math.min(location.y, y);
                    break;
            }
        }
        this.changeCursorStyle(resize, getElement(this.draggedRect), cursorStyle);
        this.changeCursorStyle(resize, chartSvgObject, cursorStyle);
        return resize;
    }
    changeCursorStyle(isResize, rectelement, cursorStyle) {
        cursorStyle = isResize ? cursorStyle : (this.control.svgObject === rectelement) ? 'auto' : 'move';
        rectelement.setAttribute('style', 'cursor:' + cursorStyle + ';');
    }
    removeSelectedElements(chart, index, seriesCollection) {
        index.splice(0, index.length);
        let seriesElements;
        for (let series of seriesCollection) {
            seriesElements = this.getSeriesElements(series);
            this.removeStyles(seriesElements);
            for (let seriesElement of seriesElements) {
                this.removeStyles(this.getChildren(seriesElement));
            }
        }
    }
    setAttributes(ele, object) {
        let keys = Object.keys(object);
        for (let key of keys) {
            ele.setAttribute(key, object[key]);
        }
    }
    /**
     * Method to move the dragged rect.
     * @return {void}
     * @private
     */
    draggedRectMoved(chart, grabbedPoint, doDrawing) {
        let rect = new Rect(this.rectPoints.x, this.rectPoints.y, this.rectPoints.width, this.rectPoints.height);
        rect.x -= (grabbedPoint.x - chart.mouseX);
        rect.y -= (grabbedPoint.y - chart.mouseY);
        rect = getDraggedRectLocation(rect.x, rect.y, rect.x + rect.width, rect.height + rect.y, chart.chartAxisLayoutPanel.seriesClipRect);
        if (doDrawing) {
            this.drawDraggingRect(chart, rect);
        }
        else {
            this.calculateDragSelectedElements(chart, rect);
        }
    }
    /**
     * To complete the selection.
     * @return {void}
     * @private
     */
    completeSelection(e) {
        let chart = this.chart;
        if (chart.selectionMode === 'None') {
            return;
        }
        if ((this.dragging || this.resizing) && this.dragRect.width > 5 && this.dragRect.height > 5) {
            this.calculateDragSelectedElements(chart, this.dragRect);
        }
        else if (this.rectGrabbing && this.rectPoints.width && this.rectPoints.height) {
            this.draggedRectMoved(chart, this.dragRect);
        }
        this.dragging = false;
        this.rectGrabbing = false;
        this.resizing = false;
        this.removeDraggedElements(chart, e);
    }
    getDragRect(chart, seriesClipRect) {
        return getDraggedRectLocation(chart.mouseDownX, chart.mouseDownY, chart.mouseX, chart.mouseY, seriesClipRect);
    }
    /** @private */
    dragStart(chart, seriesClipRect, mouseDownX, mouseDownY, event) {
        this.dragging = (chart.selectionMode.indexOf('Drag') > -1) && (chart.isDoubleTap || !chart.isTouch) &&
            chart.chartAreaType !== 'PolarRadar';
        if (this.dragging) {
            this.dragRect = new Rect(chart.mouseDownX, chart.mouseDownY, 0, 0);
            if (chart.mouseDownX < seriesClipRect.x || chart.mouseDownX > (seriesClipRect.x + seriesClipRect.width) ||
                chart.mouseDownY < seriesClipRect.y || chart.mouseDownY > (seriesClipRect.y + seriesClipRect.height)) {
                this.dragging = false;
            }
        }
        if (this.rectPoints) {
            this.dragRect = new Rect(chart.mouseDownX, chart.mouseDownY, 0, 0);
            this.resizingSelectionRect(chart, new ChartLocation(mouseDownX, mouseDownY), true);
            this.rectGrabbing = withInBounds(mouseDownX, mouseDownY, this.rectPoints);
        }
    }
    /** @private */
    mouseMove(event) {
        let chart = this.chart;
        if (chart.selectionMode === 'None') {
            return;
        }
        if (event.type === 'touchmove' && (Browser.isIos || Browser.isIos7) && this.dragging && event.preventDefault) {
            event.preventDefault();
        }
        let insideMoving = withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect);
        if (insideMoving) {
            if (this.rectGrabbing && !this.resizing) {
                this.draggedRectMoved(chart, this.dragRect, true);
            }
            else if (this.dragging && !this.resizing) {
                this.dragRect = this.getDragRect(chart, chart.chartAxisLayoutPanel.seriesClipRect);
                this.drawDraggingRect(chart, this.dragRect);
            }
            if (this.rectPoints) {
                this.resizingSelectionRect(chart, new ChartLocation(chart.mouseX, chart.mouseY));
            }
        }
        else {
            this.completeSelection(event);
        }
    }
    /**
     * Get module name.
     * @private
     */
    getModuleName() {
        return 'Selection';
    }
    /**
     * To destroy the selection.
     * @return {void}
     * @private
     */
    destroy(chart) {
        this.removeEventListener();
        // Destroy method performed here
    }
}

/**
 * `DataLabel` module is used to render data label for the data point.
 */
class DataLabel {
    /**
     * Constructor for the data label module.
     * @private
     */
    constructor(chart) {
        this.errorHeight = 0;
        this.chart = chart;
    }
    initPrivateVariables(series, marker) {
        let transform;
        let render = series.chart.renderer;
        transform = series.chart.chartAreaType === 'Cartesian' ? 'translate(' + series.clipRect.x + ',' + (series.clipRect.y) + ')' : '';
        if (marker.dataLabel.visible) {
            series.shapeElement = render.createGroup({
                'id': this.chart.element.id + 'ShapeGroup' + series.index,
                'transform': transform,
                'clip-path': 'url(#' + this.chart.element.id + '_ChartSeriesClipRect_' + series.index + ')'
            });
            series.textElement = render.createGroup({
                'id': this.chart.element.id + 'TextGroup' + series.index,
                'transform': transform,
                'clip-path': 'url(#' + this.chart.element.id + '_ChartSeriesClipRect_' + series.index + ')'
            });
        }
        this.markerHeight = ((series.type === 'Scatter' || marker.visible) && !this.isRectSeries(series)) ? (marker.height / 2) : 0;
        this.commonId = this.chart.element.id + '_Series_' + series.index + '_Point_';
        this.calculateErrorHeight(series, series.marker.dataLabel.position);
        this.chartBackground = this.chart.chartArea.background === 'trasparent' ?
            this.chart.background || this.chart.themeStyle.background : this.chart.chartArea.background;
    }
    calculateErrorHeight(series, position) {
        if (!series.errorBar.visible) {
            return null;
        }
        else if (series.errorBar.visible && this.chart.chartAreaType !== 'PolarRadar') {
            let direction = series.errorBar.direction;
            let positiveHeight = this.chart.errorBarModule.positiveHeight;
            let negativeHeight = this.chart.errorBarModule.negativeHeight;
            if (this.isRectSeries(series)) {
                if (position === 'Top' || position === 'Auto') {
                    if (direction === 'Both' || direction === 'Minus') {
                        this.errorHeight = negativeHeight;
                    }
                    else {
                        this.errorHeight = 0;
                    }
                }
                if (position === 'Outer' || position === 'Auto') {
                    if (direction === 'Both' || direction === 'Plus') {
                        this.errorHeight = positiveHeight;
                    }
                    else {
                        this.errorHeight = 0;
                    }
                }
            }
            else {
                if (position === 'Top' || position === 'Outer' || position === 'Auto') {
                    if ((direction === 'Both' || direction === 'Plus') && (!series.chart.isTransposed)) {
                        this.errorHeight = positiveHeight;
                    }
                    else {
                        this.errorHeight = 0;
                    }
                }
                if (position === 'Bottom' || position === 'Auto') {
                    if (direction === 'Both' || direction === 'Minus') {
                        this.errorHeight = negativeHeight;
                    }
                    else {
                        this.errorHeight = 0;
                    }
                }
            }
        }
        else {
            this.errorHeight = 0;
        }
    }
    isRectSeries(series) {
        return series.isRectSeries || series.type === 'RangeArea';
    }
    /**
     * Render the data label for series.
     * @return {void}
     */
    render(series, chart, dataLabel) {
        // initialize the private variable
        this.initPrivateVariables(series, series.marker);
        let rect;
        let rgbValue;
        let contrast;
        let argsData;
        let border;
        let textSize;
        this.inverted = chart.requireInvertedAxis;
        this.yAxisInversed = series.yAxis.isInversed;
        let element = createElement('div', {
            id: chart.element.id + '_Series_' + series.index + '_DataLabelCollections'
        });
        // Data label point iteration started
        series.points.map((point, index) => {
            this.margin = dataLabel.margin;
            let labelText = [];
            let labelLength;
            let clip = series.clipRect;
            border = { width: dataLabel.border.width, color: dataLabel.border.color };
            if ((point.symbolLocations.length && point.symbolLocations[0]) ||
                (series.type === 'BoxAndWhisker' && point.regions.length)) {
                labelText = getLabelText(point, series, chart);
                labelLength = labelText.length;
                for (let i = 0; i < labelLength; i++) {
                    argsData = {
                        cancel: false, name: textRender, series: series,
                        point: point, text: labelText[i], border: border,
                        color: dataLabel.fill, template: dataLabel.template
                    };
                    chart.trigger(textRender, argsData);
                    if (!argsData.cancel) {
                        this.fontBackground = argsData.color;
                        this.isDataLabelShape(argsData);
                        this.markerHeight = series.type === 'Bubble' ? (point.regions[0].height / 2) : this.markerHeight;
                        if (argsData.template !== null) {
                            this.createDataLabelTemplate(element, series, dataLabel, point, argsData, i);
                        }
                        else {
                            textSize = measureText(argsData.text, dataLabel.font);
                            rect = this.calculateTextPosition(point, series, textSize, dataLabel, i);
                            if (!isCollide(rect, chart.dataLabelCollections, clip)) {
                                chart.dataLabelCollections.push(new Rect(rect.x + clip.x, rect.y + clip.y, rect.width, rect.height));
                                if (this.isShape) {
                                    series.shapeElement.appendChild(chart.renderer.drawRectangle(new RectOption(this.commonId + index + '_TextShape_' + i, argsData.color, argsData.border, dataLabel.opacity, rect, dataLabel.rx, dataLabel.ry)));
                                }
                                // Checking the font color
                                rgbValue = convertHexToColor(colorNameToHex(this.fontBackground));
                                contrast = Math.round((rgbValue.r * 299 + rgbValue.g * 587 + rgbValue.b * 114) / 1000);
                                textElement(new TextOption(this.commonId + index + '_Text_' + i, rect.x + this.margin.left + textSize.width / 2, rect.y + this.margin.top + textSize.height * 3 / 4, 'middle', argsData.text, 'rotate(0,' + (rect.x) + ',' + (rect.y) + ')', 'auto'), dataLabel.font, dataLabel.font.color ||
                                    ((contrast >= 128 || series.type === 'Hilo') ? 'black' : 'white'), series.textElement);
                            }
                        }
                    }
                }
            }
        });
        if (element.childElementCount) {
            getElement(chart.element.id + '_Secondary_Element').appendChild(element);
        }
    }
    /**
     * Render the data label template.
     * @return {void}
     * @private
     */
    createDataLabelTemplate(parentElement, series, dataLabel, point, data, labelIndex) {
        this.margin = { left: 0, right: 0, bottom: 0, top: 0 };
        let clip = series.clipRect;
        let childElement = createTemplate(createElement('div', {
            id: this.chart.element.id + '_Series_' + series.index + '_DataLabel_'
                + point.index + (labelIndex ? ('_' + labelIndex) : ''),
            styles: 'position: absolute;background-color:' + data.color + ';' +
                getFontStyle(dataLabel.font) + ';border:' + data.border.width + 'px solid ' + data.border.color + ';'
        }), point.index, data.template, this.chart, point, series);
        let elementRect = measureElementRect(childElement);
        let rect = this.calculateTextPosition(point, series, { width: elementRect.width, height: elementRect.height }, dataLabel, labelIndex);
        childElement.style.left = ((this.chart.chartAreaType === 'PolarRadar' ? 0 : series.clipRect.x) + rect.x) + 'px';
        childElement.style.top = ((this.chart.chartAreaType === 'PolarRadar' ? 0 : series.clipRect.y) + rect.y) + 'px';
        let rgbValue = convertHexToColor(colorNameToHex(this.fontBackground));
        let vAxis = series.chart.requireInvertedAxis ? series.xAxis : series.yAxis;
        let hAxis = series.chart.requireInvertedAxis ? series.yAxis : series.xAxis;
        childElement.style.color = dataLabel.font.color ||
            ((Math.round((rgbValue.r * 299 + rgbValue.g * 587 + rgbValue.b * 114) / 1000)) >= 128 ? 'black' : 'white');
        if (childElement.childElementCount && !isCollide(rect, this.chart.dataLabelCollections, clip)
            && (series.seriesType !== 'XY' || point.yValue === undefined || withIn(point.yValue, series.yAxis.visibleRange) ||
                (series.type.indexOf('100') > -1 && withIn(series.stackedValues.endValues[point.index], series.yAxis.visibleRange)))
            && withIn(point.xValue, series.xAxis.visibleRange) && parseFloat(childElement.style.top) >= vAxis.rect.y &&
            parseFloat(childElement.style.left) >= hAxis.rect.x && parseFloat(childElement.style.top) <= vAxis.rect.y + vAxis.rect.height &&
            parseFloat(childElement.style.left) <= hAxis.rect.x + hAxis.rect.width) {
            this.chart.dataLabelCollections.push(new Rect(rect.x + clip.x, rect.y + clip.y, rect.width, rect.height));
            parentElement.appendChild(childElement);
            if (series.animation.enable && this.chart.animateSeries) {
                this.doDataLabelAnimation(series, childElement);
            }
        }
    }
    calculateTextPosition(point, series, textSize, dataLabel, labelIndex) {
        let labelRegion = labelIndex > 1 ? (series.type === 'Candle') ? point.regions[1] : point.regions[0] : point.regions[0];
        if (labelIndex > 1 && series.type === 'HiloOpenClose') {
            labelRegion = (labelIndex === 2) ? point.regions[1] : point.regions[2];
        }
        let location;
        location = this.getLabelLocation(point, series, textSize, labelIndex);
        let padding = 5;
        let clipRect = series.clipRect;
        let rect;
        // calculating alignment
        if (!this.chart.requireInvertedAxis || !this.isRectSeries(series) || series.type === 'BoxAndWhisker') {
            this.locationX = location.x;
            let alignmentValue = textSize.height + (this.borderWidth * 2) + this.markerHeight +
                this.margin.bottom + this.margin.top + padding;
            location.y = (dataLabel.position === 'Auto') ? location.y :
                this.calculateAlignment(alignmentValue, location.y, dataLabel.alignment, this.isRectSeries(series) ? point.yValue < 0 : false);
            // calculating position
            location.y = (!this.isRectSeries(series) || series.type === 'BoxAndWhisker') ?
                this.calculatePathPosition(location.y, dataLabel.position, series, point, textSize, labelIndex) :
                this.calculateRectPosition(location.y, labelRegion, point.yValue < 0 !== this.yAxisInversed, dataLabel.position, series, textSize, labelIndex, point);
            if (this.isRectSeries(series) && this.chart.chartAreaType === 'PolarRadar') {
                location = this.calculatePolarRectPosition(location, dataLabel.position, series, point, textSize, labelIndex);
            }
        }
        else {
            this.locationY = location.y;
            let alignmentValue = textSize.width + this.borderWidth + this.margin.left + this.margin.right - padding;
            location.x = dataLabel.position === 'Auto' ? location.x :
                this.calculateAlignment(alignmentValue, location.x, dataLabel.alignment, point.yValue < 0);
            location.x = this.calculateRectPosition(location.x, labelRegion, point.yValue < 0 !== this.yAxisInversed, dataLabel.position, series, textSize, labelIndex, point);
        }
        rect = calculateRect(location, textSize, this.margin);
        // Checking the condition whether data Label has been exist the clip rect
        if (!((rect.y > clipRect.height) || (rect.x > clipRect.width) ||
            (rect.x + rect.width < 0) || (rect.y + rect.height < 0))) {
            rect.x = rect.x < 0 ? padding : rect.x;
            rect.y = rect.y < 0 ? padding : rect.y;
            rect.x -= (rect.x + rect.width) > clipRect.width ? (rect.x + rect.width) - clipRect.width + padding : 0;
            rect.y -= (rect.y + rect.height) > clipRect.height ? (rect.y + rect.height) - clipRect.height + padding : 0;
            this.fontBackground = this.fontBackground === 'transparent' ? this.chartBackground : this.fontBackground;
        }
        return rect;
    }
    // Calculation label location for polar column draw types
    calculatePolarRectPosition(location, position, series, point, size, labelIndex) {
        let padding = 5;
        let columnRadius;
        let angle = (point.regionData.startAngle - 0.5 * Math.PI) + (point.regionData.endAngle - point.regionData.startAngle) / 2;
        if (labelIndex === 0) {
            columnRadius = point.regionData.radius < point.regionData.innerRadius ? point.regionData.innerRadius
                : point.regionData.radius;
        }
        else {
            columnRadius = point.regionData.radius > point.regionData.innerRadius ? point.regionData.innerRadius
                : point.regionData.radius;
        }
        this.fontBackground = this.fontBackground === 'transparent' ? this.chartBackground : this.fontBackground;
        if (series.drawType.indexOf('Stacking') > -1) {
            position = position === 'Outer' ? 'Top' : position;
        }
        else if (series.drawType.indexOf('Range') > -1) {
            position = (position === 'Outer' || position === 'Top') ? position : 'Auto';
        }
        if (position === 'Outer') {
            columnRadius = labelIndex === 0 ? columnRadius + 2 * padding : columnRadius - 2 * padding;
        }
        else if (position === 'Middle') {
            columnRadius = columnRadius / 2 + padding;
        }
        else if (position === 'Top') {
            columnRadius = labelIndex === 0 ? columnRadius - 2 * padding : columnRadius + 2 * padding;
        }
        else if (position === 'Bottom') {
            columnRadius = padding;
        }
        else {
            if (labelIndex === 0) {
                columnRadius = columnRadius >= series.chart.radius ? columnRadius - padding :
                    series.drawType === 'StackingColumn' ? columnRadius - 2 * padding : columnRadius + 2 * padding;
            }
            else {
                columnRadius = columnRadius >= series.chart.radius ? columnRadius + padding : columnRadius - 2 * padding;
            }
        }
        location.x = series.clipRect.width / 2 + series.clipRect.x + columnRadius * Math.cos(angle);
        location.y = series.clipRect.height / 2 + series.clipRect.y + columnRadius * Math.sin(angle);
        return location;
    }
    /**
     * Get the label location
     */
    getLabelLocation(point, series, textSize, labelIndex) {
        let location = new ChartLocation(0, 0);
        let labelRegion = (series.type === 'Candle' && labelIndex > 1) ? point.regions[1] : point.regions[0];
        if (series.type === 'HiloOpenClose') {
            labelRegion = (labelIndex === 2) ? point.regions[1] : point.regions[2];
        }
        let xAxis = series.xAxis;
        let yAxis = series.yAxis;
        let isInverted = series.chart.requireInvertedAxis;
        if (series.type === 'BoxAndWhisker') {
            this.markerHeight = 0;
            switch (labelIndex) {
                case 0:
                    location = getPoint(point.xValue, point.median, xAxis, yAxis, isInverted);
                    break;
                case 1:
                    location = getPoint(point.xValue, point.maximum, xAxis, yAxis, isInverted);
                    break;
                case 2:
                    location = getPoint(point.xValue, point.minimum, xAxis, yAxis, isInverted);
                    break;
                case 3:
                    location = getPoint(point.xValue, point.upperQuartile, xAxis, yAxis, isInverted);
                    break;
                case 4:
                    location = getPoint(point.xValue, point.lowerQuartile, xAxis, yAxis, isInverted);
                    break;
                default: {
                    location = getPoint(point.xValue, point.outliers[labelIndex - 5], xAxis, yAxis, isInverted);
                    this.markerHeight = series.marker.height / 2;
                    break;
                }
            }
        }
        else if (labelIndex === 0 || labelIndex === 1) {
            location = new ChartLocation(point.symbolLocations[0].x, point.symbolLocations[0].y);
        }
        else if ((labelIndex === 2 || labelIndex === 3) && series.type === 'Candle') {
            location = new ChartLocation(point.symbolLocations[1].x, point.symbolLocations[1].y);
        }
        else if (isInverted) {
            location = { x: labelRegion.x + (labelRegion.width) / 2, y: labelRegion.y };
        }
        else {
            location = { x: labelRegion.x + labelRegion.width, y: labelRegion.y + (labelRegion.height) / 2 };
        }
        //Aligning the label at the beginning of the tick, when tick size is less than text size
        if (labelIndex > 1 && series.type === 'HiloOpenClose') {
            if (series.chart.requireInvertedAxis) {
                let height = labelRegion.height;
                location.y = labelRegion.y + height / 2 + 2 * (labelIndex === 2 ? 1 : -1);
            }
            else {
                let width = labelRegion.width;
                location.x = labelRegion.x + width / 2 + 2 * (labelIndex === 2 ? 1 : -1);
            }
        }
        return location;
    }
    calculateRectPosition(labelLocation, rect, isMinus, position, series, textSize, labelIndex, point) {
        if (series.chart.chartAreaType === 'PolarRadar') {
            return null;
        }
        let padding = 5;
        let margin = this.margin;
        let textLength = !this.inverted ? textSize.height : textSize.width;
        let extraSpace = this.borderWidth + textLength / 2 + padding;
        if (series.type.indexOf('Stacking') > -1) {
            position = position === 'Outer' ? 'Top' : position;
        }
        else if (series.type.indexOf('Range') > -1) {
            position = (position === 'Outer' || position === 'Top') ? position : 'Auto';
        }
        else if (series.type === 'Waterfall') {
            position = position === 'Auto' ? 'Middle' : position;
        }
        switch (position) {
            case 'Bottom':
                labelLocation = !this.inverted ?
                    isMinus ? (labelLocation - rect.height + extraSpace + margin.top) :
                        (labelLocation + rect.height - extraSpace - margin.bottom) :
                    isMinus ? (labelLocation + rect.width - extraSpace - margin.left) :
                        (labelLocation - rect.width + extraSpace + margin.right);
                break;
            case 'Middle':
                labelLocation = labelLocation = !this.inverted ?
                    (isMinus ? labelLocation - (rect.height / 2) : labelLocation + (rect.height / 2)) :
                    (isMinus ? labelLocation + (rect.width / 2) : labelLocation - (rect.width / 2));
                break;
            case 'Auto':
                labelLocation = this.calculateRectActualPosition(labelLocation, rect, isMinus, series, textSize, labelIndex, point);
                break;
            default:
                extraSpace += this.errorHeight;
                labelLocation = this.calculateTopAndOuterPosition(labelLocation, rect, position, series, labelIndex, extraSpace, isMinus);
                break;
        }
        let check = !this.inverted ? (labelLocation < rect.y || labelLocation > rect.y + rect.height) :
            (labelLocation < rect.x || labelLocation > rect.x + rect.width);
        this.fontBackground = check ?
            (this.fontBackground === 'transparent' ? this.chartBackground : this.fontBackground)
            : this.fontBackground === 'transparent' ? (point.color || series.interior) : this.fontBackground;
        return labelLocation;
    }
    calculatePathPosition(labelLocation, position, series, point, size, labelIndex) {
        let padding = 5;
        if ((series.type.indexOf('Area') > -1 && series.type !== 'RangeArea')
            && this.yAxisInversed && series.marker.dataLabel.position !== 'Auto') {
            position = position === 'Top' ? 'Bottom' : position === 'Bottom' ? 'Top' : position;
        }
        this.fontBackground = this.fontBackground === 'transparent' ? this.chartBackground : this.fontBackground;
        switch (position) {
            case 'Top':
            case 'Outer':
                labelLocation = labelLocation - this.markerHeight - this.borderWidth - size.height / 2 - this.margin.bottom - padding -
                    this.errorHeight;
                break;
            case 'Bottom':
                labelLocation = labelLocation + this.markerHeight + this.borderWidth + size.height / 2 + this.margin.top + padding +
                    this.errorHeight;
                break;
            case 'Auto':
                labelLocation = this.calculatePathActualPosition(labelLocation, this.markerHeight, series, point, size, labelIndex);
                break;
        }
        return labelLocation;
    }
    isDataLabelShape(style) {
        this.isShape = (style.color !== 'transparent' || style.border.width > 0);
        this.borderWidth = style.border.width;
        if (!this.isShape) {
            this.margin = { left: 0, right: 0, bottom: 0, top: 0 };
        }
    }
    calculateRectActualPosition(labelLocation, rect, isMinus, series, size, labelIndex, point) {
        let location;
        let labelRect;
        let isOverLap = true;
        let position = 0;
        let collection = this.chart.dataLabelCollections;
        let finalPosition = series.type.indexOf('Range') !== -1 || series.type === 'Hilo' ? 2 : 4;
        while (isOverLap && position < finalPosition) {
            location = this.calculateRectPosition(labelLocation, rect, isMinus, this.getPosition(position), series, size, labelIndex, point);
            if (!this.inverted) {
                labelRect = calculateRect(new ChartLocation(this.locationX, location), size, this.margin);
                isOverLap = labelRect.y < 0 || isCollide(labelRect, collection, series.clipRect) || labelRect.y > series.clipRect.height;
            }
            else {
                labelRect = calculateRect(new ChartLocation(location, this.locationY), size, this.margin);
                isOverLap = labelRect.x < 0 || isCollide(labelRect, collection, series.clipRect) ||
                    labelRect.x + labelRect.width > series.clipRect.width;
            }
            position++;
        }
        return location;
    }
    // alignment calculation assigned here
    calculateAlignment(value, labelLocation, alignment, isMinus) {
        switch (alignment) {
            case 'Far':
                labelLocation = !this.inverted ? (isMinus ? labelLocation + value : labelLocation - value) :
                    (isMinus ? labelLocation - value : labelLocation + value);
                break;
            case 'Near':
                labelLocation = !this.inverted ? (isMinus ? labelLocation - value : labelLocation + value) :
                    (isMinus ? labelLocation + value : labelLocation - value);
                break;
            case 'Center':
                labelLocation = labelLocation;
                break;
        }
        return labelLocation;
    }
    //calculation for top and outer position of datalabel for rect series
    calculateTopAndOuterPosition(location, rect, position, series, index, extraSpace, isMinus) {
        let margin = this.margin;
        let top;
        switch (series.type) {
            case 'RangeColumn':
            case 'RangeArea':
            case 'Hilo':
                top = (index === 0 && !this.yAxisInversed) || (index === 1 && this.yAxisInversed);
                location = this.updateLabelLocation(position, location, extraSpace, margin, rect, top);
                break;
            case 'Candle':
                top = (index === 0 || index === 2) && !this.yAxisInversed
                    || (index === 1 || index === 3) && this.yAxisInversed;
                location = this.updateLabelLocation(position, location, extraSpace, margin, rect, top, index > 1);
                break;
            case 'HiloOpenClose':
                if (index <= 1) {
                    top = (index === 0 && !this.yAxisInversed) || (index === 1 && this.yAxisInversed);
                    location = this.updateLabelLocation(position, location, extraSpace, margin, rect, top);
                }
                else {
                    if (this.yAxisInversed) {
                        location = !this.inverted ? location + extraSpace + margin.top : location - extraSpace - margin.right;
                    }
                    else {
                        location = !this.inverted ? location - extraSpace - margin.bottom : location + extraSpace + margin.left;
                    }
                }
                break;
            default:
                if ((isMinus && position === 'Top') || (!isMinus && position === 'Outer')) {
                    location = !this.inverted ? location - extraSpace - margin.bottom : location + extraSpace + margin.left;
                }
                else {
                    location = !this.inverted ? location + extraSpace + margin.top : location - extraSpace - margin.right;
                }
                break;
        }
        return location;
    }
    /**
     * Updates the label location
     */
    updateLabelLocation(position, location, extraSpace, margin, rect, top, inside$$1 = false) {
        if (!this.inverted) {
            if (top) {
                location = (position === 'Outer' && !inside$$1) ? location - extraSpace - margin.bottom : location + extraSpace + margin.top;
            }
            else {
                location = (position === 'Outer' && !inside$$1) ? location + rect.height + extraSpace + margin.top :
                    location + rect.height - extraSpace - margin.bottom;
            }
        }
        else {
            if (top) {
                location = (position === 'Outer' && !inside$$1) ? location + extraSpace + margin.left : location - extraSpace - margin.right;
            }
            else {
                location = (position === 'Outer' && !inside$$1) ? location - rect.width - extraSpace - margin.right :
                    location - rect.width + extraSpace + margin.left;
            }
        }
        return location;
    }
    calculatePathActualPosition(y, markerSize, series, point, size, labelIndex) {
        let points = series.points;
        let index = point.index;
        let yValue = points[index].yValue;
        let position;
        let nextPoint = points.length - 1 > index ? points[index + 1] : null;
        let previousPoint = index > 0 ? points[index - 1] : null;
        let yLocation;
        let isOverLap = true;
        let labelRect;
        let isBottom;
        let positionIndex;
        let collection = this.chart.dataLabelCollections;
        if (series.type === 'Bubble') {
            position = 'Top';
        }
        else if (series.type.indexOf('Step') > -1) {
            position = 'Top';
            if (index) {
                position = (!previousPoint || !previousPoint.visible || (yValue > previousPoint.yValue !== this.yAxisInversed)
                    || yValue === previousPoint.yValue) ? 'Top' : 'Bottom';
            }
        }
        else if (series.type === 'BoxAndWhisker') {
            if (labelIndex === 1 || labelIndex === 3 || labelIndex > 4) {
                position = series.yAxis.isInversed ? 'Bottom' : 'Top';
            }
            else if (labelIndex === 2 || labelIndex === 4) {
                position = series.yAxis.isInversed ? 'Top' : 'Bottom';
            }
            else {
                isOverLap = false;
                position = 'Middle';
                yLocation = this.calculatePathPosition(y, position, series, point, size, labelIndex);
            }
        }
        else {
            if (index === 0) {
                position = (!nextPoint || !nextPoint.visible || yValue > nextPoint.yValue ||
                    (yValue < nextPoint.yValue && this.yAxisInversed)) ? 'Top' : 'Bottom';
            }
            else if (index === points.length - 1) {
                position = (!previousPoint || !previousPoint.visible || yValue > previousPoint.yValue ||
                    (yValue < previousPoint.yValue && this.yAxisInversed)) ? 'Top' : 'Bottom';
            }
            else {
                if (!nextPoint.visible && !(previousPoint && previousPoint.visible)) {
                    position = 'Top';
                }
                else if (!nextPoint.visible || !previousPoint) {
                    position = (nextPoint.yValue > yValue || (previousPoint && previousPoint.yValue > yValue)) ?
                        'Bottom' : 'Top';
                }
                else {
                    let slope = (nextPoint.yValue - previousPoint.yValue) / 2;
                    let intersectY = (slope * index) + (nextPoint.yValue - (slope * (index + 1)));
                    position = !this.yAxisInversed ? intersectY < yValue ? 'Top' : 'Bottom' :
                        intersectY < yValue ? 'Bottom' : 'Top';
                }
            }
        }
        isBottom = position === 'Bottom';
        positionIndex = ['Outer', 'Top', 'Bottom', 'Middle', 'Auto'].indexOf(position);
        while (isOverLap && positionIndex < 4) {
            yLocation = this.calculatePathPosition(y, this.getPosition(positionIndex), series, point, size, labelIndex);
            labelRect = calculateRect(new ChartLocation(this.locationX, yLocation), size, this.margin);
            isOverLap = labelRect.y < 0 || isCollide(labelRect, collection, series.clipRect)
                || (labelRect.y + labelRect.height) > series.clipRect.height;
            positionIndex = isBottom ? positionIndex - 1 : positionIndex + 1;
            isBottom = false;
        }
        return yLocation;
    }
    /**
     * Animates the data label.
     * @param  {Series} series - Data label of the series gets animated.
     * @return {void}
     */
    doDataLabelAnimation(series, element) {
        let shapeElements = series.shapeElement.childNodes;
        let textNode = series.textElement.childNodes;
        let delay = series.animation.delay + series.animation.duration;
        let location;
        let length = element ? 1 : textNode.length;
        for (let i = 0; i < length; i++) {
            if (element) {
                element.style.visibility = 'hidden';
                templateAnimate(element, delay, 200, 'ZoomIn');
            }
            else {
                location = new ChartLocation((+textNode[i].getAttribute('x')) + ((+textNode[i].getAttribute('width')) / 2), (+textNode[i].getAttribute('y')) + ((+textNode[i].getAttribute('height')) / 2));
                markerAnimate(textNode[i], delay, 200, series, null, location, true);
                if (shapeElements[i]) {
                    location = new ChartLocation((+shapeElements[i].getAttribute('x')) + ((+shapeElements[i].getAttribute('width')) / 2), (+shapeElements[i].getAttribute('y')) + ((+shapeElements[i].getAttribute('height')) / 2));
                    markerAnimate(shapeElements[i], delay, 200, series, null, location, true);
                }
            }
        }
    }
    getPosition(index) {
        return (['Outer', 'Top', 'Bottom', 'Middle', 'Auto'][index]);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        // Returns the module name
        return 'DataLabel';
    }
    /**
     * To destroy the dataLabel for series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        // Destroy method performed here
    }
}

/**
 * `ErrorBar` module is used to render the error bar for series.
 */
class ErrorBar {
    /**
     * Constructor for the error bar module.
     * @private
     */
    constructor(chart) {
        this.chart = chart;
    }
    /**
     * Render the error bar for series.
     * @return {void}
     */
    render(series) {
        if (this.chart.chartAreaType === 'PolarRadar') {
            return null;
        }
        this.createElement(series);
        this.renderErrorBar(series);
    }
    renderErrorBar(series) {
        let seriesIndex = series.index;
        let symbolId;
        let capId;
        let errorbar = series.errorBar;
        let errorBarCap = series.errorBar.errorBarCap;
        let border = series.border;
        let errorDirection = ['', ''];
        for (let point of series.points) {
            if (point.visible && point.symbolLocations[0]) {
                let errorX = 0;
                let errorY = 0;
                switch (errorbar.mode) {
                    case 'Vertical':
                        errorY = errorbar.verticalError;
                        break;
                    case 'Horizontal':
                        errorX = errorbar.horizontalError;
                        break;
                    case 'Both':
                        errorX = errorbar.horizontalError;
                        errorY = errorbar.verticalError;
                        break;
                }
                errorDirection = this['calculate' + errorbar.type + 'Value'](point, series, this.chart.requireInvertedAxis, errorX, errorY);
                symbolId = this.chart.element.id + '_Series_' + '_ErrorBarGroup_' + seriesIndex + '_Point_' + point.index;
                capId = this.chart.element.id + '_Series_' + '_ErrorBarCap_' + seriesIndex + '_Point_' + point.index;
                let shapeOption = new PathOption(symbolId, '', errorbar.width, errorbar.color || this.chart.themeStyle.errorBar, null, '', errorDirection[0]);
                let path = this.chart.renderer.drawPath(shapeOption);
                series.errorBarElement.appendChild(path);
                let capOption = new PathOption(capId, '', errorBarCap.width, errorBarCap.color || this.chart.themeStyle.errorBar, null, '', errorDirection[1]);
                let capPath = this.chart.renderer.drawPath(capOption);
                series.errorBarElement.appendChild(capPath);
            }
        }
    }
    // path calculation for error bar
    findLocation(point, series, isInverted, x1, y1) {
        let errorbar = series.errorBar;
        let direction = errorbar.direction;
        let location = [];
        let stackedValue = series.stackedValues;
        let yValue = series.type.indexOf('Stacking') > -1 ? series.stackedValues.endValues[point.index] :
            (series.seriesType === 'HighLow' || series.seriesType === 'HighLowOpenClose') ? (series.points[point.index].high) :
                point.yValue;
        let startPoint = getPoint(point.xValue + ((direction === 'Plus' || direction === 'Both') ? (errorbar.type === 'Custom' &&
            (errorbar.mode === 'Horizontal' || errorbar.mode === 'Both')) ? x1 = errorbar.horizontalPositiveError : x1 : 0), yValue + ((direction === 'Plus' || direction === 'Both') ? (errorbar.type === 'Custom' &&
            (errorbar.mode === 'Vertical' || errorbar.mode === 'Both')) ? y1 = errorbar.verticalPositiveError : y1 : 0), series.xAxis, series.yAxis, isInverted);
        location.push(startPoint);
        if (series.isRectSeries) {
            let midPoint = point.symbolLocations[0];
            location.push(midPoint);
        }
        else {
            let midPoint = getPoint(point.xValue, point.yValue, series.xAxis, series.yAxis, isInverted);
            location.push(midPoint);
        }
        let endPoint = getPoint(point.xValue - ((direction === 'Minus' || direction === 'Both') ? (errorbar.type === 'Custom' &&
            (errorbar.mode === 'Horizontal' || errorbar.mode === 'Both')) ? x1 = errorbar.horizontalNegativeError : x1 : 0), yValue - ((direction === 'Minus' || direction === 'Both') ? (errorbar.type === 'Custom' &&
            (errorbar.mode === 'Vertical' || errorbar.mode === 'Both')) ? y1 = errorbar.verticalNegativeError : y1 : 0), series.xAxis, series.yAxis, isInverted);
        location.push(endPoint);
        // calculate error height for datalabel position alignment
        point.error = (errorbar.mode === 'Vertical') ? errorbar.verticalError : errorbar.horizontalError;
        this.negativeHeight = (errorbar.mode === 'Vertical' || errorbar.mode === 'Both') ? (isInverted ? (location[1].x - location[2].x) :
            (location[2].y - location[1].y)) : 0;
        this.positiveHeight = (errorbar.mode === 'Vertical' || errorbar.mode === 'Both') ? (isInverted ? (location[0].x - location[1].x) :
            (location[1].y - location[0].y)) : 0;
        return this.getErrorDirection(location[0], location[1], location[2], series, isInverted);
    }
    // calculations for eror bar types
    calculateFixedValue(point, series, isInverted, errorX, errorY, xAxis, yAxis) {
        let errorbar = series.errorBar;
        return this.findLocation(point, series, isInverted, errorX, errorY);
    }
    calculatePercentageValue(point, series, isInverted, errorX, errorY, xAxis, yAxis) {
        errorX = (errorX / 100) * point.xValue;
        errorY = (errorY / 100) * point.yValue;
        return this.findLocation(point, series, isInverted, errorX, errorY);
    }
    calculateStandardDeviationValue(point, series, isInverted, errorX, errorY, xAxis, yAxis) {
        let getMean = this.meanCalculation(series, series.errorBar.mode);
        errorX = errorX * (getMean.horizontalSquareRoot + getMean.horizontalMean);
        errorY = errorY * (getMean.verticalSquareRoot + getMean.verticalMean);
        return this.findLocation(point, series, isInverted, errorX, errorY);
    }
    calculateStandardErrorValue(point, series, isInverted, errorX, errorY, xAxis, yAxis) {
        let length = series.points.length;
        let getMean = this.meanCalculation(series, series.errorBar.mode);
        errorX = ((errorX * getMean.horizontalSquareRoot) / Math.sqrt(length));
        errorY = ((errorY * getMean.verticalSquareRoot) / Math.sqrt(length));
        return this.findLocation(point, series, isInverted, errorX, errorY);
    }
    calculateCustomValue(point, series, isInverted, errorX, errorY, xAxis, yAxis) {
        let errorbar = series.errorBar;
        return this.findLocation(point, series, isInverted, errorX, errorY);
    }
    getHorizontalDirection(start, mid, end, direction, errorMode, capLength) {
        let path = '';
        let capDirection = '';
        path += ' M ' + start.x + ' ' + mid.y + ' L ' + end.x + ' ' + mid.y;
        capDirection += (direction === 'Plus' || direction === 'Both') ? ' M ' + (start.x) + ' ' + (mid.y - capLength) + ' L '
            + (start.x) + ' ' + (mid.y + capLength) : '';
        capDirection += (direction === 'Minus' || direction === 'Both') ? ' M ' + (end.x) + ' ' + (mid.y - capLength) + ' L '
            + (end.x) + ' ' + (mid.y + capLength) : ' ';
        return [path, capDirection];
    }
    getVerticalDirection(start, mid, end, direction, errorMode, capLength) {
        let path = '';
        let capDirection = '';
        path += ' M ' + mid.x + ' ' + start.y + ' L ' + mid.x + ' ' + end.y;
        capDirection += (direction === 'Plus' || direction === 'Both') ? ' M ' + (mid.x - capLength) + ' ' + start.y + ' L '
            + (mid.x + capLength) + ' ' + start.y : '';
        capDirection += (direction === 'Minus' || direction === 'Both') ? ' M ' + (mid.x - capLength) + ' ' + end.y + ' L '
            + (mid.x + capLength) + ' ' + end.y : '';
        return [path, capDirection];
    }
    getBothDirection(start, mid, end, direction, errorMode, capLength) {
        let capDirection = '';
        let path = '';
        let pathH = this.getHorizontalDirection(start, mid, end, direction, errorMode, capLength);
        let pathV = this.getVerticalDirection(start, mid, end, direction, errorMode, capLength);
        path = pathH[0].concat(pathV[0]);
        capDirection = pathH[1].concat(pathV[1]);
        return [path, capDirection];
    }
    getErrorDirection(start, mid, end, series, isInverted) {
        let direction = series.errorBar.direction;
        let mode = series.errorBar.mode;
        let capLength = series.errorBar.errorBarCap.length;
        let paths;
        let errorMode = mode;
        switch (mode) {
            case 'Both':
                errorMode = mode;
                break;
            case 'Horizontal':
                errorMode = (isInverted) ? 'Vertical' : mode;
                break;
            case 'Vertical':
                errorMode = (isInverted) ? 'Horizontal' : mode;
                break;
        }
        switch (errorMode) {
            case 'Horizontal':
                paths = this.getHorizontalDirection(start, mid, end, direction, errorMode, capLength);
                break;
            case 'Vertical':
                paths = this.getVerticalDirection(start, mid, end, direction, errorMode, capLength);
                break;
            case 'Both':
                paths = this.getBothDirection(start, mid, end, direction, errorMode, capLength);
                break;
        }
        return [paths[0], paths[1]];
    }
    // mean calculation for standard deviation and standard error
    meanCalculation(series, mode) {
        let sumOfX = 0;
        let sumOfY = 0;
        let verticalMean = 0;
        let horizontalMean = 0;
        let verStandardMean;
        let horStandardMean;
        let verSquareRoot;
        let horSquareRoot;
        let length = series.points.length;
        switch (mode) {
            case 'Vertical':
                sumOfY = sum(series.yData);
                verticalMean = sumOfY / length;
                break;
            case 'Horizontal':
                sumOfX = sum(series.xData);
                horizontalMean = sumOfX / length;
                break;
            case 'Both':
                sumOfY = sum(series.yData);
                verticalMean = sumOfY / length;
                sumOfX = sum(series.xData);
                horizontalMean = sumOfX / length;
        }
        for (let point of series.points) {
            if (mode === 'Vertical') {
                sumOfY = sumOfY + Math.pow((point.yValue - verticalMean), 2);
            }
            else if (mode === 'Horizontal') {
                sumOfX = sumOfX + Math.pow((point.xValue - horizontalMean), 2);
            }
            else {
                sumOfY = sumOfY + Math.pow((point.yValue - verticalMean), 2);
                sumOfX = sumOfX + Math.pow((point.xValue - horizontalMean), 2);
            }
        }
        verStandardMean = sumOfY / (length - 1);
        verSquareRoot = Math.sqrt(sumOfY / (length - 1));
        horStandardMean = sumOfX / (length - 1);
        horSquareRoot = Math.sqrt(sumOfX / (length - 1));
        return new Mean(verStandardMean, verSquareRoot, horStandardMean, horSquareRoot, verticalMean, horizontalMean);
    }
    createElement(series) {
        let explodeValue = 5;
        let render = series.chart.renderer;
        let transform;
        transform = series.chart.chartAreaType === 'Cartesian' ? 'translate(' + series.clipRect.x + ',' + (series.clipRect.y) + ')' : '';
        let markerHeight = (series.marker.height + explodeValue) / 2;
        let markerWidth = (series.marker.width + explodeValue) / 2;
        if (series.chart.chartAreaType === 'Cartesian') {
            let errorBarClipRect = render.drawClipPath(new RectOption(this.chart.element.id + '_ChartErrorBarClipRect_' + series.index, 'transparent', { width: 1, color: 'Gray' }, 1, {
                x: -markerWidth, y: -markerHeight,
                width: series.clipRect.width + markerWidth * 2, height: series.clipRect.height + markerHeight * 2
            }));
            series.errorBarElement = render.createGroup({
                'id': this.chart.element.id + 'ErrorBarGroup' + series.index,
                'transform': transform,
                'clip-path': 'url(#' + this.chart.element.id + '_ChartErrorBarClipRect_' + series.index + ')'
            });
            series.errorBarElement.appendChild(errorBarClipRect);
        }
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doErrorBarAnimation(series) {
        let errorBarElements = series.errorBarElement.childNodes;
        if (!errorBarElements) {
            return null;
        }
        let delay = series.animation.delay + series.animation.duration;
        let j = 1;
        while (j < errorBarElements.length) {
            for (let i = 0; i < series.points.length; i++) {
                if (!series.points[i].symbolLocations[0]) {
                    continue;
                }
                errorBarElements[j].style.visibility = 'hidden';
                templateAnimate(errorBarElements[j], delay, 350, series.chart.requireInvertedAxis ? 'SlideLeftIn' : 'SlideBottomIn', false);
            }
            j++;
        }
    }
    /**
     * Get module name.
     */
    getModuleName() {
        // Returns the module name
        return 'ErrorBar';
    }
    /**
     * To destroy the errorBar for series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        // Destroy method performed here
    }
}

/**
 * Chart legend
 */
/**
 * `Legend` module is used to render legend for the chart.
 */
class Legend extends BaseLegend {
    constructor(chart) {
        super(chart);
        this.library = this;
        this.addEventListener();
    }
    /**
     * Binding events for legend module.
     */
    addEventListener() {
        if (this.chart.isDestroyed) {
            return;
        }
        this.chart.on(Browser.touchMoveEvent, this.mouseMove, this);
        this.chart.on('click', this.click, this);
        this.chart.on(Browser.touchEndEvent, this.mouseEnd, this);
    }
    /**
     * UnBinding events for legend module.
     */
    removeEventListener() {
        if (this.chart.isDestroyed) {
            return;
        }
        this.chart.off(Browser.touchMoveEvent, this.mouseMove);
        this.chart.off('click', this.click);
        this.chart.off(Browser.touchEndEvent, this.mouseEnd);
    }
    /**
     * To handle mosue move for legend module
     */
    mouseMove(e) {
        if (this.chart.legendSettings.visible && !this.chart.isTouch) {
            this.move(e);
        }
    }
    /**
     * To handle mosue end for legend module
     */
    mouseEnd(e) {
        if (this.chart.legendSettings.visible && this.chart.isTouch) {
            this.move(e);
        }
    }
    /**
     * Get the legend options.
     * @return {void}
     * @private
     */
    getLegendOptions(visibleSeriesCollection, chart) {
        this.legendCollections = [];
        let seriesType;
        for (let series of visibleSeriesCollection) {
            if (series.category !== 'Indicator') {
                seriesType = (chart.chartAreaType === 'PolarRadar') ? series.drawType :
                    series.type;
                this.legendCollections.push(new LegendOptions(series.name, series.interior, series.legendShape, series.visible, seriesType, series.marker.shape, series.marker.visible));
            }
        }
    }
    /** @private */
    getLegendBounds(availableSize, legendBounds, legend) {
        let padding = legend.padding;
        let extraHeight = 0;
        let extraWidth = 0;
        if (!this.isVertical) {
            extraHeight = !legend.height ? ((availableSize.height / 100) * 5) : 0;
        }
        else {
            extraWidth = !legend.width ? ((availableSize.width / 100) * 5) : 0;
        }
        legendBounds.height += extraHeight;
        legendBounds.width += extraWidth;
        let shapeHeight = legend.shapeHeight;
        let shapeWidth = legend.shapeWidth;
        let shapePadding = legend.shapePadding;
        let maximumWidth = 0;
        let rowWidth = 0;
        let legendWidth = 0;
        let columnHeight = 0;
        let rowCount = 0;
        let legendEventArgs;
        this.maxItemHeight = Math.max(measureText('MeasureText', legend.textStyle).height, legend.shapeHeight);
        let render = false;
        for (let legendOption of this.legendCollections) {
            legendEventArgs = {
                fill: legendOption.fill, text: legendOption.text, shape: legendOption.shape,
                markerShape: legendOption.markerShape, name: legendRender, cancel: false
            };
            this.chart.trigger(legendRender, legendEventArgs);
            legendOption.render = !legendEventArgs.cancel;
            legendOption.text = legendEventArgs.text;
            legendOption.fill = legendEventArgs.fill;
            legendOption.shape = legendEventArgs.shape;
            legendOption.markerShape = legendEventArgs.markerShape;
            legendOption.textSize = measureText(legendOption.text, legend.textStyle);
            if (legendOption.render && legendOption.text !== '') {
                render = true;
                legendWidth = shapeWidth + shapePadding + legendOption.textSize.width + padding;
                rowWidth = rowWidth + legendWidth;
                if (legendBounds.width < (padding + rowWidth) || this.isVertical) {
                    maximumWidth = Math.max(maximumWidth, (rowWidth + padding - (this.isVertical ? 0 : legendWidth)));
                    if (rowCount === 0 && (legendWidth !== rowWidth)) {
                        rowCount = 1;
                    }
                    rowWidth = this.isVertical ? 0 : legendWidth;
                    rowCount++;
                    columnHeight = (rowCount * (this.maxItemHeight + padding)) + padding;
                }
            }
        }
        columnHeight = Math.max(columnHeight, (this.maxItemHeight + padding) + padding);
        this.isPaging = legendBounds.height < columnHeight;
        this.totalPages = rowCount;
        if (render) {
            this.setBounds(Math.max((rowWidth + padding), maximumWidth), columnHeight, legend, legendBounds);
        }
        else {
            this.setBounds(0, 0, legend, legendBounds);
        }
    }
    /** @private */
    getRenderPoint(legendOption, start, textPadding, prevLegend, rect, count, firstLegend) {
        let padding = this.legend.padding;
        let previousBound = (prevLegend.location.x + textPadding + prevLegend.textSize.width);
        if ((previousBound + (legendOption.textSize.width + textPadding)) > (rect.x + rect.width + this.legend.shapeWidth / 2) ||
            this.isVertical) {
            legendOption.location.x = start.x;
            legendOption.location.y = (count === firstLegend) ? prevLegend.location.y :
                prevLegend.location.y + this.maxItemHeight + padding;
        }
        else {
            legendOption.location.x = (count === firstLegend) ? prevLegend.location.x : previousBound;
            legendOption.location.y = prevLegend.location.y;
        }
        let availwidth = (this.legendBounds.x + this.legendBounds.width) - (legendOption.location.x +
            textPadding - this.legend.shapeWidth / 2);
        legendOption.text = textTrim(+availwidth.toFixed(4), legendOption.text, this.legend.textStyle);
    }
    /** @private */
    LegendClick(seriesIndex) {
        let chart = this.chart;
        let series = chart.visibleSeries[seriesIndex];
        let legend = this.legendCollections[seriesIndex];
        let selectedDataIndexes = [];
        if (chart.selectionModule) {
            selectedDataIndexes = extend([], chart.selectionModule.selectedDataIndexes, null, true);
        }
        if (chart.legendSettings.toggleVisibility) {
            if (!series.visible) {
                series.visible = true;
            }
            else {
                series.visible = false;
            }
            legend.visible = (series.visible);
            if (chart.svgObject.childNodes.length > 0) {
                while (chart.svgObject.lastChild) {
                    chart.svgObject.removeChild(chart.svgObject.lastChild);
                }
                remove(chart.svgObject);
            }
            chart.animateSeries = false;
            chart.removeSvg();
            chart.refreshAxis();
            series.refreshAxisLabel();
            this.refreshSeries(chart.visibleSeries);
            chart.refreshBound();
            if (selectedDataIndexes.length > 0) {
                chart.selectionModule.selectedDataIndexes = selectedDataIndexes;
                chart.selectionModule.redrawSelection(chart, chart.selectionMode);
            }
        }
        else if (chart.selectionModule) {
            chart.selectionModule.legendSelection(chart, seriesIndex);
        }
    }
    refreshSeries(seriesCollection) {
        for (let series of seriesCollection) {
            series.position = undefined;
        }
    }
    /**
     * To show the tooltip for the trimmed text in legend.
     * @return {void}
     */
    click(event) {
        if (!this.chart.legendSettings.visible) {
            return;
        }
        let targetId = event.target.id;
        let legendItemsId = [this.legendID + '_text_', this.legendID + '_shape_marker_',
            this.legendID + '_shape_'];
        let seriesIndex;
        for (let id of legendItemsId) {
            if (targetId.indexOf(id) > -1) {
                seriesIndex = parseInt(targetId.split(id)[1], 10);
                this.LegendClick(seriesIndex);
            }
        }
        if (targetId.indexOf(this.legendID + '_pageup') > -1) {
            this.changePage(event, true);
        }
        else if (targetId.indexOf(this.legendID + '_pagedown') > -1) {
            this.changePage(event, false);
        }
    }
    /**
     * Get module name
     */
    getModuleName() {
        return 'Legend';
    }
    /**
     * To destroy the Legend.
     * @return {void}
     * @private
     */
    destroy(chart) {
        this.removeEventListener();
    }
}

/**
 * Annotation Module handles the Annotation for chart and accumulation series.
 */
class AnnotationBase {
    /**
     * Constructor for chart and accumulation annotation
     * @param control
     */
    constructor(control) {
        this.control = control;
    }
    /**
     * Method to render the annotation for chart and accumulation series.
     * @private
     * @param annotation
     * @param index
     */
    render(annotation, index) {
        this.isChart = this.control.getModuleName() === 'chart';
        this.annotation = annotation;
        let childElement = createTemplate(createElement('div', {
            id: this.control.element.id + '_Annotation_' + index,
            styles: 'position: absolute;'
        }), index, annotation.content, this.control);
        return childElement;
    }
    /**
     * Method to calculate the location for annotation - coordinate unit as pixel.
     * @private
     * @param location
     */
    setAnnotationPixelValue(location) {
        let rect;
        rect = this.annotation.region === 'Chart' ?
            new Rect(0, 0, this.control.availableSize.width, this.control.availableSize.height) :
            this.isChart ?
                this.control.chartAxisLayoutPanel.seriesClipRect :
                this.control.series[0].accumulationBound;
        location.x = ((typeof this.annotation.x !== 'string') ?
            ((typeof this.annotation.x === 'number') ? this.annotation.x : 0) :
            stringToNumber(this.annotation.x, rect.width)) + rect.x;
        location.y = ((typeof this.annotation.y === 'number') ? this.annotation.y :
            stringToNumber(this.annotation.y, rect.height)) + rect.y;
        return true;
    }
    /**
     * Method to calculate the location for annotation - coordinate unit as point.
     * @private
     * @param location
     */
    setAnnotationPointValue(location) {
        let symbolLocation = new ChartLocation(0, 0);
        if (this.isChart) {
            let xAxis;
            let yAxis;
            let chart = this.control;
            let annotation = this.annotation;
            let xValue;
            let isLog = false;
            let xAxisName = annotation.xAxisName;
            let yAxisName = annotation.yAxisName;
            let isInverted = chart.requireInvertedAxis;
            for (let axis of chart.axisCollections) {
                if (xAxisName === axis.name || (xAxisName == null && axis.name === 'primaryXAxis')) {
                    xAxis = axis;
                    if (xAxis.valueType.indexOf('Category') > -1) {
                        let xAnnotation = xAxis.valueType === 'DateTimeCategory' ? (annotation.x.getTime()).toString() :
                            annotation.x;
                        if (xAxis.labels.indexOf(xAnnotation) < 0) {
                            return false;
                        }
                        else {
                            xValue = xAxis.labels.indexOf(xAnnotation);
                        }
                    }
                    else if (xAxis.valueType === 'DateTime') {
                        let option = { skeleton: 'full', type: 'dateTime' };
                        xValue = (typeof this.annotation.x === 'object') ?
                            Date.parse(chart.intl.getDateParser(option)(chart.intl.getDateFormat(option)(new Date(DataUtil.parse.parseJson({ val: annotation.x }).val)))) : 0;
                    }
                    else {
                        xValue = +annotation.x;
                    }
                }
                else if (yAxisName === axis.name || (yAxisName == null && axis.name === 'primaryYAxis')) {
                    yAxis = axis;
                    isLog = yAxis.valueType === 'Logarithmic';
                }
            }
            if (xAxis && yAxis && withIn(xAxis.valueType === 'Logarithmic' ? logBase(xValue, xAxis.logBase) : xValue, xAxis.visibleRange)) {
                symbolLocation = getPoint(xValue, withIn((isLog ? logBase(+this.annotation.y, yAxis.logBase) : +this.annotation.y), yAxis.visibleRange) ? +annotation.y :
                    isLog ? Math.pow(yAxis.logBase, yAxis.visibleRange.max) :
                        +annotation.y > yAxis.visibleRange.max ? yAxis.visibleRange.max : yAxis.visibleRange.min, xAxis, yAxis, isInverted);
                location.x = symbolLocation.x + (isInverted ? yAxis.rect.x : xAxis.rect.x);
                location.y = symbolLocation.y + (isInverted ? xAxis.rect.y : yAxis.rect.y);
            }
            else {
                return false;
            }
            return true;
        }
        else {
            return this.setAccumulationPointValue(location);
        }
    }
    /**
     * To process the annotation for accumulation chart
     * @param annotation
     * @param index
     * @param parentElement
     */
    processAnnotation(annotation, index, parentElement) {
        let annotationElement;
        let location;
        location = new ChartLocation(0, 0);
        annotationElement = this.render(annotation, index);
        if (this['setAnnotation' + annotation.coordinateUnits + 'Value'](location)) {
            this.setElementStyle(location, annotationElement, parentElement);
        }
    }
    /**
     * Method to calculate the location for annotation - coordinate unit as point in accumulation chart.
     * @private
     * @param location
     */
    setAccumulationPointValue(location) {
        let accumulation = this.control;
        let point;
        for (let accPoint of accumulation.visibleSeries[0].points) {
            if (typeof accPoint.x === 'object') {
                if (Date.parse(accPoint.x) === Date.parse(this.annotation.x) &&
                    accPoint.y === this.annotation.y) {
                    point = accPoint;
                    break;
                }
            }
            else {
                if (accPoint.x === this.annotation.x && accPoint.y === this.annotation.y) {
                    point = accPoint;
                    break;
                }
            }
        }
        if (point && point.visible) {
            location.x = point.symbolLocation.x;
            location.y = point.symbolLocation.y;
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Method to set the element style for accumulation / chart annotation.
     * @private
     * @param location
     * @param element
     * @param parentElement
     */
    setElementStyle(location, element, parentElement) {
        let elementRect = measureElementRect(element);
        let argsData = {
            cancel: false, name: annotationRender, content: element,
            location: location
        };
        this.control.trigger(annotationRender, argsData);
        if (!argsData.cancel) {
            argsData.content.style.left = this.setAlignmentValue(this.annotation.horizontalAlignment, elementRect.width, argsData.location.x) + 'px';
            argsData.content.style.top = this.setAlignmentValue(this.annotation.verticalAlignment, elementRect.height, argsData.location.y) + 'px';
            argsData.content.setAttribute('aria-label', this.annotation.description || 'Annotation');
            appendElement(argsData.content, parentElement);
        }
    }
    /**
     * Method to calculate the alignment value for annotation.
     * @private
     * @param alignment
     * @param size
     * @param value
     */
    setAlignmentValue(alignment, size, value) {
        switch (alignment) {
            case 'Top':
            case 'Near':
                value -= size;
                break;
            case 'Bottom':
            case 'Far':
                value += 0;
                break;
            case 'Middle':
            case 'Center':
                value -= (size / 2);
                break;
        }
        return value;
    }
}

/**
 * `ChartAnnotation` module handles the annotation for chart.
 */
class ChartAnnotation extends AnnotationBase {
    /**
     * Constructor for chart annotation.
     * @private.
     */
    constructor(control, annotations) {
        super(control);
        this.chart = control;
    }
    /**
     * Method to render the annotation for chart
     * @param element
     * @private
     */
    renderAnnotations(element) {
        this.annotations = this.chart.annotations;
        this.parentElement = createElement('div', {
            id: this.chart.element.id + '_Annotation_Collections'
        });
        this.annotations.map((annotation, index) => {
            this.processAnnotation(annotation, index, this.parentElement);
        });
        appendElement(this.parentElement, element);
    }
    /**
     * To destroy the annotation.
     * @return {void}
     * @private
     */
    destroy(control) {
        // Destroy method performed here
    }
    /**
     * Get module name.
     */
    getModuleName() {
        // Returns te module name
        return 'Annotation';
    }
}

/**
 * `BoxAndWhiskerSeries` module is used to render the box and whisker series.
 */
class BoxAndWhiskerSeries extends ColumnBase {
    /**
     * Render BoxAndWhisker series.
     * @return {void}
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let sideBySideInfo = this.getSideBySideInfo(series);
        let argsData;
        let borderWidth = series.border.width || 1;
        for (let point of series.points) {
            point.symbolLocations = [];
            point.regions = [];
            let centerRegion;
            if (point.visible && withInRange(series.points[point.index - 1], point, series.points[point.index + 1], series)) {
                this.findBoxPlotValues(point.y, point, series.boxPlotMode);
                //region to cover the top and bottom ticks
                this.updateTipRegion(series, point, sideBySideInfo);
                //get middle rect
                centerRegion = this.getRectangle((point.xValue + sideBySideInfo.start), point.upperQuartile, (point.xValue + sideBySideInfo.end), point.lowerQuartile, series);
                point.regions.push(centerRegion);
                argsData = this.triggerEvent(series, point, series.interior, {
                    color: (!isNullOrUndefined(series.border.color) && series.border.color !== 'transparent') ? series.border.color :
                        getSaturationColor(series.interior, -0.6),
                    width: series.border.width ? series.border.width : 1
                });
                if (!argsData.cancel) {
                    this.renderBoxAndWhisker(series, point, centerRegion, argsData, this.getPathString(point, series, getPoint(point.xValue, point.median, xAxis, yAxis, isInverted), getPoint(point.xValue, point.average, xAxis, yAxis, isInverted)));
                }
            }
        }
        if (series.marker.visible) {
            series.chart.markerRender.render(series);
        }
    }
    /**
     * update the tip region fo box plot
     * @param series
     * @param point
     * @param sideBySideInfo
     */
    updateTipRegion(series, point, sideBySideInfo) {
        let tipRegion = this.getRectangle((point.xValue + sideBySideInfo.median), point.maximum, (point.xValue + sideBySideInfo.median), point.minimum, series);
        this.updateTipSize(series, point, tipRegion, series.chart.requireInvertedAxis);
    }
    /**
     * Update tip size to tip regions
     * @param series
     * @param point
     * @param region
     * @param isInverted
     */
    updateTipSize(series, point, region, isInverted) {
        let borderWidth = series.border.width || 1;
        if (!isInverted) {
            region.x -= borderWidth / 2;
            region.width = region.width || borderWidth;
        }
        else {
            region.y -= borderWidth / 2;
            region.height = region.height || borderWidth;
        }
        point.regions.push(region);
    }
    /**
     * Calculation for path direction performed here
     * @param point
     * @param series
     * @param median
     * @param average
     */
    getPathString(point, series, median, average) {
        let topRect = point.regions[0];
        let midRect = point.regions[1];
        let direction = '';
        let width = series.chart.requireInvertedAxis ? topRect.height : topRect.width;
        let center = series.chart.requireInvertedAxis ? topRect.y + topRect.height / 2 :
            topRect.x + topRect.width / 2;
        let midWidth = midRect.x + midRect.width;
        let midHeight = midRect.y + midRect.height;
        let topWidth = topRect.x + topRect.width;
        let topHeight = topRect.y + topRect.height;
        if (!series.chart.requireInvertedAxis) {
            this.updateTipSize(series, point, { x: midRect.x, y: topRect.y, width: midWidth - midRect.x, height: 0 }, true);
            this.updateTipSize(series, point, { x: midRect.x, y: topHeight, width: midWidth - midRect.x, height: 0 }, true);
            direction += 'M ' + midRect.x + ' ' + topRect.y + ' ' + ' L ' + midWidth + ' ' + topRect.y;
            direction += ' M ' + center + ' ' + topRect.y + ' ' + ' L ' + center + ' ' + midRect.y;
            direction += ' M ' + midRect.x + ' ' + midRect.y + ' ' + ' L ' + midWidth + ' ' + midRect.y +
                ' L ' + midWidth + ' ' + midHeight + ' L ' + midRect.x + ' ' + midHeight + ' Z';
            direction += ' M ' + center + ' ' + midHeight + ' L ' + center + ' ' + topHeight;
            direction += ' M ' + midRect.x + ' ' + topHeight + ' L ' + midWidth + ' ' + topHeight;
            direction += ' M ' + midRect.x + ' ' + median.y + ' L ' + midWidth + ' ' + median.y;
            direction += series.showMean ?
                ' M ' + (average.x - 5) + ' ' + (average.y - 5) + ' L ' + (average.x + 5) + ' ' + (average.y + 5) +
                    ' M ' + (average.x + 5) + ' ' + (average.y - 5) + ' L ' + (average.x - 5) + ' ' + (average.y + 5) : '';
        }
        else {
            this.updateTipSize(series, point, { x: topRect.x, y: midRect.y, width: 0, height: midHeight - midRect.y }, false);
            this.updateTipSize(series, point, { x: topWidth, y: midRect.y, width: 0, height: midHeight - midRect.y }, true);
            direction += 'M ' + topRect.x + ' ' + midRect.y + ' L ' + topRect.x + ' ' + midHeight;
            direction += 'M ' + topRect.x + ' ' + center + ' ' + ' L ' + midRect.x + ' ' + center;
            direction += ' M ' + midRect.x + ' ' + midRect.y + ' ' + ' L ' + midWidth + ' ' + midRect.y +
                ' L ' + midWidth + ' ' + midHeight + ' L ' + midRect.x + ' ' + midHeight + ' Z';
            direction += ' M ' + midWidth + ' ' + center + ' L ' + topWidth + ' ' + center;
            direction += ' M ' + topWidth + ' ' + midRect.y + ' L ' + topWidth + ' ' + midHeight;
            direction += ' M ' + median.x + ' ' + midRect.y + ' ' + ' L ' + median.x + ' ' + midHeight;
            direction += series.showMean ?
                'M ' + (average.x + 5) + ' ' + (average.y - 5) + ' L ' + (average.x - 5) + ' ' + (average.y + 5) +
                    'M ' + (average.x - 5) + ' ' + (average.y - 5) + ' L ' + (average.x + 5) + ' ' + (average.y + 5) : '';
        }
        return direction;
    }
    /**
     * Rendering for box and whisker append here.
     * @param series
     * @param point
     * @param rect
     * @param argsData
     * @param direction
     */
    renderBoxAndWhisker(series, point, rect, argsData, direction) {
        let location;
        let size;
        let symbolId = series.chart.element.id + '_Series_' + series.index + '_Point_' + point.index;
        let element = series.chart.renderer.drawPath(new PathOption(symbolId + '_BoxPath', argsData.fill, argsData.border.width, argsData.border.color, series.opacity, series.dashArray, direction));
        element.setAttribute('aria-label', point.x.toString() + ':' + point.maximum.toString()
            + ':' + point.minimum.toString() + ':' + point.lowerQuartile.toString() + ':' + point.upperQuartile.toString());
        let parentElement = series.chart.renderer.createGroup({
            'id': symbolId
        });
        parentElement.appendChild(element);
        for (let i = 0; i < point.outliers.length; i++) {
            location = getPoint(point.xValue, point.outliers[i], series.xAxis, series.yAxis, series.chart.requireInvertedAxis);
            size = new Size(series.marker.width, series.marker.height);
            point.symbolLocations.push(location);
            this.updateTipSize(series, point, {
                x: location.x - (size.width / 2), y: location.y - (size.height / 2),
                width: size.width, height: size.height
            }, true);
        }
        series.seriesElement.appendChild(parentElement);
    }
    /**
     * To find the box plot values
     * @param yValues
     * @param point
     * @param mode
     */
    findBoxPlotValues(yValues, point, mode) {
        let yCount = yValues.length;
        let quartile = {
            average: sum(yValues) / yCount,
            lowerQuartile: 0, upperQuartile: 0,
            maximum: 0, minimum: 0,
            median: 0, outliers: []
        };
        if (mode === 'Exclusive') {
            quartile.lowerQuartile = this.getExclusiveQuartileValue(yValues, yCount, 0.25);
            quartile.upperQuartile = this.getExclusiveQuartileValue(yValues, yCount, 0.75);
            quartile.median = this.getExclusiveQuartileValue(yValues, yCount, 0.5);
        }
        else if (mode === 'Inclusive') {
            quartile.lowerQuartile = this.getInclusiveQuartileValue(yValues, yCount, 0.25);
            quartile.upperQuartile = this.getInclusiveQuartileValue(yValues, yCount, 0.75);
            quartile.median = this.getInclusiveQuartileValue(yValues, yCount, 0.5);
        }
        else {
            quartile.median = getMedian(yValues);
            this.getQuartileValues(yValues, yCount, quartile);
        }
        this.getMinMaxOutlier(yValues, yCount, quartile);
        point.minimum = quartile.minimum;
        point.maximum = quartile.maximum;
        point.lowerQuartile = quartile.lowerQuartile;
        point.upperQuartile = quartile.upperQuartile;
        point.median = quartile.median;
        point.outliers = quartile.outliers;
        point.average = quartile.average;
    }
    /**
     * to find the exclusive quartile values
     * @param yValues
     * @param count
     * @param percentile
     */
    getExclusiveQuartileValue(yValues, count, percentile) {
        if (count === 0) {
            return 0;
        }
        else if (count === 1) {
            return yValues[0];
        }
        let value = 0;
        let rank = percentile * (count + 1);
        let integerRank = Math.floor(Math.abs(rank));
        let fractionRank = rank - integerRank;
        if (integerRank === 0) {
            value = yValues[0];
        }
        else if (integerRank > count - 1) {
            value = yValues[count - 1];
        }
        else {
            value = fractionRank * (yValues[integerRank] - yValues[integerRank - 1]) + yValues[integerRank - 1];
        }
        return value;
    }
    /**
     * to find the inclusive quartile values
     * @param yValues
     * @param count
     * @param percentile
     */
    getInclusiveQuartileValue(yValues, count, percentile) {
        if (count === 0) {
            return 0;
        }
        else if (count === 1) {
            return yValues[0];
        }
        let value = 0;
        let rank = percentile * (count - 1);
        let integerRank = Math.floor(Math.abs(rank));
        let fractionRank = rank - integerRank;
        value = fractionRank * (yValues[integerRank + 1] - yValues[integerRank]) + yValues[integerRank];
        return value;
    }
    /**
     * To find the quartile values
     * @param yValues
     * @param count
     * @param lowerQuartile
     * @param upperQuartile
     */
    getQuartileValues(yValues, count, quartile) {
        if (count === 1) {
            quartile.lowerQuartile = yValues[0];
            quartile.upperQuartile = yValues[0];
            return null;
        }
        let isEvenList = count % 2 === 0;
        let halfLength = count / 2;
        let lowerQuartileArray = yValues.slice(0, halfLength);
        let upperQuartileArray = yValues.slice(isEvenList ? halfLength : halfLength + 1, count);
        quartile.lowerQuartile = getMedian(lowerQuartileArray);
        quartile.upperQuartile = getMedian(upperQuartileArray);
    }
    /**
     * To find the min, max and outlier values
     * @param yValues
     * @param lowerQuartile
     * @param upperQuartile
     * @param minimum
     * @param maximum
     * @param outliers
     */
    getMinMaxOutlier(yValues, count, quartile) {
        let interquartile = quartile.upperQuartile - quartile.lowerQuartile;
        let rangeIQR = 1.5 * interquartile;
        for (let i = 0; i < count; i++) {
            if (yValues[i] < quartile.lowerQuartile - rangeIQR) {
                quartile.outliers.push(yValues[i]);
            }
            else {
                quartile.minimum = yValues[i];
                break;
            }
        }
        for (let i = count - 1; i >= 0; i--) {
            if (yValues[i] > quartile.upperQuartile + rangeIQR) {
                quartile.outliers.push(yValues[i]);
            }
            else {
                quartile.maximum = yValues[i];
                break;
            }
        }
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.animate(series);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'BoxAndWhiskerSeries';
        /**
         * return the module name
         */
    }
    /**
     * To destroy the candle series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroys the candle series.
         */
    }
}

/**
 * `MultiColoredAreaSeries` module used to render the area series with multi color.
 */
class MultiColoredAreaSeries extends MultiColoredSeries {
    /**
     * Render Area series.
     * @return {void}
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let firstPoint;
        let startPoint = null;
        let direction = '';
        let origin = Math.max(series.yAxis.visibleRange.min, 0);
        let options = [];
        let startRegion;
        let previous;
        let rendered;
        let segments = this.sortSegments(series, series.segments);
        series.points.map((point, i, seriesPoints) => {
            point.symbolLocations = [];
            point.regions = [];
            rendered = false;
            if (point.visible && withInRange(seriesPoints[i - 1], point, seriesPoints[i + 1], series)) {
                direction += this.getAreaPathDirection(point.xValue, origin, series, isInverted, getPoint, startPoint, 'M');
                startPoint = startPoint || new ChartLocation(point.xValue, origin);
                firstPoint = getPoint(point.xValue, point.yValue, xAxis, yAxis, isInverted, series);
                if (previous && this.setPointColor(point, previous, series, series.segmentAxis === 'X', segments)) {
                    rendered = true;
                    startRegion = getPoint(startPoint.x, origin, xAxis, yAxis, isInverted, series);
                    direction += ('L' + ' ' + (firstPoint.x) + ' ' + (firstPoint.y) + ' ');
                    direction += ('L' + ' ' + (firstPoint.x) + ' ' + (startRegion.y) + ' ');
                    this.generatePathOption(options, series, previous, direction, '_Point_' + previous.index);
                    direction = 'M' + ' ' + (firstPoint.x) + ' ' + (startRegion.y) + ' ' + 'L' + ' ' +
                        (firstPoint.x) + ' ' + (firstPoint.y) + ' ';
                }
                else {
                    direction += ('L' + ' ' + (firstPoint.x) + ' ' + (firstPoint.y) + ' ');
                    this.setPointColor(point, null, series, series.segmentAxis === 'X', segments);
                }
                if (seriesPoints[i + 1] && !seriesPoints[i + 1].visible && series.emptyPointSettings.mode !== 'Drop') {
                    direction += this.getAreaEmptyDirection({ 'x': point.xValue, 'y': origin }, startPoint, series, isInverted, getPoint);
                    startPoint = null;
                }
                previous = point;
                this.storePointLocation(point, series, isInverted, getPoint);
            }
        });
        if (!rendered) {
            direction = series.points.length > 1 ?
                (direction + this.getAreaPathDirection(previous.xValue, origin, series, isInverted, getPoint, null, 'L')) : '';
            this.generatePathOption(options, series, previous, direction, '');
        }
        this.applySegmentAxis(series, options, segments);
        this.renderMarker(series);
    }
    /**
     * To Store the path directions of the area
     */
    generatePathOption(options, series, point, direction, id) {
        options.push(new PathOption(series.chart.element.id + '_Series_' + series.index + id, series.setPointColor(point, series.interior), series.border.width, series.border.color, series.opacity, series.dashArray, direction));
    }
    /**
     * To destroy the area series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method calling here
         */
    }
    /**
     * Get module name
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'MultiColoredAreaSeries';
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.doLinearAnimation(series, series.animation);
    }
}

/**
 * `MultiColoredLineSeries` used to render the line series with multi color.
 */
class MultiColoredLineSeries extends MultiColoredSeries {
    /**
     * Render Line Series.
     * @return {void}.
     * @private
     */
    render(series, xAxis, yAxis, isInverted) {
        let previous = null;
        let startPoint = 'M';
        let visiblePoints = this.improveChartPerformance(series);
        let options = [];
        let direction = '';
        let segments = this.sortSegments(series, series.segments);
        for (let point of visiblePoints) {
            point.regions = [];
            if (point.visible && withInRange(visiblePoints[point.index - 1], point, visiblePoints[point.index + 1], series)) {
                direction += this.getLineDirection(previous, point, series, isInverted, getPoint, startPoint);
                if (previous != null) {
                    if (this.setPointColor(point, previous, series, series.segmentAxis === 'X', segments)) {
                        options.push(new PathOption(series.chart.element.id + '_Series_' + series.index + '_Point_' + previous.index, 'none', series.width, series.setPointColor(previous, series.interior), series.opacity, series.dashArray, direction));
                        startPoint = 'M';
                        direction = '';
                    }
                    else {
                        startPoint = 'L';
                    }
                }
                else {
                    this.setPointColor(point, null, series, series.segmentAxis === 'X', segments);
                }
                previous = point;
                this.storePointLocation(point, series, isInverted, getPoint);
            }
            else {
                previous = (series.emptyPointSettings.mode === 'Drop') ? previous : null;
                startPoint = (series.emptyPointSettings.mode === 'Drop') ? startPoint : 'M';
                point.symbolLocations = [];
            }
        }
        if (direction !== '') {
            options.push(new PathOption(series.chart.element.id + '_Series_' + series.index, 'none', series.width, series.setPointColor(visiblePoints[visiblePoints.length - 1], series.interior), series.opacity, series.dashArray, direction));
        }
        this.applySegmentAxis(series, options, segments);
        this.renderMarker(series);
    }
    /**
     * Animates the series.
     * @param  {Series} series - Defines the series to animate.
     * @return {void}
     */
    doAnimation(series) {
        this.doLinearAnimation(series, series.animation);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        /**
         * Returns the module name of the series
         */
        return 'MultiColoredLineSeries';
    }
    /**
     * To destroy the line series.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * `MultiLevelLabel` module is used to render the multi level label in chart.
 */
class MultiLevelLabel {
    /**
     * Constructor for the logerithmic module.
     * @private
     */
    constructor(chart) {
        /** @private */
        this.xAxisPrevHeight = [];
        /** @private */
        this.xAxisMultiLabelHeight = [];
        /** @private */
        this.yAxisPrevHeight = [];
        /** @private */
        this.yAxisMultiLabelHeight = [];
        this.chart = chart;
    }
    /**
     * Finds multilevel label height
     * @return {void}
     */
    getMultilevelLabelsHeight(axis) {
        let value = 0;
        let multiLevelLabelsHeight = [];
        let prevHeight = [];
        let isVertical = axis.orientation === 'Vertical';
        let axisValue = isVertical ? axis.rect.height : axis.rect.width;
        let labelSize;
        let height;
        let padding = 10;
        let gap;
        axis.multiLevelLabels.map((multiLevel, index) => {
            multiLevel.categories.map((categoryLabel) => {
                if (categoryLabel.text !== '' && categoryLabel.start !== null && categoryLabel.end !== null) {
                    labelSize = measureText(categoryLabel.text, multiLevel.textStyle);
                    height = isVertical ? labelSize.width : labelSize.height;
                    height += 2 * multiLevel.border.width +
                        (multiLevel.border.type === 'CurlyBrace' ? padding : 0);
                    gap = (categoryLabel.maximumTextWidth !== null) ? categoryLabel.maximumTextWidth :
                        (valueToCoefficient(typeof categoryLabel.end === 'string' ? Number(new Date(categoryLabel.end)) :
                            categoryLabel.end, axis) * axisValue) -
                            (valueToCoefficient(typeof categoryLabel.start === 'string' ? Number(new Date(categoryLabel.start)) :
                                categoryLabel.start, axis) * axisValue);
                    if ((labelSize.width > gap - padding) && gap > 0 && (multiLevel.overflow === 'Wrap') && !isVertical) {
                        height = (height * (textWrap(categoryLabel.text, gap - padding, multiLevel.textStyle).length));
                    }
                    multiLevelLabelsHeight[index] = !multiLevelLabelsHeight[index] ? height :
                        ((multiLevelLabelsHeight[index] < height) ? height : multiLevelLabelsHeight[index]);
                }
            });
            prevHeight[index] = value;
            value += multiLevelLabelsHeight[index] ? (multiLevelLabelsHeight[index] + padding) : 0;
        });
        axis.multiLevelLabelHeight = value + ((axis.title !== '' || (this.chart.legendModule && this.chart.legendSettings.visible))
            ? padding / 2 : 0);
        if (isVertical) {
            this.yAxisMultiLabelHeight = multiLevelLabelsHeight;
            this.yAxisPrevHeight = prevHeight;
        }
        else {
            this.xAxisMultiLabelHeight = multiLevelLabelsHeight;
            this.xAxisPrevHeight = prevHeight;
        }
    }
    /**
     * render x axis multi level labels
     * @private
     * @return {void}
     */
    renderXAxisMultiLevelLabels(axis, index, parent, axisRect) {
        let x;
        let y;
        let padding = 10;
        let startX;
        let startY = (axis.labelPosition === axis.tickPosition ? axis.majorTickLines.height : 0) +
            (axis.maxLabelSize.height) + padding;
        let endX;
        let pathRect = '';
        let start;
        let end;
        let labelSize;
        let clipY;
        let isOutside = axis.labelPosition === 'Outside';
        let gap;
        let anchor;
        let isInversed = axis.isInversed;
        let argsData;
        let labelElement;
        let opposedPosition = axis.opposedPosition;
        clipY = ((opposedPosition && !isOutside) || (!opposedPosition && isOutside)) ?
            (axisRect.y + startY - axis.majorTickLines.width) : (axisRect.y - startY - axis.multiLevelLabelHeight);
        this.createClipRect(axisRect.x - axis.majorTickLines.width, clipY, axis.multiLevelLabelHeight + padding, axisRect.width + 2 * axis.majorTickLines.width, this.chart.element.id + '_XAxis_Clippath_' + index, this.chart.element.id + 'XAxisMultiLevelLabel' + index);
        axis.multiLevelLabels.map((multiLevel, level) => {
            pathRect = '';
            multiLevel.categories.map((categoryLabel, i) => {
                labelElement = this.chart.renderer.createGroup({ id: this.chart.element.id + index + '_MultiLevelLabel' + level });
                start = typeof categoryLabel.start === 'string' ? Number(new Date(categoryLabel.start)) : categoryLabel.start;
                end = typeof categoryLabel.end === 'string' ? Number(new Date(categoryLabel.end)) : categoryLabel.end;
                if (((start >= axis.visibleRange.min && start <= axis.visibleRange.max)
                    || (end >= axis.visibleRange.min && end <= axis.visibleRange.max))) {
                    argsData = this.triggerMultiLabelRender(axis, categoryLabel.text, axis.multiLevelLabels[level].textStyle, axis.multiLevelLabels[level].alignment);
                    if (!argsData.cancel) {
                        startX = valueToCoefficient(start, axis) * axisRect.width;
                        endX = valueToCoefficient(end, axis) * axisRect.width;
                        endX = isInversed ? [startX, startX = endX][0] : endX;
                        labelSize = measureText(argsData.text, argsData.textStyle);
                        gap = ((categoryLabel.maximumTextWidth === null) ? endX - startX : categoryLabel.maximumTextWidth) - padding;
                        x = startX + axisRect.x + padding;
                        y = ((opposedPosition && !isOutside) || (!opposedPosition && isOutside)) ? (startY + axisRect.y +
                            labelSize.height / 2 + padding + this.xAxisPrevHeight[level]) : (axisRect.y - startY + labelSize.height / 2 -
                            this.xAxisMultiLabelHeight[level] - this.xAxisPrevHeight[level]);
                        if (argsData.alignment === 'Center') {
                            x += (endX - startX - padding) / 2;
                            anchor = 'middle';
                        }
                        else if (argsData.alignment === 'Far') {
                            x = x + (endX - startX - padding) - multiLevel.border.width / 2;
                            anchor = 'end';
                        }
                        else {
                            anchor = 'start';
                            x += multiLevel.border.width / 2;
                        }
                        y = multiLevel.border.type === 'CurlyBrace' ?
                            (((!opposedPosition && isOutside) || (opposedPosition && !isOutside)) ? y + padding : y - padding / 2) : y;
                        let options = new TextOption(this.chart.element.id + index + '_Axis_MultiLevelLabel_Level_' + level + '_Text_' + i, x, y, anchor, argsData.text);
                        if (multiLevel.overflow !== 'None') {
                            options.text = (multiLevel.overflow === 'Wrap') ?
                                textWrap(argsData.text, gap, argsData.textStyle) : textTrim(gap, argsData.text, argsData.textStyle);
                            options.x = options.x - padding / 2;
                        }
                        textElement(options, argsData.textStyle, argsData.textStyle.color || this.chart.themeStyle.axisLabel, labelElement);
                        if (multiLevel.border.width > 0 && multiLevel.border.type !== 'WithoutBorder') {
                            pathRect = this.renderXAxisLabelBorder(level, endX - startX - padding, axis, startX, startY, labelSize, options, axisRect, argsData.alignment, pathRect, isOutside, opposedPosition);
                        }
                        this.multiElements.appendChild(labelElement);
                    }
                }
            });
            if (pathRect !== '') {
                this.createBorderElement(level, index, axis, pathRect);
            }
        });
        parent.appendChild(this.multiElements);
    }
    /**
     * render x axis multi level labels border
     * @private
     * @return {void}
     */
    renderXAxisLabelBorder(labelIndex, gap, axis, startX, startY, labelSize, textOptions, axisRect, alignment, path, isOutside, opposedPosition) {
        let padding = 10;
        let padding1;
        let padding2;
        let value;
        let value1;
        let groupLabel = axis.multiLevelLabels[labelIndex];
        let width = gap + padding;
        let height = this.xAxisMultiLabelHeight[labelIndex] + padding;
        let x = startX + axisRect.x;
        let y = ((!opposedPosition && isOutside) || (opposedPosition && !isOutside)) ?
            (startY + axisRect.y + this.xAxisPrevHeight[labelIndex]) : (axisRect.y - startY - this.xAxisPrevHeight[labelIndex]);
        switch (groupLabel.border.type) {
            case 'WithoutTopandBottomBorder':
            case 'Rectangle':
            case 'WithoutTopBorder':
                height = ((!opposedPosition && isOutside) || (opposedPosition && !isOutside)) ? height : -height;
                path += 'M' + x + ' ' + y + 'L' + x + ' ' + (y + height) +
                    'M' + (x + width) + ' ' + y + 'L' + (x + width) + ' ' + (y + height);
                path += (groupLabel.border.type !== 'WithoutTopandBottomBorder') ? ('L' + ' ' + (x) + ' ' + (y + height) + ' ') : ' ';
                path += groupLabel.border.type === 'Rectangle' ? ('M' + x + ' ' + y + 'L' + (x + width) + ' ' + y) : ' ';
                break;
            case 'Brace':
                if (alignment === 'Near') {
                    value = textOptions.x;
                    value1 = textOptions.x + labelSize.width + 2;
                }
                else if (alignment === 'Center') {
                    value = textOptions.x - labelSize.width / 2 - 2;
                    value1 = textOptions.x + labelSize.width / 2 + 2;
                }
                else {
                    value = textOptions.x - labelSize.width - 2;
                    value1 = textOptions.x;
                }
                height = ((!opposedPosition && isOutside) || (opposedPosition && !isOutside)) ? height : -height;
                path += 'M' + x + ' ' + y + 'L' + x + ' ' + (y + height / 2) +
                    'M' + x + ' ' + (y + height / 2) + 'L' + (value - 2) + ' ' + (y + height / 2) +
                    'M' + (value1) + ' ' + (y + height / 2) + 'L' + (x + width) + ' ' + (y + height / 2) +
                    'M' + (x + width) + ' ' + (y + height / 2) + 'L' + (x + width) + ' ' + (y);
                break;
            case 'CurlyBrace':
                if ((!opposedPosition && isOutside) || (opposedPosition && !isOutside)) {
                    padding = 10;
                    padding1 = 15;
                    padding2 = 5;
                }
                else {
                    padding = -10;
                    padding1 = -15;
                    padding2 = -5;
                }
                if (alignment === 'Center') {
                    path += 'M' + x + ' ' + y + ' C ' + x + ' ' + y + ' ' + (x + 5) + ' ' + (y + padding) + ' ' + (x + 10) + ' ' +
                        (y + padding) + 'L' + (x + width / 2 - 5) + ' ' + (y + padding) + 'L' + (x + width / 2) + ' ' + (y + padding1) +
                        'L' + (x + width / 2 + 5) + ' ' + (y + padding) + 'L' + (x + width - 10) + ' ' + (y + padding) + ' C ' +
                        (x + width - 10) + ' ' + (y + padding) + ' ' + (x + width) + ' ' + (y + padding2) + ' ' + (x + width) + ' ' + (y);
                }
                else if (alignment === 'Near') {
                    path += 'M' + x + ' ' + y + ' C ' + x + ' ' + y + ' ' + (x + 5) + ' ' + (y + padding) + ' ' + (x + 10) + ' ' +
                        (y + padding) + 'L' + (x + 15) + ' ' + (y + padding1) + 'L' + (x + 20) + ' ' + (y + padding) + 'L' +
                        (x + width - 10) + ' ' + (y + padding) + ' C ' + (x + width - 10) + ' ' + (y + padding) + ' ' + (x + width) + ' '
                        + (y + padding2) + ' ' + (x + width) + ' ' + (y);
                }
                else {
                    path += 'M' + x + ' ' + y + ' C ' + x + ' ' + y + ' ' + (x + 5) + ' ' + (y + padding) + ' ' + (x + 10) + ' ' +
                        (y + padding) + 'L' + (x + width - 20) + ' ' + (y + padding) + 'L' + (x + width - 15) + ' ' + (y + padding1) +
                        'L' + (x + width - 10) + ' ' + (y + padding) + 'L' + (x + width - 10) + ' ' + (y + padding) + ' C '
                        + (x + width - 10) + ' ' + (y + padding) + ' ' + (x + width) + ' ' + (y + padding2) + ' ' + (x + width) + ' ' + (y);
                }
                break;
        }
        return path;
    }
    /**
     * render y axis multi level labels
     * @private
     * @return {void}
     */
    renderYAxisMultiLevelLabels(axis, index, parent, rect) {
        let labelSize;
        let clipX;
        let isOutside = axis.labelPosition === 'Outside';
        let x;
        let y;
        let padding = 10;
        let startX = (axis.tickPosition === axis.labelPosition ? axis.majorTickLines.height : 0) +
            (axis.maxLabelSize.width) + padding;
        let startY;
        let path = '';
        let labelElement;
        let endY;
        let argsData;
        let isInversed = axis.isInversed;
        let start;
        let end;
        let gap;
        let anchor = 'middle';
        let opposedPosition = axis.opposedPosition;
        clipX = ((opposedPosition && !isOutside) || (!opposedPosition && isOutside)) ?
            (rect.x - axis.multiLevelLabelHeight - startX - padding) : (rect.x + startX);
        this.createClipRect(clipX, rect.y - axis.majorTickLines.width, rect.height + 2 * axis.majorTickLines.width, axis.multiLevelLabelHeight + padding, this.chart.element.id + '_YAxis_Clippath_' + index, this.chart.element.id + 'YAxisMultiLevelLabel' + index);
        axis.multiLevelLabels.map((multiLevel, level) => {
            path = '';
            multiLevel.categories.map((categoryLabel, i) => {
                labelElement = this.chart.renderer.createGroup({ id: this.chart.element.id + index + '_MultiLevelLabel' + level });
                end = typeof categoryLabel.end === 'string' ? Number(new Date(categoryLabel.end)) : categoryLabel.end;
                start = typeof categoryLabel.start === 'string' ? Number(new Date(categoryLabel.start)) : categoryLabel.start;
                if (((start >= axis.visibleRange.min && start <= axis.visibleRange.max)
                    || (end >= axis.visibleRange.min && end <= axis.visibleRange.max))) {
                    startY = valueToCoefficient((start), axis) * (rect.height);
                    endY = valueToCoefficient((end), axis) * (rect.height);
                    endY = isInversed ? [startY, startY = endY][0] : endY;
                    argsData = this.triggerMultiLabelRender(axis, categoryLabel.text, multiLevel.textStyle, multiLevel.alignment);
                    if (!argsData.cancel) {
                        labelSize = measureText(argsData.text, argsData.textStyle);
                        gap = endY - startY;
                        x = rect.x - startX - this.yAxisPrevHeight[level] -
                            (this.yAxisMultiLabelHeight[level] / 2) - padding / 2;
                        y = rect.height + rect.y - startY - (gap / 2);
                        if (opposedPosition) {
                            x = isOutside ? rect.x + startX + padding / 2 + (this.yAxisMultiLabelHeight[level] / 2) +
                                this.yAxisPrevHeight[level] : rect.x - startX - (this.yAxisMultiLabelHeight[level] / 2) -
                                this.yAxisPrevHeight[level] - padding / 2;
                        }
                        else {
                            x = isOutside ? x : rect.x + startX + padding / 2 + (this.yAxisMultiLabelHeight[level] / 2) +
                                this.yAxisPrevHeight[level];
                        }
                        if (argsData.alignment === 'Center') {
                            y += labelSize.height / 4;
                        }
                        else if (argsData.alignment === 'Far') {
                            y += gap / 2 - labelSize.height / 2;
                        }
                        else {
                            y = y - gap / 2 + labelSize.height;
                        }
                        x = multiLevel.border.type === 'CurlyBrace' ? (((!opposedPosition && isOutside) ||
                            (opposedPosition && !isOutside)) ? x - padding : x + padding) : x;
                        let options = new TextOption(this.chart.element.id + index + '_Axis_MultiLevelLabel_Level_' + level + '_Text_' + i, x, y, anchor, argsData.text);
                        options.text = (multiLevel.overflow === 'Trim') ?
                            textTrim((categoryLabel.maximumTextWidth === null ? this.yAxisMultiLabelHeight[level] :
                                categoryLabel.maximumTextWidth), argsData.text, argsData.textStyle) : options.text;
                        textElement(options, argsData.textStyle, argsData.textStyle.color || this.chart.themeStyle.axisLabel, labelElement);
                        if (multiLevel.border.width > 0 && multiLevel.border.type !== 'WithoutBorder') {
                            path = this.renderYAxisLabelBorder(level, gap, axis, endY, startX, startY, labelSize, options, rect, argsData.alignment, path, isOutside, opposedPosition);
                        }
                        this.multiElements.appendChild(labelElement);
                    }
                }
            });
            if (path !== '') {
                this.createBorderElement(level, index, axis, path);
            }
        });
        parent.appendChild(this.multiElements);
    }
    /**
     * render y axis multi level labels border
     * @private
     * @return {void}
     */
    renderYAxisLabelBorder(labelIndex, gap, axis, endY, startX, startY, labelSize, textOptions, rect, alignment, path, isOutside, opposedPosition) {
        let height = endY - startY;
        let padding = 10;
        let padding1;
        let padding2;
        let groupLabel = axis.multiLevelLabels[labelIndex];
        let y = rect.y + rect.height - endY;
        let width = this.yAxisMultiLabelHeight[labelIndex] + padding;
        let x = ((!opposedPosition && isOutside) || (opposedPosition && !isOutside)) ? rect.x - startX -
            this.yAxisPrevHeight[labelIndex] : rect.x + startX + this.yAxisPrevHeight[labelIndex];
        switch (groupLabel.border.type) {
            case 'WithoutTopandBottomBorder':
            case 'Rectangle':
            case 'WithoutTopBorder':
                width = ((!opposedPosition && isOutside) || (opposedPosition && !isOutside)) ? -width : width;
                path += 'M' + x + ' ' + y + 'L' + (x + width) + ' ' + y +
                    'M' + x + ' ' + (y + height) + 'L' + (x + width) + ' ' + (y + height);
                path += (groupLabel.border.type !== 'WithoutTopandBottomBorder') ? ('L' + ' ' + (x + width) + ' ' + y + ' ') : ' ';
                path += (groupLabel.border.type === 'Rectangle') ? ('M' + (x) + ' ' + (y + height) + 'L' + ' ' + (x) + ' ' + y + ' ') : ' ';
                break;
            case 'Brace':
                width = ((!opposedPosition && isOutside) || (opposedPosition && !isOutside)) ? width : -width;
                path += 'M ' + (x) + ' ' + y + ' L ' + (x - width / 2) + ' ' + y + ' L ' + (x - width / 2) + ' ' +
                    (textOptions.y - labelSize.height / 2 - 4) + ' M ' + (x - width / 2) + ' ' +
                    (textOptions.y + labelSize.height / 4 + 2) +
                    ' L ' + (x - width / 2) + ' ' + (y + height) + ' L ' + (x) + ' ' + (y + height);
                break;
            case 'CurlyBrace':
                if ((!opposedPosition && isOutside) || (opposedPosition && !isOutside)) {
                    padding = -10;
                    padding1 = -15;
                    padding2 = -5;
                }
                else {
                    padding = 10;
                    padding1 = 15;
                    padding2 = 5;
                }
                if (alignment === 'Center') {
                    path += 'M ' + x + ' ' + y + ' C ' + x + ' ' + y + ' ' + (x + padding) + ' ' + y + ' ' + (x + padding) + ' ' + (y + 10)
                        + ' L ' + (x + padding) + ' ' + (y + (height - 10) / 2) + ' L ' + (x + padding1) + ' ' + (y + (height - 10) / 2 + 5)
                        + ' L ' + (x + padding) + ' ' + (y + (height - 10) / 2 + 10) + ' L ' + (x + padding) + ' ' + (y + (height - 10)) +
                        ' C ' + (x + padding) + ' ' + (y + (height - 10)) + ' ' + (x + padding2) + ' ' + (y + height) + ' '
                        + x + ' ' + (y + height);
                }
                else if (alignment === 'Far') {
                    path += 'M ' + x + ' ' + y + ' C ' + x + ' ' + y + ' ' + (x + padding) + ' ' + y + ' ' + (x + padding) + ' ' + (y + 10)
                        + ' L ' + (x + padding) + ' ' + (y + height - 20) + ' ' + ' L ' + (x + padding1) + ' ' + (y + (height - 15)) +
                        ' L ' + (x + padding) + ' ' + (y + (height - 10)) + ' L ' + (x + padding) + ' ' + (y + (height - 10)) +
                        ' C' + (x + padding) + ' ' + (y + (height - 10)) + ' ' + (x + padding) + ' ' + (y + height) + ' ' + x + ' '
                        + (y + height);
                }
                else {
                    path += 'M ' + x + ' ' + y + ' C ' + x + ' ' + y + ' ' + (x + padding) + ' ' + y + ' ' + (x + padding) + ' ' + (y + 10)
                        + ' L ' + (x + padding1) + ' ' + (y + 15) +
                        ' L ' + (x + padding) + ' ' + (y + 20) + ' L ' + (x + padding) + ' ' + (y + (height - 10)) +
                        ' C' + (x + padding) + ' ' + (y + (height - 10)) + ' ' + (x + padding2) + ' ' + (y + height) + ' ' + x +
                        ' ' + (y + height);
                }
                break;
        }
        return path;
    }
    /**
     * create cliprect
     * @return {void}
     * @private
     */
    createClipRect(x, y, height, width, clipId, axisId) {
        this.multiElements = this.chart.renderer.createGroup({
            'id': axisId,
            'clip-path': 'url(#' + clipId + ')'
        });
        this.multiElements.appendChild(this.chart.renderer.drawClipPath({
            'id': clipId,
            'x': x,
            'y': y,
            'width': width,
            'height': height,
            'fill': 'white',
            'stroke-width': 1, 'stroke': 'Gray'
        }));
    }
    /**
     * create borer element
     * @return {void}
     * @private
     */
    createBorderElement(borderIndex, axisIndex, axis, path) {
        let borderElement = this.chart.renderer.drawPath(new PathOption(this.chart.element.id + axisIndex + '_Axis_MultiLevelLabel_Rect_' + borderIndex, 'Transparent', axis.multiLevelLabels[borderIndex].border.width, axis.multiLevelLabels[borderIndex].border.color || this.chart.themeStyle.axisLine, 1, '', path));
        borderElement.setAttribute('style', 'pointer-events: none');
        this.multiElements.appendChild(borderElement);
    }
    /**
     * Triggers the event.
     * @return {void}
     * @private
     */
    triggerMultiLabelRender(axis, text, textStyle, textAlignment) {
        let argsData;
        argsData = {
            cancel: false, name: axisMultiLabelRender, axis: axis,
            text: text, textStyle: textStyle, alignment: textAlignment
        };
        this.chart.trigger(axisMultiLabelRender, argsData);
        return argsData;
    }
    /**
     * To get the module name for `MultiLevelLabel`.
     * @private
     */
    getModuleName() {
        return 'MultiLevelLabel';
    }
    /**
     * To destroy the `MultiLevelLabel` module.
     * @private
     */
    destroy() {
        // destroy peform here
    }
}

/**
 * Chart component exported items
 */

var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * AccumulationChart base file
 */
/**
 * Annotation for accumulation series
 */
class AccumulationAnnotationSettings extends ChildProperty {
}
__decorate$8([
    Property(null)
], AccumulationAnnotationSettings.prototype, "content", void 0);
__decorate$8([
    Property('0')
], AccumulationAnnotationSettings.prototype, "x", void 0);
__decorate$8([
    Property('0')
], AccumulationAnnotationSettings.prototype, "y", void 0);
__decorate$8([
    Property('Pixel')
], AccumulationAnnotationSettings.prototype, "coordinateUnits", void 0);
__decorate$8([
    Property('Chart')
], AccumulationAnnotationSettings.prototype, "region", void 0);
__decorate$8([
    Property('Middle')
], AccumulationAnnotationSettings.prototype, "verticalAlignment", void 0);
__decorate$8([
    Property('Center')
], AccumulationAnnotationSettings.prototype, "horizontalAlignment", void 0);
__decorate$8([
    Property(null)
], AccumulationAnnotationSettings.prototype, "description", void 0);
/**
 * Configures the dataLabel in accumulation chart.
 */
class AccumulationDataLabelSettings extends ChildProperty {
}
__decorate$8([
    Property(false)
], AccumulationDataLabelSettings.prototype, "visible", void 0);
__decorate$8([
    Property(null)
], AccumulationDataLabelSettings.prototype, "name", void 0);
__decorate$8([
    Property('transparent')
], AccumulationDataLabelSettings.prototype, "fill", void 0);
__decorate$8([
    Property('Inside')
], AccumulationDataLabelSettings.prototype, "position", void 0);
__decorate$8([
    Property(5)
], AccumulationDataLabelSettings.prototype, "rx", void 0);
__decorate$8([
    Property(5)
], AccumulationDataLabelSettings.prototype, "ry", void 0);
__decorate$8([
    Complex({ width: null, color: null }, Border)
], AccumulationDataLabelSettings.prototype, "border", void 0);
__decorate$8([
    Complex({ size: '11px', color: null }, Font)
], AccumulationDataLabelSettings.prototype, "font", void 0);
__decorate$8([
    Complex({}, Connector)
], AccumulationDataLabelSettings.prototype, "connectorStyle", void 0);
__decorate$8([
    Property(null)
], AccumulationDataLabelSettings.prototype, "template", void 0);
/**
 * Points model for the series.
 */
class AccPoints {
    constructor() {
        this.visible = true;
        this.symbolLocation = null;
        /** @private */
        this.region = null;
        /** @private */
        this.labelRegion = null;
        /** @private */
        this.labelVisible = true;
        this.regions = null;
    }
}
/**
 *  Configures the series in accumulation chart.
 */
class AccumulationSeries extends ChildProperty {
    constructor() {
        /**
         * Specifies the dataSource for the series. It can be an array of JSON objects or an instance of DataManager.
         * ```html
         * <div id='Pie'></div>
         * ```
         * ```typescript
         * let dataManager: DataManager = new DataManager({
         *         url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/Tasks/'
         * });
         * let query: Query = new Query().take(50).where('Estimate', 'greaterThan', 0, false);
         * let pie: AccumulationChart = new AccumulationChart({
         * ...
         *     series: [{
         *        dataSource: dataManager,
         *        xName: 'Id',
         *        yName: 'Estimate',
         *        query: query
         *    }],
         * ...
         * });
         * pie.appendTo('#Pie');
         * ```
         * @default ''
         */
        super(...arguments);
        /** @private */
        this.points = [];
        /** @private */
        this.sumOfPoints = 0;
        /** @private */
        this.isRectSeries = true;
        /** @private */
        this.clipRect = new Rect(0, 0, 0, 0);
    }
    /** @private To refresh the Datamanager for series */
    refreshDataManager(accumulation) {
        if (isNullOrUndefined(this.query)) {
            this.dataManagerSuccess({ result: this.dataSource, count: this.dataSource.length }, accumulation);
            return;
        }
        let dataManager = this.dataModule.getData(this.dataModule.generateQuery().requiresCount());
        dataManager.then((e) => this.dataManagerSuccess(e, accumulation));
    }
    /**
     * To get points on dataManager is success
     * @private
     */
    dataManagerSuccess(e, accumulation) {
        let argsData = {
            name: seriesRender, series: this, data: e.result,
        };
        accumulation.trigger(seriesRender, argsData);
        this.resultData = e.result;
        this.getPoints(e.result, accumulation);
        if (++accumulation.seriesCounts === accumulation.visibleSeries.length) {
            accumulation.refreshChart();
        }
    }
    /** @private To find points from result data */
    getPoints(result, accumulation) {
        let length = Object.keys(result).length;
        this.sumOfPoints = 0;
        if (length === 0) {
            return null;
        }
        this.findSumOfPoints(result);
        this.points = [];
        this.sumOfClub = 0;
        let point;
        let colors = this.palettes.length ? this.palettes : getSeriesColor(accumulation.theme);
        let clubValue = stringToNumber(this.groupTo, this.sumOfPoints);
        for (let i = 0; i < length; i++) {
            point = this.setPoints(result, i, colors);
            let currentY = point.y;
            if (!this.isClub(point, clubValue)) {
                if (isNullOrUndefined(point.y)) {
                    point.visible = false;
                }
                this.pushPoints(point, colors);
            }
        }
        this.lastGroupTo = this.groupTo;
        if (this.sumOfClub > 0) {
            let clubPoint = new AccPoints();
            clubPoint.x = 'Others';
            clubPoint.y = this.sumOfClub;
            clubPoint.text = clubPoint.originalText = clubPoint.x + ': ' + this.sumOfClub;
            this.pushPoints(clubPoint, colors);
        }
    }
    /**
     * Method to set point index and color
     */
    pushPoints(point, colors) {
        point.index = this.points.length;
        point.color = point.color || colors[point.index % colors.length];
        this.points.push(point);
    }
    /**
     * Method to find club point
     */
    isClub(point, clubValue) {
        if (Math.abs(point.y) <= clubValue && !isNullOrUndefined(clubValue)) {
            this.sumOfClub += Math.abs(point.y);
            return true;
        }
        return false;
    }
    /**
     * Method to find sum of points in the series
     */
    findSumOfPoints(result) {
        let length = Object.keys(result).length;
        for (let i = 0; i < length; i++) {
            if (!isNullOrUndefined(result[i][this.yName])) {
                this.sumOfPoints += Math.abs(result[i][this.yName]);
            }
        }
    }
    /**
     * Method to set points x, y and text from data source
     */
    setPoints(data, i, colors) {
        let point = new AccPoints();
        point.x = getValue(this.xName, data[i]);
        point.y = getValue(this.yName, data[i]);
        point.color = getValue(this.pointColorMapping, data[i]);
        point.text = point.originalText = getValue(this.dataLabel.name || '', data[i]);
        this.setAccEmptyPoint(point, i, data, colors);
        return point;
    }
    /**
     * Method render the series elements for accumulation chart
     * @private
     */
    renderSeries(accumulation) {
        let seriesGroup = accumulation.renderer.createGroup({ id: accumulation.element.id + '_Series_' + this.index });
        this.renderPoints(accumulation, seriesGroup);
        let datalabelGroup;
        if (accumulation.accumulationDataLabelModule && this.dataLabel.visible) {
            datalabelGroup = accumulation.renderer.createGroup({ id: accumulation.element.id + '_datalabel_Series_' + this.index });
            datalabelGroup.style.visibility =
                (this.animation.enable && accumulation.animateSeries && this.type === 'Pie') ? 'hidden' : 'visible';
            this.renderDataLabel(accumulation, datalabelGroup);
        }
        if (this.type === 'Pie') {
            this.findMaxBounds(this.labelBound, this.accumulationBound);
            accumulation.pieSeriesModule.animateSeries(accumulation, this.animation, this, seriesGroup);
        }
        if (accumulation.accumulationLegendModule) {
            this.labelBound.x -= accumulation.explodeDistance;
            this.labelBound.y -= accumulation.explodeDistance;
            this.labelBound.height += (accumulation.explodeDistance - this.labelBound.y);
            this.labelBound.width += (accumulation.explodeDistance - this.labelBound.x);
        }
    }
    /**
     * Method render the points elements for accumulation chart series.
     */
    renderPoints(accumulation, seriesGroup) {
        let pointId = accumulation.element.id + '_Series_' + this.index + '_Point_';
        let option;
        for (let point of this.points) {
            let argsData = {
                cancel: false, name: pointRender, series: this, point: point, fill: point.color,
                border: this.isEmpty(point) ? { width: this.emptyPointSettings.border.width, color: this.emptyPointSettings.border.color } :
                    { width: this.border.width, color: this.border.color }
            };
            accumulation.trigger(pointRender, argsData);
            point.color = argsData.fill;
            if (point.visible) {
                option = new PathOption(pointId + point.index, point.color, argsData.border.width || 1, argsData.border.color || point.color, 1, '', '');
                accumulation[(firstToLowerCase(this.type) + 'SeriesModule')].
                    renderPoint(point, this, accumulation, option);
                seriesGroup.appendChild(accumulation.renderer.drawPath(option));
            }
        }
        accumulation.getSeriesElement().appendChild(seriesGroup);
    }
    /**
     * Method render the datalabel elements for accumulation chart.
     */
    renderDataLabel(accumulation, datalabelGroup) {
        accumulation.accumulationDataLabelModule.findAreaRect();
        let element = createElement('div', {
            id: accumulation.element.id + '_Series_0' + '_DataLabelCollections'
        });
        for (let point of this.points) {
            if (point.visible) {
                accumulation.accumulationDataLabelModule.renderDataLabel(point, this.dataLabel, datalabelGroup, this.points, this.index, element);
            }
        }
        if (this.dataLabel.template !== null && element.childElementCount) {
            getElement(accumulation.element.id + '_Secondary_Element').appendChild(element);
        }
        accumulation.getSeriesElement().appendChild(datalabelGroup);
    }
    /**
     * To find maximum bounds for smart legend placing
     * @private
     */
    findMaxBounds(totalbound, bound) {
        totalbound.x = bound.x < totalbound.x ? bound.x : totalbound.x;
        totalbound.y = bound.y < totalbound.y ? bound.y : totalbound.y;
        totalbound.height = (bound.y + bound.height) > totalbound.height ? (bound.y + bound.height) : totalbound.height;
        totalbound.width = (bound.x + bound.width) > totalbound.width ? (bound.x + bound.width) : totalbound.width;
    }
    /**
     * To set empty point value for null points
     * @private
     */
    setAccEmptyPoint(point, i, data, colors) {
        if (!isNullOrUndefined(point.y)) {
            return null;
        }
        point.color = this.emptyPointSettings.fill || point.color;
        switch (this.emptyPointSettings.mode) {
            case 'Zero':
                point.y = 0;
                point.visible = true;
                break;
            case 'Average':
                let previous = data[i - 1] ? (data[i - 1][this.yName] || 0) : 0;
                let next = data[i + 1] ? (data[i + 1][this.yName] || 0) : 0;
                point.y = (Math.abs(previous) + Math.abs(next)) / 2;
                this.sumOfPoints += point.y;
                point.visible = true;
                break;
            case 'Drop':
                point.visible = false;
                break;
        }
    }
    /**
     * To find point is empty
     */
    isEmpty(point) {
        return point.color === this.emptyPointSettings.fill;
    }
}
__decorate$8([
    Property('')
], AccumulationSeries.prototype, "dataSource", void 0);
__decorate$8([
    Property()
], AccumulationSeries.prototype, "query", void 0);
__decorate$8([
    Property('')
], AccumulationSeries.prototype, "xName", void 0);
__decorate$8([
    Property('')
], AccumulationSeries.prototype, "name", void 0);
__decorate$8([
    Property('')
], AccumulationSeries.prototype, "yName", void 0);
__decorate$8([
    Property(true)
], AccumulationSeries.prototype, "visible", void 0);
__decorate$8([
    Complex({ color: null, width: 0 }, Border)
], AccumulationSeries.prototype, "border", void 0);
__decorate$8([
    Complex(null, Animation$1)
], AccumulationSeries.prototype, "animation", void 0);
__decorate$8([
    Property('SeriesType')
], AccumulationSeries.prototype, "legendShape", void 0);
__decorate$8([
    Property('')
], AccumulationSeries.prototype, "pointColorMapping", void 0);
__decorate$8([
    Property(null)
], AccumulationSeries.prototype, "selectionStyle", void 0);
__decorate$8([
    Property(null)
], AccumulationSeries.prototype, "groupTo", void 0);
__decorate$8([
    Complex({}, AccumulationDataLabelSettings)
], AccumulationSeries.prototype, "dataLabel", void 0);
__decorate$8([
    Property([])
], AccumulationSeries.prototype, "palettes", void 0);
__decorate$8([
    Property(0)
], AccumulationSeries.prototype, "startAngle", void 0);
__decorate$8([
    Property(360)
], AccumulationSeries.prototype, "endAngle", void 0);
__decorate$8([
    Property('80%')
], AccumulationSeries.prototype, "radius", void 0);
__decorate$8([
    Property('0')
], AccumulationSeries.prototype, "innerRadius", void 0);
__decorate$8([
    Property('Pie')
], AccumulationSeries.prototype, "type", void 0);
__decorate$8([
    Property(true)
], AccumulationSeries.prototype, "enableTooltip", void 0);
__decorate$8([
    Property(false)
], AccumulationSeries.prototype, "explode", void 0);
__decorate$8([
    Property('30%')
], AccumulationSeries.prototype, "explodeOffset", void 0);
__decorate$8([
    Property(false)
], AccumulationSeries.prototype, "explodeAll", void 0);
__decorate$8([
    Property(null)
], AccumulationSeries.prototype, "explodeIndex", void 0);
__decorate$8([
    Complex({ mode: 'Drop' }, EmptyPointSettings)
], AccumulationSeries.prototype, "emptyPointSettings", void 0);
__decorate$8([
    Property(0)
], AccumulationSeries.prototype, "gapRatio", void 0);
__decorate$8([
    Property('80%')
], AccumulationSeries.prototype, "width", void 0);
__decorate$8([
    Property('80%')
], AccumulationSeries.prototype, "height", void 0);
__decorate$8([
    Property('20%')
], AccumulationSeries.prototype, "neckWidth", void 0);
__decorate$8([
    Property('20%')
], AccumulationSeries.prototype, "neckHeight", void 0);
__decorate$8([
    Property('Linear')
], AccumulationSeries.prototype, "pyramidMode", void 0);
__decorate$8([
    Property(1)
], AccumulationSeries.prototype, "opacity", void 0);
/**
 * method to get series from index
 * @private
 */
function getSeriesFromIndex(index, visibleSeries) {
    for (let series of visibleSeries) {
        if (index === series.index) {
            return series;
        }
    }
    return visibleSeries[0];
}
/**
 * method to get point from index
 * @private
 */
function pointByIndex(index, points) {
    for (let point of points) {
        if (point.index === index) {
            return point;
        }
    }
    return null;
}

/**
 * Defines the common functionalities of accumulation series
 */
/**
 * Accumulation Base used to do some base calculation for accumulation chart.
 */
class AccumulationBase {
    /** @private */
    constructor(accumulation) {
        this.accumulation = accumulation;
    }
    /**
     * Gets the center of the pie
     * @private
     */
    get center() {
        return this.pieCenter || (this.accumulation.visibleSeries[0].type === 'Pie' ?
            this.accumulation.pieSeriesModule.center : null);
    }
    /**
     * Sets the center of the pie
     * @private
     */
    set center(value) {
        this.pieCenter = value;
    }
    /**
     * Gets the radius of the pie
     * @private
     */
    get radius() {
        return this.pieRadius !== undefined ? this.pieRadius :
            this.accumulation.pieSeriesModule.radius;
    }
    /**
     * Sets the radius of the pie
     * @private
     */
    set radius(value) {
        this.pieRadius = value;
    }
    /**
     * Gets the label radius of the pie
     * @private
     */
    get labelRadius() {
        return this.pieLabelRadius !== undefined ? this.pieLabelRadius :
            this.accumulation.pieSeriesModule.labelRadius;
    }
    /**
     * Sets the label radius of the pie
     * @private
     */
    set labelRadius(value) {
        this.pieLabelRadius = value;
    }
    /**
     * Checks whether the series is circular or not
     * @private
     */
    isCircular() {
        return this.accumulation.type === 'Pie';
    }
    /**
     * To process the explode on accumulation chart loading
     * @private
     */
    processExplode(event) {
        if (event.target.id.indexOf('_Series_') > -1 || event.target.id.indexOf('_datalabel_') > -1) {
            let pointIndex = indexFinder(event.target.id).point;
            if (isNaN(pointIndex) || (event.target.id.indexOf('_datalabel_') > -1 &&
                this.accumulation.visibleSeries[0].points[pointIndex].labelPosition === 'Outside')) {
                return null;
            }
            this.explodePoints(pointIndex, this.accumulation);
            this.deExplodeAll(pointIndex);
        }
    }
    /**
     * To invoke the explode on accumulation chart loading
     * @private
     */
    invokeExplode() {
        if (this.accumulation.visibleSeries[0].explodeAll) {
            for (let point of this.accumulation.visibleSeries[0].points) {
                this.explodePoints(point.index, this.accumulation);
            }
        }
        else if (!isNullOrUndefined(this.accumulation.visibleSeries[0].explodeIndex)) {
            this.explodePoints(this.accumulation.visibleSeries[0].explodeIndex, this.accumulation);
        }
        if (this.accumulation.accumulationSelectionModule && this.accumulation.selectionMode !== 'None' &&
            this.accumulation.accumulationSelectionModule.selectedDataIndexes.length) {
            for (let index of this.accumulation.accumulationSelectionModule.selectedDataIndexes) {
                this.explodePoints(index.point, this.accumulation, true);
                this.deExplodeAll(index.point);
            }
        }
    }
    /**
     * To deExplode all points in the series
     */
    deExplodeAll(index) {
        let pointId = this.accumulation.element.id + '_Series_0_Point_';
        let points = this.accumulation.visibleSeries[0].points;
        for (let currentPoint of points) {
            if (index !== currentPoint.index) {
                this.deExplodeSlice(currentPoint.index, pointId, this.center);
            }
        }
    }
    /**
     * To explode point by index
     * @private
     */
    explodePoints(index, chart, explode = false) {
        let pointId = this.accumulation.element.id + '_Series_0_Point_';
        let translate;
        let points = this.accumulation.visibleSeries[0].points;
        let point = pointByIndex(index, this.accumulation.visibleSeries[0].points);
        if (isNullOrUndefined(point)) {
            return null;
        }
        if (!this.isCircular()) {
            translate = { x: chart.explodeDistance, y: 0 };
        }
        else {
            translate = degreeToLocation(point.midAngle, chart.explodeDistance, this.center);
        }
        if (this.isExplode(pointId + index) || explode) {
            this.explodeSlice(index, translate, pointId, this.center || { x: 0, y: 0 });
        }
        else {
            this.deExplodeSlice(index, pointId, this.center);
        }
    }
    /**
     * To check point is exploded by id
     */
    isExplode(id) {
        let element = getElement(id);
        if (element && (element.getAttribute('transform') === 'translate(0, 0)' || element.getAttribute('transform') === null ||
            element.getAttribute('transform') === 'translate(0)')) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * To deExplode the point by index
     */
    deExplodeSlice(index, sliceId, center) {
        let position = 'translate(0, 0)';
        this.setTranslate(index, sliceId, position);
    }
    /**
     * To translate the point elements by index and position
     */
    setTranslate(index, sliceId, position) {
        this.setElementTransform(sliceId + index, position);
        if (this.accumulation.visibleSeries[0].dataLabel.visible) {
            sliceId = this.accumulation.element.id + '_datalabel_Series_0_';
            this.setElementTransform(sliceId + 'shape_' + index, position);
            this.setElementTransform(sliceId + 'text_' + index, position);
            this.setElementTransform(sliceId + 'connector_' + index, position);
        }
    }
    /**
     * To translate the point element by id and position
     */
    setElementTransform(id, position) {
        let element = getElement(id);
        if (element) {
            element.setAttribute('transform', position);
        }
    }
    /**
     * To translate the point elements by index position
     */
    explodeSlice(index, translate, sliceId, center) {
        let position = 'translate(' + (translate.x - center.x) + ', ' + (translate.y - center.y) + ')';
        this.setTranslate(index, sliceId, position);
    }
}

/**
 * Accumulation charts base file
 */
/**
 * PieBase class used to do pie base calculations.
 */
class PieBase extends AccumulationBase {
    /**
     * To initialize the property values.
     * @private
     */
    initProperties(chart, series) {
        this.accumulation = chart;
        let size = Math.min(chart.initialClipRect.width, chart.initialClipRect.height);
        this.initAngles(series);
        this.radius = stringToNumber(series.radius, size / 2);
        this.innerRadius = stringToNumber(series.innerRadius, this.radius);
        this.labelRadius = series.dataLabel.position === 'Inside' ? (((this.radius - this.innerRadius) / 2) + this.innerRadius) :
            (this.radius + stringToNumber(series.dataLabel.connectorStyle.length || '4%', size / 2));
        chart.explodeDistance = series.explode ? stringToNumber(series.explodeOffset, this.radius) : 0;
        this.findCenter(chart, series);
        this.defaultLabelBound(series, series.dataLabel.visible, series.dataLabel.position);
        this.totalAngle -= 0.001;
    }
    /**
     * To find the center of the accumulation.
     * @private
     */
    findCenter(accumulation, series) {
        this.accumulation = accumulation;
        this.center = {
            x: stringToNumber('50%', accumulation.initialClipRect.width) + (accumulation.initialClipRect.x),
            y: stringToNumber('50%', accumulation.initialClipRect.height) + (accumulation.initialClipRect.y)
        };
        let accumulationRect = this.getSeriesBound(series);
        let accumulationRectCenter = new ChartLocation(accumulationRect.x + accumulationRect.width / 2, accumulationRect.y + accumulationRect.height / 2);
        this.center.x += (this.center.x - accumulationRectCenter.x);
        this.center.y += (this.center.y - accumulationRectCenter.y);
        this.accumulation.center = this.center;
    }
    /**
     * To find angles from series.
     */
    initAngles(series) {
        this.totalAngle = (series.endAngle - series.startAngle) % 360;
        this.startAngle = series.startAngle - 90;
        this.totalAngle = this.totalAngle <= 0 ? (360 + this.totalAngle) : this.totalAngle;
        this.startAngle = (this.startAngle < 0 ? (this.startAngle + 360) : this.startAngle) % 360;
    }
    /**
     * To calculate data-label bound
     * @private
     */
    defaultLabelBound(series, visible, position) {
        let accumulationBound = this.getSeriesBound(series);
        series.accumulationBound = accumulationBound;
        series.labelBound = new Rect(accumulationBound.x, accumulationBound.y, accumulationBound.width + accumulationBound.x, accumulationBound.height + accumulationBound.y);
        if (visible && position === 'Outside') {
            series.labelBound = new Rect(Infinity, Infinity, -Infinity, -Infinity);
        }
    }
    /**
     * To calculate series bound
     * @private
     */
    getSeriesBound(series) {
        let rect = new Rect(Infinity, Infinity, -Infinity, -Infinity);
        this.initAngles(series);
        let start = this.startAngle;
        let total = this.totalAngle;
        let end = (this.startAngle + total) % 360;
        end = (end === 0) ? 360 : end;
        series.findMaxBounds(rect, this.getRectFromAngle(start));
        series.findMaxBounds(rect, this.getRectFromAngle(end));
        series.findMaxBounds(rect, new Rect(this.center.x, this.center.y, 0, 0));
        let nextQuandrant = (Math.floor(start / 90) * 90 + 90) % 360;
        let lastQuadrant = (Math.floor(end / 90) * 90) % 360;
        lastQuadrant = (lastQuadrant === 0) ? 360 : lastQuadrant;
        if (total >= 90 || lastQuadrant === nextQuandrant) {
            series.findMaxBounds(rect, this.getRectFromAngle(nextQuandrant));
            series.findMaxBounds(rect, this.getRectFromAngle(lastQuadrant));
        }
        if (start === 0 || (start + total >= 360)) {
            series.findMaxBounds(rect, this.getRectFromAngle(0));
        }
        let length = nextQuandrant === lastQuadrant ? 0 : Math.floor(total / 90);
        for (let i = 1; i < length; i++) {
            nextQuandrant = nextQuandrant + 90;
            if ((nextQuandrant < lastQuadrant || end < start) || total === 360) {
                series.findMaxBounds(rect, this.getRectFromAngle(nextQuandrant));
            }
        }
        rect.width -= rect.x;
        rect.height -= rect.y;
        return rect;
    }
    /**
     * To get rect location size from angle
     */
    getRectFromAngle(angle) {
        let location = degreeToLocation(angle, this.radius, this.center);
        return new Rect(location.x, location.y, 0, 0);
    }
    /**
     * To get path arc direction
     */
    getPathArc(center, start, end, radius, innerRadius) {
        let degree = end - start;
        degree = degree < 0 ? (degree + 360) : degree;
        let flag = (degree < 180) ? 0 : 1;
        if (!innerRadius && innerRadius === 0) {
            return this.getPiePath(center, degreeToLocation(start, radius, center), degreeToLocation(end, radius, center), radius, flag);
        }
        else {
            return this.getDoughnutPath(center, degreeToLocation(start, radius, center), degreeToLocation(end, radius, center), radius, degreeToLocation(start, innerRadius, center), degreeToLocation(end, innerRadius, center), innerRadius, flag);
        }
    }
    /**
     * To get pie direction
     */
    getPiePath(center, start, end, radius, clockWise) {
        return 'M ' + center.x + ' ' + center.y + ' L ' + start.x + ' ' + start.y + ' A ' + radius + ' ' +
            radius + ' 0 ' + clockWise + ' 1 ' + end.x + ' ' + end.y + ' Z';
    }
    /**
     * To get doughnut direction
     */
    getDoughnutPath(center, start, end, radius, innerStart, innerEnd, innerRadius, clockWise) {
        return 'M ' + start.x + ' ' + start.y + ' A ' + radius + ' ' + radius + ' 0 ' + clockWise +
            ' 1 ' + end.x + ' ' + end.y + ' L ' + innerEnd.x + ' ' + innerEnd.y + ' A ' + innerRadius +
            ' ' + innerRadius + ' 0 ' + clockWise + ',0 ' + innerStart.x + ' ' + innerStart.y + ' Z';
    }
    /**
     * Method to start animation for pie series.
     */
    doAnimation(slice, series) {
        let startAngle = series.startAngle - 85;
        let value;
        let radius = Math.max(this.accumulation.availableSize.height, this.accumulation.availableSize.width) * 0.75;
        radius += radius * (0.414); // formula r + r / 2 * (1.414 -1)
        let effect = getAnimationFunction('Linear'); // need to check animation type
        new Animation({}).animate(slice, {
            duration: series.animation.duration,
            delay: series.animation.delay,
            progress: (args) => {
                value = effect(args.timeStamp, startAngle, this.totalAngle, args.duration);
                slice.setAttribute('d', this.getPathArc(this.center, startAngle, value, radius, 0));
            },
            end: (args) => {
                slice.setAttribute('d', this.getPathArc(this.center, 0, 359.99999, radius, 0));
                this.accumulation.trigger(animationComplete, { series: series, accumulation: this.accumulation });
                let datalabelGroup = getElement(this.accumulation.element.id + '_datalabel_Series_' + series.index);
                datalabelGroup.style.visibility = this.accumulation.isDestroyed ? 'hidden' : 'visible';
            }
        });
    }
}

/**
 * PieSeries module used to render `Pie` Series.
 */
class PieSeries extends PieBase {
    /**
     * To get path option, degree, symbolLocation from the point.
     * @private
     */
    renderPoint(point, series, chart, option) {
        let sum$$1 = series.sumOfPoints;
        let degree = (sum$$1) ? ((Math.abs(point.y) / sum$$1) * (this.totalAngle)) : null;
        option.d = this.getPathOption(point, degree);
        point.midAngle = (this.startAngle - (degree / 2)) % 360;
        point.endAngle = this.startAngle % 360;
        point.symbolLocation = degreeToLocation(point.midAngle, (this.radius + this.innerRadius) / 2, this.center);
        return option;
    }
    /**
     * To get path option from the point.
     */
    getPathOption(point, degree) {
        if (degree === null || !point.y) {
            return '';
        }
        let path = this.getPathArc(this.center, this.startAngle % 360, (this.startAngle + degree) % 360, this.radius, this.innerRadius);
        this.startAngle += degree;
        return path;
    }
    /**
     * To animate the pie series.
     * @private
     */
    animateSeries(accumulation, option, series, slice) {
        let groupId = accumulation.element.id + 'SeriesGroup' + series.index;
        if (series.animation.enable && accumulation.animateSeries) {
            let clippath = accumulation.renderer.createClipPath({ id: groupId + '_clipPath' });
            let path = new PathOption(groupId + '_slice', 'transparent', 1, 'transparent', 1, '', '');
            let clipslice = accumulation.renderer.drawPath(path);
            clippath.appendChild(clipslice);
            accumulation.svgObject.appendChild(clippath);
            slice.setAttribute('style', 'clip-path:url(#' + clippath.id + ')');
            this.doAnimation(clipslice, series);
        }
    }
    /**
     * To get the module name of the Pie series.
     */
    getModuleName() {
        return 'PieSeries';
    }
    /**
     * To destroy the pie series.
     * @return {void}
     * @private
     */
    destroy(accumulation) {
        /**
         * Destroy method calling here
         */
    }
}

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * AccumulationChart file
 */
/**
 * Represents the AccumulationChart control.
 * ```html
 * <div id="accumulation"/>
 * <script>
 *   var accObj = new AccumulationChart({ });
 *   accObj.appendTo("#accumulation");
 * </script>
 * ```
 */
let AccumulationChart = class AccumulationChart extends Component {
    /**
     * Constructor for creating the AccumulationChart widget
     * @private
     */
    constructor(options, element) {
        super(options, element);
        /** @private explode radius internal property */
        this.explodeDistance = 0;
    }
    /** @private */
    get type() {
        if (this.series && this.series.length) {
            return this.series[0].type;
        }
        return 'Pie';
    }
    // accumulation chart methods
    /**
     *  To create svg object, renderer and binding events for the container.
     */
    preRender() {
        this.unWireEvents();
        this.setCulture();
        this.animateSeries = true;
        calculateSize(this);
        this.wireEvents();
    }
    /**
     * Themeing for chart goes here
     */
    setTheme() {
        /*! Set theme for accumulation chart */
        this.themeStyle = getThemeColor(this.theme);
    }
    /**
     * To render the accumulation chart elements
     */
    render() {
        this.trigger(load, { accumulation: this });
        this.setTheme();
        this.accBaseModule = new AccumulationBase(this);
        this.pieSeriesModule = new PieSeries(this);
        this.calculateVisibleSeries();
        this.processData();
    }
    /**
     * Method to unbind events for accumulation chart
     */
    unWireEvents() {
        /*! Find the Events type */
        let isIE11Pointer = Browser.isPointer;
        let start = Browser.touchStartEvent;
        let move = Browser.touchMoveEvent;
        let stop = Browser.touchEndEvent;
        let cancel = isIE11Pointer ? 'pointerleave' : 'mouseleave';
        /*! UnBind the Event handler */
        EventHandler.remove(this.element, move, this.accumulationMouseMove);
        EventHandler.remove(this.element, stop, this.accumulationMouseEnd);
        EventHandler.remove(this.element, start, this.accumulationMouseStart);
        EventHandler.remove(this.element, 'click', this.accumulationOnMouseClick);
        EventHandler.remove(this.element, 'contextmenu', this.accumulationRightClick);
        EventHandler.remove(this.element, cancel, this.accumulationMouseLeave);
        window.removeEventListener((Browser.isTouch && ('orientation' in window && 'onorientationchange' in window)) ? 'orientationchange' : 'resize', this.accumulationResize);
    }
    /**
     * Method to bind events for the accumulation chart
     */
    wireEvents() {
        /*! Find the Events type */
        let isIE11Pointer = Browser.isPointer;
        let start = Browser.touchStartEvent;
        let stop = Browser.touchEndEvent;
        let move = Browser.touchMoveEvent;
        let cancel = isIE11Pointer ? 'pointerleave' : 'mouseleave';
        /*! Bind the Event handler */
        EventHandler.add(this.element, move, this.accumulationMouseMove, this);
        EventHandler.add(this.element, stop, this.accumulationMouseEnd, this);
        EventHandler.add(this.element, start, this.accumulationMouseStart, this);
        EventHandler.add(this.element, 'click', this.accumulationOnMouseClick, this);
        EventHandler.add(this.element, 'contextmenu', this.accumulationRightClick, this);
        EventHandler.add(this.element, cancel, this.accumulationMouseLeave, this);
        window.addEventListener((Browser.isTouch && ('orientation' in window && 'onorientationchange' in window)) ? 'orientationchange' : 'resize', this.accumulationResize.bind(this));
        new Touch(this.element); // To avoid geasture blocking for browser
        /*! Apply the style for chart */
        this.setStyle(this.element);
    }
    /**
     * Method to set mouse x, y from events
     */
    setMouseXY(e) {
        let pageX;
        let pageY;
        if (e.type.indexOf('touch') > -1) {
            this.isTouch = true;
            let touchArg = e;
            pageY = touchArg.changedTouches[0].clientY;
            pageX = touchArg.changedTouches[0].clientX;
        }
        else {
            this.isTouch = e.pointerType === 'touch' || e.pointerType === '2';
            pageX = e.clientX;
            pageY = e.clientY;
        }
        let rect = this.element.getBoundingClientRect();
        let svgRect = getElement(this.element.id + '_svg').getBoundingClientRect();
        this.mouseX = (pageX - rect.left) - Math.max(svgRect.left - rect.left, 0);
        this.mouseY = (pageY - rect.top) - Math.max(svgRect.top - rect.top, 0);
    }
    /**
     * Handles the mouse end.
     * @return {boolean}
     * @private
     */
    accumulationMouseEnd(e) {
        this.setMouseXY(e);
        this.trigger(chartMouseUp, { target: e.target.id, x: this.mouseX, y: this.mouseY });
        if (this.isTouch) {
            this.titleTooltip(e, this.mouseX, this.mouseY, this.isTouch);
            if (this.accumulationDataLabelModule && this.visibleSeries[0].dataLabel.visible) {
                this.accumulationDataLabelModule.move(e, this.mouseX, this.mouseY, this.isTouch);
            }
            if (this.accumulationLegendModule && this.legendSettings.visible) {
                this.accumulationLegendModule.move(e);
            }
        }
        this.notify(Browser.touchEndEvent, e);
        return false;
    }
    /*public removeSvgOffset(x: number, y: number): ChartLocation {
        let rect: ClientRect = this.element.getBoundingClientRect();
        let svgRect: ClientRect = getElement(this.element.id + '_svg').getBoundingClientRect();
        return { x: (x - rect.left) - Math.max(svgRect.left - rect.left, 0), y: (y - rect.top) - Math.max(svgRect.top - rect.top, 0)};
    }*/
    /**
     * Handles the mouse start.
     * @return {boolean}
     * @private
     */
    accumulationMouseStart(e) {
        this.setMouseXY(e);
        this.trigger(chartMouseDown, { target: e.target.id, x: this.mouseX, y: this.mouseY });
        return false;
    }
    /**
     * Handles the accumulation chart resize.
     * @return {boolean}
     * @private
     */
    accumulationResize(e) {
        this.animateSeries = false;
        let args = {
            accumulation: this,
            previousSize: new Size(this.availableSize.width, this.availableSize.height),
            name: resized,
            currentSize: new Size(0, 0)
        };
        if (this.resizeTo) {
            clearTimeout(this.resizeTo);
        }
        this.resizeTo = setTimeout(() => {
            if (this.isDestroyed) {
                clearTimeout(this.resizeTo);
                return;
            }
            calculateSize(this);
            args.currentSize = this.availableSize;
            this.trigger(resized, args);
            this.refreshSeries();
            this.refreshChart();
        }, 500);
        return false;
    }
    /**
     * Handles the export method for chart control.
     */
    export(type, fileName, orientation) {
        let exportChart = new ExportUtils(this);
        exportChart.export(type, fileName, orientation);
    }
    /**
     * Handles the print method for accumulation chart control.
     */
    print(id) {
        let exportChart = new ExportUtils(this);
        exportChart.print(id);
    }
    /**
     * Applying styles for accumulation chart element
     */
    setStyle(element) {
        element.style.touchAction = 'element';
        element.style.msTouchAction = 'element';
        element.style.msContentZooming = 'none';
        element.style.msUserSelect = 'none';
        element.style.webkitUserSelect = 'none';
        element.style.position = 'relative';
    }
    /**
     * Method to set the annotation content dynamically for accumulation.
     */
    setAnnotationValue(annotationIndex, content) {
        let annotation = this.annotations[annotationIndex];
        let element;
        let parentNode = getElement(this.element.id + '_Annotation_Collections');
        if (content) {
            annotation.content = content;
            if (parentNode) {
                element = createElement('div');
                removeElement(this.element.id + '_Annotation_' + annotationIndex);
                this.annotationModule.processAnnotation(annotation, annotationIndex, element);
                parentNode.appendChild(element.children[0]);
            }
            else {
                this.annotationModule.renderAnnotations(getElement(this.element.id + '_Secondary_Element'));
            }
        }
    }
    /**
     * Handles the mouse move on accumulation chart.
     * @return {boolean}
     * @private
     */
    accumulationMouseMove(e) {
        this.setMouseXY(e);
        this.trigger(chartMouseMove, { target: e.target.id, x: this.mouseX, y: this.mouseY });
        if (this.pointMove) {
            this.triggerPointEvent(pointMove, e.target);
        }
        if (this.accumulationLegendModule && this.legendSettings.visible) {
            this.accumulationLegendModule.move(e);
        }
        if (this.accumulationDataLabelModule && this.visibleSeries[0] && this.visibleSeries[0].dataLabel.visible) {
            this.accumulationDataLabelModule.move(e, this.mouseX, this.mouseY);
        }
        if (!this.isTouch) {
            this.titleTooltip(e, this.mouseX, this.mouseY);
        }
        this.notify(Browser.touchMoveEvent, e);
        return false;
    }
    titleTooltip(event, x, y, isTouch) {
        let targetId = event.target.id;
        if ((event.target.textContent.indexOf('...') > -1) && (targetId === (this.element.id + '_title'))) {
            showTooltip(this.title, x, y, this.element.offsetWidth, this.element.id + '_EJ2_Title_Tooltip', getElement(this.element.id + '_Secondary_Element'), isTouch);
        }
        else {
            removeElement(this.element.id + '_EJ2_Title_Tooltip');
        }
    }
    /**
     * Handles the mouse click on accumulation chart.
     * @return {boolean}
     * @private
     */
    accumulationOnMouseClick(e) {
        this.setMouseXY(e);
        if (this.accumulationLegendModule && this.legendSettings.visible) {
            this.accumulationLegendModule.click(e);
        }
        if (this.selectionMode !== 'None' && this.accumulationSelectionModule) {
            this.accumulationSelectionModule.calculateSelectedElements(this, e);
        }
        if (this.visibleSeries[0].explode) {
            this.accBaseModule.processExplode(e);
        }
        this.trigger(chartMouseClick, { target: e.target.id, x: this.mouseX, y: this.mouseY });
        if (this.pointClick) {
            this.triggerPointEvent(pointClick, e.target);
        }
        return false;
    }
    triggerPointEvent(event, element) {
        let indexes = indexFinder(element.id, true);
        if (indexes.series >= 0 && indexes.point >= 0) {
            this.trigger(event, { series: this.series[indexes.series],
                point: this.series[indexes.series].points[indexes.point],
                seriesIndex: indexes.series, pointIndex: indexes.point,
                x: this.mouseX, y: this.mouseY });
        }
    }
    /**
     * Handles the mouse right click on accumulation chart.
     * @return {boolean}
     * @private
     */
    accumulationRightClick(event) {
        if (event.buttons === 2 || event.pointerType === 'touch') {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        return true;
    }
    /**
     * Handles the mouse leave on accumulation chart.
     * @return {boolean}
     * @private
     */
    accumulationMouseLeave(e) {
        this.setMouseXY(e);
        this.trigger(chartMouseLeave, { target: e.target.id, x: this.mouseX, y: this.mouseY });
        this.notify(Browser.isPointer ? 'pointerleave' : 'mouseleave', e);
        return false;
    }
    /**
     * Method to set culture for chart
     */
    setCulture() {
        this.intl = new Internationalization();
    }
    /**
     * Method to create SVG element for accumulation chart.
     */
    createPieSvg() {
        this.removeSvg();
        createSvg(this);
    }
    /**
     * To Remove the SVG from accumulation chart.
     * @return {boolean}
     * @private
     */
    removeSvg() {
        removeElement(this.element.id + '_Secondary_Element');
        if (this.svgObject) {
            while (this.svgObject.childNodes.length > 0) {
                this.svgObject.removeChild(this.svgObject.firstChild);
            }
            if (!this.svgObject.hasChildNodes() && this.svgObject.parentNode) {
                remove(this.svgObject);
            }
        }
        removeElement('EJ2_legend_tooltip');
        removeElement('EJ2_datalabel_tooltip');
    }
    /**
     * Method to create the secondary element for tooltip, datalabel and annotaitons.
     */
    createSecondaryElement() {
        this.element.appendChild(createElement('div', {
            id: this.element.id + '_Secondary_Element',
            styles: 'position: relative'
        }));
    }
    /**
     * Method to find visible series based on series types
     */
    calculateVisibleSeries() {
        this.visibleSeries = [];
        for (let i = 0, length = this.series.length; i < length; i++) {
            this.series[i].index = i;
            if (this.series[i].type === this.type && this.visibleSeries.length === 0) {
                this.visibleSeries.push(this.series[i]);
                break;
            }
        }
    }
    /**
     * To find points from dataSource
     */
    processData() {
        this.seriesCounts = 0;
        for (let series of this.visibleSeries) {
            series.dataModule = new Data(series.dataSource, series.query);
            series.refreshDataManager(this);
        }
    }
    /**
     * To refresh the accumulation chart
     * @private
     */
    refreshChart() {
        this.doGrouppingProcess();
        this.createPieSvg();
        this.calculateBounds();
        this.renderElements();
    }
    /**
     * Method to find groupped points
     */
    doGrouppingProcess() {
        let series = this.visibleSeries[0];
        if (!isNullOrUndefined(series.resultData) && ((!isNullOrUndefined(series.lastGroupTo) &&
            series.lastGroupTo !== series.groupTo))) {
            series.getPoints(series.resultData, this);
        }
    }
    /**
     * Method to calculate bounds for accumulation chart
     */
    calculateBounds() {
        this.initialClipRect = new Rect(this.margin.left, this.margin.top, this.availableSize.width, this.availableSize.height);
        this.titleCollection = [];
        this.titleCollection = getTitle(this.title, this.titleStyle, this.initialClipRect.width);
        subtractRect(this.initialClipRect, new Rect(0, (measureText(this.title, this.titleStyle).height * this.titleCollection.length), this.margin.right + this.margin.left, this.margin.bottom + this.margin.top));
        this.calculateLegendBounds();
    }
    /*
     * Method to calculate legend bounds for accumulation chart
     */
    calculateLegendBounds() {
        if (!this.accumulationLegendModule || !this.legendSettings.visible) {
            return null;
        }
        this.accumulationLegendModule.getLegendOptions(this, this.visibleSeries);
        this.accumulationLegendModule.calculateLegendBounds(this.initialClipRect, this.availableSize);
    }
    /**
     * To render elements for accumulation chart
     * @private
     */
    renderElements() {
        this.renderBorder();
        this.renderTitle();
        this.createSecondaryElement();
        this.renderSeries();
        this.renderLegend();
        this.element.appendChild(this.svgObject);
        this.processSelection();
        this.processExplode();
        this.renderAnnotation();
        this.setSecondaryElementPosition();
        this.trigger('loaded', { accumulation: this });
        this.animateSeries = false;
    }
    /**
     * To set the left and top position for data label template for center aligned chart
     */
    setSecondaryElementPosition() {
        let tooltipParent = getElement(this.element.id + '_Secondary_Element');
        if (!tooltipParent) {
            return;
        }
        let rect = this.element.getBoundingClientRect();
        let svgRect = getElement(this.element.id + '_svg').getBoundingClientRect();
        tooltipParent.style.left = Math.max(svgRect.left - rect.left, 0) + 'px';
        tooltipParent.style.top = Math.max(svgRect.top - rect.top, 0) + 'px';
    }
    /**
     * To render the annotaitions for accumulation series.
     */
    renderAnnotation() {
        if (this.annotationModule) {
            this.annotationModule.renderAnnotations(getElement(this.element.id + '_Secondary_Element'));
        }
    }
    /**
     * Method to process the explode in accumulation chart
     */
    processExplode() {
        if (!this.visibleSeries[0].explode) {
            return null;
        }
        this.accBaseModule.invokeExplode();
    }
    /**
     * Method to render series for accumulation chart
     */
    renderSeries() {
        this.svgObject.appendChild(this.renderer.createGroup({ id: this.element.id + '_SeriesCollection' }));
        for (let series of this.visibleSeries) {
            if (series.visible && this[(firstToLowerCase(series.type) + 'SeriesModule')]) {
                this[(firstToLowerCase(series.type) + 'SeriesModule')].initProperties(this, series);
                series.renderSeries(this);
            }
        }
    }
    /**
     * Method to render border for accumulation chart
     */
    renderBorder() {
        let padding = this.border.width;
        this.svgObject.appendChild(this.renderer.drawRectangle(new RectOption(this.element.id + '_border', this.background || this.themeStyle.background, this.border, 1, new Rect(padding / 2, padding / 2, this.availableSize.width - padding, this.availableSize.height - padding))));
    }
    /**
     * Method to render legend for accumulation chart
     */
    renderLegend() {
        if (!this.accumulationLegendModule || !this.legendSettings.visible) {
            return null;
        }
        if (this.accumulationLegendModule.legendCollections.length) {
            if (this.visibleSeries[0].type === 'Pie') {
                this.accumulationLegendModule.getSmartLegendLocation(this.visibleSeries[0].labelBound, this.accumulationLegendModule.legendBounds, this.margin);
            }
            this.accumulationLegendModule.renderLegend(this, this.legendSettings, this.accumulationLegendModule.legendBounds);
        }
    }
    /**
     * To process the selection in accumulation chart
     */
    processSelection() {
        if (!this.accumulationSelectionModule || this.selectionMode === 'None') {
            return null;
        }
        let selectedDataIndexes = extend([], this.accumulationSelectionModule.selectedDataIndexes, null, true);
        this.accumulationSelectionModule.invokeSelection(this);
        if (selectedDataIndexes.length > 0) {
            this.accumulationSelectionModule.selectedDataIndexes = selectedDataIndexes;
            this.accumulationSelectionModule.redrawSelection(this, this.selectionMode);
        }
    }
    /**
     * To render title for accumulation chart
     */
    renderTitle() {
        if (!this.title) {
            return null;
        }
        let titleSize = measureText(this.title, this.titleStyle);
        let anchor = this.titleStyle.textAlignment === 'Near' ? 'start' :
            this.titleStyle.textAlignment === 'Far' ? 'end' : 'middle';
        textElement(new TextOption(this.element.id + '_title', titlePositionX(this.availableSize, this.margin.left, this.margin.left, this.titleStyle), this.margin.top + (titleSize.height * 3 / 4), anchor, this.titleCollection, '', 'auto'), this.titleStyle, this.titleStyle.color || this.themeStyle.chartTitle, this.svgObject);
    }
    /**
     * To get the series parent element
     * @private
     */
    getSeriesElement() {
        return this.svgObject.getElementsByTagName('g')[0];
    }
    /**
     * To refresh the all visible series points
     * @private
     */
    refreshSeries() {
        for (let series of this.visibleSeries) {
            this.refreshPoints(series.points);
        }
    }
    /**
     * To refresh points label region and visible
     * @private
     */
    refreshPoints(points) {
        for (let point of points) {
            point.labelPosition = null;
            point.labelRegion = null;
            point.labelVisible = true;
        }
    }
    /**
     * To get Module name
     *  @private
     */
    getModuleName() {
        return 'accumulationchart';
    }
    /**
     * To destroy the accumulationcharts
     * @private
     */
    destroy() {
        this.unWireEvents();
        super.destroy();
        this.element.classList.remove('e-accumulationchart');
    }
    /**
     * To provide the array of modules needed for control rendering
     * @return {ModuleDeclaration[]}
     * @private
     */
    requiredModules() {
        let modules = [];
        let enableAnnotation = false;
        modules.push({
            member: this.type + 'Series',
            args: [this]
        });
        if (this.legendSettings.visible) {
            modules.push({
                member: 'AccumulationLegend',
                args: [this]
            });
        }
        if (this.findDatalabelVisibility()) {
            modules.push({
                member: 'AccumulationDataLabel',
                args: [this]
            });
        }
        if (this.tooltip.enable) {
            modules.push({
                member: 'AccumulationTooltip',
                args: [this]
            });
        }
        if (this.selectionMode !== 'None') {
            modules.push({
                member: 'AccumulationSelection',
                args: [this]
            });
        }
        enableAnnotation = this.annotations.some((value) => {
            return (value.content !== null);
        });
        if (enableAnnotation) {
            modules.push({
                member: 'Annotation',
                args: [this]
            });
        }
        return modules;
    }
    /**
     * To find datalabel visibility in series
     */
    findDatalabelVisibility() {
        for (let series of this.series) {
            if (series.dataLabel.visible) {
                return true;
            }
        }
        return false;
    }
    /**
     * Get the properties to be maintained in the persisted state.
     * @private
     */
    getPersistData() {
        return '';
    }
    /**
     * Called internally if any of the property value changed.
     * @private
     */
    onPropertyChanged(newProp, oldProp) {
        let update = {
            refreshElements: false, refreshBounds: false
        };
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'theme':
                    this.animateSeries = true;
                    break;
                case 'title':
                case 'height':
                case 'width':
                case 'margin':
                    update.refreshBounds = true;
                    break;
                case 'titleStyle':
                    if (newProp.titleStyle && (newProp.titleStyle.size || newProp.titleStyle.textOverflow)) {
                        update.refreshBounds = true;
                    }
                    else {
                        update.refreshElements = true;
                    }
                    break;
                case 'legendSettings':
                    update.refreshBounds = true;
                    update.refreshElements = true;
                    break;
                case 'locale':
                case 'currencyCode':
                    super.refresh();
                    break;
                case 'background':
                case 'border':
                case 'annotations':
                case 'enableSmartLabels':
                    update.refreshElements = true;
                    break;
                case 'isMultiSelect':
                case 'selectedDataIndexes':
                case 'selectionMode':
                    if (this.accumulationSelectionModule) {
                        if (isNullOrUndefined(this.accumulationSelectionModule.selectedDataIndexes)) {
                            this.accumulationSelectionModule.invokeSelection(this);
                        }
                        else {
                            this.accumulationSelectionModule.redrawSelection(this, oldProp.selectionMode);
                        }
                    }
                    break;
            }
        }
        if (!update.refreshBounds && update.refreshElements) {
            this.createPieSvg();
            this.renderElements();
        }
        else if (update.refreshBounds) {
            this.refreshSeries();
            this.createPieSvg();
            this.calculateBounds();
            this.renderElements();
        }
    }
};
__decorate$7([
    Property(null)
], AccumulationChart.prototype, "width", void 0);
__decorate$7([
    Property(null)
], AccumulationChart.prototype, "height", void 0);
__decorate$7([
    Property(null)
], AccumulationChart.prototype, "title", void 0);
__decorate$7([
    Complex(Theme.chartTitleFont, Font)
], AccumulationChart.prototype, "titleStyle", void 0);
__decorate$7([
    Complex({}, LegendSettings)
], AccumulationChart.prototype, "legendSettings", void 0);
__decorate$7([
    Complex({}, TooltipSettings)
], AccumulationChart.prototype, "tooltip", void 0);
__decorate$7([
    Property('None')
], AccumulationChart.prototype, "selectionMode", void 0);
__decorate$7([
    Property(false)
], AccumulationChart.prototype, "isMultiSelect", void 0);
__decorate$7([
    Collection([], Indexes)
], AccumulationChart.prototype, "selectedDataIndexes", void 0);
__decorate$7([
    Complex({}, Margin)
], AccumulationChart.prototype, "margin", void 0);
__decorate$7([
    Property(true)
], AccumulationChart.prototype, "enableSmartLabels", void 0);
__decorate$7([
    Complex({ color: '#DDDDDD', width: 0 }, Border)
], AccumulationChart.prototype, "border", void 0);
__decorate$7([
    Property(null)
], AccumulationChart.prototype, "background", void 0);
__decorate$7([
    Collection([{}], AccumulationSeries)
], AccumulationChart.prototype, "series", void 0);
__decorate$7([
    Collection([{}], AccumulationAnnotationSettings)
], AccumulationChart.prototype, "annotations", void 0);
__decorate$7([
    Property('Material')
], AccumulationChart.prototype, "theme", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "loaded", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "load", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "seriesRender", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "legendRender", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "textRender", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "tooltipRender", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "pointRender", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "annotationRender", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "beforePrint", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "chartMouseMove", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "chartMouseClick", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "pointClick", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "pointMove", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "animationComplete", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "chartMouseDown", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "chartMouseLeave", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "chartMouseUp", void 0);
__decorate$7([
    Event()
], AccumulationChart.prototype, "resized", void 0);
__decorate$7([
    Property('USD')
], AccumulationChart.prototype, "currencyCode", void 0);
AccumulationChart = __decorate$7([
    NotifyPropertyChanges
], AccumulationChart);

/**
 * Defines the common behavior of funnel and pyramid series
 */
/**
 * TriangularBase is used to calculate base functions for funnel/pyramid series.
 */
class TriangularBase extends AccumulationBase {
    /**
     * Initializes the properties of funnel/pyramid series
     * @private
     */
    initProperties(chart, series) {
        let actualChartArea = chart.initialClipRect;
        series.triangleSize = new Size(stringToNumber(series.width, actualChartArea.width), stringToNumber(series.height, actualChartArea.height));
        series.neckSize = new Size(stringToNumber(series.neckWidth, actualChartArea.width), stringToNumber(series.neckHeight, actualChartArea.height));
        this.defaultLabelBound(series, series.dataLabel.visible, series.dataLabel.position, chart);
        if (series.explodeOffset === '30%') {
            series.explodeOffset = '25px';
        }
        chart.explodeDistance = stringToNumber(series.explodeOffset, actualChartArea.width);
        let points = series.points;
        this.initializeSizeRatio(points, series);
    }
    /**
     * Initializes the size of the pyramid/funnel segments
     * @private
     */
    initializeSizeRatio(points, series, reverse = false) {
        let sumOfPoints = series.sumOfPoints;
        //Limiting the ratio within the range of 0 to 1
        let gapRatio = Math.min(Math.max(series.gapRatio, 0), 1);
        //% equivalence of a value 1
        let coEff = 1 / (sumOfPoints * (1 + gapRatio / (1 - gapRatio)));
        let spacing = gapRatio / (points.length - 1);
        let y = 0;
        //starting from bottom
        for (let i = points.length - 1; i >= 0; i--) {
            let index = reverse ? points.length - 1 - i : i;
            if (points[index].visible) {
                let height = coEff * points[index].y;
                points[index].yRatio = y;
                points[index].heightRatio = height;
                y += height + spacing;
            }
        }
    }
    /**
     * Marks the label location from the set of points that forms a pyramid/funnel segment
     * @private
     */
    setLabelLocation(series, point, points) {
        let last = points.length - 1;
        let bottom = series.type === 'Funnel' ? points.length - 2 : points.length - 1;
        let x = (points[0].x + points[bottom].x) / 2;
        let right = (points[1].x + points[bottom - 1].x) / 2;
        point.region = new Rect(x, points[0].y, right - x, points[bottom].y - points[0].y);
        point.symbolLocation = {
            x: point.region.x + point.region.width / 2,
            y: point.region.y + point.region.height / 2
        };
        point.labelOffset = {
            x: point.symbolLocation.x - (points[0].x + points[last].x) / 2,
            y: point.symbolLocation.y - (points[0].y + points[last].y) / 2
        };
    }
    /**
     * Finds the path to connect the list of points
     * @private
     */
    findPath(locations) {
        let path = 'M';
        for (let i = 0; i < locations.length; i++) {
            path += locations[i].x + ' ' + locations[i].y;
            if (i !== locations.length - 1) {
                path += ' L';
            }
        }
        return path;
    }
    /**
     * To calculate data-label bounds
     * @private
     */
    defaultLabelBound(series, visible, position, chart) {
        let x = (chart.initialClipRect.width - series.triangleSize.width) / 2;
        let y = (chart.initialClipRect.height - series.triangleSize.height) / 2;
        let accumulationBound = new Rect(x, y, series.triangleSize.width, series.triangleSize.height);
        series.labelBound = new Rect(accumulationBound.x, accumulationBound.y, accumulationBound.width + accumulationBound.x, accumulationBound.height + accumulationBound.y);
        series.accumulationBound = accumulationBound;
        if (visible && position === 'Outside') {
            series.labelBound = new Rect(Infinity, Infinity, -Infinity, -Infinity);
        }
    }
}

/**
 * Defines the behavior of a funnel series
 */
/**
 * FunnelSeries module used to render `Funnel` Series.
 */
class FunnelSeries extends TriangularBase {
    /**
     * Defines the path of a funnel segment
     */
    getSegmentData(point, series, chart) {
        let lineWidth;
        let topRadius;
        let bottomRadius;
        let endTop;
        let endBottom;
        let minRadius;
        let endMin;
        let bottomY;
        let area = series.triangleSize;
        let offset = 0;
        let extraSpace = (chart.initialClipRect.width - series.triangleSize.width) / 2;
        let emptySpaceAtLeft = extraSpace + chart.initialClipRect.x;
        let seriesTop = chart.initialClipRect.y + (chart.initialClipRect.height - area.height) / 2;
        //defines the top and bottom of a segment
        let top = point.yRatio * area.height;
        let bottom = top + point.heightRatio * area.height;
        let neckSize = series.neckSize;
        lineWidth = neckSize.width + (area.width - neckSize.width) * ((area.height - neckSize.height - top) /
            (area.height - neckSize.height));
        topRadius = (area.width / 2) - lineWidth / 2;
        //Calculating the middle slope change and bottom
        endTop = topRadius + lineWidth;
        if (bottom > area.height - neckSize.height || area.height === neckSize.height) {
            lineWidth = neckSize.width;
        }
        else {
            lineWidth = neckSize.width + (area.width - neckSize.width) *
                ((area.height - neckSize.height - bottom) / (area.height - neckSize.height));
        }
        bottomRadius = (area.width / 2) - (lineWidth / 2);
        endBottom = bottomRadius + lineWidth;
        if (top >= area.height - neckSize.height) {
            topRadius = bottomRadius = minRadius = (area.width / 2) - neckSize.width / 2;
            endTop = endBottom = endMin = (area.width / 2) + neckSize.width / 2;
        }
        else if (bottom > (area.height - neckSize.height)) {
            minRadius = bottomRadius = (area.width / 2) - lineWidth / 2;
            endMin = endBottom = minRadius + lineWidth;
            bottomY = area.height - neckSize.height;
        }
        top += seriesTop;
        bottom += seriesTop;
        bottomY += seriesTop;
        let line1 = { x: emptySpaceAtLeft + offset + topRadius, y: top };
        let line2 = { x: emptySpaceAtLeft + offset + endTop, y: top };
        let line4 = { x: emptySpaceAtLeft + offset + endBottom, y: bottom };
        let line5 = { x: emptySpaceAtLeft + offset + bottomRadius, y: bottom };
        let line3 = { x: emptySpaceAtLeft + offset + endBottom, y: bottom };
        let line6 = { x: emptySpaceAtLeft + offset + bottomRadius, y: bottom };
        if (bottomY) {
            line3 = { x: emptySpaceAtLeft + offset + endMin, y: bottomY };
            line6 = { x: emptySpaceAtLeft + offset + minRadius, y: bottomY };
        }
        let polygon = [line1, line2, line3, line4, line5, line6];
        this.setLabelLocation(series, point, polygon);
        let direction = this.findPath(polygon);
        return direction;
    }
    /**
     * Renders a funnel segment
     * @private
     */
    renderPoint(point, series, chart, options) {
        let direction = this.getSegmentData(point, series, chart);
        point.midAngle = 0;
        options.d = direction;
    }
    /**
     * To get the module name of the funnel series.
     */
    getModuleName() {
        return 'FunnelSeries';
    }
    /**
     * To destroy the funnel series.
     * @return {void}
     * @private
     */
    destroy(accumulation) {
        /**
         * Destroys the funnel series
         */
    }
}

/**
 * Defines the behavior of a pyramid series
 */
/**
 * PyramidSeries module used to render `Pyramid` Series.
 */
class PyramidSeries extends TriangularBase {
    /**
     * Defines the path of a pyramid segment
     */
    getSegmentData(point, series, chart) {
        let area = series.triangleSize;
        //top of th series
        let seriesTop = chart.initialClipRect.y + (chart.initialClipRect.height - area.height) / 2;
        let offset = 0;
        let extraSpace = (chart.initialClipRect.width - series.triangleSize.width) / 2;
        let emptySpaceAtLeft = extraSpace + chart.initialClipRect.x;
        //top and bottom
        let top = point.yRatio;
        let bottom = point.yRatio + point.heightRatio;
        //width of the top and bottom edge
        let topRadius = 0.5 * (1 - point.yRatio);
        let bottomRadius = 0.5 * (1 - bottom);
        top += seriesTop / area.height;
        bottom += seriesTop / area.height;
        let line1 = {
            x: emptySpaceAtLeft + offset + topRadius * area.width,
            y: top * area.height
        };
        let line2 = {
            x: emptySpaceAtLeft + offset + (1 - topRadius) * area.width,
            y: top * area.height
        };
        let line3 = {
            x: emptySpaceAtLeft + offset + (1 - bottomRadius) * area.width,
            y: bottom * area.height
        };
        let line4 = {
            x: emptySpaceAtLeft + offset + bottomRadius * area.width,
            y: bottom * area.height
        };
        let polygon = [line1, line2, line3, line4];
        this.setLabelLocation(series, point, polygon);
        let direction = this.findPath(polygon);
        return direction;
    }
    /**
     * Initializes the size of the pyramid segments
     * @private
     */
    initializeSizeRatio(points, series) {
        if (series.pyramidMode === 'Linear') {
            super.initializeSizeRatio(points, series, true);
        }
        else {
            this.calculateSurfaceSegments(series);
        }
    }
    /**
     * Defines the size of the pyramid segments, the surface of that will reflect the values
     */
    calculateSurfaceSegments(series) {
        let count = series.points.length;
        let sumOfValues = series.sumOfPoints;
        let y = [];
        let height = [];
        let gapRatio = Math.min(0, Math.max(series.gapRatio, 1));
        let gapHeight = gapRatio / (count - 1);
        let preSum = this.getSurfaceHeight(0, sumOfValues);
        let currY = 0;
        for (let i = 0; i < count; i++) {
            if (series.points[i].visible) {
                y[i] = currY;
                height[i] = this.getSurfaceHeight(currY, Math.abs(series.points[i].y));
                currY += height[i] + gapHeight * preSum;
            }
        }
        let coef = 1 / (currY - gapHeight * preSum);
        for (let i = 0; i < count; i++) {
            if (series.points[i].visible) {
                series.points[i].yRatio = coef * y[i];
                series.points[i].heightRatio = coef * height[i];
            }
        }
    }
    /**
     * Finds the height of pyramid segment
     */
    getSurfaceHeight(y, surface) {
        let result = this.solveQuadraticEquation(1, 2 * y, -surface);
        return result;
    }
    /**
     * Solves quadratic equation
     */
    solveQuadraticEquation(a, b, c) {
        let root1;
        let root2;
        let d = b * b - 4 * a * c;
        if (d >= 0) {
            let sd = Math.sqrt(d);
            root1 = (-b - sd) / (2 * a);
            root2 = (-b + sd) / (2 * a);
            return Math.max(root1, root2);
        }
        return 0;
    }
    /**
     * Renders a pyramid segment
     */
    renderPoint(point, series, chart, options) {
        let direction = this.getSegmentData(point, series, chart);
        point.midAngle = 0;
        options.d = direction;
    }
    /**
     * To get the module name of the Pyramid series.
     */
    getModuleName() {
        return 'PyramidSeries';
    }
    /**
     * To destroy the pyramid series
     * @return {void}
     * @private
     */
    destroy(accumulation) {
        /**
         * Destroys the pyramid series
         */
    }
}

/**
 * AccumulationChart legend
 */
/**
 * AccumulationLegend module used to render `Legend` for Accumulation chart.
 */
class AccumulationLegend extends BaseLegend {
    /**
     * Constructor for Accumulation Legend.
     * @param chart
     */
    constructor(chart) {
        super(chart);
        this.library = this;
        this.titleRect = new Rect(0, chart.margin.top, 0, 0);
    }
    /**
     * Get the legend options.
     * @return {void}
     * @private
     */
    getLegendOptions(chart, series) {
        this.legendCollections = [];
        for (let i = 0; i < 1; i++) {
            let seriesType = series[i].type;
            if (seriesType === 'Pie' || seriesType === 'Doughnut') {
                seriesType = (series[i].innerRadius !== '0' && series[i].innerRadius !== '0%') ?
                    'Doughnut' : 'Pie';
            }
            for (let point of series[i].points) {
                if (!isNullOrUndefined(point.x) && !isNullOrUndefined(point.y)) {
                    this.legendCollections.push(new LegendOptions(point.x.toString(), point.color, series[i].legendShape, point.visible, seriesType, null, null, point.index, series[i].index));
                }
            }
        }
    }
    /**
     * To find legend bounds for accumulation chart.
     * @private
     */
    getLegendBounds(availableSize, legendBounds, legend) {
        let extraWidth = 0;
        let extraHeight = 0;
        let padding = legend.padding;
        if (!this.isVertical) {
            extraHeight = !legend.height ? ((availableSize.height / 100) * 5) : 0;
        }
        else {
            extraWidth = !legend.width ? ((availableSize.width / 100) * 5) : 0;
        }
        legendBounds.width += extraWidth;
        legendBounds.height += extraHeight;
        let shapePadding = legend.shapePadding;
        let maximumWidth = 0;
        let shapeWidth = legend.shapeWidth;
        let rowWidth = 0;
        let rowCount = 0;
        let columnWidth = [];
        let columnHeight = 0;
        let legendWidth = 0;
        this.maxItemHeight = Math.max(measureText('MeasureText', legend.textStyle).height, legend.shapeHeight);
        let legendEventArgs;
        let render = false;
        for (let legendOption of this.legendCollections) {
            legendEventArgs = { fill: legendOption.fill, text: legendOption.text, shape: legendOption.shape,
                name: 'legendRender', cancel: false };
            this.chart.trigger('legendRender', legendEventArgs);
            legendOption.render = !legendEventArgs.cancel;
            legendOption.text = legendEventArgs.text;
            legendOption.fill = legendEventArgs.fill;
            legendOption.shape = legendEventArgs.shape;
            legendOption.textSize = measureText(legendOption.text, legend.textStyle);
            if (legendOption.render && legendOption.text !== '') {
                render = true;
                legendWidth = shapeWidth + shapePadding + legendOption.textSize.width + padding;
                if (this.isVertical) {
                    ++rowCount;
                    columnHeight = (rowCount * (this.maxItemHeight + padding)) + padding;
                    if ((rowCount * (this.maxItemHeight + padding)) + padding > legendBounds.height) {
                        columnHeight = Math.max(columnHeight, (rowCount * (this.maxItemHeight + padding)) + padding);
                        rowWidth = rowWidth + maximumWidth;
                        columnWidth.push(maximumWidth);
                        this.totalPages = Math.max(rowCount, this.totalPages || 1);
                        maximumWidth = 0;
                        rowCount = 1;
                    }
                    maximumWidth = Math.max(legendWidth, maximumWidth);
                }
                else {
                    rowWidth = rowWidth + legendWidth;
                    if (legendBounds.width < (padding + rowWidth)) {
                        maximumWidth = Math.max(maximumWidth, (rowWidth + padding - legendWidth));
                        if (rowCount === 0 && (legendWidth !== rowWidth)) {
                            rowCount = 1;
                        }
                        rowWidth = legendWidth;
                        rowCount++;
                        columnHeight = (rowCount * (this.maxItemHeight + padding)) + padding;
                    }
                }
            }
        }
        if (this.isVertical) {
            rowWidth = rowWidth + maximumWidth;
            this.isPaging = legendBounds.width < (rowWidth + padding);
            columnHeight = Math.max(columnHeight, ((this.totalPages || 1) * (this.maxItemHeight + padding)) + padding);
            this.isPaging = this.isPaging && (this.totalPages > 1);
            if (columnWidth[columnWidth.length - 1] !== maximumWidth) {
                columnWidth.push(maximumWidth);
            }
        }
        else {
            this.isPaging = legendBounds.height < columnHeight;
            this.totalPages = this.totalRowCount = rowCount;
            columnHeight = Math.max(columnHeight, (this.maxItemHeight + padding) + padding);
        }
        this.maxColumns = 0; // initialization for max columns
        let width = this.isVertical ? this.getMaxColumn(columnWidth, legendBounds.width, padding, rowWidth + padding) :
            Math.max(rowWidth + padding, maximumWidth);
        if (render) {
            this.setBounds(width, columnHeight, legend, legendBounds);
        }
        else {
            this.setBounds(0, 0, legend, legendBounds);
        }
    }
    /**
     * To find maximum column size for legend
     */
    getMaxColumn(columns, width, padding, rowWidth) {
        let maxPageColumn = padding;
        this.maxColumnWidth = Math.max.apply(null, columns);
        for (let column of columns) {
            maxPageColumn += this.maxColumnWidth;
            this.maxColumns++;
            if (maxPageColumn + padding > width) {
                maxPageColumn -= this.maxColumnWidth;
                this.maxColumns--;
                break;
            }
        }
        this.isPaging = (maxPageColumn < rowWidth) && (this.totalPages > 1);
        if (maxPageColumn === padding) {
            maxPageColumn = width;
        }
        this.maxColumns = Math.max(1, this.maxColumns);
        this.maxWidth = maxPageColumn;
        return maxPageColumn;
    }
    /**
     * To find available width from legend x position.
     */
    getAvailWidth(tx, width, legendX) {
        if (this.isVertical) {
            width = this.maxWidth;
        }
        return width - ((this.legend.padding * 2) + this.legend.shapeWidth + this.legend.shapePadding);
    }
    /**
     * To find legend rendering locations from legend options.
     * @private
     */
    getRenderPoint(legendOption, start, textPadding, prevLegend, rect, count, firstLegend) {
        let padding = this.legend.padding;
        if (this.isVertical) {
            if (count === firstLegend || (prevLegend.location.y + (this.maxItemHeight * 1.5) + (padding * 2) > rect.y + rect.height)) {
                legendOption.location.x = prevLegend.location.x + ((count === firstLegend) ? 0 : this.maxColumnWidth);
                legendOption.location.y = start.y;
                this.pageXCollections.push(legendOption.location.x - (this.legend.shapeWidth / 2) - padding);
                this.totalPages++;
            }
            else {
                legendOption.location.x = prevLegend.location.x;
                legendOption.location.y = prevLegend.location.y + this.maxItemHeight + padding;
            }
        }
        else {
            let previousBound = (prevLegend.location.x + textPadding + prevLegend.textSize.width);
            if ((previousBound + (legendOption.textSize.width + textPadding)) > (rect.x + rect.width + this.legend.shapeWidth / 2)) {
                legendOption.location.y = (count === firstLegend) ? prevLegend.location.y :
                    prevLegend.location.y + this.maxItemHeight + padding;
                legendOption.location.x = start.x;
            }
            else {
                legendOption.location.y = prevLegend.location.y;
                legendOption.location.x = (count === firstLegend) ? prevLegend.location.x : previousBound;
            }
            this.totalPages = this.totalRowCount;
        }
        let availablewidth = this.getAvailWidth(legendOption.location.x, this.legendBounds.width, this.legendBounds.x);
        legendOption.text = textTrim(+availablewidth.toFixed(4), legendOption.text, this.legend.textStyle);
    }
    /**
     * finding the smart legend place according to positions.
     * @return {void}
     * @private
     */
    getSmartLegendLocation(labelBound, legendBound, margin) {
        let space;
        switch (this.position) {
            case 'Left':
                space = ((labelBound.x - legendBound.width) - margin.left) / 2;
                legendBound.x = (labelBound.x - legendBound.width) < margin.left ? legendBound.x :
                    (labelBound.x - legendBound.width) - space;
                break;
            case 'Right':
                space = ((this.chart.availableSize.width - margin.right) - (labelBound.x + labelBound.width + legendBound.width)) / 2;
                legendBound.x = (labelBound.x + labelBound.width + legendBound.width) > (this.chart.availableSize.width - margin.right) ?
                    legendBound.x : (labelBound.x + labelBound.width + space);
                break;
            case 'Top':
                this.getTitleRect(this.chart);
                space = ((labelBound.y - legendBound.height) - (this.titleRect.y + this.titleRect.height)) / 2;
                legendBound.y = (labelBound.y - legendBound.height) < margin.top ? legendBound.y :
                    (labelBound.y - legendBound.height) - space;
                break;
            case 'Bottom':
                space = ((this.chart.availableSize.height - margin.bottom) - (labelBound.y + labelBound.height + legendBound.height)) / 2;
                legendBound.y = labelBound.y + labelBound.height + legendBound.height > (this.chart.availableSize.height - margin.bottom) ?
                    legendBound.y : (labelBound.y + labelBound.height) + space;
                break;
        }
    }
    /**
     * To get title rect.
     */
    getTitleRect(accumulation) {
        if (!accumulation.title) {
            return null;
        }
        let titleSize = measureText(accumulation.title, accumulation.titleStyle);
        this.titleRect = new Rect(accumulation.availableSize.width / 2 - titleSize.width / 2, accumulation.margin.top, titleSize.width, titleSize.height);
    }
    /**
     * To get legend by index
     */
    legendByIndex(index, legendCollections) {
        for (let legend of legendCollections) {
            if (legend.pointIndex === index) {
                return legend;
            }
        }
        return null;
    }
    /**
     * To show or hide the legend on clicking the legend.
     * @return {void}
     */
    click(event) {
        let targetId = event.target.id;
        let legendItemsId = [this.legendID + '_text_', this.legendID + '_shape_',
            this.legendID + '_shape_marker_'];
        let selectedDataIndexes = [];
        if (this.chart.accumulationSelectionModule) {
            selectedDataIndexes = extend([], this.chart.accumulationSelectionModule.selectedDataIndexes, null, true);
        }
        for (let id of legendItemsId) {
            if (targetId.indexOf(id) > -1) {
                let pointIndex = parseInt(targetId.split(id)[1], 10);
                let currentSeries = this.chart.visibleSeries[0];
                let point = pointByIndex(pointIndex, currentSeries.points);
                let legendOption = this.legendByIndex(pointIndex, this.legendCollections);
                if (this.chart.legendSettings.toggleVisibility) {
                    point.visible = !point.visible;
                    legendOption.visible = point.visible;
                    this.chart.removeSvg();
                    if (point.visible) {
                        currentSeries.sumOfPoints += point.y;
                    }
                    else {
                        currentSeries.sumOfPoints -= point.y;
                    }
                    this.chart.refreshPoints(currentSeries.points);
                    this.chart.renderElements();
                }
                else if (this.chart.accumulationSelectionModule) {
                    this.chart.accumulationSelectionModule.legendSelection(this.chart, 0, pointIndex);
                }
            }
        }
        if (targetId.indexOf(this.legendID + '_pageup') > -1) {
            this.changePage(event, true);
        }
        else if (targetId.indexOf(this.legendID + '_pagedown') > -1) {
            this.changePage(event, false);
        }
    }
    /**
     * Get module name
     */
    getModuleName() {
        return 'AccumulationLegend';
    }
    /**
     * To destroy the Legend.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method calling here
         */
    }
}

/**
 * AccumulationChart DataLabel module file
 */
/**
 * AccumulationDataLabel module used to render `dataLabel`.
 */
class AccumulationDataLabel extends AccumulationBase {
    constructor(accumulation) {
        super(accumulation);
        this.id = accumulation.element.id + '_datalabel_Series_';
        if (accumulation.title) {
            let titleSize = measureText(accumulation.title, accumulation.titleStyle);
            this.titleRect = new Rect(accumulation.availableSize.width / 2 - titleSize.width / 2, accumulation.margin.top, titleSize.width, titleSize.height);
        }
    }
    /**
     * Method to get datalabel text location.
     * @private
     */
    getDataLabelPosition(point, dataLabel, textSize, points, parent, id) {
        let radius = this.isCircular() ? this.labelRadius : this.getLabelDistance(point, dataLabel);
        this.getLabelRegion(point, dataLabel.position, textSize, radius, this.marginValue);
        point.labelAngle = point.midAngle;
        point.labelPosition = dataLabel.position;
        if (this.accumulation.enableSmartLabels) {
            this.getSmartLabel(point, dataLabel, textSize, points, parent, id);
        }
    }
    /**
     * Method to get datalabel bound.
     */
    getLabelRegion(point, position, textSize, labelRadius, margin, endAngle = 0) {
        let labelAngle = endAngle || point.midAngle;
        let space = 10;
        let location = degreeToLocation(labelAngle, labelRadius, this.isCircular() ? this.center :
            this.getLabelLocation(point, position));
        location.y = (position === 'Inside') ? (location.y - textSize.height / 2) : location.y;
        location.x = (position === 'Inside') ? (location.x - textSize.width / 2) : location.x;
        point.labelRegion = new Rect(location.x, location.y, textSize.width + (margin * 2), textSize.height + (margin * 2));
        if (position === 'Outside') {
            point.labelRegion.y -= point.labelRegion.height / 2;
            if (labelAngle >= 90 && labelAngle <= 270) {
                point.labelRegion.x -= (point.labelRegion.width + space);
            }
            else {
                point.labelRegion.x += space;
            }
        }
    }
    /**
     * Method to get datalabel smart position.
     */
    getSmartLabel(point, dataLabel, textSize, points, parent, id) {
        let circular = this.isCircular();
        let labelRadius = circular ? this.radius : this.getLabelDistance(point, dataLabel);
        let connectorLength = circular ? (dataLabel.connectorStyle.length || '4%') :
            '0px';
        labelRadius += stringToNumber(connectorLength, labelRadius);
        let previousPoint = this.findPreviousPoint(points, point.index, point.labelPosition);
        if (dataLabel.position === 'Inside') {
            if (previousPoint && previousPoint.labelRegion && (isOverlap(point.labelRegion, previousPoint.labelRegion)
                || this.isOverlapping(point, points)) || !circular && !containsRect(point.region, point.labelRegion)) {
                point.labelPosition = 'Outside';
                if (!circular) {
                    labelRadius = this.getLabelDistance(point, dataLabel);
                }
                this.getLabelRegion(point, point.labelPosition, textSize, labelRadius, this.marginValue);
                previousPoint = this.findPreviousPoint(points, point.index, point.labelPosition);
                if (previousPoint && (isOverlap(point.labelRegion, previousPoint.labelRegion) ||
                    this.isConnectorLineOverlapping(point, previousPoint))) {
                    this.setOuterSmartLabel(previousPoint, point, dataLabel.border.width, labelRadius, textSize, this.marginValue);
                }
            }
        }
        else {
            if (previousPoint && previousPoint.labelRegion && (isOverlap(point.labelRegion, previousPoint.labelRegion)
                || this.isOverlapping(point, points) || this.isConnectorLineOverlapping(point, previousPoint))) {
                this.setOuterSmartLabel(previousPoint, point, dataLabel.border.width, labelRadius, textSize, this.marginValue);
            }
        }
        if (this.isOverlapping(point, points) || (this.titleRect && point.labelRegion && isOverlap(point.labelRegion, this.titleRect))) {
            this.setPointVisibileFalse(point);
        }
        if (this.accumulation.accumulationLegendModule && point.labelVisible && point.labelRegion) {
            let rect = this.accumulation.accumulationLegendModule.legendBounds;
            let padding = this.accumulation.legendSettings.border.width / 2;
            this.textTrimming(point, new Rect(rect.x - padding, rect.y - padding, rect.width + (2 * padding), rect.height + (2 * padding)), dataLabel.font, this.accumulation.accumulationLegendModule.position);
        }
        if (point.labelVisible && point.labelRegion) {
            let position = this.isCircular() ? (point.labelRegion.x >= this.center.x) ? 'InsideRight' : 'InsideLeft' :
                'InsideRight';
            this.textTrimming(point, this.areaRect, dataLabel.font, position);
        }
        if (point.labelVisible && point.labelRegion && ((point.labelRegion.y + point.labelRegion.height >
            this.areaRect.y + this.areaRect.height || point.labelRegion.y < this.areaRect.y) || (point.labelRegion.x < this.areaRect.x ||
            point.labelRegion.x + point.labelRegion.width > this.areaRect.x + this.areaRect.width))) {
            this.setPointVisibileFalse(point);
        }
    }
    /**
     * To find trimmed datalabel tooltip needed.
     * @return {void}
     * @private
     */
    move(e, x, y, isTouch) {
        if (e.target.textContent.indexOf('...') > -1) {
            let targetId = e.target.id.split(this.id);
            if (targetId.length === 2) {
                let seriesIndex = parseInt(targetId[1].split('_text_')[0], 10);
                let pointIndex = parseInt(targetId[1].split('_text_')[1], 10);
                if (!isNaN(seriesIndex) && !isNaN(pointIndex)) {
                    if (isTouch) {
                        removeElement(this.accumulation.element.id + '_EJ2_Datalabel_Tooltip');
                    }
                    let point = getSeriesFromIndex(seriesIndex, (this.accumulation).visibleSeries).points[pointIndex];
                    showTooltip(point.text || point.y.toString(), x, y, this.areaRect.width, this.accumulation.element.id + '_EJ2_Datalabel_Tooltip', getElement(this.accumulation.element.id + '_Secondary_Element'));
                }
            }
        }
        else {
            removeElement(this.accumulation.element.id + '_EJ2_Datalabel_Tooltip');
        }
        if (isTouch) {
            clearTimeout(this.clearTooltip);
            this.clearTooltip = setTimeout(() => { removeElement(this.accumulation.element.id + '_EJ2_Datalabel_Tooltip'); }, 1000);
        }
    }
    /**
     * To find previous valid label point
     */
    findPreviousPoint(points, index, position) {
        let point = points[0];
        for (let i = index - 1; i >= 0; i--) {
            point = points[i];
            if (point.visible && point.labelVisible && point.labelRegion && point.labelPosition === position) {
                return point;
            }
        }
        return null;
    }
    /**
     * To find current point datalabel is overlapping with other points
     */
    isOverlapping(currentPoint, points) {
        for (let i = currentPoint.index - 1; i >= 0; i--) {
            if (points[i].visible && points[i].labelVisible && points[i].labelRegion && currentPoint.labelRegion &&
                currentPoint.labelVisible && isOverlap(currentPoint.labelRegion, points[i].labelRegion)) {
                return true;
            }
        }
        return false;
    }
    /**
     * To get text trimmed while exceeds the accumulation chart area.
     */
    textTrimming(point, rect, font, position) {
        if (isOverlap(point.labelRegion, rect)) {
            let size = point.labelRegion.width;
            if (position === 'Right') {
                size = rect.x - point.labelRegion.x;
            }
            else if (position === 'Left') {
                size = point.labelRegion.x - (rect.x + rect.width);
                if (size < 0) {
                    size += point.labelRegion.width;
                    point.labelRegion.x = rect.x + rect.width;
                }
            }
            else if (position === 'InsideRight') {
                size = (rect.x + rect.width) - point.labelRegion.x;
            }
            else if (position === 'InsideLeft') {
                size = (point.labelRegion.x + point.labelRegion.width) - rect.x;
                if (size < point.labelRegion.width) {
                    point.labelRegion.x = rect.x;
                }
            }
            else {
                this.setPointVisibileFalse(point);
            }
            if (point.labelVisible && point.labelRegion) {
                if (size < point.labelRegion.width) {
                    point.label = textTrim(size - (this.marginValue * 2), point.label, font);
                    point.labelRegion.width = size;
                }
                if (point.label.length === 3 && point.label.indexOf('...') > -1) {
                    this.setPointVisibileFalse(point);
                }
            }
        }
    }
    /**
     * To set point label visible and region to disable.
     */
    setPointVisibileFalse(point) {
        point.labelVisible = false;
        point.labelRegion = null;
    }
    /**
     * To set datalabel angle position for outside labels
     */
    setOuterSmartLabel(previousPoint, point, border, labelRadius, textsize, margin) {
        if (!this.isCircular()) {
            this.setSmartLabelForSegments(point, previousPoint, labelRadius, textsize, margin);
        }
        else {
            let labelAngle = this.getOverlappedAngle(previousPoint.labelRegion, point.labelRegion, point.midAngle, border * 2);
            this.getLabelRegion(point, 'Outside', textsize, labelRadius, margin, labelAngle);
            if (labelAngle > point.endAngle) {
                this.setPointVisibileFalse(point);
            }
            point.labelAngle = labelAngle;
            while (point.labelVisible && (isOverlap(previousPoint.labelRegion, point.labelRegion) || labelAngle <= previousPoint.labelAngle
                || this.isConnectorLineOverlapping(point, previousPoint))) {
                if (labelAngle > point.endAngle) {
                    this.setPointVisibileFalse(point);
                    break;
                }
                point.labelAngle = labelAngle;
                this.getLabelRegion(point, 'Outside', textsize, labelRadius, margin, labelAngle);
                labelAngle += 0.1;
            }
        }
    }
    /**
     * Sets smart label positions for funnel and pyramid series
     */
    setSmartLabelForSegments(point, prevPoint, distance, textSize, margin) {
        let textRegion = point.labelRegion;
        //let overlapWidth: number = prevPoint.labelRegion.x + prevPoint.labelRegion.width - textRegion.x;
        let overlapHeight = this.accumulation.type === 'Funnel' ?
            prevPoint.labelRegion.y - (textRegion.y + textRegion.height) :
            point.labelRegion.y - (prevPoint.labelRegion.y + prevPoint.labelRegion.height);
        if (overlapHeight < 0) {
            point.labelRegion.y += this.accumulation.type === 'Funnel' ? overlapHeight : -overlapHeight;
        }
    }
    /**
     * To find connector line overlapping.
     */
    isConnectorLineOverlapping(point, previous) {
        let start = this.getLabelLocation(point);
        let end = new ChartLocation(0, 0);
        this.getEdgeOfLabel(point.labelRegion, point.labelAngle, end);
        let previousstart = this.getLabelLocation(previous);
        let previousend = new ChartLocation(0, 0);
        this.getEdgeOfLabel(previous.labelRegion, previous.labelAngle, previousend);
        return this.isLineRectangleIntersect(start, end, point.labelRegion) ||
            this.isLineRectangleIntersect(start, end, previous.labelRegion) ||
            this.isLineRectangleIntersect(previousstart, previousend, point.labelRegion);
    }
    /**
     * To find two rectangle intersect
     */
    isLineRectangleIntersect(line1, line2, rect) {
        let rectPoints = [
            new ChartLocation(Math.round(rect.x), Math.round(rect.y)),
            new ChartLocation(Math.round((rect.x + rect.width)), Math.round(rect.y)),
            new ChartLocation(Math.round((rect.x + rect.width)), Math.round((rect.y + rect.height))),
            new ChartLocation(Math.round(rect.x), Math.round((rect.y + rect.height)))
        ];
        line1.x = Math.round(line1.x);
        line1.y = Math.round(line1.y);
        line2.x = Math.round(line2.x);
        line2.y = Math.round(line2.y);
        for (let i = 0; i < rectPoints.length; i++) {
            if (this.isLinesIntersect(line1, line2, rectPoints[i], rectPoints[(i + 1) % rectPoints.length])) {
                return true;
            }
        }
        return false;
    }
    /**
     * To find two line intersect
     */
    isLinesIntersect(point1, point2, point11, point12) {
        let a1 = point2.y - point1.y;
        let b1 = point1.x - point2.x;
        let c1 = a1 * point1.x + b1 * point1.y;
        let a2 = point12.y - point11.y;
        let b2 = point11.x - point12.x;
        let c2 = a2 * point11.x + b2 * point11.y;
        let delta = a1 * b2 - a2 * b1;
        if (delta !== 0) {
            let x = (b2 * c1 - b1 * c2) / delta;
            let y = (a1 * c2 - a2 * c1) / delta;
            let lies = Math.min(point1.x, point2.x) <= x && x <= Math.max(point1.x, point2.x);
            lies = lies && Math.min(point1.y, point2.y) <= y && y <= Math.max(point1.y, point2.y);
            lies = lies && Math.min(point11.x, point12.x) <= x && x <= Math.max(point11.x, point12.x);
            lies = lies && Math.min(point11.y, point12.y) <= y && y <= Math.max(point11.y, point12.y);
            return lies;
        }
        return false;
    }
    /**
     * To get two rectangle overlapping angles.
     */
    getOverlappedAngle(first, second, angle, padding) {
        let x = first.x;
        if (angle >= 90 && angle <= 270) {
            second.y = first.y - (padding + second.height / 2);
            x = first.x + first.width;
        }
        else {
            second.y = first.y + first.height + padding;
        }
        return getAngle(this.center, new ChartLocation(x, second.y));
    }
    /**
     * To get connector line path
     */
    getConnectorPath(label, point, dataLabel, end = 0) {
        let connector = dataLabel.connectorStyle;
        let labelRadius = this.isCircular() ? this.labelRadius : this.getLabelDistance(point, dataLabel);
        let start = this.getConnectorStartPoint(point, connector);
        let labelAngle = end || point.midAngle;
        let middle = new ChartLocation(0, 0);
        let endPoint = this.getEdgeOfLabel(label, labelAngle, middle, connector.width);
        if (connector.type === 'Curve') {
            if (this.isCircular()) {
                let r = labelRadius - this.radius;
                middle = degreeToLocation(labelAngle, labelRadius - (r / 2), this.center);
                return 'M ' + start.x + ' ' + start.y + ' Q' + middle.x + ',' + middle.y + ' ' + endPoint.x + ',' + endPoint.y;
            }
            else {
                return this.getPolyLinePath(start, endPoint);
            }
        }
        else {
            return 'M ' + start.x + ' ' + start.y + ' L ' + middle.x + ' ' + middle.y + ' L ' + endPoint.x + ' ' + endPoint.y;
        }
    }
    /**
     * Finds the curved path for funnel/pyramid data label connectors
     */
    getPolyLinePath(start, end) {
        let controlPoints = [start, end];
        if (start.y === end.y) {
            return 'M ' + start.x + ' ' + start.y + ' L ' + end.x + ' ' + end.y;
        }
        let path = 'M';
        for (let i = 0; i <= 16; i++) {
            let t = i / 16;
            let points = this.getBezierPoint(t, controlPoints, 0, 2);
            path += points.x + ',' + points.y;
            if (i !== 16) {
                path += ' L';
            }
        }
        return path;
    }
    /**
     * Finds the bezier point for funnel/pyramid data label connectors
     */
    getBezierPoint(t, controlPoints, index, count) {
        if (count === 1) {
            return controlPoints[index];
        }
        let p0 = this.getBezierPoint(t, controlPoints, index, count - 1);
        let p1 = this.getBezierPoint(t, controlPoints, index + 1, count - 1);
        let x = (p0.x) ? p0.x : p0.x;
        let y = (p0.y) ? p0.y : p0.y;
        let x1 = (p1.x) ? p1.x : p1.x;
        let y1 = (p1.y) ? p1.y : p1.y;
        let x2 = (1 - t) * x + t * x1;
        let y2 = (1 - t) * y + t * y1;
        if (p0.x) {
            return { x: x2, y: y2 };
        }
        else {
            return { x: x2, y: y2 };
        }
    }
    /**
     * To get label edges based on the center and label rect position.
     */
    getEdgeOfLabel(labelshape, angle, middle, border = 1) {
        let edge = new ChartLocation(labelshape.x, labelshape.y);
        if (angle >= 90 && angle <= 270) {
            edge.x += labelshape.width + border / 2;
            edge.y += labelshape.height / 2;
            middle.x = edge.x + 10;
            middle.y = edge.y;
        }
        else {
            edge.x -= border / 2;
            edge.y += labelshape.height / 2;
            middle.x = edge.x - 10;
            middle.y = edge.y;
        }
        return edge;
    }
    /**
     * Finds the distance between the label position and the edge/center of the funnel/pyramid
     */
    getLabelDistance(point, dataLabel) {
        if (point.labelPosition && dataLabel.position !== point.labelPosition || dataLabel.connectorStyle.length) {
            let length = stringToNumber(dataLabel.connectorStyle.length || '70px', this.accumulation.initialClipRect.width);
            if (length < this.accumulation.initialClipRect.width) {
                return length;
            }
        }
        let position = point.labelPosition || dataLabel.position;
        let series = this.accumulation.visibleSeries[0];
        let extraSpace = (this.accumulation.initialClipRect.width - series.triangleSize.width) / 2;
        let labelLocation;
        switch (position) {
            case 'Inside':
                return 0;
            case 'Outside':
                labelLocation = point.symbolLocation.x + point.labelOffset.x;
                return this.accumulation.initialClipRect.width - labelLocation - extraSpace;
        }
    }
    /**
     * Finds the label position / beginning of the connector(ouside funnel labels)
     */
    getLabelLocation(point, position = 'Outside') {
        if (this.accumulation.type !== 'Pie') {
            position = point.labelPosition || position;
            let location = {
                x: point.symbolLocation.x,
                y: point.symbolLocation.y - point.labelOffset.y
            };
            switch (position) {
                case 'Inside':
                    location.y = point.region.y + point.region.height / 2;
                    break;
                case 'Outside':
                    location.x += point.labelOffset.x;
            }
            return location;
        }
        else {
            return degreeToLocation(point.midAngle, this.radius, this.center);
        }
    }
    /**
     * Finds the beginning of connector line
     */
    getConnectorStartPoint(point, connector) {
        return this.isCircular() ? degreeToLocation(point.midAngle, this.radius - connector.width, this.center) :
            this.getLabelLocation(point);
    }
    /**
     * To find area rect based on margin, available size.
     * @private
     */
    findAreaRect() {
        this.areaRect = new Rect(0, 0, this.accumulation.availableSize.width, this.accumulation.availableSize.height);
        let margin = this.accumulation.margin;
        subtractThickness(this.areaRect, new Thickness(margin.left, margin.right, margin.top, margin.bottom));
    }
    /**
     * To render the data labels from series points.
     */
    renderDataLabel(point, dataLabel, parent, points, series, templateElement) {
        let id = this.accumulation.element.id + '_datalabel_Series_' + series + '_';
        let datalabelGroup = this.accumulation.renderer.createGroup({ id: id + 'g_' + point.index });
        point.label = point.originalText || point.y.toString();
        let border = { width: dataLabel.border.width, color: dataLabel.border.color };
        let argsData = {
            cancel: false, name: textRender, series: this.accumulation.visibleSeries[0], point: point,
            text: point.label, border: border, color: dataLabel.fill, template: dataLabel.template
        };
        this.accumulation.trigger(textRender, argsData);
        let isTemplate = argsData.template !== null;
        point.labelVisible = !argsData.cancel;
        point.text = point.label = argsData.text;
        this.marginValue = argsData.border.width ? (5 + argsData.border.width) : 1;
        // Template element
        let childElement = createElement('div', {
            id: this.accumulation.element.id + '_Series_' + 0 + '_DataLabel_' + point.index,
            styles: 'position: absolute;background-color:' + argsData.color + ';' +
                getFontStyle(dataLabel.font) + ';border:' + argsData.border.width + 'px solid ' + argsData.border.color + ';'
        });
        let textSize = isTemplate ? this.getTemplateSize(childElement, point, argsData) :
            measureText(point.label, dataLabel.font);
        textSize.height += 4; // 4 for calculation with padding for smart label shape
        textSize.width += 4;
        this.getDataLabelPosition(point, dataLabel, textSize, points, datalabelGroup, id);
        if (point.labelVisible) {
            this.correctLabelRegion(point.labelRegion, textSize);
            if (isTemplate) {
                this.setTemplateStyle(childElement, point, templateElement, dataLabel.font.color, argsData.color);
            }
            else {
                datalabelGroup.appendChild(this.accumulation.renderer.drawRectangle(new RectOption(id + 'shape_' + point.index, argsData.color, argsData.border, 1, point.labelRegion, dataLabel.rx, dataLabel.ry)));
                textElement(new TextOption(id + 'text_' + point.index, point.labelRegion.x + this.marginValue, point.labelRegion.y + (textSize.height * 3 / 4) + this.marginValue, 'start', point.label, '', 'auto'), dataLabel.font, dataLabel.font.color || this.getSaturatedColor(point, argsData.color), datalabelGroup);
            }
            if (this.accumulation.accumulationLegendModule && (dataLabel.position === 'Outside' || this.accumulation.enableSmartLabels)) {
                this.accumulation.visibleSeries[0].findMaxBounds(this.accumulation.visibleSeries[0].labelBound, point.labelRegion);
            }
            if (point.labelPosition === 'Outside') {
                let path = this.getConnectorPath(extend({}, point.labelRegion, null, true), point, dataLabel, point.labelAngle);
                let pathElement = this.accumulation.renderer.drawPath(new PathOption(id + 'connector_' + point.index, 'transparent', dataLabel.connectorStyle.width, dataLabel.connectorStyle.color || point.color, 1, '', path));
                datalabelGroup.appendChild(pathElement);
            }
            parent.appendChild(datalabelGroup);
        }
    }
    /**
     * To find the template element size
     * @param element
     * @param point
     * @param argsData
     */
    getTemplateSize(element, point, argsData) {
        let clientRect;
        element = createTemplate(element, point.index, argsData.template, this.accumulation, point, this.accumulation.visibleSeries[0]);
        clientRect = measureElementRect(element);
        return { width: clientRect.width, height: clientRect.height };
    }
    /**
     * To set the template element style
     * @param childElement
     * @param point
     * @param parent
     * @param labelColor
     * @param fill
     */
    setTemplateStyle(childElement, point, parent, labelColor, fill) {
        childElement.style.left = (point.labelRegion.x) + 'px';
        childElement.style.top = (point.labelRegion.y) + 'px';
        childElement.style.color = labelColor ||
            this.getSaturatedColor(point, fill);
        if (childElement.childElementCount) {
            parent.appendChild(childElement);
            this.doTemplateAnimation(this.accumulation, childElement);
        }
    }
    /**
     * To find saturated color for datalabel
     */
    getSaturatedColor(point, color) {
        let saturatedColor;
        if (this.marginValue >= 1) {
            saturatedColor = color === 'transparent' ? this.getLabelBackground(point) : color;
        }
        else {
            saturatedColor = this.getLabelBackground(point);
        }
        saturatedColor = (saturatedColor === 'transparent') ? window.getComputedStyle(document.body, null).backgroundColor : saturatedColor;
        let rgbValue = convertHexToColor(colorNameToHex(saturatedColor));
        let contrast = Math.round((rgbValue.r * 299 + rgbValue.g * 587 + rgbValue.b * 114) / 1000);
        return contrast >= 128 ? 'black' : 'white';
    }
    /**
     * Animates the data label template.
     * @return {void}.
     * @private
     */
    doTemplateAnimation(accumulation, element) {
        let series = accumulation.visibleSeries[0];
        let delay = series.animation.delay + series.animation.duration;
        if (series.animation.enable && accumulation.animateSeries) {
            element.style.visibility = 'hidden';
            templateAnimate(element, delay, 200, 'ZoomIn');
        }
    }
    /**
     * To find background color for the datalabel
     */
    getLabelBackground(point) {
        return point.labelPosition === 'Outside' ?
            this.accumulation.background || this.accumulation.themeStyle.background : point.color;
    }
    /**
     * To correct the padding between datalabel regions.
     */
    correctLabelRegion(labelRegion, textSize, padding = 4) {
        labelRegion.height -= padding;
        labelRegion.width -= padding;
        labelRegion.x += padding / 2;
        labelRegion.y += padding / 2;
        textSize.height -= padding;
        textSize.width -= padding;
    }
    /**
     * To get the dataLabel module name
     */
    getModuleName() {
        return 'AccumulationDataLabel';
    }
    /**
     * To destroy the data label.
     * @return {void}
     * @private
     */
    destroy(accumulation) {
        /**
         * Destroy method performed here
         */
    }
}

/**
 * AccumulationChart Tooltip file
 */
/**
 * `AccumulationTooltip` module is used to render tooltip for accumulation chart.
 */
class AccumulationTooltip extends BaseTooltip {
    constructor(accumulation) {
        super(accumulation);
        this.accumulation = accumulation;
        this.addEventListener();
    }
    /**
     * @hidden
     */
    addEventListener() {
        if (this.accumulation.isDestroyed) {
            return;
        }
        this.accumulation.on(Browser.isPointer ? 'pointerleave' : 'mouseleave', this.mouseLeaveHandler, this);
        this.accumulation.on(Browser.touchMoveEvent, this.mouseMoveHandler, this);
        this.accumulation.on(Browser.touchEndEvent, this.mouseUpHandler, this);
    }
    mouseLeaveHandler(e) {
        this.removeTooltip(1000);
    }
    mouseUpHandler(e) {
        let control = this.accumulation;
        if (control.tooltip.enable && control.isTouch && withInBounds(control.mouseX, control.mouseY, control.initialClipRect)) {
            this.tooltip(e);
            this.removeTooltip(2000);
        }
    }
    mouseMoveHandler(e) {
        let control = this.accumulation;
        // Tooltip for chart series.    
        if (control.tooltip.enable && withInBounds(control.mouseX, control.mouseY, control.initialClipRect)) {
            this.tooltip(e);
        }
    }
    /**
     * Renders the tooltip.
     * @param  {PointerEvent} event - Mouse move event.
     * @return {void}
     */
    tooltip(event) {
        let isTooltip = this.getElement(this.element.id + '_tooltip');
        let tooltipDiv = this.getTooltipElement(isTooltip);
        this.renderSeriesTooltip(event, this.accumulation, !isTooltip, tooltipDiv);
    }
    renderSeriesTooltip(e, chart, isFirst, tooltipDiv) {
        let data = this.getPieData(e, chart, chart.mouseX, chart.mouseY);
        let rect = chart.initialClipRect;
        this.currentPoints = [];
        let markerSide;
        if (data.point && (!this.previousPoints[0] || (this.previousPoints[0].point !== data.point))) {
            if (this.pushData(data, isFirst, tooltipDiv, false)) {
                let text = this.getTooltipText(data, chart.tooltip);
                if (!chart.tooltip.template) {
                    if (this.header !== '') {
                        this.findHeader(data);
                    }
                    markerSide = this.renderTooltip(data, rect, data.point.symbolLocation, text, isFirst, false);
                    if (markerSide) {
                        this.drawMarker(markerSide.isBottom, 10);
                    }
                }
                else {
                    this.renderTemplate(data, rect, data.point.symbolLocation, this.getTemplateText(data), isFirst);
                }
                this.isRemove = true;
            }
            this.previousPoints = extend([], this.currentPoints, null, true);
        }
        else {
            if (!data.point && this.isRemove) {
                this.removeTooltip(1000);
                this.isRemove = false;
            }
        }
    }
    drawMarker(isBottom, size) {
        let count = 0;
        let shapeOption;
        let groupElement = this.getElement(this.element.id + '_tooltip_group');
        let markerGroup = this.chart.renderer.createGroup({ id: this.element.id + '_tooltip_trackball_group' });
        let x = (this.padding * 2) + (size / 2);
        let y;
        let series;
        for (let data of this.currentPoints) {
            series = data.series;
            y = this.markerPoint[count] - this.padding + (isBottom ? this.arrowPadding : 0);
            shapeOption = new PathOption(this.element.id + '_Tooltip_Trackball_' + series.index, data.point.color, 1, '#cccccc', series.opacity, null);
            markerGroup.appendChild(drawSymbol(new ChartLocation(x, y), 'Circle', new Size(size, size), null, shapeOption, null));
            count++;
        }
        groupElement.appendChild(markerGroup);
    }
    getPieData(e, chart, x, y) {
        let target = e.target;
        let id = indexFinder(target.id, true);
        if (!isNaN(id.series)) {
            let seriesIndex = id.series;
            let pointIndex = id.point;
            if (!isNullOrUndefined(seriesIndex) && !isNaN(seriesIndex) && !isNullOrUndefined(pointIndex) && !isNaN(pointIndex)) {
                let series = this.getSeriesFromIndex(seriesIndex, chart.visibleSeries);
                if (series.enableTooltip) {
                    return new AccPointData(series.points[pointIndex], series);
                }
            }
        }
        return new AccPointData(null, null);
    }
    /**
     * To get series from index
     */
    getSeriesFromIndex(index, visibleSeries) {
        return visibleSeries[0];
    }
    getTemplateText(data) {
        let point = extend({}, data.point);
        return point;
    }
    getTooltipText(data, tooltip) {
        let series = data.series;
        let format = tooltip.format ? tooltip.format : '${point.x} : <b>${point.y}</b>';
        return this.parseTemplate(data.point, series, format);
    }
    findHeader(data) {
        this.header = this.parseTemplate(data.point, data.series, this.header);
        if (this.header.replace(/<b>/g, '').replace(/<\/b>/g, '').trim() !== '') {
            this.formattedText = this.formattedText.concat(this.header);
        }
    }
    parseTemplate(point, series, format) {
        let value;
        let textValue;
        for (let dataValue of Object.keys(point)) {
            value = new RegExp('${point' + '.' + dataValue + '}', 'gm');
            format = format.replace(value.source, point[dataValue]);
        }
        for (let dataValue of Object.keys(Object.getPrototypeOf(series))) {
            value = new RegExp('${series' + '.' + dataValue + '}', 'gm');
            textValue = series[dataValue];
            format = format.replace(value.source, textValue);
        }
        return format;
    }
    /**
     * Removes the tooltip on mouse leave.
     * @return {void}
     * @private
     */
    removeTooltip(duration) {
        let chart = this.control;
        let tooltipElement = this.getElement(this.element.id + '_tooltip');
        this.stopAnimation();
        if (tooltipElement && this.previousPoints.length > 0) {
            let data = this.previousPoints;
            this.toolTipInterval = setTimeout(() => {
                let series = data[0].series;
                let tooltipGroup = tooltipElement.firstChild;
                let opacity = parseFloat(tooltipGroup.getAttribute('opacity')) || 1;
                let element = this.getElement(chart.element.id + '_Series_' + data[0].series.index
                    + '_Point_' + data[0].point.index);
                let rectOpacity;
                if (element) {
                    rectOpacity = parseFloat(element.getAttribute('opacity'));
                }
                new Animation({}).animate(tooltipGroup, {
                    duration: 200,
                    progress: (args) => {
                        this.progressAnimation(element, tooltipGroup, series, opacity, rectOpacity, (args.timeStamp / args.duration), series.isRectSeries, false);
                    },
                    end: (model) => {
                        this.previousPoints = [];
                        this.endAnimation(element, tooltipGroup, series, false);
                    }
                });
            }, duration);
        }
    }
    /**
     * Get module name
     */
    getModuleName() {
        return 'AccumulationTooltip';
    }
    /**
     * To destroy the Tooltip.
     * @return {void}
     * @private
     */
    destroy(chart) {
        /**
         * Destroy method calling here
         */
    }
}

/**
 * `AccumulationSelection` module handles the selection for accumulation chart.
 * @private
 */
class AccumulationSelection extends BaseSelection {
    constructor(accumulation) {
        super(accumulation);
        this.renderer = accumulation.renderer;
    }
    /**
     * To initialize the private variables
     */
    initPrivateVariables(accumulation) {
        this.styleId = accumulation.element.id + '_ej2_chart_selection';
        this.unselected = accumulation.element.id + '_ej2_deselected';
        this.selectedDataIndexes = [];
        this.rectPoints = null;
    }
    /**
     * Invoke selection for rendered chart.
     * @param  {AccumulationChart} chart - Define the chart to invoke the selection.
     * @return {void}
     */
    invokeSelection(accumulation) {
        this.initPrivateVariables(accumulation);
        this.series = extend({}, accumulation.visibleSeries, null, true);
        this.seriesStyles();
        this.selectDataIndex(this.concatIndexes(accumulation.selectedDataIndexes, this.selectedDataIndexes), accumulation);
    }
    /**
     * To get series selection style by series.
     */
    generateStyle(series) {
        return (series.selectionStyle || this.styleId + '_series_' + series.index);
    }
    /**
     * To get elements by index, series
     */
    findElements(accumulation, series, index) {
        return [this.getElementByIndex(index)];
    }
    /**
     * To get series point element by index
     */
    getElementByIndex(index) {
        let elementId = this.control.element.id + '_Series_' + index.series + '_Point_' + index.point;
        return document.getElementById(elementId);
    }
    /**
     * To calculate selected elements on mouse click or touch
     * @private
     */
    calculateSelectedElements(accumulation, event) {
        if (event.target.id.indexOf(accumulation.element.id + '_') === -1) {
            return;
        }
        if (event.target.id.indexOf('_Series_') > -1 || event.target.id.indexOf('_datalabel_') > -1) {
            this.performSelection(indexFinder(event.target.id), accumulation, event.target);
        }
    }
    /**
     * To perform the selection process based on index and element.
     */
    performSelection(index, accumulation, element) {
        element = element.id.indexOf('datalabel') > -1 ?
            accumulation.getSeriesElement().childNodes[index.series].childNodes[index.point]
            : element;
        switch (accumulation.selectionMode) {
            case 'Point':
                if (!isNaN(index.point)) {
                    this.selection(accumulation, index, [element]);
                    this.blurEffect(accumulation.element.id, accumulation.visibleSeries);
                }
                break;
        }
    }
    /**
     * To select the element by index. Adding or removing selection style class name.
     */
    selection(accumulation, index, selectedElements) {
        if (!accumulation.isMultiSelect) {
            this.removeMultiSelectEelments(accumulation, this.selectedDataIndexes, index, accumulation.series);
        }
        let className = selectedElements[0] && (selectedElements[0].getAttribute('class') || '');
        if (selectedElements[0] && className.indexOf(this.getSelectionClass(selectedElements[0].id)) > -1) {
            this.removeStyles(selectedElements, index);
            this.addOrRemoveIndex(this.selectedDataIndexes, index);
        }
        else {
            this.applyStyles(selectedElements, index);
            this.addOrRemoveIndex(this.selectedDataIndexes, index, true);
        }
    }
    /**
     * To redraw the selection process on accumulation chart refresh.
     * @private
     */
    redrawSelection(accumulation, oldMode) {
        let selectedDataIndexes = extend([], this.selectedDataIndexes, null, true);
        this.removeSelectedElements(accumulation, this.selectedDataIndexes);
        this.blurEffect(accumulation.element.id, accumulation.visibleSeries);
        this.selectDataIndex(selectedDataIndexes, accumulation);
    }
    /**
     * To remove the selected elements style classes by indexes.
     */
    removeSelectedElements(accumulation, indexes) {
        let seriesgroup = accumulation.getSeriesElement();
        for (let index of indexes) {
            this.removeStyles([this.getElementByIndex(index)], index);
        }
    }
    /**
     * To perform the selection for legend elements.
     * @private
     */
    legendSelection(accumulation, series, pointIndex) {
        let element = accumulation.getSeriesElement().childNodes[series].childNodes[pointIndex];
        let seriesStyle = this.generateStyle(accumulation.visibleSeries[series]);
        let seriesElements = accumulation.getSeriesElement().childNodes[series].childNodes[pointIndex];
        this.selection(accumulation, new Index(series, pointIndex), [seriesElements]);
        this.blurEffect(accumulation.element.id, accumulation.visibleSeries);
    }
    /**
     * To select the element by selected data indexes.
     */
    selectDataIndex(indexes, accumulation) {
        let element;
        for (let index of indexes) {
            element = this.getElementByIndex(index);
            if (element) {
                this.performSelection(index, accumulation, element);
            }
        }
    }
    /**
     * To remove the selection styles for multi selection process.
     */
    removeMultiSelectEelments(accumulation, index, currentIndex, seriesCollection) {
        let series;
        for (let i = 0; i < index.length; i++) {
            series = seriesCollection[index[i].series];
            if (!this.checkEquals(index[i], currentIndex)) {
                this.removeStyles(this.findElements(accumulation, series, index[i]), index[i]);
                index.splice(i, 1);
                i--;
            }
        }
    }
    /**
     * To apply the opacity effect for accumulation chart series elements.
     */
    blurEffect(pieId, visibleSeries) {
        let visibility = this.checkPointVisibility(this.selectedDataIndexes); // legend click scenario
        for (let series of visibleSeries) {
            if (series.visible) {
                this.checkSelectionElements(document.getElementById(pieId + '_SeriesCollection'), this.generateStyle(series), visibility);
            }
        }
    }
    /**
     * To check selection elements by style class name.
     */
    checkSelectionElements(element, className, visibility) {
        let children = (element.childNodes[0].childNodes);
        let legendShape;
        let elementClass;
        let parentClass;
        for (let i = 0; i < children.length; i++) {
            elementClass = children[i].getAttribute('class') || '';
            parentClass = children[i].parentNode.getAttribute('class') || '';
            if (elementClass.indexOf(className) === -1 && parentClass.indexOf(className) === -1 && visibility) {
                this.addSvgClass(children[i], this.unselected);
            }
            else {
                this.removeSvgClass(children[i], this.unselected);
            }
            if (this.control.accumulationLegendModule && this.control.legendSettings.visible) {
                legendShape = document.getElementById(this.control.element.id + '_chart_legend_shape_' + i);
                if (legendShape) {
                    if (elementClass.indexOf(className) === -1 && parentClass.indexOf(className) === -1 && visibility) {
                        this.addSvgClass(legendShape, this.unselected);
                    }
                    else {
                        this.removeSvgClass(legendShape, this.unselected);
                    }
                }
            }
        }
    }
    /**
     * To apply selection style for elements.
     */
    applyStyles(elements, index) {
        for (let element of elements) {
            let legendShape;
            if (element) {
                if (this.control.accumulationLegendModule && this.control.legendSettings.visible) {
                    legendShape = document.getElementById(this.control.element.id + '_chart_legend_shape_' + index.point);
                    this.removeSvgClass(legendShape, this.unselected);
                    this.addSvgClass(legendShape, this.getSelectionClass(legendShape.id));
                }
                this.removeSvgClass(element.parentNode, this.unselected);
                this.removeSvgClass(element, this.unselected);
                this.addSvgClass(element, this.getSelectionClass(element.id));
            }
        }
    }
    /**
     * To get selection style class name by id
     */
    getSelectionClass(id) {
        return this.generateStyle(this.control.series[indexFinder(id).series]);
    }
    /**
     * To remove selection style for elements.
     */
    removeStyles(elements, index) {
        let legendShape;
        for (let element of elements) {
            if (element) {
                if (this.control.accumulationLegendModule && this.control.legendSettings.visible) {
                    legendShape = document.getElementById(this.control.element.id + '_chart_legend_shape_' + index.point);
                    this.removeSvgClass(legendShape, this.getSelectionClass(legendShape.id));
                }
                this.removeSvgClass(element, this.getSelectionClass(element.id));
            }
        }
    }
    /**
     * To apply or remove selected elements index.
     */
    addOrRemoveIndex(indexes, index, add) {
        for (let i = 0; i < indexes.length; i++) {
            if (this.checkEquals(indexes[i], index)) {
                indexes.splice(i, 1);
                i--;
            }
        }
        if (add) {
            indexes.push(index);
        }
    }
    /**
     * To check two index, point and series are equal
     */
    checkEquals(first, second) {
        return ((first.point === second.point) && (first.series === second.series));
    }
    /**
     * To check selected points are visibility
     */
    checkPointVisibility(selectedDataIndexes) {
        let visible = false;
        for (let data of selectedDataIndexes) {
            if (pointByIndex(data.point, this.control.visibleSeries[0].points).visible) {
                visible = true;
                break;
            }
        }
        return visible;
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'AccumulationSelection';
    }
    /**
     * To destroy the selection.
     * @return {void}
     * @private
     */
    destroy(accumulation) {
        // Destroy method performed here
    }
}

/**
 * AccumulationChart annotation properties
 */
/**
 * `AccumulationAnnotation` module handles the annotation for accumulation chart.
 */
class AccumulationAnnotation extends AnnotationBase {
    /**
     * Constructor for accumulation chart annotation.
     * @private.
     */
    constructor(control) {
        super(control);
        this.pie = control;
    }
    /**
     * Method to render the annotation for accumulation chart
     * @param element
     */
    renderAnnotations(element) {
        this.annotations = this.pie.annotations;
        this.parentElement = createElement('div', {
            id: this.pie.element.id + '_Annotation_Collections'
        });
        this.annotations.map((annotation, index) => {
            this.processAnnotation(annotation, index, this.parentElement);
        });
        appendElement(this.parentElement, element);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        // Returns te module name
        return 'Annotation';
    }
    /**
     * To destroy the annotation.
     * @return {void}
     * @private
     */
    destroy(control) {
        // Destroy method performed here
    }
}

/**
 * Pie Component items exported
 */

/**
 * Chart and accumulation common files
 */

/**
 * Chart components exported.
 */

export { CrosshairSettings, ZoomSettings, Chart, Row, Column, MajorGridLines, MinorGridLines, AxisLine, MajorTickLines, MinorTickLines, CrosshairTooltip, Axis, VisibleLabels, DateTime, Category, Logarithmic, DateTimeCategory, NiceInterval, StripLine, Connector, Font, Border, ChartArea, Margin, Animation$1 as Animation, Indexes, CornerRadius, Index, EmptyPointSettings, TooltipSettings, LineSeries, ColumnSeries, AreaSeries, BarSeries, PolarSeries, RadarSeries, StackingBarSeries, CandleSeries, StackingColumnSeries, StepLineSeries, StepAreaSeries, StackingAreaSeries, ScatterSeries, RangeColumnSeries, WaterfallSeries, HiloSeries, HiloOpenCloseSeries, RangeAreaSeries, BubbleSeries, SplineSeries, SplineAreaSeries, TechnicalIndicator, SmaIndicator, EmaIndicator, TmaIndicator, AccumulationDistributionIndicator, AtrIndicator, MomentumIndicator, RsiIndicator, StochasticIndicator, BollingerBands, MacdIndicator, Trendlines, measureText, sort, rotateTextSize, removeElement, logBase, showTooltip, inside, withIn, withInRange, sum, subArraySum, subtractThickness, subtractRect, degreeToLocation, getAngle, subArray, valueToCoefficient, TransformToVisible, indexFinder, CoefficientToVector, valueToPolarCoefficient, Mean, PolarArc, createTooltip, createZoomingLabels, withInBounds, getValueXByPoint, getValueYByPoint, findClipRect, firstToLowerCase, getMinPointsDelta, getAnimationFunction, linear, markerAnimate, templateAnimate, drawSymbol, calculateShapes, getRectLocation, minMax, getElement, getTemplateFunction, createTemplate, getFontStyle, measureElementRect, findlElement, getPoint, appendElement, getDraggedRectLocation, checkBounds, getLabelText, stopTimer, isCollide, isOverlap, containsRect, calculateRect, convertToHexCode, componentToHex, convertHexToColor, colorNameToHex, getSaturationColor, getMedian, calculateLegendShapes, textTrim, stringToNumber, findDirection, textElement, calculateSize, createSvg, getTitle, titlePositionX, textWrap, CustomizeOption, StackValues, TextOption, PathOption, RectOption, CircleOption, PolygonOption, Size, Rect, ChartLocation, Thickness, ColorValue, PointData, AccPointData, ControlPoints, Crosshair, Tooltip, Zoom, Selection, DataLabel, ErrorBar, DataLabelSettings, MarkerSettings, Points, Trendline, ErrorBarCapSettings, ChartSegment, ErrorBarSettings, SeriesBase, Series, Legend, ChartAnnotation, ChartAnnotationSettings, LabelBorder, MultiLevelCategories, StripLineSettings, MultiLevelLabels, BoxAndWhiskerSeries, MultiColoredAreaSeries, MultiColoredLineSeries, MultiColoredSeries, MultiLevelLabel, AccumulationChart, AccumulationAnnotationSettings, AccumulationDataLabelSettings, AccPoints, AccumulationSeries, getSeriesFromIndex, pointByIndex, PieSeries, FunnelSeries, PyramidSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection, AccumulationAnnotation, loaded, load, animationComplete, legendRender, textRender, pointRender, seriesRender, axisLabelRender, axisRangeCalculated, axisMultiLabelRender, tooltipRender, chartMouseMove, chartMouseClick, pointClick, pointMove, chartMouseLeave, chartMouseDown, chartMouseUp, zoomComplete, dragComplete, resized, beforePrint, annotationRender, Theme, getSeriesColor, getThemeColor };
//# sourceMappingURL=ej2-charts.es2015.js.map
