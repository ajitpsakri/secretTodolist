import React, { Component } from "react";

class Todolist extends Component {
  render() {
    return (
      <div className="todolist">
        <div className="header">
          <form onSubmit={this.additem}>
            <input type="text" />
            <button type="submit">Add</button>
            {this.state.task}
          </form>
        </div>
      </div>
    );
  }
}

export default Todolist;
