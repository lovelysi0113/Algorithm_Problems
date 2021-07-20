/**
 * ABOUT
 *
 * DATE: 2021-07-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1996
 *
 * COMMENT:
 * 지뢰 찾기 map에서 하나씩 검사하며 8방향으로 지뢰가 몇개인지 체크해준다
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
	let N = parseInt(input[0]);

	let map = Array.from(Array(N), () => Array(N).fill(0));

	input = input.slice(1).map(el => el.split(''));

	const DELTA = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];
	for (let x = 0; x < N; x++) {
		for (let y = 0; y < N; y++) {
			if (input[x][y] !== '.') {
				// 지뢰인 경우
				// 지뢰는 '*'로 출력
				map[x][y] = '*';
			} else {
				// 지뢰가 아닌 경우
				// 8방향에 지뢰가 몇개인지 세어준다
				let bomb = 0;
				DELTA.forEach(([dx, dy]) => {
					let [chkX, chkY] = [x + dx, y + dy];
					if (0 <= chkX && chkX < N && 0 <= chkY && chkY < N && input[chkX][chkY] !== '.') {
						bomb += parseInt(input[chkX][chkY]);
					}
				});
				// 10 이상인 경우는 'M'(Many)으로 출력
				if (bomb >= 10) {
					map[x][y] = 'M';
				} else {
					map[x][y] = bomb;
				}
			}
		}
	}

	console.log(map.map(el => el.join('')).join('\n'));

	process.exit();
});
