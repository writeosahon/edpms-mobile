'use strict';

System.register(['@syncfusion/ej2-base'], function (_export, _context) {
    "use strict";

    var Ajax, extend, getValue, isNullOrUndefined, merge, setValue, _get, _typeof, _createClass, Query, Predicate, consts, DataUtil, Adaptor, JsonAdaptor, UrlAdaptor, ODataAdaptor, ODataV4Adaptor, WebApiAdaptor, WebMethodAdaptor, RemoteSaveAdaptor, CacheAdaptor, DataManager, Deferred;

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

    return {
        setters: [function (_syncfusionEj2Base) {
            Ajax = _syncfusionEj2Base.Ajax;
            extend = _syncfusionEj2Base.extend;
            getValue = _syncfusionEj2Base.getValue;
            isNullOrUndefined = _syncfusionEj2Base.isNullOrUndefined;
            merge = _syncfusionEj2Base.merge;
            setValue = _syncfusionEj2Base.setValue;
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

            _export('Query', Query = function () {
                /**
                 * Constructor for Query class.
                 * @param  {string|string[]} from?
                 * @hidden
                 */
                function Query(from) {
                    _classCallCheck(this, Query);

                    /** @hidden */
                    this.subQuery = null;
                    /** @hidden */
                    this.isChild = false;
                    this.queries = [];
                    this.key = '';
                    this.fKey = '';
                    if (typeof from === 'string') {
                        this.fromTable = from;
                    } else if (from && from instanceof Array) {
                        this.lookups = from;
                    }
                    this.expands = [];
                    this.sortedColumns = [];
                    this.groupedColumns = [];
                    this.subQuery = null;
                    this.isChild = false;
                    this.params = [];
                    return this;
                }
                /**
                 * Sets the primary key.
                 * @param  {string} field - Defines the column field.
                 */


                _createClass(Query, [{
                    key: 'setKey',
                    value: function setKey(field) {
                        this.key = field;
                        return this;
                    }
                }, {
                    key: 'using',
                    value: function using(dataManager) {
                        this.dataManager = dataManager;
                        return this;
                    }
                }, {
                    key: 'execute',
                    value: function execute(dataManager, done, fail, always) {
                        dataManager = dataManager || this.dataManager;
                        if (dataManager) {
                            return dataManager.executeQuery(this, done, fail, always);
                        }
                        return DataUtil.throwError('Query - execute() : dataManager needs to be is set using "using" function or should be passed as argument');
                    }
                }, {
                    key: 'executeLocal',
                    value: function executeLocal(dataManager) {
                        dataManager = dataManager || this.dataManager;
                        if (dataManager) {
                            return dataManager.executeLocal(this);
                        }
                        return DataUtil.throwError('Query - executeLocal() : dataManager needs to be is set using "using" function or should be passed as argument');
                    }
                }, {
                    key: 'clone',
                    value: function clone() {
                        var cloned = new Query();
                        cloned.queries = this.queries.slice(0);
                        cloned.key = this.key;
                        cloned.isChild = this.isChild;
                        cloned.dataManager = this.dataManager;
                        cloned.fromTable = this.fromTable;
                        cloned.params = this.params.slice(0);
                        cloned.expands = this.expands.slice(0);
                        cloned.sortedColumns = this.sortedColumns.slice(0);
                        cloned.groupedColumns = this.groupedColumns.slice(0);
                        cloned.subQuerySelector = this.subQuerySelector;
                        cloned.subQuery = this.subQuery;
                        cloned.fKey = this.fKey;
                        cloned.isCountRequired = this.isCountRequired;
                        return cloned;
                    }
                }, {
                    key: 'from',
                    value: function from(tableName) {
                        this.fromTable = tableName;
                        return this;
                    }
                }, {
                    key: 'addParams',
                    value: function addParams(key, value) {
                        if (typeof value === 'function') {
                            this.params.push({ key: key, fn: value });
                        } else {
                            this.params.push({ key: key, value: value });
                        }
                        return this;
                    }
                }, {
                    key: 'expand',
                    value: function expand(tables) {
                        if (typeof tables === 'string') {
                            this.expands = [].slice.call([tables], 0);
                        } else {
                            this.expands = tables.slice(0);
                        }
                        return this;
                    }
                }, {
                    key: 'where',
                    value: function where(fieldName, operator, value, ignoreCase, ignoreAccent) {
                        operator = operator ? operator.toLowerCase() : null;
                        var predicate = null;
                        if (typeof fieldName === 'string') {
                            predicate = new Predicate(fieldName, operator, value, ignoreCase, ignoreAccent);
                        } else if (fieldName instanceof Predicate) {
                            predicate = fieldName;
                        }
                        this.queries.push({
                            fn: 'onWhere',
                            e: predicate
                        });
                        return this;
                    }
                }, {
                    key: 'search',
                    value: function search(searchKey, fieldNames, operator, ignoreCase, ignoreAccent) {
                        if (typeof fieldNames === 'string') {
                            fieldNames = [fieldNames];
                        }
                        operator = operator || 'contains';
                        var comparer = DataUtil.fnOperators[operator];
                        this.queries.push({
                            fn: 'onSearch',
                            e: {
                                fieldNames: fieldNames,
                                operator: operator,
                                searchKey: searchKey,
                                ignoreCase: ignoreCase,
                                ignoreAccent: ignoreAccent,
                                comparer: comparer
                            }
                        });
                        return this;
                    }
                }, {
                    key: 'sortBy',
                    value: function sortBy(fieldName, comparer, isFromGroup) {
                        var order = 'ascending';
                        var sorts = void 0;
                        var temp = void 0;
                        if (typeof fieldName === 'string' && DataUtil.endsWith(fieldName.toLowerCase(), ' desc')) {
                            fieldName = fieldName.replace(/ desc$/i, '');
                            comparer = 'descending';
                        }
                        if (!comparer || typeof comparer === 'string') {
                            order = comparer ? comparer.toLowerCase() : 'ascending';
                            comparer = DataUtil.fnSort(comparer);
                        }
                        if (isFromGroup) {
                            sorts = Query.filterQueries(this.queries, 'onSortBy');
                            for (var i = 0; i < sorts.length; i++) {
                                temp = sorts[i].e.fieldName;
                                if (typeof temp === 'string') {
                                    if (temp === fieldName) {
                                        return this;
                                    }
                                } else if (temp instanceof Array) {
                                    for (var j = 0; j < temp.length; j++) {
                                        if (temp[j] === fieldName || fieldName.toLowerCase() === temp[j] + ' desc') {
                                            return this;
                                        }
                                    }
                                }
                            }
                        }
                        this.queries.push({
                            fn: 'onSortBy',
                            e: {
                                fieldName: fieldName,
                                comparer: comparer,
                                direction: order
                            }
                        });
                        return this;
                    }
                }, {
                    key: 'sortByDesc',
                    value: function sortByDesc(fieldName) {
                        return this.sortBy(fieldName, 'descending');
                    }
                }, {
                    key: 'group',
                    value: function group(fieldName, fn, format) {
                        this.sortBy(fieldName, null, true);
                        this.queries.push({
                            fn: 'onGroup',
                            e: {
                                fieldName: fieldName,
                                comparer: fn ? fn : null,
                                format: format ? format : null
                            }
                        });
                        return this;
                    }
                }, {
                    key: 'page',
                    value: function page(pageIndex, pageSize) {
                        this.queries.push({
                            fn: 'onPage',
                            e: {
                                pageIndex: pageIndex,
                                pageSize: pageSize
                            }
                        });
                        return this;
                    }
                }, {
                    key: 'range',
                    value: function range(start, end) {
                        this.queries.push({
                            fn: 'onRange',
                            e: {
                                start: start,
                                end: end
                            }
                        });
                        return this;
                    }
                }, {
                    key: 'take',
                    value: function take(nos) {
                        this.queries.push({
                            fn: 'onTake',
                            e: {
                                nos: nos
                            }
                        });
                        return this;
                    }
                }, {
                    key: 'skip',
                    value: function skip(nos) {
                        this.queries.push({
                            fn: 'onSkip',
                            e: { nos: nos }
                        });
                        return this;
                    }
                }, {
                    key: 'select',
                    value: function select(fieldNames) {
                        if (typeof fieldNames === 'string') {
                            fieldNames = [].slice.call([fieldNames], 0);
                        }
                        this.queries.push({
                            fn: 'onSelect',
                            e: { fieldNames: fieldNames }
                        });
                        return this;
                    }
                }, {
                    key: 'hierarchy',
                    value: function hierarchy(query, selectorFn) {
                        this.subQuerySelector = selectorFn;
                        this.subQuery = query;
                        return this;
                    }
                }, {
                    key: 'foreignKey',
                    value: function foreignKey(key) {
                        this.fKey = key;
                        return this;
                    }
                }, {
                    key: 'requiresCount',
                    value: function requiresCount() {
                        this.isCountRequired = true;
                        return this;
                    }
                }, {
                    key: 'aggregate',
                    value: function aggregate(type, field) {
                        this.queries.push({
                            fn: 'onAggregates',
                            e: { field: field, type: type }
                        });
                        return this;
                    }
                }], [{
                    key: 'filterQueries',
                    value: function filterQueries(queries, name) {
                        return queries.filter(function (q) {
                            return q.fn === name;
                        });
                    }
                }, {
                    key: 'filterQueryLists',
                    value: function filterQueryLists(queries, singles) {
                        var filtered = queries.filter(function (q) {
                            return singles.indexOf(q.fn) !== -1;
                        });
                        var res = {};
                        for (var i = 0; i < filtered.length; i++) {
                            if (!res[filtered[i].fn]) {
                                res[filtered[i].fn] = filtered[i].e;
                            }
                        }
                        return res;
                    }
                }]);

                return Query;
            }());

            _export('Predicate', Predicate = function () {
                /**
                 * Constructor for Predicate class.
                 * @param  {string|Predicate} field
                 * @param  {string} operator
                 * @param  {string|number|boolean|Predicate|Predicate[]} value
                 * @param  {boolean=false} ignoreCase
                 * @hidden
                 */
                function Predicate(field, operator, value) {
                    var ignoreCase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                    var ignoreAccent = arguments[4];

                    _classCallCheck(this, Predicate);

                    /** @hidden */
                    this.ignoreAccent = false;
                    /** @hidden */
                    this.isComplex = false;
                    if (typeof field === 'string') {
                        this.field = field;
                        this.operator = operator.toLowerCase();
                        this.value = value;
                        this.ignoreCase = ignoreCase;
                        this.ignoreAccent = ignoreAccent;
                        this.isComplex = false;
                        this.comparer = DataUtil.fnOperators.processOperator(this.operator);
                    } else if (field instanceof Predicate && value instanceof Predicate || value instanceof Array) {
                        this.isComplex = true;
                        this.condition = operator.toLowerCase();
                        this.predicates = [field];
                        if (value instanceof Array) {
                            [].push.apply(this.predicates, value);
                        } else {
                            this.predicates.push(value);
                        }
                    }
                    return this;
                }
                /**
                 * Adds n-number of new predicates on existing predicate with “and” condition.
                 * @param  {Object[]} args - Defines the collection of predicates.
                 */


                _createClass(Predicate, [{
                    key: 'and',
                    value: function and(field, operator, value, ignoreCase, ignoreAccent) {
                        return Predicate.combine(this, field, operator, value, 'and', ignoreCase, ignoreAccent);
                    }
                }, {
                    key: 'or',
                    value: function or(field, operator, value, ignoreCase, ignoreAccent) {
                        return Predicate.combine(this, field, operator, value, 'or', ignoreCase, ignoreAccent);
                    }
                }, {
                    key: 'validate',
                    value: function validate(record) {
                        var predicate = this.predicates ? this.predicates : [];
                        var isAnd = void 0;
                        var ret = void 0;
                        if (!this.isComplex && this.comparer) {
                            return this.comparer.call(this, DataUtil.getObject(this.field, record), this.value, this.ignoreCase, this.ignoreAccent);
                        }
                        isAnd = this.condition === 'and';
                        for (var i = 0; i < predicate.length; i++) {
                            ret = predicate[i].validate(record);
                            if (isAnd) {
                                if (!ret) {
                                    return false;
                                }
                            } else {
                                if (ret) {
                                    return true;
                                }
                            }
                        }
                        return isAnd;
                    }
                }, {
                    key: 'toJson',
                    value: function toJson() {
                        var predicates = void 0;
                        var p = void 0;
                        if (this.isComplex) {
                            predicates = [];
                            p = this.predicates;
                            for (var i = 0; i < p.length; i++) {
                                predicates.push(p[i].toJson());
                            }
                        }
                        return {
                            isComplex: this.isComplex,
                            field: this.field,
                            operator: this.operator,
                            value: this.value,
                            ignoreCase: this.ignoreCase,
                            ignoreAccent: this.ignoreAccent,
                            condition: this.condition,
                            predicates: predicates
                        };
                    }
                }], [{
                    key: 'and',
                    value: function and() {
                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }

                        return Predicate.combinePredicates([].slice.call(args, 0), 'and');
                    }
                }, {
                    key: 'or',
                    value: function or() {
                        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                            args[_key2] = arguments[_key2];
                        }

                        return Predicate.combinePredicates([].slice.call(args, 0), 'or');
                    }
                }, {
                    key: 'fromJson',
                    value: function fromJson(json) {
                        if (json instanceof Array) {
                            var res = [];
                            for (var i = 0, len = json.length; i < len; i++) {
                                res.push(this.fromJSONData(json[i]));
                            }
                            return res;
                        }
                        var pred = json;
                        return this.fromJSONData(pred);
                    }
                }, {
                    key: 'combinePredicates',
                    value: function combinePredicates(predicates, operator) {
                        if (predicates.length === 1) {
                            if (!(predicates[0] instanceof Array)) {
                                return predicates[0];
                            }
                            predicates = predicates[0];
                        }
                        return new Predicate(predicates[0], operator, predicates.slice(1));
                    }
                }, {
                    key: 'combine',
                    value: function combine(pred, field, operator, value, condition, ignoreCase, ignoreAccent) {
                        if (field instanceof Predicate) {
                            return Predicate[condition](pred, field);
                        }
                        if (typeof field === 'string') {
                            return Predicate[condition](pred, new Predicate(field, operator, value, ignoreCase, ignoreAccent));
                        }
                        return DataUtil.throwError('Predicate - ' + condition + ' : invalid arguments');
                    }
                }, {
                    key: 'fromJSONData',
                    value: function fromJSONData(json) {
                        var preds = json.predicates || [];
                        var len = preds.length;
                        var predicates = [];
                        var result = void 0;
                        for (var i = 0; i < len; i++) {
                            predicates.push(this.fromJSONData(preds[i]));
                        }
                        if (!json.isComplex) {
                            result = new Predicate(json.field, json.operator, json.value, json.ignoreCase, json.ignoreAccent);
                        } else {
                            result = new Predicate(predicates[0], json.condition, predicates.slice(1));
                        }
                        return result;
                    }
                }]);

                return Predicate;
            }());

            consts = { GroupGuid: '{271bbba0-1ee7}' };

            _export('DataUtil', DataUtil = function () {
                function DataUtil() {
                    _classCallCheck(this, DataUtil);
                }

                _createClass(DataUtil, null, [{
                    key: 'getValue',
                    value: function getValue(value, inst) {
                        if (typeof value === 'function') {
                            return value.call(inst || {});
                        }
                        return value;
                    }
                }, {
                    key: 'endsWith',
                    value: function endsWith(input, substr) {
                        return input.slice(-substr.length) === substr;
                    }
                }, {
                    key: 'startsWith',
                    value: function startsWith(input, start) {
                        return input.slice(0, start.length) === start;
                    }
                }, {
                    key: 'fnSort',
                    value: function fnSort(order) {
                        order = order ? DataUtil.toLowerCase(order) : 'ascending';
                        if (order === 'ascending') {
                            return this.fnAscending;
                        }
                        return this.fnDescending;
                    }
                }, {
                    key: 'fnAscending',
                    value: function fnAscending(x, y) {
                        if (y === null || y === undefined) {
                            return -1;
                        }
                        if (typeof x === 'string') {
                            return x.localeCompare(y);
                        }
                        if (x === null || x === undefined) {
                            return 1;
                        }
                        return x - y;
                    }
                }, {
                    key: 'fnDescending',
                    value: function fnDescending(x, y) {
                        if (y === null || y === undefined) {
                            return 1;
                        }
                        if (typeof x === 'string') {
                            return x.localeCompare(y) * -1;
                        }
                        if (x === null || x === undefined) {
                            return -1;
                        }
                        return y - x;
                    }
                }, {
                    key: 'extractFields',
                    value: function extractFields(obj, fields) {
                        var newObj = {};
                        for (var i = 0; i < fields.length; i++) {
                            newObj = this.setValue(fields[i], this.getObject(fields[i], obj), newObj);
                        }
                        return newObj;
                    }
                }, {
                    key: 'select',
                    value: function select(jsonArray, fields) {
                        var newData = [];
                        for (var i = 0; i < jsonArray.length; i++) {
                            newData.push(this.extractFields(jsonArray[i], fields));
                        }
                        return newData;
                    }
                }, {
                    key: 'group',
                    value: function group(jsonArray, field, aggregates, level, groupDs, format) {
                        var _this = this;

                        level = level || 1;
                        var jsonData = jsonArray;
                        var guid = 'GroupGuid';
                        if (jsonData.GroupGuid === consts[guid]) {
                            var _loop = function _loop(j) {
                                if (!isNullOrUndefined(groupDs)) {
                                    var indx = -1;
                                    var temp = groupDs.filter(function (e) {
                                        return e.key === jsonData[j].key;
                                    });
                                    indx = groupDs.indexOf(temp[0]);
                                    jsonData[j].items = _this.group(jsonData[j].items, field, aggregates, jsonData.level + 1, groupDs[indx].items, format);
                                    jsonData[j].count = groupDs[indx].count;
                                } else {
                                    jsonData[j].items = _this.group(jsonData[j].items, field, aggregates, jsonData.level + 1, null, format);
                                    jsonData[j].count = jsonData[j].items.length;
                                }
                            };

                            for (var j = 0; j < jsonData.length; j++) {
                                _loop(j);
                            }
                            jsonData.childLevels += 1;
                            return jsonData;
                        }
                        var grouped = {};
                        var groupedArray = [];
                        groupedArray.GroupGuid = consts[guid];
                        groupedArray.level = level;
                        groupedArray.childLevels = 0;
                        groupedArray.records = jsonData;

                        var _loop2 = function _loop2(i) {
                            var val = _this.getVal(jsonData, i, field);
                            if (!isNullOrUndefined(format)) {
                                val = format(val, field);
                            }
                            if (!grouped[val]) {
                                grouped[val] = {
                                    key: val,
                                    count: 0,
                                    items: [],
                                    aggregates: {},
                                    field: field
                                };
                                groupedArray.push(grouped[val]);
                                if (!isNullOrUndefined(groupDs)) {
                                    var tempObj = groupDs.filter(function (e) {
                                        return e.key === grouped[val].key;
                                    });
                                    grouped[val].count = tempObj[0].count;
                                }
                            }
                            grouped[val].count = !isNullOrUndefined(groupDs) ? grouped[val].count : grouped[val].count += 1;
                            grouped[val].items.push(jsonData[i]);
                        };

                        for (var i = 0; i < jsonData.length; i++) {
                            _loop2(i);
                        }
                        if (aggregates && aggregates.length) {
                            var _loop3 = function _loop3(i) {
                                var res = {};
                                var fn = void 0;
                                var aggs = aggregates;
                                for (var j = 0; j < aggregates.length; j++) {
                                    fn = DataUtil.aggregates[aggregates[j].type];
                                    if (!isNullOrUndefined(groupDs)) {
                                        var temp = groupDs.filter(function (e) {
                                            return e.key === groupedArray[i].key;
                                        });
                                        if (fn) {
                                            res[aggs[j].field + ' - ' + aggs[j].type] = fn(temp[0].items, aggs[j].field);
                                        }
                                    } else {
                                        if (fn) {
                                            res[aggs[j].field + ' - ' + aggs[j].type] = fn(groupedArray[i].items, aggs[j].field);
                                        }
                                    }
                                }
                                groupedArray[i].aggregates = res;
                            };

                            for (var i = 0; i < groupedArray.length; i++) {
                                _loop3(i);
                            }
                        }
                        return jsonData.length && groupedArray || jsonData;
                    }
                }, {
                    key: 'buildHierarchy',
                    value: function buildHierarchy(fKey, from, source, lookup, pKey) {
                        var i = void 0;
                        var grp = {};
                        var temp = void 0;
                        if (lookup.result) {
                            lookup = lookup.result;
                        }
                        if (lookup.GroupGuid) {
                            this.throwError('DataManager: Do not have support Grouping in hierarchy');
                        }
                        for (i = 0; i < lookup.length; i++) {
                            var fKeyData = this.getObject(fKey, lookup[i]);
                            temp = grp[fKeyData] || (grp[fKeyData] = []);
                            temp.push(lookup[i]);
                        }
                        for (i = 0; i < source.length; i++) {
                            var _fKeyData = this.getObject(pKey || fKey, source[i]);
                            source[i][from] = grp[_fKeyData];
                        }
                    }
                }, {
                    key: 'getFieldList',
                    value: function getFieldList(obj, fields, prefix) {
                        if (prefix === undefined) {
                            prefix = '';
                        }
                        if (fields === undefined || fields === null) {
                            return this.getFieldList(obj, [], prefix);
                        }
                        var copyObj = obj;
                        var keys = Object.keys(obj);
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var prop = _step.value;

                                if (_typeof(copyObj[prop]) === 'object' && !(copyObj[prop] instanceof Array)) {
                                    this.getFieldList(copyObj[prop], fields, prefix + prop + '.');
                                } else {
                                    fields.push(prefix + prop);
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

                        return fields;
                    }
                }, {
                    key: 'getObject',
                    value: function getObject(nameSpace, from) {
                        if (!nameSpace) {
                            return from;
                        }
                        if (!from) {
                            return undefined;
                        }
                        if (nameSpace.indexOf('.') === -1) {
                            return from[nameSpace];
                        }
                        var value = from;
                        var splits = nameSpace.split('.');
                        for (var i = 0; i < splits.length; i++) {
                            if (value == null) {
                                break;
                            }
                            value = value[splits[i]];
                        }
                        return value;
                    }
                }, {
                    key: 'setValue',
                    value: function setValue(nameSpace, value, obj) {
                        var keys = nameSpace.toString().split('.');
                        var start = obj || {};
                        var fromObj = start;
                        var i = void 0;
                        var length = keys.length;
                        var key = void 0;
                        for (i = 0; i < length; i++) {
                            key = keys[i];
                            if (i + 1 === length) {
                                fromObj[key] = value === undefined ? undefined : value;
                            } else if (isNullOrUndefined(fromObj[key])) {
                                fromObj[key] = {};
                            }
                            fromObj = fromObj[key];
                        }
                        return start;
                    }
                }, {
                    key: 'sort',
                    value: function sort(ds, field, comparer) {
                        if (ds.length <= 1) {
                            return ds;
                        }
                        var middle = parseInt((ds.length / 2).toString(), 10);
                        var left = ds.slice(0, middle);
                        var right = ds.slice(middle);
                        left = this.sort(left, field, comparer);
                        right = this.sort(right, field, comparer);
                        return this.merge(left, right, field, comparer);
                    }
                }, {
                    key: 'ignoreDiacritics',
                    value: function ignoreDiacritics(value) {
                        if (typeof value !== 'string') {
                            return value;
                        }
                        var result = value.split('');
                        var newValue = result.map(function (temp) {
                            return temp in DataUtil.diacritics ? DataUtil.diacritics[temp] : temp;
                        });
                        return newValue.join('');
                    }
                }, {
                    key: 'merge',
                    value: function merge(left, right, fieldName, comparer) {
                        var result = [];
                        var current = void 0;
                        while (left.length > 0 || right.length > 0) {
                            if (left.length > 0 && right.length > 0) {
                                if (comparer) {
                                    current = comparer(this.getVal(left, 0, fieldName), this.getVal(right, 0, fieldName)) <= 0 ? left : right;
                                } else {
                                    current = left[0][fieldName] < left[0][fieldName] ? left : right;
                                }
                            } else {
                                current = left.length > 0 ? left : right;
                            }
                            result.push(current.shift());
                        }
                        return result;
                    }
                }, {
                    key: 'getVal',
                    value: function getVal(array, index, field) {
                        return field ? this.getObject(field, array[index]) : array[index];
                    }
                }, {
                    key: 'toLowerCase',
                    value: function toLowerCase(val) {
                        return val ? typeof val === 'string' ? val.toLowerCase() : val.toString() : val === 0 || val === false ? val.toString() : '';
                    }
                }, {
                    key: 'callAdaptorFunction',
                    value: function callAdaptorFunction(adaptor, fnName, param1, param2) {
                        if (fnName in adaptor) {
                            var _res = adaptor[fnName](param1, param2);
                            if (!this.fnOperators.isnull(_res)) {
                                param1 = _res;
                            }
                        }
                        return param1;
                    }
                }, {
                    key: 'isPlainObject',
                    value: function isPlainObject(obj) {
                        return !!obj && obj.constructor === Object;
                    }
                }, {
                    key: 'isCors',
                    value: function isCors() {
                        var xhr = null;
                        var request = 'XMLHttpRequest';
                        try {
                            xhr = new window[request]();
                        } catch (e) {
                            // No exception handling
                        }
                        return !!xhr && 'withCredentials' in xhr;
                    }
                }, {
                    key: 'getGuid',
                    value: function getGuid(prefix) {
                        var hexs = '0123456789abcdef';
                        var rand = void 0;
                        return (prefix || '') + '00000000-0000-4000-0000-000000000000'.replace(/0/g, function (val, i) {
                            if ('crypto' in window && 'getRandomValues' in crypto) {
                                var arr = new Uint8Array(1);
                                window.crypto.getRandomValues(arr);
                                rand = arr[0] % 16 | 0;
                            } else {
                                rand = Math.random() * 16 | 0;
                            }
                            return hexs[i === 19 ? rand & 0x3 | 0x8 : rand];
                        });
                    }
                }, {
                    key: 'isNull',
                    value: function isNull(val) {
                        return val === undefined || val === null;
                    }
                }, {
                    key: 'getItemFromComparer',
                    value: function getItemFromComparer(array, field, comparer) {
                        var keyVal = void 0;
                        var current = void 0;
                        var key = void 0;
                        var i = 0;
                        var castRequired = typeof DataUtil.getVal(array, 0, field) === 'string';
                        if (array.length) {
                            while (isNullOrUndefined(keyVal) && i < array.length) {
                                keyVal = DataUtil.getVal(array, i, field);
                                key = array[i++];
                            }
                        }
                        for (; i < array.length; i++) {
                            current = DataUtil.getVal(array, i, field);
                            if (isNullOrUndefined(current)) {
                                continue;
                            }
                            if (castRequired) {
                                keyVal = +keyVal;
                                current = +current;
                            }
                            if (comparer(keyVal, current) > 0) {
                                keyVal = current;
                                key = array[i];
                            }
                        }
                        return key;
                    }
                }, {
                    key: 'distinct',
                    value: function distinct(json, fieldName, requiresCompleteRecord) {
                        requiresCompleteRecord = isNullOrUndefined(requiresCompleteRecord) ? false : requiresCompleteRecord;
                        var result = [];
                        var val = void 0;
                        var tmp = {};
                        json.forEach(function (data, index) {
                            val = DataUtil.getVal(json, index, fieldName);
                            if (!(val in tmp)) {
                                result.push(!requiresCompleteRecord ? val : json[index]);
                                tmp[val] = 1;
                            }
                        });
                        return result;
                    }
                }]);

                return DataUtil;
            }());

            /**
             * Specifies the value which will be used to adjust the date value to server timezone.
             * @default null
             */
            DataUtil.serverTimezoneOffset = null;
            /**
             * Throw error with the given string as message.
             * @param  {string} er
             */
            DataUtil.throwError = function (error) {
                try {
                    throw new Error(error);
                } catch (e) {
                    throw e.message + '\n' + e.stack;
                }
            };
            DataUtil.aggregates = {
                /**
                 * Calculate sum of the given field in the data.
                 * @param  {Object[]} ds
                 * @param  {string} field
                 */
                sum: function sum(ds, field) {
                    var result = 0;
                    var val = void 0;
                    var castRequired = typeof DataUtil.getVal(ds, 0, field) !== 'number';
                    for (var i = 0; i < ds.length; i++) {
                        val = DataUtil.getVal(ds, i, field);
                        if (!isNaN(val) && val !== null) {
                            if (castRequired) {
                                val = +val;
                            }
                            result += val;
                        }
                    }
                    return result;
                },
                /**
                 * Calculate average value of the given field in the data.
                 * @param  {Object[]} ds
                 * @param  {string} field
                 */
                average: function average(ds, field) {
                    return DataUtil.aggregates.sum(ds, field) / ds.length;
                },
                /**
                 * Returns the min value of the data based on the field.
                 * @param  {Object[]} ds
                 * @param  {string|Function} field
                 */
                min: function min(ds, field) {
                    var result = void 0;
                    var comparer = void 0;
                    if (typeof field === 'function') {
                        comparer = field;
                        field = null;
                    }
                    result = DataUtil.getObject(field, DataUtil.getItemFromComparer(ds, field, comparer || DataUtil.fnAscending));
                    return isNullOrUndefined(result) ? null : result;
                },
                /**
                 * Returns the max value of the data based on the field.
                 * @param  {Object[]} ds
                 * @param  {string} field
                 * @returns number
                 */
                max: function max(ds, field) {
                    var result = void 0;
                    var comparer = void 0;
                    if (typeof field === 'function') {
                        comparer = field;
                        field = null;
                    }
                    /* tslint:disable-next-line:no-any */
                    result = DataUtil.getObject(field, DataUtil.getItemFromComparer(ds, field, comparer || DataUtil.fnDescending));
                    return isNullOrUndefined(result) ? null : result;
                },
                /**
                 * Returns the total number of true value present in the data based on the given boolean field name.
                 * @param  {Object[]} ds
                 * @param  {string} field
                 */
                truecount: function truecount(ds, field) {
                    return new DataManager(ds).executeLocal(new Query().where(field, 'equal', true, true)).length;
                },
                /**
                 * Returns the total number of false value present in the data based on the given boolean field name.
                 * @param  {Object[]} ds
                 * @param  {string} field
                 */
                falsecount: function falsecount(ds, field) {
                    return new DataManager(ds).executeLocal(new Query().where(field, 'equal', false, true)).length;
                },
                /**
                 * Returns the length of the given data.
                 * @param  {Object[]} ds
                 * @param  {string} field?
                 * @returns number
                 */
                count: function count(ds, field) {
                    return ds.length;
                }
            };
            /**
             * Specifies the Object with filter operators.
             */
            DataUtil.operatorSymbols = {
                '<': 'lessthan',
                '>': 'greaterthan',
                '<=': 'lessthanorequal',
                '>=': 'greaterthanorequal',
                '==': 'equal',
                '!=': 'notequal',
                '*=': 'contains',
                '$=': 'endswith',
                '^=': 'startswith'
            };
            /**
             * Specifies the Object with filter operators which will be used for OData filter query generation.
             * * It will be used for date/number type filter query.
             */
            DataUtil.odBiOperator = {
                '<': ' lt ',
                '>': ' gt ',
                '<=': ' le ',
                '>=': ' ge ',
                '==': ' eq ',
                '!=': ' ne ',
                'lessthan': ' lt ',
                'lessthanorequal': ' le ',
                'greaterthan': ' gt ',
                'greaterthanorequal': ' ge ',
                'equal': ' eq ',
                'notequal': ' ne '
            };
            /**
             * Specifies the Object with filter operators which will be used for OData filter query generation.
             * It will be used for string type filter query.
             */
            DataUtil.odUniOperator = {
                '$=': 'endswith',
                '^=': 'startswith',
                '*=': 'substringof',
                'endswith': 'endswith',
                'startswith': 'startswith',
                'contains': 'substringof'
            };
            /**
             * Specifies the Object with filter operators which will be used for ODataV4 filter query generation.
             * It will be used for string type filter query.
             */
            DataUtil.odv4UniOperator = {
                '$=': 'endswith',
                '^=': 'startswith',
                '*=': 'contains',
                'endswith': 'endswith',
                'startswith': 'startswith',
                'contains': 'contains'
            };
            DataUtil.diacritics = {
                '\u24B6': 'A',
                '\uFF21': 'A',
                '\xC0': 'A',
                '\xC1': 'A',
                '\xC2': 'A',
                '\u1EA6': 'A',
                '\u1EA4': 'A',
                '\u1EAA': 'A',
                '\u1EA8': 'A',
                '\xC3': 'A',
                '\u0100': 'A',
                '\u0102': 'A',
                '\u1EB0': 'A',
                '\u1EAE': 'A',
                '\u1EB4': 'A',
                '\u1EB2': 'A',
                '\u0226': 'A',
                '\u01E0': 'A',
                '\xC4': 'A',
                '\u01DE': 'A',
                '\u1EA2': 'A',
                '\xC5': 'A',
                '\u01FA': 'A',
                '\u01CD': 'A',
                '\u0200': 'A',
                '\u0202': 'A',
                '\u1EA0': 'A',
                '\u1EAC': 'A',
                '\u1EB6': 'A',
                '\u1E00': 'A',
                '\u0104': 'A',
                '\u023A': 'A',
                '\u2C6F': 'A',
                '\uA732': 'AA',
                '\xC6': 'AE',
                '\u01FC': 'AE',
                '\u01E2': 'AE',
                '\uA734': 'AO',
                '\uA736': 'AU',
                '\uA738': 'AV',
                '\uA73A': 'AV',
                '\uA73C': 'AY',
                '\u24B7': 'B',
                '\uFF22': 'B',
                '\u1E02': 'B',
                '\u1E04': 'B',
                '\u1E06': 'B',
                '\u0243': 'B',
                '\u0182': 'B',
                '\u0181': 'B',
                '\u24B8': 'C',
                '\uFF23': 'C',
                '\u0106': 'C',
                '\u0108': 'C',
                '\u010A': 'C',
                '\u010C': 'C',
                '\xC7': 'C',
                '\u1E08': 'C',
                '\u0187': 'C',
                '\u023B': 'C',
                '\uA73E': 'C',
                '\u24B9': 'D',
                '\uFF24': 'D',
                '\u1E0A': 'D',
                '\u010E': 'D',
                '\u1E0C': 'D',
                '\u1E10': 'D',
                '\u1E12': 'D',
                '\u1E0E': 'D',
                '\u0110': 'D',
                '\u018B': 'D',
                '\u018A': 'D',
                '\u0189': 'D',
                '\uA779': 'D',
                '\u01F1': 'DZ',
                '\u01C4': 'DZ',
                '\u01F2': 'Dz',
                '\u01C5': 'Dz',
                '\u24BA': 'E',
                '\uFF25': 'E',
                '\xC8': 'E',
                '\xC9': 'E',
                '\xCA': 'E',
                '\u1EC0': 'E',
                '\u1EBE': 'E',
                '\u1EC4': 'E',
                '\u1EC2': 'E',
                '\u1EBC': 'E',
                '\u0112': 'E',
                '\u1E14': 'E',
                '\u1E16': 'E',
                '\u0114': 'E',
                '\u0116': 'E',
                '\xCB': 'E',
                '\u1EBA': 'E',
                '\u011A': 'E',
                '\u0204': 'E',
                '\u0206': 'E',
                '\u1EB8': 'E',
                '\u1EC6': 'E',
                '\u0228': 'E',
                '\u1E1C': 'E',
                '\u0118': 'E',
                '\u1E18': 'E',
                '\u1E1A': 'E',
                '\u0190': 'E',
                '\u018E': 'E',
                '\u24BB': 'F',
                '\uFF26': 'F',
                '\u1E1E': 'F',
                '\u0191': 'F',
                '\uA77B': 'F',
                '\u24BC': 'G',
                '\uFF27': 'G',
                '\u01F4': 'G',
                '\u011C': 'G',
                '\u1E20': 'G',
                '\u011E': 'G',
                '\u0120': 'G',
                '\u01E6': 'G',
                '\u0122': 'G',
                '\u01E4': 'G',
                '\u0193': 'G',
                '\uA7A0': 'G',
                '\uA77D': 'G',
                '\uA77E': 'G',
                '\u24BD': 'H',
                '\uFF28': 'H',
                '\u0124': 'H',
                '\u1E22': 'H',
                '\u1E26': 'H',
                '\u021E': 'H',
                '\u1E24': 'H',
                '\u1E28': 'H',
                '\u1E2A': 'H',
                '\u0126': 'H',
                '\u2C67': 'H',
                '\u2C75': 'H',
                '\uA78D': 'H',
                '\u24BE': 'I',
                '\uFF29': 'I',
                '\xCC': 'I',
                '\xCD': 'I',
                '\xCE': 'I',
                '\u0128': 'I',
                '\u012A': 'I',
                '\u012C': 'I',
                '\u0130': 'I',
                '\xCF': 'I',
                '\u1E2E': 'I',
                '\u1EC8': 'I',
                '\u01CF': 'I',
                '\u0208': 'I',
                '\u020A': 'I',
                '\u1ECA': 'I',
                '\u012E': 'I',
                '\u1E2C': 'I',
                '\u0197': 'I',
                '\u24BF': 'J',
                '\uFF2A': 'J',
                '\u0134': 'J',
                '\u0248': 'J',
                '\u24C0': 'K',
                '\uFF2B': 'K',
                '\u1E30': 'K',
                '\u01E8': 'K',
                '\u1E32': 'K',
                '\u0136': 'K',
                '\u1E34': 'K',
                '\u0198': 'K',
                '\u2C69': 'K',
                '\uA740': 'K',
                '\uA742': 'K',
                '\uA744': 'K',
                '\uA7A2': 'K',
                '\u24C1': 'L',
                '\uFF2C': 'L',
                '\u013F': 'L',
                '\u0139': 'L',
                '\u013D': 'L',
                '\u1E36': 'L',
                '\u1E38': 'L',
                '\u013B': 'L',
                '\u1E3C': 'L',
                '\u1E3A': 'L',
                '\u0141': 'L',
                '\u023D': 'L',
                '\u2C62': 'L',
                '\u2C60': 'L',
                '\uA748': 'L',
                '\uA746': 'L',
                '\uA780': 'L',
                '\u01C7': 'LJ',
                '\u01C8': 'Lj',
                '\u24C2': 'M',
                '\uFF2D': 'M',
                '\u1E3E': 'M',
                '\u1E40': 'M',
                '\u1E42': 'M',
                '\u2C6E': 'M',
                '\u019C': 'M',
                '\u24C3': 'N',
                '\uFF2E': 'N',
                '\u01F8': 'N',
                '\u0143': 'N',
                '\xD1': 'N',
                '\u1E44': 'N',
                '\u0147': 'N',
                '\u1E46': 'N',
                '\u0145': 'N',
                '\u1E4A': 'N',
                '\u1E48': 'N',
                '\u0220': 'N',
                '\u019D': 'N',
                '\uA790': 'N',
                '\uA7A4': 'N',
                '\u01CA': 'NJ',
                '\u01CB': 'Nj',
                '\u24C4': 'O',
                '\uFF2F': 'O',
                '\xD2': 'O',
                '\xD3': 'O',
                '\xD4': 'O',
                '\u1ED2': 'O',
                '\u1ED0': 'O',
                '\u1ED6': 'O',
                '\u1ED4': 'O',
                '\xD5': 'O',
                '\u1E4C': 'O',
                '\u022C': 'O',
                '\u1E4E': 'O',
                '\u014C': 'O',
                '\u1E50': 'O',
                '\u1E52': 'O',
                '\u014E': 'O',
                '\u022E': 'O',
                '\u0230': 'O',
                '\xD6': 'O',
                '\u022A': 'O',
                '\u1ECE': 'O',
                '\u0150': 'O',
                '\u01D1': 'O',
                '\u020C': 'O',
                '\u020E': 'O',
                '\u01A0': 'O',
                '\u1EDC': 'O',
                '\u1EDA': 'O',
                '\u1EE0': 'O',
                '\u1EDE': 'O',
                '\u1EE2': 'O',
                '\u1ECC': 'O',
                '\u1ED8': 'O',
                '\u01EA': 'O',
                '\u01EC': 'O',
                '\xD8': 'O',
                '\u01FE': 'O',
                '\u0186': 'O',
                '\u019F': 'O',
                '\uA74A': 'O',
                '\uA74C': 'O',
                '\u01A2': 'OI',
                '\uA74E': 'OO',
                '\u0222': 'OU',
                '\u24C5': 'P',
                '\uFF30': 'P',
                '\u1E54': 'P',
                '\u1E56': 'P',
                '\u01A4': 'P',
                '\u2C63': 'P',
                '\uA750': 'P',
                '\uA752': 'P',
                '\uA754': 'P',
                '\u24C6': 'Q',
                '\uFF31': 'Q',
                '\uA756': 'Q',
                '\uA758': 'Q',
                '\u024A': 'Q',
                '\u24C7': 'R',
                '\uFF32': 'R',
                '\u0154': 'R',
                '\u1E58': 'R',
                '\u0158': 'R',
                '\u0210': 'R',
                '\u0212': 'R',
                '\u1E5A': 'R',
                '\u1E5C': 'R',
                '\u0156': 'R',
                '\u1E5E': 'R',
                '\u024C': 'R',
                '\u2C64': 'R',
                '\uA75A': 'R',
                '\uA7A6': 'R',
                '\uA782': 'R',
                '\u24C8': 'S',
                '\uFF33': 'S',
                '\u1E9E': 'S',
                '\u015A': 'S',
                '\u1E64': 'S',
                '\u015C': 'S',
                '\u1E60': 'S',
                '\u0160': 'S',
                '\u1E66': 'S',
                '\u1E62': 'S',
                '\u1E68': 'S',
                '\u0218': 'S',
                '\u015E': 'S',
                '\u2C7E': 'S',
                '\uA7A8': 'S',
                '\uA784': 'S',
                '\u24C9': 'T',
                '\uFF34': 'T',
                '\u1E6A': 'T',
                '\u0164': 'T',
                '\u1E6C': 'T',
                '\u021A': 'T',
                '\u0162': 'T',
                '\u1E70': 'T',
                '\u1E6E': 'T',
                '\u0166': 'T',
                '\u01AC': 'T',
                '\u01AE': 'T',
                '\u023E': 'T',
                '\uA786': 'T',
                '\uA728': 'TZ',
                '\u24CA': 'U',
                '\uFF35': 'U',
                '\xD9': 'U',
                '\xDA': 'U',
                '\xDB': 'U',
                '\u0168': 'U',
                '\u1E78': 'U',
                '\u016A': 'U',
                '\u1E7A': 'U',
                '\u016C': 'U',
                '\xDC': 'U',
                '\u01DB': 'U',
                '\u01D7': 'U',
                '\u01D5': 'U',
                '\u01D9': 'U',
                '\u1EE6': 'U',
                '\u016E': 'U',
                '\u0170': 'U',
                '\u01D3': 'U',
                '\u0214': 'U',
                '\u0216': 'U',
                '\u01AF': 'U',
                '\u1EEA': 'U',
                '\u1EE8': 'U',
                '\u1EEE': 'U',
                '\u1EEC': 'U',
                '\u1EF0': 'U',
                '\u1EE4': 'U',
                '\u1E72': 'U',
                '\u0172': 'U',
                '\u1E76': 'U',
                '\u1E74': 'U',
                '\u0244': 'U',
                '\u24CB': 'V',
                '\uFF36': 'V',
                '\u1E7C': 'V',
                '\u1E7E': 'V',
                '\u01B2': 'V',
                '\uA75E': 'V',
                '\u0245': 'V',
                '\uA760': 'VY',
                '\u24CC': 'W',
                '\uFF37': 'W',
                '\u1E80': 'W',
                '\u1E82': 'W',
                '\u0174': 'W',
                '\u1E86': 'W',
                '\u1E84': 'W',
                '\u1E88': 'W',
                '\u2C72': 'W',
                '\u24CD': 'X',
                '\uFF38': 'X',
                '\u1E8A': 'X',
                '\u1E8C': 'X',
                '\u24CE': 'Y',
                '\uFF39': 'Y',
                '\u1EF2': 'Y',
                '\xDD': 'Y',
                '\u0176': 'Y',
                '\u1EF8': 'Y',
                '\u0232': 'Y',
                '\u1E8E': 'Y',
                '\u0178': 'Y',
                '\u1EF6': 'Y',
                '\u1EF4': 'Y',
                '\u01B3': 'Y',
                '\u024E': 'Y',
                '\u1EFE': 'Y',
                '\u24CF': 'Z',
                '\uFF3A': 'Z',
                '\u0179': 'Z',
                '\u1E90': 'Z',
                '\u017B': 'Z',
                '\u017D': 'Z',
                '\u1E92': 'Z',
                '\u1E94': 'Z',
                '\u01B5': 'Z',
                '\u0224': 'Z',
                '\u2C7F': 'Z',
                '\u2C6B': 'Z',
                '\uA762': 'Z',
                '\u24D0': 'a',
                '\uFF41': 'a',
                '\u1E9A': 'a',
                '\xE0': 'a',
                '\xE1': 'a',
                '\xE2': 'a',
                '\u1EA7': 'a',
                '\u1EA5': 'a',
                '\u1EAB': 'a',
                '\u1EA9': 'a',
                '\xE3': 'a',
                '\u0101': 'a',
                '\u0103': 'a',
                '\u1EB1': 'a',
                '\u1EAF': 'a',
                '\u1EB5': 'a',
                '\u1EB3': 'a',
                '\u0227': 'a',
                '\u01E1': 'a',
                '\xE4': 'a',
                '\u01DF': 'a',
                '\u1EA3': 'a',
                '\xE5': 'a',
                '\u01FB': 'a',
                '\u01CE': 'a',
                '\u0201': 'a',
                '\u0203': 'a',
                '\u1EA1': 'a',
                '\u1EAD': 'a',
                '\u1EB7': 'a',
                '\u1E01': 'a',
                '\u0105': 'a',
                '\u2C65': 'a',
                '\u0250': 'a',
                '\uA733': 'aa',
                '\xE6': 'ae',
                '\u01FD': 'ae',
                '\u01E3': 'ae',
                '\uA735': 'ao',
                '\uA737': 'au',
                '\uA739': 'av',
                '\uA73B': 'av',
                '\uA73D': 'ay',
                '\u24D1': 'b',
                '\uFF42': 'b',
                '\u1E03': 'b',
                '\u1E05': 'b',
                '\u1E07': 'b',
                '\u0180': 'b',
                '\u0183': 'b',
                '\u0253': 'b',
                '\u24D2': 'c',
                '\uFF43': 'c',
                '\u0107': 'c',
                '\u0109': 'c',
                '\u010B': 'c',
                '\u010D': 'c',
                '\xE7': 'c',
                '\u1E09': 'c',
                '\u0188': 'c',
                '\u023C': 'c',
                '\uA73F': 'c',
                '\u2184': 'c',
                '\u24D3': 'd',
                '\uFF44': 'd',
                '\u1E0B': 'd',
                '\u010F': 'd',
                '\u1E0D': 'd',
                '\u1E11': 'd',
                '\u1E13': 'd',
                '\u1E0F': 'd',
                '\u0111': 'd',
                '\u018C': 'd',
                '\u0256': 'd',
                '\u0257': 'd',
                '\uA77A': 'd',
                '\u01F3': 'dz',
                '\u01C6': 'dz',
                '\u24D4': 'e',
                '\uFF45': 'e',
                '\xE8': 'e',
                '\xE9': 'e',
                '\xEA': 'e',
                '\u1EC1': 'e',
                '\u1EBF': 'e',
                '\u1EC5': 'e',
                '\u1EC3': 'e',
                '\u1EBD': 'e',
                '\u0113': 'e',
                '\u1E15': 'e',
                '\u1E17': 'e',
                '\u0115': 'e',
                '\u0117': 'e',
                '\xEB': 'e',
                '\u1EBB': 'e',
                '\u011B': 'e',
                '\u0205': 'e',
                '\u0207': 'e',
                '\u1EB9': 'e',
                '\u1EC7': 'e',
                '\u0229': 'e',
                '\u1E1D': 'e',
                '\u0119': 'e',
                '\u1E19': 'e',
                '\u1E1B': 'e',
                '\u0247': 'e',
                '\u025B': 'e',
                '\u01DD': 'e',
                '\u24D5': 'f',
                '\uFF46': 'f',
                '\u1E1F': 'f',
                '\u0192': 'f',
                '\uA77C': 'f',
                '\u24D6': 'g',
                '\uFF47': 'g',
                '\u01F5': 'g',
                '\u011D': 'g',
                '\u1E21': 'g',
                '\u011F': 'g',
                '\u0121': 'g',
                '\u01E7': 'g',
                '\u0123': 'g',
                '\u01E5': 'g',
                '\u0260': 'g',
                '\uA7A1': 'g',
                '\u1D79': 'g',
                '\uA77F': 'g',
                '\u24D7': 'h',
                '\uFF48': 'h',
                '\u0125': 'h',
                '\u1E23': 'h',
                '\u1E27': 'h',
                '\u021F': 'h',
                '\u1E25': 'h',
                '\u1E29': 'h',
                '\u1E2B': 'h',
                '\u1E96': 'h',
                '\u0127': 'h',
                '\u2C68': 'h',
                '\u2C76': 'h',
                '\u0265': 'h',
                '\u0195': 'hv',
                '\u24D8': 'i',
                '\uFF49': 'i',
                '\xEC': 'i',
                '\xED': 'i',
                '\xEE': 'i',
                '\u0129': 'i',
                '\u012B': 'i',
                '\u012D': 'i',
                '\xEF': 'i',
                '\u1E2F': 'i',
                '\u1EC9': 'i',
                '\u01D0': 'i',
                '\u0209': 'i',
                '\u020B': 'i',
                '\u1ECB': 'i',
                '\u012F': 'i',
                '\u1E2D': 'i',
                '\u0268': 'i',
                '\u0131': 'i',
                '\u24D9': 'j',
                '\uFF4A': 'j',
                '\u0135': 'j',
                '\u01F0': 'j',
                '\u0249': 'j',
                '\u24DA': 'k',
                '\uFF4B': 'k',
                '\u1E31': 'k',
                '\u01E9': 'k',
                '\u1E33': 'k',
                '\u0137': 'k',
                '\u1E35': 'k',
                '\u0199': 'k',
                '\u2C6A': 'k',
                '\uA741': 'k',
                '\uA743': 'k',
                '\uA745': 'k',
                '\uA7A3': 'k',
                '\u24DB': 'l',
                '\uFF4C': 'l',
                '\u0140': 'l',
                '\u013A': 'l',
                '\u013E': 'l',
                '\u1E37': 'l',
                '\u1E39': 'l',
                '\u013C': 'l',
                '\u1E3D': 'l',
                '\u1E3B': 'l',
                '\u017F': 'l',
                '\u0142': 'l',
                '\u019A': 'l',
                '\u026B': 'l',
                '\u2C61': 'l',
                '\uA749': 'l',
                '\uA781': 'l',
                '\uA747': 'l',
                '\u01C9': 'lj',
                '\u24DC': 'm',
                '\uFF4D': 'm',
                '\u1E3F': 'm',
                '\u1E41': 'm',
                '\u1E43': 'm',
                '\u0271': 'm',
                '\u026F': 'm',
                '\u24DD': 'n',
                '\uFF4E': 'n',
                '\u01F9': 'n',
                '\u0144': 'n',
                '\xF1': 'n',
                '\u1E45': 'n',
                '\u0148': 'n',
                '\u1E47': 'n',
                '\u0146': 'n',
                '\u1E4B': 'n',
                '\u1E49': 'n',
                '\u019E': 'n',
                '\u0272': 'n',
                '\u0149': 'n',
                '\uA791': 'n',
                '\uA7A5': 'n',
                '\u01CC': 'nj',
                '\u24DE': 'o',
                '\uFF4F': 'o',
                '\xF2': 'o',
                '\xF3': 'o',
                '\xF4': 'o',
                '\u1ED3': 'o',
                '\u1ED1': 'o',
                '\u1ED7': 'o',
                '\u1ED5': 'o',
                '\xF5': 'o',
                '\u1E4D': 'o',
                '\u022D': 'o',
                '\u1E4F': 'o',
                '\u014D': 'o',
                '\u1E51': 'o',
                '\u1E53': 'o',
                '\u014F': 'o',
                '\u022F': 'o',
                '\u0231': 'o',
                '\xF6': 'o',
                '\u022B': 'o',
                '\u1ECF': 'o',
                '\u0151': 'o',
                '\u01D2': 'o',
                '\u020D': 'o',
                '\u020F': 'o',
                '\u01A1': 'o',
                '\u1EDD': 'o',
                '\u1EDB': 'o',
                '\u1EE1': 'o',
                '\u1EDF': 'o',
                '\u1EE3': 'o',
                '\u1ECD': 'o',
                '\u1ED9': 'o',
                '\u01EB': 'o',
                '\u01ED': 'o',
                '\xF8': 'o',
                '\u01FF': 'o',
                '\u0254': 'o',
                '\uA74B': 'o',
                '\uA74D': 'o',
                '\u0275': 'o',
                '\u01A3': 'oi',
                '\u0223': 'ou',
                '\uA74F': 'oo',
                '\u24DF': 'p',
                '\uFF50': 'p',
                '\u1E55': 'p',
                '\u1E57': 'p',
                '\u01A5': 'p',
                '\u1D7D': 'p',
                '\uA751': 'p',
                '\uA753': 'p',
                '\uA755': 'p',
                '\u24E0': 'q',
                '\uFF51': 'q',
                '\u024B': 'q',
                '\uA757': 'q',
                '\uA759': 'q',
                '\u24E1': 'r',
                '\uFF52': 'r',
                '\u0155': 'r',
                '\u1E59': 'r',
                '\u0159': 'r',
                '\u0211': 'r',
                '\u0213': 'r',
                '\u1E5B': 'r',
                '\u1E5D': 'r',
                '\u0157': 'r',
                '\u1E5F': 'r',
                '\u024D': 'r',
                '\u027D': 'r',
                '\uA75B': 'r',
                '\uA7A7': 'r',
                '\uA783': 'r',
                '\u24E2': 's',
                '\uFF53': 's',
                '\xDF': 's',
                '\u015B': 's',
                '\u1E65': 's',
                '\u015D': 's',
                '\u1E61': 's',
                '\u0161': 's',
                '\u1E67': 's',
                '\u1E63': 's',
                '\u1E69': 's',
                '\u0219': 's',
                '\u015F': 's',
                '\u023F': 's',
                '\uA7A9': 's',
                '\uA785': 's',
                '\u1E9B': 's',
                '\u24E3': 't',
                '\uFF54': 't',
                '\u1E6B': 't',
                '\u1E97': 't',
                '\u0165': 't',
                '\u1E6D': 't',
                '\u021B': 't',
                '\u0163': 't',
                '\u1E71': 't',
                '\u1E6F': 't',
                '\u0167': 't',
                '\u01AD': 't',
                '\u0288': 't',
                '\u2C66': 't',
                '\uA787': 't',
                '\uA729': 'tz',
                '\u24E4': 'u',
                '\uFF55': 'u',
                '\xF9': 'u',
                '\xFA': 'u',
                '\xFB': 'u',
                '\u0169': 'u',
                '\u1E79': 'u',
                '\u016B': 'u',
                '\u1E7B': 'u',
                '\u016D': 'u',
                '\xFC': 'u',
                '\u01DC': 'u',
                '\u01D8': 'u',
                '\u01D6': 'u',
                '\u01DA': 'u',
                '\u1EE7': 'u',
                '\u016F': 'u',
                '\u0171': 'u',
                '\u01D4': 'u',
                '\u0215': 'u',
                '\u0217': 'u',
                '\u01B0': 'u',
                '\u1EEB': 'u',
                '\u1EE9': 'u',
                '\u1EEF': 'u',
                '\u1EED': 'u',
                '\u1EF1': 'u',
                '\u1EE5': 'u',
                '\u1E73': 'u',
                '\u0173': 'u',
                '\u1E77': 'u',
                '\u1E75': 'u',
                '\u0289': 'u',
                '\u24E5': 'v',
                '\uFF56': 'v',
                '\u1E7D': 'v',
                '\u1E7F': 'v',
                '\u028B': 'v',
                '\uA75F': 'v',
                '\u028C': 'v',
                '\uA761': 'vy',
                '\u24E6': 'w',
                '\uFF57': 'w',
                '\u1E81': 'w',
                '\u1E83': 'w',
                '\u0175': 'w',
                '\u1E87': 'w',
                '\u1E85': 'w',
                '\u1E98': 'w',
                '\u1E89': 'w',
                '\u2C73': 'w',
                '\u24E7': 'x',
                '\uFF58': 'x',
                '\u1E8B': 'x',
                '\u1E8D': 'x',
                '\u24E8': 'y',
                '\uFF59': 'y',
                '\u1EF3': 'y',
                '\xFD': 'y',
                '\u0177': 'y',
                '\u1EF9': 'y',
                '\u0233': 'y',
                '\u1E8F': 'y',
                '\xFF': 'y',
                '\u1EF7': 'y',
                '\u1E99': 'y',
                '\u1EF5': 'y',
                '\u01B4': 'y',
                '\u024F': 'y',
                '\u1EFF': 'y',
                '\u24E9': 'z',
                '\uFF5A': 'z',
                '\u017A': 'z',
                '\u1E91': 'z',
                '\u017C': 'z',
                '\u017E': 'z',
                '\u1E93': 'z',
                '\u1E95': 'z',
                '\u01B6': 'z',
                '\u0225': 'z',
                '\u0240': 'z',
                '\u2C6C': 'z',
                '\uA763': 'z',
                '\u0386': '\u0391',
                '\u0388': '\u0395',
                '\u0389': '\u0397',
                '\u038A': '\u0399',
                '\u03AA': '\u0399',
                '\u038C': '\u039F',
                '\u038E': '\u03A5',
                '\u03AB': '\u03A5',
                '\u038F': '\u03A9',
                '\u03AC': '\u03B1',
                '\u03AD': '\u03B5',
                '\u03AE': '\u03B7',
                '\u03AF': '\u03B9',
                '\u03CA': '\u03B9',
                '\u0390': '\u03B9',
                '\u03CC': '\u03BF',
                '\u03CD': '\u03C5',
                '\u03CB': '\u03C5',
                '\u03B0': '\u03C5',
                '\u03C9': '\u03C9',
                '\u03C2': '\u03C3'
            };
            DataUtil.fnOperators = {
                /**
                 * Returns true when the actual input is equal to the given input.
                 * @param  {string|number|boolean} actual
                 * @param  {string|number|boolean} expected
                 * @param  {boolean} ignoreCase?
                 * @param  {boolean} ignoreAccent?
                 */
                equal: function equal(actual, expected, ignoreCase, ignoreAccent) {
                    if (ignoreAccent) {
                        actual = DataUtil.ignoreDiacritics(actual);
                        expected = DataUtil.ignoreDiacritics(expected);
                    }
                    if (ignoreCase) {
                        return DataUtil.toLowerCase(actual) === DataUtil.toLowerCase(expected);
                    }
                    return actual === expected;
                },
                /**
                 * Returns true when the actual input is not equal to the given input.
                 * @param  {string|number|boolean} actual
                 * @param  {string|number|boolean} expected
                 * @param  {boolean} ignoreCase?
                 */
                notequal: function notequal(actual, expected, ignoreCase, ignoreAccent) {
                    if (ignoreAccent) {
                        actual = DataUtil.ignoreDiacritics(actual);
                        expected = DataUtil.ignoreDiacritics(expected);
                    }
                    return !DataUtil.fnOperators.equal(actual, expected, ignoreCase);
                },
                /**
                 * Returns true when the actual input is less than to the given input.
                 * @param  {string|number|boolean} actual
                 * @param  {string|number|boolean} expected
                 * @param  {boolean} ignoreCase?
                 */
                lessthan: function lessthan(actual, expected, ignoreCase) {
                    if (ignoreCase) {
                        return DataUtil.toLowerCase(actual) < DataUtil.toLowerCase(expected);
                    }
                    return actual < expected;
                },
                /**
                 * Returns true when the actual input is greater than to the given input.
                 * @param  {string|number|boolean} actual
                 * @param  {string|number|boolean} expected
                 * @param  {boolean} ignoreCase?
                 */
                greaterthan: function greaterthan(actual, expected, ignoreCase) {
                    if (ignoreCase) {
                        return DataUtil.toLowerCase(actual) > DataUtil.toLowerCase(expected);
                    }
                    return actual > expected;
                },
                /**
                 * Returns true when the actual input is less than or equal to the given input.
                 * @param  {string|number|boolean} actual
                 * @param  {string|number|boolean} expected
                 * @param  {boolean} ignoreCase?
                 */
                lessthanorequal: function lessthanorequal(actual, expected, ignoreCase) {
                    if (ignoreCase) {
                        return DataUtil.toLowerCase(actual) <= DataUtil.toLowerCase(expected);
                    }
                    return actual <= expected;
                },
                /**
                 * Returns true when the actual input is greater than or equal to the given input.
                 * @param  {string|number|boolean} actual
                 * @param  {string|number|boolean} expected
                 * @param  {boolean} ignoreCase?
                 */
                greaterthanorequal: function greaterthanorequal(actual, expected, ignoreCase) {
                    if (ignoreCase) {
                        return DataUtil.toLowerCase(actual) >= DataUtil.toLowerCase(expected);
                    }
                    return actual >= expected;
                },
                /**
                 * Returns true when the actual input contains the given string.
                 * @param  {string|number} actual
                 * @param  {string|number} expected
                 * @param  {boolean} ignoreCase?
                 */
                contains: function contains(actual, expected, ignoreCase, ignoreAccent) {
                    if (ignoreAccent) {
                        actual = DataUtil.ignoreDiacritics(actual);
                        expected = DataUtil.ignoreDiacritics(expected);
                    }
                    if (ignoreCase) {
                        return !isNullOrUndefined(actual) && !isNullOrUndefined(expected) && DataUtil.toLowerCase(actual).indexOf(DataUtil.toLowerCase(expected)) !== -1;
                    }
                    return !isNullOrUndefined(actual) && !isNullOrUndefined(expected) && actual.toString().indexOf(expected) !== -1;
                },
                /**
                 * Returns true when the given input value is not null.
                 * @param  {string|number} actual
                 * @returns boolean
                 */
                notnull: function notnull(actual) {
                    return actual !== null;
                },
                /**
                 * Returns true when the given input value is null.
                 * @param  {string|number} actual
                 * @returns boolean
                 */
                isnull: function isnull(actual) {
                    return actual === null;
                },
                /**
                 * Returns true when the actual input starts with the given string
                 * @param  {string} actual
                 * @param  {string} expected
                 * @param  {boolean} ignoreCase?
                 */
                startswith: function startswith(actual, expected, ignoreCase, ignoreAccent) {
                    if (ignoreAccent) {
                        actual = DataUtil.ignoreDiacritics(actual);
                        expected = DataUtil.ignoreDiacritics(expected);
                    }
                    if (ignoreCase) {
                        return actual && expected && DataUtil.startsWith(DataUtil.toLowerCase(actual), DataUtil.toLowerCase(expected));
                    }
                    return actual && expected && DataUtil.startsWith(actual, expected);
                },
                /**
                 * Returns true when the actual input ends with the given string.
                 * @param  {string} actual
                 * @param  {string} expected
                 * @param  {boolean} ignoreCase?
                 */
                endswith: function endswith(actual, expected, ignoreCase, ignoreAccent) {
                    if (ignoreAccent) {
                        actual = DataUtil.ignoreDiacritics(actual);
                        expected = DataUtil.ignoreDiacritics(expected);
                    }
                    if (ignoreCase) {
                        return actual && expected && DataUtil.endsWith(DataUtil.toLowerCase(actual), DataUtil.toLowerCase(expected));
                    }
                    return actual && expected && DataUtil.endsWith(actual, expected);
                },
                /**
                 * It will return the filter operator based on the filter symbol.
                 * @param  {string} operator
                 * @hidden
                 */
                processSymbols: function processSymbols(operator) {
                    var fnName = DataUtil.operatorSymbols[operator];
                    if (fnName) {
                        var _fn = DataUtil.fnOperators[fnName];
                        return _fn;
                    }
                    return DataUtil.throwError('Query - Process Operator : Invalid operator');
                },
                /**
                 * It will return the valid filter operator based on the specified operators.
                 * @param  {string} operator
                 * @hidden
                 */
                processOperator: function processOperator(operator) {
                    var fn = DataUtil.fnOperators[operator];
                    if (fn) {
                        return fn;
                    }
                    return DataUtil.fnOperators.processSymbols(operator);
                }
            };
            /**
             * To perform the parse operation on JSON data, like convert to string from JSON or convert to JSON from string.
             */
            DataUtil.parse = {
                /**
                 * Parse the given string to the plain JavaScript object.
                 * @param  {string|Object|Object[]} jsonText
                 */
                parseJson: function parseJson(jsonText) {
                    if (typeof jsonText === 'string') {
                        jsonText = JSON.parse(jsonText, DataUtil.parse.jsonReviver);
                    } else if (jsonText instanceof Array) {
                        DataUtil.parse.iterateAndReviveArray(jsonText);
                    } else if ((typeof jsonText === 'undefined' ? 'undefined' : _typeof(jsonText)) === 'object') {
                        DataUtil.parse.iterateAndReviveJson(jsonText);
                    }
                    return jsonText;
                },
                /**
                 * It will perform on array of values.
                 * @param  {string[]|Object[]} array
                 * @hidden
                 */
                iterateAndReviveArray: function iterateAndReviveArray(array) {
                    for (var i = 0; i < array.length; i++) {
                        if (_typeof(array[i]) === 'object') {
                            DataUtil.parse.iterateAndReviveJson(array[i]);
                        } else if (typeof array[i] === 'string' && !/^[\s]*\[|^[\s]*\{|\"/g.test(array[i])) {
                            array[i] = DataUtil.parse.jsonReviver('', array[i]);
                        } else {
                            array[i] = DataUtil.parse.parseJson(array[i]);
                        }
                    }
                },
                /**
                 * It will perform on JSON values
                 * @param  {JSON} json
                 * @hidden
                 */
                iterateAndReviveJson: function iterateAndReviveJson(json) {
                    var value = void 0;
                    var keys = Object.keys(json);
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var prop = _step2.value;

                            if (DataUtil.startsWith(prop, '__')) {
                                continue;
                            }
                            value = json[prop];
                            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                                if (value instanceof Array) {
                                    DataUtil.parse.iterateAndReviveArray(value);
                                } else if (value) {
                                    DataUtil.parse.iterateAndReviveJson(value);
                                }
                            } else {
                                json[prop] = DataUtil.parse.jsonReviver(json[prop], value);
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
                },
                /**
                 * It will perform on JSON values
                 * @param  {string} field
                 * @param  {string|Date} value
                 * @hidden
                 */
                jsonReviver: function jsonReviver(field, value) {
                    var dupValue = value;
                    if (typeof value === 'string') {
                        var ms = /^\/Date\(([+-]?[0-9]+)([+-][0-9]{4})?\)\/$/.exec(value);
                        if (ms) {
                            return DataUtil.dateParse.toTimeZone(new Date(parseInt(ms[1], 10)), DataUtil.serverTimezoneOffset, true);
                        } else if (/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*){1})([zZ]|([+\-])(\d\d):?(\d\d))?$/.test(value)) {
                            var arr = dupValue.split(/[^0-9]/);
                            value = DataUtil.dateParse.toTimeZone(new Date(parseInt(arr[0], 10), parseInt(arr[1], 10) - 1, parseInt(arr[2], 10), parseInt(arr[3], 10), parseInt(arr[4], 10), parseInt(arr[5], 10)), DataUtil.serverTimezoneOffset, true);
                        }
                    }
                    return value;
                },
                /**
                 * Check wheather the given value is JSON or not.
                 * @param  {Object[]} jsonData
                 */
                isJson: function isJson(jsonData) {
                    if (typeof jsonData[0] === 'string') {
                        return jsonData;
                    }
                    return DataUtil.parse.parseJson(jsonData);
                },
                /**
                 * Checks wheather the given value is GUID or not.
                 * @param  {string} value
                 */
                isGuid: function isGuid(value) {
                    var regex = /[A-Fa-f0-9]{8}(?:-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}/i;
                    var match = regex.exec(value);
                    return match != null;
                },
                /**
                 * The method used to replace the value based on the type.
                 * @param  {Object} value
                 * @param  {boolean} stringify
                 * @hidden
                 */
                replacer: function replacer(value, stringify) {
                    if (DataUtil.isPlainObject(value)) {
                        return DataUtil.parse.jsonReplacer(value, stringify);
                    }
                    if (value instanceof Array) {
                        return DataUtil.parse.arrayReplacer(value);
                    }
                    if (value instanceof Date) {
                        return DataUtil.parse.jsonReplacer({ val: value }, stringify).val;
                    }
                    return value;
                },
                /**
                 * It will replace the JSON value.
                 * @param  {string} key
                 * @param  {Object} val
                 * @hidden
                 */
                jsonReplacer: function jsonReplacer(val, stringify) {
                    var value = void 0;
                    var keys = Object.keys(val);
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var prop = _step3.value;

                            value = val[prop];
                            if (!(value instanceof Date)) {
                                continue;
                            }
                            var d = value;
                            val[prop] = DataUtil.dateParse.toTimeZone(DataUtil.dateParse.addSelfOffset(d), DataUtil.serverTimezoneOffset).toJSON();
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

                    return val;
                },
                /**
                 * It will replace the Array of value.
                 * @param  {string} key
                 * @param  {Object[]} val
                 * @hidden
                 */
                arrayReplacer: function arrayReplacer(val) {
                    for (var i = 0; i < val.length; i++) {
                        if (DataUtil.isPlainObject(val[i])) {
                            val[i] = DataUtil.parse.jsonReplacer(val[i]);
                        } else if (val[i] instanceof Date) {
                            val[i] = DataUtil.parse.jsonReplacer({ date: val[i] }).date;
                        }
                    }
                    return val;
                }
            };
            /**
             * @hidden
             */
            DataUtil.dateParse = {
                addSelfOffset: function addSelfOffset(input) {
                    return new Date(+input - input.getTimezoneOffset() * 60000);
                },
                toUTC: function toUTC(input) {
                    return new Date(+input + input.getTimezoneOffset() * 60000);
                },
                toTimeZone: function toTimeZone(input, offset, utc) {
                    if (offset === null) {
                        return input;
                    }
                    var unix = utc ? DataUtil.dateParse.toUTC(input) : input;
                    return new Date(+unix - offset * 3600000);
                }
            };

            /**
             * Adaptors are specific data source type aware interfaces that are used by DataManager to communicate with DataSource.
             * This is the base adaptor class that other adaptors can extend.
             * @hidden
             */

            _export('Adaptor', Adaptor = function () {
                /**
                 * Constructor for Adaptor class
                 * @param  {DataOptions} ds?
                 * @hidden
                 * @returns aggregates
                 */
                function Adaptor(ds) {
                    _classCallCheck(this, Adaptor);

                    // common options for all the adaptors 
                    this.options = {
                        from: 'table',
                        requestType: 'json',
                        sortBy: 'sorted',
                        select: 'select',
                        skip: 'skip',
                        group: 'group',
                        take: 'take',
                        search: 'search',
                        count: 'requiresCounts',
                        where: 'where',
                        aggregates: 'aggregates'
                    };
                    /**
                     * Specifies the type of adaptor.
                     * @default Adaptor
                     */
                    this.type = Adaptor;
                    this.dataSource = ds;
                    this.pvt = {};
                }
                /**
                 * Returns the data from the query processing.
                 * @param  {Object} data
                 * @param  {DataOptions} ds?
                 * @param  {Query} query?
                 * @param  {XMLHttpRequest} xhr?
                 * @returns Object
                 */


                _createClass(Adaptor, [{
                    key: 'processResponse',
                    value: function processResponse(data, ds, query, xhr) {
                        return data;
                    }
                }]);

                return Adaptor;
            }());

            _export('JsonAdaptor', JsonAdaptor = function (_Adaptor) {
                _inherits(JsonAdaptor, _Adaptor);

                function JsonAdaptor() {
                    _classCallCheck(this, JsonAdaptor);

                    return _possibleConstructorReturn(this, (JsonAdaptor.__proto__ || Object.getPrototypeOf(JsonAdaptor)).apply(this, arguments));
                }

                _createClass(JsonAdaptor, [{
                    key: 'processQuery',
                    value: function processQuery(dataManager, query) {
                        var result = dataManager.dataSource.json.slice(0);
                        var count = result.length;
                        var countFlg = true;
                        var ret = void 0;
                        var key = void 0;
                        var agg = {};
                        for (var i = 0; i < query.queries.length; i++) {
                            key = query.queries[i];
                            ret = this[key.fn].call(this, result, key.e, query);
                            if (key.fn === 'onAggregates') {
                                agg[key.e.field + ' - ' + key.e.type] = ret;
                            } else {
                                result = ret !== undefined ? ret : result;
                            }
                            if (key.fn === 'onPage' || key.fn === 'onSkip' || key.fn === 'onTake' || key.fn === 'onRange') {
                                countFlg = false;
                            }
                            if (countFlg) {
                                count = result.length;
                            }
                        }
                        if (query.isCountRequired) {
                            result = {
                                result: result,
                                count: count,
                                aggregates: agg
                            };
                        }
                        return result;
                    }
                }, {
                    key: 'batchRequest',
                    value: function batchRequest(dm, changes, e) {
                        var i = void 0;
                        for (i = 0; i < changes.addedRecords.length; i++) {
                            this.insert(dm, changes.addedRecords[i]);
                        }
                        for (i = 0; i < changes.changedRecords.length; i++) {
                            this.update(dm, e.key, changes.changedRecords[i]);
                        }
                        for (i = 0; i < changes.deletedRecords.length; i++) {
                            this.remove(dm, e.key, changes.deletedRecords[i]);
                        }
                        return changes;
                    }
                }, {
                    key: 'onWhere',
                    value: function onWhere(ds, e) {
                        if (!ds || !ds.length) {
                            return ds;
                        }
                        return ds.filter(function (obj) {
                            if (e) {
                                return e.validate(obj);
                            }
                        });
                    }
                }, {
                    key: 'onAggregates',
                    value: function onAggregates(ds, e) {
                        var fn = DataUtil.aggregates[e.type];
                        if (!ds || !fn || ds.length === 0) {
                            return null;
                        }
                        return fn(ds, e.field);
                    }
                }, {
                    key: 'onSearch',
                    value: function onSearch(ds, e) {
                        if (!ds || !ds.length) {
                            return ds;
                        }
                        if (e.fieldNames.length === 0) {
                            DataUtil.getFieldList(ds[0], e.fieldNames);
                        }
                        return ds.filter(function (obj) {
                            for (var j = 0; j < e.fieldNames.length; j++) {
                                if (e.comparer.call(obj, DataUtil.getObject(e.fieldNames[j], obj), e.searchKey, e.ignoreCase, e.ignoreAccent)) {
                                    return true;
                                }
                            }
                            return false;
                        });
                    }
                }, {
                    key: 'onSortBy',
                    value: function onSortBy(ds, e, query) {
                        if (!ds || !ds.length) {
                            return ds;
                        }
                        var fnCompare = void 0;
                        var field = DataUtil.getValue(e.fieldName, query);
                        if (!field) {
                            return ds.sort(e.comparer);
                        }
                        if (field instanceof Array) {
                            field = field.slice(0);
                            for (var i = field.length - 1; i >= 0; i--) {
                                if (!field[i]) {
                                    continue;
                                }
                                fnCompare = e.comparer;
                                if (DataUtil.endsWith(field[i], ' desc')) {
                                    fnCompare = DataUtil.fnSort('descending');
                                    field[i] = field[i].replace(' desc', '');
                                }
                                ds = DataUtil.sort(ds, field[i], fnCompare);
                            }
                            return ds;
                        }
                        return DataUtil.sort(ds, field, e.comparer);
                    }
                }, {
                    key: 'onGroup',
                    value: function onGroup(ds, e, query) {
                        if (!ds || !ds.length) {
                            return ds;
                        }
                        var aggQuery = Query.filterQueries(query.queries, 'onAggregates');
                        var agg = [];
                        if (aggQuery.length) {
                            var tmp = void 0;
                            for (var i = 0; i < aggQuery.length; i++) {
                                tmp = aggQuery[i].e;
                                agg.push({ type: tmp.type, field: DataUtil.getValue(tmp.field, query) });
                            }
                        }
                        return DataUtil.group(ds, DataUtil.getValue(e.fieldName, query), agg, null, null, e.comparer);
                    }
                }, {
                    key: 'onPage',
                    value: function onPage(ds, e, query) {
                        var size = DataUtil.getValue(e.pageSize, query);
                        var start = (DataUtil.getValue(e.pageIndex, query) - 1) * size;
                        var end = start + size;
                        if (!ds || !ds.length) {
                            return ds;
                        }
                        return ds.slice(start, end);
                    }
                }, {
                    key: 'onRange',
                    value: function onRange(ds, e) {
                        if (!ds || !ds.length) {
                            return ds;
                        }
                        return ds.slice(DataUtil.getValue(e.start), DataUtil.getValue(e.end));
                    }
                }, {
                    key: 'onTake',
                    value: function onTake(ds, e) {
                        if (!ds || !ds.length) {
                            return ds;
                        }
                        return ds.slice(0, DataUtil.getValue(e.nos));
                    }
                }, {
                    key: 'onSkip',
                    value: function onSkip(ds, e) {
                        if (!ds || !ds.length) {
                            return ds;
                        }
                        return ds.slice(DataUtil.getValue(e.nos));
                    }
                }, {
                    key: 'onSelect',
                    value: function onSelect(ds, e) {
                        if (!ds || !ds.length) {
                            return ds;
                        }
                        return DataUtil.select(ds, DataUtil.getValue(e.fieldNames));
                    }
                }, {
                    key: 'insert',
                    value: function insert(dm, data, tableName, query, position) {
                        if (isNullOrUndefined(position)) {
                            return dm.dataSource.json.push(data);
                        } else {
                            return dm.dataSource.json.splice(position, 0, data);
                        }
                    }
                }, {
                    key: 'remove',
                    value: function remove(dm, keyField, value, tableName) {
                        var ds = dm.dataSource.json;
                        var i = void 0;
                        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                            value = value[keyField];
                        }
                        for (i = 0; i < ds.length; i++) {
                            if (ds[i][keyField] === value) {
                                break;
                            }
                        }
                        return i !== ds.length ? ds.splice(i, 1) : null;
                    }
                }, {
                    key: 'update',
                    value: function update(dm, keyField, value, tableName) {
                        var ds = dm.dataSource.json;
                        var i = void 0;
                        var key = value[keyField];
                        for (i = 0; i < ds.length; i++) {
                            if (ds[i][keyField] === key) {
                                break;
                            }
                        }
                        return i < ds.length ? merge(ds[i], value) : null;
                    }
                }]);

                return JsonAdaptor;
            }(Adaptor));

            _export('UrlAdaptor', UrlAdaptor = function (_Adaptor2) {
                _inherits(UrlAdaptor, _Adaptor2);

                function UrlAdaptor() {
                    _classCallCheck(this, UrlAdaptor);

                    return _possibleConstructorReturn(this, (UrlAdaptor.__proto__ || Object.getPrototypeOf(UrlAdaptor)).apply(this, arguments));
                }

                _createClass(UrlAdaptor, [{
                    key: 'processQuery',
                    value: function processQuery(dm, query, hierarchyFilters) {
                        var queries = this.getQueryRequest(query);
                        var singles = Query.filterQueryLists(query.queries, ['onSelect', 'onPage', 'onSkip', 'onTake', 'onRange']);
                        var params = query.params;
                        var url = dm.dataSource.url;
                        var temp = void 0;
                        var skip = void 0;
                        var take = null;
                        var options = this.options;
                        var request = { sorts: [], groups: [], filters: [], searches: [], aggregates: [] };
                        // calc Paging & Range
                        if ('onPage' in singles) {
                            temp = singles.onPage;
                            skip = DataUtil.getValue(temp.pageIndex, query);
                            take = DataUtil.getValue(temp.pageSize, query);
                            skip = (skip - 1) * take;
                        } else if ('onRange' in singles) {
                            temp = singles.onRange;
                            skip = temp.start;
                            take = temp.end - temp.start;
                        }
                        // Sorting
                        for (var i = 0; i < queries.sorts.length; i++) {
                            temp = DataUtil.getValue(queries.sorts[i].e.fieldName, query);
                            request.sorts.push(DataUtil.callAdaptorFunction(this, 'onEachSort', { name: temp, direction: queries.sorts[i].e.direction }, query));
                        }
                        // hierarchy
                        if (hierarchyFilters) {
                            temp = this.getFiltersFrom(hierarchyFilters, query);
                            if (temp) {
                                request.filters.push(DataUtil.callAdaptorFunction(this, 'onEachWhere', temp.toJson(), query));
                            }
                        }
                        // Filters
                        for (var _i = 0; _i < queries.filters.length; _i++) {
                            request.filters.push(DataUtil.callAdaptorFunction(this, 'onEachWhere', queries.filters[_i].e.toJson(), query));
                            var _keys = _typeof(request.filters[_i]) === 'object' ? Object.keys(request.filters[_i]) : [];
                            var _iteratorNormalCompletion4 = true;
                            var _didIteratorError4 = false;
                            var _iteratorError4 = undefined;

                            try {
                                for (var _iterator4 = _keys[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                    var prop = _step4.value;

                                    if (DataUtil.isNull(request[prop])) {
                                        delete request[prop];
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
                        // Searches
                        for (var _i2 = 0; _i2 < queries.searches.length; _i2++) {
                            temp = queries.searches[_i2].e;
                            request.searches.push(DataUtil.callAdaptorFunction(this, 'onEachSearch', {
                                fields: temp.fieldNames,
                                operator: temp.operator,
                                key: temp.searchKey,
                                ignoreCase: temp.ignoreCase
                            }, query));
                        }
                        // Grouping
                        for (var _i3 = 0; _i3 < queries.groups.length; _i3++) {
                            request.groups.push(DataUtil.getValue(queries.groups[_i3].e.fieldName, query));
                        }
                        // aggregates
                        for (var _i4 = 0; _i4 < queries.aggregates.length; _i4++) {
                            temp = queries.aggregates[_i4].e;
                            request.aggregates.push({ type: temp.type, field: DataUtil.getValue(temp.field, query) });
                        }
                        var req = {};
                        this.getRequestQuery(options, query, singles, request, req);
                        // Params
                        DataUtil.callAdaptorFunction(this, 'addParams', { dm: dm, query: query, params: params, reqParams: req });
                        // cleanup
                        var keys = Object.keys(req);
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = keys[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var _prop = _step5.value;

                                if (DataUtil.isNull(req[_prop]) || req[_prop] === '' || req[_prop].length === 0) {
                                    delete req[_prop];
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

                        if (!(options.skip in req && options.take in req) && take !== null) {
                            req[options.skip] = DataUtil.callAdaptorFunction(this, 'onSkip', skip, query);
                            req[options.take] = DataUtil.callAdaptorFunction(this, 'onTake', take, query);
                        }
                        var p = this.pvt;
                        this.pvt = {};
                        if (this.options.requestType === 'json') {
                            return {
                                data: JSON.stringify(req),
                                url: url,
                                pvtData: p,
                                type: 'POST',
                                contentType: 'application/json; charset=utf-8'
                            };
                        }
                        temp = this.convertToQueryString(req, query, dm);
                        temp = (dm.dataSource.url.indexOf('?') !== -1 ? '&' : '/') + temp;
                        return {
                            type: 'GET', url: temp.length ? url.replace(/\/*$/, temp) : url, pvtData: p
                        };
                    }
                }, {
                    key: 'getRequestQuery',
                    value: function getRequestQuery(options, query, singles, request, request1) {
                        var param = 'param';
                        var req = request1;
                        req[options.from] = query.fromTable;
                        if (options.expand) {
                            req[options.expand] = query.expands;
                        }
                        req[options.select] = 'onSelect' in singles ? DataUtil.callAdaptorFunction(this, 'onSelect', DataUtil.getValue(singles.onSelect.fieldNames, query), query) : '';
                        req[options.count] = query.isCountRequired ? DataUtil.callAdaptorFunction(this, 'onCount', query.isCountRequired, query) : '';
                        req[options.search] = request.searches.length ? DataUtil.callAdaptorFunction(this, 'onSearch', request.searches, query) : '';
                        req[options.skip] = 'onSkip' in singles ? DataUtil.callAdaptorFunction(this, 'onSkip', DataUtil.getValue(singles.onSkip.nos, query), query) : '';
                        req[options.take] = 'onTake' in singles ? DataUtil.callAdaptorFunction(this, 'onTake', DataUtil.getValue(singles.onTake.nos, query), query) : '';
                        req[options.where] = request.filters.length || request.searches.length ? DataUtil.callAdaptorFunction(this, 'onWhere', request.filters, query) : '';
                        req[options.sortBy] = request.sorts.length ? DataUtil.callAdaptorFunction(this, 'onSortBy', request.sorts, query) : '';
                        req[options.group] = request.groups.length ? DataUtil.callAdaptorFunction(this, 'onGroup', request.groups, query) : '';
                        req[options.aggregates] = request.aggregates.length ? DataUtil.callAdaptorFunction(this, 'onAggregates', request.aggregates, query) : '';
                        req[param] = [];
                    }
                }, {
                    key: 'convertToQueryString',
                    value: function convertToQueryString(request, query, dm) {
                        return '';
                        // this needs to be overridden
                    }
                }, {
                    key: 'processResponse',
                    value: function processResponse(data, ds, query, xhr, request, changes) {
                        var requests = request;
                        var pvt = requests.pvtData || {};
                        var groupDs = data.groupDs;
                        if (xhr && xhr.getResponseHeader('Content-Type') && xhr.getResponseHeader('Content-Type').indexOf('xml') !== -1) {
                            return query.isCountRequired ? { result: [], count: 0 } : [];
                        }
                        var d = JSON.parse(requests.data);
                        if (d && d.action === 'batch' && data.addedRecords) {
                            changes.addedRecords = data.addedRecords;
                            return changes;
                        }
                        if (data.d) {
                            data = data.d;
                        }
                        var args = {};
                        if ('count' in data) {
                            args.count = data.count;
                        }
                        args.result = data.result ? data.result : data;
                        this.getAggregateResult(pvt, data, args, groupDs);
                        return DataUtil.isNull(args.count) ? args.result : { result: args.result, count: args.count, aggregates: args.aggregates };
                    }
                }, {
                    key: 'onGroup',
                    value: function onGroup(e) {
                        this.pvt.groups = e;
                        return e;
                    }
                }, {
                    key: 'onAggregates',
                    value: function onAggregates(e) {
                        this.pvt.aggregates = e;
                    }
                }, {
                    key: 'batchRequest',
                    value: function batchRequest(dm, changes, e) {
                        var url = void 0;
                        var key = void 0;
                        return {
                            type: 'POST',
                            url: dm.dataSource.batchUrl || dm.dataSource.crudUrl || dm.dataSource.removeUrl || dm.dataSource.url,
                            contentType: 'application/json; charset=utf-8',
                            dataType: 'json',
                            data: JSON.stringify({
                                changed: changes.changedRecords,
                                added: changes.addedRecords,
                                deleted: changes.deletedRecords,
                                action: 'batch',
                                table: e[url],
                                key: e[key]
                            })
                        };
                    }
                }, {
                    key: 'beforeSend',
                    value: function beforeSend(dm, request) {}
                    // need to extend this method

                    /**
                     * Prepare and returns request body which is used to insert a new record in the table.
                     * @param  {DataManager} dm
                     * @param  {Object} data
                     * @param  {string} tableName
                     */

                }, {
                    key: 'insert',
                    value: function insert(dm, data, tableName) {
                        return {
                            url: dm.dataSource.insertUrl || dm.dataSource.crudUrl || dm.dataSource.url,
                            data: JSON.stringify({
                                value: data,
                                table: tableName,
                                action: 'insert'
                            })
                        };
                    }
                }, {
                    key: 'remove',
                    value: function remove(dm, keyField, value, tableName) {
                        return {
                            type: 'POST',
                            url: dm.dataSource.removeUrl || dm.dataSource.crudUrl || dm.dataSource.url,
                            data: JSON.stringify({
                                key: value,
                                keyColumn: keyField,
                                table: tableName,
                                action: 'remove'
                            })
                        };
                    }
                }, {
                    key: 'update',
                    value: function update(dm, keyField, value, tableName) {
                        return {
                            type: 'POST',
                            url: dm.dataSource.updateUrl || dm.dataSource.crudUrl || dm.dataSource.url,
                            data: JSON.stringify({
                                value: value,
                                action: 'update',
                                keyColumn: keyField,
                                key: value[keyField],
                                table: tableName
                            })
                        };
                    }
                }, {
                    key: 'getFiltersFrom',
                    value: function getFiltersFrom(data, query) {
                        var key = query.fKey;
                        var value = void 0;
                        var prop = key;
                        var pKey = query.key;
                        var predicats = [];
                        if (_typeof(data[0]) !== 'object') {
                            prop = null;
                        }
                        for (var i = 0; i < data.length; i++) {
                            if (_typeof(data[0]) === 'object') {
                                value = DataUtil.getObject(pKey || prop, data[i]);
                            } else {
                                value = data[i];
                            }
                            predicats.push(new Predicate(key, 'equal', value));
                        }
                        return Predicate.or(predicats);
                    }
                }, {
                    key: 'getAggregateResult',
                    value: function getAggregateResult(pvt, data, args, groupDs) {
                        var pData = data;
                        if (data && data.result) {
                            pData = data.result;
                        }
                        if (pvt && pvt.aggregates && pvt.aggregates.length) {
                            var agg = pvt.aggregates;
                            var _fn2 = void 0;
                            var aggregateData = pData;
                            var _res2 = {};
                            if (data.aggregate) {
                                aggregateData = data.aggregate;
                            }
                            for (var i = 0; i < agg.length; i++) {
                                _fn2 = DataUtil.aggregates[agg[i].type];
                                if (_fn2) {
                                    _res2[agg[i].field + ' - ' + agg[i].type] = _fn2(aggregateData, agg[i].field);
                                }
                            }
                            args.aggregates = _res2;
                        }
                        if (pvt && pvt.groups && pvt.groups.length) {
                            var groups = pvt.groups;
                            for (var _i5 = 0; _i5 < groups.length; _i5++) {
                                var level = null;
                                if (!isNullOrUndefined(groupDs)) {
                                    groupDs = DataUtil.group(groupDs, groups[_i5]);
                                }
                                pData = DataUtil.group(pData, groups[_i5], pvt.aggregates, level, groupDs);
                            }
                            args.result = pData;
                        }
                        return args;
                    }
                }, {
                    key: 'getQueryRequest',
                    value: function getQueryRequest(query) {
                        var req = { sorts: [], groups: [], filters: [], searches: [], aggregates: [] };
                        req.sorts = Query.filterQueries(query.queries, 'onSortBy');
                        req.groups = Query.filterQueries(query.queries, 'onGroup');
                        req.filters = Query.filterQueries(query.queries, 'onWhere');
                        req.searches = Query.filterQueries(query.queries, 'onSearch');
                        req.aggregates = Query.filterQueries(query.queries, 'onAggregates');
                        return req;
                    }
                }, {
                    key: 'addParams',
                    value: function addParams(options) {
                        var req = options.reqParams;
                        if (options.params.length) {
                            req.params = {};
                        }
                        var _iteratorNormalCompletion6 = true;
                        var _didIteratorError6 = false;
                        var _iteratorError6 = undefined;

                        try {
                            for (var _iterator6 = options.params[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                var tmp = _step6.value;

                                if (req[tmp.key]) {
                                    throw new Error('Query() - addParams: Custom Param is conflicting other request arguments');
                                }
                                req[tmp.key] = tmp.value;
                                if (tmp.fn) {
                                    req[tmp.key] = tmp.fn.call(options.query, tmp.key, options.query, options.dm);
                                }
                                req.params[tmp.key] = req[tmp.key];
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
                }]);

                return UrlAdaptor;
            }(Adaptor));

            _export('ODataAdaptor', ODataAdaptor = function (_UrlAdaptor) {
                _inherits(ODataAdaptor, _UrlAdaptor);

                function ODataAdaptor() {
                    _classCallCheck(this, ODataAdaptor);

                    var _this4 = _possibleConstructorReturn(this, (ODataAdaptor.__proto__ || Object.getPrototypeOf(ODataAdaptor)).call(this));

                    // options replaced the default adaptor options
                    _this4.options = extend({}, _this4.options, {
                        requestType: 'get',
                        accept: 'application/json;odata=light;q=1,application/json;odata=verbose;q=0.5',
                        multipartAccept: 'multipart/mixed',
                        sortBy: '$orderby',
                        select: '$select',
                        skip: '$skip',
                        take: '$top',
                        count: '$inlinecount',
                        where: '$filter',
                        expand: '$expand',
                        batch: '$batch',
                        changeSet: '--changeset_',
                        batchPre: 'batch_',
                        contentId: 'Content-Id: ',
                        batchContent: 'Content-Type: multipart/mixed; boundary=',
                        changeSetContent: 'Content-Type: application/http\nContent-Transfer-Encoding: binary ',
                        batchChangeSetContentType: 'Content-Type: application/json; charset=utf-8 '
                    });
                    _this4.getModuleName = getValue('getModulename', _this4);
                    return _this4;
                }
                /**
                 * Generate request string based on the filter criteria from query.
                 * @param  {Predicate} pred
                 * @param  {boolean} requiresCast?
                 */


                _createClass(ODataAdaptor, [{
                    key: 'onPredicate',
                    value: function onPredicate(predicate, query, requiresCast) {
                        var returnValue = '';
                        var operator = void 0;
                        var guid = void 0;
                        var val = predicate.value;
                        var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
                        var field = predicate.field ? ODataAdaptor.getField(predicate.field) : null;
                        if (val instanceof Date) {
                            val = 'datetime\'' + DataUtil.parse.replacer(val) + '\'';
                        }
                        if (type === 'string') {
                            val = '\'' + val + '\'';
                            if (requiresCast) {
                                field = 'cast(' + field + ', \'Edm.String\')';
                            }
                            if (DataUtil.parse.isGuid(val)) {
                                guid = 'guid';
                            }
                            if (predicate.ignoreCase) {
                                if (!guid) {
                                    field = 'tolower(' + field + ')';
                                }
                                val = val.toLowerCase();
                            }
                        }
                        operator = DataUtil.odBiOperator[predicate.operator];
                        if (operator) {
                            returnValue += field;
                            returnValue += operator;
                            if (guid) {
                                returnValue += guid;
                            }
                            return returnValue + val;
                        }
                        if (!isNullOrUndefined(this.getModuleName)) {
                            if (this.getModuleName() === 'ODataV4Adaptor') {
                                operator = DataUtil.odv4UniOperator[predicate.operator];
                            }
                        } else {
                            operator = DataUtil.odUniOperator[predicate.operator];
                        }
                        if (operator === 'substringof') {
                            var temp = val;
                            val = field;
                            field = temp;
                        }
                        returnValue += operator + '(';
                        returnValue += field + ',';
                        if (guid) {
                            returnValue += guid;
                        }
                        returnValue += val + ')';
                        return returnValue;
                    }
                }, {
                    key: 'onComplexPredicate',
                    value: function onComplexPredicate(predicate, query, requiresCast) {
                        var res = [];
                        for (var i = 0; i < predicate.predicates.length; i++) {
                            res.push('(' + this.onEachWhere(predicate.predicates[i], query, requiresCast) + ')');
                        }
                        return res.join(' ' + predicate.condition + ' ');
                    }
                }, {
                    key: 'onEachWhere',
                    value: function onEachWhere(filter, query, requiresCast) {
                        return filter.isComplex ? this.onComplexPredicate(filter, query, requiresCast) : this.onPredicate(filter, query, requiresCast);
                    }
                }, {
                    key: 'onWhere',
                    value: function onWhere(filters) {
                        if (this.pvt.search) {
                            filters.push(this.onEachWhere(this.pvt.search, null, true));
                        }
                        return filters.join(' and ');
                    }
                }, {
                    key: 'onEachSearch',
                    value: function onEachSearch(e) {
                        if (e.fields && e.fields.length === 0) {
                            DataUtil.throwError('Query() - Search : oData search requires list of field names to search');
                        }
                        var filter = this.pvt.search || [];
                        for (var i = 0; i < e.fields.length; i++) {
                            filter.push(new Predicate(e.fields[i], e.operator, e.key, e.ignoreCase));
                        }
                        this.pvt.search = filter;
                    }
                }, {
                    key: 'onSearch',
                    value: function onSearch(e) {
                        this.pvt.search = Predicate.or(this.pvt.search);
                        return '';
                    }
                }, {
                    key: 'onEachSort',
                    value: function onEachSort(e) {
                        var res = [];
                        if (e.name instanceof Array) {
                            for (var i = 0; i < e.name.length; i++) {
                                res.push(ODataAdaptor.getField(e.name[i]) + (e.direction === 'descending' ? ' desc' : ''));
                            }
                        } else {
                            res.push(ODataAdaptor.getField(e.name) + (e.direction === 'descending' ? ' desc' : ''));
                        }
                        return res.join(',');
                    }
                }, {
                    key: 'onSortBy',
                    value: function onSortBy(e) {
                        return e.reverse().join(',');
                    }
                }, {
                    key: 'onGroup',
                    value: function onGroup(e) {
                        this.pvt.groups = e;
                        return [];
                    }
                }, {
                    key: 'onSelect',
                    value: function onSelect(e) {
                        for (var i = 0; i < e.length; i++) {
                            e[i] = ODataAdaptor.getField(e[i]);
                        }
                        return e.join(',');
                    }
                }, {
                    key: 'onAggregates',
                    value: function onAggregates(e) {
                        this.pvt.aggregates = e;
                        return '';
                    }
                }, {
                    key: 'onCount',
                    value: function onCount(e) {
                        return e === true ? 'allpages' : '';
                    }
                }, {
                    key: 'beforeSend',
                    value: function beforeSend(dm, request, settings) {
                        if (DataUtil.endsWith(settings.url, this.options.batch) && settings.type.toLowerCase() === 'post') {
                            request.setRequestHeader('Accept', this.options.multipartAccept);
                            request.setRequestHeader('DataServiceVersion', '2.0');
                            request.overrideMimeType('text/plain; charset=x-user-defined');
                        } else {
                            request.setRequestHeader('Accept', this.options.accept);
                        }
                        request.setRequestHeader('DataServiceVersion', '2.0');
                        request.setRequestHeader('MaxDataServiceVersion', '2.0');
                    }
                }, {
                    key: 'processResponse',
                    value: function processResponse(data, ds, query, xhr, request, changes) {
                        var pvtData = 'pvtData';
                        if (!isNullOrUndefined(data.d)) {
                            var dataCopy = query && query.isCountRequired ? data.d.results : data.d;
                            var metaData = '__metadata';
                            if (!isNullOrUndefined(dataCopy)) {
                                for (var i = 0; i < dataCopy.length; i++) {
                                    if (!isNullOrUndefined(dataCopy[i][metaData])) {
                                        delete dataCopy[i][metaData];
                                    }
                                }
                            }
                        }
                        var pvt = request && request[pvtData];
                        var emptyAndBatch = this.processBatchResponse(data, query, xhr, request, changes);
                        if (emptyAndBatch) {
                            return emptyAndBatch;
                        }
                        var versionCheck = xhr && request.getResponseHeader('DataServiceVersion');
                        var count = null;
                        var version = versionCheck && parseInt(versionCheck, 10) || 2;
                        if (query && query.isCountRequired) {
                            var oDataCount = '__count';
                            if (data[oDataCount] || data['odata.count']) {
                                count = data[oDataCount] || data['odata.count'];
                            }
                            if (data.d) {
                                data = data.d;
                            }
                            if (data[oDataCount] || data['odata.count']) {
                                count = data[oDataCount] || data['odata.count'];
                            }
                        }
                        if (version === 3 && data.value) {
                            data = data.value;
                        }
                        if (data.d) {
                            data = data.d;
                        }
                        if (version < 3 && data.results) {
                            data = data.results;
                        }
                        var args = {};
                        args.count = count;
                        args.result = data;
                        this.getAggregateResult(pvt, data, args);
                        return DataUtil.isNull(count) ? args.result : { result: args.result, count: args.count, aggregates: args.aggregates };
                    }
                }, {
                    key: 'convertToQueryString',
                    value: function convertToQueryString(request, query, dm) {
                        var res = [];
                        var table = 'table';
                        var tableName = request[table] || '';
                        var format = '$format';
                        delete request[table];
                        if (dm.dataSource.requiresFormat) {
                            request[format] = 'json';
                        }
                        var keys = Object.keys(request);
                        var _iteratorNormalCompletion7 = true;
                        var _didIteratorError7 = false;
                        var _iteratorError7 = undefined;

                        try {
                            for (var _iterator7 = keys[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                var prop = _step7.value;

                                res.push(prop + '=' + request[prop]);
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

                        res = res.join('&');
                        if (dm.dataSource.url && dm.dataSource.url.indexOf('?') !== -1 && !tableName) {
                            return res;
                        }
                        return res.length ? tableName + '?' + res : tableName || '';
                    }
                }, {
                    key: 'insert',
                    value: function insert(dm, data, tableName) {
                        return {
                            url: dm.dataSource.url.replace(/\/*$/, tableName ? '/' + tableName : ''),
                            data: JSON.stringify(data)
                        };
                    }
                }, {
                    key: 'remove',
                    value: function remove(dm, keyField, value, tableName) {
                        return {
                            type: 'DELETE',
                            url: dm.dataSource.url.replace(/\/*$/, tableName ? '/' + tableName : '') + '(' + value + ')'
                        };
                    }
                }, {
                    key: 'update',
                    value: function update(dm, keyField, value, tableName) {
                        return {
                            type: 'PUT',
                            url: dm.dataSource.url.replace(/\/*$/, tableName ? '/' + tableName : '') + '(' + value[keyField] + ')',
                            data: JSON.stringify(value),
                            accept: this.options.accept
                        };
                    }
                }, {
                    key: 'batchRequest',
                    value: function batchRequest(dm, changes, e) {
                        var initialGuid = e.guid = DataUtil.getGuid(this.options.batchPre);
                        var url = dm.dataSource.url.replace(/\/*$/, '/' + this.options.batch);
                        var args = {
                            url: e.url,
                            key: e.key,
                            cid: 1,
                            cSet: DataUtil.getGuid(this.options.changeSet)
                        };
                        var req = '--' + initialGuid + '\n';
                        req += 'Content-Type: multipart/mixed; boundary=' + args.cSet.replace('--', '') + '\n';
                        this.pvt.changeSet = 0;
                        req += this.generateInsertRequest(changes.addedRecords, args);
                        req += this.generateUpdateRequest(changes.changedRecords, args);
                        req += this.generateDeleteRequest(changes.deletedRecords, args);
                        req += args.cSet + '--\n';
                        req += '--' + initialGuid + '--';
                        return {
                            type: 'POST',
                            url: url,
                            dataType: 'json',
                            contentType: 'multipart/mixed; charset=UTF-8;boundary=' + initialGuid,
                            data: req
                        };
                    }
                }, {
                    key: 'generateDeleteRequest',
                    value: function generateDeleteRequest(arr, e) {
                        if (!arr) {
                            return '';
                        }
                        var req = '';
                        var stat = {
                            'method': 'DELETE ',
                            'url': function url(data, i, key) {
                                return '(' + data[i][key] + ')';
                            },
                            'data': function data(_data, i) {
                                return '';
                            }
                        };
                        req = this.generateBodyContent(arr, e, stat);
                        return req + '\n';
                    }
                }, {
                    key: 'generateInsertRequest',
                    value: function generateInsertRequest(arr, e) {
                        if (!arr) {
                            return '';
                        }
                        var req = '';
                        var stat = {
                            'method': 'POST ',
                            'url': function url(data, i, key) {
                                return '';
                            },
                            'data': function data(_data2, i) {
                                return JSON.stringify(_data2[i]) + '\n\n';
                            }
                        };
                        req = this.generateBodyContent(arr, e, stat);
                        return req;
                    }
                }, {
                    key: 'generateUpdateRequest',
                    value: function generateUpdateRequest(arr, e) {
                        if (!arr) {
                            return '';
                        }
                        var req = '';
                        var stat = {
                            'method': 'PUT ',
                            'url': function url(data, i, key) {
                                return '(' + data[i][key] + ')';
                            },
                            'data': function data(_data3, i) {
                                return JSON.stringify(_data3[i]) + '\n\n';
                            }
                        };
                        req = this.generateBodyContent(arr, e, stat);
                        return req;
                    }
                }, {
                    key: 'generateBodyContent',
                    value: function generateBodyContent(arr, e, stat) {
                        var req = '';
                        for (var i = 0; i < arr.length; i++) {
                            req += '\n' + e.cSet + '\n';
                            req += this.options.changeSetContent + '\n\n';
                            req += stat.method;
                            req += e.url + stat.url(arr, i, e.key) + ' HTTP/1.1\n';
                            req += 'Accept: ' + this.options.accept + '\n';
                            req += 'Content-Id: ' + this.pvt.changeSet++ + '\n';
                            req += this.options.batchChangeSetContentType + '\n\n';
                            req += stat.data(arr, i);
                        }
                        return req;
                    }
                }, {
                    key: 'processBatchResponse',
                    value: function processBatchResponse(data, query, xhr, request, changes) {
                        if (xhr && xhr.getResponseHeader('Content-Type') && xhr.getResponseHeader('Content-Type').indexOf('xml') !== -1) {
                            return query.isCountRequired ? { result: [], count: 0 } : [];
                        }
                        if (request && this.options.batch && DataUtil.endsWith(request.url, this.options.batch) && request.type.toLowerCase() === 'post') {
                            var guid = xhr.getResponseHeader('Content-Type');
                            var cIdx = void 0;
                            var jsonObj = void 0;
                            var d = data + '';
                            guid = guid.substring(guid.indexOf('=batchresponse') + 1);
                            d = d.split(guid);
                            if (d.length < 2) {
                                return {};
                            }
                            d = d[1];
                            var exVal = /(?:\bContent-Type.+boundary=)(changesetresponse.+)/i.exec(d);
                            if (exVal) {
                                d.replace(exVal[0], '');
                            }
                            var changeGuid = exVal ? exVal[1] : '';
                            d = d.split(changeGuid);
                            for (var i = d.length; i > -1; i--) {
                                if (!/\bContent-ID:/i.test(d[i]) || !/\bHTTP.+201/.test(d[i])) {
                                    continue;
                                }
                                cIdx = parseInt(/\bContent-ID: (\d+)/i.exec(d[i])[1], 10);
                                if (changes.addedRecords[cIdx]) {
                                    jsonObj = DataUtil.parse.parseJson(/^\{.+\}/m.exec(d[i])[0]);
                                    extend({}, changes.addedRecords[cIdx], this.processResponse(jsonObj));
                                }
                            }
                            return changes;
                        }
                        return null;
                    }
                }], [{
                    key: 'getField',
                    value: function getField(prop) {
                        return prop.replace(/\./g, '/');
                    }
                }]);

                return ODataAdaptor;
            }(UrlAdaptor));

            _export('ODataV4Adaptor', ODataV4Adaptor = function (_ODataAdaptor) {
                _inherits(ODataV4Adaptor, _ODataAdaptor);

                function ODataV4Adaptor() {
                    _classCallCheck(this, ODataV4Adaptor);

                    var _this5 = _possibleConstructorReturn(this, (ODataV4Adaptor.__proto__ || Object.getPrototypeOf(ODataV4Adaptor)).apply(this, arguments));

                    // options replaced the default adaptor options
                    _this5.options = extend({}, _this5.options, {
                        requestType: 'get',
                        accept: 'application/json, text/javascript, */*; q=0.01',
                        multipartAccept: 'multipart/mixed',
                        sortBy: '$orderby',
                        select: '$select',
                        skip: '$skip',
                        take: '$top',
                        count: '$count',
                        search: '$search',
                        where: '$filter',
                        expand: '$expand',
                        batch: '$batch',
                        changeSet: '--changeset_',
                        batchPre: 'batch_',
                        contentId: 'Content-Id: ',
                        batchContent: 'Content-Type: multipart/mixed; boundary=',
                        changeSetContent: 'Content-Type: application/http\nContent-Transfer-Encoding: binary ',
                        batchChangeSetContentType: 'Content-Type: application/json; charset=utf-8 '
                    });
                    return _this5;
                }
                /**
                 * @hidden
                 */


                _createClass(ODataV4Adaptor, [{
                    key: 'getModulename',
                    value: function getModulename() {
                        return 'ODataV4Adaptor';
                    }
                }, {
                    key: 'onCount',
                    value: function onCount(e) {
                        return e === true ? 'true' : '';
                    }
                }, {
                    key: 'onPredicate',
                    value: function onPredicate(predicate, query, requiresCast) {
                        var returnValue = '';
                        var val = predicate.value;
                        var isDate = val instanceof Date;
                        returnValue = _get(ODataV4Adaptor.prototype.__proto__ || Object.getPrototypeOf(ODataV4Adaptor.prototype), 'onPredicate', this).call(this, predicate, query, requiresCast);
                        if (isDate) {
                            returnValue = returnValue.replace(/datetime'(.*)'$/, '$1');
                        }
                        return returnValue;
                    }
                }, {
                    key: 'onEachSearch',
                    value: function onEachSearch(e) {
                        var search = this.pvt.searches || [];
                        search.push(e.key);
                        this.pvt.searches = search;
                    }
                }, {
                    key: 'onSearch',
                    value: function onSearch(e) {
                        return this.pvt.searches.join(' OR ');
                    }
                }, {
                    key: 'beforeSend',
                    value: function beforeSend(dm, request, settings) {
                        request.setRequestHeader('Accept', this.options.accept);
                    }
                }, {
                    key: 'processResponse',
                    value: function processResponse(data, ds, query, xhr, request, changes) {
                        var pvtData = 'pvtData';
                        var pvt = request && request[pvtData];
                        var emptyAndBatch = _get(ODataV4Adaptor.prototype.__proto__ || Object.getPrototypeOf(ODataV4Adaptor.prototype), 'processBatchResponse', this).call(this, data, query, xhr, request, changes);
                        if (emptyAndBatch) {
                            return emptyAndBatch;
                        }
                        var count = null;
                        var dataCount = '@odata.count';
                        if (query && query.isCountRequired) {
                            if (dataCount in data) {
                                count = data[dataCount];
                            }
                        }
                        data = data.value;
                        var args = {};
                        args.count = count;
                        args.result = data;
                        this.getAggregateResult(pvt, data, args);
                        return DataUtil.isNull(count) ? args.result : { result: args.result, count: count, aggregates: args.aggregates };
                    }
                }]);

                return ODataV4Adaptor;
            }(ODataAdaptor));

            _export('WebApiAdaptor', WebApiAdaptor = function (_ODataAdaptor2) {
                _inherits(WebApiAdaptor, _ODataAdaptor2);

                function WebApiAdaptor() {
                    _classCallCheck(this, WebApiAdaptor);

                    return _possibleConstructorReturn(this, (WebApiAdaptor.__proto__ || Object.getPrototypeOf(WebApiAdaptor)).apply(this, arguments));
                }

                _createClass(WebApiAdaptor, [{
                    key: 'insert',
                    value: function insert(dm, data, tableName) {
                        return {
                            type: 'POST',
                            url: dm.dataSource.url,
                            data: JSON.stringify(data)
                        };
                    }
                }, {
                    key: 'remove',
                    value: function remove(dm, keyField, value, tableName) {
                        return {
                            type: 'DELETE',
                            url: dm.dataSource.url + '/' + value,
                            data: JSON.stringify(value)
                        };
                    }
                }, {
                    key: 'update',
                    value: function update(dm, keyField, value, tableName) {
                        return {
                            type: 'PUT',
                            url: dm.dataSource.url,
                            data: JSON.stringify(value)
                        };
                    }
                }, {
                    key: 'beforeSend',
                    value: function beforeSend(dm, request, settings) {
                        request.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
                    }
                }, {
                    key: 'processResponse',
                    value: function processResponse(data, ds, query, xhr, request, changes) {
                        var pvtData = 'pvtData';
                        var pvt = request && request[pvtData];
                        var count = null;
                        var args = {};
                        if (request && request.type.toLowerCase() !== 'post') {
                            var versionCheck = xhr && request.getResponseHeader('DataServiceVersion');
                            var version = versionCheck && parseInt(versionCheck, 10) || 2;
                            if (query && query.isCountRequired) {
                                if (!DataUtil.isNull(data.Count)) {
                                    count = data.Count;
                                }
                            }
                            if (version < 3 && data.Items) {
                                data = data.Items;
                            }
                            args.count = count;
                            args.result = data;
                            this.getAggregateResult(pvt, data, args);
                        }
                        args.result = args.result || data;
                        return DataUtil.isNull(count) ? args.result : { result: args.result, count: args.count, aggregates: args.aggregates };
                    }
                }]);

                return WebApiAdaptor;
            }(ODataAdaptor));

            _export('WebMethodAdaptor', WebMethodAdaptor = function (_UrlAdaptor2) {
                _inherits(WebMethodAdaptor, _UrlAdaptor2);

                function WebMethodAdaptor() {
                    _classCallCheck(this, WebMethodAdaptor);

                    return _possibleConstructorReturn(this, (WebMethodAdaptor.__proto__ || Object.getPrototypeOf(WebMethodAdaptor)).apply(this, arguments));
                }

                _createClass(WebMethodAdaptor, [{
                    key: 'processQuery',
                    value: function processQuery(dm, query, hierarchyFilters) {
                        var obj = new UrlAdaptor().processQuery(dm, query, hierarchyFilters);
                        var getData = 'data';
                        var data = DataUtil.parse.parseJson(obj[getData]);
                        var result = {};
                        var value = 'value';
                        if (data.param) {
                            for (var i = 0; i < data.param.length; i++) {
                                var param = data.param[i];
                                var key = Object.keys(param)[0];
                                result[key] = param[key];
                            }
                        }
                        result[value] = data;
                        var pvtData = 'pvtData';
                        var url = 'url';
                        return {
                            data: JSON.stringify(result),
                            url: obj[url],
                            pvtData: obj[pvtData],
                            type: 'POST',
                            contentType: 'application/json; charset=utf-8'
                        };
                    }
                }]);

                return WebMethodAdaptor;
            }(UrlAdaptor));

            _export('RemoteSaveAdaptor', RemoteSaveAdaptor = function (_JsonAdaptor) {
                _inherits(RemoteSaveAdaptor, _JsonAdaptor);

                /**
                 * @hidden
                 */
                function RemoteSaveAdaptor() {
                    _classCallCheck(this, RemoteSaveAdaptor);

                    var _this8 = _possibleConstructorReturn(this, (RemoteSaveAdaptor.__proto__ || Object.getPrototypeOf(RemoteSaveAdaptor)).call(this));

                    setValue('beforeSend', UrlAdaptor.prototype.beforeSend, _this8);
                    return _this8;
                }

                _createClass(RemoteSaveAdaptor, [{
                    key: 'insert',
                    value: function insert(dm, data, tableName) {
                        _get(RemoteSaveAdaptor.prototype.__proto__ || Object.getPrototypeOf(RemoteSaveAdaptor.prototype), 'insert', this).call(this, dm, data, null, null, 0);
                        return {
                            url: dm.dataSource.insertUrl || dm.dataSource.crudUrl || dm.dataSource.url,
                            data: JSON.stringify({
                                value: data,
                                table: tableName,
                                action: 'insert'
                            })
                        };
                    }
                }, {
                    key: 'remove',
                    value: function remove(dm, keyField, value, tableName) {
                        _get(RemoteSaveAdaptor.prototype.__proto__ || Object.getPrototypeOf(RemoteSaveAdaptor.prototype), 'remove', this).call(this, dm, keyField, value);
                        return {
                            type: 'POST',
                            url: dm.dataSource.removeUrl || dm.dataSource.crudUrl || dm.dataSource.url,
                            data: JSON.stringify({
                                key: value,
                                keyColumn: keyField,
                                table: tableName,
                                action: 'remove'
                            })
                        };
                    }
                }, {
                    key: 'update',
                    value: function update(dm, keyField, value, tableName) {
                        _get(RemoteSaveAdaptor.prototype.__proto__ || Object.getPrototypeOf(RemoteSaveAdaptor.prototype), 'update', this).call(this, dm, keyField, value);
                        return {
                            type: 'POST',
                            url: dm.dataSource.updateUrl || dm.dataSource.crudUrl || dm.dataSource.url,
                            data: JSON.stringify({
                                value: value,
                                action: 'update',
                                keyColumn: keyField,
                                key: value[keyField],
                                table: tableName
                            })
                        };
                    }
                }, {
                    key: 'batchRequest',
                    value: function batchRequest(dm, changes, e) {
                        var i = void 0;
                        for (i = 0; i < changes.addedRecords.length; i++) {
                            JsonAdaptor.prototype.insert(dm, changes.addedRecords[i]);
                        }
                        for (i = 0; i < changes.changedRecords.length; i++) {
                            JsonAdaptor.prototype.update(dm, e.key, changes.changedRecords[i]);
                        }
                        for (i = 0; i < changes.deletedRecords.length; i++) {
                            JsonAdaptor.prototype.remove(dm, e.key, changes.deletedRecords[i]);
                        }
                        return {
                            type: 'POST',
                            url: dm.dataSource.batchUrl || dm.dataSource.crudUrl || dm.dataSource.url,
                            contentType: 'application/json; charset=utf-8',
                            dataType: 'json',
                            data: JSON.stringify({
                                changed: changes.changedRecords,
                                added: changes.addedRecords,
                                deleted: changes.deletedRecords,
                                action: 'batch',
                                table: e.url,
                                key: e.key
                            })
                        };
                    }
                }]);

                return RemoteSaveAdaptor;
            }(JsonAdaptor));

            _export('CacheAdaptor', CacheAdaptor = function (_UrlAdaptor3) {
                _inherits(CacheAdaptor, _UrlAdaptor3);

                /**
                 * Constructor for CacheAdaptor class.
                 * @param  {CacheAdaptor} adaptor?
                 * @param  {number} timeStamp?
                 * @param  {number} pageSize?
                 * @hidden
                 */
                function CacheAdaptor(adaptor, timeStamp, pageSize) {
                    _classCallCheck(this, CacheAdaptor);

                    var _this9 = _possibleConstructorReturn(this, (CacheAdaptor.__proto__ || Object.getPrototypeOf(CacheAdaptor)).call(this));

                    _this9.isCrudAction = false;
                    _this9.isInsertAction = false;
                    if (!isNullOrUndefined(adaptor)) {
                        _this9.cacheAdaptor = adaptor;
                    }
                    _this9.pageSize = pageSize;
                    _this9.guidId = DataUtil.getGuid('cacheAdaptor');
                    var obj = { keys: [], results: [] };
                    window.localStorage.setItem(_this9.guidId, JSON.stringify(obj));
                    var guid = _this9.guidId;
                    if (!isNullOrUndefined(timeStamp)) {
                        setInterval(function () {
                            var data = void 0;
                            data = DataUtil.parse.parseJson(window.localStorage.getItem(guid));
                            var forDel = [];
                            for (var i = 0; i < data.results.length; i++) {
                                var currentTime = +new Date();
                                var requestTime = +new Date(data.results[i].timeStamp);
                                data.results[i].timeStamp = currentTime - requestTime;
                                if (currentTime - requestTime > timeStamp) {
                                    forDel.push(i);
                                }
                            }
                            for (var _i6 = 0; _i6 < forDel.length; _i6++) {
                                data.results.splice(forDel[_i6], 1);
                                data.keys.splice(forDel[_i6], 1);
                            }
                            window.localStorage.removeItem(guid);
                            window.localStorage.setItem(guid, JSON.stringify(data));
                        }, timeStamp);
                    }
                    return _this9;
                }
                /**
                 * It will generate the key based on the URL when we send a request to server.
                 * @param  {string} url
                 * @param  {Query} query?
                 * @hidden
                 */


                _createClass(CacheAdaptor, [{
                    key: 'generateKey',
                    value: function generateKey(url, query) {
                        var queries = this.getQueryRequest(query);
                        var singles = Query.filterQueryLists(query.queries, ['onSelect', 'onPage', 'onSkip', 'onTake', 'onRange']);
                        var key = url;
                        var page = 'onPage';
                        if (page in singles) {
                            key += singles[page].pageIndex;
                        }
                        queries.sorts.forEach(function (obj) {
                            key += obj.e.direction + obj.e.fieldName;
                        });
                        queries.groups.forEach(function (obj) {
                            key += obj.e.fieldName;
                        });
                        queries.searches.forEach(function (obj) {
                            key += obj.e.searchKey;
                        });
                        for (var filter = 0; filter < queries.filters.length; filter++) {
                            var currentFilter = queries.filters[filter];
                            if (currentFilter.e.isComplex) {
                                var newQuery = query.clone();
                                newQuery.queries = [];
                                for (var i = 0; i < currentFilter.e.predicates.length; i++) {
                                    newQuery.queries.push({ fn: 'onWhere', e: currentFilter.e.predicates[i], filter: query.queries.filter });
                                }
                                key += currentFilter.e.condition + this.generateKey(url, newQuery);
                            } else {
                                key += currentFilter.e.field + currentFilter.e.operator + currentFilter.e.value;
                            }
                        }
                        return key;
                    }
                }, {
                    key: 'processQuery',
                    value: function processQuery(dm, query, hierarchyFilters) {
                        var key = this.generateKey(dm.dataSource.url, query);
                        var cachedItems = void 0;
                        cachedItems = DataUtil.parse.parseJson(window.localStorage.getItem(this.guidId));
                        var data = cachedItems ? cachedItems.results[cachedItems.keys.indexOf(key)] : null;
                        if (data != null && !this.isCrudAction && !this.isInsertAction) {
                            return data;
                        }
                        this.isCrudAction = null;
                        this.isInsertAction = null;
                        return this.cacheAdaptor.processQuery.apply(this.cacheAdaptor, [].slice.call(arguments, 0));
                    }
                }, {
                    key: 'processResponse',
                    value: function processResponse(data, ds, query, xhr, request, changes) {
                        if (this.isInsertAction || request && this.cacheAdaptor.options.batch && DataUtil.endsWith(request.url, this.cacheAdaptor.options.batch) && request.type.toLowerCase() === 'post') {
                            return this.cacheAdaptor.processResponse(data, ds, query, xhr, request, changes);
                        }
                        data = this.cacheAdaptor.processResponse.apply(this.cacheAdaptor, [].slice.call(arguments, 0));
                        var key = query ? this.generateKey(ds.dataSource.url, query) : ds.dataSource.url;
                        var obj = {};
                        obj = DataUtil.parse.parseJson(window.localStorage.getItem(this.guidId));
                        var index = obj.keys.indexOf(key);
                        if (index !== -1) {
                            obj.results.splice(index, 1);
                            obj.keys.splice(index, 1);
                        }
                        obj.results[obj.keys.push(key) - 1] = { keys: key, result: data.result, timeStamp: new Date(), count: data.count };
                        while (obj.results.length > this.pageSize) {
                            obj.results.splice(0, 1);
                            obj.keys.splice(0, 1);
                        }
                        window.localStorage.setItem(this.guidId, JSON.stringify(obj));
                        return data;
                    }
                }, {
                    key: 'beforeSend',
                    value: function beforeSend(dm, request, settings) {
                        if (DataUtil.endsWith(settings.url, this.cacheAdaptor.options.batch) && settings.type.toLowerCase() === 'post') {
                            request.setRequestHeader('Accept', this.cacheAdaptor.options.multipartAccept);
                        }
                        if (!dm.dataSource.crossDomain) {
                            request.setRequestHeader('Accept', this.cacheAdaptor.options.accept);
                        }
                    }
                }, {
                    key: 'update',
                    value: function update(dm, keyField, value, tableName) {
                        this.isCrudAction = true;
                        return this.cacheAdaptor.update(dm, keyField, value, tableName);
                    }
                }, {
                    key: 'insert',
                    value: function insert(dm, data, tableName) {
                        this.isInsertAction = true;
                        return this.cacheAdaptor.insert(dm, data, tableName);
                    }
                }, {
                    key: 'remove',
                    value: function remove(dm, keyField, value, tableName) {
                        this.isCrudAction = true;
                        return this.cacheAdaptor.remove(dm, keyField, value, tableName);
                    }
                }, {
                    key: 'batchRequest',
                    value: function batchRequest(dm, changes, e) {
                        return this.cacheAdaptor.batchRequest(dm, changes, e);
                    }
                }]);

                return CacheAdaptor;
            }(UrlAdaptor));

            _export('DataManager', DataManager = function () {
                /**
                 * Constructor for DataManager class
                 * @param  {DataOptions|JSON[]} dataSource?
                 * @param  {Query} query?
                 * @param  {AdaptorOptions|string} adaptor?
                 * @hidden
                 */
                function DataManager(dataSource, query, adaptor) {
                    var _this10 = this;

                    _classCallCheck(this, DataManager);

                    /** @hidden */
                    this.dateParse = true;
                    this.requests = [];
                    if (!dataSource && !this.dataSource) {
                        dataSource = [];
                    }
                    adaptor = adaptor || dataSource.adaptor;
                    var data = void 0;
                    if (dataSource instanceof Array) {
                        data = {
                            json: dataSource,
                            offline: true
                        };
                    } else if ((typeof dataSource === 'undefined' ? 'undefined' : _typeof(dataSource)) === 'object') {
                        if (!dataSource.json) {
                            dataSource.json = [];
                        }
                        data = {
                            url: dataSource.url,
                            insertUrl: dataSource.insertUrl,
                            removeUrl: dataSource.removeUrl,
                            updateUrl: dataSource.updateUrl,
                            crudUrl: dataSource.crudUrl,
                            batchUrl: dataSource.batchUrl,
                            json: dataSource.json,
                            headers: dataSource.headers,
                            accept: dataSource.accept,
                            data: dataSource.data,
                            timeTillExpiration: dataSource.timeTillExpiration,
                            cachingPageSize: dataSource.cachingPageSize,
                            enableCaching: dataSource.enableCaching,
                            requestType: dataSource.requestType,
                            key: dataSource.key,
                            crossDomain: dataSource.crossDomain,
                            jsonp: dataSource.jsonp,
                            dataType: dataSource.dataType,
                            offline: dataSource.offline !== undefined ? dataSource.offline : dataSource.adaptor instanceof RemoteSaveAdaptor ? false : dataSource.url ? false : true,
                            requiresFormat: dataSource.requiresFormat
                        };
                    } else {
                        DataUtil.throwError('DataManager: Invalid arguments');
                    }
                    if (data.requiresFormat === undefined && !DataUtil.isCors()) {
                        data.requiresFormat = isNullOrUndefined(data.crossDomain) ? true : data.crossDomain;
                    }
                    if (data.dataType === undefined) {
                        data.dataType = 'json';
                    }
                    this.dataSource = data;
                    this.defaultQuery = query;
                    if (data.url && data.offline && !data.json.length) {
                        this.isDataAvailable = false;
                        this.adaptor = adaptor || new ODataAdaptor();
                        this.dataSource.offline = false;
                        this.ready = this.executeQuery(query || new Query());
                        this.ready.then(function (e) {
                            _this10.dataSource.offline = true;
                            _this10.isDataAvailable = true;
                            data.json = e.result;
                            _this10.adaptor = new JsonAdaptor();
                        });
                    } else {
                        this.adaptor = data.offline ? new JsonAdaptor() : new ODataAdaptor();
                    }
                    if (!data.jsonp && this.adaptor instanceof ODataAdaptor) {
                        data.jsonp = 'callback';
                    }
                    this.adaptor = adaptor || this.adaptor;
                    if (data.enableCaching) {
                        this.adaptor = new CacheAdaptor(this.adaptor, data.timeTillExpiration, data.cachingPageSize);
                    }
                    return this;
                }
                /**
                 * Overrides DataManager's default query with given query.
                 * @param  {Query} query - Defines the new default query.
                 */


                _createClass(DataManager, [{
                    key: 'setDefaultQuery',
                    value: function setDefaultQuery(query) {
                        this.defaultQuery = query;
                        return this;
                    }
                }, {
                    key: 'executeLocal',
                    value: function executeLocal(query) {
                        if (!this.defaultQuery && !(query instanceof Query)) {
                            DataUtil.throwError('DataManager - executeLocal() : A query is required to execute');
                        }
                        if (!this.dataSource.json) {
                            DataUtil.throwError('DataManager - executeLocal() : Json data is required to execute');
                        }
                        query = query || this.defaultQuery;
                        var result = this.adaptor.processQuery(this, query);
                        if (query.subQuery) {
                            var from = query.subQuery.fromTable;
                            var lookup = query.subQuery.lookups;
                            var _res3 = query.isCountRequired ? result.result : result;
                            if (lookup && lookup instanceof Array) {
                                DataUtil.buildHierarchy(query.subQuery.fKey, from, _res3, lookup, query.subQuery.key);
                            }
                            for (var j = 0; j < _res3.length; j++) {
                                if (_res3[j][from] instanceof Array) {
                                    _res3[j] = extend({}, {}, _res3[j]);
                                    _res3[j][from] = this.adaptor.processResponse(query.subQuery.using(new DataManager(_res3[j][from].slice(0))).executeLocal(), this, query);
                                }
                            }
                        }
                        return this.adaptor.processResponse(result, this, query);
                    }
                }, {
                    key: 'executeQuery',
                    value: function executeQuery(query, done, fail, always) {
                        var _this11 = this;

                        if (typeof query === 'function') {
                            always = fail;
                            fail = done;
                            done = query;
                            query = null;
                        }
                        if (!query) {
                            query = this.defaultQuery;
                        }
                        if (!(query instanceof Query)) {
                            DataUtil.throwError('DataManager - executeQuery() : A query is required to execute');
                        }
                        var deffered = new Deferred();
                        var args = { query: query };
                        if (!this.dataSource.offline && this.dataSource.url !== undefined) {
                            var result = this.adaptor.processQuery(this, query);
                            this.makeRequest(result, deffered, args, query);
                        } else {
                            DataManager.nextTick(function () {
                                var res = _this11.executeLocal(query);
                                args = DataManager.getDeferedArgs(query, res, args);
                                deffered.resolve(args);
                            });
                        }
                        return deffered.promise;
                    }
                }, {
                    key: 'extendRequest',
                    value: function extendRequest(url, fnSuccess, fnFail) {
                        return extend({}, {
                            type: 'GET',
                            dataType: this.dataSource.dataType,
                            crossDomain: this.dataSource.crossDomain,
                            jsonp: this.dataSource.jsonp,
                            cache: true,
                            processData: false,
                            onSuccess: fnSuccess,
                            onFailure: fnFail
                        }, url);
                    }
                }, {
                    key: 'makeRequest',
                    value: function makeRequest(url, deffered, args, query) {
                        var _this12 = this;

                        var isSelector = !!query.subQuerySelector;
                        var fnFail = function fnFail(e) {
                            args.error = e;
                            deffered.reject(args);
                        };
                        var process = function process(data, count, xhr, request, actual, aggregates, virtualSelectRecords) {
                            args.xhr = xhr;
                            args.count = count ? parseInt(count.toString(), 10) : 0;
                            args.result = data;
                            args.request = request;
                            args.aggregates = aggregates;
                            args.actual = actual;
                            args.virtualSelectRecords = virtualSelectRecords;
                            deffered.resolve(args);
                        };
                        var fnQueryChild = function fnQueryChild(data, selector) {
                            var subDeffer = new Deferred();
                            var childArgs = { parent: args };
                            query.subQuery.isChild = true;
                            var subUrl = _this12.adaptor.processQuery(_this12, query.subQuery, data ? _this12.adaptor.processResponse(data) : selector);
                            var childReq = _this12.makeRequest(subUrl, subDeffer, childArgs, query.subQuery);
                            if (!isSelector) {
                                subDeffer.then(function (subData) {
                                    if (data) {
                                        DataUtil.buildHierarchy(query.subQuery.fKey, query.subQuery.fromTable, data, subData, query.subQuery.key);
                                        process(data, subData.count, subData.xhr);
                                    }
                                }, fnFail);
                            }
                            return childReq;
                        };
                        var fnSuccess = function fnSuccess(data, request) {
                            if (request.httpRequest.getResponseHeader('Content-Type').indexOf('xml') === -1 && _this12.dateParse) {
                                data = DataUtil.parse.parseJson(data);
                            }
                            var result = _this12.adaptor.processResponse(data, _this12, query, request.httpRequest, request);
                            var count = 0;
                            var aggregates = null;
                            var virtualSelectRecords = 'virtualSelectRecords';
                            var virtualRecords = data[virtualSelectRecords];
                            if (query.isCountRequired) {
                                count = result.count;
                                aggregates = result.aggregates;
                                result = result.result;
                            }
                            if (!query.subQuery) {
                                process(result, count, request.httpRequest, request.type, data, aggregates, virtualRecords);
                                return;
                            }
                            if (!isSelector) {
                                fnQueryChild(result, request);
                            }
                        };
                        var req = this.extendRequest(url, fnSuccess, fnFail);
                        var ajax = new Ajax(req);
                        ajax.beforeSend = function () {
                            _this12.beforeSend(ajax.httpRequest, ajax);
                        };
                        req = ajax.send();
                        req.catch(function (e) {
                            return true;
                        }); // to handle failure remote requests.        
                        //this.requests.push(ajax);
                        if (isSelector) {
                            var promise = void 0;
                            var _res4 = query.subQuerySelector.call(this, { query: query.subQuery, parent: query });
                            if (_res4 && _res4.length) {
                                promise = Promise.all([req, fnQueryChild(null, _res4)]);
                                promise.then(function () {
                                    var result = arguments.length <= 0 ? undefined : arguments[0];
                                    // let pResult: ReturnOption = this.adaptor.processResponse(
                                    //result[0], this, query, this.requests[0].httpRequest, this.requests[0]);
                                    var pResult = _this12.adaptor.processResponse(result[0], _this12, query, ajax.httpRequest, ajax); //modified for memory leak issue
                                    var count = 0;
                                    if (query.isCountRequired) {
                                        count = pResult.count;
                                        pResult = pResult.result;
                                    }
                                    // let cResult: ReturnOption = this.adaptor.processResponse(
                                    //result[1], this, query.subQuery, this.requests[1].httpRequest, this.requests[1]);
                                    var cResult = _this12.adaptor.processResponse(result[1], _this12, query.subQuery, ajax.httpRequest, ajax); //modified for memory leak issue
                                    count = 0;
                                    if (query.subQuery.isCountRequired) {
                                        count = cResult.count;
                                        cResult = cResult.result;
                                    }
                                    DataUtil.buildHierarchy(query.subQuery.fKey, query.subQuery.fromTable, pResult, cResult, query.subQuery.key);
                                    isSelector = false;
                                    //process(pResult, count, this.requests[0].httpRequest);
                                    process(pResult, count, ajax.httpRequest); //modified for memory leak issue
                                });
                            } else {
                                isSelector = false;
                            }
                        }
                        return req;
                    }
                }, {
                    key: 'beforeSend',
                    value: function beforeSend(request, settings) {
                        this.adaptor.beforeSend(this, request, settings);
                        var headers = this.dataSource.headers;
                        var props = void 0;
                        for (var i = 0; headers && i < headers.length; i++) {
                            props = [];
                            var keys = Object.keys(headers[i]);
                            var _iteratorNormalCompletion8 = true;
                            var _didIteratorError8 = false;
                            var _iteratorError8 = undefined;

                            try {
                                for (var _iterator8 = keys[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                    var prop = _step8.value;

                                    props.push(prop);
                                    request.setRequestHeader(prop, headers[i][prop]);
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
                }, {
                    key: 'saveChanges',
                    value: function saveChanges(changes, key, tableName, query) {
                        var _this13 = this;

                        if (tableName instanceof Query) {
                            query = tableName;
                            tableName = null;
                        }
                        var args = {
                            url: tableName,
                            key: key || this.dataSource.key
                        };
                        var req = this.adaptor.batchRequest(this, changes, args, query);
                        if (this.dataSource.offline) {
                            return req;
                        }
                        var deff = new Deferred();
                        var ajax = new Ajax(req);
                        ajax.beforeSend = function () {
                            _this13.beforeSend(ajax.httpRequest, ajax);
                        };
                        ajax.onSuccess = function (data, request) {
                            deff.resolve(_this13.adaptor.processResponse(DataUtil.parse.parseJson(data), _this13, null, request.httpRequest, request, changes));
                        };
                        ajax.onFailure = function (e) {
                            deff.reject([{ error: e }]);
                        };
                        ajax.send().catch(function (e) {
                            return true;
                        }); // to handle the failure requests.        
                        return deff.promise;
                    }
                }, {
                    key: 'insert',
                    value: function insert(data, tableName, query, position) {
                        if (tableName instanceof Query) {
                            query = tableName;
                            tableName = null;
                        }
                        var req = this.adaptor.insert(this, data, tableName, query, position);
                        if (this.dataSource.offline) {
                            return req;
                        }
                        return this.doAjaxRequest(req);
                    }
                }, {
                    key: 'remove',
                    value: function remove(keyField, value, tableName, query) {
                        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                            value = value[keyField];
                        }
                        if (tableName instanceof Query) {
                            query = tableName;
                            tableName = null;
                        }
                        var res = this.adaptor.remove(this, keyField, value, tableName, query);
                        if (this.dataSource.offline) {
                            return res;
                        }
                        return this.doAjaxRequest(res);
                    }
                }, {
                    key: 'update',
                    value: function update(keyField, value, tableName, query) {
                        if (tableName instanceof Query) {
                            query = tableName;
                            tableName = null;
                        }
                        var res = this.adaptor.update(this, keyField, value, tableName, query);
                        if (this.dataSource.offline) {
                            return res;
                        }
                        return this.doAjaxRequest(res);
                    }
                }, {
                    key: 'doAjaxRequest',
                    value: function doAjaxRequest(res) {
                        var _this14 = this;

                        var defer = new Deferred();
                        res = extend({}, {
                            type: 'POST',
                            contentType: 'application/json; charset=utf-8',
                            processData: false
                        }, res);
                        var ajax = new Ajax(res);
                        ajax.beforeSend = function () {
                            _this14.beforeSend(ajax.httpRequest, ajax);
                        };
                        ajax.onSuccess = function (record, request) {
                            try {
                                DataUtil.parse.parseJson(record);
                            } catch (e) {
                                record = [];
                            }
                            record = _this14.adaptor.processResponse(DataUtil.parse.parseJson(record), _this14, null, request.httpRequest, request);
                            defer.resolve(record);
                        };
                        ajax.onFailure = function (e) {
                            defer.reject([{ error: e }]);
                        };
                        ajax.send().catch(function (e) {
                            return true;
                        }); // to handle the failure requests.
                        return defer.promise;
                    }
                }], [{
                    key: 'getDeferedArgs',
                    value: function getDeferedArgs(query, result, args) {
                        if (query.isCountRequired) {
                            args.result = result.result;
                            args.count = result.count;
                            args.aggregates = result.aggregates;
                        } else {
                            args.result = result;
                        }
                        return args;
                    }
                }, {
                    key: 'nextTick',
                    value: function nextTick(fn) {
                        (window.setImmediate || window.setTimeout)(fn, 0);
                    }
                }]);

                return DataManager;
            }());

            _export('Deferred', Deferred = function Deferred() {
                var _this15 = this;

                _classCallCheck(this, Deferred);

                /**
                 * Promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future.
                 */
                this.promise = new Promise(function (resolve, reject) {
                    _this15.resolve = resolve;
                    _this15.reject = reject;
                });
                /**
                 * Defines the callback function triggers when the Deferred object is resolved.
                 */
                this.then = this.promise.then.bind(this.promise);
                /**
                 * Defines the callback function triggers when the Deferred object is rejected.
                 */
                this.catch = this.promise.catch.bind(this.promise);
            });

            _export('DataManager', DataManager);

            _export('Deferred', Deferred);

            _export('Query', Query);

            _export('Predicate', Predicate);

            _export('Adaptor', Adaptor);

            _export('JsonAdaptor', JsonAdaptor);

            _export('UrlAdaptor', UrlAdaptor);

            _export('ODataAdaptor', ODataAdaptor);

            _export('ODataV4Adaptor', ODataV4Adaptor);

            _export('WebApiAdaptor', WebApiAdaptor);

            _export('WebMethodAdaptor', WebMethodAdaptor);

            _export('RemoteSaveAdaptor', RemoteSaveAdaptor);

            _export('CacheAdaptor', CacheAdaptor);

            _export('DataUtil', DataUtil);
        }
    };
});

//# sourceMappingURL=ej2-data.es2015-compiled.js.map