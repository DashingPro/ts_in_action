
let bool: boolean = true;
let num: number = 1234;
let str: string = 'abc'

let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = [1, 2, 3, "1"]

let tuple: [number, string] = [0, '1']
// 可以push 但是不可以访问
console.log(tuple[1]);
