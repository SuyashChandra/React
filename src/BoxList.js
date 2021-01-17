import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.boxSubmit = this.boxSubmit.bind(this);
  }

  boxSubmit(formState) {
    this.setState({
      boxes: [...this.state.boxes, formState],
    });
  }

  render() {
    let boxes = this.state.boxes.map((box) => (
      <Box
        key={uuidv4()}
        height={box.height}
        width={box.width}
        color={box.color}
      />
    ));
    console.log(uuidv4());
    return (
      <div>
        <NewBoxForm boxSubmit={this.boxSubmit} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
