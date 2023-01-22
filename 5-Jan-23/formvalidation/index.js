let form = document.querySelector("form");

const date = new Date();


// console.log("Hour is "+String(date).split(" ")[4].split(":")[0])
// console.log("Minutes are "+String(date).split(" ")[4].split(":")[1])
// let text = 'ajai,ashin,jomet'
// let textar = text.split(',')
// console.log(textar)



form.addEventListener("submit",function (e){
    e.preventDefault();
   let fname = document.querySelector("#fname")
   if(fname.value.length < 2){

    let fmessage =  document.querySelector("#fname_text")
    fmessage.style.display = "block";
    fmessage.innerText = "Length is not valid"
   }
   else{
    let fmessage =  document.querySelector("#fname_text")
    fmessage.style.display = "none";
   }

})