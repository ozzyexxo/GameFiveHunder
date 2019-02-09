import React, { Component } from "react";
import Counters from "./counters";

class CounterMain extends Component {
  /* construcntor is called only once - can set state in this */
  constructor() {
    super();
    console.log("Constructer called");
  }

  state = {
    counters: [{ id: 1, value: 6 }, { id: 2, value: 0 }, { id: 3, value: 6 }]
  };

  componentDidMount() {
    console.log("App mounted" + " products of state = " + this.state.products);

    /* Lets try to add to state over here */
    //const products_f = this.get_products;

    //const items = this.get_items();

    //this.setState({ items: items, products: products_f });
  }

  render() {
    console.log("App has been rendered");
    return (
      <div>
        <React.Fragment>
          <main className="container">
            {" "}
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
            />
          </main>
        </React.Fragment>
      </div>
    );
  }

  handleDelete = counterId => {
    console.log("Event handleer is invoked", counterId);
    /* lets delete by creating a new array and call setstate */
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    /* first clone state first - but remember the objects
     inside the state objects are still refernces and are
      not copied that deep copy is not performed- values are 
      only cloned - so if we modify the objects within the clone
      orginal objects(coutners in this case will get modified)
      directly - so need a deep copy-
      We do all this because we do not want to modify the
      state directly */
    console.log("Called inc");
    const counters = [...this.state.counters];
    const c_idx = counters.indexOf(counter);
    counters[c_idx] = { ...counter };
    counters[c_idx].value++;
    this.setState({ counters: counters });
  };
}

export default CounterMain;
