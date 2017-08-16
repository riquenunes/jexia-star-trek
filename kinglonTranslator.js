module.exports = {
    // checks if the input string contains only characters of the pIqaD​ alphabet
    isTextTranslatable(text) {
        const regex = /(a|b|ch|d|e|gh|h|i|j|l|m|n|o|p|q|r|s|t|u|v|w|y|’|\s|\d)+/ig

        return regex.test(text)
    },
    getKinglonCharHex(latinChar) {

    }
}