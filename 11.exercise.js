// Find the numbers of 1-30 which are divisible by 5.
for(let i=1;i<=30;i++)
{
    if(i%5===0)
    {
        console.log(i);
    }
}

// Find the numbers of 1-30 which are divisible by 5 and 3.
for(let i=1;i<=30;i++)
{
    if(i%5===0 && i%3===0)
    {
        console.log(i);
    }
}

// Find the numbers of 1-30 which are divisible by 5 or 3.
for(let i=1;i<=30;i++)
{
    if(i%5===0 || i%3===0)
    {
        console.log(i);
    }
}

// give the sum from 1 to 30 which are divisible by 3.
let sum=0;
for(let i=1;i<=30;i++)
{
    if(i%3===0)
    {
        sum=sum+i;
    }
}
    console.log(sum);

