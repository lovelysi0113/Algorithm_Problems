'''/**
* ABOUT
*
* DATE: 2021-05-26
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1874
*
* COMMENT:
* 이 문제의 핵심은 1~n까지 stack에 넣고 빼는 작업을 반복하면서 주어진 수열을 만들 수 있느냐이다
* 수열의 현재 숫자를 num, stack에 담긴 수 중 가장 높은 수를 last_num이라고 할 때
* 1. 만약 last_num이 num보다 작으면 num이 나올때까지 숫자를 stack에 담는다(push, '+')
* 2. stack의 맨 위 숫자가 num이면 stack에서 빼낸다(pop, '-')
* 3. 만약 stack의 맨 위 숫자가 num보다 크면 숫자를 빼내도 원하는 수열을 만들 수 없으므로 불가능이 된다('NO')
* 이 과정을 반복하여 주어진 수열을 만들 수 있는지 계산할 수 있다
**/'''

total = int(input())
num_list = []
for _ in range(total):
    num_list.append(int(input()))

stack = []
last_num = 0
answer = []
is_right = True
for num in num_list:
    while last_num < num:
        last_num += 1
        stack.append(last_num)
        answer.append('+')
    if stack[-1] == num:
        stack.pop()
        answer.append('-')
    else:
        is_right = False
        break

if is_right:
    print('\n'.join(answer))
else:
    print('NO')
