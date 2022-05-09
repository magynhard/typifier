const Typifier = require('../src/typifier/typifier.js');

//----------------------------------------------------------------------------------------------------

describe('Typifier', function () {
    beforeEach(function () {
    });
    it('can return a version', function () {
        expect(Typifier.getVersion()).toContain('.');
    });
});

//----------------------------------------------------------------------------------------------------