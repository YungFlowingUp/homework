export function toLowerCaseButFirst(str) {
    try {
        return str = str[0].toUpperCase() + str.toLowerCase().slice(1)
    }
    catch(e) {
        console.log(e.message);
    }    
}

export function clearString(str) {
    const fixedSpaces = str.replace(/\s+/g, " ");
    const fixedCommas = fixedSpaces.replace(/ , |, | ,|,/g, ", ");
    const fixedDots = fixedCommas.replace(/ \. |\. | \.|\./g, ". ").trim();
    return fixedDots
}

export function quantityOfWords(str) {
    return clearString(str).split(" ").length;
}

export function quantityOfUniqueWords(str) {
    const arrayWithMarks = clearString(str).split(" ");
    const arrayCleaned = arrayWithMarks.map(word => word.toLowerCase().replace(/[\s.,:]/g, ''));    
    const setOfUniqueWords = new Set();
    const counterOfUniqueWords = {};
    for (let word of arrayCleaned) {
        if (!setOfUniqueWords.has(word)) {
            setOfUniqueWords.add(word);
            counterOfUniqueWords[word] = 0;
        }
        counterOfUniqueWords[word] += 1; 
    }
    return counterOfUniqueWords
}
