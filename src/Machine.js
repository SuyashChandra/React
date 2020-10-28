import React from "react";

function randomSlot() {
  return Math.floor(Math.random() * 3);
}

class Machine extends React.Component {
  render() {
    const pos = [this.props.kamo1, this.props.kamo2, this.props.kamo3];
    const rand1 = randomSlot();
    const rand2 = randomSlot();
    const rand3 = randomSlot();
    const colors = { fontSize: "50px", backgroundColor: "lime" };
    return (
      <div className="Machine">
        <p style={colors}>
          {pos[rand1]} {pos[rand2]} {pos[rand3]}
        </p>
        <p className={rand1 === rand2 && rand1 === rand3 ? "win" : "lose"}>
          {rand1 === rand2 && rand1 === rand3 ? (
            <img src="https://media1.tenor.com/images/90dc8bb677df8b3d3eab008ea50cefd1/tenor.gif?itemid=15193435" />
          ) : (
            <img src="https://media.tenor.com/images/37d36afeee7289b6cfb32a566d0f99f9/tenor.gif" />
          )}
        </p>
      </div>
    );
  }
}

export default Machine;
