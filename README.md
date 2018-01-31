# Takosan.js

A Node.js wrapper for [Takosan](https://github.com/kentaro/takosan).

## Usage

```js
import Takosan from 'takosanjs';

takosan = new Takoasn({
  url: 'http://irc.example.com/4649',
  channel: '#example'
});
takosan.privmsg('Hello world.');
```
