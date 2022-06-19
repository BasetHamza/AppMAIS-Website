import React, { Component, PropTypes } from 'react'

import { Card, Row, Button } from 'react-bootstrap'
import IframeResizer from 'iframe-resizer-react'

class BeeStream extends Component {
    render() {
        return (
            <IframeResizer
                log
                heightCalculationMethod="bodyScroll"
                src="http://appmais.cs.appstate.edu:8081/dashboard/56b56840-e108-11ec-a4b2-f50e8dc46689?publicId=de49f250-ea30-11eb-a587-63f1ebdeaad7"
                style={{ width: '1px', minWidth: '100%', height: "650px"}}
            />
        )
    }
}

export default BeeStream