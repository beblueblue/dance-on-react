import React, { Component } from "react";
import { StaticRouter as Router, Route } from "react-router-dom";

// 服务端渲染
// 
// import express from "express";
// import ReactDOMServer from "react-dom/server";
//
// const app = express()
//
// app.get('*', (req, res) => {
//   let staticContext = {}
//
//   let html = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url} context={staticContext}>
//       <App /> (includes the RouteStatus component below e.g. for 404 errors)
//     </StaticRouter>
//   );
//
//   res.status(staticContext.statusCode || 200).send(html);
// });
//
// app.listen(process.env.PORT || 3000);

export default class StaticRoute extends React.Component {
  staticContext = {};

  render() {
    return (
      <Router location="/foo" context={this.staticContext}>
        <div>
          <RouteStatus statusCode={404}>
            <p>Route with statusCode 404</p>
            <PrintContext staticContext={this.staticContext} />
          </RouteStatus>
        </div>
      </Router>
    );
  }
}

function PrintContext(props) {
  return <p>Static context: {JSON.stringify(props.staticContext)}</p>;
}

function RouteStatus(props) {
  return (
    <Route 
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.statusCode = props.statusCode;
        }

        return <div>{props.children}</div>;
      }}
    />
  )
}



