import React from 'react';
import './css/App.css';
import './css/search.css';
import './css/cards.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import PageRouter from './components/router';

export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

export default class extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <PageRouter />
        </BrowserRouter>
      </div>
    );
  }
}
