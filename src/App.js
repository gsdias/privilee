import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Filters from './components/Filters';
import Gallery from './components/Gallery';
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Filters />
      <Gallery />
    </Provider>
  );
}

export default App;
