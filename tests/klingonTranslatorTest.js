const klingonTranslator = require('../klingonTranslator')
const chai = require('chai')
const expect = chai.expect

describe('klingonTranslator', () => {
  describe('#isTextTranslatable()', () => {
    it('should return false if an untranslatable text is passed', () => {
      expect(klingonTranslator.isTextTranslatable('kzc')).to.equal(false)
    })

    it('should return true if \'Uhura\' is passed', () => {
      expect(klingonTranslator.isTextTranslatable('Uhura')).to.equal(true)
    })
  })

  describe('#getklingonCharHex()', () => {
    it('should return 0xF8E5 if \'u\' is passed', () => {
      expect(klingonTranslator.getKlingonCharHex('u')).to.equal(0xF8E5)
    })

    it('should return 0xF8D6 if \'h\' is passed', () => {
      expect(klingonTranslator.getKlingonCharHex('h')).to.equal(0xF8D6)
    })

    it('should return 0xF8E1 if \'r\' is passed', () => {
      expect(klingonTranslator.getKlingonCharHex('r')).to.equal(0xF8E1)
    })

    it('should return 0xF8D0 if \'a\' is passed', () => {
      expect(klingonTranslator.getKlingonCharHex('a')).to.equal(0xF8D0)
    })
  })

  describe('#translateText()', () => {
    it('should return \'0xF8E5 0xF8D6 0xF8E5 0xF8E1 0xF8D0\' if \'Uhura\' is passed', () => {
      expect(klingonTranslator.translateText('Uhura')).to.equal('0xF8E5 0xF8D6 0xF8E5 0xF8E1 0xF8D0')
    })

    it('should return \'0xF8E5 0xF8D6 0xF8E5 0xF8E1 0xF8D0 0x0020 0xF8DB 0xF8E5 0xF8DB 0xF8D4 0xF8E2\' if \'Uhura Nunes\'', () => {
      expect(klingonTranslator.translateText('Uhura Nunes')).to.equal('0xF8E5 0xF8D6 0xF8E5 0xF8E1 0xF8D0 0x0020 0xF8DB 0xF8E5 0xF8DB 0xF8D4 0xF8E2')
    })
  })
})
