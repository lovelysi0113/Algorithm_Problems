/**
 * ABOUT
 *
 * DATE: 2025-05-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181902
 *
 * COMMENT:
 * 각 문자에 대해 0으로 초기화된 맵을 만들고, 주어진 문자열을 순회하며 각 문자의 개수를 세어준다
 **/

function solution(my_string) {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	const map = new Map(alphabet.map(str => [str, 0]));

	my_string.split('').forEach(str => map.set(str, (map.get(str) || 0) + 1));

	return Array.from(map).map(([str, num]) => num);
}
