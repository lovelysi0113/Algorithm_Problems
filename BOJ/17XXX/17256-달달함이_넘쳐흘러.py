'''/**
* ABOUT
*
* DATE: 2021-05-28
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/17256
*
* COMMENT:
* 케이크 연산(a 🍰 b = (a.z + b.x, a.y × b.y, a.x + b.z) =  c)을 나누어서 보면
* a.z + b.x = c.x, a.y * b.y = c.y, a.x + b.z = c.z 임을 알 수 있다
* 이를 토대로 케이크 수 a, c를 사용하여 케이크 수 b를 구할 수 있다
**/'''

ax, ay, az = map(int, input().split(' '))
cx, cy, cz = map(int, input().split(' '))

# a 🍰 b = (a.z + b.x, a.y × b.y, a.x + b.z)
bx = cx - az  # a.z + b.x = c.x
by = cy // ay  # a.y * b.y = c.y
bz = cz - ax  # a.x + b.z = c.z

print(bx, by, bz)
