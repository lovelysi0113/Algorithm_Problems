/**
 * ABOUT
 *
 * DATE: 2021-07-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42579
 *
 * COMMENT:
 * [ 해시 ]
 * 우선 노래는 많이 재생된 순서로 내림차순 정렬하고 각 장르마다 가장 많이 재생된 노래를 2개 찾는다
 * 각 장르에서 재생된 수를 비교하여 많이 재생된 장르부터 차례대로 2개씩 앨범에 수록한다
 **/

function solution(genres, plays) {
	const songs = [];
	for (let idx = 0; idx < genres.length; idx++) {
		songs.push([plays[idx], genres[idx], idx]);
	}
	songs.sort((a, b) => {
		if (a[0] !== b[0]) return b[0] - a[0];
		else return a[2] - b[2];
	});

	let answer = [];
	let chkGenre = {};
	songs.forEach(([play, genre, idx]) => {
		if (chkGenre[genre] === undefined) {
			chkGenre[genre] = [0, 0, []];
		}
		chkGenre[genre][0] += play;
		chkGenre[genre][1] += 1;
		if (chkGenre[genre][1] <= 2) {
			chkGenre[genre][2].push(idx);
		}
	});

	let list = Object.keys(chkGenre).sort((a, b) => chkGenre[b][0] - chkGenre[a][0]);
	list.forEach(genre => answer.push(...chkGenre[genre][2]));

	return answer;
}
