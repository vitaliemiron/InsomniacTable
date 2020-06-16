// #region Global Imports
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';

import { rgba } from 'polished';

import {
  TableContainer as MuiTableContainer,
  Table as MuiTable,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableSortLabel,
  withStyles
} from '@material-ui/core';
import { ITable } from './Table';
// #endregion Global Imports

export const Filter = styled.div`
  margin-top: -2.6rem;
  display: flex;
  align-items: center;
`;

export const IconBox = styled.div`
  ${({ theme, selected }: { theme: Theme; selected: boolean }) => `
    background-color: ${
      selected ? rgba(theme.colors.blue.base, 0.1) : 'transparent'
    };
    cursor: pointer;
    padding: 1rem;
    margin: 0.975rem 0;
  `}
`;

export const Separator = styled.div`
  ${({ theme }) => `
    width: 1px;
    background: ${rgba(theme.colors.gray.base, 0.5)};
    height: 3.25rem;

    &:last-child {
      display: none;
    } 
  `}
`;

export const TableContainer = withStyles(theme => ({
  root: {
    padding: '1.3rem',
    backgroundColor: theme.colors.black.lighten100,
    borderRadius: theme.borderRadius.base,

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))(MuiTableContainer);

export const Table = withStyles({
  root: {
    minWidth: '65rem'
  }
})(MuiTable);

export const Head = withStyles({})(TableHead);

export const Body = withStyles({})(TableBody);

export const HeadRow = withStyles(theme => ({
  root: {
    backgroundColor: rgba(theme.colors.blue.lighten37, 0.15)
  }
}))(TableRow);

export const StyledTableSortLabel = styled(TableSortLabel)`
  ${({ order }: ITable.IStyled.IContainer) => `

  & .MuiTableSortLabel-icon {
    display: ${order === '' ? 'none' : 'unset'};
  }
  ,
  & .MuiTableSortLabel-iconDirectionAsc {
    ${order === 'asc' && 'transform: rotate(0deg)'};
  }
   & .MuiTableSortLabel-iconDirectionDesc {
     ${order === 'desc' && 'transform: rotate(180deg)'};
   }
    `}
`;

export const HeadCell = withStyles(theme => ({
  root: {
    lineHeight: '1.95rem',
    paddingTop: '0.975rem',
    paddingBottom: '0.975rem',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    borderBottom: `3px solid ${theme.colors.blue.lighten40}`
  }
}))(TableCell);

export const BodyRow = withStyles(theme => ({
  root: {
    borderBottom: 'none',

    '&:nth-child(even)': {
      backgroundColor: rgba(theme.colors.blue.lighten40, 0.2)
    }
  }
}))(TableRow);

export const BodyCell = withStyles({
  root: {
    lineHeight: '1.95rem',
    paddingTop: '0.975rem',
    paddingBottom: '0.975rem',
    fontSize: '1.6rem',
    borderBottom: 'none'
  }
})(TableCell);

export const MobileTableContainer = styled.div`
  ${({ theme }) => `
    padding: 1.3rem;
    background-color: ${theme.colors.black.lighten100};
    border-radius: ${theme.borderRadius.base};

    ${theme.breakpoints.up('md')} {
      display: none;
    }
  `}
`;

export const MobileTable = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const MobileBody = styled.div`
  display: flex;
  padding: 0.65rem;

  &:not(:last-child) {
    margin-bottom: 1.3rem;
  }
`;

export const MobileRow = styled.div`
  flex-basis: 50%;
`;

export const MobileCell = styled.div`
  ${({ theme }) => `
  &:first-child {
    font-weight: bold;
  }

    &:nth-child(odd) {
      background-color: ${theme.colors.blue.lighten70};
    }

    &:first-child {
      background-color: ${theme.colors.blue.lighten43};
    }
  `}
`;
