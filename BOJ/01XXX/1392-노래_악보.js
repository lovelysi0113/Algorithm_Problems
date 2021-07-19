/**
 * ABOUT
 *
 * DATE: 2021-07-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1392
 *
 * COMMENT:
 * 각 악보별로 몇 초에 끝나는지 계산해놓은 후
 * 알고자 하는 Q개의 시간에서 해당 시간(초)에 부르는 악보의 번호를 출력해준다
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
	let [num, time] = input[0].split(' ').map(el => parseInt(el));
	input = input.slice(1).map(el => parseInt(el));

	// 각 악보별로 몇 초에 끝나는지에 대한 정보
	// melody[idx]: idx번 악보가 끝나는 시간
	let melody = [-1];
	for (let idx = 0; idx < num; idx++) {
		melody.push(melody[idx] + input[idx]);
	}

	let answer = [];

	// 각 시간 별로 몇 번 악보인지 찾기
	for (let idx = num; idx < num + time; idx++) {
		for (let find = 1; find < melody.length; find++) {
			if (melody[find - 1] < input[idx] && input[idx] <= melody[find]) {
				answer.push(find);
				break;
			}
		}
	}

	console.log(answer.join('\n'));

	process.exit();
});
