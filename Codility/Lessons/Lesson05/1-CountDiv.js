/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
 *
 * COMMENT:
 * A~B 사이의 수들을 하나씩 검사하며 K로 나누어 떨어지는 수들의 갯수를 구한다
 **/

// time complexity: O(1)
function solution(A, B, K) {
	// Compute number of integers divisible by k in range [a..b]
	// A~B 사이의 숫자에서 K로 나누어 떨어지는 수의 갯수 구하기

	let answer = 0;
	for (let num = A; num <= B; num++) {
		if (num % K === 0) {
			answer = Math.floor((B - num) / K) + 1;
			break;
		}
	}
	return answer;
}

// TIMEOUT ERROR
// time complexity: O(B-A)
function solution(A, B, K) {
	let answer = 0;
	for (let num = A; num <= B; num++) {
		if (num % K === 0) {
			answer += 1;
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
 * URL: https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(1)

function solution(A, B, K) {
	// A ~ B 사이의 수에서 K로 나누어 떨어지는 수의 갯수 구하기

	for (let num = A; num <= B; num++) {
		if (num % K === 0) {
			// num이 K로 나누어 떨어지는 수이면 num+K도 K로 나누어 떨어진다
			return Math.floor((B - num) / K) + 1;
		}
	}

	return 0;
}
