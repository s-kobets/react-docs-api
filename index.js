import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Content from './content';
// const Content = require('./content');

class Doc extends PureComponent {
  static defaultProps = {
    name: 'stranger'
  };

  static propTypes = {
    name: PropTypes.string
  };
  render() {
    return <div>123</div>;
  }
}

Doc.propTypes = {
  /**
    Label for the button.
  */
  label: PropTypes.string,

  /**
    Triggered when clicked on the button.
  */
  onClick: PropTypes.func
};

console.log(Content.__docgenInfo);

const App = () => (
  <div>
    <Content />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
