import Node from './Node';

class Trie {
  constructor() {
    this.root = new Node(null);
    this.wordCount = 0;
    this.suggestions = [];
  } 

  insert(data) {
    let dataBranch = Array.from(data);
    let currNode = this.root;

    while (dataBranch.length) {
      let letter = dataBranch.shift();
      let child = currNode.branch[letter];

      if(!child) {
        child = new Node(letter);
        currNode.branch[letter] = child;
      }
      currNode = currNode.branch[letter];
    }

    if (currNode.isCompleteWord) {
      return;
    } else {
      currNode.isCompleteWord = true;
      this.wordCount++;
    }
  }

  count() {
    return this.wordCount;
  }

  findNode(str) {
    let strArray = Array.from(str);
    let currNode = this.root;

    while (strArray.length) {
      let letter = strArray.shift();
      let child = currNode.branch[letter];
      if(!child) {
        return null;
      }
      currNode = child;
    }
    return currNode;
  }

  findSuggestion(position, data) {
    if (Object.keys(position.branch).length !== 0) {
      Object.keys(position.branch).forEach( letter => {
        let currNode = position.branch[letter];

        if(currNode.isCompleteWord) {
          this.suggestions.push(data + letter);
        } 
        this.findSuggestion(currNode, data + letter);
      });
    }
  }

  suggest(data) {
    this.suggestions = [];
    let currPosition = this.findNode(data.toLowerCase());

    if (currPosition === null) {
      return [];
    }
    this.findSuggestion(currPosition, data);
    return this.suggestions;
  }

  populate(data) {
    data.forEach( word => this.insert(word.toLowerCase()));
  }
}

module.exports = Trie;