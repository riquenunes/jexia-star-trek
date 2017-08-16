const klingonAlphabet = require('./klingonAlphabet')

// here we make a RegExp with the klingonAlphabet array reversed, so that 'ng'
// can be matched instead of 'n', for example
const regex = new RegExp(klingonAlphabet.slice().reverse().join('|'), 'g')

module.exports = {
  // returns an array with a list of pIqaD letters represented by the Roman alphabet
  // basically we do this so we can know the difference between 't' and 'tlh', for example
  // as both are different letters in Klingon
  getTokenList(text) {
    return text.toLowerCase().match(regex)
  }
}