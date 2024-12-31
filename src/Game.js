import React from 'react';
import Stats from './Stats';
import Burger from './Burger';
import Booster from './Booster';


class Game extends React.Component {
  constructor(props) {
    super(props);
      this.mouseClicked = this.mouseClicked.bind(this);
  }

  mouseClicked() {
    const clicks = this.props.clicks + 1;
    console.log("Burger clicked! New clicks count:", clicks);
    this.props.setClicks(clicks);
  }

  render() {
    console.log("Rendering Game component...");
    console.log("Props:", this.props);

    return (
      <>
        <div className="header">
          <h1>Burger Clicker</h1>
        </div>
        <div className="content content--justified">
          <Stats count={this.props.clicks} />
          <Burger onClick={this.mouseClicked}/>
          <Booster boost= {1}/>
        </div>
      </>
    );
  }
}

export default Game;