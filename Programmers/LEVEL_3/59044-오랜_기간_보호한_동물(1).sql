-- 아직 입양을 못 간 동물 중, 가장 오래 보호소에 있었던 동물 3마리의 이름과 보호 시작일을 조회

SELECT ins.NAME, ins.DATETIME
FROM ANIMAL_INS AS ins
LEFT JOIN ANIMAL_OUTS AS outs
ON ins.ANIMAL_ID = outs.ANIMAL_ID
WHERE outs.ANIMAL_ID IS NULL
ORDER BY ins.DATETIME ASC
LIMIT 3;