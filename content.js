import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Content extends PureComponent {
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

Content.propTypes = {
  /**
    Label for the button.
  */
  label: PropTypes.string,

  /**
    Triggered when clicked on the button.
  */
  onClick: PropTypes.func
};

module.exports = Content;
