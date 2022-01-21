import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './containers/App';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('App')
  );
};

render();
