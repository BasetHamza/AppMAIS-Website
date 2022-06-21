import React, { Component } from 'react'
// import IframeResizer from 'iframe-resizer-react'

import { Row, Container, Button} from 'react-bootstrap'


class Dashboard extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         iFrameHeight: '0px'
    //     }
    // }


    render() {
        return (

            // The height needs to be fixed to be adaptive and responsive.
 
            // <div dangerouslySetInnerHTML={{ __html: "<iframe ref=\"iframe\" scrolling=\"no\" frameBorder=\"0\""
            //     + " height={this.state.iFrameHeight}  width=\"100%\""
            //     + " style={{maxWidth:640, width:'100%', height:this.state.iFrameHeight, overflow:'visible'}} "
            //     + " onLoad={() => {const obj = ReactDOM.findDOMNode(this); this.setState({iFrameHeight:  obj.contentWindow.document.body.scrollHeight + 'px'});}}"
            //     + " src='http://appmais.cs.appstate.edu:8081/dashboard/56b56840-e108-11ec-a4b2-f50e8dc46689?publicId=de49f250-ea30-11eb-a587-63f1ebdeaad7'/>"
            // }} />
            
            // <div dangerouslySetInnerHTML={{ __html: "<iframe ref=\"iframe\" scrolling=\"no\" frameBorder=\"0\""
            //     + " height=\"700px\"  width=\"100%\""
            //     + " style={{maxWidth:640, width:'100%', height:this.state.iFrameHeight, overflow:'visible'}} "
            //     + " src='http://appmais.cs.appstate.edu:8081/dashboard/56b56840-e108-11ec-a4b2-f50e8dc46689?publicId=de49f250-ea30-11eb-a587-63f1ebdeaad7'/>"
            // }} />

            // <IframeResizer
            //     log
            //     heightCalculationMethod="bodyScroll"
            //     src="http://appmais.cs.appstate.edu:8081/dashboard/56b56840-e108-11ec-a4b2-f50e8dc46689?publicId=de49f250-ea30-11eb-a587-63f1ebdeaad7"
            //     style={{ width: '1px', minWidth: '100%', height: "650px"}}
            // />

            <div className="homepage blank-page">
                <Container className='text-light'>
                    <Row>
                        <h1 class="display-1">AppMAIS</h1>
                    </Row>
                    <Row className='text-center mt-5'>
                        <h3 class="display-3">Click the following link to view the dashboard</h3>
                    </Row>
                    <Row className="mt-5">
                        <div className=" d-flex justify-content-center">
                        <Button variant="dark" size="lg" active>
                            <a href='http://appmais.cs.appstate.edu:8081/dashboard/56b56840-e108-11ec-a4b2-f50e8dc46689?publicId=de49f250-ea30-11eb-a587-63f1ebdeaad7'
                            target='_blank'
                            rel="noreferrer">
                                View Live Dashboard</a>
                        </Button>{' '}
                        </div>
                    </Row> 
                </Container>
            </div>

        )
    }
}

export default Dashboard