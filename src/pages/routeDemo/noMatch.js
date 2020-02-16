import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from 'react-router-dom';

export default function NoMatch() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/old-match">Old Match, to be redirected</Link>
          </li>
          <li>
            <Link to="/will-match">Will Match</Link>
          </li>
          <li>
            <Link to="/will-not-match">Will Not Match</Link>
          </li>
          <li>
            <Link to="/will-match/not/match">Also Will Not Match</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact children={<Home />} />
          <Route path="/old-match" children={<Redirect to="/will-match" />} />
          <Route exact path="/will-match">
            <WillMatch />
          </Route>
          <Route path="*">
            <NoToBeMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h3>Home</h3>;
}

function WillMatch() {
  return <h3>Matched!</h3>;
}

function NoToBeMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}