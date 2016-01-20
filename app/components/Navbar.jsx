import React from 'react'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>app</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return <h3>About</h3>
    }
}

class Inbox extends React.Component {
    render() {
        return (
            <div>
                <h2>InBox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
}

class Message extends React.Component {
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
}

class Dashboard extends React.Component {
    render() {
        return <div>Welcome to the app!</div>
    }
}

class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App}>
                <IndexRoute component={Dashboard} />
                  <Route path="about" component={About} />
                  <Route path="inbox" component={Inbox}>
                    <Route path="/messages/:id" component={Message} />
                    <Redirect from="messages/:id" to="/messages/:id" />
                  </Route>
                </Route>
            </Router>
        )
        
    }
}


export default Navbar