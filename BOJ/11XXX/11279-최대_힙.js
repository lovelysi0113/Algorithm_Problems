/**
 * ABOUT
 *
 * DATE: 2021-06-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/11279
 *
 * COMMENT:
 * 문제에서 요구하는 최대 힙을 구현하면 된다
 * 1. 입력값: x -> 배열에 자연수 x를 넣는다
 * 2. 입력값: 0 -> 배열에서 가장 큰 값을 출력하고, 그 값을 배열에서 제거한다
 * javascript에서는 지원하는 라이브러리가 없으므로 heap을 직접 구현해야 한다
 **/

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp(current = this.size() - 1) {
    if (current === 0) {
      return;
    }
    let currentValue = this.heap[current];
    let parent = Math.floor((current - 1) / 2);
    let parentValue = this.heap[parent];
    if (parentValue >= currentValue) {
      return;
    }
    [this.heap[current], this.heap[parent]] = [parentValue, currentValue];
    this.bubbleUp(parent);
  }
  delete() {
    let result = this.heap[0];
    let last = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = last;
      this.trickleDown();
    }
    return result;
  }
  trickleDown(current = 0) {
    const leftChild = 2 * current + 1;
    const rightChild = 2 * current + 2;
    const length = this.size();
    let largest = current;
    if (leftChild <= length && this.heap[leftChild] > this.heap[largest]) {
      largest = leftChild;
    }
    if (rightChild <= length && this.heap[rightChild] > this.heap[largest]) {
      largest = rightChild;
    }
    if (largest !== current) {
      [this.heap[largest], this.heap[current]] = [
        this.heap[current],
        this.heap[largest],
      ];
      this.trickleDown(largest);
    }
  }
  size() {
    return this.heap.length;
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  let heap = new MaxHeap();
  let answer = [];
  input.slice(1).forEach((num) => {
    if (num === 0) {
      let result = heap.delete();
      if (result) {
        answer.push(result);
      } else {
        answer.push(0);
      }
    } else {
      heap.insert(num);
    }
  });

  console.log(answer.join("\n"));

  process.exit();
});