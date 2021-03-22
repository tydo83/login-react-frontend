import React, { Component } from 'react'
import MainRouter from './MainRouter'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode'

export class App extends Component {
  state = {
    user: null,
  }

  componentDidMount() {
    let getJWToken = localStorage.getItem('jwtToken')
    if (getJWToken) {
      const currentTime = Date.now() / 1000;
      let decodedJWToken = jwtDecode(getJWToken)

      if (decodedJWToken.exp < currentTime) {
        this.handleUserLogout();
      } else {
        this.handleUserLogin(decodedJWToken)
      }
    }
  }

  handleUserLogin = (user) => {
    this.setState({
      user: {
        email: user.email,
      }
    })
  }

  handleUserLogout = () => {
    localStorage.removeItem('jwtToken')
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <ToastContainer />
        <MainRouter
          user={this.state.user}
          handleUserLogin={this.state.handleUserLogin}
          handleUserLogout={this.state.handleUserLogout}
        />
      </>
    )
  }
}

export default App;