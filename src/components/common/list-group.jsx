import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { items, onSelectItem, selectedItem } = this.props;
    return (
      <ul className='list-group'>
        {items.map((item) => {
          const current = selectedItem._id === item._id;
          return (
            <li
              key={item._id}
              className={`list-group-item ${current && "active"}`}
              onClick={() => onSelectItem(item)}>
              {item.name}
              {current && <span>👍🏻</span>}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListGroup;
