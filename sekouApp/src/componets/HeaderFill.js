import React from "react";
import "./headerfill.less";

export default class HeaderFill extends React.Component {
    render() {
        const {title, children, style = {}, contentStyle={}} = this.props;
        return (
            <div className="headerfill" style={style}>
                <div className="headerfill-title">{title}</div>
                <div style={Object.assign({padding: "12px"}, contentStyle)}> {children}</div>               
            </div>
        )        
    }
}