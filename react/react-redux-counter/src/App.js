import React from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

const mapStateToProps = (state) => {
  //
  return {
    count: state.count,
    films: state.films
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
class Count extends React.Component {
  state = {  }
  handleIn = () => {
  //   store.dispatch({ type: 'INCREMENT'})
  // }
  handleDe = () => {
    // store.dispatch({ type: 'DECREMENT'})
  }
  handleAddFilm = () => {
    // store.dispatch({ 
    //   type: 'ADD_FILM',
    //   film:{ name:'葫芦娃大战哥斯拉' }
    // })
  }
  render() { 
    console.log(this.props);
    const { count, films } = this.props
    return (
      <div>
        count: {count}
        <button onClick={this.handleIn}>+</button>
        <button onClick={this.handleDe}>-</button>
        <button onClick={this.handleAddFilm}>添加电影</button>
        {
          films.map((film,i) => {
            return (
              <li key={i}>{film.name}</li>
            )
          })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Count);
