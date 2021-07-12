/**
 * ABOUT
 *
 * DATE: 2021-03-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42576
 *
 * COMMENT:
 * [ 해시 ]
 * 정렬 후 이름을 비교한다
 **/

function solution(participant, completion) {
	participant.sort();
	completion.sort();

	let len = participant.length;

	for (let idx = 0; idx < len; idx++) {
		if (participant[idx] !== completion[idx]) {
			return participant[idx];
		}
	}

	return participant[len - 1];
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(participant, completion) {
	// 선수 이름 오름차순 정렬
	participant.sort();
	completion.sort();
	// 하나씩 이름 비교하기
	for (let idx = 0; idx < completion.length; idx++) {
		if (participant[idx] !== completion[idx]) {
			return participant[idx];
		}
	}
	return participant[participant.length - 1];
}
