/**
 * ABOUT
 *
 * DATE: 2023-01-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120839
 *
 * COMMENT:
 * 0: 바위 / 2: 가위 / 5: 보
 * 가위바위보 낸 순서를 하나씩 비교하며 이기는 조합을 구한다
 **/

function solution(rsp) {
	// 가위바위보 이기는 조합
	let winner = {
		0: '5',
		2: '0',
		5: '2',
	};

	return rsp
		.split('')
		.map(el => winner[el])
		.join('');
}
