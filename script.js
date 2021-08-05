let array = [
    [14, 25],
    [1],
    ['a', 'c', 'd']
]

array.sort((prev, next) => prev[0] - next[0]);
console.log(array);