// lấy ds thẻ td chứa điểm
var tdList = document.querySelectorAll(".td-scores");
// lấy ds thẻ tr
var trList = document.querySelectorAll("#tblBody tr");
console.log("😀 - trList", trList);

//   tạo array điểm từ ds thẻ td
var scoreArr = [];
for (var i = 0; i < tdList.length; i++) {
  // i = 2
  scoreArr.push(tdList[i].innerText * 1);
}

// tạo function trả về tên khi truyền vào index
function getNameFromIndex(index) {
  var tr = trList[index];
  var td = tr.querySelectorAll("td");
  var name = td[2].innerText;
  return name;
}
function findBestStudent() {
  // tìm điểm cao nhất trong mảng
  var max = Math.max(...scoreArr);
  //   tìm vị trí => dùng indexOf
  var index = scoreArr.indexOf(max);
  //   tìm ra thẻ tr chứa điểm lớn nhất
  var tr = trList[index];
  var tdList = tr.querySelectorAll("td");
  var name = tdList[2].innerText;
  // hiển thị kết quả
  document.getElementById("svGioiNhat").innerText = `${name}  -  ${max}`;
}
findBestStudent();

// cách tìm số lớn nhất trong mảng
function findWorstStudent() {
  // tìm điểm thấp nhất trong mảng
  var min = Math.min(...scoreArr);
  var index = scoreArr.indexOf(min);

  var name = getNameFromIndex(index);
  document.getElementById("svYeuNhat").innerText = `${name}  -  ${min}`;
}
findWorstStudent();

function countGoodStudents() {
  // điểm >=8
  // var count = 0;
  // for (var i = 0; i < scoreArr.length; i++) {
  //   if (scoreArr[i] >= 8) {
  //     count++;
  //   }
  // }
  // document.getElementById("soSVGioi").innerText = count;

  // filter ~ lọc ~ tạo mảng mới dựa vào 1 điệu kiện cho trước
  var result = scoreArr.filter(function (item) {
    return item >= 8;
  });
  document.getElementById("soSVGioi").innerText = result.length;
}
countGoodStudents();

function showListAbove5() {
  var result = "";
  // for (var i = 0; i < scoreArr.length; i++) {
  //   if (scoreArr[i] >= 5) {
  //     var name = getNameFromIndex(i);
  //     result += `<p class='text-primary'>${name}</p>`;
  //   }
  // }
  scoreArr.forEach(function (item, index) {
    console.log("😀 - index", index);
    if (item >= 5) {
      var name = getNameFromIndex(index);
      result += `<p class='text-primary'>${name}</p>`;
    }
  });
  document.getElementById("dsDiemHon5").innerHTML = result;
}
showListAbove5();

// sắp xếp  tăng

var numbers = [5, 3, 20, 18];

numbers.sort(function (a, b) {
  return b - a;
});
function sortListAscending() {
  scoreArr.sort();
  document.getElementById("dtbTang").innerHTML = `<h2>${scoreArr}</h2>`;
}
sortListAscending();
