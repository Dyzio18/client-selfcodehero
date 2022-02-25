import { alertConstants } from '../_constants';

export const alertActions = {
  info,
  success,
  error,
  clear,
};

function info(message, title = '') {
  return { type: alertConstants.INFO, message, title };
}

function success(message, title = '') {
  return { type: alertConstants.SUCCESS, message, title };
}

function error(message, title = '') {
  return { type: alertConstants.ERROR, message, title };
}

function clear() {
  return { type: alertConstants.CLEAR };
}
