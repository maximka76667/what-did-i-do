import { CardInterface, PointInterface, UserInterface } from "../interfaces";

class Api {
  private _baseUrl;

  private _token: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this._baseUrl = baseUrl;
    this._token = "";
  }

  private static _checkResponse(res: Response) {
    if (res.ok) return res.json();
    return Promise.reject(new Error(`Error ${res.status}`));
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    })
      .then(Api._checkResponse)
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    })
      .then(Api._checkResponse);
  }

  setProfileInfo({ name, email }: UserInterface) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then(Api._checkResponse);
  }

  addCard({ date, points }: Omit<CardInterface, "_id">) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date,
        points,
      }),
    })
      .then(Api._checkResponse);
  }

  addPoint(cardId: string, point: Omit<PointInterface, "_id">) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        point,
      }),
    })
      .then(Api._checkResponse);
  }

  updatePoint(cardId: string, pointId: string, newName: string) {
    return fetch(`${this._baseUrl}/cards/${cardId}/points/${pointId}`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newName,
      }),
    })
  }

  deletePoint(cardId: string, pointId: string) {
    return fetch(`${this._baseUrl}/cards/${cardId}/points/${pointId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    })
  }

  deleteCard(cardId: string) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    })
      .then(Api._checkResponse);
  }

  changeToken(token: string) {
    this._token = `Bearer ${token}`
  }
}

const mainApi = new Api({
  baseUrl: "https://sleepy-journey-36086.herokuapp.com",
})

export default mainApi;
