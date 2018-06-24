import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Content extends PureComponent {
  static defaultProps = {
    name: 'stranger'
  };

  static propTypes = {
    /**
      Name for the component.
    */
    name: PropTypes.string
  };
  render() {
    return <div>123</div>;
  }
}

module.exports = Content;
