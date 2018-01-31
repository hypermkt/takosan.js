import axios from 'axios';

class Takosan {
  constructor(options) {
    this.url = options.url;
    this.channel = options.channel;
    this.icon = options.icon;
    this.name = options.name;
  }

  privmsg() {
    let client = axios.create({
      baseURL: this.url
    });

    client.post('/privmsg', {
      channel: this.channel,
      message: this.message,
      name: this.name,
      icon: this.icon
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }
}

export default Takosan;

