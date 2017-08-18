const klingonTranslator = require('./klingonTranslator')
const stapi = require('./stapi')
const inputText = process.argv.splice(2).join(' ')

if (klingonTranslator.isTextTranslatable(inputText)) {
  console.log(klingonTranslator.translateText(inputText))
} else {
  console.log('input text is not translatable')
}

stapi.searchCharactersByName(inputText).then(characters => {
  if (characters && characters.length) {
    return stapi.getCharacterDetails(characters[0].uid)
  }

  return Promise.reject('no matching character was found')
}).then(character => {
  console.log(character.characterSpecies[0].name)
}).catch(err => {
  console.log(err)
})
