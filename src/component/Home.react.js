/*
 * Home View Component
 *
 */
var React = require ('react');
import RaisedButton from 'material-ui/RaisedButton';
// var AppBar = require('material-ui/AppBar')['default'] ;
//
var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  render: function(){
    var that = this;
    const style = {
      margin: 12,
    };
    return(
      <div>Home
        <RaisedButton label="Primary" primary={true} style={style} />
      </div>
    );
  },
});
module.exports = Home;
