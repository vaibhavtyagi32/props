import propTypes from "prop-types";
import React from "react";
function App(props) {
  return (
    <>
      <div>
        <h1>we are going to start props</h1>
        {props.age}<br />
        {props.email}<br />
        {props.isMarried.toString()}<br />
        {props.children}
      </div>
    </>
  );
}
export function App2(props) {
  function func() {
    const anchor = document.createElement('a');
    anchor.href = 'https://www.google.com';
    anchor.textContent = 'Go to Google';
    document.body.appendChild(anchor);

  }
  return (
    <>
      <div className="conatiner">
        <h1>we are going to start props</h1>
        {props.age}<br />
        {props.email}<br />
        {props.isMarried.toString()}<br />
        {props.children}
        <button onClick={func}>Click</button>
      </div>
    </>
  );
}
App.propTypes = {
  email: propTypes.string.isRequired,
  age: propTypes.number
}
export default App;
