import React, { Component } from "react";
import "./Ringratio.less";

export default class Raingratio extends Component {
    render() {
        let { val } = this.props;
        return (
            <div className="mc">
                {
                    val.map((valu, i) => {
                        return <div key={i} className="mtcb_box">
                            <div className="mtcb_box_top">
                                <div className={"mtcb_box_top_" + valu.cb}>
                                    <img src={valu.img} />
                                </div>
                                <div className="mtcb_box_top_right">{valu.name}</div>
                            </div>
                            <div className="mtcb_box_cen">{valu.val}</div>
                            <div className="mtcb_box_bot">
                                <div>环比：</div>
                                <span className={"mtcb_box_bot_" + valu.zb}>
                                    <span>{valu.hb}%</span>
                                </span>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}