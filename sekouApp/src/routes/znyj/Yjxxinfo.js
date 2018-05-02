/** 预警详细信息展示 */
import React, { Component } from "react";
import { Button, Toast } from "antd-mobile";
import pathToRegexp from "path-to-regexp";
import './yjxx.less';
import { connect } from "dva";


export default connect(({ yjxxinfo, loading }) => ({ ...yjxxinfo }))(
  class Yjxx extends Component {
    componentDidMount() {
      const { location, dispatch, routerData } = this.props;
      const key = Object.keys(routerData).find(key =>
        pathToRegexp(key).test(location.pathname)
      );
      dispatch({
        type: "yjxxinfo/findTable",
        payload: pathToRegexp(key).exec(location.pathname)
      });
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
