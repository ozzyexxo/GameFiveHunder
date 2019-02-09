import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
/* Get componets to route to */
import NavBar from "./components/navbar";
import CounterMain from "./components/counter_main";
import ProductsMain from "./components/products_main";
import ItemsMain from "./components/items_main";
import Form from "./components/form";
import ADD from "./components/api_data_display";
import PageRR from "./components/sample_page";
import VideoMbed from "./components/videos_api";
import ReduxApi from "./components/redux_api";
import ReduxForm from "./components/redux_form";
import ReduxChatKit from "./components/redux_chatkit";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={PageRR} />
          <Route path={"/counters"} component={CounterMain} />
          <Route path={"/products"} component={ProductsMain} />
          <Route path={"/items"} component={ItemsMain} />
          <Route path={"/form"} component={Form} />
          <Route path={"/apidata"} component={ADD} />
          <Route path={"/videos"} component={VideoMbed} />
          <Route path={"/redux1"} component={ReduxApi} />
          <Route path={"/redux2"} component={ReduxForm} />
          <Route path={"/reduxchat"} component={ReduxChatKit} />
        </Switch>
      </div>
    );
  }
}

export default App;
