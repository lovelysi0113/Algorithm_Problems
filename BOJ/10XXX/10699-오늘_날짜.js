/**
 * ABOUT
 *
 * DATE: 2021-07-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10699
 *
 * COMMENT:
 * Date()를 사용하여 서울의 오늘 날짜를 "YYYY-MM-DD" 형식으로 출력해준다
 **/

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
month = month < 10 ? '0' + month : month;
let day = date.getDate();
day = day < 10 ? '0' + day : day;

console.log(`${year}-${month}-${day}`);
