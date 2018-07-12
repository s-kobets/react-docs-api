import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Content from './content';

const TrApi = ({ index, name, data }) => (
  <tr key={index}>
    <td>{name}</td>
    <td>{data.description}</td>
    <td>{data.type.name}</td>
    <td>{data.defaultValue && data.defaultValue.value}</td>
    <td>{data.required.toString()}</td>
  </tr>
);

const Table = ({ title, children }) => (
  <table
    border="1"
    width="640"
    cellSpacing="0"
    style={{ textAlign: 'center', margin: '0 auto' }}
  >
    <caption>
      <strong>{title}</strong>
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
    <tbody>{children}</tbody>
  </table>
);

const Api = ({ docs }) => {
  const rendeNewLibrary = () => {
    for (let name in Content.propTypes) {
      const type = Content.propTypes[name];

      // some type definitions can have no getTypeDefinition method
      if (typeof type.getTypeDefinition === 'function') {
        return <TrApi index={0} name={name} data={type.getTypeDefinition()} />;
      }
    }
  };

  return (
    <div>
      <Table
        title={`Component Name: ${docs.displayName} (babel-plugin-react-docgen)
      `}
      >
        {Object.keys(docs.props).map((name, index) => {
          const data = docs.props[name];
          return <TrApi index={index} name={name} data={data} />;
        })}
      </Table>
      <br />
      <Table
        title={`Component Name: - (prop-types-definition)
      `}
      >
        {rendeNewLibrary()}
      </Table>
    </div>
  );
};

const App = () => (
  <div>
    <Api docs={Content.__docgenInfo} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
