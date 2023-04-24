import "./styles.css";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[a-zA-Z ]{4,}$/.test(name)) {
      alert("Please enter a valid name with at least 4 alphabets");
      return;
    }
    if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      alert("Please enter a valid email address");
      return;
    }
    if (age <= 18) {
      alert("Please enter an age greater than 18");
      return;
    }
    alert(
      `Voila, you did it ${name}! Your age is ${age} and your email is ${email}.`
    );
  };
  return (
    <div className="App">
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Name:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Age:
          <input
            type="number"
            value="name"
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
