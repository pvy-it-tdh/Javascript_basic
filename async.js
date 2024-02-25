console.log(1)
console.log(2)
setTimeout(()=>{
console.log(`run after 3s`)
},3000)
console.log(3)
console.log(4)
console.log(5)
// theo như bth thì code sẽ chạy in ra 1 2 xong chờ 3 giây in ra run after 3s xong in ra 3 4 5
// nhưng trong JS nó sẽ in ra 1 2 3 4 5 rồi 3 giây mới in ra run after 3s
// đó là bất đồng bộ trong JS khác vs các ngôn ngữ khác