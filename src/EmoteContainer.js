import React, { Component } from "react";
import Emote from "./Emote";
import "./EmoteContainer.css";
class EmoteContainer extends Component {
  static defaultProps = {
    emotes: [
      { imgSrc: "https://cdn.betterttv.net/emote/56e9f494fff3cc5c35e5287e/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/583089f4737a8e61abb0186b/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/55b6f480e66682f576dd94f5/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/58ae8407ff7b7276f8e594f2/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/59f27b3f4ebd8047f54dee29/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5b77ac3af7bddc567b1d5fb2/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5aca62163e290877a25481ad/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/55898e122612142e6aaa935b/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5b1740221c5a6065a7bad4b5/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/57719a9a6bdecd592c3ad59b/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5d6096974932b21d9c332904/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/59143b496996b360ff9b807c/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5c548025009a2e73916b3a37/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5bc2143ea5351f40921080ee/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5af84b9e766af63db43bf6b9/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5b35cae2f3a33e2b6f0058ef/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5aa1d0e311237146531078b0/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/554da1a289d53f2d12781907/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5d1e70f498539c4801cc3811/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5ba6d5ba6ee0c23989d52b10/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5ec059009af1ea16863b2dec/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5de88ccef6e95977b50e6eb1/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5bec16e1c3cac7088d09bdd7/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/55e2096ea6fa8b261f81b12a/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5af454b657376e68acb7512a/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5c3a9d8bbaa7ba09c9cfca37/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5fa8f232eca18f6455c2b2e1/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5afdfe6702e8e2270c373de3/3x" },
      { imgSrc: "https://cdn.betterttv.net/emote/5678a310bf317838643c8188/3x" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      emotesShown: [],
      currentEmote: null,
    };
    this.handleEmote = this.handleEmote.bind(this);
  }

  handleEmote(e) {
    console.log(this.props.emotes.length);
    let cur = Math.floor(Math.random() * this.props.emotes.length);
    // console.log(cur);
    e.target.src = this.props.emotes[cur].imgSrc;
  }

  render() {
    return (
      <div onClick={this.handleEmote} className="emote">
        {this.props.emotes.map((e) => (
          <Emote src={e.imgSrc} />
        ))}
      </div>
    );
  }
}

export default EmoteContainer;
