/**
 * ABOUT
 *
 * DATE: 2021-06-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17677
 *
 * COMMENT:
 * 대문자, 소문자 차이는 무시하므로 우선 두 문자열을 모두 대문자로 변경한다
 * 그리고 각 문자열을 두글자씩 끊어서 다중집합을 만든다
 * 두 개의 다중집합을 비교하면서 겹치는 원소는 교집합으로 넣고
 * 나머지는 모두 합집합에 넣는 방식으로 두 집합의 교집합과 합집합을 구한다
 * 교집합의 길이, 합집합의 길이를 이용하여 자카드 유사드(J(A,B))의 값을 구하면 된다
 **/

function solution(str1, str2) {
  // 문자열을 모두 대문자로 변경
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  // 다중집합의 원소로 만들기
  let str1Arr = [];
  let str2Arr = [];
  for (let idx = 0; idx < str1.length - 1; idx++) {
    let chk = str1.slice(idx, idx + 2);
    if (/^[A-Z]{2}/.test(chk)) {
      str1Arr.push(chk);
    }
  }
  for (let idx = 0; idx < str2.length - 1; idx++) {
    let chk = str2.slice(idx, idx + 2);
    if (/^[A-Z]{2}/.test(chk)) {
      str2Arr.push(chk);
    }
  }

  // 합집합, 교집합 구하기
  let union = [];
  let intersection = [];
  for (let idx = 0; idx < str1Arr.length; idx++) {
    let chk = str1Arr[idx];
    let chkIdx = str2Arr.indexOf(chk);
    if (chkIdx !== -1) {
      str2Arr.splice(chkIdx, 1);
      intersection.push(chk);
    }
    union.push(chk);
  }
  union.push(...str2Arr);

  // J(A,B) = 교집합 크기 / 합집합 크기
  if (union.length === 0) {
    return 1 * 65536;
  } else {
    return parseInt((intersection.length / union.length) * 65536);
  }
}