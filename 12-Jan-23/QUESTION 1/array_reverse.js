//question 1-b
// prints array in reverse order

//array
let passenger_names = ['bibin','jeffin','subin','joseph','jobin','jubit','sona','athulya','athul','unni'];
let i, j, temp;            //var declaration

//sorting array in alphabetical order
let leng = passenger_names.length;   //length of the array
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

// prints array in reverse order
console.log("*************Sorted Array in reverse order***********")
let m,n;
for(m=leng-1;m>=0;m--){
    console.log(passenger_names[m]);

}