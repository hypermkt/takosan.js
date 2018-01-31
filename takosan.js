'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Takosan {
  constructor(options) {
    this.url = options.url;
    this.channel = options.channel;
    this.icon = options.icon;
    this.name = options.name;
  }

  privmsg() {
    let client = _axios2.default.create({
      baseUrl: this.url
    });

    client.post('/privmsg', {
      channel: this.channel,
      message: this.message,
      name: this.name,
      icon: this.icon
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }
}

exports.default = Takosan;
