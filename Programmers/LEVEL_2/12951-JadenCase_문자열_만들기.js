/**
 * ABOUT
 *
 * DATE: 2021-06-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12951
 *
 * COMMENT:
 * JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열이므로
 * 첫번째로 시작하는 문자, 공백(' ') 다음에 나오는 문자는 대문자로 변환(toUpperCase())해주고
 * 나머지 문자는 모두 소문자로 변환(toLowerCase())해주면 된다
 **/

function solution(s) {
  let answer = "";

  s.split("").forEach((ch, idx) => {
    if (ch !== " " && (idx === 0 || s[idx - 1] === " ")) {
      answer += ch.toUpperCase();
    } else {
      answer += ch.toLowerCase();
    }
  });

  return answer;
}
