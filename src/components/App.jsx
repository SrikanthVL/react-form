import React from "react";
import FormInput from "./FormInput";
import "./app.css";

function validate() {
      
  if( {App}.myForm.name.value === "" ) {
     alert( "Please provide your name!" );
     App.myForm.Fname.focus() ;
     return false;
  }
  if( App.myForm.password.value === "" ) {
     alert( "Please provide your Email!" );
     App.myForm.Lname.focus() ;
     return false;
  }
  if( App.myForm.password.value === "" ) {
     alert( "Please provide your feedback!" );
     App.myForm.password.focus() ;
     return false;
  }
  if( App.myForm.confirmpassword.value === "" ) {
     alert( "Please provide your country!" );
     return false;
  }
  return( true );
}

function App () {
  return <div className="app">
    <form action = "/cgi-bin/test.cgi" name = "myForm" onSubmit={validate} >
      <FormInput placeholder="Username" name="Fname" />
      <FormInput placeholder="Email" name="Lname" />
      <FormInput placeholder="Password" name="pasword" />
      <FormInput placeholder="Confirm" name="confirmpassword" />
      <button>Submit</button>
    </form>
  </div>;
};

export default App;