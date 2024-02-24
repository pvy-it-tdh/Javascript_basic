let text=`HelloWorld`
let length=text.length //=10
let char= text.charAt(0)//H
let char1=text.charCodeAt(0)//72 lấy ra mã ASCII
let part =text.slice(2,4)// lấy các kí tự từ 2 đến 4
let part1 = text.slice(2); // lấy các kí tự từ 2 đến hết chuỗi
console.log(part1);
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);// nối chuỗi text1 và text2 bằng khoảng trắng  
console.log(text3)  
let text4 = "      Hello World!      ";
let text5 = text4.trim(); // return "Hello World!"