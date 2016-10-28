import React, { PropTypes } from 'react';

const PropertiesTable = ({ props }) =>
  <div className="table-responsive">
    <table className="component-properties-table table table-fixed">
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
          <th>Default value</th>
          <th className="text-center">Required</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(props).map((prop) =>
            <tr key={prop}>
              <td>{prop}</td>
              <td>
                {props[prop].type.name}
                {props[prop].type.name === 'arrayOf' && ` ${props[prop].type.value.name}`}
              </td>
              <td>{props[prop].description}</td>
              <td>{props[prop].defaultValue ? props[prop].defaultValue.value : '' }</td>
              <td className="text-center">{props[prop].required && 'True'}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>;

PropertiesTable.propTypes = {
  props: PropTypes.object.isRequired
};

export default PropertiesTable;
