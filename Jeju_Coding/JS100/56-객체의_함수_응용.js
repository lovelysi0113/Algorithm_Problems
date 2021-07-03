/**
 * ABOUT
 *
 * DATE: 2021-07-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/56-abc381f5916d4775804fbae9365ad0e6
 *
 * COMMENT:
 * 한국의 면적과 가장 비슷한 국가를 찾기 위해 각 나라와 한국의 면적 차이를 비교한다
 **/

nationWidth = {
	korea: 220877,
	Rusia: 17098242,
	China: 9596961,
	France: 543965,
	Japan: 377915,
	England: 242900,
};

let minArea = nationWidth[korea];
let result = '';
Object.keys(nationWidth).forEach(el => {
	if (el !== 'Korea' && nationWidth[el] - nationWidth[korea] < minArea) {
		minArea = nationWidth[el] - nationWidth[korea];
		result = el;
	}
});

console.log(result, minArea);
