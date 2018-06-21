
import { SegmentedControl, Tabs, Toast } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import { LineChart, GridFill, MoreCharts } from "../../../componets";
import '../action';
import "./mtwsbjzx.less";

export default connect(({ mtwsbjzx, loading }) => ({ ...mtwsbjzx }))(
  class Mtwsbjzx extends Component {

    state = {
      pageSize: 1,                          //当前选择页
      TERMINALCODE: 'SCT',                  //选择的码头
      dataTime: new Date(Date.now()),       //当前时间
      index: 0,                             //记录翻页数
      json: [],                             //查询后的返回数据
      shipjson: [],                        //进出船数据
    }


    /** 初始化 */
    componentDidMount() {
      Toast.loading('', 0);
      this.QueyrShip();
    }

    onchange(e) {
      this.props.dispatch({
        type: "mtwsbjzx/select",
        payload: e
      });
    }
    /** 点击码头后跳转 */
    onTabClick = (tab, index) => {
      this.setState({ index: index, pageSize: index, TERMINALCODE: tab.type }, () => {
        Toast.loading('', 0);
        this.QueyrShip();
      });
    }

    /** 选择日期  */
    OnchangeTab(e) {
      Toast.loading('', 0);
      this.QueyrShip(e);
      this.setState({ dataTime: e });
    }

    /** 所有的查询方法 */
    QueyrShip(e) {
      this.props.dispatch({
        type: 'mtwsbjzx/QueryShip', payload: e ? { Todate: e, type: this.state.TERMINALCODE } : { type: this.state.TERMINALCODE }
      }).then(e => {
        this.setState({ json: this.props.list })
      });
    }

    render() {
      let { source = [], tabs } = this.props;
      return (

        <GridFill header={
          <div key="wc" className="zntj_dc">
            {/* <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
              <SegmentedControl values={['本年', '本月']} onChange={e => this.onchange(e.nativeEvent.selectedSegmentIndex)} />
            </div> */}
          </div>
        }>
          <div style={{ background: "#f9f9f9" }}>
            {/* <LineChart source={source} /> */}
            <Tabs
              tabs={tabs}
              swipeable={false}
              initialPage={0}
              onChange={() => { }}
              onTabClick={(tab, index) => { this.onTabClick(tab, index) }}>
              {tabs.map((va, key) => {
                return <div key={key}>
                  <div className="boxS" style={{ background: '#e8e8e8', marginBottom: '-5px' }} />
                  <MoreCharts source={""} view={va.datas} list={this.state.json} groupData={"mtwsbjzx/showCharts"} index={this.state.index} />
                </div>
              })}
            </Tabs>
          </div>
        </GridFill >
      );
    }

  }
);