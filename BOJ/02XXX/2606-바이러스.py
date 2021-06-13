'''/**
 * ABOUT
 *
 * DATE: 2021-06-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2606
 *
 * COMMENT:
 * 우선 네트워크 상에서 직접 연결되어 있는 컴퓨터의 번호 쌍을 2차원 배열(network)로 표시한다
 * 그리고 queue를 사용하여 1번 컴퓨터부터 연결된 컴퓨터들을 확인한다
 * 한번 방문한 컴퓨터는 visited 표시(True) 하고 바이러스 감염 수를 1 증가 시킨다
 * network 배열을 참조하여 현재 컴퓨터와 연결된 다른 컴퓨터들을 queue에 담아준다
 * queue에 더이상 방문할 컴퓨터가 없을 때 바이러스 감염 수를 출력하면 된다
 **/'''

computer = int(input()) + 1

total = int(input())
network = [[] for _ in range(computer)]
for _ in range(total):
    a, b = map(int, input().split(' '))
    network[a].append(b)
    network[b].append(a)

visited = [False for _ in range(computer)]
virus = -1

queue = [1]
while queue:
    now_comp = queue.pop(0)
    if not visited[now_comp]:
        virus += 1
        visited[now_comp] = True
        for chk in network[now_comp]:
            if not visited[chk]:
                queue.append(chk)
                
print(virus)