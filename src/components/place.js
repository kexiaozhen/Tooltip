 
 /* Place类
 *
 * 说明:
 *    传入domName，tooltip的DOM节点以及pos显示位置。
 *    通过offsetTop, offsetLeft获取到节点与窗口的距离。
 *    通过offsetWidth，offsetHeight获取到节点自身的大小。
 *    计算tooltip的l位置

 * 当窗口大小不够时，设置tooltipDom界面的宽度为屏幕宽度的20%，
 *  重新计算tooltip的位置。
 *
*/
export default class Place{
	
	constructor(opts){
		this.domName = opts.domName;
		this.tooltipDom = opts.tooltipDom;
		this.pos = opts.pos;
		this.init();
	}

	init(){
		//触发元素的位置
		this.domNameOffset = this.getDomOffset(this.domName);
		//触发元素的宽高
		this.domNameSize = this.getDomSize(this.domName);
		
		// tooltipDom 元素的宽高
		this.tooltipDomSize = this.getDomSize(this.tooltipDom);
		// console.log(3, this.tooltipDomSize);

		this.tooltipPlace();
	}

	reSuitSize() { 
		const tooltipDom = this.tooltipDom;
		tooltipDom.style.width = '20vw';
		this.tooltipDomSize = this.getDomSize(this.tooltipDom);
		this.tooltipPlace();
	}

	tooltipPlace(){
		let tooltipDom = this.tooltipDom,
		  domNameOffset = this.domNameOffset,
		  domNameSize = this.domNameSize,
		  tooltipDomSize = this.tooltipDomSize,
		  pos = this.pos;
		
		let dis = null;
		let top=0, left=0, right = 0;
				
		switch(pos){ // 设置弹出框的上下高度
			case 'top':
			case 'bottom':
			const tooltipW = tooltipDomSize.width,
			  domW = domNameSize.width;
			
			dis = (domW - tooltipW) / 2;
			left =  domNameOffset.left + dis;
			if(left < 0) {
				this.reSuitSize();
				return;
			} else {
				tooltipDom.style.left = `${left}px`;
				break;
			}

			case 'left':
			case 'right':
			const tooltipH = tooltipDomSize.height,
				  domH = domNameSize.height;
			
			dis = (domH - tooltipH) / 2;
			top =  domNameOffset.top + dis;
			tooltipDom.style.top = `${top}px`;
			break;

			case 'topLeft':
			case 'bottomLeft':
			tooltipDom.style.left = `${domNameOffset.left}px`;
			break;

			case 'topRight':
			case 'bottomRight':
      const w = document.documentElement || document.body,
        pageWidth = w.clientWidth;

			right = pageWidth - (domNameOffset.left + domNameSize.width);
			tooltipDom.style.right = `${right}px`;
			break;

			case 'leftTop':
			case 'rightTop':
			tooltipDom.style.top = `${domNameOffset.top}px`;
			break;

			case 'leftBottom':
			case 'rightBottom':
			top = domNameOffset.top - (tooltipDomSize.height - domNameSize.height);
			tooltipDom.style.top = `${top}px`;
			break;
			default:
			break;

		}

		const _pos = pos.replace(/[A-Z]+/g,'_').split('_')[0];
		
		switch(_pos){ // 设置弹出框的左右高度
			case 'bottom':
			top = domNameOffset.top + domNameSize.height;

			tooltipDom.style.top = `${top}px`;
			break;

			case 'top':
			top = domNameOffset.top - (tooltipDomSize.height);
			tooltipDom.style.top = `${top}px`;
			break;

			case 'right':
			left = domNameOffset.left + domNameSize.width;
			if ( tooltipDomSize.width + left > document.body.clientWidth){
				this.reSuitSize();
				return;
			}
			tooltipDom.style.left = `${left}px`;
			break;

			case 'left':
			left = domNameOffset.left - ( tooltipDomSize.width);
			if (left < 0) {
				this.reSuitSize();
				return;
			}
			tooltipDom.style.left = `${left}px`;
			break;

			default:
			break;
		}

	}

	getDomOffset(dom){
		let ret = {
			top: dom.offsetTop || 0,
			left: dom.offsetLeft || 0,
		}
		return ret;
	}

	getDomSize(dom) {
		let ret = {
			width: dom.offsetWidth || 0,
			height: dom.offsetHeight || 0,
		}
		return ret;
	}

}
