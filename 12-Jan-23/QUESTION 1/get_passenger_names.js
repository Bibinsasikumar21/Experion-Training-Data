let passenger_names = ['bibin','jeffin','subin','joseph','jobin','jubit','sona','athulya','athul','unni'];
//question 1 - a

let i, j, temp;
// a) prints array in alphabetical order
let leng = passenger_names.length;
console.log("************Sorted Array****************");
for( i=0; i<leng-1;i++){
    for( j=0;j<leng-i-1;j++)
    {
        if(passenger_names[j]>passenger_names[j+1])
        {
         temp = passenger_names[j];
        passenger_names[j] = passenger_names[j+1];
        passenger_names[j+1] = temp;
        }
    }
}
console.log(passenger_names);




// b) prints array in reverse order
console.log("*************Sorted Array in reverse order***********")
let m,n;
for(m=leng-1;m>=0;m--){
    console.log(passenger_names[m]);

}

// c) searching for an element jeffin
console.log("Searchin for the element jeffin");
const search = 'jeffin';
for(i=0;i<leng;i++)
{
   if(passenger_names[i]==search)
   {
    console.log("Element",search," is found at loc ", [i]);
   }
}

// d) length of names in elements
// let len;
// passenger_names.forEach(elem => {
//                         len = elem.length,
//                         console.log(len)
//                                    });




