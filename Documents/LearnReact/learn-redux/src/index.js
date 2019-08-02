import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { connect } from "react-redux";

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="First Name" />
        </div>
        <div>
          <input type="text" placeholder="Second Name" />
        </div>
        <div />
      </div>
    );
  }
}

ReactDOM.render(<MainComponent />, document.getElementById("root"));
