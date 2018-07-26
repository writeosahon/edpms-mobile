'use strict';System.register(['@syncfusion/ej2-compression','@syncfusion/ej2-file-utils'],function(_export,_context){"use strict";var CompressedStreamWriter,Encoding,StreamWriter,_typeof,_get,_createClass,Dictionary,PdfName,Operators,DictionaryProperties,PdfDictionary,SaveSectionCollectionEventHandler,SaveAnnotationEventHandler,SaveSectionEventHandler,SaveTemplateEventHandler,PdfNumber,PdfArray,PdfStream,InternalEnum,PdfString,PdfReference,PdfReferenceHolder,PdfAction,PdfUriAction,PdfHorizontalAlignment,PdfVerticalAlignment,PdfTextAlignment,TextRenderingMode,PdfLineJoin,PdfLineCap,PdfDashStyle,PdfFillMode,PdfColorSpace,PdfBlendMode,PdfGraphicsUnit,PdfGridImagePosition,PdfColor,PointF,SizeF,RectangleF,PdfBrush,PdfSolidBrush,PdfFontStyle,PdfFontFamily,PdfFontType,PdfWordWrapType,PdfSubSuperScript,FontEncoding,PdfStringFormat,StringTokenizer,PdfStringLayouter,PdfStringLayoutResult,LineInfo,LineType,PdfFont,PdfWriter,ObjectStatus,PdfMainObjectCollection,ObjectInfo,PdfDocumentBase,ObjectType,PdfCatalog,PdfCrossTable,RegisteredObject,PdfPageSize,PdfPageOrientation,PdfPageRotateAngle,PdfNumberStyle,PdfDockStyle,PdfAlignmentStyle,TemplateType,PdfMargins,PdfPageSettings,PdfStreamWriter,PdfPen,PdfTransformationMatrix,Matrix,ProcedureSets,TemporaryDictionary,PdfTransparency,PdfAutomaticFieldInfoCollection,PdfGraphicsElement,PdfAutomaticField,PdfAutomaticFieldInfo,PdfGraphics,GetResourceEventHandler,PdfGraphicsState,TransparencyData,PdfPageLayer,PdfCollection,PdfPageLayerCollection,PdfTemplate,ByteArray,PdfBoolean,ImageFormat,ImageDecoder,PdfUnitConverter,PdfImage,PdfBitmap,PdfResources,Guid,PdfPageBase,PdfAnnotationCollection,PdfPage,PageAddedEventArgs,PdfSectionPageCollection,PdfDocumentTemplate,PdfSectionTemplate,PdfSection,PageSettingsState,PdfSectionCollection,PdfDocumentPageCollection,PdfCacheCollection,PdfDocument,PdfFontMetrics,WidthTable,StandardWidthTable,PdfStandardFontMetricsFactory,PdfStandardFont,PdfAnnotation,PdfLinkAnnotation,PdfActionLinkAnnotation,PdfDocumentLinkAnnotation,PdfLayoutType,PdfLayoutBreakType,ElementLayouter,PdfLayoutFormat,PdfLayoutParams,PdfLayoutResult,PdfLayoutElement,TextLayouter,TextPageLayoutResult,PdfTextLayoutResult,PdfTextElement,PdfUriAnnotation,PdfTextWebLink,PdfNumbersConvertor,PdfTemplateValuePair,PdfMultipleValueField,PdfPageNumberField,PdfCompositeField,PdfSingleValueField,PdfPageCountField,PdfDestinationMode,PdfDestination,PdfPageTemplateElement,PdfBorders,PdfPaddings,PdfBorderOverlapStyle,PdfGridStyleBase,PdfGridStyle,PdfGridCellStyle,PdfGridRowStyle,PdfHorizontalOverflowType,PdfGridCell,PdfGridCellCollection,PdfGridColumn,PdfGridColumnCollection,PdfGridRow,PdfGridRowCollection,PdfGridHeaderCollection,PdfGridLayoutFormat,PdfGrid,GridCellEventArgs,PdfGridBeginCellDrawEventArgs,PdfGridEndCellDrawEventArgs,PdfCancelEventArgs,BeginPageLayoutEventArgs,EndPageLayoutEventArgs,PdfGridBeginPageLayoutEventArgs,PdfGridEndPageLayoutEventArgs,RowLayoutResult,PdfGridLayoutResult;function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * @private
 * @hidden
 */function defaultToString(item){// if (item === null) {
//     return 'COLLECTION_NULL';
// } else if (typeof item === 'undefined') {
//     return 'COLLECTION_UNDEFINED';
// } else if (Object.prototype.toString.call(item) === '[object String]') {
if(Object.prototype.toString.call(item)==='[object String]'){return'$s'+item;}else{return'$o'+item.toString();}}/**
 * Dictionary.ts class for EJ2-PDF
 * @private
 * @hidden
 *//**
 * @private
 * @hidden
 */return{setters:[function(_syncfusionEj2Compression){CompressedStreamWriter=_syncfusionEj2Compression.CompressedStreamWriter;},function(_syncfusionEj2FileUtils){Encoding=_syncfusionEj2FileUtils.Encoding;StreamWriter=_syncfusionEj2FileUtils.StreamWriter;}],execute:function(){_typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};_get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();_export('Dictionary',Dictionary=function(){/**
     * @private
     * @hidden
     */function Dictionary(toStringFunction){_classCallCheck(this,Dictionary);this.table={};this.nElements=0;this.toStr=toStringFunction||defaultToString;}/**
     * @private
     * @hidden
     */_createClass(Dictionary,[{key:'getValue',value:function getValue(key){var pair=this.table['$'+this.toStr(key)];if(typeof pair==='undefined'){return undefined;}return pair.value;}},{key:'setValue',value:function setValue(key,value){// if (typeof key === 'undefined' || typeof value === 'undefined') {
//     return undefined;
// }
var ret=void 0;var k='$'+this.toStr(key);var previousElement=this.table[k];// if (typeof previousElement === 'undefined') {
this.nElements++;ret=undefined;// }
this.table[k]={key:key,value:value};return ret;}},{key:'remove',value:function remove(key){var k='$'+this.toStr(key);var previousElement=this.table[k];// if (typeof previousElement !== 'undefined') {
delete this.table[k];this.nElements--;return previousElement.value;// }
// return undefined;
}},{key:'keys',value:function keys(){var keysArray=[];var namesOfKeys=Object.keys(this.table);for(var index1=0;index1<namesOfKeys.length;index1++){// if (Object.prototype.hasOwnProperty.call(this.table, namesOfKeys[index1])) {
var pair1=this.table[namesOfKeys[index1]];keysArray.push(pair1.key);// }
}return keysArray;}},{key:'values',value:function values(){var valuesArray=[];var namesOfValues=Object.keys(this.table);for(var index2=0;index2<namesOfValues.length;index2++){// if (Object.prototype.hasOwnProperty.call(this.table, namesOfValues[index2])) {
var pair2=this.table[namesOfValues[index2]];valuesArray.push(pair2.value);// }
}return valuesArray;}},{key:'containsKey',value:function containsKey(key){var retutnValue=true;if(typeof this.getValue(key)==='undefined'){retutnValue=true;}else{retutnValue=false;}return!retutnValue;}},{key:'clear',value:function clear(){this.table={};this.nElements=0;}},{key:'size',value:function size(){return this.nElements;}}]);return Dictionary;}());_export('PdfName',PdfName=function(){function PdfName(value){_classCallCheck(this,PdfName);/**
         * `Start symbol` of the name object.
         * @default /
         * @private
         */this.stringStartMark='/';/**
         * `Value` of the element.
         * @private
         */this.internalValue='';/**
         * Indicates if the object is currently in `saving state or not`.
         * @default false
         * @private
         */this.isSaving6=false;/**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */this.position6=-1;this.internalValue=this.normalizeValue(value);}//property
/**
     * Gets or sets the `Status` of the specified object.
     * @private
     */_createClass(PdfName,[{key:'save',value:function save(writer){// if (writer === null) {
//     throw new Error('ArgumentNullException : writer');
// }
writer.write(this.toString());}},{key:'toString',value:function toString(){return this.stringStartMark+this.escapeString(this.value);}},{key:'clone',value:function clone(crossTable){var newName=new PdfName();newName.value=this.internalValue;return newName;}},{key:'escapeString',value:function escapeString(stringValue){// if (str === null) {
//     throw new Error('ArgumentNullException : str');
// }
// if (str === '') {
//     return str;
// }
var result='';for(var i=0,len=stringValue.length;i<len;i++){var ch=stringValue[i];var index=PdfName.delimiters.indexOf(ch);// switch (ch) {
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
result=result+ch;}return result;}},{key:'normalizeValue',value:function normalizeValue(value,c){// if (typeof c === undefined) {
//     let str : string = value;
//     for (let i : number = 0; i < PdfName.replacements.length; i++) {
//         str = this.normalizeValue(str, c);
//     }
//     return str;
// } else {
return value;// }
}},{key:'status',get:function get(){return this.status6;},set:function set(value){this.status6=value;}},{key:'isSaving',get:function get(){return this.isSaving6;},set:function set(value){this.isSaving6=value;}},{key:'objectCollectionIndex',get:function get(){return this.index6;},set:function set(value){this.index6=value;}},{key:'position',get:function get(){return this.position6;},set:function set(value){this.position6=value;}},{key:'clonedObject',get:function get(){return null;}},{key:'value',get:function get(){return this.internalValue;},set:function set(value){// if (value !== this.value) {
var val=value;if(value!==null&&value.length>0){// val = (value.substring(0, 1) === this.stringStartMark) ? value.substring(1) : value;
val=value;this.internalValue=this.normalizeValue(val);}else{this.internalValue=val;}// }
}}]);return PdfName;}());/**
 * PDF `special characters`.
 * @private
 */PdfName.delimiters='()<>[]{}/%}';/**
 * The symbols that are not allowed in PDF names and `should be replaced`.
 * @private
 */PdfName.replacements=[' ','\t','\n','\r'];/**
 * PdfOperators.ts class for EJ2-PDF
 * Class of string PDF common operators.
 * @private
 */_export('Operators',Operators=/**
     * Create an instance of `PdfOperator` class.
     * @private
     */function Operators(){_classCallCheck(this,Operators);/**
         * Specifies the value of `test`.
         * @private
         */this.forTest='test';this.forTest=Operators.obj;});/**
 * Specifies the value of `obj`.
 * @private
 */Operators.obj='obj';/**
 * Specifies the value of `endObj`.
 * @private
 */Operators.endObj='endobj';/**
 * Specifies the value of `R`.
 * @private
 */Operators.r='R';/**
 * Specifies the value of ` `.
 * @private
 */Operators.whiteSpace=' ';/**
 * Specifies the value of `/`.
 * @private
 */Operators.slash='/';/**
 * Specifies the value of `\r\n`.
 * @private
 */Operators.newLine='\r\n';/**
 * Specifies the value of `stream`.
 * @private
 */Operators.stream='stream';/**
 * Specifies the value of `endStream`.
 * @private
 */Operators.endStream='endstream';/**
 * Specifies the value of `xref`.
 * @private
 */Operators.xref='xref';/**
 * Specifies the value of `f`.
 * @private
 */Operators.f='f';/**
 * Specifies the value of `n`.
 * @private
 */Operators.n='n';/**
 * Specifies the value of `trailer`.
 * @private
 */Operators.trailer='trailer';/**
 * Specifies the value of `startxref`.
 * @private
 */Operators.startxref='startxref';/**
 * Specifies the value of `eof`.
 * @private
 */Operators.eof='%%EOF';/**
 * Specifies the value of `header`.
 * @private
 */Operators.header='%PDF-1.5';/**
 * Specifies the value of `beginText`.
 * @private
 */Operators.beginText='BT';/**
 * Specifies the value of `endText`.
 * @private
 */Operators.endText='ET';/**
 * Specifies the value of `m`.
 * @private
 */Operators.beginPath='m';/**
 * Specifies the value of `l`.
 * @private
 */Operators.appendLineSegment='l';/**
 * Specifies the value of `S`.
 * @private
 */Operators.stroke='S';/**
 * Specifies the value of `f`.
 * @private
 */Operators.fill='f';/**
 * Specifies the value of `f*`.
 * @private
 */Operators.fillEvenOdd='f*';/**
 * Specifies the value of `B`.
 * @private
 */Operators.fillStroke='B';/**
 * Specifies the value of `B*`.
 * @private
 */Operators.fillStrokeEvenOdd='B*';/**
 * Specifies the value of `c`.
 * @private
 */Operators.appendbeziercurve='c';/**
 * Specifies the value of `re`.
 * @private
 */Operators.appendRectangle='re';/**
 * Specifies the value of `q`.
 * @private
 */Operators.saveState='q';/**
 * Specifies the value of `Q`.
 * @private
 */Operators.restoreState='Q';/**
 * Specifies the value of `Do`.
 * @private
 */Operators.paintXObject='Do';/**
 * Specifies the value of `cm`.
 * @private
 */Operators.modifyCtm='cm';/**
 * Specifies the value of `Tm`.
 * @private
 */Operators.modifyTM='Tm';/**
 * Specifies the value of `w`.
 * @private
 */Operators.setLineWidth='w';/**
 * Specifies the value of `J`.
 * @private
 */Operators.setLineCapStyle='J';/**
 * Specifies the value of `j`.
 * @private
 */Operators.setLineJoinStyle='j';/**
 * Specifies the value of `d`.
 * @private
 */Operators.setDashPattern='d';/**
 * Specifies the value of `i`.
 * @private
 */Operators.setFlatnessTolerance='i';/**
 * Specifies the value of `h`.
 * @private
 */Operators.closePath='h';/**
 * Specifies the value of `s`.
 * @private
 */Operators.closeStrokePath='s';/**
 * Specifies the value of `b`.
 * @private
 */Operators.closeFillStrokePath='b';/**
 * Specifies the value of `setCharacterSpace`.
 * @private
 */Operators.setCharacterSpace='Tc';/**
 * Specifies the value of `setWordSpace`.
 * @private
 */Operators.setWordSpace='Tw';/**
 * Specifies the value of `setHorizontalScaling`.
 * @private
 */Operators.setHorizontalScaling='Tz';/**
 * Specifies the value of `setTextLeading`.
 * @private
 */Operators.setTextLeading='TL';/**
 * Specifies the value of `setFont`.
 * @private
 */Operators.setFont='Tf';/**
 * Specifies the value of `setRenderingMode`.
 * @private
 */Operators.setRenderingMode='Tr';/**
 * Specifies the value of `setTextRise`.
 * @private
 */Operators.setTextRise='Ts';/**
 * Specifies the value of `setTextScaling`.
 * @private
 */Operators.setTextScaling='Tz';/**
 * Specifies the value of `setCoords`.
 * @private
 */Operators.setCoords='Td';/**
 * Specifies the value of `goToNextLine`.
 * @private
 */Operators.goToNextLine='T*';/**
 * Specifies the value of `setText`.
 * @private
 */Operators.setText='Tj';/**
 * Specifies the value of `setTextWithFormatting`.
 * @private
 */Operators.setTextWithFormatting='TJ';/**
 * Specifies the value of `setTextOnNewLine`.
 * @private
 */Operators.setTextOnNewLine='\'';/**
 * Specifies the value of `selectcolorspaceforstroking`.
 * @private
 */Operators.selectcolorspaceforstroking='CS';/**
 * Specifies the value of `selectcolorspacefornonstroking`.
 * @private
 */Operators.selectcolorspacefornonstroking='cs';/**
 * Specifies the value of `setrbgcolorforstroking`.
 * @private
 */Operators.setrbgcolorforstroking='RG';/**
 * Specifies the value of `setrbgcolorfornonstroking`.
 * @private
 */Operators.setrbgcolorfornonstroking='rg';/**
 * Specifies the value of `K`.
 * @private
 */Operators.setcmykcolorforstroking='K';/**
 * Specifies the value of `k`.
 * @private
 */Operators.setcmykcolorfornonstroking='k';/**
 * Specifies the value of `G`.
 * @private
 */Operators.setgraycolorforstroking='G';/**
 * Specifies the value of `g`.
 * @private
 */Operators.setgraycolorfornonstroking='g';/**
 * Specifies the value of `W`.
 * @private
 */Operators.clipPath='W';/**
 * Specifies the value of `clipPathEvenOdd`.
 * @private
 */Operators.clipPathEvenOdd='W*';/**
 * Specifies the value of `n`.
 * @private
 */Operators.endPath='n';/**
 * Specifies the value of `setGraphicsState`.
 * @private
 */Operators.setGraphicsState='gs';/**
 * Specifies the value of `%`.
 * @private
 */Operators.comment='%';/**
 * Specifies the value of `*`.
 * @private
 */Operators.evenOdd='*';/**
 * Specifies the value of `M`.
 * @private
 */Operators.setMiterLimit='M';/**
 * dictionaryProperties.ts class for EJ2-PDF
 * PDF dictionary properties.
 * @private
 */_export('DictionaryProperties',DictionaryProperties=/**
     * Initialize an instance for `PdfDictionaryProperties` class.
     * @private
     */function DictionaryProperties(){_classCallCheck(this,DictionaryProperties);/**
         * Specifies the value of `Pages`.
         * @private
         */this.pages='Pages';/**
         * Specifies the value of `Kids`.
         * @private
         */this.kids='Kids';/**
         * Specifies the value of `Count`.
         * @private
         */this.count='Count';/**
         * Specifies the value of `Resources`.
         * @private
         */this.resources='Resources';/**
         * Specifies the value of `Type`.
         * @private
         */this.type='Type';/**
         * Specifies the value of `Size`.
         * @private
         */this.size='Size';/**
         * Specifies the value of `MediaBox`.
         * @private
         */this.mediaBox='MediaBox';/**
         * Specifies the value of `Parent`.
         * @private
         */this.parent='Parent';/**
         * Specifies the value of `Root`.
         * @private
         */this.root='Root';/**
         * Specifies the value of `DecodeParms`.
         * @private
         */this.decodeParms='DecodeParms';/**
         * Specifies the value of `Filter`.
         * @private
         */this.filter='Filter';/**
         * Specifies the value of `Font`.
         * @private
         */this.font='Font';/**
         * Specifies the value of `Type1`.
         * @private
         */this.type1='Type1';/**
         * Specifies the value of `BaseFont`.
         * @private
         */this.baseFont='BaseFont';/**
         * Specifies the value of `Encoding`.
         * @private
         */this.encoding='Encoding';/**
         * Specifies the value of `Subtype`.
         * @private
         */this.subtype='Subtype';/**
         * Specifies the value of `Contents`.
         * @private
         */this.contents='Contents';/**
         * Specifies the value of `ProcSet`.
         * @private
         */this.procset='ProcSet';/**
         * Specifies the value of `ColorSpace`.
         * @private
         */this.colorSpace='ColorSpace';/**
         * Specifies the value of `ExtGState`.
         * @private
         */this.extGState='ExtGState';/**
         * Specifies the value of `Pattern`.
         * @private
         */this.pattern='Pattern';/**
         * Specifies the value of `XObject`.
         * @private
         */this.xObject='XObject';/**
         * Specifies the value of `Length`.
         * @private
         */this.length='Length';/**
         * Specifies the value of `Width`.
         * @private
         */this.width='Width';/**
         * Specifies the value of `Height`.
         * @private
         */this.height='Height';/**
         * Specifies the value of `BitsPerComponent`.
         * @private
         */this.bitsPerComponent='BitsPerComponent';/**
         * Specifies the value of `Image`.
         * @private
         */this.image='Image';/**
         * Specifies the value of `dctdecode`.
         * @private
         */this.dctdecode='DCTDecode';/**
         * Specifies the value of `Columns`.
         * @private
         */this.columns='Columns';/**
         * Specifies the value of `BlackIs1`.
         * @private
         */this.blackIs1='BlackIs1';/**
         * Specifies the value of `K`.
         * @private
         */this.k='K';/**
         * Specifies the value of `S`.
         * @private
         */this.s='S';/**
         * Specifies the value of `Predictor`.
         * @private
         */this.predictor='Predictor';/**
         * Specifies the value of `DeviceRGB`.
         * @private
         */this.deviceRgb='DeviceRGB';/**
         * Specifies the value of `Next`.
         * @private
         */this.next='Next';/**
         * Specifies the value of `Action`.
         * @private
         */this.action='Action';/**
         * Specifies the value of `Link`.
         * @private
         */this.link='Link';/**
         *
         * Specifies the value of `A`.
         * @private
         */this.a='A';/**
         * Specifies the value of `Annot`.
         * @private
         */this.annot='Annot';/**
         * Specifies the value of `P`.
         * @private
         */this.p='P';/**
         * Specifies the value of `C`.
         * @private
         */this.c='C';/**
         * Specifies the value of `Rect`.
         * @private
         */this.rect='Rect';/**
         * Specifies the value of `URI`.
         * @private
         */this.uri='URI';/**
         * Specifies the value of `Annots`.
         * @private
         */this.annots='Annots';/**
         * Specifies the value of `ca`.
         * @private
         */this.ca='ca';/**
         * Specifies the value of `CA`.
         * @private
         */this.CA='CA';/**
         * Specifies the value of `XYZ`.
         * @private
         */this.xyz='XYZ';/**
         * Specifies the value of `Fit`.
         * @private
         */this.fit='Fit';/**
         * Specifies the value of `Dest`.
         * @private
         */this.dest='Dest';/**
         * Specifies the value of `BM`.
         * @private
         */this.BM='BM';/**
         * Specifies the value of `flatedecode`.
         * @private
         */this.flatedecode='FlateDecode';/**
         * Specifies the value of `Rotate`.
         * @private
         */this.rotate='Rotate';/**
         * Specifies the value of 'bBox'.
         * @private
         */this.bBox='BBox';/**
         * Specifies the value of 'form'.
         * @private
         */this.form='Form';//
});_export('PdfDictionary',PdfDictionary=function(){function PdfDictionary(dictionary){_classCallCheck(this,PdfDictionary);/**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */this.position7=-1;/**
         * The `IPdfSavable` with the specified key.
         * @private
         */this.primitiveItems=new Dictionary();/**
         * `Start marker` for dictionary.
         * @private
         */this.prefix='<<';/**
         * `End marker` for dictionary.
         * @private
         */this.suffix='>>';/**
         * @hidden
         * @private
         */this.resources=[];/**
         * Internal variable to hold `cloned object`.
         * @default null
         * @private
         */this.object=null;/**
         * Flag for PDF file formar 1.5 is dictionary `archiving` needed.
         * @default true
         * @private
         */this.archive=true;if(typeof dictionary==='undefined'){this.primitiveItems=new Dictionary();this.encrypt=true;this.dictionaryProperties=new DictionaryProperties();}else{this.primitiveItems=new Dictionary();var keys=dictionary.items.keys();var values=dictionary.items.values();for(var index=0;index<dictionary.items.size();index++){this.primitiveItems.setValue(keys[index],values[index]);}this.status=dictionary.status;this.freezeChanges(this);this.encrypt=true;this.dictionaryProperties=new DictionaryProperties();}}//Properties
/**
     * Gets or sets the `IPdfSavable` with the specified key.
     * @private
     */_createClass(PdfDictionary,[{key:'getArchive',value:function getArchive(){return this.archive;}},{key:'setArchive',value:function setArchive(value){this.archive=value;}},{key:'setEncrypt',value:function setEncrypt(value){this.encrypt=value;this.modify();}},{key:'getEncrypt',value:function getEncrypt(){return this.encrypt;}},{key:'freezeChanges',value:function freezeChanges(freezer){this.bChanged=false;}},{key:'clone',value:function clone(crossTable){//Need to add more codings
var newDict=new PdfDictionary();return newDict;}},{key:'modify',value:function modify(){this.bChanged=true;}},{key:'remove',value:function remove(key){if(typeof key!=='string'){this.primitiveItems.remove(key.value);this.modify();}else{this.remove(new PdfName(key));}}},{key:'containsKey',value:function containsKey(key){var returnValue=false;returnValue=this.primitiveItems.containsKey(key.toString());return returnValue;}},{key:'onBeginSave',value:function onBeginSave(){this.beginSave.sender.beginSave();}},{key:'onTemplateBeginSave',value:function onTemplateBeginSave(){this.pageBeginDrawTemplate.sender.pageBeginSave();}},{key:'onBeginAnnotationSave',value:function onBeginAnnotationSave(){this.annotationBeginSave.sender.beginSave();}},{key:'onSectionBeginSave',value:function onSectionBeginSave(writer){var saveEvent=this.sectionBeginSave;saveEvent.sender.beginSave(saveEvent.state,writer);}},{key:'save',value:function save(writer,bRaiseEvent){if(typeof bRaiseEvent==='undefined'){this.save(writer,true);}else{writer.write(this.prefix);if(typeof this.beginSave!=='undefined'){this.onBeginSave();}if(typeof this.annotationBeginSave!=='undefined'){this.onBeginAnnotationSave();}if(typeof this.sectionBeginSave!=='undefined'){this.onSectionBeginSave(writer);}if(typeof this.pageBeginDrawTemplate!=='undefined'){this.onTemplateBeginSave();}// }
if(this.Count>0){this.saveItems(writer);}writer.write(this.suffix);writer.write(Operators.newLine);}}},{key:'saveItems',value:function saveItems(writer){writer.write(Operators.newLine);var keys=this.primitiveItems.keys();var values=this.primitiveItems.values();for(var index=0;index<keys.length;index++){var key=keys[index];var name=new PdfName(key);name.save(writer);writer.write(Operators.whiteSpace);var resources=values[index];resources.save(writer);writer.write(Operators.newLine);}}},{key:'items',get:function get(){return this.primitiveItems;}},{key:'status',get:function get(){return this.status7;},set:function set(value){this.status7=value;}},{key:'isSaving',get:function get(){return this.isSaving7;},set:function set(value){this.isSaving7=value;}},{key:'objectCollectionIndex',get:function get(){return this.index7;},set:function set(value){this.index7=value;}},{key:'clonedObject',get:function get(){return this.object;}},{key:'position',get:function get(){return this.position7;},set:function set(value){this.position7=value;}},{key:'Count',get:function get(){return this.primitiveItems.size();}},{key:'Dictionary',get:function get(){return this;}}]);return PdfDictionary;}());_export('SaveSectionCollectionEventHandler',SaveSectionCollectionEventHandler=/**
     * New instance for `save section collection event handler` class.
     * @private
     */function SaveSectionCollectionEventHandler(sender){_classCallCheck(this,SaveSectionCollectionEventHandler);this.sender=sender;});_export('SaveAnnotationEventHandler',SaveAnnotationEventHandler=/**
     * New instance for `save annotation event handler` class.
     * @private
     */function SaveAnnotationEventHandler(sender){_classCallCheck(this,SaveAnnotationEventHandler);this.sender=sender;});_export('SaveSectionEventHandler',SaveSectionEventHandler=// constructors
/**
     * New instance for `save section event handler` class.
     * @private
     */function SaveSectionEventHandler(sender,state){_classCallCheck(this,SaveSectionEventHandler);this.sender=sender;this.state=state;});_export('SaveTemplateEventHandler',SaveTemplateEventHandler=/**
     * New instance for save section collection event handler class.
     * @public
     */function SaveTemplateEventHandler(sender){_classCallCheck(this,SaveTemplateEventHandler);this.sender=sender;});_export('PdfNumber',PdfNumber=function(){/**
     * Initializes a new instance of the `PdfNumber` class.
     * @private
     */function PdfNumber(value){_classCallCheck(this,PdfNumber);/**
         * Sotres the `position`.
         * @default -1
         * @private
         */this.position5=-1;this.value=value;}/**
     * Gets or sets the `integer` value.
     * @private
     */_createClass(PdfNumber,[{key:'save',value:function save(writer){writer.write(this.intValue.toString());//tostring(CultureInfo.InletiantCulture)
}},{key:'clone',value:function clone(crossTable){var newNumber=new PdfNumber(this.value);return newNumber;}},{key:'intValue',get:function get(){return this.value;},set:function set(value){this.value=value;}},{key:'isInteger',get:function get(){return this.integer;},set:function set(value){this.integer=value;}},{key:'status',get:function get(){return this.status5;},set:function set(value){this.status5=value;}},{key:'isSaving',get:function get(){return this.isSaving5;},set:function set(value){this.isSaving5=value;}},{key:'objectCollectionIndex',get:function get(){return this.index5;},set:function set(value){this.index5=value;}},{key:'position',get:function get(){return this.position5;},set:function set(value){this.position5=value;}},{key:'clonedObject',get:function get(){var rValue=null;return rValue;}}],[{key:'floatToString',value:function floatToString(number){// let tempString1 : string = number.toString();
// let tempString2 : string = tempString1.indexOf('.') != -1 ? tempString1.substring(0, tempString1.indexOf('.')) : tempString1;
var returnString=number.toFixed(2);if(returnString==='0.00'){returnString='.00';}// let prefixLength : number = (22 - tempString2.length) >= 0 ? (22 - tempString2.length) : 0;
// for (let index : number = 0; index < prefixLength; index++) {
//     returnString += '0';
// }
// returnString += tempString2 + '.00';
// returnString += (tempString3.length > 6) ? tempString3.substring(0,6) : tempString3;
// let suffixLength : number = (6 - tempString3.length) >= 0 ? (6 - tempString3.length) : 0;
// for (let index : number = 0; index < suffixLength; index++) {
//     returnString += '0';
// }
return returnString;}},{key:'min',value:function min(x,y,z){var r=Math.min(x,y);return Math.min(z,r);}}]);return PdfNumber;}());_export('PdfArray',PdfArray=function(){function PdfArray(array){_classCallCheck(this,PdfArray);//Fields
/**
         * `startMark` - '['
         * @private
         */this.startMark='[';/**
         * `endMark` - ']'.
         * @private
         */this.endMark=']';/**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */this.position9=-1;/**
         * Internal variable to hold `cloned object`.
         * @default null
         * @private
         */this.clonedObject9=null;if(typeof array==='undefined'){this.internalElements=[];}else{if(typeof array!=='undefined'&&!(array instanceof PdfArray)){var tempNumberArray=array;for(var index=0;index<tempNumberArray.length;index++){var pdfNumber=new PdfNumber(tempNumberArray[index]);this.add(pdfNumber);}// } else if (typeof array !== 'undefined' && (array instanceof PdfArray)) {
}else{var tempArray=array;// if (tempArray.Elements.length > 0) {
this.internalElements=[];for(var _index=0;_index<tempArray.elements.length;_index++){this.internalElements.push(tempArray.elements[_index]);}// }
}}}//property
/**
     * Gets the `IPdfSavable` at the specified index.
     * @private
     */_createClass(PdfArray,[{key:'items',value:function items(index){// if (index < 0 || index >= this.Count) {
//     throw new Error('ArgumentOutOfRangeException : index, The index can"t be less then zero or greater then Count.');
// }
return this.internalElements[index];}},{key:'add',value:function add(element){// if (element === null) {
//     throw new Error('ArgumentNullException : obj');
// }
if(typeof this.internalElements==='undefined'){this.internalElements=[];}this.internalElements.push(element);this.markedChange();}},{key:'markedChange',value:function markedChange(){this.bChanged=true;}},{key:'contains',value:function contains(element){var returnValue=false;for(var index=0;index<this.internalElements.length;index++){var tempElement=this.internalElements[index];var inputElement=element;if(tempElement!=null&&typeof tempElement!=='undefined'&&inputElement!=null&&typeof inputElement!=='undefined'){if(tempElement.value===inputElement.value){return true;}}// if (this.internalElements[index] === element) {
//     returnValue = true;
// }
}return returnValue;}},{key:'getItems',value:function getItems(index){// if (index < 0 || index >= this.Count) {
//     throw new Error('ArgumentOutOfRangeException : index , The index can"t be less then zero or greater then Count.');
// }
return this.internalElements[index];}},{key:'save',value:function save(writer){// if (writer === null) {
//     throw new Error('ArgumentNullException : writer');
// }
writer.write(this.startMark);for(var i=0,len=this.count;i<len;i++){this.getItems(i).save(writer);if(i+1!==len){writer.write(Operators.whiteSpace);}}writer.write(this.endMark);}},{key:'clone',value:function clone(crossTable){// if (this.clonedObject9 !== null && this.clonedObject9.CrossTable === crossTable) {
//     return this.clonedObject9;
// } else {
this.clonedObject9=null;// Else clone the object.
var newArray=new PdfArray();for(var index=0;index<this.internalElements.length;index++){var obj=this.internalElements[index];newArray.add(obj.clone(crossTable));}newArray.pdfCrossTable=crossTable;this.clonedObject9=newArray;return newArray;}},{key:'insert',value:function insert(index,element){if(index<this.internalElements.length&&index>0){var tempElements=[];for(var i=0;i<index;i++){tempElements.push(this.internalElements[i]);}tempElements.push(element);for(var _i=index;_i<this.internalElements.length;_i++){tempElements.push(this.internalElements[_i]);}this.internalElements=tempElements;}else{this.internalElements.push(element);}this.markChanged();}},{key:'indexOf',value:function indexOf(element){return this.internalElements.indexOf(element);}},{key:'remove',value:function remove(element){// if (element === null) {
//     throw new Error('ArgumentNullException : element');
// }
var index=this.internalElements.indexOf(element);// if (index >= 0 && index < this.internalElements.length) {
this.internalElements[index]=null;// }
this.markChanged();}},{key:'removeAt',value:function removeAt(index){// this.internalElements.RemoveAt(index);
if(this.internalElements.length>index){var tempArray=[];for(var i=0;i<index;i++){tempArray.push(this.internalElements[i]);}for(var _i2=index+1;_i2<this.internalElements.length;_i2++){tempArray.push(this.internalElements[_i2]);}this.internalElements=tempArray;}this.markChanged();}},{key:'clear',value:function clear(){this.internalElements=[];this.markChanged();}},{key:'markChanged',value:function markChanged(){this.bChanged=true;}},{key:'count',get:function get(){return this.internalElements.length;}},{key:'status',get:function get(){return this.status9;},set:function set(value){this.status9=value;}},{key:'isSaving',get:function get(){return this.isSaving9;},set:function set(value){this.isSaving9=value;}},{key:'clonedObject',get:function get(){return this.clonedObject9;}},{key:'position',get:function get(){return this.position9;},set:function set(value){this.position9=value;}},{key:'objectCollectionIndex',get:function get(){return this.index9;},set:function set(value){this.index9=value;}},{key:'CrossTable',get:function get(){return this.pdfCrossTable;}},{key:'elements',get:function get(){return this.internalElements;}}],[{key:'fromRectangle',value:function fromRectangle(bounds){var values=[bounds.x,bounds.y,bounds.width,bounds.height];var array=new PdfArray(values);return array;}}]);return PdfArray;}());_export('PdfStream',PdfStream=function(_PdfDictionary){_inherits(PdfStream,_PdfDictionary);function PdfStream(dictionary,data){_classCallCheck(this,PdfStream);var _this=_possibleConstructorReturn(this,(PdfStream.__proto__||Object.getPrototypeOf(PdfStream)).call(this,dictionary));//Constants
/**
         * @hidden
         * @private
         */_this.dicPrefix='stream';/**
         * @hidden
         * @private
         */_this.dicSuffix='endstream';/**
         * Internal variable to hold `cloned object`.
         * @private
         */_this.clonedObject2=null;/**
         * @hidden
         * @private
         */_this.bCompress=true;/**
         * @hidden
         * @private
         */_this.isImageStream=false;if(typeof dictionary!=='undefined'||typeof data!=='undefined'){_this.dataStream2=[];_this.dataStream2=data;_this.bCompress2=false;}else{_this.dataStream2=[];_this.bCompress2=true;//Pending
}return _this;}/**
     * Gets the `internal` stream.
     * @private
     */_createClass(PdfStream,[{key:'clearStream',value:function clearStream(){this.internalStream=[];this.remove(this.dictionaryProperties.filter);this.bCompress=true;this.modify();}},{key:'write',value:function write(text){if(text==null){throw new Error('ArgumentNullException:text');}if(text.length<=0){throw new Error('ArgumentException: Can not write an empty string, text');}this.dataStream2.push(text);this.modify();}},{key:'compressContent',value:function compressContent(data,writer){if(this.bCompress){var sw=new CompressedStreamWriter();// data = 'Hello World!!!';
sw.write(data,0,data.length);sw.close();data=sw.getCompressedString;this.addFilter(this.dictionaryProperties.flatedecode);}return data;}},{key:'addFilter',value:function addFilter(filterName){var obj=this.items.getValue(this.dictionaryProperties.filter);if(obj instanceof PdfReferenceHolder){var rh=obj;obj=rh.object;}var array=obj;var name=obj;if(name!=null){array=new PdfArray();array.insert(0,name);this.items.setValue(this.dictionaryProperties.filter,array);}name=new PdfName(filterName);if(array==null){this.items.setValue(this.dictionaryProperties.filter,name);}else{array.insert(0,name);}}},{key:'save',value:function save(writer){var data='';for(var i=0;i<this.data.length;i++){data=data+this.data[i];}if(data.length>1&&!this.isImage){data='q\r\n'+data+'Q\r\n';}data=this.compressContent(data,writer);var length=data.length;this.items.setValue(this.dictionaryProperties.length,new PdfNumber(length));_get(PdfStream.prototype.__proto__||Object.getPrototypeOf(PdfStream.prototype),'save',this).call(this,writer,false);writer.write(this.dicPrefix);writer.write(Operators.newLine);if(data.length>0){writer.write(data);}writer.write(Operators.newLine);writer.write(this.dicSuffix);writer.write(Operators.newLine);}},{key:'internalStream',get:function get(){return this.dataStream2;},set:function set(value){this.dataStream2=[];this.dataStream2=value;this.modify();}},{key:'isImage',get:function get(){return this.isImageStream;},set:function set(value){this.isImageStream=value;}},{key:'compress',get:function get(){return this.bCompress;},set:function set(value){this.bCompress=value;this.modify();}},{key:'data',get:function get(){return this.dataStream2;},set:function set(value){this.dataStream2=[];this.dataStream2=value;this.modify();}}],[{key:'bytesToString',value:function bytesToString(byteArray){var output='';for(var i=0;i<byteArray.length;i++){output=output+String.fromCharCode(byteArray[i]);}return output;}}]);return PdfStream;}(PdfDictionary));(function(InternalEnum){//Internals
/**
     * public Enum for `ForceEncoding`.
     * @private
     */var ForceEncoding=void 0;(function(ForceEncoding){/**
         * Specifies the type of `None`.
         * @private
         */ForceEncoding[ForceEncoding["None"]=0]="None";/**
         * Specifies the type of `Ascii`.
         * @private
         */ForceEncoding[ForceEncoding["Ascii"]=1]="Ascii";/**
         * Specifies the type of `Unicode`.
         * @private
         */ForceEncoding[ForceEncoding["Unicode"]=2]="Unicode";})(ForceEncoding=InternalEnum.ForceEncoding||(InternalEnum.ForceEncoding={}));/**
     * public Enum for `SourceType`.
     * @private
     */var SourceType=void 0;(function(SourceType){/**
         * Specifies the type of `StringValue`.
         * @private
         */SourceType[SourceType["StringValue"]=0]="StringValue";/**
         * Specifies the type of `ByteBuffer`.
         * @private
         */SourceType[SourceType["ByteBuffer"]=1]="ByteBuffer";})(SourceType||(SourceType={}));})(InternalEnum||_export('InternalEnum',InternalEnum={}));_export('PdfString',PdfString=function(){function PdfString(value){_classCallCheck(this,PdfString);/**
         * Value indicating whether the string was converted to hex.
         * @default false
         * @private
         */this.bHex=false;/**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */this.position1=-1;/**
         * Internal variable to hold `cloned object`.
         * @default null
         * @private
         */this.clonedObject1=null;/**
         * `Shows` if the data of the stream was decrypted.
         * @default false
         * @private
         */this.bDecrypted=false;/**
         * Shows if the data of the stream `was decrypted`.
         * @default false
         * @private
         */this.isParentDecrypted=false;/**
         * Gets a value indicating whether the object is `packed or not`.
         * @default false
         * @private
         */this.isPacked=false;/**
         * @hidden
         * @private
         */this.isFormField=false;/**
         * @hidden
         * @private
         */this.isColorSpace=false;/**
         * @hidden
         * @private
         */this.isHexString=true;if(typeof value==='undefined'){this.bHex=false;}else{if(!(value.length>0&&value[0]==='0xfeff')){this.stringValue=value;this.data=[];for(var i=0;i<value.length;++i){this.data.push(value.charCodeAt(i));}}}}//Property
/**
     * Gets a value indicating whether string is in `hex`.
     * @private
     */_createClass(PdfString,[{key:'save',value:function save(writer){if(writer===null){throw new Error('ArgumentNullException : writer');}writer.write(PdfString.stringMark[0]+this.value+PdfString.stringMark[1]);}},{key:'clone',value:function clone(crossTable){if(this.clonedObject1!==null&&this.clonedObject1.CrossTable===crossTable){return this.clonedObject1;}else{this.clonedObject1=null;}var newString=new PdfString(this.stringValue);newString.bHex=this.bHex;newString.crossTable=crossTable;newString.isColorSpace=this.isColorSpace;this.clonedObject1=newString;return newString;}},{key:'hex',get:function get(){return this.bHex;}},{key:'value',get:function get(){return this.stringValue;},set:function set(value){this.stringValue=value;this.data=null;}},{key:'status',get:function get(){return this.status1;},set:function set(value){this.status1=value;}},{key:'isSaving',get:function get(){return this.isSaving1;},set:function set(value){this.isSaving1=value;}},{key:'objectCollectionIndex',get:function get(){return this.index1;},set:function set(value){this.index1=value;}},{key:'clonedObject',get:function get(){return this.clonedObject1;}},{key:'position',get:function get(){return this.position1;},set:function set(value){this.position1=value;}},{key:'CrossTable',get:function get(){return this.crossTable;}}],[{key:'bytesToHex',value:function bytesToHex(bytes){if(bytes==null){return'';}var builder='';return builder;}}]);return PdfString;}());//constants = ;
/**
 * `General markers` for string.
 * @private
 */PdfString.stringMark='()';/**
 * `Hex markers` for string.
 * @private
 */PdfString.hexStringMark='<>';/**
 * Format of password data.
 * @private
 */PdfString.hexFormatPattern='{0:X2}';/**
 * `PdfReference` class is used to perform reference related primitive operations.
 * @private
 */_export('PdfReference',PdfReference=function(){function PdfReference(objNumber,genNumber){_classCallCheck(this,PdfReference);/**
         * Holds the `index` number of the object.
         * @default -1
         * @private
         */this.index3=-1;/**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */this.position3=-1;/**
         * Holds the `object number`.
         * @default 0
         * @private
         */this.objNumber=0;/**
         * Holds the `generation number` of the object.
         * @default 0
         * @private
         */this.genNumber=0;if(typeof objNumber==='number'&&typeof genNumber==='number'){this.objNumber=objNumber;this.genNumber=genNumber;// } else if (typeof objNum === 'string' && typeof genNum === 'string') {
}else{this.objNumber=Number(objNumber);this.genNumber=Number(genNumber);}}//Property
/**
     * Gets or sets the `Status` of the specified object.
     * @private
     */_createClass(PdfReference,[{key:'save',value:function save(writer){writer.write(this.toString());}},{key:'toString',value:function toString(){return this.objNumber.toString()+' '+this.genNumber.toString()+' R';}},{key:'clone',value:function clone(crossTable){return null;}},{key:'status',get:function get(){return this.status3;},set:function set(value){this.status3=value;}},{key:'isSaving',get:function get(){return this.isSaving3;},set:function set(value){this.isSaving3=value;}},{key:'objectCollectionIndex',get:function get(){return this.index3;},set:function set(value){this.index3=value;}},{key:'position',get:function get(){return this.position3;},set:function set(value){this.position3=value;}},{key:'clonedObject',get:function get(){var returnObject3=null;return returnObject3;}}]);return PdfReference;}());_export('PdfReferenceHolder',PdfReferenceHolder=function(){function PdfReferenceHolder(obj1,obj2){_classCallCheck(this,PdfReferenceHolder);/**
         * Holds the `index` number of the object.
         * @default -1
         * @private
         */this.index4=-1;/**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */this.position4=-1;/**
         * The `index` of the object within the object collection.
         * @default -1
         * @private
         */this.objectIndex=-1;/**
         * @hidden
         * @private
         */this.dictionaryProperties=new DictionaryProperties();// if (typeof obj2 === 'undefined') {
if(obj1 instanceof PdfArray||obj1 instanceof PdfDictionary||obj1 instanceof PdfName||obj1 instanceof PdfNumber||obj1 instanceof PdfStream||obj1 instanceof PdfReference||obj1 instanceof PdfString){// if (obj1 === null) {
//     throw new Error('ArgumentNullException : obj');
// }
this.primitiveObject=obj1;// } else if (obj1 instanceof PdfPageBase
//             || obj1 instanceof PdfPage
//             || obj1 instanceof PdfSection
//             || obj1 instanceof PdfSectionCollection) {
}else{var tempObj=obj1;this.constructor(tempObj.element);}// }
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
}//Properties
/**
     * Gets or sets the `Status` of the specified object.
     * @private
     */_createClass(PdfReferenceHolder,[{key:'save',value:function save(writer){// if (writer == null) {
//     throw new Error('ArgumentNullException : writer');
// }
var position=writer.position;var cTable=writer.document.crossTable;// if (cTable.Document instanceof PdfDocument) {
this.object.isSaving=true;// }
var reference=null;// if (writer.Document.FileStructure.IncrementalUpdate === true && writer.Document.isStreamCopied === true) {
//     if (this.reference === null) {
//         reference = cTable.GetReference(this.Object);
//     } else {
//         reference = this.reference;
//     }
// } else {
//     reference = cTable.GetReference(this.Object);
// }
// if (!(writer.Document.FileStructure.IncrementalUpdate === true && writer.Document.isStreamCopied === true)) {
reference=cTable.getReference(this.object);// }
// if (writer.Position !== position) {
//     writer.Position = position;
// }
reference.save(writer);}},{key:'clone',value:function clone(crossTable){return null;}},{key:'status',get:function get(){return this.status4;},set:function set(value){this.status4=value;}},{key:'isSaving',get:function get(){return this.isSaving4;},set:function set(value){this.isSaving4=value;}},{key:'objectCollectionIndex',get:function get(){return this.index4;},set:function set(value){this.index4=value;}},{key:'position',get:function get(){return this.position4;},set:function set(value){this.position4=value;}},{key:'clonedObject',get:function get(){return null;}},{key:'object',get:function get(){// if ((this.reference != null) || (this.object == null)) {
//     this.object = this.GetterObject();
// }
return this.primitiveObject;}},{key:'reference',get:function get(){return this.pdfReference;}},{key:'index',get:function get(){// let items : PdfMainObjectCollection = this.crossTable.PdfObjects;
// this.objectIndex = items.GetObjectIndex(this.reference);
// if (this.objectIndex < 0) {
//     let obj : IPdfPrimitive = this.crossTable.GetObject(this.reference);
//     this.objectIndex = items.Count - 1;
// }
return this.objectIndex;}},{key:'element',get:function get(){return this.primitiveObject;}}]);return PdfReferenceHolder;}());_export('PdfAction',PdfAction=function(){// Constructors
/**
     * Initialize instance for `Action` class.
     * @private
     */function PdfAction(){_classCallCheck(this,PdfAction);/**
         * Specifies the Next `action` to perform.
         * @private
         */this.action=null;/**
         * Specifies the Internal variable to store `dictionary properties`.
         * @private
         */this.dictionaryProperties=new DictionaryProperties();// super(); -> Object()
this.initialize();}// Properties
/**
     * Gets and Sets the `Next` action to perform.
     * @private
     */_createClass(PdfAction,[{key:'initialize',value:function initialize(){this.dictionary.items.setValue(this.dictionaryProperties.type,new PdfName(this.dictionaryProperties.action));}},{key:'next',get:function get(){return this.action;},set:function set(value){// if (this.action !== value) {
this.action=value;this.dictionary.items.setValue(this.dictionaryProperties.next,new PdfReferenceHolder(this.action));// }
}},{key:'dictionary',get:function get(){if(typeof this.pdfDictionary==='undefined'){this.pdfDictionary=new PdfDictionary();}return this.pdfDictionary;}},{key:'element',get:function get(){return this.dictionary;}}]);return PdfAction;}());_export('PdfUriAction',PdfUriAction=function(_PdfAction){_inherits(PdfUriAction,_PdfAction);function PdfUriAction(uri){_classCallCheck(this,PdfUriAction);var _this2=_possibleConstructorReturn(this,(PdfUriAction.__proto__||Object.getPrototypeOf(PdfUriAction)).call(this));// Fields
/**
         * Specifies the `uri` string.
         * @default ''.
         * @private
         */_this2.uniformResourceIdentifier='';return _this2;}// Properties
/**
     * Gets and Sets the value of `Uri`.
     * @private
     */_createClass(PdfUriAction,[{key:'initialize',value:function initialize(){_get(PdfUriAction.prototype.__proto__||Object.getPrototypeOf(PdfUriAction.prototype),'initialize',this).call(this);this.dictionary.items.setValue(this.dictionaryProperties.s,new PdfName(this.dictionaryProperties.uri));}},{key:'uri',get:function get(){return this.uniformResourceIdentifier;},set:function set(value){this.uniformResourceIdentifier=value;this.dictionary.items.setValue(this.dictionaryProperties.uri,new PdfString(this.uniformResourceIdentifier));}}]);return PdfUriAction;}(PdfAction));(function(PdfHorizontalAlignment){/**
     * Specifies the type of `Left`.
     * @private
     */PdfHorizontalAlignment[PdfHorizontalAlignment["Left"]=0]="Left";/**
     * Specifies the type of `Center`.
     * @private
     */PdfHorizontalAlignment[PdfHorizontalAlignment["Center"]=1]="Center";/**
     * Specifies the type of `Right`.
     * @private
     */PdfHorizontalAlignment[PdfHorizontalAlignment["Right"]=2]="Right";})(PdfHorizontalAlignment||_export('PdfHorizontalAlignment',PdfHorizontalAlignment={}));/**
 * public Enum for `PdfVerticalAlignment`.
 * @private
 */(function(PdfVerticalAlignment){/**
     * Specifies the type of `Top`.
     * @private
     */PdfVerticalAlignment[PdfVerticalAlignment["Top"]=0]="Top";/**
     * Specifies the type of `Middle`.
     * @private
     */PdfVerticalAlignment[PdfVerticalAlignment["Middle"]=1]="Middle";/**
     * Specifies the type of `Bottom`.
     * @private
     */PdfVerticalAlignment[PdfVerticalAlignment["Bottom"]=2]="Bottom";})(PdfVerticalAlignment||_export('PdfVerticalAlignment',PdfVerticalAlignment={}));/**
 * public Enum for `public`.
 * @private
 */(function(PdfTextAlignment){/**
     * Specifies the type of `Left`.
     * @private
     */PdfTextAlignment[PdfTextAlignment["Left"]=0]="Left";/**
     * Specifies the type of `Center`.
     * @private
     */PdfTextAlignment[PdfTextAlignment["Center"]=1]="Center";/**
     * Specifies the type of `Right`.
     * @private
     */PdfTextAlignment[PdfTextAlignment["Right"]=2]="Right";/**
     * Specifies the type of `Justify`.
     * @private
     */PdfTextAlignment[PdfTextAlignment["Justify"]=3]="Justify";})(PdfTextAlignment||_export('PdfTextAlignment',PdfTextAlignment={}));/**
 * public Enum for `TextRenderingMode`.
 * @private
 */(function(TextRenderingMode){/**
     * Specifies the type of `Fill`.
     * @private
     */TextRenderingMode[TextRenderingMode["Fill"]=0]="Fill";/**
     * Specifies the type of `Stroke`.
     * @private
     */TextRenderingMode[TextRenderingMode["Stroke"]=1]="Stroke";/**
     * Specifies the type of `FillStroke`.
     * @private
     */TextRenderingMode[TextRenderingMode["FillStroke"]=2]="FillStroke";/**
     * Specifies the type of `None`.
     * @private
     */TextRenderingMode[TextRenderingMode["None"]=3]="None";/**
     * Specifies the type of `ClipFlag`.
     * @private
     */TextRenderingMode[TextRenderingMode["ClipFlag"]=4]="ClipFlag";/**
     * Specifies the type of `ClipFill`.
     * @private
     */TextRenderingMode[TextRenderingMode["ClipFill"]=4]="ClipFill";/**
     * Specifies the type of `ClipStroke`.
     * @private
     */TextRenderingMode[TextRenderingMode["ClipStroke"]=5]="ClipStroke";/**
     * Specifies the type of `ClipFillStroke`.
     * @private
     */TextRenderingMode[TextRenderingMode["ClipFillStroke"]=6]="ClipFillStroke";/**
     * Specifies the type of `Clip`.
     * @private
     */TextRenderingMode[TextRenderingMode["Clip"]=7]="Clip";})(TextRenderingMode||_export('TextRenderingMode',TextRenderingMode={}));/**
 * public Enum for `PdfLineJoin`.
 * @private
 */(function(PdfLineJoin){/**
     * Specifies the type of `Miter`.
     * @private
     */PdfLineJoin[PdfLineJoin["Miter"]=0]="Miter";/**
     * Specifies the type of `Round`.
     * @private
     */PdfLineJoin[PdfLineJoin["Round"]=1]="Round";/**
     * Specifies the type of `Bevel`.
     * @private
     */PdfLineJoin[PdfLineJoin["Bevel"]=2]="Bevel";})(PdfLineJoin||_export('PdfLineJoin',PdfLineJoin={}));/**
 * public Enum for `PdfLineCap`.
 * @private
 */(function(PdfLineCap){/**
     * Specifies the type of `Flat`.
     * @private
     */PdfLineCap[PdfLineCap["Flat"]=0]="Flat";/**
     * Specifies the type of `Round`.
     * @private
     */PdfLineCap[PdfLineCap["Round"]=1]="Round";/**
     * Specifies the type of `Square`.
     * @private
     */PdfLineCap[PdfLineCap["Square"]=2]="Square";})(PdfLineCap||_export('PdfLineCap',PdfLineCap={}));/**
 * public Enum for `PdfDashStyle`.
 * @private
 */(function(PdfDashStyle){/**
     * Specifies the type of `Solid`.
     * @private
     */PdfDashStyle[PdfDashStyle["Solid"]=0]="Solid";/**
     * Specifies the type of `Dash`.
     * @private
     */PdfDashStyle[PdfDashStyle["Dash"]=1]="Dash";/**
     * Specifies the type of `Dot`.
     * @private
     */PdfDashStyle[PdfDashStyle["Dot"]=2]="Dot";/**
     * Specifies the type of `DashDot`.
     * @private
     */PdfDashStyle[PdfDashStyle["DashDot"]=3]="DashDot";/**
     * Specifies the type of `DashDotDot`.
     * @private
     */PdfDashStyle[PdfDashStyle["DashDotDot"]=4]="DashDotDot";/**
     * Specifies the type of `Custom`.
     * @private
     */PdfDashStyle[PdfDashStyle["Custom"]=5]="Custom";})(PdfDashStyle||_export('PdfDashStyle',PdfDashStyle={}));/**
 * public Enum for `PdfFillMode`.
 * @private
 */(function(PdfFillMode){/**
     * Specifies the type of `Winding`.
     * @private
     */PdfFillMode[PdfFillMode["Winding"]=0]="Winding";/**
     * Specifies the type of `Alternate`.
     * @private
     */PdfFillMode[PdfFillMode["Alternate"]=1]="Alternate";})(PdfFillMode||_export('PdfFillMode',PdfFillMode={}));/**
 * public Enum for `PdfColorSpace`.
 * @private
 */(function(PdfColorSpace){/**
     * Specifies the type of `Rgb`.
     * @private
     */PdfColorSpace[PdfColorSpace["Rgb"]=0]="Rgb";/**
     * Specifies the type of `Cmyk`.
     * @private
     */PdfColorSpace[PdfColorSpace["Cmyk"]=1]="Cmyk";/**
     * Specifies the type of `GrayScale`.
     * @private
     */PdfColorSpace[PdfColorSpace["GrayScale"]=2]="GrayScale";/**
     * Specifies the type of `Indexed`.
     * @private
     */PdfColorSpace[PdfColorSpace["Indexed"]=3]="Indexed";})(PdfColorSpace||_export('PdfColorSpace',PdfColorSpace={}));/**
 * public Enum for `PdfBlendMode`.
 * @private
 */(function(PdfBlendMode){/**
     * Specifies the type of `Normal`.
     * @private
     */PdfBlendMode[PdfBlendMode["Normal"]=0]="Normal";/**
     * Specifies the type of `Multiply`.
     * @private
     */PdfBlendMode[PdfBlendMode["Multiply"]=1]="Multiply";/**
     * Specifies the type of `Screen`.
     * @private
     */PdfBlendMode[PdfBlendMode["Screen"]=2]="Screen";/**
     * Specifies the type of `Overlay`.
     * @private
     */PdfBlendMode[PdfBlendMode["Overlay"]=3]="Overlay";/**
     * Specifies the type of `Darken`.
     * @private
     */PdfBlendMode[PdfBlendMode["Darken"]=4]="Darken";/**
     * Specifies the type of `Lighten`.
     * @private
     */PdfBlendMode[PdfBlendMode["Lighten"]=5]="Lighten";/**
     * Specifies the type of `ColorDodge`.
     * @private
     */PdfBlendMode[PdfBlendMode["ColorDodge"]=6]="ColorDodge";/**
     * Specifies the type of `ColorBurn`.
     * @private
     */PdfBlendMode[PdfBlendMode["ColorBurn"]=7]="ColorBurn";/**
     * Specifies the type of `HardLight`.
     * @private
     */PdfBlendMode[PdfBlendMode["HardLight"]=8]="HardLight";/**
     * Specifies the type of `SoftLight`.
     * @private
     */PdfBlendMode[PdfBlendMode["SoftLight"]=9]="SoftLight";/**
     * Specifies the type of `Difference`.
     * @private
     */PdfBlendMode[PdfBlendMode["Difference"]=10]="Difference";/**
     * Specifies the type of `Exclusion`.
     * @private
     */PdfBlendMode[PdfBlendMode["Exclusion"]=11]="Exclusion";/**
     * Specifies the type of `Hue`.
     * @private
     */PdfBlendMode[PdfBlendMode["Hue"]=12]="Hue";/**
     * Specifies the type of `Saturation`.
     * @private
     */PdfBlendMode[PdfBlendMode["Saturation"]=13]="Saturation";/**
     * Specifies the type of `Color`.
     * @private
     */PdfBlendMode[PdfBlendMode["Color"]=14]="Color";/**
     * Specifies the type of `Luminosity`.
     * @private
     */PdfBlendMode[PdfBlendMode["Luminosity"]=15]="Luminosity";})(PdfBlendMode||_export('PdfBlendMode',PdfBlendMode={}));/**
 * public Enum for `PdfGraphicsUnit`.
 * @private
 */(function(PdfGraphicsUnit){/**
     * Specifies the type of `Centimeter`.
     * @private
     */PdfGraphicsUnit[PdfGraphicsUnit["Centimeter"]=0]="Centimeter";/**
     * Specifies the type of `Pica`.
     * @private
     */PdfGraphicsUnit[PdfGraphicsUnit["Pica"]=1]="Pica";/**
     * Specifies the type of `Pixel`.
     * @private
     */PdfGraphicsUnit[PdfGraphicsUnit["Pixel"]=2]="Pixel";/**
     * Specifies the type of `Point`.
     * @private
     */PdfGraphicsUnit[PdfGraphicsUnit["Point"]=3]="Point";/**
     * Specifies the type of `Inch`.
     * @private
     */PdfGraphicsUnit[PdfGraphicsUnit["Inch"]=4]="Inch";/**
     * Specifies the type of `Document`.
     * @private
     */PdfGraphicsUnit[PdfGraphicsUnit["Document"]=5]="Document";/**
     * Specifies the type of `Millimeter`.
     * @private
     */PdfGraphicsUnit[PdfGraphicsUnit["Millimeter"]=6]="Millimeter";})(PdfGraphicsUnit||_export('PdfGraphicsUnit',PdfGraphicsUnit={}));/**
 * public Enum for `PdfGridImagePosition`.
 * @private
 */(function(PdfGridImagePosition){/**
     * Specifies the type of `Fit`.
     * @private
     */PdfGridImagePosition[PdfGridImagePosition["Fit"]=0]="Fit";/**
     * Specifies the type of `Center`.
     * @private
     */PdfGridImagePosition[PdfGridImagePosition["Center"]=1]="Center";/**
     * Specifies the type of `Stretch`.
     * @private
     */PdfGridImagePosition[PdfGridImagePosition["Stretch"]=2]="Stretch";/**
     * Specifies the type of `Tile`.
     * @private
     */PdfGridImagePosition[PdfGridImagePosition["Tile"]=3]="Tile";})(PdfGridImagePosition||_export('PdfGridImagePosition',PdfGridImagePosition={}));/**
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
 */_export('PdfColor',PdfColor=function(){function PdfColor(color1,color2,color3,color4){_classCallCheck(this,PdfColor);if(color1 instanceof PdfColor){this.redColor=color1.r;this.greenColor=color1.g;this.blueColor=color1.b;this.grayColor=color1.gray;this.alpha=color1.alpha;this.filled=this.alpha!==0;}else if(typeof color1==='number'&&typeof color2==='number'&&typeof color3==='number'&&typeof color4==='undefined'){this.constructor(PdfColor.maxColourChannelValue,color1,color2,color3);//doubt-byte/float
}else if(typeof color1==='number'&&typeof color2==='number'&&typeof color3==='number'&&typeof color4==='number'){this.redColor=color2;this.cyanColor=0;this.greenColor=color3;this.magentaColor=0;this.blueColor=color4;this.yellowColor=0;this.blackColor=0;this.grayColor=0;this.alpha=color1;this.filled=true;this.assignCMYK(color2,color3,color4);}}/**
     * `Calculate and assign` cyan, megenta, yellow colors from rgb values..
     * @private
     */_createClass(PdfColor,[{key:'assignCMYK',value:function assignCMYK(r,g,b){var red=r/PdfColor.maxColourChannelValue;var green=g/PdfColor.maxColourChannelValue;var blue=b/PdfColor.maxColourChannelValue;var black=PdfNumber.min(1-red,1-green,1-blue);var cyan=black===1.0?0:(1-red-black)/(1-black);var magenta=black===1.0?0:(1-green-black)/(1-black);var yellow=black===1.0?0:(1-blue-black)/(1-black);this.blackColor=black;this.cyanColor=cyan;this.magentaColor=magenta;this.yellowColor=yellow;}},{key:'toString',value:function toString(colorSpace,stroke){if(this.isEmpty){return'';}return this.rgbToString(stroke);}},{key:'rgbToString',value:function rgbToString(ifStroking){var r=this.r;var g=this.g;var b=this.b;var key=(r<<16)+(g<<8)+b;if(ifStroking){key+=1<<24;}var colour='';var obj=null;if(PdfColor.rgbStrings.containsKey(key)){obj=PdfColor.rgbStrings.getValue(key);}if(obj==null){var red=r/PdfColor.maxColourChannelValue;var green=g/PdfColor.maxColourChannelValue;var blue=b/PdfColor.maxColourChannelValue;if(ifStroking){colour=red.toString()+' '+green.toString()+' '+blue.toString()+' RG';}else{colour=red.toString()+' '+green.toString()+' '+blue.toString()+' rg';}PdfColor.rgbStrings.setValue(key,colour);}else{colour=obj.toString();}return colour+Operators.newLine;}},{key:'toArray',value:function toArray(colorSpace){var array=new PdfArray();switch(colorSpace){case PdfColorSpace.Rgb:array.add(new PdfNumber(this.red));array.add(new PdfNumber(this.green));array.add(new PdfNumber(this.blue));break;default:throw new Error('NotSupportedException : Unsupported colour space.');}return array;}},{key:'r',get:function get(){return this.redColor;},set:function set(value){this.redColor=value;this.assignCMYK(this.redColor,this.greenColor,this.blueColor);this.filled=true;}},{key:'red',get:function get(){return this.r/PdfColor.maxColourChannelValue;}},{key:'b',get:function get(){return this.blueColor;},set:function set(value){this.blueColor=value;this.assignCMYK(this.redColor,this.greenColor,this.blueColor);this.filled=true;}},{key:'blue',get:function get(){return this.b/PdfColor.maxColourChannelValue;}},{key:'g',get:function get(){return this.greenColor;},set:function set(value){this.greenColor=value;this.assignCMYK(this.redColor,this.greenColor,this.blueColor);this.filled=true;}},{key:'green',get:function get(){return this.g/PdfColor.maxColourChannelValue;}},{key:'gray',get:function get(){return(this.redColor+this.greenColor+this.blueColor)/(PdfColor.maxColourChannelValue*3);},set:function set(value){if(value<0){this.grayColor=0;}else if(value>1){this.grayColor=1;}else{this.grayColor=value;}this.r=this.grayColor*PdfColor.maxColourChannelValue;this.g=this.grayColor*PdfColor.maxColourChannelValue;this.b=this.grayColor*PdfColor.maxColourChannelValue;this.assignCMYK(this.redColor,this.greenColor,this.blueColor);this.filled=true;}},{key:'isEmpty',get:function get(){return!this.filled;}},{key:'a',get:function get(){return this.alpha;},set:function set(value){if(value<0){this.alpha=0;}else{// if (this.alpha !== value) {
this.alpha=value;// }
}this.filled=true;}}]);return PdfColor;}());//Fields
/**
 * Holds `RGB colors` converted into strings.
 * @private
 */PdfColor.rgbStrings=new Dictionary();/**
 * Holds Gray scale colors converted into strings for `stroking`.
 * @private
 */PdfColor.grayStringsSroke=new Dictionary();/**
 * Holds Gray scale colors converted into strings for `filling`.
 * @private
 */PdfColor.grayStringsFill=new Dictionary();/**
 * `Max value` of color channel.
 * @private
 */PdfColor.maxColourChannelValue=255.0;/**
 * Coordinates of Position for `PointF`.
 * @private
 */_export('PointF',PointF=function PointF(x,y){_classCallCheck(this,PointF);if(typeof x==='undefined'){this.x=0;this.y=0;}else{if(x!==null){this.x=x;}else{this.x=0;}if(y!==null){this.y=y;}else{this.y=0;}}});_export('SizeF',SizeF=function SizeF(width,height){_classCallCheck(this,SizeF);if(typeof height==='undefined'){this.height=0;this.width=0;}else{if(height!==null){this.height=height;}else{this.height=0;}if(width!==null){this.width=width;}else{this.width=0;}}});_export('RectangleF',RectangleF=function RectangleF(arg1,arg2,arg3,arg4){_classCallCheck(this,RectangleF);if((typeof arg1==='undefined'?'undefined':_typeof(arg1))===(typeof arg1==='undefined'?'undefined':_typeof(arg1))&&typeof arg1==='undefined'){this.x=0;this.y=0;this.height=0;this.width=0;}else{if(arg1 instanceof PointF&&arg2 instanceof SizeF&&typeof arg3==='undefined'){var pointf=arg1;this.x=pointf.x;this.y=pointf.y;var sizef=arg2;this.height=sizef.height;this.width=sizef.width;}else{var x=arg1;var y=arg2;var width=arg3;var height=arg4;this.x=x;this.y=y;this.height=height;this.width=width;}}});_export('PdfBrush',PdfBrush=/**
     * Creates instanceof `PdfBrush` class.
     * @hidden
     * @private
     */function PdfBrush(){//
_classCallCheck(this,PdfBrush);});_export('PdfSolidBrush',PdfSolidBrush=function(_PdfBrush){_inherits(PdfSolidBrush,_PdfBrush);//Constructors
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
     */function PdfSolidBrush(color){_classCallCheck(this,PdfSolidBrush);var _this3=_possibleConstructorReturn(this,(PdfSolidBrush.__proto__||Object.getPrototypeOf(PdfSolidBrush)).call(this));_this3.pdfColor=color;return _this3;}//Properties
/**
     * Gets or sets the `color` of the brush.
     * @private
     */_createClass(PdfSolidBrush,[{key:'monitorChanges',value:function monitorChanges(brush,streamWriter,getResources,saveChanges,currentColorSpace){if(streamWriter==null){throw new Error('ArgumentNullException:streamWriter');}var diff=false;if(brush==null){diff=true;streamWriter.setColorAndSpace(this.pdfColor,currentColorSpace,false);return diff;}else{diff=true;streamWriter.setColorAndSpace(this.pdfColor,currentColorSpace,false);return diff;}}},{key:'resetChanges',value:function resetChanges(streamWriter){streamWriter.setColorAndSpace(new PdfColor(0,0,0),PdfColorSpace.Rgb,false);}},{key:'color',get:function get(){return this.pdfColor;},set:function set(value){this.pdfColor=value;}}]);return PdfSolidBrush;}(PdfBrush));(function(PdfFontStyle){/**
     * Specifies the type of `Regular`.
     * @private
     */PdfFontStyle[PdfFontStyle["Regular"]=0]="Regular";/**
     * Specifies the type of `Bold`.
     * @private
     */PdfFontStyle[PdfFontStyle["Bold"]=1]="Bold";/**
     * Specifies the type of `Italic`.
     * @private
     */PdfFontStyle[PdfFontStyle["Italic"]=2]="Italic";/**
     * Specifies the type of `Underline`.
     * @private
     */PdfFontStyle[PdfFontStyle["Underline"]=4]="Underline";/**
     * Specifies the type of `Strikeout`.
     * @private
     */PdfFontStyle[PdfFontStyle["Strikeout"]=8]="Strikeout";})(PdfFontStyle||_export('PdfFontStyle',PdfFontStyle={}));/**
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
 */(function(PdfFontFamily){/**
     * Specifies the `Helvetica` font.
     */PdfFontFamily[PdfFontFamily["Helvetica"]=0]="Helvetica";/**
     * Specifies the `Courier` font.
     */PdfFontFamily[PdfFontFamily["Courier"]=1]="Courier";/**
     * Specifies the `TimesRoman` font.
     */PdfFontFamily[PdfFontFamily["TimesRoman"]=2]="TimesRoman";/**
     * Specifies the `Symbol` font.
     */PdfFontFamily[PdfFontFamily["Symbol"]=3]="Symbol";/**
     * Specifies the `ZapfDingbats` font.
     */PdfFontFamily[PdfFontFamily["ZapfDingbats"]=4]="ZapfDingbats";})(PdfFontFamily||_export('PdfFontFamily',PdfFontFamily={}));/**
 * public Enum for `PdfFontType`.
 * @private
 */(function(PdfFontType){/**
     * Specifies the type of `Standard`.
     * @private
     */PdfFontType[PdfFontType["Standard"]=0]="Standard";/**
     * Specifies the type of `TrueType`.
     * @private
     */PdfFontType[PdfFontType["TrueType"]=1]="TrueType";/**
     * Specifies the type of `TrueTypeEmbedded`.
     * @private
     */PdfFontType[PdfFontType["TrueTypeEmbedded"]=2]="TrueTypeEmbedded";})(PdfFontType||_export('PdfFontType',PdfFontType={}));/**
 * public Enum for `PdfWordWrapType`.
 * @private
 */(function(PdfWordWrapType){/**
     * Specifies the type of `None`.
     * @private
     */PdfWordWrapType[PdfWordWrapType["None"]=0]="None";/**
     * Specifies the type of `Word`.
     * @private
     */PdfWordWrapType[PdfWordWrapType["Word"]=1]="Word";/**
     * Specifies the type of `WordOnly`.
     * @private
     */PdfWordWrapType[PdfWordWrapType["WordOnly"]=2]="WordOnly";/**
     * Specifies the type of `Character`.
     * @private
     */PdfWordWrapType[PdfWordWrapType["Character"]=3]="Character";})(PdfWordWrapType||_export('PdfWordWrapType',PdfWordWrapType={}));/**
 * public Enum for `PdfSubSuperScript`.
 * @private
 */(function(PdfSubSuperScript){/**
     * Specifies the type of `None`.
     * @private
     */PdfSubSuperScript[PdfSubSuperScript["None"]=0]="None";/**
     * Specifies the type of `SuperScript`.
     * @private
     */PdfSubSuperScript[PdfSubSuperScript["SuperScript"]=1]="SuperScript";/**
     * Specifies the type of `SubScript`.
     * @private
     */PdfSubSuperScript[PdfSubSuperScript["SubScript"]=2]="SubScript";})(PdfSubSuperScript||_export('PdfSubSuperScript',PdfSubSuperScript={}));/**
 * public Enum for `FontEncoding`.
 * @private
 */(function(FontEncoding){/**
     * Specifies the type of `Unknown`.
     * @private
     */FontEncoding[FontEncoding["Unknown"]=0]="Unknown";/**
     * Specifies the type of `StandardEncoding`.
     * @private
     */FontEncoding[FontEncoding["StandardEncoding"]=1]="StandardEncoding";/**
     * Specifies the type of `MacRomanEncoding`.
     * @private
     */FontEncoding[FontEncoding["MacRomanEncoding"]=2]="MacRomanEncoding";/**
     * Specifies the type of `MacExpertEncoding`.
     * @private
     */FontEncoding[FontEncoding["MacExpertEncoding"]=3]="MacExpertEncoding";/**
     * Specifies the type of `WinAnsiEncoding`.
     * @private
     */FontEncoding[FontEncoding["WinAnsiEncoding"]=4]="WinAnsiEncoding";/**
     * Specifies the type of `PdfDocEncoding`.
     * @private
     */FontEncoding[FontEncoding["PdfDocEncoding"]=5]="PdfDocEncoding";/**
     * Specifies the type of `IdentityH`.
     * @private
     */FontEncoding[FontEncoding["IdentityH"]=6]="IdentityH";})(FontEncoding||_export('FontEncoding',FontEncoding={}));/**
 * PdfStringFormat.ts class for EJ2-PDF
 *//**
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
 */_export('PdfStringFormat',PdfStringFormat=function(){function PdfStringFormat(arg1,arg2){_classCallCheck(this,PdfStringFormat);/**
         * The `scaling factor` of the text being drawn.
         * @private
         */this.scalingFactor=100.0;if(typeof arg1==='undefined'){this.internalLineLimit=true;this.wordWrapType=PdfWordWrapType.Word;}else if(typeof arg1==='string'){this.constructor();}else{if(typeof arg2==='undefined'){this.constructor();this.textAlignment=arg1;}else{this.constructor(arg1);this.verticalAlignment=arg2;}}}//Properties
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
     */_createClass(PdfStringFormat,[{key:'clone',value:function clone(){var format=this;return format;}},{key:'alignment',get:function get(){return this.textAlignment;},set:function set(value){this.textAlignment=value;}},{key:'lineAlignment',get:function get(){if(typeof this.verticalAlignment==='undefined'||this.verticalAlignment==null){return PdfVerticalAlignment.Top;}else{return this.verticalAlignment;}},set:function set(value){this.verticalAlignment=value;}},{key:'rightToLeft',get:function get(){if(typeof this.isRightToLeft==='undefined'||this.isRightToLeft==null){return false;}else{return this.isRightToLeft;}},set:function set(value){this.isRightToLeft=value;}},{key:'characterSpacing',get:function get(){if(typeof this.internalCharacterSpacing==='undefined'||this.internalCharacterSpacing==null){return 0;}else{return this.internalCharacterSpacing;}},set:function set(value){this.internalCharacterSpacing=value;}},{key:'wordSpacing',get:function get(){if(typeof this.internalWordSpacing==='undefined'||this.internalWordSpacing==null){return 0;}else{return this.internalWordSpacing;}},set:function set(value){this.internalWordSpacing=value;}},{key:'lineSpacing',get:function get(){if(typeof this.leading==='undefined'||this.leading==null){return 0;}else{return this.leading;}},set:function set(value){this.leading=value;}},{key:'clipPath',get:function get(){if(typeof this.clip==='undefined'||this.clip==null){return false;}else{return this.clip;}},set:function set(value){this.clip=value;}},{key:'subSuperScript',get:function get(){if(typeof this.pdfSubSuperScript==='undefined'||this.pdfSubSuperScript==null){return PdfSubSuperScript.None;}else{return this.pdfSubSuperScript;}},set:function set(value){this.pdfSubSuperScript=value;}},{key:'paragraphIndent',get:function get(){if(typeof this.internalParagraphIndent==='undefined'||this.internalParagraphIndent==null){return 0;}else{return this.internalParagraphIndent;}},set:function set(value){this.internalParagraphIndent=value;this.firstLineIndent=value;}},{key:'lineLimit',get:function get(){return this.internalLineLimit;},set:function set(value){this.internalLineLimit=value;}},{key:'measureTrailingSpaces',get:function get(){if(typeof this.trailingSpaces==='undefined'||this.trailingSpaces==null){return false;}else{return this.trailingSpaces;}},set:function set(value){this.trailingSpaces=value;}},{key:'noClip',get:function get(){if(typeof this.isNoClip==='undefined'||this.isNoClip==null){return false;}else{return this.isNoClip;}},set:function set(value){this.isNoClip=value;}},{key:'wordWrap',get:function get(){// if (typeof this.wrapType === 'undefined' || this.wrapType == null) {
//     return PdfWordWrapType.Word;
// } else {
return this.wordWrapType;// }
},set:function set(value){this.wordWrapType=value;}},{key:'horizontalScalingFactor',get:function get(){// if (typeof this.scalingFactor === 'undefined' || this.scalingFactor == null) {
//     return 100;
// } else {
return this.scalingFactor;// }
},set:function set(value){if(value<=0){throw new Error('ArgumentOutOfRangeException:The scaling factor cant be less of equal to zero, ScalingFactor');}this.scalingFactor=value;}},{key:'firstLineIndent',get:function get(){if(typeof this.initialLineIndent==='undefined'||this.initialLineIndent==null){return 0;}else{return this.initialLineIndent;}},set:function set(value){this.initialLineIndent=value;}}]);return PdfStringFormat;}());_export('StringTokenizer',StringTokenizer=function(){// Constructors
/**
     * Initializes a new instance of the `StringTokenizer` class.
     * @private
     */function StringTokenizer(textValue){_classCallCheck(this,StringTokenizer);/**
         * Current `position`.
         * @private
         */this.currentPosition=0;if(textValue==null){throw new Error('ArgumentNullException:text');}this.text=textValue;}// Properties
/**
     * Gets text `length`.
     * @private
     */_createClass(StringTokenizer,[{key:'readLine',value:function readLine(){var pos=this.currentPosition;while(pos<this.length){var ch=this.text[pos];switch(ch){case'\r':case'\n':{var text=this.text.substring(this.currentPosition,pos-this.currentPosition);this.currentPosition=pos+1;this.currentPosition++;return text;}}pos++;}// The remaining text.
if(pos>this.currentPosition){var text2=this.text.substring(this.currentPosition,pos-this.currentPosition);this.currentPosition=pos;return text2;}return null;}},{key:'peekLine',value:function peekLine(){var pos=this.currentPosition;var line=this.readLine();this.currentPosition=pos;return line;}},{key:'readWord',value:function readWord(){var pos=this.currentPosition;while(pos<this.length){var ch=this.text[pos];switch(ch){case'\r':case'\n':var textValue=this.text.substr(this.currentPosition,pos-this.currentPosition);this.currentPosition=pos+1;if(ch==='\r'&&this.currentPosition<this.length&&this.text[this.currentPosition]==='\n'){this.currentPosition++;}return textValue;case' ':case'\t':{if(pos===this.currentPosition){pos++;}var text=this.text.substr(this.currentPosition,pos-this.currentPosition);this.currentPosition=pos;return text;}}pos++;}// The remaining text.
if(pos>this.currentPosition){var text2=this.text.substr(this.currentPosition,pos-this.currentPosition);this.currentPosition=pos;return text2;}return null;}},{key:'peekWord',value:function peekWord(){var pos=this.currentPosition;var word=this.readWord();this.currentPosition=pos;return word;}},{key:'read',value:function read(count){if(typeof count==='undefined'){var ch='0';return ch;}else{var builder='';return builder;}}},{key:'peek',value:function peek(){var ch='0';return ch;}},{key:'close',value:function close(){this.text=null;}},{key:'length',get:function get(){return this.text.length;}},{key:'position',get:function get(){return this.currentPosition;},set:function set(value){this.currentPosition=value;}}],[{key:'getCharsCount',value:function getCharsCount(text,symbols){if(typeof symbols==='string'){if(text==null){throw new Error('ArgumentNullException:wholeText');}var numSymbols=0;var curIndex=0;for(;;){curIndex=text.indexOf(symbols,curIndex);if(curIndex===-1){break;}else{numSymbols++;curIndex++;}}return numSymbols;}else{if(text==null){throw new Error('ArgumentNullException:text');}if(symbols==null){throw new Error('ArgumentNullException:symbols');}var count=0;for(var i=0,len=text.length;i<len;i++){var ch=text[i];if(this.contains(symbols,ch)){count++;}}return count;}}},{key:'contains',value:function contains(array,symbol){var contains=false;for(var i=0;i<array.length;i++){if(array[i]===symbol){contains=true;break;}}return contains;}}]);return StringTokenizer;}());// Constants
/**
 * `Whitespace` symbol.
 * @private
 */StringTokenizer.whiteSpace=' ';/**
 * `tab` symbol.
 * @private
 */StringTokenizer.tab='\t';/**
 * Array of `spaces`.
 * @private
 */StringTokenizer.spaces=[StringTokenizer.whiteSpace,StringTokenizer.tab];/**
 * `Pattern` for WhiteSpace.
 * @private
 */StringTokenizer.whiteSpacePattern='^[ \t]+$';/**
 * Class `lay outing the text`.
 */_export('PdfStringLayouter',PdfStringLayouter=function(){// Constructors
/**
     * Initializes a new instance of the `StringLayouter` class.
     * @private
     */function PdfStringLayouter(){_classCallCheck(this,PdfStringLayouter);/**
         * Checks whether the x co-ordinate is need to set as client size or not.
         * @hidden
         * @private
         */this.isOverloadWithPosition=false;//
}_createClass(PdfStringLayouter,[{key:'layout',value:function layout(arg1,arg2,arg3,arg4,arg5,arg6,arg7){if(arg4 instanceof RectangleF){this.initialize(arg1,arg2,arg3,arg4,arg5);this.isOverloadWithPosition=arg6;this.clientSize=arg7;var result=this.doLayout();this.clear();return result;}else{this.initialize(arg1,arg2,arg3,arg4);this.isOverloadWithPosition=arg5;this.clientSize=arg6;var _result=this.doLayout();this.clear();return _result;}}},{key:'initialize',value:function initialize(text,font,format,rectSize,pageHeight){if(typeof pageHeight==='number'){if(text==null){throw new Error('ArgumentNullException:text');}if(font==null){throw new Error('ArgumentNullException:font');}this.text=text;this.font=font;this.format=format;this.size=new SizeF(rectSize.width,rectSize.height);this.rectangle=rectSize;this.pageHeight=pageHeight;this.reader=new StringTokenizer(text);}else{this.initialize(text,font,format,new RectangleF(new PointF(0,0),rectSize),0);}}},{key:'clear',value:function clear(){this.font=null;this.format=null;this.reader.close();this.reader=null;this.text=null;}},{key:'doLayout',value:function doLayout(){var result=new PdfStringLayoutResult();var lineResult=new PdfStringLayoutResult();var lines=[];var line=this.reader.peekLine();var lineIndent=this.getLineIndent(true);while(line!=null){lineResult=this.layoutLine(line,lineIndent);// if (!lineResult.Empty) {
var numSymbolsInserted=0;/* tslint:disable */var returnedValue=this.copyToResult(result,lineResult,lines,/*out*/numSymbolsInserted);/* tslint:enable */var success=returnedValue.success;numSymbolsInserted=returnedValue.numInserted;this.reader.readLine();line=this.reader.peekLine();lineIndent=this.getLineIndent(false);}this.finalizeResult(result,lines);return result;}},{key:'getLineIndent',value:function getLineIndent(firstLine){var lineIndent=0;if(this.format!=null){lineIndent=firstLine?this.format.firstLineIndent:this.format.paragraphIndent;lineIndent=this.size.width>0?Math.min(this.size.width,lineIndent):lineIndent;}return lineIndent;}},{key:'getLineHeight',value:function getLineHeight(){var height=this.font.height;if(this.format!=null&&this.format.lineSpacing!==0){height=this.format.lineSpacing+this.font.height;}return height;}},{key:'getLineWidth',value:function getLineWidth(line){var width=this.font.getLineWidth(line,this.format);return width;}},{key:'layoutLine',value:function layoutLine(line,lineIndent){var lineResult=new PdfStringLayoutResult();lineResult.layoutLineHeight=this.getLineHeight();var lines=[];var maxWidth=this.size.width;var lineWidth=this.getLineWidth(line)+lineIndent;var lineType=LineType.FirstParagraphLine;var readWord=true;// line is in bounds.
if(maxWidth<=0||Math.round(lineWidth)<=Math.round(maxWidth)){this.addToLineResult(lineResult,lines,line,lineWidth,LineType.NewLineBreak|lineType);}else{var builder='';var curLine='';lineWidth=lineIndent;var curIndent=lineIndent;var reader=new StringTokenizer(line);var word=reader.peekWord();var isSingleWord=false;while(word!=null){curLine=curLine+word;var curLineWidth=this.getLineWidth(curLine.toString())+curIndent;if(curLineWidth>maxWidth){if(this.getWrapType()==PdfWordWrapType.None)break;if(this.getWrapType()!=PdfWordWrapType.Character||!readWord){var ln=builder.toString();if(ln.indexOf(' ')===-1){isSingleWord=true;this.addToLineResult(lineResult,lines,curLine,lineWidth,LineType.LayoutBreak|lineType);}else{this.addToLineResult(lineResult,lines,ln,lineWidth,LineType.LayoutBreak|lineType);}if(this.isOverloadWithPosition){maxWidth=this.clientSize.width;}curLine='';builder='';lineWidth=0;curIndent=0;curLineWidth=0;lineType=LineType.None;if(isSingleWord){reader.readWord();readWord=false;}word=readWord?word:reader.peekWord();isSingleWord=false;readWord=true;}else{readWord=false;curLine=curLine+builder.toString();word=reader.peek().toString();}continue;}builder=builder+word;lineWidth=curLineWidth;if(readWord){reader.readWord();word=reader.peekWord();isSingleWord=false;}else{reader.read();word=reader.peek().toString();}}if(builder.length>0){var _ln=builder.toString();this.addToLineResult(lineResult,lines,_ln,lineWidth,LineType.NewLineBreak|LineType.LastParagraphLine);}reader.close();}lineResult.layoutLines=[];for(var index=0;index<lines.length;index++){lineResult.layoutLines.push(lines[index]);}lines=[];return lineResult;}},{key:'addToLineResult',value:function addToLineResult(lineResult,lines,line,lineWidth,breakType){var info=new LineInfo();info.text=line;info.width=lineWidth;info.lineType=breakType;lines.push(info);var size=lineResult.actualSize;size.height+=this.getLineHeight();size.width=Math.max(size.width,lineWidth);lineResult.size=size;}},{key:'copyToResult',value:function copyToResult(result,lineResult,lines,/*out*/numInserted){var success=true;var allowPartialLines=this.format!=null&&!this.format.lineLimit;var height=result.actualSize.height;var maxHeight=this.size.height;if(this.pageHeight>0&&maxHeight+this.rectangle.y>this.pageHeight){maxHeight=this.rectangle.y-this.pageHeight;maxHeight=Math.max(maxHeight,-maxHeight);}numInserted=0;for(var i=0,len=lineResult.lines.length;i<len;i++){var expHeight=height+lineResult.lineHeight;var info=lineResult.lines[i];numInserted+=info.text.length;info=this.trimLine(info,lines.length===0);lines.push(info);// Update width.
var _size=result.actualSize;_size.width=Math.max(_size.width,info.width);result.size=_size;height=expHeight;}var size=result.actualSize;size.height=height;result.size=size;return{success:success,numInserted:numInserted};}},{key:'finalizeResult',value:function finalizeResult(result,lines){result.layoutLines=[];for(var index=0;index<lines.length;index++){result.layoutLines.push(lines[index]);}result.layoutLineHeight=this.getLineHeight();lines=[];}},{key:'trimLine',value:function trimLine(info,firstLine){var line=info.text;var lineWidth=info.width;// Trim start whitespaces if the line is not a start of the paragraph only.
// let trimStartSpaces : boolean = ((info.LineType & LineType.FirstParagraphLine) === 0);
var start=this.format==null||!this.format.rightToLeft;line=start?line.trim():line.trim();// Recalculate line width.
if(line.length!==info.text.length){lineWidth=this.getLineWidth(line);lineWidth+=this.getLineIndent(firstLine);}info.text=line;info.width=lineWidth;return info;}},{key:'getWrapType',value:function getWrapType(){var wrapType=this.format!=null?this.format.wordWrap:PdfWordWrapType.Word;return wrapType;}}]);return PdfStringLayouter;}());_export('PdfStringLayoutResult',PdfStringLayoutResult=function(){function PdfStringLayoutResult(){_classCallCheck(this,PdfStringLayoutResult);}_createClass(PdfStringLayoutResult,[{key:'remainder',get:function get(){return this.textRemainder;}},{key:'actualSize',get:function get(){if(typeof this.size==='undefined'){this.size=new SizeF(0,0);}return this.size;}},{key:'lines',get:function get(){return this.layoutLines;}},{key:'lineHeight',get:function get(){return this.layoutLineHeight;}},{key:'empty',get:function get(){return this.layoutLines==null||this.layoutLines.length===0;}},{key:'lineCount',get:function get(){var count=!this.empty?this.layoutLines.length:0;return count;}}]);return PdfStringLayoutResult;}());_export('LineInfo',LineInfo=function(){function LineInfo(){_classCallCheck(this,LineInfo);}_createClass(LineInfo,[{key:'lineType',get:function get(){return this.type;},set:function set(value){this.type=value;}},{key:'text',get:function get(){return this.content;},set:function set(value){this.content=value;}},{key:'width',get:function get(){return this.lineWidth;},set:function set(value){this.lineWidth=value;}}]);return LineInfo;}());(function(LineType){/**
     * Specifies the type of `None`.
     * @private
     */LineType[LineType["None"]=0]="None";/**
     * Specifies the type of `NewLineBreak`.
     * @private
     */LineType[LineType["NewLineBreak"]=1]="NewLineBreak";/**
     * Specifies the type of `LayoutBreak`.
     * @private
     */LineType[LineType["LayoutBreak"]=2]="LayoutBreak";/**
     * Specifies the type of `FirstParagraphLine`.
     * @private
     */LineType[LineType["FirstParagraphLine"]=4]="FirstParagraphLine";/**
     * Specifies the type of `LastParagraphLine`.
     * @private
     */LineType[LineType["LastParagraphLine"]=8]="LastParagraphLine";})(LineType||_export('LineType',LineType={}));/**
 * PdfFont.ts class for EJ2-PDF
 *//**
 * Defines a particular format for text, including font face, size, and style attributes.
 * @private
 */_export('PdfFont',PdfFont=function(){function PdfFont(size,style){_classCallCheck(this,PdfFont);/**
         * `Style` of the font.
         * @private
         */this.fontStyle=PdfFontStyle.Regular;if(typeof size==='number'&&typeof style==='undefined'){this.fontSize=size;}else{this.fontSize=size;this.setStyle(style);}}//Properties
/**
     * Gets the face name of this Font.
     * @private
     */_createClass(PdfFont,[{key:'measureString',value:function measureString(text,arg2,arg3,arg4,arg5){if(typeof text==='string'&&typeof arg2==='undefined'){return this.measureString(text,null);}else if(typeof text==='string'&&(arg2 instanceof PdfStringFormat||arg2==null)&&typeof arg3==='undefined'&&typeof arg4==='undefined'){var temparg2=arg2;var charactersFitted=0;var linesFilled=0;return this.measureString(text,temparg2,charactersFitted,linesFilled);}else if(typeof text==='string'&&(arg2 instanceof PdfStringFormat||arg2==null)&&typeof arg3==='number'&&typeof arg4==='number'){var _temparg=arg2;return this.measureString(text,0,_temparg,arg3,arg4);// } else if (typeof text === 'string' && typeof arg2 === 'number' && typeof arg3 === 'undefined') {
//     return this.measureString(text, arg2, null);
// } else if (typeof text === 'string' && typeof arg2 === 'number' && (arg3 instanceof PdfStringFormat || arg3 == null) && typeof arg4 === 'undefined' && typeof arg5 === 'undefined') {
//     let temparg3 : PdfStringFormat = arg3 as PdfStringFormat;
//     let charactersFitted : number = 0;
//     let linesFilled : number = 0;
//     return this.measureString(text, arg2, temparg3, charactersFitted, linesFilled);
}else if(typeof text==='string'&&typeof arg2==='number'&&(arg3 instanceof PdfStringFormat||arg3==null)&&typeof arg4==='number'&&typeof arg5==='number'){var layoutArea=new SizeF(arg2,0);var temparg3=arg3;return this.measureString(text,layoutArea,temparg3,arg4,arg5);// } else if (typeof text === 'string' && arg2 instanceof SizeF && typeof arg3 === 'undefined') {
//     return this.measureString(text, arg2, null);
// } else if (typeof text === 'string' && arg2 instanceof SizeF && (arg3 instanceof PdfStringFormat || arg3 == null) && typeof arg4 === 'undefined' && typeof arg5 === 'undefined') {
//     let temparg3 : PdfStringFormat = arg3 as PdfStringFormat;
//     let charactersFitted : number = 0;
//     let linesFilled : number = 0;
//     return this.measureString(text, arg2, temparg3, charactersFitted, linesFilled);
}else{if(text==null){throw Error('ArgumentNullException("text")');}var _temparg2=arg2;var _temparg3=arg3;var layouter=new PdfStringLayouter();var result=layouter.layout(text,this,_temparg3,_temparg2,false,new SizeF(0,0));// arg4 = (result.Remainder == null) ? text.length : text.length - result.Remainder.length;
arg4=text.length;arg5=result.empty?0:result.lines.length;return result.actualSize;}}},{key:'equalsTo',value:function equalsTo(obj){var result=this.equalsToFont(obj);return result;}},{key:'getInternals',value:function getInternals(){return this.pdfFontInternals;}},{key:'setInternals',value:function setInternals(internals){if(internals==null){throw new Error('ArgumentNullException:internals');}this.pdfFontInternals=internals;}},{key:'setStyle',value:function setStyle(style){this.fontStyle=style;}},{key:'applyFormatSettings',value:function applyFormatSettings(line,format,width){// if (line == null) {
//     throw new Error(`ArgumentNullException:line`);
// }
var realWidth=width;if(format!=null&&width>0){// Space among characters is not default.
if(format.characterSpacing!==0){realWidth+=(line.length-1)*format.characterSpacing;}// Space among words is not default.
if(format.wordSpacing!==0){var symbols=StringTokenizer.spaces;var whitespacesCount=StringTokenizer.getCharsCount(line,symbols);realWidth+=whitespacesCount*format.wordSpacing;}}return realWidth;}},{key:'name',get:function get(){return this.metrics.name;}},{key:'size',get:function get(){return this.fontSize;}},{key:'height',get:function get(){return this.metrics.getHeight(null);}},{key:'style',get:function get(){return this.fontStyle;},set:function set(value){this.fontStyle=value;}},{key:'bold',get:function get(){return(this.style&PdfFontStyle.Bold)>0;}},{key:'italic',get:function get(){return(this.style&PdfFontStyle.Italic)>0;}},{key:'strikeout',get:function get(){return(this.style&PdfFontStyle.Strikeout)>0;}},{key:'underline',get:function get(){return(this.style&PdfFontStyle.Underline)>0;}},{key:'metrics',get:function get(){return this.fontMetrics;},set:function set(value){this.fontMetrics=value;}},{key:'element',get:function get(){return this.pdfFontInternals;}}]);return PdfFont;}());//Constants
/**
 * `Multiplier` of the symbol width.
 * @default 0.001
 * @private
 */PdfFont.charSizeMultiplier=0.001;/**
 * `Synchronization` object.
 * @private
 */PdfFont.syncObject=new Object();/**
 * Used to `write a string` into output file.
 * @private
 */_export('PdfWriter',PdfWriter=function(){/**
     * Initialize an instance of `PdfWriter` class.
     * @private
     */function PdfWriter(stream){_classCallCheck(this,PdfWriter);this.streamWriter=stream;}//properties
/**
     * Gets and Sets the `document`.
     * @private
     */_createClass(PdfWriter,[{key:'write',value:function write(overload){var tempOverload=overload;this.streamWriter.write(tempOverload);}},{key:'document',get:function get(){return this.pdfDocument;},set:function set(value){this.pdfDocument=value;}},{key:'position',get:function get(){return this.streamWriter.buffer.size;}},{key:'length',get:function get(){return this.streamWriter.buffer.size;}},{key:'stream',get:function get(){var result=this.streamWriter;return result;}}]);return PdfWriter;}());(function(ObjectStatus){/**
     * Specifies the type of `None`.
     * @private
     */ObjectStatus[ObjectStatus["None"]=0]="None";/**
     * Specifies the type of `Registered`.
     * @private
     */ObjectStatus[ObjectStatus["Registered"]=1]="Registered";})(ObjectStatus||_export('ObjectStatus',ObjectStatus={}));/**
 * PdfMainObjectCollection.ts class for EJ2-PDF
 *//**
 * The collection of all `objects` within a PDF document.
 * @private
 */_export('PdfMainObjectCollection',PdfMainObjectCollection=function(){function PdfMainObjectCollection(){_classCallCheck(this,PdfMainObjectCollection);//Fields
/**
         * The collection of the `indirect objects`.
         * @default []
         * @private
         */this.objectCollections=[];/**
         * The collection of the `Indirect objects`.
         * @default new Dictionary<number, ObjectInfo>()
         * @private
         */this.mainObjectCollection=new Dictionary();/**
         * The collection of `primitive objects`.
         * @private
         */this.primitiveObjectCollection=new Dictionary();}//Properties
/**
     * Gets the `count`.
     * @private
     */_createClass(PdfMainObjectCollection,[{key:'items',value:function items(index){return this.objectCollections[index];}},{key:'add',value:function add(element){var objInfo=new ObjectInfo(element);this.objectCollections.push(objInfo);if(!this.primitiveObjectCollection.containsKey(element)){this.primitiveObjectCollection.setValue(element,this.objectCollections.length-1);}element.position=this.index=this.objectCollections.length-1;element.status=ObjectStatus.Registered;}},{key:'lookFor',value:function lookFor(obj){var index=-1;if(obj.position!==-1){return obj.position;}if(this.primitiveObjectCollection.containsKey(obj)&&this.count===this.primitiveObjectCollection.size()){index=this.primitiveObjectCollection.getValue(obj);}else{for(var i=this.count-1;i>=0;i--){var oi=this.objectCollections[i];if(oi.object===obj){index=i;break;}}}return index;}},{key:'getReference',value:function getReference(index,isNew){this.index=this.lookFor(index);var reference=void 0;this.isNew=false;var oi=this.objectCollections[this.index];reference=oi.reference;var obj={reference:reference,wasNew:isNew};return obj;}},{key:'trySetReference',value:function trySetReference(obj,reference,found){var result=true;found=true;this.index=this.lookFor(obj);var oi=this.objectCollections[this.index];oi.setReference(reference);return result;}},{key:'destroy',value:function destroy(){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this.objectCollections[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var obj=_step.value;if(obj!==undefined){obj.pdfObject.position=-1;obj.pdfObject.isSaving=undefined;obj.pdfObject.objectCollectionIndex=undefined;obj.pdfObject.position=undefined;}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}this.objectCollections=[];this.mainObjectCollection=new Dictionary();this.primitiveObjectCollection=new Dictionary();}},{key:'count',get:function get(){return this.objectCollections.length;}},{key:'outIsNew',get:function get(){return this.isNew;}}]);return PdfMainObjectCollection;}());_export('ObjectInfo',ObjectInfo=function(){function ObjectInfo(obj,reference){_classCallCheck(this,ObjectInfo);this.pdfObject=obj;this.pdfReference=reference;}//Properties
/**
     * Gets the `object`.
     * @private
     */_createClass(ObjectInfo,[{key:'setReference',value:function setReference(reference){this.pdfReference=reference;}},{key:'object',get:function get(){return this.pdfObject;},set:function set(value){this.pdfObject=value;}},{key:'reference',get:function get(){return this.pdfReference;}}]);return ObjectInfo;}());_export('PdfDocumentBase',PdfDocumentBase=function(){function PdfDocumentBase(document){_classCallCheck(this,PdfDocumentBase);/**
         * If the stream is copied,  then it specifies true.
         * @private
         */this.isStreamCopied=false;if(document instanceof PdfDocument){this.document=document;}}//Prpperties
/**
     * Gets the `PDF objects` collection, which stores all objects and references to it..
     * @private
     */_createClass(PdfDocumentBase,[{key:'setMainObjectCollection',value:function setMainObjectCollection(mainObjectCollection){this.objects=mainObjectCollection;}},{key:'setCrossTable',value:function setCrossTable(cTable){this.pdfCrossTable=cTable;}},{key:'setCatalog',value:function setCatalog(catalog){this.pdfCatalog=catalog;}},{key:'save',value:function save(filename){var _this4=this;var encoding=new Encoding(true);var SW=new StreamWriter(encoding);if(typeof filename==='undefined'){var _encoding=new Encoding(true);var _SW=new StreamWriter(_encoding);return new Promise(function(resolve,reject){/* tslint:disable-next-line:no-any */var obj={};obj.blobData=new Blob([_this4.document.docSave(_SW,true)],{type:'application/pdf'});resolve(obj);});}else{this.document.docSave(SW,filename,true);}}},{key:'clone',value:function clone(){return this.document;}},{key:'pdfObjects',get:function get(){return this.objects;}},{key:'crossTable',get:function get(){return this.pdfCrossTable;}},{key:'currentSavingObj',get:function get(){return this.currentSavingObject;},set:function set(value){this.currentSavingObject=value;}},{key:'catalog',get:function get(){return this.pdfCatalog;},set:function set(value){this.pdfCatalog=value;}}]);return PdfDocumentBase;}());(function(ObjectType){/**
     * Specifies the type of `Free`.
     * @private
     */ObjectType[ObjectType["Free"]=0]="Free";/**
     * Specifies the type of `Normal`.
     * @private
     */ObjectType[ObjectType["Normal"]=1]="Normal";/**
     * Specifies the type of `Packed`.
     * @private
     */ObjectType[ObjectType["Packed"]=2]="Packed";})(ObjectType||_export('ObjectType',ObjectType={}));/**
 * PdfCatalog.ts class for EJ2-PDF
 *//**
 * `PdfCatalog` class represents internal catalog of the Pdf document.
 * @private
 */_export('PdfCatalog',PdfCatalog=function(_PdfDictionary2){_inherits(PdfCatalog,_PdfDictionary2);//constructor
/**
     * Initializes a new instance of the `PdfCatalog` class.
     * @private
     */function PdfCatalog(){_classCallCheck(this,PdfCatalog);var _this5=_possibleConstructorReturn(this,(PdfCatalog.__proto__||Object.getPrototypeOf(PdfCatalog)).call(this));//fields
/**
         * Internal variable to store collection of `sections`.
         * @default null
         * @private
         */_this5.sections=null;/**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @private
         */_this5.tempDictionaryProperties=new DictionaryProperties();_this5.items.setValue(new DictionaryProperties().type,new PdfName('Catalog'));return _this5;}//Properties
/**
     * Gets or sets the sections, which contain `pages`.
     * @private
     */_createClass(PdfCatalog,[{key:'pages',get:function get(){return this.sections;},set:function set(value){var dictionary=value.element;// if (this.sections !== value) {
//     this.sections = value;
//     this.Items.setValue(this.tempDictionaryProperties.pages, new PdfReferenceHolder(value));
// }
this.sections=value;this.items.setValue(this.tempDictionaryProperties.pages,new PdfReferenceHolder(value));}}]);return PdfCatalog;}(PdfDictionary));_export('PdfCrossTable',PdfCrossTable=function(){function PdfCrossTable(){_classCallCheck(this,PdfCrossTable);/**
         * The modified `objects` that should be saved.
         * @private
         */this.objects=new Dictionary();/**
         * Holds `maximal generation number` or offset to object.
         * @default 0
         * @private
         */this.maxGenNumIndex=0;/**
         * The `number of the objects`.
         * @default 0
         * @private
         */this.objectCount=0;/**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @default new PdfDictionaryProperties()
         * @private
         */this.dictionaryProperties=new DictionaryProperties();}//Properties
/**
     * Gets or sets if the document `is merged`.
     * @private
     */_createClass(PdfCrossTable,[{key:'save',value:function save(writer,filename){this.saveHead(writer);this.mappedReferences=null;this.objects.clear();this.markTrailerReferences();this.saveObjects(writer);var saveCount=this.count;var xrefPos=writer.position;this.registerObject(0,new PdfReference(0,-1),true);var prevXRef=0;writer.write(Operators.xref);writer.write(Operators.newLine);this.saveSections(writer);this.saveTrailer(writer,this.count,prevXRef);this.saveTheEndess(writer,xrefPos);this.count=saveCount;for(var i=0;i<this.objectCollection.count;++i){var oi=this.objectCollection.items(i);oi.object.isSaving=false;}if(typeof filename==='undefined'){return writer.stream.buffer;}else{writer.stream.save(filename);}}},{key:'saveTheEndess',value:function saveTheEndess(writer,xrefPos){writer.write(Operators.newLine+Operators.startxref+Operators.newLine);writer.write(xrefPos.toString()+Operators.newLine);writer.write(Operators.eof+Operators.newLine);}},{key:'saveTrailer',value:function saveTrailer(writer,count,prevXRef){writer.write(Operators.trailer+Operators.newLine);// Save the dictionary.
var trailer=this.trailer;trailer.items.setValue(this.dictionaryProperties.size,new PdfNumber(this.objectCount+1));trailer=new PdfDictionary(trailer);// Make it real dictionary.
trailer.setEncrypt(false);trailer.save(writer);}},{key:'saveSections',value:function saveSections(writer){var objectNum=0;var count=0;do{count=this.prepareSubsection(objectNum);this.saveSubsection(writer,objectNum,count);objectNum+=count;}while(count!==0);}},{key:'saveSubsection',value:function saveSubsection(writer,objectNum,count){if(count<=0||objectNum>=this.count){return;}writer.write(objectNum+' '+(count+1)+Operators.newLine);for(var i=objectNum;i<=objectNum+count;++i){var obj=this.objects.getValue(i);var str='';if(obj.type===ObjectType.Free){str=this.getItem(obj.offset,65535,true);}else{str=this.getItem(obj.offset,obj.generation,false);}writer.write(str);}}},{key:'getItem',value:function getItem(offset,genNumber,isFree){var returnString='';var addOffsetLength=10-offset.toString().length;if(genNumber<=0){genNumber=0;}var addGenNumberLength=5-genNumber.toString().length<=0?0:5-genNumber.toString().length;for(var index=0;index<addOffsetLength;index++){returnString=returnString+'0';}returnString=returnString+offset.toString()+' ';for(var _index2=0;_index2<addGenNumberLength;_index2++){returnString=returnString+'0';}returnString=returnString+genNumber.toString()+' ';returnString=returnString+(isFree?Operators.f:Operators.n)+Operators.newLine;return returnString;}},{key:'prepareSubsection',value:function prepareSubsection(objectNum){var count=0;var i=void 0;var total=this.count;for(var k=0;k<this.document.pdfObjects.count;k++){var reference=this.document.pdfObjects.items(k).reference;var refString=reference.toString();var refArray=refString.split(' ');}if(objectNum>=total){return count;}// search for first changed indirect object.
for(i=objectNum;i<total;++i){break;}objectNum=i;// look up for all indirect objects in one subsection.
for(;i<total;++i){++count;}return count;}},{key:'markTrailerReferences',value:function markTrailerReferences(){var keys=this.trailer.items.keys();var values=this.trailer.items.values();}},{key:'saveHead',value:function saveHead(writer){var version=this.generateFileVersion(writer.document);writer.write('%PDF-'+version);writer.write(Operators.newLine);}},{key:'generateFileVersion',value:function generateFileVersion(document){var iVersion=4;var version='1.'+iVersion.toString();return version;}},{key:'getReference',value:function getReference(obj,bNew){if(typeof bNew==='undefined'){var wasNew=false;return this.getReference(obj,wasNew);}else{//code splitted for reducing lines of code exceeds 100.
return this.getSubReference(obj,bNew);}}},{key:'getSubReference',value:function getSubReference(obj,bNew){var isNew=false;var wasNew=void 0;var reference=null;// if (obj.IsSaving) {
if(this.items.count>0&&obj.objectCollectionIndex>0&&this.items.count>obj.objectCollectionIndex-1){var tempObj=this.document.pdfObjects.getReference(obj,wasNew);reference=tempObj.reference;wasNew=tempObj.wasNew;}if(reference==null){if(obj.status===ObjectStatus.Registered){wasNew=false;}else{wasNew=true;}}else{wasNew=false;}// need to add mapped reference code
if(reference==null){var objnumber=this.nextObjNumber;reference=new PdfReference(objnumber,0);var found=void 0;if(wasNew){this.document.pdfObjects.add(obj);this.document.pdfObjects.trySetReference(obj,reference,found);var tempIndex=this.document.pdfObjects.count-1;var tempkey=this.document.pdfObjects.objectCollections[tempIndex].reference.objNumber;var tempvalue=this.document.pdfObjects.objectCollections[this.document.pdfObjects.count-1];this.document.pdfObjects.mainObjectCollection.setValue(tempkey,tempvalue);obj.position=-1;}else{this.document.pdfObjects.trySetReference(obj,reference,found);}obj.objectCollectionIndex=reference.objNumber;obj.status=ObjectStatus.None;isNew=true;}bNew=isNew||this.bForceNew;return reference;}},{key:'saveObjects',value:function saveObjects(writer){var objectCollection=this.objectCollection;for(var i=0;i<objectCollection.count;++i){var oi=objectCollection.items(i);var obj=oi.object;obj.isSaving=true;this.saveIndirectObject(obj,writer);}}},{key:'saveIndirectObject',value:function saveIndirectObject(obj,writer){var reference=this.getReference(obj);if(obj instanceof PdfCatalog){this.trailer.items.setValue(this.dictionaryProperties.root,reference);}// NOTE :  This is needed for correct string objects encryption.
this.pdfDocument.currentSavingObj=reference;var tempArchive=false;tempArchive=obj.getArchive();this.registerObject(writer.position,reference);this.doSaveObject(obj,reference,writer);}},{key:'doSaveObject',value:function doSaveObject(obj,reference,writer){var correctPosition=writer.length;writer.write(reference.objNumber.toString());writer.write(Operators.whiteSpace);writer.write(reference.genNumber.toString());writer.write(Operators.whiteSpace);writer.write(Operators.obj);writer.write(Operators.newLine);obj.save(writer);var stream=writer.stream;writer.write(Operators.endObj);writer.write(Operators.newLine);}},{key:'registerObject',value:function registerObject(offset,reference,free){if(typeof free==='boolean'){// Register the object by its number.
this.objects.setValue(reference.objNumber,new RegisteredObject(offset,reference,free));this.maxGenNumIndex=Math.max(this.maxGenNumIndex,reference.genNumber);}else if(typeof free==='undefined'){// Register the object by its number.
this.objects.setValue(reference.objNumber,new RegisteredObject(offset,reference));this.maxGenNumIndex=Math.max(this.maxGenNumIndex,reference.genNumber);}}},{key:'isMerging',get:function get(){return this.merging;},set:function set(value){this.merging=value;}},{key:'trailer',get:function get(){if(this.internalTrailer==null){this.internalTrailer=new PdfStream();}return this.internalTrailer;}},{key:'document',get:function get(){return this.pdfDocument;},set:function set(value){this.pdfDocument=value;this.items=this.pdfDocument.pdfObjects;}},{key:'pdfObjects',get:function get(){return this.items;}},{key:'objectCollection',get:function get(){return this.pdfDocument.pdfObjects;}},{key:'count',get:function get(){return this.objectCount;},set:function set(value){this.objectCount=value;}},{key:'nextObjNumber',get:function get(){this.count=this.count+1;return this.count;}}],[{key:'dereference',value:function dereference(obj){var rh=obj;if(rh!=null){obj=rh.object;}return obj;}}]);return PdfCrossTable;}());_export('RegisteredObject',RegisteredObject=function(){_createClass(RegisteredObject,[{key:'objectNumber',get:function get(){return this.object;}},{key:'offset',get:function get(){var result=void 0;result=this.offsetNumber;return result;}}]);function RegisteredObject(offset,reference,free){_classCallCheck(this,RegisteredObject);if(typeof free==='undefined'){var tempOffset=offset;this.offsetNumber=tempOffset;var tempReference=reference;this.generation=tempReference.genNumber;this.object=tempReference.objNumber;this.type=ObjectType.Normal;}else{var _tempOffset=offset;var _tempReference=reference;this.constructor(_tempOffset,_tempReference);this.type=ObjectType.Free;}}return RegisteredObject;}());_export('PdfPageSize',PdfPageSize=//constructor
/**
     * Initialize an instance for `PdfPageSize` class.
     * @private
     */function PdfPageSize(){// 
_classCallCheck(this,PdfPageSize);});/**
 * Specifies the size of `letter`.
 * @private
 */PdfPageSize.letter=new SizeF(612,792);/**
 * Specifies the size of `note`.
 * @private
 */PdfPageSize.note=new SizeF(540,720);/**
 * Specifies the size of `legal`.
 * @private
 */PdfPageSize.legal=new SizeF(612,1008);/**
 * Specifies the size of `a0`.
 * @private
 */PdfPageSize.a0=new SizeF(2380,3368);/**
 * Specifies the size of `a1`.
 * @private
 */PdfPageSize.a1=new SizeF(1684,2380);/**
 * Specifies the size of `a2`.
 * @private
 */PdfPageSize.a2=new SizeF(1190,1684);/**
 * Specifies the size of `a3`.
 * @private
 */PdfPageSize.a3=new SizeF(842,1190);/**
 * Specifies the size of `a4`.
 * @private
 */PdfPageSize.a4=new SizeF(595,842);/**
 * Specifies the size of `a5`.
 * @private
 */PdfPageSize.a5=new SizeF(421,595);/**
 * Specifies the size of `a6`.
 * @private
 */PdfPageSize.a6=new SizeF(297,421);/**
 * Specifies the size of `a7`.
 * @private
 */PdfPageSize.a7=new SizeF(210,297);/**
 * Specifies the size of `a8`.
 * @private
 */PdfPageSize.a8=new SizeF(148,210);/**
 * Specifies the size of `a9`.
 * @private
 */PdfPageSize.a9=new SizeF(105,148);/**
 * Specifies the size of `a10`.
 * @private
 */PdfPageSize.a10=new SizeF(74,105);/**
 * Specifies the size of `b0`.
 * @private
 */PdfPageSize.b0=new SizeF(2836,4008);/**
 * Specifies the size of `b1`.
 * @private
 */PdfPageSize.b1=new SizeF(2004,2836);/**
 * Specifies the size of `b2`.
 * @private
 */PdfPageSize.b2=new SizeF(1418,2004);/**
 * Specifies the size of `b3`.
 * @private
 */PdfPageSize.b3=new SizeF(1002,1418);/**
 * Specifies the size of `b4`.
 * @private
 */PdfPageSize.b4=new SizeF(709,1002);/**
 * Specifies the size of `b5`.
 * @private
 */PdfPageSize.b5=new SizeF(501,709);/**
 * Specifies the size of `archE`.
 * @private
 */PdfPageSize.archE=new SizeF(2592,3456);/**
 * Specifies the size of `archD`.
 * @private
 */PdfPageSize.archD=new SizeF(1728,2592);/**
 * Specifies the size of `archC`.
 * @private
 */PdfPageSize.archC=new SizeF(1296,1728);/**
 * Specifies the size of `archB`.
 * @private
 */PdfPageSize.archB=new SizeF(864,1296);/**
 * Specifies the size of `archA`.
 * @private
 */PdfPageSize.archA=new SizeF(648,864);/**
 * Specifies the size of `flsa`.
 * @private
 */PdfPageSize.flsa=new SizeF(612,936);/**
 * Specifies the size of `halfLetter`.
 * @private
 */PdfPageSize.halfLetter=new SizeF(396,612);/**
 * Specifies the size of `letter11x17`.
 * @private
 */PdfPageSize.letter11x17=new SizeF(792,1224);/**
 * Specifies the size of `ledger`.
 * @private
 */PdfPageSize.ledger=new SizeF(1224,792);/**
 * public Enum for `PdfPageOrientation`.
 * @private
 */(function(PdfPageOrientation){/**
     * Specifies the type of `Portrait`.
     * @private
     */PdfPageOrientation[PdfPageOrientation["Portrait"]=0]="Portrait";/**
     * Specifies the type of `Landscape`.
     * @private
     */PdfPageOrientation[PdfPageOrientation["Landscape"]=1]="Landscape";})(PdfPageOrientation||_export('PdfPageOrientation',PdfPageOrientation={}));/**
 * public Enum for `PdfPageRotateAngle`.
 * @private
 */(function(PdfPageRotateAngle){/**
     * Specifies the type of `RotateAngle0`.
     * @private
     */PdfPageRotateAngle[PdfPageRotateAngle["RotateAngle0"]=0]="RotateAngle0";/**
     * Specifies the type of `RotateAngle90`.
     * @private
     */PdfPageRotateAngle[PdfPageRotateAngle["RotateAngle90"]=1]="RotateAngle90";/**
     * Specifies the type of `RotateAngle180`.
     * @private
     */PdfPageRotateAngle[PdfPageRotateAngle["RotateAngle180"]=2]="RotateAngle180";/**
     * Specifies the type of `RotateAngle270`.
     * @private
     */PdfPageRotateAngle[PdfPageRotateAngle["RotateAngle270"]=3]="RotateAngle270";})(PdfPageRotateAngle||_export('PdfPageRotateAngle',PdfPageRotateAngle={}));/**
 * public Enum for `PdfNumberStyle`.
 * @private
 */(function(PdfNumberStyle){/**
     * Specifies the type of `None`.
     * @private
     */PdfNumberStyle[PdfNumberStyle["None"]=0]="None";/**
     * Specifies the type of `Numeric`.
     * @private
     */PdfNumberStyle[PdfNumberStyle["Numeric"]=1]="Numeric";/**
     * Specifies the type of `LowerLatin`.
     * @private
     */PdfNumberStyle[PdfNumberStyle["LowerLatin"]=2]="LowerLatin";/**
     * Specifies the type of `LowerRoman`.
     * @private
     */PdfNumberStyle[PdfNumberStyle["LowerRoman"]=3]="LowerRoman";/**
     * Specifies the type of `UpperLatin`.
     * @private
     */PdfNumberStyle[PdfNumberStyle["UpperLatin"]=4]="UpperLatin";/**
     * Specifies the type of `UpperRoman`.
     * @private
     */PdfNumberStyle[PdfNumberStyle["UpperRoman"]=5]="UpperRoman";})(PdfNumberStyle||_export('PdfNumberStyle',PdfNumberStyle={}));/**
 * public Enum for `PdfDockStyle`.
 * @private
 */(function(PdfDockStyle){/**
     * Specifies the type of `None`.
     * @private
     */PdfDockStyle[PdfDockStyle["None"]=0]="None";/**
     * Specifies the type of `Bottom`.
     * @private
     */PdfDockStyle[PdfDockStyle["Bottom"]=1]="Bottom";/**
     * Specifies the type of `Top`.
     * @private
     */PdfDockStyle[PdfDockStyle["Top"]=2]="Top";/**
     * Specifies the type of `Left`.
     * @private
     */PdfDockStyle[PdfDockStyle["Left"]=3]="Left";/**
     * Specifies the type of `Right`.
     * @private
     */PdfDockStyle[PdfDockStyle["Right"]=4]="Right";/**
     * Specifies the type of `Fill`.
     * @private
     */PdfDockStyle[PdfDockStyle["Fill"]=5]="Fill";})(PdfDockStyle||_export('PdfDockStyle',PdfDockStyle={}));/**
 * public Enum for `PdfAlignmentStyle`.
 * @private
 */(function(PdfAlignmentStyle){/**
     * Specifies the type of `None`.
     * @private
     */PdfAlignmentStyle[PdfAlignmentStyle["None"]=0]="None";/**
     * Specifies the type of `TopLeft`.
     * @private
     */PdfAlignmentStyle[PdfAlignmentStyle["TopLeft"]=1]="TopLeft";/**
     * Specifies the type of `TopCenter`.
     * @private
     */PdfAlignmentStyle[PdfAlignmentStyle["TopCenter"]=2]="TopCenter";/**
     * Specifies the type of `TopRight`.
     * @private
     */PdfAlignmentStyle[PdfAlignmentStyle["TopRight"]=3]="TopRight";/**
     * Specifies the type of `MiddleLeft`.
     * @private
     */PdfAlignmentStyle[PdfAlignmentStyle["MiddleLeft"]=4]="MiddleLeft";/**
     * Specifies the type of `MiddleCenter`.
     * @private
     */PdfAlignmentStyle[PdfAlignmentStyle["MiddleCenter"]=5]="MiddleCenter";/**
     * Specifies the type of `MiddleRight`.
     * @private
     */PdfAlignmentStyle[PdfAlignmentStyle["MiddleRight"]=6]="MiddleRight";/**
     * Specifies the type of `BottomLeft`.
     * @private
     */PdfAlignmentStyle[PdfAlignmentStyle["BottomLeft"]=7]="BottomLeft";/**
     * Specifies the type of `BottomCenter`.
     * @private
     */PdfAlignmentStyle[PdfAlignmentStyle["BottomCenter"]=8]="BottomCenter";/**
     * Specifies the type of `BottomRight`.
     * @private
     */PdfAlignmentStyle[PdfAlignmentStyle["BottomRight"]=9]="BottomRight";})(PdfAlignmentStyle||_export('PdfAlignmentStyle',PdfAlignmentStyle={}));/**
 * public Enum for `TemplateType`.
 * @private
 */(function(TemplateType){/**
     * Specifies the type of `None`.
     * @private
     */TemplateType[TemplateType["None"]=0]="None";/**
     * Specifies the type of `Top`.
     * @private
     */TemplateType[TemplateType["Top"]=1]="Top";/**
     * Specifies the type of `Bottom`.
     * @private
     */TemplateType[TemplateType["Bottom"]=2]="Bottom";/**
     * Specifies the type of `Left`.
     * @private
     */TemplateType[TemplateType["Left"]=3]="Left";/**
     * Specifies the type of `Right`.
     * @private
     */TemplateType[TemplateType["Right"]=4]="Right";})(TemplateType||_export('TemplateType',TemplateType={}));/**
 * PdfMargins.ts class for EJ2-PDF
 * A class representing PDF page margins.
 */_export('PdfMargins',PdfMargins=function(){/**
     * Initializes a new instance of the `PdfMargins` class.
     * @private
     */function PdfMargins(){_classCallCheck(this,PdfMargins);/**
         * Represents the `Default Page Margin` value.
         * @default 0.0
         * @private
         */this.pdfMargin=40.0;this.setMargins(this.pdfMargin);}//Properties
/**
     * Gets or sets the `left margin` size.
     * @private
     */_createClass(PdfMargins,[{key:'setMargins',value:function setMargins(margin1,margin2,margin3,margin4){if(typeof margin2==='undefined'){this.leftMargin=this.topMargin=this.rightMargin=this.bottomMargin=margin1;}else{if(typeof margin3==='undefined'){this.leftMargin=this.rightMargin=margin1;this.bottomMargin=this.topMargin=margin2;}else{this.leftMargin=margin1;this.topMargin=margin2;this.rightMargin=margin3;this.bottomMargin=margin4;}}}},{key:'clone',value:function clone(){return this;}},{key:'left',get:function get(){return this.leftMargin;},set:function set(value){this.leftMargin=value;}},{key:'top',get:function get(){return this.topMargin;},set:function set(value){this.topMargin=value;}},{key:'right',get:function get(){return this.rightMargin;},set:function set(value){this.rightMargin=value;}},{key:'bottom',get:function get(){return this.bottomMargin;},set:function set(value){this.bottomMargin=value;}},{key:'all',set:function set(value){this.setMargins(value);}}]);return PdfMargins;}());_export('PdfPageSettings',PdfPageSettings=function(){function PdfPageSettings(margins){_classCallCheck(this,PdfPageSettings);//Fields
/**
         * The page `margins`.
         * @private
         */this.pageMargins=new PdfMargins();/**
         * The page `size`.
         * @default a4
         * @private
         */this.pageSize=PdfPageSize.a4;/**
         * The page `rotation angle`.
         * @default PdfPageRotateAngle.RotateAngle0
         * @private
         */this.rotateAngle=PdfPageRotateAngle.RotateAngle0;/**
         * The page `orientation`.
         * @default PdfPageOrientation.Portrait
         * @private
         */this.pageOrientation=PdfPageOrientation.Portrait;/**
         * The page `origin`.
         * @default 0,0
         * @private
         */this.pageOrigin=new PointF(0,0);/**
         * Checks the Whether the `rotation` is applied or not.
         * @default false
         * @private
         */this.isRotation=false;if(typeof margins==='number'){this.pageMargins.setMargins(margins);}}//Properties
/**
     * Gets or sets the `size` of the page.
     * @private
     */_createClass(PdfPageSettings,[{key:'updateSize',value:function updateSize(orientation){var min=Math.min(this.pageSize.width,this.pageSize.height);var max=Math.max(this.pageSize.width,this.pageSize.height);switch(orientation){case PdfPageOrientation.Portrait:this.pageSize=new SizeF(min,max);break;case PdfPageOrientation.Landscape:this.pageSize=new SizeF(max,min);break;}}},{key:'clone',value:function clone(){var settings=this;settings.pageMargins=this.pageMargins.clone();// if (GetTransition() != null)
// {
//     settings.Transition = (PdfPageTransition)Transition.clone();
// }
return settings;}},{key:'getActualSize',value:function getActualSize(){var width=this.width-(this.margins.left+this.margins.right);var height=this.height-(this.margins.top+this.margins.bottom);var size=new SizeF(width,height);return size;}},{key:'setSize',value:function setSize(size){var min=Math.min(size.width,size.height);var max=Math.max(size.width,size.height);if(this.orientation===PdfPageOrientation.Portrait){this.pageSize=new SizeF(min,max);}else{this.pageSize=new SizeF(max,min);}}},{key:'size',get:function get(){return this.pageSize;},set:function set(value){this.setSize(value);}},{key:'orientation',get:function get(){return this.pageOrientation;},set:function set(orientation){if(this.pageOrientation!==orientation){this.pageOrientation=orientation;this.updateSize(orientation);}}},{key:'margins',get:function get(){return this.pageMargins;},set:function set(value){this.pageMargins=value;}},{key:'width',get:function get(){return this.pageSize.width;},set:function set(value){this.pageSize.width=value;}},{key:'height',get:function get(){return this.pageSize.height;},set:function set(value){this.pageSize.height=value;}},{key:'origin',get:function get(){return this.pageOrigin;},set:function set(value){this.pageOrigin=value;}},{key:'rotate',get:function get(){return this.rotateAngle;},set:function set(value){this.rotateAngle=value;this.isRotation=true;}}]);return PdfPageSettings;}());_export('PdfStreamWriter',PdfStreamWriter=function(){/**
     * Initialize an instance of `PdfStreamWriter` class.
     * @private
     */function PdfStreamWriter(stream){_classCallCheck(this,PdfStreamWriter);if(stream==null){throw new Error('ArgumentNullException:stream');}this.stream=stream;}//Implementation
/**
     * `Clear` the stream.
     * @public
     */_createClass(PdfStreamWriter,[{key:'clear',value:function clear(){this.stream.clearStream();}},{key:'setGraphicsState',value:function setGraphicsState(dictionaryName){if(dictionaryName instanceof PdfName){this.stream.write(dictionaryName.toString());this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.setGraphicsState);}else{this.stream.write(Operators.slash);this.stream.write(dictionaryName);this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.setGraphicsState);}}},{key:'executeObject',value:function executeObject(name){this.stream.write(name.toString());this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.paintXObject);this.stream.write(Operators.newLine);}},{key:'closePath',value:function closePath(){this.writeOperator(Operators.closePath);}},{key:'clipPath',value:function clipPath(useEvenOddRule){this.stream.write(Operators.clipPath);if(useEvenOddRule){this.stream.write(Operators.evenOdd);}this.stream.write(Operators.whiteSpace);this.stream.write(Operators.endPath);this.stream.write(Operators.newLine);}},{key:'closeFillStrokePath',value:function closeFillStrokePath(useEvenOddRule){this.stream.write(Operators.closeFillStrokePath);if(useEvenOddRule){this.stream.write(Operators.evenOdd);this.stream.write(Operators.newLine);}else{this.stream.write(Operators.newLine);}}},{key:'fillStrokePath',value:function fillStrokePath(useEvenOddRule){this.stream.write(Operators.fillStroke);if(useEvenOddRule){this.stream.write(Operators.evenOdd);this.stream.write(Operators.newLine);}else{this.stream.write(Operators.newLine);}}},{key:'fillPath',value:function fillPath(useEvenOddRule){this.stream.write(Operators.fill);if(useEvenOddRule){this.stream.write(Operators.evenOdd);this.stream.write(Operators.newLine);}else{this.stream.write(Operators.newLine);}}},{key:'endPath',value:function endPath(){this.writeOperator(Operators.n);}},{key:'closeFillPath',value:function closeFillPath(useEvenOddRule){this.writeOperator(Operators.closePath);this.stream.write(Operators.fill);if(useEvenOddRule){this.stream.write(Operators.evenOdd);this.stream.write(Operators.newLine);}else{this.stream.write(Operators.newLine);}}},{key:'closeStrokePath',value:function closeStrokePath(){this.writeOperator(Operators.closeStrokePath);}},{key:'setTextScaling',value:function setTextScaling(textScaling){this.stream.write(PdfNumber.floatToString(textScaling));this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.setTextScaling);}},{key:'strokePath',value:function strokePath(){this.writeOperator(Operators.stroke);}},{key:'restoreGraphicsState',value:function restoreGraphicsState(){this.writeOperator(Operators.restoreState);}},{key:'saveGraphicsState',value:function saveGraphicsState(){this.writeOperator(Operators.saveState);}},{key:'startNextLine',value:function startNextLine(arg1,arg2){if(typeof arg1==='undefined'){this.writeOperator(Operators.goToNextLine);}else if(arg1 instanceof PointF){this.writePoint(arg1);this.writeOperator(Operators.setCoords);}else{this.writePoint(arg1,arg2);this.writeOperator(Operators.setCoords);}}},{key:'setLeading',value:function setLeading(leading){this.stream.write(PdfNumber.floatToString(leading));this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.setTextLeading);}},{key:'beginPath',value:function beginPath(x,y){this.writePoint(x,y);this.writeOperator(Operators.beginPath);}},{key:'beginText',value:function beginText(){this.writeOperator(Operators.beginText);}},{key:'endText',value:function endText(){this.writeOperator(Operators.endText);}},{key:'appendRectangle',value:function appendRectangle(arg1,arg2,arg3,arg4){if(arg1 instanceof RectangleF){this.appendRectangle(arg1.x,arg1.y,arg1.width,arg1.height);}else{this.writePoint(arg1,arg2);this.writePoint(arg3,arg4);this.writeOperator(Operators.appendRectangle);}}},{key:'appendLineSegment',value:function appendLineSegment(arg1,arg2){if(arg1 instanceof PointF){this.appendLineSegment(arg1.x,arg1.y);}else{this.writePoint(arg1,arg2);this.writeOperator(Operators.appendLineSegment);}}},{key:'setTextRenderingMode',value:function setTextRenderingMode(renderingMode){this.stream.write(renderingMode.toString());this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.setRenderingMode);}},{key:'setCharacterSpacing',value:function setCharacterSpacing(charSpacing){this.stream.write(PdfNumber.floatToString(charSpacing));this.stream.write(Operators.whiteSpace);this.stream.write(Operators.setCharacterSpace);this.stream.write(Operators.newLine);}},{key:'setWordSpacing',value:function setWordSpacing(wordSpacing){this.stream.write(PdfNumber.floatToString(wordSpacing));this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.setWordSpace);}},{key:'showNextLineText',value:function showNextLineText(arg1,arg2){if(arg1 instanceof PdfString){this.checkTextParam(arg1);this.writeText(arg1);this.writeOperator(Operators.setTextOnNewLine);}else{this.checkTextParam(arg1);this.writeText(arg1,arg2);this.writeOperator(Operators.setTextOnNewLine);}}},{key:'setColorSpace',value:function setColorSpace(arg1,arg2){if(arg1 instanceof PdfName&&typeof arg2==='boolean'){var temparg1=arg1;var temparg2=arg2;// if (temparg1 == null) {
//     throw new Error('ArgumentNullException:name');
// }
var op=temparg2?Operators.selectcolorspaceforstroking:Operators.selectcolorspacefornonstroking;this.stream.write(temparg1.toString());this.stream.write(Operators.whiteSpace);this.stream.write(op);this.stream.write(Operators.newLine);}else{var _temparg4=arg1;var _temparg5=arg2;this.setColorSpace(new PdfName(_temparg4),_temparg5);}}},{key:'modifyCtm',value:function modifyCtm(matrix){if(matrix==null){throw new Error('ArgumentNullException:matrix');}this.stream.write(matrix.toString());this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.modifyCtm);}},{key:'setFont',value:function setFont(font,name,size){if(typeof name==='string'){this.setFont(font,new PdfName(name),size);}else{if(font==null){throw new Error('ArgumentNullException:font');}this.stream.write(name.toString());this.stream.write(Operators.whiteSpace);this.stream.write(PdfNumber.floatToString(size));this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.setFont);}}},{key:'writeOperator',value:function writeOperator(opcode){this.stream.write(opcode);this.stream.write(Operators.newLine);}},{key:'checkTextParam',value:function checkTextParam(text){if(text==null){throw new Error('ArgumentNullException:text');}if(typeof text==='string'&&text===''){throw new Error('ArgumentException:The text can not be an empty string, text');}}},{key:'writeText',value:function writeText(arg1,arg2){if(arg1 instanceof PdfString&&typeof arg2==='undefined'){this.stream.write(arg1.value);}else{var start=void 0;var end=void 0;if(arg2){start=PdfString.hexStringMark[0];end=PdfString.hexStringMark[1];}else{start=PdfString.stringMark[0];end=PdfString.stringMark[1];}this.stream.write(start);this.stream.write(arg1);this.stream.write(end);}}},{key:'writePoint',value:function writePoint(arg1,arg2){if(arg1 instanceof PointF&&typeof arg2==='undefined'){this.writePoint(arg1.x,arg1.y);}else{var temparg1=arg1;this.stream.write(PdfNumber.floatToString(temparg1));this.stream.write(Operators.whiteSpace);// NOTE: Change Y co-ordinate because we shifted co-ordinate system only.
arg2=this.updateY(arg2);this.stream.write(PdfNumber.floatToString(arg2));this.stream.write(Operators.whiteSpace);}}},{key:'updateY',value:function updateY(arg){return-arg;}},{key:'write',value:function write(string){var builder='';builder+=string;builder+=Operators.newLine;this.writeOperator(builder);}},{key:'writeComment',value:function writeComment(comment){if(comment!=null&&comment.length>0){var builder='';builder+=Operators.comment;builder+=Operators.whiteSpace;builder+=comment;//builder.Append( Operators.NewLine );
this.writeOperator(builder);}else{throw new Error('Invalid comment');}}},{key:'setColorAndSpace',value:function setColorAndSpace(color,colorSpace,forStroking){if(!color.isEmpty){// bool test = color is PdfExtendedColor;
this.stream.write(color.toString(colorSpace,forStroking));this.stream.write(Operators.newLine);}}},{key:'setLineDashPattern',value:function setLineDashPattern(pattern,patternOffset){// let pat : PdfArray = new PdfArray(pattern);
// let off : PdfNumber = new PdfNumber(patternOffset);
// this.setLineDashPatternHelper(pat, off);
this.setLineDashPatternHelper(pattern,patternOffset);}},{key:'setLineDashPatternHelper',value:function setLineDashPatternHelper(pattern,patternOffset){var tempPattern='[';if(pattern.length>1){for(var index=0;index<pattern.length;index++){if(index===pattern.length-1){tempPattern+=pattern[index].toString();}else{tempPattern+=pattern[index].toString()+' ';}}}tempPattern+='] ';tempPattern+=patternOffset.toString();tempPattern+=' '+Operators.setDashPattern;this.stream.write(tempPattern);this.stream.write(Operators.newLine);}},{key:'setMiterLimit',value:function setMiterLimit(miterLimit){this.stream.write(PdfNumber.floatToString(miterLimit));this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.setMiterLimit);}},{key:'setLineWidth',value:function setLineWidth(width){this.stream.write(PdfNumber.floatToString(width));this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.setLineWidth);}},{key:'setLineCap',value:function setLineCap(lineCapStyle){this.stream.write(lineCapStyle.toString());this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.setLineCapStyle);}},{key:'setLineJoin',value:function setLineJoin(lineJoinStyle){this.stream.write(lineJoinStyle.toString());this.stream.write(Operators.whiteSpace);this.writeOperator(Operators.setLineJoinStyle);}},{key:'position',get:function get(){return this.stream.position;}},{key:'length',get:function get(){var returnValue=0;if(this.stream.data.length!==0&&this.stream.data.length!==-1){for(var index=0;index<this.stream.data.length;index++){returnValue+=this.stream.data[index].length;}}return returnValue;}},{key:'document',get:function get(){return null;}}]);return PdfStreamWriter;}());_export('PdfPen',PdfPen=function(){function PdfPen(arg1,arg2){_classCallCheck(this,PdfPen);//Fields
/**
         * Specifies the `color of the pen`.
         * @default new PdfColor()
         * @private
         */this.pdfColor=new PdfColor(0,0,0);/**
         * Specifies the `dash offset of the pen`.
         * @default 0
         * @private
         */this.dashOffsetValue=0;/**
         * Specifies the `dash pattern of the pen`.
         * @default [0]
         * @private
         */this.penDashPattern=[0];/**
         * Specifies the `dash style of the pen`.
         * @default Solid
         * @private
         */this.pdfDashStyle=PdfDashStyle.Solid;/**
         * Specifies the `line cap of the pen`.
         * @default 0
         * @private
         */this.pdfLineCap=0;/**
         * Specifies the `line join of the pen`.
         * @default 0
         * @private
         */this.pdfLineJoin=0;/**
         * Specifies the `width of the pen`.
         * @default 1.0
         * @private
         */this.penWidth=1.0;/**
         * Specifies the `mitter limit of the pen`.
         * @default 0.0
         * @private
         */this.internalMiterLimit=0.0;/**
         * Stores the `colorspace` value.
         * @default Rgb
         * @private
         */this.colorSpace=PdfColorSpace.Rgb;if(typeof arg2==='number'){this.constructor(arg1);this.width=arg2;}else if(typeof arg2==='undefined'&&arg1 instanceof PdfBrush){this.setBrush(arg1);}else if(typeof arg2==='undefined'&&arg1 instanceof PdfColor){this.color=arg1;}}//Properties
/**
     * Gets or sets the `color of the pen`.
     * @private
     */_createClass(PdfPen,[{key:'clone',value:function clone(){var pen=this;return pen;}},{key:'setBrush',value:function setBrush(brush){var sBrush=brush;this.color=sBrush.color;this.pdfBrush=sBrush;}},{key:'monitorChanges',value:function monitorChanges(currentPen,streamWriter,getResources,saveState,currentColorSpace,matrix){var diff=false;saveState=true;if(currentPen==null){diff=true;}diff=this.dashControl(currentPen,saveState,streamWriter);streamWriter.setLineWidth(this.width);streamWriter.setLineJoin(this.lineJoin);streamWriter.setLineCap(this.lineCap);var miterLimit=this.miterLimit;if(miterLimit>0){streamWriter.setMiterLimit(miterLimit);diff=true;}var brush=this.pdfBrush;streamWriter.setColorAndSpace(this.color,currentColorSpace,true);diff=true;return diff;}},{key:'dashControl',value:function dashControl(pen,saveState,streamWriter){saveState=true;var lineWidth=this.width;var pattern=this.getPattern();streamWriter.setLineDashPattern(pattern,this.dashOffset*lineWidth);return saveState;}},{key:'getPattern',value:function getPattern(){var pattern=this.dashPattern;for(var i=0;i<pattern.length;++i){pattern[i]*=this.width;}return pattern;}},{key:'color',get:function get(){return this.pdfColor;},set:function set(value){this.pdfColor=value;}},{key:'dashOffset',get:function get(){if(typeof this.dashOffsetValue==='undefined'||this.dashOffsetValue==null){return 0;}else{return this.dashOffsetValue;}},set:function set(value){this.dashOffsetValue=value;}},{key:'dashPattern',get:function get(){return this.penDashPattern;},set:function set(value){this.penDashPattern=value;}},{key:'dashStyle',get:function get(){return this.pdfDashStyle;},set:function set(value){if(this.pdfDashStyle!==value){this.pdfDashStyle=value;switch(this.pdfDashStyle){case PdfDashStyle.Custom:break;case PdfDashStyle.Dash:this.penDashPattern=[3,1];break;case PdfDashStyle.Dot:this.penDashPattern=[1,1];break;case PdfDashStyle.DashDot:this.penDashPattern=[3,1,1,1];break;case PdfDashStyle.DashDotDot:this.penDashPattern=[3,1,1,1,1,1];break;case PdfDashStyle.Solid:break;default:this.pdfDashStyle=PdfDashStyle.Solid;this.penDashPattern=[0];break;}}}},{key:'lineCap',get:function get(){return this.pdfLineCap;},set:function set(value){this.pdfLineCap=value;}},{key:'lineJoin',get:function get(){return this.pdfLineJoin;},set:function set(value){this.pdfLineJoin=value;}},{key:'miterLimit',get:function get(){return this.internalMiterLimit;},set:function set(value){this.internalMiterLimit=value;}},{key:'width',get:function get(){return this.penWidth;},set:function set(value){this.penWidth=value;}}]);return PdfPen;}());_export('PdfTransformationMatrix',PdfTransformationMatrix=function(){function PdfTransformationMatrix(value){_classCallCheck(this,PdfTransformationMatrix);/**
         * Value for `angle converting`.
         * @default 180.0 / Math.PI
         * @private
         */this.radDegFactor=180.0/Math.PI;if(typeof value==='undefined'){this.transformationMatrix=new Matrix(1.00,0.00,0.00,1.00,0.00,0.00);}else{this.transformationMatrix=new Matrix(1.00,0.00,0.00,-1.00,0.00,0.00);}}// Properties
/**
     * Gets or sets the `internal matrix object`.
     * @private
     */_createClass(PdfTransformationMatrix,[{key:'translate',value:function translate(offsetX,offsetY){this.transformationMatrix.translate(offsetX,offsetY);}},{key:'scale',value:function scale(scaleX,scaleY){this.transformationMatrix.elements[0]=scaleX;this.transformationMatrix.elements[3]=scaleY;}},{key:'rotate',value:function rotate(angle){//Convert from degree to radian 
angle=angle*Math.PI/180;//Rotation 
this.transformationMatrix.elements[0]=Math.cos(angle);this.transformationMatrix.elements[1]=Math.sin(angle);this.transformationMatrix.elements[2]=-Math.sin(angle);this.transformationMatrix.elements[3]=Math.cos(angle);}},{key:'toString',value:function toString(){var builder='';var whitespace=' ';for(var i=0,len=this.transformationMatrix.elements.length;i<len;i++){var temp=this.matrix.elements[i];builder+=PdfNumber.floatToString(this.transformationMatrix.elements[i]);builder+=whitespace;}return builder;}},{key:'multiply',value:function multiply(matrix){this.transformationMatrix.multiply(matrix.matrix);}},{key:'radiansToDegrees',value:function radiansToDegrees(radians){return this.radDegFactor*radians;}},{key:'clone',value:function clone(){return this;}},{key:'matrix',get:function get(){return this.transformationMatrix;},set:function set(value){this.transformationMatrix=value;}}],[{key:'degreesToRadians',value:function degreesToRadians(degreesX){return this.degRadFactor*degreesX;}}]);return PdfTransformationMatrix;}());// Constants
/**
 * Value for `angle converting`.
 * @default Math.PI / 180.0
 * @private
 */PdfTransformationMatrix.degRadFactor=Math.PI/180.0;_export('Matrix',Matrix=function(){function Matrix(arg1,arg2,arg3,arg4,arg5,arg6){_classCallCheck(this,Matrix);if(typeof arg1==='undefined'){this.metrixElements=[];}else if(typeof arg1==='number'){this.constructor();this.metrixElements.push(arg1);this.metrixElements.push(arg2);this.metrixElements.push(arg3);this.metrixElements.push(arg4);this.metrixElements.push(arg5);this.metrixElements.push(arg6);}else{this.metrixElements=arg1;}}// Properties
/**
     * Gets the `elements`.
     * @private
     */_createClass(Matrix,[{key:'translate',value:function translate(offsetX,offsetY){this.metrixElements[4]=offsetX;this.metrixElements[5]=offsetY;}},{key:'transform',value:function transform(point){var x=point.x;var y=point.y;var x2=x*this.elements[0]+y*this.elements[2]+this.offsetX;var y2=x*this.elements[1]+y*this.elements[3]+this.offsetY;return new PointF(x2,y2);}},{key:'multiply',value:function multiply(matrix){var tempMatrix=[];tempMatrix.push(this.elements[0]*matrix.elements[0]+this.elements[1]*matrix.elements[2]);tempMatrix[1]=this.elements[0]*matrix.elements[1]+this.elements[1]*matrix.elements[3];tempMatrix[2]=this.elements[2]*matrix.elements[0]+this.elements[3]*matrix.elements[2];tempMatrix[3]=this.elements[2]*matrix.elements[1]+this.elements[3]*matrix.elements[3];tempMatrix[4]=this.offsetX*matrix.elements[0]+this.offsetY*matrix.elements[2]+matrix.offsetX;tempMatrix[5]=this.offsetX*matrix.elements[1]+this.offsetY*matrix.elements[3]+matrix.offsetY;for(var i=0;i<tempMatrix.length;i++){this.elements[i]=tempMatrix[i];}}},{key:'dispose',value:function dispose(){this.metrixElements=null;}},{key:'clone',value:function clone(){var m=new Matrix(this.metrixElements);return m;}},{key:'elements',get:function get(){return this.metrixElements;}},{key:'offsetX',get:function get(){return this.metrixElements[4];}},{key:'offsetY',get:function get(){return this.metrixElements[5];}}]);return Matrix;}());_export('ProcedureSets',ProcedureSets=function ProcedureSets(){_classCallCheck(this,ProcedureSets);/**
         * Specifies the `PDF` procedure set.
         * @private
         */this.pdf='PDF';/**
         * Specifies the `Text` procedure set.
         * @private
         */this.text='Text';/**
         * Specifies the `ImageB` procedure set.
         * @private
         */this.imageB='ImageB';/**
         * Specifies the `ImageC` procedure set.
         * @private
         */this.imageC='ImageC';/**
         * Specifies the `ImageI` procedure set.
         * @private
         */this.imageI='ImageI';});TemporaryDictionary=function(){function TemporaryDictionary(){_classCallCheck(this,TemporaryDictionary);/**
         * @hidden
         * @private
         */this.mKeys=[];/**
         * @hidden
         * @private
         */this.mValues=[];}/**
     * @hidden
     * @private
     */_createClass(TemporaryDictionary,[{key:'size',value:function size(){return this.mKeys.length;}},{key:'add',value:function add(key,value){if(key===undefined||key===null||value===undefined||value===null){throw new ReferenceError('Provided key or value is not valid.');}var index=this.mKeys.indexOf(key);if(index<0){this.mKeys.push(key);this.mValues.push(value);return 1;}else{throw new RangeError('An item with the same key has already been added.');}}},{key:'keys',value:function keys(){return this.mKeys;}},{key:'values',value:function values(){return this.mValues;}},{key:'getValue',value:function getValue(key){if(key===undefined||key===null){throw new ReferenceError('Provided key is not valid.');}var index=this.mKeys.indexOf(key);if(index<0){throw new RangeError('No item with the specified key has been added.');}else{return this.mValues[index];}}},{key:'setValue',value:function setValue(key,value){if(key===undefined||key===null){throw new ReferenceError('Provided key is not valid.');}var index=this.mKeys.indexOf(key);if(index<0){this.mKeys.push(key);this.mValues.push(value);}else{this.mValues[index]=value;}}},{key:'remove',value:function remove(key){if(key===undefined||key===null){throw new ReferenceError('Provided key is not valid.');}var index=this.mKeys.indexOf(key);if(index<0){throw new RangeError('No item with the specified key has been added.');}else{this.mKeys.splice(index,1);this.mValues.splice(index,1);return true;}}},{key:'containsKey',value:function containsKey(key){if(key===undefined||key===null){throw new ReferenceError('Provided key is not valid.');}var index=this.mKeys.indexOf(key);if(index<0){return false;}return true;}},{key:'clear',value:function clear(){this.mKeys=[];this.mValues=[];}}]);return TemporaryDictionary;}();_export('PdfTransparency',PdfTransparency=function(){// Properties
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
     */function PdfTransparency(stroke,fill,mode){_classCallCheck(this,PdfTransparency);// Fields
/**
         * Internal variable to store `dictionary`.
         * @default new PdfDictionary()
         * @private
         */this.dictionary=new PdfDictionary();/**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @default new DictionaryProperties()
         * @private
         */this.dictionaryProperties=new DictionaryProperties();this.dictionary.items.setValue(this.dictionaryProperties.CA,new PdfNumber(stroke));this.dictionary.items.setValue(this.dictionaryProperties.ca,new PdfNumber(fill));this.dictionary.items.setValue(this.dictionaryProperties.BM,new PdfName(mode.toString()));}// // Implementation
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
     */_createClass(PdfTransparency,[{key:'element',get:function get(){return this.dictionary;}}]);return PdfTransparency;}());PdfAutomaticFieldInfoCollection=function(){/**
     * Initializes a new instance of the 'PdfPageNumberFieldInfoCollection' class.
     * @private
     */function PdfAutomaticFieldInfoCollection(){_classCallCheck(this,PdfAutomaticFieldInfoCollection);/**
         * Internal variable to store instance of `pageNumberFields` class.
         * @private
         */this.automaticFieldsInformation=[];//
}/**
     * Gets the `page number fields collection`.
     * @private
     */_createClass(PdfAutomaticFieldInfoCollection,[{key:'add',value:function add(fieldInfo){return this.automaticFields.push(fieldInfo);}},{key:'automaticFields',get:function get(){return this.automaticFieldsInformation;}}]);return PdfAutomaticFieldInfoCollection;}();PdfGraphicsElement=function(){// Constructors
function PdfGraphicsElement(){_classCallCheck(this,PdfGraphicsElement);}//
/**
     * `Draws` the page number field.
     * @public
     */_createClass(PdfGraphicsElement,[{key:'drawHelper',value:function drawHelper(graphics,x,y){var bNeedSave=x!==0||y!==0;var gState=null;// Translate co-ordinates.
if(bNeedSave){// Save state.
gState=graphics.save();graphics.translateTransform(x,y);}this.drawInternal(graphics);if(bNeedSave){// Restore state.
graphics.restore(gState);}}}]);return PdfGraphicsElement;}();PdfAutomaticField=function(_PdfGraphicsElement){_inherits(PdfAutomaticField,_PdfGraphicsElement);// Constructors
function PdfAutomaticField(){_classCallCheck(this,PdfAutomaticField);var _this6=_possibleConstructorReturn(this,(PdfAutomaticField.__proto__||Object.getPrototypeOf(PdfAutomaticField)).call(this));// Fields
_this6.internalBounds=new RectangleF(0,0,0,0);_this6.internalTemplateSize=new SizeF(0,0);return _this6;}// Properties
_createClass(PdfAutomaticField,[{key:'performDrawHelper',value:function performDrawHelper(graphics,location,scalingX,scalingY){if(this.bounds.height===0||this.bounds.width===0){var text=this.getValue(graphics);this.internalTemplateSize=this.getFont().measureString(text,this.size,this.stringFormat);}}},{key:'draw',value:function draw(arg1,arg2,arg3){if(typeof arg2==='undefined'){var location=new PointF(0,0);this.draw(arg1,location);}else if(arg2 instanceof PointF){this.draw(arg1,arg2.x,arg2.y);}else{this.drawHelper(arg1,arg2,arg3);var info=new PdfAutomaticFieldInfo(this,new PointF(arg2,arg3));arg1.automaticFields.add(info);}}},{key:'getSize',value:function getSize(){if(this.bounds.height===0||this.bounds.width===0){return this.internalTemplateSize;}else{return this.size;}}},{key:'drawInternal',value:function drawInternal(graphics){}//
/* tslint:disable */},{key:'getBrush',value:function getBrush(){return typeof this.internalBrush==='undefined'||this.internalBrush==null?new PdfSolidBrush(new PdfColor(0,0,0)):this.internalBrush;}},{key:'getFont',value:function getFont(){return typeof this.internalFont==='undefined'||this.internalFont==null?PdfDocument.defaultFont:this.internalFont;}},{key:'getPageFromGraphics',value:function getPageFromGraphics(graphics){if(typeof graphics.page!=='undefined'&&graphics.page!==null){var page=graphics.page;return page;}else{var _page=graphics.currentPage;return _page;}}},{key:'bounds',get:function get(){return this.internalBounds;},set:function set(value){this.internalBounds=value;}},{key:'size',get:function get(){return new SizeF(this.bounds.width,this.bounds.height);},set:function set(value){this.bounds.width=value.width;this.bounds.height=value.height;}},{key:'location',get:function get(){return new PointF(this.bounds.x,this.bounds.y);},set:function set(value){this.bounds.x=value.x;this.bounds.y=value.y;}},{key:'font',get:function get(){return this.internalFont;},set:function set(value){this.internalFont=value;}},{key:'brush',get:function get(){return this.internalBrush;},set:function set(value){this.internalBrush=value;}},{key:'pen',get:function get(){return this.internalPen;},set:function set(value){this.internalPen=value;}},{key:'stringFormat',get:function get(){return this.internalStringFormat;},set:function set(value){this.internalStringFormat=value;}}]);return PdfAutomaticField;}(PdfGraphicsElement);PdfAutomaticFieldInfo=function(){function PdfAutomaticFieldInfo(field,location,scaleX,scaleY){_classCallCheck(this,PdfAutomaticFieldInfo);// Fields
/**
         * Internal variable to store location of the field.
         * @private
         */this.pageNumberFieldLocation=new PointF();/**
         * Internal variable to store field.
         * @private
         */this.pageNumberField=null;/**
         * Internal variable to store x scaling factor.
         * @private
         */this.scaleX=1;/**
         * Internal variable to store y scaling factor.
         * @private
         */this.scaleY=1;if(typeof location==='undefined'&&field instanceof PdfAutomaticFieldInfo){this.pageNumberField=field.field;this.pageNumberFieldLocation=field.location;this.scaleX=field.scalingX;this.scaleY=field.scalingY;}else if(typeof scaleX==='undefined'&&location instanceof PointF&&field instanceof PdfAutomaticField){this.pageNumberField=field;this.pageNumberFieldLocation=location;}else{this.pageNumberField=field;this.pageNumberFieldLocation=location;this.scaleX=scaleX;this.scaleY=scaleY;}}/* tslint:enable */// Properties
/**
     * Gets or sets the location.
     * @private
     */_createClass(PdfAutomaticFieldInfo,[{key:'location',get:function get(){return this.pageNumberFieldLocation;},set:function set(value){this.pageNumberFieldLocation=value;}},{key:'field',get:function get(){return this.pageNumberField;},set:function set(value){this.pageNumberField=value;}},{key:'scalingX',get:function get(){return this.scaleX;},set:function set(value){this.scaleX=value;}},{key:'scalingY',get:function get(){return this.scaleY;},set:function set(value){this.scaleY=value;}}]);return PdfAutomaticFieldInfo;}();_export('PdfGraphics',PdfGraphics=function(){function PdfGraphics(arg1,arg2,arg3){_classCallCheck(this,PdfGraphics);/**
         * Represents the `Current color space`.
         * @private
         */this.currentColorSpace=PdfColorSpace.Rgb;/**
         * Stores `previous rendering mode`.
         * @private
         */this.previousTextRenderingMode=TextRenderingMode.Fill;/**
         * Previous `character spacing` value or 0.
         * @private
         */this.previousCharacterSpacing=0.0;/**
         * Previous `word spacing` value or 0.
         * @private
         */this.previousWordSpacing=0.0;/**
         * The `previously used text scaling` value.
         * @private
         */this.previousTextScaling=100.0;/**
         * Instance of `ProcedureSets` class.
         * @private
         */this.procedureSets=new ProcedureSets();/**
         * To check wihether it is a `direct text rendering`.
         * @default true
         * @private
         */this.isNormalRender=true;/**
         * check whether to `use font size` to calculate the shift.
         * @default false
         * @private
         */this.isUseFontSize=false;/**
         * check whether the font is in `italic type`.
         * @default false
         * @private
         */this.isItalic=false;/**
         * Check whether it is an `emf Text Matrix`.
         * @default false
         * @private
         */this.isEmfTextScaled=false;/**
         * Check whether it is an `emf` call.
         * @default false
         * @private
         */this.isEmf=false;/**
         * Check whether it is an `emf plus` call.
         * @default false
         * @private
         */this.isEmfPlus=false;/**
         * Check whether it is in `base line format`.
         * @default true
         * @private
         */this.isBaselineFormat=true;/**
         * Emf Text `Scaling Factor`.
         * @private
         */this.emfScalingFactor=new SizeF(0,0);/**
         * To check whether the `last color space` of document and garphics is saved.
         * @private
         */this.colorSpaceChanged=false;/**
         * Stores an instance of `DictionaryProperties`.
         * @private
         */this.dictionaryProperties=new DictionaryProperties();/**
         * Checks whether the x co-ordinate is need to set as client size or not.
         * @hidden
         * @private
         */this.isOverloadWithPosition=false;/**
         * Checks whether the x co-ordinate is need to set as client size or not.
         * @hidden
         * @private
         */this.isPointOverload=false;/**
         * Current colorspaces.
         * @hidden
         * @private
         */this.currentColorSpaces=['RGB','CMYK','GrayScale','Indexed'];/**
         * Checks the current image `is optimized` or not.
         * @default false.
         * @private
         */this.isImageOptimized=false;/**
         * Stores the `graphics states`.
         * @private
         */this.graphicsState=[];/**
         * Indicates whether the object `had trasparency`.
         * @default false
         * @private
         */this.istransparencySet=false;/**
         * Stores the instance of `PdfAutomaticFieldInfoCollection` class .
         * @default null
         * @private
         */this.internalAutomaticFields=null;/**
         * Stores the index of the start line that should draw with in the next page.
         * @private
         */this.startCutIndex=-1;if(arg3 instanceof PdfStreamWriter){this.pdfStreamWriter=arg3;this.getResources=arg2;this.canvasSize=arg1;this.initialize();}else{this.constructor(arg1,arg2,new PdfStreamWriter(arg3));}}//  Properties
/**
     * Returns the `result` after drawing string.
     * @private
     */_createClass(PdfGraphics,[{key:'initialize',value:function initialize(){this.bStateSaved=false;this.currentPen=null;this.currentBrush=null;this.currentFont=null;this.currentColorSpace=PdfColorSpace.Rgb;this.bCSInitialized=false;this.transformationMatrix=null;this.previousTextRenderingMode=-1;//.Fill;
this.previousCharacterSpacing=-1.0;this.previousWordSpacing=-1.0;this.previousTextScaling=-100.0;// this.m_trasparencies = null;
this.currentStringFormat=null;this.clipBounds=new RectangleF(new PointF(0,0),this.size);this.getResources.getResources().requireProcedureSet(this.procedureSets.pdf);}},{key:'drawPdfTemplate',value:function drawPdfTemplate(template,location,size){if(typeof size==='undefined'){if(template==null){throw Error('ArgumentNullException-template');}this.drawPdfTemplate(template,location,template.size);}else{// let crossTable : PdfCrossTable = null;
// if (this.pageLayer != null) {
//     crossTable = (this.page as PdfPage).section.parentDocument.crossTable;
// }
if(template==null){throw Error('ArgumentNullException-template');}var scaleX=template.width>0?size.width/template.width:1;var scaleY=template.height>0?size.height/template.height:1;var bNeedScale=!(scaleX===1&&scaleY===1);// Save state.
var state=this.save();// Take into consideration that rect location is bottom/left.
var matrix=new PdfTransformationMatrix();if(this.pageLayer!=null){this.getTranslateTransform(location.x,location.y+size.height,matrix);}if(bNeedScale){this.getScaleTransform(scaleX,scaleY,matrix);}this.pdfStreamWriter.modifyCtm(matrix);// Output template.
var resources=this.getResources.getResources();var name=resources.getName(template);this.pdfStreamWriter.executeObject(name);// Restore state.
this.restore(state);//Transfer automatic fields from template.
var g=template.graphics;if(g!=null){for(var index=0;index<g.automaticFields.automaticFields.length;index++){var fieldInfo=g.automaticFields.automaticFields[index];var newLocation=new PointF(fieldInfo.location.x+location.x,fieldInfo.location.y+location.y);var scalingX=template.size.width==0?0:size.width/template.size.width;var scalingY=template.size.height==0?0:size.height/template.size.height;this.automaticFields.add(new PdfAutomaticFieldInfo(fieldInfo.field,newLocation,scalingX,scalingY));this.page.dictionary.modify();}}this.getResources.getResources().requireProcedureSet(this.procedureSets.imageB);this.getResources.getResources().requireProcedureSet(this.procedureSets.imageC);this.getResources.getResources().requireProcedureSet(this.procedureSets.imageI);this.getResources.getResources().requireProcedureSet(this.procedureSets.text);}}},{key:'drawString',value:function drawString(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){if(typeof arg1==='string'&&arg2 instanceof PdfFont&&(arg3 instanceof PdfPen||arg3===null)&&(arg4 instanceof PdfBrush||arg4===null)&&typeof arg5==='number'&&typeof arg6==='number'&&(arg7 instanceof PdfStringFormat||arg7===null)&&typeof arg8==='undefined'){this.isOverloadWithPosition=true;this.drawString(arg1,arg2,arg3,arg4,arg5,arg6,this.clientSize.width-arg5,0,arg7);}else{var temparg3=arg3;var temparg4=arg4;var temparg5=arg5;var temparg6=arg6;var temparg7=arg7;var temparg8=arg8;var temparg9=arg9;var layouter=new PdfStringLayouter();var result=layouter.layout(arg1,arg2,temparg9,new SizeF(temparg7,0),this.isOverloadWithPosition,this.clientSize);if(!result.empty){var rect=this.checkCorrectLayoutRectangle(result.actualSize,temparg5,temparg6,temparg9);if(temparg7<=0){temparg5=rect.x;temparg7=rect.width;}if(temparg8<=0){temparg6=rect.y;temparg8=rect.height;}this.drawStringLayoutResult(result,arg2,temparg3,temparg4,new RectangleF(temparg5,temparg6,temparg7,temparg8),temparg9);this.isEmfTextScaled=false;this.emfScalingFactor=new SizeF(0,0);}this.getResources.getResources().requireProcedureSet(this.procedureSets.text);this.isNormalRender=true;this.pdfStringLayoutResult=result;this.isUseFontSize=false;}}},{key:'drawLine',value:function drawLine(arg1,arg2,arg3,arg4,arg5){if(arg2 instanceof PointF){var temparg2=arg2;var temparg3=arg3;this.drawLine(arg1,temparg2.x,temparg2.y,temparg3.x,temparg3.y);}else{var _temparg6=arg2;var _temparg7=arg3;var temparg4=arg4;var temparg5=arg5;this.stateControl(arg1,null,null);var sw=this.streamWriter;sw.beginPath(_temparg6,_temparg7);sw.appendLineSegment(temparg4,temparg5);sw.strokePath();this.getResources.getResources().requireProcedureSet(this.procedureSets.pdf);}}},{key:'drawRectangle',value:function drawRectangle(arg1,arg2,arg3,arg4,arg5,arg6){if(arg1 instanceof PdfPen&&typeof arg2==='number'){var temparg3=arg3;this.drawRectangle(arg1,null,arg2,temparg3,arg4,arg5);}else if(arg1 instanceof PdfBrush&&typeof arg2==='number'){var _temparg8=arg3;this.drawRectangle(null,arg1,arg2,_temparg8,arg4,arg5);}else{var _temparg9=arg3;var temparg4=arg4;var temparg5=arg5;var temparg6=arg6;if(arg2 instanceof PdfSolidBrush&&arg2.color.isEmpty){arg2=null;}var temparg1=arg1;var temparg2=arg2;this.stateControl(temparg1,temparg2,null);this.streamWriter.appendRectangle(_temparg9,temparg4,temparg5,temparg6);this.drawPath(temparg1,temparg2,false);}}},{key:'drawPath',value:function drawPath(arg1,arg2,arg3,arg4){if(typeof arg3==='boolean'){var temparg3=arg3;this.drawPath(arg1,arg2,PdfFillMode.Winding,temparg3);}else{var _temparg10=arg3;var isPen=arg1!=null;var isBrush=arg2!=null;var isEvenOdd=_temparg10===PdfFillMode.Alternate;if(isPen&&isBrush){this.streamWriter.fillStrokePath(isEvenOdd);}else if(!isPen&&!isBrush){this.streamWriter.endPath();}else if(isPen){this.streamWriter.strokePath();}else{this.streamWriter.fillPath(isEvenOdd);}}}},{key:'drawImage',value:function drawImage(arg1,arg2,arg3,arg4,arg5){if(typeof arg2==='number'&&typeof arg3==='number'&&typeof arg4==='undefined'){var size=arg1.physicalDimension;this.drawImage(arg1,arg2,arg3,size.width,size.height);}else{var temparg2=arg2;var temparg3=arg3;var temparg5=arg5;arg1.save();var matrix=new PdfTransformationMatrix();this.getTranslateTransform(temparg2,temparg3+temparg5,matrix);this.getScaleTransform(arg4,arg5,matrix);this.pdfStreamWriter.write('q');this.pdfStreamWriter.modifyCtm(matrix);// Output template.
var resources=this.getResources.getResources();if(typeof this.pageLayer!=='undefined'&&this.page!=null){resources.document=this.page.document;}var name=resources.getName(arg1);if(typeof this.pageLayer!=='undefined'){this.page.setResources(resources);}this.pdfStreamWriter.executeObject(name);this.pdfStreamWriter.write(Operators.restoreState);this.pdfStreamWriter.write(Operators.newLine);var resource=this.getResources.getResources();resource.requireProcedureSet(this.procedureSets.imageB);resource.requireProcedureSet(this.procedureSets.imageC);resource.requireProcedureSet(this.procedureSets.imageI);resource.requireProcedureSet(this.procedureSets.text);}}},{key:'getLineBounds',value:function getLineBounds(lineIndex,result,font,layoutRectangle,format){var bounds=void 0;if(!result.empty&&lineIndex<result.lineCount&&lineIndex>=0){var line=result.lines[lineIndex];var vShift=this.getTextVerticalAlignShift(result.actualSize.height,layoutRectangle.height,format);var y=vShift+layoutRectangle.y+result.lineHeight*lineIndex;var lineWidth=line.width;var hShift=this.getHorizontalAlignShift(lineWidth,layoutRectangle.width,format);var lineIndent=this.getLineIndent(line,format,layoutRectangle,lineIndex===0);hShift+=!this.rightToLeft(format)?lineIndent:0;var x=layoutRectangle.x+hShift;/* tslint:disable */var width=!this.shouldJustify(line,layoutRectangle.width,format)?lineWidth-lineIndent:layoutRectangle.width-lineIndent;/* tslint:enable */var height=result.lineHeight;bounds=new RectangleF(x,y,width,height);}else{bounds=new RectangleF(0,0,0,0);}return bounds;}},{key:'checkCorrectLayoutRectangle',value:function checkCorrectLayoutRectangle(textSize,x,y,format){var layoutedRectangle=new RectangleF(x,y,textSize.width,textSize.width);if(format!=null){switch(format.alignment){case PdfTextAlignment.Center:layoutedRectangle.x-=layoutedRectangle.width/2;break;case PdfTextAlignment.Right:layoutedRectangle.x-=layoutedRectangle.width;break;}switch(format.lineAlignment){case PdfVerticalAlignment.Middle:layoutedRectangle.y-=layoutedRectangle.height/2;break;case PdfVerticalAlignment.Bottom:layoutedRectangle.y-=layoutedRectangle.height;break;}}return layoutedRectangle;}},{key:'setLayer',value:function setLayer(layer){this.pageLayer=layer;var page=layer.page;if(page!=null&&typeof page!=='undefined'){page.beginSave=this.pageSave;}}},{key:'pageSave',value:function pageSave(page){if(page.graphics.automaticFields!=null){for(var i=0;i<page.graphics.automaticFields.automaticFields.length;i++){var fieldInfo=page.graphics.automaticFields.automaticFields[i];fieldInfo.field.performDraw(page.graphics,fieldInfo.location,fieldInfo.scalingX,fieldInfo.scalingY);}}}},{key:'drawStringLayoutResult',value:function drawStringLayoutResult(result,font,pen,brush,layoutRectangle,format){if(!result.empty){this.applyStringSettings(font,pen,brush,format,layoutRectangle);// Set text scaling
var textScaling=format!=null?format.horizontalScalingFactor:100.0;if(textScaling!==this.previousTextScaling&&!this.isEmfTextScaled){this.pdfStreamWriter.setTextScaling(textScaling);this.previousTextScaling=textScaling;}var height=format==null||format.lineSpacing===0?font.height:format.lineSpacing+font.height;var subScript=format!=null&&format.subSuperScript===PdfSubSuperScript.SubScript;var shift=0;shift=subScript?height-(font.height+font.metrics.getDescent(format)):height-font.metrics.getAscent(format);this.shift=shift;this.pdfStreamWriter.startNextLine(layoutRectangle.x,layoutRectangle.y-shift);this.pdfStreamWriter.setLeading(+height);var resultHeight=0;var remainingString='';for(var i=0;i<result.lines.length;i++){resultHeight+=result.lineHeight;if(layoutRectangle.y+resultHeight>this.clientSize.height){this.startCutIndex=i;break;}}for(var j=this.startCutIndex;j<result.lines.length&&j>=0;j++){remainingString+=result.lines[j].text;}var bounds=new RectangleF(layoutRectangle.x,layoutRectangle.y,layoutRectangle.width,layoutRectangle.height);this.drawLayoutResult(result,font,format,layoutRectangle);this.underlineStrikeoutText(pen,brush,result,font,bounds,format);this.isEmfPlus=false;this.isUseFontSize=false;if(this.startCutIndex!==-1){var page=this.getNextPage();page.graphics.drawString(remainingString,font,pen,brush,layoutRectangle.x,0,layoutRectangle.width,0,format);}}else{throw new Error('ArgumentNullException:result');}}},{key:'getNextPage',value:function getNextPage(){var section=this.currentPage.section;var nextPage=null;var index=section.indexOf(this.currentPage);if(index===section.count-1){nextPage=section.add();}else{nextPage=section.getPages()[index+1];}return nextPage;}},{key:'setClip',value:function setClip(rectangle,mode){if(typeof mode==='undefined'){this.setClip(rectangle,PdfFillMode.Winding);}else{this.pdfStreamWriter.appendRectangle(rectangle);this.pdfStreamWriter.clipPath(mode===PdfFillMode.Alternate);}}},{key:'applyStringSettings',value:function applyStringSettings(font,pen,brush,format,bounds){var tm=this.getTextRenderingMode(pen,brush,format);this.stateControl(pen,brush,font,format);this.pdfStreamWriter.beginText();if(tm!==this.previousTextRenderingMode){this.pdfStreamWriter.setTextRenderingMode(tm);this.previousTextRenderingMode=tm;}// Set character spacing.
var cs=format!=null?format.characterSpacing:0;if(cs!==this.previousCharacterSpacing&&!this.isEmfTextScaled){this.pdfStreamWriter.setCharacterSpacing(cs);this.previousCharacterSpacing=cs;}// Set word spacing.
// NOTE: it works only if the space code is equal to 32 (0x20).
var ws=format!=null?format.wordSpacing:0;if(ws!==this.previousWordSpacing){this.pdfStreamWriter.setWordSpacing(ws);this.previousWordSpacing=ws;}}},{key:'getTextVerticalAlignShift',value:function getTextVerticalAlignShift(textHeight,boundsHeight,format){var shift=0;if(boundsHeight>=0&&format!=null&&format.lineAlignment!==PdfVerticalAlignment.Top){switch(format.lineAlignment){case PdfVerticalAlignment.Middle:shift=(boundsHeight-textHeight)/2;break;case PdfVerticalAlignment.Bottom:shift=boundsHeight-textHeight;break;}}return shift;}},{key:'drawLayoutResult',value:function drawLayoutResult(result,font,format,layoutRectangle){var vAlignShift=this.getTextVerticalAlignShift(result.actualSize.height,layoutRectangle.height,format);if(vAlignShift!==0){this.pdfStreamWriter.startNextLine(0,vAlignShift);}var lines=result.lines;for(var i=0,len=lines.length;i<len&&i!==this.startCutIndex;i++){var lineInfo=lines[i];var line=lineInfo.text;var lineWidth=lineInfo.width;var hAlignShift=this.getHorizontalAlignShift(lineWidth,layoutRectangle.width,format);var lineIndent=this.getLineIndent(lineInfo,format,layoutRectangle,i===0);hAlignShift+=!this.rightToLeft(format)?lineIndent:0;if(hAlignShift!==0&&!this.isEmfTextScaled){this.pdfStreamWriter.startNextLine(hAlignShift,0);}this.drawAsciiLine(lineInfo,layoutRectangle,font,format);if(hAlignShift!==0&&!this.isEmfTextScaled){this.pdfStreamWriter.startNextLine(-hAlignShift,0);}if(this.isOverloadWithPosition&&lines.length>1){this.pdfStreamWriter.startNextLine(-layoutRectangle.x,0);layoutRectangle.x=0;layoutRectangle.width=this.clientSize.width;this.isOverloadWithPosition=false;this.isPointOverload=true;}}this.getResources.getResources().requireProcedureSet(this.procedureSets.text);if(vAlignShift!==0){this.pdfStreamWriter.startNextLine(0,-(vAlignShift-result.lineHeight));}this.pdfStreamWriter.endText();}},{key:'drawAsciiLine',value:function drawAsciiLine(lineInfo,layoutRectangle,font,format){this.justifyLine(lineInfo,layoutRectangle.width,format);var value='';if(lineInfo.text.indexOf('(')!==-1||lineInfo.text.indexOf(')')!==-1){for(var i=0;i<lineInfo.text.length;i++){if(lineInfo.text[i]==='('){value+='\\\(';}else if(lineInfo.text[i]===')'){value+='\\\)';}else{value+=lineInfo.text[i];}}}if(value===''){value=lineInfo.text;}var line='('+value+')';this.pdfStreamWriter.showNextLineText(new PdfString(line));}},{key:'justifyLine',value:function justifyLine(lineInfo,boundsWidth,format){var line=lineInfo.text;var lineWidth=lineInfo.width;var shouldJustify=this.shouldJustify(lineInfo,boundsWidth,format);var hasWordSpacing=format!=null&&format.wordSpacing!==0;var symbols=StringTokenizer.spaces;var whitespacesCount=StringTokenizer.getCharsCount(line,symbols);var wordSpace=0;if(shouldJustify){// Correct line width.
if(hasWordSpacing){lineWidth-=whitespacesCount*format.wordSpacing;}var difference=boundsWidth-lineWidth;wordSpace=difference/whitespacesCount;this.pdfStreamWriter.setWordSpacing(wordSpace);}else{// If there is justifying, but the line shouldn't be justified, restore default word spacing.
if(hasWordSpacing){this.pdfStreamWriter.setWordSpacing(format.wordSpacing);}else{this.pdfStreamWriter.setWordSpacing(0);}}return wordSpace;}},{key:'reset',value:function reset(size){this.canvasSize=size;this.streamWriter.clear();this.initialize();this.initializeCoordinates();}},{key:'shouldJustify',value:function shouldJustify(lineInfo,boundsWidth,format){var line=lineInfo.text;var lineWidth=lineInfo.width;var justifyStyle=format!=null&&format.alignment===PdfTextAlignment.Justify;var goodWidth=boundsWidth>=0&&lineWidth<boundsWidth;var symbols=StringTokenizer.spaces;var whitespacesCount=StringTokenizer.getCharsCount(line,symbols);var hasSpaces=whitespacesCount>0&&line[0]!==StringTokenizer.whiteSpace;var goodLineBreakStyle=(lineInfo.lineType&LineType.LayoutBreak)>0;/* tslint:disable */var shouldJustify=justifyStyle&&goodWidth&&hasSpaces&&(goodLineBreakStyle||format.alignment===PdfTextAlignment.Justify);/* tslint:enable */return shouldJustify;}},{key:'underlineStrikeoutText',value:function underlineStrikeoutText(pen,brush,result,font,layoutRectangle,format){if(font.underline||font.strikeout){// Calculate line width.
var linePen=this.createUnderlineStikeoutPen(pen,brush,font,format);if(linePen!=null){// Approximate line positions.
var vShift=this.getTextVerticalAlignShift(result.actualSize.height,layoutRectangle.height,format);var underlineYOffset=0;underlineYOffset=layoutRectangle.y+vShift+font.metrics.getAscent(format)+1.5*linePen.width;var strikeoutYOffset=layoutRectangle.y+vShift+font.metrics.getHeight(format)/2+1.5*linePen.width;var lines=result.lines;// Run through the text and draw lines.
for(var i=0,len=result.lineCount;i<len;i++){var lineInfo=lines[i];var line=lineInfo.text;var lineWidth=lineInfo.width;var hShift=this.getHorizontalAlignShift(lineWidth,layoutRectangle.width,format);var lineIndent=this.getLineIndent(lineInfo,format,layoutRectangle,i===0);hShift+=!this.rightToLeft(format)?lineIndent:0;var x1=layoutRectangle.x+hShift;/* tslint:disable */var x2=!this.shouldJustify(lineInfo,layoutRectangle.width,format)?x1+lineWidth-lineIndent:x1+layoutRectangle.width-lineIndent;/* tslint:enable */if(font.underline){var y=underlineYOffset;this.drawLine(linePen,x1,y,x2,y);underlineYOffset+=result.lineHeight;}if(font.strikeout){var _y=strikeoutYOffset;this.drawLine(linePen,x1,_y,x2,_y);strikeoutYOffset+=result.lineHeight;}if(this.isPointOverload&&lines.length>1){layoutRectangle.x=0;layoutRectangle.width=this.clientSize.width;}}this.isPointOverload=false;}}}},{key:'createUnderlineStikeoutPen',value:function createUnderlineStikeoutPen(pen,brush,font,format){// Calculate line width.
var lineWidth=font.metrics.getSize(format)/20;var linePen=null;// Create a pen fo the lines.
if(pen!=null){linePen=new PdfPen(pen.color,lineWidth);}else if(brush!=null){linePen=new PdfPen(brush,lineWidth);}return linePen;}},{key:'getTextRenderingMode',value:function getTextRenderingMode(pen,brush,format){var tm=TextRenderingMode.None;if(pen!=null&&brush!=null){tm=TextRenderingMode.FillStroke;}else if(pen!=null){tm=TextRenderingMode.Stroke;}else{tm=TextRenderingMode.Fill;}if(format!=null&&format.clipPath){tm|=TextRenderingMode.ClipFlag;}return tm;}},{key:'getLineIndent',value:function getLineIndent(lineInfo,format,layoutBounds,firstLine){var lineIndent=0;var firstParagraphLine=(lineInfo.lineType&LineType.FirstParagraphLine)>0;if(format!=null&&firstParagraphLine){lineIndent=firstLine?format.firstLineIndent:format.paragraphIndent;lineIndent=layoutBounds.width>0?Math.min(layoutBounds.width,lineIndent):lineIndent;}return lineIndent;}},{key:'getHorizontalAlignShift',value:function getHorizontalAlignShift(lineWidth,boundsWidth,format){var shift=0;if(boundsWidth>=0&&format!=null&&format.alignment!==PdfTextAlignment.Left){switch(format.alignment){case PdfTextAlignment.Center:shift=(boundsWidth-lineWidth)/2;break;case PdfTextAlignment.Right:shift=boundsWidth-lineWidth;break;}}return shift;}},{key:'rightToLeft',value:function rightToLeft(format){var rtl=format!=null&&format.rightToLeft;return rtl;}},{key:'stateControl',value:function stateControl(pen,brush,font,format){if(typeof format==='undefined'){this.stateControl(pen,brush,font,null);}else{var saveState=false;if(brush!==null){if(typeof this.pageLayer!=='undefined'&&this.pageLayer!=null){if(this.colorSpaceChanged===false){this.lastDocumentCS=this.pageLayer.page.document.colorSpace;this.lastGraphicsCS=this.pageLayer.page.graphics.colorSpace;this.colorSpace=this.pageLayer.page.document.colorSpace;this.currentColorSpace=this.pageLayer.page.document.colorSpace;this.colorSpaceChanged=true;}}this.initCurrentColorSpace(this.currentColorSpace);}else if(pen!=null){if(typeof this.pageLayer!=='undefined'&&this.pageLayer!=null){/* tslint:disable */this.colorSpace=this.pageLayer.page.document.colorSpace;this.currentColorSpace=this.pageLayer.page.document.colorSpace;}this.initCurrentColorSpace(this.currentColorSpace);}this.penControl(pen,saveState);this.brushControl(brush,saveState);this.fontControl(font,format,saveState);}}},{key:'initCurrentColorSpace',value:function initCurrentColorSpace(colorspace){var re=this.getResources.getResources();if(!this.bCSInitialized){this.pdfStreamWriter.setColorSpace('Device'+this.currentColorSpaces[this.currentColorSpace],true);this.pdfStreamWriter.setColorSpace('Device'+this.currentColorSpaces[this.currentColorSpace],false);this.bCSInitialized=true;}}},{key:'penControl',value:function penControl(pen,saveState){if(pen!=null){this.currentPen=pen;this.colorSpace=PdfColorSpace.Rgb;/* tslint:disable */pen.monitorChanges(this.currentPen,this.pdfStreamWriter,this.getResources,saveState,this.colorSpace,this.matrix.clone());/* tslint:enable */this.currentPen=pen.clone();}}},{key:'brushControl',value:function brushControl(brush,saveState){if(brush!=null){this.currentBrush=brush;/* tslint:disable */brush.monitorChanges(this.currentBrush,this.pdfStreamWriter,this.getResources,saveState,this.colorSpace);/* tslint:enable */this.currentBrush=brush;brush=null;}}},{key:'fontControl',value:function fontControl(font,format,saveState){if(font!=null){var curSubSuper=format!=null?format.subSuperScript:PdfSubSuperScript.None;/* tslint:disable */var prevSubSuper=this.currentStringFormat!=null?this.currentStringFormat.subSuperScript:PdfSubSuperScript.None;/* tslint:enable */if(saveState||font!==this.currentFont||curSubSuper!==prevSubSuper){var resources=this.getResources.getResources();this.currentFont=font;this.currentStringFormat=format;var size=font.metrics.getSize(format);/* tslint:disable */this.isEmfTextScaled=false;var fontName=resources.getName(font);this.pdfStreamWriter.setFont(font,fontName,size);}}}},{key:'setTransparency',value:function setTransparency(arg1,arg2,arg3){if(typeof arg2==='undefined'){this.istransparencySet=true;this.setTransparency(arg1,arg1,PdfBlendMode.Normal);}else if(typeof arg2==='number'&&typeof arg3==='undefined'){this.setTransparency(arg1,arg2,PdfBlendMode.Normal);}else{if(this.trasparencies==null){this.trasparencies=new TemporaryDictionary();}var transp=null;var td=new TransparencyData(arg1,arg2,arg3);if(this.trasparencies.containsKey(td)){transp=this.trasparencies.getValue(td);}if(transp==null){transp=new PdfTransparency(arg1,arg2,arg3);this.trasparencies.setValue(td,transp);}var resources=this.getResources.getResources();var name=resources.getName(transp);var sw=this.streamWriter;sw.setGraphicsState(name);}}},{key:'clipTranslateMargins',value:function clipTranslateMargins(x,y,left,top,right,bottom){if(x instanceof RectangleF&&typeof y==='undefined'){this.clipBounds=x;this.pdfStreamWriter.writeComment('Clip margins.');this.pdfStreamWriter.appendRectangle(x);this.pdfStreamWriter.closePath();this.pdfStreamWriter.clipPath(false);this.pdfStreamWriter.writeComment('Translate co-ordinate system.');this.translateTransform(x.x,x.y);}else if(typeof x==='number'){var clipArea=new RectangleF(left,top,this.size.width-left-right,this.size.height-top-bottom);this.clipBounds=clipArea;this.pdfStreamWriter.writeComment("Clip margins.");this.pdfStreamWriter.appendRectangle(clipArea);this.pdfStreamWriter.closePath();this.pdfStreamWriter.clipPath(false);this.pdfStreamWriter.writeComment("Translate co-ordinate system.");this.translateTransform(x,y);}}},{key:'updateY',value:function updateY(y){return-y;}},{key:'translateTransform',value:function translateTransform(offsetX,offsetY){var matrix=new PdfTransformationMatrix();this.getTranslateTransform(offsetX,offsetY,matrix);this.pdfStreamWriter.modifyCtm(matrix);this.matrix.multiply(matrix);}},{key:'getTranslateTransform',value:function getTranslateTransform(x,y,input){input.translate(x,this.updateY(y));return input;}},{key:'scaleTransform',value:function scaleTransform(scaleX,scaleY){var matrix=new PdfTransformationMatrix();this.getScaleTransform(scaleX,scaleY,matrix);this.pdfStreamWriter.modifyCtm(matrix);this.matrix.multiply(matrix);}},{key:'getScaleTransform',value:function getScaleTransform(x,y,input){if(input==null){input=new PdfTransformationMatrix();}input.scale(x,y);return input;}},{key:'rotateTransform',value:function rotateTransform(angle){var matrix=new PdfTransformationMatrix();this.getRotateTransform(angle,matrix);this.pdfStreamWriter.modifyCtm(matrix);this.matrix.multiply(matrix);}},{key:'initializeCoordinates',value:function initializeCoordinates(){// Matrix equation: TM(T-1)=M', where T=[1 0 0 -1 0 h]
this.pdfStreamWriter.writeComment('Change co-ordinate system to left/top.');// Translate co-ordinates only, don't flip.
if(this.mediaBoxUpperRightBound!==-this.size.height){if(this.cropBox==null){if(this.mediaBoxUpperRightBound===this.size.height||this.mediaBoxUpperRightBound===0){this.translateTransform(0,this.updateY(this.size.height));}else{this.translateTransform(0,this.updateY(this.mediaBoxUpperRightBound));}}}}},{key:'getRotateTransform',value:function getRotateTransform(angle,input){if(input==null||typeof input==='undefined'){input=new PdfTransformationMatrix();}input.rotate(this.updateY(angle));return input;}},{key:'save',value:function save(){var state=new PdfGraphicsState(this,this.matrix.clone());state.brush=this.currentBrush;state.pen=this.currentPen;state.font=this.currentFont;state.colorSpace=this.currentColorSpace;state.characterSpacing=this.previousCharacterSpacing;state.wordSpacing=this.previousWordSpacing;state.textScaling=this.previousTextScaling;state.textRenderingMode=this.previousTextRenderingMode;this.graphicsState.push(state);this.pdfStreamWriter.saveGraphicsState();return state;}},{key:'restore',value:function restore(state){if(typeof state==='undefined'){if(this.graphicsState.length>0){this.doRestoreState();}}else{if(this.graphicsState.indexOf(state)!==-1){for(;;){if(this.graphicsState.length===0){break;}var popState=this.doRestoreState();if(popState===state){break;}}}}}},{key:'doRestoreState',value:function doRestoreState(){var state=this.graphicsState.pop();this.transformationMatrix=state.matrix;this.currentBrush=state.brush;this.currentPen=state.pen;this.currentFont=state.font;this.currentColorSpace=state.colorSpace;this.previousCharacterSpacing=state.characterSpacing;this.previousWordSpacing=state.wordSpacing;this.previousTextScaling=state.textScaling;this.previousTextRenderingMode=state.textRenderingMode;this.pdfStreamWriter.restoreGraphicsState();return state;}},{key:'stringLayoutResult',get:function get(){return this.pdfStringLayoutResult;}},{key:'size',get:function get(){return this.canvasSize;}},{key:'mediaBoxUpperRightBound',get:function get(){if(typeof this.internalMediaBoxUpperRightBound==='undefined'){this.internalMediaBoxUpperRightBound=0;}return this.internalMediaBoxUpperRightBound;},set:function set(value){this.internalMediaBoxUpperRightBound=value;}},{key:'clientSize',get:function get(){return new SizeF(this.clipBounds.width,this.clipBounds.height);}},{key:'colorSpace',get:function get(){return this.currentColorSpace;},set:function set(value){this.currentColorSpace=value;}},{key:'streamWriter',get:function get(){return this.pdfStreamWriter;}},{key:'matrix',get:function get(){if(this.transformationMatrix==null){this.transformationMatrix=new PdfTransformationMatrix();}return this.transformationMatrix;}},{key:'layer',get:function get(){return this.pageLayer;}},{key:'page',get:function get(){return this.pageLayer.page;}},{key:'automaticFields',get:function get(){if(this.internalAutomaticFields==null||typeof this.internalAutomaticFields==='undefined'){this.internalAutomaticFields=new PdfAutomaticFieldInfoCollection();}return this.internalAutomaticFields;}}]);return PdfGraphics;}());// Constants
/**
 * Specifies the mask of `path type values`.
 * @private
 */PdfGraphics.pathTypesValuesMask=0xf;/**
 * Checks whether the object is `transparencyObject`.
 * @hidden
 * @private
 */PdfGraphics.transparencyObject=false;/**
 * `GetResourceEventHandler` class is alternate for event handlers and delegates.
 * @private
 * @hidden
 */_export('GetResourceEventHandler',GetResourceEventHandler=function(){_createClass(GetResourceEventHandler,[{key:'getResources',value:function getResources(){return this.sender.getResources();}}]);/**
     * Initialize instance of `GetResourceEventHandler` class.
     * Alternate for event handlers and delegates.
     * @private
     */function GetResourceEventHandler(sender){_classCallCheck(this,GetResourceEventHandler);this.sender=sender;}return GetResourceEventHandler;}());_export('PdfGraphicsState',PdfGraphicsState=function(){function PdfGraphicsState(graphics,matrix){_classCallCheck(this,PdfGraphicsState);/**
         * Stores `previous rendering mode`.
         * @default TextRenderingMode.Fill
         * @private
         */this.internalTextRenderingMode=TextRenderingMode.Fill;/**
         * `Previous character spacing` value or 0.
         * @default 0.0
         * @private
         */this.internalCharacterSpacing=0.0;/**
         * `Previous word spacing` value or 0.
         * @default 0.0
         * @private
         */this.internalWordSpacing=0.0;/**
         * The previously used `text scaling value`.
         * @default 100.0
         * @private
         */this.internalTextScaling=100.0;/**
         * `Current color space`.
         * @default PdfColorSpace.Rgb
         * @private
         */this.pdfColorSpace=PdfColorSpace.Rgb;if(typeof graphics!=='undefined'){this.pdfGraphics=graphics;this.transformationMatrix=matrix;}}// Properties
/**
     * Gets the parent `graphics object`.
     * @private
     */_createClass(PdfGraphicsState,[{key:'graphics',get:function get(){return this.pdfGraphics;}},{key:'matrix',get:function get(){return this.transformationMatrix;}},{key:'characterSpacing',get:function get(){return this.internalCharacterSpacing;},set:function set(value){this.internalCharacterSpacing=value;}},{key:'wordSpacing',get:function get(){return this.internalWordSpacing;},set:function set(value){this.internalWordSpacing=value;}},{key:'textScaling',get:function get(){return this.internalTextScaling;},set:function set(value){this.internalTextScaling=value;}},{key:'pen',get:function get(){return this.pdfPen;},set:function set(value){this.pdfPen=value;}},{key:'brush',get:function get(){return this.pdfBrush;},set:function set(value){this.pdfBrush=value;}},{key:'font',get:function get(){return this.pdfFont;},set:function set(value){this.pdfFont=value;}},{key:'colorSpace',get:function get(){return this.pdfColorSpace;},set:function set(value){this.pdfColorSpace=value;}},{key:'textRenderingMode',get:function get(){return this.internalTextRenderingMode;},set:function set(value){this.internalTextRenderingMode=value;}}]);return PdfGraphicsState;}());TransparencyData=// Constructors
/**
     * Initializes a new instance of the `TransparencyData` class.
     * @private
     */function TransparencyData(alphaPen,alphaBrush,blendMode){_classCallCheck(this,TransparencyData);this.alphaPen=alphaPen;this.alphaBrush=alphaBrush;this.blendMode=blendMode;};_export('PdfPageLayer',PdfPageLayer=function(){function PdfPageLayer(page,streamClipPageTemplates){_classCallCheck(this,PdfPageLayer);// private bSaved : boolean;
/**
         * Local Variable to store the `color space` of the document.
         * @private
         */this.pdfColorSpace=PdfColorSpace.Rgb;/**
         * Local Variable to set `visibility`.
         * @default true
         * @private
         */this.isVisible=true;/**
         * Indicates if `Sublayer` is present.
         * @default false
         * @private
         */this.sublayer=false;/**
         * Local variable to store `length` of the graphics.
         * @default 0
         * @private
         */this.contentLength=0;/**
         * Instance for `PdfDictionaryProperties` Class.
         * @private
         */this.dictionaryProperties=new DictionaryProperties();if(typeof streamClipPageTemplates==='undefined'){this.pdfPage=page;this.clipPageTemplates=true;this.content=new PdfStream();}else if(streamClipPageTemplates instanceof PdfStream||streamClipPageTemplates===null){if(page==null){throw new Error('ArgumentNullException:page');}if(streamClipPageTemplates==null){throw new Error('ArgumentNullException:stream');}this.pdfPage=page;this.content=streamClipPageTemplates;}else{this.constructor(page);this.clipPageTemplates=streamClipPageTemplates;}}// Properties
/**
     * Get or set the `color space`.
     * @private
     */_createClass(PdfPageLayer,[{key:'add',value:function add(){var layer=new PdfPageLayer(this.pdfPage);layer.name='';return layer;}},{key:'sign',value:function sign(number){if(number===0){return 0;}else if(number>0){return 1;}else{return-1;}}},{key:'initializeGraphics',value:function initializeGraphics(page){var oPage=page;var gr=new GetResourceEventHandler(this.page);this.pdfGraphics=new PdfGraphics(page.size,gr,this.content);this.pdfGraphics.mediaBoxUpperRightBound=0;if(oPage!=null){var sc=oPage.section.parent;if(sc!=null){this.pdfGraphics.colorSpace=sc.document.colorSpace;this.colorSpace=sc.document.colorSpace;}}// Transform coordinates to the left/top and activate margins.
var isSame=this.sign(page.origin.y)===this.sign(page.origin.x);// if (page != null) {
if(page.origin.x>=0&&page.origin.y>=0||!isSame){this.pdfGraphics.initializeCoordinates();}else{// this.m_graphics.InitializeCoordinates(page);
}var clipRect=oPage.section.getActualBounds(oPage,true);var margins=oPage.section.pageSettings.margins;if(this.clipPageTemplates){if(page.origin.x>=0&&page.origin.y>=0){this.pdfGraphics.clipTranslateMargins(clipRect);}}else{this.graphics.clipTranslateMargins(clipRect.x,clipRect.y,margins.left,margins.top,margins.right,margins.bottom);}this.pdfGraphics.setLayer(this);// this.bSaved = false;
}},{key:'colorSpace',get:function get(){return this.pdfColorSpace;},set:function set(value){this.pdfColorSpace=value;}},{key:'page',get:function get(){return this.pdfPage;}},{key:'layerId',get:function get(){return this.layerid;},set:function set(value){this.layerid=value;}},{key:'name',get:function get(){return this.layerName;},set:function set(value){this.layerName=value;}},{key:'visible',get:function get(){return this.isVisible;},set:function set(value){this.isVisible=value;}},{key:'graphics',get:function get(){if(this.pdfGraphics==null){this.initializeGraphics(this.page);}return this.pdfGraphics;}},{key:'layers',get:function get(){if(this.layer==null){this.layer=new PdfPageLayerCollection(this.page);this.layer.sublayer=true;return this.layer;}else{return this.layer;}}},{key:'element',get:function get(){return this.content;}}]);return PdfPageLayer;}());_export('PdfCollection',PdfCollection=function(){// Constructors
/**
     * Initializes a new instance of the `Collection` class.
     * @private
     */function PdfCollection(){_classCallCheck(this,PdfCollection);}//
// Properties
/**
     * Gets the `Count` of stored objects.
     * @private
     */_createClass(PdfCollection,[{key:'count',get:function get(){if(typeof this.collection==='undefined'){this.collection=[];}return this.collection.length;}},{key:'list',get:function get(){if(typeof this.collection==='undefined'){this.collection=[];}return this.collection;}}]);return PdfCollection;}());_export('PdfPageLayerCollection',PdfPageLayerCollection=function(_PdfCollection){_inherits(PdfPageLayerCollection,_PdfCollection);function PdfPageLayerCollection(page){_classCallCheck(this,PdfPageLayerCollection);var _this7=_possibleConstructorReturn(this,(PdfPageLayerCollection.__proto__||Object.getPrototypeOf(PdfPageLayerCollection)).call(this));/**
         * Stores the `number of first level layers` in the document.
         * @default 0
         * @private
         */_this7.parentLayerCount=0;/**
         * Indicates if `Sublayer` is present.
         * @default false
         * @private
         */_this7.sublayer=false;/**
         * Stores the `optional content dictionary`.
         * @private
         */_this7.optionalContent=new PdfDictionary();if(page instanceof PdfPageBase){// if (page == null) {
//     throw new Error('ArgumentNullException:page');
// }
_this7.page=page;var lPage=page;// if (lPage != null) {
_this7.parseLayers(lPage);// }
}return _this7;}_createClass(PdfPageLayerCollection,[{key:'items',value:function items(index,value){if(typeof index==='number'&&typeof value==='undefined'){var obj=this.list[index];return obj;}else{if(value==null){throw new Error('ArgumentNullException: layer');}if(value.page!==this.page){throw new Error('ArgumentException: The layer belongs to another page');}// // Add/remove the layer.
// let layer : PdfPageLayer = this.items(index);
// if (layer != null) {
//     this.RemoveLayer(layer);
// }
// this.List[index] = value;
// this.InsertLayer(index, value);
}}},{key:'add',value:function add(firstArgument,secondArgument){if(typeof firstArgument==='undefined'){var layer=new PdfPageLayer(this.page);layer.name='';this.add(layer);return layer;}else if(firstArgument instanceof PdfPageLayer){// if (layer == null)
//     throw new ArgumentNullException("layer");
// if (layer.Page != m_page)
//     throw new ArgumentException("The layer belongs to another page");
var index=this.list.push(firstArgument);// Register layer.
this.addLayer(index,firstArgument);return index;}else{return 0;}}},{key:'addLayer',value:function addLayer(index,layer){var reference=new PdfReferenceHolder(layer);this.page.contents.add(reference);}},{key:'insert',value:function insert(index,layer){// if (index < 0)
//     throw new ArgumentOutOfRangeException("index", "Value can not be less 0");
// if (layer == null)
//     throw new ArgumentNullException("layer");
// if (layer.Page != m_page)
//     throw new ArgumentException("The layer belongs to another page");
var list=[];var length=this.list.length;for(var i=index;i<length;i++){list.push(this.list.pop());}this.list.push(layer);for(var _i3=0;_i3<list.length;_i3++){this.list.push(list[_i3]);}// Register layer.
this.insertLayer(index,layer);}},{key:'insertLayer',value:function insertLayer(index,layer){if(layer==null){throw new Error('ArgumentNullException:layer');}var reference=new PdfReferenceHolder(layer);this.page.contents.insert(index,reference);}},{key:'parseLayers',value:function parseLayers(loadedPage){// if (loadedPage == null) {
//     throw new Error('ArgumentNullException:loadedPage');
// }
var contents=this.page.contents;var resource=this.page.getResources();var crossTable=null;crossTable=loadedPage.crossTable;// } else {
//     crossTable = (loadedPage as PdfLoadedPage).CrossTable;
//     Propertie = PdfCrossTable.Dereference(Resource[DictionaryProperties.Properties]) as PdfDictionary;
//     ocproperties = PdfCrossTable.Dereference((loadedPage as PdfLoadedPage).
//     Document.Catalog[DictionaryProperties.OCProperties]) as PdfDictionary;
// }
var saveStream=new PdfStream();var restoreStream=new PdfStream();var saveState='q';var restoreState='Q';// for (let index : number = 0; index < contents.Items.length; index++) {
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
var saveData=[];saveData.push(saveState);saveStream.data=saveData;contents.insert(0,new PdfReferenceHolder(saveStream));saveData=[];saveData.push(restoreState);restoreStream.data=saveData;contents.insert(contents.count,new PdfReferenceHolder(restoreStream));}},{key:'indexOf',value:function indexOf(layer){if(layer==null){throw new Error('ArgumentNullException: layer');}var index=this.list.indexOf(layer);return index;}}]);return PdfPageLayerCollection;}(PdfCollection));_export('PdfTemplate',PdfTemplate=function(){function PdfTemplate(arg1,arg2){_classCallCheck(this,PdfTemplate);/**
         * Initialize an instance for `DictionaryProperties` class.
         * @private
         * @hidden
         */this.dictionaryProperties=new DictionaryProperties();/**
         * Checks whether the transformation 'is performed'.
         * @default true
         * @private
         */this.writeTransformation=true;if(typeof arg1==='undefined'){//
}else if(arg1 instanceof SizeF&&typeof arg2==='undefined'){this.content=new PdfStream();var tempSize=new SizeF(arg1.width,arg1.height);this.setSize(tempSize);this.initialize();}else{this.content=new PdfStream();this.setSize(new SizeF(arg1,arg2));this.initialize();}}//Properties
/**
     * Gets the size of the 'PdfTemplate'.
     */_createClass(PdfTemplate,[{key:'getResources',value:function getResources(){if(this.resources==null){this.resources=new PdfResources();this.content.items.setValue(this.dictionaryProperties.resources,this.resources);}return this.resources;}},{key:'initialize',value:function initialize(){this.addType();this.addSubType();}},{key:'addType',value:function addType(){var value=new PdfName(this.dictionaryProperties.xObject);this.content.items.setValue(this.dictionaryProperties.type,value);}},{key:'addSubType',value:function addSubType(){var value=new PdfName(this.dictionaryProperties.form);this.content.items.setValue(this.dictionaryProperties.subtype,value);}},{key:'reset',value:function reset(size){if(typeof size==='undefined'){if(this.resources!=null){this.resources=null;this.content.remove(this.dictionaryProperties.resources);}if(this.graphics!=null){this.graphics.reset(this.size);}}else{this.setSize(size);this.reset();}}},{key:'setSize',value:function setSize(size){var rect=new RectangleF(new PointF(0,0),size);var val=PdfArray.fromRectangle(rect);this.content.items.setValue(this.dictionaryProperties.bBox,val);this.templateSize=size;}},{key:'size',get:function get(){return this.templateSize;}},{key:'width',get:function get(){return this.size.width;}},{key:'height',get:function get(){return this.size.height;}},{key:'graphics',get:function get(){if(this.pdfGraphics==null||typeof this.pdfGraphics==='undefined'){var gr=new GetResourceEventHandler(this);var g=new PdfGraphics(this.size,gr,this.content);this.pdfGraphics=g;// if(this.writeTransformation) {
// Transform co-ordinates to Top/Left.
this.pdfGraphics.initializeCoordinates();// }
}return this.pdfGraphics;}},{key:'element',get:function get(){return this.content;}}]);return PdfTemplate;}());_export('ByteArray',ByteArray=function(){/**
     * Initialize the new instance for `byte-array` class
     * @hidden
     * @private
     */function ByteArray(length){_classCallCheck(this,ByteArray);/**
         * Current stream `position`.
         * @default 0
         * @private
         */this.mPosition=0;this.buffer=new Uint8Array(length);this.dataView=new DataView(this.buffer.buffer);}/**
     * Gets and Sets a current `position` of byte array.
     * @hidden
     * @private
     */_createClass(ByteArray,[{key:'read',value:function read(buffer,offset,count){for(var index=offset;index<count;index++){var position=this.position;buffer.buffer[index]=this.readByte(position);this.position++;}}},{key:'getBuffer',value:function getBuffer(index){return this.buffer[index];}},{key:'writeFromBase64String',value:function writeFromBase64String(base64){var arr=this.encodedString(base64);this.buffer=arr;}},{key:'encodedString',value:function encodedString(input){var keyStr='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';var chr1=void 0;var chr2=void 0;var chr3=void 0;var enc1=void 0;var enc2=void 0;var enc3=void 0;var enc4=void 0;var i=0;var resultIndex=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,'');var totalLength=input.length*3/4;if(input.charAt(input.length-1)===keyStr.charAt(64)){totalLength--;}var output=new Uint8Array(totalLength|0);while(i<input.length){enc1=keyStr.indexOf(input.charAt(i++));enc2=keyStr.indexOf(input.charAt(i++));enc3=keyStr.indexOf(input.charAt(i++));enc4=keyStr.indexOf(input.charAt(i++));chr1=enc1<<2|enc2>>4;chr2=(enc2&15)<<4|enc3>>2;chr3=(enc3&3)<<6|enc4;output[resultIndex++]=chr1;output[resultIndex++]=chr2;output[resultIndex++]=chr3;}return output;}},{key:'readByte',value:function readByte(offset){return this.buffer[offset];}},{key:'position',get:function get(){return this.mPosition;},set:function set(value){this.mPosition=value;}},{key:'internalBuffer',get:function get(){return this.buffer;}},{key:'count',get:function get(){return this.buffer.byteLength;}}]);return ByteArray;}());PdfBoolean=function(){//constructor
/**
     * Initializes a new instance of the `PdfBoolean` class.
     * @private
     */function PdfBoolean(value){_classCallCheck(this,PdfBoolean);/**
         * Internal variable to store the `position`.
         * @default -1
         * @private
         */this.currentPosition=-1;this.value=value;}//Properties
/**
     * Gets or sets the `Status` of the specified object.
     * @private
     */_createClass(PdfBoolean,[{key:'save',value:function save(writer){writer.write(this.boolToStr(this.value));}},{key:'clone',value:function clone(crossTable){var newNumber=new PdfBoolean(this.value);return newNumber;}},{key:'boolToStr',value:function boolToStr(value){return value?'true':'false';}},{key:'status',get:function get(){return this.objectStatus;},set:function set(value){this.objectStatus=value;}},{key:'isSaving',get:function get(){return this.saving;},set:function set(value){this.saving=value;}},{key:'objectCollectionIndex',get:function get(){return this.index;},set:function set(value){this.index=value;}},{key:'position',get:function get(){return this.currentPosition;},set:function set(value){this.currentPosition=value;}},{key:'clonedObject',get:function get(){var rValue=null;return rValue;}}]);return PdfBoolean;}();(function(ImageFormat){/**
     * Specifies the type of `Unknown`.
     * @hidden
     * @private
     */ImageFormat[ImageFormat["Unknown"]=0]="Unknown";/**
     * Specifies the type of `Bmp`.
     * @hidden
     * @private
     */ImageFormat[ImageFormat["Bmp"]=1]="Bmp";/**
     * Specifies the type of `Emf`.
     * @hidden
     * @private
     */ImageFormat[ImageFormat["Emf"]=2]="Emf";/**
     * Specifies the type of `Gif`.
     * @hidden
     * @private
     */ImageFormat[ImageFormat["Gif"]=3]="Gif";/**
     * Specifies the type of `Jpeg`.
     * @hidden
     * @private
     */ImageFormat[ImageFormat["Jpeg"]=4]="Jpeg";/**
     * Specifies the type of `Png`.
     * @hidden
     * @private
     */ImageFormat[ImageFormat["Png"]=5]="Png";/**
     * Specifies the type of `Wmf`.
     * @hidden
     * @private
     */ImageFormat[ImageFormat["Wmf"]=6]="Wmf";/**
     * Specifies the type of `Icon`.
     * @hidden
     * @private
     */ImageFormat[ImageFormat["Icon"]=7]="Icon";})(ImageFormat||_export('ImageFormat',ImageFormat={}));/**
 * `Decode the image stream`.
 * @private
 */_export('ImageDecoder',ImageDecoder=function(){/**
     * Initialize the new instance for `image-decoder` class.
     * @private
     */function ImageDecoder(stream){_classCallCheck(this,ImageDecoder);/**
         * Specifies `format` of image.
         * @hidden
         * @private
         */this.mFormat=ImageFormat.Unknown;/**
         * `Bits per component`.
         * @default 8
         * @hidden
         * @private
         */this.mbitsPerComponent=8;/**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @hidden
         * @private
         */this.dictionaryProperties=new DictionaryProperties();this.mStream=stream;this.initialize();}/**
     * Gets the `height` of image.
     * @hidden
     * @private
     */_createClass(ImageDecoder,[{key:'initialize',value:function initialize(){if(this.mFormat===ImageFormat.Unknown&&this.checkIfJpeg()){this.mFormat=ImageFormat.Jpeg;this.parseJpegImage();}this.reset();this.mImageData=new ByteArray(this.mStream.count);this.mStream.read(this.mImageData,0,this.mImageData.count);}},{key:'reset',value:function reset(){this.mStream.position=0;}},{key:'parseJpegImage',value:function parseJpegImage(){this.reset();var imgData=new ByteArray(this.mStream.count);this.mStream.read(imgData,0,imgData.count);var i=4;/* tslint:disable */if(String.fromCharCode(imgData.getBuffer(i+2))==='J'&&String.fromCharCode(imgData.getBuffer(i+3))==='F'&&String.fromCharCode(imgData.getBuffer(i+4))==='I'&&String.fromCharCode(imgData.getBuffer(i+5))==='F'&&imgData.getBuffer(i+6)===0){var length=imgData.getBuffer(i)*256+imgData.getBuffer(i+1);while(i+length<imgData.count){i+=length;if(imgData.getBuffer(i+1)===192){this.mHeight=imgData.getBuffer(i+5)*256+imgData.getBuffer(i+6);this.mWidth=imgData.getBuffer(i+7)*256+imgData.getBuffer(i+8);return;}else{i+=2;length=imgData.getBuffer(i)*256+imgData.getBuffer(i+1);}}}/* tslint:enable */}},{key:'checkIfJpeg',value:function checkIfJpeg(){this.reset();for(var i=0;i<ImageDecoder.mJpegHeader.length;i++){if(ImageDecoder.mJpegHeader[i]!==this.mStream.readByte(i)){return false;}this.mStream.position++;}return true;}},{key:'getImageDictionary',value:function getImageDictionary(){if(this.mFormat===ImageFormat.Jpeg){var tempArrayBuffer=this.imageData.internalBuffer.length;this.imageStream=new PdfStream();this.imageStream.isImage=true;var tempString='';var decodedString='';for(var i=0;i<this.imageDataAsNumberArray.byteLength;i++){tempString+=String.fromCharCode(null,this.mStream.readByte(i));}for(var _i4=0;_i4<tempString.length;_i4++){if(_i4%2!==0){decodedString+=tempString[_i4];}}this.imageStream.data=[decodedString];this.imageStream.compress=false;this.imageStream.items.setValue(this.dictionaryProperties.type,new PdfName(this.dictionaryProperties.xObject));this.imageStream.items.setValue(this.dictionaryProperties.subtype,new PdfName(this.dictionaryProperties.image));this.imageStream.items.setValue(this.dictionaryProperties.width,new PdfNumber(this.width));this.imageStream.items.setValue(this.dictionaryProperties.height,new PdfNumber(this.height));this.imageStream.items.setValue(this.dictionaryProperties.bitsPerComponent,new PdfNumber(this.bitsPerComponent));this.imageStream.items.setValue(this.dictionaryProperties.filter,new PdfName(this.dictionaryProperties.dctdecode));this.imageStream.items.setValue(this.dictionaryProperties.colorSpace,new PdfName(this.getColorSpace()));this.imageStream.items.setValue(this.dictionaryProperties.decodeParms,this.getDecodeParams());return this.imageStream;}else{return this.imageStream;}}},{key:'getColorSpace',value:function getColorSpace(){return this.dictionaryProperties.deviceRgb;}},{key:'getDecodeParams',value:function getDecodeParams(){var decodeParams=new PdfDictionary();decodeParams.items.setValue(this.dictionaryProperties.columns,new PdfNumber(this.width));decodeParams.items.setValue(this.dictionaryProperties.blackIs1,new PdfBoolean(true));decodeParams.items.setValue(this.dictionaryProperties.k,new PdfNumber(-1));decodeParams.items.setValue(this.dictionaryProperties.predictor,new PdfNumber(15));decodeParams.items.setValue(this.dictionaryProperties.bitsPerComponent,new PdfNumber(this.bitsPerComponent));return decodeParams;}},{key:'height',get:function get(){return this.mHeight;}},{key:'width',get:function get(){return this.mWidth;}},{key:'bitsPerComponent',get:function get(){return this.mbitsPerComponent;}},{key:'size',get:function get(){return this.mImageData.count;}},{key:'imageData',get:function get(){return this.mImageData;}},{key:'imageDataAsNumberArray',get:function get(){return this.mImageData.internalBuffer.buffer;}},{key:'format',get:function get(){return this.mFormat;}}]);return ImageDecoder;}());/**
 * Number array for `png header`.
 * @hidden
 * @private
 */ImageDecoder.mPngHeader=[137,80,78,71,13,10,26,10];/**
 * Number Array for `jpeg header`.
 * @hidden
 * @private
 */ImageDecoder.mJpegHeader=[255,216];/**
 * Number array for `gif header`.
 * @hidden
 * @private
 */ImageDecoder.GIF_HEADER='G,I,F,8';/**
 * Number array for `bmp header.`
 * @hidden
 * @private
 */ImageDecoder.BMP_HEADER='B,M';/**
 * Used to perform `convertion between pixels and points`.
 * @private
 */PdfUnitConverter=function(){//constructors
/**
     * Initializes a new instance of the `UnitConvertor` class with DPI value.
     * @private
     */function PdfUnitConverter(dpi){_classCallCheck(this,PdfUnitConverter);this.updateProportionsHelper(dpi);}/**
     * `Converts` the value, from one graphics unit to another graphics unit.
     * @private
     */_createClass(PdfUnitConverter,[{key:'convertUnits',value:function convertUnits(value,from,to){return this.convertFromPixels(this.convertToPixels(value,from),to);}},{key:'convertToPixels',value:function convertToPixels(value,from){var index=from;var result=value*this.proportions[index];return result;}},{key:'convertFromPixels',value:function convertFromPixels(value,to){var index=to;var result=value/this.proportions[index];return result;}},{key:'updateProportionsHelper',value:function updateProportionsHelper(pixelPerInch){this.proportions=[pixelPerInch/2.54,pixelPerInch/6.0,1,pixelPerInch/72.0,pixelPerInch,pixelPerInch/300.0,pixelPerInch/25.4// Millimeter
];}}]);return PdfUnitConverter;}();//Fields
/**
 * Indicates default `horizontal resolution`.
 * @default 96
 * @private
 */PdfUnitConverter.horizontalResolution=96;/**
 * Indicates default `vertical resolution`.
 * @default 96
 * @private
 */PdfUnitConverter.verticalResolution=96;/**
 * `PdfImage` class represents the base class for images and provides functionality for the 'PdfBitmap' class.
 * @private
 */_export('PdfImage',PdfImage=function(){function PdfImage(){_classCallCheck(this,PdfImage);}_createClass(PdfImage,[{key:'getPointSize',value:function getPointSize(width,height,horizontalResolution,verticalResolution){if(typeof horizontalResolution==='undefined'){var dpiX=PdfUnitConverter.horizontalResolution;var dpiY=PdfUnitConverter.verticalResolution;var size=this.getPointSize(width,height,dpiX,dpiY);return size;}else{var ucX=new PdfUnitConverter(horizontalResolution);var ucY=new PdfUnitConverter(verticalResolution);var ptWidth=ucX.convertUnits(width,PdfGraphicsUnit.Pixel,PdfGraphicsUnit.Point);var ptHeight=ucY.convertUnits(height,PdfGraphicsUnit.Pixel,PdfGraphicsUnit.Point);var _size2=new SizeF(ptWidth,ptHeight);return _size2;}}},{key:'width',get:function get(){return this.imageWidth;},set:function set(value){this.imageWidth=value;}},{key:'height',get:function get(){return this.imageHeight;},set:function set(value){this.imageHeight=value;}},{key:'size',set:function set(value){this.width=value.width;this.height=value.height;}},{key:'physicalDimension',get:function get(){this.imagePhysicalDimension=this.getPointSize(this.width,this.height,this.horizontalResolution,this.verticalResolution);return new SizeF(this.width,this.height);}},{key:'element',get:function get(){return this.imageStream;}}]);return PdfImage;}());_export('PdfBitmap',PdfBitmap=function(_PdfImage){_inherits(PdfBitmap,_PdfImage);/**
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
     */function PdfBitmap(encodedString){_classCallCheck(this,PdfBitmap);var _this8=_possibleConstructorReturn(this,(PdfBitmap.__proto__||Object.getPrototypeOf(PdfBitmap)).call(this));//Fields
/**
         * Specifies the `status` of an image.
         * @default true.
         * @hidden
         * @private
         */_this8.imageStatus=true;/**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @hidden
         * @private
         */_this8.dictionaryProperties=new DictionaryProperties();_this8.loadImage(encodedString);return _this8;}/**
     * `Load image`.
     * @hidden
     * @private
     */_createClass(PdfBitmap,[{key:'loadImage',value:function loadImage(encodedString){var task=this.initializeAsync(encodedString);}},{key:'initializeAsync',value:function initializeAsync(encodedString){var byteArray=new ByteArray(encodedString.length);byteArray.writeFromBase64String(encodedString);this.decoder=new ImageDecoder(byteArray);this.height=this.decoder.height;this.width=this.decoder.width;// FrameCount = BitmapImageDecoder.FrameCount;
this.bitsPerComponent=this.decoder.bitsPerComponent;}},{key:'save',value:function save(){this.imageStatus=true;this.imageStream=this.decoder.getImageDictionary();}}]);return PdfBitmap;}(PdfImage));_export('PdfResources',PdfResources=function(_PdfDictionary3){_inherits(PdfResources,_PdfDictionary3);function PdfResources(baseDictionary){_classCallCheck(this,PdfResources);var _this9=_possibleConstructorReturn(this,(PdfResources.__proto__||Object.getPrototypeOf(PdfResources)).call(this));/**
         * Dictionary for the `properties names`.
         * @private
         */_this9.properties=new PdfDictionary();if(baseDictionary instanceof PdfDictionary){var _this9=_possibleConstructorReturn(this,(PdfResources.__proto__||Object.getPrototypeOf(PdfResources)).call(this,baseDictionary));}return _possibleConstructorReturn(_this9);}//Properties
/**
     * Gets the `font names`.
     * @private
     */_createClass(PdfResources,[{key:'getName',value:function getName(obj){var primitive=obj.element;var name=null;if(this.names.containsKey(primitive)){name=this.names.getValue(primitive);}// Object is new.
if(name==null){var sName=this.generateName();name=new PdfName(sName);this.names.setValue(primitive,name);if(obj instanceof PdfFont){this.add(obj,name);}else if(obj instanceof PdfTemplate){this.add(obj,name);}else if(obj instanceof PdfTransparency){this.add(obj,name);}else if(obj instanceof PdfImage||obj instanceof PdfBitmap){this.add(obj,name);}}return name;}},{key:'getNames',value:function getNames(){if(this.pdfNames==null){this.pdfNames=new TemporaryDictionary();}var fonts=this.items.getValue(this.dictionaryProperties.font);if(fonts!=null){var dictionary=fonts;dictionary=PdfCrossTable.dereference(fonts);}return this.pdfNames;}},{key:'requireProcedureSet',value:function requireProcedureSet(procedureSetName){if(procedureSetName==null){throw new Error('ArgumentNullException:procedureSetName');}var procSets=this.items.getValue(this.dictionaryProperties.procset);if(procSets==null){procSets=new PdfArray();this.items.setValue(this.dictionaryProperties.procset,procSets);}var name=new PdfName(procedureSetName);if(!procSets.contains(name)){procSets.add(name);}}},{key:'removeFont',value:function removeFont(name){var key=null;var keys=this.pdfNames.keys();for(var index=0;index<this.pdfNames.size();index++){if(this.pdfNames.getValue(keys[index])===new PdfName(name)){key=keys[index];break;}}if(key!=null){this.pdfNames.remove(key);}}},{key:'generateName',value:function generateName(){var name=Guid.getNewGuidString();return name;}},{key:'add',value:function add(arg1,arg2){if(arg1 instanceof PdfFont){var dictionary=null;var fonts=this.items.getValue(this.dictionaryProperties.font);if(fonts!=null){dictionary=fonts;dictionary=fonts;}else{dictionary=new PdfDictionary();this.items.setValue(this.dictionaryProperties.font,dictionary);}dictionary.items.setValue(arg2.value,new PdfReferenceHolder(arg1.element));}else if(arg1 instanceof PdfTemplate){var xobjects=void 0;xobjects=this.items.getValue(this.dictionaryProperties.xObject);// Create fonts dictionary.
if(xobjects==null){xobjects=new PdfDictionary();this.items.setValue(this.dictionaryProperties.xObject,xobjects);}xobjects.items.setValue(arg2.value,new PdfReferenceHolder(arg1.element));}else if(arg1 instanceof PdfBrush){// let savable : IPdfPrimitive = (arg1 as IPdfWrapper).Element;
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
}else if(arg1 instanceof PdfTransparency){var savable=arg1.element;var transDic=null;transDic=this.items.getValue(this.dictionaryProperties.extGState);// Create a new pattern dictionary.
if(transDic==null){transDic=new PdfDictionary();this.items.setValue(this.dictionaryProperties.extGState,transDic);}transDic.items.setValue(arg2.value,new PdfReferenceHolder(savable));}else{/* tslint:disable */var _xobjects=this.Dictionary.items.getValue(this.dictionaryProperties.xObject);var parentXObjects=void 0;if(typeof this.pdfDocument!=='undefined'){parentXObjects=this.pdfDocument.sections.element.items.getValue(this.dictionaryProperties.resources).items.getValue(this.dictionaryProperties.xObject);}var values=this.Dictionary.items.values();var hasSameImageStream=false;var oldReference=void 0;if(typeof this.pdfDocument!=='undefined'&&((typeof parentXObjects==='undefined'?'undefined':_typeof(parentXObjects))===undefined||parentXObjects==null)){parentXObjects=new PdfDictionary();this.pdfDocument.sections.element.items.getValue(this.dictionaryProperties.resources).items.setValue(this.dictionaryProperties.xObject,parentXObjects);}else if(typeof this.pdfDocument!=='undefined'){var _values=parentXObjects.items.values();for(var i=0;i<_values.length;i++){if(typeof _values[i]!=='undefined'&&typeof _values[i].element!=='undefined'){if(_values[i].element.data[0]===arg1.element.data[0]){oldReference=_values[i];hasSameImageStream=true;}}}}if(_xobjects==null){_xobjects=new PdfDictionary();this.Dictionary.items.setValue(this.dictionaryProperties.xObject,_xobjects);}if(hasSameImageStream&&typeof oldReference!=='undefined'){_xobjects.items.setValue(arg2.value,oldReference);}else{var reference=new PdfReferenceHolder(arg1.element);_xobjects.items.setValue(arg2.value,reference);if(typeof this.pdfDocument!=='undefined'){parentXObjects.items.setValue(arg2.value,reference);}}/* tslint:enable */}}},{key:'names',get:function get(){return this.getNames();}},{key:'document',get:function get(){return this.pdfDocument;},set:function set(value){this.pdfDocument=value;}}]);return PdfResources;}(PdfDictionary));_export('Guid',Guid=function(){/**
     * Initialize an `instance of GUID` class.
     * @private
     */function Guid(stringValue){_classCallCheck(this,Guid);this.stringValue=stringValue||Guid.getNewGuidString();}/**
     * Generate `Random number` for GUID.
     * @private
     */_createClass(Guid,[{key:'toString',value:function toString(){return this.stringValue;}}],[{key:'getNewGuidString',value:function getNewGuidString(){var guid='abc7def4-ghi9-jkl2-m6n3-';var temproaryString='opqrstuvwxyz';var randomString=Guid.randomNumber.toString();randomString=guid+temproaryString.substr(0,12-randomString.length)+randomString;return randomString;}},{key:'randomNumber',get:function get(){Guid.guid=Guid.guid+1;Guid.guid=Guid.guid>999999999999?0:Guid.guid;return Guid.guid;}}]);return Guid;}());/**
 * static field to store `endding value of current GUID`.
 * @private
 */Guid.guid=0;/**
 * The abstract base class for all pages,
 * `PdfPageBase` class provides methods and properties to create PDF pages and its elements.
 * @private
 */_export('PdfPageBase',PdfPageBase=function(){//constructors
/**
     * Initializes a new instance of the `PdfPageBase` class.
     * @private
     */function PdfPageBase(dictionary){_classCallCheck(this,PdfPageBase);/**
         * `Index` of the default layer.
         * @default -1.
         * @private
         */this.defLayerIndex=-1;/**
         * Local variable to store if page `updated`.
         * @default false.
         * @private
         */this.modified=false;/**
         * Instance of `DictionaryProperties` class.
         * @hidden
         * @private
         */this.dictionaryProperties=new DictionaryProperties();this.pageDictionary=dictionary;}//Properties
/**
     * Gets the `section` of a page.
     * @private
     */_createClass(PdfPageBase,[{key:'getResources',value:function getResources(){if(this.resources==null){this.resources=new PdfResources();this.dictionary.items.setValue(this.dictionaryProperties.resources,this.resources);}return this.resources;}},{key:'setResources',value:function setResources(res){this.resources=res;this.dictionary.items.setValue(this.dictionaryProperties.resources,this.resources);this.modified=true;}},{key:'section',get:function get(){// if (this.pdfSection === null) {
//     throw new Error('PdfException : Page must be added to some section before using.');
// }
return this.pdfSection;},set:function set(value){this.pdfSection=value;}},{key:'dictionary',get:function get(){return this.pageDictionary;}},{key:'element',get:function get(){return this.pageDictionary;}},{key:'defaultLayer',get:function get(){var layer=this.layers;var index=this.defaultLayerIndex;var returnlayer=layer.items(index);return returnlayer;}},{key:'defaultLayerIndex',get:function get(){if(this.layerCollection.count===0||this.defLayerIndex===-1){var layer=this.layerCollection.add();this.defLayerIndex=this.layerCollection.indexOf(layer);}return this.defLayerIndex;},set:function set(value){if(value<0||value>this.layers.count-1){throw new Error('ArgumentOutOfRangeException : value, Index can not be less 0 and greater Layers.Count - 1');}else{this.defLayerIndex=value;this.modified=true;}}},{key:'layers',get:function get(){if(this.layerCollection==null||typeof this.layerCollection==='undefined'){this.layerCollection=new PdfPageLayerCollection(this);}return this.layerCollection;}},{key:'contents',get:function get(){var obj=this.pageDictionary.items.getValue(this.dictionaryProperties.contents);var contents=obj;if(contents==null){contents=new PdfArray();this.pageDictionary.items.setValue(this.dictionaryProperties.contents,contents);}return contents;}}]);return PdfPageBase;}());_export('PdfAnnotationCollection',PdfAnnotationCollection=function(){function PdfAnnotationCollection(page){_classCallCheck(this,PdfAnnotationCollection);// Constants
/**
         * `Error` constant message.
         * @private
         */this.alreadyExistsAnnotationError='This annotatation had been already added to page';/**
         * `Error` constant message.
         * @private
         */this.missingAnnotationException='Annotation is not contained in collection.';/**
         * Specifies the Internal variable to store fields of `PdfDictionaryProperties`.
         * @private
         */this.dictionaryProperties=new DictionaryProperties();/**
         * Array of the `annotations`.
         * @private
         */this.internalAnnotations=new PdfArray();/**
         * privte `list` for the annotations.
         * @private
         */this.lists=[];if(typeof page!=='undefined'){this.page=page;}}/**
     * Gets the `PdfAnnotation` object at the specified index. Read-Only.
     * @private
     */_createClass(PdfAnnotationCollection,[{key:'add',value:function add(annotation){// this.SetPrint(annotation);
this.doAdd(annotation);}},{key:'doAdd',value:function doAdd(annotation){if(typeof annotation.destination!=='undefined'){var layout=new PdfStringLayouter();var layoutResult=layout.layout(annotation.text,annotation.font,annotation.stringFormat,new SizeF(annotation.bounds.width,0),false,new SizeF(0,0));var lastPosition=annotation.bounds.y;if(layoutResult.lines.length===1){var size=annotation.font.measureString(layoutResult.lines[0].text);annotation.bounds=new RectangleF(new PointF(annotation.bounds.x,lastPosition),size);annotation.text=layoutResult.lines[0].text;//Draw Annotation Text.
this.page.graphics.drawString(annotation.text,annotation.font,null,annotation.brush,annotation.bounds.x,annotation.bounds.y,annotation.bounds.width,annotation.bounds.height,null);//Add annotation to dictionary.
annotation.setPage(this.page);this.setColor(annotation);this.internalAnnotations.add(new PdfReferenceHolder(annotation));this.lists.push(annotation);}else{for(var i=0;i<layoutResult.lines.length;i++){var _size3=annotation.font.measureString(layoutResult.lines[i].text);if(i===0){annotation.bounds=new RectangleF(annotation.bounds.x,lastPosition,_size3.width,_size3.height);annotation.text=layoutResult.lines[i].text;//Draw Annotation Text.
this.page.graphics.drawString(annotation.text,annotation.font,null,annotation.brush,annotation.bounds.x,lastPosition,_size3.width,_size3.height,null);//Add annotation to dictionary.
annotation.setPage(this.page);this.setColor(annotation);this.internalAnnotations.add(new PdfReferenceHolder(annotation));this.lists.push(annotation);//Update y for drawing next line of the text.
lastPosition+=annotation.bounds.height;}else{var annot=annotation.clone();annot.bounds=new RectangleF(new PointF(annotation.bounds.x,lastPosition),_size3);annot.text=layoutResult.lines[i].text;//Draw Annotation Text.
this.page.graphics.drawString(annot.text,annot.font,null,annot.brush,annot.bounds.x,annot.bounds.y,annot.bounds.width,annot.bounds.height,null);//Add annotation to dictionary.
annot.setPage(this.page);this.setColor(annot);this.internalAnnotations.add(new PdfReferenceHolder(annot));this.lists.push(annot);//Update y for drawing next line of the text.
lastPosition+=annot.bounds.height;}}}}else{annotation.setPage(this.page);this.internalAnnotations.add(new PdfReferenceHolder(annotation));return this.lists.push(annotation);}}},{key:'setColor',value:function setColor(annotation){var cs=PdfColorSpace.Rgb;var colours=annotation.color.toArray(cs);annotation.dictionary.items.setValue(this.dictionaryProperties.c,colours);}},{key:'annotations',get:function get(){return this.internalAnnotations;},set:function set(value){this.internalAnnotations=value;}},{key:'element',get:function get(){return this.internalAnnotations;}}]);return PdfAnnotationCollection;}());_export('PdfPage',PdfPage=function(_PdfPageBase){_inherits(PdfPage,_PdfPageBase);//constructors
/**
     * Initialize the new instance for `PdfPage` class.
     * @private
     */function PdfPage(){_classCallCheck(this,PdfPage);var _this10=_possibleConstructorReturn(this,(PdfPage.__proto__||Object.getPrototypeOf(PdfPage)).call(this,new PdfDictionary()));/**
         * Stores the instance of `PdfAnnotationCollection` class.
         * @hidden
         * @default null
         * @private
         */_this10.annotationCollection=null;/**
         * Stores the instance of `PageBeginSave` event for Page Number Field.
         * @default null
         * @private
         */_this10.beginSave=null;_this10.initialize();return _this10;}//Properties
/**
     * Gets current `document`.
     * @private
     */_createClass(PdfPage,[{key:'initialize',value:function initialize(){this.dictionary.items.setValue(this.dictionaryProperties.type,new PdfName('Page'));this.dictionary.pageBeginDrawTemplate=new SaveTemplateEventHandler(this);}},{key:'setSection',value:function setSection(section){this.section=section;this.dictionary.items.setValue(this.dictionaryProperties.parent,new PdfReferenceHolder(section));}},{key:'resetProgress',value:function resetProgress(){this.isProgressOn=false;}},{key:'getClientSize',value:function getClientSize(){var returnValue=this.section.getActualBounds(this,true);return new SizeF(returnValue.width,returnValue.height);}},{key:'pageBeginSave',value:function pageBeginSave(){var doc=this.document;if((typeof doc==='undefined'?'undefined':_typeof(doc))!==undefined&&doc!=null){this.drawPageTemplates(doc);}if(this.beginSave!=null&&typeof this.beginSave!=='undefined'){this.beginSave(this);}}},{key:'drawPageTemplates',value:function drawPageTemplates(document){// Draw Background templates.
var hasBackTemplates=this.section.containsTemplates(document,this,false);if(hasBackTemplates){var backLayer=new PdfPageLayer(this,false);this.layers.insert(0,backLayer);this.section.drawTemplates(this,backLayer,document,false);if(backLayer.graphics!==null&&typeof backLayer.graphics!=='undefined'){for(var i=0;i<backLayer.graphics.automaticFields.automaticFields.length;i++){var fieldInfo=backLayer.graphics.automaticFields.automaticFields[i];fieldInfo.field.performDraw(backLayer.graphics,fieldInfo.location,fieldInfo.scalingX,fieldInfo.scalingY);}}}// Draw Foreground templates.
var hasFrontTemplates=this.section.containsTemplates(document,this,true);if(hasFrontTemplates){var frontLayer=new PdfPageLayer(this,false);this.layers.add(frontLayer);this.section.drawTemplates(this,frontLayer,document,true);}}},{key:'document',get:function get(){if(this.section!==null&&this.section.parent!==null){return this.section.parent.document;}else{return null;}}},{key:'graphics',get:function get(){var result=this.defaultLayer.graphics;result.currentPage=this;return result;}},{key:'crossTable',get:function get(){if(this.section===null){throw new Error('PdfDocumentException : Page is not created');}return this.section.parent===null?this.section.parentDocument.crossTable:this.section.parent.document.crossTable;}},{key:'size',get:function get(){return this.section.pageSettings.size;}},{key:'origin',get:function get(){return this.section.pageSettings.origin;}},{key:'annotations',get:function get(){if(this.annotationCollection==null){this.annotationCollection=new PdfAnnotationCollection(this);// if (!this.Dictionary.ContainsKey(this.dictionaryProperties.annots)) {
this.dictionary.items.setValue(this.dictionaryProperties.annots,this.annotationCollection.element);// }
this.annotationCollection.annotations=this.dictionary.items.getValue(this.dictionaryProperties.annots);}return this.annotationCollection;}}]);return PdfPage;}(PdfPageBase));_export('PageAddedEventArgs',PageAddedEventArgs=function(){_createClass(PageAddedEventArgs,[{key:'page',get:function get(){return this.pdfPage;}}]);function PageAddedEventArgs(page){_classCallCheck(this,PageAddedEventArgs);if(typeof page!=='undefined'){this.pdfPage=page;}else{this.pdfPage=null;}}return PageAddedEventArgs;}());_export('PdfSectionPageCollection',PdfSectionPageCollection=function(){// Constructors
/**
     * Initializes a new instance of the `PdfSectionPageCollection` class.
     * @private
     */function PdfSectionPageCollection(section){_classCallCheck(this,PdfSectionPageCollection);//  Fields
/**
         * @hidden
         * @private
         */this.pdfSection=null;if(section==null){throw Error('ArgumentNullException("section")');}this.section=section;}// Properties
/**
     * Gets the `PdfPage` at the specified index.
     * @private
     */_createClass(PdfSectionPageCollection,[{key:'contains',value:function contains(page){return this.section.contains(page);}},{key:'remove',value:function remove(page){this.section.remove(page);}},{key:'add',value:function add(){return this.section.add();}},{key:'section',get:function get(){return this.pdfSection;},set:function set(value){this.pdfSection=value;}}]);return PdfSectionPageCollection;}());_export('PdfDocumentTemplate',PdfDocumentTemplate=function(){_createClass(PdfDocumentTemplate,[{key:'left',get:function get(){return this.leftTemplate;},set:function set(value){this.leftTemplate=this.checkElement(value,TemplateType.Left);}},{key:'top',get:function get(){return this.topTemplate;},set:function set(value){this.topTemplate=this.checkElement(value,TemplateType.Top);}},{key:'right',get:function get(){return this.rightTemplate;},set:function set(value){this.rightTemplate=this.checkElement(value,TemplateType.Right);}},{key:'bottom',get:function get(){return this.bottomTemplate;},set:function set(value){this.bottomTemplate=this.checkElement(value,TemplateType.Bottom);}},{key:'EvenLeft',get:function get(){return this.evenLeft;},set:function set(value){this.evenLeft=this.checkElement(value,TemplateType.Left);}},{key:'EvenTop',get:function get(){return this.evenTop;},set:function set(value){this.evenTop=this.checkElement(value,TemplateType.Top);}},{key:'EvenRight',get:function get(){return this.evenRight;},set:function set(value){this.evenRight=this.checkElement(value,TemplateType.Right);}},{key:'EvenBottom',get:function get(){return this.evenBottom;},set:function set(value){this.evenBottom=this.checkElement(value,TemplateType.Bottom);}},{key:'OddLeft',get:function get(){return this.oddLeft;},set:function set(value){this.oddLeft=this.checkElement(value,TemplateType.Left);}},{key:'OddTop',get:function get(){return this.oddTop;},set:function set(value){this.oddTop=this.checkElement(value,TemplateType.Top);}},{key:'OddRight',get:function get(){return this.oddRight;},set:function set(value){this.oddRight=this.checkElement(value,TemplateType.Right);}},{key:'OddBottom',get:function get(){return this.oddBottom;},set:function set(value){this.oddBottom=this.checkElement(value,TemplateType.Bottom);}}]);// Constructors
/**
     * Initializes a new instance of the `PdfDocumentTemplate` class.
     * @public
     */function PdfDocumentTemplate(){_classCallCheck(this,PdfDocumentTemplate);}//
// Implementation
/**
     * Returns `left` template.
     * @public
     */_createClass(PdfDocumentTemplate,[{key:'getLeft',value:function getLeft(page){if(page==null){throw new Error('ArgumentNullException:page');}var template=null;// if (page.Document.Pages != null) {
var even=this.isEven(page);if(even){template=this.EvenLeft!=null?this.EvenLeft:this.left;}else{template=this.OddLeft!=null?this.OddLeft:this.left;}// }
return template;}},{key:'getTop',value:function getTop(page){if(page==null){throw new Error('ArgumentNullException:page');}var template=null;// if (page.Document.Pages != null) {
var even=this.isEven(page);if(even){template=this.EvenTop!=null?this.EvenTop:this.top;}else{template=this.OddTop!=null?this.OddTop:this.top;}// }
return template;}},{key:'getRight',value:function getRight(page){if(page==null){throw new Error('ArgumentNullException:page');}var template=null;// if (page.Document.Pages != null) {
var even=this.isEven(page);if(even){template=this.EvenRight!=null?this.EvenRight:this.right;}else{template=this.OddRight!=null?this.OddRight:this.right;}// }
return template;}},{key:'getBottom',value:function getBottom(page){if(page==null){throw new Error('ArgumentNullException:page');}var template=null;// if (page.Document.Pages != null) {
var even=this.isEven(page);if(even){template=this.EvenBottom!=null?this.EvenBottom:this.bottom;}else{template=this.OddBottom!=null?this.OddBottom:this.bottom;}// }
return template;}},{key:'isEven',value:function isEven(page){var pages=page.section.document.pages;var index=0;if(pages.pageCollectionIndex.containsKey(page)){index=pages.pageCollectionIndex.getValue(page)+1;}else{index=pages.indexOf(page)+1;}var even=index%2===0;return even;}},{key:'checkElement',value:function checkElement(templateElement,type){if(templateElement!=null){if(typeof templateElement.type!=='undefined'&&templateElement.type!==TemplateType.None){throw new Error('NotSupportedException:Can not reassign the template element. Please, create new one.');}templateElement.type=type;}return templateElement;}}]);return PdfDocumentTemplate;}());_export('PdfSectionTemplate',PdfSectionTemplate=function(_PdfDocumentTemplate){_inherits(PdfSectionTemplate,_PdfDocumentTemplate);_createClass(PdfSectionTemplate,[{key:'applyDocumentLeftTemplate',get:function get(){return this.leftValue;},set:function set(value){this.leftValue=value;}},{key:'applyDocumentTopTemplate',get:function get(){return this.topValue;},set:function set(value){this.topValue=value;}},{key:'applyDocumentRightTemplate',get:function get(){return this.rightValue;},set:function set(value){this.rightValue=value;}},{key:'applyDocumentBottomTemplate',get:function get(){return this.bottomValue;},set:function set(value){this.bottomValue=value;}},{key:'applyDocumentStamps',get:function get(){return this.stampValue;},set:function set(value){this.stampValue=value;}}]);// Constructors
/**
     * `Creates a new object`.
     * @private
     */function PdfSectionTemplate(){_classCallCheck(this,PdfSectionTemplate);var _this11=_possibleConstructorReturn(this,(PdfSectionTemplate.__proto__||Object.getPrototypeOf(PdfSectionTemplate)).call(this));_this11.leftValue=_this11.topValue=_this11.rightValue=_this11.bottomValue=_this11.stampValue=true;return _this11;}return PdfSectionTemplate;}(PdfDocumentTemplate));_export('PdfSection',PdfSection=function(){function PdfSection(document,pageSettings){_classCallCheck(this,PdfSection);//Fields
//public PageAdded() : PageAddedEventArgs.PageAddedEventHandler = new PageAddedEventArgs.PageAddedEventHandler(Object,args)
/**
         * @hidden
         * @private
         */this.pageAdded=new PageAddedEventArgs();/**
         * @hidden
         * @private
         */this.pdfPages=[];/**
         * @hidden
         * @private
         */this.dictionaryProperties=new DictionaryProperties();if(typeof pageSettings==='undefined'){this.constructor(document,document.pageSettings);}else{this.pdfDocument=document;this.settings=pageSettings.clone();this.initialSettings=this.settings.clone();this.initialize();}}//Property
/**
     * Gets or sets the `parent`.
     * @private
     */_createClass(PdfSection,[{key:'getPages',value:function getPages(){return this.pdfPages;}},{key:'pointToNativePdf',value:function pointToNativePdf(page,point){var bounds=this.getActualBounds(page,true);point.x+=bounds.x;point.y=this.pageSettings.height-point.y;return point;}},{key:'setPageSettings',value:function setPageSettings(settings){this.settings=settings;this.state.orientation=settings.orientation;this.state.rotate=settings.rotate;this.state.size=settings.size;this.state.origin=settings.origin;}},{key:'initialize',value:function initialize(){this.pagesReferences=new PdfArray();this.section=new PdfDictionary();this.state=new PageSettingsState(this.pdfDocument);this.section.sectionBeginSave=new SaveSectionEventHandler(this,this.state);this.pageCount=new PdfNumber(0);this.section.items.setValue(this.dictionaryProperties.count,this.pageCount);this.section.items.setValue(this.dictionaryProperties.type,new PdfName(this.dictionaryProperties.pages));this.section.items.setValue(this.dictionaryProperties.kids,this.pagesReferences);}},{key:'containsTemplates',value:function containsTemplates(document,page,foreground){var documentHeaders=this.getDocumentTemplates(document,page,true,foreground);var documentTemplates=this.getDocumentTemplates(document,page,false,foreground);var contains=documentHeaders.length>0||documentTemplates.length>0;return contains;}},{key:'getDocumentTemplates',value:function getDocumentTemplates(document,page,headers,foreground){var templates=[];if(headers){if(this.template.applyDocumentTopTemplate&&document.template.getTop(page)!=null){if(!(document.template.getTop(page).foreground||foreground)||document.template.getTop(page).foreground&&foreground){templates.push(document.template.getTop(page));}}if(this.template.applyDocumentBottomTemplate&&document.template.getBottom(page)!=null){if(!(document.template.getBottom(page).foreground||foreground)||document.template.getBottom(page).foreground&&foreground){templates.push(document.template.getBottom(page));}}if(this.template.applyDocumentLeftTemplate&&document.template.getLeft(page)!=null){if(!(document.template.getLeft(page).foreground||foreground)||document.template.getLeft(page).foreground&&foreground){templates.push(document.template.getLeft(page));}}if(this.template.applyDocumentRightTemplate&&document.template.getRight(page)!=null){if(!(document.template.getRight(page).foreground||foreground)||document.template.getRight(page).foreground&&foreground){templates.push(document.template.getRight(page));}}}return templates;}},{key:'add',value:function add(page){if(typeof page==='undefined'){var _page2=new PdfPage();this.add(_page2);return _page2;}else{var r=this.checkPresence(page);this.pdfPages.push(page);this.pagesReferences.add(r);page.setSection(this);page.resetProgress();this.pageAddedMethod(page);}}},{key:'checkPresence',value:function checkPresence(page){var rh=new PdfReferenceHolder(page);var contains=false;var sc=this.parent;for(var index=0;index<sc.section.length;index++){var section=sc.section[index];contains=contains||section.contains(page);}return rh;}},{key:'contains',value:function contains(page){var index=this.indexOf(page);return 0<=index;}},{key:'indexOf',value:function indexOf(page){for(var index=0;index<this.pdfPages.length;index++){if(this.pdfPages[index]===page){return this.pdfPages.indexOf(page);}}var r=new PdfReferenceHolder(page);return this.pagesReferences.indexOf(r);}},{key:'pageAddedMethod',value:function pageAddedMethod(page){//Create event's arguments
var args=new PageAddedEventArgs(page);this.onPageAdded(args);var parent=this.parent;parent.document.pages.onPageAdded(args);this.pageCount.intValue=this.count;}},{key:'onPageAdded',value:function onPageAdded(args){//
}},{key:'getActualBounds',value:function getActualBounds(arg1,arg2,arg3){if(arg1 instanceof PdfPage&&typeof arg2==='boolean'){var result=void 0;var document=this.parent.document;result=this.getActualBounds(document,arg1,arg2);return result;}else{arg1=arg1;arg2=arg2;arg3=arg3;var bounds=new RectangleF(0,0,0,0);bounds.height=arg3?this.pageSettings.size.height:this.pageSettings.getActualSize().height;bounds.width=arg3?this.pageSettings.size.width:this.pageSettings.getActualSize().width;var left=this.getLeftIndentWidth(arg1,arg2,arg3);var top=this.getTopIndentHeight(arg1,arg2,arg3);var right=this.getRightIndentWidth(arg1,arg2,arg3);var bottom=this.getBottomIndentHeight(arg1,arg2,arg3);bounds.x+=left;bounds.y+=top;bounds.width-=left+right;bounds.height-=top+bottom;return bounds;}}},{key:'getLeftIndentWidth',value:function getLeftIndentWidth(document,page,includeMargins){if(document==null){throw new Error('ArgumentNullException:document');}if(page==null){throw new Error('ArgumentNullException:page');}var value=includeMargins?this.pageSettings.margins.left:0;var templateWidth=this.template.getLeft(page)!=null?this.template.getLeft(page).width:0;var docTemplateWidth=document.template.getLeft(page)!=null?document.template.getLeft(page).width:0;value+=this.template.applyDocumentLeftTemplate?Math.max(templateWidth,docTemplateWidth):templateWidth;return value;}},{key:'getTopIndentHeight',value:function getTopIndentHeight(document,page,includeMargins){if(document==null){throw new Error('ArgumentNullException:document');}if(page==null){throw new Error('ArgumentNullException:page');}var value=includeMargins?this.pageSettings.margins.top:0;var templateHeight=this.template.getTop(page)!=null?this.template.getTop(page).height:0;var docTemplateHeight=document.template.getTop(page)!=null?document.template.getTop(page).height:0;value+=this.template.applyDocumentTopTemplate?Math.max(templateHeight,docTemplateHeight):templateHeight;return value;}},{key:'getRightIndentWidth',value:function getRightIndentWidth(document,page,includeMargins){if(document==null){throw new Error('ArgumentNullException:document');}if(page==null){throw new Error('ArgumentNullException:page');}var value=includeMargins?this.pageSettings.margins.right:0;var templateWidth=this.template.getRight(page)!=null?this.template.getRight(page).width:0;var docTemplateWidth=document.template.getRight(page)!=null?document.template.getRight(page).width:0;value+=this.template.applyDocumentRightTemplate?Math.max(templateWidth,docTemplateWidth):templateWidth;return value;}},{key:'getBottomIndentHeight',value:function getBottomIndentHeight(document,page,includeMargins){if(document==null){throw new Error('ArgumentNullException:document');}if(page==null){throw new Error('ArgumentNullException:page');}var value=includeMargins?this.pageSettings.margins.bottom:0;var templateHeight=this.template.getBottom(page)!=null?this.template.getBottom(page).height:0;var docTemplateHeight=document.template.getBottom(page)!=null?document.template.getBottom(page).height:0;value+=this.template.applyDocumentBottomTemplate?Math.max(templateHeight,docTemplateHeight):templateHeight;return value;}},{key:'remove',value:function remove(page){if(page==null){throw Error('ArgumentNullException("page")');}var index=this.pdfPages.indexOf(page);this.pagesReferences.removeAt(index);var temproaryPages=[];for(var j=0;j<index;j++){temproaryPages.push(this.pdfPages[j]);}for(var _j=index+1;_j<this.pdfPages.length;_j++){temproaryPages.push(this.pdfPages[_j]);}this.pdfPages=temproaryPages;}},{key:'applyPageSettings',value:function applyPageSettings(container,parentSettings,state){var bounds=new RectangleF(state.origin,state.size);container.items.setValue(this.dictionaryProperties.mediaBox,PdfArray.fromRectangle(bounds));var rotate=0;rotate=PdfSectionCollection.rotateFactor*state.rotate;var angle=new PdfNumber(rotate);container.items.setValue(this.dictionaryProperties.rotate,angle);}},{key:'beginSave',value:function beginSave(state,writer){var doc=writer.document;this.applyPageSettings(this.section,doc.pageSettings,state);}},{key:'drawTemplates',value:function drawTemplates(page,layer,document,foreground){var documentHeaders=this.getDocumentTemplates(document,page,true,foreground);var documentTemplates=this.getDocumentTemplates(document,page,false,foreground);if(foreground){this.drawTemplatesHelper(layer,document,documentHeaders);this.drawTemplatesHelper(layer,document,documentTemplates);}else{this.drawTemplatesHelper(layer,document,documentHeaders);this.drawTemplatesHelper(layer,document,documentTemplates);}}},{key:'drawTemplatesHelper',value:function drawTemplatesHelper(layer,document,templates){if(templates!=null&&templates.length>0){var len=templates.length;for(var i=0;i<len;i++){var template=templates[i];template.draw(layer,document);}}}},{key:'parent',get:function get(){return this.sectionCollection;},set:function set(value){this.sectionCollection=value;this.section.items.setValue(this.dictionaryProperties.parent,new PdfReferenceHolder(value));}},{key:'parentDocument',get:function get(){return this.pdfDocument;}},{key:'pageSettings',get:function get(){return this.settings;},set:function set(value){if(value!=null){this.settings=value;}else{throw Error('Value can not be null.');}}},{key:'element',get:function get(){return this.section;}},{key:'count',get:function get(){return this.pagesReferences.count;}},{key:'template',get:function get(){if(this.pageTemplate==null){this.pageTemplate=new PdfSectionTemplate();}return this.pageTemplate;},set:function set(value){this.pageTemplate=value;}},{key:'document',get:function get(){return this.sectionCollection.document;}},{key:'pages',get:function get(){if(this.pagesCollection==null||typeof this.pagesCollection==='undefined'){this.pagesCollection=new PdfSectionPageCollection(this);}return this.pagesCollection;}}]);return PdfSection;}());_export('PageSettingsState',PageSettingsState=function(){_createClass(PageSettingsState,[{key:'orientation',get:function get(){return this.pageOrientation;},set:function set(value){this.pageOrientation=value;}},{key:'rotate',get:function get(){return this.pageRotate;},set:function set(value){this.pageRotate=value;}},{key:'size',get:function get(){return this.pageSize;},set:function set(value){this.pageSize=value;}},{key:'origin',get:function get(){return this.pageOrigin;},set:function set(value){this.pageOrigin=value;}}]);//Public Constructor
/**
     * New instance to store the `PageSettings`.
     * @private
     */function PageSettingsState(document){_classCallCheck(this,PageSettingsState);this.pageOrientation=document.pageSettings.orientation;this.pageRotate=document.pageSettings.rotate;this.pageSize=document.pageSettings.size;this.pageOrigin=document.pageSettings.origin;}return PageSettingsState;}());_export('PdfSectionCollection',PdfSectionCollection=function(){//constructor
/**
     * Initializes a new instance of the `PdfSectionCollection` class.
     * @private
     */function PdfSectionCollection(document){_classCallCheck(this,PdfSectionCollection);/**
         * @hidden
         * @private
         */this.sections=[];/**
         * @hidden
         * @private
         */this.dictionaryProperties=new DictionaryProperties();// if (document === null) {
//     throw new Error('ArgumentNullException : document');
// }
this.pdfDocument=document.clone();this.initialize();}//Properties
/**
     * Gets the `Section` collection.
     */_createClass(PdfSectionCollection,[{key:'initialize',value:function initialize(){this.sectionCount=new PdfNumber(0);this.sectionCollection=new PdfArray();this.pages=new PdfDictionary();this.pages.beginSave=new SaveSectionCollectionEventHandler(this);this.pages.items.setValue(this.dictionaryProperties.type,new PdfName('Pages'));this.pages.items.setValue(this.dictionaryProperties.kids,this.sectionCollection);this.pages.items.setValue(this.dictionaryProperties.count,this.sectionCount);this.pages.items.setValue(this.dictionaryProperties.resources,new PdfDictionary());this.setPageSettings(this.pages,this.pdfDocument.pageSettings);}},{key:'pdfSectionCollection',value:function pdfSectionCollection(index){if(index<0||index>=this.count){throw new Error('IndexOutOfRangeException()');}return this.sections[index];}},{key:'setPageSettings',value:function setPageSettings(container,pageSettings){// if (container === null) {
//     throw new Error('ArgumentNullException : container');
// }
// if (pageSettings === null) {
//     throw new Error('ArgumentNullException : pageSettings');
// }
var bounds=new RectangleF(new PointF(),pageSettings.size);container.items.setValue(this.dictionaryProperties.mediaBox,PdfArray.fromRectangle(bounds));}},{key:'add',value:function add(section){if(typeof section==='undefined'){var _section=new PdfSection(this.pdfDocument);this.add(_section);return _section;}else{// if (section === null) {
//     throw new Error('ArgumentNullException : section');
// }
var r=this.checkSection(section);this.sections.push(section);section.parent=this;this.sectionCollection.add(r);return this.sections.indexOf(section);}}},{key:'checkSection',value:function checkSection(section){var r=new PdfReferenceHolder(section);var contains=this.sectionCollection.contains(r);// if (contains) {
//     throw new Error('ArgumentException : The object can not be added twice to the collection,section');
// }
return r;}},{key:'countPages',value:function countPages(){var count=0;this.sections.forEach(function(n){return count+=n.count;});return count;}},{key:'beginSave',value:function beginSave(){this.sectionCount.intValue=this.countPages();}},{key:'section',get:function get(){return this.sections;}},{key:'document',get:function get(){return this.pdfDocument;}},{key:'count',get:function get(){return this.sections.length;}},{key:'element',get:function get(){return this.pages;}}]);return PdfSectionCollection;}());//Fields
/**
 * Rotate factor for page `rotation`.
 * @default 90
 * @private
 */PdfSectionCollection.rotateFactor=90;/**
 * Represents a virtual collection of all the pages in the document.
 * @private
 */_export('PdfDocumentPageCollection',PdfDocumentPageCollection=function(){//constructor
/**
     * Initializes a new instance of the `PdfPageCollection` class.
     * @private
     */function PdfDocumentPageCollection(document){_classCallCheck(this,PdfDocumentPageCollection);/**
         * It holds the page collection with the `index`.
         * @private
         */this.pdfPageCollectionIndex=new Dictionary();/**
         * Stores the previous pages's `orientation`.
         * @default PdfPageOrientation.Portrait
         * @private
         */this.previousPageOrientation=PdfPageOrientation.Portrait;this.document=document;}//Property
/**
     * Gets the total `number of the pages`.
     * @private
     */_createClass(PdfDocumentPageCollection,[{key:'add',value:function add(page){if(typeof page==='undefined'){var _page3=new PdfPage();this.add(_page3);return _page3;}else{var section=this.getLastSection();if(section.pageSettings.orientation!==this.previousPageOrientation){section=this.document.sections.add();section.pageSettings.orientation=this.document.pageSettings.orientation;}section.add(page);}}},{key:'getLastSection',value:function getLastSection(){var sc=this.document.sections;if(sc.section.length===0){sc.add();}var section=sc.section[sc.section.length-1];return section;}},{key:'onPageAdded',value:function onPageAdded(args){}// if (PageAdded !== null)
// {
//     PageAdded(this, args);
// }
/**
     * Gets the `total number of pages`.
     * @private
     */},{key:'countPages',value:function countPages(){var sc=this.document.sections;var count=0;for(var index=0;index<sc.section.length;index++){count+=sc.section[index].count;}return count;}},{key:'getPageByIndex',value:function getPageByIndex(index){return this.getPage(index);}},{key:'getPage',value:function getPage(index){if(index<0||index>=this.count){throw Error('ArgumentOutOfRangeException("index", "Value can not be less 0")');}var page=null;var sectionStartIndex=0;var sectionCount=0;var pageIndex=0;var length=this.document.sections.count;for(var i=0;i<length;i++){var section=this.document.sections.section[i];sectionCount=section.count;pageIndex=index-sectionStartIndex;// We found a section containing the page.
if(index>=sectionStartIndex&&pageIndex<sectionCount){page=section.getPages()[pageIndex];break;}sectionStartIndex+=sectionCount;}return page;}},{key:'indexOf',value:function indexOf(page){var index=-1;if(page==null){throw new Error('ArgumentNullException: page');}else{var numPages=0;for(var i=0,len=this.document.sections.count;i<len;i++){var section=this.document.sections.pdfSectionCollection(i);index=section.indexOf(page);if(index>=0){index+=numPages;break;}else{index=-1;}numPages+=section.count;}}return index;}},{key:'remove',value:function remove(page){if(page==null){throw Error('ArgumentNullException("page")');}var section=null;for(var i=0,len=this.document.sections.count;i<len;i++){section=this.document.sections.pdfSectionCollection(i);if(section.pages.contains(page)){section.pages.remove(page);break;}}return section;}},{key:'count',get:function get(){return this.countPages();}},{key:'pageCollectionIndex',get:function get(){return this.pdfPageCollectionIndex;}}]);return PdfDocumentPageCollection;}());_export('PdfCacheCollection',PdfCacheCollection=function(){// Constructors
/**
     * Initializes a new instance of the `PdfCacheCollection` class.
     * @private
     */function PdfCacheCollection(){_classCallCheck(this,PdfCacheCollection);this.referenceObjects=[];this.pdfFontCollection=new Dictionary();}// Public methods
/**
     * `Searches` for the similar cached object. If is not found - adds the object to the cache.
     * @private
     */_createClass(PdfCacheCollection,[{key:'search',value:function search(obj){var result=null;var group=this.createNewGroup();group.push(obj);return result;}},{key:'createNewGroup',value:function createNewGroup(){var group=[];this.referenceObjects.push(group);return group;}},{key:'destroy',value:function destroy(){this.pdfFontCollection=undefined;this.referenceObjects=undefined;}}]);return PdfCacheCollection;}());_export('PdfDocument',PdfDocument=function(_PdfDocumentBase){_inherits(PdfDocument,_PdfDocumentBase);function PdfDocument(isMerging){_classCallCheck(this,PdfDocument);var _this12=_possibleConstructorReturn(this,(PdfDocument.__proto__||Object.getPrototypeOf(PdfDocument)).call(this));/**
         * Default `margin` value.
         * @default 40.0
         * @private
         */_this12.defaultMargin=40.0;/**
         * Internal variable to store instance of `StreamWriter` classes..
         * @default null
         * @private
         */_this12.streamWriter=null;var _this12=_possibleConstructorReturn(this,(PdfDocument.__proto__||Object.getPrototypeOf(PdfDocument)).call(this,this));if(isMerging===true||isMerging===false||typeof isMerging!=='undefined'){var objects=new PdfMainObjectCollection();_this12.setMainObjectCollection(objects);var crossTable=new PdfCrossTable();crossTable.isMerging=isMerging;crossTable.document=_this12;_this12.setCrossTable(crossTable);var catalog=new PdfCatalog();_this12.setCatalog(catalog);objects.add(catalog);catalog.position=-1;_this12.sectionCollection=new PdfSectionCollection(_this12);_this12.documentPageCollection=new PdfDocumentPageCollection(_this12);catalog.pages=_this12.sectionCollection;}else{PdfDocument.cacheCollection=new PdfCacheCollection();_this12.constructor(false);}return _this12;}//Properties
/**
     * Gets the `default font`. It is used for complex objects when font is not explicitly defined.
     * @private
     */_createClass(PdfDocument,[{key:'docSave',value:function docSave(stream,arg2,arg3){this.checkPagesPresence();if(stream===null){throw new Error('ArgumentNullException : stream');}this.streamWriter=stream;var writer=new PdfWriter(stream);writer.document=this;if(typeof arg2==='boolean'&&typeof arg3==='undefined'){return this.crossTable.save(writer);}else{this.crossTable.save(writer,arg2);}}},{key:'checkPagesPresence',value:function checkPagesPresence(){if(this.pages.count===0){this.pages.add();}}},{key:'destroy',value:function destroy(){this.catalog=undefined;this.colorSpace=undefined;this.currentSavingObj=undefined;this.documentPageCollection=undefined;this.isStreamCopied=undefined;this.pageSettings=undefined;this.pageTemplate=undefined;this.pdfColorSpace=undefined;this.sectionCollection=undefined;PdfDocument.cache.destroy();this.crossTable.pdfObjects.destroy();PdfDocument.cache=undefined;this.streamWriter.destroy();}},{key:'sections',get:function get(){return this.sectionCollection;}},{key:'pageSettings',get:function get(){if(this.settings==null){this.settings=new PdfPageSettings(this.defaultMargin);}return this.settings;},set:function set(value){this.settings=value;}},{key:'pages',get:function get(){return this.documentPageCollection;}},{key:'colorSpace',get:function get(){if(this.pdfColorSpace===PdfColorSpace.Rgb||this.pdfColorSpace===PdfColorSpace.Cmyk||this.pdfColorSpace===PdfColorSpace.GrayScale){return this.pdfColorSpace;}else{return PdfColorSpace.Rgb;}},set:function set(value){if(value===PdfColorSpace.Rgb||value===PdfColorSpace.Cmyk||value===PdfColorSpace.GrayScale){this.pdfColorSpace=value;}else{this.pdfColorSpace=PdfColorSpace.Rgb;}}},{key:'template',get:function get(){if(this.pageTemplate==null){this.pageTemplate=new PdfDocumentTemplate();}return this.pageTemplate;},set:function set(value){this.pageTemplate=value;}}],[{key:'defaultFont',get:function get(){if(this.defaultStandardFont==null){this.defaultStandardFont=new PdfStandardFont(PdfFontFamily.Helvetica,8);}return this.defaultStandardFont;}},{key:'cache',get:function get(){if(typeof PdfDocument.cacheCollection==='undefined'||PdfDocument.cacheCollection==null){return new PdfCacheCollection();}return PdfDocument.cacheCollection;},set:function set(value){this.cacheCollection=value;}}]);return PdfDocument;}(PdfDocumentBase));/**
 * `Font` used in complex objects to draw strings and text when it is not defined explicitly.
 * @default null
 * @private
 */PdfDocument.defaultStandardFont=null;/**
 * `Metrics` of the font.
 * @private
 */_export('PdfFontMetrics',PdfFontMetrics=function(){function PdfFontMetrics(){_classCallCheck(this,PdfFontMetrics);/**
         * `Line gap`.
         * @private
         */this.lineGap=0;}//  Public methods
/**
     * Returns `ascent` taking into consideration font`s size.
     * @private
     */_createClass(PdfFontMetrics,[{key:'getAscent',value:function getAscent(format){var returnValue=this.ascent*PdfFont.charSizeMultiplier*this.getSize(format);return returnValue;}},{key:'getDescent',value:function getDescent(format){var returnValue=this.descent*PdfFont.charSizeMultiplier*this.getSize(format);return returnValue;}},{key:'getLineGap',value:function getLineGap(format){var returnValue=this.lineGap*PdfFont.charSizeMultiplier*this.getSize(format);return returnValue;}},{key:'getHeight',value:function getHeight(format){var height=void 0;var clearTypeFonts=['cambria','candara','constantia','corbel','cariadings'];var clearTypeFontCollection=[];for(var index=0;index<clearTypeFonts.length;index++){var font=clearTypeFonts[index];clearTypeFontCollection.push(font);}if(this.getDescent(format)<0){// if ((clearTypeFontCollection.indexOf(this.name.toLowerCase()) !== -1) && !this.isUnicodeFont) {
//     height = (this.GetAscent(format) - this.GetDescent(format) - this.GetLineGap(format));
// } else {
height=this.getAscent(format)-this.getDescent(format)+this.getLineGap(format);// }
}else{height=this.getAscent(format)+this.getDescent(format)+this.getLineGap(format);}return height;}},{key:'getSize',value:function getSize(format){var size=this.size;if(format!=null){switch(format.subSuperScript){case PdfSubSuperScript.SubScript:size/=this.subScriptSizeFactor;break;case PdfSubSuperScript.SuperScript:size/=this.superscriptSizeFactor;break;}}return size;}},{key:'clone',value:function clone(){var metrics=this;metrics.widthTable=WidthTable.clone();return metrics;}},{key:'widthTable',get:function get(){return this.internalWidthTable;},set:function set(value){this.internalWidthTable=value;}}]);return PdfFontMetrics;}());_export('WidthTable',WidthTable=function(){function WidthTable(){_classCallCheck(this,WidthTable);}_createClass(WidthTable,null,[{key:'clone',value:function clone(){return null;}}]);return WidthTable;}());_export('StandardWidthTable',StandardWidthTable=function(_WidthTable){_inherits(StandardWidthTable,_WidthTable);_createClass(StandardWidthTable,[{key:'items',value:function items(index){if(index<0||index>=this.widths.length){throw new Error('ArgumentOutOfRangeException:index, The character is not supported by the font.');}var result=this.widths[index];return result;}},{key:'length',get:function get(){return this.widths.length;}}]);// Constructors
/**
     * Initializes a new instance of the `StandardWidthTable` class.
     * @private
     */function StandardWidthTable(widths){_classCallCheck(this,StandardWidthTable);var _this13=_possibleConstructorReturn(this,(StandardWidthTable.__proto__||Object.getPrototypeOf(StandardWidthTable)).call(this));if(widths==null){throw new Error('ArgumentNullException:widths');}_this13.widths=widths;return _this13;}//Overrides
/**
     * `Clones` this instance of the WidthTable class.
     * @private
     */_createClass(StandardWidthTable,[{key:'clone',value:function clone(){var swt=this;swt.widths=this.widths;return swt;}},{key:'toArray',value:function toArray(){var arr=new PdfArray(this.widths);return arr;}}]);return StandardWidthTable;}(WidthTable));_export('PdfStandardFontMetricsFactory',PdfStandardFontMetricsFactory=function(){function PdfStandardFontMetricsFactory(){_classCallCheck(this,PdfStandardFontMetricsFactory);}_createClass(PdfStandardFontMetricsFactory,null,[{key:'getMetrics',value:function getMetrics(fontFamily,fontStyle,size){var metrics=null;switch(fontFamily){case PdfFontFamily.Helvetica:metrics=this.getHelveticaMetrics(fontFamily,fontStyle,size);break;case PdfFontFamily.Courier:metrics=this.getCourierMetrics(fontFamily,fontStyle,size);break;case PdfFontFamily.TimesRoman:metrics=this.getTimesMetrics(fontFamily,fontStyle,size);break;case PdfFontFamily.Symbol:metrics=this.getSymbolMetrics(fontFamily,fontStyle,size);break;case PdfFontFamily.ZapfDingbats:metrics=this.getZapfDingbatsMetrics(fontFamily,fontStyle,size);break;default:metrics=this.getHelveticaMetrics(PdfFontFamily.Helvetica,fontStyle,size);break;}metrics.name=fontFamily.toString();metrics.subScriptSizeFactor=this.subSuperScriptFactor;metrics.superscriptSizeFactor=this.subSuperScriptFactor;return metrics;}},{key:'getHelveticaMetrics',value:function getHelveticaMetrics(fontFamily,fontStyle,size){var metrics=new PdfFontMetrics();if((fontStyle&PdfFontStyle.Bold)>0&&(fontStyle&PdfFontStyle.Italic)>0){metrics.ascent=this.helveticaBoldItalicAscent;metrics.descent=this.helveticaBoldItalicDescent;metrics.postScriptName=this.helveticaBoldItalicName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.arialBoldWidth);metrics.height=metrics.ascent-metrics.descent;}else if((fontStyle&PdfFontStyle.Bold)>0){metrics.ascent=this.helveticaBoldAscent;metrics.descent=this.helveticaBoldDescent;metrics.postScriptName=this.helveticaBoldName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.arialBoldWidth);metrics.height=metrics.ascent-metrics.descent;}else if((fontStyle&PdfFontStyle.Italic)>0){metrics.ascent=this.helveticaItalicAscent;metrics.descent=this.helveticaItalicDescent;metrics.postScriptName=this.helveticaItalicName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.arialWidth);metrics.height=metrics.ascent-metrics.descent;}else{metrics.ascent=this.helveticaAscent;metrics.descent=this.helveticaDescent;metrics.postScriptName=this.helveticaName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.arialWidth);metrics.height=metrics.ascent-metrics.descent;}return metrics;}},{key:'getCourierMetrics',value:function getCourierMetrics(fontFamily,fontStyle,size){var metrics=new PdfFontMetrics();if((fontStyle&PdfFontStyle.Bold)>0&&(fontStyle&PdfFontStyle.Italic)>0){metrics.ascent=this.courierBoldItalicAscent;metrics.descent=this.courierBoldItalicDescent;metrics.postScriptName=this.courierBoldItalicName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.fixedWidth);metrics.height=metrics.ascent-metrics.descent;}else if((fontStyle&PdfFontStyle.Bold)>0){metrics.ascent=this.courierBoldAscent;metrics.descent=this.courierBoldDescent;metrics.postScriptName=this.courierBoldName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.fixedWidth);metrics.height=metrics.ascent-metrics.descent;}else if((fontStyle&PdfFontStyle.Italic)>0){metrics.ascent=this.courierItalicAscent;metrics.descent=this.courierItalicDescent;metrics.postScriptName=this.courierItalicName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.fixedWidth);metrics.height=metrics.ascent-metrics.descent;}else{metrics.ascent=this.courierAscent;metrics.descent=this.courierDescent;metrics.postScriptName=this.courierName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.fixedWidth);metrics.height=metrics.ascent-metrics.descent;}return metrics;}},{key:'getTimesMetrics',value:function getTimesMetrics(fontFamily,fontStyle,size){var metrics=new PdfFontMetrics();if((fontStyle&PdfFontStyle.Bold)>0&&(fontStyle&PdfFontStyle.Italic)>0){metrics.ascent=this.timesBoldItalicAscent;metrics.descent=this.timesBoldItalicDescent;metrics.postScriptName=this.timesBoldItalicName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.timesRomanBoldItalicWidths);metrics.height=metrics.ascent-metrics.descent;}else if((fontStyle&PdfFontStyle.Bold)>0){metrics.ascent=this.timesBoldAscent;metrics.descent=this.timesBoldDescent;metrics.postScriptName=this.timesBoldName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.timesRomanBoldWidth);metrics.height=metrics.ascent-metrics.descent;}else if((fontStyle&PdfFontStyle.Italic)>0){metrics.ascent=this.timesItalicAscent;metrics.descent=this.timesItalicDescent;metrics.postScriptName=this.timesItalicName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.timesRomanItalicWidth);metrics.height=metrics.ascent-metrics.descent;}else{metrics.ascent=this.timesAscent;metrics.descent=this.timesDescent;metrics.postScriptName=this.timesName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.timesRomanWidth);metrics.height=metrics.ascent-metrics.descent;}return metrics;}},{key:'getSymbolMetrics',value:function getSymbolMetrics(fontFamily,fontStyle,size){var metrics=new PdfFontMetrics();metrics.ascent=this.symbolAscent;metrics.descent=this.symbolDescent;metrics.postScriptName=this.symbolName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.symbolWidth);metrics.height=metrics.ascent-metrics.descent;return metrics;}},{key:'getZapfDingbatsMetrics',value:function getZapfDingbatsMetrics(fontFamily,fontStyle,size){var metrics=new PdfFontMetrics();metrics.ascent=this.zapfDingbatsAscent;metrics.descent=this.zapfDingbatsDescent;metrics.postScriptName=this.zapfDingbatsName;metrics.size=size;metrics.widthTable=new StandardWidthTable(this.zapfDingbatsWidth);metrics.height=metrics.ascent-metrics.descent;return metrics;}}]);return PdfStandardFontMetricsFactory;}());/**
 * `Multiplier` os subscript superscript.
 * @private
 */PdfStandardFontMetricsFactory.subSuperScriptFactor=1.52;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.helveticaAscent=931;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.helveticaDescent=-225;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.helveticaName='Helvetica';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.helveticaBoldAscent=962;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.helveticaBoldDescent=-228;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.helveticaBoldName='Helvetica-Bold';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.helveticaItalicAscent=931;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.helveticaItalicDescent=-225;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.helveticaItalicName='Helvetica-Oblique';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.helveticaBoldItalicAscent=962;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.helveticaBoldItalicDescent=-228;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.helveticaBoldItalicName='Helvetica-BoldOblique';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.courierAscent=805;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.courierDescent=-250;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.courierName='Courier';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.courierBoldAscent=801;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.courierBoldDescent=-250;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.courierBoldName='Courier-Bold';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.courierItalicAscent=805;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.courierItalicDescent=-250;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.courierItalicName='Courier-Oblique';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.courierBoldItalicAscent=801;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.courierBoldItalicDescent=-250;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.courierBoldItalicName='Courier-BoldOblique';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.timesAscent=898;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.timesDescent=-218;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.timesName='Times-Roman';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.timesBoldAscent=935;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.timesBoldDescent=-218;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.timesBoldName='Times-Bold';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.timesItalicAscent=883;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.timesItalicDescent=-217;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.timesItalicName='Times-Italic';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.timesBoldItalicAscent=921;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.timesBoldItalicDescent=-218;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.timesBoldItalicName='Times-BoldItalic';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.symbolAscent=1010;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.symbolDescent=-293;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.symbolName='Symbol';/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.zapfDingbatsAscent=820;/**
 * `Ascender` value for the font.
 * @private
 */PdfStandardFontMetricsFactory.zapfDingbatsDescent=-143;/**
 * `Font type`.
 * @private
 */PdfStandardFontMetricsFactory.zapfDingbatsName='ZapfDingbats';/**
 * `Arial` widths table.
 * @private
 */PdfStandardFontMetricsFactory.arialWidth=[278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584,0,556,0,222,556,333,1000,556,556,333,1000,667,333,1000,0,611,0,0,222,222,333,333,350,556,1000,333,1000,500,333,944,0,500,667,0,333,556,556,556,556,260,556,333,737,370,556,584,0,737,333,400,584,333,333,333,556,537,278,333,333,365,556,834,834,834,611,667,667,667,667,667,667,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,500,556,556,556,556,278,278,278,278,556,556,556,556,556,556,556,584,611,556,556,556,556,500,556,500];/**
 * `Arial bold` widths table.
 * @private
 */PdfStandardFontMetricsFactory.arialBoldWidth=[278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584,0,556,0,278,556,500,1000,556,556,333,1000,667,333,1000,0,611,0,0,278,278,500,500,350,556,1000,333,1000,556,333,944,0,500,667,0,333,556,556,556,556,280,556,333,737,370,556,584,0,737,333,400,584,333,333,333,611,556,278,333,333,365,556,834,834,834,611,722,722,722,722,722,722,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,556,556,556,556,556,278,278,278,278,611,611,611,611,611,611,611,584,611,611,611,611,611,556,611,556];/**
 * `Fixed` widths table.
 * @private
 */PdfStandardFontMetricsFactory.fixedWidth=[600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600];/**
 * `Times` widths table.
 * @private
 */PdfStandardFontMetricsFactory.timesRomanWidth=[250,333,408,500,500,833,778,180,333,333,500,564,250,333,250,278,500,500,500,500,500,500,500,500,500,500,278,278,564,564,564,444,921,722,667,667,722,611,556,722,722,333,389,722,611,889,722,722,556,722,667,556,611,722,722,944,722,722,611,333,278,333,469,500,333,444,500,444,500,444,333,500,500,278,278,500,278,778,500,500,500,500,333,389,278,500,500,722,500,500,444,480,200,480,541,0,500,0,333,500,444,1000,500,500,333,1000,556,333,889,0,611,0,0,333,333,444,444,350,500,1000,333,980,389,333,722,0,444,722,0,333,500,500,500,500,200,500,333,760,276,500,564,0,760,333,400,564,300,300,333,500,453,250,333,300,310,500,750,750,750,444,722,722,722,722,722,722,889,667,611,611,611,611,333,333,333,333,722,722,722,722,722,722,722,564,722,722,722,722,722,722,556,500,444,444,444,444,444,444,667,444,444,444,444,444,278,278,278,278,500,500,500,500,500,500,500,564,500,500,500,500,500,500,500,500];/**
 * `Times bold` widths table.
 * @private
 */PdfStandardFontMetricsFactory.timesRomanBoldWidth=[250,333,555,500,500,1000,833,278,333,333,500,570,250,333,250,278,500,500,500,500,500,500,500,500,500,500,333,333,570,570,570,500,930,722,667,722,722,667,611,778,778,389,500,778,667,944,722,778,611,778,722,556,667,722,722,1000,722,722,667,333,278,333,581,500,333,500,556,444,556,444,333,500,556,278,333,556,278,833,556,500,556,556,444,389,333,556,500,722,500,500,444,394,220,394,520,0,500,0,333,500,500,1000,500,500,333,1000,556,333,1000,0,667,0,0,333,333,500,500,350,500,1000,333,1000,389,333,722,0,444,722,0,333,500,500,500,500,220,500,333,747,300,500,570,0,747,333,400,570,300,300,333,556,540,250,333,300,330,500,750,750,750,500,722,722,722,722,722,722,1000,722,667,667,667,667,389,389,389,389,722,722,778,778,778,778,778,570,778,722,722,722,722,722,611,556,500,500,500,500,500,500,722,444,444,444,444,444,278,278,278,278,500,556,500,500,500,500,500,570,500,556,556,556,556,500,556,500];/**
 * `Times italic` widths table.
 * @private
 */PdfStandardFontMetricsFactory.timesRomanItalicWidth=[250,333,420,500,500,833,778,214,333,333,500,675,250,333,250,278,500,500,500,500,500,500,500,500,500,500,333,333,675,675,675,500,920,611,611,667,722,611,611,722,722,333,444,667,556,833,667,722,611,722,611,500,556,722,611,833,611,556,556,389,278,389,422,500,333,500,500,444,500,444,278,500,500,278,278,444,278,722,500,500,500,500,389,389,278,500,444,667,444,444,389,400,275,400,541,0,500,0,333,500,556,889,500,500,333,1000,500,333,944,0,556,0,0,333,333,556,556,350,500,889,333,980,389,333,667,0,389,556,0,389,500,500,500,500,275,500,333,760,276,500,675,0,760,333,400,675,300,300,333,500,523,250,333,300,310,500,750,750,750,500,611,611,611,611,611,611,889,667,611,611,611,611,333,333,333,333,722,667,722,722,722,722,722,675,722,722,722,722,722,556,611,500,500,500,500,500,500,500,667,444,444,444,444,444,278,278,278,278,500,500,500,500,500,500,500,675,500,500,500,500,500,444,500,444];/**
 * `Times bold italic` widths table.
 * @private
 */PdfStandardFontMetricsFactory.timesRomanBoldItalicWidths=[250,389,555,500,500,833,778,278,333,333,500,570,250,333,250,278,500,500,500,500,500,500,500,500,500,500,333,333,570,570,570,500,832,667,667,667,722,667,667,722,778,389,500,667,611,889,722,722,611,722,667,556,611,722,667,889,667,611,611,333,278,333,570,500,333,500,500,444,500,444,333,500,556,278,278,500,278,778,556,500,500,500,389,389,278,556,444,667,500,444,389,348,220,348,570,0,500,0,333,500,500,1000,500,500,333,1000,556,333,944,0,611,0,0,333,333,500,500,350,500,1000,333,1000,389,333,722,0,389,611,0,389,500,500,500,500,220,500,333,747,266,500,606,0,747,333,400,570,300,300,333,576,500,250,333,300,300,500,750,750,750,500,667,667,667,667,667,667,944,667,667,667,667,667,389,389,389,389,722,722,722,722,722,722,722,570,722,722,722,722,722,611,611,500,500,500,500,500,500,500,722,444,444,444,444,444,278,278,278,278,500,556,500,500,500,500,500,570,500,556,556,556,556,444,500,444];/**
 * `Symbol` widths table.
 * @private
 */PdfStandardFontMetricsFactory.symbolWidth=[250,333,713,500,549,833,778,439,333,333,500,549,250,549,250,278,500,500,500,500,500,500,500,500,500,500,278,278,549,549,549,444,549,722,667,722,612,611,763,603,722,333,631,722,686,889,722,722,768,741,556,592,611,690,439,768,645,795,611,333,863,333,658,500,500,631,549,549,494,439,521,411,603,329,603,549,549,576,521,549,549,521,549,603,439,576,713,686,493,686,494,480,200,480,549,750,620,247,549,167,713,500,753,753,753,753,1042,987,603,987,603,400,549,411,549,549,713,494,460,549,549,549,549,1000,603,1000,658,823,686,795,987,768,768,823,768,768,713,713,713,713,713,713,713,768,713,790,790,890,823,549,250,713,603,603,1042,987,603,987,603,494,329,790,790,786,713,384,384,384,384,384,384,494,494,494,494,329,274,686,686,686,384,384,384,384,384,384,494,494,494,-1];/**
 * `Zip dingbats` widths table.
 * @private
 */PdfStandardFontMetricsFactory.zapfDingbatsWidth=[278,974,961,974,980,719,789,790,791,690,960,939,549,855,911,933,911,945,974,755,846,762,761,571,677,763,760,759,754,494,552,537,577,692,786,788,788,790,793,794,816,823,789,841,823,833,816,831,923,744,723,749,790,792,695,776,768,792,759,707,708,682,701,826,815,789,789,707,687,696,689,786,787,713,791,785,791,873,761,762,762,759,759,892,892,788,784,438,138,277,415,392,392,668,668,390,390,317,317,276,276,509,509,410,410,234,234,334,334,732,544,544,910,667,760,760,776,595,694,626,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,788,894,838,1016,458,748,924,748,918,927,928,928,834,873,828,924,924,917,930,931,463,883,836,836,867,867,696,696,874,874,760,946,771,865,771,888,967,888,831,873,927,970,918];/**
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
 */_export('PdfStandardFont',PdfStandardFont=function(_PdfFont){_inherits(PdfStandardFont,_PdfFont);function PdfStandardFont(fontFamilyPrototype,size,style){_classCallCheck(this,PdfStandardFont);var _this14=_possibleConstructorReturn(this,(PdfStandardFont.__proto__||Object.getPrototypeOf(PdfStandardFont)).call(this,size,style));/**
         * Gets `ascent` of the font.
         * @private
         */_this14.dictionaryProperties=new DictionaryProperties();/**
         * Gets `encodings` for internal class use.
         * @hidden
         * @private
         */_this14.encodings=['Unknown','StandardEncoding','MacRomanEncoding','MacExpertEncoding','WinAnsiEncoding','PDFDocEncoding','IdentityH'];if(typeof fontFamilyPrototype==='number'&&typeof style==='undefined'){_this14.constructor(fontFamilyPrototype,size,PdfFontStyle.Regular);}else if(typeof fontFamilyPrototype==='number'&&typeof style!=='undefined'){var _this14=_possibleConstructorReturn(this,(PdfStandardFont.__proto__||Object.getPrototypeOf(PdfStandardFont)).call(this,size,style));_this14.pdfFontFamily=fontFamilyPrototype;_this14.checkStyle();_this14.initializeInternals();}else if(fontFamilyPrototype instanceof PdfStandardFont&&typeof style==='undefined'){_this14.constructor(fontFamilyPrototype.fontFamily,size,fontFamilyPrototype.style);}else if(fontFamilyPrototype instanceof PdfStandardFont&&typeof style!=='undefined'){_this14.constructor(fontFamilyPrototype.fontFamily,size,style);}return _possibleConstructorReturn(_this14);}//Properties
/**
     * Gets the `FontFamily`.
     * @private
     */_createClass(PdfStandardFont,[{key:'checkStyle',value:function checkStyle(){if(this.fontFamily===PdfFontFamily.Symbol||this.fontFamily===PdfFontFamily.ZapfDingbats){var style=this.style;style&=~(PdfFontStyle.Bold|PdfFontStyle.Italic);this.setStyle(style);}}},{key:'getLineWidth',value:function getLineWidth(line,format){if(line==null){throw new Error('ArgumentNullException:line');}var width=0;var name=this.name;line=PdfStandardFont.convert(line);for(var i=0,len=line.length;i<len;i++){var ch=line[i];var charWidth=this.getCharWidthInternal(ch,format);width+=charWidth;}var size=this.metrics.getSize(format);width*=PdfFont.charSizeMultiplier*size;width=this.applyFormatSettings(line,format,width);return width;}},{key:'equalsToFont',value:function equalsToFont(font){var equal=false;var stFont=font;if(stFont!=null){var fontFamilyEqual=this.fontFamily===stFont.fontFamily;var lineReducer=~(PdfFontStyle.Underline|PdfFontStyle.Strikeout);var styleEqual=(this.style&lineReducer)===(stFont.style&lineReducer);equal=fontFamilyEqual&&styleEqual;}return equal;}},{key:'initializeInternals',value:function initializeInternals(){var equalFont=null;// if (PdfDocument.EnableCache) {
equalFont=PdfDocument.cache.search(this);// }
var internals=null;// if (equalFont == null) {
// Create font metrics.
var metrics=PdfStandardFontMetricsFactory.getMetrics(this.pdfFontFamily,this.style,this.size);this.metrics=metrics;internals=this.createInternals();this.setInternals(internals);}},{key:'createInternals',value:function createInternals(){var dictionary=new PdfDictionary();dictionary.items.setValue(this.dictionaryProperties.type,new PdfName(this.dictionaryProperties.font));dictionary.items.setValue(this.dictionaryProperties.subtype,new PdfName(this.dictionaryProperties.type1));dictionary.items.setValue(this.dictionaryProperties.baseFont,new PdfName(this.metrics.postScriptName));if(this.fontFamily!==PdfFontFamily.Symbol&&this.fontFamily!==PdfFontFamily.ZapfDingbats){var encoding=this.encodings[FontEncoding.WinAnsiEncoding];dictionary.items.setValue(this.dictionaryProperties.encoding,new PdfName(encoding));}return dictionary;}},{key:'getCharWidthInternal',value:function getCharWidthInternal(charCode,format){var width=0;var code=0;code=charCode.charCodeAt(0);if(this.name==='0'||this.name==='1'||this.name==='2'||this.name==='3'||this.name==='4'){code=code-PdfStandardFont.charOffset;}code=code>=0&&code!==128?code:0;var metrics=this.metrics;var widthTable=metrics.widthTable;width=widthTable.items(code);return width;}},{key:'fontFamily',get:function get(){return this.pdfFontFamily;}}],[{key:'convert',value:function convert(text){return text;}}]);return PdfStandardFont;}(PdfFont));//Constants
/**
 * First character `position`.
 * @private
 */PdfStandardFont.charOffset=32;/**
 * `PdfAnnotation` class represents the base class for annotation objects.
 * @private
 */_export('PdfAnnotation',PdfAnnotation=function(){function PdfAnnotation(arg1){_classCallCheck(this,PdfAnnotation);// Fields
/**
         * Specifies the Internal variable to store fields of `PdfDictionaryProperties`.
         * @private
         */this.dictionaryProperties=new DictionaryProperties();/**
         * `Color` of the annotation
         * @private
         */this.pdfColor=new PdfColor(255,255,255);/**
         * `Bounds` of the annotation.
         * @private
         */this.rectangle=new RectangleF(0,0,0,0);/**
         * Parent `page` of the annotation.
         * @private
         */this.pdfPage=null;/**
         * `Brush of the text` of the annotation.
         * @default new PdfSolidBrush(new PdfColor(0, 0, 0))
         * @private
         */this.textBrush=new PdfSolidBrush(new PdfColor(0,0,0));/**
         * `Font of the text` of the annotation.
         * @default new PdfStandardFont(PdfFontFamily.TimesRoman, 10)
         * @private
         */this.textFont=new PdfStandardFont(PdfFontFamily.TimesRoman,10);/**
         * `StringFormat of the text` of the annotation.
         * @default new PdfStringFormat(PdfTextAlignment.Left)
         * @private
         */this.format=new PdfStringFormat(PdfTextAlignment.Left);/**
         * `Text` of the annotation.
         * @private
         */this.content='';/**
         * Internal variable to store `dictionary`.
         * @private
         */this.pdfDictionary=new PdfDictionary();/**
         * To specifying the `Inner color` with which to fill the annotation
         * @private
         */this.internalColor=new PdfColor();/**
         * `opacity or darkness` of the annotation.
         * @private
         * @default 1.0
         */this.darkness=1.0;if(typeof arg1==='undefined'){this.initialize();}else{this.initialize();this.bounds=arg1;}}// Properties
/**
     * `Color` of the annotation
     * @private
     */_createClass(PdfAnnotation,[{key:'initialize',value:function initialize(){this.pdfDictionary.annotationBeginSave=new SaveAnnotationEventHandler(this);this.pdfDictionary.items.setValue(this.dictionaryProperties.type,new PdfName(this.dictionaryProperties.annot));}},{key:'setPage',value:function setPage(page){this.pdfPage=page;this.pdfDictionary.items.setValue(this.dictionaryProperties.p,new PdfReferenceHolder(this.pdfPage));}},{key:'beginSave',value:function beginSave(){this.save();}},{key:'save',value:function save(){var nativeRectangle=new RectangleF(this.rectangle.x,this.rectangle.y,this.rectangle.width,this.rectangle.height);var section=this.pdfPage.section;var initialHeight=nativeRectangle.height;var tempLoacation=section.pointToNativePdf(this.page,new PointF(nativeRectangle.x,nativeRectangle.y));nativeRectangle.x=tempLoacation.x;nativeRectangle.width=tempLoacation.x+nativeRectangle.width;nativeRectangle.y=tempLoacation.y-this.page.document.pageSettings.margins.top;nativeRectangle.height=nativeRectangle.y-initialHeight;this.pdfDictionary.items.setValue(this.dictionaryProperties.rect,PdfArray.fromRectangle(nativeRectangle));this.dictionary.items.setValue(this.dictionaryProperties.ca,new PdfNumber(this.darkness));}},{key:'color',get:function get(){return this.pdfColor;},set:function set(value){this.pdfColor=value;}},{key:'innerColor',get:function get(){return this.internalColor;},set:function set(value){this.internalColor=value;}},{key:'bounds',get:function get(){return this.rectangle;},set:function set(value){this.rectangle=value;}},{key:'page',get:function get(){return this.pdfPage;}},{key:'font',get:function get(){return this.textFont;},set:function set(value){this.textFont=value;}},{key:'stringFormat',get:function get(){return this.format;},set:function set(value){this.format=value;}},{key:'brush',get:function get(){return this.textBrush;},set:function set(value){this.textBrush=value;}},{key:'text',get:function get(){return this.content;},set:function set(value){this.content=value;this.dictionary.items.setValue(this.dictionaryProperties.contents,new PdfString(this.content));}},{key:'dictionary',get:function get(){return this.pdfDictionary;},set:function set(value){this.pdfDictionary=value;}},{key:'element',get:function get(){return this.pdfDictionary;}}]);return PdfAnnotation;}());_export('PdfLinkAnnotation',PdfLinkAnnotation=function(_PdfAnnotation){_inherits(PdfLinkAnnotation,_PdfAnnotation);function PdfLinkAnnotation(rectangle){_classCallCheck(this,PdfLinkAnnotation);if(typeof rectangle==='undefined'){var _this15=_possibleConstructorReturn(this,(PdfLinkAnnotation.__proto__||Object.getPrototypeOf(PdfLinkAnnotation)).call(this));}else{var _this15=_possibleConstructorReturn(this,(PdfLinkAnnotation.__proto__||Object.getPrototypeOf(PdfLinkAnnotation)).call(this,rectangle));}return _possibleConstructorReturn(_this15);}// Implementation
/**
     * `Initializes` annotation object.
     * @private
     */_createClass(PdfLinkAnnotation,[{key:'initialize',value:function initialize(){_get(PdfLinkAnnotation.prototype.__proto__||Object.getPrototypeOf(PdfLinkAnnotation.prototype),'initialize',this).call(this);this.dictionary.items.setValue(this.dictionaryProperties.subtype,new PdfName(this.dictionaryProperties.link));}}]);return PdfLinkAnnotation;}(PdfAnnotation));_export('PdfActionLinkAnnotation',PdfActionLinkAnnotation=function(_PdfLinkAnnotation){_inherits(PdfActionLinkAnnotation,_PdfLinkAnnotation);// Constructors
/**
     * Specifies the constructor for `ActionLinkAnnotation`.
     * @private
     */function PdfActionLinkAnnotation(rectangle){_classCallCheck(this,PdfActionLinkAnnotation);var _this16=_possibleConstructorReturn(this,(PdfActionLinkAnnotation.__proto__||Object.getPrototypeOf(PdfActionLinkAnnotation)).call(this,rectangle));// Fields
/**
         * Internal variable to store annotation's `action`.
         * @default null
         * @private
         */_this16.pdfAction=null;return _this16;}//Public method
/**
     * get and set the `action`.
     * @hidden
     */_createClass(PdfActionLinkAnnotation,[{key:'getSetAction',value:function getSetAction(value){if(typeof value==='undefined'){return this.pdfAction;}else{this.pdfAction=value;}}}]);return PdfActionLinkAnnotation;}(PdfLinkAnnotation));_export('PdfDocumentLinkAnnotation',PdfDocumentLinkAnnotation=function(_PdfLinkAnnotation2){_inherits(PdfDocumentLinkAnnotation,_PdfLinkAnnotation2);function PdfDocumentLinkAnnotation(rectangle,destination){_classCallCheck(this,PdfDocumentLinkAnnotation);var _this17=_possibleConstructorReturn(this,(PdfDocumentLinkAnnotation.__proto__||Object.getPrototypeOf(PdfDocumentLinkAnnotation)).call(this,rectangle));// Fields
/**
         * `Destination` of the annotation.
         * @default null
         * @private
         */_this17.pdfDestination=null;if(typeof destination!=='undefined'){_this17.destination=destination;}return _this17;}// Properties
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
     */_createClass(PdfDocumentLinkAnnotation,[{key:'save',value:function save(){_get(PdfDocumentLinkAnnotation.prototype.__proto__||Object.getPrototypeOf(PdfDocumentLinkAnnotation.prototype),'save',this).call(this);if(this.pdfDestination!=null){this.dictionary.items.setValue(this.dictionaryProperties.dest,this.pdfDestination.element);}}},{key:'clone',value:function clone(){var annot=new PdfDocumentLinkAnnotation(this.bounds,this.destination);annot.color=this.color;annot.brush=this.brush;annot.destination=this.destination;annot.font=this.font;return annot;}},{key:'destination',get:function get(){return this.pdfDestination;},set:function set(value){// if (this.pdfDestination !== value) {
this.pdfDestination=value;// }
}}]);return PdfDocumentLinkAnnotation;}(PdfLinkAnnotation));(function(PdfLayoutType){/**
     * Specifies the type of `Paginate`.
     * @private
     */PdfLayoutType[PdfLayoutType["Paginate"]=0]="Paginate";/**
     * Specifies the type of `OnePage`.
     * @private
     */PdfLayoutType[PdfLayoutType["OnePage"]=1]="OnePage";})(PdfLayoutType||_export('PdfLayoutType',PdfLayoutType={}));/**
 * public Enum for `PdfLayoutBreakType`.
 * @private
 */(function(PdfLayoutBreakType){/**
     * Specifies the type of `FitPage`.
     * @private
     */PdfLayoutBreakType[PdfLayoutBreakType["FitPage"]=0]="FitPage";/**
     * Specifies the type of `FitElement`.
     * @private
     */PdfLayoutBreakType[PdfLayoutBreakType["FitElement"]=1]="FitElement";/**
     * Specifies the type of `FitColumnsToPage`.
     * @private
     */PdfLayoutBreakType[PdfLayoutBreakType["FitColumnsToPage"]=2]="FitColumnsToPage";})(PdfLayoutBreakType||_export('PdfLayoutBreakType',PdfLayoutBreakType={}));/**
 * ElementLayouter.ts class for EJ2-PDF
 *//**
 * Base class for `elements lay outing`.
 * @private
 */_export('ElementLayouter',ElementLayouter=function(){// Constructor
/**
     * Initializes a new instance of the `ElementLayouter` class.
     * @private
     */function ElementLayouter(element){_classCallCheck(this,ElementLayouter);this.layoutElement=element;}// Properties
/**
     * Gets the `element`.
     * @private
     */_createClass(ElementLayouter,[{key:'getElement',value:function getElement(){return this.layoutElement;}},{key:'layout',value:function layout(param,isBoundsChanged){if(typeof isBoundsChanged==='boolean'&&isBoundsChanged===true){return this.layoutInternal(param,true);}else{return this.layoutInternal(param);}}},{key:'getNextPage',value:function getNextPage(currentPage){var section=currentPage.section;var nextPage=section.add();return nextPage;}},{key:'elements',get:function get(){return this.layoutElement;}}]);return ElementLayouter;}());_export('PdfLayoutFormat',PdfLayoutFormat=function(){_createClass(PdfLayoutFormat,[{key:'layout',get:function get(){if(typeof this.layoutType==='undefined'||this.layoutType==null){this.layoutType=PdfLayoutType.Paginate;}return this.layoutType;},set:function set(value){this.layoutType=value;}},{key:'break',get:function get(){if(typeof this.breakType==='undefined'||this.boundsSet==null){this.breakType=PdfLayoutBreakType.FitPage;}return this.breakType;},set:function set(value){this.breakType=value;}},{key:'paginateBounds',get:function get(){if(typeof this.layoutPaginateBounds==='undefined'&&this.layoutPaginateBounds==null){this.layoutPaginateBounds=new RectangleF(0,0,0,0);}return this.layoutPaginateBounds;},set:function set(value){this.layoutPaginateBounds=value;this.boundsSet=true;}},{key:'usePaginateBounds',get:function get(){if(typeof this.boundsSet==='undefined'||this.boundsSet==null){this.boundsSet=false;}return this.boundsSet;}}]);function PdfLayoutFormat(baseFormat){_classCallCheck(this,PdfLayoutFormat);if(typeof baseFormat==='undefined'){//
}else{this.break=baseFormat.break;this.layout=baseFormat.layout;this.paginateBounds=baseFormat.paginateBounds;this.boundsSet=baseFormat.usePaginateBounds;}}return PdfLayoutFormat;}());_export('PdfLayoutParams',PdfLayoutParams=function(){function PdfLayoutParams(){_classCallCheck(this,PdfLayoutParams);}_createClass(PdfLayoutParams,[{key:'page',get:function get(){return this.pdfPage;},set:function set(value){this.pdfPage=value;}},{key:'bounds',get:function get(){return new RectangleF(this.layoutBounds.x,this.layoutBounds.y,this.layoutBounds.width,this.layoutBounds.height);},set:function set(value){this.layoutBounds=value;}},{key:'format',get:function get(){return this.layoutFormat;},set:function set(value){this.layoutFormat=value;}}]);return PdfLayoutParams;}());_export('PdfLayoutResult',PdfLayoutResult=function(){_createClass(PdfLayoutResult,[{key:'page',get:function get(){return this.pdfPage;}},{key:'bounds',get:function get(){return this.layoutBounds;}}]);// Constructors
/**
     * Initializes the new instance of `PdfLayoutResult` class.
     * @private
     */function PdfLayoutResult(page,bounds){_classCallCheck(this,PdfLayoutResult);this.pdfPage=page;this.layoutBounds=bounds;}return PdfLayoutResult;}());_export('PdfLayoutElement',PdfLayoutElement=function(){function PdfLayoutElement(){_classCallCheck(this,PdfLayoutElement);}_createClass(PdfLayoutElement,[{key:'drawHelper',value:function drawHelper(arg2,arg3,arg4,arg5){if(arg3 instanceof PointF&&typeof arg3.width==='undefined'&&typeof arg3==='undefined'){return this.drawHelper(arg2,arg3.x,arg3.y);}else if(typeof arg3==='number'&&typeof arg4==='number'&&typeof arg5==='undefined'){return this.drawHelper(arg2,arg3,arg4,null);}else if(arg3 instanceof RectangleF&&typeof arg3.width!=='undefined'&&typeof arg4==='undefined'){return this.drawHelper(arg2,arg3,null);}else if(arg3 instanceof PointF&&typeof arg3.width==='undefined'&&arg4 instanceof PdfLayoutFormat){return this.drawHelper(arg2,arg3.x,arg3.y,arg4);}else if(typeof arg3==='number'&&typeof arg4==='number'&&(arg5 instanceof PdfLayoutFormat||arg5==null)){var width=arg2.graphics.clientSize.width-arg3;var layoutRectangle=new RectangleF(arg3,arg4,width,0);return this.drawHelper(arg2,layoutRectangle,arg5);}else if(arg3 instanceof RectangleF&&typeof arg3.width!=='undefined'&&typeof arg4==='boolean'){this.bEmbedFonts=arg4;return this.drawHelper(arg2,arg3,null);}else{var param=new PdfLayoutParams();var temparg3=arg3;var temparg4=arg4;param.page=arg2;param.bounds=temparg3;param.format=temparg4!=null?temparg4:new PdfLayoutFormat();var result=this.layout(param);return result;}}}]);return PdfLayoutElement;}());_export('TextLayouter',TextLayouter=function(_ElementLayouter){_inherits(TextLayouter,_ElementLayouter);_createClass(TextLayouter,[{key:'element',get:function get(){return _get(TextLayouter.prototype.__proto__||Object.getPrototypeOf(TextLayouter.prototype),'getElement',this).call(this);}}]);// Constructors
/**
     * Initializes a new instance of the `TextLayouter` class.
     * @private
     */function TextLayouter(element){_classCallCheck(this,TextLayouter);return _possibleConstructorReturn(this,(TextLayouter.__proto__||Object.getPrototypeOf(TextLayouter)).call(this,element));}// Implementation
/**
     * `Layouts` the element.
     * @private
     */_createClass(TextLayouter,[{key:'layoutInternal',value:function layoutInternal(param){/* tslint:disable */this.format=this.element.stringFormat!=null&&typeof this.element.stringFormat!=='undefined'?this.element.stringFormat:null;var currentPage=param.page;var currentBounds=param.bounds;var text=this.element.value;var result=null;var pageResult=new TextPageLayoutResult();pageResult.page=currentPage;pageResult.remainder=text;for(;;){pageResult=this.layoutOnPage(text,currentPage,currentBounds,param);result=this.getLayoutResult(pageResult);break;}/* tslint:enable */return result;}},{key:'getLayoutResult',value:function getLayoutResult(pageResult){var result=new PdfTextLayoutResult(pageResult.page,pageResult.bounds,pageResult.remainder,pageResult.lastLineBounds);return result;}},{key:'layoutOnPage',value:function layoutOnPage(text,currentPage,currentBounds,param){var result=new TextPageLayoutResult();result.remainder=text;result.page=currentPage;currentBounds=this.checkCorrectBounds(currentPage,currentBounds);var layouter=new PdfStringLayouter();var stringResult=layouter.layout(text,this.element.font,this.format,currentBounds,currentPage.getClientSize().height,false,new SizeF(0,0));var textFinished=stringResult.remainder==null;var doesntFit=param.format.break===PdfLayoutBreakType.FitElement;var canDraw=!(doesntFit||stringResult.empty);// Draw the text.
var graphics=currentPage.graphics;var brush=this.element.getBrush();if(this.element instanceof PdfTextWebLink){brush.color=new PdfColor(0,0,255);}graphics.drawStringLayoutResult(stringResult,this.element.font,this.element.pen,brush,currentBounds,this.format);var lineInfo=stringResult.lines[stringResult.lineCount-1];result.lastLineBounds=graphics.getLineBounds(stringResult.lineCount-1,stringResult,this.element.font,currentBounds,this.format);result.bounds=this.getTextPageBounds(currentPage,currentBounds,stringResult);result.remainder=stringResult.remainder;result.end=textFinished;return result;}},{key:'checkCorrectBounds',value:function checkCorrectBounds(currentPage,currentBounds){var pageSize=currentPage.graphics.clientSize;currentBounds.height=currentBounds.height>0?currentBounds.height:pageSize.height-currentBounds.y;return currentBounds;}},{key:'getTextPageBounds',value:function getTextPageBounds(currentPage,currentBounds,stringResult){var textSize=stringResult.actualSize;var x=currentBounds.x;var y=currentBounds.y;var width=currentBounds.width>0?currentBounds.width:textSize.width;var height=textSize.height;var shiftedRect=currentPage.graphics.checkCorrectLayoutRectangle(textSize,currentBounds.x,currentBounds.y,this.format);// if (currentBounds.width <= 0) {
x=shiftedRect.x;// }
var verticalShift=currentPage.graphics.getTextVerticalAlignShift(textSize.height,currentBounds.height,this.format);y+=verticalShift;var bounds=new RectangleF(x,y,width,height);return bounds;}}]);return TextLayouter;}(ElementLayouter));_export('TextPageLayoutResult',TextPageLayoutResult=function TextPageLayoutResult(){_classCallCheck(this,TextPageLayoutResult);});_export('PdfTextLayoutResult',PdfTextLayoutResult=function(_PdfLayoutResult){_inherits(PdfTextLayoutResult,_PdfLayoutResult);_createClass(PdfTextLayoutResult,[{key:'remainder',get:function get(){return this.remainderText;}},{key:'lastLineBounds',get:function get(){return this.lastLineTextBounds;}}]);// Constructors
/**
     * Initializes the new instance of `PdfTextLayoutResult` class.
     * @private
     */function PdfTextLayoutResult(page,bounds,remainder,lastLineBounds){_classCallCheck(this,PdfTextLayoutResult);var _this19=_possibleConstructorReturn(this,(PdfTextLayoutResult.__proto__||Object.getPrototypeOf(PdfTextLayoutResult)).call(this,page,bounds));_this19.remainderText=remainder;_this19.lastLineTextBounds=lastLineBounds;return _this19;}return PdfTextLayoutResult;}(PdfLayoutResult));_export('PdfTextElement',PdfTextElement=function(_PdfLayoutElement){_inherits(PdfTextElement,_PdfLayoutElement);function PdfTextElement(arg1,arg2,arg3,arg4,arg5){_classCallCheck(this,PdfTextElement);var _this20=_possibleConstructorReturn(this,(PdfTextElement.__proto__||Object.getPrototypeOf(PdfTextElement)).call(this));// Fields
/**
         * `Text` data.
         * @private
         */_this20.content='';/**
         * `Value` of text data.
         * @private
         */_this20.elementValue='';/**
         * indicate whether the drawText with PointF overload is called or not.
         * @default false
         * @private
         */_this20.hasPointOverload=false;/**
         * indicate whether the PdfGridCell value is `PdfTextElement`
         * @default false
         * @private
         */_this20.isPdfTextElement=false;if(typeof arg1==='undefined'){//
}else if(typeof arg1==='string'&&typeof arg2==='undefined'){var _this20=_possibleConstructorReturn(this,(PdfTextElement.__proto__||Object.getPrototypeOf(PdfTextElement)).call(this));_this20.content=arg1;_this20.elementValue=arg1;}else if(typeof arg1==='string'&&arg2 instanceof PdfFont&&typeof arg3==='undefined'){var _this20=_possibleConstructorReturn(this,(PdfTextElement.__proto__||Object.getPrototypeOf(PdfTextElement)).call(this));_this20.content=arg1;_this20.elementValue=arg1;_this20.pdfFont=arg2;}else if(typeof arg1==='string'&&arg2 instanceof PdfFont&&arg3 instanceof PdfPen&&typeof arg4==='undefined'){var _this20=_possibleConstructorReturn(this,(PdfTextElement.__proto__||Object.getPrototypeOf(PdfTextElement)).call(this));_this20.content=arg1;_this20.elementValue=arg1;_this20.pdfFont=arg2;_this20.pdfPen=arg3;}else if(typeof arg1==='string'&&arg2 instanceof PdfFont&&arg3 instanceof PdfBrush&&typeof arg4==='undefined'){var _this20=_possibleConstructorReturn(this,(PdfTextElement.__proto__||Object.getPrototypeOf(PdfTextElement)).call(this));_this20.content=arg1;_this20.elementValue=arg1;_this20.pdfFont=arg2;_this20.pdfBrush=arg3;}else{var _this20=_possibleConstructorReturn(this,(PdfTextElement.__proto__||Object.getPrototypeOf(PdfTextElement)).call(this));_this20.content=arg1;_this20.elementValue=arg1;_this20.pdfFont=arg2;_this20.pdfPen=arg3;_this20.pdfBrush=arg4;_this20.format=arg5;}return _possibleConstructorReturn(_this20);}// Properties
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
     */_createClass(PdfTextElement,[{key:'getBrush',value:function getBrush(){return this.pdfBrush==null||typeof this.pdfBrush==='undefined'?new PdfSolidBrush(new PdfColor(0,0,0)):this.pdfBrush;}},{key:'layout',value:function layout(param){var layouter=new TextLayouter(this);var result=layouter.layout(param);return result;}},{key:'drawText',value:function drawText(arg2,arg3,arg4,arg5){if(arg3 instanceof PointF&&typeof arg3.width==='undefined'&&typeof arg4==='undefined'){this.hasPointOverload=true;return this.drawText(arg2,arg3.x,arg3.y);}else if(typeof arg3==='number'&&typeof arg4==='number'&&typeof arg5==='undefined'){this.hasPointOverload=true;return this.drawText(arg2,arg3,arg4,null);}else if(arg3 instanceof RectangleF&&typeof arg3.width!=='undefined'&&typeof arg4==='undefined'){return this.drawText(arg2,arg3,null);}else if(arg3 instanceof PointF&&typeof arg3.width==='undefined'&&arg4 instanceof PdfLayoutFormat){this.hasPointOverload=true;return this.drawText(arg2,arg3.x,arg3.y,arg4);}else if(typeof arg3==='number'&&typeof arg4==='number'&&(arg5 instanceof PdfLayoutFormat||arg5==null)){this.hasPointOverload=true;var width=arg2.graphics.clientSize.width-arg3;var layoutRectangle=new RectangleF(arg3,arg4,width,0);return this.drawText(arg2,layoutRectangle,arg5);}else if(arg3 instanceof RectangleF&&typeof arg3.width!=='undefined'&&typeof arg4==='boolean'){return this.drawText(arg2,arg3,null);}else{var layout=new PdfStringLayouter();if(this.hasPointOverload){var stringLayoutResult=layout.layout(this.value,this.font,this.stringFormat,new SizeF(arg2.graphics.clientSize.width-arg3.x,0),true,arg2.graphics.clientSize);var layoutResult=void 0;var param=new PdfLayoutParams();var temparg3=arg3;var temparg4=arg4;param.page=arg2;param.bounds=temparg3;param.format=temparg4!=null?temparg4:new PdfLayoutFormat();if(stringLayoutResult.lines.length>1){this.text=stringLayoutResult.layoutLines[0].text;if(param.bounds.y<=param.page.graphics.clientSize.height){var previousPosition=new PointF(param.bounds.x,param.bounds.y);layoutResult=this.layout(param);var bounds=new RectangleF(0,layoutResult.bounds.y+stringLayoutResult.lineHeight,arg2.graphics.clientSize.width,stringLayoutResult.lineHeight);for(var i=1;i<stringLayoutResult.lines.length;i++){param.page=layoutResult.page;param.bounds=new RectangleF(new PointF(bounds.x,bounds.y),new SizeF(bounds.width,bounds.height));this.text=stringLayoutResult.layoutLines[i].text;if(bounds.y+stringLayoutResult.lineHeight>layoutResult.page.graphics.clientSize.height){param.page=param.page.graphics.getNextPage();if(previousPosition.y>layoutResult.page.graphics.clientSize.height-layoutResult.bounds.height){bounds=new RectangleF(0,layoutResult.bounds.height,layoutResult.page.graphics.clientSize.width,stringLayoutResult.lineHeight);}else{bounds=new RectangleF(0,0,layoutResult.page.graphics.clientSize.width,stringLayoutResult.lineHeight);}param.bounds=bounds;}layoutResult=this.layout(param);if(i!==stringLayoutResult.lines.length-1){bounds=new RectangleF(0,layoutResult.bounds.y+stringLayoutResult.lineHeight,layoutResult.page.graphics.clientSize.width,stringLayoutResult.lineHeight);}else{var lineWidth=this.font.measureString(this.text,this.format).width;layoutResult=this.calculateResultBounds(layoutResult,lineWidth,layoutResult.page.graphics.clientSize.width,0);}}}return layoutResult;}else{var lineSize=this.font.measureString(this.text,this.format);if(param.bounds.y<=param.page.graphics.clientSize.height){layoutResult=this.layout(param);layoutResult=this.calculateResultBounds(layoutResult,lineSize.width,layoutResult.page.graphics.clientSize.width,0);}return layoutResult;}}else{var _layoutResult=layout.layout(this.value,this.font,this.stringFormat,new SizeF(arg3.width,0),false,arg2.graphics.clientSize);var result=void 0;var _param=new PdfLayoutParams();var _temparg11=arg3;var _temparg12=arg4;_param.page=arg2;_param.bounds=_temparg11;_param.format=_temparg12!=null?_temparg12:new PdfLayoutFormat();if(_layoutResult.lines.length>1){this.text=_layoutResult.layoutLines[0].text;if(_param.bounds.y<=_param.page.graphics.clientSize.height){var _previousPosition=new PointF(_param.bounds.x,_param.bounds.y);result=this.layout(_param);var _bounds=new RectangleF(_temparg11.x,result.bounds.y+_layoutResult.lineHeight,_temparg11.width,_layoutResult.lineHeight);for(var _i5=1;_i5<_layoutResult.lines.length;_i5++){_param.page=result.page;_param.bounds=new RectangleF(_bounds.x,_bounds.y,_bounds.width,_bounds.height);this.text=_layoutResult.layoutLines[_i5].text;if(_bounds.y+_layoutResult.lineHeight>result.page.graphics.clientSize.height){_param.page=_param.page.graphics.getNextPage();if(_previousPosition.y>result.page.graphics.clientSize.height-result.bounds.height){_bounds=new RectangleF(_temparg11.x,_layoutResult.lineHeight,_temparg11.width,_layoutResult.lineHeight);}else{_bounds=new RectangleF(_temparg11.x,0,_temparg11.width,_layoutResult.lineHeight);}_param.bounds=_bounds;}result=this.layout(_param);if(_i5!==_layoutResult.lines.length-1){_bounds=new RectangleF(_temparg11.x,result.bounds.y+_layoutResult.lineHeight,_temparg11.width,_layoutResult.lineHeight);}else{var _lineWidth=this.font.measureString(this.text,this.format).width;result=this.calculateResultBounds(result,_lineWidth,_temparg11.width,_temparg11.x);}}}return result;}else{var _lineSize=this.font.measureString(this.text,this.format);if(_param.bounds.y<=_param.page.graphics.clientSize.height){result=this.layout(_param);result=this.calculateResultBounds(result,_lineSize.width,_temparg11.width,_temparg11.x);}return result;}}}}},{key:'calculateResultBounds',value:function calculateResultBounds(result,lineWidth,maximumWidth,startPosition){if(this.stringFormat!=null&&typeof this.stringFormat!=='undefined'&&this.stringFormat.alignment===PdfTextAlignment.Center){result.bounds.x=startPosition+(maximumWidth-lineWidth)/2;result.bounds.width=lineWidth;}else if(this.stringFormat!=null&&typeof this.stringFormat!=='undefined'&&this.stringFormat.alignment===PdfTextAlignment.Right){result.bounds.x=startPosition+(maximumWidth-lineWidth);result.bounds.width=lineWidth;}else if(this.stringFormat!=null&&typeof this.stringFormat!=='undefined'&&this.stringFormat.alignment===PdfTextAlignment.Justify){result.bounds.x=startPosition;result.bounds.width=maximumWidth;}else{result.bounds.width=startPosition;result.bounds.width=lineWidth;}return result;}},{key:'text',get:function get(){return this.content;},set:function set(value){this.elementValue=value;this.content=value;}},{key:'value',get:function get(){return this.elementValue;}},{key:'pen',get:function get(){return this.pdfPen;},set:function set(value){this.pdfPen=value;}},{key:'brush',get:function get(){return this.pdfBrush;},set:function set(value){this.pdfBrush=value;}},{key:'font',get:function get(){return this.pdfFont;},set:function set(value){this.pdfFont=value;if(this.pdfFont instanceof PdfStandardFont&&this.content!=null){this.elementValue=PdfStandardFont.convert(this.content);}else{this.elementValue=this.content;}}},{key:'stringFormat',get:function get(){return this.format;},set:function set(value){this.format=value;}}]);return PdfTextElement;}(PdfLayoutElement));_export('PdfUriAnnotation',PdfUriAnnotation=function(_PdfActionLinkAnnotat){_inherits(PdfUriAnnotation,_PdfActionLinkAnnotat);_createClass(PdfUriAnnotation,[{key:'uriAction',get:function get(){if(typeof this.pdfUriAction==='undefined'){this.pdfUriAction=new PdfUriAction();}return this.pdfUriAction;}},{key:'uri',get:function get(){return this.uriAction.uri;},set:function set(value){if(this.uriAction.uri!==value){this.uriAction.uri=value;}}},{key:'action',get:function get(){return this.getSetAction();},set:function set(value){this.getSetAction(value);this.uriAction.next=value;}}]);function PdfUriAnnotation(rectangle,uri){_classCallCheck(this,PdfUriAnnotation);var _this21=_possibleConstructorReturn(this,(PdfUriAnnotation.__proto__||Object.getPrototypeOf(PdfUriAnnotation)).call(this,rectangle));if(typeof uri!=='undefined'){_this21.uri=uri;}return _this21;}// Implementation
/**
     * `Initializes` annotation object.
     * @private
     */_createClass(PdfUriAnnotation,[{key:'initialize',value:function initialize(){_get(PdfUriAnnotation.prototype.__proto__||Object.getPrototypeOf(PdfUriAnnotation.prototype),'initialize',this).call(this);this.dictionary.items.setValue(this.dictionaryProperties.subtype,new PdfName(this.dictionaryProperties.link));var tempPrimitive=this.uriAction.element;this.dictionary.items.setValue(this.dictionaryProperties.a,this.uriAction.element);}}]);return PdfUriAnnotation;}(PdfActionLinkAnnotation));_export('PdfTextWebLink',PdfTextWebLink=function(_PdfTextElement){_inherits(PdfTextWebLink,_PdfTextElement);// Constructors
/**
     * Initializes a new instance of the `PdfTextWebLink` class.
     * @private
     */function PdfTextWebLink(){_classCallCheck(this,PdfTextWebLink);var _this22=_possibleConstructorReturn(this,(PdfTextWebLink.__proto__||Object.getPrototypeOf(PdfTextWebLink)).call(this));// Fields
/**
         * Internal variable to store `Url`.
         * @default ''
         * @private
         */_this22.uniformResourceLocator='';/**
         * Internal variable to store `Uri Annotation` object.
         * @default null
         * @private
         */_this22.uriAnnotation=null;/**
         * Checks whether the drawTextWebLink method with `PointF` overload is called or not.
         * If it set as true, then the start position of each lines excluding firest line is changed as (0, Y).
         * @private
         * @hidden
         */_this22.recalculateBounds=false;_this22.defaultBorder=new PdfArray();for(var i=0;i<3;i++){_this22.defaultBorder.add(new PdfNumber(0));}return _this22;}// Properties
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
     */_createClass(PdfTextWebLink,[{key:'draw',value:function draw(arg1,arg2){if(arg1 instanceof PdfPage){var layout=new PdfStringLayouter();var previousFontStyle=this.font.style;if(arg2 instanceof PointF){this.recalculateBounds=true;this.font.style=PdfFontStyle.Underline;var layoutResult=layout.layout(this.value,this.font,this.stringFormat,new SizeF(arg1.graphics.clientSize.width-arg2.x,0),true,arg1.graphics.clientSize);if(layoutResult.lines.length===1){var textSize=this.font.measureString(this.value);var rect=new RectangleF(arg2,textSize);rect=this.calculateBounds(rect,textSize.width,arg1.graphics.clientSize.width,arg2.x);this.uriAnnotation=new PdfUriAnnotation(rect,this.url);this.uriAnnotation.dictionary.items.setValue('Border',this.defaultBorder);arg1.annotations.add(this.uriAnnotation);var result=this.drawText(arg1,arg2);this.font.style=previousFontStyle;return result;}else{var _result2=this.drawMultipleLineWithPoint(layoutResult,arg1,arg2);this.font.style=previousFontStyle;return _result2;}}else{var _layoutResult2=layout.layout(this.value,this.font,this.stringFormat,new SizeF(arg2.width,0),false,new SizeF(0,0));this.font.style=PdfFontStyle.Underline;if(_layoutResult2.lines.length===1){var _textSize=this.font.measureString(this.value);var _rect=new RectangleF(new PointF(arg2.x,arg2.y),_textSize);_rect=this.calculateBounds(_rect,_textSize.width,arg2.width,arg2.x);this.uriAnnotation=new PdfUriAnnotation(_rect,this.url);this.uriAnnotation.dictionary.items.setValue('Border',this.defaultBorder);arg1.annotations.add(this.uriAnnotation);var returnValue=this.drawText(arg1,arg2);this.font.style=previousFontStyle;return returnValue;}else{var _returnValue=this.drawMultipleLineWithBounds(_layoutResult2,arg1,arg2);this.font.style=previousFontStyle;return _returnValue;}}}else{var page=new PdfPage();page=arg1.page;return this.draw(page,arg2);}}},{key:'drawMultipleLineWithPoint',value:function drawMultipleLineWithPoint(result,page,location){var layoutResult=void 0;for(var i=0;i<result.layoutLines.length;i++){var size=this.font.measureString(result.lines[i].text);var bounds=new RectangleF(location,size);if(i!==0){bounds.x=0;}this.text=result.lines[i].text;if(bounds.y+size.height>page.graphics.clientSize.height){if(i!==0){page=page.graphics.getNextPage();bounds=new RectangleF(0,0,page.graphics.clientSize.width,size.height);location.y=0;}else{break;}}bounds=this.calculateBounds(bounds,size.width,page.graphics.clientSize.width,bounds.x);this.uriAnnotation=new PdfUriAnnotation(bounds,this.url);this.uriAnnotation.dictionary.items.setValue('Border',this.defaultBorder);page.annotations.add(this.uriAnnotation);if(i!==0){layoutResult=this.drawText(page,new PointF(0,bounds.y));}else{layoutResult=this.drawText(page,bounds.x,bounds.y);}location.y+=size.height;}return layoutResult;}},{key:'drawMultipleLineWithBounds',value:function drawMultipleLineWithBounds(result,page,bounds){var layoutResult=void 0;for(var i=0;i<result.layoutLines.length;i++){var size=this.font.measureString(result.lines[i].text);var internalBounds=new RectangleF(new PointF(bounds.x,bounds.y),size);internalBounds=this.calculateBounds(internalBounds,size.width,bounds.width,bounds.x);this.text=result.lines[i].text;if(bounds.y+size.height>page.graphics.clientSize.height){if(i!==0){page=page.graphics.getNextPage();bounds=new RectangleF(bounds.x,0,bounds.width,size.height);internalBounds.y=0;}else{break;}}this.uriAnnotation=new PdfUriAnnotation(internalBounds,this.url);this.uriAnnotation.dictionary.items.setValue('Border',this.defaultBorder);page.annotations.add(this.uriAnnotation);layoutResult=this.drawText(page,bounds);bounds.y+=size.height;}return layoutResult;}},{key:'calculateBounds',value:function calculateBounds(currentBounds,lineWidth,maximumWidth,startPosition){if(this.stringFormat!=null&&typeof this.stringFormat!=='undefined'&&this.stringFormat.alignment===PdfTextAlignment.Center){currentBounds.x=startPosition+(maximumWidth-lineWidth)/2;currentBounds.width=lineWidth;}else if(this.stringFormat!=null&&typeof this.stringFormat!=='undefined'&&this.stringFormat.alignment===PdfTextAlignment.Right){currentBounds.x=startPosition+(maximumWidth-lineWidth);currentBounds.width=lineWidth;}else if(this.stringFormat!=null&&typeof this.stringFormat!=='undefined'&&this.stringFormat.alignment===PdfTextAlignment.Justify){currentBounds.x=startPosition;currentBounds.width=maximumWidth;}else{currentBounds.width=startPosition;currentBounds.width=lineWidth;}return currentBounds;}},{key:'url',get:function get(){return this.uniformResourceLocator;},set:function set(value){if(value.length===0){throw new Error('ArgumentException : Url - string can not be empty');}this.uniformResourceLocator=value;}}]);return PdfTextWebLink;}(PdfTextElement));PdfNumbersConvertor=function(){function PdfNumbersConvertor(){_classCallCheck(this,PdfNumbersConvertor);}_createClass(PdfNumbersConvertor,null,[{key:'convert',value:function convert(intArabic,numberStyle){var result='';switch(numberStyle){case PdfNumberStyle.None:result='';break;case PdfNumberStyle.Numeric:result=intArabic.toString();break;case PdfNumberStyle.LowerLatin:result=this.arabicToLetter(intArabic).toLowerCase();break;case PdfNumberStyle.LowerRoman:result=this.arabicToRoman(intArabic).toLowerCase();break;case PdfNumberStyle.UpperLatin:result=this.arabicToLetter(intArabic);break;case PdfNumberStyle.UpperRoman:result=this.arabicToRoman(intArabic);break;}return result;}},{key:'arabicToRoman',value:function arabicToRoman(intArabic){var retval='';retval+=this.generateNumber(intArabic,1000,'M');retval+=this.generateNumber(intArabic,900,'CM');retval+=this.generateNumber(intArabic,500,'D');retval+=this.generateNumber(intArabic,400,'CD');retval+=this.generateNumber(intArabic,100,'C');retval+=this.generateNumber(intArabic,90,'XC');retval+=this.generateNumber(intArabic,50,'L');retval+=this.generateNumber(intArabic,40,'XL');retval+=this.generateNumber(intArabic,10,'X');retval+=this.generateNumber(intArabic,9,'IX');retval+=this.generateNumber(intArabic,5,'V');retval+=this.generateNumber(intArabic,4,'IV');retval+=this.generateNumber(intArabic,1,'I');return retval.toString();}},{key:'arabicToLetter',value:function arabicToLetter(arabic){var stack=this.convertToLetter(arabic);var result='';while(stack.length>0){var num=stack.pop();result=this.appendChar(result,num);}return result.toString();}},{key:'generateNumber',value:function generateNumber(value,magnitude,letter){var numberstring='';while(value>=magnitude){value-=magnitude;numberstring+=letter;}return numberstring.toString();}},{key:'convertToLetter',value:function convertToLetter(arabic){if(arabic<=0){throw Error('ArgumentOutOfRangeException-arabic, Value can not be less 0');}var stack=[];while(arabic>this.letterLimit){var remainder=arabic%this.letterLimit;if(remainder===0.0){arabic=arabic/this.letterLimit-1;remainder=this.letterLimit;}else{arabic/=this.letterLimit;}stack.push(remainder);}stack.push(arabic);return stack;}},{key:'appendChar',value:function appendChar(builder,value){var letter=String.fromCharCode(PdfNumbersConvertor.acsiiStartIndex+value);builder+=letter;return builder;}}]);return PdfNumbersConvertor;}();// Fields
/**
 * numbers of letters in english [readonly].
 * @default = 26.0
 * @private
 */PdfNumbersConvertor.letterLimit=26.0;/**
 * Resturns `acsii start index` value.
 * @default 64
 * @private
 */PdfNumbersConvertor.acsiiStartIndex=65-1;/**
 * Represent class to store information about `template and value pairs`.
 * @private
 */PdfTemplateValuePair=function(){function PdfTemplateValuePair(template,value){_classCallCheck(this,PdfTemplateValuePair);// Fields
/**
         * Internal variable to store template.
         * @default null
         * @private
         */this.pdfTemplate=null;/**
         * Intenal variable to store value.
         * @private
         */this.content='';if(typeof template==='undefined'){//
}else{this.template=template;this.value=value;}}// Properties
/**
     * Gets or sets the template.
     * @private
     */_createClass(PdfTemplateValuePair,[{key:'template',get:function get(){return this.pdfTemplate;},set:function set(value){this.pdfTemplate=value;}},{key:'value',get:function get(){return this.content;},set:function set(value){this.content=value;}}]);return PdfTemplateValuePair;}();PdfMultipleValueField=function(_PdfAutomaticField){_inherits(PdfMultipleValueField,_PdfAutomaticField);function PdfMultipleValueField(){_classCallCheck(this,PdfMultipleValueField);var _this23=_possibleConstructorReturn(this,(PdfMultipleValueField.__proto__||Object.getPrototypeOf(PdfMultipleValueField)).call(this));//  Fields
/**
         * Stores the instance of dictionary values of `graphics and template value pair`.
         * @private
         */_this23.list=new TemporaryDictionary();return _this23;}// Implementation
/* tslint:disable */_createClass(PdfMultipleValueField,[{key:'performDraw',value:function performDraw(graphics,location,scalingX,scalingY){_get(PdfMultipleValueField.prototype.__proto__||Object.getPrototypeOf(PdfMultipleValueField.prototype),'performDrawHelper',this).call(this,graphics,location,scalingX,scalingY);var value=this.getValue(graphics);var template=new PdfTemplate(this.getSize());this.list.setValue(graphics,new PdfTemplateValuePair(template,value));var size=this.getSize();template.graphics.drawString(value,this.getFont(),this.pen,this.getBrush(),0,0,size.width,size.height,this.stringFormat);var drawLocation=new PointF(location.x+this.location.x,location.y+this.location.y);graphics.drawPdfTemplate(template,drawLocation,new SizeF(template.width*scalingX,template.height*scalingY));}}]);return PdfMultipleValueField;}(PdfAutomaticField);_export('PdfPageNumberField',PdfPageNumberField=function(_PdfMultipleValueFiel){_inherits(PdfPageNumberField,_PdfMultipleValueFiel);function PdfPageNumberField(font,arg2){_classCallCheck(this,PdfPageNumberField);var _this24=_possibleConstructorReturn(this,(PdfPageNumberField.__proto__||Object.getPrototypeOf(PdfPageNumberField)).call(this));// Fields
/**
         * Stores the number style of the page number field.
         * @private
         */_this24.internalNumberStyle=PdfNumberStyle.Numeric;if(typeof arg2==='undefined'){_this24.font=font;}else if(arg2 instanceof PdfBrush){_this24.font=font;_this24.brush=arg2;}else{_this24.font=font;_this24.bounds=arg2;}return _this24;}// Properties
/**
     * Gets and sets the number style of the page number field.
     * @private
     */_createClass(PdfPageNumberField,[{key:'getValue',value:function getValue(graphics){var result=null;var page=this.getPageFromGraphics(graphics);result=this.internalGetValue(page);return result;}},{key:'internalGetValue',value:function internalGetValue(page){var document=page.document;var pageIndex=document.pages.indexOf(page)+1;return PdfNumbersConvertor.convert(pageIndex,this.numberStyle);}},{key:'numberStyle',get:function get(){return this.internalNumberStyle;},set:function set(value){this.internalNumberStyle=value;}}]);return PdfPageNumberField;}(PdfMultipleValueField));_export('PdfCompositeField',PdfCompositeField=function(_PdfMultipleValueFiel2){_inherits(PdfCompositeField,_PdfMultipleValueFiel2);// Constructor
/**
     * Initialize a new instance of `PdfCompositeField` class.
     * @param font Font of the field.
     * @param brush Color of the field.
     * @param text Content of the field.
     * @param list List of the automatic fields in specific order based on the text content.
     */function PdfCompositeField(font,brush,text){_classCallCheck(this,PdfCompositeField);var _this25=_possibleConstructorReturn(this,(PdfCompositeField.__proto__||Object.getPrototypeOf(PdfCompositeField)).call(this));// Fields
/**
         * Stores the array of automatic fields.
         * @private
         */_this25.internalAutomaticFields=null;/**
         * Stores the text value of the field.
         * @private
         */_this25.internalText='';_this25.font=font;_this25.brush=brush;_this25.text=text;for(var _len=arguments.length,list=Array(_len>3?_len-3:0),_key=3;_key<_len;_key++){list[_key-3]=arguments[_key];}_this25.automaticFields=list;return _this25;}// Properties
/**
     * Gets and sets the content of the field.
     * @public
     */_createClass(PdfCompositeField,[{key:'getValue',value:function getValue(graphics){var text=this.text.toString();if(typeof this.automaticFields!=='undefined'&&this.automaticFields!=null&&this.automaticFields.length>0){for(var i=0;i<this.automaticFields.length;i++){var automaticField=this.automaticFields[i];text=text.replace('{'+i+'}',automaticField.getValue(graphics));}}return text;}},{key:'text',get:function get(){return this.internalText;},set:function set(value){this.internalText=value;}},{key:'automaticFields',get:function get(){return this.internalAutomaticFields;},set:function set(value){this.internalAutomaticFields=value;}}]);return PdfCompositeField;}(PdfMultipleValueField));PdfSingleValueField=function(_PdfAutomaticField2){_inherits(PdfSingleValueField,_PdfAutomaticField2);// Constructors
function PdfSingleValueField(){_classCallCheck(this,PdfSingleValueField);var _this26=_possibleConstructorReturn(this,(PdfSingleValueField.__proto__||Object.getPrototypeOf(PdfSingleValueField)).call(this));// Fields
/* tslint:disable */_this26.list=new TemporaryDictionary();/* tslint:enable */_this26.painterGraphics=[];return _this26;}_createClass(PdfSingleValueField,[{key:'performDraw',value:function performDraw(graphics,location,scalingX,scalingY){_get(PdfSingleValueField.prototype.__proto__||Object.getPrototypeOf(PdfSingleValueField.prototype),'performDrawHelper',this).call(this,graphics,location,scalingX,scalingY);var page=this.getPageFromGraphics(graphics);var document=page.document;var textValue=this.getValue(graphics);/* tslint:disable */if(this.list.containsKey(document)){var pair=this.list.getValue(document);var drawLocation=new PointF(location.x+this.location.x,location.y+this.location.y);graphics.drawPdfTemplate(pair.template,drawLocation,new SizeF(pair.template.width*scalingX,pair.template.height*scalingY));this.painterGraphics.push(graphics);}else{var size=this.getSize();var template=new PdfTemplate(size);this.list.setValue(document,new PdfTemplateValuePair(template,textValue));template.graphics.drawString(textValue,this.getFont(),this.pen,this.getBrush(),0,0,size.width,size.height,this.stringFormat);var _drawLocation=new PointF(location.x+this.location.x,location.y+this.location.y);graphics.drawPdfTemplate(template,_drawLocation,new SizeF(template.width*scalingX,template.height*scalingY));this.painterGraphics.push(graphics);}/* tslint:enable */}}]);return PdfSingleValueField;}(PdfAutomaticField);_export('PdfPageCountField',PdfPageCountField=function(_PdfSingleValueField){_inherits(PdfPageCountField,_PdfSingleValueField);function PdfPageCountField(font,arg2){_classCallCheck(this,PdfPageCountField);var _this27=_possibleConstructorReturn(this,(PdfPageCountField.__proto__||Object.getPrototypeOf(PdfPageCountField)).call(this));// Fields
/**
         * Stores the number style of the field.
         * @private
         */_this27.internalNumberStyle=PdfNumberStyle.Numeric;if(typeof arg2==='undefined'){_this27.font=font;}else if(arg2 instanceof PdfBrush){_this27.font=font;_this27.brush=arg2;}else{_this27.font=font;_this27.bounds=arg2;}return _this27;}// Properties
/**
     * Gets and sets the number style of the field.
     * @public
     */_createClass(PdfPageCountField,[{key:'getValue',value:function getValue(graphics){var result=null;var page=this.getPageFromGraphics(graphics);var document=page.section.parent.document;var count=document.pages.count;result=PdfNumbersConvertor.convert(count,this.numberStyle);return result;}},{key:'numberStyle',get:function get(){return this.internalNumberStyle;},set:function set(value){this.internalNumberStyle=value;}}]);return PdfPageCountField;}(PdfSingleValueField));(function(PdfDestinationMode){/**
     * Specifies the type of `Location`.
     * @private
     */PdfDestinationMode[PdfDestinationMode["Location"]=0]="Location";/**
     * Specifies the type of `FitToPage`.
     * @private
     */PdfDestinationMode[PdfDestinationMode["FitToPage"]=1]="FitToPage";/**
     * Specifies the type of `FitR`.
     * @private
     */PdfDestinationMode[PdfDestinationMode["FitR"]=2]="FitR";})(PdfDestinationMode||_export('PdfDestinationMode',PdfDestinationMode={}));/**
 * `PdfDestination` class represents an anchor in the document
 * where bookmarks or annotations can direct when clicked.
 */_export('PdfDestination',PdfDestination=function(){function PdfDestination(arg1,arg2){_classCallCheck(this,PdfDestination);// Fields
/**
         * Internal variable for accessing fields from `DictionryProperties` class.
         * @private
         */this.dictionaryProperties=new DictionaryProperties();/**
         * Type of the `destination`.
         * @private
         */this.destinationMode=PdfDestinationMode.Location;/**
         * `Zoom` factor.
         * @private
         * @default 0
         */this.zoomFactor=0;/**
         * `Location` of the destination.
         * @default new PointF() with 0 ,0 as co-ordinates
         * @private
         */this.destinationLocation=new PointF(0,0);/**
         * `Bounds` of the destination as RectangleF.
         * @default RectangleF.Empty
         * @private
         */this.bounds=new RectangleF();/**
         * Pdf primitive representing `this` object.
         * @private
         */this.array=new PdfArray();if(typeof arg2==='undefined'){var angle=PdfPageRotateAngle.RotateAngle0;this.destinationLocation=new PointF(0,this.destinationLocation.y);this.pdfPage=arg1;}else if(arg2 instanceof PointF){this.constructor(arg1);this.destinationLocation=arg2;}else{this.constructor(arg1);this.bounds=arg2;}}// Properties
/**
     * Gets and Sets the `zoom` factor.
     * @private
     */_createClass(PdfDestination,[{key:'pointToNativePdf',value:function pointToNativePdf(page,point){var section=page.section;return section.pointToNativePdf(page,point);}},{key:'initializePrimitive',value:function initializePrimitive(){this.array.clear();this.array.add(new PdfReferenceHolder(this.pdfPage));switch(this.destinationMode){case PdfDestinationMode.Location:var simplePage=this.pdfPage;var point=new PointF();point=this.pointToNativePdf(simplePage,this.destinationLocation);this.array.add(new PdfName(this.dictionaryProperties.xyz));this.array.add(new PdfNumber(point.x));this.array.add(new PdfNumber(point.y));this.array.add(new PdfNumber(this.zoomFactor));break;case PdfDestinationMode.FitToPage:this.array.add(new PdfName(this.dictionaryProperties.fit));break;}}},{key:'zoom',get:function get(){return this.zoomFactor;},set:function set(value){this.zoomFactor=value;this.initializePrimitive();}},{key:'page',get:function get(){return this.pdfPage;},set:function set(value){this.pdfPage=value;this.initializePrimitive();}},{key:'mode',get:function get(){return this.destinationMode;},set:function set(value){this.destinationMode=value;this.initializePrimitive();}},{key:'location',get:function get(){return this.destinationLocation;},set:function set(value){this.destinationLocation=value;this.initializePrimitive();}},{key:'element',get:function get(){this.initializePrimitive();return this.array;}}]);return PdfDestination;}());_export('PdfPageTemplateElement',PdfPageTemplateElement=function(){_createClass(PdfPageTemplateElement,[{key:'dock',get:function get(){return this.dockStyle;},set:function set(value){// if (this.dockStyle !== value && this.Type === TemplateType.None) {
this.dockStyle=value;// Reset alignment.
this.resetAlignment();// }
}},{key:'alignment',get:function get(){return this.alignmentStyle;},set:function set(value){// if (this.alignmentStyle !== value) {
this.setAlignment(value);// }
}},{key:'foreground',get:function get(){return this.isForeground;},set:function set(value){// if (this.foreground !== value) {
this.isForeground=value;// }
}},{key:'background',get:function get(){return!this.isForeground;},set:function set(value){this.isForeground=!value;}},{key:'location',get:function get(){return this.currentLocation;},set:function set(value){if(this.type===TemplateType.None){this.currentLocation=value;}else{//
}}},{key:'x',get:function get(){var value=typeof this.currentLocation!=='undefined'?this.currentLocation.x:0;return value;},set:function set(value){if(this.type===TemplateType.None){this.currentLocation.x=value;}else{//
}}},{key:'y',get:function get(){var value=typeof this.currentLocation!=='undefined'?this.currentLocation.y:0;return value;},set:function set(value){if(this.type===TemplateType.None){this.currentLocation.y=value;}else{//
}}},{key:'size',get:function get(){return this.template.size;},set:function set(value){if(this.type===TemplateType.None){this.template.reset(value);}}},{key:'width',get:function get(){return this.template.width;},set:function set(value){if(this.template.width!==value&&this.type===TemplateType.None){var size=this.template.size;size.width=value;this.template.reset(size);}}},{key:'height',get:function get(){return this.template.height;},set:function set(value){if(this.template.height!==value&&this.type===TemplateType.None){var size=this.template.size;size.height=value;this.template.reset(size);}}},{key:'graphics',get:function get(){return this.template.graphics;}},{key:'template',get:function get(){// if (typeof this.pdfTemplate === 'undefined' || this.pdfTemplate == null) {
//     this.pdfTemplate = new PdfTemplate(this.size);
// }
return this.pdfTemplate;}},{key:'type',get:function get(){return this.templateType;},set:function set(value){this.updateDocking(value);this.templateType=value;}},{key:'bounds',get:function get(){return new RectangleF(new PointF(this.x,this.y),this.size);},set:function set(value){if(this.type===TemplateType.None){this.location=new PointF(value.x,value.y);this.size=new SizeF(value.width,value.height);}}}]);/* tslint:disable */function PdfPageTemplateElement(arg1,arg2,arg3,arg4,arg5){_classCallCheck(this,PdfPageTemplateElement);if(arg1 instanceof RectangleF&&typeof arg2==='undefined'){this.constructor(arg1.x,arg1.y,arg1.width,arg1.height);}else if(arg1 instanceof RectangleF&&arg2 instanceof PdfPage&&typeof arg3==='undefined'){this.constructor(arg1.x,arg1.y,arg1.width,arg1.height,arg2);}else if(arg1 instanceof PointF&&arg2 instanceof SizeF&&typeof arg3==='undefined'){this.constructor(arg1.x,arg1.y,arg2.width,arg2.height);}else if(arg1 instanceof PointF&&arg2 instanceof SizeF&&arg3 instanceof PdfPage&&typeof arg4==='undefined'){this.constructor(arg1.x,arg1.y,arg2.width,arg2.height,arg3);}else if(arg1 instanceof SizeF&&typeof arg2==='undefined'){this.constructor(arg1.width,arg1.height);}else if(typeof arg1==='number'&&typeof arg2==='number'&&typeof arg3==='undefined'){this.constructor(0,0,arg1,arg2);}else if(typeof arg1==='number'&&typeof arg2==='number'&&arg3 instanceof PdfPage&&typeof arg4==='undefined'){this.constructor(0,0,arg1,arg2,arg3);}else if(typeof arg1==='number'&&typeof arg2==='number'&&typeof arg3==='number'&&typeof arg4==='number'&&typeof arg5==='undefined'){this.x=arg1;this.y=arg2;this.pdfTemplate=new PdfTemplate(arg3,arg4);}else{this.x=arg1;this.y=arg2;this.pdfTemplate=new PdfTemplate(arg3,arg4);// this.graphics.colorSpace = this.page.document.colorSpace;
}/* tslint:enable */}/**
     * `Updates Dock` property if template is used as header/footer.
     * @private
     */_createClass(PdfPageTemplateElement,[{key:'updateDocking',value:function updateDocking(type){if(type!==TemplateType.None){switch(type){case TemplateType.Top:this.dock=PdfDockStyle.Top;break;case TemplateType.Bottom:this.dock=PdfDockStyle.Bottom;break;case TemplateType.Left:this.dock=PdfDockStyle.Left;break;case TemplateType.Right:this.dock=PdfDockStyle.Right;break;}this.resetAlignment();}}},{key:'resetAlignment',value:function resetAlignment(){this.alignment=PdfAlignmentStyle.None;}},{key:'setAlignment',value:function setAlignment(alignment){if(this.dock===PdfDockStyle.None){this.alignmentStyle=alignment;}else{// Template is docked and alignment has been changed.
var canBeSet=false;switch(this.dock){case PdfDockStyle.Left:canBeSet=alignment===PdfAlignmentStyle.TopLeft||alignment===PdfAlignmentStyle.MiddleLeft||alignment===PdfAlignmentStyle.BottomLeft||alignment===PdfAlignmentStyle.None;break;case PdfDockStyle.Top:canBeSet=alignment===PdfAlignmentStyle.TopLeft||alignment===PdfAlignmentStyle.TopCenter||alignment===PdfAlignmentStyle.TopRight||alignment===PdfAlignmentStyle.None;break;case PdfDockStyle.Right:canBeSet=alignment===PdfAlignmentStyle.TopRight||alignment===PdfAlignmentStyle.MiddleRight||alignment===PdfAlignmentStyle.BottomRight||alignment===PdfAlignmentStyle.None;break;case PdfDockStyle.Bottom:canBeSet=alignment===PdfAlignmentStyle.BottomLeft||alignment===PdfAlignmentStyle.BottomCenter||alignment===PdfAlignmentStyle.BottomRight||alignment===PdfAlignmentStyle.None;break;case PdfDockStyle.Fill:canBeSet=alignment===PdfAlignmentStyle.MiddleCenter||alignment===PdfAlignmentStyle.None;break;}if(canBeSet){this.alignmentStyle=alignment;}}}},{key:'draw',value:function draw(layer,document){var page=layer.page;var bounds=this.calculateBounds(page,document);if(bounds.x===-0){bounds.x=0;}layer.graphics.drawPdfTemplate(this.template,new PointF(bounds.x,bounds.y),new SizeF(bounds.width,bounds.height));}},{key:'calculateBounds',value:function calculateBounds(page,document){var result=this.bounds;if(this.alignmentStyle!==PdfAlignmentStyle.None){result=this.getAlignmentBounds(page,document);}else if(this.dockStyle!==PdfDockStyle.None){result=this.getDockBounds(page,document);}return result;}},{key:'getAlignmentBounds',value:function getAlignmentBounds(page,document){var result=this.bounds;if(this.type===TemplateType.None){result=this.getSimpleAlignmentBounds(page,document);}else{result=this.getTemplateAlignmentBounds(page,document);}return result;}},{key:'getSimpleAlignmentBounds',value:function getSimpleAlignmentBounds(page,document){var bounds=this.bounds;var pdfSection=page.section;var actualBounds=pdfSection.getActualBounds(document,page,false);var x=this.x;var y=this.y;switch(this.alignmentStyle){case PdfAlignmentStyle.TopLeft:x=0;y=0;break;case PdfAlignmentStyle.TopCenter:x=(actualBounds.width-this.width)/2;y=0;break;case PdfAlignmentStyle.TopRight:x=actualBounds.width-this.width;y=0;break;case PdfAlignmentStyle.MiddleLeft:x=0;y=(actualBounds.height-this.height)/2;break;case PdfAlignmentStyle.MiddleCenter:x=(actualBounds.width-this.width)/2;y=(actualBounds.height-this.height)/2;break;case PdfAlignmentStyle.MiddleRight:x=actualBounds.width-this.width;y=(actualBounds.height-this.height)/2;break;case PdfAlignmentStyle.BottomLeft:x=0;y=actualBounds.height-this.height;break;case PdfAlignmentStyle.BottomCenter:x=(actualBounds.width-this.width)/2;y=actualBounds.height-this.height;break;case PdfAlignmentStyle.BottomRight:x=actualBounds.width-this.width;y=actualBounds.height-this.height;break;}bounds.x=x;bounds.y=y;return bounds;}},{key:'getTemplateAlignmentBounds',value:function getTemplateAlignmentBounds(page,document){var result=this.bounds;var section=page.section;var actualBounds=section.getActualBounds(document,page,false);var x=this.x;var y=this.y;switch(this.alignmentStyle){case PdfAlignmentStyle.TopLeft:if(this.type===TemplateType.Left){x=-actualBounds.x;y=0;}else if(this.type===TemplateType.Top){x=-actualBounds.x;y=-actualBounds.y;}break;case PdfAlignmentStyle.TopCenter:x=(actualBounds.width-this.width)/2;y=-actualBounds.y;break;case PdfAlignmentStyle.TopRight:if(this.type===TemplateType.Right){x=actualBounds.width+section.getRightIndentWidth(document,page,false)-this.width;y=0;}else if(this.type===TemplateType.Top){x=actualBounds.width+section.getRightIndentWidth(document,page,false)-this.width;y=-actualBounds.y;}break;case PdfAlignmentStyle.MiddleLeft:x=-actualBounds.x;y=(actualBounds.height-this.height)/2;break;case PdfAlignmentStyle.MiddleCenter:x=(actualBounds.width-this.width)/2;y=(actualBounds.height-this.height)/2;break;case PdfAlignmentStyle.MiddleRight:x=actualBounds.width+section.getRightIndentWidth(document,page,false)-this.width;y=(actualBounds.height-this.height)/2;break;case PdfAlignmentStyle.BottomLeft:if(this.type===TemplateType.Left){x=-actualBounds.x;y=actualBounds.height-this.height;}else if(this.type===TemplateType.Bottom){x=-actualBounds.x;y=actualBounds.height+section.getBottomIndentHeight(document,page,false)-this.height;}break;case PdfAlignmentStyle.BottomCenter:x=(actualBounds.width-this.width)/2;y=actualBounds.height+section.getBottomIndentHeight(document,page,false)-this.height;break;case PdfAlignmentStyle.BottomRight:if(this.type===TemplateType.Right){x=actualBounds.width+section.getRightIndentWidth(document,page,false)-this.width;y=actualBounds.height-this.height;}else if(this.type===TemplateType.Bottom){x=actualBounds.width+section.getRightIndentWidth(document,page,false)-this.width;y=actualBounds.height+section.getBottomIndentHeight(document,page,false)-this.height;}break;}result.x=x;result.y=y;return result;}},{key:'getDockBounds',value:function getDockBounds(page,document){var result=this.bounds;if(this.type===TemplateType.None){result=this.getSimpleDockBounds(page,document);}else{result=this.getTemplateDockBounds(page,document);}return result;}},{key:'getSimpleDockBounds',value:function getSimpleDockBounds(page,document){var result=this.bounds;var section=page.section;var actualBounds=section.getActualBounds(document,page,false);var x=this.x;var y=this.y;var width=this.width;var height=this.height;switch(this.dockStyle){case PdfDockStyle.Left:x=0;y=0;width=this.width;height=actualBounds.height;break;case PdfDockStyle.Top:x=0;y=0;width=actualBounds.width;height=this.height;break;case PdfDockStyle.Right:x=actualBounds.width-this.width;y=0;width=this.width;height=actualBounds.height;break;case PdfDockStyle.Bottom:x=0;y=actualBounds.height-this.height;width=actualBounds.width;height=this.height;break;case PdfDockStyle.Fill:x=0;x=0;width=actualBounds.width;height=actualBounds.height;break;}result=new RectangleF(x,y,width,height);return result;}},{key:'getTemplateDockBounds',value:function getTemplateDockBounds(page,document){var result=this.bounds;var section=page.section;var actualBounds=section.getActualBounds(document,page,false);var actualSize=section.pageSettings.getActualSize();var x=this.x;var y=this.y;var width=this.width;var height=this.height;switch(this.dockStyle){case PdfDockStyle.Left:x=-actualBounds.x;y=0;width=this.width;height=actualBounds.height;break;case PdfDockStyle.Top:x=-actualBounds.x;y=-actualBounds.y;width=actualSize.width;height=this.height;if(actualBounds.height<0){y=-actualBounds.y+actualSize.height;}break;case PdfDockStyle.Right:x=actualBounds.width+section.getRightIndentWidth(document,page,false)-this.width;y=0;width=this.width;height=actualBounds.height;break;case PdfDockStyle.Bottom:x=-actualBounds.x;y=actualBounds.height+section.getBottomIndentHeight(document,page,false)-this.height;width=actualSize.width;height=this.height;if(actualBounds.height<0){y-=actualSize.height;}break;case PdfDockStyle.Fill:x=0;x=0;width=actualBounds.width;height=actualBounds.height;break;}result=new RectangleF(x,y,width,height);return result;}}]);return PdfPageTemplateElement;}());_export('PdfBorders',PdfBorders=function(){_createClass(PdfBorders,[{key:'left',get:function get(){return this.leftPen;},set:function set(value){this.leftPen=value;}},{key:'right',get:function get(){return this.rightPen;},set:function set(value){this.rightPen=value;}},{key:'top',get:function get(){return this.topPen;},set:function set(value){this.topPen=value;}},{key:'bottom',get:function get(){return this.bottomPen;},set:function set(value){this.bottomPen=value;}},{key:'all',set:function set(value){this.leftPen=this.rightPen=this.topPen=this.bottomPen=value;}},{key:'isAll',get:function get(){return this.leftPen===this.rightPen&&this.leftPen===this.topPen&&this.leftPen===this.bottomPen;}}],[{key:'default',get:function get(){return new PdfBorders();}}]);// Constructor
/**
     * Create a new instance for `PdfBorders` class.
     * @private
     */function PdfBorders(){_classCallCheck(this,PdfBorders);var defaultBorderPenLeft=new PdfPen(new PdfColor(0,0,0));defaultBorderPenLeft.dashStyle=PdfDashStyle.Solid;var defaultBorderPenRight=new PdfPen(new PdfColor(0,0,0));defaultBorderPenRight.dashStyle=PdfDashStyle.Solid;var defaultBorderPenTop=new PdfPen(new PdfColor(0,0,0));defaultBorderPenTop.dashStyle=PdfDashStyle.Solid;var defaultBorderPenBottom=new PdfPen(new PdfColor(0,0,0));defaultBorderPenBottom.dashStyle=PdfDashStyle.Solid;this.leftPen=defaultBorderPenLeft;this.rightPen=defaultBorderPenRight;this.topPen=defaultBorderPenTop;this.bottomPen=defaultBorderPenBottom;}return PdfBorders;}());_export('PdfPaddings',PdfPaddings=function(){_createClass(PdfPaddings,[{key:'left',get:function get(){return this.leftPad;},set:function set(value){this.leftPad=value;}},{key:'right',get:function get(){return this.rightPad;},set:function set(value){this.rightPad=value;}},{key:'top',get:function get(){return this.topPad;},set:function set(value){this.topPad=value;}},{key:'bottom',get:function get(){return this.bottomPad;},set:function set(value){this.bottomPad=value;}},{key:'all',set:function set(value){this.leftPad=this.rightPad=this.topPad=this.bottomPad=value;}}]);function PdfPaddings(left,right,top,bottom){_classCallCheck(this,PdfPaddings);if(typeof left==='undefined'){//5.76 and 0 are taken from ms-word default table margins.
this.leftPad=this.rightPad=5.76;//0.5 is set for top and bottom by default.
this.bottom=this.topPad=0.5;}else{this.leftPad=left;this.rightPad=right;this.topPad=top;this.bottomPad=bottom;}}return PdfPaddings;}());(function(PdfBorderOverlapStyle){/**
     * Specifies the type of `Overlap`.
     * @private
     */PdfBorderOverlapStyle[PdfBorderOverlapStyle["Overlap"]=0]="Overlap";/**
     * Specifies the type of `Inside`.
     * @private
     */PdfBorderOverlapStyle[PdfBorderOverlapStyle["Inside"]=1]="Inside";})(PdfBorderOverlapStyle||_export('PdfBorderOverlapStyle',PdfBorderOverlapStyle={}));/**
 * Base class for the `grid style`,
 */_export('PdfGridStyleBase',PdfGridStyleBase=function(){function PdfGridStyleBase(){_classCallCheck(this,PdfGridStyleBase);}_createClass(PdfGridStyleBase,[{key:'backgroundBrush',get:function get(){return this.gridBackgroundBrush;},set:function set(value){this.gridBackgroundBrush=value;}},{key:'textBrush',get:function get(){return this.gridTextBrush;},set:function set(value){this.gridTextBrush=value;}},{key:'textPen',get:function get(){return this.gridTextPen;},set:function set(value){this.gridTextPen=value;}},{key:'font',get:function get(){return this.gridFont;},set:function set(value){this.gridFont=value;}}]);return PdfGridStyleBase;}());_export('PdfGridStyle',PdfGridStyle=function(_PdfGridStyleBase){_inherits(PdfGridStyle,_PdfGridStyleBase);//constructor
/**
     * Initialize a new instance for `PdfGridStyle` class.
     * @private
     */function PdfGridStyle(){_classCallCheck(this,PdfGridStyle);var _this28=_possibleConstructorReturn(this,(PdfGridStyle.__proto__||Object.getPrototypeOf(PdfGridStyle)).call(this));_this28.gridBorderOverlapStyle=PdfBorderOverlapStyle.Overlap;_this28.bAllowHorizontalOverflow=false;_this28.gridHorizontalOverflowType=PdfHorizontalOverflowType.LastPage;return _this28;}//Properties
/**
     * Gets or sets the `cell spacing` of the 'PdfGrid'.
     * @private
     */_createClass(PdfGridStyle,[{key:'cellSpacing',get:function get(){if(typeof this.gridCellSpacing==='undefined'){this.gridCellSpacing=0;}return this.gridCellSpacing;},set:function set(value){this.gridCellSpacing=value;}},{key:'horizontalOverflowType',get:function get(){return this.gridHorizontalOverflowType;},set:function set(value){this.gridHorizontalOverflowType=value;}},{key:'allowHorizontalOverflow',get:function get(){return this.bAllowHorizontalOverflow;},set:function set(value){this.bAllowHorizontalOverflow=value;}},{key:'cellPadding',get:function get(){if(typeof this.gridCellPadding==='undefined'){this.gridCellPadding=new PdfPaddings();}return this.gridCellPadding;},set:function set(value){if(typeof this.gridCellPadding==='undefined'){this.gridCellPadding=new PdfPaddings();this.gridCellPadding=value;}else{this.gridCellPadding=value;}}},{key:'borderOverlapStyle',get:function get(){return this.gridBorderOverlapStyle;},set:function set(value){this.gridBorderOverlapStyle=value;}}]);return PdfGridStyle;}(PdfGridStyleBase));_export('PdfGridCellStyle',PdfGridCellStyle=function(_PdfGridStyleBase2){_inherits(PdfGridCellStyle,_PdfGridStyleBase2);/**
     * Initializes a new instance of the `PdfGridCellStyle` class.
     * @private
     */function PdfGridCellStyle(){_classCallCheck(this,PdfGridCellStyle);var _this29=_possibleConstructorReturn(this,(PdfGridCellStyle.__proto__||Object.getPrototypeOf(PdfGridCellStyle)).call(this));/**
         * @hidden
         * @private
         */_this29.gridCellBorders=PdfBorders.default;return _this29;}//Properties
/**
     * Gets the `string format` of the 'PdfGridCell'.
     * @private
     */_createClass(PdfGridCellStyle,[{key:'stringFormat',get:function get(){return this.format;},set:function set(value){this.format=value;}},{key:'borders',get:function get(){return this.gridCellBorders;},set:function set(value){this.gridCellBorders=value;}},{key:'cellPadding',get:function get(){return this.gridCellPadding;},set:function set(value){if(this.gridCellPadding==null||typeof this.gridCellPadding==='undefined'){this.gridCellPadding=new PdfPaddings();}this.gridCellPadding=value;}}]);return PdfGridCellStyle;}(PdfGridStyleBase));_export('PdfGridRowStyle',PdfGridRowStyle=function(){_createClass(PdfGridRowStyle,[{key:'setBackgroundBrush',value:function setBackgroundBrush(value){this.gridRowBackgroundBrush=value;if(typeof this.parent!=='undefined'){for(var i=0;i<this.parent.cells.count;i++){this.parent.cells.getCell(i).style.backgroundBrush=value;}}}},{key:'setTextBrush',value:function setTextBrush(value){this.gridRowTextBrush=value;if(typeof this.parent!=='undefined'){for(var i=0;i<this.parent.cells.count;i++){this.parent.cells.getCell(i).style.textBrush=value;}}}},{key:'setTextPen',value:function setTextPen(value){this.gridRowTextPen=value;if(typeof this.parent!=='undefined'){for(var i=0;i<this.parent.cells.count;i++){this.parent.cells.getCell(i).style.textPen=value;}}}},{key:'setFont',value:function setFont(value){this.gridRowFont=value;if(typeof this.parent!=='undefined'){for(var i=0;i<this.parent.cells.count;i++){this.parent.cells.getCell(i).style.font=value;}}}},{key:'setBorder',value:function setBorder(value){this.gridRowBorder=value;if(typeof this.parent!=='undefined'){for(var i=0;i<this.parent.cells.count;i++){this.parent.cells.getCell(i).style.borders=value;}}}},{key:'setParent',value:function setParent(parent){this.parent=parent;}},{key:'backgroundBrush',get:function get(){return this.gridRowBackgroundBrush;}},{key:'textBrush',get:function get(){return this.gridRowTextBrush;}},{key:'textPen',get:function get(){return this.gridRowTextPen;}},{key:'font',get:function get(){return this.gridRowFont;}},{key:'border',get:function get(){if(typeof this.gridRowBorder==='undefined'){this.setBorder(new PdfBorders());}return this.gridRowBorder;}}]);// Constructor
/**
     * Initializes a new instance of the `PdfGridRowStyle` class.
     * @private
     */function PdfGridRowStyle(){//
_classCallCheck(this,PdfGridRowStyle);}return PdfGridRowStyle;}());(function(PdfHorizontalOverflowType){/**
     * Specifies the type of `NextPage`.
     * @private
     */PdfHorizontalOverflowType[PdfHorizontalOverflowType["NextPage"]=0]="NextPage";/**
     * Specifies the type of `LastPage`.
     * @private
     */PdfHorizontalOverflowType[PdfHorizontalOverflowType["LastPage"]=1]="LastPage";})(PdfHorizontalOverflowType||_export('PdfHorizontalOverflowType',PdfHorizontalOverflowType={}));/**
 * `PdfGridCell` class represents the schema of a cell in a 'PdfGrid'.
 */_export('PdfGridCell',PdfGridCell=function(){function PdfGridCell(row){_classCallCheck(this,PdfGridCell);/**
         * `Width` of the cell.
         * @default 0
         * @private
         */this.cellWidth=0;/**
         * `Height` of the cell.
         * @default 0
         * @private
         */this.cellHeight=0;/**
         * Specifies weather the `cell is drawn`.
         * @default true
         * @private
         */this.finsh=true;/**
         * The `remaining height` of row span.
         * @default 0
         * @private
         */this.rowSpanRemainingHeight=0;if(typeof row==='undefined'){this.gridRowSpan=1;this.colSpan=1;}else{this.constructor();this.gridRow=row;}}//Properties
_createClass(PdfGridCell,[{key:'measureWidth',value:function measureWidth(){// .. Calculate the cell text width.
// .....Add border widths, cell spacings and paddings to the width.
var width=0;var layouter=new PdfStringLayouter();if(typeof this.objectValue==='string'){/* tslint:disable */var slr=layouter.layout(this.objectValue,this.getTextFont(),this.stringFormat,new SizeF(0,0),false,new SizeF(0,0));width+=slr.actualSize.width;width+=(this.style.borders.left.width+this.style.borders.right.width)*2;}else if(this.objectValue instanceof PdfImage||this.objectValue instanceof PdfBitmap){width+=this.objectValue.width;}else if(this.objectValue instanceof PdfTextWebLink){var webLink=this.objectValue;var result=layouter.layout(webLink.text,webLink.font,webLink.stringFormat,new SizeF(0,0),false,new SizeF(0,0));/* tslint:enable */width+=result.actualSize.width;width+=(this.style.borders.left.width+this.style.borders.right.width)*2;}width+=this.row.grid.style.cellPadding.left+this.row.grid.style.cellPadding.right;width+=this.row.grid.style.cellSpacing;return width;}},{key:'drawCellBackground',value:function drawCellBackground(graphics,bounds){var backgroundBrush=this.getBackgroundBrush();if(backgroundBrush!=null){graphics.drawRectangle(backgroundBrush,bounds.x,bounds.y,bounds.width,bounds.height);}}},{key:'adjustContentLayoutArea',value:function adjustContentLayoutArea(bounds){//Add Padding value to its Cell Bounds
var returnBounds=new RectangleF(bounds.x,bounds.y,bounds.width,bounds.height);if(typeof this.style.cellPadding==='undefined'||this.style.cellPadding==null){returnBounds.x+=this.gridRow.grid.style.cellPadding.left+this.cellStyle.borders.left.width;returnBounds.y+=this.gridRow.grid.style.cellPadding.top+this.cellStyle.borders.top.width;returnBounds.width-=this.gridRow.grid.style.cellPadding.right+this.gridRow.grid.style.cellPadding.left;returnBounds.width-=this.cellStyle.borders.left.width+this.cellStyle.borders.right.width;returnBounds.height-=this.gridRow.grid.style.cellPadding.bottom+this.gridRow.grid.style.cellPadding.top;returnBounds.height-=this.cellStyle.borders.top.width+this.cellStyle.borders.bottom.width;if(this.rowSpan===1){returnBounds.width-=this.style.borders.left.width;}}else{returnBounds.x+=this.style.cellPadding.left+this.cellStyle.borders.left.width;returnBounds.y+=this.style.cellPadding.top+this.cellStyle.borders.top.width;returnBounds.width-=this.style.cellPadding.right+this.style.cellPadding.left;returnBounds.width-=this.cellStyle.borders.left.width+this.cellStyle.borders.right.width;returnBounds.height-=this.style.cellPadding.bottom+this.style.cellPadding.top;returnBounds.height-=this.cellStyle.borders.top.width+this.cellStyle.borders.bottom.width;if(this.rowSpan===1){returnBounds.width-=this.style.borders.left.width;}}return returnBounds;}},{key:'draw',value:function draw(graphics,bounds,cancelSubsequentSpans){var result=null;if(this.internalIsCellMergeContinue||this.internalIsRowMergeContinue){if(this.internalIsCellMergeContinue&&this.row.grid.style.allowHorizontalOverflow){if(this.row.rowOverflowIndex>0&&this.row.cells.indexOf(this)!=this.row.rowOverflowIndex+1||this.row.rowOverflowIndex==0&&this.internalIsCellMergeContinue){return result;}}else{return result;}}//Adjust bounds with Row and Column Spacing
bounds=this.adjustOuterLayoutArea(bounds,graphics);var textPen=this.getTextPen();var textBrush=this.getTextBrush();if(typeof textPen==='undefined'&&typeof textBrush==='undefined'){textBrush=new PdfSolidBrush(new PdfColor(0,0,0));}var font=this.getTextFont();var strFormat=this.getStringFormat();var innerLayoutArea=this.adjustContentLayoutArea(bounds);this.drawCellBackground(graphics,bounds);if(typeof this.objectValue==='string'||typeof this.remaining==='string'){var temp=void 0;temp=this.remaining===''?this.remaining:this.objectValue;graphics.drawString(temp,font,textPen,textBrush,innerLayoutArea.x,innerLayoutArea.y,innerLayoutArea.width,innerLayoutArea.height,strFormat);result=graphics.stringLayoutResult;}else if(this.objectValue instanceof PdfImage||this.objectValue instanceof PdfBitmap){var imageBounds=void 0;if(this.objectValue.width<=innerLayoutArea.width){imageBounds=new RectangleF(innerLayoutArea.x,innerLayoutArea.y,this.objectValue.width,innerLayoutArea.height);}else{imageBounds=innerLayoutArea;}graphics.drawImage(this.objectValue,imageBounds.x,imageBounds.y,imageBounds.width,imageBounds.height);}else if(this.objectValue instanceof PdfTextWebLink){this.objectValue.draw(graphics.currentPage,innerLayoutArea);}if(this.style.borders!=null){this.drawCellBorders(graphics,bounds);}return result;}},{key:'drawCellBorders',value:function drawCellBorders(graphics,bounds){if(this.row.grid.style.borderOverlapStyle===PdfBorderOverlapStyle.Inside){bounds.x+=this.style.borders.left.width;bounds.y+=this.style.borders.top.width;bounds.width-=this.style.borders.right.width;bounds.height-=this.style.borders.bottom.width;}var p1=new PointF(bounds.x,bounds.y+bounds.height);var p2=new PointF(bounds.x,bounds.y);var pen=this.cellStyle.borders.left;if(this.cellStyle.borders.left.dashStyle===PdfDashStyle.Solid){pen.lineCap=PdfLineCap.Square;}// SetTransparency(ref graphics, pen);
graphics.drawLine(pen,p1,p2);p1=new PointF(bounds.x+bounds.width,bounds.y);p2=new PointF(bounds.x+bounds.width,bounds.y+bounds.height);pen=this.cellStyle.borders.right;if(bounds.x+bounds.width>graphics.clientSize.width-pen.width/2){p1=new PointF(graphics.clientSize.width-pen.width/2,bounds.y);p2=new PointF(graphics.clientSize.width-pen.width/2,bounds.y+bounds.height);}if(this.cellStyle.borders.right.dashStyle===PdfDashStyle.Solid){pen.lineCap=PdfLineCap.Square;}graphics.drawLine(pen,p1,p2);p1=new PointF(bounds.x,bounds.y);p2=new PointF(bounds.x+bounds.width,bounds.y);pen=this.cellStyle.borders.top;if(this.cellStyle.borders.top.dashStyle===PdfDashStyle.Solid){pen.lineCap=PdfLineCap.Square;}graphics.drawLine(pen,p1,p2);p1=new PointF(bounds.x+bounds.width,bounds.y+bounds.height);p2=new PointF(bounds.x,bounds.y+bounds.height);pen=this.cellStyle.borders.bottom;// if ((bounds.y + bounds.height) > (graphics.clientSize.height - (pen.width / 2))) {
//     p1 = new PointF((bounds.x + bounds.width), (graphics.clientSize.height - (pen.width / 2)));
//     p2 = new PointF(bounds.x, (graphics.clientSize.height - (pen.width / 2)));
// }
if(this.cellStyle.borders.bottom.dashStyle===PdfDashStyle.Solid){pen.lineCap=PdfLineCap.Square;}graphics.drawLine(pen,p1,p2);}},{key:'adjustOuterLayoutArea',value:function adjustOuterLayoutArea(bounds,g){var isHeader=false;var cellSpacing=this.row.grid.style.cellSpacing;if(cellSpacing>0){bounds=new RectangleF(bounds.x+cellSpacing,bounds.y+cellSpacing,bounds.width-cellSpacing,bounds.height-cellSpacing);}var currentColIndex=this.row.cells.indexOf(this);if(this.columnSpan>1){var span=this.columnSpan;var totalWidth=0;for(var i=currentColIndex;i<currentColIndex+span;i++){if(this.row.grid.style.allowHorizontalOverflow){var width=void 0;var compWidth=this.row.grid.size.width<g.clientSize.width?this.row.grid.size.width:g.clientSize.width;if(this.row.grid.size.width>g.clientSize.width){width=bounds.x+totalWidth+this.row.grid.columns.getColumn(i).width;}else{width=totalWidth+this.row.grid.columns.getColumn(i).width;}if(width>compWidth){break;}}totalWidth+=this.row.grid.columns.getColumn(i).width;}totalWidth-=this.row.grid.style.cellSpacing;bounds.width=totalWidth;}if(this.rowSpan>1||this.row.rowSpanExists){var _span=this.rowSpan;var currentRowIndex=this.row.grid.rows.rowCollection.indexOf(this.row);if(currentRowIndex==-1){currentRowIndex=this.row.grid.headers.indexOf(this.row);if(currentRowIndex!=-1){isHeader=true;}}var totalHeight=0;for(var _i6=currentRowIndex;_i6<currentRowIndex+_span;_i6++){totalHeight+=isHeader?this.row.grid.headers.getHeader(_i6).height:this.row.grid.rows.getRow(_i6).height;var row=this.row.grid.rows.getRow(_i6);var rowIndex=this.row.grid.rows.rowCollection.indexOf(row);}var cellIndex=this.row.cells.indexOf(this);totalHeight-=this.row.grid.style.cellSpacing;// if (this.row.cells.getCell(cellIndex).height > totalHeight && (!this.row.grid.rows.getRow((currentRowIndex + span) - 1).isRowHeightSet)) {
//     this.row.grid.rows.getRow((currentRowIndex + span) - 1).cells.getCell(cellIndex).rowSpanRemainingHeight = this.row.cells.getCell(cellIndex).height - totalHeight;
//     totalHeight = this.row.cells.getCell(cellIndex).height;
//     bounds.height = totalHeight;
// } else {
bounds.height=totalHeight;// }
if(!this.row.rowMergeComplete){bounds.height=totalHeight;}}return bounds;}},{key:'getTextFont',value:function getTextFont(){if(typeof this.style.font!=='undefined'&&this.style.font!=null){return this.style.font;}else if(typeof this.row.style.font!=='undefined'&&this.row.style.font!=null){return this.row.style.font;}else if(typeof this.row.grid.style.font!=='undefined'&&this.row.grid.style.font!=null){return this.row.grid.style.font;}else{return PdfDocument.defaultFont;}}},{key:'getTextBrush',value:function getTextBrush(){if(typeof this.style.textBrush!=='undefined'&&this.style.textBrush!=null){return this.style.textBrush;}else if(typeof this.row.style.textBrush!=='undefined'&&this.row.style.textBrush!=null){return this.row.style.textBrush;}else{return this.row.grid.style.textBrush;}}},{key:'getTextPen',value:function getTextPen(){if(typeof this.style.textPen!=='undefined'&&this.style.textPen!=null){return this.style.textPen;}else if(typeof this.row.style.textPen!=='undefined'&&this.row.style.textPen!=null){return this.row.style.textPen;}else{return this.row.grid.style.textPen;}}},{key:'getBackgroundBrush',value:function getBackgroundBrush(){if(typeof this.style.backgroundBrush!=='undefined'&&this.style.backgroundBrush!=null){return this.style.backgroundBrush;}else if(typeof this.row.style.backgroundBrush!=='undefined'&&this.row.style.backgroundBrush!=null){return this.row.style.backgroundBrush;}else{return this.row.grid.style.backgroundBrush;}}},{key:'getStringFormat',value:function getStringFormat(){if(typeof this.style.stringFormat!=='undefined'&&this.style.stringFormat!=null){return this.style.stringFormat;}else{return this.stringFormat;}}},{key:'measureHeight',value:function measureHeight(){// .. Calculate the cell text height.
// .....Add border widths, cell spacings and paddings to the height.
var width=this.calculateWidth();// //check whether the Current PdfGridCell has padding
if(this.style.cellPadding==null||typeof this.style.cellPadding==='undefined'){width-=this.gridRow.grid.style.cellPadding.right+this.gridRow.grid.style.cellPadding.left;width-=this.style.borders.left.width+this.style.borders.right.width;}else{width-=this.style.cellPadding.right+this.style.cellPadding.left;width-=this.style.borders.left.width+this.style.borders.right.width;}var height=0;var layouter=new PdfStringLayouter();if(typeof this.objectValue==='string'||typeof this.remainingString==='string'){var currentValue=this.objectValue;/* tslint:disable */var slr=layouter.layout(currentValue,this.getTextFont(),this.stringFormat,new SizeF(width,0),false,new SizeF(0,0));/* tslint:enable */height+=slr.actualSize.height;}else if(this.objectValue instanceof PdfImage||this.objectValue instanceof PdfBitmap){height+=this.objectValue.height;}else if(this.objectValue instanceof PdfTextWebLink){var webLink=this.objectValue;/* tslint:disable */var _slr=layouter.layout(webLink.text,webLink.font,webLink.stringFormat,new SizeF(width,0),false,new SizeF(0,0));/* tslint:enable */height+=_slr.actualSize.height;}height+=(this.style.borders.top.width+this.style.borders.bottom.width)*2;//Add padding top and bottom value to height
if(this.style.cellPadding==null||typeof this.style.cellPadding==='undefined'){height+=this.row.grid.style.cellPadding.top+this.row.grid.style.cellPadding.bottom;}else{height+=this.style.cellPadding.top+this.style.cellPadding.bottom;}height+=this.row.grid.style.cellSpacing;return height;}},{key:'calculateWidth',value:function calculateWidth(){var cellIndex=this.row.cells.indexOf(this);var columnSpan=this.columnSpan;var width=0;for(var i=0;i<columnSpan;i++){width+=this.row.grid.columns.getColumn(cellIndex+i).width;}return width;}},{key:'isCellMergeContinue',get:function get(){return this.internalIsCellMergeContinue;},set:function set(value){this.internalIsCellMergeContinue=value;}},{key:'isRowMergeContinue',get:function get(){return this.internalIsRowMergeContinue;},set:function set(value){this.internalIsRowMergeContinue=value;}},{key:'isCellMergeStart',get:function get(){return this.internalIsCellMergeStart;},set:function set(value){this.internalIsCellMergeStart=value;}},{key:'isRowMergeStart',get:function get(){return this.internalIsRowMergeStart;},set:function set(value){this.internalIsRowMergeStart=value;}},{key:'remainingString',get:function get(){return this.remaining;},set:function set(value){this.remaining=value;}},{key:'stringFormat',get:function get(){if(this.format==null){this.format=new PdfStringFormat();}return this.format;},set:function set(value){this.format=value;}},{key:'row',get:function get(){return this.gridRow;},set:function set(value){this.gridRow=value;}},{key:'value',get:function get(){return this.objectValue;},set:function set(value){this.objectValue=value;}},{key:'rowSpan',get:function get(){return this.gridRowSpan;},set:function set(value){if(value<1){throw new Error('ArgumentException : Invalid span specified, must be greater than or equal to 1');}else{this.gridRowSpan=value;this.row.rowSpanExists=true;}}},{key:'style',get:function get(){if(this.cellStyle==null){this.cellStyle=new PdfGridCellStyle();}return this.cellStyle;},set:function set(value){this.cellStyle=value;}},{key:'height',get:function get(){if(this.cellHeight===0){this.cellHeight=this.measureHeight();}return this.cellHeight;},set:function set(value){this.cellHeight=value;}},{key:'columnSpan',get:function get(){return this.colSpan;},set:function set(value){if(value<1){throw Error('Invalid span specified, must be greater than or equal to 1');}else{this.colSpan=value;this.row.columnSpanExists=true;}}},{key:'width',get:function get(){if(this.cellWidth===0||this.row.grid.isComplete){this.cellWidth=this.measureWidth();}return this.cellWidth;},set:function set(value){this.cellWidth=value;}}]);return PdfGridCell;}());_export('PdfGridCellCollection',PdfGridCellCollection=function(){//Constructor
/**
     * Initializes a new instance of the `PdfGridCellCollection` class with the row.
     * @private
     */function PdfGridCellCollection(row){_classCallCheck(this,PdfGridCellCollection);/**
         * @hidden
         * @private
         */this.cells=[];this.gridRow=row;}//Properties
/**
     * Gets the current `cell`.
     * @private
     */_createClass(PdfGridCellCollection,[{key:'getCell',value:function getCell(index){if(index<0||index>=this.count){throw new Error('IndexOutOfRangeException');}return this.cells[index];}},{key:'add',value:function add(cell){if(typeof cell==='undefined'){var tempcell=new PdfGridCell();this.add(tempcell);return cell;}else{cell.row=this.gridRow;this.cells.push(cell);}}},{key:'indexOf',value:function indexOf(cell){return this.cells.indexOf(cell);}},{key:'count',get:function get(){return this.cells.length;}}]);return PdfGridCellCollection;}());_export('PdfGridColumn',PdfGridColumn=function(){//Constructors
/**
     * Initializes a new instance of the `PdfGridColumn` class with the parent grid.
     * @private
     */function PdfGridColumn(grid){_classCallCheck(this,PdfGridColumn);/**
         * The `width` of the column.
         * @default 0
         * @private
         */this.columnWidth=0;this.grid=grid;}/**
     * Gets or sets the `width` of the 'PdfGridColumn'.
     * @private
     */_createClass(PdfGridColumn,[{key:'width',get:function get(){return this.columnWidth;},set:function set(value){this.isCustomWidth=true;this.columnWidth=value;}},{key:'format',get:function get(){if(this.stringFormat==null){this.stringFormat=new PdfStringFormat();//GetDefaultFormat();
}return this.stringFormat;},set:function set(value){this.stringFormat=value;}}]);return PdfGridColumn;}());_export('PdfGridColumnCollection',PdfGridColumnCollection=function(){//properties
//Constructors
/**
     * Initializes a new instance of the `PdfGridColumnCollection` class with the parent grid.
     * @private
     */function PdfGridColumnCollection(grid){_classCallCheck(this,PdfGridColumnCollection);/**
         * @hidden
         * @private
         */this.internalColumns=[];/**
         * @hidden
         * @private
         */this.columnWidth=0;this.grid=grid;this.internalColumns=[];}//Iplementation
/**
     * `Add` a new column to the 'PdfGrid'.
     * @private
     */_createClass(PdfGridColumnCollection,[{key:'add',value:function add(count){// public add(column : PdfGridColumn) : void
// public add(arg : number|PdfGridColumn) : void {
// if (typeof arg === 'number') {
for(var i=0;i<count;i++){this.internalColumns.push(new PdfGridColumn(this.grid));for(var index=0;index<this.grid.rows.count;index++){var row=this.grid.rows.getRow(index);var cell=new PdfGridCell();cell.value='';row.cells.add(cell);}}// } else {
//     let column : PdfGridColumn = new PdfGridColumn(this.grid);
//     this.columns.push(column);
//     return column;
// }
}},{key:'getColumn',value:function getColumn(index){if(index>=0&&index<=this.columns.length){return this.columns[index];}else{throw Error('can not get the column from the index: '+index);}}},{key:'measureColumnsWidth',value:function measureColumnsWidth(){var totalWidth=0;// this.m_grid.measureColumnsWidth();
for(var i=0,count=this.internalColumns.length;i<count;i++){totalWidth+=this.internalColumns[i].width;}return totalWidth;}},{key:'getDefaultWidths',value:function getDefaultWidths(totalWidth){var widths=[];var subFactor=this.count;for(var i=0;i<this.count;i++){if(this.grid.isPageWidth&&totalWidth>=0&&!this.internalColumns[i].isCustomWidth){this.internalColumns[i].width=0;}else{widths[i]=this.internalColumns[i].width;if(this.internalColumns[i].width>0&&this.internalColumns[i].isCustomWidth){totalWidth-=this.internalColumns[i].width;subFactor--;}else{widths[i]=0;}}}for(var _i7=0;_i7<this.count;_i7++){var width=totalWidth/subFactor;if(widths[_i7]<=0){widths[_i7]=width;}}return widths;}},{key:'count',get:function get(){return this.internalColumns.length;}},{key:'width',get:function get(){if(this.columnWidth===0){this.columnWidth=this.measureColumnsWidth();}if(this.grid.initialWidth!==0&&this.columnWidth!==this.grid.initialWidth&&!this.grid.style.allowHorizontalOverflow){this.columnWidth=this.grid.initialWidth;this.grid.isPageWidth=true;}return this.columnWidth;}},{key:'columns',get:function get(){return this.internalColumns;}}]);return PdfGridColumnCollection;}());_export('PdfGridRow',PdfGridRow=function(){//Constructor
/**
     * Initializes a new instance of the `PdfGridRow` class with the parent grid.
     * @private
     */function PdfGridRow(grid){_classCallCheck(this,PdfGridRow);/**
         * Stores the index of the overflowing row.
         * @private
         */this.gridRowOverflowIndex=0;/**
         * Check whether the row height `is set explicitly`.
         * @default false
         * @private
         */this.isRowHeightSet=false;/**
         * Check weather the row merge `is completed` or not.
         * @default true
         * @private
         */this.isRowMergeComplete=true;this.pdfGrid=grid;}//Properties
/**
     * Gets or sets a value indicating [`row span exists`].
     * @private
     */_createClass(PdfGridRow,[{key:'measureHeight',value:function measureHeight(){var rowSpanRemainingHeight=0;var rowHeight=void 0;var maxHeight=0;// if(this.cells.getCell(0).RowSpan > 1) {
//     rowHeight=0;
// } else {
rowHeight=this.cells.getCell(0).height;// }
for(var i=0;i<this.cells.count;i++){var cell=this.cells.getCell(i);//get the maximum rowspan remaining height.
if(cell.rowSpanRemainingHeight>rowSpanRemainingHeight){rowSpanRemainingHeight=cell.rowSpanRemainingHeight;}//skip the cell if row spanned.
// if (cell.IsRowMergeContinue)
//     continue; 
// if (!cell.IsRowMergeContinue)
this.rowMergeComplete=false;if(cell.rowSpan>1){if(maxHeight<cell.height){maxHeight=cell.height;}continue;}rowHeight=Math.max(rowHeight,cell.height);}if(rowHeight===0){rowHeight=maxHeight;}else if(rowSpanRemainingHeight>0){rowHeight+=rowSpanRemainingHeight;}return rowHeight;}},{key:'rowSpanExists',get:function get(){return this.bRowSpanExists;},set:function set(value){this.bRowSpanExists=value;}},{key:'cells',get:function get(){if(this.gridCells==null){this.gridCells=new PdfGridCellCollection(this);}return this.gridCells;}},{key:'grid',get:function get(){return this.pdfGrid;},set:function set(value){this.pdfGrid=value;}},{key:'style',get:function get(){if(typeof this.rowStyle==='undefined'){this.rowStyle=new PdfGridRowStyle();this.rowStyle.setParent(this);}return this.rowStyle;},set:function set(value){this.rowStyle=value;for(var i=0;i<this.cells.count;i++){this.cells.getCell(i).style.borders=value.border;if(typeof value.font!=='undefined'){this.cells.getCell(i).style.font=value.font;}if(typeof value.backgroundBrush!=='undefined'){this.cells.getCell(i).style.backgroundBrush=value.backgroundBrush;}if(typeof value.textBrush!=='undefined'){this.cells.getCell(i).style.textBrush=value.textBrush;}if(typeof value.textPen!=='undefined'){this.cells.getCell(i).style.textPen=value.textPen;}}}},{key:'rowBreakHeight',get:function get(){if(typeof this.gridRowBreakHeight==='undefined'){this.gridRowBreakHeight=0;}return this.gridRowBreakHeight;},set:function set(value){this.gridRowBreakHeight=value;}},{key:'rowOverflowIndex',get:function get(){return this.gridRowOverflowIndex;},set:function set(value){this.gridRowOverflowIndex=value;}},{key:'height',get:function get(){if(!this.isRowHeightSet){this.rowHeight=this.measureHeight();}return this.rowHeight;},set:function set(value){this.rowHeight=value;this.isRowHeightSet=true;}},{key:'columnSpanExists',get:function get(){return this.bColumnSpanExists;},set:function set(value){this.bColumnSpanExists=value;}},{key:'rowMergeComplete',get:function get(){return this.isRowMergeComplete;},set:function set(value){this.isRowMergeComplete=value;}},{key:'rowIndex',get:function get(){return this.grid.rows.rowCollection.indexOf(this);}}]);return PdfGridRow;}());_export('PdfGridRowCollection',PdfGridRowCollection=function(){// Constructor
/**
     * Initializes a new instance of the `PdfGridRowCollection` class with the parent grid.
     * @private
     */function PdfGridRowCollection(grid){_classCallCheck(this,PdfGridRowCollection);this.rows=[];this.grid=grid;}//Properties
/**
     * Gets the number of header in the `PdfGrid`.[Read-Only].
     * @private
     */_createClass(PdfGridRowCollection,[{key:'addRow',value:function addRow(arg){if(typeof arg==='undefined'){var temprow=new PdfGridRow(this.grid);this.addRow(temprow);return temprow;}else{arg.style.setBackgroundBrush(this.grid.style.backgroundBrush);arg.style.setFont(this.grid.style.font);arg.style.setTextBrush(this.grid.style.textBrush);arg.style.setTextPen(this.grid.style.textPen);if(arg.cells.count===0){for(var i=0;i<this.grid.columns.count;i++){arg.cells.add(new PdfGridCell());}}this.rows.push(arg);}}},{key:'getRow',value:function getRow(index){return this.rows[index];}},{key:'count',get:function get(){return this.rows.length;}},{key:'rowCollection',get:function get(){return this.rows;}}]);return PdfGridRowCollection;}());_export('PdfGridHeaderCollection',PdfGridHeaderCollection=function(){//constructor
/**
     * Initializes a new instance of the `PdfGridHeaderCollection` class with the parent grid.
     * @private
     */function PdfGridHeaderCollection(grid){_classCallCheck(this,PdfGridHeaderCollection);/**
         * The array to store the `rows` of the grid header.
         * @private
         */this.rows=[];this.grid=grid;this.rows=[];}//Properties
/**
     * Gets a 'PdfGridRow' object that represents the `header` row in a 'PdfGridHeaderCollection' control.[Read-Only].
     * @private
     */_createClass(PdfGridHeaderCollection,[{key:'getHeader',value:function getHeader(index){// if (index < 0 || index >= Count) {
//     throw new IndexOutOfRangeException();
// }
return this.rows[index];}},{key:'add',value:function add(arg){if(typeof arg==='number'){var row=void 0;for(var i=0;i<arg;i++){row=new PdfGridRow(this.grid);for(var j=0;j<this.grid.columns.count;j++){row.cells.add(new PdfGridCell());}this.rows.push(row);}return this.rows;}else{this.rows.push(arg);}}},{key:'indexOf',value:function indexOf(row){return this.rows.indexOf(row);}},{key:'count',get:function get(){return this.rows.length;}}]);return PdfGridHeaderCollection;}());_export('PdfGridLayoutFormat',PdfGridLayoutFormat=function(_PdfLayoutFormat){_inherits(PdfGridLayoutFormat,_PdfLayoutFormat);/**
     * Initializes a new instance of the `PdfGridLayoutFormat` class.
     * @private
     */function PdfGridLayoutFormat(baseFormat){_classCallCheck(this,PdfGridLayoutFormat);if(typeof baseFormat==='undefined'){var _this30=_possibleConstructorReturn(this,(PdfGridLayoutFormat.__proto__||Object.getPrototypeOf(PdfGridLayoutFormat)).call(this));}else{var _this30=_possibleConstructorReturn(this,(PdfGridLayoutFormat.__proto__||Object.getPrototypeOf(PdfGridLayoutFormat)).call(this,baseFormat));}return _possibleConstructorReturn(_this30);}return PdfGridLayoutFormat;}(PdfLayoutFormat));_export('PdfGrid',PdfGrid=function(_PdfLayoutElement2){_inherits(PdfGrid,_PdfLayoutElement2);//constructor
/**
     * Initialize a new instance for `PdfGrid` class.
     * @private
     */function PdfGrid(){_classCallCheck(this,PdfGrid);var _this31=_possibleConstructorReturn(this,(PdfGrid.__proto__||Object.getPrototypeOf(PdfGrid)).call(this));/**
         * @hidden
         * @private
         */_this31.gridSize=new SizeF(0,0);/**
         * @hidden
         * @private
         */_this31.isRearranged=false;/**
         * @hidden
         * @private
         */_this31.pageBounds=new RectangleF();/**
         * @hidden
         * @private
         */_this31.listOfNavigatePages=[];/**
         * @hidden
         * @private
         */_this31.flag=true;/**
         * @hidden
         * @private
         */_this31.columnRanges=[];/**
         * @hidden
         * @private
         */_this31.currentLocation=new PointF(0,0);/**
         * @hidden
         * @private
         */_this31.breakRow=true;return _this31;}//Properties
/**
     * Gets a value indicating whether the `start cell layout event` should be raised.
     * @private
     */_createClass(PdfGrid,[{key:'draw',value:function draw(arg1,arg2,arg3,arg4){if(arg2 instanceof PointF&&typeof arg2.width==='undefined'&&typeof arg3==='undefined'){return this.drawHelper(arg1,arg2.x,arg2.y);}else if(typeof arg2==='number'&&typeof arg3==='number'&&typeof arg4==='undefined'){return this.drawHelper(arg1,arg2,arg3,null);}else if(arg2 instanceof RectangleF&&typeof arg2.width!=='undefined'&&typeof arg3==='undefined'){return this.drawHelper(arg1,arg2,null);}else if(arg2 instanceof PointF&&typeof arg2.width==='undefined'&&arg3 instanceof PdfLayoutFormat){return this.drawHelper(arg1,arg2.x,arg2.y,arg3);}else if(typeof arg2==='number'&&typeof arg3==='number'&&(arg4 instanceof PdfLayoutFormat||arg4==null)){var width=arg1.graphics.clientSize.width-arg2;var layoutRectangle=new RectangleF(arg2,arg3,width,0);return this.drawHelper(arg1,layoutRectangle,arg4);}else if(arg2 instanceof RectangleF&&typeof arg2.width!=='undefined'&&typeof arg3==='boolean'){return this.drawHelper(arg1,arg2,null);}else{return this.drawHelper(arg1,arg2,arg3);}}},{key:'measure',value:function measure(){var height=0;var width=this.columns.width;for(var i=0;i<this.headers.count;i++){var row=this.headers.getHeader(i);height+=row.height;}for(var _i8=0;_i8<this.rows.count;_i8++){var _row=this.rows.getRow(_i8);height+=_row.height;}return new SizeF(width,height);}},{key:'layout',value:function layout(param,isGridLayouter){if(typeof isGridLayouter==='undefined'){this.setSpan();this.layoutFormat=param.format;this.gridLocation=param.bounds;var result=this.layout(param,true);return result;}else{return this.layoutInternal(param);}}},{key:'setSpan',value:function setSpan(){var colSpan=void 0;var rowSpan=1;var currentCellIndex=void 0;var currentRowIndex=0;var rowCount=this.headers.count;for(var i=0;i<rowCount;i++){var row=this.headers.getHeader(i);var colCount=row.cells.count;for(var j=0;j<colCount;j++){var cell=row.cells.getCell(j);//Skip setting span map for already coverted rows/columns.
if(!cell.isCellMergeContinue&&!cell.isRowMergeContinue&&(cell.columnSpan>1||cell.rowSpan>1)){if(cell.columnSpan+j>row.cells.count){throw new Error('Invalid span specified at row '+j.toString()+' column '+i.toString());}if(cell.rowSpan+i>this.headers.count){throw new Error('Invalid span specified at Header '+j.toString()+' column '+i.toString());}// if (this.rows.count !== 0 && cell.rowSpan + i > this.rows.count) {
//     throw new Error('Invalid span specified at row ' + j.toString() + ' column ' + i.toString());
// }
if(cell.columnSpan>1&&cell.rowSpan>1){colSpan=cell.columnSpan;rowSpan=cell.rowSpan;currentCellIndex=j;currentRowIndex=i;cell.isCellMergeStart=true;cell.isRowMergeStart=true;//Set Column merges for first row
while(colSpan>1){currentCellIndex++;row.cells.getCell(currentCellIndex).isCellMergeContinue=true;row.cells.getCell(currentCellIndex).isRowMergeContinue=true;row.cells.getCell(currentCellIndex).rowSpan=rowSpan;colSpan--;}currentCellIndex=j;colSpan=cell.columnSpan;//Set Row Merges and column merges foreach subsequent rows.
while(rowSpan>1){currentRowIndex++;this.headers.getHeader(currentRowIndex).cells.getCell(j).isRowMergeContinue=true;this.headers.getHeader(currentRowIndex).cells.getCell(currentCellIndex).isRowMergeContinue=true;rowSpan--;while(colSpan>1){currentCellIndex++;this.headers.getHeader(currentRowIndex).cells.getCell(currentCellIndex).isCellMergeContinue=true;this.headers.getHeader(currentRowIndex).cells.getCell(currentCellIndex).isRowMergeContinue=true;colSpan--;}colSpan=cell.columnSpan;currentCellIndex=j;}}else if(cell.columnSpan>1&&cell.rowSpan===1){colSpan=cell.columnSpan;currentCellIndex=j;cell.isCellMergeStart=true;//Set Column merges.
while(colSpan>1){currentCellIndex++;row.cells.getCell(currentCellIndex).isCellMergeContinue=true;colSpan--;}}else if(cell.columnSpan===1&&cell.rowSpan>1){rowSpan=cell.rowSpan;currentRowIndex=i;//Set row Merges.
while(rowSpan>1){currentRowIndex++;this.headers.getHeader(currentRowIndex).cells.getCell(j).isRowMergeContinue=true;rowSpan--;}}}}}}},{key:'getFormat',value:function getFormat(format){var f=format;return f;}},{key:'layoutInternal',value:function layoutInternal(param){this.initialWidth=param.bounds.width;var format=this.getFormat(param.format);this.currentPage=param.page;if(this.currentPage!==null){var pageHeight=this.currentPage.getClientSize().height;var pageWidth=this.currentPage.getClientSize().width;this.currentPageBounds=this.currentPage.getClientSize();}else{throw Error('Can not set page as null');}this.currentGraphics=this.currentPage.graphics;var index=0;index=this.currentGraphics.page.section.indexOf(this.currentGraphics.page);this.listOfNavigatePages.push(index);this.currentBounds=new RectangleF(new PointF(param.bounds.x,param.bounds.y),this.currentGraphics.clientSize);if(this.rows.count!==0){this.currentBounds.width=param.bounds.width>0?param.bounds.width:this.currentBounds.width-this.rows.getRow(0).cells.getCell(0).style.borders.left.width/2;}else if(this.headers.count!==0){this.currentBounds.width=param.bounds.width;}else{throw Error('Please add row or header into grid');}this.startLocation=new PointF(param.bounds.x,param.bounds.y);if(param.bounds.height>0&&!this.isChildGrid){this.currentBounds.height=param.bounds.height;}this.hType=this.style.horizontalOverflowType;if(!this.style.allowHorizontalOverflow){this.measureColumnsWidth(this.currentBounds);this.columnRanges.push([0,this.columns.count-1]);}else{this.measureColumnsWidth();this.determineColumnDrawRanges();}var result=this.layoutOnPage(param);return result;}},{key:'measureColumnsWidth',value:function measureColumnsWidth(bounds){if(typeof bounds!=='undefined'){var widths=this.columns.getDefaultWidths(bounds.width);var tempWidth=this.columns.getColumn(0).width;for(var i=0,count=this.columns.count;i<count;i++){this.columns.getColumn(i).width=widths[i];}}else{var _widths=[];var cellWidth=0;if(this.headers.count>0){var colCount=this.headers.getHeader(0).cells.count;var rowCount=this.headers.count;for(var _i9=0;_i9<colCount;_i9++){cellWidth=0;for(var j=0;j<rowCount;j++){var rowWidth=Math.min(this.initialWidth,this.headers.getHeader(j).cells.getCell(_i9).width);cellWidth=Math.max(cellWidth,rowWidth);}_widths[_i9]=cellWidth;}}else{var _colCount=this.rows.getRow(0).cells.count;var _rowCount=this.rows.count;for(var _i10=0;_i10<_colCount;_i10++){cellWidth=0;for(var _j2=0;_j2<_rowCount;_j2++){var _rowWidth=Math.min(this.initialWidth,this.rows.getRow(_j2).cells.getCell(_i10).width);cellWidth=Math.max(cellWidth,_rowWidth);}_widths[_i10]=cellWidth;}}cellWidth=0;for(var _i11=0,_colCount2=this.columns.count;_i11<_colCount2;_i11++){for(var _j3=0,_rowCount2=this.rows.count;_j3<_rowCount2;_j3++){if(this.rows.getRow(_j3).cells.getCell(_i11).columnSpan==1||this.rows.getRow(_j3).cells.getCell(_i11).value!==null||this.rows.getRow(_j3).cells.getCell(_i11).rowSpan>=1){if(this.rows.getRow(_j3).cells.getCell(_i11).value!==null&&!this.rows.getRow(_j3).grid.style.allowHorizontalOverflow){var value=this.rows.getRow(_j3).grid.style.cellPadding.right+this.rows.getRow(_j3).grid.style.cellPadding.left+this.rows.getRow(_j3).cells.getCell(_i11).style.borders.left.width/2+this.gridLocation.x;this.rows.getRow(_j3).cells.getCell(_i11).value.initialWidth=this.initialWidth-value;}var _rowWidth2=0;var internalWidth=this.rows.getRow(_j3).cells.getCell(_i11).width;internalWidth+=this.rows.getRow(_j3).cells.getCell(_i11).style.borders.left.width;internalWidth+=this.rows.getRow(_j3).cells.getCell(_i11).style.borders.right.width;var internalHeight=this.rows.getRow(_j3).cells.getCell(_i11).height;internalHeight+=this.rows.getRow(_j3).cells.getCell(_i11).style.borders.top.width;internalHeight+=this.rows.getRow(_j3).cells.getCell(_i11).style.borders.bottom.width;var isCorrectWidth=internalWidth+this.gridLocation.x>this.currentGraphics.clientSize.width;var isCorrectHeight=internalHeight+this.gridLocation.y>this.currentGraphics.clientSize.height;if(isCorrectWidth||isCorrectHeight){throw Error('Image size exceeds client size of the page. Can not insert this image');}_rowWidth2=Math.min(this.initialWidth,this.rows.getRow(_j3).cells.getCell(_i11).width);cellWidth=Math.max(_widths[_i11],Math.max(cellWidth,_rowWidth2));cellWidth=Math.max(this.columns.getColumn(_i11).width,cellWidth);}}_widths[_i11]=cellWidth;cellWidth=0;}for(var _i12=0,_count=this.columns.count;_i12<_count;_i12++){this.columns.getColumn(_i12).width=_widths[_i12];}}}},{key:'determineColumnDrawRanges',value:function determineColumnDrawRanges(){var startColumn=0;var endColumn=0;var cellWidths=0;var availableWidth=this.currentGraphics.clientSize.width-this.currentBounds.x;for(var i=0;i<this.columns.count;i++){cellWidths+=this.columns.getColumn(i).width;if(cellWidths>=availableWidth){var subWidths=0;for(var j=startColumn;j<=i;j++){subWidths+=this.columns.getColumn(j).width;if(subWidths>availableWidth){break;}endColumn=j;}this.columnRanges.push([startColumn,endColumn]);startColumn=endColumn+1;endColumn=startColumn;cellWidths=endColumn<=i?this.columns.getColumn(i).width:0;}}// if (startColumn !== this.columns.Count) {
this.columnRanges.push([startColumn,this.columns.count-1]);// }
}},{key:'layoutOnPage',value:function layoutOnPage(param){/* tslint:disable */this.pageBounds.x=param.bounds.x;this.pageBounds.y=param.bounds.y;this.pageBounds.height=param.bounds.height;var format=this.getFormat(param.format);var result=null;var layoutedPages=new TemporaryDictionary();var startPage=param.page;var cellBounds=[];for(var index=0;index<this.columnRanges.length;index++){var range=this.columnRanges[index];this.cellStartIndex=range[0];this.cellEndIndex=range[1];var returnObject=this.raiseBeforePageLayout(this.currentPage,this.currentBounds,this.currentRowIndex);this.currentBounds=returnObject.currentBounds;this.currentRowIndex=returnObject.currentRowIndex;// if (returnObject.returnValue) {
// result = new PdfGridLayoutResult(this.currentPage, this.currentBounds);
// break;
// }
//Draw Headers.
for(var _i13=0;_i13<this.headers.count;_i13++){var row=this.headers.getHeader(_i13);var headerHeight=this.currentBounds.y;// RowLayoutResult
var headerResult=this.drawRow(row);// if (headerHeight === this.currentBounds.y) {
//     drawHeader = true;
//     if (PdfGrid.repeatRowIndex === -1) {
//         PdfGrid.repeatRowIndex = this.rows.getRow.indexOf(row);
//     }
// } else {
// }
}var i=0;var length=this.rows.count;var repeatRow=void 0;cellBounds=[];//Draw row by row with the specified cell range.
for(var j=0;j<this.rows.count;j++){var _row2=this.rows.getRow(j);i++;this.currentRowIndex=i-1;var originalHeight=this.currentBounds.y;startPage=this.currentPage;PdfGrid.repeatRowIndex=-1;var rowResult=this.drawRow(_row2);cellBounds.push(rowResult.bounds.width);//if height remains same, it is understood that row is not drawn in the page
if(originalHeight===this.currentBounds.y){repeatRow=true;PdfGrid.repeatRowIndex=this.rows.rowCollection.indexOf(_row2);}else{repeatRow=false;PdfGrid.repeatRowIndex=-1;}if(!rowResult.isFinish&&startPage!==null&&format.layout!==PdfLayoutType.OnePage&&repeatRow){// During pagination, cell position is maintained here.
this.startLocation.x=this.currentBounds.x;this.currentPage=this.getNextPage(format);if(param.format!==null&&!param.format.usePaginateBounds&&param.bounds!==null&&param.bounds.height>0&&!this.isChildGrid){this.currentBounds.height=param.bounds.height;}if(param.format!==null&&!param.format.usePaginateBounds&&param.bounds!==null&&param.bounds.y>0&&!this.isChildGrid){this.currentBounds.y=param.bounds.y;}this.startLocation.y=this.currentBounds.y;if(format.paginateBounds.x===format.paginateBounds.y&&format.paginateBounds.y===format.paginateBounds.height&&format.paginateBounds.height===format.paginateBounds.width&&format.paginateBounds.width===0){this.currentBounds.x+=this.startLocation.x;}if(this.currentBounds.x===PdfBorders.default.left.width/2){this.currentBounds.y+=this.startLocation.x;}if(this.repeatHeader){for(var _i14=0;_i14<this.headers.count;_i14++){var header=this.headers.getHeader(_i14);this.drawRow(header);}}this.drawRow(_row2);if(this.currentPage!==null&&!layoutedPages.containsKey(this.currentPage)){layoutedPages.add(this.currentPage,range);}}}var isPdfGrid=false;var maximumCellBoundsWidth=0;if(cellBounds.length>0){maximumCellBoundsWidth=cellBounds[0];}var largeNavigatePage=[[0,0]];if(!isPdfGrid&&cellBounds.length>0){for(var c=0;c<i-1;c++){if(maximumCellBoundsWidth<cellBounds[c]){maximumCellBoundsWidth=cellBounds[c];}}this.rowLayoutBoundsWidth=maximumCellBoundsWidth;}else{this.rowLayoutBoundsWidth=largeNavigatePage[0][1];}if(this.columnRanges.length-1!==index&&this.columnRanges.length>1&&format.layout!==PdfLayoutType.OnePage){this.currentPage=this.getNextPage(format);if(format.paginateBounds.x===format.paginateBounds.y&&format.paginateBounds.y===format.paginateBounds.height&&format.paginateBounds.height===format.paginateBounds.width&&format.paginateBounds.width===0){this.currentBounds.x+=this.startLocation.x;this.currentBounds.y+=this.startLocation.y;// this.currentBounds.height = this.pageBounds.height;
}}}result=this.getLayoutResult();if(this.style.allowHorizontalOverflow&&this.style.horizontalOverflowType==PdfHorizontalOverflowType.NextPage){this.reArrangePages(layoutedPages);}this.raisePageLayouted(result);return result;}},{key:'getNextPage',value:function getNextPage(format){var section=this.currentPage.section;var nextPage=null;var index=section.indexOf(this.currentPage);this.flag=false;if(index===section.count-1){nextPage=section.add();}else{nextPage=section.getPages()[index+1];}this.currentGraphics=nextPage.graphics;var pageindex=this.currentGraphics.page.section.indexOf(this.currentGraphics.page);if(!(this.listOfNavigatePages.indexOf(pageindex)!==-1)){this.listOfNavigatePages.push(pageindex);}this.currentBounds=new RectangleF(new PointF(0,0),nextPage.getClientSize());// if ((format.PaginateBounds.x !== format.PaginateBounds.y) && (format.PaginateBounds.y !== format.PaginateBounds.height)
//     && (format.PaginateBounds.height !== format.PaginateBounds.width) && (format.PaginateBounds.width !== 0)) {
//     this.currentBounds.x = format.PaginateBounds.x;
//     this.currentBounds.y = format.PaginateBounds.y;
//     this.currentBounds.height = format.PaginateBounds.height;
// }
return nextPage;}},{key:'getLayoutResult',value:function getLayoutResult(){var bounds=void 0;/* tslint:disable */bounds=new RectangleF(this.startLocation,new SizeF(this.currentBounds.width,this.currentBounds.y-this.startLocation.y));/* tslint:enable */return new PdfGridLayoutResult(this.currentPage,bounds);}},{key:'ReCalculateHeight',value:function ReCalculateHeight(row,height){var newHeight=0.0;// for (let i : number = this.cellStartIndex; i <= this.cellEndIndex; i++) {
//     if (!(row.cells.getCell(i).RemainingString === null || row.cells.getCell(i).RemainingString === '' ||
//           typeof row.cells.getCell(i).RemainingString === 'undefined')) {
//         newHeight = Math.max(newHeight, row.cells.getCell(i).MeasureHeight());
//     }
// }
return Math.max(height,newHeight);}},{key:'raiseBeforePageLayout',value:function raiseBeforePageLayout(currentPage,currentBounds,currentRow){var cancel=false;if(this.raiseBeginPageLayout){var args=new PdfGridBeginPageLayoutEventArgs(currentBounds,currentPage,currentRow);this.beginPageLayout(this,args);// if (currentBounds !== args.Bounds) {
//     this.isChanged = true;
//     this.currentLocation = new PointF(args.Bounds.x, args.Bounds.y);
//     this.measureColumnsWidth(new RectangleF(new PointF(args.Bounds.x, args.Bounds.y) ,
//                                                  new SizeF(args.Bounds.width + args.Bounds.x ,
//                                                                 args.Bounds.height)));
// }
cancel=args.cancel;currentBounds=args.bounds;currentRow=args.startRowIndex;}return{returnValue:cancel,currentBounds:currentBounds,currentRowIndex:currentRow};}},{key:'raisePageLayouted',value:function raisePageLayouted(result){var args=new PdfGridEndPageLayoutEventArgs(result);if(this.raiseEndPageLayout){this.endPageLayout(this,args);}return args;}},{key:'drawRow',value:function drawRow(row,result,height){if(typeof result==='undefined'){//.. Check if required space available.
//.....If the row conains spans which  falls through more than one page, then draw the row to next page.
var _result3=new RowLayoutResult();var rowHeightWithSpan=0;var isHeader=false;if(row.rowSpanExists){var maxSpan=0;var currRowIndex=this.rows.rowCollection.indexOf(row);if(currRowIndex===-1){currRowIndex=this.headers.indexOf(row);if(currRowIndex!==-1){isHeader=true;}}for(var i=0;i<row.cells.count;i++){var cell=row.cells.getCell(i);maxSpan=Math.max(maxSpan,cell.rowSpan);}for(var _i15=currRowIndex;_i15<currRowIndex+maxSpan;_i15++){rowHeightWithSpan+=isHeader?this.headers.getHeader(_i15).height:this.rows.getRow(_i15).height;}var rowMaxHeight=rowHeightWithSpan;for(var _i16=0;_i16<row.cells.count;_i16++){rowMaxHeight=rowMaxHeight>row.cells.getCell(_i16).height?rowMaxHeight:row.cells.getCell(_i16).height;}var nextRow=this.headers.getHeader(this.headers.indexOf(row)+1);var flag=true;for(var _i17=0;_i17<nextRow.cells.count;_i17++){if(nextRow.cells.getCell(_i17).value!==''&&nextRow.cells.getCell(_i17).value!==undefined){flag=false;break;}}if(rowMaxHeight>rowHeightWithSpan&&flag){row.height+=rowMaxHeight-rowHeightWithSpan;}}var calculatedHeight=row.rowBreakHeight>0.0?row.rowBreakHeight:row.height;if(this.currentBounds.y+calculatedHeight>this.currentPageBounds.height||this.currentBounds.y+calculatedHeight>this.currentBounds.height+this.startLocation.y||this.currentBounds.y+rowHeightWithSpan>this.currentPageBounds.height){// If a row is repeated and still cannot fit in page, proceed draw.
// if (PdfGrid.repeatRowIndex > -1 && PdfGrid.repeatRowIndex === row.RowIndex) {
//     if (this.AllowRowBreakAcrossPages) {
//         result.IsFinish = true;
//         // this.DrawRowWithBreak(ref result, row, height);
//     } else {
//         result.IsFinish = false;
//         this.drawRow(row, result, height);
//     }
// } else {
_result3.isFinish=false;// }
}else{_result3.isFinish=true;this.drawRow(row,_result3,calculatedHeight);}return _result3;}else{var location=new PointF(this.currentBounds.x,this.currentBounds.y);result.bounds=new RectangleF(location,new SizeF(0,0));height=this.ReCalculateHeight(row,height);for(var _i18=this.cellStartIndex;_i18<=this.cellEndIndex;_i18++){var cancelSpans=_i18>this.cellEndIndex+1&&row.cells.getCell(_i18).columnSpan>1;// let cancelSpans : boolean = false;
if(!cancelSpans){for(var j=1;j<row.cells.getCell(_i18).columnSpan;j++){row.cells.getCell(_i18+j).isCellMergeContinue=true;}}var size=new SizeF(this.columns.getColumn(_i18).width,height);// if (size.width > this.currentGraphics.ClientSize.width) {
//     size.width = this.currentGraphics.ClientSize.width;
// }
// if (this.IsChildGrid && this.style.AllowHorizontalOverflow) {
//     if (size.width >= this.currentGraphics.ClientSize.width) {
//         size.width -= 2 * this.currentBounds.x;
//     }
// }
/* tslint:disable */if(!this.CheckIfDefaultFormat(this.columns.getColumn(_i18).format)&&this.CheckIfDefaultFormat(row.cells.getCell(_i18).stringFormat)){row.cells.getCell(_i18).stringFormat=this.columns.getColumn(_i18).format;}var cellstyle=row.cells.getCell(_i18).style;var tempValue=typeof row.cells.getCell(_i18).value==='string'&&row.cells.getCell(_i18).value!==null?row.cells.getCell(_i18).value:'';row.cells.getCell(_i18).style=this.RaiseBeforeCellDraw(this.currentGraphics,this.currentRowIndex,_i18,new RectangleF(location,size),tempValue,cellstyle);// if (!skipcell) {
// let stringResult : PdfStringLayoutResult = row.cells.getCell(i).draw(this.currentGraphics, new RectangleF(location, size), cancelSpans);
var stringResult=row.cells.getCell(_i18).draw(this.currentGraphics,new RectangleF(location,size),cancelSpans);if(row.grid.style.allowHorizontalOverflow&&(row.cells.getCell(_i18).columnSpan>this.cellEndIndex||_i18+row.cells.getCell(_i18).columnSpan>this.cellEndIndex+1)&&this.cellEndIndex<row.cells.count-1){row.rowOverflowIndex=this.cellEndIndex;}if(row.grid.style.allowHorizontalOverflow&&row.rowOverflowIndex>0&&(row.cells.getCell(_i18).columnSpan>this.cellEndIndex||_i18+row.cells.getCell(_i18).columnSpan>this.cellEndIndex+1)&&row.cells.getCell(_i18).columnSpan-this.cellEndIndex+_i18-1>0){row.cells.getCell(row.rowOverflowIndex+1).value=stringResult!==null?stringResult.remainder!==undefined?stringResult.remainder:'':'';row.cells.getCell(row.rowOverflowIndex+1).stringFormat=row.cells.getCell(_i18).stringFormat;row.cells.getCell(row.rowOverflowIndex+1).style=row.cells.getCell(_i18).style;row.cells.getCell(row.rowOverflowIndex+1).columnSpan=row.cells.getCell(_i18).columnSpan-this.cellEndIndex+_i18-1;}// }
/* tslint:enable */tempValue=typeof row.cells.getCell(_i18).value==='string'&&row.cells.getCell(_i18).value!==null?row.cells.getCell(_i18).value:'';this.RaiseAfterCellDraw(this.currentGraphics,this.currentRowIndex,_i18,new RectangleF(location,size),tempValue,row.cells.getCell(_i18).style);location.x+=this.columns.getColumn(_i18).width;}// if (!row.RowMergeComplete || row.isRowHeightSet) {
this.currentBounds.y+=height;// }
result.bounds=new RectangleF(new PointF(result.bounds.x,result.bounds.y),new SizeF(location.x,location.y));}}},{key:'CheckIfDefaultFormat',value:function CheckIfDefaultFormat(format){var defaultFormat=new PdfStringFormat();return format.alignment===defaultFormat.alignment&&format.characterSpacing===defaultFormat.characterSpacing&&format.clipPath===defaultFormat.clipPath&&format.firstLineIndent===defaultFormat.firstLineIndent&&format.horizontalScalingFactor===defaultFormat.horizontalScalingFactor&&format.lineAlignment===defaultFormat.lineAlignment&&format.lineLimit===defaultFormat.lineLimit&&format.lineSpacing===defaultFormat.lineSpacing&&format.measureTrailingSpaces===defaultFormat.measureTrailingSpaces&&format.noClip===defaultFormat.noClip&&format.paragraphIndent===defaultFormat.paragraphIndent&&format.rightToLeft===defaultFormat.rightToLeft&&format.subSuperScript===defaultFormat.subSuperScript&&format.wordSpacing===defaultFormat.wordSpacing&&format.wordWrap===defaultFormat.wordWrap;}},{key:'RaiseBeforeCellDraw',value:function RaiseBeforeCellDraw(graphics,rowIndex,cellIndex,bounds,value,style){var args=null;if(this.raiseBeginCellDraw){args=new PdfGridBeginCellDrawEventArgs(graphics,rowIndex,cellIndex,bounds,value,style);this.beginCellDraw(this,args);style=args.style;}return style;}},{key:'RaiseAfterCellDraw',value:function RaiseAfterCellDraw(graphics,rowIndex,cellIndex,bounds,value,cellstyle){var args=null;if(this.raiseEndCellDraw){args=new PdfGridEndCellDrawEventArgs(graphics,rowIndex,cellIndex,bounds,value,cellstyle);this.endCellDraw(this,args);}}},{key:'reArrangePages',value:function reArrangePages(layoutedPages){var document=this.currentPage.document;var pages=[];var keys=layoutedPages.keys();var values=layoutedPages.values();for(var i=0;i<keys.length;i++){var page=keys[i];page.section=null;pages.push(page);document.pages.remove(page);}/* tslint:disable */for(var _i19=0;_i19<layoutedPages.size();_i19++){for(var j=_i19,count=layoutedPages.size()/this.columnRanges.length;j<layoutedPages.size();j+=count){var _page4=pages[j];if(document.pages.indexOf(_page4)===-1){document.pages.add(_page4);}}}/* tslint:enable */}},{key:'raiseBeginCellDraw',get:function get(){return typeof this.beginCellDraw!=='undefined'&&typeof this.beginCellDraw!==null;}},{key:'raiseEndCellDraw',get:function get(){return typeof this.endCellDraw!=='undefined'&&typeof this.endCellDraw!==null;}},{key:'raiseBeginPageLayout',get:function get(){return typeof this.beginPageLayout!=='undefined';}},{key:'raiseEndPageLayout',get:function get(){return typeof this.endPageLayout!=='undefined';}},{key:'repeatHeader',get:function get(){if(this.bRepeatHeader==null||typeof this.bRepeatHeader==='undefined'){this.bRepeatHeader=false;}return this.bRepeatHeader;},set:function set(value){this.bRepeatHeader=value;}},{key:'allowRowBreakAcrossPages',get:function get(){return this.breakRow;},set:function set(value){this.breakRow=value;}},{key:'columns',get:function get(){if(this.gridColumns==null||typeof this.gridColumns==='undefined'){this.gridColumns=new PdfGridColumnCollection(this);}return this.gridColumns;}},{key:'rows',get:function get(){if(this.gridRows==null){this.gridRows=new PdfGridRowCollection(this);}return this.gridRows;}},{key:'headers',get:function get(){if(this.gridHeaders==null||typeof this.gridHeaders==='undefined'){this.gridHeaders=new PdfGridHeaderCollection(this);}return this.gridHeaders;}},{key:'initialWidth',get:function get(){return this.gridInitialWidth;},set:function set(value){this.gridInitialWidth=value;}},{key:'style',get:function get(){if(this.gridStyle==null){this.gridStyle=new PdfGridStyle();}return this.gridStyle;},set:function set(value){if(this.gridStyle==null){this.gridStyle=value;}}},{key:'isPageWidth',get:function get(){return this.pageWidth;},set:function set(value){this.pageWidth=value;}},{key:'isChildGrid',get:function get(){return this.childGrid;},set:function set(value){this.childGrid=value;}},{key:'size',get:function get(){if(this.gridSize.width===0&&this.gridSize.height===0){this.gridSize=this.measure();return this.gridSize;}else{return this.gridSize;}},set:function set(value){this.gridSize=value;}}]);return PdfGrid;}(PdfLayoutElement));/**
 * @hidden
 * @private
 */PdfGrid.repeatRowIndex=-1;/**
 * `GridCellEventArgs` class is alternate for grid events.
 */_export('GridCellEventArgs',GridCellEventArgs=function(){_createClass(GridCellEventArgs,[{key:'rowIndex',get:function get(){return this.gridRowIndex;}},{key:'cellIndex',get:function get(){return this.gridCellIndex;}},{key:'value',get:function get(){return this.internalValue;}},{key:'bounds',get:function get(){return this.gridBounds;}},{key:'graphics',get:function get(){return this.pdfGraphics;}}]);// Constructors
/**
     * Initialize a new instance for `GridCellEventArgs` class.
     * @private
     */function GridCellEventArgs(graphics,rowIndex,cellIndex,bounds,value){_classCallCheck(this,GridCellEventArgs);this.gridRowIndex=rowIndex;this.gridCellIndex=cellIndex;this.internalValue=value;this.gridBounds=bounds;this.pdfGraphics=graphics;}return GridCellEventArgs;}());_export('PdfGridBeginCellDrawEventArgs',PdfGridBeginCellDrawEventArgs=function(_GridCellEventArgs){_inherits(PdfGridBeginCellDrawEventArgs,_GridCellEventArgs);_createClass(PdfGridBeginCellDrawEventArgs,[{key:'skip',get:function get(){return this.bSkip;},set:function set(value){this.bSkip=value;}},{key:'style',get:function get(){return this.cellStyle;},set:function set(value){this.cellStyle=value;}}]);// Constructors
/**
     * Initializes a new instance of the `StartCellLayoutEventArgs` class.
     * @private
     */function PdfGridBeginCellDrawEventArgs(graphics,rowIndex,cellIndex,bounds,value,style){_classCallCheck(this,PdfGridBeginCellDrawEventArgs);var _this32=_possibleConstructorReturn(this,(PdfGridBeginCellDrawEventArgs.__proto__||Object.getPrototypeOf(PdfGridBeginCellDrawEventArgs)).call(this,graphics,rowIndex,cellIndex,bounds,value));_this32.style=style;return _this32;}return PdfGridBeginCellDrawEventArgs;}(GridCellEventArgs));_export('PdfGridEndCellDrawEventArgs',PdfGridEndCellDrawEventArgs=function(_GridCellEventArgs2){_inherits(PdfGridEndCellDrawEventArgs,_GridCellEventArgs2);_createClass(PdfGridEndCellDrawEventArgs,[{key:'style',get:function get(){return this.cellStyle;}}]);// Constructors
/**
     * Initializes a new instance of the `PdfGridEndCellLayoutEventArgs` class.
     * @private
     */function PdfGridEndCellDrawEventArgs(graphics,rowIndex,cellIndex,bounds,value,style){_classCallCheck(this,PdfGridEndCellDrawEventArgs);var _this33=_possibleConstructorReturn(this,(PdfGridEndCellDrawEventArgs.__proto__||Object.getPrototypeOf(PdfGridEndCellDrawEventArgs)).call(this,graphics,rowIndex,cellIndex,bounds,value));_this33.cellStyle=style;return _this33;}return PdfGridEndCellDrawEventArgs;}(GridCellEventArgs));_export('PdfCancelEventArgs',PdfCancelEventArgs=function(){function PdfCancelEventArgs(){_classCallCheck(this,PdfCancelEventArgs);}_createClass(PdfCancelEventArgs,[{key:'cancel',get:function get(){return this.isCancel;},set:function set(value){this.isCancel=value;}}]);return PdfCancelEventArgs;}());_export('BeginPageLayoutEventArgs',BeginPageLayoutEventArgs=function(_PdfCancelEventArgs){_inherits(BeginPageLayoutEventArgs,_PdfCancelEventArgs);_createClass(BeginPageLayoutEventArgs,[{key:'bounds',get:function get(){return this.cellBounds;},set:function set(value){this.cellBounds=value;}},{key:'page',get:function get(){return this.pdfPage;}}]);// Constructors
/**
     * Initializes a new instance of the `BeginPageLayoutEventArgs` class with the specified rectangle and page.
     * @private
     */function BeginPageLayoutEventArgs(bounds,page){_classCallCheck(this,BeginPageLayoutEventArgs);var _this34=_possibleConstructorReturn(this,(BeginPageLayoutEventArgs.__proto__||Object.getPrototypeOf(BeginPageLayoutEventArgs)).call(this));_this34.bounds=bounds;_this34.pdfPage=page;return _this34;}return BeginPageLayoutEventArgs;}(PdfCancelEventArgs));_export('EndPageLayoutEventArgs',EndPageLayoutEventArgs=function(_PdfCancelEventArgs2){_inherits(EndPageLayoutEventArgs,_PdfCancelEventArgs2);_createClass(EndPageLayoutEventArgs,[{key:'result',get:function get(){return this.layoutResult;}},{key:'nextPage',get:function get(){return this.nextPdfPage;},set:function set(value){this.nextPdfPage=value;}}]);// Constructors
/**
     * Initializes a new instance of the `EndPageLayoutEventArgs` class. with the specified 'PdfLayoutResult'.
     * @private
     */function EndPageLayoutEventArgs(result){_classCallCheck(this,EndPageLayoutEventArgs);var _this35=_possibleConstructorReturn(this,(EndPageLayoutEventArgs.__proto__||Object.getPrototypeOf(EndPageLayoutEventArgs)).call(this));_this35.layoutResult=result;return _this35;}return EndPageLayoutEventArgs;}(PdfCancelEventArgs));_export('PdfGridBeginPageLayoutEventArgs',PdfGridBeginPageLayoutEventArgs=function(_BeginPageLayoutEvent){_inherits(PdfGridBeginPageLayoutEventArgs,_BeginPageLayoutEvent);_createClass(PdfGridBeginPageLayoutEventArgs,[{key:'startRowIndex',get:function get(){return this.startRow;}}]);// Constructors
/**
     * Initialize a new instance of `PdfGridBeginPageLayoutEventArgs` class.
     * @private
     */function PdfGridBeginPageLayoutEventArgs(bounds,page,startRow){_classCallCheck(this,PdfGridBeginPageLayoutEventArgs);var _this36=_possibleConstructorReturn(this,(PdfGridBeginPageLayoutEventArgs.__proto__||Object.getPrototypeOf(PdfGridBeginPageLayoutEventArgs)).call(this,bounds,page));_this36.startRow=startRow;return _this36;}return PdfGridBeginPageLayoutEventArgs;}(BeginPageLayoutEventArgs));_export('PdfGridEndPageLayoutEventArgs',PdfGridEndPageLayoutEventArgs=function(_EndPageLayoutEventAr){_inherits(PdfGridEndPageLayoutEventArgs,_EndPageLayoutEventAr);// Constructors
/**
     * Initialize a new instance of `PdfGridEndPageLayoutEventArgs` class.
     * @private
     */function PdfGridEndPageLayoutEventArgs(result){_classCallCheck(this,PdfGridEndPageLayoutEventArgs);return _possibleConstructorReturn(this,(PdfGridEndPageLayoutEventArgs.__proto__||Object.getPrototypeOf(PdfGridEndPageLayoutEventArgs)).call(this,result));}return PdfGridEndPageLayoutEventArgs;}(EndPageLayoutEventArgs));_export('RowLayoutResult',RowLayoutResult=function(){_createClass(RowLayoutResult,[{key:'isFinish',get:function get(){return this.bIsFinished;},set:function set(value){this.bIsFinished=value;}},{key:'bounds',get:function get(){return this.layoutedBounds;},set:function set(value){this.layoutedBounds=value;}}]);//Constructors
/**
     * Initializes a new instance of the `RowLayoutResult` class.
     * @private
     */function RowLayoutResult(){_classCallCheck(this,RowLayoutResult);this.layoutedBounds=new RectangleF(0,0,0,0);}return RowLayoutResult;}());_export('PdfGridLayoutResult',PdfGridLayoutResult=function(_PdfLayoutResult2){_inherits(PdfGridLayoutResult,_PdfLayoutResult2);// Constructor
/**
     * Initializes a new instance of the `PdfGridLayoutResult` class with the current page and bounds.
     * @private
     */function PdfGridLayoutResult(page,bounds){_classCallCheck(this,PdfGridLayoutResult);return _possibleConstructorReturn(this,(PdfGridLayoutResult.__proto__||Object.getPrototypeOf(PdfGridLayoutResult)).call(this,page,bounds));}return PdfGridLayoutResult;}(PdfLayoutResult));_export('PdfAction',PdfAction);_export('PdfUriAction',PdfUriAction);_export('PdfActionLinkAnnotation',PdfActionLinkAnnotation);_export('PdfAnnotation',PdfAnnotation);_export('PdfAnnotationCollection',PdfAnnotationCollection);_export('PdfDocumentLinkAnnotation',PdfDocumentLinkAnnotation);_export('PdfLinkAnnotation',PdfLinkAnnotation);_export('PdfTextWebLink',PdfTextWebLink);_export('PdfUriAnnotation',PdfUriAnnotation);_export('Dictionary',Dictionary);_export('defaultToString',defaultToString);_export('PdfCatalog',PdfCatalog);_export('PdfDocument',PdfDocument);_export('PdfDocumentBase',PdfDocumentBase);_export('PdfDocumentTemplate',PdfDocumentTemplate);_export('PdfPageNumberField',PdfPageNumberField);_export('PdfCompositeField',PdfCompositeField);_export('PdfPageCountField',PdfPageCountField);_export('PointF',PointF);_export('SizeF',SizeF);_export('RectangleF',RectangleF);_export('PdfCacheCollection',PdfCacheCollection);_export('PdfCollection',PdfCollection);_export('PdfDestination',PdfDestination);_export('PdfDestinationMode',PdfDestinationMode);_export('ProcedureSets',ProcedureSets);_export('PdfHorizontalAlignment',PdfHorizontalAlignment);_export('PdfVerticalAlignment',PdfVerticalAlignment);_export('PdfTextAlignment',PdfTextAlignment);_export('TextRenderingMode',TextRenderingMode);_export('PdfLineJoin',PdfLineJoin);_export('PdfLineCap',PdfLineCap);_export('PdfDashStyle',PdfDashStyle);_export('PdfFillMode',PdfFillMode);_export('PdfColorSpace',PdfColorSpace);_export('PdfBlendMode',PdfBlendMode);_export('PdfGraphicsUnit',PdfGraphicsUnit);_export('PdfGridImagePosition',PdfGridImagePosition);_export('PdfColor',PdfColor);_export('PdfGraphics',PdfGraphics);_export('GetResourceEventHandler',GetResourceEventHandler);_export('PdfGraphicsState',PdfGraphicsState);_export('PdfMargins',PdfMargins);_export('PdfPen',PdfPen);_export('PdfResources',PdfResources);_export('Guid',Guid);_export('PdfTransformationMatrix',PdfTransformationMatrix);_export('Matrix',Matrix);_export('PdfBrush',PdfBrush);_export('PdfSolidBrush',PdfSolidBrush);_export('PdfTemplate',PdfTemplate);_export('PdfLayoutElement',PdfLayoutElement);_export('PdfTextElement',PdfTextElement);_export('ElementLayouter',ElementLayouter);_export('PdfLayoutFormat',PdfLayoutFormat);_export('PdfLayoutParams',PdfLayoutParams);_export('PdfLayoutResult',PdfLayoutResult);_export('TextLayouter',TextLayouter);_export('TextPageLayoutResult',TextPageLayoutResult);_export('PdfTextLayoutResult',PdfTextLayoutResult);_export('PdfLayoutType',PdfLayoutType);_export('PdfLayoutBreakType',PdfLayoutBreakType);_export('PdfFontStyle',PdfFontStyle);_export('PdfFontFamily',PdfFontFamily);_export('PdfFontType',PdfFontType);_export('PdfWordWrapType',PdfWordWrapType);_export('PdfSubSuperScript',PdfSubSuperScript);_export('FontEncoding',FontEncoding);_export('PdfFont',PdfFont);_export('PdfFontMetrics',PdfFontMetrics);_export('WidthTable',WidthTable);_export('StandardWidthTable',StandardWidthTable);_export('PdfStandardFont',PdfStandardFont);_export('PdfStandardFontMetricsFactory',PdfStandardFontMetricsFactory);_export('PdfStringFormat',PdfStringFormat);_export('PdfStringLayouter',PdfStringLayouter);_export('PdfStringLayoutResult',PdfStringLayoutResult);_export('LineInfo',LineInfo);_export('LineType',LineType);_export('StringTokenizer',StringTokenizer);_export('ByteArray',ByteArray);_export('ImageFormat',ImageFormat);_export('ImageDecoder',ImageDecoder);_export('PdfBitmap',PdfBitmap);_export('PdfImage',PdfImage);_export('PdfTransparency',PdfTransparency);_export('ObjectStatus',ObjectStatus);_export('ObjectType',ObjectType);_export('PdfCrossTable',PdfCrossTable);_export('RegisteredObject',RegisteredObject);_export('DictionaryProperties',DictionaryProperties);_export('PdfMainObjectCollection',PdfMainObjectCollection);_export('ObjectInfo',ObjectInfo);_export('Operators',Operators);_export('PdfStreamWriter',PdfStreamWriter);_export('PdfWriter',PdfWriter);_export('PdfPageOrientation',PdfPageOrientation);_export('PdfPageRotateAngle',PdfPageRotateAngle);_export('PdfNumberStyle',PdfNumberStyle);_export('PdfDockStyle',PdfDockStyle);_export('PdfAlignmentStyle',PdfAlignmentStyle);_export('TemplateType',TemplateType);_export('PageAddedEventArgs',PageAddedEventArgs);_export('PdfDocumentPageCollection',PdfDocumentPageCollection);_export('PdfPage',PdfPage);_export('PdfPageBase',PdfPageBase);_export('PdfPageLayer',PdfPageLayer);_export('PdfPageLayerCollection',PdfPageLayerCollection);_export('PdfPageSettings',PdfPageSettings);_export('PdfPageSize',PdfPageSize);_export('PdfPageTemplateElement',PdfPageTemplateElement);_export('PdfSection',PdfSection);_export('PageSettingsState',PageSettingsState);_export('PdfSectionCollection',PdfSectionCollection);_export('PdfSectionPageCollection',PdfSectionPageCollection);_export('PdfSectionTemplate',PdfSectionTemplate);_export('PdfArray',PdfArray);_export('PdfDictionary',PdfDictionary);_export('SaveSectionCollectionEventHandler',SaveSectionCollectionEventHandler);_export('SaveAnnotationEventHandler',SaveAnnotationEventHandler);_export('SaveSectionEventHandler',SaveSectionEventHandler);_export('SaveTemplateEventHandler',SaveTemplateEventHandler);_export('PdfName',PdfName);_export('PdfNumber',PdfNumber);_export('PdfReference',PdfReference);_export('PdfReferenceHolder',PdfReferenceHolder);_export('PdfStream',PdfStream);_export('InternalEnum',InternalEnum);_export('PdfString',PdfString);_export('PdfGridStyleBase',PdfGridStyleBase);_export('PdfGridStyle',PdfGridStyle);_export('PdfGridCellStyle',PdfGridCellStyle);_export('PdfGridRowStyle',PdfGridRowStyle);_export('PdfHorizontalOverflowType',PdfHorizontalOverflowType);_export('PdfBorders',PdfBorders);_export('PdfPaddings',PdfPaddings);_export('PdfBorderOverlapStyle',PdfBorderOverlapStyle);_export('PdfGridLayoutFormat',PdfGridLayoutFormat);_export('PdfGrid',PdfGrid);_export('GridCellEventArgs',GridCellEventArgs);_export('PdfGridBeginCellDrawEventArgs',PdfGridBeginCellDrawEventArgs);_export('PdfGridEndCellDrawEventArgs',PdfGridEndCellDrawEventArgs);_export('PdfCancelEventArgs',PdfCancelEventArgs);_export('BeginPageLayoutEventArgs',BeginPageLayoutEventArgs);_export('EndPageLayoutEventArgs',EndPageLayoutEventArgs);_export('PdfGridBeginPageLayoutEventArgs',PdfGridBeginPageLayoutEventArgs);_export('PdfGridEndPageLayoutEventArgs',PdfGridEndPageLayoutEventArgs);_export('RowLayoutResult',RowLayoutResult);_export('PdfGridLayoutResult',PdfGridLayoutResult);_export('PdfGridColumn',PdfGridColumn);_export('PdfGridColumnCollection',PdfGridColumnCollection);_export('PdfGridRow',PdfGridRow);_export('PdfGridRowCollection',PdfGridRowCollection);_export('PdfGridHeaderCollection',PdfGridHeaderCollection);_export('PdfGridCell',PdfGridCell);_export('PdfGridCellCollection',PdfGridCellCollection);}};});

//# sourceMappingURL=ej2-pdf-export.es2015-compiled.js.map