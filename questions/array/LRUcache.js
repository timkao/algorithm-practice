/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = {}
  this.cacheCount = 0
  this.capacity = capacity
  this.keyPos = {}
  this.lruKeys = []
  this.next = 0
  this.oldest = 0
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.cache[key] !== undefined) {
      const curPos = this.keyPos[key]
      this.lruKeys[curPos] = null

      this.lruKeys[this.next] = key
      this.keyPos[key] = this.next
      this.next += 1

      return this.cache[key]
  }
  return -1
};

// [15, 7, 9, 19, 11]
/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.cache[key] === undefined) {
      if (this.cacheCount >= this.capacity) {
          while (this.lruKeys[this.oldest] === null) {
              this.oldest += 1
          }
          const invalidKey = this.lruKeys[this.oldest]
          delete this.cache[invalidKey]
          delete this.keyPos[invalidKey]
          this.lruKeys[this.oldest] = null
          this.oldest += 1
          this.cacheCount -= 1
      }
      this.cacheCount += 1
      this.lruKeys[this.next] = key
      this.keyPos[key] = this.next
      this.next += 1
      this.cache[key] = value
  } else {
      const curPos = this.keyPos[key]
      this.lruKeys[curPos] = null

      this.lruKeys[this.next] = key
      this.keyPos[key] = this.next
      this.next += 1
      this.cache[key] = value
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
