import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../Pages";

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default AppRouter;
