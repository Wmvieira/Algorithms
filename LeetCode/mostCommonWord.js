/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {

    let map = new Map();
    let commonWord = '';
    let repetition = 0;
  
    paragraph = paragraph.replace(/[^\w\s]/gi, ' ').replace(/\s+/g, ' ').toLowerCase().split(' ');

    for(let i=0; i<paragraph.length; i++) {
        
        if(map.get(paragraph[i]) > 0) {

            map.set(paragraph[i], map.get(paragraph[i])+1)

            if(map.get(paragraph[i]) > repetition) {
                repetition = map.get(paragraph[i])
                commonWord = paragraph[i]
            }

        
        } else if(banned.filter(b => b == paragraph[i]).length <= 0) {
            map.set(paragraph[i], 1)
            
            if(repetition == 0) {
                commonWord = paragraph[i]
                repetition = 1
            } 
        }
    }


    console.log(commonWord);    

    return commonWord;    
};


mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"])