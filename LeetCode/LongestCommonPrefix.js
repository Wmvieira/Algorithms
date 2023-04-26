var longestCommonPrefix = function(strs) {
    const trie = new Trie()

    for(let str of strs) {
        if(str == "") return ""
        trie.add(str)
    }
        

    return trie.getLongestPrefix()
};

function Node(value) {
    this.value = value
    this.isEndOfWord = false // false by default, a green node means this flag is true
    this.children = new Map() // children are stored as Map, where key is the letter and value is a TrieNode for that letter 
}

class Trie {
    constructor() {
        this.root = new Node(null)
        
    }

    add(word) {
        let current = this.root

        for(let c of word) {
            if(current.children.get(c) === undefined) current.children.set(c, new Node(c))

            current = current.children.get(c)
        }
        current.isEndOfWord = true
    }
    
    getLongestPrefix() {
        let current = this.root
        let result = ""

        while(current.children.size > 0 && current.children.size <= 1 && !current.isEndOfWord) {
            current = current.children.get(Array.from(current.children)[0][0])
            result += current.value
        }
        return result
    }
}


console.log(longestCommonPrefix(['abc', 'ab']))