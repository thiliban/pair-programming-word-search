const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;    
    }
    if (letters = []) {
        return false;
    }
    for (let i = 0; i < word.length; i++){
        if(letters[i].indexOf(word[i].join('')) > -1){
            return true;
        }
    }
    return false;
}

module.exports = wordSearch


