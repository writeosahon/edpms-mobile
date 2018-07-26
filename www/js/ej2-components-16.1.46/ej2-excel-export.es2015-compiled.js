'use strict';

System.register(['@syncfusion/ej2-compression', '@syncfusion/ej2-base'], function (_export, _context) {
    "use strict";

    var ZipArchive, ZipArchiveItem, Internationalization, isNullOrUndefined, _createClass, CellStyle, Font, CellXfs, Alignment, CellStyleXfs, CellStyles, NumFmt, Border, Borders, Cell, Cells, Column, Row, Rows, Worksheets, Worksheet, HyperLink, Grouping, FreezePane, MergeCell, MergeCells, ValueFormatter, CsvHelper, BlobHelper, Workbook, BuiltInProperties;

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
        setters: [function (_syncfusionEj2Compression) {
            ZipArchive = _syncfusionEj2Compression.ZipArchive;
            ZipArchiveItem = _syncfusionEj2Compression.ZipArchiveItem;
        }, function (_syncfusionEj2Base) {
            Internationalization = _syncfusionEj2Base.Internationalization;
            isNullOrUndefined = _syncfusionEj2Base.isNullOrUndefined;
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

            _export('CellStyle', CellStyle = function CellStyle() {
                _classCallCheck(this, CellStyle);

                this.numFmtId = 0;
                this.backColor = 'none';
                this.fontName = 'Calibri';
                this.fontSize = 14;
                this.fontColor = '#000000';
                this.italic = false;
                this.bold = false;
                this.underline = false;
                this.wrapText = false;
                this.hAlign = 'general';
                this.vAlign = 'bottom';
                this.numberFormat = 'GENERAL';
                this.type = 'datetime';
                this.borders = new Borders();
                this.isGlobalStyle = false;
            });

            _export('Font', Font = function Font() {
                _classCallCheck(this, Font);

                this.sz = 14;
                this.name = 'Calibri';
                this.u = false;
                this.b = false;
                this.i = false;
                this.color = 'FF000000';
            });

            _export('CellXfs', CellXfs = function CellXfs() {
                _classCallCheck(this, CellXfs);
            });

            _export('Alignment', Alignment = function Alignment() {
                _classCallCheck(this, Alignment);
            });

            _export('CellStyleXfs', CellStyleXfs = function CellStyleXfs() {
                _classCallCheck(this, CellStyleXfs);
            });

            _export('CellStyles', CellStyles = function CellStyles() {
                _classCallCheck(this, CellStyles);

                this.name = 'Normal';
                this.xfId = 0;
            });

            _export('NumFmt', NumFmt = function NumFmt(id, code) {
                _classCallCheck(this, NumFmt);

                this.numFmtId = id;
                this.formatCode = code;
            });

            _export('Border', Border = function Border(mLine, mColor) {
                _classCallCheck(this, Border);

                this.lineStyle = mLine;
                this.color = mColor;
            });

            _export('Borders', Borders = function Borders() {
                _classCallCheck(this, Borders);

                this.left = new Border('none', '#FFFFFF');
                this.right = new Border('none', '#FFFFFF');
                this.top = new Border('none', '#FFFFFF');
                this.bottom = new Border('none', '#FFFFFF');
                this.all = new Border('none', '#FFFFFF');
            });

            _export('Cell', Cell = function Cell() {
                _classCallCheck(this, Cell);
            });

            _export('Cells', Cells = function (_Array) {
                _inherits(Cells, _Array);

                function Cells() {
                    _classCallCheck(this, Cells);

                    var _this = _possibleConstructorReturn(this, (Cells.__proto__ || Object.getPrototypeOf(Cells)).apply(this, arguments));

                    _this.add = function (cell) {
                        var inserted = false;
                        var count = 0;
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = _this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var c = _step.value;

                                if (c.index === cell.index) {
                                    _this[count] = cell;
                                    inserted = true;
                                }
                                count++;
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

                        if (!inserted) {
                            _this.push(cell);
                        }
                    };
                    return _this;
                }

                return Cells;
            }(Array));

            _export('Column', Column = function Column() {
                _classCallCheck(this, Column);
            });

            _export('Row', Row = function Row() {
                _classCallCheck(this, Row);
            });

            _export('Rows', Rows = function (_Array2) {
                _inherits(Rows, _Array2);

                function Rows() {
                    _classCallCheck(this, Rows);

                    var _this2 = _possibleConstructorReturn(this, (Rows.__proto__ || Object.getPrototypeOf(Rows)).apply(this, arguments));

                    _this2.add = function (row) {
                        var inserted = false;
                        var count = 0;
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = _this2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var r = _step2.value;

                                if (r.index === row.index) {
                                    _this2[count] = row;
                                    inserted = true;
                                }
                                count++;
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

                        if (!inserted) {
                            _this2.push(row);
                        }
                    };
                    return _this2;
                }

                return Rows;
            }(Array));

            _export('Worksheets', Worksheets = function (_Array3) {
                _inherits(Worksheets, _Array3);

                function Worksheets() {
                    _classCallCheck(this, Worksheets);

                    return _possibleConstructorReturn(this, (Worksheets.__proto__ || Object.getPrototypeOf(Worksheets)).apply(this, arguments));
                }

                return Worksheets;
            }(Array));

            _export('Worksheet', Worksheet = function Worksheet() {
                _classCallCheck(this, Worksheet);

                this.isSummaryRowBelow = true;
            });

            _export('HyperLink', HyperLink = function HyperLink() {
                _classCallCheck(this, HyperLink);
            });

            _export('Grouping', Grouping = function Grouping() {
                _classCallCheck(this, Grouping);
            });

            _export('FreezePane', FreezePane = function FreezePane() {
                _classCallCheck(this, FreezePane);
            });

            _export('MergeCell', MergeCell = function MergeCell() {
                _classCallCheck(this, MergeCell);
            });

            _export('MergeCells', MergeCells = function (_Array4) {
                _inherits(MergeCells, _Array4);

                function MergeCells() {
                    _classCallCheck(this, MergeCells);

                    var _this4 = _possibleConstructorReturn(this, (MergeCells.__proto__ || Object.getPrototypeOf(MergeCells)).apply(this, arguments));

                    _this4.add = function (mergeCell) {
                        var inserted = false;
                        var count = 0;
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = _this4[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var mCell = _step3.value;

                                if (MergeCells.isIntersecting(mCell, mergeCell)) {
                                    var intersectingCell = new MergeCell();
                                    intersectingCell.x = Math.min(mCell.x, mergeCell.x);
                                    intersectingCell.y = Math.min(mCell.Y, mergeCell.y);
                                    intersectingCell.width = Math.max(mCell.Width + mCell.X, mergeCell.width + mergeCell.x);
                                    intersectingCell.height = Math.max(mCell.Height + mCell.Y, mergeCell.height + mergeCell.y);
                                    intersectingCell.ref = _this4[count].ref.split(':')[0] + ':' + mergeCell.ref.split(':')[1];
                                    _this4[count] = intersectingCell;
                                    inserted = true;
                                }
                                count++;
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

                        if (!inserted) {
                            _this4.push(mergeCell);
                        }
                    };
                    return _this4;
                }

                _createClass(MergeCells, null, [{
                    key: 'isIntersecting',
                    value: function isIntersecting(base, compare) {
                        return base.x <= compare.x + compare.width && compare.x <= base.x + base.width && base.y <= compare.y + compare.height && compare.y <= base.y + base.height;
                    }
                }]);

                return MergeCells;
            }(Array));

            _export('ValueFormatter', ValueFormatter = function () {
                function ValueFormatter(cultureName) {
                    _classCallCheck(this, ValueFormatter);

                    this.intl = new Internationalization();
                    // if (!isNullOrUndefined(cultureName)) {
                    //     this.intl.culture = cultureName;
                    // }
                }

                _createClass(ValueFormatter, [{
                    key: 'getFormatFunction',
                    value: function getFormatFunction(format) {
                        if (format.type) {
                            return this.intl.getDateFormat(format);
                        } else {
                            return this.intl.getNumberFormat(format);
                        }
                    }
                }, {
                    key: 'toView',
                    value: function toView(value, format) {
                        var result = value;
                        if (!isNullOrUndefined(format) && !isNullOrUndefined(value)) {
                            result = format(value);
                        }
                        return result;
                    }
                }, {
                    key: 'displayText',
                    value: function displayText(value, format) {
                        return this.toView(value, this.getFormatFunction(format));
                    }
                }]);

                return ValueFormatter;
            }());

            _export('CsvHelper', CsvHelper = function () {
                /* tslint:disable:no-any */
                function CsvHelper(json) {
                    _classCallCheck(this, CsvHelper);

                    this.csvStr = '';
                    this.formatter = new ValueFormatter();
                    this.isMicrosoftBrowser = !!navigator.msSaveBlob;
                    if (json.styles !== null && json.styles !== undefined) {
                        this.globalStyles = new Map();
                        for (var i = 0; i < json.styles.length; i++) {
                            if (json.styles[i].name !== undefined && json.styles[i].numberFormat !== undefined) {
                                this.globalStyles.set(json.styles[i].name, json.styles[i].numberFormat);
                            }
                        }
                    }
                    // Parses Worksheets data to DOM.        
                    if (json.worksheets !== null && json.worksheets !== undefined) {
                        this.parseWorksheet(json.worksheets[0]);
                    }
                    //this.csvStr = 'a1,a2,a3\nb1,b2,b3';
                }

                _createClass(CsvHelper, [{
                    key: 'parseWorksheet',
                    value: function parseWorksheet(json) {
                        //Rows
                        if (json.rows !== null && json.rows !== undefined) {
                            this.parseRows(json.rows);
                        }
                    }
                }, {
                    key: 'parseRows',
                    value: function parseRows(rows) {
                        var count = 1;
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = rows[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var row = _step4.value;

                                //Row index
                                if (row.index !== null && row.index !== undefined) {
                                    while (count < row.index) {
                                        this.csvStr += '\n';
                                        count++;
                                    }
                                    this.parseRow(row);
                                } else {
                                    throw Error('Row index is missing.');
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
                    key: 'parseRow',
                    value: function parseRow(row) {
                        if (row.cells !== null && row.cells !== undefined) {
                            var count = 1;
                            var _iteratorNormalCompletion5 = true;
                            var _didIteratorError5 = false;
                            var _iteratorError5 = undefined;

                            try {
                                for (var _iterator5 = row.cells[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                    var cell = _step5.value;

                                    //cell index
                                    if (cell.index !== null && cell.index !== undefined) {
                                        while (count < cell.index) {
                                            this.csvStr += ',';
                                            count++;
                                        }
                                        this.parseCell(cell);
                                    } else {
                                        throw Error('Cell index is missing.');
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
                    }
                }, {
                    key: 'parseCell',
                    value: function parseCell(cell) {
                        var csv = this.csvStr;
                        if (cell.value !== undefined) {
                            if (cell.value instanceof Date) {
                                if (cell.style !== undefined && cell.style.numberFormat !== undefined) {
                                    /* tslint:disable-next-line:max-line-length */
                                    csv += this.parseCellValue(this.formatter.displayText(cell.value, { type: 'dateTime', skeleton: cell.style.numberFormat }));
                                } else if (cell.style !== undefined && cell.style.name !== undefined && this.globalStyles.has(cell.style.name)) {
                                    /* tslint:disable-next-line:max-line-length */
                                    csv += this.parseCellValue(this.formatter.displayText(cell.value, { type: 'dateTime', skeleton: this.globalStyles.get(cell.style.name) }));
                                } else {
                                    csv += cell.value;
                                }
                            } else if (typeof cell.value === 'boolean') {
                                csv += cell.value ? 'TRUE' : 'FALSE';
                            } else if (typeof cell.value === 'number') {
                                if (cell.style !== undefined && cell.style.numberFormat !== undefined) {
                                    /* tslint:disable-next-line:max-line-length */
                                    csv += this.parseCellValue(this.formatter.displayText(cell.value, { format: cell.style.numberFormat }));
                                } else if (cell.style !== undefined && cell.style.name !== undefined && this.globalStyles.has(cell.style.name)) {
                                    /* tslint:disable-next-line:max-line-length */
                                    csv += this.parseCellValue(this.formatter.displayText(cell.value, { format: this.globalStyles.get(cell.style.name) }));
                                } else {
                                    csv += cell.value;
                                }
                            } else {
                                csv += this.parseCellValue(cell.value);
                            }
                        }
                        this.csvStr = csv;
                    }
                }, {
                    key: 'parseCellValue',
                    value: function parseCellValue(value) {
                        if (value.indexOf(',') !== -1) {
                            return value = '\"' + value + '\"';
                        } else {
                            return value;
                        }
                    }
                }, {
                    key: 'save',
                    value: function save(fileName) {
                        this.buffer = new Blob([this.csvStr], { type: 'text/plain' });
                        if (this.isMicrosoftBrowser) {
                            navigator.msSaveBlob(this.buffer, fileName);
                        } else {
                            var dataUrl = window.URL.createObjectURL(this.buffer);
                            var dwlLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                            dwlLink.download = fileName;
                            dwlLink.href = dataUrl;
                            var event = document.createEvent('MouseEvent');
                            event.initEvent('click', true, true);
                            dwlLink.dispatchEvent(event);
                            setTimeout(function () {
                                window.URL.revokeObjectURL(dataUrl);
                            });
                        }
                    }
                }, {
                    key: 'saveAsBlob',
                    value: function saveAsBlob() {
                        return new Blob([this.csvStr], { type: 'text/csv' });
                    }
                }]);

                return CsvHelper;
            }());

            _export('BlobHelper', BlobHelper = function () {
                function BlobHelper() {
                    _classCallCheck(this, BlobHelper);

                    /* tslint:disable:no-any */
                    this.parts = [];
                }
                /* tslint:disable:no-any */


                _createClass(BlobHelper, [{
                    key: 'append',
                    value: function append(part) {
                        this.parts.push(part);
                        this.blob = undefined; // Invalidate the blob
                    }
                }, {
                    key: 'getBlob',
                    value: function getBlob() {
                        return new Blob(this.parts, { type: 'text/plain' });
                    }
                }]);

                return BlobHelper;
            }());

            _export('Workbook', Workbook = function () {
                /* tslint:disable:no-any */
                function Workbook(json, saveType, culture) {
                    _classCallCheck(this, Workbook);

                    this.sharedStringCount = 0;
                    this.unitsProportions = [96 / 75.0, 96 / 300.0, 96, 96 / 25.4, 96 / 2.54, 1, 96 / 72.0, 96 / 72.0 / 12700];
                    /* tslint:disable:no-any */
                    this.hyperlinkStyle = { fontColor: '#0000FF', underline: true };
                    if (culture !== undefined) {
                        this.culture = culture;
                    } else {
                        this.culture = 'en-US';
                    }
                    this.intl = new Internationalization(this.culture);
                    this.mSaveType = saveType;
                    if (saveType === 'xlsx') {
                        this.mArchive = new ZipArchive();
                        this.sharedString = [];
                        this.mFonts = [];
                        this.mBorders = [];
                        this.mStyles = [];
                        this.printTitles = new Map();
                        this.cellStyles = new Map();
                        this.mNumFmt = new Map();
                        this.mFills = new Map();
                        this.mStyles.push(new CellStyle());
                        this.mFonts.push(new Font());
                        /* tslint:disable */
                        this.cellStyles.set('Normal', new CellStyles());
                        /* tslint:enable */
                        this.mCellXfs = [];
                        this.mCellStyleXfs = [];
                        if (json.styles !== null && json.styles !== undefined) {
                            /* tslint:disable-next-line:no-any */
                            this.globalStyles = new Map();
                            for (var i = 0; i < json.styles.length; i++) {
                                if (json.styles[i].name !== undefined) {
                                    if (!this.cellStyles.has(json.styles[i].name)) {
                                        var cellStyle = new CellStyle();
                                        cellStyle.isGlobalStyle = true;
                                        this.parserCellStyle(json.styles[i], cellStyle, 'none');
                                        var cellStyles = new CellStyles();
                                        cellStyles.name = cellStyle.name;
                                        cellStyles.xfId = cellStyle.index;
                                        this.cellStyles.set(cellStyles.name, cellStyles);
                                        /* tslint:disable-next-line:no-any */
                                        var tFormat = {};
                                        if (json.styles[i].numberFormat !== undefined) {
                                            tFormat.format = json.styles[i].numberFormat;
                                        }
                                        if (json.styles[i].type !== undefined) {
                                            tFormat.type = json.styles[i].type;
                                        } else {
                                            tFormat.type = 'datetime';
                                        }
                                        if (tFormat.format !== undefined) {
                                            this.globalStyles.set(json.styles[i].name, tFormat);
                                        }
                                    } else {
                                        throw Error('Style name ' + json.styles[i].name + ' is already existed');
                                    }
                                }
                            }
                        }
                        // Parses Worksheets data to DOM.        
                        if (json.worksheets !== null && json.worksheets !== undefined) {
                            this.parserWorksheets(json.worksheets);
                        } else {
                            throw Error('Worksheet is expected.');
                        }
                        // Parses the BuiltInProperties data to DOM.        
                        if (json.builtInProperties !== null && json.builtInProperties !== undefined) {
                            this.builtInProperties = new BuiltInProperties();
                            this.parserBuiltInProperties(json.builtInProperties, this.builtInProperties);
                        }
                    } else {
                        this.csvHelper = new CsvHelper(json);
                    }
                }
                /* tslint:disable:no-any */


                _createClass(Workbook, [{
                    key: 'parserBuiltInProperties',
                    value: function parserBuiltInProperties(jsonBuiltInProperties, builtInProperties) {
                        //Author
                        if (jsonBuiltInProperties.author !== null && jsonBuiltInProperties.author !== undefined) {
                            builtInProperties.author = jsonBuiltInProperties.author;
                        }
                        //Comments
                        if (jsonBuiltInProperties.comments !== null && jsonBuiltInProperties.comments !== undefined) {
                            builtInProperties.comments = jsonBuiltInProperties.comments;
                        }
                        //Category
                        if (jsonBuiltInProperties.category !== null && jsonBuiltInProperties.category !== undefined) {
                            builtInProperties.category = jsonBuiltInProperties.category;
                        }
                        //Company
                        if (jsonBuiltInProperties.company !== null && jsonBuiltInProperties.company !== undefined) {
                            builtInProperties.company = jsonBuiltInProperties.company;
                        }
                        //Manager
                        if (jsonBuiltInProperties.manager !== null && jsonBuiltInProperties.manager !== undefined) {
                            builtInProperties.manager = jsonBuiltInProperties.manager;
                        }
                        //Subject
                        if (jsonBuiltInProperties.subject !== null && jsonBuiltInProperties.subject !== undefined) {
                            builtInProperties.subject = jsonBuiltInProperties.subject;
                        }
                        //Title
                        if (jsonBuiltInProperties.title !== null && jsonBuiltInProperties.title !== undefined) {
                            builtInProperties.title = jsonBuiltInProperties.title;
                        }
                        //Creation date
                        if (jsonBuiltInProperties.createdDate !== null && jsonBuiltInProperties.createdDate !== undefined) {
                            builtInProperties.createdDate = jsonBuiltInProperties.createdDate;
                        }
                        //Modified date
                        if (jsonBuiltInProperties.modifiedDate !== null && jsonBuiltInProperties.modifiedDate !== undefined) {
                            builtInProperties.modifiedDate = jsonBuiltInProperties.modifiedDate;
                        }
                        //Tags
                        if (jsonBuiltInProperties.tags !== null && jsonBuiltInProperties.tags !== undefined) {
                            builtInProperties.tags = jsonBuiltInProperties.tags;
                        }
                        //Status
                        if (jsonBuiltInProperties.status !== null && jsonBuiltInProperties.status !== undefined) {
                            builtInProperties.status = jsonBuiltInProperties.status;
                        }
                    }
                }, {
                    key: 'parserWorksheets',
                    value: function parserWorksheets(json) {
                        this.worksheets = new Worksheets();
                        var length = json.length;
                        for (var i = 0; i < length; i++) {
                            var jsonSheet = json[i];
                            var sheet = new Worksheet();
                            this.mergeCells = new MergeCells();
                            this.mHyperLinks = [];
                            //Name
                            if (jsonSheet.name !== null && jsonSheet.name !== undefined) {
                                sheet.name = jsonSheet.name;
                            } else {
                                sheet.name = 'Sheet' + (i + 1).toString();
                            }
                            sheet.index = i + 1;
                            //Columns
                            if (jsonSheet.columns !== null && jsonSheet.columns !== undefined) {
                                this.parserColumns(jsonSheet.columns, sheet);
                            }
                            //Rows
                            if (jsonSheet.rows !== null && jsonSheet.rows !== undefined) {
                                this.parserRows(jsonSheet.rows, sheet);
                            }
                            //FreezePanes
                            if (jsonSheet.freeze !== null && jsonSheet.freeze !== undefined) {
                                this.parserFreezePanes(jsonSheet.freeze, sheet);
                            }
                            //Print Title
                            if (jsonSheet.printTitle !== null && jsonSheet.printTitle !== undefined) {
                                this.parserPrintTitle(jsonSheet.printTitle, sheet);
                            }
                            if (jsonSheet.pageSetup !== undefined) {
                                if (jsonSheet.pageSetup.isSummaryRowBelow !== undefined) {
                                    sheet.isSummaryRowBelow = jsonSheet.pageSetup.isSummaryRowBelow;
                                }
                            }
                            sheet.index = i + 1;
                            sheet.mergeCells = this.mergeCells;
                            sheet.hyperLinks = this.mHyperLinks;
                            this.worksheets.push(sheet);
                        }
                    }
                }, {
                    key: 'mergeOptions',
                    value: function mergeOptions(fromJson, toJson) {
                        /* tslint:disable:no-any */
                        var result = {};
                        this.applyProperties(fromJson, result);
                        this.applyProperties(toJson, result);
                        return result;
                    }
                }, {
                    key: 'applyProperties',
                    value: function applyProperties(sourceJson, destJson) {
                        var keys = Object.keys(sourceJson);
                        for (var index = 0; index < keys.length; index++) {
                            if (keys[index] !== 'name') {
                                destJson[keys[index]] = sourceJson[keys[index]];
                            }
                        }
                    }
                }, {
                    key: 'getCellName',
                    value: function getCellName(row, column) {
                        return this.getColumnName(column) + row.toString();
                    }
                }, {
                    key: 'getColumnName',
                    value: function getColumnName(col) {
                        col--;
                        var strColumnName = '';
                        do {
                            var iCurrentDigit = col % 26;
                            col = col / 26 - 1;
                            strColumnName = String.fromCharCode(65 + iCurrentDigit) + strColumnName;
                        } while (col >= 0);
                        return strColumnName;
                    }
                }, {
                    key: 'parserPrintTitle',
                    value: function parserPrintTitle(json, sheet) {
                        var printTitleName = '';
                        var titleRowName = void 0;
                        if (json.fromRow !== null && json.fromRow !== undefined) {
                            var fromRow = json.fromRow;
                            var toRow = void 0;
                            if (json.toRow !== null && json.toRow !== undefined) {
                                toRow = json.toRow;
                            } else {
                                toRow = json.fromRow;
                            }
                            titleRowName = '$' + fromRow + ':$' + toRow;
                        }
                        var titleColName = void 0;
                        if (json.fromColumn !== null && json.fromColumn !== undefined) {
                            var fromColumn = json.fromColumn;
                            var toColumn = void 0;
                            if (json.toColumn !== null && json.toColumn !== undefined) {
                                toColumn = json.toColumn;
                            } else {
                                toColumn = json.fromColumn;
                            }
                            titleColName = '$' + this.getColumnName(fromColumn) + ':$' + this.getColumnName(toColumn);
                        }
                        if (titleRowName !== undefined) {
                            printTitleName += sheet.name + '!' + titleRowName;
                        }
                        if (titleColName !== undefined && titleRowName !== undefined) {
                            printTitleName += ',' + (sheet.name + '!' + titleColName);
                        } else if (titleColName !== undefined) {
                            printTitleName += sheet.name + '!' + titleColName;
                        }
                        if (printTitleName !== '') {
                            this.printTitles.set(sheet.index - 1, printTitleName);
                        }
                    }
                }, {
                    key: 'parserFreezePanes',
                    value: function parserFreezePanes(json, sheet) {
                        sheet.freezePanes = new FreezePane();
                        if (json.row !== null && json.row !== undefined) {
                            sheet.freezePanes.row = json.row;
                        } else {
                            sheet.freezePanes.row = 0;
                        }
                        if (json.column !== null && json.column !== undefined) {
                            sheet.freezePanes.column = json.column;
                        } else {
                            sheet.freezePanes.column = 0;
                        }
                        sheet.freezePanes.leftCell = this.getCellName(sheet.freezePanes.row + 1, sheet.freezePanes.column + 1);
                    }
                }, {
                    key: 'parserColumns',
                    value: function parserColumns(json, sheet) {
                        var columnsLength = json.length;
                        sheet.columns = [];
                        for (var column = 0; column < columnsLength; column++) {
                            var col = new Column();
                            if (json[column].index !== null && json[column].index !== undefined) {
                                col.index = json[column].index;
                            } else {
                                throw Error('Column index is missing.');
                            }
                            if (json[column].width !== null && json[column].width !== undefined) {
                                col.width = json[column].width;
                            }
                            sheet.columns.push(col);
                        }
                    }
                }, {
                    key: 'parserRows',
                    value: function parserRows(json, sheet) {
                        var rowsLength = json.length;
                        sheet.rows = new Rows();
                        var rowId = 0;
                        for (var r = 0; r < rowsLength; r++) {
                            var row = this.parserRow(json[r], rowId);
                            rowId = row.index;
                            sheet.rows.add(row);
                        }
                    }
                }, {
                    key: 'parserRow',
                    value: function parserRow(json, rowIndex) {
                        var row = new Row();
                        //Row Height
                        if (json.height !== null && json.height !== undefined) {
                            row.height = json.height;
                        }
                        //Row index
                        if (json.index !== null && json.index !== undefined) {
                            row.index = json.index;
                        } else {
                            throw Error('Row index is missing.');
                        }
                        if (json.grouping !== null && json.grouping !== undefined) {
                            this.parseGrouping(json.grouping, row);
                        }
                        this.parseCells(json.cells, row);
                        return row;
                    }
                }, {
                    key: 'parseGrouping',
                    value: function parseGrouping(json, row) {
                        row.grouping = new Grouping();
                        if (json.outlineLevel !== undefined) {
                            row.grouping.outlineLevel = json.outlineLevel;
                        }
                        if (json.isCollapsed !== undefined) {
                            row.grouping.isCollapsed = json.isCollapsed;
                        }
                        if (json.isHidden !== undefined) {
                            row.grouping.isHidden = json.isHidden;
                        }
                    }
                }, {
                    key: 'parseCells',
                    value: function parseCells(json, row) {
                        row.cells = new Cells();
                        var cellsLength = json !== undefined ? json.length : 0;
                        var spanMin = 1;
                        var spanMax = 1;
                        for (var cellId = 0; cellId < cellsLength; cellId++) {
                            /* tslint:disable:no-any */
                            var jsonCell = json[cellId];
                            var cell = new Cell();
                            //cell index
                            if (jsonCell.index !== null && jsonCell.index !== undefined) {
                                cell.index = jsonCell.index;
                            } else {
                                throw Error('Cell index is missing.');
                            }
                            if (cell.index < spanMin) {
                                spanMin = cell.index;
                            } else if (cell.index > spanMax) {
                                spanMax = cell.index;
                            }
                            //Update the Cell name
                            cell.refName = this.getCellName(row.index, cell.index);
                            //Row span
                            if (jsonCell.rowSpan !== null && jsonCell.rowSpan !== undefined) {
                                cell.rowSpan = jsonCell.rowSpan - 1;
                            } else {
                                cell.rowSpan = 0;
                            }
                            //Column span
                            if (jsonCell.colSpan !== null && jsonCell.colSpan !== undefined) {
                                cell.colSpan = jsonCell.colSpan - 1;
                            } else {
                                cell.colSpan = 0;
                            }
                            this.mergeCells = this.processMergeCells(cell, row.index, this.mergeCells);
                            //Hyperlink
                            if (jsonCell.hyperlink !== null && jsonCell.hyperlink !== undefined) {
                                var hyperLink = new HyperLink();
                                if (jsonCell.hyperlink.target !== undefined) {
                                    hyperLink.target = jsonCell.hyperlink.target;
                                    if (jsonCell.hyperlink.displayText !== undefined) {
                                        cell.value = jsonCell.hyperlink.displayText;
                                    } else {
                                        cell.value = jsonCell.hyperlink.target;
                                    }
                                    cell.type = this.getCellValueType(cell.value);
                                    hyperLink.ref = cell.refName;
                                    hyperLink.rId = this.mHyperLinks.length + 1;
                                    this.mHyperLinks.push(hyperLink);
                                    cell.cellStyle = new CellStyle();
                                    /* tslint:disable-next-line:max-line-length */
                                    this.parserCellStyle(jsonCell.style !== undefined ? this.mergeOptions(jsonCell.style, this.hyperlinkStyle) : this.hyperlinkStyle, cell.cellStyle, 'string');
                                    cell.styleIndex = cell.cellStyle.index;
                                }
                            }
                            //Cell value
                            if (jsonCell.value !== null && jsonCell.value !== undefined) {
                                cell.value = jsonCell.value;
                                cell.type = this.getCellValueType(cell.value);
                            }
                            if (jsonCell.style !== null && jsonCell.style !== undefined && cell.styleIndex === undefined) {
                                cell.cellStyle = new CellStyle();
                                if (cell.value instanceof Date) {
                                    this.parserCellStyle(jsonCell.style, cell.cellStyle, cell.type, 14);
                                } else {
                                    this.parserCellStyle(jsonCell.style, cell.cellStyle, cell.type);
                                }
                                cell.styleIndex = cell.cellStyle.index;
                            } else if (cell.value instanceof Date) {
                                cell.cellStyle = new CellStyle();
                                this.parserCellStyle({}, cell.cellStyle, cell.type, 14);
                                cell.styleIndex = cell.cellStyle.index;
                            }
                            this.parseCellType(cell);
                            row.cells.add(cell);
                        }
                        row.spans = spanMin + ':' + spanMax;
                    }
                }, {
                    key: 'applyGlobalStyle',
                    value: function applyGlobalStyle(json, cellStyle) {
                        var index = 0;
                        if (this.cellStyles.has(json.name)) {
                            index = this.cellStyles.get(json.name).xfId;
                            var cellStyleXfs = this.mCellStyleXfs[index - 1];
                            cellStyle.name = json.name;
                            var compareResult = this.compareStyleXfs(cellStyleXfs);
                            if (!compareResult.result) {
                                var cellXfs = new CellXfs();
                                cellXfs.alignment = cellStyleXfs.alignment;
                                cellXfs.applyAlignment = cellStyleXfs.applyAlignment;
                                cellXfs.borderId = cellStyleXfs.borderId;
                                cellXfs.fillId = cellStyleXfs.fillId;
                                cellXfs.fontId = cellStyleXfs.fontId;
                                cellXfs.numFmtId = cellStyleXfs.numFmtId;
                                cellXfs.xfId = index;
                                this.mCellXfs.push(cellXfs);
                                this.mStyles.push(cellStyle);
                                cellStyle.index = this.mCellXfs.length;
                            } else {
                                cellStyle.index = compareResult.index;
                            }
                        }
                    }
                }, {
                    key: 'compareStyleXfs',
                    value: function compareStyleXfs(toCompareStyle) {
                        var result = false;
                        var index = 1;
                        var _iteratorNormalCompletion6 = true;
                        var _didIteratorError6 = false;
                        var _iteratorError6 = undefined;

                        try {
                            for (var _iterator6 = this.mCellXfs[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                var baseStyle = _step6.value;

                                result = baseStyle.alignment === toCompareStyle.alignment && baseStyle.borderId === toCompareStyle.borderId && baseStyle.numFmtId === toCompareStyle.numFmtId && baseStyle.fillId === toCompareStyle.fillId && baseStyle.fontId === toCompareStyle.fontId;
                                if (result) {
                                    break;
                                } else {
                                    index++;
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

                        return { index: index, result: result };
                    }
                }, {
                    key: 'parserCellStyle',
                    value: function parserCellStyle(json, cellStyle, cellType, defStyleIndex) {
                        //name
                        if (json.name !== null && json.name !== undefined) {
                            if (cellStyle.isGlobalStyle) {
                                cellStyle.name = json.name;
                            } else {
                                this.applyGlobalStyle(json, cellStyle);
                                return;
                            }
                        }
                        //background color
                        if (json.backColor !== null && json.backColor !== undefined) {
                            cellStyle.backColor = json.backColor;
                        }
                        //borders
                        //leftBorder
                        cellStyle.borders = new Borders();
                        //AllBorder
                        if (json.borders !== null && json.borders !== undefined) {
                            this.parserBorder(json.borders, cellStyle.borders.all);
                        }
                        //leftborder
                        if (json.leftBorder !== null && json.leftBorder !== undefined) {
                            this.parserBorder(json.leftBorder, cellStyle.borders.left);
                        }
                        //rightBorder
                        if (json.rightBorder !== null && json.rightBorder !== undefined) {
                            this.parserBorder(json.rightBorder, cellStyle.borders.right);
                        }
                        //topBorder
                        if (json.topBorder !== null && json.topBorder !== undefined) {
                            this.parserBorder(json.topBorder, cellStyle.borders.top);
                        }
                        //bottomBorder
                        if (json.bottomBorder !== null && json.bottomBorder !== undefined) {
                            this.parserBorder(json.bottomBorder, cellStyle.borders.bottom);
                        }
                        //fontName
                        if (json.fontName !== null && json.fontName !== undefined) {
                            cellStyle.fontName = json.fontName;
                        }
                        //fontSize
                        if (json.fontSize !== null && json.fontSize !== undefined) {
                            cellStyle.fontSize = json.fontSize;
                        }
                        //fontColor
                        if (json.fontColor !== null && json.fontColor !== undefined) {
                            cellStyle.fontColor = json.fontColor;
                        }
                        //italic
                        if (json.italic !== null && json.italic !== undefined) {
                            cellStyle.italic = json.italic;
                        }
                        //bold
                        if (json.bold !== null && json.bold !== undefined) {
                            cellStyle.bold = json.bold;
                        }
                        //hAlign
                        if (json.hAlign !== null && json.hAlign !== undefined) {
                            cellStyle.hAlign = json.hAlign;
                        }
                        //vAlign
                        if (json.vAlign !== null && json.vAlign !== undefined) {
                            cellStyle.vAlign = json.vAlign;
                        }
                        //underline
                        if (json.underline !== null && json.underline !== undefined) {
                            cellStyle.underline = json.underline;
                        }
                        //wrapText
                        if (json.wrapText !== null && json.wrapText !== undefined) {
                            cellStyle.wrapText = json.wrapText;
                        }
                        //numberFormat
                        if (json.numberFormat !== null && json.numberFormat !== undefined) {
                            if (json.type !== null && json.type !== undefined) {
                                cellStyle.numberFormat = this.getNumberFormat(json.numberFormat, json.type);
                            } else {
                                cellStyle.numberFormat = this.getNumberFormat(json.numberFormat, cellType);
                            }
                        } else if (defStyleIndex !== undefined) {
                            cellStyle.numFmtId = 14;
                            cellStyle.numberFormat = 'GENERAL';
                        } else {
                            cellStyle.numberFormat = 'GENERAL';
                        }
                        cellStyle.index = this.processCellStyle(cellStyle);
                    }
                }, {
                    key: 'switchNumberFormat',
                    value: function switchNumberFormat(numberFormat, type) {
                        var format = this.getNumberFormat(numberFormat, type);
                        if (format !== numberFormat) {
                            var numFmt = this.mNumFmt.get(numberFormat);
                            if (numFmt !== undefined) {
                                numFmt.formatCode = format;
                                if (this.mNumFmt.has(format)) {
                                    var _iteratorNormalCompletion7 = true;
                                    var _didIteratorError7 = false;
                                    var _iteratorError7 = undefined;

                                    try {
                                        for (var _iterator7 = this.mCellStyleXfs[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                            var cellStyleXfs = _step7.value;

                                            if (cellStyleXfs.numFmtId === numFmt.numFmtId) {
                                                cellStyleXfs.numFmtId = this.mNumFmt.get(format).numFmtId;
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

                                    var _iteratorNormalCompletion8 = true;
                                    var _didIteratorError8 = false;
                                    var _iteratorError8 = undefined;

                                    try {
                                        for (var _iterator8 = this.mCellXfs[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                            var cellXfs = _step8.value;

                                            if (cellXfs.numFmtId === numFmt.numFmtId) {
                                                cellXfs.numFmtId = this.mNumFmt.get(format).numFmtId;
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
                                }
                            }
                        }
                    }
                }, {
                    key: 'getNumberFormat',
                    value: function getNumberFormat(numberFormat, type) {
                        var returnFormat = void 0;
                        switch (type) {
                            case 'number':
                                try {
                                    returnFormat = this.intl.getNumberPattern({ format: numberFormat });
                                } catch (error) {
                                    returnFormat = numberFormat;
                                }
                                break;
                            case 'datetime':
                                try {
                                    returnFormat = this.intl.getDatePattern({ skeleton: numberFormat, type: 'dateTime' }, true);
                                } catch (error) {
                                    returnFormat = numberFormat;
                                }
                                break;
                            case 'date':
                                try {
                                    returnFormat = this.intl.getDatePattern({ skeleton: numberFormat, type: 'date' }, true);
                                } catch (error) {
                                    returnFormat = numberFormat;
                                }
                                break;
                            case 'time':
                                try {
                                    returnFormat = this.intl.getDatePattern({ skeleton: numberFormat, type: 'time' }, true);
                                } catch (error) {
                                    returnFormat = numberFormat;
                                }
                                break;
                            default:
                                returnFormat = numberFormat;
                                break;
                        }
                        return returnFormat;
                    }
                }, {
                    key: 'parserBorder',
                    value: function parserBorder(json, border) {
                        if (json.color !== null && json.color !== undefined) {
                            border.color = json.color;
                        } else {
                            border.color = '#000000';
                        }
                        if (json.lineStyle !== null && json.lineStyle !== undefined) {
                            border.lineStyle = json.lineStyle;
                        } else {
                            border.lineStyle = 'thin';
                        }
                    }
                }, {
                    key: 'processCellStyle',
                    value: function processCellStyle(style) {
                        var compareResult = this.compareStyle(style);
                        if (!compareResult.result) {
                            this.mStyles.push(style);
                            var cellXfs = undefined;
                            if (style.isGlobalStyle) {
                                cellXfs = new CellStyleXfs();
                            } else {
                                cellXfs = new CellXfs();
                            }
                            //Add font
                            var compareFontResult = this.isNewFont(style);
                            if (!compareFontResult.result) {
                                var font = new Font();
                                font.b = style.bold;
                                font.i = style.italic;
                                font.name = style.fontName;
                                font.sz = style.fontSize;
                                font.u = style.underline;
                                font.color = 'FF' + style.fontColor.replace('#', '');
                                this.mFonts.push(font);
                                cellXfs.fontId = this.mFonts.length - 1;
                            } else {
                                cellXfs.fontId = compareFontResult.index;
                            }
                            //Add fill
                            if (style.backColor !== 'none') {
                                var backColor = 'FF' + style.backColor.replace('#', '');
                                if (this.mFills.has(backColor)) {
                                    var fillId = this.mFills.get(backColor);
                                    cellXfs.fillId = fillId;
                                } else {
                                    var _fillId = this.mFills.size + 2;
                                    this.mFills.set(backColor, _fillId);
                                    cellXfs.fillId = _fillId;
                                }
                            } else {
                                cellXfs.fillId = 0;
                            }
                            //Add border            
                            if (!this.isNewBorder(style)) {
                                this.mBorders.push(style.borders);
                                cellXfs.borderId = this.mBorders.length;
                            } else {
                                cellXfs.borderId = 0;
                            }
                            cellXfs.xfId = 0;
                            //Add Number Format            
                            if (style.numberFormat !== 'GENERAL') {
                                if (this.mNumFmt.has(style.numberFormat)) {
                                    var numFmt = this.mNumFmt.get(style.numberFormat);
                                    cellXfs.numFmtId = numFmt.numFmtId;
                                } else {
                                    var id = this.mNumFmt.size + 164;
                                    this.mNumFmt.set(style.numberFormat, new NumFmt(id, style.numberFormat));
                                    cellXfs.numFmtId = id;
                                }
                            } else {
                                if (style.numberFormat === 'GENERAL' && style.numFmtId === 14) {
                                    cellXfs.numFmtId = 14;
                                } else {
                                    cellXfs.numFmtId = 0;
                                }
                            }
                            //Add alignment
                            if (style.hAlign !== 'left' || style.vAlign !== 'bottom' || style.wrapText) {
                                cellXfs.applyAlignment = 1;
                                cellXfs.alignment = new Alignment();
                                cellXfs.alignment.horizontal = style.hAlign;
                                cellXfs.alignment.vertical = style.vAlign;
                                cellXfs.alignment.wrapText = style.wrapText ? 1 : 0;
                            }
                            if (style.isGlobalStyle) {
                                this.mCellStyleXfs.push(cellXfs);
                                return this.mCellStyleXfs.length;
                            } else {
                                //Add cellxfs
                                this.mCellXfs.push(cellXfs);
                                return this.mCellXfs.length;
                            }
                        } else {
                            //Return the index of the already existing style.
                            return compareResult.index;
                        }
                    }
                }, {
                    key: 'isNewFont',
                    value: function isNewFont(toCompareStyle) {
                        var result = false;
                        var index = 0;
                        var _iteratorNormalCompletion9 = true;
                        var _didIteratorError9 = false;
                        var _iteratorError9 = undefined;

                        try {
                            for (var _iterator9 = this.mFonts[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                var font = _step9.value;

                                index++;
                                var fontColor = undefined;
                                if (toCompareStyle.fontColor !== undefined) {
                                    fontColor = 'FF' + toCompareStyle.fontColor.replace('#', '');
                                }
                                result = font.color === fontColor && font.b === toCompareStyle.bold && font.i === toCompareStyle.italic && font.u === toCompareStyle.underline && font.name === toCompareStyle.fontName && font.sz === toCompareStyle.fontSize;
                                if (result) {
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

                        index = index - 1;
                        return { index: index, result: result };
                    }
                }, {
                    key: 'isNewBorder',
                    value: function isNewBorder(toCompareStyle) {
                        var bStyle = new CellStyle();
                        if (this.isAllBorder(toCompareStyle.borders)) {
                            return bStyle.borders.all.color === toCompareStyle.borders.all.color && bStyle.borders.all.lineStyle === toCompareStyle.borders.all.lineStyle;
                        } else {
                            return bStyle.borders.left.color === toCompareStyle.borders.left.color && bStyle.borders.left.lineStyle === toCompareStyle.borders.left.lineStyle && bStyle.borders.right.color === toCompareStyle.borders.right.color && bStyle.borders.right.lineStyle === toCompareStyle.borders.right.lineStyle && bStyle.borders.top.color === toCompareStyle.borders.top.color && bStyle.borders.top.lineStyle === toCompareStyle.borders.top.lineStyle && bStyle.borders.bottom.color === toCompareStyle.borders.bottom.color && bStyle.borders.bottom.lineStyle === toCompareStyle.borders.bottom.lineStyle;
                        }
                    }
                }, {
                    key: 'isAllBorder',
                    value: function isAllBorder(toCompareBorder) {
                        var allBorderStyle = new CellStyle();
                        return allBorderStyle.borders.all.color !== toCompareBorder.all.color && allBorderStyle.borders.all.lineStyle !== toCompareBorder.all.lineStyle;
                    }
                }, {
                    key: 'compareStyle',
                    value: function compareStyle(toCompareStyle) {
                        var result = true;
                        var index = 0;
                        var globalStyleIndex = 0;
                        var _iteratorNormalCompletion10 = true;
                        var _didIteratorError10 = false;
                        var _iteratorError10 = undefined;

                        try {
                            for (var _iterator10 = this.mStyles[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                var baseStyle = _step10.value;

                                result = baseStyle.backColor === toCompareStyle.backColor && baseStyle.bold === toCompareStyle.bold && baseStyle.numFmtId === toCompareStyle.numFmtId && baseStyle.numberFormat === toCompareStyle.numberFormat && baseStyle.type === toCompareStyle.type && baseStyle.fontColor === toCompareStyle.fontColor && baseStyle.fontName === toCompareStyle.fontName && baseStyle.fontSize === toCompareStyle.fontSize && baseStyle.hAlign === toCompareStyle.hAlign && baseStyle.italic === toCompareStyle.italic && baseStyle.underline === toCompareStyle.underline && baseStyle.vAlign === toCompareStyle.vAlign && baseStyle.wrapText === toCompareStyle.wrapText && baseStyle.borders.all.color === toCompareStyle.borders.all.color && baseStyle.borders.all.lineStyle === toCompareStyle.borders.all.lineStyle && baseStyle.borders.left.color === toCompareStyle.borders.left.color && baseStyle.borders.left.lineStyle === toCompareStyle.borders.left.lineStyle && baseStyle.borders.right.color === toCompareStyle.borders.right.color && baseStyle.borders.right.lineStyle === toCompareStyle.borders.right.lineStyle && baseStyle.borders.top.color === toCompareStyle.borders.top.color && baseStyle.borders.top.lineStyle === toCompareStyle.borders.top.lineStyle && baseStyle.borders.bottom.color === toCompareStyle.borders.bottom.color && baseStyle.borders.bottom.lineStyle === toCompareStyle.borders.bottom.lineStyle;
                                if (result) {
                                    break;
                                } else if (!baseStyle.isGlobalStyle) {
                                    index++;
                                } else {
                                    globalStyleIndex++;
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

                        if (toCompareStyle.isGlobalStyle) {
                            index = globalStyleIndex + 1;
                        }
                        return { index: index, result: result };
                    }
                }, {
                    key: 'contains',
                    value: function contains(array, item) {
                        var index = array.indexOf(item);
                        return index > -1 && index < array.length;
                    }
                }, {
                    key: 'getCellValueType',
                    value: function getCellValueType(value) {
                        if (value instanceof Date) {
                            return 'datetime';
                        } else if (typeof value === 'boolean') {
                            return 'boolean';
                        } else if (typeof value === 'number') {
                            return 'number';
                        } else {
                            return 'string';
                        }
                    }
                }, {
                    key: 'parseCellType',
                    value: function parseCellType(cell) {
                        var type = cell.type;
                        var saveType = void 0;
                        var value = cell.value;
                        switch (type) {
                            case 'datetime':
                                value = this.toOADate(value);
                                if (cell.cellStyle !== undefined && cell.cellStyle.name !== undefined) {
                                    if (this.globalStyles.has(cell.cellStyle.name)) {
                                        var _value = this.globalStyles.get(cell.cellStyle.name);
                                        this.switchNumberFormat(_value.format, _value.type);
                                    }
                                }
                                saveType = 'n';
                                break;
                            //TODO: Update the number format index and style
                            case 'boolean':
                                value = value ? 1 : 0;
                                saveType = 'b';
                                break;
                            case 'number':
                                saveType = 'n';
                                if (cell.cellStyle !== undefined && cell.cellStyle.name !== undefined) {
                                    if (this.globalStyles.has(cell.cellStyle.name)) {
                                        this.switchNumberFormat(this.globalStyles.get(cell.cellStyle.name).format, 'number');
                                    }
                                }
                                break;
                            case 'string':
                                this.sharedStringCount++;
                                saveType = 's';
                                if (!this.contains(this.sharedString, value)) {
                                    this.sharedString.push(value);
                                }
                                value = this.sharedString.indexOf(value);
                                break;
                            default:
                                break;
                        }
                        cell.saveType = saveType;
                        cell.value = value;
                    }
                }, {
                    key: 'saveAsBlob',
                    value: function saveAsBlob(blobSaveType) {
                        var _this5 = this;

                        switch (blobSaveType) {
                            case 'text/csv':
                                return new Promise(function (resolve, reject) {
                                    var obj = {};
                                    obj.blobData = _this5.csvHelper.saveAsBlob();
                                    resolve(obj);
                                });
                            default:
                                return new Promise(function (resolve, reject) {
                                    _this5.saveInternal();
                                    _this5.mArchive.saveAsBlob().then(function (blob) {
                                        var obj = {};
                                        obj.blobData = new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                                        resolve(obj);
                                    });
                                });
                        }
                    }
                }, {
                    key: 'save',
                    value: function save(fileName, proxyUrl) {
                        var _this6 = this;

                        if (fileName === null || fileName === undefined || fileName === '') {
                            throw new Error('Argument Null Exception: fileName cannot be null or empty');
                        }
                        var xlsxMatch = fileName.match('.xlsx$');
                        var csvMatch = fileName.match('.csv$');
                        if (xlsxMatch !== null && xlsxMatch[0] === '.' + this.mSaveType) {
                            this.saveInternal();
                            this.mArchive.save(fileName).then(function () {
                                _this6.mArchive.destroy();
                            });
                        } else if (csvMatch !== null && csvMatch[0] === '.' + this.mSaveType) {
                            this.csvHelper.save(fileName);
                        } else {
                            throw Error('Save type and file extension is different.');
                        }
                    }
                }, {
                    key: 'saveInternal',
                    value: function saveInternal() {
                        this.saveWorkbook();
                        this.saveWorksheets();
                        this.saveSharedString();
                        this.saveStyles();
                        this.saveApp(this.builtInProperties);
                        this.saveCore(this.builtInProperties);
                        this.saveContentType();
                        this.saveTopLevelRelation();
                        this.saveWorkbookRelation();
                    }
                }, {
                    key: 'saveWorkbook',
                    value: function saveWorkbook() {
                        /* tslint:disable-next-line:max-line-length */
                        var workbookTemp = '<?xml version="1.0" encoding="utf-8"?><workbook xmlns:r = "http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns= "http://schemas.openxmlformats.org/spreadsheetml/2006/main"><workbookPr codeName="ThisWorkbook" defaultThemeVersion= "153222"/><bookViews><workbookView activeTab="0"/></bookViews>';
                        var sheets = '<sheets>';
                        var length = this.worksheets.length;
                        for (var i = 0; i < length; i++) {
                            /* tslint:disable-next-line:max-line-length */
                            sheets += '<sheet name="' + this.worksheets[i].name + '" sheetId="' + (i + 1).toString() + '" r:id ="rId' + (i + 1).toString() + '" />';
                        }
                        sheets += '</sheets>';
                        workbookTemp += sheets;
                        if (this.printTitles.size > 0) {
                            var printTitle = '<definedNames>';
                            this.printTitles.forEach(function (value, key) {
                                printTitle += '<definedName name="_xlnm.Print_Titles" localSheetId="' + key + '">' + value + '</definedName>';
                            });
                            printTitle += '</definedNames>';
                            workbookTemp += printTitle;
                        }
                        this.addToArchive(workbookTemp + '</workbook>', 'xl/workbook.xml');
                    }
                }, {
                    key: 'saveWorksheets',
                    value: function saveWorksheets() {
                        var length = this.worksheets.length;
                        for (var i = 0; i < length; i++) {
                            this.saveWorksheet(this.worksheets[i], i);
                        }
                    }
                }, {
                    key: 'saveWorksheet',
                    value: function saveWorksheet(sheet, index) {
                        var sheetBlob = new BlobHelper();
                        /* tslint:disable-next-line:max-line-length */
                        var sheetString = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><worksheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">';
                        if (!sheet.isSummaryRowBelow) {
                            sheetString += '<sheetPr>' + '<outlinePr ' + 'summaryBelow="0" >' + '</outlinePr>' + '</sheetPr>';
                        } else {
                            sheetString += '<sheetPr />';
                        }
                        if (sheet.freezePanes !== undefined) {
                            sheetString += this.saveFreezePanes(sheet);
                        }
                        if (sheet.columns !== undefined) {
                            var colString = '<cols>';
                            var _iteratorNormalCompletion11 = true;
                            var _didIteratorError11 = false;
                            var _iteratorError11 = undefined;

                            try {
                                for (var _iterator11 = sheet.columns[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                    var column = _step11.value;

                                    /* tslint:disable-next-line:max-line-length */
                                    if (column.width !== undefined) {
                                        colString += '<col min="' + column.index + '" max="' + column.index + '" width="' + this.pixelsToColumnWidth(column.width) + '" customWidth="1" />';
                                    } else {
                                        colString += '<col min="' + column.index + '" max="' + column.index + '" width="' + '8.43' + '" customWidth="1" />';
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

                            sheetString += colString + '</cols>';
                        }
                        sheetString += '<sheetData>';
                        sheetBlob.append(sheetString);
                        sheetString = '';
                        if (sheet.rows !== undefined) {
                            var _iteratorNormalCompletion12 = true;
                            var _didIteratorError12 = false;
                            var _iteratorError12 = undefined;

                            try {
                                for (var _iterator12 = sheet.rows[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                    var row = _step12.value;

                                    var rowString = '<row r="' + row.index + '" spans="' + row.spans + '" ';
                                    if (row.height !== undefined) {
                                        rowString += 'ht="' + this.pixelsToRowHeight(row.height) + '" customHeight="1" ';
                                    }
                                    if (row.grouping !== undefined) {
                                        if (row.grouping.isHidden) {
                                            rowString += 'hidden="1" ';
                                        }
                                        if (row.grouping.outlineLevel !== undefined) {
                                            rowString += 'outlineLevel="' + row.grouping.outlineLevel + '" ';
                                        }
                                        if (row.grouping.isCollapsed) {
                                            rowString += 'collapsed="1" ';
                                        }
                                    }
                                    rowString += '>';
                                    var _iteratorNormalCompletion13 = true;
                                    var _didIteratorError13 = false;
                                    var _iteratorError13 = undefined;

                                    try {
                                        for (var _iterator13 = row.cells[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                            var cell = _step13.value;

                                            if (cell !== undefined && (cell.value !== undefined || cell.cellStyle !== undefined)) {
                                                rowString += '<c r="' + cell.refName + '" ';
                                                if (cell.saveType !== undefined) {
                                                    rowString += 't="' + cell.saveType + '" ';
                                                }
                                                if (cell.styleIndex !== undefined) {
                                                    rowString += 's="' + cell.styleIndex + '" ';
                                                }
                                                rowString += ' >';
                                                if (cell.value !== undefined) {
                                                    rowString += '<v>' + cell.value + '</v></c>';
                                                } else {
                                                    rowString += '</c>';
                                                }
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

                                    rowString += '</row>';
                                    sheetBlob.append(rowString);
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
                        }
                        sheetString += '</sheetData>';
                        if (sheet.mergeCells.length > 0) {
                            sheetString += '<mergeCells count="' + sheet.mergeCells.length + '">';
                            var _iteratorNormalCompletion14 = true;
                            var _didIteratorError14 = false;
                            var _iteratorError14 = undefined;

                            try {
                                for (var _iterator14 = sheet.mergeCells[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                                    var mCell = _step14.value;

                                    sheetString += '<mergeCell ref="' + mCell.ref + '" />';
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

                            sheetString += '</mergeCells>';
                        }
                        if (sheet.hyperLinks.length > 0) {
                            sheetString += '<hyperlinks>';
                            var _iteratorNormalCompletion15 = true;
                            var _didIteratorError15 = false;
                            var _iteratorError15 = undefined;

                            try {
                                for (var _iterator15 = sheet.hyperLinks[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                                    var hLink = _step15.value;

                                    sheetString += '<hyperlink ref="' + hLink.ref + '" r:id="rId' + hLink.rId + '" />';
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

                            sheetString += '</hyperlinks>';
                            this.addToArchive(this.saveSheetRelations(sheet), 'xl/worksheets/_rels/sheet' + sheet.index + '.xml.rels');
                        }
                        /* tslint:disable-next-line:max-line-length */
                        sheetString += '<pageMargins left="0.75" right="0.75" top="1" bottom="1" header="0.5" footer="0.5" /><headerFooter scaleWithDoc="1" alignWithMargins="0" differentFirst="0" differentOddEven="0" /></worksheet>';
                        sheetBlob.append(sheetString);
                        this.addToArchive(sheetBlob.getBlob(), 'xl/worksheets' + '/sheet' + (index + 1) + '.xml');
                    }
                }, {
                    key: 'pixelsToColumnWidth',
                    value: function pixelsToColumnWidth(pixels) {
                        var dDigitWidth = 7;
                        var val = pixels > dDigitWidth + 5 ? this.trunc((pixels - 5) / dDigitWidth * 100 + 0.5) / 100 : pixels / (dDigitWidth + 5);
                        return val > 1 ? (val * dDigitWidth + 5) / dDigitWidth * 256.0 / 256.0 : val * (dDigitWidth + 5) / dDigitWidth * 256.0 / 256.0;
                    }
                }, {
                    key: 'trunc',
                    value: function trunc(x) {
                        var n = x - x % 1;
                        return n === 0 && (x < 0 || x === 0 && 1 / x !== 1 / 0) ? -0 : n;
                    }
                }, {
                    key: 'pixelsToRowHeight',
                    value: function pixelsToRowHeight(pixels) {
                        return pixels * this.unitsProportions[5] / this.unitsProportions[6];
                    }
                }, {
                    key: 'saveSheetRelations',
                    value: function saveSheetRelations(sheet) {
                        /* tslint:disable-next-line:max-line-length */
                        var relStr = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
                        var _iteratorNormalCompletion16 = true;
                        var _didIteratorError16 = false;
                        var _iteratorError16 = undefined;

                        try {
                            for (var _iterator16 = sheet.hyperLinks[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                                var hLink = _step16.value;

                                /* tslint:disable-next-line:max-line-length */
                                relStr += '<Relationship Id="rId' + hLink.rId + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="' + hLink.target + '" TargetMode="External" />';
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

                        relStr += '</Relationships>';
                        return relStr;
                    }
                }, {
                    key: 'saveFreezePanes',
                    value: function saveFreezePanes(sheet) {
                        var paneString = '<sheetViews><sheetView workbookViewId="0" ><pane state="frozen"' + ' topLeftCell="' + sheet.freezePanes.leftCell + '" ';
                        if (sheet.freezePanes.row !== 0) {
                            paneString += 'ySplit="' + sheet.freezePanes.row + '" ';
                        }
                        if (sheet.freezePanes.column !== 0) {
                            paneString += 'xSplit="' + sheet.freezePanes.column + '" ';
                        }
                        paneString += '/></sheetView></sheetViews>';
                        return paneString;
                    }
                }, {
                    key: 'saveSharedString',
                    value: function saveSharedString() {
                        var length = this.sharedString.length;
                        if (length > 0) {
                            /* tslint:disable-next-line:max-line-length */
                            var sstStart = '<?xml version="1.0" encoding="utf-8"?><sst uniqueCount="' + length + '" count="' + this.sharedStringCount + '" xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">';
                            var si = '';
                            for (var i = 0; i < length; i++) {
                                si += '<si><t>';
                                si += this.processString(this.sharedString[i]);
                                si += '</t></si>';
                            }
                            si += '</sst>';
                            this.addToArchive(sstStart + si, 'xl/sharedStrings.xml');
                        }
                    }
                }, {
                    key: 'processString',
                    value: function processString(value) {
                        if (value.indexOf('&') !== -1) {
                            value = value.replace(/&/g, '&amp;');
                        }
                        if (value.indexOf('<') !== -1) {
                            value = value.replace(/</g, '&lt;');
                        }
                        if (value.indexOf('>') !== -1) {
                            value = value.replace(/>/g, '&gt;');
                        }
                        return value;
                    }
                }, {
                    key: 'saveStyles',
                    value: function saveStyles() {
                        /* tslint:disable-next-line:max-line-length */
                        var styleTemp = '<?xml version="1.0" encoding="utf-8"?><styleSheet xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">';
                        styleTemp += this.saveNumberFormats();
                        styleTemp += this.saveFonts();
                        styleTemp += this.saveFills();
                        styleTemp += this.saveBorders();
                        styleTemp += this.saveCellStyleXfs();
                        styleTemp += this.saveCellXfs();
                        styleTemp += this.saveCellStyles();
                        this.addToArchive(styleTemp + '</styleSheet>', 'xl/styles.xml');
                    }
                }, {
                    key: 'saveNumberFormats',
                    value: function saveNumberFormats() {
                        if (this.mNumFmt.size >= 1) {
                            var numFmtStyle = '<numFmts count="' + this.mNumFmt.size + '">';
                            this.mNumFmt.forEach(function (value, key) {
                                numFmtStyle += '<numFmt numFmtId="' + value.numFmtId + '" formatCode="' + value.formatCode.replace(/"/g, '&quot;') + '" />';
                            });
                            return numFmtStyle += '</numFmts>';
                        } else {
                            return '';
                        }
                    }
                }, {
                    key: 'saveFonts',
                    value: function saveFonts() {
                        /* tslint:disable-next-line:max-line-length */
                        var fontStyle = '<fonts count="' + this.mFonts.length + '">';
                        if (this.mFonts.length >= 1) {
                            var _iteratorNormalCompletion17 = true;
                            var _didIteratorError17 = false;
                            var _iteratorError17 = undefined;

                            try {
                                for (var _iterator17 = this.mFonts[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                                    var font = _step17.value;

                                    fontStyle += '<font>';
                                    if (font.b) {
                                        fontStyle += '<b />';
                                    }
                                    if (font.i) {
                                        fontStyle += '<i />';
                                    }
                                    if (font.u) {
                                        fontStyle += '<u />';
                                    }
                                    fontStyle += '<sz val="' + this.pixelsToRowHeight(font.sz) + '" />';
                                    fontStyle += '<color rgb="' + font.color + '" />';
                                    fontStyle += '<name val="' + font.name + '" /></font>';
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
                        return fontStyle + '</fonts>';
                    }
                }, {
                    key: 'saveFills',
                    value: function saveFills() {
                        /* tslint:disable-next-line:max-line-length */
                        var fillsStyle = '<fills count="' + (this.mFills.size + 2) + '"><fill><patternFill patternType="none"></patternFill></fill><fill><patternFill patternType="gray125"></patternFill></fill>';
                        if (this.mFills.size >= 1) {
                            this.mFills.forEach(function (value, key) {
                                /* tslint:disable-next-line:max-line-length */
                                fillsStyle += '<fill><patternFill patternType="solid"><fgColor rgb="' + key + '" /><bgColor rgb="FFFFFFFF" /></patternFill></fill>';
                            });
                        }
                        return fillsStyle + '</fills>';
                    }
                }, {
                    key: 'saveBorders',
                    value: function saveBorders() {
                        /* tslint:disable-next-line:max-line-length */
                        var bordersStyle = '<borders count="' + (this.mBorders.length + 1) + '"><border><left /><right /><top /><bottom /><diagonal /></border>';
                        if (this.mBorders.length >= 1) {
                            var _iteratorNormalCompletion18 = true;
                            var _didIteratorError18 = false;
                            var _iteratorError18 = undefined;

                            try {
                                for (var _iterator18 = this.mBorders[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                                    var borders = _step18.value;

                                    if (this.isAllBorder(borders)) {
                                        var color = borders.all.color.replace('#', '');
                                        var lineStyle = borders.all.lineStyle;
                                        /* tslint:disable-next-line:max-line-length */
                                        bordersStyle += '<border><left style="' + lineStyle + '"><color rgb="FF' + color + '" /></left><right style="' + lineStyle + '"><color rgb="FF' + color + '" /></right><top style="' + lineStyle + '"><color rgb="FF' + color + '" /></top><bottom style="' + lineStyle + '"><color rgb="FF' + color + '" /></bottom></border>';
                                    } else {
                                        /* tslint:disable-next-line:max-line-length */
                                        bordersStyle += '<border><left style="' + borders.left.lineStyle + '"><color rgb="FF' + borders.left.color.replace('#', '') + '" /></left><right style="' + borders.right.lineStyle + '"><color rgb="FF' + borders.right.color.replace('#', '') + '" /></right><top style="' + borders.top.lineStyle + '"><color rgb="FF' + borders.top.color.replace('#', '') + '" /></top><bottom style="' + borders.bottom.lineStyle + '"><color rgb="FF' + borders.bottom.color.replace('#', '') + '" /></bottom></border>';
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
                        return bordersStyle + '</borders>';
                    }
                }, {
                    key: 'saveCellStyles',
                    value: function saveCellStyles() {
                        var _this7 = this;

                        var cellStyleString = '<cellStyles  count="' + this.cellStyles.size + '">';
                        this.cellStyles.forEach(function (value, key) {
                            cellStyleString += '<cellStyle name="' + key + '" xfId="' + _this7.cellStyles.get(key).xfId + '"';
                            if (key === 'Normal') {
                                cellStyleString += ' builtinId="0"';
                            }
                            cellStyleString += ' />';
                        });
                        return cellStyleString += '</cellStyles>';
                    }
                }, {
                    key: 'saveCellStyleXfs',
                    value: function saveCellStyleXfs() {
                        /* tslint:disable-next-line:max-line-length */
                        var cellXfsStyle = '<cellStyleXfs count="' + (this.mCellStyleXfs.length + 1) + '"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" />';
                        if (this.mCellStyleXfs.length >= 1) {
                            var _iteratorNormalCompletion19 = true;
                            var _didIteratorError19 = false;
                            var _iteratorError19 = undefined;

                            try {
                                for (var _iterator19 = this.mCellStyleXfs[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                                    var cellStyleXf = _step19.value;

                                    /* tslint:disable-next-line:max-line-length */
                                    cellXfsStyle += '<xf numFmtId="' + cellStyleXf.numFmtId + '" fontId="' + cellStyleXf.fontId + '" fillId="' + cellStyleXf.fillId + '" borderId="' + cellStyleXf.borderId + '" ';
                                    if (cellStyleXf.applyAlignment === 1) {
                                        cellXfsStyle += 'applyAlignment="1"><alignment ';
                                        if (cellStyleXf.alignment.horizontal !== undefined) {
                                            cellXfsStyle += 'horizontal="' + cellStyleXf.alignment.horizontal + '" ';
                                        }
                                        if (cellStyleXf.alignment.vertical !== undefined) {
                                            cellXfsStyle += 'vertical="' + cellStyleXf.alignment.vertical + '" ';
                                        }
                                        cellXfsStyle += 'wrapText="' + cellStyleXf.alignment.wrapText + '" /></xf>';
                                    } else {
                                        cellXfsStyle += ' />';
                                    }
                                    // <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1">
                                    //       <alignment horizontal="center" vertical="top" wrapText="1" />
                                    //     </xf>
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
                        return cellXfsStyle + '</cellStyleXfs>';
                    }
                }, {
                    key: 'saveCellXfs',
                    value: function saveCellXfs() {
                        /* tslint:disable-next-line:max-line-length */
                        var cellXfsStyle = '<cellXfs count="' + (this.mCellXfs.length + 1) + '"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" />';
                        if (this.mCellXfs.length >= 1) {
                            var _iteratorNormalCompletion20 = true;
                            var _didIteratorError20 = false;
                            var _iteratorError20 = undefined;

                            try {
                                for (var _iterator20 = this.mCellXfs[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                                    var cellXf = _step20.value;

                                    /* tslint:disable-next-line:max-line-length */
                                    cellXfsStyle += '<xf numFmtId="' + cellXf.numFmtId + '" fontId="' + cellXf.fontId + '" fillId="' + cellXf.fillId + '" borderId="' + cellXf.borderId + '" xfId="' + cellXf.xfId + '" ';
                                    if (cellXf.applyAlignment === 1) {
                                        cellXfsStyle += 'applyAlignment="1"><alignment ';
                                        if (cellXf.alignment.horizontal !== undefined) {
                                            cellXfsStyle += 'horizontal="' + cellXf.alignment.horizontal + '" ';
                                        }
                                        if (cellXf.alignment.vertical !== undefined) {
                                            cellXfsStyle += 'vertical="' + cellXf.alignment.vertical + '" ';
                                        }
                                        cellXfsStyle += 'wrapText="' + cellXf.alignment.wrapText + '" /></xf>';
                                    } else {
                                        cellXfsStyle += ' />';
                                    }
                                    // <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1">
                                    //       <alignment horizontal="center" vertical="top" wrapText="1" />
                                    //     </xf>
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
                        }
                        return cellXfsStyle + '</cellXfs>';
                    }
                }, {
                    key: 'saveApp',
                    value: function saveApp(builtInProperties) {
                        /* tslint:disable-next-line:max-line-length */
                        var appString = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>Essential XlsIO</Application>';
                        if (builtInProperties !== undefined) {
                            if (builtInProperties.manager !== undefined) {
                                appString += '<Manager>' + builtInProperties.manager + '</Manager>';
                            }
                            if (builtInProperties.company !== undefined) {
                                appString += '<Company>' + builtInProperties.company + '</Company>';
                            }
                        }
                        this.addToArchive(appString + '</Properties>', 'docProps/app.xml');
                    }
                }, {
                    key: 'saveCore',
                    value: function saveCore(builtInProperties) {
                        var createdDate = new Date();
                        /* tslint:disable-next-line:max-line-length */
                        var coreString = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><cp:coreProperties xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties">';
                        if (this.builtInProperties !== undefined) {
                            if (builtInProperties.author !== undefined) {
                                coreString += '<dc:creator>' + builtInProperties.author + '</dc:creator>';
                            }
                            if (builtInProperties.subject !== undefined) {
                                coreString += '<dc:subject>' + builtInProperties.subject + '</dc:subject>';
                            }
                            if (builtInProperties.category !== undefined) {
                                coreString += '<cp:category>' + builtInProperties.category + '</cp:category>';
                            }
                            if (builtInProperties.comments !== undefined) {
                                coreString += '<dc:description>' + builtInProperties.comments + '</dc:description>';
                            }
                            if (builtInProperties.title !== undefined) {
                                coreString += '<dc:title>' + builtInProperties.title + '</dc:title>';
                            }
                            if (builtInProperties.tags !== undefined) {
                                coreString += '<cp:keywords>' + builtInProperties.tags + '</cp:keywords>';
                            }
                            if (builtInProperties.status !== undefined) {
                                coreString += '<cp:contentStatus>' + builtInProperties.status + '</cp:contentStatus>';
                            }
                            if (builtInProperties.createdDate !== undefined) {
                                /* tslint:disable-next-line:max-line-length */
                                coreString += '<dcterms:created xsi:type="dcterms:W3CDTF">' + builtInProperties.createdDate.toISOString() + '</dcterms:created>';
                            } else {
                                coreString += '<dcterms:created xsi:type="dcterms:W3CDTF">' + createdDate.toISOString() + '</dcterms:created>';
                            }
                            if (builtInProperties.modifiedDate !== undefined) {
                                /* tslint:disable-next-line:max-line-length */
                                coreString += '<dcterms:modified xsi:type="dcterms:W3CDTF">' + builtInProperties.modifiedDate.toISOString() + '</dcterms:modified>';
                            } else {
                                coreString += '<dcterms:modified xsi:type="dcterms:W3CDTF">' + createdDate.toISOString() + '</dcterms:modified>';
                            }
                        } else {
                            coreString += '<dcterms:created xsi:type="dcterms:W3CDTF">' + createdDate.toISOString() + '</dcterms:created>';
                            coreString += '<dcterms:modified xsi:type="dcterms:W3CDTF">' + createdDate.toISOString() + '</dcterms:modified>';
                        }
                        /* tslint:disable-next-line:max-line-length */
                        coreString += '</cp:coreProperties>';
                        this.addToArchive(coreString, 'docProps/core.xml');
                    }
                }, {
                    key: 'saveTopLevelRelation',
                    value: function saveTopLevelRelation() {
                        /* tslint:disable-next-line:max-line-length */
                        var topRelation = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml" /><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml" /><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml" /></Relationships>';
                        this.addToArchive(topRelation, '_rels/.rels');
                    }
                }, {
                    key: 'saveWorkbookRelation',
                    value: function saveWorkbookRelation() {
                        /* tslint:disable-next-line:max-line-length */
                        var wbRelation = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
                        var length = this.worksheets.length;
                        var count = 0;
                        for (var i = 0; i < length; i++, count++) {
                            /* tslint:disable-next-line:max-line-length */
                            wbRelation += '<Relationship Id="rId' + (i + 1).toString() + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (i + 1).toString() + '.xml" />';
                        }
                        /* tslint:disable-next-line:max-line-length */
                        wbRelation += '<Relationship Id="rId' + (++count).toString() + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" />';
                        if (this.sharedStringCount > 0) {
                            /* tslint:disable-next-line:max-line-length */
                            wbRelation += '<Relationship Id="rId' + (++count).toString() + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" />';
                        }
                        this.addToArchive(wbRelation + '</Relationships>', 'xl/_rels/workbook.xml.rels');
                    }
                }, {
                    key: 'saveContentType',
                    value: function saveContentType() {
                        /* tslint:disable-next-line:max-line-length */
                        var contentTypeString = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml" />';
                        var sheetsOverride = '';
                        var length = this.worksheets.length;
                        for (var i = 0; i < length; i++) {
                            /* tslint:disable-next-line:max-line-length */
                            sheetsOverride += '<Override PartName="/xl/worksheets/sheet' + (i + 1).toString() + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" />';
                        }
                        if (this.sharedStringCount > 0) {
                            /* tslint:disable-next-line:max-line-length */
                            contentTypeString += '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" />';
                        }
                        this.addToArchive(contentTypeString + sheetsOverride + '</Types>', '[Content_Types].xml');
                    }
                }, {
                    key: 'addToArchive',
                    value: function addToArchive(xmlString, itemName) {
                        if (typeof xmlString === 'string') {
                            var blob = new Blob([xmlString], { type: 'text/plain' });
                            var archiveItem = new ZipArchiveItem(blob, itemName);
                            this.mArchive.addItem(archiveItem);
                        } else {
                            var _archiveItem = new ZipArchiveItem(xmlString, itemName);
                            this.mArchive.addItem(_archiveItem);
                        }
                    }
                }, {
                    key: 'processMergeCells',
                    value: function processMergeCells(cell, rowIndex, mergeCells) {
                        if (cell.rowSpan !== 0 || cell.colSpan !== 0) {
                            var mCell = new MergeCell();
                            mCell.x = cell.index;
                            mCell.width = cell.colSpan;
                            mCell.y = rowIndex;
                            mCell.height = cell.rowSpan;
                            var startCell = this.getCellName(mCell.y, mCell.x);
                            var endCell = this.getCellName(rowIndex + mCell.height, cell.index + mCell.width);
                            mCell.ref = startCell + ':' + endCell;
                            mergeCells.add(mCell);
                        }
                        return mergeCells;
                    }
                }, {
                    key: 'dateToTicks',
                    value: function dateToTicks(year, month, day) {
                        var ticksPerDay = 10000 * 1000 * 60 * 60 * 24;
                        var daysToMonth365 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
                        var daysToMonth366 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
                        if (year >= 1 && year <= 9999 && month >= 1 && month <= 12) {
                            var days = this.isLeapYear(year) ? daysToMonth366 : daysToMonth365;
                            var y = year - 1;
                            var n = y * 365 + (y / 4 | 0) - (y / 100 | 0) + (y / 400 | 0) + days[month - 1] + day - 1;
                            return n * ticksPerDay;
                        }
                        throw new Error('Not a valid date');
                    }
                }, {
                    key: 'timeToTicks',
                    value: function timeToTicks(hour, minute, second) {
                        if (hour >= 0 && hour < 24 && minute >= 0 && minute < 60 && second >= 0 && second < 60) {
                            var totalSeconds = hour * 3600 + minute * 60 + second;
                            return totalSeconds * 10000 * 1000;
                        }
                        throw new Error('Not valid time');
                    }
                }, {
                    key: 'isLeapYear',
                    value: function isLeapYear(year) {
                        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
                    }
                }, {
                    key: 'toOADate',
                    value: function toOADate(date) {
                        var ticks = 0;
                        /* tslint:disable-next-line:max-line-length */
                        ticks = this.dateToTicks(date.getFullYear(), date.getMonth() + 1, date.getDate()) + this.timeToTicks(date.getHours(), date.getMinutes(), date.getSeconds());
                        if (ticks === 0) {
                            return 0.0;
                        }
                        var ticksPerDay = 10000 * 1000 * 60 * 60 * 24;
                        var daysTo1899 = (((365 * 4 + 1) * 25 - 1) * 4 + 1) * 4 + ((365 * 4 + 1) * 25 - 1) * 3 - 367;
                        var doubleDateOffset = daysTo1899 * ticksPerDay;
                        var oaDateMinAsTicks = ((365 * 4 + 1) * 25 - 1 - 365) * ticksPerDay;
                        if (ticks < oaDateMinAsTicks) {
                            throw new Error('Arg_OleAutDateInvalid');
                        }
                        var millisPerDay = 1000 * 60 * 60 * 24;
                        return (ticks - doubleDateOffset) / 10000 / millisPerDay;
                    }
                }]);

                return Workbook;
            }());

            _export('BuiltInProperties', BuiltInProperties = function BuiltInProperties() {
                _classCallCheck(this, BuiltInProperties);
            });

            _export('CellStyle', CellStyle);

            _export('Font', Font);

            _export('CellXfs', CellXfs);

            _export('Alignment', Alignment);

            _export('CellStyleXfs', CellStyleXfs);

            _export('CellStyles', CellStyles);

            _export('NumFmt', NumFmt);

            _export('Border', Border);

            _export('Borders', Borders);

            _export('Cell', Cell);

            _export('Cells', Cells);

            _export('Column', Column);

            _export('Row', Row);

            _export('Rows', Rows);

            _export('Workbook', Workbook);

            _export('BuiltInProperties', BuiltInProperties);

            _export('Worksheet', Worksheet);

            _export('HyperLink', HyperLink);

            _export('Grouping', Grouping);

            _export('FreezePane', FreezePane);

            _export('MergeCell', MergeCell);

            _export('MergeCells', MergeCells);

            _export('Worksheets', Worksheets);

            _export('CsvHelper', CsvHelper);

            _export('ValueFormatter', ValueFormatter);

            _export('BlobHelper', BlobHelper);
        }
    };
});

//# sourceMappingURL=ej2-excel-export.es2015-compiled.js.map