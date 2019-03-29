var topKFrequent = function(nums, k) {
  const result = []
  const freqMap = createMap(nums)
  Object.keys(freqMap).forEach(numKey => {
      const curFreq = freqMap[numKey]
      if (result.length < k - 1) {
          result.push([Number(numKey), curFreq])
      } else if (result.length === k - 1) {
          result.push([Number(numKey), curFreq])
          result.sort((a, b) => a[1] - b[1])
      } else if (result.length === k) {
          if (curFreq > result[0][1]) {
              result[0][0] = Number(numKey)
              result[0][1] = curFreq
              result.sort((a, b) => a[1] - b[1])
          }
      }
  })
  return result.map(arr => arr[0])
};

function createMap(nums) {
  const result = {}
  nums.forEach(num => {
      if (result[num] === undefined) {
          result[num] = 1
      } else {
          result[num] += 1
      }
  })
  return result
}

var topKFrequentOpt = function(nums, k) {
  const map = new Map();
  const freqMap = [];
  let result = [];

  // This builds of map of num: frequency. After looping, it looks like this
  // {5: 2, 1: 4, 4: 2, 3: 1, 6: 1}
  for (const num of nums) {
      if (!map.has(num)) {
          map.set(num, 0);
      }
      map.set(num, map.get(num) + 1);
  }

  // Now convert that map into an array of arrays, where the array index represents the frequency.
  // This is the "key insight" to solving this problem w/o sorting as array indexes are naturally in order
  // After this loop, freqMap looks like this
  // [,[3,6],[5,4],,[1]]
  map.forEach((occurrence, int) => {
      const set = typeof freqMap[occurrence] === 'undefined' ? [] : freqMap[occurrence];
      set.push(int);
      freqMap[occurrence] = set;
  });

  // Since the most frequent entries are in the tail of the array, loop from the end and fill result
  // until it has k elements. After loop, result looks like this
  // [1, 5, 4]
  for (let i = freqMap.length - 1; i >= 0; i--) {
      if (typeof freqMap[i] !== 'undefined') {
          freqMap[i].forEach((e) => result.push(e));
      }
      if (result.length > k) {
          result = result.slice(0, k);
      }
      if (result.length === k) {
          break;
      }
  }

  return result;
};
