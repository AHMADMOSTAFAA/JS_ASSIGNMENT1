/*var userno = window.prompt("enter your number to display"); 
document.getElementById('demo').innerHTML= userno;
or
*//*
window.alert(userno);
*/
/*
var no1=window.prompt("enter your no to divide");
if(no1 % 4==0 && no1 % 3==0){
  window.alert("yes you can divide "+ no1+ " by three and four")
}
else{
  window.alert("you cant divide "+ no1+ " by three and four")
}
*/
/*
var no2=window.prompt("enter your no");
var no3=window.prompt("enter your no");

if(no2>no3){
  var max=no2
}
else{
  var max=no3
}
window.alert("the greater no is "+max);
*/
/*
var no4=window.prompt("enter your no");
if (no4>=0){
window.alert("positive")
}
else{
  window.alert("negative")
} 
*/
/*
var no5=window.prompt("enter your no");
var no6=window.prompt("enter your no");
var no7=window.prompt("enter your no");
if(no5>no6 && no5>no7){
  var max1=no5
}
else if(no6>no5&&no6>no7){
  var max1=no6
}
else{
var max1=no7
}
window.alert("the greater no is "+max1);
*/
/*
var no8=window.prompt("enter your no");
if(no8%2==0){
  window.alert("even");
}
else{
  window.alert("odd");
}
*/
/*
var no9=window.prompt("enter your character");
if(no9=="a"||no9=="e"||no9=="i"||no9=="o"||no9=="u"){
  window.alert("vowel");
}
else{
  window.alert("constant");
}
*/
/*var no10=window.prompt("enter your no")
for (var i=no10;i>=1;i--){
  window.alert(i)
}*/
/*var no11=window.prompt("enter your no");
for( var i=1;i<=12;i++){
 window.alert(no11*i) 

}*/
/*var no12=window.prompt("enter your no");
for(i=1;i<=no12;i++){
  if(i%2==0){
    window.alert(i)
  }
}
*/
/*
var no13=Number(window.prompt("enter your no"));
var no14=Number(window.prompt("enter your no"));
var no15=no13 **no14;
window.alert(no15);*/
/*
var h= Number(window.prompt("enter your history grade"));
var english= Number(window.prompt("enter your english grade"));
var math= Number(window.prompt("enter your math grade"));
var biology= Number(window.prompt("enter your bio grade"));
var arabic= Number(window.prompt("enter your arabic grade"));
var total= h + english + math + biology + arabic;
window.alert("your total is "+total);
var avg =  (h + english + math + biology + arabic)/5;
window.alert("your average is "+avg);
var percentage= total/500 * 100;
window.alert(" your percentage is "+ percentage);
*/
/*
var month=window.prompt("enter your month");
if(month=="april"||month=="june"||month=="september"||month=="november"){
  window.alert("30")
}
else if(month=="february"){
  window.alert("28/29")
}
else{
  window.alert("31")
}
*/
/*
for(var i=0;i<5;i++){
  if(i==0){
    subject="physics"
  }
  if(i==1){
    subject="chemistrey"
  }
  if(i==2){
    subject="biology"
  }
  if(i==3){
    subject="mathematics"
  }
  if(i==4){
    subject="computer"
  }
 var grade =window.prompt("please enter your "+ subject + " grade")
 var percentage= grade/100;
  if (percentage>=90/100){
window.alert("your"+subject+"grade A")
  }
  else if (percentage>=80/100){
    window.alert("your "+subject+" grade b")
      }
      else if (percentage>=70/100){
        window.alert("your "+subject+" grade c")
          }
          else if (percentage>=60/100){
            window.alert("your "+subject+" grade d")
              }
              else if (percentage>=50/100){
                window.alert("your "+subject+" grade e")
                  }
                  else  {
                    window.alert("your "+subject+" grade f")
                      }

}
*/
/*var month=window.prompt("enter your month");
switch(month){
  case "april":
  case "june":
  case "september":
    case"november":
    window.alert("30")
    break;
    case month="february":
      window.alert("29/30")
      break;
      default:
        window.alert("31")
}
*/
/*var character=window.prompt("enter your character");
switch (character){
  case "a":
    case "o":
    case "u":
      case "e":
        case "i":
          window.alert("vowel")
          break;
          default:
            window.alert("constant");
}*/
/*var no1=Number(window.prompt("enter your 1st no"));
var no2=Number(window.prompt("enter your 2nd no"));
if(no1>no2){
 var max=no1 ;
}
else{
  var max=no2;
}
switch(max){
  case max=no1:
    window.alert("no1 is greater");
    break;
    default:
      window.alert("no2 is greater");
}
*/
/*var no=Number(window.prompt("enter your no"));
var numbertype=no%2;
switch(numbertype){
  case 0:
    window.alert("even");
    break;
    default:
      window.alert("odd");
}
*/
/*var no=Number(window.prompt("enter your no"));

if (no>0){
  var notype="positive"
}
else if (no==0){
  var notype="zero"
}
else {
  var notype="negative"
}
switch(notype){
  case "positive":
    window.alert("positive");
    break;
    case "zero":
      window.alert("zero"); 
      break;
    default:
      window.alert("negative");
}
*/
/*
var no1 =Number(window.prompt("enter your no"));
var process=(window.prompt("enter your process"));
var no2=Number(window.prompt("enter your no"));
switch(process){
  case "+":
    var result=no1+no2;
    window.alert("result is "+ result);
    break;
    case"-":
    var result=no1-no2;
    window.alert("result is "+ result);
    break;
    case"*":
    var result=no1*no2;
    window.alert("result is "+ result);
    break;
    case"/":
    var result=no1/no2;
    window.alert("result is "+ result);
    break;
    case"^":
    var result=no1**no2;
    window.alert("result is "+ result);
}

*/