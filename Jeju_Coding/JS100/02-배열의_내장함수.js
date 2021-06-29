/**
 * ABOUT
 *
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/2-788973aacbf949dc81e98db31036d458
 *
 * COMMENT:
 * 배열의 중간에 요소를 추가하기 위해 splice() 함수를 사용하면 된다
 * splice(): 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
 * array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 **/

var arr = [200, 100, 300];
arr.splice(2, 0, 10000);

console.log(arr); // [(200, 100, 10000, 300)]
