/*
 * Application Entry
 *
 */
var React = require ('react');

//
var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  render: function(){
    var that = this;
    return(
      <div>Home</div>
    );
  },
});
module.exports = Home;
