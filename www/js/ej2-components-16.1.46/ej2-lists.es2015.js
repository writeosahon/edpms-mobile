import { Animation, ChildProperty, Complex, Component, Event, EventHandler, KeyboardEvents, NotifyPropertyChanges, Property, Touch, addClass, append, attributes, closest, compile, createElement, extend, formatUnit, getValue, isNullOrUndefined, isVisible, merge, prepend, remove, removeClass, rippleEffect } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { createCheckBox } from '@syncfusion/ej2-buttons';

let cssClass = {
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
};
/**
 * Base List Generator
 */
var ListBase;
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
    let defaultAriaAttributes = {
        level: 1,
        listRole: 'presentation',
        itemRole: 'presentation',
        groupItemRole: 'group',
        itemText: 'list-item',
        wrapperRole: 'presentation'
    };
    let defaultListBaseOptions = {
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
        let curOpt = extend({}, defaultListBaseOptions, options);
        let ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
        let type = typeofData(dataSource).typeof;
        if (type === 'string' || type === 'number') {
            return createListFromArray(dataSource, isSingleLevel, options);
        }
        else {
            return createListFromJson(dataSource, options, ariaAttributes.level, isSingleLevel);
        }
    }
    ListBase.createList = createList;
    /**
     * Function helps to created an element list based on string array input .
     * @param  {string[]} dataSource - Specifies an array of string data
     */
    function createListFromArray(dataSource, isSingleLevel, options) {
        let subChild = createListItemFromArray(dataSource, isSingleLevel, options);
        return generateUL(subChild, null, options);
    }
    ListBase.createListFromArray = createListFromArray;
    /**
     * Function helps to created an element list based on string array input .
     * @param  {string[]} dataSource - Specifies an array of string data
     */
    function createListItemFromArray(dataSource, isSingleLevel, options) {
        let subChild = [];
        let curOpt = extend({}, defaultListBaseOptions, options);
        cssClass = getModuleClass(curOpt.moduleName);
        let id = genUID(); // generate id for drop-down-list option.
        for (let i = 0; i < dataSource.length; i++) {
            if (isNullOrUndefined(dataSource[i])) {
                continue;
            }
            let li;
            if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                let curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: dataSource[i],
                    options: curOpt
                };
                curOpt.itemCreating(curData);
            }
            if (isSingleLevel) {
                li = generateSingleLevelLI(dataSource[i], null, null, [], null, id, i, options);
            }
            else {
                li = generateLI(dataSource[i], null, null, options);
            }
            if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                let curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: dataSource[i],
                    item: li,
                    options: curOpt
                };
                curOpt.itemCreated(curData);
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
        let curOpt = extend({}, defaultListBaseOptions, options);
        cssClass = getModuleClass(curOpt.moduleName);
        let fields = extend({}, ListBase.defaultMappedFields, curOpt.fields);
        let ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
        let id;
        if (level) {
            ariaAttributes.level = level;
        }
        let child = [];
        let li;
        if (Object.keys(dataSource).length && !typeofData(dataSource).item.hasOwnProperty(fields.id)) {
            id = genUID(); // generate id for drop-down-list option.
        }
        for (let i = 0; i < dataSource.length; i++) {
            let fieldData = getFieldValues(dataSource[i], fields);
            if (isNullOrUndefined(dataSource[i])) {
                continue;
            }
            if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                let curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: fieldData[fields.text],
                    options: curOpt,
                    fields: fields
                };
                curOpt.itemCreating(curData);
            }
            let curItem = dataSource[i];
            if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                fieldData = getFieldValues(dataSource[i], fields);
            }
            if (Object.keys(dataSource).length && fieldData.hasOwnProperty(fields.id)
                && !isNullOrUndefined(fieldData[fields.id])) {
                id = fieldData.id;
            }
            let innerEle = [];
            if (curOpt.showCheckBox) {
                innerEle.push(createElement('input', { className: cssClass.check, attrs: { type: 'checkbox' } }));
            }
            if (isSingleLevel === true) {
                if (curOpt.showIcon && fieldData.hasOwnProperty(fields.iconCss)) {
                    if (!isNullOrUndefined(fieldData[fields.iconCss])) {
                        innerEle.push(createElement('span', { className: cssClass.icon + ' ' + fieldData[fields.iconCss] }));
                    }
                }
                li = generateSingleLevelLI(curItem, fields, curOpt.itemClass, innerEle, (curItem.hasOwnProperty('isHeader') &&
                    curItem.isHeader) ? true : false, id, i, options);
            }
            else {
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
                    let attr = { src: fieldData[fields.imageUrl] };
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
                let curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: fieldData[fields.text],
                    item: li,
                    options: curOpt,
                    fields: fields
                };
                curOpt.itemCreated(curData);
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
        let curOpt = extend({}, defaultListBaseOptions, options);
        let li = createListItemFromJson(dataSource, options, level, isSingleLevel);
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
        cssClass = getModuleClass(defaultListBaseOptions.moduleName);
        if (!elementArray || !elementArray.length) {
            return void 0;
        }
        let siblingLI;
        let liIndex;
        let liCollections = Array.prototype.slice.call(elementArray);
        if (element) {
            liIndex = indexOf(element, liCollections);
        }
        else {
            liIndex = (isPrevious === true ? liCollections.length : -1);
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
        }
        else {
            let liCollections = elementArray;
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
    function groupDataSource(dataSource, fields, sortOrder = 'None') {
        let cusQuery = new Query().group(fields.groupBy);
        // need to remove once sorting issues fixed in DataManager
        cusQuery = addSorting(sortOrder, 'key', cusQuery);
        let ds = getDataSource(dataSource, cusQuery);
        dataSource = [];
        for (let j = 0; j < ds.length; j++) {
            let itemObj = ds[j].items;
            let grpItem = {};
            let hdr = 'isHeader';
            grpItem[fields.text] = ds[j].key;
            grpItem[hdr] = true;
            grpItem.items = itemObj;
            dataSource.push(grpItem);
            for (let k = 0; k < itemObj.length; k++) {
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
    function addSorting(sortOrder, sortBy, query = new Query()) {
        if (sortOrder === 'Ascending') {
            query.sortBy(sortBy, 'ascending', true);
        }
        else if (sortOrder === 'Descending') {
            query.sortBy(sortBy, 'descending', true);
        }
        else {
            for (let i = 0; i < query.queries.length; i++) {
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
        return new DataManager(dataSource)
            .executeLocal(query);
    }
    ListBase.getDataSource = getDataSource;
    /**
     * Created JSON data based the UL and LI element
     * @param  {HTMLElement|Element} element - UL element that need to convert as a JSON
     * @param  {ListBaseOptions} options? - Specifies listbase option for fields.
     */
    function createJsonFromElement(element, options) {
        let curOpt = extend({}, defaultListBaseOptions, options);
        let fields = extend({}, ListBase.defaultMappedFields, curOpt.fields);
        let curEle = element.cloneNode(true);
        let jsonAr = [];
        curEle.classList.add('json-parent');
        let childs = curEle.querySelectorAll('.json-parent>li');
        curEle.classList.remove('json-parent');
        for (let i = 0; i < childs.length; i++) {
            let li = childs[i];
            let anchor = li.querySelector('a');
            let ul = li.querySelector('ul');
            let json = {};
            let childNodes = anchor ? anchor.childNodes : li.childNodes;
            let keys = Object.keys(childNodes);
            for (let i = 0; i < childNodes.length; i++) {
                if (!(childNodes[Number(keys[i])]).hasChildNodes()) {
                    json[fields.text] = childNodes[Number(keys[i])].textContent;
                }
            }
            json[fields.id] = genUID();
            let attributes$$1 = getAllAttributes(li);
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
        let match = { typeof: null, item: null };
        for (let i = 0; i < data.length; i++) {
            if (!isNullOrUndefined(data[i])) {
                return match = { typeof: typeof data[i], item: data[i] };
            }
        }
        return match;
    }
    function setAttribute(element, elementAttributes) {
        let attr = {};
        merge(attr, elementAttributes);
        if (attr.class) {
            addClass([element], attr.class.split(' '));
            delete attr.class;
        }
        attributes(element, attr);
    }
    function getAllAttributes(element) {
        let attributes$$1 = {};
        let attr = element.attributes;
        for (let index = 0; index < attr.length; index++) {
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
        cssClass = getModuleClass(defaultListBaseOptions.moduleName);
        let ulElement = createElement('ul', { className: cssClass.ul, attrs: { role: 'presentation' } });
        let curOpt = extend({}, defaultListBaseOptions, options);
        let compiledString = compile(template);
        let liCollection = [];
        let id = genUID(); // generate id for drop-down-list option.
        for (let i = 0; i < dataSource.length; i++) {
            let fieldData = getFieldValues(dataSource[i], fields);
            let curItem = dataSource[i];
            let isHeader = curItem.isHeader;
            let value = (typeof curItem === 'string' || typeof curItem === 'number') ? curItem : fieldData[fields.value];
            if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                let curData = {
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
            let li = createElement('li', {
                id: id + '-' + i,
                className: isHeader ? cssClass.group : cssClass.li, attrs: { role: 'presentation' }
            });
            if (isHeader) {
                li.innerText = fieldData[fields.text];
            }
            else {
                append(compiledString(curItem), li);
                li.setAttribute('data-value', value);
                li.setAttribute('role', 'option');
            }
            if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                let curData = {
                    dataSource: dataSource,
                    curData: curItem,
                    text: value,
                    item: li,
                    options: curOpt,
                    fields: fields
                };
                curOpt.itemCreated(curData);
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
        let compiledString = compile(groupTemplate);
        let category = fields.groupBy;
        let headerData = {};
        for (let header of headerItems) {
            headerData[category] = header.textContent;
            header.innerHTML = '';
            append(compiledString(headerData), header);
        }
        return headerItems;
    }
    ListBase.renderGroupTemplate = renderGroupTemplate;
    function genUID() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    function processSubChild(curItem, fields, ds, options, element, level) {
        let fieldData = getFieldValues(curItem, fields);
        // Get SubList   
        let subDS = fieldData[fields.child] || [];
        let hasChildren = fieldData[fields.hasChildren];
        //Create Sub child
        if (subDS.length) {
            hasChildren = true;
            element.classList.add(cssClass.hasChild);
            if (options.processSubChild) {
                let subLi = createListFromJson(subDS, options, ++level);
                element.appendChild(subLi);
            }
        }
        // Create expand and collapse node
        if (!!options.expandCollapse && hasChildren && !options.template) {
            if (element.firstElementChild.classList.contains(cssClass.textContent)) {
                element.firstElementChild.classList.add(cssClass.iconWrapper);
            }
            let expandElement = options.expandIconPosition === 'Left' ? prepend : append;
            expandElement([createElement('div', { className: 'e-icons ' + options.expandIconClass })], element.querySelector('.' + cssClass.textContent));
        }
    }
    function generateSingleLevelLI(item, fields, className, innerElements, grpLI, id, index, options) {
        let curOpt = extend({}, defaultListBaseOptions, options);
        let ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
        let text = item;
        let value = item;
        let dataSource;
        let fieldData = getFieldValues(item, fields);
        if (typeof item !== 'string' && typeof item !== 'number') {
            dataSource = item;
            text = (typeof fieldData[fields.text] === 'boolean' || typeof fieldData[fields.text] === 'number') ?
                fieldData[fields.text] : (fieldData[fields.text] || '');
            value = fieldData[fields.value];
        }
        let elementID;
        if (!isNullOrUndefined(dataSource) && !isNullOrUndefined(fieldData[fields.id])
            && fieldData[fields.id] !== '') {
            elementID = id;
        }
        else {
            elementID = id + '-' + index;
        }
        let li = createElement('li', {
            className: (grpLI === true ? cssClass.group : cssClass.li) + ' ' + (isNullOrUndefined(className) ? '' : className),
            id: elementID, attrs: (ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ?
                { role: (grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole) } : {})
        });
        if (dataSource && fieldData.hasOwnProperty(fields.enabled) && fieldData[fields.enabled].toString() === 'false') {
            li.classList.add(cssClass.disabled);
        }
        if (grpLI) {
            li.innerText = text;
        }
        else {
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
            }
            else {
                li.appendChild(document.createTextNode(text));
            }
        }
        return li;
    }
    function getModuleClass(moduleName) {
        let moduleClass;
        return moduleClass = {
            li: `e-${moduleName}-item`,
            ul: `e-${moduleName}-parent e-ul`,
            group: `e-${moduleName}-group-item`,
            icon: `e-${moduleName}-icon`,
            text: `e-${moduleName}-text`,
            check: `e-${moduleName}-check`,
            checked: 'e-checked',
            selected: 'e-selected',
            expanded: 'e-expanded',
            textContent: 'e-text-content',
            hasChild: 'e-has-child',
            level: 'e-level',
            url: `e-${moduleName}-url`,
            collapsible: 'e-icon-collapsible',
            disabled: 'e-disabled',
            image: `e-${moduleName}-img`,
            iconWrapper: 'e-icon-wrapper'
        };
    }
    function anchorTag(dataSource, fields, text) {
        let fieldData = getFieldValues(dataSource, fields);
        let attr = { href: fieldData[fields.url] };
        if (fieldData.hasOwnProperty(fields.urlAttributes) && fieldData[fields.urlAttributes]) {
            merge(attr, fieldData[fields.urlAttributes]);
        }
        let anchorTag = createElement('a', { className: cssClass.text + ' ' + cssClass.url, innerHTML: text });
        setAttribute(anchorTag, attr);
        return anchorTag;
    }
    /* tslint:disable:align */
    function generateLI(item, fields, className, options) {
        let curOpt = extend({}, defaultListBaseOptions, options);
        let ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
        let text = item;
        let uID;
        let grpLI;
        let dataSource;
        let fieldData;
        if (typeof item !== 'string') {
            fieldData = getFieldValues(item, fields);
            dataSource = item;
            text = fieldData[fields.text] || '';
            uID = fieldData[fields.id];
            grpLI = (item.hasOwnProperty('isHeader') && item.isHeader)
                ? true : false;
        }
        let li = createElement('li', {
            className: (grpLI === true ? cssClass.group : cssClass.li) + ' ' + (isNullOrUndefined(className) ? '' : className),
            attrs: (ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ?
                { role: (grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole) } : {})
        });
        !isNullOrUndefined(uID) ? li.setAttribute('data-uid', uID) : li.setAttribute('data-uid', genUID());
        if (grpLI && options && options.groupTemplate) {
            let compiledString = compile(options.groupTemplate);
            append(compiledString(item), li);
        }
        else if (!grpLI && options && options.template) {
            let compiledString = compile(options.template);
            append(compiledString(item), li);
        }
        else {
            let innerDiv = createElement('div', { className: cssClass.textContent,
                attrs: (ariaAttributes.wrapperRole !== '' ? { role: ariaAttributes.wrapperRole } : {}) });
            if (dataSource && fieldData.hasOwnProperty(fields.url) && fieldData[fields.url]) {
                innerDiv.appendChild(anchorTag(dataSource, fields, text));
            }
            else {
                innerDiv.appendChild(createElement('span', { className: cssClass.text, innerHTML: text,
                    attrs: (ariaAttributes.itemText !== '' ? { role: ariaAttributes.itemText } : {}) }));
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
        let curOpt = extend({}, defaultListBaseOptions, options);
        let ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
        cssClass = getModuleClass(curOpt.moduleName);
        let ulElement = createElement('ul', {
            className: cssClass.ul + ' ' + (isNullOrUndefined(className) ? '' : className),
            attrs: (ariaAttributes.listRole !== '' ? { role: ariaAttributes.listRole } : {})
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
        let curOpt = extend({}, defaultListBaseOptions, options);
        let ariaAttributes = extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
        cssClass = getModuleClass(curOpt.moduleName);
        let expandElement = curOpt.expandIconPosition === 'Left' ? prepend : append;
        expandElement([createElement('div', { className: 'e-icons ' + curOpt.expandIconClass + ' ' +
                    (isNullOrUndefined(className) ? '' : className) })], liElement.querySelector('.' + cssClass.textContent));
        return liElement;
    }
    ListBase.generateIcon = generateIcon;
})(ListBase || (ListBase = {}));
/**
 * Used to get dataSource item from complex data using fields.
 * @param {{[key:string]:Object}|string[]|string} dataSource - Specifies an  JSON or String data.
 * @param {FieldsMapping} fields - Fields that are mapped from the dataSource.
 */
function getFieldValues(dataItem, fields) {
    let fieldData = {};
    let value;
    if (isNullOrUndefined(dataItem)) {
        return dataItem;
    }
    else if (typeof (dataItem) === 'string' || typeof (dataItem) === 'number') {
        return dataItem;
    }
    else if (isNullOrUndefined(dataItem.isHeader)) {
        for (let field of Object.keys(fields)) {
            if (!isNullOrUndefined(fields[field]) &&
                typeof (fields[field]) === 'string') {
                let property = fields[field].split('.');
                let dataField = property.length > 1 ? property[0] : fields[field];
                if (!isNullOrUndefined(dataItem[dataField])) {
                    value = getValue(fields[field], dataItem);
                    if (!isNullOrUndefined(value)) {
                        fieldData[fields[field]] = value;
                    }
                }
            }
        }
    }
    else if (!isNullOrUndefined(dataItem.isHeader) && dataItem.isHeader) {
        fieldData = dataItem;
    }
    return fieldData;
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Effect Configuration Effect[] =  [fromViewBackward,fromViewForward,toViewBackward,toviewForward];
const effectsConfig = {
    'None': [],
    'SlideLeft': ['SlideRightOut', 'SlideLeftOut', 'SlideLeftIn', 'SlideRightIn'],
    'SlideDown': ['SlideTopOut', 'SlideBottomOut', 'SlideBottomIn', 'SlideTopIn'],
    'Zoom': ['FadeOut', 'FadeZoomOut', 'FadeZoomIn', 'FadeIn'],
    'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
};
const effectsRTLConfig = {
    'None': [],
    'SlideLeft': ['SlideLeftOut', 'SlideRightOut', 'SlideRightIn', 'SlideLeftIn'],
    'SlideDown': ['SlideBottomOut', 'SlideTopOut', 'SlideTopIn', 'SlideBottomIn'],
    'Zoom': ['FadeZoomOut', 'FadeOut', 'FadeIn', 'FadeZoomIn'],
    'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
};
// don't use space in classnames.
const classNames = {
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
class FieldSettings extends ChildProperty {
}
__decorate([
    Property('id')
], FieldSettings.prototype, "id", void 0);
__decorate([
    Property('text')
], FieldSettings.prototype, "text", void 0);
__decorate([
    Property('isChecked')
], FieldSettings.prototype, "isChecked", void 0);
__decorate([
    Property('isVisible')
], FieldSettings.prototype, "isVisible", void 0);
__decorate([
    Property('enabled')
], FieldSettings.prototype, "enabled", void 0);
__decorate([
    Property('iconCss')
], FieldSettings.prototype, "iconCss", void 0);
__decorate([
    Property('child')
], FieldSettings.prototype, "child", void 0);
__decorate([
    Property('tooltip')
], FieldSettings.prototype, "tooltip", void 0);
__decorate([
    Property('groupBy')
], FieldSettings.prototype, "groupBy", void 0);
__decorate([
    Property('text')
], FieldSettings.prototype, "sortBy", void 0);
__decorate([
    Property('htmlAttributes')
], FieldSettings.prototype, "htmlAttributes", void 0);
__decorate([
    Property('tableName')
], FieldSettings.prototype, "tableName", void 0);
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
let ListView = class ListView extends Component {
    /**
     * Constructor for creating the widget
     */
    constructor(options, element) {
        super(options, element);
        this.curDSLevel = [];
        this.curViewDS = [];
        this.keyConfigs = {
            moveDown: 'downarrow',
            moveUp: 'uparrow',
            back: 'backspace',
            home: 'home',
            select: 'enter',
            end: 'end',
            tab: 'tab',
            space: 'space'
        };
        this.animateOptions = {};
        this.isNestedList = false;
        this.currentLiElements = [];
        this.resetList = false;
        this.selectedData = [];
        this.selectedId = [];
        this.aniObj = new Animation(this.animateOptions);
    }
    onPropertyChanged(newProp, oldProp) {
        for (let prop of Object.keys(newProp)) {
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
    }
    // Model Changes
    setHTMLAttribute() {
        if (Object.keys(this.htmlAttributes).length) {
            attributes(this.element, this.htmlAttributes);
        }
    }
    setCSSClass(oldCSSClass) {
        if (this.cssClass) {
            addClass([this.element], this.cssClass.split(' '));
        }
        if (oldCSSClass) {
            removeClass([this.element], oldCSSClass.split(' '));
        }
    }
    setSize() {
        this.element.style.height = formatUnit(this.height);
        this.element.style.width = formatUnit(this.width);
    }
    setEnable() {
        this.enableElement(this.element, this.enable);
    }
    setEnableRTL() {
        if (this.enableRtl) {
            this.element.classList.add('e-rtl');
        }
        else {
            this.element.classList.remove('e-rtl');
        }
    }
    enableElement(element, isEnabled) {
        if (isEnabled) {
            element.classList.remove(classNames.disable);
        }
        else {
            element.classList.add(classNames.disable);
        }
    }
    //Suport Component Functions
    header(text, showBack) {
        if (this.headerEle === undefined && this.showHeader) {
            this.headerEle = createElement('div', { className: classNames.header });
            let innerHeaderEle = createElement('span', { className: classNames.headerText, innerHTML: this.headerTitle });
            let textEle = createElement('div', { className: classNames.text, innerHTML: innerHeaderEle.outerHTML });
            let hedBackButton = createElement('div', {
                className: classNames.icon + ' ' + classNames.backIcon + ' e-but-back',
                attrs: { style: 'display:none;' }
            });
            this.headerEle.appendChild(hedBackButton);
            this.headerEle.appendChild(textEle);
            this.element.classList.add('e-has-header');
            prepend([this.headerEle], this.element);
        }
        else if (this.headerEle) {
            if (this.showHeader) {
                this.headerEle.style.display = '';
                let textEle = this.headerEle.querySelector('.' + classNames.headerText);
                let hedBackButton = this.headerEle.querySelector('.' + classNames.backIcon);
                textEle.innerHTML = text;
                if (showBack === true) {
                    hedBackButton.style.display = '';
                }
                else {
                    hedBackButton.style.display = 'none';
                }
            }
            else {
                this.headerEle.style.display = 'none';
            }
        }
    }
    // Animation Related Functions
    switchView(fromView, toView, reverse) {
        if (fromView && toView) {
            let fPos = fromView.style.position;
            let overflow = (this.element.style.overflow !== 'hidden') ? this.element.style.overflow : '';
            fromView.style.position = 'absolute';
            fromView.classList.add('e-view');
            let anim;
            let duration = this.animation.duration;
            if (this.animation.effect) {
                anim = (this.enableRtl ? effectsRTLConfig[this.animation.effect] : effectsConfig[this.animation.effect]);
            }
            else {
                let slideLeft = 'SlideLeft';
                anim = effectsConfig[slideLeft];
                reverse = this.enableRtl;
                duration = 0;
            }
            this.element.style.overflow = 'hidden';
            this.aniObj.animate(fromView, {
                name: (reverse === true ? anim[0] : anim[1]),
                duration: duration,
                timingFunction: this.animation.easing,
                end: (model) => {
                    fromView.style.display = 'none';
                    this.element.style.overflow = overflow;
                    fromView.style.position = fPos;
                    fromView.classList.remove('e-view');
                }
            });
            toView.style.display = '';
            this.aniObj.animate(toView, {
                name: (reverse === true ? anim[2] : anim[3]),
                duration: duration,
                timingFunction: this.animation.easing,
                end: () => {
                    this.trigger('actionComplete');
                }
            });
            this.curUL = toView;
        }
    }
    preRender() {
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
    renderCheckbox(args) {
        if (args.item.classList.contains(classNames.hasChild)) {
            this.isNestedList = true;
        }
        if (this.showCheckBox && this.isValidLI(args.item)) {
            let checkboxElement;
            let fieldData;
            checkboxElement = createCheckBox(false, { checked: false, enableRtl: this.enableRtl,
                cssClass: classNames.listviewCheckbox });
            checkboxElement.setAttribute('role', 'checkbox');
            let frameElement = checkboxElement.querySelector('.' + classNames.checkboxIcon);
            args.item.classList.add(classNames.itemCheckList);
            args.item.firstElementChild.classList.add(classNames.checkbox);
            if (typeof this.dataSource[0] !== 'string') {
                fieldData = getFieldValues(args.curData, this.listBaseOption.fields);
                if (!this.resetList && fieldData[this.listBaseOption.fields.isChecked]) {
                    this.checkInternally(args, checkboxElement);
                }
                else if (this.selectedData.indexOf(fieldData[this.listBaseOption.fields.text]) !== -1 &&
                    this.selectedId.indexOf(fieldData[this.listBaseOption.fields.id]) !== -1) {
                    this.checkInternally(args, checkboxElement);
                }
            }
            else if ((typeof this.dataSource[0] === 'string' && this.selectedData.indexOf(args.text) !== -1)) {
                this.checkInternally(args, checkboxElement);
            }
            checkboxElement.setAttribute('aria-checked', frameElement.classList.contains(classNames.checked) ? 'true' : 'false');
            if (this.checkBoxPosition === 'Left') {
                checkboxElement.classList.add(classNames.checkboxLeft);
                args.item.firstElementChild.classList.add(classNames.checkboxLeft);
                args.item.firstElementChild.insertBefore(checkboxElement, args.item.firstElementChild.childNodes[0]);
            }
            else {
                checkboxElement.classList.add(classNames.checkboxRight);
                args.item.firstElementChild.classList.add(classNames.checkboxRight);
                args.item.firstElementChild.appendChild(checkboxElement);
            }
            this.currentLiElements.push(args.item);
        }
    }
    checkInternally(args, checkboxElement) {
        args.item.classList.add(classNames.selected);
        args.item.setAttribute('aria-selected', 'true');
        checkboxElement.querySelector('.' + classNames.checkboxIcon).classList.add(classNames.checked);
        checkboxElement.setAttribute('aria-checked', 'true');
    }
    /**
     * It is used to check the checkbox of an item.
     * @param  {Fields | HTMLElement} item - It accepts Fields or HTML list element as an argument.
     */
    checkItem(item) {
        this.toggleCheckBase(item, true);
    }
    toggleCheckBase(item, checked) {
        if (this.showCheckBox) {
            let liElement = item;
            if (item instanceof Object && item.constructor !== HTMLLIElement) {
                liElement = this.getLiFromObjOrElement(item);
            }
            if (!isNullOrUndefined(liElement)) {
                let checkboxIcon = liElement.querySelector('.' + classNames.checkboxIcon);
                checked ? liElement.classList.add(classNames.selected) : liElement.classList.remove(classNames.selected);
                liElement.setAttribute('aria-selected', checked ? 'true' : 'false');
                checked ? checkboxIcon.classList.add(classNames.checked) : checkboxIcon.classList.remove(classNames.checked);
                checkboxIcon.parentElement.setAttribute('aria-checked', checked ? 'true' : 'false');
            }
            this.setSelectedItemData(liElement);
        }
    }
    /**
     * It is used to uncheck the checkbox of an item.
     * @param  {Fields | HTMLElement} item - It accepts Fields or HTML list element as an argument.
     */
    unCheckItem(item) {
        this.toggleCheckBase(item, false);
    }
    /**
     * It is used to check all the items in ListView.
     */
    checkAllItem() {
        this.toggleAllCheckBase(true);
    }
    /**
     * It is used to un-check all the items in ListView.
     */
    unCheckAllItem() {
        this.toggleAllCheckBase(false);
    }
    toggleAllCheckBase(checked) {
        if (this.showCheckBox) {
            for (let i = 0; i < this.liCollection.length; i++) {
                let checkIcon = this.liCollection[i].querySelector('.' + classNames.checkboxIcon);
                if (checked) {
                    if (!checkIcon.classList.contains(classNames.checked)) {
                        this.checkItem(this.liCollection[i]);
                    }
                }
                else {
                    if (checkIcon.classList.contains(classNames.checked)) {
                        this.unCheckItem(this.liCollection[i]);
                    }
                }
            }
        }
    }
    setCheckbox() {
        if (this.showCheckBox) {
            let liCollection = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.listItem));
            let args = {
                item: undefined, curData: undefined, dataSource: undefined, fields: undefined,
                options: undefined, text: ''
            };
            liCollection.forEach((element) => {
                args.item = element;
                args.curData = this.getItemData(element);
                if (element.querySelector('.' + classNames.checkboxWrapper)) {
                    this.removeElement(element.querySelector('.' + classNames.checkboxWrapper));
                }
                this.renderCheckbox(args);
                if (args.item.classList.contains(classNames.selected)) {
                    this.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
                }
            });
        }
        else {
            let liCollection = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.itemCheckList));
            liCollection.forEach((element) => {
                element.classList.remove(classNames.selected);
                element.firstElementChild.classList.remove(classNames.checkbox);
                this.removeElement(element.querySelector('.' + classNames.checkboxWrapper));
            });
            if (this.selectedItems) {
                this.selectedItems.item.classList.add(classNames.selected);
            }
        }
    }
    clickHandler(e) {
        let target = e.target;
        let classList = target.classList;
        if (classList.contains(classNames.backIcon) || classList.contains(classNames.headerText)) {
            if (this.showCheckBox && this.curDSLevel[this.curDSLevel.length - 1]) {
                this.unCheckAllItem();
            }
            this.back();
        }
        else {
            let li = closest(target.parentNode, '.' + classNames.listItem);
            if (li === null) {
                li = target;
            }
            this.removeFocus();
            if (this.enable && this.showCheckBox && this.isValidLI(li)) {
                if (e.target.classList.contains(classNames.checkboxIcon)) {
                    li.classList.add(classNames.focused);
                    if (isNullOrUndefined(li.querySelector('.' + classNames.checked))) {
                        let args = { curData: undefined, dataSource: undefined, fields: undefined, options: undefined,
                            text: undefined, item: li };
                        this.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
                    }
                    else {
                        this.unCheckItem(li);
                        li.classList.add(classNames.focused);
                    }
                    if (e) {
                        let eventArgs = this.selectEventData(li, e);
                        let checkIcon = li.querySelector('.' + classNames.checkboxIcon);
                        merge(eventArgs, { isChecked: checkIcon.classList.contains(classNames.checked) });
                        this.trigger('select', eventArgs);
                    }
                }
                else if (li.classList.contains(classNames.hasChild)) {
                    this.removeHover();
                    this.removeSelect();
                    this.removeSelect(li);
                    this.setSelectLI(li, e);
                    li.classList.remove(classNames.selected);
                }
                else {
                    this.setCheckboxLI(li, e);
                }
            }
            else {
                this.setSelectLI(li, e);
            }
        }
    }
    removeElement(element) {
        return element && element.parentNode && element.parentNode.removeChild(element);
    }
    hoverHandler(e) {
        let curLi = closest(e.target.parentNode, '.' + classNames.listItem);
        this.setHoverLI(curLi);
    }
    leaveHandler(e) {
        this.removeHover();
    }
    ;
    homeKeyHandler(e, end) {
        let li = this.curUL.querySelectorAll('.' + classNames.listItem);
        let focusedElement = this.curUL.querySelector('.' + classNames.focused) ||
            this.curUL.querySelector('.' + classNames.selected);
        if (focusedElement) {
            focusedElement.classList.remove(classNames.focused);
            if (!this.showCheckBox) {
                focusedElement.classList.remove(classNames.selected);
            }
        }
        let index = !end ? 0 : li.length - 1;
        if (li[index].classList.contains(classNames.hasChild) || this.showCheckBox) {
            li[index].classList.add(classNames.focused);
        }
        else {
            this.setSelectLI(li[index], e);
        }
    }
    arrowKeyHandler(e, prev) {
        let siblingLI;
        let li;
        let hasChild = !isNullOrUndefined(this.curUL.querySelector('.' + classNames.hasChild)) ? true : false;
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
                }
                else {
                    this.setSelectLI(siblingLI, e);
                }
            }
        }
        else {
            li = this.curUL.querySelector('.' + classNames.selected);
            siblingLI = ListBase.getSiblingLI(this.curUL.querySelectorAll('.' + classNames.listItem), li, prev);
            this.setSelectLI(siblingLI, e);
        }
    }
    enterKeyHandler(e) {
        let hasChild = !isNullOrUndefined(this.curUL.querySelector('.' + classNames.hasChild)) ? true : false;
        let li = this.curUL.querySelector('.' + classNames.focused);
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
    spaceKeyHandler(e) {
        if (this.enable && this.showCheckBox) {
            let li = this.curUL.querySelector('.' + classNames.focused);
            if (!isNullOrUndefined(li) && isNullOrUndefined(li.querySelector('.' + classNames.checked))) {
                let args = { curData: undefined, dataSource: undefined, fields: undefined, options: undefined,
                    text: undefined, item: li };
                this.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
            }
            else {
                this.unCheckItem(li);
            }
        }
    }
    keyActionHandler(e) {
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
    swipeActionHandler(e) {
        if (e.swipeDirection === 'Right') {
            if (this.showCheckBox && this.curDSLevel[this.curDSLevel.length - 1]) {
                this.unCheckAllItem();
            }
            this.back();
        }
    }
    focusout() {
        let focusedElement = this.curUL.querySelector('.' + classNames.focused);
        let activeElement = this.curUL.querySelector('[aria-selected = true]');
        if (focusedElement && !this.showCheckBox) {
            focusedElement.classList.remove(classNames.focused);
            if (activeElement) {
                activeElement.classList.add(classNames.selected);
            }
        }
    }
    wireEvents() {
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
    unWireEvents() {
        EventHandler.remove(this.element, 'click', this.clickHandler);
        EventHandler.remove(this.element, 'mouseover', this.hoverHandler);
        EventHandler.remove(this.element, 'mouseout', this.leaveHandler);
        this.keyboardModule.destroy();
        this.touchModule.destroy();
    }
    tabFocus(e) {
        let selectedList = this.curUL.querySelector('.' + classNames.selected);
        if ((!selectedList && this.curUL) || this.showCheckBox) {
            let li = this.curUL.querySelector('.' + classNames.listItem);
            if (li.classList.contains(classNames.hasChild) || this.showCheckBox) {
                let focusedElement = this.curUL.querySelector('.' + classNames.focused);
                if (isNullOrUndefined(focusedElement)) {
                    li.classList.add(classNames.focused);
                }
            }
            else {
                this.setSelectLI(li, e);
            }
        }
    }
    removeFocus() {
        let focusedLI = this.element.querySelectorAll('.' + classNames.focused);
        for (let ele of focusedLI) {
            ele.classList.remove(classNames.focused);
        }
    }
    removeHover() {
        let hoverLI = this.element.querySelector('.' + classNames.hover);
        if (hoverLI) {
            hoverLI.classList.remove(classNames.hover);
        }
    }
    removeSelect(li) {
        if (isNullOrUndefined(li)) {
            let selectedLI = this.element.querySelectorAll('.' + classNames.selected);
            for (let ele of selectedLI) {
                if (this.showCheckBox && ele.querySelector('.' + classNames.checked)) {
                    continue;
                }
                else {
                    ele.setAttribute('aria-selected', 'false');
                    ele.classList.remove(classNames.selected);
                }
            }
        }
        else {
            li.classList.remove(classNames.selected);
            li.setAttribute('aria-selected', 'false');
        }
    }
    isValidLI(li) {
        return (li && li.classList.contains(classNames.listItem)
            && !li.classList.contains(classNames.grpListItem)
            && !li.classList.contains(classNames.disable));
    }
    setCheckboxLI(li, e) {
        if (this.isValidLI(li) && this.enable && this.showCheckBox) {
            if (this.curUL.querySelector('.' + classNames.focused)) {
                this.curUL.querySelector('.' + classNames.focused).classList.remove(classNames.focused);
            }
            li.classList.add(classNames.focused);
            let checkboxElement = li.querySelector('.' + classNames.checkboxWrapper);
            let checkIcon = checkboxElement.querySelector('.' + classNames.checkboxIcon + '.' + classNames.icon);
            this.removeHover();
            if (!checkIcon.classList.contains(classNames.checked)) {
                checkIcon.classList.add(classNames.checked);
                li.classList.add(classNames.selected);
                li.setAttribute('aria-selected', 'true');
            }
            else {
                checkIcon.classList.remove(classNames.checked);
                li.classList.remove(classNames.selected);
                li.setAttribute('aria-selected', 'false');
            }
            checkboxElement.setAttribute('aria-checked', checkIcon.classList.contains(classNames.checked) ?
                'true' : 'false');
            if (e) {
                let eventArgs = this.selectEventData(li, e);
                merge(eventArgs, { isChecked: checkIcon.classList.contains(classNames.checked) });
                this.trigger('select', eventArgs);
            }
            this.setSelectedItemData(li);
            this.renderSubList(li);
        }
    }
    selectEventData(li, e) {
        let data = this.getItemData(li);
        let fieldData = getFieldValues(data, this.listBaseOption.fields);
        let selectedItem;
        if (isNullOrUndefined(data) && typeof this.dataSource[0] === 'string') {
            selectedItem = { item: li, text: li.innerText.trim(), data: this.dataSource };
        }
        else {
            selectedItem = { item: li, text: fieldData[this.listBaseOption.fields.text], data: data };
        }
        let eventArgs = {};
        merge(eventArgs, selectedItem);
        if (e) {
            merge(eventArgs, { isInteracted: true, event: e, index: Array.prototype.indexOf.call(this.curUL.children, li) });
        }
        return eventArgs;
    }
    setSelectedItemData(li) {
        let data = this.getItemData(li);
        let fieldData = getFieldValues(data, this.listBaseOption.fields);
        if (isNullOrUndefined(data) && (typeof this.dataSource[0] === 'string')) {
            this.selectedItems = {
                item: li,
                text: li.innerText.trim(),
                data: this.dataSource
            };
        }
        else {
            this.selectedItems = {
                item: li,
                text: fieldData[this.listBaseOption.fields.text],
                data: data
            };
        }
    }
    setSelectLI(li, e) {
        if (this.isValidLI(li) && !li.classList.contains(classNames.selected) && this.enable) {
            if (!this.showCheckBox) {
                this.removeSelect();
            }
            li.classList.add(classNames.selected);
            li.classList.add(classNames.focused);
            li.setAttribute('aria-selected', 'true');
            this.removeHover();
            this.setSelectedItemData(li);
            let eventArgs = this.selectEventData(li, e);
            this.trigger('select', eventArgs);
            this.selectedLI = li;
            this.renderSubList(li);
        }
    }
    setHoverLI(li) {
        if (this.isValidLI(li) && !li.classList.contains(classNames.hover) && this.enable) {
            let lastLi = this.element.querySelectorAll('.' + classNames.hover);
            if (lastLi && lastLi.length) {
                removeClass(lastLi, classNames.hover);
            }
            if (!li.classList.contains(classNames.selected) || this.showCheckBox) {
                li.classList.add(classNames.hover);
            }
        }
    }
    hoverSiblingLI(prev) {
        let lastLi = this.curUL.querySelector('.' + classNames.hover);
        let siblingLI;
        if (!lastLi) {
            lastLi = this.curUL.querySelector('.' + classNames.selected);
        }
        if (lastLi) {
            siblingLI = ListBase.getSiblingLI(this.curUL.querySelectorAll('.' + classNames.listItem), lastLi, prev);
        }
        else {
            if (prev) {
                let curLIs = this.curUL.querySelectorAll('.' + classNames.listItem);
                siblingLI = curLIs[curLIs.length - 1];
            }
            else {
                siblingLI = this.curUL.querySelector('.' + classNames.listItem);
            }
        }
        this.setHoverLI(siblingLI);
    }
    //Data Source Related Functions
    getSubDS() {
        let levelKeys = this.curDSLevel;
        if (levelKeys.length) {
            let ds = this.localData;
            for (let key of levelKeys) {
                this.curDSJSON = this.findItemFromDS(ds, { id: key });
                let fieldData = getFieldValues(this.curDSJSON, this.listBaseOption.fields);
                ds = this.curDSJSON ? fieldData[this.fields.child] : ds;
            }
            return ds;
        }
        return this.localData;
    }
    getItemData(li) {
        let fields = this.getElementUID(li);
        let curDS = this.dataSource;
        return this.findItemFromDS(curDS, fields);
    }
    findItemFromDS(dataSource, fields, parent) {
        let resultJSON;
        if (dataSource && dataSource.length && fields) {
            dataSource.some((data) => {
                let fieldData = getFieldValues(data, this.listBaseOption.fields);
                //(!(fid) || id === fid) && (!(ftext) || text === ftext) && (!!fid || !!ftext)
                if ((fields.id || fields.text) &&
                    (!fields.id || fieldData[this.fields.id] === fields.id) &&
                    (!fields.text || fieldData[this.fields.text] === fields.text)) {
                    resultJSON = (parent ? dataSource : data);
                }
                else if (!isNullOrUndefined(fields.id) && isNullOrUndefined(fieldData[this.fields.id])) {
                    let li = this.element.querySelector('[data-uid="'
                        + fields.id + '"]');
                    if (li.innerText.trim() === fieldData[this.fields.text]) {
                        resultJSON = data;
                    }
                }
                else if (fieldData.hasOwnProperty(this.fields.child) && fieldData[this.fields.child].length) {
                    resultJSON = this.findItemFromDS(fieldData[this.fields.child], fields, parent);
                }
                return !!resultJSON;
            });
        }
        else {
            resultJSON = dataSource;
        }
        return resultJSON;
    }
    getQuery() {
        let columns = [];
        let query = (this.query ? this.query : new Query());
        if (!this.query) {
            for (let column of Object.keys(this.fields.properties)) {
                if (column !== 'tableName' && !!(this.fields[column]) &&
                    this.fields[column] !==
                        ListBase.defaultMappedFields[column]
                    && columns.indexOf(this.fields[column]) === -1) {
                    columns.push(this.fields[column]);
                }
            }
            query.select(columns);
            if (this.fields.properties.hasOwnProperty('tableName')) {
                query.from(this.fields.tableName);
            }
        }
        return query;
    }
    setViewDataSource(dataSource = this.localData) {
        if (dataSource && this.fields.groupBy) {
            this.curViewDS = ListBase.groupDataSource(dataSource, this.fields, this.sortOrder);
        }
        else if (dataSource && this.sortOrder !== 'None') {
            this.curViewDS = ListBase.getDataSource(dataSource, ListBase.addSorting(this.sortOrder, this.fields.sortBy));
        }
        else {
            this.curViewDS = dataSource;
        }
    }
    isInAnimation() {
        return this.curUL.classList.contains('.e-animate');
    }
    setLocalData() {
        this.trigger('actionBegin');
        if (this.dataSource instanceof DataManager) {
            this.dataSource.executeQuery(this.getQuery()).then((e) => {
                if (this.isDestroyed) {
                    return;
                }
                this.localData = e.result;
                this.renderList();
                this.trigger('actionComplete', e);
            }).catch((e) => {
                if (this.isDestroyed) {
                    return;
                }
                this.trigger('actionFailure', e);
            });
        }
        else if (!this.dataSource || !this.dataSource.length) {
            let ul = this.element.querySelector('ul');
            if (ul) {
                remove(ul);
                this.setProperties({ dataSource: ListBase.createJsonFromElement(ul) }, true);
                this.localData = this.dataSource;
                this.renderList();
                this.trigger('actionComplete', { data: this.localData });
            }
        }
        else {
            this.localData = this.dataSource;
            this.renderList();
            this.trigger('actionComplete', { data: this.localData });
        }
    }
    reRender() {
        this.element.innerHTML = '';
        this.curUL = this.headerEle = undefined;
        this.setLocalData();
        this.header();
    }
    resetCurrentList() {
        this.setViewDataSource(this.curViewDS);
        this.contentContainer.innerHTML = '';
        this.createList();
        this.renderIntoDom(this.curUL);
    }
    createList() {
        this.currentLiElements = [];
        this.isNestedList = false;
        this.ulElement = this.curUL = ListBase.createList(this.curViewDS, this.listBaseOption);
        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
    }
    renderSubList(li) {
        let uID = li.getAttribute('data-uid');
        if (li.classList.contains(classNames.hasChild) && uID) {
            let ul = closest(li.parentNode, '.' + classNames.parentItem);
            let ele = this.element.querySelector('[pid=\'' + uID + '\']');
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
            let fieldData = getFieldValues(this.selectedItems.data, this.listBaseOption.fields);
            this.header((fieldData[this.listBaseOption.fields.text]), true);
            this.selectedLI = undefined;
        }
    }
    renderIntoDom(ele) {
        this.contentContainer.appendChild(ele);
    }
    renderList() {
        this.setViewDataSource();
        this.createList();
        this.contentContainer = createElement('div', { className: classNames.content });
        this.element.appendChild(this.contentContainer);
        this.renderIntoDom(this.ulElement);
    }
    getElementUID(obj) {
        let fields = {};
        if (obj instanceof Element) {
            fields.id = obj.getAttribute('data-uid');
        }
        else {
            fields = obj;
        }
        return fields;
    }
    /**
     * It is used to Initialize the control rendering.
     */
    render() {
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
    /**
     * It is used to destroy the ListView component.
     */
    destroy() {
        this.unWireEvents();
        let classAr = [classNames.root, this.cssClass, classNames.disable, 'e-rtl',
            'e-has-header'];
        removeClass([this.element], classAr);
        this.rippleFn();
        super.destroy();
    }
    /**
     * It helps to switch back from navigated sub list.
     */
    back() {
        let pID = this.curDSLevel[this.curDSLevel.length - 1];
        if (pID === undefined || this.isInAnimation()) {
            return;
        }
        this.curDSLevel.pop();
        this.setViewDataSource(this.getSubDS());
        let toUL = this.element.querySelector('[data-uid=\'' + pID + '\']');
        let fromUL = this.curUL;
        if (!toUL) {
            this.createList();
            this.renderIntoDom(this.ulElement);
            toUL = this.curUL;
        }
        else {
            toUL = toUL.parentElement;
        }
        let fieldData = getFieldValues(this.curDSJSON, this.listBaseOption.fields);
        let text = fieldData[this.fields.text];
        this.switchView(fromUL, toUL, true);
        this.removeFocus();
        let li = this.element.querySelector('[data-uid=\'' + pID + '\']');
        li.classList.add(classNames.focused);
        if (this.showCheckBox && li.querySelector('.' + classNames.checkboxIcon).classList.contains(classNames.checked)) {
            li.setAttribute('aria-selected', 'true');
        }
        else {
            li.classList.remove(classNames.selected);
            li.setAttribute('aria-selected', 'false');
        }
        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
        this.header((this.curDSLevel.length ? text : this.headerTitle), (this.curDSLevel.length ? true : false));
    }
    /**
     * It is used to select the list item from the ListView.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    selectItem(obj) {
        if (!isNullOrUndefined(obj)) {
            if (this.showCheckBox) {
                this.setCheckboxLI(this.getLiFromObjOrElement(obj));
            }
            else {
                this.setSelectLI(this.getLiFromObjOrElement(obj));
            }
        }
    }
    getLiFromObjOrElement(obj) {
        let li;
        if (!isNullOrUndefined(obj)) {
            if (typeof this.dataSource[0] === 'string') {
                if (obj instanceof Object && obj.constructor === HTMLLIElement) {
                    let uid = obj.getAttribute('data-uid').toString();
                    for (let i = 0; i < this.liCollection.length; i++) {
                        if (this.liCollection[i].getAttribute('data-uid').toString() === uid) {
                            li = this.liCollection[i];
                            break;
                        }
                    }
                }
            }
            else {
                let resultJSON = this.getItemData(obj);
                let fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
                if (resultJSON) {
                    li = this.element.querySelector('[data-uid="'
                        + fieldData[this.fields.id] + '"]');
                    if (isNullOrUndefined(li)) {
                        let curLi = this.element.querySelectorAll('.' + classNames.listItem);
                        for (let i = 0; i < curLi.length; i++) {
                            if (curLi[i].innerText.trim() === resultJSON.text) {
                                li = curLi[i];
                            }
                        }
                    }
                }
            }
        }
        return li;
    }
    selectMultipleItems(obj) {
        if (!isNullOrUndefined(obj)) {
            for (let i = 0; i < obj.length; i++) {
                if (!isNullOrUndefined(obj[i])) {
                    this.selectItem(obj[i]);
                }
            }
        }
    }
    getParentId() {
        let parentId = [];
        if (this.isNestedList) {
            for (let i = this.curDSLevel.length - 1; i >= 0; i--) {
                parentId.push(this.curDSLevel[i]);
            }
        }
        return parentId;
    }
    /**
     * It is used to get the currently
     *  {@link http://ej2.syncfusion.com/documentation/list-view/api-selectedItem.html?lang=typescript selected}
     *  item details from the list items.
     */
    getSelectedItems() {
        this.selectedId = [];
        if (this.showCheckBox) {
            let liCollection = this.curUL.getElementsByClassName(classNames.selected);
            let liTextCollection = [];
            let liDataCollection = [];
            this.selectedId = [];
            let dataParent = [];
            for (let i = 0; i < liCollection.length; i++) {
                if (typeof this.dataSource[0] === 'string') {
                    liTextCollection.push(liCollection[i].innerText.trim());
                }
                else {
                    let tempData = this.getItemData(liCollection[i]);
                    let fieldData = getFieldValues(tempData, this.listBaseOption.fields);
                    if (this.isNestedList) {
                        dataParent.push({ data: tempData, parentId: this.getParentId() });
                    }
                    else {
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
            }
            else {
                return { item: liCollection, data: liDataCollection, text: liTextCollection };
            }
        }
        else {
            let liElement = this.element.getElementsByClassName(classNames.selected)[0];
            let fieldData = getFieldValues(this.getItemData(liElement), this.listBaseOption.fields);
            if (typeof this.dataSource[0] === 'string') {
                return (!isNullOrUndefined(liElement)) ? {
                    item: liElement, data: this.dataSource,
                    text: liElement.innerText.trim()
                } : undefined;
            }
            else {
                if (isNullOrUndefined(fieldData) || isNullOrUndefined(liElement)) {
                    return undefined;
                }
                else {
                    this.selectedId.push(fieldData[this.listBaseOption.fields.id]);
                    return {
                        text: fieldData[this.listBaseOption.fields.text], item: liElement,
                        data: this.getItemData(liElement)
                    };
                }
            }
        }
    }
    /**
     * It is used to find out an item details from the current list.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    findItem(obj) {
        return this.getItemData(obj);
    }
    /**
     * A function that used to enable the disabled list items based on passed element.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    enableItem(obj) {
        this.setItemState(obj, true);
    }
    /**
     * It is used to disable the list items based on passed element.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    disableItem(obj) {
        this.setItemState(obj, false);
    }
    //A function that used to set state of the list item like enable, disable.
    setItemState(obj, isEnable) {
        let resultJSON = this.getItemData(obj);
        let fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
        if (resultJSON) {
            let li = this.element.querySelector('[data-uid="' + fieldData[this.fields.id] + '"]');
            if (isEnable) {
                if (li) {
                    li.classList.remove(classNames.disable);
                }
                delete resultJSON[this.fields.enabled];
            }
            else if (!isEnable) {
                if (li) {
                    li.classList.add(classNames.disable);
                }
                resultJSON[this.fields.enabled] = false;
            }
        }
    }
    /**
     * It is used to show an list item from the ListView.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    showItem(obj) {
        this.showHideItem(obj, false, '');
    }
    /**
     * It is used to hide an item from the ListView.
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    hideItem(obj) {
        this.showHideItem(obj, true, 'none');
    }
    showHideItem(obj, isHide, display) {
        let resultJSON = this.getItemData(obj);
        let fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
        if (resultJSON) {
            let li = this.element.querySelector('[data-uid="' + fieldData[this.fields.id] + '"]');
            if (li) {
                li.style.display = display;
            }
            if (isHide) {
                resultJSON[this.fields.isVisible] = false;
            }
            else {
                delete resultJSON[this.fields.isVisible];
            }
        }
    }
    /**
     * It adds new item to current ListView.
     * To add a new item in the list view, we need to pass ‘data’ as array or object and ‘fields’ as object.
     * For example fields: { text: 'Name', tooltip: 'Name', id:'id'}
     * @param  {{[key:string]:Object}[]} data - Array JSON Data that need to add.
     * @param  {Fields} fields - Fields as an Object with ID and Text fields.
     */
    addItem(data, fields) {
        let ds = this.findItemFromDS(this.dataSource, fields);
        let fieldData = getFieldValues(ds, this.listBaseOption.fields);
        let child = fieldData[this.fields.child];
        if (!child) {
            child = [];
        }
        child = child.concat(data);
        if (ds instanceof Array) {
            this.dataSource = this.localData = ds.concat(data);
            this.setViewDataSource();
        }
        else {
            ds[this.fields.child] = child;
        }
        this.resetCurrentList();
    }
    /**
     * A function that removes the item from data source based on passed element like fields: { text: 'Name', tooltip: 'Name', id:'id'}
     * @param  {Fields|HTMLElement} obj - We can pass element Object or Fields as Object with ID and Text fields.
     */
    removeItem(obj) {
        this.removeItemFromList(obj, true);
    }
    removeItemFromList(obj, resetList) {
        let selectedElements = [];
        let valid = false;
        if (typeof this.dataSource[0] === 'string') {
            if (typeof obj === 'object') {
                let liCollection = [];
                let idx = 0;
                this.liCollection.forEach((element) => {
                    if (element === obj) {
                        valid = true;
                        this.removeElement(element);
                        this.dataSource.splice(idx, 1);
                        this.localData = this.dataSource;
                    }
                    else {
                        liCollection.push(element);
                    }
                    idx++;
                });
                this.liCollection = liCollection;
            }
            else if (typeof obj === 'string') {
                let liCollection = [];
                let idx = 0;
                let ds = [];
                this.liCollection.forEach((element) => {
                    if (element.innerText.trim() === obj) {
                        valid = true;
                        this.removeElement(element);
                    }
                    else {
                        liCollection.push(element);
                        ds.push(this.dataSource[idx]);
                    }
                    idx++;
                });
                this.localData = this.curViewDS = this.dataSource = ds;
                this.liCollection = liCollection;
            }
            let values = this.getSelectedItems();
            this.selectedData = (!isNullOrUndefined(values)) ? values.text : undefined;
            selectedElements = undefined;
            if (resetList && valid) {
                this.resetList = true;
                this.resetCurrentList();
                if (!this.showCheckBox && this.selectedData && this.selectedData.length) {
                    this.removeSelect();
                    let index = this.dataSource.lastIndexOf(this.selectedData);
                    this.liCollection[index].classList.add(classNames.selected);
                    this.liCollection[index].setAttribute('aria-selected', 'true');
                }
                this.resetList = false;
            }
        }
        else {
            selectedElements = (!isNullOrUndefined(this.getSelectedItems())) ?
                this.getSelectedItems().data : undefined;
            let fields = this.getElementUID(obj);
            let curAr;
            let curDS = this.findItemFromDS(this.dataSource, fields, true);
            if (curDS && obj) {
                let idx;
                curDS.some((data, index, arr) => {
                    let fieldData = getFieldValues(data, this.listBaseOption.fields);
                    if ((fields.id || fields.text) &&
                        (!fields.id || fieldData[this.fields.id] === fields.id) &&
                        (!fields.text || fieldData[this.fields.text] === fields.text)) {
                        curAr = arr;
                        idx = index;
                        return true;
                    }
                    return false;
                });
                this.removeElement(this.getLiFromObjOrElement(curAr[idx]));
                curAr.splice(idx, 1);
                this.curViewDS = curAr;
            }
            let values = this.getSelectedItems();
            this.selectedData = (!isNullOrUndefined(values)) ? values.text : undefined;
            if (resetList && curAr) {
                this.resetList = true;
                this.resetCurrentList();
                if (!this.showCheckBox && !isNullOrUndefined(values)) {
                    this.selectItem(values.item);
                }
                this.resetList = false;
            }
        }
    }
    /**
     * A function that removes multiple item from list view based on given input.
     * @param  {Fields[] | HTMLElement[]} obj - We can pass array of elements or array of field Object with ID and Text fields.
     */
    removeMultipleItems(obj) {
        if (obj.length) {
            for (let i = 0; i < obj.length; i++) {
                (i === obj.length - 1) ? this.removeItemFromList(obj[i], true) : this.removeItemFromList(obj[i], false);
            }
        }
    }
    // Module Required function
    getModuleName() {
        return 'listview';
    }
    /**
     * Get the properties to be maintained in the persisted state.
     */
    getPersistData() {
        return this.addOnPersist(['cssClass', 'enableRtl', 'htmlAttributes',
            'enable', 'fields', 'animation', 'headerTitle',
            'sortOrder', 'showIcon', 'height', 'width', 'showCheckBox', 'checkBoxPosition']);
    }
};
__decorate([
    Property()
], ListView.prototype, "cssClass", void 0);
__decorate([
    Property({})
], ListView.prototype, "htmlAttributes", void 0);
__decorate([
    Property(true)
], ListView.prototype, "enable", void 0);
__decorate([
    Property([])
], ListView.prototype, "dataSource", void 0);
__decorate([
    Property()
], ListView.prototype, "query", void 0);
__decorate([
    Complex(ListBase.defaultMappedFields, FieldSettings)
], ListView.prototype, "fields", void 0);
__decorate([
    Property({ effect: 'SlideLeft', duration: 400, easing: 'ease' })
], ListView.prototype, "animation", void 0);
__decorate([
    Property('None')
], ListView.prototype, "sortOrder", void 0);
__decorate([
    Property(false)
], ListView.prototype, "showIcon", void 0);
__decorate([
    Property(false)
], ListView.prototype, "showCheckBox", void 0);
__decorate([
    Property('Left')
], ListView.prototype, "checkBoxPosition", void 0);
__decorate([
    Property('')
], ListView.prototype, "headerTitle", void 0);
__decorate([
    Property(false)
], ListView.prototype, "showHeader", void 0);
__decorate([
    Property('')
], ListView.prototype, "height", void 0);
__decorate([
    Property('')
], ListView.prototype, "width", void 0);
__decorate([
    Property(null)
], ListView.prototype, "template", void 0);
__decorate([
    Property(null)
], ListView.prototype, "groupTemplate", void 0);
__decorate([
    Event()
], ListView.prototype, "select", void 0);
__decorate([
    Event()
], ListView.prototype, "actionBegin", void 0);
__decorate([
    Event()
], ListView.prototype, "actionComplete", void 0);
__decorate([
    Event()
], ListView.prototype, "actionFailure", void 0);
ListView = __decorate([
    NotifyPropertyChanges
], ListView);

/**
 * Listview Component
 */

/**
 * Listview Component
 */

/**
 * List Components
 */

export { FieldSettings, ListView, cssClass, ListBase, getFieldValues };
//# sourceMappingURL=ej2-lists.es2015.js.map
