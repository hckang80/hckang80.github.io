---
title: Big O와 알고리즘
date: 2018-10-31 23:26:50
categories: etc
tags: algorithm, Big O
thumbnail:
---

## 정의
Big O란 알고리즘을 처리하는 시간복잡도를 표기한 수입니다.

## 종류
### O(1)
이 수에서는 알고리즘을 처리하는 시간복잡도가 항상 일정합니다.
종류나 길이에 관계없이 이미 알려진 배열 위치에서 요소를 반환하는 알고리즘에서 이 현상이 나타납니다.
```js
const getLast = array => array[array.length - 1]

getLast(['a', 'b', 'c', 'd']) // d (1회 반복)
```

### O(n)
이 수에서는 최악의 경우 시간복잡도가 항목 수와 동일하게 증가합니다.
즉, N개의 원소가 있다면 최대 N번의 반복이 필요합니다.
반복문 형태를 취합니다.
```js
const findIndex = (array, match) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === match) return i
  }
  return -1
}

findIndex(['a', 'b', 'c', 'd'], 'a'); // 0  (1회 반복 - 최소 반복)
findIndex(['a', 'b', 'c', 'd'], 'd'); // 3  (4회 반복 - 최대 반복)
```
### O(n²)
이 수에서는 최악의 경우 시간복잡도는 입력한 수의 제곱입니다.
입력한 수와 비례하여 시간이 기하급수적으로 늘어납니다.
이중 반복문 형태를 취합니다.
```js
const generatorSquareMatrix = array => {
  let matrix = []
  for (let i = 0; i < array.length; i++) { 
    matrix[i] = []
    for (let j = 0; j < array.length; j++) {
      matrix[i].push(array[j])
    }
  }
  return matrix
}

generatorSquareMatrix(['a', 'b', 'c']); // 3개의 원소일 때 9회 반복
```
### O(log n)
이 수는 검색 알고리즘의 가장 적합한 사례로써 대규모 데이터를 처리할 때 가장 효율적인 방법입니다.
구성 요소를 하나씩 살펴보는 대신 데이터를 일반적으로 두 분류로 나누고, 매 반복 작업에서 한 분류를 삭제합니다.

이 알고리즘이 가장 널리 사용되는 알고리즘은 특정 요소를 찾거나 목록을 매우 효율적으로 정렬하는 데 사용할 수 있는 Quicksort 알고리즘입니다.
```js
const quickSort = array => {
  if (array.length < 2) return array
  let pivot = array[0]
  let left  = []
  let right = []
  for (let i = 1; i < array.length; i++){
    let list = array[i]
    if (list < pivot) left.push(list)
    else right.push(list)
  }
  return [
    ...quickSort(left), 
    pivot, 
    ...quickSort(right)
  ]
};

quickSort( ['o','b','j','e','c','t','a','s','i','g','n'])
// ["a", "b", "c", "e", "g", "i", "j", "n", "o", "s", "t"]
```
### O(2ⁿ)
이 수는 피보나치의 수열이라고 부르며, 직전 수와 현재 수를 합하여 다음 수를 결정하게 됩니다.
아래는 피보나치 수열의 예시입니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
```js
const fibonacci = num => {
  let a = 0, b = 1, temp;
  while (num > 1) {
    temp = b
    b += a
    a = temp
    num--
  }
  return a
}

fibonacci(12) // 89
```