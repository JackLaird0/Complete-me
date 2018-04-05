const Node = require('./../scripts/Node');
const chai = require('chai');
const assert = chai.assert;

describe ('Node', () => {

  it('should have a letter', () => {
    let node = new Node('j');

    assert.equal(node.letter, 'j');
  })

  it('should have a branch that is an empty object', () => {
    let node = new Node('a');

    assert.deepEqual(node.branch, {});
  })

  it('should not be a complete word when created', () => {
    let node = new Node('v');

    assert.equal(node.isCompleteWord, false);
  })
})