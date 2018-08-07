import { Tabs } from "antd-mobile";
import React, { Component } from "react";
import { subscribes, publish, unsubscribe } from '../../core/arbiter';
import { connect } from "dva";
import './action';

import { GridFill, MoreCharts } from "../../componets";
import "./zssk.less";

export default connect(({ zssk, loading }) => ({ ...zssk }))(
  class Zssk extends Component {
    state = {
      index: 0,                             //记录翻页数
      list: [],                             //所有查询后返回的数据
      json: []                             //传入chart图的数据
    }

    componentDidMount() {
      this.props.dispatch({
        type: 'layout/QueryBGDL',
        payload: {
          where: ' 1=1 order by EFFECTDATE DESC',
        }
      }).then(() => {
        this.ActionCharts();
      })
    }


    /** 点击码头后跳转 */
    onTabClick = (tab, index) => {
      this.setState({ index: index }, () => this.ActionCharts());
    }
    /** 进入action的char图 */
    ActionCharts = () => {
      publish('QueryBGDLxx').then(e => {
        this.setState({ list: { json: (e[e.length - 1]['list'][0]['data']).sort((a, b) => Number(a.EFFECTDATE) - Number(b.EFFECTDATE)), index: this.state.index } })
      })
    };

    // onchange(e) {
    //   this.props.dispatch({
    //     type: "bgdl/select",
    //     payload: e
    //   });
    // }
    render() {
      let { tabs } = this.props;
      return (
        <GridFill header={
          <div key="wc" className="zntj_dc">
            {/* <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
              <SegmentedControl values={['本年', '本月']} onValueChange={e => this.onchange(e)} />
            </div> */}
          </div>
        }>
          <Tabs
            tabs={tabs}
            swipeable={false}
            initialPage={0}
            onChange={null}
            onTabClick={(tab, index) => { this.onTabClick(tab, index) }}
          >
            {tabs.map((va, key) => {
              return <div key={key}>
                <div className="boxS" />
                <MoreCharts view={va.datas} list={this.state.list} groupData={"zssk/showCharts"} index={this.state.index} />
              </div>
            })}
          </Tabs>
        </GridFill>
      );
    }

  }
);