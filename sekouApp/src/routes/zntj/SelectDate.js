import { Calendar } from "antd-mobile";
import React, { Component } from "react";
import store from "../../index";
import "./selectDate.less";

const { dispatch } = store;
const getType = (zt, val) => (zt === val ? "checked" : "unchecked");
const toDateString = dt =>
  dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
const datePick = [
  {
    title: "今日",
    date: () => [toDateString(new Date())]
  },
  {
    title: "昨日",
    date: () => [toDateString(new Date(new Date() - 86400000))]
  },
  {
    title: "本周",
    date: () => {
      let now = new Date(),
        fisrt = new Date(now - (now.getDay() - 1) * 86400000),
        last = new Date(fisrt / 1 + 6 * 86400000);
      return [toDateString(fisrt), toDateString(last)];
    }
  },
  {
    title: "上周",
    date: () => {
      let now = new Date(),
        fisrt = new Date(now - (now.getDay() + 6) * 86400000),
        last = new Date(now - (now.getDay() + 1) * 86400000);
      return [toDateString(fisrt), toDateString(last)];
    }
  },
  {
    title: "本月",
    date: () => {
      let now = new Date(),
        fisrt = new Date(now.getFullYear(), now.getMonth(), 1),
        tem = new Date(now.getFullYear(), now.getMonth() + 1, 1),
        last = new Date(tem - 86400000);
      return [toDateString(fisrt), toDateString(last)];
    }
  },
  {
    title: "上月",
    date: () => {
      let now = new Date(),
        fisrt = new Date(now.getFullYear(), now.getMonth() - 1, 1),
        tem = new Date(now.getFullYear(), now.getMonth(), 1),
        last = new Date(tem - 86400000);
      return [toDateString(fisrt), toDateString(last)];
    }
  },
  {
    title: "自定义"
  }
];

export default class SelectDate extends Component {
  state = { showRange: false };
  render() {
    let { showRange = false } = this.state;
    let { lx = 0, cols = 4, type, style } = this.props;
    let confirm = (idx, data) => dispatch({ type, payload: { idx, data } });
    if (showRange)
      return (
        <Calendar
          visible
          showShortcut
          onCancel={() => this.setState({ showRange: false })}
          onConfirm={(fisrt, last) => {
            confirm(6, [toDateString(fisrt), toDateString(last)]);
          }}
          defaultDate={new Date()}
        />
      );
    return (
      <div className="selectDate" style={style}>
        <div>
          <div className="selectDate_title">日期</div>
          {datePick
            .map((x, i) => {
              return { idx: i, ...x };
            })
            .reduce((res, data) => {
              let { idx } = data,
                row = Math.floor(idx / cols);
              if (res.length <= row) res.push([data]);
              else res[row].push(data);
              return res;
            }, [])
            .map((row, i) => {
              return (
                <div key={i} className="selectDate_btns">
                  {row.map((data, j) => {
                    return <div key={j}>
                        <div className={"selectDate_btns_" + getType(lx, data.idx)} onClick={() => {
                            if (data.date) {
                              confirm(data.idx, data.date());
                            } else this.setState({
                                showRange: true
                              });
                          }}>
                          {data.title}
                        </div>
                      </div>;
                  })}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
