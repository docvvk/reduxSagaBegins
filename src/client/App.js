import React, { Component } from "react";
// import { Link, Route, NavLink } from 'react-router-dom';
import "./App.css";
// import Navbar from "./components/navbar";
// import AnimationExample from './components/navbar';

class App extends Component {
  state = {
    articles: [
      { title: "React Redux tutorial for beginners", id: 1 },
      { title: "Redux e React", id: 2 }
    ]
  };

  render() {
    const { articles } = this.state;
    console.log(articles);

    return (
      <div>
        <ul>{articles.map(a => <li key={a.id}>{a.title}</li>)}</ul>
        {/* <AnimationExample /> */}
      </div>
    );
  }
}

export default App;
