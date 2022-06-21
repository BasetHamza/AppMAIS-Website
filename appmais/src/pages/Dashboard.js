import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'; 

import { Card, Row, Button } from 'react-bootstrap'
import IframeResizer from 'iframe-resizer-react'

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

            <IframeResizer
                log
                heightCalculationMethod="bodyScroll"
                src="http://appmais.cs.appstate.edu:8081/dashboard/56b56840-e108-11ec-a4b2-f50e8dc46689?publicId=de49f250-ea30-11eb-a587-63f1ebdeaad7"
                style={{ width: '1px', minWidth: '100%', height: "650px"}}
            />
        )
    }
}

export default Dashboard