import { Component } from 'react';
import './CreatureSearch.css';

export default class creatureSearch extends Component {

  render() {
    return (
      <form className="CreatureSearch">
        <input />

        <select>
          <option value="">sort...
          </option>

          <option value="title">by title
          </option>

          <option value="horns">by horns
          </option>

        </select>

        <button>🔎</button>

      </form>
    );
  }

}