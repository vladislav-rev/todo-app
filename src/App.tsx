import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TodosPage } from "./pages/TodosPage";
import { AboutPage } from "./pages/AboutPage";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={TodosPage} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
