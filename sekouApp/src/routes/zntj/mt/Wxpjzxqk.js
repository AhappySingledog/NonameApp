import { LineChart, GridFill, MoreCharts } from "../../../componets";
import { SegmentedControl, Tabs } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import '../action';
import "./wxpjzxqk.less";

export default connect(({ wxpjzxqk, loading }) => ({ ...wxpjzxqk }))(
  class Wxpjzxqk extends Component {

    state = {
      index: 0,
      json: []
    }
    componentDidMount() {
     this.handleAction('V_IMAP_SCCT_DATA_JR');
    }

    onchange = (e) => {
      this.setState({ inex: e.nativeEvent.selectedSegmentIndex }, () => {
          const xzsj = {
              0: 'V_IMAP_SCCT_DATA_JR',
              1: 'V_IMAP_SCCT_DATA_JY',
          };
          this.handleAction(xzsj[this.state.inex]);
      })
  }

    handleAction(e){
      this.props.dispatch({
        type: 'wxpjzxqk/Query',
        payload: {
          tableName: e,
          where: ' 1=1'
        }
      }).then(e => {
        let mt = [], zl = [];
        let a = (this.props.jsons[0].data).sort(( a,b) => a.ZL - b.ZL);
        for (let i in a) {
          mt.push(a[i].MT);
          zl.push(a[i].ZL);
        };
        this.setState({ json: [mt, zl] });
      })
    }

    render() {
      return (
        <GridFill header={
          <div key="wc" className="zntj_dc">
            <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
              <SegmentedControl values={['本年', '本月']} selectedIndex={this.state.inex} onChange={this.onchange} />
            </div>
          </div>
        }>
          <div style={{ background: "#f9f9f9" }}>
            {/* <MoreCharts source={""} view={va.datas} groupData={"yqqysb/showCharts"} index={this.state.index} /> */}
            <MoreCharts view={[{ name: 'z_chars1', tabname: '码头危险品统计' }]} list={this.state.json} groupData={"wxpjzxqk/showCharts"} index={this.state.index} />
          </div>
        </GridFill >
      );
    }

  }
);