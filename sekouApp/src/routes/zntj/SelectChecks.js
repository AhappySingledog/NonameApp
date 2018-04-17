import React, { Component } from "react";
import store from "../../index";
import "./selectChecks.less";

const { dispatch } = store;

export default class SelectChecks extends Component {
  render() {
    let { type, style, groups } = this.props;
    let checkClick = (gid, idx, checked) =>
      dispatch({ type, payload: { gid, idx, checked } });
    return (
      <div className="selectChecks" style={style}>
        <div>
          {groups.map((group, idx) => {
            return (
              <div key={idx} className="selectChecks_group">
                <div className="selectChecks_group_title">{group.title}</div>
                <div className="selectChecks_group_items">
                  {group.items.map((item, idy) => {
                    return (
                      <div key={idy}>
                        {item.checked ? (
                          <div
                            className="selectChecks_selected"
                            onClick={() => checkClick(idx, idy, !item.checked)}
                          >
                            {item.title}
                          </div>
                        ) : (
                          <div
                            onClick={() => checkClick(idx, idy, !item.checked)}
                          >
                            {item.title}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div />
                {groups.length > idx + 1 ? (
                  <div className="selectChecks_group_sp" />
                ) : null}
              </div>
            );
          })}
          <div className="selectChecks_btns">
            <div
              className="selectChecks_btn"
              onClick={() => dispatch({ type })}
            >
              取消
            </div>
            <div className="selectChecks_btn_sp" />
            <div
              className="selectChecks_btn"
              style={{ color: "#1890ff" }}
              onClick={() => dispatch({ type, payload: groups })}
            >
              确认
            </div>
          </div>
        </div>
      </div>
    );
  }
}
