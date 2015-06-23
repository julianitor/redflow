var _ = require("mori"),
    React = require("react"),
    atom = require("./lib/atom_state"),
    router = require("./routes"),
    initialState = require("./config/initial_state"),
    RootComponent = require("./components/root.jsx"),
    TodoStore = require("./stores/todos");


window.onload = function() {
  // initialize initial state on atom
  atom.silentSwap(_.toClj(initialState));
  /** UNCOMMENT FOR DEBUGGING **/
   window.atom = atom;
   window._ = _;
  /** REMOVE ABOVE LINES IN PRODUCTION!!! **/

  //Start routing

  router.start();

  React.render(<RootComponent/>, document.getElementById("todoapp"));

  //just for debugging, add 1000 random todo items :)
  //we're not using an Action because this is an internal hack
  //TodoStore.addRandomItems();
};
