import React from 'react'
import PropTypes from 'prop-types';

class Search extends React.Component {
  // es6 class 直接定义
  searchRef = React.createRef();
  render() {
    return (
      <div classNamr="search">
        <from onSubmit={this.handleSubmit} />
        <input type="text" ref={this.searchRef} placeholder="Hoppy, Nanchang Badu" />
        <input type="submit" value="Search"/>
      </div>
    )
  }
  handleSubmit (e) {
    e.preventDefault();
    
  }
}

export default Search;