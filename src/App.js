import React, {useState} from 'react';
import { Link, Route} from "react-router-dom";
import Form1 from "./component/form1";
import Form2 from "./component/form2";
import Form3 from "./component/form3";
import Result from "./component/result";

function App() {
  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    age:"",
    mobile: "",
    dob:""

  })
  const handleChange = e => {
    const {name , value} = e.target
    setState( prevState => ({
        ...prevState,
        [name] : value
    }))
}
  return (
      <div className="container-fluid-xl " >
        <h1 className="jumbotron text-center">Multi-Step-From</h1>
        <Route  exact path="/">
          <h2 className="text-center mt-5 text-secondary">Welcome to Multi-Step-Form Assignment!</h2>
        <h3 className="text-center mt-4 text-secondary">Click <Link to="/form1"><button className="btn btn-success py-0">Here</button></Link> to go to the form page.</h3>
        </Route>
      <Route  path="/form1">
        <Form1
        firstName={state.firstName}
        lastName={state.lastName}
        handleChange={handleChange}
        />
      </Route>
      <Route path="/form2">
        <Form2
        email={state.email}
        age={state.age}
        handleChange={handleChange}
        />
      </Route>
      <Route path="/form3">
        <Form3
        mobile={state.mobile}
        dob={state.dob}
        handleChange={handleChange}
        />
      </Route>
      <Route path="/result">
        <Result
        firstName={state.firstName}
        lastName={state.lastName}
        email={state.email}
        age={state.age}
        mobile={state.mobile}
        dob={state.dob}
        />
      </Route>
    </div> 
  );
}

export default App;
