import React from "react";

class AddProductForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            name="name"
            placeholder="Add product"
            value={this.props.values.name}
            onChange={this.props.onChange}
          ></input>
          {/* <button type="submit">Add</button> */}
        </form>
      </div>
    );
  }
}

export default AddProductForm;
