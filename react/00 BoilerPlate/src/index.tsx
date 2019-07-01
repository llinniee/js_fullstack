import * as React from 'react';//MVVM
import * as ReactDOM from 'react-dom'; //render
import { HelloComponent } from './hello';

// console.log(HelloComponent, '----------------');
ReactDOM.render(
  <HelloComponent />,
  document.getElementById('root')
);
// 根组件的
