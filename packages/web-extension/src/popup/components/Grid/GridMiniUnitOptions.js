import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings';
import Checkbox from 'carbon-components-react/es/components/Checkbox';
import FormGroup from 'carbon-components-react/es/components/FormGroup';
import { setStorage } from '@carbon/devtools-utilities/src/setStorage';
import { getStorage } from '@carbon/devtools-utilities/src/getStorage';
import { defaults } from '../../../globals/defaults';
import { labelMaker } from './labelMaker';

const { prefix } = settings;

function GridMiniUnitOptions({ disabled }) {
  const [toggleMiniUnitGridOptions, setToggleMiniUnitGridOptions] = useState(
    defaults.miniUnit
  );
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    // get storage and set defaults
    const dataKey = 'toggleMiniUnitGridOptions';
    getStorage([dataKey], (dataReceived) => {
      if (dataReceived && dataReceived[dataKey]) {
        setToggleMiniUnitGridOptions(dataReceived[dataKey]);
      }
      setOnLoad(true);
    });
  }, []);

  useEffect(() => {
    // update storage
    if (onLoad) {
      setStorage({ toggleMiniUnitGridOptions });
    }
  });

  return !onLoad ? null : (
    <FormGroup legendText="Options">
      <div className={`${prefix}--row`}>
        <div className={`${prefix}--col-sm-2`}>
          <Checkbox
            disabled={disabled}
            labelText={labelMaker('Vertical')}
            id="miniUnitVerticalBorders"
            checked={toggleMiniUnitGridOptions['miniUnitVerticalBorders']}
            onChange={(e) => {
              const changes = { ...toggleMiniUnitGridOptions };
              changes['miniUnitVerticalBorders'] = e;
              setToggleMiniUnitGridOptions(changes);
            }}
          />
        </div>
        <div className={`${prefix}--col-sm-2`}>
          <Checkbox
            disabled={disabled}
            labelText={labelMaker('Horizontal')}
            id="miniUnitHorizontalBorders"
            checked={toggleMiniUnitGridOptions['miniUnitHorizontalBorders']}
            onChange={(e) => {
              const changes = { ...toggleMiniUnitGridOptions };
              changes['miniUnitHorizontalBorders'] = e;
              setToggleMiniUnitGridOptions(changes);
            }}
          />
        </div>
        <div className={`${prefix}--col-sm-2`}>
          <Checkbox
            disabled={disabled}
            labelText={labelMaker('Cells')}
            id="miniUnitCells"
            checked={toggleMiniUnitGridOptions['miniUnitCells']}
            onChange={(e) => {
              const changes = { ...toggleMiniUnitGridOptions };
              changes['miniUnitCells'] = e;
              setToggleMiniUnitGridOptions(changes);
            }}
          />
        </div>
        <div className={`${prefix}--col-sm-2`}>
          <Checkbox
            disabled={disabled}
            labelText={labelMaker('Fix on scroll')}
            id="miniUnitFix"
            checked={toggleMiniUnitGridOptions['miniUnitFix']}
            onChange={(e) => {
              const changes = { ...toggleMiniUnitGridOptions };
              changes['miniUnitFix'] = e;
              setToggleMiniUnitGridOptions(changes);
            }}
          />
        </div>
      </div>
    </FormGroup>
  );
}

GridMiniUnitOptions.propTypes = {
  disabled: PropTypes.bool,
};

export { GridMiniUnitOptions };
