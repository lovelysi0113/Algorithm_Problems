/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181860
 *
 * COMMENT:
 * fill과 slice를 사용하여 원소를 추가하거나 제거해준다
 **/

function solution(arr, flag) {
	return arr.reduce((answer, num, idx) => {
		if (flag[idx]) {
			answer = [...answer, ...new Array(num * 2).fill(num)];
		} else {
			const answerLen = answer.length;
			answer = answer.slice(0, answerLen - num);
		}

		return answer;
	}, []);
}
