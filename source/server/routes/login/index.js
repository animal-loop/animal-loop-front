import express from 'express';
import loginCtrl from '../../controllers/login/';

const login = express.Router();

login.get('/', loginCtrl.get);
login.post('/', loginCtrl.login);

export default {
  login,
};