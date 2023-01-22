// question 1 - c
// searching for an element jeffin

//array
let passenger_names = ['bibin','jeffin','subin','joseph','jobin','jubit','sona','athulya','athul','unni'];


let leng = passenger_names.length;  //length of the array
console.log("****************Searching for the element jeffin*******************");
let i;

const search = 'jeffin';
//traversing through array elements
for(i=0;i<leng;i++)
{
   if(passenger_names[i]==search)
   {
    console.log("Element",search," is found at loc ", [i+1]);
   }
}


