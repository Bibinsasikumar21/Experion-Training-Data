//question 1 - d
// print the length of each elements
//array




let passenger_names = ['bibin','jeffin','subin','joseph','jobin','jubit','sona','athulya','athul','unni'];
let len; //variable to store length
console.log("****************Length of each names***************");
passenger_names.forEach(name => {
    len=name.length;
    console.log(name,":", len );
});