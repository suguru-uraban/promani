export default interface RootState {
  AdministratorModule: AdministratorState;
  ModalModule: ModalState;
  SharesModule: SharesState;
}

// Administrator state
export interface LoginState {
  email: string;
  password: string;
}

export interface RegisterState extends LoginState {
  employee_number: string;
  name: string;
  administrator_auth: number;
  company_auth: number;
  creator_auth: number;
}

export interface AdministratorState extends RegisterState {
  email_verified_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

// Modal state
export type ModalType = 'logout' | 'password' | null;

export interface ModalState {
  modalType: ModalType;
}

// Shares state
export interface SharesState {
  id: number;
  information: string;
  name: string;
  created_at: Date;
}
