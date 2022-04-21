import { UserDataInterface } from "../interfaces";

class Auth {
  private _baseUrl;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  private static _checkResponse(res: Response) {
    if (!res.ok) return Promise.reject(new Error(`Error ${res.status}`));
    return res.json();
  }

  register({ name, email, password }: UserDataInterface) {
    return fetch(`${this._baseUrl}/signup`, {
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
      .then(Auth._checkResponse);
  }

  login({ email, password }: UserDataInterface) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(Auth._checkResponse);
  }

  logout(token: UserDataInterface) {
    return fetch(`${this._baseUrl}/signout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(Auth._checkResponse);
  }

  getEmail(token: UserDataInterface) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(Auth._checkResponse);
  }
}

const auth = new Auth("https://urlhere");

export default auth;
