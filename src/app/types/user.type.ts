export type TUser = {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
};

export type TSession = {
  readonly user: TUser;
  readonly token: string;
};