import React, { Component } from 'react'
import print from './images/print-icon.png';


export default class RecipeTitle extends Component {
    render() {
        return (
            <div>
                <h1>CHOCOLATE PIZZA</h1>
                <h2>POSTED ON 15 DEC 2013/DESSERTS</h2>
                <img alt="Print Icon" src={print}/> 
                <label>Print</label>
            </div>
        )
    }
}
