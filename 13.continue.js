// break means -> Iam done with this.
// continue means -> Skips the current iteration and proceeds to the next iteration of the loop.

// for(let i=1; i<=20; i++){
//     if(i%2===1)
//     {
//         continue;
//     }
//     console.log(i)
// }
for(let i=1; i<=20; i++){
    if(i%2 !==1)
    {
        continue;
    }
    console.log(i)
}

// continue in while loop
let n=1;
while(n<=15)
{
    n++;
    if(n%5!==0)
    {
        continue;
    }
    console.log(n);
    
}