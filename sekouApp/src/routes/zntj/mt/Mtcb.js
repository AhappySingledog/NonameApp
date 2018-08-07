import { GridFill, Raingratio, MoreCharts } from "../../../componets";
import { Tabs, DatePicker, List, Toast } from "antd-mobile";
import { publish } from '../../../core/arbiter';
import React, { Component } from "react";
import { connect } from "dva";
import "./mtcb.less";



export default connect(({ mtcbqk, loading }) => ({ ...mtcbqk }))(
  class Mtcb extends Component {
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


    /** 点击码头后跳转 */
    onTabClick = (tab, index) => {
      this.setState({ index: index, pageSize: index, TERMINALCODE : tab.type}, () => {
        Toast.loading('', 0);
        this.QueyrShip();
      });
    }

    /** 选择日期  */
    OnchangeTab(e) {
      Toast.loading('', 0);
      this.QueyrShip(e);
      this.setState({ dataTime : e });
    }

    /** 所有的查询方法 */
    QueyrShip(e) {
      this.props.dispatch({
        type: 'layout/QueryShip',payload: e ? { Todate: e, tabName: 'SCCT_DATA', type: this.state.TERMINALCODE } : { tabName: 'SCCT_DATA', type: this.state.TERMINALCODE }
      }).then(e => {
        publish('QueryShips').then(e => {
            if(e[0]['list'][0][0]){
              const list = e[e.length - 1];
              this.props.tabs[this.state.index]['data'][0]['val'] = Number(list.list[0][0]['attributes']['BARGEIN']) + Number(list.list[0][0]['attributes']['VESSELIN']);
              this.props.tabs[this.state.index]['data'][1]['val'] = Number(list.list[0][0]['attributes']['BARGEOUT']) + Number(list.list[0][0]['attributes']['VESSELOUT']);
              this.setState({ json: list.list, shipjson: this.props.tabs[this.state.index]['data'] });
              if(list.lastToday['features'].length > 0){
                let jghb = Number(list.lastToday['features'][0]['attributes']['BARGEIN']) + Number(list.lastToday['features'][0]['attributes']['VESSELIN']);
                let cghb =  Number(list.lastToday['features'][0]['attributes']['BARGEOUT']) + Number(list.lastToday['features'][0]['attributes']['VESSELOUT']);
                let c = (( this.props.tabs[this.state.index]['data'][0]['val'] - jghb ) /jghb )* 100;
                let h = (( this.props.tabs[this.state.index]['data'][1]['val'] - cghb ) /cghb )* 100;
                this.props.tabs[this.state.index]['data'][0]['zb'] = c > 0 ? 'up' : 'down' ;
                this.props.tabs[this.state.index]['data'][1]['zb'] = h > 0 ? 'up' : 'down' ;
                this.props.tabs[this.state.index]['data'][0]['hb'] = Math.floor(Math.abs(c));
                this.props.tabs[this.state.index]['data'][1]['hb'] = Math.floor(Math.abs(h));
                this.setState({ json: list.list, shipjson: this.props.tabs[this.state.index]['data'] });
               }
            }
        })
      });
    }


    render() {
      let { tabs } = this.props;
      return (
        <GridFill header={
          <div className="yqcl_box">
            <DatePicker mode="date" title="选择时间" value={this.state.dataTime} onChange={(e) => this.OnchangeTab(e)}>
              <List.Item arrow="horizontal">时间</List.Item>
            </DatePicker>
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
              return <div key={key}> <div className="boxS" /> <Raingratio val={this.state.shipjson || va.data} />
                <div className="boxS" />
                <MoreCharts view={va.datas} list={this.state.json} groupData={"mtcb/showCharts"} index={this.state.index} />
              </div>
            })}
          </Tabs>

        </GridFill>
      );
    }
  }
);
