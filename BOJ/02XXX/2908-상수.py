'''/**
* ABOUT
*
* DATE: 2021-04-29
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2908
*
* COMMENT:
* 입력받은 수를 list() 메소드를 사용하여 각 자릿수를 배열에 각각 저장해준다
* 백의 자리와 일의 자리를 바꾼다음, 다시 합치면(join()) 상수가 보는 거꾸로 된 숫자가 된다
* 바뀐 두 수를 비교하여 더 큰 수를 출력해주면 된다
**/'''

num1, num2 = input().split(' ')

num1 = list(num1)
num1[0], num1[2] = num1[2], num1[0]
num1 = int(''.join(num1))
num2 = list(num2)
num2[0], num2[2] = num2[2], num2[0]
num2 = int(''.join(num2))

if num1 > num2:
    print(num1)
else:
    print(num2)
