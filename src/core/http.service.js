export const http = {
  _host: 'http://localhost:3004',

  get(url, options) {
    const defaultOptions = {
      method: 'GET',
    };
    return this._fetch(url, {
      ...options,
      ...defaultOptions,
    });
  },

  delete(url, options) {
    const defaultOptions = {
      method: 'DELETE',
    };
    return this._fetch(url, {
      ...options,
      ...defaultOptions,
    });
  },

  post(url, options) {
    const defaultOptions = {
      method: 'POST',
    };

    return this._fetch(url, {
      ...options,
      ...defaultOptions,
    });
  },

  put(url, options) {
    const defaultOptions = {
      method: 'PUT',
    };

    return this._fetch(url, {
      ...options,
      ...defaultOptions,
    });
  },

  _fetch(url, options) {
    const input = `${this._host}${url}`;
    const body = JSON.stringify(options.body);
    const requestOptions = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body,
    }

    return fetch(input, requestOptions)
      .then(res => {
        if (res.status >= 200 && res.status <= 300) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch(err => Promise.reject(err))
  }
}