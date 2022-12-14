class minHeap {

    constructor() {
      this.heap = [];
    }
  
    getParentIdx(childIdx) {
      return Math.floor((childIdx - 1) / 2);
    }
  
    getLeftChildIdx(parentIdx) {
      return (parentIdx + 1) * 2 - 1;
    }
  
    getRightChildIdx(parentIdx) {
      return (parentIdx * 2) + 1;
    }
  
    getParentValue(childIdx) {
      return this.heap[this.getParentIdx(childIdx)];
    }
  
    getLeftChildValue(parentIdx) {
      return this.heap[this.getLeftChildIdx(parentIdx)];
    }
    
    hasParent(idx) {
      return this.getParentIdx(idx) >= 0;
    }
  
    hasLeftChild(parentIdx) {
      return this.getLeftChildIdx(parentIdx) < this.heap.length;
    }
  
    swap(idxA, idxB) {
      let temp = this.heap[idxA];
      this.heap[idxA] = this.heap[idxB];
      this.heap[idxB] = temp;
    }
  
    insert(value) {
      this.heap.push(value);
      let idx = this.heap.length - 1;
      while(this.hasParent(idx) && this.parent(idx) > this.heap[idx]) {
        this.swap(idx, this.getParentIdx(idx));
        idx = this.getParentIdx(idx);
      }
      return this;
    }
  
    extract() {
        if (this.heap.length == 0) return null;
        let temp = this.heap[0]
        this.swap(0, this.heap.length-1);
        this.heap.pop();
        curridx = 0;
        whilte (this.hasLeftChild(currIdx)){
            if (!this.hasRightChild(currIdx)){
                if (this.heap[this.getLeftChildIdx(currIdx)])
            }
        }
      // Remove and return the min number
      // from the heap. Return null if empty.
  
      // Heap must be reordered following removal.
      // It must remain a minHeap.
  
      // ALGO 
      //  1. Save the first node to a temp var.
      //  2. Pop last node off and set idx0 equal to the popped value.
      //  3. Iteratively swap the old last node that is now at idx0 with it's
      //  *  smallest child IF the smallest child is smaller than it.
      //  4. Return temp var.
    }
  
  }