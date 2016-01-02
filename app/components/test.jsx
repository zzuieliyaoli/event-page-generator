import React from 'react'

// export default class Hello extends React.Component {
//     render() {
//         return <input type="text" value="hello!" />
//     }
// }


export default class Para extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
        alert('sadasd')
    }

    render() {
        return (
            <p onClick={this.handleClick}>
                You  this. Click to toggle.
            </p>
        )
    }
}
