import { Tabs } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import "./app.less";

export default connect(({ znyj, loading }) => ({ tabs: znyj.tabs, onClick: znyj.onGridItemClick }))(
    class app extends Component {
        state = { index: (window.localStorage.getItem('znyj_index') || 0) * 1 }
        render() {
            let { tabs = [], onClick = () => { } } = this.props;
            const { index } = this.state;
            return (
                <Tabs
                    tabs={tabs.map(view => ({ title: view.title }))}
                    swipeable={false}
                    initialPage={index}
                    onChange={(tab, index) => { window.localStorage.setItem('mthzx_tabs_indx', index); }}
                    onTabClick={(tab, index) => { this.setState({ index }) }}
                >
                    {
                        tabs.map((va, key) => {
                            return <div key={key}> <Vies val={va.data} handfie={onClick} /></div>
                        })
                    }
                </Tabs>
            )
        }
    }
);

class Vies extends React.Component {
    render() {
        let { val } = this.props;
        return (
            <div className="yj">
                {
                    val.map((valu, a) => {
                        return <div key={a} className="yjbox" onClick={() => this.props.handfie(valu,a)}>
                            <div className="yjbox_right">
                                <div className="yjbox_right_top">
                                    <div className={"yjbox_right_top_" + valu.type}>
                                        <img src={valu.img} />
                                    </div>
                                    <div className={"yjbox_right_name_" + valu.type}>{valu.title}</div>
                                </div>
                                <div className={"yjbox_right_cen yjbox_right_cen_" + valu.type}>{valu.num}</div>
                                <div className="yjbox_right_bot">{valu.botview}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}