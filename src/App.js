import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Mustafa  Ibrahim",
        bio: "A passionate developer.",
        imgSrc: "https://media.licdn.com/dms/image/v2/C5603AQGiI8HnjROpIw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1541223943191?e=2147483647&v=beta&t=N9TZpbPMj8ExAvmha-gtkHPkBk25SGl3EXUapCredPk",
        profession: "Software Engineer",
      },
      shows: false,
      timeSinceMounted: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div className="App">
        <h1>React Class-Based Component with State</h1>
        <button onClick={this.toggleProfile}>
          {this.state.shows ? "Hide" : "Show"} Profile
        </button>
        {this.state.shows && (
          <div className="profile">
            <img src={this.state.person.imgSrc} alt="Profile" />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <h3>Profession: {this.state.person.profession}</h3>
          </div>
        )}
        <p>Time since mounted: {this.state.timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
