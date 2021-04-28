import { Component } from 'react';
import './CreatureSearch.css';

export default class creatureSearch extends Component {
  state = {
    titleFilter: '',
    sortField: '',
    typeFilter: '',
  }

  handleNameChange = ({ target }) => {
    this.setState({ titleFilter: target.value });
  }

  handleNameChange = ({ target }) => {
    this.setState({ titleFilter: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {
    const { titleFilter, sortField, typeFilter } = this.state;

    return (
      <form className="CreatureSearch" onSubmit={this.handleSubmit}>

        <input
          name="titleFilter"
          value={titleFilter}
          onChange={this.handleNameChange}
        />

        <select
          name="typeFilter"
          value={typeFilter}
          onChange={this.handleSearchChange}
        >
          <option value="">All
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