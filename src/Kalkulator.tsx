import React from 'react'
import Gumb from './Gumb'
import Racun from './Racun'
import './Kalkulator.css'
import './bootstrap.min.css'

interface kalkProps {}
interface kalkState {
    racun: string,
    hasCalculated: boolean
}

class Kalkulator extends React.Component<kalkProps, kalkState> {
    constructor(props: kalkProps) {
        super(props)
        this.state = {
            racun: "",
            hasCalculated: false
        }
        this.addToRacun.bind(this)
    }

    addToRacun = (st: any) => {
        if (this.state.hasCalculated === true) {
            this.setState({
                racun: "" + st,
                hasCalculated: false
            })
        } else {
            this.setState({
                racun: this.state.racun + st
            })
        }
    }

    calculate = () => {
        if (this.state.hasCalculated === true) {
            return
        }

        let sum: number = 0
        let i: number = 0
        let rac: string = this.state.racun
        while (i < rac.length) {
            let j: number = 1
            while(+rac[i+j] > -1){
                j++
            }
            
            if (i === 0) {
                sum += +rac.substring(i, i+j)
                i += j -1
            } else {
                switch (rac[i]) {
                    case "+": {
                        sum += +rac.substring(i+1, i+j)
                        i += j -1
                        break
                    }
                    case "-": {
                        sum -= +rac.substring(i+1, i+j)
                        i += j -1
                        break
                    }
                }
            }
            i++
        }
        if (rac.length > 0) {
            this.setState({
                racun: `${this.state.racun} = ${sum}`,
                hasCalculated: true
            })
        }
    }

    deleteLast = () => {
        this.setState({
            racun: this.state.racun.slice(0, -1)
        })
    }

    render() {
        return(
            <div className="kalkulator container">
                <div className="row m-5">
                    <div className="col">
                        <table>
                            <tr>
                                <td colSpan={4} className="racun mb-5">
                                    <Racun racun={this.state.racun} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={7} />
                                </td>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={8} /> 
                                </td>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={9} />
                                </td>
                                <td>
                                    <button className="btn" onClick={this.deleteLast}>C</button>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={4} />
                                </td>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={5} />
                                </td>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={6} />
                                </td>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={"-"} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={1} />
                                </td>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={2} />
                                </td>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={3} />
                                </td>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={"+"} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <Gumb addToRacun={this.addToRacun} value={0} />
                                </td>
                                <td colSpan={3}>
                                    <button className="btn smallFont" onClick={this.calculate}>izračunaj</button>
                                </td>
                            </tr>

                            <tr>
                                <td>{this.state.hasCalculated}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Kalkulator