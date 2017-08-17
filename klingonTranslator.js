const klingonAlphabet =  require('./klingonAlphabet')
const klingonAlphabetRegex = new RegExp(`(${klingonAlphabet.join('|')})+`, 'ig')
const textParser = require('./textParser')

module.exports = {
    // checks if the input string contains only characters of the pIqaD​ alphabet
    isTextTranslatable(text) {
        return klingonAlphabetRegex.test(text)
    },
    getKlingonCharHex(token) {
        if (!isNaN(token)) {
            return 0xF8F + parseInt(token)
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