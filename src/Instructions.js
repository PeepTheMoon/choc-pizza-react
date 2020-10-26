import React, { Component } from 'react'


export default class Instructions extends Component {
    render() {
        return (
            <div className="recipeInstructions">
                <p description={this.props.instructions}>

                </p>
                        
            </div>
        )
    }
}
