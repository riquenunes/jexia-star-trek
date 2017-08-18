const klingonAlphabet = require('./klingonAlphabet').alphabet
const klingonAlphabetRegex = require('./klingonAlphabet').regex

module.exports = {
  // returns an array with a list of pIqaD letters represented by the Roman alphabet
  // basically we do this so we can know the difference between 't' and 'tlh', for example
  // as both are different letters in Klingon
  getTokenList(text) {
    return text.toLowerCase().match(klingonAlphabetRegex)
  }
}
