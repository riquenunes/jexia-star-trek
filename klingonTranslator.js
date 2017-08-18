const klingonAlphabet = require('./klingonAlphabet').alphabet
const klingonAlphabetRegex = require('./klingonAlphabet').regex
const textParser = require('./textParser')

module.exports = {
  // checks if the input string contains only characters of the pIqaD alphabet
  isTextTranslatable(text) {
    const testText = text.toLowerCase().replace(' ', '')
    const matches = testText.match(klingonAlphabetRegex)

    return !!matches && matches.join('').length === testText.length
  },
  getKlingonCharHex(token) {
    if (!isNaN(token)) {
      return 0xF8F0 + parseInt(token)
    } else {
      const tokenIndex = klingonAlphabet.indexOf(token)

      if (tokenIndex > -1) {
        return 0xF8D0 + tokenIndex
      }
    }
  },
  translateText(text) {
    let translatedText = ''
    const words = text.trim().split(' ')

    words.forEach((word, index) => {
      if (index > 0) {
        translatedText += ' 0x0020'
      }

      textParser.getTokenList(word).forEach(token => {
        translatedText += ' 0x' + this.getKlingonCharHex(token).toString(16).toUpperCase()
      })
    })

    return translatedText.trim()
  }
}
