import React from 'react'
import ReactDOM from 'react-dom'
// import Hello from './components/test.jsx'
// import Para from './components/test.jsx'

class Para extends React.Component {
    constructor () {
        super()
        this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler () {
        this.a = 'asdasd'
    }

}

// function main() {
    ReactDOM.render(<Para />, document.getElementById('app'));
// }

// main()
