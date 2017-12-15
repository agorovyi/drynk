import React, { Component, Fragment } from 'react';
import Filter from '../icons/Filter';

class Header extends Component {
  state = {
    toggleSearch: false,
  };

  openSearch = () => {
    this.setState(prevState => ({
      toggleSearch: !prevState.toggleSearch,
    }));
  };

  render() {
    return (
      <Fragment>
        <div className="header-container">
          <header>
            <button className="filter" onClick={this.openSearch}>
              <Filter />
            </button>
            <h1>Drynk</h1>
          </header>
        </div>
        <div>
          {this.state.toggleSearch && (
            <div className="search">
              <input
                type="search"
                placeholder="Search"
                value={this.props.searchTerm}
                onChange={this.props.handleSearchTermChange}
              />
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Header;
