console.log("create a calculator")
let a=10
let b=5
let operator="+";
switch(operator){
    case"+":
    console.log("Result=",a+b);
    break;
    case"-":
    console.log("Result=",a-b);
     break;
    case"*":
    console.log("Result=",a*b);
    break;
    case"/":
    if(b!=0)
    console.log("Result=",a/b);
else
    console.log("cannot divide by Zero");
     break;
     default:
        console.log("Invalid operator");
}