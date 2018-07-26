'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Encoding, Save, StreamWriter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    /**
     * To check the object is null or undefined and throw error if it is null or undefined
     * @param {Object} value - object to check is null or undefined
     * @return {boolean}
     * @throws {ArgumentException} - if the value is null or undefined
     * @private
     */
    function validateNullOrUndefined(value, message) {
        if (value === null || value === undefined) {
            throw new Error('ArgumentException: ' + message + ' cannot be null or undefined');
        }
    }

    /**
     * Save class provide method to save file
     * ```typescript
     * let blob : Blob = new Blob([''], { type: 'text/plain' });
     * Save.save('fileName.txt',blob);
     */
    return {
        setters: [],
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

            _export('Encoding', Encoding = function () {
                /**
                 * Initializes a new instance of the Encoding class. A parameter specifies whether to write a Unicode byte order mark
                 * @param  {boolean} includeBom?-true to specify that a Unicode byte order mark is written; otherwise, false.
                 */
                function Encoding(includeBom) {
                    _classCallCheck(this, Encoding);

                    this.emitBOM = true;
                    this.encodingType = 'Ansi';
                    this.initBOM(includeBom);
                }
                /**
                 * Gets a value indicating whether to write a Unicode byte order mark
                 * @returns boolean- true to specify that a Unicode byte order mark is written; otherwise, false
                 */


                _createClass(Encoding, [{
                    key: 'initBOM',
                    value: function initBOM(includeBom) {
                        if (includeBom === undefined || includeBom === null) {
                            this.emitBOM = true;
                        } else {
                            this.emitBOM = includeBom;
                        }
                    }
                }, {
                    key: 'getByteCount',
                    value: function getByteCount(chars) {
                        validateNullOrUndefined(chars, 'string');
                        if (chars === '') {
                            var byte = this.utf8Len(chars.charCodeAt(0));
                            return byte;
                        }
                        if (this.type === null || this.type === undefined) {
                            this.type = 'Ansi';
                        }
                        return this.getByteCountInternal(chars, 0, chars.length);
                    }
                }, {
                    key: 'utf8Len',
                    value: function utf8Len(codePoint) {
                        var bytes = codePoint <= 0x7F ? 1 : codePoint <= 0x7FF ? 2 : codePoint <= 0xFFFF ? 3 : codePoint <= 0x1FFFFF ? 4 : 0;
                        return bytes;
                    }
                }, {
                    key: 'isHighSurrogate',
                    value: function isHighSurrogate(codeUnit) {
                        return codeUnit >= 0xD800 && codeUnit <= 0xDBFF;
                    }
                }, {
                    key: 'toCodepoint',
                    value: function toCodepoint(highCodeUnit, lowCodeUnit) {
                        highCodeUnit = (0x3FF & highCodeUnit) << 10;
                        var u = highCodeUnit | 0x3FF & lowCodeUnit;
                        return u + 0x10000;
                    }
                }, {
                    key: 'getByteCountInternal',
                    value: function getByteCountInternal(chars, charIndex, charCount) {
                        var byteCount = 0;
                        if (this.encodingType === 'Utf8' || this.encodingType === 'Unicode') {
                            var isUtf8 = this.encodingType === 'Utf8';
                            for (var i = 0; i < charCount; i++) {
                                var charCode = chars.charCodeAt(isUtf8 ? charIndex : charIndex++);
                                if (this.isHighSurrogate(charCode)) {
                                    if (isUtf8) {
                                        var high = charCode;
                                        var low = chars.charCodeAt(++charIndex);
                                        byteCount += this.utf8Len(this.toCodepoint(high, low));
                                    } else {
                                        byteCount += 4;
                                        ++i;
                                    }
                                } else {
                                    if (isUtf8) {
                                        byteCount += this.utf8Len(charCode);
                                    } else {
                                        byteCount += 2;
                                    }
                                }
                                if (isUtf8) {
                                    charIndex++;
                                }
                            }
                            return byteCount;
                        } else {
                            byteCount = charCount;
                            return byteCount;
                        }
                    }
                }, {
                    key: 'getBytes',
                    value: function getBytes(s, charIndex, charCount) {
                        validateNullOrUndefined(s, 'string');
                        validateNullOrUndefined(charIndex, 'charIndex');
                        validateNullOrUndefined(charCount, 'charCount');
                        if (charIndex < 0 || charCount < 0) {
                            throw new RangeError('Argument Out Of Range Exception: charIndex or charCount is less than zero');
                        }
                        if (s.length - charIndex < charCount) {
                            throw new RangeError('Argument Out Of Range Exception: charIndex and charCount do not denote a valid range in string');
                        }
                        var bytes = void 0;
                        if (s === '') {
                            bytes = new ArrayBuffer(0);
                            return bytes;
                        }
                        if (this.type === null || this.type === undefined) {
                            this.type = 'Ansi';
                        }
                        var byteCount = this.getByteCountInternal(s, charIndex, charCount);
                        switch (this.type) {
                            case 'Utf8':
                                bytes = this.getBytesOfUtf8Encoding(byteCount, s, charIndex, charCount);
                                return bytes;
                            case 'Unicode':
                                bytes = this.getBytesOfUnicodeEncoding(byteCount, s, charIndex, charCount);
                                return bytes;
                            default:
                                bytes = this.getBytesOfAnsiEncoding(byteCount, s, charIndex, charCount);
                                return bytes;
                        }
                    }
                }, {
                    key: 'getString',
                    value: function getString(bytes, index, count) {
                        validateNullOrUndefined(bytes, 'bytes');
                        validateNullOrUndefined(index, 'index');
                        validateNullOrUndefined(count, 'count');
                        if (index < 0 || count < 0) {
                            throw new RangeError('Argument Out Of Range Exception: index or count is less than zero');
                        }
                        if (bytes.byteLength - index < count) {
                            throw new RangeError('Argument Out Of Range Exception: index and count do not denote a valid range in bytes');
                        }
                        if (bytes.byteLength === 0 || count === 0) {
                            return '';
                        }
                        if (this.type === null || this.type === undefined) {
                            this.type = 'Ansi';
                        }
                        var out = '';
                        var byteCal = new Uint8Array(bytes);
                        switch (this.type) {
                            case 'Utf8':
                                var s = this.getStringOfUtf8Encoding(byteCal, index, count);
                                return s;
                            case 'Unicode':
                                var byteUnicode = new Uint16Array(bytes);
                                out = this.getStringofUnicodeEncoding(byteUnicode, index, count);
                                return out;
                            default:
                                var j = index;
                                for (var i = 0; i < count; i++) {
                                    var c = byteCal[j];
                                    out += String.fromCharCode(c); // 1 byte(ASCII) character                  
                                    j++;
                                }
                                return out;
                        }
                    }
                }, {
                    key: 'getBytesOfAnsiEncoding',
                    value: function getBytesOfAnsiEncoding(byteCount, s, charIndex, charCount) {
                        var bytes = new ArrayBuffer(byteCount);
                        var bufview = new Uint8Array(bytes);
                        var k = 0;
                        for (var i = 0; i < charCount; i++) {
                            var charcode = s.charCodeAt(charIndex++);
                            if (charcode < 0x800) {
                                bufview[k] = charcode;
                            } else {
                                bufview[k] = 63; //replacement character '?'
                            }
                            k++;
                        }
                        return bytes;
                    }
                }, {
                    key: 'getBytesOfUtf8Encoding',
                    value: function getBytesOfUtf8Encoding(byteCount, s, charIndex, charCount) {
                        var bytes = new ArrayBuffer(byteCount);
                        var uint = new Uint8Array(bytes);
                        var index = charIndex;
                        var j = 0;
                        for (var i = 0; i < charCount; i++) {
                            var charcode = s.charCodeAt(index);
                            if (charcode <= 0x7F) {
                                uint[j] = charcode;
                            } else if (charcode < 0x800) {
                                uint[j] = 0xc0 | charcode >> 6;
                                uint[++j] = 0x80 | charcode & 0x3f;
                            } else if (charcode < 0xd800 || charcode >= 0xe000) {
                                uint[j] = 0xe0 | charcode >> 12;
                                uint[++j] = 0x80 | charcode >> 6 & 0x3f;
                                uint[++j] = 0x80 | charcode & 0x3f;
                            } else {
                                uint[j] = 0xef;
                                uint[++j] = 0xbf;
                                uint[++j] = 0xbd; // U+FFFE "replacement character"
                            }
                            ++j;
                            ++index;
                        }
                        return bytes;
                    }
                }, {
                    key: 'getBytesOfUnicodeEncoding',
                    value: function getBytesOfUnicodeEncoding(byteCount, s, charIndex, charCount) {
                        var bytes = new ArrayBuffer(byteCount);
                        var uint16 = new Uint16Array(bytes);
                        for (var i = 0; i < charCount; i++) {
                            var charcode = s.charCodeAt(i);
                            uint16[i] = charcode;
                        }
                        return bytes;
                    }
                }, {
                    key: 'getStringOfUtf8Encoding',
                    value: function getStringOfUtf8Encoding(byteCal, index, count) {
                        var j = 0;
                        var i = index;
                        var s = '';
                        for (j; j < count; j++) {
                            var c = byteCal[i++];
                            while (i > byteCal.length) {
                                return s;
                            }
                            if (c > 127) {
                                if (c > 191 && c < 224 && i < count) {
                                    c = (c & 31) << 6 | byteCal[i] & 63;
                                } else if (c > 223 && c < 240 && i < byteCal.byteLength) {
                                    c = (c & 15) << 12 | (byteCal[i] & 63) << 6 | byteCal[++i] & 63;
                                } else if (c > 239 && c < 248 && i < byteCal.byteLength) {
                                    c = (c & 7) << 18 | (byteCal[i] & 63) << 12 | (byteCal[++i] & 63) << 6 | byteCal[++i] & 63;
                                }
                                ++i;
                            }
                            s += String.fromCharCode(c); // 1 byte(ASCII) character                          
                        }
                        return s;
                    }
                }, {
                    key: 'getStringofUnicodeEncoding',
                    value: function getStringofUnicodeEncoding(byteUni, index, count) {
                        if (count > byteUni.length) {
                            throw new RangeError('ArgumentOutOfRange_Count');
                        }
                        var byte16 = new Uint16Array(count);
                        var out = '';
                        for (var i = 0; i < count && i < byteUni.length; i++) {
                            byte16[i] = byteUni[index++];
                        }
                        out = String.fromCharCode.apply(null, byte16);
                        return out;
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.emitBOM = undefined;
                        this.encodingType = undefined;
                    }
                }, {
                    key: 'includeBom',
                    get: function get() {
                        return this.emitBOM;
                    }
                }, {
                    key: 'type',
                    get: function get() {
                        return this.encodingType;
                    },
                    set: function set(value) {
                        this.encodingType = value;
                    }
                }]);

                return Encoding;
            }());

            _export('Save', Save = function () {
                /**
                 * Initialize new instance of {save}
                 */
                function Save() {
                    _classCallCheck(this, Save);
                }
                // tslint:disable

                /**
                 * Saves the file with specified name and sends the file to client browser
                 * @param  {string} fileName- file name to save.
                 * @param  {Blob} buffer- the content to write in file
                 * @param  {boolean} isMicrosoftBrowser- specify whether microsoft browser or not
                 * @returns {void}
                 */


                _createClass(Save, null, [{
                    key: 'save',
                    value: function save(fileName, buffer) {
                        if (fileName === null || fileName === undefined || fileName === '') {
                            throw new Error('ArgumentException: fileName cannot be undefined, null or empty');
                        }
                        var extension = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length);
                        var mimeType = this.getMimeType(extension);
                        if (mimeType !== '') {
                            buffer = new Blob([buffer], { type: mimeType });
                        }
                        if (this.isMicrosoftBrowser) {
                            navigator.msSaveBlob(buffer, fileName);
                        } else {
                            var downloadLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                            this.saveInternal(fileName, extension, buffer, downloadLink, 'download' in downloadLink);
                        }
                    }
                }, {
                    key: 'saveInternal',
                    value: function saveInternal(fileName, extension, buffer, downloadLink, hasDownloadAttribute) {
                        if (hasDownloadAttribute) {
                            downloadLink.download = fileName;
                            var dataUrl = window.URL.createObjectURL(buffer);
                            downloadLink.href = dataUrl;
                            var event = document.createEvent('MouseEvent');
                            event.initEvent('click', true, true);
                            downloadLink.dispatchEvent(event);
                            setTimeout(function () {
                                window.URL.revokeObjectURL(dataUrl);
                                dataUrl = undefined;
                            });
                        } else {
                            if (extension !== 'docx' && extension !== 'xlsx') {
                                var url = window.URL.createObjectURL(buffer);
                                var isPopupBlocked = window.open(url, '_blank');
                                if (!isPopupBlocked) {
                                    window.location.href = url;
                                }
                            } else {
                                var reader = new FileReader();
                                reader.onloadend = function () {
                                    var isPopupBlocked = window.open(reader.result, '_blank');
                                    if (!isPopupBlocked) {
                                        window.location.href = reader.result;
                                    }
                                };
                                reader.readAsDataURL(buffer);
                            }
                        }
                    }
                }, {
                    key: 'getMimeType',
                    value: function getMimeType(extension) {
                        var mimeType = '';
                        switch (extension) {
                            case 'html':
                                mimeType = 'text/html';
                                break;
                            case 'pdf':
                                mimeType = 'application/pdf';
                                break;
                            case 'docx':
                                mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                                break;
                            case 'xlsx':
                                mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                                break;
                            case 'txt':
                                mimeType = 'text/plain';
                                break;
                        }
                        return mimeType;
                    }
                }]);

                return Save;
            }());

            _export('StreamWriter', StreamWriter = function () {
                _createClass(StreamWriter, [{
                    key: 'buffer',
                    get: function get() {
                        this.flush();
                        return this.bufferBlob;
                    }
                }, {
                    key: 'encoding',
                    get: function get() {
                        return this.enc;
                    }
                }]);

                /**
                 * Initializes a new instance of the StreamWriter class by using the specified encoding.
                 * @param  {Encoding} encoding?- The character encoding to use.
                 */
                function StreamWriter(encoding) {
                    _classCallCheck(this, StreamWriter);

                    this.bufferBlob = new Blob(['']);
                    this.bufferText = '';
                    this.init(encoding);
                    Save.isMicrosoftBrowser = !!navigator.msSaveBlob;
                }

                _createClass(StreamWriter, [{
                    key: 'init',
                    value: function init(encoding) {
                        if (encoding === null || encoding === undefined) {
                            this.enc = new Encoding(false);
                            this.enc.type = 'Utf8';
                        } else {
                            this.enc = encoding;
                            this.setBomByte();
                        }
                    }
                }, {
                    key: 'setBomByte',
                    value: function setBomByte() {
                        if (this.encoding.includeBom) {
                            switch (this.encoding.type) {
                                case 'Unicode':
                                    var arrayUnicode = new ArrayBuffer(2);
                                    var uint8 = new Uint8Array(arrayUnicode);
                                    uint8[0] = 255;
                                    uint8[1] = 254;
                                    this.bufferBlob = new Blob([arrayUnicode]);
                                    break;
                                case 'Utf8':
                                    var arrayUtf8 = new ArrayBuffer(3);
                                    var utf8 = new Uint8Array(arrayUtf8);
                                    utf8[0] = 239;
                                    utf8[1] = 187;
                                    utf8[2] = 191;
                                    this.bufferBlob = new Blob([arrayUtf8]);
                                    break;
                                default:
                                    this.bufferBlob = new Blob(['']);
                                    break;
                            }
                        }
                    }
                }, {
                    key: 'save',
                    value: function save(fileName) {
                        if (this.bufferText !== '') {
                            this.flush();
                        }
                        Save.save(fileName, this.buffer);
                    }
                }, {
                    key: 'write',
                    value: function write(value) {
                        if (this.encoding === undefined) {
                            throw new Error('Object Disposed Exception: current writer is disposed');
                        }
                        validateNullOrUndefined(value, 'string');
                        this.bufferText += value;
                        if (this.bufferText.length >= 10240) {
                            this.flush();
                        }
                    }
                }, {
                    key: 'flush',
                    value: function flush() {
                        if (this.bufferText === undefined || this.bufferText === null || this.bufferText.length === 0) {
                            return;
                        }
                        var bufferArray = this.encoding.getBytes(this.bufferText, 0, this.bufferText.length);
                        this.bufferText = '';
                        this.bufferBlob = new Blob([this.bufferBlob, bufferArray]);
                    }
                }, {
                    key: 'writeLine',
                    value: function writeLine(value) {
                        if (this.encoding === undefined) {
                            throw new Error('Object Disposed Exception: current writer is disposed');
                        }
                        validateNullOrUndefined(value, 'string');
                        this.bufferText = this.bufferText + value + '\r\n';
                        if (this.bufferText.length >= 10240) {
                            this.flush();
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.bufferBlob = undefined;
                        this.bufferText = undefined;
                        if (this.enc instanceof Encoding) {
                            this.enc.destroy();
                        }
                        this.enc = undefined;
                    }
                }]);

                return StreamWriter;
            }());

            _export('StreamWriter', StreamWriter);

            _export('Encoding', Encoding);

            _export('validateNullOrUndefined', validateNullOrUndefined);

            _export('Save', Save);
        }
    };
});

//# sourceMappingURL=ej2-file-utils.es2015-compiled.js.map