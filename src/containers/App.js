import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { test } from '../actions/actions';
import '../styles/app.scss'

class AppContainer extends React.Component {
  render () {
    return (
      <div>
        It is working!
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      dispatch(test())
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)

export default App;
