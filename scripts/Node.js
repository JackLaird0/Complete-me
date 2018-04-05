class Node {
  constructor(letter) {
    this.letter = letter;
    this.branch = {};
    this.isCompleteWord = false;
  }
}

module.exports = Node;