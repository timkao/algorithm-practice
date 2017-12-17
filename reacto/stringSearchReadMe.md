String Search
(ie indexOf)

Prompt

You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).
Examples
indexOf('or', 'hello world'); // should return 7
indexOf('hello world', 'or'); // should return -1
indexOf('howdy', 'hello world'); // should return -1
indexOf('oox', 'ooboxoooxo'); // should return 6
Common approaches
built-in methods
Most students' first instincts will be to use built-in string methods like indexOf(), includes() or substring(). indexOf() is, of course, explicitly forbidden; steer them away from methods like includes() and substring().
--
Many whiteboard interviews will be language-agnostic and focus on the underlying concepts. You will want to show that you understand how these methods work, not that you happened to read the right documentation the night before.
--
You may actually be adding more (hidden) complexity. Look into how indexOf(), includes() and substring() work under the hood. Many built-in methods actually add an operation that's O(n), or worse.
Common approaches
split() and loop
Most students also move to split the haystack into an array of characters, and then loop through.
--
This approach would work; but imagine the space complexity of generating a new array and then holding it in memory for a very, very large haystack. You would be introducing another O(n) dimension in time and space, where n is the length of the haystack.
--
If they're in a groove, have them finish out this approach and pseudocode it; then ask them how they would do this without generating a second copy of the haystack.
Solution(s)
function indexOf (needle, haystack) {
  for (let hIdx = 0; hIdx <= haystack.length - needle.length; hIdx++) {
    for (let nIdx = 0; nIdx < needle.length; nIdx++) {
      if (haystack[hIdx + nIdx] !== needle[nIdx]) break;
      if (nIdx + 1 === needle.length) return hIdx;
    }
  }
  return -1;
}
Big O
Where n is the haystack size and m the needle size, the solution is O(n*m).

Why?

function indexOf (needle, haystack) {
  for (let hIdx = 0; hIdx <= haystack.length - needle.length; hIdx++) {
    //O(n * ...) where n is the number of letters in haystack
    for (let nIdx = 0; nIdx < needle.length; nIdx++) {
      //O(m * ...) where m is the number of letters in needle
      if (haystack[hIdx + nIdx] !== needle[nIdx]) break;
      //O(1) constant
      if (nIdx + 1 === needle.length) return hIdx;
      //O(1) constant
    }
  }
  return -1; O(1) constant
}

So, O(n * (m * (1 + 1)))=> O(n*m)

There are other algorithms, such as Boyer-Moore (well, modified slightly), that can perform at O(n+m) time—or even faster.
