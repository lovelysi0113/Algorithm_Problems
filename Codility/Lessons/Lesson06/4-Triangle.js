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
