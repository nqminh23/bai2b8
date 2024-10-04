function findMaxMin() {
  // Lấy giá trị từ input
  let input = document.getElementById("numberInput").value;

  // Chuyển đổi chuỗi thành mảng các số
  let numArray = input.split(",").map(Number);

  // Tìm số lớn nhất và nhỏ nhất
  let max = Math.max(...numArray);
  let min = Math.min(...numArray);

  // Hiển thị kết quả
  document.getElementById("resultMax").innerHTML = "Số lớn nhất: " + max;
  document.getElementById("resultMin").innerHTML = "Số nhỏ nhất: " + min;
}
