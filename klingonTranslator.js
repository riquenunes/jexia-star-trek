const klingonAlphabet =  ['a','b','ch','d','e','gh','h','i','j','l','m','n','ng','o','p','q','q','r','s','t','tlh','u','v','w','y','’']

module.exports = {
    // checks if the input string contains only characters of the pIqaD​ alphabet
    isTextTranslatable(text) {
        const regex = /(a|b|ch|d|e|gh|h|i|j|l|m|n|o|p|q|r|s|t|u|v|w|y|’|\s|\d)+/ig
        return regex.test(text)
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