import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="search"
          name="search"
          value={this.props.searchRequest}
          placeholder="Search markets"
          onChange={this.props.onChange}
        ></input>
      </form>
    );
  }
}

export default SearchBar;
