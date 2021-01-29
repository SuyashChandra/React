import React, { Component } from "react";
import Card from "./Card";
import "./CardDeck.css";
import axios from "axios";

class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck_id: "", imgs: [] };
    this.handleShuffle = this.handleShuffle.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle"
    );
    this.setState({
      deck_id: response.data.deck_id,
    });
    // console.log(response.data);
  }

  async handleShuffle() {
    try {
      const response = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/`
      );
      console.log(response.data);
      if (response.data.success === false) throw new Error(response.data.error);
      this.setState(function (prevState) {
        return {
          imgs: [
            ...prevState.imgs,
            {
              img: response.data.cards[0].image,
              key: response.data.cards[0].code,
              name: `${response.data.cards[0].value} of ${response.data.cards[0].suit}`,
            },
          ],
        };
      });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const images = this.state.imgs.map((img) => {
      return <Card src={img.img} key={img.key} />;
    });
    return (
      <div>
        <div className="button">
          <button onClick={this.handleShuffle}>Shuffle Card</button>
        </div>
        {images}
      </div>
    );
  }
}

export default CardDeck;
