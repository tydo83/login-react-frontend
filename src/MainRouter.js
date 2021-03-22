import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import SignUp from './component/Signup'
import Login from './component/Login'

const MainRouter = (props) => {
    return (
        <Router>
            <Navbar user={props.user} handleUserLogout={props.handleUserLogout}/>
            <Switch>
                <Route path="/sign-up" component={SignUp} />
                <Route
                    path="/login"
                    render={(routerProps) => (
                        <Login {...routerProps} handleUserLogin={props.handleUserLogin}/>
                    )}
                />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default MainRouter