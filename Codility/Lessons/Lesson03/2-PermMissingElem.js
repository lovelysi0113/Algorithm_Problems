/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 *
 * COMMENT:
 * 1~N+1까지의 합을 구한 후 A의 요소들의 합과 비교한다
 * 두 합의 차이가 바로 빠진 숫자이다
 **/

function solution(A) {
	// 배열의 요소는 1~N+1까지의 숫자로 이루어져 있는데 이 중 빠진 숫자가 있다
	// 빠진 숫자 찾기

	let N = A.length + 1;
	let total = (N * (N + 1)) / 2;
	A.forEach(num => (total -= num));
	return total;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N) or O(N * log(N))

function solution(A) {
	// 배열 A: 1~N+1까지의 연속된 수로 이루어진 배열
	// 그런데 중간에 숫자 하나가 빠져있음
	// 빠진 숫자 구하기

	// 1 ~ N+1까지의 합과 배열 A의 합을 구해서 비교하기
	// 둘의 차이가 빠진 숫자이다

	// 예외처리: A의 길이가 0인 경우 -> 답은 1
	let N = A.length;
	if (N === 0) return 1;

	// 1 ~ N+1까지의 합 구하기
	// 1 ~ N까지의 합 = (N + (N+1)) / 2
	let sumTotal = ((N + 1) * (N + 2)) / 2;

	//배열 A의 합 구하기
	let sumA = A.reduce((sum, num) => sum + num, 0);

	// 빠진 숫자 구하기
	return sumTotal - sumA;
}
