import 'webpack-hot-middleware/client';
import './index.html';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import sume from './sum';


console.log('hello world');

const a = () => {
  console.log('hello from es6');
}
console.log(a());

$(() => {
  console.log('jquery is ready');
  $('#root')
  .append(`<button type="button" class="btn btn-danger">JQUERY RULES</button>`)
  .append(`<div class="alert alert-danger" role="alert">
  <h2>'¯\_(ツ)_/¯'</h2>
  <h1>deal with it!</h1>
  </div>`);
$('.alert').hide();
$('.btn').click((event) => {
  $('.alert').toggle();
})
})
