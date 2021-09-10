export interface ElectronState {
  isLoading: {
    [key: string]: boolean;
  };
}

export enum ElectronIpcRequestTypes {
  SELECT_FILES = "SELECT_FILES",
}

export type ElectronIpcRequestAction = {
  payload: {
    requestType: ElectronIpcRequestTypes;
    data?: any;
    id?: string | number;
  };
};
