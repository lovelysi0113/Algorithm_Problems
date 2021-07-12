/**
 * ABOUT
 *
 * DATE: 2021-04-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42747
 *
 * COMMENT:
 * [ 정렬 ]
 * 논문별 인용 횟수가 담긴 배열을 내림차순으로 정렬한 후
 * 인용횟수가 citations[idx]보다 큰 논문의 개수를 구한다 = h
 **/

function solution(citations) {
	citations.sort((a, b) => b - a);

	let answer = 0;
	while (answer < citations.length) {
		if (answer + 1 <= citations[answer]) {
			answer++;
		} else {
			break;
		}
	}

	return answer;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42747
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(citations) {
	// 논문 인용 횟수를 내림차순으로 정렬
	citations.sort((a, b) => b - a);

	// h의 최댓값 찾기
	let n = citations.length;
	let h = citations[0];
	while (h > 1) {
		let cnt = 0;
		for (let idx = 0; idx < n; idx++) {
			if (citations[idx] >= h) {
				cnt++;
			}
		}
		// h번 이상 인용된 논문이 h편 이상인지 확인
		if (cnt >= h) return h;
		else h--;
	}

	return h;
}
