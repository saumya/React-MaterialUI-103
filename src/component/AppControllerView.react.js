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
import mui from 'material-ui';
//var AppBar = require('material-ui/AppBar') ;
import AppBar from 'material-ui/AppBar';

//
var AppControllerView = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    muiTheme: React.PropTypes.object,
  },

  render: function(){
    var that = this;
    return(
      <div>
        <div>Application View</div>
        { /* renders the children */ this.props.children }
      </div>
    );
  },
});
module.exports = AppControllerView;
