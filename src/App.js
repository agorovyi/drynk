import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Listview from './components/Listview';

class App extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = e => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    const { searchTerm } = this.state;
    const { data } = this.props;

    return (
      <div className="App">
        <Header handleSearchTermChange={this.handleSearchTermChange} />
        <Listview data={data} searchTerm={searchTerm} />
      </div>
    );
  }
}

export default App;
