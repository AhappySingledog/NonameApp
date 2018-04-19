import { Tabs } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import "./app.less";

export default connect(({ znyj, loading }) => ({ view: znyj.view, onClick: znyj.onGridItemClick }))(
    class app extends Component {
        state = { index: (window.localStorage.getItem('znyj_index') || 0) * 1 }
        render() {
            let { view = [], onClick = () => { } } = this.props;
            const { index } = this.state;
            return (
                <Tabs
                    tabs={view.map(view => ({ title: view.title }))}
                    swipeable={false}
                    initialPage={index}
                    onChange={(tab, index) => { window.localStorage.setItem('mthzx_tabs_indx', index); }}
                    onTabClick={(tab, index) => { this.setState({ index }) }}
                >
                    {
                        view.map((value, key) => {
                            let { items: datas = [] ,type } = value;
                            return (
                                <div key={key} className="znyj">
                                    <div className="znyj_pb">
                                        {
                                            datas.map((val, i) => {
                                                if(val.cla ==='G'){
                                                    return (
                                                        <div key={i} onClick={()=>{onClick(val,i)}}>
                                                            <div  className={'iWarning-G' + (i+1)}>{val.num}</div>
                                                        </div>
                                                    )
                                                }else if(val.cla ==='A'){
                                                    return (
                                                        <div key={i} onClick={()=>{onClick(val,i)}}>
                                                            <div  className={'numbers-A' + (i+1)}>{val.num}</div>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </Tabs>
            )
        }
    }
);