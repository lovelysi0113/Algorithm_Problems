/**
 * ABOUT
 *
 * DATE: 2021-06-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42587
 *
 * COMMENT:
 * [ 스택/큐 ]
 * 우선 대기목록(queue)에 모든 문서의 중요도와 그 문서의 위치를 넣는다(push)
 * 그리고 앞에서부터 하나씩 꺼내서(pop)
 * 만약 꺼낸 문서보다 더 중요한 문서가 있다면 대기목록의 맨 뒤로 넣고(push)
 * 아니라면 그대로 인쇄를 한다(인쇄 수 +1)
 * 현재 인쇄한 문서의 위치가 location와 같을 때까지 위 작업을 반복한다
 **/

function solution(priorities, location) {
	let waitingList = [];
	priorities.forEach((el, idx) => {
		waitingList.push([el, idx]);
	});

	let print = 0;
	while (waitingList.length > 0) {
		let paper = waitingList.shift();
		let maxPriority = waitingList.reduce((max, el) => {
			return max < el[0] ? el[0] : max;
		}, paper[0]);
		if (maxPriority > paper[0]) {
			waitingList.push(paper);
		} else {
			print += 1;
			if (paper[1] === location) {
				break;
			}
		}
	}

	return print;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42587
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(priorities, location) {
	let waiting = priorities.map((priority, idx) => [priority, idx]);

	let print = 0;

	while (waiting.length > 0) {
		// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다
		let [priority, idx] = waiting.shift();
		priorities.shift();
		let max = Math.max(...priorities);
		if (priority < max) {
			// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다
			waiting.push([priority, idx]);
			priorities.push(priority);
		} else {
			// 3. 그렇지 않으면 J를 인쇄합니다
			print++;
			if (idx === location) return print;
		}
	}
}
