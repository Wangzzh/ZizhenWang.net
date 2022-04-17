import React from "react";
import NavHeaderButton from "./NavHeaderButton";
import NavHeaderTitle from "./NavHeaderTitle";
import "./NavHeader.css"

class NavHeader extends React.Component {
    render() {
        return (
            <div className="NavHeader">
                <NavHeaderTitle text="Zizhen Wang"/>
                <NavHeaderButton text="Button1"/>
                <NavHeaderButton text="Button2"/>
            </div>
        );
    }
}

export default NavHeader;