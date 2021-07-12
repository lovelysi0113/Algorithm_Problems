/**
 * ABOUT
 *
 * DATE: 2021-07-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42628
 *
 * COMMENT:
 * [ 힙(Heap) ]
 * 문제에서 주어진 명령어에 따라 연산을 처리하면 된다
 * I 숫자 => 숫자를 배열에 넣고(push) 오름차순 정렬(sort)한다
 * D 1 => 최댓값을 뺀다(pop)
 * D -1 => 최솟값을 뺀다(shift)
 **/

function solution(operations) {
	const heap = [];

	operations.forEach(el => {
		let [op, data] = el.split(' ');
		data = parseInt(data);

		if (op === 'I') {
			// 큐에 주어진 숫자를 삽입합니다
			heap.push(data);
			heap.sort((a, b) => a - b);
		} else {
			if (data === 1 && heap.length > 0) {
				// 큐에서 최댓값을 삭제합니다
				heap.pop();
			} else if (data === -1 && heap.length > 0) {
				// 큐에서 최솟값을 삭제합니다
				heap.shift();
			}
		}
	});

	if (heap.length === 0) {
		return [0, 0];
	} else {
		return [heap[heap.length - 1], heap[0]];
	}
}
