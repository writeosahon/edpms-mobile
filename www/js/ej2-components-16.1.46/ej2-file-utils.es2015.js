/**
 * Encoding class: Contains the details about encoding type, whether to write a Unicode byte order mark (BOM).
 * ```typescript
 * let encoding : Encoding = new Encoding();
 * encoding.type = 'Utf8';
 * encoding.getBytes('Encoding', 0, 5);
 * ```
 */
class Encoding {
    /**
     * Initializes a new instance of the Encoding class. A parameter specifies whether to write a Unicode byte order mark
     * @param  {boolean} includeBom?-true to specify that a Unicode byte order mark is written; otherwise, false.
     */
    constructor(includeBom) {
        this.emitBOM = true;
        this.encodingType = 'Ansi';
        this.initBOM(includeBom);
    }
    /**
     * Gets a value indicating whether to write a Unicode byte order mark
     * @returns boolean- true to specify that a Unicode byte order mark is written; otherwise, false
     */
    get includeBom() {
        return this.emitBOM;
    }
    /**
     * Gets the encoding type.
     * @returns EncodingType
     */
    get type() {
        return this.encodingType;
    }
    /**
     * Sets the encoding type.
     * @param  {EncodingType} value
     */
    set type(value) {
        this.encodingType = value;
    }
    /**
     * Initialize the includeBom to emit BOM or Not
     * @param  {boolean} includeBom
     */
    initBOM(includeBom) {
        if (includeBom === undefined || includeBom === null) {
            this.emitBOM = true;
        }
        else {
            this.emitBOM = includeBom;
        }
    }
    /**
     * Calculates the number of bytes produced by encoding the characters in the specified string
     * @param  {string} chars - The string containing the set of characters to encode
     * @returns {number} - The number of bytes produced by encoding the specified characters
     */
    getByteCount(chars) {
        validateNullOrUndefined(chars, 'string');
        if (chars === '') {
            let byte = this.utf8Len(chars.charCodeAt(0));
            return byte;
        }
        if (this.type === null || this.type === undefined) {
            this.type = 'Ansi';
        }
        return this.getByteCountInternal(chars, 0, chars.length);
    }
    /**
     * Return the Byte of character
     * @param  {number} codePoint
     * @returns {number}
     */
    utf8Len(codePoint) {
        let bytes = codePoint <= 0x7F ? 1 :
            codePoint <= 0x7FF ? 2 :
                codePoint <= 0xFFFF ? 3 :
                    codePoint <= 0x1FFFFF ? 4 : 0;
        return bytes;
    }
    /**
     * for 4 byte character return surrogate pair true, otherwise false
     * @param  {number} codeUnit
     * @returns {boolean}
     */
    isHighSurrogate(codeUnit) {
        return codeUnit >= 0xD800 && codeUnit <= 0xDBFF;
    }
    /**
     * for 4byte character generate the surrogate pair
     * @param  {number} highCodeUnit
     * @param  {number} lowCodeUnit
     */
    toCodepoint(highCodeUnit, lowCodeUnit) {
        highCodeUnit = (0x3FF & highCodeUnit) << 10;
        let u = highCodeUnit | (0x3FF & lowCodeUnit);
        return u + 0x10000;
    }
    /**
     * private method to get the byte count for specific charindex and count
     * @param  {string} chars
     * @param  {number} charIndex
     * @param  {number} charCount
     */
    getByteCountInternal(chars, charIndex, charCount) {
        let byteCount = 0;
        if (this.encodingType === 'Utf8' || this.encodingType === 'Unicode') {
            let isUtf8 = this.encodingType === 'Utf8';
            for (let i = 0; i < charCount; i++) {
                let charCode = chars.charCodeAt(isUtf8 ? charIndex : charIndex++);
                if (this.isHighSurrogate(charCode)) {
                    if (isUtf8) {
                        let high = charCode;
                        let low = chars.charCodeAt(++charIndex);
                        byteCount += this.utf8Len(this.toCodepoint(high, low));
                    }
                    else {
                        byteCount += 4;
                        ++i;
                    }
                }
                else {
                    if (isUtf8) {
                        byteCount += this.utf8Len(charCode);
                    }
                    else {
                        byteCount += 2;
                    }
                }
                if (isUtf8) {
                    charIndex++;
                }
            }
            return byteCount;
        }
        else {
            byteCount = charCount;
            return byteCount;
        }
    }
    /**
     * Encodes a set of characters from the specified string into the ArrayBuffer.
     * @param  {string} s- The string containing the set of characters to encode
     * @param  {number} charIndex-The index of the first character to encode.
     * @param  {number} charCount- The number of characters to encode.
     * @returns {ArrayBuffer} - The ArrayBuffer that contains the resulting sequence of bytes.
     */
    getBytes(s, charIndex, charCount) {
        validateNullOrUndefined(s, 'string');
        validateNullOrUndefined(charIndex, 'charIndex');
        validateNullOrUndefined(charCount, 'charCount');
        if (charIndex < 0 || charCount < 0) {
            throw new RangeError('Argument Out Of Range Exception: charIndex or charCount is less than zero');
        }
        if (s.length - charIndex < charCount) {
            throw new RangeError('Argument Out Of Range Exception: charIndex and charCount do not denote a valid range in string');
        }
        let bytes;
        if (s === '') {
            bytes = new ArrayBuffer(0);
            return bytes;
        }
        if (this.type === null || this.type === undefined) {
            this.type = 'Ansi';
        }
        let byteCount = this.getByteCountInternal(s, charIndex, charCount);
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
    /**
     * Decodes a sequence of bytes from the specified ArrayBuffer into the string.
     * @param  {ArrayBuffer} bytes- The ArrayBuffer containing the sequence of bytes to decode.
     * @param  {number} index- The index of the first byte to decode.
     * @param  {number} count- The number of bytes to decode.
     * @returns {string} - The string that contains the resulting set of characters.
     */
    getString(bytes, index, count) {
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
        let out = '';
        let byteCal = new Uint8Array(bytes);
        switch (this.type) {
            case 'Utf8':
                let s = this.getStringOfUtf8Encoding(byteCal, index, count);
                return s;
            case 'Unicode':
                let byteUnicode = new Uint16Array(bytes);
                out = this.getStringofUnicodeEncoding(byteUnicode, index, count);
                return out;
            default:
                let j = index;
                for (let i = 0; i < count; i++) {
                    let c = byteCal[j];
                    out += String.fromCharCode(c); // 1 byte(ASCII) character                  
                    j++;
                }
                return out;
        }
    }
    getBytesOfAnsiEncoding(byteCount, s, charIndex, charCount) {
        let bytes = new ArrayBuffer(byteCount);
        let bufview = new Uint8Array(bytes);
        let k = 0;
        for (let i = 0; i < charCount; i++) {
            let charcode = s.charCodeAt(charIndex++);
            if (charcode < 0x800) {
                bufview[k] = charcode;
            }
            else {
                bufview[k] = 63; //replacement character '?'
            }
            k++;
        }
        return bytes;
    }
    getBytesOfUtf8Encoding(byteCount, s, charIndex, charCount) {
        let bytes = new ArrayBuffer(byteCount);
        let uint = new Uint8Array(bytes);
        let index = charIndex;
        let j = 0;
        for (let i = 0; i < charCount; i++) {
            let charcode = s.charCodeAt(index);
            if (charcode <= 0x7F) {
                uint[j] = charcode;
            }
            else if (charcode < 0x800) {
                uint[j] = 0xc0 | (charcode >> 6);
                uint[++j] = 0x80 | (charcode & 0x3f);
            }
            else if ((charcode < 0xd800 || charcode >= 0xe000)) {
                uint[j] = 0xe0 | (charcode >> 12);
                uint[++j] = 0x80 | ((charcode >> 6) & 0x3f);
                uint[++j] = 0x80 | (charcode & 0x3f);
            }
            else {
                uint[j] = 0xef;
                uint[++j] = 0xbf;
                uint[++j] = 0xbd; // U+FFFE "replacement character"
            }
            ++j;
            ++index;
        }
        return bytes;
    }
    getBytesOfUnicodeEncoding(byteCount, s, charIndex, charCount) {
        let bytes = new ArrayBuffer(byteCount);
        let uint16 = new Uint16Array(bytes);
        for (let i = 0; i < charCount; i++) {
            let charcode = s.charCodeAt(i);
            uint16[i] = charcode;
        }
        return bytes;
    }
    getStringOfUtf8Encoding(byteCal, index, count) {
        let j = 0;
        let i = index;
        let s = '';
        for (j; j < count; j++) {
            let c = byteCal[i++];
            while (i > byteCal.length) {
                return s;
            }
            if (c > 127) {
                if (c > 191 && c < 224 && i < count) {
                    c = (c & 31) << 6 | byteCal[i] & 63;
                }
                else if (c > 223 && c < 240 && i < byteCal.byteLength) {
                    c = (c & 15) << 12 | (byteCal[i] & 63) << 6 | byteCal[++i] & 63;
                }
                else if (c > 239 && c < 248 && i < byteCal.byteLength) {
                    c = (c & 7) << 18 | (byteCal[i] & 63) << 12 | (byteCal[++i] & 63) << 6 | byteCal[++i] & 63;
                }
                ++i;
            }
            s += String.fromCharCode(c); // 1 byte(ASCII) character                          
        }
        return s;
    }
    getStringofUnicodeEncoding(byteUni, index, count) {
        if (count > byteUni.length) {
            throw new RangeError('ArgumentOutOfRange_Count');
        }
        let byte16 = new Uint16Array(count);
        let out = '';
        for (let i = 0; i < count && i < byteUni.length; i++) {
            byte16[i] = byteUni[index++];
        }
        out = String.fromCharCode.apply(null, byte16);
        return out;
    }
    /**
     * To clear the encoding instance
     * @return {void}
     */
    destroy() {
        this.emitBOM = undefined;
        this.encodingType = undefined;
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
class Save {
    /**
     * Initialize new instance of {save}
     */
    constructor() {
        // tslint:disable
    }
    /**
     * Saves the file with specified name and sends the file to client browser
     * @param  {string} fileName- file name to save.
     * @param  {Blob} buffer- the content to write in file
     * @param  {boolean} isMicrosoftBrowser- specify whether microsoft browser or not
     * @returns {void}
     */
    static save(fileName, buffer) {
        if (fileName === null || fileName === undefined || fileName === '') {
            throw new Error('ArgumentException: fileName cannot be undefined, null or empty');
        }
        let extension = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length);
        let mimeType = this.getMimeType(extension);
        if (mimeType !== '') {
            buffer = new Blob([buffer], { type: mimeType });
        }
        if (this.isMicrosoftBrowser) {
            navigator.msSaveBlob(buffer, fileName);
        }
        else {
            let downloadLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            this.saveInternal(fileName, extension, buffer, downloadLink, 'download' in downloadLink);
        }
    }
    static saveInternal(fileName, extension, buffer, downloadLink, hasDownloadAttribute) {
        if (hasDownloadAttribute) {
            downloadLink.download = fileName;
            let dataUrl = window.URL.createObjectURL(buffer);
            downloadLink.href = dataUrl;
            let event = document.createEvent('MouseEvent');
            event.initEvent('click', true, true);
            downloadLink.dispatchEvent(event);
            setTimeout(() => {
                window.URL.revokeObjectURL(dataUrl);
                dataUrl = undefined;
            });
        }
        else {
            if (extension !== 'docx' && extension !== 'xlsx') {
                let url = window.URL.createObjectURL(buffer);
                let isPopupBlocked = window.open(url, '_blank');
                if (!isPopupBlocked) {
                    window.location.href = url;
                }
            }
            else {
                let reader = new FileReader();
                reader.onloadend = () => {
                    let isPopupBlocked = window.open(reader.result, '_blank');
                    if (!isPopupBlocked) {
                        window.location.href = reader.result;
                    }
                };
                reader.readAsDataURL(buffer);
            }
        }
    }
    /**
     *
     * @param {string} extension - get mime type of the specified extension
     * @private
     */
    static getMimeType(extension) {
        let mimeType = '';
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
}

/**
 * StreamWriter class contains the implementation for writing characters to a file in a particular encoding
 * ```typescript
 * let writer = new StreamWriter();
 * writer.write('Hello World');
 * writer.save('Sample.txt');
 * writer.dispose();
 * ```
 */
class StreamWriter {
    /**
     * Gets the content written to the StreamWriter as Blob.
     * @returns Blob
     */
    get buffer() {
        this.flush();
        return this.bufferBlob;
    }
    /**
     * Gets the encoding.
     * @returns Encoding
     */
    get encoding() {
        return this.enc;
    }
    /**
     * Initializes a new instance of the StreamWriter class by using the specified encoding.
     * @param  {Encoding} encoding?- The character encoding to use.
     */
    constructor(encoding) {
        this.bufferBlob = new Blob(['']);
        this.bufferText = '';
        this.init(encoding);
        Save.isMicrosoftBrowser = !(!navigator.msSaveBlob);
    }
    init(encoding) {
        if (encoding === null || encoding === undefined) {
            this.enc = new Encoding(false);
            this.enc.type = 'Utf8';
        }
        else {
            this.enc = encoding;
            this.setBomByte();
        }
    }
    /**
     * Private method to set Byte Order Mark(BOM) value based on EncodingType
     */
    setBomByte() {
        if (this.encoding.includeBom) {
            switch (this.encoding.type) {
                case 'Unicode':
                    let arrayUnicode = new ArrayBuffer(2);
                    let uint8 = new Uint8Array(arrayUnicode);
                    uint8[0] = 255;
                    uint8[1] = 254;
                    this.bufferBlob = new Blob([arrayUnicode]);
                    break;
                case 'Utf8':
                    let arrayUtf8 = new ArrayBuffer(3);
                    let utf8 = new Uint8Array(arrayUtf8);
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
    /**
     * Saves the file with specified name and sends the file to client browser
     * @param  {string} fileName - The file name to save
     * @returns {void}
     */
    save(fileName) {
        if (this.bufferText !== '') {
            this.flush();
        }
        Save.save(fileName, this.buffer);
    }
    /**
     * Writes the specified string.
     * @param  {string} value - The string to write. If value is null or undefined, nothing is written.
     * @returns {void}
     */
    write(value) {
        if (this.encoding === undefined) {
            throw new Error('Object Disposed Exception: current writer is disposed');
        }
        validateNullOrUndefined(value, 'string');
        this.bufferText += value;
        if (this.bufferText.length >= 10240) {
            this.flush();
        }
    }
    flush() {
        if (this.bufferText === undefined || this.bufferText === null || this.bufferText.length === 0) {
            return;
        }
        let bufferArray = this.encoding.getBytes(this.bufferText, 0, this.bufferText.length);
        this.bufferText = '';
        this.bufferBlob = new Blob([this.bufferBlob, bufferArray]);
    }
    /**
     * Writes the specified string followed by a line terminator
     * @param  {string} value - The string to write. If value is null or undefined, nothing is written
     * @returns {void}
     */
    writeLine(value) {
        if (this.encoding === undefined) {
            throw new Error('Object Disposed Exception: current writer is disposed');
        }
        validateNullOrUndefined(value, 'string');
        this.bufferText = this.bufferText + value + '\r\n';
        if (this.bufferText.length >= 10240) {
            this.flush();
        }
    }
    /**
     * Releases the resources used by the StreamWriter
     * @returns {void}
     */
    destroy() {
        this.bufferBlob = undefined;
        this.bufferText = undefined;
        if (this.enc instanceof Encoding) {
            this.enc.destroy();
        }
        this.enc = undefined;
    }
}

// export all modules from current location
// example: export * from './module'
/**
 * file utils modules
 */

export { StreamWriter, Encoding, validateNullOrUndefined, Save };
//# sourceMappingURL=ej2-file-utils.es2015.js.map
