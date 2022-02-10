document.getElementById('login-submit').addEventListener('click',function(){
      // emailField
      const emailField = document.getElementById('user-email');
      const userEmail = emailField.value;
      
      //   passwordlField
      const passwordlField = document.getElementById('user-password');
      const userPassword = passwordlField.value;
      console.log(userPassword);

      // error hadlingField
      if(userEmail == 'enahaque79@gmail.com' && userPassword == 'enahaque79@' ){
            // console.log('valid user info');
      }
      window.location.href = "banking.html";
})

