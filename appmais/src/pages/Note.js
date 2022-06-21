import React, { Component } from 'react'

import { Row, Container} from 'react-bootstrap'

class Note extends Component{

    render(){
        return(
                <div className="homepage blank-page">
                <Container className='text-light'>
                    <Row>
                        <h1 class="display-1">AppMAIS</h1>
                    </Row>
                    <Row className='text-center mt-5'>
                        <h3 class="display-3">APPLICATION IS UNDER CONSTRUCTION</h3>
                    </Row>
                    <Row>
                        <h4 class="display-4 text-center mt-5">BEE PATIENT</h4>
                    </Row> 
                </Container>

            </div>
        )
    }
}


export default Note
