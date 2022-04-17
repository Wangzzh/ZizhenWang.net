import React from "react";
import "./NavHeader.css"

class NavHeaderTitle extends React.Component {
    render() {
        return (
            <div className="NavHeaderTitle">
                <div>{this.props.text}</div>
            </div>
        );
    }
}

export default NavHeaderTitle;