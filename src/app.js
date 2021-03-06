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
  //var injectTapEventPlugin = require("react-tap-event-plugin");
  //injectTapEventPlugin();


  // Application
  var AppControllerView = require('./component/AppControllerView.react');
  var Home = require('./component/Home.react');
  //var HomeControllerView = require('./component/controllerViewHome.react');
  //var SeeAllControllerView = require('./component/controllerViewSeeAll.react');
  //var AddNewControllerView = require('./component/controllerViewAddNew.react');

  // routes
  var routes = (
    <Route path="/" component={AppControllerView}>
      <IndexRoute component={Home} />
    </Route>
  );

  var App = ReactDOM.render(<Router routes={routes} history={hashHistory} />,document.getElementById('react-app'));
})();
