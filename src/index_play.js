
// let o = {
//   // get a() { return 1 },
//   set a(x) { console.log(x); }
// }
// console.log(o.a)
// o.a = 100
// o.a = '200'

// console.log(Object.getOwnPropertyDescriptor(o, 'a'));

var o = new Object;
var n = new Number;
var s = new String;
var b = new Boolean;
var d = new Date;
var arg = function () { return arguments }();
var r = new RegExp;
var f = new Function;
var arr = new Array;
var e = new Error;
console.log(
  [
    o, n, s, b, d, arg, r, f, arr, e
  ].map(
    v => Object.prototype.toString.call(v)
  )
);

function c1() { }
console.log(c1.prototype)

class Animal {
  constructor(name) {
    this.name = name;
  }

  sperk() {
    console.log(this.name + ' make a noise.');
  }
}

console.log(Animal.prototype)

let aAnimal = new Animal('red')
console.log(aAnimal);

function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}

sleep(1000).then((e) => { console.log('finish', e); })
// Promise 的resovle 永远是异步执行的

async function foo(name) {
  await sleep(2000)
  console.log(name);
}

async function foo2() {
  await foo('a')
  await foo('b')
}

foo2()