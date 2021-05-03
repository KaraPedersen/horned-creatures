import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
// import creatureData from './creatures';
// import CreatureSearch from './CreatureSearch';
import './App.css';
import request from 'superagent';

// const creatureTypes = [...new Set(creatureData.map(c => c.type))];
const url = 'https://lab-06-heroku1.herokuapp.com/api/cats';
class App extends Component {
  state = {
    creatures: []
  }

  async componentDidMount() {

    const response = await request.get(url);
    this.setState({
      creatures: response.body
    });
    console.log(response.body);
  }

  // handleSearch = ({ titleFilter, typeFilter, sortField }) => {
  //   const nameRegex = new RegExp(titleFilter, 'i');

  //   const searchedData = creatureData
  //     .filter(creatureData => {
  //       return !titleFilter || creatureData.title.match(nameRegex);
  //     })
  //     .filter(creatureData => {
  //       return !typeFilter || creatureData.type === typeFilter;
  //     })
  //     .sort((a, b) => {
  //       if (a[sortField] < b[sortField]) return -1;
  //       if (a[sortField] > b[sortField]) return 1;
  //       return 0;
  //     });

  //   this.setState({ creatures: searchedData });
  // }

  render() {
    const { creatures } = this.state;

    return (
      <div className="App">

        <Header />

        {/* <CreatureSearch types={creatureTypes} onSearch={this.handleSearch} /> */}

        <main>
          <CreatureList creatures={creatures} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
