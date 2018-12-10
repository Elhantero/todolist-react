import React, { Component } from "react";

import "./add-item.css";

export default class AddItem extends Component {
  render() {
    const { onItemAdd } = this.props;
    return (
      <div className="add-item">
        <button
          className="btn btn-outline-secondary"
          onClick={() => onItemAdd("aaa")}
        >
          Add item
        </button>
      </div>
    );
  }
}
