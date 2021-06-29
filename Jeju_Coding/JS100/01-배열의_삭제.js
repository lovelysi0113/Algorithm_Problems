/**
 * ABOUT
 *
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/1-94677631c7b642a7bf3a60d93137f7b5
 *
 * COMMENT:
 * 배열에서 요소를 삭제하기 위해 slice() 함수나 pop() 함수를 사용할 수 있다
 **/

var nums = [100, 200, 300, 400, 500];

// 방법 1
nums = nums.slice(0, 3);

// 방법 2
nums.pop(); // 500 삭제
nums.pop(); // 400 삭제
