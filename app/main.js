import React from 'react'
import ReactDOM from 'react-dom'
// import Hello from './components/test.jsx'
// import Para from './components/test.jsx'

class Para extends React.Component {
    constructor () {
        this.super()
        this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler () {

    }

}

// function main() {
    ReactDOM.render(<Para />, document.getElementById('app'));
// }

// main()
