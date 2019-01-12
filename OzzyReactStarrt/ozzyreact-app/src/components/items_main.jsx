import React, { Component } from "react";
import TodoItem from "./todo_item";
import todosData from "../item_data";

class ItemsMain extends Component {
  state = {
    items: todosData
  };

  get_items(items) {
    return items.map(item => {
      return (
        <TodoItem key={item.id} onChange={this.handleChange} item={item} />
      );
    });
  }
  render() {
    return <React.Fragment>{this.get_items(this.state.items)}</React.Fragment>;
  }

  handleChange = item => {
    /*     console.log("oncChange for checkboxes work now");
    const items = [...this.state.items];
    const idx = items.indexOf(item);
    items[idx] = { ...item };
    console.log("checkbox is " + items[idx].completed + " " + idx);
    items[idx].completed = !item.completed;
    console.log("new value " + items[idx].completed);
    this.setState({ items: items }); */

    /* Much more easy to use the prevstate varibale */
    this.setState(prevState => {
      const new_items = prevState.items.map(itm => {
        if (itm.id === item.id) {
          itm.completed = !itm.completed;
        }
        return itm;
      });
      return new_items;
    });
  };
}

export default ItemsMain;
