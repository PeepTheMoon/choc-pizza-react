import React, { Component } from 'react'

export default class ChocolatePizza extends Component {
    render() {
        return (
            <div className="pizzaImage">
                <div> 
                <img alt="chocolatepizza" src={this.props.image}></img>
                </div>
                
            </div>
        )
    }
}
