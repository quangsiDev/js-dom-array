// 1
var numberArray = [4, 9, -20, 7];
function themSo() {
  var number = document.querySelector("#txt-number").value * 1;
  numberArray.push(number);
  //   tính tổng số chẵn
  var tongSoChan = 0;
  var soLuongSoAm = 0;
  var tongSoAm = 0;
  for (var i = 0; i < numberArray.length; i++) {
    var number = numberArray[i];
    if (number % 2 == 0) {
      tongSoChan += number;
    }
    if (number < 0) {
      soLuongSoAm++;
      tongSoAm += number;
    }
  }
  //   hiển thị
  var contentHTML = `
  <p>${numberArray}</p>
  <p>Tổng số chẵn: ${tongSoChan}</p>
  <p>Số lượng số âm: ${soLuongSoAm}</p>
  <p> Tổng số số âm: ${tongSoAm}</p>
  `;
  document.querySelector("#result").innerHTML = contentHTML;
}

themSo();
