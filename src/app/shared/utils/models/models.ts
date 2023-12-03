export interface FilterInputModel {
    fields: {
      searchField: {
        formControlName: string;
      };
      filterField: FilterField[];
    };
  }
  
  interface FilterField {
    label: string;
    fieldType: 'input' | 'date' | 'select';
    formControlName: string;
    options?: any[];
  }
  
  interface Option {
   id: number | string;
   name: string
  }
