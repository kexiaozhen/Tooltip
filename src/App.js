import React, { Component } from 'react';
import logo from './logo.svg';
import Tooltip from './components/tooltip';
import './App.less';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          tooltip组件编写
        </p>
       
        <div className="tooltip-test">
          <div className="tooltip-test-area">
            <Tooltip overlay="我是鼠标滑过出现，鼠标移出消失的提示框" pos="top">
              <div className="test-1">提示框在正上方显示，鼠标滑过我试试吧！</div>
            </Tooltip>
          </div>
          
          <div className="tooltip-test-area">
            <Tooltip delay={3} overlay="我是鼠标滑过出现，鼠标移出后定时3s消失的提示框" pos="bottom">
              <div className="test-1">提示框在正下方显示，鼠标滑过我试试吧！</div>
            </Tooltip>
          </div>
          
          <div className="tooltip-test-area">
            <Tooltip trigger="click" overlay="我是鼠标点击后出现，出现后不消失，再次点击消失" pos="right">
              <div className="test-1">提示框在正右方显示，鼠标<i>点击</i> 我试试吧！</div>
            </Tooltip>
          </div>

          <div className="tooltip-test-area">
            <Tooltip trigger="click" autoDisappear overlay="我是鼠标点击后出现，1s后自动消失" pos="left">
              <div className="test-1">提示框在正左方显示，鼠标<i>点击</i> 我试试吧！</div>
            </Tooltip>
          </div>
        </div>

        <div className="tooltip-test top30">
          <div className="tooltip-test-area">
            <Tooltip trigger="click" className="change-color" overlay="我可以自定义弹窗样式哦" pos="topLeft">
              <div className="test-1">提示框在左上方显示，鼠标滑过我试试吧！</div>
            </Tooltip>
          </div>

          <div className="tooltip-test-area">
            <Tooltip overlay="当窗口足够大时，我是单行；当位置不够时，我是多行展示" pos="bottomLeft">
              <div className="test-1">提示框在左下方显示，鼠标滑过我试试吧！</div>
            </Tooltip>
          </div>

          <div className="tooltip-test-area">
            <Tooltip overlay="窗口变化时，我的位置随着他改变" pos="topRight">
              <div className="test-1">提示框在右上方显示，鼠标滑过我试试吧！</div>
            </Tooltip>
          </div>

          <div className="tooltip-test-area">
            <Tooltip overlay="新功能API开发中" pos="bottomRight">
              <div className="test-1">提示框在右下方显示，鼠标滑过我试试吧！</div>
            </Tooltip>
          </div>
         
        </div> 
       
      </div>
    );
  }
}

export default App;
