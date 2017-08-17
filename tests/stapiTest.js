const stapi = require('../stapi')
const chai = require('chai')
const expect = chai.expect
const axios = require('axios')
const querystring = require('querystring')

describe('stapi', () => {
  it('searchCharactersByName should return a list of matching characters', () => {
    const originalFunction = axios.post
    axios.post = (url, body) => {
      return Promise.resolve({"data":{"page":{"pageNumber":0,"pageSize":50,"numberOfElements":3,"totalElements":3,"totalPages":1,"firstPage":true,"lastPage":true},"sort":{"clauses":[]},"characters":[{"uid":"CHMA0000068639","name":"Nyota Uhura","gender":"F","yearOfBirth":2239,"monthOfBirth":null,"dayOfBirth":null,"placeOfBirth":null,"yearOfDeath":null,"monthOfDeath":null,"dayOfDeath":null,"placeOfDeath":null,"height":null,"weight":null,"deceased":null,"bloodType":null,"maritalStatus":"SINGLE","serialNumber":null,"mirror":false,"alternateReality":false},{"uid":"CHMA0000023576","name":"Nyota Uhura","gender":"F","yearOfBirth":2239,"monthOfBirth":null,"dayOfBirth":null,"placeOfBirth":null,"yearOfDeath":2268,"monthOfDeath":null,"dayOfDeath":null,"placeOfDeath":null,"height":null,"weight":null,"deceased":null,"bloodType":null,"maritalStatus":"SINGLE","serialNumber":null,"mirror":true,"alternateReality":false},{"uid":"CHMA0000115364","name":"Nyota Uhura","gender":"F","yearOfBirth":2233,"monthOfBirth":null,"dayOfBirth":null,"placeOfBirth":null,"yearOfDeath":null,"monthOfDeath":null,"dayOfDeath":null,"placeOfDeath":null,"height":null,"weight":null,"deceased":null,"bloodType":null,"maritalStatus":null,"serialNumber":null,"mirror":false,"alternateReality":true}]}})
    }

    return stapi.searchCharactersByName('Uhura').then(characters => {
      expect(characters).to.be.an('Array')

      characters.forEach(c => {
        expect(c).to.have.property('uid')
        expect(c).to.have.property('name')
        expect(c).to.have.property('gender')
      })

      axios.post = originalFunction
    })
  })

  it('searchCharactersByName should call stapi passing a name as parameter', done => {
    const originalFunction = axios.post
    axios.post = (url, body) => {
      expect(url).to.equal('http://stapi.co/api/v1/rest/character/search')
      expect(body).to.equal(querystring.stringify({ name: 'Uhura' }))
      axios.post = originalFunction
      done()
    }

    stapi.searchCharactersByName('Uhura')
  })

  it('getCharacterDetails should return a specific character details', () => {
    const originalFunction = axios.get
    axios.get = url => {
      return Promise.resolve({"data":{"character":{"uid":"CHMA0000068639","name":"Nyota Uhura","gender":"F","yearOfBirth":2239,"monthOfBirth":null,"dayOfBirth":null,"placeOfBirth":null,"yearOfDeath":null,"monthOfDeath":null,"dayOfDeath":null,"placeOfDeath":null,"height":null,"weight":null,"deceased":null,"bloodType":null,"maritalStatus":"SINGLE","serialNumber":null,"mirror":false,"alternateReality":false,"species":[]}}})
    }

    return stapi.getCharacterDetails('CHMA0000068639').then(character => {
      expect(character).to.be.an('Object')
      expect(character).to.have.property('uid')
      expect(character).to.have.property('name')
      expect(character).to.have.property('gender')
      expect(character).to.have.property('species')

      axios.get = originalFunction
    })
  })

  it('getCharacterDetails should call stapi passing a character\'s uid', done => {
    const originalFunction = axios.get
    axios.get = url => {
      expect(url).to.equal('http://stapi.co/api/v1/rest/character?uid=CHMA0000068639')
      axios.post = originalFunction
      done()
    }

    stapi.getCharacterDetails('CHMA0000068639')
  })
})