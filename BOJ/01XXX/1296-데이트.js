/**
 * ABOUT
 *
 * DATE: 2021-07-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1296
 *
 * COMMENT:
 * 두 사람의 이름에서 L, O, V, E가 각각 몇개 있는지 체크한 후 확률을 계산해준다
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
	// 이름에 L, O, V, E가 몇개 있는지 세는 함수
	const cntLove = name => {
		let love = [0, 0, 0, 0];
		for (let idx = 0; idx < name.length; idx++) {
			if (name[idx] === 'L') love[0] += 1;
			if (name[idx] === 'O') love[1] += 1;
			if (name[idx] === 'V') love[2] += 1;
			if (name[idx] === 'E') love[3] += 1;
		}
		return love;
	};

	let man = input[0];

	// 여자 이름 오름차순으로 정렬
	let women = input.slice(2);
	women.sort((a, b) => {
		if (a > b) return 1;
		else if (a === b) return 0;
		else return -1;
	});

	// 성공할 확률이 가장 높은 여자 이름 찾기
	let maxPercent = -1;
	let maxName = '';

	women.forEach(woman => {
		let love1 = cntLove(man);
		let love2 = cntLove(woman);
		let total = love1.map((el, idx) => el + love2[idx]);

		let [L, O, V, E] = total;
		let score = ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;

		if (score > maxPercent) {
			maxPercent = score;
			maxName = woman;
		}
	});

	console.log(maxName);

	process.exit();
});
