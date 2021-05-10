import React from "react";
import Home from "./views/Home";
import JobPage from "./views/JobPage";
import NotFound from "./views/NotFound";
import "./styles/App.scss";
import { Provider } from "react-redux";
import generateStore from "./controller/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const store = generateStore();

  return (
    <Router>
      <div className="app">
        <Provider store={store}>
          <Switch>
            <Route path="/job" component={JobPage} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
};

export default App;
