import React from "react";
import "./styles.scss";
import { reverse, stringTuples } from "./helper";
// uncomment for part 2

export default function App() {
  // Part 1: Implement reverse in helper.js
  const userAnswers = stringTuples.map(([key]) => reverse(key));

  React.useEffect(() => {
    fetch("http://localhost:5000/test", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "test", password: "othertest" }),
    })
      .then((res) => res.json())
      .then((data) => console.log("hi", data));
  }, []);

  return (
    <div className="App">
      {userAnswers.map((theirAnswer, index) => {
        const [original, answer] = stringTuples[index];
        const passed = theirAnswer === answer;

        return (
          <div className="part-one-container">
            <span className={passed ? "passed" : "failed"}>
              {passed ? "Passed" : "Failed"}
            </span>
            <span>Original: {original}</span>
            <span>Expected: {answer}</span>
            <span> Your answer: {theirAnswer}</span>
          </div>
        );
      })}

      {/* 
      Part 2: A simple react form

      Implement a form that renders a
      username and password as inputs, and a submit button.
      
      The submit button should be disabled if:
        username or password are blank 
        username and password are the same.

      The submit button styling should have: 
        padding vertical of 4px
        padding horizontal 16px
        solid black border with 1px width;
        on hover, orange background and white color text.

      On submit click, the form should submit to http://localhost:5000/test.
      the server should respond with a 400 if the username or password are blank
      or if the username and password are not alphanumeric

      { username: UPPERCASED_USERNAME, password: UPPERCASED_PASSWORD }
      */}
    </div>
  );
}
