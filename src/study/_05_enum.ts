
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

console.log(Message.Success);

enum Char {
  a,
  b = Char.a,
  c = 1 + 3,

  d = Math.random(),
  e = '123'.length
}

console.log(Char)

// 常量枚举
const enum Month {
  Jan = 3,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]
console.log(month);

// 枚举类型 枚举跟枚举成员可以作为类型
// 字面量枚举成员。 字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为 整数字面量跟字符串字面量
// 当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。
// 首先，枚举成员成为了类型！ 可以用来做限定
// 另一个变化是枚举类型本身变成了每个枚举成员的 联合
// 类型系统能够利用这样一个事实，它可以知道枚举里的值的集合。
enum E { a, b }
enum F { a = 0, b = 0 }
enum G { a = 'apple', b = 'banana' }

console.log(E.a);
console.log(E)
console.log(F.a)

let e: E = 3
console.log(e)

let e1: F = 2
let g1: G = G.a

