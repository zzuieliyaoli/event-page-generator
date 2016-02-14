import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'

class Main extends React.Component {
    render() {
        return (<Navbar />)
    }
}


ReactDOM.render(<Main />, document.getElementById('app'))
