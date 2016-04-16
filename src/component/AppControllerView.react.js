/*
 * Application Entry
 *
 */
var React = require ('react');
// react-router
var Router = require('react-router').Router;
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var browserHistory = require('react-router').browserHistory;
// react material-ui
var AppBar = require('material-ui/AppBar') ;
//import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//
var AppControllerView = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  childContextTypes:{
    muiTheme: React.PropTypes.object.isRequired,
  },
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  },

  render: function(){
    var that = this;
    return(
      <div>
        <div>Application View</div>
        <FlatButton label="Default" />
        { /* renders the children */ this.props.children }
      </div>
    );
  },
});
module.exports = AppControllerView;
