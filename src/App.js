import React, { Component } from 'react';
import Header from './Header.js';
import RecipeTitle from './RecipeTitle.js';
import ChocolatePizza from './ChocolatePizza.js';
import chocopizza from './images/choco-pizza.png';
import Main from './Main.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RecipeTitle/>
        <ChocolatePizza image={chocopizza} />
        <Main instructions={[
          {
           description: "For the fig swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve.  Halve all of the figs and toss in the saucepan with water and lemon juice.  Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely."
          },
          {
            description: 'Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just lukewarm. Whisk in egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.'
          },
          {
            description: `Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/-10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.`
          },
          ]} />
        {/* <RecipeSection /> */}
        {/* <Footer /> */}

      </div>
    )
  }
}
