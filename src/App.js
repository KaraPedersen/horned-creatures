import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import Counter from './Counter';
import creatures from './creatures';
import CreatureSearch from './CreatureSearch';
import './App.css';

const creatureTypes = [...new Set(creatureData.map(c => c.type))];

class App extends Component {
  state = {
    creatures: creatureData
  }

  handleSearch = ({ titleFilter, typeFilter, sortField }) => {
    const nameRegex = new RegExp(titleFilter, 'i');

    const searchedData = creatureData
      .filter(creature => {
        return !nameFilter || cat.name.match(nameRegex);
      })
      .filter(cat => {
        return !typeFilter || cat.type === typeFilter;
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });
    this.setState({ creatures: searchedData });
  }
  render() {
    const { creatures } = this.state;

    return (
      <div className="App">

        <Header />

        <Counter />

        <CreatureSearch types={creatureTypes} onSearch={this.handSearch} />

        <main>
          <CreatureList creatures={creatures} />
        </main>

        <Footer />


      </div >
    );
  }

}

export default App;
