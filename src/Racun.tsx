import React from 'react'

interface racunProps {
    racun: string
}
interface racunState {}

class Racun extends React.Component<racunProps, racunState> {
    render() {
        if (this.props.racun) {
            return(
                <code>{this.props.racun}</code>
            )
        } else {
            return(
                <code className="empty">a</code>
            )
        }
    }
}

export default Racun