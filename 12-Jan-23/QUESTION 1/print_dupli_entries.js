//question 1 - f
// printing duplicate entries in the array
//array
let passenger_names = ['bibin sasikumar','jeffin sebastian','subin','bibin sasikumar', 'joseph','subin','jubit','joseph','athulya','athul','unni'];
let i;  //var declaration
let len = passenger_names.length;
for(i=0;i<len;i++){
    for(j=i;j<len;j++){
        if(passenger_names[i]==passenger_names[j+1]){
            console.log(passenger_names[i], "is duplicated")
        }
    }
    
}