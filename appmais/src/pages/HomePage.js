import React, { Component } from 'react'

import { ReactComponent as MySvgFile } from "../assets/img/svg/bee.svg"

import { Card, Row, Button, ImgOverlay } from 'react-bootstrap'

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <Row className="justify-content-md-center">
                    <Card className="bg-dark text-white">
                    <Card.Img src="bee" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Welcome to AppMAIS</Card.Title>
                            <Card.Text>
                                Appalachian State Multipurpose Apiary Informatics Systems
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </Row>
                </div>
            </div>
        )
    }
}

export default HomePage