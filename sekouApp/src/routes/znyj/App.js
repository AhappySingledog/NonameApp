import { Tabs, Toast } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import "./app.less";
import a from './Yjxxinfo';
import { publish } from "../../core/arbiter";

function isEmptyObject(obj) {

    for (var key in obj) {
        break; return false
    };
    return true
};

export default connect(({ znyj, loading }) => ({ ...znyj, onClick: znyj.onGridItemClick }))(
    class app extends Component {
        state = {
            index: (window.localStorage.getItem('znyj_index') || 0) * 1,
        }

        // componentDidMount() {
        //     let id = document.location.hash;
        //     if (id.indexOf('userid') > 0) {
        //         const userid = id.substring(id.indexOf('=') + 1);
        //         window.localStorage.setItem('userid', userid);
        //         Toast.loading('加载中...', 0);
        //         this.props.dispatch({
        //             type: 'znyj/Query',
        //         });
        //     } else {
        //         Toast.fail("您未登入系统，无法正常操作！", 0)
        //     }
        // }

        tabName = (e) => {
            Toast.loading('查询中...', 0);
            if (this.props.list[e.cla].value > 0) {
                window.localStorage.setItem('tableName', e.cla);
                this.props.onClick(e);
            } else {
                Toast.hide();
                Toast.fail('当前无数据', 1.5);
            }
        }
        render() {
            let { tabs = [], onClick = () => { }, list = null } = this.props;
            const { index } = this.state;
            return (
                <Tabs
                    tabs={tabs.map(view => ({ title: view.title }))}
                    swipeable={false}
                    initialPage={index}
                    onChange={(tab, index) => { window.localStorage.setItem('znyj_index', index); }}
                    onTabClick={(tab, index) => { this.setState({ index }) }}
                >
                    {
                        list != null ? tabs.map((va, key) => {
                            return <div key={key}> <Vies list={list} val={va.data} handfie={this.tabName} /></div>
                        }) : <div />
                    }
                </Tabs>
            )
        }
    }
);

class Vies extends React.Component {
    render() {
        let { val, list } = this.props;
        return (
            <div className="yj">
                {
                    val.map((valu, a) => {
                        return <div key={a} className="yjbox" onClick={() => this.props.handfie(valu, a, list)}>
                            <div className="yjbox_right">
                                <div className="yjbox_right_top">
                                    <div className={"yjbox_right_top_" + valu.type}>
                                        <img src={valu.img} />
                                    </div>
                                    <div className={"yjbox_right_name_" + valu.type}>{valu.title}</div>
                                </div>
                                <div className={"yjbox_right_cen yjbox_right_cen_" + valu.type}>{ list[valu.cla] ? list[valu.cla].value : 0 }</div>
                                <div className="yjbox_right_bot">{valu.botview}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}