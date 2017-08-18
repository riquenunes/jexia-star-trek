const alphabet = ['a', 'b', 'ch', 'd', 'e', 'gh', 'h', 'i', 'j', 'l', 'm', 'n', 'ng', 'o', 'p', 'q', 'q', 'r', 's', 't', 'tlh', 'u', 'v', 'w', 'y', '’']
// here we make a RegExp with the klingonAlphabet array reversed, so that 'ng'
// can be matched instead of 'n', for example
const regex = new RegExp(alphabet.slice().reverse().join('|') + '|\\d', 'ig')

module.exports = {
  alphabet,
  regex
}
