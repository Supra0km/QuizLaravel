import * as Popper from '@popperjs/core'
window.Popper = Popper

import $ from 'jquery';
window.$ = $

import 'bootstrap'

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Inputmask from 'inputmask';