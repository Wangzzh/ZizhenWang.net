import React from "react";
import "./NavHeader.css"

class NavHeaderButton extends React.Component {
    render() {
        return (
            <div className="NavHeaderButton">
                <div>{this.props.text}</div>
            </div>
        );
    }
}

export default NavHeaderButton;