import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
      <App />
     </Provider>
    </BrowserRouter >
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
