/**
 * ABOUT
 *
 * DATE: 2025-05-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181928
 *
 * COMMENT:
 * 각 수가 홀수인지 짝수인지 확인하여 이어 붙인 수를 만든 후 결과들을 더해준다
 **/

function solution(num_list) {
	const [odd, even] = num_list.reduce(
		(total, num) => {
			if (num % 2 === 0) total[1] += num;
			else total[0] += num;
			return total;
		},
		['', ''],
	);

	return Number(odd) + Number(even);
}
