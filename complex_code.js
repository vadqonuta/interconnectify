/* 
   File name: complex_code.js
   Description: This code solves a complex mathematical problem using advanced algorithms and data structures.
*/

// Data Structure: Binary Heap
class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return 2 * index + 1;
  }

  getRightChild(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  siftUp(index) {
    if (index === 0) return;
    const parentIdx = this.getParent(index);
    if (this.heap[parentIdx] < this.heap[index]) {
      this.swap(parentIdx, index);
      this.siftUp(parentIdx);
    }
  }

  siftDown(index) {
    const leftChildIdx = this.getLeftChild(index);
    const rightChildIdx = this.getRightChild(index);
    let largest = index;
    const size = this.heap.length;

    if (leftChildIdx < size && this.heap[leftChildIdx] > this.heap[largest])
      largest = leftChildIdx;

    if (rightChildIdx < size && this.heap[rightChildIdx] > this.heap[largest])
      largest = rightChildIdx;

    if (largest !== index) {
      this.swap(largest, index);
      this.siftDown(largest);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return max;
  }
}

// Algorithm: Fibonacci Heap
function fibonacciHeap(n) {
  const fibHeap = new BinaryHeap();
  fibHeap.insert(0);
  fibHeap.insert(1);

  let count = 2;
  let fibSum = 1;

  while (count < n) {
    const max = fibHeap.extractMax();
    count++;
    fibSum += max;

    fibHeap.insert(fibSum);
  }

  return fibHeap.extractMax();
}

// Execution
const n = 10;
const result = fibonacciHeap(n);
console.log(`The ${n}th Fibonacci number is: ${result}`);