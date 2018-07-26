import { CompressedStreamWriter } from '@syncfusion/ej2-compression';
import { Encoding, StreamWriter } from '@syncfusion/ej2-file-utils';

/**
 * @private
 * @hidden
 */
function defaultToString(item) {
    // if (item === null) {
    //     return 'COLLECTION_NULL';
    // } else if (typeof item === 'undefined') {
    //     return 'COLLECTION_UNDEFINED';
    // } else if (Object.prototype.toString.call(item) === '[object String]') {
    if (Object.prototype.toString.call(item) === '[object String]') {
        return '$s' + item;
    }
    else {
        return '$o' + item.toString();
    }
}

/**
 * Dictionary.ts class for EJ2-PDF
 * @private
 * @hidden
 */
/**
 * @private
 * @hidden
 */
class Dictionary {
    /**
     * @private
     * @hidden
     */
    constructor(toStringFunction) {
        this.table = {};
        this.nElements = 0;
        this.toStr = toStringFunction || defaultToString;
    }
    /**
     * @private
     * @hidden
     */
    getValue(key) {
        const pair = this.table['$' + this.toStr(key)];
        if (typeof pair === 'undefined') {
            return undefined;
        }
        return pair.value;
    }
    /**
     * @private
     * @hidden
     */
    setValue(key, value) {
        // if (typeof key === 'undefined' || typeof value === 'undefined') {
        //     return undefined;
        // }
        let ret;
        const k = '$' + this.toStr(key);
        const previousElement = this.table[k];
        // if (typeof previousElement === 'undefined') {
        this.nElements++;
        ret = undefined;
        // }
        this.table[k] = {
            key: key,
            value: value
        };
        return ret;
    }
    /**
     * @private
     * @hidden
     */
    remove(key) {
        const k = '$' + this.toStr(key);
        const previousElement = this.table[k];
        // if (typeof previousElement !== 'undefined') {
        delete this.table[k];
        this.nElements--;
        return previousElement.value;
        // }
        // return undefined;
    }
    /**
     * @private
     * @hidden
     */
    keys() {
        const keysArray = [];
        let namesOfKeys = Object.keys(this.table);
        for (let index1 = 0; index1 < namesOfKeys.length; index1++) {
            // if (Object.prototype.hasOwnProperty.call(this.table, namesOfKeys[index1])) {
            const pair1 = this.table[namesOfKeys[index1]];
            keysArray.push(pair1.key);
            // }
        }
        return keysArray;
    }
    /**
     * @private
     * @hidden
     */
    values() {
        const valuesArray = [];
        let namesOfValues = Object.keys(this.table);
        for (let index2 = 0; index2 < namesOfValues.length; index2++) {
            // if (Object.prototype.hasOwnProperty.call(this.table, namesOfValues[index2])) {
            const pair2 = this.table[namesOfValues[index2]];
            valuesArray.push(pair2.value);
            // }
        }
        return valuesArray;
    }
    /**
     * @private
     * @hidden
     */
    containsKey(key) {
        let retutnValue = true;
        if (typeof this.getValue(key) === 'undefined') {
            retutnValue = true;
        }
        else {
            retutnValue = false;
        }
        return !retutnValue;
    }
    /**
     * @private
     * @hidden
     */
    clear() {
        this.table = {};
        this.nElements = 0;
    }
    /**
     * @private
     * @hidden
     */
    size() {
        return this.nElements;
    }
} // End of dictionary

/**
 * `PdfName` class is used to perform name (element names) related primitive operations.
 * @private
 */
class PdfName {
    constructor(value) {
        /**
         * `Start symbol` of the name object.
         * @default /
         * @private
         */
        this.stringStartMark = '/';
        /**
         * `Value` of the element.
         * @private
         */
        this.internalValue = '';
        /**
         * Indicates if the object is currently in `saving state or not`.
         * @default false
         * @private
         */
        this.isSaving6 = false;
        /**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */
        this.position6 = -1;
        this.internalValue = this.normalizeValue(value);
    }
    //property
    /**
     * Gets or sets the `Status` of the specified object.
     * @private
     */
    get status() {
        return this.status6;
    }
    set status(value) {
        this.status6 = value;
    }
    /**
     * Gets or sets a value indicating whether this document `is saving` or not.
     * @private
     */
    get isSaving() {
        return this.isSaving6;
    }
    set isSaving(value) {
        this.isSaving6 = value;
    }
    /**
     * Gets or sets the `index` value of the specified object.
     * @private
     */
    get objectCollectionIndex() {
        return this.index6;
    }
    set objectCollectionIndex(value) {
        this.index6 = value;
    }
    /**
     * Gets or sets the `position` of the object.
     * @private
     */
    get position() {
        return this.position6;
    }
    set position(value) {
        this.position6 = value;
    }
    /**
     * Returns `cloned object`.
     * @private
     */
    get clonedObject() {
        return null;
    }
    /**
     * Gets or sets the `value` of the object.
     * @private
     */
    get value() {
        return this.internalValue;
    }
    set value(value) {
        // if (value !== this.value) {
        let val = value;
        if (value !== null && value.length > 0) {
            // val = (value.substring(0, 1) === this.stringStartMark) ? value.substring(1) : value;
            val = value;
            this.internalValue = this.normalizeValue(val);
        }
        else {
            this.internalValue = val;
        }
        // }
    }
    //public methods
    /**
     * `Saves` the name using the specified writer.
     * @private
     */
    save(writer) {
        // if (writer === null) {
        //     throw new Error('ArgumentNullException : writer');
        // }
        writer.write(this.toString());
    }
    /**
     * Gets `string` representation of the primitive.
     * @private
     */
    toString() {
        return (this.stringStartMark + this.escapeString(this.value));
    }
    /**
     * Creates a `copy of PdfName`.
     * @private
     */
    clone(crossTable) {
        let newName = new PdfName();
        newName.value = this.internalValue;
        return newName;
    }
    /**
     * Replace some characters with its `escape sequences`.
     * @private
     */
    escapeString(stringValue) {
        // if (str === null) {
        //     throw new Error('ArgumentNullException : str');
        // }
        // if (str === '') {
        //     return str;
        // }
        let result = '';
        for (let i = 0, len = stringValue.length; i < len; i++) {
            let ch = stringValue[i];
            let index = PdfName.delimiters.indexOf(ch);
            // switch (ch) {
            //     case '\r' :
            //         result = result + '\\r';
            //         break;
            //     case '\n' :
            //         result = result + '\n';
            //         break;
            //     case '(' :
            //     case ')' :
            //     case '\\' :
            //         //result.Append( '\\' ).Append( ch );
            //         result = result + ch;
            //         break;
            //     default :
            //         result = result + ch;
            //         break;
            // }
            result = result + ch;
        }
        return result;
    }
    //methiods
    /**
     * Replace a symbol with its code with the precedence of the `sharp sign`.
     * @private
     */
    normalizeValue(value, c) {
        // if (typeof c === undefined) {
        //     let str : string = value;
        //     for (let i : number = 0; i < PdfName.replacements.length; i++) {
        //         str = this.normalizeValue(str, c);
        //     }
        //     return str;
        // } else {
        return value;
        // }
    }
}
/**
 * PDF `special characters`.
 * @private
 */
PdfName.delimiters = '()<>[]{}/%}';
/**
 * The symbols that are not allowed in PDF names and `should be replaced`.
 * @private
 */
PdfName.replacements = [' ', '\t', '\n', '\r'];

/**
 * PdfOperators.ts class for EJ2-PDF
 * Class of string PDF common operators.
 * @private
 */
class Operators {
    /**
     * Create an instance of `PdfOperator` class.
     * @private
     */
    constructor() {
        /**
         * Specifies the value of `test`.
         * @private
         */
        this.forTest = 'test';
        this.forTest = Operators.obj;
    }
}
/**
 * Specifies the value of `obj`.
 * @private
 */
Operators.obj = 'obj';
/**
 * Specifies the value of `endObj`.
 * @private
 */
Operators.endObj = 'endobj';
/**
 * Specifies the value of `R`.
 * @private
 */
Operators.r = 'R';
/**
 * Specifies the value of ` `.
 * @private
 */
Operators.whiteSpace = ' ';
/**
 * Specifies the value of `/`.
 * @private
 */
Operators.slash = '/';
/**
 * Specifies the value of `\r\n`.
 * @private
 */
Operators.newLine = '\r\n';
/**
 * Specifies the value of `stream`.
 * @private
 */
Operators.stream = 'stream';
/**
 * Specifies the value of `endStream`.
 * @private
 */
Operators.endStream = 'endstream';
/**
 * Specifies the value of `xref`.
 * @private
 */
Operators.xref = 'xref';
/**
 * Specifies the value of `f`.
 * @private
 */
Operators.f = 'f';
/**
 * Specifies the value of `n`.
 * @private
 */
Operators.n = 'n';
/**
 * Specifies the value of `trailer`.
 * @private
 */
Operators.trailer = 'trailer';
/**
 * Specifies the value of `startxref`.
 * @private
 */
Operators.startxref = 'startxref';
/**
 * Specifies the value of `eof`.
 * @private
 */
Operators.eof = '%%EOF';
/**
 * Specifies the value of `header`.
 * @private
 */
Operators.header = '%PDF-1.5';
/**
 * Specifies the value of `beginText`.
 * @private
 */
Operators.beginText = 'BT';
/**
 * Specifies the value of `endText`.
 * @private
 */
Operators.endText = 'ET';
/**
 * Specifies the value of `m`.
 * @private
 */
Operators.beginPath = 'm';
/**
 * Specifies the value of `l`.
 * @private
 */
Operators.appendLineSegment = 'l';
/**
 * Specifies the value of `S`.
 * @private
 */
Operators.stroke = 'S';
/**
 * Specifies the value of `f`.
 * @private
 */
Operators.fill = 'f';
/**
 * Specifies the value of `f*`.
 * @private
 */
Operators.fillEvenOdd = 'f*';
/**
 * Specifies the value of `B`.
 * @private
 */
Operators.fillStroke = 'B';
/**
 * Specifies the value of `B*`.
 * @private
 */
Operators.fillStrokeEvenOdd = 'B*';
/**
 * Specifies the value of `c`.
 * @private
 */
Operators.appendbeziercurve = 'c';
/**
 * Specifies the value of `re`.
 * @private
 */
Operators.appendRectangle = 're';
/**
 * Specifies the value of `q`.
 * @private
 */
Operators.saveState = 'q';
/**
 * Specifies the value of `Q`.
 * @private
 */
Operators.restoreState = 'Q';
/**
 * Specifies the value of `Do`.
 * @private
 */
Operators.paintXObject = 'Do';
/**
 * Specifies the value of `cm`.
 * @private
 */
Operators.modifyCtm = 'cm';
/**
 * Specifies the value of `Tm`.
 * @private
 */
Operators.modifyTM = 'Tm';
/**
 * Specifies the value of `w`.
 * @private
 */
Operators.setLineWidth = 'w';
/**
 * Specifies the value of `J`.
 * @private
 */
Operators.setLineCapStyle = 'J';
/**
 * Specifies the value of `j`.
 * @private
 */
Operators.setLineJoinStyle = 'j';
/**
 * Specifies the value of `d`.
 * @private
 */
Operators.setDashPattern = 'd';
/**
 * Specifies the value of `i`.
 * @private
 */
Operators.setFlatnessTolerance = 'i';
/**
 * Specifies the value of `h`.
 * @private
 */
Operators.closePath = 'h';
/**
 * Specifies the value of `s`.
 * @private
 */
Operators.closeStrokePath = 's';
/**
 * Specifies the value of `b`.
 * @private
 */
Operators.closeFillStrokePath = 'b';
/**
 * Specifies the value of `setCharacterSpace`.
 * @private
 */
Operators.setCharacterSpace = 'Tc';
/**
 * Specifies the value of `setWordSpace`.
 * @private
 */
Operators.setWordSpace = 'Tw';
/**
 * Specifies the value of `setHorizontalScaling`.
 * @private
 */
Operators.setHorizontalScaling = 'Tz';
/**
 * Specifies the value of `setTextLeading`.
 * @private
 */
Operators.setTextLeading = 'TL';
/**
 * Specifies the value of `setFont`.
 * @private
 */
Operators.setFont = 'Tf';
/**
 * Specifies the value of `setRenderingMode`.
 * @private
 */
Operators.setRenderingMode = 'Tr';
/**
 * Specifies the value of `setTextRise`.
 * @private
 */
Operators.setTextRise = 'Ts';
/**
 * Specifies the value of `setTextScaling`.
 * @private
 */
Operators.setTextScaling = 'Tz';
/**
 * Specifies the value of `setCoords`.
 * @private
 */
Operators.setCoords = 'Td';
/**
 * Specifies the value of `goToNextLine`.
 * @private
 */
Operators.goToNextLine = 'T*';
/**
 * Specifies the value of `setText`.
 * @private
 */
Operators.setText = 'Tj';
/**
 * Specifies the value of `setTextWithFormatting`.
 * @private
 */
Operators.setTextWithFormatting = 'TJ';
/**
 * Specifies the value of `setTextOnNewLine`.
 * @private
 */
Operators.setTextOnNewLine = '\'';
/**
 * Specifies the value of `selectcolorspaceforstroking`.
 * @private
 */
Operators.selectcolorspaceforstroking = 'CS';
/**
 * Specifies the value of `selectcolorspacefornonstroking`.
 * @private
 */
Operators.selectcolorspacefornonstroking = 'cs';
/**
 * Specifies the value of `setrbgcolorforstroking`.
 * @private
 */
Operators.setrbgcolorforstroking = 'RG';
/**
 * Specifies the value of `setrbgcolorfornonstroking`.
 * @private
 */
Operators.setrbgcolorfornonstroking = 'rg';
/**
 * Specifies the value of `K`.
 * @private
 */
Operators.setcmykcolorforstroking = 'K';
/**
 * Specifies the value of `k`.
 * @private
 */
Operators.setcmykcolorfornonstroking = 'k';
/**
 * Specifies the value of `G`.
 * @private
 */
Operators.setgraycolorforstroking = 'G';
/**
 * Specifies the value of `g`.
 * @private
 */
Operators.setgraycolorfornonstroking = 'g';
/**
 * Specifies the value of `W`.
 * @private
 */
Operators.clipPath = 'W';
/**
 * Specifies the value of `clipPathEvenOdd`.
 * @private
 */
Operators.clipPathEvenOdd = 'W*';
/**
 * Specifies the value of `n`.
 * @private
 */
Operators.endPath = 'n';
/**
 * Specifies the value of `setGraphicsState`.
 * @private
 */
Operators.setGraphicsState = 'gs';
/**
 * Specifies the value of `%`.
 * @private
 */
Operators.comment = '%';
/**
 * Specifies the value of `*`.
 * @private
 */
Operators.evenOdd = '*';
/**
 * Specifies the value of `M`.
 * @private
 */
Operators.setMiterLimit = 'M';

/**
 * dictionaryProperties.ts class for EJ2-PDF
 * PDF dictionary properties.
 * @private
 */
class DictionaryProperties {
    /**
     * Initialize an instance for `PdfDictionaryProperties` class.
     * @private
     */
    constructor() {
        /**
         * Specifies the value of `Pages`.
         * @private
         */
        this.pages = 'Pages';
        /**
         * Specifies the value of `Kids`.
         * @private
         */
        this.kids = 'Kids';
        /**
         * Specifies the value of `Count`.
         * @private
         */
        this.count = 'Count';
        /**
         * Specifies the value of `Resources`.
         * @private
         */
        this.resources = 'Resources';
        /**
         * Specifies the value of `Type`.
         * @private
         */
        this.type = 'Type';
        /**
         * Specifies the value of `Size`.
         * @private
         */
        this.size = 'Size';
        /**
         * Specifies the value of `MediaBox`.
         * @private
         */
        this.mediaBox = 'MediaBox';
        /**
         * Specifies the value of `Parent`.
         * @private
         */
        this.parent = 'Parent';
        /**
         * Specifies the value of `Root`.
         * @private
         */
        this.root = 'Root';
        /**
         * Specifies the value of `DecodeParms`.
         * @private
         */
        this.decodeParms = 'DecodeParms';
        /**
         * Specifies the value of `Filter`.
         * @private
         */
        this.filter = 'Filter';
        /**
         * Specifies the value of `Font`.
         * @private
         */
        this.font = 'Font';
        /**
         * Specifies the value of `Type1`.
         * @private
         */
        this.type1 = 'Type1';
        /**
         * Specifies the value of `BaseFont`.
         * @private
         */
        this.baseFont = 'BaseFont';
        /**
         * Specifies the value of `Encoding`.
         * @private
         */
        this.encoding = 'Encoding';
        /**
         * Specifies the value of `Subtype`.
         * @private
         */
        this.subtype = 'Subtype';
        /**
         * Specifies the value of `Contents`.
         * @private
         */
        this.contents = 'Contents';
        /**
         * Specifies the value of `ProcSet`.
         * @private
         */
        this.procset = 'ProcSet';
        /**
         * Specifies the value of `ColorSpace`.
         * @private
         */
        this.colorSpace = 'ColorSpace';
        /**
         * Specifies the value of `ExtGState`.
         * @private
         */
        this.extGState = 'ExtGState';
        /**
         * Specifies the value of `Pattern`.
         * @private
         */
        this.pattern = 'Pattern';
        /**
         * Specifies the value of `XObject`.
         * @private
         */
        this.xObject = 'XObject';
        /**
         * Specifies the value of `Length`.
         * @private
         */
        this.length = 'Length';
        /**
         * Specifies the value of `Width`.
         * @private
         */
        this.width = 'Width';
        /**
         * Specifies the value of `Height`.
         * @private
         */
        this.height = 'Height';
        /**
         * Specifies the value of `BitsPerComponent`.
         * @private
         */
        this.bitsPerComponent = 'BitsPerComponent';
        /**
         * Specifies the value of `Image`.
         * @private
         */
        this.image = 'Image';
        /**
         * Specifies the value of `dctdecode`.
         * @private
         */
        this.dctdecode = 'DCTDecode';
        /**
         * Specifies the value of `Columns`.
         * @private
         */
        this.columns = 'Columns';
        /**
         * Specifies the value of `BlackIs1`.
         * @private
         */
        this.blackIs1 = 'BlackIs1';
        /**
         * Specifies the value of `K`.
         * @private
         */
        this.k = 'K';
        /**
         * Specifies the value of `S`.
         * @private
         */
        this.s = 'S';
        /**
         * Specifies the value of `Predictor`.
         * @private
         */
        this.predictor = 'Predictor';
        /**
         * Specifies the value of `DeviceRGB`.
         * @private
         */
        this.deviceRgb = 'DeviceRGB';
        /**
         * Specifies the value of `Next`.
         * @private
         */
        this.next = 'Next';
        /**
         * Specifies the value of `Action`.
         * @private
         */
        this.action = 'Action';
        /**
         * Specifies the value of `Link`.
         * @private
         */
        this.link = 'Link';
        /**
         *
         * Specifies the value of `A`.
         * @private
         */
        this.a = 'A';
        /**
         * Specifies the value of `Annot`.
         * @private
         */
        this.annot = 'Annot';
        /**
         * Specifies the value of `P`.
         * @private
         */
        this.p = 'P';
        /**
         * Specifies the value of `C`.
         * @private
         */
        this.c = 'C';
        /**
         * Specifies the value of `Rect`.
         * @private
         */
        this.rect = 'Rect';
        /**
         * Specifies the value of `URI`.
         * @private
         */
        this.uri = 'URI';
        /**
         * Specifies the value of `Annots`.
         * @private
         */
        this.annots = 'Annots';
        /**
         * Specifies the value of `ca`.
         * @private
         */
        this.ca = 'ca';
        /**
         * Specifies the value of `CA`.
         * @private
         */
        this.CA = 'CA';
        /**
         * Specifies the value of `XYZ`.
         * @private
         */
        this.xyz = 'XYZ';
        /**
         * Specifies the value of `Fit`.
         * @private
         */
        this.fit = 'Fit';
        /**
         * Specifies the value of `Dest`.
         * @private
         */
        this.dest = 'Dest';
        /**
         * Specifies the value of `BM`.
         * @private
         */
        this.BM = 'BM';
        /**
         * Specifies the value of `flatedecode`.
         * @private
         */
        this.flatedecode = 'FlateDecode';
        /**
         * Specifies the value of `Rotate`.
         * @private
         */
        this.rotate = 'Rotate';
        /**
         * Specifies the value of 'bBox'.
         * @private
         */
        this.bBox = 'BBox';
        /**
         * Specifies the value of 'form'.
         * @private
         */
        this.form = 'Form';
        //
    }
}

/**
 * `PdfDictionary` class is used to perform primitive operations.
 * @private
 */
class PdfDictionary {
    constructor(dictionary) {
        /**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */
        this.position7 = -1;
        /**
         * The `IPdfSavable` with the specified key.
         * @private
         */
        this.primitiveItems = new Dictionary();
        /**
         * `Start marker` for dictionary.
         * @private
         */
        this.prefix = '<<';
        /**
         * `End marker` for dictionary.
         * @private
         */
        this.suffix = '>>';
        /**
         * @hidden
         * @private
         */
        this.resources = [];
        /**
         * Internal variable to hold `cloned object`.
         * @default null
         * @private
         */
        this.object = null;
        /**
         * Flag for PDF file formar 1.5 is dictionary `archiving` needed.
         * @default true
         * @private
         */
        this.archive = true;
        if (typeof dictionary === 'undefined') {
            this.primitiveItems = new Dictionary();
            this.encrypt = true;
            this.dictionaryProperties = new DictionaryProperties();
        }
        else {
            this.primitiveItems = new Dictionary();
            let keys = dictionary.items.keys();
            let values = dictionary.items.values();
            for (let index = 0; index < dictionary.items.size(); index++) {
                this.primitiveItems.setValue(keys[index], values[index]);
            }
            this.status = dictionary.status;
            this.freezeChanges(this);
            this.encrypt = true;
            this.dictionaryProperties = new DictionaryProperties();
        }
    }
    //Properties
    /**
     * Gets or sets the `IPdfSavable` with the specified key.
     * @private
     */
    get items() {
        return this.primitiveItems;
    }
    /**
     * Gets or sets the `Status` of the specified object.
     * @private
     */
    get status() {
        return this.status7;
    }
    set status(value) {
        this.status7 = value;
    }
    /**
     * Gets or sets a value indicating whether this document `is saving` or not.
     * @private
     */
    get isSaving() {
        return this.isSaving7;
    }
    set isSaving(value) {
        this.isSaving7 = value;
    }
    /**
     * Gets or sets the `index` value of the specified object.
     * @private
     */
    get objectCollectionIndex() {
        return this.index7;
    }
    set objectCollectionIndex(value) {
        this.index7 = value;
    }
    /**
     * Returns `cloned object`.
     * @private
     */
    get clonedObject() {
        return this.object;
    }
    /**
     * Gets or sets the `position` of the object.
     * @private
     */
    get position() {
        return this.position7;
    }
    set position(value) {
        this.position7 = value;
    }
    /**
     * Gets the `count`.
     * @private
     */
    get Count() {
        return this.primitiveItems.size();
    }
    /**
     * Collection of `items` in the object.
     * @private
     */
    get Dictionary() {
        return this;
    }
    /**
     * Get flag if need to `archive` dictionary.
     * @private
     */
    getArchive() {
        return this.archive;
    }
    /**
     * Set flag if need to `archive` dictionary.
     * @private
     */
    setArchive(value) {
        this.archive = value;
    }
    /**
     * Sets flag if `encryption` is needed.
     * @private
     */
    setEncrypt(value) {
        this.encrypt = value;
        this.modify();
    }
    /**
     * Gets flag if `encryption` is needed.
     * @private
     */
    getEncrypt() {
        return this.encrypt;
    }
    /**
     * `Freezes` the changes.
     * @private
     */
    freezeChanges(freezer) {
        this.bChanged = false;
    }
    /**
     * Creates a `copy of PdfDictionary`.
     * @private
     */
    clone(crossTable) {
        //Need to add more codings
        let newDict = new PdfDictionary();
        return newDict;
    }
    /**
     * `Mark` this instance modified.
     * @private
     */
    modify() {
        this.bChanged = true;
    }
    /**
     * `Removes` the specified key.
     * @private
     */
    remove(key) {
        if (typeof key !== 'string') {
            this.primitiveItems.remove(key.value);
            this.modify();
        }
        else {
            this.remove(new PdfName(key));
        }
    }
    /**
     * `Determines` whether the dictionary contains the key.
     * @private
     */
    containsKey(key) {
        let returnValue = false;
        returnValue = this.primitiveItems.containsKey(key.toString());
        return returnValue;
    }
    /**
     * Raises event `BeginSave`.
     * @private
     */
    onBeginSave() {
        this.beginSave.sender.beginSave();
    }
    /**
     * Raises event 'BeginSave'.
     * @private
     */
    onTemplateBeginSave() {
        this.pageBeginDrawTemplate.sender.pageBeginSave();
    }
    /**
     * Raises event `BeginSave`.
     * @private
     */
    onBeginAnnotationSave() {
        this.annotationBeginSave.sender.beginSave();
    }
    /**
     * Raises event `BeginSave`.
     * @private
     */
    onSectionBeginSave(writer) {
        let saveEvent = this.sectionBeginSave;
        saveEvent.sender.beginSave(saveEvent.state, writer);
    }
    save(writer, bRaiseEvent) {
        if (typeof bRaiseEvent === 'undefined') {
            this.save(writer, true);
        }
        else {
            writer.write(this.prefix);
            if (typeof this.beginSave !== 'undefined') {
                this.onBeginSave();
            }
            if (typeof this.annotationBeginSave !== 'undefined') {
                this.onBeginAnnotationSave();
            }
            if (typeof this.sectionBeginSave !== 'undefined') {
                this.onSectionBeginSave(writer);
            }
            if (typeof this.pageBeginDrawTemplate !== 'undefined') {
                this.onTemplateBeginSave();
            }
            // }
            if (this.Count > 0) {
                this.saveItems(writer);
            }
            writer.write(this.suffix);
            writer.write(Operators.newLine);
        }
    }
    /**
     * `Save dictionary items`.
     * @private
     */
    saveItems(writer) {
        writer.write(Operators.newLine);
        let keys = this.primitiveItems.keys();
        let values = this.primitiveItems.values();
        for (let index = 0; index < keys.length; index++) {
            let key = keys[index];
            let name = new PdfName(key);
            name.save(writer);
            writer.write(Operators.whiteSpace);
            let resources = values[index];
            resources.save(writer);
            writer.write(Operators.newLine);
        }
    }
}
class SaveSectionCollectionEventHandler {
    /**
     * New instance for `save section collection event handler` class.
     * @private
     */
    constructor(sender) {
        this.sender = sender;
    }
}
class SaveAnnotationEventHandler {
    /**
     * New instance for `save annotation event handler` class.
     * @private
     */
    constructor(sender) {
        this.sender = sender;
    }
}
class SaveSectionEventHandler {
    // constructors
    /**
     * New instance for `save section event handler` class.
     * @private
     */
    constructor(sender, state) {
        this.sender = sender;
        this.state = state;
    }
}
/**
 * SaveTemplateEventHandler class used to store information about template elements.
 * @private
 * @hidden
 */
class SaveTemplateEventHandler {
    /**
     * New instance for save section collection event handler class.
     * @public
     */
    constructor(sender) {
        this.sender = sender;
    }
}

/**
 * `PdfNumber` class is used to perform number related primitive operations.
 * @private
 */
class PdfNumber {
    /**
     * Initializes a new instance of the `PdfNumber` class.
     * @private
     */
    constructor(value) {
        /**
         * Sotres the `position`.
         * @default -1
         * @private
         */
        this.position5 = -1;
        this.value = value;
    }
    /**
     * Gets or sets the `integer` value.
     * @private
     */
    get intValue() {
        return this.value;
    }
    set intValue(value) {
        this.value = value;
    }
    /**
     * Gets or sets a value indicating whether this instance `is integer`.
     * @private
     */
    get isInteger() {
        return this.integer;
    }
    set isInteger(value) {
        this.integer = value;
    }
    /**
     * Gets or sets the `Status` of the specified object.
     * @private
     */
    get status() {
        return this.status5;
    }
    set status(value) {
        this.status5 = value;
    }
    /**
     * Gets or sets a value indicating whether this document `is saving` or not.
     * @private
     */
    get isSaving() {
        return this.isSaving5;
    }
    set isSaving(value) {
        this.isSaving5 = value;
    }
    /**
     * Gets or sets the `index` value of the specified object.
     * @private
     */
    get objectCollectionIndex() {
        return this.index5;
    }
    set objectCollectionIndex(value) {
        this.index5 = value;
    }
    /**
     * Gets or sets the `position` of the object.
     * @private
     */
    get position() {
        return this.position5;
    }
    set position(value) {
        this.position5 = value;
    }
    /**
     * Returns `cloned object`.
     * @private
     */
    get clonedObject() {
        let rValue = null;
        return rValue;
    }
    /**
     * `Saves the object`.
     * @private
     */
    save(writer) {
        writer.write(this.intValue.toString()); //tostring(CultureInfo.InletiantCulture)
    }
    /**
     * Creates a `copy of PdfNumber`.
     * @private
     */
    clone(crossTable) {
        let newNumber = new PdfNumber(this.value);
        return newNumber;
    }
    /**
     * Converts a `float value to a string` using Adobe PDF rules.
     * @private
     */
    static floatToString(number) {
        // let tempString1 : string = number.toString();
        // let tempString2 : string = tempString1.indexOf('.') != -1 ? tempString1.substring(0, tempString1.indexOf('.')) : tempString1;
        let returnString = number.toFixed(2);
        if (returnString === '0.00') {
            returnString = '.00';
        }
        // let prefixLength : number = (22 - tempString2.length) >= 0 ? (22 - tempString2.length) : 0;
        // for (let index : number = 0; index < prefixLength; index++) {
        //     returnString += '0';
        // }
        // returnString += tempString2 + '.00';
        // returnString += (tempString3.length > 6) ? tempString3.substring(0,6) : tempString3;
        // let suffixLength : number = (6 - tempString3.length) >= 0 ? (6 - tempString3.length) : 0;
        // for (let index : number = 0; index < suffixLength; index++) {
        //     returnString += '0';
        // }
        return returnString;
    }
    /**
     * Determines the `minimum of the three values`.
     * @private
     */
    static min(x, y, z) {
        let r = Math.min(x, y);
        return Math.min(z, r);
    }
}

/**
 * `PdfArray` class is used to perform array related primitive operations.
 * @private
 */
class PdfArray {
    constructor(array) {
        //Fields
        /**
         * `startMark` - '['
         * @private
         */
        this.startMark = '[';
        /**
         * `endMark` - ']'.
         * @private
         */
        this.endMark = ']';
        /**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */
        this.position9 = -1;
        /**
         * Internal variable to hold `cloned object`.
         * @default null
         * @private
         */
        this.clonedObject9 = null;
        if (typeof array === 'undefined') {
            this.internalElements = [];
        }
        else {
            if (typeof array !== 'undefined' && !(array instanceof PdfArray)) {
                let tempNumberArray = array;
                for (let index = 0; index < tempNumberArray.length; index++) {
                    let pdfNumber = new PdfNumber(tempNumberArray[index]);
                    this.add(pdfNumber);
                }
                // } else if (typeof array !== 'undefined' && (array instanceof PdfArray)) {
            }
            else {
                let tempArray = array;
                // if (tempArray.Elements.length > 0) {
                this.internalElements = [];
                for (let index = 0; index < tempArray.elements.length; index++) {
                    this.internalElements.push(tempArray.elements[index]);
                }
                // }
            }
        }
    }
    //property
    /**
     * Gets the `IPdfSavable` at the specified index.
     * @private
     */
    items(index) {
        // if (index < 0 || index >= this.Count) {
        //     throw new Error('ArgumentOutOfRangeException : index, The index can"t be less then zero or greater then Count.');
        // }
        return this.internalElements[index];
    }
    /**
     * Gets the `count`.
     * @private
     */
    get count() {
        return this.internalElements.length;
    }
    /**
     * Gets or sets the `Status` of the specified object.
     * @private
     */
    get status() {
        return this.status9;
    }
    set status(value) {
        this.status9 = value;
    }
    /**
     * Gets or sets a value indicating whether this document `is saving` or not.
     * @private
     */
    get isSaving() {
        return this.isSaving9;
    }
    set isSaving(value) {
        this.isSaving9 = value;
    }
    /**
     * Returns `cloned object`.
     * @private
     */
    get clonedObject() {
        return this.clonedObject9;
    }
    /**
     * Gets or sets the `position` of the object.
     * @private
     */
    get position() {
        return this.position9;
    }
    set position(value) {
        this.position9 = value;
    }
    /**
     * Gets or sets the `index` value of the specified object.
     * @private
     */
    get objectCollectionIndex() {
        return this.index9;
    }
    set objectCollectionIndex(value) {
        this.index9 = value;
    }
    /**
     * Returns `PdfCrossTable` associated with the object.
     * @private
     */
    get CrossTable() {
        return this.pdfCrossTable;
    }
    /**
     * Gets the `elements` of the Pdf Array.
     * @private
     */
    get elements() {
        return this.internalElements;
    }
    /**
     * `Adds` the specified element to the PDF array.
     * @private
     */
    add(element) {
        // if (element === null) {
        //     throw new Error('ArgumentNullException : obj');
        // }
        if (typeof this.internalElements === 'undefined') {
            this.internalElements = [];
        }
        this.internalElements.push(element);
        this.markedChange();
    }
    /**
     * `Marks` the object changed.
     * @private
     */
    markedChange() {
        this.bChanged = true;
    }
    /**
     * `Determines` whether the specified element is within the array.
     * @private
     */
    contains(element) {
        let returnValue = false;
        for (let index = 0; index < this.internalElements.length; index++) {
            let tempElement = this.internalElements[index];
            let inputElement = element;
            if (tempElement != null && typeof tempElement !== 'undefined' && inputElement != null && typeof inputElement !== 'undefined') {
                if (tempElement.value === inputElement.value) {
                    return true;
                }
            }
            // if (this.internalElements[index] === element) {
            //     returnValue = true;
            // }
        }
        return returnValue;
    }
    /**
     * Returns the `primitive object` of input index.
     * @private
     */
    getItems(index) {
        // if (index < 0 || index >= this.Count) {
        //     throw new Error('ArgumentOutOfRangeException : index , The index can"t be less then zero or greater then Count.');
        // }
        return this.internalElements[index];
    }
    /**
     * `Saves` the object using the specified writer.
     * @private
     */
    save(writer) {
        // if (writer === null) {
        //     throw new Error('ArgumentNullException : writer');
        // }
        writer.write(this.startMark);
        for (let i = 0, len = this.count; i < len; i++) {
            this.getItems(i).save(writer);
            if (i + 1 !== len) {
                writer.write(Operators.whiteSpace);
            }
        }
        writer.write(this.endMark);
    }
    /**
     * Creates a `copy of PdfArray`.
     * @private
     */
    clone(crossTable) {
        // if (this.clonedObject9 !== null && this.clonedObject9.CrossTable === crossTable) {
        //     return this.clonedObject9;
        // } else {
        this.clonedObject9 = null;
        // Else clone the object.
        let newArray = new PdfArray();
        for (let index = 0; index < this.internalElements.length; index++) {
            let obj = this.internalElements[index];
            newArray.add(obj.clone(crossTable));
        }
        newArray.pdfCrossTable = crossTable;
        this.clonedObject9 = newArray;
        return newArray;
    }
    /**
     * Creates filled PDF array `from the rectangle`.
     * @private
     */
    static fromRectangle(bounds) {
        let values = [bounds.x, bounds.y, bounds.width, bounds.height];
        let array = new PdfArray(values);
        return array;
    }
    // /**
    //  * Creates the rectangle from filled PDF array.
    //  * @private
    //  */
    // public ToRectangle() : RectangleF {
    //     if (this.Count < 4) {
    //         throw Error('InvalidOperationException-Can not convert to rectangle.');
    //     }
    //     let x1 : number;
    //     let x2 : number;
    //     let y1 : number;
    //     let y2 : number;
    //     let num : PdfNumber = this.getItems(0) as PdfNumber;
    //     x1 = num.IntValue;
    //     num = this.getItems(1) as PdfNumber;
    //     y1 = num.IntValue;
    //     num = this.getItems(2) as PdfNumber;
    //     x2 = num.IntValue;
    //     num = this.getItems(3) as PdfNumber;
    //     y2 = num.IntValue;
    //     let x : number = Math.min(x1, x2);
    //     let y : number = Math.min(y1, y2);
    //     let width : number = Math.abs(x1 - x2);
    //     let height : number = Math.abs(y1 - y2);
    //     let rect : RectangleF = new RectangleF(new PointF(x, y), new SizeF(width, height));
    //     return rect;
    // }
    /**
     * `Inserts` the element into the array.
     * @private
     */
    insert(index, element) {
        if (index < this.internalElements.length && index > 0) {
            let tempElements = [];
            for (let i = 0; i < index; i++) {
                tempElements.push(this.internalElements[i]);
            }
            tempElements.push(element);
            for (let i = index; i < this.internalElements.length; i++) {
                tempElements.push(this.internalElements[i]);
            }
            this.internalElements = tempElements;
        }
        else {
            this.internalElements.push(element);
        }
        this.markChanged();
    }
    /**
     * `Checks whether array contains the element`.
     * @private
     */
    indexOf(element) {
        return this.internalElements.indexOf(element);
    }
    /**
     * `Removes` element from the array.
     * @private
     */
    remove(element) {
        // if (element === null) {
        //     throw new Error('ArgumentNullException : element');
        // }
        let index = this.internalElements.indexOf(element);
        // if (index >= 0 && index < this.internalElements.length) {
        this.internalElements[index] = null;
        // }
        this.markChanged();
    }
    /**
     * `Remove` the element from the array by its index.
     * @private
     */
    removeAt(index) {
        // this.internalElements.RemoveAt(index);
        if (this.internalElements.length > index) {
            let tempArray = [];
            for (let i = 0; i < index; i++) {
                tempArray.push(this.internalElements[i]);
            }
            for (let i = index + 1; i < this.internalElements.length; i++) {
                tempArray.push(this.internalElements[i]);
            }
            this.internalElements = tempArray;
        }
        this.markChanged();
    }
    /**
     * `Clear` the array.
     * @private
     */
    clear() {
        this.internalElements = [];
        this.markChanged();
    }
    /**
     * `Marks` the object changed.
     * @private
     */
    markChanged() {
        this.bChanged = true;
    }
}

/**
 * `PdfStream` class is used to perform stream related primitive operations.
 * @private
 */
class PdfStream extends PdfDictionary {
    constructor(dictionary, data) {
        super(dictionary);
        //Constants
        /**
         * @hidden
         * @private
         */
        this.dicPrefix = 'stream';
        /**
         * @hidden
         * @private
         */
        this.dicSuffix = 'endstream';
        /**
         * Internal variable to hold `cloned object`.
         * @private
         */
        this.clonedObject2 = null;
        /**
         * @hidden
         * @private
         */
        this.bCompress = true;
        /**
         * @hidden
         * @private
         */
        this.isImageStream = false;
        if (typeof dictionary !== 'undefined' || typeof data !== 'undefined') {
            this.dataStream2 = [];
            this.dataStream2 = data;
            this.bCompress2 = false;
        }
        else {
            this.dataStream2 = [];
            this.bCompress2 = true;
            //Pending
        }
    }
    /**
     * Gets the `internal` stream.
     * @private
     */
    get internalStream() {
        return this.dataStream2;
    }
    set internalStream(value) {
        this.dataStream2 = [];
        this.dataStream2 = value;
        this.modify();
    }
    /**
     * Gets or sets 'is image' flag.
     * @private
     */
    get isImage() {
        return this.isImageStream;
    }
    set isImage(value) {
        this.isImageStream = value;
    }
    /**
     * Gets or sets `compression` flag.
     * @private
     */
    get compress() {
        return this.bCompress;
    }
    set compress(value) {
        this.bCompress = value;
        this.modify();
    }
    /**
     * Gets or sets the `data`.
     * @private
     */
    get data() {
        return this.dataStream2;
    }
    set data(value) {
        this.dataStream2 = [];
        this.dataStream2 = value;
        this.modify();
    }
    /**
     * `Clear` the internal stream.
     * @private
     */
    clearStream() {
        this.internalStream = [];
        this.remove(this.dictionaryProperties.filter);
        this.bCompress = true;
        this.modify();
    }
    /**
     * `Writes` the specified string.
     * @private
     */
    write(text) {
        if (text == null) {
            throw new Error('ArgumentNullException:text');
        }
        if (text.length <= 0) {
            throw new Error('ArgumentException: Can not write an empty string, text');
        }
        this.dataStream2.push(text);
        this.modify();
    }
    /**
     * `Compresses the content` if it's required.
     * @private
     */
    compressContent(data, writer) {
        if (this.bCompress) {
            let sw = new CompressedStreamWriter();
            // data = 'Hello World!!!';
            sw.write(data, 0, data.length);
            sw.close();
            data = sw.getCompressedString;
            this.addFilter(this.dictionaryProperties.flatedecode);
        }
        return data;
    }
    /**
     * `Adds a filter` to the filter array.
     * @private
     */
    addFilter(filterName) {
        let obj = this.items.getValue(this.dictionaryProperties.filter);
        if (obj instanceof PdfReferenceHolder) {
            let rh = obj;
            obj = rh.object;
        }
        let array = obj;
        let name = obj;
        if (name != null) {
            array = new PdfArray();
            array.insert(0, name);
            this.items.setValue(this.dictionaryProperties.filter, array);
        }
        name = new PdfName(filterName);
        if (array == null) {
            this.items.setValue(this.dictionaryProperties.filter, name);
        }
        else {
            array.insert(0, name);
        }
    }
    /**
     * `Saves` the object using the specified writer.
     * @private
     */
    save(writer) {
        let data = '';
        for (let i = 0; i < this.data.length; i++) {
            data = data + this.data[i];
        }
        if (data.length > 1 && !this.isImage) {
            data = 'q\r\n' + data + 'Q\r\n';
        }
        data = this.compressContent(data, writer);
        let length = data.length;
        this.items.setValue(this.dictionaryProperties.length, new PdfNumber(length));
        super.save(writer, false);
        writer.write(this.dicPrefix);
        writer.write(Operators.newLine);
        if (data.length > 0) {
            writer.write(data);
        }
        writer.write(Operators.newLine);
        writer.write(this.dicSuffix);
        writer.write(Operators.newLine);
    }
    /**
     * Converts `bytes to string`.
     * @private
     */
    static bytesToString(byteArray) {
        let output = '';
        for (let i = 0; i < byteArray.length; i++) {
            output = output + String.fromCharCode(byteArray[i]);
        }
        return output;
    }
}

/**
 * `PdfString` class is used to perform string related primitive operations.
 * @private
 */
var InternalEnum;
(function (InternalEnum) {
    //Internals
    /**
     * public Enum for `ForceEncoding`.
     * @private
     */
    let ForceEncoding;
    (function (ForceEncoding) {
        /**
         * Specifies the type of `None`.
         * @private
         */
        ForceEncoding[ForceEncoding["None"] = 0] = "None";
        /**
         * Specifies the type of `Ascii`.
         * @private
         */
        ForceEncoding[ForceEncoding["Ascii"] = 1] = "Ascii";
        /**
         * Specifies the type of `Unicode`.
         * @private
         */
        ForceEncoding[ForceEncoding["Unicode"] = 2] = "Unicode";
    })(ForceEncoding = InternalEnum.ForceEncoding || (InternalEnum.ForceEncoding = {}));
    /**
     * public Enum for `SourceType`.
     * @private
     */
    let SourceType;
    (function (SourceType) {
        /**
         * Specifies the type of `StringValue`.
         * @private
         */
        SourceType[SourceType["StringValue"] = 0] = "StringValue";
        /**
         * Specifies the type of `ByteBuffer`.
         * @private
         */
        SourceType[SourceType["ByteBuffer"] = 1] = "ByteBuffer";
    })(SourceType || (SourceType = {}));
})(InternalEnum || (InternalEnum = {}));
class PdfString {
    constructor(value) {
        /**
         * Value indicating whether the string was converted to hex.
         * @default false
         * @private
         */
        this.bHex = false;
        /**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */
        this.position1 = -1;
        /**
         * Internal variable to hold `cloned object`.
         * @default null
         * @private
         */
        this.clonedObject1 = null;
        /**
         * `Shows` if the data of the stream was decrypted.
         * @default false
         * @private
         */
        this.bDecrypted = false;
        /**
         * Shows if the data of the stream `was decrypted`.
         * @default false
         * @private
         */
        this.isParentDecrypted = false;
        /**
         * Gets a value indicating whether the object is `packed or not`.
         * @default false
         * @private
         */
        this.isPacked = false;
        /**
         * @hidden
         * @private
         */
        this.isFormField = false;
        /**
         * @hidden
         * @private
         */
        this.isColorSpace = false;
        /**
         * @hidden
         * @private
         */
        this.isHexString = true;
        if (typeof value === 'undefined') {
            this.bHex = false;
        }
        else {
            if (!(value.length > 0 && value[0] === '0xfeff')) {
                this.stringValue = value;
                this.data = [];
                for (let i = 0; i < value.length; ++i) {
                    this.data.push(value.charCodeAt(i));
                }
            }
        }
    }
    //Property
    /**
     * Gets a value indicating whether string is in `hex`.
     * @private
     */
    get hex() {
        return this.bHex;
    }
    /**
     * Gets or sets string `value` of the object.
     * @private
     */
    get value() {
        return this.stringValue;
    }
    set value(value) {
        this.stringValue = value;
        this.data = null;
    }
    /**
     * Gets or sets the `Status` of the specified object.
     * @private
     */
    get status() {
        return this.status1;
    }
    set status(value) {
        this.status1 = value;
    }
    /**
     * Gets or sets a value indicating whether this document `is saving` or not.
     * @private
     */
    get isSaving() {
        return this.isSaving1;
    }
    set isSaving(value) {
        this.isSaving1 = value;
    }
    /**
     * Gets or sets the `index` value of the specified object.
     * @private
     */
    get objectCollectionIndex() {
        return this.index1;
    }
    set objectCollectionIndex(value) {
        this.index1 = value;
    }
    /**
     * Returns `cloned object`.
     * @private
     */
    get clonedObject() {
        return this.clonedObject1;
    }
    /**
     * Gets or sets the `position` of the object.
     * @private
     */
    get position() {
        return this.position1;
    }
    set position(value) {
        this.position1 = value;
    }
    /**
     * Returns `PdfCrossTable` associated with the object.
     * @private
     */
    get CrossTable() {
        return this.crossTable;
    }
    //Methods
    /**
     * Converts `bytes to string using hex format` for representing string.
     * @private
     */
    static bytesToHex(bytes) {
        if (bytes == null) {
            return '';
        }
        let builder = '';
        return builder;
    }
    /**
     * `Saves` the object using the specified writer.
     * @private
     */
    save(writer) {
        if (writer === null) {
            throw new Error('ArgumentNullException : writer');
        }
        writer.write(PdfString.stringMark[0] + this.value + PdfString.stringMark[1]);
    }
    /**
     * Creates a `copy of PdfString`.
     * @private
     */
    clone(crossTable) {
        if (this.clonedObject1 !== null && this.clonedObject1.CrossTable === crossTable) {
            return this.clonedObject1;
        }
        else {
            this.clonedObject1 = null;
        }
        let newString = new PdfString(this.stringValue);
        newString.bHex = this.bHex;
        newString.crossTable = crossTable;
        newString.isColorSpace = this.isColorSpace;
        this.clonedObject1 = newString;
        return newString;
    }
}
//constants = ;
/**
 * `General markers` for string.
 * @private
 */
PdfString.stringMark = '()';
/**
 * `Hex markers` for string.
 * @private
 */
PdfString.hexStringMark = '<>';
/**
 * Format of password data.
 * @private
 */
PdfString.hexFormatPattern = '{0:X2}';

/**
 * `PdfReference` class is used to perform reference related primitive operations.
 * @private
 */
class PdfReference {
    constructor(objNumber, genNumber) {
        /**
         * Holds the `index` number of the object.
         * @default -1
         * @private
         */
        this.index3 = -1;
        /**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */
        this.position3 = -1;
        /**
         * Holds the `object number`.
         * @default 0
         * @private
         */
        this.objNumber = 0;
        /**
         * Holds the `generation number` of the object.
         * @default 0
         * @private
         */
        this.genNumber = 0;
        if (typeof objNumber === 'number' && typeof genNumber === 'number') {
            this.objNumber = objNumber;
            this.genNumber = genNumber;
            // } else if (typeof objNum === 'string' && typeof genNum === 'string') {
        }
        else {
            this.objNumber = Number(objNumber);
            this.genNumber = Number(genNumber);
        }
    }
    //Property
    /**
     * Gets or sets the `Status` of the specified object.
     * @private
     */
    get status() {
        return this.status3;
    }
    set status(value) {
        this.status3 = value;
    }
    /**
     * Gets or sets a value indicating whether this document `is saving` or not.
     * @private
     */
    get isSaving() {
        return this.isSaving3;
    }
    set isSaving(value) {
        this.isSaving3 = value;
    }
    /**
     * Gets or sets the `index` value of the specified object.
     * @private
     */
    get objectCollectionIndex() {
        return this.index3;
    }
    set objectCollectionIndex(value) {
        this.index3 = value;
    }
    /**
     * Gets or sets the `position` of the object.
     * @private
     */
    get position() {
        return this.position3;
    }
    set position(value) {
        this.position3 = value;
    }
    /**
     * Returns `cloned object`.
     * @private
     */
    get clonedObject() {
        let returnObject3 = null;
        return returnObject3;
    }
    //IPdfPrimitives methods
    /**
     * `Saves` the object.
     * @private
     */
    save(writer) {
        writer.write(this.toString());
    }
    /**
     * Returns a `string` representing the object.
     * @private
     */
    toString() {
        return this.objNumber.toString() + ' ' + this.genNumber.toString() + ' R';
    }
    /**
     * Creates a `deep copy` of the IPdfPrimitive object.
     * @private
     */
    clone(crossTable) {
        return null;
    }
}
/**
 * `PdfReferenceHolder` class is used to perform reference holder related primitive operations.
 * @private
 */
class PdfReferenceHolder {
    constructor(obj1, obj2) {
        /**
         * Holds the `index` number of the object.
         * @default -1
         * @private
         */
        this.index4 = -1;
        /**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */
        this.position4 = -1;
        /**
         * The `index` of the object within the object collection.
         * @default -1
         * @private
         */
        this.objectIndex = -1;
        /**
         * @hidden
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        // if (typeof obj2 === 'undefined') {
        if (obj1 instanceof PdfArray
            || obj1 instanceof PdfDictionary
            || obj1 instanceof PdfName
            || obj1 instanceof PdfNumber
            || obj1 instanceof PdfStream
            || obj1 instanceof PdfReference
            || obj1 instanceof PdfString) {
            // if (obj1 === null) {
            //     throw new Error('ArgumentNullException : obj');
            // }
            this.primitiveObject = obj1;
            // } else if (obj1 instanceof PdfPageBase
            //             || obj1 instanceof PdfPage
            //             || obj1 instanceof PdfSection
            //             || obj1 instanceof PdfSectionCollection) {
        }
        else {
            let tempObj = obj1;
            this.constructor(tempObj.element);
        }
        // }
        // else {
        //     if (obj2 === null) {
        //         throw new Error('ArgumentNullException : crossTable');
        //     }
        //     if (obj1 === null) {
        //         throw new Error('ArgumentNullException : reference');
        //     }
        //     this.crossTable = obj2;
        //     let tempObj1 : PdfReference = <PdfReference>obj1;
        //     this.reference = tempObj1;
        // }
    }
    //Properties
    /**
     * Gets or sets the `Status` of the specified object.
     * @private
     */
    get status() {
        return this.status4;
    }
    set status(value) {
        this.status4 = value;
    }
    /**
     * Gets or sets a value indicating whether this document `is saving` or not.
     * @private
     */
    get isSaving() {
        return this.isSaving4;
    }
    set isSaving(value) {
        this.isSaving4 = value;
    }
    /**
     * Gets or sets the `index` value of the specified object.
     * @private
     */
    get objectCollectionIndex() {
        return this.index4;
    }
    set objectCollectionIndex(value) {
        this.index4 = value;
    }
    /**
     * Gets or sets the `position` of the object.
     * @private
     */
    get position() {
        return this.position4;
    }
    set position(value) {
        this.position4 = value;
    }
    /**
     * Returns `cloned object`.
     * @private
     */
    get clonedObject() {
        return null;
    }
    /**
     * Gets the `object` the reference is of.
     * @private
     */
    get object() {
        // if ((this.reference != null) || (this.object == null)) {
        //     this.object = this.GetterObject();
        // }
        return this.primitiveObject;
    }
    /**
     * Gets the `reference`.
     * @private
     */
    get reference() {
        return this.pdfReference;
    }
    /**
     * Gets the `index` of the object.
     * @private
     */
    get index() {
        // let items : PdfMainObjectCollection = this.crossTable.PdfObjects;
        // this.objectIndex = items.GetObjectIndex(this.reference);
        // if (this.objectIndex < 0) {
        //     let obj : IPdfPrimitive = this.crossTable.GetObject(this.reference);
        //     this.objectIndex = items.Count - 1;
        // }
        return this.objectIndex;
    }
    /**
     * Gets the `element`.
     * @private
     */
    get element() {
        return this.primitiveObject;
    }
    /**
     * `Writes` a reference into a PDF document.
     * @private
     */
    save(writer) {
        // if (writer == null) {
        //     throw new Error('ArgumentNullException : writer');
        // }
        let position = writer.position;
        let cTable = writer.document.crossTable;
        // if (cTable.Document instanceof PdfDocument) {
        this.object.isSaving = true;
        // }
        let reference = null;
        // if (writer.Document.FileStructure.IncrementalUpdate === true && writer.Document.isStreamCopied === true) {
        //     if (this.reference === null) {
        //         reference = cTable.GetReference(this.Object);
        //     } else {
        //         reference = this.reference;
        //     }
        // } else {
        //     reference = cTable.GetReference(this.Object);
        // }
        // if (!(writer.Document.FileStructure.IncrementalUpdate === true && writer.Document.isStreamCopied === true)) {
        reference = cTable.getReference(this.object);
        // }
        // if (writer.Position !== position) {
        //     writer.Position = position;
        // }
        reference.save(writer);
    }
    /**
     * Creates a `copy of PdfReferenceHolder`.
     * @private
     */
    clone(crossTable) {
        return null;
    }
}

/**
 * `PdfAction` class represents base class for all action types.
 * @private
 */
class PdfAction {
    // Constructors
    /**
     * Initialize instance for `Action` class.
     * @private
     */
    constructor() {
        /**
         * Specifies the Next `action` to perform.
         * @private
         */
        this.action = null;
        /**
         * Specifies the Internal variable to store `dictionary properties`.
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        // super(); -> Object()
        this.initialize();
    }
    // Properties
    /**
     * Gets and Sets the `Next` action to perform.
     * @private
     */
    get next() {
        return this.action;
    }
    set next(value) {
        // if (this.action !== value) {
        this.action = value;
        this.dictionary.items.setValue(this.dictionaryProperties.next, new PdfReferenceHolder(this.action));
        // }
    }
    /**
     * Gets and Sets the instance of PdfDictionary class for `Dictionary`.
     * @private
     */
    get dictionary() {
        if (typeof this.pdfDictionary === 'undefined') {
            this.pdfDictionary = new PdfDictionary();
        }
        return this.pdfDictionary;
    }
    // Implementation
    /**
     * `Initialize` the action type.
     * @private
     */
    initialize() {
        this.dictionary.items.setValue(this.dictionaryProperties.type, new PdfName(this.dictionaryProperties.action));
    }
    // IPdfWrapper Members
    /**
     * Gets the `Element` as IPdfPrimitive class.
     * @private
     */
    get element() {
        return this.dictionary;
    }
}

/**
 * `PdfUriAction` class for initialize the uri related internals.
 * @private
 */
class PdfUriAction extends PdfAction {
    constructor(uri) {
        super();
        // Fields
        /**
         * Specifies the `uri` string.
         * @default ''.
         * @private
         */
        this.uniformResourceIdentifier = '';
    }
    // Properties
    /**
     * Gets and Sets the value of `Uri`.
     * @private
     */
    get uri() {
        return this.uniformResourceIdentifier;
    }
    set uri(value) {
        this.uniformResourceIdentifier = value;
        this.dictionary.items.setValue(this.dictionaryProperties.uri, new PdfString(this.uniformResourceIdentifier));
    }
    // Implementation
    /**
     * `Initialize` the internals.
     * @private
     */
    initialize() {
        super.initialize();
        this.dictionary.items.setValue(this.dictionaryProperties.s, new PdfName(this.dictionaryProperties.uri));
    }
}

/**
 * public Enum for `PdfHorizontalAlignment`.
 * @private
 */
var PdfHorizontalAlignment;
(function (PdfHorizontalAlignment) {
    /**
     * Specifies the type of `Left`.
     * @private
     */
    PdfHorizontalAlignment[PdfHorizontalAlignment["Left"] = 0] = "Left";
    /**
     * Specifies the type of `Center`.
     * @private
     */
    PdfHorizontalAlignment[PdfHorizontalAlignment["Center"] = 1] = "Center";
    /**
     * Specifies the type of `Right`.
     * @private
     */
    PdfHorizontalAlignment[PdfHorizontalAlignment["Right"] = 2] = "Right";
})(PdfHorizontalAlignment || (PdfHorizontalAlignment = {}));
/**
 * public Enum for `PdfVerticalAlignment`.
 * @private
 */
var PdfVerticalAlignment;
(function (PdfVerticalAlignment) {
    /**
     * Specifies the type of `Top`.
     * @private
     */
    PdfVerticalAlignment[PdfVerticalAlignment["Top"] = 0] = "Top";
    /**
     * Specifies the type of `Middle`.
     * @private
     */
    PdfVerticalAlignment[PdfVerticalAlignment["Middle"] = 1] = "Middle";
    /**
     * Specifies the type of `Bottom`.
     * @private
     */
    PdfVerticalAlignment[PdfVerticalAlignment["Bottom"] = 2] = "Bottom";
})(PdfVerticalAlignment || (PdfVerticalAlignment = {}));
/**
 * public Enum for `public`.
 * @private
 */
var PdfTextAlignment;
(function (PdfTextAlignment) {
    /**
     * Specifies the type of `Left`.
     * @private
     */
    PdfTextAlignment[PdfTextAlignment["Left"] = 0] = "Left";
    /**
     * Specifies the type of `Center`.
     * @private
     */
    PdfTextAlignment[PdfTextAlignment["Center"] = 1] = "Center";
    /**
     * Specifies the type of `Right`.
     * @private
     */
    PdfTextAlignment[PdfTextAlignment["Right"] = 2] = "Right";
    /**
     * Specifies the type of `Justify`.
     * @private
     */
    PdfTextAlignment[PdfTextAlignment["Justify"] = 3] = "Justify";
})(PdfTextAlignment || (PdfTextAlignment = {}));
/**
 * public Enum for `TextRenderingMode`.
 * @private
 */
var TextRenderingMode;
(function (TextRenderingMode) {
    /**
     * Specifies the type of `Fill`.
     * @private
     */
    TextRenderingMode[TextRenderingMode["Fill"] = 0] = "Fill";
    /**
     * Specifies the type of `Stroke`.
     * @private
     */
    TextRenderingMode[TextRenderingMode["Stroke"] = 1] = "Stroke";
    /**
     * Specifies the type of `FillStroke`.
     * @private
     */
    TextRenderingMode[TextRenderingMode["FillStroke"] = 2] = "FillStroke";
    /**
     * Specifies the type of `None`.
     * @private
     */
    TextRenderingMode[TextRenderingMode["None"] = 3] = "None";
    /**
     * Specifies the type of `ClipFlag`.
     * @private
     */
    TextRenderingMode[TextRenderingMode["ClipFlag"] = 4] = "ClipFlag";
    /**
     * Specifies the type of `ClipFill`.
     * @private
     */
    TextRenderingMode[TextRenderingMode["ClipFill"] = 4] = "ClipFill";
    /**
     * Specifies the type of `ClipStroke`.
     * @private
     */
    TextRenderingMode[TextRenderingMode["ClipStroke"] = 5] = "ClipStroke";
    /**
     * Specifies the type of `ClipFillStroke`.
     * @private
     */
    TextRenderingMode[TextRenderingMode["ClipFillStroke"] = 6] = "ClipFillStroke";
    /**
     * Specifies the type of `Clip`.
     * @private
     */
    TextRenderingMode[TextRenderingMode["Clip"] = 7] = "Clip";
})(TextRenderingMode || (TextRenderingMode = {}));
/**
 * public Enum for `PdfLineJoin`.
 * @private
 */
var PdfLineJoin;
(function (PdfLineJoin) {
    /**
     * Specifies the type of `Miter`.
     * @private
     */
    PdfLineJoin[PdfLineJoin["Miter"] = 0] = "Miter";
    /**
     * Specifies the type of `Round`.
     * @private
     */
    PdfLineJoin[PdfLineJoin["Round"] = 1] = "Round";
    /**
     * Specifies the type of `Bevel`.
     * @private
     */
    PdfLineJoin[PdfLineJoin["Bevel"] = 2] = "Bevel";
})(PdfLineJoin || (PdfLineJoin = {}));
/**
 * public Enum for `PdfLineCap`.
 * @private
 */
var PdfLineCap;
(function (PdfLineCap) {
    /**
     * Specifies the type of `Flat`.
     * @private
     */
    PdfLineCap[PdfLineCap["Flat"] = 0] = "Flat";
    /**
     * Specifies the type of `Round`.
     * @private
     */
    PdfLineCap[PdfLineCap["Round"] = 1] = "Round";
    /**
     * Specifies the type of `Square`.
     * @private
     */
    PdfLineCap[PdfLineCap["Square"] = 2] = "Square";
})(PdfLineCap || (PdfLineCap = {}));
/**
 * public Enum for `PdfDashStyle`.
 * @private
 */
var PdfDashStyle;
(function (PdfDashStyle) {
    /**
     * Specifies the type of `Solid`.
     * @private
     */
    PdfDashStyle[PdfDashStyle["Solid"] = 0] = "Solid";
    /**
     * Specifies the type of `Dash`.
     * @private
     */
    PdfDashStyle[PdfDashStyle["Dash"] = 1] = "Dash";
    /**
     * Specifies the type of `Dot`.
     * @private
     */
    PdfDashStyle[PdfDashStyle["Dot"] = 2] = "Dot";
    /**
     * Specifies the type of `DashDot`.
     * @private
     */
    PdfDashStyle[PdfDashStyle["DashDot"] = 3] = "DashDot";
    /**
     * Specifies the type of `DashDotDot`.
     * @private
     */
    PdfDashStyle[PdfDashStyle["DashDotDot"] = 4] = "DashDotDot";
    /**
     * Specifies the type of `Custom`.
     * @private
     */
    PdfDashStyle[PdfDashStyle["Custom"] = 5] = "Custom";
})(PdfDashStyle || (PdfDashStyle = {}));
/**
 * public Enum for `PdfFillMode`.
 * @private
 */
var PdfFillMode;
(function (PdfFillMode) {
    /**
     * Specifies the type of `Winding`.
     * @private
     */
    PdfFillMode[PdfFillMode["Winding"] = 0] = "Winding";
    /**
     * Specifies the type of `Alternate`.
     * @private
     */
    PdfFillMode[PdfFillMode["Alternate"] = 1] = "Alternate";
})(PdfFillMode || (PdfFillMode = {}));
/**
 * public Enum for `PdfColorSpace`.
 * @private
 */
var PdfColorSpace;
(function (PdfColorSpace) {
    /**
     * Specifies the type of `Rgb`.
     * @private
     */
    PdfColorSpace[PdfColorSpace["Rgb"] = 0] = "Rgb";
    /**
     * Specifies the type of `Cmyk`.
     * @private
     */
    PdfColorSpace[PdfColorSpace["Cmyk"] = 1] = "Cmyk";
    /**
     * Specifies the type of `GrayScale`.
     * @private
     */
    PdfColorSpace[PdfColorSpace["GrayScale"] = 2] = "GrayScale";
    /**
     * Specifies the type of `Indexed`.
     * @private
     */
    PdfColorSpace[PdfColorSpace["Indexed"] = 3] = "Indexed";
})(PdfColorSpace || (PdfColorSpace = {}));
/**
 * public Enum for `PdfBlendMode`.
 * @private
 */
var PdfBlendMode;
(function (PdfBlendMode) {
    /**
     * Specifies the type of `Normal`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Normal"] = 0] = "Normal";
    /**
     * Specifies the type of `Multiply`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Multiply"] = 1] = "Multiply";
    /**
     * Specifies the type of `Screen`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Screen"] = 2] = "Screen";
    /**
     * Specifies the type of `Overlay`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Overlay"] = 3] = "Overlay";
    /**
     * Specifies the type of `Darken`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Darken"] = 4] = "Darken";
    /**
     * Specifies the type of `Lighten`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Lighten"] = 5] = "Lighten";
    /**
     * Specifies the type of `ColorDodge`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["ColorDodge"] = 6] = "ColorDodge";
    /**
     * Specifies the type of `ColorBurn`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["ColorBurn"] = 7] = "ColorBurn";
    /**
     * Specifies the type of `HardLight`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["HardLight"] = 8] = "HardLight";
    /**
     * Specifies the type of `SoftLight`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["SoftLight"] = 9] = "SoftLight";
    /**
     * Specifies the type of `Difference`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Difference"] = 10] = "Difference";
    /**
     * Specifies the type of `Exclusion`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Exclusion"] = 11] = "Exclusion";
    /**
     * Specifies the type of `Hue`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Hue"] = 12] = "Hue";
    /**
     * Specifies the type of `Saturation`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Saturation"] = 13] = "Saturation";
    /**
     * Specifies the type of `Color`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Color"] = 14] = "Color";
    /**
     * Specifies the type of `Luminosity`.
     * @private
     */
    PdfBlendMode[PdfBlendMode["Luminosity"] = 15] = "Luminosity";
})(PdfBlendMode || (PdfBlendMode = {}));
/**
 * public Enum for `PdfGraphicsUnit`.
 * @private
 */
var PdfGraphicsUnit;
(function (PdfGraphicsUnit) {
    /**
     * Specifies the type of `Centimeter`.
     * @private
     */
    PdfGraphicsUnit[PdfGraphicsUnit["Centimeter"] = 0] = "Centimeter";
    /**
     * Specifies the type of `Pica`.
     * @private
     */
    PdfGraphicsUnit[PdfGraphicsUnit["Pica"] = 1] = "Pica";
    /**
     * Specifies the type of `Pixel`.
     * @private
     */
    PdfGraphicsUnit[PdfGraphicsUnit["Pixel"] = 2] = "Pixel";
    /**
     * Specifies the type of `Point`.
     * @private
     */
    PdfGraphicsUnit[PdfGraphicsUnit["Point"] = 3] = "Point";
    /**
     * Specifies the type of `Inch`.
     * @private
     */
    PdfGraphicsUnit[PdfGraphicsUnit["Inch"] = 4] = "Inch";
    /**
     * Specifies the type of `Document`.
     * @private
     */
    PdfGraphicsUnit[PdfGraphicsUnit["Document"] = 5] = "Document";
    /**
     * Specifies the type of `Millimeter`.
     * @private
     */
    PdfGraphicsUnit[PdfGraphicsUnit["Millimeter"] = 6] = "Millimeter";
})(PdfGraphicsUnit || (PdfGraphicsUnit = {}));
/**
 * public Enum for `PdfGridImagePosition`.
 * @private
 */
var PdfGridImagePosition;
(function (PdfGridImagePosition) {
    /**
     * Specifies the type of `Fit`.
     * @private
     */
    PdfGridImagePosition[PdfGridImagePosition["Fit"] = 0] = "Fit";
    /**
     * Specifies the type of `Center`.
     * @private
     */
    PdfGridImagePosition[PdfGridImagePosition["Center"] = 1] = "Center";
    /**
     * Specifies the type of `Stretch`.
     * @private
     */
    PdfGridImagePosition[PdfGridImagePosition["Stretch"] = 2] = "Stretch";
    /**
     * Specifies the type of `Tile`.
     * @private
     */
    PdfGridImagePosition[PdfGridImagePosition["Tile"] = 3] = "Tile";
})(PdfGridImagePosition || (PdfGridImagePosition = {}));

/**
 * Implements structures and routines working with `color`.
 * ```typescript
 * // create a new PDF document
 * let document : PdfDocument = new PdfDocument();
 * // add a new page to the document
 * let page1 : PdfPage = document.pages.add();
 * // set the font
 * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
 * //
 * // set color
 * let brushColor : PdfColor = new PdfColor(0, 0, 0);
 * //
 * // create black brush
 * let blackBrush : PdfSolidBrush = new PdfSolidBrush(brushColor);
 * // draw the text
 * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(0, 0));
 * // save the document
 * document.save('output.pdf');
 * // destroy the document
 * document.destroy();
 * ```
 * @default black color
 */
class PdfColor {
    constructor(color1, color2, color3, color4) {
        if (color1 instanceof PdfColor) {
            this.redColor = color1.r;
            this.greenColor = color1.g;
            this.blueColor = color1.b;
            this.grayColor = color1.gray;
            this.alpha = color1.alpha;
            this.filled = (this.alpha !== 0);
        }
        else if (typeof color1 === 'number' && typeof color2 === 'number' && typeof color3 === 'number' &&
            typeof color4 === 'undefined') {
            this.constructor(PdfColor.maxColourChannelValue, color1, color2, color3); //doubt-byte/float
        }
        else if (typeof color1 === 'number' && typeof color2 === 'number' && typeof color3 === 'number' && typeof color4 === 'number') {
            this.redColor = color2;
            this.cyanColor = 0;
            this.greenColor = color3;
            this.magentaColor = 0;
            this.blueColor = color4;
            this.yellowColor = 0;
            this.blackColor = 0;
            this.grayColor = 0;
            this.alpha = color1;
            this.filled = true;
            this.assignCMYK(color2, color3, color4);
        }
    }
    /**
     * `Calculate and assign` cyan, megenta, yellow colors from rgb values..
     * @private
     */
    assignCMYK(r, g, b) {
        let red = r / PdfColor.maxColourChannelValue;
        let green = g / PdfColor.maxColourChannelValue;
        let blue = b / PdfColor.maxColourChannelValue;
        let black = PdfNumber.min(1 - red, 1 - green, 1 - blue);
        let cyan = (black === 1.0) ? 0 : (1 - red - black) / (1 - black);
        let magenta = (black === 1.0) ? 0 : (1 - green - black) / (1 - black);
        let yellow = (black === 1.0) ? 0 : (1 - blue - black) / (1 - black);
        this.blackColor = black;
        this.cyanColor = cyan;
        this.magentaColor = magenta;
        this.yellowColor = yellow;
    }
    //Properties
    // public static get Empty():PdfColor
    // {
    //     return this.s_emptyColor
    // }
    /**
     * Gets or sets `Red` channel value.
     * @private
     */
    get r() {
        return this.redColor;
    }
    set r(value) {
        this.redColor = value;
        this.assignCMYK(this.redColor, this.greenColor, this.blueColor);
        this.filled = true;
    }
    /**
     * Gets the `Red` color
     * @private
     */
    get red() {
        return (this.r / PdfColor.maxColourChannelValue);
    }
    /**
     * Gets or sets `Blue` channel value.
     * @private
     */
    get b() {
        return this.blueColor;
    }
    set b(value) {
        this.blueColor = value;
        this.assignCMYK(this.redColor, this.greenColor, this.blueColor);
        this.filled = true;
    }
    /**
     * Gets the `blue` color.
     * @private
     */
    get blue() {
        return (this.b / PdfColor.maxColourChannelValue);
    }
    /**
     *  Gets or sets `Green` channel value.
     * @private
     */
    get g() {
        return this.greenColor;
    }
    set g(value) {
        this.greenColor = value;
        this.assignCMYK(this.redColor, this.greenColor, this.blueColor);
        this.filled = true;
    }
    /**
     * Gets the `Green` color.
     * @private
     */
    get green() {
        return (this.g / PdfColor.maxColourChannelValue);
    }
    /**
     * Gets or sets `Gray` channel value.
     * @private
     */
    get gray() {
        return ((((this.redColor + this.greenColor) + this.blueColor)) / (PdfColor.maxColourChannelValue * 3));
    }
    set gray(value) {
        if (value < 0) {
            this.grayColor = 0;
        }
        else if (value > 1) {
            this.grayColor = 1;
        }
        else {
            this.grayColor = value;
        }
        this.r = (this.grayColor * PdfColor.maxColourChannelValue);
        this.g = (this.grayColor * PdfColor.maxColourChannelValue);
        this.b = (this.grayColor * PdfColor.maxColourChannelValue);
        this.assignCMYK(this.redColor, this.greenColor, this.blueColor);
        this.filled = true;
    }
    /**
     * Gets whether the PDFColor `is Empty` or not.
     * @private
     */
    get isEmpty() {
        return !this.filled;
    }
    /**
     * Gets or sets `Alpha` channel value.
     * @private
     */
    get a() {
        return this.alpha;
    }
    set a(value) {
        if (value < 0) {
            this.alpha = 0;
        }
        else {
            // if (this.alpha !== value) {
            this.alpha = value;
            // }
        }
        this.filled = true;
    }
    //Public methods
    /**
     * Converts `PDFColor to PDF string` representation.
     * @private
     */
    toString(colorSpace, stroke) {
        if (this.isEmpty) {
            return '';
        }
        return this.rgbToString(stroke);
    }
    /**
     * Sets `RGB` color.
     * @private
     */
    rgbToString(ifStroking) {
        let r = this.r;
        let g = this.g;
        let b = this.b;
        let key = (r << 16) + (g << 8) + b;
        if (ifStroking) {
            key += 1 << 24;
        }
        let colour = '';
        let obj = null;
        if (PdfColor.rgbStrings.containsKey(key)) {
            obj = PdfColor.rgbStrings.getValue(key);
        }
        if (obj == null) {
            let red = r / PdfColor.maxColourChannelValue;
            let green = g / PdfColor.maxColourChannelValue;
            let blue = b / PdfColor.maxColourChannelValue;
            if (ifStroking) {
                colour = red.toString() + ' ' + green.toString() + ' ' + blue.toString() + ' RG';
            }
            else {
                colour = red.toString() + ' ' + green.toString() + ' ' + blue.toString() + ' rg';
            }
            PdfColor.rgbStrings.setValue(key, colour);
        }
        else {
            colour = obj.toString();
        }
        return colour + Operators.newLine;
    }
    /**
     * Converts `colour to a PDF array`.
     * @private
     */
    toArray(colorSpace) {
        let array = new PdfArray();
        switch (colorSpace) {
            case PdfColorSpace.Rgb:
                array.add(new PdfNumber(this.red));
                array.add(new PdfNumber(this.green));
                array.add(new PdfNumber(this.blue));
                break;
            default:
                throw new Error('NotSupportedException : Unsupported colour space.');
        }
        return array;
    }
}
//Fields
/**
 * Holds `RGB colors` converted into strings.
 * @private
 */
PdfColor.rgbStrings = new Dictionary();
/**
 * Holds Gray scale colors converted into strings for `stroking`.
 * @private
 */
PdfColor.grayStringsSroke = new Dictionary();
/**
 * Holds Gray scale colors converted into strings for `filling`.
 * @private
 */
PdfColor.grayStringsFill = new Dictionary();
/**
 * `Max value` of color channel.
 * @private
 */
PdfColor.maxColourChannelValue = 255.0;

/**
 * Coordinates of Position for `PointF`.
 * @private
 */
class PointF {
    constructor(x, y) {
        if (typeof x === 'undefined') {
            this.x = 0;
            this.y = 0;
        }
        else {
            if (x !== null) {
                this.x = x;
            }
            else {
                this.x = 0;
            }
            if (y !== null) {
                this.y = y;
            }
            else {
                this.y = 0;
            }
        }
    }
}
/**
 * Width and Height as `Size`.
 * @private
 */
class SizeF {
    constructor(width, height) {
        if (typeof height === 'undefined') {
            this.height = 0;
            this.width = 0;
        }
        else {
            if (height !== null) {
                this.height = height;
            }
            else {
                this.height = 0;
            }
            if (width !== null) {
                this.width = width;
            }
            else {
                this.width = 0;
            }
        }
    }
}
/**
 * `RectangleF` with Position and size.
 * @private
 */
class RectangleF {
    constructor(arg1, arg2, arg3, arg4) {
        if (typeof arg1 === typeof arg1 && typeof arg1 === 'undefined') {
            this.x = 0;
            this.y = 0;
            this.height = 0;
            this.width = 0;
        }
        else {
            if (arg1 instanceof PointF && arg2 instanceof SizeF && typeof arg3 === 'undefined') {
                let pointf = arg1;
                this.x = pointf.x;
                this.y = pointf.y;
                let sizef = arg2;
                this.height = sizef.height;
                this.width = sizef.width;
            }
            else {
                let x = arg1;
                let y = arg2;
                let width = arg3;
                let height = arg4;
                this.x = x;
                this.y = y;
                this.height = height;
                this.width = width;
            }
        }
    }
}

/**
 * `PdfBrush` class provides objects used to fill the interiors of graphical shapes such as rectangles,
 * ellipses, pies, polygons, and paths.
 * @private
 */
class PdfBrush {
    /**
     * Creates instanceof `PdfBrush` class.
     * @hidden
     * @private
     */
    constructor() {
        //
    }
}

/**
 * Represents a brush that fills any object with a solid color.
 * ```typescript
 * // create a new PDF document
 * let document : PdfDocument = new PdfDocument();
 * // add a pages to the document
 * let page1 : PdfPage = document.pages.add();
 * // set font
 * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
 * // set brush
 * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
 * // draw the text
 * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(10, 10));
 * // save the document
 * document.save('output.pdf');
 * // destroy the document
 * document.destroy();
 * ```
 */
class PdfSolidBrush extends PdfBrush {
    //Constructors
    /**
     * Initializes a new instance of the `PdfSolidBrush` class.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // add a pages to the document
     * let page1 : PdfPage = document.pages.add();
     * // set font
     * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
     * // set brush
     * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
     * // draw the text
     * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(10, 10));
     * // save the document
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     * @param color color of the brush
     */
    constructor(color) {
        super();
        this.pdfColor = color;
    }
    //Properties
    /**
     * Gets or sets the `color` of the brush.
     * @private
     */
    get color() {
        return this.pdfColor;
    }
    set color(value) {
        this.pdfColor = value;
    }
    //Implementation
    /**
     * `Monitors` the changes of the brush and modify PDF state respectively.
     * @private
     */
    monitorChanges(brush, streamWriter, getResources, saveChanges, currentColorSpace) {
        if (streamWriter == null) {
            throw new Error('ArgumentNullException:streamWriter');
        }
        let diff = false;
        if (brush == null) {
            diff = true;
            streamWriter.setColorAndSpace(this.pdfColor, currentColorSpace, false);
            return diff;
        }
        else {
            diff = true;
            streamWriter.setColorAndSpace(this.pdfColor, currentColorSpace, false);
            return diff;
        }
    }
    /**
     * `Resets` the changes, which were made by the brush.
     * @private
     */
    resetChanges(streamWriter) {
        streamWriter.setColorAndSpace(new PdfColor(0, 0, 0), PdfColorSpace.Rgb, false);
    }
}

/**
 * public Enum for `PdfFontStyle`.
 * @private
 */
var PdfFontStyle;
(function (PdfFontStyle) {
    /**
     * Specifies the type of `Regular`.
     * @private
     */
    PdfFontStyle[PdfFontStyle["Regular"] = 0] = "Regular";
    /**
     * Specifies the type of `Bold`.
     * @private
     */
    PdfFontStyle[PdfFontStyle["Bold"] = 1] = "Bold";
    /**
     * Specifies the type of `Italic`.
     * @private
     */
    PdfFontStyle[PdfFontStyle["Italic"] = 2] = "Italic";
    /**
     * Specifies the type of `Underline`.
     * @private
     */
    PdfFontStyle[PdfFontStyle["Underline"] = 4] = "Underline";
    /**
     * Specifies the type of `Strikeout`.
     * @private
     */
    PdfFontStyle[PdfFontStyle["Strikeout"] = 8] = "Strikeout";
})(PdfFontStyle || (PdfFontStyle = {}));
/**
 * Specifies the font family from the standard font.
 * ```typescript
 * // create a new PDF document
 * let document : PdfDocument = new PdfDocument();
 * // add a new page to the document
 * let page1 : PdfPage = document.pages.add();
 * // create new standard font
 * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
 * // create black brush
 * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
 * // draw the text
 * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(0, 0));
 * // save the document
 * document.save('output.pdf');
 * ```
 */
var PdfFontFamily;
(function (PdfFontFamily) {
    /**
     * Specifies the `Helvetica` font.
     */
    PdfFontFamily[PdfFontFamily["Helvetica"] = 0] = "Helvetica";
    /**
     * Specifies the `Courier` font.
     */
    PdfFontFamily[PdfFontFamily["Courier"] = 1] = "Courier";
    /**
     * Specifies the `TimesRoman` font.
     */
    PdfFontFamily[PdfFontFamily["TimesRoman"] = 2] = "TimesRoman";
    /**
     * Specifies the `Symbol` font.
     */
    PdfFontFamily[PdfFontFamily["Symbol"] = 3] = "Symbol";
    /**
     * Specifies the `ZapfDingbats` font.
     */
    PdfFontFamily[PdfFontFamily["ZapfDingbats"] = 4] = "ZapfDingbats";
})(PdfFontFamily || (PdfFontFamily = {}));
/**
 * public Enum for `PdfFontType`.
 * @private
 */
var PdfFontType;
(function (PdfFontType) {
    /**
     * Specifies the type of `Standard`.
     * @private
     */
    PdfFontType[PdfFontType["Standard"] = 0] = "Standard";
    /**
     * Specifies the type of `TrueType`.
     * @private
     */
    PdfFontType[PdfFontType["TrueType"] = 1] = "TrueType";
    /**
     * Specifies the type of `TrueTypeEmbedded`.
     * @private
     */
    PdfFontType[PdfFontType["TrueTypeEmbedded"] = 2] = "TrueTypeEmbedded";
})(PdfFontType || (PdfFontType = {}));
/**
 * public Enum for `PdfWordWrapType`.
 * @private
 */
var PdfWordWrapType;
(function (PdfWordWrapType) {
    /**
     * Specifies the type of `None`.
     * @private
     */
    PdfWordWrapType[PdfWordWrapType["None"] = 0] = "None";
    /**
     * Specifies the type of `Word`.
     * @private
     */
    PdfWordWrapType[PdfWordWrapType["Word"] = 1] = "Word";
    /**
     * Specifies the type of `WordOnly`.
     * @private
     */
    PdfWordWrapType[PdfWordWrapType["WordOnly"] = 2] = "WordOnly";
    /**
     * Specifies the type of `Character`.
     * @private
     */
    PdfWordWrapType[PdfWordWrapType["Character"] = 3] = "Character";
})(PdfWordWrapType || (PdfWordWrapType = {}));
/**
 * public Enum for `PdfSubSuperScript`.
 * @private
 */
var PdfSubSuperScript;
(function (PdfSubSuperScript) {
    /**
     * Specifies the type of `None`.
     * @private
     */
    PdfSubSuperScript[PdfSubSuperScript["None"] = 0] = "None";
    /**
     * Specifies the type of `SuperScript`.
     * @private
     */
    PdfSubSuperScript[PdfSubSuperScript["SuperScript"] = 1] = "SuperScript";
    /**
     * Specifies the type of `SubScript`.
     * @private
     */
    PdfSubSuperScript[PdfSubSuperScript["SubScript"] = 2] = "SubScript";
})(PdfSubSuperScript || (PdfSubSuperScript = {}));
/**
 * public Enum for `FontEncoding`.
 * @private
 */
var FontEncoding;
(function (FontEncoding) {
    /**
     * Specifies the type of `Unknown`.
     * @private
     */
    FontEncoding[FontEncoding["Unknown"] = 0] = "Unknown";
    /**
     * Specifies the type of `StandardEncoding`.
     * @private
     */
    FontEncoding[FontEncoding["StandardEncoding"] = 1] = "StandardEncoding";
    /**
     * Specifies the type of `MacRomanEncoding`.
     * @private
     */
    FontEncoding[FontEncoding["MacRomanEncoding"] = 2] = "MacRomanEncoding";
    /**
     * Specifies the type of `MacExpertEncoding`.
     * @private
     */
    FontEncoding[FontEncoding["MacExpertEncoding"] = 3] = "MacExpertEncoding";
    /**
     * Specifies the type of `WinAnsiEncoding`.
     * @private
     */
    FontEncoding[FontEncoding["WinAnsiEncoding"] = 4] = "WinAnsiEncoding";
    /**
     * Specifies the type of `PdfDocEncoding`.
     * @private
     */
    FontEncoding[FontEncoding["PdfDocEncoding"] = 5] = "PdfDocEncoding";
    /**
     * Specifies the type of `IdentityH`.
     * @private
     */
    FontEncoding[FontEncoding["IdentityH"] = 6] = "IdentityH";
})(FontEncoding || (FontEncoding = {}));

/**
 * PdfStringFormat.ts class for EJ2-PDF
 */
/**
 * `PdfStringFormat` class represents the text layout information on PDF.
 * ```typescript
 * // create a new PDF document
 * let document : PdfDocument = new PdfDocument();
 * // add a pages to the document
 * let page1 : PdfPage = document.pages.add();
 * // set font
 * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
 * // set brush
 * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
 * //
 * // set the format for string
 * let stringFormat : PdfStringFormat = new PdfStringFormat();
 * // set the text alignment
 * stringFormat.alignment = PdfTextAlignment.Center;
 * // set the vertical alignment
 * stringFormat.lineAlignment = PdfVerticalAlignment.Middle;
 * //
 * // draw the text
 * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(10, 10), stringFormat);
 * // save the document
 * document.save('output.pdf');
 * // destroy the document
 * document.destroy();
 * ```
 */
class PdfStringFormat {
    constructor(arg1, arg2) {
        /**
         * The `scaling factor` of the text being drawn.
         * @private
         */
        this.scalingFactor = 100.0;
        if (typeof arg1 === 'undefined') {
            this.internalLineLimit = true;
            this.wordWrapType = PdfWordWrapType.Word;
        }
        else if (typeof arg1 === 'string') {
            this.constructor();
        }
        else {
            if (typeof arg2 === 'undefined') {
                this.constructor();
                this.textAlignment = arg1;
            }
            else {
                this.constructor(arg1);
                this.verticalAlignment = arg2;
            }
        }
    }
    //Properties
    /**
     * Gets or sets the `horizontal` text alignment
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // add a pages to the document
     * let page1 : PdfPage = document.pages.add();
     * // set font
     * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
     * // set brush
     * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
     * //
     * // set the format for string
     * let stringFormat : PdfStringFormat = new PdfStringFormat();
     * // set the text alignment
     * stringFormat.alignment = PdfTextAlignment.Center;
     * //
     * // draw the text
     * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(10, 10), stringFormat);
     * // save the document
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get alignment() {
        return this.textAlignment;
    }
    set alignment(value) {
        this.textAlignment = value;
    }
    /**
     * Gets or sets the `vertical` text alignment.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // add a pages to the document
     * let page1 : PdfPage = document.pages.add();
     * // set font
     * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
     * // set brush
     * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
     * //
     * // set the format for string
     * let stringFormat : PdfStringFormat = new PdfStringFormat();
     * // set the vertical alignment
     * stringFormat.lineAlignment = PdfVerticalAlignment.Middle;
     * //
     * // draw the text
     * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(10, 10), stringFormat);
     * // save the document
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get lineAlignment() {
        if (typeof this.verticalAlignment === 'undefined' || this.verticalAlignment == null) {
            return PdfVerticalAlignment.Top;
        }
        else {
            return this.verticalAlignment;
        }
    }
    set lineAlignment(value) {
        this.verticalAlignment = value;
    }
    /**
     * Gets or sets the value that indicates text `direction` mode.
     * @private
     */
    get rightToLeft() {
        if (typeof this.isRightToLeft === 'undefined' || this.isRightToLeft == null) {
            return false;
        }
        else {
            return this.isRightToLeft;
        }
    }
    set rightToLeft(value) {
        this.isRightToLeft = value;
    }
    /**
     * Gets or sets value that indicates a `size` among the characters in the text.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // add a pages to the document
     * let page1 : PdfPage = document.pages.add();
     * // set font
     * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
     * // set brush
     * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
     * //
     * // set the format for string
     * let stringFormat : PdfStringFormat = new PdfStringFormat();
     * // set character spacing
     * stringFormat.characterSpacing = 10;
     * //
     * // draw the text
     * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(10, 10), stringFormat);
     * // save the document
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get characterSpacing() {
        if (typeof this.internalCharacterSpacing === 'undefined' || this.internalCharacterSpacing == null) {
            return 0;
        }
        else {
            return this.internalCharacterSpacing;
        }
    }
    set characterSpacing(value) {
        this.internalCharacterSpacing = value;
    }
    /**
     * Gets or sets value that indicates a `size` among the words in the text.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // add a pages to the document
     * let page1 : PdfPage = document.pages.add();
     * // set font
     * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
     * // set brush
     * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
     * //
     * // set the format for string
     * let stringFormat : PdfStringFormat = new PdfStringFormat();
     * // set word spacing
     * stringFormat.wordSpacing = 10;
     * //
     * // draw the text
     * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(10, 10), stringFormat);
     * // save the document
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get wordSpacing() {
        if (typeof this.internalWordSpacing === 'undefined' || this.internalWordSpacing == null) {
            return 0;
        }
        else {
            return this.internalWordSpacing;
        }
    }
    set wordSpacing(value) {
        this.internalWordSpacing = value;
    }
    /**
     * Gets or sets value that indicates the `vertical distance` between the baselines of adjacent lines of text.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // add a pages to the document
     * let page1 : PdfPage = document.pages.add();
     * // set font
     * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
     * // set brush
     * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
     * // set string
     * let text : string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
     * incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati';
     * // set rectangle bounds
     * let rectangle : RectangleF = new RectangleF({x : 0, y : 0}, {width : 300, height : 100})
     * //
     * // set the format for string
     * let stringFormat : PdfStringFormat = new PdfStringFormat();
     * // set line spacing
     * stringFormat.lineSpacing = 10;
     * //
     * // draw the text
     * page1.graphics.drawString(text, font, blackBrush, rectangle, stringFormat);
     * // save the document
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get lineSpacing() {
        if (typeof this.leading === 'undefined' || this.leading == null) {
            return 0;
        }
        else {
            return this.leading;
        }
    }
    set lineSpacing(value) {
        this.leading = value;
    }
    /**
     * Gets or sets a value indicating whether the text is `clipped` or not.
     * @private
     */
    get clipPath() {
        if (typeof this.clip === 'undefined' || this.clip == null) {
            return false;
        }
        else {
            return this.clip;
        }
    }
    set clipPath(value) {
        this.clip = value;
    }
    /**
     * Gets or sets value indicating whether the text is in `subscript or superscript` mode.
     * @private
     */
    get subSuperScript() {
        if (typeof this.pdfSubSuperScript === 'undefined' || this.pdfSubSuperScript == null) {
            return PdfSubSuperScript.None;
        }
        else {
            return this.pdfSubSuperScript;
        }
    }
    set subSuperScript(value) {
        this.pdfSubSuperScript = value;
    }
    /**
     * Gets or sets the `indent` of the first line in the paragraph.
     * @private
     */
    get paragraphIndent() {
        if (typeof this.internalParagraphIndent === 'undefined' || this.internalParagraphIndent == null) {
            return 0;
        }
        else {
            return this.internalParagraphIndent;
        }
    }
    set paragraphIndent(value) {
        this.internalParagraphIndent = value;
        this.firstLineIndent = value;
    }
    /**
     * Gets or sets a value indicating whether [`line limit`].
     * @private
     */
    get lineLimit() {
        return this.internalLineLimit;
    }
    set lineLimit(value) {
        this.internalLineLimit = value;
    }
    /**
     * Gets or sets a value indicating whether [`measure trailing spaces`].
     * @private
     */
    get measureTrailingSpaces() {
        if (typeof this.trailingSpaces === 'undefined' || this.trailingSpaces == null) {
            return false;
        }
        else {
            return this.trailingSpaces;
        }
    }
    set measureTrailingSpaces(value) {
        this.trailingSpaces = value;
    }
    /**
     * Gets or sets a value indicating whether [`no clip`].
     * @private
     */
    get noClip() {
        if (typeof this.isNoClip === 'undefined' || this.isNoClip == null) {
            return false;
        }
        else {
            return this.isNoClip;
        }
    }
    set noClip(value) {
        this.isNoClip = value;
    }
    /**
     * Gets or sets value indicating type of the text `wrapping`.
     * @private
     */
    get wordWrap() {
        // if (typeof this.wrapType === 'undefined' || this.wrapType == null) {
        //     return PdfWordWrapType.Word;
        // } else {
        return this.wordWrapType;
        // }
    }
    set wordWrap(value) {
        this.wordWrapType = value;
    }
    /**
     * Gets or sets the `scaling factor`.
     * @private
     */
    get horizontalScalingFactor() {
        // if (typeof this.scalingFactor === 'undefined' || this.scalingFactor == null) {
        //     return 100;
        // } else {
        return this.scalingFactor;
        // }
    }
    set horizontalScalingFactor(value) {
        if (value <= 0) {
            throw new Error('ArgumentOutOfRangeException:The scaling factor cant be less of equal to zero, ScalingFactor');
        }
        this.scalingFactor = value;
    }
    /**
     * Gets or sets the `indent` of the first line in the text.
     * @private
     */
    get firstLineIndent() {
        if (typeof this.initialLineIndent === 'undefined' || this.initialLineIndent == null) {
            return 0;
        }
        else {
            return this.initialLineIndent;
        }
    }
    set firstLineIndent(value) {
        this.initialLineIndent = value;
    }
    /**
     * `Clones` the object.
     * @private
     */
    //IClonable implementation
    clone() {
        let format = this;
        return format;
    }
}

/**
 * StringTokenizer.ts class for EJ2-PDF
 * Utility class for working with strings.
 * @private
 */
class StringTokenizer {
    // Constructors
    /**
     * Initializes a new instance of the `StringTokenizer` class.
     * @private
     */
    constructor(textValue) {
        /**
         * Current `position`.
         * @private
         */
        this.currentPosition = 0;
        if (textValue == null) {
            throw new Error('ArgumentNullException:text');
        }
        this.text = textValue;
    }
    // Properties
    /**
     * Gets text `length`.
     * @private
     */
    get length() {
        return this.text.length;
    }
    /**
     * Gets or sets the position.
     * @private
     */
    get position() {
        return this.currentPosition;
    }
    set position(value) {
        this.currentPosition = value;
    }
    static getCharsCount(text, symbols) {
        if (typeof symbols === 'string') {
            if (text == null) {
                throw new Error('ArgumentNullException:wholeText');
            }
            let numSymbols = 0;
            let curIndex = 0;
            for (;;) {
                curIndex = text.indexOf(symbols, curIndex);
                if (curIndex === -1) {
                    break;
                }
                else {
                    numSymbols++;
                    curIndex++;
                }
            }
            return numSymbols;
        }
        else {
            if (text == null) {
                throw new Error('ArgumentNullException:text');
            }
            if (symbols == null) {
                throw new Error('ArgumentNullException:symbols');
            }
            let count = 0;
            for (let i = 0, len = text.length; i < len; i++) {
                let ch = text[i];
                if (this.contains(symbols, ch)) {
                    count++;
                }
            }
            return count;
        }
    }
    /**
     * Reads line of the text.
     * @private
     */
    readLine() {
        let pos = this.currentPosition;
        while (pos < this.length) {
            let ch = this.text[pos];
            switch (ch) {
                case '\r':
                case '\n': {
                    let text = this.text.substring(this.currentPosition, pos - this.currentPosition);
                    this.currentPosition = pos + 1;
                    this.currentPosition++;
                    return text;
                }
            }
            pos++;
        }
        // The remaining text.
        if (pos > this.currentPosition) {
            let text2 = this.text.substring(this.currentPosition, pos - this.currentPosition);
            this.currentPosition = pos;
            return text2;
        }
        return null;
    }
    /**
     * Reads line of the text.
     * @private
     */
    peekLine() {
        let pos = this.currentPosition;
        let line = this.readLine();
        this.currentPosition = pos;
        return line;
    }
    /**
     * Reads a word from the text.
     * @private
     */
    readWord() {
        let pos = this.currentPosition;
        while (pos < this.length) {
            let ch = this.text[pos];
            switch (ch) {
                case '\r':
                case '\n':
                    let textValue = this.text.substr(this.currentPosition, pos - this.currentPosition);
                    this.currentPosition = pos + 1;
                    if (((ch === '\r') && (this.currentPosition < this.length)) && (this.text[this.currentPosition] === '\n')) {
                        this.currentPosition++;
                    }
                    return textValue;
                case ' ':
                case '\t': {
                    if (pos === this.currentPosition) {
                        pos++;
                    }
                    let text = this.text.substr(this.currentPosition, pos - this.currentPosition);
                    this.currentPosition = pos;
                    return text;
                }
            }
            pos++;
        }
        // The remaining text.
        if (pos > this.currentPosition) {
            let text2 = this.text.substr(this.currentPosition, pos - this.currentPosition);
            this.currentPosition = pos;
            return text2;
        }
        return null;
    }
    /**
     * Peeks a word from the text.
     * @private
     */
    peekWord() {
        let pos = this.currentPosition;
        let word = this.readWord();
        this.currentPosition = pos;
        return word;
    }
    read(count) {
        if (typeof count === 'undefined') {
            let ch = '0';
            return ch;
        }
        else {
            let builder = '';
            return builder;
        }
    }
    /**
     * Peeks char form the data.
     * @private
     */
    peek() {
        let ch = '0';
        return ch;
    }
    /**
     * Closes a reader.
     * @private
     */
    close() {
        this.text = null;
    }
    //Implementation
    /**
     * Checks whether array contains a symbol.
     * @private
     */
    static contains(array, symbol) {
        let contains = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === symbol) {
                contains = true;
                break;
            }
        }
        return contains;
    }
}
// Constants
/**
 * `Whitespace` symbol.
 * @private
 */
StringTokenizer.whiteSpace = ' ';
/**
 * `tab` symbol.
 * @private
 */
StringTokenizer.tab = '\t';
/**
 * Array of `spaces`.
 * @private
 */
StringTokenizer.spaces = [StringTokenizer.whiteSpace, StringTokenizer.tab];
/**
 * `Pattern` for WhiteSpace.
 * @private
 */
StringTokenizer.whiteSpacePattern = '^[ \t]+$';

/**
 * Class `lay outing the text`.
 */
class PdfStringLayouter {
    // Constructors
    /**
     * Initializes a new instance of the `StringLayouter` class.
     * @private
     */
    constructor() {
        /**
         * Checks whether the x co-ordinate is need to set as client size or not.
         * @hidden
         * @private
         */
        this.isOverloadWithPosition = false;
        //
    }
    layout(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        if (arg4 instanceof RectangleF) {
            this.initialize(arg1, arg2, arg3, arg4, arg5);
            this.isOverloadWithPosition = arg6;
            this.clientSize = arg7;
            let result = this.doLayout();
            this.clear();
            return result;
        }
        else {
            this.initialize(arg1, arg2, arg3, arg4);
            this.isOverloadWithPosition = arg5;
            this.clientSize = arg6;
            let result = this.doLayout();
            this.clear();
            return result;
        }
    }
    initialize(text, font, format, rectSize, pageHeight) {
        if (typeof pageHeight === 'number') {
            if (text == null) {
                throw new Error('ArgumentNullException:text');
            }
            if (font == null) {
                throw new Error('ArgumentNullException:font');
            }
            this.text = text;
            this.font = font;
            this.format = format;
            this.size = new SizeF(rectSize.width, rectSize.height);
            this.rectangle = rectSize;
            this.pageHeight = pageHeight;
            this.reader = new StringTokenizer(text);
        }
        else {
            this.initialize(text, font, format, new RectangleF(new PointF(0, 0), rectSize), 0);
        }
    }
    /**
     * `Clear` all resources.
     * @private
     */
    clear() {
        this.font = null;
        this.format = null;
        this.reader.close();
        this.reader = null;
        this.text = null;
    }
    /**
     * `Layouts` the text.
     * @private
     */
    doLayout() {
        let result = new PdfStringLayoutResult();
        let lineResult = new PdfStringLayoutResult();
        let lines = [];
        let line = this.reader.peekLine();
        let lineIndent = this.getLineIndent(true);
        while (line != null) {
            lineResult = this.layoutLine(line, lineIndent);
            // if (!lineResult.Empty) {
            let numSymbolsInserted = 0;
            /* tslint:disable */
            let returnedValue = this.copyToResult(result, lineResult, lines, /*out*/ numSymbolsInserted);
            /* tslint:enable */
            let success = returnedValue.success;
            numSymbolsInserted = returnedValue.numInserted;
            this.reader.readLine();
            line = this.reader.peekLine();
            lineIndent = this.getLineIndent(false);
        }
        this.finalizeResult(result, lines);
        return result;
    }
    /**
     * Returns `line indent` for the line.
     * @private
     */
    getLineIndent(firstLine) {
        let lineIndent = 0;
        if (this.format != null) {
            lineIndent = (firstLine) ? this.format.firstLineIndent : this.format.paragraphIndent;
            lineIndent = (this.size.width > 0) ? Math.min(this.size.width, lineIndent) : lineIndent;
        }
        return lineIndent;
    }
    /**
     * Calculates `height` of the line.
     * @private
     */
    getLineHeight() {
        let height = this.font.height;
        if (this.format != null && this.format.lineSpacing !== 0) {
            height = this.format.lineSpacing + this.font.height;
        }
        return height;
    }
    /**
     * Calculates `width` of the line.
     * @private
     */
    getLineWidth(line) {
        let width = this.font.getLineWidth(line, this.format);
        return width;
    }
    // tslint:disable
    /**
     * `Layouts` line.
     * @private
     */
    layoutLine(line, lineIndent) {
        let lineResult = new PdfStringLayoutResult();
        lineResult.layoutLineHeight = this.getLineHeight();
        let lines = [];
        let maxWidth = this.size.width;
        let lineWidth = this.getLineWidth(line) + lineIndent;
        let lineType = LineType.FirstParagraphLine;
        let readWord = true;
        // line is in bounds.
        if (maxWidth <= 0 || Math.round(lineWidth) <= Math.round(maxWidth)) {
            this.addToLineResult(lineResult, lines, line, lineWidth, LineType.NewLineBreak | lineType);
        }
        else {
            let builder = '';
            let curLine = '';
            lineWidth = lineIndent;
            let curIndent = lineIndent;
            let reader = new StringTokenizer(line);
            let word = reader.peekWord();
            let isSingleWord = false;
            while (word != null) {
                curLine = curLine + word;
                let curLineWidth = this.getLineWidth(curLine.toString()) + curIndent;
                if (curLineWidth > maxWidth) {
                    if (this.getWrapType() == PdfWordWrapType.None)
                        break;
                    if (this.getWrapType() != PdfWordWrapType.Character || !readWord) {
                        let ln = builder.toString();
                        if (ln.indexOf(' ') === -1) {
                            isSingleWord = true;
                            this.addToLineResult(lineResult, lines, curLine, lineWidth, LineType.LayoutBreak | lineType);
                        }
                        else {
                            this.addToLineResult(lineResult, lines, ln, lineWidth, LineType.LayoutBreak | lineType);
                        }
                        if (this.isOverloadWithPosition) {
                            maxWidth = this.clientSize.width;
                        }
                        curLine = '';
                        builder = '';
                        lineWidth = 0;
                        curIndent = 0;
                        curLineWidth = 0;
                        lineType = LineType.None;
                        if (isSingleWord) {
                            reader.readWord();
                            readWord = false;
                        }
                        word = (readWord) ? word : reader.peekWord();
                        isSingleWord = false;
                        readWord = true;
                    }
                    else {
                        readWord = false;
                        curLine = curLine + builder.toString();
                        word = reader.peek().toString();
                    }
                    continue;
                }
                builder = builder + word;
                lineWidth = curLineWidth;
                if (readWord) {
                    reader.readWord();
                    word = reader.peekWord();
                    isSingleWord = false;
                }
                else {
                    reader.read();
                    word = reader.peek().toString();
                }
            }
            if (builder.length > 0) {
                let ln = builder.toString();
                this.addToLineResult(lineResult, lines, ln, lineWidth, LineType.NewLineBreak | LineType.LastParagraphLine);
            }
            reader.close();
        }
        lineResult.layoutLines = [];
        for (let index = 0; index < lines.length; index++) {
            lineResult.layoutLines.push(lines[index]);
        }
        lines = [];
        return lineResult;
    }
    /**
     * `Adds` line to line result.
     * @private
     */
    addToLineResult(lineResult, lines, line, lineWidth, breakType) {
        let info = new LineInfo();
        info.text = line;
        info.width = lineWidth;
        info.lineType = breakType;
        lines.push(info);
        let size = lineResult.actualSize;
        size.height += this.getLineHeight();
        size.width = Math.max(size.width, lineWidth);
        lineResult.size = size;
    }
    /**
     * `Copies` layout result from line result to entire result. Checks whether we can proceed lay outing or not.
     * @private
     */
    copyToResult(result, lineResult, lines, 
        /*out*/ numInserted) {
        let success = true;
        let allowPartialLines = (this.format != null && !this.format.lineLimit);
        let height = result.actualSize.height;
        let maxHeight = this.size.height;
        if ((this.pageHeight > 0) && (maxHeight + this.rectangle.y > this.pageHeight)) {
            maxHeight = this.rectangle.y - this.pageHeight;
            maxHeight = Math.max(maxHeight, -maxHeight);
        }
        numInserted = 0;
        for (let i = 0, len = lineResult.lines.length; i < len; i++) {
            let expHeight = height + lineResult.lineHeight;
            let info = lineResult.lines[i];
            numInserted += info.text.length;
            info = this.trimLine(info, (lines.length === 0));
            lines.push(info);
            // Update width.
            let size = result.actualSize;
            size.width = Math.max(size.width, info.width);
            result.size = size;
            height = expHeight;
        }
        let size = result.actualSize;
        size.height = height;
        result.size = size;
        return { success: success, numInserted: numInserted };
    }
    /**
     * `Finalizes` final result.
     * @private
     */
    finalizeResult(result, lines) {
        result.layoutLines = [];
        for (let index = 0; index < lines.length; index++) {
            result.layoutLines.push(lines[index]);
        }
        result.layoutLineHeight = this.getLineHeight();
        lines = [];
    }
    /**
     * `Trims` whitespaces at the line.
     * @private
     */
    trimLine(info, firstLine) {
        let line = info.text;
        let lineWidth = info.width;
        // Trim start whitespaces if the line is not a start of the paragraph only.
        // let trimStartSpaces : boolean = ((info.LineType & LineType.FirstParagraphLine) === 0);
        let start = (this.format == null || !this.format.rightToLeft);
        line = (start) ? line.trim() : line.trim();
        // Recalculate line width.
        if (line.length !== info.text.length) {
            lineWidth = this.getLineWidth(line);
            lineWidth += this.getLineIndent(firstLine);
        }
        info.text = line;
        info.width = lineWidth;
        return info;
    }
    /**
     * Returns `wrap` type.
     * @private
     */
    getWrapType() {
        let wrapType = (this.format != null) ? this.format.wordWrap : PdfWordWrapType.Word;
        return wrapType;
    }
}
//Internal declaration
class PdfStringLayoutResult {
    // Properties
    /**
     * Gets the `text` which is not lay outed.
     * @private
     */
    get remainder() {
        return this.textRemainder;
    }
    /**
     * Gets the actual layout text `bounds`.
     * @private
     */
    get actualSize() {
        if (typeof this.size === 'undefined') {
            this.size = new SizeF(0, 0);
        }
        return this.size;
    }
    /**
     * Gets layout `lines` information.
     * @private
     */
    get lines() {
        return this.layoutLines;
    }
    /**
     * Gets the `height` of the line.
     * @private
     */
    get lineHeight() {
        return this.layoutLineHeight;
    }
    /**
     * Gets value that indicates whether any layout text [`empty`].
     * @private
     */
    get empty() {
        return (this.layoutLines == null || this.layoutLines.length === 0);
    }
    /**
     * Gets `number of` the layout lines.
     * @private
     */
    get lineCount() {
        let count = (!this.empty) ? this.layoutLines.length : 0;
        return count;
    }
}
class LineInfo {
    //Properties
    /**
     * Gets the `type` of the line text.
     * @private
     */
    get lineType() {
        return this.type;
    }
    set lineType(value) {
        this.type = value;
    }
    /**
     * Gets the line `text`.
     * @private
     */
    get text() {
        return this.content;
    }
    set text(value) {
        this.content = value;
    }
    /**
     * Gets `width` of the line text.
     * @private
     */
    get width() {
        return this.lineWidth;
    }
    set width(value) {
        this.lineWidth = value;
    }
}
/**
* Break type of the `line`.
* @private
*/
var LineType;
(function (LineType) {
    /**
     * Specifies the type of `None`.
     * @private
     */
    LineType[LineType["None"] = 0] = "None";
    /**
     * Specifies the type of `NewLineBreak`.
     * @private
     */
    LineType[LineType["NewLineBreak"] = 1] = "NewLineBreak";
    /**
     * Specifies the type of `LayoutBreak`.
     * @private
     */
    LineType[LineType["LayoutBreak"] = 2] = "LayoutBreak";
    /**
     * Specifies the type of `FirstParagraphLine`.
     * @private
     */
    LineType[LineType["FirstParagraphLine"] = 4] = "FirstParagraphLine";
    /**
     * Specifies the type of `LastParagraphLine`.
     * @private
     */
    LineType[LineType["LastParagraphLine"] = 8] = "LastParagraphLine";
})(LineType || (LineType = {}));

/**
 * PdfFont.ts class for EJ2-PDF
 */
/**
 * Defines a particular format for text, including font face, size, and style attributes.
 * @private
 */
class PdfFont {
    constructor(size, style) {
        /**
         * `Style` of the font.
         * @private
         */
        this.fontStyle = PdfFontStyle.Regular;
        if (typeof size === 'number' && typeof style === 'undefined') {
            this.fontSize = size;
        }
        else {
            this.fontSize = size;
            this.setStyle(style);
        }
    }
    //Properties
    /**
     * Gets the face name of this Font.
     * @private
     */
    get name() {
        return this.metrics.name;
    }
    /**
     * Gets the size of this font.
     * @private
     */
    get size() {
        return this.fontSize;
    }
    /**
     * Gets the height of the font in points.
     * @private
     */
    get height() {
        return this.metrics.getHeight(null);
    }
    /**
     * Gets the style information for this font.
     * @private
     */
    get style() {
        return this.fontStyle;
    }
    set style(value) {
        this.fontStyle = value;
    }
    /**
     * Gets a value indicating whether this `PdfFont` is `bold`.
     * @private
     */
    get bold() {
        return ((this.style & PdfFontStyle.Bold) > 0);
    }
    /**
     * Gets a value indicating whether this `PdfFont` has the `italic` style applied.
     * @private
     */
    get italic() {
        return ((this.style & PdfFontStyle.Italic) > 0);
    }
    /**
     * Gets a value indicating whether this `PdfFont` is `strikeout`.
     * @private
     */
    get strikeout() {
        return ((this.style & PdfFontStyle.Strikeout) > 0);
    }
    /**
     * Gets a value indicating whether this `PdfFont` is `underline`.
     * @private
     */
    get underline() {
        return ((this.style & PdfFontStyle.Underline) > 0);
    }
    /**
     * Gets or sets the `metrics` for this font.
     * @private
     */
    get metrics() {
        return this.fontMetrics;
    }
    set metrics(value) {
        this.fontMetrics = value;
    }
    // /**
    //  * Gets and Sets the font `internals`.
    //  * @private
    //  */
    // public get fontInternal() : IPdfPrimitive {
    //     return this.pdfFontInternals;
    // }
    // public set fontInternal(value : IPdfPrimitive) {
    //     this.pdfFontInternals = value;
    // }
    //IPdfWrapper Members
    /**
     * Gets the `element` representing the font.
     * @private
     */
    get element() {
        return this.pdfFontInternals;
    }
    measureString(text, arg2, arg3, arg4, arg5) {
        if (typeof text === 'string' && typeof arg2 === 'undefined') {
            return this.measureString(text, null);
        }
        else if (typeof text === 'string' && (arg2 instanceof PdfStringFormat || arg2 == null) && typeof arg3 === 'undefined' && typeof arg4 === 'undefined') {
            let temparg2 = arg2;
            let charactersFitted = 0;
            let linesFilled = 0;
            return this.measureString(text, temparg2, charactersFitted, linesFilled);
        }
        else if (typeof text === 'string' && (arg2 instanceof PdfStringFormat || arg2 == null) && typeof arg3 === 'number' && typeof arg4 === 'number') {
            let temparg2 = arg2;
            return this.measureString(text, 0, temparg2, arg3, arg4);
            // } else if (typeof text === 'string' && typeof arg2 === 'number' && typeof arg3 === 'undefined') {
            //     return this.measureString(text, arg2, null);
            // } else if (typeof text === 'string' && typeof arg2 === 'number' && (arg3 instanceof PdfStringFormat || arg3 == null) && typeof arg4 === 'undefined' && typeof arg5 === 'undefined') {
            //     let temparg3 : PdfStringFormat = arg3 as PdfStringFormat;
            //     let charactersFitted : number = 0;
            //     let linesFilled : number = 0;
            //     return this.measureString(text, arg2, temparg3, charactersFitted, linesFilled);
        }
        else if (typeof text === 'string' && typeof arg2 === 'number' && (arg3 instanceof PdfStringFormat || arg3 == null) && typeof arg4 === 'number' && typeof arg5 === 'number') {
            let layoutArea = new SizeF(arg2, 0);
            let temparg3 = arg3;
            return this.measureString(text, layoutArea, temparg3, arg4, arg5);
            // } else if (typeof text === 'string' && arg2 instanceof SizeF && typeof arg3 === 'undefined') {
            //     return this.measureString(text, arg2, null);
            // } else if (typeof text === 'string' && arg2 instanceof SizeF && (arg3 instanceof PdfStringFormat || arg3 == null) && typeof arg4 === 'undefined' && typeof arg5 === 'undefined') {
            //     let temparg3 : PdfStringFormat = arg3 as PdfStringFormat;
            //     let charactersFitted : number = 0;
            //     let linesFilled : number = 0;
            //     return this.measureString(text, arg2, temparg3, charactersFitted, linesFilled);
        }
        else {
            if (text == null) {
                throw Error(`ArgumentNullException("text")`);
            }
            let temparg2 = arg2;
            let temparg3 = arg3;
            let layouter = new PdfStringLayouter();
            let result = layouter.layout(text, this, temparg3, temparg2, false, new SizeF(0, 0));
            // arg4 = (result.Remainder == null) ? text.length : text.length - result.Remainder.length;
            arg4 = text.length;
            arg5 = (result.empty) ? 0 : result.lines.length;
            return result.actualSize;
        }
    }
    /* tslint:enable */
    //IPdfCache Members
    /**
     * `Checks` whether the object is similar to another object.
     * @private
     */
    equalsTo(obj) {
        let result = this.equalsToFont(obj);
        return result;
    }
    /**
     * Returns `internals` of the object.
     * @private
     */
    getInternals() {
        return this.pdfFontInternals;
    }
    /**
     * Sets `internals` to the object.
     * @private
     */
    setInternals(internals) {
        if (internals == null) {
            throw new Error('ArgumentNullException:internals');
        }
        this.pdfFontInternals = internals;
    }
    /**
     * Sets the `style` of the font.
     * @private
     */
    setStyle(style) {
        this.fontStyle = style;
    }
    /**
     * Applies `settings` to the default line width.
     * @private
     */
    applyFormatSettings(line, format, width) {
        // if (line == null) {
        //     throw new Error(`ArgumentNullException:line`);
        // }
        let realWidth = width;
        if (format != null && width > 0) {
            // Space among characters is not default.
            if (format.characterSpacing !== 0) {
                realWidth += (line.length - 1) * format.characterSpacing;
            }
            // Space among words is not default.
            if (format.wordSpacing !== 0) {
                let symbols = StringTokenizer.spaces;
                let whitespacesCount = StringTokenizer.getCharsCount(line, symbols);
                realWidth += whitespacesCount * format.wordSpacing;
            }
        }
        return realWidth;
    }
}
//Constants
/**
 * `Multiplier` of the symbol width.
 * @default 0.001
 * @private
 */
PdfFont.charSizeMultiplier = 0.001;
/**
 * `Synchronization` object.
 * @private
 */
PdfFont.syncObject = new Object();

/**
 * Used to `write a string` into output file.
 * @private
 */
class PdfWriter {
    /**
     * Initialize an instance of `PdfWriter` class.
     * @private
     */
    constructor(stream) {
        this.streamWriter = stream;
    }
    //properties
    /**
     * Gets and Sets the `document`.
     * @private
     */
    get document() {
        return this.pdfDocument;
    }
    set document(value) {
        this.pdfDocument = value;
    }
    /**
     * Gets the `position`.
     * @private
     */
    get position() {
        return this.streamWriter.buffer.size;
    }
    /**
     * Gets  the `length` of the stream'.
     * @private
     */
    get length() {
        return this.streamWriter.buffer.size;
    }
    /**
     * Gets the `stream`.
     * @private
     */
    get stream() {
        let result = this.streamWriter;
        return result;
    }
    //public Methods
    /**
     * `Writes the specified data`.
     * @private
     */
    write(overload) {
        let tempOverload = overload;
        this.streamWriter.write(tempOverload);
    }
}

/**
 * public Enum for `CompositeFontType`.
 * @private
 */
var ObjectStatus;
(function (ObjectStatus) {
    /**
     * Specifies the type of `None`.
     * @private
     */
    ObjectStatus[ObjectStatus["None"] = 0] = "None";
    /**
     * Specifies the type of `Registered`.
     * @private
     */
    ObjectStatus[ObjectStatus["Registered"] = 1] = "Registered";
})(ObjectStatus || (ObjectStatus = {}));

/**
 * PdfMainObjectCollection.ts class for EJ2-PDF
 */
/**
 * The collection of all `objects` within a PDF document.
 * @private
 */
class PdfMainObjectCollection {
    constructor() {
        //Fields
        /**
         * The collection of the `indirect objects`.
         * @default []
         * @private
         */
        this.objectCollections = [];
        /**
         * The collection of the `Indirect objects`.
         * @default new Dictionary<number, ObjectInfo>()
         * @private
         */
        this.mainObjectCollection = new Dictionary();
        /**
         * The collection of `primitive objects`.
         * @private
         */
        this.primitiveObjectCollection = new Dictionary();
    }
    //Properties
    /**
     * Gets the `count`.
     * @private
     */
    get count() {
        return this.objectCollections.length;
    }
    /**
     * Gets the value of `ObjectInfo` from object collection.
     * @private
     */
    items(index) {
        return this.objectCollections[index];
    }
    //Methods
    /**
     * Specifies the value of `IsNew`.
     * @private
     */
    get outIsNew() {
        return this.isNew;
    }
    /**
     * `Adds` the specified element.
     * @private
     */
    add(element) {
        let objInfo = new ObjectInfo(element);
        this.objectCollections.push(objInfo);
        if (!this.primitiveObjectCollection.containsKey(element)) {
            this.primitiveObjectCollection.setValue(element, this.objectCollections.length - 1);
        }
        element.position = this.index = this.objectCollections.length - 1;
        element.status = ObjectStatus.Registered;
    }
    /**
     * `Looks` through the collection for the object specified.
     * @private
     */
    lookFor(obj) {
        let index = -1;
        if (obj.position !== -1) {
            return obj.position;
        }
        if (this.primitiveObjectCollection.containsKey(obj) && this.count === this.primitiveObjectCollection.size()) {
            index = this.primitiveObjectCollection.getValue(obj);
        }
        else {
            for (let i = this.count - 1; i >= 0; i--) {
                let oi = this.objectCollections[i];
                if (oi.object === obj) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    /**
     * Gets the `reference of the object`.
     * @private
     */
    getReference(index, isNew) {
        this.index = this.lookFor(index);
        let reference;
        this.isNew = false;
        let oi = this.objectCollections[this.index];
        reference = oi.reference;
        let obj = { reference: reference, wasNew: isNew };
        return obj;
    }
    /**
     * Tries to set the `reference to the object`.
     * @private
     */
    trySetReference(obj, reference, found) {
        let result = true;
        found = true;
        this.index = this.lookFor(obj);
        let oi = this.objectCollections[this.index];
        oi.setReference(reference);
        return result;
    }
    destroy() {
        for (let obj of this.objectCollections) {
            if (obj !== undefined) {
                obj.pdfObject.position = -1;
                obj.pdfObject.isSaving = undefined;
                obj.pdfObject.objectCollectionIndex = undefined;
                obj.pdfObject.position = undefined;
            }
        }
        this.objectCollections = [];
        this.mainObjectCollection = new Dictionary();
        this.primitiveObjectCollection = new Dictionary();
    }
}
class ObjectInfo {
    constructor(obj, reference) {
        this.pdfObject = obj;
        this.pdfReference = reference;
    }
    //Properties
    /**
     * Gets the `object`.
     * @private
     */
    get object() {
        return this.pdfObject;
    }
    set object(value) {
        this.pdfObject = value;
    }
    /**
     * Gets the `reference`.
     * @private
     */
    get reference() {
        return this.pdfReference;
    }
    /**
     * Sets the `reference`.
     * @private
     */
    setReference(reference) {
        this.pdfReference = reference;
    }
}

/**
 * `PdfDocumentBase` class represent common properties of PdfDocument classes.
 * @private
 */
class PdfDocumentBase {
    constructor(document) {
        /**
         * If the stream is copied,  then it specifies true.
         * @private
         */
        this.isStreamCopied = false;
        if (document instanceof PdfDocument) {
            this.document = document;
        }
    }
    //Prpperties
    /**
     * Gets the `PDF objects` collection, which stores all objects and references to it..
     * @private
     */
    get pdfObjects() {
        return this.objects;
    }
    /**
     * Gets the `cross-reference` table.
     * @private
     */
    get crossTable() {
        return this.pdfCrossTable;
    }
    /**
     * Gets or sets the current saving `object number`.
     * @private
     */
    get currentSavingObj() {
        return this.currentSavingObject;
    }
    set currentSavingObj(value) {
        this.currentSavingObject = value;
    }
    /**
     * Gets the PDF document `catalog`.
     * @private
     */
    get catalog() {
        return this.pdfCatalog;
    }
    set catalog(value) {
        this.pdfCatalog = value;
    }
    //Public methods
    /**
     * Sets the `main object collection`.
     * @private
     */
    setMainObjectCollection(mainObjectCollection) {
        this.objects = mainObjectCollection;
    }
    /**
     * Sets the `cross table`.
     * @private
     */
    setCrossTable(cTable) {
        this.pdfCrossTable = cTable;
    }
    /**
     * Sets the `catalog`.
     * @private
     */
    setCatalog(catalog) {
        this.pdfCatalog = catalog;
    }
    save(filename) {
        let encoding = new Encoding(true);
        let SW = new StreamWriter(encoding);
        if (typeof filename === 'undefined') {
            let encoding = new Encoding(true);
            let SW = new StreamWriter(encoding);
            return new Promise((resolve, reject) => {
                /* tslint:disable-next-line:no-any */
                let obj = {};
                obj.blobData = new Blob([this.document.docSave(SW, true)], { type: 'application/pdf' });
                resolve(obj);
            });
        }
        else {
            this.document.docSave(SW, filename, true);
        }
    }
    /**
     * `Clone` of parent object - PdfDocument.
     * @private
     */
    clone() {
        return this.document;
    }
}

/**
 * public Enum for `ObjectType`.
 * @private
 */
var ObjectType;
(function (ObjectType) {
    /**
     * Specifies the type of `Free`.
     * @private
     */
    ObjectType[ObjectType["Free"] = 0] = "Free";
    /**
     * Specifies the type of `Normal`.
     * @private
     */
    ObjectType[ObjectType["Normal"] = 1] = "Normal";
    /**
     * Specifies the type of `Packed`.
     * @private
     */
    ObjectType[ObjectType["Packed"] = 2] = "Packed";
})(ObjectType || (ObjectType = {}));

/**
 * PdfCatalog.ts class for EJ2-PDF
 */
/**
 * `PdfCatalog` class represents internal catalog of the Pdf document.
 * @private
 */
class PdfCatalog extends PdfDictionary {
    //constructor
    /**
     * Initializes a new instance of the `PdfCatalog` class.
     * @private
     */
    constructor() {
        super();
        //fields
        /**
         * Internal variable to store collection of `sections`.
         * @default null
         * @private
         */
        this.sections = null;
        /**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @private
         */
        this.tempDictionaryProperties = new DictionaryProperties();
        this.items.setValue(new DictionaryProperties().type, new PdfName('Catalog'));
    }
    //Properties
    /**
     * Gets or sets the sections, which contain `pages`.
     * @private
     */
    get pages() {
        return this.sections;
    }
    set pages(value) {
        let dictionary = value.element;
        // if (this.sections !== value) {
        //     this.sections = value;
        //     this.Items.setValue(this.tempDictionaryProperties.pages, new PdfReferenceHolder(value));
        // }
        this.sections = value;
        this.items.setValue(this.tempDictionaryProperties.pages, new PdfReferenceHolder(value));
    }
}

/**
 * `PdfCrossTable` is responsible for intermediate level parsing
 * and savingof a PDF document.
 * @private
 */
class PdfCrossTable {
    constructor() {
        /**
         * The modified `objects` that should be saved.
         * @private
         */
        this.objects = new Dictionary();
        /**
         * Holds `maximal generation number` or offset to object.
         * @default 0
         * @private
         */
        this.maxGenNumIndex = 0;
        /**
         * The `number of the objects`.
         * @default 0
         * @private
         */
        this.objectCount = 0;
        /**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @default new PdfDictionaryProperties()
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
    }
    //Properties
    /**
     * Gets or sets if the document `is merged`.
     * @private
     */
    get isMerging() {
        return this.merging;
    }
    set isMerging(value) {
        this.merging = value;
    }
    /**
     * Gets the `trailer`.
     * @private
     */
    get trailer() {
        if (this.internalTrailer == null) {
            this.internalTrailer = new PdfStream();
        }
        return this.internalTrailer;
    }
    /**
     * Gets or sets the main `PdfDocument` class instance.
     * @private
     */
    get document() {
        return this.pdfDocument;
    }
    set document(value) {
        this.pdfDocument = value;
        this.items = this.pdfDocument.pdfObjects;
    }
    /**
     * Gets the catched `PDF object` main collection.
     * @private
     */
    get pdfObjects() {
        return this.items;
    }
    /**
     * Gets the `object collection`.
     * @private
     */
    get objectCollection() {
        return this.pdfDocument.pdfObjects;
    }
    /**
     * Gets or sets the `number of the objects` within the document.
     * @private
     */
    get count() {
        return this.objectCount;
    }
    set count(value) {
        this.objectCount = value;
    }
    /**
     * Returns `next available object number`.
     * @private
     */
    get nextObjNumber() {
        this.count = this.count + 1;
        return this.count;
    }
    save(writer, filename) {
        this.saveHead(writer);
        this.mappedReferences = null;
        this.objects.clear();
        this.markTrailerReferences();
        this.saveObjects(writer);
        let saveCount = this.count;
        let xrefPos = writer.position;
        this.registerObject(0, new PdfReference(0, -1), true);
        let prevXRef = 0;
        writer.write(Operators.xref);
        writer.write(Operators.newLine);
        this.saveSections(writer);
        this.saveTrailer(writer, this.count, prevXRef);
        this.saveTheEndess(writer, xrefPos);
        this.count = saveCount;
        for (let i = 0; i < this.objectCollection.count; ++i) {
            let oi = this.objectCollection.items(i);
            oi.object.isSaving = false;
        }
        if (typeof filename === 'undefined') {
            return writer.stream.buffer;
        }
        else {
            writer.stream.save(filename);
        }
    }
    /**
     * `Saves the endess` of the file.
     * @private
     */
    saveTheEndess(writer, xrefPos) {
        writer.write(Operators.newLine + Operators.startxref + Operators.newLine);
        writer.write(xrefPos.toString() + Operators.newLine);
        writer.write(Operators.eof + Operators.newLine);
    }
    /**
     * `Saves the new trailer` dictionary.
     * @private
     */
    saveTrailer(writer, count, prevXRef) {
        writer.write(Operators.trailer + Operators.newLine);
        // Save the dictionary.
        let trailer = this.trailer;
        trailer.items.setValue(this.dictionaryProperties.size, new PdfNumber(this.objectCount + 1));
        trailer = new PdfDictionary(trailer); // Make it real dictionary.
        trailer.setEncrypt(false);
        trailer.save(writer);
    }
    /**
     * `Saves the xref section`.
     * @private
     */
    saveSections(writer) {
        let objectNum = 0;
        let count = 0;
        do {
            count = this.prepareSubsection(objectNum);
            this.saveSubsection(writer, objectNum, count);
            objectNum += count;
        } while (count !== 0);
    }
    /**
     * `Saves a subsection`.
     * @private
     */
    saveSubsection(writer, objectNum, count) {
        if (count <= 0 || objectNum >= this.count) {
            return;
        }
        writer.write(objectNum + ' ' + (count + 1) + Operators.newLine);
        for (let i = objectNum; i <= objectNum + count; ++i) {
            let obj = this.objects.getValue(i);
            let str = '';
            if (obj.type === ObjectType.Free) {
                str = this.getItem(obj.offset, 65535, true);
            }
            else {
                str = this.getItem(obj.offset, obj.generation, false);
            }
            writer.write(str);
        }
    }
    /**
     * Generates string for `xref table item`.
     * @private
     */
    getItem(offset, genNumber, isFree) {
        let returnString = '';
        let addOffsetLength = 10 - offset.toString().length;
        if (genNumber <= 0) {
            genNumber = 0;
        }
        let addGenNumberLength = (5 - genNumber.toString().length) <= 0 ? 0 : (5 - genNumber.toString().length);
        for (let index = 0; index < addOffsetLength; index++) {
            returnString = returnString + '0';
        }
        returnString = returnString + offset.toString() + ' ';
        for (let index = 0; index < addGenNumberLength; index++) {
            returnString = returnString + '0';
        }
        returnString = returnString + genNumber.toString() + ' ';
        returnString = returnString + ((isFree) ? Operators.f : Operators.n) + Operators.newLine;
        return returnString;
    }
    /**
     * `Prepares a subsection` of the current section within the cross-reference table.
     * @private
     */
    prepareSubsection(objectNum) {
        let count = 0;
        let i;
        let total = this.count;
        for (let k = 0; k < this.document.pdfObjects.count; k++) {
            let reference = this.document.pdfObjects.items(k).reference;
            let refString = reference.toString();
            let refArray = refString.split(' ');
        }
        if (objectNum >= total) {
            return count;
        }
        // search for first changed indirect object.
        for (i = objectNum; i < total; ++i) {
            break;
        }
        objectNum = i;
        // look up for all indirect objects in one subsection.
        for (; i < total; ++i) {
            ++count;
        }
        return count;
    }
    /**
     * `Marks the trailer references` being saved.
     * @private
     */
    markTrailerReferences() {
        let keys = this.trailer.items.keys();
        let values = this.trailer.items.values();
    }
    /**
     * `Saves the head`.
     * @private
     */
    saveHead(writer) {
        let version = this.generateFileVersion(writer.document);
        writer.write('%PDF-' + version);
        writer.write(Operators.newLine);
    }
    /**
     * Generates the `version` of the file.
     * @private
     */
    generateFileVersion(document) {
        let iVersion = 4;
        let version = '1.' + iVersion.toString();
        return version;
    }
    getReference(obj, bNew) {
        if (typeof bNew === 'undefined') {
            let wasNew = false;
            return this.getReference(obj, wasNew);
        }
        else {
            //code splitted for reducing lines of code exceeds 100.
            return this.getSubReference(obj, bNew);
        }
    }
    /**
     * Retrieves the `reference` of the object given.
     * @private
     */
    getSubReference(obj, bNew) {
        let isNew = false;
        let wasNew;
        let reference = null;
        // if (obj.IsSaving) {
        if (this.items.count > 0 && obj.objectCollectionIndex > 0 && this.items.count > obj.objectCollectionIndex - 1) {
            let tempObj = this.document.pdfObjects.getReference(obj, wasNew);
            reference = tempObj.reference;
            wasNew = tempObj.wasNew;
        }
        if (reference == null) {
            if (obj.status === ObjectStatus.Registered) {
                wasNew = false;
            }
            else {
                wasNew = true;
            }
        }
        else {
            wasNew = false;
        }
        // need to add mapped reference code
        if (reference == null) {
            let objnumber = this.nextObjNumber;
            reference = new PdfReference(objnumber, 0);
            let found;
            if (wasNew) {
                this.document.pdfObjects.add(obj);
                this.document.pdfObjects.trySetReference(obj, reference, found);
                let tempIndex = this.document.pdfObjects.count - 1;
                let tempkey = this.document.pdfObjects.objectCollections[tempIndex].reference.objNumber;
                let tempvalue = this.document.pdfObjects.objectCollections[this.document.pdfObjects.count - 1];
                this.document.pdfObjects.mainObjectCollection.setValue(tempkey, tempvalue);
                obj.position = -1;
            }
            else {
                this.document.pdfObjects.trySetReference(obj, reference, found);
            }
            obj.objectCollectionIndex = reference.objNumber;
            obj.status = ObjectStatus.None;
            isNew = true;
        }
        bNew = isNew || this.bForceNew;
        return reference;
    }
    /**
     * `Saves all objects` in the collection.
     * @private
     */
    saveObjects(writer) {
        let objectCollection = this.objectCollection;
        for (let i = 0; i < objectCollection.count; ++i) {
            let oi = objectCollection.items(i);
            let obj = oi.object;
            obj.isSaving = true;
            this.saveIndirectObject(obj, writer);
        }
    }
    /**
     * `Saves indirect object`.
     * @private
     */
    saveIndirectObject(obj, writer) {
        let reference = this.getReference(obj);
        if (obj instanceof PdfCatalog) {
            this.trailer.items.setValue(this.dictionaryProperties.root, reference);
        }
        // NOTE :  This is needed for correct string objects encryption.
        this.pdfDocument.currentSavingObj = reference;
        let tempArchive = false;
        tempArchive = obj.getArchive();
        this.registerObject(writer.position, reference);
        this.doSaveObject(obj, reference, writer);
    }
    /**
     * Performs `real saving` of the save object.
     * @private
     */
    doSaveObject(obj, reference, writer) {
        let correctPosition = writer.length;
        writer.write(reference.objNumber.toString());
        writer.write(Operators.whiteSpace);
        writer.write(reference.genNumber.toString());
        writer.write(Operators.whiteSpace);
        writer.write(Operators.obj);
        writer.write(Operators.newLine);
        obj.save(writer);
        let stream = writer.stream;
        writer.write(Operators.endObj);
        writer.write(Operators.newLine);
    }
    registerObject(offset, reference, free) {
        if (typeof free === 'boolean') {
            // Register the object by its number.
            this.objects.setValue(reference.objNumber, new RegisteredObject(offset, reference, free));
            this.maxGenNumIndex = Math.max(this.maxGenNumIndex, reference.genNumber);
        }
        else if (typeof free === 'undefined') {
            // Register the object by its number.
            this.objects.setValue(reference.objNumber, new RegisteredObject(offset, reference));
            this.maxGenNumIndex = Math.max(this.maxGenNumIndex, reference.genNumber);
        }
    }
    /**
     * `Dereferences` the specified primitive object.
     * @private
     */
    static dereference(obj) {
        let rh = obj;
        if (rh != null) {
            obj = rh.object;
        }
        return obj;
    }
}
class RegisteredObject {
    //Properties
    /**
     * Gets the `object number`.
     * @private
     */
    get objectNumber() {
        return this.object;
    }
    /**
     * Gets the `offset`.
     * @private
     */
    get offset() {
        let result;
        result = this.offsetNumber;
        return result;
    }
    constructor(offset, reference, free) {
        if (typeof free === 'undefined') {
            let tempOffset = offset;
            this.offsetNumber = tempOffset;
            let tempReference = reference;
            this.generation = tempReference.genNumber;
            this.object = tempReference.objNumber;
            this.type = ObjectType.Normal;
        }
        else {
            let tempOffset = offset;
            let tempReference = reference;
            this.constructor(tempOffset, tempReference);
            this.type = ObjectType.Free;
        }
    }
}

/**
 * PdfPageSize.ts class for EJ2-PDF
 */
/**
 * Represents information about various predefined `page sizes`.
 */
class PdfPageSize {
    //constructor
    /**
     * Initialize an instance for `PdfPageSize` class.
     * @private
     */
    constructor() {
        // 
    }
}
/**
 * Specifies the size of `letter`.
 * @private
 */
PdfPageSize.letter = new SizeF(612, 792);
/**
 * Specifies the size of `note`.
 * @private
 */
PdfPageSize.note = new SizeF(540, 720);
/**
 * Specifies the size of `legal`.
 * @private
 */
PdfPageSize.legal = new SizeF(612, 1008);
/**
 * Specifies the size of `a0`.
 * @private
 */
PdfPageSize.a0 = new SizeF(2380, 3368);
/**
 * Specifies the size of `a1`.
 * @private
 */
PdfPageSize.a1 = new SizeF(1684, 2380);
/**
 * Specifies the size of `a2`.
 * @private
 */
PdfPageSize.a2 = new SizeF(1190, 1684);
/**
 * Specifies the size of `a3`.
 * @private
 */
PdfPageSize.a3 = new SizeF(842, 1190);
/**
 * Specifies the size of `a4`.
 * @private
 */
PdfPageSize.a4 = new SizeF(595, 842);
/**
 * Specifies the size of `a5`.
 * @private
 */
PdfPageSize.a5 = new SizeF(421, 595);
/**
 * Specifies the size of `a6`.
 * @private
 */
PdfPageSize.a6 = new SizeF(297, 421);
/**
 * Specifies the size of `a7`.
 * @private
 */
PdfPageSize.a7 = new SizeF(210, 297);
/**
 * Specifies the size of `a8`.
 * @private
 */
PdfPageSize.a8 = new SizeF(148, 210);
/**
 * Specifies the size of `a9`.
 * @private
 */
PdfPageSize.a9 = new SizeF(105, 148);
/**
 * Specifies the size of `a10`.
 * @private
 */
PdfPageSize.a10 = new SizeF(74, 105);
/**
 * Specifies the size of `b0`.
 * @private
 */
PdfPageSize.b0 = new SizeF(2836, 4008);
/**
 * Specifies the size of `b1`.
 * @private
 */
PdfPageSize.b1 = new SizeF(2004, 2836);
/**
 * Specifies the size of `b2`.
 * @private
 */
PdfPageSize.b2 = new SizeF(1418, 2004);
/**
 * Specifies the size of `b3`.
 * @private
 */
PdfPageSize.b3 = new SizeF(1002, 1418);
/**
 * Specifies the size of `b4`.
 * @private
 */
PdfPageSize.b4 = new SizeF(709, 1002);
/**
 * Specifies the size of `b5`.
 * @private
 */
PdfPageSize.b5 = new SizeF(501, 709);
/**
 * Specifies the size of `archE`.
 * @private
 */
PdfPageSize.archE = new SizeF(2592, 3456);
/**
 * Specifies the size of `archD`.
 * @private
 */
PdfPageSize.archD = new SizeF(1728, 2592);
/**
 * Specifies the size of `archC`.
 * @private
 */
PdfPageSize.archC = new SizeF(1296, 1728);
/**
 * Specifies the size of `archB`.
 * @private
 */
PdfPageSize.archB = new SizeF(864, 1296);
/**
 * Specifies the size of `archA`.
 * @private
 */
PdfPageSize.archA = new SizeF(648, 864);
/**
 * Specifies the size of `flsa`.
 * @private
 */
PdfPageSize.flsa = new SizeF(612, 936);
/**
 * Specifies the size of `halfLetter`.
 * @private
 */
PdfPageSize.halfLetter = new SizeF(396, 612);
/**
 * Specifies the size of `letter11x17`.
 * @private
 */
PdfPageSize.letter11x17 = new SizeF(792, 1224);
/**
 * Specifies the size of `ledger`.
 * @private
 */
PdfPageSize.ledger = new SizeF(1224, 792);

/**
 * public Enum for `PdfPageOrientation`.
 * @private
 */
var PdfPageOrientation;
(function (PdfPageOrientation) {
    /**
     * Specifies the type of `Portrait`.
     * @private
     */
    PdfPageOrientation[PdfPageOrientation["Portrait"] = 0] = "Portrait";
    /**
     * Specifies the type of `Landscape`.
     * @private
     */
    PdfPageOrientation[PdfPageOrientation["Landscape"] = 1] = "Landscape";
})(PdfPageOrientation || (PdfPageOrientation = {}));
/**
 * public Enum for `PdfPageRotateAngle`.
 * @private
 */
var PdfPageRotateAngle;
(function (PdfPageRotateAngle) {
    /**
     * Specifies the type of `RotateAngle0`.
     * @private
     */
    PdfPageRotateAngle[PdfPageRotateAngle["RotateAngle0"] = 0] = "RotateAngle0";
    /**
     * Specifies the type of `RotateAngle90`.
     * @private
     */
    PdfPageRotateAngle[PdfPageRotateAngle["RotateAngle90"] = 1] = "RotateAngle90";
    /**
     * Specifies the type of `RotateAngle180`.
     * @private
     */
    PdfPageRotateAngle[PdfPageRotateAngle["RotateAngle180"] = 2] = "RotateAngle180";
    /**
     * Specifies the type of `RotateAngle270`.
     * @private
     */
    PdfPageRotateAngle[PdfPageRotateAngle["RotateAngle270"] = 3] = "RotateAngle270";
})(PdfPageRotateAngle || (PdfPageRotateAngle = {}));
/**
 * public Enum for `PdfNumberStyle`.
 * @private
 */
var PdfNumberStyle;
(function (PdfNumberStyle) {
    /**
     * Specifies the type of `None`.
     * @private
     */
    PdfNumberStyle[PdfNumberStyle["None"] = 0] = "None";
    /**
     * Specifies the type of `Numeric`.
     * @private
     */
    PdfNumberStyle[PdfNumberStyle["Numeric"] = 1] = "Numeric";
    /**
     * Specifies the type of `LowerLatin`.
     * @private
     */
    PdfNumberStyle[PdfNumberStyle["LowerLatin"] = 2] = "LowerLatin";
    /**
     * Specifies the type of `LowerRoman`.
     * @private
     */
    PdfNumberStyle[PdfNumberStyle["LowerRoman"] = 3] = "LowerRoman";
    /**
     * Specifies the type of `UpperLatin`.
     * @private
     */
    PdfNumberStyle[PdfNumberStyle["UpperLatin"] = 4] = "UpperLatin";
    /**
     * Specifies the type of `UpperRoman`.
     * @private
     */
    PdfNumberStyle[PdfNumberStyle["UpperRoman"] = 5] = "UpperRoman";
})(PdfNumberStyle || (PdfNumberStyle = {}));
/**
 * public Enum for `PdfDockStyle`.
 * @private
 */
var PdfDockStyle;
(function (PdfDockStyle) {
    /**
     * Specifies the type of `None`.
     * @private
     */
    PdfDockStyle[PdfDockStyle["None"] = 0] = "None";
    /**
     * Specifies the type of `Bottom`.
     * @private
     */
    PdfDockStyle[PdfDockStyle["Bottom"] = 1] = "Bottom";
    /**
     * Specifies the type of `Top`.
     * @private
     */
    PdfDockStyle[PdfDockStyle["Top"] = 2] = "Top";
    /**
     * Specifies the type of `Left`.
     * @private
     */
    PdfDockStyle[PdfDockStyle["Left"] = 3] = "Left";
    /**
     * Specifies the type of `Right`.
     * @private
     */
    PdfDockStyle[PdfDockStyle["Right"] = 4] = "Right";
    /**
     * Specifies the type of `Fill`.
     * @private
     */
    PdfDockStyle[PdfDockStyle["Fill"] = 5] = "Fill";
})(PdfDockStyle || (PdfDockStyle = {}));
/**
 * public Enum for `PdfAlignmentStyle`.
 * @private
 */
var PdfAlignmentStyle;
(function (PdfAlignmentStyle) {
    /**
     * Specifies the type of `None`.
     * @private
     */
    PdfAlignmentStyle[PdfAlignmentStyle["None"] = 0] = "None";
    /**
     * Specifies the type of `TopLeft`.
     * @private
     */
    PdfAlignmentStyle[PdfAlignmentStyle["TopLeft"] = 1] = "TopLeft";
    /**
     * Specifies the type of `TopCenter`.
     * @private
     */
    PdfAlignmentStyle[PdfAlignmentStyle["TopCenter"] = 2] = "TopCenter";
    /**
     * Specifies the type of `TopRight`.
     * @private
     */
    PdfAlignmentStyle[PdfAlignmentStyle["TopRight"] = 3] = "TopRight";
    /**
     * Specifies the type of `MiddleLeft`.
     * @private
     */
    PdfAlignmentStyle[PdfAlignmentStyle["MiddleLeft"] = 4] = "MiddleLeft";
    /**
     * Specifies the type of `MiddleCenter`.
     * @private
     */
    PdfAlignmentStyle[PdfAlignmentStyle["MiddleCenter"] = 5] = "MiddleCenter";
    /**
     * Specifies the type of `MiddleRight`.
     * @private
     */
    PdfAlignmentStyle[PdfAlignmentStyle["MiddleRight"] = 6] = "MiddleRight";
    /**
     * Specifies the type of `BottomLeft`.
     * @private
     */
    PdfAlignmentStyle[PdfAlignmentStyle["BottomLeft"] = 7] = "BottomLeft";
    /**
     * Specifies the type of `BottomCenter`.
     * @private
     */
    PdfAlignmentStyle[PdfAlignmentStyle["BottomCenter"] = 8] = "BottomCenter";
    /**
     * Specifies the type of `BottomRight`.
     * @private
     */
    PdfAlignmentStyle[PdfAlignmentStyle["BottomRight"] = 9] = "BottomRight";
})(PdfAlignmentStyle || (PdfAlignmentStyle = {}));
/**
 * public Enum for `TemplateType`.
 * @private
 */
var TemplateType;
(function (TemplateType) {
    /**
     * Specifies the type of `None`.
     * @private
     */
    TemplateType[TemplateType["None"] = 0] = "None";
    /**
     * Specifies the type of `Top`.
     * @private
     */
    TemplateType[TemplateType["Top"] = 1] = "Top";
    /**
     * Specifies the type of `Bottom`.
     * @private
     */
    TemplateType[TemplateType["Bottom"] = 2] = "Bottom";
    /**
     * Specifies the type of `Left`.
     * @private
     */
    TemplateType[TemplateType["Left"] = 3] = "Left";
    /**
     * Specifies the type of `Right`.
     * @private
     */
    TemplateType[TemplateType["Right"] = 4] = "Right";
})(TemplateType || (TemplateType = {}));

/**
 * PdfMargins.ts class for EJ2-PDF
 * A class representing PDF page margins.
 */
class PdfMargins {
    /**
     * Initializes a new instance of the `PdfMargins` class.
     * @private
     */
    constructor() {
        /**
         * Represents the `Default Page Margin` value.
         * @default 0.0
         * @private
         */
        this.pdfMargin = 40.0;
        this.setMargins(this.pdfMargin);
    }
    //Properties
    /**
     * Gets or sets the `left margin` size.
     * @private
     */
    get left() {
        return this.leftMargin;
    }
    set left(value) {
        this.leftMargin = value;
    }
    /**
     * Gets or sets the `top margin` size.
     * @private
     */
    get top() {
        return this.topMargin;
    }
    set top(value) {
        this.topMargin = value;
    }
    /**
     * Gets or sets the `right margin` size.
     * @private
     */
    get right() {
        return this.rightMargin;
    }
    set right(value) {
        this.rightMargin = value;
    }
    /**
     * Gets or sets the `bottom margin` size.
     * @private
     */
    get bottom() {
        return this.bottomMargin;
    }
    set bottom(value) {
        this.bottomMargin = value;
    }
    /**
     * Sets the `margins`.
     * @private
     */
    set all(value) {
        this.setMargins(value);
    }
    setMargins(margin1, margin2, margin3, margin4) {
        if (typeof margin2 === 'undefined') {
            this.leftMargin = this.topMargin = this.rightMargin = this.bottomMargin = margin1;
        }
        else {
            if (typeof margin3 === 'undefined') {
                this.leftMargin = this.rightMargin = margin1;
                this.bottomMargin = this.topMargin = margin2;
            }
            else {
                this.leftMargin = margin1;
                this.topMargin = margin2;
                this.rightMargin = margin3;
                this.bottomMargin = margin4;
            }
        }
    }
    /**
     * `Clones` the object.
     * @private
     */
    clone() {
        return this;
    }
}

/**
 * PdfPageSettings.ts class for EJ2-PDF
 */
/**
 * The class provides various `setting` related with PDF pages.
 */
class PdfPageSettings {
    constructor(margins) {
        //Fields
        /**
         * The page `margins`.
         * @private
         */
        this.pageMargins = new PdfMargins();
        /**
         * The page `size`.
         * @default a4
         * @private
         */
        this.pageSize = PdfPageSize.a4;
        /**
         * The page `rotation angle`.
         * @default PdfPageRotateAngle.RotateAngle0
         * @private
         */
        this.rotateAngle = PdfPageRotateAngle.RotateAngle0;
        /**
         * The page `orientation`.
         * @default PdfPageOrientation.Portrait
         * @private
         */
        this.pageOrientation = PdfPageOrientation.Portrait;
        /**
         * The page `origin`.
         * @default 0,0
         * @private
         */
        this.pageOrigin = new PointF(0, 0);
        /**
         * Checks the Whether the `rotation` is applied or not.
         * @default false
         * @private
         */
        this.isRotation = false;
        if (typeof margins === 'number') {
            this.pageMargins.setMargins(margins);
        }
    }
    //Properties
    /**
     * Gets or sets the `size` of the page.
     * @private
     */
    get size() {
        return this.pageSize;
    }
    set size(value) {
        this.setSize(value);
    }
    /**
     * Gets or sets the page `orientation`.
     * @private
     */
    get orientation() {
        return this.pageOrientation;
    }
    set orientation(orientation) {
        if (this.pageOrientation !== orientation) {
            this.pageOrientation = orientation;
            this.updateSize(orientation);
        }
    }
    /**
     * Gets or sets the `margins` of the page.
     * @private
     */
    get margins() {
        return this.pageMargins;
    }
    set margins(value) {
        this.pageMargins = value;
    }
    /**
     * Gets or sets the `width` of the page.
     * @private
     */
    get width() {
        return this.pageSize.width;
    }
    set width(value) {
        this.pageSize.width = value;
    }
    /**
     * Gets or sets the `height` of the page.
     * @private
     */
    get height() {
        return this.pageSize.height;
    }
    set height(value) {
        this.pageSize.height = value;
    }
    /**
     * Gets or sets the `origin` of the page.
     * @private
     */
    get origin() {
        return this.pageOrigin;
    }
    set origin(value) {
        this.pageOrigin = value;
    }
    /**
     * Gets or sets the number of degrees by which the page should be `rotated` clockwise when displayed or printed.
     * @private
     */
    get rotate() {
        return this.rotateAngle;
    }
    set rotate(value) {
        this.rotateAngle = value;
        this.isRotation = true;
    }
    //Methods
    /**
     * `Update page size` depending on orientation.
     * @private
     */
    updateSize(orientation) {
        let min = Math.min(this.pageSize.width, this.pageSize.height);
        let max = Math.max(this.pageSize.width, this.pageSize.height);
        switch (orientation) {
            case PdfPageOrientation.Portrait:
                this.pageSize = new SizeF(min, max);
                break;
            case PdfPageOrientation.Landscape:
                this.pageSize = new SizeF(max, min);
                break;
        }
    }
    /**
     * Creates a `clone` of the object.
     * @private
     */
    clone() {
        let settings = this;
        settings.pageMargins = this.pageMargins.clone();
        // if (GetTransition() != null)
        // {
        //     settings.Transition = (PdfPageTransition)Transition.clone();
        // }
        return settings;
    }
    /**
     * Returns `size`, shrinked by the margins.
     * @private
     */
    getActualSize() {
        let width = this.width - (this.margins.left + this.margins.right);
        let height = this.height - (this.margins.top + this.margins.bottom);
        let size = new SizeF(width, height);
        return size;
    }
    /**
     * Sets `size` to the page aaccording to the orientation.
     * @private
     */
    setSize(size) {
        let min = Math.min(size.width, size.height);
        let max = Math.max(size.width, size.height);
        if (this.orientation === PdfPageOrientation.Portrait) {
            this.pageSize = new SizeF(min, max);
        }
        else {
            this.pageSize = new SizeF(max, min);
        }
    }
}

/**
 * Helper class to `write PDF graphic streams` easily.
 * @private
 */
class PdfStreamWriter {
    /**
     * Initialize an instance of `PdfStreamWriter` class.
     * @private
     */
    constructor(stream) {
        if (stream == null) {
            throw new Error('ArgumentNullException:stream');
        }
        this.stream = stream;
    }
    //Implementation
    /**
     * `Clear` the stream.
     * @public
     */
    clear() {
        this.stream.clearStream();
    }
    setGraphicsState(dictionaryName) {
        if (dictionaryName instanceof PdfName) {
            this.stream.write(dictionaryName.toString());
            this.stream.write(Operators.whiteSpace);
            this.writeOperator(Operators.setGraphicsState);
        }
        else {
            this.stream.write(Operators.slash);
            this.stream.write(dictionaryName);
            this.stream.write(Operators.whiteSpace);
            this.writeOperator(Operators.setGraphicsState);
        }
    }
    /**
     * `Executes the XObject`.
     * @private
     */
    executeObject(name) {
        this.stream.write(name.toString());
        this.stream.write(Operators.whiteSpace);
        this.writeOperator(Operators.paintXObject);
        this.stream.write(Operators.newLine);
    }
    /**
     * `Closes path object`.
     * @private
     */
    closePath() {
        this.writeOperator(Operators.closePath);
    }
    /**
     * `Clips the path`.
     * @private
     */
    clipPath(useEvenOddRule) {
        this.stream.write(Operators.clipPath);
        if (useEvenOddRule) {
            this.stream.write(Operators.evenOdd);
        }
        this.stream.write(Operators.whiteSpace);
        this.stream.write(Operators.endPath);
        this.stream.write(Operators.newLine);
    }
    /**
     * `Closes, then fills and strokes the path`.
     * @private
     */
    closeFillStrokePath(useEvenOddRule) {
        this.stream.write(Operators.closeFillStrokePath);
        if (useEvenOddRule) {
            this.stream.write(Operators.evenOdd);
            this.stream.write(Operators.newLine);
        }
        else {
            this.stream.write(Operators.newLine);
        }
    }
    /**
     * `Fills and strokes path`.
     * @private
     */
    fillStrokePath(useEvenOddRule) {
        this.stream.write(Operators.fillStroke);
        if (useEvenOddRule) {
            this.stream.write(Operators.evenOdd);
            this.stream.write(Operators.newLine);
        }
        else {
            this.stream.write(Operators.newLine);
        }
    }
    /**
     * `Fills path`.
     * @private
     */
    fillPath(useEvenOddRule) {
        this.stream.write(Operators.fill);
        if (useEvenOddRule) {
            this.stream.write(Operators.evenOdd);
            this.stream.write(Operators.newLine);
        }
        else {
            this.stream.write(Operators.newLine);
        }
    }
    /**
     * `Ends the path`.
     * @private
     */
    endPath() {
        this.writeOperator(Operators.n);
    }
    /**
     * `Closes and fills the path`.
     * @private
     */
    closeFillPath(useEvenOddRule) {
        this.writeOperator(Operators.closePath);
        this.stream.write(Operators.fill);
        if (useEvenOddRule) {
            this.stream.write(Operators.evenOdd);
            this.stream.write(Operators.newLine);
        }
        else {
            this.stream.write(Operators.newLine);
        }
    }
    /**
     * `Closes and strokes the path`.
     * @private
     */
    closeStrokePath() {
        this.writeOperator(Operators.closeStrokePath);
    }
    /**
     * `Sets the text scaling`.
     * @private
     */
    setTextScaling(textScaling) {
        this.stream.write(PdfNumber.floatToString(textScaling));
        this.stream.write(Operators.whiteSpace);
        this.writeOperator(Operators.setTextScaling);
    }
    /**
     * `Strokes path`.
     * @private
     */
    strokePath() {
        this.writeOperator(Operators.stroke);
    }
    /**
     * `Restores` the graphics state.
     * @private
     */
    restoreGraphicsState() {
        this.writeOperator(Operators.restoreState);
    }
    /**
     * `Saves` the graphics state.
     * @private
     */
    saveGraphicsState() {
        this.writeOperator(Operators.saveState);
    }
    startNextLine(arg1, arg2) {
        if (typeof arg1 === 'undefined') {
            this.writeOperator(Operators.goToNextLine);
        }
        else if (arg1 instanceof PointF) {
            this.writePoint(arg1);
            this.writeOperator(Operators.setCoords);
        }
        else {
            this.writePoint(arg1, arg2);
            this.writeOperator(Operators.setCoords);
        }
    }
    /**
     * Sets `text leading`.
     * @private
     */
    setLeading(leading) {
        this.stream.write(PdfNumber.floatToString(leading));
        this.stream.write(Operators.whiteSpace);
        this.writeOperator(Operators.setTextLeading);
    }
    /**
     * `Begins the path`.
     * @private
     */
    beginPath(x, y) {
        this.writePoint(x, y);
        this.writeOperator(Operators.beginPath);
    }
    /**
     * `Begins text`.
     * @private
     */
    beginText() {
        this.writeOperator(Operators.beginText);
    }
    /**
     * `Ends text`.
     * @private
     */
    endText() {
        this.writeOperator(Operators.endText);
    }
    appendRectangle(arg1, arg2, arg3, arg4) {
        if (arg1 instanceof RectangleF) {
            this.appendRectangle(arg1.x, arg1.y, arg1.width, arg1.height);
        }
        else {
            this.writePoint(arg1, arg2);
            this.writePoint(arg3, arg4);
            this.writeOperator(Operators.appendRectangle);
        }
    }
    appendLineSegment(arg1, arg2) {
        if (arg1 instanceof PointF) {
            this.appendLineSegment(arg1.x, arg1.y);
        }
        else {
            this.writePoint(arg1, arg2);
            this.writeOperator(Operators.appendLineSegment);
        }
    }
    /**
     * Sets the `text rendering mode`.
     * @private
     */
    setTextRenderingMode(renderingMode) {
        this.stream.write(renderingMode.toString());
        this.stream.write(Operators.whiteSpace);
        this.writeOperator(Operators.setRenderingMode);
    }
    /**
     * Sets the `character spacing`.
     * @private
     */
    setCharacterSpacing(charSpacing) {
        this.stream.write(PdfNumber.floatToString(charSpacing));
        this.stream.write(Operators.whiteSpace);
        this.stream.write(Operators.setCharacterSpace);
        this.stream.write(Operators.newLine);
    }
    /**
     * Sets the `word spacing`.
     * @private
     */
    setWordSpacing(wordSpacing) {
        this.stream.write(PdfNumber.floatToString(wordSpacing));
        this.stream.write(Operators.whiteSpace);
        this.writeOperator(Operators.setWordSpace);
    }
    showNextLineText(arg1, arg2) {
        if (arg1 instanceof PdfString) {
            this.checkTextParam(arg1);
            this.writeText(arg1);
            this.writeOperator(Operators.setTextOnNewLine);
        }
        else {
            this.checkTextParam(arg1);
            this.writeText(arg1, arg2);
            this.writeOperator(Operators.setTextOnNewLine);
        }
    }
    setColorSpace(arg1, arg2) {
        if (arg1 instanceof PdfName && typeof arg2 === 'boolean') {
            let temparg1 = arg1;
            let temparg2 = arg2;
            // if (temparg1 == null) {
            //     throw new Error('ArgumentNullException:name');
            // }
            let op = (temparg2) ? Operators.selectcolorspaceforstroking : Operators.selectcolorspacefornonstroking;
            this.stream.write(temparg1.toString());
            this.stream.write(Operators.whiteSpace);
            this.stream.write(op);
            this.stream.write(Operators.newLine);
        }
        else {
            let temparg1 = arg1;
            let temparg2 = arg2;
            this.setColorSpace(new PdfName(temparg1), temparg2);
        }
    }
    /**
     * Modifies current `transformation matrix`.
     * @private
     */
    modifyCtm(matrix) {
        if (matrix == null) {
            throw new Error('ArgumentNullException:matrix');
        }
        this.stream.write(matrix.toString());
        this.stream.write(Operators.whiteSpace);
        this.writeOperator(Operators.modifyCtm);
    }
    setFont(font, name, size) {
        if (typeof name === 'string') {
            this.setFont(font, new PdfName(name), size);
        }
        else {
            if (font == null) {
                throw new Error('ArgumentNullException:font');
            }
            this.stream.write(name.toString());
            this.stream.write(Operators.whiteSpace);
            this.stream.write(PdfNumber.floatToString(size));
            this.stream.write(Operators.whiteSpace);
            this.writeOperator(Operators.setFont);
        }
    }
    /**
     * `Writes the operator`.
     * @private
     */
    writeOperator(opcode) {
        this.stream.write(opcode);
        this.stream.write(Operators.newLine);
    }
    checkTextParam(text) {
        if (text == null) {
            throw new Error('ArgumentNullException:text');
        }
        if (typeof text === 'string' && text === '') {
            throw new Error('ArgumentException:The text can not be an empty string, text');
        }
    }
    writeText(arg1, arg2) {
        if ((arg1 instanceof PdfString) && (typeof arg2 === 'undefined')) {
            this.stream.write(arg1.value);
        }
        else {
            let start;
            let end;
            if (arg2) {
                start = PdfString.hexStringMark[0];
                end = PdfString.hexStringMark[1];
            }
            else {
                start = PdfString.stringMark[0];
                end = PdfString.stringMark[1];
            }
            this.stream.write(start);
            this.stream.write(arg1);
            this.stream.write(end);
        }
    }
    writePoint(arg1, arg2) {
        if ((arg1 instanceof PointF) && (typeof arg2 === 'undefined')) {
            this.writePoint(arg1.x, arg1.y);
        }
        else {
            let temparg1 = arg1;
            this.stream.write(PdfNumber.floatToString(temparg1));
            this.stream.write(Operators.whiteSpace);
            // NOTE: Change Y co-ordinate because we shifted co-ordinate system only.
            arg2 = this.updateY(arg2);
            this.stream.write(PdfNumber.floatToString(arg2));
            this.stream.write(Operators.whiteSpace);
        }
    }
    /**
     * `Updates y` co-ordinate.
     * @private
     */
    updateY(arg) {
        return -arg;
    }
    /**
     * `Writes string` to the file.
     * @private
     */
    write(string) {
        let builder = '';
        builder += string;
        builder += Operators.newLine;
        this.writeOperator(builder);
    }
    /**
     * `Writes comment` to the file.
     * @private
     */
    writeComment(comment) {
        if (comment != null && comment.length > 0) {
            let builder = '';
            builder += Operators.comment;
            builder += Operators.whiteSpace;
            builder += comment;
            //builder.Append( Operators.NewLine );
            this.writeOperator(builder);
        }
        else {
            throw new Error('Invalid comment');
        }
    }
    /**
     * Sets the `color and space`.
     * @private
     */
    setColorAndSpace(color, colorSpace, forStroking) {
        if (!color.isEmpty) {
            // bool test = color is PdfExtendedColor;
            this.stream.write(color.toString(colorSpace, forStroking));
            this.stream.write(Operators.newLine);
        }
    }
    // public setLineDashPattern(pattern : number[], patternOffset : number) : void
    // {
    //     let pat : PdfArray = new PdfArray(pattern);
    //     let off : PdfNumber = new PdfNumber(patternOffset);
    //     this.setLineDashPatternHelper(pat, off);
    // }
    // private setLineDashPatternHelper(pattern : PdfArray, patternOffset : PdfNumber) : void
    // {
    //     pattern.Save(this);
    //     this.m_stream.write(Operators.whiteSpace);
    //     patternOffset.Save(this);
    //     this.m_stream.write(Operators.whiteSpace);
    //     this.writeOperator(Operators.setDashPattern);
    // }
    /**
     * Sets the `line dash pattern`.
     * @private
     */
    setLineDashPattern(pattern, patternOffset) {
        // let pat : PdfArray = new PdfArray(pattern);
        // let off : PdfNumber = new PdfNumber(patternOffset);
        // this.setLineDashPatternHelper(pat, off);
        this.setLineDashPatternHelper(pattern, patternOffset);
    }
    /**
     * Sets the `line dash pattern`.
     * @private
     */
    setLineDashPatternHelper(pattern, patternOffset) {
        let tempPattern = '[';
        if (pattern.length > 1) {
            for (let index = 0; index < pattern.length; index++) {
                if (index === pattern.length - 1) {
                    tempPattern += pattern[index].toString();
                }
                else {
                    tempPattern += pattern[index].toString() + ' ';
                }
            }
        }
        tempPattern += '] ';
        tempPattern += patternOffset.toString();
        tempPattern += ' ' + Operators.setDashPattern;
        this.stream.write(tempPattern);
        this.stream.write(Operators.newLine);
    }
    /**
     * Sets the `miter limit`.
     * @private
     */
    setMiterLimit(miterLimit) {
        this.stream.write(PdfNumber.floatToString(miterLimit));
        this.stream.write(Operators.whiteSpace);
        this.writeOperator(Operators.setMiterLimit);
    }
    /**
     * Sets the `width of the line`.
     * @private
     */
    setLineWidth(width) {
        this.stream.write(PdfNumber.floatToString(width));
        this.stream.write(Operators.whiteSpace);
        this.writeOperator(Operators.setLineWidth);
    }
    /**
     * Sets the `line cap`.
     * @private
     */
    setLineCap(lineCapStyle) {
        this.stream.write((lineCapStyle).toString());
        this.stream.write(Operators.whiteSpace);
        this.writeOperator(Operators.setLineCapStyle);
    }
    /**
     * Sets the `line join`.
     * @private
     */
    setLineJoin(lineJoinStyle) {
        this.stream.write((lineJoinStyle).toString());
        this.stream.write(Operators.whiteSpace);
        this.writeOperator(Operators.setLineJoinStyle);
    }
    //IPdfWriter members
    /**
     * Gets or sets the current `position` within the stream.
     * @private
     */
    get position() {
        return this.stream.position;
    }
    /**
     * Gets `stream length`.
     * @private
     */
    get length() {
        let returnValue = 0;
        if (this.stream.data.length !== 0 && this.stream.data.length !== -1) {
            for (let index = 0; index < this.stream.data.length; index++) {
                returnValue += this.stream.data[index].length;
            }
        }
        return returnValue;
    }
    /**
     * Gets and Sets the `current document`.
     * @private
     */
    get document() {
        return null;
    }
}

/**
 * PdfPen.ts class for EJ2-PDF
 */
/**
 * `PdfPen` class defining settings for drawing operations, that determines the color,
 * width, and style of the drawing elements.
 * ```typescript
 * // create a new PDF document
 * let document : PdfDocument = new PdfDocument();
 * // create a new page
 * let page1 : PdfPage = document.pages.add();
 * // set pen
 * let pen : PdfPen = new PdfPen(new PdfColor(0, 0, 0));
 * // draw rectangle
 * page1.graphics.drawRectangle(pen, new RectangleF({x : 0, y : 0}, {width : 100, height : 50}));
 * // save the document.
 * document.save('output.pdf');
 * // destroy the document
 * document.destroy();
 * ```
 */
class PdfPen {
    constructor(arg1, arg2) {
        //Fields
        /**
         * Specifies the `color of the pen`.
         * @default new PdfColor()
         * @private
         */
        this.pdfColor = new PdfColor(0, 0, 0);
        /**
         * Specifies the `dash offset of the pen`.
         * @default 0
         * @private
         */
        this.dashOffsetValue = 0;
        /**
         * Specifies the `dash pattern of the pen`.
         * @default [0]
         * @private
         */
        this.penDashPattern = [0];
        /**
         * Specifies the `dash style of the pen`.
         * @default Solid
         * @private
         */
        this.pdfDashStyle = PdfDashStyle.Solid;
        /**
         * Specifies the `line cap of the pen`.
         * @default 0
         * @private
         */
        this.pdfLineCap = 0;
        /**
         * Specifies the `line join of the pen`.
         * @default 0
         * @private
         */
        this.pdfLineJoin = 0;
        /**
         * Specifies the `width of the pen`.
         * @default 1.0
         * @private
         */
        this.penWidth = 1.0;
        /**
         * Specifies the `mitter limit of the pen`.
         * @default 0.0
         * @private
         */
        this.internalMiterLimit = 0.0;
        /**
         * Stores the `colorspace` value.
         * @default Rgb
         * @private
         */
        this.colorSpace = PdfColorSpace.Rgb;
        if (typeof arg2 === 'number') {
            this.constructor(arg1);
            this.width = arg2;
        }
        else if (typeof arg2 === 'undefined' && arg1 instanceof PdfBrush) {
            this.setBrush(arg1);
        }
        else if (typeof arg2 === 'undefined' && arg1 instanceof PdfColor) {
            this.color = arg1;
        }
    }
    //Properties
    /**
     * Gets or sets the `color of the pen`.
     * @private
     */
    get color() {
        return this.pdfColor;
    }
    set color(value) {
        this.pdfColor = value;
    }
    /**
     * Gets or sets the `dash offset of the pen`.
     * @private
     */
    get dashOffset() {
        if (typeof this.dashOffsetValue === 'undefined' || this.dashOffsetValue == null) {
            return 0;
        }
        else {
            return this.dashOffsetValue;
        }
    }
    set dashOffset(value) {
        this.dashOffsetValue = value;
    }
    /**
     * Gets or sets the `dash pattern of the pen`.
     * @private
     */
    get dashPattern() {
        return this.penDashPattern;
    }
    set dashPattern(value) {
        this.penDashPattern = value;
    }
    /**
     * Gets or sets the `dash style of the pen`.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // create a new page
     * let page1 : PdfPage = document.pages.add();
     * // set pen
     * let pen : PdfPen = new PdfPen(new PdfColor(0, 0, 0));
     * //
     * // set pen style
     * pen.dashStyle = PdfDashStyle.DashDot;
     * // get pen style
     * let style : PdfDashStyle = pen.dashStyle;
     * //
     * // draw rectangle
     * page1.graphics.drawRectangle(pen, new RectangleF({x : 0, y : 0}, {width : 100, height : 50}));
     * // save the document.
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get dashStyle() {
        return this.pdfDashStyle;
    }
    set dashStyle(value) {
        if (this.pdfDashStyle !== value) {
            this.pdfDashStyle = value;
            switch (this.pdfDashStyle) {
                case PdfDashStyle.Custom:
                    break;
                case PdfDashStyle.Dash:
                    this.penDashPattern = [3, 1];
                    break;
                case PdfDashStyle.Dot:
                    this.penDashPattern = [1, 1];
                    break;
                case PdfDashStyle.DashDot:
                    this.penDashPattern = [3, 1, 1, 1];
                    break;
                case PdfDashStyle.DashDotDot:
                    this.penDashPattern = [3, 1, 1, 1, 1, 1];
                    break;
                case PdfDashStyle.Solid:
                    break;
                default:
                    this.pdfDashStyle = PdfDashStyle.Solid;
                    this.penDashPattern = [0];
                    break;
            }
        }
    }
    /**
     * Gets or sets the `line cap of the pen`.
     * @private
     */
    get lineCap() {
        return this.pdfLineCap;
    }
    set lineCap(value) {
        this.pdfLineCap = value;
    }
    /**
     * Gets or sets the `line join style of the pen`.
     * @private
     */
    get lineJoin() {
        return this.pdfLineJoin;
    }
    set lineJoin(value) {
        this.pdfLineJoin = value;
    }
    /**
     * Gets or sets the `miter limit`.
     * @private
     */
    get miterLimit() {
        return this.internalMiterLimit;
    }
    set miterLimit(value) {
        this.internalMiterLimit = value;
    }
    /**
     * Gets or sets the `width of the pen`.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // create a new page
     * let page1 : PdfPage = document.pages.add();
     * // set pen
     * let pen : PdfPen = new PdfPen(new PdfColor(0, 0, 0));
     * //
     * // set pen width
     * pen.width = 2;
     * //
     * // draw rectangle
     * page1.graphics.drawRectangle(pen, new RectangleF({x : 0, y : 0}, {width : 100, height : 50}));
     * // save the document.
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get width() {
        return this.penWidth;
    }
    set width(value) {
        this.penWidth = value;
    }
    //Helper
    /**
     * `Clones` this instance of PdfPen class.
     * @private
     */
    clone() {
        let pen = this;
        return pen;
    }
    /**
     * `Sets the brush`.
     * @private
     */
    setBrush(brush) {
        let sBrush = brush;
        this.color = sBrush.color;
        this.pdfBrush = sBrush;
    }
    /**
     * `Monitors the changes`.
     * @private
     */
    monitorChanges(currentPen, streamWriter, getResources, saveState, currentColorSpace, matrix) {
        let diff = false;
        saveState = true;
        if (currentPen == null) {
            diff = true;
        }
        diff = this.dashControl(currentPen, saveState, streamWriter);
        streamWriter.setLineWidth(this.width);
        streamWriter.setLineJoin(this.lineJoin);
        streamWriter.setLineCap(this.lineCap);
        let miterLimit = this.miterLimit;
        if (miterLimit > 0) {
            streamWriter.setMiterLimit(miterLimit);
            diff = true;
        }
        let brush = this.pdfBrush;
        streamWriter.setColorAndSpace(this.color, currentColorSpace, true);
        diff = true;
        return diff;
    }
    /**
     * `Controls the dash style` and behaviour of each line.
     * @private
     */
    dashControl(pen, saveState, streamWriter) {
        saveState = true;
        let lineWidth = this.width;
        let pattern = this.getPattern();
        streamWriter.setLineDashPattern(pattern, this.dashOffset * lineWidth);
        return saveState;
    }
    /**
     * `Gets the pattern` of PdfPen.
     * @private
     */
    getPattern() {
        let pattern = this.dashPattern;
        for (let i = 0; i < pattern.length; ++i) {
            pattern[i] *= this.width;
        }
        return pattern;
    }
}

/**
 * PdfTransformationMatrix.ts class for EJ2-PDF
 */
/**
 * Class for representing Root `transformation matrix`.
 */
class PdfTransformationMatrix {
    constructor(value) {
        /**
         * Value for `angle converting`.
         * @default 180.0 / Math.PI
         * @private
         */
        this.radDegFactor = 180.0 / Math.PI;
        if (typeof value === 'undefined') {
            this.transformationMatrix = new Matrix(1.00, 0.00, 0.00, 1.00, 0.00, 0.00);
        }
        else {
            this.transformationMatrix = new Matrix(1.00, 0.00, 0.00, -1.00, 0.00, 0.00);
        }
    }
    // Properties
    /**
     * Gets or sets the `internal matrix object`.
     * @private
     */
    get matrix() {
        return this.transformationMatrix;
    }
    set matrix(value) {
        this.transformationMatrix = value;
    }
    // Public methods
    /**
     * `Translates` coordinates by specified coordinates.
     * @private
     */
    translate(offsetX, offsetY) {
        this.transformationMatrix.translate(offsetX, offsetY);
    }
    /**
     * `Scales` coordinates by specified coordinates.
     * @private
     */
    scale(scaleX, scaleY) {
        this.transformationMatrix.elements[0] = scaleX;
        this.transformationMatrix.elements[3] = scaleY;
    }
    /**
     * `Rotates` coordinate system in counterclockwise direction.
     * @private
     */
    rotate(angle) {
        //Convert from degree to radian 
        angle = (angle * Math.PI) / 180;
        //Rotation 
        this.transformationMatrix.elements[0] = Math.cos(angle);
        this.transformationMatrix.elements[1] = Math.sin(angle);
        this.transformationMatrix.elements[2] = -Math.sin(angle);
        this.transformationMatrix.elements[3] = Math.cos(angle);
    }
    // Overrides
    /**
     * Gets `PDF representation`.
     * @private
     */
    toString() {
        let builder = '';
        let whitespace = ' ';
        for (let i = 0, len = this.transformationMatrix.elements.length; i < len; i++) {
            let temp = this.matrix.elements[i];
            builder += PdfNumber.floatToString(this.transformationMatrix.elements[i]);
            builder += whitespace;
        }
        return builder;
    }
    // Implementation
    /**
     * `Multiplies` matrices (changes coordinate system.)
     * @private
     */
    multiply(matrix) {
        this.transformationMatrix.multiply(matrix.matrix);
    }
    /**
     * Converts `degrees to radians`.
     * @private
     */
    static degreesToRadians(degreesX) {
        return this.degRadFactor * degreesX;
    }
    /**
     * Converts `radians to degrees`.
     * @private
     */
    radiansToDegrees(radians) {
        return this.radDegFactor * radians;
    }
    /**
     * `Clones` this instance of PdfTransformationMatrix.
     * @private
     */
    clone() {
        return this;
    }
}
// Constants
/**
 * Value for `angle converting`.
 * @default Math.PI / 180.0
 * @private
 */
PdfTransformationMatrix.degRadFactor = Math.PI / 180.0;
class Matrix {
    constructor(arg1, arg2, arg3, arg4, arg5, arg6) {
        if (typeof arg1 === 'undefined') {
            this.metrixElements = [];
        }
        else if (typeof arg1 === 'number') {
            this.constructor();
            this.metrixElements.push(arg1);
            this.metrixElements.push(arg2);
            this.metrixElements.push(arg3);
            this.metrixElements.push(arg4);
            this.metrixElements.push(arg5);
            this.metrixElements.push(arg6);
        }
        else {
            this.metrixElements = arg1;
        }
    }
    // Properties
    /**
     * Gets the `elements`.
     * @private
     */
    get elements() {
        return this.metrixElements;
    }
    /**
     * Gets the off set `X`.
     * @private
     */
    get offsetX() {
        return this.metrixElements[4];
    }
    /**
     * Gets the off set `Y`.
     * @private
     */
    get offsetY() {
        return this.metrixElements[5];
    }
    // Implementation
    /**
     * `Translates` coordinates by specified coordinates.
     * @private
     */
    translate(offsetX, offsetY) {
        this.metrixElements[4] = offsetX;
        this.metrixElements[5] = offsetY;
    }
    /**
     * `Translates` the specified offset X.
     * @private
     */
    transform(point) {
        let x = point.x;
        let y = point.y;
        let x2 = x * this.elements[0] + y * this.elements[2] + this.offsetX;
        let y2 = x * this.elements[1] + y * this.elements[3] + this.offsetY;
        return new PointF(x2, y2);
    }
    /**
     * `Multiplies matrices` (changes coordinate system.)
     * @private
     */
    multiply(matrix) {
        let tempMatrix = [];
        tempMatrix.push(this.elements[0] * matrix.elements[0] + this.elements[1] * matrix.elements[2]);
        tempMatrix[1] = (this.elements[0] * matrix.elements[1] + this.elements[1] * matrix.elements[3]);
        tempMatrix[2] = (this.elements[2] * matrix.elements[0] + this.elements[3] * matrix.elements[2]);
        tempMatrix[3] = (this.elements[2] * matrix.elements[1] + this.elements[3] * matrix.elements[3]);
        tempMatrix[4] = (this.offsetX * matrix.elements[0] + this.offsetY * matrix.elements[2] + matrix.offsetX);
        tempMatrix[5] = (this.offsetX * matrix.elements[1] + this.offsetY * matrix.elements[3] + matrix.offsetY);
        for (let i = 0; i < tempMatrix.length; i++) {
            this.elements[i] = tempMatrix[i];
        }
    }
    // IDisposable Members
    /**
     * `Dispose` this instance of PdfTransformationMatrix class.
     * @private
     */
    dispose() {
        this.metrixElements = null;
    }
    // ICloneable Members
    /**
     * `Clones` this instance of PdfTransformationMatrix class.
     * @private
     */
    clone() {
        let m = new Matrix(this.metrixElements);
        return m;
    }
}

/**
 * `constants.ts` class for EJ2-PDF
 * @private
 */
class ProcedureSets {
    constructor() {
        /**
         * Specifies the `PDF` procedure set.
         * @private
         */
        this.pdf = 'PDF';
        /**
         * Specifies the `Text` procedure set.
         * @private
         */
        this.text = 'Text';
        /**
         * Specifies the `ImageB` procedure set.
         * @private
         */
        this.imageB = 'ImageB';
        /**
         * Specifies the `ImageC` procedure set.
         * @private
         */
        this.imageC = 'ImageC';
        /**
         * Specifies the `ImageI` procedure set.
         * @private
         */
        this.imageI = 'ImageI';
    }
}

/**
 * Dictionary class
 * @private
 * @hidden
 */
class TemporaryDictionary {
    constructor() {
        /**
         * @hidden
         * @private
         */
        this.mKeys = [];
        /**
         * @hidden
         * @private
         */
        this.mValues = [];
    }
    /**
     * @hidden
     * @private
     */
    size() {
        return this.mKeys.length;
    }
    /**
     * @hidden
     * @private
     */
    add(key, value) {
        if (key === undefined || key === null || value === undefined || value === null) {
            throw new ReferenceError('Provided key or value is not valid.');
        }
        let index = this.mKeys.indexOf(key);
        if (index < 0) {
            this.mKeys.push(key);
            this.mValues.push(value);
            return 1;
        }
        else {
            throw new RangeError('An item with the same key has already been added.');
        }
    }
    /**
     * @hidden
     * @private
     */
    keys() {
        return this.mKeys;
    }
    /**
     * @hidden
     * @private
     */
    values() {
        return this.mValues;
    }
    /**
     * @hidden
     * @private
     */
    getValue(key) {
        if (key === undefined || key === null) {
            throw new ReferenceError('Provided key is not valid.');
        }
        let index = this.mKeys.indexOf(key);
        if (index < 0) {
            throw new RangeError('No item with the specified key has been added.');
        }
        else {
            return this.mValues[index];
        }
    }
    /**
     * @hidden
     * @private
     */
    setValue(key, value) {
        if (key === undefined || key === null) {
            throw new ReferenceError('Provided key is not valid.');
        }
        let index = this.mKeys.indexOf(key);
        if (index < 0) {
            this.mKeys.push(key);
            this.mValues.push(value);
        }
        else {
            this.mValues[index] = value;
        }
    }
    /**
     * @hidden
     * @private
     */
    remove(key) {
        if (key === undefined || key === null) {
            throw new ReferenceError('Provided key is not valid.');
        }
        let index = this.mKeys.indexOf(key);
        if (index < 0) {
            throw new RangeError('No item with the specified key has been added.');
        }
        else {
            this.mKeys.splice(index, 1);
            this.mValues.splice(index, 1);
            return true;
        }
    }
    /**
     * @hidden
     * @private
     */
    containsKey(key) {
        if (key === undefined || key === null) {
            throw new ReferenceError('Provided key is not valid.');
        }
        let index = this.mKeys.indexOf(key);
        if (index < 0) {
            return false;
        }
        return true;
    }
    /**
     * @hidden
     * @private
     */
    clear() {
        this.mKeys = [];
        this.mValues = [];
    }
}

/**
 * Represents a simple `transparency`.
 * @private
 */
class PdfTransparency {
    // Properties
    // /**
    //  * Gets the `stroke` operation alpha value.
    //  * @private
    //  */
    // public get stroke() : number {
    //     let result : number = this.getNumber(this.dictionaryProperties.CA);
    //     return result;
    // }
    // /**
    //  * Gets the `fill` operation alpha value.
    //  * @private
    //  */
    // public get fill() : number {
    //     let result : number = this.getNumber(this.dictionaryProperties.ca);
    //     return result;
    // }
    // /**
    //  * Gets the `blend mode`.
    //  * @private
    //  */
    // public get mode() : PdfBlendMode {
    //     let result : string = this.getName(this.dictionaryProperties.ca);
    //     return PdfBlendMode.Normal;
    // }
    // Constructors
    /**
     * Initializes a new instance of the `Transparency` class.
     * @private
     */
    constructor(stroke, fill, mode) {
        // Fields
        /**
         * Internal variable to store `dictionary`.
         * @default new PdfDictionary()
         * @private
         */
        this.dictionary = new PdfDictionary();
        /**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @default new DictionaryProperties()
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        this.dictionary.items.setValue(this.dictionaryProperties.CA, new PdfNumber(stroke));
        this.dictionary.items.setValue(this.dictionaryProperties.ca, new PdfNumber(fill));
        this.dictionary.items.setValue(this.dictionaryProperties.BM, new PdfName(mode.toString()));
    }
    // // Implementation
    // /**
    //  * Gets the `number value`.
    //  * @private
    //  */
    // private getNumber(keyName : string) : number {
    //     let result : number = 0.0;
    //     let numb : PdfNumber = this.dictionary.items.getValue(keyName) as PdfNumber;
    //     result = numb.intValue;
    //     return result;
    // }
    // /**
    //  * Gets the `name value`.
    //  * @private
    //  */
    // private getName(keyName : string) : string {
    //     let result : string = null;
    //     let name : PdfName = this.dictionary.items.getValue(keyName) as PdfName;
    //     result = name.value;
    //     return result;
    // }
    // IPdfWrapper Members
    /**
     * Gets the `element`.
     * @private
     */
    get element() {
        return this.dictionary;
    }
}

/**
 * Represent a `collection of automatic fields information`.
 * @private
 */
class PdfAutomaticFieldInfoCollection {
    /**
     * Initializes a new instance of the 'PdfPageNumberFieldInfoCollection' class.
     * @private
     */
    constructor() {
        /**
         * Internal variable to store instance of `pageNumberFields` class.
         * @private
         */
        this.automaticFieldsInformation = [];
        //
    }
    /**
     * Gets the `page number fields collection`.
     * @private
     */
    get automaticFields() {
        return this.automaticFieldsInformation;
    }
    // Public methods
    /// Adds the specified field info.
    /**
     * Add page number field into collection.
     * @private
     */
    add(fieldInfo) {
        return this.automaticFields.push(fieldInfo);
    }
}

/**
 * Represents a base class for all page graphics elements.
 */
class PdfGraphicsElement {
    // Constructors
    constructor() {
        //
    }
    /**
     * `Draws` the page number field.
     * @public
     */
    drawHelper(graphics, x, y) {
        let bNeedSave = (x !== 0 || y !== 0);
        let gState = null;
        // Translate co-ordinates.
        if (bNeedSave) {
            // Save state.
            gState = graphics.save();
            graphics.translateTransform(x, y);
        }
        this.drawInternal(graphics);
        if (bNeedSave) {
            // Restore state.
            graphics.restore(gState);
        }
    }
}

/**
 * PdfAutomaticField.ts class for EJ2-PDF
 */
/**
 * Represents a fields which is calculated before the document saves.
 */
class PdfAutomaticField extends PdfGraphicsElement {
    // Constructors
    constructor() {
        super();
        // Fields
        this.internalBounds = new RectangleF(0, 0, 0, 0);
        this.internalTemplateSize = new SizeF(0, 0);
    }
    // Properties
    get bounds() {
        return this.internalBounds;
    }
    set bounds(value) {
        this.internalBounds = value;
    }
    get size() {
        return new SizeF(this.bounds.width, this.bounds.height);
    }
    set size(value) {
        this.bounds.width = value.width;
        this.bounds.height = value.height;
    }
    get location() {
        return new PointF(this.bounds.x, this.bounds.y);
    }
    set location(value) {
        this.bounds.x = value.x;
        this.bounds.y = value.y;
    }
    get font() {
        return this.internalFont;
    }
    set font(value) {
        this.internalFont = value;
    }
    get brush() {
        return this.internalBrush;
    }
    set brush(value) {
        this.internalBrush = value;
    }
    get pen() {
        return this.internalPen;
    }
    set pen(value) {
        this.internalPen = value;
    }
    get stringFormat() {
        return this.internalStringFormat;
    }
    set stringFormat(value) {
        this.internalStringFormat = value;
    }
    performDrawHelper(graphics, location, scalingX, scalingY) {
        if (this.bounds.height === 0 || this.bounds.width === 0) {
            let text = this.getValue(graphics);
            this.internalTemplateSize = this.getFont().measureString(text, this.size, this.stringFormat);
        }
    }
    draw(arg1, arg2, arg3) {
        if (typeof arg2 === 'undefined') {
            let location = new PointF(0, 0);
            this.draw(arg1, location);
        }
        else if (arg2 instanceof PointF) {
            this.draw(arg1, arg2.x, arg2.y);
        }
        else {
            this.drawHelper(arg1, arg2, arg3);
            let info = new PdfAutomaticFieldInfo(this, new PointF(arg2, arg3));
            arg1.automaticFields.add(info);
        }
    }
    getSize() {
        if (this.bounds.height === 0 || this.bounds.width === 0) {
            return this.internalTemplateSize;
        }
        else {
            return this.size;
        }
    }
    drawInternal(graphics) {
        //
    }
    /* tslint:disable */
    getBrush() {
        return (typeof this.internalBrush === 'undefined' || this.internalBrush == null) ? new PdfSolidBrush(new PdfColor(0, 0, 0)) : this.internalBrush;
    }
    getFont() {
        return (typeof this.internalFont === 'undefined' || this.internalFont == null) ? PdfDocument.defaultFont : this.internalFont;
    }
    /* tslint:enable */
    getPageFromGraphics(graphics) {
        if (typeof graphics.page !== 'undefined' && graphics.page !== null) {
            let page = graphics.page;
            return page;
        }
        else {
            let page = graphics.currentPage;
            return page;
        }
    }
}

/**
 * PdfAutomaticFieldInfo.ts class for EJ2-PDF
 * @private
 */
/**
 * Represents information about the automatic field.
 * @private
 */
class PdfAutomaticFieldInfo {
    constructor(field, location, scaleX, scaleY) {
        // Fields
        /**
         * Internal variable to store location of the field.
         * @private
         */
        this.pageNumberFieldLocation = new PointF();
        /**
         * Internal variable to store field.
         * @private
         */
        this.pageNumberField = null;
        /**
         * Internal variable to store x scaling factor.
         * @private
         */
        this.scaleX = 1;
        /**
         * Internal variable to store y scaling factor.
         * @private
         */
        this.scaleY = 1;
        if (typeof location === 'undefined' && field instanceof PdfAutomaticFieldInfo) {
            this.pageNumberField = field.field;
            this.pageNumberFieldLocation = field.location;
            this.scaleX = field.scalingX;
            this.scaleY = field.scalingY;
        }
        else if (typeof scaleX === 'undefined' && location instanceof PointF && field instanceof PdfAutomaticField) {
            this.pageNumberField = field;
            this.pageNumberFieldLocation = location;
        }
        else {
            this.pageNumberField = field;
            this.pageNumberFieldLocation = location;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
        }
    }
    /* tslint:enable */
    // Properties
    /**
     * Gets or sets the location.
     * @private
     */
    get location() {
        return this.pageNumberFieldLocation;
    }
    set location(value) {
        this.pageNumberFieldLocation = value;
    }
    /**
     * Gets or sets the field.
     * @private
     */
    get field() {
        return this.pageNumberField;
    }
    set field(value) {
        this.pageNumberField = value;
    }
    /**
     * Gets or sets the scaling X factor.
     * @private
     */
    get scalingX() {
        return this.scaleX;
    }
    set scalingX(value) {
        this.scaleX = value;
    }
    /**
     * Gets or sets the scaling Y factor.
     * @private
     */
    get scalingY() {
        return this.scaleY;
    }
    set scalingY(value) {
        this.scaleY = value;
    }
}

/**
 * PdfGraphics.ts class for EJ2-PDF
 */
/**
 * `PdfGraphics` class represents a graphics context of the objects.
 * It's used for performing all the graphics operations.
 * ```typescript
 * // create a new PDF document
 * let document : PdfDocument = new PdfDocument();
 * // add a new page to the document
 * let page1 : PdfPage = document.pages.add();
 * // set the font
 * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
 * // create black brush
 * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
 * //
 * //graphics of the page
 * let page1Graphics : PdfGraphics = page1.graphics;
 * // draw the text on the page1 graphics
 * page1Graphics.drawString('Hello World', font, blackBrush, new PointF(0, 0));
 * //
 * // save the document
 * document.save('output.pdf');
 * // destroy the document
 * document.destroy();
 * ```
 */
class PdfGraphics {
    constructor(arg1, arg2, arg3) {
        /**
         * Represents the `Current color space`.
         * @private
         */
        this.currentColorSpace = PdfColorSpace.Rgb;
        /**
         * Stores `previous rendering mode`.
         * @private
         */
        this.previousTextRenderingMode = TextRenderingMode.Fill;
        /**
         * Previous `character spacing` value or 0.
         * @private
         */
        this.previousCharacterSpacing = 0.0;
        /**
         * Previous `word spacing` value or 0.
         * @private
         */
        this.previousWordSpacing = 0.0;
        /**
         * The `previously used text scaling` value.
         * @private
         */
        this.previousTextScaling = 100.0;
        /**
         * Instance of `ProcedureSets` class.
         * @private
         */
        this.procedureSets = new ProcedureSets();
        /**
         * To check wihether it is a `direct text rendering`.
         * @default true
         * @private
         */
        this.isNormalRender = true;
        /**
         * check whether to `use font size` to calculate the shift.
         * @default false
         * @private
         */
        this.isUseFontSize = false;
        /**
         * check whether the font is in `italic type`.
         * @default false
         * @private
         */
        this.isItalic = false;
        /**
         * Check whether it is an `emf Text Matrix`.
         * @default false
         * @private
         */
        this.isEmfTextScaled = false;
        /**
         * Check whether it is an `emf` call.
         * @default false
         * @private
         */
        this.isEmf = false;
        /**
         * Check whether it is an `emf plus` call.
         * @default false
         * @private
         */
        this.isEmfPlus = false;
        /**
         * Check whether it is in `base line format`.
         * @default true
         * @private
         */
        this.isBaselineFormat = true;
        /**
         * Emf Text `Scaling Factor`.
         * @private
         */
        this.emfScalingFactor = new SizeF(0, 0);
        /**
         * To check whether the `last color space` of document and garphics is saved.
         * @private
         */
        this.colorSpaceChanged = false;
        /**
         * Stores an instance of `DictionaryProperties`.
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        /**
         * Checks whether the x co-ordinate is need to set as client size or not.
         * @hidden
         * @private
         */
        this.isOverloadWithPosition = false;
        /**
         * Checks whether the x co-ordinate is need to set as client size or not.
         * @hidden
         * @private
         */
        this.isPointOverload = false;
        /**
         * Current colorspaces.
         * @hidden
         * @private
         */
        this.currentColorSpaces = ['RGB', 'CMYK', 'GrayScale', 'Indexed'];
        /**
         * Checks the current image `is optimized` or not.
         * @default false.
         * @private
         */
        this.isImageOptimized = false;
        /**
         * Stores the `graphics states`.
         * @private
         */
        this.graphicsState = [];
        /**
         * Indicates whether the object `had trasparency`.
         * @default false
         * @private
         */
        this.istransparencySet = false;
        /**
         * Stores the instance of `PdfAutomaticFieldInfoCollection` class .
         * @default null
         * @private
         */
        this.internalAutomaticFields = null;
        /**
         * Stores the index of the start line that should draw with in the next page.
         * @private
         */
        this.startCutIndex = -1;
        if (arg3 instanceof PdfStreamWriter) {
            this.pdfStreamWriter = arg3;
            this.getResources = arg2;
            this.canvasSize = arg1;
            this.initialize();
        }
        else {
            this.constructor(arg1, arg2, new PdfStreamWriter(arg3));
        }
    }
    //  Properties
    /**
     * Returns the `result` after drawing string.
     * @private
     */
    get stringLayoutResult() {
        return this.pdfStringLayoutResult;
    }
    /**
     * Gets the `size` of the canvas.
     * @private
     */
    get size() {
        return this.canvasSize;
    }
    /**
     * Gets and Sets the value of `MediaBox upper right bound`.
     * @private
     */
    get mediaBoxUpperRightBound() {
        if (typeof this.internalMediaBoxUpperRightBound === 'undefined') {
            this.internalMediaBoxUpperRightBound = 0;
        }
        return this.internalMediaBoxUpperRightBound;
    }
    set mediaBoxUpperRightBound(value) {
        this.internalMediaBoxUpperRightBound = value;
    }
    /**
     * Gets the `size` of the canvas reduced by margins and page templates.
     * @private
     */
    get clientSize() {
        return new SizeF(this.clipBounds.width, this.clipBounds.height);
    }
    /**
     * Gets or sets the current `color space` of the document
     * @private
     */
    get colorSpace() {
        return this.currentColorSpace;
    }
    set colorSpace(value) {
        this.currentColorSpace = value;
    }
    /**
     * Gets the `stream writer`.
     * @private
     */
    get streamWriter() {
        return this.pdfStreamWriter;
    }
    /**
     * Gets the `transformation matrix` reflecting current transformation.
     * @private
     */
    get matrix() {
        if (this.transformationMatrix == null) {
            this.transformationMatrix = new PdfTransformationMatrix();
        }
        return this.transformationMatrix;
    }
    /**
     * Gets the `layer` for the graphics, if exists.
     * @private
     */
    get layer() {
        return this.pageLayer;
    }
    /**
     * Gets the `page` for this graphics, if exists.
     * @private
     */
    get page() {
        return this.pageLayer.page;
    }
    get automaticFields() {
        if (this.internalAutomaticFields == null || typeof this.internalAutomaticFields === 'undefined') {
            this.internalAutomaticFields = new PdfAutomaticFieldInfoCollection();
        }
        return this.internalAutomaticFields;
    }
    //Implementation
    /**
     * `Initializes` this instance.
     * @private
     */
    initialize() {
        this.bStateSaved = false;
        this.currentPen = null;
        this.currentBrush = null;
        this.currentFont = null;
        this.currentColorSpace = PdfColorSpace.Rgb;
        this.bCSInitialized = false;
        this.transformationMatrix = null;
        this.previousTextRenderingMode = (-1); //.Fill;
        this.previousCharacterSpacing = -1.0;
        this.previousWordSpacing = -1.0;
        this.previousTextScaling = -100.0;
        // this.m_trasparencies = null;
        this.currentStringFormat = null;
        this.clipBounds = new RectangleF(new PointF(0, 0), this.size);
        this.getResources.getResources().requireProcedureSet(this.procedureSets.pdf);
    }
    drawPdfTemplate(template, location, size) {
        if (typeof size === 'undefined') {
            if (template == null) {
                throw Error('ArgumentNullException-template');
            }
            this.drawPdfTemplate(template, location, template.size);
        }
        else {
            // let crossTable : PdfCrossTable = null;
            // if (this.pageLayer != null) {
            //     crossTable = (this.page as PdfPage).section.parentDocument.crossTable;
            // }
            if (template == null) {
                throw Error('ArgumentNullException-template');
            }
            let scaleX = (template.width > 0) ? size.width / template.width : 1;
            let scaleY = (template.height > 0) ? size.height / template.height : 1;
            let bNeedScale = !(scaleX === 1 && scaleY === 1);
            // Save state.
            let state = this.save();
            // Take into consideration that rect location is bottom/left.
            let matrix = new PdfTransformationMatrix();
            if (this.pageLayer != null) {
                this.getTranslateTransform(location.x, location.y + size.height, matrix);
            }
            if (bNeedScale) {
                this.getScaleTransform(scaleX, scaleY, matrix);
            }
            this.pdfStreamWriter.modifyCtm(matrix);
            // Output template.
            let resources = this.getResources.getResources();
            let name = resources.getName(template);
            this.pdfStreamWriter.executeObject(name);
            // Restore state.
            this.restore(state);
            //Transfer automatic fields from template.
            let g = template.graphics;
            if (g != null) {
                for (let index = 0; index < g.automaticFields.automaticFields.length; index++) {
                    let fieldInfo = g.automaticFields.automaticFields[index];
                    let newLocation = new PointF(fieldInfo.location.x + location.x, fieldInfo.location.y + location.y);
                    let scalingX = template.size.width == 0 ? 0 : size.width / template.size.width;
                    let scalingY = template.size.height == 0 ? 0 : size.height / template.size.height;
                    this.automaticFields.add(new PdfAutomaticFieldInfo(fieldInfo.field, newLocation, scalingX, scalingY));
                    this.page.dictionary.modify();
                }
            }
            this.getResources.getResources().requireProcedureSet(this.procedureSets.imageB);
            this.getResources.getResources().requireProcedureSet(this.procedureSets.imageC);
            this.getResources.getResources().requireProcedureSet(this.procedureSets.imageI);
            this.getResources.getResources().requireProcedureSet(this.procedureSets.text);
        }
    }
    /* tslint:disable */
    /**
     * @public
     */
    drawString(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        if (typeof arg1 === 'string' && arg2 instanceof PdfFont && (arg3 instanceof PdfPen || arg3 === null) && (arg4 instanceof PdfBrush || arg4 === null) && typeof arg5 === 'number' && typeof arg6 === 'number' && (arg7 instanceof PdfStringFormat || arg7 === null) && typeof arg8 === 'undefined') {
            this.isOverloadWithPosition = true;
            this.drawString(arg1, arg2, arg3, arg4, arg5, arg6, (this.clientSize.width - arg5), 0, arg7);
        }
        else {
            let temparg3 = arg3;
            let temparg4 = arg4;
            let temparg5 = arg5;
            let temparg6 = arg6;
            let temparg7 = arg7;
            let temparg8 = arg8;
            let temparg9 = arg9;
            let layouter = new PdfStringLayouter();
            let result = layouter.layout(arg1, arg2, temparg9, new SizeF(temparg7, 0), this.isOverloadWithPosition, this.clientSize);
            if (!result.empty) {
                let rect = this.checkCorrectLayoutRectangle(result.actualSize, temparg5, temparg6, temparg9);
                if (temparg7 <= 0) {
                    temparg5 = rect.x;
                    temparg7 = rect.width;
                }
                if (temparg8 <= 0) {
                    temparg6 = rect.y;
                    temparg8 = rect.height;
                }
                this.drawStringLayoutResult(result, arg2, temparg3, temparg4, new RectangleF(temparg5, temparg6, temparg7, temparg8), temparg9);
                this.isEmfTextScaled = false;
                this.emfScalingFactor = new SizeF(0, 0);
            }
            this.getResources.getResources().requireProcedureSet(this.procedureSets.text);
            this.isNormalRender = true;
            this.pdfStringLayoutResult = result;
            this.isUseFontSize = false;
        }
    } /* tslint:enable */
    drawLine(arg1, arg2, arg3, arg4, arg5) {
        if (arg2 instanceof PointF) {
            let temparg2 = arg2;
            let temparg3 = arg3;
            this.drawLine(arg1, temparg2.x, temparg2.y, temparg3.x, temparg3.y);
        }
        else {
            let temparg2 = arg2;
            let temparg3 = arg3;
            let temparg4 = arg4;
            let temparg5 = arg5;
            this.stateControl(arg1, null, null);
            let sw = this.streamWriter;
            sw.beginPath(temparg2, temparg3);
            sw.appendLineSegment(temparg4, temparg5);
            sw.strokePath();
            this.getResources.getResources().requireProcedureSet(this.procedureSets.pdf);
        }
    }
    /* tslint:disable */
    drawRectangle(arg1, arg2, arg3, arg4, arg5, arg6) {
        if (arg1 instanceof PdfPen && typeof arg2 === 'number') {
            let temparg3 = arg3;
            this.drawRectangle(arg1, null, arg2, temparg3, arg4, arg5);
        }
        else if (arg1 instanceof PdfBrush && typeof arg2 === 'number') {
            let temparg3 = arg3;
            this.drawRectangle(null, arg1, arg2, temparg3, arg4, arg5);
        }
        else {
            let temparg3 = arg3;
            let temparg4 = arg4;
            let temparg5 = arg5;
            let temparg6 = arg6;
            if (arg2 instanceof PdfSolidBrush && arg2.color.isEmpty) {
                arg2 = null;
            }
            let temparg1 = arg1;
            let temparg2 = arg2;
            this.stateControl(temparg1, temparg2, null);
            this.streamWriter.appendRectangle(temparg3, temparg4, temparg5, temparg6);
            this.drawPath(temparg1, temparg2, false);
        }
    }
    drawPath(arg1, arg2, arg3, arg4) {
        if (typeof arg3 === 'boolean') {
            let temparg3 = arg3;
            this.drawPath(arg1, arg2, PdfFillMode.Winding, temparg3);
        }
        else {
            let temparg3 = arg3;
            let isPen = arg1 != null;
            let isBrush = arg2 != null;
            let isEvenOdd = (temparg3 === PdfFillMode.Alternate);
            if (isPen && isBrush) {
                this.streamWriter.fillStrokePath(isEvenOdd);
            }
            else if (!isPen && !isBrush) {
                this.streamWriter.endPath();
            }
            else if (isPen) {
                this.streamWriter.strokePath();
            }
            else {
                this.streamWriter.fillPath(isEvenOdd);
            }
        }
    }
    /* tslint:disable */
    drawImage(arg1, arg2, arg3, arg4, arg5) {
        if (typeof arg2 === 'number' && typeof arg3 === 'number' && typeof arg4 === 'undefined') {
            let size = arg1.physicalDimension;
            this.drawImage(arg1, arg2, arg3, size.width, size.height);
        }
        else {
            let temparg2 = arg2;
            let temparg3 = arg3;
            let temparg5 = arg5;
            arg1.save();
            let matrix = new PdfTransformationMatrix();
            this.getTranslateTransform(temparg2, (temparg3 + temparg5), matrix);
            this.getScaleTransform(arg4, arg5, matrix);
            this.pdfStreamWriter.write('q');
            this.pdfStreamWriter.modifyCtm(matrix);
            // Output template.
            let resources = this.getResources.getResources();
            if (typeof this.pageLayer !== 'undefined' && this.page != null) {
                resources.document = this.page.document;
            }
            let name = resources.getName(arg1);
            if (typeof this.pageLayer !== 'undefined') {
                this.page.setResources(resources);
            }
            this.pdfStreamWriter.executeObject(name);
            this.pdfStreamWriter.write(Operators.restoreState);
            this.pdfStreamWriter.write(Operators.newLine);
            let resource = this.getResources.getResources();
            resource.requireProcedureSet(this.procedureSets.imageB);
            resource.requireProcedureSet(this.procedureSets.imageC);
            resource.requireProcedureSet(this.procedureSets.imageI);
            resource.requireProcedureSet(this.procedureSets.text);
        }
    }
    //Implementation
    /* tslint:disable */
    /**
     * Returns `bounds` of the line info.
     * @private
     */
    getLineBounds(lineIndex, result, font, layoutRectangle, format) {
        let bounds;
        if (!result.empty && lineIndex < result.lineCount && lineIndex >= 0) {
            let line = result.lines[lineIndex];
            let vShift = this.getTextVerticalAlignShift(result.actualSize.height, layoutRectangle.height, format);
            let y = vShift + layoutRectangle.y + (result.lineHeight * lineIndex);
            let lineWidth = line.width;
            let hShift = this.getHorizontalAlignShift(lineWidth, layoutRectangle.width, format);
            let lineIndent = this.getLineIndent(line, format, layoutRectangle, (lineIndex === 0));
            hShift += (!this.rightToLeft(format)) ? lineIndent : 0;
            let x = layoutRectangle.x + hShift;
            /* tslint:disable */
            let width = (!this.shouldJustify(line, layoutRectangle.width, format)) ? lineWidth - lineIndent : layoutRectangle.width - lineIndent; /* tslint:enable */
            let height = result.lineHeight;
            bounds = new RectangleF(x, y, width, height);
        }
        else {
            bounds = new RectangleF(0, 0, 0, 0);
        }
        return bounds;
    }
    /**
     * Creates `lay outed rectangle` depending on the text settings.
     * @private
     */
    checkCorrectLayoutRectangle(textSize, x, y, format) {
        let layoutedRectangle = new RectangleF(x, y, textSize.width, textSize.width);
        if (format != null) {
            switch (format.alignment) {
                case PdfTextAlignment.Center:
                    layoutedRectangle.x -= layoutedRectangle.width / 2;
                    break;
                case PdfTextAlignment.Right:
                    layoutedRectangle.x -= layoutedRectangle.width;
                    break;
            }
            switch (format.lineAlignment) {
                case PdfVerticalAlignment.Middle:
                    layoutedRectangle.y -= layoutedRectangle.height / 2;
                    break;
                case PdfVerticalAlignment.Bottom:
                    layoutedRectangle.y -= layoutedRectangle.height;
                    break;
            }
        }
        return layoutedRectangle;
    }
    /**
     * Sets the `layer` for the graphics.
     * @private
     */
    setLayer(layer) {
        this.pageLayer = layer;
        let page = layer.page;
        if (page != null && typeof page !== 'undefined') {
            page.beginSave = this.pageSave;
        }
    }
    /**
     * Adding page number field before page saving.
     * @private
     */
    /* tslint:disable */
    pageSave(page) {
        if (page.graphics.automaticFields != null) {
            for (let i = 0; i < page.graphics.automaticFields.automaticFields.length; i++) {
                let fieldInfo = page.graphics.automaticFields.automaticFields[i];
                fieldInfo.field.performDraw(page.graphics, fieldInfo.location, fieldInfo.scalingX, fieldInfo.scalingY);
            }
        }
    }
    /**
     * `Draws a layout result`.
     * @private
     */
    drawStringLayoutResult(result, font, pen, brush, layoutRectangle, format) {
        if (!result.empty) {
            this.applyStringSettings(font, pen, brush, format, layoutRectangle);
            // Set text scaling
            let textScaling = (format != null) ? format.horizontalScalingFactor : 100.0;
            if (textScaling !== this.previousTextScaling && !this.isEmfTextScaled) {
                this.pdfStreamWriter.setTextScaling(textScaling);
                this.previousTextScaling = textScaling;
            }
            let height = (format == null || format.lineSpacing === 0) ? font.height : format.lineSpacing + font.height;
            let subScript = (format != null && format.subSuperScript === PdfSubSuperScript.SubScript);
            let shift = 0;
            shift = (subScript) ? height - (font.height + font.metrics.getDescent(format)) : (height - font.metrics.getAscent(format));
            this.shift = shift;
            this.pdfStreamWriter.startNextLine(layoutRectangle.x, layoutRectangle.y - shift);
            this.pdfStreamWriter.setLeading(+height);
            let resultHeight = 0;
            let remainingString = '';
            for (let i = 0; i < result.lines.length; i++) {
                resultHeight += result.lineHeight;
                if ((layoutRectangle.y + resultHeight) > this.clientSize.height) {
                    this.startCutIndex = i;
                    break;
                }
            }
            for (let j = this.startCutIndex; (j < result.lines.length && j >= 0); j++) {
                remainingString += result.lines[j].text;
            }
            let bounds = new RectangleF(layoutRectangle.x, layoutRectangle.y, layoutRectangle.width, layoutRectangle.height);
            this.drawLayoutResult(result, font, format, layoutRectangle);
            this.underlineStrikeoutText(pen, brush, result, font, bounds, format);
            this.isEmfPlus = false;
            this.isUseFontSize = false;
            if (this.startCutIndex !== -1) {
                let page = this.getNextPage();
                page.graphics.drawString(remainingString, font, pen, brush, layoutRectangle.x, 0, layoutRectangle.width, 0, format);
            }
        }
        else {
            throw new Error('ArgumentNullException:result');
        }
    }
    /**
     * Gets the `next page`.
     * @private
     */
    getNextPage() {
        let section = this.currentPage.section;
        let nextPage = null;
        let index = section.indexOf(this.currentPage);
        if (index === section.count - 1) {
            nextPage = section.add();
        }
        else {
            nextPage = section.getPages()[index + 1];
        }
        return nextPage;
    }
    setClip(rectangle, mode) {
        if (typeof mode === 'undefined') {
            this.setClip(rectangle, PdfFillMode.Winding);
        }
        else {
            this.pdfStreamWriter.appendRectangle(rectangle);
            this.pdfStreamWriter.clipPath((mode === PdfFillMode.Alternate));
        }
    }
    /**
     * Applies all the `text settings`.
     * @private
     */
    applyStringSettings(font, pen, brush, format, bounds) {
        let tm = this.getTextRenderingMode(pen, brush, format);
        this.stateControl(pen, brush, font, format);
        this.pdfStreamWriter.beginText();
        if ((tm) !== this.previousTextRenderingMode) {
            this.pdfStreamWriter.setTextRenderingMode(tm);
            this.previousTextRenderingMode = tm;
        }
        // Set character spacing.
        let cs = (format != null) ? format.characterSpacing : 0;
        if (cs !== this.previousCharacterSpacing && !this.isEmfTextScaled) {
            this.pdfStreamWriter.setCharacterSpacing(cs);
            this.previousCharacterSpacing = cs;
        }
        // Set word spacing.
        // NOTE: it works only if the space code is equal to 32 (0x20).
        let ws = (format != null) ? format.wordSpacing : 0;
        if (ws !== this.previousWordSpacing) {
            this.pdfStreamWriter.setWordSpacing(ws);
            this.previousWordSpacing = ws;
        }
    }
    /**
     * Calculates `shift value` if the text is vertically aligned.
     * @private
     */
    getTextVerticalAlignShift(textHeight, boundsHeight, format) {
        let shift = 0;
        if (boundsHeight >= 0 && format != null && format.lineAlignment !== PdfVerticalAlignment.Top) {
            switch (format.lineAlignment) {
                case PdfVerticalAlignment.Middle:
                    shift = (boundsHeight - textHeight) / 2;
                    break;
                case PdfVerticalAlignment.Bottom:
                    shift = boundsHeight - textHeight;
                    break;
            }
        }
        return shift;
    }
    /* tslint:disable */
    /**
     * `Draws layout result`.
     * @private
     */
    drawLayoutResult(result, font, format, layoutRectangle) {
        let vAlignShift = this.getTextVerticalAlignShift(result.actualSize.height, layoutRectangle.height, format);
        if (vAlignShift !== 0) {
            this.pdfStreamWriter.startNextLine(0, vAlignShift);
        }
        let lines = result.lines;
        for (let i = 0, len = lines.length; (i < len && i !== this.startCutIndex); i++) {
            let lineInfo = lines[i];
            let line = lineInfo.text;
            let lineWidth = lineInfo.width;
            let hAlignShift = this.getHorizontalAlignShift(lineWidth, layoutRectangle.width, format);
            let lineIndent = this.getLineIndent(lineInfo, format, layoutRectangle, (i === 0));
            hAlignShift += (!this.rightToLeft(format)) ? lineIndent : 0;
            if (hAlignShift !== 0 && !this.isEmfTextScaled) {
                this.pdfStreamWriter.startNextLine(hAlignShift, 0);
            }
            this.drawAsciiLine(lineInfo, layoutRectangle, font, format);
            if (hAlignShift !== 0 && !this.isEmfTextScaled) {
                this.pdfStreamWriter.startNextLine(-hAlignShift, 0);
            }
            if (this.isOverloadWithPosition && lines.length > 1) {
                this.pdfStreamWriter.startNextLine(-(layoutRectangle.x), 0);
                layoutRectangle.x = 0;
                layoutRectangle.width = this.clientSize.width;
                this.isOverloadWithPosition = false;
                this.isPointOverload = true;
            }
        }
        this.getResources.getResources().requireProcedureSet(this.procedureSets.text);
        if (vAlignShift !== 0) {
            this.pdfStreamWriter.startNextLine(0, -(vAlignShift - result.lineHeight));
        }
        this.pdfStreamWriter.endText();
    }
    /**
     * `Draws Ascii line`.
     * @private
     */
    drawAsciiLine(lineInfo, layoutRectangle, font, format) {
        this.justifyLine(lineInfo, layoutRectangle.width, format);
        let value = '';
        if (lineInfo.text.indexOf('(') !== -1 || lineInfo.text.indexOf(')') !== -1) {
            for (let i = 0; i < lineInfo.text.length; i++) {
                if (lineInfo.text[i] === '(') {
                    value += '\\\(';
                }
                else if (lineInfo.text[i] === ')') {
                    value += '\\\)';
                }
                else {
                    value += lineInfo.text[i];
                }
            }
        }
        if (value === '') {
            value = lineInfo.text;
        }
        let line = '(' + value + ')';
        this.pdfStreamWriter.showNextLineText(new PdfString(line));
    }
    /**
     * `Justifies` the line if needed.
     * @private
     */
    justifyLine(lineInfo, boundsWidth, format) {
        let line = lineInfo.text;
        let lineWidth = lineInfo.width;
        let shouldJustify = this.shouldJustify(lineInfo, boundsWidth, format);
        let hasWordSpacing = (format != null && format.wordSpacing !== 0);
        let symbols = StringTokenizer.spaces;
        let whitespacesCount = StringTokenizer.getCharsCount(line, symbols);
        let wordSpace = 0;
        if (shouldJustify) {
            // Correct line width.
            if (hasWordSpacing) {
                lineWidth -= (whitespacesCount * format.wordSpacing);
            }
            let difference = boundsWidth - lineWidth;
            wordSpace = difference / whitespacesCount;
            this.pdfStreamWriter.setWordSpacing(wordSpace);
        }
        else {
            // If there is justifying, but the line shouldn't be justified, restore default word spacing.
            if (hasWordSpacing) {
                this.pdfStreamWriter.setWordSpacing(format.wordSpacing);
            }
            else {
                this.pdfStreamWriter.setWordSpacing(0);
            }
        }
        return wordSpace;
    }
    /**
     * `Reset` or reinitialize the current graphic value.
     * @private
     */
    reset(size) {
        this.canvasSize = size;
        this.streamWriter.clear();
        this.initialize();
        this.initializeCoordinates();
    }
    /**
     * Checks whether the line should be `justified`.
     * @private
     */
    shouldJustify(lineInfo, boundsWidth, format) {
        let line = lineInfo.text;
        let lineWidth = lineInfo.width;
        let justifyStyle = (format != null && format.alignment === PdfTextAlignment.Justify);
        let goodWidth = (boundsWidth >= 0 && lineWidth < boundsWidth);
        let symbols = StringTokenizer.spaces;
        let whitespacesCount = StringTokenizer.getCharsCount(line, symbols);
        let hasSpaces = (whitespacesCount > 0 && line[0] !== StringTokenizer.whiteSpace);
        let goodLineBreakStyle = ((lineInfo.lineType & LineType.LayoutBreak) > 0);
        /* tslint:disable */
        let shouldJustify = (justifyStyle && goodWidth && hasSpaces && (goodLineBreakStyle || format.alignment === PdfTextAlignment.Justify)); /* tslint:enable */
        return shouldJustify;
    }
    /* tslint:disable */
    /**
     * Emulates `Underline, Strikeout` of the text if needed.
     * @private
     */
    underlineStrikeoutText(pen, brush, result, font, layoutRectangle, format) {
        if (font.underline || font.strikeout) {
            // Calculate line width.
            let linePen = this.createUnderlineStikeoutPen(pen, brush, font, format);
            if (linePen != null) {
                // Approximate line positions.
                let vShift = this.getTextVerticalAlignShift(result.actualSize.height, layoutRectangle.height, format);
                let underlineYOffset = 0;
                underlineYOffset = layoutRectangle.y + vShift + font.metrics.getAscent(format) + 1.5 * linePen.width;
                let strikeoutYOffset = layoutRectangle.y + vShift + font.metrics.getHeight(format) / 2 + 1.5 * linePen.width;
                let lines = result.lines;
                // Run through the text and draw lines.
                for (let i = 0, len = result.lineCount; i < len; i++) {
                    let lineInfo = lines[i];
                    let line = lineInfo.text;
                    let lineWidth = lineInfo.width;
                    let hShift = this.getHorizontalAlignShift(lineWidth, layoutRectangle.width, format);
                    let lineIndent = this.getLineIndent(lineInfo, format, layoutRectangle, (i === 0));
                    hShift += (!this.rightToLeft(format)) ? lineIndent : 0;
                    let x1 = layoutRectangle.x + hShift;
                    /* tslint:disable */
                    let x2 = (!this.shouldJustify(lineInfo, layoutRectangle.width, format)) ? x1 + lineWidth - lineIndent : x1 + layoutRectangle.width - lineIndent;
                    /* tslint:enable */
                    if (font.underline) {
                        let y = underlineYOffset;
                        this.drawLine(linePen, x1, y, x2, y);
                        underlineYOffset += result.lineHeight;
                    }
                    if (font.strikeout) {
                        let y = strikeoutYOffset;
                        this.drawLine(linePen, x1, y, x2, y);
                        strikeoutYOffset += result.lineHeight;
                    }
                    if (this.isPointOverload && lines.length > 1) {
                        layoutRectangle.x = 0;
                        layoutRectangle.width = this.clientSize.width;
                    }
                }
                this.isPointOverload = false;
            }
        }
    }
    /**
     * `Creates a pen` for drawing lines in the text.
     * @private
     */
    createUnderlineStikeoutPen(pen, brush, font, format) {
        // Calculate line width.
        let lineWidth = font.metrics.getSize(format) / 20;
        let linePen = null;
        // Create a pen fo the lines.
        if (pen != null) {
            linePen = new PdfPen(pen.color, lineWidth);
        }
        else if (brush != null) {
            linePen = new PdfPen(brush, lineWidth);
        }
        return linePen;
    }
    /**
     * Return `text rendering mode`.
     * @private
     */
    getTextRenderingMode(pen, brush, format) {
        let tm = TextRenderingMode.None;
        if (pen != null && brush != null) {
            tm = TextRenderingMode.FillStroke;
        }
        else if (pen != null) {
            tm = TextRenderingMode.Stroke;
        }
        else {
            tm = TextRenderingMode.Fill;
        }
        if (format != null && format.clipPath) {
            tm |= TextRenderingMode.ClipFlag;
        }
        return tm;
    }
    /**
     * Returns `line indent` for the line.
     * @private
     */
    getLineIndent(lineInfo, format, layoutBounds, firstLine) {
        let lineIndent = 0;
        let firstParagraphLine = ((lineInfo.lineType & LineType.FirstParagraphLine) > 0);
        if (format != null && firstParagraphLine) {
            lineIndent = (firstLine) ? format.firstLineIndent : format.paragraphIndent;
            lineIndent = (layoutBounds.width > 0) ? Math.min(layoutBounds.width, lineIndent) : lineIndent;
        }
        return lineIndent;
    }
    /**
     * Calculates shift value if the line is `horizontaly aligned`.
     * @private
     */
    getHorizontalAlignShift(lineWidth, boundsWidth, format) {
        let shift = 0;
        if (boundsWidth >= 0 && format != null && format.alignment !== PdfTextAlignment.Left) {
            switch (format.alignment) {
                case PdfTextAlignment.Center:
                    shift = (boundsWidth - lineWidth) / 2;
                    break;
                case PdfTextAlignment.Right:
                    shift = boundsWidth - lineWidth;
                    break;
            }
        }
        return shift;
    }
    /**
     * Gets or sets the value that indicates `text direction` mode.
     * @private
     */
    rightToLeft(format) {
        let rtl = (format != null && format.rightToLeft);
        return rtl;
    }
    stateControl(pen, brush, font, format) {
        if (typeof format === 'undefined') {
            this.stateControl(pen, brush, font, null);
        }
        else {
            let saveState = false;
            if (brush !== null) {
                if (typeof this.pageLayer !== 'undefined' && this.pageLayer != null) {
                    if (this.colorSpaceChanged === false) {
                        this.lastDocumentCS = this.pageLayer.page.document.colorSpace;
                        this.lastGraphicsCS = this.pageLayer.page.graphics.colorSpace;
                        this.colorSpace = this.pageLayer.page.document.colorSpace;
                        this.currentColorSpace = this.pageLayer.page.document.colorSpace;
                        this.colorSpaceChanged = true;
                    }
                }
                this.initCurrentColorSpace(this.currentColorSpace);
            }
            else if (pen != null) {
                if (typeof this.pageLayer !== 'undefined' && this.pageLayer != null) {
                    /* tslint:disable */
                    this.colorSpace = this.pageLayer.page.document.colorSpace;
                    this.currentColorSpace = this.pageLayer.page.document.colorSpace;
                }
                this.initCurrentColorSpace(this.currentColorSpace);
            }
            this.penControl(pen, saveState);
            this.brushControl(brush, saveState);
            this.fontControl(font, format, saveState);
        }
    }
    /**
     * Initializes the `current color space`.
     * @private
     */
    initCurrentColorSpace(colorspace) {
        let re = this.getResources.getResources();
        if (!this.bCSInitialized) {
            this.pdfStreamWriter.setColorSpace('Device' + this.currentColorSpaces[this.currentColorSpace], true);
            this.pdfStreamWriter.setColorSpace('Device' + this.currentColorSpaces[this.currentColorSpace], false);
            this.bCSInitialized = true;
        }
    }
    /**
     * Controls the `pen state`.
     * @private
     */
    penControl(pen, saveState) {
        if (pen != null) {
            this.currentPen = pen;
            this.colorSpace = PdfColorSpace.Rgb;
            /* tslint:disable */
            pen.monitorChanges(this.currentPen, this.pdfStreamWriter, this.getResources, saveState, this.colorSpace, this.matrix.clone());
            /* tslint:enable */
            this.currentPen = pen.clone();
        }
    }
    /**
     * Controls the `brush state`.
     * @private
     */
    brushControl(brush, saveState) {
        if (brush != null) {
            this.currentBrush = brush;
            /* tslint:disable */
            brush.monitorChanges(this.currentBrush, this.pdfStreamWriter, this.getResources, saveState, this.colorSpace);
            /* tslint:enable */
            this.currentBrush = brush;
            brush = null;
        }
    }
    /**
     * Saves the font and other `font settings`.
     * @private
     */
    fontControl(font, format, saveState) {
        if (font != null) {
            let curSubSuper = (format != null) ? format.subSuperScript : PdfSubSuperScript.None;
            /* tslint:disable */
            let prevSubSuper = (this.currentStringFormat != null) ? this.currentStringFormat.subSuperScript : PdfSubSuperScript.None; /* tslint:enable */
            if (saveState || font !== this.currentFont || curSubSuper !== prevSubSuper) {
                let resources = this.getResources.getResources();
                this.currentFont = font;
                this.currentStringFormat = format;
                let size = font.metrics.getSize(format);
                /* tslint:disable */
                this.isEmfTextScaled = false;
                let fontName = resources.getName(font);
                this.pdfStreamWriter.setFont(font, fontName, size);
            }
        }
    }
    setTransparency(arg1, arg2, arg3) {
        if (typeof arg2 === 'undefined') {
            this.istransparencySet = true;
            this.setTransparency(arg1, arg1, PdfBlendMode.Normal);
        }
        else if (typeof arg2 === 'number' && typeof arg3 === 'undefined') {
            this.setTransparency(arg1, arg2, PdfBlendMode.Normal);
        }
        else {
            if (this.trasparencies == null) {
                this.trasparencies = new TemporaryDictionary();
            }
            let transp = null;
            let td = new TransparencyData(arg1, arg2, arg3);
            if (this.trasparencies.containsKey(td)) {
                transp = this.trasparencies.getValue(td);
            }
            if (transp == null) {
                transp = new PdfTransparency(arg1, arg2, arg3);
                this.trasparencies.setValue(td, transp);
            }
            let resources = this.getResources.getResources();
            let name = resources.getName(transp);
            let sw = this.streamWriter;
            sw.setGraphicsState(name);
        }
    }
    clipTranslateMargins(x, y, left, top, right, bottom) {
        if (x instanceof RectangleF && typeof y === 'undefined') {
            this.clipBounds = x;
            this.pdfStreamWriter.writeComment('Clip margins.');
            this.pdfStreamWriter.appendRectangle(x);
            this.pdfStreamWriter.closePath();
            this.pdfStreamWriter.clipPath(false);
            this.pdfStreamWriter.writeComment('Translate co-ordinate system.');
            this.translateTransform(x.x, x.y);
        }
        else if (typeof x === 'number') {
            let clipArea = new RectangleF(left, top, this.size.width - left - right, this.size.height - top - bottom);
            this.clipBounds = clipArea;
            this.pdfStreamWriter.writeComment("Clip margins.");
            this.pdfStreamWriter.appendRectangle(clipArea);
            this.pdfStreamWriter.closePath();
            this.pdfStreamWriter.clipPath(false);
            this.pdfStreamWriter.writeComment("Translate co-ordinate system.");
            this.translateTransform(x, y);
        }
    }
    /**
     * `Updates y` co-ordinate.
     * @private
     */
    updateY(y) {
        return -y;
    }
    /**
     * Used to `translate the transformation`.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // create a new page
     * let page1 : PdfPage = document.pages.add();
     * // set pen
     * let pen : PdfPen = new PdfPen(new PdfColor(0, 0, 0));
     * //
     * // set translate transform
     * page1.graphics.translateTransform(100, 100);
     * //
     * // draw the rectangle after applying translate transform
     * page1.graphics.drawRectangle(pen, new RectangleF({x : 0, y : 0}, {width : 100, height : 50}));
     * // save the document.
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     * @param offsetX The x-coordinate of the translation.
     * @param offsetY The y-coordinate of the translation.
     */
    translateTransform(offsetX, offsetY) {
        let matrix = new PdfTransformationMatrix();
        this.getTranslateTransform(offsetX, offsetY, matrix);
        this.pdfStreamWriter.modifyCtm(matrix);
        this.matrix.multiply(matrix);
    }
    /**
     * `Translates` coordinates of the input matrix.
     * @private
     */
    getTranslateTransform(x, y, input) {
        input.translate(x, this.updateY(y));
        return input;
    }
    /* tslint:disable */
    /**
     * Applies the specified `scaling operation` to the transformation matrix of this Graphics by prepending it to the object's transformation matrix.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // create a new page
     * let page1 : PdfPage = document.pages.add();
     * // create pen
     * let pen : PdfPen = new PdfPen(new PdfColor(0, 0, 0));
     * //
     * // apply scaling trasformation
     * page1.graphics.scaleTransform(1.5, 2);
     * //
     * // draw the rectangle after applying scaling transform
     * page1.graphics.drawRectangle(pen, new RectangleF({x : 100, y : 100}, {width : 100, height : 50}));
     * // save the document.
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     * @param scaleX Scale factor in the x direction.
     * @param scaleY Scale factor in the y direction.
     */
    /* tslint:enable */
    scaleTransform(scaleX, scaleY) {
        let matrix = new PdfTransformationMatrix();
        this.getScaleTransform(scaleX, scaleY, matrix);
        this.pdfStreamWriter.modifyCtm(matrix);
        this.matrix.multiply(matrix);
    }
    /**
     * `Scales` coordinates of the input matrix.
     * @private
     */
    getScaleTransform(x, y, input) {
        if (input == null) {
            input = new PdfTransformationMatrix();
        }
        input.scale(x, y);
        return input;
    }
    /**
     * Applies the specified `rotation` to the transformation matrix of this Graphics.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // create a new page
     * let page1 : PdfPage = document.pages.add();
     * // create pen
     * let pen : PdfPen = new PdfPen(new PdfColor(0, 0, 0));
     * //
     * // set RotateTransform with 25 degree of angle
     * page1.graphics.rotateTransform(25);
     * //
     * // draw the rectangle after RotateTransformation
     * page1.graphics.drawRectangle(pen, new RectangleF({x : 100, y : 100}, {width : 100, height : 50}));
     * // save the document.
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     * @param angle Angle of rotation in degrees.
     */
    rotateTransform(angle) {
        let matrix = new PdfTransformationMatrix();
        this.getRotateTransform(angle, matrix);
        this.pdfStreamWriter.modifyCtm(matrix);
        this.matrix.multiply(matrix);
    }
    /**
     * `Initializes coordinate system`.
     * @private
     */
    initializeCoordinates() {
        // Matrix equation: TM(T-1)=M', where T=[1 0 0 -1 0 h]
        this.pdfStreamWriter.writeComment('Change co-ordinate system to left/top.');
        // Translate co-ordinates only, don't flip.
        if (this.mediaBoxUpperRightBound !== -(this.size.height)) {
            if (this.cropBox == null) {
                if (this.mediaBoxUpperRightBound === this.size.height || this.mediaBoxUpperRightBound === 0) {
                    this.translateTransform(0, this.updateY(this.size.height));
                }
                else {
                    this.translateTransform(0, this.updateY(this.mediaBoxUpperRightBound));
                }
            }
        }
    }
    /**
     * `Rotates` coordinates of the input matrix.
     * @private
     */
    getRotateTransform(angle, input) {
        if (input == null || typeof input === 'undefined') {
            input = new PdfTransformationMatrix();
        }
        input.rotate(this.updateY(angle));
        return input;
    }
    /**
     * `Saves` the current state of this Graphics and identifies the saved state with a GraphicsState.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // create a new page
     * let page1 : PdfPage = document.pages.add();
     * // create pen
     * let pen : PdfPen = new PdfPen(new PdfColor(0, 0, 0));
     * //
     * // save the graphics state
     * let state1 : PdfGraphicsState = page1.graphics.save();
     * //
     * page1.graphics.scaleTransform(1.5, 2);
     * // draw the rectangle
     * page1.graphics.drawRectangle(pen, new RectangleF({x : 100, y : 100}, {width : 100, height : 50}));
     * // restore the graphics state
     * page1.graphics.restore(state1);
     * // save the document.
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    save() {
        let state = new PdfGraphicsState(this, this.matrix.clone());
        state.brush = this.currentBrush;
        state.pen = this.currentPen;
        state.font = this.currentFont;
        state.colorSpace = this.currentColorSpace;
        state.characterSpacing = this.previousCharacterSpacing;
        state.wordSpacing = this.previousWordSpacing;
        state.textScaling = this.previousTextScaling;
        state.textRenderingMode = this.previousTextRenderingMode;
        this.graphicsState.push(state);
        this.pdfStreamWriter.saveGraphicsState();
        return state;
    }
    restore(state) {
        if (typeof state === 'undefined') {
            if (this.graphicsState.length > 0) {
                this.doRestoreState();
            }
        }
        else {
            if (this.graphicsState.indexOf(state) !== -1) {
                for (;;) {
                    if (this.graphicsState.length === 0) {
                        break;
                    }
                    let popState = this.doRestoreState();
                    if (popState === state) {
                        break;
                    }
                }
            }
        }
    }
    /**
     * `Restores graphics state`.
     * @private
     */
    doRestoreState() {
        let state = this.graphicsState.pop();
        this.transformationMatrix = state.matrix;
        this.currentBrush = state.brush;
        this.currentPen = state.pen;
        this.currentFont = state.font;
        this.currentColorSpace = state.colorSpace;
        this.previousCharacterSpacing = state.characterSpacing;
        this.previousWordSpacing = state.wordSpacing;
        this.previousTextScaling = state.textScaling;
        this.previousTextRenderingMode = state.textRenderingMode;
        this.pdfStreamWriter.restoreGraphicsState();
        return state;
    }
}
// Constants
/**
 * Specifies the mask of `path type values`.
 * @private
 */
PdfGraphics.pathTypesValuesMask = 0xf;
/**
 * Checks whether the object is `transparencyObject`.
 * @hidden
 * @private
 */
PdfGraphics.transparencyObject = false;
/**
 * `GetResourceEventHandler` class is alternate for event handlers and delegates.
 * @private
 * @hidden
 */
class GetResourceEventHandler {
    /**
     * Return the instance of `PdfResources` class.
     * @private
     */
    getResources() {
        return this.sender.getResources();
    }
    /**
     * Initialize instance of `GetResourceEventHandler` class.
     * Alternate for event handlers and delegates.
     * @private
     */
    constructor(sender) {
        this.sender = sender;
    }
}
class PdfGraphicsState {
    constructor(graphics, matrix) {
        /**
         * Stores `previous rendering mode`.
         * @default TextRenderingMode.Fill
         * @private
         */
        this.internalTextRenderingMode = TextRenderingMode.Fill;
        /**
         * `Previous character spacing` value or 0.
         * @default 0.0
         * @private
         */
        this.internalCharacterSpacing = 0.0;
        /**
         * `Previous word spacing` value or 0.
         * @default 0.0
         * @private
         */
        this.internalWordSpacing = 0.0;
        /**
         * The previously used `text scaling value`.
         * @default 100.0
         * @private
         */
        this.internalTextScaling = 100.0;
        /**
         * `Current color space`.
         * @default PdfColorSpace.Rgb
         * @private
         */
        this.pdfColorSpace = PdfColorSpace.Rgb;
        if (typeof graphics !== 'undefined') {
            this.pdfGraphics = graphics;
            this.transformationMatrix = matrix;
        }
    }
    // Properties
    /**
     * Gets the parent `graphics object`.
     * @private
     */
    get graphics() {
        return this.pdfGraphics;
    }
    /**
     * Gets the `current matrix`.
     * @private
     */
    get matrix() {
        return this.transformationMatrix;
    }
    /**
     * Gets or sets the `current character spacing`.
     * @private
     */
    get characterSpacing() {
        return this.internalCharacterSpacing;
    }
    set characterSpacing(value) {
        this.internalCharacterSpacing = value;
    }
    /**
     * Gets or sets the `word spacing` value.
     * @private
     */
    get wordSpacing() {
        return this.internalWordSpacing;
    }
    set wordSpacing(value) {
        this.internalWordSpacing = value;
    }
    /**
     * Gets or sets the `text scaling` value.
     * @private
     */
    get textScaling() {
        return this.internalTextScaling;
    }
    set textScaling(value) {
        this.internalTextScaling = value;
    }
    /**
     * Gets or sets the `current pen` object.
     * @private
     */
    get pen() {
        return this.pdfPen;
    }
    set pen(value) {
        this.pdfPen = value;
    }
    /**
     * Gets or sets the `brush`.
     * @private
     */
    get brush() {
        return this.pdfBrush;
    }
    set brush(value) {
        this.pdfBrush = value;
    }
    /**
     * Gets or sets the `current font` object.
     * @private
     */
    get font() {
        return this.pdfFont;
    }
    set font(value) {
        this.pdfFont = value;
    }
    /**
     * Gets or sets the `current color space` value.
     * @private
     */
    get colorSpace() {
        return this.pdfColorSpace;
    }
    set colorSpace(value) {
        this.pdfColorSpace = value;
    }
    /**
     * Gets or sets the `text rendering mode`.
     * @private
     */
    get textRenderingMode() {
        return this.internalTextRenderingMode;
    }
    set textRenderingMode(value) {
        this.internalTextRenderingMode = value;
    }
}
class TransparencyData {
    // Constructors
    /**
     * Initializes a new instance of the `TransparencyData` class.
     * @private
     */
    constructor(alphaPen, alphaBrush, blendMode) {
        this.alphaPen = alphaPen;
        this.alphaBrush = alphaBrush;
        this.blendMode = blendMode;
    }
}

/**
 * The `PdfPageLayer` used to create layers in PDF document.
 * @private
 */
class PdfPageLayer {
    constructor(page, streamClipPageTemplates) {
        // private bSaved : boolean;
        /**
         * Local Variable to store the `color space` of the document.
         * @private
         */
        this.pdfColorSpace = PdfColorSpace.Rgb;
        /**
         * Local Variable to set `visibility`.
         * @default true
         * @private
         */
        this.isVisible = true;
        /**
         * Indicates if `Sublayer` is present.
         * @default false
         * @private
         */
        this.sublayer = false;
        /**
         * Local variable to store `length` of the graphics.
         * @default 0
         * @private
         */
        this.contentLength = 0;
        /**
         * Instance for `PdfDictionaryProperties` Class.
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        if (typeof streamClipPageTemplates === 'undefined') {
            this.pdfPage = page;
            this.clipPageTemplates = true;
            this.content = new PdfStream();
        }
        else if (streamClipPageTemplates instanceof PdfStream || streamClipPageTemplates === null) {
            if (page == null) {
                throw new Error('ArgumentNullException:page');
            }
            if (streamClipPageTemplates == null) {
                throw new Error('ArgumentNullException:stream');
            }
            this.pdfPage = page;
            this.content = streamClipPageTemplates;
        }
        else {
            this.constructor(page);
            this.clipPageTemplates = streamClipPageTemplates;
        }
    }
    // Properties
    /**
     * Get or set the `color space`.
     * @private
     */
    get colorSpace() {
        return this.pdfColorSpace;
    }
    set colorSpace(value) {
        this.pdfColorSpace = value;
    }
    /**
     * Gets parent `page` of the layer.
     * @private
     */
    get page() {
        return this.pdfPage;
    }
    /**
     * Gets and Sets the `id of the layer`.
     * @private
     */
    get layerId() {
        return this.layerid;
    }
    set layerId(value) {
        this.layerid = value;
    }
    /**
     * Gets or sets the `name` of the layer.
     * @private
     */
    get name() {
        return this.layerName;
    }
    set name(value) {
        this.layerName = value;
    }
    /**
     * Gets or sets the `visibility` of the layer.
     * @private
     */
    get visible() {
        return this.isVisible;
    }
    set visible(value) {
        this.isVisible = value;
    }
    /**
     * Gets `Graphics` context of the layer, used to draw various graphical content on layer.
     * @private
     */
    get graphics() {
        if ((this.pdfGraphics == null)) {
            this.initializeGraphics(this.page);
        }
        return this.pdfGraphics;
    }
    /**
     * Gets the collection of `PdfPageLayer`, this collection handle by the class 'PdfPageLayerCollection'.
     * @private
     */
    get layers() {
        if (this.layer == null) {
            this.layer = new PdfPageLayerCollection(this.page);
            this.layer.sublayer = true;
            return this.layer;
        }
        else {
            return this.layer;
        }
    }
    // Implementation
    /**
     * `Adds` a new PDF Page layer.
     * @private
     */
    add() {
        let layer = new PdfPageLayer(this.pdfPage);
        layer.name = '';
        return layer;
    }
    /**
     * Returns a value indicating the `sign` of a single-precision floating-point number.
     * @private
     */
    sign(number) {
        if (number === 0) {
            return 0;
        }
        else if (number > 0) {
            return 1;
        }
        else {
            return -1;
        }
    }
    /**
     * `Initializes Graphics context` of the layer.
     * @private
     */
    initializeGraphics(page) {
        let oPage = page;
        let gr = new GetResourceEventHandler(this.page);
        this.pdfGraphics = new PdfGraphics(page.size, gr, this.content);
        this.pdfGraphics.mediaBoxUpperRightBound = 0;
        if (oPage != null) {
            let sc = oPage.section.parent;
            if (sc != null) {
                this.pdfGraphics.colorSpace = sc.document.colorSpace;
                this.colorSpace = sc.document.colorSpace;
            }
        }
        // Transform coordinates to the left/top and activate margins.
        let isSame = (this.sign(page.origin.y) === this.sign(page.origin.x));
        // if (page != null) {
        if (page.origin.x >= 0 && page.origin.y >= 0 || !(isSame)) {
            this.pdfGraphics.initializeCoordinates();
        }
        else {
            // this.m_graphics.InitializeCoordinates(page);
        }
        let clipRect = oPage.section.getActualBounds(oPage, true);
        let margins = oPage.section.pageSettings.margins;
        if (this.clipPageTemplates) {
            if (page.origin.x >= 0 && page.origin.y >= 0) {
                this.pdfGraphics.clipTranslateMargins(clipRect);
            }
        }
        else {
            this.graphics.clipTranslateMargins(clipRect.x, clipRect.y, margins.left, margins.top, margins.right, margins.bottom);
        }
        this.pdfGraphics.setLayer(this);
        // this.bSaved = false;
    }
    // IPdfWrapper Members
    /**
     * Gets the wrapped `element`.
     * @private
     */
    get element() {
        return this.content;
    }
}

/**
 * PdfCollection.ts class for EJ2-PDF
 * The class used to handle the collection of PdF objects.
 */
class PdfCollection {
    // Constructors
    /**
     * Initializes a new instance of the `Collection` class.
     * @private
     */
    constructor() {
        //
    }
    // Properties
    /**
     * Gets the `Count` of stored objects.
     * @private
     */
    get count() {
        if (typeof this.collection === 'undefined') {
            this.collection = [];
        }
        return this.collection.length;
    }
    /**
     * Gets the `list` of stored objects.
     * @private
     */
    get list() {
        if (typeof this.collection === 'undefined') {
            this.collection = [];
        }
        return this.collection;
    }
}

/**
 * PdfPageLayerCollection.ts class for EJ2-PDF
 */
/**
 * The class provides methods and properties to handle the collections of `PdfPageLayer`.
 */
class PdfPageLayerCollection extends PdfCollection {
    constructor(page) {
        super();
        /**
         * Stores the `number of first level layers` in the document.
         * @default 0
         * @private
         */
        this.parentLayerCount = 0;
        /**
         * Indicates if `Sublayer` is present.
         * @default false
         * @private
         */
        this.sublayer = false;
        /**
         * Stores the `optional content dictionary`.
         * @private
         */
        this.optionalContent = new PdfDictionary();
        if (page instanceof PdfPageBase) {
            // if (page == null) {
            //     throw new Error('ArgumentNullException:page');
            // }
            this.page = page;
            let lPage = page;
            // if (lPage != null) {
            this.parseLayers(lPage);
            // }
        }
    }
    items(index, value) {
        if (typeof index === 'number' && typeof value === 'undefined') {
            let obj = this.list[index];
            return obj;
        }
        else {
            if (value == null) {
                throw new Error('ArgumentNullException: layer');
            }
            if (value.page !== this.page) {
                throw new Error('ArgumentException: The layer belongs to another page');
            }
            // // Add/remove the layer.
            // let layer : PdfPageLayer = this.items(index);
            // if (layer != null) {
            //     this.RemoveLayer(layer);
            // }
            // this.List[index] = value;
            // this.InsertLayer(index, value);
        }
    }
    add(firstArgument, secondArgument) {
        if (typeof firstArgument === 'undefined') {
            let layer = new PdfPageLayer(this.page);
            layer.name = '';
            this.add(layer);
            return layer;
        }
        else if (firstArgument instanceof PdfPageLayer) {
            // if (layer == null)
            //     throw new ArgumentNullException("layer");
            // if (layer.Page != m_page)
            //     throw new ArgumentException("The layer belongs to another page");
            let index = this.list.push(firstArgument);
            // Register layer.
            this.addLayer(index, firstArgument);
            return index;
        }
        else {
            return 0;
        }
    }
    /**
     * Registers `layer` at the page.
     * @private
     */
    addLayer(index, layer) {
        let reference = new PdfReferenceHolder(layer);
        this.page.contents.add(reference);
    }
    // private RemoveLayer(layer : PdfPageLayer) : void {
    //     if (layer == null) {
    //         throw new Error('ArgumentNullException:layer');
    //     }
    //     let reference : PdfReferenceHolder = new PdfReferenceHolder(layer);
    //     if (this.page != null) {
    //         this.page.Contents.Remove(reference);
    //     }
    // }
    /**
     * Inserts `PdfPageLayer` into the collection at specified index.
     * @private
     */
    insert(index, layer) {
        // if (index < 0)
        //     throw new ArgumentOutOfRangeException("index", "Value can not be less 0");
        // if (layer == null)
        //     throw new ArgumentNullException("layer");
        // if (layer.Page != m_page)
        //     throw new ArgumentException("The layer belongs to another page");
        let list = [];
        let length = this.list.length;
        for (let i = index; i < length; i++) {
            list.push(this.list.pop());
        }
        this.list.push(layer);
        for (let i = 0; i < list.length; i++) {
            this.list.push(list[i]);
        }
        // Register layer.
        this.insertLayer(index, layer);
    }
    /**
     * Registers layer at the page.
     * @private
     */
    insertLayer(index, layer) {
        if (layer == null) {
            throw new Error('ArgumentNullException:layer');
        }
        let reference = new PdfReferenceHolder(layer);
        this.page.contents.insert(index, reference);
    }
    // tslint:disable
    /**
     * `Parses the layers`.
     * @private
     */
    parseLayers(loadedPage) {
        // if (loadedPage == null) {
        //     throw new Error('ArgumentNullException:loadedPage');
        // }
        let contents = this.page.contents;
        let resource = this.page.getResources();
        let crossTable = null;
        crossTable = loadedPage.crossTable;
        // } else {
        //     crossTable = (loadedPage as PdfLoadedPage).CrossTable;
        //     Propertie = PdfCrossTable.Dereference(Resource[DictionaryProperties.Properties]) as PdfDictionary;
        //     ocproperties = PdfCrossTable.Dereference((loadedPage as PdfLoadedPage).
        //     Document.Catalog[DictionaryProperties.OCProperties]) as PdfDictionary;
        // }
        let saveStream = new PdfStream();
        let restoreStream = new PdfStream();
        let saveState = 'q';
        let restoreState = 'Q';
        // for (let index : number = 0; index < contents.Items.length; index++) {
        //     let obj : IPdfPrimitive = contents[index];
        //     let stream : PdfStream = crossTable.GetObject(obj) as PdfStream;
        //     if (stream == null)
        //         throw new PdfDocumentException("Invalid contents array.");
        //     // if (stream.Compress)
        //     {
        //         if (!loadedPage.Imported)
        //             stream.Decompress();
        //     }
        //     byte[] contentId = stream.Data;
        //     string str = PdfString.ByteToString(contentId);
        //     if (!loadedPage.Imported && (contents.Count == 1) && ((stream.Data[stream.Data.Length - 2] ==
        //     RestoreState) || (stream.Data[stream.Data.Length - 1] == RestoreState)))
        //     {
        //         byte[] content = stream.Data;
        //         byte[] data = new byte[content.Length + 4];
        //         data[0] = SaveState;
        //         data[1] = NewLine;
        //         content.CopyTo(data, 2);
        //         data[data.Length - 2] = NewLine;
        //         data[data.Length - 1] = RestoreState;
        //         stream.Data = data;
        //     }
        //     if (ocproperties != null)
        //     {
        //         if (Propertie != null)
        //         {
        //             foreach (KeyValuePair<PdfName, IPdfPrimitive> prop in Propertie.Items)
        //             {
        //                 String Key = prop.Key.ToString();
        //                 PdfReferenceHolder refh = prop.Value as PdfReferenceHolder;
        //                 PdfDictionary Dict = null;
        //                 if (refh != null)
        //                 {
        //                     Dict = refh.Object as PdfDictionary;
        //                 }
        //                 else
        //                 {
        //                     Dict = prop.Value as PdfDictionary;
        //                 }
        //                 PdfDictionary m_usage = PdfCrossTable.Dereference(Dict[DictionaryProperties.Usage]) as PdfDictionary;
        //                 if (m_usage != null)
        //                 {
        //                     if (str.Contains(Key))
        //                     {
        //                         PdfPageLayer layer = new PdfPageLayer(loadedPage, stream);
        //                         PdfDictionary printoption = PdfCrossTable.Dereference(m_usage[DictionaryProperties.Print])
        //                         as PdfDictionary;
        //                         if (printoption != null)
        //                         {
        //                             layer.m_printOption = printoption;
        //                             foreach (KeyValuePair<PdfName, IPdfPrimitive> value in printoption.Items)
        //                             {
        //                                 if (value.Key.Value.Equals(DictionaryProperties.PrintState))
        //                                 {
        //                                     string printState = (value.Value as PdfName).Value;
        //                                     if (printState.Equals(DictionaryProperties.OCGON))
        //                                     {
        //                                         layer.PrintState = PdfPrintState.AlwaysPrint;
        //                                         break;
        //                                     }
        //                                     else
        //                                     {
        //                                         layer.PrintState = PdfPrintState.NeverPrint;
        //                                         break;
        //                                     }
        //                                 }
        //                             }
        //                         }
        //                         PdfString layerName = PdfCrossTable.Dereference(Dict[DictionaryProperties.Name]) as PdfString;
        //                         layer.Name = layerName.Value;
        //                         List.add(layer);
        //                         isLayerAdded = true;
        //                         if(!str.Contains("EMC"))
        //                         break;
        //                     }
        //                 }
        //                 else
        //                 {
        //                     if (str.Contains(Key))
        //                     {
        //                         PdfPageLayer layer = new PdfPageLayer(loadedPage, stream);
        //                         List.add(layer);
        //                         if(Dict.ContainsKey(DictionaryProperties.Name))
        //                         {
        //                         PdfString layerName = PdfCrossTable.Dereference(Dict[DictionaryProperties.Name]) as PdfString;
        //                         layer.Name = layerName.Value;
        //                         }
        //                         isLayerAdded = true;
        //                         break;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        //     if (!isLayerAdded)
        //     {
        //         PdfPageLayer layer = new PdfPageLayer(loadedPage, stream);
        //         List.add(layer);
        //     }
        //     else
        //         isLayerAdded = false;
        // }
        let saveData = [];
        saveData.push(saveState);
        saveStream.data = saveData;
        contents.insert(0, new PdfReferenceHolder(saveStream));
        saveData = [];
        saveData.push(restoreState);
        restoreStream.data = saveData;
        contents.insert(contents.count, new PdfReferenceHolder(restoreStream));
    }
    /**
     * Returns `index of` the `PdfPageLayer` in the collection if exists, -1 otherwise.
     * @private
     */
    indexOf(layer) {
        if (layer == null) {
            throw new Error('ArgumentNullException: layer');
        }
        let index = this.list.indexOf(layer);
        return index;
    }
}

/**
 * PdfTemplate.ts class for EJ2-PDF
 */
/**
 * Represents `Pdf Template` object.
 * @private
 */
class PdfTemplate {
    constructor(arg1, arg2) {
        /**
         * Initialize an instance for `DictionaryProperties` class.
         * @private
         * @hidden
         */
        this.dictionaryProperties = new DictionaryProperties();
        /**
         * Checks whether the transformation 'is performed'.
         * @default true
         * @private
         */
        this.writeTransformation = true;
        if (typeof arg1 === 'undefined') {
            //
        }
        else if (arg1 instanceof SizeF && typeof arg2 === 'undefined') {
            this.content = new PdfStream();
            let tempSize = new SizeF(arg1.width, arg1.height);
            this.setSize(tempSize);
            this.initialize();
        }
        else {
            this.content = new PdfStream();
            this.setSize(new SizeF(arg1, arg2));
            this.initialize();
        }
    }
    //Properties
    /**
     * Gets the size of the 'PdfTemplate'.
     */
    get size() {
        return this.templateSize;
    }
    /**
     * Gets the width of the 'PdfTemplate'.
     */
    get width() {
        return this.size.width;
    }
    /**
     * Gets the height of the 'PdfTemplate'.
     */
    get height() {
        return this.size.height;
    }
    /**
     * Gets the `graphics` of the 'PdfTemplate'.
     */
    get graphics() {
        if (this.pdfGraphics == null || typeof this.pdfGraphics === 'undefined') {
            let gr = new GetResourceEventHandler(this);
            let g = new PdfGraphics(this.size, gr, this.content);
            this.pdfGraphics = g;
            // if(this.writeTransformation) {
            // Transform co-ordinates to Top/Left.
            this.pdfGraphics.initializeCoordinates();
            // }
        }
        return this.pdfGraphics;
    }
    /**
     * Gets the resources and modifies the template dictionary.
     * @private
     */
    getResources() {
        if (this.resources == null) {
            this.resources = new PdfResources();
            this.content.items.setValue(this.dictionaryProperties.resources, this.resources);
        }
        return this.resources;
    }
    // Public methods
    /**
     * `Initialize` the type and subtype of the template.
     * @private
     */
    initialize() {
        this.addType();
        this.addSubType();
    }
    /**
     * `Adds type key`.
     * @private
     */
    addType() {
        let value = new PdfName(this.dictionaryProperties.xObject);
        this.content.items.setValue(this.dictionaryProperties.type, value);
    }
    /**
     * `Adds SubType key`.
     * @private
     */
    addSubType() {
        let value = new PdfName(this.dictionaryProperties.form);
        this.content.items.setValue(this.dictionaryProperties.subtype, value);
    }
    reset(size) {
        if (typeof size === 'undefined') {
            if (this.resources != null) {
                this.resources = null;
                this.content.remove(this.dictionaryProperties.resources);
            }
            if (this.graphics != null) {
                this.graphics.reset(this.size);
            }
        }
        else {
            this.setSize(size);
            this.reset();
        }
    }
    /**
     * `Set the size` of the 'PdfTemplate'.
     * @private
     */
    setSize(size) {
        let rect = new RectangleF(new PointF(0, 0), size);
        let val = PdfArray.fromRectangle(rect);
        this.content.items.setValue(this.dictionaryProperties.bBox, val);
        this.templateSize = size;
    }
    // /**
    //  * Returns the value of current graphics.
    //  * @private
    //  */
    // public GetGraphics(g : PdfGraphics) : PdfGraphics {
    //     if (this.graphics == null || typeof this.graphics === 'undefined') {
    //         this.graphics = g;
    //         this.graphics.Size = this.Size;
    //         this.graphics.StreamWriter = new PdfStreamWriter(this.content)
    //         this.graphics.Initialize();
    //         if(this.writeTransformation) {
    //             this.graphics.InitializeCoordinates();
    //         }
    //     }
    //     return this.graphics;
    // }
    // IPdfWrapper Members
    /**
     * Gets the `content stream` of 'PdfTemplate' class.
     * @private
     */
    get element() {
        return this.content;
    }
}

/**
 * ByteArray class
 * Used to keep information about image stream as byte array.
 * @private
 */
class ByteArray {
    /**
     * Initialize the new instance for `byte-array` class
     * @hidden
     * @private
     */
    constructor(length) {
        /**
         * Current stream `position`.
         * @default 0
         * @private
         */
        this.mPosition = 0;
        this.buffer = new Uint8Array(length);
        this.dataView = new DataView(this.buffer.buffer);
    }
    /**
     * Gets and Sets a current `position` of byte array.
     * @hidden
     * @private
     */
    get position() {
        return this.mPosition;
    }
    set position(value) {
        this.mPosition = value;
    }
    /**
     * `Read` from current stream position.
     * @default 0
     * @hidden
     * @private
     */
    read(buffer, offset, count) {
        for (let index = offset; index < count; index++) {
            let position = this.position;
            buffer.buffer[index] = this.readByte(position);
            this.position++;
        }
    }
    /**
     * @hidden
     */
    getBuffer(index) {
        return this.buffer[index];
    }
    /**
     * @hidden
     */
    writeFromBase64String(base64) {
        let arr = this.encodedString(base64);
        this.buffer = arr;
    }
    /**
     * @hidden
     */
    encodedString(input) {
        let keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let chr1;
        let chr2;
        let chr3;
        let enc1;
        let enc2;
        let enc3;
        let enc4;
        let i = 0;
        let resultIndex = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        let totalLength = input.length * 3 / 4;
        if (input.charAt(input.length - 1) === keyStr.charAt(64)) {
            totalLength--;
        }
        let output = new Uint8Array(totalLength | 0);
        while (i < input.length) {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output[resultIndex++] = chr1;
            output[resultIndex++] = chr2;
            output[resultIndex++] = chr3;
        }
        return output;
    }
    /**
     * @hidden
     */
    readByte(offset) {
        return (this.buffer[offset]);
    }
    /**
     * @hidden
     */
    get internalBuffer() {
        return this.buffer;
    }
    /**
     * @hidden
     */
    get count() {
        return this.buffer.byteLength;
    }
}

/**
 * `PdfBoolean` class is used to perform boolean related primitive operations.
 * @private
 */
class PdfBoolean {
    //constructor
    /**
     * Initializes a new instance of the `PdfBoolean` class.
     * @private
     */
    constructor(value) {
        /**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */
        this.currentPosition = -1;
        this.value = value;
    }
    //Properties
    /**
     * Gets or sets the `Status` of the specified object.
     * @private
     */
    get status() {
        return this.objectStatus;
    }
    set status(value) {
        this.objectStatus = value;
    }
    /**
     * Gets or sets a value indicating whether this document `is saving` or not.
     * @private
     */
    get isSaving() {
        return this.saving;
    }
    set isSaving(value) {
        this.saving = value;
    }
    /**
     * Gets or sets the `index` value of the specified object.
     * @private
     */
    get objectCollectionIndex() {
        return this.index;
    }
    set objectCollectionIndex(value) {
        this.index = value;
    }
    /**
     * Gets or sets the `position` of the object.
     * @private
     */
    get position() {
        return this.currentPosition;
    }
    set position(value) {
        this.currentPosition = value;
    }
    /**
     * Returns `cloned object`.
     * @private
     */
    get clonedObject() {
        let rValue = null;
        return rValue;
    }
    /**
     * `Saves` the object using the specified writer.
     * @private
     */
    save(writer) {
        writer.write(this.boolToStr(this.value));
    }
    /**
     * Creates a `copy of PdfBoolean`.
     * @private
     */
    clone(crossTable) {
        let newNumber = new PdfBoolean(this.value);
        return newNumber;
    }
    // Implementation
    /**
     * Converts `boolean to string` - 0/1 'true'/'false'.
     * @private
     */
    boolToStr(value) {
        return value ? 'true' : 'false';
    }
}

/**
 * ImageDecoder class
 */
/**
 * Specifies the image `format`.
 * @private
 */
var ImageFormat;
(function (ImageFormat) {
    /**
     * Specifies the type of `Unknown`.
     * @hidden
     * @private
     */
    ImageFormat[ImageFormat["Unknown"] = 0] = "Unknown";
    /**
     * Specifies the type of `Bmp`.
     * @hidden
     * @private
     */
    ImageFormat[ImageFormat["Bmp"] = 1] = "Bmp";
    /**
     * Specifies the type of `Emf`.
     * @hidden
     * @private
     */
    ImageFormat[ImageFormat["Emf"] = 2] = "Emf";
    /**
     * Specifies the type of `Gif`.
     * @hidden
     * @private
     */
    ImageFormat[ImageFormat["Gif"] = 3] = "Gif";
    /**
     * Specifies the type of `Jpeg`.
     * @hidden
     * @private
     */
    ImageFormat[ImageFormat["Jpeg"] = 4] = "Jpeg";
    /**
     * Specifies the type of `Png`.
     * @hidden
     * @private
     */
    ImageFormat[ImageFormat["Png"] = 5] = "Png";
    /**
     * Specifies the type of `Wmf`.
     * @hidden
     * @private
     */
    ImageFormat[ImageFormat["Wmf"] = 6] = "Wmf";
    /**
     * Specifies the type of `Icon`.
     * @hidden
     * @private
     */
    ImageFormat[ImageFormat["Icon"] = 7] = "Icon";
})(ImageFormat || (ImageFormat = {}));
/**
 * `Decode the image stream`.
 * @private
 */
class ImageDecoder {
    /**
     * Initialize the new instance for `image-decoder` class.
     * @private
     */
    constructor(stream) {
        /**
         * Specifies `format` of image.
         * @hidden
         * @private
         */
        this.mFormat = ImageFormat.Unknown;
        /**
         * `Bits per component`.
         * @default 8
         * @hidden
         * @private
         */
        this.mbitsPerComponent = 8;
        /**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @hidden
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        this.mStream = stream;
        this.initialize();
    }
    /**
     * Gets the `height` of image.
     * @hidden
     * @private
     */
    get height() {
        return this.mHeight;
    }
    /**
     * Gets the `width` of image.
     * @hidden
     * @private
     */
    get width() {
        return this.mWidth;
    }
    /**
     * Gets `bits per component`.
     * @hidden
     * @private
     */
    get bitsPerComponent() {
        return this.mbitsPerComponent;
    }
    /**
     * Gets the `size` of an image data.
     * @hidden
     * @private
     */
    get size() {
        return this.mImageData.count;
    }
    /**
     * Gets the value of an `image data`.
     * @hidden
     * @private
     */
    get imageData() {
        return this.mImageData;
    }
    /**
     * Gets the value of an `image data as number array`.
     * @hidden
     * @private
     */
    get imageDataAsNumberArray() {
        return this.mImageData.internalBuffer.buffer;
    }
    /**
     * `Initialize` image data and image stream.
     * @hidden
     * @private
     */
    initialize() {
        if (this.mFormat === ImageFormat.Unknown && this.checkIfJpeg()) {
            this.mFormat = ImageFormat.Jpeg;
            this.parseJpegImage();
        }
        this.reset();
        this.mImageData = new ByteArray(this.mStream.count);
        this.mStream.read(this.mImageData, 0, this.mImageData.count);
    }
    /**
     * `Reset` stream position into 0.
     * @hidden
     * @private
     */
    reset() {
        this.mStream.position = 0;
    }
    /**
     * `Parse` Jpeg image.
     * @hidden
     * @private
     */
    parseJpegImage() {
        this.reset();
        let imgData = new ByteArray(this.mStream.count);
        this.mStream.read(imgData, 0, imgData.count);
        let i = 4;
        /* tslint:disable */
        if (String.fromCharCode(imgData.getBuffer(i + 2)) === 'J' && String.fromCharCode(imgData.getBuffer(i + 3)) === 'F' && String.fromCharCode(imgData.getBuffer(i + 4)) === 'I' && String.fromCharCode(imgData.getBuffer(i + 5)) === 'F' && imgData.getBuffer(i + 6) === 0) {
            let length = imgData.getBuffer(i) * 256 + imgData.getBuffer(i + 1);
            while (i + length < imgData.count) {
                i += length;
                if (imgData.getBuffer(i + 1) === 192) {
                    this.mHeight = imgData.getBuffer(i + 5) * 256 + imgData.getBuffer(i + 6);
                    this.mWidth = imgData.getBuffer(i + 7) * 256 + imgData.getBuffer(i + 8);
                    return;
                }
                else {
                    i += 2;
                    length = imgData.getBuffer(i) * 256 + imgData.getBuffer(i + 1);
                }
            }
        }
        /* tslint:enable */
    }
    /**
     * Gets the image `format`.
     * @private
     * @hidden
     */
    get format() {
        return this.mFormat;
    }
    /**
     * `Checks if JPG`.
     * @private
     * @hidden
     */
    checkIfJpeg() {
        this.reset();
        for (let i = 0; i < ImageDecoder.mJpegHeader.length; i++) {
            if (ImageDecoder.mJpegHeader[i] !== this.mStream.readByte(i)) {
                return false;
            }
            this.mStream.position++;
        }
        return true;
    }
    /**
     * Return image `dictionary`.
     * @hidden
     * @private
     */
    getImageDictionary() {
        if (this.mFormat === ImageFormat.Jpeg) {
            let tempArrayBuffer = this.imageData.internalBuffer.length;
            this.imageStream = new PdfStream();
            this.imageStream.isImage = true;
            let tempString = '';
            let decodedString = '';
            for (let i = 0; i < this.imageDataAsNumberArray.byteLength; i++) {
                tempString += String.fromCharCode(null, this.mStream.readByte(i));
            }
            for (let i = 0; i < tempString.length; i++) {
                if (i % 2 !== 0) {
                    decodedString += tempString[i];
                }
            }
            this.imageStream.data = [decodedString];
            this.imageStream.compress = false;
            this.imageStream.items.setValue(this.dictionaryProperties.type, new PdfName(this.dictionaryProperties.xObject));
            this.imageStream.items.setValue(this.dictionaryProperties.subtype, new PdfName(this.dictionaryProperties.image));
            this.imageStream.items.setValue(this.dictionaryProperties.width, new PdfNumber(this.width));
            this.imageStream.items.setValue(this.dictionaryProperties.height, new PdfNumber(this.height));
            this.imageStream.items.setValue(this.dictionaryProperties.bitsPerComponent, new PdfNumber(this.bitsPerComponent));
            this.imageStream.items.setValue(this.dictionaryProperties.filter, new PdfName(this.dictionaryProperties.dctdecode));
            this.imageStream.items.setValue(this.dictionaryProperties.colorSpace, new PdfName(this.getColorSpace()));
            this.imageStream.items.setValue(this.dictionaryProperties.decodeParms, this.getDecodeParams());
            return this.imageStream;
        }
        else {
            return this.imageStream;
        }
    }
    /**
     * Return `colorSpace` of an image.
     * @hidden
     * @private
     */
    getColorSpace() {
        return this.dictionaryProperties.deviceRgb;
    }
    /**
     * Return `decode parameters` of an image.
     * @hidden
     * @private
     */
    getDecodeParams() {
        let decodeParams = new PdfDictionary();
        decodeParams.items.setValue(this.dictionaryProperties.columns, new PdfNumber(this.width));
        decodeParams.items.setValue(this.dictionaryProperties.blackIs1, new PdfBoolean(true));
        decodeParams.items.setValue(this.dictionaryProperties.k, new PdfNumber(-1));
        decodeParams.items.setValue(this.dictionaryProperties.predictor, new PdfNumber(15));
        decodeParams.items.setValue(this.dictionaryProperties.bitsPerComponent, new PdfNumber(this.bitsPerComponent));
        return decodeParams;
    }
}
/**
 * Number array for `png header`.
 * @hidden
 * @private
 */
ImageDecoder.mPngHeader = [137, 80, 78, 71, 13, 10, 26, 10];
/**
 * Number Array for `jpeg header`.
 * @hidden
 * @private
 */
ImageDecoder.mJpegHeader = [255, 216];
/**
 * Number array for `gif header`.
 * @hidden
 * @private
 */
ImageDecoder.GIF_HEADER = 'G,I,F,8';
/**
 * Number array for `bmp header.`
 * @hidden
 * @private
 */
ImageDecoder.BMP_HEADER = 'B,M';

/**
 * Used to perform `convertion between pixels and points`.
 * @private
 */
class PdfUnitConverter {
    //constructors
    /**
     * Initializes a new instance of the `UnitConvertor` class with DPI value.
     * @private
     */
    constructor(dpi) {
        this.updateProportionsHelper(dpi);
    }
    /**
     * `Converts` the value, from one graphics unit to another graphics unit.
     * @private
     */
    convertUnits(value, from, to) {
        return this.convertFromPixels(this.convertToPixels(value, from), to);
    }
    /**
     * Converts the value `to pixel` from specified graphics unit.
     * @private
     */
    convertToPixels(value, from) {
        let index = from;
        let result = (value * this.proportions[index]);
        return result;
    }
    /**
     * Converts value, to specified graphics unit `from Pixel`.
     * @private
     */
    convertFromPixels(value, to) {
        let index = to;
        let result = (value / this.proportions[index]);
        return result;
    }
    /**
     * `Update proportions` matrix according to Graphics settings.
     * @private
     */
    updateProportionsHelper(pixelPerInch) {
        this.proportions = [
            pixelPerInch / 2.54,
            pixelPerInch / 6.0,
            1,
            pixelPerInch / 72.0,
            pixelPerInch,
            pixelPerInch / 300.0,
            pixelPerInch / 25.4 // Millimeter
        ];
    }
}
//Fields
/**
 * Indicates default `horizontal resolution`.
 * @default 96
 * @private
 */
PdfUnitConverter.horizontalResolution = 96;
/**
 * Indicates default `vertical resolution`.
 * @default 96
 * @private
 */
PdfUnitConverter.verticalResolution = 96;

/**
 * `PdfImage` class represents the base class for images and provides functionality for the 'PdfBitmap' class.
 * @private
 */
class PdfImage {
    /**
     * Gets and Sets the `width` of an image.
     * @private
     */
    get width() {
        return this.imageWidth;
    }
    set width(value) {
        this.imageWidth = value;
    }
    /**
     * Gets and Sets the `height` of an image.
     * @private
     */
    get height() {
        return this.imageHeight;
    }
    set height(value) {
        this.imageHeight = value;
    }
    /**
     * Gets or sets the size of the image.
     * @private
     */
    set size(value) {
        this.width = value.width;
        this.height = value.height;
    }
    /**
     * Gets the `physical dimension` of an image.
     * @private
     */
    get physicalDimension() {
        this.imagePhysicalDimension = this.getPointSize(this.width, this.height, this.horizontalResolution, this.verticalResolution);
        return new SizeF(this.width, this.height);
    }
    // /**
    //  * Gets the `image stream as string`.
    //  * @private
    //  */
    // public static fromString(string : string) : PdfImage {
    //     let image : PdfImage = new PdfBitmap(string);
    //     return image;
    // }
    /**
     * Gets the `element` image stream.
     * @private
     */
    get element() {
        return this.imageStream;
    }
    getPointSize(width, height, horizontalResolution, verticalResolution) {
        if (typeof horizontalResolution === 'undefined') {
            let dpiX = PdfUnitConverter.horizontalResolution;
            let dpiY = PdfUnitConverter.verticalResolution;
            let size = this.getPointSize(width, height, dpiX, dpiY);
            return size;
        }
        else {
            let ucX = new PdfUnitConverter(horizontalResolution);
            let ucY = new PdfUnitConverter(verticalResolution);
            let ptWidth = ucX.convertUnits(width, PdfGraphicsUnit.Pixel, PdfGraphicsUnit.Point);
            let ptHeight = ucY.convertUnits(height, PdfGraphicsUnit.Pixel, PdfGraphicsUnit.Point);
            let size = new SizeF(ptWidth, ptHeight);
            return size;
        }
    }
}

/**
 * PdfBitmap.ts class for EJ2-PDF
 */
/**
 * The 'PdfBitmap' contains methods and properties to handle the Bitmap images.
 * ```typescript
 * // create a new PDF document.
 * let document : PdfDocument = new PdfDocument();
 * // add a page to the document.
 * let page1 : PdfPage = document.pages.add();
 * // base64 string of an image
 * let imageString : string = '/9j/3+2w7em7HzY/KiijFw … 1OEYRUYrQ45yc5OUtz/9k=';
 * // load the image from the base64 string of original image.
 * let image : PdfBitmap = new PdfBitmap(imageString);
 * // draw the image
 * page1.graphics.drawImage(image, new RectangleF({x : 10, y : 10}, {width : 200, height : 200}));
 * // save the document.
 * document.save('output.pdf');
 * // destroy the document
 * document.destroy();
 * ```
 */
class PdfBitmap extends PdfImage {
    /**
     * Create an instance for `PdfBitmap` class.
     * @param encodedString Base64 string of an image.
     * ```typescript
     * // create a new PDF document.
     * let document : PdfDocument = new PdfDocument();
     * // add a page to the document.
     * let page1 : PdfPage = document.pages.add();
     * // base64 string of an image
     * let imageString : string = '/9j/3+2w7em7HzY/KiijFw … 1OEYRUYrQ45yc5OUtz/9k=';
     * //
     * // load the image from the base64 string of original image.
     * let image : PdfBitmap = new PdfBitmap(imageString);
     * //
     * // draw the image
     * page1.graphics.drawImage(image, new RectangleF({x : 10, y : 10}, {width : 200, height : 200}));
     * // save the document.
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    constructor(encodedString) {
        super();
        //Fields
        /**
         * Specifies the `status` of an image.
         * @default true.
         * @hidden
         * @private
         */
        this.imageStatus = true;
        /**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @hidden
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        this.loadImage(encodedString);
    }
    /**
     * `Load image`.
     * @hidden
     * @private
     */
    loadImage(encodedString) {
        let task = this.initializeAsync(encodedString);
    }
    /**
     * `Initialize` image parameters.
     * @private
     */
    initializeAsync(encodedString) {
        let byteArray = new ByteArray(encodedString.length);
        byteArray.writeFromBase64String(encodedString);
        this.decoder = new ImageDecoder(byteArray);
        this.height = this.decoder.height;
        this.width = this.decoder.width;
        // FrameCount = BitmapImageDecoder.FrameCount;
        this.bitsPerComponent = this.decoder.bitsPerComponent;
    }
    /**
     * `Saves` the image into stream.
     * @private
     */
    save() {
        this.imageStatus = true;
        this.imageStream = this.decoder.getImageDictionary();
    }
}

/**
 * PdfResources.ts class for EJ2-PDF
 */
/**
 * `PdfResources` class used to set resource contents like font, image.
 * @private
 */
class PdfResources extends PdfDictionary {
    constructor(baseDictionary) {
        super();
        /**
         * Dictionary for the `properties names`.
         * @private
         */
        this.properties = new PdfDictionary();
        if (baseDictionary instanceof PdfDictionary) {
            super(baseDictionary);
        }
    }
    //Properties
    /**
     * Gets the `font names`.
     * @private
     */
    get names() {
        return this.getNames();
    }
    /**
     * Get or set the `page document`.
     * @private
     */
    get document() {
        return this.pdfDocument;
    }
    set document(value) {
        this.pdfDocument = value;
    }
    //Public Methods
    /**
     * `Generates name` for the object and adds to the resource if the object is new.
     * @private
     */
    getName(obj) {
        let primitive = obj.element;
        let name = null;
        if (this.names.containsKey(primitive)) {
            name = this.names.getValue(primitive);
        }
        // Object is new.
        if (name == null) {
            let sName = this.generateName();
            name = new PdfName(sName);
            this.names.setValue(primitive, name);
            if (obj instanceof PdfFont) {
                this.add(obj, name);
            }
            else if (obj instanceof PdfTemplate) {
                this.add(obj, name);
            }
            else if (obj instanceof PdfTransparency) {
                this.add(obj, name);
            }
            else if (obj instanceof PdfImage || obj instanceof PdfBitmap) {
                this.add(obj, name);
            }
        }
        return name;
    }
    /**
     * Gets `resource names` to font dictionaries.
     * @private
     */
    getNames() {
        if (this.pdfNames == null) {
            this.pdfNames = new TemporaryDictionary();
        }
        let fonts = this.items.getValue(this.dictionaryProperties.font);
        if (fonts != null) {
            let dictionary = fonts;
            dictionary = PdfCrossTable.dereference(fonts);
        }
        return this.pdfNames;
    }
    /**
     * Add `RequireProcedureSet` into procset array.
     * @private
     */
    requireProcedureSet(procedureSetName) {
        if (procedureSetName == null) {
            throw new Error('ArgumentNullException:procedureSetName');
        }
        let procSets = this.items.getValue(this.dictionaryProperties.procset);
        if (procSets == null) {
            procSets = new PdfArray();
            this.items.setValue(this.dictionaryProperties.procset, procSets);
        }
        let name = new PdfName(procedureSetName);
        if (!procSets.contains(name)) {
            procSets.add(name);
        }
    }
    //Helper Methods
    /**
     * `Remove font` from array.
     * @private
     */
    removeFont(name) {
        let key = null;
        let keys = this.pdfNames.keys();
        for (let index = 0; index < this.pdfNames.size(); index++) {
            if (this.pdfNames.getValue(keys[index]) === new PdfName(name)) {
                key = keys[index];
                break;
            }
        }
        if (key != null) {
            this.pdfNames.remove(key);
        }
    }
    /**
     * Generates `Unique string name`.
     * @private
     */
    generateName() {
        let name = Guid.getNewGuidString();
        return name;
    }
    add(arg1, arg2) {
        if (arg1 instanceof PdfFont) {
            let dictionary = null;
            let fonts = this.items.getValue(this.dictionaryProperties.font);
            if (fonts != null) {
                dictionary = fonts;
                dictionary = fonts;
            }
            else {
                dictionary = new PdfDictionary();
                this.items.setValue(this.dictionaryProperties.font, dictionary);
            }
            dictionary.items.setValue(arg2.value, new PdfReferenceHolder(arg1.element));
        }
        else if (arg1 instanceof PdfTemplate) {
            let xobjects;
            xobjects = this.items.getValue(this.dictionaryProperties.xObject);
            // Create fonts dictionary.
            if (xobjects == null) {
                xobjects = new PdfDictionary();
                this.items.setValue(this.dictionaryProperties.xObject, xobjects);
            }
            xobjects.items.setValue(arg2.value, new PdfReferenceHolder(arg1.element));
        }
        else if (arg1 instanceof PdfBrush) {
            // let savable : IPdfPrimitive = (arg1 as IPdfWrapper).Element;
            // if (savable != null)
            // {
            //     let pattern : PdfDictionary = this.Items.getValue(this.dictionaryProperties.pattern) as PdfDictionary;
            //     // Create a new pattern dictionary.
            //     if (pattern == null) {
            //         pattern = new PdfDictionary();
            //         this.Items.setValue(this.dictionaryProperties.pattern, pattern);
            //     }
            //     pattern.Items.setValue(name, new PdfReferenceHolder(savable));
            // }
        }
        else if (arg1 instanceof PdfTransparency) {
            let savable = arg1.element;
            let transDic = null;
            transDic = this.items.getValue(this.dictionaryProperties.extGState);
            // Create a new pattern dictionary.
            if (transDic == null) {
                transDic = new PdfDictionary();
                this.items.setValue(this.dictionaryProperties.extGState, transDic);
            }
            transDic.items.setValue(arg2.value, new PdfReferenceHolder(savable));
        }
        else {
            /* tslint:disable */
            let xobjects = this.Dictionary.items.getValue(this.dictionaryProperties.xObject);
            let parentXObjects;
            if (typeof this.pdfDocument !== 'undefined') {
                parentXObjects = this.pdfDocument.sections.element.items.getValue(this.dictionaryProperties.resources).items.getValue(this.dictionaryProperties.xObject);
            }
            let values = this.Dictionary.items.values();
            let hasSameImageStream = false;
            let oldReference;
            if (typeof this.pdfDocument !== 'undefined' && (typeof parentXObjects === undefined || parentXObjects == null)) {
                parentXObjects = new PdfDictionary();
                this.pdfDocument.sections.element.items.getValue(this.dictionaryProperties.resources).items.setValue(this.dictionaryProperties.xObject, parentXObjects);
            }
            else if (typeof this.pdfDocument !== 'undefined') {
                let values = parentXObjects.items.values();
                for (let i = 0; i < values.length; i++) {
                    if (typeof values[i] !== 'undefined' && typeof values[i].element !== 'undefined') {
                        if (values[i].element.data[0] === arg1.element.data[0]) {
                            oldReference = values[i];
                            hasSameImageStream = true;
                        }
                    }
                }
            }
            if (xobjects == null) {
                xobjects = new PdfDictionary();
                this.Dictionary.items.setValue(this.dictionaryProperties.xObject, xobjects);
            }
            if (hasSameImageStream && typeof oldReference !== 'undefined') {
                xobjects.items.setValue(arg2.value, oldReference);
            }
            else {
                let reference = new PdfReferenceHolder(arg1.element);
                xobjects.items.setValue(arg2.value, reference);
                if (typeof this.pdfDocument !== 'undefined') {
                    parentXObjects.items.setValue(arg2.value, reference);
                }
            }
            /* tslint:enable */
        }
    }
}
/**
 * Used to create new guid for resources.
 * @private
 */
class Guid {
    /**
     * Initialize an `instance of GUID` class.
     * @private
     */
    constructor(stringValue) {
        this.stringValue = stringValue || Guid.getNewGuidString();
    }
    /**
     * Generate `Random number` for GUID.
     * @private
     */
    static get randomNumber() {
        Guid.guid = Guid.guid + 1;
        Guid.guid = Guid.guid > 999999999999 ? 0 : Guid.guid;
        return Guid.guid;
    }
    /**
     * Return the value of `GUID as string`.
     * @private
     */
    toString() {
        return this.stringValue;
    }
    /**
     * Generate `new GUID`.
     * @private
     */
    static getNewGuidString() {
        let guid = 'abc7def4-ghi9-jkl2-m6n3-';
        let temproaryString = 'opqrstuvwxyz';
        let randomString = Guid.randomNumber.toString();
        randomString = guid + temproaryString.substr(0, (12 - randomString.length)) + randomString;
        return randomString;
    }
}
/**
 * static field to store `endding value of current GUID`.
 * @private
 */
Guid.guid = 0;

/**
 * The abstract base class for all pages,
 * `PdfPageBase` class provides methods and properties to create PDF pages and its elements.
 * @private
 */
class PdfPageBase {
    //constructors
    /**
     * Initializes a new instance of the `PdfPageBase` class.
     * @private
     */
    constructor(dictionary) {
        /**
         * `Index` of the default layer.
         * @default -1.
         * @private
         */
        this.defLayerIndex = -1;
        /**
         * Local variable to store if page `updated`.
         * @default false.
         * @private
         */
        this.modified = false;
        /**
         * Instance of `DictionaryProperties` class.
         * @hidden
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        this.pageDictionary = dictionary;
    }
    //Properties
    /**
     * Gets the `section` of a page.
     * @private
     */
    get section() {
        // if (this.pdfSection === null) {
        //     throw new Error('PdfException : Page must be added to some section before using.');
        // }
        return this.pdfSection;
    }
    set section(value) {
        this.pdfSection = value;
    }
    /**
     * Gets the page `dictionary`.
     * @private
     */
    get dictionary() {
        return this.pageDictionary;
    }
    /**
     * Gets the wrapped `element`.
     * @private
     */
    get element() {
        return this.pageDictionary;
    }
    /**
     * Gets the `default layer` of the page (Read only).
     * @private
     */
    get defaultLayer() {
        let layer = this.layers;
        let index = this.defaultLayerIndex;
        let returnlayer = layer.items(index);
        return returnlayer;
    }
    /**
     * Gets or sets `index of the default layer`.
     * @private
     */
    get defaultLayerIndex() {
        if (this.layerCollection.count === 0 || this.defLayerIndex === -1) {
            let layer = this.layerCollection.add();
            this.defLayerIndex = this.layerCollection.indexOf(layer);
        }
        return this.defLayerIndex;
    }
    /**
     * Gets the collection of the page's `layers` (Read only).
     * @private
     */
    get layers() {
        if (this.layerCollection == null || typeof this.layerCollection === 'undefined') {
            this.layerCollection = new PdfPageLayerCollection(this);
        }
        return this.layerCollection;
    }
    /**
     * Return an instance of `PdfResources` class.
     * @private
     */
    getResources() {
        if (this.resources == null) {
            this.resources = new PdfResources();
            this.dictionary.items.setValue(this.dictionaryProperties.resources, this.resources);
        }
        return this.resources;
    }
    /**
     * Gets `array of page's content`.
     * @private
     */
    get contents() {
        let obj = this.pageDictionary.items.getValue(this.dictionaryProperties.contents);
        let contents = obj;
        if (contents == null) {
            contents = new PdfArray();
            this.pageDictionary.items.setValue(this.dictionaryProperties.contents, contents);
        }
        return contents;
    }
    /**
     * Gets or sets` index of the default layer`.
     * @private
     */
    set defaultLayerIndex(value) {
        if (value < 0 || value > this.layers.count - 1) {
            throw new Error('ArgumentOutOfRangeException : value, Index can not be less 0 and greater Layers.Count - 1');
        }
        else {
            this.defLayerIndex = value;
            this.modified = true;
        }
    }
    /**
     * Sets the `resources`.
     * @private
     */
    setResources(res) {
        this.resources = res;
        this.dictionary.items.setValue(this.dictionaryProperties.resources, this.resources);
        this.modified = true;
    }
}

/**
 * `PdfAnnotationCollection` class represents the collection of 'PdfAnnotation' objects.
 * @private
 */
class PdfAnnotationCollection {
    constructor(page) {
        // Constants
        /**
         * `Error` constant message.
         * @private
         */
        this.alreadyExistsAnnotationError = 'This annotatation had been already added to page';
        /**
         * `Error` constant message.
         * @private
         */
        this.missingAnnotationException = 'Annotation is not contained in collection.';
        /**
         * Specifies the Internal variable to store fields of `PdfDictionaryProperties`.
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        /**
         * Array of the `annotations`.
         * @private
         */
        this.internalAnnotations = new PdfArray();
        /**
         * privte `list` for the annotations.
         * @private
         */
        this.lists = [];
        if (typeof page !== 'undefined') {
            this.page = page;
        }
    }
    /**
     * Gets the `PdfAnnotation` object at the specified index. Read-Only.
     * @private
     */
    get annotations() {
        return this.internalAnnotations;
    }
    set annotations(value) {
        this.internalAnnotations = value;
    }
    // Public methods
    /**
     * `Adds` a new annotation to the collection.
     * @private
     */
    add(annotation) {
        // this.SetPrint(annotation);
        this.doAdd(annotation);
    }
    /**
     * `Adds` a Annotation to collection.
     * @private
     */
    /* tslint:disable */
    doAdd(annotation) {
        if (typeof annotation.destination !== 'undefined') {
            let layout = new PdfStringLayouter();
            let layoutResult = layout.layout(annotation.text, annotation.font, annotation.stringFormat, new SizeF((annotation.bounds.width), 0), false, new SizeF(0, 0));
            let lastPosition = annotation.bounds.y;
            if (layoutResult.lines.length === 1) {
                let size = annotation.font.measureString(layoutResult.lines[0].text);
                annotation.bounds = new RectangleF(new PointF(annotation.bounds.x, lastPosition), size);
                annotation.text = layoutResult.lines[0].text;
                //Draw Annotation Text.
                this.page.graphics.drawString(annotation.text, annotation.font, null, annotation.brush, annotation.bounds.x, annotation.bounds.y, annotation.bounds.width, annotation.bounds.height, null);
                //Add annotation to dictionary.
                annotation.setPage(this.page);
                this.setColor(annotation);
                this.internalAnnotations.add(new PdfReferenceHolder(annotation));
                this.lists.push(annotation);
            }
            else {
                for (let i = 0; i < layoutResult.lines.length; i++) {
                    let size = annotation.font.measureString(layoutResult.lines[i].text);
                    if (i === 0) {
                        annotation.bounds = new RectangleF(annotation.bounds.x, lastPosition, size.width, size.height);
                        annotation.text = layoutResult.lines[i].text;
                        //Draw Annotation Text.
                        this.page.graphics.drawString(annotation.text, annotation.font, null, annotation.brush, annotation.bounds.x, lastPosition, size.width, size.height, null);
                        //Add annotation to dictionary.
                        annotation.setPage(this.page);
                        this.setColor(annotation);
                        this.internalAnnotations.add(new PdfReferenceHolder(annotation));
                        this.lists.push(annotation);
                        //Update y for drawing next line of the text.
                        lastPosition += annotation.bounds.height;
                    }
                    else {
                        let annot = annotation.clone();
                        annot.bounds = new RectangleF(new PointF(annotation.bounds.x, lastPosition), size);
                        annot.text = layoutResult.lines[i].text;
                        //Draw Annotation Text.
                        this.page.graphics.drawString(annot.text, annot.font, null, annot.brush, annot.bounds.x, annot.bounds.y, annot.bounds.width, annot.bounds.height, null);
                        //Add annotation to dictionary.
                        annot.setPage(this.page);
                        this.setColor(annot);
                        this.internalAnnotations.add(new PdfReferenceHolder(annot));
                        this.lists.push(annot);
                        //Update y for drawing next line of the text.
                        lastPosition += annot.bounds.height;
                    }
                }
            }
        }
        else {
            annotation.setPage(this.page);
            this.internalAnnotations.add(new PdfReferenceHolder(annotation));
            return this.lists.push(annotation);
        }
    }
    /* tslint:enable */
    /**
     * `Set a color of an annotation`.
     * @private
     */
    setColor(annotation) {
        let cs = PdfColorSpace.Rgb;
        let colours = annotation.color.toArray(cs);
        annotation.dictionary.items.setValue(this.dictionaryProperties.c, colours);
    }
    // IPdfWrapper Members
    /**
     * Gets the `Element` representing this object.
     * @private
     */
    get element() {
        return this.internalAnnotations;
    }
}

/**
 * Provides methods and properties to create pages and its elements.
 * `PdfPage` class inherited from the `PdfPageBase` class.
 * ```typescript
 * // create a new PDF document
 * let document : PdfDocument = new PdfDocument();
 * //
 * // add a new page to the document
 * let page1 : PdfPage = document.pages.add();
 * //
 * // set the font
 * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
 * // create black brush
 * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
 * // draw the text
 * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(0, 0));
 * // save the document
 * document.save('output.pdf');
 * // destroy the document
 * document.destroy();
 * ```
 */
class PdfPage extends PdfPageBase {
    //constructors
    /**
     * Initialize the new instance for `PdfPage` class.
     * @private
     */
    constructor() {
        super(new PdfDictionary());
        /**
         * Stores the instance of `PdfAnnotationCollection` class.
         * @hidden
         * @default null
         * @private
         */
        this.annotationCollection = null;
        /**
         * Stores the instance of `PageBeginSave` event for Page Number Field.
         * @default null
         * @private
         */
        this.beginSave = null;
        this.initialize();
    }
    //Properties
    /**
     * Gets current `document`.
     * @private
     */
    get document() {
        if (this.section !== null && this.section.parent !== null) {
            return this.section.parent.document;
        }
        else {
            return null;
        }
    }
    /**
     * Get the current `graphics`.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // add a new page to the document
     * let page1 : PdfPage = document.pages.add();
     * //
     * // get graphics
     * let graphics : PdfGraphics = page1.graphics;
     * //
     * // set the font
     * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
     * // create black brush
     * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
     * // draw the text
     * graphics.drawString('Hello World', font, blackBrush, new PointF(0, 0));
     * // save the document
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get graphics() {
        let result = this.defaultLayer.graphics;
        result.currentPage = this;
        return result;
    }
    /**
     * Gets the `cross table`.
     * @private
     */
    get crossTable() {
        if (this.section === null) {
            throw new Error('PdfDocumentException : Page is not created');
        }
        return this.section.parent === null ? this.section.parentDocument.crossTable : this.section.parent.document.crossTable;
    }
    /**
     * Gets the size of the PDF page- Read only.
     * @public
     */
    get size() {
        return this.section.pageSettings.size;
    }
    /**
     * Gets the `origin` of the page.
     * @private
     */
    get origin() {
        return this.section.pageSettings.origin;
    }
    /**
     * Gets a collection of the `annotations` of the page- Read only.
     * @private
     */
    get annotations() {
        if (this.annotationCollection == null) {
            this.annotationCollection = new PdfAnnotationCollection(this);
            // if (!this.Dictionary.ContainsKey(this.dictionaryProperties.annots)) {
            this.dictionary.items.setValue(this.dictionaryProperties.annots, this.annotationCollection.element);
            // }
            this.annotationCollection.annotations = this.dictionary.items.getValue(this.dictionaryProperties.annots);
        }
        return this.annotationCollection;
    }
    //Implementation
    /**
     * `Initializes` a page.
     * @private
     */
    initialize() {
        this.dictionary.items.setValue(this.dictionaryProperties.type, new PdfName('Page'));
        this.dictionary.pageBeginDrawTemplate = new SaveTemplateEventHandler(this);
    }
    /**
     * Sets parent `section` to the page.
     * @private
     */
    setSection(section) {
        this.section = section;
        this.dictionary.items.setValue(this.dictionaryProperties.parent, new PdfReferenceHolder(section));
    }
    /**
     * `Resets the progress`.
     * @private
     */
    resetProgress() {
        this.isProgressOn = false;
    }
    /**
     * Get the page size reduced by page margins and page template dimensions.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // add a pages to the document
     * let page1 : PdfPage = document.pages.add();
     * // create new standard font
     * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
     * // set brush
     * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
     * //
     * // set the specified point using `getClientSize` method
     * let point : PointF = new PointF(page1.getClientSize().width - 200, page1.getClientSize().height - 200);
     * // draw the text
     * page1.graphics.drawString('Hello World', font, blackBrush, point);
     * //
     * // save the document
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    getClientSize() {
        let returnValue = this.section.getActualBounds(this, true);
        return new SizeF(returnValue.width, returnValue.height);
    }
    /**
     * Helper method to retrive the instance of `PageBeginSave` event for header and footer elements.
     * @private
     */
    pageBeginSave() {
        let doc = this.document;
        if (typeof doc !== undefined && doc != null) {
            this.drawPageTemplates(doc);
        }
        if (this.beginSave != null && typeof this.beginSave !== 'undefined') {
            this.beginSave(this);
        }
    }
    /**
     * Helper method to draw template elements.
     * @private
     */
    drawPageTemplates(document) {
        // Draw Background templates.
        let hasBackTemplates = this.section.containsTemplates(document, this, false);
        if (hasBackTemplates) {
            let backLayer = new PdfPageLayer(this, false);
            this.layers.insert(0, backLayer);
            this.section.drawTemplates(this, backLayer, document, false);
            if (backLayer.graphics !== null && typeof backLayer.graphics !== 'undefined') {
                for (let i = 0; i < backLayer.graphics.automaticFields.automaticFields.length; i++) {
                    let fieldInfo = backLayer.graphics.automaticFields.automaticFields[i];
                    fieldInfo.field.performDraw(backLayer.graphics, fieldInfo.location, fieldInfo.scalingX, fieldInfo.scalingY);
                }
            }
        }
        // Draw Foreground templates.
        let hasFrontTemplates = this.section.containsTemplates(document, this, true);
        if (hasFrontTemplates) {
            let frontLayer = new PdfPageLayer(this, false);
            this.layers.add(frontLayer);
            this.section.drawTemplates(this, frontLayer, document, true);
        }
    }
}

/**
 * Provides data for `PageAddedEventHandler` event.
 * This event raises when adding the new PDF page to the PDF document.
 */
class PageAddedEventArgs {
    /**
     * Gets the `newly added page`.
     * @private
     */
    get page() {
        return this.pdfPage;
    }
    constructor(page) {
        if (typeof page !== 'undefined') {
            this.pdfPage = page;
        }
        else {
            this.pdfPage = null;
        }
    }
}

/**
 * Represents the `collection of pages in a section`.
 * @private
 */
class PdfSectionPageCollection {
    // Constructors
    /**
     * Initializes a new instance of the `PdfSectionPageCollection` class.
     * @private
     */
    constructor(section) {
        //  Fields
        /**
         * @hidden
         * @private
         */
        this.pdfSection = null;
        if (section == null) {
            throw Error('ArgumentNullException("section")');
        }
        this.section = section;
    }
    // Properties
    /**
     * Gets the `PdfPage` at the specified index.
     * @private
     */
    get section() {
        return this.pdfSection;
    }
    set section(value) {
        this.pdfSection = value;
    }
    // Public Methods
    /**
     * `Determines` whether the specified page is within the collection.
     * @private
     */
    contains(page) {
        return this.section.contains(page);
    }
    /**
     * `Removes` the specified page from collection.
     * @private
     */
    remove(page) {
        this.section.remove(page);
    }
    /**
     * `Adds` a new page from collection.
     * @private
     */
    add() {
        return this.section.add();
    }
}

// import { PdfStampCollection } from `./../Pages/PdfStampCollection`;
/**
 * `PdfDocumentTemplate` class encapsulates a page template for all the pages in the document.
 * @private
 */
class PdfDocumentTemplate {
    // private m_stamps : PdfStampCollection;
    // Properties
    /**
     * `Left` page template object.
     * @public
     */
    get left() {
        return this.leftTemplate;
    }
    set left(value) {
        this.leftTemplate = this.checkElement(value, TemplateType.Left);
    }
    /**
     * `Top` page template object.
     * @public
     */
    get top() {
        return this.topTemplate;
    }
    set top(value) {
        this.topTemplate = this.checkElement(value, TemplateType.Top);
    }
    /**
     * `Right` page template object.
     * @public
     */
    get right() {
        return this.rightTemplate;
    }
    set right(value) {
        this.rightTemplate = this.checkElement(value, TemplateType.Right);
    }
    /**
     * `Bottom` page template object.
     * @public
     */
    get bottom() {
        return this.bottomTemplate;
    }
    set bottom(value) {
        this.bottomTemplate = this.checkElement(value, TemplateType.Bottom);
    }
    /**
     * `EvenLeft` page template object.
     * @public
     */
    get EvenLeft() {
        return this.evenLeft;
    }
    set EvenLeft(value) {
        this.evenLeft = this.checkElement(value, TemplateType.Left);
    }
    /**
     * `EvenTop` page template object.
     * @public
     */
    get EvenTop() {
        return this.evenTop;
    }
    set EvenTop(value) {
        this.evenTop = this.checkElement(value, TemplateType.Top);
    }
    /**
     * `EvenRight` page template object.
     * @public
     */
    get EvenRight() {
        return this.evenRight;
    }
    set EvenRight(value) {
        this.evenRight = this.checkElement(value, TemplateType.Right);
    }
    /**
     * `EvenBottom` page template object.
     * @public
     */
    get EvenBottom() {
        return this.evenBottom;
    }
    set EvenBottom(value) {
        this.evenBottom = this.checkElement(value, TemplateType.Bottom);
    }
    /**
     * `OddLeft` page template object.
     * @public
     */
    get OddLeft() {
        return this.oddLeft;
    }
    set OddLeft(value) {
        this.oddLeft = this.checkElement(value, TemplateType.Left);
    }
    /**
     * `OddTop` page template object.
     * @public
     */
    get OddTop() {
        return this.oddTop;
    }
    set OddTop(value) {
        this.oddTop = this.checkElement(value, TemplateType.Top);
    }
    /**
     * `OddRight` page template object.
     * @public
     */
    get OddRight() {
        return this.oddRight;
    }
    set OddRight(value) {
        this.oddRight = this.checkElement(value, TemplateType.Right);
    }
    /**
     * `OddBottom` page template object.
     * @public
     */
    get OddBottom() {
        return this.oddBottom;
    }
    set OddBottom(value) {
        this.oddBottom = this.checkElement(value, TemplateType.Bottom);
    }
    // Constructors
    /**
     * Initializes a new instance of the `PdfDocumentTemplate` class.
     * @public
     */
    constructor() {
        //
    }
    // Implementation
    /**
     * Returns `left` template.
     * @public
     */
    getLeft(page) {
        if (page == null) {
            throw new Error('ArgumentNullException:page');
        }
        let template = null;
        // if (page.Document.Pages != null) {
        let even = this.isEven(page);
        if (even) {
            template = (this.EvenLeft != null) ? this.EvenLeft : this.left;
        }
        else {
            template = (this.OddLeft != null) ? this.OddLeft : this.left;
        }
        // }
        return template;
    }
    /**
     * Returns `top` template.
     * @public
     */
    getTop(page) {
        if (page == null) {
            throw new Error('ArgumentNullException:page');
        }
        let template = null;
        // if (page.Document.Pages != null) {
        let even = this.isEven(page);
        if (even) {
            template = (this.EvenTop != null) ? this.EvenTop : this.top;
        }
        else {
            template = (this.OddTop != null) ? this.OddTop : this.top;
        }
        // }
        return template;
    }
    /**
     * Returns `right` template.
     * @public
     */
    getRight(page) {
        if (page == null) {
            throw new Error('ArgumentNullException:page');
        }
        let template = null;
        // if (page.Document.Pages != null) {
        let even = this.isEven(page);
        if (even) {
            template = (this.EvenRight != null) ? this.EvenRight : this.right;
        }
        else {
            template = (this.OddRight != null) ? this.OddRight : this.right;
        }
        // }
        return template;
    }
    /**
     * Returns `bottom` template.
     * @public
     */
    getBottom(page) {
        if (page == null) {
            throw new Error('ArgumentNullException:page');
        }
        let template = null;
        // if (page.Document.Pages != null) {
        let even = this.isEven(page);
        if (even) {
            template = (this.EvenBottom != null) ? this.EvenBottom : this.bottom;
        }
        else {
            template = (this.OddBottom != null) ? this.OddBottom : this.bottom;
        }
        // }
        return template;
    }
    /**
     * Checks whether the page `is even`.
     * @private
     */
    isEven(page) {
        let pages = page.section.document.pages;
        let index = 0;
        if (pages.pageCollectionIndex.containsKey(page)) {
            index = pages.pageCollectionIndex.getValue(page) + 1;
        }
        else {
            index = pages.indexOf(page) + 1;
        }
        let even = ((index % 2) === 0);
        return even;
    }
    /**
     * Checks a `template element`.
     * @private
     */
    checkElement(templateElement, type) {
        if (templateElement != null) {
            if ((typeof templateElement.type !== 'undefined') && (templateElement.type !== TemplateType.None)) {
                throw new Error('NotSupportedException:Can not reassign the template element. Please, create new one.');
            }
            templateElement.type = type;
        }
        return templateElement;
    }
}

/**
 * PdfSectionTemplate.ts class for EJ2-PDF
 */
/**
 * Represents a `page template` for all the pages in the section.
 */
class PdfSectionTemplate extends PdfDocumentTemplate {
    // Properties
    /**
     * Gets or sets value indicating whether parent `Left page template should be used or not`.
     * @private
     */
    get applyDocumentLeftTemplate() {
        return this.leftValue;
    }
    set applyDocumentLeftTemplate(value) {
        this.leftValue = value;
    }
    /**
     * Gets or sets value indicating whether parent `Top page template should be used or not`.
     * @private
     */
    get applyDocumentTopTemplate() {
        return this.topValue;
    }
    set applyDocumentTopTemplate(value) {
        this.topValue = value;
    }
    /**
     * Gets or sets value indicating whether parent `Right page template should be used or not`.
     * @private
     */
    get applyDocumentRightTemplate() {
        return this.rightValue;
    }
    set applyDocumentRightTemplate(value) {
        this.rightValue = value;
    }
    /**
     * Gets or sets value indicating whether parent `Bottom page template should be used or not`.
     * @private
     */
    get applyDocumentBottomTemplate() {
        return this.bottomValue;
    }
    set applyDocumentBottomTemplate(value) {
        this.bottomValue = value;
    }
    /**
     * Gets or sets value indicating whether the `stamp value` is true or not.
     * @private
     */
    get applyDocumentStamps() {
        return this.stampValue;
    }
    set applyDocumentStamps(value) {
        this.stampValue = value;
    }
    // Constructors
    /**
     * `Creates a new object`.
     * @private
     */
    constructor() {
        super();
        this.leftValue = this.topValue = this.rightValue = this.bottomValue = this.stampValue = true;
    }
}

/**
 * Represents a `section` entity. A section it's a set of the pages with similar page settings.
 */
class PdfSection {
    constructor(document, pageSettings) {
        //Fields
        //public PageAdded() : PageAddedEventArgs.PageAddedEventHandler = new PageAddedEventArgs.PageAddedEventHandler(Object,args)
        /**
         * @hidden
         * @private
         */
        this.pageAdded = new PageAddedEventArgs();
        /**
         * @hidden
         * @private
         */
        this.pdfPages = [];
        /**
         * @hidden
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        if (typeof pageSettings === 'undefined') {
            this.constructor(document, document.pageSettings);
        }
        else {
            this.pdfDocument = document;
            this.settings = pageSettings.clone();
            this.initialSettings = this.settings.clone();
            this.initialize();
        }
    }
    //Property
    /**
     * Gets or sets the `parent`.
     * @private
     */
    get parent() {
        return this.sectionCollection;
    }
    set parent(value) {
        this.sectionCollection = value;
        this.section.items.setValue(this.dictionaryProperties.parent, new PdfReferenceHolder(value));
    }
    /**
     * Gets the `parent document`.
     * @private
     */
    get parentDocument() {
        return this.pdfDocument;
    }
    /**
     * Gets or sets the `page settings` of the section.
     * @private
     */
    get pageSettings() {
        return this.settings;
    }
    set pageSettings(value) {
        if (value != null) {
            this.settings = value;
        }
        else {
            throw Error('Value can not be null.');
        }
    }
    /**
     * Gets the wrapped `element`.
     * @private
     */
    get element() {
        return this.section;
    }
    /**
     * Gets the `count` of the pages in the section.
     * @private
     */
    get count() {
        return this.pagesReferences.count;
    }
    /**
     * Gets or sets a `template` for the pages in the section.
     * @private
     */
    get template() {
        if (this.pageTemplate == null) {
            this.pageTemplate = new PdfSectionTemplate();
        }
        return this.pageTemplate;
    }
    set template(value) {
        this.pageTemplate = value;
    }
    /**
     * Gets the `document`.
     * @private
     */
    get document() {
        return this.sectionCollection.document;
    }
    /**
     * Gets the collection of `pages` in a section (Read only)
     * @private
     */
    get pages() {
        if (this.pagesCollection == null || typeof this.pagesCollection === 'undefined') {
            this.pagesCollection = new PdfSectionPageCollection(this);
        }
        return this.pagesCollection;
    }
    //methods
    /**
     * `Return the page collection` of current section.
     * @private
     */
    getPages() {
        return this.pdfPages;
    }
    /**
     * `Translates` point into native coordinates of the page.
     * @private
     */
    pointToNativePdf(page, point) {
        let bounds = this.getActualBounds(page, true);
        point.x += bounds.x;
        point.y = this.pageSettings.height - (point.y);
        return point;
    }
    /**
     * Sets the page setting of the current section.
     * @public
     * @param settings Instance of `PdfPageSettings`
     */
    setPageSettings(settings) {
        this.settings = settings;
        this.state.orientation = settings.orientation;
        this.state.rotate = settings.rotate;
        this.state.size = settings.size;
        this.state.origin = settings.origin;
    }
    /**
     * `Initializes` the object.
     * @private
     */
    initialize() {
        this.pagesReferences = new PdfArray();
        this.section = new PdfDictionary();
        this.state = new PageSettingsState(this.pdfDocument);
        this.section.sectionBeginSave = new SaveSectionEventHandler(this, this.state);
        this.pageCount = new PdfNumber(0);
        this.section.items.setValue(this.dictionaryProperties.count, this.pageCount);
        this.section.items.setValue(this.dictionaryProperties.type, new PdfName(this.dictionaryProperties.pages));
        this.section.items.setValue(this.dictionaryProperties.kids, this.pagesReferences);
    }
    /**
     * Checks whether any template should be printed on this layer.
     * @private
     * @param document The parent document.
     * @param page The parent page.
     * @param foreground Layer z-order.
     * @returns True - if some content should be printed on the layer, False otherwise.
     */
    containsTemplates(document, page, foreground) {
        let documentHeaders = this.getDocumentTemplates(document, page, true, foreground);
        let documentTemplates = this.getDocumentTemplates(document, page, false, foreground);
        let contains = (documentHeaders.length > 0 || documentTemplates.length > 0);
        return contains;
    }
    /**
     * Returns array of the document templates.
     * @private
     * @param document The parent document.
     * @param page The parent page.
     * @param headers If true - return headers/footers, if false - return simple templates.
     * @param foreground If true - return foreground templates, if false - return background templates.
     * @returns Returns array of the document templates.
     */
    /* tslint:disable */
    getDocumentTemplates(document, page, headers, foreground) {
        let templates = [];
        if (headers) {
            if (this.template.applyDocumentTopTemplate && document.template.getTop(page) != null) {
                if ((!(document.template.getTop(page).foreground || foreground)) || (document.template.getTop(page).foreground && foreground)) {
                    templates.push(document.template.getTop(page));
                }
            }
            if (this.template.applyDocumentBottomTemplate && document.template.getBottom(page) != null) {
                if ((!(document.template.getBottom(page).foreground || foreground)) || (document.template.getBottom(page).foreground && foreground)) {
                    templates.push(document.template.getBottom(page));
                }
            }
            if (this.template.applyDocumentLeftTemplate && document.template.getLeft(page) != null) {
                if ((!(document.template.getLeft(page).foreground || foreground)) || (document.template.getLeft(page).foreground && foreground)) {
                    templates.push(document.template.getLeft(page));
                }
            }
            if (this.template.applyDocumentRightTemplate && document.template.getRight(page) != null) {
                if ((!(document.template.getRight(page).foreground || foreground)) || (document.template.getRight(page).foreground && foreground)) {
                    templates.push(document.template.getRight(page));
                }
            }
        }
        return templates;
    }
    /* tslint:enable */
    /**
     * `Adds` the specified page.
     * @private
     */
    add(page) {
        if (typeof page === 'undefined') {
            let page = new PdfPage();
            this.add(page);
            return page;
        }
        else {
            let r = this.checkPresence(page);
            this.pdfPages.push(page);
            this.pagesReferences.add(r);
            page.setSection(this);
            page.resetProgress();
            this.pageAddedMethod(page);
        }
    }
    /**
     * `Checks the presence`.
     * @private
     */
    checkPresence(page) {
        let rh = new PdfReferenceHolder(page);
        let contains = false;
        let sc = this.parent;
        for (let index = 0; index < sc.section.length; index++) {
            let section = sc.section[index];
            contains = contains || section.contains(page);
        }
        return rh;
    }
    /**
     * `Determines` whether the page in within the section.
     * @private
     */
    contains(page) {
        let index = this.indexOf(page);
        return (0 <= index);
    }
    /**
     * Get the `index of` the page.
     * @private
     */
    indexOf(page) {
        for (let index = 0; index < this.pdfPages.length; index++) {
            if (this.pdfPages[index] === page) {
                return this.pdfPages.indexOf(page);
            }
        }
        let r = new PdfReferenceHolder(page);
        return this.pagesReferences.indexOf(r);
    }
    /**
     * Call two event's methods.
     * @hidden
     * @private
     */
    pageAddedMethod(page) {
        //Create event's arguments
        let args = new PageAddedEventArgs(page);
        this.onPageAdded(args);
        let parent = this.parent;
        parent.document.pages.onPageAdded(args);
        this.pageCount.intValue = this.count;
    }
    /**
     * Called when the page has been added.
     * @hidden
     * @private
     */
    onPageAdded(args) {
        //
    }
    getActualBounds(arg1, arg2, arg3) {
        if (arg1 instanceof PdfPage && typeof arg2 === 'boolean') {
            let result;
            let document = this.parent.document;
            result = this.getActualBounds(document, arg1, arg2);
            return result;
        }
        else {
            arg1 = arg1;
            arg2 = arg2;
            arg3 = arg3;
            let bounds = new RectangleF(0, 0, 0, 0);
            bounds.height = (arg3) ? this.pageSettings.size.height : this.pageSettings.getActualSize().height;
            bounds.width = (arg3) ? this.pageSettings.size.width : this.pageSettings.getActualSize().width;
            let left = this.getLeftIndentWidth(arg1, arg2, arg3);
            let top = this.getTopIndentHeight(arg1, arg2, arg3);
            let right = this.getRightIndentWidth(arg1, arg2, arg3);
            let bottom = this.getBottomIndentHeight(arg1, arg2, arg3);
            bounds.x += left;
            bounds.y += top;
            bounds.width -= (left + right);
            bounds.height -= (top + bottom);
            return bounds;
        }
    }
    /**
     * Calculates width of the `left indent`.
     * @private
     */
    getLeftIndentWidth(document, page, includeMargins) {
        if (document == null) {
            throw new Error('ArgumentNullException:document');
        }
        if (page == null) {
            throw new Error('ArgumentNullException:page');
        }
        let value = (includeMargins) ? this.pageSettings.margins.left : 0;
        let templateWidth = (this.template.getLeft(page) != null) ? this.template.getLeft(page).width : 0;
        let docTemplateWidth = (document.template.getLeft(page) != null) ? document.template.getLeft(page).width : 0;
        value += (this.template.applyDocumentLeftTemplate) ? Math.max(templateWidth, docTemplateWidth) : templateWidth;
        return value;
    }
    /**
     * Calculates `Height` of the top indent.
     * @private
     */
    getTopIndentHeight(document, page, includeMargins) {
        if (document == null) {
            throw new Error('ArgumentNullException:document');
        }
        if (page == null) {
            throw new Error('ArgumentNullException:page');
        }
        let value = (includeMargins) ? this.pageSettings.margins.top : 0;
        let templateHeight = (this.template.getTop(page) != null) ? this.template.getTop(page).height : 0;
        let docTemplateHeight = (document.template.getTop(page) != null) ? document.template.getTop(page).height : 0;
        value += (this.template.applyDocumentTopTemplate) ? Math.max(templateHeight, docTemplateHeight) : templateHeight;
        return value;
    }
    /**
     * Calculates `width` of the right indent.
     * @private
     */
    getRightIndentWidth(document, page, includeMargins) {
        if (document == null) {
            throw new Error('ArgumentNullException:document');
        }
        if (page == null) {
            throw new Error('ArgumentNullException:page');
        }
        let value = (includeMargins) ? this.pageSettings.margins.right : 0;
        let templateWidth = (this.template.getRight(page) != null) ? this.template.getRight(page).width : 0;
        let docTemplateWidth = (document.template.getRight(page) != null) ? document.template.getRight(page).width : 0;
        value += (this.template.applyDocumentRightTemplate) ? Math.max(templateWidth, docTemplateWidth) : templateWidth;
        return value;
    }
    /**
     * Calculates `Height` of the bottom indent.
     * @private
     */
    getBottomIndentHeight(document, page, includeMargins) {
        if (document == null) {
            throw new Error('ArgumentNullException:document');
        }
        if (page == null) {
            throw new Error('ArgumentNullException:page');
        }
        let value = (includeMargins) ? this.pageSettings.margins.bottom : 0;
        let templateHeight = (this.template.getBottom(page) != null) ? this.template.getBottom(page).height : 0;
        let docTemplateHeight = (document.template.getBottom(page) != null) ? document.template.getBottom(page).height : 0;
        value += (this.template.applyDocumentBottomTemplate) ? Math.max(templateHeight, docTemplateHeight) : templateHeight;
        return value;
    }
    /**
     * `Removes` the page from the section.
     * @private
     */
    remove(page) {
        if (page == null) {
            throw Error('ArgumentNullException("page")');
        }
        let index = this.pdfPages.indexOf(page);
        this.pagesReferences.removeAt(index);
        let temproaryPages = [];
        for (let j = 0; j < index; j++) {
            temproaryPages.push(this.pdfPages[j]);
        }
        for (let j = index + 1; j < this.pdfPages.length; j++) {
            temproaryPages.push(this.pdfPages[j]);
        }
        this.pdfPages = temproaryPages;
    }
    /**
     * In fills dictionary by the data from `Page settings`.
     * @private
     */
    applyPageSettings(container, parentSettings, state) {
        let bounds = new RectangleF(state.origin, state.size);
        container.items.setValue(this.dictionaryProperties.mediaBox, PdfArray.fromRectangle(bounds));
        let rotate = 0;
        rotate = PdfSectionCollection.rotateFactor * state.rotate;
        let angle = new PdfNumber(rotate);
        container.items.setValue(this.dictionaryProperties.rotate, angle);
    }
    /**
     * Catches the Save event of the dictionary.
     * @hidden
     * @private
     */
    beginSave(state, writer) {
        let doc = writer.document;
        this.applyPageSettings(this.section, doc.pageSettings, state);
    }
    /**
     * Draws page templates on the page.
     * @private
     */
    drawTemplates(page, layer, document, foreground) {
        let documentHeaders = this.getDocumentTemplates(document, page, true, foreground);
        let documentTemplates = this.getDocumentTemplates(document, page, false, foreground);
        if (foreground) {
            this.drawTemplatesHelper(layer, document, documentHeaders);
            this.drawTemplatesHelper(layer, document, documentTemplates);
        }
        else {
            this.drawTemplatesHelper(layer, document, documentHeaders);
            this.drawTemplatesHelper(layer, document, documentTemplates);
        }
    }
    /**
     * Draws page templates on the page.
     * @private
     */
    drawTemplatesHelper(layer, document, templates) {
        if (templates != null && templates.length > 0) {
            let len = templates.length;
            for (let i = 0; i < len; i++) {
                let template = templates[i];
                template.draw(layer, document);
            }
        }
    }
}
class PageSettingsState {
    //public Properties
    /**
     * @hidden
     * @private
     */
    get orientation() {
        return this.pageOrientation;
    }
    set orientation(value) {
        this.pageOrientation = value;
    }
    /**
     * @hidden
     * @private
     */
    get rotate() {
        return this.pageRotate;
    }
    set rotate(value) {
        this.pageRotate = value;
    }
    /**
     * @hidden
     * @private
     */
    get size() {
        return this.pageSize;
    }
    set size(value) {
        this.pageSize = value;
    }
    /**
     * @hidden
     * @private
     */
    get origin() {
        return this.pageOrigin;
    }
    set origin(value) {
        this.pageOrigin = value;
    }
    //Public Constructor
    /**
     * New instance to store the `PageSettings`.
     * @private
     */
    constructor(document) {
        this.pageOrientation = document.pageSettings.orientation;
        this.pageRotate = document.pageSettings.rotate;
        this.pageSize = document.pageSettings.size;
        this.pageOrigin = document.pageSettings.origin;
    }
}

/**
 * Represents the `collection of the sections`.
 * @private
 */
class PdfSectionCollection {
    //constructor
    /**
     * Initializes a new instance of the `PdfSectionCollection` class.
     * @private
     */
    constructor(document) {
        /**
         * @hidden
         * @private
         */
        this.sections = [];
        /**
         * @hidden
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        // if (document === null) {
        //     throw new Error('ArgumentNullException : document');
        // }
        this.pdfDocument = document.clone();
        this.initialize();
    }
    //Properties
    /**
     * Gets the `Section` collection.
     */
    get section() {
        return this.sections;
    }
    /**
     * Gets a parent `document`.
     * @private
     */
    get document() {
        return this.pdfDocument;
    }
    /**
     * Gets the `number of sections` in a document.
     * @private
     */
    get count() {
        return this.sections.length;
    }
    /**
     * Gets the wrapped `element`.
     * @private
     */
    get element() {
        return this.pages;
    }
    //Methods
    /**
     * `Initializes the object`.
     * @private
     */
    initialize() {
        this.sectionCount = new PdfNumber(0);
        this.sectionCollection = new PdfArray();
        this.pages = new PdfDictionary();
        this.pages.beginSave = new SaveSectionCollectionEventHandler(this);
        this.pages.items.setValue(this.dictionaryProperties.type, new PdfName('Pages'));
        this.pages.items.setValue(this.dictionaryProperties.kids, this.sectionCollection);
        this.pages.items.setValue(this.dictionaryProperties.count, this.sectionCount);
        this.pages.items.setValue(this.dictionaryProperties.resources, new PdfDictionary());
        this.setPageSettings(this.pages, this.pdfDocument.pageSettings);
    }
    /**
     * Initializes a new instance of the `PdfSectionCollection` class.
     * @private
     */
    pdfSectionCollection(index) {
        if (index < 0 || index >= this.count) {
            throw new Error('IndexOutOfRangeException()');
        }
        return this.sections[index];
    }
    /**
     * In fills dictionary by the data from `Page settings`.
     * @private
     */
    setPageSettings(container, pageSettings) {
        // if (container === null) {
        //     throw new Error('ArgumentNullException : container');
        // }
        // if (pageSettings === null) {
        //     throw new Error('ArgumentNullException : pageSettings');
        // }
        let bounds = new RectangleF(new PointF(), pageSettings.size);
        container.items.setValue(this.dictionaryProperties.mediaBox, PdfArray.fromRectangle(bounds));
    }
    /**
     * `Adds` the specified section.
     * @private
     */
    add(section) {
        if (typeof section === 'undefined') {
            let section = new PdfSection(this.pdfDocument);
            this.add(section);
            return section;
        }
        else {
            // if (section === null) {
            //     throw new Error('ArgumentNullException : section');
            // }
            let r = this.checkSection(section);
            this.sections.push(section);
            section.parent = this;
            this.sectionCollection.add(r);
            return this.sections.indexOf(section);
        }
    }
    /**
     * `Checks` if the section is within the collection.
     * @private
     */
    checkSection(section) {
        let r = new PdfReferenceHolder(section);
        let contains = this.sectionCollection.contains(r);
        // if (contains) {
        //     throw new Error('ArgumentException : The object can not be added twice to the collection,section');
        // }
        return r;
    }
    /**
     * Catches the Save event of the dictionary to `count the pages`.
     * @private
     */
    countPages() {
        let count = 0;
        this.sections.forEach((n) => (count += n.count));
        return count;
    }
    /**
     * Catches the Save event of the dictionary to `count the pages`.
     * @hidden
     * @private
     */
    beginSave() {
        this.sectionCount.intValue = this.countPages();
    }
}
//Fields
/**
 * Rotate factor for page `rotation`.
 * @default 90
 * @private
 */
PdfSectionCollection.rotateFactor = 90;

/**
 * Represents a virtual collection of all the pages in the document.
 * @private
 */
class PdfDocumentPageCollection {
    //constructor
    /**
     * Initializes a new instance of the `PdfPageCollection` class.
     * @private
     */
    constructor(document) {
        /**
         * It holds the page collection with the `index`.
         * @private
         */
        this.pdfPageCollectionIndex = new Dictionary();
        /**
         * Stores the previous pages's `orientation`.
         * @default PdfPageOrientation.Portrait
         * @private
         */
        this.previousPageOrientation = PdfPageOrientation.Portrait;
        this.document = document;
    }
    //Property
    /**
     * Gets the total `number of the pages`.
     * @private
     */
    get count() {
        return this.countPages();
    }
    /**
     * Gets a `page index` from the document.
     * @private
     */
    get pageCollectionIndex() {
        return this.pdfPageCollectionIndex;
    }
    add(page) {
        if (typeof page === 'undefined') {
            let page = new PdfPage();
            this.add(page);
            return page;
        }
        else {
            let section = this.getLastSection();
            if (section.pageSettings.orientation !== this.previousPageOrientation) {
                section = this.document.sections.add();
                section.pageSettings.orientation = this.document.pageSettings.orientation;
            }
            section.add(page);
        }
    }
    /**
     * Returns `last section` in the document.
     * @private
     */
    getLastSection() {
        let sc = this.document.sections;
        if (sc.section.length === 0) {
            sc.add();
        }
        let section = sc.section[sc.section.length - 1];
        return section;
    }
    /**
     * Called when `new page has been added`.
     * @private
     */
    onPageAdded(args) {
        // if (PageAdded !== null)
        // {
        //     PageAdded(this, args);
        // }
    }
    /**
     * Gets the `total number of pages`.
     * @private
     */
    countPages() {
        let sc = this.document.sections;
        let count = 0;
        for (let index = 0; index < sc.section.length; index++) {
            count += sc.section[index].count;
        }
        return count;
    }
    /**
     * Gets the `page object` from page index.
     * @private
     */
    getPageByIndex(index) {
        return this.getPage(index);
    }
    /**
     * Gets a page by its `index` in the document.
     * @private
     */
    getPage(index) {
        if ((index < 0) || (index >= this.count)) {
            throw Error('ArgumentOutOfRangeException("index", "Value can not be less 0")');
        }
        let page = null;
        let sectionStartIndex = 0;
        let sectionCount = 0;
        let pageIndex = 0;
        let length = this.document.sections.count;
        for (let i = 0; i < length; i++) {
            let section = this.document.sections.section[i];
            sectionCount = section.count;
            pageIndex = index - sectionStartIndex;
            // We found a section containing the page.
            if ((index >= sectionStartIndex && pageIndex < sectionCount)) {
                page = section.getPages()[pageIndex];
                break;
            }
            sectionStartIndex += sectionCount;
        }
        return page;
    }
    /**
     * Gets the `index of` the page in the document.
     * @private
     */
    indexOf(page) {
        let index = -1;
        if (page == null) {
            throw new Error('ArgumentNullException: page');
        }
        else {
            let numPages = 0;
            for (let i = 0, len = this.document.sections.count; i < len; i++) {
                let section = this.document.sections.pdfSectionCollection(i);
                index = section.indexOf(page);
                if (index >= 0) {
                    index += numPages;
                    break;
                }
                else {
                    index = -1;
                }
                numPages += section.count;
            }
        }
        return index;
    }
    /**
     * `Removes` the specified page.
     * @private
     */
    remove(page) {
        if (page == null) {
            throw Error('ArgumentNullException("page")');
        }
        let section = null;
        for (let i = 0, len = this.document.sections.count; i < len; i++) {
            section = this.document.sections.pdfSectionCollection(i);
            if (section.pages.contains(page)) {
                section.pages.remove(page);
                break;
            }
        }
        return section;
    }
}

/**
 * PdfCacheCollection.ts class for EJ2-PDF
 */
/**
 * `Collection of the cached objects`.
 * @private
 */
class PdfCacheCollection {
    // Constructors
    /**
     * Initializes a new instance of the `PdfCacheCollection` class.
     * @private
     */
    constructor() {
        this.referenceObjects = [];
        this.pdfFontCollection = new Dictionary();
    }
    // Public methods
    /**
     * `Searches` for the similar cached object. If is not found - adds the object to the cache.
     * @private
     */
    search(obj) {
        let result = null;
        let group = this.createNewGroup();
        group.push(obj);
        return result;
    }
    // Implementation
    /**
     * `Creates` a new group.
     * @private
     */
    createNewGroup() {
        let group = [];
        this.referenceObjects.push(group);
        return group;
    }
    destroy() {
        this.pdfFontCollection = undefined;
        this.referenceObjects = undefined;
    }
}

/**
 * Represents a PDF document and can be used to create a new PDF document from the scratch.
 * ```typescript
 * // create a new PDF document
 * let document : PdfDocument = new PdfDocument();
 * // add a new page to the document
 * let page1 : PdfPage = document.pages.add();
 * // set the font
 * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
 * // create black brush
 * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
 * // draw the text
 * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(0, 0));
 * // save the document
 * document.save('output.pdf');
 * // destroy the document
 * document.destroy();
 * ```
 */
class PdfDocument extends PdfDocumentBase {
    constructor(isMerging) {
        super();
        /**
         * Default `margin` value.
         * @default 40.0
         * @private
         */
        this.defaultMargin = 40.0;
        /**
         * Internal variable to store instance of `StreamWriter` classes..
         * @default null
         * @private
         */
        this.streamWriter = null;
        super(this);
        if (isMerging === true || isMerging === false || typeof isMerging !== 'undefined') {
            let objects = new PdfMainObjectCollection();
            this.setMainObjectCollection(objects);
            let crossTable = new PdfCrossTable();
            crossTable.isMerging = isMerging;
            crossTable.document = this;
            this.setCrossTable(crossTable);
            let catalog = new PdfCatalog();
            this.setCatalog(catalog);
            objects.add(catalog);
            catalog.position = -1;
            this.sectionCollection = new PdfSectionCollection(this);
            this.documentPageCollection = new PdfDocumentPageCollection(this);
            catalog.pages = this.sectionCollection;
        }
        else {
            PdfDocument.cacheCollection = new PdfCacheCollection();
            this.constructor(false);
        }
    }
    //Properties
    /**
     * Gets the `default font`. It is used for complex objects when font is not explicitly defined.
     * @private
     */
    static get defaultFont() {
        if (this.defaultStandardFont == null) {
            this.defaultStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 8);
        }
        return this.defaultStandardFont;
    }
    /**
     * Gets the collection of the `sections` in the document.
     * @private
     */
    get sections() {
        return this.sectionCollection;
    }
    /**
     * Gets the document's page setting.
     * @public
     */
    get pageSettings() {
        if (this.settings == null) {
            this.settings = new PdfPageSettings(this.defaultMargin);
        }
        return this.settings;
    }
    /**
     * Sets the document's page setting.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     *
     * // sets the right margin of the page
     * document.pageSettings.margins.right = 0;
     * // set the page size.
     * document.pageSettings.size = new SizeF(500, 500);
     * // change the page orientation to landscape
     * document.pageSettings.orientation = PdfPageOrientation.Landscape;
     * // apply 90 degree rotation on the page
     * document.pageSettings.rotate = PdfPageRotateAngle.RotateAngle90;
     *
     * // add a pages to the document
     * let page1 : PdfPage = document.pages.add();
     * // set font
     * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
     * // set brush
     * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
     * // set the specified Point
     * let point : PointF = new PointF(page1.getClientSize().width - 200, page1.getClientSize().height - 200);
     * // draw the text
     * page1.graphics.drawString('Hello World', font, blackBrush, point);
     * // save the document
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    set pageSettings(value) {
        this.settings = value;
    }
    /**
     * Represents the collection of pages in the PDF document.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * //
     * // get the collection of pages in the document
     * let pageCollection : PdfDocumentPageCollection  = document.pages;
     * //
     * // add pages
     * let page1 : PdfPage = pageCollection.add();
     * // save the document
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get pages() {
        return this.documentPageCollection;
    }
    /**
     * Gets collection of the `cached objects`.
     * @private
     */
    static get cache() {
        if (typeof PdfDocument.cacheCollection === 'undefined' || PdfDocument.cacheCollection == null) {
            return new PdfCacheCollection();
        }
        return PdfDocument.cacheCollection;
    }
    /**
     * Sets collection of the `cached objects`.
     * @private
     */
    static set cache(value) {
        this.cacheCollection = value;
    }
    /* tslint:disable */
    /**
     * Gets or sets the `color space` of the document. This property can be used to create PDF document in RGB, Gray scale or CMYK color spaces.
     * @private
     */
    get colorSpace() {
        if ((this.pdfColorSpace === PdfColorSpace.Rgb) || ((this.pdfColorSpace === PdfColorSpace.Cmyk)
            || (this.pdfColorSpace === PdfColorSpace.GrayScale))) {
            return this.pdfColorSpace;
        }
        else {
            return PdfColorSpace.Rgb;
        }
    }
    set colorSpace(value) {
        if ((value === PdfColorSpace.Rgb) || ((value === PdfColorSpace.Cmyk) ||
            (value === PdfColorSpace.GrayScale))) {
            this.pdfColorSpace = value;
        }
        else {
            this.pdfColorSpace = PdfColorSpace.Rgb;
        }
    }
    /* tslint:enable */
    /**
     * Gets or sets a `template` to all pages in the document.
     * @private
     */
    get template() {
        if (this.pageTemplate == null) {
            this.pageTemplate = new PdfDocumentTemplate();
        }
        return this.pageTemplate;
    }
    set template(value) {
        this.pageTemplate = value;
    }
    docSave(stream, arg2, arg3) {
        this.checkPagesPresence();
        if (stream === null) {
            throw new Error('ArgumentNullException : stream');
        }
        this.streamWriter = stream;
        let writer = new PdfWriter(stream);
        writer.document = this;
        if (typeof arg2 === 'boolean' && typeof arg3 === 'undefined') {
            return this.crossTable.save(writer);
        }
        else {
            this.crossTable.save(writer, arg2);
        }
    }
    /**
     * Checks the pages `presence`.
     * @private
     */
    checkPagesPresence() {
        if (this.pages.count === 0) {
            this.pages.add();
        }
    }
    /**
     * disposes the current instance of `PdfDocument` class.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // add a new page to the document
     * let page1 : PdfPage = document.pages.add();
     * // set the font
     * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
     * // create black brush
     * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
     * // draw the text
     * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(0, 0));
     * // save the document
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    destroy() {
        this.catalog = undefined;
        this.colorSpace = undefined;
        this.currentSavingObj = undefined;
        this.documentPageCollection = undefined;
        this.isStreamCopied = undefined;
        this.pageSettings = undefined;
        this.pageTemplate = undefined;
        this.pdfColorSpace = undefined;
        this.sectionCollection = undefined;
        PdfDocument.cache.destroy();
        this.crossTable.pdfObjects.destroy();
        PdfDocument.cache = undefined;
        this.streamWriter.destroy();
    }
}
/**
 * `Font` used in complex objects to draw strings and text when it is not defined explicitly.
 * @default null
 * @private
 */
PdfDocument.defaultStandardFont = null;

/**
 * `Metrics` of the font.
 * @private
 */
class PdfFontMetrics {
    constructor() {
        /**
         * `Line gap`.
         * @private
         */
        this.lineGap = 0;
    }
    //  Public methods
    /**
     * Returns `ascent` taking into consideration font`s size.
     * @private
     */
    getAscent(format) {
        let returnValue = this.ascent * PdfFont.charSizeMultiplier * this.getSize(format);
        return returnValue;
    }
    /**
     * Returns `descent` taking into consideration font`s size.
     * @private
     */
    getDescent(format) {
        let returnValue = this.descent * PdfFont.charSizeMultiplier * this.getSize(format);
        return returnValue;
    }
    /**
     * Returns `Line gap` taking into consideration font`s size.
     * @private
     */
    getLineGap(format) {
        let returnValue = this.lineGap * PdfFont.charSizeMultiplier * this.getSize(format);
        return returnValue;
    }
    /**
     * Returns `height` taking into consideration font`s size.
     * @private
     */
    getHeight(format) {
        let height;
        let clearTypeFonts = ['cambria', 'candara', 'constantia', 'corbel', 'cariadings'];
        let clearTypeFontCollection = [];
        for (let index = 0; index < clearTypeFonts.length; index++) {
            let font = clearTypeFonts[index];
            clearTypeFontCollection.push(font);
        }
        if (this.getDescent(format) < 0) {
            // if ((clearTypeFontCollection.indexOf(this.name.toLowerCase()) !== -1) && !this.isUnicodeFont) {
            //     height = (this.GetAscent(format) - this.GetDescent(format) - this.GetLineGap(format));
            // } else {
            height = (this.getAscent(format) - this.getDescent(format) + this.getLineGap(format));
            // }
        }
        else {
            height = (this.getAscent(format) + this.getDescent(format) + this.getLineGap(format));
        }
        return height;
    }
    /**
     * Calculates `size` of the font depending on the subscript/superscript value.
     * @private
     */
    getSize(format) {
        let size = this.size;
        if (format != null) {
            switch (format.subSuperScript) {
                case PdfSubSuperScript.SubScript:
                    size /= this.subScriptSizeFactor;
                    break;
                case PdfSubSuperScript.SuperScript:
                    size /= this.superscriptSizeFactor;
                    break;
            }
        }
        return size;
    }
    /**
     * `Clones` the metrics.
     * @private
     */
    clone() {
        let metrics = this;
        metrics.widthTable = WidthTable.clone();
        return metrics;
    }
    //  Properies
    /**
     * Gets or sets the `width table`.
     * @private
     */
    get widthTable() {
        return this.internalWidthTable;
    }
    set widthTable(value) {
        this.internalWidthTable = value;
    }
}
class WidthTable {
    /**
     * Static `clones` this instance of the WidthTable class.
     * @private
     */
    static clone() {
        return null;
    }
}
class StandardWidthTable extends WidthTable {
    //Properties
    /**
     * Gets the `32 bit number` at the specified index.
     * @private
     */
    items(index) {
        if (index < 0 || index >= this.widths.length) {
            throw new Error('ArgumentOutOfRangeException:index, The character is not supported by the font.');
        }
        let result = this.widths[index];
        return result;
    }
    /**
     * Gets the `length` of the internal array.
     * @private
     */
    get length() {
        return this.widths.length;
    }
    // Constructors
    /**
     * Initializes a new instance of the `StandardWidthTable` class.
     * @private
     */
    constructor(widths) {
        super();
        if (widths == null) {
            throw new Error('ArgumentNullException:widths');
        }
        this.widths = widths;
    }
    //Overrides
    /**
     * `Clones` this instance of the WidthTable class.
     * @private
     */
    clone() {
        let swt = this;
        swt.widths = this.widths;
        return swt;
    }
    /**
     * Converts width table to a `PDF array`.
     * @private
     */
    toArray() {
        let arr = new PdfArray(this.widths);
        return arr;
    }
}

/**
 * PdfStandardFontMetricsFactory.ts class for EJ2-PDF
 */
/**
 * @private
 * `Factory of the standard fonts metrics`.
 */
class PdfStandardFontMetricsFactory {
    /**
     * Returns `metrics` of the font.
     * @private
     */
    static getMetrics(fontFamily, fontStyle, size) {
        let metrics = null;
        switch (fontFamily) {
            case PdfFontFamily.Helvetica:
                metrics = this.getHelveticaMetrics(fontFamily, fontStyle, size);
                break;
            case PdfFontFamily.Courier:
                metrics = this.getCourierMetrics(fontFamily, fontStyle, size);
                break;
            case PdfFontFamily.TimesRoman:
                metrics = this.getTimesMetrics(fontFamily, fontStyle, size);
                break;
            case PdfFontFamily.Symbol:
                metrics = this.getSymbolMetrics(fontFamily, fontStyle, size);
                break;
            case PdfFontFamily.ZapfDingbats:
                metrics = this.getZapfDingbatsMetrics(fontFamily, fontStyle, size);
                break;
            default:
                metrics = this.getHelveticaMetrics(PdfFontFamily.Helvetica, fontStyle, size);
                break;
        }
        metrics.name = fontFamily.toString();
        metrics.subScriptSizeFactor = this.subSuperScriptFactor;
        metrics.superscriptSizeFactor = this.subSuperScriptFactor;
        return metrics;
    }
    // Implementation
    /**
     * Creates `Helvetica font metrics`.
     * @private
     */
    static getHelveticaMetrics(fontFamily, fontStyle, size) {
        let metrics = new PdfFontMetrics();
        if ((fontStyle & PdfFontStyle.Bold) > 0 && (fontStyle & PdfFontStyle.Italic) > 0) {
            metrics.ascent = this.helveticaBoldItalicAscent;
            metrics.descent = this.helveticaBoldItalicDescent;
            metrics.postScriptName = this.helveticaBoldItalicName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.arialBoldWidth);
            metrics.height = metrics.ascent - metrics.descent;
        }
        else if ((fontStyle & PdfFontStyle.Bold) > 0) {
            metrics.ascent = this.helveticaBoldAscent;
            metrics.descent = this.helveticaBoldDescent;
            metrics.postScriptName = this.helveticaBoldName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.arialBoldWidth);
            metrics.height = metrics.ascent - metrics.descent;
        }
        else if ((fontStyle & PdfFontStyle.Italic) > 0) {
            metrics.ascent = this.helveticaItalicAscent;
            metrics.descent = this.helveticaItalicDescent;
            metrics.postScriptName = this.helveticaItalicName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.arialWidth);
            metrics.height = metrics.ascent - metrics.descent;
        }
        else {
            metrics.ascent = this.helveticaAscent;
            metrics.descent = this.helveticaDescent;
            metrics.postScriptName = this.helveticaName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.arialWidth);
            metrics.height = metrics.ascent - metrics.descent;
        }
        return metrics;
    }
    /**
     * Creates `Courier font metrics`.
     * @private
     */
    static getCourierMetrics(fontFamily, fontStyle, size) {
        let metrics = new PdfFontMetrics();
        if ((fontStyle & PdfFontStyle.Bold) > 0 && (fontStyle & PdfFontStyle.Italic) > 0) {
            metrics.ascent = this.courierBoldItalicAscent;
            metrics.descent = this.courierBoldItalicDescent;
            metrics.postScriptName = this.courierBoldItalicName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.fixedWidth);
            metrics.height = metrics.ascent - metrics.descent;
        }
        else if ((fontStyle & PdfFontStyle.Bold) > 0) {
            metrics.ascent = this.courierBoldAscent;
            metrics.descent = this.courierBoldDescent;
            metrics.postScriptName = this.courierBoldName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.fixedWidth);
            metrics.height = metrics.ascent - metrics.descent;
        }
        else if ((fontStyle & PdfFontStyle.Italic) > 0) {
            metrics.ascent = this.courierItalicAscent;
            metrics.descent = this.courierItalicDescent;
            metrics.postScriptName = this.courierItalicName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.fixedWidth);
            metrics.height = metrics.ascent - metrics.descent;
        }
        else {
            metrics.ascent = this.courierAscent;
            metrics.descent = this.courierDescent;
            metrics.postScriptName = this.courierName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.fixedWidth);
            metrics.height = metrics.ascent - metrics.descent;
        }
        return metrics;
    }
    /**
     * Creates `Times font metrics`.
     * @private
     */
    static getTimesMetrics(fontFamily, fontStyle, size) {
        let metrics = new PdfFontMetrics();
        if ((fontStyle & PdfFontStyle.Bold) > 0 && (fontStyle & PdfFontStyle.Italic) > 0) {
            metrics.ascent = this.timesBoldItalicAscent;
            metrics.descent = this.timesBoldItalicDescent;
            metrics.postScriptName = this.timesBoldItalicName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.timesRomanBoldItalicWidths);
            metrics.height = metrics.ascent - metrics.descent;
        }
        else if ((fontStyle & PdfFontStyle.Bold) > 0) {
            metrics.ascent = this.timesBoldAscent;
            metrics.descent = this.timesBoldDescent;
            metrics.postScriptName = this.timesBoldName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.timesRomanBoldWidth);
            metrics.height = metrics.ascent - metrics.descent;
        }
        else if ((fontStyle & PdfFontStyle.Italic) > 0) {
            metrics.ascent = this.timesItalicAscent;
            metrics.descent = this.timesItalicDescent;
            metrics.postScriptName = this.timesItalicName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.timesRomanItalicWidth);
            metrics.height = metrics.ascent - metrics.descent;
        }
        else {
            metrics.ascent = this.timesAscent;
            metrics.descent = this.timesDescent;
            metrics.postScriptName = this.timesName;
            metrics.size = size;
            metrics.widthTable = new StandardWidthTable(this.timesRomanWidth);
            metrics.height = metrics.ascent - metrics.descent;
        }
        return metrics;
    }
    /**
     * Creates `Symbol font metrics`.
     * @private
     */
    static getSymbolMetrics(fontFamily, fontStyle, size) {
        let metrics = new PdfFontMetrics();
        metrics.ascent = this.symbolAscent;
        metrics.descent = this.symbolDescent;
        metrics.postScriptName = this.symbolName;
        metrics.size = size;
        metrics.widthTable = new StandardWidthTable(this.symbolWidth);
        metrics.height = metrics.ascent - metrics.descent;
        return metrics;
    }
    /**
     * Creates `ZapfDingbats font metrics`.
     * @private
     */
    static getZapfDingbatsMetrics(fontFamily, fontStyle, size) {
        let metrics = new PdfFontMetrics();
        metrics.ascent = this.zapfDingbatsAscent;
        metrics.descent = this.zapfDingbatsDescent;
        metrics.postScriptName = this.zapfDingbatsName;
        metrics.size = size;
        metrics.widthTable = new StandardWidthTable(this.zapfDingbatsWidth);
        metrics.height = metrics.ascent - metrics.descent;
        return metrics;
    }
}
/**
 * `Multiplier` os subscript superscript.
 * @private
 */
PdfStandardFontMetricsFactory.subSuperScriptFactor = 1.52;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaAscent = 931;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaDescent = -225;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaName = 'Helvetica';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaBoldAscent = 962;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaBoldDescent = -228;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaBoldName = 'Helvetica-Bold';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaItalicAscent = 931;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaItalicDescent = -225;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaItalicName = 'Helvetica-Oblique';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaBoldItalicAscent = 962;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaBoldItalicDescent = -228;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.helveticaBoldItalicName = 'Helvetica-BoldOblique';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.courierAscent = 805;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.courierDescent = -250;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.courierName = 'Courier';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.courierBoldAscent = 801;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.courierBoldDescent = -250;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.courierBoldName = 'Courier-Bold';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.courierItalicAscent = 805;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.courierItalicDescent = -250;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.courierItalicName = 'Courier-Oblique';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.courierBoldItalicAscent = 801;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.courierBoldItalicDescent = -250;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.courierBoldItalicName = 'Courier-BoldOblique';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.timesAscent = 898;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.timesDescent = -218;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.timesName = 'Times-Roman';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.timesBoldAscent = 935;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.timesBoldDescent = -218;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.timesBoldName = 'Times-Bold';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.timesItalicAscent = 883;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.timesItalicDescent = -217;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.timesItalicName = 'Times-Italic';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.timesBoldItalicAscent = 921;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.timesBoldItalicDescent = -218;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.timesBoldItalicName = 'Times-BoldItalic';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.symbolAscent = 1010;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.symbolDescent = -293;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.symbolName = 'Symbol';
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.zapfDingbatsAscent = 820;
/**
 * `Ascender` value for the font.
 * @private
 */
PdfStandardFontMetricsFactory.zapfDingbatsDescent = -143;
/**
 * `Font type`.
 * @private
 */
PdfStandardFontMetricsFactory.zapfDingbatsName = 'ZapfDingbats';
/**
 * `Arial` widths table.
 * @private
 */
PdfStandardFontMetricsFactory.arialWidth = [
    278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333,
    278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584,
    584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833,
    722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278,
    469, 556, 333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833,
    556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334,
    584, 0, 556, 0, 222, 556, 333, 1000, 556, 556, 333, 1000, 667, 333, 1000, 0,
    611, 0, 0, 222, 222, 333, 333, 350, 556, 1000, 333, 1000, 500, 333, 944, 0,
    500, 667, 0, 333, 556, 556, 556, 556, 260, 556, 333, 737, 370, 556, 584, 0,
    737, 333, 400, 584, 333, 333, 333, 556, 537, 278, 333, 333, 365, 556, 834, 834,
    834, 611, 667, 667, 667, 667, 667, 667, 1000, 722, 667, 667, 667, 667, 278, 278,
    278, 278, 722, 722, 778, 778, 778, 778, 778, 584, 778, 722, 722, 722, 722, 667,
    667, 611, 556, 556, 556, 556, 556, 556, 889, 500, 556, 556, 556, 556, 278, 278,
    278, 278, 556, 556, 556, 556, 556, 556, 556, 584, 611, 556, 556, 556, 556, 500,
    556, 500
];
/**
 * `Arial bold` widths table.
 * @private
 */
PdfStandardFontMetricsFactory.arialBoldWidth = [
    278, 333, 474, 556, 556, 889, 722, 238, 333, 333, 389, 584, 278, 333,
    278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 333, 333, 584, 584,
    584, 611, 975, 722, 722, 722, 722, 667, 611, 778, 722, 278, 556, 722, 611, 833,
    722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 333, 278, 333,
    584, 556, 333, 556, 611, 556, 611, 556, 333, 611, 611, 278, 278, 556, 278, 889,
    611, 611, 611, 611, 389, 556, 333, 611, 556, 778, 556, 556, 500, 389, 280, 389,
    584, 0, 556, 0, 278, 556, 500, 1000, 556, 556, 333, 1000, 667, 333, 1000, 0,
    611, 0, 0, 278, 278, 500, 500, 350, 556, 1000, 333, 1000, 556, 333, 944, 0,
    500, 667, 0, 333, 556, 556, 556, 556, 280, 556, 333, 737, 370, 556, 584, 0,
    737, 333, 400, 584, 333, 333, 333, 611, 556, 278, 333, 333, 365, 556, 834, 834,
    834, 611, 722, 722, 722, 722, 722, 722, 1000, 722, 667, 667, 667, 667, 278, 278,
    278, 278, 722, 722, 778, 778, 778, 778, 778, 584, 778, 722, 722, 722, 722, 667,
    667, 611, 556, 556, 556, 556, 556, 556, 889, 556, 556, 556, 556, 556, 278, 278,
    278, 278, 611, 611, 611, 611, 611, 611, 611, 584, 611, 611, 611, 611, 611, 556,
    611, 556
];
/**
 * `Fixed` widths table.
 * @private
 */
PdfStandardFontMetricsFactory.fixedWidth = [
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600
];
/**
 * `Times` widths table.
 * @private
 */
PdfStandardFontMetricsFactory.timesRomanWidth = [
    250, 333, 408, 500, 500, 833, 778, 180, 333, 333, 500, 564, 250, 333,
    250, 278, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 278, 278, 564, 564,
    564, 444, 921, 722, 667, 667, 722, 611, 556, 722, 722, 333, 389, 722, 611, 889,
    722, 722, 556, 722, 667, 556, 611, 722, 722, 944, 722, 722, 611, 333, 278, 333,
    469, 500, 333, 444, 500, 444, 500, 444, 333, 500, 500, 278, 278, 500, 278, 778,
    500, 500, 500, 500, 333, 389, 278, 500, 500, 722, 500, 500, 444, 480, 200, 480,
    541, 0, 500, 0, 333, 500, 444, 1000, 500, 500, 333, 1000, 556, 333, 889, 0,
    611, 0, 0, 333, 333, 444, 444, 350, 500, 1000, 333, 980, 389, 333, 722, 0,
    444, 722, 0, 333, 500, 500, 500, 500, 200, 500, 333, 760, 276, 500, 564, 0,
    760, 333, 400, 564, 300, 300, 333, 500, 453, 250, 333, 300, 310, 500, 750, 750,
    750, 444, 722, 722, 722, 722, 722, 722, 889, 667, 611, 611, 611, 611, 333, 333,
    333, 333, 722, 722, 722, 722, 722, 722, 722, 564, 722, 722, 722, 722, 722, 722,
    556, 500, 444, 444, 444, 444, 444, 444, 667, 444, 444, 444, 444, 444, 278, 278,
    278, 278, 500, 500, 500, 500, 500, 500, 500, 564, 500, 500, 500, 500, 500, 500,
    500, 500
];
/**
 * `Times bold` widths table.
 * @private
 */
PdfStandardFontMetricsFactory.timesRomanBoldWidth = [
    250, 333, 555, 500, 500, 1000, 833, 278, 333, 333, 500, 570, 250, 333,
    250, 278, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 333, 333, 570, 570,
    570, 500, 930, 722, 667, 722, 722, 667, 611, 778, 778, 389, 500, 778, 667, 944,
    722, 778, 611, 778, 722, 556, 667, 722, 722, 1000, 722, 722, 667, 333, 278, 333,
    581, 500, 333, 500, 556, 444, 556, 444, 333, 500, 556, 278, 333, 556, 278, 833,
    556, 500, 556, 556, 444, 389, 333, 556, 500, 722, 500, 500, 444, 394, 220, 394,
    520, 0, 500, 0, 333, 500, 500, 1000, 500, 500, 333, 1000, 556, 333, 1000, 0,
    667, 0, 0, 333, 333, 500, 500, 350, 500, 1000, 333, 1000, 389, 333, 722, 0,
    444, 722, 0, 333, 500, 500, 500, 500, 220, 500, 333, 747, 300, 500, 570, 0,
    747, 333, 400, 570, 300, 300, 333, 556, 540, 250, 333, 300, 330, 500, 750, 750,
    750, 500, 722, 722, 722, 722, 722, 722, 1000, 722, 667, 667, 667, 667, 389, 389,
    389, 389, 722, 722, 778, 778, 778, 778, 778, 570, 778, 722, 722, 722, 722, 722,
    611, 556, 500, 500, 500, 500, 500, 500, 722, 444, 444, 444, 444, 444, 278, 278,
    278, 278, 500, 556, 500, 500, 500, 500, 500, 570, 500, 556, 556, 556, 556, 500,
    556, 500
];
/**
 * `Times italic` widths table.
 * @private
 */
PdfStandardFontMetricsFactory.timesRomanItalicWidth = [
    250, 333, 420, 500, 500, 833, 778, 214, 333, 333, 500, 675, 250, 333,
    250, 278, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 333, 333, 675, 675,
    675, 500, 920, 611, 611, 667, 722, 611, 611, 722, 722, 333, 444, 667, 556, 833,
    667, 722, 611, 722, 611, 500, 556, 722, 611, 833, 611, 556, 556, 389, 278, 389,
    422, 500, 333, 500, 500, 444, 500, 444, 278, 500, 500, 278, 278, 444, 278, 722,
    500, 500, 500, 500, 389, 389, 278, 500, 444, 667, 444, 444, 389, 400, 275, 400,
    541, 0, 500, 0, 333, 500, 556, 889, 500, 500, 333, 1000, 500, 333, 944, 0,
    556, 0, 0, 333, 333, 556, 556, 350, 500, 889, 333, 980, 389, 333, 667, 0,
    389, 556, 0, 389, 500, 500, 500, 500, 275, 500, 333, 760, 276, 500, 675, 0,
    760, 333, 400, 675, 300, 300, 333, 500, 523, 250, 333, 300, 310, 500, 750, 750,
    750, 500, 611, 611, 611, 611, 611, 611, 889, 667, 611, 611, 611, 611, 333, 333,
    333, 333, 722, 667, 722, 722, 722, 722, 722, 675, 722, 722, 722, 722, 722, 556,
    611, 500, 500, 500, 500, 500, 500, 500, 667, 444, 444, 444, 444, 444, 278, 278,
    278, 278, 500, 500, 500, 500, 500, 500, 500, 675, 500, 500, 500, 500, 500, 444,
    500, 444
];
/**
 * `Times bold italic` widths table.
 * @private
 */
PdfStandardFontMetricsFactory.timesRomanBoldItalicWidths = [
    250, 389, 555, 500, 500, 833, 778, 278, 333, 333, 500, 570, 250, 333,
    250, 278, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 333, 333, 570, 570,
    570, 500, 832, 667, 667, 667, 722, 667, 667, 722, 778, 389, 500, 667, 611, 889,
    722, 722, 611, 722, 667, 556, 611, 722, 667, 889, 667, 611, 611, 333, 278, 333,
    570, 500, 333, 500, 500, 444, 500, 444, 333, 500, 556, 278, 278, 500, 278, 778,
    556, 500, 500, 500, 389, 389, 278, 556, 444, 667, 500, 444, 389, 348, 220, 348,
    570, 0, 500, 0, 333, 500, 500, 1000, 500, 500, 333, 1000, 556, 333, 944, 0,
    611, 0, 0, 333, 333, 500, 500, 350, 500, 1000, 333, 1000, 389, 333, 722, 0,
    389, 611, 0, 389, 500, 500, 500, 500, 220, 500, 333, 747, 266, 500, 606, 0,
    747, 333, 400, 570, 300, 300, 333, 576, 500, 250, 333, 300, 300, 500, 750, 750,
    750, 500, 667, 667, 667, 667, 667, 667, 944, 667, 667, 667, 667, 667, 389, 389,
    389, 389, 722, 722, 722, 722, 722, 722, 722, 570, 722, 722, 722, 722, 722, 611,
    611, 500, 500, 500, 500, 500, 500, 500, 722, 444, 444, 444, 444, 444, 278, 278,
    278, 278, 500, 556, 500, 500, 500, 500, 500, 570, 500, 556, 556, 556, 556, 444,
    500, 444
];
/**
 * `Symbol` widths table.
 * @private
 */
PdfStandardFontMetricsFactory.symbolWidth = [
    250, 333, 713, 500, 549, 833, 778, 439, 333, 333, 500, 549, 250, 549,
    250, 278, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 278, 278,
    549, 549, 549, 444, 549, 722, 667, 722, 612, 611, 763, 603, 722, 333,
    631, 722, 686, 889, 722, 722, 768, 741, 556, 592, 611, 690, 439, 768,
    645, 795, 611, 333, 863, 333, 658, 500, 500, 631, 549, 549, 494, 439,
    521, 411, 603, 329, 603, 549, 549, 576, 521, 549, 549, 521, 549, 603,
    439, 576, 713, 686, 493, 686, 494, 480, 200, 480, 549, 750, 620, 247,
    549, 167, 713, 500, 753, 753, 753, 753, 1042, 987, 603, 987, 603, 400,
    549, 411, 549, 549, 713, 494, 460, 549, 549, 549, 549, 1000, 603, 1000,
    658, 823, 686, 795, 987, 768, 768, 823, 768, 768, 713, 713, 713, 713,
    713, 713, 713, 768, 713, 790, 790, 890, 823, 549, 250, 713, 603, 603,
    1042, 987, 603, 987, 603, 494, 329, 790, 790, 786, 713, 384, 384, 384,
    384, 384, 384, 494, 494, 494, 494, 329, 274, 686, 686, 686, 384, 384,
    384, 384, 384, 384, 494, 494, 494, -1
];
/**
 * `Zip dingbats` widths table.
 * @private
 */
PdfStandardFontMetricsFactory.zapfDingbatsWidth = [
    278, 974, 961, 974, 980, 719, 789, 790, 791, 690, 960, 939, 549, 855,
    911, 933, 911, 945, 974, 755, 846, 762, 761, 571, 677, 763, 760, 759,
    754, 494, 552, 537, 577, 692, 786, 788, 788, 790, 793, 794, 816, 823,
    789, 841, 823, 833, 816, 831, 923, 744, 723, 749, 790, 792, 695, 776,
    768, 792, 759, 707, 708, 682, 701, 826, 815, 789, 789, 707, 687, 696,
    689, 786, 787, 713, 791, 785, 791, 873, 761, 762, 762, 759, 759, 892,
    892, 788, 784, 438, 138, 277, 415, 392, 392, 668, 668, 390, 390, 317,
    317, 276, 276, 509, 509, 410, 410, 234, 234, 334, 334, 732, 544, 544,
    910, 667, 760, 760, 776, 595, 694, 626, 788, 788, 788, 788, 788, 788,
    788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788,
    788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788,
    788, 788, 788, 788, 788, 788, 894, 838, 1016, 458, 748, 924, 748, 918,
    927, 928, 928, 834, 873, 828, 924, 924, 917, 930, 931, 463, 883, 836,
    836, 867, 867, 696, 696, 874, 874, 760, 946, 771, 865, 771, 888, 967,
    888, 831, 873, 927, 970, 918
];

/**
 * Represents one of the 14 standard fonts.
 * It's used to create a standard PDF font to draw the text in to the PDF.
 * ```typescript
 * // create a new PDF document
 * let document : PdfDocument = new PdfDocument();
 * // add a new page to the document
 * let page1 : PdfPage = document.pages.add();
 * //
 * // create new standard font
 * let font : PdfStandardFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
 * //
 * // create black brush
 * let blackBrush : PdfSolidBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
 * // draw the text
 * page1.graphics.drawString('Hello World', font, blackBrush, new PointF(0, 0));
 * // save the document
 * document.save('output.pdf');
 * // destroy the document
 * document.destroy();
 * ```
 */
class PdfStandardFont extends PdfFont {
    constructor(fontFamilyPrototype, size, style) {
        super(size, style);
        /**
         * Gets `ascent` of the font.
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        /**
         * Gets `encodings` for internal class use.
         * @hidden
         * @private
         */
        this.encodings = ['Unknown', 'StandardEncoding', 'MacRomanEncoding', 'MacExpertEncoding',
            'WinAnsiEncoding', 'PDFDocEncoding', 'IdentityH'];
        if ((typeof fontFamilyPrototype === 'number') && (typeof style === 'undefined')) {
            this.constructor(fontFamilyPrototype, size, PdfFontStyle.Regular);
        }
        else if ((typeof fontFamilyPrototype === 'number') && (typeof style !== 'undefined')) {
            super(size, style);
            this.pdfFontFamily = fontFamilyPrototype;
            this.checkStyle();
            this.initializeInternals();
        }
        else if ((fontFamilyPrototype instanceof PdfStandardFont) && (typeof style === 'undefined')) {
            this.constructor(fontFamilyPrototype.fontFamily, size, fontFamilyPrototype.style);
        }
        else if ((fontFamilyPrototype instanceof PdfStandardFont) && (typeof style !== 'undefined')) {
            this.constructor(fontFamilyPrototype.fontFamily, size, style);
        }
    }
    //Properties
    /**
     * Gets the `FontFamily`.
     * @private
     */
    get fontFamily() {
        return this.pdfFontFamily;
    }
    //methods
    /**
     * Checks font `style` of the font.
     * @private
     */
    checkStyle() {
        if (this.fontFamily === PdfFontFamily.Symbol || this.fontFamily === PdfFontFamily.ZapfDingbats) {
            let style = this.style;
            style &= ~(PdfFontStyle.Bold | PdfFontStyle.Italic);
            this.setStyle(style);
        }
    }
    /**
     * Returns `width` of the line.
     * @public
     */
    getLineWidth(line, format) {
        if (line == null) {
            throw new Error('ArgumentNullException:line');
        }
        let width = 0;
        let name = this.name;
        line = PdfStandardFont.convert(line);
        for (let i = 0, len = line.length; i < len; i++) {
            let ch = line[i];
            let charWidth = this.getCharWidthInternal(ch, format);
            width += charWidth;
        }
        let size = this.metrics.getSize(format);
        width *= (PdfFont.charSizeMultiplier * size);
        width = this.applyFormatSettings(line, format, width);
        return width;
    }
    /**
     * Checks whether fonts are `equals`.
     * @private
     */
    equalsToFont(font) {
        let equal = false;
        let stFont = font;
        if (stFont != null) {
            let fontFamilyEqual = (this.fontFamily === stFont.fontFamily);
            let lineReducer = (~(PdfFontStyle.Underline | PdfFontStyle.Strikeout));
            let styleEqual = (this.style & lineReducer) === (stFont.style & lineReducer);
            equal = (fontFamilyEqual && styleEqual);
        }
        return equal;
    }
    /**
     * `Initializes` font internals..
     * @private
     */
    initializeInternals() {
        let equalFont = null;
        // if (PdfDocument.EnableCache) {
        equalFont = PdfDocument.cache.search(this);
        // }
        let internals = null;
        // if (equalFont == null) {
        // Create font metrics.
        let metrics = PdfStandardFontMetricsFactory.getMetrics(this.pdfFontFamily, this.style, this.size);
        this.metrics = metrics;
        internals = this.createInternals();
        this.setInternals(internals);
    }
    /**
     * `Creates` font`s dictionary.
     * @private
     */
    createInternals() {
        let dictionary = new PdfDictionary();
        dictionary.items.setValue(this.dictionaryProperties.type, new PdfName(this.dictionaryProperties.font));
        dictionary.items.setValue(this.dictionaryProperties.subtype, new PdfName(this.dictionaryProperties.type1));
        dictionary.items.setValue(this.dictionaryProperties.baseFont, new PdfName(this.metrics.postScriptName));
        if (this.fontFamily !== PdfFontFamily.Symbol && this.fontFamily !== PdfFontFamily.ZapfDingbats) {
            let encoding = this.encodings[FontEncoding.WinAnsiEncoding];
            dictionary.items.setValue(this.dictionaryProperties.encoding, new PdfName(encoding));
        }
        return dictionary;
    }
    /**
     * Returns `width` of the char. This methods doesn`t takes into consideration font`s size.
     * @private
     */
    getCharWidthInternal(charCode, format) {
        let width = 0;
        let code = 0;
        code = charCode.charCodeAt(0);
        if (this.name === '0' || this.name === '1' || this.name === '2' ||
            this.name === '3' || this.name === '4') {
            code = code - PdfStandardFont.charOffset;
        }
        code = (code >= 0 && code !== 128) ? code : 0;
        let metrics = this.metrics;
        let widthTable = metrics.widthTable;
        width = widthTable.items(code);
        return width;
    }
    /**
     * `Converts` the specified text.
     * @private
     */
    static convert(text) {
        return text;
    }
}
//Constants
/**
 * First character `position`.
 * @private
 */
PdfStandardFont.charOffset = 32;

/**
 * `PdfAnnotation` class represents the base class for annotation objects.
 * @private
 */
class PdfAnnotation {
    constructor(arg1) {
        // Fields
        /**
         * Specifies the Internal variable to store fields of `PdfDictionaryProperties`.
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        /**
         * `Color` of the annotation
         * @private
         */
        this.pdfColor = new PdfColor(255, 255, 255);
        /**
         * `Bounds` of the annotation.
         * @private
         */
        this.rectangle = new RectangleF(0, 0, 0, 0);
        /**
         * Parent `page` of the annotation.
         * @private
         */
        this.pdfPage = null;
        /**
         * `Brush of the text` of the annotation.
         * @default new PdfSolidBrush(new PdfColor(0, 0, 0))
         * @private
         */
        this.textBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
        /**
         * `Font of the text` of the annotation.
         * @default new PdfStandardFont(PdfFontFamily.TimesRoman, 10)
         * @private
         */
        this.textFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 10);
        /**
         * `StringFormat of the text` of the annotation.
         * @default new PdfStringFormat(PdfTextAlignment.Left)
         * @private
         */
        this.format = new PdfStringFormat(PdfTextAlignment.Left);
        /**
         * `Text` of the annotation.
         * @private
         */
        this.content = '';
        /**
         * Internal variable to store `dictionary`.
         * @private
         */
        this.pdfDictionary = new PdfDictionary();
        /**
         * To specifying the `Inner color` with which to fill the annotation
         * @private
         */
        this.internalColor = new PdfColor();
        /**
         * `opacity or darkness` of the annotation.
         * @private
         * @default 1.0
         */
        this.darkness = 1.0;
        if (typeof arg1 === 'undefined') {
            this.initialize();
        }
        else {
            this.initialize();
            this.bounds = arg1;
        }
    }
    // Properties
    /**
     * `Color` of the annotation
     * @private
     */
    get color() {
        return this.pdfColor;
    }
    set color(value) {
        this.pdfColor = value;
    }
    /**
     * To specifying the `Inner color` with which to fill the annotation
     * @private
     */
    get innerColor() {
        return this.internalColor;
    }
    set innerColor(value) {
        this.internalColor = value;
    }
    /**
     * `bounds` of the annotation.
     * @private
     */
    get bounds() {
        return this.rectangle;
    }
    set bounds(value) {
        this.rectangle = value;
    }
    /**
     * Parent `page` of the annotation.
     * @private
     */
    get page() {
        return this.pdfPage;
    }
    /**
     * To specifying the `Font of the text` in the annotation.
     * @private
     */
    get font() {
        return this.textFont;
    }
    set font(value) {
        this.textFont = value;
    }
    /**
     * To specifying the `StringFormat of the text` in the annotation.
     * @private
     */
    get stringFormat() {
        return this.format;
    }
    set stringFormat(value) {
        this.format = value;
    }
    /**
     * To specifying the `Brush of the text` in the annotation.
     * @private
     */
    get brush() {
        return this.textBrush;
    }
    set brush(value) {
        this.textBrush = value;
    }
    /**
     * `Text` of the annotation.
     * @private
     */
    get text() {
        return this.content;
    }
    set text(value) {
        this.content = value;
        this.dictionary.items.setValue(this.dictionaryProperties.contents, new PdfString(this.content));
    }
    /**
     * Internal variable to store `dictionary`.
     * @hidden
     */
    get dictionary() {
        return this.pdfDictionary;
    }
    set dictionary(value) {
        this.pdfDictionary = value;
    }
    // Implementation
    /**
     * `Initialize` the annotation event handler and specifies the type of the annotation.
     * @private
     */
    initialize() {
        this.pdfDictionary.annotationBeginSave = new SaveAnnotationEventHandler(this);
        this.pdfDictionary.items.setValue(this.dictionaryProperties.type, new PdfName(this.dictionaryProperties.annot));
    }
    /**
     * Sets related `page` of the annotation.
     * @private
     */
    setPage(page) {
        this.pdfPage = page;
        this.pdfDictionary.items.setValue(this.dictionaryProperties.p, new PdfReferenceHolder(this.pdfPage));
    }
    /**
     * Handles the `BeginSave` event of the Dictionary.
     * @private
     */
    beginSave() {
        this.save();
    }
    /**
     * `Saves` an annotation.
     * @private
     */
    /* tslint:disable */
    save() {
        let nativeRectangle = new RectangleF(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);
        let section = this.pdfPage.section;
        let initialHeight = nativeRectangle.height;
        let tempLoacation = section.pointToNativePdf(this.page, new PointF(nativeRectangle.x, nativeRectangle.y));
        nativeRectangle.x = tempLoacation.x;
        nativeRectangle.width = tempLoacation.x + nativeRectangle.width;
        nativeRectangle.y = (tempLoacation.y - this.page.document.pageSettings.margins.top);
        nativeRectangle.height = nativeRectangle.y - initialHeight;
        this.pdfDictionary.items.setValue(this.dictionaryProperties.rect, PdfArray.fromRectangle(nativeRectangle));
        this.dictionary.items.setValue(this.dictionaryProperties.ca, new PdfNumber(this.darkness));
    }
    /* tslint:enable */
    // IPdfWrapper Members
    /**
     * Gets the `element`.
     * @private
     */
    get element() {
        return this.pdfDictionary;
    }
}

/**
 * `PdfLinkAnnotation` class represents the ink annotation class.
 * @private
 */
class PdfLinkAnnotation extends PdfAnnotation {
    constructor(rectangle) {
        if (typeof rectangle === 'undefined') {
            super();
        }
        else {
            super(rectangle);
        }
    }
    // Implementation
    /**
     * `Initializes` annotation object.
     * @private
     */
    initialize() {
        super.initialize();
        this.dictionary.items.setValue(this.dictionaryProperties.subtype, new PdfName(this.dictionaryProperties.link));
    }
}

/**
 * Represents base class for `link annotations` with associated action.
 * @private
 */
class PdfActionLinkAnnotation extends PdfLinkAnnotation {
    // Constructors
    /**
     * Specifies the constructor for `ActionLinkAnnotation`.
     * @private
     */
    constructor(rectangle) {
        super(rectangle);
        // Fields
        /**
         * Internal variable to store annotation's `action`.
         * @default null
         * @private
         */
        this.pdfAction = null;
    }
    //Public method
    /**
     * get and set the `action`.
     * @hidden
     */
    getSetAction(value) {
        if (typeof value === 'undefined') {
            return this.pdfAction;
        }
        else {
            this.pdfAction = value;
        }
    }
}

/**
 * `PdfDocumentLinkAnnotation` class represents an annotation object with holds link on another location within a document.
 * ```typescript
 * // create a new PDF document
 * let document : PdfDocument = new PdfDocument();
 * // create new pages
 * let page1 : PdfPage = document.pages.add();
 * let page2 : PdfPage = document.pages.add();
 * // create a new rectangle
 * let bounds : RectangleF = new RectangleF({x : 10, y : 200}, {width : 300, height : 25});
 * //
 * // create a new document link annotation
 * let documentLinkAnnotation : PdfDocumentLinkAnnotation = new PdfDocumentLinkAnnotation(bounds);
 * // set the annotation text
 * documentLinkAnnotation.text = 'Document link annotation';
 * // set the destination
 * documentLinkAnnotation.destination = new PdfDestination(page2);
 * // set the documentlink annotation location
 * documentLinkAnnotation.destination.location = new PointF(10, 0);
 * // add this annotation to a new page
 * page1.annotations.add(documentLinkAnnotation);
 * //
 * // save the document to disk
 * document.save('output.pdf');
 * // destroy the document
 * document.destroy();
 * ```
 */
class PdfDocumentLinkAnnotation extends PdfLinkAnnotation {
    constructor(rectangle, destination) {
        super(rectangle);
        // Fields
        /**
         * `Destination` of the annotation.
         * @default null
         * @private
         */
        this.pdfDestination = null;
        if (typeof destination !== 'undefined') {
            this.destination = destination;
        }
    }
    // Properties
    /**
     * Gets or sets the `destination` of the annotation.
     * ```typescript
     * // create a new PDF document
     * let document : PdfDocument = new PdfDocument();
     * // create new pages
     * let page1 : PdfPage = document.pages.add();
     * let page2 : PdfPage = document.pages.add();
     * // create a new rectangle
     * let bounds : RectangleF = new RectangleF({x : 10, y : 200}, {width : 300, height : 25});
     * //
     * // create a new document link annotation
     * let documentLinkAnnotation : PdfDocumentLinkAnnotation = new PdfDocumentLinkAnnotation(bounds);
     * // set the annotation text
     * documentLinkAnnotation.text = 'Document link annotation';
     * // set the destination
     * documentLinkAnnotation.destination = new PdfDestination(page2);
     * // set the documentlink annotation location
     * documentLinkAnnotation.destination.location = new PointF(10, 0);
     * // add this annotation to a new page
     * page1.annotations.add(documentLinkAnnotation);
     * //
     * // save the document to disk
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     * @default null
     */
    get destination() {
        return this.pdfDestination;
    }
    set destination(value) {
        // if (this.pdfDestination !== value) {
        this.pdfDestination = value;
        // }
    }
    // Implementation
    /**
     * `Saves` annotation object.
     * @private
     */
    save() {
        super.save();
        if (this.pdfDestination != null) {
            this.dictionary.items.setValue(this.dictionaryProperties.dest, this.pdfDestination.element);
        }
    }
    /**
     * `Clone` the document link annotation.
     * @private
     */
    clone() {
        let annot = new PdfDocumentLinkAnnotation(this.bounds, this.destination);
        annot.color = this.color;
        annot.brush = this.brush;
        annot.destination = this.destination;
        annot.font = this.font;
        return annot;
    }
}

/**
 * public Enum for `PdfLayoutType`.
 * @private
 */
var PdfLayoutType;
(function (PdfLayoutType) {
    /**
     * Specifies the type of `Paginate`.
     * @private
     */
    PdfLayoutType[PdfLayoutType["Paginate"] = 0] = "Paginate";
    /**
     * Specifies the type of `OnePage`.
     * @private
     */
    PdfLayoutType[PdfLayoutType["OnePage"] = 1] = "OnePage";
})(PdfLayoutType || (PdfLayoutType = {}));
/**
 * public Enum for `PdfLayoutBreakType`.
 * @private
 */
var PdfLayoutBreakType;
(function (PdfLayoutBreakType) {
    /**
     * Specifies the type of `FitPage`.
     * @private
     */
    PdfLayoutBreakType[PdfLayoutBreakType["FitPage"] = 0] = "FitPage";
    /**
     * Specifies the type of `FitElement`.
     * @private
     */
    PdfLayoutBreakType[PdfLayoutBreakType["FitElement"] = 1] = "FitElement";
    /**
     * Specifies the type of `FitColumnsToPage`.
     * @private
     */
    PdfLayoutBreakType[PdfLayoutBreakType["FitColumnsToPage"] = 2] = "FitColumnsToPage";
})(PdfLayoutBreakType || (PdfLayoutBreakType = {}));

/**
 * ElementLayouter.ts class for EJ2-PDF
 */
/**
 * Base class for `elements lay outing`.
 * @private
 */
class ElementLayouter {
    // Constructor
    /**
     * Initializes a new instance of the `ElementLayouter` class.
     * @private
     */
    constructor(element) {
        this.layoutElement = element;
    }
    // Properties
    /**
     * Gets the `element`.
     * @private
     */
    get elements() {
        return this.layoutElement;
    }
    /**
     * Gets the `element`.
     * @private
     */
    getElement() {
        return this.layoutElement;
    }
    layout(param, isBoundsChanged) {
        if (typeof isBoundsChanged === 'boolean' && isBoundsChanged === true) {
            return this.layoutInternal(param, true);
        }
        else {
            return this.layoutInternal(param);
        }
    }
    /**
     * Returns the `next page`.
     * @private
     */
    getNextPage(currentPage) {
        let section = currentPage.section;
        let nextPage = section.add();
        return nextPage;
    }
}
class PdfLayoutFormat {
    // Properties
    /**
     * Gets or sets `layout` type of the element.
     * @private
     */
    get layout() {
        if (typeof this.layoutType === 'undefined' || this.layoutType == null) {
            this.layoutType = PdfLayoutType.Paginate;
        }
        return this.layoutType;
    }
    set layout(value) {
        this.layoutType = value;
    }
    /**
     * Gets or sets `break` type of the element.
     * @private
     */
    get break() {
        if (typeof this.breakType === 'undefined' || this.boundsSet == null) {
            this.breakType = PdfLayoutBreakType.FitPage;
        }
        return this.breakType;
    }
    set break(value) {
        this.breakType = value;
    }
    /**
     * Gets or sets the `bounds` on the next page.
     * @private
     */
    get paginateBounds() {
        if (typeof this.layoutPaginateBounds === 'undefined' && this.layoutPaginateBounds == null) {
            this.layoutPaginateBounds = new RectangleF(0, 0, 0, 0);
        }
        return this.layoutPaginateBounds;
    }
    set paginateBounds(value) {
        this.layoutPaginateBounds = value;
        this.boundsSet = true;
    }
    /**
     * Gets a value indicating whether [`use paginate bounds`].
     * @private
     */
    get usePaginateBounds() {
        if (typeof this.boundsSet === 'undefined' || this.boundsSet == null) {
            this.boundsSet = false;
        }
        return this.boundsSet;
    }
    constructor(baseFormat) {
        if (typeof baseFormat === 'undefined') {
            //
        }
        else {
            this.break = baseFormat.break;
            this.layout = baseFormat.layout;
            this.paginateBounds = baseFormat.paginateBounds;
            this.boundsSet = baseFormat.usePaginateBounds;
        }
    }
}
class PdfLayoutParams {
    // Properties
    /**
     * Gets or sets the layout `page` for the element.
     * @private
     */
    get page() {
        return this.pdfPage;
    }
    set page(value) {
        this.pdfPage = value;
    }
    /**
     * Gets or sets layout `bounds` for the element.
     * @private
     */
    get bounds() {
        return new RectangleF(this.layoutBounds.x, this.layoutBounds.y, this.layoutBounds.width, this.layoutBounds.height);
    }
    set bounds(value) {
        this.layoutBounds = value;
    }
    /**
     * Gets or sets `layout settings` for the element.
     * @private
     */
    get format() {
        return this.layoutFormat;
    }
    set format(value) {
        this.layoutFormat = value;
    }
}
class PdfLayoutResult {
    // Properties
    /**
     * Gets the last `page` where the element was drawn.
     * @private
     */
    get page() {
        return this.pdfPage;
    }
    /**
     * Gets the `bounds` of the element on the last page where it was drawn.
     * @private
     */
    get bounds() {
        return this.layoutBounds;
    }
    // Constructors
    /**
     * Initializes the new instance of `PdfLayoutResult` class.
     * @private
     */
    constructor(page, bounds) {
        this.pdfPage = page;
        this.layoutBounds = bounds;
    }
}

/**
 * `PdfLayoutElement` class represents the base class for all elements that can be layout on the pages.
 * @private
 */
class PdfLayoutElement {
    drawHelper(arg2, arg3, arg4, arg5) {
        if (arg3 instanceof PointF && typeof arg3.width === 'undefined' && typeof arg3 === 'undefined') {
            return this.drawHelper(arg2, arg3.x, arg3.y);
        }
        else if (typeof arg3 === 'number' && typeof arg4 === 'number' && typeof arg5 === 'undefined') {
            return this.drawHelper(arg2, arg3, arg4, null);
        }
        else if (arg3 instanceof RectangleF && typeof arg3.width !== 'undefined' && typeof arg4 === 'undefined') {
            return this.drawHelper(arg2, arg3, null);
        }
        else if (arg3 instanceof PointF && typeof arg3.width === 'undefined' && arg4 instanceof PdfLayoutFormat) {
            return this.drawHelper(arg2, arg3.x, arg3.y, arg4);
        }
        else if (typeof arg3 === 'number' && typeof arg4 === 'number' && (arg5 instanceof PdfLayoutFormat || arg5 == null)) {
            let width = (arg2.graphics.clientSize.width - arg3);
            let layoutRectangle = new RectangleF(arg3, arg4, width, 0);
            return this.drawHelper(arg2, layoutRectangle, arg5);
        }
        else if (arg3 instanceof RectangleF && typeof arg3.width !== 'undefined' && typeof arg4 === 'boolean') {
            this.bEmbedFonts = arg4;
            return this.drawHelper(arg2, arg3, null);
        }
        else {
            let param = new PdfLayoutParams();
            let temparg3 = arg3;
            let temparg4 = arg4;
            param.page = arg2;
            param.bounds = temparg3;
            param.format = (temparg4 != null) ? temparg4 : new PdfLayoutFormat();
            let result = this.layout(param);
            return result;
        }
    }
}

/**
 * TextLayouter.ts class for EJ2-PDF
 */
/**
 * Class that `layouts the text`.
 * @private
 */
class TextLayouter extends ElementLayouter {
    /**
     * Gets the layout `element`.
     * @private
     */
    get element() {
        return super.getElement();
    }
    // Constructors
    /**
     * Initializes a new instance of the `TextLayouter` class.
     * @private
     */
    constructor(element) {
        super(element);
    }
    // Implementation
    /**
     * `Layouts` the element.
     * @private
     */
    layoutInternal(param) {
        /* tslint:disable */
        this.format = (this.element.stringFormat != null && typeof this.element.stringFormat !== 'undefined') ? this.element.stringFormat : null;
        let currentPage = param.page;
        let currentBounds = param.bounds;
        let text = this.element.value;
        let result = null;
        let pageResult = new TextPageLayoutResult();
        pageResult.page = currentPage;
        pageResult.remainder = text;
        for (;;) {
            pageResult = this.layoutOnPage(text, currentPage, currentBounds, param);
            result = this.getLayoutResult(pageResult);
            break;
        }
        /* tslint:enable */
        return result;
    }
    /**
     * Raises `PageLayout` event if needed.
     * @private
     */
    getLayoutResult(pageResult) {
        let result = new PdfTextLayoutResult(pageResult.page, pageResult.bounds, pageResult.remainder, pageResult.lastLineBounds);
        return result;
    }
    /* tslint:disable */
    /**
     * `Layouts` the text on the page.
     * @private
     */
    layoutOnPage(text, currentPage, currentBounds, param) {
        let result = new TextPageLayoutResult();
        result.remainder = text;
        result.page = currentPage;
        currentBounds = this.checkCorrectBounds(currentPage, currentBounds);
        let layouter = new PdfStringLayouter();
        let stringResult = layouter.layout(text, this.element.font, this.format, currentBounds, currentPage.getClientSize().height, false, new SizeF(0, 0));
        let textFinished = (stringResult.remainder == null);
        let doesntFit = (param.format.break === PdfLayoutBreakType.FitElement);
        let canDraw = !(doesntFit || stringResult.empty);
        // Draw the text.
        let graphics = currentPage.graphics;
        let brush = this.element.getBrush();
        if (this.element instanceof PdfTextWebLink) {
            brush.color = new PdfColor(0, 0, 255);
        }
        graphics.drawStringLayoutResult(stringResult, this.element.font, this.element.pen, brush, currentBounds, this.format);
        let lineInfo = stringResult.lines[stringResult.lineCount - 1];
        result.lastLineBounds = graphics.getLineBounds(stringResult.lineCount - 1, stringResult, this.element.font, currentBounds, this.format);
        result.bounds = this.getTextPageBounds(currentPage, currentBounds, stringResult);
        result.remainder = stringResult.remainder;
        result.end = (textFinished);
        return result;
    }
    /* tslint:enable */
    /**
     * `Corrects current bounds` on the page.
     * @private
     */
    checkCorrectBounds(currentPage, currentBounds) {
        let pageSize = currentPage.graphics.clientSize;
        currentBounds.height = (currentBounds.height > 0) ? currentBounds.height : pageSize.height - currentBounds.y;
        return currentBounds;
    }
    /**
     * Returns a `rectangle` where the text was printed on the page.
     * @private
     */
    /* tslint:disable */
    getTextPageBounds(currentPage, currentBounds, stringResult) {
        let textSize = stringResult.actualSize;
        let x = currentBounds.x;
        let y = currentBounds.y;
        let width = (currentBounds.width > 0) ? currentBounds.width : textSize.width;
        let height = textSize.height;
        let shiftedRect = currentPage.graphics.checkCorrectLayoutRectangle(textSize, currentBounds.x, currentBounds.y, this.format);
        // if (currentBounds.width <= 0) {
        x = shiftedRect.x;
        // }
        let verticalShift = currentPage.graphics.getTextVerticalAlignShift(textSize.height, currentBounds.height, this.format);
        y += verticalShift;
        let bounds = new RectangleF(x, y, width, height);
        return bounds;
    }
}
class TextPageLayoutResult {
}
class PdfTextLayoutResult extends PdfLayoutResult {
    // Properties
    /**
     * Gets a value that contains the `text` that was not printed.
     * @private
     */
    get remainder() {
        return this.remainderText;
    }
    /**
     * Gets a value that indicates the `bounds` of the last line that was printed on the page.
     * @private
     */
    get lastLineBounds() {
        return this.lastLineTextBounds;
    }
    // Constructors
    /**
     * Initializes the new instance of `PdfTextLayoutResult` class.
     * @private
     */
    constructor(page, bounds, remainder, lastLineBounds) {
        super(page, bounds);
        this.remainderText = remainder;
        this.lastLineTextBounds = lastLineBounds;
    }
}

/**
 * PdfTextElement.ts class for EJ2-PDF
 */
/**
 * `PdfTextElement` class represents the text area with the ability to span several pages
 * and inherited from the 'PdfLayoutElement' class.
 * @private
 */
class PdfTextElement extends PdfLayoutElement {
    constructor(arg1, arg2, arg3, arg4, arg5) {
        super();
        // Fields
        /**
         * `Text` data.
         * @private
         */
        this.content = '';
        /**
         * `Value` of text data.
         * @private
         */
        this.elementValue = '';
        /**
         * indicate whether the drawText with PointF overload is called or not.
         * @default false
         * @private
         */
        this.hasPointOverload = false;
        /**
         * indicate whether the PdfGridCell value is `PdfTextElement`
         * @default false
         * @private
         */
        this.isPdfTextElement = false;
        if (typeof arg1 === 'undefined') {
            //
        }
        else if (typeof arg1 === 'string' && typeof arg2 === 'undefined') {
            super();
            this.content = arg1;
            this.elementValue = arg1;
        }
        else if (typeof arg1 === 'string' && arg2 instanceof PdfFont && typeof arg3 === 'undefined') {
            super();
            this.content = arg1;
            this.elementValue = arg1;
            this.pdfFont = arg2;
        }
        else if (typeof arg1 === 'string' && arg2 instanceof PdfFont && arg3 instanceof PdfPen && typeof arg4 === 'undefined') {
            super();
            this.content = arg1;
            this.elementValue = arg1;
            this.pdfFont = arg2;
            this.pdfPen = arg3;
        }
        else if (typeof arg1 === 'string' && arg2 instanceof PdfFont && arg3 instanceof PdfBrush && typeof arg4 === 'undefined') {
            super();
            this.content = arg1;
            this.elementValue = arg1;
            this.pdfFont = arg2;
            this.pdfBrush = arg3;
        }
        else {
            super();
            this.content = arg1;
            this.elementValue = arg1;
            this.pdfFont = arg2;
            this.pdfPen = arg3;
            this.pdfBrush = arg4;
            this.format = arg5;
        }
    }
    // Properties
    /**
     * Gets or sets a value indicating the `text` that should be printed.
     * ```typescript
     * // create a new PDF document.
     * let document : PdfDocument = new PdfDocument();
     * // add a page to the document.
     * let page1 : PdfPage = document.pages.add();
     * // create the font
     * let font : PdfFont = new PdfStandardFont(PdfFontFamily.Helvetica, 12);
     * // create the Text Web Link
     * let textLink : PdfTextWebLink = new PdfTextWebLink();
     * // set the hyperlink
     * textLink.url = 'http://www.google.com';
     * //
     * // set the link text
     * textLink.text = 'Google';
     * //
     * // set the font
     * textLink.font = font;
     * // draw the hyperlink in PDF page
     * textLink.draw(page1, new PointF(10, 40));
     * // save the document.
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get text() {
        return this.content;
    }
    set text(value) {
        this.elementValue = value;
        this.content = value;
    }
    //get value
    /**
     * Gets or sets a `value` indicating the text that should be printed.
     * @private
     */
    get value() {
        return this.elementValue;
    }
    //get pen
    /**
     * Gets or sets a `PdfPen` that determines the color, width, and style of the text
     * @private
     */
    get pen() {
        return this.pdfPen;
    }
    //Set pen value
    set pen(value) {
        this.pdfPen = value;
    }
    //get brush
    /**
     * Gets or sets the `PdfBrush` that will be used to draw the text with color and texture.
     * @private
     */
    get brush() {
        return this.pdfBrush;
    }
    //Set brush value
    set brush(value) {
        this.pdfBrush = value;
    }
    //get font
    /**
     * Gets or sets a `PdfFont` that defines the text format.
     * ```typescript
     * // create a new PDF document.
     * let document : PdfDocument = new PdfDocument();
     * // add a page to the document.
     * let page1 : PdfPage = document.pages.add();
     * // create the font
     * let font : PdfFont = new PdfStandardFont(PdfFontFamily.Helvetica, 12);
     * // create the Text Web Link
     * let textLink : PdfTextWebLink = new PdfTextWebLink();
     * // set the hyperlink
     * textLink.url = 'http://www.google.com';
     * // set the link text
     * textLink.text = 'Google';
     * //
     * // set the font
     * textLink.font = font;
     * //
     * // draw the hyperlink in PDF page
     * textLink.draw(page1, new PointF(10, 40));
     * // save the document.
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get font() {
        return this.pdfFont;
    }
    set font(value) {
        this.pdfFont = value;
        if (this.pdfFont instanceof PdfStandardFont && this.content != null) {
            this.elementValue = PdfStandardFont.convert(this.content);
        }
        else {
            this.elementValue = this.content;
        }
    }
    /**
     * Gets or sets the `PdfStringFormat` that will be used to set the string format
     * @private
     */
    get stringFormat() {
        return this.format;
    }
    set stringFormat(value) {
        this.format = value;
    }
    // Implementation
    /**
     * Gets a `brush` for drawing.
     * @private
     */
    getBrush() {
        return (this.pdfBrush == null || typeof this.pdfBrush === 'undefined') ? new PdfSolidBrush(new PdfColor(0, 0, 0)) : this.pdfBrush;
    }
    // /**
    //  * `Draws` an element on the Graphics.
    //  * @private
    //  */
    // public drawInternal(graphics : PdfGraphics) : void {
    //     graphics.drawString(this.elementValue, this.pdfFont, this.pdfPen, this.getBrush(), 0, 0, this.stringFormat);
    // }
    /**
     * `Layouts` the element.
     * @private
     */
    layout(param) {
        let layouter = new TextLayouter(this);
        let result = layouter.layout(param);
        return result;
    }
    drawText(arg2, arg3, arg4, arg5) {
        if (arg3 instanceof PointF && typeof arg3.width === 'undefined' && typeof arg4 === 'undefined') {
            this.hasPointOverload = true;
            return this.drawText(arg2, arg3.x, arg3.y);
        }
        else if (typeof arg3 === 'number' && typeof arg4 === 'number' && typeof arg5 === 'undefined') {
            this.hasPointOverload = true;
            return this.drawText(arg2, arg3, arg4, null);
        }
        else if (arg3 instanceof RectangleF && typeof arg3.width !== 'undefined' && typeof arg4 === 'undefined') {
            return this.drawText(arg2, arg3, null);
        }
        else if (arg3 instanceof PointF && typeof arg3.width === 'undefined' && arg4 instanceof PdfLayoutFormat) {
            this.hasPointOverload = true;
            return this.drawText(arg2, arg3.x, arg3.y, arg4);
        }
        else if (typeof arg3 === 'number' && typeof arg4 === 'number' && (arg5 instanceof PdfLayoutFormat || arg5 == null)) {
            this.hasPointOverload = true;
            let width = (arg2.graphics.clientSize.width - arg3);
            let layoutRectangle = new RectangleF(arg3, arg4, width, 0);
            return this.drawText(arg2, layoutRectangle, arg5);
        }
        else if (arg3 instanceof RectangleF && typeof arg3.width !== 'undefined' && typeof arg4 === 'boolean') {
            return this.drawText(arg2, arg3, null);
        }
        else {
            let layout = new PdfStringLayouter();
            if (this.hasPointOverload) {
                let stringLayoutResult = layout.layout(this.value, this.font, this.stringFormat, new SizeF((arg2.graphics.clientSize.width - arg3.x), 0), true, arg2.graphics.clientSize);
                let layoutResult;
                let param = new PdfLayoutParams();
                let temparg3 = arg3;
                let temparg4 = arg4;
                param.page = arg2;
                param.bounds = temparg3;
                param.format = (temparg4 != null) ? temparg4 : new PdfLayoutFormat();
                if (stringLayoutResult.lines.length > 1) {
                    this.text = stringLayoutResult.layoutLines[0].text;
                    if (param.bounds.y <= param.page.graphics.clientSize.height) {
                        let previousPosition = new PointF(param.bounds.x, param.bounds.y);
                        layoutResult = this.layout(param);
                        let bounds = new RectangleF(0, layoutResult.bounds.y + stringLayoutResult.lineHeight, arg2.graphics.clientSize.width, stringLayoutResult.lineHeight);
                        for (let i = 1; i < stringLayoutResult.lines.length; i++) {
                            param.page = layoutResult.page;
                            param.bounds = new RectangleF(new PointF(bounds.x, bounds.y), new SizeF(bounds.width, bounds.height));
                            this.text = stringLayoutResult.layoutLines[i].text;
                            if (bounds.y + stringLayoutResult.lineHeight > layoutResult.page.graphics.clientSize.height) {
                                param.page = param.page.graphics.getNextPage();
                                if (previousPosition.y > (layoutResult.page.graphics.clientSize.height - layoutResult.bounds.height)) {
                                    bounds = new RectangleF(0, layoutResult.bounds.height, layoutResult.page.graphics.clientSize.width, stringLayoutResult.lineHeight);
                                }
                                else {
                                    bounds = new RectangleF(0, 0, layoutResult.page.graphics.clientSize.width, stringLayoutResult.lineHeight);
                                }
                                param.bounds = bounds;
                            }
                            layoutResult = this.layout(param);
                            if (i !== (stringLayoutResult.lines.length - 1)) {
                                bounds = new RectangleF(0, layoutResult.bounds.y + stringLayoutResult.lineHeight, layoutResult.page.graphics.clientSize.width, stringLayoutResult.lineHeight);
                            }
                            else {
                                let lineWidth = this.font.measureString(this.text, this.format).width;
                                layoutResult = this.calculateResultBounds(layoutResult, lineWidth, layoutResult.page.graphics.clientSize.width, 0);
                            }
                        }
                    }
                    return layoutResult;
                }
                else {
                    let lineSize = this.font.measureString(this.text, this.format);
                    if (param.bounds.y <= param.page.graphics.clientSize.height) {
                        layoutResult = this.layout(param);
                        layoutResult = this.calculateResultBounds(layoutResult, lineSize.width, layoutResult.page.graphics.clientSize.width, 0);
                    }
                    return layoutResult;
                }
            }
            else {
                let layoutResult = layout.layout(this.value, this.font, this.stringFormat, new SizeF(arg3.width, 0), false, arg2.graphics.clientSize);
                let result;
                let param = new PdfLayoutParams();
                let temparg3 = arg3;
                let temparg4 = arg4;
                param.page = arg2;
                param.bounds = temparg3;
                param.format = (temparg4 != null) ? temparg4 : new PdfLayoutFormat();
                if (layoutResult.lines.length > 1) {
                    this.text = layoutResult.layoutLines[0].text;
                    if (param.bounds.y <= param.page.graphics.clientSize.height) {
                        let previousPosition = new PointF(param.bounds.x, param.bounds.y);
                        result = this.layout(param);
                        let bounds = new RectangleF(temparg3.x, result.bounds.y + layoutResult.lineHeight, temparg3.width, layoutResult.lineHeight);
                        for (let i = 1; i < layoutResult.lines.length; i++) {
                            param.page = result.page;
                            param.bounds = new RectangleF(bounds.x, bounds.y, bounds.width, bounds.height);
                            this.text = layoutResult.layoutLines[i].text;
                            if (bounds.y + layoutResult.lineHeight > result.page.graphics.clientSize.height) {
                                param.page = param.page.graphics.getNextPage();
                                if (previousPosition.y > (result.page.graphics.clientSize.height - result.bounds.height)) {
                                    bounds = new RectangleF(temparg3.x, layoutResult.lineHeight, temparg3.width, layoutResult.lineHeight);
                                }
                                else {
                                    bounds = new RectangleF(temparg3.x, 0, temparg3.width, layoutResult.lineHeight);
                                }
                                param.bounds = bounds;
                            }
                            result = this.layout(param);
                            if (i !== (layoutResult.lines.length - 1)) {
                                bounds = new RectangleF(temparg3.x, result.bounds.y + layoutResult.lineHeight, temparg3.width, layoutResult.lineHeight);
                            }
                            else {
                                let lineWidth = this.font.measureString(this.text, this.format).width;
                                result = this.calculateResultBounds(result, lineWidth, temparg3.width, temparg3.x);
                            }
                        }
                    }
                    return result;
                }
                else {
                    let lineSize = this.font.measureString(this.text, this.format);
                    if (param.bounds.y <= param.page.graphics.clientSize.height) {
                        result = this.layout(param);
                        result = this.calculateResultBounds(result, lineSize.width, temparg3.width, temparg3.x);
                    }
                    return result;
                }
            }
        }
    }
    calculateResultBounds(result, lineWidth, maximumWidth, startPosition) {
        if (this.stringFormat != null && typeof this.stringFormat !== 'undefined' && this.stringFormat.alignment === PdfTextAlignment.Center) {
            result.bounds.x = startPosition + (maximumWidth - lineWidth) / 2;
            result.bounds.width = lineWidth;
        }
        else if (this.stringFormat != null && typeof this.stringFormat !== 'undefined' && this.stringFormat.alignment === PdfTextAlignment.Right) {
            result.bounds.x = startPosition + (maximumWidth - lineWidth);
            result.bounds.width = lineWidth;
        }
        else if (this.stringFormat != null && typeof this.stringFormat !== 'undefined' && this.stringFormat.alignment === PdfTextAlignment.Justify) {
            result.bounds.x = startPosition;
            result.bounds.width = maximumWidth;
        }
        else {
            result.bounds.width = startPosition;
            result.bounds.width = lineWidth;
        }
        return result;
    }
}

/**
 * `PdfUriAnnotation` class represents the Uri annotation.
 * @private
 */
class PdfUriAnnotation extends PdfActionLinkAnnotation {
    /**
     * Get `action` of the annotation.
     * @private
     */
    get uriAction() {
        if (typeof this.pdfUriAction === 'undefined') {
            this.pdfUriAction = new PdfUriAction();
        }
        return this.pdfUriAction;
    }
    // Properties
    /**
     * Gets or sets the `Uri` address.
     * @private
     */
    get uri() {
        return this.uriAction.uri;
    }
    set uri(value) {
        if (this.uriAction.uri !== value) {
            this.uriAction.uri = value;
        }
    }
    /**
     * Gets or sets the `action`.
     * @private
     */
    get action() {
        return this.getSetAction();
    }
    set action(value) {
        this.getSetAction(value);
        this.uriAction.next = value;
    }
    constructor(rectangle, uri) {
        super(rectangle);
        if (typeof uri !== 'undefined') {
            this.uri = uri;
        }
    }
    // Implementation
    /**
     * `Initializes` annotation object.
     * @private
     */
    initialize() {
        super.initialize();
        this.dictionary.items.setValue(this.dictionaryProperties.subtype, new PdfName(this.dictionaryProperties.link));
        let tempPrimitive = this.uriAction.element;
        this.dictionary.items.setValue(this.dictionaryProperties.a, this.uriAction.element);
    }
}

/**
 * `PdfTextWebLink` class represents the class for text web link annotation.
 * ```typescript
 * // create a new PDF document.
 * let document : PdfDocument = new PdfDocument();
 * // add a page to the document.
 * let page1 : PdfPage = document.pages.add();
 * // create the font
 * let font : PdfFont = new PdfStandardFont(PdfFontFamily.Helvetica, 12);
 * //
 * // create the Text Web Link
 * let textLink : PdfTextWebLink = new PdfTextWebLink();
 * // set the hyperlink
 * textLink.url = 'http://www.google.com';
 * // set the link text
 * textLink.text = 'Google';
 * // set the font
 * textLink.font = font;
 * // draw the hyperlink in PDF page
 * textLink.draw(page1, new PointF(10, 40));
 * //
 * // save the document.
 * document.save('output.pdf');
 * // destroy the document
 * document.destroy();
 * ```
 */
class PdfTextWebLink extends PdfTextElement {
    // Constructors
    /**
     * Initializes a new instance of the `PdfTextWebLink` class.
     * @private
     */
    constructor() {
        super();
        // Fields
        /**
         * Internal variable to store `Url`.
         * @default ''
         * @private
         */
        this.uniformResourceLocator = '';
        /**
         * Internal variable to store `Uri Annotation` object.
         * @default null
         * @private
         */
        this.uriAnnotation = null;
        /**
         * Checks whether the drawTextWebLink method with `PointF` overload is called or not.
         * If it set as true, then the start position of each lines excluding firest line is changed as (0, Y).
         * @private
         * @hidden
         */
        this.recalculateBounds = false;
        this.defaultBorder = new PdfArray();
        for (let i = 0; i < 3; i++) {
            this.defaultBorder.add(new PdfNumber(0));
        }
    }
    // Properties
    /**
     * Gets or sets the `Uri address`.
     * ```typescript
     * // create a new PDF document.
     * let document : PdfDocument = new PdfDocument();
     * // add a page to the document.
     * let page1 : PdfPage = document.pages.add();
     * // create the font
     * let font : PdfFont = new PdfStandardFont(PdfFontFamily.Helvetica, 12);
     * // create the Text Web Link
     * let textLink : PdfTextWebLink = new PdfTextWebLink();
     * //
     * // set the hyperlink
     * textLink.url = 'http://www.google.com';
     * //
     * // set the link text
     * textLink.text = 'Google';
     * // set the font
     * textLink.font = font;
     * // draw the hyperlink in PDF page
     * textLink.draw(page1, new PointF(10, 40));
     * // save the document.
     * document.save('output.pdf');
     * // destroy the document
     * document.destroy();
     * ```
     */
    get url() {
        return this.uniformResourceLocator;
    }
    set url(value) {
        if (value.length === 0) {
            throw new Error('ArgumentException : Url - string can not be empty');
        }
        this.uniformResourceLocator = value;
    }
    draw(arg1, arg2) {
        if (arg1 instanceof PdfPage) {
            let layout = new PdfStringLayouter();
            let previousFontStyle = this.font.style;
            if (arg2 instanceof PointF) {
                this.recalculateBounds = true;
                this.font.style = PdfFontStyle.Underline;
                let layoutResult = layout.layout(this.value, this.font, this.stringFormat, new SizeF((arg1.graphics.clientSize.width - arg2.x), 0), true, arg1.graphics.clientSize);
                if (layoutResult.lines.length === 1) {
                    let textSize = this.font.measureString(this.value);
                    let rect = new RectangleF(arg2, textSize);
                    rect = this.calculateBounds(rect, textSize.width, arg1.graphics.clientSize.width, arg2.x);
                    this.uriAnnotation = new PdfUriAnnotation(rect, this.url);
                    this.uriAnnotation.dictionary.items.setValue('Border', this.defaultBorder);
                    arg1.annotations.add(this.uriAnnotation);
                    let result = this.drawText(arg1, arg2);
                    this.font.style = previousFontStyle;
                    return result;
                }
                else {
                    let result = this.drawMultipleLineWithPoint(layoutResult, arg1, arg2);
                    this.font.style = previousFontStyle;
                    return result;
                }
            }
            else {
                let layoutResult = layout.layout(this.value, this.font, this.stringFormat, new SizeF(arg2.width, 0), false, new SizeF(0, 0));
                this.font.style = PdfFontStyle.Underline;
                if (layoutResult.lines.length === 1) {
                    let textSize = this.font.measureString(this.value);
                    let rect = new RectangleF(new PointF(arg2.x, arg2.y), textSize);
                    rect = this.calculateBounds(rect, textSize.width, arg2.width, arg2.x);
                    this.uriAnnotation = new PdfUriAnnotation(rect, this.url);
                    this.uriAnnotation.dictionary.items.setValue('Border', this.defaultBorder);
                    arg1.annotations.add(this.uriAnnotation);
                    let returnValue = this.drawText(arg1, arg2);
                    this.font.style = previousFontStyle;
                    return returnValue;
                }
                else {
                    let returnValue = this.drawMultipleLineWithBounds(layoutResult, arg1, arg2);
                    this.font.style = previousFontStyle;
                    return returnValue;
                }
            }
        }
        else {
            let page = new PdfPage();
            page = arg1.page;
            return this.draw(page, arg2);
        }
    }
    /* tslint:enable */
    //Private methods
    /**
     * Helper method `Draw` a Multiple Line Text Web Link on the Graphics with the specified location.
     * @private
     */
    drawMultipleLineWithPoint(result, page, location) {
        let layoutResult;
        for (let i = 0; i < result.layoutLines.length; i++) {
            let size = this.font.measureString(result.lines[i].text);
            let bounds = new RectangleF(location, size);
            if (i !== 0) {
                bounds.x = 0;
            }
            this.text = result.lines[i].text;
            if (bounds.y + size.height > page.graphics.clientSize.height) {
                if (i !== 0) {
                    page = page.graphics.getNextPage();
                    bounds = new RectangleF(0, 0, page.graphics.clientSize.width, size.height);
                    location.y = 0;
                }
                else {
                    break;
                }
            }
            bounds = this.calculateBounds(bounds, size.width, page.graphics.clientSize.width, bounds.x);
            this.uriAnnotation = new PdfUriAnnotation(bounds, this.url);
            this.uriAnnotation.dictionary.items.setValue('Border', this.defaultBorder);
            page.annotations.add(this.uriAnnotation);
            if (i !== 0) {
                layoutResult = this.drawText(page, new PointF(0, bounds.y));
            }
            else {
                layoutResult = this.drawText(page, bounds.x, bounds.y);
            }
            location.y += size.height;
        }
        return layoutResult;
    }
    /**
     * Helper method `Draw` a Multiple Line Text Web Link on the Graphics with the specified bounds.
     * @private
     */
    drawMultipleLineWithBounds(result, page, bounds) {
        let layoutResult;
        for (let i = 0; i < result.layoutLines.length; i++) {
            let size = this.font.measureString(result.lines[i].text);
            let internalBounds = new RectangleF(new PointF(bounds.x, bounds.y), size);
            internalBounds = this.calculateBounds(internalBounds, size.width, bounds.width, bounds.x);
            this.text = result.lines[i].text;
            if (bounds.y + size.height > page.graphics.clientSize.height) {
                if (i !== 0) {
                    page = page.graphics.getNextPage();
                    bounds = new RectangleF(bounds.x, 0, bounds.width, size.height);
                    internalBounds.y = 0;
                }
                else {
                    break;
                }
            }
            this.uriAnnotation = new PdfUriAnnotation(internalBounds, this.url);
            this.uriAnnotation.dictionary.items.setValue('Border', this.defaultBorder);
            page.annotations.add(this.uriAnnotation);
            layoutResult = this.drawText(page, bounds);
            bounds.y += size.height;
        }
        return layoutResult;
    }
    /* tslint:disable */
    calculateBounds(currentBounds, lineWidth, maximumWidth, startPosition) {
        if (this.stringFormat != null && typeof this.stringFormat !== 'undefined' && this.stringFormat.alignment === PdfTextAlignment.Center) {
            currentBounds.x = startPosition + (maximumWidth - lineWidth) / 2;
            currentBounds.width = lineWidth;
        }
        else if (this.stringFormat != null && typeof this.stringFormat !== 'undefined' && this.stringFormat.alignment === PdfTextAlignment.Right) {
            currentBounds.x = startPosition + (maximumWidth - lineWidth);
            currentBounds.width = lineWidth;
        }
        else if (this.stringFormat != null && typeof this.stringFormat !== 'undefined' && this.stringFormat.alignment === PdfTextAlignment.Justify) {
            currentBounds.x = startPosition;
            currentBounds.width = maximumWidth;
        }
        else {
            currentBounds.width = startPosition;
            currentBounds.width = lineWidth;
        }
        return currentBounds;
    }
}

/**
 * PdfNumbersConvertor.ts class for EJ2-PDF
 * @private
 */
/**
 * `PdfNumbersConvertor` for convert page number into numbers, roman letters, etc.,
 * @private
 */
class PdfNumbersConvertor {
    // Static methods
    /**
     * Convert string value from page number with correct format.
     * @private
     */
    static convert(intArabic, numberStyle) {
        let result = '';
        switch (numberStyle) {
            case PdfNumberStyle.None:
                result = '';
                break;
            case PdfNumberStyle.Numeric:
                result = intArabic.toString();
                break;
            case PdfNumberStyle.LowerLatin:
                result = this.arabicToLetter(intArabic).toLowerCase();
                break;
            case PdfNumberStyle.LowerRoman:
                result = this.arabicToRoman(intArabic).toLowerCase();
                break;
            case PdfNumberStyle.UpperLatin:
                result = this.arabicToLetter(intArabic);
                break;
            case PdfNumberStyle.UpperRoman:
                result = this.arabicToRoman(intArabic);
                break;
        }
        return result;
    }
    /**
     * Converts `arabic to roman` letters.
     * @private
     */
    static arabicToRoman(intArabic) {
        let retval = '';
        retval += this.generateNumber(intArabic, 1000, 'M');
        retval += this.generateNumber(intArabic, 900, 'CM');
        retval += this.generateNumber(intArabic, 500, 'D');
        retval += this.generateNumber(intArabic, 400, 'CD');
        retval += this.generateNumber(intArabic, 100, 'C');
        retval += this.generateNumber(intArabic, 90, 'XC');
        retval += this.generateNumber(intArabic, 50, 'L');
        retval += this.generateNumber(intArabic, 40, 'XL');
        retval += this.generateNumber(intArabic, 10, 'X');
        retval += this.generateNumber(intArabic, 9, 'IX');
        retval += this.generateNumber(intArabic, 5, 'V');
        retval += this.generateNumber(intArabic, 4, 'IV');
        retval += this.generateNumber(intArabic, 1, 'I');
        return retval.toString();
    }
    /**
     * Converts `arabic to normal letters`.
     * @private
     */
    static arabicToLetter(arabic) {
        let stack = this.convertToLetter(arabic);
        let result = '';
        while (stack.length > 0) {
            let num = stack.pop();
            result = this.appendChar(result, num);
        }
        return result.toString();
    }
    /**
     * Generate a string value of an input number.
     * @private
     */
    static generateNumber(value, magnitude, letter) {
        let numberstring = '';
        while (value >= magnitude) {
            value -= magnitude;
            numberstring += letter;
        }
        return numberstring.toString();
    }
    /**
     * Convert a input number into letters.
     * @private
     */
    static convertToLetter(arabic) {
        if (arabic <= 0) {
            throw Error('ArgumentOutOfRangeException-arabic, Value can not be less 0');
        }
        let stack = [];
        while (arabic > this.letterLimit) {
            let remainder = arabic % this.letterLimit;
            if (remainder === 0.0) {
                arabic = arabic / this.letterLimit - 1;
                remainder = this.letterLimit;
            }
            else {
                arabic /= this.letterLimit;
            }
            stack.push(remainder);
        }
        stack.push(arabic);
        return stack;
    }
    /**
     * Convert number to actual string value.
     * @private
     */
    static appendChar(builder, value) {
        let letter = String.fromCharCode(PdfNumbersConvertor.acsiiStartIndex + value);
        builder += letter;
        return builder;
    }
}
// Fields
/**
 * numbers of letters in english [readonly].
 * @default = 26.0
 * @private
 */
PdfNumbersConvertor.letterLimit = 26.0;
/**
 * Resturns `acsii start index` value.
 * @default 64
 * @private
 */
PdfNumbersConvertor.acsiiStartIndex = (65 - 1);

/**
 * Represent class to store information about `template and value pairs`.
 * @private
 */
class PdfTemplateValuePair {
    constructor(template, value) {
        // Fields
        /**
         * Internal variable to store template.
         * @default null
         * @private
         */
        this.pdfTemplate = null;
        /**
         * Intenal variable to store value.
         * @private
         */
        this.content = '';
        if (typeof template === 'undefined') {
            //
        }
        else {
            this.template = template;
            this.value = value;
        }
    }
    // Properties
    /**
     * Gets or sets the template.
     * @private
     */
    get template() {
        return this.pdfTemplate;
    }
    set template(value) {
        this.pdfTemplate = value;
    }
    /**
     * Gets or sets the value.
     * @private
     */
    get value() {
        return this.content;
    }
    set value(value) {
        this.content = value;
    }
}

/**
 * PdfAutomaticField.ts class for EJ2-PDF
 */
/**
 * Represents automatic field which has the same value within the `PdfGraphics`.
 */
class PdfMultipleValueField extends PdfAutomaticField {
    constructor() {
        super();
        //  Fields
        /**
         * Stores the instance of dictionary values of `graphics and template value pair`.
         * @private
         */
        this.list = new TemporaryDictionary();
    }
    // Implementation
    /* tslint:disable */
    performDraw(graphics, location, scalingX, scalingY) {
        super.performDrawHelper(graphics, location, scalingX, scalingY);
        let value = this.getValue(graphics);
        let template = new PdfTemplate(this.getSize());
        this.list.setValue(graphics, new PdfTemplateValuePair(template, value));
        let size = this.getSize();
        template.graphics.drawString(value, this.getFont(), this.pen, this.getBrush(), 0, 0, size.width, size.height, this.stringFormat);
        let drawLocation = new PointF(location.x + this.location.x, location.y + this.location.y);
        graphics.drawPdfTemplate(template, drawLocation, new SizeF(template.width * scalingX, template.height * scalingY));
    }
}

/**
 * Represents PDF document `page number field`.
 * @public
 */
class PdfPageNumberField extends PdfMultipleValueField {
    constructor(font, arg2) {
        super();
        // Fields
        /**
         * Stores the number style of the page number field.
         * @private
         */
        this.internalNumberStyle = PdfNumberStyle.Numeric;
        if (typeof arg2 === 'undefined') {
            this.font = font;
        }
        else if (arg2 instanceof PdfBrush) {
            this.font = font;
            this.brush = arg2;
        }
        else {
            this.font = font;
            this.bounds = arg2;
        }
    }
    // Properties
    /**
     * Gets and sets the number style of the page number field.
     * @private
     */
    get numberStyle() {
        return this.internalNumberStyle;
    }
    set numberStyle(value) {
        this.internalNumberStyle = value;
    }
    /**
     * Return the `string` value of page number field.
     * @public
     */
    getValue(graphics) {
        let result = null;
        let page = this.getPageFromGraphics(graphics);
        result = this.internalGetValue(page);
        return result;
    }
    /**
     * Internal method to `get actual value of page number`.
     * @private
     */
    internalGetValue(page) {
        let document = page.document;
        let pageIndex = document.pages.indexOf(page) + 1;
        return PdfNumbersConvertor.convert(pageIndex, this.numberStyle);
    }
}

/**
 * PdfCompositeField.ts class for EJ2-PDF
 */
/**
 * Represents class which can concatenate multiple automatic fields into single string.
 */
class PdfCompositeField extends PdfMultipleValueField {
    // Constructor
    /**
     * Initialize a new instance of `PdfCompositeField` class.
     * @param font Font of the field.
     * @param brush Color of the field.
     * @param text Content of the field.
     * @param list List of the automatic fields in specific order based on the text content.
     */
    constructor(font, brush, text, ...list) {
        super();
        // Fields
        /**
         * Stores the array of automatic fields.
         * @private
         */
        this.internalAutomaticFields = null;
        /**
         * Stores the text value of the field.
         * @private
         */
        this.internalText = '';
        this.font = font;
        this.brush = brush;
        this.text = text;
        this.automaticFields = list;
    }
    // Properties
    /**
     * Gets and sets the content of the field.
     * @public
     */
    get text() {
        return this.internalText;
    }
    set text(value) {
        this.internalText = value;
    }
    /**
     * Gets and sets the list of the field to drawn.
     * @public
     */
    get automaticFields() {
        return this.internalAutomaticFields;
    }
    set automaticFields(value) {
        this.internalAutomaticFields = value;
    }
    // Implementation
    /**
     * Return the actual value generated from the list of automatic fields.
     * @public
     */
    getValue(graphics) {
        let text = this.text.toString();
        if (typeof this.automaticFields !== 'undefined' && this.automaticFields != null && this.automaticFields.length > 0) {
            for (let i = 0; i < this.automaticFields.length; i++) {
                let automaticField = this.automaticFields[i];
                text = text.replace('{' + i + '}', automaticField.getValue(graphics));
            }
        }
        return text;
    }
}

/**
 * PdfSingleValueField.ts class for EJ2-PDF
 */
/**
 * Represents automatic field which has the same value in the whole document.
 */
class PdfSingleValueField extends PdfAutomaticField {
    // Constructors
    constructor() {
        super();
        // Fields
        /* tslint:disable */
        this.list = new TemporaryDictionary();
        /* tslint:enable */
        this.painterGraphics = [];
    }
    performDraw(graphics, location, scalingX, scalingY) {
        super.performDrawHelper(graphics, location, scalingX, scalingY);
        let page = this.getPageFromGraphics(graphics);
        let document = page.document;
        let textValue = this.getValue(graphics);
        /* tslint:disable */
        if (this.list.containsKey(document)) {
            let pair = this.list.getValue(document);
            let drawLocation = new PointF(location.x + this.location.x, location.y + this.location.y);
            graphics.drawPdfTemplate(pair.template, drawLocation, new SizeF(pair.template.width * scalingX, pair.template.height * scalingY));
            this.painterGraphics.push(graphics);
        }
        else {
            let size = this.getSize();
            let template = new PdfTemplate(size);
            this.list.setValue(document, new PdfTemplateValuePair(template, textValue));
            template.graphics.drawString(textValue, this.getFont(), this.pen, this.getBrush(), 0, 0, size.width, size.height, this.stringFormat);
            let drawLocation = new PointF(location.x + this.location.x, location.y + this.location.y);
            graphics.drawPdfTemplate(template, drawLocation, new SizeF(template.width * scalingX, template.height * scalingY));
            this.painterGraphics.push(graphics);
        }
        /* tslint:enable */
    }
}

/**
 * PdfPageCountField.ts class for EJ2-PDF
 */
/**
 * Represents total PDF document page count automatic field.
 */
class PdfPageCountField extends PdfSingleValueField {
    constructor(font, arg2) {
        super();
        // Fields
        /**
         * Stores the number style of the field.
         * @private
         */
        this.internalNumberStyle = PdfNumberStyle.Numeric;
        if (typeof arg2 === 'undefined') {
            this.font = font;
        }
        else if (arg2 instanceof PdfBrush) {
            this.font = font;
            this.brush = arg2;
        }
        else {
            this.font = font;
            this.bounds = arg2;
        }
    }
    // Properties
    /**
     * Gets and sets the number style of the field.
     * @public
     */
    get numberStyle() {
        return this.internalNumberStyle;
    }
    set numberStyle(value) {
        this.internalNumberStyle = value;
    }
    // Implementation
    /**
     * Return the actual value of the content to drawn.
     * @public
     */
    getValue(graphics) {
        let result = null;
        let page = this.getPageFromGraphics(graphics);
        let document = page.section.parent.document;
        let count = document.pages.count;
        result = PdfNumbersConvertor.convert(count, this.numberStyle);
        return result;
    }
}

/**
 * public Enum for `PdfDestinationMode`.
 * @private
 */
var PdfDestinationMode;
(function (PdfDestinationMode) {
    /**
     * Specifies the type of `Location`.
     * @private
     */
    PdfDestinationMode[PdfDestinationMode["Location"] = 0] = "Location";
    /**
     * Specifies the type of `FitToPage`.
     * @private
     */
    PdfDestinationMode[PdfDestinationMode["FitToPage"] = 1] = "FitToPage";
    /**
     * Specifies the type of `FitR`.
     * @private
     */
    PdfDestinationMode[PdfDestinationMode["FitR"] = 2] = "FitR";
})(PdfDestinationMode || (PdfDestinationMode = {}));

/**
 * `PdfDestination` class represents an anchor in the document
 * where bookmarks or annotations can direct when clicked.
 */
class PdfDestination {
    constructor(arg1, arg2) {
        // Fields
        /**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @private
         */
        this.dictionaryProperties = new DictionaryProperties();
        /**
         * Type of the `destination`.
         * @private
         */
        this.destinationMode = PdfDestinationMode.Location;
        /**
         * `Zoom` factor.
         * @private
         * @default 0
         */
        this.zoomFactor = 0;
        /**
         * `Location` of the destination.
         * @default new PointF() with 0 ,0 as co-ordinates
         * @private
         */
        this.destinationLocation = new PointF(0, 0);
        /**
         * `Bounds` of the destination as RectangleF.
         * @default RectangleF.Empty
         * @private
         */
        this.bounds = new RectangleF();
        /**
         * Pdf primitive representing `this` object.
         * @private
         */
        this.array = new PdfArray();
        if (typeof arg2 === 'undefined') {
            let angle = PdfPageRotateAngle.RotateAngle0;
            this.destinationLocation = new PointF(0, this.destinationLocation.y);
            this.pdfPage = arg1;
        }
        else if (arg2 instanceof PointF) {
            this.constructor(arg1);
            this.destinationLocation = arg2;
        }
        else {
            this.constructor(arg1);
            this.bounds = arg2;
        }
    }
    // Properties
    /**
     * Gets and Sets the `zoom` factor.
     * @private
     */
    get zoom() {
        return this.zoomFactor;
    }
    set zoom(value) {
        this.zoomFactor = value;
        this.initializePrimitive();
    }
    /**
     * Gets and Sets the `page` object.
     * @private
     */
    get page() {
        return this.pdfPage;
    }
    set page(value) {
        this.pdfPage = value;
        this.initializePrimitive();
    }
    /**
     * Gets and Sets the destination `mode`.
     * @private
     */
    get mode() {
        return this.destinationMode;
    }
    set mode(value) {
        this.destinationMode = value;
        this.initializePrimitive();
    }
    /**
     * Gets and Sets the `location`.
     * @private
     */
    get location() {
        return this.destinationLocation;
    }
    set location(value) {
        this.destinationLocation = value;
        this.initializePrimitive();
    }
    /**
     * `Translates` co-ordinates to PDF co-ordinate system (lower/left).
     * @private
     */
    pointToNativePdf(page, point) {
        let section = page.section;
        return section.pointToNativePdf(page, point);
    }
    /**
     * `In fills` array by correct values.
     * @private
     */
    initializePrimitive() {
        this.array.clear();
        this.array.add(new PdfReferenceHolder(this.pdfPage));
        switch (this.destinationMode) {
            case PdfDestinationMode.Location:
                let simplePage = this.pdfPage;
                let point = new PointF();
                point = this.pointToNativePdf(simplePage, this.destinationLocation);
                this.array.add(new PdfName(this.dictionaryProperties.xyz));
                this.array.add(new PdfNumber(point.x));
                this.array.add(new PdfNumber(point.y));
                this.array.add(new PdfNumber(this.zoomFactor));
                break;
            case PdfDestinationMode.FitToPage:
                this.array.add(new PdfName(this.dictionaryProperties.fit));
                break;
        }
    }
    /**
     * Gets the `element` representing this object.
     * @private
     */
    get element() {
        this.initializePrimitive();
        return this.array;
    }
}

/**
 * PdfPageTemplateElement.ts class for EJ2-Pdf
 */
/**
 * Describes a `page template` object that can be used as header/footer, watermark or stamp.
 */
class PdfPageTemplateElement {
    // Properties
    /**
     * Gets or sets the `dock style` of the page template element.
     * @private
     */
    get dock() {
        return this.dockStyle;
    }
    set dock(value) {
        // if (this.dockStyle !== value && this.Type === TemplateType.None) {
        this.dockStyle = value;
        // Reset alignment.
        this.resetAlignment();
        // }
    }
    /**
     * Gets or sets `alignment` of the page template element.
     * @private
     */
    get alignment() {
        return this.alignmentStyle;
    }
    set alignment(value) {
        // if (this.alignmentStyle !== value) {
        this.setAlignment(value);
        // }
    }
    /**
     * Indicates whether the page template is located `in front of the page layers or behind of it`.
     * @private
     */
    get foreground() {
        return this.isForeground;
    }
    set foreground(value) {
        // if (this.foreground !== value) {
        this.isForeground = value;
        // }
    }
    /**
     * Indicates whether the page template is located `behind of the page layers or in front of it`.
     * @private
     */
    get background() {
        return !this.isForeground;
    }
    set background(value) {
        this.isForeground = !value;
    }
    /**
     * Gets or sets `location` of the page template element.
     * @private
     */
    get location() {
        return this.currentLocation;
    }
    set location(value) {
        if (this.type === TemplateType.None) {
            this.currentLocation = value;
        }
        else {
            //
        }
    }
    /**
     * Gets or sets `X` co-ordinate of the template element on the page.
     * @private
     */
    get x() {
        let value = (typeof this.currentLocation !== 'undefined') ? this.currentLocation.x : 0;
        return value;
    }
    set x(value) {
        if (this.type === TemplateType.None) {
            this.currentLocation.x = value;
        }
        else {
            //
        }
    }
    /**
     * Gets or sets `Y` co-ordinate of the template element on the page.
     * @private
     */
    get y() {
        let value = (typeof this.currentLocation !== 'undefined') ? this.currentLocation.y : 0;
        return value;
    }
    set y(value) {
        if (this.type === TemplateType.None) {
            this.currentLocation.y = value;
        }
        else {
            //
        }
    }
    /**
     * Gets or sets `size` of the page template element.
     * @private
     */
    get size() {
        return this.template.size;
    }
    set size(value) {
        if (this.type === TemplateType.None) {
            this.template.reset(value);
        }
    }
    /**
     * Gets or sets `width` of the page template element.
     * @private
     */
    get width() {
        return this.template.width;
    }
    set width(value) {
        if (this.template.width !== value && this.type === TemplateType.None) {
            let size = this.template.size;
            size.width = value;
            this.template.reset(size);
        }
    }
    /**
     * Gets or sets `height` of the page template element.
     * @private
     */
    get height() {
        return this.template.height;
    }
    set height(value) {
        if (this.template.height !== value && this.type === TemplateType.None) {
            let size = this.template.size;
            size.height = value;
            this.template.reset(size);
        }
    }
    /**
     * Gets `graphics` context of the page template element.
     * @private
     */
    get graphics() {
        return this.template.graphics;
    }
    /**
     * Gets Pdf `template` object.
     * @private
     */
    get template() {
        // if (typeof this.pdfTemplate === 'undefined' || this.pdfTemplate == null) {
        //     this.pdfTemplate = new PdfTemplate(this.size);
        // }
        return this.pdfTemplate;
    }
    /**
     * Gets or sets `type` of the usage of this page template.
     * @private
     */
    get type() {
        return this.templateType;
    }
    set type(value) {
        this.updateDocking(value);
        this.templateType = value;
    }
    /**
     * Gets or sets `bounds` of the page template.
     * @public
     */
    get bounds() {
        return new RectangleF(new PointF(this.x, this.y), this.size);
    }
    set bounds(value) {
        if (this.type === TemplateType.None) {
            this.location = new PointF(value.x, value.y);
            this.size = new SizeF(value.width, value.height);
        }
    }
    /* tslint:disable */
    constructor(arg1, arg2, arg3, arg4, arg5) {
        if (arg1 instanceof RectangleF && typeof arg2 === 'undefined') {
            this.constructor(arg1.x, arg1.y, arg1.width, arg1.height);
        }
        else if (arg1 instanceof RectangleF && arg2 instanceof PdfPage && typeof arg3 === 'undefined') {
            this.constructor(arg1.x, arg1.y, arg1.width, arg1.height, arg2);
        }
        else if (arg1 instanceof PointF && arg2 instanceof SizeF && typeof arg3 === 'undefined') {
            this.constructor(arg1.x, arg1.y, arg2.width, arg2.height);
        }
        else if (arg1 instanceof PointF && arg2 instanceof SizeF && arg3 instanceof PdfPage && typeof arg4 === 'undefined') {
            this.constructor(arg1.x, arg1.y, arg2.width, arg2.height, arg3);
        }
        else if (arg1 instanceof SizeF && typeof arg2 === 'undefined') {
            this.constructor(arg1.width, arg1.height);
        }
        else if (typeof arg1 === 'number' && typeof arg2 === 'number' && typeof arg3 === 'undefined') {
            this.constructor(0, 0, arg1, arg2);
        }
        else if (typeof arg1 === 'number' && typeof arg2 === 'number' && arg3 instanceof PdfPage && typeof arg4 === 'undefined') {
            this.constructor(0, 0, arg1, arg2, arg3);
        }
        else if (typeof arg1 === 'number' && typeof arg2 === 'number' && typeof arg3 === 'number' && typeof arg4 === 'number' && typeof arg5 === 'undefined') {
            this.x = arg1;
            this.y = arg2;
            this.pdfTemplate = new PdfTemplate(arg3, arg4);
        }
        else {
            this.x = arg1;
            this.y = arg2;
            this.pdfTemplate = new PdfTemplate(arg3, arg4);
            // this.graphics.colorSpace = this.page.document.colorSpace;
        }
        /* tslint:enable */
    }
    /**
     * `Updates Dock` property if template is used as header/footer.
     * @private
     */
    updateDocking(type) {
        if (type !== TemplateType.None) {
            switch (type) {
                case TemplateType.Top:
                    this.dock = PdfDockStyle.Top;
                    break;
                case TemplateType.Bottom:
                    this.dock = PdfDockStyle.Bottom;
                    break;
                case TemplateType.Left:
                    this.dock = PdfDockStyle.Left;
                    break;
                case TemplateType.Right:
                    this.dock = PdfDockStyle.Right;
                    break;
            }
            this.resetAlignment();
        }
    }
    /**
     * `Resets alignment` of the template.
     * @private
     */
    resetAlignment() {
        this.alignment = PdfAlignmentStyle.None;
    }
    /**
     * `Sets alignment` of the template.
     * @private
     */
    setAlignment(alignment) {
        if (this.dock === PdfDockStyle.None) {
            this.alignmentStyle = alignment;
        }
        else {
            // Template is docked and alignment has been changed.
            let canBeSet = false;
            switch (this.dock) {
                case PdfDockStyle.Left:
                    canBeSet = (alignment === PdfAlignmentStyle.TopLeft || alignment === PdfAlignmentStyle.MiddleLeft ||
                        alignment === PdfAlignmentStyle.BottomLeft || alignment === PdfAlignmentStyle.None);
                    break;
                case PdfDockStyle.Top:
                    canBeSet = (alignment === PdfAlignmentStyle.TopLeft || alignment === PdfAlignmentStyle.TopCenter ||
                        alignment === PdfAlignmentStyle.TopRight || alignment === PdfAlignmentStyle.None);
                    break;
                case PdfDockStyle.Right:
                    canBeSet = (alignment === PdfAlignmentStyle.TopRight || alignment === PdfAlignmentStyle.MiddleRight ||
                        alignment === PdfAlignmentStyle.BottomRight || alignment === PdfAlignmentStyle.None);
                    break;
                case PdfDockStyle.Bottom:
                    canBeSet = (alignment === PdfAlignmentStyle.BottomLeft || alignment === PdfAlignmentStyle.BottomCenter
                        || alignment === PdfAlignmentStyle.BottomRight || alignment === PdfAlignmentStyle.None);
                    break;
                case PdfDockStyle.Fill:
                    canBeSet = (alignment === PdfAlignmentStyle.MiddleCenter || alignment === PdfAlignmentStyle.None);
                    break;
            }
            if (canBeSet) {
                this.alignmentStyle = alignment;
            }
        }
    }
    /**
     * Draws the template.
     * @private
     */
    draw(layer, document) {
        let page = layer.page;
        let bounds = this.calculateBounds(page, document);
        if (bounds.x === -0) {
            bounds.x = 0;
        }
        layer.graphics.drawPdfTemplate(this.template, new PointF(bounds.x, bounds.y), new SizeF(bounds.width, bounds.height));
    }
    /**
     * Calculates bounds of the page template.
     * @private
     */
    calculateBounds(page, document) {
        let result = this.bounds;
        if (this.alignmentStyle !== PdfAlignmentStyle.None) {
            result = this.getAlignmentBounds(page, document);
        }
        else if (this.dockStyle !== PdfDockStyle.None) {
            result = this.getDockBounds(page, document);
        }
        return result;
    }
    /**
     * Calculates bounds according to the alignment.
     * @private
     */
    getAlignmentBounds(page, document) {
        let result = this.bounds;
        if (this.type === TemplateType.None) {
            result = this.getSimpleAlignmentBounds(page, document);
        }
        else {
            result = this.getTemplateAlignmentBounds(page, document);
        }
        return result;
    }
    /**
     * Calculates bounds according to the alignment.
     * @private
     */
    getSimpleAlignmentBounds(page, document) {
        let bounds = this.bounds;
        let pdfSection = page.section;
        let actualBounds = pdfSection.getActualBounds(document, page, false);
        let x = this.x;
        let y = this.y;
        switch (this.alignmentStyle) {
            case PdfAlignmentStyle.TopLeft:
                x = 0;
                y = 0;
                break;
            case PdfAlignmentStyle.TopCenter:
                x = (actualBounds.width - this.width) / 2;
                y = 0;
                break;
            case PdfAlignmentStyle.TopRight:
                x = actualBounds.width - this.width;
                y = 0;
                break;
            case PdfAlignmentStyle.MiddleLeft:
                x = 0;
                y = (actualBounds.height - this.height) / 2;
                break;
            case PdfAlignmentStyle.MiddleCenter:
                x = (actualBounds.width - this.width) / 2;
                y = (actualBounds.height - this.height) / 2;
                break;
            case PdfAlignmentStyle.MiddleRight:
                x = actualBounds.width - this.width;
                y = (actualBounds.height - this.height) / 2;
                break;
            case PdfAlignmentStyle.BottomLeft:
                x = 0;
                y = actualBounds.height - this.height;
                break;
            case PdfAlignmentStyle.BottomCenter:
                x = (actualBounds.width - this.width) / 2;
                y = actualBounds.height - this.height;
                break;
            case PdfAlignmentStyle.BottomRight:
                x = actualBounds.width - this.width;
                y = actualBounds.height - this.height;
                break;
        }
        bounds.x = x;
        bounds.y = y;
        return bounds;
    }
    /**
     * Calculates bounds according to the alignment.
     * @private
     */
    getTemplateAlignmentBounds(page, document) {
        let result = this.bounds;
        let section = page.section;
        let actualBounds = section.getActualBounds(document, page, false);
        let x = this.x;
        let y = this.y;
        switch (this.alignmentStyle) {
            case PdfAlignmentStyle.TopLeft:
                if (this.type === TemplateType.Left) {
                    x = -actualBounds.x;
                    y = 0;
                }
                else if (this.type === TemplateType.Top) {
                    x = -actualBounds.x;
                    y = -actualBounds.y;
                }
                break;
            case PdfAlignmentStyle.TopCenter:
                x = (actualBounds.width - this.width) / 2;
                y = -actualBounds.y;
                break;
            case PdfAlignmentStyle.TopRight:
                if (this.type === TemplateType.Right) {
                    x = actualBounds.width + section.getRightIndentWidth(document, page, false) - this.width;
                    y = 0;
                }
                else if (this.type === TemplateType.Top) {
                    x = actualBounds.width + section.getRightIndentWidth(document, page, false) - this.width;
                    y = -actualBounds.y;
                }
                break;
            case PdfAlignmentStyle.MiddleLeft:
                x = -actualBounds.x;
                y = (actualBounds.height - this.height) / 2;
                break;
            case PdfAlignmentStyle.MiddleCenter:
                x = (actualBounds.width - this.width) / 2;
                y = (actualBounds.height - this.height) / 2;
                break;
            case PdfAlignmentStyle.MiddleRight:
                x = actualBounds.width + section.getRightIndentWidth(document, page, false) - this.width;
                y = (actualBounds.height - this.height) / 2;
                break;
            case PdfAlignmentStyle.BottomLeft:
                if (this.type === TemplateType.Left) {
                    x = -actualBounds.x;
                    y = actualBounds.height - this.height;
                }
                else if (this.type === TemplateType.Bottom) {
                    x = -actualBounds.x;
                    y = actualBounds.height + section.getBottomIndentHeight(document, page, false) - this.height;
                }
                break;
            case PdfAlignmentStyle.BottomCenter:
                x = (actualBounds.width - this.width) / 2;
                y = actualBounds.height + section.getBottomIndentHeight(document, page, false) - this.height;
                break;
            case PdfAlignmentStyle.BottomRight:
                if (this.type === TemplateType.Right) {
                    x = actualBounds.width + section.getRightIndentWidth(document, page, false) - this.width;
                    y = actualBounds.height - this.height;
                }
                else if (this.type === TemplateType.Bottom) {
                    x = actualBounds.width + section.getRightIndentWidth(document, page, false) - this.width;
                    y = actualBounds.height + section.getBottomIndentHeight(document, page, false) - this.height;
                }
                break;
        }
        result.x = x;
        result.y = y;
        return result;
    }
    /**
     * Calculates bounds according to the docking.
     * @private
     */
    getDockBounds(page, document) {
        let result = this.bounds;
        if (this.type === TemplateType.None) {
            result = this.getSimpleDockBounds(page, document);
        }
        else {
            result = this.getTemplateDockBounds(page, document);
        }
        return result;
    }
    /**
     * Calculates bounds according to the docking.
     * @private
     */
    getSimpleDockBounds(page, document) {
        let result = this.bounds;
        let section = page.section;
        let actualBounds = section.getActualBounds(document, page, false);
        let x = this.x;
        let y = this.y;
        let width = this.width;
        let height = this.height;
        switch (this.dockStyle) {
            case PdfDockStyle.Left:
                x = 0;
                y = 0;
                width = this.width;
                height = actualBounds.height;
                break;
            case PdfDockStyle.Top:
                x = 0;
                y = 0;
                width = actualBounds.width;
                height = this.height;
                break;
            case PdfDockStyle.Right:
                x = actualBounds.width - this.width;
                y = 0;
                width = this.width;
                height = actualBounds.height;
                break;
            case PdfDockStyle.Bottom:
                x = 0;
                y = actualBounds.height - this.height;
                width = actualBounds.width;
                height = this.height;
                break;
            case PdfDockStyle.Fill:
                x = 0;
                x = 0;
                width = actualBounds.width;
                height = actualBounds.height;
                break;
        }
        result = new RectangleF(x, y, width, height);
        return result;
    }
    /**
     * Calculates template bounds basing on docking if template is a page template.
     * @private
     */
    getTemplateDockBounds(page, document) {
        let result = this.bounds;
        let section = page.section;
        let actualBounds = section.getActualBounds(document, page, false);
        let actualSize = section.pageSettings.getActualSize();
        let x = this.x;
        let y = this.y;
        let width = this.width;
        let height = this.height;
        switch (this.dockStyle) {
            case PdfDockStyle.Left:
                x = -actualBounds.x;
                y = 0;
                width = this.width;
                height = actualBounds.height;
                break;
            case PdfDockStyle.Top:
                x = -actualBounds.x;
                y = -actualBounds.y;
                width = actualSize.width;
                height = this.height;
                if (actualBounds.height < 0) {
                    y = -actualBounds.y + actualSize.height;
                }
                break;
            case PdfDockStyle.Right:
                x = actualBounds.width + section.getRightIndentWidth(document, page, false) - this.width;
                y = 0;
                width = this.width;
                height = actualBounds.height;
                break;
            case PdfDockStyle.Bottom:
                x = -actualBounds.x;
                y = actualBounds.height + section.getBottomIndentHeight(document, page, false) - this.height;
                width = actualSize.width;
                height = this.height;
                if (actualBounds.height < 0) {
                    y -= actualSize.height;
                }
                break;
            case PdfDockStyle.Fill:
                x = 0;
                x = 0;
                width = actualBounds.width;
                height = actualBounds.height;
                break;
        }
        result = new RectangleF(x, y, width, height);
        return result;
    }
}

/**
 * PdfBorders.ts class for EJ2-PDF
 */
/**
 * `PdfBorders` class used represents the cell border of the PDF grid.
 */
class PdfBorders {
    // Properties
    /**
     * Gets or sets the `Left`.
     * @private
     */
    get left() {
        return this.leftPen;
    }
    set left(value) {
        this.leftPen = value;
    }
    /**
     * Gets or sets the `Right`.
     * @private
     */
    get right() {
        return this.rightPen;
    }
    set right(value) {
        this.rightPen = value;
    }
    /**
     * Gets or sets the `Top`.
     * @private
     */
    get top() {
        return this.topPen;
    }
    set top(value) {
        this.topPen = value;
    }
    /**
     * Gets or sets the `Bottom`.
     * @private
     */
    get bottom() {
        return this.bottomPen;
    }
    set bottom(value) {
        this.bottomPen = value;
    }
    /**
     * sets the `All`.
     * @private
     */
    set all(value) {
        this.leftPen = this.rightPen = this.topPen = this.bottomPen = value;
    }
    /**
     * Gets a value indicating whether this instance `is all`.
     * @private
     */
    get isAll() {
        return ((this.leftPen === this.rightPen) && (this.leftPen === this.topPen) && (this.leftPen === this.bottomPen));
    }
    /**
     * Gets the `default`.
     * @private
     */
    static get default() {
        return new PdfBorders();
    }
    // Constructor
    /**
     * Create a new instance for `PdfBorders` class.
     * @private
     */
    constructor() {
        let defaultBorderPenLeft = new PdfPen(new PdfColor(0, 0, 0));
        defaultBorderPenLeft.dashStyle = PdfDashStyle.Solid;
        let defaultBorderPenRight = new PdfPen(new PdfColor(0, 0, 0));
        defaultBorderPenRight.dashStyle = PdfDashStyle.Solid;
        let defaultBorderPenTop = new PdfPen(new PdfColor(0, 0, 0));
        defaultBorderPenTop.dashStyle = PdfDashStyle.Solid;
        let defaultBorderPenBottom = new PdfPen(new PdfColor(0, 0, 0));
        defaultBorderPenBottom.dashStyle = PdfDashStyle.Solid;
        this.leftPen = defaultBorderPenLeft;
        this.rightPen = defaultBorderPenRight;
        this.topPen = defaultBorderPenTop;
        this.bottomPen = defaultBorderPenBottom;
    }
}
class PdfPaddings {
    // Properties
    /**
     * Gets or sets the `left` value of the edge
     * @private
     */
    get left() {
        return this.leftPad;
    }
    set left(value) {
        this.leftPad = value;
    }
    /**
     * Gets or sets the `right` value of the edge.
     * @private
     */
    get right() {
        return this.rightPad;
    }
    set right(value) {
        this.rightPad = value;
    }
    /**
     * Gets or sets the `top` value of the edge
     * @private
     */
    get top() {
        return this.topPad;
    }
    set top(value) {
        this.topPad = value;
    }
    /**
     * Gets or sets the `bottom` value of the edge.
     * @private
     */
    get bottom() {
        return this.bottomPad;
    }
    set bottom(value) {
        this.bottomPad = value;
    }
    /**
     * Sets value to all sides `left,right,top and bottom`.s
     * @private
     */
    set all(value) {
        this.leftPad = this.rightPad = this.topPad = this.bottomPad = value;
    }
    constructor(left, right, top, bottom) {
        if (typeof left === 'undefined') {
            //5.76 and 0 are taken from ms-word default table margins.
            this.leftPad = this.rightPad = 5.76;
            //0.5 is set for top and bottom by default.
            this.bottom = this.topPad = 0.5;
        }
        else {
            this.leftPad = left;
            this.rightPad = right;
            this.topPad = top;
            this.bottomPad = bottom;
        }
    }
}

/**
 * public Enum for `PdfBorderOverlapStyle`.
 * @private
 */
var PdfBorderOverlapStyle;
(function (PdfBorderOverlapStyle) {
    /**
     * Specifies the type of `Overlap`.
     * @private
     */
    PdfBorderOverlapStyle[PdfBorderOverlapStyle["Overlap"] = 0] = "Overlap";
    /**
     * Specifies the type of `Inside`.
     * @private
     */
    PdfBorderOverlapStyle[PdfBorderOverlapStyle["Inside"] = 1] = "Inside";
})(PdfBorderOverlapStyle || (PdfBorderOverlapStyle = {}));

/**
 * Base class for the `grid style`,
 */
class PdfGridStyleBase {
    // Properties
    /**
     * Gets or sets the `background brush`.
     * @private
     */
    get backgroundBrush() {
        return this.gridBackgroundBrush;
    }
    set backgroundBrush(value) {
        this.gridBackgroundBrush = value;
    }
    /**
     * Gets or sets the `text brush`.
     * @private
     */
    get textBrush() {
        return this.gridTextBrush;
    }
    set textBrush(value) {
        this.gridTextBrush = value;
    }
    /**
     * Gets or sets the `text pen`.
     * @private
     */
    get textPen() {
        return this.gridTextPen;
    }
    set textPen(value) {
        this.gridTextPen = value;
    }
    /**
     * Gets or sets the `font`.
     * @private
     */
    get font() {
        return this.gridFont;
    }
    set font(value) {
        this.gridFont = value;
    }
}
/**
 * `PdfGridStyle` class provides customization of the appearance for the 'PdfGrid'.
 */
class PdfGridStyle extends PdfGridStyleBase {
    //constructor
    /**
     * Initialize a new instance for `PdfGridStyle` class.
     * @private
     */
    constructor() {
        super();
        this.gridBorderOverlapStyle = PdfBorderOverlapStyle.Overlap;
        this.bAllowHorizontalOverflow = false;
        this.gridHorizontalOverflowType = PdfHorizontalOverflowType.LastPage;
    }
    //Properties
    /**
     * Gets or sets the `cell spacing` of the 'PdfGrid'.
     * @private
     */
    get cellSpacing() {
        if (typeof this.gridCellSpacing === 'undefined') {
            this.gridCellSpacing = 0;
        }
        return this.gridCellSpacing;
    }
    set cellSpacing(value) {
        this.gridCellSpacing = value;
    }
    /**
     * Gets or sets the type of the `horizontal overflow` of the 'PdfGrid'.
     * @private
     */
    get horizontalOverflowType() {
        return this.gridHorizontalOverflowType;
    }
    set horizontalOverflowType(value) {
        this.gridHorizontalOverflowType = value;
    }
    /**
     * Gets or sets a value indicating whether to `allow horizontal overflow`.
     * @private
     */
    get allowHorizontalOverflow() {
        return this.bAllowHorizontalOverflow;
    }
    set allowHorizontalOverflow(value) {
        this.bAllowHorizontalOverflow = value;
    }
    /**
     * Gets or sets the `cell padding`.
     * @private
     */
    get cellPadding() {
        if (typeof this.gridCellPadding === 'undefined') {
            this.gridCellPadding = new PdfPaddings();
        }
        return this.gridCellPadding;
    }
    set cellPadding(value) {
        if (typeof this.gridCellPadding === 'undefined') {
            this.gridCellPadding = new PdfPaddings();
            this.gridCellPadding = value;
        }
        else {
            this.gridCellPadding = value;
        }
    }
    /**
     * Gets or sets the `border overlap style` of the 'PdfGrid'.
     * @private
     */
    get borderOverlapStyle() {
        return this.gridBorderOverlapStyle;
    }
    set borderOverlapStyle(value) {
        this.gridBorderOverlapStyle = value;
    }
}
/**
 * `PdfGridCellStyle` class provides customization of the appearance for the 'PdfGridCell'.
 */
class PdfGridCellStyle extends PdfGridStyleBase {
    /**
     * Initializes a new instance of the `PdfGridCellStyle` class.
     * @private
     */
    constructor() {
        super();
        /**
         * @hidden
         * @private
         */
        this.gridCellBorders = PdfBorders.default;
    }
    //Properties
    /**
     * Gets the `string format` of the 'PdfGridCell'.
     * @private
     */
    get stringFormat() {
        return this.format;
    }
    set stringFormat(value) {
        this.format = value;
    }
    /**
     * Gets or sets the `border` of the 'PdfGridCell'.
     * @private
     */
    get borders() {
        return this.gridCellBorders;
    }
    set borders(value) {
        this.gridCellBorders = value;
    }
    /**
     * Gets or sets the `cell padding`.
     * @private
     */
    get cellPadding() {
        return this.gridCellPadding;
    }
    set cellPadding(value) {
        if (this.gridCellPadding == null || typeof this.gridCellPadding === 'undefined') {
            this.gridCellPadding = new PdfPaddings();
        }
        this.gridCellPadding = value;
    }
}
/**
 * `PdfGridRowStyle` class provides customization of the appearance for the `PdfGridRow`.
 */
class PdfGridRowStyle {
    /**
     * Determine the value of the border is changed or not.
     * @private
     */
    // Properties
    /**
     * Gets or sets the `background brush`.
     * @private
     */
    get backgroundBrush() {
        return this.gridRowBackgroundBrush;
    }
    setBackgroundBrush(value) {
        this.gridRowBackgroundBrush = value;
        if (typeof this.parent !== 'undefined') {
            for (let i = 0; i < this.parent.cells.count; i++) {
                this.parent.cells.getCell(i).style.backgroundBrush = value;
            }
        }
    }
    /**
     * Gets or sets the `text brush`.
     * @private
     */
    get textBrush() {
        return this.gridRowTextBrush;
    }
    setTextBrush(value) {
        this.gridRowTextBrush = value;
        if (typeof this.parent !== 'undefined') {
            for (let i = 0; i < this.parent.cells.count; i++) {
                this.parent.cells.getCell(i).style.textBrush = value;
            }
        }
    }
    /**
     * Gets or sets the `text pen`.
     * @private
     */
    get textPen() {
        return this.gridRowTextPen;
    }
    setTextPen(value) {
        this.gridRowTextPen = value;
        if (typeof this.parent !== 'undefined') {
            for (let i = 0; i < this.parent.cells.count; i++) {
                this.parent.cells.getCell(i).style.textPen = value;
            }
        }
    }
    /**
     * Gets or sets the `font`.
     * @private
     */
    get font() {
        return this.gridRowFont;
    }
    setFont(value) {
        this.gridRowFont = value;
        if (typeof this.parent !== 'undefined') {
            for (let i = 0; i < this.parent.cells.count; i++) {
                this.parent.cells.getCell(i).style.font = value;
            }
        }
    }
    /**
     * Gets or sets the `border` of the current row.
     * @private
     */
    get border() {
        if (typeof this.gridRowBorder === 'undefined') {
            this.setBorder(new PdfBorders());
        }
        return this.gridRowBorder;
    }
    setBorder(value) {
        this.gridRowBorder = value;
        if (typeof this.parent !== 'undefined') {
            for (let i = 0; i < this.parent.cells.count; i++) {
                this.parent.cells.getCell(i).style.borders = value;
            }
        }
    }
    /**
     * sets the `parent row` of the current object.
     * @private
     */
    setParent(parent) {
        this.parent = parent;
    }
    // Constructor
    /**
     * Initializes a new instance of the `PdfGridRowStyle` class.
     * @private
     */
    constructor() {
        //
    }
}
/**
 * public Enum for `PdfHorizontalOverflowType`.
 * @private
 */
var PdfHorizontalOverflowType;
(function (PdfHorizontalOverflowType) {
    /**
     * Specifies the type of `NextPage`.
     * @private
     */
    PdfHorizontalOverflowType[PdfHorizontalOverflowType["NextPage"] = 0] = "NextPage";
    /**
     * Specifies the type of `LastPage`.
     * @private
     */
    PdfHorizontalOverflowType[PdfHorizontalOverflowType["LastPage"] = 1] = "LastPage";
})(PdfHorizontalOverflowType || (PdfHorizontalOverflowType = {}));

/**
 * `PdfGridCell` class represents the schema of a cell in a 'PdfGrid'.
 */
class PdfGridCell {
    constructor(row) {
        /**
         * `Width` of the cell.
         * @default 0
         * @private
         */
        this.cellWidth = 0;
        /**
         * `Height` of the cell.
         * @default 0
         * @private
         */
        this.cellHeight = 0;
        /**
         * Specifies weather the `cell is drawn`.
         * @default true
         * @private
         */
        this.finsh = true;
        /**
         * The `remaining height` of row span.
         * @default 0
         * @private
         */
        this.rowSpanRemainingHeight = 0;
        if (typeof row === 'undefined') {
            this.gridRowSpan = 1;
            this.colSpan = 1;
        }
        else {
            this.constructor();
            this.gridRow = row;
        }
    }
    //Properties
    get isCellMergeContinue() {
        return this.internalIsCellMergeContinue;
    }
    set isCellMergeContinue(value) {
        this.internalIsCellMergeContinue = value;
    }
    get isRowMergeContinue() {
        return this.internalIsRowMergeContinue;
    }
    set isRowMergeContinue(value) {
        this.internalIsRowMergeContinue = value;
    }
    get isCellMergeStart() {
        return this.internalIsCellMergeStart;
    }
    set isCellMergeStart(value) {
        this.internalIsCellMergeStart = value;
    }
    get isRowMergeStart() {
        return this.internalIsRowMergeStart;
    }
    set isRowMergeStart(value) {
        this.internalIsRowMergeStart = value;
    }
    /**
     * Gets or sets the `remaining string` after the row split between pages.
     * @private
     */
    get remainingString() {
        return this.remaining;
    }
    set remainingString(value) {
        this.remaining = value;
    }
    /**
     * Gets or sets the `string format`.
     * @private
     */
    get stringFormat() {
        if (this.format == null) {
            this.format = new PdfStringFormat();
        }
        return this.format;
    }
    set stringFormat(value) {
        this.format = value;
    }
    /**
     * Gets or sets the parent `row`.
     * @private
     */
    get row() {
        return this.gridRow;
    }
    set row(value) {
        this.gridRow = value;
    }
    /**
     * Gets or sets the `value` of the cell.
     * @private
     */
    get value() {
        return this.objectValue;
    }
    set value(value) {
        this.objectValue = value;
    }
    /**
     * Gets or sets a value that indicates the total number of rows that cell `spans` within a PdfGrid.
     * @private
     */
    get rowSpan() {
        return this.gridRowSpan;
    }
    set rowSpan(value) {
        if (value < 1) {
            throw new Error('ArgumentException : Invalid span specified, must be greater than or equal to 1');
        }
        else {
            this.gridRowSpan = value;
            this.row.rowSpanExists = true;
        }
    }
    /**
     * Gets or sets the cell `style`.
     * @private
     */
    get style() {
        if (this.cellStyle == null) {
            this.cellStyle = new PdfGridCellStyle();
        }
        return this.cellStyle;
    }
    set style(value) {
        this.cellStyle = value;
    }
    /**
     * Gets the `height` of the PdfGrid cell.[Read-Only].
     * @private
     */
    get height() {
        if (this.cellHeight === 0) {
            this.cellHeight = this.measureHeight();
        }
        return this.cellHeight;
    }
    set height(value) {
        this.cellHeight = value;
    }
    /**
     * Gets or sets a value that indicates the total number of columns that cell `spans` within a PdfGrid.
     * @private
     */
    get columnSpan() {
        return this.colSpan;
    }
    set columnSpan(value) {
        if (value < 1) {
            throw Error('Invalid span specified, must be greater than or equal to 1');
        }
        else {
            this.colSpan = value;
            this.row.columnSpanExists = true;
        }
    }
    /**
     * Gets the `width` of the PdfGrid cell.[Read-Only].
     * @private
     */
    get width() {
        if (this.cellWidth === 0 || this.row.grid.isComplete) {
            this.cellWidth = this.measureWidth();
        }
        return this.cellWidth;
    }
    set width(value) {
        this.cellWidth = value;
    }
    //Implementation
    /**
     * `Calculates the width`.
     * @private
     */
    measureWidth() {
        // .. Calculate the cell text width.
        // .....Add border widths, cell spacings and paddings to the width.
        let width = 0;
        let layouter = new PdfStringLayouter();
        if (typeof this.objectValue === 'string') {
            /* tslint:disable */
            let slr = layouter.layout(this.objectValue, this.getTextFont(), this.stringFormat, new SizeF(0, 0), false, new SizeF(0, 0));
            width += slr.actualSize.width;
            width += (this.style.borders.left.width + this.style.borders.right.width) * 2;
        }
        else if (this.objectValue instanceof PdfImage || this.objectValue instanceof PdfBitmap) {
            width += this.objectValue.width;
        }
        else if (this.objectValue instanceof PdfTextWebLink) {
            let webLink = this.objectValue;
            let result = layouter.layout(webLink.text, webLink.font, webLink.stringFormat, new SizeF(0, 0), false, new SizeF(0, 0));
            /* tslint:enable */
            width += result.actualSize.width;
            width += (this.style.borders.left.width + this.style.borders.right.width) * 2;
        }
        width += (this.row.grid.style.cellPadding.left + this.row.grid.style.cellPadding.right);
        width += this.row.grid.style.cellSpacing;
        return width;
    }
    /**
     * Draw the `cell background`.
     * @private
     */
    drawCellBackground(graphics, bounds) {
        let backgroundBrush = this.getBackgroundBrush();
        if (backgroundBrush != null) {
            graphics.drawRectangle(backgroundBrush, bounds.x, bounds.y, bounds.width, bounds.height);
        }
    }
    /**
     * `Adjusts the text layout area`.
     * @private
     */
    /* tslint:disable */
    adjustContentLayoutArea(bounds) {
        //Add Padding value to its Cell Bounds
        let returnBounds = new RectangleF(bounds.x, bounds.y, bounds.width, bounds.height);
        if (typeof this.style.cellPadding === 'undefined' || this.style.cellPadding == null) {
            returnBounds.x += this.gridRow.grid.style.cellPadding.left + this.cellStyle.borders.left.width;
            returnBounds.y += this.gridRow.grid.style.cellPadding.top + this.cellStyle.borders.top.width;
            returnBounds.width -= (this.gridRow.grid.style.cellPadding.right + this.gridRow.grid.style.cellPadding.left);
            returnBounds.width -= (this.cellStyle.borders.left.width + this.cellStyle.borders.right.width);
            returnBounds.height -= (this.gridRow.grid.style.cellPadding.bottom + this.gridRow.grid.style.cellPadding.top);
            returnBounds.height -= (this.cellStyle.borders.top.width + this.cellStyle.borders.bottom.width);
            if (this.rowSpan === 1) {
                returnBounds.width -= (this.style.borders.left.width);
            }
        }
        else {
            returnBounds.x += this.style.cellPadding.left + this.cellStyle.borders.left.width;
            returnBounds.y += this.style.cellPadding.top + this.cellStyle.borders.top.width;
            returnBounds.width -= (this.style.cellPadding.right + this.style.cellPadding.left);
            returnBounds.width -= (this.cellStyle.borders.left.width + this.cellStyle.borders.right.width);
            returnBounds.height -= (this.style.cellPadding.bottom + this.style.cellPadding.top);
            returnBounds.height -= (this.cellStyle.borders.top.width + this.cellStyle.borders.bottom.width);
            if (this.rowSpan === 1) {
                returnBounds.width -= (this.style.borders.left.width);
            }
        }
        return returnBounds;
    }
    /**
     * `Draws` the specified graphics.
     * @private
     */
    draw(graphics, bounds, cancelSubsequentSpans) {
        let result = null;
        if (this.internalIsCellMergeContinue || this.internalIsRowMergeContinue) {
            if (this.internalIsCellMergeContinue && this.row.grid.style.allowHorizontalOverflow) {
                if ((this.row.rowOverflowIndex > 0 && (this.row.cells.indexOf(this) != this.row.rowOverflowIndex + 1)) || (this.row.rowOverflowIndex == 0 && this.internalIsCellMergeContinue)) {
                    return result;
                }
            }
            else {
                return result;
            }
        }
        //Adjust bounds with Row and Column Spacing
        bounds = this.adjustOuterLayoutArea(bounds, graphics);
        let textPen = this.getTextPen();
        let textBrush = this.getTextBrush();
        if (typeof textPen === 'undefined' && typeof textBrush === 'undefined') {
            textBrush = new PdfSolidBrush(new PdfColor(0, 0, 0));
        }
        let font = this.getTextFont();
        let strFormat = this.getStringFormat();
        let innerLayoutArea = this.adjustContentLayoutArea(bounds);
        this.drawCellBackground(graphics, bounds);
        if (typeof this.objectValue === 'string' || typeof this.remaining === 'string') {
            let temp;
            temp = this.remaining === '' ? this.remaining : this.objectValue;
            graphics.drawString(temp, font, textPen, textBrush, innerLayoutArea.x, innerLayoutArea.y, innerLayoutArea.width, innerLayoutArea.height, strFormat);
            result = graphics.stringLayoutResult;
        }
        else if (this.objectValue instanceof PdfImage || this.objectValue instanceof PdfBitmap) {
            let imageBounds;
            if (this.objectValue.width <= innerLayoutArea.width) {
                imageBounds = new RectangleF(innerLayoutArea.x, innerLayoutArea.y, this.objectValue.width, innerLayoutArea.height);
            }
            else {
                imageBounds = innerLayoutArea;
            }
            graphics.drawImage(this.objectValue, imageBounds.x, imageBounds.y, imageBounds.width, imageBounds.height);
        }
        else if (this.objectValue instanceof PdfTextWebLink) {
            this.objectValue.draw(graphics.currentPage, innerLayoutArea);
        }
        if (this.style.borders != null) {
            this.drawCellBorders(graphics, bounds);
        }
        return result;
    }
    /* tslint:enable */
    /**
     * Draws the `cell border` constructed by drawing lines.
     * @private
     */
    drawCellBorders(graphics, bounds) {
        if (this.row.grid.style.borderOverlapStyle === PdfBorderOverlapStyle.Inside) {
            bounds.x += this.style.borders.left.width;
            bounds.y += this.style.borders.top.width;
            bounds.width -= this.style.borders.right.width;
            bounds.height -= this.style.borders.bottom.width;
        }
        let p1 = new PointF(bounds.x, bounds.y + bounds.height);
        let p2 = new PointF(bounds.x, bounds.y);
        let pen = this.cellStyle.borders.left;
        if (this.cellStyle.borders.left.dashStyle === PdfDashStyle.Solid) {
            pen.lineCap = PdfLineCap.Square;
        }
        // SetTransparency(ref graphics, pen);
        graphics.drawLine(pen, p1, p2);
        p1 = new PointF(bounds.x + bounds.width, bounds.y);
        p2 = new PointF(bounds.x + bounds.width, bounds.y + bounds.height);
        pen = this.cellStyle.borders.right;
        if ((bounds.x + bounds.width) > (graphics.clientSize.width - (pen.width / 2))) {
            p1 = new PointF(graphics.clientSize.width - (pen.width / 2), bounds.y);
            p2 = new PointF(graphics.clientSize.width - (pen.width / 2), bounds.y + bounds.height);
        }
        if (this.cellStyle.borders.right.dashStyle === PdfDashStyle.Solid) {
            pen.lineCap = PdfLineCap.Square;
        }
        graphics.drawLine(pen, p1, p2);
        p1 = new PointF(bounds.x, bounds.y);
        p2 = new PointF(bounds.x + bounds.width, bounds.y);
        pen = this.cellStyle.borders.top;
        if (this.cellStyle.borders.top.dashStyle === PdfDashStyle.Solid) {
            pen.lineCap = PdfLineCap.Square;
        }
        graphics.drawLine(pen, p1, p2);
        p1 = new PointF(bounds.x + bounds.width, bounds.y + bounds.height);
        p2 = new PointF(bounds.x, bounds.y + bounds.height);
        pen = this.cellStyle.borders.bottom;
        // if ((bounds.y + bounds.height) > (graphics.clientSize.height - (pen.width / 2))) {
        //     p1 = new PointF((bounds.x + bounds.width), (graphics.clientSize.height - (pen.width / 2)));
        //     p2 = new PointF(bounds.x, (graphics.clientSize.height - (pen.width / 2)));
        // }
        if (this.cellStyle.borders.bottom.dashStyle === PdfDashStyle.Solid) {
            pen.lineCap = PdfLineCap.Square;
        }
        graphics.drawLine(pen, p1, p2);
    }
    /**
     * `Adjusts the outer layout area`.
     * @private
     */
    /* tslint:disable */
    adjustOuterLayoutArea(bounds, g) {
        let isHeader = false;
        let cellSpacing = this.row.grid.style.cellSpacing;
        if (cellSpacing > 0) {
            bounds = new RectangleF(bounds.x + cellSpacing, bounds.y + cellSpacing, bounds.width - cellSpacing, bounds.height - cellSpacing);
        }
        let currentColIndex = this.row.cells.indexOf(this);
        if (this.columnSpan > 1) {
            let span = this.columnSpan;
            let totalWidth = 0;
            for (let i = currentColIndex; i < currentColIndex + span; i++) {
                if (this.row.grid.style.allowHorizontalOverflow) {
                    let width;
                    let compWidth = this.row.grid.size.width < g.clientSize.width ? this.row.grid.size.width : g.clientSize.width;
                    if (this.row.grid.size.width > g.clientSize.width) {
                        width = bounds.x + totalWidth + this.row.grid.columns.getColumn(i).width;
                    }
                    else {
                        width = totalWidth + this.row.grid.columns.getColumn(i).width;
                    }
                    if (width > compWidth) {
                        break;
                    }
                }
                totalWidth += this.row.grid.columns.getColumn(i).width;
            }
            totalWidth -= this.row.grid.style.cellSpacing;
            bounds.width = totalWidth;
        }
        if (this.rowSpan > 1 || this.row.rowSpanExists) {
            let span = this.rowSpan;
            let currentRowIndex = this.row.grid.rows.rowCollection.indexOf(this.row);
            if (currentRowIndex == -1) {
                currentRowIndex = this.row.grid.headers.indexOf(this.row);
                if (currentRowIndex != -1) {
                    isHeader = true;
                }
            }
            let totalHeight = 0;
            for (let i = currentRowIndex; i < currentRowIndex + span; i++) {
                totalHeight += (isHeader ? this.row.grid.headers.getHeader(i).height : this.row.grid.rows.getRow(i).height);
                let row = this.row.grid.rows.getRow(i);
                let rowIndex = this.row.grid.rows.rowCollection.indexOf(row);
            }
            let cellIndex = this.row.cells.indexOf(this);
            totalHeight -= this.row.grid.style.cellSpacing;
            // if (this.row.cells.getCell(cellIndex).height > totalHeight && (!this.row.grid.rows.getRow((currentRowIndex + span) - 1).isRowHeightSet)) {
            //     this.row.grid.rows.getRow((currentRowIndex + span) - 1).cells.getCell(cellIndex).rowSpanRemainingHeight = this.row.cells.getCell(cellIndex).height - totalHeight;
            //     totalHeight = this.row.cells.getCell(cellIndex).height;
            //     bounds.height = totalHeight;
            // } else {
            bounds.height = totalHeight;
            // }
            if (!this.row.rowMergeComplete) {
                bounds.height = totalHeight;
            }
        }
        return bounds;
    }
    /* tslint:enable */
    /**
     * Gets the `text font`.
     * @private
     */
    getTextFont() {
        if (typeof this.style.font !== 'undefined' && this.style.font != null) {
            return this.style.font;
        }
        else if (typeof this.row.style.font !== 'undefined' && this.row.style.font != null) {
            return this.row.style.font;
        }
        else if (typeof this.row.grid.style.font !== 'undefined' && this.row.grid.style.font != null) {
            return this.row.grid.style.font;
        }
        else {
            return PdfDocument.defaultFont;
        }
    }
    /**
     * Gets the `text brush`.
     * @private
     */
    getTextBrush() {
        if (typeof this.style.textBrush !== 'undefined' && this.style.textBrush != null) {
            return this.style.textBrush;
        }
        else if (typeof this.row.style.textBrush !== 'undefined' && this.row.style.textBrush != null) {
            return this.row.style.textBrush;
        }
        else {
            return this.row.grid.style.textBrush;
        }
    }
    /**
     * Gets the `text pen`.
     * @private
     */
    getTextPen() {
        if (typeof this.style.textPen !== 'undefined' && this.style.textPen != null) {
            return this.style.textPen;
        }
        else if (typeof this.row.style.textPen !== 'undefined' && this.row.style.textPen != null) {
            return this.row.style.textPen;
        }
        else {
            return this.row.grid.style.textPen;
        }
    }
    /**
     * Gets the `background brush`.
     * @private
     */
    getBackgroundBrush() {
        if (typeof this.style.backgroundBrush !== 'undefined' && this.style.backgroundBrush != null) {
            return this.style.backgroundBrush;
        }
        else if (typeof this.row.style.backgroundBrush !== 'undefined' && this.row.style.backgroundBrush != null) {
            return this.row.style.backgroundBrush;
        }
        else {
            return this.row.grid.style.backgroundBrush;
        }
    }
    /**
     * Gets the current `StringFormat`.
     * @private
     */
    getStringFormat() {
        if (typeof this.style.stringFormat !== 'undefined' && this.style.stringFormat != null) {
            return this.style.stringFormat;
        }
        else {
            return this.stringFormat;
        }
    }
    /**
     * Calculates the `height`.
     * @private
     */
    measureHeight() {
        // .. Calculate the cell text height.
        // .....Add border widths, cell spacings and paddings to the height.
        let width = this.calculateWidth();
        // //check whether the Current PdfGridCell has padding
        if (this.style.cellPadding == null || typeof this.style.cellPadding === 'undefined') {
            width -= (this.gridRow.grid.style.cellPadding.right + this.gridRow.grid.style.cellPadding.left);
            width -= (this.style.borders.left.width + this.style.borders.right.width);
        }
        else {
            width -= (this.style.cellPadding.right + this.style.cellPadding.left);
            width -= (this.style.borders.left.width + this.style.borders.right.width);
        }
        let height = 0;
        let layouter = new PdfStringLayouter();
        if (typeof this.objectValue === 'string' || typeof this.remainingString === 'string') {
            let currentValue = this.objectValue;
            /* tslint:disable */
            let slr = layouter.layout(currentValue, this.getTextFont(), this.stringFormat, new SizeF(width, 0), false, new SizeF(0, 0));
            /* tslint:enable */
            height += slr.actualSize.height;
        }
        else if (this.objectValue instanceof PdfImage || this.objectValue instanceof PdfBitmap) {
            height += this.objectValue.height;
        }
        else if (this.objectValue instanceof PdfTextWebLink) {
            let webLink = this.objectValue;
            /* tslint:disable */
            let slr = layouter.layout(webLink.text, webLink.font, webLink.stringFormat, new SizeF(width, 0), false, new SizeF(0, 0));
            /* tslint:enable */
            height += slr.actualSize.height;
        }
        height += (this.style.borders.top.width + this.style.borders.bottom.width) * 2;
        //Add padding top and bottom value to height
        if (this.style.cellPadding == null || typeof this.style.cellPadding === 'undefined') {
            height += (this.row.grid.style.cellPadding.top + this.row.grid.style.cellPadding.bottom);
        }
        else {
            height += (this.style.cellPadding.top + this.style.cellPadding.bottom);
        }
        height += this.row.grid.style.cellSpacing;
        return height;
    }
    /**
     * return the calculated `width` of the cell.
     * @private
     */
    calculateWidth() {
        let cellIndex = this.row.cells.indexOf(this);
        let columnSpan = this.columnSpan;
        let width = 0;
        for (let i = 0; i < columnSpan; i++) {
            width += this.row.grid.columns.getColumn(cellIndex + i).width;
        }
        return width;
    }
}
/**
 * `PdfGridCellCollection` class provides access to an ordered,
 * strongly typed collection of 'PdfGridCell' objects.
 * @private
 */
class PdfGridCellCollection {
    //Constructor
    /**
     * Initializes a new instance of the `PdfGridCellCollection` class with the row.
     * @private
     */
    constructor(row) {
        /**
         * @hidden
         * @private
         */
        this.cells = [];
        this.gridRow = row;
    }
    //Properties
    /**
     * Gets the current `cell`.
     * @private
     */
    getCell(index) {
        if (index < 0 || index >= this.count) {
            throw new Error('IndexOutOfRangeException');
        }
        return this.cells[index];
    }
    /**
     * Gets the cells `count`.[Read-Only].
     * @private
     */
    get count() {
        return this.cells.length;
    }
    add(cell) {
        if (typeof cell === 'undefined') {
            let tempcell = new PdfGridCell();
            this.add(tempcell);
            return cell;
        }
        else {
            cell.row = this.gridRow;
            this.cells.push(cell);
        }
    }
    /**
     * Returns the `index of` a particular cell in the collection.
     * @private
     */
    indexOf(cell) {
        return this.cells.indexOf(cell);
    }
}

/**
 * `PdfGridColumn` class represents the schema of a column in a 'PdfGrid'.
 */
class PdfGridColumn {
    //Constructors
    /**
     * Initializes a new instance of the `PdfGridColumn` class with the parent grid.
     * @private
     */
    constructor(grid) {
        /**
         * The `width` of the column.
         * @default 0
         * @private
         */
        this.columnWidth = 0;
        this.grid = grid;
    }
    /**
     * Gets or sets the `width` of the 'PdfGridColumn'.
     * @private
     */
    get width() {
        return this.columnWidth;
    }
    set width(value) {
        this.isCustomWidth = true;
        this.columnWidth = value;
    }
    /**
     * Gets or sets the information about the text `formatting`.
     * @private
     */
    get format() {
        if (this.stringFormat == null) {
            this.stringFormat = new PdfStringFormat(); //GetDefaultFormat();
        }
        return this.stringFormat;
    }
    set format(value) {
        this.stringFormat = value;
    }
}
/**
 * `PdfGridColumnCollection` class provides access to an ordered,
 * strongly typed collection of 'PdfGridColumn' objects.
 * @private
 */
class PdfGridColumnCollection {
    //properties
    //Constructors
    /**
     * Initializes a new instance of the `PdfGridColumnCollection` class with the parent grid.
     * @private
     */
    constructor(grid) {
        /**
         * @hidden
         * @private
         */
        this.internalColumns = [];
        /**
         * @hidden
         * @private
         */
        this.columnWidth = 0;
        this.grid = grid;
        this.internalColumns = [];
    }
    //Iplementation
    /**
     * `Add` a new column to the 'PdfGrid'.
     * @private
     */
    add(count) {
        // public add(column : PdfGridColumn) : void
        // public add(arg : number|PdfGridColumn) : void {
        // if (typeof arg === 'number') {
        for (let i = 0; i < count; i++) {
            this.internalColumns.push(new PdfGridColumn(this.grid));
            for (let index = 0; index < this.grid.rows.count; index++) {
                let row = this.grid.rows.getRow(index);
                let cell = new PdfGridCell();
                cell.value = '';
                row.cells.add(cell);
            }
        }
        // } else {
        //     let column : PdfGridColumn = new PdfGridColumn(this.grid);
        //     this.columns.push(column);
        //     return column;
        // }
    }
    /**
     * Gets the `number of columns` in the 'PdfGrid'.[Read-Only].
     * @private
     */
    get count() {
        return this.internalColumns.length;
    }
    /**
     * Gets the `widths`.
     * @private
     */
    get width() {
        if (this.columnWidth === 0) {
            this.columnWidth = this.measureColumnsWidth();
        }
        if (this.grid.initialWidth !== 0 && this.columnWidth !== this.grid.initialWidth && !this.grid.style.allowHorizontalOverflow) {
            this.columnWidth = this.grid.initialWidth;
            this.grid.isPageWidth = true;
        }
        return this.columnWidth;
    }
    /**
     * Gets the `array of PdfGridColumn`.[Read-Only]
     * @private
     */
    get columns() {
        return this.internalColumns;
    }
    /**
     * Gets the `PdfGridColumn` from the specified index.[Read-Only]
     * @private
     */
    getColumn(index) {
        if (index >= 0 && index <= this.columns.length) {
            return this.columns[index];
        }
        else {
            throw Error('can not get the column from the index: ' + index);
        }
    }
    //Implementation
    /**
     * `Calculates the column widths`.
     * @private
     */
    measureColumnsWidth() {
        let totalWidth = 0;
        // this.m_grid.measureColumnsWidth();
        for (let i = 0, count = this.internalColumns.length; i < count; i++) {
            totalWidth += this.internalColumns[i].width;
        }
        return totalWidth;
    }
    /**
     * Gets the `widths of the columns`.
     * @private
     */
    getDefaultWidths(totalWidth) {
        let widths = [];
        let subFactor = this.count;
        for (let i = 0; i < this.count; i++) {
            if (this.grid.isPageWidth && totalWidth >= 0 && !this.internalColumns[i].isCustomWidth) {
                this.internalColumns[i].width = 0;
            }
            else {
                widths[i] = this.internalColumns[i].width;
                if (this.internalColumns[i].width > 0 && this.internalColumns[i].isCustomWidth) {
                    totalWidth -= this.internalColumns[i].width;
                    subFactor--;
                }
                else {
                    widths[i] = 0;
                }
            }
        }
        for (let i = 0; i < this.count; i++) {
            let width = totalWidth / subFactor;
            if (widths[i] <= 0) {
                widths[i] = width;
            }
        }
        return widths;
    }
}

/**
 * `PdfGridRow` class provides customization of the settings for the particular row.
 */
class PdfGridRow {
    //Constructor
    /**
     * Initializes a new instance of the `PdfGridRow` class with the parent grid.
     * @private
     */
    constructor(grid) {
        /**
         * Stores the index of the overflowing row.
         * @private
         */
        this.gridRowOverflowIndex = 0;
        /**
         * Check whether the row height `is set explicitly`.
         * @default false
         * @private
         */
        this.isRowHeightSet = false;
        /**
         * Check weather the row merge `is completed` or not.
         * @default true
         * @private
         */
        this.isRowMergeComplete = true;
        this.pdfGrid = grid;
    }
    //Properties
    /**
     * Gets or sets a value indicating [`row span exists`].
     * @private
     */
    get rowSpanExists() {
        return this.bRowSpanExists;
    }
    set rowSpanExists(value) {
        this.bRowSpanExists = value;
    }
    /**
     * Gets the `cells` from the selected row.[Read-Only].
     * @private
     */
    get cells() {
        if (this.gridCells == null) {
            this.gridCells = new PdfGridCellCollection(this);
        }
        return this.gridCells;
    }
    /**
     * Gets or sets the parent `grid`.
     * @private
     */
    get grid() {
        return this.pdfGrid;
    }
    set grid(value) {
        this.pdfGrid = value;
    }
    /**
     * Gets or sets the row `style`.
     * @private
     */
    get style() {
        if (typeof this.rowStyle === 'undefined') {
            this.rowStyle = new PdfGridRowStyle();
            this.rowStyle.setParent(this);
        }
        return this.rowStyle;
    }
    set style(value) {
        this.rowStyle = value;
        for (let i = 0; i < this.cells.count; i++) {
            this.cells.getCell(i).style.borders = value.border;
            if (typeof value.font !== 'undefined') {
                this.cells.getCell(i).style.font = value.font;
            }
            if (typeof value.backgroundBrush !== 'undefined') {
                this.cells.getCell(i).style.backgroundBrush = value.backgroundBrush;
            }
            if (typeof value.textBrush !== 'undefined') {
                this.cells.getCell(i).style.textBrush = value.textBrush;
            }
            if (typeof value.textPen !== 'undefined') {
                this.cells.getCell(i).style.textPen = value.textPen;
            }
        }
    }
    /**
     * `Height` of the row yet to be drawn after split.
     * @private
     */
    get rowBreakHeight() {
        if (typeof this.gridRowBreakHeight === 'undefined') {
            this.gridRowBreakHeight = 0;
        }
        return this.gridRowBreakHeight;
    }
    set rowBreakHeight(value) {
        this.gridRowBreakHeight = value;
    }
    get rowOverflowIndex() {
        return this.gridRowOverflowIndex;
    }
    set rowOverflowIndex(value) {
        this.gridRowOverflowIndex = value;
    }
    /**
     * Gets or sets the `height` of the row.
     * @private
     */
    get height() {
        if (!this.isRowHeightSet) {
            this.rowHeight = this.measureHeight();
        }
        return this.rowHeight;
    }
    set height(value) {
        this.rowHeight = value;
        this.isRowHeightSet = true;
    }
    /**
     * Gets or sets a value indicating [`column span exists`].
     * @private
     */
    get columnSpanExists() {
        return this.bColumnSpanExists;
    }
    set columnSpanExists(value) {
        this.bColumnSpanExists = value;
    }
    /**
     * Check whether the Row `has row span or row merge continue`.
     * @private
     */
    get rowMergeComplete() {
        return this.isRowMergeComplete;
    }
    set rowMergeComplete(value) {
        this.isRowMergeComplete = value;
    }
    /**
     * Returns `index` of the row.
     * @private
     */
    get rowIndex() {
        return this.grid.rows.rowCollection.indexOf(this);
    }
    //Implementation
    /**
     * `Calculates the height`.
     * @private
     */
    measureHeight() {
        let rowSpanRemainingHeight = 0;
        let rowHeight;
        let maxHeight = 0;
        // if(this.cells.getCell(0).RowSpan > 1) {
        //     rowHeight=0;
        // } else {
        rowHeight = this.cells.getCell(0).height;
        // }
        for (let i = 0; i < this.cells.count; i++) {
            let cell = this.cells.getCell(i);
            //get the maximum rowspan remaining height.
            if (cell.rowSpanRemainingHeight > rowSpanRemainingHeight) {
                rowSpanRemainingHeight = cell.rowSpanRemainingHeight;
            }
            //skip the cell if row spanned.
            // if (cell.IsRowMergeContinue)
            //     continue; 
            // if (!cell.IsRowMergeContinue)
            this.rowMergeComplete = false;
            if (cell.rowSpan > 1) {
                if (maxHeight < cell.height) {
                    maxHeight = cell.height;
                }
                continue;
            }
            rowHeight = Math.max(rowHeight, cell.height);
        }
        if (rowHeight === 0) {
            rowHeight = maxHeight;
        }
        else if (rowSpanRemainingHeight > 0) {
            rowHeight += rowSpanRemainingHeight;
        }
        return rowHeight;
    }
}
/**
 * `PdfGridRowCollection` class provides access to an ordered, strongly typed collection of 'PdfGridRow' objects.
 * @private
 */
class PdfGridRowCollection {
    // Constructor
    /**
     * Initializes a new instance of the `PdfGridRowCollection` class with the parent grid.
     * @private
     */
    constructor(grid) {
        this.rows = [];
        this.grid = grid;
    }
    //Properties
    /**
     * Gets the number of header in the `PdfGrid`.[Read-Only].
     * @private
     */
    get count() {
        return this.rows.length;
    }
    //Implementation
    /**
     * Return the row collection of the `grid`.
     * @private
     */
    get rowCollection() {
        return this.rows;
    }
    addRow(arg) {
        if (typeof arg === 'undefined') {
            let temprow = new PdfGridRow(this.grid);
            this.addRow(temprow);
            return temprow;
        }
        else {
            arg.style.setBackgroundBrush(this.grid.style.backgroundBrush);
            arg.style.setFont(this.grid.style.font);
            arg.style.setTextBrush(this.grid.style.textBrush);
            arg.style.setTextPen(this.grid.style.textPen);
            if (arg.cells.count === 0) {
                for (let i = 0; i < this.grid.columns.count; i++) {
                    arg.cells.add(new PdfGridCell());
                }
            }
            this.rows.push(arg);
        }
    }
    /**
     * Return the row by index.
     * @private
     */
    getRow(index) {
        return this.rows[index];
    }
}
/**
 * `PdfGridHeaderCollection` class provides customization of the settings for the header.
 * @private
 */
class PdfGridHeaderCollection {
    //constructor
    /**
     * Initializes a new instance of the `PdfGridHeaderCollection` class with the parent grid.
     * @private
     */
    constructor(grid) {
        /**
         * The array to store the `rows` of the grid header.
         * @private
         */
        this.rows = [];
        this.grid = grid;
        this.rows = [];
    }
    //Properties
    /**
     * Gets a 'PdfGridRow' object that represents the `header` row in a 'PdfGridHeaderCollection' control.[Read-Only].
     * @private
     */
    getHeader(index) {
        // if (index < 0 || index >= Count) {
        //     throw new IndexOutOfRangeException();
        // }
        return (this.rows[index]);
    }
    /**
     * Gets the `number of header` in the 'PdfGrid'.[Read-Only]
     * @private
     */
    get count() {
        return this.rows.length;
    }
    add(arg) {
        if (typeof arg === 'number') {
            let row;
            for (let i = 0; i < arg; i++) {
                row = new PdfGridRow(this.grid);
                for (let j = 0; j < this.grid.columns.count; j++) {
                    row.cells.add(new PdfGridCell());
                }
                this.rows.push(row);
            }
            return this.rows;
        }
        else {
            this.rows.push(arg);
        }
    }
    indexOf(row) {
        return this.rows.indexOf(row);
    }
}

/**
 * PdfGrid.ts class for EJ2-PDF
 */
/**
 * `PdfGridLayoutFormat` class represents a flexible grid that consists of columns and rows.
 */
class PdfGridLayoutFormat extends PdfLayoutFormat {
    /**
     * Initializes a new instance of the `PdfGridLayoutFormat` class.
     * @private
     */
    constructor(baseFormat) {
        if (typeof baseFormat === 'undefined') {
            super();
        }
        else {
            super(baseFormat);
        }
    }
}
class PdfGrid extends PdfLayoutElement {
    //constructor
    /**
     * Initialize a new instance for `PdfGrid` class.
     * @private
     */
    constructor() {
        super();
        /**
         * @hidden
         * @private
         */
        this.gridSize = new SizeF(0, 0);
        /**
         * @hidden
         * @private
         */
        this.isRearranged = false;
        /**
         * @hidden
         * @private
         */
        this.pageBounds = new RectangleF();
        /**
         * @hidden
         * @private
         */
        this.listOfNavigatePages = [];
        /**
         * @hidden
         * @private
         */
        this.flag = true;
        /**
         * @hidden
         * @private
         */
        this.columnRanges = [];
        /**
         * @hidden
         * @private
         */
        this.currentLocation = new PointF(0, 0);
        /**
         * @hidden
         * @private
         */
        this.breakRow = true;
    }
    //Properties
    /**
     * Gets a value indicating whether the `start cell layout event` should be raised.
     * @private
     */
    get raiseBeginCellDraw() {
        return (typeof this.beginCellDraw !== 'undefined' && typeof this.beginCellDraw !== null);
    }
    /**
     * Gets a value indicating whether the `end cell layout event` should be raised.
     * @private
     */
    get raiseEndCellDraw() {
        return (typeof this.endCellDraw !== 'undefined' && typeof this.endCellDraw !== null);
    }
    /**
     * Gets a value indicating whether the `start page layout event` should be raised.
     * @private
     */
    get raiseBeginPageLayout() {
        return (typeof this.beginPageLayout !== 'undefined');
    }
    /**
     * Gets a value indicating whether the `ending page layout event` should be raised.
     * @private
     */
    get raiseEndPageLayout() {
        return (typeof this.endPageLayout !== 'undefined');
    }
    /**
     * Gets or sets a value indicating whether to `repeat header`.
     * @private
     */
    get repeatHeader() {
        if (this.bRepeatHeader == null || typeof this.bRepeatHeader === 'undefined') {
            this.bRepeatHeader = false;
        }
        return this.bRepeatHeader;
    }
    set repeatHeader(value) {
        this.bRepeatHeader = value;
    }
    /**
     * Gets or sets a value indicating whether to split or cut rows that `overflow a page`.
     * @private
     */
    get allowRowBreakAcrossPages() {
        return this.breakRow;
    }
    set allowRowBreakAcrossPages(value) {
        this.breakRow = value;
    }
    /**
     * Gets the `column` collection of the PdfGrid.[Read-Only]
     * @private
     */
    get columns() {
        if (this.gridColumns == null || typeof this.gridColumns === 'undefined') {
            this.gridColumns = new PdfGridColumnCollection(this);
        }
        return this.gridColumns;
    }
    /**
     * Gets the `row` collection from the PdfGrid.[Read-Only]
     * @private
     */
    get rows() {
        if (this.gridRows == null) {
            this.gridRows = new PdfGridRowCollection(this);
        }
        return this.gridRows;
    }
    /**
     * Gets the `headers` collection from the PdfGrid.[Read-Only]
     * @private
     */
    get headers() {
        if (this.gridHeaders == null || typeof this.gridHeaders === 'undefined') {
            this.gridHeaders = new PdfGridHeaderCollection(this);
        }
        return this.gridHeaders;
    }
    /**
     * Indicating `initial width` of the page.
     * @private
     */
    get initialWidth() {
        return this.gridInitialWidth;
    }
    set initialWidth(value) {
        this.gridInitialWidth = value;
    }
    /**
     * Gets or sets the `grid style`.
     * @private
     */
    get style() {
        if (this.gridStyle == null) {
            this.gridStyle = new PdfGridStyle();
        }
        return this.gridStyle;
    }
    set style(value) {
        if (this.gridStyle == null) {
            this.gridStyle = value;
        }
    }
    /**
     * Gets a value indicating whether the grid column width is considered to be `page width`.
     * @private
     */
    get isPageWidth() {
        return this.pageWidth;
    }
    set isPageWidth(value) {
        this.pageWidth = value;
    }
    /**
     * Gets or set if grid `is nested grid`.
     * @private
     */
    get isChildGrid() {
        return this.childGrid;
    }
    set isChildGrid(value) {
        this.childGrid = value;
    }
    /**
     * Gets the `size`.
     * @private
     */
    get size() {
        if (this.gridSize.width === 0 && this.gridSize.height === 0) {
            this.gridSize = this.measure();
            return this.gridSize;
        }
        else {
            return this.gridSize;
        }
    }
    set size(value) {
        this.gridSize = value;
    }
    draw(arg1, arg2, arg3, arg4) {
        if (arg2 instanceof PointF && typeof arg2.width === 'undefined' && typeof arg3 === 'undefined') {
            return this.drawHelper(arg1, arg2.x, arg2.y);
        }
        else if (typeof arg2 === 'number' && typeof arg3 === 'number' && typeof arg4 === 'undefined') {
            return this.drawHelper(arg1, arg2, arg3, null);
        }
        else if (arg2 instanceof RectangleF && typeof arg2.width !== 'undefined' && typeof arg3 === 'undefined') {
            return this.drawHelper(arg1, arg2, null);
        }
        else if (arg2 instanceof PointF && typeof arg2.width === 'undefined' && arg3 instanceof PdfLayoutFormat) {
            return this.drawHelper(arg1, arg2.x, arg2.y, arg3);
        }
        else if (typeof arg2 === 'number' && typeof arg3 === 'number' && (arg4 instanceof PdfLayoutFormat || arg4 == null)) {
            let width = (arg1.graphics.clientSize.width - arg2);
            let layoutRectangle = new RectangleF(arg2, arg3, width, 0);
            return this.drawHelper(arg1, layoutRectangle, arg4);
        }
        else if (arg2 instanceof RectangleF && typeof arg2.width !== 'undefined' && typeof arg3 === 'boolean') {
            return this.drawHelper(arg1, arg2, null);
        }
        else {
            return this.drawHelper(arg1, arg2, arg3);
        }
    }
    /**
     * `measures` this instance.
     * @private
     */
    measure() {
        let height = 0;
        let width = this.columns.width;
        for (let i = 0; i < this.headers.count; i++) {
            let row = this.headers.getHeader(i);
            height += row.height;
        }
        for (let i = 0; i < this.rows.count; i++) {
            let row = this.rows.getRow(i);
            height += row.height;
        }
        return new SizeF(width, height);
    }
    layout(param, isGridLayouter) {
        if (typeof isGridLayouter === 'undefined') {
            this.setSpan();
            this.layoutFormat = param.format;
            this.gridLocation = param.bounds;
            let result = this.layout(param, true);
            return result;
        }
        else {
            return this.layoutInternal(param);
        }
    }
    setSpan() {
        let colSpan;
        let rowSpan = 1;
        let currentCellIndex;
        let currentRowIndex = 0;
        let rowCount = this.headers.count;
        for (let i = 0; i < rowCount; i++) {
            let row = this.headers.getHeader(i);
            let colCount = row.cells.count;
            for (let j = 0; j < colCount; j++) {
                let cell = row.cells.getCell(j);
                //Skip setting span map for already coverted rows/columns.
                if (!cell.isCellMergeContinue && !cell.isRowMergeContinue && (cell.columnSpan > 1 || cell.rowSpan > 1)) {
                    if (cell.columnSpan + j > row.cells.count) {
                        throw new Error('Invalid span specified at row ' + j.toString() + ' column ' + i.toString());
                    }
                    if (cell.rowSpan + i > this.headers.count) {
                        throw new Error('Invalid span specified at Header ' + j.toString() + ' column ' + i.toString());
                    }
                    // if (this.rows.count !== 0 && cell.rowSpan + i > this.rows.count) {
                    //     throw new Error('Invalid span specified at row ' + j.toString() + ' column ' + i.toString());
                    // }
                    if (cell.columnSpan > 1 && cell.rowSpan > 1) {
                        colSpan = cell.columnSpan;
                        rowSpan = cell.rowSpan;
                        currentCellIndex = j;
                        currentRowIndex = i;
                        cell.isCellMergeStart = true;
                        cell.isRowMergeStart = true;
                        //Set Column merges for first row
                        while (colSpan > 1) {
                            currentCellIndex++;
                            row.cells.getCell(currentCellIndex).isCellMergeContinue = true;
                            row.cells.getCell(currentCellIndex).isRowMergeContinue = true;
                            row.cells.getCell(currentCellIndex).rowSpan = rowSpan;
                            colSpan--;
                        }
                        currentCellIndex = j;
                        colSpan = cell.columnSpan;
                        //Set Row Merges and column merges foreach subsequent rows.
                        while (rowSpan > 1) {
                            currentRowIndex++;
                            this.headers.getHeader(currentRowIndex).cells.getCell(j).isRowMergeContinue = true;
                            this.headers.getHeader(currentRowIndex).cells.getCell(currentCellIndex).isRowMergeContinue = true;
                            rowSpan--;
                            while (colSpan > 1) {
                                currentCellIndex++;
                                this.headers.getHeader(currentRowIndex).cells.getCell(currentCellIndex).isCellMergeContinue = true;
                                this.headers.getHeader(currentRowIndex).cells.getCell(currentCellIndex).isRowMergeContinue = true;
                                colSpan--;
                            }
                            colSpan = cell.columnSpan;
                            currentCellIndex = j;
                        }
                    }
                    else if (cell.columnSpan > 1 && cell.rowSpan === 1) {
                        colSpan = cell.columnSpan;
                        currentCellIndex = j;
                        cell.isCellMergeStart = true;
                        //Set Column merges.
                        while (colSpan > 1) {
                            currentCellIndex++;
                            row.cells.getCell(currentCellIndex).isCellMergeContinue = true;
                            colSpan--;
                        }
                    }
                    else if (cell.columnSpan === 1 && cell.rowSpan > 1) {
                        rowSpan = cell.rowSpan;
                        currentRowIndex = i;
                        //Set row Merges.
                        while (rowSpan > 1) {
                            currentRowIndex++;
                            this.headers.getHeader(currentRowIndex).cells.getCell(j).isRowMergeContinue = true;
                            rowSpan--;
                        }
                    }
                }
            }
        }
    }
    /**
     * Gets the `format`.
     * @private
     */
    getFormat(format) {
        let f = format;
        return f;
    }
    /**
     * `Layouts` the element.
     * @private
     */
    layoutInternal(param) {
        this.initialWidth = param.bounds.width;
        let format = this.getFormat(param.format);
        this.currentPage = param.page;
        if (this.currentPage !== null) {
            let pageHeight = this.currentPage.getClientSize().height;
            let pageWidth = this.currentPage.getClientSize().width;
            this.currentPageBounds = this.currentPage.getClientSize();
        }
        else {
            throw Error('Can not set page as null');
        }
        this.currentGraphics = this.currentPage.graphics;
        let index = 0;
        index = this.currentGraphics.page.section.indexOf(this.currentGraphics.page);
        this.listOfNavigatePages.push(index);
        this.currentBounds = new RectangleF(new PointF(param.bounds.x, param.bounds.y), this.currentGraphics.clientSize);
        if (this.rows.count !== 0) {
            this.currentBounds.width = (param.bounds.width > 0) ? param.bounds.width :
                (this.currentBounds.width - this.rows.getRow(0).cells.getCell(0).style.borders.left.width / 2);
        }
        else if (this.headers.count !== 0) {
            this.currentBounds.width = param.bounds.width;
        }
        else {
            throw Error('Please add row or header into grid');
        }
        this.startLocation = new PointF(param.bounds.x, param.bounds.y);
        if (param.bounds.height > 0 && !this.isChildGrid) {
            this.currentBounds.height = param.bounds.height;
        }
        this.hType = this.style.horizontalOverflowType;
        if (!this.style.allowHorizontalOverflow) {
            this.measureColumnsWidth(this.currentBounds);
            this.columnRanges.push([0, this.columns.count - 1]);
        }
        else {
            this.measureColumnsWidth();
            this.determineColumnDrawRanges();
        }
        let result = this.layoutOnPage(param);
        return result;
    }
    measureColumnsWidth(bounds) {
        if (typeof bounds !== 'undefined') {
            let widths = this.columns.getDefaultWidths(bounds.width);
            let tempWidth = this.columns.getColumn(0).width;
            for (let i = 0, count = this.columns.count; i < count; i++) {
                this.columns.getColumn(i).width = widths[i];
            }
        }
        else {
            let widths = [];
            let cellWidth = 0;
            if (this.headers.count > 0) {
                let colCount = this.headers.getHeader(0).cells.count;
                let rowCount = this.headers.count;
                for (let i = 0; i < colCount; i++) {
                    cellWidth = 0;
                    for (let j = 0; j < rowCount; j++) {
                        let rowWidth = Math.min(this.initialWidth, this.headers.getHeader(j).cells.getCell(i).width);
                        cellWidth = Math.max(cellWidth, rowWidth);
                    }
                    widths[i] = cellWidth;
                }
            }
            else {
                let colCount = this.rows.getRow(0).cells.count;
                let rowCount = this.rows.count;
                for (let i = 0; i < colCount; i++) {
                    cellWidth = 0;
                    for (let j = 0; j < rowCount; j++) {
                        let rowWidth = Math.min(this.initialWidth, this.rows.getRow(j).cells.getCell(i).width);
                        cellWidth = Math.max(cellWidth, rowWidth);
                    }
                    widths[i] = cellWidth;
                }
            }
            cellWidth = 0;
            for (let i = 0, colCount = this.columns.count; i < colCount; i++) {
                for (let j = 0, rowCount = this.rows.count; j < rowCount; j++) {
                    if (this.rows.getRow(j).cells.getCell(i).columnSpan == 1 || this.rows.getRow(j).cells.getCell(i).value !== null || this.rows.getRow(j).cells.getCell(i).rowSpan >= 1) {
                        if (this.rows.getRow(j).cells.getCell(i).value !== null &&
                            !this.rows.getRow(j).grid.style.allowHorizontalOverflow) {
                            let value = this.rows.getRow(j).grid.style.cellPadding.right +
                                this.rows.getRow(j).grid.style.cellPadding.left
                                + this.rows.getRow(j).cells.getCell(i).style.borders.left.width / 2
                                + this.gridLocation.x;
                            this.rows.getRow(j).cells.getCell(i).value.initialWidth = this.initialWidth - value;
                        }
                        let rowWidth = 0;
                        let internalWidth = this.rows.getRow(j).cells.getCell(i).width;
                        internalWidth += this.rows.getRow(j).cells.getCell(i).style.borders.left.width;
                        internalWidth += this.rows.getRow(j).cells.getCell(i).style.borders.right.width;
                        let internalHeight = this.rows.getRow(j).cells.getCell(i).height;
                        internalHeight += (this.rows.getRow(j).cells.getCell(i).style.borders.top.width);
                        internalHeight += (this.rows.getRow(j).cells.getCell(i).style.borders.bottom.width);
                        let isCorrectWidth = (internalWidth + this.gridLocation.x) > this.currentGraphics.clientSize.width;
                        let isCorrectHeight = (internalHeight + this.gridLocation.y) > this.currentGraphics.clientSize.height;
                        if (isCorrectWidth || isCorrectHeight) {
                            throw Error('Image size exceeds client size of the page. Can not insert this image');
                        }
                        rowWidth = Math.min(this.initialWidth, this.rows.getRow(j).cells.getCell(i).width);
                        cellWidth = Math.max(widths[i], Math.max(cellWidth, rowWidth));
                        cellWidth = Math.max(this.columns.getColumn(i).width, cellWidth);
                    }
                }
                widths[i] = cellWidth;
                cellWidth = 0;
            }
            for (let i = 0, count = this.columns.count; i < count; i++) {
                this.columns.getColumn(i).width = widths[i];
            }
        }
    }
    /* tslint:enable */
    /**
     * `Determines the column draw ranges`.
     * @private
     */
    determineColumnDrawRanges() {
        let startColumn = 0;
        let endColumn = 0;
        let cellWidths = 0;
        let availableWidth = this.currentGraphics.clientSize.width - this.currentBounds.x;
        for (let i = 0; i < this.columns.count; i++) {
            cellWidths += this.columns.getColumn(i).width;
            if (cellWidths >= availableWidth) {
                let subWidths = 0;
                for (let j = startColumn; j <= i; j++) {
                    subWidths += this.columns.getColumn(j).width;
                    if (subWidths > availableWidth) {
                        break;
                    }
                    endColumn = j;
                }
                this.columnRanges.push([startColumn, endColumn]);
                startColumn = endColumn + 1;
                endColumn = startColumn;
                cellWidths = (endColumn <= i) ? this.columns.getColumn(i).width : 0;
            }
        }
        // if (startColumn !== this.columns.Count) {
        this.columnRanges.push([startColumn, this.columns.count - 1]);
        // }
    }
    /**
     * `Layouts the on page`.
     * @private
     */
    layoutOnPage(param) {
        /* tslint:disable */
        this.pageBounds.x = param.bounds.x;
        this.pageBounds.y = param.bounds.y;
        this.pageBounds.height = param.bounds.height;
        let format = this.getFormat(param.format);
        let result = null;
        let layoutedPages = new TemporaryDictionary();
        let startPage = param.page;
        let cellBounds = [];
        for (let index = 0; index < this.columnRanges.length; index++) {
            let range = this.columnRanges[index];
            this.cellStartIndex = range[0];
            this.cellEndIndex = range[1];
            let returnObject = this.raiseBeforePageLayout(this.currentPage, this.currentBounds, this.currentRowIndex);
            this.currentBounds = returnObject.currentBounds;
            this.currentRowIndex = returnObject.currentRowIndex;
            // if (returnObject.returnValue) {
            // result = new PdfGridLayoutResult(this.currentPage, this.currentBounds);
            // break;
            // }
            //Draw Headers.
            for (let i = 0; i < this.headers.count; i++) {
                let row = this.headers.getHeader(i);
                let headerHeight = this.currentBounds.y;
                // RowLayoutResult
                let headerResult = this.drawRow(row);
                // if (headerHeight === this.currentBounds.y) {
                //     drawHeader = true;
                //     if (PdfGrid.repeatRowIndex === -1) {
                //         PdfGrid.repeatRowIndex = this.rows.getRow.indexOf(row);
                //     }
                // } else {
                
                // }
            }
            let i = 0;
            let length = this.rows.count;
            let repeatRow;
            cellBounds = [];
            //Draw row by row with the specified cell range.
            for (let j = 0; j < this.rows.count; j++) {
                let row = this.rows.getRow(j);
                i++;
                this.currentRowIndex = i - 1;
                let originalHeight = this.currentBounds.y;
                startPage = this.currentPage;
                PdfGrid.repeatRowIndex = -1;
                let rowResult = this.drawRow(row);
                cellBounds.push(rowResult.bounds.width);
                //if height remains same, it is understood that row is not drawn in the page
                if (originalHeight === this.currentBounds.y) {
                    repeatRow = true;
                    PdfGrid.repeatRowIndex = this.rows.rowCollection.indexOf(row);
                }
                else {
                    repeatRow = false;
                    PdfGrid.repeatRowIndex = -1;
                }
                if (!rowResult.isFinish && startPage !== null && format.layout !== PdfLayoutType.OnePage && repeatRow) {
                    // During pagination, cell position is maintained here.
                    this.startLocation.x = this.currentBounds.x;
                    this.currentPage = this.getNextPage(format);
                    if ((param.format !== null) && !param.format.usePaginateBounds && param.bounds !== null &&
                        param.bounds.height > 0 && !this.isChildGrid) {
                        this.currentBounds.height = param.bounds.height;
                    }
                    if ((param.format !== null) && !param.format.usePaginateBounds && param.bounds !== null &&
                        param.bounds.y > 0 && !this.isChildGrid) {
                        this.currentBounds.y = param.bounds.y;
                    }
                    this.startLocation.y = this.currentBounds.y;
                    if ((format.paginateBounds.x === format.paginateBounds.y) &&
                        (format.paginateBounds.y === format.paginateBounds.height) &&
                        (format.paginateBounds.height === format.paginateBounds.width) && (format.paginateBounds.width === 0)) {
                        this.currentBounds.x += this.startLocation.x;
                    }
                    if (this.currentBounds.x === PdfBorders.default.left.width / 2) {
                        this.currentBounds.y += this.startLocation.x;
                    }
                    if (this.repeatHeader) {
                        for (let i = 0; i < this.headers.count; i++) {
                            let header = this.headers.getHeader(i);
                            this.drawRow(header);
                        }
                    }
                    this.drawRow(row);
                    if (this.currentPage !== null && !layoutedPages.containsKey(this.currentPage)) {
                        layoutedPages.add(this.currentPage, range);
                    }
                }
            }
            let isPdfGrid = false;
            let maximumCellBoundsWidth = 0;
            if (cellBounds.length > 0) {
                maximumCellBoundsWidth = cellBounds[0];
            }
            let largeNavigatePage = [[0, 0]];
            if (!isPdfGrid && cellBounds.length > 0) {
                for (let c = 0; c < i - 1; c++) {
                    if (maximumCellBoundsWidth < cellBounds[c]) {
                        maximumCellBoundsWidth = cellBounds[c];
                    }
                }
                this.rowLayoutBoundsWidth = maximumCellBoundsWidth;
            }
            else {
                this.rowLayoutBoundsWidth = largeNavigatePage[0][1];
            }
            if (this.columnRanges.length - 1 !== index && this.columnRanges.length > 1 && format.layout !== PdfLayoutType.OnePage) {
                this.currentPage = this.getNextPage(format);
                if ((format.paginateBounds.x === format.paginateBounds.y) && (format.paginateBounds.y === format.paginateBounds.height)
                    && (format.paginateBounds.height === format.paginateBounds.width) && (format.paginateBounds.width === 0)) {
                    this.currentBounds.x += this.startLocation.x;
                    this.currentBounds.y += this.startLocation.y;
                    // this.currentBounds.height = this.pageBounds.height;
                }
            }
        }
        result = this.getLayoutResult();
        if (this.style.allowHorizontalOverflow && this.style.horizontalOverflowType == PdfHorizontalOverflowType.NextPage) {
            this.reArrangePages(layoutedPages);
        }
        this.raisePageLayouted(result);
        return result;
    } /* tslint:enable */
    /**
     * Gets the `next page`.
     * @private
     */
    getNextPage(format) {
        let section = this.currentPage.section;
        let nextPage = null;
        let index = section.indexOf(this.currentPage);
        this.flag = false;
        if (index === section.count - 1) {
            nextPage = section.add();
        }
        else {
            nextPage = section.getPages()[index + 1];
        }
        this.currentGraphics = nextPage.graphics;
        let pageindex = this.currentGraphics.page.section.indexOf(this.currentGraphics.page);
        if (!(this.listOfNavigatePages.indexOf(pageindex) !== -1)) {
            this.listOfNavigatePages.push(pageindex);
        }
        this.currentBounds = new RectangleF(new PointF(0, 0), nextPage.getClientSize());
        // if ((format.PaginateBounds.x !== format.PaginateBounds.y) && (format.PaginateBounds.y !== format.PaginateBounds.height)
        //     && (format.PaginateBounds.height !== format.PaginateBounds.width) && (format.PaginateBounds.width !== 0)) {
        //     this.currentBounds.x = format.PaginateBounds.x;
        //     this.currentBounds.y = format.PaginateBounds.y;
        //     this.currentBounds.height = format.PaginateBounds.height;
        // }
        return nextPage;
    }
    /**
     * Gets the `layout result`.
     * @private
     */
    getLayoutResult() {
        let bounds;
        /* tslint:disable */
        bounds = new RectangleF(this.startLocation, new SizeF(this.currentBounds.width, this.currentBounds.y - this.startLocation.y));
        /* tslint:enable */
        return new PdfGridLayoutResult(this.currentPage, bounds);
    }
    /**
     * `Recalculate row height` for the split cell to be drawn.
     * @private
     */
    ReCalculateHeight(row, height) {
        let newHeight = 0.0;
        // for (let i : number = this.cellStartIndex; i <= this.cellEndIndex; i++) {
        //     if (!(row.cells.getCell(i).RemainingString === null || row.cells.getCell(i).RemainingString === '' ||
        //           typeof row.cells.getCell(i).RemainingString === 'undefined')) {
        //         newHeight = Math.max(newHeight, row.cells.getCell(i).MeasureHeight());
        //     }
        // }
        return Math.max(height, newHeight);
    }
    /**
     * `Raises BeforePageLayout event`.
     * @private
     */
    raiseBeforePageLayout(currentPage, currentBounds, currentRow) {
        let cancel = false;
        if (this.raiseBeginPageLayout) {
            let args = new PdfGridBeginPageLayoutEventArgs(currentBounds, currentPage, currentRow);
            this.beginPageLayout(this, args);
            // if (currentBounds !== args.Bounds) {
            //     this.isChanged = true;
            //     this.currentLocation = new PointF(args.Bounds.x, args.Bounds.y);
            //     this.measureColumnsWidth(new RectangleF(new PointF(args.Bounds.x, args.Bounds.y) ,
            //                                                  new SizeF(args.Bounds.width + args.Bounds.x ,
            //                                                                 args.Bounds.height)));
            // }
            cancel = args.cancel;
            currentBounds = args.bounds;
            currentRow = args.startRowIndex;
        }
        return { returnValue: cancel, currentBounds: currentBounds, currentRowIndex: currentRow };
    }
    /**
     * `Raises PageLayout event` if needed.
     * @private
     */
    raisePageLayouted(result) {
        let args = new PdfGridEndPageLayoutEventArgs(result);
        if (this.raiseEndPageLayout) {
            this.endPageLayout(this, args);
        }
        return args;
    }
    drawRow(row, result, height) {
        if (typeof result === 'undefined') {
            //.. Check if required space available.
            //.....If the row conains spans which  falls through more than one page, then draw the row to next page.
            let result = new RowLayoutResult();
            let rowHeightWithSpan = 0;
            let isHeader = false;
            if (row.rowSpanExists) {
                let maxSpan = 0;
                let currRowIndex = this.rows.rowCollection.indexOf(row);
                if (currRowIndex === -1) {
                    currRowIndex = this.headers.indexOf(row);
                    if (currRowIndex !== -1) {
                        isHeader = true;
                    }
                }
                for (let i = 0; i < row.cells.count; i++) {
                    let cell = row.cells.getCell(i);
                    maxSpan = Math.max(maxSpan, cell.rowSpan);
                }
                for (let i = currRowIndex; i < currRowIndex + maxSpan; i++) {
                    rowHeightWithSpan += (isHeader ? this.headers.getHeader(i).height : this.rows.getRow(i).height);
                }
                let rowMaxHeight = rowHeightWithSpan;
                for (let i = 0; i < row.cells.count; i++) {
                    rowMaxHeight = rowMaxHeight > row.cells.getCell(i).height ? rowMaxHeight : row.cells.getCell(i).height;
                }
                let nextRow = this.headers.getHeader(this.headers.indexOf(row) + 1);
                let flag = true;
                for (let i = 0; i < nextRow.cells.count; i++) {
                    if (nextRow.cells.getCell(i).value !== '' && nextRow.cells.getCell(i).value !== undefined) {
                        flag = false;
                        break;
                    }
                }
                if ((rowMaxHeight > rowHeightWithSpan) && flag) {
                    row.height += (rowMaxHeight - rowHeightWithSpan);
                }
            }
            let calculatedHeight = row.rowBreakHeight > 0.0 ? row.rowBreakHeight : row.height;
            if (this.currentBounds.y + calculatedHeight > this.currentPageBounds.height ||
                this.currentBounds.y + calculatedHeight > (this.currentBounds.height + this.startLocation.y) ||
                this.currentBounds.y + rowHeightWithSpan > this.currentPageBounds.height) {
                // If a row is repeated and still cannot fit in page, proceed draw.
                // if (PdfGrid.repeatRowIndex > -1 && PdfGrid.repeatRowIndex === row.RowIndex) {
                //     if (this.AllowRowBreakAcrossPages) {
                //         result.IsFinish = true;
                //         // this.DrawRowWithBreak(ref result, row, height);
                //     } else {
                //         result.IsFinish = false;
                //         this.drawRow(row, result, height);
                //     }
                // } else {
                result.isFinish = false;
                // }
            }
            else {
                result.isFinish = true;
                this.drawRow(row, result, calculatedHeight);
            }
            return result;
        }
        else {
            let location = new PointF(this.currentBounds.x, this.currentBounds.y);
            result.bounds = new RectangleF(location, new SizeF(0, 0));
            height = this.ReCalculateHeight(row, height);
            for (let i = this.cellStartIndex; i <= this.cellEndIndex; i++) {
                let cancelSpans = ((i > this.cellEndIndex + 1) && (row.cells.getCell(i).columnSpan > 1));
                // let cancelSpans : boolean = false;
                if (!cancelSpans) {
                    for (let j = 1; j < row.cells.getCell(i).columnSpan; j++) {
                        row.cells.getCell(i + j).isCellMergeContinue = true;
                    }
                }
                let size = new SizeF(this.columns.getColumn(i).width, height);
                // if (size.width > this.currentGraphics.ClientSize.width) {
                //     size.width = this.currentGraphics.ClientSize.width;
                // }
                // if (this.IsChildGrid && this.style.AllowHorizontalOverflow) {
                //     if (size.width >= this.currentGraphics.ClientSize.width) {
                //         size.width -= 2 * this.currentBounds.x;
                //     }
                // }
                /* tslint:disable */
                if (!this.CheckIfDefaultFormat(this.columns.getColumn(i).format) &&
                    this.CheckIfDefaultFormat(row.cells.getCell(i).stringFormat)) {
                    row.cells.getCell(i).stringFormat = this.columns.getColumn(i).format;
                }
                let cellstyle = row.cells.getCell(i).style;
                let tempValue = ((typeof row.cells.getCell(i).value === 'string' &&
                    row.cells.getCell(i).value !== null) ? row.cells.getCell(i).value : '');
                row.cells.getCell(i).style = this.RaiseBeforeCellDraw(this.currentGraphics, this.currentRowIndex, i, new RectangleF(location, size), tempValue, cellstyle);
                // if (!skipcell) {
                // let stringResult : PdfStringLayoutResult = row.cells.getCell(i).draw(this.currentGraphics, new RectangleF(location, size), cancelSpans);
                let stringResult = row.cells.getCell(i).draw(this.currentGraphics, new RectangleF(location, size), cancelSpans);
                if (row.grid.style.allowHorizontalOverflow && (row.cells.getCell(i).columnSpan > this.cellEndIndex || i + row.cells.getCell(i).columnSpan > this.cellEndIndex + 1) && this.cellEndIndex < row.cells.count - 1) {
                    row.rowOverflowIndex = this.cellEndIndex;
                }
                if (row.grid.style.allowHorizontalOverflow && (row.rowOverflowIndex > 0 && (row.cells.getCell(i).columnSpan > this.cellEndIndex || i + row.cells.getCell(i).columnSpan > this.cellEndIndex + 1)) && row.cells.getCell(i).columnSpan - this.cellEndIndex + i - 1 > 0) {
                    row.cells.getCell(row.rowOverflowIndex + 1).value = stringResult !== null ? (stringResult.remainder !== undefined) ? stringResult.remainder : '' : '';
                    row.cells.getCell(row.rowOverflowIndex + 1).stringFormat = row.cells.getCell(i).stringFormat;
                    row.cells.getCell(row.rowOverflowIndex + 1).style = row.cells.getCell(i).style;
                    row.cells.getCell(row.rowOverflowIndex + 1).columnSpan = row.cells.getCell(i).columnSpan - this.cellEndIndex + i - 1;
                }
                // }
                /* tslint:enable */
                tempValue = ((typeof row.cells.getCell(i).value === 'string' &&
                    row.cells.getCell(i).value !== null) ? row.cells.getCell(i).value : '');
                this.RaiseAfterCellDraw(this.currentGraphics, this.currentRowIndex, i, new RectangleF(location, size), tempValue, row.cells.getCell(i).style);
                location.x += this.columns.getColumn(i).width;
            }
            // if (!row.RowMergeComplete || row.isRowHeightSet) {
            this.currentBounds.y += height;
            // }
            result.bounds = new RectangleF(new PointF(result.bounds.x, result.bounds.y), new SizeF(location.x, location.y));
        }
    }
    /**
     * Checks if the given format `is default format` or not.
     * @private
     */
    CheckIfDefaultFormat(format) {
        let defaultFormat = new PdfStringFormat();
        return (format.alignment === defaultFormat.alignment && format.characterSpacing === defaultFormat.characterSpacing &&
            format.clipPath === defaultFormat.clipPath && format.firstLineIndent === defaultFormat.firstLineIndent &&
            format.horizontalScalingFactor === defaultFormat.horizontalScalingFactor &&
            format.lineAlignment === defaultFormat.lineAlignment
            && format.lineLimit === defaultFormat.lineLimit && format.lineSpacing === defaultFormat.lineSpacing &&
            format.measureTrailingSpaces === defaultFormat.measureTrailingSpaces && format.noClip === defaultFormat.noClip &&
            format.paragraphIndent === defaultFormat.paragraphIndent && format.rightToLeft === defaultFormat.rightToLeft &&
            format.subSuperScript === defaultFormat.subSuperScript && format.wordSpacing === defaultFormat.wordSpacing &&
            format.wordWrap === defaultFormat.wordWrap);
    }
    /**
     * `Raises BeforeCellDraw event`.
     * @private
     */
    RaiseBeforeCellDraw(graphics, rowIndex, cellIndex, bounds, value, style) {
        let args = null;
        if (this.raiseBeginCellDraw) {
            args = new PdfGridBeginCellDrawEventArgs(graphics, rowIndex, cellIndex, bounds, value, style);
            this.beginCellDraw(this, args);
            style = args.style;
        }
        return style;
    }
    /**
     * `Raises AfterCellDraw event`.
     * @private
     */
    RaiseAfterCellDraw(graphics, rowIndex, cellIndex, bounds, value, cellstyle) {
        let args = null;
        if (this.raiseEndCellDraw) {
            args = new PdfGridEndCellDrawEventArgs(graphics, rowIndex, cellIndex, bounds, value, cellstyle);
            this.endCellDraw(this, args);
        }
    }
    /**
     * `Rearranges the pages`.
     * @private
     */
    reArrangePages(layoutedPages) {
        let document = this.currentPage.document;
        let pages = [];
        let keys = layoutedPages.keys();
        let values = layoutedPages.values();
        for (let i = 0; i < keys.length; i++) {
            let page = keys[i];
            page.section = null;
            pages.push(page);
            document.pages.remove(page);
        }
        /* tslint:disable */
        for (let i = 0; i < layoutedPages.size(); i++) {
            for (let j = i, count = (layoutedPages.size() / this.columnRanges.length); j < layoutedPages.size(); j += count) {
                let page = pages[j];
                if (document.pages.indexOf(page) === -1) {
                    document.pages.add(page);
                }
            }
        }
        /* tslint:enable */
    }
}
/**
 * @hidden
 * @private
 */
PdfGrid.repeatRowIndex = -1;
/**
 * `GridCellEventArgs` class is alternate for grid events.
 */
class GridCellEventArgs {
    // Properties
    /**
     * Gets the value of current `row index`.
     * @private
     */
    get rowIndex() {
        return this.gridRowIndex;
    }
    /**
     * Gets the value of current `cell index`.
     * @private
     */
    get cellIndex() {
        return this.gridCellIndex;
    }
    /**
     * Gets the actual `value` of current cell.
     * @private
     */
    get value() {
        return this.internalValue;
    }
    /**
     * Gets the `bounds` of current cell.
     * @private
     */
    get bounds() {
        return this.gridBounds;
    }
    /**
     * Gets the instance of `current graphics`.
     * @private
     */
    get graphics() {
        return this.pdfGraphics;
    }
    // Constructors
    /**
     * Initialize a new instance for `GridCellEventArgs` class.
     * @private
     */
    constructor(graphics, rowIndex, cellIndex, bounds, value) {
        this.gridRowIndex = rowIndex;
        this.gridCellIndex = cellIndex;
        this.internalValue = value;
        this.gridBounds = bounds;
        this.pdfGraphics = graphics;
    }
}
/**
 * `PdfGridBeginCellDrawEventArgs` class is alternate for begin cell draw events.
 */
class PdfGridBeginCellDrawEventArgs extends GridCellEventArgs {
    // Properties
    /**
     * Gets or sets a value indicating whether the value of this cell should be `skipped`.
     * @private
     */
    get skip() {
        return this.bSkip;
    }
    set skip(value) {
        this.bSkip = value;
    }
    /**
     * Gets or sets a `style` value of the cell.
     * @private
     */
    get style() {
        return this.cellStyle;
    }
    set style(value) {
        this.cellStyle = value;
    }
    // Constructors
    /**
     * Initializes a new instance of the `StartCellLayoutEventArgs` class.
     * @private
     */
    constructor(graphics, rowIndex, cellIndex, bounds, value, style) {
        super(graphics, rowIndex, cellIndex, bounds, value);
        this.style = style;
    }
}
/**
 * `PdfGridEndCellDrawEventArgs` class is alternate for end cell draw events.
 */
class PdfGridEndCellDrawEventArgs extends GridCellEventArgs {
    // Propertise
    /**
     * Get the `PdfGridCellStyle`.
     * @private
     */
    get style() {
        return this.cellStyle;
    }
    // Constructors
    /**
     * Initializes a new instance of the `PdfGridEndCellLayoutEventArgs` class.
     * @private
     */
    constructor(graphics, rowIndex, cellIndex, bounds, value, style) {
        super(graphics, rowIndex, cellIndex, bounds, value);
        this.cellStyle = style;
    }
}
/**
 * `PdfGridCancelEventArgs` class is alternate for cancel events.
 */
class PdfCancelEventArgs {
    // Properties
    /**
     * Gets and Sets the value of `cancel`.
     * @private
     */
    get cancel() {
        return this.isCancel;
    }
    set cancel(value) {
        this.isCancel = value;
    }
}
/**
 * `BeginPageLayoutEventArgs` class is alternate for begin page layout events.
 */
class BeginPageLayoutEventArgs extends PdfCancelEventArgs {
    // Properties
    /**
     * Gets or sets value that indicates the lay outing `bounds` on the page.
     * @private
     */
    get bounds() {
        return this.cellBounds;
    }
    set bounds(value) {
        this.cellBounds = value;
    }
    /**
     * Gets the `page` where the lay outing should start.
     * @private
     */
    get page() {
        return this.pdfPage;
    }
    // Constructors
    /**
     * Initializes a new instance of the `BeginPageLayoutEventArgs` class with the specified rectangle and page.
     * @private
     */
    constructor(bounds, page) {
        super();
        this.bounds = bounds;
        this.pdfPage = page;
    }
}
/**
 * `EndPageLayoutEventArgs` class is alternate for end page layout events.
 */
class EndPageLayoutEventArgs extends PdfCancelEventArgs {
    // Properties
    /**
     * Gets the lay outing `result` of the page.
     * @private
     */
    get result() {
        return this.layoutResult;
    }
    /**
     * Gets or sets a value indicating the `next page` where the element should be layout.
     * @private
     */
    get nextPage() {
        return this.nextPdfPage;
    }
    set nextPage(value) {
        this.nextPdfPage = value;
    }
    // Constructors
    /**
     * Initializes a new instance of the `EndPageLayoutEventArgs` class. with the specified 'PdfLayoutResult'.
     * @private
     */
    constructor(result) {
        super();
        this.layoutResult = result;
    }
}
/**
 * `PdfGridBeginPageLayoutEventArgs` class is alternate for begin page layout events.
 */
class PdfGridBeginPageLayoutEventArgs extends BeginPageLayoutEventArgs {
    // Properties
    /**
     * Gets the `start row index`.
     * @private
     */
    get startRowIndex() {
        return this.startRow;
    }
    // Constructors
    /**
     * Initialize a new instance of `PdfGridBeginPageLayoutEventArgs` class.
     * @private
     */
    constructor(bounds, page, startRow) {
        super(bounds, page);
        this.startRow = startRow;
    }
}
/**
 * `PdfGridEndPageLayoutEventArgs` class is alternate for begin page layout events.
 */
class PdfGridEndPageLayoutEventArgs extends EndPageLayoutEventArgs {
    // Constructors
    /**
     * Initialize a new instance of `PdfGridEndPageLayoutEventArgs` class.
     * @private
     */
    constructor(result) {
        super(result);
    }
}
/**
 * `RowLayoutResult` class to store layout result of rows.
 */
class RowLayoutResult {
    /**
     * Gets or sets a value indicating whether this instance `is finish`.
     * @private
     */
    get isFinish() {
        return this.bIsFinished;
    }
    set isFinish(value) {
        this.bIsFinished = value;
    }
    /**
     * Gets or sets the `bounds`.
     * @private
     */
    get bounds() {
        return this.layoutedBounds;
    }
    set bounds(value) {
        this.layoutedBounds = value;
    }
    //Constructors
    /**
     * Initializes a new instance of the `RowLayoutResult` class.
     * @private
     */
    constructor() {
        this.layoutedBounds = new RectangleF(0, 0, 0, 0);
    }
}
/**
 * `PdfGridLayoutResult` class represents the results of the PdfGrid including bounds and resultant page.
 */
class PdfGridLayoutResult extends PdfLayoutResult {
    // Constructor
    /**
     * Initializes a new instance of the `PdfGridLayoutResult` class with the current page and bounds.
     * @private
     */
    constructor(page, bounds) {
        super(page, bounds);
    }
}

/**
 * Pdf all modules
 * @hidden
 */

export { PdfAction, PdfUriAction, PdfActionLinkAnnotation, PdfAnnotation, PdfAnnotationCollection, PdfDocumentLinkAnnotation, PdfLinkAnnotation, PdfTextWebLink, PdfUriAnnotation, Dictionary, defaultToString, PdfCatalog, PdfDocument, PdfDocumentBase, PdfDocumentTemplate, PdfPageNumberField, PdfCompositeField, PdfPageCountField, PointF, SizeF, RectangleF, PdfCacheCollection, PdfCollection, PdfDestination, PdfDestinationMode, ProcedureSets, PdfHorizontalAlignment, PdfVerticalAlignment, PdfTextAlignment, TextRenderingMode, PdfLineJoin, PdfLineCap, PdfDashStyle, PdfFillMode, PdfColorSpace, PdfBlendMode, PdfGraphicsUnit, PdfGridImagePosition, PdfColor, PdfGraphics, GetResourceEventHandler, PdfGraphicsState, PdfMargins, PdfPen, PdfResources, Guid, PdfTransformationMatrix, Matrix, PdfBrush, PdfSolidBrush, PdfTemplate, PdfLayoutElement, PdfTextElement, ElementLayouter, PdfLayoutFormat, PdfLayoutParams, PdfLayoutResult, TextLayouter, TextPageLayoutResult, PdfTextLayoutResult, PdfLayoutType, PdfLayoutBreakType, PdfFontStyle, PdfFontFamily, PdfFontType, PdfWordWrapType, PdfSubSuperScript, FontEncoding, PdfFont, PdfFontMetrics, WidthTable, StandardWidthTable, PdfStandardFont, PdfStandardFontMetricsFactory, PdfStringFormat, PdfStringLayouter, PdfStringLayoutResult, LineInfo, LineType, StringTokenizer, ByteArray, ImageFormat, ImageDecoder, PdfBitmap, PdfImage, PdfTransparency, ObjectStatus, ObjectType, PdfCrossTable, RegisteredObject, DictionaryProperties, PdfMainObjectCollection, ObjectInfo, Operators, PdfStreamWriter, PdfWriter, PdfPageOrientation, PdfPageRotateAngle, PdfNumberStyle, PdfDockStyle, PdfAlignmentStyle, TemplateType, PageAddedEventArgs, PdfDocumentPageCollection, PdfPage, PdfPageBase, PdfPageLayer, PdfPageLayerCollection, PdfPageSettings, PdfPageSize, PdfPageTemplateElement, PdfSection, PageSettingsState, PdfSectionCollection, PdfSectionPageCollection, PdfSectionTemplate, PdfArray, PdfDictionary, SaveSectionCollectionEventHandler, SaveAnnotationEventHandler, SaveSectionEventHandler, SaveTemplateEventHandler, PdfName, PdfNumber, PdfReference, PdfReferenceHolder, PdfStream, InternalEnum, PdfString, PdfGridStyleBase, PdfGridStyle, PdfGridCellStyle, PdfGridRowStyle, PdfHorizontalOverflowType, PdfBorders, PdfPaddings, PdfBorderOverlapStyle, PdfGridLayoutFormat, PdfGrid, GridCellEventArgs, PdfGridBeginCellDrawEventArgs, PdfGridEndCellDrawEventArgs, PdfCancelEventArgs, BeginPageLayoutEventArgs, EndPageLayoutEventArgs, PdfGridBeginPageLayoutEventArgs, PdfGridEndPageLayoutEventArgs, RowLayoutResult, PdfGridLayoutResult, PdfGridColumn, PdfGridColumnCollection, PdfGridRow, PdfGridRowCollection, PdfGridHeaderCollection, PdfGridCell, PdfGridCellCollection };
//# sourceMappingURL=ej2-pdf-export.es2015.js.map
