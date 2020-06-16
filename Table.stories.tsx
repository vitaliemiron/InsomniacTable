// #region Global Imports
import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { mockHeaders, mockRows } from './mock';
// #endregion Global Imports

// #region Local Imports
import { Table } from './index';
// #endregion Local Imports

export default {
  component: Table,
  title: 'Table',
  decorators: [withKnobs]
};

export const Default = () => (
  <Table
    tableFilters={[]}
    tableHeaders={mockHeaders}
    tableRows={mockRows}
    loading={boolean('Loading', false)}
  />
);
