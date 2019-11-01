var React = require('react');

var createReactClass = require('create-react-class');

var Component = createReactClass({
  displayName: 'Component',
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

class AnotherComponent extends React.Component {
  onClearSearchField = () => {};

  closeAndCall = (fn, event) => {
    this.onClearSearchField();
  };

  render() {
    <div>type safety</div>;
  }
}

var Component = createReactClass({
  displayName: 'Component',
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
