import React, { Component } from 'react'

import { Card, Row, Col, Button, ImgOverlay, Container, Nav, Figure, Image} from 'react-bootstrap'

import Intro from '../components/Homepage/Intro'
import Team from '../components/Homepage/Team'

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <Intro />
                <hr/>
                <Team />
                <hr/>
                
            </div>
        )
    }
}

export default HomePage