import React from "react";
import "./NavHeader.css"

class NavHeaderTitle extends React.Component {
    render() {
        return (
            <div className="NavHeaderTitle">
                {this.props.text}
            </div>
        );
    }
}

export default NavHeaderTitle;