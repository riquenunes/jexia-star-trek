const klingonAlphabet = require('./klingonAlphabet').alphabet
const klingonAlphabetRegex = require('./klingonAlphabet').regex
const textParser = require('./textParser')

module.exports = {
  // checks if the input string contains only characters of the pIqaD alphabet
  isTextTranslatable(text) {
    const testText = text.replace(' ', '')
    const matches = testText.match(klingonAlphabetRegex)

    // test if there were matches in the input string and if the number
    // of matched characters is the same as the number of characters in
    // the input string. If this number is different it means that at
    // least one character is not part of the pIqaD alphabet and the
    // text is not translatable
    return !!matches && matches.join('').length === testText.length
  },
  // return a number that represents the given letter
  getKlingonCharHex(token) {
    if (!isNaN(token)) {
      // if the input token is a number we just take it and sum with
      // 0xF8F0 (address of number 0)
      return 0xF8F0 + parseInt(token)
    } else {
      // otherwise we take the letter position on the alphabet and sum
      // with 0xF8D0 (address of the first letter)
      const tokenIndex = klingonAlphabet.indexOf(token)

      if (tokenIndex > -1) {
        return 0xF8D0 + tokenIndex
      }
    }
  },
  // returns a string containing the ouput to be printed on the screen
  translateText(text) {
    let translatedText = ''
    const words = text.trim().split(' ')

    // loop through each word so that we can add an space separator
    // between each one
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
