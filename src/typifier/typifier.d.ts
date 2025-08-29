export = Typifier;
/**
 * Typifier
 *
 * The javascript library to get or check the type of given variable.
 *
 */
declare class Typifier {
    /**
     * Get the version of the used library.
     *
     * @example
     *
     * Typifier.getVersion(); // => "0.1.3"
     *
     * @returns {string}
     */
    static getVersion(): string;
    /**
     * Check if given variable is of type Array.
     *
     * @example
     *
     * Typifier.isArray([1,2,3]); // => true
     * Typifier.isArray({a:1,b:2}); // => false
     * Typifier.isArray("hello"); // => false
     *
     * @param {any} value
     * @returns {boolean} true if Array, otherwise false
     */
    static isArray(value: any): boolean;
    /**
     * Check if given variable is of type Object.
     *
     * @example
     *
     * Typifier.isObject({a:1,b:2}); // => true
     * Typifier.isObject([1,2,3]); // => false
     * Typifier.isObject("hello"); // => false
     *
     * @param {any} value
     * @returns {boolean} true if Object, otherwise false
     */
    static isObject(value: any): boolean;
    /**
     * Check if given variable is of type string (primitive).
     *
     * @example
     *
     * Typifier.isString("hello"); // => true
     * Typifier.isString(new String("hello")); // => false
     * Typifier.isString(123); // => false
     *
     * @param {any} value
     * @returns {boolean} true if 'string', otherwise false
     */
    static isString(value: any): boolean;
    /**
     * Check if given variable is of type String (class instance).
     *
     * @example
     *
     * Typifier.isStringClass(new String("hello")); // => true
     * Typifier.isStringClass("hello"); // => false
     * Typifier.isStringClass(123); // => false
     *
     * @param {any} value
     * @returns {boolean} true if instance of class 'String', otherwise false
     */
    static isStringClass(value: any): boolean;
    /**
     * Check if given variable is of type number (primitive).
     *
     * @example
     *
     * Typifier.isNumber(123); // => true
     * Typifier.isNumber(new Number(123)); // => false
     * Typifier.isNumber(NaN); // => false
     * Typifier.isNumber(Infinity); // => false
     *
     * @param {any} value
     * @returns {boolean} true if 'number', otherwise false
     */
    static isNumber(value: any): boolean;
    /**
     * Check if given variable is of type Number (class instance).
     *
     * @example
     *
     * Typifier.isNumberClass(new Number(123)); // => true
     * Typifier.isNumberClass(123); // => false
     * Typifier.isNumberClass(NaN); // => false
     * Typifier.isNumberClass(Infinity); // => false
     *
     * @param {any} value
     * @returns {boolean} true if instance of class 'Number', otherwise false
     */
    static isNumberClass(value: any): boolean;
    /**
     * Check if given variable is a valid number inside a string that evaluates to a number in Javascript.
     *
     * @example
     *
     * Typifier.isNumberString("200"); // => true
     * Typifier.isNumberString("25.75"); // => true
     * Typifier.isNumberString("10."); // => true
     * Typifier.isNumberString(".5"); // => true
     * Typifier.isNumberString("500_000"); // => true
     * Typifier.isNumberString("0x12F"); // => true
     * Typifier.isNumberString("hello"); // => false
     * Typifier.isNumberString("123abc"); // => false
     * Typifier.isNumberString("NaN"); // => false
     * Typifier.isNumberString("Infinity"); // => false
     *
     * @param {any} value
     * @returns {boolean} true if valid JavaScript number inside string
     */
    static isNumberString(value: any): boolean;
    /**
     * Check if given variable is of type Date.
     *
     * @example
     *
     * Typifier.isDate(new Date()); // => true
     * Typifier.isDate(Date()); // => false
     * Typifier.isDate("2024-01-01"); // => false
     *
     * @param {any} value
     * @returns {boolean} true if Date, otherwise false
     */
    static isDate(value: any): boolean;
    /**
     * Check if given variable is of type RegExp.
     *
     * @example
     *
     * Typifier.isRegExp(/abc/); // => true
     * Typifier.isRegExp(new RegExp('abc')); // => true
     * Typifier.isRegExp("abc"); // => false
     * Typifier.isRegExp({pattern: 'abc'}); // => false
     *
     * @param {any} value
     * @returns {boolean} true if RegExp, otherwise false
     */
    static isRegExp(value: any): boolean;
    /**
     * Check if given variable is of type NaN.
     *
     * @example
     *
     * Typifier.isNaN(NaN); // => true
     * Typifier.isNaN("NaN"); // => false
     * Typifier.isNaN(123); // => false
     *
     * @param {any} value
     * @returns {boolean} true if NaN, otherwise false
     */
    static isNaN(value: any): boolean;
    /**
     * Check if given variable is of type Infinity.
     *
     * @example
     *
     * Typifier.isInfinity(Infinity); // => true
     * Typifier.isInfinity("Infinity"); // => false
     * Typifier.isInfinity(123); // => false
     * Typifier.isInfinity(-Infinity); // => false
     *
     * @param {any} value
     * @returns {boolean} true if Infinity, otherwise false
     */
    static isInfinity(value: any): boolean;
    /**
     * Check if given variable is of type negative -Infinity.
     *
     * @example
     *
     * Typifier.isNegativeInfinity(-Infinity); // => true
     * Typifier.isNegativeInfinity("Infinity"); // => false
     * Typifier.isNegativeInfinity(123); // => false
     * Typifier.isNegativeInfinity(Infinity); // => false
     *
     * @param {any} value
     * @returns {boolean} true if -Infinity, otherwise false
     */
    static isNegativeInfinity(value: any): boolean;
    /**
     * Check if given variable is of type undefined.
     *
     * @example
     *
     * Typifier.isUndefined(undefined); // => true
     * Typifier.isUndefined(null); // => false
     * Typifier.isUndefined(123); // => false
     * Typifier.isUndefined(); // => true
     *
     * @param {any} value
     * @returns {boolean} true if undefined, otherwise false
     */
    static isUndefined(value: any): boolean;
    /**
     * Check if given variable is of type null.
     *
     * @example
     *
     * Typifier.isNull(null); // => true
     * Typifier.isNull(undefined); // => false
     * Typifier.isNull(0); // => false
     * Typifier.isNull(); // => false
     * Typifier.isNull({}); // => false
     * Typifier.isNull([]); // => false
     * Typifier.isNull("null"); // => false
     *
     * @param {any} value
     * @returns {boolean} true if null, otherwise false
     */
    static isNull(value: any): boolean;
    /**
     * Check if given variable is of type boolean (primitive).
     *
     * @example
     *
     * Typifier.isBoolean(true); // => true
     * Typifier.isBoolean(false); // => true
     * Typifier.isBoolean(new Boolean(true)); // => true
     * Typifier.isBoolean(new Boolean(false)); // => true
     * Typifier.isBoolean(0); // => false
     * Typifier.isBoolean(1); // => false
     * Typifier.isBoolean("true"); // => false
     * Typifier.isBoolean("false"); // => false
     *
     * @param {any} value
     * @returns {boolean} true if 'boolean' or instance of class 'Boolean', otherwise false
     */
    static isBoolean(value: any): boolean;
    /**
     * Check if given variable is of type Boolean (class instance).
     *
     * @example
     *
     * Typifier.isBooleanClass(new Boolean(true)); // => true
     * Typifier.isBooleanClass(new Boolean(false)); // => true
     * Typifier.isBooleanClass(true); // => false
     * Typifier.isBooleanClass(false); // => false
     * Typifier.isBooleanClass(0); // => false
     * Typifier.isBooleanClass(1); // => false
     * Typifier.isBooleanClass("true"); // => false
     * Typifier.isBooleanClass("false"); // => false
     *
     * @param {any} value
     * @returns {boolean} true if instance of class 'Boolean', otherwise false
     */
    static isBooleanClass(value: any): boolean;
    /**
     * Check if given variable is of type function.
     *
     * @example
     *
     * Typifier.isFunction(function() {}); // => true
     * Typifier.isFunction(() => {}); // => true
     * Typifier.isFunction(class A {}); // => false
     * Typifier.isFunction(new Function("a", "b", "return a + b;")); // => true
     * Typifier.isFunction(async function() {}); // => true
     * Typifier.isFunction(123); // => false
     * Typifier.isFunction("function() {}"); // => false
     * Typifier.isFunction({}); // => false
     * Typifier.isFunction(Function); // => false
     * Typifier.isFunction(Math.max); // => true
     *
     * @param {any} value
     * @returns {boolean} true if is a function, otherwise false
     */
    static isFunction(value: any): boolean;
    /**
     * Check if given variable is of type class.
     *
     * @example
     *
     * Typifier.isClass(class A {}); // => true
     * Typifier.isClass(function() {}); // => false
     * Typifier.isClass(() => {}); // => false
     * Typifier.isClass(class {}); // => true
     * Typifier.isClass(new Function("a", "b", "return a + b;")); // => false
     * Typifier.isClass(async function() {}); // => false
     *
     * @param {any} value
     * @returns {boolean} true if class, otherwise false
     */
    static isClass(value: any): boolean;
    /**
     * Check if the given value is of the given type.
     *
     * @example
     *  Typifier.is('Array',[1,2,3]) // => true
     *  Typifier.is('Object',{a:1,b:2}) // => true
     *  Typifier.is('string',"hello") // => true
     *  Typifier.is('String',new String("hello")) // => true
     *  Typifier.is('number',123) // => true
     *  Typifier.is('Number',new Number(123)) // => true
     *  Typifier.is('Date',new Date()) // => true
     *  Typifier.is('RegExp',/abc/) // => true
     *  Typifier.is('NaN',NaN) // => true
     *  Typifier.is('Infinity',Infinity) // => true
     *  Typifier.is('-Infinity',-Infinity) // => true
     *  Typifier.is('undefined',undefined) // => true
     *  Typifier.is('null',null) // => true
     *  Typifier.is('boolean',true) // => true
     *  Typifier.is('boolean',false) // => true
     *  Typifier.is('Boolean',new Boolean(true)) // => true
     *  Typifier.is('Boolean',new Boolean(false)) // => true
     *  Typifier.is('function',function() {}) // => true
     *  Typifier.is('class',class A {}) // => true
     *  Typifier.is('Array',{a:1,b:2}) // => false
     *  Typifier.is('string',new String("hello")) // => false
     *  Typifier.is('String',"hello") // => false
     *  Typifier.is('number',new Number(123)) // => false
     *  Typifier.is('Number',123) // => false
     *  Typifier.is('NaN',"NaN") // => false
     *  Typifier.is('Infinity',"Infinity") // => false
     *  Typifier.is('undefined',null) // => false
     *
     * @param {string} type
     * @param {any} value
     * @returns {boolean} true if the value is of the given type
     */
    static is(type: string, value: any): boolean;
    /**
     * Check if the given variable is set (is not 'undefined' or 'null').
     * Valid values like 'false', a empty string or '0' return true.
     *
     * @example
     *  let a;
     *  let b = 0;
     *  Typifier.isSet(a) // => false
     *  Typifier.isSet(b) // => true
     *
     * @param {any} variable
     * @returns {boolean} true if the value is set
     */
    static isSet(variable: any): boolean;
    /**
     * Get the type of the given value.
     * Primitive types are lower case.
     *
     * @example
     *
     * Typifier.getType([1,2,3]) // => 'Array'
     * Typifier.getType({a:1,b:2}) // => 'Object'
     * Typifier.getType("hello") // => 'string'
     * Typifier.getType(new String("hello")) // => 'String'
     * Typifier.getType(123) // => 'number'
     *
     * @param {any} value
     * @returns {string} type in pascal case format
     */
    static getType(value: any): string;
}
declare namespace Typifier {
    const _version: string;
}
