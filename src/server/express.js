const express = require('express');
const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');


const compiler = webpack(config);
const server = express();
const port = 3000;

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler,config.devServer);
server.use(webpackDevMiddleware);

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
server.use(webpackHotMiddleware);

const staticMiddleware = express.static('dist');
server.use(staticMiddleware);

server.get('/login',(req, res)=>{
  res.send({error:'¯\_(ツ)_/¯'});
})

server.listen(port, () => {
  console.log('I do what i can...Deal with it ¯\_(ツ)_/¯');
})
