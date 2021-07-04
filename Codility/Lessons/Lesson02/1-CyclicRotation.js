/**
 * ABOUT
 *
 * DATE: 2021-07-04
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 *
 * COMMENT:
 * 배열을 K번 회전시켜 나오는 결과를 구하면 되는 문제이다
 * 우선 K가 배열의 길이보다 클 수 있으므로 나머지 연산을 통해 몇 번만 회전시키면 되는지 구한다
 * 배열을 회전시킨 결과는 같은 배열을 2개 붙여서 회전 수 만큼 잘라내면 되므로
 * K번째 부터 배열의 길이만큼 slice해준다
 **/

function solution(A, K) {
	// Rotation of the array: 요소들을 오른쪽으로 한칸씩 밀었을 때, 맨 마지막 요소가 제일 첫번째로 오는 것
	// Rotation of the array을 K번 실행한 결과 구하기

	let len = A.length;
	// 회전 수: K % len의 나머지 값(len + 1번 회전의 결과 = 1번 회전의 결과)
	K = len - (K % len);
	let answer = A.concat(A);
	// K번째 부터 배열의 길이만큼 slice
	return answer.slice(K, K + len);
}
