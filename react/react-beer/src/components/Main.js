import React from 'react'
import Header from './Header.js'
import Search from './Search.js'
 
class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      beers: [],
      loading: true
    }
  }

  componentDidMount() {
    const params = this.props
  }
  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer me!"/>
        <Search />
        {/* <Results /> */}
      </div>
    )
  }
}
export default Main;