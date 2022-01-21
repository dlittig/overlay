import URL from 'url-parse';
import { info } from 'react-notification-system-redux';

import { store } from '../store';

/**
 * Notifies the user about some circumstance
 * @param {*} content The message to be displayed
 * @param {*} time duration in milli seconds
 */
const notify = (content, time) => {
  const notificationOpts = {
    message: content,
    position: 'br',
    autoDismiss: time,
  };

  store.dispatch(info(notificationOpts));
};

const getQueryParameters = (url) => {
  let parameters = new URL(url).query;

  // Normalize string to start with the parameter
  if (parameters.startsWith('?')) {
    parameters = parameters.replace('?', '');
  }

  const list = {};
  parameters.split('&').forEach((item) => {
    const touple = item.split('=');
    const [key, value] = touple;
    list[key] = value;
  });

  return list;
};

export { getQueryParameters, notify };
