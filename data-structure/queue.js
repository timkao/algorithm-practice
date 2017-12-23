// data structure
// through differet variables to record what happened in a functional object

const Queue = function(){
  this.len = 0;
  this.que = [];
  this.head = 0;
};

Queue.prototype.enqueue = function(ele){
  this.que[this.len] = ele;
  this.len++;
}


Queue.prototype.dequeue = function(){
  if (this.len === this.head) {
    return undefined;
  }
  const result = this.que[this.head];
  this.head++
  return result;
}

Queue.prototype.size = function(){
  return this.len - this.head;
}
