import React from "react";

import TextField from "@material-ui/core/TextField";

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <TextField
          type="search"
          name="search"
          value={this.props.searchRequest}
          onChange={this.props.onChange}
          label={this.props.placeholder}
          size="small"
          id="outlined-basic"
          variant="outlined"
        />

        {/* <input
          type="search"
          name="search"
          value={this.props.searchRequest}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        ></input> */}
      </form>
    );
  }
}

export default SearchBar;
