const klingonTranslator = require('./klingonTranslator')
const inputText = process.argv.splice(2).join(' ')

if (klingonTranslator.isTextTranslatable(inputText)) {
    console.log(klingonTranslator.translateText(inputText))
} else {
    console.log('input text is not translatable')
}