/* import { isValidSudoku } from './../src/module.js';
import { isValidCol } from './../src/module.js';
import { isValidRow } from './../src/module.js';
import { isValidGrids } from './../src/module.js';
*/
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
  });
});
