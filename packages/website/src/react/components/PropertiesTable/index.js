import React, { PropTypes } from 'react';
import cx from 'classnames';
import './index.styl';

const PropertiesTable = ({ props }) => {
  let thereAreIsRequiredProp = false;
  return (
    <div className="component-properties">
      <div className="table-responsive component-properties-table-container">
        <table className="component-properties-table table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props).map((prop) => {
              const requiredProp = props[prop].required;
              if (requiredProp) thereAreIsRequiredProp = true;
              return (
                <tr key={prop}>
                  <td className={cx({ required: requiredProp })}>{prop}</td>
                  <td>
                    {props[prop].type.name}
                    {props[prop].type.name === 'arrayOf' && ` ${props[prop].type.value.name}`}
                  </td>
                  <td>{props[prop].description}</td>
                  <td>
                    {props[prop].defaultValue ? <code>{props[prop].defaultValue.value}</code> : '' }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {thereAreIsRequiredProp && <p className="required-message">Required property</p>}
    </div>
  );
};

PropertiesTable.propTypes = {
  props: PropTypes.object.isRequired
};

export default PropertiesTable;
