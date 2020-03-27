export default interface RootState {
  AdministratorModule: AdministratorState;
}

type AuthEnum = 'edit' | 'view' | 'none';

export interface LoginState {
  email: string;
  password: string;
}

export interface RegisterState extends LoginState {
  employee_number: string;
  name: string;
  enum_administrator_auth: AuthEnum;
  enum_company_auth: AuthEnum;
  enum_creator_auth: AuthEnum;
}

export interface AdministratorState extends RegisterState {
  email_verified_at: Date | null;
  created_at: Date;
  updated_at: Date;
}
