const book = {
  id: 1,
  text: 'Once upon a time, there was a book with words. The book had not been catalogued, but would catch the eyes of onlookers nonetheless.'
};

function findWordsStartingWith(book, str) {
  const result = [];
  let tempString = '';
  let beginIndex = 0;
  const searchIn = book.text.toLowerCase();
  const searchWith = str.toLowerCase();

  for (let i = 0; i < searchIn.length; i++) {
    if (searchIn[i] !== ' ') {
      tempString += searchIn[i]
    } else {
      beginIndex = i - tempString.length;
      if (tempString[0] === searchWith[0]) {
        for (let j = 1; j < searchWith.length; j++) {
          if (tempString[j] !== searchWith[j]) {
            break
          }
          if (j === searchWith.length - 1) {
            result.push(beginIndex);
          }
        }
      }
      tempString = '';
    }
  }
  return result;
}


console.log(findWordsStartingWith(book, 'the')); // should return [ 18, 47, 97 ]
console.log(findWordsStartingWith(book, 'cat')); // should return [ 69, 91 ]


