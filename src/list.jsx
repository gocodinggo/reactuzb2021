import React, { Component } from "react";

export default class List extends Component {
  state = {
    // tags: ["tag1", "tag2", "tag3", "tag4"],
    tags: [],
  };

  render() {
    return (
      <ul>
        {this.state.tags.length === 0 ? (
          <h2>Taglar yoq.</h2>
        ) : (
          this.state.tags.map((tag) => <li key={tag}>{tag}</li>)
        )}
      </ul>
    );
  }
}
