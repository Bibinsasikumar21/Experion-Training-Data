function handleSubmit(e){
    e.preventDefault();
    // console.log(e);
    // const email1 = document.forms['login']['email'].value;
    
    const email2 = document.forms.login.email;
    const emailValue = email2.value;


    const password = document.forms.login.password;
    const passValue = password.value;


    if(passValue.length < 6){
        password.style.border = '1px solid red';
        password.nextElementSibling.classList.remove('d-none');

    }


    const passwordErrorDisplay = password.nextElementSibling;
    if(passValue.length < 6){
        passwordErrorDisplay.innerHTML += '<li> Password must be atleast 6 characters</li>'
    }

   const age = document.forms.login.age;
    if(age.value < 18 || age.value > 100 ){
        age.nextElementSibling.classList.remove('d-none');
    }

  
    console.log(password);

}