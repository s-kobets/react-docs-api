import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Content from './content';

const Api = ({ docs }) => {
  return (
    <table
      border="1"
      width="640"
      cellSpacing="0"
      style={{ textAlign: 'center', margin: '0 auto' }}
    >
      <caption>
        <strong>{docs.displayName}</strong>
      </caption>
      <thead>
        <tr>
          <th>Name prop</th>
          <th>Description prop</th>
          <th>Type prop</th>
          <th>Value prop</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(docs.props).map((name, index) => {
          const data = docs.props[name];
          return (
            <tr key={index}>
              <td>{name}</td>
              <td>{data.description}</td>
              <td>{data.type.name}</td>
              <td>{data.defaultValue && data.defaultValue.value}</td>
              <td>{data.required.toString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const App = () => (
  <div>
    <Api docs={Content.__docgenInfo} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
