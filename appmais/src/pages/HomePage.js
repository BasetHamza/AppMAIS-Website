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
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
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