import React, { Component } from "react";
import pathToRegexp from "path-to-regexp";
import './xxinfo.less';
import { connect } from "dva";
import img from "../../images/zncx/cbxx.svg";

export default connect(({ xxinfo, loading }) => ({ ...xxinfo }))(
  class Xxinfo extends Component {
    componentDidMount() {
      const { location, dispatch, routerData } = this.props;
      const key = Object.keys(routerData).find(key =>
        pathToRegexp(key).test(location.pathname)
      );
      dispatch({
        type: "xxinfo/getInfo",
        payload: pathToRegexp(key).exec(location.pathname)
      });
    }
    render() {
      const { icon = img, cols = {}, datas = {}, kfiled = "", fStyle ={}} = this.props;
      let getStlye = (fld) => fStyle[fld] || {};
      return (
        <div>
          <div className="xxinfo_header">
            <img className="xxinfo_img" src={icon} alt="" />
            <span>{cols[kfiled]}：</span>
            <span>{datas[kfiled]}</span>
          </div>
          <div className="xxinfo_sp"></div>
          <table className="xxinfo_list">
            <tbody>
              {Object.keys(cols)
                .filter(x => x !== kfiled)
                .map((x, i) => {
                  return (
                    <tr key={i}>
                      <td style={{color: "#848484"}}>{cols[x]}：</td>
                      <td style={getStlye(x)}>{datas[x]}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      );
    }
  }
);
