import axios from 'axios';

class Takosan {
  set options(options) {
    this.url = options.url;
    this.channel = options.channel;
    this.icon = options.icon;
    this.name = options.name;
  }

  privmsg() {
    let instance = axios.create({
      baseUrl: this.url
    });

    axios.post('/privmsg', {
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