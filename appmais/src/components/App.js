import React, { Component, Fragment } from 'react'
import { BrowserRouter as Navigate, Route, Router, Routes } from 'react-router-dom'

import NavigationBar from './NavigationBar'
import Footer from './Footer'
import HomePage from '../pages/HomePage'
import BeeLive from '../pages/BeeLive'

class App extends Component {
    
    render () {

        return (
                <div>
                    <NavigationBar />
                    {/* <HomePage/> */}
                    <BeeLive />
                    {/* <Router>
                        <Routes>
                            <Route
                                exact
                                path='/'
                                name="Home Page"
                                component={HomePage}
                            />
                        </Routes>
                    </Router> */}
                    <Footer />
                </div>
        )
    }
}

export default App