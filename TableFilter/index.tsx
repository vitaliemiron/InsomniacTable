// #region Global Imports
import React, { useState, useEffect, useMemo } from 'react';
import { ClickAwayListener, Checkbox } from '@material-ui/core';
// #endregion Global Imports

// #region Local Imports
import PlusIcon from '@Static/icons/buttons/plus-thin.svg';
import MinusIcon from '@Static/icons/buttons/minus-thin.svg';
import { theme } from '@Utils/Theme/';
import { SVGIcon } from '@Utils/SVGIcon';
import * as S from './styled';
// #endregion Local Imports

// #region Interface Imports
import { ITableFilter } from './TableFilter';
// #endregion Interface Imports

export const TableFilter: React.FunctionComponent<ITableFilter.IProps> = ({
  children,
  open,
  handleTooltipClose,
  tableFilters,
  returnData
}) => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [filter, setFilter] = useState<string[]>([]);
  const [preFilter, setPreFilter] = useState<string[]>([]);

  useEffect(() => {
    const array: string[] = [];
    setPreFilter(
      array.concat(
        ...tableFilters.map(({ options }) =>
          options.map(({ value }, idx: number) => `${value}_${idx}`)
        )
      )
    );
    setFilter(
      array.concat(
        ...tableFilters.map(({ options }) =>
          options.map(({ value }, idx: number) => `${value}_${idx}`)
        )
      )
    );
  }, [tableFilters]);

  useMemo(() => returnData(filter), [returnData, filter]);

  const manageData = (
    value: string,
    state: string[],
    setState: (array: string[]) => void
  ) => () => {
    const array = [...state];
    const index = state.indexOf(value);
    if (state.includes(value)) {
      array.splice(index, 1);
      setState(array);
    } else {
      setState([...state, value]);
    }
  };

  const removeUnsavedChanges = () => setPreFilter(filter);
  const clearFilter = () => setPreFilter([]);
  const updateFilter = () => setFilter(preFilter);

  return (
    <S.Tooltip
      arrow
      disableFocusListener
      disableHoverListener
      disableTouchListener
      interactive
      placement="bottom-start"
      PopperProps={{
        modifiers: {
          flip: {
            enabled: false
          }
        }
      }}
      open={open}
      title={
        <ClickAwayListener
          onClickAway={e => {
            handleTooltipClose(e);
            removeUnsavedChanges();
          }}
        >
          <S.TooltipContent>
            {tableFilters.map(({ field, label, options }, idx: number) => (
              <S.ExpansionPanel
                key={idx.toString() + label}
                expanded={expanded.includes(`panel${idx}`)}
                onChange={manageData(`panel${idx}`, expanded, setExpanded)}
              >
                <S.ExpansionPanelSummary
                  aria-controls={`panel${idx}bh-content`}
                  id={`panel${idx}bh-header`}
                >
                  <div style={{ marginRight: '1.3rem' }}>{label}</div>
                  <SVGIcon
                    svg={
                      expanded.includes(`panel${idx}`) ? (
                        <MinusIcon />
                      ) : (
                        <PlusIcon />
                      )
                    }
                    size={15}
                    fill={theme.colors.blue.base}
                  />
                </S.ExpansionPanelSummary>
                <S.ExpansionPanelDetails>
                  {options.map(({ value }, index: number) => (
                    <S.CheckboxContainer key={index.toString() + field}>
                      <S.FormControlLabel
                        control={
                          <Checkbox
                            checked={preFilter.includes(`${value}_${index}`)}
                            value={`${value}_${index}`}
                            color="primary"
                            onChange={manageData(
                              `${value}_${index}`,
                              preFilter,
                              setPreFilter
                            )}
                          />
                        }
                        label={value}
                        labelPlacement="end"
                        defaultChecked
                      />
                    </S.CheckboxContainer>
                  ))}
                </S.ExpansionPanelDetails>
              </S.ExpansionPanel>
            ))}
            <S.ButtonContainer>
              <S.WhiteButton onClick={clearFilter}>Clear All</S.WhiteButton>
              <S.BlueButton onClick={updateFilter}>Apply Filter</S.BlueButton>
            </S.ButtonContainer>
          </S.TooltipContent>
        </ClickAwayListener>
      }
    >
      {children}
    </S.Tooltip>
  );
};
