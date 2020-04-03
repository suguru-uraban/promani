export default interface RootState {
  AdministratorModule: AdministratorState;
}

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
