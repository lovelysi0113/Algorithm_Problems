/**
 * ABOUT
 *
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/9-concat-1f73859ed0714620b8fb88fd0800edaf
 *
 * COMMENT:
 * concat() 함수를 사용하여 새로운 문자열로 만들 수 있다
 * concat(): 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환
 **/

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result;

// 방법 1
result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

// 방법 2
result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result); // 2019/04/26 11:34:27
