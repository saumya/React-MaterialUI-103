/*
 * Application Entry
 */
(function(){
  // react
  var React = require('react');
  var ReactDOM = require('react-dom');
  // router
  var Router = require('react-router').Router;
  var Route = require('react-router').Route;
  var IndexRoute = require('react-router').IndexRoute;
  var hashHistory = require('react-router').hashHistory;
  // materia-ui
  // ref : https://www.npmjs.com/package/react-tap-event-plugin
  var injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  // Application

  // routes
  routes = (
    <Route path="/" component={AppControllerView}>
      <IndexRoute component={BootControllerView} />
      <Route path="home" component={HomeControllerView} />
      <Route path="see" component={SeeAllControllerView} />
      <Route path="add" component={AddNewControllerView} />
    </Route>
  );

  var App = ReactDOM.render(<div>React!</div>,document.getElementById('react-app'));
})();
