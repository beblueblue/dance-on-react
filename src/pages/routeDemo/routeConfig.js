import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus,
        name: 'Bus',
      },
      {
        path: "/tacos/cart",
        component: Cart,
        name: 'Cart',
      }
    ]
  }
];

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  )
}

function RouteWithSubRoutes(route) {
  return (
    <Route 
      path={route.path}
      render={props => (
        <route.component routes={route.routes} />
      )}
    />
  )
}

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}

function Tacos({routes}) {
  return (
    <div>
      <h2>Tacos</h2>

      <ul>
        {routes.map((route, i) => (
          <li key={i}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}