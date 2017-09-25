import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import '../../assets/stylesheets/static_pages.scss'

class Chill extends Component {
  render() {
    return (
      <div className='wrapper'>Hello World!!!</div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Chill />,
    document.getElementById('root')
  )
})
