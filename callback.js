function printf(a) {
    console.log(a);
}
function sum(a,b,mycallback)
{
    let sum=a+b;
    mycallback(sum);
}

sum(5,10,printf);

// Hiểu nhưng mà không biết giải thích sao 
