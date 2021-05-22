import React from "react";
import Home from "./views/Home";
import JobPage from "./views/JobPage";
import NotFound from "./views/NotFound";
import "./styles/App.scss";
import { Provider } from "react-redux";
import generateStore from "./controller/store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const store = generateStore();

  return (
    <Router>
      <div className="app" id="top">
        <Provider store={store}>
          <Switch>
            <Route path="/job/:id" component={JobPage} />
            <Route exact path="/">
              <Redirect to="/1" />
            </Route>
            <Route path="/:page" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
};

export default App;
