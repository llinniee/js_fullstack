import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import TouchableOpacity from './TouchableOpacity';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

const size = 'large';
class App extends Component {
  state = {}
  componentDidMount() {
    //组件挂载在页面上
    this.refs.strRef.innerHTML = 'String ref'
  }
  render() {
    return (
      <div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <br />
          <Button type="primary" size={size}>
            Primary
        </Button>
          <Button size={size}>Normal</Button>
          <Button type="dashed" size={size}>
            Dashed
        </Button>
          <Button type="danger" size={size}>
            Danger
        </Button>
          <Button type="link" size={size}>
            Link
        </Button>
          <br />
          <Button type="primary" shape="circle" icon="download" size={size} />
          <Button type="primary" shape="round" icon="download" size={size}>
            Download
        </Button>
          <Button type="primary" icon="download" size={size}>
            Download
        </Button>
          <br />
          <Button.Group size={size}>
            <Button type="primary">
              <Icon type="left" />
              Backward
          </Button>
            <Button type="primary">
              Forward
            <Icon type="right" />
            </Button>
          </Button.Group>
          <TouchableOpacity>
            确定
            <a href="">确定</a>
          </TouchableOpacity>
          <TouchableOpacity>
            取消
          </TouchableOpacity>
        </div>
        <h1 ref="strRef"></h1>
      </div>
    );
  }
}

export default App;
