import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">App Component</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                ducimus facilis nihil numquam quas quia quo repellat! Alias
                consequatur cumque deleniti dicta, dolores, eum eveniet facilis
                minima nisi quia quod.
              </p>
            </div>
          </div>
          {/*<div className="row">
                    <div className="col">
                        <Counter/>
                    </div>
                </div>
               <div className="row">
                   <div className="col">
                       <Greetings/>
                   </div>
               </div>*/}
          <div className="row">
            <div className="col">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
