'use strict';

System.register(['@syncfusion/ej2-file-utils'], function (_export, _context) {
    "use strict";

    var Encoding, Save, _createClass, arrLiteralCodes, arrLiteralLengths, arrDistanceCodes, arrDistanceLengths, CompressedStreamWriter, CompressorHuffmanTree, ChecksumCalculator, crc32Table, ZipArchive, ZipArchiveItem;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_syncfusionEj2FileUtils) {
            Encoding = _syncfusionEj2FileUtils.Encoding;
            Save = _syncfusionEj2FileUtils.Save;
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

            arrLiteralCodes = new Int16Array(286);
            arrLiteralLengths = new Uint8Array(286);
            arrDistanceCodes = new Int16Array(30);
            arrDistanceLengths = new Uint8Array(30);

            _export('CompressedStreamWriter', CompressedStreamWriter = function () {
                /**
                 * Initializes compressor and writes ZLib header if needed.
                 * @param {boolean} noWrap - optional if true, ZLib header and checksum will not be written.
                 */
                function CompressedStreamWriter(noWrap) {
                    _classCallCheck(this, CompressedStreamWriter);

                    this.pendingBuffer = new Uint8Array(1 << 16);
                    this.pendingBufLength = 0;
                    this.pendingBufCache = 0;
                    this.pendingBufBitsInCache = 0;
                    this.bufferPosition = 0;
                    this.extraBits = 0;
                    this.currentHash = 0;
                    this.matchStart = 0;
                    this.matchLength = 0;
                    this.matchPrevAvail = false;
                    this.blockStart = 0;
                    this.stringStart = 0;
                    this.lookAhead = 0;
                    this.totalBytesIn = 0;
                    this.inputOffset = 0;
                    this.inputEnd = 0;
                    this.windowSize = 1 << 15;
                    this.windowMask = this.windowSize - 1;
                    this.hashSize = 1 << 15;
                    this.hashMask = this.hashSize - 1;
                    this.hashShift = Math.floor((15 + 3 - 1) / 3);
                    this.maxDist = this.windowSize - 262;
                    this.checkSum = 1;
                    this.noWrap = false;
                    this.treeLiteral = new CompressorHuffmanTree(this, 286, 257, 15);
                    this.treeDistances = new CompressorHuffmanTree(this, 30, 1, 15);
                    this.treeCodeLengths = new CompressorHuffmanTree(this, 19, 4, 7);
                    this.arrDistances = new Uint16Array(1 << 14);
                    this.arrLiterals = new Uint8Array(1 << 14);
                    this.stream = [];
                    this.dataWindow = new Uint8Array(2 * this.windowSize);
                    this.hashHead = new Int16Array(this.hashSize);
                    this.hashPrevious = new Int16Array(this.windowSize);
                    this.blockStart = this.stringStart = 1;
                    this.noWrap = noWrap;
                    if (!noWrap) {
                        this.writeZLibHeader();
                    }
                }
                /**
                 * get compressed data
                 */


                _createClass(CompressedStreamWriter, [{
                    key: 'write',
                    value: function write(data, offset, length) {
                        if (data === undefined || data === null) {
                            throw new Error('ArgumentException: data cannot null or undefined');
                        }
                        var end = offset + length;
                        if (0 > offset || offset > end || end > data.length) {
                            throw new Error('ArgumentOutOfRangeException: Offset or length is incorrect');
                        }
                        if (typeof data === 'string') {
                            var encode = new Encoding(false);
                            encode.type = 'Utf8';
                            data = new Uint8Array(encode.getBytes(data, 0, data.length));
                            end = offset + data.length;
                        }
                        this.inputBuffer = data;
                        this.inputOffset = offset;
                        this.inputEnd = end;
                        if (!this.noWrap) {
                            this.checkSum = ChecksumCalculator.checksumUpdate(this.checkSum, this.inputBuffer, this.inputOffset, end);
                        }
                        while (!(this.inputEnd === this.inputOffset) || !(this.pendingBufLength === 0)) {
                            this.pendingBufferFlush();
                            this.compressData(false);
                        }
                    }
                }, {
                    key: 'writeZLibHeader',
                    value: function writeZLibHeader() {
                        /* Initialize header.*/
                        var headerDate = 8 + (7 << 4) << 8;
                        /* Save compression level.*/
                        headerDate |= (5 >> 2 & 3) << 6;
                        /* Align header.*/
                        headerDate += 31 - headerDate % 31;
                        /* Write header to stream.*/
                        this.pendingBufferWriteShortBytes(headerDate);
                    }
                }, {
                    key: 'pendingBufferWriteShortBytes',
                    value: function pendingBufferWriteShortBytes(s) {
                        this.pendingBuffer[this.pendingBufLength++] = s >> 8;
                        this.pendingBuffer[this.pendingBufLength++] = s;
                    }
                }, {
                    key: 'compressData',
                    value: function compressData(finish) {
                        var success = void 0;
                        do {
                            this.fillWindow();
                            var canFlush = finish && this.inputEnd === this.inputOffset;
                            success = this.compressSlow(canFlush, finish);
                        } while (this.pendingBufLength === 0 && success);
                        return success;
                    }
                }, {
                    key: 'compressSlow',
                    value: function compressSlow(flush, finish) {
                        if (this.lookAhead < 262 && !flush) {
                            return false;
                        }
                        while (this.lookAhead >= 262 || flush) {
                            if (this.lookAhead === 0) {
                                return this.lookAheadCompleted(finish);
                            }
                            if (this.stringStart >= 2 * this.windowSize - 262) {
                                this.slideWindow();
                            }
                            var prevMatch = this.matchStart;
                            var prevLen = this.matchLength;
                            if (this.lookAhead >= 3) {
                                this.discardMatch();
                            }
                            if (prevLen >= 3 && this.matchLength <= prevLen) {
                                prevLen = this.matchPreviousBest(prevMatch, prevLen);
                            } else {
                                this.matchPreviousAvailable();
                            }
                            if (this.bufferPosition >= 1 << 14) {
                                return this.huffmanIsFull(finish);
                            }
                        }
                        return true;
                    }
                }, {
                    key: 'discardMatch',
                    value: function discardMatch() {
                        var hashHead = this.insertString();
                        if (hashHead !== 0 && this.stringStart - hashHead <= this.maxDist && this.findLongestMatch(hashHead)) {
                            if (this.matchLength <= 5 && this.matchLength === 3 && this.stringStart - this.matchStart > 4096) {
                                this.matchLength = 3 - 1;
                            }
                        }
                    }
                }, {
                    key: 'matchPreviousAvailable',
                    value: function matchPreviousAvailable() {
                        if (this.matchPrevAvail) {
                            this.huffmanTallyLit(this.dataWindow[this.stringStart - 1] & 0xff);
                        }
                        this.matchPrevAvail = true;
                        this.stringStart++;
                        this.lookAhead--;
                    }
                }, {
                    key: 'matchPreviousBest',
                    value: function matchPreviousBest(prevMatch, prevLen) {
                        this.huffmanTallyDist(this.stringStart - 1 - prevMatch, prevLen);
                        prevLen -= 2;
                        do {
                            this.stringStart++;
                            this.lookAhead--;
                            if (this.lookAhead >= 3) {
                                this.insertString();
                            }
                        } while (--prevLen > 0);
                        this.stringStart++;
                        this.lookAhead--;
                        this.matchPrevAvail = false;
                        this.matchLength = 3 - 1;
                        return prevLen;
                    }
                }, {
                    key: 'lookAheadCompleted',
                    value: function lookAheadCompleted(finish) {
                        if (this.matchPrevAvail) {
                            this.huffmanTallyLit(this.dataWindow[this.stringStart - 1] & 0xff);
                        }
                        this.matchPrevAvail = false;
                        this.huffmanFlushBlock(this.dataWindow, this.blockStart, this.stringStart - this.blockStart, finish);
                        this.blockStart = this.stringStart;
                        return false;
                    }
                }, {
                    key: 'huffmanIsFull',
                    value: function huffmanIsFull(finish) {
                        var len = this.stringStart - this.blockStart;
                        if (this.matchPrevAvail) {
                            len--;
                        }
                        var lastBlock = finish && this.lookAhead === 0 && !this.matchPrevAvail;
                        this.huffmanFlushBlock(this.dataWindow, this.blockStart, len, lastBlock);
                        this.blockStart += len;
                        return !lastBlock;
                    }
                }, {
                    key: 'fillWindow',
                    value: function fillWindow() {
                        if (this.stringStart >= this.windowSize + this.maxDist) {
                            this.slideWindow();
                        }
                        while (this.lookAhead < 262 && this.inputOffset < this.inputEnd) {
                            var more = 2 * this.windowSize - this.lookAhead - this.stringStart;
                            if (more > this.inputEnd - this.inputOffset) {
                                more = this.inputEnd - this.inputOffset;
                            }
                            this.dataWindow.set(this.inputBuffer.subarray(this.inputOffset, this.inputOffset + more), this.stringStart + this.lookAhead);
                            this.inputOffset += more;
                            this.totalBytesIn += more;
                            this.lookAhead += more;
                        }
                        if (this.lookAhead >= 3) {
                            this.updateHash();
                        }
                    }
                }, {
                    key: 'slideWindow',
                    value: function slideWindow() {
                        this.dataWindow.set(this.dataWindow.subarray(this.windowSize, this.windowSize + this.windowSize), 0);
                        this.matchStart -= this.windowSize;
                        this.stringStart -= this.windowSize;
                        this.blockStart -= this.windowSize;
                        for (var i = 0; i < this.hashSize; ++i) {
                            var m = this.hashHead[i] & 0xffff;
                            this.hashHead[i] = m >= this.windowSize ? m - this.windowSize : 0;
                        }
                        for (var _i = 0; _i < this.windowSize; _i++) {
                            var _m = this.hashPrevious[_i] & 0xffff;
                            this.hashPrevious[_i] = _m >= this.windowSize ? _m - this.windowSize : 0;
                        }
                    }
                }, {
                    key: 'insertString',
                    value: function insertString() {
                        var match = void 0;
                        var hash = (this.currentHash << this.hashShift ^ this.dataWindow[this.stringStart + (3 - 1)]) & this.hashMask;
                        this.hashPrevious[this.stringStart & this.windowMask] = match = this.hashHead[hash];
                        this.hashHead[hash] = this.stringStart;
                        this.currentHash = hash;
                        return match & 0xffff;
                    }
                }, {
                    key: 'findLongestMatch',
                    value: function findLongestMatch(curMatch) {
                        var chainLen = 4096;
                        var niceLen = 258;
                        var scan = this.stringStart;
                        var match = void 0;
                        var bestEnd = this.stringStart + this.matchLength;
                        var bestLength = Math.max(this.matchLength, 3 - 1);
                        var limit = Math.max(this.stringStart - this.maxDist, 0);
                        var stringEnd = this.stringStart + 258 - 1;
                        var scanEnd1 = this.dataWindow[bestEnd - 1];
                        var scanEnd = this.dataWindow[bestEnd];
                        var data = this.dataWindow;
                        if (bestLength >= 32) {
                            chainLen >>= 2;
                        }
                        if (niceLen > this.lookAhead) {
                            niceLen = this.lookAhead;
                        }
                        do {
                            if (data[curMatch + bestLength] !== scanEnd || data[curMatch + bestLength - 1] !== scanEnd1 || data[curMatch] !== data[scan] || data[curMatch + 1] !== data[scan + 1]) {
                                continue;
                            }
                            match = curMatch + 2;
                            scan += 2;
                            /* tslint:disable */
                            while (data[++scan] === data[++match] && data[++scan] === data[++match] && data[++scan] === data[++match] && data[++scan] === data[++match] && data[++scan] === data[++match] && data[++scan] === data[++match] && data[++scan] === data[++match] && data[++scan] === data[++match] && scan < stringEnd) {
                                /* tslint:disable */
                            }
                            if (scan > bestEnd) {
                                this.matchStart = curMatch;
                                bestEnd = scan;
                                bestLength = scan - this.stringStart;
                                if (bestLength >= niceLen) {
                                    break;
                                }
                                scanEnd1 = data[bestEnd - 1];
                                scanEnd = data[bestEnd];
                            }
                            scan = this.stringStart;
                        } while ((curMatch = this.hashPrevious[curMatch & this.windowMask] & 0xffff) > limit && --chainLen !== 0);
                        this.matchLength = Math.min(bestLength, this.lookAhead);
                        return this.matchLength >= 3;
                    }
                }, {
                    key: 'updateHash',
                    value: function updateHash() {
                        this.currentHash = this.dataWindow[this.stringStart] << this.hashShift ^ this.dataWindow[this.stringStart + 1];
                    }
                }, {
                    key: 'huffmanTallyLit',
                    value: function huffmanTallyLit(literal) {
                        this.arrDistances[this.bufferPosition] = 0;
                        this.arrLiterals[this.bufferPosition++] = literal;
                        this.treeLiteral.codeFrequencies[literal]++;
                        return this.bufferPosition >= 1 << 14;
                    }
                }, {
                    key: 'huffmanTallyDist',
                    value: function huffmanTallyDist(dist, len) {
                        this.arrDistances[this.bufferPosition] = dist;
                        this.arrLiterals[this.bufferPosition++] = len - 3;
                        var lc = this.huffmanLengthCode(len - 3);
                        this.treeLiteral.codeFrequencies[lc]++;
                        if (lc >= 265 && lc < 285) {
                            this.extraBits += Math.floor((lc - 261) / 4);
                        }
                        var dc = this.huffmanDistanceCode(dist - 1);
                        this.treeDistances.codeFrequencies[dc]++;
                        if (dc >= 4) {
                            this.extraBits += Math.floor(dc / 2 - 1);
                        }
                        return this.bufferPosition >= 1 << 14;
                    }
                }, {
                    key: 'huffmanFlushBlock',
                    value: function huffmanFlushBlock(stored, storedOffset, storedLength, lastBlock) {
                        this.treeLiteral.codeFrequencies[256]++;
                        this.treeLiteral.buildTree();
                        this.treeDistances.buildTree();
                        this.treeLiteral.calculateBLFreq(this.treeCodeLengths);
                        this.treeDistances.calculateBLFreq(this.treeCodeLengths);
                        this.treeCodeLengths.buildTree();
                        var blTreeCodes = 4;
                        for (var i = 18; i > blTreeCodes; i--) {
                            if (this.treeCodeLengths.codeLengths[CompressorHuffmanTree.huffCodeLengthOrders[i]] > 0) {
                                blTreeCodes = i + 1;
                            }
                        }
                        var opt_len = 14 + blTreeCodes * 3 + this.treeCodeLengths.getEncodedLength() + this.treeLiteral.getEncodedLength() + this.treeDistances.getEncodedLength() + this.extraBits;
                        var static_len = this.extraBits;
                        for (var _i2 = 0; _i2 < 286; _i2++) {
                            static_len += this.treeLiteral.codeFrequencies[_i2] * arrLiteralLengths[_i2];
                        }
                        for (var _i3 = 0; _i3 < 30; _i3++) {
                            static_len += this.treeDistances.codeFrequencies[_i3] * arrDistanceLengths[_i3];
                        }
                        if (opt_len >= static_len) {
                            // Force static trees.
                            opt_len = static_len;
                        }
                        if (storedOffset >= 0 && storedLength + 4 < opt_len >> 3) {
                            this.huffmanFlushStoredBlock(stored, storedOffset, storedLength, lastBlock);
                        } else if (opt_len == static_len) {
                            // Encode with static tree.
                            this.pendingBufferWriteBits((1 << 1) + (lastBlock ? 1 : 0), 3);
                            this.treeLiteral.setStaticCodes(arrLiteralCodes, arrLiteralLengths);
                            this.treeDistances.setStaticCodes(arrDistanceCodes, arrDistanceLengths);
                            this.huffmanCompressBlock();
                            this.huffmanReset();
                        } else {
                            this.pendingBufferWriteBits((2 << 1) + (lastBlock ? 1 : 0), 3);
                            this.huffmanSendAllTrees(blTreeCodes);
                            this.huffmanCompressBlock();
                            this.huffmanReset();
                        }
                    }
                }, {
                    key: 'huffmanFlushStoredBlock',
                    value: function huffmanFlushStoredBlock(stored, storedOffset, storedLength, lastBlock) {
                        this.pendingBufferWriteBits((0 << 1) + (lastBlock ? 1 : 0), 3);
                        this.pendingBufferAlignToByte();
                        this.pendingBufferWriteShort(storedLength);
                        this.pendingBufferWriteShort(~storedLength);
                        this.pendingBufferWriteByteBlock(stored, storedOffset, storedLength);
                        this.huffmanReset();
                    }
                }, {
                    key: 'huffmanLengthCode',
                    value: function huffmanLengthCode(len) {
                        if (len === 255) {
                            return 285;
                        }
                        var code = 257;
                        while (len >= 8) {
                            code += 4;
                            len >>= 1;
                        }
                        return code + len;
                    }
                }, {
                    key: 'huffmanDistanceCode',
                    value: function huffmanDistanceCode(distance) {
                        var code = 0;
                        while (distance >= 4) {
                            code += 2;
                            distance >>= 1;
                        }
                        return code + distance;
                    }
                }, {
                    key: 'huffmanSendAllTrees',
                    value: function huffmanSendAllTrees(blTreeCodes) {
                        this.treeCodeLengths.buildCodes();
                        this.treeLiteral.buildCodes();
                        this.treeDistances.buildCodes();
                        this.pendingBufferWriteBits(this.treeLiteral.treeLength - 257, 5);
                        this.pendingBufferWriteBits(this.treeDistances.treeLength - 1, 5);
                        this.pendingBufferWriteBits(blTreeCodes - 4, 4);
                        for (var rank = 0; rank < blTreeCodes; rank++) {
                            this.pendingBufferWriteBits(this.treeCodeLengths.codeLengths[CompressorHuffmanTree.huffCodeLengthOrders[rank]], 3);
                        }
                        this.treeLiteral.writeTree(this.treeCodeLengths);
                        this.treeDistances.writeTree(this.treeCodeLengths);
                    }
                }, {
                    key: 'huffmanReset',
                    value: function huffmanReset() {
                        this.bufferPosition = 0;
                        this.extraBits = 0;
                        this.treeLiteral.reset();
                        this.treeDistances.reset();
                        this.treeCodeLengths.reset();
                    }
                }, {
                    key: 'huffmanCompressBlock',
                    value: function huffmanCompressBlock() {
                        for (var i = 0; i < this.bufferPosition; i++) {
                            var literalLen = this.arrLiterals[i] & 255;
                            var dist = this.arrDistances[i];
                            if (dist-- !== 0) {
                                var lc = this.huffmanLengthCode(literalLen);
                                this.treeLiteral.writeCodeToStream(lc);
                                var bits = Math.floor((lc - 261) / 4);
                                if (bits > 0 && bits <= 5) {
                                    this.pendingBufferWriteBits(literalLen & (1 << bits) - 1, bits);
                                }
                                var dc = this.huffmanDistanceCode(dist);
                                this.treeDistances.writeCodeToStream(dc);
                                bits = Math.floor(dc / 2 - 1);
                                if (bits > 0) {
                                    this.pendingBufferWriteBits(dist & (1 << bits) - 1, bits);
                                }
                            } else {
                                this.treeLiteral.writeCodeToStream(literalLen);
                            }
                        }
                        this.treeLiteral.writeCodeToStream(256);
                    }
                }, {
                    key: 'pendingBufferWriteBits',
                    value: function pendingBufferWriteBits(b, count) {
                        var uint = new Uint32Array(1);
                        uint[0] = this.pendingBufCache | b << this.pendingBufBitsInCache;
                        this.pendingBufCache = uint[0];
                        this.pendingBufBitsInCache += count;
                        this.pendingBufferFlushBits();
                    }
                }, {
                    key: 'pendingBufferFlush',
                    value: function pendingBufferFlush(isClose) {
                        this.pendingBufferFlushBits();
                        if (this.pendingBufLength > 0) {
                            var array = new Uint8Array(this.pendingBufLength);
                            array.set(this.pendingBuffer.subarray(0, this.pendingBufLength), 0);
                            this.stream.push(array);
                        }
                        this.pendingBufLength = 0;
                    }
                }, {
                    key: 'pendingBufferFlushBits',
                    value: function pendingBufferFlushBits() {
                        var result = 0;
                        while (this.pendingBufBitsInCache >= 8 && this.pendingBufLength < 1 << 16) {
                            this.pendingBuffer[this.pendingBufLength++] = this.pendingBufCache;
                            this.pendingBufCache >>= 8;
                            this.pendingBufBitsInCache -= 8;
                            result++;
                        }
                        return result;
                    }
                }, {
                    key: 'pendingBufferWriteByteBlock',
                    value: function pendingBufferWriteByteBlock(data, offset, length) {
                        var array = data.subarray(offset, offset + length);
                        this.pendingBuffer.set(array, this.pendingBufLength);
                        this.pendingBufLength += length;
                    }
                }, {
                    key: 'pendingBufferWriteShort',
                    value: function pendingBufferWriteShort(s) {
                        this.pendingBuffer[this.pendingBufLength++] = s;
                        this.pendingBuffer[this.pendingBufLength++] = s >> 8;
                    }
                }, {
                    key: 'pendingBufferAlignToByte',
                    value: function pendingBufferAlignToByte() {
                        if (this.pendingBufBitsInCache > 0) {
                            this.pendingBuffer[this.pendingBufLength++] = this.pendingBufCache;
                        }
                        this.pendingBufCache = 0;
                        this.pendingBufBitsInCache = 0;
                    }
                }, {
                    key: 'close',
                    value: function close() {
                        do {
                            this.pendingBufferFlush(true);
                            if (!this.compressData(true)) {
                                this.pendingBufferFlush(true);
                                this.pendingBufferAlignToByte();
                                if (!this.noWrap) {
                                    this.pendingBufferWriteShortBytes(this.checkSum >> 16);
                                    this.pendingBufferWriteShortBytes(this.checkSum & 0xffff);
                                }
                                this.pendingBufferFlush(true);
                            }
                        } while (!(this.inputEnd === this.inputOffset) || !(this.pendingBufLength === 0));
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.stream = [];
                        this.stream = undefined;
                        this.pendingBuffer = undefined;
                        this.treeLiteral = undefined;
                        this.treeDistances = undefined;
                        this.treeCodeLengths = undefined;
                        this.arrLiterals = undefined;
                        this.arrDistances = undefined;
                        this.hashHead = undefined;
                        this.hashPrevious = undefined;
                        this.dataWindow = undefined;
                        this.inputBuffer = undefined;
                        this.pendingBufLength = undefined;
                        this.pendingBufCache = undefined;
                        this.pendingBufBitsInCache = undefined;
                        this.bufferPosition = undefined;
                        this.extraBits = undefined;
                        this.currentHash = undefined;
                        this.matchStart = undefined;
                        this.matchLength = undefined;
                        this.matchPrevAvail = undefined;
                        this.blockStart = undefined;
                        this.stringStart = undefined;
                        this.lookAhead = undefined;
                        this.totalBytesIn = undefined;
                        this.inputOffset = undefined;
                        this.inputEnd = undefined;
                        this.windowSize = undefined;
                        this.windowMask = undefined;
                        this.hashSize = undefined;
                        this.hashMask = undefined;
                        this.hashShift = undefined;
                        this.maxDist = undefined;
                        this.checkSum = undefined;
                        this.noWrap = undefined;
                    }
                }, {
                    key: 'compressedData',
                    get: function get() {
                        return this.stream;
                    }
                }, {
                    key: 'getCompressedString',
                    get: function get() {
                        var compressedString = '';
                        if (this.stream !== undefined) {
                            for (var i = 0; i < this.stream.length; i++) {
                                compressedString += String.fromCharCode.apply(null, this.stream[i]);
                            }
                        }
                        return compressedString;
                    }
                }]);

                return CompressedStreamWriter;
            }());

            _export('CompressorHuffmanTree', CompressorHuffmanTree = function () {
                /**
                 * Create new Huffman Tree
                 * @param {CompressedStreamWriter} writer instance
                 * @param {number} elementCount - element count
                 * @param {number} minCodes - minimum count
                 * @param {number} maxLength - maximum count
                 */
                function CompressorHuffmanTree(writer, elementCount, minCodes, maxLength) {
                    _classCallCheck(this, CompressorHuffmanTree);

                    this.writer = writer;
                    this.codeMinCount = minCodes;
                    this.maxLength = maxLength;
                    this.codeFrequency = new Uint16Array(elementCount);
                    this.lengthCount = new Int32Array(maxLength);
                }

                _createClass(CompressorHuffmanTree, [{
                    key: 'setStaticCodes',
                    value: function setStaticCodes(codes, lengths) {
                        var temp = new Int16Array(codes.length);
                        temp.set(codes, 0);
                        this.codes = temp;
                        var lengthTemp = new Uint8Array(lengths.length);
                        lengthTemp.set(lengths, 0);
                        this.codeLength = lengthTemp;
                    }
                }, {
                    key: 'reset',
                    value: function reset() {
                        for (var i = 0; i < this.codeFrequency.length; i++) {
                            this.codeFrequency[i] = 0;
                        }
                        this.codes = undefined;
                        this.codeLength = undefined;
                    }
                }, {
                    key: 'writeCodeToStream',
                    value: function writeCodeToStream(code) {
                        this.writer.pendingBufferWriteBits(this.codes[code] & 0xffff, this.codeLength[code]);
                    }
                }, {
                    key: 'buildCodes',
                    value: function buildCodes() {
                        var nextCode = new Int32Array(this.maxLength);
                        this.codes = new Int16Array(this.codeCount);
                        var code = 0;
                        for (var bitsCount = 0; bitsCount < this.maxLength; bitsCount++) {
                            nextCode[bitsCount] = code;
                            code += this.lengthCount[bitsCount] << 15 - bitsCount;
                        }
                        for (var i = 0; i < this.codeCount; i++) {
                            var bits = this.codeLength[i];
                            if (bits > 0) {
                                this.codes[i] = CompressorHuffmanTree.bitReverse(nextCode[bits - 1]);
                                nextCode[bits - 1] += 1 << 16 - bits;
                            }
                        }
                    }
                }, {
                    key: 'getEncodedLength',
                    value: function getEncodedLength() {
                        var len = 0;
                        for (var i = 0; i < this.codeFrequency.length; i++) {
                            len += this.codeFrequency[i] * this.codeLength[i];
                        }
                        return len;
                    }
                }, {
                    key: 'calculateBLFreq',
                    value: function calculateBLFreq(blTree) {
                        var maxCount = void 0;
                        var minCount = void 0;
                        var count = void 0;
                        var curLen = -1;
                        var i = 0;
                        while (i < this.codeCount) {
                            count = 1;
                            var nextLen = this.codeLength[i];
                            if (nextLen === 0) {
                                maxCount = 138;
                                minCount = 3;
                            } else {
                                maxCount = 6;
                                minCount = 3;
                                if (curLen !== nextLen) {
                                    blTree.codeFrequency[nextLen]++;
                                    count = 0;
                                }
                            }
                            curLen = nextLen;
                            i++;
                            while (i < this.codeCount && curLen === this.codeLength[i]) {
                                i++;
                                if (++count >= maxCount) {
                                    break;
                                }
                            }
                            if (count < minCount) {
                                blTree.codeFrequency[curLen] += count;
                            } else if (curLen !== 0) {
                                blTree.codeFrequency[16]++;
                            } else if (count <= 10) {
                                blTree.codeFrequency[17]++;
                            } else {
                                blTree.codeFrequency[18]++;
                            }
                        }
                    }
                }, {
                    key: 'writeTree',
                    value: function writeTree(blTree) {
                        var maxRepeatCount = void 0;
                        var minRepeatCount = void 0;
                        var currentRepeatCount = void 0;
                        var currentCodeLength = -1;
                        var i = 0;
                        while (i < this.codeCount) {
                            currentRepeatCount = 1;
                            var nextLen = this.codeLength[i];
                            if (nextLen === 0) {
                                maxRepeatCount = 138;
                                minRepeatCount = 3;
                            } else {
                                maxRepeatCount = 6;
                                minRepeatCount = 3;
                                if (currentCodeLength !== nextLen) {
                                    blTree.writeCodeToStream(nextLen);
                                    currentRepeatCount = 0;
                                }
                            }
                            currentCodeLength = nextLen;
                            i++;
                            while (i < this.codeCount && currentCodeLength === this.codeLength[i]) {
                                i++;
                                if (++currentRepeatCount >= maxRepeatCount) {
                                    break;
                                }
                            }
                            if (currentRepeatCount < minRepeatCount) {
                                while (currentRepeatCount-- > 0) {
                                    blTree.writeCodeToStream(currentCodeLength);
                                }
                            } else if (currentCodeLength !== 0) {
                                blTree.writeCodeToStream(16);
                                this.writer.pendingBufferWriteBits(currentRepeatCount - 3, 2);
                            } else if (currentRepeatCount <= 10) {
                                blTree.writeCodeToStream(17);
                                this.writer.pendingBufferWriteBits(currentRepeatCount - 3, 3);
                            } else {
                                blTree.writeCodeToStream(18);
                                this.writer.pendingBufferWriteBits(currentRepeatCount - 11, 7);
                            }
                        }
                    }
                }, {
                    key: 'buildTree',
                    value: function buildTree() {
                        var codesCount = this.codeFrequency.length;
                        var arrTree = new Int32Array(codesCount);
                        var treeLength = 0;
                        var maxCount = 0;
                        for (var n = 0; n < codesCount; n++) {
                            var freq = this.codeFrequency[n];
                            if (freq !== 0) {
                                var pos = treeLength++;
                                var pPos = 0;
                                while (pos > 0 && this.codeFrequency[arrTree[pPos = Math.floor((pos - 1) / 2)]] > freq) {
                                    arrTree[pos] = arrTree[pPos];
                                    pos = pPos;
                                }
                                arrTree[pos] = n;
                                maxCount = n;
                            }
                        }
                        while (treeLength < 2) {
                            arrTree[treeLength++] = maxCount < 2 ? ++maxCount : 0;
                        }
                        this.codeCount = Math.max(maxCount + 1, this.codeMinCount);
                        var leafsCount = treeLength;
                        var nodesCount = leafsCount;
                        var child = new Int32Array(4 * treeLength - 2);
                        var values = new Int32Array(2 * treeLength - 1);
                        for (var i = 0; i < treeLength; i++) {
                            var node = arrTree[i];
                            var iIndex = 2 * i;
                            child[iIndex] = node;
                            child[iIndex + 1] = -1;
                            values[i] = this.codeFrequency[node] << 8;
                            arrTree[i] = i;
                        }
                        this.constructHuffmanTree(arrTree, treeLength, values, nodesCount, child);
                        this.buildLength(child);
                    }
                }, {
                    key: 'constructHuffmanTree',
                    value: function constructHuffmanTree(arrTree, treeLength, values, nodesCount, child) {
                        do {
                            var first = arrTree[0];
                            var last = arrTree[--treeLength];
                            var lastVal = values[last];
                            var pPos = 0;
                            var path = 1;
                            while (path < treeLength) {
                                if (path + 1 < treeLength && values[arrTree[path]] > values[arrTree[path + 1]]) {
                                    path++;
                                }
                                arrTree[pPos] = arrTree[path];
                                pPos = path;
                                path = pPos * 2 + 1;
                            }
                            while ((path = pPos) > 0 && values[arrTree[pPos = Math.floor((path - 1) / 2)]] > lastVal) {
                                arrTree[path] = arrTree[pPos];
                            }
                            arrTree[path] = last;
                            var second = arrTree[0];
                            last = nodesCount++;
                            child[2 * last] = first;
                            child[2 * last + 1] = second;
                            var minDepth = Math.min(values[first] & 0xff, values[second] & 0xff);
                            values[last] = lastVal = values[first] + values[second] - minDepth + 1;
                            pPos = 0;
                            path = 1;
                            /* tslint:disable */
                            while (path < treeLength) {
                                if (path + 1 < treeLength && values[arrTree[path]] > values[arrTree[path + 1]]) {
                                    path++;
                                }
                                arrTree[pPos] = arrTree[path];
                                pPos = path;
                                path = pPos * 2 + 1;
                            } /* tslint:disable */
                            while ((path = pPos) > 0 && values[arrTree[pPos = Math.floor((path - 1) / 2)]] > lastVal) {
                                arrTree[path] = arrTree[pPos];
                            }
                            arrTree[path] = last;
                        } while (treeLength > 1);
                    }
                }, {
                    key: 'buildLength',
                    value: function buildLength(child) {
                        this.codeLength = new Uint8Array(this.codeFrequency.length);
                        var numNodes = Math.floor(child.length / 2);
                        var numLeafs = Math.floor((numNodes + 1) / 2);
                        var overflow = 0;
                        for (var i = 0; i < this.maxLength; i++) {
                            this.lengthCount[i] = 0;
                        }
                        overflow = this.calculateOptimalCodeLength(child, overflow, numNodes);
                        if (overflow === 0) {
                            return;
                        }
                        var iIncreasableLength = this.maxLength - 1;
                        do {
                            while (this.lengthCount[--iIncreasableLength] === 0) {
                                /* tslint:disable */
                            }
                            do {
                                this.lengthCount[iIncreasableLength]--;
                                this.lengthCount[++iIncreasableLength]++;
                                overflow -= 1 << this.maxLength - 1 - iIncreasableLength;
                            } while (overflow > 0 && iIncreasableLength < this.maxLength - 1);
                        } while (overflow > 0);
                        this.recreateTree(child, overflow, numLeafs);
                    }
                }, {
                    key: 'recreateTree',
                    value: function recreateTree(child, overflow, numLeafs) {
                        this.lengthCount[this.maxLength - 1] += overflow;
                        this.lengthCount[this.maxLength - 2] -= overflow;
                        var nodePtr = 2 * numLeafs;
                        for (var bits = this.maxLength; bits !== 0; bits--) {
                            var n = this.lengthCount[bits - 1];
                            while (n > 0) {
                                var childPtr = 2 * child[nodePtr++];
                                if (child[childPtr + 1] === -1) {
                                    this.codeLength[child[childPtr]] = bits;
                                    n--;
                                }
                            }
                        }
                    }
                }, {
                    key: 'calculateOptimalCodeLength',
                    value: function calculateOptimalCodeLength(child, overflow, numNodes) {
                        var lengths = new Int32Array(numNodes);
                        lengths[numNodes - 1] = 0;
                        for (var i = numNodes - 1; i >= 0; i--) {
                            var childIndex = 2 * i + 1;
                            if (child[childIndex] !== -1) {
                                var bitLength = lengths[i] + 1;
                                if (bitLength > this.maxLength) {
                                    bitLength = this.maxLength;
                                    overflow++;
                                }
                                lengths[child[childIndex - 1]] = lengths[child[childIndex]] = bitLength;
                            } else {
                                var _bitLength = lengths[i];
                                this.lengthCount[_bitLength - 1]++;
                                this.codeLength[child[childIndex - 1]] = lengths[i];
                            }
                        }
                        return overflow;
                    }
                }, {
                    key: 'treeLength',
                    get: function get() {
                        return this.codeCount;
                    }
                }, {
                    key: 'codeLengths',
                    get: function get() {
                        return this.codeLength;
                    }
                }, {
                    key: 'codeFrequencies',
                    get: function get() {
                        return this.codeFrequency;
                    }
                }], [{
                    key: 'bitReverse',
                    value: function bitReverse(value) {
                        return CompressorHuffmanTree.reverseBits[value & 15] << 12 | CompressorHuffmanTree.reverseBits[value >> 4 & 15] << 8 | CompressorHuffmanTree.reverseBits[value >> 8 & 15] << 4 | CompressorHuffmanTree.reverseBits[value >> 12];
                    }
                }]);

                return CompressorHuffmanTree;
            }());

            CompressorHuffmanTree.reverseBits = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
            CompressorHuffmanTree.huffCodeLengthOrders = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            /**
             * Checksum calculator, based on Adler32 algorithm.
             */

            _export('ChecksumCalculator', ChecksumCalculator = function () {
                function ChecksumCalculator() {
                    _classCallCheck(this, ChecksumCalculator);
                }

                _createClass(ChecksumCalculator, null, [{
                    key: 'checksumUpdate',
                    value: function checksumUpdate(checksum, buffer, offset, length) {
                        var uint = new Uint32Array(1);
                        uint[0] = checksum;
                        var checksum_uint = uint[0];
                        var s1 = uint[0] = checksum_uint & 65535;
                        var s2 = uint[0] = checksum_uint >> ChecksumCalculator.checkSumBitOffset;
                        while (length > 0) {
                            var steps = Math.min(length, ChecksumCalculator.checksumIterationCount);
                            length -= steps;
                            while (--steps >= 0) {
                                s1 = s1 + (uint[0] = buffer[offset++] & 255);
                                s2 = s2 + s1;
                            }
                            s1 %= ChecksumCalculator.checksumBase;
                            s2 %= ChecksumCalculator.checksumBase;
                        }
                        checksum_uint = s2 << ChecksumCalculator.checkSumBitOffset | s1;
                        return checksum_uint;
                    }
                }]);

                return ChecksumCalculator;
            }());

            ChecksumCalculator.checkSumBitOffset = 16;
            ChecksumCalculator.checksumBase = 65521;
            ChecksumCalculator.checksumIterationCount = 3800;
            /**
             * Huffman Tree literal calculation
             */
            (function () {
                var i = 0;
                while (i < 144) {
                    arrLiteralCodes[i] = CompressorHuffmanTree.bitReverse(0x030 + i << 8);
                    arrLiteralLengths[i++] = 8;
                }
                while (i < 256) {
                    arrLiteralCodes[i] = CompressorHuffmanTree.bitReverse(0x190 - 144 + i << 7);
                    arrLiteralLengths[i++] = 9;
                }
                while (i < 280) {
                    arrLiteralCodes[i] = CompressorHuffmanTree.bitReverse(0x000 - 256 + i << 9);
                    arrLiteralLengths[i++] = 7;
                }
                while (i < 286) {
                    arrLiteralCodes[i] = CompressorHuffmanTree.bitReverse(0x0c0 - 280 + i << 8);
                    arrLiteralLengths[i++] = 8;
                }
                for (i = 0; i < 30; i++) {
                    arrDistanceCodes[i] = CompressorHuffmanTree.bitReverse(i << 11);
                    arrDistanceLengths[i] = 5;
                }
            })();

            crc32Table = [];

            _export('ZipArchive', ZipArchive = function () {
                _createClass(ZipArchive, [{
                    key: 'compressionLevel',
                    get: function get() {
                        return this.level;
                    },
                    set: function set(level) {
                        this.level = level;
                    }
                }, {
                    key: 'length',
                    get: function get() {
                        if (this.files === undefined) {
                            return 0;
                        }
                        return this.files.length;
                    }
                }]);

                /**
                 * constructor for creating ZipArchive instance
                 */
                function ZipArchive() {
                    _classCallCheck(this, ZipArchive);

                    this.files = [];
                    this.level = 'Normal';
                    Save.isMicrosoftBrowser = !!navigator.msSaveBlob;
                }
                /**
                 * add new item to archive
                 * @param {ZipArchiveItem} item - item to be added
                 * @returns {void}
                 */


                _createClass(ZipArchive, [{
                    key: 'addItem',
                    value: function addItem(item) {
                        if (item === null || item === undefined) {
                            throw new Error('ArgumentException: item cannot be null or undefined');
                        }
                        for (var i = 0; i < this.files.length; i++) {
                            var file = this.files[i];
                            if (file instanceof ZipArchiveItem) {
                                if (file.name === item.name) {
                                    throw new Error('item with same name already exist');
                                }
                            }
                        }
                        this.files.push(item);
                    }
                }, {
                    key: 'addDirectory',
                    value: function addDirectory(directoryName) {
                        if (directoryName === null || directoryName === undefined) {
                            throw new Error('ArgumentException: string cannot be null or undefined');
                        }
                        if (directoryName.length === 0) {
                            throw new Error('ArgumentException: string cannot be empty');
                        }
                        if (directoryName.slice(-1) !== '/') {
                            directoryName += '/';
                        }
                        if (this.files.indexOf(directoryName) !== -1) {
                            throw new Error('item with same name already exist');
                        }
                        this.files.push(directoryName);
                    }
                }, {
                    key: 'getItem',
                    value: function getItem(index) {
                        if (index >= 0 && index < this.files.length) {
                            return this.files[index];
                        }
                        return undefined;
                    }
                }, {
                    key: 'contains',
                    value: function contains(item) {
                        return this.files.indexOf(item) !== -1 ? true : false;
                    }
                }, {
                    key: 'save',
                    value: function save(fileName) {
                        if (fileName === null || fileName === undefined || fileName.length === 0) {
                            throw new Error('ArgumentException: fileName cannot be null or undefined');
                        }
                        if (this.files.length === 0) {
                            throw new Error('InvalidOperation');
                        }
                        var zipArchive = this;
                        var promise = void 0;
                        return promise = new Promise(function (resolve, reject) {
                            zipArchive.saveInternal(fileName, false).then(function () {
                                resolve(zipArchive);
                            });
                        });
                    }
                }, {
                    key: 'saveAsBlob',
                    value: function saveAsBlob() {
                        var zipArchive = this;
                        var promise = void 0;
                        return promise = new Promise(function (resolve, reject) {
                            zipArchive.saveInternal('', true).then(function (blob) {
                                resolve(blob);
                            });
                        });
                    }
                }, {
                    key: 'saveInternal',
                    value: function saveInternal(fileName, skipFileSave) {
                        var _this = this;

                        var zipArchive = this;
                        var promise = void 0;
                        return promise = new Promise(function (resolve, reject) {
                            var zipData = [];
                            var dirLength = 0;
                            for (var i = 0; i < zipArchive.files.length; i++) {
                                var compressedObject = _this.getCompressedData(_this.files[i]);
                                compressedObject.then(function (data) {
                                    dirLength = zipArchive.constructZippedObject(zipData, data, dirLength, data.isDirectory);
                                    if (zipData.length === zipArchive.files.length) {
                                        var blob = zipArchive.writeZippedContent(fileName, zipData, dirLength, skipFileSave);
                                        resolve(blob);
                                    }
                                });
                            }
                        });
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this.files !== undefined && this.files.length > 0) {
                            for (var i = 0; i < this.files.length; i++) {
                                var file = this.files[i];
                                if (file instanceof ZipArchiveItem) {
                                    file.destroy();
                                }
                                file = undefined;
                            }
                            this.files = [];
                        }
                        this.files = undefined;
                        this.level = undefined;
                    }
                }, {
                    key: 'getCompressedData',
                    value: function getCompressedData(item) {
                        var zipArchive = this;
                        var promise = new Promise(function (resolve, reject) {
                            if (item instanceof ZipArchiveItem) {
                                var reader = new FileReader();
                                reader.onload = function () {
                                    var input = new Uint8Array(reader.result);
                                    var data = {
                                        fileName: item.name, crc32Value: 0, compressedData: [],
                                        compressedSize: undefined, uncompressedDataSize: input.length, compressionType: undefined,
                                        isDirectory: false
                                    };
                                    if (zipArchive.level === 'Normal') {
                                        zipArchive.compressData(input, data, crc32Table);
                                        var length = 0;
                                        for (var i = 0; i < data.compressedData.length; i++) {
                                            length += data.compressedData[i].length;
                                        }
                                        data.compressedSize = length;
                                        data.compressionType = '\x08\x00'; //Deflated = 8
                                    } else {
                                        data.compressedSize = input.length;
                                        data.crc32Value = zipArchive.calculateCrc32Value(0, input, crc32Table);
                                        data.compressionType = '\x00\x00'; // Stored = 0
                                        data.compressedData.push(input);
                                    }
                                    resolve(data);
                                };
                                reader.readAsArrayBuffer(item.data);
                            } else {
                                var data = {
                                    fileName: item, crc32Value: 0, compressedData: '', compressedSize: 0, uncompressedDataSize: 0,
                                    compressionType: '\x00\x00', isDirectory: true
                                };
                                resolve(data);
                            }
                        });
                        return promise;
                    }
                }, {
                    key: 'compressData',
                    value: function compressData(input, data, crc32Table) {
                        var compressor = new CompressedStreamWriter(true);
                        var currentIndex = 0;
                        var nextIndex = 0;
                        do {
                            if (currentIndex >= input.length) {
                                compressor.close();
                                break;
                            }
                            nextIndex = Math.min(input.length, currentIndex + 16384);
                            var subArray = input.subarray(currentIndex, nextIndex);
                            data.crc32Value = this.calculateCrc32Value(data.crc32Value, subArray, crc32Table);
                            compressor.write(subArray, 0, nextIndex - currentIndex);
                            currentIndex = nextIndex;
                        } while (currentIndex <= input.length);
                        data.compressedData = compressor.compressedData;
                        compressor.destroy();
                    }
                }, {
                    key: 'constructZippedObject',
                    value: function constructZippedObject(zipParts, data, dirLength, isDirectory) {
                        var extFileAttr = 0;
                        var date = new Date();
                        if (isDirectory) {
                            extFileAttr = extFileAttr | 0x00010; // directory flag
                        }
                        extFileAttr = extFileAttr | 0 & 0x3F;
                        var header = this.writeHeader(data, date);
                        var localHeader = 'PK\x03\x04' + header + data.fileName;
                        var centralDir = this.writeCentralDirectory(data, header, dirLength, extFileAttr);
                        zipParts.push({ localHeader: localHeader, centralDir: centralDir, compressedData: data });
                        return dirLength + localHeader.length + data.compressedSize;
                    }
                }, {
                    key: 'writeHeader',
                    value: function writeHeader(data, date) {
                        var zipHeader = '';
                        zipHeader += '\x0A\x00' + '\x00\x00'; // version needed to extract & general purpose bit flag
                        zipHeader += data.compressionType; // compression method Deflate=8,Stored=0
                        zipHeader += this.getBytes(this.getModifiedTime(date), 2); // last modified Time
                        zipHeader += this.getBytes(this.getModifiedDate(date), 2); // last modified date
                        zipHeader += this.getBytes(data.crc32Value, 4); // crc-32 value
                        zipHeader += this.getBytes(data.compressedSize, 4); // compressed file size
                        zipHeader += this.getBytes(data.uncompressedDataSize, 4); // uncompressed file size
                        zipHeader += this.getBytes(data.fileName.length, 2); // file name length
                        zipHeader += this.getBytes(0, 2); // extra field length
                        return zipHeader;
                    }
                }, {
                    key: 'writeZippedContent',
                    value: function writeZippedContent(fileName, zipData, localDirLen, skipFileSave) {
                        var cenDirLen = 0;
                        var buffer = [];
                        for (var i = 0; i < zipData.length; i++) {
                            var item = zipData[i];
                            cenDirLen += item.centralDir.length;
                            buffer.push(this.getArrayBuffer(item.localHeader));
                            while (item.compressedData.compressedData.length) {
                                buffer.push(item.compressedData.compressedData.shift().buffer);
                            }
                        }
                        for (var _i4 = 0; _i4 < zipData.length; _i4++) {
                            buffer.push(this.getArrayBuffer(zipData[_i4].centralDir));
                        }
                        buffer.push(this.getArrayBuffer(this.writeFooter(zipData, cenDirLen, localDirLen)));
                        var blob = new Blob(buffer, { type: 'application/zip' });
                        if (!skipFileSave) {
                            Save.save(fileName, blob);
                        }
                        return blob;
                    }
                }, {
                    key: 'writeCentralDirectory',
                    value: function writeCentralDirectory(data, localHeader, offset, externalFileAttribute) {
                        var directoryHeader = 'PK\x01\x02' + this.getBytes(0x0014, 2) + localHeader + // inherit from file header
                        this.getBytes(0, 2) + // comment length
                        '\x00\x00' + '\x00\x00' + // internal file attributes 
                        this.getBytes(externalFileAttribute, 4) + // external file attributes
                        this.getBytes(offset, 4) + // local fileHeader relative offset
                        data.fileName;
                        return directoryHeader;
                    }
                }, {
                    key: 'writeFooter',
                    value: function writeFooter(zipData, centralLength, localLength) {
                        var dirEnd = 'PK\x05\x06' + '\x00\x00' + '\x00\x00' + this.getBytes(zipData.length, 2) + this.getBytes(zipData.length, 2) + this.getBytes(centralLength, 4) + this.getBytes(localLength, 4) + this.getBytes(0, 2);
                        return dirEnd;
                    }
                }, {
                    key: 'getArrayBuffer',
                    value: function getArrayBuffer(input) {
                        var a = new Uint8Array(input.length);
                        for (var j = 0; j < input.length; ++j) {
                            a[j] = input.charCodeAt(j) & 0xFF;
                        }
                        return a.buffer;
                    }
                }, {
                    key: 'getBytes',
                    value: function getBytes(value, offset) {
                        var bytes = '';
                        for (var i = 0; i < offset; i++) {
                            bytes += String.fromCharCode(value & 0xff);
                            value = value >>> 8;
                        }
                        return bytes;
                    }
                }, {
                    key: 'getModifiedTime',
                    value: function getModifiedTime(date) {
                        var modTime = date.getHours();
                        modTime = modTime << 6;
                        modTime = modTime | date.getMinutes();
                        modTime = modTime << 5;
                        return modTime = modTime | date.getSeconds() / 2;
                    }
                }, {
                    key: 'getModifiedDate',
                    value: function getModifiedDate(date) {
                        var modiDate = date.getFullYear() - 1980;
                        modiDate = modiDate << 4;
                        modiDate = modiDate | date.getMonth() + 1;
                        modiDate = modiDate << 5;
                        return modiDate = modiDate | date.getDate();
                    }
                }, {
                    key: 'calculateCrc32Value',
                    value: function calculateCrc32Value(crc32Value, input, crc32Table) {
                        crc32Value ^= -1;
                        for (var i = 0; i < input.length; i++) {
                            crc32Value = crc32Value >>> 8 ^ crc32Table[(crc32Value ^ input[i]) & 0xFF];
                        }
                        return crc32Value ^ -1;
                    }
                }]);

                return ZipArchive;
            }());

            _export('ZipArchiveItem', ZipArchiveItem = function () {
                _createClass(ZipArchiveItem, [{
                    key: 'name',
                    get: function get() {
                        return this.fileName;
                    },
                    set: function set(value) {
                        this.fileName = value;
                    }
                }]);

                /**
                 * constructor for creating {ZipArchiveItem} instance
                 * @param {Blob|ArrayBuffer} data file data
                 * @param {itemName} itemName absolute file path
                 */
                function ZipArchiveItem(data, itemName) {
                    _classCallCheck(this, ZipArchiveItem);

                    if (data === null || data === undefined) {
                        throw new Error('ArgumentException: data cannot be null or undefined');
                    }
                    if (itemName === null || itemName === undefined) {
                        throw new Error('ArgumentException: string cannot be null or undefined');
                    }
                    if (itemName.length === 0) {
                        throw new Error('string cannot be empty');
                    }
                    this.data = data;
                    this.name = itemName;
                }
                /**
                 * release allocated un-managed resource
                 * @returns {void}
                 */


                _createClass(ZipArchiveItem, [{
                    key: 'destroy',
                    value: function destroy() {
                        this.fileName = undefined;
                        this.data = undefined;
                    }
                }]);

                return ZipArchiveItem;
            }());

            /**
             * construct cyclic redundancy code table
             */
            (function () {
                var i = void 0;
                for (var j = 0; j < 256; j++) {
                    i = j;
                    for (var k = 0; k < 8; k++) {
                        i = i & 1 ? 0xEDB88320 ^ i >>> 1 : i >>> 1;
                    }
                    crc32Table[j] = i;
                }
            })();

            /**
             * export ZipArchive class
             */

            _export('ZipArchive', ZipArchive);

            _export('ZipArchiveItem', ZipArchiveItem);

            _export('CompressedStreamWriter', CompressedStreamWriter);

            _export('CompressorHuffmanTree', CompressorHuffmanTree);

            _export('ChecksumCalculator', ChecksumCalculator);
        }
    };
});

//# sourceMappingURL=ej2-compression.es2015-compiled.js.map