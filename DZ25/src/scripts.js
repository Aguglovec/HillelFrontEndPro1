"use strict";

import $ from 'jquery';
import './styles.css';
import '../../common/css/normalize.css';
import '../../common/css/skeleton.css';
import '../../common/css/dark-theme.css';

import {UsersController} from './controller/UsersController.js';

// init();

$(() => {
    const _UsersController = new UsersController($('.mainBlock'));
});

