const Typifier = require('../src/typifier/typifier.js');
require('ruby-nice/object');

//----------------------------------------------------------------------------------------------------

describe('Typifier', function () {
    beforeEach(function () {
    });
    it('can return a version', function () {
        expect(Typifier.getVersion()).toContain('.');
    });
});

//----------------------------------------------------------------------------------------------------

describe('Typifier', function () {
    beforeEach(function () {
    });
    describe('.isNumber()', function () {
        it('can recognize valid numbers', function () {
            [1, 1.1, 1., .1, 500_000, 500.0_1, 1_5., 0x111, 0xA0F, 0x0].eachWithIndex((val, i) => {
                expect(Typifier.isNumber(val)).toEqual(true, val);
            });
        });
        it('can recognize invalid number (string)', function () {
            expect(Typifier.isNumber('1')).toEqual(false);
        });
        it('can recognize invalid number (null)', function () {
            expect(Typifier.isNumber(null)).toEqual(false);
        });
        it('can recognize invalid number (undefined)', function () {
            expect(Typifier.isNumber(undefined)).toEqual(false);
        });
        it('can recognize invalid number (object)', function () {
            expect(Typifier.isNumber({})).toEqual(false);
        });
        it('can recognize invalid number (NaN)', function () {
            expect(Typifier.isNumber(NaN)).toEqual(false);
        });
        it('can recognize invalid number (Infinity)', function () {
            expect(Typifier.isNumber(Infinity)).toEqual(false);
        });
    });
    describe('.isNumberClass()', function () {
        it('can recognize valid numbers classes', function () {
            [new Number(1), new Number(1.1), new Number(1.), new Number(.1), new Number(500_000), new Number(500.0_1), new Number(1_5.), new Number(0x111), new Number(0xA0F), new Number(0x0)].eachWithIndex((val, i) => {
                expect(Typifier.isNumberClass(val)).toEqual(true, val);
            });
        });
        it('can recognize invalid number class (string)', function () {
            expect(Typifier.isNumberClass('1')).toEqual(false);
        });
        it('can recognize invalid number class (null)', function () {
            expect(Typifier.isNumberClass(null)).toEqual(false);
        });
        it('can recognize invalid number class (undefined)', function () {
            expect(Typifier.isNumberClass(undefined)).toEqual(false);
        });
        it('can recognize invalid number class (object)', function () {
            expect(Typifier.isNumberClass({})).toEqual(false);
        });
        it('can recognize invalid number class (NaN)', function () {
            expect(Typifier.isNumberClass(NaN)).toEqual(false);
        });
        it('can recognize invalid number class (Infinity)', function () {
            expect(Typifier.isNumberClass(Infinity)).toEqual(false);
        });
    });
    describe('.isNumberString()', function () {
        it('can recognize valid number strings', function () {
            ['1', '1.1', '1.', '.1', '500_000', '500.0_1', '1_5.', '0x111', '0xA0F', '0x0'].eachWithIndex((val, i) => {
                expect(Typifier.isNumberString(val)).toEqual(true, val);
            });
        });
        it('can recognize invalid number strings', function () {
            ['.', '_1.1', '1._', 'number', 'null', '2,5', '0xA0G'].eachWithIndex((val, i) => {
                expect(Typifier.isNumberString(val)).toEqual(false, val);
            });
        });
        it('can recognize invalid number string (number)', function () {
            expect(Typifier.isNumberString(1)).toEqual(false);
        });
        it('can recognize invalid number string (null)', function () {
            expect(Typifier.isNumberString(null)).toEqual(false);
        });
        it('can recognize invalid number string (undefined)', function () {
            expect(Typifier.isNumberString(undefined)).toEqual(false);
        });
        it('can recognize invalid number string (object)', function () {
            expect(Typifier.isNumberString({})).toEqual(false);
        });
        it('can recognize invalid number string (NaN)', function () {
            expect(Typifier.isNumberString(NaN)).toEqual(false);
        });
        it('can recognize invalid number string (Infinity)', function () {
            expect(Typifier.isNumberString(Infinity)).toEqual(false);
        });
    });
    describe('.isNull()', function () {
        it('can recognize null value', function () {
            [null].eachWithIndex((val, i) => {
                expect(Typifier.isNull(val)).toEqual(true, val);
            });
        });
        it('can recognize invalid number string (number)', function () {
            expect(Typifier.isNull(1)).toEqual(false);
        });
        it('can recognize invalid number string (string)', function () {
            expect(Typifier.isNull('null')).toEqual(false);
        });
        it('can recognize invalid number string (undefined)', function () {
            expect(Typifier.isNull(undefined)).toEqual(false);
        });
        it('can recognize invalid number string (object)', function () {
            expect(Typifier.isNull({})).toEqual(false);
        });
        it('can recognize invalid number string (NaN)', function () {
            expect(Typifier.isNull(NaN)).toEqual(false);
        });
        it('can recognize invalid number string (Infinity)', function () {
            expect(Typifier.isNull(Infinity)).toEqual(false);
        });
    });
    describe('.isNaN()', function () {
        it('can recognize NaN value', function () {
            [NaN].eachWithIndex((val, i) => {
                expect(Typifier.isNaN(val)).toEqual(true, val);
            });
        });
        it('can recognize invalid NaN (number)', function () {
            expect(Typifier.isNaN(1)).toEqual(false);
        });
        it('can recognize invalid NaN (string)', function () {
            expect(Typifier.isNaN('null')).toEqual(false);
        });
        it('can recognize invalid NaN (undefined)', function () {
            expect(Typifier.isNaN(undefined)).toEqual(false);
        });
        it('can recognize invalid NaN (object)', function () {
            expect(Typifier.isNaN({})).toEqual(false);
        });
        it('can recognize invalid NaN (null)', function () {
            expect(Typifier.isNaN(null)).toEqual(false);
        });
        it('can recognize invalid NaN (Infinity)', function () {
            expect(Typifier.isNaN(Infinity)).toEqual(false);
        });
    });
    describe('.isInfinity()', function () {
        it('can recognize Infinity value', function () {
            [Infinity].eachWithIndex((val, i) => {
                expect(Typifier.isInfinity(val)).toEqual(true, val);
            });
        });
        it('can recognize invalid Infinity (number)', function () {
            expect(Typifier.isInfinity(1)).toEqual(false);
        });
        it('can recognize invalid Infinity (string)', function () {
            expect(Typifier.isInfinity('null')).toEqual(false);
        });
        it('can recognize invalid Infinity (undefined)', function () {
            expect(Typifier.isInfinity(undefined)).toEqual(false);
        });
        it('can recognize invalid Infinity (object)', function () {
            expect(Typifier.isInfinity({})).toEqual(false);
        });
        it('can recognize invalid Infinity (null)', function () {
            expect(Typifier.isInfinity(null)).toEqual(false);
        });
        it('can recognize invalid Infinity (NaN)', function () {
            expect(Typifier.isInfinity(NaN)).toEqual(false);
        });
    });
    describe('.isObject()', function () {
        it('can recognize object value', function () {
            [{}].eachWithIndex((val, i) => {
                expect(Typifier.isObject(val)).toEqual(true, val);
            });
        });
        it('can recognize invalid object (number)', function () {
            expect(Typifier.isObject(1)).toEqual(false);
        });
        it('can recognize invalid object (string)', function () {
            expect(Typifier.isObject('null')).toEqual(false);
        });
        it('can recognize invalid object (undefined)', function () {
            expect(Typifier.isObject(undefined)).toEqual(false);
        });
        it('can recognize invalid object (Infinity)', function () {
            expect(Typifier.isObject(Infinity)).toEqual(false);
        });
        it('can recognize invalid object (null)', function () {
            expect(Typifier.isObject(null)).toEqual(false);
        });
        it('can recognize invalid object (NaN)', function () {
            expect(Typifier.isObject(NaN)).toEqual(false);
        });
    });
    describe('.isUndefined()', function () {
        it('can recognize undefined value', function () {
            [undefined].eachWithIndex((val, i) => {
                expect(Typifier.isUndefined(val)).toEqual(true, val);
            });
        });
        it('can recognize invalid undefined (number)', function () {
            expect(Typifier.isUndefined(1)).toEqual(false);
        });
        it('can recognize invalid undefined (string)', function () {
            expect(Typifier.isUndefined('null')).toEqual(false);
        });
        it('can recognize invalid undefined (object)', function () {
            expect(Typifier.isUndefined({})).toEqual(false);
        });
        it('can recognize invalid undefined (Infinity)', function () {
            expect(Typifier.isUndefined(Infinity)).toEqual(false);
        });
        it('can recognize invalid undefined (null)', function () {
            expect(Typifier.isUndefined(null)).toEqual(false);
        });
        it('can recognize invalid undefined (NaN)', function () {
            expect(Typifier.isUndefined(NaN)).toEqual(false);
        });
    });
    describe('.isString()', function () {
        it('can recognize string value', function () {
            ['string'].eachWithIndex((val, i) => {
                expect(Typifier.isString(val)).toEqual(true, val);
            });
        });
        it('can recognize invalid string (number)', function () {
            expect(Typifier.isString(1)).toEqual(false);
        });
        it('can recognize invalid string (undefined)', function () {
            expect(Typifier.isString(undefined)).toEqual(false);
        });
        it('can recognize invalid string (object)', function () {
            expect(Typifier.isString({})).toEqual(false);
        });
        it('can recognize invalid string (Infinity)', function () {
            expect(Typifier.isString(Infinity)).toEqual(false);
        });
        it('can recognize invalid string (null)', function () {
            expect(Typifier.isString(null)).toEqual(false);
        });
        it('can recognize invalid string (NaN)', function () {
            expect(Typifier.isString(NaN)).toEqual(false);
        });
    });
    describe('.isFunction()', function () {
        it('can recognize anonymous arrow function value', function () {
            [() => {
            }].eachWithIndex((val, i) => {
                expect(Typifier.isFunction(val)).toEqual(true, val);
            });
        });
        it('can recognize anonymous function value', function () {
            [function () {
            }].eachWithIndex((val, i) => {
                expect(Typifier.isFunction(val)).toEqual(true, val);
            });
        });
        it('can recognize invalid function (number)', function () {
            expect(Typifier.isFunction(1)).toEqual(false);
        });
        it('can recognize invalid function (undefined)', function () {
            expect(Typifier.isFunction(undefined)).toEqual(false);
        });
        it('can recognize invalid function (object)', function () {
            expect(Typifier.isFunction({})).toEqual(false);
        });
        it('can recognize invalid function (Infinity)', function () {
            expect(Typifier.isFunction(Infinity)).toEqual(false);
        });
        it('can recognize invalid function (null)', function () {
            expect(Typifier.isFunction(null)).toEqual(false);
        });
        it('can recognize invalid function (NaN)', function () {
            expect(Typifier.isFunction(NaN)).toEqual(false);
        });
        it('can recognize invalid function (class)', function () {
            class TestClass {
            }

            expect(Typifier.isFunction(TestClass)).toEqual(false);
        });
    });
});
//----------------------------------------------------------------------------------------------------

describe('Typifier.getType', function () {
    beforeEach(function () {
    });
    it('can recognize a string value', function () {
        ['1', '1.1', '1.', '.1', '500_000', '500.0_1', '1_5.', '0x111', '0xA0F', '0x0'].eachWithIndex((val, i) => {
            expect(Typifier.getType(val)).toEqual('string');
        });
    });
    it('can recognize a null value', function () {
        expect(Typifier.getType(null)).toEqual('null');
    });
    it('can recognize a number value', function () {
        [1, 1.1, 1., .1, 500_000, 500.0_1, 1_5., 0x111, 0xA0F, 0x0].eachWithIndex((val, i) => {
            expect(Typifier.getType(val)).toEqual('number');
        });
    });
    it('can recognize a number class value', function () {
        [new Number(1), new Number(1.1), new Number(1.), new Number(.1), new Number(500_000), new Number(500.0_1), new Number(1_5.), new Number(0x111), new Number(0xA0F), new Number(0x0)].eachWithIndex((val, i) => {
            expect(Typifier.getType(val)).toEqual('Number');
        });
    });
});

//----------------------------------------------------------------------------------------------------

describe('Typifier.isSet', function () {
    beforeEach(function () {
    });
    // falsy
    it('recognizes a undefined variable', function () {
        let a;
        expect(Typifier.isSet(a)).toEqual(false);
    });
    it('recognizes a variable of null value', function () {
        let a = null;
        expect(Typifier.isSet(a)).toEqual(false);
    });
    it('recognizes a NaN variable', function () {
        let a = NaN;
        expect(Typifier.isSet(a)).toEqual(true);
    });
    // truthy
    it('recognizes a variable of value 0', function () {
        let a = 0;
        expect(Typifier.isSet(a)).toEqual(true);
    });
    it('recognizes a variable of value false', function () {
        let a = false;
        expect(Typifier.isSet(a)).toEqual(true);
    });
    it('recognizes a variable with empty string', function () {
        let a = '';
        expect(Typifier.isSet(a)).toEqual(true);
    });
});

//----------------------------------------------------------------------------------------------------