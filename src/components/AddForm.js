import React from "react";

import TextField from "@material-ui/core/TextField";

class AddForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <TextField
            name="name"
            value={this.props.values.name}
            onChange={this.props.onChange}
            label={this.props.placeholder}
            id="outlined-basic"
            size="small"
            variant="outlined"
          />
          {/* <input
            name="name"
            placeholder={this.props.placeholder}
            value={this.props.values.name}
            onChange={this.props.onChange}
          ></input> */}
        </form>
      </div>
    );
  }
}

export default AddForm;
