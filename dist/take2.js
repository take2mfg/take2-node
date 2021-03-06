'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.buildOptions = buildOptions;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _request2 = require('request');

var _request3 = _interopRequireDefault(_request2);

var _rsvp = require('rsvp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_HOST = "take2-loopback.herokuapp.com";
var DEFAULT_PORT = 80;
var BASE_PATH = "/api/v1";

function buildOptions(method, path, data) {
  var url = ['http://', DEFAULT_HOST, ':', DEFAULT_PORT, BASE_PATH, path].join('');

  var options = {
    url: url,
    method: method
  };

  if (data) {
    options.json = data;
  }

  if (this.headers) {
    options.headers = this.headers;
  }

  return options;
}

var methods = {
  orders: {
    list: function list() {
      return this.get('orders');
    },
    retrieve: function retrieve(id) {
      return this.get('orders/' + id);
    }
  },
  tags: {
    list: function list() {
      return this.get('tags');
    },
    retrieve: function retrieve(id) {
      return this.get('tags/' + id);
    }
  },
  manufacturingTags: {
    list: function list() {
      return this.get('manufacturingTags');
    },
    retrieve: function retrieve(id) {
      return this.get('manufacturingTags/' + id);
    }
  },
  carts: {
    retrieve: function retrieve(id) {
      return this.get('carts/' + id + '?filter[include]=items');
    },
    create: function create(data) {
      return this.post('carts/createFromVisitorToken', data);
    }
  },
  customizables: {
    list: function list() {
      return this.get('customizables');
    },
    retrieve: function retrieve(id) {
      return this.get('customizables/' + id);
    },
    create: function create(data) {
      return this.post('customizables', data);
    },
    update: function update(id, data) {
      return this.put('customizables/' + id, data);
    },
    destroy: function destroy(id) {
      return this.del('customizables/' + id);
    }
  },
  products: {
    list: function list() {
      return this.get('products?filter[include]=tags&filter[include]=manufacturingTags');
    },
    retrieve: function retrieve(id) {
      return this.get('products/' + id);
    },
    create: function create(data) {
      return this.post('products', data);
    },
    update: function update(id, data) {
      return this.put('products/' + id, data);
    },
    destroy: function destroy(id) {
      return this.del('products/' + id);
    }
  },
  templates: {
    list: function list() {
      return this.get('templates?filter[include]=tags');
    },
    retrieve: function retrieve(id) {
      return this.get('templates/' + id);
    },
    create: function create(data) {
      return this.post('templates', data);
    },
    update: function update(id, data) {
      return this.put('templates/' + id, data);
    },
    destroy: function destroy(id) {
      return this.del('templates/' + id);
    }
  },
  visitorTokens: {
    create: function create(data) {
      return this.post('visitorTokens', data);
    }
  }
};

function Take2(key, options) {
  var _this = this;

  if (!(this instanceof Take2)) {
    return new Take2(key, options);
  }

  this.options = options || {};

  if (!key) {
    throw new Error('Missing API Key');
  }

  if (this.options.spyable) {
    this._spyable = true;
    this.REQUESTS = [];
  }

  this._key = key;

  this.headers = {
    'Authorization': 'Bearer ' + key,
    'Content-Type': 'application/json'
  };

  _lodash2.default.each(methods, function (block, resource) {
    _this[resource] = _this[resource] || {};
    _lodash2.default.each(block, function (method, key) {
      _this[resource][key] = method.bind(_this);
    });
  });
}

Take2.prototype = {

  constructor: Take2,

  buildOptions: function buildOptions(method, path, data) {
    var url = this.options.TAKE2_API_HOST;

    if (!url) {
      url = ['http://', this.options.DEFAULT_HOST || DEFAULT_HOST, ':', this.options.DEFAULT_PORT || DEFAULT_PORT, this.options.BASE_PATH || BASE_PATH].join('');
    }

    url += '/' + path;

    var options = {
      url: url,
      method: method
    };

    if (data) {
      options.json = data;
    }

    if (this.headers) {
      options.headers = this.headers;
    }

    return options;
  },
  get: function get(path, data) {
    return this.request('GET', path, data);
  },
  post: function post(path, data) {
    return this.request('POST', path, data);
  },
  put: function put(path, data) {
    return this.request('PUT', path, data);
  },
  del: function del(path, data) {
    return this.request('DELETE', path, data);
  },
  request: function request(method, path, data) {
    var options = this.buildOptions.apply(this, arguments);

    if (this._spyable) {
      this.LAST_REQUEST = options;
      this.REQUESTS.push(options);
    } else {
      return new _rsvp.Promise(function (resolve, reject) {
        (0, _request3.default)(options, function (err, res, body) {
          var error = void 0;

          if (err) {
            error = err;
          } else if (body && body.error) {
            error = JSON.stringify(body.error);
          }

          if (error) {
            return reject(error);
          }

          try {
            if ((typeof body === 'undefined' ? 'undefined' : _typeof(body)) === "object") {
              resolve(body);
            } else {
              var _data = JSON.parse(body);
              resolve(_data);
            }
          } catch (e) {
            reject('Unabled to parse response body.');
          }
        });
      });
    }
  }
};

exports.default = Take2;