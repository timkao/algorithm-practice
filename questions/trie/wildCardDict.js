var MagicDictionary = function() {

};

MagicDictionary.prototype.buildDict = function(dict) {
    this.trieArr = []
    dict.forEach(word => {
        if (this.trieArr[word.length] === undefined) {
            this.trieArr[word.length] = {}
        }
        addToTrie(this.trieArr[word.length], word + '$')
    })
};

function addToTrie(trie, word, start = 0) {
    if (start === word.length) return
    const curChar = word[start]
    if (trie[curChar] === undefined) {
        trie[curChar] = {}
    }
    addToTrie(trie[curChar], word, start + 1)
}

MagicDictionary.prototype.search = function(word) {
    const targetTrie = this.trieArr[word.length]
    return isInTrie(targetTrie, word, 0, true)
};

function isInTrie(trie, word, start, wildCard) {
    if (trie === undefined) return false
    if (start === word.length) {
        return trie['$'] !== undefined && !wildCard
    }
    const routes = Object.keys(trie)
    for (let i = 0; i < routes.length; i++) {
        if (word[start] === routes[i]) {
            const temp = isInTrie(trie[routes[i]], word, start + 1, wildCard)
            if (temp === true) return true
        } else if (wildCard) {
            const temp = isInTrie(trie[routes[i]], word, start + 1, false)
            if (temp === true) return true
        }
    }
    return false
}
