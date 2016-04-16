/*
 * Application Entry
 * mb1 : mui-0.15.0-beta-1
 */
var React = require ('react');
// react-router
var Router = require('react-router').Router;
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var browserHistory = require('react-router').browserHistory;
// react material-ui
//var AppBar = require('material-ui/AppBar') ;// this way throws Error !
import AppBar from 'material-ui/AppBar';// changes for material-ui 0.15.0-beta-1
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
// changes for material-ui 0.15.0-beta-1
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Component declaration
var AppControllerView = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  // changes for material-ui 0.15.0-beta-1
  childContextTypes:{
    muiTheme: React.PropTypes.object.isRequired,
  },
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  },
  // changes for material-ui 0.15.0-beta-1

  render: function(){
    var that = this;
    return(
      <div>
        <div>Application View</div>
        <RaisedButton label="Secondary" secondary={true} />
        <FlatButton label="FlatButton" />
        <RaisedButton label="Primary" primary={true} />
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        { /* renders the children */ this.props.children }
      </div>
    );
  },
});
module.exports = AppControllerView;
