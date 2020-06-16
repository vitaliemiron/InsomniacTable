// #region Global Imports
import styled from 'styled-components';
import { rgba } from 'polished';
import {
  Tooltip as MuiTooltip,
  ExpansionPanel as MuiExpansionPanel,
  ExpansionPanelSummary as MuiExpansionPanelSummary,
  ExpansionPanelDetails as MuiExpansionPanelDetails,
  FormControlLabel as MuiFormControlLabel,
  Button as MuiButton,
  withStyles
} from '@material-ui/core';
// #endregion Global Imports

export const Tooltip = withStyles(theme => ({
  arrow: {
    color: theme.colors.black.lighten100
  },
  tooltip: {
    backgroundColor: theme.colors.black.lighten100,
    border: `1px solid ${theme.colors.blue.lighten60}`,
    borderRadius: '4px',
    boxShadow: `1px 2px 5px 0px ${rgba(theme.colors.gray.base, 0.2)}`,
    marginTop: '0.7rem',
    padding: 'unset'
  }
}))(MuiTooltip);

export const TooltipContent = styled.div`
  padding: 20.05px 13px 27.35px;
`;

export const ExpansionPanel = withStyles(theme => ({
  root: {
    fontSize: '1.6rem',
    color: theme.colors.black.base,
    borderBottom: `1px solid ${theme.colors.blue.lighten40}`,
    minWidth: '25.6rem',
    boxShadow: 'unset',
    minHeight: '20px',

    '&$expanded': {
      margin: 'auto'
    },
    '&:before': {
      display: 'none'
    }
  },
  expanded: {}
}))(MuiExpansionPanel);

export const ExpansionPanelSummary = withStyles(() => ({
  root: {
    padding: 'unset',
    margin: 'unset',
    minHeight: 'auto !important'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    minHeight: 'auto !important',
    margin: '7.5px 11px 7.5px 13px',
    '&$expanded': {
      margin: '7.5px 11px 7.5px 13px'
    }
  },
  expanded: {}
}))(MuiExpansionPanelSummary);

export const ExpansionPanelDetails = withStyles(() => ({
  root: {
    display: 'block',
    padding: 'unset'
  }
}))(MuiExpansionPanelDetails);

export const CheckboxContainer = styled.div`
  margin: -6px 38.5px 0px 26.5px;
`;

export const FormControlLabel = withStyles(() => ({
  root: {}
}))(MuiFormControlLabel);

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
`;

export const BlueButton = withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.black.lighten100,
    padding: '0.6rem 1.3rem 0.7rem 1.3rem',
    letterSpacing: '0.1rem',
    lineHeight: '2.6rem',
    textTransform: 'unset',
    borderRadius: '4px',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    backgroundColor: theme.colors.blue.base,

    '&:hover': {
      backgroundColor: theme.colors.blue.base
    }
  }
}))(MuiButton);

export const WhiteButton = withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.blue.base,
    padding: '1.35rem 0 1.25rem 0.05rem',
    letterSpacing: '0.1rem',
    lineHeight: '1.3rem',
    textTransform: 'uppercase',
    borderRadius: '4px',
    fontSize: '1.3rem',
    backgroundColor: theme.colors.black.lighten100,

    '&:hover': {
      backgroundColor: theme.colors.black.lighten100
    }
  }
}))(MuiButton);
