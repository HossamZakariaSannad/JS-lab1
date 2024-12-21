// //question 1 
// var num1 = 3;
// var num2 = -7;
// var num3 = 2;

// if(num1>num2 && num1>num3) 
// {
//     if(num2>num3){
//         alert(num1+" "+num2+" "+num3);
//     }
//     else{alert(num1+" "+num3+" "+num2);}
// }
// else if(num2>num1 && num2>num3) 
//     {
//     if(num1>num3){
//         alert(num2+" "+num1+" "+num3);
//     }
//     else{alert(num2+" "+num3+" "+num1);}
//     }
    
// else {
//         if(num1>num2){
//             alert(num3+" "+num1+" "+num2);
//         }
//         else { alert(num3+" "+num2+" "+num1);}
//     }

// //question 2
// var x = 0;
// while(x<100){
//     x++;
//     if(x%3==0 && x%5!=0)
//     {
//         console.log("Fizz");
//     }
//     else if (x%5==0 && x%3 !=0)
//     {
//         console.log("Buzz")
//     }
//     else if ( x%3 ==0 && x%5 == 00)
//     {
//         console.log("FizzBuzz")
//     }
//     else
//     { console.log(x)}

// }

// question 3
// var x = 0 //counter
// var sum =0;
// while (x <1000){
//     x++;
//     if ( x%3 ==0 && x%5 == 0)
//          {
//                  sum+=x;
//           }

// }
// console.log(sum);

//question 4
var Rnum = 2;
var Gnum;
var answer;
var c =1; // counter
while(true)
{
    Gnum = prompt("Guess a number between 1 and 10: ");
    if(Rnum==Gnum)
    {
        console.log("Good Work");
        break;
    }
    else {
        if(c==3) //checks counter
        {
            console.log("Maximum 3 Attempes");
            break
        }
       answer = prompt(" Wrong Guess, Want To Try Again? : ");
       if (answer == "y" ||answer == "yes")
       {
        c++;
       }
       else if (answer =="n" || answer =="no")
       {
        console.log("game over")
        break;
       }  
    }
    
}