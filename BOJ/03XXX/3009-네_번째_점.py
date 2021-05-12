'''/**
* ABOUT
*
* DATE: 2021-05-12
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/3009
*
* COMMENT:
* 네번째 점은 세 좌표 중 각 한번씩만 등장한 좌표들의 집합으로 볼 수 있다
* 각 점을 X, Y으로 분리하여 그룹화한 후 한번만 등장한 좌표를 찾는다
**/'''

X = []
Y = []
for _ in range(0, 3):
    x, y = map(int, input().split(' '))
    X.append(x)
    Y.append(y)

X.sort()
Y.sort()

answer = []
if X[0] == X[1]:
    answer.append(X[2])
else:
    answer.append(X[0])
if Y[0] == Y[1]:
    answer.append(Y[2])
else:
    answer.append(Y[0])

print('{} {}'.format(answer[0], answer[1]))
