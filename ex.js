// const prices = [100, 300, 500, 600, 900];
// let sum = 0;
// for (i = 0; i < prices.length; i++) {
//   sum += prices[i];
// }
// console.log("Tổng giá trị phần tử trong mảng là: ", sum);

// Tạo ra một mảng rỗng tên là product,
// Viết một menu
//  nếu chọn 1 thì cho phép thêm sản phẩm
//  nếu chọn 2 thì cho phép xoá sản phẩm ở cuối
//  nếu chọn 3 thì in ra mảng
//  nếu chọn 4 thì thoát chương trinh
//  nếu chọn khác thì yêu cầu nhập lại

// let products = [];
// let menu;
// do {
//     menu = +prompt("Mời bạn nhập số");
//     switch (menu) {
//         case 1:
//             let n = prompt("Nhập sản phẩm");
//             product.push(n);
//             break;
//         case 2:
//             product.pop();
//             break;
//         case 3:
//             console.log(product);
//             break;
//         case 4:
//             console.log("Dừng chương trình");
//             break;

//         default:
//             console.log("Yêu cầu nhập lại");
//             break;
//     }
// } while (menu !== 4);

// let myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
// console.log(myColor.toString());

let number = [+prompt("Mời nhập số")];
let newArray = number.toString();
let concatString = [newArray[0]];
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] % 2 === 0 && newArray[i + 1] % 2 === 0) {
    console.log(concatString.push("_"));
  } else {
    console.log(newArray[i]);
  }
}
console.log(concatString.join(""));
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0 && number[i + 1] % 2 === 0) {
//         console.log(number);
//         console.log(number.splice(i, 0, "_"));
//     }
// }
