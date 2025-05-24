/**
 * ABOUT
 *
 * DATE: 2025-05-24
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181871
 *
 * COMMENT:
 * 0번째 인덱스부터 pat의 길이만큼 슬라이스하여 pat와 일치하는지 확인한다
 **/

function solution(myString, pat) {
	const patLen = pat.length;
	let answer = 0;

	for (let i = 0; i < myString.length; i += 1) {
		if (myString.slice(i, i + patLen) === pat) {
			answer += 1;
		}
	}

	return answer;
}
