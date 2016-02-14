import React from 'react'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Event page generator</h1>
                <ul>
                    <li><Link to="/pc">Pc</Link></li>
                    <li><Link to="/mobile">Mobile</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

class Mobile extends React.Component {
    render() {
        return <h3>Mobile</h3>
    }
}

class Pc extends React.Component {
    render() {
        return (
            <div>
                <h2>Pc</h2>
                {this.props.children || "Welcome to your Pc"}
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
                  <Route path="mobile" component={Mobile} />
                  <Route path="pc" component={Pc}>
                    <Route path="/messages/:id" component={Message} />
                    <Redirect from="messages/:id" to="/messages/:id" />
                  </Route>
                </Route>
            </Router>
        )
        
    }
}


export default Navbar