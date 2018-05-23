/** 预警详细信息展示 */
import React, { Component } from "react";
import { Button, Toast } from "antd-mobile";
import pathToRegexp from "path-to-regexp";
import './yjxx.less';
import { connect } from "dva";
import { subscribe, unsubscribe } from "../../core/arbiter";


export default connect(({ yjxxinfo, loading }) => ({ ...yjxxinfo }))(
  class Yjxx extends Component {
    state = {
      tableName: (window.localStorage.getItem('tableName') || ""),
      count: 2,
    }
    componentDidMount() {
      const { location, dispatch, routerData } = this.props;
      const key = Object.keys(routerData).find(key =>
        pathToRegexp(key).test(location.pathname)
      );
      dispatch({
        type: "yjxxinfo/findTable",
        payload: pathToRegexp(key).exec(location.pathname)
      });
      // dispatch({
      //   type: "yjxxinfo/QueryTable",
      //   payload: {
      //     tableName: this.state.tableName,
      //     count: 1
      //   },
      // });
    }


    componentWillMount() {
      this.sub_userName = subscribe('userName', this.userName);
    }

    componentWillUnmount() {
      if (this.sub_userName) unsubscribe(this.sub_userName);
      if (this.sub_tableName) unsubscribe(this.sub_tableName);
    }

    render() {
      const { cols = {}, datas = {}, kfiled = "", } = this.props;
      return (
        <div>
          <div className="yjxxinfo_header">
            <span>{cols[kfiled]}：</span>
            <span>{datas[kfiled]}</span>
          </div>
          <div className="yjxxinfo_sp"></div>
          <table className="yjxxinfo_list">
            <tbody>
              {Object.keys(cols)
                .filter(x => x !== kfiled)
                .map((x, i) => {
                  return (
                    <tr key={i}>
                      <td style={{ color: "#848484" }}>{cols[x]}：</td>
                      <td>{datas[x]}</td>
                    </tr>
                  );
                })}
              { /**
                <tr key={'btn'}>
                <td style={{ color: "#848484" }}>操作:</td>
                <td> <Button type="warning" inline size="small" onClick={() => { Toast.offline("正在通宵开发中", 1) }}>处理</Button></td>
              </tr>
              */}
            </tbody>
          </table>
        </div>
      )
    }
  }
)
