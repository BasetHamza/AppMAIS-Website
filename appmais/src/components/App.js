import React, { Component, Fragment } from 'react'
import { BrowserRouter as Navigate, Route, Router, Routes } from 'react-router-dom'

import NavigationBar from './NavigationBar'
import Footer from './Footer/Footer'
import HomePage from '../pages/HomePage'
import BeeStream from "../pages/BeeStream/LiveStream"
import Dashboard from '../pages/Dashboard'
import Publications from '../pages/Research/Publications'
import Archive from '../pages/BeeStream/Archive'
import Overview from '../pages/Research/Overview'
import Note from '../pages/Note'

class App extends Component {

    render () {
        return (
            <div>
                <NavigationBar />
                    <Routes>
                        <Route path='/' element = {<HomePage />}/>

                        <Route path='/research/overview' element = {<Overview />}/>
                        <Route path='/research/pubs' element = {<Publications />}/>

                        <Route path='/beestream/live' element = {<BeeStream />}/>
                        <Route path='/beestream/archive' element = {<Archive />}/>

                        <Route path='/dashboard' element = {<Dashboard />}/>

                        <Route path='/note' element = {<Note />}/>
                        
                    </Routes>
                <Footer />
            </div>
        )
    }
}

export default App