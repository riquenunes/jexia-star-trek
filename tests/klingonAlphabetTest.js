const klingonAlphabet = require('../klingonAlphabet')
const chai = require('chai')
const expect = chai.expect

describe('klingonAlphabet', () => {
    it('should be an array with the klingonAlphabet', () => {
        expect(klingonAlphabet).to.deep.equal(['a','b','ch','d','e','gh','h','i','j','l','m','n','ng','o','p','q','q','r','s','t','tlh','u','v','w','y','’'])
    })
})