/**
 * ABOUT
 *
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/10-26e59abc17d6492eb8fe8f8c20c632ca
 *
 * COMMENT:
 * for문을 사용하여 크리스마스 트리를 만든다
 **/

function makeTree(n) {
	let tree = [];
	for (let num = 1; num <= n; num++) {
		let star = '';
		for (let a = 1; a <= n - num; a++) {
			star += ' ';
		}
		for (let b = 1; b <= num * 2 - 1; b++) {
			star += '*';
		}
		tree.push(star);
	}
	console.log(tree.join('\n'));
}
