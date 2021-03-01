import React, {Component} from "react";
import "rc-slider/assets/index.css"
import Slider from "rc-slider";
import "./Navbar.css";

import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton"
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {format: "hex", open: false};
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }
    handleFormatChange(e){
        this.setState({format: e.target.value, open: true},() => {

            this.props.handleChange(this.state.format);
        });
    }
    closeSnackbar(){
        this.setState({open:false})
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
                    <Select value={this.state.format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255, 255, 255, 0.1)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                    open={ this.state.open} 
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed to {this.state.format.toUpperCase()}</span>}
                    ContentProps={{
                        "aria-describedby":"message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color='inherit' key="close" aria-label="close">
                            <CloseIcon  />
                        </IconButton>
                    ]}
                    />
            </header>
        )
    }
}

export default Navbar