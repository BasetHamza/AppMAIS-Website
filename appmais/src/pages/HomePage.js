import React, { Component } from 'react'

import { Card, Row, Button } from 'react-bootstrap'

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <Row className="justify-content-md-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Row>
                </div>
            </div>
        )
    }
}

export default HomePage