import React from "react";
import { NavBar, Icon, Popover } from "antd-mobile";
import { connect } from "dva";
import { Route, Redirect, Switch } from "dva/router";
import { getRoutes } from '../utils/router';
import znlj from '../images/layout/智能链接.svg';
import me from '../images/layout/个人资料.svg';
import yun from '../images/layout/关务云.svg';
import about from '../images/layout/@我蛇关.svg';

import "./basic.less";

const Item = Popover.Item;

let right = [
    <Popover key="1"
        overlayClassName="fortest"
        overlayStyle={{ color: 'currentColor' }}
        visible={false}
        overlay={[
            (<Item key="1" value="scan" icon={<img src={yun} alt=""></img>} data-seed="logId">关务云</Item>),
            (<Item key="2" value="special" icon={<img src={about}  alt=""></img>} style={{ whiteSpace: 'nowrap' }}>@我蛇关</Item>),
        ]}
        align={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [0, 16],
        }}>
        <img className="app_link" src={znlj} alt=""></img>               
    </Popover>,
    <img key="2" className="app_link" src={me} alt=""></img>
];

export default connect(({ layout, loading }) => ({ ...layout }))(
    class BasicLayout extends React.PureComponent {
        render() {
          let { title, routerData, match, history, location } = this.props;
          let routers = getRoutes(match.path, routerData); 
          let router = routers.filter((router) => location.pathname === router.path)[0] || {};
          title = router.title || title;          
          return (
            <div className="app">
              {router.top === true ? <NavBar mode="dark" rightContent={right}>{title}</NavBar> : <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={history.goBack} rightContent={right}>{title}</NavBar> }
              <div className="app_content">
                  <div>
                      <Switch>
                          { routers.map((router) => (<Route key={router.path} path= {router.path} component={router.component} />)) }
                          <Redirect exact from="/" to="/znyj" />
                      </Switch>
                  </div>
              </div>
            </div>
          );
        }
    }
);
