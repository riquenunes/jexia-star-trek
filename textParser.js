module.exports = {
  // returns an array with a list of pIqaD letters represented by the Roman alphabet
  // basically we do this so we can know the difference between t and tlh, for example
  // as both are different letters in Klingon
  getTokenList(text) {
    const tokenList = []
    text = text.toLowerCase()

    for (let i = 0; i < text.length; i++) {
      let currentLetter = text[i]

      tokenList.push(currentLetter)
    }

    return tokenList
  }
}