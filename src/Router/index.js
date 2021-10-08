import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Contact } from "../Pages";

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  );
}

export default AppRouter;
