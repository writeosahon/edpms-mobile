'use strict';

System.register(['@syncfusion/ej2-base', '@syncfusion/ej2-data', '@syncfusion/ej2-buttons'], function (_export, _context) {
    "use strict";

    var Animation, ChildProperty, Complex, Component, Event, EventHandler, KeyboardEvents, NotifyPropertyChanges, Property, Touch, addClass, append, attributes, closest, compile, createElement, extend, formatUnit, getValue, isNullOrUndefined, isVisible, merge, prepend, remove, removeClass, rippleEffect, DataManager, Query, createCheckBox, _createClass, _get, _typeof, cssClass, ListBase, __decorate, effectsConfig, effectsRTLConfig, classNames, FieldSettings, ListView;

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
     * Used to get dataSource item from complex data using fields.
     * @param {{[key:string]:Object}|string[]|string} dataSource - Specifies an  JSON or String data.
     * @param {FieldsMapping} fields - Fields that are mapped from the dataSource.
     */
    function getFieldValues(dataItem, fields) {
        var fieldData = {};
        var value = void 0;
        if (isNullOrUndefined(dataItem)) {
            return dataItem;
        } else if (typeof dataItem === 'string' || typeof dataItem === 'number') {
            return dataItem;
        } else if (isNullOrUndefined(dataItem.isHeader)) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Object.keys(fields)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var field = _step2.value;

                    if (!isNullOrUndefined(fields[field]) && typeof fields[field] === 'string') {
                        var property = fields[field].split('.');
                        var dataField = property.length > 1 ? property[0] : fields[field];
                        if (!isNullOrUndefined(dataItem[dataField])) {
                            value = getValue(fields[field], dataItem);
                            if (!isNullOrUndefined(value)) {
                                fieldData[fields[field]] = value;
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
        } else if (!isNullOrUndefined(dataItem.isHeader) && dataItem.isHeader) {
            fieldData = dataItem;
        }
        return fieldData;
    }

    return {
        setters: [function (_syncfusionEj2Base) {
            Animation = _syncfusionEj2Base.Animation;
            ChildProperty = _syncfusionEj2Base.ChildProperty;
            Complex = _syncfusionEj2Base.Complex;
            Component = _syncfusionEj2Base.Component;
            Event = _syncfusionEj2Base.Event;
            EventHandler = _syncfusionEj2Base.EventHandler;
            KeyboardEvents = _syncfusionEj2Base.KeyboardEvents;
            NotifyPropertyChanges = _syncfusionEj2Base.NotifyPropertyChanges;
            Property = _syncfusionEj2Base.Property;
            Touch = _syncfusionEj2Base.Touch;
            addClass = _syncfusionEj2Base.addClass;
            append = _syncfusionEj2Base.append;
            attributes = _syncfusionEj2Base.attributes;
            closest = _syncfusionEj2Base.closest;
            compile = _syncfusionEj2Base.compile;
            createElement = _syncfusionEj2Base.createElement;
            extend = _syncfusionEj2Base.extend;
            formatUnit = _syncfusionEj2Base.formatUnit;
            getValue = _syncfusionEj2Base.getValue;
            isNullOrUndefined = _syncfusionEj2Base.isNullOrUndefined;
            isVisible = _syncfusionEj2Base.isVisible;
            merge = _syncfusionEj2Base.merge;
            prepend = _syncfusionEj2Base.prepend;
            remove = _syncfusionEj2Base.remove;
            removeClass = _syncfusionEj2Base.removeClass;
            rippleEffect = _syncfusionEj2Base.rippleEffect;
        }, function (_syncfusionEj2Data) {
            DataManager = _syncfusionEj2Data.DataManager;
            Query = _syncfusionEj2Data.Query;
        }, function (_syncfusionEj2Buttons) {
            createCheckBox = _syncfusionEj2Buttons.createCheckBox;
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

            _export('cssClass', cssClass = {
                li: 'e-list-item',
                ul: 'e-list-parent e-ul',
                group: 'e-list-group-item',
                icon: 'e-list-icon',
                text: 'e-list-text',
                check: 'e-list-check',
                checked: 'e-checked',
                selected: 'e-selected',
                expanded: 'e-expanded',
                textContent: 'e-text-content',
                hasChild: 'e-has-child',
                level: 'e-level',
                url: 'e-list-url',
                collapsible: 'e-icon-collapsible',
                disabled: 'e-disabled',
                image: 'e-list-img',
                iconWrapper: 'e-icon-wrapper'
            });

            (function (ListBase) {
                /**
                 * Default mapped fields.
                 */
                ListBase.defaultMappedFields = {
                    id: 'id',
                    text: 'text',
                    url: 'url',
                    value: 'value',
                    isChecked: 'isChecked',
                    enabled: 'enabled',
                    expanded: 'expanded',
                    selected: 'selected',
                    iconCss: 'iconCss',
                    child: 'child',
                    isVisible: 'isVisible',
                    hasChildren: 'hasChildren',
                    tooltip: 'tooltip',
                    htmlAttributes: 'htmlAttributes',
                    urlAttributes: 'urlAttributes',
                    imageAttributes: 'imageAttributes',
                    imageUrl: 'imageUrl',
                    groupBy: null
                };
                var defaultAriaAttributes = {
                    level: 1,
                    listRole: 'presentation',
                    itemRole: 'presentation',
                    groupItemRole: 'group',
                    itemText: 'list-item',
                    wrapperRole: 'presentation'
                };
                var defaultListBaseOptions = {
                    showCheckBox: false,
                    showIcon: false,
                    expandCollapse: false,
                    fields: ListBase.defaultMappedFields,
                    ariaAttributes: defaultAriaAttributes,
                    listClass: '',
                    itemClass: '',
                    processSubChild: false,
                    sortOrder: 'None',
                    template: null,
                    groupTemplate: null,
                    expandIconClass: 'e-icon-collapsible',
                    moduleName: 'list',
                    expandIconPosition: 'Right'
                };
                /**
                 * Function helps to created and return the UL Li element based on your data.
                 * @param  {{[key:string]:Object}[]|string[]} dataSource - Specifies an array of JSON or String data.
                 * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
                 */
                function createList(dataSource, options, isSingleLevel) {
                    var curOpt = extend({}, defaultListBaseOptions, options);
                    var ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
                    var type = typeofData(dataSource).typeof;
                    if (type === 'string' || type === 'number') {
                        return createListFromArray(dataSource, isSingleLevel, options);
                    } else {
                        return createListFromJson(dataSource, options, ariaAttributes.level, isSingleLevel);
                    }
                }
                ListBase.createList = createList;
                /**
                 * Function helps to created an element list based on string array input .
                 * @param  {string[]} dataSource - Specifies an array of string data
                 */
                function createListFromArray(dataSource, isSingleLevel, options) {
                    var subChild = createListItemFromArray(dataSource, isSingleLevel, options);
                    return generateUL(subChild, null, options);
                }
                ListBase.createListFromArray = createListFromArray;
                /**
                 * Function helps to created an element list based on string array input .
                 * @param  {string[]} dataSource - Specifies an array of string data
                 */
                function createListItemFromArray(dataSource, isSingleLevel, options) {
                    var subChild = [];
                    var curOpt = extend({}, defaultListBaseOptions, options);
                    _export('cssClass', cssClass = getModuleClass(curOpt.moduleName));
                    var id = genUID(); // generate id for drop-down-list option.
                    for (var i = 0; i < dataSource.length; i++) {
                        if (isNullOrUndefined(dataSource[i])) {
                            continue;
                        }
                        var li = void 0;
                        if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                            var curData = {
                                dataSource: dataSource,
                                curData: dataSource[i],
                                text: dataSource[i],
                                options: curOpt
                            };
                            curOpt.itemCreating(curData);
                        }
                        if (isSingleLevel) {
                            li = generateSingleLevelLI(dataSource[i], null, null, [], null, id, i, options);
                        } else {
                            li = generateLI(dataSource[i], null, null, options);
                        }
                        if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                            var _curData = {
                                dataSource: dataSource,
                                curData: dataSource[i],
                                text: dataSource[i],
                                item: li,
                                options: curOpt
                            };
                            curOpt.itemCreated(_curData);
                        }
                        subChild.push(li);
                    }
                    return subChild;
                }
                ListBase.createListItemFromArray = createListItemFromArray;
                /**
                 * Function helps to created an element list based on array of JSON input .
                 * @param  {{[key:string]:Object}[]} dataSource - Specifies an array of JSON data.
                 * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
                 */
                // tslint:disable-next-line:max-func-body-length
                function createListItemFromJson(dataSource, options, level, isSingleLevel) {
                    var curOpt = extend({}, defaultListBaseOptions, options);
                    _export('cssClass', cssClass = getModuleClass(curOpt.moduleName));
                    var fields = extend({}, ListBase.defaultMappedFields, curOpt.fields);
                    var ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
                    var id = void 0;
                    if (level) {
                        ariaAttributes.level = level;
                    }
                    var child = [];
                    var li = void 0;
                    if (Object.keys(dataSource).length && !typeofData(dataSource).item.hasOwnProperty(fields.id)) {
                        id = genUID(); // generate id for drop-down-list option.
                    }
                    for (var i = 0; i < dataSource.length; i++) {
                        var fieldData = getFieldValues(dataSource[i], fields);
                        if (isNullOrUndefined(dataSource[i])) {
                            continue;
                        }
                        if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                            var curData = {
                                dataSource: dataSource,
                                curData: dataSource[i],
                                text: fieldData[fields.text],
                                options: curOpt,
                                fields: fields
                            };
                            curOpt.itemCreating(curData);
                        }
                        var curItem = dataSource[i];
                        if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                            fieldData = getFieldValues(dataSource[i], fields);
                        }
                        if (Object.keys(dataSource).length && fieldData.hasOwnProperty(fields.id) && !isNullOrUndefined(fieldData[fields.id])) {
                            id = fieldData.id;
                        }
                        var innerEle = [];
                        if (curOpt.showCheckBox) {
                            innerEle.push(createElement('input', { className: cssClass.check, attrs: { type: 'checkbox' } }));
                        }
                        if (isSingleLevel === true) {
                            if (curOpt.showIcon && fieldData.hasOwnProperty(fields.iconCss)) {
                                if (!isNullOrUndefined(fieldData[fields.iconCss])) {
                                    innerEle.push(createElement('span', { className: cssClass.icon + ' ' + fieldData[fields.iconCss] }));
                                }
                            }
                            li = generateSingleLevelLI(curItem, fields, curOpt.itemClass, innerEle, curItem.hasOwnProperty('isHeader') && curItem.isHeader ? true : false, id, i, options);
                        } else {
                            li = generateLI(curItem, fields, curOpt.itemClass, options);
                            li.classList.add(cssClass.level + '-' + ariaAttributes.level);
                            li.setAttribute('aria-level', ariaAttributes.level.toString());
                            if (fieldData.hasOwnProperty(fields.tooltip)) {
                                li.setAttribute('title', fieldData[fields.tooltip]);
                            }
                            if (fieldData.hasOwnProperty(fields.htmlAttributes) && fieldData[fields.htmlAttributes]) {
                                setAttribute(li, fieldData[fields.htmlAttributes]);
                            }
                            if (fieldData.hasOwnProperty(fields.enabled) && fieldData[fields.enabled] === false) {
                                li.classList.add(cssClass.disabled);
                            }
                            if (fieldData.hasOwnProperty(fields.isVisible) && fieldData[fields.isVisible] === false) {
                                li.style.display = 'none';
                            }
                            if (fieldData.hasOwnProperty(fields.imageUrl) && !isNullOrUndefined(fieldData[fields.imageUrl])) {
                                var attr = { src: fieldData[fields.imageUrl] };
                                if (fieldData.hasOwnProperty(fields.imageUrl)) {
                                    merge(attr, fieldData[fields.imageAttributes]);
                                }
                                prepend([createElement('img', { className: cssClass.image, attrs: attr })], li.firstElementChild);
                            }
                            if (curOpt.showIcon && fieldData.hasOwnProperty(fields.iconCss) && !curOpt.template) {
                                if (!isNullOrUndefined(fieldData[fields.iconCss])) {
                                    prepend([createElement('div', { className: cssClass.icon + ' ' + fieldData[fields.iconCss] })], li.firstElementChild);
                                }
                            }
                            if (innerEle.length) {
                                prepend(innerEle, li.firstElementChild);
                            }
                            processSubChild(curItem, fields, dataSource, curOpt, li, ariaAttributes.level);
                        }
                        if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                            var _curData2 = {
                                dataSource: dataSource,
                                curData: dataSource[i],
                                text: fieldData[fields.text],
                                item: li,
                                options: curOpt,
                                fields: fields
                            };
                            curOpt.itemCreated(_curData2);
                        }
                        child.push(li);
                    }
                    return child;
                }
                ListBase.createListItemFromJson = createListItemFromJson;
                /**
                 * Function helps to created an element list based on array of JSON input .
                 * @param  {{[key:string]:Object}[]} dataSource - Specifies an array of JSON data.
                 * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
                 */
                function createListFromJson(dataSource, options, level, isSingleLevel) {
                    var curOpt = extend({}, defaultListBaseOptions, options);
                    var li = createListItemFromJson(dataSource, options, level, isSingleLevel);
                    return generateUL(li, curOpt.listClass, options);
                }
                ListBase.createListFromJson = createListFromJson;
                /**
                 * Return the next or previous visible element.
                 * @param  {Element[]|NodeList} elementArray - An element array to find next or previous element.
                 * @param  {Element} li - An element to find next or previous after this element.
                 * @param  {boolean} isPrevious? - Specify when the need get previous element from array.
                 */
                function getSiblingLI(elementArray, element, isPrevious) {
                    _export('cssClass', cssClass = getModuleClass(defaultListBaseOptions.moduleName));
                    if (!elementArray || !elementArray.length) {
                        return void 0;
                    }
                    var siblingLI = void 0;
                    var liIndex = void 0;
                    var liCollections = Array.prototype.slice.call(elementArray);
                    if (element) {
                        liIndex = indexOf(element, liCollections);
                    } else {
                        liIndex = isPrevious === true ? liCollections.length : -1;
                    }
                    siblingLI = liCollections[liIndex + (isPrevious === true ? -1 : 1)];
                    while (siblingLI && (!isVisible(siblingLI) || siblingLI.classList.contains(cssClass.disabled))) {
                        liIndex = liIndex + (isPrevious === true ? -1 : 1);
                        siblingLI = liCollections[liIndex];
                    }
                    return siblingLI;
                }
                ListBase.getSiblingLI = getSiblingLI;
                /**
                 * Return the index of the li element
                 * @param  {Element} item - An element to find next or previous after this element.
                 * @param  {Element[]|NodeList} elementArray - An element array to find index of given li.
                 */
                function indexOf(item, elementArray) {
                    if (!elementArray || !item) {
                        return void 0;
                    } else {
                        var liCollections = elementArray;
                        liCollections = Array.prototype.slice.call(elementArray);
                        return liCollections.indexOf(item);
                    }
                }
                ListBase.indexOf = indexOf;
                /**
                 * Returns the grouped data from given dataSource.
                 * @param  {{[key:string]:Object}[]} dataSource - The JSON data which is necessary to process.
                 * @param  {FieldsMapping} fields - Fields that are mapped from the data source.
                 * @param  {SortOrder='None'} sortOrder- Specifies final result sort order.
                 */
                function groupDataSource(dataSource, fields) {
                    var sortOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'None';

                    var cusQuery = new Query().group(fields.groupBy);
                    // need to remove once sorting issues fixed in DataManager
                    cusQuery = addSorting(sortOrder, 'key', cusQuery);
                    var ds = getDataSource(dataSource, cusQuery);
                    dataSource = [];
                    for (var j = 0; j < ds.length; j++) {
                        var itemObj = ds[j].items;
                        var grpItem = {};
                        var hdr = 'isHeader';
                        grpItem[fields.text] = ds[j].key;
                        grpItem[hdr] = true;
                        grpItem.items = itemObj;
                        dataSource.push(grpItem);
                        for (var k = 0; k < itemObj.length; k++) {
                            dataSource.push(itemObj[k]);
                        }
                    }
                    return dataSource;
                }
                ListBase.groupDataSource = groupDataSource;
                /**
                 * Returns a sorted query object.
                 * @param  {SortOrder} sortOrder - Specifies that sort order.
                 * @param  {string} sortBy - Specifies sortBy fields.
                 * @param  {Query=new Query()} query - Pass if any existing query.
                 */
                function addSorting(sortOrder, sortBy) {
                    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Query();

                    if (sortOrder === 'Ascending') {
                        query.sortBy(sortBy, 'ascending', true);
                    } else if (sortOrder === 'Descending') {
                        query.sortBy(sortBy, 'descending', true);
                    } else {
                        for (var i = 0; i < query.queries.length; i++) {
                            if (query.queries[i].fn === 'onSortBy') {
                                query.queries.splice(i, 1);
                            }
                        }
                    }
                    return query;
                }
                ListBase.addSorting = addSorting;
                /**
                 * Return an array of JSON Data that processed based on queries.
                 * @param  {{[key:string]:Object}[]} dataSource - Specifies local JSON data source.
                 * @param  {Query} query - Specifies query that need to process.
                 */
                function getDataSource(dataSource, query) {
                    // tslint:disable-next-line
                    return new DataManager(dataSource).executeLocal(query);
                }
                ListBase.getDataSource = getDataSource;
                /**
                 * Created JSON data based the UL and LI element
                 * @param  {HTMLElement|Element} element - UL element that need to convert as a JSON
                 * @param  {ListBaseOptions} options? - Specifies listbase option for fields.
                 */
                function createJsonFromElement(element, options) {
                    var curOpt = extend({}, defaultListBaseOptions, options);
                    var fields = extend({}, ListBase.defaultMappedFields, curOpt.fields);
                    var curEle = element.cloneNode(true);
                    var jsonAr = [];
                    curEle.classList.add('json-parent');
                    var childs = curEle.querySelectorAll('.json-parent>li');
                    curEle.classList.remove('json-parent');
                    for (var i = 0; i < childs.length; i++) {
                        var li = childs[i];
                        var anchor = li.querySelector('a');
                        var ul = li.querySelector('ul');
                        var json = {};
                        var childNodes = anchor ? anchor.childNodes : li.childNodes;
                        var keys = Object.keys(childNodes);
                        for (var _i = 0; _i < childNodes.length; _i++) {
                            if (!childNodes[Number(keys[_i])].hasChildNodes()) {
                                json[fields.text] = childNodes[Number(keys[_i])].textContent;
                            }
                        }
                        json[fields.id] = genUID();
                        var attributes$$1 = getAllAttributes(li);
                        if (Object.keys(attributes$$1).length) {
                            json[fields.htmlAttributes] = attributes$$1;
                        }
                        if (anchor) {
                            attributes$$1 = getAllAttributes(anchor);
                            if (Object.keys(attributes$$1).length) {
                                json[fields.urlAttributes] = attributes$$1;
                            }
                        }
                        if (ul) {
                            json[fields.child] = createJsonFromElement(ul, options);
                        }
                        jsonAr.push(json);
                    }
                    return jsonAr;
                }
                ListBase.createJsonFromElement = createJsonFromElement;
                function typeofData(data) {
                    var match = { typeof: null, item: null };
                    for (var i = 0; i < data.length; i++) {
                        if (!isNullOrUndefined(data[i])) {
                            return match = { typeof: _typeof(data[i]), item: data[i] };
                        }
                    }
                    return match;
                }
                function setAttribute(element, elementAttributes) {
                    var attr = {};
                    merge(attr, elementAttributes);
                    if (attr.class) {
                        addClass([element], attr.class.split(' '));
                        delete attr.class;
                    }
                    attributes(element, attr);
                }
                function getAllAttributes(element) {
                    var attributes$$1 = {};
                    var attr = element.attributes;
                    for (var index = 0; index < attr.length; index++) {
                        attributes$$1[attr[index].nodeName] = attr[index].nodeValue;
                    }
                    return attributes$$1;
                }
                /**
                 * Created UL element from content template.
                 * @param  {string} template - that need to convert and generate li element.
                 * @param  {{[key:string]:Object}[]} dataSource - Specifies local JSON data source.
                 * @param  {ListBaseOptions} options? - Specifies listbase option for fields.
                 */
                function renderContentTemplate(template, dataSource, fields, options) {
                    _export('cssClass', cssClass = getModuleClass(defaultListBaseOptions.moduleName));
                    var ulElement = createElement('ul', { className: cssClass.ul, attrs: { role: 'presentation' } });
                    var curOpt = extend({}, defaultListBaseOptions, options);
                    var compiledString = compile(template);
                    var liCollection = [];
                    var id = genUID(); // generate id for drop-down-list option.
                    for (var i = 0; i < dataSource.length; i++) {
                        var fieldData = getFieldValues(dataSource[i], fields);
                        var curItem = dataSource[i];
                        var isHeader = curItem.isHeader;
                        var value = typeof curItem === 'string' || typeof curItem === 'number' ? curItem : fieldData[fields.value];
                        if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                            var curData = {
                                dataSource: dataSource,
                                curData: curItem,
                                text: value,
                                options: curOpt,
                                fields: fields
                            };
                            curOpt.itemCreating(curData);
                        }
                        if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                            fieldData = getFieldValues(dataSource[i], fields);
                            value = fieldData[fields.value];
                        }
                        var li = createElement('li', {
                            id: id + '-' + i,
                            className: isHeader ? cssClass.group : cssClass.li, attrs: { role: 'presentation' }
                        });
                        if (isHeader) {
                            li.innerText = fieldData[fields.text];
                        } else {
                            append(compiledString(curItem), li);
                            li.setAttribute('data-value', value);
                            li.setAttribute('role', 'option');
                        }
                        if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                            var _curData3 = {
                                dataSource: dataSource,
                                curData: curItem,
                                text: value,
                                item: li,
                                options: curOpt,
                                fields: fields
                            };
                            curOpt.itemCreated(_curData3);
                        }
                        liCollection.push(li);
                    }
                    append(liCollection, ulElement);
                    return ulElement;
                }
                ListBase.renderContentTemplate = renderContentTemplate;
                /**
                 * Created header items from group template.
                 * @param  {string} template - that need to convert and generate li element.
                 * @param  {{[key:string]:Object}[]} dataSource - Specifies local JSON data source.
                 * @param  {FieldsMapping} fields - Specifies fields for mapping the dataSource.
                 * @param  {Element[]} headerItems? - Specifies listbase header items.
                 */
                function renderGroupTemplate(groupTemplate, groupDataSource, fields, headerItems) {
                    var compiledString = compile(groupTemplate);
                    var category = fields.groupBy;
                    var headerData = {};
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = headerItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var header = _step.value;

                            headerData[category] = header.textContent;
                            header.innerHTML = '';
                            append(compiledString(headerData), header);
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

                    return headerItems;
                }
                ListBase.renderGroupTemplate = renderGroupTemplate;
                function genUID() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                }
                function processSubChild(curItem, fields, ds, options, element, level) {
                    var fieldData = getFieldValues(curItem, fields);
                    // Get SubList   
                    var subDS = fieldData[fields.child] || [];
                    var hasChildren = fieldData[fields.hasChildren];
                    //Create Sub child
                    if (subDS.length) {
                        hasChildren = true;
                        element.classList.add(cssClass.hasChild);
                        if (options.processSubChild) {
                            var subLi = createListFromJson(subDS, options, ++level);
                            element.appendChild(subLi);
                        }
                    }
                    // Create expand and collapse node
                    if (!!options.expandCollapse && hasChildren && !options.template) {
                        if (element.firstElementChild.classList.contains(cssClass.textContent)) {
                            element.firstElementChild.classList.add(cssClass.iconWrapper);
                        }
                        var expandElement = options.expandIconPosition === 'Left' ? prepend : append;
                        expandElement([createElement('div', { className: 'e-icons ' + options.expandIconClass })], element.querySelector('.' + cssClass.textContent));
                    }
                }
                function generateSingleLevelLI(item, fields, className, innerElements, grpLI, id, index, options) {
                    var curOpt = extend({}, defaultListBaseOptions, options);
                    var ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
                    var text = item;
                    var value = item;
                    var dataSource = void 0;
                    var fieldData = getFieldValues(item, fields);
                    if (typeof item !== 'string' && typeof item !== 'number') {
                        dataSource = item;
                        text = typeof fieldData[fields.text] === 'boolean' || typeof fieldData[fields.text] === 'number' ? fieldData[fields.text] : fieldData[fields.text] || '';
                        value = fieldData[fields.value];
                    }
                    var elementID = void 0;
                    if (!isNullOrUndefined(dataSource) && !isNullOrUndefined(fieldData[fields.id]) && fieldData[fields.id] !== '') {
                        elementID = id;
                    } else {
                        elementID = id + '-' + index;
                    }
                    var li = createElement('li', {
                        className: (grpLI === true ? cssClass.group : cssClass.li) + ' ' + (isNullOrUndefined(className) ? '' : className),
                        id: elementID, attrs: ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ? { role: grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole } : {}
                    });
                    if (dataSource && fieldData.hasOwnProperty(fields.enabled) && fieldData[fields.enabled].toString() === 'false') {
                        li.classList.add(cssClass.disabled);
                    }
                    if (grpLI) {
                        li.innerText = text;
                    } else {
                        if (!isNullOrUndefined(value)) {
                            li.setAttribute('data-value', value);
                        }
                        li.setAttribute('role', 'option');
                        if (dataSource && fieldData.hasOwnProperty(fields.htmlAttributes) && fieldData[fields.htmlAttributes]) {
                            setAttribute(li, fieldData[fields.htmlAttributes]);
                        }
                        if (innerElements.length) {
                            append(innerElements, li);
                        }
                        if (dataSource && fieldData.hasOwnProperty(fields.url) && fieldData[fields.url]) {
                            li.appendChild(anchorTag(dataSource, fields, text));
                        } else {
                            li.appendChild(document.createTextNode(text));
                        }
                    }
                    return li;
                }
                function getModuleClass(moduleName) {
                    var moduleClass = void 0;
                    return moduleClass = {
                        li: 'e-' + moduleName + '-item',
                        ul: 'e-' + moduleName + '-parent e-ul',
                        group: 'e-' + moduleName + '-group-item',
                        icon: 'e-' + moduleName + '-icon',
                        text: 'e-' + moduleName + '-text',
                        check: 'e-' + moduleName + '-check',
                        checked: 'e-checked',
                        selected: 'e-selected',
                        expanded: 'e-expanded',
                        textContent: 'e-text-content',
                        hasChild: 'e-has-child',
                        level: 'e-level',
                        url: 'e-' + moduleName + '-url',
                        collapsible: 'e-icon-collapsible',
                        disabled: 'e-disabled',
                        image: 'e-' + moduleName + '-img',
                        iconWrapper: 'e-icon-wrapper'
                    };
                }
                function anchorTag(dataSource, fields, text) {
                    var fieldData = getFieldValues(dataSource, fields);
                    var attr = { href: fieldData[fields.url] };
                    if (fieldData.hasOwnProperty(fields.urlAttributes) && fieldData[fields.urlAttributes]) {
                        merge(attr, fieldData[fields.urlAttributes]);
                    }
                    var anchorTag = createElement('a', { className: cssClass.text + ' ' + cssClass.url, innerHTML: text });
                    setAttribute(anchorTag, attr);
                    return anchorTag;
                }
                /* tslint:disable:align */
                function generateLI(item, fields, className, options) {
                    var curOpt = extend({}, defaultListBaseOptions, options);
                    var ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
                    var text = item;
                    var uID = void 0;
                    var grpLI = void 0;
                    var dataSource = void 0;
                    var fieldData = void 0;
                    if (typeof item !== 'string') {
                        fieldData = getFieldValues(item, fields);
                        dataSource = item;
                        text = fieldData[fields.text] || '';
                        uID = fieldData[fields.id];
                        grpLI = item.hasOwnProperty('isHeader') && item.isHeader ? true : false;
                    }
                    var li = createElement('li', {
                        className: (grpLI === true ? cssClass.group : cssClass.li) + ' ' + (isNullOrUndefined(className) ? '' : className),
                        attrs: ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ? { role: grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole } : {}
                    });
                    !isNullOrUndefined(uID) ? li.setAttribute('data-uid', uID) : li.setAttribute('data-uid', genUID());
                    if (grpLI && options && options.groupTemplate) {
                        var compiledString = compile(options.groupTemplate);
                        append(compiledString(item), li);
                    } else if (!grpLI && options && options.template) {
                        var _compiledString = compile(options.template);
                        append(_compiledString(item), li);
                    } else {
                        var innerDiv = createElement('div', { className: cssClass.textContent,
                            attrs: ariaAttributes.wrapperRole !== '' ? { role: ariaAttributes.wrapperRole } : {} });
                        if (dataSource && fieldData.hasOwnProperty(fields.url) && fieldData[fields.url]) {
                            innerDiv.appendChild(anchorTag(dataSource, fields, text));
                        } else {
                            innerDiv.appendChild(createElement('span', { className: cssClass.text, innerHTML: text,
                                attrs: ariaAttributes.itemText !== '' ? { role: ariaAttributes.itemText } : {} }));
                        }
                        li.appendChild(innerDiv);
                    }
                    return li;
                }
                /**
                 * Returns UL element based on the given LI element.
                 * @param  {HTMLElement[]} liElement - Specifies array of LI element.
                 * @param  {string} className? - Specifies class name that need to be added in UL element.
                 * @param  {ListBaseOptions} options? - Specifies ListBase options.
                 */
                function generateUL(liElement, className, options) {
                    var curOpt = extend({}, defaultListBaseOptions, options);
                    var ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
                    _export('cssClass', cssClass = getModuleClass(curOpt.moduleName));
                    var ulElement = createElement('ul', {
                        className: cssClass.ul + ' ' + (isNullOrUndefined(className) ? '' : className),
                        attrs: ariaAttributes.listRole !== '' ? { role: ariaAttributes.listRole } : {}
                    });
                    append(liElement, ulElement);
                    return ulElement;
                }
                ListBase.generateUL = generateUL;
                /**
                 * Returns LI element with additional DIV tag based on the given LI element.
                 * @param  {liElement} liElement - Specifies LI element.
                 * @param  {string} className? - Specifies class name that need to be added in created DIV element.
                 * @param  {ListBaseOptions} options? - Specifies ListBase options.
                 */
                function generateIcon(liElement, className, options) {
                    var curOpt = extend({}, defaultListBaseOptions, options);
                    var ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
                    _export('cssClass', cssClass = getModuleClass(curOpt.moduleName));
                    var expandElement = curOpt.expandIconPosition === 'Left' ? prepend : append;
                    expandElement([createElement('div', { className: 'e-icons ' + curOpt.expandIconClass + ' ' + (isNullOrUndefined(className) ? '' : className) })], liElement.querySelector('.' + cssClass.textContent));
                    return liElement;
                }
                ListBase.generateIcon = generateIcon;
            })(ListBase || _export('ListBase', ListBase = {}));
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            effectsConfig = {
                'None': [],
                'SlideLeft': ['SlideRightOut', 'SlideLeftOut', 'SlideLeftIn', 'SlideRightIn'],
                'SlideDown': ['SlideTopOut', 'SlideBottomOut', 'SlideBottomIn', 'SlideTopIn'],
                'Zoom': ['FadeOut', 'FadeZoomOut', 'FadeZoomIn', 'FadeIn'],
                'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
            };
            effectsRTLConfig = {
                'None': [],
                'SlideLeft': ['SlideLeftOut', 'SlideRightOut', 'SlideRightIn', 'SlideLeftIn'],
                'SlideDown': ['SlideBottomOut', 'SlideTopOut', 'SlideTopIn', 'SlideBottomIn'],
                'Zoom': ['FadeZoomOut', 'FadeOut', 'FadeIn', 'FadeZoomIn'],
                'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
            };
            classNames = {
                root: 'e-listview',
                hover: 'e-hover',
                selected: 'e-active',
                focused: 'e-focused',
                parentItem: 'e-list-parent',
                listItem: 'e-list-item',
                listItemText: 'e-list-text',
                grpListItem: 'e-list-group-item',
                hasChild: 'e-has-child',
                view: 'e-view',
                header: 'e-list-header',
                headerText: 'e-headertext',
                text: 'e-text',
                disable: 'e-disabled',
                content: 'e-content',
                icon: 'e-icons',
                backIcon: 'e-icon-back',
                checkboxWrapper: 'e-checkbox-wrapper',
                checkbox: 'e-checkbox',
                checked: 'e-check',
                checkboxIcon: 'e-frame',
                checkboxRight: 'e-checkbox-right',
                checkboxLeft: 'e-checkbox-left',
                listviewCheckbox: 'e-listview-checkbox',
                itemCheckList: 'e-checklist'
            };

            _export('FieldSettings', FieldSettings = function (_ChildProperty) {
                _inherits(FieldSettings, _ChildProperty);

                function FieldSettings() {
                    _classCallCheck(this, FieldSettings);

                    return _possibleConstructorReturn(this, (FieldSettings.__proto__ || Object.getPrototypeOf(FieldSettings)).apply(this, arguments));
                }

                return FieldSettings;
            }(ChildProperty));

            __decorate([Property('id')], FieldSettings.prototype, "id", void 0);
            __decorate([Property('text')], FieldSettings.prototype, "text", void 0);
            __decorate([Property('isChecked')], FieldSettings.prototype, "isChecked", void 0);
            __decorate([Property('isVisible')], FieldSettings.prototype, "isVisible", void 0);
            __decorate([Property('enabled')], FieldSettings.prototype, "enabled", void 0);
            __decorate([Property('iconCss')], FieldSettings.prototype, "iconCss", void 0);
            __decorate([Property('child')], FieldSettings.prototype, "child", void 0);
            __decorate([Property('tooltip')], FieldSettings.prototype, "tooltip", void 0);
            __decorate([Property('groupBy')], FieldSettings.prototype, "groupBy", void 0);
            __decorate([Property('text')], FieldSettings.prototype, "sortBy", void 0);
            __decorate([Property('htmlAttributes')], FieldSettings.prototype, "htmlAttributes", void 0);
            __decorate([Property('tableName')], FieldSettings.prototype, "tableName", void 0);
            /**
             * Represents the EJ2 ListView control.
             * ```html
             * <div id="listview">
             * <ul>
             * <li>Favourite</li>
             * <li>Documents</li>
             * <li>Downloads</li>
             * </ul>
             * </div>
             * ```
             * ```typescript
             *   var lvObj = new ListView({});
             *   lvObj.appendTo("#listview");
             * ```
             */

            _export('ListView', ListView = function (_Component) {
                _inherits(ListView, _Component);

                /**
                 * Constructor for creating the widget
                 */
                function ListView(options, element) {
                    _classCallCheck(this, ListView);

                    var _this2 = _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, options, element));

                    _this2.curDSLevel = [];
                    _this2.curViewDS = [];
                    _this2.keyConfigs = {
                        moveDown: 'downarrow',
                        moveUp: 'uparrow',
                        back: 'backspace',
                        home: 'home',
                        select: 'enter',
                        end: 'end',
                        tab: 'tab',
                        space: 'space'
                    };
                    _this2.animateOptions = {};
                    _this2.isNestedList = false;
                    _this2.currentLiElements = [];
                    _this2.resetList = false;
                    _this2.selectedData = [];
                    _this2.selectedId = [];
                    _this2.aniObj = new Animation(_this2.animateOptions);
                    return _this2;
                }

                _createClass(ListView, [{
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = Object.keys(newProp)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var prop = _step3.value;

                                switch (prop) {
                                    case 'htmlAttributes':
                                        this.setHTMLAttribute();
                                        break;
                                    case 'cssClass':
                                        this.setCSSClass(oldProp.cssClass);
                                        break;
                                    case 'enable':
                                        this.setEnable();
                                        break;
                                    case 'width':
                                    case 'height':
                                        this.setSize();
                                        break;
                                    case 'enableRtl':
                                        this.setEnableRTL();
                                        break;
                                    case 'fields':
                                        this.listBaseOption.fields = this.fields.properties;
                                        this.reRender();
                                        break;
                                    case 'headerTitle':
                                        if (!this.curDSLevel.length) {
                                            this.header(this.headerTitle, false);
                                        }
                                        break;
                                    case 'showHeader':
                                        {
                                            this.header(this.headerTitle, false);
                                        }
                                        break;
                                    case 'showCheckBox':
                                    case 'checkBoxPosition':
                                        this.setCheckbox();
                                        break;
                                    case 'dataSource':
                                        this.reRender();
                                        break;
                                    case 'sortOrder':
                                    case 'showIcon':
                                        this.listBaseOption.showIcon = this.showIcon;
                                        this.curViewDS = this.getSubDS();
                                        this.resetCurrentList();
                                        break;
                                    default:
                                        break;
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
                }, {
                    key: 'setHTMLAttribute',
                    value: function setHTMLAttribute() {
                        if (Object.keys(this.htmlAttributes).length) {
                            attributes(this.element, this.htmlAttributes);
                        }
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
                    key: 'setSize',
                    value: function setSize() {
                        this.element.style.height = formatUnit(this.height);
                        this.element.style.width = formatUnit(this.width);
                    }
                }, {
                    key: 'setEnable',
                    value: function setEnable() {
                        this.enableElement(this.element, this.enable);
                    }
                }, {
                    key: 'setEnableRTL',
                    value: function setEnableRTL() {
                        if (this.enableRtl) {
                            this.element.classList.add('e-rtl');
                        } else {
                            this.element.classList.remove('e-rtl');
                        }
                    }
                }, {
                    key: 'enableElement',
                    value: function enableElement(element, isEnabled) {
                        if (isEnabled) {
                            element.classList.remove(classNames.disable);
                        } else {
                            element.classList.add(classNames.disable);
                        }
                    }
                }, {
                    key: 'header',
                    value: function header(text, showBack) {
                        if (this.headerEle === undefined && this.showHeader) {
                            this.headerEle = createElement('div', { className: classNames.header });
                            var innerHeaderEle = createElement('span', { className: classNames.headerText, innerHTML: this.headerTitle });
                            var textEle = createElement('div', { className: classNames.text, innerHTML: innerHeaderEle.outerHTML });
                            var hedBackButton = createElement('div', {
                                className: classNames.icon + ' ' + classNames.backIcon + ' e-but-back',
                                attrs: { style: 'display:none;' }
                            });
                            this.headerEle.appendChild(hedBackButton);
                            this.headerEle.appendChild(textEle);
                            this.element.classList.add('e-has-header');
                            prepend([this.headerEle], this.element);
                        } else if (this.headerEle) {
                            if (this.showHeader) {
                                this.headerEle.style.display = '';
                                var _textEle = this.headerEle.querySelector('.' + classNames.headerText);
                                var _hedBackButton = this.headerEle.querySelector('.' + classNames.backIcon);
                                _textEle.innerHTML = text;
                                if (showBack === true) {
                                    _hedBackButton.style.display = '';
                                } else {
                                    _hedBackButton.style.display = 'none';
                                }
                            } else {
                                this.headerEle.style.display = 'none';
                            }
                        }
                    }
                }, {
                    key: 'switchView',
                    value: function switchView(fromView, toView, reverse) {
                        var _this3 = this;

                        if (fromView && toView) {
                            var fPos = fromView.style.position;
                            var overflow = this.element.style.overflow !== 'hidden' ? this.element.style.overflow : '';
                            fromView.style.position = 'absolute';
                            fromView.classList.add('e-view');
                            var anim = void 0;
                            var duration = this.animation.duration;
                            if (this.animation.effect) {
                                anim = this.enableRtl ? effectsRTLConfig[this.animation.effect] : effectsConfig[this.animation.effect];
                            } else {
                                var slideLeft = 'SlideLeft';
                                anim = effectsConfig[slideLeft];
                                reverse = this.enableRtl;
                                duration = 0;
                            }
                            this.element.style.overflow = 'hidden';
                            this.aniObj.animate(fromView, {
                                name: reverse === true ? anim[0] : anim[1],
                                duration: duration,
                                timingFunction: this.animation.easing,
                                end: function end(model) {
                                    fromView.style.display = 'none';
                                    _this3.element.style.overflow = overflow;
                                    fromView.style.position = fPos;
                                    fromView.classList.remove('e-view');
                                }
                            });
                            toView.style.display = '';
                            this.aniObj.animate(toView, {
                                name: reverse === true ? anim[2] : anim[3],
                                duration: duration,
                                timingFunction: this.animation.easing,
                                end: function end() {
                                    _this3.trigger('actionComplete');
                                }
                            });
                            this.curUL = toView;
                        }
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        this.listBaseOption = {
                            template: this.template,
                            groupTemplate: this.groupTemplate, expandCollapse: true, listClass: '',
                            ariaAttributes: {
                                itemRole: 'listitem', listRole: 'list', itemText: '',
                                groupItemRole: 'group', wrapperRole: 'presentation'
                            },
                            fields: this.fields.properties, sortOrder: this.sortOrder, showIcon: this.showIcon,
                            itemCreated: this.renderCheckbox.bind(this)
                        };
                    }
                }, {
                    key: 'renderCheckbox',
                    value: function renderCheckbox(args) {
                        if (args.item.classList.contains(classNames.hasChild)) {
                            this.isNestedList = true;
                        }
                        if (this.showCheckBox && this.isValidLI(args.item)) {
                            var checkboxElement = void 0;
                            var fieldData = void 0;
                            checkboxElement = createCheckBox(false, { checked: false, enableRtl: this.enableRtl,
                                cssClass: classNames.listviewCheckbox });
                            checkboxElement.setAttribute('role', 'checkbox');
                            var frameElement = checkboxElement.querySelector('.' + classNames.checkboxIcon);
                            args.item.classList.add(classNames.itemCheckList);
                            args.item.firstElementChild.classList.add(classNames.checkbox);
                            if (typeof this.dataSource[0] !== 'string') {
                                fieldData = getFieldValues(args.curData, this.listBaseOption.fields);
                                if (!this.resetList && fieldData[this.listBaseOption.fields.isChecked]) {
                                    this.checkInternally(args, checkboxElement);
                                } else if (this.selectedData.indexOf(fieldData[this.listBaseOption.fields.text]) !== -1 && this.selectedId.indexOf(fieldData[this.listBaseOption.fields.id]) !== -1) {
                                    this.checkInternally(args, checkboxElement);
                                }
                            } else if (typeof this.dataSource[0] === 'string' && this.selectedData.indexOf(args.text) !== -1) {
                                this.checkInternally(args, checkboxElement);
                            }
                            checkboxElement.setAttribute('aria-checked', frameElement.classList.contains(classNames.checked) ? 'true' : 'false');
                            if (this.checkBoxPosition === 'Left') {
                                checkboxElement.classList.add(classNames.checkboxLeft);
                                args.item.firstElementChild.classList.add(classNames.checkboxLeft);
                                args.item.firstElementChild.insertBefore(checkboxElement, args.item.firstElementChild.childNodes[0]);
                            } else {
                                checkboxElement.classList.add(classNames.checkboxRight);
                                args.item.firstElementChild.classList.add(classNames.checkboxRight);
                                args.item.firstElementChild.appendChild(checkboxElement);
                            }
                            this.currentLiElements.push(args.item);
                        }
                    }
                }, {
                    key: 'checkInternally',
                    value: function checkInternally(args, checkboxElement) {
                        args.item.classList.add(classNames.selected);
                        args.item.setAttribute('aria-selected', 'true');
                        checkboxElement.querySelector('.' + classNames.checkboxIcon).classList.add(classNames.checked);
                        checkboxElement.setAttribute('aria-checked', 'true');
                    }
                }, {
                    key: 'checkItem',
                    value: function checkItem(item) {
                        this.toggleCheckBase(item, true);
                    }
                }, {
                    key: 'toggleCheckBase',
                    value: function toggleCheckBase(item, checked) {
                        if (this.showCheckBox) {
                            var liElement = item;
                            if (item instanceof Object && item.constructor !== HTMLLIElement) {
                                liElement = this.getLiFromObjOrElement(item);
                            }
                            if (!isNullOrUndefined(liElement)) {
                                var checkboxIcon = liElement.querySelector('.' + classNames.checkboxIcon);
                                checked ? liElement.classList.add(classNames.selected) : liElement.classList.remove(classNames.selected);
                                liElement.setAttribute('aria-selected', checked ? 'true' : 'false');
                                checked ? checkboxIcon.classList.add(classNames.checked) : checkboxIcon.classList.remove(classNames.checked);
                                checkboxIcon.parentElement.setAttribute('aria-checked', checked ? 'true' : 'false');
                            }
                            this.setSelectedItemData(liElement);
                        }
                    }
                }, {
                    key: 'unCheckItem',
                    value: function unCheckItem(item) {
                        this.toggleCheckBase(item, false);
                    }
                }, {
                    key: 'checkAllItem',
                    value: function checkAllItem() {
                        this.toggleAllCheckBase(true);
                    }
                }, {
                    key: 'unCheckAllItem',
                    value: function unCheckAllItem() {
                        this.toggleAllCheckBase(false);
                    }
                }, {
                    key: 'toggleAllCheckBase',
                    value: function toggleAllCheckBase(checked) {
                        if (this.showCheckBox) {
                            for (var i = 0; i < this.liCollection.length; i++) {
                                var checkIcon = this.liCollection[i].querySelector('.' + classNames.checkboxIcon);
                                if (checked) {
                                    if (!checkIcon.classList.contains(classNames.checked)) {
                                        this.checkItem(this.liCollection[i]);
                                    }
                                } else {
                                    if (checkIcon.classList.contains(classNames.checked)) {
                                        this.unCheckItem(this.liCollection[i]);
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'setCheckbox',
                    value: function setCheckbox() {
                        var _this4 = this;

                        if (this.showCheckBox) {
                            var liCollection = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.listItem));
                            var args = {
                                item: undefined, curData: undefined, dataSource: undefined, fields: undefined,
                                options: undefined, text: ''
                            };
                            liCollection.forEach(function (element) {
                                args.item = element;
                                args.curData = _this4.getItemData(element);
                                if (element.querySelector('.' + classNames.checkboxWrapper)) {
                                    _this4.removeElement(element.querySelector('.' + classNames.checkboxWrapper));
                                }
                                _this4.renderCheckbox(args);
                                if (args.item.classList.contains(classNames.selected)) {
                                    _this4.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
                                }
                            });
                        } else {
                            var _liCollection = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.itemCheckList));
                            _liCollection.forEach(function (element) {
                                element.classList.remove(classNames.selected);
                                element.firstElementChild.classList.remove(classNames.checkbox);
                                _this4.removeElement(element.querySelector('.' + classNames.checkboxWrapper));
                            });
                            if (this.selectedItems) {
                                this.selectedItems.item.classList.add(classNames.selected);
                            }
                        }
                    }
                }, {
                    key: 'clickHandler',
                    value: function clickHandler(e) {
                        var target = e.target;
                        var classList = target.classList;
                        if (classList.contains(classNames.backIcon) || classList.contains(classNames.headerText)) {
                            if (this.showCheckBox && this.curDSLevel[this.curDSLevel.length - 1]) {
                                this.unCheckAllItem();
                            }
                            this.back();
                        } else {
                            var li = closest(target.parentNode, '.' + classNames.listItem);
                            if (li === null) {
                                li = target;
                            }
                            this.removeFocus();
                            if (this.enable && this.showCheckBox && this.isValidLI(li)) {
                                if (e.target.classList.contains(classNames.checkboxIcon)) {
                                    li.classList.add(classNames.focused);
                                    if (isNullOrUndefined(li.querySelector('.' + classNames.checked))) {
                                        var args = { curData: undefined, dataSource: undefined, fields: undefined, options: undefined,
                                            text: undefined, item: li };
                                        this.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
                                    } else {
                                        this.unCheckItem(li);
                                        li.classList.add(classNames.focused);
                                    }
                                    if (e) {
                                        var eventArgs = this.selectEventData(li, e);
                                        var checkIcon = li.querySelector('.' + classNames.checkboxIcon);
                                        merge(eventArgs, { isChecked: checkIcon.classList.contains(classNames.checked) });
                                        this.trigger('select', eventArgs);
                                    }
                                } else if (li.classList.contains(classNames.hasChild)) {
                                    this.removeHover();
                                    this.removeSelect();
                                    this.removeSelect(li);
                                    this.setSelectLI(li, e);
                                    li.classList.remove(classNames.selected);
                                } else {
                                    this.setCheckboxLI(li, e);
                                }
                            } else {
                                this.setSelectLI(li, e);
                            }
                        }
                    }
                }, {
                    key: 'removeElement',
                    value: function removeElement(element) {
                        return element && element.parentNode && element.parentNode.removeChild(element);
                    }
                }, {
                    key: 'hoverHandler',
                    value: function hoverHandler(e) {
                        var curLi = closest(e.target.parentNode, '.' + classNames.listItem);
                        this.setHoverLI(curLi);
                    }
                }, {
                    key: 'leaveHandler',
                    value: function leaveHandler(e) {
                        this.removeHover();
                    }
                }, {
                    key: 'homeKeyHandler',
                    value: function homeKeyHandler(e, end) {
                        var li = this.curUL.querySelectorAll('.' + classNames.listItem);
                        var focusedElement = this.curUL.querySelector('.' + classNames.focused) || this.curUL.querySelector('.' + classNames.selected);
                        if (focusedElement) {
                            focusedElement.classList.remove(classNames.focused);
                            if (!this.showCheckBox) {
                                focusedElement.classList.remove(classNames.selected);
                            }
                        }
                        var index = !end ? 0 : li.length - 1;
                        if (li[index].classList.contains(classNames.hasChild) || this.showCheckBox) {
                            li[index].classList.add(classNames.focused);
                        } else {
                            this.setSelectLI(li[index], e);
                        }
                    }
                }, {
                    key: 'arrowKeyHandler',
                    value: function arrowKeyHandler(e, prev) {
                        var siblingLI = void 0;
                        var li = void 0;
                        var hasChild = !isNullOrUndefined(this.curUL.querySelector('.' + classNames.hasChild)) ? true : false;
                        if (hasChild || this.showCheckBox) {
                            li = this.curUL.querySelector('.' + classNames.focused) || this.curUL.querySelector('.' + classNames.selected);
                            siblingLI = ListBase.getSiblingLI(this.curUL.querySelectorAll('.' + classNames.listItem), li, prev);
                            if (!isNullOrUndefined(siblingLI)) {
                                if (li) {
                                    li.classList.remove(classNames.focused);
                                    if (!this.showCheckBox) {
                                        li.classList.remove(classNames.selected);
                                    }
                                }
                                if (siblingLI.classList.contains(classNames.hasChild) || this.showCheckBox) {
                                    siblingLI.classList.add(classNames.focused);
                                } else {
                                    this.setSelectLI(siblingLI, e);
                                }
                            }
                        } else {
                            li = this.curUL.querySelector('.' + classNames.selected);
                            siblingLI = ListBase.getSiblingLI(this.curUL.querySelectorAll('.' + classNames.listItem), li, prev);
                            this.setSelectLI(siblingLI, e);
                        }
                    }
                }, {
                    key: 'enterKeyHandler',
                    value: function enterKeyHandler(e) {
                        var hasChild = !isNullOrUndefined(this.curUL.querySelector('.' + classNames.hasChild)) ? true : false;
                        var li = this.curUL.querySelector('.' + classNames.focused);
                        if (hasChild && li) {
                            li.classList.remove(classNames.focused);
                            if (this.showCheckBox) {
                                this.removeSelect();
                                this.removeSelect(li);
                                this.removeHover();
                            }
                            this.setSelectLI(li, e);
                        }
                    }
                }, {
                    key: 'spaceKeyHandler',
                    value: function spaceKeyHandler(e) {
                        if (this.enable && this.showCheckBox) {
                            var li = this.curUL.querySelector('.' + classNames.focused);
                            if (!isNullOrUndefined(li) && isNullOrUndefined(li.querySelector('.' + classNames.checked))) {
                                var args = { curData: undefined, dataSource: undefined, fields: undefined, options: undefined,
                                    text: undefined, item: li };
                                this.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
                            } else {
                                this.unCheckItem(li);
                            }
                        }
                    }
                }, {
                    key: 'keyActionHandler',
                    value: function keyActionHandler(e) {
                        e.preventDefault();
                        switch (e.action) {
                            case 'home':
                                this.homeKeyHandler(e);
                                break;
                            case 'end':
                                this.homeKeyHandler(e, true);
                                break;
                            case 'moveDown':
                                this.arrowKeyHandler(e);
                                break;
                            case 'moveUp':
                                this.arrowKeyHandler(e, true);
                                break;
                            case 'select':
                                this.enterKeyHandler(e);
                                break;
                            case 'back':
                                if (this.showCheckBox && this.curDSLevel[this.curDSLevel.length - 1]) {
                                    this.unCheckAllItem();
                                }
                                this.back();
                                break;
                            case 'tab':
                                this.tabFocus(e);
                                break;
                            case 'space':
                                this.spaceKeyHandler(e);
                                break;
                        }
                    }
                }, {
                    key: 'swipeActionHandler',
                    value: function swipeActionHandler(e) {
                        if (e.swipeDirection === 'Right') {
                            if (this.showCheckBox && this.curDSLevel[this.curDSLevel.length - 1]) {
                                this.unCheckAllItem();
                            }
                            this.back();
                        }
                    }
                }, {
                    key: 'focusout',
                    value: function focusout() {
                        var focusedElement = this.curUL.querySelector('.' + classNames.focused);
                        var activeElement = this.curUL.querySelector('[aria-selected = true]');
                        if (focusedElement && !this.showCheckBox) {
                            focusedElement.classList.remove(classNames.focused);
                            if (activeElement) {
                                activeElement.classList.add(classNames.selected);
                            }
                        }
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        EventHandler.add(this.element, 'click', this.clickHandler, this);
                        EventHandler.add(this.element, 'mouseover', this.hoverHandler, this);
                        EventHandler.add(this.element, 'mouseout', this.leaveHandler, this);
                        EventHandler.add(this.element, 'focusout', this.focusout, this);
                        this.keyboardModule = new KeyboardEvents(this.element, {
                            keyAction: this.keyActionHandler.bind(this),
                            keyConfigs: this.keyConfigs
                        });
                        this.touchModule = new Touch(this.element, { swipe: this.swipeActionHandler.bind(this) });
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        EventHandler.remove(this.element, 'click', this.clickHandler);
                        EventHandler.remove(this.element, 'mouseover', this.hoverHandler);
                        EventHandler.remove(this.element, 'mouseout', this.leaveHandler);
                        this.keyboardModule.destroy();
                        this.touchModule.destroy();
                    }
                }, {
                    key: 'tabFocus',
                    value: function tabFocus(e) {
                        var selectedList = this.curUL.querySelector('.' + classNames.selected);
                        if (!selectedList && this.curUL || this.showCheckBox) {
                            var li = this.curUL.querySelector('.' + classNames.listItem);
                            if (li.classList.contains(classNames.hasChild) || this.showCheckBox) {
                                var focusedElement = this.curUL.querySelector('.' + classNames.focused);
                                if (isNullOrUndefined(focusedElement)) {
                                    li.classList.add(classNames.focused);
                                }
                            } else {
                                this.setSelectLI(li, e);
                            }
                        }
                    }
                }, {
                    key: 'removeFocus',
                    value: function removeFocus() {
                        var focusedLI = this.element.querySelectorAll('.' + classNames.focused);
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = focusedLI[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var ele = _step4.value;

                                ele.classList.remove(classNames.focused);
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
                    key: 'removeHover',
                    value: function removeHover() {
                        var hoverLI = this.element.querySelector('.' + classNames.hover);
                        if (hoverLI) {
                            hoverLI.classList.remove(classNames.hover);
                        }
                    }
                }, {
                    key: 'removeSelect',
                    value: function removeSelect(li) {
                        if (isNullOrUndefined(li)) {
                            var selectedLI = this.element.querySelectorAll('.' + classNames.selected);
                            var _iteratorNormalCompletion5 = true;
                            var _didIteratorError5 = false;
                            var _iteratorError5 = undefined;

                            try {
                                for (var _iterator5 = selectedLI[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                    var ele = _step5.value;

                                    if (this.showCheckBox && ele.querySelector('.' + classNames.checked)) {
                                        continue;
                                    } else {
                                        ele.setAttribute('aria-selected', 'false');
                                        ele.classList.remove(classNames.selected);
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
                        } else {
                            li.classList.remove(classNames.selected);
                            li.setAttribute('aria-selected', 'false');
                        }
                    }
                }, {
                    key: 'isValidLI',
                    value: function isValidLI(li) {
                        return li && li.classList.contains(classNames.listItem) && !li.classList.contains(classNames.grpListItem) && !li.classList.contains(classNames.disable);
                    }
                }, {
                    key: 'setCheckboxLI',
                    value: function setCheckboxLI(li, e) {
                        if (this.isValidLI(li) && this.enable && this.showCheckBox) {
                            if (this.curUL.querySelector('.' + classNames.focused)) {
                                this.curUL.querySelector('.' + classNames.focused).classList.remove(classNames.focused);
                            }
                            li.classList.add(classNames.focused);
                            var checkboxElement = li.querySelector('.' + classNames.checkboxWrapper);
                            var checkIcon = checkboxElement.querySelector('.' + classNames.checkboxIcon + '.' + classNames.icon);
                            this.removeHover();
                            if (!checkIcon.classList.contains(classNames.checked)) {
                                checkIcon.classList.add(classNames.checked);
                                li.classList.add(classNames.selected);
                                li.setAttribute('aria-selected', 'true');
                            } else {
                                checkIcon.classList.remove(classNames.checked);
                                li.classList.remove(classNames.selected);
                                li.setAttribute('aria-selected', 'false');
                            }
                            checkboxElement.setAttribute('aria-checked', checkIcon.classList.contains(classNames.checked) ? 'true' : 'false');
                            if (e) {
                                var eventArgs = this.selectEventData(li, e);
                                merge(eventArgs, { isChecked: checkIcon.classList.contains(classNames.checked) });
                                this.trigger('select', eventArgs);
                            }
                            this.setSelectedItemData(li);
                            this.renderSubList(li);
                        }
                    }
                }, {
                    key: 'selectEventData',
                    value: function selectEventData(li, e) {
                        var data = this.getItemData(li);
                        var fieldData = getFieldValues(data, this.listBaseOption.fields);
                        var selectedItem = void 0;
                        if (isNullOrUndefined(data) && typeof this.dataSource[0] === 'string') {
                            selectedItem = { item: li, text: li.innerText.trim(), data: this.dataSource };
                        } else {
                            selectedItem = { item: li, text: fieldData[this.listBaseOption.fields.text], data: data };
                        }
                        var eventArgs = {};
                        merge(eventArgs, selectedItem);
                        if (e) {
                            merge(eventArgs, { isInteracted: true, event: e, index: Array.prototype.indexOf.call(this.curUL.children, li) });
                        }
                        return eventArgs;
                    }
                }, {
                    key: 'setSelectedItemData',
                    value: function setSelectedItemData(li) {
                        var data = this.getItemData(li);
                        var fieldData = getFieldValues(data, this.listBaseOption.fields);
                        if (isNullOrUndefined(data) && typeof this.dataSource[0] === 'string') {
                            this.selectedItems = {
                                item: li,
                                text: li.innerText.trim(),
                                data: this.dataSource
                            };
                        } else {
                            this.selectedItems = {
                                item: li,
                                text: fieldData[this.listBaseOption.fields.text],
                                data: data
                            };
                        }
                    }
                }, {
                    key: 'setSelectLI',
                    value: function setSelectLI(li, e) {
                        if (this.isValidLI(li) && !li.classList.contains(classNames.selected) && this.enable) {
                            if (!this.showCheckBox) {
                                this.removeSelect();
                            }
                            li.classList.add(classNames.selected);
                            li.classList.add(classNames.focused);
                            li.setAttribute('aria-selected', 'true');
                            this.removeHover();
                            this.setSelectedItemData(li);
                            var eventArgs = this.selectEventData(li, e);
                            this.trigger('select', eventArgs);
                            this.selectedLI = li;
                            this.renderSubList(li);
                        }
                    }
                }, {
                    key: 'setHoverLI',
                    value: function setHoverLI(li) {
                        if (this.isValidLI(li) && !li.classList.contains(classNames.hover) && this.enable) {
                            var lastLi = this.element.querySelectorAll('.' + classNames.hover);
                            if (lastLi && lastLi.length) {
                                removeClass(lastLi, classNames.hover);
                            }
                            if (!li.classList.contains(classNames.selected) || this.showCheckBox) {
                                li.classList.add(classNames.hover);
                            }
                        }
                    }
                }, {
                    key: 'hoverSiblingLI',
                    value: function hoverSiblingLI(prev) {
                        var lastLi = this.curUL.querySelector('.' + classNames.hover);
                        var siblingLI = void 0;
                        if (!lastLi) {
                            lastLi = this.curUL.querySelector('.' + classNames.selected);
                        }
                        if (lastLi) {
                            siblingLI = ListBase.getSiblingLI(this.curUL.querySelectorAll('.' + classNames.listItem), lastLi, prev);
                        } else {
                            if (prev) {
                                var curLIs = this.curUL.querySelectorAll('.' + classNames.listItem);
                                siblingLI = curLIs[curLIs.length - 1];
                            } else {
                                siblingLI = this.curUL.querySelector('.' + classNames.listItem);
                            }
                        }
                        this.setHoverLI(siblingLI);
                    }
                }, {
                    key: 'getSubDS',
                    value: function getSubDS() {
                        var levelKeys = this.curDSLevel;
                        if (levelKeys.length) {
                            var ds = this.localData;
                            var _iteratorNormalCompletion6 = true;
                            var _didIteratorError6 = false;
                            var _iteratorError6 = undefined;

                            try {
                                for (var _iterator6 = levelKeys[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                    var key = _step6.value;

                                    this.curDSJSON = this.findItemFromDS(ds, { id: key });
                                    var fieldData = getFieldValues(this.curDSJSON, this.listBaseOption.fields);
                                    ds = this.curDSJSON ? fieldData[this.fields.child] : ds;
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

                            return ds;
                        }
                        return this.localData;
                    }
                }, {
                    key: 'getItemData',
                    value: function getItemData(li) {
                        var fields = this.getElementUID(li);
                        var curDS = this.dataSource;
                        return this.findItemFromDS(curDS, fields);
                    }
                }, {
                    key: 'findItemFromDS',
                    value: function findItemFromDS(dataSource, fields, parent) {
                        var _this5 = this;

                        var resultJSON = void 0;
                        if (dataSource && dataSource.length && fields) {
                            dataSource.some(function (data) {
                                var fieldData = getFieldValues(data, _this5.listBaseOption.fields);
                                //(!(fid) || id === fid) && (!(ftext) || text === ftext) && (!!fid || !!ftext)
                                if ((fields.id || fields.text) && (!fields.id || fieldData[_this5.fields.id] === fields.id) && (!fields.text || fieldData[_this5.fields.text] === fields.text)) {
                                    resultJSON = parent ? dataSource : data;
                                } else if (!isNullOrUndefined(fields.id) && isNullOrUndefined(fieldData[_this5.fields.id])) {
                                    var li = _this5.element.querySelector('[data-uid="' + fields.id + '"]');
                                    if (li.innerText.trim() === fieldData[_this5.fields.text]) {
                                        resultJSON = data;
                                    }
                                } else if (fieldData.hasOwnProperty(_this5.fields.child) && fieldData[_this5.fields.child].length) {
                                    resultJSON = _this5.findItemFromDS(fieldData[_this5.fields.child], fields, parent);
                                }
                                return !!resultJSON;
                            });
                        } else {
                            resultJSON = dataSource;
                        }
                        return resultJSON;
                    }
                }, {
                    key: 'getQuery',
                    value: function getQuery() {
                        var columns = [];
                        var query = this.query ? this.query : new Query();
                        if (!this.query) {
                            var _iteratorNormalCompletion7 = true;
                            var _didIteratorError7 = false;
                            var _iteratorError7 = undefined;

                            try {
                                for (var _iterator7 = Object.keys(this.fields.properties)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                    var column = _step7.value;

                                    if (column !== 'tableName' && !!this.fields[column] && this.fields[column] !== ListBase.defaultMappedFields[column] && columns.indexOf(this.fields[column]) === -1) {
                                        columns.push(this.fields[column]);
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

                            query.select(columns);
                            if (this.fields.properties.hasOwnProperty('tableName')) {
                                query.from(this.fields.tableName);
                            }
                        }
                        return query;
                    }
                }, {
                    key: 'setViewDataSource',
                    value: function setViewDataSource() {
                        var dataSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.localData;

                        if (dataSource && this.fields.groupBy) {
                            this.curViewDS = ListBase.groupDataSource(dataSource, this.fields, this.sortOrder);
                        } else if (dataSource && this.sortOrder !== 'None') {
                            this.curViewDS = ListBase.getDataSource(dataSource, ListBase.addSorting(this.sortOrder, this.fields.sortBy));
                        } else {
                            this.curViewDS = dataSource;
                        }
                    }
                }, {
                    key: 'isInAnimation',
                    value: function isInAnimation() {
                        return this.curUL.classList.contains('.e-animate');
                    }
                }, {
                    key: 'setLocalData',
                    value: function setLocalData() {
                        var _this6 = this;

                        this.trigger('actionBegin');
                        if (this.dataSource instanceof DataManager) {
                            this.dataSource.executeQuery(this.getQuery()).then(function (e) {
                                if (_this6.isDestroyed) {
                                    return;
                                }
                                _this6.localData = e.result;
                                _this6.renderList();
                                _this6.trigger('actionComplete', e);
                            }).catch(function (e) {
                                if (_this6.isDestroyed) {
                                    return;
                                }
                                _this6.trigger('actionFailure', e);
                            });
                        } else if (!this.dataSource || !this.dataSource.length) {
                            var ul = this.element.querySelector('ul');
                            if (ul) {
                                remove(ul);
                                this.setProperties({ dataSource: ListBase.createJsonFromElement(ul) }, true);
                                this.localData = this.dataSource;
                                this.renderList();
                                this.trigger('actionComplete', { data: this.localData });
                            }
                        } else {
                            this.localData = this.dataSource;
                            this.renderList();
                            this.trigger('actionComplete', { data: this.localData });
                        }
                    }
                }, {
                    key: 'reRender',
                    value: function reRender() {
                        this.element.innerHTML = '';
                        this.curUL = this.headerEle = undefined;
                        this.setLocalData();
                        this.header();
                    }
                }, {
                    key: 'resetCurrentList',
                    value: function resetCurrentList() {
                        this.setViewDataSource(this.curViewDS);
                        this.contentContainer.innerHTML = '';
                        this.createList();
                        this.renderIntoDom(this.curUL);
                    }
                }, {
                    key: 'createList',
                    value: function createList() {
                        this.currentLiElements = [];
                        this.isNestedList = false;
                        this.ulElement = this.curUL = ListBase.createList(this.curViewDS, this.listBaseOption);
                        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
                    }
                }, {
                    key: 'renderSubList',
                    value: function renderSubList(li) {
                        var uID = li.getAttribute('data-uid');
                        if (li.classList.contains(classNames.hasChild) && uID) {
                            var ul = closest(li.parentNode, '.' + classNames.parentItem);
                            var ele = this.element.querySelector('[pid=\'' + uID + '\']');
                            this.curDSLevel.push(uID);
                            this.setViewDataSource(this.getSubDS());
                            if (!ele) {
                                ele = ListBase.createListFromJson(this.curViewDS, this.listBaseOption, this.curDSLevel.length);
                                ele.setAttribute('pID', uID);
                                ele.style.display = 'none';
                                this.renderIntoDom(ele);
                            }
                            this.switchView(ul, ele);
                            this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
                            var fieldData = getFieldValues(this.selectedItems.data, this.listBaseOption.fields);
                            this.header(fieldData[this.listBaseOption.fields.text], true);
                            this.selectedLI = undefined;
                        }
                    }
                }, {
                    key: 'renderIntoDom',
                    value: function renderIntoDom(ele) {
                        this.contentContainer.appendChild(ele);
                    }
                }, {
                    key: 'renderList',
                    value: function renderList() {
                        this.setViewDataSource();
                        this.createList();
                        this.contentContainer = createElement('div', { className: classNames.content });
                        this.element.appendChild(this.contentContainer);
                        this.renderIntoDom(this.ulElement);
                    }
                }, {
                    key: 'getElementUID',
                    value: function getElementUID(obj) {
                        var fields = {};
                        if (obj instanceof Element) {
                            fields.id = obj.getAttribute('data-uid');
                        } else {
                            fields = obj;
                        }
                        return fields;
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.element.classList.add(classNames.root);
                        attributes(this.element, { role: 'list', tabindex: '0' });
                        this.setCSSClass();
                        this.setEnableRTL();
                        this.setEnable();
                        this.setSize();
                        this.wireEvents();
                        this.header();
                        this.setLocalData();
                        this.setHTMLAttribute();
                        this.rippleFn = rippleEffect(this.element, {
                            selector: '.' + classNames.listItem
                        });
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.unWireEvents();
                        var classAr = [classNames.root, this.cssClass, classNames.disable, 'e-rtl', 'e-has-header'];
                        removeClass([this.element], classAr);
                        this.rippleFn();
                        _get(ListView.prototype.__proto__ || Object.getPrototypeOf(ListView.prototype), 'destroy', this).call(this);
                    }
                }, {
                    key: 'back',
                    value: function back() {
                        var pID = this.curDSLevel[this.curDSLevel.length - 1];
                        if (pID === undefined || this.isInAnimation()) {
                            return;
                        }
                        this.curDSLevel.pop();
                        this.setViewDataSource(this.getSubDS());
                        var toUL = this.element.querySelector('[data-uid=\'' + pID + '\']');
                        var fromUL = this.curUL;
                        if (!toUL) {
                            this.createList();
                            this.renderIntoDom(this.ulElement);
                            toUL = this.curUL;
                        } else {
                            toUL = toUL.parentElement;
                        }
                        var fieldData = getFieldValues(this.curDSJSON, this.listBaseOption.fields);
                        var text = fieldData[this.fields.text];
                        this.switchView(fromUL, toUL, true);
                        this.removeFocus();
                        var li = this.element.querySelector('[data-uid=\'' + pID + '\']');
                        li.classList.add(classNames.focused);
                        if (this.showCheckBox && li.querySelector('.' + classNames.checkboxIcon).classList.contains(classNames.checked)) {
                            li.setAttribute('aria-selected', 'true');
                        } else {
                            li.classList.remove(classNames.selected);
                            li.setAttribute('aria-selected', 'false');
                        }
                        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
                        this.header(this.curDSLevel.length ? text : this.headerTitle, this.curDSLevel.length ? true : false);
                    }
                }, {
                    key: 'selectItem',
                    value: function selectItem(obj) {
                        if (!isNullOrUndefined(obj)) {
                            if (this.showCheckBox) {
                                this.setCheckboxLI(this.getLiFromObjOrElement(obj));
                            } else {
                                this.setSelectLI(this.getLiFromObjOrElement(obj));
                            }
                        }
                    }
                }, {
                    key: 'getLiFromObjOrElement',
                    value: function getLiFromObjOrElement(obj) {
                        var li = void 0;
                        if (!isNullOrUndefined(obj)) {
                            if (typeof this.dataSource[0] === 'string') {
                                if (obj instanceof Object && obj.constructor === HTMLLIElement) {
                                    var uid = obj.getAttribute('data-uid').toString();
                                    for (var i = 0; i < this.liCollection.length; i++) {
                                        if (this.liCollection[i].getAttribute('data-uid').toString() === uid) {
                                            li = this.liCollection[i];
                                            break;
                                        }
                                    }
                                }
                            } else {
                                var resultJSON = this.getItemData(obj);
                                var fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
                                if (resultJSON) {
                                    li = this.element.querySelector('[data-uid="' + fieldData[this.fields.id] + '"]');
                                    if (isNullOrUndefined(li)) {
                                        var curLi = this.element.querySelectorAll('.' + classNames.listItem);
                                        for (var _i2 = 0; _i2 < curLi.length; _i2++) {
                                            if (curLi[_i2].innerText.trim() === resultJSON.text) {
                                                li = curLi[_i2];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        return li;
                    }
                }, {
                    key: 'selectMultipleItems',
                    value: function selectMultipleItems(obj) {
                        if (!isNullOrUndefined(obj)) {
                            for (var i = 0; i < obj.length; i++) {
                                if (!isNullOrUndefined(obj[i])) {
                                    this.selectItem(obj[i]);
                                }
                            }
                        }
                    }
                }, {
                    key: 'getParentId',
                    value: function getParentId() {
                        var parentId = [];
                        if (this.isNestedList) {
                            for (var i = this.curDSLevel.length - 1; i >= 0; i--) {
                                parentId.push(this.curDSLevel[i]);
                            }
                        }
                        return parentId;
                    }
                }, {
                    key: 'getSelectedItems',
                    value: function getSelectedItems() {
                        this.selectedId = [];
                        if (this.showCheckBox) {
                            var liCollection = this.curUL.getElementsByClassName(classNames.selected);
                            var liTextCollection = [];
                            var liDataCollection = [];
                            this.selectedId = [];
                            var dataParent = [];
                            for (var i = 0; i < liCollection.length; i++) {
                                if (typeof this.dataSource[0] === 'string') {
                                    liTextCollection.push(liCollection[i].innerText.trim());
                                } else {
                                    var tempData = this.getItemData(liCollection[i]);
                                    var fieldData = getFieldValues(tempData, this.listBaseOption.fields);
                                    if (this.isNestedList) {
                                        dataParent.push({ data: tempData, parentId: this.getParentId() });
                                    } else {
                                        liDataCollection.push(tempData);
                                    }
                                    liTextCollection.push(fieldData[this.listBaseOption.fields.text]);
                                    this.selectedId.push(fieldData[this.listBaseOption.fields.id]);
                                }
                            }
                            if (typeof this.dataSource[0] === 'string') {
                                return { item: liCollection, data: this.dataSource, text: liTextCollection };
                            }
                            if (this.isNestedList) {
                                return { item: liCollection, data: dataParent, text: liTextCollection };
                            } else {
                                return { item: liCollection, data: liDataCollection, text: liTextCollection };
                            }
                        } else {
                            var liElement = this.element.getElementsByClassName(classNames.selected)[0];
                            var _fieldData = getFieldValues(this.getItemData(liElement), this.listBaseOption.fields);
                            if (typeof this.dataSource[0] === 'string') {
                                return !isNullOrUndefined(liElement) ? {
                                    item: liElement, data: this.dataSource,
                                    text: liElement.innerText.trim()
                                } : undefined;
                            } else {
                                if (isNullOrUndefined(_fieldData) || isNullOrUndefined(liElement)) {
                                    return undefined;
                                } else {
                                    this.selectedId.push(_fieldData[this.listBaseOption.fields.id]);
                                    return {
                                        text: _fieldData[this.listBaseOption.fields.text], item: liElement,
                                        data: this.getItemData(liElement)
                                    };
                                }
                            }
                        }
                    }
                }, {
                    key: 'findItem',
                    value: function findItem(obj) {
                        return this.getItemData(obj);
                    }
                }, {
                    key: 'enableItem',
                    value: function enableItem(obj) {
                        this.setItemState(obj, true);
                    }
                }, {
                    key: 'disableItem',
                    value: function disableItem(obj) {
                        this.setItemState(obj, false);
                    }
                }, {
                    key: 'setItemState',
                    value: function setItemState(obj, isEnable) {
                        var resultJSON = this.getItemData(obj);
                        var fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
                        if (resultJSON) {
                            var li = this.element.querySelector('[data-uid="' + fieldData[this.fields.id] + '"]');
                            if (isEnable) {
                                if (li) {
                                    li.classList.remove(classNames.disable);
                                }
                                delete resultJSON[this.fields.enabled];
                            } else if (!isEnable) {
                                if (li) {
                                    li.classList.add(classNames.disable);
                                }
                                resultJSON[this.fields.enabled] = false;
                            }
                        }
                    }
                }, {
                    key: 'showItem',
                    value: function showItem(obj) {
                        this.showHideItem(obj, false, '');
                    }
                }, {
                    key: 'hideItem',
                    value: function hideItem(obj) {
                        this.showHideItem(obj, true, 'none');
                    }
                }, {
                    key: 'showHideItem',
                    value: function showHideItem(obj, isHide, display) {
                        var resultJSON = this.getItemData(obj);
                        var fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
                        if (resultJSON) {
                            var li = this.element.querySelector('[data-uid="' + fieldData[this.fields.id] + '"]');
                            if (li) {
                                li.style.display = display;
                            }
                            if (isHide) {
                                resultJSON[this.fields.isVisible] = false;
                            } else {
                                delete resultJSON[this.fields.isVisible];
                            }
                        }
                    }
                }, {
                    key: 'addItem',
                    value: function addItem(data, fields) {
                        var ds = this.findItemFromDS(this.dataSource, fields);
                        var fieldData = getFieldValues(ds, this.listBaseOption.fields);
                        var child = fieldData[this.fields.child];
                        if (!child) {
                            child = [];
                        }
                        child = child.concat(data);
                        if (ds instanceof Array) {
                            this.dataSource = this.localData = ds.concat(data);
                            this.setViewDataSource();
                        } else {
                            ds[this.fields.child] = child;
                        }
                        this.resetCurrentList();
                    }
                }, {
                    key: 'removeItem',
                    value: function removeItem(obj) {
                        this.removeItemFromList(obj, true);
                    }
                }, {
                    key: 'removeItemFromList',
                    value: function removeItemFromList(obj, resetList) {
                        var _this7 = this;

                        var selectedElements = [];
                        var valid = false;
                        if (typeof this.dataSource[0] === 'string') {
                            if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
                                var liCollection = [];
                                var idx = 0;
                                this.liCollection.forEach(function (element) {
                                    if (element === obj) {
                                        valid = true;
                                        _this7.removeElement(element);
                                        _this7.dataSource.splice(idx, 1);
                                        _this7.localData = _this7.dataSource;
                                    } else {
                                        liCollection.push(element);
                                    }
                                    idx++;
                                });
                                this.liCollection = liCollection;
                            } else if (typeof obj === 'string') {
                                var _liCollection2 = [];
                                var _idx = 0;
                                var ds = [];
                                this.liCollection.forEach(function (element) {
                                    if (element.innerText.trim() === obj) {
                                        valid = true;
                                        _this7.removeElement(element);
                                    } else {
                                        _liCollection2.push(element);
                                        ds.push(_this7.dataSource[_idx]);
                                    }
                                    _idx++;
                                });
                                this.localData = this.curViewDS = this.dataSource = ds;
                                this.liCollection = _liCollection2;
                            }
                            var values = this.getSelectedItems();
                            this.selectedData = !isNullOrUndefined(values) ? values.text : undefined;
                            selectedElements = undefined;
                            if (resetList && valid) {
                                this.resetList = true;
                                this.resetCurrentList();
                                if (!this.showCheckBox && this.selectedData && this.selectedData.length) {
                                    this.removeSelect();
                                    var index = this.dataSource.lastIndexOf(this.selectedData);
                                    this.liCollection[index].classList.add(classNames.selected);
                                    this.liCollection[index].setAttribute('aria-selected', 'true');
                                }
                                this.resetList = false;
                            }
                        } else {
                            selectedElements = !isNullOrUndefined(this.getSelectedItems()) ? this.getSelectedItems().data : undefined;
                            var fields = this.getElementUID(obj);
                            var curAr = void 0;
                            var curDS = this.findItemFromDS(this.dataSource, fields, true);
                            if (curDS && obj) {
                                var _idx2 = void 0;
                                curDS.some(function (data, index, arr) {
                                    var fieldData = getFieldValues(data, _this7.listBaseOption.fields);
                                    if ((fields.id || fields.text) && (!fields.id || fieldData[_this7.fields.id] === fields.id) && (!fields.text || fieldData[_this7.fields.text] === fields.text)) {
                                        curAr = arr;
                                        _idx2 = index;
                                        return true;
                                    }
                                    return false;
                                });
                                this.removeElement(this.getLiFromObjOrElement(curAr[_idx2]));
                                curAr.splice(_idx2, 1);
                                this.curViewDS = curAr;
                            }
                            var _values = this.getSelectedItems();
                            this.selectedData = !isNullOrUndefined(_values) ? _values.text : undefined;
                            if (resetList && curAr) {
                                this.resetList = true;
                                this.resetCurrentList();
                                if (!this.showCheckBox && !isNullOrUndefined(_values)) {
                                    this.selectItem(_values.item);
                                }
                                this.resetList = false;
                            }
                        }
                    }
                }, {
                    key: 'removeMultipleItems',
                    value: function removeMultipleItems(obj) {
                        if (obj.length) {
                            for (var i = 0; i < obj.length; i++) {
                                i === obj.length - 1 ? this.removeItemFromList(obj[i], true) : this.removeItemFromList(obj[i], false);
                            }
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'listview';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist(['cssClass', 'enableRtl', 'htmlAttributes', 'enable', 'fields', 'animation', 'headerTitle', 'sortOrder', 'showIcon', 'height', 'width', 'showCheckBox', 'checkBoxPosition']);
                    }
                }]);

                return ListView;
            }(Component));

            __decorate([Property()], ListView.prototype, "cssClass", void 0);
            __decorate([Property({})], ListView.prototype, "htmlAttributes", void 0);
            __decorate([Property(true)], ListView.prototype, "enable", void 0);
            __decorate([Property([])], ListView.prototype, "dataSource", void 0);
            __decorate([Property()], ListView.prototype, "query", void 0);
            __decorate([Complex(ListBase.defaultMappedFields, FieldSettings)], ListView.prototype, "fields", void 0);
            __decorate([Property({ effect: 'SlideLeft', duration: 400, easing: 'ease' })], ListView.prototype, "animation", void 0);
            __decorate([Property('None')], ListView.prototype, "sortOrder", void 0);
            __decorate([Property(false)], ListView.prototype, "showIcon", void 0);
            __decorate([Property(false)], ListView.prototype, "showCheckBox", void 0);
            __decorate([Property('Left')], ListView.prototype, "checkBoxPosition", void 0);
            __decorate([Property('')], ListView.prototype, "headerTitle", void 0);
            __decorate([Property(false)], ListView.prototype, "showHeader", void 0);
            __decorate([Property('')], ListView.prototype, "height", void 0);
            __decorate([Property('')], ListView.prototype, "width", void 0);
            __decorate([Property(null)], ListView.prototype, "template", void 0);
            __decorate([Property(null)], ListView.prototype, "groupTemplate", void 0);
            __decorate([Event()], ListView.prototype, "select", void 0);
            __decorate([Event()], ListView.prototype, "actionBegin", void 0);
            __decorate([Event()], ListView.prototype, "actionComplete", void 0);
            __decorate([Event()], ListView.prototype, "actionFailure", void 0);
            _export('ListView', ListView = __decorate([NotifyPropertyChanges], ListView));

            /**
             * Listview Component
             */

            /**
             * Listview Component
             */

            /**
             * List Components
             */

            _export('FieldSettings', FieldSettings);

            _export('ListView', ListView);

            _export('cssClass', cssClass);

            _export('ListBase', ListBase);

            _export('getFieldValues', getFieldValues);
        }
    };
});

//# sourceMappingURL=ej2-lists.es2015-compiled.js.map