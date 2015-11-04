import _ from 'lodash';
import _request from 'request';
import { Promise } from 'rsvp';

const DEFAULT_HOST = "api.take2.co";
const DEFAULT_PORT = 443;
const BASE_PATH    = "/v1/";

export function buildOptions(method, path, data) {
  let url = [
    'http://', DEFAULT_HOST, ':', DEFAULT_PORT, BASE_PATH, path
  ].join('');

  let options = {
    url    : url,
    method : method
  };

  if(data) {
    options.json = data;
  }

  if(this.headers) {
    options.headers = this.headers;
  }

  return options;
}

const methods = {
  products: {
    list()           { return this.get('products'); },
    retrieve(id)     { return this.get('products/'+id); },
    create(data)     { return this.post('products', data); },
    update(id, data) { return this.put('products/'+id, data); },
    destroy(id)      { return this.del('products/'+id); }
  }
};

function Take2(key, options) {
  options = options || {};

  if(!(this instanceof Take2)) {
    return new Take2(key, options);
  }

  if(!key) {
    throw new Error('Missing API Key');
  }

  if(options.spyable) {
    this._spyable = true;
    this.REQUESTS = [];
  }

  this._key = key;

  this.headers = {
    'Authorization' : `Basic ${key}`,
    'Content-Type'  : 'application/json'
  };

  _.each(methods, (block, resource) => {
    this[resource] = this[resource] || {};
    _.each(block, (method, key) => {
      this[resource][key] = method.bind(this);
    });
  });
}

Take2.prototype = {

  constructor: Take2,

  buildOptions(method, path, data) {
    let url = [
      'http://', DEFAULT_HOST, ':', DEFAULT_PORT, BASE_PATH, path
    ].join('');

    let options = {
      url    : url,
      method : method
    };

    if(data) {
      options.json = data;
    }

    if(this.headers) {
      options.headers = this.headers;
    }

    return options;
  },
  
  get(path, data) {
    return this.request('GET', path, data);
  },

  post(path, data) {
    return this.request('POST', path, data);
  },

  put(path, data) {
    return this.request('PUT', path, data);
  },

  del(path, data) {
    return this.request('DELETE', path, data);
  },

  request(method, path, data) {
    let options = this.buildOptions(...arguments);

    if(this._spyable) {
      this.LAST_REQUEST = options;
      this.REQUESTS.push(options);
    } else {
      return new Promise((resolve, reject) => {
        _request(options, function(err, res, body) {
          if(err) {
            return reject(err);
          } else {
            return resolve(body);
          }
        });
      });
    }

  }
}

module.exports = Take2;