import React from 'react'


export default class CoordinatesButton extends React.Component {

    findCoords = (e) => {
        return [e.clientX, e.clientY]
    }

    render() {
        return (
            <div>
                <button onClick={(e) => {this.props.onReceiveCoordinates(this.findCoords(e))}}>XXX</button>
            </div>
        )
    }
}