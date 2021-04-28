import { Component } from 'react';
import './CreatureSearch.css';
export default class CreatureSearch extends Component {
  state = {
    titleFilter: '',
    sortField: '',
    typeFilter: ''
  }
  handleNameChange = ({ target }) => {
    this.setState({ titleFilter: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleTypeChange = ({ target }) => {
    this.setState({ typeFilter: target.value });
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
    const { types } = this.props;

    return (
      <form className="CreatureSearch" onSubmit={this.handleSubmit}>

        <input
          name="titleFilter"
          value={titleFilter}
          onChange={this.handleNameChange}
        />
        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSearchChange}
        >
          <option value="">sort...</option>
          <option value="title">by title</option>
          <option value="horns">by horns</option>
        </select>
        <select
          name="typeFilter"
          value={typeFilter}
          onChange={this.handleTypeChange}
        >
          <option value="">All</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <button>🔎</button>

      </form>
    );
  }
}