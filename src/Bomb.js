import React from 'react';

export default class Bomb extends React.Component {

    props = this.props

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        return (
            <div>
                {this.state.secondsLeft > 0
                    ? `${this.state.secondsLeft} seconds left before I go boom!`
                    : "Boom!"
                }
            </div>
        )
    }
}
