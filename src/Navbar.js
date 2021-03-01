import React, {Component} from "react";
import "rc-slider/assets/index.css"
import Slider from "rc-slider";
import "./Navbar.css"

class Navbar extends Component {
    render() {
        console.log(this.props.level)
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="#">Color Picker</a>
                </div>
                    <div className="slider-container">
                        <span>Level: {this.props.level}</span>
                <div className="slider">
                    <Slider 
                        defaultValue={this.props.level} 
                        min={100} 
                        max={900} 
                        onAfterChange={this.props.changeLevel} 
                        step={100}
                    />
                    </div>
                </div>

            </header>
        )
    }
}

export default Navbar