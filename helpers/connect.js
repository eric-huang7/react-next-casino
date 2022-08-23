import axios from 'axios';

class Connect {
  constructor() {
    let service = axios.create({
      withCredentials: true
    });
    service.defaults.headers = {
      'Content-Type': 'application/json'
    }
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    switch (error?.response?.status) {
      case 401:
        // this.redirectTo(document, '/')
        // break;
      case 404:
        // this.redirectTo(document, '/404')
        // break;
      default:
        // this.redirectTo(document, '/500')
        console.log('Axios error', error)
        break;
    }
    return Promise.reject(error)
  }

  redirectTo = (document, path) => {
    document.location = path
  }

  get(path, config, callback) {
    return this.service.get(path, config).then(
      (response) => callback(response.status, response.data)
    );
  }

  patch(path, payload, config, callback) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
      ...config
    }).then((response) => callback(response.status, response.data));
  }

  post(path, payload, config, callback) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
      ...config
    }).then((response) => callback(response.status, response.data));
  }

  put(path, payload, config, callback) {
    return this.service.request({
      method: 'PUT',
      url: path,
      responseType: 'json',
      data: payload,
      ...config
    }).then((response) => callback(response.status, response.data));
  }

  delete(path, config, callback) {
    return this.service.request({
      method: 'DELETE',
      url: path,
      responseType: 'json',
      ...config
    }).then((response) => callback(response.status, response.data));
  }
}

export default new Connect;
