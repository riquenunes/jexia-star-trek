const textParser = require('../textParser')
const chai = require('chai')
const expect = chai.expect

describe('textParser', () => {
  describe('#getTokenList()', () => {
    it('should return [\'u\', \'h\', \'u\', \'r\', \'a\'] if \'Uhura\' is passed', () => {
      expect(textParser.getTokenList('Uhura')).to.deep.equal(['u', 'h', 'u', 'r', 'a'])
    })

    it('should return [\'u\', \'ch\', \'u\', \'gh\', \'a\', \'ng\'] if \'Uchughang\' is passed', () => {
      expect(textParser.getTokenList('Uchughang')).to.deep.equal(['u', 'ch', 'u', 'gh', 'a', 'ng'])
    })
  })
})
