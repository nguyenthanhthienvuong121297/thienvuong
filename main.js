console.log("hello");

function themNguoiDung(){
    console.log("vuong them nguoi dung");
}


// Biến
// String
var username = "Thien Vuong";
var address = "112 Cao Thang";
// Number
var age = 18;
// Boolean
var status = true;
// Null
var numberStudent = null;
// Undefined
var people;
var firstName = "Ding";
var lastName = "Dang";
// console.log(people);
// console.log("Ten la: " + username);
// console.log("Dia chi: " + address);
// console.log(username, address);


// Hoisting
var fullName = "Nguyen Van A";
console.log("fullname: " + fullName);
isLogin = true;
console.log("isLogin:", isLogin);
// console.log(student);
const PI = 3.14;

/**Câu lệnh điều kiện */
// 2 dấu '=' so giá trị,3 dấu '=' so cả kiểu dữ liêu
// if(1 === "1"){
// console.log("DK dung");
// }else{
//     console.log("DK sai");
// }

// DK ? "Dung" : "Sai" Toán tử 3 ngôi
1 === "1" ? console.log("DK dung") : console.log("DK sai");
var btA = true;
var btB = false;
console.log("Ket qua &&: ", btA && btB);
console.log("Ket qua ||: ", btA || btB);
// ! = phủ định
console.log("Phu dinh cua btA: ", !btA);
switch (0) {
    case 0:
        console.log("day la so 0");
        break;
    case 1:
        console.log("day la so 1");
        break;
    case 2:
        console.log("day la so 2");
        break;
    default:
        console.log("Khong xac dinh");
        break;

}

var list = ["Vuong","Thien","Thanh","Nam"];
// console.log(list[0]);
/**Vong lap */
for(var i = 0; i<list.length; i++){
    console.log(list[i]);
}

// bài tập
var number_1 = 10;
var number_2 = 5;
var number_3 = 20;
var number_4 = 7;

// var total = number_1 + number_2;
// console.log("Tong la:", total);
// var total2 = number_3 + number_4;
// console.log("Tong la:", total2);
/**
 * Hàm không có tham số
 * Hàm có tham số
 * Hàm không có giá trị trả về
 * Hàm có giá trị trả về
 */
/** 
 * Hàm không có tham số
 */
// function tinhTong() {
//     var sum = number_1 + number_2;
//     console.log("sum la:", sum);
// }
// tinhTong()
/**
 * Hàm có tham số nhưng không có giá trị trả về
 */
// function tinhTong(a,b) {
//     var sum = a + b;
//     console.log("sum la:",sum);
// }
// tinhTong(number_3,number_4) ;
/**
 * Hàm có giá trị trả về
 */
function tinhTong(a,b) {
    var sum = a + b;
    console.log("sum la:",sum);
    return sum;
}
// var total3 = tinhTong(50,50);
console.log("Tong la:", tinhTong(50,50) + 100);

function trungBinh(a,b,c) {
    var avg = (a+b+c)/3
}
    
  
   
function xepLoai(trungBinh){
    var loai = "";
    if(9 <= trungBinh && trungBinh <= 10){
        loai="Xuat sac";
    }else if(8 <= trungBinh && trungBinh <9){
        loai ="Tot"
    } else if(7<= trungBinh && trungBinh <8){
        loai = "Kha"
    } else if (5 <= trungBinh && trungBinh <7){
        loai="TB"
    }else{loai = "Yeu"}
    console.log("loai la:", loai);
}

// trungBinh(7,8,9);

































