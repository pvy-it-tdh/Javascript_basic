let arr=[
    {
        name :"Nguyễn Trần Thanh Hằng", 
        age:20
    },
    {
        name :"Lê Thạch Phúc Vy", 
        age:20
    },
    {
        name :"Thạch Tường Vy", 
        age:26
    },
    {
        name :"Nguyễn Ngọc Đại", 
        age:26
    }
]
let find = arr.find((item,index)=>
{
    return item && item.age===20;
});
// sử khác nhau giữa find và  filter là 
//find sẽ in ra phần tử thỏa mãn đầu tiên 
//còn filter in ra all phần tử thỏa mãn

console.log(filter);