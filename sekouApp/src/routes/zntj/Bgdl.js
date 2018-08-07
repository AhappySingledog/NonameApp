
import { SegmentedControl, Tabs } from "antd-mobile";
import React, { Component } from "react";
import { publish } from '../../core/arbiter';
import { connect } from "dva";
import './action';
import { GridFill, MoreCharts } from "../../componets";
import "./bgdl.less";


function jsonOldTodate(e) {
  let data = new Date();
  let date = null;
  if (e == '0') {
    const y = data.getFullYear();
    const m = data.getMonth();
    const d = data.getDate();
    date = '' + y + (m + 1 > 9 ? m : (m != 0 ? 12 : '0' + m)) + (d > 9 ? d : '0' + d);
  } else if (e == '1') {
    const y = data.getFullYear();
    const m = data.getMonth();
    date = '' + y + (m + 1 > 9 ? m : (m != 0 ? 12 : '0' + m));
  } else if (e == '2') {
    const y = data.getFullYear();
    date = '' + y;
  }
  return date;
}


export default connect(({ bgdl, loading }) => ({ ...bgdl }))(
  class Bgdl extends Component {
    state = {
      inex: 0,                             //上月、本年
      index: 0,                             //记录翻页数
      list: [],                             //所有查询后返回的数据
      json: [],                             //传入chart图的数据
    }

    //** 首先得查询出当年所有的数据 */
    componentDidMount() {
      this.props.dispatch({
        type: 'layout/QueryBGDL',
        payload: {
          where: ' 1=1 order by EFFECTDATE DESC',
        }
      }).then(() => {
        publish('QueryBGDLxx').then(e => {
          this.setState({ list: e[e.length - 1].list[0].data }, () => this.HandleAction('1','DECLARATION'));
        })
      })
    }


    /** 点击码头后跳转 */
    onTabClick = (tab, index) => {
      this.setState({ index: index }, () => {
        if (this.state.index === 0 && this.state.inex === 0) {
          this.HandleAction('1','DECLARATION');
        } else if (this.state.index === 0 && this.state.inex === 1) {
          this.HandleAction('2','DECLARATION');
        } else if (this.state.index === 1 && this.state.inex === 0) {
          this.HandleAction('1', 'DECLARATIONIN');
        } else if (this.state.index === 1 && this.state.inex === 1) {
          this.HandleAction('2', 'DECLARATIONIN');
        } else if (this.state.index === 2 && this.state.inex === 0) {
          this.HandleAction('1', 'DECLARATIONOUT');
        } else if (this.state.index === 2 && this.state.inex === 1) {
          this.HandleAction('2', 'DECLARATIONOUT');
        }
      });
    }

    onchange(o) {
      if (o.nativeEvent.selectedSegmentIndex === 1) {
        this.HandleAction('2','DECLARATION');
        this.setState({ inex: o.nativeEvent.selectedSegmentIndex });
      } else {
        this.HandleAction('1','DECLARATION');
        this.setState({ inex: o.nativeEvent.selectedSegmentIndex });
      }
    }


    /** 总量 上月  本年 */
    HandleAction = (num, name) => {
      let sybgzl = [];
      const e = this.state.list;
      const Y = (e[0].EFFECTDATE).substring(0, 4);
      const M = (e[0].EFFECTDATE).substring(4, 6);
      if (num == 1) {
        const data = '' + Y + '年' + M + '月';
        console.log(data);
        sybgzl.push([e[0][name], e[1][name]], [e[0].CUSTOMSCODE + '' + data, e[1].CUSTOMSCODE + '' + data]);
      } else if (num == 2) {
        const data = '' + Y + '年';
        let s5304 = 0;
        let s5349 = 0;
        for (let i in e) {
          (e[i].CUSTOMSCODE).indexOf('5349') < 0 ?
            s5304 += Number(e[i][name]) : s5349 += Number(e[i][name])
        }
        sybgzl.push([s5304, s5349], ['5304关区' + '' + data, '5349关区' + '' + data]);
      }
      let jnbgzl = [[], [], []];
      for (let i in e) {
        (e[i].CUSTOMSCODE).indexOf('5349') < 0 ? jnbgzl[0].push(e[i][name]) : (jnbgzl[1].push(e[i][name]), jnbgzl[2].push(e[i].EFFECTDATE))
      }
      this.setState({ json: [sybgzl, jnbgzl] });
    }

    render() {
      let { tabs } = this.props;
      return (
        <GridFill header={
          <div key="wc" className="zntj_dc">
            <div id="abc" style={{ margin: "8px 5px 0px 5px", paddingBottom: '8px', background: "#fff" }}>
              <SegmentedControl values={['上月', '本年']} onChange={e => this.onchange(e)} />
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
            {tabs.map((va, key) => {
              return <div key={key}>
                <div className="boxS" />
                <MoreCharts view={va.datas} list={this.state.json} groupData={"bgdl/showCharts"} index={this.state.index} />
              </div>
            })}
          </Tabs>
        </GridFill>
      );
    }
  }
);