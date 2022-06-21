import React, { Component } from 'react'

import IframeResizer from 'iframe-resizer-react'

class Archive extends Component {
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

export default Archive