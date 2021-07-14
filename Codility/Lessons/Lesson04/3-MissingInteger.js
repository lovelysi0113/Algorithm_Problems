/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
 *
 * COMMENT:
 * 배열 A를 정렬한 후, 수를 하나씩 비교하여 빠진 양수가 없는지 확인한다
 **/

function solution(A) {
	// Find the smallest positive integer that does not occur in a given sequence
	// 배열 A에 없는 가장 작은 양수 구하기

	A.sort((a, b) => a - b);

	if (A[A.length - 1] < 1) {
		return 1;
	}

	let answer = 1;
	for (let idx = 0; idx < A.length; idx++) {
		if (answer === A[idx]) {
			answer += 1;
		} else if (answer < A[idx]) {
			return answer;
		}
	}

	return answer;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N) or O(N * log(N))

function solution(A) {
	// 배열 A: N개의 정수
	// A에 없는 가장 작은 양의 정수 구하기

	// A 정렬하기
	A.sort((a, b) => a - b);

	// A에 없는 가장 작은 양의 정수 찾기
	let smallest = 1;

	for (let idx = 0; idx < A.length; idx++) {
		let num = A[idx];
		// num이 양의 정수 일때
		if (num >= 1) {
			// smallest > num -> 다음으로 넘어가기
			if (smallest > num) continue;
			// smallest = num -> smallest 값 1 증가
			if (smallest === num) smallest += 1;
			// smallest < num -> smallest 값이 없음 -> 검사 종료
			if (smallest < num) break;
		}
	}

	return smallest;
}
