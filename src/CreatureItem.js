import React, { Component } from 'react';
import './CreatureItem.css';

class CreatureItem extends Component {

  render() {
    const creature = this.props.creature;

    return (
      <li className="CreatureItem">
        <h2>{creature.title}</h2>



      </li>
    );
  }
}

export default CreatureItem;