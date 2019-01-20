var totalFruit = function(tree) {
  if(!tree.length) return 0;
  if(tree.length === 1) return 1;

  let a = -1,
      b = -1,
      max = 0,
      count = 0,
      i = 0,
      secondIndex = -1;

  while(i < tree.length) {
      if(a === -1 || a === tree[i]) {
          a = tree[i];
          count++;
          i++
      } else if(b === -1 || b === tree[i]) {
          b = tree[i];
          count++;
          if(secondIndex === -1) secondIndex = i;
          i++;
      } else {
          if(count > max) max = count;
          i = secondIndex; // this is key! use it to remember the last location
          secondIndex = -1;
          count = 0;
          a = -1;
          b = -1;
      }
  }
  if(count > max) max = count;
  return max;
};
