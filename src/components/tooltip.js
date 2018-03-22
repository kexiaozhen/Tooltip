import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Tip, { tooltipDom } from './tip';
import Place from './place.js';
/**
 * Tooltip提示
 *
 * @param [pos]: 提示语显示位置，可选bottom、top、right、left、bottomRight(默认)、topRight、topLeft、bottomLeft
 * @param [overlay]: 提示语内容
 * @param [delay] 鼠标离开/点击后延时消失，单位s
 * @param [trigger] 仅设置click，hover这两种类型，默认为hover
 * @param [autoDisappear] 默认click出现后不消失,设置自动消失或设置延迟消失
 *
 * 说明:
 *    tip组件为提示语组件。除该组件外的其他组件都写在tooltip.js中，在Tooltip组件下方
 *
 * 示例:
 *
 *     @example
 *     <Tooltip overlay="我是提示文字"><div>我是要展示内容</div></Tooltip>
*/

class Tooltip extends Component {
  render() {
    return (
      <Trigger {...this.props} />
    );
  }
}

Tooltip.propTypes = {
	pos: PropTypes.string,
  className: PropTypes.string,
  trigger: PropTypes.string,
  style: PropTypes.object,
  disappearTime: PropTypes.bool,
  delay: PropTypes.number,
  clickDelay: PropTypes.number,
  overlay: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,

};

Tooltip.defaultProps = {
	delay: 0.1,
	clickDelay: 1,
	pos: 'bottomLeft',
	trigger: 'hover',
	autoDisappear: false, // 默认click出现后不消失
	overlay:'我是提示文字',
}

export default Tooltip;



// Trigger组件的实现
class Trigger extends Component {
  constructor(props) {
		super(props);
		this.visible = false;
		this.flag = true;

	}

  componentDidMount() {
		this.domName = ReactDOM.findDOMNode(this.refs.tooltipElement); // 该dom节点
     
    // 监听窗口变化，当窗口变化时，需要重新设置提示框的位置
    // window.addEventListener('resize', this.onWindowResize);
  }

  // onWindowResize = () => {
  // 	console.log(22222222222);
  // 	this.placement(this.domName, tooltipDom);
  // }

  // componentWillUnmount() {
  // 	window.removeEventListener('resize', this.onWindowResize);
  // }

  handleMouseEnter = (e) => {
    e.stopPropagation();
		e.preventDefault();
	  this.visible = true;

		this.createElement();
		if (!this.initPlacement) { // 只需要初始时需要得到位置
			this.placement(this.domName, tooltipDom);
		}
  }

  handleMouseLeave = (e) => {
		e.stopPropagation();
		e.preventDefault();
		const that = this;
		const { delay } = that.props;
    that.visible = false;

    setTimeout(function(){
			that.createElement();
		}, delay * 1000);
  }
  
  handleClick = (e) => { // 当提示框出现时，再次点击消失，由flag标记, true表示点击出现
  	const that = this;
  	const { autoDisappear, clickDelay } = that.props;
  	if (that.flag) {
	    that.flag = false;
	    that.visible = true;
	    that.createElement();

			if (!that.initPlacement) { // 只需要初始时需要得到位置
				that.placement(that.domName, tooltipDom);
			}
			if (autoDisappear) {
		    setTimeout(function() {
		    	that.handleClickDisappear()
		    }, clickDelay * 1000);
        that.flag = true;
			}
		}else {
			that.handleClickDisappear();
			that.flag = true;
		}
  }

  handleClickDisappear = () => { // click事件消失
  	this.visible = false;
  	this.createElement();
  }

  
// 创建tooltip节点
  createElement() {
  	const { ...restProps } = this.props;
		if (!this.wrap) {
			this.wrap = document.createElement('div');
			// this.wrap.id = 'onlyOneElement';
			document.body.appendChild(this.wrap);
		}
 		const tip = (
			<Tip {...{ visible: this.visible, ...restProps }} />
		);
		
		ReactDOM.render(tip, this.wrap);
	}


	placement = (domName, tooltipDom) => { // 设置位置，创建了Place的类
		const { pos } = this.props;
    new Place({domName, tooltipDom, pos});
		this.initPlacement = true;
	}

	// 删除tooltip节点
	// deleteElement() {
	// 	const dom = document.getElementById('onlyOneElement');
	// 	document.body.removeChild(dom);
	// }


  render() {
		const { children } = this.props;
    let obj = {
    	onMouseEnter: this.handleMouseEnter,
			onMouseLeave: this.handleMouseLeave,
		};
    if (this.props.trigger === 'click') {
      obj = {
      	onClick: this.handleClick,
      };
		}
    return (
      React.cloneElement(children,{
      	ref: 'tooltipElement',
      	...obj,
      })
    );
  }
}
