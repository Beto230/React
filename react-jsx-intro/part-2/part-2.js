// Define the Tweet component
function Tweet(props) {
    return (
      <div className="tweet">
        <div className="tweet-header">
          <span className="username">{props.username}</span>
          <span className="date">{props.date}</span>
        </div>
        <div className="tweet-content">
          <p className="name">{props.name}</p>
          <p className="message">{props.message}</p>
        </div>
      </div>
    );
  }
  
  // Define the App component that renders multiple tweets
  function App() {
    return (
      <div>
        <Tweet
          username="@user1"
          name="User One"
          date="2023-11-07"
          message="This is my first tweet!"
        />
        <Tweet
          username="@user2"
          name="User Two"
          date="2023-11-08"
          message="Tweeting away..."
        />
        <Tweet
          username="@user3"
          name="User Three"
          date="2023-11-09"
          message="Hello, world!"
        />
      </div>
    );
  }
  
  // Render the App component into the "root" div
  ReactDOM.render(<App />, document.getElementById("root"));
  