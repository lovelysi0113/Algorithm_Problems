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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(genres, plays) {
	let songs = {};
	for (let idx = 0; idx < genres.length; idx++) {
		let genre = genres[idx];
		let play = plays[idx];
		if (songs[genre] === undefined) {
			// 총 재생 횟수, 제일 많이 재생된 노래 번호
			songs[genre] = [0, []];
		}
		songs[genre][0] += play;
		songs[genre][1].push([play, idx]);
	}

	let order = Object.keys(songs).sort((a, b) => songs[b][0] - songs[a][0]);

	let albums = [];
	order.forEach(genre => {
		let musics = songs[genre][1].sort((a, b) => {
			if (a[0] !== b[0]) return a[0] - b[0];
			else return b[1] - a[1];
		});
		let cnt = 0;
		while (musics.length > 0) {
			let now = musics.pop();
			albums.push(now[1]);
			cnt++;
			if (cnt === 2) break;
		}
	});

	return albums;
}
