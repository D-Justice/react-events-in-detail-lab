import React from 'react'


export default class DelayedButton extends React.Component {
    render() {
        return (
            <div>
                <button onClick={(e) => {setTimeout(() => this.props.onDelayedClick(e), this.props.delay)}}>Delay</button>
            </div>
        )
    }
}