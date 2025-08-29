<a name="Typifier"></a>

## Typifier
Typifier

The javascript library to get or check the type of given variable.

* [Typifier](#Typifier)
    * [.getVersion()](#Typifier.getVersion) &rarr; <code>string</code>
    * [.isArray(value)](#Typifier.isArray) &rarr; <code>boolean</code>
    * [.isObject(value)](#Typifier.isObject) &rarr; <code>boolean</code>
    * [.isString(value)](#Typifier.isString) &rarr; <code>boolean</code>
    * [.isStringClass(value)](#Typifier.isStringClass) &rarr; <code>boolean</code>
    * [.isNumber(value)](#Typifier.isNumber) &rarr; <code>boolean</code>
    * [.isNumberClass(value)](#Typifier.isNumberClass) &rarr; <code>boolean</code>
    * [.isNumberString(value)](#Typifier.isNumberString) &rarr; <code>boolean</code>
    * [.isDate(value)](#Typifier.isDate) &rarr; <code>boolean</code>
    * [.isRegExp(value)](#Typifier.isRegExp) &rarr; <code>boolean</code>
    * [.isNaN(value)](#Typifier.isNaN) &rarr; <code>boolean</code>
    * [.isInfinity(value)](#Typifier.isInfinity) &rarr; <code>boolean</code>
    * [.isNegativeInfinity(value)](#Typifier.isNegativeInfinity) &rarr; <code>boolean</code>
    * [.isUndefined(value)](#Typifier.isUndefined) &rarr; <code>boolean</code>
    * [.isNull(value)](#Typifier.isNull) &rarr; <code>boolean</code>
    * [.isBoolean(value)](#Typifier.isBoolean) &rarr; <code>boolean</code>
    * [.isBooleanClass(value)](#Typifier.isBooleanClass) &rarr; <code>boolean</code>
    * [.isFunction(value)](#Typifier.isFunction) &rarr; <code>boolean</code>
    * [.isClass(value)](#Typifier.isClass) &rarr; <code>boolean</code>
    * [.is(type, value)](#Typifier.is) &rarr; <code>boolean</code>
    * [.isSet(variable)](#Typifier.isSet) &rarr; <code>boolean</code>
    * [.getType(value)](#Typifier.getType) &rarr; <code>string</code>

<a name="Typifier.getVersion"></a>

### Typifier.getVersion() &rarr; <code>string</code>
Get the version of the used library.

**Example**
```js
Typifier.getVersion(); // => "0.1.3"
```
<a name="Typifier.isArray"></a>

### Typifier.isArray(value) &rarr; <code>boolean</code>
Check if given variable is of type Array.

**Returns**: <code>boolean</code> - true if Array, otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isArray([1,2,3]); // => true
Typifier.isArray({a:1,b:2}); // => false
Typifier.isArray("hello"); // => false
```
<a name="Typifier.isObject"></a>

### Typifier.isObject(value) &rarr; <code>boolean</code>
Check if given variable is of type Object.

**Returns**: <code>boolean</code> - true if Object, otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isObject({a:1,b:2}); // => true
Typifier.isObject([1,2,3]); // => false
Typifier.isObject("hello"); // => false
```
<a name="Typifier.isString"></a>

### Typifier.isString(value) &rarr; <code>boolean</code>
Check if given variable is of type string (primitive).

**Returns**: <code>boolean</code> - true if 'string', otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isString("hello"); // => true
Typifier.isString(new String("hello")); // => false
Typifier.isString(123); // => false
```
<a name="Typifier.isStringClass"></a>

### Typifier.isStringClass(value) &rarr; <code>boolean</code>
Check if given variable is of type String (class instance).

**Returns**: <code>boolean</code> - true if instance of class 'String', otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isStringClass(new String("hello")); // => true
Typifier.isStringClass("hello"); // => false
Typifier.isStringClass(123); // => false
```
<a name="Typifier.isNumber"></a>

### Typifier.isNumber(value) &rarr; <code>boolean</code>
Check if given variable is of type number (primitive).

**Returns**: <code>boolean</code> - true if 'number', otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isNumber(123); // => true
Typifier.isNumber(new Number(123)); // => false
Typifier.isNumber(NaN); // => false
Typifier.isNumber(Infinity); // => false
```
<a name="Typifier.isNumberClass"></a>

### Typifier.isNumberClass(value) &rarr; <code>boolean</code>
Check if given variable is of type Number (class instance).

**Returns**: <code>boolean</code> - true if instance of class 'Number', otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isNumberClass(new Number(123)); // => true
Typifier.isNumberClass(123); // => false
Typifier.isNumberClass(NaN); // => false
Typifier.isNumberClass(Infinity); // => false
```
<a name="Typifier.isNumberString"></a>

### Typifier.isNumberString(value) &rarr; <code>boolean</code>
Check if given variable is a valid number inside a string that evaluates to a number in Javascript.

**Returns**: <code>boolean</code> - true if valid JavaScript number inside string  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isNumberString("200"); // => true
Typifier.isNumberString("25.75"); // => true
Typifier.isNumberString("10."); // => true
Typifier.isNumberString(".5"); // => true
Typifier.isNumberString("500_000"); // => true
Typifier.isNumberString("0x12F"); // => true
Typifier.isNumberString("hello"); // => false
Typifier.isNumberString("123abc"); // => false
Typifier.isNumberString("NaN"); // => false
Typifier.isNumberString("Infinity"); // => false
```
<a name="Typifier.isDate"></a>

### Typifier.isDate(value) &rarr; <code>boolean</code>
Check if given variable is of type Date.

**Returns**: <code>boolean</code> - true if Date, otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isDate(new Date()); // => true
Typifier.isDate(Date()); // => false
Typifier.isDate("2024-01-01"); // => false
```
<a name="Typifier.isRegExp"></a>

### Typifier.isRegExp(value) &rarr; <code>boolean</code>
Check if given variable is of type RegExp.

**Returns**: <code>boolean</code> - true if RegExp, otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isRegExp(/abc/); // => true
Typifier.isRegExp(new RegExp('abc')); // => true
Typifier.isRegExp("abc"); // => false
Typifier.isRegExp({pattern: 'abc'}); // => false
```
<a name="Typifier.isNaN"></a>

### Typifier.isNaN(value) &rarr; <code>boolean</code>
Check if given variable is of type NaN.

**Returns**: <code>boolean</code> - true if NaN, otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isNaN(NaN); // => true
Typifier.isNaN("NaN"); // => false
Typifier.isNaN(123); // => false
```
<a name="Typifier.isInfinity"></a>

### Typifier.isInfinity(value) &rarr; <code>boolean</code>
Check if given variable is of type Infinity.

**Returns**: <code>boolean</code> - true if Infinity, otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isInfinity(Infinity); // => true
Typifier.isInfinity("Infinity"); // => false
Typifier.isInfinity(123); // => false
Typifier.isInfinity(-Infinity); // => false
```
<a name="Typifier.isNegativeInfinity"></a>

### Typifier.isNegativeInfinity(value) &rarr; <code>boolean</code>
Check if given variable is of type negative -Infinity.

**Returns**: <code>boolean</code> - true if -Infinity, otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isNegativeInfinity(-Infinity); // => true
Typifier.isNegativeInfinity("Infinity"); // => false
Typifier.isNegativeInfinity(123); // => false
Typifier.isNegativeInfinity(Infinity); // => false
```
<a name="Typifier.isUndefined"></a>

### Typifier.isUndefined(value) &rarr; <code>boolean</code>
Check if given variable is of type undefined.

**Returns**: <code>boolean</code> - true if undefined, otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isUndefined(undefined); // => true
Typifier.isUndefined(null); // => false
Typifier.isUndefined(123); // => false
Typifier.isUndefined(); // => true
```
<a name="Typifier.isNull"></a>

### Typifier.isNull(value) &rarr; <code>boolean</code>
Check if given variable is of type null.

**Returns**: <code>boolean</code> - true if null, otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isNull(null); // => true
Typifier.isNull(undefined); // => false
Typifier.isNull(0); // => false
Typifier.isNull(); // => false
Typifier.isNull({}); // => false
Typifier.isNull([]); // => false
Typifier.isNull("null"); // => false
```
<a name="Typifier.isBoolean"></a>

### Typifier.isBoolean(value) &rarr; <code>boolean</code>
Check if given variable is of type boolean (primitive).

**Returns**: <code>boolean</code> - true if 'boolean' or instance of class 'Boolean', otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isBoolean(true); // => true
Typifier.isBoolean(false); // => true
Typifier.isBoolean(new Boolean(true)); // => true
Typifier.isBoolean(new Boolean(false)); // => true
Typifier.isBoolean(0); // => false
Typifier.isBoolean(1); // => false
Typifier.isBoolean("true"); // => false
Typifier.isBoolean("false"); // => false
```
<a name="Typifier.isBooleanClass"></a>

### Typifier.isBooleanClass(value) &rarr; <code>boolean</code>
Check if given variable is of type Boolean (class instance).

**Returns**: <code>boolean</code> - true if instance of class 'Boolean', otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isBooleanClass(new Boolean(true)); // => true
Typifier.isBooleanClass(new Boolean(false)); // => true
Typifier.isBooleanClass(true); // => false
Typifier.isBooleanClass(false); // => false
Typifier.isBooleanClass(0); // => false
Typifier.isBooleanClass(1); // => false
Typifier.isBooleanClass("true"); // => false
Typifier.isBooleanClass("false"); // => false
```
<a name="Typifier.isFunction"></a>

### Typifier.isFunction(value) &rarr; <code>boolean</code>
Check if given variable is of type function.

**Returns**: <code>boolean</code> - true if is a function, otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isFunction(function() {}); // => true
Typifier.isFunction(() => {}); // => true
Typifier.isFunction(class A {}); // => false
Typifier.isFunction(new Function("a", "b", "return a + b;")); // => true
Typifier.isFunction(async function() {}); // => true
Typifier.isFunction(123); // => false
Typifier.isFunction("function() {}"); // => false
Typifier.isFunction({}); // => false
Typifier.isFunction(Function); // => false
Typifier.isFunction(Math.max); // => true
```
<a name="Typifier.isClass"></a>

### Typifier.isClass(value) &rarr; <code>boolean</code>
Check if given variable is of type class.

**Returns**: <code>boolean</code> - true if class, otherwise false  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.isClass(class A {}); // => true
Typifier.isClass(function() {}); // => false
Typifier.isClass(() => {}); // => false
Typifier.isClass(class {}); // => true
Typifier.isClass(new Function("a", "b", "return a + b;")); // => false
Typifier.isClass(async function() {}); // => false
```
<a name="Typifier.is"></a>

### Typifier.is(type, value) &rarr; <code>boolean</code>
Check if the given value is of the given type.

**Returns**: <code>boolean</code> - true if the value is of the given type  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 
| value | <code>any</code> | 


**Example**
```js
Typifier.is('Array',[1,2,3]) // => true
 Typifier.is('Object',{a:1,b:2}) // => true
 Typifier.is('string',"hello") // => true
 Typifier.is('String',new String("hello")) // => true
 Typifier.is('number',123) // => true
 Typifier.is('Number',new Number(123)) // => true
 Typifier.is('Date',new Date()) // => true
 Typifier.is('RegExp',/abc/) // => true
 Typifier.is('NaN',NaN) // => true
 Typifier.is('Infinity',Infinity) // => true
 Typifier.is('-Infinity',-Infinity) // => true
 Typifier.is('undefined',undefined) // => true
 Typifier.is('null',null) // => true
 Typifier.is('boolean',true) // => true
 Typifier.is('boolean',false) // => true
 Typifier.is('Boolean',new Boolean(true)) // => true
 Typifier.is('Boolean',new Boolean(false)) // => true
 Typifier.is('function',function() {}) // => true
 Typifier.is('class',class A {}) // => true
 Typifier.is('Array',{a:1,b:2}) // => false
 Typifier.is('string',new String("hello")) // => false
 Typifier.is('String',"hello") // => false
 Typifier.is('number',new Number(123)) // => false
 Typifier.is('Number',123) // => false
 Typifier.is('NaN',"NaN") // => false
 Typifier.is('Infinity',"Infinity") // => false
 Typifier.is('undefined',null) // => false
```
<a name="Typifier.isSet"></a>

### Typifier.isSet(variable) &rarr; <code>boolean</code>
Check if the given variable is set (is not 'undefined' or 'null').
Valid values like 'false', a empty string or '0' return true.

**Returns**: <code>boolean</code> - true if the value is set  

| Param | Type |
| --- | --- |
| variable | <code>any</code> | 


**Example**
```js
let a;
 let b = 0;
 Typifier.isSet(a) // => false
 Typifier.isSet(b) // => true
```
<a name="Typifier.getType"></a>

### Typifier.getType(value) &rarr; <code>string</code>
Get the type of the given value.
Primitive types are lower case.

**Returns**: <code>string</code> - type in pascal case format  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


**Example**
```js
Typifier.getType([1,2,3]) // => 'Array'
Typifier.getType({a:1,b:2}) // => 'Object'
Typifier.getType("hello") // => 'string'
Typifier.getType(new String("hello")) // => 'String'
Typifier.getType(123) // => 'number'
```
