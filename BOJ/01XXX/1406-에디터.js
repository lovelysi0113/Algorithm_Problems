/**
 * ABOUT
 *
 * DATE: 2021-10-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1406
 *
 * COMMENT:
 * 명령에 맞게 커서를 움직이거나 문자를 추가 또는 삭제해준다
 * 그런데 시간 초과가 나왔다 어떻게 풀어야할지 좀 더 고민해봐야 할 것 같다...ㅠㅠ
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
	let editor = input[0].split('');
	let cursor = editor.length;
	let first = 0;

	input.slice(2).forEach(el => {
		// 커서를 왼쪽으로 한 칸 옮김
		if (el === 'L') {
			cursor = cursor > first ? cursor - 1 : first;
		}
		// 커서를 오른쪽으로 한 칸 옮김
		else if (el === 'D') {
			let last = editor.length;
			cursor = cursor < last ? cursor + 1 : last;
		}
		// 커서 왼쪽에 있는 문자를 삭제함
		else if (el === 'B') {
			if (cursor > first) {
				editor.splice(cursor - 1, 1);
				cursor -= 1;
			}
		}
		// 문자를 커서 왼쪽에 추가함
		else {
			let ch = el.split(' ')[1];
			editor.splice(cursor, 0, ch);
			cursor += 1;
		}
	});

	console.log(editor.join(''));

	process.exit();
});
