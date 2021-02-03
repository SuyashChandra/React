import React, { Component } from "react";
import Joke from "./Joke";
import "./Dashboard.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaugh } from "@fortawesome/free-regular-svg-icons";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false,
    };
    this.newId = new Set(this.state.jokes.map((joke) => joke.id));
    console.log(this.newJoke);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.fetchJokes = this.fetchJokes.bind(this);
    this.handleNewJoke = this.handleNewJoke.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.fetchJokes();
    // const jokes = response.data.results;

    // console.log(response.data.results);
  }

  async fetchJokes() {
    let jokes = [];
    let jokeId = [];
    for (let i = 0; i < 10; ) {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });

      if (!this.newId.has(response.data.id)) {
        jokes.push({
          id: response.data.id,
          joke: response.data.joke,
          likes: 0,
        });
        jokeId.push(response.data.id);
        i++;
      }
    }

    window.localStorage.setItem("jokes", JSON.stringify(jokes));

    this.setState({
      loading: false,
      jokes: jokes,
    });
  }

  handleNewJoke() {
    this.setState({ loading: true }, this.fetchJokes);
    // const jokes = response.data.results;
  }

  handleLike(jokeId) {
    this.setState(
      (prevState) => ({
        jokes: prevState.jokes.map((joke) => {
          if (joke.id === jokeId) return { ...joke, likes: joke.likes + 1 };
          else return joke;
        }),
      }),
      () =>
        window.localStorage.setItem("likes", JSON.stringify(this.state.likes))
    );
  }

  handleDislike(jokeId) {
    this.setState(
      (prevState) => ({
        jokes: prevState.jokes.map((joke) => {
          if (joke.id === jokeId) return { ...joke, likes: joke.likes - 1 };
          else return joke;
        }),
      }),
      () =>
        window.localStorage.setItem("likes", JSON.stringify(this.state.likes))
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="Dashboard-spinner">
          <FontAwesomeIcon icon={faLaugh} size="8x" spin />
          {/* <i className=" far fa-8x fa-laugh fa-spin " /> */}
          <h1 className="Dashboard-title">Loading...</h1>
        </div>
      );
    }
    let jokeId = 0;
    const sortedJokes = this.state.jokes.sort((a, b) => b.likes - a.likes);
    const jokes = sortedJokes.map((joke) => {
      return (
        <Joke
          joke={joke.joke}
          key={joke.id}
          jokeId={joke.id}
          likes={joke.likes}
          handleDislike={this.handleDislike}
          handleLike={this.handleLike}
        />
      );
    });
    return (
      <div className="Dashboard">
        <div className="Dashboard-left">
          <h1 className="Dashboard-title">
            <span>Dad</span> Jokes
          </h1>
          <img src="https://www.pngjoy.com/pngl/92/1948110_facebook-reactions-facebook-laugh-emoji-png-hd-png.png" />
          <button className="Dashboard-button" onClick={this.handleNewJoke}>
            Fetch Jokes
          </button>
        </div>
        <div className="Dashboard-right">{jokes}</div>
      </div>
    );
  }
}

export default Dashboard;
