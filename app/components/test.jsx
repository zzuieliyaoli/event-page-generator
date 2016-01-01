import React from 'react'

// export default class Hello extends React.Component {
//     render() {
//         return <input type="text" value="hello!" />
//     }
// }


export default class Para extends React.createClass({
    getInitialState: function () {
        return {liked: false}
    },
    handleClick: function (event) {
        this.setState({liked: !this.state.liked})
    },
    render: function () {
        var test = this.state.liked ? 'like' : 'havent\'t liked'
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        )
    }
})
