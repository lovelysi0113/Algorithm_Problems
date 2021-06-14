/**
 * ABOUT
 *
 * DATE: 2021-06-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/15650
 *
 * COMMENT:
 * 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열, 즉 M개를 선택할 때 나올 수 있는 모든 조합을 구해야하는 문제이다
 * 이때 조합의 순서는 오름차순으로 정렬해야 한다
 * 여기서 포인트는 현재 선택한 숫자를 제외한 나머지 수(오른쪽 부분)에서 M-1개의 조합을 구해 합친다는 것이다
 * 재귀를 사용하여 한 개만 선택해야하는 경우 이외에는 하나씩 숫자를 선택하고 나머지 수에서 다시 조합을 구하는 것을 반복하면 된다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
	let [N, M] = input;

	// 1 ~ N까지 자연수 리스트
	let numbers = [];
	for (let idx = 1; idx <= N; idx++) {
		numbers.push(idx);
	}

	// M개를 고르는 조합을 구현한 함수
	const combination = (numList, select) => {
		const results = [];
		if (select === 1) {
			return numList.map(el => [el]);
		}
		numList.forEach((num, idx, origin) => {
			// 현재 선택한 수(num) 이후의 배열(나머지)에서 다음 수를 고르기(조합)
			let rest = origin.slice(idx + 1);
			let combArr = combination(rest, select - 1);
			// 나머지로 구한 조합(combArr)에 현재 수(num) 추가하기
			let combResult = combArr.map(comb => [num, ...comb]);
			// 현재 구한 조합을 results에 넣기
			results.push(...combResult);
		});
		return results;
	};

	console.log(
		combination(numbers, M)
			.map(el => el.join(' '))
			.join('\n'),
	);

	process.exit();
});
