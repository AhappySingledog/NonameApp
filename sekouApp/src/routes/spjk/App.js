import React, { Component } from 'react';
import { Map, Marker, InfoWindow } from 'react-bmap';
import { connect } from "dva";
import style from './app.less';
import { Modal, Grid, Icon, SearchBar, Toast } from 'antd-mobile';
import lb from '../../images/spjk/lb.svg'

export default connect(({ spjk, loading }) => ({ ...spjk }))(class App extends Component {
  // componentDidMount() {
  //   let id = document.location.hash;
  //   if (id.indexOf('userid') > 0) {
  //   } else {
  //     Toast.fail("您未登入系统，无法正常操作！", 0)
  //   }
  // }
  render() {
    let { modal = false, modal2 = false, center = 'lng:113.89425,lat:22.485156', zoom = 14, spxg = [], dispatch, spurl, title, text } = this.props;
    return (
      <div style={{ width: "100%", height: "100%", overflow: 'hidden' }}>

        <div style={{ top: 10, right: 10, width: 30, height: 30, position: 'absolute', zIndex: 999, "border": "1px solid #d2d1d1", 'border-radius': 3, backgroundColor: '#ffffff', padding: 1, 'box-shadow': '1px 1px 1px 1px #d2d1d1' }} onClick={() => dispatch({ type: "spjk/onClick" })}>
          <img style={{ width: 30, height: 30 }} src={lb} />
        </div>

        <Map style={{ width: '100%', height: '110%' }} center={center.split(",").reduce((a, b) => { let kv = b.split(":"); a[kv[0]] = kv[1]; return a; }, {})} zoom={zoom}>
          {
            spxg.map((spx, i) => {
              let { coordinate, name, liveID, rtmpReleaseAddr, hlsReleaseAddr } = spx;

              if (center === coordinate) {
                return <Marker icon="loc_red" key={i} position={coordinate.split(",").reduce((a, b) => {
                  let kv = b.split(":");
                  a[kv[0]] = kv[1];
                  return a;
                }, {})} events={{
                  click() {
                    dispatch({ type: "spjk/showModal", payload: spx })
                  }
                }} />
              } else {
                return <Marker icon="loc_blue" key={i} position={coordinate.split(",").reduce((a, b) => {
                  let kv = b.split(":");
                  a[kv[0]] = kv[1];
                  return a;
                }, {})} events={{
                  click() {
                    dispatch({ type: "spjk/showModal", payload: spx })
                  }
                }} />
              }

            })
          }

        </Map>

        {modal === true ?
          <Modal popup
            visible={true}
            closable={true}
            // maskClosable={false}
            animationType="slide-up"
            title={title}
            onClose={() => dispatch({ type: "spjk/onClose" })}>
            <iframe src={spurl}
              style={{ zIndex: 1000, width: "100%", height: "50vh" }}></iframe>
          </Modal> : null
        }
        {modal2 === true ?
          <Modal popup
            visible={true}
            animationType="slide-up"
            onClose={() => dispatch({ type: "spjk/onSpClose" })}>
            <div style={{ height: "50vh", overflow: 'scroll' }}>
              {
                spxg.map((spx, i) => {
                  let { name, coordinate } = spx;
                  return <div style={{ 'border-bottom': 'solid 1px #e8e8e8', color: '#848484', height: 40, 'line-height': 40 }}
                    key={i} onClick={() => dispatch({ type: "spjk/onOk", payload: spx })} >{name}</div>
                    ;
                })
              }
            </div>
          </Modal> : null
        }
      </div>
    );
  }
})
