import React, { Component, Fragment } from 'react'
import { BrowserRouter as Navigate, Route, Router, Routes } from 'react-router-dom'

import NavigationBar from './NavigationBar'
import Footer from './Footer/Footer'
import HomePage from '../pages/HomePage'
import BeeStream from "../pages/BeeStream/LiveStream"
import Dashboard from '../pages/Dashboard'
import Publications from '../pages/Research/Publications'

class App extends Component {

    render () {
        return (
            <div>
                <NavigationBar />
                    <Routes>
                        <Route path='/' element = {<HomePage />}/>
                        <Route path='/beestream' element = {<BeeStream />}/>
                        <Route path='/dashboard' element = {<Dashboard />}/>
                        <Route path='/research/pubs' element = {<Publications />}/>
                        
                    </Routes>
                <Footer />
            </div>
        )
    }
}

export default App