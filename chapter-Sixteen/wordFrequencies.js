/*
  interview question 16.2
*/


function frequency(book) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let temp = '';
  const table = {}
  for (var i = 0; i < book.length; i++) {
    if (book[i] === ' ' && i !== book.length - 1) {
      if (temp.length > 0) {
        if (table[temp] !== undefined) {
          table[temp]++
        } else {
          table[temp] = 1;
        }
      }
      temp = '';
    } else {
      const currChar = book[i].toLowerCase();
      if (letters.includes(currChar)) {
        temp += currChar;
      }
    }
  }
  return table;
}

console.log(frequency('his is my Frst post in this Forum..So i hope the Perfect Answer... I am working on ASP,VBSCript,Javascript.. I have a textbox and i want to enter Numerics,alphanumerics in the text box.'))


