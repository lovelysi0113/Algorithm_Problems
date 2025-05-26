/**
 * ABOUT
 *
 * DATE: 2025-05-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181846
 *
 * COMMENT:
 * 뒤에서부터 한 자리씩 더해나간다
 **/

function solution(a, b) {
	let aIdx = a.length - 1;
	let bIdx = b.length - 1;
	let carry = 0;
	const result = [];

	while (aIdx >= 0 || bIdx >= 0 || carry > 0) {
		const aNum = Number(a[aIdx] ?? 0);
		const bNum = Number(b[bIdx] ?? 0);

		let sum = aNum + bNum + carry;
		result.push(sum % 10);
		carry = Math.floor(sum / 10);

		aIdx -= 1;
		bIdx -= 1;
	}

	return result.reverse().join('');
}
