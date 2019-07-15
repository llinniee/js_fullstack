import React from 'react'
import Header from './Header.js'
import Search from './Search.js'
 
class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header sideName="Beer me!"/>
        <Search />
        {/* <Results /> */}
      </div>
    )
  }
}
export default Main;