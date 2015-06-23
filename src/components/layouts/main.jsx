"use strict";
var React = require("react"),
    Header = require("../header.jsx"),
    TodoList = require("../todolist.jsx"),
    Footer = require("../footer.jsx");

var MainLayout = React.createClass({
  render: function() {
    var s = this.props.state;
    return (
      <div>
        <Header state={s} />
        <TodoList state={s} />
        <Footer state={s} />
      </div>
    );
  }
})

module.exports = MainLayout;
