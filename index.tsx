import React, { Fragment, useState } from 'react';

import { SVGIcon } from '@Utils';
import { TableFilter } from './TableFilter';
import { Loader } from './Loader';
import * as S from './styled';
import { icons } from './icons';
import { getHeader, getRows, reMap } from './View';

import { ITable } from './Table';

export const Table: React.FunctionComponent<ITable.IProps> = ({
  tableFilters,
  tableHeaders,
  tableRows,
  loading
}): JSX.Element => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [order, setOrder] = React.useState('');
  const [orderBy, setOrderBy] = React.useState('gender');

  const getTableHeaderIdx = () => tableHeaders.map((val, idx) => idx);
  const compareFilter = (value: string) =>
    filter.map(val => val.replace(/_[0-9]+/, '')).includes(value);
  const getFilteredTableRows = () =>
    tableRows.filter(({ rowData }) => {
      const bool = getTableHeaderIdx().map(idx =>
        compareFilter(rowData[idx] ? rowData[idx].value : '')
      );

      if (bool.includes(false)) return false;
      return true;
    });

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };
  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };

  if (loading) return <Loader />;
  return (
    <>
      <S.Filter>
        {icons.map(({ id, svg, size, fill }, idx: number) => (
          <Fragment key={id}>
            <S.IconBox selected={idx === 0 && tooltipOpen}>
              {idx === 0 ? (
                <TableFilter
                  returnData={setFilter}
                  open={tooltipOpen}
                  handleTooltipClose={handleTooltipClose}
                  tableFilters={tableFilters}
                >
                  <div>
                    <SVGIcon
                      onClick={handleTooltipOpen}
                      svg={svg}
                      size={size}
                      fill={fill}
                    />
                  </div>
                </TableFilter>
              ) : (
                <SVGIcon svg={svg} size={size} fill={fill} />
              )}
            </S.IconBox>
            <S.Separator />
          </Fragment>
        ))}
      </S.Filter>
      <S.TableContainer>
        <S.Table aria-label="table">
          <S.Head>
            <S.HeadRow>
              {tableHeaders.map(({ field, label }, index: number) =>
                getHeader(
                  field,
                  label,
                  index,
                  order,
                  orderBy,
                  setOrder,
                  setOrderBy
                )
              )}
            </S.HeadRow>
          </S.Head>
          <S.Body>
            {reMap(getFilteredTableRows(), orderBy, order).map(
              ({ rowData }, idx: number): JSX.Element =>
                getRows(rowData, idx, tableHeaders, filter)
            )}
          </S.Body>
        </S.Table>
      </S.TableContainer>

      <S.MobileTableContainer>
        <S.MobileTable>
          {tableRows.map(
            ({ rowData }, idx: number): JSX.Element => (
              <S.MobileBody key={idx.toString()}>
                <S.MobileRow style={{ flexBasis: '50%' }}>
                  {tableHeaders.map(({ field, label }, index: number) => (
                    <S.MobileCell key={field + index.toString() + field}>
                      {label}
                    </S.MobileCell>
                  ))}
                </S.MobileRow>
                <S.MobileRow style={{ flexBasis: '50%' }}>
                  {rowData.map(({ field, value }, index: number) => (
                    <S.MobileCell key={field + index.toString() + field}>
                      {value}
                    </S.MobileCell>
                  ))}
                </S.MobileRow>
              </S.MobileBody>
            )
          )}
        </S.MobileTable>
      </S.MobileTableContainer>
    </>
  );
};
