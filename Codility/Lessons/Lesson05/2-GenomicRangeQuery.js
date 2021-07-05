/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
 *
 * COMMENT:
 * 위치가 n일 때 0~n까지 A, C, G, T의 갯수를 담은 배열을 만들었다
 * 그리고 P[K] ~ Q[K]에서 A, C, G, T의 갯수를 구해 가장 작은 impact factor를 구했다
 **/

// time complexity: O(N + M)
function solution(S, P, Q) {
	// Find the minimal nucleotide from a range of sequence DNA
	// impact factor: A = 1, C = 2, G = 3, T = 4
	// P[K] ~ Q[K]에서 가장 작은 impact factor 구하기

	const DNA = { A: 1, C: 2, G: 3, T: 4 };
	let dna = S.split('').map(el => DNA[el]);
	let dnaCnt = [[0, 0, 0, 0, 0]];
	dna.forEach((el, idx) => {
		let chk = [...dnaCnt[idx]];
		chk[el] += 1;
		dnaCnt.push(chk);
	});

	let answer = [];
	for (let idx = 0; idx < P.length; idx++) {
		let start = P[idx];
		let end = Q[idx] + 1;
		let result = 4;
		for (let chk = 1; chk <= 4; chk++) {
			let now = dnaCnt[end][chk] - dnaCnt[start][chk];
			if (now > 0) {
				result = chk;
				break;
			}
		}
		answer.push(result);
	}

	return answer;
}

// TIMEOUT ERROR
// time complexity: O(N * M)
function solution(S, P, Q) {
	// Find the minimal nucleotide from a range of sequence DNA
	// impact factor: A = 1, C = 2, G = 3, T = 4
	// P[K] ~ Q[K]에서 가장 작은 impact factor 구하기

	const DNA = { A: 1, C: 2, G: 3, T: 4 };
	let dna = S.split('').map(el => DNA[el]);

	let answer = [];
	for (let idx = 0; idx < P.length; idx++) {
		let start = P[idx];
		let end = Q[idx];
		let result = 4;
		for (let chk = start; chk <= end; chk++) {
			if (dna[chk] < result) {
				result = dna[chk];
			}
			if (result === 1) {
				break;
			}
		}
		answer.push(result);
	}

	return answer;
}
