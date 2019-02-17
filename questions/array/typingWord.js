/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 *
 * 透過計算有效長度來快速獲得答案
 *
 */
var wordsTyping = function(sentence, rows, cols) {
  const str = sentence.join(' ') + ' '
  let start = 0 // 有效長度
  for (let i = 1; i <= rows; i++) {
    start += cols // 新的一行全部貢獻給有效長度
    if (str[start % str.length] === ' ') { // 完整的一個單字剛好在該 column 結尾則等同我們賺了一個有效長度
      start += 1
    } else {
      while (start > 0 && str[(start - 1) % str.length] !== ' ') {
        start -= 1 // 若是結尾在某個單字中間，則等同我們賠上這個單字的開頭到目前結尾的位置的長度
      }
    }
  }
  return Math.floor(start / str.length)
};
