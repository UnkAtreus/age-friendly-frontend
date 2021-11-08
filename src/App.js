import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Category from "./containers/Category";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/category/:category" component={Category} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
