import React, { components } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends components {
  state = {
    lists: [
      {name:'tom', age: 19, school: 'school1'},
      {name:'lily', age: 20, school: 'school2'},
    ]
  }
  handleAddInfo = () => {
    const lists = this.state.lists.slice(0);
    lists.push({name:'linniee', age: 21, school: 'school3'})
    this.setState({
      lists
    })

  }
  render() {
    const { lists } = this.state;
    return(
      <ul>
        <button onClick={this.handleAddInfo}>添加一条数据</button>
        {
          lists.map((list, i) => {
            return (
              <li key={i}>
                name:{list.name}
                age:{list.age}
                school:{list.school}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default App;
