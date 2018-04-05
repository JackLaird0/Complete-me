const Trie = require('./../scripts/Trie')
const chai = require('chai');
const assert = chai.assert;

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

  it('should be tested', () => {
    const trie = new Trie();

    trie.insert('apple');
    trie.insert('pizza')

    console.log(trie.findStart())
  })
})