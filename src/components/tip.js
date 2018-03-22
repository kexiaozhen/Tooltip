import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './tip.less';

let tooltipDom = null;

class Tip extends Component {

  componentDidMount() {
    tooltipDom = ReactDOM.findDOMNode(this.refs.tooltipDom);
  }

  shouldComponentUpdate({ visible }){
    return !!(this.props.visible || visible)
  }

  render() {
    const { visible, className, overlay, style, pos } = this.props;

    
    let wrapStyle = {};
    wrapStyle.display = visible ? 'block' : 'none';
   

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

export { 
  tooltipDom,
};

export default Tip;
