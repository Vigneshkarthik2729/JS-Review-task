//Reverse the number in words

var n = prompt("enter the number: ");
function myFunction(num) {
   if (num==0) {
       text = "zero";
   } 
   else if(num==1){
       text = "one";
   }    
   else if(num==2){
       text = "two";
   }    
   else if(num==3){
       text = "three";
   }    
   else if(num==4){
       text = "four";
   }    
   else if(num==5){
       text = "five";
   }    
   else if(num==6){
       text = "six";
   }    
   else if(num==7){
       text = "seven";
   }    
   else if(num==8){
       text = "eigth";
   }    
   else if(num==9){
       text = "nine";
   }   
   return text; 
   }    
var number = n;
var a;
var rem;
while (number !=0) {
   rem = number%10;
   a = myFunction(rem);
   b = a;
   number = (number-rem)/10;
   console.log(b);
}



//sum of number

var a = prompt("enter number");
var sum = 0;
let rem;

while (a > 0) {
    rem = a % 10;
    sum = sum + rem;
    a = Math.floor(a / 10);
}
console.log(sum);



//vowels

var str= prompt("enter the word");
var length=str.length;
var count=0;
for (var i=0; i<length; i++) {
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u') {
        count++;
}
}

console.log(count);