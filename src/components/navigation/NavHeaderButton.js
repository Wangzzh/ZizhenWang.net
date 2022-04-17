import React from "react";
import { Link } from 'react-router-dom'
import "./NavHeader.css"

class NavHeaderButton extends React.Component {

    render() {
        return (
            <div className="NavHeaderButton">
                <Link to="/contact" style={{textDecoration: 'none', color: "white"}}>
                    {this.props.text}
                </Link>
            </div>
        );
    }
}

export default NavHeaderButton;