import { UserDataInterface } from "../interfaces";

class Auth {
  baseUrl;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  static checkResponse(res: Response) {
    if (!res.ok) return Promise.reject(new Error(`Error ${res.status}`));
    return res.json();
  }

  register({ name, email, password }: UserDataInterface) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then(Auth.checkResponse);
  }

  login({ email, password }: UserDataInterface) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(Auth.checkResponse);
  }

  logout(token: UserDataInterface) {
    return fetch(`${this.baseUrl}/signout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(Auth.checkResponse);
  }

  getEmail(token: UserDataInterface) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(Auth.checkResponse);
  }
}

const auth = new Auth("https://urlhere");

export default auth;
