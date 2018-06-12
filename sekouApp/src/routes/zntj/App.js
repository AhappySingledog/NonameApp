import { Grid, Carousel, Toast } from "antd-mobile";
import React, { Component } from "react";
import { connect } from "dva";
import { GridFill, HeaderFill } from '../../componets';

let renderItem = (el, idx) => {
  return (
    <div className="am-grid-item-inner-content">
      <div style={{ padding: '8px', borderRadius: '4px', background: el.color, width: '30%', height: '30%', pointerEvents: 'none' }}>
        <img src={el.src} alt="" />
      </div>
      <div className="am-grid-text">{el.title}</div>
    </div>
  )
}

export default connect(({ zntj, loading }) => ({
  bgs: zntj.bgs,
  grids: zntj.grids,
  onClick: zntj.onGridItemClick,
}))(class App extends Component {
  componentDidMount() {
    let id = document.location.hash;
    if (id.indexOf('userid') < 0) Toast.fail("您未登入系统，无法正常操作！", 0)
  }
  render() {
    let { bgs = [], grids = [], onClick = () => { } } = this.props;
    let lg = grids.length - 1;
    return (
      <GridFill style={{ background: 'white' }} header={
        <Carousel
          autoplay infinite
          autoplayInterval={5000}
          selectedIndex={1}
          beforeChange={(from, to) => { }}
          afterChange={index => { }}
        >
          {bgs.map((img, idx) => (
            <a key={idx} href="return false;" style={{ display: 'inline-block', width: '100%' }}>
              <img src={img}
                alt="" style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </a>
          ))}
        </Carousel>
      } >
        <div>
          {
            grids.map((obj, idx) => {
              return (
                <div key={idx}>
                  <div style={{ padding: '15px 8px 0px 16px', fontWeight: 600 }}>{obj.name}</div>
                  <Grid data={obj.items} onClick={onClick} hasLine={false} renderItem={renderItem} />
                  <div style={idx < lg ? { width: '90%', margin: '1px auto', borderBottom: "1px solid #e8e8e8" } : {}} />
                </div>
              );
            })
          }
        </div>
      </GridFill>
    );
  }
});
