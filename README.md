# English to Klingon Translator

Hi there! This is my entry to Jexia's Back-end Start Trek Test.
The project was made using JavaScript and Node.js because they're the technologies I felt more comfortable with and I felt it wouldn't give a hard time to whoever is going to test this.

### Running
First, make sure you have Node.js (I have tested it with v6.11.2) installed. If not you can get it from [here](https://nodejs.org/).

Once Node is installed you can run the project this way:
```sh
$ git clone https://github.com/riquenunes/jexia-star-trek.git
$ cd jexia-star-trek
$ npm install
$ npm start %NAME%
```

### Features
- Supports characters that are represented by more than one latin letter (gh, tlh)
- Supports numbers


### About the code
**index.js** - application entry point. It gets the command line args, translates and searches for a character in stapi

**klingonAlphabet.js** - an simple module with an array of Latin letters that represent the Klingon Alphabet and a Regex that's able to match every character of pIqaD

**klingonTranslator.js** - where the magic happens!

**stapi.js** - module responsible for communicating with stapi

**textParser.js** - this module contains a function that takes a string and returns an array of Klingon characters (I call them "tokens" throughout the code)

**tests** - contains all the application tests

I also left some comments explaining some parts of the actual code. Feel free to check it out!

Hope you like it!
