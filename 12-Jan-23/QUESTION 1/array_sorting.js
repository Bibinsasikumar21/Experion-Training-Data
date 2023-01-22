//question 1 - a
// prints array in alphabetical order
//array
let passenger_names = ['bibin','jeffin','subin','joseph','jobin','jubit','sona','athulya','athul','unni'];

let i, j, temp;                //variables

let leng = passenger_names.length;

console.log("************Sorted Array****************");

// for loop indicating iteration
for( i=0; i<leng-1;i++){
    // for loop for accessing array elements
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
console.log(passenger_names);     //printing array elements












