const number = 7;
if(number<1)
{
    console.log("Number is smaller");
}
console.log("Number is bigger");

// while loop 

// Structure:
// while(condition)
// {
//     loop body
// }

// # Best Practice
// - Initialize variable before loop
// - Update variable inside loop

let value=1;
while(value<10)
{
    console.log("Looping",value);
    // value=value + 1;
    // value+=1;
    value++;
}