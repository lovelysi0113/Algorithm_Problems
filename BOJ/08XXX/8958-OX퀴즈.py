'''/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/8958
*
* COMMENT:
* 주어진 OX퀴즈 결과에서 하나씩 보면서 연속된 O의 갯수만큼 점수에 추가해준다
* 만약 X가 나오면 연속된 O의 갯수를 0으로 초기화해준다
* 점수가 단순히 연속된 O의 갯수를 더해주는 것이 아닌 O이 연속되면 연속된 갯수만큼 점수에 계속 추가되는 것이므로
* 점수 계산할 때 실수하면 안된다(이런 실수는 다음에는 하지 않도록 문제를 잘읽자!)
**/'''

testcase = int(input())

for _ in range(0, testcase):
    total = list(input())

    score = 0
    chk_O = 0
    for el in total:
        if el == 'O':
            chk_O += 1
            score += chk_O
        if el == 'X':
            chk_O = 0

    print(score)
