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
    it('can recognize valid number strings', function () {
        ['1','1.1','1.','.1','500_000','500.0_1','1_5.'].eachWithIndex((val, i) => {
            expect(Typifier.isNumberString(val)).toEqual(true, val);
        });
    });
    it('can recognize invalid number strings', function () {
        ['.','_1.1','1._','number','null','2,5'].eachWithIndex((val, i) => {
            expect(Typifier.isNumberString(val)).toEqual(false, val);
        });
    });
});

//----------------------------------------------------------------------------------------------------