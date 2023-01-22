LockManager,09//question 1 - e
// split the name at space and print each element
//array
let passenger_names = ['bibin','jeffin ytft','subin','joseph','jobin','jubit','sona','athulya','athul','unni'];

let i;  //var declaration
passenger_names.forEach(value =>{
    for(i=0;i<value.length;i++){
        if(value[i]==' '){
            let names  = value.split(' ');
            console.log(names);
        }
    
}
})
