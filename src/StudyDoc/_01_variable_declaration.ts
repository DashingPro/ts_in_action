
// var 声明变量 变量提升
// let 暂时性死区  可以再let之前捕获  但是不可以在let之前调用


// ts 代码不会报错 js代码会报暂时性死区
let a = 10;

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100 * i)
}

function theCityThatAlwaysSleeps() {
  let getCity;

  if (true) {
    let city = "Seattle";
    if (true) {
      let city = "abcd";
      console.log(city);
      getCity = function () {
        return city;
      }
    }
    getCity = function () {
      return city;
    }
  }

  return getCity();
}