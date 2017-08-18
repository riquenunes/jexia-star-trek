const klingonTranslator = require('./klingonTranslator')
const stapi = require('./stapi')
const inputText = process.argv.splice(2).join(' ')

if (klingonTranslator.isTextTranslatable(inputText)) {
  console.log(klingonTranslator.translateText(inputText))

  stapi.searchCharactersByName(inputText).then(characters => {
    return stapi.getCharacterDetails(characters[0].uid)
  }).then(character => {
    console.log(character.characterSpecies[0].name)
  })
} else {
  console.log('input text is not translatable')
}
