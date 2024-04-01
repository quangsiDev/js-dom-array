// selector ~ css

// querySelector ~ trả về 1 element đầu tiên khớp selector
document.querySelector(".title").style.color = "red";

// chuyển tất cả thẻ có class title sang màu xanh

// querySelectorAll ~ trả về danh sách

var list = document.querySelectorAll(".title");
console.log("😀 - list", list);

// danh sách chứa các phần tử

// index ~ vị trí của phần tử trong danh sách
list[1].style.color = "purple";
// dùng vòng lặp
for (var i = 0; i < 3; i++) {
  list[i].style.color = "green";
}
