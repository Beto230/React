// Define the FirstComponent
function FirstComponent() {
    return <h1>My very first component</h1>;
  }
  
  // Define the NamedComponent
  function NamedComponent(props) {
    return <p>My name is {props.name}</p>;
  }
  
  // Define the App component that renders the other two components
  function App() {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="John" />
      </div>
    );
  }
  
  // Render the App component into the "root" div
  ReactDOM.render(<App />, document.getElementById("root"));
  