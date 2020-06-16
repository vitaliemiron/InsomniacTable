export declare namespace ITableFilter {
  export interface IProps {
    children: JSX.Element;
    open: boolean;
    handleTooltipClose: (event: React.ChangeEvent<{}>) => void;
    returnData: (filter) => void;
    tableFilters: {
      field: string;
      label: string;
      options: {
        value: string;
      }[];
    }[];
  }
}
