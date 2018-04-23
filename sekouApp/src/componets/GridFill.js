import React from "react";
import "./gridfill.less";

export default class GridFill extends React.Component {
    render() {
        const {direction = 'row', header, children, size = [], style = {}} = this.props;
        const isFixed = header != null;
        const content = Array.isArray(children) ? children : children && [children] || [];
        const getStyle = isFixed ? ((i) => ({flexGrow: size[i] || 1})) : ((i) => direction === 'row' ? {height: size[i] + '%'} : {width: size[i] + '%'});
        return (
            <div style={style} className={'gridfill ' + (direction === 'row' ? 'gridfill-row' : 'gridfill-column')}>
                {header}
                {
                    content.map((item, i) => {
                        return (
                            <div className="gridfill-item" key={i} style={getStyle(i)}><div>{item}</div></div>
                        );
                    })
                }
            </div>
        )        
    }
}