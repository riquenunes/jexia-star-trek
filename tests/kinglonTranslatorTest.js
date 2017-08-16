const kinglonTranslator = require('../kinglonTranslator')
const chai = require('chai')
const expect = chai.expect

describe('kinglonTranslator', () => {
    it('isTextTranslatable should return false if an untranslatable text is passed', () => {
        expect(kinglonTranslator.isTextTranslatable('')).to.equal(false)
    })

    it('getKinglonCharHex should return 0xF8E5 if \'U\' is passed', () => {
        expect(kinglonTranslator.getKinglonCharHex('U')).to.equal('0xF8E5')
    })
})