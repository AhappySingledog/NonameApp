import { connect } from "dva";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { publish } from '../../core/arbiter';
import { SegmentedControl, Tabs, Toast } from "antd-mobile";
import { Chart, HeaderFill, GridFill } from "../../componets";
import './action';
import "./tgxl.less";

export default connect(({ tgxl, loading }) => ({ ...tgxl }))(
  class Tgxl extends Component {

    state = {
      index: 0,                             //记录翻页数
      list: [],                             //所有查询后返回的数据
      json: [],                             //传入chart图的数据
      contro: 0                            //点击本年或者本月按钮
    }

    componentDidMount() {
      this.props.dispatch({
        type: 'layout/QueryBGDL', payload: { year: new Date().getFullYear() }
      }).then(() => {
        publish('QueryBGDLxx').then(e => {
          this.setState({ list: { json: (e[e.length - 1]['list'][0]['data']).sort((a, b) => Number(a.EFFECTDATE) - Number(b.EFFECTDATE)), index: this.state.index } }, () => this.showCharts())
        });
      })
    }

    showCharts = () => {
      let l = [[], [], []];
      if (this.state.index == 0 && this.state.contro == 0) {
        l[0].push(this.state.list.json[this.state.list.json.length - 2].CLEAREDEFFICIENCY, 0.5);
        l[1].push(this.state.list.json[this.state.list.json.length - 2].CLEAREDEFFICIENCY, this.state.list.json[this.state.list.json.length - 4].CLEAREDEFFICIENCY);
        l[2].push(this.state.list.json[this.state.list.json.length - 2].EFFECTDATE, this.state.list.json[this.state.list.json.length - 4].EFFECTDATE);
      } else if (this.state.index == 1 && this.state.contro == 1) {
        let num = 0;
        let js = (this.state.list.json).filter(res => res.CUSTOMSCODE === '5349关区');
        for (let a in js) {
          num += Number(js[a].CLEAREDEFFICIENCY);
          l[1].push(js[a].CLEAREDEFFICIENCY);
          l[2].push(js[a].EFFECTDATE);
        };
        l[0].push(num, 0.5);
      } else if (this.state.index == 0 && this.state.contro == 1) {
        var num = 0;
        let js = (this.state.list.json).filter(res => res.CUSTOMSCODE === '5304关区');
        for (let a in js) {
          num += Number(js[a].CLEAREDEFFICIENCY);
          l[1].push(js[a].CLEAREDEFFICIENCY);
          l[2].push(js[a].EFFECTDATE);
        };
        l[0].push(num, 0.5);
      } else if (this.state.index == 1 && this.state.contro == 0) {
        l[0].push(this.state.list.json[this.state.list.json.length - 1].CLEAREDEFFICIENCY, 0.5);
        l[1].push(this.state.list.json[this.state.list.json.length - 1].CLEAREDEFFICIENCY, this.state.list.json[this.state.list.json.length - 3].CLEAREDEFFICIENCY);
        l[2].push(this.state.list.json[this.state.list.json.length - 1].EFFECTDATE, this.state.list.json[this.state.list.json.length - 3].EFFECTDATE);
      } else {
        Toast.fail("请联系管理员报错了！", 1.5);
      }
      publish("tgxl/showCharts", l).then((res) => {
        let [data1, data2] = res[0];
        if (this.chart1) this.chart1.destroy();
        this.chart1 = new Chart(ReactDOM.findDOMNode(this.refs.chart1), data1);

        if (this.chart2) this.chart2.destroy();
        this.chart2 = new Chart(ReactDOM.findDOMNode(this.refs.chart2), data2);


        if (this.chart3) this.chart3.destroy();
        this.chart3 = new Chart(ReactDOM.findDOMNode(this.refs.chart3), data1);

        if (this.chart4) this.chart4.destroy();
        this.chart4 = new Chart(ReactDOM.findDOMNode(this.refs.chart4), data2);

      });
    }


    /** 点击时间 */
    onchange(e) {
      this.props.dispatch({
        type: "tgxl/select",
        payload: {
          num: e,
          month: (this.state.list.json[this.state.list.json.length - 1].EFFECTDATE).substring(4, 6)
        }
      });
      this.setState({ contro: e }, () => this.showCharts());

    }

    /** 点击关区 */
    onTabClick = (tab, index) => {
      this.setState({ index: index }, () => this.showCharts());
    }

    componentWillUnmount() {
      if (this.chart1) this.chart1.destroy();
      if (this.chart2) this.chart2.destroy();
      if (this.chart3) this.chart3.destroy();
      if (this.chart4) this.chart4.destroy();
    }
    render() {
      let { tabs, data = '06', monthTitle, barTitle } = this.props;
      return (
        <GridFill header={
          <div key="wc" className="zntj_dc">
            <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
              <SegmentedControl selectedIndex={this.state.contro} values={['上月', '本年']} onChange={e => this.onchange(e.nativeEvent.selectedSegmentIndex)} />
            </div>
          </div>
        }>
          <Tabs
            tabs={tabs}
            swipeable={false}
            initialPage={0}
            onChange={null}
            onTabClick={(tab, index) => { this.onTabClick(tab, index) }}
          >
            <div style={{ background: "#f9f9f9", height: '100%' }}>
              <div className="boxS" />
              <HeaderFill title={data + monthTitle} style={{ margin: "8px 0" }} index={this.state.index}>
                {/* <canvas style={{ height: '100%', width: '100%' }} ref="echart2"></canvas> */}
                <canvas ref="chart2" />
              </HeaderFill>

              <HeaderFill title={data + barTitle} style={{ margin: "8px 0", height: '60%' }} index={this.state.index}>
                <canvas ref="chart1" />
              </HeaderFill>
            </div>

            <div style={{ background: "#f9f9f9", height: '100%' }}>
              <div className="boxS" />
              <HeaderFill title={data + monthTitle} style={{ margin: "8px 0" }} index={this.state.index}>
                {/* <canvas style={{ height: '100%', width: '100%' }} ref="echart4"></canvas> */}
                <canvas ref="chart4" />
              </HeaderFill>

              <HeaderFill title={data + barTitle} style={{ margin: "8px 0", height: '60%' }} index={this.state.index}>
                <canvas ref="chart3" />
              </HeaderFill>
            </div>
          </Tabs>
        </GridFill>
      )
    }

  })