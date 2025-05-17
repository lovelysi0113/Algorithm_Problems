/**
 * ABOUT
 *
 * DATE: 2025-05-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181934
 *
 * COMMENT:
 * ineq, eq를 합쳐서 각 조건에 대해 맞는지 확인한다
 **/

function solution(ineq, eq, n, m) {
	switch (`${ineq}${eq}`) {
		case '>=':
			return n >= m ? 1 : 0;
		case '<=':
			return n <= m ? 1 : 0;
		case '>!':
			return n > m ? 1 : 0;
		case '<!':
			return n < m ? 1 : 0;
	}
}
