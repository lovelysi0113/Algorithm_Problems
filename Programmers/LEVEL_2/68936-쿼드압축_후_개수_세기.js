/**
 * ABOUT
 * DATE: 2021-06-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/68936
 *
 * COMMENT:
 * 압축을 다음과 같은 방식으로 진행한다
 * 1. 영역 안의 숫자들의 합을 구한다
 * 2. 모든 수가 같은 값이다 = 0일때 합은 0이 나옴, 1일때 합은 영역 넓이가 나옴 -> 압축 종료
 * 3. 그렇지 않다 -> 영역을 4등분하여 1~3 과정 진행
 * 4. 만약 영역의 넓이가 1이라면 압축 종료
 **/

function solution(arr) {
  // 압축 후 남는 0의 개수, 1의 개수
  let answer = [0, 0];

  // arr을 압축하는 함수
  const compress = (arr, len) => {
    let num = arr[0][0];
    // 길이가 1이면 더이상 압축할 필요 없음
    if (len === 1) {
      answer[num] += 1;
      return;
    }
    // 압축 진행(현재 영역의 모든 수의 합을 구함)
    let total = arr.reduce((sum, el) => {
      return sum + el.reduce((sum, el) => {
        return sum + el;
      }, 0);
    }, 0);
    if (total === 0 || total === len * len) {
      // 압축 성공
      answer[num] += 1;
      return;
    }
    // 압축 실패 -> 영역을 4등분하기
    let newLen = len / 2;
    let cutArr1 = arr.slice(0, newLen).map((el) => el.slice(0, newLen));
    let cutArr2 = arr.slice(0, newLen).map((el) => el.slice(newLen));
    let cutArr3 = arr.slice(newLen).map((el) => el.slice(0, newLen));
    let cutArr4 = arr.slice(newLen).map((el) => el.slice(newLen));
    // 4등분한 영역에 대해 다시 압축 진행
    compress(cutArr1, newLen);
    compress(cutArr2, newLen);
    compress(cutArr3, newLen);
    compress(cutArr4, newLen);
  };

  compress(arr, arr.length);

  return answer;
}