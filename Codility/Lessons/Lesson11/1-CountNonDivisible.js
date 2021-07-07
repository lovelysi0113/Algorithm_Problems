/**
 * ABOUT
 *
 * DATE: 2021-07-07
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/
 *
 * COMMENT:
 * A의 요소를 하나씩 검사하면서 나누어지지 않은 다른 요소들의 갯수가 몇개인지 구한다
 * 그런데 timeout error가 나왔다 어떻게 풀어야할지 좀 더 고민해봐야 할 것 같다...ㅠㅠ
 **/

// TIMEOUT ERROR
// time complexity: O(N ** 2)
function solution(A) {
	// Calculate the number of elements of an array that are not divisors of each element
	// non-divisor: A[i]의 약수가 아닌 요소
	// 각 요소의 non-divisor 구하기

	// A 안의 요소 갯수 세기
	let nums = {};
	A.forEach(num => {
		if (nums[num] === undefined) {
			nums[num] = 0;
		}
		nums[num] += 1;
	});

	// non-divisor 갯수 세기
	let answer = [];
	let nonDivisors = {};
	for (let idx = 0; idx < A.length; idx++) {
		let now = A[idx];
		if (!nonDivisors[now]) {
			let result = 0;
			let factors = Object.keys(nums);
			for (let chk = 0; chk < factors.length; chk++) {
				let num = factors[chk];
				if (now % num !== 0) {
					result += nums[num];
				}
			}
			nonDivisors[now] = result;
		}
		answer.push(nonDivisors[now]);
	}
	return answer;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-07
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/
 *
 * COMMENT:
 * A의 요소를 하나씩 검사하면서 약수의 갯수가 몇개인지 구하고 전체 갯수에서 빼준다
 **/

function solution(A) {
	// A 안의 요소 갯수 세기
	let N = A.length;
	let elements = Array(2 * N + 1).fill(0);
	A.forEach(num => (elements[num] += 1));

	// non-divisor 갯수 세기
	let answer = [];
	for (let idx = 0; idx < N; idx++) {
		let num = A[idx];
		let divisor = 0;
		for (let chk = 1; chk <= Math.sqrt(num); chk++) {
			if (num % chk === 0) {
				divisor += elements[chk];
				if (chk * chk !== num) {
					divisor += elements[num / chk];
				}
			}
		}
		answer.push(N - divisor);
	}

	return answer;
}
