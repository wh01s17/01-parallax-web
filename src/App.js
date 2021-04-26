import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { NavBar } from "./components/NavBar";
import { Work } from "./components/Work";

function App() {
  return (
    <Router>
      <Route path="/" >
        <Banner />
        <NavBar />
        <About />
        <Work />
        <Contact />
      </ Route>
    </Router>
  );
}

export default App;
