/**
 * ABOUT
 *
 * DATE: 2021-06-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10974
 *
 * COMMENT:
 * 조합과 비슷한 방식이다
 * 다만 조합과 다른 점은 순열은 현재 선택한 숫자를 제외한 나머지 모든 수에서 N-1개의 조합을 구해 합친다는 것이다
 * 재귀를 사용하여 한 개만 선택해야하는 경우 이외에는 하나씩 숫자를 선택하고 나머지 수에서 다시 조합을 구하는 것을 반복하면 된다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
	input = parseInt(line);
}).on('close', function () {
	// 순열을 구현한 함수
	const permutation = (numList, select) => {
		const results = [];
		if (select === 1) {
			return numList.map(el => [el]);
		}
		numList.forEach((num, idx, origin) => {
			// 현재 선택한 수(num)를 제외한 배열에서 다음 수를 고르기(조합으로 볼 수 있음)
			let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
			let permArr = permutation(rest, select - 1);
			// num을 제외한 배열로 구한 조합(permArr)에 현재 수(num) 추가하기
			let permResult = permArr.map(perm => [num, ...perm]);
			// results에 넣기
			results.push(...permResult);
		});
		return results;
	};

	// 1 ~ N까지 자연수 리스트
	let numbers = [];
	for (let idx = 1; idx <= input; idx++) {
		numbers.push(idx);
	}

	console.log(
		permutation(numbers, input)
			.map(el => el.join(' '))
			.join('\n'),
	);

	process.exit();
});
