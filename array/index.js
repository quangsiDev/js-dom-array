// var array= [item1,item2,item3]

var nameArray = ["alice", "bob", "lulu", "tom"];
console.log("😀 - nameArray", nameArray);

// CRUD ~ Create Read Update Delete
// mutable and immutable array methods in javascript
// thêm phần tử vào array ~ push
nameArray.push("lili");
console.log("😀 - nameArray", nameArray);

// xem số lượng phần tử của array ~ length

var total = nameArray.length;
console.log("😀 - total", total);

// update

// index luôn luôn bắt đầu từ 0
nameArray[0] = "Alice Nguyễn";
console.log("😀 - nameArray", nameArray);

// tìm vị trí

var indexTom = nameArray.indexOf("tom");
console.log("😀 - indexTom", indexTom);

// delete ~ splice(vị trí bắt đầu, số lượng)
// xoá user "tom"
nameArray.splice(indexTom, 1);
console.log("😀 - nameArray", nameArray);

// callback function

var colors = ["black", "green", "blue"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function (item) {
  console.log("😀 - item", item);
});

// forEach(callback)

function introduce(callback) {
  callback("Alice");
}
// function sayHello(username) {
//   console.log("hello", username);
// }
introduce(function (username) {
  console.log("hello", username);
});
