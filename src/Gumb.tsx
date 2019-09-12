import React from 'react'
import './Gumb.css'
import './bootstrap.min.css'

interface gumbProps {
    addToRacun: (st: any) => void,
    value: any
}
interface gumbState {}

class Gumb extends React.Component<gumbProps, gumbState> {
    addToRacun = () => {
        this.props.addToRacun(this.props.value)
    }

    render() {
        return(
            <button className="btn" 
                onClick={this.addToRacun}
            >{this.props.value}</button>
        )
    }
}

export default Gumb
