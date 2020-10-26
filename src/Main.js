import React, { Component } from 'react'
import Instructions from './Instructions.js';

export default class Main extends Component {
    render() {
        return (
            <div className="mainArticle">
                {
                this.props.instructions.map((paragraphs) => {
                    return <Instructions 
                    description={paragraphs.instructions}
                    />
                })
            }
            </div>
        )
    }
}
