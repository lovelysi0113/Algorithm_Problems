/**
 * ABOUT
 *
 * DATE: 2021-03-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42748
 *
 * COMMENT:
 * [ 정렬 ]
 * 문제에 나온 순서대로 그대로 실행한다
 **/

function solution(array, commands) {
	var answer = [];

	commands.forEach(command => {
		let [i, j, k] = command;
		// 1. 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고
		let newarr = array.slice(i - 1, j);
		// 2. 1에서 나온 배열을 정렬
		newarr.sort((a, b) => a - b);
		// 3. 2에서 나온 배열의 k번째 숫자
		answer.push(newarr[k - 1]);
	});

	return answer;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42748
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(array, commands) {
	let answer = [];

	for (let idx = 0; idx < commands.length; idx++) {
		// 1.배열 array의 i번째 숫자부터 j번째 숫자까지 자른다
		let [i, j, k] = commands[idx];
		let cut = array.slice(i - 1, j);
		// 2. 자른 숫자들을 정렬한다
		cut.sort((a, b) => a - b);
		// 3. k번째에 있는 수를 구한다
		answer.push(cut[k - 1]);
	}

	return answer;
}
