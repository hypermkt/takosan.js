# Takosan.js

A Node.js wrapper for [Takosan](https://github.com/kentaro/takosan).

## Installation

```sh
npm install --save takosan
```

## Usage

```js
import Takosan from 'takosan';

let takosan = new Takosan({
  url: 'http://irc.example.com:4649',
  channel: '#example'
});
takosan.privmsg('Hello world.');
```
