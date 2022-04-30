import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from "./component/about/About";
import contact from "./component/contact/contact";
import Home from "./component/home/Home";
const routing = (
  <Router>
    <div>
      <div>
        <Link to="/About">About</Link>
      </div>
      <br />
      <div>
        <Link to="/contact">contact</Link>
      </div>
      <br />
      <div>
        <Link to="/Home">Home</Link>
      </div>

      <Route path="/About" component={About} />
      <Route path="/contact" component={contact} />
      <Route path="/Home" component={Home} />
    </div>
  </Router>
);
export default routing;
