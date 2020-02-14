import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <OldSchoolMenuLink 
          label="Home"
          to="/"
          activeOnlyWhenExact={true}
        />
        <OldSchoolMenuLink 
          label="About"
          to="/about"
        />

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  // export interface match<Params extends { [K in keyof Params]?: string } = {}> {
  //     params: Params;
  //     isExact: boolean;
  //     path: string;
  //     url: string;
  // }
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  console.log(match)
  return (
    <div className={match ? 'active' : ''}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}