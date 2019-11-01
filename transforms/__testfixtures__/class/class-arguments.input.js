var React = require('react');

var Component = React.createClass({
  onClearSearchField() {},
  closeAndCall(fn, event) {
    if (fn) {
      fn.apply(this, Array.prototype.slice.call(arguments, 1));
    }
    this.onClearSearchField();
  },
  render() {
    <div>type safety</div>;
  },
});

var AnotherComponent = React.createClass({
  onClearSearchField() {},
  closeAndCall(fn, event) {
    this.onClearSearchField();
  },
  render() {
    <div>type safety</div>;
  },
});

var Component = React.createClass({
  onClearSearchField() {},
  render() {
    function closeAndCall(fn, event) {
      if (typeof fn === 'function') {
        fn.apply(this, Array.prototype.slice.call(arguments, 1));
      }
      this.onClearSearchField();
    }

    <div onClick={closeAndCall}>type safety</div>;
  },
});
