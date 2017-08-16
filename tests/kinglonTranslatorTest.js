const kinglonTranslator = require('../kinglonTranslator')
const chai = require('chai')
const expect = chai.expect

describe('kinglonTranslator', () => {
    it('isTextTranslatable should return false if an untranslatable text is passed', () => {
        expect(kinglonTranslator.isTextTranslatable('')).to.equal(false)
    })

    it('getKinglonCharHex should return 0xF8E5 if \'u\' is passed', () => {
        expect(kinglonTranslator.getKinglonCharHex('u')).to.equal('0xF8E5')
    })

    it('getKinglonCharHex should return 0xF8D6 if \'h\' is passed', () => {
        expect(kinglonTranslator.getKinglonCharHex('h')).to.equal('0xF8D6')
    })

    it('getKinglonCharHex should return 0xF8E1 if \'r\' is passed', () => {
        expect(kinglonTranslator.getKinglonCharHex('r')).to.equal('0xF8E1')
    })

    it('getKinglonCharHex should return 0xF8D0 if \'a\' is passed', () => {
        expect(kinglonTranslator.getKinglonCharHex('a')).to.equal('0xF8D0')
    })
})