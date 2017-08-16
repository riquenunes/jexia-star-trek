const klingonAlphabet =  require('./klingonAlphabet')
const klingonAlphabetRegex = new RegExp(`(${klingonAlphabet.join('|')})+`, 'ig')

module.exports = {
    // checks if the input string contains only characters of the pIqaD​ alphabet
    isTextTranslatable(text) {
        return klingonAlphabetRegex.test(text)
    },
    getKlingonCharHex(token) {
        if (!isNaN(token)) {
            return 0xF8F + parseInt(token)
        } else if (token === ' ') {
            return 0x0020
        } else {
            const tokenIndex = klingonAlphabet.indexOf(token)

            if (tokenIndex > -1) {
                return 0xF8D0 + tokenIndex
            }
        }
    }
}