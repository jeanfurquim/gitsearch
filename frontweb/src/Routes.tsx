import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import GitSearch from 'pages/GitSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/gitsearch">
        <GitSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;