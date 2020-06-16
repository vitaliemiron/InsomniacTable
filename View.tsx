import React from 'react';

import * as S from './styled';

export const reMap = (
  tableRows: { rowData: { field: string; value: string }[] }[],
  orderBy: string,
  order: string
) => {
  const stabilizedThis = tableRows.map(el => {
    const col: { [key: string]: string } = {};
    el.rowData.forEach((row: { field: string; value: string }) => {
      col[row.field] = row.value;
    });
    return col;
  });
  stabilizedThis.sort(
    (a: { [x: string]: string }, b: { [x: string]: string }) => {
      if (order === '') {
        if (a[orderBy] < b[orderBy]) {
          return 1;
        }
      }
      if (order === 'desc') {
        if (a[orderBy] > b[orderBy]) {
          return -1;
        }
      }
      if (order === 'asc') {
        if (a[orderBy] < b[orderBy]) {
          return -1;
        }
      }
      return 0;
    }
  );
  const res: { rowData: { field: string; value: string }[] }[] = [];
  stabilizedThis.forEach(el => {
    const arr = [];
    // TODO: resolve problem with ESLint
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(el)) {
      arr.push({ field: key, value });
    }
    res.push({ rowData: arr });
  });
  return res;
};

const headerSort = (
  field: string,
  order: string,
  setOrder: Function,
  orderBy: string,
  setOrderBy: Function
) => {
  if (order === undefined || order === '') {
    setOrder('asc');
    setOrderBy(field);
  }
  if (order === 'asc') {
    setOrder('desc');
    setOrderBy(field);
  }
  if (order === 'desc') {
    setOrder('');
    setOrderBy(field);
  }
};

const arrow = (orderBy: string, field: string, order: string): boolean => {
  if (orderBy === field && (order === 'asc' || 'desc')) {
    return true;
  }
  return false;
};

export const getHeader = (
  field: string,
  label: string,
  index: number,
  order: string,
  orderBy: string,
  setOrder: Function,
  setOrderBy: Function
): JSX.Element => {
  return (
    <>
      <S.HeadCell
        onClick={() => headerSort(field, order, setOrder, orderBy, setOrderBy)}
        key={field + index.toString()}
        align="left"
      >
        <S.StyledTableSortLabel
          order={order}
          active={arrow(orderBy, field, order)}
        >
          {label}
        </S.StyledTableSortLabel>
      </S.HeadCell>
    </>
  );
};

export const getRows = (
  rowData: { field: string; value: string }[],
  idx: number,
  tableHeaders: { field: string; label: string }[],
  filter: string[]
): JSX.Element => {
  return (
    <S.BodyRow key={idx.toString()}>
      {rowData
        .filter(({ value }) =>
          tableHeaders.map((tableHeader, index: number) =>
            filter.map(val => val.replace(/_[0-9]+/, '')).includes(value[index])
          )
        )
        .map(({ field, value }, index: number) => (
          <S.BodyCell key={field + index.toString()} align="left">
            {value}
          </S.BodyCell>
        ))}
    </S.BodyRow>
  );
};
