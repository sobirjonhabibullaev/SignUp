import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Form bText="Login" /> : <Form bText="Register" />}
    </div>
  );
}

export default App;
