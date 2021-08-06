let array = [
    [14, 25],
    [1],
    ['a', 'c', 'd']
]

array.sort((prev, next) => prev.length - next.length);
console.log(array);