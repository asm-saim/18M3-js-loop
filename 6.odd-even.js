/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
// odd:
let num=61;

while(num<=100)
{
    // console.log(num);
    if(num % 2===1){
        console.log(num);
    }
    num++;
}

// Even
number = 78;
while(number<=98)
{
    // console.log(number);
    if(number%2===0)
    {
        console.log("Even Number",number);
    }
    number++;
}