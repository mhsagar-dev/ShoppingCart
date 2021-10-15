import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header></Header>
          <Shop></Shop>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
