const Trie = require('./../scripts/Trie')
const chai = require('chai');
const assert = chai.assert;
const fs = require('fs')

describe('Trie', () => {

  it('should add a word', () => {
    const trie = new Trie();

    trie.insert('apple');

    assert.equal(trie.wordCount, 1);
  })

  it('should increase the word count when adding multiple words', () => {
    const trie = new Trie();

    trie.insert('apple');
    trie.insert('pizza');
    trie.insert('pizzeria');

    assert.equal(trie.wordCount, 3);
  })

  it('should not increase the word count if the same word is added', () => {
    const trie = new Trie();

    trie.insert('apple');
    trie.insert('apple');

    assert.equal(trie.wordCount, 1);
  })

  it('should suggest words from a few letters', () => {
    const trie = new Trie();

    trie.insert('pizza');
    trie.insert('pizzeria');
    trie.suggest('piz');
    
    assert.equal(trie.suggestions.length, 2);
  })

  it('should suggest both words that are nested in other words', () => {
    const trie = new Trie();

    trie.insert('app');
    trie.insert('application');
    trie.suggest('ap');

    assert.equal(trie.suggestions.length, 2);
  })

  it('should populate given the dictionary', () => {
    const text = "/usr/share/dict/words";
    const dictionary = fs.readFileSync(text).toString().trim().split('\n');
    const trie = new Trie();

    trie.populate(dictionary)

    assert.equal(trie.wordCount, 234371)
  })

  it('is should suggest a selected word first', () => {
    const trie = new Trie();

    trie.insert('app');
    trie.insert('application');
    trie.suggest('ap');
    trie.select('application');
    trie.suggest('ap');

    assert.deepEqual(trie.suggestions, ['application', 'app'])
    

    // console.log(trie.)
  })
})