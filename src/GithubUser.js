import React, { Component } from "react";
import axios from "axios";

class GithubUser extends Component {
  constructor(props) {
    super(props);
    this.state = { imgUrl: "", username: "" };
  }

  async componentDidMount() {
    let url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    let data = response.data;
    console.log(data);
    this.setState({
      imgUrl: data.avatar_url,
      username: data.name,
    });
  }

  render() {
    return (
      <div>
        <h3>Username: {this.state.username} </h3>
        <img src={this.state.imgUrl} />
      </div>
    );
  }
}

export default GithubUser;
