// Define the Person component
function Person(props) {
    // Truncate the name if it's longer than 8 characters
    const truncatedName = props.name.length > 8 ? props.name.substring(0, 6) + "..." : props.name;
  
    return (
      <div className="person">
        <p>Learn some information about this person</p>
        <h3>{props.age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
        <p>Name: {truncatedName}</p>
        <p>Age: {props.age}</p>
        <ul>
          {props.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  // Define the App component that renders multiple Person components
  function App() {
    const personsData = [
      {
        name: "John Doe",
        age: 25,
        hobbies: ["Reading", "Swimming", "Painting"],
      },
      {
        name: "Alice Smith",
        age: 16,
        hobbies: ["Hiking", "Cooking", "Gaming"],
      },
      {
        name: "Robert Johnson",
        age: 30,
        hobbies: ["Cycling", "Photography", "Traveling"],
      },
    ];
  
    return (
      <div>
        {personsData.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            age={person.age}
            hobbies={person.hobbies}
          />
        ))}
      </div>
    );
  }
  
  // Render the App component into the "root" div
  ReactDOM.render(<App />, document.getElementById("root"));
  