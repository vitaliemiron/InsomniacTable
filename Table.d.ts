export declare namespace ITable {
  export interface IProps {
    tableFilters: {
      field: string;
      label: string;
      options: {
        value: string;
      }[];
    }[];
    tableHeaders: { field: string; label: string }[];
    tableRows: { rowData: { field: string; value: string }[] }[];
    loading: boolean;
  }

  export declare namespace IStyled {
    export interface IContainer {
      order?: string;
    }
  }
}
