/**
 * ABOUT
 *
 * DATE: 2021-07-07
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_semiprimes/
 *
 * COMMENT:
 * 1~N 사이에 semiprime가 몇 개 있는지 구한 다음 P[K]~Q[K] 사이에 있는 semiprime 갯수를 구한다
 **/

function solution(N, P, Q) {
	// Count the semiprime numbers in the given range [a..b]
	// prime: 약수로 1과 자기자신만 갖는 수
	// semiprime: 두개의 prime을 약수로 갖는 수(prime이 같아도 됨) = 약수의 갯수 3~4개
	// P[K]~Q[K] 사이에 있는 semiprime 갯수 구하기

	// semiprime 구하기
	// semiprime[num]: 1~num 까지 있는 semiprime의 갯수
	let semiprime = [0, 0];
	let sum = 0;
	for (let num = 2; num <= N; num++) {
		let factors = 0;
		for (let chk = 2; chk <= Math.sqrt(num); chk++) {
			if (num % chk === 0) {
				factors += 1;
				if (chk * chk !== num) {
					factors += 1;
					if ((num / chk) % chk === 0) {
						factors = -1;
						break;
					}
				}
			}
		}
		if (factors === 1 || factors === 2) {
			sum += 1;
		}
		semiprime.push(sum);
	}

	// P[K]~Q[K] 사이에 있는 semiprime 갯수 구하기
	let answer = [];
	for (let idx = 0; idx < P.length; idx++) {
		let minK = P[idx];
		let maxK = Q[idx];
		answer.push(semiprime[maxK] - semiprime[minK - 1]);
	}

	return answer;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_semiprimes/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N * log(log(N)) + M)

function solution(N, P, Q) {
	// prime: 약수로 1과 자기자신만 가짐
	// semiprime: 약수로 1과 자기자신, 약수 2개 가짐(약수 두개가 같아도 됨)
	// P~Q 사이의 semiprime의 갯수 구하기

	// 1~N 사이의 semiprime 갯수 구하기
	// semiprime[num]: 1~num까지 semiprime의 갯수
	let semiprime = [0, 0];
	let cnt = 0;
	for (let num = 2; num <= N; num++) {
		// 1. num이 semiprime인지 파악하기
		let factors = 0;
		for (let chk = 2; chk <= Math.sqrt(num); chk++) {
			if (num % chk === 0) {
				factors += 2;
				if (num / chk !== chk && (num / chk) % chk === 0) {
					factors = -1;
					break;
				}
			}
		}
		if (factors === 2) cnt += 1;
		semiprime[num] = cnt;
	}

	// P~Q 사이의 semiprime의 갯수 구하기
	let answer = [];
	for (let K = 0; K < P.length; K++) {
		answer.push(semiprime[Q[K]] - semiprime[P[K] - 1]);
	}
	return answer;
}
