import React from "react";

class AddForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            name="name"
            placeholder={this.props.placeholder}
            value={this.props.values.name}
            onChange={this.props.onChange}
          ></input>
          {/* <button type="submit">Add</button> */}
        </form>
      </div>
    );
  }
}

export default AddForm;
