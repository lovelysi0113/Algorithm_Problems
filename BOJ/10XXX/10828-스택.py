'''/**
* ABOUT
*
* DATE: 2021-05-23
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10828
*
* COMMENT:
* 문제에 주어진 명령에 맞게 코드를 작성하면 된다
* push X: 정수 X를 스택에 넣는 연산이다
* pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다
* size: 스택에 들어있는 정수의 개수를 출력한다
* empty: 스택이 비어있으면 1, 아니면 0을 출력한다
* top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다
* 그리고 시간을 줄이기 위해 input() 대신 sys.stdin.readline()를 사용하였다
**/'''

import sys

cnt = int(sys.stdin.readline())

stack = []
for _ in range(0, cnt):
    command = sys.stdin.readline().split()
    if command[0] == 'push':
        stack.append(command[1])
    elif command[0] == 'pop':
        if len(stack) == 0:
            print(-1)
        else:
            print(stack.pop())
    elif command[0] == 'size':
        print(len(stack))
    elif command[0] == 'empty':
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    elif command[0] == 'top':
        if len(stack) == 0:
            print(-1)
        else:
            print(stack[-1])
