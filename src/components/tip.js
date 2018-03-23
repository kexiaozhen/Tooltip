import React, { Component } from 'react';
import './tip.less';


class Tip extends Component {

  shouldComponentUpdate({ visible }){
    return !!(this.props.visible || visible)
  }

  render() {
    const { visible, className, overlay, style, pos } = this.props;
    
    let wrapStyle = {};
    wrapStyle.opacity = visible ? 1 : 0;  // 设置display属性会导致当为none的时候，计算不到他的size
   

    let classCancat = className ? `guagua-tip ${className}` : 'guagua-tip';
    classCancat += ` guagua-tip-${pos}`;    

    return (
      <div className={ classCancat } style={ wrapStyle } ref="tooltipDom">
        <div className="guagua-tip-content" style={ style }>
          {overlay}
        </div>
      </div>
    );
  }
}

export default Tip;
