import React, {Component} from "react";
import "rc-slider/assets/index.css"
import Slider from "rc-slider";
import "./Navbar.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {format: "hex"};
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({format: e.target.value},() => {

            this.props.handleChange(this.state.format);
        });
    }
    render() {
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
                <div className="select-container">
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255, 255, 255, 0.1)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default Navbar