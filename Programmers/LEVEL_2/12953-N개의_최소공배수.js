/**
 * ABOUT
 *
 * DATE: 2021-06-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12953
 *
 * COMMENT:
 * 1. n개의 최소공배수 구하는 방법
 * n개의 숫자를 담은 배열 arr에서 n개의 최소공배수를 구하기 위해서는
 * 앞에서부터 하나씩 최소공배수를 구하면 된다
 * 최소공배수를 구하는 함수를 LCM()이라고 했을 때,
 * arr[0] ~ arr[1]의 최소 공배수 = LCM(arr[0], arr[1])
 * arr[0] ~ arr[2]의 최소 공배수 = LCM(arr[0] ~ arr[1]의 최소공배수, arr[2])
 * arr[0] ~ arr[3]의 최소 공배수 = LCM(arr[0] ~ arr[2]의 최소공배수, arr[3])
 * ...
 * arr[0] ~ arr[n]의 최소 공배수 = LCM(arr[0] ~ arr[n-1]의 최소공배수, arr[n])
 * 이렇게 2개의 최소공배수를 계속 구함으로써 최종적으로 n개의 최소공배수를 구할 수 있다
 * 2. 2개의 최소공배수 구하는 방법
 * 2-1. 두 수의 최소공배수를 구하기 위해서는 '유클리드 호제법'을 사용하면 된다
 * 유클리드 호제법은 2개의 수에서 최대공약수를 구하는 알고리즘이다
 * 2개의 자연수 a, b에 대해 a % b를 r이라고 하면 a와 b의 최대공약수는 b와 r의 최대공약수와 같다
 * 1) rest = a % b : a을 b로 나눈 나머지를 rest라 할 때,
 * 2) rest === 0 : rest가 0이면, b는 최대 공약수가 된다
 * 3) rest !== 0 : rest가 0이 아니라면, a = b, b = rest로 변경하고 1~3번 과정을 반복한다
 * 2-2. 그리고 최대공약수를 이용하여 최소공배수를 구할 수 있다
 * 2개의 자연수 a, b에 대해 a * b = a와 b의 최대공약수 * a와 b의 최소공배수 가 항상 성립하므로
 * 두 수의 곱을 두 수의 최대공약수로 나누면 두 수의 최소공배수를 구할 수 있다
 **/

function solution(arr) {
  // 최대공약수 구하기(GCD(Greatest Common Divisor))
  // 유클리드 호제법
  const GCD = (a, b) => {
    while (b !== 0) {
      let rest = a % b;
      a = b;
      b = rest;
    }
    return a;
  };

  // 최소공배수 구하기(LCM(Least Common Multiple))
  // 최소공배수 = 두 수의 곱 / 최대공약수
  const LCM = (a, b) => {
    return (a * b) / GCD(a, b);
  };

  // n개의 최소공배수 구하기
  return arr.reduce((answer, num) => LCM(answer, num), 1);
}