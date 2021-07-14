/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/6-sorting/triangle/
 *
 * COMMENT:
 * 세 수의 조합을 구한 후, 각 조합이 triangular를 만족하는지 확인했다
 * 그런데 timeout error가 나왔다 어떻게 풀어야할지 좀 더 고민해봐야 할 것 같다...ㅠㅠ
 **/

// TIMEOUT ERROR
// time complexity: O(N**3)
function solution(A) {
	// Determine whether a triangle can be built from a given set of edges
	// triangular: 두 값의 합이 나머지보다 큰 조건을 만족하는 세 수
	// triangular을 만족하는 집합이 있으면 1, 그렇지 않으면 0 반환

	const len = A.length;
	if (len < 3) {
		return 0;
	}

	const combs = combination(A, 3);
	for (let idx = 0; idx < combs.length; idx++) {
		let [one, two, three] = combs[idx];
		if (one + two > three && two + three > one && three + one > two) {
			return 1;
		}
	}
	return 0;
}

function combination(arr, select) {
	if (select === 1) {
		return arr.map(el => [el]);
	}
	let result = [];
	for (let idx = 0; idx < arr.length; idx++) {
		let rest = combination(arr.slice(idx + 1), select - 1);
		let addRest = rest.map(el => [arr[idx], ...el]);
		result.push(...addRest);
	}
	return result;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/6-sorting/triangle/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N*log(N))

function solution(A) {
	// A[P] + A[Q] > A[R], A[Q] + A[R] > A[P], A[R] + A[P] > A[Q]을 만족하는
	// (P, Q, R)이 있으면 1, 없으면 0 리턴

	// N < 3이면 3개를 고를 수 없으므로 0 리턴
	let N = A.length;
	if (N < 3) return 0;

	// A를 오름차순 정렬
	A.sort((a, b) => a - b);

	// 오름차순 정렬했으므로 A[P] < A[Q] < A[R]을 항상 만족한다
	// 따라서 A[Q] + A[R] > A[P], A[R] + A[P] > A[Q]는 항상 참이 되므로
	// A[P] + A[Q] > A[R]인지만 확인하면 된다
	// 인접한 인덱스 3개를 비교하여 A[P] + A[Q] > A[R]를 만족하는지 확인한다
	for (let idx = 2; idx < N; idx++) {
		if (A[idx - 2] + A[idx - 1] > A[idx]) return 1;
	}

	// for문을 다 돌았다 -> triangular triplet이 없다
	return 0;
}
