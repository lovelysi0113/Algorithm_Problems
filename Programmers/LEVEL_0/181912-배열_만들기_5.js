/**
 * ABOUT
 *
 * DATE: 2025-05-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181912
 *
 * COMMENT:
 * 숫자를 각 자리수로 쪼갠 후 s번째 인덱스부터 l개의 숫자를 잘라낸다
 **/

function solution(intStrs, k, s, l) {
	const answer = [];

	intStrs.forEach(intStr => {
		const intArray = intStr.split('');
		const subInt = intArray.slice(s, s + l).join('');
		answer.push(Number(subInt));
	});

	return answer.filter(num => num > k);
}
