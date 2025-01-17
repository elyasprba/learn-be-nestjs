export class RegisterUserRequest {
  username: string;
  password: string;
  name: string;
}

export class UserResponse {
  id: string;
  username: string;
  name: string;
  token?: string;
}
