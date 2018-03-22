## This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## start
 cnpm i
 cnpm start


# tooltip
react tooltip component

# Usage

```

import Tooltip from './components/tooltip';

<Tooltip overlay="我是鼠标滑过出现，鼠标移出消失的提示框" pos="top">
  <div className="test-1">提示框在正上方显示，鼠标滑过我试试吧！</div>
</Tooltip>

```

# API
Tooltip props
<table>
    <thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>overlay</td>
          <td>String</td>
          <td>0.1</td>
          <td>提示文字/td>
        </tr>
        <tr>
          <td>pos</td>
          <td>String</td>
          <td>bottomRight</td>
          <td>出现位置</td>
        </tr>
        <tr>
          <td>style</td>
          <td>Object</td>
          <td></td>
          <td>tooltip's style</td>
        </tr>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>tooltip's className</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>String</td>
          <td>'hover'</td>
          <td>包括‘hover’和‘click’</td>
        </tr>
         <tr>
          <td>delay</td>
          <td>Number</td>
          <td>0.1</td>
          <td>鼠标移除后延迟多久消失</td>
        </tr>
        <tr>
          <td>autoDisappear</td>
          <td>Boolean</td>
          <td>false</td>
          <td>点击后是否定时消失</td>
        </tr>
        <tr>
          <td>mouseEnterDelay</td>
          <td>Number</td>
          <td>1</td>
          <td>点击后定时多久消失</td>
        </tr>
    </tbody>
</table>
