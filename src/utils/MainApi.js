class MainApi{
  constructor(options){
    this._url = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res){
    if(res.ok){
      return res.json();
    } else {
      console.log(`${res.status}`);
    }
  }

  register(password, email, name) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        password: password,
        email: email,
        name: name
      }),
    })
      .then(this._checkResponse);
  }

  login(password, email) {
    console.log(password, email)
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    })
      .then(this._checkResponse);
    }

  getUserInfo(token){
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${token}`
      },
    })
    .then(this._checkResponse);
  }

  updateUserInfo(user, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email
      })
    })
    .then(this._checkResponse);
  }

  getLikedMovies(token) {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        ...this.headers,
        'Authorization': `Bearer ${token}`
      },
    })
    .then(this._checkResponse);
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkResponse);
  }

  likeMovie(movie, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkResponse);
  }
  
}

const mainApi = new MainApi({
  baseUrl: 'https://api.nicemovie.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;