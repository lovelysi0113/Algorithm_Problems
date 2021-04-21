'''/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/4344
*
* COMMENT:
* 문제에 나온대로 하나씩 차례대로 하면 실수할 일이 없다
* 우선 학생들의 평균점수를 구한다
* 그리고 평균점수가 넘는 학생들의 수를 구한다
* 전체 학생 중 평균점수가 넘는 학생들의 비율을 구한 후, 이를 반올림하여 소수점 3자리까지 출력해야 한다
* round() 메소드를 사용하여 반올림을 할 수 있고
* format() 메소드를 사용하여 원하는 소수점 자리까지 출력 가능하다
**/'''

testcase = int(input())

for _ in range(0, testcase):
    inputs = list(map(int, input().split(' ')))
    total = inputs[0]
    students = inputs[1:]

    avg_score = sum(students) / total
    avg_student = 0
    for student in students:
        if student > avg_score:
            avg_student += 1
    print('{0:.3f}%'.format(round(avg_student / total * 100, 3)))
