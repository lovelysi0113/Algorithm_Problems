/**
 * ABOUT
 *
 * DATE: 2021-07-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1966
 *
 * COMMENT:
 * 우선 대기목록(queue)에 모든 문서의 중요도와 그 문서의 위치를 넣는다(push)
 * 그리고 앞에서부터 하나씩 꺼내서(pop)
 * 만약 꺼낸 문서보다 더 중요한 문서가 있다면 대기목록의 맨 뒤로 넣고(push)
 * 아니라면 그대로 인쇄를 한다(인쇄 수 +1)
 * 현재 인쇄한 문서의 위치가 location와 같을 때까지 위 작업을 반복한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let answer = [];

	for (let idx = 0; idx < parseInt(input[0]); idx++) {
		let [N, M] = input[idx * 2 + 1].split(' ').map(el => parseInt(el));
		let printList = input[idx * 2 + 2].split(' ').map((el, i) => [parseInt(el), i]);

		let print = 0;
		while (printList.length > 0) {
			// 현재 Queue의 가장 앞에 있는 문서의 ‘중요도’를 확인한다
			let paper = printList.shift();
			// 나머지 문서들 중 가장 높은 중요도를 확인한다
			let maxPriority = printList.reduce((max, el) => Math.max(max, el[0]), paper[0]);
			// 나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면, 이 문서를 인쇄하지 않고 Queue의 가장 뒤에 재배치 한다
			if (maxPriority > paper[0]) {
				printList.push(paper);
			} else {
				// 그렇지 않다면 바로 인쇄를 한다
				print += 1;
				if (paper[1] === M) {
					answer.push(print);
					break;
				}
			}
		}
	}

	console.log(answer.join('\n'));

	process.exit();
});
