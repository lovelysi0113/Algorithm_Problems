/**
 * ABOUT
 *
 * DATE: 2023-01-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/43164
 *
 * COMMENT:
 * [ 깊이/너비 우선 탐색(DFS/BFS) ]
 * ticket을 하나씩 확인하며 다음 여행지로 갈 수 있는지 확인한다
 **/

function solution(tickets) {
	const result = [];
	const answer = [];

	function dfsTravel(start, ticketList, result) {
		result.push(start);

		if (ticketList.length === 1) {
			result.push(ticketList[0][1]);
			answer.push(result);
		} else {
			ticketList.forEach(ticket => {
				if (start === ticket[0]) {
					const copyTicketList = ticketList.slice();
					copyTicketList.splice(copyTicketList.indexOf(ticket), 1);
					dfsTravel(ticket[1], copyTicketList, result.slice());
				}
			});
		}
	}
	dfsTravel('ICN', tickets, result);

	return answer.sort()[0];
}
