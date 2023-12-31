export class  AuthModel {
  authToken?: string;
  refreshToken?: string;
  expiresIn?: number; // Date;

  setAuth(auth: any) {
    this.authToken = auth.authToken;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
  }
}
