/**
 * ABOUT
 *
 * DATE: 2021-07-04
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 *
 * COMMENT:
 * 짝이 없는 요소를 찾아야 하므로 정렬한 배열에서 요소를 두개씩 묶어서 값을 비교한다
 * 만약 다르면 둘 중 짝이 없는 것을 찾아준다
 **/

function solution(A) {
	// 입력: 홀수로 이루어진 배열
	// 모든 요소들은 짝이 있는데, 그중 하나만 짝이 없음
	// 찍이 없는 요소를 찾기

	if (A.length === 1) {
		return A[0];
	}

	A.sort();

	for (let idx = 0; idx < A.length - 2; idx += 2) {
		if (A[idx] !== A[idx + 1]) {
			if (A[idx + 1] === A[idx + 2]) {
				return A[idx];
			} else {
				return A[idx + 1];
			}
		}
	}
	return A[A.length - 1];
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N) or O(N*log(N))

function solution(A) {
	// 빈 배열이 아닌 A는 홀수로 이루어져 있음
	// 각 요소마다 pair가 있다, pair => 두 개의 값이 같음
	// 오직 하나의 요소만 pair가 없다
	// pair가 없는 요소 찾는 문제

	// N이 1인 경우 -> 바로 정답이 나온다
	let N = A.length;
	if (N === 1) return A[0];

	// A를 오름차순으로 정렬하기
	A.sort((a, b) => a - b);

	// 두개씩 pair인지 확인해보기
	for (let idx = 0; idx < N - 1; idx += 2) {
		if (A[idx] !== A[idx + 1]) {
			// 두 개가 다르면 앞쪽에 있는 요소가 pair가 없음
			return A[idx];
		}
	}

	// 마지막 하나가 pair가 없음(앞의 모든 요소들은 모두 pair이다)
	return A[N - 1];
}
