import React from "react";
import ReactDOM from "react-dom/client";

//function component is normal js function which returns jsx
//Write first letter is Capital to understand
const Title = () => {
  return <h1>Welcome to the react world</h1>;
};

let api = {
  getData: () => {
    return "assuem from api";
  },
};
//jsx
const title = <h1>Pure js function</h1>;
const data = api.getData();
//here data is inject in jsx, suppose or assume api gives bad data attackers send some js code in data thorugh api,
// the js code will run in your browser what happens, they can steel your data, this type is called x cross site attacks
//don't worry jsx it self prevent or sanitize the data (if you want you can read more)
// HeadingComponent and Title both are same (instead of return we use round brases)
const HeadingComponent = () => (
  <div>
    <Title />
    <Title></Title>
    {Title()}
    {/* <Title />
    <Title></Title>
    {Title()}  at end Function component is a normal function , inside {we can call function}
    all are same */}
    {/* INJECTING JS {} */}
    {title}
    {data}

    <h1>I am js I am your boss</h1>
    <h6>{2 + 3}</h6>
  </div>
);

// if we want we can also use normal functions instead of arrow functions

//what is component composition
//calling one function inside another function

const root = ReactDOM.createRoot(document.getElementById("root"));
//for render component we need to pass <component name/>
root.render(<HeadingComponent />);
