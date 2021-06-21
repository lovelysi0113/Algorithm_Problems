/**
 * ABOUT
 *
 * DATE: 2021-06-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1655
 *
 * COMMENT:
 * 최소힙과 최대힙을 사용하여 중간값을 찾았다
 * 1. 최소힙의 크기 >= 최대힙의 크기
 * 2. 최소힙의 root < 최대힙의 root
 * 를 항상 만족하도록 숫자를 넣으면 중간값은 항상 최소힙의 root가 된다
 * 
 * (참고) 최대힙을 구현하기 위해 참고한 사이트: https://evan-moon.github.io/2019/10/12/introduction-data-structure-heap/#%ED%9E%99%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90
 **/

// 최소 힙
class MinHeap {
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
        let parent = Math.floor((current-1) / 2);
        let parentValue = this.heap[parent];
        if (parentValue >= currentValue) {
            return;
        }
        [ this.heap[current], this.heap[parent] ] = [ parentValue, currentValue ]
        this.bubbleUp(parent);
    }
    change(value) {
        this.heap[0] = value;
        this.trickleDown();
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
            [this.heap[largest], this.heap[current]] = [this.heap[current], this.heap[largest]];
            this.trickleDown(largest);
        }
    }
    size() {
        return this.heap.length;
    }
}
// 최대 힙
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
        let parent = Math.floor((current-1) / 2);
        let parentValue = this.heap[parent];
        if (parentValue <= currentValue) {
            return;
        }
        [ this.heap[current], this.heap[parent] ] = [ parentValue, currentValue ]
        this.bubbleUp(parent);
    }
    change(value) {
        this.heap[0] = value;
        this.trickleDown();
    }
    trickleDown(current = 0) {
        const leftChild = 2 * current + 1;
        const rightChild = 2 * current + 2;
        const length = this.size();
        let smallest = current;
        if (leftChild <= length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }
        if (rightChild <= length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }
        if (smallest !== current) {
            [this.heap[smallest], this.heap[current]] = [this.heap[current], this.heap[smallest]];
            this.trickleDown(smallest);
        }
    }
    size() {
        return this.heap.length;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
})
.on('close', function () {
    let answer = [];
    
    let minHeap = new MinHeap();
    let maxHeap = new MaxHeap();
    
    input.slice(1).forEach(num => {
        if (minHeap.size() === maxHeap.size()) {
            minHeap.insert(num);
        } else {
            maxHeap.insert(num);
        }
        if (minHeap.heap[0] > maxHeap.heap[0]) {
            let chgMin = minHeap.heap[0];
            let chgMax = maxHeap.heap[0];
            minHeap.change(chgMax);
            maxHeap.change(chgMin);
        }
      answer.push(minHeap.heap[0]);
    });
    
    console.log(answer.join('\n'));
    
    process.exit();
});