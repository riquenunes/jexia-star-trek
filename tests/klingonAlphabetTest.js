const klingonAlphabet = require('../klingonAlphabet').alphabet
const klingonAlphabetRegex = require('../klingonAlphabet').regex
const chai = require('chai')
const expect = chai.expect

describe('klingonAlphabet', () => {
  describe('#alphabet', () => {
    it('should be an array with the klingonAlphabet', () => {
      expect(klingonAlphabet).to.deep.equal(['a', 'b', 'ch', 'd', 'e', 'gh', 'h', 'i', 'j', 'l', 'm', 'n', 'ng', 'o', 'p', 'q', 'q', 'r', 's', 't', 'tlh', 'u', 'v', 'w', 'y', '’'])
    })
  })

  describe('#regex', () => {
    it('should match every character in the alphabet', () => {
      const klingonAlphabetString = klingonAlphabet.join('')

      expect(klingonAlphabetString.length).to.equal(klingonAlphabetString.match(klingonAlphabetRegex).join('').length)
    })

    it('should not match unexisting characters in the Klingon Alphabet', () => {
      expect(klingonAlphabetRegex.test('cfkxz')).to.equal(false)
    })

    it('should match any number', () => {
      expect('123456789'.match(klingonAlphabetRegex).length).to.equal(9)
    })
  })
})
