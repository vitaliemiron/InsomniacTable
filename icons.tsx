import React from 'react';
import FilterIcon from '@Static/icons/data-controls/filter.svg';
import ShowHideIcon from '@Static/icons/data-controls/show-hide.svg';
import SrotIcon from '@Static/icons/data-controls/sort.svg';

import { theme } from '@Utils';

export const icons = [
  {
    id: 0,
    svg: <FilterIcon />,
    size: 25,
    fill: theme.colors.gray.base
  },
  {
    id: 1,
    svg: <SrotIcon />,
    size: 25,
    fill: theme.colors.gray.base
  },
  {
    id: 2,
    svg: <ShowHideIcon />,
    size: 25,
    fill: theme.colors.gray.base
  }
];
