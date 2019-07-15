import React, { Component } from 'react';
import propTypes from 'prop-types'
class Context15 extends Component {
  // static
  state = { 
    theme:'red'
   }
   //后代组件从这里拿信息
  getChildContext() {
    return {
      theme: this.state.theme
    }
  }
  render() { 
    const msg = ['str1','str2','str3']
    return ( 
      <div>
        {
          msg.map((item, i) => {
            return (
              <Message key={i} text={item}/>
            )
          })
        }
      </div>
     );
  }
}

Context15.childContextType = {
  theme: propTypes.string

}
class Message extends Components {
  render() {
    const { text } = this.props;
    return (
      <li>
        {text}
        <MyButton/>
      </li>
    )
  }
}

class MyButton extends Components {
  render() {
    return(
      <button>delete</button>
    )
  }
}
export default Context15;