const klingonTranslator = require('../klingonTranslator')
const chai = require('chai')
const expect = chai.expect

describe('klingonTranslator', () => {
    it('isTextTranslatable should return false if an untranslatable text is passed', () => {
        expect(klingonTranslator.isTextTranslatable('kzc')).to.equal(false)
    })

    it('isTextTranslatable should return true if \'Uhura\' is passed', () => {
        expect(klingonTranslator.isTextTranslatable('Uhura')).to.equal(true)
    })

    it('getklingonCharHex should return 0xF8E5 if \'u\' is passed', () => {
        expect(klingonTranslator.getKlingonCharHex('u')).to.equal(0xF8E5)
    })

    it('getklingonCharHex should return 0xF8D6 if \'h\' is passed', () => {
        expect(klingonTranslator.getKlingonCharHex('h')).to.equal(0xF8D6)
    })

    it('getklingonCharHex should return 0xF8E1 if \'r\' is passed', () => {
        expect(klingonTranslator.getKlingonCharHex('r')).to.equal(0xF8E1)
    })

    it('getklingonCharHex should return 0xF8D0 if \'a\' is passed', () => {
        expect(klingonTranslator.getKlingonCharHex('a')).to.equal(0xF8D0)
    })
})