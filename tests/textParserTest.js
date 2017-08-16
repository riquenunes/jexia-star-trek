const textParser = require('../textParser')
const chai = require('chai')
const expect = chai.expect

describe('textParser', () => {
  it('getTokenList(\'Uhura\') should return [\'u\', \'h\', \'u\', \'r\', \'a\']', () => {
    expect(textParser.getTokenList('Uhura')).to.deep.equal(['u','h','u','r','a'])
  })
})