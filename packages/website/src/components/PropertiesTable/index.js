import React, { PropTypes } from 'react'

const PropertiesTable = ({ props }) => {
  return (
    <table className="component-properties-table table table-fixed">
      <thead>
        <tr>
          <th width="15%">Property</th>
          <th width="15%">Type</th>
          <th width="60%">Description</th>
          <th width="10%" className="text-center">Required</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(props).map((prop) => {
            return (
              <tr key={prop}>
                <td>{prop}</td>
                <td>
                  {props[prop].type.name}
                  {props[prop].type.name === 'arrayOf' && ` ${props[prop].type.value.name}`}
                </td>
                <td>{props[prop].description}</td>
                <td className="text-center">{props[prop].required && 'True'}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

PropertiesTable.propTypes = {
  props: PropTypes.object.isRequired
};

export default PropertiesTable;
