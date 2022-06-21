import React, { Component, PropTypes } from 'react'

import { Card, Row, Button } from 'react-bootstrap'
import IframeResizer from 'iframe-resizer-react'

class BeeStream extends Component {
    render() {
        return (
            <IframeResizer
                log
                heightCalculationMethod="bodyScroll"
                src="https://appmais.cs.appstate.edu/stream"
                style={{ width: '1px', minWidth: '100%', height: "650px"}}
            />
        )
    }
}

export default BeeStream