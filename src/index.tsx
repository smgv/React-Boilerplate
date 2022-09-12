import ReactDOM from 'react-dom';
import { store } from './redux';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
