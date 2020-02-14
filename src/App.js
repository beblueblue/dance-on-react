import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Topics(){
  let parms = useRouteMatch();
  let {path, url} = parms;

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/about`}>About</Link>
        </li>
        <li>
          <Link to={`${url}/dashboard`}>Dashboard</Link>
        </li>
        <li>
          <Link to={`${url}/render`}>Render</Link> 
        </li>
      </ul>

      <Route exact path={path}>
        <div>exact path</div>
      </Route>
      <Route path={`${path}/about`}>
        <About />
      </Route>
      <Route path={`${path}/dashboard`}>
        <Dashboard />
      </Route>
      <Route path={`${path}/render`} render={(routeProps) => <div>render {console.log(routeProps)}</div>}>
      </Route>
    </div>
  )
}

function Home() {
  let { id } = useParams();
  let location = useLocation();
  return (
    <div>
      <h2>Home {id} {location.pathname}</h2>
    </div>
  );
}

function About() {
  let { slug } = useParams();
  return (
    <div>
      <h2>About {slug}</h2>
    </div>
  );
}

function Dashboard() {
  let { id } = useParams();
  
  return (
    <div>
      <h2>Dashboard {id}</h2>
    </div>
  );
}