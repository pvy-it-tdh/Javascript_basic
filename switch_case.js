let day="";
switch(new Date().getDate())
{
    case 0:
        day="Sunday";
     case 1:
         day="Monday";
     case 2:
         day="Tuesday";
    case 3:
        day="Wednesday";
    case 4:
        day="Thurday";
    case 5:
        day="Friday";
    case 6:
        day="Saturday";
    case 7:
        day="Sunday";
    
}
console.log(`Check day `,day,new Date().getDate());